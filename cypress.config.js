const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "c5sq5a",
  e2e: {
    baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
