import Vue from 'vue'
import Vuex from 'vuex'
import backendApi from '@/gateways/backend-api'
// eslint-disable-next-line
import jwt_decode from 'jwt-decode'

Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

export default new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('token'),
    UserData: {
      FirstName: localStorage.getItem('FirstName'),
      LastName: localStorage.getItem('LastName')
    }
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.pending = false
      backendApi.defaults.headers.common['Authorization'] = 'how to retrieve token?'
    },
    [LOGOUT] (state) {
      backendApi.defaults.headers.common['Authorization'] = ''
      state.isLoggedIn = false
      state.pending = false
    }
  },
  actions: {
    login ({
      state,
      commit,
      rootState
    }, creds) {
      console.log('login...')
      commit(LOGIN) // show spinner
      backendApi.post('/login', creds).then(function (response) {
        if (response.data.Status === 'success') {
          localStorage.setItem('token', response.data.Data)
          // Noch den Benutzernamen setzen
          console.log(jwt_decode)
          var userData = jwt_decode(response.data.Data)
          localStorage.setItem('firstname', userData.FirstName)
          localStorage.setItem('lastname', userData.LastName)
          state.UserData.FirstName = userData.FirstName
          state.UserData.LastName = userData.LastName
          commit(LOGIN_SUCCESS)
        } else {
          commit(LOGOUT)
        }
      }).catch(function (error) {
        commit(LOGOUT)
        console.log(error)
      })
    },
    logout ({
      commit
    }) {
      localStorage.removeItem('token')
      commit(LOGOUT)
    },
    editUserData ({
      commit,
      state
    }, user) {
      state.UserData.FirstName = user.FirstName
      state.UserData.LastName = user.LastName
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },
    userData: state => {
      return state.UserData
    }
  }
})
