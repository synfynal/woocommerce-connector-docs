---
title: Manage stock on webstore
description: Learn how the WooCommerce Connector calculates and synchronizes the stock quantity of items and item variants.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 09/13/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore markdownlint webstore woocommerce -->

# Manage stock on webstore

The <b>Manage Stock on Webstore</b> checkbox determines whether the WooCommerce Connector sends the available quantity of an item or item variant to your webstore as the stock quantity.

When <b>Manage Stock on Webstore</b> is selected, Business Central is the source of the stock quantity in your webstore. When <b>Manage Stock on Webstore</b> is clear, the WooCommerce Connector does not send a quantity, and stock availability in your webstore is instead controlled by the <b>Stock Status</b> field. 

## How the available quantity is calculated

The WooCommerce Connector calculates the available quantity of an item or item variant as <b>Quantity on Hand</b> minus <b>Quantity on Sales Orders</b>, rounded to the nearest whole number.

Because open sales order demand is subtracted from inventory, the available quantity can be lower than the on-hand inventory for an item or item variant.

WooCommerce does not support a decimal stock quantity. If the calculated available quantity contains a decimal value, the WooCommerce Connector rounds the value to the nearest whole number. For example, an available quantity of <i>2.6</i> is sent as <i>3</i>.

## Filter the available quantity by location

If a webstore's <b>WooCommerce Connector Setup</b> page specifies a <b>Default Location Code</b>, the WooCommerce Connector calculates the available quantity from that location only. If <b>Default Location Code</b> is blank, the WooCommerce Connector totals the available quantity across all locations. 

Because <b>Default Location Code</b> is specified separately on each webstore's <b>WooCommerce Connector Setup</b> page, the same item or item variant can have a different available quantity for each webstore in a multiple webstore environment.

## View the available quantity during item configuration

When you perform item mapping, the WooCommerce Connector displays a <b>Webstore Item - Details</b> FactBox. In the <b>Inventory</b> section of the FactBox, <b>Quantity on Hand</b>, <b>Quantity on Sales Orders</b>, and <b>Available Inventory</b> show the values that the WooCommerce Connector uses to calculate the stock quantity that is sent to your webstore.

## Synchronization behavior

The following sections describe how the WooCommerce Connector synchronizes stock quantity and the <b>Manage Stock on Webstore</b> setting with your webstore.

### Push synchronization (Business Central to webstore)

During a push synchronization, the WooCommerce Connector applies the following rules:

- The WooCommerce Connector always sends the <b>Manage Stock on Webstore</b> setting to your webstore.
- The WooCommerce Connector sends the calculated available quantity only when <b>Manage Stock on Webstore</b> is selected.
- When <b>Manage Stock on Webstore</b> is clear, the WooCommerce Connector does not send a quantity. If <b>Stock Status</b> contains a value, the WooCommerce Connector sends that value instead.

This behavior applies to items, item variants, and product variations as items.

### Pull synchronization (webstore to Business Central)

During a pull synchronization, the WooCommerce Connector applies the following rules:

- The WooCommerce Connector always reads the <b>Manage Stock on Webstore</b> setting from your webstore and updates the field in Business Central to match.
- The WooCommerce Connector does not read stock quantity from your webstore. Inventory in Business Central is not affected by a pull synchronization.

> [!NOTE]
> <b>Note</b>:<br>Because a pull synchronization can update <b>Manage Stock on Webstore</b> to match your webstore, this setting can change in Business Central without direct action on your part.

## Related information

[Item mapping](item-mapping.md)  
[Item variant mapping](item-variant-mapping.md)  
[Item and item variant stock status](item-variant-stock-status.md)  
[Synchronize item and item variant stock status](synchronize-item-variant-stock-status.md)  
[Default location code](default-location-code.md)  
[Items](items.md)  
[Product variations as items](product-variations-as-items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20manage-stock-on-webstore)
