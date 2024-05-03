<template>
  <div class="container mx-auto pt-48 pb-64 px-24">
    <q-card class="border-neutral-100/5 rounded" flat bordered>
      <q-card-section class="!p-24">
        <h3 class="text-title-3">Matheus de Oliveira</h3>
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
      <q-form>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="dados-pessoais" class="!overflow-hidden !p-24">
            <div class="grid grid-cols-12 gap-24">
              <OInput
                v-model="models.nome"
                label="Nome"
                type="text"
                class="col-span-6"
                size="lg" />
              <OInput
                v-model="models.email"
                label="E-mail"
                type="email"
                class="col-span-6"
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
                v-model="models.genero"
                label="Gênero"
                class="col-span-6"
                size="lg"
                :options="[
                  { label: 'Masculino', value: 'Masculino' },
                  { label: 'Feminino', value: 'Feminino' },
                  { label: 'Outro', value: 'Outro' },
                ]" />
              <OInputDateTime
                :data="models.data_nascimento"
                size="lg"
                label="Data de nascimento"
                :has-time="false"
                class="h-48 col-span-6"
                :input-props="{
                  rules: [(val) => !!val || 'Campo Obrigatorio'],
                }" />
              <OInput
                v-model="models.cpf"
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
                v-model="models.cep"
                label="CEP"
                type="text"
                mask="#####-###"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.logradouro"
                label="Endereço"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.numero"
                label="Número"
                type="text"
                class="col-span-4"
                size="lg" />
              <OInput
                v-model="models.complemento"
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
          </q-tab-panel>
        </q-tab-panels>
        <div class="flex items-center justify-end p-24 gap-14">
          <OButton label="Cancelar" secondary size="lg" />
          <OButton label="Salvar alterações" primary size="lg" type="submit" />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { api } from 'boot/axios'
import { associadosService } from 'src/services/associados.service'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'
import OInputDateTime from 'components/Input/OInputDateTime.vue'
import OSelect from 'components/Select/OSelect.vue'
const tab = ref('dados-pessoais')

const { getAssociado } = associadosService()

const models = ref({
  nome: '',
  email: '',
  telefone: '',
  genero: '',
  data_nascimento: '',
  cpf: '',
  logradouro: '',
  cep: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  pais: '',
})

let modelDefault = {
  nome: '',
  email: '',
  telefone: '',
  genero: '',
  data_nascimento: '',
  cpf: '',
  logradouro: '',
  cep: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  pais: '',
}

const { URLS } = api.defaults

const route = useRoute()

const data = ref(null)

watch(
  () => data.value,
  (v) => {
    if (!v) return
    models.value.nome = v.name
    models.value.email = v.email
    models.value.telefone = v.phone
    models.value.data_nascimento = v.nascimento
    models.value.logradouro = v.address
    models.value.numero = v.address_number
    models.value.complemento = v.complement
    models.value.cidade = v.cidade
    models.value.estado = v.estado
    models.value.pais = v.pais

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

const camposAlterados = ref({})

const requests = async () => {
  try {
    data.value = await getAssociado(6)
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  requests()
})
</script>
