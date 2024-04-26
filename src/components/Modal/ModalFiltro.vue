<template>
  <div class="q-pa-md">
    <OButton
      icon="svguse:/icons.svg#icon_filtros"
      size="md"
      class="dark:bg-white/10 dark:!border-transparent icon-opacity"
      secondary
    >
      Filtro
      <q-menu>
        <slot name="content"> </slot>
      </q-menu>
    </OButton>
  </div>
</template>

<script setup>
import OButton from 'components/Button/OButton.vue'
</script>
