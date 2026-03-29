# Data Scenarios

!!! abstract "Product Specification"
    - [Scenario Scoping](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1112571921)

## Overview
Data Scenarios equip Product and Solutions Engineering teams with mock datasets representing specific edge-cases (e.g., Solar End-Users, Net-Zero Homes, EV Charging behaviors). Utilizing this module, engineers can instantly hydrate test users and mock AMI footprints within UAT environments without waiting for physical ingestion validation sequences.

## Key Capabilities
- **Payload Orchestration:** Triggering a mapped Scenario invokes API sequences generating synthetic metadata, usage vectors, and appliance signatures bound exactly to Bidgely's internal models.
- **Demo Mode Initialization:** Vital for sales engineering, where a fresh sub-environment must be spun up and populated with realistic regional data on demand.

## User Guide

### 1. Running a Scenario
1. Select a target UUID or test Pilot.
2. Under "Data Tools," launch the **Scenarios** library.
3. Choose the payload definition (e.g. *California Summer Net Metering*).
4. Deploy the script. The system synthesizes 12 months of high-resolution usage and associates it with the test profile.

## Related Features
- [Environment Management](environment-management.md)
- [Data Migration](data-migration.md)
