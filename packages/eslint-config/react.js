module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "standard",
        "standard-jsx",
        "standard-react",
        "prettier",
        "prettier/prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/standard",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
      ],
      rules: {
        "no-alert": "error",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off",
        semi: ["error", "never"],
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
    {
      files: ["**/*.ts"],
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
    {
      files: ["**/*.jsx"],
      plugins: ["prettier", "react", "react-hooks"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "standard",
        "standard-jsx",
        "standard-react",
        "prettier",
        "prettier/prettier",
        "prettier/react",
        "prettier/standard",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
      ],
      rules: {
        "no-alert": "error",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        semi: ["error", "never"],
      },
      settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
      },
    },
    {
      files: ["**/*.js"],
      settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": 0,
    semi: ["error", "never"],
  },
  globals: {
    JSX: true,
  },
}
