---
title: Webstore plugin
description: Learn about the webstore plugin, Synfynal Connector for Business Central, and how to install it in your WooCommerce webstore.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 11/26/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce Webstore Synfynal Polylang autoplay bccentralconnector businesscentralconnector Extralight -->

# Webstore plugin

The webstore plugin, <b>Synfynal Connector for Business Central</b>, is a free WordPress plugin that forms the webstore side of the WooCommerce Connector. You install the plugin in the WordPress site that runs your WooCommerce webstore.

The WooCommerce Connector synchronizes items, stock, customers, and orders through the standard WooCommerce REST API, and those synchronizations work without the plugin. The plugin adds what the standard API does not provide:

- B2B price lists: Sales price lists from Business Central are sent to the webstore, and each signed-in customer sees their own price.
- Customer roles: Business Central retrieves the webstore user roles and assigns them to customers for role-based pricing.
- Translations: Product updates from Business Central are copied to the translations of a product in webstores that use the Polylang plugin.
- Plugin check: Business Central reads the plugin version and what the webstore supports, and tells you what to correct before a synchronization fails.

> [!NOTE]
> <b>Note</b>:<br>The plugin is free. The WooCommerce Connector features that use the plugin are separately purchased modules. To learn more, go to [Additional paid features](additional-paid-features.md).

## Requirements

The plugin requires the following versions:

- WordPress 6.7 or later
- PHP 8.1 or later
- WooCommerce 7.9 or later. Price lists require WooCommerce 8.0 or later.

## Install the plugin

Install the plugin from the WordPress plugin directory.

### To install the plugin

1. Sign in to the WordPress admin of your webstore as an administrator.

1. Select <b>Plugins</b> > <b>Add New Plugin</b>.

1. In the search box, enter <i>Synfynal Connector for Business Central</i>.

1. On the plugin, select <b>Install Now</b>, and then select <b>Activate</b>.

You can also download the plugin from <a href="https://wordpress.org/plugins/businesscentralconnector/" target="_blank">WordPress.org</a>.

After installation, complete the following steps:

- Ensure that the plugin is active in WordPress.
- Confirm that the <b>Webstore URL</b> is configured in Business Central.

## Update from version 1

Version 1 of the plugin was named <i>Business Central Connector</i>. To move to version 2, update the plugin on the WordPress <b>Plugins</b> page.

- Do not delete version 1 before you install version 2. Deleting version 1 removes the customer roles data that Business Central relies on.
- Everything that version 1 provided continues to work, and no additional setup is required.
- Version 2 requires PHP 8.1 or later and WordPress 6.7 or later.

## B2B price lists

With the B2B price list sync feature, the sales price lists that you maintain in Business Central are sent to the webstore. Each signed-in customer sees their own price on the product page, in the cart, and at checkout.

The plugin supports the following:

- Price lists for all customers, one customer, a customer price group, or a customer discount group.
- Prices and line discounts with minimum quantities, and starting and ending dates for each price list.
- Customer price groups and customer discount groups from Business Central, including the group of each customer.
- Price lists that are created in the webstore under <b>WooCommerce</b> > <b>Pricing</b>, which can be sent back to Business Central.
- A <b>Price preview</b> page that shows the price a customer gets for a product, the rule that applies, and why the other rules do not apply.

A price list can be sent to the webstore when it has no currency, its prices exclude VAT, and its lines are for items, item variants, or item discount groups. Business Central informs you when you select a price list that the webstore cannot represent.

### To turn on price lists

1. In the WordPress admin, select <b>WooCommerce</b> > <b>Settings</b> > <b>Pricing</b>, and then ensure that <b>Enable Pricing module</b> is selected.

1. In Business Central, on the <b>WooCommerce Connector Feature Management</b> page, enable the <i>B2B Price List Sync</i> feature.

1. On the <b>WooCommerce Connector Setup</b> page, turn on <b>Synchronize Price Lists</b>, and then under <b>Push Data to Webstore</b>, set <b>Price Lists</b> to <i>Mapped Only</i>.

1. On the <b>Webstore Price List Mapping</b> page, select the price lists to send to the webstore, and then synchronize.

Price lists require the new sales pricing experience to be turned on in Business Central.

## Customer roles

The plugin supports role-based pricing with the customer specific pricing feature. To learn more, go to [Customer specific pricing](customer-specific-pricing.md).

The WooCommerce Connector behaves as follows:

- Business Central checks that the plugin is available before opening certain configuration pages.
- Available webstore roles are retrieved automatically when you use role lookup. The lookup displays both the role name and identifier.
- If a role is entered manually, the role is validated against the webstore roles. If the role does not exist, an error is shown and the value must be corrected.
- If the <b>Webstore URL</b> is not configured, validation is skipped.
- When customers are synchronized from Business Central to the webstore, the WooCommerce Connector includes the webstore role assigned to the customer and whether the customer is eligible for role-based pricing.

## How Business Central checks the plugin

For each webstore that synchronizes price lists, Business Central reads the plugin version and what the webstore supports. If something is missing, Business Central names the webstore and what to correct:

- The plugin is not installed or not active: install and activate the plugin.
- The plugin is too old: update the plugin.
- The WooCommerce version cannot run price lists: update WooCommerce to version 8.0 or later.
- Pricing is turned off: select <b>Enable Pricing module</b> under <b>WooCommerce</b> > <b>Settings</b> > <b>Pricing</b>.

## Deactivate or uninstall the plugin

Deactivating the plugin does not delete any data. Uninstalling the plugin deletes its data only when <b>Delete data on uninstall</b> is selected under <b>WooCommerce</b> > <b>Settings</b> > <b>Pricing</b>.

## Troubleshooting

If you encounter issues when using the plugin, review the following guidance.

### Plugin not detected

This issue can occur when Business Central cannot confirm that the plugin is available.

To resolve this issue, verify the following:

- Ensure that the plugin is installed and active in WordPress.
- Verify that the <b>Webstore URL</b> is correct in Business Central.

### Role lookup not working

This issue can occur when roles cannot be retrieved from the webstore.

To resolve this issue, verify the following:

- Ensure that the plugin is available and responding.
- Verify that roles exist in WooCommerce.
- Connectivity between Business Central and the webstore is working.

### Role validation errors

This issue can occur when an invalid role value is entered.

To resolve this issue, verify the following:

- The entered role matches an existing role in WooCommerce.
- A valid role is selected by using the lookup.

### Customers do not see their own price

This issue can occur when a price list is not active in the webstore or does not apply to the customer.

To resolve this issue, verify the following:

- The customer is signed in to the webstore.
- <b>Enable Pricing module</b> is selected under <b>WooCommerce</b> > <b>Settings</b> > <b>Pricing</b>.
- The price list is selected on the <b>Webstore Price List Mapping</b> page and has been synchronized.
- The <b>Price preview</b> page under <b>WooCommerce</b> > <b>Pricing</b> shows the rule that applies to the customer and the product.

## Related information

[Additional paid features](additional-paid-features.md)  
[Customer specific pricing](customer-specific-pricing.md)  
[Webstore URL](webstore-url.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-plugin)
