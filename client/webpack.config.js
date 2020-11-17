const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
		inline: true,
		port: 5000,
		hot: true,
	},
	output:{
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', 'jsx', '.ts', '.tsx'],
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@style": path.resolve(__dirname, "src/common/style"),
			"@utils": path.resolve(__dirname, "src/common/utils"),
			"@hook": path.resolve(__dirname, "src/common/hook"),
			"@context": path.resolve(__dirname, "src/common/context"),
			"@imgs": path.resolve(__dirname, "public/imgs"),
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