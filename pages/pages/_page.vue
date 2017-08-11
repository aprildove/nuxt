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
  import { mapActions, mapState } from 'vuex'
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
        let type = param && param[0]
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
    computed: {
      ...mapState(['pageNum', 'tagParam'])
    },
    watch: {
      tagParam (now) {
        this.getCateList(1, this.tagParam)
      }
    },
    created () {
      this.pipeIsMainPage(true)
      this.catContent = this.tagAllList[2]
    },
    asyncData (context) {
      let num = context.params.page
      let tag = getTagList('tag').then((res) => {
        return [{'tag': '全部'}].concat(res)
      })
      let cate = getTagList('category').then((res) => {
        return [{'category': '全部'}].concat(res)
      })
      let cat = getCat(num).then((res) => {
        return res
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
