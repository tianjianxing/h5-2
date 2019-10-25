<template>
  <div id="product">
    商品列表
    <nav>
      <router-link to="/product/recommend">推荐商品</router-link>
      <router-link to="/product/hot">热卖商品</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#product{
  border:2px solid blue;
}
</style>