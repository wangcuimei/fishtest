var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const packagejson = require('./package.json');

var config = {
  entry: {
    "main": './main',
    "util": Object.keys(packagejson.dependencies)
  },
  output: {
    path: path.resolve('./dist'), //相对转绝对
    filename: '[name].js'
  },
  //watch: true, //文件监控改动 自动产出build.js
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: '[name].js'
    }),
    new HtmlWebpackPlugin({
      //chunks主要用于多入口文件  依次加到模板指定位置
      chunks: ['common', 'util', 'main'],
      template: './index.ehtml',
      inject: true //inject:true  body  head  false
    })
  ]
};

module.exports = config;