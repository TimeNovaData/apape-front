import { computed, reactive, ref, toRefs } from 'vue'
import { defineStore } from 'pinia'

export const useMovimentacoesStore = defineStore('movimentacoes', () => {
  const search = reactive({
    nome: '',
    email: '',
    status_pagamento: null,
  })

  const { nome, email, status_pagamento } = toRefs(search)

  const scheme = computed(() =>
    columns.value
      .filter((col) => !!col.label)
      .map((col) => ({
        field: col.field,
        label: col.label,
      }))
  )
  const pagination = reactive({
    visible: [],
    count: 0,
    limit: 10,
    offset: 0,
  })

  const { visible, count, limit, offset } = pagination

  const columns = ref([
    {
      name: 'associado',
      required: true,
      field: 'associado',
      label: 'Associado',
      align: 'left',
    },
    {
      name: 'valor',
      required: true,
      field: 'valor',
      label: 'Valor',
      align: 'left',
    },
    {
      name: 'descricao',
      required: true,
      field: 'descricao',
      label: 'Descrição',
      align: 'left',
    },
    {
      name: 'forma_pagamento',
      required: true,
      field: 'forma_pagamento',
      label: 'Forma de Pagamento',
      align: 'left',
    },

    {
      name: 'status',
      required: true,
      field: 'status',
      label: 'Status',
      align: 'left',
    },
    {
      name: 'data_vencimento',
      required: true,
      field: 'data_vencimento',
      label: 'Data de Vencimento',
      align: 'left',
    },
  ])

  return {
    nome,
    email,
    status_pagamento,
    pagination,
    columns,
    visible,
    count,
    limit,
    offset,
    scheme,
  }
})
