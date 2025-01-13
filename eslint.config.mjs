import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

module.exports = {
  ...eslintConfig,
  rules: {
    // Desactivar todas las reglas
    "no-empty-object-type": "off",
    "no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-types": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "off",
  },
};
