import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      // CJS
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      // ESM
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        // useTsconfigDeclarationDir: true,
      }),
      peerDepsExternal(),
      terser(),
    ],
    external: [
      'react',
      '@emotion/react',
      '@emotion/styled',
      '@mui/icons-material',
      '@mui/material',
      '@radix-ui/react-accordion',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-dialog',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-select',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-toggle-group',
      '@stitches/react',
      'react-imask',
    ],
  },
];
