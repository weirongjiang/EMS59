import Vue from 'vue'
import Router from 'vue-router'
import useEle from '@/components/common/useEle.vue'
import Login from '@/components/login/login.vue'
import Home from '@/components/pages/home.vue'
import User from '@/components/pages/user/user.vue'
import Rights from '@/components/pages/rights/rights.vue'
import Roles from '@/components/pages/roles/roles.vue'


Vue.use(Router)

var router = new Router({
  routes: [
    // 设置默认首页，重定向到 home
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'ele',
      path: '/ele',
      component: useEle
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          path: '/users', // /user
          component: User
        },
        {
          path: '/rights',
          component: Rights
        },
        {
          path: '/roles',
          component: Roles
        }
      ]
    }
  ]
})

