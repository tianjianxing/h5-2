<template>
  <div class="productDetails">
    商品详情
    <br>
    {{receivedId}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      receivedId:this.$route.query.id,
      // receivedId:this.$route.params.id,
    }
  }
}
</script>

<style>

</style>