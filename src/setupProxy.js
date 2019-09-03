/**
 * Create by Sunshine on 2019/9/2
 */
const proxy = require('http-proxy-middleware');
let aips = {
    web : 'https://uat.hkbf.com.cn/oa',
    portal: 'https://uatportal.hkbf.com.cn',
    oa: 'https://uatoaservice.hkbf.com.cn',
    oa1: 'https://uatmaster.hkbf.com.cn',
    bpmRunTime: 'https://uatbpmrun.hkbf.com.cn',
    bpmModel: 'https://uatbpmmodel.hkbf.com.cn',
    uc: 'https://uatuc.hkbf.com.cn',
    form: 'https://uatform.hkbf.com.cn',
    search: 'https://uatsearch.hkbf.com.cn',
    file: 'https://fileviewservice.hkbf.com.cn',
    uploadFile: 'https://uatfile.hkbf.com.cn',
    fileview: 'https://fileview.hkbf.com.cn',
};
if (process.env.NODE_ENV === 'production') {
    aips = {
        web : 'https://uat.hkbf.com.cn/oa',
        portal: 'https://uatportal.hkbf.com.cn',
        oa: 'https://uatoaservice.hkbf.com.cn',
        oa1: 'https://uatmaster.hkbf.com.cn',
        bpmRunTime: 'https://uatbpmrun.hkbf.com.cn',
        bpmModel: 'https://uatbpmmodel.hkbf.com.cn',
        uc: 'https://uatuc.hkbf.com.cn',
        form: 'https://uatform.hkbf.com.cn',
        search: 'https://uatsearch.hkbf.com.cn',
        file: 'https://fileviewservice.hkbf.com.cn',
        uploadFile: 'https://uatfile.hkbf.com.cn',
        fileview: 'https://fileview.hkbf.com.cn',
    };
}
module.exports = function(app) {
    app.use(
        proxy('/uc', {
            target: aips.oa,
            changeOrigin: true,
            pathRewrite: {
                '^/uc': ''
            }
        })
    )
};