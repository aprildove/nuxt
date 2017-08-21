<template>
  <section>
    <navigation></navigation>
    <div class="container">
      <catalog :catContent="catContent"></catalog>
      <tag :tagAllList="tagAllList"></tag>
    </div>
  </section>
</template>
<script>
  import { getCat, getTagList } from '../../static/api.js'
  import Nav from '../../components/Navigation.vue'
  import Tag from '../../components/NewTag.vue'
  import Catalog from '../../components/Catalog.vue'
  import { mapActions } from 'vuex'
  export default {
    data: function () {
      return {
        catContent: {}
      }
    },
    components: {
      navigation: Nav,
      tag: Tag,
      catalog: Catalog
    },
    methods: {
      ...mapActions(['pipeIsMainPage', 'pipePageNum']),
      getCateList (page, param) {
        let type = 'category'
        let itemName = param && param[1]
        if (itemName === '全部') {
          type = itemName = null
        }
        getCat(page, type, itemName)
          .then((data) => {
            this.catContent = data
            this.totalPage = data.pageTotal
          }).catch(err => {
            console.log(err)
          })
      }
    },
    created () {
      this.pipeIsMainPage(true)
      this.catContent = this.tagAllList[2]
    },
    asyncData (context) {
      let item = context.params.type
      let type = 'category'
      let isAll = (item === '全部' || item === encodeURI('全部'))
      if (isAll) item = type = null
      let cat = getCat(1, type, item).then((res) => {
        return res
      }).catch(err => {
        console.log(err)
      })
      let tag = getTagList('tag').then((res) => {
        return [{'tag': '全部'}].concat(res)
      }).catch(err => {
        console.log(err)
      })
      let cate = getTagList('category').then((res) => {
        return [{'category': '全部'}].concat(res)
      }).catch(err => {
        console.log(err)
      })
      return Promise.all([tag, cate, cat]).then((res) => {
        return {tagAllList: res}
      })
    }
  }
</script>
<style lang="less" scoped>
  .container {
    margin: 0 auto;
    max-width: 1450px;
  }
</style>
