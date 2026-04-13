---
title: Item category mapping
description: Learn about item category mapping.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Item category mapping

The WooCommerce Connector provides the capability to map the item categories that you want to synchronize between your webstore and Business Central. Item category mapping ensures that your products appear in your webstore and are available for purchase, while keeping your inventory and sales channels synchronized for seamless operations and efficient management.

To assist with item category mapping, the WooCommerce Connector includes a suggest item category mapping feature that automatically maps item categories between your webstore and Business Central based on their category names.

## To map item categories

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Category Mapping</b>.

   The <b>Webstore Item Category Mapping</b> page opens.

1. For each item category that you want to appear in your webstore and be available for purchase, select the <b>Use In Webstore</b> checkbox.

1. To keep your inventory and sales channels in sync, for each item category that exists in Business Central and your webstore, in <b>Webstore ID</b>, specify the respective Webstore ID.

   You can now perform a synchronization between Business Central and your webstore. To learn more about synchronizing item categories, go to [Synchronize item categories](synchronize-item-categories.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-category-mapping/item-category-mapping.html" title="Item category mapping"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Suggest item category mapping

To assist with item category mapping, the WooCommerce Connector includes the capability to map item categories between your webstore and Business Central based on their names. For example, if you have an item category named <i>Clothing</i> in your webstore and Business Central, the WooCommerce Connector automatically maps this item category. 

This feature eliminates the need to manually map all item categories, saving you time, and reducing the risk of errors.

When you use this feature, the WooCommerce Connector automatically maps item category records with identical names in both your webstore and Business Central. This feature only works when there is an exact one-to-one match between the records. To avoid any synchronization errors, the WooCommerce Connector does not map records if there are multiple items with the same name criteria.

### To have the WooCommerce Connector suggest item mapping

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>Woocommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Item Category Mapping</b>.

   The <b>Webstore Item Category Mapping</b> page opens.

1. On the action bar, choose <b>Webstore</b> > <b>Suggest Item Category Mapping</b>.

### Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/suggest-item-category-mapping/suggest-item-category-mapping.html" title="Suggest item category mapping"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Set up the WooCommerce Connector](set-up-woocommerce-connector.md)  
[Item categories](item-categories.md)  
[Items](items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-category-mapping)
