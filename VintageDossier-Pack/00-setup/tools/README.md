Tools (all CPU, no downloads except npm/pip packages and optional basemaps):
- env_report.sh, bench_render.sh: environment capabilities / render speed
- voice/trim.py, voice/align.py: pause trimming, forced word alignment (pocketsphinx)
- prep_prints.py: archival print treatment (+ aspect ratio)
- fetch_basemap.sh, make_map.py: historical borders (1700-2010) → map json for MapBase
- make_textures.py: desk/paper/map plate/grain (new --seed per video)
- make_sfx_dossier.py: synthesized SFX library; mix.py: voice + SFX from timeline.json
- contact_sheets.py: QA frame sheets; render_long.sh: chunked, resumable final render
