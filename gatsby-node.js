const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSSConfig = '-autoprefixer&modules&localIdentName=[hash:base64:5]!postcss';


function addSVG(config) {
  config.loader('svg', cfg => {
    Object.assign(cfg, {
      test: /\.svg$/,
      loader: 'raw-loader!svgo-loader',
    });
    return cfg;
  });
}

function addCSSModulesDev(config) {
  config.removeLoader('css');
  config.loader('css', cfg => {
    Object.assign(cfg, {
      test: /\.css$/,
      loader: `style!css?${CSSConfig}`,
    });
    return cfg;
  });
  return config;
}

function addCSSModulesProd(config) {
  config.removeLoader('css');
  config.loader('css', cfg => {
    Object.assign(cfg, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(`css?${CSSConfig}`),
    });
    return cfg;
  });
  config.plugin(
    'extract-css',
    ExtractTextPlugin,
    ['styles.css', { allChunks: true }],
  );
  return config;
}

exports.modifyWebpackConfig = function(config, env) {
  addSVG(config);

  config.merge({
    postcss: () => [
      require('postcss-import'),
      require('autoprefixer')(),
      require('postcss-custom-properties')(),
      require('postcss-custom-media')(),
      require('postcss-calc'),
      require('postcss-color-function')(),
    ],
  });

  if (env === 'develop') {
    addCSSModulesDev(config);
  } else {
    addCSSModulesProd(config);
  }

  return config;
};
