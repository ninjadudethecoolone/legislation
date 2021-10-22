const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Daxrentha\'s SCPF documentation',
  tagline: 'This site contains all public documentation for Daxrentha\'s SCPF',
  url: 'https://legislation.scpf.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
          editUrl: 'https://github.com/SCPF-Judicial/legislation/edit/dev/',
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
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'SCPF',
        logo: {
          alt: 'SCPF Logo',
          src: 'img/scpf.png',
        },
        items: [
          /* {
            type: 'doc',
            docId: 'supreme/intro',
            position: 'left',
            label: 'Supreme Guidelines',
          }, */
          {
            type: 'doc',
            docId: 'departments/intro',
            position: 'left',
            label: 'Departmental Guidelines',
          },
          /* {
            type: 'doc',
            docId: 'criminal_code/intro',
            position: 'left',
            label: 'Criminal Code',
          }, */
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
                to: '/',
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
