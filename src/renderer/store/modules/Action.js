const state = {
  current: 'explorer'
}

const mutations = {
  CHANGE_ACTION (state, action) {
    state.current = action
  }
}

const actions = {
  changeAction ({ commit }, action) {
    // do something async
    commit('CHANGE_ACTION', action)
  }
}

export default {
  state,
  mutations,
  actions
}
