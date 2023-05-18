// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Viber Creators Hub',
  tagline: 'Viber Creators Hub: Where Innovation Begins',
  favicon: 'img/favicon.ico',

  // Github pages configuration
  url: 'https://viber.github.io',
  baseUrl: '/',
  organizationName: 'Viber',
  projectName: 'creators-hub',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Viber/creators-hub/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/customTheme.scss'),
        },
        gtag: {
          trackingID: process.env.GOOGLE_TRACKING_ID,
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: process.env.GOODLE_CONTAINER_ID,
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: '/community',
        sidebarPath: require.resolve('./sidebarsCommunity.json'),
        editUrl: 'https://github.com/Viber/creators-hub/edit/main/',
        showLastUpdateTime: true,
      }),
    ],
    async function tailWindCSS(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  scripts: [
    {
      src: 'https://app.happyreact.com/widget/reactions.js',
      defer: true,
    },
  ],

  customFields: {
    'GOOGLE_TRACKING_ID': process.env.GOOGLE_TRACKING_ID,
    'GOOGLE_CONTAINER_ID': process.env.GOODLE_CONTAINER_ID,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Viber Creators Hub',
        logo: {
          alt: 'Viber Creators Hub Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Develop',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'botsAPISidebar',
                label: 'Bots API',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'SDKs',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'javascriptSDKSidebar',
                label: 'Javascript',
              },
              {
                type: 'docSidebar',
                sidebarId: 'pythonSDKSidebar',
                label: 'Python',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Community',
            docsPluginId: 'community',
          },
          {
            href: 'https://github.com/Viber',
            position: 'right',
            className: 'navbar-github-link',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://help.viber.com" target="_blank" rel="noopener noreferrer" class="navbar-support-link">Support<svg style="margin-left: 4px" width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Viber Creators',
            items: [
              {
                label: 'Home',
                to: 'https://creators.viber.com/',
              },
              {
                label: 'Hub',
                to: 'https://creators.viber.com/hub/',
              },
              {
                label: 'Blog',
                to: 'https://creators.viber.com/blog/',
              },
              {
                label: 'Terms and Conditions',
                to: 'https://creators.viber.com/hub/terms-and-conditions/',
              },
              {
                label: 'Privacy Policy',
                to: 'https://creators.viber.com/hub/privacy-policy/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Rakuten Viber',
                href: 'https://viber.com/',
              },
              {
                label: 'Viber for Business',
                href: 'https://viber.com/business/',
              },
              {
                label: 'Careers',
                href: 'https://viber.com/careers/',
              },
              {
                label: 'Help Center',
                href: 'https://help.viber.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/viber',
              },
              {
                label: 'Blog',
                href: 'https://creators.viber.com/blog',
              },
              {
                label: 'Forum',
                href: 'https://creators.viber.com/discuss',
              },
              {
                label: 'GitHub',
                href: 'https://https://github.com/Viber',
              },
              {
                label: 'Events',
                href: 'https://creators.viber.com/events',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Viber',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/viber/',
              },
              {
                label: 'Meetup',
                href: 'https://www.meetup.com/Viber-Creators/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCZ1Z1Y1X5QYQZ7Z7Z7Z7Z7Q',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Viber Media S.à r.l.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
