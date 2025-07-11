const { defineConfig } = require("cypress");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const nodePolyfills =
  require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://blankfactor.com",
    chromeWebSecurity: false,
    env: {
      TAGS: "not @ignore",
    },
  },
});