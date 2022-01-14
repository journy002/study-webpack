module.exports = {
  // presets: 일일이 따로 명시해야하는 js기능을 한번에 지원해주는 패키지
  presets: ["@babel/preset-env"],
  // plugins: 비동기 처리를 위해서 패키지 설치
  plugins: [["@babel/plugin-transform-runtime"]],
};
