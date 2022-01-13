select('#chart')
  .append('div')
  .datum(
    chartWindowBarGroupedData({
      categories: ['A', 'B', 'C'],
      subcategories: ['X', 'Y', 'Z'],
      values: [
        [2, 3, 4],
        [3, 4, 2],
        [2, 1, 3],
      ],
      xAxis: { title: 'Category' },
      yAxis: { title: 'Value' },
      legend: { title: 'Subcategories' },
    })
  )
  .call(chartWindowBarGroupedRender)
  .call(chartWindowBarGroupedAutoResize)
  .call(chartWindowBarGroupedAutoFilterCategories)
  .call(chartWindowBarGroupedAutoFilterSubcategories);
