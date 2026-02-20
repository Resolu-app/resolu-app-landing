import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path para GitHub Pages
// - Para domínio customizado (ex: resolu.app): use '/'
// - Para GitHub Pages padrão (ex: username.github.io/repo): use '/repo-name/'
// - Para desenvolvimento local: use '/'
const base = process.env.GITHUB_PAGES === 'true' ? '/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
