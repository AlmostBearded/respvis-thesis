Highcharts.chart('container', {
  ...
  responsive: {
    rules: [{
      condition: { maxWidth: 500 },
      chartOptions: {
        chart: { type: 'bar' },
        yAxis: { title: { text: null } },
        xAxis: { title: { text: null } },
      },
    }],
  },
});
