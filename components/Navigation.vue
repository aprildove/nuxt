<template>
  <div>
    <div class="nav-bar">
      <nuxt-link to="/">
        <img class="ico-favicon" src="../assets/images/blog-icon.png"/>
      </nuxt-link>
      <nuxt-link to="/">
          <img class="ico-home" src="../assets/images/home.png"/>
      </nuxt-link>
    </div>
    <dis-pic v-if="isMainPage"></dis-pic>
  </div>
</template>

<script>
  import DisPic from './Header/DisPic.vue'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['isMainPage'])
    },
    components: {
      DisPic
    }
  }
</script>
<style lang="less" scoped>
  .nav-bar {
    height: 60px;
    border-bottom: solid #d5d5d5 1px;
    .ico-favicon {
      height: 28px;
      margin-top: 16px;
      margin-left: 108px;
      cursor: pointer;
    }
    .ico-home {
      display: inline-block;
      margin: 16px;
      float: right;
    }
  }
  .disPic .pic {
    background-color: #faa732;
    height: 480px;
    width: 100%;
  }
</style>
