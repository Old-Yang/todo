import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 5000
});

service.interceptors.request.use(
  config => {
      if (localStorage.getItem('token')) {
          // config.headers['authorization'] = 'Bearer ' + localStorage.getItem('token');
      }
      return config
  },
  error => {
      console.log(error);
      return Promise.reject(error)
  }
);

service.interceptors.response.use(
  response => {
      const res = response.data;
      return Promise.resolve(res)
  },
  error => {
      return Promise.reject(error)
  }
);

export default service
