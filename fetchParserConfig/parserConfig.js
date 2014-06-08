var parserConfig = {
  "www.newyorker.com": {
    "categoryMap": {
      "currency": "Business", 
      "elements": "Science", 
      "joshuarothman": "Culture", 
      "newsdesk": "US Politics", 
      "culture": "Culture"
    }, 
    "domain": "www.newyorker.com", 
    "urlFormat": "/online/blogs/(.*?)/.*", 
    "label": "New Yorker"
  }, 
  "www.bbc.com": {
    "categoryMap": {
      "/news/world/us_and_canada": "US Politics", 
      "sport": "Sports", 
      "news/world": "World"
    }, 
    "domain": "www.bbc.com", 
    "urlFormat": ".*/(.*?)/.*", 
    "label": "BBC"
  }, 
  "america.aljazeera.com": {
    "categoryMap": {}, 
    "domain": "america.aljazeera.com", 
    "urlFormat": "", 
    "label": "Al Jazeera"
  }, 
  "www.fastcompany.com": {
    "domain": "www.fastcompany.com", 
    "fixedCategory": "Business", 
    "label": "Fast Company"
  }, 
  "www.salon.com": {
    "categoryMap": {
      "life": "Culture", 
      "business": "Business", 
      "entertainment": "Entertainment", 
      "sustainability": "Science", 
      "politcs": "US Politics", 
      "technology": "Technology"
    }, 
    "domain": "www.salon.com", 
    "urlFormat": "/category/(.*?)/", 
    "label": "Salon"
  }, 
  "online.wsj.com": {
    "categoryMap": {}, 
    "domain": "online.wsj.com", 
    "urlFormat": "", 
    "label": "Wall Street Journal"
  }, 
  "www.foreignaffairs.com": {
    "domain": "www.foreignaffairs.com", 
    "fixedCategory": "World", 
    "label": "Foreign Affairs"
  }, 
  "grantland.com": {
    "domain": "grantland.com", 
    "fixedCategory": "Sports", 
    "label": "Grantland"
  }, 
  "nymag.com": {
    "categoryMap": {}, 
    "domain": "nymag.com", 
    "urlFormat": "", 
    "label": "New York Magazine"
  }, 
  "www.vogue.com": {
    "domain": "www.vogue.com", 
    "fixedCategory": "Culture", 
    "label": "Vogue"
  }, 
  "www.thedailybeast.com": {
    "categoryMap": {}, 
    "domain": "www.thedailybeast.com", 
    "urlFormat": "", 
    "label": "The Daily Beast"
  }, 
  "www.vanityfair.com": {
    "domain": "www.vanityfair.com", 
    "fixedCategory": "Entertainment", 
    "label": "Vanity Fair"
  }, 
  "www.theverge.com": {
    "domain": "www.theverge.com", 
    "fixedCategory": "Technology", 
    "label": "The Verge"
  }, 
  "www.policymic.com": {
    "domain": "www.policymic.com", 
    "fixedCategory": "Opinion", 
    "label": "PolicyMic"
  }, 
  "www.newrepublic.com": {
    "categoryMap": {}, 
    "domain": "www.newrepublic.com", 
    "urlFormat": "", 
    "label": "The New Republic"
  }, 
  "www.theatlantic.com": {
    "categoryMap": {
      "business": "Business", 
      "entertainment": "Entertainment", 
      "health": "Culture", 
      "sexes": "Culture", 
      "politics": "US Politics", 
      "international": "World", 
      "education": "Education", 
      "technology": "Technology"
    }, 
    "domain": "www.theatlantic.com", 
    "urlFormat": "/(.*?)/.*", 
    "label": "The Atlantic"
  }, 
  "www.theguardian.com/us": {
    "categoryMap": {}, 
    "domain": "www.theguardian.com/us", 
    "urlFormat": "", 
    "label": "The Guardian"
  }, 
  "www.cnn.com": {
    "categoryMap": {
      "living": "Culture", 
      "showbiz": "Entertainment", 
      "travel": "Culture", 
      "health": "Culture", 
      "world": "World", 
      "politics": "US Politics", 
      "opinion": "Opinion", 
      "tech": "Technology"
    }, 
    "domain": "www.cnn.com", 
    "urlFormat": ".*/(.*?)/.*", 
    "label": "CNN"
  }, 
  "www.huffingtonpost.com": {
    "categoryMap": {}, 
    "domain": "www.huffingtonpost.com", 
    "urlFormat": "", 
    "label": "Huffington Post"
  }, 
  "www.washingtonpost.com": {
    "categoryMap": {
      "opinions": "Opinion", 
      "lifestyle": "Culture", 
      "business": "Business", 
      "entertainment": "Entertainment", 
      "sports": "Sports", 
      "world": "World", 
      "politics": "US Politics", 
      "business/technology": "Technology"
    }, 
    "domain": "www.washingtonpost.com", 
    "urlFormat": ".*/(.*?)/.*", 
    "label": "Washington Post"
  }, 
  "time.com": {
    "categoryMap": {}, 
    "domain": "time.com", 
    "urlFormat": "", 
    "label": "TIME"
  }, 
  "www.religiondispatches.org": {
    "domain": "www.religiondispatches.org", 
    "fixedCategory": "Religion", 
    "label": "Religion Dispatches"
  }, 
  "www.reuters.com": {
    "categoryMap": {}, 
    "domain": "www.reuters.com", 
    "urlFormat": "", 
    "label": "Reuters"
  }, 
  "harpers.org": {
    "categoryMap": {}, 
    "domain": "harpers.org", 
    "urlFormat": "", 
    "label": "Harper's"
  }, 
  "www.motherjones.com": {
    "categoryMap": {
      "environment": "Science", 
      "politics": "US Politics", 
      "culture": "Media"
    }, 
    "domain": "www.motherjones.com", 
    "urlFormat": "/(.*?)/.*", 
    "label": "Mother Jones"
  }, 
  "www.fivethirtyeight.com": {
    "domain": "www.fivethirtyeight.com", 
    "fixedCategory": "US Politics", 
    "label": "Five Thirty Eight"
  }, 
  "nytimes.com": {
    "categoryMap": {
      "": "Culture", 
      "arts": "Culture", 
      "fashion": "Culture", 
      "business": "Business", 
      "media": "Media", 
      "national": "US Politics", 
      "sports": "Sports", 
      "health": "Culture", 
      "science": "Science", 
      "world": "World", 
      "opinion": "Opinion", 
      "technology": "Technology"
    }, 
    "domain": "nytimes.com", 
    "urlFormat": ".*/(.*?)/.*", 
    "label": "New York Times"
  }, 
  "https://medium.com": {
    "domain": "https://medium.com", 
    "fixedCategory": "Opinion", 
    "label": "Medium"
  }, 
  "www.slate.com": {
    "categoryMap": {
      "articles/health_and_science": "Science", 
      "blogs/outward": "Culture", 
      "articles/technology": "Technology", 
      "articles/sports": "Sports", 
      "articles/news_and_politics": "US Politics", 
      "blogs/browbeat": "Culture", 
      "blogs/the_spot": "Sports", 
      "blogs/moneybox": "Business"
    }, 
    "domain": "www.slate.com", 
    "urlFormat": "/(.*?)/.*", 
    "label": "Slate"
  }, 
  "www.vox.com": {
    "domain": "www.vox.com", 
    "fixedCategory": "US Politics", 
    "label": "Vox.com"
  }, 
  "www.syriadeeply.org": {
    "domain": "www.syriadeeply.org", 
    "fixedCategory": "World", 
    "label": "Syria Deeply"
  }, 
  "latimes.com": {
    "categoryMap": {
      "celebrity": "Entertainment", 
      "us_politics": "US Politics"
    }, 
    "domain": "latimes.com", 
    "urlFormat": "/(.*?)/.*", 
    "label": "L.A. Times"
  }, 
  "www.buzzfeed.com/world": {
    "domain": "www.buzzfeed.com/world", 
    "fixedCategory": "Junk", 
    "label": "BuzzFeed"
  }, 
  "www.foreignpolicy.com": {
    "domain": "www.foreignpolicy.com", 
    "fixedCategory": "World", 
    "label": "Foreign Policy"
  }, 
  "www.economist.com": {
    "categoryMap": {
      "culture": "Culture", 
      "economics": "Business", 
      "science-technology": "Technology", 
      "world": "World", 
      "business-finance": "Business"
    }, 
    "domain": "www.economist.com", 
    "urlFormat": "/(.*?)/.*", 
    "label": "The Economist"
  }, 
  "www.nationalreview.com": {
    "categoryMap": {}, 
    "domain": "www.nationalreview.com", 
    "urlFormat": "", 
    "label": "National Review"
  }
}
