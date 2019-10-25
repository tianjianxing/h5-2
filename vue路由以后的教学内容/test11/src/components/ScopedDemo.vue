<template>
  <div class="demo">
    Scoped示例
    <Sc1></Sc1>
    <div class="sc1">999</div>
  </div>
</template>

<script>
import Sc1 from '@/components/Sc1'
export default {
  components:{
    Sc1
  }
}
</script>

<style scoped>
div{
  color:red;
}
</style>