const data = [
  { category: 'A', value: 107 },
  { category: 'B', value: 31 },
  { category: 'C', value: 635 }
];

const bar = fc
  .autoBandwidth(fc.seriesSvgBar())
  .crossValue((d) => d.category)
  .mainValue((d) => d.value)
  .align('left')
  .decorate((selection) => {
    selection.attr('fill', 'green');
  });

const chart = fc
  .chartCartesian(d3.scaleBand(), d3.scaleLinear())
  .chartLabel('D3FC API Demonstration')
  .xDomain(data.map((d) => d.category))
  .yDomain([0, Math.max(...data.map((d) => d.value))])
  .xPadding(0.1)
  .xLabel('Categories')
  .yLabel('Values')
  .yOrient('left')
  .yNice()
  .svgPlotArea(bar);

d3.select('#container').datum(data).call(chart);
