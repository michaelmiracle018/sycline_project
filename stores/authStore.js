import { defineStore } from 'pinia'
// import instance from '~/plugins/axios'
import axios from '~/plugins/axios'
// import { useGeneralStore } from './general'

const $axios = axios().provide.axios

export const useAuthStore = defineStore('authStore', {
  state: () => ({
  name: 'Miracle'
  }),
  actions: {
    async login(email, password) {
      await $axios.post('/user/auth', {
        email: email,
        password: password
      })
    },
    async register( email, password, username) {
      console.log("hello")
     const signUp =  await $axios.post('/user/sign-up', {
         username,
        email,
        password
      })

      console.log("signup", signUp)
    },
  },
  persist: true,
})
