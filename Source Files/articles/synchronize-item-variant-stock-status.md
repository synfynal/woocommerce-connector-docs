---
title: Synchronize item and item variant stock status
description: Learn about synchronizing stock status.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 3/8/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce instock outofstock backorder onbackorder -->

# Synchronize item and item variant stock status

The WooCommerce Connector provides a stock status synchronization feature that lets Business Central control how product availability appears in WooCommerce.

## When stock status synchronization occurs

The WooCommerce Connector synchronizes stock status for an item or item variant when:

- <b>Manage Stock on Webstore</b> is disabled

- <b>Stock Status</b> contains a value

If <b>Manage Stock on Webstore</b> is turned on:

- WooCommerce determines stock availability based on quantity

- Stock synchronization is not used

## Supported features

Stock status synchronization is supported with the following WooCommerce Connector features:

- Item synchronization
- Product variations as items
- Item variant synchronization for item variants that are mapped to WooCommerce product variations

## Stock status indicator

Use the Stock Status field to view the stock availability of an item or item variant.

The <b>Stock Status</b> field appears in the following locations:

- <b>Item Card</b> page on the <b>Webstore</b> FastTab

  The <b>Stock Status</b> field appears only when <b>Manage Stock on Webstore</b> is turned off.

- <b>Webstore Item Mapping</b> page, in the <b>Inventory</b> section of the <b>Webstore Item - Details</b> FactBox

- <b>Webstore Item Variant Mapping</b> page

The <b>Stock Status</b> field maps to the WooCommerce <b>stock_status</b> property.

The following table displays the mapping between Business Central and WooCommerce.

| Business Central value | WooCommerce value |
|---|---|
| In Stock | instock |
| Out of Stock | outofstock |
| On Backorder | onbackorder |
| Blank | Not synchronized |

## Synchronization behavior

The following sections describe the stock status synchronization behavior.

### Push synchronization (Business Central → WooCommerce)

Business Central sends the stock status to WooCommerce only when:

- <b>Manage Stock on Webstore</b> is disabled on the item or item variant.

- <b>Stock Status</b> contains a value.

If <b>Stock Status</b> is blank, the WooCommerce Connector excludes the field during synchronization and WooCommerce retains the existing value for the item or item variant.

### Pull synchronization (WooCommerce → Business Central)

During pull synchronization:

- The connector always reads <b>stock_status</b> from WooCommerce.

- The value maps to <b>Stock Status</b> in Business Central.

If WooCommerce returns an unknown or empty value, the <b>Stock Status</b> field in Business Central remains blank.

## Related information

[Synchronize items](synchronize-items.md)  
[Synchronize an item and variants](synchronize-item-variants.md)  
[Item and item variant stock status](item-variant-stock-status.md)  
[Product variations as items](product-variations-as-items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20synchronize-item-variant-stock-status)
