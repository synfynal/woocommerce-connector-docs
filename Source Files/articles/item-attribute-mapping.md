---
title: Item attribute mapping
description: Learn about item attribute mapping.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 5/31/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay -->

# Item attribute mapping

The WooCommerce Connector provides the capability to map the item attribute and attribute values that you want to synchronize between your webstore and Business Central. Item attribute and attribute value mapping ensures that accurate item information appears in both platforms.

> [!TIP]
> <b>Tip</b>:<br>An item attribute or attribute value that is not mapped to your webstore has a blank <b>Webstore ID</b>.

To assist with item attribute mapping, the WooCommerce Connector includes a suggest item attribute mapping feature that automatically maps item attributes between your webstore and Business Central based on name. To learn more, go to [Suggest item attribute mapping](suggest-item-attribute-mapping.md).

## To manually map item attributes and values

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Attribute Mapping</b>.

   The <b>Webstore Item Attribute Mapping</b> page opens.

1. To keep the item attributes between your webstore and Business Central in sync, for each item attribute, in <b>Webstore ID</b>, specify the respective Webstore ID.

1. To keep the attribute values between your webstore and Business Central in sync, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>Home</b> > <b>Item Attribute Values</b>.</p>
      <p>The <b>Webstore Item Attribute Value Mapping</b> page opens.</p></li>
    <li><p>For each item attribute value, in <b>Webstore ID</b>, specify the respective Webstore ID.</p></li>
   </ol>
 
   You can now perform a synchronization between your webstore and Business Central. To learn more about synchronizing item attributes and their values, go to [Synchronize item attributes](synchronize-item-attributes.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-attributes-item-variants/item-attributes-item-variants.html" title="Item attributes and item variants"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Item attributes](item-attributes.md)
[Items](items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-attribute-mapping)
