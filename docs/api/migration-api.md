# Data Migration API

# Data Migration API

## Overview
The Data Migration API allows internal Bidgely services to trigger and monitor large‑scale data migration jobs.  It is consumed by the Data Server, customer‑facing applications, and other internal services that need to orchestrate migration workflows and retrieve job status.

## Authentication
All endpoints require a valid Bearer token:

```http
Authorization: Bearer <api_token>
```

> **Note:** The token must be issued with the `api::migration.is-internal-request` policy, which grants access to migration operations.

## Endpoints

### POST /migration/run
**Description:** Initiates a new data migration job and returns the job manifest.

| Parameter | Type | Description |
|-----------|------|-------------|
| `jobType` | string | Type of migration (e.g., `full`, `incremental`). |
| `pilotId` | string | Identifier of the pilot project initiating the job. |
| `jobs` | object | JSON payload describing the specific migration tasks. |

> **Access Control:** Requires `api::migration.is-internal-request` policy.

**Example Response:**
```json
{
  "jobId": "mig-2026-03-29-001",          // Unique identifier for the migration job
  "pilotId": "pilot-12345",               // Identifier of the pilot project
  "jobType": "full",                      // Type of migration requested
  "jobStatus": "PENDING",                 // Current status of the job (PENDING, RUNNING, FAILED, COMPLETED)
  "progress": 0,                          // Percentage of job completed (0–100)
  "jobs": {                               // Original job payload sent in the request
    "taskA": { "source": "db1", "target": "db2" },
    "taskB": { "source": "db3", "target": "db4" }
  },
  "error": null,                          // Error details if the job failed (null when no error)
  "result": null                          // Result payload once the job completes (null until COMPLETED)
}
```

---

### GET /migration/jobs/:jobId
**Description:** Retrieves the current status and details of a previously submitted migration job.

| Parameter | Type | Description |
|-----------|------|-------------|
| `jobId` | string | Unique identifier of the migration job to query. |

> **Access Control:** Requires `api::migration.is-internal-request` policy.

**Example Response:**
```json
{
  "jobId": "mig-2026-03-29-001",          // Unique identifier for the migration job
  "pilotId": "pilot-12345",               // Identifier of the pilot project
  "jobType": "full",                      // Type of migration requested
  "jobStatus": "RUNNING",                 // Current status of the job (PENDING, RUNNING, FAILED, COMPLETED)
  "progress": 45,                         // Percentage of job completed (0–100)
  "jobs": {                               // Original job payload sent in the request
    "taskA": { "source": "db1", "target": "db2" },
    "taskB": { "source": "db3", "target": "db4" }
  },
  "error": null,                          // Error details if the job failed (null when no error)
  "result": null                          // Result payload once the job completes (null until COMPLETED)
}
```

> **Note:** When `jobStatus` is `FAILED`, the `error` field will contain a JSON object with error details.  
> When `jobStatus` is `COMPLETED`, the `result` field will contain the outcome of the migration (e.g., counts of records migrated, summary statistics).