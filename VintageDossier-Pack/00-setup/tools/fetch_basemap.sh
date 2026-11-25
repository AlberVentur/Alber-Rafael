#!/usr/bin/env bash
# usage: fetch_basemap.sh <year> [outdir=01-assets/maps]  -> downloads the closest historical world basemap (borders as they were).
# Data: "historical-basemaps" by Andre Ourednik (github.com/aourednik/historical-basemaps). Credit it in the video description.
set -e; Y="$1"; O="${2:-01-assets/maps}"; mkdir -p "$O"
YEARS="1700 1783 1800 1815 1880 1900 1914 1920 1930 1938 1945 1960 1994 2000 2010"
best=""; for y in $YEARS; do if [ "$y" -le "$Y" ]; then best=$y; fi; done; [ -z "$best" ] && best=1700
f="$O/world_$best.geojson"; [ -s "$f" ] || curl -sSL -m 60 -o "$f" "https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_$best.geojson"
echo "basemap for $Y -> $f (closest available year $best)"
