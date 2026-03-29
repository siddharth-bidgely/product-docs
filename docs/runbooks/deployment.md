# Deployment Runbook

## Backend (bidgely-quill)

| Branch | Target |
|--------|--------|
| `master` | Non-prod CMS |
| `db_migration` | Non-prod DB migrations |
| `release` | Production CMS |
| `db_migration_prod` | Production DB migrations |

## Frontend (bidgely-quill-fe)

Deployed via Jenkins pipeline: Docker build -> S3 upload -> CloudFront.

## Documentation Site

Auto-deployed via GitHub Actions on merge to `main` in this repository.
