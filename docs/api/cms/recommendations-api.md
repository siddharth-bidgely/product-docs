# Recommendations API

<swagger-ui src="/assets/openapi/recommendations.yaml"/>

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

### GET `https://cms.bidgely.com/recommendation/v1/model/:pilotId`
**Description:** Retrieves the recommendation model for a specific pilot, including default profile tags and a list of external recommendations.

**Path Parameters:**

| Name   | Type   | Description          |
|--------|--------|----------------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name  | Type   | Description                     |
|-------|--------|---------------------------------|
| status | string | External content status (`PUBLISHED` or `READY_FOR_QA`). |

**Example Response:**
```json
{
  "data": {
    "defaultProfile": [
      "HEAT_1",          // Home profile tag for heating
      "ELEC_2",          // Home profile tag for electricity
      "WATER_3"          // Home profile tag for water
    ],
    "model": [
      {
        "recommendationId": "rec-12345",
        "fuelType": ["ELECTRIC", "GAS"],
        "category": "HEATING",
        "applianceTags": [17, 42],   // Appliance IDs (e.g., 17 = boiler, 42 = heat pump)
        "disabled": false,
        "defaultReco": true,
        "relevanceScore": 4.75,
        "exclusions": [
          "RP:TIER",          // Rate plan tier exclusion
          "PP:123:ENROLLED", // Program ID 123 enrollment exclusion
          "M:5"               // Exclusion for month index 5 (June)
        ]
      }
    ]
  },
  "updatedAt": 1701234567890   // Timestamp of last update
}
```

**Access Control:** `api::recommendation.reco-model-policy`

---

### GET `https://cms.bidgely.com/recommendation/v1/metadata/:pilotId`
**Description:** Retrieves the metadata for all recommendations for a pilot, filtered by status, locale, and channel.

**Path Parameters:**

| Name   | Type   | Description          |
|--------|--------|----------------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name   | Type   | Description                                 |
|--------|--------|---------------------------------------------|
| status | string | External content status (`PUBLISHED` or `READY_FOR_QA`). |
| locale | string | Locale code (e.g., `en`, `fr`).             |
| channel | string | Channel type (`EMAIL`, `WEB`, `PAPER`, `DEFAULT`). |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "rec-67890",
      "fuelType": ["WATER"],
      "category": "WATER_HEATING",
      "applianceTags": [23],
      "disabled": false,
      "defaultReco": false,
      "featuredContent": true,
      "program": false,
      "title": "Upgrade to a high-efficiency water heater",
      "description": "Save up to 30% on your water bills.",
      "detail": "Detailed explanation of the benefits.",
      "videoLink": "https://videos.bidgely.com/rec-67890.mp4",
      "ctaButtonLink": "https://bidgely.com/upgrade",
      "ctaButtonText": "Learn More",
      "icon": "https://media.bidgely.com/icons/rec-67890.png",
      "fullImage": "https://media.bidgely.com/images/rec-67890-full.jpg",
      "shortenedImage": "https://media.bidgely.com/images/rec-67890-short.jpg",
      "elongatedImage": "https://media.bidgely.com/images/rec-67890-elongated.jpg"
    }
  ],
  "updatedAt": 1701234567890
}
```

**Access Control:** `api::recommendation.reco-metadata-policy`

---

### GET `https://cms.bidgely.com/recommendation/v2/metadata/:pilotId`
**Description:** Retrieves the v2 metadata for all recommendations for a pilot, including additional fields such as action savings potential and frequency.

**Path Parameters:**

| Name   | Type   | Description          |
|--------|--------|----------------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name   | Type   | Description                                 |
|--------|--------|---------------------------------------------|
| status | string | External content status (`PUBLISHED` or `READY_FOR_QA`). |
| locale | string | Locale code (e.g., `en`, `fr`).             |
| channel | string | Channel type (`EMAIL`, `WEB`, `PAPER`, `DEFAULT`). |

**Example Response:**
```json
{
  "data": [
    {
      "recommendationId": "rec-54321",
      "fuelType": ["ELECTRIC"],
      "category": "ELECTRICITY",
      "applianceTags": [12],
      "disabled": false,
      "defaultReco": true,
      "featuredContent": false,
      "program": true,
      "title": "Switch to a smart thermostat",
      "description": "Reduce your electric bill by 15%.",
      "detail": "Detailed explanation of the benefits.",
      "videoLink": "https://videos.bidgely.com/rec-54321.mp4",
      "ctaButtonLink": "https://bidgely.com/thermostat",
      "ctaButtonText": "Buy Now",
      "icon": "https://media.bidgely.com/icons/rec-54321.png",
      "fullImage": "https://media.bidgely.com/images/rec-54321-full.jpg",
      "shortenedImage": "https://media.bidgely.com/images/rec-54321-short.jpg",
      "elongatedImage": "https://media.bidgely.com/images/rec-54321-elongated.jpg",
      "actionSavingsPotential": 120.50,   // Estimated savings in dollars
      "frequency": "one_time",           // Frequency of the action
      "userType": "residential",         // Target user type
      "actionType": "upgrade",           // Type of action
      "objective": "energy_efficiency",  // Campaign objective
      "herImage": "https://media.bidgely.com/images/rec-54321-her.jpg"
    }
  ],
  "updatedAt": 1701234567890
}
```

**Access Control:** `api::recommendation.reco-metadata-policy`

---

### GET `https://cms.bidgely.com/recommendation/v1/insight-definition/:pilotId`
**Description:** Retrieves insight definitions that map recommendation categories and fuel types to insight IDs for a pilot.

**Path Parameters:**

| Name   | Type   | Description          |
|--------|--------|----------------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name   | Type   | Description                     |
|--------|--------|---------------------------------|
| status | string | External content status (`PUBLISHED` or `READY_FOR_QA`). |

**Example Response:**
```json
{
  "data": [
    {
      "type": "PEER",                     // Insight association type
      "applianceTag": 17,                 // Appliance ID
      "fuelType": "ELECTRIC",
      "recommendations": ["rec-11111", "rec-22222"],   // Recommendation IDs
      "insightId": "T-17-E"               // Generated insight ID
    }
  ],
  "updatedAt": 1701234567890
}
```

**Access Control:** `api::recommendation.reco-model-policy`

---

### GET `https://cms.bidgely.com/recommendation/v1/last-updated-ts/:pilotId`
**Description:** Retrieves the timestamp of the last update for a pilot’s recommendation data.

**Path Parameters:**

| Name   | Type   | Description          |
|--------|--------|----------------------|
| pilotId | string | Unique identifier for the pilot. |

**Query Parameters:**

| Name   | Type   | Description                     |
|--------|--------|---------------------------------|
| status | string | External content status (`PUBLISHED` or `READY_FOR_QA`). |

**Example Response:**
```json
{
  "data": 1701234567890   // Timestamp of the last update (or null if not found)
}
```

**Access Control:** `api::recommendation.reco-model-policy`
