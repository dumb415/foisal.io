import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' works for a repo named dumb415.github.io
// if you use a repo named "portfolio" instead, change to base: '/portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
