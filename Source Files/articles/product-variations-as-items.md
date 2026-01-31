---
title: Product variations as items
description: Learn about product variations as items.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/23/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce webshop autoplay -->

# Product variations as items

The WooCommerce Connector provides the capability to synchronize your product variations from your webstore to Business Central as regular items. 

> [!NOTE]
> <b>Note</b>:<br>The product variations as items feature is only available as a separately purchased module. To learn more, go to [Additional paid features](additional-paid-features.md).

When you use the product variations as items feature, the WooCommerce Connector completes the following tasks:

- Each of your webstore product records is synchronized with a Business Central regular item.
- Each of your webstore product variations is synchronized with a separate regular item.

## To set up product variations as items

The following sections describe how to set up product variations as items.

### Enable the product variations as items feature on the WooCommerce Connector Feature Management page

To use the product variations as items feature, you must enable the feature on the <b>WooCommerce Connector Feature Management</b> page.

#### To enable the product variations as items feature on the WooCommerce Connector Feature Management page

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector feature management</i>, and then choose the related link.

   The <b>WooCommerce Connector Feature Management</b> page opens.

1. On the <i>Product Variations as Items</i> record, select the <b>Try it out</b> link.

   A dialog box appears that displays the following text:

   <i>Would you like to temporarily enable this feature in this Sandbox environment for free?</i>

1. To proceed, choose <b>Yes</b>.

   The feature is enabled.

### Enable the product variations as items feature on the Woocommerce Connector Setup page

To use the product variations as items feature, you must enable the feature on the <b>Woocommerce Connector Setup</b> page.

#### To enable the product variations as items feature on the Woocommerce Connector Setup page

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Advanced Features</b> FastTab, turn on <b>Item Variations as Items</b>.

### Configure item variants on the Webstore Item Mapping page

After you have enabled the product variations as items feature, you must configure the item variants for an item on the <b>Webstore Item Mapping</b> page.

> [!NOTE]
> <b>Note</b>:<br>The item must have a <b>Product Type</b> of <i>Variable</i>.

#### To configure item variants on the Webstore Item Mapping page

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>webstore item mapping</i>, and then choose the related link.

   The <b>Webstore Item Mapping</b> page opens.

1. For each item that you want to configure item variants, perform the following steps:
   <ol type="a">
    <li>On the action bar, choose <b>New</b> > <b>Generate Items as Variants</b>.<br>
     <p>A dialog box appears that indicates webstore item attributes are missing for this item.</p></li>
    <li>Choose <b>Set attributes</b>.<br>
     <p>The <b>Webstore Item Attributes</b> page opens.</p></li>
    <li>In <b>Attribute</b>, specify a value, for example, <i>Color</i>.</li>
    <li>In <b>Values</b>, select <i>Assign value(s)</i>.<br>
     <p>The <b>Item Attribute Values</b> page opens.</p></li>
    <li>Select one or more values, and then choose <b>OK</b>.<br>
     <p>You are returned to the <b>Webstore Item Attributes</b> page.</p></li>
    <li>To close the <b>Webstore Item Attributes</b> page, choose <b>Close</b>.<br>
     <p>You are returned to the <b>Webstore Item Mapping</b> page where you can proceed with generating items as variants.</p></li>
    <li>On the action bar, choose <b>New</b> > <b>Generate Items as Variants</b>.<br>
     <p>The <b>Generate Items as Variants</b> page opens. All fields are automatically populated.</p></li>
    <li>To proceed with generating items as variants, Choose <b>OK</b>.<br>
     <p>A dialog box appears that displays the following text:</p>
     <p><i>For the Item.No: &lt;item number&gt;, you created &lt;number&gt; new items (variations in webshop)</i></p></li>
    <li>To proceed, choose <b>OK</b>.<br>
     <p>You are returned to the <b>Webstore Item Mapping</b> page. The <b>Parent Item No.</b> field has been automatically populated with the item number.</p>
     <p>Based on the item or item variant level, the <b>Webstore Attributes</b> FactBox displays the related attributes and values.</p></li>
   </ol>

1. To perform a synchronization of webstore item mapping, on the action bar, choose <b>Synchronization</b> > <b>Synchronize</b>.

   A dialog box appears that displays the following text:

   <i>Do you want to synchronize all items marked for use in webstore with webstore now?</i>

1. To proceed, choose <b>Yes</b>.

## Synchronize webstore item mapping

To complete the product variations as items feature setup, you must synchronize webstore item mapping. When you perform a webstore item mapping synchronization, the WooCommerce Connector synchronizes your webstore product record with a Business Central regular item. Each product variation is synchronized with a separate regular item. To learn more, go to [Synchronize webstore item mapping](synchronize-webstore-item-mapping.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/product-variations-as-items/product-variations-as-items.html" title="Product Variations as Items"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items" target="_blank">Register new items</a>  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20product-variations-as-items)
