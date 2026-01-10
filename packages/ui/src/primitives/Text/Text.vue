<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { TextProps } from './text.props'
import {
  textSizeClasses,
  textWeightClasses,
  textColorClasses,
} from './text.variants'

const props = withDefaults(defineProps<TextProps>(), {
  as: 'p',
  size: 'md',
  weight: 'regular',
  color: 'default',
})

const attrs = useAttrs()

const classes = computed(() => [
  textSizeClasses[props.size],
  textWeightClasses[props.weight],
  textColorClasses[props.color],
])
</script>

<template>
  <component :is="props.as" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>
