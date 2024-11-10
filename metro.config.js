const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add the alias to support "@/src" path
config.resolver.alias = {
    "@/src": "./src",
  };
  
module.exports = withNativeWind(config, { input: "./global.css" });