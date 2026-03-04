import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trial/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // This line below fixes the "figma:asset" error
      'figma:asset': path.resolve(__dirname, './src/assets'), 
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
