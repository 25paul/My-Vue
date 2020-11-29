import Vue from 'vue'
import App from './App.vue'

import './directives/demo.js'
import './directives/scrollLoading.js'
import './directives/popupDrag';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
