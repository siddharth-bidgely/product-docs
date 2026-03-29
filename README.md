# product-docs

Central documentation site for the Bidgely Quill platform. Built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme with an embedded RAG-powered chat widget.

This repository is the single source of truth for product documentation across all services. Documentation is kept in sync through two mechanisms:
1. **Seed script** -- Parses source repos and generates initial docs (API tables, data models, env vars, feature summaries)
2. **DocGen pipeline** -- Automatically updates docs when PRs are merged on source repos

## How It Works

```
Developer merges PR on bidgely-quill
        |
        v
DocGen pipeline (AWS CodeBuild)
  - Analyzes code changes with LLM
  - Synthesizes doc updates
  - Merges into markdown via AST (deterministic)
        |
        v
Opens PR on this repo (product-docs)
        |
        v
Human reviews and merges
        |
        v
GitHub Actions builds and deploys MkDocs site
        |
        v
Users browse docs + ask questions via chat widget
  (backed by RAG: LanceDB + Ollama/Claude)
```

## Site Structure

```
docs/
├── index.md                        # Landing page
├── _data/
│   └── feature-map.yml             # Code path -> doc file mapping (used by DocGen + seed)
├── assets/
│   ├── js/chat-widget.js           # Embedded RAG chat widget
│   └── css/chat-widget.css         # Chat widget styles
├── getting-started/
│   ├── overview.md                 # Platform overview
│   └── architecture.md             # System architecture with mermaid diagrams
├── services/
│   ├── quill/                      # bidgely-quill (Strapi 5 CMS backend)
│   │   ├── index.md                # Service overview with domain listing
│   │   ├── utility.md              # API endpoints + data models (auto-generated)
│   │   ├── recommendation.md       # API endpoints + data models (auto-generated)
│   │   ├── config-registry.md      # ...
│   │   ├── survey.md
│   │   ├── workflow.md
│   │   ├── data-scenario.md
│   │   ├── migration.md
│   │   ├── content-management.md
│   │   └── environment.md
│   └── quill-fe/                   # bidgely-quill-fe (React 19 frontend)
│       ├── index.md
│       ├── utility.md              # API integration tables (auto-generated)
│       ├── recommendation.md
│       ├── config-registry.md
│       ├── survey.md
│       ├── workflow.md
│       ├── pilot.md
│       ├── content-management.md
│       └── api-integration.md
├── features/                       # Cross-service feature docs
│   ├── utility-management.md       # Feature summary (LLM-generated)
│   ├── recommendation-authoring.md
│   ├── config-registry.md
│   ├── survey-builder.md
│   ├── workflow-engine.md
│   ├── content-management.md
│   ├── data-scenarios.md
│   └── migration.md
├── runbooks/
│   ├── deployment.md
│   ├── troubleshooting.md
│   └── database.md
└── reference/
    ├── data-models.md              # All 26 content-type schemas (auto-generated)
    ├── api-catalog.md              # All 213 API endpoints (auto-generated)
    └── environment-variables.md    # All env vars from both repos (auto-generated)
```

### Documentation Layers

| Layer | Purpose | Auto-generated? |
|-------|---------|-----------------|
| **Services** | Per-repo, per-domain technical docs (APIs, data models) | Yes -- from seed script + pipeline |
| **Features** | Cross-service behavioral docs (how BE + FE work together) | Yes -- feature summaries via LLM |
| **Runbooks** | Operational guides (deployment, troubleshooting, DB) | Manual |
| **Reference** | Consolidated catalogs (all APIs, all data models, all env vars) | Yes -- from seed script |

### Feature Map

`docs/_data/feature-map.yml` is the routing table that maps code paths to documentation files. Both the seed script and the DocGen pipeline use it to determine which docs to update when code changes.

```yaml
features:
  utility-management:
    display_name: "Utility / Pilot Management"
    confluence_page_ids: [815431723]      # Confluence product spec pages
    context_docs:                          # In-repo docs for LLM context
      - repo: bidgely-quill-fe
        paths: [README.md]
    service_docs:
      - repo: bidgely-quill
        doc_path: services/quill/utility.md
        code_paths: [src/api/utility/, ...]
      - repo: bidgely-quill-fe
        doc_path: services/quill-fe/utility.md
        code_paths: [src/features/utility/, ...]
    cross_doc: features/utility-management.md
```

### Chat Widget

An embedded chat interface (floating button, bottom-right) that lets users ask questions about the documentation. Powered by a RAG pipeline:

1. All docs are indexed into a LanceDB vector store on the chat server
2. User question is embedded and matched against doc chunks
3. Top results + question sent to an LLM (Ollama locally, Claude in prod)
4. Answer returned with links to source pages

The chat widget is vanilla JS/CSS with no build step, loaded via MkDocs `extra_javascript`/`extra_css`.

## Local Development

### Prerequisites

- Python 3.9+ (for MkDocs)
- bidgely-doc-gen chat server running (for the chat widget to work)

### Setup

```bash
git clone https://github.com/bidgely/product-docs.git
cd product-docs
pip install -r requirements.txt
```

### Preview Locally

```bash
# Terminal 1: Start the chat API server (from bidgely-doc-gen repo)
cd ../bidgely-doc-gen && npm run serve

# Terminal 2: Start MkDocs dev server
mkdocs serve
```

Opens at `http://127.0.0.1:8000` with live reload. The chat widget connects to `http://localhost:3001`.

### Build

```bash
mkdocs build --strict
```

Generates static HTML in `site/`. The `--strict` flag treats warnings (broken links, missing pages) as errors.

### Re-seed Documentation

To regenerate all auto-generated content from the current source code:

```bash
cd ../bidgely-doc-gen && npm run seed
```

This updates service docs, reference pages, and (with an LLM available) feature summaries.

## Deployment

### GitHub Pages (automated)

On push to `main`, GitHub Actions (`.github/workflows/deploy-docs.yml`) builds and deploys the site.

### Manual (S3 + CloudFront)

```bash
mkdocs build --strict
aws s3 sync site/ s3://your-docs-bucket --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Contributing

### Manual Edits

You can edit any markdown file directly. The `getting-started/`, `runbooks/`, overview sections, and introductory content are primarily maintained manually.

### Auto-Generated Sections

Sections under headers like `## API Endpoints`, `## Data Model`, `## API Integration`, and `## Feature Summary` are maintained by the seed script and DocGen pipeline. You can edit these, but the next seed/pipeline run may overwrite your changes for those specific sections. Content outside these headers (Overview, Permissions, Workflow, "See also") is preserved.

### Adding a New Service

1. Create a new directory under `docs/services/<service-name>/`
2. Add markdown files for each domain
3. Update `docs/_data/feature-map.yml` with code-path-to-doc mappings
4. Update `mkdocs.yml` nav section
5. Add the webhook to the new repo's GitHub settings
6. Run `npm run seed` from bidgely-doc-gen to populate initial content

## Related Repositories

- [bidgely-doc-gen](https://github.com/bidgely/bidgely-doc-gen) -- DocGen pipeline + Seed script + Chat API
- [bidgely-quill](https://github.com/bidgely/bidgely-quill) -- Strapi 5 CMS backend (source repo)
- [bidgely-quill-fe](https://github.com/bidgely/bidgely-quill-fe) -- React 19 admin frontend (source repo)
