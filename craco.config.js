const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
    loaderOptions: eslintOptions => {
      return { ...eslintOptions, ignore: true };
    }
  }
};
