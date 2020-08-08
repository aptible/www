require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    siteUrl: `https://www.aptible.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yml`,
        path: `${__dirname}/src/data/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown`,
    //     path: `${__dirname}/src/markdown/`,
    //   },
    // },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'modal',
        id: 'modal-portal',
      },
    },
    {
      resolve: 'gatsby-source-lever',
      options: {
        site: 'aptible',
        verboseOutput: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png',

        appName: 'aptible.com',
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-plugin-sitemap`
  ],
};
