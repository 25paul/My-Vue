import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1
}

const moduleA = {
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
  state: () => ({
    bCount: 0
  }),
  mutations: {},
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