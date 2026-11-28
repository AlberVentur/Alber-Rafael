# Genera public/voz/voz.mp3 + palabras.json (tiempos por palabra) con Edge TTS. Uso: voz_guion.py VELOCIDAD
import ssl, asyncio, json, sys, edge_tts, edge_tts.communicate as c
c._SSL_CTX = ssl.create_default_context(cafile="/root/.ccr/ca-bundle.crt")
rate = sys.argv[1] if len(sys.argv) > 1 else "+18%"
t = open("GUION_texto.txt").read().replace("\n", " ")
async def m():
    com = edge_tts.Communicate(t, "es-ES-AlvaroNeural", rate=rate, boundary="WordBoundary")
    W = []
    with open("public/voz/voz.mp3", "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio": f.write(ch["data"])
            elif ch["type"] == "WordBoundary":
                W.append({"w": ch["text"], "t0": round(ch["offset"]/1e7, 3), "t1": round((ch["offset"]+ch["duration"])/1e7, 3)})
    json.dump(W, open("public/voz/palabras.json", "w"), ensure_ascii=False, indent=0)
    print(rate, "ultima palabra termina en", W[-1]["t1"], "s;", len(W), "palabras")
asyncio.run(m())
