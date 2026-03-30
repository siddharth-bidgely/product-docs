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
**Description:** Retrieve the recommendation model for a specific pilot, including default profile tags and relevance scores.

**Path Parameters:**

| Name   | Type   | Description |
|--------|--------|-------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name | Type   | Description |
|------|--------|-------------|
| status | string (enum: `PUBLISHED`, `READY_FOR_QA`) | Content status to filter recommendations. |

**Example Response:**
```json
{
  "data": {
    "defaultProfile": [
      "tag1",          // Default home‑profile tag
      "tag2"           // Default appliance tag
    ],
    "model": [
      {
        "recommendationId": "rec-123",
        "fuelType": ["ELECTRIC"],
        "category": "HVAC",
        "applianceTags": [5, 17],   // Appliance IDs (17 is a secondary tag)
        "disabled": false,
        "defaultReco": true,
        "relevanceScore": 0.85,
        "exclusions": [
          "RP:TIER",          // Rate‑plan tier exclusion
          "PP:123:ENROLLED"   // Program‑plan exclusion
        ]
      },
      {
        "recommendationId": "rec-456",
        "fuelType": ["GAS"],
        "category": "Lighting",
        "applianceTags": [3],
        "disabled": false,
        "defaultReco": false,
        "relevanceScore": 0.62,
        "exclusions": []
      }
    ]
  },
  "updatedAt": 1672531200000
}
```

**Access Control:** `api::recommendation.reco-model-policy`

---

### GET /recommendation/v1/metadata/:pilotId
**Description:** Retrieve the metadata for all recommendations for a pilot, filtered by locale and channel.

**Path Parameters:**

| Name   | Type   | Description |
|--------|--------|-------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name   | Type   | Description |
|--------|--------|-------------|
| status | string (enum: `PUBLISHED`, `READY_FOR_QA`) | Content status to filter recommendations. |
| locale | string | Locale code (e.g., `en`, `es`). |
| channel | string (enum: `EMAIL`, `WEB`, `PAPER`, `DEFAULT`) | Channel for which to retrieve metadata. |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "rec-456",
      "fuelType": ["GAS"],
      "category": "Lighting",
      "applianceTags": [3],
      "disabled": false,
      "defaultReco": false,
      "featuredContent": true,
      "program": false,
      "title": "Save on Lighting",
      "description": "Reduce your electricity usage",
      "detail": "Detailed information about the recommendation.",
      "videoLink": "https://video.example.com/vid1",
      "ctaButtonLink": "https://bidgely.com/cta",
      "ctaButtonText": "Learn More",
      "icon": "https://media.example.com/icon.png",
      "fullImage": "https://media.example.com/full.png",
      "shortenedImage": "https://media.example.com/short.png",
      "elongatedImage": "https://media.example.com/elongated.png"
    },
    {
      "recommendationId": "rec-789",
      "fuelType": ["ELECTRIC"],
      "category": "HVAC",
      "applianceTags": [5],
      "disabled": false,
      "defaultReco": true,
      "featuredContent": false,
      "program": true,
      "title": "Upgrade Your HVAC",
      "description": "Improve efficiency with a new unit.",
      "detail": "Detailed information about the recommendation.",
      "videoLink": "https://video.example.com/vid2",
      "ctaButtonLink": "https://bidgely.com/cta",
      "ctaButtonText": "Upgrade Now",
      "icon": "https://media.example.com/icon2.png",
      "fullImage": "https://media.example.com/full2.png",
      "shortenedImage": "https://media.example.com/short2.png",
      "elongatedImage": "https://media.example.com/elongated2.png"
    }
  ],
  "updatedAt": 1672531200000
}
```

**Access Control:** `api::recommendation.reco-metadata-policy`

---

### GET /recommendation/v2/metadata/:pilotId
**Description:** Retrieve the v2 metadata for all recommendations for a pilot, including additional fields such as savings potential and user type.

**Path Parameters:**

| Name   | Type   | Description |
|--------|--------|-------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name   | Type   | Description |
|--------|--------|-------------|
| status | string (enum: `PUBLISHED`, `READY_FOR_QA`) | Content status to filter recommendations. |
| locale | string | Locale code (e.g., `en`, `es`). |
| channel | string (enum: `EMAIL`, `WEB`, `PAPER`, `DEFAULT`) | Channel for which to retrieve metadata. |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "rec-456",
      "fuelType": ["GAS"],
      "category": "Lighting",
      "applianceTags": [3],
      "disabled": false,
      "defaultReco": false,
      "featuredContent": true,
      "program": false,
      "title": "Save on Lighting",
      "description": "Reduce your electricity usage",
      "detail": "Detailed information about the recommendation.",
      "videoLink": "https://video.example.com/vid1",
      "ctaButtonLink": "https://bidgely.com/cta",
      "ctaButtonText": "Learn More",
      "icon": "https://media.example.com/icon.png",
      "fullImage": "https://media.example.com/full.png",
      "shortenedImage": "https://media.example.com/short.png",
      "elongatedImage": "https://media.example.com/elongated.png",
      "actionSavingsPotential": 120.50,   // Estimated savings in dollars
      "frequency": "one_time",           // Frequency of the action
      "userType": "residential",         // Target user type
      "actionType": "energy_saving",     // Type of action
      "objective": "Reduce consumption", // Goal of the recommendation
      "herImage": "https://media.example.com/her.png" // Hero image URL
    }
  ],
  "updatedAt": 1672531200000
}
```

**Access Control:** `api::recommendation.reco-metadata-policy`

---

### GET /recommendation/v1/insight-definition/:pilotId
**Description:** Retrieve insight definitions that map recommendations to appliance tags and fuel types for a pilot.

**Path Parameters:**

| Name   | Type   | Description |
|--------|--------|-------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name | Type   | Description |
|------|--------|-------------|
| status | string (enum: `PUBLISHED`, `READY_FOR_QA`) | Content status to filter recommendations. |

**Example Response:**
```json
{
  "data": [
    {
      "type": "PEER",
      "applianceTag": 5,
      "fuelType": "ELECTRIC",
      "recommendations": [
        "rec-123",
        "rec-789"
      ],
      "insightId": "5-T"
    },
    {
      "type": "SELF",
      "applianceTag": 3,
      "fuelType": "GAS",
      "recommendations": [
        "rec-456"
      ],
      "insightId": "3-S"
    }
  ],
  "updatedAt": 1672531200000
}
```

**Access Control:** `api::recommendation.reco-model-policy`

---

### GET /recommendation/v1/last-updated-ts/:pilotId
**Description:** Retrieve the last updated timestamp for the recommendation data of a pilot.

**Path Parameters:**

| Name   | Type   | Description |
|--------|--------|-------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name | Type   | Description |
|------|--------|-------------|
| status | string (enum: `PUBLISHED`, `READY_FOR_QA`) | Content status to filter recommendations. |

**Example Response:**
```json
{
  "data": 1672531200000
}
```

**Access Control:** `api::recommendation.reco-model-policy`
