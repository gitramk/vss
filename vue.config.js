module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "https://checkout-test.adyen.com",
        changeOrigin: true,

        pathRewrite: {"^/api": "/"},
      },
      "^/token": {
        target: "http://inau-s4h-d1.in3.ad.innovene.com:8000/",
        changeOrigin: true,

        pathRewrite: {"^/token": "/"},
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
