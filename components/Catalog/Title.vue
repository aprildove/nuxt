<template>
  <div v-bind:class="{'title-home': isMainPage, 'title-detail': !isMainPage}"
       v-if="item" @click="enterPageById(item)">
    <nuxt-link to="/article" tag="div" >
      {{item.title}}
    </nuxt-link>
  </div>
</template>
<script>
  import './Introduce.vue'
  import * as types from '../../store/mutations.js'
  import { mapState } from 'vuex'
  export default {
    props: ['item', 'isMainPage'],
    computed: {
      ...mapState(['pageId'])
    },
    methods: {
      enterPageById: function (item) {
        this.$store.commit(types.PIPE_PAGE, item._id)
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
  }
  .title-detail {
    font-size: 48px;
    color: #0b1802;
    font-family: 'Arial Rounded MT Bold';
    margin-top: 48px;
    line-height: 64px;
  }
</style>
