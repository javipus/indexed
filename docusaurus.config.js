module.exports = {
  title: 'indexed.eth',
  tagline: 'A collectively built hub for comparison between "Layer 2" solutions',
  url: 'https://indexed.eth.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/raidguild__icon.png',
  organizationName: 'raid-guild', // GitHub org name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'indexed.eth',
      // logo: {
      //   alt: 'Raid Guild Logo',
      //   src: 'img/raidguild_avatar.png',
      // },
      items: [
        {
          href: '/docs/contribute-doc',
          label: 'Docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',

      copyright: `Copyright © ${new Date().getFullYear()} RaidGuild`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          disableDarkMode: true
        },
      },
    ],
  ],
};