import Vue from 'vue';
import Vuex from 'vuex';

import _ from 'lodash';

Vue.use(Vuex);

// const myPlugin = store => {
//   // 当 store 初始化后调用
//   store.subscribe((mutation, state) => {
//     console.log('state', state);
//     console.log('mutation', mutation);
//     // 每次 mutation 之后调用
//     // mutation 的格式为 { type, payload }
//   })
// }

const myPluginWithSnapshot = store => {
  let prevState = _.cloneDeep(store.state)
  console.log(prevState)
  store.subscribe((mutation, state) => {
    let nextState = _.cloneDeep(state)

    // 比较 prevState 和 nextState...

    // 保存状态，用于下一次 mutation
    prevState = nextState
    console.log(prevState)
  })
}

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    doubleCount: state => {
      return state.count * 2;
    }
  },
  mutations: {
    increment: state => {
      state.count++;
    },
    increment2: state => {
      state.count--;
    }
  },
  actions: {
    increment: context => {
      context.commit('increment');
    }
  },
  // plugins: [myPlugin]
  plugins: process.env.NODE_ENV !== 'production'
    ? [myPluginWithSnapshot]
    : []
})

export default store;