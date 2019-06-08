const fs = require('fs');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: 'production',

  entry: {
    "azusa": "./src/azusa.ts",
    "azusa.min": "./src/azusa.ts",
    "azusa.es": "./src/azusa.ts"
  },

  output: {
    filename: "[name].js",
    path: __dirname + "/lib",
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

    externals: {
        three: 'THREE'
    },

  devtool: "source-map",

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: true
    }),
    new DeclarationBundlerPlugin({
      moduleName: 'azusa',
      out: 'azusa.d.ts',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: resolveApp('src'),
      tsconfig: resolveApp('tsconfig.json'),
    }),
  ],

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
      strictExportPresence: true,
      rules: [
          {
            test: /\.(ts|js)$/,
            enforce: "pre",
            use: [{ loader: 'source-map-loader' }]
          },
          {
              oneOf: [
                  {
                      test: /\.ts$/,
                      use: [
                          {
                              loader: 'babel-loader',
                              options: {
                                compact: true,
                            },
                          },
                          {
                              loader: "ts-loader",
                              options: {
                                  // disable type checker - we will use it in fork plugin
                                  transpileOnly: true,
                              },
                          }
                      ]
                  },
                  {
                      test: /\.js$/,
                      exclude: path.resolve(__dirname, "node_modules"),
                      use: [{
                          loader: 'babel-loader',
                          options: {
                            compact: true,
                        },
                      }],
                  }
              ]
          },

      ]
  }
}
