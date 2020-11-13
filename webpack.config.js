const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  mode: 'development', // helps make output files readable for devs
  entry: {
    index: './src/index.js',
    register: './src/register.js',
  },
  devtool: 'inline-source-map', // makes it easier to track down errors and warnings
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
  },
  plugins: [
    new PrettierPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            postcssOptions: {
              plugins: function () { // postcss plugins, can be exported to
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};