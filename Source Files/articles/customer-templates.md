---
title: Customer templates
description: Learn how to configure customer templates.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/8/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Customer templates

The WooCommerce Connector provides the capability to manage customer templates that are used to assign values when creating customers in Business Central that are synchronized from your webstore.

Customers that the WooCommerce Connector creates in Business Central receive posting details based on these templates, such as the general business posting group, VAT business posting group, and customer posting group.

## Customer template per country or region

The WooCommerce Connector provides the capability to create customer templates that are based on the customer's country or region. This feature ensures that customers are created with appropriate posting groups and tax configuration based on their location. 

You can also specify a default customer number per country or region that is used for billing information during posting of webstore orders.

## Customer templates per country or region and state or province

For scenarios that require more granular control, the WooCommerce Connector also supports creating customer templates that are based on both country or region and state or province. This capability is useful when different regions within the same country require different tax treatment or posting configurations.

## Customer creation template precedence

When creating a customer from a webstore order, the WooCommerce Connector applies customer templates using the following order of precedence:

1. A template that matches the webstore, country or region, and state or province.

1. A template that matches the webstore and country or region only.

1. The default customer template that is specified on the <b>WooCommerce Connector Setup</b> page.

## To configure a customer template by country or region or state or province

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Related</b> > <b>Default Country/Region Settings</b>.

   The <b>Country/Region Default Settings</b> page opens.

1. For each customer template that you want to configure, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>New</b>.</p>
      <p>A new row appears.</p></li>
    <li><p>In <b>Country/Region Code</b>, specify the code that represents the country or region for which the template applies.</p></li>
    <li><p>In <b>State/Province Code</b>, specify the code that represents the state or province for which the template applies.</p></li>
    <li><p>In <b>Customer Template Code</b>, specify the code that represents the default customer template that the WooCommerce Connector is to use when creating a customers for this location.</p></li>
    <li><p>(Optional) In <b>Customer No.</b>, specify the default customer number that the WooCommerce Connector is to use during order posting.</p></li>
   </ol>

## Default customer template

You can configure the default customer template that the WooCommerce Connector is to use to assign default values when creating customers in Business Central that are synchronized from your webstore.

### To configure the default customer template

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. In <b>Default Customer Template</b>, specify the template that the WooCommerce Connector is to use to assign default values when creating customers in Business Central during synchronization with your webstore.

## Related information

[Customers](customers.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20customer-templates)
