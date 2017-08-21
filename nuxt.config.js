const axios = require('axios')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '360威胁情报中心',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fav.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|plugins)/
        })
      }
    },
    vendor: ['axios', 'jquery']
  },
  generate: {
    routes: function (callback) {
      let artList = []
      let tagList = []
      let catList = []
      let pageList = []
      let port = '/api/v1/'
      let pageTotal = 2
      let getArtId = axios.create()
      getArtId.defaults.baseURL = 'http://w-lab01.skyeye.shbt.qihoo.net:12312'
      getArtId.defaults.headers.common['X-Token'] = '4b435e5175092e040d98c15992cfc23b'
      
      /**
       * 得到所有的文章页数
       * 先拿到页数，router再接收promise.all返回所有id和callback，
       */
      let pageUrlArr = new Array(pageTotal)
      let j = 0
      for (let i = 1, len = pageTotal; i <= len; i++) {
        pageUrlArr[j++] = port + 'article/list' + '/' + i
        if (i >= 2) {
          pageList.push('/pages/'+ i)
        }
      }

      // Promise.all(pageUrlArr.map((portId) => {
      //   return getArtId.get(portId)
      //     .then((res) => {
      //       return artList.concat(res.data.msg.map((item) => {
      //         return '/articles/' + (item.readableId || item._id)
      //       }))
      //     })
      //     .catch((err) => {
      //       console.log('this port %s err is $s', port, err)
      //     })
      // })).then((res) => {
      //   let idArr = res.reduce((c, d) => { return c.concat(d) }).concat('/pages/2')
      //   console.log(idArr, 'aaa--idArr')
      //   callback(null, idArr)
      // })
      
      /**
       * 得到tag列表
       */ 
      let tagIds = getArtId.get(port + 'tag/list')
        .then((res) => {
          return tagList.concat(res.data.msg.map((item) => {
            return '/tag/' + item.tag
          }))
        })   
      /**
       * 得到category列表
       */   
      let cateIds = getArtId.get(port + 'category/list')
        .then((res) => {
          return catList.concat(res.data.msg.map((item) => {
            return '/category/' + item.category
          }))
        })  

      /**
       * 将上述几个一起返回来
       */

      /**
       * 得到所有的文章id
       */
      Promise.all(pageUrlArr.map((portId) => {
        return getArtId.get(portId)
          .then((res) => {
            return res.data.msg.map((item) => {
              return '/articles/' + (item.readableId || item._id)
            })
          })
      })).then((res) => {
        artList = res.reduce((a, b) => { return a.concat(b) })
        Promise.all([tagIds, cateIds]).then((res) => {
          let idArr = res.reduce((a, b) => { return a.concat(b) }).concat(pageList).concat(artList)
          callback(null, idArr)
        })
      })  
    }
  },
  plugins: [
    {
      src: '~plugins/hljs/highlightjs.min.js',
      ssr: false
    }
  ]
}
