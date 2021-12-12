module.exports = {
  purge: ["./src/**/*.jsx", "./src/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgChat: "#D0D3E3",
        bgWhite: "#EDF0F5",
        boldGreen: "#00A389",
        textBlue: "#323B56",
        textGray: "#878D9C",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "1/3": "33.33333",
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
