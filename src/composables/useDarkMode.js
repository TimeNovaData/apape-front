import { LocalStorage, Dark } from 'quasar'
import { onMounted, watch, ref, nextTick } from 'vue'
import { useUserStore } from 'stores/usuarios/user.store'
import emitter from 'boot/emitter'

export default function useDarkMode() {
  const darkMode = ref(false)

  watch(darkMode, async (v) => {
    Dark.set(v)
    LocalStorage.set('darkMode', v)
  })

  onMounted(() => {
    const storage = LocalStorage.getItem('darkMode')
    if (storage) darkMode.value = storage
  })

  return { darkMode }
}

// watch(
//   () => user?.userProfile.dark_mode, // fica de olho no profile
//   async (v) => {
//     if (!user?.userProfile.id) return
//     if (v === darkMode.value) return
//     darkMode.value = v
//   }
// )
