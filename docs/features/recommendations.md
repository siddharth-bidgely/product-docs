# Recommendations

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

The **Recommendations** area is where teams create, review, and publish recommendation content for a specific pilot. It gives Product Managers, Customer Success teams, and utility users a controlled workspace to manage recommendation content without relying on spreadsheets, file exchanges, or release cycles for content-only updates.

Recommendations are managed within the context of a selected project or pilot. Each pilot keeps its own recommendation set, localization setup, and related targeting inputs. The feature is designed to support a governed workflow: users can draft and edit content, collaborate through comments, preview what they are working on, and move recommendations through review and publishing states based on role permissions.

This area is especially useful when multiple teams contribute to content. Utility users can prepare and submit changes, while PM, TPM, and CSM users can review, approve, publish, unpublish, and manage broader recommendation settings. The result is a clearer handoff process, better auditability, and safer publishing because draft or modified work does not overwrite live content until it is published.

## Key Capabilities

- View all recommendations for the selected pilot in a central list.
- See content counts by status, including **Draft**, **Modified**, **Published**, and **Disabled**.
- Create a new recommendation from scratch.
- Edit an existing recommendation in a structured form.
- Work with separate draft/modified and published versions of the same recommendation.
- Navigate between recommendations using **Previous**, **Next**, or the **Recommendation ID** selector.
- Add and review comments for collaboration and approval workflows.
- Manage localized content for supported locales, including text and media.
- Upload and crop images for recommendation content.
- Filter and manage recommendation data in a table-style editing experience.
- Save or discard unsaved changes, including bulk save/discard behavior in supported areas.
- Configure recommendation score thresholds by category.

## User Guide

### Open the Recommendations workspace and review status

1. Open **Projects** and select the pilot you want to work in.
2. From the pilot content dashboard, open **Recommendations**.
3. Review the summary card at the top of the page to see counts for **Total**, **Disabled**, **Draft**, **Modified**, and **Published** recommendations.
4. If needed, click **Refresh** to reload the latest recommendation list. If you have unsaved table changes, save or discard them first before refreshing.
5. Use the recommendation table to browse existing items and identify what needs attention by status or metadata.
6. Use the available filters in the table header to narrow the list by fields such as category or other recommendation attributes.
7. Open a recommendation from the list when you are ready to edit or review it.

![Recommendations workflow overview](../assets/images/815431723-Screenshot-202025-11-11-20at-2011.32.07-E2-80-AFAM.png)

### Create a new recommendation

1. In **Recommendations**, click **Add New**.
2. Enter the core recommendation content, such as title, description, call-to-action text, and any other required business fields.
3. Choose the recommendation metadata and targeting inputs, such as category, fuel type, channels, and other applicable settings for the pilot.
4. Add images using **Image URL** and **Load URL**, or choose **Upload File** to upload an image from your device. If needed, crop the image before saving it.
5. If your pilot supports multiple locales, switch locale and enter translated text and media for each supported language.
6. Use the preview experience to validate how the recommendation will appear before saving.
7. Click **Save** to create the recommendation as a draft. After saving, the system opens the recommendation in edit mode so you can continue refining it.

![Recommendation lifecycle](../assets/images/815431723-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Edit, review, and publish a recommendation

1. From the **Recommendations** list, open the recommendation you want to update.
2. At the top of the page, confirm the current **Recommendation ID** and status chip, such as **Draft**, **Modified**, or **Published**.
3. If the recommendation has both a working version and a live version, use the tabs to switch between the editable version and **Published**. This helps you compare in-progress content with what is currently live.
4. Make your updates in the form. If you edit a published recommendation, your changes are kept as a modified version until they are approved and published.
5. Click **Save** to keep your changes. If you no longer want the edits, use the available discard option for your role and current state.
6. When content is ready for handoff, submit it for review. Utility users can prepare and submit content, but cannot publish it.
7. A reviewer with the right permissions can move the recommendation to **Ready to Publish** and then use **Publish**.
8. If needed, authorized users can also **Unpublish** or delete content, depending on role and current workflow state.

![Content status workflow](../assets/images/633110556-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Review comments and collaborate on a recommendation

1. Open a recommendation in edit mode.
2. Click the comments icon near the top of the page. The badge on the icon shows how many comments already exist.
3. Review the recommendation summary shown on the comments page, including the recommendation ID, image, title, and description.
4. Read existing comments to understand requested changes, review feedback, or approval notes.
5. Add your comment in the discussion area to ask questions, document decisions, or provide review feedback.
6. Return to the recommendation editor and make any required updates.
7. Repeat the review and comment cycle until the recommendation is ready to move forward in the workflow.

![Role-based workflow context](../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

### Update recommendation score thresholds

1. Open **Recommendation Score Thresholds** from the Recommendations area.
2. Review the guidance at the top of the page. This explains that **Max** and **Min** values help create a score gradient across recommendations in the same category.
3. In the table, find the category you want to update.
4. Edit the **Max** and **Min** values for that category.
5. Check the calculated **Step** and **Number of Recos** columns to understand how the score range is being distributed.
6. Make sure each value is valid: both values must be between 0 and 1, and **Min** must be lower than **Max**.
7. Click **Save all** to keep your updates. If you want to abandon your edits, click **Discard all** and confirm the action.

![Recommendations module context](../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

## Configuration Options

Recommendations are configured at the pilot level, so what you can edit depends on the selected project and your role.

Common user-visible configuration areas include:

- **Supported Locales** and **Default Locale** for localized recommendation content.
- Recommendation fields such as title, description, call-to-action text, channels, media, and category.
- Recommendation status and review progression, based on your permissions.
- **Recommendation Score Thresholds** for category-level scoring behavior.
- Related targeting inputs that come from **Home Profile** and **Appliance Profile**.

Permission notes:

- **Utility** users can typically create, edit, save, discard, switch pilots, and submit recommendations for review.
- **Utility** users cannot publish or unpublish recommendations, and cannot edit certain advanced exclusion settings.
- **PM**, **TPM**, and **CSM** users can manage the full lifecycle, including publishing, unpublishing, deleting, and related pilot configuration.
- When a recommendation is in **READY_FOR_REVIEW**, Utility users cannot continue editing it.

If a setting or action is unavailable, it is usually controlled by role permissions or by the recommendation’s current workflow state. If needed, configuration is managed by system administrators.

## Related Features

- [Project Management](project-management.md)
- [Content Management](content-management.md)
- [Survey Builder](survey-builder.md)
- [CX Visual Editor](cx-visual-editor.md)