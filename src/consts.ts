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
    'For Users': [
      { text: 'What is StacksPay?', link: 'en/introduction' },
      { text: 'How to Use StacksPay as a Merchant', link: 'en/merchant' },
      { text: 'Using StacksPay', link: 'en/using' },
      { text: 'StacksPay FAQ', link: 'en/faq'}
    ],
    'For Developers': [
      { text: 'The Specification', link: 'en/dev/specification' },
{ text: 'Getting Started', link: 'en/dev/getting-started' },
{ text: 'Using StacksPay', link: 'en/dev/using-stackspay' }

    ]
  },
  de: {
    'Für Benutzer': [
      { text: 'Was ist StacksPay?', link: 'de/introduction' },
      { text: 'So verwenden Sie StacksPay als Händler', link: 'de/merchant' },
      { text: 'StacksPay verwenden', link: 'de/using' }
    ],
    'Für Entwickler': [
      { text: 'Die Spezifikation', link: 'de/dev/dev/dev/dev/specification' },
{ text: 'Erste Schritte', link: 'de/dev/dev/dev/dev/getting-started' },
      { text: 'StacksPay verwenden', link: 'de/dev/dev/dev/dev/using-stackspay' },


    ]
  },
  es: {
    'Para usuarios': [
      { text: '¿Qué es StacksPay?', link: 'es/introduction' },
      { text: 'Cómo usar StacksPay como comerciante', link: 'es/merchant' },
      { text: 'Usando StacksPay', link: 'es/using' }
    ],
    'Para desarrolladores': [
      { text: 'La Especificación', link: 'es/dev/dev/dev/specification' },
{ text: 'Primeros Pasos', link: 'es/dev/dev/dev/getting-started' },
{ text: 'Usando StacksPay', link: 'es/dev/dev/dev/using-stackspay' },

    ]
  },
  pt: {
    'Para usuários': [
      { text: 'O que é StacksPay?', link: 'pt/introduction' },
      { text: 'Como usar StacksPay como comerciante', link: 'pt/merchant' },
      { text: 'Usando StacksPay', link: 'pt/using' }
    ],
    'Para desenvolvedores': [
    { text: 'A Especificação', link: 'pt/dev/dev/specification' },
{ text: 'Primeiros Passos', link: 'pt/dev/dev/getting-started' },
{ text: 'Usando StacksPay', link: 'pt/dev/dev/using-stackspay' },
    ]
  },
  'pt-BR': {
    'Para usuários': [
      { text: 'O que é StacksPay?', link: 'pt-BR/introduction' },
      { text: 'Como usar o StacksPay como comerciante', link: 'pt-BR/merchant' },
      { text: 'Usando o StacksPay', link: 'pt-BR/using' }
    ],
    'Para desenvolvedores': [
      { text: 'A Especificação', link: 'pt-BR/dev/specification' },
{ text: 'Primeiros Passos', link: 'pt-BR/dev/getting-started' },
{ text: 'Usando StacksPay', link: 'pt-BR/dev/using-stackspay' },

    ]
  },
  fr: {
    'Pour les utilisateurs': [
      { text: 'Qu\'est-ce que StacksPay?', link: 'fr/introduction' },
      { text: 'Comment utiliser StacksPay en tant que marchand', link: 'fr/merchant' },
      { text: 'Utiliser StacksPay', link: 'fr/using' }
    ],
    'Pour les développeurs': [
      { text: 'La Spécification', link: 'fr/dev/specification' },
{ text: 'Commencer', link: 'fr/dev/getting-started' },
{ text: 'Utiliser StacksPay', link: 'fr/dev/using-stackspay' },

    ]
  },

}
