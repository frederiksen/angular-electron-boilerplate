import * as path from 'path';

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
    plugins: [
    ]
  };
};
