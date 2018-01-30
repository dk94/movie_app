const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = {
    entry: {
        app: path.join(__dirname, 'client/src/'),
    },

    output: {
        path: path.join(__dirname, 'client/public/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: path.join(__dirname, 'client/public/style/')
            },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

let config;
switch (process.env.NODE_ENV) {
    case 'build':
        config = merge(
            common,
            { devtool: 'source-map' }
        );
        break;
    case 'development':
        config = merge(
            common,
            { devtool: 'eval-source-map' },
            {
                devServer: {

                    historyApiFallback: true,
                    inline: true,
                    stats: 'errors-only',
                    host: 'localhost',
                    port: 3000,
                    contentBase: './client/public',
                }
            }
        );
}

module.exports = config;

