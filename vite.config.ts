import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set this to your repository name
  base: '/trial/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Fixes the Figma-specific asset link error
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    // Ensures files go to the 'dist' folder
    outDir: 'dist',
    // Cleans the folder before each build
    emptyOutDir: true,
    rollupOptions: {
      // Prevents the build from crashing if Figma assets are missing
      external: [/^figma:asset/],
    },
  },
})
