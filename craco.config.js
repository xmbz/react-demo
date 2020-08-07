const CracoLessPlugin = require('craco-less');
const {
    BundleAnalyzerPlugin
} = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
    webpack: {
        alias: {
            '@': pathResolve('src'),
            '@constant': pathResolve('src/constant'),
        },
        plugins: [
            new BundleAnalyzerPlugin(),
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp(
                    '\\.(' + ['js', 'css'].join('|') +
                    ')$'
                ),
                threshold: 1024,
                minRatio: 0.8
            }),
        ]
    },
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        // '@primary-color': '#1DA57A'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};