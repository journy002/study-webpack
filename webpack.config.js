const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  // js 지정
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  // html 지정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
  ],

  // localhost 지정
  devServer: {
    host: "localhost",
  },
};
