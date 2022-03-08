const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      inlineRequires: false,
      experimentalImportSupport: false,
      babelTransformerPath: require.resolve(
        'react-native-svg-transformer',
        'react-native-typescript-transformer',
      ),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
