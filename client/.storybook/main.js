const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async(config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@style': path.resolve(__dirname, '../src/common/style'),
      '@utils': path.resolve(__dirname, '../src/common/utils'),
      '@store': path.resolve(__dirname, '../src/common/store'),
      '@context': path.resolve(__dirname, '../src/common/context'),
      '@imgs': path.resolve(__dirname, '../public/imgs')
    }
    return config;
  }
}