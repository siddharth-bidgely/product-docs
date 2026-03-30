# CMS

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

The CMS (Content Management System) is a dedicated part of Bidgely’s Delivery Console that lets teams create, review, and publish content for energy‑utility projects. It provides a web interface for authors and reviewers, a backend that enforces workflow rules, and a database that stores all content and its metadata. The CMS works closely with the Data Server so that published content is available to recommendation models, surveys, and other downstream services.

---

## Technical specification (DEV) — System Design

### 1. Architecture Overview

The CMS is built as a separate service stack that lives inside the Delivery Console.  
It consists of three layers:

1. **Front‑end** – a web UI that authors use to write and edit content.  
2. **Service layer** – a backend that validates user actions, enforces status rules, and talks to the database.  
3. **Persistence** – a headless CMS database that stores the content and its history.

The overall architecture is shown below.

![System Architecture](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.07.30-E2-80-AFPM.png)

The CMS is tightly coupled to the Delivery Console, sharing data flows and user identities.

![CMS as a sub‑module of Delivery Console](../../../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

---

### 2. Core Components & Naming

| Layer | Component | What it does |
|-------|-----------|--------------|
| Front‑end | CMS Frontend | The web UI where authors and reviewers create and edit content. |
| Service | CMS Service | Handles all requests from the UI, checks permissions, and talks to the database. |
| Persistence | Strapi CMS | Stores the actual content, its metadata, and version history. |
| Cache | Master Redis | Keeps timestamps that signal when content has changed. |
| Cache | Subscription Redis | Sends notifications to all CMS instances when a timestamp changes. |
| Integration | Data Server | Reads content from the CMS to feed recommendation models and other downstream services. |
| Deployment | AWS bidgely‑prod / bidgely‑nonprod | Two separate environments for production and testing. |

---

### 3. Data Flow & Interaction

**Authoring Flow**  
1. A user edits content in the CMS Frontend.  
2. The Frontend sends a request to the CMS Service.  
3. The Service checks the user’s role, validates the change, and writes the new version to Strapi CMS.  
4. After a successful write, the Service updates Master Redis with a new timestamp for the affected pilot and status.  
5. Subscription Redis broadcasts this timestamp change to all CMS pods, which refresh their local caches.

![Subscription Redis](../../../assets/images/633110556-Screenshot-202025-08-25-20at-201.32.45-E2-80-AFPM.png)

**Data Server Consumption**  
- The Data Server queries the CMS Service for content that matches its environment’s allowed statuses (see table below).  
- The Service pulls the data from Strapi CMS (or from the cache if it is still fresh) and returns it to the Data Server.

![Current (Data Server)](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.12.40-E2-80-AFPM.png)

**Cache Invalidation**  
- When a content item’s status changes, the Service writes a new timestamp to Master Redis.  
- Subscription Redis propagates the change; each pod updates its local cache entry.  
- Subsequent reads from the Data Server or the Frontend consult the cache first; if the timestamp is stale, a fresh fetch from Strapi CMS occurs.

![via CMS](../../../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

---

### 4. Status Mapping by Environment

| Environment | Allowed Statuses (Data Server) |
|-------------|--------------------------------|
| Production | `PUBLISHED` |
| UAT | `READY_FOR_QA`, `PUBLISHED` |
| NonProdQA | `READY_FOR_QA`, `PUBLISHED` |
| ProductQA | *Same as UAT/NonProdQA* |
| Playground | `READY_FOR_QA`, `PUBLISHED` |
| Dev | `READY_FOR_QA`, `PUBLISHED` |

The CMS Service enforces these filters; requests for disallowed statuses are rejected.

---

### 5. Content Status Workflow

Content moves through a defined set of states:

1. **DRAFT** – initial creation.  
2. **MODIFIED** – edits after draft.  
3. **READY_FOR_QA** – submitted for quality assurance.  
4. **READY_TO_PUBLISH** – approved by QA.  
5. **PUBLISHED** – live on the platform.  
6. **UNSAVED** – temporary state for unsaved changes.  
7. **DISCARDED** – removed from the active workflow.

Transitions are enforced by the CMS Service:

- `DRAFT` → `MODIFIED` (on edit)  
- `MODIFIED` → `READY_FOR_QA` (submit)  
- `READY_FOR_QA` → `READY_TO_PUBLISH` (QA approval)  
- `READY_TO_PUBLISH` → `PUBLISHED` (publish)  
- Any state → `DISCARDED` (delete)  

Bulk status changes (e.g., publishing several items at once) are handled by a single API call that updates each item atomically. A single timestamp update per affected pilot and status is written to minimize cache churn.

![Content Status Workflow](../../../assets/images/633110556-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

---

### 6. RBAC Workflow

Roles determine what actions a user can perform:

- **Author** – create, edit, and submit content.  
- **Reviewer** – approve QA and set `READY_TO_PUBLISH`.  
- **Publisher** – publish content.  
- **Admin** – full control, including discarding and bulk operations.

Each request to the CMS Service carries a JWT token that identifies the user’s role. The Service validates the requested action against the role’s permissions. Unauthorized actions return a 403 error; missing or expired tokens return a 401 error.

![RBAC workflow](../../../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

---

### 7. Edge Cases & Constraints

| Edge Case | Handling |
|-----------|----------|
| **Simultaneous edits** | The Service locks the content record during an update; subsequent edits wait or fail with a conflict error. |
| **Cache miss** | If Master Redis is unavailable, the Service reads directly from Strapi CMS. |
| **Pub/Sub failure** | If Subscription Redis cannot publish, the pod logs the error and retries; stale cache entries may persist until the next refresh. |
| **Bulk operation failure** | If any item in a bulk request fails validation, the entire operation is rolled back to keep data consistent. |

---