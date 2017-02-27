var path = require('path');
var webpack = require('webpack');
module.exports = {
  //入口
  entry: './app/index.js',
  //出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

//服务器配置
  devtool: "cheap-eval-source-map",
  devServer:{
    contentBase:path.resolve(__dirname,'./dev'),
  },

  //插件
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'commons',
      filename:'common.js',
      minChunks:2,
    }),
  ],
  //资源解析，打包
  module:{
    rules:[
      {
      test:/\.js$/,
      use:[{
        loader:'babel-loader',
        options:{
          presets:['es2015']
        },
      }],
      exclude:/node_modules/
    },
    {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
    },
    {
      test: /\.(sass|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    },
    {
      test:/\.html$/,
      use:['html-loader'],
    },
    {
      test:/\.hbs$/,
      use:['handlebars-loader'],
    },

    {
       test: /\.(png|jpg)$/,
       use: [
         'url-loader',
         'file-loader',
       ]
    }
    ]
  }

}
