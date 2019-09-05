import { post }  from '@utils/getAndPost';


export function login(url, data) {
    return post(url, data);
}