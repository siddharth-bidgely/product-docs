# Content Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=815431723)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=633110556)

## Overview  
The Content Management System (CMS) is a self‑serve hub that lets utilities and Bidgely teams manage all non‑code assets—such as appliance profiles, home profiles, recommendations, surveys, and media—directly from the DETO dashboard.  By keeping content in one place, the CMS eliminates duplicate files, speeds time‑to‑market, and provides a clear audit trail for every change.  The system is designed for a range of roles: Utility users can edit content within their pilots, Product Managers and Technical Product Managers can publish and configure pilots, Customer Success Managers can review and approve content, and Delivery staff can customize entities at the pilot level.

The CMS is built around four core roles:  
- **Utility** – basic editing of content within assigned pilots.  
- **PM / TPM** – full lifecycle control, publishing, and pilot configuration.  
- **CSM** – review, quality assurance, and final approval before publishing.  
- **Delivery** – future‑ready customization of entities at the pilot level.  

With a single source of truth, decoupled content‑from‑code, and role‑based access, the CMS empowers stakeholders to deliver personalized, localized experiences without engineering involvement.

## Key Capabilities  
- Create, edit, and delete pilots (projects).  
- Manage appliance and home profiles with hierarchical trees.  
- Build, preview, and publish recommendations.  
- Configure score thresholds for recommendation ranking.  
- Localize content for multiple locales.  
- Track edit status (`DRAFT`, `MODIFIED`, `PUBLISHED`).  
- Submit recommendations for review and approval.  
- Bulk save or discard changes across many items.  
- View live preview of content as it will appear in the CX product.  
- Add comments and real‑time feedback on recommendations.  
- Audit trail of every change with user, timestamp, and action.  
- Role‑based permissions for editing, publishing, and reviewing.  

## User Guide  

### Create a New Pilot  
1. Open the **CMS Admin Console** from the main menu.  
2. Click **“Create New Project”**.  
3. In the **Project Details** form, enter a unique **Pilot ID**, a descriptive **Name**, and select the **Default Locale**.  
4. Check any additional **Supported Locales** you want to enable.  
5. Click **Save** to create the pilot.  
6. After creation, the system shows a **creation status page**.  
7. Click **“Open Pilot”** to launch the pilot’s content dashboard.  
8. ![Key Features](../assets/images/815431723-Screenshot-202025-11-11-20at-2011.32.07-E2-80-AFAM.png)  

### Edit a Recommendation  
1. From the pilot dashboard, navigate to **Recommendations**.  
2. Click **“New Recommendation”** to open the wizard.  
3. Enter a **Title**, **Description**, and attach any **Media**.  
4. Choose target rules (locale, fuel type, etc.) in the **Targeting** panel.  
5. Click **“Save”** to keep the recommendation in **DRAFT** status.  
6. Click **“Submit for Review”** to move it to **READY_FOR_REVIEW**.  
7. A CSM or PM reviews the recommendation and clicks **“Approve”**.  
8. Click **“Publish”** to make the recommendation live.  
9. ![Workflow State Transitions](../assets/images/815431723-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)  

### Edit Home Profile  
1. In the pilot dashboard, open **Home Profile**.  
2. The screen shows a **tree of attribute groups** (e.g., “Account Type”, “Region”).  
3. Click an attribute to open its **edit panel**.  
4. Select a **Default Value** from the dropdown.  
5. Toggle **Visibility** to include or exclude the attribute from recommendation targeting.  
6. Use the **Account Type Filter** to restrict the attribute to specific account types.  
7. After making changes, click **“Save All”** to persist them.  
8. If you need to revert, click **“Discard All”**.  
9. ![Benefits](../assets/images/815431723-Screenshot-202025-02-22-20at-2010.51.10-E2-80-AFPM.png)  

## Configuration Options  
- **Pilot Permissions** – set which users can view, edit, or publish content for each pilot.  
- **Role‑Based Access** – assign users to Utility, PM/TPM, CSM, or Delivery roles.  
- **Locale Settings** – enable or disable specific locales for a pilot.  
- **Score Thresholds** – configure thresholds per category to influence recommendation ranking.  
- **Audit Settings** – view or export the audit trail for compliance.  

If a setting is not visible in the UI, it is managed by system administrators through the configuration registry.

## Related Features  
- [Project Management](project-management.md)  
- [Recommendations](recommendations.md)  
- [Survey Builder](survey-builder.md)  
- [CX Visual Editor](cx-visual-editor.md)