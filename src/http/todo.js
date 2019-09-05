import { post }  from '@utils/getAndPost';


export function todo(url, data) {
    return post(url, data);
}