---
title: Metadata synchronization
description: Learn about metadata synchronization.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 2/1/2025
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes woocommerce webstore biginteger autoplay -->

# Metadata synchronization

The WooCommerce Connector provides tha capability for you to synchronize selected metadata values from a response into a specific field in Business Central. The feature requires you to identify a metadata key so that the WooCommerce Connector can determine which values are to be synchronized between Business Central and your webstore.

> [!NOTE]
> <b>Note</b>:<br>The metadata synchronization feature is only available as a separately purchased per tenant extension. For more information, go to [Additional paid features](additional-paid-features.md).

## To set up metadata mapping

1. Choose ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do"), enter <i>woocommerce connector setup</i>, and then choose the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. On the action bar, choose <b>Data</b> > <b>Metadata Mapping Setup</b>.

   The <b>Metadata Mapping Setup</b> page opens.

1. For each metadata mapping record that you want to set up, perform the following steps:
   <ol type="a">
    <li>On the action bar, choose <b>New</b>.<br>
     <p>A new row appears.</p></li>
    <li>In <b>Record Type</b>, specify <i>Sales Order</i>.<br>
     <p>Currently, <i>Sales Order</i> is the only supported record type.</li>
    <li>In <b>Field Name</b>, specify the field for which you want the WooCommerce Connector to synchronize the value from the response.<br>
      <p>You can only specify a field once per record type.</p></li>
    <li>In <b>Metadata Key</b>, specify the metadata key that identifies the exact metadata value from the response that the WooCommerce Connector is to use to populate the specified field.</li>
    <li>In <b>Default Value</b>, specify the default value to use when the WooCommerce Connector cannot find the metadata with the specified metadata key.<br>
     <p><b>Warning</b>: The value may be validated in Business Central. To ensure successful synchronization, provide all prerequisites for validating the specified field.</p></li>
    <li>To enable this record for use, select the <b>Enable</b> checkbox.</li>
   </ol>

## Supported field types

For a successful synchronization, ensure that the response from WooCommerce matches the examples in the following table.

| Data Type | Webstore Example | Response Example |
|---|---|---|
| Big Integer | 18446744073709551 | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105288,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "biginteger_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "18446744073709551"<br>} |
| Boolean | true/false | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105272,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "boolean_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "true"<br>} |
| Code | code value | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105274,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "code_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "code value"<br>} |
| Date | 2025-10-10 | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105267,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "date_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "2025-10-10"<br>} |
| DateTime | 2025-10-10T15:24:13 | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105268,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "datetime_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "2025-10-10T15:24:13"<br>} |
| Decimal | 4562.55 | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105270,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "decimal_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "4562.55"<br>} |
| Integer | 1998 | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105269,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "integer_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": "1998"<br>} |
| Text | text value | {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 105271,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"key": "text_value",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value":"text_value"<br>} |
| Enum/Option | any text | any text |

> [!NOTE]
> <b>Note</b>:<br>For the <b>Data Type</b> of <i>Enum/Option</i>, ensure that the value in the response matches the enum/option caption in Business Central.

## Demo video

<iframe width="350" height="197" loading="lazy" src="media/videos/metadata-synchronization/metadata-synchronization.html" title="Metadata synchronization"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:1px solid; border-color:#0a0a0a;box-shadow:5px 5px 5px -5px #0a0a0a;border-radius:7px;margin-block-start:1em"></iframe>

## See also

[Additional paid features](additional-paid-features.md)

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20metadata-synchronization)
