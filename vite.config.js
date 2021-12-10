import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],

  build: {
    target: 'es6',

    lib: {
      entry: 'src/main.jsx',
      formats: ['iife'],
      name: 'Template',
      fileName: () => 'template.js',
    },

    outDir: '.',
  }
})
