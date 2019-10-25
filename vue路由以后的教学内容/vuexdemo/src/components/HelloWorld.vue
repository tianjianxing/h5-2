<template>
  <div class="hello">
    {{$store.state.count}}
    <br>
    <input type="button" value="+" @click="handleAdd(1)">
    <input type="button" value="-" @click="handleReduce(1)">
    <br>
    <input type="button" value="异步+" @click="handleActionsAdd(1)">
    <input type="button" value="异步-" @click="handleActionsReduce(1)">
    <br>
    {{$store.getters.gettersCount}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods:{
    handleAdd(n){
      this.$store.commit('mutationsAddCount',n);
    },
    handleReduce(n){
      this.$store.commit('mutationsReduceCount',n);
    },
    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n);
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
