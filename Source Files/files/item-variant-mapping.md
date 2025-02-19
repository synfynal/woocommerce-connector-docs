---
title: Item variant mapping
description: Learn about item variant mapping.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay -->

# Item variant mapping

The WooCommerce Connector provides the capability for you to map the item variants that you want to synchronize between your webstore and Business Central. Item variant mapping ensures that item variant data appears in both platforms and that unnecessary duplicates are not created.

## To map item variants

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Mapping</b>.

   The <b>Webstore Item Mapping</b> page opens.

1. Select the item for which you want to perform item variant mapping, and then on the action bar, choose <b>Item</b> > <b>Variants</b>.

   The <b>Webstore Item Variant Mapping</b> page opens.

1. To keep your inventory and sales channels in sync, for each item variant that exists in Business Central and your webstore, in <b>Webstore ID</b>, specify the respective Webstore ID.

1. To specify that the WooCommerce Connector is to update the online stock management with the current inventory value, select the <b>Manage Stock on Webstore</b> checkbox for the respective item variant.

   When the <b>Manage Stock on Webstore</b> checkbox is selected for an item variant, the WooCommerce Connector pushes the respective item variant's inventory levels and pricing data from Business Central to WooCommerce during a synchronization.

1. Specify values for other fields as required.

   You can now perform a synchronization between Business Central and your webstore. For more information about synchronizing item variants, go to [Synchronize an item and variants](synchronize-item-variants.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-variant-mapping/item-variant-mapping.html" title="Item variant mapping"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Item variants](item-variants.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-variant-mapping)
