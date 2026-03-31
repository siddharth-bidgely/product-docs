# Recommendations API

<swagger-ui src="../../assets/openapi/recommendations.yaml"/>

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

### GET /recommendation/v1/model/:pilotId
**Description:** Returns the recommendation model for a utility pilot, including the default profile, transformed recommendation records, and the last-updated timestamp for the requested external content status.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Utility pilot identifier. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | Yes | External content status to resolve. The code supports `PUBLISHED` and `READY_FOR_QA`. |

**Example Response:**
```json
{
  "data": {
    "defaultProfile": [
      "HOME:OWN", 
      "DWELLING:SINGLE_FAMILY", 
      "AP:1:C:1-" 
    ],
    "model": [
      {
        "recommendationId": "reco_hvac_tuneup_001",
        "fuelType": [
          "ELECTRIC"
        ],
        "category": "HVAC",
        "applianceTags": [
          1
        ],
        "disabled": false,
        "defaultReco": true,
        "relevanceScore": 0.875,
        "exclusions": [
          "HOME:RENT", 
          "RP:TOU", 
          "PP:smart_saver:ENROLLED", 
          "M:6" 
        ]
      },
      {
        "recommendationId": "reco_water_heater_002",
        "fuelType": [
          "GAS"
        ],
        "category": "WATER_HEATING",
        "applianceTags": [
          5
        ],
        "disabled": false,
        "defaultReco": false,
        "relevanceScore": 0.625,
        "exclusions": [
          "AP:5:C:0-1", 
          "RP:NOT_FLAT" 
        ]
      }
    ]
  },
  "updatedAt": 1735689600000
}
```

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

---

### GET /recommendation/v1/metadata/:pilotId
**Description:** Returns recommendation metadata for a utility pilot in version 1 format, filtered by external content status, locale, and channel.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Utility pilot identifier. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | Yes | External content status to resolve. |
| locale | string | Yes | Locale to return metadata for, such as `en` or `es`. |
| channel | string | Yes | Delivery channel filter. Supported values are `EMAIL`, `WEB`, `PAPER`, and `DEFAULT`. |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "reco_hvac_tuneup_001",
      "fuelType": [
        "ELECTRIC"
      ],
      "category": "HVAC",
      "applianceTags": [
        1
      ],
      "disabled": false,
      "defaultReco": true,
      "featuredContent": true,
      "program": false,
      "title": "Schedule an HVAC tune-up",
      "description": "Improve system efficiency with seasonal maintenance.",
      "detail": "A professional tune-up can reduce waste and improve comfort.",
      "videoLink": "https://www.bidgely.com/videos/hvac-tuneup", 
      "ctaButtonLink": "https://www.bidgely.com/learn/hvac-tuneup", 
      "ctaButtonText": "Learn more",
      "icon": "https://cms.bidgely.com/uploads/hvac_icon.png", 
      "fullImage": "https://cms.bidgely.com/uploads/hvac_full.png", 
      "shortenedImage": "https://cms.bidgely.com/uploads/hvac_short.png", 
      "elongatedImage": "https://cms.bidgely.com/uploads/hvac_long.png" 
    }
  ],
  "updatedAt": 1735689600000
}
```

**Access Control:** Protected by policy `api::recommendation.reco-metadata-policy`.

---

### GET /recommendation/v2/metadata/:pilotId
**Description:** Returns recommendation metadata for a utility pilot in version 2 format, including the version 1 fields plus additional action-classification fields.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Utility pilot identifier. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | Yes | External content status to resolve. |
| locale | string | Yes | Locale to return metadata for, such as `en` or `es`. |
| channel | string | Yes | Delivery channel filter. Supported values are `EMAIL`, `WEB`, `PAPER`, and `DEFAULT`. |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "reco_hvac_tuneup_001",
      "fuelType": [
        "ELECTRIC"
      ],
      "category": "HVAC",
      "applianceTags": [
        1
      ],
      "disabled": false,
      "defaultReco": true,
      "featuredContent": true,
      "program": false,
      "title": "Schedule an HVAC tune-up",
      "description": "Improve system efficiency with seasonal maintenance.",
      "detail": "A professional tune-up can reduce waste and improve comfort.",
      "videoLink": "https://www.bidgely.com/videos/hvac-tuneup", 
      "ctaButtonLink": "https://www.bidgely.com/learn/hvac-tuneup", 
      "ctaButtonText": "Learn more",
      "icon": "https://cms.bidgely.com/uploads/hvac_icon.png", 
      "fullImage": "https://cms.bidgely.com/uploads/hvac_full.png", 
      "shortenedImage": "https://cms.bidgely.com/uploads/hvac_short.png", 
      "elongatedImage": "https://cms.bidgely.com/uploads/hvac_long.png", 
      "actionSavingsPotential": 12.5,
      "frequency": "one_time",
      "userType": "homeowner",
      "actionType": "maintenance",
      "objective": "efficiency",
      "herImage": "https://cms.bidgely.com/uploads/hvac_her.png" 
    }
  ],
  "updatedAt": 1735689600000
}
```

**Access Control:** Protected by policy `api::recommendation.reco-metadata-policy`.

---

### GET /recommendation/v1/insight-definition/:pilotId
**Description:** Returns insight definitions for a utility pilot, grouped from recommendation insight associations by appliance category, association type, and fuel type.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Utility pilot identifier. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | Yes | External content status to resolve. The code supports `PUBLISHED` and `READY_FOR_QA`. |

**Example Response:**
```json
{
  "data": [
    {
      "type": "SELF",
      "applianceTag": 1,
      "fuelType": "ELECTRIC",
      "recommendations": [
        "reco_hvac_tuneup_001",
        "reco_hvac_filter_003"
      ],
      "insightId": "HVAC-T-SC-E" 
    },
    {
      "type": "PEER",
      "applianceTag": 5,
      "fuelType": "GAS",
      "recommendations": [
        "reco_water_heater_002"
      ],
      "insightId": "WH-T-NC-G" 
    }
  ],
  "updatedAt": 1735689600000
}
```

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

---

### GET /recommendation/v1/last-updated-ts/:pilotId
**Description:** Returns the cached last-updated timestamp for recommendation content for a utility pilot and external content status.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| pilotId | string | Yes | Utility pilot identifier. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| status | string | Yes | External content status to resolve. |

**Example Response:**
```json
{
  "data": 1735689600000
}
```

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

---
