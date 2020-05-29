const webpack = require('webpack')
const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode = process.argv.find(item => item === 'development') || ''
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');


const config = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.tsx'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.ts(x)?$/,
				use: [
					'awesome-typescript-loader'
				],
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png'
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.tsx',
			'.ts'
		],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},
	devServer: {
		contentBase: './dist',
		port: 8081,
		historyApiFallback: true
	},
	devtool: mode === 'development' ? 'eval-source-map' : 'source-map',
	plugins: [
		new LodashModuleReplacementPlugin,
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin(),
		new ManifestPlugin()
	]
};

module.exports = config;