var parserConfig = {
  "www.newyorker.com": {
    "domain": "www.newyorker.com", 
    "exampleUrls": [
      "http://www.newyorker.com/online/blogs/newsdesk/2014/06/eleven-posts-you-may-have-missed-this-week-5.html#slide_ss_0=1"
    ], 
    "categoryTests": [
      [
        "/online/blogs/newsdesk", 
        "US Politics"
      ], 
      [
        "/online/blogs/currency", 
        "Business"
      ], 
      [
        "/online/blogs/culture", 
        "Culture"
      ], 
      [
        "/online/blogs/joshuarothman", 
        "Culture"
      ], 
      [
        "/online/blogs/elements", 
        "Science"
      ]
    ], 
    "label": "New Yorker"
  }, 
  "www.bbc.com": {
    "domain": "www.bbc.com", 
    "exampleUrls": [
      "http://www.bbc.com/news/world-us-canada-27745005", 
      "http://www.bbc.com/sport/0/football/27383495"
    ], 
    "categoryTests": [
      [
        "/news/world/us_and_canada", 
        "US Politics"
      ], 
      [
        "/news/world", 
        "World"
      ], 
      [
        "/sport", 
        "Sports"
      ]
    ], 
    "label": "BBC"
  }, 
  "america.aljazeera.com": {
    "domain": "america.aljazeera.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "Al Jazeera"
  }, 
  "www.salon.com": {
    "domain": "www.salon.com", 
    "exampleUrls": [
      "http://www.slate.com/articles/business/how_failure_breeds_success/2014/05/richard_branson_tax_fraud_how_a_youthful_indiscretion_helped_create_a_billionaire.html?wpisrc=obinsite"
    ], 
    "categoryTests": [
      [
        "/articles/entertainment", 
        "Entertainment"
      ], 
      [
        "/articles/politics", 
        "US Politics"
      ], 
      [
        "/articles/business", 
        "Business"
      ], 
      [
        "/articles/life", 
        "Culture"
      ], 
      [
        "/articles/sustainability", 
        "Science"
      ], 
      [
        "/articles/technology", 
        "Technology"
      ]
    ], 
    "label": "Salon"
  }, 
  "online.wsj.com": {
    "domain": "online.wsj.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "Wall Street Journal"
  }, 
  "www.foreignaffairs.com": {
    "domain": "www.foreignaffairs.com", 
    "exampleUrls": [
      "http://www.foreignaffairs.com/articles/141549/omar-g-encarnacion/spains-game-of-thrones"
    ], 
    "defaultCategory": "World", 
    "categoryTests": [], 
    "label": "Foreign Affairs"
  }, 
  "grantland.com": {
    "domain": "grantland.com", 
    "exampleUrls": [
      ""
    ], 
    "defaultCategory": "Sports", 
    "categoryTests": [], 
    "label": "Grantland"
  }, 
  "nymag.com": {
    "domain": "nymag.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "New York Magazine"
  }, 
  "www.vogue.com": {
    "domain": "www.vogue.com", 
    "exampleUrls": [
      "http://www.vogue.com/vogue-daily/article/5-stylish-women-share-their-best-wedding-day-beauty-tips/"
    ], 
    "defaultCategory": "Culture", 
    "categoryTests": [], 
    "label": "Vogue"
  }, 
  "www.nytimes.com": {
    "domain": "www.nytimes.com", 
    "exampleUrls": [
      "http://www.nytimes.com/2014/06/08/us/cleveland-clinic-chief-out-of-running-for-va.html?ref=health"
    ], 
    "categoryTests": [
      [
        "/.*?/.*?/.*?/national", 
        "US Politics"
      ], 
      [
        "/.*?/.*?/.*?/media", 
        "Media"
      ], 
      [
        "/.*?/.*?/.*?/business", 
        "Business"
      ], 
      [
        "/.*?/.*?/.*?/health", 
        "Culture"
      ], 
      [
        "/.*?/.*?/.*?/arts", 
        "Culture"
      ], 
      [
        "/.*?/.*?/.*?/fashion", 
        "Culture"
      ], 
      [
        "/.*?/.*?/.*?/world", 
        "World"
      ], 
      [
        "/.*?/.*?/.*?/sports", 
        "Sports"
      ], 
      [
        "/.*?/.*?/.*?/science", 
        "Science"
      ], 
      [
        "/.*?/.*?/.*?/technology", 
        "Technology"
      ], 
      [
        "/.*?/.*?/.*?/opinion", 
        "Opinion"
      ]
    ], 
    "label": "New York Times"
  }, 
  "www.thedailybeast.com": {
    "domain": "www.thedailybeast.com", 
    "exampleUrls": [
      "http://www.thedailybeast.com/articles/2014/06/08/the-drunken-downfall-of-evangelical-america-s-favorite-painter.html"
    ], 
    "categoryTests": [], 
    "label": "The Daily Beast"
  }, 
  "www.vanityfair.com": {
    "domain": "www.vanityfair.com", 
    "exampleUrls": [
      "http://www.vanityfair.com/culture/2014/06/tony-nominee-portraits-2014"
    ], 
    "defaultCategory": "Entertainment", 
    "categoryTests": [], 
    "label": "Vanity Fair"
  }, 
  "www.theverge.com": {
    "domain": "www.theverge.com", 
    "exampleUrls": [
      "http://www.theverge.com/2014/6/3/5777166/mit-robot-gives-wearer-extra-arms-video-demonstation"
    ], 
    "defaultCategory": "Technology", 
    "categoryTests": [], 
    "label": "The Verge"
  }, 
  "www.policymic.com": {
    "domain": "www.policymic.com", 
    "exampleUrls": [
      ""
    ], 
    "defaultCategory": "Opinion", 
    "categoryTests": [], 
    "label": "PolicyMic"
  }, 
  "www.newrepublic.com": {
    "domain": "www.newrepublic.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "The New Republic"
  }, 
  "www.theatlantic.com": {
    "domain": "www.theatlantic.com", 
    "exampleUrls": [
      "http://www.theatlantic.com/technology/archive/2014/06/fabien-cousteau-mission-31/371947/"
    ], 
    "categoryTests": [
      [
        "/entertainment", 
        "Entertainment"
      ], 
      [
        "/politics", 
        "US Politics"
      ], 
      [
        "/business", 
        "Business"
      ], 
      [
        "/health", 
        "Culture"
      ], 
      [
        "/sexes", 
        "Culture"
      ], 
      [
        "/international", 
        "World"
      ], 
      [
        "/technology", 
        "Technology"
      ], 
      [
        "/education", 
        "Education"
      ]
    ], 
    "label": "The Atlantic"
  }, 
  "www.theguardian.com/us": {
    "domain": "www.theguardian.com/us", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "The Guardian"
  }, 
  "www.latimes.com": {
    "domain": "www.latimes.com", 
    "exampleUrls": [
      "http://www.latimes.com/sports/la-sp-belmont-stakes-20140608-story.html"
    ], 
    "categoryTests": [
      [
        "/celebrity", 
        "Entertainment"
      ], 
      [
        "/us_politics", 
        "US Politics"
      ], 
      [
        "/sports", 
        "Sports"
      ]
    ], 
    "label": "L.A. Times"
  }, 
  "www.cnn.com": {
    "domain": "www.cnn.com", 
    "exampleUrls": [
      "http://www.cnn.com/2014/06/04/tech/innovation/cousteau-mission-31/index.html?hpt=hp_bn5"
    ], 
    "categoryTests": [
      [
        "/.*?/.*?/.*?/showbiz", 
        "Entertainment"
      ], 
      [
        "/.*?/.*?/.*?/politics", 
        "US Politics"
      ], 
      [
        "/.*?/.*?/.*?/health", 
        "Culture"
      ], 
      [
        "/.*?/.*?/.*?/living", 
        "Culture"
      ], 
      [
        "/.*?/.*?/.*?/travel", 
        "Culture"
      ], 
      [
        "/.*?/.*?/.*?/world", 
        "World"
      ], 
      [
        "/.*?/.*?/.*?/tech", 
        "Technology"
      ], 
      [
        "/.*?/.*?/.*?/opinion", 
        "Opinion"
      ]
    ], 
    "label": "CNN"
  }, 
  "www.huffingtonpost.com": {
    "domain": "www.huffingtonpost.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "Huffington Post"
  }, 
  "www.washingtonpost.com": {
    "domain": "www.washingtonpost.com", 
    "exampleUrls": [
      "http://www.washingtonpost.com/politics/how-bill-gates-pulled-off-the-swift-common-core-revolution/2014/06/07/a830e32e-ec34-11e3-9f5c-9075d5508f0a_story.html?hpid=z1"
    ], 
    "categoryTests": [
      [
        "/entertainment", 
        "Entertainment"
      ], 
      [
        "/politics", 
        "US Politics"
      ], 
      [
        "/business", 
        "Business"
      ], 
      [
        "/lifestyle", 
        "Culture"
      ], 
      [
        "/world", 
        "World"
      ], 
      [
        "/sports", 
        "Sports"
      ], 
      [
        "/business/technology", 
        "Technology"
      ], 
      [
        "/opinions", 
        "Opinion"
      ]
    ], 
    "label": "Washington Post"
  }, 
  "time.com": {
    "domain": "time.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "TIME"
  }, 
  "www.religiondispatches.org": {
    "domain": "www.religiondispatches.org", 
    "exampleUrls": [
      ""
    ], 
    "defaultCategory": "Religion", 
    "categoryTests": [], 
    "label": "Religion Dispatches"
  }, 
  "www.reuters.com": {
    "domain": "www.reuters.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "Reuters"
  }, 
  "harpers.org": {
    "domain": "harpers.org", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "Harper's"
  }, 
  "www.motherjones.com": {
    "domain": "www.motherjones.com", 
    "exampleUrls": [
      "http://www.motherjones.com/politics/2014/06/romell-broom-ohio-execution"
    ], 
    "categoryTests": [
      [
        "/politics", 
        "US Politics"
      ], 
      [
        "/culture", 
        "Media"
      ], 
      [
        "/environment", 
        "Science"
      ]
    ], 
    "label": "Mother Jones"
  }, 
  "www.fivethirtyeight.com": {
    "domain": "www.fivethirtyeight.com", 
    "exampleUrls": [
      ""
    ], 
    "defaultCategory": "US Politics", 
    "categoryTests": [], 
    "label": "Five Thirty Eight"
  }, 
  "https://medium.com": {
    "domain": "https://medium.com", 
    "exampleUrls": [
      ""
    ], 
    "defaultCategory": "Opinion", 
    "categoryTests": [], 
    "label": "Medium"
  }, 
  "www.slate.com": {
    "domain": "www.slate.com", 
    "exampleUrls": [
      "http://www.slate.com/articles/health_and_science/science/2014/06/d_day_normandy_landing_science_the_army_navy_compromise_on_tides_and_timing.html"
    ], 
    "categoryTests": [
      [
        "/articles/news_and_politics", 
        "US Politics"
      ], 
      [
        "/blogs/moneybox", 
        "Business"
      ], 
      [
        "/articles/business", 
        "Business"
      ], 
      [
        "/blogs/browbeat", 
        "Culture"
      ], 
      [
        "/blogs/outward", 
        "Culture"
      ], 
      [
        "/blogs/the_spot", 
        "Sports"
      ], 
      [
        "/articles/sports", 
        "Sports"
      ], 
      [
        "/articles/health_and_science", 
        "Science"
      ], 
      [
        "/articles/technology", 
        "Technology"
      ]
    ], 
    "label": "Slate"
  }, 
  "www.vox.com": {
    "domain": "www.vox.com", 
    "exampleUrls": [
      ""
    ], 
    "defaultCategory": "US Politics", 
    "categoryTests": [], 
    "label": "Vox.com"
  }, 
  "www.syriadeeply.org": {
    "domain": "www.syriadeeply.org", 
    "exampleUrls": [
      "http://www.syriadeeply.org/articles/2014/06/5572/assessing-state-syrias-detainees/"
    ], 
    "defaultCategory": "World", 
    "categoryTests": [], 
    "label": "Syria Deeply"
  }, 
  "www.buzzfeed.com/world": {
    "domain": "www.buzzfeed.com/world", 
    "exampleUrls": [
      ""
    ], 
    "defaultCategory": "Junk", 
    "categoryTests": [], 
    "label": "BuzzFeed"
  }, 
  "www.foreignpolicy.com": {
    "domain": "www.foreignpolicy.com", 
    "exampleUrls": [
      "http://www.foreignpolicy.com/articles/2014/04/29/fps_situation_report_obama_gets_defensive_on_his_use_of_defense"
    ], 
    "defaultCategory": "World", 
    "categoryTests": [], 
    "label": "Foreign Policy"
  }, 
  "www.economist.com": {
    "domain": "www.economist.com", 
    "exampleUrls": [
      "http://www.economist.com/news/science-and-technology/21602988-human-beings-are-brainy-weaklings-muscled-out"
    ], 
    "categoryTests": [
      [
        "/news/business-finance", 
        "Business"
      ], 
      [
        "/news/economics", 
        "Business"
      ], 
      [
        "/news/culture", 
        "Culture"
      ], 
      [
        "/news/world", 
        "World"
      ], 
      [
        "/news/science-and-technology", 
        "Science"
      ], 
    ], 
    "label": "The Economist"
  }, 
  "www.nationalreview.com": {
    "domain": "www.nationalreview.com", 
    "exampleUrls": [
      ""
    ], 
    "categoryTests": [], 
    "label": "National Review"
  }
};
