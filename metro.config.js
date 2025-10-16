const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

/**
 * 支持 .less 样式（通过 react-native-less-transformer）
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-less-transformer')
  },
  resolver: {
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'less']
  }
};

module.exports = mergeConfig(defaultConfig, config);


