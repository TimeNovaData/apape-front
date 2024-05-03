import { onUnmounted } from 'vue'
import { useAxios } from '@vueuse/integrations/useAxios'

import { api } from 'boot/axios'

export default function useApi() {
  const { execute, abort, data, isFinished, isLoading, isAborted } = useAxios(
    api,
    {
      immediate: false,
    }
  )

  async function query(url, params = {}) {
    try {
      await execute(url, { method: 'GET', params })
      return data.value
    } catch (error) {
      console.error(error)
    }
  }

  async function mutation(url, method, body = {}, params = {}) {
    try {
      await execute(url, { method, params, data: body })

      return data.value
    } catch (error) {
      console.error(error)
    }
  }

  function abortRequest() {
    if (!isFinished.value) {
      abort()
    }
  }

  onUnmounted(abortRequest)

  return {
    isAborted,
    isLoading,
    isFinished,
    query,
    mutation,
  }
}
