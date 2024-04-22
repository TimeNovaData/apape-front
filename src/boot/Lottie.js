import 'vue3-lottie/dist/style.css'
import { boot } from 'quasar/wrappers'
import Vue3Lottie from 'vue3-lottie'

export default boot(async ({ app }) => {
  app.use(Vue3Lottie, { name: 'LottieAnimation' })
})
