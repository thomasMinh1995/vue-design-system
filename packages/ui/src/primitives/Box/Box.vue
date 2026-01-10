<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { BoxProps } from './box.props'

const props = defineProps<BoxProps>()
const attrs = useAttrs()

const tag = computed(() => props.as ?? 'div')
</script>

<template>
  <component :is="tag" v-bind="attrs">
    <slot />
  </component>
</template>
