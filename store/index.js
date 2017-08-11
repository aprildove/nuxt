import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations.js'
import * as actions from './action.js'

Vue.use(Vuex)

const state = {
  pageId: [],
  tagParam: [],
  isMainPage: true,
  pageNum: [1, 2], // [当前页数，总页数]
  articleData: {}
}

const mutations = {
  [types.PIPE_PAGE_ID] (state, param) {
    state.pageId = param
  },
  [types.PIPE_TAG_PARAM] (state, param) {
    state.tagParam = param
  },
  [types.PIPE_IS_MAIN_PAGE] (state, flag) {
    state.isMainPage = flag
  },
  [types.PIPE_PAGE_NUM] (state, param) {
    state.pageNum = param
  },
  [types.PIPE_ARTICLE_DATA] (state, articleData) {
    state.articleData = articleData
  }
}

export default function () {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}
