const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const port = process.env.port || process.env.npm_config_port || 8086 // dev port
module.exports = {
    entry: './main.ts',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /.less$/, use: [miniCssExtractPlugin.loader, 'css-loader', 'less-loader'] },
            { test: /\.(png|jpe?g|gif|svg)$/, loader: 'url-loader' },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500 * 1024, // <=500kb 则使用 base64 （即，希望字体文件一直使用 base64 ，而不单独打包）
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port,
        open: true,
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css',
        }),
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            filename: 'index.html',
            minifiy: {
                //压缩
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            },
        })
    ],
}
