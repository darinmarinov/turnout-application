import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: Signup
    }
  ]
})
