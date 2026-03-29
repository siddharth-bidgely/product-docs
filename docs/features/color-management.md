# Color Management

!!! abstract "Product Specification"
    - [Color Palette Initial Design](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1212645380)

## Overview
Color Management provides a centralized interface enabling teams to manage project-specific color schemes across Bidgely's product ecosystem. Ensuring brand consistency, it allows Customer Experience (CX) managers to globally configure and preview color applications for both Digital (Web + Email) and Paper (Home Energy Reports) assets without needing engineering intervention.

By decoupling styling rules from the codebase, the interface provides intuitive tools to view, edit, and understand how primary and secondary brand shades physically render across complex widget and template hierarchies.

## Key Capabilities
- **Omni-Channel Synchronization:** A single configuration propagates correctly formatted assets out to digital customer portals, HTML emails, and printed paper reports.
- **Visual Editing & Comprehension:** Provides immediate feedback showing where and how specific color selections or shade mappings fall within UI components.
- **Global Shade Modeling:** Auto-derives accessible variations of a core brand color, mapping them intelligently across the platform's tokens.
- **Centralized Auditing:** Keep track of pilot or project brand guidelines directly within the CMS toolkit, rather than relying on disparate CSS repositories.

## User Guide

### 1. Generating a Brand Palette
1. Open the **Color Management** interface under Content Tools.
2. Under "Primary Palette," input the utility's core HEX or RGB branding colors.
3. The system automatically computes functional shades (lightened derivatives for backgrounds, darkened derivatives for text contrast).

### 2. Previewing Component Themes
1. Select the **Preview Mode**.
2. Select standard delivery modules (e.g., *Bill Projection Widget*, *Email Header*).
3. The real-time rendering engine will preview how the inputted color scheme dictates the look and feel of those features.

### 3. Publishing the Campaign Scheme
1. Submit your finalized color palette.
2. The values are automatically serialized into the Pilot configurations, instantly propagating throughout all downstream environments matching that Pilot ID.

## Configuration Options
- **Overrides:** Explicit override tokens can be assigned via the visual editor for specific elements overriding the auto-mapped theme engine logic.

## Related Features
- [Content Management](content-management.md)
- [Project Management](project-management.md)
- [CX Visual Editor](cx-visual-editor.md)
