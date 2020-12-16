import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Team from "@/views/Team"
import Login from "@/views/Login"
// import LoginForm from "@/components/login/LoginForm";
import MisspasswordForm from "@/components/login/MisspasswordForm";
import UserRegister from "@/components/login/UserRegisterForm";
import LoginForm from "@/components/login/LoginForm";
import User from "@/views/User";

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Main',  component: Home },
  { path: '/team', name: 'Team', component: Team },
  { path: '/login', name: 'Login', component: Login,
    children: [
      { path: '', component: LoginForm },
      { path: 'misspass', component: MisspasswordForm },
      { path: 'register', component: UserRegister }
    ]
  },
  { path: '/user', name: 'User', component: User },
  { path: '/user/register', name: 'UserRegister', component: UserRegister }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
