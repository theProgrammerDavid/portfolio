const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',

    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "public/**/*",
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ["**/index.html"],
                    },
                    to: "."
                },
            ],
        }),
    ]
});