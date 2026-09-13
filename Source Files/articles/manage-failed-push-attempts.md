---
title: Manage failed push attempts
description: Learn how to manage records with repeated push failures.
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 09/13/2026
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD060 -->
<!--// cspell:ignore markdownlint webstore woocommerce webstores -->

# Manage failed push attempts

The WooCommerce Connector can place records on hold when scheduled synchronization repeatedly fails with the same error.

A record that is placed on hold is not a connector error. This status indicates that Business Central and the webstore have diverged for the record and that the data might need to be corrected. To learn more about the reason for the failure, review <b>Last Sync. Error</b> for the record.

## Configure the maximum number of push attempts

The <b>Max. No. of Attempts to Push</b> setting determines how many consecutive scheduled push attempts can fail with the same error before the WooCommerce Connector places a record on hold.

The setting applies separately to each webstore. The default value is <i>3</i>. A value of <i>0</i> prevents the WooCommerce Connector from placing records on hold.

### To configure the maximum number of push attempts

1. Select <b>Search</b> (<kbd>Alt</kbd>+<kbd>Q</kbd>) <img src="media/ui-search/search_small.png" alt="Tell me what you want to do">, enter <i>woocommerce connector setup</i>, and then select the related link.

   The <b>WooCommerce Connector Setup</b> page opens.

1. If multiple setups exist, select the setup that you want to configure, and then on the action bar, select <b>Manage</b> > <b>Edit</b>.

1. On the <b>General</b> FastTab, in the <b>Synchronization</b> section, in <b>Max. No. of Attempts to Push</b>, enter the maximum number of consecutive failed push attempts.

   Enter <i>0</i> to prevent records from being placed on hold.

> [!NOTE]
> <b>Note</b>:<br>Existing webstore setups are assigned a value of <i>3</i> when the WooCommerce Connector is upgraded. To continue using unlimited push attempts, set <b>Max. No. of Attempts to Push</b> to <i>0</i>.

## How records are placed on hold

During a scheduled synchronization, the WooCommerce Connector tracks consecutive push failures for each record.

The WooCommerce Connector applies the following rules to failed pushes:

- A push that fails with the same error as the previous attempt increases <b>No. of Failed Push Attempts</b> by one.
- When <b>No. of Failed Push Attempts</b> reaches <b>Max. No. of Attempts to Push</b>, the WooCommerce Connector selects the <b>Push On Hold</b> checkbox.
- A push that fails with a different error resets <b>No. of Failed Push Attempts</b> to <i>1</i>.
- A record with <b>Push On Hold</b> selected is not attempted during subsequent scheduled synchronization runs.

For example, when <b>Max. No. of Attempts to Push</b> is set to <i>3</i>, a record must fail with the same error on three consecutive scheduled runs before the WooCommerce Connector places the record on hold.

## Records affected by push holds

The push hold feature applies to records that the WooCommerce Connector synchronizes from Business Central to the webstore.

The feature applies to the following records:

- Items
- Item variants
- Item categories
- Item attributes
- Item attribute values
- Customers
- Coupons

The feature does not apply to sales orders. Synchronizing sales orders from the webstore to Business Central is unaffected, and pushing order updates back to the webstore is not currently covered by push holds.

## View records on hold

The <b>Push On Hold</b> and <b>No. of Failed Push Attempts</b> fields show the push status for each record on the Webstore Connectors pages.

The following Webstore Connectors pages show these fields:

- <b>Item Webstore Connectors</b>
- <b>Item Variant Webstore Connectors</b>
- <b>Item Category Webstore Connectors</b>
- <b>Item Attribute Webstore Connectors</b>
- <b>Item Attribute Value Webstore Connectors</b>
- <b>Customer Webstore Connectors</b>
- <b>Coupon Webstore Connectors</b>

The <b>Push On Hold</b> field is also available on the following pages:

- <b>Webstore Item Mapping</b>
- <b>Webstore Customer Mapping</b>
- <b>Webstore Item Variant Mapping</b>
- <b>Webstore Item Category Mapping</b>
- <b>Webstore Item Attribute Mapping</b>
- <b>Webstore Item Attribute Value Mapping</b>
- <b>Coupons</b>

To identify the reason for a push failure, review <b>Last Sync. Error</b> for the record.

## Manual synchronization

Manual synchronization is not blocked by a push hold.

When you manually synchronize a record, the WooCommerce Connector pushes the record even when <b>Push On Hold</b> is selected.

The following manual actions can push a record that is on hold:

- <b>Synchronize</b>
- <b>Synchronize Selected</b>
- Push actions on the item, item variant, item category, item attribute, customer, and coupon pages

A failed manual push updates <b>Last Sync. Error</b>, but does not change <b>No. of Failed Push Attempts</b> or <b>Push On Hold</b>.

## Release a push hold

You can release a push hold by manually synchronizing the record or by clearing the <b>Push On Hold</b> checkbox.

A successful synchronization clears the push hold and resets <b>No. of Failed Push Attempts</b> to <i>0</i>. 

After a successful manual synchronization, the record can be processed normally during the next scheduled synchronization run.

### To manually release a push hold

1. Open the applicable Webstore Connectors page.

1. Locate the record with <b>Push On Hold</b> selected.

1. Clear <b>Push On Hold</b>.

   The WooCommerce Connector resets <b>No. of Failed Push Attempts</b> to <i>0</i>.

## Scheduled synchronization of records on hold

During a scheduled synchronization run, the WooCommerce Connector skips records that have <b>Push On Hold</b> selected.

When a record is skipped, the WooCommerce Connector does not update the record's synchronization information or create a failed Activity Log entry for the skipped record.

A push hold applies to a record for a specific webstore. The same record can continue to synchronize with other webstores where the record is not on hold.

A push hold affects push synchronization only. Pull synchronization can still update a record that is on hold.

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20manage-failed-push-attempts)
