# Architecture

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1339392001)

## Overview

DETO architecture is organized around three services that work together to set up and run customer and pilot environments:

- **Env-Manager** handles environment provisioning and deployment automation.
- **ProxyPulse** manages project setup, pilot configuration, and business rules.
- **CMS** provides identity and content services for end-user applications.

This separation helps teams onboard new **pilots** and **sub-environments** faster, reduces manual engineering and DevOps work, and keeps project setup consistent across customer environments.

![System architecture overview](../assets/images/1339392001-DETO-arch_v2.jpg)

## How teams use this

When a new pilot, project, or sub-environment needs to be created, the systems work together at a high level like this:

1. **ProxyPulse** drives the project setup process.
2. **Env-Manager** provisions the underlying environment on **AWS** and **EKS** and deploys the needed backend, database, and front-end components.
3. **CMS** supplies the identity and content capabilities used by the resulting applications.

In day-to-day use, this means:

- teams can use a more automated, “one-click” setup flow instead of relying on manual environment creation
- project configuration and business rules are managed separately from infrastructure setup
- business users can update customer-facing content in real time through **CMS** without waiting for an engineering deployment

## Key points

- **Env-Manager** is the centralized automation service for end-to-end environment setup.
- **ProxyPulse** is the orchestration and configuration layer for project provisioning.
- **CMS** is the identity and content hub:
  - it manages user roles in **DETO**
  - it stores non-code assets in **CX**, including appliances, home profiles, recommendations, surveys, and media
- **ProxyPulse** works with both **Env-Manager** and **CMS** during project provisioning.
- The architecture is designed to improve consistency across customer environments while speeding onboarding for pilots and sub-environments.

## Related documentation

- [Project Management](../features/project-management.md)
- [Recommendations](../features/recommendations.md)
- [Survey Builder](../features/survey-builder.md)