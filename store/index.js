import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations.js'
import * as actions from './action.js'

Vue.use(Vuex)

const state = {
  pageId: '',
  tagParam: [],
  isMainPage: true,
  totalPage: 1
}

const mutations = {
  [types.PIPE_PAGE] (state, id) {
    state.pageId = id
  },
  [types.PIPE_TAG_PARAM] (state, param) {
    state.tagParam = param
  },
  [types.PIPE_IS_MAIN_PAGE] (state, flag) {
    state.isMainPage = flag
  },
  [types.PIPE_TOTAL_PAGE] (state, num) {
    state.totalPage = num
  }
}

export default function () {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}
