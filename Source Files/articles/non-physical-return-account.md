---
title: Non-physical return account
description: Learn about the non-physical return account for return orders.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/21/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Non-physical return account

You can configure the WooCommerce Connector to create a sales line for a General Ledger (G/L) account during order synchronization when a WooCommerce refund line has a quantity of zero. 

This capability prevents synchronization failures and ensures the financial impact is recorded without affecting inventory.

Typical scenarios include:

- Restocking or processing fees
- Goodwill refunds or credits
- Post-fulfillment discounts
- Partial refunds where the customer keeps the item

Configuration requires that you set up a G/L account for non-physical returns. If the <b>Non-Physical Return Account</b> field is blank, zero-quantity refund lines are skipped during synchronization. You can configure this setting per webstore, and each webstore can use a different G/L account.

## Financial impact

The following list describes the financial impact of this feature:

- Posts directly to the G/L
- Does not affect inventory
- Applies standard posting logic, such as VAT, dimensions, and posting groups
- Supports return orders that combine inventory and non-inventory refunds

## To configure a non-physical return account

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If you have multiple setups, select the one that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, under the <b>Return Orders</b> section, in <b>Non-Physical Return Account</b>, enter the G/L account to use for refund lines where no item is returned.

   The G/L account must have the following setup:

     - <b>Account Type</b> = <i>Posting</i>
     - <b>Direct Posting</b> = on
     - <b>Blocked</b> = off

## How refund lines are processed

The following sections describe how zero-quantity and standard refund lines are processed.

### Zero-quantity refund lines

When a WooCommerce refund line has a <b>Quantity</b> = <i>0</i>:

- If <b>Non-Physical Return Account</b> is blank:
     - The line is skipped.
     - No error is raised.

- If <b>Non-Physical Return Account</b> is set:
     - A sales line is created with:
         - <b>Type</b> = <i>G/L Account</i>
         - <b>No.</b> = configured G/L account
         - <b>Quantity</b> = <i>1</i>
         - <b>Unit Price</b> = negative value of the refund total
         - <b>Line Amount</b> = negative value of the refund total
         - <b>Woo Webstore Order Line Type</b> = <i>Non-Physical Return</i>

### Standard refund lines

Refund lines with a nonzero quantity continue to use standard item processing:

- <b>Type</b> = <i>Item</i>
- <b>Quantity</b> = negative value
- <b>Unit Price</b> = calculated from WooCommerce totals
- <b>Woo Webstore Order Line Type</b> = <i>Standard</i>

### Mixed refund scenarios

A single return order can include both:

- Item lines (physical returns)
- G/L account lines (non-physical returns)

Each line is processed independently based on its quantity.

## How lines are matched during updates

When updating return orders, non-physical return lines are matched using the following criteria:

- <b>Webstore Code</b> and <b>Webstore ID</b>
- <b>Document No.</b> and <b>Document Type</b>
- <b>Woo Webstore Return Order Line</b> = <i>Yes</i>
- <b>Woo Webstore Order Line Type</b> = <i>Non-Physical Return</i>

Matching lines are updated instead of duplicated.

## Related information

[Return orders](return-orders.md)  
[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20non-physical-return-account)
