import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json' assert { type: 'json' };

const isDevEnvironment = !!process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/index.ts',
    output: [
      // CJS
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: isDevEnvironment,
      },
      // ES
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: isDevEnvironment,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser({
        ecma: 2020,
        module: true,
        toplevel: true,
        compress: {
          unsafe_arrows: true,
          drop_console: !isDevEnvironment,
          drop_debugger: !isDevEnvironment,
        },
        format: {
          indent_level: 2,
        },
        sourceMap: isDevEnvironment,
      }),
    ],
  },
];
