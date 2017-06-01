var webpack = require('webpack');
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var HtmlWebpackConfig = {
  title: 'hexo',
  filename: 'index.html',
  template: "./src/index.html",
  hash: true,
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
  entry: [
    "./src/example.ts"
  ],
  output: {
    filename: "example.js",
    path: __dirname + "/example"
  },

  devtool: "source-map",

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEV__: false
    }),
    new HtmlWebpackPlugin(HtmlWebpackConfig),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new BundleAnalyzerPlugin()
  ],

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              useBabel: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [{
          loader: 'babel-loader'
        }],
      },
      {
        test: /\.(ts|js)$/,
        enforce: "pre",
        use: [{ loader: 'source-map-loader' }]
      }
    ]
  }
}
