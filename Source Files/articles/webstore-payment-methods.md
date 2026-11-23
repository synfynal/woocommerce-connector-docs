---
title: Webstore payment methods
description: Learn about mapping payment methods from Business Central with payment methods from WooCommerce and how to keep an existing payment method on sales orders.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 11/22/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Webstore payment methods

The WooCommerce Connector provides the capability to map payment methods in Business Central to payment methods in WooCommerce. Complete this mapping before synchronizing orders. After you complete the mapping, the WooCommerce Connector automatically populates the mapped <b>Payment Method Code</b> on sales orders in Business Central when order synchronization imports an order. You can prevent the WooCommerce Connector from replacing a payment method that a sales order already has by selecting the <b>Prevent Payment Method Overwrite</b> checkbox for a mapping.

## To map payment methods between Business Central and WooCommerce

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then select the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, select <b>Related</b> > <b>Webstore Payment Methods</b>.

   The <b>Webstore Payment Methods</b> page opens.

1. For each payment method record that you want to map, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, select <b>New</b>.</p>
     <p>A new row appears.</p></li>
    <li><p>In <b>Payment Method</b>, specify the Business Central payment method that you want to map.</p></li>
    <li><p>In <b>Webstore Name</b>, specify the name of the payment method as defined in the webstore.</p>
    <p>After you specify a value, the WooCommerce Connector automatically populates the <b>Webstore Title</b>, which is the payment method title as defined in the webstore.</p></li>
    <li><p>(Optional) Select the <b>Prevent Payment Method Overwrite</b> checkbox if the payment method that the sales order already has, for example the payment method from the customer card, is to be kept instead of the mapped payment method.</p></li>
   </ol>

## Prevent a mapping from overwriting the payment method on a sales order

When order synchronization imports an order, Business Central first copies the <b>Payment Method Code</b> from the customer card onto the sales order. The <b>Prevent Payment Method Overwrite</b> checkbox determines whether the mapped payment method then replaces that value:

- When <b>Prevent Payment Method Overwrite</b> is clear, the mapped payment method replaces the payment method on the sales order. This is the default.
- When <b>Prevent Payment Method Overwrite</b> is selected, the WooCommerce Connector keeps a payment method that the sales order already has. The WooCommerce Connector uses the mapped payment method only when the sales order has no payment method.

The following table shows examples for a WooCommerce payment method that is mapped to the <i>CHECK</i> payment method.

| Customer card payment method | Prevent Payment Method Overwrite | Payment method on the sales order |
|---|---|---|
| <i>BANK</i> | Clear | <i>CHECK</i> |
| <i>BANK</i> | Selected | <i>BANK</i> |
| (Blank) | Selected | <i>CHECK</i> |

The checkbox is set for each mapping on the <b>Webstore Payment Methods</b> page. Because each mapping belongs to one webstore, you can set the checkbox separately for each webstore in a multiple webstore environment.

The checkbox applies only when order synchronization imports an order. The WooCommerce Connector does not import an order again after the order synchronizes successfully. Later synchronizations update only the order status, so turning the checkbox on or off does not change the payment method on an existing sales order. If the last synchronization of an order failed, the WooCommerce Connector imports the order again during the next synchronization, and the checkbox applies to that import.

Existing mappings, and mappings that the WooCommerce Connector creates automatically during order synchronization, have the checkbox clear. The checkbox does not affect sales return orders.

## Related information

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-payment-methods)
