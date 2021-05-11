import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../views/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    }
  ]
})
