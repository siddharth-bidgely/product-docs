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

*Narrative descriptions complement the OpenAPI widget above; if they differ, treat the machine-readable YAML as authoritative.*

## Endpoints

## Endpoints

### GET /recommendation/v1/model/:pilotId

**Description:** Returns the recommendation model for a pilot, including the default profile, transformed recommendation records, the last-updated timestamp for the requested external content status, and the requested region.

**Path Parameters:**

| Name      | Type   | Required | Description                                   |
| --------- | ------ | -------: | --------------------------------------------- |
| `pilotId` | string |      Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name     | Type   | Required | Description                                                                                                                                                     |
| -------- | ------ | -------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status` | string |      Yes | External content status to resolve. Supported by the implementation for external reads, including `PUBLISHED` and `READY_FOR_QA` (Ready for Quality Assurance). |
| `region` | string |       No | Region value echoed back in the response. Examples noted in the implementation include `US`, `CA`, and `EU`.                                                    |

**Example Response:**

```json
{
  "data": {
    "defaultProfile": [
      "HOME:OWN", 
      "HEAT:PUMP", 
      "AP:17:C:1-" 
    ],
    "model": [
      {
        "recommendationId": "RECO_1001",
        "fuelType": [
          "ELECTRIC"
        ],
        "category": "HVAC",
        "applianceTags": [
          12
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
        "recommendationId": "RECO_1002",
        "fuelType": [
          "GAS",
          "ELECTRIC"
        ],
        "category": "WATER_HEATING",
        "applianceTags": [
          0,
          17
        ],
        "disabled": false,
        "defaultReco": false,
        "relevanceScore": 0.542,
        "exclusions": [
          "AP:5|6:C:1-"
        ]
      }
    ]
  },
  "updatedAt": 1735689600000,
  "region": "US"
}
```

**Response Notes:**

* `data.defaultProfile` is an array of profile tags derived from the utility’s default home-profile and appliance-profile values.
* `data.model[].applianceTags` is an array of appliance tag IDs. When the resolved appliance ID is `0`, the API also adds secondary appliance tag `17`.
* `data.model[].exclusions` is a flattened list of exclusion tags derived from:
  * home profile exclusions,
  * appliance profile exclusions,
  * rate plan exclusions,
  * program participation exclusions,
  * month exclusions.
* `updatedAt` is a timestamp in milliseconds since epoch. If no cached timestamp exists, the service sets one before returning.
* `region` echoes the `region` query parameter value.

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

***

### GET /recommendation/v1/metadata/:pilotId

**Description:** Returns recommendation metadata for a pilot in version 1 format, filtered by external content status, locale, and channel.

**Path Parameters:**

| Name      | Type   | Required | Description                                   |
| --------- | ------ | -------: | --------------------------------------------- |
| `pilotId` | string |      Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name      | Type   | Required | Description                                                                    |
| --------- | ------ | -------: | ------------------------------------------------------------------------------ |
| `status`  | string |      Yes | External content status to resolve.                                            |
| `locale`  | string |      Yes | Locale to use for localized recommendation content.                            |
| `channel` | string |      Yes | Delivery channel filter. Supported values: `EMAIL`, `WEB`, `PAPER`, `DEFAULT`. |

**Example Response:**

```json
{
  "data": [
    {
      "recommendationId": "RECO_1001",
      "fuelType": [
        "ELECTRIC"
      ],
      "category": "HVAC",
      "applianceTags": [
        12
      ],
      "disabled": false,
      "defaultReco": true,
      "featuredContent": true,
      "program": false,
      "title": "Tune up your heat pump",
      "description": "Improve efficiency with a seasonal tune-up.",
      "detail": "A professional tune-up can improve performance and reduce energy waste.", 
      "videoLink": "https://www.bidgely.com/videos/heat-pump-tune-up", 
      "ctaButtonLink": "https://www.bidgely.com/learn/heat-pump-tune-up", 
      "ctaButtonText": "Learn more", 
      "icon": "https://cms.bidgely.com/uploads/reco_icon_heat_pump.png", 
      "fullImage": "https://cms.bidgely.com/uploads/reco_full_heat_pump.png", 
      "shortenedImage": "https://cms.bidgely.com/uploads/reco_short_heat_pump.png", 
      "elongatedImage": "https://cms.bidgely.com/uploads/reco_long_heat_pump.png" 
    }
  ],
  "updatedAt": 1735689600000
}
```

**Response Notes:**

* Version 1 metadata includes core recommendation presentation fields and media URLs.
* `applianceTags` contains appliance tag IDs associated with the recommendation category.
* `updatedAt` is a timestamp in milliseconds since epoch.

**Access Control:** Protected by policy `api::recommendation.reco-metadata-policy`.

***

### GET /recommendation/v2/metadata/:pilotId

**Description:** Returns recommendation metadata for a pilot in version 2 format, extending version 1 with additional action and Home Energy Report fields.

**Path Parameters:**

| Name      | Type   | Required | Description                                   |
| --------- | ------ | -------: | --------------------------------------------- |
| `pilotId` | string |      Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name      | Type   | Required | Description                                                                    |
| --------- | ------ | -------: | ------------------------------------------------------------------------------ |
| `status`  | string |      Yes | External content status to resolve.                                            |
| `locale`  | string |      Yes | Locale to use for localized recommendation content.                            |
| `channel` | string |      Yes | Delivery channel filter. Supported values: `EMAIL`, `WEB`, `PAPER`, `DEFAULT`. |

**Example Response:**

```json
{
  "data": [
    {
      "recommendationId": "RECO_1001",
      "fuelType": [
        "ELECTRIC"
      ],
      "category": "HVAC",
      "applianceTags": [
        12
      ],
      "disabled": false,
      "defaultReco": true,
      "featuredContent": true,
      "program": false,
      "title": "Tune up your heat pump",
      "description": "Improve efficiency with a seasonal tune-up.",
      "detail": "A professional tune-up can improve performance and reduce energy waste.", 
      "videoLink": "https://www.bidgely.com/videos/heat-pump-tune-up", 
      "ctaButtonLink": "https://www.bidgely.com/learn/heat-pump-tune-up", 
      "ctaButtonText": "Learn more", 
      "icon": "https://cms.bidgely.com/uploads/reco_icon_heat_pump.png", 
      "fullImage": "https://cms.bidgely.com/uploads/reco_full_heat_pump.png", 
      "shortenedImage": "https://cms.bidgely.com/uploads/reco_short_heat_pump.png", 
      "elongatedImage": "https://cms.bidgely.com/uploads/reco_long_heat_pump.png", 
      "actionSavingsPotential": 18.5, 
      "frequency": "one_time", 
      "userType": "homeowner", 
      "actionType": "maintenance", 
      "objective": "reduce_consumption", 
      "herImage": "https://cms.bidgely.com/uploads/reco_her_heat_pump.png" 
    }
  ],
  "updatedAt": 1735689600000
}
```

**Response Notes:**

* Version 2 includes all version 1 fields plus:
  * `actionSavingsPotential`,
  * `frequency`,
  * `userType`,
  * `actionType`,
  * `objective`,
  * `herImage` (Home Energy Report image).
* `updatedAt` is a timestamp in milliseconds since epoch.

**Access Control:** Protected by policy `api::recommendation.reco-metadata-policy`.

***

### GET /recommendation/v1/insight-definition/:pilotId

**Description:** Returns insight definitions for a pilot, grouped by appliance category, insight association type, and fuel type.

**Path Parameters:**

| Name      | Type   | Required | Description                                   |
| --------- | ------ | -------: | --------------------------------------------- |
| `pilotId` | string |      Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name     | Type   | Required | Description                                                                                                                                                     |
| -------- | ------ | -------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status` | string |      Yes | External content status to resolve. Supported by the implementation for external reads, including `PUBLISHED` and `READY_FOR_QA` (Ready for Quality Assurance). |

**Example Response:**

```json
{
  "data": [
    {
      "type": "SELF",
      "applianceTag": 12,
      "fuelType": "ELECTRIC",
      "recommendations": [
        "RECO_1001",
        "RECO_1007"
      ],
      "insightId": "HVAC-T-SC-E"
    },
    {
      "type": "PEER",
      "applianceTag": 8,
      "fuelType": "GAS",
      "recommendations": [
        "RECO_1010"
      ],
      "insightId": "WH-T-NC-G"
    }
  ],
  "updatedAt": 1735689600000
}
```

**Response Notes:**

* Only non-disabled recommendations are included.
* `type` is derived from the insight association:
  * `NC` → `PEER`
  * `SC` → `SELF`
  * `CC` → `APPLIANCE_CONSUMPTION_BASED`
* `insightId` is generated from appliance-category shortcode, a fixed `-T-` segment, association code, and the first letter of fuel type.

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

***

### GET /recommendation/v1/last-updated-ts/:pilotId

**Description:** Returns the cached last-updated timestamp for recommendation data for a pilot and external content status.

**Path Parameters:**

| Name      | Type   | Required | Description                                            |
| --------- | ------ | -------: | ------------------------------------------------------ |
| `pilotId` | string |      Yes | Pilot identifier used to look up the cached timestamp. |

**Query Parameters:**

| Name     | Type   | Required | Description                                                       |
| -------- | ------ | -------: | ----------------------------------------------------------------- |
| `status` | string |      Yes | External content status whose cache timestamp should be returned. |

**Example Response:**

```json
{
  "data": 1735689600000
}
```

**Response Notes:**

* `data` is the last-updated timestamp in milliseconds since epoch.
* If no timestamp exists, the API returns `null`.

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

***

### GET /recommendation/v1/count/:pilotId

**Description:** Returns the number of recommendations available for a pilot for the requested external content status.

**Path Parameters:**

| Name      | Type   | Required | Description                                   |
| --------- | ------ | -------: | --------------------------------------------- |
| `pilotId` | string |      Yes | Pilot identifier used to resolve the utility. |

**Query Parameters:**

| Name     | Type   | Required | Description                         |
| -------- | ------ | -------: | ----------------------------------- |
| `status` | string |      Yes | External content status to resolve. |

**Example Response:**

```json
{
  "data": {
    "count": 42
  }
}
```

**Response Notes:**

* `data.count` is the number of recommendations returned by the external-status filter for the resolved utility.

**Access Control:** Protected by policy `api::recommendation.reco-model-policy`.

***
