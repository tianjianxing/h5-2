<template>
  <div class="home">
    HOME
    <br>
    {{receivedMsg}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      receivedMsg:this.$route.query.msg
    }
  }
}
</script>

<style>

</style>