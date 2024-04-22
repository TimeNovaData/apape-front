<template>
  <q-card class="p-16 m-16">
    <div class="mt-32 gap-32 justify-evelyn grid grid-cols-2">
      <div v-for="(tipo, i) in textos" :key="i" class="flex flex-col gap-8">
        <span class="font-dm-sans capitalize text-title-3">
          ⠂{{ tipo.nome }}</span
        >
        <hr class="text-neutral-30" />
        <!--   <pre>  {{ entriesTipo(tipo) }}</pre> -->

        <div
          v-for="(tipoTexto, index) in entriesTipo(tipo)"
          :key="index"
          class="flex items-end gap-8">
          <h6 :class="tipoTexto.replace('.', '')" class="capitalize-first">
            {{
              tipoTexto
                .replaceAll('-', ' ')
                .replace('.', '')
                .replace('text', '')
            }}
          </h6>

          <token-clipboard>{{ tipoTexto.replace('.', '') }}</token-clipboard>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import TokenClipboard from 'components/DesignSystem/TokenClipboard.vue'

const props = defineProps({
  textos: { type: Array, default: () => [] },
})
const entriesTipo = (tipo) => {
  return Object.entries(tipo)
    .filter((i) => i[0] !== 'nome')
    .map((i) => i[0])
}
</script>

<style lang="scss" scoped></style>
