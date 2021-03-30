const prettierConfig = require("@effect-x/prettier-config")

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        require.resolve("@babel/plugin-syntax-jsx"),
        require.resolve("@babel/plugin-proposal-class-properties"),
      ],
    },
  },
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "standard",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
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
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
      ],
      rules: {
        "no-unused-vars": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "all" }],
        camelcase: "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
      },
      settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
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
    "no-useless-constructor": "off",
    "no-unused-vars": ["error", { vars: "all", args: "all" }],
    "import/namespace": ["error", { allowComputed: true }],
    camelcase: "off",
  },
  globals: {
    global: true,
  },
}
