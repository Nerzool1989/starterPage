const webpack = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',  //рекоменд разрабами вебпак
    plugins: [
        // new webpack.DefinePlugin({
        //     'proccess.env.name': JSON.stringify('codeEvolution') //можем сами установить имя процесса (еще можно через пакет управлять этим всем)
        // })
    ]
}