<template>
  <div class="flex items-center gap-8 flex-nowrap">
    <q-avatar
      :size="size"
      class="!bg-neutral-30 dark:!bg-white/10"
      :class="classAvatar"
      v-bind="attrs">
      <q-img v-if="foto" no-transition :src="foto" no-spinner />
      <q-icon
        v-else
        size="1.5rem"
        class="!text-neutral-80/80 dark:!text-white/70"
        name="svguse:/icons.svg#icon_user" />
    </q-avatar>

    <div class="flex flex-col">
      <p class="text-paragraph-2 md:!text-paragraph-3 md:!text-12 one-line">
        {{ nome }}
      </p>
      <span
        v-if="subtitle"
        class="text-neutral-60 text-paragraph-3 md:!text-paragraph-4 md:!text-10 dark:text-white/60 one-line !leading-[100%]"
        >{{ subtitle }}</span
      >
    </div>
  </div>
</template>
<script>
export default { inheritAttrs: false }
</script>

<script setup>
import { useAttrs } from 'vue'
// import fotoDefault from 'public/image/gravatar.jpg'

const attrs = useAttrs()

defineProps({
  foto: { type: String, default: '' },
  nome: { type: String, default: '' },
  classText: { type: String, default: '' },
  classAvatar: { type: String, default: '' },
  size: { type: String, default: '1.75rem' },
  subtitle: { type: String, default: '' },
})
</script>

<style lang="scss" scoped></style>
