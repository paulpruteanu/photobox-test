var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',//"inline-source-map",
    entry: [
        /*'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',*/
        './src'
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        moduleDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
            }
        ]
    },
    plugins: [
        /*new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),*/
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};