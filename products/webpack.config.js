const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      //matches container value 'products@http://localhost:8081/remoteEntry.js',
      name: 'products',
      //set name of manifest file
      filename: 'remoteEntry.js',
      exposes: {
        //Aliases filenames
        //if import /ProductsIndex serve src/index
        './ProductsIndex': './src/index',
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
