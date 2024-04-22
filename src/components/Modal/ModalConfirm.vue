<!-- eslint-disable vue/no-v-html -->
<template>
  <q-dialog ref="dialogRef">
    <q-card class="q-dialog-plugin dark:bg-d-neutral-10">
      <header
        class="flex items-center bg-primary-pure py-16 px-24 text-title-4 text-neutral-100">
        {{ title }}
      </header>

      <div class="p-24 flex flex-col justify-between min-h-160">
        <p
          class="text-paragraph-2 text-neutral-100/80 dark:text-white/70"
          v-html="sanitizeHtml(text)"></p>

        <div class="flex items-center justify-end gap-8 mt-48">
          <OButton
            size="md"
            secondary
            class="dark:bg-d-neutral-40 dark:!border-transparent !px-14"
            @click="onDialogCancel">
            Cancelar
          </OButton>
          <OButton size="md" primary class="!px-14" @click="onDialogOK">
            Confirmar
          </OButton>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed, onUnmounted, watch } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import GLOBAL from 'utils/GLOBAL'
import OButton from 'components/Button/OButton.vue'
// import sanitizeHtml from 'sanitize-html'

const { sanitizeHTML } = GLOBAL

const { dialogRef, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const props = defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
})

defineEmits([...useDialogPluginComponent.emits])

defineExpose({
  dialogRef,
})
</script>
