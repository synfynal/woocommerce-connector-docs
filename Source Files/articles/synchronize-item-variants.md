---
title: Synchronize an item and variants
description: Learn how to synchronize item and variants.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/8/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Synchronize an item and variants

The WooCommerce Connector app provides the capability to synchronize items and their variants between WooCommerce and Business Central. This synchronization ensures that your item variants are always up-to-date and consistent across both platforms.

When you perform a synchronization, here's what happens:

- In Business Central, the WooCommerce Connector automatically populates the <b>Webstore ID</b> on the <b>Webstore Item Variant Mapping</b> page. 
- In WooCommerce, under <b>Products</b>, the <b>Product Data</b> is set to <i>Variable product</i> and the WooCommerce Connector creates variations for each variant in Business Central.

## To manually synchronize an item and variants

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. Select the item for which you want to synchronize the item and variants, and then on the action bar, choose <b>Variants</b>.

   The <b>Webstore Item Variant Mapping</b> page opens.

1. Select the item variant for which you want to perform a synchronization, and then on the action bar, choose <b>Synchronize Item and Variants</b>.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-attributes-item-variants/item-attributes-item-variants.html" title="Item attributes and item variants"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Item variant mapping](item-variant-mapping.md)  
[Automatic synchronization](automatic-synchronization.md)  
[Synchronize item and item variant stock status](synchronize-item-variant-stock-status.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20synchronize-item-variants)
