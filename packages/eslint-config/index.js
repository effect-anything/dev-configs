const prettierConfig = require("@effect-x/prettier-config")

module.exports = {
  env: {
    es6: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      plugins: [require.resolve("@babel/plugin-syntax-jsx")],
    },
  },
  plugins: ["prettier"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "prettier"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "standard",
        "prettier",
        "prettier/prettier",
        "prettier/@typescript-eslint",
        "prettier/standard",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
      ],
      rules: {
        "no-unused-vars": "off",
        semi: ["error", "never"],
      },
      settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
          "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": {
          typescript: {},
        },
      },
    },
  ],
  extends: [
    "standard",
    "prettier",
    "prettier/prettier",
    "prettier/standard",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  settings: {
    "import/extensions": [".js"],
    "import/resolver": {
      node: {
        extensions: [".js"],
      },
    },
  },
  rules: {
    "prettier/prettier": ["error", prettierConfig],
    "no-unused-vars": ["warn", { vars: "all", args: "all" }],
    semi: ["error", "never"],
  },
  globals: {
    global: true,
  },
}
