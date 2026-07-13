import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Integrate React support with Fast Refresh
  plugins: [react()],
})
