---
title: Item prices
description: Learn about item prices.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 11/30/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce Webstore ELEX -->

# Item prices

The WooCommerce Connector provides the capability for you to manage the following prices:

- Regular price: The standard price that is set for a product or service.
- Sales price: The price at which a product or service is offered during a specific sales period.
- Customer specific pricing: The WooCommerce Connector synchronizes item prices between Business Central and your webstore using the <b>ELEX WooCommerce Role Based Pricing</b> plugin.

> [!NOTE]
> <b>Note</b>:<br>During synchronization, prices are only updated from Business Central to your webstore.

## Regular price

In Business Central, the regular price can be set at the item card level or at the <a href="item-prices.md#customer-price-group">customer price group</a> level. The WooCommerce Connector provides the capability for you to choose which of these levels are synchronized with your webstore.

### Customer price group

You can configure the WooCommerce Connector to update the item prices in your webstore with the prices from the customer price groups in Business Central.

### To configure the regular price

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. In <b>Regular Price</b>, specify one of the following options:

     - <i>Unit Price</i> : During synchronization, the WooCommerce Connector pushes the <b>Unit Price</b> on the <b>Item Card</b> page in Business Central to the <b>Item Regular Price</b> in your webstore.

     - <i>Customer Price Group</i> : During synchronization, the WooCommerce Connector pushes the <b>Unit Price</b> on the <b>Customer Price Group</b> page in Business Central to the <b>Item Regular Price</b> in your webstore. When you specify <i>Customer Price Group</i>, the WooCommerce Connector displays a <b>Customer Price Group</b> field where you must specify the customer price group to use during synchronization.

## Sales price

The sales price that is used for your webstore is not linked to any customer group code in Business Central. This design is because WooCommerce only supports one price for all customers, and does not facilitate customer-specific prices by default. Therefore, the price that's defined for all customers is used as the default sales price.

The sales price is calculated as the best sales price from the sales price list for all customers that's relevant for the current date.

## Set regular and sales prices during item configuration

When you perform item mapping, the WooCommerce Connector displays a <b>Webstore Item - Details</b> FactBox. In the FactBox there are <b>Regular Price</b> and <b>Sale Price</b> fields. If there is a value present, the WooCommerce Connector pushes this value to your webstore during an item synchronization. Alternatively, if there is no value, you can select the <i>Create New</i> link, and then specify a price. 

When you select the <i>Create New</i> link and <i>Customer Price Group</i> is specified for <b>Regular Price</b> on the <b>WooCommerce Connector Setup</b> page, the WooCommerce Connector opens the <b>Sales Prices</b> page. The WooCommerce Connector sets the value of <b>Sales Code Filter</b> to be the same as the value that is specified in <b>Customer Price Group</b> on the <b>WooCommerce Connector Setup</b> page.

## Customer specific pricing

The WooCommerce Connector synchronizes item prices between Business Central and your webstore using the <b>ELEX WooCommerce Role Based Pricing</b> plugin. For more information, go to, [Customer specific pricing](customer-specific-pricing.md).

> [!NOTE]
> <b>Note</b>:<br>The customer specific pricing feature is only available as a separately purchased per tenant extension. For more information, go to [Additional paid features](additional-paid-features.md).
 
## See also

[Synchronize item prices](synchronize-item-prices.md)  
<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-customer-price-groups" target="_blank">Set Up Customer Price Groups</a>  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-prices)
