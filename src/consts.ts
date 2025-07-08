export const SITE = {
  title: 'StacksPay',
  description: 'StacksPay: A Payment Request Standard for Stacks Blockchain Payments',
  defaultLanguage: 'en-us'
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'default-og-image.png',
    alt:
      'StacksPay logo,'
  },
  twitter: 'boom_wallet'
}

export const KNOWN_LANGUAGES = {
  Deutsch: 'de',
  English: 'en',
  Español: 'es',
  Português: 'pt',
  'Português (Brasil)': 'pt-BR',
  Français: 'fr',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const EDIT_URL = `https://github.com/dantrevino/stacks-pay/tree/main`

export const COMMUNITY_INVITE_URL = `https://discord.gg/CwguEnbJAF`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  en: {
    'Getting Started': [
      { text: 'What is StacksPay?', link: 'en/introduction' },
      { text: 'Quick Start', link: 'en/quick-start' },
      { text: 'Why StacksPay?', link: 'en/why-stackspay' }
    ],
    'For Users': [
      { text: 'Making Payments', link: 'en/users/making-payments' },
      { text: 'Supported Wallets', link: 'en/users/supported-wallets' },
      { text: 'Security & Safety', link: 'en/users/security' },
      { text: 'Troubleshooting', link: 'en/users/troubleshooting' }
    ],
    'For Merchants': [
      { text: 'Getting Started', link: 'en/merchants/getting-started' },
      { text: 'Accepting Payments', link: 'en/merchants/accepting-payments' },
      { text: 'Payment Flow', link: 'en/merchants/payment-flow' },
      { text: 'Order Management', link: 'en/merchants/order-management' },
      { text: 'Business Benefits', link: 'en/merchants/business-benefits' }
    ],
    'For Developers': [
      { text: 'Quick Start', link: 'en/developers/quick-start' },
      { text: 'API Reference', link: 'en/developers/api-reference' },
      { text: 'SDK Documentation', link: 'en/developers/sdk' },
      { text: 'Integration Examples', link: 'en/developers/examples' },
      { text: 'Testing & Debugging', link: 'en/developers/testing' }
    ],
    'Technical Specification': [
      { text: 'Protocol Overview', link: 'en/spec/protocol' },
      { text: 'Message Format', link: 'en/spec/message-format' },
      { text: 'URI Scheme', link: 'en/spec/uri-scheme' },
      { text: 'Security Model', link: 'en/spec/security' },
      { text: 'Implementation Notes', link: 'en/spec/implementation' }
    ],
    'Resources': [
      { text: 'FAQ', link: 'en/resources/faq' },
      { text: 'Tools & Libraries', link: 'en/resources/tools' },
      { text: 'Community', link: 'en/resources/community' },
      { text: 'Roadmap', link: 'en/resources/roadmap' }
    ]
  },
  de: {
    'Erste Schritte': [
      { text: 'Was ist StacksPay?', link: 'de/introduction' },
      { text: 'Schnellstart', link: 'de/quick-start' },
      { text: 'Warum StacksPay?', link: 'de/why-stackspay' }
    ],
    'Für Benutzer': [
      { text: 'Zahlungen tätigen', link: 'de/users/making-payments' },
      { text: 'Unterstützte Wallets', link: 'de/users/supported-wallets' },
      { text: 'Sicherheit', link: 'de/users/security' },
      { text: 'Fehlerbehebung', link: 'de/users/troubleshooting' }
    ],
    'Für Händler': [
      { text: 'Erste Schritte', link: 'de/merchants/getting-started' },
      { text: 'Zahlungen akzeptieren', link: 'de/merchants/accepting-payments' },
      { text: 'Zahlungsablauf', link: 'de/merchants/payment-flow' },
      { text: 'Bestellverwaltung', link: 'de/merchants/order-management' },
      { text: 'Geschäftsvorteile', link: 'de/merchants/business-benefits' }
    ],
    'Für Entwickler': [
      { text: 'Schnellstart', link: 'de/developers/quick-start' },
      { text: 'API-Referenz', link: 'de/developers/api-reference' },
      { text: 'SDK-Dokumentation', link: 'de/developers/sdk' },
      { text: 'Integrationsbeispiele', link: 'de/developers/examples' },
      { text: 'Testen & Debuggen', link: 'de/developers/testing' }
    ],
    'Technische Spezifikation': [
      { text: 'Protokollübersicht', link: 'de/spec/protocol' },
      { text: 'Nachrichtenformat', link: 'de/spec/message-format' },
      { text: 'URI-Schema', link: 'de/spec/uri-scheme' },
      { text: 'Sicherheitsmodell', link: 'de/spec/security' },
      { text: 'Implementierungshinweise', link: 'de/spec/implementation' }
    ],
    'Ressourcen': [
      { text: 'FAQ', link: 'de/resources/faq' },
      { text: 'Tools & Bibliotheken', link: 'de/resources/tools' },
      { text: 'Community', link: 'de/resources/community' },
      { text: 'Roadmap', link: 'de/resources/roadmap' }
    ]
  },
  es: {
    'Primeros Pasos': [
      { text: '¿Qué es StacksPay?', link: 'es/introduction' },
      { text: 'Inicio Rápido', link: 'es/quick-start' },
      { text: '¿Por qué StacksPay?', link: 'es/why-stackspay' }
    ],
    'Para Usuarios': [
      { text: 'Realizar Pagos', link: 'es/users/making-payments' },
      { text: 'Wallets Compatibles', link: 'es/users/supported-wallets' },
      { text: 'Seguridad', link: 'es/users/security' },
      { text: 'Solución de Problemas', link: 'es/users/troubleshooting' }
    ],
    'Para Comerciantes': [
      { text: 'Primeros Pasos', link: 'es/merchants/getting-started' },
      { text: 'Aceptar Pagos', link: 'es/merchants/accepting-payments' },
      { text: 'Flujo de Pago', link: 'es/merchants/payment-flow' },
      { text: 'Gestión de Pedidos', link: 'es/merchants/order-management' },
      { text: 'Beneficios Comerciales', link: 'es/merchants/business-benefits' }
    ],
    'Para Desarrolladores': [
      { text: 'Inicio Rápido', link: 'es/developers/quick-start' },
      { text: 'Referencia API', link: 'es/developers/api-reference' },
      { text: 'Documentación SDK', link: 'es/developers/sdk' },
      { text: 'Ejemplos de Integración', link: 'es/developers/examples' },
      { text: 'Pruebas y Depuración', link: 'es/developers/testing' }
    ],
    'Especificación Técnica': [
      { text: 'Resumen del Protocolo', link: 'es/spec/protocol' },
      { text: 'Formato de Mensaje', link: 'es/spec/message-format' },
      { text: 'Esquema URI', link: 'es/spec/uri-scheme' },
      { text: 'Modelo de Seguridad', link: 'es/spec/security' },
      { text: 'Notas de Implementación', link: 'es/spec/implementation' }
    ],
    'Recursos': [
      { text: 'FAQ', link: 'es/resources/faq' },
      { text: 'Herramientas y Librerías', link: 'es/resources/tools' },
      { text: 'Comunidad', link: 'es/resources/community' },
      { text: 'Hoja de Ruta', link: 'es/resources/roadmap' }
    ]
  },
  pt: {
    'Primeiros Passos': [
      { text: 'O que é StacksPay?', link: 'pt/introduction' },
      { text: 'Início Rápido', link: 'pt/quick-start' },
      { text: 'Por que StacksPay?', link: 'pt/why-stackspay' }
    ],
    'Para Usuários': [
      { text: 'Fazer Pagamentos', link: 'pt/users/making-payments' },
      { text: 'Carteiras Suportadas', link: 'pt/users/supported-wallets' },
      { text: 'Segurança', link: 'pt/users/security' },
      { text: 'Solução de Problemas', link: 'pt/users/troubleshooting' }
    ],
    'Para Comerciantes': [
      { text: 'Primeiros Passos', link: 'pt/merchants/getting-started' },
      { text: 'Aceitar Pagamentos', link: 'pt/merchants/accepting-payments' },
      { text: 'Fluxo de Pagamento', link: 'pt/merchants/payment-flow' },
      { text: 'Gestão de Pedidos', link: 'pt/merchants/order-management' },
      { text: 'Benefícios Comerciais', link: 'pt/merchants/business-benefits' }
    ],
    'Para Desenvolvedores': [
      { text: 'Início Rápido', link: 'pt/developers/quick-start' },
      { text: 'Referência API', link: 'pt/developers/api-reference' },
      { text: 'Documentação SDK', link: 'pt/developers/sdk' },
      { text: 'Exemplos de Integração', link: 'pt/developers/examples' },
      { text: 'Testes e Debug', link: 'pt/developers/testing' }
    ],
    'Especificação Técnica': [
      { text: 'Visão Geral do Protocolo', link: 'pt/spec/protocol' },
      { text: 'Formato de Mensagem', link: 'pt/spec/message-format' },
      { text: 'Esquema URI', link: 'pt/spec/uri-scheme' },
      { text: 'Modelo de Segurança', link: 'pt/spec/security' },
      { text: 'Notas de Implementação', link: 'pt/spec/implementation' }
    ],
    'Recursos': [
      { text: 'FAQ', link: 'pt/resources/faq' },
      { text: 'Ferramentas e Bibliotecas', link: 'pt/resources/tools' },
      { text: 'Comunidade', link: 'pt/resources/community' },
      { text: 'Roadmap', link: 'pt/resources/roadmap' }
    ]
  },
  'pt-BR': {
    'Primeiros Passos': [
      { text: 'O que é StacksPay?', link: 'pt-BR/introduction' },
      { text: 'Início Rápido', link: 'pt-BR/quick-start' },
      { text: 'Por que StacksPay?', link: 'pt-BR/why-stackspay' }
    ],
    'Para Usuários': [
      { text: 'Fazer Pagamentos', link: 'pt-BR/users/making-payments' },
      { text: 'Carteiras Suportadas', link: 'pt-BR/users/supported-wallets' },
      { text: 'Segurança', link: 'pt-BR/users/security' },
      { text: 'Solução de Problemas', link: 'pt-BR/users/troubleshooting' }
    ],
    'Para Comerciantes': [
      { text: 'Primeiros Passos', link: 'pt-BR/merchants/getting-started' },
      { text: 'Aceitar Pagamentos', link: 'pt-BR/merchants/accepting-payments' },
      { text: 'Fluxo de Pagamento', link: 'pt-BR/merchants/payment-flow' },
      { text: 'Gestão de Pedidos', link: 'pt-BR/merchants/order-management' },
      { text: 'Benefícios Comerciais', link: 'pt-BR/merchants/business-benefits' }
    ],
    'Para Desenvolvedores': [
      { text: 'Início Rápido', link: 'pt-BR/developers/quick-start' },
      { text: 'Referência API', link: 'pt-BR/developers/api-reference' },
      { text: 'Documentação SDK', link: 'pt-BR/developers/sdk' },
      { text: 'Exemplos de Integração', link: 'pt-BR/developers/examples' },
      { text: 'Testes e Debug', link: 'pt-BR/developers/testing' }
    ],
    'Especificação Técnica': [
      { text: 'Visão Geral do Protocolo', link: 'pt-BR/spec/protocol' },
      { text: 'Formato de Mensagem', link: 'pt-BR/spec/message-format' },
      { text: 'Esquema URI', link: 'pt-BR/spec/uri-scheme' },
      { text: 'Modelo de Segurança', link: 'pt-BR/spec/security' },
      { text: 'Notas de Implementação', link: 'pt-BR/spec/implementation' }
    ],
    'Recursos': [
      { text: 'FAQ', link: 'pt-BR/resources/faq' },
      { text: 'Ferramentas e Bibliotecas', link: 'pt-BR/resources/tools' },
      { text: 'Comunidade', link: 'pt-BR/resources/community' },
      { text: 'Roadmap', link: 'pt-BR/resources/roadmap' }
    ]
  },
  fr: {
    'Commencer': [
      { text: 'Qu\'est-ce que StacksPay?', link: 'fr/introduction' },
      { text: 'Démarrage Rapide', link: 'fr/quick-start' },
      { text: 'Pourquoi StacksPay?', link: 'fr/why-stackspay' }
    ],
    'Pour les Utilisateurs': [
      { text: 'Effectuer des Paiements', link: 'fr/users/making-payments' },
      { text: 'Portefeuilles Pris en Charge', link: 'fr/users/supported-wallets' },
      { text: 'Sécurité', link: 'fr/users/security' },
      { text: 'Dépannage', link: 'fr/users/troubleshooting' }
    ],
    'Pour les Commerçants': [
      { text: 'Commencer', link: 'fr/merchants/getting-started' },
      { text: 'Accepter les Paiements', link: 'fr/merchants/accepting-payments' },
      { text: 'Flux de Paiement', link: 'fr/merchants/payment-flow' },
      { text: 'Gestion des Commandes', link: 'fr/merchants/order-management' },
      { text: 'Avantages Commerciaux', link: 'fr/merchants/business-benefits' }
    ],
    'Pour les Développeurs': [
      { text: 'Démarrage Rapide', link: 'fr/developers/quick-start' },
      { text: 'Référence API', link: 'fr/developers/api-reference' },
      { text: 'Documentation SDK', link: 'fr/developers/sdk' },
      { text: 'Exemples d\'Intégration', link: 'fr/developers/examples' },
      { text: 'Tests et Débogage', link: 'fr/developers/testing' }
    ],
    'Spécification Technique': [
      { text: 'Vue d\'Ensemble du Protocole', link: 'fr/spec/protocol' },
      { text: 'Format de Message', link: 'fr/spec/message-format' },
      { text: 'Schéma URI', link: 'fr/spec/uri-scheme' },
      { text: 'Modèle de Sécurité', link: 'fr/spec/security' },
      { text: 'Notes d\'Implémentation', link: 'fr/spec/implementation' }
    ],
    'Ressources': [
      { text: 'FAQ', link: 'fr/resources/faq' },
      { text: 'Outils et Bibliothèques', link: 'fr/resources/tools' },
      { text: 'Communauté', link: 'fr/resources/community' },
      { text: 'Feuille de Route', link: 'fr/resources/roadmap' }
    ]
  }
}
