const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  mode: 'development', // helps make output files readable for devs
  entry: {
    index: './src/index.js',
    register: './src/register.js',
    home: './src/home.js',
  },
  devtool: 'inline-source-map', // makes it easier to track down errors and warnings
  devServer: {
    contentBase: './src/public',
    watchContentBase: true,
  },
  plugins: [
    new PrettierPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // we don't want to remove the index.html file after the incremental build triggered by watch
    new HtmlWebpackPlugin({
      filename: 'home.html',
      chunks: ['home'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/home.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      chunks: ['register'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/register.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
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