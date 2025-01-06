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
    ],
    devServer: {
        static: './src/',
        //contentBase: path.join(__dirname, 'src'), // Wo die devServer die Dateien serviert
        //publicPath: '/', // Der Pfad, unter dem das Bundle verfügbar sein wird
        port: 8080 // Port, auf dem der Server laufen wird
    }
};
