# Recommendations

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

The **Recommendations** area in DETO is the pilot-specific workspace for managing recommendation content that appears to end customers. It gives business users a structured way to create, update, review, and publish recommendations without relying on release cycles or manual file handling. Each pilot has its own isolated set of recommendations, so teams can safely tailor content for a specific utility or program.

This area is designed for governed content operations, not direct live editing. Recommendations move through clear lifecycle states such as **Draft**, **Modified**, **Published**, **TODO**, **READY_FOR_REVIEW**, and **READY_TO_PUBLISH**. That means you can work on changes, collaborate with reviewers, and keep the currently published version intact until the new version is approved.

Recommendations also support localization, media management, targeting-related metadata, comments, preview, and bulk-style editing patterns. Product Managers, Customer Success teams, and Enterprise Admins benefit from faster turnaround, better quality control, and a clearer approval process.

## Key Capabilities

- View all recommendations for the selected pilot in a central list
- See summary counts for **Draft**, **Modified**, **Published**, and **Disabled** items
- Create a new recommendation with content, metadata, and media
- Edit an existing recommendation without overwriting the live published version
- Switch between **Draft/Modified** and **Published** views for the same recommendation
- Manage localized content for supported pilot locales
- Add or update images using a URL or file upload
- Use comments to collaborate during review
- Navigate quickly between recommendations with **Previous** and **Next**
- Refresh the list to load the latest saved content
- Configure recommendation score thresholds by category
- Upload recommendations in bulk when that option is enabled for your process

## User Guide

### Open and review recommendations for a pilot

1. Open **Projects** and select the pilot you want to work in.
2. From the pilot’s content dashboard, open **Recommendations**.
3. Review the summary cards at the top of the page to understand how many recommendations are currently **Draft**, **Modified**, **Published**, or **Disabled**.
4. Use the recommendations table to browse the available items for that pilot.
5. Apply filters or search in the table to narrow the list by status or recommendation attributes.
6. If you need the latest saved data, click **Refresh**. If you have unsaved row edits, save or discard them first before refreshing.
7. Click a recommendation row to open it in the edit view.

![Recommendations workflow overview](../assets/images/815431723-Screenshot-202025-11-11-20at-2011.32.07-E2-80-AFAM.png)

### Create a new recommendation

1. In **Recommendations**, click **Add New**.
2. Enter the core recommendation details, such as title, description, category, and any required content fields.
3. Set the recommendation options that apply to the pilot, such as channels, featured content, program flags, or other business attributes shown on the form.
4. Add images as needed. You can either paste an **Image URL** and click **Load URL**, or choose **Upload File** and provide an image from your device.
5. If the pilot supports multiple locales, switch locale and enter translated text and locale-specific media where needed.
6. Review the preview to confirm the recommendation looks correct before saving.
7. Click **Save** to create the recommendation as a working version. New items begin as **Draft**.
8. After saving, continue editing, submit the item for review, or leave it in draft until it is ready.

![Recommendations module in Delivery Console](../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

### Edit an existing recommendation and manage versions

1. Open **Recommendations** and select the recommendation you want to update.
2. At the top of the edit page, confirm the **Recommendation ID** and current status chip, such as **Draft**, **Modified**, **Published**, or **Disabled**.
3. If the recommendation already has a live version, use the tabs to switch between the working version and **Published**. This helps you compare what is live with what is being changed.
4. Update the content, metadata, targeting-related fields, or images as needed.
5. If you need to move through the list quickly, use **Previous** or **Next** to open adjacent recommendations.
6. If you try to switch tabs with unsaved changes, confirm whether you want to stay on the page or switch and lose those edits.
7. Save your changes. For unpublished items, the recommendation remains **Draft**. For already published items, your saved changes become **Modified** while the published version stays live.
8. When the content is ready, follow your team’s review process to move it from **TODO** to **READY_FOR_REVIEW**, then to **READY_TO_PUBLISH**, and finally **Publish** if your role allows it.

![Content status workflow](../assets/images/633110556-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Review comments and collaborate

1. Open a recommendation in the edit view.
2. Click the comments icon near the top of the page. The badge on the icon shows how many comments already exist.
3. Review the recommendation summary shown in the comments view so you can confirm you are discussing the correct item.
4. Read existing comment threads to understand requested changes, review notes, or approval feedback.
5. Add a new comment to ask a question, document a decision, or request updates from another team member.
6. Return to the recommendation editor and make the requested changes.
7. Save the recommendation and continue the review cycle until the item is approved for publishing.

![RBAC workflow reference](../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

### Update recommendation score thresholds

1. Open the selected pilot and go to **Recommendation Score Thresholds**.
2. Review the table of recommendation categories and the current **Min**, **Max**, **Number of Recos**, and calculated **Step** values.
3. Edit the **Min** and **Max** values for the categories you want to adjust.
4. Check that each edited row remains valid. Values must stay between 0 and 1, and **Min** must be lower than **Max**.
5. Use the calculated **Step** value to understand how scores will be distributed across recommendations in that category.
6. Click **Save all** to keep your changes, or **Discard all** to remove unsaved edits.
7. If you choose to discard, confirm the action in the warning dialog.

![Workflow state transitions](../assets/images/815431723-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

## Configuration Options

Recommendations are controlled within the currently selected pilot, so available options depend on that pilot’s setup and your role.

Common configuration areas include:

- **Pilot selection**: all recommendation content is scoped to the active pilot
- **Locales**: the pilot defines the default locale and supported locales for localized content
- **Workflow permissions**:  
  - **Utility** users can typically read, edit, save, discard, switch pilots, and submit for review  
  - **PM / TPM / CSM** users can also publish, unpublish, delete, manage lifecycle actions, edit exclusions, and configure related recommendation settings
- **Score thresholds**: available to users with permission to manage recommendation scoring
- **Related targeting metadata**: recommendation behavior may depend on settings maintained in **Appliance Profile** and **Home Profile**

If a control is disabled or not visible, it is usually restricted by role or by the current recommendation state. If you are unsure whether a setting should be available, contact your system administrator.

## Related Features

- [Project Management](project-management.md)
- [Content Management](content-management.md)
- [Survey Builder](survey-builder.md)
- [CX Visual Editor](cx-visual-editor.md)