import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.cjs',
      format: 'cjs',
    },
    {
      file: 'lib/index.mjs',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
      ],
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};