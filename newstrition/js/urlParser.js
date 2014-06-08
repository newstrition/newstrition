/*
 * A Basic url parser.
 * Extracts data from url for sources, configured in
 * parserConfig.js
 */

var UrlParser = function() {
};

_.extend(UrlParser.prototype, {

  parseUrl: function(url) {
    // Goal is to parse the url and extract a 
    // sourceVisitItem, like this:
    /*
    sourceVisitItem: {
      source: {
        id: 'www.nytimes.com',
        label: ‘NYTimes’,
        favicon: “http://nytimes/favicon”
      }
      url: 'http://nytimes.com/dining/some-article',
      categories: ['dining']
    }
    */

    var sourceVisitItem = {
      url: url,
      categories: [],
      source: {}
    };


    var a = document.createElement('a');
    a.href = url;

    // Use hostname as key for source in parser config.
    var sourceConfig = parserConfig[a.hostname];
    if (! sourceConfig) {
      sourceConfig = {
        id: a.hostname,
        label: a.hostname,
        favicon: ''
      }
    }

    sourceVisitItem.source = {
      id: sourceConfig['domainName'],
      label: sourceConfig['Source Label'],
      favicon: ''
    };

    // This is a really ugly way to test
    // for categories, but it's what we're doing for now.
    // Yay hackathon code!
    var category;
    if (sourceConfig.categoryTests) {
      for (var i=0; i < sourceConfig.categoryTests.length; i++){
        var catTest = sourceConfig.categoryTests[i];
        var catRe = catTest[0];
        var canonicalCat = catTest[1];
      if (a.hostname === 'www.fastcompany.com'){
        console.log(catRe);
      }
        if (new RegExp(catRe).test(a.pathname)) {
          category = canonicalCat;
          break;
        }
      }
    }

    if (! category && sourceConfig.defaultCategory) {
      category = sourceConfig.defaultCategory;
    }

    if (! category) {
      category = 'unknown';
    }
    

    sourceVisitItem.categories.push(category);

    return sourceVisitItem;
  },

});
