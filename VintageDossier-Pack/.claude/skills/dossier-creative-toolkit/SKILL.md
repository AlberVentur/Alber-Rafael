---
name: dossier-creative-toolkit
description: Catalogue of the Vintage Dossier Remotion components (kit.tsx) with props, plus layout and camera recipes for crime, war, colonial and disaster stories. Use while planning and coding Stage 7.
---
# Components in `src/styles/dossier/kit.tsx` (import from "../../styles/dossier/kit")
World & camera
- `WorldCam keys={K[]}`: camera over world px; `K={t,x,y,z,r}`; motion blur automatic. `WorldDesk w h`: desk under everything.
- `Gate shakes={[sec,...]}`: gate weave + impact shake (screen space). `FilmLayer vignette`: grain/flicker/dust/vignette (top).
- `BurnFlash t dur`: light-burn (chapter changes, gunfire). `Shutter t`: 2-frame black.
- `kf(keys,s,prop)`: sample any keyframe track. `useSec()` → `{f,s,fps,fr}`; `useProg(t,dur)` → 0..1.
Prints & paper
- `WPrint src aspect w keys={K[] with s,r} t0 from=[dx,dy,drot]`: archival print in world space; children are local
  (labels, pen marks). Shrink-aside = add keys `{t:x-1, ...same}, {t:x-0.2, x:.., y:.., s:0.55, r:-6}`.
- `printBox(w,aspect)` → `{b,W,H}`; `pinAt(w,aspect,keys,s)` → world pin point (for strings).
- `TypeLabel text t cps size style bar`: typewriter (tape bar or bare). `Roll from to t t2`: rolling number.
- `PenPath d t dur width` + `wobblyEllipse(cx,cy,rx,ry,seed)`: red pen. `StringLine a b t dur sag`. `Stamp text t x y rot size`. `Pin x y`.
Maps
- `MapBase map x y s land svg children`: map sheet (data from make_map.py, import the json). `mapXY(map,lon,lat)` → plate px.
- `CountryFocus d t rgb id` with `NATION.aggressor|defender|ally|neutral`: glow outline + wash.
- `Arrow a c b t dur width` (quadratic, arrowhead) · `RouteLine d t dur` (dashed travel) · `PulseMarker x y t` · `MapText x y text`.
- Icons (plate px, pop-in): `TankIcon a c b t t2` (rolls along route) · `PlaneIcon a b t t2` · `ShipIcon x y t` ·
  `BurstIcon x y t size` · `MissileIcon a b t t2 arc` (modern topics) · `FireIcon x y t` · `TroopsIcon a b t t2`.

# Recipes
- **War origin**: date card → hero print of the trigger (labels name/role/date) → red circle on the detail → shrink aside →
  second print (reaction) → fly to era map: aggressor glow, arrows + tanks/planes, defender glow, bursts on cities →
  pull back: leaders' prints pinned on the map edge, strings to the capital pin → stamp.
- **Crime case**: typewriter case header (CASE NO. / DATE / CITY) → victim/suspect prints with tape labels → evidence
  board strings → city/region map with RouteLine (escape route) + PulseMarkers → document print with red underline →
  verdict stamp (GUILTY / UNSOLVED / CASE CLOSED).
- **Colonial / Raj**: 1880/1900/1914/1930 basemap of South Asia (lon 60-100, lat-top 38) → British Raj area in aggressor or
  neutral tint, princely states as faint labels → event cities as PulseMarkers → telegram/document prints → date cards.
- **Incident / disaster**: big number card rolling (casualties/money) → location map PulseMarker + FireIcon →
  sequence of prints shrinking aside along a timeline string (grammar 11) → strikethrough reveal of a myth.
- **80s-90s**: prints `--color` (faded colour), labels with exact dates, maps from the 1994 basemap.
Map framing tips: keep the story region in the middle 50 % of the plate; place map sheets at least 600 px away from prints in
the world so glides feel like travel; country names in make_map output follow the basemap (e.g. "USSR", "British Raj").
