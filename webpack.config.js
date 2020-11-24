const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  mode: 'production', // helps make output files readable for devs
  entry: {
    index: './src/index.js',
    register: './src/register.js',
    home: './src/home.js',
    activity: './src/activity.js',
    priority: './src/priority.js',
    food: './src/food.js',
    date_select: './src/date_select.js',
    results: './src/results.js',
    404: './src/404.js',
  },
  devtool: 'source-map',
  //devtool: 'inline-source-map', // makes it easier to track down errors and warnings
  devServer: {
    contentBase: './src/public',
    watchContentBase: true,
  },
  plugins: [
    new PrettierPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), // we don't want to remove the index.html file after the incremental build triggered by watch
    new HtmlWebpackPlugin({
      filename: '404.html',
      chunks: ['404'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/404.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'results.html',
      chunks: ['results'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/results.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'date_select.html',
      chunks: ['date_select'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/date_select.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'food.html',
      chunks: ['food'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/food.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'priority.html',
      chunks: ['priority'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/priority.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'activity.html',
      chunks: ['activity'],
      favicon: './src/images/bean_icon.png',
      template: './src/public/activity.html',
    }),
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
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
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
                  require('precss'),
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