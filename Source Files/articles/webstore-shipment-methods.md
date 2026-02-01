---
title: Shipment methods
description: Learn how to configure shipment methods.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Shipment methods

The WooCommerce Connector provides the capability to map shipment methods in Business Central to shipping methods in WooCommerce. Complete this mapping before synchronizing orders. After you complete the mapping, the WooCommerce Connector automatically populates the mapped shipment method <b>Code</b> on sales orders in Business Central when order synchronization detects a new or changed shipping method in WooCommerce.

## To map shipment methods to shipping methods

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Related</b> > <b>Webstore Shipment Methods</b>.

   The <b>Webstore Shipment Methods</b> page opens.

1. For each shipment method record that you want to map, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>New</b>.</p>
     <p>A new row appears.</p></li>
    <li><p>In <b>Shipment Method</b>, specify the Business Central shipment method that you want to map.</p></li>
    <li><p>In <b>Webstore Name</b>, specify the name of the shipment method as defined in the webstore.</p>
    <p>After you specify a value, the WooCommerce Connector automatically populates the <b>Webstore Title</b>, which is the shipping method title as defined in the webstore.</p></li>
   </ol>

## Related information

[Orders](orders.md)  
[Synchronize orders](synchronize-orders.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-shipment-methods)
