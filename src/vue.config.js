const pxtorem = require('postcss-pxtorem');

module.exports = {
  css: {
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true, // 设置为true
      },
      css: {},
      postcss: {
        plugins: [
          pxtorem({
            remUnit: 75,
          }),
        ],
      },
    },
  },
};
