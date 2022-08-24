const { resolve } = require('path');
const CssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let isProd = process.env.NODE_ENV.includes('production');

const webpackConfig = {
  target: ['web'],
  mode: !isProd ? 'development' : 'production',
  devtool: !isProd ? 'eval-cheap-source-map' : false,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    path: resolve(__dirname, !isProd ? './public' : './build'),
    filename: `js/[name].[contenthash].js`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          !isProd ? 'style-loader' : CssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
    new CssExtractPlugin({
      filename: 'css/style.[contenthash].css',
    }),
  ].filter(Boolean),
  devServer: {
    host: 'localhost',
    port: 3000,
    compress: true,
    hot: true,
    liveReload: true,
    client: {
      overlay: true,
    },
  },
};

module.exports = webpackConfig;
