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


  function postDadosAssociados(data) {
    return apiUse.mutation(`${URLS.associados}`, 'POST', data)
  }

  function patchDadosAssociados(id, data) {
    return apiUse.mutation(`${URLS.associados}${id}/`, 'PATCH', data)
  }

  return {
    getAssociados,
    getAssociado,
    postDadosAssociados,
    patchDadosAssociados,
    ...api,
  }
}
