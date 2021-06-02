const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    // template: __dirname + '/public/index.html',
    // filename: 'index.html',
    // inject: 'body'
  })
const port = process.env.PORT || 8080;

module.exports = {
    mode: 'production',  
    entry: './src/index.js',
    output: {
        // filename: 'bundle.[hash].js'
        filename: 'index.bundle.js',
        path: __dirname + '/dist'
        // filename: '[name].[hash:8].js',
        // sourceMapFilename: '[name].[hash:8].map',
        // chunkFilename: '[id].[hash:8].js'
    },
devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            /**
             * The `type` setting replaces the need for "url-loader"
             * and "file-loader" in Webpack 5.
             *
             * setting `type` to "asset" will automatically pick between
             * outputing images to a file, or inlining them in the bundle as base64
             * with a default max inline size of 8kb
             */
            type: "asset",
    
            /**
             * If you want to inline larger images, you can set
             * a custom `maxSize` for inline like so:
             */
            // parser: {
            //   dataUrlCondition: {
            //     maxSize: 30 * 1024,
            //   },
            // },
        },
        {
            test: /\.scss$/,
            use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'sass-loader'
            }
            ]
        },
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        // contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        open: true
    }
};