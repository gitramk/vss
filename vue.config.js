module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "^/api": {
        target: "https://checkout-test.adyen.com",
        changeOrigin: true,

        pathRewrite: {"^/api": "/"},
      },
      "^/token":{
        target: "https://newportal.hinocanada.com",
        changeOrigin: true,

        pathRewrite: {"^/token": "/"},
      }
    },
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
