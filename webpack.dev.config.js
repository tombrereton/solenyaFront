const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.production.config");
const webpack = require("webpack");

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.EnvironmentPlugin({
      PRODUCT_API: "http://team-solenya-rg-dev-product.azurewebsites.net/"
    })
  ]
});
