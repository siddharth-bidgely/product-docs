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

DETO is Bidgely’s self-serve platform for project delivery. It is designed so customers can onboard, configure, test, and launch with minimal help from Bidgely delivery, QA, or AIG teams.

The platform vision is a low-touch setup experience that still supports enterprise needs such as role-based access control, data imports, integrations, Single Sign-On (SSO), and phased launches. The goal is to let customers start using pre-configured products on Day 1, complete setup in under 30 days, and move from testing to launch with confidence.

For business users, DETO supports a guided setup flow for configuring the customer experience, assigning roles, testing in a sandbox, reviewing launch readiness, and managing soft launch and full launch. For technical users, it supports SSO setup, source-system connections, data mapping, ingestion scheduling, and ongoing data quality monitoring.

## Key points

- Customers can sign in and access pre-configured products immediately, including web, widgets, reports, and CSR Console.
- A guided **Setup Assistant** helps users complete configuration step by step, with smart defaults, walkthroughs, and in-product help.
- **Dynamic templates and presets** prepare common program setups such as CX, HERs, and TOU before first login.
- **Sandbox Mode** supports testing with sample data or production data before go-live.
- Admins can manage roles, permissions, launch readiness, and phased rollouts without relying on external coordination.
- IT teams can configure SSO, connect source systems, map data, schedule loads, and monitor data health from within the platform.
- Built-in review and validation highlight missing inputs, inconsistent setup choices, and data issues before launch.
- After launch, dashboards help teams monitor product health, customer coverage, automated process success, and anomalies over time.

## How teams use this

### Enterprise Admins and Customer Experience Managers

These users focus on the non-technical launch process. They use DETO to:

- work from a pre-configured starting point
- configure product UI and branding
- set up roles and permissions
- define customer experience and reporting workflows
- test web, widget, report, and CSR Console experiences
- review setup issues and launch readiness
- schedule soft launch and transition to full launch
- monitor live product performance after go-live

A typical flow starts with a pre-built template being applied behind the scenes. On first login, users see a ready-to-use console with sample or default data so they can begin testing right away. From there, they use the Setup Assistant to complete configuration, invite users, test in Sandbox Mode, review AI-assisted setup findings, and plan rollout.

### IT Managers

IT Managers handle the technical setup needed to support launch and stable operations. They use DETO to:

- configure and validate SSO
- connect source systems such as Snowflake and DataBricks
- map source fields from CSV, APIs, or databases
- run historical and incremental data loads
- monitor job status and data health
- respond to alerts about missing fields, schema mismatches, volume drop-offs, or other data issues

Their work supports both initial readiness and ongoing production health.

## Related documentation

- [Project Management](features/project-management.md)
- [Recommendations](features/recommendations.md)
- [Survey Builder](features/survey-builder.md)