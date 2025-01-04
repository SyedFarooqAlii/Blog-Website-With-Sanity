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
  {
    rules: {
      "next/next/no-img-element": "off",  // <img> tag ka warning ignore karein
      "@typescript-eslint/no-explicit-any": "off",  // any type ka error ignore karein
      "react/no-unescaped-entities": "off",  // Unescaped entities ka warning ignore karein
    },
  },
];

export default eslintConfig;
