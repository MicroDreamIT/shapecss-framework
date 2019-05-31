const path = require('path')

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
            filename:"shapecss.css"
        })

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
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

        ]
    }
}