---
title: Order fee lines
description: Learn how to configure the WooCommerce Connector to automatically add one or more fee lines on sales orders, and post the respective amounts to designated General Ledger (G/L) accounts.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/23/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Order fee lines

You can configure the WooCommerce Connector to automatically add one or more fee lines on sales orders, and post the respective amounts to designated General Ledger (G/L) accounts. The WooCommerce Connector adds the lines during the synchronization of orders between your webstore and Business Central.

## To configure order fee lines

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If you have multiple setups, select the one that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Order Fee Lines</b>.

   The <b>Order Fee Lines</b> page opens.

1. For each order fee line that you want to configure, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>New</b>.</p>
     <p>A new row appears.</p></li>
    <li><p>In <b>Name</b>, specify the fee name as defined in your webstore.</p></li>
    <li><p>In <b>Type</b>, specify the type of transaction that is to appear on the sales order line.</p>
      <p>The following list describes the available options:</p>
      <ul>
       <li><p>G/L Account</p></li>
       <li><p>Item</p></li>
       <li><p>Resource</p></li>
       <li><p>Fixed Asset</p></li>
       <li><p>Charge (Item)</p></li>
      </ul></li>
    <li><p>In <b>No.</b>, depending on the value that you specified in <b>Type</b>, specify the G/L account, item, resource, additional cost, or fixed asset to which to add the total fee amount from the webstore order.</p></li>
    <li><p>In <b>Description</b>, specify the description that is to appear on the webstore order line.</p></li>
    <li><p>To enable this line for use, select the <b>Enable</b> checkbox.</p></li>
   </ol>

## Related information

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20order-fee-lines)
