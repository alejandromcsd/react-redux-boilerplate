import webpack from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
    debug: true,
    devtool: 'inline-source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([{ from: './data', to: 'data'}])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel', query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            { test: /(\.scss)$/, loaders: ['style', 'css', 'sass'] },
            { test: /(\.css)$/, loaders: ['style', 'css'] },
            { test: /\.(png|jpg|ico)$/, loader: 'file?name=[path][name].[ext]&context=./src' },
            { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=styles/[name].[ext]' },
            { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=styles/[name].[ext]' },
            { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=styles/[name].[ext]' },
            { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=styles/[name].[ext]' },
            { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=styles/[name].[ext]' }
        ]
    }
};