<template>
  <div id="badges" class="flex gap-8 justify-end ml-auto mr-8 md:hidden"></div>

  <FilterItem
    secondary
    size="sm"
    :applyed-filters="applyedFilters"
    :is-loading="!filterFields"
    @remove-filters="handleRemoveFilters"
    @apply-filters="handleApplyFilters">
  </FilterItem>
</template>

<script setup>
import FilterItem from 'components/Filter/FilterItem.vue'

//
const filterFields = {
  cliente: {
    options: [],
    model: '',
    name: 'clienteid',
    nameVisivel: 'Cliente',
  },
  projeto: {
    options: [],
    model: '',
    name: 'projetoid',
    nameVisivel: 'Projeto',
  },
}

const applyedFilters = ['Opção 1', 'Opção 2']

function handleRemoveFilters() {}
function handleApplyFilters() {}
</script>

<style lang="scss" scoped></style>
