import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/browser.js',
    output: [
      {
        exports: 'default',
        file: 'lib/browser.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'lib/browser.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [babel({ babelHelpers: 'bundled' })],
  },
  {
    input: 'src/server.js',
    output: [
      {
        exports: 'default',
        file: 'lib/server.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'lib/server.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: [
      'canvas-prebuilt',
      'canvas',
      'jsdom/lib/jsdom/utils',
      'jsdom/lib/jsdom/living/generated/utils',
      'jsdom',
      'xmldom',
    ],
    plugins: [babel({ babelHelpers: 'bundled' })],
  },
];
