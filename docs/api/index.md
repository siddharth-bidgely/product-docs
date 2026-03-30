# API Reference

This section is the **integration surface** for DETO: OpenAPI-backed APIs consumed by other Bidgely services, partners, and automation. **DETO web app users** (PM, CS, admins) should start with [Getting Started](../index.md) and [Features](../features/project-management.md) instead — those pages describe the product and UI, not HTTP contracts.

DETO exposes several core services. The CMS APIs documented here cover recommendations, surveys, configuration, data scenarios, and migrations.

## Services

### 1. CMS
Content Management System APIs for managing recommendations, surveys, configurations, and data scenarios.

**Base URLs:**
- Production: `https://cms.bidgely.com/api`
- Non-Production: `https://cms-nonprod.bidgely.com/api`

**Authentication:** Requires authentication via Bearer token (`Authorization: Bearer <api_token>`).

| Feature | Description | Reference |
|---------|-------------|-----------|
| Recommendations | Retrieve recommendation models, metadata, and insight definitions | [View](cms/recommendations-api.md) |
| Survey | Retrieve survey templates and update timestamps | [View](cms/survey-api.md) |
| Data Scenarios | Clone and manage data scenarios | [View](cms/data-scenario-api.md) |
| Migration | Trigger data migrations and check job status | [View](cms/migration-api.md) |
| Config Registry | Manage configurations, lookups, and templates | [View](cms/config-registry-api.md) |

### 2. Environment Manager
Infrastructure provisioning and environment management APIs. *(Documentation coming soon)*

### 3. Proxy Pulse
Configuration management and project orchestration APIs. *(Documentation coming soon)*
