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
**Description:** Ingests survey category data into the CMS.

**Path Parameters:** None

**Query Parameters:** None

**Request Body:** Not documented from the provided controller context.

**Example Response:**
```json
{}
```

**Access Control:** No route-specific policy information was provided in the available evidence.

---

### GET /survey/v1/template/:pilotId/:templateId
**Description:** Returns the external survey template for a utility pilot, including a flattened list of survey questions localized for the requested locale.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Utility pilot identifier used to resolve the utility configuration. |
| templateId | string | Yes | Survey template type identifier. Known values from the data model include `defaultSurvey` and `BillAnalyzer`. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | No | Content status to fetch. If set to published, the published template is returned; otherwise the handler prefers a draft template that is ready for quality assurance and falls back to published. |
| locale | string | No | Locale for localized question text, info, and choice labels. The handler normalizes this through the default-locale utility and validates that the utility supports it. |
| region | string | No | Region value echoed back in the response. |

**Example Response:**
```json
{
  "data": {
    "surveyId": "defaultSurvey",
    "questions": [
      {
        "documentId": "sq_01f8c2a9",
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
        "info": "Choose the option that best matches your residence.",
        "parent": null,
        "answerType": "NON_BOOLEAN",
        "stateMapper": null,
        "profileCode": "METADATA",
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
        "documentId": "sq_7b2d4e10",
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
        "stateMapper": null,
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
  "updatedAt": 1735689600000,
  "region": "us-west-2"
}
```

**Access Control:** Protected by policy `api::survey-template.survey-template-fetch-policy`.

---

### GET /survey/v1/last-updated-ts/:pilotId/:templateId
**Description:** Returns the cached last-updated timestamp for a survey template and content status.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Utility pilot identifier. |
| templateId | string | Yes | Survey template type identifier. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | No | Content status used when looking up the cached timestamp. |

**Example Response:**
```json
{
  "data": 1735689600000
}
```

**Access Control:** No route-specific policy information was provided in the available evidence.

---
