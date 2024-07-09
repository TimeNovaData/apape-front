import { api } from 'boot/axios'
import useApi from 'composables/useApi'

export function paymentsService() {
  const apiUse = useApi()
  const { URLS } = api.defaults

  function getPayments(params) {
    return apiUse.query(`${URLS.payments}`, params)
  }
  function getPaymentsFaturamento(params) {
    return apiUse.query(`${URLS.payments}faturamento/`, params)
  }
  function getPaymentsFiltrado(url, params) {
    console.log('URL', `${URLS.payments}${url}/`)
    return apiUse.query(`${URLS.payments}${url}/`, params)
  }

  return {
    getPaymentsFiltrado,
    getPaymentsFaturamento,
    getPayments,
    ...api,
  }
}
