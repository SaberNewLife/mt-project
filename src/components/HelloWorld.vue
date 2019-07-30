<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="show">点我</button>
    <p>{{sum1}}</p>
<!--      <ul>-->
<!--        <li v-for="(item,index) in arr" :key="index">hello:{{item}}</li>-->
<!--      </ul>-->
<!--&lt;!&ndash;    分组语法  对循环的数据做进一步处理，比如前面加上一句话&ndash;&gt;-->
<!--    <template v-for="(item,index) in arr">-->
<!--      <li >hello vue</li>-->
<!--      <li >{{item}}</li>-->
<!--    </template>-->
<!--  slot 插槽  -->
    <div>
      <slot name="a"></slot>
      <p>test slot插槽</p>
      <slot name="b"></slot>
    </div>
    <div :class="[a1]">测试样式</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function(){
    return {
      num:1,
      sum:100,
      arr:[1,2,3,4,5,7,8],
      a1:'test'
    }
  },
  methods:{
    show(){
      this.num++
    }
  },
  computed:{
    sum1:function(){
      return this.sum - this.num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .test{
    color:red;
    font-weight: bold;
    border:1px solid blue;
  }
</style>
