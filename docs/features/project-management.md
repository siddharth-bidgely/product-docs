# Project Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=847642630)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=853245955)
    - [Confluence 3](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=853475347)
    - [Confluence 4](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=852557844)

## Overview  
The DETO web application gives delivery teams a single, unified dashboard to create, manage, and monitor projects for energy utilities.  From the Projects Dashboard you can launch a wizard that provisions all the required cloud resources in one click, view detailed project metadata, and push configuration changes to the pilot environment.  The interface is designed for Delivery Engineers, Product Managers, and Customer Success teams, so you can focus on business logic rather than infrastructure.

## Key Capabilities  
- **Create new projects** with a guided wizard that sets up utilities, environments, and ingestion pipelines.  
- **Edit project attributes** (name, description, image, language, time zone).  
- **Configure ingestion** parameters for customer type, fuel, meter, and data source.  
- **View project environments** (UAT, Prod, Dev, Non‑Prod) and their status.  
- **Push configuration updates** to a selected environment with a confirmation step.  
- **Track environment creation status** in real time while provisioning.  
- **Navigate between project details, setup, and status pages** from the dashboard.  
- **Access related tools** such as Recommendations, Survey Builder, and Content Management.

## User Guide  

### Create a New Project  
1. Open the **Projects Dashboard** and click the **Create New Project** button.  
   ![Projects Dashboard](../assets/images/847642630-Screenshot-202025-08-27-20at-205.13.53-E2-80-AFPM.png)  
2. In the wizard’s first step, select a **Utility** or click **Create New Utility** to add one.  
   ![Utility & Environment Selection](../assets/images/847642630-Screenshot-202025-08-27-20at-205.31.50-E2-80-AFPM.png)  
3. Choose an **Environment**: either use an existing one or click **Create New Environment** and pick an AWS region.  
4. In the second step, fill in the **Core Attributes** such as Project ID, Name, Description, Image URL, Language, Country, and Timezone.  
   ![Core Attributes](../assets/images/847642630-Screenshot-202025-08-27-20at-205.47.20-E2-80-AFPM.png)  
5. In the final step, set the **Ingestion Configuration** – customer type, fuel type, meter type, and data source.  
   ![Ingestion Configuration](../assets/images/847642630-Screenshot-202025-08-27-20at-205.56.50-E2-80-AFPM.png)  
6. Review the summary and click **Submit Project Request** to provision the infrastructure.  
   ![Submit Project Request](../assets/images/847642630-Screenshot-202025-08-27-20at-208.21.34-E2-80-AFPM.png)  

### View and Edit Project Details  
1. From the dashboard, click **Open Project** on the desired project card.  
   ![Project Attributes](../assets/images/853245955-Screenshot-202025-08-28-20at-203.14.27-E2-80-AFPM.png)  
2. The **Project Attributes** section shows the current name, description, image, and other metadata.  
3. To change any attribute, click the **Edit** icon next to the field, update the value, and click **Save**.  
4. Scroll down to the **Project Environments** list to see UAT, Prod, Dev, and Non‑Prod environments and their current status.  
   ![Project Environments](../assets/images/853245955-Screenshot-202025-08-28-20at-203.18.15-E2-80-AFPM.png)  
5. Switch to the **Project Setup** tab to adjust ingestion or other configuration settings.  
   ![Project Setup](../assets/images/853245955-Screenshot-202025-08-28-20at-203.27.41-E2-80-AFPM.png)  
6. After making changes, click **Save** to persist the updates locally.  

### Push Configuration Updates  
1. In the **Project Configs** section, modify any setting you need to change.  
   ![Make Changes](../assets/images/853245955-Screenshot-202025-08-28-20at-204.17.29-E2-80-AFPM.png)  
2. Click the **Push Updates** button to apply the changes to the pilot environment.  
   ![Push Updates Button](../assets/images/853245955-Screenshot-202025-08-28-20at-204.18.01-E2-80-AFPM.png)  
3. A confirmation dialog appears listing the pending changes. Review the list.  
   ![Confirmation Popup](../assets/images/853245955-Screenshot-202025-08-28-20at-204.18.22-E2-80-AFPM.png)  
4. Click **Confirm** to start the push.  
   ![Confirm Push](../assets/images/853245955-Screenshot-202025-08-28-20at-204.19.12-E2-80-AFPM.png)  
5. After the push completes, a result dialog shows the status of each configuration item.  
   ![Result Popup](../assets/images/853245955-Screenshot-202025-08-28-20at-204.23.31-E2-80-AFPM.png)  

## Configuration Options  
Project‑level configuration is controlled by the DETO system administrators.  Delivery teams can request changes through the dashboard, but any global settings (e.g., default ingestion parameters, environment templates, or cluster‑wide overrides) are managed by the admin console and not directly editable in the wizard.

## Related Features  
- [Recommendations](recommendations.md)  
- [Survey Builder](survey-builder.md)  
- [Content Management](content-management.md)