const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  dotenv.config({
    path: `./env/${options.stage || 'development'}.env`
  });

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
      path: `${__dirname}/dist`,
      filename: 'bundle.js'
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
          test: /\.(png|jpg|svg)$/,
          loader: 'file-loader',
          options: {
            publicPath: './dist/',
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@style': path.resolve(__dirname, 'src/common/style'),
        '@utils': path.resolve(__dirname, 'src/common/utils'),
        '@hook': path.resolve(__dirname, 'src/common/hook'),
        '@context': path.resolve(__dirname, 'src/common/context'),
        '@imgs': path.resolve(__dirname, 'public/imgs')
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      new CleanWebpackPlugin()
    ]
  };
};
