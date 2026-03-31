# Survey Builder

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=948535302)

## Overview

Survey Builder in DETO helps teams create, manage, and prepare customer-facing surveys without relying on engineering-led updates. It is designed to centralize survey questions, reusable question sets, and survey templates so teams can maintain consistency across utilities and pilots while still allowing project-specific customization.

This area is especially useful for Product Managers, Customer Success teams, and Enterprise Admins who need to define survey content, adjust wording, organize question flow, and support review and publishing workflows. In practice, you use Survey Builder to manage two connected parts of the experience: the **Question Bank**, where approved questions are maintained, and **Survey Templates**, where those questions are assembled into a survey flow for a specific pilot or project.

A key benefit of this feature is separation of concerns. The Question Bank acts as the source library of questions, while templates control how those questions appear in a live survey. This means you can standardize core content centrally, then tailor a pilot’s survey wording, order, and branching behavior without changing the master question set.

## Key Capabilities

- Create and maintain a centralized **Question Bank** for reusable survey questions.
- Search and review existing questions before adding new ones.
- Create new questions with details such as question type, category, profile code, fuel applicability, and answer choices.
- Edit question text and answer choice text, including pilot-specific updates.
- Manage localized survey content by switching between supported languages.
- Build **Survey Templates** from approved questions in the Question Bank.
- Import questions into a template using **Import from Question Bank**.
- Reorder questions in a template to control survey flow.
- Add or remove questions from a template as business needs change.
- Configure branching by linking a parent question, trigger answer, and child question.
- Preview and test survey flow before deployment.
- Move questions and templates through review and publishing statuses such as **Draft**, **Modified**, **Ready for Review**, and **Published**.

## User Guide

### Create and manage questions in the Question Bank

1. Open **Survey** from the CMS area.
2. Select the **Question Bank** tab to view the list of available survey questions.
3. Use search, filters, or the locale selector to find an existing question before creating a new one.
4. Click **Create Question** to open the question form.
5. Enter the question details, including the question text, question type, group, category, profile code, and any applicable fuel settings.
6. If the question uses selectable answers, add entries under **Answer Choices**. For each choice, enter the display text and value. If needed, also complete mapping fields shown in the form.
7. If the question type supports nested options, add **Sub Choices** and complete any required validation details.
8. Click **Create Question** or **Save Changes** to keep your updates.

![Survey Builder overview](../assets/images/948535302-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Edit a question and manage review status

1. In **Survey**, open the **Question Bank** tab.
2. Find the question you want to update and open it in **Edit Question**.
3. If both editable and published versions are available, review the tabs to compare the working version with the published version.
4. Update only the fields you need to change, such as question text, help text, answer choice labels, or localization values.
5. Click **Save Changes** to keep the edited version.
6. Return to the question list and update the item’s review status as needed, based on your role and approval process.
7. When the question is approved, use the available publish action to move it to **Published**.
8. If you no longer want to keep an unsaved edit, discard the pending changes before publishing.

### Build a survey template from the Question Bank

1. Open **Survey** and stay on the **Survey Templates** tab.
2. Create a new template if needed by clicking the option to add a template, then choose the template type and enter a template name.
3. Open the template you want to work on.
4. Click **Import from Question Bank** to open the side panel of available questions.
5. Use the search field to find the question you want. Only published questions are available for import.
6. Click **Add** next to each question you want to include in the template.
7. Close the import panel and review the template structure.
8. Save your template changes when you are done.

### Customize template flow and question wording

1. Open a template from the **Survey Templates** tab.
2. Review the current question list and expand items as needed to inspect the survey structure.
3. Reorder questions by dragging them into the desired sequence.
4. To change wording for this template only, open the question’s **Edit** option and update the question text or answer choice text.
5. To add a child question for a branching path, use the add action from the relevant parent question or answer path.
6. To remove a question, use the delete option for that question. Be aware that removing a question also removes any related branching tied to it.
7. Save the template after making structural or wording changes.
8. Use the template’s review and publish actions when the survey is ready for approval or release.

### Preview and validate survey flow before launch

1. Open the template you plan to deploy.
2. Review the question order from top to bottom to confirm the survey follows the intended customer journey.
3. Check each branching path by confirming the parent question, trigger answer, and child question are connected correctly.
4. Verify any template-level wording overrides so the survey text matches the pilot’s communication needs.
5. Use the available preview or test option to inspect the survey experience before launch.
6. Confirm that all required questions, answer choices, and localized text are complete.
7. Move the template into the appropriate review status.
8. Publish the template only after business review is complete.

## Configuration Options

Survey Builder configuration depends on your role and the level you are working in.

- **Question Bank vs. Template level:** Questions are maintained in the Question Bank, while survey flow is managed in templates.
- **Global vs. pilot customization:** Global content supports standardization, while pilot-level work allows project-specific wording and template changes.
- **Locale selection:** If multiple languages are supported for the selected pilot, you can switch locale while editing question text and answer labels.
- **Fuel applicability:** Questions can be marked as applicable to **Global**, **Electric**, **Gas**, or **Water** contexts.
- **Profile mapping fields:** Some question forms include fields such as **Profile Code**, **State Mapper**, and answer-level mapping fields. These should be completed according to your organization’s survey design standards.
- **Review workflow:** Available actions depend on the item’s current status and your role in the approval process.
- **Edit permissions:** Some records may become read-only depending on their current review state.

If a setting or action is unavailable, configuration is managed by system administrators or restricted by workflow permissions.

## Related Features

- [Project Management](project-management.md)
- [Content Management](content-management.md)
- [CX Visual Editor](cx-visual-editor.md)
- [Config Registry](config-registry.md)