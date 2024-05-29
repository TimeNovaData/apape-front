<template>
  <div class="max-w-[1152px] mx-auto pt-48 pb-64 px-24">
    <q-card class="border-neutral-100/5 rounded" flat bordered>
      <q-card-section class="!p-24">
        <h3 class="text-title-3">{{ data?.name }}</h3>
      </q-card-section>
      <q-tabs
        v-model="tab"
        class="text-paragraph-3 max-w-max h-max"
        align="justify"
        active-class="text-primary-pure"
        indicator-color="primary">
        <q-tab
          name="dados-pessoais"
          label="Dados Pessoais"
          class="bg-white mr-12 rounded transition-all" />

        <q-tab
          name="endereco"
          label="Endereço"
          class="bg-white rounded transition-all" />
        <q-tab
          name="detalhes-conta"
          label="Detalhes da conta"
          class="bg-white rounded transition-all" />
      </q-tabs>
      <q-form @submit="updateAssociado">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="dados-pessoais" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-24">
              <OInput
                v-model="models.name"
                label="Nome"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.matricula"
                label="Matrícula"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.email"
                label="E-mail"
                type="email"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.telefone"
                label="Telefone"
                type="text"
                mask="(##) #####-####"
                class="col-span-6"
                :unmasked-value="true"
                size="lg" />
              <OSelect
                v-model="models.sexo"
                label="Gênero"
                class="col-span-6"
                size="lg"
                emit-value
                map-options
                input-value="value"
                input-label="label"
                :options="optGender" />
   
              <OInputDateTime
                :data="models.nascimento"
                size="lg"
                label="Data de nascimento"
                :has-time="false"
                class="h-48 col-span-6"
                :input-props="{
                  // rules: [(val) => !!val || 'Campo Obrigatorio'],
                }"
                @update:date="
                  (v) => (models.nascimento = date.formatDate(v, 'YYYY-MM-DD'))
                " />

              <OInput
                v-model="models.cpf_cnpj"
                label="CPF"
                class="col-span-6"
                type="text"
                mask="###.###.###-##"
                size="lg" />
            </div>
          </q-tab-panel>
          <q-tab-panel name="endereco" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-24">
              <OInput
                v-model="models.postal_code"
                label="CEP"
                type="text"
                mask="#####-###"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.address"
                label="Endereço"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.address_number"
                label="Número"
                type="number"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.complement"
                label="Complemento"
                type="text"
                class="col-span-6"
                size="lg" />
              <OInput
                v-model="models.bairro"
                label="Bairro"
                type="text"
                class="col-span-6"
                size="lg" />

              <OInput
                v-model="models.cidade"
                label="Cidade"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.estado"
                label="Estado"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.pais"
                label="País"
                type="text"
                class="col-span-4"
                size="lg" />
            </div>
          </q-tab-panel>
          <q-tab-panel name="detalhes-conta" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-24">
              <OInput
                v-model="models.banco"
                label="Banco"
                class="col-span-4"
                readonly
                size="lg" />

              <OInput
                v-model="models.convenio"
                label="Convênio"
                class="col-span-4"
                readonly
                size="lg" />

              <OInputDateTime
                :data="models.dt_conv_petros"
                size="lg"
                :label="`Data do convênio `"
                :has-time="false"
                class="h-48 col-span-4"
                :input-props="{
                  disable: true,
                }"
                @update:date="(v) => (models.dt_conv_petros = v)" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
        <div class="flex items-center justify-end p-24 gap-14">
          <OButton label="Cancelar" secondary size="lg" to="/associados" />
          <OButton
            label="Salvar alterações"
            primary
            size="lg"
            type="submit"
            :disabled="!temCamposAlterados" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { api } from 'boot/axios'
import { associadosService } from 'src/services/associados.service'
import { computed, onMounted, ref, watch } from 'vue'
import {date} from 'quasar'
import { NotifyError, NotifySucess } from 'boot/Notify'
import { useRoute } from 'vue-router'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'
import OInputDateTime from 'components/Input/OInputDateTime.vue'
import OSelect from 'components/Select/OSelect.vue'

const { FData } = GLOBAL
const tab = ref('dados-pessoais')
const { URLS } = api.defaults
const route = useRoute()
const { getAssociado, patchDadosAssociados, getBancos, getConvenios } =
  associadosService()

const camposAlterados = ref({})
const models = ref({
  name: '',
  email: '',
  telefone: '',
  sexo: '',
  matricula: '',
  nascimento: '',
  dt_conv_petros: '',
  postal_code: '',
  convenio: '',
  cpf_cnpj: '',
  address: '',
  cep: '',
  address_number: '',
  complement: '',
  bairro: '',
  cidade: '',
  estado: '',
  pais: '',
  banco: '',
  autorizacao: '',
})

let modelDefault = {}

const id = route.params.id

const data = ref(null)

const optBancos = ref([])

const optGender = [
  { label: 'Masculino', value: 'Masculino' },
  { label: 'Feminino', value: 'Feminino' },
  { label: 'Outro', value: 'Outro' },
]

const optConvenios = ref([])
watch(
  () => data.value,
  (v) => {
    if (!v) return
    models.value.name = v.name
    models.value.email = v.email
    models.value.cpf_cnpj = v.cpf_cnpj
    models.value.telefone = v.phone
    models.value.nascimento = v.nascimento
    models.value.address = v.address
    models.value.address_number = v.address_number
    models.value.bairro = v.bairro
    models.value.postal_code = v.postal_code
    models.value.matricula = v.matricula
    models.value.complement = v.complement
    models.value.cidade = v.cidade
    models.value.sexo = optGender.find((item) => item.value === v.sexo)?.value
    models.value.estado = v.estado
    models.value.pais = v.pais
    models.value.banco = v.associados_aut_set[0]?.banco.bancos
    models.value.autorizacao = v.associados_aut_set[0]?.id
    models.value.convenio = v.associados_aut_set[0]?.convenios.nome
    models.value.dt_conv_petros = v.associados_aut_set[0]?.convenios.dt_conv

    modelDefault = { ...models.value }
  },
  {
    immediate: true,
    deep: true,
  }
)

watch(
  () => models.value,
  (v) => {
    camposAlterados.value = Object.keys(v).reduce((acc, key) => {
      if (v[key] !== modelDefault[key]) {
        acc[key] = v[key]
      }
      return acc
    }, {})
  },
  { deep: true }
)

async function updateAssociado() {
  if (Object.keys(camposAlterados.value).length === 0) {
    NotifyError('Nenhum campo alterado!')
    return
  }
  const formData = new FormData()

  Object.entries(camposAlterados.value).forEach(([key, value]) => {

    if (key !== 'banco' && key !== 'convenio' && key !== 'dt_conv_petros')
      if (key === 'nascimento') {
        value = FData(value, 'YYYY-MM-DD')
      }
    formData.append(key, value)
  })

  try {
    const _response = await patchDadosAssociados(id, {
      ...camposAlterados.value,
    })

    await getAssociadoRequest()
    NotifySucess('Dados atualizados com sucesso!')
  } catch (error) {
    NotifyError('Erro ao atualizar dados!')
    throw new Error(error)
  }
}

const temCamposAlterados = computed(() => {
  return Object.keys(camposAlterados.value).length > 0
})

const getAssociadoRequest = async () => {
  try {
    data.value = await getAssociado(id)
  } catch (error) {
    console.log(error)
  }
}

const getBancosRequest = async () => {
  try {
    const response = await getBancos()

    optBancos.value = response?.results.map((item) => ({
      label: item.bancos,
      value: item.id,
    }))
  } catch (error) {
    console.log(error)
  }
}

const getConveniosRequest = async () => {
  try {
    const response = await getConvenios()
    optConvenios.value = response.results?.map((item) => ({
      label: item.nome,
      value: item.id,
    }))
  } catch (error) {
    console.log(error)
  }
}

const requests = async () => {
  await getAssociadoRequest()
  await getBancosRequest()
  await getConveniosRequest()
}

onMounted(async () => {
  await requests()
})
</script>
