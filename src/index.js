/* Script to generate types from json */
const { fetchSwaggerJsonFile, convertToTypes } = require('openapi-codegen-typescript');
const jsonUrl = "https://raw.githubusercontent.com/audiBookning/lichess-openapi/main/openapi-3.1.0.json"
const typesFileName = "openapi-3.1.0"
async function createTypes() {
  const json = await fetchSwaggerJsonFile(jsonUrl);
  convertToTypes({ json, fileName: 'dtoAPI', folderPath: `types/${typesFileName}` });
}

createTypes()
