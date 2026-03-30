# Config Registry

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1330413583)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1331101711)

## Overview  
The **Config Registry** is the central hub for all configuration metadata in the DETO platform.  
It stores the *definition* of every configuration item—its key, type, validation rules, and possible values—without holding the runtime values that the system actually uses.  
This separation lets you design, test, and approve configuration schemas in a safe, versioned environment before they are applied to utilities or templates.  

Utility teams, product managers, and enterprise admins use the Config Registry to:

* Create new configuration definitions that can be reused across products.  
* Validate that values meet business rules before they reach production.  
* Link configurations to templates so that each environment can override defaults.  
* Track changes, approvals, and audit history in a single, easy‑to‑navigate interface.  

## Key Capabilities  
- **Create** new configuration definitions.  
- **Edit** existing configurations (while in draft or rejected state).  
- **Submit** a configuration for approval.  
- **Approve** or **Reject** pending configurations.  
- **Filter** and **search** configurations by key, type, or status.  
- **Link** configurations to templates.  
- **Override** values within a template.  
- **View** configuration details and audit history.  
- **Export** configuration metadata as JSON for version control or migration.  
- **Manage** lookup types and values that drive dropdowns and validation.  

## User Guide  

### Create a New Configuration  
1. Open the **Configuration Registry** from the CMS area.  
2. Click **Create New Configuration**.  
3. In the form, fill in **Config Type**, **Config Key**, **Display Name**, and **Data Type**.  
4. Add any **Possible Values** or a **Validation Rule** if needed.  
5. Click **Save** to store the draft.  
6. (Optional) Click **Generate JSON** to copy the legacy `config-reg.json` format for PRs.  
7. Click **Submit for Approval** to move the item to **PENDING_APPROVAL**.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### Approve or Reject a Configuration  
1. In the registry list, locate the configuration with status **PENDING_APPROVAL**.  
2. Click the **Approve** button to mark it **APPROVED**.  
3. Or click **Reject** to return it to **DRAFT** and add a comment.  
4. Approved configurations become available to all templates and consumer services.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### Link Configurations to a Template  
1. Open the **Template Detail** page for the desired template.  
2. Click **Add Configs**.  
3. In the dialog, search for configurations by key or type.  
4. Select one or more items and click **Next**.  
5. For each selected configuration, enter an **Override Value** if you want a different value for this template.  
6. Click **Save** to attach the configurations to the template.  
7. The template now lists the linked configurations and their override values.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### Override Config Values in a Template  
1. In the template’s configuration list, click the **Edit** icon next to a configuration.  
2. Enter the new value in the **Template Value** field.  
3. Click **Save**.  
4. The change is stored only for this template; the base definition remains unchanged.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### View and Search Configurations  
1. On the **Configuration Registry** page, use the **Filter** panel to narrow by **Config Type**, **Status**, or **Lookup** categories.  
2. Use the search box to find a specific key or display name.  
3. Click a row to open the **Configuration Detail** view.  
4. In detail view, you can see the full metadata, validation rule, and audit trail.  
5. Click **Close** to return to the list.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### Export Configuration Metadata  
1. In **Configuration Detail**, click **Export JSON**.  
2. A modal shows the legacy `config-reg.json` snippet.  
3. Click **Copy to Clipboard** or **Download** to save the file.  
4. Use the exported JSON in version control or migration scripts.  
_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

## Configuration Options  
Permissions for the Config Registry are role‑based and managed by system administrators:

| Role Group | Permissions |
|------------|-------------|
| **Config Viewers** | View all approved configurations. |
| **Config Editors** | Create, edit, and submit configurations. |
| **Config Approvers** | Approve or reject pending configurations. |
| **Config Admins** | Full control, including bulk operations and bypassing approval. |

If you need to change a role or add a new user, contact the platform administrator.  

## Related Features  
- [Project Management](project-management.md) – Coordinate configuration changes with project timelines.  
- [Recommendations](recommendations.md) – Use configuration data to drive product recommendations.  
- [Survey Builder](survey-builder.md) – Capture utility feedback that may influence configuration schemas.  
- [CX Visual Editor](cx-visual-editor.md) – Design customer experience flows that rely on configuration templates.  

---