<template>
  <div>
    <div>play: {{$store.state.modulesB.play}}</div>
    <div>getter: {{$store.getters.playBtn}}</div>
    <div style="padding-top: 40px;">
      <a @click="goPlay">playBtn</a>
    </div>
    <div style="padding-top: 80px;">play: {{play}}</div>
    <div>getter: {{playBtn}}</div>
    <div style="padding-top: 40px;">
      <a @click="goPlay2">playBtn2</a>
      <a @click="waitPlay">waitToPlay</a>
    </div>
    <div>count: {{count}}</div>
    <div style="padding-top: 40px;">
      <a @click="goBack">回到首页</a>
    </div>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
  import store from "../store";
  export default {
    name: 'moduleB',
    data(){
      return {}
    },
    components: {},
    created(){},
    mounted(){},
    activated(){},
    watch: {},
    computed:{
      ...mapState('modulesB', [
        'play'
      ]),
      ...mapState([
        'count'
      ]),
      ...mapGetters('modulesB', [
        'playBtn'
      ])
    },
    filters: {},
    methods: {
      goBack(){
        this.$router.push({
          path: '/'
        })
      },
      goPlay(){
        let now = this.$store.state.modulesB.play;
        console.log(store);
        // store.commit('setPlay', !now);
      },
      goPlay2(){
        let now = this.play;
        this.setPlay(!now);
      },
      waitPlay(){
        let now = this.play;
        this.waitToPlay(!now);
      },
      ...mapMutations('modulesB', [
        'setPlay'
      ]),
      ...mapActions('modulesB', [
        'waitToPlay'
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
