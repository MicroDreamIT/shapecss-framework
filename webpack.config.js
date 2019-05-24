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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};