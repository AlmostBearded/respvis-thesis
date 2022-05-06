select('#chart')
  .append('div')
  .datum(
    chartWindowLineData({
      xValues: ['A', 'B', 'C', 'D', 'E', 'F'],
      yValues: [[0, 1, 3, 1, 5, 2]],
      xAxis: { title: 'X Values' },
      yAxis: { title: 'Y Values' },
    })
  )
  .call(chartWindowLineRender)
  .call(chartWindowLineAutoResize);
