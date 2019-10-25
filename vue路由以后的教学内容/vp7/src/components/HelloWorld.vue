<template>
  <div class="hello">
    <input type="button" value="请求数据" @click="getData">
    <ul>
      <li v-for="(item,i) in resArr">
        {{item.type+item.date}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      resArr:[]
    }
  },
  methods:{
    getData(){
      // this.axios.get('https://www.apiopen.top/weatherApi')
      //           .then(function(res){
      //             this.resArr = res.data.data.forecast;
      //           }.bind(this))//bind(this)表示把父级的this绑定到该function中
      //           .catch(function(err){
      //             console.log(err);
      //           })

      this.axios.get('https://www.apiopen.top/weatherApi',{
        params:{
          city:"上海"
        }
      })
      .then((res)=>{
        console.log(res)
        this.resArr = res.data.data.forecast;
      })
      .catch((err)=>{
        console.log(err);
      })

      // this.axios.get('http://abc.com',{
      //   params:{
      //     id:1
      //   }
      // }).then((res)=>{})
      //   .catch((err)=>{})

      this.axios.post('/api/weatherApi',{
        city:"德州"
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })

      this.axios({
        url:'/api/weatherApi',
        method:'post',
        data:{
          city:"上海"
        }
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul{
  border:2px solid red;
  li{
    border:2px solid blue;
  }
}
</style>
