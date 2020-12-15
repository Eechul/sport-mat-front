import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Main',  component: () => import('../views/Home') },
  { path: '/team', name: 'Team', component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/user', name: 'User', component: () => import('../views/Login.vue') },
  { path: '/user/register', name: 'UserRegister', component: () => import('../views/UserRegister.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
