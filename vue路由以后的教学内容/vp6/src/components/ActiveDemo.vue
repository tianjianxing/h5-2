<template>
  <div class="demo">
    active demo
    <br>
    <router-link to="/activeDemo/a1">A1</router-link>
    <router-link to="/activeDemo/a2">A2</router-link>
    <router-link to="/activeDemo/a3">A3</router-link>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.router-link-active{
  background-color: orange;
  border-bottom:2px solid red;
}
/*.router-link-exact-active{
  border-bottom:2px solid red;
}*/
</style>