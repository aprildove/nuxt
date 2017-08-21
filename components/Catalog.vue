<template>
  <div class="left-con">
    <div class="main-part">
      <div class="art-list">
        <introduce v-for="item in catContent.msg" 
          :key="item._id" :item="item"></introduce>
      </div>
      <div>
        <p v-for="i in catContent[0]">
          
        </p>
      </div>
      <div class="paging" v-show="isShowPaging">
        <a class="left pag-btn" :class="{'btn-unable': curPage < 2 }" :href="'/'" @click="togBtnDown('before')">
          上一页
        </a>
        <a class="right pag-btn" :class="{'btn-unable': curPage >= totalPage }" :href="'/pages/2'" @click="togBtnDown('next')">
          下一页
        </a>
        <div class="mid">
          第 {{ curPage }}/{{ totalPage }} 页
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Introduce from './Catalog/Introduce.vue'
  import { mapState, mapActions } from 'vuex'
  export default {
    data: function () {
      return {
        curPage: 1,
        totalPage: 1,
        isShowPaging: true
      }
    },
    props: ['catContent'],
    computed: {
      ...mapState(['tagParam', 'isMainPage', 'pageNum'])
    },
    components: {
      introduce: Introduce
    },
    methods: {
      ...mapActions(['pipePageNum']),
      togBtnDown: function (type) {
        if (type === 'before') {
          if (this.curPage > 1) {
            this.curPage -= 1
            this.pipePageNum([this.curPage, 2])
          }
        } else if (type === 'next') {
          if (this.curPage < this.totalPage) {
            this.curPage += 1
            this.pipePageNum([this.curPage, 2])
          }
        }
      }
    },
    created () {
      if (process.browser) {
        let path = window.location.pathname
        let num = path && path.split('/')[2]
        this.curPage = num || this.pageNum[0]
        this.totalPage = this.pageNum[1]
        if () {
          this.isShowPaging = false
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .left-con {
    height: 100%;
    width: 100%;
    float: left;
  }
  .main-part {
    margin-right: 348px;
  }
  .art-list {
    margin: 20px 20px auto 108px;
  }
  .paging {
    margin:20px 20px auto 108px;
    padding-bottom: 20px;
    border-bottom: solid 1px #efefef;
    .pag-btn {
      line-height: 40px;
      height: 40px;
      color: #53addd;
      text-align: center;
      width: 180px;
      border: solid 1px #53addd;
      border-radius: 2px;
      cursor: pointer;
      user-select: none;
      font-size: 14px;
      .ico {
        width: 14px;
        height: 14px;
        padding-top: 13px;
        display: inline-block;
        background-size: 14px;
        background-repeat: no-repeat;
      }
      p {
        display: inline-block;
      }
    }
    .pag-btn:hover, .pag-btn:active, .btn-unable, .btn-unable:hover {
      color: #fff;
    }
    .pag-btn:hover {
      background-color: #72c4f0;
      border-bottom: solid 1px #72c4f0;
    }
    .pag-btn:active {
      background-color: #409ed0;
    }
    .btn-unable, .btn-unable:hover {
      background-color: #dadee5;
      border: solid 1px #dadee5;
      cursor: not-allowed;
    }
    .left {
      float: left;
      p{
        padding-left: 7px;
      }
    }
    .right {
      float: right;
      p {
        padding-right: 7px;
      }
    }
    .mid {
      text-align: center;
      line-height: 40px;
      height: 40px;
      color: #979996;
      margin: auto 200px;
      user-select: none;
      cursor: default;
    }
  }
  /**
     响应式布局
   */
  @media screen and ( min-width: 950px ) and ( max-width: 1250px) {
  }
  @media screen and ( min-width: 550px ) and ( max-width: 950px) {
    .main-part{
      margin-right: 108px;
      .paging {
        margin-right: 108px;
        .left, .right {
          width: 25%;
        }
        .mid {
          margin: auto 30%;
        }
      }
    }
  }
  @media screen and ( min-width: 200px ) and ( max-width: 550px ) {
    .main-part, .paging {
      margin: 20px 40px;
      .art-list {
        margin: 0;
      }
    }
    .paging {
      .left, .right {
        width: 25%;
      }
      .mid {
        margin: auto 30%;
      }
    }
  }
</style>
