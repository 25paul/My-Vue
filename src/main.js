import Vue from 'vue'
import App from './App.vue'

import store from './store_4/index.js';

console.log(store);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
