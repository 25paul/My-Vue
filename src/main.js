import Vue from 'vue'
import App from './App.vue'

import './styles/common.scss'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';

import router from './router.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
