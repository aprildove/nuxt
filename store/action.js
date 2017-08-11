import * as types from './mutations.js'
export const pipePageId = function (store, paramId) {
  store.commit(types.PIPE_PAGE_ID, paramId)
}
export const pipeTagParam = function (store, param) {
  store.commit(types.PIPE_TAG_PARAM, param)
}
export const pipeIsMainPage = function (store, flag) {
  store.commit(types.PIPE_IS_MAIN_PAGE, flag)
}
export const pipePageNum = function (store, param) {
  store.commit(types.PIPE_PAGE_NUM, param)
}
export const pipeArticleData = function (store, articleData) {
  store.commit(types.PIPE_ARTICLE_DATA, articleData)
}
