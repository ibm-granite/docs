// SPDX-License-Identifier: Apache-2.0
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as RedirectOptions} from '@docusaurus/plugin-client-redirects';

const BASE_URL: string = process.env.DOCS_BASE_URL ?? '/granite/docs/';
const SITE_URL: string = process.env.DOCS_SITE_URL ?? 'https://ibm-granite.github.io';

// Self-hosted IBM Plex @font-face declarations. Paths are prefixed with BASE_URL so they
// resolve correctly regardless of whether the site is deployed at / or a subdirectory.
function ibmPlexFontFaces(base: string): string {
  const f = base.replace(/\/$/, '');
  const face = (name: string, wt: number, style: 'normal' | 'italic') =>
    `@font-face{font-family:'IBM Plex Sans';src:url('${f}/fonts/${name}.woff2') format('woff2');font-weight:${wt};font-style:${style};font-display:swap}`;
  const mono = (name: string, wt: number, style: 'normal' | 'italic') =>
    `@font-face{font-family:'IBM Plex Mono';src:url('${f}/fonts/${name}.woff2') format('woff2');font-weight:${wt};font-style:${style};font-display:swap}`;
  return [
    face('IBMPlexSans-Light', 300, 'normal'),
    face('IBMPlexSans-LightItalic', 300, 'italic'),
    face('IBMPlexSans-Regular', 400, 'normal'),
    face('IBMPlexSans-Italic', 400, 'italic'),
    face('IBMPlexSans-Medium', 500, 'normal'),
    face('IBMPlexSans-MediumItalic', 500, 'italic'),
    face('IBMPlexSans-SemiBold', 600, 'normal'),
    face('IBMPlexSans-SemiBoldItalic', 600, 'italic'),
    face('IBMPlexSans-Bold', 700, 'normal'),
    face('IBMPlexSans-BoldItalic', 700, 'italic'),
    mono('IBMPlexMono-Regular', 400, 'normal'),
    mono('IBMPlexMono-Italic', 400, 'italic'),
    mono('IBMPlexMono-Medium', 500, 'normal'),
  ].join('');
}

const config: Config = {
  title: 'IBM Granite',
  tagline: 'Foundation models for business',
  url: SITE_URL,
  baseUrl: BASE_URL,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',

  favicon: 'images/granite-pictogram.svg',
  trailingSlash: false,
  headTags: [
    {tagName: 'style', attributes: {}, innerHTML: ibmPlexFontFaces(BASE_URL)},
  ],
  i18n: {defaultLocale: 'en', locales: ['en']},
  markdown: {format: 'detect', hooks: {onBrokenMarkdownLinks: 'warn'}},

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'granite/docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        } satisfies DocsOptions,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {changefreq: 'weekly', priority: 0.5, ignorePatterns: ['**/search']},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Pre-wired empty: add entries here if any URLs change after the IBM.com cutover.
        redirects: [
          // The legacy /models/granite URL always lands on the latest generation.
          {from: '/models/granite', to: '/models/granite4-2'},
        ],
      } satisfies RedirectOptions,
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: ['/'],
        language: ['en'],
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig: {
    image: 'images/hero-light.png',
    metadata: [
      {name: 'keywords', content: 'IBM Granite, AI, foundation models, LLM'},
      {name: 'description', content: 'IBM Granite documentation — models, serving guides, cookbooks'},
    ],
    announcementBar: {
      // Bump this id if the message changes and you want dismissals reset
      // (only relevant while isCloseable is true).
      id: 'site-sunset-2026',
      content:
        '⚠️ This documentation site is no longer being updated. For the latest Granite documentation and models, see <a target="_blank" rel="noopener noreferrer" href="https://huggingface.co/ibm-granite">Hugging Face</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/ibm-granite">GitHub</a>.',
      backgroundColor: '#fcf4d6',
      textColor: '#1c1200',
      isCloseable: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'IBM Granite',
        src: 'logo/logo-light.svg',
        srcDark: 'logo/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cookbooksSidebar',
          position: 'left',
          label: 'Cookbooks',
        },
        {
          href: 'https://www.ibm.com/granite/playground',
          label: 'Playground ↗',
          position: 'left',
        },
        {
          href: 'https://huggingface.co/ibm-granite',
          label: 'Download Granite',
          position: 'right',
          className: 'navbar-download-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {label: 'IBM Granite', href: 'https://www.ibm.com/granite'},
            {label: 'Hugging Face', href: 'https://huggingface.co/ibm-granite'},
            {label: 'Ollama', href: 'https://ollama.com/library/granite4.1'},
            {label: 'GitHub', href: 'https://github.com/ibm-granite'},
          ],
        },
        {
          title: 'IBM Support & Legal',
          items: [
            {label: 'Contact IBM', href: 'https://www.ibm.com/contact/global'},
            {label: 'Terms of use', href: 'https://www.ibm.com/legal?lnk=flg-tous-usen'},
            {label: 'Privacy', href: 'https://www.ibm.com/us-en/privacy'},
            {label: 'Accessibility', href: 'https://www.ibm.com/able/?lnk=flg-acce-usen'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', href: 'https://research.ibm.com/blog?tag=artificial-intelligence'},
            {label: 'Playground', href: 'https://www.ibm.com/granite/playground'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IBM Corporation.`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    prism: {
      additionalLanguages: ['python', 'bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {src: `${BASE_URL}analytics.js`, async: true},
  ],
};

export default config;
