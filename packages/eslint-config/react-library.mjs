import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "no-console": "warn"
    }
  },
  {
    ignores: ["dist/**", "build/**", "node_modules/**", "storybook-static/**"]
  }
]
