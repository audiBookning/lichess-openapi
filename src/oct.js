/* Script to generate types from json */
const { fetchSwaggerJsonFile, convertToTypes } = require('openapi-codegen-typescript');
const jsonUrl = "https://raw.githubusercontent.com/audiBookning/lichess-openapi/main/src/openapi/swagger-3.1.0.json"
const typesFileName = "swagger-3.1.0"
async function createTypes() {
  const json = await fetchSwaggerJsonFile(jsonUrl);
  convertToTypes({ json, fileName: 'dtoAPI', folderPath: `src/types/${typesFileName}` });
}

createTypes()
