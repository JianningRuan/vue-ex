<template>
  <div>
  <div>vuex: {{$store.state.count}}</div>
    <div>getter: {{$store.getters.count}}</div>
    <div>arrLength: {{$store.getters.arrLength}}</div>
    <div>arrLengthmap: {{arrLength}}</div>
    <div>{{count}}</div>

    <div v-for="(n, index) in arr" :key="n">
     {{index}}, {{n}}
    </div>
  <div style="padding-top: 40px;">
    <a @click="chanelVuex">改变vuex</a>&nbsp;
    <a @click="addCountNum">count变10</a>&nbsp;
    <a @click="chanelVuex2">改变vuex</a>&nbsp;
    <a @click="addCount(9)">count变9</a>
  </div>
    <div>
      <a @click="waitToAdd">action改动count</a>&nbsp;
      <a @click="waitAndAdd(13)">action改动count2</a>
    </div>
    <div style="padding-top: 40px;">
      <a @click="goBack">回到首页</a>&nbsp;
      <a @click="goModuleB">跳到moduleB</a>
    </div>
  </div>
</template>
<script>
  import store from "../store";
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

  export default {
    name: 'demo',
    data(){
      return {}
    },
    components: {},
    created(){},
    mounted(){
      console.log('getter', this.$store.getters);
      console.log('mapState:', this.count);
    },
    activated(){},
    watch: {},
    computed:{
      ...mapState([
        'count',
        'arr'
      ]),
      ...mapGetters([
        // 'count',
        'arrLength'
      ])
    },
    filters: {},
    methods: {
      goBack(){
        this.$router.push({
          path: '/'
        })
      },
      goModuleB(){
        this.$router.push({
          path: '/moduleB'
        })
      },
      chanelVuex(){
        console.log(store);
        store.commit('setCount');
      },
      chanelVuex2(){
        this.setCount();
      },
      addCountNum(){
        store.commit('addCount', 10);
      },
      addCountNum2(){
        this.addCount(9);
      },
      waitToAdd(){
        store.dispatch('waitAndAddCount');
      },
      ...mapMutations([
        'setCount',
        'addCount'
      ]),
      ...mapActions([
        'waitAndAdd'
      ])
    }
  }
</script>

<!--
    data(){
      return {}
    },
    components: {},
    created(){},
    mounted(){},
    activated(){},
    watch: {},
    computed:{},
    filters: {},
    methods: {}
-->
