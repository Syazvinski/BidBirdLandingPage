import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://bidbird-api-v2.bluesmoke-b1bb8489.eastus.azurecontainerapps.io',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})

