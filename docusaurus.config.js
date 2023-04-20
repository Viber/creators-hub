// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const dotenv = require('dotenv').config().parsed;

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
          trackingID: dotenv.GOOGLE_TRACKING_ID,
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: dotenv.GOOGLE_CONTAINER_ID,
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
    'GOOGLE_TRACKING_ID': dotenv.GOOGLE_TRACKING_ID,
    'GOOGLE_CONTAINER_ID': dotenv.GOOGLE_CONTAINER_ID,
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
            href: 'https://help.viber.com',
            label: 'Support',
            target: '_blank',
            position: 'right',
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
