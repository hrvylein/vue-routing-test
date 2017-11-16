<template>
<div id="app">

  <router-view/>

</div>
</template>


<script>
import store from './store'
// import { jwt_decode as jwtDecode } from 'jwt-decode'

let loggedIn = store.getters.isLoggedIn
console.log(loggedIn)

export default {
  name: 'app',
  created () {
    try {
    // var decryptToken = jwtDecode(loggedIn)
    } catch (err) {
      console.log(store.getters.isLoggedIn)
      store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
