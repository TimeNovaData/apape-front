import { acceptHMRUpdate, defineStore } from 'pinia'
import { api } from 'boot/axios'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const { URLS } = api.defaults

  const user = ref(null)
  const isLoading = ref(false)

  async function getUser() {
    isLoading.value = true
    user.value = {}
    try {
      const { data } = await api.get(URLS.user + '?no_loading')

      setUser(data)
      return data
    } catch (e) {
      // Router.push({ name: 'login' })
      return Promise.reject(e)
    } finally {
      isLoading.value = false
    }
  }

  const setUser = (value) => (user.value = value)

  function $reset() {
    user.value = {}
  }

  // make sure to pass the right store definition, `useAuth` in this case.

  return {
    $reset,
    getUser,
    setUser,
    user,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
