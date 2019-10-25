<template>
  <div class="productList">
    <h2>商品列表</h2>
    <ul>
      <li v-for="(g,i) in goods" :key="i">
        <h5>{{g.pname}}</h5>
        <p>{{g.desc}}</p>
        <b>&yen;{{g.price}}</b>
        <br>
        <input type="button" value="查看详情" @click="viewDetails(g.id)">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goods:[
        {
          id:'0001',
          pname:'手机',
          desc:'一个好手机',
          price:9.8
        },
        {
          id:'0002',
          pname:'手表',
          desc:'一个好手表',
          price:66
        },
        {
          id:'0003',
          pname:'电视',
          desc:'一个好电视',
          price:6.6
        },
        {
          id:'0004',
          pname:'电脑',
          desc:'一个好电脑',
          price:3.2
        },
        {
          id:'0005',
          pname:'耳机',
          desc:'一个好耳机',
          price:99
        }
      ]
    }
  },
  methods:{
    viewDetails(id){
      // this.$router.push({
      //   path:'/productDetails',
      //   query:{
      //     id:id
      //   }
      // })

      // this.$router.push({
      //   name:'ProductDetails',
      //   params:{
      //     id
      //   }
      // })

      this.$router.push({
        name:'ProductDetails',
        query:{
          id
        }
      })

      // this.$router.push({//path和params配合不能传递参数
      //   path: '/productDetails',
      //   params:{
      //     id
      //   }
      // })
    }
  }
}
</script>

<style>
li{
  border:1px solid black;
}
</style>