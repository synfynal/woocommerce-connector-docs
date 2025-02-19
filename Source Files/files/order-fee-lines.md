---
title: Order fee lines
description: 
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 12/21/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Order fee lines

You can configure the WooCommerce Connector to automatically add one or more fee lines on sales orders, and post the respective amounts to designated General Ledger (G/L) accounts. The WooCommerce Connector adds the lines during the synchronization of orders between your webstore and Business Central.

## To configure order fee lines

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Order Fee Lines</b>.

   The <b>Order Fee Lines</b> page opens.

1. For each order fee line that you want to configure, perform the following steps:
   <ol type="a">
    <li>On the action bar, choose <b>New</b>.<br>
     <p>A new row appears.</p></li>
    <li>In <b>Name</b>, specify the fee name as defined in your webstore.</li>
    <li>In <b>Type</b>, specify the type of transaction that is to appear on the sales order line.<br>
      <p>The following list describes the options that are available:</p>
      <ul>
       <li>G/L Account</li>
       <li>Item</li>
       <li>Resource</li>
       <li>Fixed Asset</li>
       <li>Charge (Item)</li>
      </ul></li>
    <li>In <b>No.</b>, depending on the value that you specified in <b>Type</b>, specify the G/L account, item, resource, additional cost, or fixed asset to which to add the total fee amount from the webstore order.</li>
    <li>In <b>Description</b>, specify the description that is to appear on the webstore order line.</li>
    <li>To enable this line for use, select the <b>Enable</b> checkbox.</li>
   </ol>

## See also

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20order-fee-lines)
