module.exports = {
  siteMetadata: {
    title: `Shaun's Personal Website`,
    description: `Hey I'm Shaun! I'm a web developer that specializes in creating JAMStack websites as well as the Director over at Syncore LLC. Welcome to my personal website `,
    author: `@shaunchander`,
    thumbnail: `src/static/images/thumbnail.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Shaun's Personal Website`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1D976C`,
        display: `minimal-ui`,
        icon: `src/images/syncore_logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Jost"],
          urls: [`src/static/fonts/fonts.css`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
  ],
}
