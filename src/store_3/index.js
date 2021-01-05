import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1
}

const moduleA = {
  namespaced: true,
  state: () => ({
    aCount: 0
  }),
  mutations: {
    increment: state => {
      state.aCount++;
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      console.log(rootState);
      if ((state.aCount + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  },
  getters: {
    doubleCount (state) {
      return state.aCount * 2
    }
  }
}

const moduleB = {
  namespaced: true,
  state: () => ({
    bCount: 0
  }),
  mutations: {
    increment: state => {
      state.bCount++;
    }
  },
  actions: {}
}

const store = new Vuex.Store({
  state,
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store;


/**
 * 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
 * 如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
 * 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。this.$store.commit('a/increment');
 */
