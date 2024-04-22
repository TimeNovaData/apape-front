<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="pt-42 px-42 mx-auto flex max-w-[900px] flex-col">
    <div class="text-neutral-80 flex w-full justify-between">
      <p class="text-title-3">icons.svg</p>
      <OButton
        target="_blank"
        href="https://fonts.google.com/icons?icon.set=Material+Symbols&icon.style=Rounded&icon.platform=android"
        class="text-paragraph-3 !ml-auto mb-8 text-end"
        icon-size="1.25rem"
        icon-right="text_fields"
        >Material Symbols Rounded</OButton
      >
    </div>
    <OInput
      v-model="search"
      class="no-label"
      size="md"
      placeholder="Search"
      @update:model-value="handleUpdate">
    </OInput>
  </div>

  <div class="p-42 mx-auto max-w-[900px] flex flex-wrap gap-16 pt-8">
    <q-item
      v-for="i in symbols"
      :key="i"
      v-ripple
      clickable=""
      class="flex cursor-pointer flex-col justify-center gap-4 rounded-md border border-neutral-100/10  px-12 text-center py-8 flex-1"
      @click="
        $NotifySucess(`'svguse:/icons.svg#${i}'`) &&
          copyToClipboard(`svguse:/icons.svg#${i}`)
      ">
      <q-icon
        class="text-neutral-80 mx-auto"
        size="32px"
        :name="'svguse:/icons.svg#' + i"></q-icon>
      <p
        class="text-paragraph-3 text-neutral-70 inline-flex justify-center text-center">
        {{ i }}
      </p>
    </q-item>
  </div>
  <div id="icons_wrapper" v-html="icons"></div>
</template>

<script setup>
import { copyToClipboard } from 'quasar'
import { nextTick, onMounted, ref, toRaw } from 'vue'
import BaseModal from 'components/Modal/BaseModal.vue'
import OButton from 'components/Button/OButton.vue'
import OInput from 'components/Input/OInput.vue'

const icons = ref('')
const symbols = ref('')
const backup = ref('')

const search = ref('')

function handleUpdate() {
  console.log(search.value)
  symbols.value = backup.value.filter((i) => i.includes(search.value))
}

onMounted(async () => {
  const svg = await fetch('icons.svg')
  const text = await svg.text()
  icons.value = text
  await nextTick()
  const s = document.querySelectorAll('#icons_wrapper svg > symbol')
  symbols.value = [...s].map(i => i.getAttribute("id"))
  backup.value = [...s].map(i => i.getAttribute("id"))

})

/* prettier-ignore */
</script>

<style lang="scss" scoped></style>
