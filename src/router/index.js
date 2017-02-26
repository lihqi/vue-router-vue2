import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Index from '../pages/index.vue'
import News from '../pages/news.vue'
import Home from '../pages/home.vue'



export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/news',
      component: News
    }
  ]
})