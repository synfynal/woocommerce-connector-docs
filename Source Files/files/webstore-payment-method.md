---
title: Webstore payment method
description: 
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 11/10/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Webstore payment method

The WooCommerce Connector provides the capability for you to map payment methods from Business Central with payment methods from WooCommerce. After you have completed the mapping, if the WooCommerce Connector detects a payment method while synchronizing orders, the WooCommerce Connector automatically populates the value of <b>Payment Method Code</b> on the sales order in Business Central.

## To map payment methods between Business Central and WooCommerce

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Related</b> > <b>Webstore Payment Methods</b>.

   The <b>Webstore Payment Methods</b> page opens.

1. For each payment method record that you want to map, perform the following steps:
   <ol type="a">
    <li>On the action bar, choose <b>New</b.<br>
     <p>A new row appears.</p></li>
    <li>In <b>Payment Method</b>, specify the Business Central payment method that you want to map.</li>
    <li>In <b>Webstore Name</b>, specify the WooCommerce payment method that you want to map.<br>
     <p>The <b>Webstore Title</b> field is automatically populated with the payment method title that is defined in WooCommerce.</p></li>
   </ol>

## See also

[Orders](orders.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-payment-method)
