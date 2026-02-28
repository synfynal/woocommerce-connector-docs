---
title: Webstore shipping classes
description: Learn how to configure webstore shipping classes.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Webstore shipping classes

The WooCommerce Connector provides the capability to synchronize shipping classes between Business Central and WooCommerce. This feature ensures that items and item variants are consistently categorized for shipping and logistics across both platforms.

Before you synchronize items, import the shipping classes that you want to use from the webstore.

## To import webstore shipping classes

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Related</b> > <b>Webstore Shipping Classes</b>.

   The <b>Webstore Shipping Classes</b> page opens.

1. On the action bar, choose <b>New</b>.

   A new row appears.

1. In <b>Name</b>, perform a lookup to import shipping classes from the webstore.

   During the import, the <b>Slug</b> values are automatically populated and cannot be edited.

1. In <b>Description</b>, specify a description of the shipping class.

## To assign a Webstore Shipping Class to an item

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>items</i>, and then choose the related link.

   The <b>Items</b> page opens.

1. Select the item for which you want to update, and then on the action bar, choose <b>Manage</b> > <b>Edit</b>.

   The <b>Item Card</b> page opens.

1. On the <b>Webstore</b> FastTab, in <b>Webstore Shipping Class</b>, specify the shipping class that the WooCommerce Connector is to use when synchronizing this item with the webstore.

## To assign a Webstore Shipping Class to an item variant

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. Select the item for that is associated with the variant that you want to update, and then on the action bar, choose <b>Item</b> > <b>Variants</b>.

   The <b>Webstore Item Variant Mapping</b> page opens.

1. On the item variant record that you want to update, in <b>Webstore Shipping Class</b>, specify the shipping class that the WooCommerce Connector is to use when synchronizing this variant with the webstore.

## When a shipping class doesn’t exist

If a shipping class doesn’t exist in WooCommerce, the WooCommerce Connector creates the missing record during a push synchronization, and then assigns the missing shipping class in WooCommerce.

If a shipping class doesn’t exist in Business Central, the WooCommerce Connector creates the missing record in Business Central during a pull synchronization. The new shipping class appears on the <b>Webstore Shipping Classes</b> page and in the <b>Webstore Shipping Class</b> field on the corresponding <b>Item Card</b> or <b>Webstore Item Variant Mapping</b> page.

## Related information

[Items](items.md)  
[Synchronize items](synchronize-items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-shipping-classes)
