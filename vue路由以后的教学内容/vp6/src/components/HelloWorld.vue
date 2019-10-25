<template>
  <div class="hello">
    hello world
    <br>
    <router-link :to="{
      path:'/home',
      query:{
        msg
      }
    }">
      去往首页
    </router-link>
    <ul>
      <router-link tag="li" to="/home">首页</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:"来自hello world的消息"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
