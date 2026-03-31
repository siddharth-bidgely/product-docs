---
title: DETO Platform
template: home.html
hide:
  - navigation
  - toc
---

# Platform overview

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=931495969)

## Overview

DETO is Bidgely’s self-serve platform for project delivery. The goal is to let customers onboard, configure, test, and launch with much less reliance on Bidgely delivery, QA, onboarding, or AIG teams for routine setup.

The platform is designed so customers can:

- sign in and start testing on Day 1
- complete setup in under 30 days
- handle most configuration without human support
- meet enterprise needs such as role-based access control, data imports, integrations, SSO, and phased launch controls

The intended experience is a guided, low-touch setup flow with smart defaults, in-product help, AI-assisted recommendations, and real-time validation.

## Key points

- **Day 1 access:** Customers should be able to log in and begin testing immediately from the console.
- **Self-serve setup:** Non-technical and technical setup tasks are supported in-product, with technical expertise mainly needed for application and data integration.
- **Enterprise-ready controls:** DETO supports role setup, permissions, SSO, data loading, integrations, and controlled launch phases.
- **Safe testing before go-live:** Teams can use Sandbox Mode with sample data or production data to validate the experience before launch.
- **Guided launch process:** Setup Assistant, AI-powered review, and data health checks help teams catch gaps before rollout.
- **Phased rollout and monitoring:** Teams can run soft launches, move to full launch, and monitor live health and data quality after go-live.

## How teams use this

### Enterprise Admins and Customer Experience Managers

These users own the non-technical launch process. They use DETO to:

- configure product UI and customer experience
- set up roles and permissions
- configure reporting workflows
- test the experience before launch
- manage soft launch and full launch timing

A typical flow is:

1. **Start with a ready-to-use environment**  
   Customers log in to a pre-configured console and can begin testing experiences such as web, widgets, reports, and CSR Console.

2. **Use the Setup Assistant**  
   The guided setup walks them through product configuration, user roles, data import, integrations, and launch setup.

3. **Set up access and teams**  
   Admins can define pre-set or custom permissions and stage access for reviews, testing, and rollout phases.

4. **Test in Sandbox Mode**  
   Teams can validate report generation, web flows, widget flows, and CSR Console behavior using sample data or production data.

5. **Review launch readiness**  
   AI-assisted review highlights incomplete setup, inconsistent inputs, and missing dependencies. Visual checks help confirm outputs such as rates, projections, TOU potential savings, and customer segmentation logic.

6. **Launch in phases**  
   Teams can run a soft launch with scoped access, feature controls, and scheduled go-lives, then move to full launch manually or after validations pass.

7. **Monitor live performance**  
   After launch, dashboards help teams track customer counts, disaggregation coverage, automated process success, anomalies, and trends over time.

### IT Managers

IT Managers use DETO for the technical setup needed to support launch and ongoing operations. They typically:

- configure and validate SSO with providers such as Okta or Azure AD
- connect source systems through the integrations marketplace, including systems such as Snowflake or DataBricks
- map source data from CSV, APIs, or databases to the required schema
- schedule historical and incremental data loads
- review automated data quality checks and health summaries
- monitor ongoing sync health and alerts after launch

## Related documentation

- [Project Management](features/project-management.md)
- [Recommendations](features/recommendations.md)
- [Survey Builder](features/survey-builder.md)