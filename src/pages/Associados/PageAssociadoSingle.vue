<template>
  <div class="max-w-[1152px] mx-auto pt-48 pb-64 px-24">
    <q-card class="border-neutral-100/5 rounded" flat bordered>
      <q-card-section class="!p-24">
        <h3 class="text-title-3">{{ dataAssociado?.name }}</h3>
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
            <div class="grid grid-cols-12 gap-16">
              <OInput
                v-model="models.name.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Nome"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.matricula.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Matrícula"
                type="number"
                disable
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.naturalidade.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Naturalidade"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.nacionalidade.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Nacionalidade"
                type="text"
                class="col-span-3"
                size="lg" />

              <OInputDate
                :data="models.nascimento.value"
                label="Data de nascimento"
                class="col-span-3"
                size="lg"
                @update:date="(v) => (models.nascimento.value = v)" />
              <OSelect
                v-model="models.sexo.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Gênero"
                class="col-span-3"
                size="lg"
                emit-value
                map-options
                input-value="value"
                input-label="label"
                :options="optGender" />
              <OSelect
                v-model="models.estado_civil.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Estado Civil"
                class="col-span-3"
                size="lg"
                emit-value
                map-options
                input-value="value"
                input-label="label"
                :options="optEstadoCivil" />
              <OInput
                v-model="models.ident.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="N° de ident"
                mask="##.###.###-#"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.orgao.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Orgão Emissor"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.email.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="E-mail"
                type="email"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.tel_trabalho.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Telefone Trabalho"
                type="text"
                mask="(##) ####-####"
                class="col-span-3"
                :unmasked-value="true"
                size="lg" />
              <OInput
                v-model="models.tel_residencial.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Celular 1"
                type="text"
                mask="(##) #####-####"
                class="col-span-3"
                :unmasked-value="true"
                size="lg" />
              <OInput
                v-model="models.tel_residencial_2.value"
                label="Celular 2"
                type="text"
                mask="(##) #####-####"
                class="col-span-3"
                :unmasked-value="true"
                size="lg" />
              <OInput
                v-model="models.cpf_cnpj.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="CPF"
                class="col-span-3"
                type="text"
                mask="###.###.###-##"
                size="lg" />

              <OSelect
                v-model="models.status.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optTipoBeneficiario"
                label="Status do Beneficiário"
                class="col-span-3"
                size="lg"
                emit-value
                map-options />

              <OInput
                v-model="models.matricula_petros.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Matrícula Petros"
                type="number"
                class="col-span-3"
                size="lg" />

              <OInputDate
                :data="models.dt_patrocinadora.value"
                label="Data Patrocinadora"
                class="col-span-3"
                size="lg"
                @update:date="(v) => (models.dt_patrocinadora.value = v)" />
              <OInputDate
                :data="models.dt_cadastro.value"
                label="Data Cadastro"
                class="col-span-3"
                size="lg"
                @update:date="(v) => (models.dt_cadastro.value = v)" />

              <OInput
                v-model="models.formacao.value"
                label="Formação"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.cb.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="CB"
                type="text"
                class="col-span-3"
                size="lg" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="endereco" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-16">
              <OInput
                v-model="models.address.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Endereço"
                type="text"
                class="col-span-3"
                size="lg" />

              <OInput
                v-model="models.address_number.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Número"
                type="text"
                class="col-span-3"
                size="lg" />

              <OInput
                v-model="models.complement.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Complemento"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.postal_code.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="CEP"
                type="text"
                mask="#####-###"
                class="col-span-3"
                size="lg" />

              <OInput
                v-model="models.province.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Bairro"
                type="text"
                class="col-span-3"
                size="lg" />

              <OInput
                v-model="models.cidade.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Cidade"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.estado.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Estado"
                type="text"
                class="col-span-3"
                size="lg" />
              <OInput
                v-model="models.pais.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="País"
                type="text"
                class="col-span-3"
                size="lg" />
            </div>
          </q-tab-panel>
          <q-tab-panel name="detalhes-conta" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-16">
              <OSelect
                v-model="models.tipo_cobranca.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optTipoCobranca"
                label="Tipo de Cobrança"
                class="col-span-3"
                size="lg"
                emit-value
                map-options />
              <OSelect
                v-model="models.mensalidade.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optMensalidades"
                label="Mensalidade"
                class="col-span-3"
                size="lg"
                emit-value
                map-options />

              <OSelect
                v-model="models.periodicidade.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optPeriodicidade"
                label="Periodicidade"
                class="col-span-3"
                size="lg"
                emit-value
                map-options />

              <OSelect
                v-model="models.patrocinadores.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optPatrocinadoras"
                label="Patrocinadora"
                class="col-span-3"
                size="lg"
                emit-value
                map-options />

              <OInput
                v-model="models.maticula_patrocinadora.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Matrícula Patrocinadora"
                type="number"
                class="col-span-3"
                size="lg" />
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
import { date } from 'quasar'
import { NotifyError, NotifySucess } from 'boot/Notify'
import { storeToRefs } from 'pinia'
import { useAssociadosStore } from 'stores/associados.store'
import { useRoute } from 'vue-router'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'
import OInputDate from 'components/Input/OInputDate.vue'
import OSelect from 'components/Select/OSelect.vue'

const { FData } = GLOBAL
const tab = ref('dados-pessoais')
const { URLS } = api.defaults
const route = useRoute()
const {
  getAssociado,
  patchDadosAssociados,
  getBancos,
  getConvenios,
  getPatrocinadoras,
  getMensalidades,
} = associadosService()

const {
  models,
  optBancos,
  optConvenios,
  optPatrocinadoras,

  optMensalidades,
} = storeToRefs(useAssociadosStore())

const {
  optGender,
  optEstadoCivil,
  optTipoBeneficiario,
  optTipoCobranca,
  optPeriodicidade,
  optFormacao,
} = useAssociadosStore()

const camposAlterados = ref({})

let modelDefault

const id = route.params.id

const dataAssociado = ref(null)

const tipo_beneficiario = ref('')

watch(
  () => dataAssociado.value,
  (v) => {
    if (!v) return
    models.value.name.value = v.name
    models.value.email.value = v.email
    models.value.cpf_cnpj.value = v.cpf_cnpj
    models.value.status.value = v.status
    models.value.nascimento.value = v.nascimento
    models.value.address.value = v.address
    models.value.address_number.value = v.address_number
    models.value.province.value = v.province
    models.value.postal_code.value = v.postal_code
    models.value.matricula.value = v.matricula
    models.value.complement.value = v.complement
    models.value.cidade.value = v.cidade
    models.value.sexo.value = v.sexo
    models.value.estado.value = v.estado
    models.value.pais.value = v.pais
    models.value.banco.value = v.associados_aut_set[0]?.banco.bancos
    models.value.autorizacao.value = v.associados_aut_set[0]?.id
    models.value.convenio.value = v.associados_aut_set[0]?.convenios.nome
    models.value.dt_conv_petros.value =
      v.associados_aut_set[0]?.convenios.dt_conv
    models.value.aposentado.value = v.aposentado
    models.value.pensionista.value = v.pensionista
    models.value.naturalidade.value = v.naturalidade
    models.value.nacionalidade.value = v.nacionalidade
    models.value.estado_civil.value = v.estado_civil
    models.value.ident.value = v.ident
    models.value.orgao.value = v.orgao
    models.value.tipo_cobranca.value = v.tipo_cobranca
    models.value.periodicidade.value = v.periodicidade
    models.value.matricula_petros.value = v.matricula_petros
    models.value.tel_residencial.value = v.tel_residencial
    models.value.tel_residencial_2.value = v.tel_residencial_2
    models.value.tel_trabalho.value = v.tel_trabalho
    models.value.patrocinadores.value = v.patrocinadores.nome
    models.value.maticula_patrocinadora.value = v.maticula_patrocinadora
    models.value.dt_patrocinadora.value = v.dt_patrocinadora
    models.value.formacao.value = v.formacao
    models.value.mensalidade.value = v.mensalidade.nivel
    models.value.dt_cadastro.value = v.dt_cadastro
    models.value.cb.value = v.cb
    if (modelDefault === undefined) {
      setModelDefault()
    }
  },
  {
    immediate: true,
    deep: true,
  }
)

watch(
  () => models.value,
  (v) => {
    camposAlterados.value = Object.keys(v)?.reduce((acc, key) => {
      // console.log(v[key].value, modelDefault[key].value)
      if (v[key].value !== modelDefault[key].value) {
        acc[key] = v[key].value
      }
      return acc
    }, {})
  },
  { deep: true }
)

watch(
  () => tipo_beneficiario.value,
  (v) => {
    switch (v) {
      case 'Aposentado':
        models.value.aposentado.value = 'S'
        models.value.pensionista.value = 'N'
        break
      case 'Pensionista':
        models.value.aposentado.value = 'N'
        models.value.pensionista.value = 'S'
        break
      case 'Ativo':
        models.value.aposentado.value = 'N'
        models.value.pensionista.value = 'N'
        break
    }
  },
  {
    immediate: true,
  }
)
watch(
  () => models.value.name.value,
  (v) => {
    console.log(v?.name)
    document.title = `APAPE - ${v}`
  },
  {
    immediate: true,
  }
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
        value.value = date.formatDate(value.value, 'YYYY-MM-DD')
      }
    formData.append(key, value)
  })

  try {
    const _response = await patchDadosAssociados(id, {
      ...camposAlterados.value,
    })

    console.log(_response.value)
    if (_response.value.response.status === 400) {
      Object.entries(_response.value.response.data).forEach(([key, value]) => {
        NotifyError(value[0])
      })
      console.log(_response.value)
      return
    }

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
    dataAssociado.value = await getAssociado(id)
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

const getPatrocinadorasRequest = async () => {
  try {
    const response = await getPatrocinadoras()

    optPatrocinadoras.value = response?.results.map((item) => ({
      label: item.nome,
      value: item.id,
    }))
  } catch (error) {
    console.log(error)
  }
}

const getMensalidadesRequest = async () => {
  try {
    const response = await getMensalidades()
    optMensalidades.value = response?.results.map((item) => ({
      label: item.nivel,
      value: item.id,
    }))
  } catch (error) {
    console.log(error)
  }
}

const setModelDefault = () => {
  modelDefault = Object.entries(models.value).reduce((acc, [key, value]) => {
    acc[key] = {
      value: value.value,
      required: value.required,
    }

    return acc
  }, {})
}

const requests = async () => {
  await getAssociadoRequest()
  await getBancosRequest()
  await getConveniosRequest()
  await getPatrocinadorasRequest()
  await getMensalidadesRequest()
}

onMounted(async () => {
  await requests()

  // modelDefault.value = { ...models.value } // Inicializa modelDefault aqui
})
</script>
