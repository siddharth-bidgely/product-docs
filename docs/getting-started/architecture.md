# Architecture

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1339392001)

## Overview

DETO uses three internal services together to set up and run project delivery environments for utilities, especially for pilots and sub-environments:

- **Env-Manager** provisions the technical environment.
- **ProxyPulse** manages project setup configuration and orchestration.
- **CMS** manages identity and dynamic content used by applications.

Together, these services reduce manual setup work and help teams create consistent customer environments.

![System architecture](../assets/images/1339392001-DETO-arch_v2.jpg)

## Key points

- **Env-Manager** is the automation layer for one-click environment provisioning on **AWS** and **EKS**.
- **ProxyPulse** coordinates project provisioning using **pilot configuration** and **business rules**.
- **CMS** is both:
  - the **identity provider** for user role management in **DETO**
  - the **content hub** for non-code assets used by end-user applications
- The architecture separates:
  - environment setup
  - project and pilot configuration
  - runtime identity and content management

## How teams use this

When a new **pilot** or **sub-environment** needs to be created, DETO uses a layered setup flow:

1. Project setup details, including **pilot configuration** and **business rules**, are managed in **ProxyPulse**.
2. **ProxyPulse** works with **Env-Manager** to create the required environment and deploy the needed backend services, databases, and front-end components.
3. **ProxyPulse** also works with **CMS** so the project has the required identity and content setup.
4. After setup, end-user applications rely on **CMS** for:
   - user roles in DETO
   - non-code content such as **appliances**, **home profiles**, **recommendations**, **surveys**, and **media**

This allows teams to onboard new pilots faster and update some customer-facing content without requiring engineering deployments.

## Related documentation

- [Project Management](../features/project-management.md)
- [Recommendations](../features/recommendations.md)
- [Survey Builder](../features/survey-builder.md)