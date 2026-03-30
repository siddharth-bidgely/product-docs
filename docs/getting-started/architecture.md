# Architecture

!!! abstract "Confluence"
    - [Source 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1339392001)

## Overview

## Technical specification (DEV) — System Overview

**System Overview – Technical Architecture Summary**  
*(Word count ≈ 900)*  

---

### 1. High‑Level Architecture

- **Core Services**  
  - **Environment Manager** – Centralised automation engine for “one‑click” provisioning of AWS/EKS infrastructure, backend services, databases, and front‑end components.  
  - **Proxy Pulse** – Configuration‑management platform & orchestrator that works hand‑in‑hand with Environment Manager and CMS to provision end‑to‑end projects.  
  - **CMS** – Central “Identity and Content Hub” that serves as both Identity Provider (IdP) for DETO user roles and a Content Repository for non‑code assets (appliances, home profiles, recommendations, surveys, media, etc.).  

- **Execution Environment**  
  - All provisioning and orchestration occur on **AWS** (Elastic Kubernetes Service – EKS).  
  - The services themselves are deployed as containerised workloads within EKS clusters.  

- **Data Flow Overview**  
  1. **User / Admin** triggers a provisioning request via the Proxy Pulse UI or API.  
  2. Proxy Pulse validates the request against the CMS (e.g., checks pilot configuration, business rules, and available content assets).  
  3. Proxy Pulse forwards the validated request to Environment Manager.  
  4. Environment Manager orchestrates the deployment of required AWS resources (EKS nodes, RDS instances, S3 buckets, IAM roles, etc.) and configures backend services, databases, and front‑end components.  
  5. Upon successful deployment, Environment Manager reports status back to Proxy Pulse.  
  6. Proxy Pulse updates the CMS with deployment metadata (environment ID, resource ARNs, access URLs).  
  7. End‑user applications consume the deployed services and content via the CMS IdP for authentication and the CMS content API for asset retrieval.  

---

### 2. Component Responsibilities & Interfaces

| Service | Primary Responsibility | Key Interfaces | Notes |
|---------|------------------------|----------------|-------|
| **Environment Manager** | Automates end‑to‑end environment provisioning on AWS/EKS. | • REST/GRPC API for provisioning requests<br>• AWS SDK/CLI for resource creation<br>• Event bus (e.g., SNS/SQS) for status updates | • “One‑click” provisioning eliminates manual DevOps steps.<br>• Orchestrates deployment of backend services, databases, and front‑end components. |
| **Proxy Pulse** | Acts as a configuration‑management orchestrator that integrates with Environment Manager and CMS. | • UI/API for pilot configuration<br>• Calls to Environment Manager API<br>• Calls to CMS API for content & identity data | • Provides unified interface for managing pilot configurations and business rules.<br>• Automates complex project setups. |
| **CMS** | Central Identity Provider and Content Repository. | • OAuth/OpenID Connect endpoints for IdP<br>• REST API for content retrieval (appliances, profiles, recommendations, surveys, media)<br>• Admin UI for content updates | • IdP manages user roles in DETO.<br>• Content updates can be made in real‑time without engineering deployments (CX). |

---

### 3. Workflows & Data Movement

1. **Pilot Onboarding Workflow**  
   - Admin selects a pilot in Proxy Pulse.  
   - Proxy Pulse queries CMS for available content assets and business rules.  
   - Proxy Pulse constructs a deployment manifest (including service definitions, database schemas, IAM policies).  
   - Manifest is sent to Environment Manager.  
   - Environment Manager provisions AWS resources, deploys services, and configures networking.  
   - Status events are published back to Proxy Pulse.  
   - Proxy Pulse updates CMS with environment metadata.  
   - Pilot is now live; end‑users authenticate via CMS IdP and consume content via CMS APIs.

2. **Content Update Workflow**  
   - Content owner uploads new asset (e.g., a new appliance image) to CMS.  
   - CMS stores asset in its repository and updates metadata.  
   - End‑user applications poll or subscribe to CMS content API for changes.  
   - No redeployment of services is required; the updated asset is served immediately.

3. **Failure Handling (as documented)**  
   - The source does not explicitly describe failure modes, retries, or idempotency guarantees.  
   - It is implied that Environment Manager and Proxy Pulse coordinate status updates, but specific error handling logic is not provided.

---

### 4. Integration Points & Dependencies

- **Environment Manager ↔ AWS/EKS** – Uses AWS SDK/CLI to create/modify resources.  
- **Proxy Pulse ↔ Environment Manager** – REST/GRPC API calls for provisioning orchestration.  
- **Proxy Pulse ↔ CMS** – REST API calls for content and configuration data.  
- **CMS ↔ End‑User Applications** – OAuth/OpenID Connect for authentication; REST API for content retrieval.  
- **CMS ↔ Content Repository** – Internal storage of non‑code assets (media, surveys, etc.).  
- **DETO Context** – CMS IdP manages user roles for DETO applications.  
- **CX Context** – CMS content updates enable real‑time changes to customer‑facing experiences without engineering deployments.

---

### 5. Constraints, Limits, and Edge Cases (as documented)

| Category | Detail | Source |
|----------|--------|--------|
| **Constraints** | Centralised automation removes manual DevOps overhead. | Environment Manager description |
| **Limits** | No explicit limits on number of environments, size of assets, or concurrency are documented. | None |
| **Retries / Idempotency** | Not specified in the source. | None |
| **Failure Modes** | Not specified; however, status updates are implied to be communicated back to Proxy Pulse. | None |
| **Edge Cases** | None explicitly mentioned. | None |

> **Important:** If a downstream writer assumes default retry or idempotency behavior, that assumption is not supported by the source. Any such behavior must be verified against the actual implementation or clarified with the engineering team.

---

### 6. Key Terminology