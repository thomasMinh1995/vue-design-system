import preset from '@ds/tailwind-config/tailwind.preset'

export default {
  presets: [preset],
  content: [
    './src/**/*.{vue,ts,js}',
    '../../packages/ui/src/**/*.{vue,ts}',
  ],
}