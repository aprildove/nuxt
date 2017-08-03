import * as types from './mutations.js'
export const pipePage = function (store, id) {
  store.commit(types.PIPE_PAGE, id)
}
export const pipeTagParam = function (store, param) {
  store.commit(types.PIPE_TAG_PARAM, param)
}
export const pipeIsMainPage = function (store, flag) {
  store.commit(types.PIPE_IS_MAIN_PAGE, flag)
}
export const pipeToTalPage = function (store, num) {
  store.commit(types.PIPE_TOTAL_PAGE, num)
}
