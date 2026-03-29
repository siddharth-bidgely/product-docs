# Config Registry API

# Config Registry API

## Overview
The Config Registry API exposes the configuration metadata that powers Bidgely’s energy‑management services. It allows internal services (e.g., Data Server, recommendation engine, customer‑facing applications) to read, create, update, and audit configuration definitions, lookup tables, and templates. The API is designed for machine‑to‑machine consumption and is secured with OAuth 2.0 bearer tokens.

## Authentication
All endpoints require a valid Bearer token:

```http
Authorization: Bearer <api_token>
```

No endpoint deviates from this default authentication scheme.

---

## Endpoints

### GET `/config-registry-configs/config-types`
**Description:** Retrieves the list of supported configuration types.  
**Access Control:** Requires `api::config-registry-config.config-view-policy` (authenticated users with read access).  

**Example Response:**
```json
{
  "configTypes": [
    "metering",          // Metering related configuration
    "pricing",           // Pricing / rate plan configuration
    "utility",           // Utility‑specific configuration
    "customer",          // Customer‑specific configuration
    "system"             // System‑wide configuration
  ]
}
```

---

### POST `/config-registry-config/v1/:id/submit`
**Description:** Submits a configuration for review.  
**Path Parameters:**
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `id`      | string | The unique identifier of the configuration to submit. |

**Access Control:** Requires `api::config-registry-config.config-submit-policy`.  

**Example Response:**
```json
{
  "id": "cfg-12345",                     // Unique configuration ID
  "status": "SUBMITTED",                 // Current verification status
  "submittedAt": "2026-03-28T14:32:00Z", // ISO‑8601 timestamp of submission
  "submittedBy": "alice@example.com"     // Email of the user who submitted
}
```

---

### POST `/config-registry-config/v1/:id/approve`
**Description:** Approves a configuration that has passed validation.  
**Path Parameters:**
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `id`      | string | The unique identifier of the configuration to approve. |

**Access Control:** Requires `api::config-registry-config.config-approve-policy`.  

**Example Response:**
```json
{
  "id": "cfg-12345",                     // Unique configuration ID
  "status": "APPROVED",                  // Updated verification status
  "approvedAt": "2026-03-29T09:15:00Z",  // ISO‑8601 timestamp of approval
  "approvedBy": "bob@example.com"        // Email of the approver
}
```

---

### POST `/config-registry-config/v1/:id/reject`
**Description:** Rejects a configuration that failed validation.  
**Path Parameters:**
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `id`      | string | The unique identifier of the configuration to reject. |

**Access Control:** Requires `api::config-registry-config.config-approve-policy`.  

**Example Response:**
```json
{
  "id": "cfg-12345",                     // Unique configuration ID
  "status": "REJECTED",                  // Updated verification status
  "rejectedAt": "2026-03-29T10:05:00Z",  // ISO‑8601 timestamp of rejection
  "rejectedBy": "bob@example.com",       // Email of the reviewer
  "rejectionReason": "Invalid JSON schema" // Reason for rejection
}
```

---

### POST `/config-registry-config/v1/:id/reopen`
**Description:** Reopens a rejected configuration for re‑submission.  
**Path Parameters:**
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `id`      | string | The unique identifier of the configuration to reopen. |

**Access Control:** Requires `api::config-registry-config.config-reopen-policy`.  

**Example Response:**
```json
{
  "id": "cfg-12345",                     // Unique configuration ID
  "status": "REOPENED",                  // Updated verification status
  "reopenedAt": "2026-03-29T11:20:00Z",  // ISO‑8601 timestamp of reopening
  "reopenedBy": "alice@example.com"      // Email of the user who reopened
}
```

---

### POST `/config-registry/validate`
**Description:** Validates a configuration payload against the registry schema.  
**Access Control:** Requires `api::config-registry-config.config-view-policy`.  

**Example Response:**
```json
{
  "isValid": true,                       // Indicates if the payload is valid
  "errors": []                           // Array of validation error messages (empty if valid)
}
```

---

### GET `/config-registry/v1/configs/:id`
**Description:** Retrieves a single configuration by its ID.  
**Path Parameters:**
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `id`      | string | The unique identifier of the configuration. |

**Access Control:** Requires `api::config-registry-config.config-view-policy`.  

**Example Response:**
```json
{
  "configKey": "metering.frequency",          // Unique key for the configuration
  "configType": "metering",                   // Category of the configuration
  "verificationStatus": "APPROVED",           // Current verification status
  "deprecated": false,                        // Indicates if the config is deprecated
  "displayName": "Metering Frequency",        // Human‑readable name
  "configDocumentation": "Defines how often meters poll data.", // Detailed description
  "configDataType": "INTEGER",                // Data type of the configuration value
  "defaultValue": "15",                       // Default value as a string
  "possibleValues": [5, 10, 15, 30],          // Allowed numeric values
  "validationRule": { "min": 5, "max": 60 },  // JSON validation rule
  "version": 3,                               // Current version number
  "lookups": [],                              // Related lookup IDs (empty if none)
  "parentConfig": null,                       // Parent configuration ID (null if none)
  "childConfigs": [],                         // Child configuration IDs
  "relatedConfigs": [],                       // Related configuration IDs
  "duplicateConfigs": [],                     // Duplicate configuration IDs
  "dependsUpon": [],                          // Configs this one depends on
  "createdByUser": "alice@example.com",       // Email of the creator
  "isMandatoryField": true,                   // Must be present in all relevant contexts
  "utilityConfigurationRequired": false,      // Requires utility‑specific config
  "specialHandlingRequired": false            // Requires special processing
}
```

---

### GET `/config-registry/v1/configs`
**Description:** Lists all configurations, optionally filtered by query parameters.  
**Query Parameters:**
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `configType` | string | Filter by configuration type (e.g., `metering`). |
| `verificationStatus` | string | Filter by status (`TODO`, `READY_FOR_QA`, `APPROVED`, `REJECTED`). |
| `page` | integer | Page number for pagination. |
| `pageSize` | integer | Number of items per page. |

**Access Control:** Requires `api::config-registry-config.config-view-policy`.  

**Example Response:**
```json
{
  "page": 1,                                 // Current page number
  "pageSize": 10,                            // Number of items per page
  "totalPages": 5,                           // Total number of pages
  "totalItems": 48,                          // Total number of configurations
  "configs": [                               // Array of configuration objects
    {
      "configKey": "metering.frequency",
      "configType": "metering",
      "verificationStatus": "APPROVED",
      "deprecated": false,
      "displayName": "Metering Frequency",
      "configDocumentation": "Defines how often meters poll data.",
      "configDataType": "INTEGER",
      "defaultValue": "15",
      "possibleValues": [5, 10, 15, 30],
      "validationRule": { "min": 5, "max": 60 },
      "version": 3,
      "lookups": [],
      "parentConfig": null,
      "childConfigs": [],
      "relatedConfigs": [],
      "duplicateConfigs": [],
      "dependsUpon": [],
      "createdByUser": "alice@example.com",
      "isMandatoryField": true,
      "utilityConfigurationRequired": false,
      "specialHandlingRequired": false
    }
    // …more configs
  ]
}
```

---

### POST `/config-registry-lookups/v1/create`
**Description:** Creates a new lookup entry.  
**Access Control:** No explicit policy listed; inherits default `config-view-policy`.  

**Example Response:**
```json
{
  "lookupId": "lkp-98765",                   // Unique lookup identifier
  "code": "US-CA",                           // Code for the lookup value
  "displayName": "California",               // Human‑readable name
  "lookupType": "state",                     // Type of lookup (e.g., state, city)
  "parentLookup": null,                      // Parent lookup ID (null if top‑level)
  "description": "State of California",      // Optional description
  "createdAt": "2026-03-28T12:00:00Z",       // ISO‑8601 timestamp of creation
  "createdBy": "alice@example.com"           // Email of the creator
}
```

---

### GET `/config-registry-lookup-types/v1/all`
**Description:** Retrieves all lookup types.  
**Access Control:** Requires `api::config-registry-config.config-view-policy`.  

**Example Response:**
```json
{
  "lookupTypes": [
    {
      "typeId": "lt-001",                     // Unique lookup type ID
      "code": "state",                        // Code for the type
      "displayName": "State",                 // Human‑readable name
      "description": "Geographic state lookup" // Optional description
    },
    {
      "typeId": "city",
      "code": "city",
      "displayName": "City",
      "description": "City lookup"
    }
    // …more types
  ]
}
```

---

### GET `/config-registry-lookup-types/v1/:id`
**Description:** Retrieves a single lookup type by its ID.  
**Path Parameters:**
| Parameter | Type   | Description |
|