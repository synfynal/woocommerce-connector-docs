---
title: Default item template
description: Learn how to configure the default item template.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 12/01/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Default item template

The <b>Default Item Template</b> field on the <b>WooCommerce Connector Setup</b> page specifies the item template that the WooCommerce Connector uses when creating items in Business Central during synchronization.

The <b>Default Item Template</b> field is required and cannot be left blank. You must select a valid item template before you can complete the connector setup.

## When the default item template is used

The default item template is used only when the WooCommerce Connector creates an item in Business Central during synchronization.

For example, the template is used when an order is synchronized from WooCommerce and contains a product that does not exist in Business Central.

If items exist in Business Central before products are sold on the webstore, the template is not used during synchronization.

## If one template does not fit all items

Some businesses use different item configurations for products that have different requirements, such as:

- Units of measure
- Replenishment systems
- Assembly policies

If one template does not match all items, select a template that applies to most items.

The selected template affects only items that the WooCommerce Connector creates during synchronization. Existing items in Business Central are not changed.

If your process requires all items to be created and configured directly in Business Central before synchronization to the webstore, the selected template is not used because the WooCommerce Connector creates items only when a matching item does not exist in Business Central.

## If items are always created in Business Central

Some businesses create and configure all items directly in Business Central, and then synchronize the items to the webstore.

In this scenario, the <b>Default Item Template</b> is not used because the items exist before synchronization occurs.

Even when the template is not expected to be used, you must still select a template because the field is required.

The template is used if an unknown product is introduced during synchronization.

## To configure the default item template

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. In <b>Default Item Template</b>, specify the item template that the WooCommerce Connector uses to create items in Business Central during synchronization.

## Related information

[Items](items.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20default-item-template)
