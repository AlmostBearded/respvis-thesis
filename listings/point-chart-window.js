select('#chart')
  .append('div')
  .datum(
    chartWindowPointData({
      xValues: [10, 50, 20, 15, 35, 15, 35, 25, 45],
      yValues: [1.5, 4, 3, 3.5, 4.5, 2.5, 4, 4, 4.5],
      xAxis: { title: 'X Values' },
      yAxis: { title: 'Y Values' },
    })
  )
  .call(chartWindowPointRender)
  .call(chartWindowPointAutoResize);
