# Survey Builder

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=948535302)

## Overview  
Survey Builder is the central hub inside DETO where product managers, delivery engineers, and utility teams can create, edit, and publish customer‑facing surveys.  It replaces a fragmented, engineering‑heavy process with a single, self‑serve interface that keeps all questions, branching logic, and profile mappings in one place.  The result is faster turnaround, consistent wording across pilots, and a clear audit trail of changes.

## Key Capabilities  
- Create a new survey template from a default starter.  
- Import questions from the Master Question Bank.  
- Add, edit, or delete questions and reorder them.  
- Define branching rules that show or hide questions based on earlier answers.  
- Override question text for a specific pilot without affecting the master bank.  
- Preview the survey flow, including all branching paths.  
- Publish or unpublish a template for a utility.  
- Track status changes (DRAFT → READY_FOR_REVIEW → READY_TO_PUBLISH → PUBLISHED).  
- View and edit question metadata such as HP/AP mappings and fuel‑type tags.  
- Manage unsaved changes and discard edits.  
- Filter questions by fuel type or tags.  

## User Guide  

### Create a New Survey Template  
1. Open the **Survey** area and click **Create New Template**.  
   ![Create new template](../assets/images/948535302-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)  
2. In the dialog, choose a **Template Type** (e.g., Home Profile Survey) and enter a **Template Name**.  
3. Click **Create**. The new template appears in the list with status **DRAFT**.  
4. Open the template by double‑clicking it.  
5. The **Survey Template Editor** opens with an empty question list.  

### Import Questions from the Master Question Bank  
1. In the template editor, click **Import from Question Bank**.  
2. A drawer slides in from the right, showing a searchable list of published questions.  
3. Use the search bar to find the desired question.  
4. Drag the question into the main editor area or click **Add** next to it.  
5. The question appears in the template with its default text and choices.  
6. Repeat until all needed questions are added.  

### Add Branching Logic  
1. Select a question that should trigger a branch.  
2. Click **Add Branching Rule** (or the **+** icon next to the question).  
3. In the rule dialog, choose the **Parent Question** (the one you selected).  
4. Pick the **Trigger Choice** that will activate the branch.  
5. Select the **Child Question** that should appear when the trigger is chosen.  
6. Click **Save Rule**.  
7. Repeat for additional branches.  

### Preview and Publish the Survey  
1. Click **Preview** to see the survey as a customer would.  
2. Navigate through the flow, ensuring all branches work as expected.  
3. If satisfied, click **Publish**.  
4. The template status changes to **PUBLISHED** and becomes available to the utility.  

## Configuration Options  
- **Status Workflow**: The system automatically moves templates through the review stages.  
- **Unsaved Changes**: Any edits are stored locally until you click **Save** or **Publish**.  
- **Permissions**:  
  - Product Managers can create, edit, and publish.  
  - Delivery Engineers can clone and modify templates for new pilots.  
  - Utility users can view and request changes.  

## Related Features  
- [Survey Builder](survey-builder.md) – the core survey creation tool.  
- [Recommendations](recommendations.md) – generate insights based on survey responses.  
- [CX Visual Editor](cx-visual-editor.md) – design customer experience flows.  
- [Config Registry](config-registry.md) – manage global configuration settings.