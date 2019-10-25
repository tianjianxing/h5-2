<template>
  <div class="goods">
    <div class="gs" v-for="g in ps">
      <h4>{{g.pname}}</h4>
      <p>{{g.desc}}</p>
      <b>&yen;{{g.price}}</b>
      <div>
        <input type="button" value="点击购买">
      </div>
    </div>
    <div class="gs hide" v-for="n in ooo"></div>
  </div>
</template>

<script>
export default {
  props:['ps'],
  computed:{
    ooo(){
      return 3-this.ps.length%3;
    }
  }
}
</script>

<style>
.goods{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods .gs{
  width: 240px;
  height: 300px;
  border:2px solid green;
}
.gs.hide{
  visibility: hidden;
}
</style>