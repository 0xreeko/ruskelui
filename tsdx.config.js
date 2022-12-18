
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        treeShake: true,
        inject: {
          insertAt: 'top',
        },
      })
    );
    return config;
  },
};