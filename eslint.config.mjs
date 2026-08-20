import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const jonchalantPlugin = require("./eslint-plugin-jonchalant/index.js");

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local ESLint plugin — CJS tooling, not part of the app bundle
    "eslint-plugin-jonchalant/**",
  ]),
  {
    plugins: {
      jonchalant: jonchalantPlugin,
    },
    rules: {
      "jonchalant/headline-needs-render": "error",
    },
  },
]);

export default eslintConfig;
