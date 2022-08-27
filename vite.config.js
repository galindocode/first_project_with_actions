import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://galindocode.github.io/first_project_with_actions/',
  plugins: [react()]
})
