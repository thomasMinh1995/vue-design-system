import preset from '../../tailwind-config/tailwind.preset.js'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,ts}',
    '../../packages/ui/src/**/*.{vue,ts}',
  ],
  presets: [preset],
}
