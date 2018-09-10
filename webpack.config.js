const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackConfig = {
    title: 'azusa',
    template: "./src/index.html",
    inject: true,
    showErrors: true
};

module.exports = {
    mode: 'development',

    entry: [
        "@babel/polyfill",
        "./src/example.ts"
    ],

    output: {
        filename: "example.[hash:8].js",
        path: __dirname + "/example",
    },

    devtool: "source-map",

    plugins: [
        new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
        new HtmlWebpackPlugin(HtmlWebpackConfig),
    ],

    resolve: {
        extensions: [".ts", ".js"]
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
                          name: 'media/[name].[hash:8].[ext]',
                        },
                    },
                ]
            },

        ]
    },

    externals: {
        three: 'THREE'
    },

    devServer: {
		port: process.env.PORT || 8888,
		contentBase: "/",
		historyApiFallback: true,
		open: true
	}
}
