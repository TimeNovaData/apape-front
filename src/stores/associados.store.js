import { computed, reactive, ref, toRefs } from 'vue'
import { defineStore } from 'pinia'

export const useAssociadosStore = defineStore('associados', () => {
  const search = reactive({
    nome: '',
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
      name: 'matricula',
      required: true,
      field: 'matricula',
      label: 'Matrícula',
      align: 'left',
    },
    {
      name: 'nome',
      required: true,
      field: 'nome',
      label: 'Nome',
      align: 'left',
    },
    {
      name: 'cpf',
      required: true,
      field: 'cpf',
      label: 'CPF',
      align: 'left',
    },
    {
      name: 'patrocinadora',
      required: true,
      field: 'patrocinadora',
      label: 'Patrocinadora',
      align: 'left',
    },
    {
      name: 'maticula_patrocinadora',
      required: true,
      field: 'maticula_patrocinadora',
      label: 'Matrícula da Patrocinadora',
      align: 'left',
    },
    {
      name: 'email',
      required: true,
      field: 'email',
      label: 'E-mail',
      align: 'left',
    },
    {
      name: 'data_cadastro',
      required: true,
      field: 'data_cadastro',
      label: 'Data de Cadastro',
      align: 'left',
    },
    {
      name: 'tipo_beneficio',
      required: true,
      field: 'tipo_beneficio',
      label: 'Status do Benefíciario',
      align: 'left',
    },
    {
      name: 'cidade',
      required: true,
      field: 'cidade',
      label: 'Cidade',
      align: 'left',
    },
    {
      name: 'estado',
      required: true,
      field: 'estado',
      label: 'Estado',
      align: 'left',
    },
    {
      name: 'pais',
      required: true,
      field: 'pais',
      label: 'País',
      align: 'left',
    },
  ])

  // const models = ref({
  //   name: {
  //     value: 'Teste',
  //     required: true,
  //   },
  //   email: {
  //     value: 'teste@email.com',
  //     required: true,
  //   },
  //   sexo: {
  //     value: 'Masculino',
  //     required: true,
  //   },
  //   nascimento: {
  //     value: '',
  //     required: true,
  //   },
  //   cpf_cnpj: {
  //     value: '00000000000',
  //     required: true,
  //   },
  //   address: {
  //     value: 'Rua Teste',
  //     required: true,
  //   },
  //   postal_code: {
  //     value: '00000000',
  //     required: true,
  //   },
  //   address_number: {
  //     value: '000',
  //     required: true,
  //   },
  //   complement: {
  //     value: 'Teste',
  //     required: true,
  //   },
  //   bairro: {
  //     value: 'Teste',
  //     required: true,
  //   },
  //   cidade: {
  //     value: 'Teste',
  //     required: true,
  //   },
  //   estado: {
  //     value: 'Teste',
  //     required: true,
  //   },
  //   pais: {
  //     value: 'Teste',
  //     required: true,
  //   },
  //   aposentado: {
  //     value: '',
  //     required: true,
  //   },
  //   pensionista: {
  //     value: '',
  //     required: true,
  //   },
  //   naturalidade: {
  //     value: 'Rio de Janeiro',
  //     required: true,
  //   },
  //   nacionalidade: {
  //     value: 'Brasileiro',
  //     required: true,
  //   },
  //   estado_civil: {
  //     value: 'Casado',
  //     required: true,
  //   },
  //   ident: {
  //     value: '000000000',
  //     required: true,
  //   },
  //   orgao: {
  //     value: 'Teste',
  //     required: true,
  //   },
  //   tipo_cobranca: {
  //     value: '',
  //     required: true,
  //   },
  //   periodicidade: {
  //     value: '',
  //     required: true,
  //   },
  //   matricula_petros: {
  //     value: '00000',
  //     required: true,
  //   },
  //   tel_residencial: {
  //     value: '0000000000',
  //     required: true,
  //   },
  //   tel_residencial_2: {
  //     value: '',
  //     required: false,
  //   },
  //   tel_trabalho: {
  //     value: '0000000000',
  //     required: true,
  //   },
  //   patrocinadores: {
  //     value: '',
  //     required: true,
  //   },

  //   maticula_patrocinadora: {
  //     value: '00000000',
  //     required: true,
  //   },
  //   dt_patrocinadora: {
  //     value: '',
  //     required: true,
  //   },
  //   formacao: {
  //     value: '',
  //     required: true,
  //   },
  //   mensalidade: {
  //     value: '',
  //     required: true,
  //   },

  //   matricula: {
  //     value: '',
  //     required: false,
  //   },
  //   dt_cadastro: {
  //     value: '',
  //     required: true,
  //   },
  // })

  const models = ref({
    name: {
      value: '',
      required: true,
    },
    email: {
      value: '',
      required: true,
    },
    sexo: {
      value: '',
      required: true,
    },
    nascimento: {
      value: '',
      required: true,
    },
    cpf_cnpj: {
      value: '',
      required: true,
    },
    status: {
      value: '',
      required: true,
    },
    address: {
      value: '',
      required: true,
    },
    postal_code: {
      value: '',
      required: true,
    },
    address_number: {
      value: '',
      required: true,
    },
    complement: {
      value: '',
      required: true,
    },
    province: {
      value: '',
      required: true,
    },
    cidade: {
      value: '',
      required: true,
    },
    estado: {
      value: '',
      required: true,
    },
    pais: {
      value: '',
      required: true,
    },
    aposentado: {
      value: '',
      required: true,
    },
    pensionista: {
      value: '',
      required: true,
    },
    naturalidade: {
      value: '',
      required: true,
    },
    nacionalidade: {
      value: '',
      required: true,
    },
    estado_civil: {
      value: '',
      required: true,
    },
    ident: {
      value: '',
      required: true,
    },
    orgao: {
      value: '',
      required: true,
    },
    tipo_cobranca: {
      value: '',
      required: true,
    },
    periodicidade: {
      value: '',
      required: true,
    },
    matricula_petros: {
      value: '',
      required: true,
    },
    tel_residencial: {
      value: '',
      required: true,
    },
    tel_residencial_2: {
      value: '',
      required: false,
    },
    tel_trabalho: {
      value: '',
      required: true,
    },
    patrocinadores: {
      value: '',
      required: true,
    },
    maticula_patrocinadora: {
      value: '',
      required: true,
    },
    dt_patrocinadora: {
      value: '',
      required: true,
    },
    formacao: {
      value: '',
      required: true,
    },
    mensalidade: {
      value: '',
      required: true,
    },
    matricula: {
      value: '',
      required: false,
    },
    dt_cadastro: {
      value: '',
      required: true,
    },
    banco: {
      value: '',
      required: false,
    },
    convenio: {
      value: '',
      required: false,
    },
    dt_conv_petros: {
      value: '',
      required: false,
    },
    autorizacao: {
      value: '',
      required: false,
    },
  })

  const optBancos = ref([])
  const optConvenios = ref([])
  const optPatrocinadoras = ref([])
  const optMensalidades = ref([])

  const optGender = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Outro', value: 'Outro' },
  ]

  const optTipoBeneficiario = [
    { label: 'Aposentado', value: 'Aposentado' },
    { label: 'Falecido', value: 'Falecido' },
    { label: 'Pensionista', value: 'Pensionista' },

    { label: 'Desfiliado', value: 'Desfiliado' },
    { label: 'Ativo', value: 'Ativo' },
  ]

  const optTipoCobranca = [
    { label: 'Boleto', value: 'BOLETO' },
    { label: 'Cartão de Crédito', value: 'CREDIT_CARD' },
    { label: 'Debito automático', value: 'DEBITO_AUTOMATICO' },
    { label: 'AEPET BR', value: 'AEPET_BR' },
    { label: 'AEPET MACAE', value: 'AEPET_MACAE' },
    { label: 'Convênio PETROS', value: 'CONVENIO_PETROS' },
    // { label: 'Débito em Conta', value: 'UNDEFINED' },
    // { label: 'PIX', value: 'PIX' },
  ]

  const optPeriodicidade = [
    {
      label: 'Semanalmente',
      value: 'WEEKLY',
    },
    {
      label: 'Quinzenal',
      value: 'BIWEEKLY',
    },
    {
      label: 'Mensalmente',
      value: 'MONTHLY',
    },
    {
      label: 'Bimensal',
      value: 'BIMONTHLY',
    },
    {
      label: 'Trimestral',
      value: 'QUARTERLY',
    },
    {
      label: 'Semi Anualmente',
      value: 'SEMIANNUALLY',
    },
    {
      label: 'Anual',
      value: 'YEARLY',
    },
  ]

  const optEstadoCivil = [
    { label: 'Solteiro', value: 'Solteiro' },
    { label: 'Casado', value: 'Casado' },
    { label: 'Divorciado', value: 'Divorciado' },
    { label: 'Viúvo', value: 'Viúvo' },
    { label: 'Separado', value: 'Separado' },
  ]

  const optFormacao = [
    { label: 'Ensino Fundamental', value: 'Ensino Fundamental' },
    { label: 'Ensino Médio', value: 'Ensino Médio' },
    { label: 'Ensino Superior', value: 'Ensino Superior' },
    { label: 'Pós Graduação', value: 'Pós Graduação' },
    { label: 'Mestrado', value: 'Mestrado' },
    { label: 'Doutorado', value: 'Doutorado' },
  ]

  return {
    nome,
    pagination,
    columns,
    visible,
    count,
    limit,
    offset,
    scheme,
    search,
    models,
    optBancos,
    optGender,
    optTipoBeneficiario,
    optTipoCobranca,
    optPeriodicidade,
    optConvenios,
    optEstadoCivil,
    optPatrocinadoras,
    optFormacao,
    optMensalidades,
  }
})
