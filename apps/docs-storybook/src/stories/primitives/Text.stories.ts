import type { Meta, StoryObj } from '@storybook/vue3'
import { Text } from '@ds/ui'

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Sizes: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="space-y-2">
        <Text size="xs">XS</Text>
        <Text size="sm">SM</Text>
        <Text size="md">MD</Text>
        <Text size="lg">LG</Text>
        <Text size="xl">XL</Text>
      </div>
    `,
  }),
}

export const Truncate: Story = {
  render: () => ({
    components: { Text },
    template: `
      <div class="w-40">
        <Text truncate>
          This is a very long text that will truncate
        </Text>
      </div>
    `,
  }),
}
