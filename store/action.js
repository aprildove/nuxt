import * as types from './mutations.js'
export const pipePage = function (store, id) {
  store.commit(types.PIPE_PAGE, id)
}
// export const pipePage2 = function (store, id) {
//   store.dispatch('pipePage', )
// }
