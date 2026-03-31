# CX Visual Editor

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=975110165)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1039237136)
    - [Confluence 3](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1504018492)
    - [Confluence 4](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1028194310)
    - [Confluence 5](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1079345206)

## Overview

The **CX Visual Editor** is the visual editing workspace in **Content Management** for managing customer-facing communications across **Email**, **Paper Reports (HER)**, **Web**, and **SMS**. It is designed for business users who need to update content, review how it will appear to customers, and validate changes before launch. Instead of working from static mockups, you edit directly in a live, production-aligned preview experience.

This area is especially useful when you need to tailor communications by **project**, **cluster**, **locale**, **fuel type**, or customer context. The editor combines three core jobs in one place: selecting the right template, previewing it with realistic **Data Scenarios**, and updating content in the **Content Inspector**. It also supports governance through **Signoff**, **Undo Signoff**, comparison, and review tracking.

For utilities and delivery teams, this means faster iteration, fewer surprises during QA, and clearer ownership of approvals. You can make focused edits to a full template or a specific element, test the result in different scenarios, and confirm readiness with audit-friendly review steps.

## Key Capabilities

- Browse templates by channel in the **Template Selector Sidebar**
- Search for templates and narrow the list by fuel badge such as **EL**, **GAS**, **WATER**, or **DF**
- Select a full template or a specific element for focused editing
- Preview content using realistic **Data Scenarios**
- Switch between **Desktop mode** and **Mobile mode** where supported
- Change the active **Config level** and **Locale** before editing
- Edit **Text**, **Images**, **Colors**, and **Metadata** in the **Content Inspector**
- See modified fields highlighted so unsaved changes are easy to spot
- Save or cancel changes for the current variant
- Compare two variants side by side using **Compare**
- Complete approval steps with **Signoff** and **Undo Signoff**
- Review progress and history through **Checklist** and **Audit**

## User Guide

### Browse and open a template

1. Open **Content Management** and select **CX Visual Editor**.
2. Confirm the correct project is selected before you begin editing.
3. In the **Template Selector Sidebar**, browse templates by channel such as **Email**, **Paper**, **Web**, or **SMS**.
4. Use the search bar if you already know the template name, or scan the list for the correct fuel badge such as **EL**, **GAS**, **WATER**, or **DF**.
5. Expand a template to view its available elements if you want to work on a specific section instead of the full template.
6. Click the template name to load it into the **Template Editor & Preview tool**.
7. If you need more room, click **Collapse** on the sidebar. Click **Expand** to bring it back.

![Template selector sidebar](../assets/images/975110165-image-20251002-132504.png)

### Preview a template with the right scenario and device mode

1. After opening a template, review the **Preview Toolbar** at the top of the preview area.
2. Check the current template name, channel badge, **Config level**, and **Locale** to make sure you are viewing the correct variant.
3. Use the **Data Scenario selector** to choose the customer condition you want to test, such as a default or high-usage scenario.
4. Use the **Element selector for preview** to switch between **Full Template** and a specific element.
5. Click **Desktop** or **Mobile** to review the layout in the appropriate preview mode. Some channels, such as paper reports, may not support **Mobile mode**.
6. Wait for the preview to refresh, then review the **Visual Preview Canvas** carefully.
7. Repeat with other scenarios or modes to confirm the template behaves correctly across customer conditions.

![Preview toolbar and scenario controls](../assets/images/975110165-image-20251002-140703.png)

### Edit text, images, colors, or metadata

1. Select the template or element you want to update.
2. In the right-side **Content Inspector**, choose the tab that matches the type of change:
   - **Text** for copy updates
   - **Images** for image or video replacements
   - **Colors** for visual styling
   - **Metadata** for display or behavior settings
3. In **Text**, update the relevant **String Resources**. Modified fields are highlighted so you can see what changed.
4. In **Images**, update the asset value and use **Upload** or **Preview** where available to verify the replacement.
5. In **Colors**, update the value you want to change. Template-level color changes can affect multiple elements in the template.
6. In **Metadata**, adjust settings such as show or hide options, layout choices, or numeric values that affect rendering.
7. Review the preview after each change to confirm the result.
8. Click **Save** when you are satisfied, or click **Cancel** to discard unsaved edits.

![Content inspector](../assets/images/975110165-image-20251002-180041.png)

### Compare two variants side by side

1. Open the template you want to review.
2. Click **Compare** from the toolbar.
3. In the comparison setup, choose the settings for the left side and right side.
4. For each side, select the template variant you want to compare, including the relevant **Config level**, **Locale**, and **Data Scenario**.
5. Run the comparison to open a split preview.
6. Review both sides together to check differences in content, layout, localization, or scenario behavior.
7. Use this view for before-and-after review, hierarchy checks, or scenario validation.
8. Exit comparison mode when you are ready to return to single-template editing.

![Comparison mode preview](../assets/images/975110165-image-20251021-210327.png)

### Sign off content and track approval status

1. Open the template or element that is ready for review.
2. Confirm you are on the correct **Config level**, **Locale**, and **Data Scenario** before approving anything.
3. Review the content in the preview and verify all required edits are saved.
4. In the **Content Inspector**, click **Signoff**.
5. Confirm the action if prompted.
6. Check the related status in **Checklist** to verify the item is now tracked as signed off.
7. If the content needs to be reopened for changes, use **Undo Signoff**.
8. Review **Audit** when you need to confirm who changed, saved, or signed off the content.

![Sign-off workflow](../assets/images/975110165-image-20251007-092032.png)

## Configuration Options

The **CX Visual Editor** is variant-aware, so what you can edit depends on the selections you make in the editor.

Common options visible to users include:

- **Config level**: Choose whether you are working at a broader project level or a more specific cluster level.
- **Locale**: Select the language or regional version you want to edit and preview.
- **Data Scenario selector**: Choose the mock customer context used for preview.
- **Element selector for preview**: Switch between the full template and a specific element.
- **Preview mode**: Use **Desktop mode** or **Mobile mode** where supported by the channel.
- **Fuel filtering**: Use fuel badges and filters to find the correct template variant.

Permissions are role-based. In general:
- Utility users can review, edit enabled content, and perform **Signoff**
- Delivery teams have broader editing access and can manage **Project-Level Scenarios**
- Admin users manage **Global Data Scenarios**
- QA users typically have read-only preview and validation access

If an option is unavailable, hidden, or locked, configuration is managed by system administrators or restricted by your role.

## Related Features

- [Content Management](content-management.md)
- [Data Scenarios](data-scenarios.md)
- [Color Management](color-management.md)
- [Config Registry](config-registry.md)