const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'DigiSalad - We create amazing digital experiences',
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/digisalad/' : '/',
};
