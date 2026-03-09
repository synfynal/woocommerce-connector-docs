---
title: Item and item variant stock status
description: Learn about item and item variant stock status.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/8/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Item and item variant stock status

The WooCommerce Connector includes the <b>Stock Status</b> field, which controls how item and item variant availability appears in WooCommerce when stock is not managed by the webstore.

## When to configure stock status

Configure the <b>Stock Status</b> field when <b>Manage Stock on Webstore</b> is disabled for an item or item variant in Business Central.

If <b>Manage Stock on Webstore</b> is turned on:

- WooCommerce determines stock availability based on quantity

- Stock synchronization is not used

## To set the stock status for an item

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>items</i>, and then choose the related link.

   The <b>Items</b> page opens.

1. Select the item for which you want to set the stock status, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>Item Card</b> page opens.

1. On the <b>Webstore</b> tab, in <b>Stock Status</b>, set the stock status of the item in the webstore.

   The <b>Stock Status</b> field appears only when <b>Manage Stock on Webstore</b> is turned off.

   During the next synchronization, the WooCommerce Connector updates the WooCommerce item availability based on the selected status.

## To set the stock status for an item variant

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. Select the item for which you want to set the stock status for an item variant, and then on the action bar, select <b>Item</b> > <b>Variants</b>.

   The <b>Webstore Item Variant Mapping</b> page opens.

1. In <b>Stock Status</b>, set the stock status of the item variant in the webstore.

   During the next synchronization, the WooCommerce Connector updates the WooCommerce item variant availability based on the selected status.

## Related information

[Items](items.md)  
[Synchronize item and item variant stock status](synchronize-item-variant-stock-status.md)  
[Synchronize items](synchronize-items.md)  
[Synchronize an item and variants](synchronize-item-variants.md)  
[Product variations as items](product-variations-as-items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-variant-stock-status)
