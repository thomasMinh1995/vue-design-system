<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { TextProps } from './text.props'
import {
  textSizeClasses,
  textColorClasses,
  textDecorationClasses,
} from './text.variants'

const props = withDefaults(defineProps<TextProps>(), {
  as: 'p',
  size: 'base',
  color: 'success',
  decoration: 'none',
})

const attrs = useAttrs()

const classes = computed(() => [
  textSizeClasses[props.size],
  textColorClasses[props.color],
  textDecorationClasses[props.decoration],
])
</script>

<template>
  <component :is="as" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>