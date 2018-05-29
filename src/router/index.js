import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from './../components/demo'
import moduleB from './../components/moduleB';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'Demo',
      component: demo
    },
    {
      path: '/moduleB',
      name: 'moduleB',
      component: moduleB
    }
  ]
})
