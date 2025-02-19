---
title: Pull webstore items
description: Learn how to configure the pull of item data from your webstore to Business Central.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce autoplay -->

# Pull webstore items

You can configure how the WooCommerce Connector is to pull item data from your webstore into Business Central.

## To set up the pull of item data from your webstore to Business Central

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the <b>Synchronization</b> FastTab, under <b>Pull Data From Webstore</b>, in <b>Items</b>, specify one of the following options:
     - <i>All</i> : The WooCommerce Connector synchronizes all item records from your webstore to Business Central.
     - <i>Published Only</i> : The WooCommerce Connector synchronizes item records from your webstore to Business Central where the item has a <b>Status</b> of <i>Publish</i> in WooCommerce.
     - <i>Mapped Only</i> : The WooCommerce Connector synchronizes item records from your webstore to Business Central where the item has the <b>Webstore Item</b> checkbox selected in Business Central.
     - <i>None</i> : The WooCommerce Connector does not synchronize item records from your webstore to Business Central.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/pull-webstore-items/pull-webstore-items.html" title="Pull webstore items"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Items](items.md)  
[Item pull synchronization start date](item-pull-synchronization-start-date.md)  

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20pull-webstore-items)
