const path = require('path');
const webpack = require('webpack');
const makeVarMap = require('webpack-postcss-tools').makeVarMap;
const variables = makeVarMap('src/components/index.css').vars;

module.exports = {
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules', 'src'],
  },
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './entry',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jade$/,
        loader: 'jade',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/node_modules/],
        query: {
          presets: ['react', 'es2015', 'stage-1'],
          env: {
            development: {
              presets: ['react-hmre'],
            },
          },
        },
      }, {
        test: /\.(jpe?g|png|gif)$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
        ],
      }, {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file?name=[sha512:hash:base64:7].[ext]',
      }, {
        test: /\.svg$/,
        loader: 'raw!svgo-loader?useConfig=svgoConfig',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader',
      },
    ],
  },
  svgoConfig: {
    plugins: [{
      removeAttrs: {
        attrs: '(width|height)',
      },
    }, {
      mergePaths: false,
    }, {
      cleanupIDs: false,
    }],
  },
  postcss() {
    return [
      require('autoprefixer')({
        remove: false,
        browsers: ['IE 9', 'last 2 versions', '> 5%'],
      }),
      require('postcss-custom-properties')({variables}),
      require('postcss-custom-media')(),
      require('postcss-calc'),
      require('postcss-color-function')(),
      require('lost'),
    ];
  },
};
