require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },
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
    `gatsby-plugin-react-helmet`
  ],
};
