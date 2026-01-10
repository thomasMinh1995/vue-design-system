import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  storyMatch: [
    '**/*.stories.vue',
  ],
  stories: {
    include: ['src/stories/**/*.stories.vue'],
  },
  features: {
    tailwindTokens: false, // 🔥 REQUIRED
  },
})
