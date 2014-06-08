var newstrition = {
  /*
   * Gets the start date in milliseconds from epoch, based on the number of days to take into account
   */
  getStartSearchTime: function (numDays) {
    var currentTime = new Date().getTime();
    var oneDay = 1000 * 60 * 60 * 24; //number of milliseconds in a day
    var startTime = currentTime - oneDay * numDays;
    return startTime;
  }
}

newstrition.parser = {
  parseResults: function(array) {
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
  chrome.history.search({ "text" : "", "startTime" : startTime, "maxResults" : 100 }, function (results) {
    console.log(newstrition.parser.parseResults(results));
  });




});





