import { api } from 'boot/axios'
import useApi from 'composables/useApi'

export function paymentsService() {
  const apiUse = useApi()
  const { URLS } = api.defaults

  function getPaymentsFiltro(filtro, params) {
    return apiUse.query(`${URLS.payments}filtro/${filtro}`, params)
  }
  function getPaymentsGrafico(filtro, params) {
    return apiUse.query(`${URLS.payments}grafico/${filtro}`, params)
  }
  // function getPaymentsFaturamento(params) {
  //   return apiUse.query(`${URLS.payments}faturamento/`, params)
  // }
  // function getPaymentsFiltrado(url, params) {
  //   console.log('URL', `${URLS.payments}${url}/`)
  //   return apiUse.query(`${URLS.payments}${url}/`, params)
  // }

  return {
    // getPaymentsFiltrado,
    // getPaymentsFaturamento,
    getPaymentsFiltro,
    getPaymentsGrafico,
    ...api,
  }
}
