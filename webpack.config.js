const path = require('path');

module.exports = {
    entry: './src/js/shape.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};