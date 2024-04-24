<template>
  <q-card
    flat
    bordered
    class="shadow-sm border-neutral-100/5"
    :class="`text-[${color}]`">

    <q-card-section class="!p-16 flex items-start gap-16">
      <q-icon class="w-24 h-24" :class="iconClass" :name="icon" />
      <div>
        <h3 class="text-headline-1 " :class="titleClass">
          {{ title }}
        </h3>
        <p class="text-paragraph-3 text-neutral-60">{{ subtitle }}</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, default: '' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  titleClass: { type: String, default: '' },
  color: { type: String, default: '' },
})
</script>
