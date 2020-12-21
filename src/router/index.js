import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Team from "@/views/Team"
import Login from "@/views/Login"
import MisspasswordForm from "@/components/login/MisspasswordForm";
import UserRegister from "@/components/login/UserRegisterForm";
import LoginForm from "@/components/login/LoginForm";
import User from "@/views/User";
import NewpasswordForm from "@/components/user/NewpasswordForm";
import CongratulationView from "@/components/CongratulationView";
import Player from "@/views/Player";

Vue.use(VueRouter)

const routes = [
  { path: '/',  name: 'Main',  component: Home },
  { path: '/team', name: 'Team', component: Team },
  { path: '/player', name: 'Player', component: Player },
  { path: '/login', name: 'Login', component: Login,
    children: [
      { path: '', component: LoginForm },
      { path: 'misspass', component: MisspasswordForm },
      { path: 'register', component: UserRegister }
    ]
  },
  { path: '/user', name: 'User', component: User,
    children: [
      // { path: '', component: User },
      { path: 'newpass', component: NewpasswordForm, props: (route) => ({ token: route.query.token }) },
      { path: 'newuser',
        component: CongratulationView,
        props: (route) => (
            {
              token: route.query.token,
              title: '가입을 축하드립니다 !',
              contentFlag: 'userRegister'
            })
      }
    ]
  },
  // { path: '/user', name: 'User', component: User },
  // { path: '/user/register', name: 'UserRegister', component: UserRegister }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
