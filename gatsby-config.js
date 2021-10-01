module.exports = {
  siteMetadata: {
    title: `TENfertil ONA`,
    description: ` TENfertil ONA to suplement diety dla kobiet starających się o dzieci. Wyprodukowany przez Nutrition Health Institute.`,
    author: `nhinstitute.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `png`,
        path: `${__dirname}/src/images/png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jpg`,
        path: `${__dirname}/src/images/jpg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tenfertil-ona`,
        short_name: `tenfertil`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}
