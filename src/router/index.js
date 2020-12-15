import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Main',  component: Home },
  { path: '/team', name: 'Team', component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/user', name: 'User', component: () => import('../views/User.vue') },
  { path: '/user/register', name: 'UserRegister', component: () => import('../views/UserRegister.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
