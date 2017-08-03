<template>
  <div class='page-footer'>
    <div class="left">
      <a>
        <img src="../../assets/images/Avatar.jpg">
      </a>
      <div class="author-more">
        <p class="name">
          {{item.author}}
        </p>
        <p class="more">
          Read<a>more posts</a>by this author
        </p>
      </div>
    </div>
    <div class="right">
      <p class="share-text">share this post</p>
      <p class="logo">
        <a href="https://twitter.com/share" class="twitter" target="_blank" >
        </a>
        <a href="https://www.facebook.com/sharer.php?u=${shareUrl}" class="facebook" target="_blank">
        </a>
        <a href="http://www.google.com/bookmarks/mark?op=add&bkmk=<?php the_permalink() ?>&title=<?php the_title(); ?"
           class="google" target="_blank">
        </a>
        <a href="http://service.weibo.com/share/share.php?appkey=&title=&url=&searchPic=false&style=simple"
           class="weibo" target="_blank">
        </a>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['item']
  }
</script>
<style lang='less' scoped>
  .page-footer {
    position: fixed;
    bottom: 0;
    background-color: #efefef;
    height: 108px;
    left: 0;
    right: 108px;
    width: 100%;
    border-left: solid 108px #efefef;
    border-right: solid 108px #efefef;
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
        padding-left: 104px;
        padding-bottom: 20px;
        font-family: "Arial Rounded MT Bold";
        font-size: 15px;
        color: #b6b9b3;
      }
      .logo {
        a {
          margin: auto 20px;
          width: 20px;
          height: 20px;
          display: inline-block;
          background-size: 20px;
          background-repeat: no-repeat;
        }
        .twitter{
          background-image: url('../../assets/images/twitter.svg')
        }
        .twitter:hover {
          background-image: url('../../assets/images/twitter-active.svg')
        }
        .facebook {
          background-image: url('../../assets/images/facebook.svg')
        }
        .facebook:hover {
          background-image: url('../../assets/images/facebook-active.svg')
        }
        .google {
          background-size: 25px;
          background-image: url('../../assets/images/google.svg')
        }
        .google:hover {
          background-size: 25px;
          background-image: url('../../assets/images/google-active.svg')
        }
        .weibo {
          background-image: url('../../assets/images/weibo.svg')
        }
        .weibo:hover {
          background-image: url('../../assets/images/weibo-active.svg')
        }
      }

    }
  }
</style>
