# Survey Builder API

# Survey Builder API

## Overview
The Survey Builder API exposes endpoints that allow Bidgely services to ingest survey categories, retrieve survey templates, and query the last‑updated timestamp for a template. These endpoints are consumed by internal services such as the Data Server and customer‑facing applications that need to display or manage survey content.

## Authentication
All endpoints require a valid Bearer token:

```http
Authorization: Bearer <api_token>
```

No endpoint deviates from this default authentication scheme.

## Endpoints

### POST `/survey-category/ingest`
**Description:** Ingests a batch of survey categories into the system.

| Parameter | Type | Description |
|-----------|------|-------------|
| **Body** | JSON array of `Survey Category` objects | Each object must contain `categoryId`, `label`, and `order`. |

**Example Response:**
```json
{
  "ingestedCount": 5,          // number of categories successfully ingested
  "failedCount": 0,            // number of categories that failed validation
  "errors": []                 // array of error objects (empty if no failures)
}
```

**Access Control:** Requires `survey-category-ingest-policy` – authenticated users with write access to survey categories.

---

### GET `/survey/v1/template/{pilotId}/{templateId}`
**Description:** Retrieves a survey template by pilot and template identifiers.

| Path Parameter | Type   | Description |
|----------------|--------|-------------|
| `pilotId`      | string | Identifier for the pilot program. |
| `templateId`   | string | Unique identifier of the survey template. |

**Example Response:**
```json
{
  "templateType": "defaultSurvey",          // type of the template (e.g., defaultSurvey, BillAnalyzer)
  "label": "Customer Satisfaction Survey",  // human‑readable name of the template
  "templateQuestions": [                    // array of survey questions
    {
      "title": "How satisfied are you with our service?",   // question text
      "type": "SINGLE",                                      // question type (enumeration)
      "img": null,                                           // optional image media
      "group": "ESSENTIAL",                                  // question group (ESSENTIAL or DETAILED)
      "fuelTypes": ["GLOBAL", "ELECTRIC"],                   // applicable fuel types
      "maxLevel": 5,                                          // maximum rating level
      "questionTemplate": "DEFAULT",                         // question template style
      "profileCode": "AP",                                   // profile code (AP, HP, METADATA)
      "category": "Service",                                 // category ID this question belongs to
      "info": "Please rate your overall satisfaction.",     // additional info text
      "stateMapper": "state1",                               // state mapping identifier
      "impactShc": true,                                     // whether this question impacts SHC
      "impactItemization": false,                            // whether this question impacts itemization
      "impactReco": true,                                    // whether this question impacts recommendations
      "utility": "utility123",                               // related utility identifier
      "choices": [                                            // list of answer choices
        { "label": "Very Satisfied", "value": 5 },
        { "label": "Satisfied", "value": 4 },
        { "label": "Neutral", "value": 3 },
        { "label": "Dissatisfied", "value": 2 },
        { "label": "Very Dissatisfied", "value": 1 }
      ],
      "editStatus": "PUBLISHED",                             // edit status (DRAFT, MODIFIED, PUBLISHED)
      "verificationStatus": "READY_TO_PUBLISH"               // verification status (TODO, READY_FOR_QA, etc.)
    }
  ],
  "utility": "utility123",                                   // related utility identifier
  "verificationStatus": "READY_TO_PUBLISH",                  // overall verification status
  "editStatus": "PUBLISHED"                                 // overall edit status
}
```

**Access Control:** Requires `api::survey-template.survey-template-fetch-policy` – authenticated users with read access to survey templates.

---

### GET `/survey/v1/last-updated-ts/{pilotId}/{templateId}`
**Description:** Returns the last‑updated timestamp for a specific survey template.

| Path Parameter | Type   | Description |
|----------------|--------|-------------|
| `pilotId`      | string | Identifier for the pilot program. |
| `templateId`   | string | Unique identifier of the survey template. |

**Example Response:**
```json
{
  "lastUpdatedTs": "2026-03-28T14:32:10Z"   // ISO‑8601 timestamp of the most recent update
}
```

**Access Control:** Requires `api::survey-template.survey-template-fetch-policy` – authenticated users with read access to survey templates.

---

**Example Base URL**

All endpoints are hosted under the Survey Builder service:

```
https://cms.bidgely.com
```

So a full request URL would look like:

```
https://cms.bidgely.com/survey/v1/template/alphaPilot/templ-001
```

---