# IBM Granite Documentation

Source for the IBM Granite documentation site at **https://www.ibm.com/granite/docs**, built with [Docusaurus 3](https://docusaurus.io/) and published via GitHub Pages.

Every merge to `main` triggers CI, which builds and deploys the site automatically. There is no staging branch or versioning — `main` is always the live site.

---

## Repository layout

```
granite/docs/          # MDX source for all pages
  models/              # Model family pages (Granite 4, embedding, vision, etc.)
  run/                 # Serving guides (Ollama, vLLM, LM Studio, partners)
  use-cases/           # Cookbooks and recipes
  fine-tune/           # Fine-tuning guides
  model-standards/     # Naming guidance, signature verification
  responsible-ai/      # Responsible AI page
src/
  components/          # Reusable MDX components (Card, Accordion, etc.)
  theme/               # Swizzled Docusaurus theme components
  css/custom.css       # Global style overrides
static/                # Fonts, images, analytics script
sidebars.ts            # Sidebar structure for Docs and Cookbooks tabs
docusaurus.config.ts   # Site configuration
```

---

## Local development

### Prerequisites

- Node.js 20 or later

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm start
```

The site is available at http://localhost:3000/granite/docs/.

### Build

```bash
npm run build
```

A production build is written to `build/`.

---

## Contributing

### Add or update a page

1. Create or edit an `.mdx` file under `granite/docs/`.
2. To add a new page, also add its path to `sidebars.ts` in the appropriate section.
3. Test locally with `npm start` before opening a PR.

### Frontmatter

Every page should have at minimum:

```mdx
---
title: "My Page"
description: "One sentence describing what this page covers."
---
```

Optional fields:

| Field | Purpose |
|---|---|
| `sidebar_label` | Override the sidebar display name (defaults to `title`) |
| `displayed_sidebar: null` | Suppress the page from all sidebars (page still exists at its URL) |

### Components

The following components are available in MDX files without any import:

| Component | Purpose |
|---|---|
| `<Card title="..." href="..." icon="...">` | Linked card with optional icon |
| `<CardGroup cols={2}>` | Grid container for `<Card>` elements |
| `<Accordion title="...">` | Collapsible section |
| `<AccordionGroup>` | Container for multiple `<Accordion>` elements |
| `<CodeGroup>` | Tabbed code block group |

For simple callouts, prefer native Docusaurus admonitions:

```mdx
:::note
This is a note.
:::

:::warning
This is a warning.
:::
```

### Submit a pull request

1. Create a branch: `git checkout -b feature/my-change`
2. Make your changes and test locally with `npm start`
3. Open a PR against `main`

PRs require at least one maintainer approval and a passing CI build before merging.
