<template>
  <div class="art-container">
    <div class="pic-box">
      <img v-if="!item.descImg" src="../../assets/images/pic-1.jpg">
      <img v-else="item.descImg"
                v-bind:src="'http://w-lab01.skyeye.shbt.qihoo.net:12312' + item.descImg"/>
    </div>
    <div class="text-box">
      <headline :item="item"></headline>
      <tags :item="item"></tags>
      <div class="author lh32">
        <a>
          <img src="../../assets/images/meditor-time.png">
        </a>
        {{item.author}} on {{item.category}}
      </div>
      <div class="brief">
        {{item.abstract}}
        <nuxt-link :to="'/articles/' + item._id" class="href" @click="enterPageById(item)">
          阅读全文
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Tags from './Tags.vue'
  import Title from './Title.vue'
  import * as types from '../../store/mutations.js'
  export default {
    props: ['item'],
    components: {
      tags: Tags,
      headline: Title
    },
    methods: {
      enterPageById: function (item) {
        this.$store.commit(types.PIPE_PAGE, item._id)
      }
    }
  }
</script>
<style lang="less" scoped>
  .art-container {
    margin-top: 16px;
    padding-bottom: 16px;
    width: 100%;
    height: 216px;
    position: relative;
    border-bottom: solid #efefef 1px;
    .text-box {
      margin-left: 32%;
      top: 0;
      width: 65%;
      .brief {
        text-indent: 25px;
      }
      .href {
        cursor: pointer;
        color: #53addd;
        text-indent: 25px;
      }
    }
    .pic-box {
      width: 30%;
      max-height: 200px;
      max-width: 300px;
      position: absolute;
      display: inline-block;
      top: 0;
      overflow: hidden;
      img {
        width: 100%;
      }
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
