<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from './index'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
body, h1, h2, ul, li{
  padding: 0px;
  margin: 0px;
}
ul{
  list-style: none;
}
*{
  box-sizing: border-box;
}
body {
  font-family: "Noto Serif";
  text-align: justify;
  background: linear-gradient(to right,  #1a1a1a 30%, #f5f5f5 30%);
}

#app{
  padding: 0 80px;
}
</style>