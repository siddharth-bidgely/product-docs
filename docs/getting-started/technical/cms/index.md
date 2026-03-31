# CMS

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

CMS is the content management system used to create, edit, preview, and manage recommendations in DETO. It is described as a sub-module of **Delivery Console**.

The experience is similar to a spreadsheet or WYSIWYG-style editor, with support for content editing, previewing, bulk operations, collaboration, and explicit content state management.

![CMS as a sub-module of Delivery Console](../../../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

## Key points

- CMS is used for recommendation content management.
- It supports a multi-step content lifecycle, not just draft and publish.
- Production systems only consume **Published** content.
- Some non-production environments read from **Production** CMS, while others read from **Playground** CMS.
- Content visibility depends on both:
  - which CMS installation is queried
  - which content statuses that environment is allowed to read

## How teams use this

Teams use CMS to manage recommendation content through an editorial workflow before that content is consumed by downstream systems.

The supported content states are:

- Draft
- Modified
- Ready for QA
- Ready to Publish
- Published
- Unsaved
- Discarded

This allows teams to prepare and validate content before it is made available in production. In practice:

- **Production** runtime uses only **Published** content.
- QA-like environments can use both **Ready for QA** and **Published** content.

![Content status workflow](../../../assets/images/633110556-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

## Cross-system behavior

CMS has **2 installations** in this design:

- **Production** in **AWS bidgely-prod**
- **Playground** in **AWS bidgely-nonprod**

**Data Server** reads recommendation content from CMS. Which CMS installation it reads from, and which content statuses it can see, depends on the environment:

| Data Server environment | CMS installation queried | Visible statuses |
|---|---|---|
| Production | Production | PUBLISHED |
| UAT | Production | READY_FOR_QA, PUBLISHED |
| NonProdQA | Production | READY_FOR_QA, PUBLISHED |
| ProductQA | Playground | READY_FOR_QA, PUBLISHED |
| Dev | Playground | READY_FOR_QA, PUBLISHED |

This is important because not all non-production environments use Playground. In particular, **UAT** and **NonProdQA** still read from **Production** CMS, but with broader status visibility than Production.

![Current (Data Server)](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.12.40-E2-80-AFPM.png)

![via CMS](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.10.33-E2-80-AFPM.png)

## System behavior admins should know

The CMS deployment includes a service, database, and cache. Caching is coordinated using:

- **Master Redis**
- **Subscription Redis**

CMS keeps some recommendation-related data and metadata in cache. Cache invalidation is tracked at the **pilotId + status** level, and updates are synchronized across running instances through **Subscription Redis**.

For admins, the practical implication is that content freshness depends on cache invalidation being propagated correctly. Because invalidation is coordinated across instances, updates may briefly take time to appear everywhere, and invalidation can affect a broader set of recommendation data within the same pilot and status scope.

![System architecture](../../../assets/images/633110556-Screenshot-202025-08-25-20at-2012.07.30-E2-80-AFPM.png)

![Subscription Redis](../../../assets/images/633110556-Screenshot-202025-08-25-20at-201.32.45-E2-80-AFPM.png)

## Notes

A **RBAC workflow** is called out in the source material, but no role or permission details are provided in the available summary.

![RBAC workflow](../../../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

## Related documentation

- [Recommendations](../../../features/recommendations.md)