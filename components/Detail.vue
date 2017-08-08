<template>
  <div class='article-page'>
    <div class='page-header'>
      <headline :item='articleData'></headline>
      <div class="ava">
        <img src="../assets/images/Avatar.jpg" >
      </div>
      <tags :item='articleData'></tags>
      <div class="author lh32">
        {{articleData.author}} on {{publishTime}}
      </div>
    </div>
    <div class='main-body'>
    </div>
    <!--去掉footer组件，star的需求-->
    <!--<main-footer :item="articleData"></main-footer>-->
  </div>
</template>
<script>
  import $ from 'jquery'
  import Tags from './Catalog/Tags.vue'
  import Title from './Catalog/Title.vue'
  import Footer from './Detail/footer.vue'
  import { getById } from '../static/api.js'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        readMore: 'Read',
        isMainPage: false,
        articleData: {},
        artId: [],
        publishTime: ''
      }
    },
    components: {
      tags: Tags,
      headline: Title,
      mainFooter: Footer
    },
    computed: {
      ...mapState(['pageId'])
    },
    watch: {
      pageId (now, old) {
        if (now) {
          console.log('this is now', now, 'this is old', old)
          this.getArticleById(now)
        }
      },
      articleData: function (now, old) {
        if (now) {
          this.publishTime = now.publish_time.substr(0, 10)
        }
      }
    },
    methods: {
      /*
       * 传入文章id来获取文章内容
       * @param id 文章id
       */
      getArticleById: function (param) {
        let id = param && param[0]
        let isRid = param && param[1]
        getById(id, isRid)
          .then((res) => {
            this.articleData = res
            let parent = document.getElementsByClassName('main-body')[0]
            this.append(parent, res.content)
            this.convertImgSrc()
          })
          .catch(err => {
            console.log(err)
          })
      },
      convertImgSrc: function () {
        let nodes = document.querySelectorAll('.main-body img')
        nodes.forEach(function (e) {
          let newUrl = 'http://w-lab01.skyeye.shbt.qihoo.net:12312/' + e.src.substr(e.src.indexOf('/uploads'))
          e.src = newUrl
        })
      },
      getPageId: function () {
        if (process.browser) {
          let id = window.location.pathname.split('/').pop()
          let isRid = id.indexOf('-') > -1
          return [id, isRid]
        }
      },
      /**
       * Javascrit原生实现jquery的append()函数
       * @param parent
       * @param text
       */
      append: function (parent, text) {
        if (typeof text === 'string') {
          let temp = document.createElement('div')
          temp.innerHTML = text
          // 防止元素太多 进行提速
          let frag = document.createDocumentFragment()
          while (temp.firstChild) {
            frag.appendChild(temp.firstChild)
          }
          parent.appendChild(frag)
        } else {
          parent.appendChild(text)
        }
      }
    },
    created () {
      let param = this.getPageId()
      this.getArticleById(param)
    },
    updated () {
      if (process.browser) {
        $('.hljs code').each(function (i, block) {
          var lines = $(this).text().split('\n').length - 1
          var $numbering = $('<ul/>').addClass('pre-numbering')
          $(this).addClass('has-numbering').parent().append($numbering)
          for (i = 1; i <= lines; i++) {
            $numbering.append($('<li/>').text(i))
          }
        })
      }
    }
  }
</script>
<style lang='less' scoped>
  .article-page {
    margin: 0 auto;
    padding: 0 108px;
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
        font-family: 'Arial Rounded MT Bold';
      }
      .author {
        display: inline-block;
        color: #979996;
        font-size: 16px;
        font-family: 'Arial Rounded MT Bold';
        margin: 12px 7px 12px 0;
        line-height: 16px;
        .ico-time img {
          width: 16px;
          height: 16px;
        }
      }
    }
    .main-body {
      margin: 28px auto 168px;
    }
  }
</style>
