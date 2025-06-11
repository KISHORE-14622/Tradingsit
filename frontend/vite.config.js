import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tradingsit/', // Must match exactly
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
