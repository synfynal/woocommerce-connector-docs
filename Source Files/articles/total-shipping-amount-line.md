---
title: Total shipping amount line
description: Learn about the total shipping amount line.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/23/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Total shipping amount line

You can configure the WooCommerce Connector to automatically add a total shipping amount line on sales orders and post the amount to a designated account during the synchronization of orders between your webstore and Business Central. This feature provides valuable insights into shipping costs.

To enable this feature, configure a shipping account type and shipping account number.

## To configure the shipping account type

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, in the <b>Order</b> section, in <b>Shipping Account Type</b>, specify the type of account to which to post the shipping amount from webstore sales orders. 

## To configure the shipping account number

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, in the <b>Order</b> section, in <b>Shipping Account No.</b>, specify the number that represents the shipping account to which the WooCommerce Connector is to post shipping amounts from webstore orders.

   The WooCommerce Connector uses the <b>Shipping Account Type</b> value to determine which record types are available for the <b>Shipping Account No. field.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/total-shipping-amount-line/total-shipping-amount-line.html" title="Total shipping amount line"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20total-shipping-amount-line)
