import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { viteEnvs } from 'vite-envs'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.VITE_BASE_PATH)
  return {
    base: env.VITE_BASE_PATH ?? '',
    plugins: [
      react(),
      tsconfigPaths(),
      viteEnvs({
        computedEnv: () => ({
          APP_VERSION: process.env.npm_package_version,
          LUNATIC_VERSION:
            process.env.npm_package_dependencies__inseefr_lunatic,
        }),
      }),
    ],
  }
})
