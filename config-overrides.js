const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require("path");

module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css',
        }),
        addWebpackAlias({
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@views': path.resolve(__dirname, 'src/views'),
        })
    )
};