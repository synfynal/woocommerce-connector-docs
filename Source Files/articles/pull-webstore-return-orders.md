---
title: Pull return order data from the webstore
description: Learn how to configure the pull of return order data from your webstore to Business Central.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/22/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Pull return order data from the webstore

You can configure the WooCommerce Connector to control how return order data is pulled from your webstore into Business Central during an order synchronization.

The following list describes the available options:

- <i>All</i> : Synchronize all orders between your webstore and Business Central.
- <i>None</i> : Do not synchronize return orders between your webstore and Business Central.

When performing a synchronization for a return order, the WooCommerce Connector performs one of the following actions:

- If the return order is posted in Business Central, the WooCommerce Connector does not perform any action.
- If the return order is not posted in Business Central, the WooCommerce Connector posts the return order in Business Central.

## To configure how return order data is pulled from your webstore to Business Central

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, under <b>Return Orders</b>, in <b>Non-Physical Return Account</b>, specify the General Ledger (G/L) account to use for refund lines when an item is not physically returned (quantity = 0).

1. On the <b>Synchronization</b> FastTab, under <b>Pull Data from Webstore</b>, in <b>Return Orders</b>, specify one of the following options:
     - <i>All</i> : Synchronize all orders between your webstore and Business Central.
     - <i>None</i> : Do not synchronize return orders between your webstore and Business Central.

## Related information

[Return orders](return-orders.md)  
[Pull synchronization start date for return orders](pull-synchronization-start-date-for-return-orders.md)  
[Non-physical return account](non-physical-return-account.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20pull-webstore-return-orders)
