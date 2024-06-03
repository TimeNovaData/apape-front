<template>
  <div class="max-w-[1152px] mx-auto pt-48 pb-64 px-24">
    <q-card class="border-neutral-100/5 rounded" flat bordered>
      <q-card-section class="!p-24">
        <h3 class="text-title-3">Novo Cadastro</h3>
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
      </q-tabs>
      <q-form @submit="handleCreateAssociado">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="dados-pessoais" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-24">
              <OInput
                v-model="models.name"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Nome"
                type="text"
                class="col-span-4"
                size="lg" />

              <OInput
                v-model="models.email"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="E-mail"
                type="email"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.telefone"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Telefone"
                type="text"
                mask="(##) #####-####"
                class="col-span-4"
                :unmasked-value="true"
                size="lg" />
              <OSelect
                v-model="models.sexo"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Gênero"
                class="col-span-3"
                size="lg"
                emit-value
                map-options
                input-value="value"
                input-label="label"
                :options="optGender" />
              <OInputDate
                :data="models.nascimento"
                label="Data de nascimento"
                class="col-span-3"
                size="lg"
                @update:date="(v) => (models.nascimento = v)" />

              <OInput
                v-model="models.cpf_cnpj"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="CPF"
                class="col-span-3"
                type="text"
                mask="###.###.###-##"
                size="lg" />

              <OSelect
                v-model="tipo_beneficiario"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optTipoBeneficiario"
                label="Tipo de Beneficiário"
                class="col-span-3"
                size="lg"
                emit-value
                map-options />
            </div>
          </q-tab-panel>
          <q-tab-panel name="endereco" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-24">
              <OInput
                v-model="models.postal_code"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="CEP"
                type="text"
                mask="#####-###"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.address"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Endereço"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.address_number"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Número"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.complement"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Complemento"
                type="text"
                class="col-span-6"
                size="lg" />
              <OInput
                v-model="models.bairro"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Bairro"
                type="text"
                class="col-span-6"
                size="lg" />

              <OInput
                v-model="models.cidade"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Cidade"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.estado"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Estado"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.pais"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="País"
                type="text"
                class="col-span-4"
                size="lg" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
        <div class="flex items-center justify-end p-24 gap-14">
          <OButton label="Cancelar" secondary size="lg" to="/associados" />
          <OButton
            :disabled="disableButton"
            label="Salvar"
            primary
            size="lg"
            type="submit" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { api } from 'boot/axios'
import { associadosService } from 'src/services/associados.service'
import { computed, onMounted, ref, watch } from 'vue'
import { NotifyError, NotifySucess } from 'boot/Notify'
import { useRoute, useRouter } from 'vue-router'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'
import OInputDate from 'components/Input/OInputDate.vue'
import OSelect from 'components/Select/OSelect.vue'

const tab = ref('dados-pessoais')
const { URLS } = api.defaults
const route = useRoute()
const router = useRouter()
const {
  getAssociado,
  patchDadosAssociados,
  getBancos,
  getConvenios,
  postDadosAssociados,
} = associadosService()

const { FData } = GLOBAL
const camposAlterados = ref({})
const models = ref({
  name: '',
  email: '',
  telefone: '',
  sexo: '',
  nascimento: '',
  cpf_cnpj: '',
  address: '',
  postal_code: '',
  address_number: '',
  complement: '',
  bairro: '',
  cidade: '',
  estado: '',
  pais: '',
  aposentado: '',
  pensionista: '',
})

const modelDefault = {}

const id = route.params.id

const data = ref(null)

const tipo_beneficiario = ref('')

const optBancos = ref([])

const optGender = [
  { label: 'Masculino', value: 'Masculino' },
  { label: 'Feminino', value: 'Feminino' },
  { label: 'Outro', value: 'Outro' },
]

const optTipoBeneficiario = [
  { label: 'Pensionista', value: 'Pensionista' },
  { label: 'Ativo', value: 'Ativo' },
  { label: 'Aposentado', value: 'Aposentado' },
]

const optConvenios = ref([])

const disableButton = computed(() => {
  return Object.values(models.value).some((item) => !item)
})

async function handleCreateAssociado() {
  const formData = new FormData()

  Object.entries(models.value).forEach(([key, value]) => {
    formData.append(key, value)
  })

  try {
    router.push({ name: 'home' })
    NotifySucess('Associado adicionado com sucesso!')
  } catch (error) {
    NotifyError('Erro ao adicionar associado!')
    console.log(error)
  }
}

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

watch(
  () => tipo_beneficiario.value,
  (v) => {
    switch (v) {
      case 'Aposentado':
        models.value.aposentado = 'S'
        models.value.pensionista = 'N'
        break
      case 'Pensionista':
        models.value.aposentado = 'N'
        models.value.pensionista = 'S'
        break
      case 'Ativo':
        models.value.aposentado = 'N'
        models.value.pensionista = 'N'
        break
    }
  }
)

const requests = async () => {
  await getAssociadoRequest()
  await getBancosRequest()
  await getConveniosRequest()
}

onMounted(async () => {
  await requests()
})
</script>
