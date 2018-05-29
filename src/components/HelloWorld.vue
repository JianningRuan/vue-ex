<template>
  <div class="hello">
    <h3>{{$store.state.count}}</h3>
    <div style="padding-top: 40px;">
      <a @click="goDemo">跳转</a>
      <a @click="goModuleB">跳到moduleB</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {},
  created(){},
  mounted(){
    console.log('h', this);
  },
  activated(){},
  watch: {},
  computed:{},
  filters: {},
  methods: {
    goDemo(){
      console.log(this);
      this.$router.push({
        path: '/demo'
      })
    },
    goModuleB(){
      this.$router.push({
        path: '/moduleB'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
