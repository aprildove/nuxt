<template>
  <div class="art-container">
    <div class="pic-box" @click="enterPageById(item)">
      <img v-if="!item.descImg" src="../../assets/images/pic-1.jpg">
      <!-- <img v-else="item.descImg" :src="'http://w-lab01.skyeye.shbt.qihoo.net:12312' + item.descImg"/> -->
      <img v-else="item.descImg" :src="item.descImg"/>
    </div>
    <div class="text-box">
      <headline :item="item"></headline>
      <div class="ava">
        <img v-if="!item.descImg" src="../../assets/images/photo.jpg">
        <!-- <img v-else="item.descImg" :src="'http://w-lab01.skyeye.shbt.qihoo.net:12312' + item.headImg"/> -->
        <img v-else="item.descImg" :src="item.headImg"/>
      </div>
      <tags :item="item"></tags>
      <div class="author">
        <a>
          <img src="../../assets/images/meditor-time.png">
        </a>
        {{item.publish_time.substr(0, 10)}} , {{item.author}} ,{{item.category}} 
      </div>
      <div class="brief">
        {{item.abstract}}
      </div>
    </div>
  </div>
</template>
<script>
  // import $ from 'jquery'
  import Tags from './Tags.vue'
  import Title from './Title.vue'
  import { mapActions } from 'vuex'
  export default {
    props: ['item'],
    components: {
      tags: Tags,
      headline: Title
    },
    methods: {
      ...mapActions(['pipePageId']),
      enterPageById: function (item) {
        let isRid = item.readableId ? 1 : 0
        let id = item.readableId || item._id
        let param = [id, isRid]
        this.pipePageId(param)
        window.location.pathname = '/articles/' + id
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
    border-bottom: solid #deded7 1px;
    .text-box {
      margin-left: 320px;
      top: 0;
      .brief {
        text-indent: 25px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-height: 108px;
      }
      .href {
        cursor: pointer;
        color: #53addd;
        text-indent: 25px;
      }
      .ava img {
        border-radius:50%;
        height: 48px;
        width: 48px;
        float: left;
        margin: 12px;
      }
      .author {
        display: inline-block;
        line-height: 32px;
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
    .pic-box {
      width: 300px;
      max-height: 200px;
      border-radius: 5px;
      position: absolute;
      display: inline-block;
      top: 0;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }

  /**
     响应式布局
   */
  @media screen and ( min-width: 950px ) and ( max-width: 1250px) {
    .art-container {
      .text-box {
        margin-left: 10px;
      }
      .pic-box {
        width: 0;
      }
    }
  }
  @media screen and ( min-width: 200px ) and ( max-width: 950px) {
    .art-container {
      .text-box {
        margin-left: 10px;
      }
      .pic-box {
        width: 0;
      }
    }
  }
</style>
