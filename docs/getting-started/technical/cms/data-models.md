# CMS Data Models

Complete data model reference for all content types in the CMS service.

## Appliance

**Appliance** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| applianceId | integer | Yes | unique |
| name | string | Yes | unique |
| categoryId | string | Yes | --- |
| subCategoryId | string | Yes | --- |
| fuelType | customField (multi-select.multi-select) | No | default: `[]`; ELECTRIC, GAS, WATER |

## Appliance Category

**Appliance Category** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| categoryId | string | Yes | unique |
| shortCode | string | Yes | unique |
| name | string | No | --- |
| trueDisagg | boolean | No | default: `true` |
| applianceCountFilter | boolean | No | default: `false` |
| subCategory | json | No | --- |
| applianceCount | json | No | --- |
| applianceId | integer | No | --- |

## Color Category

**Color Category** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| categoryName | string | Yes | unique |
| name | string | Yes | --- |
| description | text | No | --- |
| sortOrder | integer | No | default: `0` |
| color_shade_mappings | relation (oneToMany -> color-shade-mapping.color-shade-mapping) | No | --- |

## Color Shade Mapping

**Color Shade Mapping** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| color_category | relation (manyToOne -> color-category.color-category) | No | --- |
| shade | string | Yes | --- |
| channel | enumeration | Yes | DIGITAL, PAPER |
| sections | json | No | --- |
| colorMappings | json | No | --- |
| sortOrder | integer | No | default: `0` |

## Config

**Config** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| key | string | Yes | --- |
| configType | string | Yes | --- |
| label | string | No | --- |
| description | string | No | --- |
| systemNodes | relation (manyToMany -> system-node.system-node) | No | --- |

## Config Registry Classification Schema

**Config Registry Classification Schema** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| code | string | Yes | unique; maxLength: 100 |
| displayName | string | Yes | maxLength: 255 |
| description | text | No | --- |
| parentType | relation (manyToOne -> config-registry-lookup-type.config-registry-lookup-type) | No | --- |
| allowMultiSelect | boolean | No | default: `false` |
| isRequired | boolean | No | default: `false` |

## Config Registry Classification Values

**Config Registry Classification Values** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| code | string | Yes | maxLength: 255 |
| displayName | string | Yes | maxLength: 255 |
| lookupType | relation (manyToOne -> config-registry-lookup-type.config-registry-lookup-type) | No | --- |
| parentLookup | relation (manyToOne -> config-registry-lookup.config-registry-lookup) | No | --- |
| description | text | No | --- |
| configs | relation (manyToMany -> config-registry-config.config-registry-config) | No | --- |

## Config Registry Configs

**Config Registry Configs** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| configKey | string | Yes | maxLength: 255 |
| configType | string | Yes | maxLength: 255 |
| verificationStatus | enumeration | Yes | default: `TODO`; TODO, READY_FOR_QA, APPROVED, REJECTED |
| deprecated | boolean | No | default: `false` |
| displayName | string | Yes | maxLength: 255 |
| configDocumentation | text | Yes | --- |
| configDataType | enumeration | Yes | default: `TEXT`; TEXT, INTEGER, FLOAT, BOOLEAN, JSON, DATETIME, ... |
| defaultValue | text | No | --- |
| possibleValues | json | No | --- |
| validationRule | json | No | --- |
| version | integer | Yes | default: `1` |
| lookups | relation (manyToMany -> config-registry-lookup.config-registry-lookup) | No | --- |
| parentConfig | relation (manyToOne -> config-registry-config.config-registry-config) | No | --- |
| childConfigs | relation (oneToMany -> config-registry-config.config-registry-config) | No | --- |
| relatedConfigs | relation (manyToMany -> config-registry-config.config-registry-config) | No | --- |
| duplicateConfigs | relation (manyToMany -> config-registry-config.config-registry-config) | No | --- |
| dependsUpon | relation (manyToMany -> config-registry-config.config-registry-config) | No | --- |
| createdByUser | relation (manyToOne -> plugin::users-permissions.user) | No | --- |
| isMandatoryField | boolean | No | default: `false` |
| utilityConfigurationRequired | boolean | No | default: `false` |
| specialHandlingRequired | boolean | No | default: `false` |

## Config Registry Templates

**Config Registry Templates** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| name | string | Yes | unique; maxLength: 255 |
| description | text | No | --- |
| module | string | No | maxLength: 100 |
| items | component (config-registry-component.template-item, repeatable) | No | --- |

## Data Scenario Payload

**Data Scenario Payload** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| templateTypeName | string | Yes | --- |
| payload | json | No | --- |
| dataScenarioDocumentId | relation (manyToOne -> data-scenario.data-scenario) | No | --- |

## Data Scenarios

**Data Scenarios** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| scenarioId | string | Yes | --- |
| scenarioDisplayName | string | Yes | --- |
| utility | relation (manyToOne -> utility.utility) | No | --- |
| productType | enumeration | No | Email, Web, HER, SMS |
| scenarioLocale | string | No | --- |
| fuelType | enumeration | No | ELECTRIC, GAS, WATER |
| templateName | string | No | --- |
| elementNames | json | No | --- |
| defaultScenario | boolean | No | --- |
| userClusters | json | No | --- |
| scenarioDocumentation | text | No | --- |
| data_scenario_payloads | relation (oneToMany -> data-scenario-payload.data-scenario-payload) | No | --- |

## Feature Workflow

**Feature Workflow** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| tagId | string | No | --- |
| label | string | No | --- |
| systemNodeEdges | relation (oneToMany -> system-node-edge.system-node-edge) | No | --- |
| systemNodePositions | relation (oneToMany -> system-node-position.system-node-position) | No | --- |

## Global

**Global** (`singleType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| siteName | string | Yes | --- |
| favicon | media (images, files, videos) | No | --- |
| siteDescription | text | Yes | --- |
| defaultSeo | component (shared.seo) | No | --- |

## Home Profile Attribute

**Home Profile Attribute** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| attributeId | string | Yes | unique |
| label | string | Yes | --- |
| accountType | customField (multi-select.multi-select) | Yes | default: `[]`; RESIDENTIAL, SMB |
| values | json | Yes | --- |

## Job Manifest

**Job Manifest** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| jobId | string | Yes | unique |
| pilotId | string | Yes | --- |
| jobType | string | Yes | --- |
| jobStatus | enumeration | No | default: `PENDING`; PENDING, RUNNING, FAILED, COMPLETED |
| progress | integer | No | default: `0` |
| jobs | json | Yes | --- |
| error | json | No | --- |
| result | json | No | --- |

## Recommendation

**Recommendation** (`collectionType`, draft & publish: yes)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| title | string | Yes | maxLength: 70 |
| description | text | Yes | --- |
| ctaButtonText | string | No | maxLength: 30 |
| ctaButtonLink | string | No | --- |
| icon | media (images, files) | No | --- |
| shortenedImage | media (images, files) | No | --- |
| fullImage | media (images, files) | No | --- |
| detail | text | No | --- |
| elongatedImage | media (images, files) | No | --- |
| utility | relation (oneToOne -> utility.utility) | No | --- |
| recommendationId | string | Yes | --- |
| fuelType | customField (multi-select.multi-select) | Yes | default: `[]`; ELECTRIC, WATER, GAS |
| featuredContent | boolean | Yes | default: `false` |
| program | boolean | Yes | default: `false` |
| channelPaper | boolean | Yes | default: `true` |
| channelEmail | boolean | Yes | default: `true` |
| disabled | boolean | No | default: `false` |
| defaultReco | boolean | No | default: `false` |
| channelWeb | boolean | Yes | default: `true` |
| videoLink | string | No | --- |
| score | json | No | --- |
| applianceProfileExclusion | json | No | --- |
| homeProfileExclusion | json | No | --- |
| ratePlanExclusion | json | No | --- |
| ppExclusion | json | No | --- |
| monthExclusion | json | No | --- |
| insightAssociation | json | No | --- |
| category | string | Yes | --- |
| verificationStatus | enumeration | No | default: `TODO`; TODO, READY_FOR_QA, QA_IN_PROGRESS, QA_FAILED, READY_TO_PUBLISH |
| editStatus | enumeration | No | default: `DRAFT`; DRAFT, MODIFIED, PUBLISHED |
| actionSavingsPotential | decimal | No | --- |
| frequency | enumeration | No | one_time, repeat |
| herImage | media (images, files) | No | --- |
| userType | string | No | --- |
| actionType | string | No | --- |
| objective | string | No | --- |

## Survey Category

**Survey Category** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| categoryId | string | Yes | --- |
| label | string | Yes | --- |
| order | integer | Yes | default: `1` |

## Survey Question

**Survey Question** (`collectionType`, draft & publish: yes)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| title | string | Yes | maxLength: 100 |
| type | enumeration | Yes | default: `SINGLE`; SINGLE, MULTIPLE, MULTIPLE_WITH_SUB_CHOICES, TEXT, NUMBER, IMAGE_UPLOAD, ... |
| img | media (images, files, videos, audios) | No | --- |
| group | enumeration | Yes | default: `DETAILED`; ESSENTIAL, DETAILED |
| fuelTypes | customField (multi-select.multi-select) | Yes | default: `[]`; GLOBAL, ELECTRIC, WATER, GAS |
| maxLevel | integer | Yes | default: `1` |
| questionTemplate | enumeration | Yes | default: `DEFAULT`; DEFAULT, DROP_DOWN, SUB_CHOICE_DROP_DOWN |
| profileCode | enumeration | Yes | default: `METADATA`; AP, HP, METADATA |
| category | string | No | --- |
| info | text | No | --- |
| stateMapper | string | No | --- |
| impactShc | boolean | No | default: `false` |
| impactItemization | boolean | No | default: `false` |
| impactReco | boolean | No | default: `false` |
| utility | relation (oneToOne -> utility.utility) | No | --- |
| choices | component (survey.survey-choice, repeatable) | No | --- |
| editStatus | enumeration | Yes | default: `DRAFT`; DRAFT, MODIFIED, PUBLISHED |
| verificationStatus | enumeration | Yes | default: `TODO`; TODO, READY_FOR_QA, READY_TO_PUBLISH |

## Survey Template

**Survey Template** (`collectionType`, draft & publish: yes)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| templateType | enumeration | Yes | default: `defaultSurvey`; defaultSurvey, BillAnalyzer |
| label | string | Yes | --- |
| templateQuestions | component (survey.survey-template-question, repeatable) | Yes | --- |
| utility | relation (manyToOne -> utility.utility) | No | --- |
| verificationStatus | enumeration | No | default: `TODO`; TODO, READY_FOR_QA, QA_IN_PROGRESS, QA_FAILED, READY_TO_PUBLISH |
| editStatus | enumeration | No | default: `DRAFT`; DRAFT, MODIFIED, PUBLISHED |

## System Node

**System Node** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| type | enumeration | No | storage, api, daemon, pipeline, module, product |
| label | string | No | --- |
| description | string | No | --- |
| specifications | richtext | No | --- |
| configs | relation (manyToMany -> config.config) | No | --- |
| systemNodePositions | relation (oneToMany -> system-node-position.system-node-position) | No | --- |

## System Node Edge

**System Node Edge** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| source | string | No | --- |
| target | string | No | --- |
| label | string | No | --- |
| type | string | No | --- |
| sourceHandle | string | No | --- |
| targetHandle | string | No | --- |
| featureWorkflow | relation (manyToOne -> feature-workflow.feature-workflow) | No | --- |

## System Node Position

**System Node Position** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| featureWorkflow | relation (manyToOne -> feature-workflow.feature-workflow) | No | --- |
| systemNode | relation (manyToOne -> system-node.system-node) | No | --- |
| positionX | integer | No | --- |
| positionY | integer | No | --- |

## Utility

**Utility** (`collectionType`, draft & publish: yes)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| pilotId | uid | Yes | --- |
| name | string | Yes | --- |
| logoWeb | media (images, files) | No | --- |
| users | relation (manyToMany -> plugin::users-permissions.user) | No | --- |
| homeProfile | relation (oneToOne -> utility-home-profile.utility-home-profile) | No | --- |
| applianceProfile | relation (oneToOne -> utility-appliance-profile.utility-appliance-profile) | No | --- |
| recoScore | relation (oneToOne -> utility-reco-score.utility-reco-score) | No | --- |
| accountType | enumeration | Yes | RESIDENTIAL, SMB, C&I |
| supportedLocales | json | Yes | --- |
| defaultLocale | string | Yes | default: `en-US` |
| surveyTemplates | relation (oneToMany -> survey-template.survey-template) | No | --- |

## Utility Appliance Profile

**Utility Appliance Profile** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| utility | relation (oneToOne -> utility.utility) | No | --- |
| defaultValue | json | No | --- |
| disabled | json | No | --- |
| applianceCategoryOverrides | json | No | --- |

## Utility Home Profile

**Utility Home Profile** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| utility | relation (oneToOne -> utility.utility) | No | --- |
| defaultValue | json | No | --- |
| disabled | json | No | --- |

## Utility Reco Score

**Utility Reco Score** (`collectionType`, draft & publish: no)

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| utility | relation (oneToOne -> utility.utility) | No | --- |
| thresholds | json | No | --- |
