<template>
  <div class="main-part">
    <div class="art-list">
      <introduce
        v-for="item in catList" :key="item._id"
        v-bind:item="item" :is-main-page="isMainPage"
      ></introduce>
    </div>
  </div>
</template>
<script>
  import Introduce from './Catalog/Introduce.vue'
  import { getCat } from '../static/api.js'
//  import { navType } from 'VUEX/getters'
  export default {
//    vuex: {
//      getters: {
//        navType
//      }
//    },
    data: function () {
      return {
        catList: []
      }
    },
    props: ['isMainPage'],
    watch: {
      navType (now, old) {
        this.getCateList(now)
      }
    },
    components: {
      introduce: Introduce
    },
    methods: {
      getCateList (param) {
        let type = param && param[0]
        let itemName = param && param[1]
        getCat(type, itemName)
          .then((data) => {
            this.catList = data
          }).catch(err => {
            console.log(err)
          })
      }
    },
    created () {
      this.getCateList()
    }
  }
</script>
<style lang="less" scoped>
  .main-part {
    margin-right: 348px;
    float: left;
    position: absolute;
  }
  .art-list {
    margin: auto 20px auto 108px;
  }
</style>
