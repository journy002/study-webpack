const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },

  // css module 추가
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    // html 지정
    new HtmlPlugin({
      template: "./index.html",
    }),

    // from: 'static'은 만들어놓은 static폴더가 되는것이다.
    // CopyPlugin이 말그대로 복사가 되서 dist 폴더에 들어가게 해준다.
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  // localhost 지정
  devServer: {
    host: "localhost",
  },
};
