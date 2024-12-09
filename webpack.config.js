const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Вхідний файл, звідки починається збірка
  entry: './src/index.js',

  // Вихідна конфігурація (де зберігається зібраний код)
  output: {
    filename: 'bundle.[contenthash].js', // Ім'я файлу з хешем для запобігання кешуванню
    path: path.resolve(__dirname, 'dist'), // Папка для збереження збірки
    clean: true, // Очистити dist перед кожною новою збіркою
  },

  // Налаштування модулів (лоадерів)
  module: {
    rules: [
      {
        test: /\.js$/, // Для файлів JS
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/, // Для файлів SCSS
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Для зображень
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Для шрифтів
        type: 'asset/inline',
      },
    ],
  },

  // Налаштування плагінів
  plugins: [
    new CleanWebpackPlugin(), // Очищає папку dist перед кожною новою збіркою
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML для збірки
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Виводить CSS з хешем для кешування
    }),
  ],

  // Налаштування режиму (розробка або продакшн)
  mode: 'production',

  // Налаштування серверу для розробки
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
};
