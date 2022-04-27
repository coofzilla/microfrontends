const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      //NOTE do not name to something that matches id in html; creates bug due to global var creation
      //console cart in browser to see object created
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/bootstrap',
      },
      //singleton loading, only use one
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
