import { zipSync, strToU8 } from 'fflate';

// Types duplicated from @flum/types for standalone usage and easy copy-paste integration
export interface Project {
  id: string;
  slug: string;
  name: string;
  description?: string;
  color?: string;
  thumbnailUrl?: string;
  isPublic: boolean;
  isDefault: boolean;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectExportBundle {
  version: number;
  exportedAt: string;
  project: Project;
  chapters: Array<{
    slug: string;
    title: string;
    orderIndex: number;
  }>;
  articles: Array<{
    slug: string;
    title: string;
    summary?: string;
    content: string;
    mediaManifest: string[];
    orderIndex: number;
    chapterSlug?: string | null;
    publishedAt?: string | null;
    hidden?: boolean;
  }>;
  media?: Array<{
    folder: string;
    filename: string;
    extension: string;
    width?: number;
    height?: number;
    filesize?: number;
    contentType?: string;
    bytesBase64: string; // raw file bytes, base64-encoded
  }>;
}

/**
 * Robust base64 to Uint8Array decoder working in both browser and Node.js environments.
 */
function base64ToUint8Array(base64: string): Uint8Array {
  if (typeof window !== 'undefined' && typeof window.atob === 'function') {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
  
  if (typeof Buffer !== 'undefined') {
    return new Uint8Array(Buffer.from(base64, 'base64'));
  }
  
  // Standalone pure JS decoder fallback
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const lookup = new Uint8Array(256);
  for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }
  
  let bufferLength = base64.length * 0.75;
  if (base64.endsWith('==')) {
    bufferLength -= 2;
  } else if (base64.endsWith('=')) {
    bufferLength -= 1;
  }
  
  const bytes = new Uint8Array(bufferLength);
  let p = 0;
  for (let i = 0; i < base64.length; i += 4) {
    const base64Dec1 = lookup[base64.charCodeAt(i)];
    const base64Dec2 = lookup[base64.charCodeAt(i + 1)];
    const base64Dec3 = lookup[base64.charCodeAt(i + 2)];
    const base64Dec4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = (base64Dec1 << 2) | (base64Dec2 >> 4);
    if (p < bufferLength) bytes[p++] = ((base64Dec2 & 15) << 4) | (base64Dec3 >> 2);
    if (p < bufferLength) bytes[p++] = ((base64Dec3 & 3) << 6) | (base64Dec4 & 63);
  }
  return bytes;
}

/**
 * A lightweight, dependency-free serializer to format JS objects into clean YAML.
 * Specially formatted to support standard MkDocs configuration styles (like nav and list formatting).
 */
function jsToYaml(data: any, indent = 0): string {
  const spaces = ' '.repeat(indent);
  
  if (data === null || data === undefined) {
    return 'null';
  }
  
  if (typeof data === 'string') {
    // If string has special characters or contains newlines, quote/format it safely
    if (/[#:*?[\]{}|>&!%@`]|^[ \t]|[ \t]$/.test(data) || data.includes('\n')) {
      return JSON.stringify(data);
    }
    return data;
  }
  
  if (typeof data === 'number' || typeof data === 'boolean') {
    return String(data);
  }
  
  if (Array.isArray(data)) {
    if (data.length === 0) return '[]';
    return data
      .map((item) => {
        if (typeof item === 'object') {
          const yamlItem = jsToYaml(item, indent + 2);
          return `${spaces}- ${yamlItem.trimStart()}`;
        }
        return `${spaces}- ${jsToYaml(item, indent)}`;
      })
      .join('\n');
  }
  
  if (typeof data === 'object') {
    const keys = Object.keys(data);
    if (keys.length === 0) return '{}';
    return keys
      .map((key) => {
        const val = data[key];
        const formattedKey = /[#:*?[\]{}|>&!%@`]/.test(key) ? JSON.stringify(key) : key;
        
        if (typeof val === 'object' && val !== null) {
          return `${spaces}${formattedKey}:\n${jsToYaml(val, indent + 2)}`;
        }
        return `${spaces}${formattedKey}: ${jsToYaml(val, 0)}`;
      })
      .join('\n');
  }
  
  return '';
}

/**
 * Rewrite image and link references in Markdown pointing to `/media/` or `media/`
 * to point to their relative folder locations based on folder depth of the document.
 */
export function adjustMediaPaths(content: string, depth: number): string {
  const relativePrefix = depth === 1 ? '../media/' : 'media/';
  
  let result = content;
  
  // 1. Match Markdown images: ![alt](url)
  result = result.replace(/!\[([^\]]*)\]\((.*?)\)/g, (match, alt, url) => {
    if (url.startsWith('/media/')) {
      return `![${alt}](${relativePrefix}${url.slice('/media/'.length)})`;
    } else if (url.startsWith('media/')) {
      return `![${alt}](${relativePrefix}${url.slice('media/'.length)})`;
    }
    return match;
  });
  
  // 2. Match Markdown links to media: [text](url)
  result = result.replace(/\[([^\]]*)\]\((.*?)\)/g, (match, text, url) => {
    // Avoid double matching markdown images (since they start with !)
    if (match.startsWith('!')) return match;
    
    if (url.startsWith('/media/')) {
      return `[${text}](${relativePrefix}${url.slice('/media/'.length)})`;
    } else if (url.startsWith('media/')) {
      return `[${text}](${relativePrefix}${url.slice('media/'.length)})`;
    }
    return match;
  });
  
  // 3. Match HTML images: <img src="url"> or <img ... src="url" ...>
  result = result.replace(/<img\s+([^>]*?)src=["'](.*?)["']([^>]*?)>/gi, (match, before, url, after) => {
    if (url.startsWith('/media/')) {
      return `<img ${before}src="${relativePrefix}${url.slice('/media/'.length)}"${after}>`;
    } else if (url.startsWith('media/')) {
      return `<img ${before}src="${relativePrefix}${url.slice('media/'.length)}"${after}>`;
    }
    return match;
  });
  
  return result;
}

/**
 * Generates an index.md welcome page at the root of the site containing project details
 * and an auto-generated table of contents linking to all chapters and articles.
 */
function generateWelcomePage(bundle: ProjectExportBundle): string {
  const projectName = bundle.project.name;
  const projectDesc = bundle.project.description || 'Welcome to the documentation portal.';
  
  // Sort chapters
  const sortedChapters = [...bundle.chapters].sort((a, b) => a.orderIndex - b.orderIndex);
  
  // Group articles by chapter
  const articlesByChapter = new Map<string, typeof bundle.articles>();
  const rootArticles: typeof bundle.articles = [];
  
  bundle.articles.forEach((art) => {
    if (art.hidden) return; // Exclude hidden articles from table of contents list
    if (art.chapterSlug) {
      const list = articlesByChapter.get(art.chapterSlug) || [];
      list.push(art);
      articlesByChapter.set(art.chapterSlug, list);
    } else {
      rootArticles.push(art);
    }
  });
  
  // Sort articles inside each chapter
  articlesByChapter.forEach((list) => {
    list.sort((a, b) => a.orderIndex - b.orderIndex);
  });
  rootArticles.sort((a, b) => a.orderIndex - b.orderIndex);
  
  let tocMarkdown = '## Table of Contents\n\n';
  
  // Add root level articles first
  if (rootArticles.length > 0) {
    rootArticles.forEach((art) => {
      tocMarkdown += `* [${art.title}](${art.slug}.md)\n`;
    });
    tocMarkdown += '\n';
  }
  
  // Add chapter groupings
  sortedChapters.forEach((chap) => {
    const chapArticles = articlesByChapter.get(chap.slug) || [];
    if (chapArticles.length === 0) return;
    
    tocMarkdown += `### ${chap.title}\n\n`;
    chapArticles.forEach((art) => {
      tocMarkdown += `* [${art.title}](${chap.slug}/${art.slug}.md)\n`;
    });
    tocMarkdown += '\n';
  });
  
  return `# ${projectName}\n\n${projectDesc}\n\n${tocMarkdown}`;
}

/**
 * Build the MkDocs/Zensical/ProperDocs navigation structure from the export bundle.
 * Returns the nav list formatted for mkdocs.yml.
 */
function buildNavigation(bundle: ProjectExportBundle): any[] {
  const nav: any[] = [];
  
  // Always start with the welcome landing page
  nav.push({ Home: 'index.md' });
  
  // Sort chapters and group articles
  const sortedChapters = [...bundle.chapters].sort((a, b) => a.orderIndex - b.orderIndex);
  const articlesByChapter = new Map<string, typeof bundle.articles>();
  const rootArticles: typeof bundle.articles = [];
  
  bundle.articles.forEach((art) => {
    if (art.hidden) return; // Exclude hidden articles from the sidebar navigation
    if (art.chapterSlug) {
      const list = articlesByChapter.get(art.chapterSlug) || [];
      list.push(art);
      articlesByChapter.set(art.chapterSlug, list);
    } else {
      rootArticles.push(art);
    }
  });
  
  // Add root level articles immediately after Home
  rootArticles
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .forEach((art) => {
      nav.push({ [art.title]: `${art.slug}.md` });
    });
  
  // Add chapter folders
  sortedChapters.forEach((chap) => {
    const chapArticles = articlesByChapter.get(chap.slug) || [];
    if (chapArticles.length === 0) return; // Skip empty chapters in navigation
    
    const sortedArtList = [...chapArticles].sort((a, b) => a.orderIndex - b.orderIndex);
    const chapterNavList = sortedArtList.map((art) => ({
      [art.title]: `${chap.slug}/${art.slug}.md`
    }));
    
    nav.push({ [chap.title]: chapterNavList });
  });
  
  return nav;
}

/**
 * Shared logic to compile files and directories for the export ZIP.
 */
function buildZipFileMap(
  bundle: ProjectExportBundle,
  configYaml: string
): Record<string, Uint8Array> {
  const files: Record<string, Uint8Array> = {};
  
  // 1. Add configuration file
  files['mkdocs.yml'] = strToU8(configYaml);
  
  // 2. Add auto-generated index welcome page
  const indexMarkdown = generateWelcomePage(bundle);
  files['docs/index.md'] = strToU8(indexMarkdown);
  
  // 3. Add all articles (markdown pages)
  bundle.articles.forEach((article) => {
    const hasChapter = !!article.chapterSlug;
    const depth = hasChapter ? 1 : 0;
    
    // Adjust media image URLs in markdown so they are relative and local
    const adjustedContent = adjustMediaPaths(article.content, depth);
    
    const path = hasChapter
      ? `docs/${article.chapterSlug}/${article.slug}.md`
      : `docs/${article.slug}.md`;
      
    files[path] = strToU8(adjustedContent);
  });
  
  // 4. Add all media asset files (binary content decoded from base64)
  if (Array.isArray(bundle.media)) {
    bundle.media.forEach((item) => {
      const folder = item.folder || '';
      const filename = item.filename;
      const path = folder
        ? `docs/media/${folder}/${filename}`
        : `docs/media/${filename}`;
        
      files[path] = base64ToUint8Array(item.bytesBase64);
    });
  }
  
  return files;
}

/**
 * EXPORT FOR ZENSICAL
 * Exports the knowledge base project into a ZIP bundle suitable for deployment with Zensical.
 */
export function exportToZensical(bundle: ProjectExportBundle): Uint8Array {
  const nav = buildNavigation(bundle);
  
  const config = {
    site_name: bundle.project.name,
    site_description: bundle.project.description || '',
    theme: {
      name: 'material',
      features: [
        'navigation.top',
        'navigation.indexes',
        'content.code.copy',
        'content.code.select'
      ],
      palette: [
        {
          media: '(prefers-color-scheme: light)',
          scheme: 'default',
          primary: 'indigo',
          accent: 'indigo'
        },
        {
          media: '(prefers-color-scheme: dark)',
          scheme: 'slate',
          primary: 'indigo',
          accent: 'orange'
        }
      ]
    },
    nav,
    markdown_extensions: [
      'admonition',
      'attr_list',
      'md_in_html',
      'tables',
      'pymdownx.details',
      'pymdownx.superfences',
      'pymdownx.tasklist',
      {
        toc: {
          permalink: true
        }
      }
    ]
  };
  
  const configYaml = jsToYaml(config);
  const files = buildZipFileMap(bundle, configYaml);
  
  // Package into zip bytes using fflate
  return zipSync(files, { level: 6 });
}

/**
 * EXPORT FOR PROPERDOCS + MATERIALX
 * Exports the knowledge base project into a ZIP bundle suitable for deployment with ProperDocs.
 */
export function exportToProperDocs(bundle: ProjectExportBundle): Uint8Array {
  const nav = buildNavigation(bundle);
  
  const config = {
    site_name: bundle.project.name,
    site_description: bundle.project.description || '',
    theme: {
      name: 'materialx',
      features: [
        'navigation.top',
        'navigation.indexes',
        'content.code.copy',
        'content.code.select'
      ],
      palette: {
        scheme: 'default',
        primary: 'black',
        accent: 'red'
      }
    },
    nav,
    markdown_extensions: [
      'admonition',
      'attr_list',
      'md_in_html',
      'tables',
      'pymdownx.details',
      'pymdownx.superfences',
      'pymdownx.tasklist',
      {
        toc: {
          permalink: true
        }
      }
    ]
  };
  
  const configYaml = jsToYaml(config);
  const files = buildZipFileMap(bundle, configYaml);
  
  // Package into zip bytes using fflate
  return zipSync(files, { level: 6 });
}
