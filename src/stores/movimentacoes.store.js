import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

export const useMovimentacoesStore = defineStore('movimentacoes', () => {
  const search = reactive({
    nome: '',
    email: '',
    status: '',
  })

  const { nome, email, status } = toRefs(search)

  return {
    nome,
    email,
    status,
  }
})
