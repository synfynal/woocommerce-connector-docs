---
title: Pull synchronization start date for items
description: Learn how to configure the pull synchronization start date for items.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 11/24/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Pull synchronization start date for items

After the initial synchronization between Business Central and your webstore, the WooCommerce Connector automatically populates the pull synchronization start date for items with the current date and time. For subsequent synchronizations, the WooCommerce Connector references this date and ensures that only new and modified items are synchronized.

If required, you can update the pull synchronization start date for items. This feature is useful when you must synchronize all items, including older items and items that may have been missed during previous synchronizations. 

You can only update the pull synchronization start date for items when on the <b>Synchronization</b> FastTab, under <b>Pull Data From Webstore</b>, in <b>Items</b>, the value is not equal to <i>None</i>.

## To configure the pull synchronization start date for items

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Synchronization</b> FastTab, under <b>Pull Synchronization Start Date</b>, in <b>Item</b>, enter the date that you want the WooCommerce Connector to use for the next item synchronization between Business Central and your webstore.

## Related information

[Pull item data from the webstore](pull-webstore-items.md)  
[Items](items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20pull-synchronization-start-date-for-items)
