const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HardSourceWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env =
  process.argv[2] === "--mode=production" ? "production" : "development";

console.log(process.argv);
module.exports = {
  mode: env,
  stats: "errors-only",
  performance: {
    hints: false
  },
  entry: glob
    .sync("./client_packages/LSOnline/Browsers/src/pages/*/main.js")
    .reduce(
      (x, y) =>
        Object.assign(x, {
          [y.split("/")[6]]: y
        }),
      {}
    ),
  output: {
    path: path.resolve("./client_packages/LSOnline/Browsers/dist/"),
    filename: "[name]/bundle.js",
    publicPath: "../"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static/"
            }
          }
        ]
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          env !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: false
    }),
    new HardSourceWebpackPlugin({
      cacheDirectory: "./node_modules/.cache/hard-source/[confighash]",
      configHash: function(webpackConfig) {
        return require("node-object-hash")({ sort: false }).hash(webpackConfig);
      },
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ["package-lock.json", "yarn.lock"]
      },
      info: {
        mode: "none",
        level: "debug"
      },
      cachePrune: {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        sizeThreshold: 50 * 1024 * 1024
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.DefinePlugin({
      mp: {
        trigger: () => {}
      }
    }),
    new FileManagerPlugin({
      onStart: {
        delete: ["./client_packages/LSOnline/Browsers/dist/"]
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name]/style.css",
      chunkFilename: "[id].css"
    })
  ]
};
if (env == "development") {
  module.exports.devServer = {
    contentBase: "./client_packages/LSOnline/Browsers",
    stats: { chunks: false },
    hot: true,
    open: true,
    publicPath: "/dist/",
    index: ""
  };
  module.exports.devtool = "cheap-eval-source-map";
}
if (env == "production") {
  module.exports.stats = true;
  module.exports.plugins.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new FileManagerPlugin({
      onEnd: {
        delete: [
          "./client_packages/LSOnline/Browsers/src/*",
          "./client_packages/LSOnline/Browsers/src/",
          "./client_packages/LSOnline/Browsers/dist/index.html"
        ]
      }
    })
  );
}

glob
  .sync("./client_packages/LSOnline/Browsers/src/pages/*/*.js")
  .forEach(element => {
    const name = element.split("/")[6];
    module.exports.plugins.push(
      new HtmlWebpackPlugin({
        title: name,
        filename: `${name}/index.html`,
        alwaysWriteToDisk: true,
        chunks: ["vendor", "commons", name],
        template: "./client_packages/LSOnline/Browsers/src/pages/template.html",
        meta: {
          viewport: "width=device-width, initial-scale=1"
        }
      })
    );
  });
