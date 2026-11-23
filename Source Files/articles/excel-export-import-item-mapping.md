---
title: Excel export and import for item mapping
description: Learn how to export item mapping to Excel, edit the workbook, and import the changes into Business Central.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 11/22/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore markdownlint webstore woocommerce autoplay unmaps -->

# Excel export and import for item mapping

The WooCommerce Connector can export the items on the <b>Webstore Item Mapping</b> page to an Excel workbook and import the workbook back into Business Central. Use the Excel export and import feature to update many items at once, map many items to WooCommerce products, or move item mapping from one webstore to another.

When you import a workbook, the WooCommerce Connector shows a preview of every change and every problem before it writes anything. You review the preview, clear the rows that you do not want to import, and then import the rest.

## Export items to Excel

When you export items, the WooCommerce Connector creates a workbook that contains one row for each item and one column for each field that you select. You can filter the items to export and choose the columns to include.

### To export items to Excel

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then select the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, select <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. On the action bar, select <b>Excel</b> > <b>Export to Excel</b>.

   The <b>Export Items to Excel</b> page opens.

1. In <b>Webstore Code</b>, select the webstore whose item mapping you want to export.

   The webstore columns in the workbook, such as <b>Webstore ID</b>, belong to this webstore.

1. (Optional) To change the fields that the WooCommerce Connector writes to the workbook, in <b>Columns</b>, select the assist edit button, and then select the columns to export.

   To learn how to select columns, see the following section.

1. (Optional) In the <b>Filters</b> section, specify which items to export:
   <ol type="a">
    <li><p>In <b>Item No. Filter</b>, specify the item numbers to export. For example, enter <i>WB*</i> to export items with numbers that begin with <i>WB</i>.</p></li>
    <li><p>In <b>Item Category Filter</b>, specify the item categories to export.</p></li>
    <li><p>Turn on <b>Mapped Items Only</b> to export only mapped items. When <b>Mapped Items Only</b> is turned off, the export includes all items that match the other filters.</p></li>
    <li><p>Turn on <b>Exclude Blocked Items</b> to leave blocked items out of the export. When <b>Exclude Blocked Items</b> is turned off, the export includes blocked items that match the other filters.</p></li>
   </ol>

1. Select <b>OK</b>.

   The WooCommerce Connector exports the items to an Excel workbook.

## Select the columns to export

The <b>Columns</b> field on the <b>Export Items to Excel</b> page summarizes the fields that the workbook includes. The <b>Select Columns</b> page opens on a short list of the fields that most exports need. By default, the following fields are selected: <b>No.</b>, <b>Description</b>, <b>Manage Stock on Webstore</b>, <b>Webstore ID</b>, and <b>Use in Webstore</b>.

The <b>Select Columns</b> page includes the following columns:

- <b>Include</b>: Specifies whether the field is written to the workbook.
- <b>Field Caption</b>: The name of the field.
- <b>Source</b>: Where the field comes from, such as <i>Item</i> or <i>Item Webstore Connector</i>.
- <b>Export Only</b>: Indicates that the field is written to the workbook but ignored when you import the workbook.

Key fields are always included in the workbook.

### To select the columns to export

1. On the <b>Export Items to Excel</b> page, in <b>Columns</b>, select the assist edit button.

   The <b>Select Columns</b> page opens.

1. To see every field that you can export, on the action bar, select <b>Show All Fields</b>.

1. For each field that you want to include, select the <b>Include</b> checkbox.

1. (Optional) To select or clear all fields at once, on the action bar, select <b>Select All</b> or <b>Deselect All</b>.

1. (Optional) To return to the default selection of fields, on the action bar, select <b>Restore Defaults</b>.

1. Select <b>Close</b>.

## What the workbook contains

The workbook contains the following sheets:

- <b>Item</b>: One row for each exported item, with a header row that contains the field captions. Fields that are checkboxes in Business Central appear as <i>Yes</i> or <i>No</i>. The <b>Use in Webstore</b> column corresponds to the <b>Webstore Item</b> checkbox on the <b>Webstore Item Mapping</b> page.
- <b>Instructions</b>: A summary of how to import the workbook. The import reads the <b>Item</b> sheet and ignores the <b>Instructions</b> sheet.

## Edit the workbook

Use the following rules when you edit the workbook:

- A blank cell clears the value of the field. To keep the current values of a field, delete its column from the workbook instead of emptying the cells.
- A row with a blank <b>No.</b> creates a new item. A row with a <b>No.</b> that does not exist yet creates a new item with that number.
- A blank or <i>0</i> value in <b>Webstore ID</b> means that the item is not mapped to a webstore product. When you clear <b>Webstore ID</b>, the import unmaps the item from its product. If <b>Webstore ID</b> contains an ID that does not match a product in the webstore, the preview shows an error for the row.
- Columns marked as <b>Export Only</b> on the <b>Select Columns</b> page are ignored when you import the workbook.
- Import the workbook in the language that it was exported in. The column headers are field names in that language.

## Import from Excel

When you import a workbook, the WooCommerce Connector first opens a preview that lists every row and every problem that it found. Nothing is written to Business Central until you select <b>Import</b> in the preview.

### To import items from Excel

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then select the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, select <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. On the action bar, select <b>Excel</b> > <b>Import from Excel</b>, and then select the workbook that you want to import.

   The <b>Excel Import Preview</b> page opens.

1. Review the preview. To learn how to read the preview, see the following section.

1. Clear the checkbox for each row that you do not want to import.

1. On the action bar, select <b>Import</b>.

   The WooCommerce Connector writes the selected rows to Business Central, and a message shows how many items were created and updated.

## Review the import preview

The top of the <b>Excel Import Preview</b> page shows the following counts: <b>Rows to Create</b>, <b>Rows to Update</b>, <b>Unchanged Rows</b>, <b>Rows with Errors</b>, <b>Selected Rows</b>, and <b>Unknown Columns</b>. Select a count to filter the list to those rows. The <b>Showing</b> field shows which rows are listed. By default, the list shows rows that have changes and rows that have errors. To change which rows are listed, on the <b>View</b> tab, select <b>Show Changes and Errors</b> or <b>Show All Rows</b>.

For each row, the list shows the following information:

- <b>Worksheet Row</b>: The row number in the workbook.
- <b>No.</b> and <b>Description</b>: The item that the row belongs to.
- <b>Action</b>: Whether the import creates the item (<i>Create</i>), updates the item (<i>Update</i>), or cannot import the row (<i>Error</i>).
- <b>Changes</b>: The number of fields that the import changes.
- <b>Warning</b>: A warning about the row. A row with a warning can still be imported.

A row with an error cannot be selected. For example, if a numeric column contains text, the row shows an error such as <i>thirty-nine is not a valid Decimal.</i> If <b>Webstore ID</b> contains an ID that does not exist in the webstore, the row shows an error such as <i>Webstore MAIN has no product with ID 5000. Correct the Webstore ID in the workbook.</i> The <b>Row Values</b> FactBox shows the new values of the selected row and marks the value that causes the error in red.

To compare the current value and the new value of every field in a row, select the row, and then on the <b>View</b> tab, select <b>Show Changes</b>. The <b>Excel Import Values</b> page opens and lists each field with its current value and new value. The new value of a field that changes appears in bold, and the <b>Changed</b> checkbox is selected for that field. If a value causes an error, the <b>Error Message</b> column shows the reason.

To check the rows again, on the <b>Home</b> tab, select <b>Validate Again</b>. To select or clear all rows at once, select <b>Select All</b> or <b>Deselect All</b>.

## Import results

The WooCommerce Connector writes each selected row separately. If one row cannot be written, the other rows are still imported.

When all selected rows are imported, a message shows how many items were created and updated. For example: <i>The import is finished: 1 created and 2 updated.</i>

When a row fails while it is written, the message includes the number of rows that were not imported because of an error, and the <b>Excel Import Preview</b> page shows the results. The page shows the number of created records, updated records, failed rows, and skipped rows. <b>Skipped Rows</b> includes rows that have no changes and rows that you cleared in the preview. The <b>Result</b> column shows the result of each row, such as <i>Updated</i>, <i>Failed</i>, or <i>Skipped</i>. The <b>Error Message</b> column shows the reason that a row failed, including the field and the workbook cell. For example: <i>Base Unit of Measure (C18): You cannot change Base Unit of Measure because there are one or more open ledger entries for this item.</i>

Rows that were not imported stay in the list with the reason. To correct the problem, edit the workbook, and then import it again.

## Use Excel export and import with product variations as items

When <b>Item Variations as Items</b> is turned on, the <b>Select Columns</b> page includes the <b>Webstore Parent ID</b> field. By default, <b>Webstore Parent ID</b> is not included in the workbook. To include it, on the <b>Select Columns</b> page, select the <b>Include</b> checkbox for <b>Webstore Parent ID</b>.

If <b>Skip Parent Item Creation</b> is turned on, the WooCommerce Connector populates <b>Webstore Parent ID</b> automatically during synchronization. If you change <b>Webstore Parent ID</b> in the workbook, the import checks that the item's <b>Webstore ID</b> is a variation of the parent product. If it is not, the preview shows an error for the row, such as <i>Webstore ID (E7): Webstore ID 1035 is not a variation of webstore product 123.</i>

## Import item mapping into a different webstore

The webstore columns in a workbook, such as <b>Webstore ID</b>, belong to the webstore that you selected when you exported the workbook. To import them into a different webstore, for example to move item mapping from a sandbox into production, in the <b>Excel Import Preview</b> page, in <b>Webstore Code</b>, select the webstore that you want to import into. The WooCommerce Connector checks every row again for the selected webstore.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-mapping-export-import-excel/item-mapping-export-import-excel.html" title="Excel export and import for item mapping"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Item mapping](item-mapping.md)  
[Items](items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20excel-export-import-item-mapping)
