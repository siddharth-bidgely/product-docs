# CX Visual Editor

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=975110165)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1039237136)
    - [Confluence 3](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1504018492)
    - [Confluence 4](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1028194310)
    - [Confluence 5](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1079345206)

## Overview

Visual template editor for customer experience content

**CX Template Editor & Data Scenarios – Product Specification Summary**  
*(Target audience: LLM that will write end‑user documentation for Product Managers, Customer Success, and admins)*  

---

### 1.  Product Overview  
The **CX Template Editor** is a self‑serve, WYSIWYG tool built into the **DETO** “Content Management” section. It lets users edit the content, images, colors, and layout of all customer‑facing assets – **Emails, Paper Reports (HER), Web Widgets, and SMS templates** – while showing a live, code‑backed preview that reflects the production logic.  

The companion **Data Scenarios** module supplies realistic data sets that drive the preview. Two levels exist:  
* **Global Data Scenarios** – managed by PM/DM admins and available to every project.  
* **Project‑Level Scenarios** – created and maintained by TPMs/Delivery teams for a specific project.  

The editor is designed for **element‑level configuration**, **cluster overrides**, **multi‑language editing**, **scenario‑driven previews**, and a **structured approval workflow** that includes audit trails and RBAC.

---

### 2.  Business Goals  

| Goal | Why it matters |
|------|----------------|
| **Self‑serve content configuration** | Enables TPMs, Delivery teams, and Utility users to tailor channel templates without developer intervention. |
| **Production‑aligned live editor** | Eliminates mis‑alignments between design tools (e.g., Figma) and the actual code, reducing change‑request cycles and project delays. |
| **Controlled variations** | Allows project‑specific tweaks while enforcing global brand defaults, preventing untested custom behaviors. |
| **Reduced QA/UAT cycles** | Utilities can preview templates under multiple data scenarios before launch, catching issues early. |
| **Governance & auditability** | RBAC, audit trails, and approval workflows give ownership to utilities and provide clear audit trails for project teams. |

---

### 3.  Roles & Permissions (RBAC)

| Role | Primary Permissions | Typical Activities |
|------|---------------------|--------------------|
| **Utility User** (DSM, Marketing) | View & edit content of in‑scope templates/elements (when enabled). Sign‑off on components/templates. | Edit text, images, colors; manage brand palette; compare versions; sign‑off. |
| **TPM / Delivery Engineer** | Full access to Visual Editor. Create & manage project‑level Data Scenarios. | Configure templates, track sign‑offs, audit history, ensure readiness for production. |
| **PM / DM (Admin)** | Manage Global Data Scenarios (via Administration menu). Clone scenarios for projects. | Set baseline scenarios, maintain global defaults. |
| **PM / PE** | Access for testing, debugging, and validation. | Verify template rendering, debug issues. |
| **QA** | Read‑only preview, scenario validation, sign‑off tracking. | Validate final output, confirm sign‑off status. |

---

### 4.  Core User Stories  

| Actor | Goal | Outcome |
|-------|------|---------|
| **Utility User** | Edit asset content (text, images, colors, layout) within approved limits. | Customised templates that match brand guidelines. |
| | Manage brand colors via a single palette. | Consistent look across Web, Email, and Paper. |
| | Compare different template versions across personas & data scenarios. | Ability to select the best variant. |
| | Sign‑off on components/templates after internal review. | Internal approvals respected before final release. |
| **TPM / Delivery Engineer** | Configure content in absence of a Utility user. | Client sees correct personalized output. |
| | Track utility sign‑offs and audit history. | Clear visibility of progress and accountability. |
| | Ensure configuration is complete before production rollout. | Reduced risk of incomplete assets. |
| **PM** | Define Global Data Scenarios. | Standard baseline for all projects. |
| | Clone & adapt Global Scenarios for project needs. | Preserve defaults while allowing project‑specific variations. |
| **DE** | Creat

**CX Editor (WYSIWYG) User Guide – Executive Summary**  
*(600–1200 words – ready for a downstream documentation writer)*  

---

### 1. Overview  
The **CX Editor** is a browser‑based, WYSIWYG tool that lets teams design, edit, and preview customer‑facing communications across four channels: **Email, HER (Home Energy Report), Web, and SMS**. It is the single point of truth for all template assets, supporting real‑time rendering, localiza

_(Summary truncated — use the Confluence links in the box above for the full spec.)_

## Key Capabilities

- Visual template editor for customer experience content
- Use the app area: **CX Visual Editor**

## User Guide

### Using this feature

1. Open the [Confluence specification](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=975110165) for detailed workflows and screenshots.
2. In the platform, use the navigation entry for **CX Visual Editor** to access the main screens described there.
3. For access or environment issues, contact your system administrator.

![Main screen](../assets/images/975110165-image-20251002-104113.png)

## Configuration Options

Configuration is managed by system administrators.

## Related Features

- [Project Management](project-management.md)
- [Environment Management](environment-management.md)
