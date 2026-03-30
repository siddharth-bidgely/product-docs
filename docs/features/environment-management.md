# Environment Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1234796545)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1232404485)
    - [Confluence 3](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1233977351)

## Overview  
Environment Management lets you create, view, and edit isolated deployment environments—such as dev, uat, or production pilots—directly from the DETO dashboard.  Admins and product managers can spin up a new environment with a single click, supply the required details, and watch the provisioning progress in real time.  Once an environment is ready, you can adjust its settings, export its configuration, or review its status.  The feature is designed to keep your teams focused on business value while the underlying infrastructure is handled automatically.

## Key Capabilities  
- **Create a new environment** with a wizard that collects name, type, AWS region, server URL, and optional frontend URL.  
- **Edit existing environments** to change names, URLs, or AWS region.  
- **View a list of all environments** with key details such as utility, stack name, status, and creation date.  
- **Export environment data** as a JSON file for backup or migration.  
- **Monitor environment status** through a status badge that shows “Pending”, “Provisioning”, “Ready”, or “Failed”.  
- **Delete environments** (future capability, currently gated behind an admin confirmation).  
- **Filter and sort** the environment table by name, status, or creation date.  
- **Access detailed logs** for each environment’s provisioning steps.  

## User Guide  

### Create a New Environment  
1. Open the **Environments** page by selecting **Environment** → **Environments** from the main menu.  
2. Click the **New Environment** button.  
3. In the **Create New Environment** dialog, fill in:  
   - **Type** (dev, uat, prod).  
   - **Name** (e.g., *uat‑pilot‑01*).  
   - **AWS Region** (choose from the list).  
   - **Server URL** (the API endpoint).  
   - **Frontend URL** (optional).  
   - If you selected *dev* or *uat*, also provide a **Utility Name** and **Stack Name**.  
4. Click **Create Environment**.  
5. The dialog will close, and the new row will appear in the table with a status badge that updates automatically.  
6. To see detailed progress, click the **Refresh** button on the **Environment Creation Status** page or watch the status badge change to **Ready**.  

_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_

### Edit an Existing Environment  
1. On the **Environments** page, locate the environment you want to modify.  
2. Click the **Edit** icon in the Actions column.  
3. In the **Edit Environment** dialog, update any of the editable fields: name, AWS region, data server URL, or frontend URL.  
4. Click **Save Changes**.  
5. The table will refresh, and the status badge will reflect any changes.  

### Export Environment Configuration  
1. On the **Environments** page, click the **Export JSON** button.  
2. A file named *environments.json* will download, containing an array of all environment objects.  

### View Environment Status  
1. Each row in the table shows a **Status** chip.  
2. Hover over the chip for a tooltip that explains the current state.  
3. For deeper insight, open the **Environment Creation Status** page to see step‑by‑step progress.  

### Delete an Environment (TBD)  
When the delete feature becomes available, you will see a **Delete** icon in the Actions column.  Clicking it will prompt a confirmation dialog; confirming will remove the environment and free associated resources.  

## Configuration Options  
Environment creation and editing are driven by the fields shown in the dialogs.  No additional configuration is required from users.  System administrators can adjust global settings—such as default AWS regions or server URL templates—through the platform’s configuration management area (not shown in the UI).  

## Related Features  
- [Config Registry](config-registry.md) – Manage global configuration values used by environments.  
- [Workflow Engine](workflow-engine.md) – Automate tasks that run after an environment is provisioned.  
- [Data Scenarios](data-scenarios.md) – Create sample data sets for testing within a new environment.  
- [Content Management](content-management.md) – Deploy UI content to the frontend URL of an environment.