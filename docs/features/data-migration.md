# Data Migration

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1208811597)
    - [Confluence 2](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1224310787)

## Overview  
The Data Migration feature in DETO lets utilities bring recommendation data from legacy CSV or Excel files into the Bidgely Quill CMS. It consolidates titles, images, rules, and score thresholds so that the recommendation engine, dashboards, and customer‑facing content all use a single, centrally managed source. The feature is designed for Product Managers, Customer Success teams, and Enterprise Admins who need to refresh or replace content without writing code.

When the migration wizard becomes available in the DETO UI, you can upload your files, start the migration, and watch the progress—all from the same dashboard. Until then, admins can run the migration through the API, but the user experience is the same: upload, review, run, and monitor.

## Key Capabilities  
- **Upload migration files** – Add the five required CSV/Excel files.  
- **Validate file structure** – The wizard checks that each file is present and correctly formatted.  
- **Review migration summary** – See how many recommendations, rules, and images will be created or updated.  
- **Start migration** – Trigger the import process with a single click.  
- **Monitor progress** – View a real‑time status bar and detailed step logs.  
- **View results** – After completion, see totals for created, updated, and failed items.  
- **Handle errors** – Receive clear error messages and suggested fixes.  
- **Re‑run migration** – If needed, you can re‑execute the job after correcting issues.  
- **Permission control** – Only users with DELIVERY or FULL_ACCESS rights can run migrations.  

## User Guide  

### Upload Migration Files  
1. Open the **Data Migration** page from the DETO dashboard.  
2. Click **Upload Files**.  
3. In the file picker, select the five required files:  
   - `row_id_desc.csv` – Recommendation definitions  
   - `rule_matrix.csv` – Profile inclusion rules  
   - `bound_matrix.csv` – Bounds and constraints  
   - `metadata.xlsx` – Recommendation metadata (titles, descriptions, images)  
   - `defaultProfileInfo.csv` – Default profile settings  
4. After selecting all files, click **Validate**.  
5. The system will display a confirmation that the files were received and are ready for migration.  

### Run and Monitor Migration  
1. On the same page, review the **Migration Summary** that lists the number of recommendations, rules, and images that will be processed.  
2. Click **Start Migration**.  
3. A progress bar appears with the label **Running Migration**.  
4. As the migration proceeds, the bar updates and a log panel shows each step (e.g., *Parsing files*, *Transforming data*, *Importing to CMS*).  
5. When the migration finishes, the status changes to **Completed** and a summary panel shows:  
   - Total recommendations processed  
   - Created, updated, and failed counts  
   - Any error messages that need attention  
6. If errors occurred, click **View Details** to see which items failed and why.  
7. Resolve the issues in your source files and repeat the **Start Migration** step if necessary.  

![Migration Progress](../assets/images/1208811597-image-20251128-205017.png)  

## Configuration Options  
- **User Permissions** – Only users with DELIVERY or FULL_ACCESS rights can access the Data Migration page and run jobs.  
- **File Size Limits** – Each file must be 10 MB or smaller. Larger files should be split or compressed before upload.  
- **Account Type** – The migration wizard automatically detects whether the utility is RESIDENTIAL or SMB; no manual setting is required.  
- **Error Handling** – The system logs all errors and provides actionable guidance in the results panel.  

If you need to adjust permissions or file size limits, contact your system administrator.

## Related Features  
- [Recommendations](recommendations.md) – View and edit the recommendations that are populated by the migration.  
- [Survey Builder](survey-builder.md) – Create surveys that can reference migrated recommendation data.  
- [Content Management](content-management.md) – Manage the CMS content that the migration imports.  
- [Workflow Engine](workflow-engine.md) – Automate post‑migration tasks such as publishing or archiving.