---
title: Customer template and default customer selection for taxed orders
description: Learn how customer templates and default customers are selected for taxed orders.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 7/5/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Customer template and default customer selection for taxed orders

The WooCommerce Connector provides the capability to configure separate customer templates and default customers for webstore orders that include tax during synchronization.

This capability is useful when taxed and tax-free orders from the same country or region require different posting groups or default customers in Business Central.

## How customer template and default customer selection for taxed orders works

During order synchronization, the WooCommerce Connector first checks whether tax-specific customer templates or default customers are configured for the matching country or region and state or province.

If tax-specific values are configured, the WooCommerce Connector uses those values when selecting the default customer or creating a customer in Business Central.

If tax-specific values are not configured, the WooCommerce Connector uses the standard <b>Customer Template Code</b> and <b>Customer No.</b> values.

Orders that do not include tax continue to use the standard customer template and default customer settings.

## Configure customer template and default customer selection for taxed orders

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Related</b> > <b>Regional Default Setup</b>.

   The <b>Regional Default Setup</b> page opens.

1. On the action bar, select <b>Show Advanced Setup</b>.

   The page refreshes and displays the <b>Taxed-Order Customer Template Code</b> and <b>Taxed-Order Customer No.</b> fields.

1. For each country or region that you want to configure, perform the following steps:
   <ol type="a">
   <li><p>In <b>Taxed-Order Customer Template Code</b>, specify the customer template that the WooCommerce Connector is to use when creating customers for orders that include tax.</p></li>
   <li><p>(Optional) In <b>Taxed-Order Customer No.</b>, specify the default customer that the WooCommerce Connector is to use for orders that include tax.</p>
   <p>If this field is blank, the WooCommerce Connector uses the value in <b>Customer No.</b>.</p></li>
   </ol>

## Customer template selection for orders that include tax

The WooCommerce Connector selects customer templates by using the following order of precedence for orders that include tax:

1. <b>Taxed-Order Customer Template Code</b>

1. <b>Customer Template Code</b>

1. <b>Default Customer Template</b> on the <b>WooCommerce Connector Setup</b> page.

## Customer template selection for orders that do not include tax

The WooCommerce Connector selects customer templates by using the following order of precedence for orders that do not include tax:

1. <b>Customer Template Code</b>

1. <b>Default Customer Template</b> on the <b>WooCommerce Connector Setup</b> page.

## Default customer selection for orders that include tax

The WooCommerce Connector selects the default customer by using the following order of precedence for orders that include tax:

1. <b>Taxed-Order Customer No.</b>

1. <b>Customer No.</b>

## Default customer selection for orders that do not include tax

The WooCommerce Connector selects the default customer by using the <b>Customer No.</b> for orders that do not include tax.

## Related information

[Customer templates](customer-templates.md)  
[Customers](customers.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20customer-template-default-customer-selection-for-taxed-orders)
