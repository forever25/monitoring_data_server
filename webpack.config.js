const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const package = require('./package.json');
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const webpackConfig = {
    target: 'node',
    // mode: 'development',
    mode: 'production',
    entry: { main: path.join(__dirname, 'src/main.js'), vendor: Object.keys(package.dependencies) },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    // externals: externals,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, use: {
                    loader: 'babel-loader'
                },
                exclude: [path.join(__dirname, '/node_modules')]
            },
            // { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
        ],
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, './static'), to: 'static', }]
        })],
    node: {
        // console: true,
        // global: true,
        // process: true,
        // Buffer: true,
        // __filename: true,
        // __dirname: true,
        // setImmediate: true
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@root': path.resolve(__dirname),
            '@static': path.resolve(__dirname, './static')
        }
    }
};
module.exports = webpackConfig;