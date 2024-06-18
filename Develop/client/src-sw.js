const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/index.js",
    install: "./src/js/install.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // Adjust if serving from a subdirectory
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Specify your own HTML template if needed
    }),
    new WebpackPwaManifest({
      name: "SmartTextEdit",
      short_name: "TextEditor",
      description: "My awesome text editor!",
      background_color: "#ffffff",
      icons: [
        {
          src: path.resolve("./src/images/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512], // Multiple icon sizes
        },
      ],
    }),
    new InjectManifest({
      swSrc: "./src-sw.js", // Path to your service worker source file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },  
};
