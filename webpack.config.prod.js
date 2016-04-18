const path = require('path');
const webpack = require('webpack');
const makeVarMap = require('webpack-postcss-tools').makeVarMap;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const variables = makeVarMap('src/index.css').vars;

const paths = [
  '/',
  '/projects',
  '/blog',
];

module.exports = {
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json', '.jsx'],
    modulesDirectories: ['node_modules', 'src'],
  },

  entry: {
    'main': './entry.js'
  },

  output: {
    filename: 'bundle.[hash].js',
    path: 'dist',
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/node_modules/],
        query: {
          presets: ['react', 'es2015', 'stage-1'],
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
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader'),
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

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new ExtractTextPlugin('bundle.[hash].css', {
        allChunks: true,
      }),

    new StaticSiteGeneratorPlugin('main', paths),
  ],

};
