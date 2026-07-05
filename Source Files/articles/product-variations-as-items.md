---
title: Product variations as items
description: Learn about product variations as items.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 7/4/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce webshop autoplay -->

# Product variations as items

The WooCommerce Connector synchronizes WooCommerce product variations with Business Central as regular items. 

> [!NOTE]
> <b>Note</b>:<br>The product variations as items feature is only available as a separately purchased module. To learn more, go to [Additional paid features](additional-paid-features.md).

When you use the product variations as items feature, the WooCommerce Connector synchronizes WooCommerce variable products and variations with Business Central.

Depending on your configuration, the WooCommerce Connector synchronizes products in one of the following ways:

- Synchronize each webstore product with a Business Central item, and synchronize each product variation with a separate item.
- Synchronize product variations without creating Business Central parent items for WooCommerce variable products.

## To set up product variations as items

The following sections describe how to set up product variations as items.

### Enable the product variations as items feature on the WooCommerce Connector Feature Management page

To use the product variations as items feature, enable the feature on the <b>WooCommerce Connector Feature Management</b> page.

#### To enable the product variations as items feature on the WooCommerce Connector Feature Management page

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector feature management</i>, and then choose the related link.

   The <b>WooCommerce Connector Feature Management</b> page opens.

1. On the <i>Product Variations as Items</i> record, select the <b>Try it out</b> link.

   A dialog box appears that displays the following text:

   <i>Would you like to temporarily enable this feature in this Sandbox environment for free?</i>

1. To proceed, choose <b>Yes</b>.

   The feature is enabled.

### Enable the product variations as items feature on the Woocommerce Connector Setup page

To use the product variations as items feature, enable the feature on the <b>Woocommerce Connector Setup</b> page.

#### To enable the product variations as items feature on the Woocommerce Connector Setup page

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Advanced Features</b> FastTab, turn on <b>Item Variations as Items</b>.

1. (Optional) Turn on <b>Skip Parent Item Creation</b>.

### Skip parent item creation

By default, the WooCommerce Connector creates a parent item in Business Central for each WooCommerce variable product.

If parent products are not required in Business Central, turn on <b>Skip Parent Item Creation</b>. When this option is turned on, the WooCommerce Connector synchronizes product variations without creating Business Central parent items.

This option is useful if your organization manages only purchasable variation items in Business Central.

When <b>Skip Parent Item Creation</b> is turned on:

- WooCommerce variable products are not created as parent items in Business Central.
- Product variations continue to synchronize as individual Business Central items.
- Existing Business Central items can be mapped directly to WooCommerce product variations.

### Configure item variants on the Webstore Item Mapping page

After you have enabled the product variations as items feature, configure the item variants for an item on the <b>Webstore Item Mapping</b> page.

> [!NOTE]
> <b>Note</b>:<br>The item must have a <b>Product Type</b> of <i>Variable</i>.

If <b>Skip Parent Item Creation</b> is turned on, the <b>Webstore Parent ID</b> field is populated automatically during synchronization. If necessary, you can update this value on the <b>Webstore Item Mapping</b> page.

#### To configure item variants on the Webstore Item Mapping page

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, select <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. For each item that you want to configure item variants, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>New</b> > <b>Generate Items as Variants</b>.</p>
     <p>A dialog box appears that indicates webstore item attributes are missing for this item.</p></li>
    <li><p>Choose <b>Set attributes</b>.</p>
     <p>The <b>Webstore Item Attributes</b> page opens.</p></li>
    <li><p>In <b>Attribute</b>, specify a value, for example, <i>Color</i>.</p></li>
    <li><p>In <b>Values</b>, select <i>Assign value(s)</i>.</p>
     <p>The <b>Item Attribute Values</b> page opens.</p></li>
    <li><p>Select one or more values, and then choose <b>OK</b>.</p>
     <p>You are returned to the <b>Webstore Item Attributes</b> page.</p></li>
    <li><p>To close the <b>Webstore Item Attributes</b> page, choose <b>Close</b>.</p>
     <p>You are returned to the <b>Webstore Item Mapping</b> page where you can proceed with generating items as variants.</p></li>
    <li><p>On the action bar, choose <b>New</b> > <b>Generate Items as Variants</b>.</p>
     <p>The <b>Generate Items as Variants</b> page opens. All fields are automatically populated.</p></li>
    <li><p>To proceed with generating items as variants, Choose <b>OK</b>.</p>
     <p>A dialog box appears that displays the following text:</p>
     <p><i>For the Item.No: &lt;item number&gt;, you created &lt;number&gt; new items (variations in webshop)</i></p></li>
    <li><p>To proceed, choose <b>OK</b>.</p>
     <p>You are returned to the <b>Webstore Item Mapping</b> page.</p>
     <p>Based on the item or item variant level, the <b>Webstore Attributes</b> FactBox displays the related attributes and values.</p></li>
   </ol>

1. To perform a synchronization of webstore item mapping, on the action bar, choose <b>Synchronization</b> > <b>Synchronize</b>.

   A dialog box appears that displays the following text:

   <i>Do you want to synchronize all items marked for use in webstore with webstore now?</i>

1. To proceed, choose <b>Yes</b>.

## Synchronize webstore item mapping

To complete the product variations as items feature setup, you must synchronize webstore item mapping. During webstore item mapping synchronization, the WooCommerce Connector synchronizes product variations with Business Central. Depending on your configuration, the connector also synchronizes WooCommerce variable products as Business Central parent items. To learn more, go to [Synchronize webstore item mapping](synchronize-webstore-item-mapping.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/product-variations-as-items/product-variations-as-items.html" title="Product Variations as Items"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Item and item variant stock status](item-variant-stock-status.md)  
[Synchronize item and item variant stock status](synchronize-item-variant-stock-status.md)  
<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items" target="_blank">Register new items</a>

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20product-variations-as-items)
