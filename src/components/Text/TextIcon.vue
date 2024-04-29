<template>
  <div
    class="inline-flex gap-8 text-neutral-100 text-title-3 md:!text-16 dark:text-white/90"
    :class="hasSub ? 'items-start' : 'items-center'">
    <q-icon
      class="text-primary-pure w-24 h-24"
      :class="iconClass"
      :name="icon"
      icon-class="true">
    </q-icon>
    <div>
      <p>{{ text }}</p>
      <p v-if="hasSub" class="text-paragraph-2 text-neutral-70 mt-8">
        {{ sub }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '' },
  text: { type: String, default: '' },
  iconClass: { type: String, default: '' },
  sub: { type: String, default: '' },
  hasSub: { type: Boolean, default: false },
  
})
</script>

<style lang="scss" scoped></style>
