// https://gist.github.com/MoOx/1eb30eac43b2114de73a
const cleanups = {
  title: /<title>.*<\/title>/gi,
  desc: /<desc>.*<\/desc>/gi,
  comment: /<!--.*-->/gi,
  defs: /<defs>.*<\/defs>/gi,
  width: / +width="\d+(\.\d+)?(px)?"/gi,
  height: / +height="\d+(\.\d+)?(px)?"/gi,
  fill: / +fill=\"(none|#[0-9a-f]+)\"/gi,
  stroke: / +stroke=\"(none|#[0-9a-f]+)\"/gi,
  sketchMSShapeGroup: / +sketch:type=\"MSShapeGroup\"/gi,
  sketchMSPage: / +sketch:type=\"MSPage\"/gi,
  sketchMSLayerGroup: / +sketch:type=\"MSLayerGroup\"/gi,
};

function cleanupSvg (svg) {
  return Object.keys(cleanups)
    .reduce((acc, key) => {
      return acc.replace(cleanups[key], '');
    }, svg)
    .trim();
}

export default {
  about: cleanupSvg(require('./about.svg')),
  blog: cleanupSvg(require('./blog.svg')),
  logo: cleanupSvg(require('./logo.svg')),
  projects: cleanupSvg(require('./projects.svg')),
  tool: cleanupSvg(require('./tool.svg')),
  eye: cleanupSvg(require('./eye.svg')),
  cap: cleanupSvg(require('./cap.svg')),
  experiment: cleanupSvg(require('./experiment.svg')),
  dribbble: cleanupSvg(require('./dribbble.svg')),
  instagram: cleanupSvg(require('./instagram.svg')),
  twitter: cleanupSvg(require('./twitter.svg')),
  github: cleanupSvg(require('./github.svg')),
};
