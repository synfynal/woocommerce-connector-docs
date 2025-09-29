# WooCommerce Connector Documentation

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/synfynal/woocommerce-connector-docs)
[![Documentation](https://img.shields.io/badge/docs-live-blue)](https://help.synfynal.com)

> Comprehensive documentation for the WooCommerce Connector - seamlessly integrate WooCommerce with Microsoft Dynamics 365 Business Central

## Overview

This repository contains the complete documentation site for the **WooCommerce Connector**, a powerful integration solution that bridges WooCommerce webstores with Microsoft Dynamics 365 Business Central. The documentation provides detailed setup instructions, configuration guides, and feature explanations to help users maximize their e-commerce and ERP integration.

The WooCommerce Connector seamlessly integrates a WooCommerce webstore with Microsoft Dynamics 365 Business Central, combining the strengths of both platforms:
- **WooCommerce**: An open-source e-commerce solution powering over 4 million online stores
- **Microsoft Dynamics 365 Business Central**: A cloud-based ERP trusted by more than 40,000 small and midsize businesses

## Features

The documentation covers all aspects of the WooCommerce Connector, including:

- **Getting Started** - Installation from Microsoft AppSource and initial setup
- **Core Synchronization** - Orders, items, customers, inventory, and pricing
- **Advanced Features** - Item variants, attributes, categories, and coupons  
- **Image Management** - Product image synchronization between platforms
- **Customer Management** - Customer mapping and specific pricing configurations
- **System Administration** - API configuration, troubleshooting, and maintenance
- **Additional Modules** - Paid features and extensions

## Documentation Structure

```
docs/
├── articles/           # Main documentation content
├── styles/            # Custom CSS styling
└── media/             # Images and assets

Source Files/
├── articles/          # Markdown source files
├── docfx.json        # DocFX configuration
└── toc.yml           # Table of contents

Supporting Files/
├── WooCommerce Connector Capabilities Guide.pdf
└── Additional resources and templates
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [DocFX](https://dotnet.github.io/docfx/) for documentation generation
- [Git](https://git-scm.com/) for version control

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/synfynal/woocommerce-connector-docs.git
   cd woocommerce-connector-docs
   ```

2. **Navigate to source files**
   ```bash
   cd "Source Files"
   ```

3. **Build the documentation**
   ```bash
   docfx build docfx.json
   ```

4. **Serve locally**
   ```bash
   docfx serve docs
   ```

The documentation will be available at `http://localhost:8080`.

## Documentation Workflow

### Writing Documentation

1. Create or edit Markdown files in the `Source Files/articles/` directory
2. Update the table of contents in `Source Files/toc.yml` if adding new articles
3. Build and test locally using DocFX
4. Commit changes and push to the repository

### Content Guidelines

- Use clear, concise language suitable for business users
- Include step-by-step procedures with screenshots where helpful
- Follow the established document structure and metadata format
- Test all procedures in both sandbox and production environments

### Adding New Articles

Each article should include proper frontmatter:

```yaml
---
title: Article Title
description: Brief description of the article content
author: Author Name
product: WooCommerce Connector Help
version: 1.0
audience: external
localization differences: No
date: MM/DD/YYYY
---
```

## Key Documentation Topics

### Setup and Configuration
- Installing from Microsoft AppSource
- API consumer key and secret setup
- Webstore connection configuration
- Default templates and mappings

### Synchronization Features
- **Items & Variants** - Product catalog management
- **Orders** - Sales order processing and fulfillment
- **Customers** - Customer data synchronization
- **Inventory** - Stock level management
- **Pricing** - Price synchronization and customer-specific pricing

### Advanced Capabilities
- **Item Attributes** - Product characteristic management
- **Image Synchronization** - Product image management (premium feature)
- **Metadata Synchronization** - Custom field mapping
- **Automatic Synchronization** - Scheduled data updates

### System Management
- Troubleshooting common issues
- Performance optimization
- Security considerations
- Version compatibility

## Support and Resources

- **Product Repository**: [WooCommerce Connector](https://github.com/synfynal/woocommerce-connector)
- **Live Documentation**: [help.synfynal.com](https://help.synfynal.com)
- **Capabilities Guide**: [Download PDF](https://help.synfynal.com/articles/media/woocommerce-connector-capabilities-guide.pdf)
- **Microsoft AppSource**: [Install WooCommerce Connector](https://appsource.microsoft.com)
- **Support Email**: [srdjan@synfynal.com](mailto:srdjan@synfynal.com)

## System Requirements

### Microsoft Dynamics 365 Business Central
- **Editions**: Essential and Premium editions
- **Versions**: Latest version (both on-premises and cloud)
- **Deployment**: Online or on-premises environments

### WooCommerce
- **Version**: 3.5 or later
- **Platform**: WordPress 4.4 or later
- **API**: WooCommerce REST API access required

## Contributing

We welcome contributions to improve the documentation:

1. Fork the repository
2. Create a feature branch for your changes
3. Make your updates following our content guidelines
4. Test the documentation build locally
5. Submit a pull request with a clear description

> [!NOTE]
> When contributing, ensure all new content follows the established structure and includes proper metadata. Test changes in both sandbox and production environments when possible.

## Build and Deployment

The documentation is built using DocFX and deployed automatically. The build process:

1. Processes Markdown files in `Source Files/articles/`
2. Applies custom styling and templates
3. Generates the static documentation site in `docs/`
4. Deploys to the live documentation site

---

**Synfynal** - Bridging e-commerce and ERP for seamless business operations
