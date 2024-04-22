import { useAuthStore } from 'stores/auth.store'

const channel = new BroadcastChannel('app-data')

channel.addEventListener('message', (event) => {
  const auth = useAuthStore()
  console.log(event)
  if (event.data === 'logout') auth.logout()
  if (event.data === 'login') setTimeout(() => window.open('/', '_self'), 300)
})

export default channel
