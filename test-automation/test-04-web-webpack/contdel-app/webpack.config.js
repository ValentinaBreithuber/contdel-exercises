const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development", // or 'production'
    entry: './src/index.js', // main JavaScript File
    output: {
        filename: 'bundle.js', // output JavaScript
        path: path.resolve(__dirname, 'dist') // destination path
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};
