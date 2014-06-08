(function(nv, d3, data) {
  var colors = [
    '#ff628e',
    '#ff7777',
    '#62dcff',
    '#08647e'
  ];
  nv.addGraph(function() {
    var chart = nv.models.pieChart()
      .x(function(d) { return d.title; })
      .y(function(d) { return d.percentage; })
      .showLabels(false)
      .showLegend(false)
      .labelThreshold(0.5)
      .donut(true)
      .donutRatio(0.45)
      .color(colors)
      .margin({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      });

    d3.select('svg')
      .datum(data)
      .transition().duration(500)
      .call(chart); 

    return chart;
  });
})(nv, d3, data);
