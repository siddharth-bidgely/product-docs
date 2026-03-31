# Content Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

Content Management in DETO is the workspace where business teams manage pilot-specific content and supporting configuration without waiting for a code release. It acts as a single source of truth for utility content such as **Recommendations**, **Appliance Profile**, **Home Profile**, and related pilot settings. This helps teams move faster, reduce spreadsheet-based handoffs, and keep changes organized by project.

The feature is designed around **Projects**. Each pilot has its own isolated content, locales, and workflow states, so teams can safely work on one utility’s setup without affecting another. Depending on your role, you can create and update content, submit it for review, approve it for publishing, and manage pilot-level setup.

A key benefit of Content Management is controlled publishing. Teams can work on **DRAFT** or **MODIFIED** content while the current **PUBLISHED** version remains unchanged. This supports review, collaboration, and safer rollout planning across production and QA use cases.

## Key Capabilities

- Create a new pilot from scratch or by cloning an existing one
- Switch between assigned **Projects** and work within pilot-specific content
- View a pilot’s **content dashboard** for content counts, health, and localization status
- Edit **Recommendations** with separate working and published versions
- Move recommendation content through review states such as **TODO**, **READY_FOR_REVIEW**, and **READY_TO_PUBLISH**
- Publish or unpublish recommendations, based on role permissions
- Manage **Appliance Profile** defaults, visibility, and fuel type settings
- Manage **Home Profile** defaults, visibility, and account type filters
- Save or discard individual changes, or use bulk **Save all** and **Discard all**
- Work with localized content using **Default Locale** and **Supported Locales**
- Add comments and feedback as part of the review process
- Configure **Score Thresholds** for recommendation scoring, where permitted

## User Guide

### Create a new project

1. Sign in to the CMS Admin Console and open **Projects**.
2. In the **Projects List**, click **Create New Project**.
3. Choose whether to start from a **Source Pilot** or create a new project with a one-click setup.
4. Enter the required project details, including **Pilot ID**, **Name**, **Default Locale**, and **Supported Locales**.
5. Click **Create Project** to start setup.
6. Review the project creation status page and wait for the setup to complete.
7. When the project is ready, open it to land on the pilot’s **content dashboard**.

![Content management overview](../assets/images/815431723-Screenshot-202025-11-11-20at-2011.32.07-E2-80-AFAM.png)

### Edit and publish recommendations

1. Open **Projects** and select the pilot you want to manage.
2. From the pilot’s **content dashboard**, open **Recommendations**.
3. Find the recommendation you want to work on and open it for editing.
4. Update the content you need, such as recommendation text, localized content, media, or targeting-related details available to your role.
5. Click **Save** or **SAVE_UPDATES** to keep your changes. If you do not want to keep them, use **Discard** or **DISCARD_UPDATES**.
6. Check the item’s status. New content typically starts as **DRAFT**, while edits to live content appear as **MODIFIED**.
7. If your role supports review handoff, submit the item so it moves from **TODO** to **READY_FOR_REVIEW**.
8. After approval, a publishing role can move the item to **READY_TO_PUBLISH** and click **PUBLISH**. If needed, authorized users can also **UNPUBLISH** content.

![Recommendation workflow states](../assets/images/815431723-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Update Appliance Profile for a pilot

1. Open **Projects** and select the pilot you want to update.
2. From the pilot area, open **Appliance Profile**.
3. Browse the category tree and expand the sections you want to review.
4. Select an appliance and update its available settings, such as default values, visibility, or fuel type options.
5. Repeat the same action for other appliances if you are making multiple changes.
6. Click **Save** for a single item, or use **Save all** to keep multiple edits together.
7. If you need to undo pending changes, click **Discard** for one item or **Discard all** for bulk changes.

![CMS within Delivery Console](../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

### Update Home Profile for recommendation targeting

1. Open the relevant pilot from **Projects**.
2. Go to **Home Profile**.
3. Expand the attribute groups to find the home attribute you want to manage.
4. Update the attribute settings, such as default value, visibility, or account type filtering.
5. Review your pending edits before saving.
6. Click **Save** to keep a single change, or use **Save all** if you updated several attributes.
7. Use **Discard** or **Discard all** if you want to remove unsaved changes.

![Role-based workflow and controls](../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

## Configuration Options

Content Management is primarily configured at the project level.

- **Project setup:** When creating a project, you define **Default Locale** and **Supported Locales**.
- **Pilot isolation:** All content and settings are scoped to the selected project.
- **Roles and permissions:** What you can view, edit, submit, publish, or configure depends on your assigned role and project access.
- **Utility role:** Typically limited to reading assigned content, editing allowed content, saving changes, discarding changes, switching projects, and submitting for review.
- **PM / TPM / CSM roles:** Can generally do everything Utility users can do, plus publish, unpublish, delete, manage pilot setup, edit profiles, configure **Score Thresholds**, and manage exclusions.
- **Localization:** Locale-specific content can be maintained as part of normal authoring. The dashboard may also show localization completeness or status.

If a setting or action is not visible, it is usually controlled by your role or by project access assigned by an administrator.

## Related Features

- [Recommendations](recommendations.md)
- [Survey Builder](survey-builder.md)
- [Color Management](color-management.md)
- [Project Management](project-management.md)