module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', { moduleName: '@env', path: '.env' }],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@core': './src/core',
          '@core-components': './src/core/components',
          '@core-hooks': './src/core/hooks',
          '@core-styles': './src/core/styles',
          '@core-utils': './src/core/utils',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@api': './src/api',
        },
      },
    ],
  ],
};
