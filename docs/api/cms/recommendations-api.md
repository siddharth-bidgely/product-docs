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
**Description:** Returns the recommendation model for a pilot, including the default profile tags, transformed recommendation records, and the last-updated timestamp for the requested external content status.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `pilotId` | string | Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `status` | string | Yes | External content status to resolve. The TypeScript contract defines this as `CONTENT_STATUS_EXTERNAL`. The implementation explicitly supports published content and ready-for-quality-assurance content. |

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
        "recommendationId": "RECO_HVAC_001",
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
        "recommendationId": "RECO_WATER_003",
        "fuelType": [
          "GAS",
          "ELECTRIC"
        ],
        "category": "WATER_HEATING",
        "applianceTags": [
          5
        ],
        "disabled": false,
        "defaultReco": false,
        "relevanceScore": 0.542,
        "exclusions": [
          "AP:12:T:Gas", 
          "RP:NOT_FLAT" 
        ]
      }
    ]
  },
  "updatedAt": 1735689600000
}
```

**Response Shape Notes:**
- `data.defaultProfile` is an array of profile tags derived from the utility's default home profile and appliance profile.
- `data.model[].applianceTags` is an array of numeric appliance tag identifiers.
- `data.model[].exclusions` is a flattened array of exclusion tags derived from:
  - home profile exclusions,
  - appliance profile exclusions,
  - rate plan exclusions,
  - program participation exclusions,
  - month exclusions.
- `updatedAt` is a Unix timestamp in milliseconds, or `null` if unavailable.

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

---

### GET /recommendation/v1/metadata/:pilotId
**Description:** Returns recommendation metadata for a pilot in version 1 format, filtered by external content status, locale, and channel.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `pilotId` | string | Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `status` | string | Yes | External content status to resolve. The TypeScript contract defines this as `CONTENT_STATUS_EXTERNAL`. |
| `locale` | string | Yes | Locale to use when resolving localized recommendation metadata. |
| `channel` | string | Yes | Delivery channel filter. Supported contract values are `EMAIL`, `WEB`, `PAPER`, and `DEFAULT`. |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "RECO_HVAC_001",
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
      "title": "Tune up your cooling system",
      "description": "Improve efficiency and reduce summer energy use.",
      "detail": "Schedule a professional inspection before peak cooling season.",
      "videoLink": "https://www.bidgely.com/resources/hvac-tuneup",
      "ctaButtonLink": "https://www.utility-example.com/rebates/hvac",
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

**Response Shape Notes:**
- `data` is an array of recommendation metadata records.
- Version 1 metadata includes presentation and channel content fields, but does not include the additional action-classification fields introduced in version 2.
- `updatedAt` is a Unix timestamp in milliseconds, or `null` if unavailable.

**Access Control:** Protected by policy `api::recommendation.reco-metadata-policy`.

---

### GET /recommendation/v2/metadata/:pilotId
**Description:** Returns recommendation metadata for a pilot in version 2 format, including the version 1 fields plus additional action and objective metadata.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `pilotId` | string | Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `status` | string | Yes | External content status to resolve. The TypeScript contract defines this as `CONTENT_STATUS_EXTERNAL`. |
| `locale` | string | Yes | Locale to use when resolving localized recommendation metadata. |
| `channel` | string | Yes | Delivery channel filter. Supported contract values are `EMAIL`, `WEB`, `PAPER`, and `DEFAULT`. |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "RECO_HVAC_001",
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
      "title": "Tune up your cooling system",
      "description": "Improve efficiency and reduce summer energy use.",
      "detail": "Schedule a professional inspection before peak cooling season.",
      "videoLink": "https://www.bidgely.com/resources/hvac-tuneup",
      "ctaButtonLink": "https://www.utility-example.com/rebates/hvac",
      "ctaButtonText": "Learn more",
      "icon": "https://cms.bidgely.com/uploads/hvac_icon.png",
      "fullImage": "https://cms.bidgely.com/uploads/hvac_full.png",
      "shortenedImage": "https://cms.bidgely.com/uploads/hvac_short.png",
      "elongatedImage": "https://cms.bidgely.com/uploads/hvac_long.png",
      "actionSavingsPotential": 18.5,
      "frequency": "one_time",
      "userType": "residential_owner",
      "actionType": "maintenance",
      "objective": "reduce_cooling_cost",
      "herImage": "https://cms.bidgely.com/uploads/hvac_her.png"
    }
  ],
  "updatedAt": 1735689600000
}
```

**Response Shape Notes:**
- Version 2 extends version 1 metadata with:
  - `actionSavingsPotential`,
  - `frequency`,
  - `userType`,
  - `actionType`,
  - `objective`,
  - `herImage` (home energy report image).
- `updatedAt` is a Unix timestamp in milliseconds, or `null` if unavailable.

**Access Control:** Protected by policy `api::recommendation.reco-metadata-policy`.

---

### GET /recommendation/v1/insight-definition/:pilotId
**Description:** Returns insight definitions for a pilot by grouping active recommendations by appliance category, insight association type, and fuel type.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `pilotId` | string | Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `status` | string | Yes | External content status to resolve. The TypeScript contract defines this as `CONTENT_STATUS_EXTERNAL`. |

**Example Response:**
```json
{
  "data": [
    {
      "type": "SELF",
      "applianceTag": 1,
      "fuelType": "ELECTRIC",
      "recommendations": [
        "RECO_HVAC_001",
        "RECO_HVAC_004"
      ],
      "insightId": "HVAC-T-SC-E"
    },
    {
      "type": "PEER",
      "applianceTag": 5,
      "fuelType": "GAS",
      "recommendations": [
        "RECO_WATER_003"
      ],
      "insightId": "WH-T-NC-G"
    }
  ],
  "updatedAt": 1735689600000
}
```

**Response Shape Notes:**
- `type` is the expanded insight association type:
  - `NC` → `PEER`
  - `SC` → `SELF`
  - `CC` → `APPLIANCE_CONSUMPTION_BASED`
- `applianceTag` is the numeric appliance identifier for the category.
- `recommendations` is the list of recommendation IDs associated with the generated insight definition.
- `insightId` is a generated identifier composed from appliance category short code, association type, and fuel type initial.
- Disabled recommendations are excluded from this response.
- `updatedAt` is a Unix timestamp in milliseconds, or `null` if unavailable.

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

---

### GET /recommendation/v1/last-updated-ts/:pilotId
**Description:** Returns the cached last-updated timestamp for recommendation data for a pilot and external content status.

**Path Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `pilotId` | string | Yes | Pilot identifier used to look up the cached timestamp. |

**Query Parameters:**

| Name | Type | Required | Description |
|---|---|---:|---|
| `status` | string | Yes | External content status to resolve. The controller reads this from the query string as `CONTENT_STATUS_EXTERNAL`. |

**Example Response:**
```json
{
  "data": 1735689600000
}
```

**Response Shape Notes:**
- `data` is a Unix timestamp in milliseconds.
- If no cached timestamp exists, the response returns `null`.

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

---
