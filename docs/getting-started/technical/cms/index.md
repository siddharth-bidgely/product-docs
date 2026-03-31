# CMS

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

**CMS for Recos** is the content management system used to create, edit, preview, and manage recommendation content in DETO. It is described as a **sub-module of Delivery Console**.

It supports a spreadsheet- or WYSIWYG-style editing experience for recommendation content, including:

- content editing
- previewing
- bulk operations
- collaboration
- explicit content state management

CMS for Recos is also the source that **Data Server** reads to get recommendation content, including the **reco model**, **metadata**, and **insight definitions**.

![CMS as a sub-module of Delivery Console](../../../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

## Key points

- CMS for Recos is the authoring and management layer for recommendation content.
- It has a formal content status workflow and role-based access control workflow.
- Content visibility depends on both the environment and the content status.
- There are only **two CMS installations**: **Production** and **Playground**.
- Some non-production environments still read from **Production** CMS, depending on the environment mapping.

## How teams use this

Teams use CMS for Recos to prepare recommendation content through a managed lifecycle before it is available to downstream systems.

The documented content states are:

- **Draft**
- **Modified**
- **Ready for QA**
- **Ready to Publish**
- **Published**
- **Unsaved**
- **Discarded**

The source also calls out:

- **Content Status Workflow**
- **RBAC workflow**

The detailed transition rules and role permissions are not included in the source summary, but the presence of both workflows is explicit.

![Content status workflow](../../../assets/images/633110556-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

![RBAC workflow](../../../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

## Content visibility by environment

What **Data Server** can read from CMS for Recos depends on the environment it is running in.

| Data Server environment | CMS installation used | Content statuses visible |
|---|---|---|
| Production | Production | PUBLISHED |
| UAT | Production | READY_FOR_QA, PUBLISHED |
| NonProdQA | Production | READY_FOR_QA, PUBLISHED |
| ProductQA | Playground | READY_FOR_QA, PUBLISHED |
| Dev | Playground | READY_FOR_QA, PUBLISHED |

What this means in practice:

- **Production** only sees content in **PUBLISHED**.
- QA-like environments can see **READY_FOR_QA** and **PUBLISHED**.
- Not every non-production environment uses **Playground**.
- **UAT** and **NonProdQA** read from **Production** CMS.

## Cross-system behavior

CMS for Recos is consumed by **Data Server**, which reads:

- **reco model**
- **metadata**
- **insight definitions**

The system is designed with two installations:

- **Production**
- **Playground**

This setup is controlled by environment mapping and content status rules rather than a separate CMS instance for every environment.

![System architecture](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.07.30-E2-80-AFPM.png)

## Content freshness and cache behavior

To keep recommendation content current for downstream readers, the system tracks recommendation freshness using invalidation timestamps.

Important details called out in the source:

- freshness is tracked at **pilotId + status** level
- **Master Redis** stores invalidation timestamps and cached metadata
- **Subscription Redis** is used to sync invalidation updates across running instances

The metadata specifically mentioned in cache is:

- **Appliance Category**
- **appliances**
- **Home Profile**

For admins, the main implication is that content availability is not only about editing and publishing. It also depends on the content status being correct and freshness updates being propagated correctly so downstream readers do not continue using stale content.

![Subscription Redis](../../../assets/images/633110556-Screenshot-202025-08-25-20at-201.32.45-E2-80-AFPM.png)

## Deployment notes

The source includes a deployment workflow section with references to:

- **Current (Data Server)**
- **via CMS**

This indicates that recommendation content is currently delivered through CMS and consumed by **Data Server**, but the detailed release mechanics are not described in the provided summary.

![Current (Data Server)](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.12.40-E2-80-AFPM.png)

![via CMS](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.10.33-E2-80-AFPM.png)

## Related documentation

- [Recommendations](../../../features/recommendations.md)
- [Project Management](../../../features/project-management.md)