<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="less">
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

  code {
    word-break: break-all;
    padding: 0.2rem 0.4rem;
    font-size: 90%;
    color: #bd4147;
    background-color: #f8f9fa;
    border-radius: 0.25rem;
  }

  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    white-space: pre-wrap !important;
    page-break-inside: avoid;
    code {
      font-size: inherit;
      color: inherit;
      background-color: transparent;
      border-radius: 0;
    }
  }
}
</style>
