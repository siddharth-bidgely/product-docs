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

*Narrative descriptions complement the OpenAPI widget above; if they differ, treat the machine-readable YAML as authoritative.*

## Endpoints

## Endpoints

### POST /survey-category/ingest

**Description:** Ingests survey category data into the content management system.

**Path Parameters:** None

**Query Parameters:** None

**Request Body:** Not documented from the available controller context.

**Example Response:**

```json
{}
```

**Access Control:** No route-specific policy was provided in the available evidence.

***

### GET /survey/v1/template/:pilotId/:templateId

**Description:** Returns the external survey template for a pilot ID and template ID, including a flattened list of localized survey questions and the template last-updated timestamp.

**Path Parameters:**

| Name       | Type   | Required | Description                                                               |
| ---------- | ------ | -------: | ------------------------------------------------------------------------- |
| pilotId    | string |      Yes | Utility pilot identifier used to resolve the utility record.              |
| templateId | string |      Yes | Survey template type to fetch, such as `defaultSurvey` or `BillAnalyzer`. |

**Query Parameters:**

| Name   | Type   | Required | Description                                                                                                                                                                     |
| ------ | ------ | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status | string |       No | Content status to fetch. If `published`, the published template is returned; otherwise the handler prefers a draft template that is `READY_FOR_QA` and falls back to published. |
| locale | string |       No | Locale for localized question text and choices. The locale is normalized through the server default-locale utility and must be supported by the utility.                        |

**Example Response:**

```json
{
  "data": {
    "surveyId": "defaultSurvey",
    "questions": [
      {
        "documentId": "8f2d7d8a-2d7b-4d8a-9a11-2d9f4f0a1001",
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
        "info": "Select the option that best describes your residence.",
        "parent": null,
        "answerType": "NON_BOOLEAN",
        "stateMapper": null,
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
        "documentId": "8f2d7d8a-2d7b-4d8a-9a11-2d9f4f0a1002",
        "id": "Q1a",
        "order": 2,
        "type": "BOOLEAN",
        "group": "DETAILED",
        "category": {
          "id": "HOME_PROFILE",
          "label": "Home Profile"
        },
        "state": null,
        "text": "Do you have electric heating?",
        "info": null,
        "parent": {
          "id": "Q1",
          "value": [
            "single_family"
          ]
        },
        "answerType": "BOOLEAN",
        "stateMapper": "has_electric_heating",
        "profileCode": "HP",
        "fuelTypes": [
          "ELECTRIC"
        ],
        "choices": [
          {
            "value": "yes",
            "order": 1,
            "text": "Yes",
            "read": {
              "selected": "Y",
              "unselected": null
            },
            "write": {
              "selected": "Y",
              "unselected": "N"
            }
          },
          {
            "value": "no",
            "order": 2,
            "text": "No",
            "read": {
              "selected": "N",
              "unselected": null
            },
            "write": {
              "selected": "N",
              "unselected": "Y"
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

***

### GET /survey/v1/last-updated-ts/:pilot\_Id/:template\_Id

**Description:** Returns the cached last-updated timestamp for a survey template for the given pilot ID, template ID, and content status. The response also echoes the resolved pilot ID.

**Path Parameters:**

| Name         | Type   | Required | Description                                                      |
| ------------ | ------ | -------: | ---------------------------------------------------------------- |
| pilot\_Id    | string |      Yes | Utility pilot identifier. Returned in the response as `pilotId`. |
| template\_Id | string |      Yes | Survey template type, such as `defaultSurvey` or `BillAnalyzer`. |

**Query Parameters:**

| Name   | Type   | Required | Description                                               |
| ------ | ------ | -------: | --------------------------------------------------------- |
| status | string |       No | Content status used when looking up the cached timestamp. |

**Example Response:**

```json
{
  "data": 1735689600000,
  "pilotId": "utility_123"
}
```

**Access Control:** No route-specific policy was provided in the available evidence.

***
