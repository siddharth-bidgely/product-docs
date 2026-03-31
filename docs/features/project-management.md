# Project Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=847642630)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=853245955)
    - [Confluence 3](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=853475347)
    - [Confluence 4](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=852557844)
    - [Confluence 5](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=853243345)

## Overview

Project Management is the workspace in DETO for creating, organizing, and maintaining projects and their environments. It brings together the key setup steps that delivery teams typically need at the start of a new utility or pilot rollout: choosing or creating a utility, selecting or creating an environment, entering project details, defining ingestion settings, and then managing the project after it is created.

This area is most useful for Delivery Engineers, Product Managers, Customer Success teams, and Enterprise Admins who need a clear view of project status and setup progress without relying on separate tools. After creation, the same area also supports ongoing work such as reviewing project attributes, managing mapped environments, updating setup sections, enabling application scope, configuring pipeline components, and pushing approved changes to an environment.

## Key Capabilities

- View all projects from the **Projects** dashboard.
- Search for a project and filter by project **Type** and **Region**.
- Open an existing project from its project card.
- Create a new project with a guided setup flow.
- Select an existing **Utility** or create a new one during setup.
- Select an existing **Environment** or create a new environment for the project.
- Enter and maintain core project attributes such as name, description, language, country, and timezone.
- Define ingestion settings including customer type, fuel type, meter type, units, and data source.
- Review project details and mapped environments from the **Project Details** page.
- Enable or update **Pipeline Components** for a project.
- Enable or update **Application Scope** items that apply to the project.
- Review pending changes and use **Push Updates** to apply approved configuration changes.
- Monitor **Environment Creation Status** while a new environment is being provisioned.

## User Guide

### Create a new project

1. Open **Projects** from the main navigation to reach the project dashboard.
2. Review the project cards, or use **Search Projects** and the available filters to confirm the project does not already exist.
3. Click **Create new Project** to start the guided setup.
4. In the first step, choose the **Project Type**. Use the option that best matches the engagement:
   - **Rollout**
   - **POCs**
   - **Internal**
   - **Demos**
5. In **Utility**, either select an existing utility or create a new one. If you create a new utility, enter the required business details such as **Country** and **Utility Name**, plus any optional address details.
6. In **Environment Selection**, choose **Use Existing Environment** if you are working with an existing utility and environment, or choose **Create new Environment** if this project needs a new setup. If you create a new environment, select the required **AWS Region**. If you use an existing environment, the region is preselected and cannot be changed.
7. Continue to the project details step and complete the core fields, including **Project ID**, **Project Name**, **Project Description**, **Project Image URL**, **Preferred Language**, **Country**, and **Timezone**. You can enter the **Project ID** manually or use **Autogenerate**. Generated IDs follow region-based numbering rules.
8. Click **Next** to continue into ingestion setup.

![Projects dashboard](../assets/images/847642630-Screenshot-202025-08-27-20at-205.13.53-E2-80-AFPM.png)

### Complete core attributes and ingestion setup

1. In the core attributes section of the creation flow, confirm the project identity fields are correct before moving on.
2. If needed, use **Autogenerate** for **Project ID**. This is helpful when you want the next available ID for the selected region.
3. In the ingestion section, select one or more **Customer Type** values such as **Residential**, **SMB**, or **C&I**.
4. Select the required **Fuel Types**. For each fuel type you choose, complete the matching unit fields, including the standard unit and invoice unit.
5. Select the applicable **Meter Types**.
6. Choose the **Data Source Type**:
   - If you select **S3**, no additional source details are required in this step.
   - If you select **SFTP**, complete the additional fields such as **SFTP User**, **SFTP Password**, **SFTP Server Host Name**, and **Decryption Pathphrase**.
7. Review all required fields carefully. S3-based ingestion is the most established setup path today, so use that where it matches your onboarding plan.
8. Click **Submit Project Request** to create the project and start baseline environment setup if a new environment was requested.

![Project creation form](../assets/images/847642630-Screenshot-202025-08-27-20at-205.31.50-E2-80-AFPM.png)
![Core attributes section](../assets/images/847642630-Screenshot-202025-08-27-20at-205.47.20-E2-80-AFPM.png)
![Ingestion configuration section](../assets/images/847642630-Screenshot-202025-08-27-20at-205.56.50-E2-80-AFPM.png)

### Review project details and monitor environment creation

1. After project creation, open **Project Details** for the project you want to manage.
2. In the project attributes area, review the key information such as **Project ID**, **Project Name**, **Country**, **Customer Type**, **Fuel Type**, and **Meter Type**.
3. Use the setup sections available to your role to continue project configuration. Depending on permissions, you may see areas such as **Core Attributes**, **Ingestion Configs**, **Pipeline Components**, and **Application Scope**.
4. In the environments section, review the mapped environments for the project. You can see details such as environment name, region, URL, and status.
5. If the project was created with a new environment, open **Environment Creation Status** to track progress. Provisioning can take significant time, so this page is intended for progress checks rather than immediate completion.
6. Review the overall status and the detailed progress shown on the page.
7. Refresh the page when you want the latest status update.
8. Return to **Project Details** once the environment is ready and continue setup.

![Project details page](../assets/images/853245955-Screenshot-202025-08-28-20at-203.14.27-E2-80-AFPM.png)
![Environment creation status](../assets/images/853245955-Screenshot-202025-08-28-20at-204.23.31-E2-80-AFPM.png)

### Push approved project changes to an environment

1. Make your project changes in the relevant setup areas, such as project configuration, pipeline setup, or application scope.
2. Save your edits in those sections as needed. These changes are stored for review and are not applied to the environment immediately.
3. Open **Project Details** and go to **Push Updates** or **Pending Configuration Push** for the selected project.
4. Click **Push Updates** to begin the review flow.
5. In the confirmation popup, review the consolidated list of changes since the last successful push.
6. Confirm the push only after you are satisfied that the pending updates are ready for the target environment.
7. Wait for the results popup to show which items succeeded and which failed.
8. If any items fail, use **Retry Failed** to rerun only the failed updates instead of repeating the full push.

![Push updates review](../assets/images/853245955-Screenshot-202025-08-28-20at-204.17.29-E2-80-AFPM.png)
![Push results](../assets/images/853245955-Screenshot-202025-08-28-20at-204.18.22-E2-80-AFPM.png)

### Configure pipeline components and application scope

1. Open **Project Details** for the project you want to configure.
2. Go to **Pipeline Components** to review the setup categories:
   - **Core Processing**
   - **Content Features**
   - **Advanced Features**
3. Enable or disable the components that are applicable to the project. Some components are enabled by default, and some are shown only when the project’s customer type, fuel type, meter type, or enabled products make them relevant.
4. Where a component supports a default file, you can leave the default in place or upload a replacement file if you have a newer or project-specific version.
5. For content-related items such as **RECO** and **Insights**, select the required **source pilot** and **supported locales** when prompted.
6. Save your pipeline changes, then open **Application Scope** to control which pilot-level applications and features are enabled.
7. In **Application Scope**, expand the relevant application areas and turn features on or off for the supported fuel types shown for the project.
8. Click **Save** when you finish. Return later if the project scope changes.

![Pipeline components setup](../assets/images/853475347-Screenshot-202025-09-01-20at-2010.31.55-E2-80-AFAM.png)
![Application scope setup](../assets/images/852557844-Screenshot-202025-09-01-20at-2010.01.20-E2-80-AFAM.png)

## Configuration Options

Project Management behavior is partly controlled by role-based access. Users only see the setup sections and actions allowed for their role. For example, some users may be able to create projects and manage setup sections, while others may have view-only access to project details and status.

Common user-visible configuration areas include:

- **Project Type** selection during creation and editing where allowed
- **Utility** selection during creation
- **Environment** selection during creation
- **Preferred Language**, **Country**, and **Timezone**
- **Ingestion Configs** such as fuel types, units, meter types, and data source
- **Pipeline Components** visibility based on project applicability
- **Application Scope** visibility based on customer type, fuel type, and meter type

Some central applicability rules and master lists are maintained by administrators. If you do not see a setup section, feature, or toggle that you expect, configuration is managed by system administrators.

## Related Features

- [Application Scope](project-management.md)
- [Workflow Engine](workflow-engine.md)
- [Config Registry](config-registry.md)
- [Content Management](content-management.md)