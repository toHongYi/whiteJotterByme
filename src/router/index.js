import Vue from 'vue'
import Router from 'vue-router'
// 导入组件
import Login from '@/components/Login'
import Home from '../components/Home'

import Appjotter from '../components/home/JotterApp'
import AppLibrary from '../components/library/AppLibrary'
import TopDemo from '../components/demo/TopDemo'
import Appindex from '../components/home/IndexApp'
import Appadmin from '../components/home/AdminApp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: Appindex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      // 建立父子关系
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: Appindex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/admin',
          name: 'Appadmin',
          component: Appadmin,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/jotter',
          name: 'Appjotter',
          component: Appjotter,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'AppLibrary',
          component: AppLibrary,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/topDemo',
      name: 'TopDemo',
      component: TopDemo
    }
  ]
})
