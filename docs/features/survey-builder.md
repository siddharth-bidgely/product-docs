# Survey Builder

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=948535302)

## Overview  
The Survey Builder is the central hub for creating, editing, and publishing customer‑facing surveys. It lets product managers, delivery engineers, and utilities keep all questions, branching logic, and translations in one place, so every pilot uses consistent wording and data mapping. The builder is self‑serve: you can add new questions, reorder them, set up conditional paths, and preview the final experience without needing engineering help. Once a template is ready, it can be approved and published to a utility’s survey channel, and any changes are tracked through a clear status workflow.

## Key Capabilities  
- Create a new survey template from scratch or clone an existing one.  
- Import questions from the Master Question Bank.  
- Add, edit, or delete questions and answer choices.  
- Reorder questions with drag‑and‑drop.  
- Define branching rules that skip or show questions based on prior answers.  
- Edit question text and metadata for specific locales.  
- Preview the survey as a customer would see it.  
- Save drafts, submit for review, and publish or unpublish templates.  
- Track changes and view a history of edits.  
- Delete or discard unsaved changes.  
- Manage template names and titles.  
- View and edit the list of questions in a tree view.  

## User Guide  

### Create a New Survey Template  
1. From the Survey home page, click **Create New Template**.  
2. In the dialog, choose a **Template Type** (e.g., *Default Survey*) and enter a **Template Name**.  
3. Click **Create** to open the template editor.  
4. In the left pane, click **Import from Question Bank**.  
5. Search for a question, then click **Add** to insert it into the canvas.  
6. Drag questions to reorder them.  
7. Double‑click a question to edit its **Display Text** or **Answer Choices**.  
8. When finished, click **Save** to keep a draft.  

### Edit an Existing Template  
1. Open the template from the list.  
2. Click the **Edit** icon (pencil) next to the template name.  
3. Use the **Add Question** button to insert new items or the **Delete** icon to remove one.  
4. Drag questions to change the flow.  
5. Click a question to open its **Edit Dialog**; modify text, choices, or metadata.  
6. If you need to change a child question, click the **Add Child Question** button under the parent choice.  
7. Click **Save** when all edits are complete.  

### Define Branching Logic  
1. In the template editor, select a question that has multiple choices.  
2. Click the **Branching** tab next to the canvas.  
3. Click **Add Rule**.  
4. Choose the **Parent Question**, the **Answer** that triggers the rule, and the **Target Question** to jump to.  
5. Repeat to add multiple rules.  
6. Click **Preview Flow** to see how the survey will navigate.  
7. If satisfied, click **Save** to persist the rules.  

### Preview and Publish  
1. With the template open, click **Preview** at the top of the editor.  
2. Complete the survey in the preview window to verify text, branching, and layout.  
3. Close the preview and return to the editor.  
4. Click **Submit for Review**; the template moves to *READY_FOR_REVIEW*.  
5. A reviewer (TPM/CSM) approves the template, changing its status to *READY_TO_PUBLISH*.  
6. Click **Publish** to make the survey live for the utility.  
7. The status updates to *PUBLISHED*; you can still edit and re‑publish if needed.  

![Survey Flow Diagram](../assets/images/948535302-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

## Configuration Options  
Template settings such as default locale, approval workflow, and publishing permissions are managed by system administrators. Users can only change question content, branching, and ordering within the builder.  

## Related Features  
- [Project Management](project-management.md)  
- [Recommendations](recommendations.md)  
- [CX Visual Editor](cx-visual-editor.md)  
- [Config Registry](config-registry.md)