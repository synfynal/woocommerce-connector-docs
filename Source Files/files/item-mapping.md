---
title: Item mapping
description: Learn about item mapping.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes Webstore woocommerce autoplay -->

# Item mapping

The WooCommerce Connector provides the capability for you to map the items that you want to synchronize between your webstore and Business Central. Item mapping ensures that item data appears in both platforms and that unnecessary duplicates are not created.

To assist with item mapping, the WooCommerce Connector includes a suggest item mapping feature that automatically maps items between your webstore and Business Central based on their product names or Stock Keeping Unit (SKU) values. For more information, go to [Suggest item mapping](suggest-item-mapping.md).

## To map items

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. For each Business Central item that you want to appear in your webstore and be available for purchase, select the <b>Webstore Item</b> checkbox.

   During synchronization, the WooCommerce Connector creates the items in your webstore.

   If an item was previously mapped to a WooCommerce product, the WooCommerce Connector synchronizes that record instead.

1. To keep your inventory and sales channels in sync, for each item that exists in Business Central and your webstore, in <b>Webstore ID</b>, specify the respective Webstore ID.

1. To specify that the WooCommerce Connector is to update the online stock management with the current inventory value, select the <b>Manage Stock on Webstore</b> checkbox for the respective item.

   When the <b>Manage Stock on Webstore</b> checkbox is selected for an item, the WooCommerce Connector pushes the respective item's inventory levels and pricing data from Business Central to WooCommerce during a synchronization. When performing item mapping, you can view an item's pricing and available inventory in the FactBox pane under the <b>Price</b> and <b>Inventory</b> sections.

   You can now perform a synchronization between Business Central and your webstore. For more information about synchronizing items, go to [Synchronize items](synchronize-items.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-mapping/item-mapping.html" title="Item mapping"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Set up the WooCommerce Connector](set-up-woocommerce-connector.md)  
[Items](items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-mapping)
