const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
        // bosstep: './src/Bosstep.js',
        // moment: './src/MomentTrack.js',
        // cliq: './src/Cliq.js'
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
            test: /\.(pdf|png|jpe?g|gif|svg|webp)$/i,
            type: "asset",
        },
        {
            test: /\.scss$/,
            // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'style-loader'],
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
    // optimization: {
    //     minimizer: [
    //       // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
    //       // `...`,
    //       new CssMinimizerPlugin(),
    //     ],
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        
        // new MiniCssExtractPlugin({
        //     // Options similar to the same options in webpackOptions.output
        //     // both options are optional
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        // }),
    ],
    devServer: {
        // open: true,
        contentBase: './',
        hot: true,
        // inline: true,
        historyApiFallback: true,
        watchContentBase: true,
    }
};