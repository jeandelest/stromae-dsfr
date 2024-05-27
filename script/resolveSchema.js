import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve, dirname, extname } from 'path'
import RefParser from '@apidevtools/json-schema-ref-parser'

const baseUrl = 'https://stromae-v2-api.demo.insee.io/v3'
const openApiSpecUrl = `${baseUrl}/api-docs`

async function fetchOpenApiSpec(url) {
  try {
    // Resolve the OpenAPI spec
    const $refs = await RefParser.resolve(url)

    // Get all file paths
    const filePaths = $refs.paths()

    // Prepare the output directory (relative path)
    const baseDir = resolve('openapi')
    if (!existsSync(baseDir)) {
      mkdirSync(baseDir, { recursive: true })
    }

    // Save each resolved schema to a file
    filePaths.forEach((filePath) => {
      let relativePath = filePath.replace(baseUrl, '').replace(/^\//, '')

      // Ensure the file has a .json extension
      if (extname(relativePath) !== '.json') {
        relativePath += '.json'
      }

      const outputPath = join(baseDir, relativePath)

      // Ensure the directory exists
      const dir = dirname(outputPath)
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      // Write the JSON content to the file
      const content = $refs.get(filePath)
      if (content) {
        writeFileSync(outputPath, JSON.stringify(content, null, 2))
      }
    })

    console.log('OpenAPI spec has been fetched and written locally.')
  } catch (error) {
    console.error('Error fetching OpenAPI spec:', error)
  }
}

fetchOpenApiSpec(openApiSpecUrl)
