import request  from '@utils/request';

export function get(url, params, config) {
    let _config = Object.assign({}, config, {params});
    return request.get(url, _config);
}
export function post(url, ...res) {
    const _params = res[0] ? res[0] : {};
    const _config = res[1] ? res[1] : {};
    return request.post(url, _params, _config);
}