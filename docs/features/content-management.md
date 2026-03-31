# Content Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

Content Management in DETO is a pilot-based workspace for managing utility content without waiting for a normal release cycle. It gives business users a single place to maintain recommendation content and foundational pilot settings such as **Appliance Profile** and **Home Profile**. This helps teams move faster, reduce manual handoffs, and keep content changes organized by project.

Everything in this area is tied to the currently selected pilot or project. That means the content, supported locales, profiles, and publishing workflow are all managed in the context of one pilot at a time. What you can view or change depends on both your role and the pilots you have been assigned.

For most teams, the main value of Content Management is controlled content operations: create and edit safely, keep draft and published versions separate, route items through review, and publish only when approved. This is especially important for recommendations, where copy, targeting context, localization, and approval status all need to stay aligned.

## Key Capabilities

- Create and edit pilot-specific content in a self-serve workspace
- Work within a selected pilot so each utility project stays isolated
- Manage recommendation content through **Draft**, **Modified**, **Ready for QA**, **Ready to Publish**, and **Published** states
- Save changes without affecting live content immediately
- Discard unwanted edits before they are published
- Submit content for review and track verification status
- Publish or unpublish content if your role allows it
- Manage localized content for the pilot’s default and supported locales
- Configure foundational targeting data in **Appliance Profile**
- Configure home attributes and targeting controls in **Home Profile**
- Use bulk save or discard actions in profile areas where multiple edits are pending
- Preview content before release to validate quality and completeness

## User Guide

### Edit recommendation content and move it through review

1. Open the pilot you want to work on from the **Projects** area, then go to the recommendation content area within **Content Management**.
2. Find the recommendation you want to update, or create a new one if your role allows content creation.
3. Edit the content fields you need, such as localized copy, descriptions, or other recommendation details. As you work, the item may show an in-progress state such as **Unsaved**.
4. Click **Save** to keep your changes as a working version. Saved new content is typically treated as **Draft**, while updates to live content are typically treated as **Modified**.
5. Review the item status before moving forward. Use preview where available to confirm the content looks correct before review.
6. When the content is ready for review, click **Submit for Review**. The item moves into the review stage, shown in the workflow as **Ready for QA** or **Ready for Review**, depending on the screen wording used in your environment.
7. If you are a reviewer or approver, open the item, validate the content, and move it to **Ready to Publish** when it has passed review.
8. If your role includes publishing rights, click **Publish** to make the approved version live. If changes should not proceed, use **Discard** or **Unpublish** where available.

![Recommendation workflow states](../assets/images/815431723-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Update Appliance Profile for a pilot

1. Select the correct pilot from **Projects** before making any profile changes.
2. Open **Appliance Profile** from the Content Management area.
3. Browse the appliance tree and expand categories or subcategories to find the appliance you want to update.
4. For the selected appliance, set the default values you need using the available dropdowns and controls.
5. Turn recommendation targeting visibility on or off for that appliance as needed.
6. Update fuel type availability if that option is shown for the appliance.
7. Click **Save** to keep the change for that appliance, or click **Discard** to remove the pending edit. If you have several pending changes, use the bulk save or bulk discard option when available.

![Content management capabilities overview](../assets/images/815431723-Screenshot-202025-11-11-20at-2011.32.07-E2-80-AFAM.png)

### Update Home Profile for recommendation targeting

1. Open the correct pilot, then go to **Home Profile**.
2. Expand the attribute groups to locate the home attribute you want to manage.
3. Select the attribute and review its current default value and targeting settings.
4. Update the default value using the available selection control.
5. Turn recommendation targeting visibility on or off for that attribute if needed.
6. Apply any available **Account Type** filter settings to control where the attribute is used.
7. Click **Save** for the individual change, or use **Save all** if you have updated multiple attributes. Use **Discard** or **Discard all** to remove pending edits you do not want to keep.

### Understand content states and testing visibility

1. When reviewing recommendation content, check both the editing state and the review state before deciding what action to take.
2. Treat **Draft** as new saved content that is not live, and **Modified** as saved changes to content that already has a live version.
3. Treat **Ready for QA** as content prepared for testing or review, and **Ready to Publish** as approved content waiting for final release.
4. Treat **Published** as the live version used in production.
5. Use **Discard** when you want to abandon pending changes instead of moving them forward.
6. If a team says they cannot see a change in production, confirm whether the item is actually **Published**. Production only uses published content.
7. If a team is validating in a QA-style environment, confirm whether the item has at least reached **Ready for QA**, since pre-release environments may surface content in that state for testing.

![Content status workflow](../assets/images/633110556-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

## Configuration Options

Content Management is controlled by role and pilot assignment.

- **Pilot access:** Users only see the pilots they are assigned to.
- **Utility role:** Can typically read content, create or edit allowed content, save changes, discard changes, switch pilots, and submit items for review. This role does not publish content and may have limits on profile editing and advanced configuration.
- **PM / TPM role:** Can manage content lifecycle actions, including publishing, unpublishing, deleting content, editing **Appliance Profile**, editing **Home Profile**, configuring **Score Thresholds**, and managing pilot setup.
- **CSM role:** Supports review and quality control and is described as having the same permissions as PM / TPM in this feature area.

If a button, page, or action is missing, it is usually due to role permissions or pilot assignment. Configuration is managed by system administrators.

## Related Features

- [Project Management](project-management.md)
- [Recommendations](recommendations.md)
- [Survey Builder](survey-builder.md)
- [CX Visual Editor](cx-visual-editor.md)