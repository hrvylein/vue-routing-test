<template>
<div id="app">
  <div id="particles-js" style="position: fixed; width: 100%; height:100%;"></div>
  <div class="login-form padding20 block-shadow">
    <form method="post" action="login/" @submit.prevent="login()">
      <h3 class="text-light align-left">Dienstvergabesystem</h3>
      <hr class="thin" />
      <br />
      <div class="input-control text full-size" data-role="input">
        <label for="user_login">Benutzer:</label>
        <input type="text" name="user_login" id="user_login" v-model="username">
        <button class="button helper-button clear"><span class="mif-cross"></span></button>
      </div>
      <br />
      <br />
      <div class="input-control password full-size" data-role="input">
        <label for="user_password">Passwort:</label>
        <input type="password" name="user_password" id="user_password" v-model="password">
        <button class="button helper-button reveal"><span class="mif-looks"></span></button>
      </div>
      <br />
      <br />
      <div class="form-actions align-right">
        <button type="submit" class="button primary">Anmelden</button>
      </div>
    </form>
    <br/>
  </div>
</div>
</template>

<script>
import router from '@/router'
export default {
  name: 'login_screen',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        Loginname: this.username,
        Password: this.password
      }).then(res => {
        // console.log(res)
        this.$store.watch(
            function (state) {
              return state.isLoggedIn
            },
            function () {
              router.push('/app')
            },
          {
            deep: true // add this if u need to watch object properties change etc.
          }
        )
      })
    }
  }
}
</script>

<style scoped>
      .login-form {
          width: 25rem;
          height: 18.75rem;
          position: fixed;
          top: 50%;
          margin-top: -9.375rem;
          left: 50%;
          margin-left: -12.5rem;
          background-color: #ffffff;

      }
  </style>
