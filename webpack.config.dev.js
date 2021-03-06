var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	// 入口
	entry:[
		'webpack-hot-middleware/client',
		'./client/index'
	],
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
		// new webpack.NoErrorsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
      		title: '首页',
      		template: './client/templates/templates.html',
    	})
	]
};
