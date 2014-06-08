#!/usr/bin/env python
"""
Converts parser config csv file to parserConfig.js script.
"""

import csv
import re
import json


CSV_FILE = 'parserConfig.csv'

def main():
    with open(CSV_FILE, 'rb') as csvfile:
        reader = csv.reader(csvfile)
        headers = reader.next()
        cat_start_idx = headers.index('Category Labels') + 1
        cat_end_idx = len(headers) - 1
        
        source_configs = {}
        for row in reader:
            if row[0] == 'SKIP':
                break
            source_config = {}
            source_config['domain'] = row[0].replace("http://", "")
            source_config['label'] = row[1]

            if row[2]:
                source_config['defaultCategory'] = row[2]

            # Parse the category map.
            cat_tests = []
            base_path = row[3]
            for i in range(cat_start_idx, cat_end_idx+1):
                source_cats = row[i]
                canonical_cat = headers[i]
                if source_cats:
                    for source_cat in source_cats.split(','):
                        cat_re = base_path + source_cat.strip()
                        if cat_re:
                          cat_tests.append([cat_re, canonical_cat])
            source_config['categoryTests'] = cat_tests
            source_configs[source_config['domain']] = source_config

            # Include example urls for testing.
            source_config['exampleUrls'] = row[4].split('\n')

        # Print out parserConfig js.
        print "var parserConfig = " + json.dumps(source_configs, indent=2) + ';'

if __name__ == '__main__':
    main()
