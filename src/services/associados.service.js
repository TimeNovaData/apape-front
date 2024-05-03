import { api } from 'boot/axios'
import useApi from 'composables/useApi'

export function associadosService() {
  const apiUse = useApi()
  const { URLS } = api.defaults

  function getAssociados(params) {
    return apiUse.query(`${URLS.associados}`, params)
  }

  async function getAssociado(id) {
    return apiUse.query(`${URLS.associados}${id}/`)
  }

  return {
    getAssociados,
    getAssociado,
    ...api,
  }
}
