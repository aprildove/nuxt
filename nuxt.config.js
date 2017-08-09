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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
      let list = []
      let port = '/api/v1/article/list'
      let pageTotal = 2
      let test = false
      let getArtId = axios.create()
      getArtId.defaults.baseURL = 'http://w-lab01.skyeye.shbt.qihoo.net:12312'
      getArtId.defaults.headers.common['X-Token'] = '4b435e5175092e040d98c15992cfc23b'
      if (test) {
        getArtId.get(port)
          .then(() => {
          })
          .catch((err) => {
            console.log('this port %s err is $s', port, err)
          })
      } else {
        /**
         * 得到所有的文章页数
         * 先拿到页数，router再接收promise.all返回所有id和callback，
         */
        let otherURL = new Array(pageTotal)
        let j = 0
        for (let i = 1, len = pageTotal; i <= len; i++) {
          otherURL[j++] = port + '/' + i
        }
        console.log('otherURL', otherURL)
        /**
         * 得到所有的文章id
         */
        Promise.all(otherURL.map((portId) => {
          return getArtId.get(portId)
            .then((res) => {
              return list.concat(res.data.msg.map((item) => {
                return '/articles/' + (item.readableId || item._id)
              }))
            })
            .catch((err) => {
              console.log('this port %s err is $s', port, err)
            })
        })).then((res) => {
          let idArr = res.reduce((c, d) => { return c.concat(d) })
          callback(null, idArr)
          console.log(idArr, 'aaa--idArr')
        })
      }
    }
  },
  plugins: [
    {
      src: '~plugins/hljs/highlightjs.min.js',
      ssr: false
    }
  ]
}
