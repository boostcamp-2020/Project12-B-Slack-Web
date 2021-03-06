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
      '@theme': path.resolve(__dirname, '../src/common/theme'),
      '@utils': path.resolve(__dirname, '../src/common/utils'),
      '@store': path.resolve(__dirname, '../src/common/store'),
      '@imgs': path.resolve(__dirname, '../public/imgs'),
      '@socket': path.resolve(__dirname, '../src/common/socket'),
      '@constants': path.resolve(__dirname, '../src/common/constants')
    }
    return config;
  }
}