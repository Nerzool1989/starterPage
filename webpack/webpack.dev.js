const webpack = require("webpack");

module.exports = {
    mode: 'development',
    devServer: {
        hot: true, //перезагружает не весь проект а моудлями
        open: true //запускает в дефолтном браузере сборку (для реакта нужен до плагин еще)
    },
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