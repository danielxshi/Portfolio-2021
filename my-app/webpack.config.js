const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
  })
const port = process.env.PORT || 8080;

module.exports = {
    mode: 'production',  
    entry: {
        home: './src/index.js',
        bosstep: './src/Bosstep.js',
        moment: './src/MomentTrack.js',
        cliq: './src/Cliq.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
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
            type: "asset",
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
        // host: 'localhost',
        // port: port,
        // historyApiFallback: true,
        // open: true
        // contentBase: path.join(__dirname, 'public', 'dist'),
        hot: true,
        inline: true,
        historyApiFallback: true,
        watchContentBase: true,
    }
};