const path = require("path");
const { useBabelRc, override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/components"),
    "@containers": path.resolve(__dirname, "src/containers"),
    "@lib": path.resolve(__dirname, "src/lib"),
    "@redux": path.resolve(__dirname, "src/redux"),
    "@theme": path.resolve(__dirname, "src/theme"),
    "@config": path.resolve(__dirname, "src/config"),
    "@scss": path.resolve(__dirname, "src/scss"),
    "@uicomponents": path.resolve(__dirname, "src/components/ui")
  })
);
