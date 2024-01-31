const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080, 
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
  scrollBehavior: "nearest"
});