# Survey Builder

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=948535302)

## Overview

Survey Builder in DETO gives business users a centralized place to manage customer-facing survey content for a project. It is designed to reduce dependency on engineering teams for routine survey updates such as question wording, answer choices, survey structure, and pilot-specific adjustments. In practice, this means your team can maintain a consistent survey experience while still tailoring content for individual utility programs.

Within the **Survey** area, you work across two connected spaces: **Survey Templates** and **Question Bank**. The **Question Bank** is your reusable library of survey questions, while **Survey Templates** are the actual survey flows used for a pilot. Together, these tools support survey setup, question reuse, branching logic, profile mapping, review, and publishing.

## Key Capabilities

- Create and maintain a centralized **Question Bank** for reusable survey questions.
- Search and review existing questions before adding them to a survey.
- Create pilot-level questions for project-specific needs.
- Edit question details such as text, type, category, group, fuel applicability, and answer choices.
- Add answer choice mappings to support Home Profile and Appliance Profile updates.
- Create and manage **Survey Templates** for a pilot.
- Import published questions from the **Question Bank** into a template.
- Reorder questions in a template to control survey flow.
- Override question text and answer choice text at the template level without changing the master question.
- Build branching logic by linking a parent question, trigger choice, and child question.
- Preview survey structure before deployment.
- Move questions and templates through draft, review, and publish statuses based on role permissions.

## User Guide

### Create or edit questions in the Question Bank

1. Open **Survey** from the CMS area.
2. Select the **Question Bank** tab to view all available survey questions for the current project.
3. To add a new question, choose the option to create a question. To update an existing one, use **Edit** on that question.
4. Enter the question details, including the question text, question type, group, category, and any profile mapping fields shown in the form.
5. Set fuel applicability. Use **Global** if the question should apply across fuel types, or select the specific fuel types that apply.
6. If the question uses selectable answers, add entries in **Answer Choices**. For each choice, provide the display text and value, then complete any mapping fields that your program uses.
7. If the question type supports nested options, add **Sub Choices** where needed and complete any additional selection or validation settings shown.
8. Click **Create Question** or **Save Changes** to keep your updates.

![Survey Builder workflow overview](../assets/images/948535302-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Build a survey template from the Question Bank

1. Open **Survey** and stay on the **Survey Templates** tab.
2. Create a new template if needed by selecting **Create** and entering the template type and template name.
3. Open the template you want to work on.
4. Select **Import from Question Bank** to open the side panel of available questions.
5. Use the search box to find the question you want. Only published questions are available for import.
6. Click **Add** next to each question you want to include in the template.
7. Close the import panel and review the template list to confirm the questions were added.
8. Save the template changes when you are done.

### Reorder questions and apply template-level text overrides

1. Open a template from **Survey Templates**.
2. Review the current question list in the order it will appear to customers.
3. Drag and drop questions to move them into the correct sequence.
4. To adjust wording for this template only, use the question-level **Edit** action.
5. Update the question text or answer choice text as needed for the pilot or utility use case.
6. Save the change to keep the override in this template only.
7. If you remove a question from the template, confirm the action and then review any branching logic tied to that question, since related rules are removed with it.

### Add branching logic to control survey flow

1. Open the template you want to configure in **Survey Templates**.
2. Locate the question that should act as the parent question in the branch.
3. Start adding a branching rule from that question.
4. Select the **Parent Question** first.
5. Choose the **Trigger Choice** that should cause the survey to jump.
6. Select the **Child Question** that should appear next when that choice is selected.
7. Save the rule and repeat for any additional branches you need.
8. Preview the template flow to confirm the branching behaves as expected and that all linked questions still exist in the template.

### Review and publish survey content

1. Open either **Question Bank** or **Survey Templates**, depending on what you need to publish.
2. Select the item you want to review and check its current status, such as **Draft**, **Modified**, **Ready for Review**, or **Ready to Publish**.
3. Make any final edits allowed for your role.
4. Save your updates before changing status.
5. Move the item to the next review status if your role has permission.
6. When the item reaches **Ready to Publish**, use **Publish** to make it the active published version.
7. If needed, use the available discard or unpublish actions according to your permissions and workflow stage.

## Configuration Options

Survey Builder includes several business-facing configuration areas:

- **Question metadata**: You can define question type, group, category, and functional impact flags such as **SHC**, **Itemization**, and **Recommendations**.
- **Fuel applicability**: Questions can be marked for **Electric**, **Gas**, **Water**, or **Global** use.
- **Profile mapping**: Questions and answer choices can include mapping fields used to update Home Profile and Appliance Profile attributes.
- **Localization**: Where supported for the selected pilot, you can switch locale and maintain translated question and choice text.
- **Template-level overrides**: In templates, you can change question text and choice text without changing the source question in the Question Bank.
- **Workflow permissions**: What you can edit, review, publish, discard, or unpublish depends on your role and the current content status.

If some settings are not available in your environment, configuration is managed by system administrators.

## Related Features

- [Content Management](content-management.md)
- [Project Management](project-management.md)
- [Config Registry](config-registry.md)
- [CX Visual Editor](cx-visual-editor.md)