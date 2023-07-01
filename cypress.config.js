const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://e.rawlplug.com/pl-pl',
    setupNodeEvents(on, config) {
      
    },
  },
  
  viewportWidth: 1920,
  viewportHeight: 1080,
});
