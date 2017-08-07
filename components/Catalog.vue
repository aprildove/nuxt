<template>
  <div class="left-con">
    <div class="main-part">
      <div class="art-list">
        <introduce
          v-for="item in catList" :key="item._id" :item="item"></introduce>
      </div>
      <div class="paging">
        <div class="left pag-btn"  @click="togBtnDown('new')"
             :class="{'btn-unable': curPage < 2 }">
          上一页
        </div>
        <div class="right pag-btn"  @click="togBtnDown('old')"
             :class="{'btn-unable': curPage >= totalPage }">
          下一页
        </div>
        <div class="mid">
          第 {{ curPage }}/{{ totalPage }} 页
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Introduce from './Catalog/Introduce.vue'
  import { getCat } from '../static/api.js'
  import { mapState } from 'vuex'
  export default {
    data: function () {
      return {
        catList: [],
        curPage: 1,
        totalPage: 1
      }
    },
    computed: {
      ...mapState(['tagParam', 'isMainPage'])
    },
    watch: {
      tagParam (now) {
        this.getCateList(1, now)
      }
    },
    components: {
      introduce: Introduce
    },
    methods: {
      togBtnDown: function (type) {
        if (type === 'new') {
          if (this.curPage > 1) {
            this.curPage -= 1
            this.getCateList(this.curPage)
          }
        } else if (type === 'old') {
          if (this.curPage < this.totalPage) {
            this.curPage += 1
            this.getCateList(this.curPage)
          }
        }
      },
      getCateList (page, param) {
        let type = param && param[0]
        let itemName = param && param[1]
        if (itemName === '全部') {
          type = itemName = null
        }
        getCat(page, type, itemName)
          .then((data) => {
            this.catList = data.msg
            this.totalPage = data.pageTotal
          }).catch(err => {
            console.log(err)
          })
      }
    },
    created () {
      this.getCateList(1)
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
      /*.lArror {*/
        /*background-image: url('../assets/images/arror-left-grey.svg');*/
      /*}*/
      /*.rArror {*/
        /*background-image: url('../assets/images/arror-right-grey.svg');*/
      /*}*/
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
