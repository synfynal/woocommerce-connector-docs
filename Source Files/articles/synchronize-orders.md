---
title: Synchronize orders
description: Learn how to synchronize orders.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/21/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Synchronize orders

The WooCommerce Connector provides the capability to automatically and manually synchronize orders between WooCommerce and Business Central. Synchronization ensures that orders remain consistent and up-to-date across both platforms. 

## Automatic order synchronization

The WooCommerce Connector automatically synchronizes orders based on the order synchronization setup on the <b>WooCommerce Connector Setup</b> page. To learn more about order configuration, go to [Orders](orders.md).

## Manual order synchronization

The WooCommerce Connector includes an import webstore orders feature that enables you to manually import orders from a connected WooCommerce webstore into Business Central. This feature provides filtering options to control which orders are synchronized.

Manual order import uses the order synchronization configuration that is defined on the <b>WooCommerce Connector Setup</b> page. Filters that you specify on the <b>Import Webstore Orders</b> page take precedence for that import. To learn more about order configuration, go to [Orders](orders.md).

### When to use manual order import

Use manual order import in the following scenarios:

- Import specific orders immediately.

- Troubleshoot synchronization issues when automatic synchronization fails for one or more orders.

- Reattempt synchronization after resolving errors.

- Limit synchronization to selected orders instead of importing all available orders.

### How manual order import works

When you run a manual order import, the WooCommerce Connector retrieves orders from the selected webstore and creates corresponding sales orders in Business Central.

The connector applies the following rules during import:

- Imports only orders that do not already exist in Business Central.

- Skips existing, posted, and archived orders.

- Creates missing items and customers automatically if they do not exist in Business Central.

After the import completes, the WooCommerce Connector records the results in a synchronization activity log.

Manual order import can run while automatic synchronization is active.

### Filter orders during import

You can refine which orders are imported by applying one or more of the following filters before running the import:

- <b>Order ID</b>: Specifies the exact order ID to sync from the selected webstore. If left blank, all orders matching the other filters are considered.

- <b>Order Status Filter</b>: Specifies the online order statuses, such as <i>Processing</i> and <i>Completed</i>, to include in the import. You can use this filter to limit which orders are synced based on status.

- <b>Order Start Date</b>: Specifies the date from which the WooCommerce Connector begins syncing orders. For example, if orders have already been imported through December 31st, select January 1st as the start date. All orders created on or after this date are synchronized, provided the orders also match the other specified filters (<b>Order ID</b> or <b>Order Status Filter</b>).

These filters help limit synchronization to only the orders you need.

### To import webstore orders manually

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>webstore sales orders</i>, and then choose the related link.

   The <b>Webstore Sales Orders</b> page opens.

1. On the action bar, choose <b>Import Webstore Orders</b>.

   The <b>Import Webstore Orders</b> page opens.

1. Specify the filters that you want to apply.

1. To start the import, choose <b>OK</b>.

### Review synchronization results

After completing a manual order import, the WooCommerce Connector displays a synchronization activity log so you can review results immediately.

The synchronization activity log provides immediate feedback, such as:

- Successfully imported orders

- Orders that failed to synchronize

- Error messages to help identify issues

Use this information to resolve problems and rerun the import if needed.

You can view synchronization activity logs from the <b>Import Results</b> page.

## Related information

[Orders](orders.md)  
[Automatic synchronization](automatic-synchronization.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20synchronize-orders)
