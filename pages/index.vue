<template>
  <section>
    <navigation></navigation>
    <div class="container">
      <catalog></catalog>
      <tag></tag>
    </div>

  </section>
</template>

<script>
  import Nav from '../components/Navigation.vue'
  import Tag from '../components/NewTag.vue'
  import Catalog from '../components/Catalog.vue'
  import { mapActions } from 'vuex'
  // import axios from 'axios'
  export default {
    components: {
      navigation: Nav,
      tag: Tag,
      catalog: Catalog
    },
    methods: {
      ...mapActions(['pipeIsMainPage'])
    },
    created () {
      this.pipeIsMainPage(true)
      // axios.get('/ti/priv?type=domain&value=360.cn').then(res => {
      //   console.log(res, 'rrrrrrrrrrrr')
      // })
    }
  }
</script>
<style lang="less" scoped>
  .container {
    margin: 0 auto;
    max-width: 1450px;
  }
</style>
