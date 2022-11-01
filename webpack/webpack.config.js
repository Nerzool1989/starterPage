const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVars) => {  //переменная передается в команде старта билда
    const {env} = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
}