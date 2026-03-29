# Recommendations API

## Overview  
The **Recommendations API** exposes Bidgely’s recommendation engine data to internal services such as the Data Server and customer‑facing applications. It provides access to recommendation models, metadata, insight definitions, and the last‑updated timestamp for a given pilot (customer or product) ID. These endpoints are consumed by other Bidgely services that need to display or process recommendation information.

## Authentication  
All endpoints require a valid Bearer token:

```http
Authorization: Bearer <api_token>
```

No endpoint deviates from this default authentication scheme.

## Endpoints  

### GET https://cms.bidgely.com/recommendation/v1/model/:pilotId  
**Description:** Retrieves the full recommendation model for the specified pilot.  
**Access Control:** Requires `reco-model-policy` – authenticated users with recommendation read access.  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| pilotId   | string | Unique identifier for the pilot (customer or product). |

**Example Response:**  
```json
{
  "title": "Save on Your Water Bill",                     // Title of the recommendation
  "description": "Reduce your water usage by 15% with smart fixtures.", // Detailed description
  "ctaButtonText": "Learn More",                          // Text displayed on the call‑to‑action button
  "ctaButtonLink": "https://cms.bidgely.com/recommendations/123", // URL the CTA button points to
  "icon": { "url": "https://cdn.bidgely.com/icons/water.png", "alt": "Water icon" }, // Icon media object
  "shortenedImage": { "url": "https://cdn.bidgely.com/images/water_short.jpg", "alt": "Short image" }, // Shortened image media
  "fullImage": { "url": "https://cdn.bidgely.com/images/water_full.jpg", "alt": "Full image" }, // Full image media
  "detail": "Installing low‑flow showerheads can cut your monthly water bill by up to $30.", // Additional detail text
  "elongatedImage": { "url": "https://cdn.bidgely.com/images/water_long.jpg", "alt": "Elongated image" }, // Elongated image media
  "utility": { "id": "water", "name": "Water Utility" }, // Related utility entity
  "recommendationId": "rec-001",                         // Unique recommendation identifier
  "fuelType": ["WATER"],                                 // Fuel type(s) the recommendation applies to
  "featuredContent": true,                               // Whether this recommendation is featured
  "program": true,                                       // Whether this recommendation is part of a program
  "channelPaper": false,                                 // Whether to send via paper channel
  "channelEmail": true,                                  // Whether to send via email channel
  "disabled": false,                                     // Whether the recommendation is disabled
  "defaultReco": false,                                  // Whether this is the default recommendation
  "channelWeb": true,                                    // Whether to display on the web channel
  "videoLink": "https://videos.bidgely.com/water_tips.mp4", // Link to an associated video
  "score": { "confidence": 0.92, "impact": 0.15 },        // JSON score metrics
  "applianceProfileExclusion": { "applianceIds": [] },   // Appliances excluded from this recommendation
  "homeProfileExclusion": { "homeIds": [] },             // Homes excluded from this recommendation
  "ratePlanExclusion": { "planIds": [] },                // Rate plans excluded
  "ppExclusion": { "ppIds": [] },                        // Power‑plan IDs excluded
  "monthExclusion": { "months": [] },                    // Months excluded
  "insightAssociation": { "insightIds": [] },            // Associated insight IDs
  "category": "Water Conservation",                      // Recommendation category
  "verificationStatus": "READY_TO_PUBLISH",              // Verification status of the recommendation
  "editStatus": "PUBLISHED",                             // Edit status of the recommendation
  "actionSavingsPotential": 30.00,                       // Potential savings in dollars
  "frequency": "one_time",                               // Frequency of the recommendation
  "herImage": { "url": "https://cdn.bidgely.com/images/her.jpg", "alt": "HER image" }, // HER image media
  "userType": "Residential",                             // Target user type
  "actionType": "Install",                                // Type of action recommended
  "objective": "Reduce water consumption"                // Objective of the recommendation
}
```

---

### GET https://cms.bidgely.com/recommendation/v1/metadata/:pilotId  
**Description:** Retrieves metadata for the recommendation model of the specified pilot.  
**Access Control:** Requires `reco-metadata-policy` – authenticated users with metadata read access.  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| pilotId   | string | Unique identifier for the pilot. |

**Example Response:**  
```json
{
  "pilotId": "pilot-123",                                 // Pilot identifier
  "modelVersion": "v1.4.2",                               // Current model version
  "lastUpdated": "2026-03-28T14:35:00Z",                  // ISO 8601 timestamp of last update
  "recommendationCount": 42,                              // Number of recommendations in the model
  "fuelTypes": ["ELECTRIC", "WATER", "GAS"],              // Supported fuel types
  "categories": ["Energy Efficiency", "Water Conservation"], // Available categories
  "verificationStatus": "READY_TO_PUBLISH",              // Overall verification status
  "editStatus": "PUBLISHED"                               // Overall edit status
}
```

---

### GET https://cms.bidgely.com/recommendation/v2/metadata/:pilotId  
**Description:** Retrieves the latest version‑2 metadata for the recommendation model of the specified pilot.  
**Access Control:** Requires `reco-metadata-policy` – authenticated users with metadata read access.  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| pilotId   | string | Unique identifier for the pilot. |

**Example Response:**  
```json
{
  "pilotId": "pilot-123",                                 // Pilot identifier
  "modelVersion": "v2.0.0",                               // Current model version
  "lastUpdated": "2026-03-28T15:10:00Z",                  // ISO 8601 timestamp of last update
  "recommendationCount": 48,                              // Number of recommendations in the model
  "fuelTypes": ["ELECTRIC", "WATER", "GAS"],              // Supported fuel types
  "categories": ["Energy Efficiency", "Water Conservation", "Smart Home"], // Available categories
  "verificationStatus": "READY_TO_PUBLISH",              // Overall verification status
  "editStatus": "PUBLISHED",                              // Overall edit status
  "schemaVersion": "2.1",                                 // Schema version used for recommendations
  "featureFlags": { "enableVideo": true, "enableChat": false } // Feature flags for the model
}
```

---

### GET https://cms.bidgely.com/recommendation/v1/insight-definition/:pilotId  
**Description:** Retrieves insight definitions associated with the recommendation model for the specified pilot.  
**Access Control:** Requires `reco-model-policy` – authenticated users with recommendation read access.  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| pilotId   | string | Unique identifier for the pilot. |

**Example Response:**  
```json
{
  "pilotId": "pilot-123",                                 // Pilot identifier
  "insights": [
    {
      "insightId": "ins-001",                             // Unique insight identifier
      "title": "High Water Usage",                        // Title of the insight
      "description": "Your water usage is 20% above the average for your region.", // Insight description
      "category": "Water Conservation",                   // Insight category
      "severity": "high",                                 // Severity level (low, medium, high)
      "recommendationIds": ["rec-001", "rec-005"]         // Recommendations linked to this insight
    },
    {
      "insightId": "ins-002",
      "title": "Peak Electricity Demand",
      "description": "Your electricity usage peaks during the evening hours.",
      "category": "Energy Efficiency",
      "severity": "medium",
      "recommendationIds": ["rec-010"]
    }
  ]
}
```

---

### GET https://cms.bidgely.com/recommendation/v1/last-updated-ts/:pilotId  
**Description:** Returns the timestamp of the last update to the recommendation model for the specified pilot.  
**Access Control:** Requires `reco-model-policy` – authenticated users with recommendation read access.  

**Path Parameters:**  
| Parameter | Type   | Description |
|-----------|--------|-------------|
| pilotId   | string | Unique identifier for the pilot. |

**Example Response:**  
```json
{
  "pilotId": "pilot-123",                                 // Pilot identifier
  "lastUpdatedTimestamp": "2026-03-28T14:35:00Z"          // ISO 8601 timestamp of the last model update
}
```

---