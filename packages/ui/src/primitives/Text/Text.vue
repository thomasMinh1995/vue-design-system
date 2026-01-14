<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { TextProps } from './text.props'
import {
  textSizeClasses,
  textDecorationClasses,
} from './text.variants'

const props = withDefaults(defineProps<TextProps>(), {
  as: 'p',
  size: 'base',
  decoration: 'none',
  color: 'default',
})

const attrs = useAttrs()

const classes = computed(() => [
  textSizeClasses[props.size],
  textDecorationClasses[props.decoration],
])
</script>

<template>
  <component :is="as" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>
