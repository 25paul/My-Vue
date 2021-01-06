const state = {
  stateB: 0
}

const mutations = {
  setStateB: state => {
    state.stateB++;
  },
  setStateBByN: (state, n) => {
    state.stateB = state.stateB + n;
  }
}

const actions = {
  actionStateB: ({commit}) => {
    setTimeout(() => {
      commit('setStateB');
    }, 1000);
  },
  actionStateBByN: ({commit}) => {
    setTimeout(() => {
      commit('setStateBByN');
    }, 1000);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}