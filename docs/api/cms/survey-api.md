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
**Description:** Ingests survey category data into the CMS (content management system).

**Path Parameters:** None

**Query Parameters:** None

**Request Body:** Not documented from the provided controller context.

**Example Response:**
```json
{}
```

**Access Control:** No route-specific policy was provided in the available context.

---

### GET /survey/v1/template/:pilotId/:templateId
**Description:** Returns a flattened external survey template for a pilot, including localized question content and the template last-updated timestamp.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Pilot identifier used to resolve the utility. |
| templateId | string | Yes | Survey template type. Known values from the data model include `defaultSurvey` and `BillAnalyzer`. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | No | External content status used to choose which template version to return. If `published`, the published template is returned; otherwise the handler prefers a draft template that is `READY_FOR_QA` and falls back to published. |
| locale | string | No | Locale for localized labels and question text. The locale is normalized by the server and must be supported by the pilot's utility. |

**Example Response:**
```json
{
  "data": {
    "surveyId": "defaultSurvey",
    "questions": [
      {
        "documentId": "8f2d7d8a-2f6e-4d8d-9f8a-1b2c3d4e5f60",
        "id": "Q1",
        "order": 1,
        "type": "SINGLE",
        "group": "ESSENTIAL",
        "category": {
          "id": "HOME_PROFILE",
          "label": "Home Profile"
        },
        "state": null,
        "text": "What type of home do you live in?",
        "info": "Select the option that best matches your residence.",
        "parent": null,
        "answerType": "NON_BOOLEAN",
        "stateMapper": "home_type",
        "profileCode": "AP",
        "fuelTypes": [
          "GLOBAL"
        ],
        "choices": [
          {
            "value": "single_family",
            "order": 1,
            "text": "Single-family home",
            "read": {
              "selected": "single_family",
              "unselected": null
            },
            "write": {
              "selected": "single_family",
              "unselected": null
            }
          },
          {
            "value": "apartment",
            "order": 2,
            "text": "Apartment",
            "read": {
              "selected": "apartment",
              "unselected": null
            },
            "write": {
              "selected": "apartment",
              "unselected": null
            }
          }
        ]
      },
      {
        "documentId": "1a2b3c4d-5e6f-4789-9abc-def012345678",
        "id": "Q1a",
        "order": 2,
        "type": "BOOLEAN",
        "group": "DETAILED",
        "category": {
          "id": "HOME_PROFILE",
          "label": "Home Profile"
        },
        "state": null,
        "text": "Do you own this home?",
        "info": null,
        "parent": {
          "id": "Q1",
          "value": [
            "single_family"
          ]
        },
        "answerType": "BOOLEAN",
        "stateMapper": "ownership_status",
        "profileCode": "METADATA",
        "fuelTypes": [
          "GLOBAL"
        ],
        "choices": [
          {
            "value": "true",
            "order": 1,
            "text": "Yes",
            "read": {
              "selected": "true",
              "unselected": null
            },
            "write": {
              "selected": "true",
              "unselected": "false"
            }
          },
          {
            "value": "false",
            "order": 2,
            "text": "No",
            "read": {
              "selected": "false",
              "unselected": null
            },
            "write": {
              "selected": "false",
              "unselected": "true"
            }
          }
        ]
      }
    ]
  },
  "updatedAt": 1735689600000
}
```

**Access Control:** Protected by policy `api::survey-template.survey-template-fetch-policy`.

---

### GET /survey/v1/last-updated-ts/:pilotId/:templateId
**Description:** Returns the cached last-updated timestamp for a survey template and status.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Pilot identifier. |
| templateId | string | Yes | Survey template type. Known values from the data model include `defaultSurvey` and `BillAnalyzer`. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | No | External content status used when looking up the cached timestamp. |

**Example Response:**
```json
{
  "data": 1735689600000
}
```

**Access Control:** No route-specific policy was provided in the available context.

---
