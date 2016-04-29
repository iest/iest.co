exports.modifyWebpackConfig = function(config) {
  config.loader('svg', cfg => {
    Object.assign(cfg, {
      test: /\.svg$/,
      loader: 'raw-loader!svgo-loader',
    });
    return cfg;
  });
  return config;
};
