import { defineConfig } from 'orval'

export default defineConfig({
  openapi: {
    input: './openapi.json',
    output: {
      mode: 'tags',
      target: 'src/api/query.ts',
      schemas: 'src/model/api',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/api/axiosInstance.ts',
          name: 'stromaeInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'yarn format',
    },
  },
})
