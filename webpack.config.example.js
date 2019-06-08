const fs = require('fs');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const HtmlWebpackConfig = {
  title: 'hexo',
  filename: 'index.html',
  template: "./src/index.html",
  inject: true,
  showErrors: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  },
};

module.exports = {
  mode: 'production',

  entry: [
    "./src/example.ts"
  ],

  output: {
    filename: "example.[hash:8].js",
    path: __dirname + "/example"
  },


    externals: {
        three: 'THREE'
    },

  devtool: "source-map",

  plugins: [
    new HtmlWebpackPlugin(HtmlWebpackConfig),
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
                  },
                  {
                      // Exclude `js` files to keep "css" loader working as it injects
                      // its runtime that would otherwise processed through "file" loader.
                      // Also exclude `html` and `json` extensions so they get processed
                      // by webpacks internal loaders.
                      exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                      loader: require.resolve('file-loader'),
                      options: {
                        name: 'media/[name].[ext]',
                      },
                  },
              ]
          },

      ]
  },
  optimization: {
    minimize: true
  },
  devServer: {
		port: process.env.PORT || 8888,
		contentBase: "/",
		historyApiFallback: true,
		open: true
	}
}
