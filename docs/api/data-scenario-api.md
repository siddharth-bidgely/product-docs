# Data Scenarios API

# Data Scenarios API

## Overview  
The Data Scenarios API exposes CRUD and utility operations for **Data Scenarios** and their associated **Data Scenario Payloads**. These endpoints are consumed by internal Bidgely services such as the Data Server, recommendation engine, and customer‑facing applications to create, clone, retrieve, and delete scenario configurations that drive energy‑usage simulations and reporting.

## Authentication  
All endpoints require a valid Bearer token:

```http
Authorization: Bearer <api_token>
```

The token must belong to a user with the **reco‑model‑policy** scope (authenticated users with recommendation read/write access). No endpoint deviates from this default.

## Endpoints  

---

### GET `/data-scenario/v1/scenario-with-payload`  
**Description:** Retrieves a single Data Scenario along with its associated payloads.  
**Access Control:** Requires reco‑model‑policy (read access).  

**Query Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `scenarioId` | string | **(required)** The unique identifier of the scenario to retrieve. |

**Example Response:**  
```json
{
  "scenarioId": "scn-12345",                     // Unique identifier for the scenario
  "scenarioDisplayName": "Winter Peak Load",     // Human‑readable name shown in UIs
  "utility": {                                   // Reference to the utility that owns the scenario
    "utilityId": "util-67890",
    "name": "Northwest Power"
  },
  "productType": "Email",                        // Type of product (Email, Web, HER, SMS)
  "scenarioLocale": "en-US",                     // Locale code for the scenario
  "fuelType": "ELECTRIC",                        // Fuel type (ELECTRIC, GAS, WATER)
  "templateName": "peak-load-template",          // Name of the template used
  "elementNames": {                              // Mapping of element identifiers to display names
    "elec": "Electricity",
    "gas": "Natural Gas"
  },
  "defaultScenario": false,                      // Indicates if this is the default scenario for the pilot
  "userClusters": {                              // JSON blob describing user cluster definitions
    "clusterA": { "min": 0, "max": 1000 }
  },
  "scenarioDocumentation": "Detailed description of the scenario logic.", // Free‑form documentation
  "data_scenario_payloads": [                    // Array of payload objects attached to this scenario
    {
      "templateTypeName": "LoadProfile",         // Name of the payload template
      "payload": {                               // Raw JSON payload data
        "peakHours": [18, 19, 20],
        "baseLoad": 1200
      },
      "dataScenarioDocumentId": "doc-98765"      // Reference to the document that owns this payload
    }
  ]
}
```

---

### GET `/data-scenario/v1/pilot/:pilotId/scenario/:scenarioId`  
**Description:** Retrieves a Data Scenario and *all* its payloads for a specific pilot.  
**Access Control:** Requires reco‑model‑policy (read access).  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `pilotId` | string | **(required)** Identifier of the pilot owning the scenario. |
| `scenarioId` | string | **(required)** Identifier of the scenario to retrieve. |

**Example Response:**  
```json
{
  "scenarioId": "scn-54321",
  "scenarioDisplayName": "Summer Off‑Peak",
  "utility": {
    "utilityId": "util-12345",
    "name": "Southwest Energy"
  },
  "productType": "Web",
  "scenarioLocale": "en-GB",
  "fuelType": "GAS",
  "templateName": "off-peak-template",
  "elementNames": {
    "gas": "Natural Gas"
  },
  "defaultScenario": true,
  "userClusters": {
    "clusterB": { "min": 1000, "max": 2000 }
  },
  "scenarioDocumentation": "Scenario for summer off‑peak load reduction.",
  "data_scenario_payloads": [
    {
      "templateTypeName": "LoadProfile",
      "payload": {
        "offPeakHours": [22, 23, 0, 1],
        "baseLoad": 800
      },
      "dataScenarioDocumentId": "doc-12345"
    },
    {
      "templateTypeName": "WeatherAdjustment",
      "payload": {
        "temperatureThreshold": 30
      },
      "dataScenarioDocumentId": "doc-67890"
    }
  ]
}
```

---

### POST `/data-scenario/v1/clone`  
**Description:** Initiates an asynchronous clone of one or more Data Scenarios.  
**Access Control:** Requires reco‑model‑policy (write access).  

**Request Body:**  
```json
{
  "sourceScenarioIds": ["scn-11111", "scn-22222"],   // IDs of scenarios to clone
  "targetPilotId": "pilot-99999"                     // Pilot under which cloned scenarios will be created
}
```

**Example Response:**  
```json
{
  "jobId": "clone-abc123",                          // Identifier for the clone job
  "status": "queued",                               // Current status of the job (queued, running, completed, failed)
  "createdAt": "2026-03-29T12:34:56Z"               // ISO 8601 timestamp when the job was created
}
```

---

### GET `/data-scenario/v1/clone/status/:jobId`  
**Description:** Retrieves the current status of a clone job.  
**Access Control:** Requires reco‑model‑policy (read access).  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `jobId` | string | **(required)** Identifier of the clone job to query. |

**Example Response:**  
```json
{
  "jobId": "clone-abc123",
  "status": "running",                              // Possible values: queued, running, completed, failed
  "progress": 45,                                   // Percentage of completion (0‑100)
  "startedAt": "2026-03-29T12:35:00Z",
  "completedAt": null,                              // Populated when status is completed or failed
  "errorMessage": null                              // Populated if status is failed
}
```

---

### POST `/data-scenario/v1/create-with-payloads`  
**Description:** Creates a new Data Scenario and attaches one or more payloads in a single request.  
**Access Control:** Requires reco‑model‑policy (write access).  

**Request Body:**  
```json
{
  "scenarioDisplayName": "Holiday Season",
  "utilityId": "util-55555",
  "productType": "SMS",
  "scenarioLocale": "en-US",
  "fuelType": "ELECTRIC",
  "templateName": "holiday-template",
  "elementNames": { "elec": "Electricity" },
  "defaultScenario": false,
  "userClusters": { "clusterC": { "min": 0, "max": 500 } },
  "scenarioDocumentation": "Scenario for holiday season peak.",
  "payloads": [
    {
      "templateTypeName": "LoadProfile",
      "payload": { "peakHours": [20, 21, 22], "baseLoad": 1500 }
    },
    {
      "templateTypeName": "WeatherAdjustment",
      "payload": { "temperatureThreshold": 25 }
    }
  ]
}
```

**Example Response:**  
```json
{
  "scenarioId": "scn-77777",                       // Newly created scenario ID
  "status": "created",                             // Confirmation status
  "createdAt": "2026-03-29T13:00:00Z"
}
```

---

### DELETE `/data-scenario/v1/pilot/:pilotId`  
**Description:** Deletes all Data Scenarios belonging to a pilot.  
**Access Control:** Requires reco‑model‑policy (write access).  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `pilotId` | string | **(required)** Identifier of the pilot whose scenarios will be removed. |

**Example Response:**  
```json
{
  "pilotId": "pilot-99999",
  "deletedCount": 12,                              // Number of scenarios deleted
  "status": "completed",
  "completedAt": "2026-03-29T13:15:00Z"
}
```

---

### DELETE `/data-scenario/v1/pilot/:pilotId/scenario/:scenarioId`  
**Description:** Deletes a single Data Scenario identified by its ID under a specific pilot.  
**Access Control:** Requires reco‑model‑policy (write access).  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| `pilotId` | string | **(required)** Identifier of the pilot owning the scenario. |
| `scenarioId` | string | **(required)** Identifier of the scenario to delete. |

**Example Response:**  
```json
{
  "scenarioId": "scn-88888",
  "pilotId": "pilot-99999",
  "status": "deleted",
  "deletedAt": "2026-03-29T13:20:00Z"
}
```

---