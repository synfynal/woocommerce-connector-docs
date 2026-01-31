---
title: Value Added Tax (VAT) inclusive price calculation
description: Learn about the VAT inclusive price calculation.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 1/31/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Value Added Tax (VAT) inclusive price calculation

The WooCommerce Connector provides the capability to include Value Added Tax (VAT) in unit prices for orders that are synchronized between WooCommerce and Business Central. This feature ensures consistency in pricing for customers who have prices that include VAT and prevents unit price discrepancies between WooCommerce and Business Central.

When this feature is enabled, the WooCommerce Connector uses the following unit price calculation:

<b>Unit Price</b> = <b>Total</b> + <b>Total Tax</b> from WooCommerce line items

When disabled, the WooCommerce Connector synchronizes unit prices without VAT, using net values only.

## To enable VAT inclusive unit price calculation

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Posting</b> FastTab, in the <b>Order</b> section, turn on <b>VAT Inclusive Price Calculation</b>.

## Related information

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20vat-inclusive-price-calculation)
