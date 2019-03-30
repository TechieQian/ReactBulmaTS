"use strict";

module.exports = {
  entry: "./Main.ts",
  mode: "production",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
