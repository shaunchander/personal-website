module.exports = {
  siteMetadata: {
    title: `Gatsby Syncore Starter`,
    titleTemplate: "%s | Gatsby Syncore Starter",
    description: `Syncore's customized Gatsby starter based off of gatsby-typescript-tailwind-starter`,
    siteUrl: `https://www.example.com`,
    image: `static/images/...`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
    "gatsby-plugin-preload-link-crossorigin",
    "gatsby-plugin-offline",
  ],
}
