const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rnLessLoader = path.resolve(__dirname, 'webpack/loaders/rnLessLoader.js');

module.exports = {
  mode: 'development',
  entry: './index.web.js',
  output: {
    path: path.resolve(__dirname, 'web-build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.ts', '.tsx', '.json'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-vector-icons/MaterialCommunityIcons': path.resolve(__dirname, 'src/components/MaterialCommunityIcons.tsx'),
      '@react-native-vector-icons/material-design-icons': path.resolve(__dirname, 'src/components/MaterialCommunityIcons.tsx'),
      '@expo/vector-icons/MaterialCommunityIcons': path.resolve(__dirname, 'src/components/MaterialCommunityIcons.tsx')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { browsers: ['> 1%', 'last 2 versions'] } }],
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              'react-native-reanimated/plugin',
            ],
          },
        },
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'web'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, 'web'),
        use: [
          {
            loader: rnLessLoader,
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './web/index.html',
      inject: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'web-build'),
    },
    compress: true,
    port: 8000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};

