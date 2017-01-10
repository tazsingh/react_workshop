const webpack = require('webpack')

const DEV = process.env.NODE_ENV !== 'production'

const plugins = [
  new webpack.DefinePlugin({
    '__DEV__': JSON.stringify(DEV),
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
]

const config = {
  entry: {
    app: ['babel-polyfill', __dirname + '/src/index.js']
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
    alias: {
      src: __dirname + '/src',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // {
      //   test: /\.less$/,
      //   loader: 'less-loader!style-loader!css-loader!file'
      // },
      // {
      //   test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=application/font-woff'
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=application/octet-stream'
      // },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'file'
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: 'url?limit=10000&mimetype=image/svg+xml'
      // },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'file'
      // }
    ]
  },
  plugins: plugins,
}

if (DEV) {
  config.output.publicPath = 'http://localhost:1337/build/'

  config.devServer = {
    colors: true,
    contentBase: './build/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 1337,
    progress: true,
    stats: {
      cached: false
    }
  }

  config.module.preLoaders = [
    {
      test: /\.js?$/,
      loader: 'eslint-loader',
      exclude: /(node_modules|build)/
    }
  ]
}

module.exports = config
