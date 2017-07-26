<template>
  <section class="container">
    <navigation :is-main-page="isMainPage"></navigation>
    <catalog :is-main-page="isMainPage"
             :page-id="pageId" ></catalog>
    <tag :is-main-page="isMainPage"></tag>
  </section>
</template>

<script>
  import Nav from '../components/Navigation.vue'
  import Tag from '../components/NewTag.vue'
  import Catalog from '../components/Catalog.vue'
  export default {
    data () {
      return {
        isMainPage: true,
        pageId: ''
      }
    },
    components: {
      navigation: Nav,
      tag: Tag,
      catalog: Catalog
    }
  }
</script>
<style>
</style>
