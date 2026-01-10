<script setup lang="ts">
import { Text } from '@ds/ui'
</script>

<template>
  <Story title="Primitives/Text">
    <Variant title="Body">
      <Text>Body text</Text>
    </Variant>

    <Variant title="Sizes">
      <Text size="xs">Extra small</Text>
      <Text size="sm">Small</Text>
      <Text size="md">Medium</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra large</Text>
    </Variant>

    <Variant title="Weights">
      <Text weight="regular">Regular</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="bold">Bold</Text>
    </Variant>

    <Variant title="Semantic">
      <Text as="label" size="sm">Label text</Text>
      <Text as="h2" size="xl" weight="bold">Heading</Text>
    </Variant>
  </Story>
</template>
