import { api } from 'boot/axios'
import { computed, reactive, ref, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { exportSheet, importSheet } from 'src/utils/sheet'
import { NotifyError } from 'boot/Notify'

export const useTableStore = defineStore('table', () => {
  const dataRequest = ref({})

  async function fetchFn({ url, filters = '', err }) {
    try {
      const _url = url + filters
      window._red('url e filters')

      const request = await api.get(_url)
      dataRequest.value = request.data.results
        ? request.data.results
        : request.data
      return request
    } catch (error) {
      console.log(error)
      NotifyError(err)
    }
  }

  async function exportSheetFn(url, scheme) {
    const { data } = await fetchFn(url)
    return exportSheet(data.results, scheme)
  }

  async function importSheetFn(file, scheme) {
    const dados = importSheet(file, scheme)
    alert('WIP: olhe o console para ver os dados importados')
    return dados
  }

  return {
    fetchFn,
    exportSheet: exportSheetFn,
    importSheet: importSheetFn,
    dataRequest,
  }
})
