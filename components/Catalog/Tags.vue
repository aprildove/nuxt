<template>
  <div class="tags" v-if="item">
    <p class="tag" v-for="tag in item.tags">
      {{tag.toUpperCase()}}
    </p>
  </div>
</template>
<script>
  export default {
    props: ['item']
  }
</script>
<style lang="less" scoped>
  .tags {
    height: 42px;
    padding-top: 10px;
  }
  .tag {
    background-color: #6aacd8;
    display: inline-block;
    height: 22px;
    font-size: 13px;
    color: #fefefe;
    font-family: 'sans-serif';
    padding: 2px 6px;
    margin-right: 8px;
  }
</style>
