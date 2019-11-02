// Purge CSS setup from https://tailwindcss.com
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/pages/*.js"],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
})
