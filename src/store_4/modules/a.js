const state = {
  stateA: 0
}

const mutations = {
  setStateA: state => {
    state.stateA++;
  },
  setStateAByN: (state, n) => {
    state.stateA = state.stateA + n;
  }
}

const actions = {
  actionStateA: ({commit}) => {
    setTimeout(() => {
      commit('setStateA');
    }, 1000);
  },
  actionStateAByN: ({commit}) => {
    setTimeout(() => {
      commit('setStateAByN', 10);
    }, 1000);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}