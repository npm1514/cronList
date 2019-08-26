const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./src/rooms/bundle.js'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'js/bundle.min.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        })
    ],
    node: {
       fs: "empty",
       net: "empty"
    }
};
