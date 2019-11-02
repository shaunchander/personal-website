module.exports = {
  theme: {
    colors: {
      syncore: "hsl(159, 68%, 35%)",
      radiant: "hsl(159, 68%, 45%)",
      black: "#000000",
      gunmetal: "hsl(224, 10%, 21%)",
      white: "#ffffff",
    },
    fontFamily: {
      body: ["Jost", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require("tailwindcss-transitions")()],
}
