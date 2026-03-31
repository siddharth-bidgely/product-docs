# CMS

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

CMS is the content management system used to create, edit, preview, and manage recommendation content in DETO. It is part of **Delivery Console** and is designed for recommendation content workflows rather than a simple draft/publish editor.

Teams use it to:
- edit recommendation content
- preview changes
- work on many items at once with bulk operations
- collaborate on content
- move content through a governed status workflow

The CMS also supplies recommendation-related content to **Data Server**, including:
- reco model
- metadata
- insight definitions

Because of this, what users publish or move through workflow states affects what downstream environments can see.

![CMS as a sub-module of Delivery Console](../../../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

## Key points

- CMS is a **sub-module of Delivery Console**.
- It supports more than a basic draft/publish flow. Content states include:
  - Draft
  - Modified
  - Ready for QA
  - Ready to Publish
  - Published
  - Unsaved
  - Discarded
- Workflow actions are governed by a **content status workflow** and **role-based access control**, so not every user can perform every transition.
- There are exactly **two CMS installations**:
  - **Production**
  - **Playground**
- Data visibility depends on the **Data Server environment** and the content **status**, not only on which CMS installation exists.

## How teams use this

CMS is intended for structured recommendation content delivery.

In practice, teams can:
- create and update recommendation content
- preview content before it is exposed downstream
- manage multiple content items through bulk operations
- collaborate while keeping content in controlled workflow states
- prepare content for QA and publishing based on role-sensitive permissions

The workflow is not free-form. Content moves through explicit states, and some states are editor-local or temporary, while others are part of the formal review and publishing process.

![Content Status Workflow](../../../assets/images/633110556-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

![RBAC workflow](../../../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

## Cross-system behavior admins should know

CMS does not only store content for editing. **Data Server currently gets recommendation-related content through CMS**.

That means environment behavior matters:

- **Production Data Server**
  - uses **Production** CMS
  - can see only **Published** content

- **UAT Data Server**
  - uses **Production** CMS
  - can see **Ready for QA** and **Published**

- **NonProdQA Data Server**
  - uses **Production** CMS
  - can see **Ready for QA** and **Published**

- **ProductQA Data Server**
  - uses **Playground** CMS
  - can see **Ready for QA** and **Published**

- **Dev Data Server**
  - uses **Playground** CMS
  - can see **Ready for QA** and **Published**

Two important implications follow from this:

- **Production is stricter** than the other listed environments, because it only consumes **Published** content.
- Some non-production environments do **not** use Playground. In particular, **UAT** and **NonProdQA** still query the **Production** CMS installation.

So if content exists in CMS but is not in an allowed status for a given environment, that environment will not see it.

![Current (Data Server)](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.12.40-E2-80-AFPM.png)

![via CMS](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.10.33-E2-80-AFPM.png)

## System behavior

At a high level, the CMS includes:
- a frontend for content work
- a CMS service
- a database
- a cache layer
- integration with Data Server

![System Architecture](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.07.30-E2-80-AFPM.png)

To keep content fresh across the system, CMS uses two cache roles:

- **Master Redis**
  - stores invalidation timestamps
  - stores metadata for:
    - Appliance Category
    - appliances
    - Home Profile

- **Subscription Redis**
  - keeps invalidation timestamps synchronized across running instances through pub/sub

A key detail is that invalidation is tracked at the **pilotId + status** level. This matters because content freshness and visibility are tied not just to the content item, but also to its workflow status.

If updates are not propagated correctly, users may see stale content behavior across environments or after status changes.

![Subscription Redis](../../../assets/images/633110556-Screenshot-202025-08-25-20at-201.32.45-E2-80-AFPM.png)

## Related documentation

- [Project Management](../../../features/project-management.md)
- [Recommendations](../../../features/recommendations.md)