const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "motion-dom": path.resolve(__dirname, "node_modules/motion-dom"),
    },
    configure: (webpackConfig) => {
      // Ensure motion-dom and ESM modules are resolved correctly
      webpackConfig.resolve.extensionAlias = {
        ".js": [".js", ".ts", ".tsx"],
        ".mjs": [".mjs", ".js"],
      };
      
      // Add .mjs to resolve extensions
      if (!webpackConfig.resolve.extensions) {
        webpackConfig.resolve.extensions = [];
      }
      if (!webpackConfig.resolve.extensions.includes(".mjs")) {
        webpackConfig.resolve.extensions.push(".mjs");
      }
      
      return webpackConfig;
    },
  },
};

