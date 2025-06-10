import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tradingsit/', // Must match your repo name exactly
  build: {
    outDir: 'dist', // Ensure this matches gh-pages deploy directory
  }
})