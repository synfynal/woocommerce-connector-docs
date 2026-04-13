---
title: Webstore payment methods
description: Learn about mapping payment methods from Business Central with payment methods from WooCommerce.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Webstore payment methods

The WooCommerce Connector provides the capability to map payment methods in Business Central to payment methods in WooCommerce. Complete this mapping before synchronizing orders. After you complete the mapping, the WooCommerce Connector automatically populates the mapped <b>Payment Method Code</b> on sales orders in Business Central when order synchronization detects a new or changed payment method in WooCommerce.

## To map payment methods between Business Central and WooCommerce

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Related</b> > <b>Webstore Payment Methods</b>.

   The <b>Webstore Payment Methods</b> page opens.

1. For each payment method record that you want to map, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>New</b>.</p>
     <p>A new row appears.</p></li>
    <li><p>In <b>Payment Method</b>, specify the Business Central payment method that you want to map.</p></li>
    <li><p>In <b>Webstore Name</b>, specify the name of the payment method as defined in the webstore.</p>
    <p>After you specify a value, the WooCommerce Connector automatically populates the <b>Webstore Title</b>, which is the payment method title as defined in the webstore.</p></li>
   </ol>

## Related information

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-payment-methods)
