import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { nextTick } from 'vue'
import { route } from 'quasar/wrappers'
import { useUserStore } from 'stores/usuarios/user.store'
import routes from './routes'

const createHistory = process.env.SERVER
  ? createMemoryHistory
  : process.env.VUE_ROUTER_MODE === 'history'
  ? createWebHistory
  : createWebHashHistory

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(process.env.VUE_ROUTER_BASE),
})

export default route(function (/* { store, ssrContext } */) {
  Router.beforeEach(async (to, from) => {
    const userStore = useUserStore()

    const isPublic = to.meta?.publicPage
    const haveUser = () => userStore.user?.id
    //  Se nao tem usuario tenta pegar
    if (!haveUser()) await userStore.getUser()
    await nextTick()

    // // Login redirect
    const isLogin = to.name === 'login'
    const goToLogin = { name: 'login', query: { redirect: to.fullPath } }

    // ta indo pra login passou logout na query
    if (isLogin && to.query.logout) return true
    // se ta no login e tem usuario
    else if (isLogin && haveUser()) return { name: 'home' }
    // se é publica
    else if (isPublic) return true
    // se tem usuario
    else if (haveUser()) return true
    // se nao tem usuario e nao ta no login
    else if (!haveUser() && !isLogin) return goToLogin
    // no fim das contas volta pro login
    else return goToLogin
  })

  return Router
})
export { Router }
