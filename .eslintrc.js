module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@routes': './src/routes',
          '@stacks': './src/stacks',
          '@library': './src/library',
          '@assets': './src/assets',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    },
  },
};
