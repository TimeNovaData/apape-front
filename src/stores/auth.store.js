import { api } from 'boot/axios'
import { computed, nextTick, ref } from 'vue'
import { Cookies, LoadingBar } from 'quasar'
import { defineStore } from 'pinia'
import { NotifyError } from 'boot/Notify'
import { Router } from 'router/index'
import { useUserStore } from './usuarios/user.store'
import channel from 'boot/BroadcastChannel'

const tokenOpt = { secure: process.env.HTTPS_MODE }
const refreshTokenOpt = { secure: process.env.HTTPS_MODE }
/* expires: '0m 60s' */

export const useAuthStore = defineStore('auth', () => {
  const COOKIE_TOKEN = () => Cookies.get('NDT_TOKEN')
  const COOKIE_REFRESH_TOKEN = () => Cookies.get('NDT_REFRESH_TOKEN')

  const TOKEN = computed(() => user.value.access)
  const REFRESH_TOKEN = computed(() => user.value.refresh)

  /**
   * USER DO AUTH
   * @property {string} access - TOKEN
   * @property {string} refresh - REFRESH TOKEN
   */

  const user = ref({
    access: COOKIE_TOKEN() && COOKIE_TOKEN(),
    refresh: COOKIE_REFRESH_TOKEN() && COOKIE_REFRESH_TOKEN(),
  })

  /**
   * salva o token nos Cookies e seta o header na api
   */
  function saveToken() {
    if (REFRESH_TOKEN.value) {
      Cookies.set('NDT_REFRESH_TOKEN', REFRESH_TOKEN.value, refreshTokenOpt)
    }
    if (TOKEN.value) {
      Cookies.set('NDT_TOKEN', TOKEN.value, tokenOpt)
      api.defaults.headers.Authorization = `Bearer ${TOKEN.value}`
    }
  }

  /**
   * @summary Faz o request na api de token,
   * @summary preenche o valor de user do auth com refresh e o token,
   * @summary mudar a rota pro redirect da url,
   * @summary faz um post message no Broadcast channel
   * @param {string} username
   * @param {string} password
   * @return {boolean} - se o login teve sucesso ou nao
   */
  async function login(username, password) {
    try {
      const request = await api.post(`/v1/auth/jwt/create/`, {
        password,
        username,
      })
      user.value = request.data
      const auth = useUserStore()
      saveToken()
      await auth.getUser()
      channel.postMessage('login')
      Router.replace(Router.currentRoute.value.query?.redirect || '/')
      return true
    } catch (e) {
      console.log(e)
      NotifyError(`Usuario ou senha invalidos`)
      channel.postMessage('logout')
      return false
    }
  }
  /**
   *  @summary tenta atualizar o token
   *  @summary Chamada dentro do interceptors do axios
   */
  async function refreshToken() {
    try {
      if (window.location.pathname.includes('login'))
        throw new Error('Nao é possivel atualizar  o token na rota de login')

      console.warn('Tentando atualizar o TOKEN')
      const refresh = user.value.refresh
      const { data } = await api.post(`token/refresh/`, { refresh })

      user.value.access = data.access
      console.warn('TOKEN Atualizado com sucesso')

      return user.value.access
    } catch (e) {
      console.error('Erro ao atualizar o TOKEN')
      logout()
    }
  }

  /**
   * Faz logout e redireciona para o tela de login,
   * com um parametro logout na url
   * remove  token, refresh e usuario
   */
  async function logout() {
    LoadingBar.stop()
    user.value = {}
    Cookies.remove('NDT_REFRESH_TOKEN')
    Cookies.remove('NDT_TOKEN')
    await nextTick()
    Router.replace({ name: 'login', query: { logout: true } })
  }

  return {
    user,
    login,
    logout,
    refreshToken,
    TOKEN,
    REFRESH_TOKEN,
    COOKIE_REFRESH_TOKEN,
    COOKIE_TOKEN,
  }
})
