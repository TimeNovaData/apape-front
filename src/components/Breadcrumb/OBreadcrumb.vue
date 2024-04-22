<template>
  <q-breadcrumbs separator=">" class="bread">
    <q-breadcrumbs-el
      v-for="item in breadcrumbs"
      :key="item.name"
      :label="item.label"
      :to="{ name: item.name }"
      :exact="false" />
  </q-breadcrumbs>
</template>

<script setup>
defineProps({
  /**
   * passar direto nos routes => $route.meta.breadcrumbs
   */
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})
</script>
<style lang="sass" scoped>
.bread :deep(.q-breadcrumbs--last a)
  color: rgb(var(--primary-pure)) !important
</style>
