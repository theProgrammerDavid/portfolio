const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/public'

        },
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/public/index.html' },
                // { from: /^\/subpage/, to: '/views/subpage.html' },
                // { from: /./, to: '/views/404.html' },
            ],
        },
        hot: true,

        devMiddleware: {
            index: true,
            publicPath: '/public'
        }
    },
});