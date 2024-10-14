import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [react()],
  base: "/infinia-ai/",
  env: {
    API_KEY: 'VITE_API_KEY',
  },
})
