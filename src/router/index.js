/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import login from '@/components/login'
import appointments from '@/components/appointments'
import store from '@/store'

Vue.use(Router)

const router =  new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/app',
      name: 'main',
      component: main,
      children: [
        {
          path: 'overview',
          component: appointments
        },
        {
          path: 'posts',
          component: appointments
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let loggedIn = store.getters.isLoggedIn
  if (loggedIn) {
    if (to.path === '/') {
      next({
        path: '/app',
        replace: true
      })
    }
    console.log(loggedIn)
    next()
  } else {
    // zurück zum Loginscreen
    if (to.path !== '/') {
      next({
        path: '/',
        replace: true
      })
    } else {
      next()
    }
  }
})

export default router
