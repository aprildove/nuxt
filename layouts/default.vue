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

/*滚动条 
::-webkit-scrollbar-thumb:hover {  
  border-radius: 3px;  
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
  background-color:rgba(7, 170, 247, 1);  
} 
*/  
/*
// 内层滚动槽
::-webkit-scrollbar-track-piece {
  border-radius: 3px;
}
// 边角
::-webkit-scrollbar-corner {
}
// 右下角拖动块的样式
::-webkit-resizer {
}
*/
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
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.main-body {
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 15px;
  }
  img {
    vertical-align: middle;
    border-style: none;
    margin: 32px 20px auto auto;
  }

  .text-center {
    text-align: center !important;
  }
  table {
    border-collapse: collapse !important;
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    thead th {
      vertical-align: bottom;
      border-bottom: 2px solid #e9ecef;
    }
    tbody + tbody {
      border-top: 2px solid #e9ecef;
    }
    td, th {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #e9ecef;
      background-color: #fff !important;
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
