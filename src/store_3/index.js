import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1
}

const getters = {
  rootDouble (state) {
    return state.count * 2;
  }
}

const mutations = {
  increment: state => {
    state.count++;
  }
}

const moduleA = {
  namespaced: true,
  state: () => ({
    aCount: 1
  }),
  mutations: {
    increment: (state, a) => {
      console.log(a);
      state.aCount++;
    },
    // 可以接受 `root` 属性以访问根 dispatch 或 commit
    // getRootIncrement: (state) => {
    //   state.commit('increment');
    //   state.commit('increment', null, { root: true })
    // }
  },
  actions: {
    // 根节点状态则为 context.rootState
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      console.log(rootState);
      if ((state.aCount + rootState.count) % 2 === 1) {
        commit('increment')
      }
    },
    // 在这个模块中， dispatch 和 commit 也被局部化了
    // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
    getRootIncrement (context) {
      console.log(context);
      context.commit('increment');
      context.commit('increment', null, { root: true })
    },

    // 在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler 中
    // commit的是局部的mutations
    rootAction: {
      root: true,
      handler (context, payload) {
        console.log(payload);
        context.commit('increment');
      }
    }
  },
  getters: {
    // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来
    doubleCount (state) {
      return state.aCount * 2
    },
    // 在这个模块的 getter 中，`getters` 被局部化了
    // 你可以使用 getter 的第四个参数来调用 `rootGetters`
    doubleandloca (state, getters, rootState, rootGetters) {
      // 1 + 2 + 1 + 2
      return state.aCount + getters.doubleCount + rootState.count + rootGetters.rootDouble;
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
  getters,
  mutations,
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
