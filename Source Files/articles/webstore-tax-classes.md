---
title: Webstore tax classes
description: Learn how to map Value Added Tax (VAT) product posting groups in Business Central to product tax classes in WooCommerce.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/28/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Webstore tax classes

The WooCommerce Connector provides the capability to map Value Added Tax (VAT) product posting groups in Business Central to product tax classes in WooCommerce. After you complete the mapping, the WooCommerce Connector automatically synchronizes tax classes in both directions, ensuring consistent tax handling across both platforms.

If you do not perform this mapping, mismatches may occur.

## To map VAT product posting groups to product tax classes

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Related</b> > <b>Webstore Tax Classes</b>.

   The <b>Webstore Tax Classes</b> page opens.

1. For each mapping record that you want to create, perform the following steps:
   <ol type="a">
    <li><p>On the action bar, choose <b>New</b>.</p>
     <p>A new row appears.</p></li>
    <li><p>In <b>Code</b>, specify the VAT product posting group code to map to the webstore tax class.</p></li>
    <li><p>In <b>Webstore Name</b>, specify the product tax class name as defined in the webstore.</p>
     <p>The <b>Webstore Name</b> field includes a lookup option <img src="media/assist-edit-icon.png" alt="Choose a value for Webstore Name" style="vertical-align:bottom;margin-bottom:5px"> that you can use to search for and select an available tax class from the webstore.</p></li>
    <li><p>In <b>Webstore Slug</b>, Specify the product tax class slug that is defined in the webstore.</p></li>
    <li><p>To specify that this product tax class is the standard tax class that is defined in the webstore, select the <b>Is Standard</b> checkbox.</p></li>
   </ol>

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-tax-classes)
