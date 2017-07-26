import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations.js'
import * as actions from './action.js'

Vue.use(Vuex)

const state = {
  pageId: ''
}

const mutations = {
  [types.PIPE_PAGE] (state, id) {
    state.pageId = id
  }
}

export default function () {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}
