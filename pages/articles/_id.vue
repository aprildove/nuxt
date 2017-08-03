<template>
  <section>
    <navigation></navigation>
    <detail></detail>
  </section>
</template>
<script>
  import Nav from '../../components/Navigation.vue'
  import Detail from '../../components/Detail.vue'
  import { mapActions } from 'vuex'
  export default {
    components: {
      navigation: Nav,
      detail: Detail
    },
    methods: {
      ...mapActions(['pipeIsMainPage'])
    },
    created () {
      this.pipeIsMainPage(false)
    }
  }
</script>
<style>
</style>
