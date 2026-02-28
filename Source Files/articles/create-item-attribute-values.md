---
title: Create an item attribute
description: Learn how to create an item attribute.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 5/31/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay -->

# Create an item attribute

The WooCommerce Connector provides the capability to create item attributes and their values. The item attributes and values that you create in Business Central can be synchronized with your webstore.

After you create an item attribute, you can assign the attribute to an item to configure product variations. For example, a t-shirt with attributes such as <b>Color</b> and <b>Size</b> can have variations such as <i>Red / Small</i> or <i>Blue / Medium</i>.

## To create an item attribute

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Attribute Mapping</b>.

   The <b>Webstore Item Attribute Mapping</b> page opens.

1. On the action bar, choose <b>Home</b> > <b>Item Attribute</b>.

   The <b>Item Attribute</b> page opens.

1. Choose ![Create a new entry button.](media/create-a-new-entry.png "Create a new entry button").

   The <b>Item Attribute</b> page opens.

1. In <b>Name</b>, specify a value, for example, <i>Size</i>.

1. To specify attribute values, in <b>Type</b>, specify <i>Option</i>.

   You must perform this step to enable the <b>Item Attribute Values</b> action and to have the WooCommerce Connector app display the <b>Values</b> field.

## To create an item attribute value

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Attribute Mapping</b>.

   The <b>Webstore Item Attribute Mapping</b> page opens.

1. On the action bar, choose <b>Home</b> > <b>Item Attribute</b>.

   The <b>Item Attribute</b> page opens.

1. Select the item attribute for which you want to create an attribute value, and then on the action bar, choose <b>Item Attribute Values</b>.

   The <b>Item Attribute Values</b> page opens.

1. For each item attribute value that you want to create, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>New</b>.</p>
      <p>A new row appears.</p></li>
    <li><p>In <b>Value</b>, specify a value, for example, specify <i>S</i> to represent small.</p></li>
   </ol>

   You can now perform a synchronization between your webstore and Business Central. To learn more about synchronizing item attributes, go to [Synchronize item attributes](synchronize-item-attributes.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-attributes-item-variants/item-attributes-item-variants.html" title="Item attributes and item variants"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Item attributes](item-attributes.md)
[Items](items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20create-item-attribute)
