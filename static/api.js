import axios from 'axios'

let getFun = axios.create()
getFun.defaults.baseURL = 'http://w-lab01.skyeye.shbt.qihoo.net:12312'
getFun.defaults.headers.common['X-Token'] = '4b435e5175092e040d98c15992cfc23b'

/**
 * 显示在主页的中下方，展示文章的摘要、分类等信息
 * @param              type 为''时，只返回article/list的数据
 *                     type 为 category 按照分類category搜索 例如：/api/v1/article/find/category/技术研究/1
 *                     type 为 tag 按照标签tag搜索 例如：/api/v1/article/find/tag/apt/1
 * @param              itemName catagory或tag的项
 * @returns {Promise}
 */
export const getCat = function (type, itemName) {
  return new Promise((resolve, reject) => {
    let normalList = '/api/v1/article/list'
    let catList = '/api/v1/article/find/' + type + '/' + itemName
    let port = type ? catList : normalList
    getFun.get(port)
      .then(function (res) {
        resolve(res.data.msg)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

/**
 * 用于按文章id搜索， 返回结果为文章内容
 * @param id           文章id
 * @returns {Promise}  返回结果
 */
export const getById = function (id) {
  return new Promise((resolve, reject) => {
    getFun.get('/api/v1/article/find/id/' + id)
      .then(function (res) {
        resolve(res.data.msg)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

/**
 * 首页中右侧Tag分类用到的接口
 * @param type          type为category，按分类返回; type为tag按标签种类返回
 * @returns {Promise}   返回的结果
 */
export const getTagList = function (type) {
  return new Promise((resolve, reject) => {
    getFun.get('/api/v1/' + type + '/list')
      .then(function (res) {
        resolve(res.data.msg)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

/**
 * 搜索接口中用到的,用关键字搜索
 * @param keyword      搜索的关键字
 * @returns {Promise}  结果
 */
export const getByKeyword = function (keyword) {
  return new Promise((resolve, reject) => {
    getFun.get('/api/v1/article/find/contain/' + keyword)
      .then(function (res) {
        resolve(res.data.msg)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

/**
 * 用作者名搜索
 * @param author       搜索的作者名
 * @returns {Promise}  得到的结果
 */
export const getByAuthor = function (author) {
  return new Promise((resolve, reject) => {
    getFun.get('/api/v1/article/find/author/' + author)
      .then(function (res) {
        resolve(res.data.msg)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}
