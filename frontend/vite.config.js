import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tradingsit/', // Keep this consistent
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
  }
})