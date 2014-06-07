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
  chrome.history.search({ "text" : "", "startTime" : startTime, "maxResults" : 100 }, function (results) {
    console.log(newstrition.parser.parseResults(results));
  });

});





