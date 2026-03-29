# API Reference

DETO's CMS service exposes external APIs for consumption by other Bidgely services (e.g., Data Server, customer-facing applications).

## Base URL

| Environment | Base URL |
|-------------|----------|
| Production | `https://cms.bidgely.com/api` |
| Non-Production | `https://cms-nonprod.bidgely.com/api` |

## Authentication

All API endpoints require authentication via Bearer token unless explicitly marked otherwise.

```
Authorization: Bearer <api_token>
```

## Available APIs

| API | Description | Docs |
|-----|-------------|------|
| Recommendations | Retrieve recommendation models, metadata, and insight definitions | [View](recommendations-api.md) |
| Survey | Retrieve survey templates and update timestamps | [View](survey-api.md) |
| Data Scenarios | Clone and manage data scenarios | [View](data-scenario-api.md) |
| Migration | Trigger data migrations and check job status | [View](migration-api.md) |
| Config Registry | Manage configurations, lookups, and templates | [View](config-registry-api.md) |
