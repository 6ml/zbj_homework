var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 入口
	entry:[
		'webpack-hot-middleware/client',
		'./client/index'
	],
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{	
				test : /\.js$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'client')
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin()
	]
}