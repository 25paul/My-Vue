import Vue from 'vue';
import axios from 'axios';
import {
  apiAddr
} from './config';

axios.defaults.baseURL = apiAddr;
axios.defaults.headers = {
  'Content-Type': 'application/json;'
};
axios.interceptors.request.use(
  config => {
    if (config.data) {
      config.data = JSON.stringify(config.data);
    }
    if (config.method === 'get') {
      for (let key in config.params) {
        if (config.params[key] === null || config.params[key] === undefined || config.params[key] === '') {
          delete config.params[key];
        }
      }
      // config.params.refresh_time = Date.now();
    } else {
      for (let key in config.data) {
        if (config.data[key] === null || config.data[key] === undefined || config.data[key] === '') {
          delete config.data[key];
        }
      }
    }
    // let dcUserToken = localStorage.getItem('dcUserToken');
    // if (dcUserToken) {
    //   config.headers.Authorization = dcUserToken;
    // }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// axios.interceptors.response.use(
//   response => {
//     if (response.status === 200) {
//       if (response.data.code === 0 || response.data.code === 302) {
//         return response.data;
//       } else {
//         if (response.config.method !== 'get') {
//           Vue.prototype.$message({
//             message: response.data.msg,
//             type: 'error'
//           });
//           return response.data;
//         }
//         return response.data;
//       };
//     } else {
//       Vue.prototype.$message({
//         message: '状态码不对',
//         type: 'error'
//       });
//     }
//   },
  // error => {
    // Vue.prototype.$message.error('网络或者服务器异常，请稍后重试');
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 401:
    //       let res = error.response.data;
    //       if (res.data.location) {
    //         Vue.prototype.$message({
    //           message: '登录失效,请重新登录!',
    //           type: 'error'
    //         });
    //         setTimeout(() => {
    //           localStorage.clear();
    //           window.location.href = res.data.location;
    //         }, 1000);
    //       } else {
    //         Vue.prototype.$message({
    //           message: '暂时没有开通权限',
    //           type: 'error'
    //         });
    //       }
    //       break;
    //   }
    // } else {}
    // return Promise.reject(error);
  // });
Vue.prototype.$axios = axios;
