const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react", // or vue
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000'
  }
});
