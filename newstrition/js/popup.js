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

  getEmbedlyMetadata: function (results) {
    var filteredResults = [];
    for (var i = 0; i < results.length; i++) {
      var item = results[i];
      if (this.isAcceptedUrl(item.url)) {
        var escapedUrl = encodeURI(item.url);
        var endpoint = "http://api.embed.ly/1/extract?key=101bc33f920c46c69d93196edd9a8e1c&url=" + escapedUrl;
        
        $.getJSON(endpoint, function(data) {
          console.log(data);
          var embedly = { 
            provider_name : data.provider_name,
            provider_url : data.provider_url 
          };
          item.embedly = embedly;
        });
        filteredResults.push(item);
      }
    }
    return filteredResults;
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

/*
var theTemplateScript = '{{#each}}{{title}}{{/each}}'; // (step 1)

var theData =  [
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
];

var theTemplate = Handlebars.compile(theTemplateScript);
$('.content').append(theTemplate(theData));

*/


var sometemplate = '{{#stats}}{{title}}<br>{{percentage}}<br><br>{{/stats}}';
var source = sometemplate;
var template = Handlebars.compile(source); 

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



$('.content').html(template(data))

  // results is array of HistoryItem results
  chrome.history.search({ "text" : "", "startTime" : startTime, "maxResults" : 5 }, function (results) {
    console.log(newstrition.parser.parseResults(results));
    results = newstrition.getEmbedlyMetadata(results);

    window.setTimeout(3000, function() {
      console.log("result");
      console.log(results);
    });
  });
});





