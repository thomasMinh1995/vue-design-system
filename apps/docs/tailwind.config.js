import preset from '@ds/tailwind-config'

export default {
  presets: [preset],

  content: [
    './index.html',
    './src/**/*.{vue,ts,js}',
    '../../packages/ui/src/**/*.{vue,ts}', // 🔥 REQUIRED
  ],
}
