---
title: Product variations as items
description: Learn about product variations as items.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 12/08/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Product variations as items

The WooCommerce Connector provides the capability for you to synchronize your product variations from your webstore to Business Central as regular items. 

> [!NOTE]
> <b>Note</b>:<br>The product variations as items feature is only available as a separately purchased per tenant extension. For more information, go to [Additional paid features](additional-paid-features.md).

When you use the product variations as items feature, the WooCommerce Connector completes the following tasks:

- Each of your webstore product records is synchronized with a Business Central regular item.
- Each of your webstore product variations is synchronized with a separate regular item.

## Webstore Variant ID

The product variations as items feature uses a <b>Webstore Variant ID</b> field that appears on the <b>Webstore Item Mapping</b> page. The <b>Webstore Variant ID</b> field specifies the ID of the product variation in your webstore. When this feature is enabled, the WooCommerce Connector automatically populates the <b>Webstore Variant ID</b> for each synchronized item.

## To set up product variations as items

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, in the <b>Inventory</b> section, turn on <b>Item Variations as Items</b>.

1. Perform a synchronization of webstore item mapping. 

   For more information, go to [Synchronize webstore item mapping](synchronize-webstore-item-mapping.md).

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20product-variations-as-items)
