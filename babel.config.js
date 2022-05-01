module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@routes': './src/routes',
          '@stacks': './src/stacks',
          '@library': './src/library',
          '@store': './src/store',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
