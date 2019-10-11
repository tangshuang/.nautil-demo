const config = require('nautil-cli/configs/native')
const merge = require('webpack-merge')

module.exports = merge(config, {
  resolve: {
    alias: {
      'i18next-browser-languagedetector': 'i18next-react-native-language-detector',
    },
  },
})
