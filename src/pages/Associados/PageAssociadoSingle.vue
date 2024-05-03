<template>
  <div class="container mx-auto pt-48 pb-64 px-24">
    <q-card class="border-neutral-100/5 rounded" flat bordered>
      <q-card-section class="!p-24">
        <pre>
          {{ data }}
        </pre>

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
                v-model="models.name"
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
                v-model="models.phone"
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
              <OInput
                v-model="models.data_nascimento"
                label="Data de Nascimento"
                type="date"
                mask="##/##/####"
                class="col-span-6"
                size="lg" />
              <OInput
                v-model="models.cpf"
                label="CPF"
                class="col-span-6"
                type="text"
                mask="###.###.###-##"
                size="lg" />
            </div>
          </q-tab-panel>
          <q-tab-panel name="endereco"> </q-tab-panel>
          <q-tab-panel name="detalhes-conta"> </q-tab-panel>
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
import { associadosService } from 'src/services/associados.service'
import { onMounted, ref } from 'vue'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'
import OSelect from 'components/Select/OSelect.vue'
const tab = ref('dados-pessoais')

const { getAssociado } = associadosService()

const models = ref({
  nome: 'Matheus de Oliveira',
  email: '',
  phone: '21 99999-9999',
  genero: 'Masculino',
  data_nascimento: '01/01/1990',
  cpf: '999.999.999-99',
})

const data = ref(null)


const requests = async () => {
  data.value = await getAssociado(6)
}
onMounted(()=>{
  requests()
})
</script>
