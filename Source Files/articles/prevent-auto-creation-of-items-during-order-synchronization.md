---
title: Prevent auto-creation of items during order synchronization
description: Learn how to prevent the automatic creation of items during order synchronization.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 1/24/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce preconfigured -->

# Prevent auto-creation of items during order synchronization

The WooCommerce Connector provides the capability to prevent the automatic creation of missing items during order synchronization. The feature is disabled by default. When the setting is turned on and an item with a matching webstore ID does not exist in Business Central, the WooCommerce Connector writes an error in the synchronization log instead of creating the item automatically.

This feature supports stricter control over item data by preventing unintended item creation during order synchronization. Organizations with defined data governance processes can ensure that only approved and preconfigured items exist in Business Central.

## To prevent auto-creation of items during order synchronization

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, turn on <b>Prevent Item Auto-Create</b>.

## Related information

[Items](items.md)  
[Synchronization logs](synchronization-logs.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20prevent-auto-creation-of-items-during-order-synchronization)
