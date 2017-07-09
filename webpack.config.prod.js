var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require("clean-webpack-plugin");

module.exports = {
	devtool: 'source-map',
	entry: [
		'./client/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.[hash].js'
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': "'production'"
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new HtmlWebpackPlugin({
      		title: '首页',
      		template: './client/templates/templates.html',
    	}),
    	new CleanPlugin(['dist'])
	]
};