const plugin = require('tailwindcss/plugin')

const Container = require('./components/container')
const Row = require('./components/row')
const Col = require('./components/col')

const components = [Container, Row, Col]

module.exports = plugin.withOptions(
  function () {
    return function ({ addComponents }) {
      addComponents(components.map((comp) => comp()))
    }
  },
  function () {
    return {
      theme: {
        extend: {}
      }
    }
  }
)
