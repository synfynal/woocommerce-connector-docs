---
title: Synchronize webstore item mapping
description: Learn how to synchronize webstore item mapping.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 12/8/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Synchronize webstore item mapping

To complete the product variations as items feature setup, you must synchronize webstore item mapping.

When you perform a webstore item mapping synchronization, the WooCommerce Connector performs the following tasks:

- Synchronizes your webstore product record with a Business Central regular item. Each product variation is synchronized with a separate regular item.
- For each regular item, populates the <b>Webstore ID</b>, but leaves the <b>Webstore Variant ID</b> blank. The next time item variants are synchronized the WooCommerce Connector automatically populates the <b>Webstore ID</b> and <b>Webstore Variant ID</b> with values from your webstore.

## To manually synchronize webstore item mapping

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. On the action bar, choose <b>Synchronization</b> > <b>Synchronize</b>.

## See also

[Product variations as items](product-variations-as-items.md)  
[Synchronize an item and variants](synchronize-item-variants.md)  
[Automatic synchronization](automatic-synchronization.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20synchronize-webstore-item-mapping)
