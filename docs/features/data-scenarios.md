# Data Scenarios

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1112571921)

## Overview  
Data Scenarios let utilities model and analyze how different factors—such as weather, pricing, or customer behavior—affect energy consumption. The feature is part of the Content Management area, where you can create, edit, and publish scenario sets that feed into dashboards, recommendations, and reporting tools. By defining scenarios, you can test “what‑if” conditions, compare outcomes, and share insights with stakeholders. The interface is designed for business users, so you’ll see clear tables, filters, and action buttons without needing to touch code.

## Key Capabilities  
- Create a new data scenario set  
- Edit existing scenario details and parameters  
- Publish or unpublish a scenario for use in analytics  
- Delete a scenario set (with confirmation)  
- Filter scenarios by name, status, or date created  
- View a scenario’s full configuration in a read‑only panel  
- Duplicate an existing scenario to start a new version  
- Export scenario data for external analysis  

## User Guide  

### Create a New Data Scenario  
1. From the main menu, open **Content Management** and select **Data Scenarios**.  
2. On the Data Scenarios page, click the **+ New Scenario** button.  
3. In the dialog, enter a **Name** and optional **Description**.  
4. Choose the **Scenario Type** from the dropdown (e.g., “Weather Impact”, “Tariff Change”).  
5. Click **Save** to create the scenario.  
6. The new scenario appears in the list with a status of **Draft**.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### Edit and Publish a Scenario  
1. Locate the scenario you want to modify in the list.  
2. Click the **Edit** icon next to the scenario.  
3. Update any fields—parameters, thresholds, or notes.  
4. When ready, click **Save** to keep changes.  
5. To make the scenario available to other tools, click **Publish**.  
6. A confirmation banner appears, and the status changes to **Published**.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### Duplicate a Scenario  
1. In the Data Scenarios list, find the scenario to duplicate.  
2. Click the **Duplicate** icon.  
3. In the prompt, provide a new **Name** and adjust any details.  
4. Click **Create**.  
5. The duplicated scenario starts as a **Draft** and can be edited further.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### Delete a Scenario  
1. Hover over the scenario row and click the **Delete** icon.  
2. A confirmation dialog appears: “Are you sure you want to delete ‘Scenario X’?”  
3. Click **Delete** to remove it permanently.  
4. The scenario disappears from the list.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

## Configuration Options  
- **Permissions**: Only users with the “Scenario Manager” role can create, edit, or publish scenarios.  
- **Default Status**: New scenarios start as **Draft**; they must be published before they influence analytics.  
- **Retention Policy**: Deleted scenarios are archived for 30 days before permanent removal.  

If you need to adjust these settings, contact your system administrator or refer to the **Config Registry** for advanced configuration.

## Related Features  
- [Project Management](project-management.md) – Link scenarios to specific projects for coordinated analysis.  
- [Recommendations](recommendations.md) – Use published scenarios to drive tailored energy recommendations.  
- [Content Management](content-management.md) – Manage all content assets, including data scenarios, in one place.  
- [Workflow Engine](workflow-engine.md) – Automate scenario approval and publication workflows.