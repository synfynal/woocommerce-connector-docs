---
title: Create item variants automatically
description: Learn how to create item variants automatically.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay -->

# Create item variants automatically

To assist with the creation of a large number of variations, the WooCommerce Connector provides the capability for you to create item variants automatically.

## To create item variants automatically

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. Select the item for which you want to create item variants automatically, and then on the action bar, choose <b>Item</b> > <b>Webstore Attributes</b>.

   The <b>Webstore Item Attributes</b> page opens.

1. To create an item attribute, perform the following steps:
   <ol type="a">
    <li>On the action bar, choose <b>New</b>.<br>
      <p>A new row appears.</p></li>
    <li>In <b>Attribute</b>, the type of item attribute, such as, <i>Color</i> or <i>Size</i>.
    <li>To specify that this attribute is to be used for variations, select the <b>Used for Variations</b> checkbox.</li>
    <li>To specify that this attribute is to be visible on the <b>Product</b> page, select the <b>Visible on the Product Page</b> checkbox.</li>
    <li>In <b>Values</b>, select the <b>Assign value(s)</b> link.<br>
     <p>The <b>Item Attribute Values</b> page opens.</p></li>
    <li>Select the row of each item attribute value that you want to associate with the item attribute, and then choose <b>Close</b>.</li>
   </ol>

1. To return to the <b>Webstore Item Mapping</b> page, choose ![Back button.](media/back.png "Back button").

1. Ensure that the item for which you want to create item variants automatically is selected, and then on the action bar, choose <b>Create Item Variants</b>.

   The <b>Generate Item Variants</b> page opens.

1. Specify the item attributes for which you want to create variations, and then choose <b>OK</b>.

   The WooCommerce Connector creates the variations.

   You can now perform a synchronization between Business Central and your webstore. For more information about synchronizing item variants, go to [Synchronize an item and variants](synchronize-item-variants.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/create-item-variants-automatically/create-item-variants-automatically.html" title="Create item variants automatically"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20create-item-variants-automatically)
