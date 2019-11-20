module.exports = {
  siteMetadata: {
    title: `QC Career School`,
    description: ``,
    author: `QC Career School`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QC Career School`,
        short_name: `QC Career`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/q.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `300i`, `600`, `600i`],
            // subsets: [`latin`],
          },
          {
            family: `Poppins`,
            variants: [`200`, `200i`, `400`, `400i`, `600`, `600i`, `700`, `700i`],
            // subsets: [`latin`],
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       `UA-3632503-13`,
    //       `AW-1071836607`,
    //     ],
    //     gtagConfig: {
    //       site_speed_sample_rate: 100,
    //     },
    //   },
    // },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-htaccess`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
