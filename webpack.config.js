const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { resolve } = require('path');
const publicPath = process.env.BASE_PATH || '';

module.exports = {
  entry: './app/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'img/[name].[hash:7].[ext]',
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'media/[name].[hash:7].[ext]',
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'fonts/[name].[hash:7].[ext]',
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    // 1:
    alias: {
      'jquery': resolve(__dirname, 'node_modules/jquery/dist/jquery.js'),
    },
  },
  plugins: [
    new BaseHrefWebpackPlugin({
      baseHref: publicPath,
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      favicon: './app/favicon.ico'
    }),
    // 2:
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(__dirname, 'app'),
    watchContentBase: true
  },
  node: {
    console: false,
    global: true,
    process: true,
  }
};
