<template>
  <span v-bind="attrs" class="o-counter" :style="styleObj" :class="classBadge">
    <!-- @slot slot onde entra um número -->
    <slot></slot>
  </span>
</template>

<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
  bg: {
    type: String,
    default: '17, 210, 118',
  },
  color: {
    type: String,
    default: '0,0,0',
  },
 
  absolute:{
    type:String,
    default: ''
  }
})

console.log('ab', props.absolute);


const classBadge =  computed(() => ({
  'absolute ':props.absolute,
  [`absolute-${props.absolute}`]:props.absolute
}))

const styleObj = {
  background: `rgba(${props.bg}, 1)`,
  color: `rgba(${props.color}, 1)`,
}

const attrs = useAttrs()
</script>

<style lang="sass" scoped>
.o-counter
  display: grid
  place-items: center
  text-align: center
  width: 1rem
  height: 1rem
  border-radius: 50%
  line-height: 1
  border: border 1px solid rgba(var(--neutral-100), 0.3)
  font-size: 10px
  font-weight: 600
  user-select: none
.absolute-right
  right: -4px
  top:-4px
.absolute-left
  left: -4px
  top: -4px
</style>
