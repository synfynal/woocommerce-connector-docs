---
title: Webstore list cache time
description: Learn how to configure your webstore list cache time.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 12/01/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes webstore woocommerce -->

# Webstore list cache time

To reduce the number of times that the WooCommerce Connector must request data from WooCommerce, the WooCommerce Connector stores records in a Business Central cache. For example, when mapping items, the WooCommerce Connector loads item records from your webstore into the cache. This design allows the mapping to be completed with one request to WooCommerce instead of having to send a request to WooCommerce for each item.

To maintain the size of the cache, the WooCommerce Connector provides the capability for you to configure how long the WooCommerce Connector is to keep the records in the cache. 

## To configure your webstore list cache time

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. In the <b>Synchronization</b> section, in <b>Webstore List Cache Time</b>, specify the number of minutes that you want the WooCommerce Connector to keep the records in the cache, for example, for 60 minutes, specify <i>60</i>.

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20webstore-list-cache-time)
