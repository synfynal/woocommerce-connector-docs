---
title: Manage product types in the webstore
description: Learn how to manage product types in the webstore.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 1/25/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore webstores multistore -->

# Manage product types in the webstore

The WooCommerce Connector includes a <i>Manage in Webstore</i> option for the <b>Product Type</b> field on items. This option provides the capability to keep product type management in WooCommerce for selected items while other product data continues to synchronize with Business Central. The option supports scenarios where webstores use custom or unsupported product types by preventing unintended updates during synchronization.

WooCommerce supports standard product types, such as <i>Simple</i>, <i>Grouped</i>, <i>External</i>, and <i>Variable</i>. Some webstores also use custom product types that Business Central does not recognize. In these scenarios, the <i>Manage in Webstore</i> option preserves the product type defined in the webstore while ensuring that items continue to synchronize successfully.

## How product type synchronization works

The product type synchronization process differs depending on the direction of synchronization.

### Synchronization from WooCommerce to Business Central

During synchronization from WooCommerce to Business Central, the WooCommerce Connector performs the following actions:

- If the <b>Product Type</b> matches a supported value, the connector assigns the corresponding value in Business Central.

- If the <b>Product Type</b> does not match a supported value, the connector sets the <b>Product Type</b> to <i>Manage in Webstore</i>.

- The connector completes the synchronization without raising errors or warnings for unsupported product types.

### Synchronization from Business Central to WooCommerce

During synchronization from Business Central to WooCommerce, the WooCommerce Connector performs the following actions:

- If the <b>Product Type</b> is set to <i>Manage in Webstore</i>, the connector does not send a <b>Product Type</b> value to WooCommerce.

- WooCommerce retains the existing product type for the product.

- If the <b>Product Type</b> is set to a supported value, the connector synchronizes the <b>Product Type</b> as part of the update.

## Multistore considerations

The <i>Manage in Webstore</i> option applies to individual items and supports multistore environments. Each connected webstore can maintain a different product type for the same item without additional configuration.

## To set the Product Type to Manage in Webstore

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>items</i>, and then choose the related link.

   The <b>Items</b> page opens.

1. Select the item that you want to configure, and then on the action bar, choose <b>Manage</b> > <b>Edit</b>.

   The <b>Item Card</b> page opens.

1. On the <b>Webstore</b> FastTab, in <b>Product Type</b>, specify <i>Manage in Webstore</i>.

## Related information

[Items](items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20manage-product-types-in-the-webstore)
