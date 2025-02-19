---
title: Return orders
description: Learn about return orders.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Return orders

Return orders are created in your webstore. If configured, the WooCommerce Connector can create, and then post return orders in Business Central during order synchronization. Additionally, the WooCommerce Connector can add total shipping amount and total tax amount lines to the return order.

## Return orders configuration

The WooCommerce Connector provides the capability for you to configure how the WooCommerce Connector is to synchronize return orders between your webstore and Business Central.

The following list describes the available options:

- <i>All</i> : The WooCommerce Connector synchronizes all orders between your webstore and Business Central.
- <i>None</i> : The WooCommerce Connector does not synchronize return orders between your webstore and Business Central.

When performing a synchronization for a return order, the WooCommerce Connector performs one of the following actions:

- If the return order is posted in Business Central, the WooCommerce Connector does not perform any action.
- If the return order is not posted in Business Central, the WooCommerce Connector posts the return order in Business Central.

## To configure return orders

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. In <b>Return Orders</b>, specify one of the following options:
     - <i>All</i> : The WooCommerce Connector synchronizes all orders between your webstore and Business Central.
     - <i>None</i> : The WooCommerce Connector does not synchronize return orders between your webstore and Business Central.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/return-orders/return-orders.html" title="Return orders"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Synchronize orders](synchronize-orders.md)  
[Total tax amount line](total-tax-amount-line.md)  
[Total shipping amount line](total-shipping-amount-line.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20return-orders)
