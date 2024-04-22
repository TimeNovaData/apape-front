<template>
  <AvatarSingle
    v-for="(n, index) in visivelList"
    :key="index"
    :href="n.foto"
    :side="side"
    :index="index"
    :nome="n.nome"
    v-bind="avatarAttrs">
  </AvatarSingle>
  <div
    v-if="invisivelList.length"
    class="have-more text-paragraph-4 leading-none"
    :style="`${side}: ${(visivelList.length + 1) * 15}px;  'z-index':-${
      visivelList.length
    }`">
    +{{ invisivelList.length }}
    <q-tooltip
      ref="refTooltip"
      persistent
      v-bind="{
        anchor: 'top middle',
        self: 'bottom middle',
        offset: [10, 10],
      }">
      <ul class="flex flex-col gap-4">
        <li v-for="(i, index) in invisivelList" :key="index">
          <OAvatar :nome="i.nome" :foto="i.foto" />
        </li>
      </ul>
    </q-tooltip>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AvatarSingle from './AvatarSingle.vue'
import OAvatar from './OAvatar.vue'
const refTooltip = ref(null)

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  limit: {
    type: Number,
    default: 3,
  },

  side: {
    type: String,
    default: 'left',
  },
  avatarAttrs: {
    type: Object,
    default: () => ({}),
  },
})

const visivelList = computed(() => props.list.slice(0, props.limit))

const invisivelList = computed(() =>
  props.list.slice(props.limit, props.list.length + 1)
)
</script>

<style lang="sass" scoped>
.have-more
  width: 2rem
  height: 2rem
  border-radius: 100%
  display: grid
  place-items: center
  overflow: hidden
  text-align: center
  position: absolute
  background: rgba(var(--neutral-30), 1)
  border: 2px solid white
  .body--dark &
    border-color: rgba(var(--d-neutral-10), 1)
    background: rgba(var(--d-neutral-30), 1)
</style>
