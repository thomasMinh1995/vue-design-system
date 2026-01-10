import preset from '@ds/tailwind-config'

export default {
  presets: [preset],
  content: [
    './src/**/*.{vue,ts}',
    '../../packages/ui/src/**/*.{vue,ts}',
  ],
}