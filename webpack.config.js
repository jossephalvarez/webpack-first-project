var HtmlWebpackPlugin = require('html-webpack-plugin');
const javaScriptRules = {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-optional-chaining']
            }

        }
    };



module.exports = {
    output: {
        filename: 'app.[contentHash].js'
    },
    module: {
        rules: [
            javaScriptRules
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack step by step',
            template: 'src/index.html'
        }),
    ]
}

