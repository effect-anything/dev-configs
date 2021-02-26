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
        "plugin:@typescript-eslint/eslint-recommended",
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
        "no-useless-constructor": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "all" }],
        camelcase: "off",
      },
      settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
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
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "prettier/prettier": ["error", prettierConfig],
    semi: ["error", "never"],
    "no-unused-vars": ["warn", { vars: "all", args: "all" }],
    "no-useless-constructor": "off",
    camelcase: "off",
  },
  globals: {
    global: true,
  },
}
