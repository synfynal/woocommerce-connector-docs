---
title: Webstore plugin
description: Learn about the webstore plugin.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 4/11/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce Webstore ELEX autoplay bccentralconnector Extralight -->

# Webstore plugin

The WooCommerce Connector webstore plugin extends your webstore to support integration with Business Central for customer-specific pricing and role-based pricing scenarios.

The plugin enables the WooCommerce Connector to retrieve webstore user roles, validate configuration in Business Central, and apply pricing eligibility during customer synchronization.

As a communication layer between Business Central and WooCommerce, the plugin supports the following actions:

- Verify that the plugin is installed and available.
- Retrieve available webstore user roles.
- Support role-based pricing configuration and validation.
- Enable customer eligibility for role-based pricing during synchronization.

The plugin works together with the ELEX WooCommerce Role Based Pricing plugin to apply pricing rules in WooCommerce.

## Key capabilities

The following capabilities support role-based pricing scenarios:

- Webstore role retrieval

  Business Central retrieves available user roles from the webstore and presents them for selection during configuration.

- Role validation

  Entered role values are validated against the webstore to prevent invalid configuration.

- Plugin availability check

  The WooCommerce Connector verifies that the plugin is installed before certain configuration pages can be opened.

- Customer eligibility support

  Business Central identifies which customers are eligible for role-based pricing.

## Install and configure the plugin

Install the WooCommerce Connector plugin in your WordPress environment.

For installation instructions and plugin downloads, refer to the plugin documentation provided with your solution or the links available from the <b>Feature Management</b> page in Business Central.

After installation, complete the following steps:

- Ensure that the plugin is active in WordPress.
- Confirm that the <b>Webstore URL</b> is configured in Business Central.

## How the plugin works with Business Central

The plugin integrates with Business Central to support role-based pricing configuration and validation.

The WooCommerce Connector behaves as follows:

- Business Central checks that the plugin is available before opening certain configuration pages.
- Available webstore roles are retrieved automatically when you use role lookup.
- Entered role values are validated against the webstore.
- If the plugin is not available, configuration cannot proceed.

## Role selection and validation

When configuring role-based pricing in Business Central, role values are validated against the webstore.

The WooCommerce Connector behaves as follows:

- You can use a lookup to select roles that are retrieved from the webstore.
- The lookup displays both the role name and identifier.
- If a role is entered manually, the role is validated against the webstore roles.

If the role does not exist, an error is shown and the value must be corrected.

If the <b>Webstore URL</b> is not configured, validation is skipped.

## Customer synchronization behavior

When customers are synchronized from Business Central to WooCommerce, the WooCommerce Connector includes additional information for customers that are configured for role-based pricing.

The information identifies the following:

- The webstore role assigned to the customer.
- Whether the customer is eligible for role-based pricing.

This information is used by the webstore to apply pricing rules.

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

## Related information

[Customer specific pricing](customer-specific-pricing.md)  
[Webstore URL](webstore-url.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-plugin)
