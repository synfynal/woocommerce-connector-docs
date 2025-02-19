---
title: Item marketing text
description: Learn about item marketing text.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore autoplay -->

# Item marketing text

Business Central provides the capability for you to use Microsoft's AI assistant Copilot to suggest item marketing text based on the information from within Business Central. Copilot is designed to save you time and help you write creative and engaging text that reflects your brand and is consistent across your product line. 

Copilot bases the suggested text on the following information:

- Attributes defined for the item, for example, the description, item category, color, dimensions, and material.
- Selectable style preferences like tone of voice, format, and length.

After you have created item marketing text, you can configure the WooCommerce Connector to push the <b>Marketing Text</b> from Business Central to WooCommerce to be used in the item's <b>Product Long Description</b> or <b>Product Short Description</b> in your webstore.

## To draft item marketing text with Copilot

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>items</i>, and then choose the related link.

   The <b>Items</b> page opens.

1. Select the item for which you want to have Copilot suggest item marketing text, and then on the action bar choose <b>Manage</b> > <b>View</b>.

   The <b>Item Card</b> page opens.

1. In the FactBox pane, in <b>Marketing Text</b>, choose <b>Draft with Copilot</b>.

   Copilot generates the suggested marketing text.

1. To save the generated text, choose <b>Keep it</b>.

   For more information about adding marketing text to items, see <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/item-marketing-text" target="_blank">Add marketing text to items</a>.

## Configure whether to use an item's marketing text as the Product Long Description or Product Short Description in your webstore

You can configure whether to use an item's <b>Marketing Text</b> from Business Central as the <b>Product Long Description</b> or <b>Product Short Description</b> in your webstore.

### To configure an item's marketing text as the Product Long Description or Product Short Description in your webstore

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. In <b>Marketing Text</b>, specify one of the following options:
     - <i>None</i> : Do not use this feature.
     - <i>Product Long Description</i> : During synchronization, the WooCommerce Connector pushes the <b>Marketing Text</b> from Business Central to WooCommerce to be used in the item's <b>Product Long Description</b> in your webstore.
     - <i>Product Short Description</i> : During synchronization, the WooCommerce Connector pushes the <b>Marketing Text</b> from Business Central to WooCommerce to be used in the item's <b>Product Short Description</b> in your webstore.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/item-marketing-text/item-marketing-text.html" title="Item marketing text"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Items](items.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20item-marketing-text)
