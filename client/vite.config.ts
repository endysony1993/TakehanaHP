import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Make base path configurable: default to root '/' for local dev.
// Set VITE_BASE_PATH='/TakehanaHP/' only when deploying under a subpath (e.g., GitHub Pages).
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
