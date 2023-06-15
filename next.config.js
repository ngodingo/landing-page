/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.js", "page.jsx"],

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.icon\.svg$/;
    config.module.rules.push({
      test: /\.icon\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
}

module.exports = nextConfig
