<template>
  <div>
    <div class="nav-bar">
      <a :href="'/'">
        <img class="ico-favicon" src="../assets/images/blog-icon.png"/>
      </a>
      <div class="ico-home" @click="backHome()">
      </div>
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
    methods: {
      backHome: function () {
        window.location.pathname = '/'
      }
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
      width: 32px;
      height: 32px;
      display: inline-block;
      margin: 16px 32px;
      float: right;
      cursor: pointer;
      background: url('../assets/images/home.png') no-repeat;
    }
    .ico-home:hover {
      background: url('../assets/images/home-light.png') no-repeat;
    }
  }
  .disPic .pic {
    background-color: #faa732;
    height: 480px;
    width: 100%;
  }
</style>
