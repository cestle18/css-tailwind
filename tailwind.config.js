module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html", "./*.css"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      black: {
        DEFAULT: "#080808",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
