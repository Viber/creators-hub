// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Github pages configuration
  url: 'https://creators.viber.com',
  baseUrl: '/hub/',
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/customTheme.scss'),
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: 'Viber Creators Hub',
        logo: {
          alt: 'My Site Logo',
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
              }
            ]
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
              }
            ]
          },
          {
            href: 'https://github.com/Viber/creators-hub',
            position: 'right',
            className: 'navbar-github-link'
          },
          {
            href: 'https://help.viber.com',
            label: 'Support',
            target: '_blank',
            position: 'right',
          }
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
                href: 'https://creators.viber.com',
              },
              {
                label: 'Blog',
                href: 'https://creators.viber.com/blog',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Twitter',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rakuten Viber.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
