module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        syncore: `#1D976C`,
        syncoreLight: `#24BF88`,
        syncoreDark: `#187856`,
        gunmetal: `#2F323A`,
        gunmetalDark: `#23252C`,
        gunmetalLight: `#A1ACCA`,
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      screens: {
        sm: "400px",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
