<template>
  <div id="recommend">
    <h3>强烈推荐</h3>
    <div class="box">
      <Goods :ps="products"></Goods>
    </div>
  </div>
</template>

<script>
import Goods from '@/components/Goods'//引入组件作为当前组件的子组件
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
  components:{//配置子组件
    Goods
  }
}
</script>

<style>
.box{
  
}
</style>