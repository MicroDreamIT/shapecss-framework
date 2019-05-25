const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/js/shape.js',
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase:'./dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./views/button.html",
            filename: "./button.html"
        })
    ],
    output: {
        filename: 'shapecss.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true,
                        includePaths:["./test.scss", "./test.css"]
                    }
                }]
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, ""),
                use: []
            },
        ]
    }
};