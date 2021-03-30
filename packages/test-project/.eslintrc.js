const config = require.resolve("../eslint-config")
const reactConfig = require.resolve("../eslint-config/react")

module.exports = {
  extends: [config, reactConfig],
}
