const colors = require("tailwindcss/colors");
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
