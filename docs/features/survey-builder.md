# Survey Builder

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=948535302)

## Overview  
The Survey Builder in DETO lets utilities create, edit, and publish customer‑facing surveys without needing engineering support. It centralizes all questions, branching logic, and profile mappings in a single, easy‑to‑use interface. Product managers can build a master question bank, while delivery engineers assemble pilot‑specific surveys from that bank. The system tracks changes, enforces review workflows, and ensures that every survey is consistent across utilities.

The dashboard is organized into three main areas: the **Question Bank**, the **Survey Templates** list, and the **Template Editor**. Users can switch between these views from the Survey section of the CMS. Each area offers a set of actions that are clearly labeled and grouped by task.

## Key Capabilities  
- Create and maintain a global **Master Question Bank**  
- Define question text, type, fuel tags, and profile mappings  
- Build **Survey Templates** that can be reused across pilots  
- Import questions from the bank into a pilot survey  
- Add, edit, and delete questions and answer choices  
- Configure branching rules that jump to other questions  
- Preview the end‑user flow before publishing  
- Save drafts, submit for review, and publish surveys  
- Manage question and template status (DRAFT, READY_FOR_REVIEW, READY_TO_PUBLISH, PUBLISHED)  
- Override text at the pilot level without affecting the master bank  
- View and edit profile mappings for Home and Appliance attributes  
- Track unsaved changes and enforce workflow permissions  

## User Guide  

### Master Question Bank Management  
1. Open the **Survey** section and click **Question Bank**.  
2. In the table, click **+ New Question**.  
3. Fill in the **Question Text**, choose a **Type** (e.g., *Single Choice*), and set the **Fuel Type Tag**.  
4. Assign a **Profile Code** (HP or AP) and a **State Mapper** that links the question to a profile field.  
5. Click **Save** to add the question to the master bank.  
6. To edit an existing question, click **Edit** next to it, make changes, and click **Save**.  
7. If you need to remove a question, click **Delete** (available only at the pilot level).  

### Default Survey Template Creation  
1. From the **Survey** section, select **Survey Templates**.  
2. Click **+ New Template**.  
3. Choose a base template or start from scratch.  
4. Override any question or choice text that should differ for this pilot.  
5. Click **Save**; the template becomes available for all future pilots.  

### Pilot‑Level Survey Building  
1. In the **Survey** section, click **Survey Templates** and select a template to edit.  
2. Click **Import from Question Bank**.  
   ![Survey Builder Overview](../assets/images/948535302-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)  
3. In the drawer, search for the desired question and click **Add** to place it on the canvas.  
4. Drag the question to reorder it or click **Edit** to change its prompt or choices.  
5. To add a branching rule, click **Add Rule** on a question block, select the **Trigger Choice**, and choose the **Child Question** to jump to.  
6. Click **Preview Flow** to see how the survey will behave for a customer.  
7. When satisfied, click **Save Draft**.  
8. Submit the draft for review by clicking **Submit for Review**.  

## Configuration Options  
Survey Builder configuration is managed by system administrators. Users can only modify questions, templates, and branching logic within the limits of their role. Permissions for publishing and reviewing are controlled through the CMS role settings.

## Related Features  
- [Survey Builder](survey-builder.md)  
- [Recommendations](recommendations.md)  
- [CX Visual Editor](cx-visual-editor.md)  
- [Workflow Engine](workflow-engine.md)