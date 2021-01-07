import Vue from 'vue'
import App from './App.vue'

import store from './store_3/index.js';

console.log(store);

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  store
}).$mount('#app')

console.log(vm);

// 为了在 Vue 组件中访问 this.$store property，你需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 store 选项的方式“注入”该 store 的机制
