const path = require('path');     //to include a built in node module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',				//injects code into html on the fly using development server
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,   //test for all javascript files. All .js files will use babel loader
				exclude: /node_modules/,    //ignore node_module folder
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};