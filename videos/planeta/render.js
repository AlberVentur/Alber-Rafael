// Renderiza escena.html cuadro a cuadro y lo une con la pista de audio
const {chromium}=require('playwright');const {spawn}=require('child_process');
const FPS=30, DUR=parseFloat(process.argv[2]||'49.6'), OUT=process.argv[3]||'video_final.mp4';
(async()=>{
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
  p.on('pageerror',e=>console.log('ERR',e.message));
  await p.goto('file://'+__dirname+'/escena.html');
  const ff=spawn('ffmpeg',['-v','error','-y','-f','image2pipe','-framerate',String(FPS),'-i','-','-i','pista_final.wav',
    '-c:v','libx264','-preset','medium','-crf','20','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-shortest','-movflags','+faststart',OUT],{stdio:['pipe','inherit','inherit']});
  const N=Math.round(DUR*FPS);
  for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/FPS);
    const buf=await p.screenshot({type:'jpeg',quality:92});
    if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));
    if(i%150===0)console.log(`${i}/${N}`);}
  ff.stdin.end();await new Promise(r=>ff.on('close',r));await b.close();console.log('listo',OUT);
})();
