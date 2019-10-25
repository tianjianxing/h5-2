<template>
  <div id="app">
    <router-link to="/" exact>hello world</router-link>
    <router-link to="/home">首页</router-link>
    <router-link to="/productList">商品列表</router-link>
    <router-link to="/productDetails">商品详情</router-link>
    <router-link to="/activeDemo">active demo</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
