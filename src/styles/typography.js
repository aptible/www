import Typography from 'typography';

const HELVETICA_FONT_FAMILY = [
  'NeueMontreal',
  'Helvetica Neue',
  'Helvetica',
  'Arial',
  'sans-serif',
];

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 6.5,
  headerFontFamily: HELVETICA_FONT_FAMILY,
  headerColor: '#fffffe',
  headerWeight: 500,
  bodyFontFamily: HELVETICA_FONT_FAMILY,
  bodyColor: '#b5bbbf',
  bodyWeight: 400,
  includeNormalize: false,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1,h2,h3,h4,h5,h6': {
      letterSpacing: '1px',
      lineHeight: '1',
    },
    p: {
      letterSpacing: '0.03em',
      lineHeight: '1.5'
    }
  })
});

export default typography;
