var Newstrition = function(){
  this.urlParser = new UrlParser();
};

_.extend(Newstrition.prototype, {
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

  getPage1Template : function () {
    var sometemplate = '{{#stats}}<div class="item"><span class="num">{{percentage}}</span>% <span class="title">{{title}}</span></div>{{/stats}}';
    var source = sometemplate;
    var template = Handlebars.compile(source); 
    return template;
  },

  render: function (data) {
    this.renderPage1(data);
    this.renderChart(data.stats);
  },

  renderPage1 : function(data) {
    var template = this.getPage1Template();
    $('.content').append(template(data));
  },

  renderPage2 : function(data) {
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
      alert(data[0].color)
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
  },

  getHistoryItems: function() {
    var dfd = new $.Deferred();
    // FAKE HISTORY IF TESTING.
    if (! chrome.history) {
      var mockHistoryItems = [
        {url: 'http://www.nytimes.com/2014/06/08/us/cleveland-clinic-chief-out-of-running-for-va.html?ref=health'},
        {url: 'http://www.syriadeeply.org/articles/2014/06/5572/assessing-state-syrias-detainees/'},
        {url: 'http://www.washingtonpost.com/politics/how-bill-gates-pulled-off-the-swift-common-core-revolution/2014/06/07/a830e32e-ec34-11e3-9f5c-9075d5508f0a_story.html?hpid=z1'},
        {url: '"http://www.bbc.com/news/world-us-canada-27745005'},
        {url: 'http://www.bbc.com/sport/0/football/27383495'},
        {url: 'http://www.cnn.com/2014/06/04/tech/innovation/cousteau-mission-31/index.html?hpt=hp_bn5'},
        {url: 'http://www.slate.com/articles/health_and_science/science/2014/06/d_day_normandy_landing_science_the_army_navy_compromise_on_tides_and_timing.html'},
        {url: 'http://www.slate.com/articles/business/how_failure_breeds_success/2014/05/richard_branson_tax_fraud_how_a_youthful_indiscretion_helped_create_a_billionaire.html?wpisrc=obinsite'},
        {url: 'http://www.vogue.com/vogue-daily/article/5-stylish-women-share-their-best-wedding-day-beauty-tips/'},
        {url: 'http://www.theverge.com/2014/6/3/5777166/mit-robot-gives-wearer-extra-arms-video-demonstation'},
        {url: 'http://www.vanityfair.com/culture/2014/06/tony-nominee-portraits-2014'},
        {url: 'http://www.theatlantic.com/technology/archive/2014/06/fabien-cousteau-mission-31/371947/'},
        {url: 'http://www.economist.com/news/science-and-technology/21602988-human-beings-are-brainy-weaklings-muscled-out'}
      ];
      dfd.resolve(mockHistoryItems);
    } else {
      chrome.history.search({
        text: "",
        startTime: this.getStartSearchTime(),
      }, function (results) {
        dfd.resolve(results);
      });
    }

    return dfd.promise();
  },

  analyzeHistoryItems: function(historyItems){
    // Returns analyzed history items.
    var analyzedHistoryItems = [];
    _.each(historyItems, function(historyItem) {
      var parsedUrl = this.urlParser.parseUrl(historyItem.url);
      analyzedHistoryItems.push({
        historyItem: historyItem,
        parsedUrl: parsedUrl
      });
    }, this);

    return analyzedHistoryItems;
  },

  generateCategoryGroups: function(analyzedHistoryItems) {
    // Generates category groupings from analyzed history items.
    var categoryGroups = {};
    var totalItems = 0;
    _.each(analyzedHistoryItems, function(analyzedHistoryItem) {
      var categories = analyzedHistoryItem.parsedUrl.categories;
      _.each(categories, function(category) {
        // Initialize group for category if needed.
        if (_.isUndefined(categoryGroups[category])){
          categoryGroups[category] = {
            title: category,
            historyItems: []
          }
        }
        categoryGroups[category].historyItems.push(analyzedHistoryItem);
        totalItems += 1;
      });
    });

    // Calculate aggregate stats for each category.
    _.each(categoryGroups, function(categoryGroup) { 
      categoryGroup.rawPercentage = categoryGroup.historyItems.length/totalItems;
    });

    return categoryGroups;
  },

  getCategoryGroupsFromHistory: function() {
    var dfd = new $.Deferred();
    var _this = this;
    this.getHistoryItems().done(function(historyItems) {
      var analyzedHistoryItems = _this.analyzeHistoryItems(historyItems);
      var categoryGroups = _this.generateCategoryGroups(
        analyzedHistoryItems);
      dfd.resolve(categoryGroups);
    });

    return dfd.promise();
  },

  generateAggregateData: function(categoryGroups) {
    // Generate aggregate data from categories.
  }

});


document.addEventListener('DOMContentLoaded', function () { //TODO: what is a better endpoint?
  console.log("still alive");

  newstrition = new Newstrition();
  var analysisPromise = newstrition.getCategoryGroupsFromHistory();
  /*
  // FAKING ANALYSIS FOR NOW
  var analysisDfd = new $.Deferred();
  analysisDfd.resolve();
  var analysisPromise = analysisDfd.promise();
  */

  // When analysis is ready, do the rendering.

  analysisPromise.done(function(categoryGroups) {

    // Format the category groups for renderer.
    var formattedData = {stats: []};
    _.each(categoryGroups, function(categoryGroup) {
      // Create css-friendly category id from title (lowercase, dash-separated).
      categoryGroup.categoryId = categoryGroup.title.toLowerCase().replace(' ', '-');

      categoryGroup.percentage = (100 * categoryGroup.rawPercentage).toFixed(1);
      formattedData.stats.push(categoryGroup);
    });
    console.log('formattedData is: ', formattedData);

    // MOCK DATA.
    // THIS REPRESENTS THE FORMAT KYLE WANTS.
    var mockData = { 
      stats: [
        {
          categoryId:  'politics',
          title : "Politics",
          percentage : '10.0',
          rawPercentage: .1,
          historyItems: [{url: 'http://politicsA'}],
        },
        {
          categoryId: 'sports',
          title : "Sports",
          percentage : '30.0',
          rawPercentage: .3,
          historyItems: [{url: 'http://politicsA'}],
        },
        {
          categoryId: 'world',
          title : "World",
          percentage : '40.0',
          rawPercentage: .4,
          historyItems: [{url: 'http://politicsA'}],
        },
        {
          categoryId: 'art',
          title : "Art",
          percentage : '20.0',
          rawPercentage: .2,
          historyItems: [{url: 'http://politicsA'}],
        }
      ]
    }; 

    // EDIT THIS TO CHANGE DATA SOURCE.
    var data = mockData;
    //var data = formattedData; 


    newstrition.render(data);

  
  
  });
});





