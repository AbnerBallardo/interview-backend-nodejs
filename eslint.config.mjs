import jest from "jest";
import prettier from "prettier";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["dist/*", "coverage/*"],
  },
  {
    files: ["src/**/*.ts", "test/**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      jest: jest,
      prettier: prettier,
    },
    rules: {
      "import/prefer-default-export": "off",
      "class-methods-use-this": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
