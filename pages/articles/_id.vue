<template>
  <section>
    <navigation></navigation>
    <detail></detail>
  </section>
</template>
<script>
  import Nav from '../../components/Navigation.vue'
  import Detail from '../../components/Detail.vue'
  import { getById } from '../../static/api.js'
  import { mapActions, mapState } from 'vuex'
  export default {
    components: {
      navigation: Nav,
      detail: Detail
    },
    computed: {
      ...mapState(['pageId'])
    },
    watch: {
      pageId (now, old) {
        console.log('Watch pageId: %s, oldId %s', now, old)
      },
      articleData: function (now, old) {
        console.log('Watch articleData %s, old $s', now, old)
      }
    },
    methods: {
      ...mapActions(['pipeIsMainPage', 'pipeArticleData'])
    },
    created () {
      this.pipeIsMainPage(false)
      // 拿到请求的数据，传给Detail.vue
      this.pipeArticleData(this.articleData)
    },
    asyncData (context) {
      let id = context.params.id
      let isRid = id.indexOf('-') > -1 || true
      return getById(id, isRid)
        .then((res) => {
          if (process.env.NODE_ENV === 'development') {
            res.content = res.content.replace(/\/uploads/g, 'http://w-lab01.skyeye.shbt.qihoo.net:12312/uploads/')
          }
          return {articleData: res}
        })
        .catch(err => {
          console.log(err, 'zz-noData')
        })
    }
  }
</script>
<style>
</style>
