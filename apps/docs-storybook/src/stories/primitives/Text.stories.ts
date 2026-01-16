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
        <p class="text-base">Base text</p>
        <p class="text-sm">Small text</p>
        <p class="text-lg">Large text</p>

        <h1 class="text-h1">Heading 1</h1>
        <h2 class="text-h2">Heading 2</h2>
        <h3 class="text-h3">Heading 3</h3>


        <Text size="base">Base text</Text>

        <Text size="sm" decoration="underline">
          Underlined small text
        </Text>

        <Text size="lg" decoration="lineThrough" color="muted">
          Disabled text
        </Text>

        <Text as="h1" size="h1">
          Heading 1
        </Text>

        <button class="bg-primary-background hover:bg-primary-backgroundHover">
          Primary
        </button>

        <Text>Default text</Text>

        <Text color="success">
          Success message
        </Text>

        <Text color="warning">
          Warning message
        </Text>

        <Text color="error">
          Error message
        </Text>

        <Text size="h1" color="primary">
          Heading Primary
        </Text>

        <Text decoration="underline" color="success">
          Underlined success text
        </Text>

        <p class="text-text-primary">Primary text</p>
        <p class="text-text-success">Success text</p>
        <p class="text-text-warning">Warning text</p>
        <p class="text-text-error">Error text</p>

        <div class="bg-bg-container">
          Card content
        </div>

        <div class="bg-bg-success text-text-success">
          Success banner
        </div>

        <div class="border border-border-default">
          Box
        </div>
      </div>
    `,
  }),
}

// export const Truncate: Story = {
//   render: () => ({
//     components: { Text },
//     template: `
//       <div class="w-40">
//         <Text truncate>
//           This is a very long text that will truncate
//         </Text>
//       </div>
//     `,
//   }),
// }
