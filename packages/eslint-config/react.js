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
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "standard",
        "standard-jsx",
        "standard-react",
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
        ...reactRules,
        ...hooksRules,
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
    {
      files: ["**/*.jsx"],
      plugins: ["prettier", "react", "react-hooks"],
      extends: [
        "plugin:react/recommended",
        "standard",
        "standard-jsx",
        "standard-react",
        "prettier",
        "plugin:import/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
      ],
      rules: {
        "no-useless-constructor": "off",
        camelcase: "off",
        "no-unused-vars": ["error", { vars: "all", args: "all" }],
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
