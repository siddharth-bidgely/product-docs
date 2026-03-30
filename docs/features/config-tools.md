# Config Tools

## Overview  
The **Config Tools** area of the DETO dashboard lets utilities manage the configuration of their dynamic customer‑experience (DCX) environments.  It is the central hub for comparing configuration changes, promoting those changes to target environments, and defining how features and templates are delivered to end users.  The tools are designed for product managers, customer‑success teams, and enterprise administrators who need to keep configuration drift under control and ensure that the right features reach the right clusters.

## Key Capabilities  
- **Compare & Sync Environments** – View side‑by‑side differences between a source and target environment.  
- **Promote Configurations** – Review changes and push them to the target or create a pull‑request bundle.  
- **Manage DCX Clusters** – Create, edit, delete, and categorize clusters (Program, Feature, Template, Content).  
- **Feature Access Matrix** – Control which features are enabled for each cluster and status (Access, Pass, Kill).  
- **Template Personalization Matrix** – Define template logic per cluster and product type.  
- **Add / Remove Clusters** – Dynamically adjust the set of clusters used in matrices.  
- **Search & Filter** – Quickly locate clusters, features, or sections.  
- **Reorder Sections** – Drag‑and‑drop to set the display order of template sections.  
- **Save & Cancel** – Persist changes or discard them at any time.  

## User Guide  

### 1. Compare and Promote Configurations  
1. Open the **Config Tools** page and click **Compare & Sync Environments**.  
2. Select a **Source Environment** and a **Target Environment** from the dropdowns.  
3. Click **Compare** to load the diff view.  
4. Use the **Filter** icon to narrow results by category or status.  
5. Review each row: the left side shows the source value, the right side shows the target value, and the status column indicates *New*, *Modified*, *Conflict*, or *Unchanged*.  
6. When satisfied, click **Publish** (or **Create PR** if you prefer a pull‑request bundle).  
7. Confirm the promotion in the dialog that appears.  
8. The system will show a success toast and return you to the comparison page.  

_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### 2. Create and Manage DCX Clusters  
1. From **Config Tools**, select **DCX Clusters**.  
2. The list shows all clusters with columns for **Name**, **Reference**, **Type**, **Categories**, and **Status**.  
3. Use the **Search** field to find a cluster by name or reference.  
4. Click the **Filter** icon to view only clusters of a specific category (e.g., *Feature*).  
5. To add a new cluster, click **Create Cluster**.  
6. In the creation form, enter the **Cluster Name**, **Reference**, choose **Type** (Virtual or Physical), and tick the desired **Categories**.  
7. Click **Save** to persist the new cluster.  
8. To edit an existing cluster, click the **Edit** icon next to it, make changes, and click **Save**.  
9. To delete a cluster, click the **Delete** icon and confirm.  

_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### 3. Manage Feature Access  
1. Navigate to **Feature Access** from the Config Tools menu.  
2. The matrix shows **Features** on the left and **Clusters** as columns.  
3. Each cell displays the current status (Access, Pass, Kill).  
4. Click a cell to open a dropdown and change its status.  
5. To add a new cluster column, click **Add Cluster**, choose from the list, and confirm.  
6. To remove a cluster column, click the **Remove** icon next to the cluster header.  
7. Use the **Filter** field to show only specific features.  
8. When finished, click **Save Changes**.  
9. A toast will confirm that the feature access has been updated.  

_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

### 4. Manage Template Personalization  
1. Open **Template Personalization** from Config Tools.  
2. The screen shows a matrix of **Sections** versus **Clusters** for the selected **Product Type** (Email, Dashboard, HER).  
3. Use the **Product Type** dropdown to switch between product families.  
4. Add a new cluster by clicking **Add Cluster** and selecting from the available list.  
5. Add a new section by clicking **Add Section**, entering a name, and assigning a **Schema Level 2** value if needed.  
6. Drag a section header to reorder its display priority.  
7. Change a cell’s status by clicking it and selecting **Access**, **Pass**, or **Kill**.  
8. Click **Save Changes** to persist the new personalization rules.  
9. A confirmation toast will appear once the update is successful.  

_<!-- Screenshot: configure Confluence in .env and re-run seed to download images. -->_  

## Configuration Options  
Cluster settings, feature‑access rules, and template‑personalization logic are stored in the system’s configuration registry.  Only users with **Enterprise Admin** or **Config Manager** permissions can modify these settings.  All changes are versioned and can be reviewed in the audit history.

## Related Features  
- [Config Registry](config-registry.md) – View and edit the underlying configuration data.  
- [Environment Management](environment-management.md) – Manage the lifecycle of source and target environments.  
- [Workflow Engine](workflow-engine.md) – Automate promotion workflows and approvals.  
- [Content Management](content-management.md) – Create and manage the content that populates templates.