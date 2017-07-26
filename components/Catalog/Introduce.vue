<template>
  <div class="art-container" v-if="item">
    <div class="pic-box">
      <img src="../../assets/images/pic-1.jpg">
    </div>
    <div class="text-box">
      <headline :item="item" :is-main-page="isMainPage"></headline>
      <tags :item="item"></tags>
      <div class="author lh32">
        <a>
          <img src="../../assets/images/meditor-time.png">
        </a>
        {{item.author}} on {{item.category}}
      </div>
      <div class="brief">
        {{item.abstract}}
        <a @click="enterPageById(item)">阅读全文</a>
      </div>
    </div>
  </div>
</template>

<script>
  import Tags from './Tags.vue'
  import Title from './Title.vue'

  export default {
    data () {
      return {
        isMainPage: true
      }
    },
    props: ['item'],
    components: {
      tags: Tags,
      headline: Title
    },
    methods: {
      enterPageById: function (item) {
        this.vConfig.isMainPage = false
        this.$dispatch('change.isMainPage', false)
        this.$dispatch('change.pageId', item._id)
      }
    }
  }
</script>
<style lang="less" scoped>
  .art-container {
    margin: 16px auto;
    padding-bottom: 16px;
    width: 100%;
    height: 100%;
    min-height: 200px;
    position: relative;
    border-bottom: solid #efefef 1px;
    .text-box {
      margin-left: 35%;
      top: 0;
      width: 65%;
    }
    .pic-box {
      width: 30%;
      max-height: 200px;
      position: absolute;
      display: inline-block;
      top: 0;
      overflow: hidden;
    }
  }
  .lh32 {
    line-height: 32px;
  }
  .author {
    display: inline-block;
    img {
      width: 16px;
      height: 16px;
    }
  }
</style>
