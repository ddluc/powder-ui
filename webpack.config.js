const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components'
  }
};
