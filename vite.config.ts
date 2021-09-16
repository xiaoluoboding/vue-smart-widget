import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (mode !== 'lib') {
    return {
      plugins: [vue()],

      resolve: {
        alias: {
          '@': resolve(__dirname, 'app')
        }
      },

      build: {
        outDir: 'docs'
      },

      server: {
        port: 3099
      }
    }
  } else {
    return {
      plugins: [vue()],

      build: {
        outDir: 'lib',
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: pkg.displayName,
          fileName: pkg.name
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            },
            exports: 'named'
          }
        }
      }
    }
  }
})
