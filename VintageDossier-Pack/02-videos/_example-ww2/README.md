# Example: "How WW2 began" (approved calibration, 16.5 s)
Reference implementation of the locked style. **Study it, don't copy its layout.** Files:
- `World.tsx`: one continuous world: date card → ship print (labels, red circle, fire shake) → print shrinks aside →
  barrier print lands → camera arcs onto a 1938 map (Germany red glow, Poland blue glow, arrows, tanks, bombers, bursts) →
  pull back: leaders' prints pinned on the map, strings to Warsaw, WAR DECLARED stamp.
- `timeline.json`: events/SFX in seconds (mix.py reads it). `words.json`: aligned voice.
Notes for reuse: it was written before `MapBase/mapXY` existed, so it hardcodes its projection (`deg()`) and imports
`public/map1938.json`. New videos should use `MapBase` + `make_map.py` output. Photos are not included (viewer-owned).
Script: "September 1st, 1939. Before dawn, an old German battleship opens fire on a Polish outpost. By sunrise, Germany
pours across the border. Two days later, Britain and France declare war."
