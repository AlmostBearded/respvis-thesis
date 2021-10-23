Highcharts.chart('container', {
  chart: { type: 'column' },
  title: { text: 'Highcharts API Demonstration' },
  xAxis: { categories: ['A', 'B', 'C', 'D', 'E'], title: { text: 'Categories ' } },
  yAxis: { type: 'linear', title: { text: 'Values' } },
  series: [{
    name: 'data',
    data: [107, 31, 635, 203, 50],
    color: 'green',
    borderColor: 'black',
  }],
});
