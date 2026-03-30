# Color Management

!!! abstract "Confluence"
    - [Confluence 1](https://bidgely.atlassian.net/wiki/pages/viewpage.action?pageId=1212645380)

## Overview  
The **Color Management** area of the DETO dashboard lets product managers, customer‑success teams, and admins keep brand colors consistent across all digital and paper assets. From a single screen you can create, edit, and version palettes; assign them to projects; see where each color is used; and approve or reject changes. The interface is built for non‑technical users, with clear labels, color swatches, and a contrast‑checker that helps ensure accessibility.

## Key Capabilities  
- **Create a new palette** with a name, description, and a set of HEX colors.  
- **Edit an existing palette** – add, remove, or change colors and save a new version.  
- **Assign a palette to a project** and toggle it as the active palette.  
- **View palette usage** – see which templates, components, and channels use each color.  
- **Approve or reject palette changes** through an approval queue.  
- **Export a palette** to JSON, CSS, or PDF for sharing with designers or developers.  
- **Check contrast** by selecting a background color and seeing how each palette color performs.  
- **Copy color codes** to the clipboard with a single click.  
- **Version history** – roll back to previous palette versions if needed.  

## User Guide  

### Create a New Palette  
1. Open the **Color Palette** page from the **Content Management** menu.  
2. Click the **+ New Palette** button.  
3. In the wizard, enter a **Palette name** and optional **Description**.  
4. Click **Add Color** to open the color picker.  
5. Pick a HEX value or type it in the field, then click **Save**.  
6. Repeat step 4 to add more colors.  
7. When finished, click **Publish** to create the palette.  
8. The new palette appears in the list and can now be assigned to projects.  

### Edit an Existing Palette  
1. From the **Color Palette** list, click the **Edit** icon next to the palette you want to change.  
2. The **Palette Editor** opens.  
3. To change a color, click its swatch, pick a new HEX value, and click **Save**.  
4. To add a new color, click **Add Color** and follow the same steps as in the creation wizard.  
5. To remove a color, click the **Delete** icon next to it.  
6. When all edits are complete, click **Save** to create a new version.  
7. The palette’s version history updates automatically.  

### Assign Palette to a Project  
1. In the **Color Palette** page, locate the palette you want to use.  
2. Click the **Assign** button.  
3. A dialog lists all projects. Select the desired project.  
4. Toggle the **Active** switch to enable the palette for that project.  
5. Click **Confirm**.  
6. The palette is now applied to the project’s digital and/or paper assets.  

### View Palette Usage  
1. On the **Color Palette** page, click the **Usage** icon for a palette.  
2. The **Palette Usage Dashboard** opens.  
3. Select a channel (Digital or Paper) from the toggle at the top.  
4. A list of templates and components that use each color appears.  
5. Click a template name to drill down into its details.  

### Approve Palette Changes  
1. Open the **Approval Queue** from the **Color Palette** page.  
2. Each pending change shows the submitter, date, and a brief summary.  
3. Click **Review** to see the proposed palette.  
4. If satisfied, click **Approve**; otherwise click **Reject** and add optional comments.  
5. The submitter receives a notification.  

### Export Palette  
1. In the **Palette Editor**, click the **Export** button.  
2. Choose a format: **JSON**, **CSS**, or **PDF**.  
3. Click **Download**.  
4. The file is saved to your computer and can be shared externally.  

### Edit Color Details via Sidebar  
1. While editing a palette, the **Edit Color Sidebar** appears on the right.  
2. Enter a new **HEX** value in the text field or click the color swatch to open the picker.  
3. Use the **Variant** dropdown to select locale or scenario.  
4. The sidebar lists all templates and components that use the color.  
5. Click a component to view its usage details.  
6. Click **Save** to apply changes to the palette.  

## Configuration Options  
- **Approval Settings** – Admins can enable or disable the approval workflow.  
- **Version Retention** – System keeps all past versions; admins can configure how many days to retain them.  
- **Export Permissions** – Only users with the **Export** role can download palettes.  
- **Contrast Checker** – Admins can set default background colors for the contrast checker.  

## Related Features  
- [Content Management](content-management.md)  
- [Recommendations](recommendations.md)  
- [CX Visual Editor](cx-visual-editor.md)  
- [Workflow Engine](workflow-engine.md)  

---