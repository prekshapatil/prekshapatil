const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.html', // Use your HTML file as the entry point
  output: {
    filename: 'bundle.js', // Output JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,  // Test for .html files
        use: ['html-loader'], // Use html-loader for .html files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Use your main HTML file
    }),
  ],
};
