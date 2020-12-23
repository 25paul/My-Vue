const ENV = process.env.NODE_ENV;

let apiAddr = '/api';  // 'http://192.168.1.201:8899/mlmp'; // 'http://192.168.206.3:9107/mlmp'; //

if (ENV === 'production') {
  apiAddr = '/api';
}

export {
  apiAddr
};
