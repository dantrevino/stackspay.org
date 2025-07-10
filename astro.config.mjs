// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [
    markdoc(),
    starlight({
      title: 'StacksPay',
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
        },
        'pt-BR': {
          label: 'Português (Brasil)',
        },
        // 'es': {
        //   label: 'Español',
        //   dir: 'ltr',
        // },
        // 'fr': {
        //   label: 'Français',
        //   dir: 'ltr',
        // },
        // de: {
        //   label: 'Deutsch',
        //   dir: 'ltr',
        // },
        // 'pt': {
        //   label: 'Português',
        //   dir: 'ltr',
        // },
        // 'jp': {
        //   label: '日本語',
        //   dir: 'ltr',
        // },
        // 'ko': {
        //   label: '한국어',
        // },
        // 'zh': {
        //   label: '中文',
        // },
        // 'zh-tw': {
        //   label: '繁體中文',
        // },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/dantrevino/stackspay.org',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/dantrevino/stackspay-js',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/pHQvtJU7Jc',
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'What is StacksPay?', slug: 'introduction' },
            { label: 'Quick Start', slug: 'quick-start' },
            { label: 'Why StacksPay?', slug: 'why-stackspay' },
          ],
        },
        {
          label: 'For Users',
          items: [
            { label: 'Making Payments', slug: 'users/making-payments' },
            {
              label: 'Supported Wallets & Apps',
              slug: 'users/supported-wallets',
            },
            { label: 'Security & Safety', slug: 'users/security' },
            { label: 'Troubleshooting', slug: 'users/troubleshooting' },
          ],
        },
        {
          label: 'For Merchants',
          items: [
            { label: 'Getting Started', slug: 'merchants/getting-started' },
            {
              label: 'Accepting Payments',
              slug: 'merchants/accepting-payments',
            },
            { label: 'Payment Flow', slug: 'merchants/payment-flow' },
            {
              label: 'Order Management',
              slug: 'merchants/order-management',
            },
            {
              label: 'Business Benefits',
              slug: 'merchants/business-benefits',
            },
          ],
        },
        {
          label: 'For Developers',
          items: [
            { label: 'Quick Start', slug: 'developers/quick-start' },
            { label: 'API Reference', slug: 'developers/api-reference' },
            { label: 'SDK Documentation', slug: 'developers/sdk' },
            { label: 'Integration Examples', slug: 'developers/examples' },
            { label: 'Testing & Debugging', slug: 'developers/testing' },
            { label: 'Specification', slug: 'developers/specification' },
          ],
        },
        {
          label: 'Technical Specification',
          items: [
            { label: 'Protocol Overview', slug: 'spec/protocol' },
            { label: 'Message Format', slug: 'spec/message-format' },
            { label: 'URI Scheme', slug: 'spec/uri-scheme' },
            { label: 'Security Model', slug: 'spec/security' },
            { label: 'Implementation Notes', slug: 'spec/implementation' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'FAQ', slug: 'resources/faq' },
            { label: 'Tools & Libraries', slug: 'resources/tools' },
            { label: 'Community', slug: 'resources/community' },
            { label: 'Roadmap', slug: 'resources/roadmap' },
          ],
        },
      ],
    }),
  ],
});
