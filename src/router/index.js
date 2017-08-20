import Vue from 'vue'
import Router from 'vue-router'
import Mainpart from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Mainpart
    }
  ]
})
