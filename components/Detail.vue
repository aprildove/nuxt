<template>
  <div class='article-page'>
    <div class='page-header'>
      <headline :item='articleData'></headline>
      <div class="ava">
        <img>
      </div>
      <tags :item='articleData'></tags>
      <div class="author lh32">
        {{articleData.author}} on {{publishTime}}
      </div>
    </div>
    <div class='main-body' v-html="articleData.content">
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import Tags from './Catalog/Tags.vue'
  import Title from './Catalog/Title.vue'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        readMore: 'Read',
        isMainPage: false,
        publishTime: ''
      }
    },
    components: {
      tags: Tags,
      headline: Title
    },
    computed: {
      ...mapState(['articleData'])
    },
    watch: {
      articleData: function (now, old) {
        if (now) {
          this.publishTime = now.publish_time.substr(0, 10)
        }
      }
    },
    mounted () {
      if (process.browser) {
        $('.hljs code').each(function (i, block) {
          var lines = $(this).text().split('\n').length - 1
          var $numbering = $('<ul/>').addClass('pre-numbering')
          $(this).addClass('has-numbering').parent().append($numbering)
          for (i = 1; i <= lines; i++) {
            $numbering.append($('<li/>').text(i))
          }
        })
        this.publishTime = this.articleData.publish_time.substr(0, 10)
        // 转换头像地址， 格式化发布时间
        let imgSrc = process.env.NODE_ENV !== 'production' ? 'http://w-lab01.skyeye.shbt.qihoo.net:12312' : ''
        $('.ava img')[0].src = this.articleData.headImg ? (imgSrc + this.articleData.headImg) : '../../assets/images/photo.jpg'
      }
    }
  }
</script>
<style lang='less' scoped>
  .article-page {
    margin: 0 auto;
    max-width: 1108px;
    background-size: cover;
    .page-header {
      border-bottom: solid #efefef 1px;
      .ava img {
        border-radius:50%;
        height: 56px;
        width: 56px;
        float: left;
        margin: 12px;
      }
      .title {
        font-size: 48px;
        color: #0b1802;
        font-family: "Verdana, 微软雅黑, 宋体, Geneva, 'sans-serif'";
      }
      .author {
        display: inline-block;
        color: #979996;
        font-size: 16px;
        font-family: "Verdana, 微软雅黑, 宋体, Geneva, 'sans-serif'";
        margin: 12px 7px 12px 0;
        line-height: 16px;
        .ico-time img {
          width: 16px;
          height: 16px;
        }
      }
    }
    .main-body {
      padding: 0 108px;
      margin: 28px auto 168px;
      background: url('../assets/images/post-entry-bg.png') no-repeat -10px 9px;
    }
  }
</style>
