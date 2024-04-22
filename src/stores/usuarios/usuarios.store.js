import { api } from 'boot/axios'
import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
// const BACKEND_URL = process.env.BACKEND_URL
import { useUserStore } from './user.store'

// const { URLS } = api.defaults

export const useUsuarioStore = defineStore('usuarioStore', () => {
  // const usuarios = ref([])
  // async function getUsuarios() {
  //   try {
  //     const { data } = await api.get(URLS.fotoUsuario + '?no_loading')
  //     setUsuarios(data)
  //     return usuarios
  //   } catch (e) {
  //     console.log(e)
  //     return e
  //   }
  // }
  // function setUsuarios(value) {
  //   usuarios.value = value
  // }
  // function $reset() {
  //   usuarios.value = []
  // }
  // return {
  //   getUsuarios,
  //   setUsuarios,
  //   usuarios,
  //   $reset,
  // }
})
