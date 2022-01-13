select('#chart')
  .append('div')
  .datum(
    chartWindowBarStackedData({
      categories: ['A', 'B', 'C'],
      subcategories: ['X', 'Y', 'Z'],
      values: [
        [2, 3, 4],
        [1, 4, 2],
        [2, 1, 3],
      ],

      // to turn into a percent stacked bar chart
      // valuesAsRatios: true,

      xAxis: { title: 'Category' },
      yAxis: { title: 'Percent' },
      legend: { title: 'Subcategories' },
    })
  )
  .call(chartWindowBarStackedRender)
  .call(chartWindowBarStackedAutoResize)
  .call(chartWindowBarStackedAutoFilterCategories)
  .call(chartWindowBarStackedAutoFilterSubcategories);
