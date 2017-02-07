import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    debug: true,
    devtool: 'source-map',
    entry: './src/index',
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles/style.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{ from: './data', to: 'data'}])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel', query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            { test: /(\.scss)$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
            { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
            { test: /\.(png|jpg|ico)$/, loader: 'file?name=[path][name].[ext]&context=./src' },
            { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=styles/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=styles/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=styles/[name].[ext]' },
            { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=styles/[name].[ext]' },
            { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=styles/[name].[ext]' }
        ]
    }
};