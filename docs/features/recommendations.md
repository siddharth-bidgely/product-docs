# Recommendations

!!! abstract "Confluence"
\- [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
\- [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview

The **Recommendations** area of the DETO dashboard lets utilities create, edit, review, and publish recommendation content without touching code.  It is a self‑serve content‑management hub that keeps all pilot‑specific recommendations in one place, provides a live preview, and tracks every change through a clear state machine (Draft → Modified → Published).  Product managers, customer‑success teams, and utility editors can use the same interface to keep recommendation lists up‑to‑date, audit changes, and collaborate through threaded comments.

## Key Capabilities

* **Create new recommendations** – Add a title, description, media, and target audience.
* **Edit existing recommendations** – Update any field, preview changes, and keep the original live copy until you publish.
* **Publish / Unpublish** – Move a recommendation from Draft or Modified to Published, or revert it to Draft.
* **Bulk operations** – Select multiple rows and publish, discard, or delete them in one click.
* **Live preview** – See exactly how the recommendation will appear to end users while you edit.
* **Versioning & audit trail** – Every change is tracked; you can revert to the last published version.
* **Comments & collaboration** – Add threaded comments on each recommendation for review and QA.
* **Score thresholds** – Adjust the minimum and maximum scores that trigger a recommendation for a given category.
* **Bulk upload** – Import a list of recommendations from an Excel file and map columns automatically.
* **Role‑based access** – Utility, PM/TPM, and CSM roles control who can edit, publish, or delete content.
* **Filter recommendations by channel** – Retrieve recommendations for a specific channel via the API.

## User Guide

### Create a New Recommendation

1. Open the **Recommendations** list from the CMS area.
2. Click the **Add New** button.\
   ![Key Features](../assets/images/815431723-Screenshot-202025-11-11-20at-2011.32.07-E2-80-AFAM.png)
3. In the form, fill in the **Title**, **Description**, and choose a **Category**.
4. Upload an image or video using the **Upload Media** section.
5. Click **Save Draft** to store the recommendation as a draft.
6. When ready, click **Publish** to make it live.

### Edit an Existing Recommendation

1. From the list, click the recommendation you want to change.
2. The editor opens with the current values pre‑filled.
3. Modify any field; the row status changes to **Modified**.
4. Use the **Preview** button to see the updated recommendation.
5. Click **Save** to keep the changes as a modified draft, or **Publish** to replace the live version.\
   ![Workflow State Transitions](../assets/images/815431723-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Publish a Recommendation

1. In the list, locate the recommendation marked **Draft** or **Modified**.
2. Click the **Publish** icon next to the row.
3. Confirm the action in the dialog that appears.
4. The status changes to **Published** and the recommendation becomes visible to end users.\
   ![Benefits](../assets/images/815431723-Screenshot-202025-02-22-20at-2010.51.10-E2-80-AFPM.png)

### Bulk Publish Recommendations

1. In the list view, check the boxes for the recommendations you want to publish.
2. Click the **Bulk Publish** button in the toolbar.
3. Review the summary and click **Confirm**.
4. All selected rows change to **Published** in one operation.\
   ![System Architecture](../assets/images/633110556-Screenshot-202025-08-25-20at-2012.07.30-E2-80-AFPM.png)

### Manage Comments

1. Open a recommendation and click the **Comments** tab.
2. Type a comment in the text box and press **Post**.
3. Replies appear as threaded comments; you can resolve or delete them.
4. The comment count is shown next to the **Comments** icon in the list.\
   ![RBAC workflow](../assets/images/633110556-Screenshot-202025-08-21-20at-203.44.10-E2-80-AFPM.png)

### Adjust Score Thresholds

1. From the CMS menu, select **Score Thresholds**.
2. The table lists each category with its current **Min** and **Max** values.
3. Click a cell to edit the threshold; the row becomes **Modified**.
4. Click **Save** to persist the changes.\
   ![CMS as a sub‑module of Delivery Console](../assets/images/633110556-Screenshot-202025-08-19-20at-204.24.52-E2-80-AFPM.png)

### Upload Recommendations via Excel

1. In the CMS menu, choose **Upload Recommendations**.
2. Click **Choose File** and select your Excel spreadsheet.
3. Map the spreadsheet columns to the required fields using the on‑screen picker.
4. Click **Upload**; the system validates and creates the recommendations.
5. Review any errors in the summary panel and correct the file if needed.\
   ![Subscription Redis](../assets/images/633110556-Screenshot-202025-08-25-20at-201.32.45-E2-80-AFPM.png)

### Filter Recommendations by Channel

1. When using the API to retrieve recommendations, include the `channel` query parameter with the desired channel value (e.g., `email`, `push`, `web`).
2. The API will return only recommendations that match the specified channel.
3. If no channel is specified, all recommendations are returned.

## Configuration Options

* **Pilot selection** – Users see only recommendations for pilots they are assigned to.
* **Role permissions** – The UI shows or hides **Publish**, **Delete**, and **Edit Exclusions** buttons based on the user’s role.
* **Score threshold defaults** – Utilities can set default min/max values that apply to new recommendations.
* **Comment settings** – Enable or disable threaded comments for each pilot.
* **Bulk operation limits** – Administrators can configure how many rows can be processed in a single bulk action.

If a setting is not visible, it is managed by the system administrator through the **Config Registry** or **Config Tools**.

## Related Features

* [Project Management](project-management.md) – Link recommendations to project milestones.
* [Survey Builder](survey-builder.md) – Use recommendations as part of customer surveys.
* [CX Visual Editor](cx-visual-editor.md) – Design the visual layout of recommendation cards.
* [Workflow Engine](workflow-engine.md) – Automate approval workflows for recommendation publishing.
