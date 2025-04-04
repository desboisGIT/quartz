module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            '@icons': './src/components/icons',
            '@components': './src/components',
            '@screens': './src/screens',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
