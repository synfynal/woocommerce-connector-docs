---
title: Order processing
description: 
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 12/21/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Order processing

The WooCommerce Connector provides the capability for you to configure how the WooCommerce Connector is to process orders from your webstore in Business Central.

The following list describes the options that are available:

- <i>Default</i> : The WooCommerce Connector does not perform any order processing.
- <i>Release</i> : The WooCommerce Connector automatically changes the <b>Status</b> on orders in Business Central from <i>Open</i> to <i>Released</i>.
- <i>Post</i> : The WooCommerce Connector automatically creates posted sales invoices in Business Central.
- <i>Schedule Post</i> : The WooCommerce Connector posts orders in Business Central at the specified posting time.

## To configure order processing

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. In <b>Order Processing</b>, specify one of the following options:
     - <i>Default</i> : The WooCommerce Connector does not perform any order processing.
     - <i>Release</i> : The WooCommerce Connector automatically changes the <b>Status</b> on orders in Business Central from <i>Open</i> to <i>Released</i>.
     - <i>Post</i> : The WooCommerce Connector automatically creates posted sales invoices in Business Central.
     - <i>Schedule Post</i> : The WooCommerce Connector posts orders in Business Central at the specified posting time. If you specify <i>Schedule Post</i>, you must specify the posting time that you want in the <b>Schedule Posting Time</b> field.

## Schedule Post and the Batch Post Sales Orders job

When you specify <i>Schedule Post</i> in the <b>Order Processing</b> field on the <b>WooCommerce Connector Setup</b> page and enable automatic synchronization, the WooCommerce Connector creates a <i>Batch Post Sales Orders</i> job, which appears on the <b>Job Queue Entries</b> page. The <i>Batch Post Sales Orders</i> job posts sales orders at the time that is specified in the <b>Schedule Posting Time</b> field on the <b>WooCommerce Connector Setup</b> page. 

> [!TIP]
> <b>Tip</b>:<br>The <b>Schedule Posting Time</b> field is only visible when you specify <i>Schedule Post</i> in the <b>Order Processing</b> field.

### To view the Batch Post Sales Orders job

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Synchronization</b> > <b>Job Queue Entry</b>.

## See also

[Orders](orders.md)  
[Automatic synchronization](automatic-synchronization.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20order-processing)
