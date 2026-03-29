# Config Tools

## Overview
Config Tools acts as the administrative visualization and synchronization overlay for deeply technical deployment clusters such as DCX grids. Utilizing the centralized Config Registry, it exposes granular feature access flags, template personalization overrides, and cross-environment sync states to Delivery Managers.

## Key Capabilities
- **Environment Promotion:** Provides the UX to stage configuration overrides generated in matching UAT environments and push them safely to Production without direct data-server intervention.
- **Feature Flag Governance:** Global dashboard indicating which optional modules (e.g. Rate Engine, Sub-Meter Analytics) are currently active per pilot.

## User Guide

### 1. Synchronizing Configurations
1. From the pilot details dashboard, click **Push Attributes**.
2. Select the target (e.g., `<pilot>-prod`).
3. The Tool displays a semantic difference file (Diff Map) indicating exactly which JSON leaves will be modified on the final payload execution.
4. Execute via `Config Sync`. 

## Related Features
- [Config Registry](config-registry.md)