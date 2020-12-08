const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const fileEnv = dotenv.config({
    path: `./env/${options.stage || 'development'}.env`
  }).parsed;

  return {
    mode: process.env.NODE_ENV,
    entry: ['@babel/polyfill', './src/index.tsx'],
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      inline: true,
      port: 5000,
      hot: true
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelCore: '@babel/core'
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              publicPath: '/',
              name: '[name].[ext]?[hash]',
              limit: 10000
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@theme': path.resolve(__dirname, 'src/common/theme'),
        '@utils': path.resolve(__dirname, 'src/common/utils'),
        '@store': path.resolve(__dirname, 'src/common/store'),
        '@imgs': path.resolve(__dirname, 'public/imgs'),
        '@socket': path.resolve(__dirname, 'src/common/socket')
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({ 'process.env': JSON.stringify(fileEnv) }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      new CleanWebpackPlugin()
    ]
  };
};
