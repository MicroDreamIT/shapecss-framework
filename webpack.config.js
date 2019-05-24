const path = require('path');

module.exports = {
    entry: './src/js/shape.js',
    mode: "development",
    devtool: "inline-source-map",
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
                        sourceMap: true
                    }
                }]
            }

        ]
    }
};