/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, "styles")],
    prependData: `@import "styles/mixins.scss";`,
  },
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@components/*": "components/*",
    },
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;
