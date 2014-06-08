#!/usr/bin/env python
"""
Converts parser config csv file to parserConfig.js script.
"""

import csv
import re
import json


CSV_FILE = 'parserConfig.csv'
CAT_START_IDX = 5

def main():
    with open(CSV_FILE, 'rb') as csvfile:
        reader = csv.reader(csvfile)
        headers = reader.next()
        cat_end_idx = len(headers) - 1
        
        source_configs = {}
        for row in reader:
            source_config = {}
            source_config['domain'] = row[0].replace("http://", "")
            source_config['label'] = row[1]

            # Parse the url foramt. 
            raw_url_format = row[2]
            if raw_url_format.startswith('<FIXED:'):
                 source_config['fixedCategory'] = re.search(
                     '<FIXED:(.*)>', raw_url_format).group(1)
            else:
                source_config['urlFormat'] = raw_url_format.replace(
                    '<category>', '(.*?)')
                cat_map = {}
                for i in range(CAT_START_IDX, cat_end_idx+1):
                    source_cats = row[i]
                    canonical_cat = headers[i]
                    if source_cats:
                        for source_cat in source_cats.split(','):
                            source_cat = source_cat.strip()
                            cat_map[source_cat] = canonical_cat
                source_config['categoryMap'] = cat_map
            source_configs[source_config['domain']] = source_config
        print "var parserConfig = " + json.dumps(source_configs, indent=2)

if __name__ == '__main__':
    main()
