---
title: Set up the WooCommerce Connector
description: Learn how to set up the WooCommerce Connector.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 12/14/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes WooCommerce autoplay webstore webstores -->

# Set up the WooCommerce Connector

After you have installed the WooCommerce Connector, you must complete some setup.

<iframe width="350" height="197" src="https://www.youtube.com/embed/oQrN34-WnT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px"></iframe><br><i>17 minutes</i>

## To set up the WooCommerce Connector

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>assisted setup</i>, and then choose the related link.

   The <b>Assisted Setup</b> page opens.

1. Select the record that has a <b>Title</b> of <i>Set up WooCommerce Connector</i>, and then on the action bar choose <b>Start Setup</b>.

   The <b>WooCommerce Connector Setup</b> wizard opens.

1. On the first page of the wizard, specify the URL to your webstore. Also, specify the pre-generated consumer key and secret that the WooCommerce Connector is to use to authenticate to the REST API endpoints of your webstore.

   To complete this setup, perform the following steps:
   <ol type="a">
    <li>In <b>Webstore URL</b>, specify the URL of your webstore homepage, for example, <i>https://my-store.com</i>.</li>
    <li>In <b>Consumer Key</b>, specify your consumer key.</li>
    <li>In <b>Consumer Secret</b>, specify your consumer secret.</li>
    <li>If required, turn on <b>API Key as Query Param</b>.</li>
    <li>To proceed to the next wizard page, choose <b>Next</b>.</li>
   </ol>

   For more information about how to generate a consumer key and secret or about passing API keys as query string parameters, go to <a href="api-consumer-key-consumer-secret.md" target="_blank">API consumer key and consumer secret</a>.

1. On the second page of the wizard, specify the synchronization options for item categories between Business Central and your webstore.

   To complete this setup, perform the following steps:
   <ol type="a">
    <li>In <b>Push Webstore Item Categories</b>, specify one of the following options:
     <ul>
      <li><i>Mapped Only</i> : The WooCommerce Connector synchronizes mapped item category records from Business Central to your webstore.</li>
      <li><i>None</i> : Does not synchronize item category records from Business Central to your webstore.</li>
     </ul></li>
    <li>In <b>Pull Webstore Item Categories</b>, specify one of the following options:
     <ul>
      <li><i>All</i> : The WooCommerce Connector synchronizes all item category records from your webstore to Business Central.</li>
      <li><i>Mapped Only</i> : The WooCommerce Connector synchronizes mapped item category records from your webstore to Business Central.</li>
      <li><i>None</i> : Does not synchronize item category records from your webstore to Business Central.</li>
     </ul></li>
    <li>To open the <b>Webstore Item Category Mapping</b> page, where you can specify the item categories that you want to synchronize between your webstore and Business Central, choose <b>Record Mapping</b>.</li>
    <li>To proceed to the next wizard page, choose <b>Next</b>.</li>
   </ol>

   For more information about item category configuration, go to <a href="item-categories.md" target="_blank">Item categories</a>.

1. On the third page of the wizard, specify the synchronization options for items between Business Central and your webstore.

   To complete this setup, perform the following steps:
   <ol type="a">
    <li>In <b>Default Item Template</b>, specify the default item template that the WooCommerce Connector is to use when creating items in Business Central that are synchronized from your webstore.</li>
    <li>In <b>Default Location Code</b>, specify the location code that you want the WooCommerce Connector to use to determine the available inventory.<br>
     <p>The WooCommerce Connector also assigns this location code on incoming sales orders.</p></li>
    <li>In <b>Regular Price</b>, specify one of the following options:
     <ul>
      <li><i>Unit Price</i> : During synchronization, the WooCommerce Connector pushes the <b>Unit Price</b> on the <b>Item Card</b> page in Business Central to the <b>Item Regular Price</b> in your webstore.</li>
      <li><i>Customer Price Group</i> : During synchronization, the WooCommerce Connector pushes the <b>Unit Price</b> on the <b>Customer Price Group</b> page in Business Central to the <b>Item Regular Price</b> in your webstore. When you specify <i>Customer Price Group</i>, the WooCommerce Connector displays a <b>Customer Price Group</b> field where you must specify the customer price group to use during synchronization.</li>
     </ul></li>
    <li>In <b>Marketing Text</b>, specify one of the following options:
     <ul>
      <li><i>None</i> : Disables the use of this feature.</li>
      <li><i>Product Long Description</i> : During synchronization, the WooCommerce Connector pushes the <b>Marketing Text</b> from Business Central to WooCommerce to be used in the item's <b>Product Long Description</b> in your webstore.</li>
      <li><i>Product Short Description</i> : During synchronization, the WooCommerce Connector pushes the <b>Marketing Text</b> from Business Central to WooCommerce to be used in the item's <b>Product Short Description</b> in your webstore.</li>
     </ul></li>
    <li>In <b>Push Webstore Items</b>, specify one of the following options:
     <ul>
      <li><i>Mapped Only</i> : The WooCommerce Connector synchronizes mapped item records from Business Central to your webstore.</li>
      <li><i>None</i> : The WooCommerce Connector does not synchronize item records from Business Central to your webstore.</li>
     </ul></li>
    <li>In <b>Pull Webstore Items</b>, specify one of the following options:
     <ul>
      <li><i>All</i> : The WooCommerce Connector synchronizes all item records from your webstore to Business Central.</li>
      <li><i>Published Only</i> : The WooCommerce Connector synchronizes item records from your webstore to Business Central where the item has a <b>Status</b> of <i>Publish</i> in WooCommerce.</li>
      <li><i>Mapped Only</i> : The WooCommerce Connector synchronizes item records from your webstore to Business Central where the item has the <b>Webstore Item</b> checkbox selected in Business Central.</li>
      <li><i>None</i> : The WooCommerce Connector does not synchronize item records from your webstore to Business Central.</li>
     </ul></li>
    <li>To open the <b>Webstore Item Mapping</b> page, where you can specify the items that you want to synchronize between your webstore and Business Central, choose <b>Record Mapping</b>.</li>
    <li>To proceed to the next wizard page, choose <b>Next</b>.</li>
   </ol>

   For more information about item configuration, go to <a href="items.md" target="_blank">Items</a>.

1. On the fourth page of the wizard, specify the synchronization options for customers between Business Central and your webstore.

   To complete this setup, perform the following steps:
   <ol type="a">
    <li>In <b>Default Customer Template</b>, specify the template that the WooCommerce Connector is to use to assign default values when creating customers in Business Central that are synchronized from your webstore.<br>
     The customer that the WooCommerce Connector creates in Business Central receives posting details based on this template, such as the general business posting group, the VAT business posting group, and customer posting group.</li>
    <li>In <b>Default Guest Customer</b>, specify the customer number that the WooCommerce Connector is to use for orders that are submitted by unregistered guest accounts from your webstore.</li>
    <li>In <b>Push Webstore Customers</b>, specify one of the following options:
     <ul>
      <li><i>Mapped Only</i> : The WooCommerce Connector synchronizes mapped customer records from Business Central to your webstore.</li>
      <li><i>None</i> : The WooCommerce Connector does not synchronize customer records from Business Central to your webstore.</li>
     </ul></li>
    <li>In <b>Pull Webstore Customers</b>, specify one of the following options:
     <ul>
      <li><i>All</i> : The WooCommerce Connector synchronizes all customer records from your webstore to Business Central.</li>
      <li><i>Mapped Only</i> : The WooCommerce Connector synchronizes customer records from your webstore to Business Central where the customer has the <b>Webstore Customer</b> checkbox selected in Business Central.</li>
      <li><i>None</i> : The WooCommerce Connector does not synchronize customer records from your webstore to Business Central.</li>
     </ul></li>
    <li>To open the <b>Webstore Customer Mapping</b> page, where you can specify the customers that you want to synchronize between your webstore and Business Central, choose <b>Record Mapping</b>.</li>
    <li>To proceed to the next wizard page, choose <b>Next</b>.</li>
   </ol>

   For more information about customer configuration, go to <a href="customers.md" target="_blank">Customers</a>.

1. On the fifth page of the wizard, specify the synchronization options for orders between Business Central and your webstore.

   To complete this setup, perform the following steps:
   <ol type="a">
    <li>In <b>Order Sync. Start Date</b>, specify the date on which you want the WooCommerce Connector to start synchronizing orders.<br>
     <p>If the <b>Order Sync. Start Date</b> is left blank, the WooCommerce Connector synchronizes all orders.</p></li>
    <li>In <b>Pull Webstore Orders</b>, specify one of the following options:
     <ul>
      <li><i>All</i> : The WooCommerce Connector synchronizes all order records from your webstore to Business Central.</li>
      <li><i>None</i> : The WooCommerce Connector does not synchronize order records from your webstore to Business Central.</li>
     </ul></li>
    <li>(Optional) In <b>Sales Tax Account No.</b>, specify the number that represents the General Ledger (G/L) account to which the WooCommerce Connector is to post sales tax amounts from webstore orders.<br>
     <p>When a value is specified for <b>Sales Tax Account No.</b>, the WooCommerce Connector adds separate order lines during synchronization and the lines are posted on designated accounts.</p></li>
    <li>(Optional) In <b>Shipping Account No.</b>, specify the number that represents the G/L account to which the WooCommerce Connector is to post shipping amounts from webstore orders.<br>
     <p>When a value is specified for <b>Shipping Account No.</b>, the WooCommerce Connector adds separate order lines during synchronization and the lines are posted on designated accounts.</p></li>
   </ol>

   For more information about order configuration, go to <a href="orders.md" target="_blank">Orders</a>.

1. On the last page of the wizard, specify the automatic synchronization settings.

   To complete this setup, perform the following steps:
   <ol type="a">
    <li>In <b>No. of Minutes between Runs</b>, specify the frequency in minutes between runs that you want the WooCommerce Connector to synchronize data between Business Central and your webstore.</li>
    <li>To have the WooCommerce Connector perform periodic background jobs that synchronize the data between Business Central and your webstore, turn on <b>Enable</b>.</li>
   </ol>

   For more information about automatic synchronization, go to <a href="automatic-synchronization.md" target="_blank">Automatic Synchronization</a>.

1. To save all your setup settings and close the wizard, choose <b>Finish</b>.

## See also

[Getting started](getting-started.md)  
[Install the WooCommerce Connector from Microsoft AppSource](install-woocommerce-connector-from-microsoft-appsource.md)  
[Multiple webstores](multiple-webstores.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20set-up-woocommerce-connector)
