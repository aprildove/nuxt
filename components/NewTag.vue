<template>
  <div class='tag' v-if='isMainPage'>
    <div class="tag-header">
      <div class="tag-header h-left" :class="{ 'h-chosen' : type == 'tagList'}"
           @click="toggle('tagList')">标签</div>
      <div class="tag-header h-right" :class="{ 'h-chosen' : type == 'catList'}"
           @click="toggle('catList')">类别</div>
    </div>
    <div class="tag-body">
      <ul class="tag-list">
        <li class="tag-item" :class="{'item-chosen': tagItem == item.category}"
            v-if="(type == 'catList') && item.category" v-for='item in CatList'
            @click="sortByType('category', item)">
          <a>
            {{item.category}}
          </a>
        </li>
        <li class="tag-item" :class="{'item-chosen': tagItem == item.tag }"
            v-if="type == 'tagList'" v-for='item in TagList'
            @click="sortByType('tag', item)">
          <a>{{item.tag}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { getTagList } from '../static/api.js'
  import * as types from '../store/mutations.js'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        CatList: [],
        TagList: [],
        type: 'tagList',
        tagItem: '全部'
      }
    },
    computed: {
      ...mapState(['isMainPage'])
    },
    methods: {
      sortByType: function (type, item) {
        let param = [type, item[type]]
        this.$store.commit(types.PIPE_TAG_PARAM, param)
        this.tagItem = item[type]
        console.log(this.tagItem)
      },
      toggle: function (item) {
        this.type = item
      }
    },
    created () {
      getTagList('category')
        .then((res) => {
          this.CatList = [{category: '全部'}].concat(res)
        })
        .catch(err => {
          console.log(err)
        })
      getTagList('tag')
        .then((res) => {
          this.TagList = [{tag: '全部'}].concat(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>
<style lang='less' scoped>
  .tag {
    width: 220px;
    float: left;
    background-color: #effefe;
    margin-top: 50px;
    margin-left: -311px;
    user-select:none;
    .tag-header {
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      background-color: #fafafa;
      text-align: center;
      font-size: 15px;
      color: #494b48;
      font-weight: bold;
      font-family: monospace;
      .tag-header {
        width: 110px;
        height: 40px;
        border: solid #efefef 1px;
        background-color: #fafafa;
      }
      .tag-header:hover {
        background-color: #66bcff;
        color: #fff;
        border: solid #66bcff 1px;
      }
      .h-chosen {
        color: #fff;
        background-color: #47afff;
        border: solid #47afff 1px;
      }
      .h-left {
        float: left;
      }
      .h-right {
        overflow: hidden;
      }
    }
    .tag-body {
      border: solid #efefef 1px;
      background-color: white;
      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;
      .tag-list {
        padding: 10px;
        margin-bottom: 0;
        cursor: pointer;
        .tag-item {
          padding: 2px 8px;
          color: #0b1802;
          font-size: 13px;
          list-style: none;
          a {
            padding: 4px;
            border-radius: 2px;
            display: inline-block;
          }
        }
        .item-chosen a {
          color: #fff;
          background-color: #53addd;
        }
        .tag-item:hover a {
          color: #fff;
          background-color: #72c4f0;
        }
      }
    }
  }
  @media screen and ( min-width: 550px ) and ( max-width: 950px) {
    .tag {
      visibility: hidden;
    }
  }
  @media screen and (max-width: 550px ) {
    .tag {
      visibility: hidden;
    }
  }
</style>
