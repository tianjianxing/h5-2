<template>
  <div class="hello">
    <router-link to="/home">主页</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/demo">Scoped 示例</router-link>
    <router-link to="/abc">按需加载的页面</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
