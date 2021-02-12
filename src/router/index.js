import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import German from '../views/German.vue'
import BM4F from '../views/BM4F.vue'
import Modura from '../views/Modura.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },
  {
    path: '/german',
    name: 'German',

    component: () => import( '../views/German.vue')
  },
  {
    path: '/bm4f',
    name: 'BM4F',

    component: () => import( '../views/BM4F.vue')
  },
  {
    path: '/modura',
    name: 'Modura',

    component: () => import( '../views/Modura.vue')
  }

]

const router = new VueRouter({
  routes:routes,
  scrollBehavior: function(to, from, savedPosition){
    if(to.hash) {
      return {selector:to.hash}
    }else{ 
      return{x:0, y:0}
    }
  }
})

export default router
