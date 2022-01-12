select('#chart')
  .append('div')
  .datum(
    chartWindowBarData({
      categories: ['A', 'B', 'C', 'D', 'E', 'F'],
      values: [2, 4, 3, 1, 5, 2],
      xAxis: { title: 'Category' },
      yAxis: { title: 'Value' },
    })
  )
  .call(chartWindowBarRender)
  .call(chartWindowBarAutoResize)
  .call(chartWindowBarAutoFilterCategories); 
