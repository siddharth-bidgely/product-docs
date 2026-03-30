# Recommendations API

<swagger-ui src="/assets/openapi/recommendations.yaml"/>

## Authentication

All endpoints require a valid Bearer token:

```http
Authorization: Bearer <api_token>
```

## Access Control

Endpoints are protected by Strapi policies that enforce role-based access. Refer to each operation's `x-policies` field in the spec above for specific policy requirements.

## Endpoints

### GET /recommendations

Retrieves recommendation model data based on the specified status and optional channel.

**Query Parameters**

| Name    | Type   | Required | Description                                                                |
| ------- | ------ | -------- | -------------------------------------------------------------------------- |
| status  | string | Yes      | The content status to filter recommendations (e.g., `active`, `inactive`). |
| channel | string | No       | The channel identifier to filter recommendations (e.g., `web`, `mobile`).  |

**Example Request**
