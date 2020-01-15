const { override, addWebpackExternals } = require('customize-cra');
const { setSourceMap, setHtmlWebpackPlugin } = require("grey-rewiped-utils");

module.exports = override(
    setSourceMap(true),
    addWebpackExternals({ 'antd': 'window.$$K2RootWinow.$$_K2_SDK.lib.basis.antd' }),
    addWebpackExternals({ 'react': 'window.$$K2RootWinow.$$_K2_SDK.lib.basis.react' }),
    addWebpackExternals({ 'react-dom': 'window.$$K2RootWinow.$$_K2_SDK.lib.basis.reactDom' }),
    addWebpackExternals({ 'moment': 'window.$$K2RootWinow.$$_K2_SDK.lib.basis.moment' }),
    addWebpackExternals({ 'query-string': 'window.$$K2RootWinow.$$_K2_SDK.lib.basis.queryString' }),  
    setHtmlWebpackPlugin({compileTime: new Date().toString(),}),
);