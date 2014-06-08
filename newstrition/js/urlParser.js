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
    var sourceConfig = parserConfig.sources[a.hostname];
    if (! sourceConfig) {
      sourceConfig = parserConfig.sources['default'];
      sourceConfig.label = sourceConfig.domainName = a.hostname;
    }

    sourceVisitItem.source = {
      id: sourceConfig['domainName'],
      label: sourceConfig['Source Label'],
      favicon: ''
    };

    // Get category by matching on urlFormat.
    var formattedUrlFormat = sourceConfig.urlFormat.replace('<category>', '(.*)');
    var FIXED_CAT_RE = new RegExp('<FIXED:(.*)>');
    var NORMAL_RE = new RegExp(formattedUrlFormat);
    var category;
    if (FIXED_CAT_RE.test(formattedUrlFormat)){
      var match = FIXED_CAT_RE.exec(formattedUrlFormat);
      category = match[1];
    } 
    else if (NORMAL_RE.test(formattedUrl)) {
      var match = FIXED_CAT_RE.exec(formattedUrlFormat);
      category = match[1];
    } else {
      category = 'unknown';
    }
    sourceConfig.categories.push(category);
  },

});
