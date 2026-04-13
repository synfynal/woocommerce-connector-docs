---
title: Pull synchronization start date for return orders
description: Learn about the pull synchronization start date for return orders.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/21/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay webstores -->

# Pull synchronization start date for return orders

The WooCommerce Connector provides the capability to specify a pull synchronization start date for return orders. Use this field to limit synchronization to return orders created or modified on or after a specific date. This helps avoid importing historical refunds that are not relevant to your current operations.

For example, if you have entered return orders from WooCommerce into Business Central through December 31st, you can specify January 1st as the date on which you want the WooCommerce Connector to start synchronizing return orders between Business Central and your webstore. 

> [!NOTE]
> <b>Note</b>:<br>
> The pull synchronization start date for return orders operates independently from the pull synchronization start date for orders.

## When to configure the start date

Configure the pull synchronization start date for return orders in the following scenarios:

- During initial WooCommerce Connector setup
- After resetting synchronization tracking
- When you want to exclude historical return orders from synchronization

If the field is not set, the connector may synchronize all available return orders unless incremental tracking already exists.

## How return order synchronization works

The WooCommerce Connector determines which return orders to synchronize based on the following logic:

- If return orders have already been synchronized, the connector uses the last modified timestamp to retrieve only new or updated records.
- If no prior synchronization exists, the connector uses the pull synchronization start date for return orders to determine the starting point.
- If both values are empty, all available return orders may be retrieved.

During synchronization, WooCommerce returns only return orders that were modified after the calculated date.

## What happens when you change the start date

When you update the pull synchronization start date for return orders, the WooCommerce Connector resets synchronization tracking for return orders.

As a result:

- The next synchronization starts from the new start date
- Previously tracked synchronization history is cleared
- Subsequent synchronizations resume incremental updates

This behavior ensures that return orders are re-evaluated based on the updated date without conflicts from earlier tracking.

## To configure the pull synchronization start date for return orders

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Synchronization</b> FastTab, under <b>Pull Synchronization Start Date</b>, in <b>Return Order</b>, enter the date from which you want the WooCommerce Connector to start synchronizing return orders.

## Related information

[Return orders](return-orders.md)  
[Synchronize orders](synchronize-orders.md)  
[Pull synchronization start date for orders](pull-synchronization-start-date-for-orders.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20pull-synchronization-start-date-for-return-orders)
