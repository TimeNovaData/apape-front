import { boot } from 'quasar/wrappers'
import { Cookies } from 'quasar'
import { ref } from 'vue'
import { useAuthStore } from 'stores/auth.store'
import axios from 'axios'
import GLOBAL from 'utils/GLOBAL'

const API_URL = process.env.API_URL
const TOKEN = Cookies.get('NDT_TOKEN')

/**
 * axios methods mostrados no console
 */
const _url_method = ref(null)

const api = axios.create({
  baseURL: API_URL,

  headers: {
    Authorization: `Bearer ${Cookies.get('NDT_TOKEN')}`,
  },

  /**
   * URLS da API
   * const  { URLS } = api.defaults
   */
  URLS: {
    user: 'users/usuario_logado/',
    redefinir_senha: 'usuario_djoser/reset_password/',
    confirmar_senha: 'usuario_djoser/reset_password_confirm/',
    associados: 'associados/',
    movimentacoes: 'movimentacoes/',
  },
})

/**
 * Tenta atualziar o TOKEN pelo REFRESH
 */
async function getToken(error) {
  const authStore = useAuthStore()

  try {
    console.warn(`TOKEN INVALIDO ou VAZIO ${error}`)
    await authStore.refreshToken()
    error.config.headers.Authorization = `Bearer ${authStore.user.access}`
    return await axios.request(error.config)
  } catch (e) {
    console.warn(`TOKEN Reject ${error}`)
    throw Promise.reject(error)
  }
}

/**
 * quando response der errado faz uma tentativa de refresh token
 */
let tentativas = 0
async function tokenRefresh(error) {
  let token
  while (tentativas >= 1) {
    tentativas++
    token = await getToken(error)
  }
  if (!token) return error
}

api.interceptors.response.use(undefined, tokenRefresh)

/**
 * Add _url_method para soltar no console
 * usado em boot/LoadingBar.js
 */
api.interceptors.request.use(
  function requestMethod(config) {
    _url_method.value = config.method
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default boot(({ app }) => {
  app.config.globalProperties.$axios = api
  app.config.globalProperties.$api = api
  app.config.globalProperties.$API_URL = API_URL
})

export { api, API_URL, _url_method }
