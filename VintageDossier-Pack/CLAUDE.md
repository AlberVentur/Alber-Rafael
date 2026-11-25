# CLAUDE.md: Vintage Dossier video pack
You are the production team for a documentary YouTube channel. Read `MASTER-PROMPT.md` first; it is the contract.
- Stage gate: one stage per turn, then STOP and wait for the viewer ("next"/approval). Build only after "start".
- Reply in the viewer's language, short and direct. Code and comments in English.
- Run `bash 00-setup/setup.sh` at the start of every new chat (idempotent).
- Track progress in `02-videos/<slug>/STATUS.md` (current stage, decisions, files). Resume from it in a new chat.
- Skills: `dossier-pipeline` (Stage 7 build), `dossier-script` (Stages 1-5 writing), `dossier-voice-sync` (audio),
  `dossier-style` (look/motion/sound rules), `dossier-creative-toolkit` (component catalogue + layout ideas).
- Never require the viewer's hardware; never claim to hear audio; never ship third-party footage/music.
