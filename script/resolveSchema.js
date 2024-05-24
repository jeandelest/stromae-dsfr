import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'
import RefParser from '@apidevtools/json-schema-ref-parser'

const baseUrl = 'https://stromae-v2-api.demo.insee.io/v3'
const openApiSpecUrl = `${baseUrl}/api-docs`

async function fetchOpenApiSpec(url) {
  try {
    // Dereference the OpenAPI spec
    const openApiSpec = await RefParser.dereference(url)

    // Prepare the output directory (relative path)
    const baseDir = resolve('openapi')
    if (!existsSync(baseDir)) {
      mkdirSync(baseDir, { recursive: true })
    }

    // Write the dereferenced OpenAPI spec to a file
    const mainSpecPath = join(baseDir, 'api-docs.json')
    writeFileSync(mainSpecPath, JSON.stringify(openApiSpec, null, 2))

    console.log('OpenAPI spec has been fetched and written locally.')
  } catch (error) {
    console.error('Error fetching OpenAPI spec:', error)
  }
}

fetchOpenApiSpec(openApiSpecUrl)
