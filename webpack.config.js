
var webpack = require("webpack");
module.exports = {
	
	devtool: "source-map",
	
	entry: __dirname + "/main.js",
	
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	resolve: {
		alias: {
			vue: "vue/dist/vue.js"
		}
	},
	module: {
		loaders: [{
			//cnpm install babel-loader
			//cnpm install babel-core babel-preset-es2015
			test: /\.js$/,
			loader: "babel-loader"
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}, {
			//cnpm install vue-loader vue-template-compiler
			test: /\.vue$/,
			loader: "vue-loader"
		},  {
			//cnpm install vue-loader vue-template-compiler
			test: /\.scss$/,
			loader: "style-loader!css-loader!sass-loader"
		},{
			//cnpm install css-loader style-loader
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			//cnpm install less-loader less
			test: /\.(jpg|png|gif|jpeg)$/,
			loader: "url-loader"
		}]
	},
	devServer: {
		
		contentBase: "./public",
		
		inline: true
	},
	plugins : [
	    
	]
}