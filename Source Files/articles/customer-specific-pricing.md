---
title: Customer specific pricing
description: Learn about customer specific pricing.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 4/12/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce Webstore ELEX autoplay -->

# Customer specific pricing

The WooCommerce Connector provides the capability to synchronize item prices between Business Central and your webstore by using the <b>ELEX WooCommerce Role Based Pricing</b> plugin.

> [!NOTE]
> <b>Note</b>:<br>The customer specific pricing feature is only available as a separately purchased module. To learn more, go to [Additional paid features](additional-paid-features.md).

The synchronization supports price and discount groups, as well as specific customer eligibility, enabling consistent pricing strategies across platforms.

## Key benefits

The following list describes the key benefits of this feature:

- Price Automation: Automatically synchronize item prices and discounts, reducing manual input errors.
- Role-Based Pricing: Use WooCommerce role-based pricing to assign specific prices or discounts to customer groups from Business Central.
- Real-Time Updates: Ensure that your WooCommerce store reflects the latest price adjustments from Business Central.
- Customizable Groups: Define and manage price and discount groups in Business Central and map them to WooCommerce roles.

## Enable the customer specific pricing feature on the WooCommerce Connector Feature Management page

To use this feature, enable the feature on the <b>WooCommerce Connector Feature Management</b> page.

### To enable the customer specific pricing feature

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector feature management</i>, and then choose the related link.

   The <b>WooCommerce Connector Feature Management</b> page opens.

1. On the <i>Customer Specific Pricing</i> record, select <b>Try it out</b>.

   A dialog box appears with the following message:

   <i>Would you like to temporarily enable this feature in this Sandbox environment for free?</i>

1. Choose <b>Yes</b>.

   The feature is enabled.

## Set up customer specific pricing

To set up customer specific pricing, perform the following tasks:

1. Configure pricing groups
1. Install the required plugins
1. Map pricing groups to webstore roles
1. Configure customer for role-based pricing
1. Synchronize items and customers

### Configure pricing groups

Set up price and discount groups in Business Central. 

Learn more in:

- <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-customer-price-groups" target="_blank">Set up customer price groups</a>
- <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-customer-discount-groups" target="_blank">Set up customer discount groups</a>

### Install the required plugins

Install and configure the required plugins in your WooCommerce environment.

Learn more in:

- <a href="https://nl.wordpress.org/plugins/elex-woocommerce-role-based-pricing-plugin-basic/#description" target="_blank">ELEX WooCommerce Role Based Pricing plugin documentation</a>

- [Webstore plugin](webstore-plugin.md)

### Map pricing groups to webstore roles

Map Business Central pricing groups to WooCommerce roles.

#### To map pricing groups

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, select <b>Customer Specific Pricing (ELEX)</b> > <b>Customer Specific Pricing</b>.

   The <b>Customer Specific Pricing</b> page opens.

1. On the action bar, choose <b>New</b>.
     
   A new row appears.

1. In <b>Type</b>, specify the type of pricing group, for example, <i>Customer Price Group</i> or <i>Customer Discount Group</i>.

1. In <b>Code</b>, specify a unique identifier for the pricing or discount group.

1. In <b>Webstore User Role Slug</b>, select a role.

   Use the lookup to retrieve roles directly from the webstore. The lookup list displays available roles with their names and identifiers.

   If you enter a value manually, the WooCommerce Connector validates the value against the webstore roles.

1. If applicable, in <b>Webstore Key</b>, specify the metadata key to be used by the webstore plugin.

### Configure customers for role-based pricing

Define which customers receive role-based pricing during synchronization.

Only customers that are included in the role-based pricing customer list receive role-based pricing during synchronization.

#### To configure role-based pricing customers

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>View</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, select <b>Customer Specific Pricing (ELEX)</b> > <b>Role Pricing Customers</b>.

   The <b>Role Pricing Customers</b> page opens.

1. On the action bar, choose <b>New</b>.

   A new row appears.

1. In <b>Customer No.</b>, select a customer.

   The <b>Webstore Role</b> field is automatically populated based on the customer.

1. In <b>Webstore Role</b>, review or update the role.

   Use the lookup to select a role from the webstore.

   If you enter a value manually, it is validated against the webstore roles.

#### Webstore role validation and lookup

Role selection is validated against the webstore to prevent invalid configuration.

The WooCommerce Connector behaves as follows:

- Role values are retrieved from the webstore by using the WooCommerce Connector webstore plugin.
- The lookup displays available roles with both name and identifier.
- Manual entries are validated when you leave the field.
- If the webstore is not configured or unavailable, validation is skipped.

#### Plugin availability check

When opening the <b>Role Pricing Customers</b> page, the WooCommerce Connector verifies that the required plugin is installed in the webstore.

If the plugin is not available, a prompt provides access to the download page.

The page cannot be used until the plugin is installed and accessible.

If the <b>Webstore URL</b> is not configured, the check is skipped.

### Synchronize items and customers

After configuration is complete, run item synchronization to apply pricing updates.

During customer synchronization, the following behavior applies:

- Customers on the <b>Role Pricing Customers</b> page receive role and eligibility data.
- Customers that are not included in the list are synchronized without role-based pricing data.

This behavior ensures that role-based pricing applies only to the intended customers.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/customer-specific-pricing/customer-specific-pricing.html" title="Customer specific pricing"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Additional paid features](additional-paid-features.md)  
[Synchronize items](synchronize-items.md)  
[Synchronize customers](synchronize-customers.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20customer-specific-pricing)
