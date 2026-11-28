# Voz con Edge TTS a través del proxy del servidor (usa su certificado). Uso: voz_edge.py VOZ "texto" salida.mp3
import sys, ssl, asyncio, edge_tts, edge_tts.communicate as c
c._SSL_CTX = ssl.create_default_context(cafile="/root/.ccr/ca-bundle.crt")
voz, texto, out = sys.argv[1:4]
asyncio.run(edge_tts.Communicate(texto, voz, rate="+12%").save(out))
