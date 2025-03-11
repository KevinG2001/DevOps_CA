import pluginSecurity from "eslint-plugin-security";
import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: { security: pluginSecurity },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "security/detect-object-injection": "warn",
      "no-console": "off",
    },
  },
];
