# Config Registry

!!! abstract "Product Specification"
    - [Registry Architecture](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1330413583)
    - [Configuration Workflows](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1331101711)

## Overview
Config Registry centralizes and synchronizes distributed configuration variables across the ecosystem. It replaces legacy static JSON dictionaries and database seeds with a living, API-driven configuration graph capable of managing deep property lookups and inheritance hierarchies for global Bidgely environments.

## Key Capabilities
- **Inheritance Trees:** Base pilot configurations on robust master templates. Upgrades to a master template can seamlessly propagate defaults down to derived tenanted pilot configurations.
- **Auditing & Versioning:** Tracks deep historical modifications (timestamp, author, delta).

## User Guide

### 1. Generating a Configuration
1. Open the **Config Registry** tool.
2. Select the Node/Tenant to configure.
3. Import JSON sets or rely on template inheritance.

## Related Features
- [Config Tools](config-tools.md)
