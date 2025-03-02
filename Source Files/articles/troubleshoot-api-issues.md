---
title: Troubleshoot API issues
description: 
author: Bryon Burke
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: 11/24/2024
---

<!-- markdownlint-disable MD006 MD007 MD009 MD024 MD025 MD033 MD001 -->
<!--// cspell:ignore  markdownlint allowfullscreen keyframes -->

# Troubleshoot API issues

The WooCommerce site may block traffic from Business Central due to various reasons. The following sections describe some typical causes and workarounds.

### Third party software

A third party software may cause WooCommerce to block traffic from Business Central.

#### Workaround

Review the 3rd party software documentation, and then update your environment configuration as necessary.

### Blacklist configuration

The WooCommerce site may block traffic from Business Central based on a blacklist configuration.

#### Workaround

Review your environment blacklist configuration.

### Incorrect permissions

The WooCommerce site may block traffic from Business Central due to incorrect permissions.

#### Workaround

Generate a new consumer key and secret. When you generate the consumer key and secret, ensure that you grant read/write access.

### Incorrect .htaccess file configuration

The WooCommerce site is blocking traffic from Business Central because there is a problem with the .htaccess file.

#### Workarounds

To resolve this issue, perform the following steps:

1. Add the following code to the .htaccess file:

   <div class="pre">
   <div id="copy_01">
    <pre>
    &lt;IfModule mod_fcgid.c&gt;
     RewriteCond %{HTTP:Authorization} .
     RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
    &lt;/IfModule&gt;
   </pre>
   </div>
   <button style="color:#000;background-color:#4be19b;font-family:Poppins-Extralight, Poppins, sans-serif;border:none;border-radius:4px;padding:5px;" id="my_button" class="btn btn-primary" onclick="copyToClipboard_div_copy_01()">Copy</button>
   </div>

   <script>
    function copyToClipboard_div_copy_01() {
      let textarea = document.createElement('textarea')
      textarea.id = 't'
      textarea.style.height = 0
      document.body.appendChild(textarea)
      textarea.value = document.getElementById("copy_01").innerText
      let selector = document.querySelector('#t')
      selector.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
   </script>

1. Add the following code to the httpd.conf file:

   <div class="pre">
   <div id="copy_02">
   <pre>
   SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
   </pre>
   </div>
   <button style="color:#000;background-color:#4be19b;font-family:Poppins-Extralight, Poppins, sans-serif;border:none;border-radius:4px;padding:5px;" id="my_button" class="btn btn-primary" onclick="copyToClipboard_div_copy_01()">Copy</button>
   </div>

   <script>
    function copyToClipboard_div_copy_02() {
      let textarea = document.createElement('textarea')
      textarea.id = 't'
      textarea.style.height = 0
      document.body.appendChild(textarea)
      textarea.value = document.getElementById("copy_02").innerText
      let selector = document.querySelector('#t')
      selector.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
   </script>

1. To apply the new changes, restart Apache.

## Feedback

To send feedback about this page, select the following link:

[srdjan@synfynal.com](mailto:srdjan@synfynal.com?subject=Documentation%20Feedback%20Product%20Docs:%20troubleshoot-api-issues)
