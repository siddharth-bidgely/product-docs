# Content Management

!!! abstract "Product Specification"
    - [Content Capabilities](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
    - [Content Localization](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview
Content Management is the central orchestration hub for non-technical administrators to manage the assets that drive the customer experience (CX). Unlike hard-coded configurations, content managed here dictates how information like Appliances mapping, Home Profiles, and generic assets are described to end-users across web, mobile, and printed materials.

## Key Capabilities
- **Appliance Categorization:** Control how specific utility hardware models or general appliance categories (e.g., Central AC vs Window AC) display on itemized bills.
- **Home Profile Attributes:** Define the metadata schema to collect regarding customer households, adjusting questions like "What type of insulation?" based on localized utility requirements.
- **Unified Distribution:** Drive content seamlessly into widgets built by the CX Visual Editor and personalized through the Recommendations module.

## User Guide

### 1. Managing Appliances
1. Navigate to Content Tools > Appliances.
2. Define a new appliance or edit an existing category.
3. Provide the default Icon ID, localization strings for display names, and base efficiency metrics to anchor predictive energy insights.

### 2. Configuring Home Profiles
1. Go to **Home Profile Attributes**.
2. Select the specific questionnaire flow assigned to a Pilot.
3. Define the UI element binding (e.g., Dropdown vs Multi-Select) and add validation boundaries.

## Related Features
- [CX Visual Editor](cx-visual-editor.md)
- [Color Management](color-management.md)
- [Recommendations](recommendations.md)
