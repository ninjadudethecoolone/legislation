const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Daxrentha\'s Special Contaiment Procedures Foundation Legislation',
  tagline: 'This site contains all legislation for Daxrentha\'s SCPF',
  url: 'https://legislation.scpf.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SCPF-Judicial', // Usually your GitHub org/user name.
  projectName: 'legislation', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SCPF',
        logo: {
          alt: 'SCPF Judicial Logo',
          src: 'img/judicial.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Legislation',
          },
          {
            href: 'https://www.roblox.com/groups/4606577',
            label: 'Group',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legislation',
            items: [
              {
                label: 'Legislation',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pathos',
              },
              {
                label: 'Group',
                href: 'https://www.roblox.com/groups/4606577',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Ethics Committee Public Discord',
                href: 'https://discord.gg/ttjPqT5DDz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Daxrentha's Special Containment Procedures Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
