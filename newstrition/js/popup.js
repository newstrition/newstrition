var newstrition = {
  /*
  * Gets the start date in milliseconds from epoch, based on the number of days to take into account
  */
  getStartSearchTime: function (numDays) {
    var currentTime = new Date().getTime();
    var oneDay = 1000 * 60 * 60 * 24; //number of milliseconds in a day
    var startTime = currentTime - oneDay * numDays;
    return startTime;
  },

  addToPage: function (results) {

  },

  isAcceptedUrl : function (url) {
    // if the url matches any one of those strings, this is NOT an accepted url
    if (url.indexOf("api.embed.ly") != -1 ||
    url.indexOf("chrome-extension") != -1 ||
    url.indexOf("file:///") != -1 ||
      url.indexOf("http://localhost") != -1) {
        return false;
      }
      return true;
  },

  getTopLevelDomain: function (url) {
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain = matches && matches[1];  // domain will be null if no match is found
    return domain;
  },

  getMetadata: function (results) {
    var filteredResults = [];
    for (var i = 0; i < results.length; i++) {
      var item = results[i];
      if (this.isAcceptedUrl(item.url)) {

        item.domain = this.getTopLevelDomain(item.url);

        // ignore embedly metadata for now
        // var escapedUrl = encodeURI(item.url);
        // var endpoint = "http://api.embed.ly/1/extract?key=101bc33f920c46c69d93196edd9a8e1c&url=" + escapedUrl;
        // $.getJSON(endpoint, function(data) {
          //   console.log(data);
          //   var embedly = { 
            //     provider_name : data.provider_name,
            //     provider_url : data.provider_url 
            //   };
            //   item.embedly = embedly;
        //});
        filteredResults.push(item);
      }
    }
    return filteredResults;
  },

  getTemplate : function () {
    var sometemplate = '{{#stats}}<div class="item"><span class="title">{{title}}</span> <span class="num">{{percentage}}</span></div>{{/stats}}';
    var source = sometemplate;
    var template = Handlebars.compile(source); 
    return template;
  },

  render: function (data) {
    this.renderHtml(data);
    this.renderChart(data.stats);
  },

  renderHtml : function(data) {
    var template = this.getTemplate();
    $('.content').append(template(data));
  },

  renderChart : function(data) {
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
  }

}

newstrition.parser = {
  parseResults: function(array) {
    // array: array of history items.
    return array; //endpoint for parsing
  }
}


document.addEventListener('DOMContentLoaded', function () { //TODO: what is a better endpoint?
  console.log("still alive");
  var startTime = newstrition.getStartSearchTime(1); // get one day of browsing history

  // results is array of HistoryItem results
  chrome.history.search({ "text" : "", "startTime" : startTime, "maxResults" : 5 }, function (results) {
    console.log(newstrition.parser.parseResults(results));
    results = newstrition.getMetadata(results);
    var data = { 
      stats: [
        {
          "title" : "Politics",
          "percentage" : 10.0,
        },
        {
          "title" : "Sports",
          "percentage" : 30.0,
        },
        {
          "title" : "World",
          "percentage" : 40.0,
        },
        {
          "title" : "Art",
          "percentage" : 20.0,
        }
      ]
    }; 

    newstrition.render(data);
  });
});





