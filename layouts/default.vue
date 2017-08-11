<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
  import '../plugins/hljs/highlightjs-solarized-dark.css'
  export default {
  }
</script>
<style lang="less">

// 滚动条整体部分，可以设置宽度
.hljs {
  ::-webkit-scrollbar {  
    width: 8px;  
    height: 10px;  
    border-radius: 2px;
    background-color: #839496;  
  }  
  // 滚动条外层轨道 内阴影+圆角  
  ::-webkit-scrollbar-track { 
    border-radius: 2px; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    background-color: #BEBEBE;// #839496;  
  }  
  // 滚动的滑块 内阴影+圆角
  ::-webkit-scrollbar-thumb {  
    border-radius: 2px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #778899;// #175f87;  
  }  
}

html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-color: #f0f0e3;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
}

a:link {color: #0b1802}   /* 未访问的链接 */
a:visited {color: #0b1802}  /* 已访问的链接 */
a:hover {color: #0b1802}  /* 鼠标移动到链接上 */
a:active {color: #0b1802} /* 选定的链接 */

.main-body {
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 15px;
    text-indent: 25px;
  }
  img {
    vertical-align: middle;
    border-style: none;
    margin: auto 20px auto auto;
    //下面是自己加的样式
    padding: 3px;
    border-radius: 3px;
    background-color: #e6e6d5;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);
    border: 1px solid #b9baa6;
  }

  .text-center {
    text-align: center !important;
  }
  
  table {
    border-collapse: collapse !important;
    width: 100%;
    max-width: 100%;
    margin:1em 0;
    background-color: transparent;
    tbody + tbody {
      border-top: 2px solid #e9ecef;
    }
    td, th {
      padding: 0.5rem;
      font-size:0.95em;
      text-align:center;
      border-collapse:collapse; 
    }
    tr {
      border: 1px solid #dfe8fe;
    }
    tr:nth-child(odd){
      background-color:#ecf1fe;
    }
    tr:nth-child(even){
      background-color:#fdfdfd;
    }
    td {
      white-space: normal;
      word-break: break-all;
    }
  }

  code, kbd, pre, samp {
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
}
</style>
