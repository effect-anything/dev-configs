const hooksRules = {
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
}

const reactRules = {
  "react/jsx-props-no-spreading": 0,
  "react/jsx-handler-names": "off",
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "react/jsx-uses-react": "off",
}

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
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
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
        "no-unused-vars": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "all" }],
        camelcase: "off",
        ...reactRules,
        ...hooksRules,
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
      files: ["**/*.jsx"],
      plugins: ["prettier", "react", "react-hooks"],
      extends: [
        "plugin:react/recommended",
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
        ...reactRules,
        ...hooksRules,
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
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    semi: ["error", "never"],
  },
  globals: {
    JSX: true,
  },
}
