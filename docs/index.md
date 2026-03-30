# Platform overview

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=931495969)

## Overview

Bidgely’s **DETO (Delivery Tools)** is a fully self‑serve, enterprise‑grade SaaS platform that lets customers onboard, configure, and launch Bidgely solutions without any manual hand‑off to delivery, QA, or AIG teams. It delivers a low‑touch, consumer‑app‑like experience while still offering the depth and configurability required by large utilities.

## Key points

- **Time to First Test** – 1 day  
- **Time to Revenue Recognition** – 60 days  
- **% of users completing setup without support** – 80 %  
- **CSAT for onboarding** – 8/10  
- **Avg. support tickets during setup** – < 0.5 per customer  

## How teams use this

| Role | Primary Responsibilities | Typical Actions |
|------|--------------------------|-----------------|
| **Enterprise Admin / CX Manager** | Configure product UI, roles, customer experience, and reporting workflows. Own non‑technical launch process. | Use the **Setup Assistant** to define roles, branding, and launch readiness. |
| **IT Manager** | Set up SSO, map and load data, monitor pipelines, and ensure stable integration with customer systems. | Configure **Single Sign‑On (SSO)**, connect source systems via the **Self‑Serve Integrations Marketplace**, map data fields, and monitor ingestion health. |

## Product specification (PM) — Vision

### Platform Overview – Vision Summary

Bidgely’s DETO platform is designed to empower utilities to deliver energy‑efficiency solutions entirely in‑house, with minimal external support. The platform’s core promise is a **fully self‑serve, enterprise‑grade SaaS experience** that lets customers onboard, configure, and launch Bidgely solutions without any manual hand‑off to delivery, QA, or AIG teams. The goal is to provide a low‑touch, consumer‑app‑like experience that still offers the depth and configurability required by large enterprises.

The platform achieves this through a combination of guided wizards, AI‑assisted checks, real‑time validation, and a rich set of pre‑configured templates and integrations. It supports both non‑technical and technical users, allowing enterprise admins to configure the product experience and IT managers to set up secure data pipelines and integrations. The result is a self‑serve journey that reduces time‑to‑value, frees Bidgely resources, and ensures high‑quality launches with minimal post‑go‑live incidents.

#### 1. Vision & Business Intent  

- **Goal:** Deliver a *fully self‑serve, enterprise‑grade SaaS platform* that lets customers onboard, configure, and launch Bidgely solutions without any manual hand‑off to delivery, QA, or AIG teams.  
- **Outcome:** A low‑touch, consumer‑app‑like experience that still offers the depth and configurability required by large enterprises.  
- **Success Metrics:**  
  - *Time to First Test* – 1 day  
  - *Time to Revenue Recognition* – 60 days  
  - *% of users completing setup without support* – 80 %  
  - *CSAT for onboarding* – 8/10  
  - *Avg. support tickets during setup* – < 0.5 per customer  

#### 2. Target Users & Roles  

| Role | Primary Responsibilities | Typical Actions |
|------|---------------------------|-----------------|
| **Enterprise Admin / CX Manager** | Configure product UI, roles, customer experience, and reporting workflows. Own non‑technical launch process. | Use the **Setup Assistant** to define roles, branding, and launch readiness. |
| **IT Manager** | Set up SSO, map and load data, monitor pipelines, and ensure stable integration with customer systems. | Configure **Single Sign‑On (SSO)**, connect source systems via the **Self‑Serve Integrations Marketplace**, map data fields, and monitor ingestion health. |

#### 3. Core Goals (User‑Facing)

1. **Product Available for Interaction & Testing on Day 1** – Sign‑in → immediate access to console, web, widgets, reports, CSR console.  
2. **Full Self‑Setup in Under 30 Days** – Sign‑in → configure → load data → launch reports.  
3. **No Dependency on Human Support** – Guided wizard, AI‑assisted checks, and real‑time validation eliminate the need for Bidgely teams.  
4. **Enterprise‑Ready Flexibility** – Role‑based access control, data imports, application integration, soft‑launch capabilities.  
5. **In‑Product Education & Automation** – Smart defaults, contextual walkthroughs, micro‑videos, and AI‑powered recommendations.

#### 4. Key Features & Product Vocabulary  

| Feature | Product Vocabulary | What the User Sees / Clicks |
|---------|--------------------|-----------------------------|
| Guided onboarding | **Setup Assistant (Wizard)** | Step‑by‑step screens for roles, branding, data, integrations, launch. |
| Pre‑configured templates | **Dynamic Templates & Presets** | Industry‑specific templates (CX, HERs, TOU) that auto‑configure modules. |
| Inline help | **In‑Product Help & Tooltips** | Hover‑over icons, glossary terms, micro‑videos. |
| Safe testing | **Sandbox Mode** (Sample Data / Production Data) | Toggle between sample or live data, preview mode before committing. |
| Integration point | **Self‑Serve Integrations Marketplace** | Point‑and‑click connectors (Snowflake, DataBricks, APIs). |
| Identity | **Single Sign‑On (SSO) Setup** | Configure Okta, Azure AD, etc., with built‑in validation. |
| Data mapping | **Data Mapping & Ingestion Orchestration** | Drag‑and‑drop field mapping, transformation rules, job scheduling. |
| Data health | **Data Quality & Load Validation** | Dashboard of missing fields, duplicates, gaps, formatting issues. |
| AI guidance | **Automated AI Setup Review, Suggestions & Data Review** | Notifications for incomplete sections, logic inconsistencies, visual output previews. |
| Launch control | **Soft Launch & Full Launch Orchestration** | Schedule phased roll‑outs, feature toggles, rollback options. |
| Monitoring | **Live Data Monitoring Dashboard** | Real‑time pipeline health, anomaly alerts, key performance metrics. |

#### 5. User‑Facing Workflows  

##### 5.1 Non‑Technical Setup Flow (Enterprise Admin / CX Manager)

1. **Apply Program Template** (hidden from customer)  
   - Bidgely employee selects a pre‑built template (e.g., TOU, CX, HERS).  
   - Auto‑configures modules, branding guidelines, regional settings (metric/imperial, peak months, plug types).  

2. **Sign In & Day 1 Access**  
   - Console opens with pre‑configured products (Web, Widgets, Reports, CSR Console).  
   - Sample or default data is available for immediate testing.  

3. **Launch Setup Assistant**  
   - Wizard screens: Role setup → Product configuration → Branding → Launch readiness.  
   - Tooltips, videos, and smart defaults provide contextual help.  

4. **Configure Roles & Invite Users**  
   - Create internal teams with pre‑defined or custom role permissions.  
   - Invite users; access staged for design reviews, testing, rollout.  

5. **Use Sandbox Mode for Testing**  
   - Test workflows (report generation, web & widget flows, CSR Console) by persona (Solar, Budget Billing, etc.).  
   - Choose sample or production data; preview mode before committing.  

6. **AI‑Powered Setup Review**  
   - System flags missing inputs, config gaps, logic inconsistencies.  
   - Visuals confirm outcomes (e.g., TOU savings projections, segmentation accuracy).  

7. **Schedule Soft Launch**  
   - Define pilot rollout with scoped customer or feature visibility.  
   - Real‑time monitoring begins; metrics surface on product performance.  

8. **Transition to Full Launch**  
   - System auto‑orchestrates full production after validations pass, or user manually schedules.  
   - All users and workflows go live with alerting for anomalies or data issues.  

9. **Monitor Live Product Performance**  
   - Dashboards show:  
     - Number of customers by fuel type, rate plan, persona.  
     - Disaggregation coverage.  
     - Reports delivered per billing period.  
     - Anomaly and failure alerts.  
     - Trendlines and health indicators.  

##### 5.2 Technical Setup Flow (IT Manager)

1. **Configure SSO**  
   - Set up and test SSO via Okta, Azure AD, or similar.  
   - Built‑in validation ensures correct access policies and role mappings.  

2. **Connect Source Systems**  
   - Use the **Self‑Serve Integrations Marketplace** to connect to Snowflake, DataBricks, or internal APIs.  
   - Choose batch or real‑time ingestion modes.  

3. **Map Data Fields**  
   - Drag‑and‑drop mapping tool aligns source data to Bidgely’s schema.  
   - Supports historical loads, transformations, and incremental daily syncs.  

4. **Configure Ingestion Jobs**  
   - Schedule historical and incremental loads.  
   - Visual dashboard shows job status, sync logs, and built‑in alerting.  

5. **Validate Data Quality**  
   - Automated checks for missing fields, schema mismatches, volume drops, null anomalies.  
   - Summary health reports generated.  

6. **Monitor Ongoing Integration Health**  
   - Continuous monitoring of pipelines and data quality.  
   - Live reports available; proactive alerts for sync frequency, completeness, or format changes.  

#### 6. Screens & Interactions (What Users Click or Configure)

| Screen | Key Interactions | Product Vocabulary |
|--------|------------------|--------------------|
| **Login Page** | Enter credentials, click “Sign In” | – |
| **Console Dashboard** | View product tiles (Web, Widgets, Reports, CSR Console), click to open | – |
| **Setup Assistant** | Next/Back buttons, “Skip” option, “Save” | **Setup Assistant** |
| **Role Management** | Add role, assign permissions, invite user | – |
| **Branding & UI** | Upload logo, choose color scheme, toggle “Use Sample Data” | – |
| **Sandbox Mode Toggle** | Switch between “Sample Data” and “Production Data” | **Sandbox Mode** |
| **Integrations Marketplace** | Search connector, click “Connect”, configure credentials | **Self‑Serve Integrations Marketplace** |
| **Data Mapping Canvas** | Drag source field → target field, set transformation | **Data Mapping & Ingestion Orchestration** |
| **Data Quality Dashboard** | View alerts, click to drill‑down | **Data Quality & Load Validation** |
| **AI Review Panel** | View AI suggestions, click “Fix” or “Ignore” | **Automated AI Setup Review** |
| **Launch Scheduler** | Set soft‑launch date, toggle feature flags, click “Schedule” | **Soft Launch & Full Launch Orchestration** |
| **Live Monitoring Dashboard** | View metrics, click alerts, open trend charts | **Live Data Monitoring Dashboard** |

#### 7. Business Intent & Outcomes

- **Self‑Serve Empowerment:** Customers can independently complete the entire onboarding journey, reducing time‑to‑value and freeing Bidgely resources.  
- **Quality Assurance:** AI‑driven reviews and real‑time validation ensure that configurations are correct before launch, lowering post‑go‑live incidents.  
- **Scalable Launch:** Soft‑launch capabilities let enterprises test with a subset of customers, gather feedback, and roll out fully with confidence.  
- **Continuous Visibility:** Live dashboards give admins and IT managers real‑time insight into data health, pipeline status, and product performance, enabling proactive issue resolution.  

#### 8. Summary for Documentation Writers

- **Use the exact product names** (Setup Assistant, Sandbox Mode, etc.) as they appear in the UI.  
- **Describe the step‑by‑step flow** for both non‑technical and technical users, highlighting where the wizard can be skipped or customized.  
- **Emphasize the AI‑powered review** as a safety net that catches missing inputs or logic errors before launch.  
- **Include the key metrics** that admins will monitor post‑launch (customer counts, disaggregation coverage, report delivery rates, anomaly alerts).  
- **Show the toggle between sample and production data** in Sandbox Mode, and explain the preview capability.  
- **Detail the integration process**: marketplace selection, SSO configuration, data mapping, job scheduling, and health monitoring.  

With this distilled overview, a documentation writer can craft clear, role‑specific guides that walk users through every screen, action, and