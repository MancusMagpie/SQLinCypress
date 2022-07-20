const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  projectId: 'd5zibb',
  env: {
    db: {
      host: '',
      user: 'robACypSql',
      password: 'password',
      database: 'RobSQL',
    },
  },
});
