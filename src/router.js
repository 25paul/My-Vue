
import Vue from 'vue'
import vueRouter from 'vue-router';
import Home from './pages/Home.vue';
import TodoList from './pages/TodoList.vue';

Vue.use(vueRouter);

export default new vueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    }
  ]
})