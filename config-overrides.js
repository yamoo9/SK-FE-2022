const { resolve } = require('path');

/* eslint-disable react-hooks/rules-of-hooks */
const { override, useBabelRc, addWebpackAlias } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '@/components': resolve(__dirname, 'src/components'),
  })
);
