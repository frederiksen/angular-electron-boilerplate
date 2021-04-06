import * as path from 'path';

// Add your plugins here
let plugins: any = [];

// Only require() this when we actually want to run Electron in dev mode
// with hot-reloading.
if (process.env.WEBPACK_DEV_SERVER_URL) {
  const ElectronReloadPlugin = require("webpack-electron-reload")({
    path: ".", // The directory where to watch for file changes
  });
  plugins.push(ElectronReloadPlugin());
}

module.exports = (env: string) => {
  if (!env) { env = 'development'; }
  return {
    entry: {
      main: './src/main/main.ts'
    },
    target: 'electron-main',
    output: {
      path: path.resolve(__dirname, '../../dist/main'),
      filename: 'electron-main.js'
    },
    externals: [ ],
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
      alias: {
        // TODO
      }
    },
    node: {
      __dirname: true,
      __filename: true
    },
    plugins: plugins
  };
};
