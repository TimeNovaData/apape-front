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
            <div class="grid grid-cols-12 gap-16">
              <OInput
                v-model="models.name.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Nome"
                type="text"
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
                mask="(##) #####-####"
                class="col-span-3"
                :unmasked-value="true"
                size="lg" />
              <OInput
                v-model="models.tel_residencial.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                label="Telefone Residencial"
                type="text"
                mask="(##) ####-####"
                class="col-span-3"
                :unmasked-value="true"
                size="lg" />
              <OInput
                v-model="models.tel_residencial_2.value"
                label="Telefone Residencial 2"
                type="text"
                mask="(##) ####-####"
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
                v-model="tipo_beneficiario"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optTipoBeneficiario"
                label="Tipo de Beneficiário"
                class="col-span-3"
                size="lg"
                emit-value
                map-options />
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
                v-model="models.periodicidade.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optPeriodicidade"
                label="Periodicidade"
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
              <OInputDate
                :data="models.dt_patrocinadora.value"
                label="Data Patrocinadora"
                class="col-span-3"
                size="lg"
                @update:date="(v) => (models.dt_patrocinadora.value = v)" />
              <OInputDate
                :data="models.dt_cadastro.value"
                label="Data Cadastro"
                class="col-span-4"
                size="lg"
                @update:date="(v) => (models.dt_cadastro.value = v)" />

              <OSelect
                v-model="models.formacao.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optFormacao"
                label="Formação"
                class="col-span-4"
                size="lg"
                emit-value
                map-options />
              <OSelect
                v-model="models.mensalidade.value"
                :rules="[(val) => !!val || 'Campo Obrigatorio']"
                :options="optMensalidades"
                label="Mensalidade"
                class="col-span-4"
                size="lg"
                emit-value
                map-options />
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
                v-model="models.bairro.value"
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
import { storeToRefs } from 'pinia'
import { useAssociadosStore } from 'stores/associados.store'
import { useRoute, useRouter } from 'vue-router'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'
import OInputDate from 'components/Input/OInputDate.vue'
import OSelect from 'components/Select/OSelect.vue'
const tab = ref('dados-pessoais')
const router = useRouter()

const {
  models,
  optBancos,
  optConvenios,
  optPatrocinadoras,
  optGender,
  optEstadoCivil,
  optMensalidades,
} = storeToRefs(useAssociadosStore())

const { optTipoBeneficiario, optTipoCobranca, optPeriodicidade, optFormacao } =
  useAssociadosStore()

const {
  getBancos,
  getConvenios,
  postDadosAssociados,
  getPatrocinadoras,
  getMensalidades,
} = associadosService()

const tipo_beneficiario = ref('')

const disableButton = computed(() => {
  return Object.values(models.value).some(
    (item) => !item.value && item.required
  )
})

async function handleCreateAssociado() {
  const formData = new FormData()

  Object.entries(models.value).forEach(([key, value]) => {
    formData.append(key, value.value)
  })

  try {
    await postDadosAssociados(formData)
    router.push({ name: 'home' })
    NotifySucess('Associado adicionado com sucesso!')
  } catch (error) {
    NotifyError('Erro ao adicionar associado!')
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
    console.log(optMensalidades.value)
  } catch (error) {
    console.log(error)
  }
}

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
  }
)

const requests = async () => {
  await getBancosRequest()
  await getConveniosRequest()
  await getPatrocinadorasRequest()
  await getMensalidadesRequest()

}

onMounted(async () => {
  await requests()
})
</script>
