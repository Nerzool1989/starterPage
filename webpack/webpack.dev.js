const webpack = require("webpack");

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map', //это то как код разделяется и собирается в последующем (рекомендация разрабов)
    resolve: {
    },
    plugins: [
        // new webpack.ProvidePlugin({ //подключаем переменную process
        //     process: "process/browser"  
        // }),
        // new webpack.DefinePlugin({
        //     "process.env.MYENV": JSON.stringify(process.env.MYENV)
        // })
    ]
}