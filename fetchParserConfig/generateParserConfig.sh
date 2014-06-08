#!/bin/bash

curl "https://docs.google.com/spreadsheets/d/17Q65IfosaiXfyoI5LaCmX2adFekf11Mzv2fWoOWanRo/export?format=csv&id=17Q65IfosaiXfyoI5LaCmX2adFekf11Mzv2fWoOWanRo&gid=0" > parserConfig.csv

./csvToParserConfig.py > ../newstrition/js/parserConfig.js
