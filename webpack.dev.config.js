const path=require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: './src/javascript/main.js',
    output: {
        filename: "bundle[contenthash].js",
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
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename:'css/bundle[contenthash].css'
    }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        devMiddleware:{
            writeToDisk: true
        }
    }
}