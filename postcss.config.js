const postcssPresetEnv = require(`postcss-preset-env`);

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 1,
      preserve: false,
      importFrom: './src/styles/variables.js',
    }),
  ],
});
