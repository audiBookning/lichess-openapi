const { generateApi } = require('swagger-typescript-api');
const path = require("path");
const fs = require("fs");

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  name: "lichess-3.1.0.ts",
  output: path.resolve(process.cwd(), "./src/sta-types"),
  //url: 'http://api.com/swagger.json',
  input: path.resolve(process.cwd(), './src/schemas/swagger-3.1.0.json'),
  /* spec: {
    swagger: "2.0",
    info: {
      version: "2.0.0",
      title: "Lichess.org API",
    },
    // ...
  }, */
  //templates: path.resolve(process.cwd(), './api-templates'),
  //httpClientType: "axios", // or "fetch"
  defaultResponseAsSuccess: false,
  generateRouteTypes: false,
  generateResponses: true,
  //toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  prettier: {
    printWidth: 100,
    trailingComma: "es5",
    singleQuote: true,
    semi: true,
    arrowParens: "avoid",
    tabWidth: 2,
    parser: "typescript",
  },
  defaultResponseType: "void",
  singleHttpClient: true,
  cleanOutput: false,
  enumNamesAsValues: false,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  //extraTemplates: [],
  /* hooks: {
    onCreateComponent: (component) => {},
    onCreateRequestParams: (rawType) => {},
    onCreateRoute: (routeData) => {},
    onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
    onFormatRouteName: (routeInfo, templateRouteName) => {},
    onFormatTypeName: (typeName, rawTypeName) => {},
    onInit: (configuration) => {},
    onParseSchema: (originalSchema, parsedSchema) => {},
    onPrepareConfig: (currentConfiguration) => {},
  } */
})
  /* .then(({ files, configuration }) => {
      console.log('files: ', files)
    files.forEach(({ content, name }) => {
      fs.writeFile(path, content);
    });
  }) */
  .catch(e => console.error(e))
