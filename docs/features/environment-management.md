# Environment Management

!!! abstract "Product Specification"
    - [Environment Setup Phase 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1234796545)
    - [Architecture & Operations](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1232404485)
    - [Backend Orchestration](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1233977351)

## Overview
Environment Management handles the automated provisioning, validation, and lifecycle orchestration of all necessary cloud infrastructure and persistent data stores. Working heavily behind the scenes when a "Project" is created on the Delivery Console, this service abstracts away complex AWS interactions, database cluster (RDS/Cassandra) table creations, and service deployments.

By automating the "Create SubEnvironment" workflow, the system guarantees a fully operational state—spinning up API endpoints, dashboards, and background workers customized exclusively for the new tenant.

## Key Capabilities
- **Pingpong Microservices Orchestration:** Automates the complete deployment of background services (such as `ingesterJobs`, `eventAnalyserServices`, `emailServices`, and `telematicsServices`).
- **Data-Store Provisioning:** Automatically provisions specific databases, clusters, keyspaces, and schema tables within RDS and Cassandra.
- **Analytics Engines:** Bootstraps Disaggregation models:
  - *Slytherin* (AMI Disaggregation Lambda)
  - *Basilisk* (NSM Disaggregation Code)
- **Frontend Assets Configuration:** Customizes FE Web Dashboards (Meraki) without configuration files via specific build-time variable injections (e.g. overriding `clientID` and `pilotID`).
- **Zero-Touch Config:** Centralized property file provisioning (`uat.default.properties`) mapping all required tenant variables autonomously.

## User Guide

### 1. Initiating the Environment Build
*Note: This process is generally invoked transparently via the Project Management module.*
1. A Delivery Engineer invokes the **Create SubEnvironment API** payload containing Pilot variables.
2. The Environment manager establishes the AWS VPC bindings.
3. The orchestration layer invokes infrastructure-as-code scripts to dynamically allocate cloud capacity.

### 2. Monitoring the Deployment
1. Navigate to the Delivery Console > Environments page.
2. Observe real-time progress as tasks execute chronologically:
    1. RDS and Cassandra initialization.
    2. Data schema deployment.
    3. Backend build mapping.
    4. Service deployment on AWS.
3. Upon completion, the console reports "Available," and tenant-specific URLs are activated.

### 3. Updating Property Values
1. Although `uat.default.properties` handles dynamic variables implicitly using naming prefixes, engineers can inject overrides natively within the Environment configurations if non-standard settings are required.

## Configuration Options
- **Schema Selection:** Choose lightweight or full analytical configurations depending on the project type.
- **Service Exclusions:** Opt-out of specific workers (like `evTelematicsScheduler`) if EV products are not subscribed for that pilot.

## Related Features
- [Project Management](project-management.md)
- [Data Migration](data-migration.md)