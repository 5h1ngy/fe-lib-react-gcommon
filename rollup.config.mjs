/**
 * @file Rollup configuration file for bundling the project.
 * @see {@link https://rollupjs.org/guide/en/} for official Rollup documentation.
 */

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  // Entry points for the bundling process.
  input: {
    index: 'src/index.js',
    dragging: 'src/dragging.js',
    utils: 'src/utils.js',
  },

  // Output configurations for the bundled files.
  output: [
    {
      dir: 'lib',
      format: 'cjs',
    },
    {
      dir: 'lib',
      format: 'esm',
    },
  ],

  // Plugins used for the bundling process.
  plugins: [
    // Resolve dependencies from node_modules.
    resolve(),

    // Convert CommonJS modules to ES6, so they can be included in the bundle.
    commonjs(),

    // Transpile JavaScript using Babel.
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',

      // Use @babel/preset-env for environment-based transpilation.
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
      ],

      // Use @babel/plugin-transform-runtime for efficient runtime support.
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};

export default config;
