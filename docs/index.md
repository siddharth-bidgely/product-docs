# Platform overview

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=931495969)

## Overview

DETO (Delivery Tools) is Bidgely’s self‑serve platform that lets energy utilities launch and manage their digital products—recommendations, surveys, pilots, and CMS workflows—without needing external support. From the moment a customer logs in, the platform guides them through configuration, data integration, testing, and phased rollout, all within the same console. The goal is to give utilities the ability to go from a fresh login to a fully operational product in just a few days, while keeping the process simple, secure, and fully automated.

## Key points

- **Day‑1 availability** – All core products (web, widgets, reports, CSR console) are ready to use immediately after a template is applied.  
- **Self‑setup in under 30 days** – Configuration, data load, and launch can be completed without Bidgely delivery, QA, or AIG teams.  
- **No dependency on human support** – The guided wizard, smart defaults, and AI checks let users finish setup without reaching out for help.  
- **Enterprise‑ready flexibility** – Role‑based access, data imports, application integration, and phased launch options are built in.  
- **In‑product education & automation** – Contextual walkthroughs, tooltips, micro‑videos, and AI‑driven reviews keep users on track.

## How teams use this

### Enterprise Admin / CX Manager (Non‑technical flow)

1. **Apply a Program Template** – Choose a pre‑built template (e.g., TOU, CX, HERS). The console auto‑configures modules, loads branding, and sets regional settings.  
2. **Day‑1 Access** – Log in to a ready‑to‑use console. Sample data or default reports are available for immediate testing.  
3. **Launch the Setup Assistant** – A step‑by‑step wizard walks through role setup, product configuration, branding, and launch readiness. Tooltips and micro‑videos provide help on the fly.  
4. **Configure Roles & Invite Users** – Create internal teams with predefined or custom permissions and stage access for design reviews, testing, and rollout.  
5. **Test in Sandbox Mode** – Run workflows (report generation, web & widget flows, CSR console) using sample or production data in a safe environment.  
6. **AI‑Powered Setup Review** – The system flags missing inputs, configuration gaps, or logic inconsistencies, giving a visual summary of outcomes such as TOU savings projections.  
7. **Schedule a Soft Launch** – Define a pilot rollout with scoped customer or feature visibility. Real‑time monitoring begins, and metrics surface on the product performance dashboard.  
8. **Move to Full Launch** – After validations pass, the system transitions to full production or the admin manually schedules the full launch. All users and workflows go live with alerting for anomalies.  
9. **Monitor Live Performance** – Dashboards show live metrics: customers by fuel type, rate plan, persona, disaggregation coverage, reports delivered, anomaly alerts, and trendlines.

### IT Manager (Technical flow)

1. **Configure Single Sign‑On (SSO) Setup** – Connect Okta, Azure AD, or another identity provider. Built‑in validation ensures correct access policies and role mappings.  
2. **Connect Source Systems** – Use the Self‑Serve Integrations Marketplace to link Snowflake, DataBricks, or internal APIs in batch or real‑time mode.  
3. **Map Data Fields** – A visual mapping tool aligns source data to Bidgely’s schema, supporting historical loads, field transformations, and incremental syncs.  
4. **Schedule Ingestion Jobs** – Set up historical and daily incremental loads, and monitor job status and logs through a visual dashboard with alerting.  
5. **Validate Data Quality** – Automated checks flag missing fields, schema mismatches, volume drop‑offs, or null value anomalies. Summary health reports are generated.  
6. **Monitor Ongoing Integration Health** – After launch, the platform continuously monitors pipelines and data quality, sending proactive alerts for sync frequency, completeness, or format issues.

---

This overview captures the core journey that utilities follow when adopting DETO, highlighting the self‑serve nature, role responsibilities, and the key features that enable rapid, support‑free deployment and ongoing product health.