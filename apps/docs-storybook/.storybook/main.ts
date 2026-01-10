import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',

  stories: [
    '../src/**/*.stories.@(ts|tsx|vue)',
  ],

  addons: [
    '@storybook/addon-essentials',
  ],

  viteFinal(config) {
    // 🔴 Remove Storybook's internal Tailwind plugin
    config.plugins = (config.plugins || []).filter(
      (plugin: any) =>
        plugin?.name !== 'storybook:tailwind'
    )

    return config
  },
}

export default config
