# Survey Builder API

<swagger-ui src="../../assets/openapi/survey-builder.yaml"/>

## Authentication

All endpoints require a valid Bearer token:

```http
Authorization: Bearer <api_token>
```

## Access Control

Endpoints are protected by Strapi policies that enforce role-based access. Refer to each operation's `x-policies` field in the spec above for specific policy requirements.


## Narrative reference

_Narrative descriptions complement the OpenAPI widget above; if they differ, treat the machine-readable YAML as authoritative._

## Endpoints

### POST /survey-category/ingest
**Description:** Ingests a batch of survey categories into the CMS.  
**Path Parameters:** None  
**Query Parameters:** None  
**Request Body:**  
```json
{
  "categories": [
    {
      "categoryId": "energyUsage",
      "label": "Energy Usage",
      "order": 1
    },
    {
      "categoryId": "waterUsage",
      "label": "Water Usage",
      "order": 2
    }
  ]
}
```
* `categories` – Array of category objects to ingest.  
* `categoryId` – Unique identifier for the category.  
* `label` – Human‑readable name.  
* `order` – Display order for the category.  

**Example Response:**
```json
{
  "success": true,
  "ingestedCount": 2
}
```
* `success` – Indicates the operation completed without errors.  
* `ingestedCount` – Number of categories successfully ingested.  

**Access Control:** None (no policy specified for this route).  

---  

### GET /survey/v1/template/:pilotId/:templateId
**Description:** Retrieves a survey template and its flattened question tree for a given pilot and template.  
**Path Parameters:**  
| Name | Type | Description |
|------|------|-------------|
| `pilotId` | string | Identifier of the pilot (utility) |
| `templateId` | string | Identifier of the survey template (e.g., `defaultSurvey`) |

**Query Parameters:**  
| Name | Type | Description |
|------|------|-------------|
| `status` | string | Content status to fetch (`draft` or `published`) |
| `locale` | string | Language locale (e.g., `en`, `fr`) |

**Example Response:**
```json
{
  "data": {
    "surveyId": "defaultSurvey",
    "questions": [
      {
        "documentId": "q123", // Strapi document ID
        "id": "Q1",
        "order": 1,
        "type": "SINGLE",
        "group": "ESSENTIAL",
        "category": {
          "id": "energyUsage",
          "label": "Energy Usage"
        },
        "state": null,
        "text": "What is your average monthly energy consumption?",
        "info": "Provide the total kWh used in the last month.",
        "parent": null,
        "answerType": "NON_BOOLEAN",
        "stateMapper": null,
        "profileCode": "AP",
        "fuelTypes": ["GLOBAL", "ELECTRIC"],
        "choices": [
          {
            "value": "low",
            "order": 1,
            "text": "Low",
            "read": {
              "selected": "low_read",
              "unselected": null
            },
            "write": {
              "selected": "low_write",
              "unselected": "low_unselect"
            }
          },
          {
            "value": "high",
            "order": 2,
            "text": "High",
            "read": {
              "selected": "high_read",
              "unselected": null
            },
            "write": {
              "selected": "high_write",
              "unselected": "high_unselect"
            }
          }
        ],
        "children": [
          {
            "documentId": "q124",
            "id": "Q1.a",
            "order": 2,
            "type": "TEXT",
            "group": "DETAILED",
            "category": {
              "id": "energyUsage",
              "label": "Energy Usage"
            },
            "state": null,
            "text": "Please describe any recent changes to your energy usage.",
            "info": null,
            "parent": {
              "id": "Q1",
              "value": ["low"]
            },
            "answerType": "NON_BOOLEAN",
            "stateMapper": null,
            "profileCode": "AP",
            "fuelTypes": ["GLOBAL"],
            "choices": null
          }
        ]
      }
    ]
  },
  "updatedAt": 1672531200000 // Timestamp of last update (ms since epoch)
}
```
* `data.surveyId` – Identifier of the requested survey template.  
* `data.questions` – Flattened array of questions in pre‑order traversal.  
* `documentId` – Strapi document ID of the question.  
* `id` – Human‑readable question ID (e.g., `Q1`, `Q1.a`).  
* `order` – Display order within the survey.  
* `type` – Question type (`SINGLE`, `TEXT`, etc.).  
* `group` – Question group (`ESSENTIAL`, `DETAILED`).  
* `category` – Category metadata (`id`, `label`).  
* `state` – Current state (null for external view).  
* `text` – Localized question text.  
* `info` – Optional additional information.  
* `parent` – Reference to parent question (null for root).  
* `answerType` – Derived answer type (`BOOLEAN` or `NON_BOOLEAN`).  
* `stateMapper` – Optional state mapping string.  
* `profileCode` – Profile code (`AP`, `HP`, `METADATA`).  
* `fuelTypes` – Array of applicable fuel types (`GLOBAL`, `ELECTRIC`, etc.).  
* `choices` – Array of answer choices (null if not applicable).  
* `children` – Nested child questions (if any).  
* `updatedAt` – Timestamp of the last update for the requested status.  

**Access Control:** `api::survey-template.survey-template-fetch-policy` – Only users with the appropriate role can fetch templates.  

---  

### GET /survey/v1/last-updated-ts/:pilotId/:templateId
**Description:** Retrieves the last updated timestamp for a survey template in a given status.  
**Path Parameters:**  
| Name | Type | Description |
|------|------|-------------|
| `pilotId` | string | Identifier of the pilot (utility) |
| `templateId` | string | Identifier of the survey template |

**Query Parameters:**  
| Name | Type | Description |
|------|------|-------------|
| `status` | string | Content status (`draft` or `published`) |

**Example Response:**
```json
{
  "data": 1672531200000 // Timestamp of last update (ms since epoch)
}
```
* `data` – Milliseconds since Unix epoch representing the last update time; `null` if no timestamp exists.  

**Access Control:** `api::survey-template.survey-template-fetch-policy` – Same policy as the template fetch endpoint.
