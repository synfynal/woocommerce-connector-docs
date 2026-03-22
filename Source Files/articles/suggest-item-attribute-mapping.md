---
title: Suggest item attribute mapping
description: Learn about the suggest item attribute mapping feature.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 5/31/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay -->

# Suggest item attribute mapping

To assist with item attribute mapping, the WooCommerce Connector includes the capability to map item attributes between your webstore and Business Central based on name. 

This feature eliminates having to manually map the <b>Webstore ID</b> field for an attribute, saving you time, and reducing the risk of errors.

When you use this feature, the WooCommerce Connector automatically maps item attributes with the same name in both your webstore and Business Central. This feature only works when there is an exact one-to-one match between the records. To avoid any synchronization errors, the WooCommerce Connector does not map records if there are multiple item attributes with the same name.

> [!TIP]
> <b>Tip</b>:<br>In WooCommerce, attribute name data appears in the <b>Name</b> field and values data appears in the <b>Terms</b> field. In Business Central, attribute name data appears in the <b>Name</b> field and values data appears in the <b>Value</b> field.

## To configure suggest item attribute mapping

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>Woocommerce Connector Setup</b> page opens.

1. If you have multiple setups, select the one that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Attribute Mapping</b>.

   The <b>Webstore Item Attribute Mapping</b> page opens.

1. On the action bar, choose <b>Synchronization</b> > <b>Suggest Item Attribute Mapping</b>.

   A dialog box appears that displays the following text:

   <i>Do you want to map item attributes between Business Central and webstore based on item attribute name?</i>

1. To proceed, choose <b>Yes</b>.

   The WooCommerce Connector displays a notification that indicates the number of webstore records that were successfully mapped.

   > [!NOTE]
   > <b>Note</b>:<br>The suggest item attribute mapping feature does not automatically populate the <b>Webstore ID</b> field for attribute values. After the <b>Webstore ID</b> field is populated for an item attribute, you must perform a synchronization to populate the <b>Webstore ID</b> field for attribute values. To learn more, go to [Synchronize item attributes](synchronize-item-attributes.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-attributes-item-variants/item-attributes-item-variants.html" title="Item attributes and item variants"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Item attribute mapping](item-attribute-mapping.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20suggest-item-attribute-mapping)
