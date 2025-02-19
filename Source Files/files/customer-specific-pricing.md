---
title: Customer specific pricing
description: Learn about item prices.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce Webstore ELEX autoplay -->

# Customer specific pricing

The WooCommerce Connector provides the capability for you to synchronize item prices between Business Central and your webstore using the <b>ELEX WooCommerce Role Based Pricing</b> plugin.

> [!NOTE]
> <b>Note</b>:<br>The customer specific pricing feature is only available as a separately purchased per tenant extension. For more information, go to [Additional paid features](additional-paid-features.md).

The synchronization supports price and discount groups, as well as specific customer synchronization, enabling businesses to maintain consistent pricing strategies across platforms.

## Key benefits

The following list describes the key benefits of this feature:

- <b>Price Automation</b>: Automatically synchronize item prices and discounts, reducing manual input errors.
- <b>Role-Based Pricing</b>: Leverage WooCommerce's role-based pricing to assign tailored prices or discounts to customer groups directly from Business Central.
- <b>Real-Time Updates</b>: Ensure your WooCommerce store reflects the latest price adjustments in Business Central without delay.
- <b>Customizable Groups</b>: Define and manage price and discount groups in Business Central, and map them to WooCommerce roles.

## To set up customer specific pricing

1. Set up price groups in Business Central. For more information about how to configure your price and discount groups in Business Central, <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-customer-price-groups" target="_blank">Set up customer price groups</a> and <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-customer-discount-groups" target="_blank">Set up customer discount groups</a>.

1. Link Business Central to your webstore using the <b>ELEX WooCommerce Role Based Pricing</b> plugin. For more information, go to <a href="https://nl.wordpress.org/plugins/elex-woocommerce-role-based-pricing-plugin-basic/#description" target="_blank">ELEX WooCommerce Role Based Pricing plugin documentation</a>.

1. Map Business Central price groups to WooCommerce customer roles.

   To map a Business Central price group to a WooCommerce customer role, perform the following steps:
   <ol type="a">
    <li>Choose <img src="media/ui-search/search_small.png" alt="Lightbulb that opens the Tell Me feature.">, enter <i>customer specific pricing</i>, and then choose the related link.<br>
   <p>The <b>Customer Specific Pricing</b> page opens.</p></li>
    <li>On the action bar, choose <b>New</b>.<br>
     <p>A new row appears.</p></li>
    <li>In <b>Type</b>, specify the type of pricing group, for example, <i>Customer Price Group</i> or <i>Customer Discount Group</i>.</li>
    <li>In <b>Code</b>, specify a unique identifier for the pricing or discount group.</li>
    <li>In <b>Webstore User Role</b>, specify the corresponding user role in WooCommerce, for example, <i>administrator</i>.</li>
    <li>If applicable, in <b>Webstore Key</b>, specify the metadata key that is used in WooCommerce for identifying role-based pricing.</li>
   </ol>

1. Perform an item synchronization. For more information, go to [Synchronize items](synchronize-items.md).

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/customer-specific-pricing/customer-specific-pricing.html" title="Customer specific pricing"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Additional paid features](additional-paid-features.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20customer-specific-pricing)
