# KB Platform Exporters

This directory contains standalone, client-compatible TypeScript exporters for **Zensical** and **ProperDocs (with MaterialX theme)**.

The exporters are designed to plug directly into the monorepo architecture of `kb-platform` and can run entirely in the browser using the client-side `ProjectExportBundle` (as defined in `api.ts`).

---

## Output Pack Structure

When run, the exporters generate a standalone ZIP file containing a compile-ready static site directory structured as follows:

```text
.
├── mkdocs.yml              # Configured for Zensical (Material theme) or ProperDocs (MaterialX theme)
└── docs/
    ├── index.md            # Welcome landing page with auto-generated Table of Contents
    ├── category-slug-1/    # Markdown files organized inside category directories
    │   ├── article-1.md
    │   └── article-2.md
    ├── category-slug-2/
    │   └── article-3.md
    ├── standalone-page.md  # Uncategorized articles saved at the root of docs/
    └── media/              # Media files, downloaded and restructured
        ├── brand/
        │   └── logo.png
        └── image-1.jpg
```

### Path Refactoring Features
* **Link Adjustments**: Image URLs (e.g. `![](/media/brand/logo.png)` or `<img src="/media/pic.png">`) are automatically refactored to relative paths (`../media/brand/logo.png` or `media/pic.png`) based on the folder depth of the article.
* **Navigation Tree (`nav`)**: A clean `nav:` block is compiled into `mkdocs.yml` matching chapter names and order indices.
* **Orphan (Hidden) Pages**: Articles marked as `hidden` are written to disk but excluded from the `nav` sidebar navigation, matching standard static site behavior.

---

## Integration Guide

To integrate these exporters into `./private/kb-platform/`:

### Step 1: Copy Code Files
Copy the following files into the admin app directory, e.g. under `apps/admin/lib/exporters/`:
* `kb-platform-exporters/index.ts` -> `apps/admin/lib/exporters/index.ts`

### Step 2: Install or Link Dependencies
Ensure `fflate` is installed in the target package (it is already present in `apps/admin/package.json`).

### Step 3: Update the UI (`apps/admin/components/ProjectHub.tsx`)

Import the export functions at the top of the component:

```typescript
import { exportToZensical, exportToProperDocs } from '../lib/exporters';
```

Inside the component, define handlers to perform the export and trigger the browser file download:

```typescript
const handleExportToZensical = async (project: Project) => {
  if (!token) return;
  try {
    setBusyProjectId(project.id);
    
    // 1. Fetch the project export bundle using the existing API
    const bundle = await exportProject(project.id, token);
    
    // 2. Generate the Zensical-compatible ZIP pack bytes
    const zipBytes = exportToZensical(bundle);
    
    // 3. Download the ZIP file in the browser
    const fileName = `${project.slug || project.id}-zensical.zip`;
    downloadBytes(zipBytes, fileName, 'application/zip');
  } catch (err) {
    console.error('[ProjectHub] Failed to export to Zensical:', err);
    setHubMessage(err instanceof Error ? err.message : 'Failed to export to Zensical');
  } finally {
    setBusyProjectId(null);
  }
};

const handleExportToProperDocs = async (project: Project) => {
  if (!token) return;
  try {
    setBusyProjectId(project.id);
    
    // 1. Fetch the project export bundle using the existing API
    const bundle = await exportProject(project.id, token);
    
    // 2. Generate the ProperDocs/MaterialX-compatible ZIP pack bytes
    const zipBytes = exportToProperDocs(bundle);
    
    // 3. Download the ZIP file in the browser
    const fileName = `${project.slug || project.id}-properdocs.zip`;
    downloadBytes(zipBytes, fileName, 'application/zip');
  } catch (err) {
    console.error('[ProjectHub] Failed to export to ProperDocs:', err);
    setHubMessage(err instanceof Error ? err.message : 'Failed to export to ProperDocs');
  } finally {
    setBusyProjectId(null);
  }
};
```

Add buttons or menu options in the dashboard UI referencing these handlers to let administrators export portals with a single click.
