async function bundleJS() {
  const bundle = await rollup.rollup({
    input: 'src/lib/index.ts',
    external: [
      'd3-selection',
      'd3-array',
      'd3-axis',
      'd3-brush',
      'd3-scale',
      'd3-transition',
      'd3-zoom',
    ],
    plugins: [
      rollupNodeResolve({ browser: true }), 
      rollupCommonJs(), 
      rollupTypescript()
    ],
  });

  const minPlugins = [rollupTerser()];
  const gzPlugins = [rollupTerser(), rollupGzip()];
  const writeConfigurations = [
    { ext: 'js', format: 'iife', plugins: [] },
    { ext: 'min.js', format: 'iife', plugins: minPlugins },
    { ext: 'min.js', format: 'iife', plugins: gzPlugins }, // .gz added by plugin
    { ext: 'mjs', format: 'es', plugins: [] },
    { ext: 'min.mjs', format: 'es', plugins: minPlugins },
    { ext: 'min.mjs', format: 'es', plugins: gzPlugins }, // .gz added by plugin
  ];

  return Promise.all(
    writeConfigurations.map((c) =>
      bundle.write({
        file: `dist/respvis.${c.ext}`,
        format: c.format,
        name: 'respVis',
        globals: {
          'd3-selection': 'd3',
          'd3-array': 'd3',
          'd3-axis': 'd3',
          'd3-brush': 'd3',
          'd3-scale': 'd3',
          'd3-transition': 'd3',
          'd3-zoom': 'd3',
        },
        plugins: c.plugins,
        sourcemap: true,
      })
    )
  );
}
