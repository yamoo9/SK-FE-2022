const { resolve } = require('path');

let isProd = process.env.NODE_ENV.includes('production');

const webpackConfig = {
  target: ['web'],
  mode: !isProd ? 'development' : 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: resolve(__dirname, !isProd ? './public' : './build'),
    filename: `js/[name].${!isProd ? 'bundle' : 'min'}.js`,
  },
};

module.exports = webpackConfig;
