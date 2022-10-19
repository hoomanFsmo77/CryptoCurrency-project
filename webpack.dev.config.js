const path=require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: {
        "main":'./src/javascript/main.js',
        "components":"./src/javascript/components"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname,'./dist'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpe?g)/,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename:'css/[name].css',
    }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist"),
        },
        compress: true,
        port: 9000,
        devMiddleware:{
            writeToDisk: true
        }
    }
}