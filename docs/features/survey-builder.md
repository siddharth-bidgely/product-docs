# Survey Builder

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=948535302)

## Overview

Survey Builder in DETO gives your team a centralized place to create, organize, review, and publish customer-facing surveys for a project or pilot. It is designed to replace scattered survey setup with a governed, self-serve workflow so business and delivery teams can manage survey content without relying on engineering for routine updates.

In this area, you work across two connected parts: **Survey Templates** and the **Question Bank**. The Question Bank stores reusable survey questions and answer choices, while Survey Templates let you assemble those questions into a customer-ready flow, reorder them, override wording for a specific template, and define branching behavior. This is especially useful for Home Profile Survey setup, while also supporting future survey types.

The feature is valuable for Product Managers, Customer Success teams, Delivery teams, and Enterprise Admins who need consistency across utilities, better control over review and publishing, and a clear source of truth for survey wording, logic, and profile-related mappings.

## Key Capabilities

- Create and manage reusable survey questions in a centralized **Question Bank**
- Build project-specific **Survey Templates** from approved questions
- Search and import questions into a template using **Import from Question Bank**
- Edit question text and answer choice text for a template without changing the master question
- Add answer choices and, for supported question types, add nested sub-choices
- Reorder questions in a template to control survey flow
- Configure branching by linking a parent question, trigger choice, and child question
- Work with localized survey content by switching between supported locales
- Track content through review states such as draft, review-ready, and published
- Save in-progress changes and discard unsaved edits when needed
- Publish approved questions and templates for use in the project
- Maintain pilot-level customization while preserving a governed master structure

## User Guide

### Create or edit questions in the Question Bank

1. Open **Survey** from the CMS area of DETO.
2. Select the **Question Bank** tab to view the list of available questions for the current project or pilot.
3. To add a new question, choose the option to create a question. To update an existing one, open that question for editing.
4. Enter the question details, including the question text, question type, category, profile area, and any applicable fuel type or impact flags.
5. If the question uses answer choices, add each option under **Answer Choices**. For each choice, fill in the display text and value. If your survey design requires deeper selection, add **Sub Choices** where supported.
6. If your project supports multiple locales, switch the locale and enter translated question text and answer choice text as needed.
7. Review the status of the question and make updates according to your team’s review workflow. Some questions may be editable only in draft or modified states.
8. Select **Create Question** or **Save Changes** to keep your updates.

![Survey management overview](../assets/images/948535302-Mermaid-20Chart-20-20Create-20complex-20visual-20diagrams-20with-20text.-2025-10.png)

### Create a new survey template

1. Open **Survey** and stay on the **Survey Templates** tab.
2. Choose the option to create a new template.
3. In the dialog, select the **Template Type**.
4. Enter a clear template name in the template name field.
5. Select **Create** to add the new template.
6. After creation, open the template to begin adding questions and configuring the survey flow.

### Build a template by importing questions from the Question Bank

1. Open the template you want to work on from **Survey Templates**.
2. Select **Import from Question Bank**.
3. In the side panel, use the search field to find the question you want. Only published questions are available for import.
4. Review the question titles in the list and select **Add** next to each question you want in the template.
5. Close the side panel when you are finished importing.
6. Review the template question list and confirm the imported questions appear in the expected order.
7. Save the template changes if prompted.

### Customize template flow, wording, and branching

1. Open a template from **Survey Templates**.
2. To change the order of questions, drag and drop questions into the desired sequence.
3. To adjust wording for this template only, use **Edit** on a question and update the displayed question text or answer choice text. This does not change the master version in the Question Bank.
4. To create branching, start from the parent question and choose the trigger answer choice that should control the next step.
5. Select the child question that should appear when that trigger choice is selected.
6. Repeat the process for additional branching rules as needed.
7. If a question is no longer needed, remove it from the template. Be aware that removing a question also removes related branching rules tied to that question.
8. Preview the survey flow to confirm the customer experience and branching behavior before moving it forward in the review process.

### Review, save, discard, and publish survey content

1. In either **Question Bank** or **Survey Templates**, make your edits in the current working version.
2. Save your changes so they move from unsaved edits into the managed review workflow.
3. Update the content status according to your role and process, such as moving from draft to review-ready.
4. If you need to compare working content with the live version, open the item and review the available draft, modified, or published view.
5. If you decide not to keep your latest edits, use the discard option for unsaved changes or drafts where allowed.
6. Once the content has passed review and your role has permission, select **Publish**.
7. Confirm that the item now shows the published state before using it in active survey delivery.

## Configuration Options

Survey Builder configuration is partly managed in the feature and partly governed by administrator setup.

Users typically see or manage these options in the app:
- **Template Type** when creating a new survey template
- **Locale** selection for translated question and choice text
- Question attributes such as **Question Type**, **Category**, **Profile Code**, **State Mapper**, and fuel applicability
- Impact flags for areas such as **SHC**, **Itemization**, and **Recommendations**
- Review and publishing status, based on role permissions
- Template-level text overrides for question and choice wording

Some profile mapping standards, global attributes, and approval permissions are controlled centrally. If an option is unavailable or read-only, configuration is managed by system administrators or by your organization’s assigned workflow roles.

## Related Features

- [Content Management](content-management.md)
- [Project Management](project-management.md)
- [Recommendations](recommendations.md)
- [Config Registry](config-registry.md)