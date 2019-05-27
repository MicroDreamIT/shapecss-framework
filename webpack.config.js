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
        new MiniCssExtractPlugin({
            filename:"style.css",
            chunkFilename:"[name].css"
        })
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     template: "./views/button.html",
        //     filename: "./button.html"
        // })
    ],
    output: {
        filename: 'shapecss.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        options: {
                            modules:true,
                            sourceMap:true,
                            importLoader:2
                        }
                    },
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     include: path.resolve(__dirname, ""),
            //     use: []
            // },
        ]
    }
};