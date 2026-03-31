# Content Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

Content Management in DETO gives business teams a controlled way to manage pilot-specific content without waiting for a product release cycle. It is designed to be the working area for utility and program content such as recommendations, pilot profiles, and related configuration that supports customer-facing experiences. Instead of passing files around or making one-off edits, teams can work in a shared, governed workspace with clear ownership and review steps.

This area is especially useful for Product Managers, Customer Success teams, and Enterprise Admins who need to update content safely across pilots. The experience is organized around pilots, so each project has its own isolated workspace, content dashboard, and configuration. Depending on your role, you can create and edit content, review changes, submit items for approval, publish approved updates, and manage foundational profile data used for targeting.

A key benefit of this feature is control. Content can exist as a working draft while a published version remains live. That means you can continue refining updates, collaborate with reviewers, and only release changes when they are ready. The result is faster content operations, better auditability, and fewer errors.

## Key Capabilities

- Create and manage content by pilot, with each pilot kept separate from others
- Switch between pilots from the **Projects** area and open a pilot’s content dashboard
- Create, edit, preview, review, and publish **Recommendations**
- Work with draft and published versions of the same content without overwriting live content
- Move recommendation content through workflow states such as **Draft**, **Modified**, **Ready for QA**, **Ready to Publish**, and **Published**
- Submit content for review and support structured handoffs between contributors and approvers
- Add and manage localized content for supported pilot languages
- Edit **Appliance Profile** settings used for recommendation targeting
- Edit **Home Profile** attributes and defaults used for targeting
- Use bulk actions such as **Save all** and **Discard all** in profile management screens
- Configure recommendation **Score Thresholds** if your role allows it
- Collaborate through comments and review-oriented workflows

## User Guide

### Switch to a pilot and open its content workspace

1. Open **Projects** from the main navigation.
2. Review the available pilot cards and find the pilot you want to work on.
3. Select the pilot card to switch your working context to that pilot.
4. Wait for the pilot’s content dashboard to load. This dashboard is the starting point for content work in that pilot.
5. Review the dashboard summary, including content counts, localization status, and quick links to major content areas.
6. Choose the area you want to manage next, such as **Recommendations**, **Home Profile**, **Appliance Profile**, or **Score Thresholds**.

![Content management overview](../assets/images/815431723-Screenshot-202025-11-11-20at-2011.32.07-E2-80-AFAM.png)

### Edit Appliance Profile for a pilot

1. Start from the selected pilot’s content dashboard.
2. Open **Appliance Profile**.
3. Browse the appliance tree and expand categories or subcategories to find the appliance you want to update.
4. Select an appliance and review its current settings.
5. Update the available fields, such as default values, whether the appliance is enabled for recommendation targeting, and supported fuel types.
6. Click **Save** to keep changes for that appliance, or click **Discard** to remove your unsaved edits.
7. If you made several updates across the page, use **Save all** to keep everything at once or **Discard all** to revert all pending changes.

Use this screen when you need to control which appliances are available for targeting and what defaults should apply within a pilot. Access to this area depends on role; Utility users typically cannot edit this profile.

### Edit Home Profile attributes

1. Start from the selected pilot’s content dashboard.
2. Open **Home Profile**.
3. Expand the attribute groups to locate the home attribute you want to review.
4. Select the attribute and check its current default value and targeting settings.
5. Update the attribute settings, including default values, visibility for recommendation targeting, and any account type filters shown on the page.
6. Click **Save** to keep the change for that attribute.
7. If needed, use **Save all** to commit multiple updates together, or **Discard all** to remove pending edits across the page.

This area is used to maintain the home-level metadata that recommendations and related experiences rely on for targeting. It is best suited for users responsible for pilot setup, quality control, or ongoing content governance.

### Manage recommendation content through review and publishing

1. Open the pilot you want to manage, then go to **Recommendations** from the content dashboard.
2. Find the recommendation you want to work on, or create a new one if your role allows it.
3. Edit the recommendation content, including localized fields where needed. If preview is available, review the content before moving it forward.
4. Save your work. New items typically begin in **Draft**, while edits to live items appear as **Modified** until they are approved and published.
5. When your changes are ready for review, submit the recommendation to the next workflow stage, such as **Ready for QA** or **Ready for Review**, depending on what your role and screen allow.
6. If you are an approver, review the content and move it to **Ready to Publish** when it has passed review.
7. If you have publishing permission, click **Publish** to make the approved version live. Use **Unpublish** only when you need to remove live content and your role allows it.
8. If you decide not to keep your edits, use **Discard** or the equivalent discard action available for the current state.

![Workflow states for recommendations](../assets/images/815431723-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

A few workflow rules are important:
- **Utility** users can usually create, edit, save, discard, and submit for review, but cannot publish.
- **PM**, **TPM**, and **CSM** users can manage the full lifecycle, including publish and unpublish actions.
- Production-facing content should only be considered live when it reaches **Published**.

### Understand recommendation statuses before release

1. In **Recommendations**, look at the status indicators shown for each item.
2. Use **Edit Status** to understand whether the item is a new draft, a modified version of published content, or already live.
3. Use **Verification Status** to understand where the item is in the review process.
4. Treat **Draft** as work in progress for new content.
5. Treat **Modified** as an unpublished update to content that already has a live version.
6. Treat **Ready for QA** as content prepared for validation in testing contexts.
7. Treat **Ready to Publish** as approved content waiting for final release.
8. Treat **Published** as the live version used in production.

This distinction matters because a recommendation can have a live published version and a separate working version at the same time. That lets your team continue editing safely without replacing what customers currently see.

## Configuration Options

Configuration is role-based and pilot-based.

- **Pilot access** determines which pilots you can open and manage.
- **Utility** users typically have basic editing access for assigned pilots. They can usually create and edit recommendations, save or discard changes, submit content for review, switch pilots, and delete content only where permitted.
- **Utility** users typically cannot publish or unpublish content, manage pilots, edit **Appliance Profile** or **Home Profile**, view or update recommendation exclusions, or configure **Score Thresholds**.
- **PM**, **TPM**, and **CSM** users typically have broader control, including publishing, unpublishing, deleting content, editing pilot profiles, configuring **Score Thresholds**, and creating or configuring pilots.
- Localization options are defined at the pilot level through a **Default Locale** and **Supported Locales**.
- Workflow actions shown in the interface depend on both your role and the current content status.

If you do not see an expected action such as **Publish**, **Unpublish**, **Save all**, or access to a profile screen, it is usually due to role or pilot permissions.

## Related Features

- [Recommendations](recommendations.md)
- [Survey Builder](survey-builder.md)
- [Project Management](project-management.md)
- [Config Tools](config-tools.md)