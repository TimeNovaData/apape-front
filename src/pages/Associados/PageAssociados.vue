<template>
  <div class="container mx-auto pt-48 pb-64 px-24">
    <div>
      <h3 class="text-caps-1 !font-semibold">

        Bem vindo de volta, <span class="text-primary-pure">{{ user.username }} 👋🏽</span>
      </h3>
    </div>

    <q-card
      class="py-32 px-24 border-neutral-100/5 rounded mt-24"
      flat
      bordered>
      <div class="flex items-center justify-between">
        <TextIcon icon="svguse:/icons.svg#icon_users" text="Associados" />
      </div>

      <div class="mt-24">
        <OTableServerSideBase
          ref="tableRef"
          :columns="columns"
          :visible-columns="visible"
          :limit="limit"
          :offset="offset"
          :count="count"
          :urls="`/associados/`"
          :scheme="scheme"
          :show-download-button="false"
          :show-print-button="false"
          :show-import-button="false"
          @@row-click="$router.push({ name: 'associado-single', params: { id: $event.row.id } })"
          >

          <template #body="props">
            <TrAssociados :props="props" />
          </template>
        </OTableServerSideBase>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { computed, inject, reactive, ref } from 'vue'
import OTableServerSideBase from 'components/Table/OTableServerSideBase.vue'
import TextIcon from 'components/Text/TextIcon.vue'
import TrAssociados from 'components/TR/TrAssociados.vue'


const tableRef = ref(null)

const user = inject('user')


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
    name: 'matricula_patrocinadora',
    required: true,
    field: 'matricula_patrocinadora',
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
    label: 'Tipo de Benefício',
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

function doSearch() {
  tableRef.value.requestServerInteraction()
}
</script>

<style lang="sass" scoped>
:deep(.q-tab)
  & .q-tab__content
    flex-wrap: nowrap !important
    padding: .75rem
</style>
