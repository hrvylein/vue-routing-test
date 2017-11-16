import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = store.getters.isLoggedIn

Vue.config.productionTip = false

/* eslint-disable */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
