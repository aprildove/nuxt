<template>
  <div v-bind:class="{'title-home': isMainPage, 'title-detail': !isMainPage}"
       v-if="item" @click="enterPageById(item)">
    <a v-if="isMainPage" :href="'/articles/' + ( item.readableId || item._id )" tag="div" >
      {{item.title}}
    </a>
    <template v-else>
      {{item.title}}
    </template>
  </div>
</template>
<script>
  import './Introduce.vue'
  import { mapState, mapActions } from 'vuex'
  export default {
    props: ['item'],
    computed: {
      ...mapState(['isMainPage'])
    },
    methods: {
      ...mapActions(['pipePageId']),
      enterPageById: function (item) {
        let isRid = item.readableId ? 1 : 0
        let id = item.readableId || item._id
        let param = [id, isRid]
        this.pipePageId(param)
      }
    }
  }
</script>
<style lang="less" scoped>
  .title-home {
    font-family: 'sans-serif';
    line-height: 32px;
    font-size: 24px;
    color: #0b1802;
    cursor: pointer;
    max-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-home:hover {
    text-shadow: 2px 3px 1px #d0d0d0;
  }
  .title-detail {
    font-size: 48px;
    color: #0b1802;
    font-family: 'Arial Rounded MT Bold';
    margin-top: 48px;
    line-height: 64px;
  }
  @media screen and ( min-width: 550px ) and ( max-width: 950px) {
    .title-home div {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 550px ) {
    .title-home div {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
</style>
