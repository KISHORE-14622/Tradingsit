import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Changed from '/Tradingsit/'
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0 // Ensure assets are not inlined
  }
})
