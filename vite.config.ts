import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { viteEnvs } from 'vite-envs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteEnvs({
      computedEnv: () => ({
        APP_VERSION: process.env.npm_package_version,
        LUNATIC_VERSION: process.env.npm_package_dependencies__inseefr_lunatic,
      }),
    }),
  ],
})
