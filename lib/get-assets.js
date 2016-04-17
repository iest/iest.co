import path from 'path';

export default function(webpackStats, publicPath) {
  const json = webpackStats.toJson();
  const hash = json.hash;

  // get chunks by name and extensions
  function getChunks(name, ext = /.js$/) {
    let chunks = json.assetsByChunkName[name];

    // a chunk could be a string or an array, so make sure it is an array
    if (!(Array.isArray(chunks))) {
      chunks = [chunks];
    }

    return chunks
      .filter((chunk) => ext.test(path.extname(chunk))) // filter by extension
      .map((chunk) => `${publicPath}${chunk}`); // add public path to it
  }

  const script = getChunks('main', /js/);
  const style = getChunks('main', /css/);

  // Find compiled images in modules
  // it will be used to map original filename to the compiled one
  // for server side rendering
  const imagesRegex = /\.(jpe?g|png|gif)$/;
  const images = json.modules
    .filter((module) => imagesRegex.test(module.name))
    .map((image) => {
      return {
        original: image.name,
        compiled: `${publicPath}${image.assets[0]}`,
      };
    });

  return {
    script,
    style,
    images,
  };
}
