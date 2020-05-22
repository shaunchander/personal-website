module.exports = {
  siteMetadata: {
    title: `shaunchander.me`,
    titleTemplate: "%s | shaunchander.me",
    description: `Hey I'm Shaun! I'm a web developer, company owner, and pre-med student. Check out my website to see my bio, portfolio, and contact information!`,
    siteUrl: `https://shaunchander.me`,
    image: `images/thumbnail.png`,
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
    "gatsby-plugin-postcss",
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shaunchander.me`,
        short_name: `shaunchander.me`,
        start_url: `/`,
        background_color: `#2F323A`,
        theme_color: `#1D976C`,
        display: `minimal-ui`,
        icon: `src/images/syncore.png`,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop", "build-javascript"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-preload-link-crossorigin",
    "gatsby-plugin-netlify",
    "gatsby-plugin-offline",
  ],
}
