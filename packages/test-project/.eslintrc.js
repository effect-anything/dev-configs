const config = require.resolve("../eslint-config")
const reactConfig = require.resolve("../eslint-config/react")

module.exports = {
  extends: [config, reactConfig],
  rules: {
    "react/react-in-jsx-scope": "error",
    "react/jsx-uses-react": "error",
  },
}
