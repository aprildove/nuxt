<template>
  <div class='article-page'>
    <div class='page-header'>
      <headline :item='articleData' :is-main-page='isMainPage'></headline>
      <tags :item='articleData'></tags>
      <div class="author lh32">
        <a>
          <img src="../assets/images/meditor-time.png">
        </a>
        {{articleData.publish_time}} on Botnet,DDoSMon, DRDoS
      </div>
    </div>
    <div class='main-body'>
    </div>
    <div class='page-footer'>
      <div class="left">
        <a>
          <img src="../assets/images/Avatar.jpg">
        </a>
        <div class="author-more">
          <p class="name">
            {{articleData.author}}
          </p>
          <p class="more">
            Read<a>more posts</a>by this author
          </p>
        </div>
      </div>
      <div class="right">
        <p class="share-text">share this post</p>
        <p class="logo">
          <a href="https://twitter.com/share" target="_blank">
            <img src="../assets/images/twitter.png">
          </a>
          <a href="https://www.facebook.com/sharer.php?u=${shareUrl}" target="_blank">
            <img src="../assets/images/facebook.png">
          </a>
          <a href="http://www.google.com/bookmarks/mark?op=add&bkmk=<?php the_permalink() ?>&title=<?php the_title(); ?" target="_blank">
            <img src="../assets/images/google.png">
          </a>
          <a href="http://service.weibo.com/share/share.php?appkey=&title=&url=&searchPic=false&style=simple" target="_blank">
            <img src="../assets/images/weibo.png">
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import Tags from './Catalog/Tags.vue'
  import Title from './Catalog/Title.vue'
  import { getById } from '../static/api.js'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        readMore: 'Read',
        isMainPage: false,
        articleData: {}
      }
    },
    components: {
      tags: Tags,
      headline: Title
    },
    computed: {
      ...mapState(['pageId'])
    },
    watch: {
      pageId (now) {
        this.getCateList(now)
      }
    },
    methods: {
      convertImgSrc: function () {
        let nodes = []
        nodes = document.querySelectorAll('.main-body img')

        nodes.forEach(function (e) {
          let newUrl = 'http://w-lab01.skyeye.shbt.qihoo.net:12312/' + e.src.substr(e.src.indexOf('/uploads'))
          e.src = newUrl
        })
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
      let id1 = this.pageId
      getById(id1)
        .then((res) => {
          this.articleData = res
          let parent = document.getElementsByClassName('main-body')[0]
          this.append(parent, res.content)
          this.convertImgSrc()
        }).catch(err => {
          console.log(err)
        })
    }
  }
</script>
<style lang='less' scoped>
  .article-page {
    margin: auto 108px;
    .page-header {
      border-bottom: solid #efefef 1px;
      .title {
        font-size: 48px;
        color: #0b1802;
        font-family: 'Arial Rounded MT Bold';
      }
      .author {
        display: inline-block;
        color: #ddd;
        font-size: 15px;
        font-family: 'Arial Rounded MT Bold';
        margin: 12px 7px 12px 0;
        line-height: 16px;
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
    .main-body {
      margin: 28px auto 168px;
    }
  }
  .page-footer {
    position: fixed;
    bottom: 0;
    background-color: #efefef;
    height: 108px;
    left: 108px;
    right: 108px;
    .left {
      float: left;
      .author-more {
        float: right;
        margin: 29px auto 15px 9px;
        display: inline-block;
        .name {
          font-family: "Arial Rounded MT Bold";
          font-size: 24px;
          color: #0b1802;
        }
        .more {
          color: #b6b9b3;
          font-family: 'Arial Rounded MT Bold';
          a {
            color: #91c46b;
            margin: auto 4px;
          }
        }
      }
      img {
        border-radius: 50%;
        height: 80px;
        width: 80px;
        margin: 14px auto 14px 20px;
      }
    }
    .right {
      margin-top: 27px;
      float: right;
      .share-text {
        padding-left: 120px;
        font-family: "Arial Rounded MT Bold";
        font-size: 15px;
        color: #b6b9b3;
      }
      img {
        margin: auto 20px;
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
