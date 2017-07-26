<template>
  <div class='tag' v-if='isMainPage'>
    <div class="tag-header">
      <div class="h h-left" :class="{ 'h-chosen' : type == 'catList'}"
           @click="toggle('catList')">类别</div>
      <div class="h h-right" :class="{ 'h-chosen' : type == 'tagList'}"
           @click="toggle('tagList')">标签</div>
    </div>
    <div class="tag-body">
      <ul class="tag-list">
        <li class="tag-item" :class="{'item-chosen': tagItem == item.category}"
            v-if="type == 'catList'" v-for='item in CatList'
            @click="sortByType('category', item)">{{item.category}}/{{}}</li>
        <li class="tag-item" :class="{'item-chosen': tagItem == item.tag }"
            v-if="type == 'tagList'" v-for='item in TagList'
            @click="sortByType('tag', item)">{{item.tag}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { getTagList } from '../static/api.js'
  export default {
    data () {
      return {
        CatList: [],
        TagList: [],
        type: 'catList',
        tagItem: ''
      }
    },
    props: ['isMainPage'],
    methods: {
//      sortByType: function (type, item) {
//        let param = [type, item[type]]
//        this.tagItem = item[type]
//        this.store.commit('changeNavType')
//      },
      toggle: function (item) {
        this.type = item
      }
    },
    created () {
      getTagList('category')
        .then((res) => {
          this.CatList = res
        })
        .catch(err => {
          console.log(err)
        })
      getTagList('tag')
        .then((res) => {
          this.TagList = res
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
    float: right;
    background-color: #effefe;
    right: 0;
    margin: 20px 108px auto 20px;
    position: absolute;
    .tag-header {
      height: 40px;
      line-height: 40px;
      background-color: #fafafa;
      text-align: center;
      font-size: 15px;
      color: #494b48;
      font-weight: bold;
      font-family: monospace;
      .h {
        width: 108px;
        height: 38px;
        border: solid #efefef 1px;
      }
      .h-chosen {
        color: #fff;
        background-color: #00bad0;
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
        .tag-item {
          margin: 4px auto;
          padding: 4px 8px;
          border-radius: 4px;
          color: #0b1802;
          font-size: 13px;
          list-style: none;
        }
        .item-chosen {
          color: #fff;
          background-color: #91c46b;
        }
        .tag-item:hover {
          color: #fff;
          background-color: #a7d089;
        }
      }
    }
  }
</style>
