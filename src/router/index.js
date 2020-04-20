import Vue from 'vue'
import VueRouter from 'vue-router'

import BaseLayout from '@/layouts/BaseLayout'

/* 注册 */const SignUp = () => import(/* webpackChunkName: "sign-up" */ '@/views/Sign/SignUp')
/* 登录 */const SignIn = () => import(/* webpackChunkName: "sign-in" */ '@/views/Sign/SignIn')

/* 首页 */const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard')
/* 用户 */const User = () => import(/* webpackChunkName: "user" */ '@/views/User')

Vue.use(VueRouter)

export const projectRoutes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: BaseLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          icon: 'el-icon-stopwatch',
          title: '仪表盘'
        }
      },
      {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
          icon: 'el-icon-user',
          title: '用户管理'
        }
      },
      {
        path: '/goods',
        name: 'Goods',
        component: User,
        meta: {
          icon: 'el-icon-user',
          title: '用户管理'
        },
        children: [
          {
            path: '/goods/list',
            name: 'GoodsList',
            component: User,
            meta: {
              icon: 'el-icon-user',
              title: '用户管理'
            }
          },
          {
            path: '/goods/create',
            name: 'GoodsCreate',
            component: User,
            meta: {
              icon: 'el-icon-user',
              title: '用户管理'
            }
          }
        ]
      }
    ]
  }
]

const routes = [
  ...projectRoutes,
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
    meta: {
      title: '注册'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
