# Project STATUS
- Current stage: **Stage 5 (Assets)**: assets.md written, waiting for approval/images. Voice received early: in/vo.wav (from upload_01.mov, 180.0 s)
- Video slug: primeros-gigantes (viewer's own topic: "los primeros gigantes del mundo")
- Files: 02-videos/primeros-gigantes/research.md, script.md, script_spoken.txt, script_spoken_500.md (6 parts ≤500 chars -> vo_01..vo_06.mp3), assets.md
- Setup: SETUP OK (2026-11-25). 4 cores, no GPU, 16 GB RAM, ~0.133 s/frame at 1080p (about 40 min for a 10-min video)
- Web search: works
- Limits: huggingface.co blocked (not needed); fonts.googleapis.com 404 (fonts come from npm); container is temporary

## Stage 1: topic ideas
1. The Kakori Train Robbery (how 10 young men robbed the Raj's own treasury train) | 1925 British Raj | heist + rebels + hangings | yes
2. Who Killed Liaquat Ali Khan? (why Pakistan's first PM's murder was never solved) | 1951 Pakistan | assassination + unsolved mystery | yes
3. The Nanavati Case (how a naval officer's crime of passion ended jury trials in India) | 1959 Bombay | crime + courtroom twist | yes
4. The Football War (did a football match really start a war?) | 1969 Central America | absurd spark, real 100-hour war | yes
5. How the Falklands War Started (why Argentina gambled on 74 days of war) | 1982 South Atlantic | war origin + junta + empire | yes
6. The Gulf of Tonkin Incident (did the attack that escalated Vietnam even happen?) | 1964 Vietnam | war origin + disputed facts | yes
7. Kim Philby, the Third Man (how MI6's rising star spied for Moscow for 30 years) | 1934-1963 UK/USSR | spy betrayal | yes
8. The Great Train Robbery (how 15 men stole £2.6m from a mail train in 15 minutes) | 1963 England | heist + manhunt + escape | yes
9. D.B. Cooper (where did the man who jumped with $200,000 go?) | 1971 USA | unsolved mystery | yes
10. Operation Ajax (how the CIA and MI6 overthrew Iran's prime minister) | 1953 Iran | coup + spies | yes

## Decisions
- Viewer language: Spanish (all replies in Spanish)
- Topic: viewer's own. Angle chosen: case file "did giants exist? myth, exaggeration, hoax, science" (5 cases)
- Length: 3 min (viewer chose directly, skipping the Stage 3 menu). Script 467 words written / 489 spoken, Spanish. Est. render ~12 min
- Note for Stage 7: align.py is English-only (en-us model, ASCII regex) -> need Spanish pocketsphinx model or the approximate silence-map fallback
