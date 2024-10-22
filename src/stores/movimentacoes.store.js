import { computed, reactive, ref, toRefs } from 'vue'
import { defineStore } from 'pinia'

export const useMovimentacoesStore = defineStore('movimentacoes', () => {
  const search = reactive({
    nome: null,
    email: null,
    status_pagamento: null,
    billing_type: null,
    data_inicio: null,
    data_fim: null,
  })

  const { nome, email, status_pagamento, billing_type, data_inicio, data_fim } = toRefs(search)

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
      name: 'matricula',
      required: true,
      field: 'matricula',
      label: 'Matrícula',
      align: 'center',
    },
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
      align: 'center',
    },

    {
      name: 'forma_pagamento',
      required: true,
      field: 'forma_pagamento',
      label: 'Forma de Pagamento',
      align: 'center',
    },
    {
      name: 'periodicidade',
      required: true,
      field: 'periodicidade',
      label: 'Periodicidade',
      align: 'center',
    },

    {
      name: 'status',
      required: true,
      field: 'status',
      label: 'Status',
      align: 'center',
    },
    {
      name: 'data_vencimento',
      required: true,
      field: 'data_vencimento',
      label: 'Data de Vencimento',
      align: 'center',
    },
  ])

  return {
    nome,
    email,
    status_pagamento,
    billing_type,
    data_inicio,
    data_fim,
    pagination,
    columns,
    visible,
    count,
    limit,
    offset,
    scheme,
  }
})
