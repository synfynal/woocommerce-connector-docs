---
title: Pull item data from the webstore
description: Learn how to configure the pull of item data from your webstore to Business Central.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Pull item data from the webstore

You can configure the WooCommerce Connector to control how item data is pulled from your webstore into Business Central during an item synchronization.

## To configure how item data is pulled from your webstore to Business Central during an item synchronization

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If you have multiple setups, select the one that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Synchronization</b> FastTab, under <b>Pull Data From Webstore</b>, in <b>Items</b>, specify one of the following options:
     - <i>All</i> : Synchronize all item records from your webstore to Business Central.
     - <i>Published Only</i> : Synchronize item records from your webstore to Business Central where the item has a <b>Status</b> of <i>Publish</i> in WooCommerce.
     - <i>Mapped Only</i> : Synchronize item records from your webstore to Business Central where the item has the <b>Webstore Item</b> checkbox selected in Business Central.
     - <i>None</i> : Do not synchronize item records from your webstore to Business Central.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/pull-webstore-items/pull-webstore-items.html" title="Pull item data from the webstore"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## Related information

[Items](items.md)  
[Pull synchronization start date for items](pull-synchronization-start-date-for-items.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20pull-webstore-items)
