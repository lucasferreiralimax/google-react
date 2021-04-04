module.exports = (on, config) => {
  require('@cypress/react/plugins/react-scripts')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return Object.assign({}, config, {
    integrationFolder: 'cypress/specs',
  })
}
