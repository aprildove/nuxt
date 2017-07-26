<template>
  <section>
    <navigation :is-main-page="isMainPage"></navigation>
    <detail :is-main-page="isMainPage"
               :page-id="pageId" ></detail>
  </section>
</template>

<script>
  import Nav from '../components/Navigation.vue'
  import Tag from '../components/NewTag.vue'
  import Detail from '../components/Detail.vue'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        isMainPage: false
      }
    },
    computed: {
      ...mapState(['pageId'])
    },
    components: {
      navigation: Nav,
      tag: Tag,
      detail: Detail
    }
  }
</script>
<style>
</style>
