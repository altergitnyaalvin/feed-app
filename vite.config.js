import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '') // buat setup .env bisa kebaca vite
  return {
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['./tests/setup.js'],
      testMatch: ['./tests/**/*.test.jsx'],
      globals: true
    },
    define: {
      'process.env.URL_APP': JSON.stringify(env.URL_APP),
      'process.env.URL_POKE': JSON.stringify(env.URL_POKE),
      'process.env.OPEN_AI_KEY': JSON.stringify(env.OPEN_AI_KEY)

      // case jika tidak ada boolean value di env
      // 'process.env': JSON.stringify(env)
    }
  }
})
