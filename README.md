# Mushinkan

This repository contains a clean Next.js reimplementation of the Mushinkan
website redesign, with the Claude export preserved as reference material.

Current status:

- The Claude redesign export has been preserved under `references/claude-export/`.
- The original ZIP remains at the project root and was copied into `references/claude-export/raw/`.
- Extracted export files are stored unchanged in `references/claude-export/extracted/`.
- Current-site Markdown content has been copied into `content/current-site/`.
- Split HTML reference frames were created under `references/claude-export/pages/`.
- A production-oriented Next.js App Router implementation now exists under `src/`.
- The implementation uses typed local data, shared components, CSS Modules, and global design tokens.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Structure

- `src/app/` - Next.js App Router routes.
- `src/components/` - shared UI components.
- `src/data/` - temporary typed local data source.
- `src/lib/` - small shared utilities.
- `docs/project/` - project notes, export audit, and page index.
- `docs/pages/` - future page-level planning.
- `docs/design-system/` - future design system notes.
- `docs/decisions/` - architecture and process decisions.
- `content/current-site/` - copied Markdown content from the current site export.
- `references/claude-export/raw/` - preserved Claude export ZIP.
- `references/claude-export/extracted/` - unchanged extracted export files.
- `references/claude-export/pages/` - split reference HTML files for individual screens.
- `references/claude-export/screenshots/` - reference screenshots from the export.
- `references/current-site/` - future current-site references.
- `assets/` - future production image, logo, and icon assets.
- `prompts/` - future prompt notes.
- `archive/` - future archived material.

See `docs/project/export-audit.md` and `docs/project/page-index.md` before using the Claude export as implementation input.
See `docs/project/implementation-report.md` for the current implementation status.
