import dsPreset from '@ds/ui/tailwind.preset'

export default {
  presets: [dsPreset],

  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',

    // scan UI package
    '../../packages/ui/src/**/*.{vue,js,ts}',
  ],
}
