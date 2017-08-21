<template>
  <div class="disPic">
    <p class="text line1">{{text1}}</p>
    <p class="text line2">{{text2}}</p>
    <p class="text line3">{{text3.toUpperCase()}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text1: '数据驱动安全',
        text2: '360威胁情报研究',
        text3: '————————  dig deep into security  ————————'
      }
    }
  }
</script>

<style lang="less" scoped>
  .disPic {
    background: url(../../assets/images/banner2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 480px;
    .text {
      color: #fff;
      text-align: center;
    }
    .line1 {
      font-family: 'Microsoft YaHei';
      font-weight: bold;
      font-size: 60px;
      padding-top: 142px;
    }
    .line2 {
      font-family: "Microsoft YaHei";
      font-weight: normal;
      margin-top: 46px;
      font-size: 30px;
    }
    .line3 {
      margin-top: 51px;
      font-size: 27px;
      font-family: 'LilyUPC';
      white-space: pre;
    }
  }
</style>
