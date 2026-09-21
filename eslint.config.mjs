import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

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
    // Vendored Area 7 design-system kit (not app TypeScript)
    "public/area7-ds/**",
    // Unused template; pre-existing unescaped-entity errors
    "docs/design_page_template.tsx",
  ]),
]);

export default eslintConfig;
