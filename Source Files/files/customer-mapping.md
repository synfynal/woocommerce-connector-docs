---
title: Customer mapping
description: Learn about customer mapping
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay -->

# Customer mapping

The WooCommerce Connector provides the capability for you to map the specific customers that you want to synchronize between your webstore and Business Central. Customer mapping ensures that customer data appears in both platforms and that unnecessary duplicates are not created.

To assist with customer mapping, the WooCommerce Connector includes a suggest customer mapping feature that automatically maps customers between your webstore and Business Central based on their names. For more information, go to [Suggest customer mapping](suggest-customer-mapping.md).

## To map customers

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Webstore Customer Mapping</b>.

   The <b>Webstore Customer Mapping</b> page opens.

1. For each Business Central customer that you want to appear in your webstore, perform the following steps:
   <ol type="a">
    <li>In <b>Username</b>, specify the customer's username.</li>
    <li>In <b>Password</b>, specify the customer's password.</li>
    <li>Select the <b>Webstore Customer</b> checkbox.<br>
      <p>During synchronization, the WooCommerce Connector creates the customers in your webstore.</p>
      <p>If a customer in Business Central was previously mapped to a WooCommerce customer, the WooCommerce Connector synchronizes that record instead.</p>
      <p>When a customer is created in your webstore, the customer is sent an email with an invite link.</p></li>
    <li>To map a Business Central customer to an existing customer in your webstore, in <b>Webstore ID</b>, specify the respective Webstore ID.</li>
   </ol>

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/customer-mapping/customer-mapping.html" title="Customer mapping"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Set up the WooCommerce Connector](set-up-woocommerce-connector.md)  
[Customers](customers.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20customer-mapping)
