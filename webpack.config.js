const  webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

	
module.exports = {

  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "js/bundle.js"
  },
  module : {
	  rules:[
		  {
	        test: /\.js$/, 
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['react', 'es2015' ],
	          plugins: ['transform-class-properties']
	        }
	      },
	      {
			   test: /\.css$/,
			   use: ExtractTextPlugin.extract({
			          use: "css-loader"
			   }),
		 },

		 {
		     test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
		     loader: "file-loader?name=assets/[name].[ext]"

		 }

	  ],	
	},
 
  watchOptions: {
	  aggregateTimeout: 300,
	  poll: 1000,
	  ignored: /node_modules/

  },

  plugins: [
    new BrowserSyncPlugin({
        host: 'localhost',
        proxy: 'http://localhost/'
    }),
	
	new ExtractTextPlugin("css/style.css"),
	
	new CopyWebpackPlugin([
			{ from: './src/static/media', to: './media' },
            { from: './src/static/php', to: './' },
        ]),


]



}