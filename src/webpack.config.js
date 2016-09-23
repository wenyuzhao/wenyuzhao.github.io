const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

function getSubDirectories(folder) {
    return fs.readdirSync(folder).filter(file =>
        fs.statSync(path.join(folder, file)).isDirectory());
}

const exclude = /node_modules/;

const BABEL_LOADER = {
    exclude,
    loader: 'babel',
    test: /\.jsx?$/,
    query: {
        presets: [
            [ 'es2015', { modules: false } ],
            'stage-0',
            'react',
        ],
    },
};

const COFFEE_LOADER = {
    exclude,
    loader: 'coffee-loader',
    test: /\.coffee$/,
};

const entry = {};

getSubDirectories(__dirname).forEach(name => {
    entry[name] = [
        path.join(__dirname, `common`),
        path.join(__dirname, `${name}/index`),
    ];
});

module.exports = {
    entry,
    output: {
        path: path.join(__dirname, '../lib'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json', '.coffee' ],
    },
    module: {
        loaders: [
            BABEL_LOADER,
            COFFEE_LOADER,
        ],
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ],
    devtool: process.env.NODE_ENV === 'production' ? '#source-map' : '#cheap-module-eval-source-map',
};