#!/usr/bin/env python3
"""make_map.py <basemap.geojson> <out.json> --lon0 1 --lon1 39 --lat-top 59.6 [--lat-c 52.5] [--w 3840]
Projects historical borders (lat-scaled equirectangular) onto a WxH plate (H = 9/16 W) and writes
{w,h,proj:{lon0,latTop,c,k},shapes:{NAME:svgPath}} for the kit's MapBase / mapXY().
Choose lon0/lon1/lat-top so the story region sits in the middle with margin (camera needs room to glide)."""
import json, math, argparse
ap = argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('out')
ap.add_argument('--lon0', type=float, required=True); ap.add_argument('--lon1', type=float, required=True); ap.add_argument('--lat-top', type=float, required=True)
ap.add_argument('--lat-c', type=float, default=None); ap.add_argument('--w', type=int, default=3840)
a = ap.parse_args(); W = a.w; H = round(W * 9 / 16)
latc = a.lat_c if a.lat_c is not None else a.lat_top - (a.lon1 - a.lon0) * 0.3
c = math.cos(math.radians(latc)); k = W / ((a.lon1 - a.lon0) * c); latBot = a.lat_top - H / k
P = lambda lon, lat: (round((lon - a.lon0) * c * k, 1), round((a.lat_top - lat) * k, 1))
g = json.load(open(a.src)); shapes = {}
def rings(geom):
    if geom is None: return []
    return geom['coordinates'] if geom['type'] == 'Polygon' else [r for poly in geom['coordinates'] for r in poly]
for f in g['features']:
    name = (f.get('properties') or {}).get('NAME') or 'unnamed'
    for r in rings(f.get('geometry')):
        xs = [p[0] for p in r]; ys = [p[1] for p in r]
        if max(xs) < a.lon0 - 5 or min(xs) > a.lon1 + 5 or max(ys) < latBot - 5 or min(ys) > a.lat_top + 5 or len(r) < 4: continue
        shapes.setdefault(name, []).append('M' + 'L'.join('%s,%s' % P(*p) for p in r) + 'Z')
json.dump({'w': W, 'h': H, 'proj': {'lon0': a.lon0, 'latTop': a.lat_top, 'c': c, 'k': k}, 'shapes': {n: ' '.join(v) for n, v in shapes.items()}}, open(a.out, 'w'))
print(f'map {W}x{H}, lat {latBot:.1f}..{a.lat_top}, {len(shapes)} areas:', ', '.join(sorted(shapes))[:900])
