# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **StacksPay documentation site** built with Astro and Starlight. It serves as a comprehensive documentation hub for the StacksPay payment protocol, covering user guides, merchant integration, developer documentation, and technical specifications.

## Architecture

- **Framework**: Astro 5.6.1 with Starlight documentation framework
- **Content System**: Markdoc for rich documentation content with custom components
- **Structure**: Multi-language documentation site with organized sections for different user types
- **Content Location**: All documentation files are in `src/content/docs/` organized by language (en, de, es, fr, pt, pt-BR)

## Key Commands

```bash
# Development
npm run dev          # Start development server at localhost:4321
npm run start        # Alias for dev

# Build
npm run build        # Build production site to ./dist/

# Preview
npm run preview      # Preview production build locally

# Astro CLI
npm run astro        # Run Astro CLI commands
```

## Documentation Structure

The site is organized into main sections defined in `astro.config.mjs`:

- **Getting Started**: Introduction, quick start, why StacksPay
- **For Users**: Making payments, supported wallets, security, troubleshooting
- **For Merchants**: Getting started, accepting payments, payment flow, order management
- **For Developers**: Quick start, API reference, SDK documentation, integration examples
- **Technical Specification**: Protocol overview, message format, URI scheme, security model
- **Resources**: FAQ, tools, community, roadmap

## Content Management

- **File Types**: `.md`, `.mdx`, and `.mdoc` files supported
- **Markdoc Components**: Custom components available via `{% component %}` syntax
- **Assets**: Images stored in `src/assets/` and referenced with relative links
- **Static Files**: Favicon and other static assets in `public/`

## Configuration Files

- `astro.config.mjs`: Main Astro configuration with Starlight setup and sidebar navigation
- `markdoc.config.mjs`: Markdoc configuration extending Starlight's Markdoc integration
- `src/content.config.ts`: Content collections configuration using Starlight's docs loader

## Multi-language Support

The documentation supports multiple languages with content organized in language-specific folders:
- `en/` - English (primary)
- `de/` - German
- `es/` - Spanish  
- `fr/` - French
- `pt/` - Portuguese
- `pt-BR/` - Brazilian Portuguese

When adding new content, ensure translations are added to all relevant language folders to maintain consistency across the documentation.