const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+__dirname+'/escena.html');
const ts=process.argv.slice(2).map(Number);
for(const t of ts){await p.evaluate(t=>render(t),t);await p.screenshot({path:`/tmp/claude-0/-home-user-Alber-Rafael/ca36680a-8257-5e1a-a884-f67c6ce779f9/scratchpad/p_${t}.png`});}
await b.close()})();
