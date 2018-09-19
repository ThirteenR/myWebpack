const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        login: "./src/js/login.js",
        main: "./src/js/main.js",
        one: "./src/js/one.js",
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        //打包后的文件存放的地方
        filename: "js/[name].js"
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
           },
            {
                test: /\.css$/,
                loader: extractPlugin.extract({
                    use: ["css-loader"],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.js$/,
                loaders: ['es3ify-loader'] // 规范语法
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015-loose"] // 消除对象兼容问题
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/view/login.html',
            filename: 'view/login.html',
            inject: true,
            chunks: ["login"],
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/view/main.html',
            filename: 'view/main.html',
            chunks: ["main"],
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/view/one.html',
            filename: 'view/one.html',
            inject: true,
            chunks: ["one"]
        }),
        new extractPlugin('css/[name].css')
    ]
}