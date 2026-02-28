---
title: Item unit cost
description: Learn about item unit cost configuration.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 1/31/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Item unit cost

Item unit cost refers to the cost of one unit of inventory. The WooCommerce Connector provides the capability to configure how item unit cost data is synchronized between your webstore and Business Central.

When this feature is enabled, the WooCommerce Connector synchronizes the item <b>Unit Cost</b> in Business Central with the <b>Cost of Goods</b> value in WooCommerce.

The direction of synchronization, including bidirectional synchronization, depends on the <b>Push Data To Webstore</b> and <b>Pull Data From Webstore</b> settings for items on the <b>WooCommerce Connector Setup</b> page. If costs differ between Business Central and WooCommerce, the WooCommerce Connector updates the <b>Unit Cost</b> based on the configured synchronization direction.

This feature does not affect item prices. Item prices are managed separately.

## To enable unit cost synchronization

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, in the <b>Inventory</b> section, turn on <b>Synchronize Unit Cost</b>.

1. Open WooCommerce, and then perform the following steps:
   <ol type="a">
    <li><p>In the navigation menu, choose <b>Settings</b>.</p>
       <p>The <b>Settings</b> page opens.</p></li>
    <li><p>On the <b>Advanced</b> tab, select <b>Features</b>.</p>
     <p>The <b>Features</b> tab opens.</p></li>
    <li><p>Select the <b>Cost of Goods Sold</b> checkbox.</p></li>
    <li><p>Choose <b>Save Changes</b>.</p></li>
   </ol>

## Related information

[Items](items.md)  
[Synchronize items](synchronize-items.md)  
[Push webstore items](push-webstore-items.md)  
[Pull webstore items](pull-webstore-items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-unit-cost)
