<template>
  <OButton
    v-if="responsive && Screen.lt.md"
    size="sm"
    secondary
    class="bg-white/10 !py-0 !w-32 !h-32 !border-transparent">
    <q-icon size="1.5rem" name="search"></q-icon>
    <q-menu
      ref="menu"
      class="p-12 pb-0"
      transition-show="jump-down"
      transition-hide="jump-up">
      <q-item
        v-if="placeholder"
        class="px-0 text-headline-3 text-neutral-60 dark:text-white/60 justify-between flex items-center w-full mb-8"
        dense>
        {{ placeholder }}
      </q-item>

      <q-item class="px-0">
        <OInput
          v-bind="attrs"
          type="search"
          debounce="400"
          :clearable="true"
          class="sm:min-w-0">
          <template #prepend>
            <q-icon name="search"></q-icon>
          </template>
        </OInput>
      </q-item>
    </q-menu>
  </OButton>

  <OInput
    v-else
    v-bind="attrs"
    :placeholder="placeholder"
    type="search"
    debounce="400"
    :clearable="true">
    <template #prepend>
      <q-icon name="search"></q-icon>
    </template>
  </OInput>
</template>

<script setup>
import { Screen } from 'quasar'
import { useAttrs, computed } from 'vue'
import OButton from 'components/Button/OButton.vue'
import OInput from './OInput.vue'

const attrs = useAttrs()

defineProps({
  placeholder: { type: String, default: '' },
  responsive: {
    type: Boolean,
    default: false,
  },
})

// const resize = computed(() => Screen.lt.md && props.value.responsive)
</script>

<style lang="sass" scoped></style>
