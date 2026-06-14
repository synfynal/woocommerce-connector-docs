---
title: Sync archived sales orders
description: Learn how to synchronize archived sales orders.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 6/14/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce preconfigured webstores -->

# Sync archived sales orders

The <b>Sync Archived Sales Orders</b> setting provides the capability to control whether archived sales orders that have not been posted are synchronized from the webstore.

## How synchronization of archived sales orders works

By default, archived sales orders are not synchronized from the webstore.

When <b>Sync Archived Sales Orders</b> is turned off, the WooCommerce Connector skips orders that exist in the Business Central archive.

When <b>Sync Archived Sales Orders</b> is turned on, archived sales orders that have not been posted are processed during synchronization. If a matching sales order does not exist in Business Central, the WooCommerce Connector creates a sales order.

Posted sales orders remain excluded from synchronization regardless of this setting.

## Configure synchronization of archived sales orders

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, in the <b>Order</b> section, perform one of the following steps:

    - Turn on <b>Sync Archived Sales Orders</b> to synchronize archived sales orders that have not been posted.
    - Turn off <b>Sync Archived Sales Orders</b> to skip archived sales orders during synchronization.

## Related information

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20sync-archived-sales-orders)
