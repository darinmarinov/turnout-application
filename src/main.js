// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import router from './router'

import { firebaseApp } from './firebaseApp'

import App from './App'

Vue.config.productionTip = false


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user authenticated => pushing to the app')
    router.push('/dashboard')
  } else {
    console.log('no user => redirecting to sign in')
    router.replace('/signin')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
