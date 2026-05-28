import * as fs from 'fs';
import * as path from 'path';
import { unzipSync, strFromU8 } from 'fflate';
import { exportToZensical, exportToProperDocs } from './index.ts';
import type { ProjectExportBundle } from './index.ts';

function main() {
  const args = process.argv.slice(2);
  let zipPath = '';
  let zensicalDir = '';
  let properdocsDir = '';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--zip' && i + 1 < args.length) {
      zipPath = args[i + 1];
      i++;
    } else if (args[i] === '--zensical' && i + 1 < args.length) {
      zensicalDir = args[i + 1];
      i++;
    } else if (args[i] === '--properdocs' && i + 1 < args.length) {
      properdocsDir = args[i + 1];
      i++;
    }
  }

  if (!zipPath) {
    console.error('Error: --zip <path> is required.');
    console.error('Usage: flumproj2md --zip <path> [--zensical <path>] [--properdocs <path>]');
    process.exit(1);
  }

  if (!zensicalDir && !properdocsDir) {
    console.error('Error: At least one of --zensical <path> or --properdocs <path> must be specified.');
    process.exit(1);
  }

  console.log(`Reading ZIP archive: ${zipPath}`);
  if (!fs.existsSync(zipPath)) {
    console.error(`Error: ZIP file not found at: ${zipPath}`);
    process.exit(1);
  }

  const zipBuffer = fs.readFileSync(zipPath);
  let zipFiles: Record<string, Uint8Array>;
  try {
    zipFiles = unzipSync(new Uint8Array(zipBuffer));
  } catch (err) {
    console.error(`Error: Failed to parse ZIP archive: ${err}`);
    process.exit(1);
  }

  // 1. Parse project.json
  const projectFileKey = Object.keys(zipFiles).find(k => k.endsWith('project.json'));
  if (!projectFileKey) {
    console.error('Error: project.json not found in the ZIP archive.');
    process.exit(1);
  }
  const projectData = JSON.parse(strFromU8(zipFiles[projectFileKey]));
  console.log(`Loaded project: "${projectData.name}" (${projectData.slug})`);

  // 2. Parse manifest.json
  const manifestFileKey = Object.keys(zipFiles).find(k => k.endsWith('manifest.json'));
  if (!manifestFileKey) {
    console.error('Error: manifest.json not found in the ZIP archive.');
    process.exit(1);
  }
  const manifestData = JSON.parse(strFromU8(zipFiles[manifestFileKey]));
  console.log(`Loaded ${manifestData.chapters?.length || 0} chapters, ${manifestData.articles?.length || 0} articles from manifest.`);

  // Find root directory prefix inside ZIP (if any)
  const projectRootInZip = projectFileKey.substring(0, projectFileKey.lastIndexOf('project.json'));

  // 3. Load article contents from markdown files
  console.log('Loading article contents...');
  const articles = manifestData.articles.map((art: any) => {
    const relativePath = art.chapterSlug
      ? `articles/${art.chapterSlug}/${art.slug}.md`
      : `articles/${art.slug}.md`;
    
    const fullZipPath = projectRootInZip + relativePath;
    const articleBytes = zipFiles[fullZipPath];
    
    if (!articleBytes) {
      console.warn(`Warning: Article markdown file not found in ZIP: ${fullZipPath}`);
    }
    
    return {
      slug: art.slug,
      title: art.title,
      summary: art.summary,
      content: articleBytes ? strFromU8(articleBytes) : '',
      mediaManifest: art.mediaManifest || [],
      orderIndex: art.orderIndex ?? 0,
      chapterSlug: art.chapterSlug,
      publishedAt: art.publishedAt,
      hidden: Boolean(art.hidden)
    };
  });

  // 4. Load media assets
  console.log('Loading media files...');
  const media: any[] = [];
  const mediaPrefix = projectRootInZip + 'media/';

  Object.keys(zipFiles).forEach(key => {
    if (key.startsWith(mediaPrefix) && key !== mediaPrefix && !key.endsWith('.DS_Store') && zipFiles[key].length > 0) {
      const relativePath = key.substring(mediaPrefix.length);
      const lastSlash = relativePath.lastIndexOf('/');
      const folder = lastSlash >= 0 ? relativePath.substring(0, lastSlash) : '';
      const filename = lastSlash >= 0 ? relativePath.substring(lastSlash + 1) : relativePath;
      const extension = filename.split('.').pop() || '';
      
      const bytes = zipFiles[key];
      const bytesBase64 = Buffer.from(bytes).toString('base64');
      
      media.push({
        folder,
        filename,
        extension,
        bytesBase64
      });
    }
  });
  console.log(`Loaded ${media.length} media assets.`);

  // 5. Assemble ProjectExportBundle
  const bundle: ProjectExportBundle = {
    version: 2,
    exportedAt: new Date().toISOString(),
    project: {
      id: projectData.id || 'imported-proj',
      slug: projectData.slug || 'imported-slug',
      name: projectData.name,
      description: projectData.description || '',
      isPublic: projectData.isPublic ?? true,
      isDefault: projectData.isDefault ?? false,
      createdAt: projectData.createdAt || new Date().toISOString(),
      updatedAt: projectData.updatedAt || new Date().toISOString()
    },
    chapters: manifestData.chapters || [],
    articles,
    media
  };

  // 6. Write target directories
  const writeProjectToDisk = (files: Record<string, Uint8Array>, targetDir: string) => {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Clear out targetDir's docs/ and mkdocs.yml if they exist to perform a clean export
    const mkdocsPath = path.join(targetDir, 'mkdocs.yml');
    if (fs.existsSync(mkdocsPath)) {
      fs.rmSync(mkdocsPath, { force: true });
    }
    const docsPath = path.join(targetDir, 'docs');
    if (fs.existsSync(docsPath)) {
      fs.rmSync(docsPath, { recursive: true, force: true });
    }

    Object.keys(files).forEach(filePath => {
      const fullPath = path.join(targetDir, filePath);
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(fullPath, Buffer.from(files[filePath]));
    });
  };

  if (zensicalDir) {
    console.log(`Exporting to Zensical project at: ${zensicalDir}...`);
    const zensicalZipBytes = exportToZensical(bundle);
    const zensicalFiles = unzipSync(zensicalZipBytes);
    writeProjectToDisk(zensicalFiles, zensicalDir);
    console.log('Zensical project created successfully.');
  }

  if (properdocsDir) {
    console.log(`Exporting to ProperDocs+MaterialX project at: ${properdocsDir}...`);
    const properDocsZipBytes = exportToProperDocs(bundle);
    const properDocsFiles = unzipSync(properDocsZipBytes);
    writeProjectToDisk(properDocsFiles, properdocsDir);
    console.log('ProperDocs project created successfully.');
  }

  console.log('All exports completed successfully!');
}

main();
