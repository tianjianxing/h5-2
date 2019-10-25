<template>
  <div id="hot">
    <h3>热卖商品</h3>
    <Goods :ps="products"></Goods>
  </div>
</template>

<script>
import Goods from '@/components/Goods'
export default {
  data(){
    return {
      products:[
        {
          id:'001',
          pname:'商品一',
          desc:'我是商品一的描述',
          price:998
        },
        {
          id:'002',
          pname:'商品二',
          desc:'我是商品二的描述',
          price:666
        },
        {
          id:'003',
          pname:'商品三',
          desc:'我是商品三的描述',
          price:888
        },
        {
          id:'004',
          pname:'商品四',
          desc:'我是商品四的描述',
          price:555
        },
        {
          id:'005',
          pname:'商品五',
          desc:'我是商品五的描述',
          price:222
        }
      ]
    }
  },
  components:{
    Goods
  }
}
</script>

<style>

</style>