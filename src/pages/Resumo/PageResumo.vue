<template>
  <div class="container mx-auto pt-48 pb-64">
    <q-card class="py-32 px-24 border-neutral-100/5 rounded" flat bordered>
      <div class="flex items-center justify-between">
        <TextIcon
          icon="svguse:/icons.svg#icon-chart-statistics"
          text="Resumo"
          :has-sub="true"
          sub="As cores dos indicadores são vinculadas ao gráfico abaixo." />

        <div class="flex items-center gap-8">
          <p class="text-caps-3 !font-normal text-neutral-70">Visualizando:</p>

          <q-tabs v-model="filtroVisualizacao">
            <q-tab name="filtro_semana" label="Últimos 7 dias" class="mr-8" />
            <q-tab name="filtro_mes" label=" Este mês" class="mr-8" />
            <q-tab name="filtro_mes_passado" label=" Mês passado" class="mr-8" />
            <q-tab name="filtro_ano" label=" Ano" />
          </q-tabs>
        </div>
      </div>

      <div class="mt-24">
        <div class="grid grid-cols-5 gap-16">
          <!-- :icon="`svguse:/icons.svg#${item.icon}`" -->
          <CardResumo
            v-for="item in dadosFaturamento"
            :key="item.id"
            :icon="`${item.icon}`"
            :title="item.value"
            :subtitle="item.label"
            :color="item.color" />
        </div>
      </div>
      <div class="mt-32">
        <ChartResumo />
      </div>
    </q-card>
  </div>
</template>

<script setup>
  import { ref , onMounted, watch} from 'vue'
  import ChartResumo from 'components/Chart/ChartResumo.vue'
  import GLOBAL from 'utils/GLOBAL'

  import CardResumo from 'components/Card/CardResumo.vue'
  import TextIcon from 'components/Text/TextIcon.vue'
  import { paymentsService } from 'src/services/payments.service'

  const { getPayments, getPaymentsFaturamento,getPaymentsFiltrado} = paymentsService()
  const { fMoney } = GLOBAL
  const dadosFaturamento = ref([
    {
      id: 0,
      value: '',
      label: 'Previsto',
      color: '#FF9A0A',
      icon: 'attach_money'
    },
    {
      id: 1,
      value: '',
      label: 'Confirmado',
      color: '#001074',
      icon: 'check'
    },
    {
      id: 2,
      value: '',
      label: 'Recebido',
      color: '#00D071',

      icon: 'payments'
    },
  ])
  const dados = ref([
   
    // {
    //   id: 3,
    //   value: fMoney(35.66),
    //   label: 'Média diária de vendas líquidas',
    //   color: '#8800CC',
    //   icon: 'icon-calendar-schedule-discount-sale-1'

    // },
    // {
    //   id: 4,
    //   value: 8,
    //   label: 'Pedidos feitos',
    //   color: '#596080',
    //   icon: 'icon-bag-shopping-thumbs-up'

    // },
    // {
    //   id: 5,
    //   value: 7,
    //   label: 'Itens comprados',
    //   color: '#6C7080',
    //   icon: 'icon-bag-shopping-cart-checkamrk'

    // },
    // {
    //   id: 6,
    //   value: fMoney(0.00),
    //   label: 'Reembolso de 0 pedido (0 item)',
    //   color: '#800000',
    //   icon: 'icon-dollar-payments-onversion'
    // },
    // {
    //   id: 7,
    //   value: fMoney(0.00),
    //   label: 'Cobrado para o transporte',
    //   color: '#008055',
    //   icon: 'icon-truck-2'
    // },
    // {
    //   id: 8,
    //   value: fMoney(149.70),
    //   label: 'No valor dos cupons usados',
    //   color: '#807500',
    //   icon: 'icon-stickers-paper'
    // },
  ])
  const filtroVisualizacao = ref('filtro_semana')



  function setFaturamentoDados(dados){
    dadosFaturamento.value[0].value =  fMoney(dados.filtro_faturamento_previsto)
    dadosFaturamento.value[1].value =  fMoney(dados.filtro_faturamento_confirmado)
    dadosFaturamento.value[2].value =  fMoney(dados.filtro_faturamneto_recebido)
  }

  

  const requests = async () => {
    // const payments = await getPayments()
    const paymentsFiltrado = await getPaymentsFiltrado(filtroVisualizacao.value)
    if(paymentsFiltrado){
      setFaturamentoDados(paymentsFiltrado)
    }
  }

  watch(() => filtroVisualizacao.value, 
  async (val) => {
    const paymentsFiltrado  = await getPaymentsFiltrado(val)
    setFaturamentoDados(paymentsFiltrado)
})

  // watch(
  //   ()=>  filtroVisualizacao.value,
  //   (v)=>{
  //     console.log(v)
  //   }
  // )

  onMounted(async () =>{  
    await requests()  
  })
</script>

<style lang="sass" scoped>
@import '../../css/quasar/variables'
@import '../../css/quasar/core/typography'

:deep(.q-tab)
  border: 1px solid rgba(var(--neutral-100), 0.10)
  border-radius: .1875rem
  transition: .3s ease
  & .q-tab__content
    flex-wrap: nowrap !important
    padding: .75rem
  & .q-tab__label
    color: rgba(var(--neutral-70), 1)
    @include text(paragraph-2)

  &.q-tab--active, &:hover
    background-color: rgba(var(--primary-pure), 0.10)
    border-color: rgba(var(--primary-pure), 1)

    & .q-tab__label
      color: rgba(var(--primary-pure), 1)
    & .q-tab__indicator
      background: transparent !important
</style>
