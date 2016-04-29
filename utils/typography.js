import Typography from 'typography';

const options = {
  baseFontSize: '16px',
  baseLineHeight: '28.5px',
  headerFontFamily: '"jaf-facitweb", sans-serif',
  bodyFontFamily: 'jaf-facitweb, serif',
  bodyWeight: 400,
  headerWeight: 200,
  boldWeight: 700,
  headerGray: 95,
  bodyGray: 95,
  modularScales: [
    'golden',
  ],
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
