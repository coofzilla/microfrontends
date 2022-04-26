const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      //name added f/clarity only needed f/remotes
      name: 'container',
      //lists projects that container can search to get additional code
      remotes: {
        //load file at URL if anything in container(bootstrap) requires import
        //key matches import statement
        //'products' matches config name f/products webpack file
        products: 'products@http://localhost:8081/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
