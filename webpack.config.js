const path = require('path');

module.exports = {
  entry: './ts/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      https:false,
      noInfo: true
    }
};
