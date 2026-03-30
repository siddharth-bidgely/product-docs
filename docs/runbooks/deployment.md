# Deployment

!!! note "Coming soon"

    Step-by-step deployment procedures for DETO (bidgely-quill, bidgely-quill-fe, and related infrastructure) are not published in this site yet.

    **Where to look today:** use your team’s internal runbooks, Jenkins job documentation, and release checklists. High-level branch targets that teams often use:

    | Area | Typical branches (confirm with your team) |
    |------|---------------------------------------------|
    | Backend (bidgely-quill) | `master` / non-prod, `release` / production (plus DB migration branches where applicable) |
    | Frontend (bidgely-quill-fe) | CI/CD pipeline (e.g. Docker → S3 → CloudFront) |
    | This documentation site | Repository’s GitHub Actions workflow on `main` |

    When internal runbooks are ready to be externalized, this page will link to them or inline the approved steps.
