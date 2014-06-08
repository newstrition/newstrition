var Newstrition = function(){
  this.urlParser = new UrlParser();
  
  // This maps category ids to colors.
  this.colorMap = {
    'celebrity': '#bbbbbb',
    'us-politics': '#009fe1',
    'business':	'#f8ba62',
    'culture': '#c38bfc',
    'world': '#ff5b5b	',
    'sports': '#f8ef62',
    'science': '#62dcff',
    'technology': '#08647e',
    'opinion': '#ff628e',
    'religion':	'#fc8bcb',
    'education': '#c9ffb9',
    'junk':	'#ff9b0c',
    'entertainment': '#009fe1'
  };
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

  getContentTemplate : function () {
    var sometemplate = '{{#stats}}<div  data-index="{{idNum}}" class="item {{idCat}}"><span class="num" style="color:{{color}}">{{percentage}}%</span> <span class="title">{{title}}</span></div>{{/stats}}';

    var source = sometemplate;
    var template = Handlebars.compile(source);
    return template;
  },

  getListTemplate : function () {
    var listTemplate = '<h1>{{title}}</h1><div class="divider" style="background-color: {{color}}" ></div>{{#analyzedHistoryItems}}<div class="url-div"><a class="{{idCat}}" href="{{historyItem.url}}" target="_blank"><span>{{historyItem.url}}</span></a></div>{{/analyzedHistoryItems}}';
    var template = Handlebars.compile(listTemplate); 
    return template;
  },

  render: function (data) {
    // render view 1
    this.renderContent(data);
    this.renderChart(data.stats);
  },

  renderContent : function(data) {
    var _this = this;
    var template = this.getContentTemplate();
    $('.content').append(template(data));

    $(".item").click(function (e) {
      var myClass = $(e.delegateTarget).attr("class"); 
      var dataIndex = $(e.delegateTarget).attr("data-index"); 
      //hide the first page, show the second
      $(".page1").hide();
      _this.renderPage2(data.stats[dataIndex]);
    });
  },

  renderPage2 : function(dataPoint) {
    var template = this.getListTemplate();
    $('.content2').append(template(dataPoint));
    $("#hidePage2").off();
    $("#hidePage2").click(function (e) {
      $('.page2').hide();
      $(".page1").show();
      $('.content2').empty();
    });
    $('.page2').show();
  },

  renderChart : function(data) {
    (function(nv, d3, data) {
      
      nv.addGraph(function() {

        var chart = nv.models.pieChart()
        .x(function(d) { return d.title; })
        .y(function(d) { return d.percentage; })
        .showLabels(false)
        .showLegend(false)
        .labelThreshold(0.5)
        .donut(true)
        .donutRatio(0.45)
        .color(function(d) { console.log(d); return d.data.color})
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
        //startTime: this.getStartSearchTime(),
        maxResults: 1e4,
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
            analyzedHistoryItems: []
          }
        }
        categoryGroups[category].analyzedHistoryItems.push(analyzedHistoryItem);
        totalItems += 1;
      });
    });

    // Calculate aggregate stats for each category.
    _.each(categoryGroups, function(categoryGroup) { 
      categoryGroup.rawPercentage = categoryGroup.analyzedHistoryItems.length/totalItems;
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
    var i = 0;
    _.each(categoryGroups, function(categoryGroup) {
      // Create css-friendly category id from title (lowercase, dash-separated).
      categoryGroup.idNum = i;
      categoryGroup.idCat = categoryGroup.title.toLowerCase().replace(' ', '-');
      categoryGroup.color = newstrition.colorMap[categoryGroup.idCat];
      categoryGroup.percentage = (100 * categoryGroup.rawPercentage).toFixed(1);
      formattedData.stats.push(categoryGroup);
      i += 1;
    });
    console.log('formattedData is: ', formattedData);

    // MOCK DATA.
    // THIS REPRESENTS THE FORMAT KYLE WANTS.
    var mockData = { 
      stats: [
        {
          idNum: 0,
          idCat:  'us-politics',
          title : "US Politics",
          percentage : '10.0',
          rawPercentage: .1,
          historyItems: [{url: 'http://politicsA'}],
          color: '#bada55',
          number: .1,
          analyzedHistoryItems: [{url: 'http://politicsA'}],
        },
        {
          idNum: 1,
          idCat: 'sports',
          title : "Sports",
          percentage : '30.0',
          rawPercentage: .3,
          historyItems: [{url: 'http://politicsA'}],
          color: '#bada55',
          number: .3,
          analyzedHistoryItems: [{url: 'http://politicsA'}],
        },
        {
          itNum: 2,
          idCat: 'world',
          title : "World",
          percentage : '40.0',
          rawPercentage: .4,
          color: '#bada55',
          analyzedHistoryItems: [{url: 'http://politicsA'}],
        },
        {
          idNum: 3,
          idCat: 'art',
          title : "Art",
          percentage : '20.0',
          rawPercentage: .2,
          analyzedHistoryItems: [{url: 'http://politicsA'}],
          color: '#bada55'
        }
      ]
    }; 

    // EDIT THIS TO CHANGE DATA SOURCE.
    var data = formattedData;
    newstrition.data = data;
    newstrition.render(newstrition.data);
  });
});





