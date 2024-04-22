<template>
  <div
    class="inline-flex items-center gap-6 text-neutral-100 text-title-3 md:!text-16 dark:text-white/90">
    <q-icon
      class="text-primary-pure w-24 h-24"
      :class="iconClass"
      :name="icon"
      icon-class="true">
    </q-icon>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '' },
  text: { type: String, default: '' },
  iconClass: { type: String, default: '' },
})
</script>

<style lang="scss" scoped></style>
