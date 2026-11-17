var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Ic="170";var sf=0,Ch=1,rf=2;var Bd=1,Dc=2,ci=3,Ii=0,Qt=1,Ft=2,Jn=0,Fi=1,mn=2,Fh=3,Ph=4,of=5,Qi=100,af=101,lf=102,cf=103,hf=104,df=200,uf=201,ff=202,pf=203,ll=204,cl=205,mf=206,gf=207,Ef=208,yf=209,vf=210,_f=211,Af=212,Mf=213,Sf=214,hl=0,dl=1,ul=2,Hs=3,fl=4,pl=5,ml=6,gl=7,Hd=0,bf=1,xf=2,Qn=0,Tf=1,wf=2,Rf=3,Cf=4,Ff=5,Pf=6,If=7;var zd=300,zs=301,ks=302,El=303,yl=304,ia=306,cn=1e3,ji=1001,vl=1002,wn=1003,Df=1004;var Jr=1005;var Zn=1006,Ta=1007;var es=1008;var fi=1009,kd=1010,Gd=1011,Fr=1012,Lc=1013,pi=1014,$n=1015,yn=1016,Uc=1017,Nc=1018,Gs=1020,Vd=35902,Wd=1021,Xd=1022,Bn=1023,qd=1024,Yd=1025,Ns=1026,Vs=1027,Oc=1028,Bc=1029,Zd=1030,Hc=1031;var zc=1033,To=33776,wo=33777,Ro=33778,Co=33779,_l=35840,Al=35841,Ml=35842,Sl=35843,bl=36196,xl=37492,Tl=37496,wl=37808,Rl=37809,Cl=37810,Fl=37811,Pl=37812,Il=37813,Dl=37814,Ll=37815,Ul=37816,Nl=37817,Ol=37818,Bl=37819,Hl=37820,zl=37821,Fo=36492,kl=36494,Gl=36495,$d=36283,Vl=36284,Wl=36285,Xl=36286;var Po=2300,ql=2301,wa=2302,Ih=2400,Dh=2401,Lh=2402;var Lf=3200,tr=3201;var Jd=0,Uf=1,Ri="",kt="srgb",Oi="srgb-linear",sa="linear",bt="srgb";var gs=7680;var Uh=519,Nf=512,Of=513,Bf=514,Qd=515,Hf=516,zf=517,kf=518,Gf=519,Yl=35044;var Nh="300 es",di=2e3,Io=2001,Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,Do=180/Math.PI;function Pi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function Vf(n,e){return(n%e+e)%e}function Ca(n,e,t){return(1-t)*n+t*e}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],D=s[2],R=s[5],w=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*_+l*R,r[6]=o*p+a*y+l*w,r[1]=c*E+h*v+d*D,r[4]=c*m+h*_+d*R,r[7]=c*p+h*y+d*w,r[2]=u*E+f*v+g*D,r[5]=u*m+f*_+g*R,r[8]=u*p+f*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fa=new Ke;function Kd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Lo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wf(){let n=Lo("canvas");return n.style.display="block",n}var Oh={};function xr(n){n in Oh||(Oh[n]=!0,console.warn(n))}function Xf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function qf(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yf(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var mt={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(n.r=ui(n.r),n.g=ui(n.g),n.b=ui(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(n.r=Os(n.r),n.g=Os(n.g),n.b=Os(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ri?sa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bh=[.64,.33,.3,.6,.15,.06],Hh=[.2126,.7152,.0722],zh=[.3127,.329],kh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Oi]:{primaries:Bh,whitePoint:zh,transfer:sa,toXYZ:kh,fromXYZ:Gh,luminanceCoefficients:Hh,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:Bh,whitePoint:zh,transfer:bt,toXYZ:kh,fromXYZ:Gh,luminanceCoefficients:Hh,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});var Es,Zl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Lo("canvas")),Es.width=e.width,Es.height=e.height;let i=Es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zf=0,Uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pa(s[o].image)):r.push(Pa(s[o]))}else r=Pa(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $f=0,gn=class n extends Di{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ji,s=ji,r=Zn,o=es,a=Bn,l=fi,c=n.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Pi(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=zd;gn.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,D=(p+1)/2,R=(h+u)/4,w=(d+E)/4,F=(g+m)/4;return _>y&&_>D?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=w/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=F/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=w/r,s=F/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$l=class extends Di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends $l{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},No=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),R=Math.atan2(D,p*v);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}let y=a*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new I,Vh=new Li,mi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),Kr.subVectors(this.max,mr),ys.subVectors(e.a,mr),vs.subVectors(e.b,mr),_s.subVectors(e.c,mr),Mi.subVectors(vs,ys),Si.subVectors(_s,vs),Wi.subVectors(ys,_s);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Wi.y,Wi.x,0];return!Da(t,ys,vs,_s,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,ys,vs,_s,Kr))?!1:(jr.crossVectors(Mi,Si),t=[jr.x,jr.y,jr.z],Da(t,ys,vs,_s,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},si=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,Qr=new mi,ys=new I,vs=new I,_s=new I,Mi=new I,Si=new I,Wi=new I,mr=new I,Kr=new I,jr=new I,Xi=new I;function Da(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xi.fromArray(n,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),h=i.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Jf=new mi,gr=new I,La=new I,Ui=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Jf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(La)),this.expandByPoint(gr.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new I,Ua=new I,eo=new I,bi=new I,Na=new I,to=new I,Oa=new I,Oo=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ua.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Ua);let r=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=bi.dot(this.direction),l=-bi.dot(eo),c=bi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ua).addScaledVector(eo,u),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,s,r){Na.subVectors(t,e),to.subVectors(i,e),Oa.crossVectors(Na,to);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);let l=a*this.direction.dot(to.crossVectors(bi,to));if(l<0)return null;let c=a*this.direction.dot(Na.cross(bi));if(c<0||l+c>o)return null;let h=-a*bi.dot(Oa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,Kf)}lookAt(e,t,i){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),xi.crossVectors(i,xn),xi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),xi.crossVectors(i,xn)),xi.normalize(),no.crossVectors(xn,xi),s[0]=xi.x,s[4]=no.x,s[8]=xn.x,s[1]=xi.y,s[5]=no.y,s[9]=xn.y,s[2]=xi.z,s[6]=no.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],v=i[3],_=i[7],y=i[11],D=i[15],R=s[0],w=s[4],F=s[8],S=s[12],A=s[1],P=s[5],z=s[9],k=s[13],X=s[2],j=s[6],Z=s[10],ae=s[14],Y=s[3],ue=s[7],_e=s[11],Oe=s[15];return r[0]=o*R+a*A+l*X+c*Y,r[4]=o*w+a*P+l*j+c*ue,r[8]=o*F+a*z+l*Z+c*_e,r[12]=o*S+a*k+l*ae+c*Oe,r[1]=h*R+d*A+u*X+f*Y,r[5]=h*w+d*P+u*j+f*ue,r[9]=h*F+d*z+u*Z+f*_e,r[13]=h*S+d*k+u*ae+f*Oe,r[2]=g*R+E*A+m*X+p*Y,r[6]=g*w+E*P+m*j+p*ue,r[10]=g*F+E*z+m*Z+p*_e,r[14]=g*S+E*k+m*ae+p*Oe,r[3]=v*R+_*A+y*X+D*Y,r[7]=v*w+_*P+y*j+D*ue,r[11]=v*F+_*z+y*Z+D*_e,r[15]=v*S+_*k+y*ae+D*Oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],E=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+E*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],E=e[13],m=e[14],p=e[15],v=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*E*c-g*d*c+g*a*f-o*E*f-h*a*p+o*d*p,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,R=t*v+i*_+s*y+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=v*w,e[1]=(E*u*r-d*m*r-E*s*f+i*m*f+d*s*p-i*u*p)*w,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*w,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*w,e[4]=_*w,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*w,e[8]=y*w,e[9]=(g*d*r-h*E*r-g*i*f+t*E*f+h*i*p-t*d*p)*w,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*p+t*a*p)*w,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*f-t*a*f)*w,e[12]=D*w,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*w,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*w,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,E=o*h,m=o*d,p=a*d,v=l*c,_=l*h,y=l*d,D=i.x,R=i.y,w=i.z;return s[0]=(1-(E+p))*D,s[1]=(f+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(u+p))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+_)*w,s[9]=(m-v)*w,s[10]=(1-(u+E))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let c=1/r,h=1/o,d=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=di){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(a===di)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Io)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=di){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,f=(i+s)*h,g,E;if(a===di)g=(o+r)*d,E=-2*d;else if(a===Io)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},As=new I,Nn=new wt,Qf=new I(0,0,0),Kf=new I(1,1,1),xi=new I,no=new I,xn=new I,Wh=new wt,Xh=new Li,Kn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jf=0,qh=new I,Ms=new Li,oi=new wt,io=new I,Er=new I,ep=new I,tp=new Li,Yh=new I(1,0,0),Zh=new I(0,1,0),$h=new I(0,0,1),Jh={type:"added"},np={type:"removed"},Ss={type:"childadded",child:null},Ba={type:"childremoved",child:null},Wt=class n extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Kn,i=new Li,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ke}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?io.copy(e):io.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Er,io,this.up):oi.lookAt(io,Er,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(oi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(np),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new I,ai=new I,Ha=new I,li=new I,bs=new I,xs=new I,Qh=new I,za=new I,ka=new I,Ga=new I,Va=new Tt,Wa=new Tt,Xa=new Tt,Ci=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){On.subVectors(s,t),ai.subVectors(i,t),Ha.subVectors(e,t);let o=On.dot(On),a=On.dot(ai),l=On.dot(Ha),c=ai.dot(ai),h=ai.dot(Ha),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Va.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Va.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,i),Xa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),ai.subVectors(e,t),On.cross(ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;bs.subVectors(s,i),xs.subVectors(r,i),za.subVectors(e,i);let l=bs.dot(za),c=xs.dot(za);if(l<=0&&c<=0)return t.copy(i);ka.subVectors(e,s);let h=bs.dot(ka),d=xs.dot(ka);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(bs,o);Ga.subVectors(e,r);let f=bs.dot(Ga),g=xs.dot(Ga);if(g>=0&&f<=g)return t.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(xs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Qh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Qh,a);let p=1/(m+E+u);return o=E*p,a=u*p,t.copy(i).addScaledVector(bs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},so={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var he=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=Vf(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let i=jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return mt.fromWorkingColorSpace(ln.copy(this),e),Math.round(nn(ln.r*255,0,255))*65536+Math.round(nn(ln.g*255,0,255))*256+Math.round(nn(ln.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=kt){mt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(so);let i=Ca(Ti.h,so.h,t),s=Ca(Ti.s,so.s,t),r=Ca(Ti.l,so.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new he;he.NAMES=jd;var ip=0,gi=class extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Pi(),this.name="",this.blending=Fi,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ll&&(i.blendSrc=this.blendSrc),this.blendDst!==cl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tt=class extends gi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new I,ro=new se,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yl&&(e.usage=this.usage),e}};var Ho=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zo=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var gt=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},sp=0,Fn=new wt,Ya=new Wt,Ts=new I,Tn=new mi,yr=new mi,Jt=new I,Xt=class n extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?zo:Ho)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Tn.min,yr.min),Tn.expandByPoint(Jt),Jt.addVectors(Tn.max,yr.max),Tn.expandByPoint(Jt)):(Tn.expandByPoint(yr.min),Tn.expandByPoint(yr.max))}Tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Jt.add(Ts)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new I,l[F]=new I;let c=new I,h=new I,d=new I,u=new se,f=new se,g=new se,E=new I,m=new I;function p(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,z=A.count;for(let k=P,X=P+z;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let _=new I,y=new I,D=new I,R=new I;function w(F){D.fromBufferAttribute(s,F),R.copy(D);let S=a[F];_.copy(S),_.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(R,S);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,z=A.count;for(let k=P,X=P+z;k<X;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new wt,qi=new Oo,oo=new Ui,jh=new I,ao=new I,lo=new I,co=new I,Za=new I,ho=new I,ed=new I,uo=new I,H=class extends Wt{constructor(e=new Xt,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Za.fromBufferAttribute(d,e),o?ho.addScaledVector(Za,h):ho.addScaledVector(Za.sub(t),h))}t.add(ho)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(oo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(oo,jh)===null||qi.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Kh),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let R=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);s=fo(this,p,e,i,c,h,d,R,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=fo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let R=y,w=y+1,F=y+2;s=fo(this,p,e,i,c,h,d,R,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=m,_=m+1,y=m+2;s=fo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function rp(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ii,a),l===null)return null;uo.copy(a),uo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:n}}function fo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ao),n.getVertexPosition(l,lo),n.getVertexPosition(c,co);let h=rp(n,e,t,i,ao,lo,co,ed);if(h){let d=new I;Ci.getBarycoord(ed,ao,lo,co,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,a,l,c,d,new se)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,a,l,c,d,new se)),o&&(h.normal=Ci.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Ci.getNormal(ao,lo,co,u.normal),h.face=u,h.barycoord=d}return h}var En=class n extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(E,m,p,v,_,y,D,R,w,F,S){let A=y/w,P=D/F,z=y/2,k=D/2,X=R/2,j=w+1,Z=F+1,ae=0,Y=0,ue=new I;for(let _e=0;_e<Z;_e++){let Oe=_e*P-k;for(let st=0;st<j;st++){let Ct=st*A-z;ue[E]=Ct*v,ue[m]=Oe*_,ue[p]=X,c.push(ue.x,ue.y,ue.z),ue[E]=0,ue[m]=0,ue[p]=R>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(st/w),d.push(1-_e/F),ae+=1}}for(let _e=0;_e<F;_e++)for(let Oe=0;Oe<w;Oe++){let st=u+Oe+j*_e,Ct=u+Oe+j*(_e+1),J=u+(Oe+1)+j*(_e+1),le=u+(Oe+1)+j*_e;l.push(st,Ct,le),l.push(Ct,J,le),Y+=6}a.addGroup(f,Y,S),f+=Y,u+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=Ws(n[t]);for(let s in i)e[s]=i[s]}return e}function op(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var nr={clone:Ws,merge:fn},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends gi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=op(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ko=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new I,td=new se,nd=new se,sn=class extends ko{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,Rs=1,Ql=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(ws,Rs,e,t);s.layers=this.layers,this.add(s);let r=new sn(ws,Rs,e,t);r.layers=this.layers,this.add(r);let o=new sn(ws,Rs,e,t);o.layers=this.layers,this.add(o);let a=new sn(ws,Rs,e,t);a.layers=this.layers,this.add(a);let l=new sn(ws,Rs,e,t);l.layers=this.layers,this.add(l);let c=new sn(ws,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Go=class extends gn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kl=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Go(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new En(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Jn});r.uniforms.tEquirect.value=t;let o=new H(s,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=Zn),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},$a=new I,cp=new I,hp=new Ke,hi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=$a.subVectors(i,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta($a),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hp.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Ui,po=new I,Pr=class{constructor(e=new hi,t=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=di){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-f,y-p).normalize(),i[1].setComponents(l+r,u+c,m+f,y+p).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),t===di)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(t===Io)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xe=class n extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),D=v+1+c*(p+1),R=v+1+c*p;f.push(_,y,R),f.push(y,D,R)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(E,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ym=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:up,alphahash_pars_fragment:fp,alphamap_fragment:pp,alphamap_pars_fragment:mp,alphatest_fragment:gp,alphatest_pars_fragment:Ep,aomap_fragment:yp,aomap_pars_fragment:vp,batching_pars_vertex:_p,batching_vertex:Ap,begin_vertex:Mp,beginnormal_vertex:Sp,bsdfs:bp,iridescence_fragment:xp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Rp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Fp,color_fragment:Pp,color_pars_fragment:Ip,color_pars_vertex:Dp,color_vertex:Lp,common:Up,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Op,displacementmap_pars_vertex:Bp,displacementmap_vertex:Hp,emissivemap_fragment:zp,emissivemap_pars_fragment:kp,colorspace_fragment:Gp,colorspace_pars_fragment:Vp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:s0,envmap_vertex:Zp,fog_vertex:$p,fog_pars_vertex:Jp,fog_fragment:Qp,fog_pars_fragment:Kp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:e0,lights_lambert_fragment:t0,lights_lambert_pars_fragment:n0,lights_pars_begin:i0,lights_toon_fragment:r0,lights_toon_pars_fragment:o0,lights_phong_fragment:a0,lights_phong_pars_fragment:l0,lights_physical_fragment:c0,lights_physical_pars_fragment:h0,lights_fragment_begin:d0,lights_fragment_maps:u0,lights_fragment_end:f0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:E0,map_fragment:y0,map_pars_fragment:v0,map_particle_fragment:_0,map_particle_pars_fragment:A0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:S0,morphinstance_vertex:b0,morphcolor_vertex:x0,morphnormal_vertex:T0,morphtarget_pars_vertex:w0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:F0,normal_pars_fragment:P0,normal_pars_vertex:I0,normal_vertex:D0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:B0,opaque_fragment:H0,packing:z0,premultiplied_alpha_fragment:k0,project_vertex:G0,dithering_fragment:V0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:Z0,shadowmap_vertex:$0,shadowmask_pars_fragment:J0,skinbase_vertex:Q0,skinning_pars_vertex:K0,skinning_vertex:j0,skinnormal_vertex:em,specularmap_fragment:tm,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:hm,background_vert:dm,background_frag:um,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:Em,depth_frag:ym,distanceRGBA_vert:vm,distanceRGBA_frag:_m,equirect_vert:Am,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:bm,meshbasic_vert:xm,meshbasic_frag:Tm,meshlambert_vert:wm,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Fm,meshnormal_vert:Pm,meshnormal_frag:Im,meshphong_vert:Dm,meshphong_frag:Lm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:Hm,points_frag:zm,shadow_vert:km,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},ce={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qn={basic:{uniforms:fn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:fn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new he(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:fn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:fn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:fn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new he(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:fn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:fn([ce.points,ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:fn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:fn([ce.common,ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:fn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:fn([ce.sprite,ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:fn([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:fn([ce.lights,ce.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};qn.physical={uniforms:fn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var mo={r:0,b:0,g:0},Zi=new Kn,Xm=new wt;function qm(n,e,t,i,s,r,o){let a=new he(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function E(v){let _=!1,y=g(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===ia)?(h===void 0&&(h=new H(new En(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ws(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(_.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Zi)),h.material.toneMapped=mt.getTransfer(y.colorSpace)!==bt,(d!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new H(new xe(2,2),new en({name:"BackgroundMaterial",uniforms:Ws(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=mt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(mo,eu(n)),i.buffers.color.setClear(mo.r,mo.g,mo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:E,addToRenderList:m}}function Ym(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,z,k,X){let j=!1,Z=d(k,z,P);r!==Z&&(r=Z,c(r.object)),j=f(A,k,z,X),j&&g(A,k,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(A,P,z,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,z){let k=z.wireframe===!0,X=i[A.id];X===void 0&&(X={},i[A.id]=X);let j=X[P.id];j===void 0&&(j={},X[P.id]=j);let Z=j[k];return Z===void 0&&(Z=u(l()),j[k]=Z),Z}function u(A){let P=[],z=[],k=[];for(let X=0;X<t;X++)P[X]=0,z[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:A,attributes:{},index:null}}function f(A,P,z,k){let X=r.attributes,j=P.attributes,Z=0,ae=z.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let _e=X[Y],Oe=j[Y];if(Oe===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Oe=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Oe=A.instanceColor)),_e===void 0||_e.attribute!==Oe||Oe&&_e.data!==Oe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==k}function g(A,P,z,k){let X={},j=P.attributes,Z=0,ae=z.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let _e=j[Y];_e===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor));let Oe={};Oe.attribute=_e,_e&&_e.data&&(Oe.data=_e.data),X[Y]=Oe,Z++}r.attributes=X,r.attributesNum=Z,r.index=k}function E(){let A=r.newAttributes;for(let P=0,z=A.length;P<z;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){let z=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;z[A]=1,k[A]===0&&(n.enableVertexAttribArray(A),k[A]=1),X[A]!==P&&(n.vertexAttribDivisor(A,P),X[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==A[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function _(A,P,z,k,X,j,Z){Z===!0?n.vertexAttribIPointer(A,P,z,X,j):n.vertexAttribPointer(A,P,z,k,X,j)}function y(A,P,z,k){E();let X=k.attributes,j=z.getAttributes(),Z=P.defaultAttributeValues;for(let ae in j){let Y=j[ae];if(Y.location>=0){let ue=X[ae];if(ue===void 0&&(ae==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),ae==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){let _e=ue.normalized,Oe=ue.itemSize,st=e.get(ue);if(st===void 0)continue;let Ct=st.buffer,J=st.type,le=st.bytesPerElement,Fe=J===n.INT||J===n.UNSIGNED_INT||ue.gpuType===Lc;if(ue.isInterleavedBufferAttribute){let fe=ue.data,We=fe.stride,$e=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let rt=0;rt<Y.locationSize;rt++)p(Y.location+rt,fe.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let rt=0;rt<Y.locationSize;rt++)_(Y.location+rt,Oe/Y.locationSize,J,_e,We*le,($e+Oe/Y.locationSize*rt)*le,Fe)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)p(Y.location+fe,ue.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<Y.locationSize;fe++)m(Y.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let fe=0;fe<Y.locationSize;fe++)_(Y.location+fe,Oe/Y.locationSize,J,_e,Oe*le,Oe/Y.locationSize*fe*le,Fe)}}else if(Z!==void 0){let _e=Z[ae];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(Y.location,_e);break;case 3:n.vertexAttrib3fv(Y.location,_e);break;case 4:n.vertexAttrib4fv(Y.location,_e);break;default:n.vertexAttrib1fv(Y.location,_e)}}}}v()}function D(){F();for(let A in i){let P=i[A];for(let z in P){let k=P[z];for(let X in k)h(k[X].object),delete k[X];delete P[z]}delete i[A]}}function R(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let z in P){let k=P[z];for(let X in k)h(k[X].object),delete k[X];delete P[z]}delete i[A.id]}function w(A){for(let P in i){let z=i[P];if(z[A.id]===void 0)continue;let k=z[A.id];for(let X in k)h(k[X].object),delete k[X];delete z[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Zm(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $m(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let F=w===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==fi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!F)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function Jm(n){let e=this,t=null,i=0,s=!1,r=!1,o=new hi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let D=0;D!==_;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function Qm(n){let e=new WeakMap;function t(o,a){return a===El?o.mapping=zs:a===yl&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===El||a===yl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Kl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Xs=class extends ko{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=4,id=[.125,.215,.35,.446,.526,.582],Ki=20,Ja=new Xs,sd=new he,Qa=null,Ka=0,ja=0,el=!1,Ji=(1+Math.sqrt(5))/2,Cs=1/Ji,rd=[new I(-Ji,Cs,0),new I(Ji,Cs,0),new I(-Cs,0,Ji),new I(Cs,0,Ji),new I(0,Ji,-Cs),new I(0,Ji,Cs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Qa=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,Ka,ja),this._renderer.xr.enabled=el,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:yn,format:Bn,colorSpace:Oi,depthBuffer:!1},s=od(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(r)),this._blurMaterial=jm(r,e,t)}return s}_compileMaterial(e){let t=new H(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,s){let a=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(sd),h.toneMapping=Qn,h.autoClear=!1;let f=new tt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new H(new En,f),E=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,E=!0):(f.color.copy(sd),E=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;go(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===zs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;go(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ja)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rd[(s-r-1)%rd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new H(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let p=[],v=0;for(let w=0;w<Ki;++w){let F=w/E,S=Math.exp(-F*F/2);p.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],D=3*y*(s>_-Us?s-_+Us:0),R=4*(this._cubeSize-y);go(t,D,R,3*y,2*y),l.setRenderTarget(t),l.render(d,Ja)}};function Km(n){let e=[],t=[],i=[],s=n,r=n-Us+1+id.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Us?l=id[o-n+Us-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,v=new Float32Array(E*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let R=0;R<f;R++){let w=R%3*2/3-1,F=R>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];v.set(S,E*g*R),_.set(u,m*g*R);let A=[R,R,R,R,R,R];y.set(A,p*g*R)}let D=new Xt;D.setAttribute("position",new Kt(v,E)),D.setAttribute("uv",new Kt(_,m)),D.setAttribute("faceIndex",new Kt(y,p)),e.push(D),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function od(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function go(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function jm(n,e,t){let i=new Float32Array(Ki),s=new I(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ad(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ld(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===El||l===yl,h=l===zs||l===ks;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Vo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Vo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function t1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function n1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let v=f.array;E=f.version;for(let _=0,y=v.length;_<y;_+=3){let D=v[_+0],R=v[_+1],w=v[_+2];u.push(D,R,R,w,w,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let D=_+0,R=_+1,w=_+2;u.push(D,R,R,w,w,D)}}else return;let m=new(Kd(u)?zo:Ho)(u,1);m.version=E;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function i1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,E,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*E[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function s1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r1(n,e,t){let i=new WeakMap,s=new Tt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*D*4*d),w=new No(R,y,D,d);w.type=$n,w.needsUpdate=!0;let F=_*4;for(let A=0;A<d;A++){let P=m[A],z=p[A],k=v[A],X=y*D*4*A;for(let j=0;j<P.count;j++){let Z=j*F;f===!0&&(s.fromBufferAttribute(P,j),R[X+Z+0]=s.x,R[X+Z+1]=s.y,R[X+Z+2]=s.z,R[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(z,j),R[X+Z+4]=s.x,R[X+Z+5]=s.y,R[X+Z+6]=s.z,R[X+Z+7]=0),E===!0&&(s.fromBufferAttribute(k,j),R[X+Z+8]=s.x,R[X+Z+9]=s.y,R[X+Z+10]=s.z,R[X+Z+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new se(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function o1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var qs=class extends gn{constructor(e,t,i,s,r,o,a,l,c,h=Ns){if(h!==Ns&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ns&&(i=pi),i===void 0&&h===Vs&&(i=Gs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nu=new gn,cd=new qs(1,1),iu=new No,su=new Jl,ru=new Go,hd=[],dd=[],ud=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function ir(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function $t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ra(n,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function a1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),$t(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),$t(t,e)}}function h1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),$t(t,e)}}function d1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;pd.set(i),n.uniformMatrix2fv(this.addr,!1,pd),$t(t,i)}}function u1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),$t(t,i)}}function f1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),$t(t,i)}}function p1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),$t(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),$t(t,e)}}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),$t(t,e)}}function y1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),$t(t,e)}}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),$t(t,e)}}function A1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),$t(t,e)}}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(cd.compareFunction=Qd,r=cd):r=nu,t.setTexture2D(e||r,s)}function S1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||su,s)}function b1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ru,s)}function x1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||iu,s)}function T1(n){switch(n){case 5126:return a1;case 35664:return l1;case 35665:return c1;case 35666:return h1;case 35674:return d1;case 35675:return u1;case 35676:return f1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return E1;case 5125:return y1;case 36294:return v1;case 36295:return _1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return x1}}function w1(n,e){n.uniform1fv(this.addr,e)}function R1(n,e){let t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function C1(n,e){let t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function F1(n,e){let t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function P1(n,e){let t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I1(n,e){let t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function D1(n,e){let t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function L1(n,e){n.uniform1iv(this.addr,e)}function U1(n,e){n.uniform2iv(this.addr,e)}function N1(n,e){n.uniform3iv(this.addr,e)}function O1(n,e){n.uniform4iv(this.addr,e)}function B1(n,e){n.uniform1uiv(this.addr,e)}function H1(n,e){n.uniform2uiv(this.addr,e)}function z1(n,e){n.uniform3uiv(this.addr,e)}function k1(n,e){n.uniform4uiv(this.addr,e)}function G1(n,e,t){let i=this.cache,s=e.length,r=ra(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||nu,r[o])}function V1(n,e,t){let i=this.cache,s=e.length,r=ra(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||su,r[o])}function W1(n,e,t){let i=this.cache,s=e.length,r=ra(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ru,r[o])}function X1(n,e,t){let i=this.cache,s=e.length,r=ra(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),$t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||iu,r[o])}function q1(n){switch(n){case 5126:return w1;case 35664:return R1;case 35665:return C1;case 35666:return F1;case 35674:return P1;case 35675:return I1;case 35676:return D1;case 5124:case 35670:return L1;case 35667:case 35671:return U1;case 35668:case 35672:return N1;case 35669:case 35673:return O1;case 5125:return B1;case 36294:return H1;case 36295:return z1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}var jl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T1(t.type)}},ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q1(t.type)}},tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},tl=/(\w+)(\])?(\[|\.)?/g;function md(n,e){n.seq.push(e),n.map[e.id]=e}function Y1(n,e,t){let i=n.name,s=i.length;for(tl.lastIndex=0;;){let r=tl.exec(i),o=tl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){md(t,c===void 0?new jl(a,n,e):new ec(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new tc(a),md(t,d)),t=d}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Y1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function gd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Z1=37297,$1=0;function J1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Ed=new Ke;function Q1(n){mt._getMatrix(Ed,mt.workingColorSpace,n);let e=`mat3( ${Ed.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case sa:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+J1(n.getShaderSource(e),o)}else return s}function K1(n,e){let t=Q1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j1(n,e){let t;switch(e){case Tf:t="Linear";break;case wf:t="Reinhard";break;case Rf:t="Cineon";break;case Cf:t="ACESFilmic";break;case Pf:t="AgX";break;case If:t="Neutral";break;case Ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eo=new I;function e2(){mt.getLuminanceCoefficients(Eo);let n=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function n2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Tr(n){return n!==""}function vd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var s2=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(n){return n.replace(s2,o2)}var r2=new Map;function o2(n,e){let t=et[e];if(t===void 0){let i=r2.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}var a2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(n){return n.replace(a2,l2)}function l2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function h2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case ks:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function u2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case bf:e="ENVMAP_BLENDING_MIX";break;case xf:e="ENVMAP_BLENDING_ADD";break}return e}function f2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function p2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=c2(t),c=h2(t),h=d2(t),d=u2(t),u=f2(t),f=t2(t),g=n2(r),E=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[Md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?et.tonemapping_pars_fragment:"",t.toneMapping!==Qn?j1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,K1("linearToOutputTexel",t.outputColorSpace),e2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=nc(o),o=vd(o,t),o=_d(o,t),a=nc(a),a=vd(a,t),a=_d(a,t),o=Ad(o),a=Ad(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,D=gd(s,s.VERTEX_SHADER,_),R=gd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,R),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(P){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(E).trim(),k=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(R).trim(),j=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,R);else{let ae=yd(s,D,"vertex"),Y=yd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ae+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||X==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(D),s.deleteShader(R),F=new Bs(s,E),S=i2(s,E)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,Z1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=R,this}var m2=0,ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sc(e),t.set(e,i)),i}},sc=class{constructor(e){this.id=m2++,this.code=e,this.usedTimes=0}};function g2(n,e,t,i,s,r,o){let a=new Bo,l=new ic,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,z,k){let X=z.fog,j=k.geometry,Z=S.isMeshStandardMaterial?z.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=ae&&ae.mapping===ia?ae.image.height:null,ue=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let _e=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Oe=_e!==void 0?_e.length:0,st=0;j.morphAttributes.position!==void 0&&(st=1),j.morphAttributes.normal!==void 0&&(st=2),j.morphAttributes.color!==void 0&&(st=3);let Ct,J,le,Fe;if(ue){let St=qn[ue];Ct=St.vertexShader,J=St.fragmentShader}else Ct=S.vertexShader,J=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),Fe=l.getFragmentShaderID(S);let fe=n.getRenderTarget(),We=n.state.buffers.depth.getReversed(),$e=k.isInstancedMesh===!0,rt=k.isBatchedMesh===!0,zt=!!S.map,ft=!!S.matcap,Vt=!!ae,B=!!S.aoMap,Rn=!!S.lightMap,ct=!!S.bumpMap,ht=!!S.normalMap,Ge=!!S.displacementMap,Dt=!!S.emissiveMap,ke=!!S.metalnessMap,C=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,Q=S.dispersion>0,ee=S.iridescence>0,$=S.sheen>0,Ie=S.transmission>0,pe=M&&!!S.anisotropyMap,Ae=G&&!!S.clearcoatMap,pt=G&&!!S.clearcoatNormalMap,re=G&&!!S.clearcoatRoughnessMap,Me=ee&&!!S.iridescenceMap,Ve=ee&&!!S.iridescenceThicknessMap,qe=$&&!!S.sheenColorMap,Se=$&&!!S.sheenRoughnessMap,dt=!!S.specularMap,je=!!S.specularColorMap,Pt=!!S.specularIntensityMap,U=Ie&&!!S.transmissionMap,de=Ie&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,Ee=S.alphaTest>0,me=!!S.alphaHash,Je=!!S.extensions,Gt=Qn;S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let on={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Ct,fragmentShader:J,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:rt,batchingColor:rt&&k._colorsTexture!==null,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Oi,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:ft,envMap:Vt,envMapMode:Vt&&ae.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:Rn,bumpMap:ct,normalMap:ht,displacementMap:u&&Ge,emissiveMap:Dt,normalMapObjectSpace:ht&&S.normalMapType===Uf,normalMapTangentSpace:ht&&S.normalMapType===Jd,metalnessMap:ke,roughnessMap:C,anisotropy:M,anisotropyMap:pe,clearcoat:G,clearcoatMap:Ae,clearcoatNormalMap:pt,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Ve,sheen:$,sheenColorMap:qe,sheenRoughnessMap:Se,specularMap:dt,specularColorMap:je,specularIntensityMap:Pt,transmission:Ie,transmissionMap:U,thicknessMap:de,gradientMap:q,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:Ee,alphaHash:me,combine:S.combine,mapUv:zt&&E(S.map.channel),aoMapUv:B&&E(S.aoMap.channel),lightMapUv:Rn&&E(S.lightMap.channel),bumpMapUv:ct&&E(S.bumpMap.channel),normalMapUv:ht&&E(S.normalMap.channel),displacementMapUv:Ge&&E(S.displacementMap.channel),emissiveMapUv:Dt&&E(S.emissiveMap.channel),metalnessMapUv:ke&&E(S.metalnessMap.channel),roughnessMapUv:C&&E(S.roughnessMap.channel),anisotropyMapUv:pe&&E(S.anisotropyMap.channel),clearcoatMapUv:Ae&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&E(S.sheenRoughnessMap.channel),specularMapUv:dt&&E(S.specularMap.channel),specularColorMapUv:je&&E(S.specularColorMap.channel),specularIntensityMapUv:Pt&&E(S.specularIntensityMap.channel),transmissionMapUv:U&&E(S.transmissionMap.channel),thicknessMapUv:de&&E(S.thicknessMap.channel),alphaMapUv:K&&E(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ht||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(zt||K),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:We,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:st,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Je&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&S.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=c.has(1),on.vertexUv2s=c.has(2),on.vertexUv3s=c.has(3),c.clear(),on}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let z=qn[A];P=nr.clone(z.uniforms)}else P=S.uniforms;return P}function D(S,A){let P;for(let z=0,k=h.length;z<k;z++){let X=h[z];if(X.cacheKey===A){P=X,++P.usedTimes;break}}return P===void 0&&(P=new p2(n,A,S,r),h.push(P)),P}function R(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:F}}function E2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function y2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,E,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),e++,p}function a(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||y2),i.length>1&&i.sort(u||Sd),s.length>1&&s.sort(u||Sd)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function v2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new bd,n.set(i,[o])):s>=r.length?(o=new bd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new he};break;case"SpotLight":t={position:new I,direction:new I,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function A2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var M2=0;function S2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function b2(n){let e=new _2,t=A2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new wt,o=new wt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,v=0,_=0,y=0,D=0,R=0,w=0;c.sort(S2);for(let S=0,A=c.length;S<A;S++){let P=c[S],z=P.color,k=P.intensity,X=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],k);w++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ae=P.shadow,Y=t.get(P);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=Z,f++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(z).multiplyScalar(k),Z.distance=X,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[E]=Z;let ae=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,ae.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[E]=ae.matrix,P.castShadow){let Y=t.get(P);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=j,y++}E++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(z).multiplyScalar(k),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let ae=P.shadow,Y=t.get(P);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,Y.shadowCameraNear=ae.camera.near,Y.shadowCameraFar=ae.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=Z,g++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(k),Z.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==v||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=v,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=w,i.version=M2++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function xd(n){let e=new b2(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function x2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new xd(n),e.set(s,[a])):r>=o.length?(a=new xd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ni=class extends gi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends gi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},T2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R2(n,e,t){let i=new Pr,s=new se,r=new se,o=new Tt,a=new Ni({depthPacking:tr}),l=new rc,c={},h=t.maxTextureSize,d={[Ii]:Qt,[Qt]:Ii,[Ft]:Ft},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:T2,fragmentShader:w2}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new H(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let p=this.type;this.render=function(R,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Jn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==ci&&this.type===ci,X=p===ci&&this.type!==ci;for(let j=0,Z=R.length;j<Z;j++){let ae=R[j],Y=ae.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ue=Y.getFrameExtents();if(s.multiply(ue),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||X===!0){let Oe=this.type!==ci?{minFilter:wn,magFilter:wn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new jt(s.x,s.y,Oe),Y.map.texture.name=ae.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let _e=Y.getViewportCount();for(let Oe=0;Oe<_e;Oe++){let st=Y.getViewport(Oe);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),z.viewport(o),Y.updateMatrices(ae,Oe),i=Y.getFrustum(),y(w,F,Y.camera,ae,this.type)}Y.isPointLightShadow!==!0&&this.type===ci&&v(Y,F),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(R,w){let F=e.update(E);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jt(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,F,u,E,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,F,f,E,null)}function _(R,w,F,S){let A=null,P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)A=P;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let z=A.uuid,k=w.uuid,X=c[z];X===void 0&&(X={},c[z]=X);let j=X[k];j===void 0&&(j=A.clone(),X[k]=j,w.addEventListener("dispose",D)),A=j}if(A.visible=w.visible,A.wireframe=w.wireframe,S===ci?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:d[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=n.properties.get(A);z.light=F}return A}function y(R,w,F,S,A){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===ci)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let k=e.update(R),X=R.material;if(Array.isArray(X)){let j=k.groups;for(let Z=0,ae=j.length;Z<ae;Z++){let Y=j[Z],ue=X[Y.materialIndex];if(ue&&ue.visible){let _e=_(R,ue,S,A);R.onBeforeShadow(n,R,w,F,k,_e,Y),n.renderBufferDirect(F,null,k,_e,R,Y),R.onAfterShadow(n,R,w,F,k,_e,Y)}}}else if(X.visible){let j=_(R,X,S,A);R.onBeforeShadow(n,R,w,F,k,j,null),n.renderBufferDirect(F,null,k,j,R,null),R.onAfterShadow(n,R,w,F,k,j,null)}}let z=R.children;for(let k=0,X=z.length;k<X;k++)y(z[k],w,F,S,A)}function D(R){R.target.removeEventListener("dispose",D);for(let F in c){let S=c[F],A=R.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var C2={[hl]:dl,[ul]:ml,[fl]:gl,[Hs]:pl,[dl]:hl,[ml]:ul,[gl]:fl,[pl]:Hs};function F2(n,e){function t(){let U=!1,de=new Tt,q=null,K=new Tt(0,0,0,0);return{setMask:function(Ee){q!==Ee&&!U&&(n.colorMask(Ee,Ee,Ee,Ee),q=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,me,Je,Gt,on){on===!0&&(Ee*=Gt,me*=Gt,Je*=Gt),de.set(Ee,me,Je,Gt),K.equals(de)===!1&&(n.clearColor(Ee,me,Je,Gt),K.copy(de))},reset:function(){U=!1,q=null,K.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,q=null,K=null,Ee=null;return{setReversed:function(me){if(de!==me){let Je=e.get("EXT_clip_control");de?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);let Gt=Ee;Ee=null,this.setClear(Gt)}de=me},getReversed:function(){return de},setTest:function(me){me?fe(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(me){q!==me&&!U&&(n.depthMask(me),q=me)},setFunc:function(me){if(de&&(me=C2[me]),K!==me){switch(me){case hl:n.depthFunc(n.NEVER);break;case dl:n.depthFunc(n.ALWAYS);break;case ul:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case pl:n.depthFunc(n.GEQUAL);break;case ml:n.depthFunc(n.GREATER);break;case gl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=me}},setLocked:function(me){U=me},setClear:function(me){Ee!==me&&(de&&(me=1-me),n.clearDepth(me),Ee=me)},reset:function(){U=!1,q=null,K=null,Ee=null,de=!1}}}function s(){let U=!1,de=null,q=null,K=null,Ee=null,me=null,Je=null,Gt=null,on=null;return{setTest:function(St){U||(St?fe(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(St){de!==St&&!U&&(n.stencilMask(St),de=St)},setFunc:function(St,Dn,ni){(q!==St||K!==Dn||Ee!==ni)&&(n.stencilFunc(St,Dn,ni),q=St,K=Dn,Ee=ni)},setOp:function(St,Dn,ni){(me!==St||Je!==Dn||Gt!==ni)&&(n.stencilOp(St,Dn,ni),me=St,Je=Dn,Gt=ni)},setLocked:function(St){U=St},setClear:function(St){on!==St&&(n.clearStencil(St),on=St)},reset:function(){U=!1,de=null,q=null,K=null,Ee=null,me=null,Je=null,Gt=null,on=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,R=null,w=new he(0,0,0),F=0,S=!1,A=null,P=null,z=null,k=null,X=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ae=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=ae>=1):Y.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=ae>=2);let ue=null,_e={},Oe=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),Ct=new Tt().fromArray(Oe),J=new Tt().fromArray(st);function le(U,de,q,K){let Ee=new Uint8Array(4),me=n.createTexture();n.bindTexture(U,me),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<q;Je++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(de+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return me}let Fe={};Fe[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(Hs),ct(!1),ht(Ch),fe(n.CULL_FACE),B(Jn);function fe(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function We(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function $e(U,de){return d[U]!==de?(n.bindFramebuffer(U,de),d[U]=de,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=de),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=de),!0):!1}function rt(U,de){let q=f,K=!1;if(U){q=u.get(de),q===void 0&&(q=[],u.set(de,q));let Ee=U.textures;if(q.length!==Ee.length||q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Je=Ee.length;me<Je;me++)q[me]=n.COLOR_ATTACHMENT0+me;q.length=Ee.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function zt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let ft={[Qi]:n.FUNC_ADD,[af]:n.FUNC_SUBTRACT,[lf]:n.FUNC_REVERSE_SUBTRACT};ft[cf]=n.MIN,ft[hf]=n.MAX;let Vt={[df]:n.ZERO,[uf]:n.ONE,[ff]:n.SRC_COLOR,[ll]:n.SRC_ALPHA,[vf]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[mf]:n.DST_ALPHA,[pf]:n.ONE_MINUS_SRC_COLOR,[cl]:n.ONE_MINUS_SRC_ALPHA,[yf]:n.ONE_MINUS_DST_COLOR,[gf]:n.ONE_MINUS_DST_ALPHA,[_f]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[Mf]:n.CONSTANT_ALPHA,[Sf]:n.ONE_MINUS_CONSTANT_ALPHA};function B(U,de,q,K,Ee,me,Je,Gt,on,St){if(U===Jn){E===!0&&(We(n.BLEND),E=!1);return}if(E===!1&&(fe(n.BLEND),E=!0),U!==of){if(U!==m||St!==S){if((p!==Qi||y!==Qi)&&(n.blendEquation(n.FUNC_ADD),p=Qi,y=Qi),St)switch(U){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mn:n.blendFunc(n.ONE,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,_=null,D=null,R=null,w.set(0,0,0),F=0,m=U,S=St}return}Ee=Ee||de,me=me||q,Je=Je||K,(de!==p||Ee!==y)&&(n.blendEquationSeparate(ft[de],ft[Ee]),p=de,y=Ee),(q!==v||K!==_||me!==D||Je!==R)&&(n.blendFuncSeparate(Vt[q],Vt[K],Vt[me],Vt[Je]),v=q,_=K,D=me,R=Je),(Gt.equals(w)===!1||on!==F)&&(n.blendColor(Gt.r,Gt.g,Gt.b,on),w.copy(Gt),F=on),m=U,S=!1}function Rn(U,de){U.side===Ft?We(n.CULL_FACE):fe(n.CULL_FACE);let q=U.side===Qt;de&&(q=!q),ct(q),U.blending===Fi&&U.transparent===!1?B(Jn):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(U){A!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),A=U)}function ht(U){U!==sf?(fe(n.CULL_FACE),U!==P&&(U===Ch?n.cullFace(n.BACK):U===rf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),P=U}function Ge(U){U!==z&&(Z&&n.lineWidth(U),z=U)}function Dt(U,de,q){U?(fe(n.POLYGON_OFFSET_FILL),(k!==de||X!==q)&&(n.polygonOffset(de,q),k=de,X=q)):We(n.POLYGON_OFFSET_FILL)}function ke(U){U?fe(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+j-1),ue!==U&&(n.activeTexture(U),ue=U)}function M(U,de,q){q===void 0&&(ue===null?q=n.TEXTURE0+j-1:q=ue);let K=_e[q];K===void 0&&(K={type:void 0,texture:void 0},_e[q]=K),(K.type!==U||K.texture!==de)&&(ue!==q&&(n.activeTexture(q),ue=q),n.bindTexture(U,de||Fe[U]),K.type=U,K.texture=de)}function G(){let U=_e[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(U){Ct.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ct.copy(U))}function Se(U){J.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),J.copy(U))}function dt(U,de){let q=c.get(de);q===void 0&&(q=new WeakMap,c.set(de,q));let K=q.get(U);K===void 0&&(K=n.getUniformBlockIndex(de,U.name),q.set(U,K))}function je(U,de){let K=c.get(de).get(U);l.get(de)!==K&&(n.uniformBlockBinding(de,K,U.__bindingPointIndex),l.set(de,K))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,_e={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,R=null,w=new he(0,0,0),F=0,S=!1,A=null,P=null,z=null,k=null,X=null,Ct.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:We,bindFramebuffer:$e,drawBuffers:rt,useProgram:zt,setBlending:B,setMaterial:Rn,setFlipSided:ct,setCullFace:ht,setLineWidth:Ge,setPolygonOffset:Dt,setScissorTest:ke,activeTexture:C,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Ve,updateUBOMapping:dt,uniformBlockBinding:je,texStorage2D:pt,texStorage3D:re,texSubImage2D:$,texSubImage3D:Ie,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ae,scissor:qe,viewport:Se,reset:Pt}}function Td(n,e,t,i){let s=P2(i);switch(t){case Wd:return n*e;case qd:return n*e;case Yd:return n*e*2;case Oc:return n*e/s.components*s.byteLength;case Bc:return n*e/s.components*s.byteLength;case Zd:return n*e*2/s.components*s.byteLength;case Hc:return n*e*2/s.components*s.byteLength;case Xd:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case zc:return n*e*4/s.components*s.byteLength;case To:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:case Sl:return Math.max(n,16)*Math.max(e,8)/4;case _l:case Ml:return Math.max(n,8)*Math.max(e,8)/2;case bl:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fo:case kl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $d:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wl:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P2(n){switch(n){case fi:case kd:return{byteLength:1,components:1};case Fr:case Gd:case yn:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case pi:case Lc:case $n:return{byteLength:4,components:1};case Vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function I2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):Lo("canvas")}function E(C,M,G){let Q=1,ee=ke(C);if((ee.width>G||ee.height>G)&&(Q=G/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(Q*ee.width),Ie=Math.floor(Q*ee.height);d===void 0&&(d=g($,Ie));let pe=M?g($,Ie):d;return pe.width=$,pe.height=Ie,pe.getContext("2d").drawImage(C,0,0,$,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Ie+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,M,G,Q,ee=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=M;if(M===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),M===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){let Ie=ee?sa:mt.getTransfer(Q);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=Ie===bt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(C,M){let G;return C?M===null||M===pi||M===Gs?G=n.DEPTH24_STENCIL8:M===$n?G=n.DEPTH32F_STENCIL8:M===Fr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===Gs?G=n.DEPTH_COMPONENT24:M===$n?G=n.DEPTH_COMPONENT32F:M===Fr&&(G=n.DEPTH_COMPONENT16),G}function D(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==Zn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){let M=C.target;M.removeEventListener("dispose",R),F(M),M.isVideoTexture&&h.delete(M)}function w(C){let M=C.target;M.removeEventListener("dispose",w),A(M)}function F(C){let M=i.get(C);if(M.__webglInit===void 0)return;let G=C.source,Q=u.get(G);if(Q){let ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(C),Object.keys(Q).length===0&&u.delete(G)}i.remove(C)}function S(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let G=C.source,Q=u.get(G);delete Q[M.__cacheKey],o.memory.textures--}function A(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=C.textures;for(let Q=0,ee=G.length;Q<ee;Q++){let $=i.get(G[Q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(G[Q])}i.remove(C)}let P=0;function z(){P=0}function k(){let C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function X(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function j(C,M){let G=i.get(C);if(C.isVideoTexture&&Ge(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,C,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function Z(C,M){let G=i.get(C);if(C.version>0&&G.__version!==C.version){J(G,C,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function ae(C,M){let G=i.get(C);if(C.version>0&&G.__version!==C.version){J(G,C,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function Y(C,M){let G=i.get(C);if(C.version>0&&G.__version!==C.version){le(G,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}let ue={[cn]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[vl]:n.MIRRORED_REPEAT},_e={[wn]:n.NEAREST,[Df]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},Oe={[Nf]:n.NEVER,[Gf]:n.ALWAYS,[Of]:n.LESS,[Qd]:n.LEQUAL,[Bf]:n.EQUAL,[kf]:n.GEQUAL,[Hf]:n.GREATER,[zf]:n.NOTEQUAL};function st(C,M){if(M.type===$n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Zn||M.magFilter===Ta||M.magFilter===Jr||M.magFilter===es||M.minFilter===Zn||M.minFilter===Ta||M.minFilter===Jr||M.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ue[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ue[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ue[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,_e[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==Jr&&M.minFilter!==es||M.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ct(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));let Q=M.source,ee=u.get(Q);ee===void 0&&(ee={},u.set(Q,ee));let $=X(M);if($!==C.__cacheKey){ee[$]===void 0&&(ee[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[$].usedTimes++;let Ie=ee[C.__cacheKey];Ie!==void 0&&(ee[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(M)),C.__cacheKey=$,C.__webglTexture=ee[$].texture}return G}function J(C,M,G){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);let ee=Ct(C,M),$=M.source;t.bindTexture(Q,C.__webglTexture,n.TEXTURE0+G);let Ie=i.get($);if($.version!==Ie.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);let pe=mt.getPrimaries(mt.workingColorSpace),Ae=M.colorSpace===Ri?null:mt.getPrimaries(M.colorSpace),pt=M.colorSpace===Ri||pe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let re=E(M.image,!1,s.maxTextureSize);re=Dt(M,re);let Me=r.convert(M.format,M.colorSpace),Ve=r.convert(M.type),qe=_(M.internalFormat,Me,Ve,M.colorSpace,M.isVideoTexture);st(Q,M);let Se,dt=M.mipmaps,je=M.isVideoTexture!==!0,Pt=Ie.__version===void 0||ee===!0,U=$.dataReady,de=D(M,re);if(M.isDepthTexture)qe=y(M.format===Vs,M.type),Pt&&(je?t.texStorage2D(n.TEXTURE_2D,1,qe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,qe,re.width,re.height,0,Me,Ve,null));else if(M.isDataTexture)if(dt.length>0){je&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,qe,dt[0].width,dt[0].height);for(let q=0,K=dt.length;q<K;q++)Se=dt[q],je?U&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Ve,Se.data):t.texImage2D(n.TEXTURE_2D,q,qe,Se.width,Se.height,0,Me,Ve,Se.data);M.generateMipmaps=!1}else je?(Pt&&t.texStorage2D(n.TEXTURE_2D,de,qe,re.width,re.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Me,Ve,re.data)):t.texImage2D(n.TEXTURE_2D,0,qe,re.width,re.height,0,Me,Ve,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,qe,dt[0].width,dt[0].height,re.depth);for(let q=0,K=dt.length;q<K;q++)if(Se=dt[q],M.format!==Bn)if(Me!==null)if(je){if(U)if(M.layerUpdates.size>0){let Ee=Td(Se.width,Se.height,M.format,M.type);for(let me of M.layerUpdates){let Je=Se.data.subarray(me*Ee/Se.data.BYTES_PER_ELEMENT,(me+1)*Ee/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,me,Se.width,Se.height,1,Me,Je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,re.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,qe,Se.width,Se.height,re.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,re.depth,Me,Ve,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,qe,Se.width,Se.height,re.depth,0,Me,Ve,Se.data)}else{je&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,qe,dt[0].width,dt[0].height);for(let q=0,K=dt.length;q<K;q++)Se=dt[q],M.format!==Bn?Me!==null?je?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,q,qe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?U&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Ve,Se.data):t.texImage2D(n.TEXTURE_2D,q,qe,Se.width,Se.height,0,Me,Ve,Se.data)}else if(M.isDataArrayTexture)if(je){if(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,qe,re.width,re.height,re.depth),U)if(M.layerUpdates.size>0){let q=Td(re.width,re.height,M.format,M.type);for(let K of M.layerUpdates){let Ee=re.data.subarray(K*q/re.data.BYTES_PER_ELEMENT,(K+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,re.width,re.height,1,Me,Ve,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,Ve,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,re.width,re.height,re.depth,0,Me,Ve,re.data);else if(M.isData3DTexture)je?(Pt&&t.texStorage3D(n.TEXTURE_3D,de,qe,re.width,re.height,re.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,Ve,re.data)):t.texImage3D(n.TEXTURE_3D,0,qe,re.width,re.height,re.depth,0,Me,Ve,re.data);else if(M.isFramebufferTexture){if(Pt)if(je)t.texStorage2D(n.TEXTURE_2D,de,qe,re.width,re.height);else{let q=re.width,K=re.height;for(let Ee=0;Ee<de;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,qe,q,K,0,Me,Ve,null),q>>=1,K>>=1}}else if(dt.length>0){if(je&&Pt){let q=ke(dt[0]);t.texStorage2D(n.TEXTURE_2D,de,qe,q.width,q.height)}for(let q=0,K=dt.length;q<K;q++)Se=dt[q],je?U&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me,Ve,Se):t.texImage2D(n.TEXTURE_2D,q,qe,Me,Ve,Se);M.generateMipmaps=!1}else if(je){if(Pt){let q=ke(re);t.texStorage2D(n.TEXTURE_2D,de,qe,q.width,q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ve,re)}else t.texImage2D(n.TEXTURE_2D,0,qe,Me,Ve,re);m(M)&&p(Q),Ie.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,G){if(M.image.length!==6)return;let Q=Ct(C,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);let $=i.get(ee);if(ee.version!==$.__version||Q===!0){t.activeTexture(n.TEXTURE0+G);let Ie=mt.getPrimaries(mt.workingColorSpace),pe=M.colorSpace===Ri?null:mt.getPrimaries(M.colorSpace),Ae=M.colorSpace===Ri||Ie===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let pt=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let K=0;K<6;K++)!pt&&!re?Me[K]=E(M.image[K],!0,s.maxCubemapSize):Me[K]=re?M.image[K].image:M.image[K],Me[K]=Dt(M,Me[K]);let Ve=Me[0],qe=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),dt=_(M.internalFormat,qe,Se,M.colorSpace),je=M.isVideoTexture!==!0,Pt=$.__version===void 0||Q===!0,U=ee.dataReady,de=D(M,Ve);st(n.TEXTURE_CUBE_MAP,M);let q;if(pt){je&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,dt,Ve.width,Ve.height);for(let K=0;K<6;K++){q=Me[K].mipmaps;for(let Ee=0;Ee<q.length;Ee++){let me=q[Ee];M.format!==Bn?qe!==null?je?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,0,0,me.width,me.height,qe,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,dt,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,0,0,me.width,me.height,qe,Se,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee,dt,me.width,me.height,0,qe,Se,me.data)}}}else{if(q=M.mipmaps,je&&Pt){q.length>0&&de++;let K=ke(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,dt,K.width,K.height)}for(let K=0;K<6;K++)if(re){je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me[K].width,Me[K].height,qe,Se,Me[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,dt,Me[K].width,Me[K].height,0,qe,Se,Me[K].data);for(let Ee=0;Ee<q.length;Ee++){let Je=q[Ee].image[K].image;je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,0,0,Je.width,Je.height,qe,Se,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,dt,Je.width,Je.height,0,qe,Se,Je.data)}}else{je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,qe,Se,Me[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,dt,qe,Se,Me[K]);for(let Ee=0;Ee<q.length;Ee++){let me=q[Ee];je?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,0,0,qe,Se,me.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ee+1,dt,qe,Se,me.image[K])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),$.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Fe(C,M,G,Q,ee,$){let Ie=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),Ae=_(G.internalFormat,Ie,pe,G.colorSpace),pt=i.get(M),re=i.get(G);if(re.__renderTarget=M,!pt.__hasExternalTextures){let Me=Math.max(1,M.width>>$),Ve=Math.max(1,M.height>>$);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,Ae,Me,Ve,M.depth,0,Ie,pe,null):t.texImage2D(ee,$,Ae,Me,Ve,0,Ie,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ht(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,re.__webglTexture,0,ct(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,re.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(C,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,$=y(M.stencilBuffer,ee),Ie=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=ct(M);ht(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,$,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,C)}else{let Q=M.textures;for(let ee=0;ee<Q.length;ee++){let $=Q[ee],Ie=r.convert($.format,$.colorSpace),pe=r.convert($.type),Ae=_($.internalFormat,Ie,pe,$.colorSpace),pt=ct(M);G&&ht(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Ae,M.width,M.height):ht(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,Ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let ee=Q.__webglTexture,$=ct(M);if(M.depthTexture.format===Ns)ht(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Vs)ht(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function $e(C){let M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");We(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),fe(M.__webglDepthbuffer[Q],C,!1);else{let ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),fe(M.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(C,M,G){let Q=i.get(C);M!==void 0&&Fe(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&$e(C)}function zt(C){let M=C.texture,G=i.get(C),Q=i.get(M);C.addEventListener("dispose",w);let ee=C.textures,$=C.isWebGLCubeRenderTarget===!0,Ie=ee.length>1;if(Ie||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)G.__webglFramebuffer[pe][Ae]=n.createFramebuffer()}else G.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)G.__webglFramebuffer[pe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let pe=0,Ae=ee.length;pe<Ae;pe++){let pt=i.get(ee[pe]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ht(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){let Ae=ee[pe];G.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);let pt=r.convert(Ae.format,Ae.colorSpace),re=r.convert(Ae.type),Me=_(Ae.internalFormat,pt,re,Ae.colorSpace,C.isXRRenderTarget===!0),Ve=ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),st(n.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Fe(G.__webglFramebuffer[pe][Ae],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ae);else Fe(G.__webglFramebuffer[pe],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let pe=0,Ae=ee.length;pe<Ae;pe++){let pt=ee[pe],re=i.get(pt);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),st(n.TEXTURE_2D,pt),Fe(G.__webglFramebuffer,C,pt,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(pt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Q.__webglTexture),st(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Fe(G.__webglFramebuffer[Ae],C,M,n.COLOR_ATTACHMENT0,pe,Ae);else Fe(G.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,pe,0);m(M)&&p(pe),t.unbindTexture()}C.depthBuffer&&$e(C)}function ft(C){let M=C.textures;for(let G=0,Q=M.length;G<Q;G++){let ee=M[G];if(m(ee)){let $=v(C),Ie=i.get(ee).__webglTexture;t.bindTexture($,Ie),p($),t.unbindTexture()}}}let Vt=[],B=[];function Rn(C){if(C.samples>0){if(ht(C)===!1){let M=C.textures,G=C.width,Q=C.height,ee=n.COLOR_BUFFER_BIT,$=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(C),pe=M.length>1;if(pe)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);let pt=i.get(M[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,ee,n.NEAREST),l===!0&&(Vt.length=0,B.length=0,Vt.push(n.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Vt.push($),B.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);let pt=i.get(M[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,pt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ct(C){return Math.min(s.maxSamples,C.samples)}function ht(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Dt(C,M){let G=C.colorSpace,Q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Oi&&G!==Ri&&(mt.getTransfer(G)===bt?(Q!==Bn||ee!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=ae,this.setTextureCube=Y,this.rebindTextures=rt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=ht}function D2(n,e){function t(i,s=Ri){let r,o=mt.getTransfer(s);if(i===fi)return n.UNSIGNED_BYTE;if(i===Uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kd)return n.BYTE;if(i===Gd)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===yn)return n.HALF_FLOAT;if(i===Wd)return n.ALPHA;if(i===Xd)return n.RGB;if(i===Bn)return n.RGBA;if(i===qd)return n.LUMINANCE;if(i===Yd)return n.LUMINANCE_ALPHA;if(i===Ns)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===Oc)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Zd)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===zc)return n.RGBA_INTEGER;if(i===To||i===wo||i===Ro||i===Co)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===Al||i===Ml||i===Sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===xl||i===Tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===xl)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Tl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wl||i===Rl||i===Cl||i===Fl||i===Pl||i===Il||i===Dl||i===Ll||i===Ul||i===Nl||i===Ol||i===Bl||i===Hl||i===zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Il)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ll)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===kl||i===Gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fo)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$d||i===Vl||i===Wl||i===Xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var oc=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},te=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},L2={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new te;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},U2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new gn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new en({vertexShader:U2,fragmentShader:N2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new xe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lc=class extends Di{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new ac,m=t.getContextAttributes(),p=null,v=null,_=[],y=[],D=new se,R=null,w=new sn;w.viewport=new Tt;let F=new sn;F.viewport=new Tt;let S=[w,F],A=new oc,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=_[J];return le===void 0&&(le=new wr,_[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=_[J];return le===void 0&&(le=new wr,_[J]=le),le.getGripSpace()},this.getHand=function(J){let le=_[J];return le===void 0&&(le=new wr,_[J]=le),le.getHandSpace()};function k(J){let le=y.indexOf(J.inputSource);if(le===-1)return;let Fe=_[le];Fe!==void 0&&(Fe.update(J.inputSource,J.frame,c||o),Fe.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let J=0;J<_.length;J++){let le=y[J];le!==null&&(y[J]=null,_[J].disconnect(le))}P=null,z=null,E.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,Ct.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new jt(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Fe=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Vs:Ns,Fe=m.stencil?Gs:pi);let We={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new jt(u.textureWidth,u.textureHeight,{format:Bn,type:fi,depthTexture:new qs(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function j(J){for(let le=0;le<J.removed.length;le++){let Fe=J.removed[le],fe=y.indexOf(Fe);fe>=0&&(y[fe]=null,_[fe].disconnect(Fe))}for(let le=0;le<J.added.length;le++){let Fe=J.added[le],fe=y.indexOf(Fe);if(fe===-1){for(let $e=0;$e<_.length;$e++)if($e>=y.length){y.push(Fe),fe=$e;break}else if(y[$e]===null){y[$e]=Fe,fe=$e;break}if(fe===-1)break}let We=_[fe];We&&We.connect(Fe)}}let Z=new I,ae=new I;function Y(J,le,Fe){Z.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(Fe.matrixWorld);let fe=Z.distanceTo(ae),We=le.projectionMatrix.elements,$e=Fe.projectionMatrix.elements,rt=We[14]/(We[10]-1),zt=We[14]/(We[10]+1),ft=(We[9]+1)/We[5],Vt=(We[9]-1)/We[5],B=(We[8]-1)/We[0],Rn=($e[8]+1)/$e[0],ct=rt*B,ht=rt*Rn,Ge=fe/(-B+Rn),Dt=Ge*-B;if(le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Dt),J.translateZ(Ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),We[10]===-1)J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let ke=rt+Ge,C=zt+Ge,M=ct-Dt,G=ht+(fe-Dt),Q=ft*zt/C*ke,ee=Vt*zt/C*ke;J.projectionMatrix.makePerspective(M,G,Q,ee,ke,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let le=J.near,Fe=J.far;E.texture!==null&&(E.depthNear>0&&(le=E.depthNear),E.depthFar>0&&(Fe=E.depthFar)),A.near=F.near=w.near=le,A.far=F.far=w.far=Fe,(P!==A.near||z!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,z=A.far),w.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,A.layers.mask=w.layers.mask|F.layers.mask;let fe=J.parent,We=A.cameras;ue(A,fe);for(let $e=0;$e<We.length;$e++)ue(We[$e],fe);We.length===2?Y(A,w,F):A.projectionMatrix.copy(w.projectionMatrix),_e(J,A,fe)};function _e(J,le,Fe){Fe===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(Fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Do*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Oe=null;function st(J,le){if(h=le.getViewerPose(c||o),g=le,h!==null){let Fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let fe=!1;Fe.length!==A.cameras.length&&(A.cameras.length=0,fe=!0);for(let $e=0;$e<Fe.length;$e++){let rt=Fe[$e],zt=null;if(f!==null)zt=f.getViewport(rt);else{let Vt=d.getViewSubImage(u,rt);zt=Vt.viewport,$e===0&&(e.setRenderTargetTextures(v,Vt.colorTexture,u.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(v))}let ft=S[$e];ft===void 0&&(ft=new sn,ft.layers.enable($e),ft.viewport=new Tt,S[$e]=ft),ft.matrix.fromArray(rt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(rt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(zt.x,zt.y,zt.width,zt.height),$e===0&&(A.matrix.copy(ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),fe===!0&&A.cameras.push(ft)}let We=s.enabledFeatures;if(We&&We.includes("depth-sensing")){let $e=d.getDepthInformation(Fe[0]);$e&&$e.isValid&&$e.texture&&E.init(e,$e,s.renderState)}}for(let Fe=0;Fe<_.length;Fe++){let fe=y[Fe],We=_[Fe];fe!==null&&We!==void 0&&We.update(fe,le,c||o)}Oe&&Oe(J,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}let Ct=new tu;Ct.setAnimationLoop(st),this.setAnimationLoop=function(J){Oe=J},this.dispose=function(){}}},$i=new Kn,O2=new wt;function B2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,eu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,$i.copy(y),$i.x*=-1,$i.y*=-1,$i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(O2.makeRotationFromEuler($i)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function H2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=_.program;i.updateUBOMapping(v,D);let R=e.render.frame;r[v.id]!==R&&(u(v),r[v.id]=R)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),D=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,w=y.length;R<w;R++){let F=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,A=F.length;S<A;S++){let P=F[S];if(f(P,R,S,D)===!0){let z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],X=0;for(let j=0;j<k.length;j++){let Z=k[j],ae=E(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,z+X,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,X),X+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,y,D){let R=v.value,w=_+"_"+y;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{let F=D[w];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return D[w]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(v){let _=v.uniforms,y=0,D=16;for(let w=0,F=_.length;w<F;w++){let S=Array.isArray(_[w])?_[w]:[_[w]];for(let A=0,P=S.length;A<P;A++){let z=S[A],k=Array.isArray(z.value)?z.value:[z.value];for(let X=0,j=k.length;X<j;X++){let Z=k[X],ae=E(Z),Y=y%D,ue=Y%ae.boundary,_e=Y+ue;y+=ue,_e!==0&&D-_e<ae.storage&&(y+=D-_e),z.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=ae.storage}}}let R=y%D;return R>0&&(y+=D-R),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Wo=class{constructor(e={}){let{canvas:t=Wf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Qn,this.toneMappingExposure=1;let y=this,D=!1,R=0,w=0,F=null,S=-1,A=null,P=new Tt,z=new Tt,k=null,X=new he(0),j=0,Z=t.width,ae=t.height,Y=1,ue=null,_e=null,Oe=new Tt(0,0,Z,ae),st=new Tt(0,0,Z,ae),Ct=!1,J=new Pr,le=!1,Fe=!1,fe=new wt,We=new wt,$e=new I,rt=new Tt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Vt(){return F===null?Y:1}let B=i;function Rn(b,N){return t.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",me,!1),B===null){let N="webgl2";if(B=Rn(N,b),B===null)throw Rn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,ht,Ge,Dt,ke,C,M,G,Q,ee,$,Ie,pe,Ae,pt,re,Me,Ve,qe,Se,dt,je,Pt,U;function de(){ct=new t1(B),ct.init(),je=new D2(B,ct),ht=new $m(B,ct,e,je),Ge=new F2(B,ct),ht.reverseDepthBuffer&&u&&Ge.buffers.depth.setReversed(!0),Dt=new s1(B),ke=new E2,C=new I2(B,ct,Ge,ke,ht,je,Dt),M=new Qm(y),G=new e1(y),Q=new dp(B),Pt=new Ym(B,Q),ee=new n1(B,Q,Dt,Pt),$=new o1(B,ee,Q,Dt),qe=new r1(B,ht,C),re=new Jm(ke),Ie=new g2(y,M,G,ct,ht,Pt,re),pe=new B2(y,ke),Ae=new v2,pt=new x2(ct),Ve=new qm(y,M,G,Ge,$,f,l),Me=new R2(y,$,ht),U=new H2(B,Dt,ht,Ge),Se=new Zm(B,ct,Dt),dt=new i1(B,ct,Dt),Dt.programs=Ie.programs,y.capabilities=ht,y.extensions=ct,y.properties=ke,y.renderLists=Ae,y.shadowMap=Me,y.state=Ge,y.info=Dt}de();let q=new lc(y,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(Z,ae,!1))},this.getSize=function(b){return b.set(Z,ae)},this.setSize=function(b,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,ae=N,t.width=Math.floor(b*Y),t.height=Math.floor(N*Y),V===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Z*Y,ae*Y).floor()},this.setDrawingBufferSize=function(b,N,V){Z=b,ae=N,Y=V,t.width=Math.floor(b*V),t.height=Math.floor(N*V),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Oe)},this.setViewport=function(b,N,V,W){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,N,V,W),Ge.viewport(P.copy(Oe).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,N,V,W){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,N,V,W),Ge.scissor(z.copy(st).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){Ge.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(b=!0,N=!0,V=!0){let W=0;if(b){let O=!1;if(F!==null){let oe=F.texture.format;O=oe===zc||oe===Hc||oe===Bc}if(O){let oe=F.texture.type,ge=oe===fi||oe===pi||oe===Fr||oe===Gs||oe===Uc||oe===Nc,we=Ve.getClearColor(),Re=Ve.getClearAlpha(),Ye=we.r,Qe=we.g,Ce=we.b;ge?(g[0]=Ye,g[1]=Qe,g[2]=Ce,g[3]=Re,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=Ye,E[1]=Qe,E[2]=Ce,E[3]=Re,B.clearBufferiv(B.COLOR,0,E))}else W|=B.COLOR_BUFFER_BIT}N&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ae.dispose(),pt.dispose(),ke.dispose(),M.dispose(),G.dispose(),$.dispose(),Pt.dispose(),U.dispose(),Ie.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ah),q.removeEventListener("sessionend",Mh),Vi.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let b=Dt.autoReset,N=Me.enabled,V=Me.autoUpdate,W=Me.needsUpdate,O=Me.type;de(),Dt.autoReset=b,Me.enabled=N,Me.autoUpdate=V,Me.needsUpdate=W,Me.type=O}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Je(b){let N=b.target;N.removeEventListener("dispose",Je),Gt(N)}function Gt(b){on(b),ke.remove(b)}function on(b){let N=ke.get(b).programs;N!==void 0&&(N.forEach(function(V){Ie.releaseProgram(V)}),b.isShaderMaterial&&Ie.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,V,W,O,oe){N===null&&(N=zt);let ge=O.isMesh&&O.matrixWorld.determinant()<0,we=ef(b,N,V,W,O);Ge.setMaterial(W,ge);let Re=V.index,Ye=1;if(W.wireframe===!0){if(Re=ee.getWireframeAttribute(V),Re===void 0)return;Ye=2}let Qe=V.drawRange,Ce=V.attributes.position,Et=Qe.start*Ye,It=(Qe.start+Qe.count)*Ye;oe!==null&&(Et=Math.max(Et,oe.start*Ye),It=Math.min(It,(oe.start+oe.count)*Ye)),Re!==null?(Et=Math.max(Et,0),It=Math.min(It,Re.count)):Ce!=null&&(Et=Math.max(Et,0),It=Math.min(It,Ce.count));let Lt=It-Et;if(Lt<0||Lt===1/0)return;Pt.setup(O,W,we,V,Re);let pn,At=Se;if(Re!==null&&(pn=Q.get(Re),At=dt,At.setIndex(pn)),O.isMesh)W.wireframe===!0?(Ge.setLineWidth(W.wireframeLinewidth*Vt()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(O.isLine){let De=W.linewidth;De===void 0&&(De=1),Ge.setLineWidth(De*Vt()),O.isLineSegments?At.setMode(B.LINES):O.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else O.isPoints?At.setMode(B.POINTS):O.isSprite&&At.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)At.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))At.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let De=O._multiDrawStarts,ii=O._multiDrawCounts,Mt=O._multiDrawCount,Ln=Re?Q.get(Re).bytesPerElement:1,ms=ke.get(W).currentProgram.getUniforms();for(let bn=0;bn<Mt;bn++)ms.setValue(B,"_gl_DrawID",bn),At.render(De[bn]/Ln,ii[bn])}else if(O.isInstancedMesh)At.renderInstances(Et,Lt,O.count);else if(V.isInstancedBufferGeometry){let De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ii=Math.min(V.instanceCount,De);At.renderInstances(Et,Lt,ii)}else At.render(Et,Lt)};function St(b,N,V){b.transparent===!0&&b.side===Ft&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,$r(b,N,V),b.side=Ii,b.needsUpdate=!0,$r(b,N,V),b.side=Ft):$r(b,N,V)}this.compile=function(b,N,V=null){V===null&&(V=b),p=pt.get(V),p.init(N),_.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==V&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let oe=O.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let we=oe[ge];St(we,V,O),W.add(we)}else St(oe,V,O),W.add(oe)}),_.pop(),p=null,W},this.compileAsync=function(b,N,V=null){let W=this.compile(b,N,V);return new Promise(O=>{function oe(){if(W.forEach(function(ge){ke.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){O(b);return}setTimeout(oe,10)}ct.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Dn=null;function ni(b){Dn&&Dn(b)}function Ah(){Vi.stop()}function Mh(){Vi.start()}let Vi=new tu;Vi.setAnimationLoop(ni),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){Dn=b,q.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},q.addEventListener("sessionstart",Ah),q.addEventListener("sessionend",Mh),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,N,F),p=pt.get(b,_.length),p.init(N),_.push(p),We.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),J.setFromProjectionMatrix(We),Fe=this.localClippingEnabled,le=re.init(this.clippingPlanes,Fe),m=Ae.get(b,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&xa(oe,N,-1/0,y.sortObjects)}xa(b,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ue,_e),ft=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ft&&Ve.addToRenderList(m,b),this.info.render.frame++,le===!0&&re.beginShadows();let V=p.state.shadowsArray;Me.render(V,b,N),le===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let oe=N.cameras;if(O.length>0)for(let ge=0,we=oe.length;ge<we;ge++){let Re=oe[ge];bh(W,O,b,Re)}ft&&Ve.render(b);for(let ge=0,we=oe.length;ge<we;ge++){let Re=oe[ge];Sh(m,b,Re,Re.viewport)}}else O.length>0&&bh(W,O,b,N),ft&&Ve.render(b),Sh(m,b,N);F!==null&&(C.updateMultisampleRenderTarget(F),C.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(y,b,N),Pt.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(p=_[_.length-1],le===!0&&re.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function xa(b,N,V,W){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){W&&rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(We);let ge=$.update(b),we=b.material;we.visible&&m.push(b,ge,we,V,rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){let ge=$.update(b),we=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),rt.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),rt.copy(ge.boundingSphere.center)),rt.applyMatrix4(b.matrixWorld).applyMatrix4(We)),Array.isArray(we)){let Re=ge.groups;for(let Ye=0,Qe=Re.length;Ye<Qe;Ye++){let Ce=Re[Ye],Et=we[Ce.materialIndex];Et&&Et.visible&&m.push(b,ge,Et,V,rt.z,Ce)}}else we.visible&&m.push(b,ge,we,V,rt.z,null)}}let oe=b.children;for(let ge=0,we=oe.length;ge<we;ge++)xa(oe[ge],N,V,W)}function Sh(b,N,V,W){let O=b.opaque,oe=b.transmissive,ge=b.transparent;p.setupLightsView(V),le===!0&&re.setGlobalState(y.clippingPlanes,V),W&&Ge.viewport(P.copy(W)),O.length>0&&Zr(O,N,V),oe.length>0&&Zr(oe,N,V),ge.length>0&&Zr(ge,N,V),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function bh(b,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new jt(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?yn:fi,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let oe=p.state.transmissionRenderTarget[W.id],ge=W.viewport||P;oe.setSize(ge.z,ge.w);let we=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),ft&&Ve.render(V);let Re=y.toneMapping;y.toneMapping=Qn;let Ye=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),le===!0&&re.setGlobalState(y.clippingPlanes,W),Zr(b,V,W),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ce=0,Et=N.length;Ce<Et;Ce++){let It=N[Ce],Lt=It.object,pn=It.geometry,At=It.material,De=It.group;if(At.side===Ft&&Lt.layers.test(W.layers)){let ii=At.side;At.side=Qt,At.needsUpdate=!0,xh(Lt,V,W,pn,At,De),At.side=ii,At.needsUpdate=!0,Qe=!0}}Qe===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}y.setRenderTarget(we),y.setClearColor(X,j),Ye!==void 0&&(W.viewport=Ye),y.toneMapping=Re}function Zr(b,N,V){let W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,oe=b.length;O<oe;O++){let ge=b[O],we=ge.object,Re=ge.geometry,Ye=W===null?ge.material:W,Qe=ge.group;we.layers.test(V.layers)&&xh(we,N,V,Re,Ye,Qe)}}function xh(b,N,V,W,O,oe){b.onBeforeRender(y,N,V,W,O,oe),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,N,V,W,b,oe),O.transparent===!0&&O.side===Ft&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,y.renderBufferDirect(V,N,W,O,b,oe),O.side=Ii,O.needsUpdate=!0,y.renderBufferDirect(V,N,W,O,b,oe),O.side=Ft):y.renderBufferDirect(V,N,W,O,b,oe),b.onAfterRender(y,N,V,W,O,oe)}function $r(b,N,V){N.isScene!==!0&&(N=zt);let W=ke.get(b),O=p.state.lights,oe=p.state.shadowsArray,ge=O.state.version,we=Ie.getParameters(b,O.state,oe,N,V),Re=Ie.getProgramCacheKey(we),Ye=W.programs;W.environment=b.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(b.isMeshStandardMaterial?G:M).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",Je),Ye=new Map,W.programs=Ye);let Qe=Ye.get(Re);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===ge)return wh(b,we),Qe}else we.uniforms=Ie.getUniforms(b),b.onBeforeCompile(we,y),Qe=Ie.acquireProgram(we,Re),Ye.set(Re,Qe),W.uniforms=we.uniforms;let Ce=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=re.uniform),wh(b,we),W.needsLights=nf(b),W.lightsStateVersion=ge,W.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function Th(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Bs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function wh(b,N){let V=ke.get(b);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function ef(b,N,V,W,O){N.isScene!==!0&&(N=zt),C.resetTextureUnits();let oe=N.fog,ge=W.isMeshStandardMaterial?N.environment:null,we=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Oi,Re=(W.isMeshStandardMaterial?G:M).get(W.envMap||ge),Ye=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!V.morphAttributes.position,Et=!!V.morphAttributes.normal,It=!!V.morphAttributes.color,Lt=Qn;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let pn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,At=pn!==void 0?pn.length:0,De=ke.get(W),ii=p.state.lights;if(le===!0&&(Fe===!0||b!==A)){let Cn=b===A&&W.id===S;re.setState(W,b,Cn)}let Mt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ii.state.version||De.outputColorSpace!==we||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==Re||W.fog===!0&&De.fog!==oe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==Ye||De.vertexTangents!==Qe||De.morphTargets!==Ce||De.morphNormals!==Et||De.morphColors!==It||De.toneMapping!==Lt||De.morphTargetsCount!==At)&&(Mt=!0):(Mt=!0,De.__version=W.version);let Ln=De.currentProgram;Mt===!0&&(Ln=$r(W,N,O));let ms=!1,bn=!1,fr=!1,Ut=Ln.getUniforms(),Xn=De.uniforms;if(Ge.useProgram(Ln.program)&&(ms=!0,bn=!0,fr=!0),W.id!==S&&(S=W.id,bn=!0),ms||A!==b){Ge.buffers.depth.getReversed()?(fe.copy(b.projectionMatrix),qf(fe),Yf(fe),Ut.setValue(B,"projectionMatrix",fe)):Ut.setValue(B,"projectionMatrix",b.projectionMatrix),Ut.setValue(B,"viewMatrix",b.matrixWorldInverse);let _i=Ut.map.cameraPosition;_i!==void 0&&_i.setValue(B,$e.setFromMatrixPosition(b.matrixWorld)),ht.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,bn=!0,fr=!0)}if(O.isSkinnedMesh){Ut.setOptional(B,O,"bindMatrix"),Ut.setOptional(B,O,"bindMatrixInverse");let Cn=O.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Ut.setValue(B,"boneTexture",Cn.boneTexture,C))}O.isBatchedMesh&&(Ut.setOptional(B,O,"batchingTexture"),Ut.setValue(B,"batchingTexture",O._matricesTexture,C),Ut.setOptional(B,O,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",O._indirectTexture,C),Ut.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",O._colorsTexture,C));let pr=V.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&qe.update(O,V,Ln),(bn||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,Ut.setValue(B,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Xn.envMap.value=Re,Xn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Xn.envMapIntensity.value=N.environmentIntensity),bn&&(Ut.setValue(B,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&tf(Xn,fr),oe&&W.fog===!0&&pe.refreshFogUniforms(Xn,oe),pe.refreshMaterialUniforms(Xn,W,Y,ae,p.state.transmissionRenderTarget[b.id]),Bs.upload(B,Th(De),Xn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bs.upload(B,Th(De),Xn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(B,"center",O.center),Ut.setValue(B,"modelViewMatrix",O.modelViewMatrix),Ut.setValue(B,"normalMatrix",O.normalMatrix),Ut.setValue(B,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Cn=W.uniformsGroups;for(let _i=0,Ai=Cn.length;_i<Ai;_i++){let Rh=Cn[_i];U.update(Rh,Ln),U.bind(Rh,Ln)}}return Ln}function tf(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function nf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,N,V){ke.get(b.texture).__webglTexture=N,ke.get(b.depthTexture).__webglTexture=V;let W=ke.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){let V=ke.get(b);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,V=0){F=b,R=N,w=V;let W=!0,O=null,oe=!1,ge=!1;if(b){let Re=ke.get(b);if(Re.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(Re.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Re.__hasExternalTextures)C.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ce=b.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&ke.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}let Ye=b.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ge=!0);let Qe=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[N])?O=Qe[N][V]:O=Qe[N],oe=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?O=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?O=Qe[V]:O=Qe,P.copy(b.viewport),z.copy(b.scissor),k=b.scissorTest}else P.copy(Oe).multiplyScalar(Y).floor(),z.copy(st).multiplyScalar(Y).floor(),k=Ct;if(Ge.bindFramebuffer(B.FRAMEBUFFER,O)&&W&&Ge.drawBuffers(b,O),Ge.viewport(P),Ge.scissor(z),Ge.setScissorTest(k),oe){let Re=ke.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,V)}else if(ge){let Re=ke.get(b.texture),Ye=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,Ye)}S=-1},this.readRenderTargetPixels=function(b,N,V,W,O,oe,ge){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Ge.bindFramebuffer(B.FRAMEBUFFER,we);try{let Re=b.texture,Ye=Re.format,Qe=Re.type;if(!ht.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-W&&V>=0&&V<=b.height-O&&B.readPixels(N,V,W,O,je.convert(Ye),je.convert(Qe),oe)}finally{let Re=F!==null?ke.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,N,V,W,O,oe,ge){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){let Re=b.texture,Ye=Re.format,Qe=Re.type;if(!ht.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-W&&V>=0&&V<=b.height-O){Ge.bindFramebuffer(B.FRAMEBUFFER,we);let Ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.bufferData(B.PIXEL_PACK_BUFFER,oe.byteLength,B.STREAM_READ),B.readPixels(N,V,W,O,je.convert(Ye),je.convert(Qe),0);let Et=F!==null?ke.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Et);let It=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xf(B,It,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,oe),B.deleteBuffer(Ce),B.deleteSync(It),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,V=0){b.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);let W=Math.pow(2,-V),O=Math.floor(b.image.width*W),oe=Math.floor(b.image.height*W),ge=N!==null?N.x:0,we=N!==null?N.y:0;C.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,ge,we,O,oe),Ge.unbindTexture()},this.copyTextureToTexture=function(b,N,V=null,W=null,O=0){b.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],N=arguments[2],O=arguments[3]||0,V=null);let oe,ge,we,Re,Ye,Qe,Ce,Et,It,Lt=b.isCompressedTexture?b.mipmaps[O]:b.image;V!==null?(oe=V.max.x-V.min.x,ge=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,Ye=V.min.y,Qe=V.isBox3?V.min.z:0):(oe=Lt.width,ge=Lt.height,we=Lt.depth||1,Re=0,Ye=0,Qe=0),W!==null?(Ce=W.x,Et=W.y,It=W.z):(Ce=0,Et=0,It=0);let pn=je.convert(N.format),At=je.convert(N.type),De;N.isData3DTexture?(C.setTexture3D(N,0),De=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),De=B.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),De=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let ii=B.getParameter(B.UNPACK_ROW_LENGTH),Mt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ln=B.getParameter(B.UNPACK_SKIP_PIXELS),ms=B.getParameter(B.UNPACK_SKIP_ROWS),bn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Re),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);let fr=b.isDataArrayTexture||b.isData3DTexture,Ut=N.isDataArrayTexture||N.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Xn=ke.get(b),pr=ke.get(N),Cn=ke.get(Xn.__renderTarget),_i=ke.get(pr.__renderTarget);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ai=0;Ai<we;Ai++)fr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(b).__webglTexture,O,Qe+Ai),b.isDepthTexture?(Ut&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(N).__webglTexture,O,It+Ai),B.blitFramebuffer(Re,Ye,oe,ge,Ce,Et,oe,ge,B.DEPTH_BUFFER_BIT,B.NEAREST)):Ut?B.copyTexSubImage3D(De,O,Ce,Et,It+Ai,Re,Ye,oe,ge):B.copyTexSubImage2D(De,O,Ce,Et,It+Ai,Re,Ye,oe,ge);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ut?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(De,O,Ce,Et,It,oe,ge,we,pn,At,Lt.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(De,O,Ce,Et,It,oe,ge,we,pn,Lt.data):B.texSubImage3D(De,O,Ce,Et,It,oe,ge,we,pn,At,Lt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,Ce,Et,oe,ge,pn,At,Lt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,Ce,Et,Lt.width,Lt.height,pn,Lt.data):B.texSubImage2D(B.TEXTURE_2D,O,Ce,Et,oe,ge,pn,At,Lt);B.pixelStorei(B.UNPACK_ROW_LENGTH,ii),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ln),B.pixelStorei(B.UNPACK_SKIP_ROWS,ms),B.pixelStorei(B.UNPACK_SKIP_IMAGES,bn),O===0&&N.generateMipmaps&&B.generateMipmap(De),Ge.unbindTexture()},this.copyTextureToTexture3D=function(b,N,V=null,W=null,O=0){return b.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,b=arguments[2],N=arguments[3],O=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,V,W,O)},this.initRenderTarget=function(b){ke.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Ge.unbindTexture()},this.resetState=function(){R=0,w=0,F=null,Ge.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}},Be=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Xo=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},cc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yl,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new I,qo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ys=class extends gi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,vr=new I,Ps=new I,Is=new I,Ds=new se,_r=new se,ou=new wt,yo=new I,Ar=new I,vo=new I,wd=new se,nl=new se,Rd=new se,Ir=class extends Wt{constructor(e=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cc(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new qo(i,3,0,!1)),Fs.setAttribute("uv",new qo(i,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Is.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;_o(yo.set(-.5,-.5,0),Is,o,Ps,s,r),_o(Ar.set(.5,-.5,0),Is,o,Ps,s,r),_o(vo.set(.5,.5,0),Is,o,Ps,s,r),wd.set(0,0),nl.set(1,0),Rd.set(1,1);let a=e.ray.intersectTriangle(yo,Ar,vo,!1,vr);if(a===null&&(_o(Ar.set(-.5,.5,0),Is,o,Ps,s,r),nl.set(0,1),a=e.ray.intersectTriangle(yo,vo,Ar,!1,vr),a===null))return;let l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:Ci.getInterpolation(vr,yo,Ar,vo,wd,nl,Rd,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _o(n,e,t,i,s,r){Ds.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(_r.x=r*Ds.x-s*Ds.y,_r.y=s*Ds.x+r*Ds.y):_r.copy(Ds),n.copy(e),n.x+=_r.x,n.y+=_r.y,n.applyMatrix4(ou)}var hc=class extends gn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wn,h=wn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yo=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new wt,Cd=new wt,Ao=[],Fd=new mi,z2=new wt,Mr=new H,Sr=new Ui,Zo=class extends H{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,z2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Fd.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Sr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(i),e.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Cd.multiplyMatrices(i,Ls),Mr.matrixWorld=Cd,Mr.raycast(e,Ao);for(let o=0,a=Ao.length;o<a;o++){let l=Ao[o];l.instanceId=r,l.object=this,t.push(l)}Ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hc(new Float32Array(s*this.count),s,this.count,Oc,$n));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zs=class extends gi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pd=new wt,dc=new Oo,Mo=new Ui,So=new I,Dr=class extends Wt{constructor(e=new Xt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Pd.copy(s).invert(),dc.copy(e.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);So.fromBufferAttribute(d,m),Id(So,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,E=f;g<E;g++)So.fromBufferAttribute(d,g),Id(So,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Id(n,e,t,i,s,r,o){let a=dc.distanceSqToPoint(n);if(a<t){let l=new I;dc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Hn=class extends gn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new wt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(nn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lr=class extends Pn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},uc=class extends Lr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var bo=new I,il=new Gc,sl=new Gc,rl=new Gc,$s=class extends Pn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),il.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),sl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),rl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),sl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),rl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(il.calc(l),sl.calc(l),rl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function k2(n,e){let t=1-n;return t*t*e}function G2(n,e){return 2*(1-n)*n*e}function V2(n,e){return n*n*e}function Rr(n,e,t,i){return k2(n,e)+G2(n,t)+V2(n,i)}function W2(n,e){let t=1-n;return t*t*t*e}function X2(n,e){let t=1-n;return 3*t*t*n*e}function q2(n,e){return 3*(1-n)*n*n*e}function Y2(n,e){return n*n*n*e}function Cr(n,e,t,i,s){return W2(n,e)+X2(n,t)+q2(n,i)+Y2(n,s)}var $o=class extends Pn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fc=class extends Pn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Cr(e,s.x,r.x,o.x,a.x),Cr(e,s.y,r.y,o.y,a.y),Cr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends Pn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pc=class extends Pn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends Pn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends Pn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Dd(a,l.x,c.x,h.x,d.x),Dd(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},mc=Object.freeze({__proto__:null,ArcCurve:uc,CatmullRomCurve3:$s,CubicBezierCurve:$o,CubicBezierCurve3:fc,EllipseCurve:Lr,LineCurve:Jo,LineCurve3:pc,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:Ko,SplineCurve:jo}),gc=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new mc[s.type]().fromJSON(s))}return this}},Ec=class extends gc{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Jo(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Qo(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new $o(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new jo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Lr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ea=class n extends Xt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=nn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new I,u=new se,f=new I,g=new I,E=new I,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,E.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(E.x,E.y,E.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=E.x,f.y+=E.y,f.z+=E.z,f.normalize(),l.push(f.x,f.y,f.z),E.copy(g)}for(let v=0;v<=t;v++){let _=i+v*h*s,y=Math.sin(_),D=Math.cos(_);for(let R=0;R<=e.length-1;R++){d.x=e[R].x*y,d.y=e[R].y,d.z=e[R].x*D,o.push(d.x,d.y,d.z),u.x=v/t,u.y=R/(e.length-1),a.push(u.x,u.y);let w=l[3*R+0]*y,F=l[3*R+1],S=l[3*R+0]*D;c.push(w,F,S)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,D=y,R=y+e.length,w=y+e.length+1,F=y+1;r.push(D,R,F),r.push(w,F,R)}this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("uv",new gt(a,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Js=class n extends ea{constructor(e=1,t=1,i=4,s=8){let r=new Ec;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},jn=class n extends Xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xe=class n extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function v(){let y=new I,D=new I,R=0,w=(t-e)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,P=A*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,X=k*l+a,j=Math.sin(X),Z=Math.cos(X);D.x=P*j,D.y=-A*i+m,D.z=P*Z,d.push(D.x,D.y,D.z),y.set(j,w,Z).normalize(),u.push(y.x,y.y,y.z),f.push(k,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],P=E[S+1][F],z=E[S+1][F+1],k=E[S][F+1];(e>0||S!==0)&&(h.push(A,P,k),R+=3),(t>0||S!==r-1)&&(h.push(P,z,k),R+=3)}c.addGroup(p,R,0),p+=R}function _(y){let D=g,R=new se,w=new I,F=0,S=y===!0?e:t,A=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let z=0;z<=s;z++){let X=z/s*l+a,j=Math.cos(X),Z=Math.sin(X);w.x=S*Z,w.y=m*A,w.z=S*j,d.push(w.x,w.y,w.z),u.push(0,A,0),R.x=j*.5+.5,R.y=Z*.5*A+.5,f.push(R.x,R.y),g++}for(let z=0;z<s;z++){let k=D+z,X=P+z;y===!0?h.push(X,X+1,k):h.push(X+1,X,k),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hn=class n extends Xe{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yc=class n extends Xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,D=new I;for(let R=0;R<t.length;R+=3)f(t[R+0],_),f(t[R+1],y),f(t[R+2],D),l(_,y,D,v)}function l(v,_,y,D){let R=D+1,w=[];for(let F=0;F<=R;F++){w[F]=[];let S=v.clone().lerp(y,F/R),A=_.clone().lerp(y,F/R),P=R-F;for(let z=0;z<=P;z++)z===0&&F===R?w[F][z]=S:w[F][z]=S.clone().lerp(A,z/P)}for(let F=0;F<R;F++)for(let S=0;S<2*(R-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(w[F][A+1]),u(w[F+1][A]),u(w[F][A])):(u(w[F][A+1]),u(w[F+1][A+1]),u(w[F+1][A]))}}function c(v){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,D=p(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],D=o[v+4],R=Math.max(_,y,D),w=Math.min(_,y,D);R>.9&&w<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new I,_=new I,y=new I,D=new I,R=new se,w=new se,F=new se;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),R.set(o[A+0],o[A+1]),w.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),D.copy(v).add(_).add(y).divideScalar(3);let P=m(D);E(R,A+0,v,P),E(w,A+2,_,P),E(F,A+4,y,P)}}function E(v,_,y,D){D<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Qs=class n extends yc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var nt=class n extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let R=D/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(R+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let _=h[p][v+1],y=h[p][v],D=h[p+1][v],R=h[p+1][v+1];(p!==0||o>0)&&f.push(_,y,R),(p!==i-1||l<Math.PI)&&f.push(y,D,R)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(E,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rn=class n extends Xt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(E,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ur=class n extends Xt{constructor(e=new Ko(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new se,h=new I,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function E(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),p()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],D=o.binormals[_];for(let R=0;R<=s;R++){let w=R/s*Math.PI*2,F=Math.sin(w),S=-Math.cos(w);l.x=S*y.x+F*D.x,l.y=S*y.y+F*D.y,l.z=S*y.z+F*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let D=(s+1)*(_-1)+(y-1),R=(s+1)*_+(y-1),w=(s+1)*_+y,F=(s+1)*(_-1)+y;g.push(D,R,F),g.push(R,w,F)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new mc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Le=class extends gi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function xo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Z2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ks=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ih,endingEnd:Ih}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dh:r=e,a=2*t-i;break;case Lh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dh:o=e,l=2*i-t;break;case Lh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+v*o[c+D]+_*o[l+D]+y*o[d+D];return r}},_c=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ac=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xo(t,this.TimeBufferType),this.values=xo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:xo(e.times,Array),values:xo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case ql:t=this.InterpolantFactoryMethodLinear;break;case wa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Z2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=ql;var ts=class extends zn{constructor(e,t,i){super(e,t,i)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Po;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends zn{};Mc.prototype.ValueTypeName="color";var Sc=class extends zn{};Sc.prototype.ValueTypeName="number";var bc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Li.slerpFlat(r,0,o,c-a,o,c,l);return r}},ta=class extends zn{InterpolantFactoryMethodLinear(e){return new bc(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends zn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Po;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends zn{};xc.prototype.ValueTypeName="vector";var Tc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},$2=new Tc,wc=class{constructor(e){this.manager=e!==void 0?e:$2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var js=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ne=class extends js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ol=new wt,Ld=new I,Ud=new I,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ud),t.updateMatrixWorld(),ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rc=class extends Nr{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Do*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ei=class extends js{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Nd=new wt,br=new I,al=new I,Cc=class extends Nr{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),br.setFromMatrixPosition(e.matrixWorld),i.position.copy(br),al.copy(i.position),al.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(al),i.updateMatrixWorld(),s.makeTranslation(-br.x,-br.y,-br.z),Nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd)}},ot=class extends js{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Fc=class extends Nr{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var na=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Od(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Od();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Od(){return 0}var Vc="\\[\\]\\.:\\/",J2=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",Q2="[^"+Vc.replace("\\.","")+"]",K2=/((?:WC+[\/:])*)/.source.replace("WC",Wc),j2=/(WCOD+)?/.source.replace("WCOD",Q2),eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),ng=new RegExp("^"+K2+j2+eg+tg+"$"),ig=["material","materials","bones","map"],Pc=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J2,"")}static parseTrackName(e){let t=ng.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ig.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Pc;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);var oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sg=new Xs(-1,1,1,-1,0,1),Xc=class extends Xt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},rg=new Xc,sr=class{constructor(e){this._mesh=new H(rg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var is=class extends Ei{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nr.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new sr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Or=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},aa=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var la=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new se);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new is(oa),this.copyPass.material.blending=Jn,this.clock=new na}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Or!==void 0&&(o instanceof Or?i=!0:o instanceof aa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var au={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var rr=class n extends Ei{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new he(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new jt(r,o,{type:yn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new jt(r,o,{type:yn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=au;this.highPassUniforms=nr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=oa;this.copyUniforms=nr.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new he,this.oldClearAlpha=1,this.basic=new tt,this.fsQuad=new sr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};rr.BlurDirectionX=new se(1,0);rr.BlurDirectionY=new se(0,1);var ss=1280,rs=720;function Ue(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var qc=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Nt=(n,e,t)=>n+(e-n)*t,yt=(n,e,t)=>{let i=qc((t-n)/(e-n));return i*i*(3-2*i)};var og=n=>(n=qc(n),n*n*(3-2*n));function ha(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=og((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>Nt(o,r[a],i)):Nt(s,r,i)}return n[n.length-1][1]}var ag={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new se(ss,rs)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},lg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new he(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},ca=class{constructor(e){let t=this.r=new Wo({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(ss,rs,!1),t.shadowMap.enabled=!0,t.shadowMap.type=Dc,t.toneMapping=Qn,t.outputColorSpace=Oi;let i=new qs(ss,rs);i.type=pi,this.rt=new jt(ss,rs,{type:yn,samples:2,depthTexture:i}),this.composer=new la(t,new jt(ss,rs,{type:yn})),this.dof=new is(ag,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new rr(new se(ss/2,rs/2),.45,.75,.82),this.grade=new is(lg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function lu(n,e,t,i=40){let s=new Xo;s.background=new he(t);let r=new sn(i,ss/rs,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function cu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var An=1/420,Yc=new Map;function Mn(n,e,t,i){if(Yc.has(n))return Yc.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Hn(s);return o.colorSpace=kt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Yc.set(n,o),o}var vt=n=>new Path2D(n);function tn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function kn(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var cg={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function hg(n,e){return Mn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=vt("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");tn(t,i,kn(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(vt("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(vt("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(vt("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=vt("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){tn(t,vt("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),kn(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(vt("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(vt("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(vt("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(vt("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(vt("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")tn(t,vt("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),kn(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(vt("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(vt("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(vt("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){tn(t,vt("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),kn(t,-60,0,60,120,n.a,n.b)),tn(t,vt("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),kn(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else tn(t,vt("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),kn(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(vt("M-22 26 L22 26 L0 64Z")),tn(t,vt("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function hu(n,e,t){return Mn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(tn(i,vt("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),kn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(tn(i,vt("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;tn(i,vt(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),kn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(vt(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(vt(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function dg(){return Mn("hand",90,100,n=>{n.translate(45,14);let e=vt("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");tn(n,e,kn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function du(n){return Mn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function ug(){return Mn("foot",80,40,n=>{n.translate(26,6),tn(n,vt("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function fg(n="round"){return Mn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var pu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function pg(n,e){return Mn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),pu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function mg(n,e,t){return Mn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=vt("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");tn(i,s,kn(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),tn(i,s,e);let r=vt("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");tn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),tn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=vt("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");tn(i,s,kn(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),tn(i,l,"#E9E9EF")})})})}var uu=(n,e={})=>new tt({map:n,alphaTest:.5,alphaToCoverage:!0,side:Ft,...e}),fu=new Map,Zc=new Map,gg=[];function Eg(n){if(Zc.has(n))return Zc.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Hn(t);return r.colorSpace=kt,r.anisotropy=8,Zc.set(n,r),r}function _n(n,e,t,i,s,r=0,o,a=!1){let l=new xe(e*An,t*An);l.translate((e/2-i)*An,(s-t/2)*An,0);let c=uu(n);o.push(c);let h=new H(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=uu(Eg(n),{color:"#FFE9C8"});gg.push(u);let f=new H(l,u);f.position.z=-.045-r,h.add(f)}let d=fu.get(n);return d||(d=new Ni({depthPacking:tr,map:n,alphaTest:.5,side:Ft}),fu.set(n,d)),h.customDepthMaterial=d,h}function yg(){return Mn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function vg(){return Mn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function $c(n={}){let e=cg[n.outfit||"hero"],t=n.outfit||"hero",i=new te,s=[],r=new te;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new te;_.position.set(p*34*An,o*An,v);let y=new te;y.position.y=-142*An,_.add(_n(du(1),50,160,25,6,0,s)),y.add(_n(du(1),50,160,25,6,0,s));let D=_n(ug(),80,40,26,6,.001,s);D.position.y=-142*An,p<0&&(D.scale.x=-1),y.add(D),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=_n(hg(e,t),300,320,150,20,0,s);h.position.y=(a+4)*An,r.add(h);for(let[m,p,v]of[["L",-1,-.006],["R",1,.006]]){let _=new te;_.position.set(p*(e.kind==="dress"?66:84)*An,(a-24)*An,v);let y=new te;y.position.y=-124*An,_.add(_n(hu(e,t,"u"),90,170,45,10,0,s)),y.add(_n(hu(e,t,"f"),90,170,45,10,.001,s));let D=_n(dg(),90,100,45,14,.002,s);D.position.y=-128*An,D.scale.set(p>0?-.8:.8,.8,1),y.add(D),_.add(y),r.add(_),c[m]={u:_,f:y,hand:D}}let d=new te;if(d.position.set(0,(a+104)*An,.02),r.add(d),n.hair){let m=_n(mg(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(_n(fg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=_n(Mn("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let v=n.hairc||"#4a2c1a";p.fillStyle=v,p.fill(vt(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=_n(Mn("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(v=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(v*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(pu)){let p=_n(pg(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",d.add(p),u[m]=p}if(n.glasses){let m=_n(Mn("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=_n(n.hat(Mn),300,300,150,150,.006,s);d.add(m)}let f=new H(new xe(1,.4),new tt({map:yg(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new H(new xe(2.1,3),new tt({map:vg(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:mn,side:Ft})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in u)u[p].visible=p===m},cheer(m,p=0,v=1){let _=m*6+p,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*p,c.L.f.rotation.z=-v[1]*p,c.R.u.rotation.z=_[0]*p,c.R.f.rotation.z=_[1]*p,l.L.th.rotation.z=-y[0]*p,l.L.shin.rotation.z=-y[1]*p,l.R.th.rotation.z=D[0]*p,l.R.shin.rotation.z=D[1]*p,d.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let R=m.squash||0;r.scale.set(1-R*.5,1+R,1)},walk(m,p=1,v=1){let _=m*6.4*p,y=Math.sin(_),D=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,p,v=0,_=1){i.position.set(m,v,p),i.scale.setScalar(_)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return E.pose(),E}function ve(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Hn(i);return r.colorSpace=kt,r.anisotropy=8,r}var os=(n,e={})=>new Le({color:n,roughness:.88,metalness:0,...e});function x(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new H(new En(n,e,t),typeof i=="string"?os(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Ze(n,e,t=1){let i=ve(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Ir(new Ys({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:mn}));return s.scale.set(e,e,1),s}var mu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function _g(n,e,t,i,s,r=.42){let o=Ue(n),a=256*e,l=300*t,c,h=ve(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,f,28,10);for(let f=0;f<t;f++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,f*300+292,a,8)}),d=ve(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,p=g*300+60,v=144,_=196,y=o()<r,D=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,v+18,_+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+_+9,v+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+_+6,v+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,v,_),y||!s){let R=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=R,f.fillRect(m,p,26,_),f.fillRect(m+v-26,p,26,_)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+_),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+_),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+v/2-3,p,6,_),f.fillRect(m,p+_*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,p,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,p,6,_),u.fillRect(m,p+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=kt,{map:h,emissiveMap:d}}function Bi(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=Ue(n),u=new te,f=o*2.9+3.6,g=c||mu[Math.floor(d()*mu.length)],E=Math.max(2,Math.round(r/2.1)),m=_g(n,E,o,g,l,e.lit??.42),p=new Le({map:m.map,emissiveMap:m.emissiveMap,emissive:new he(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=os(g),_=[a>0?p:v,a>0?v:p,os("#2c2730"),v,v,v],y=new H(new En(s,o*2.9,r),_);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(x(s+.5,.5,r+.5,"#3d3540",t,f+.25,i)),u.add(x(s+.3,.35,r+.3,g,t,3.6,i));let D=t+a*(s/2+.01);if(h){let R=ve(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),w=new H(new En(.18,1.05,r-.3),[new Le({map:R,emissiveMap:R,emissive:new he(l?.85:0,l?.85:0,l?.85:0)}),new Le({map:R,emissiveMap:R,emissive:new he(l?.85:0,l?.85:0,l?.85:0)}),os("#222"),os("#222"),os("#222"),os("#222")]);w.position.set(D+a*.1,3.25,i),a>0&&(w.scale.z=-1),w.castShadow=!0,u.add(w);let F=ve(512,256,P=>{let z=P.createLinearGradient(0,0,0,256);z.addColorStop(0,h.win||"#F4C783"),z.addColorStop(1,"#D59A5C"),P.fillStyle=z,P.fillRect(0,0,512,256);let k=Ue(n+9);for(let X=0;X<26;X++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(k()*6)],P.fillRect(k()*490,30+Math.floor(k()*3)*76,12+k()*26,52);for(let X of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,X,512,7)}),S=new Le({map:F,emissiveMap:F,emissive:new he(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(x(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let A=new H(new xe(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(D+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(x(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=ve(512,128,k=>{for(let X=0;X<12;X++)k.fillStyle=X%2?h.awning:"#F4EEDF",k.fillRect(X*512/12,0,42.666666666666664,128)}),z=new H(new xe(r-.3,1.3),new Le({map:P,side:Ft,roughness:.9}));z.rotation.y=a*Math.PI/2,z.rotation.order="YXZ",z.rotation.x=-1,z.position.set(D+a*.55,2.56,i),z.castShadow=!0,u.add(z)}if(l){let P=new ot(h.light||"#FFC88A",3.2,7,1.8);P.position.set(D+a*1.7,2.1,i),u.add(P)}}return u}function gu(n,e,t){let i=new H(new xe(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function Ag(n="#A99D90"){let e=ve(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=Ue(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=cn,e}function da(n,e){let t=ve(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Ue(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=cn,t.repeat.set(1,12);let i=gu(9,240,new Le({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=Ag(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=gu(4.4,240,new Le({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(x(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function ua(n,e,t,i,s=!0,r=5.5){let o=new te;o.add(x(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(x(.26,.3,.26,"#15151b",e,.15,t));let a=x(.26,.4,.26,new Le({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(x(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=Ze("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new ot("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var Eu={};function dn(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new te;o.add(x(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=Eu[a]||(Eu[a]=ve(512,512,c=>{let h=Ue(r%3+3),d=(u,f,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,v=g*(.86+.14*Math.sin(p*5+u)+h()*.05);c.lineTo(u+Math.cos(p)*v,f+Math.sin(p)*v)}c.fill()};for(let[u,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,f,g,s[0]);for(let[u,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,f,g,s[1]);for(let[u,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,f,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new H(new xe(3.6*i,3.6*i),new Le({map:l,alphaTest:.5,side:Ft,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Ni({depthPacking:tr,map:l,alphaTest:.5,side:Ft}),o.add(h)}return n.add(o),o}function Gn(n,e,t,i,s,r,o=3,a=0){let l=ve(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Ue(o);for(let u=0;u<3;u++)for(let f=-40;f<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(f,900-E,g,E),d()<.2&&h.fillRect(f+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new H(new xe(t,i),new tt({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Rt(n,e,t,i,s){let r=ve(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new H(new xe(t,i),new tt({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var T=(n,e={})=>new Le({color:n,roughness:.85,...e});function He(n,e,t,i={}){let s=new H(new xe(e,t),new tt({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:Ft,color:i.color||"#fff",blending:i.add?mn:Fi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Ni({depthPacking:tr,map:n,alphaTest:.5,side:Ft})),s}function yi(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var Jc={value:0};function fa(n="#8E3D30",e=4,t=3){let i=ve(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Ue(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=cn,i.repeat.set(e,t),i}function yu(n="#A59383",e=12,t=12){let i=ve(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Ue(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=cn,i.repeat.set(e,t),i}var vu=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function Mg(n,e){let[t,i,s,r]=vu[n];return ve(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Qc(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=Ue(o),l={};for(let c of e){let h=Math.floor(a()*vu.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=Mg(d,h),f=new tt({map:u,alphaTest:.5,side:Ft,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=Jc,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new Zo(new xe(i*.5,i),f,l[c].length),E=new Wt;l[c].forEach((m,p)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(p,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function Sn(n,e=2600,t=300,i=1){let s=Ue(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,f=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(f)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(f)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Xt;a.setAttribute("position",new Kt(r,3)),a.setAttribute("color",new Kt(o,3));let l=ve(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new Zs({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Dr(a,c);return h.frustumCulled=!1,n.add(h),h}function vi(n,e,t="#6D4A33"){let i=ve(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=Ue(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=cn,i.repeat.set(n/5,e/5);let s=new H(new xe(n,e),new Le({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function ti(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=ve(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=cn,r.repeat.set(n/s*4,e/s*4);let o=new H(new xe(n,e),new Le({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function as(n,e,t="#FFD9A0",i=.22){let s=ve(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new H(new xe(n,e),new tt({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:mn,side:Ft,fog:!1}))}function Kc(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new te,a=new H(new Xe(.3,.22,.5,20),T(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=ve(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=He(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function jc(n,e,t,i="#2A1E18"){let s=new te;s.add(x(n+.08,e+.08,.04,i,0,0,0));let r=ve(Math.round(n*400),Math.round(e*400),t),o=new H(new xe(n,e),new Le({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Ot(n,e,t,i=1.2){return new H(new xe(n,e),new Le({color:"#000",emissive:t,emissiveIntensity:i}))}function at(n,e,t,i=10,s=60){let r=new er(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function Br(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Be(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Rt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),Gn(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=fa(t,2,2),a=()=>new Le({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,E,m])=>n.add(x(E,m,.3,a(),f,g,-3)));for(let[f,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(x(E,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(x(18,5.2,.3,a(),0,2.6,-3));n.add(vi(18,12,s));let l=jc(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Kc(4.4,0,-2.4,1.1)),n.add(Kc(-5,0,-2.4,.9,"#36AEA2")),n.add(new Ne(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=at(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new ot("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new H(new Xe(.18,.3,.34,24),new Le({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(x(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=Ze("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var _u=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Hr(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Be(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Rt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),Gn(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),da(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Bi(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:_u[(a+i)%5]})),n.add(Bi(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:_u[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)dn(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),ua(n,-5,-3-l*12,1,t||r);n.add(new Ne(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(at(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},lt=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},_t=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},or={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),lt(n,120,330,34,100,14,"#B5784A"),lt(n,340,330,34,100,14,"#B5784A"),lt(n,180,340,34,90,14,"#C98E5E"),lt(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),lt(n,120,330,34,100,14,"#B5906A"),lt(n,340,330,34,100,14,"#B5906A"),lt(n,180,340,34,90,14,"#C9A07E"),lt(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),_t(n,[[96,120],[110,30],[160,100]],"#E9853A"),_t(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),_t(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),_t(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),_t(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),lt(n,92,200,26,70,12,"#A87A44"),lt(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),_t(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),_t(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),_t(n,[[300,90],[360,20],[370,100]],"#5A88AC"),_t(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),_t(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])lt(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),_t(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{lt(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),_t(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),lt(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),_t(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),_t(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])lt(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),_t(n,[[80,80],[60,40],[104,72]],"#C9A06A"),_t(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])lt(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),_t(n,[[160,70],[150,30],[196,70]],"#E890A4"),_t(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),lt(n,40,260,70,240,30,"#2E2E38"),lt(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{lt(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])lt(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),lt(n,160,20,12,50,6,"#8A5A2A"),lt(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])lt(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),_t(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),_t(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),_t(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])lt(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])lt(n,e,330,26,180,12,"#9A6238");lt(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),_t(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])lt(n,e,360,34,190,14,"#4A3222");lt(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)_t(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])lt(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),_t(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),_t(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])lt(n,e,320,34,230,14,"#7A4A2E");lt(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),lt(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),_t(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},pa={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(pa,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in pa)or[n][3]=pa[n][0],or[n][4]=pa[n][1];or.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),_t(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];or.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)_t(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),_t(n,[[100,80],[90,30],[130,74]],"#F2913A"),_t(n,[[160,76],[170,26],[190,80]],"#F2913A"),lt(n,160,380,40,56,18,"#6AB05A"),lt(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];or.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])lt(n,e,320,34,230,14,"#E4DED2");lt(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),lt(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),_t(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var ma={},Au=n=>ma["e"+n]||(ma["e"+n]=ve(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function Mu(n,e={}){let[t,i,s,r,o,a]=or[n],l=ma[n]||(ma[n]=ve(t,i,s)),c=a*i/t,h=new te,d=new te;h.add(d);let u=He(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let f=new H(new xe(o*a,o*a*.5),new tt({map:Au("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(f);let g=new H(new jn(a*.45,24),new tt({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){f.material.map=Au(m)},face(m){let p=new I;h.getWorldPosition(p),d.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){u.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,v=0,_=1){return h.position.set(m,v,p),h.scale.setScalar(_),E}};return E}var Hi=(n,e,t=200,i=200,s)=>{let r=new H(new xe(t,i),s?new Le({map:s,roughness:.95}):T(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},eh=(n,e=1)=>{n.add(new Ne("#E9EEFF","#B08A6A",1.05*e)),n.add(at("#FFD29A",3*e,[-14,16,10],20,70))},be={sala:(n,e)=>Br(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{Br(n,{wall:"#9A4632",night:e.night}),n.add(x(2.4,.45,3.2,T("#6B4A33"),-1.7,.25,-1.4)),n.add(x(2.3,.3,3,T("#F3EEE4"),-1.7,.6,-1.4)),n.add(x(2.38,.22,2,T("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(x(.8,.22,.5,T("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Hr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Be(e.dusk?"#E8A880":"#F2D8B8",.02),Rt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),Gn(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),Hi(n,"#7A9A50");for(let t=0;t<12;t++)dn(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(x(2.4,.1,.5,T("#8E6242"),-3.4,.5,-2.2)),n.add(x(2.4,.5,.08,T("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)ua(n,-6+t*6,-4,1,!!e.dusk);n.add(new Ne("#E9EEFF","#B08A6A",1)),n.add(at(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Hr(n,{seed:e.seed||2}),Hi(n,"",60,60,yu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Be("#F2D8B8",.012),Rt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Hi(n,"#8AAA58");let t=new te;t.add(x(6,4,5,T("#B5402E"),0,2,0));let i=new H(new Xe(.01,4.4,2.2,4),T("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(x(2,2.6,.1,T("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(x(.1,1,.1,T("#C9A06A"),-10+s*1.3,.5,-4));n.add(x(20,.08,.06,T("#C9A06A"),0,.9,-4)),n.add(x(20,.08,.06,T("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)dn(n,6+s*3,-16-s%2*3,1.6,void 0,s);eh(n)},sabana:(n,e)=>{n.fog=new Be("#F2C890",.01),Rt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=Ze("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),Hi(n,"#C8A858");for(let i=0;i<6;i++){let s=new te;s.add(x(.3,3,.3,T("#5A3A22"),0,1.5,0));let r=new H(new Xe(2.6,2.2,.6,12),T("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Ne("#FFE8C8","#8A6A3A",1)),n.add(at("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Be("#F2E2C0",.012),Rt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),Hi(n,"#B8B070");for(let t=0;t<14;t++){let i=new H(new nt(.55,16,10,0,Math.PI*2,0,Math.PI/2),T("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}eh(n)},mar:(n,e)=>{Sg(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Be(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=Hi(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=Ue(5);for(let r=0;r<30;r++){let o=new H(new hn(.2+s()*.3,.8+s()*1.4,7),T(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=as(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=Ze("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Ne("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(at("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Be("#162238",.04),n.add(ti(16,20,"#2A3348","#232B3E",6)),n.add(x(16,6,.3,T("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Ot(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Ot(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=ve(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new H(new xe(2.5,1.3),new tt({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Ne("#6E86C8","#101420",.8)),n.add(at("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Be("#1E2236",.02),Hi(n,"#2F4A7A"),n.add(x(30,10,.3,T("#E8E2D2"),0,5,-8));let t=ve(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=He(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new H(new rn(4,.35,10,48),T("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new ot("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Ne("#E8E8FF","#3A3A50",.9)),n.add(at("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Be("#E6E2D6",.03),n.add(ti(9,40));for(let i of[-1,1]){n.add(x(.7,4.2,30,T("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(x(1.2,.05,30,T("#DDE0E4"),i*3,.5+s*.9,-10))}let t=Ue(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(x(.3,.3,.4,T(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Ot(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Ne("#FFFFFF","#B9B3A6",1)),n.add(at("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{be.parque(n,{});for(let t=0;t<12;t++)n.add(x(.08,1.4,.08,T("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(x(8,.08,.08,T("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{Br(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Be("#8A8070",.03),Rt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),Hi(n,"#8A8070");let t=Ue(8);for(let i=0;i<40;i++){let s=x(.4+t()*1.6,.3+t()*1,.4+t()*1.4,T(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}eh(n,.8)}};function Sg(n,e){n.background=new he(e)}function bg(n,e={}){let t=$c({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var xg=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function th(n,e,t){let i=lu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(be[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?bg(s,a):(()=>{let c=Mu(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{Jc.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=ha(t.cam.map(([g,E])=>[g,E]),l),u=ha(t.cam.map(([g,,E])=>[g,E]),l);cu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let p=g.move(l);E.root.position.set(p[0],p[1],p[2])}E.face(c),E.eye(xg(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,v])=>l>=p&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?ha(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function Su(n,e,t,i="#E8667F"){n.add(x(2.2,.45,3,T("#6B4A33"),e,.25,t)),n.add(x(2.1,.3,2.8,T("#F3EEE4"),e,.6,t)),n.add(x(2.18,.2,1.9,T(i,{roughness:.9}),e,.8,t+.5)),n.add(x(2.2,1.3,.16,T("#5A3C28"),e,.9,t-1.55)),n.add(x(.8,.2,.45,T("#FFFFFF"),e-.5,.82,t-1.1)),n.add(x(.8,.2,.45,T("#F6E6C8"),e+.5,.82,t-1.1))}function bu(n,e=Math.PI/2){n.root.rotation.z=e}function Tg(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return ve(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,f,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,f,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,f)=>c.fillText(u,t/2,i*.42+(f-(d.length-1)/2)*o*1.15))})}function xu(n,e,t=1.4,i={}){let s=Tg(e,i),r=He(s,t,t*(i.h||400)/(i.w||640),{blend:!0});return r.renderOrder=5,n.add(r),r}function Tu(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return ve(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function zr(n,e="#F2C14E",t=140,i=256,s=200){return ve(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}var kr=[0,1.5,6.4,10.26,18.68,25.72,30.12,35.02,43.8,48.54,58.76,63.5,69.6,78.26,79.6,86.56,89.8,96.32,99.02,105.02,110.12,115.56,122.4,126.36,131.46,137.48,145.1,149.18,158.04,162.28,168.98,172.36,176,182.62,188.3,192.16,195.36,202.82,206.14,212.26,215.8,221.74,227.94,233.48,237.1,246.5,250.46,254.48,259.06,263.2,273.96,282.36,288.96,291.32,296.86,300.9,308.54,313.78,321.86,327.5,334.44,341.64,347.08,353.18,358.72,367.48,374.54,383.5,392.44,400.38,409.54,417.6,430.3,436.84,441.34,452.28,456.2,462.46,468.04,476.48,482.98,486.32,492.64,506.82,515.1,525.72,533.68,544.62,550.18,556.82,561.28,564.6,576.12,593.36,602.72,611.08,620.22,624.56,632.92,638.98,645.44,651.62],wg=[["te",0],["despiertas",.18],["bajas",1.5],["a",1.94],["la",2.04],["cocina",2.12],["tu",3.18],["padre",3.32],["no",3.56],["esta",3.86],["tu",4.8],["hermano",4.92],["tampoco",5.3],["hay",6.4],["dos",6.6],["tazas",6.88],["de",7.24],["cafe",7.38],["en",7.58],["la",7.8],["mesa",7.9],["todavia",8.56],["calientes",8.92],["tu",10.26],["madre",10.36],["esta",10.58],["delante",10.9],["de",11.32],["la",11.48],["tele",11.6],["con",12.18],["la",12.34],["boca",12.48],["abierta",12.72],["en",13.84],["las",13.98],["noticias",14.1],["una",15],["presentadora",15.14],["repite",15.78],["lo",16.22],["mismo",16.36],["una",16.66],["y",17.22],["otra",17.5],["vez",17.7],["todos",18.68],["los",18.9],["hombres",19.18],["del",19.48],["planeta",19.72],["han",20.1],["desaparecido",20.42],["esta",21.18],["noche",21.5],["todos",22.46],["mas",23.44],["de",23.62],["4",23.78],["000",23.78],["millones",24.42],["tu",25.72],["madre",25.86],["se",26.14],["gira",26.46],["despacio",26.74],["te",27.74],["mira",28.04],["y",28.28],["grita",29.2],["porque",30.12],["tu",30.5],["sigues",30.86],["aqui",31.42],["eres",32.28],["el",32.48],["ultimo",32.72],["hombre",33.1],["del",33.54],["planeta",33.8],["y",35.02],["antes",35.2],["de",35.42],["que",35.6],["el",35.7],["mundo",35.84],["entero",36.04],["venga",36.46],["a",36.8],["buscarte",36.96],["si",38.04],["te",38.16],["gustan",38.26],["estas",38.58],["historias",38.8],["de",39.36],["y",39.62],["si",40.18],["suscribete",40.92],["al",41.56],["canal",41.72],["y",42],["activa",42.28],["la",42.66],["campanita",42.76],["y",43.8],["ahora",43.94],["si",44.2],["vamos",44.88],["a",45.18],["ver",45.4],["como",45.56],["sobrevives",45.92],["siendo",46.56],["el",46.96],["unico",47.26],["lo",48.54],["primero",48.84],["que",49.12],["piensas",49.28],["es",49.76],["una",49.98],["tonteria",50.2],["se",51.24],["acabo",51.48],["la",51.8],["cola",51.94],["en",52.18],["el",52.36],["bano",52.5],["de",52.76],["hombres",52.92],["para",53.76],["siempre",54.08],["todos",55.04],["los",55.34],["banos",55.68],["de",56],["hombres",56.22],["del",56.44],["mundo",56.7],["son",57.04],["tuyos",57.5],["lo",58.76],["segundo",59.08],["que",59.42],["piensas",59.62],["ya",60.08],["no",60.38],["es",60.56],["tan",60.78],["divertido",60.88],["por",62.06],["que",62.28],["tu",62.52],["nadie",63.5],["lo",63.92],["sabe",64.04],["ni",64.76],["los",64.9],["medicos",65.06],["ni",65.84],["los",65.88],["cientificos",66.02],["ni",67.04],["los",67.1],["gobiernos",67.28],["tu",68.32],["tampoco",68.52],["anoche",69.6],["cenaste",70.02],["macarrones",70.42],["viste",71.4],["una",71.64],["serie",71.84],["y",72.12],["te",72.6],["dormiste",72.7],["con",73.1],["el",73.32],["movil",73.44],["en",73.72],["la",73.86],["cara",73.98],["nada",74.74],["especial",75.02],["pero",76.06],["aqui",76.36],["estas",76.66],["dia",78.26],["1",78.68],["el",79.6],["mundo",79.72],["se",80.06],["queda",80.4],["quieto",80.7],["hay",81.8],["oficinas",81.98],["a",82.42],["medias",82.64],["cocinas",83.04],["a",83.7],["medias",83.9],["aviones",84.66],["que",85],["no",85.3],["despegan",85.48],["porque",86.56],["habia",86.84],["trabajos",87.1],["que",87.68],["hacian",87.8],["casi",88.06],["solo",88.38],["hombres",88.82],["en",89.8],["estados",89.96],["unidos",90.18],["por",90.82],["ejemplo",90.92],["solo",91.78],["unos",91.92],["3",92.16],["de",92.5],["cada",92.72],["100",92.9],["carpinteros",93.14],["y",93.94],["electricistas",94.06],["eran",94.74],["mujeres",95.18],["en",96.32],["las",96.46],["obras",96.56],["de",96.78],["construccion",96.94],["casi",97.8],["lo",97.96],["mismo",98.14],["y",99.02],["en",99.16],["las",99.26],["cabinas",99.38],["de",99.7],["los",99.88],["aviones",99.98],["de",100.32],["pasajeros",100.5],["menos",101.38],["de",101.68],["5",101.94],["pilotos",102.26],["de",102.8],["cada",102.96],["100",103.14],["eran",103.44],["mujeres",103.92],["asi",105.02],["que",105.32],["los",105.56],["aviones",105.72],["se",106.12],["quedan",106.4],["en",106.68],["tierra",106.82],["las",107.54],["obras",107.72],["se",108],["quedan",108.24],["con",108.52],["la",108.7],["grua",108.9],["en",109.18],["el",109.34],["aire",109.46],["y",110.12],["los",110.28],["camiones",110.42],["que",110.78],["llevan",111.02],["la",111.28],["comida",111.44],["a",111.74],["los",111.94],["supermercados",112.02],["se",112.76],["quedan",113.2],["parados",113.52],["en",113.98],["la",114.16],["carretera",114.28],["tu",115.56],["como",116.06],["eres",116.22],["el",116.48],["unico",116.64],["hombre",116.88],["sientes",117.68],["que",117.9],["tienes",118.18],["que",118.54],["hacer",118.72],["algo",118.94],["te",119.92],["ofreces",120.04],["a",120.42],["arreglar",120.58],["la",120.92],["luz",121.12],["del",121.3],["barrio",121.48],["abres",122.4],["el",122.68],["cuadro",122.84],["electrico",123.14],["lo",124.18],["miras",124.3],["lo",125.16],["cierras",125.32],["una",126.36],["vecina",126.54],["que",126.9],["estudio",127.08],["ingenieria",127.4],["te",127.98],["aparta",128.18],["con",128.56],["cuidado",128.74],["y",129.06],["lo",129.44],["arregla",129.56],["en",129.94],["10",130.1],["minutos",130.3],["y",131.46],["eso",131.64],["pasa",131.9],["en",132.24],["todas",132.5],["partes",132.72],["porque",133.96],["esto",134.2],["ya",134.52],["habia",134.82],["ocurrido",135.02],["antes",135.48],["a",136.28],["lo",136.38],["grande",136.48],["durante",137.48],["la",137.86],["segunda",138],["guerra",138.36],["mundial",138.62],["millones",139.52],["de",139.8],["hombres",140.12],["se",140.38],["fueron",140.66],["al",140.94],["frente",141.18],["y",141.96],["millones",142.16],["de",142.5],["mujeres",142.76],["ocuparon",143.06],["su",143.86],["lugar",144.1],["construyeron",145.1],["aviones",145.7],["barcos",146.54],["y",146.98],["tanques",147.24],["en",147.64],["las",147.84],["fabricas",148],["en",149.18],["estados",149.34],["unidos",149.58],["mas",150.46],["de",150.62],["1000",150.8],["mujeres",151.08],["pilotas",151.48],["llevaron",152.1],["aviones",152.5],["militares",152.8],["de",153.46],["una",153.66],["punta",153.88],["a",154.4],["otra",154.52],["del",154.74],["pais",154.98],["las",155.84],["llamaban",156.04],["las",156.54],["wasp",156.98],["nadie",158.04],["habia",158.5],["creido",158.74],["que",159.18],["podian",159.36],["hacerlo",159.74],["lo",160.92],["hicieron",161.12],["asi",162.28],["que",162.54],["a",162.96],["la",163.02],["semana",163.1],["hay",163.8],["colas",163.96],["de",164.34],["mujeres",164.48],["en",164.78],["las",165.04],["escuelas",165.18],["de",165.66],["pilotos",165.78],["de",166.52],["electricistas",166.64],["y",167.38],["de",167.68],["camioneras",167.82],["al",168.98],["mes",169.2],["los",169.82],["supermercados",169.92],["vuelven",170.62],["a",171.14],["tener",171.26],["pan",171.46],["al",172.36],["ano",172.58],["la",173.2],["grua",173.32],["de",173.56],["la",173.72],["obra",173.82],["de",174],["enfrente",174.18],["vuelve",174.64],["a",175.16],["moverse",175.22],["las",176],["primeras",176.14],["semanas",176.56],["no",176.92],["son",177.4],["faciles",177.62],["hay",178.58],["apagones",178.78],["retrasos",179.72],["y",180.44],["colas",180.68],["larguisimas",181.2],["pero",182.62],["cada",182.84],["dia",183.1],["algo",183.66],["vuelve",184.02],["a",184.46],["funcionar",184.52],["y",185.1],["aparece",185.52],["alguien",185.86],["nuevo",186.2],["que",186.52],["sabe",186.78],["como",187.1],["hacerlo",187.4],["el",188.3],["mundo",188.5],["no",188.76],["se",189.14],["rompio",189.32],["solo",190.14],["tuvo",190.44],["que",190.72],["aprender",190.92],["rapido",191.24],["y",192.16],["algunas",192.3],["cosas",192.52],["de",193.28],["repente",193.5],["mejoran",194.3],["segun",195.36],["la",195.72],["organizacion",195.86],["mundial",196.42],["de",196.88],["la",197.02],["salud",197.14],["casi",197.84],["3",197.96],["de",198.4],["cada",198.58],["4",198.74],["personas",199.12],["que",199.56],["morian",199.78],["en",200.14],["accidentes",200.3],["de",200.88],["trafico",201.02],["eran",201.58],["hombres",201.84],["ahora",202.82],["las",203.28],["carreteras",203.38],["son",203.96],["mucho",204.18],["mas",204.72],["tranquilas",204.92],["en",206.14],["las",206.3],["carceles",206.44],["federales",206.92],["de",207.48],["estados",207.6],["unidos",207.88],["unos",208.7],["93",208.9],["de",209.52],["cada",210.02],["100",210.2],["presos",210.48],["eran",211],["hombres",211.36],["de",212.26],["la",212.44],["noche",212.56],["a",212.78],["la",212.94],["manana",213],["las",213.68],["carceles",213.84],["se",214.36],["quedan",214.52],["casi",214.86],["vacias",215.26],["las",215.8],["guardias",216.48],["no",216.9],["saben",217.2],["que",217.5],["hacer",217.68],["una",218.34],["te",218.6],["mira",218.82],["con",219.02],["desconfianza",219.26],["por",220.42],["si",220.68],["acaso",220.82],["pero",221.74],["tu",221.92],["vida",222.1],["cambia",222.34],["de",222.92],["otra",223.06],["forma",223.3],["eres",224.26],["famoso",224.58],["el",225.78],["mas",225.92],["famoso",226.2],["del",226.7],["planeta",226.96],["tu",227.94],["cara",228.02],["esta",228.26],["en",228.58],["todos",228.76],["los",229.12],["telediarios",229.42],["en",230.48],["las",230.62],["revistas",230.74],["en",231.68],["las",231.82],["cajas",231.96],["de",232.34],["cereales",232.52],["hay",233.48],["un",233.64],["documental",233.76],["sobre",234.34],["ti",234.6],["y",235.16],["ni",235.28],["siquiera",235.36],["te",235.78],["preguntaron",235.96],["recibes",237.1],["un",237.52],["millon",237.92],["de",238.3],["cartas",238.48],["al",238.86],["dia",239.06],["la",239.7],["mitad",239.88],["son",240.08],["de",240.44],["cientificas",240.6],["que",241.28],["quieren",241.42],["estudiarte",241.72],["la",242.32],["otra",242.9],["mitad",243.1],["de",243.38],["abuelas",243.84],["que",244.26],["quieren",244.42],["presentarte",244.72],["a",245.4],["sus",245.5],["nietas",245.66],["tu",246.5],["madre",246.64],["las",246.9],["contesta",247.18],["todas",247.78],["con",248.84],["la",248.96],["misma",249.12],["carta",249.38],["los",250.46],["gobiernos",250.52],["te",251.06],["ponen",251.26],["guardaespaldas",251.52],["viajas",252.74],["en",253.1],["coche",253.34],["blindado",253.56],["hasta",254.48],["para",254.7],["ir",254.94],["a",255.1],["comprar",255.16],["el",255.44],["pan",255.7],["te",256.06],["acompanan",256.16],["4",256.74],["agentes",257.06],["con",257.62],["gafas",257.9],["de",258.28],["sol",258.42],["y",259.06],["los",259.24],["cientificos",259.36],["te",260.06],["explican",260.22],["por",260.7],["que",261],["eres",261.3],["tan",261.62],["importante",261.92],["casi",263.2],["todas",263.4],["las",263.68],["personas",263.92],["tienen",264.4],["2",264.8],["cromosomas",265.1],["sexuales",265.68],["en",266.36],["cada",266.5],["celula",266.72],["las",267.62],["mujeres",267.78],["suelen",268.14],["tener",268.52],["2",268.88],["cromosomas",269.16],["x",269.7],["los",270.54],["hombres",270.68],["un",270.98],["cromosoma",271.42],["x",271.96],["y",272.26],["un",272.64],["cromosoma",272.76],["y",273.26],["y",273.96],["ese",274.14],["cromosoma",274.32],["y",274.9],["que",275.5],["pasa",275.54],["de",275.82],["padres",276.02],["a",276.28],["hijos",276.56],["desde",276.78],["hace",277.06],["miles",277.38],["de",277.82],["generaciones",278.06],["ahora",279.2],["solo",279.42],["camina",279.8],["por",280.2],["la",280.42],["tierra",280.56],["dentro",280.88],["de",281.36],["ti",281.62],["te",282.36],["sacan",282.5],["sangre",282.82],["te",283.6],["hacen",283.7],["preguntas",283.9],["te",284.86],["miden",284.94],["la",285.2],["cabeza",285.38],["y",285.72],["en",286.32],["todas",286.5],["partes",286.74],["te",287.32],["dicen",287.58],["lo",287.88],["mismo",288.04],["eres",288.96],["el",289.26],["futuro",289.48],["de",289.92],["la",290.14],["humanidad",290.26],["tu",291.32],["te",291.52],["lo",291.82],["crees",291.96],["te",292.74],["compras",292.86],["un",293.2],["traje",293.5],["practicas",294.16],["cara",294.6],["de",294.9],["heroe",295.12],["delante",295.42],["del",295.78],["espejo",295.96],["hasta",296.86],["que",297.1],["una",297.26],["cientifica",297.44],["te",298.18],["explica",298.28],["algo",298.72],["con",299],["mucha",299.38],["paciencia",299.84],["ya",300.9],["existen",301.18],["bancos",301.68],["de",302.1],["donantes",302.22],["que",302.66],["envian",302.92],["muestras",303.24],["congeladas",303.68],["a",304.3],["mas",304.52],["de",304.72],["100",304.88],["paises",305.22],["hay",306.26],["miles",306.44],["de",306.84],["muestras",307.08],["guardadas",307.46],["la",308.54],["humanidad",308.72],["puede",309.16],["seguir",309.46],["teniendo",309.82],["bebes",310.28],["ninas",311.1],["y",311.46],["ninos",311.62],["sin",312.22],["pedirte",312.36],["permiso",312.86],["y",313.78],["la",313.96],["ciencia",314.08],["va",314.48],["todavia",314.76],["mas",315.18],["lejos",315.7],["en",316.62],["2004",316.8],["en",317.8],["japon",317.88],["nacio",318.66],["un",318.98],["raton",319.14],["con",319.44],["dos",319.66],["madres",319.98],["y",320.36],["ningun",320.64],["padre",320.96],["en",321.86],["2018",322.02],["en",323.26],["china",323.32],["nacieron",324.06],["decenas",324.42],["de",324.98],["ratones",325.18],["sanos",325.58],["con",326.08],["dos",326.28],["madres",326.56],["en",327.5],["personas",327.68],["todavia",328.02],["no",328.6],["se",328.88],["puede",329.02],["y",329.3],["no",329.86],["se",330.02],["sabe",330.16],["si",330.44],["se",330.62],["podra",330.76],["pero",331.38],["ya",331.66],["no",331.92],["eres",332.08],["tan",332.28],["necesario",332.56],["como",333.16],["creias",333.42],["te",334.44],["quitas",334.56],["el",334.86],["traje",335.02],["vuelves",335.84],["a",336.14],["ponerte",336.26],["la",336.6],["camiseta",336.76],["de",337.22],["siempre",337.38],["y",337.72],["empieza",338.32],["el",338.72],["chiste",338.92],["que",339.28],["te",339.48],["va",339.64],["a",339.8],["perseguir",339.9],["toda",340.44],["la",340.86],["vida",341.08],["todo",341.64],["el",341.8],["mundo",342.04],["en",342.68],["todas",342.88],["partes",343.16],["te",344.1],["pide",344.2],["lo",344.46],["mismo",344.62],["me",345.54],["abres",345.8],["este",346.06],["bote",346.32],["la",347.08],["vecina",347.28],["la",348.08],["panadera",348.26],["la",349.26],["presidenta",349.44],["en",350.12],["una",350.4],["cena",350.54],["oficial",350.76],["delante",351.34],["de",351.9],["las",352.04],["camaras",352.2],["tu",353.18],["lo",353.4],["intentas",353.52],["pones",354.42],["cara",354.72],["de",355],["esfuerzo",355.16],["a",356.18],["veces",356.3],["se",356.52],["abre",356.78],["a",357.5],["veces",357.62],["no",357.84],["cuando",358.72],["no",358.9],["se",359.16],["abre",359.32],["alguien",359.88],["te",360.12],["lo",360.34],["quita",360.46],["de",360.7],["las",360.84],["manos",360.98],["le",361.66],["da",361.78],["un",361.92],["golpecito",362.02],["con",362.54],["la",362.72],["cuchara",362.84],["y",363.24],["lo",363.62],["abre",363.78],["y",364.44],["todo",364.58],["el",364.94],["mundo",365.18],["aplaude",365.42],["a",366.42],["ella",366.62],["en",367.48],["la",367.68],["biblioteca",367.78],["del",368.28],["barrio",368.48],["encuentras",368.86],["un",369.42],["libro",369.6],["de",369.82],["historia",370.02],["y",370.36],["descubres",370.74],["que",371.22],["hubo",371.42],["un",371.68],["dia",371.82],["en",372.04],["que",372.36],["paso",372.48],["justo",372.78],["lo",373.22],["contrario",373.44],["el",374.54],["24",374.76],["de",375.16],["octubre",375.48],["de",375.9],["1975",376.04],["en",377.96],["islandia",378.12],["nueve",379.06],["de",379.42],["cada",379.54],["diez",379.72],["mujeres",380],["dejaron",380.4],["de",380.92],["trabajar",381.08],["durante",381.4],["un",381.8],["dia",382.2],["entero",382.48],["no",383.5],["fueron",383.7],["a",383.94],["la",384.14],["oficina",384.18],["no",385.08],["cocinaron",385.22],["no",386.18],["cuidaron",386.32],["de",386.74],["los",386.92],["ninos",387.06],["el",388.04],["pais",388.22],["se",388.54],["paralizo",388.94],["los",390.06],["bancos",390.18],["y",390.64],["las",390.74],["fabricas",390.88],["cerraron",391.36],["muchos",392.44],["padres",392.72],["tuvieron",393.04],["que",393.5],["llevarse",393.62],["a",394.06],["sus",394.14],["hijos",394.28],["al",394.48],["trabajo",394.7],["y",395.1],["las",395.62],["salchichas",395.8],["se",396.32],["agotaron",396.48],["en",396.94],["las",397.1],["tiendas",397.22],["porque",397.76],["era",398.24],["lo",398.5],["mas",398.64],["facil",398.86],["de",399.16],["preparar",399.34],["cinco",400.38],["anos",400.74],["despues",400.94],["islandia",401.68],["eligio",402.3],["a",402.7],["la",402.8],["primera",402.88],["mujer",403.18],["presidenta",403.52],["del",404.24],["mundo",404.4],["votada",404.64],["directamente",405.14],["por",405.86],["su",406.26],["pueblo",406.46],["vigdis",407.38],["finnbogadottir",407.56],["cierras",409.54],["el",410],["libro",410.2],["y",410.42],["piensas",411.14],["que",411.54],["el",411.74],["mundo",411.88],["siempre",412.08],["ha",412.5],["necesitado",412.84],["a",413.46],["todos",413.6],["solo",414.2],["que",414.74],["no",414.98],["siempre",415.14],["se",415.52],["ha",415.76],["dado",415.88],["cuenta",416],["mes",417.6],["6",417.84],["el",418.86],["futbol",419.08],["vuelve",419.56],["las",420.52],["ligas",420.7],["de",421.02],["mujeres",421.14],["llenan",421.42],["los",421.94],["estadios",422.12],["tu",423.18],["equipo",423.3],["de",423.6],["toda",423.8],["la",424.06],["vida",424.26],["ahora",424.5],["tiene",424.86],["una",425.22],["delantera",425.44],["que",425.92],["marca",426.12],["tres",426.36],["goles",426.86],["por",427.18],["partido",427.4],["y",427.82],["por",428.4],["fin",428.62],["ganais",428.94],["algo",429.46],["tu",430.3],["gritas",430.56],["en",430.96],["la",431.16],["grada",431.3],["eres",432.06],["el",432.24],["unico",432.46],["con",432.7],["voz",432.98],["grave",433.14],["todo",433.96],["el",434.18],["estadio",434.38],["se",434.9],["gira",435.08],["a",435.42],["mirarte",435.52],["lo",436.84],["que",437.04],["nadie",437.16],["ve",437.36],["en",437.6],["las",437.72],["revistas",437.86],["es",438.38],["lo",438.9],["que",439.04],["pasa",439.16],["cuando",439.4],["apagas",439.68],["la",440.26],["luz",440.4],["echas",441.34],["de",441.52],["menos",441.74],["a",441.96],["tu",442.16],["padre",442.24],["su",443.12],["forma",443.24],["de",443.5],["silbar",443.68],["mientras",444.04],["cocinaba",444.32],["sus",445.5],["chistes",445.66],["malos",446],["los",447.08],["consejos",447.18],["que",447.66],["nunca",447.86],["le",448.14],["pediste",448.34],["y",448.82],["que",449.22],["ahora",449.34],["darias",449.54],["cualquier",449.94],["cosa",450.28],["por",450.86],["escuchar",451.1],["echas",452.28],["de",452.5],["menos",452.7],["a",452.92],["tu",453.1],["hermano",453.2],["aunque",453.7],["os",454.04],["peleabais",454.24],["por",454.74],["el",454.92],["mando",455.08],["de",455.36],["la",455.44],["tele",455.56],["echas",456.2],["de",456.72],["menos",456.96],["a",457.2],["tu",457.42],["mejor",457.5],["amigo",457.82],["el",458.66],["que",458.78],["te",458.9],["llamaba",459.02],["a",459.38],["las",459.48],["dos",459.62],["de",459.78],["la",459.92],["manana",460.02],["para",460.34],["hablar",460.66],["de",460.9],["tonterias",461.08],["eres",462.46],["el",462.72],["unico",463],["que",463.3],["queda",463.54],["de",463.82],["algo",464.02],["y",464.9],["nadie",465.1],["entiende",465.28],["exactamente",465.76],["que",466.18],["se",466.72],["siente",466.88],["bueno",468.04],["casi",469.02],["nadie",469.18],["tu",470.38],["madre",470.52],["entra",470.76],["en",471.1],["tu",471.24],["cuarto",471.36],["con",471.64],["dos",471.92],["tazas",472.2],["de",472.58],["te",472.72],["se",473.34],["sienta",473.56],["en",473.92],["la",474],["cama",474.12],["no",474.98],["dice",475.1],["nada",475.32],["ella",476.48],["tambien",476.66],["perdio",477.08],["a",477.48],["tu",477.54],["padre",477.64],["piensas",477.92],["a",479.26],["su",479.42],["hermano",479.54],["a",480.44],["su",480.48],["padre",480.64],["a",481.48],["su",481.6],["hijo",481.76],["mayor",481.98],["todas",482.98],["perdieron",483.34],["a",483.84],["alguien",484],["todas",485.1],["esa",486.32],["noche",486.6],["entiendes",486.82],["que",487.78],["tu",487.94],["no",488.2],["eres",488.42],["el",488.72],["que",488.88],["mas",489],["ha",489.2],["perdido",489.34],["solo",490.26],["eres",490.58],["el",490.92],["que",491.14],["mas",491.3],["se",491.58],["ve",491.82],["asi",492.64],["que",492.94],["haces",493.16],["algo",493.4],["util",493.68],["empiezas",494.58],["un",495.1],["proyecto",495.3],["recoges",496.38],["las",496.82],["historias",496.98],["de",497.48],["los",497.64],["hombres",497.76],["que",498.1],["desaparecieron",498.32],["vas",499.78],["casa",499.96],["por",500.38],["casa",500.62],["ciudad",501.48],["por",501.68],["ciudad",501.98],["escuchas",502.94],["a",503.4],["las",503.52],["hijas",503.66],["a",504.42],["las",504.46],["madres",504.62],["a",505.04],["las",505.28],["amigas",505.62],["llenas",506.82],["cuadernos",507.16],["luego",508.22],["archivos",508.58],["luego",510.06],["una",510.4],["biblioteca",510.94],["entera",511.6],["la",512.58],["biblioteca",512.74],["de",513.42],["los",513.68],["que",513.84],["no",514.02],["volvieron",514.26],["y",515.1],["mientras",515.22],["escuchas",515.5],["aprendes",516.36],["algo",516.82],["curioso",517.04],["en",518.1],["casi",518.24],["todos",518.4],["los",518.7],["paises",518.96],["las",519.8],["mujeres",519.92],["ya",520.22],["vivian",520.56],["mas",520.94],["anos",521.22],["que",521.54],["los",521.74],["hombres",521.88],["unos",522.66],["5",522.9],["anos",523.26],["mas",523.5],["de",523.82],["media",524.24],["en",524.56],["el",524.72],["mundo",524.86],["muchas",525.72],["de",526],["las",526.22],["mujeres",526.32],["que",526.66],["te",526.9],["cuentan",527.04],["sus",527.36],["historias",527.54],["ya",528.1],["sabian",528.56],["lo",528.96],["que",529.18],["era",529.32],["seguir",529.5],["adelante",529.8],["sin",530.3],["ellos",530.6],["y",530.88],["te",531.58],["ensenan",531.7],["como",532.24],["se",532.6],["hace",532.82],["un",533.68],["dia",534.28],["te",534.52],["llega",534.7],["un",534.92],["rumor",535.1],["dicen",535.88],["que",536.36],["hay",536.56],["otro",536.74],["hombre",537],["en",537.9],["un",538.06],["pueblo",538.22],["de",538.44],["las",538.66],["montanas",538.78],["al",539.64],["otro",539.76],["lado",539.98],["del",540.24],["mundo",540.48],["alguien",541.34],["lo",541.68],["vio",541.84],["de",541.98],["lejos",542.12],["con",542.84],["barba",543],["y",543.34],["sombrero",543.46],["viajas",544.62],["tres",545],["dias",545.38],["cruzas",546.2],["dos",546.54],["paises",546.84],["un",547.72],["rio",547.88],["y",548.16],["un",548.48],["rebano",548.64],["de",549.06],["cabras",549.2],["llegas",550.18],["al",550.44],["pueblo",550.6],["te",551.38],["senalan",551.48],["una",551.9],["colina",552.12],["ahi",553.08],["esta",553.26],["de",554.06],["espaldas",554.18],["con",555.14],["barba",555.26],["y",555.66],["sombrero",555.78],["te",556.82],["acercas",556.98],["temblando",557.46],["le",557.98],["tocas",558.62],["el",558.92],["hombro",559.1],["se",560],["da",560.1],["la",560.24],["vuelta",560.34],["es",561.28],["un",561.4],["espantapajaros",561.52],["muy",562.8],["bien",563.04],["hecho",563.24],["eso",563.72],["si",563.88],["te",564.6],["sientas",564.72],["a",565.1],["su",565.26],["lado",565.34],["y",565.6],["te",565.98],["ries",566.16],["te",566.84],["ries",567.1],["tanto",567.44],["que",567.76],["lloras",568.1],["y",569.04],["por",569.18],["primera",569.34],["vez",569.66],["en",569.94],["mucho",570.1],["tiempo",570.36],["no",571.2],["te",571.36],["sientes",571.52],["solo",571.86],["te",572.76],["sientes",573],["ridiculo",573.3],["que",574.46],["es",574.58],["mucho",574.76],["mejor",574.98],["pasan",576.12],["los",576.48],["anos",576.62],["el",577.48],["mundo",577.62],["sigue",577.82],["hay",578.76],["cosas",578.88],["que",579.1],["funcionan",579.3],["mejor",579.8],["que",580.08],["antes",580.3],["y",580.6],["cosas",581.02],["que",581.32],["funcionan",581.56],["peor",582.06],["las",582.96],["mujeres",583.12],["llevan",583.42],["los",583.86],["aviones",584.04],["las",584.92],["obras",585.04],["los",585.78],["gobiernos",585.88],["y",586.52],["los",586.82],["equipos",586.96],["de",587.38],["futbol",587.5],["nadie",588.34],["sabe",588.76],["todavia",589],["como",589.48],["sera",589.84],["el",590.1],["mundo",590.28],["dentro",590.52],["de",590.82],["cien",591.1],["anos",591.34],["pero",592.22],["sigue",592.46],["y",593.36],["un",593.54],["dia",593.7],["en",594.24],["las",594.32],["noticias",594.48],["la",595.4],["misma",595.52],["presentadora",595.78],["del",596.48],["primer",596.68],["dia",596.98],["sonrie",597.3],["y",598],["dice",598.14],["ha",598.98],["nacido",599.14],["el",599.46],["primer",599.6],["nino",599.88],["desde",600.26],["que",600.5],["desaparecieron",600.72],["los",601.48],["hombres",601.68],["vas",602.72],["al",602.94],["hospital",603.12],["la",604.06],["madre",604.18],["te",604.4],["deja",604.62],["cogerlo",604.84],["en",605.34],["brazos",605.46],["es",606.32],["diminuto",606.5],["arrugado",607.46],["grita",608.44],["como",608.74],["si",609.02],["fuera",609.18],["el",609.48],["dueno",609.64],["del",609.98],["mundo",610.18],["le",611.08],["prometes",611.22],["que",611.68],["le",611.8],["vas",611.92],["a",612.08],["contar",612.22],["todo",612.44],["quienes",613.46],["eran",613.82],["los",613.96],["hombres",614.16],["que",614.48],["no",614.7],["volvieron",614.84],["como",615.3],["su",615.96],["abuelo",616.16],["silbaba",616.52],["en",616.96],["la",617.1],["cocina",617.2],["como",618.14],["el",618.24],["mundo",618.42],["aprendio",618.66],["rapido",619.24],["y",620.22],["le",620.38],["prometes",620.48],["una",620.94],["cosa",621.16],["mas",621.42],["que",622.18],["le",622.3],["vas",622.42],["a",622.6],["ensenar",622.72],["a",623.24],["abrir",623.32],["botes",623.58],["entonces",624.56],["la",625],["enfermera",625.32],["te",625.76],["pasa",625.94],["el",626.14],["biberon",626.34],["tiene",627.24],["la",627.38],["tapa",627.56],["apretada",627.78],["lo",628.92],["intentas",629],["pones",629.98],["cara",630.2],["de",630.56],["esfuerzo",630.7],["no",631.78],["se",631.92],["abre",632.08],["la",632.92],["madre",633.08],["te",633.3],["lo",633.5],["quita",633.62],["de",633.82],["las",633.96],["manos",634.1],["le",634.8],["da",634.86],["un",635],["golpecito",635.1],["con",635.56],["la",635.76],["cuchara",635.88],["y",636.26],["lo",636.72],["abre",636.86],["el",637.68],["bebe",637.84],["se",638.1],["rie",638.26],["y",638.98],["tu",639.14],["tambien",639.26],["porque",640.16],["al",640.46],["final",640.88],["el",641.68],["mundo",641.78],["siguio",642.1],["adelante",642.62],["y",643.68],["tu",643.74],["con",643.96],["el",644.32],["y",645.44],["ahora",645.6],["te",645.8],["pregunto",646.02],["a",646.48],["ti",646.6],["si",647.32],["fueras",647.38],["el",647.74],["ultimo",647.86],["hombre",648.16],["del",648.5],["planeta",648.7],["que",649.6],["seria",649.66],["lo",649.98],["primero",650.18],["que",650.54],["harias",650.76],["cuentamelo",651.62],["en",652.14],["los",652.24],["comentarios",652.32],["y",653.4],["si",653.48],["te",653.58],["ha",653.72],["gustado",653.78],["esta",654.06],["historia",654.38],["suscribete",655.2],["al",655.66],["canal",655.8],["para",656.08],["ver",656.32],["mas",656.54],["videos",656.82],["de",657.2],["y",657.513],["si",657.827]],nh=(n,e=0)=>{for(let[t,i]of wg)if(i>=e&&t===n)return i;return e};var ga=(n,e,t=200,i=200)=>{let s=new H(new xe(t,i),T(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Ht=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return ve(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function Rg(n,e=.5){let t=new te,i=ve(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Ue(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new H(new xe(400,100),new tt({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:mn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function Cg(n,e=0,t=-1){for(let i=0;i<4;i++){let s=x(5,.22,.6,T("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new H(new hn(.16,.35,6),T(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function ih(n,e=40,t=3,i=[-12,12,-40,4]){let s=Ue(t),r=ve(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=He(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function wu(n,e=200,t=5,i=10,s=30,r=2){let o=Ue(t),a=ve(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=He(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}be.pasteleria=n=>{n.fog=new Be("#F3D2C0",.02),n.add(ti(16,14,"#F2E6DA","#E2CFC0",8)),n.add(x(16,5,.3,T("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(x(.12,5,.05,T("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(x(5.4,1,.9,T("#8A5A3C"),0,.5,-1.2)),n.add(x(5.5,.08,1,T("#F4EEE6"),0,1.04,-1.2)),n.add(x(3.6,.1,.5,T("#F4EEE6"),0,2.1,-3)),n.add(x(3.6,.1,.5,T("#F4EEE6"),0,2.9,-3));let e=He(Ht(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new Ne("#FFF0F0","#A07060",1));let t=at("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new ot("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};be.espacio=n=>{n.background=new he("#05060E"),Sn(n,2600,200,3),n.add(new Ne("#8FA8FF","#101020",.5));let e=new er("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};be.aula=n=>{n.fog=new Be("#E8DCC8",.02),n.add(ti(16,16,"#C9B89A","#BBA98A",10)),n.add(x(16,5,.3,T("#E8DCC0"),0,2.5,-3.6)),n.add(x(4.4,1.8,.06,T("#2F5A48"),0,2.3,-3.42)),n.add(x(4.6,.1,.2,T("#8E6242"),0,1.36,-3.35));let e=He(ve(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new Ne("#FFFFFF","#9A8A70",1)),n.add(at("#FFE8C8",2.2,[-6,8,6],10,40))};be.ruaV=(n,e)=>{Hr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(ih(n,60,4),wu(n,260,6,9,40))};be.apagon=(n,e)=>{n.fog=new Be("#0A0C18",.03),Rt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Sn(n,1800,200,4),da(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(Bi(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Bi(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new Ne("#5A64A8","#141420",.5)),n.add(at("#8A9AE0",.7,[-10,20,10],30,90))};be.azotea=(n,e)=>{n.background=new he("#03040A"),n.fog=new Be("#060814",.008),Sn(n,4200,200,9),Rg(n,e.ang??.45),Gn(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=x(16,.3,12,T("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(x(16,.5,.2,T("#4A4A54"),0,.25,-8)),n.add(x(1.4,1.2,1.4,T("#4A4A54"),4.5,.6,-5)),n.add(new Ne("#6A78C8","#141420",.55)),n.add(at("#9AAAF0",.6,[-6,10,6],12,40))};be.panaderia=n=>{be.pasteleria(n);let e=He(Ht(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};be.metro=n=>{n.background=new he("#0A0C10"),n.fog=new Be("#0C1014",.07);let e=T("#4A4E54",{roughness:.9,side:Qt}),t=new H(new Xe(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new te,s=new H(new Xe(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=x(6.4,.1,60,T("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(x(.08,.12,60,T("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(x(2.2,.08,.2,T("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new ot("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=Ze("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Ne("#8A90A0","#202024",1.1))};be.bosque=(n,e)=>{n.fog=new Be(e.nieve?"#E8EEF4":"#C8D0B8",.025),Rt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ga(n,e.nieve?"#F2F4F8":"#6E8A48");let t=Ue(14);for(let i=0;i<26;i++)dn(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=Bi(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),ih(n,0)}n.add(new Ne("#E9EEFF","#5A6A4A",.95)),n.add(at("#FFE8C0",2.4,[-10,14,8],18,60))};be.rio=(n,e)=>{be.parque(n,e);let t=new H(new xe(60,3.4),new Le({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};be.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Be(t?"#F2A880":"#CFE8F0",.006),Rt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=Ze(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=ga(n,"#E8D4A0"),r=new H(new xe(800,400),new Le({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=x(800,.02,.6,T("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new H(new Qs(1.1,0),T("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Ne(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(at(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};be.svalbard=n=>{n.fog=new Be("#C8D8E8",.02),Rt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),ga(n,"#F4F6FA");let e=Ue(19);for(let l=0;l<8;l++){let c=new H(new hn(10+e()*12,10+e()*10,7),T("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new H(new nt(14,32,16,0,Math.PI*2,0,Math.PI/2),T("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=x(3,4.4,6,T("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=x(1.4,2.2,.1,T("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Ot(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=Ze("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=Ze("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new Ne("#D8E8FF","#8A9AB0",1.1)),n.add(at("#F0F4FF",1.6,[-8,10,8],16,50))};be.huerto=(n,e)=>{be.parque(n,e),Cg(n,0,-1.4)};be.biblio=n=>{n.fog=new Be("#4A3A2A",.03),n.add(vi(18,14,"#6D4A33")),n.add(x(18,6,.3,T("#5A3E2A"),0,3,-3.4));let e=Ue(8);for(let s=0;s<5;s++){n.add(x(14,.06,.4,T("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(x(o,a,.3,T(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Ne("#FFE8C8","#3A2A1C",.7));let t=new ot("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=Ze("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};be.hotel=n=>{n.fog=new Be("#E8D8C0",.02),n.add(vi(18,14,"#8A5A3A")),n.add(x(18,6,.3,T("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(x(2.4,2.6,.05,T("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=He(ve(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=x(3.2,.6,2.4,T("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(x(3.3,1.4,.2,T("#6A3A2A"),0,.7,-2.8)),ih(n,0);let t=He(ve(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new Ne("#FFF0E0","#8A6A4A",1)),n.add(at("#FFE0B0",2,[-4,8,6],10,30))};be.selva=n=>{n.fog=new Be("#7AA870",.05),Rt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),ga(n,"#3E5A2A");let e=Ue(23);for(let t=0;t<40;t++)dn(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);wu(n,160,9,12,12,3),n.add(new Ne("#D8F0C8","#2A3A1A",.9)),n.add(at("#FFF0C0",2.2,[-6,14,4],14,50))};be.desierto=n=>{be.sabana(n,{})};var oh=(n,e,t=200,i=200)=>{let s=new H(new xe(t,i),T(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var Fg=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return ve(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function Ru(n,e=.9,t={}){let i=Fg(n,t),s=new H(new xe(e,e*(t.h||360)/(t.w||512)),new Le({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function Ea(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new te,[d,u,f,g]=s,E=()=>l?new Le({map:fa(i,3,3),roughness:.95}):T(i,{roughness:.9}),m=d-f/2+e/2,p=e/2-(d+f/2),v=u-g/2,_=t-(u+g/2);h.add(x(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(x(p,t,.3,E(),e/2-p/2,t/2,0)),h.add(x(f,v,.3,E(),d,v/2,0)),h.add(x(f,_,.3,E(),d,t-_/2,0));let y=T("#F4F0E4");for(let[z,k,X,j]of[[d-f/2,u,.1,g+.1],[d+f/2,u,.1,g+.1],[d,u+g/2,f+.2,.1],[d,u,.05,g]])h.add(x(X,j,.36,y,z,k,0));h.add(x(f+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,R=T(o,{roughness:.9});h.add(x(f+3,t,.2,R,d,t/2,-D)),h.add(x(.2,t,D,R,d-f/2-1.4,t/2,-D/2)),h.add(x(.2,t,D,R,d+f/2+1.4,t/2,-D/2)),h.add(x(f+3,.2,D,T("#8A6A4A"),d,v-c,-D/2)),h.add(x(f+3,.2,D,R,d,u+g/2+.5,-D/2));let w=new ot("#FFC880",a?9:2.5,7,1.4);w.position.set(d,u+.6,-1.2),h.add(w);let F=Ot(f+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-D+.12),h.add(F);let S=x(f-.04,g,.06,T("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let z=0;z<10;z++){let k=x(f-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(k),A.push([k,z])}let P=z=>{let k=Math.max(.001,g*z);S.scale.y=k/g,S.position.y=u+g/2-k/2,S.visible=z>.01,A.forEach(([X,j])=>{let Z=u+g/2-(j+.5)*g/10;X.visible=z>.01&&Z>u+g/2-k,X.position.y=Z})};return P(0),h.userData={persiana:P,luz:z=>{w.intensity=z?9:2.5,F.material.emissiveIntensity=z?.35:.08},win:s,lamp:w},h.children.forEach(z=>{z.castShadow=z.castShadow??!0,z.receiveShadow=!0}),h}function rh(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new te;l.add(x(i,s,r,T(e,{roughness:.9}),0,s/2,-r/2));let c=new H(new Xe(.01,i*.62,2.4,4,1),T(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(x(1.1,2.1,.1,T(o),0,1.05,.02)),l.add(x(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Le({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(x(1.3,1.2,.06,h(),d,u,.03)),l.add(x(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(x(2,.2,1.2,T("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function sh(n=4){let e=new te,t=Ue(n*7);for(let i=0;i<n*3;i++){let s=new H(new nt(.42+t()*.12,12,10),T(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function Cu(n=8,e="#E8E2D2"){let t=new te;for(let i=0;i<=n*4;i++)t.add(x(.1,1.3,.05,T(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(x(n,.08,.06,T(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function ya(){let n=new te,e=Ue(4);for(let t=0;t<7;t++){let i=new H(new nt(.35,12,10),T("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new H(new nt(.08,10,8),T(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function Pg(){let n=new te;n.add(x(2.2,2,1.8,T("#8A6A4A",{roughness:.9}),0,1,0));let e=x(2.6,.12,2.3,T("#5A3E2A"),0,2.12,0);return n.add(e),n.add(x(.8,1.5,.05,T("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Fu(){let n=ve(256,128,t=>{t.fillStyle="#F4F0E4",t.fillRect(0,0,256,128),t.fillStyle="#2A2A34";for(let i=0;i<6;i++)t.beginPath(),t.arc(20+i*44,30+i%2*60,16,0,7),t.fill()}),e=new H(new nt(.16,20,14),new Le({map:n,roughness:.5}));return e.castShadow=!0,e}function ah(){let n=new te;n.add(x(2.4,2.8,5.5,T("#F4F0E4",{roughness:.6}),0,1.9,-1)),n.add(x(2.3,2,1.8,T("#4A86C7",{roughness:.5}),0,1.5,2.7)),n.add(x(2.1,.8,.05,T("#1A2233",{roughness:.1,metalness:.4}),0,2,3.62));let e=He(Ht(["MUDANZAS"],{bg:"#4A86C7",fg:"#FFFFFF",size:70,w:512,h:120}),3.2,.75);e.rotation.y=Math.PI/2,e.position.set(1.22,2.3,-1),n.add(e);for(let t of[-2.6,.4,2.7])for(let i of[-1,1]){let s=new H(new Xe(.45,.45,.3,20),T("#222"));s.rotation.z=Math.PI/2,s.position.set(i*1.15,.45,t),n.add(s)}return n.children.forEach(t=>t.castShadow=!0),n}function Pu(n=.6){let e=x(n,n*.8,n,T("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(x(n*1.01,.06,.15,T("#E8D8A8"),0,n*.4,0)),e}function Iu(){let n=new te;n.add(x(.04,1.4,.04,T("#E8667F"),0,.7,0));let e=new H(new nt(.28,16,12),new Le({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new H(new rn(.18,.04,8,16,Math.PI*1.2),T("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=Ze("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Du(n=.9,e=1.2){let t=ve(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new te;i.add(x(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new H(new xe(n,e),T("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Lu(n=.9,e=1.2){let t=ve(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new te;i.add(x(n+.08,e+.08,.04,"#111",0,0,0));let s=new H(new xe(n,e),T("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Uu(n="#FFF2C0"){let e=new te,t=x(.07,.07,.26,T("#3A3A44",{metalness:.5}),0,0,0);e.add(t);let i=Ze(n,.9,.95);i.position.z=.16,e.add(i);let s=new ot(n,4,4,1.5);return s.position.z=.25,e.add(s),e.userData.on=r=>{i.visible=r>.5,s.intensity=r>.5?4:0},e}function lh(n="#3A4F7A",e="FILOSOF\xCDA"){let t=new te;t.add(x(.5,.64,.06,T(n),0,0,0));let i=ve(256,128,r=>{r.fillStyle=n,r.fillRect(0,0,256,128),r.fillStyle="#F2C14E",r.font="900 40px Fraunces",r.textAlign="center",r.fillText(e,128,76)}),s=new H(new xe(.46,.23),T("#fff"));return s.material.map=i,s.position.z=.032,t.add(s),t.userData.label=s,t}var Ig=(n,e)=>{be.quarto(n,e);let t=Du();t.position.set(-3,2.8,-2.8),n.add(t)};be.cuartoYo=(n,e)=>{Ig(n,e);let t=Ea({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=Iu();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Lu(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&Sn(n,600,120,2)};be.cuartoElla=(n,e)=>{be.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(x(2.4,.45,3.2,T("#6B4A33"),1.7,.25,-1.4)),n.add(x(2.3,.3,3,T("#F3EEE4"),1.7,.6,-1.4)),n.add(x(2.38,.22,2,T("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=Iu();t.position.set(-3.2,0,-2.2),n.add(t);let i=Lu();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Ea({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Du(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&Sn(n,600,120,2)};be.entreCasas=(n,e)=>{let t=!!e.night;n.background=new he(t?"#0A0C1E":"#9FC8E8"),n.fog=new Be(t?"#0E1028":"#CFE0EE",.02),Rt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&Sn(n,1600,120,5),oh(n,t?"#24301E":"#6E9A50");let i=Ea({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Ea({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Cu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Ne(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(at(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};be.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Be(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Rt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),oh(n,t?"#24301E":"#6E9A50");let s=x(200,.02,6,T(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=x(200,.1,2,T("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let f=rh({col:d,roof:u,night:t});f.position.set(h,0,-3),n.add(f)}let a=sh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=sh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=sh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])dn(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));Gn(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new Ne(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(at(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};be.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Be(t?"#E8A880":"#F2E2C8",.015),Rt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),oh(n,"#6E9A50");let i=Cu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=ya();s.position.set(1.6,0,-1.2),n.add(s);let r=ya();r.position.set(2.8,0,-2.6),n.add(r);let o=Pg();o.position.set(-2.4,0,-3.2),n.add(o);let a=rh({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=rh({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])dn(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Ne("#E9EEFF","#6A5A4A",1.05)),n.add(at(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};be.esquina=(n,e)=>{be.barrio(n,e)};be.concurso=n=>{n.background=new he("#140C24"),n.fog=new Be("#1A1030",.03);let e=x(20,.2,12,T("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=Ze(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=He(Ht(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=x(1.2,1.1,.7,T("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(x(1.3,.1,.8,T("#F2C14E"),0,1.12,-.6)),n.add(new Ne("#B8A8FF","#2A1A3A",.9));let s=new ei("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};be.residencia=n=>{n.fog=new Be("#E8DCC8",.02),n.add(vi(20,14,"#8A6A4A")),n.add(x(20,4,.3,T("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(x(1,2.2,.08,T("#6B4A33"),-7+e*2,1.1,-3.2));let t=He(Ht([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new Ne("#FFFFFF","#9A8A70",1)),n.add(at("#FFE8C8",2,[-6,8,6],12,40))};var Vr=(n,e,t=200,i=200,s={})=>{let r=new H(new xe(t,i),T(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Gr=(n,e=1.6)=>new Le({color:n,emissive:n,emissiveIntensity:e});function ch(n=2.6){let e=new te,t=ve(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=He(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function Dg(n="#FFB25A"){let e=new te,t=new H(new Xe(.16,.12,.34,12),Gr(n,1.8));e.add(t);let i=Ze(n,1,.55);return e.add(i),e}var Lg=(n,e,t,i=3)=>{let s=Ue(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new H(new nt(.07+s()*.06,10,8),Gr(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=x(.02,.12,.02,T("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};be.desvan=(n,e)=>{let t=!!e.night;n.background=new he("#1A120C"),n.fog=new Be("#2A1C12",.05),n.add(vi(16,14,"#6A4630"));for(let h of[-1,1]){let d=x(16,.15,7.5,T("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(x(16,6,.2,T("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=x(.22,.22,9,T("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Ue(6);for(let h=0;h<9;h++){let d=Pu(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=x(1.4,.8,.7,T("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(x(1.44,.1,.74,T("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Ot(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=as(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new H(new nt(.09,12,10),Gr("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(x(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new ot("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Ne("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=Ze("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};be.pasillo=(n,e)=>{n.background=new he("#1A1036"),n.fog=new Be("#2A1850",.045),Sn(n,1600,120,7),Vr(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=Ue(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let f of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(f>0?1:0))%i.length],m=x(.12,2.6,1.3,T("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=x(.08,2.3,1.05,T(E,{roughness:.6}),f*2.35,1.15,g);n.add(p);let v=new H(new nt(.05,8,6),Gr("#F2C14E",.6));v.position.set(f*2.29,1.1,g+.35),n.add(v)}let s=new te,r=new te;r.position.set(0,0,.55),s.add(r);let o=x(.08,2.3,1.05,T("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new H(new nt(.05,8,6),Gr("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=He(Ht(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Ot(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let f=Ze(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);f.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(f)}n.add(new Ne("#D8C8FF","#4A3070",1));let h=new ot("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new ot("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};be.playaSueno=(n,e)=>{n.fog=new Be("#E8B8E0",.018),Rt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=Ze("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new H(new jn(4,40),new tt({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=Vr(n,"#F8EEF2",200,200),r=new H(new xe(400,200),new Le({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=x(400,.02,.3,T("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Ue(4);for(let l=0;l<70;l++){let c=Ze("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new te;c.add(x(.18,2.8,.18,T("#E8A0C0"),0,1.4,0));let h=Ze(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Ne("#FFE0F6","#B88AC8",1.15)),n.add(at("#FFD8E8",2,[8,14,-6],14,60))};be.baile=(n,e)=>{n.background=new he("#0E0A28"),n.fog=new Be("#1A1240",.03),Sn(n,2400,160,3),Rt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),Vr(n,"#3A2A5A");let t=new H(new jn(3.2,48),new Le({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),Lg(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=ya();c.position.set(a,0,l),n.add(c)}let i=Ue(9),s=[];for(let a=0;a<22;a++){let l=Dg(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Ne("#B8A8FF","#2A1A3A",.7));let r=new ei("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new ot("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};be.estadio=(n,e)=>{n.background=new he("#0A1020"),n.fog=new Be("#18203A",.02),Sn(n,800,160,5);let t=ve(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new H(new xe(40,40),new Le({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new te,r=T("#FFFFFF",{roughness:.4});s.add(x(.12,2.4,.12,r,-3.6,1.2,0),x(.12,2.4,.12,r,3.6,1.2,0),x(7.3,.12,.12,r,0,2.4,0));let o=new H(new xe(7.2,2.4),new tt({color:"#FFFFFF",transparent:!0,opacity:.18,side:Ft}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(x(60,1,2,T(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Ue(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Qc(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=Ze("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new Ne("#D8E0FF","#2A3A2A",1));let c=at("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};be.concierto=(n,e)=>{n.background=new he("#0C0820"),n.fog=new Be("#140C2C",.025);let t=x(14,.6,6,T("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),Vr(n,"#140E26").position.y=-.01;let i=Ot(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Ue(4);for(let l=0;l<9;l++){let c=Ze(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=as(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new te;r.add(x(.03,1.4,.03,T("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new H(new nt(.06,12,10),T("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=Ze(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Ne("#B8A8FF","#2A1A3A",.8));let a=new ei("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};be.gris=(n,e)=>{n.background=new he("#1C1E24"),n.fog=new Be("#262830",.06),Vr(n,"#4A4C54"),n.add(x(14,7,.2,T("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(x(.2,7,12,T("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(x(.2,7,12,T("#52545C",{roughness:1}),4.2,3.5,0));let t=Ot(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(x(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(x(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Ne("#A8B0C8","#2A2A30",.6));let i=new ei("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new ot("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};be.labSueno=(n,e)=>{be.lab(n,e),Su(n,-1.4,-1.6,"#4A86C7");let t=new te;t.add(x(.12,1.4,.12,T("#3A3A44"),0,.7,0)),t.add(x(1,.7,.1,T("#20242E"),0,1.7,0));let i=Ot(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var va=(n,e,t=200,i=200,s={})=>{let r=new H(new xe(t,i),T(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Nu=(n,e=1.6)=>new Le({color:n,emissive:n,emissiveIntensity:e}),Ug=(n="#8C8A84",e=3)=>{let t=ve(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Ue(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=cn,t},ls=(n,e,t,i,s,r,o,a=3)=>{let l=Ug(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new H(new En(n,e,t),new Le({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function Ng(n="#B8B4A8"){let e=new te,t=new H(new Xe(.09,.09,.22,18),T(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new H(new Xe(.092,.092,.12,18,1,!0),new Le({map:ve(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function Og(){let n=new te;n.add(x(1,.8,.6,T("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(x(.3,.3,.02,T("#222"),-.25,.5,.31));let e=new H(new nt(.04,10,8),Nu("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(x(.02,.4,.02,T("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function Bg(){let n=new te;n.add(x(.36,.5,.08,T("#3A3C3A",{metalness:.5}),0,0,0));let e=new te;e.position.set(0,0,.06),n.add(e);let t=x(.05,.4,.05,T("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new H(new nt(.07,14,10),T("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function Hg(){let n=new te;n.add(x(8,2.4,2.5,T("#F2B830",{roughness:.5}),0,1.6,0)),n.add(x(8.02,.25,2.52,T("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(x(.85,.7,.02,T("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new H(new Xe(.45,.45,.3,16),T("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=Ze("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function Ou(n,e,t={}){let i=Ht(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return He(i,e,e*(t.h||260)/(t.w||1100))}be.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new he("#0E0F10"),n.fog=new Be(t?"#050608":"#2A2A28",t?.08:.045);let s=ls(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(ls(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(ls(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(ls(.3,4,10,4.2,2,-.5,"#84827C")),n.add(ls(12,.3,10,0,3.6,-.5,"#7A7872"));for(let w of[-2.4,0,2.4])n.add(x(.25,.3,10,T("#6A6862"),w,3.35,-.5));let r=new te;r.add(x(2,.2,.3,T("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),x(.2,2.6,.3,T("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),x(.2,2.6,.3,T("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new te;o.position.set(-.85,0,-3.3),n.add(o);let a=T("#6E7670",{metalness:.7,roughness:.35}),l=x(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let w of[.5,1.9])o.add(x(1.6,.08,.04,T("#5A605C",{metalness:.7}),.85,w,.1));let c=new H(new rn(.26,.035,8,28),T("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let w=0;w<3;w++){let F=x(.5,.03,.03,T("#B8241A"),.85,1.25,.14);F.rotation.z=w*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=Bg();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=He(Ht(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=w=>{let F=new te,S=T("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])F.add(x(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])F.add(x(.96,.06,2.1,S,0,A,0)),F.add(x(.86,.14,1.96,T("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(x(.5,.1,.3,T("#D8D2C0"),0,A+.21,-.8));return F.position.set(w,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let f=new te;for(let w of[.9,1.5])f.add(x(1.4,.05,.35,T("#5A4A3A"),0,w,0));for(let w of[-.7,.7])f.add(x(.05,1.6,.35,T("#5A4A3A"),w,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let w=0;w<6;w++){let F=Ng();F.position.set(-2.5+w%3*.26,w<3?.93:1.53,-3.2),f.parent.add(F),g.push(F)}n.userData.cans=g;let E=Og();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new te;m.add(x(.06,.7,.9,T("#3A3C3A",{metalness:.5}),0,0,0));for(let w=0;w<6;w++)m.add(x(.08,.04,.8,T("#5A5C5A",{metalness:.6}),.02,-.28+w*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(x(1.4,.06,.8,T("#5A4632"),0,.75,.3));for(let w of[-.6,.6])for(let F of[-.32,.32])n.add(x(.05,.75,.05,T("#3A2E22"),w,.375,.3+F))}if(e.museo){let w=Ou(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});w.position.set(-2,2.6,-3.38),n.add(w)}let p=He(ve(360,480,w=>{w.fillStyle="#E8D8A0",w.fillRect(0,0,360,480),w.fillStyle="#7A2A1A",w.font="900 46px Fraunces",w.textAlign="center",w.fillText("REFUGIO",180,70),w.fillStyle="#3A3A2A",w.fillRect(80,140,200,140),w.fillStyle="#E8D8A0",w.beginPath(),w.moveTo(60,150),w.lineTo(180,90),w.lineTo(300,150),w.fill(),w.fillStyle="#7A2A1A",w.font="700 30px Inter",w.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let v=[];for(let w of[-1.6,1.6]){let F=new H(new nt(.09,12,10),Nu("#FFD089",t?0:2.2));F.position.set(w,3.1,-.6),n.add(F),v.push(F),n.add(x(.22,.02,.22,T("#333"),w,3.2,-.6,!1))}let _=[];if(!t)for(let w of[-1.6,1.6]){let F=new ot("#FFC27A",11,10,1.4);F.position.set(w,2.9,-.4),F.castShadow=w<0,n.add(F),_.push(F)}let y=new Ne(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let w=Ot(1.7,2.4,"#FFF4D8",3.2);w.position.set(0,1.2,-3.5),n.add(w);let F=as(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new ei("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[w,F,S]}let D=Ue(5),R=[];for(let w=0;w<26;w++){let F=Ze("#FFE8C0",.04,t?.2:.5);F.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(F),R.push(F)}n.userData.dust=R};be.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Be(t?"#1A1E28":"#C8D0B8",t?.045:.022),Rt(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),va(n,t?"#2A3A24":"#6E8A48");let i=Ue(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||dn(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new H(new nt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),T(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(ls(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(x(1.5,2,.1,T("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=Ou(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=Hg();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new Ne("#6A7A9A","#1A1E1A",.75));let a=new Ne("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=at("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new tt({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new H(new En(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[f,g,E,m]=u.userData.p;u.position.set(f+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new Ne("#E9EEFF","#5A6A4A",.95)),n.add(at("#FFD29A",2.6,[-12,16,10],16,70))};be.puente=(n,e)=>{let t=!!e.normal;n.fog=new Be("#C8D8E0",t?.02:.012),Rt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new Ne("#E9EEFF","#5A6A4A",1)),n.add(at("#FFE2B0",2.6,[-10,18,12],16,80));let i=Ue(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){va(n,"#6E8A48");let l=new H(new xe(3.4,60),T("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(x(1.4,.14,5,T("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(x(.08,.5,5,T("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(x(.1,.6,.1,T("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)dn(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=ls(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),va(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)dn(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new H(new xe(14,200),new Le({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new H(new Qs(1.5+i()*2),T("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=T("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=x(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new H(new Ur(new $s(c),60,.025,6),T("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(x(.015,1,.015,T("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(x(.18,1.6,.18,T("#6A4630"),d,.8,l*.55))}n.userData.y=0};be.marte=(n,e)=>{n.background=new he("#10141A"),n.fog=new Be("#1A2028",.05);let t=new H(new Xe(2.4,2.4,30,28,1,!0),new Le({color:"#C8CCD0",side:Qt,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(x(3.6,.1,30,T("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new H(new rn(2.38,.05,6,28),T("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=Ot(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(x(.6,.5,1.8,T("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(x(.05,.6,.5,T("#2A3A4A"),r*1.75,1.6,-o*3));let a=Ot(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=He(Ht(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new Ne("#E8F0FF","#4A505A",.9));let s=new ot("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};be.biosfera=(n,e)=>{n.fog=new Be("#F2D8B0",.012),Rt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),va(n,"#D8B07A");let t=Ue(31);for(let l=0;l<8;l++){let c=new H(new hn(8+t()*8,6+t()*6,6),T("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new te;c.add(x(.3,1.6+t(),.3,T("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Le({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:Ft}),s=new tt({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new hn(l,l*1.1,4,4);for(let u of[i,s]){let f=new H(d,u);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new nt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new H(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)dn(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=He(Ht(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new Ne("#FFF0DC","#B08A6A",1.05)),n.add(at("#FFD29A",3,[-14,16,10],20,70))};be.noria=(n,e)=>{be.parque(n,{dusk:!0});let t=new te,i=T("#E8E2D2",{metalness:.4,roughness:.4}),s=new H(new rn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=x(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new te;c.add(x(.7,.6,.6,T(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=Ze("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=x(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var Wr=(n,e=1.6)=>new Le({color:n,emissive:n,emissiveIntensity:e}),In=(n="#A8ACB0")=>T(n,{metalness:.75,roughness:.32}),_a=(n="#9EA2A6")=>{let e=ve(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=Ue(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Le({map:e,metalness:.7,roughness:.35})},Bu=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>He(Ht([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function Hu(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new Hn(e);i.colorSpace=kt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new H(new xe(.5,.31),new tt({map:i,toneMapped:!1}));return r.userData.set=s,r}function zg(){let n=new te;n.add(x(.36,.9,.03,In("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new H(new Xe(.04,.04,.02,16),Wr("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=He(Ht([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new H(new Xe(.05,.05,.025,16),Wr("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=He(Ht(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new te;for(let o=0;o<5;o++)r.add(x(.16,.012,.01,T("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}be.ascensor=(n,e)=>{n.background=new he("#08090C"),n.fog=new Be("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=_a("#A4A8AC"),o=x(2.6,.1,2.4,T("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new H(new xe(2.4,2),new Le({map:(()=>{let R=ve(256,256,w=>{w.fillStyle="#4A4440",w.fillRect(0,0,256,256),w.strokeStyle="#3A3430",w.lineWidth=3;for(let F=0;F<256;F+=32)w.beginPath(),w.moveTo(F,0),w.lineTo(F,256),w.stroke(),w.beginPath(),w.moveTo(0,F),w.lineTo(256,F),w.stroke()});return R.wrapS=R.wrapT=cn,R.repeat.set(3,3),R})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(x(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(x(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(x(2.6,.08,2.4,T("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(x(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(x(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(x(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=In("#B4B8BC"),c=x(.56,2.2,.04,l,-.28,1.1,i+.03),h=x(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(x(.01,2.2,.045,T("#555"),0,1.1,i+.04));let d=x(1.1,2.2,.02,T("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=R=>{c.position.x=-.28-.55*R,h.position.x=.28+.55*R};let u=Hu(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let f=zg();f.position.set(.85,1.25,i+.05),n.add(f),n.userData.botonera=f;for(let R of[-1,1])n.add(x(.04,.04,1.8,In("#C8CCD0"),R*(t-.06),.95,-.5));let g=new H(new xe(1.5,1.5),new Le({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(x(.02,1.56,1.56,T("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=He(Ht(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=Ot(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let p=new ot("#FFF4E4",10,7,1.4);p.position.set(0,s-.3,-.3),p.castShadow=!0,n.add(p);let v=new H(new En(.3,.06,.14),Wr("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new ot("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new Ne("#E8ECF0","#3A3634",.5);n.add(y);let D=new ot("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(R,w=0)=>{let F=Math.max(0,Math.min(1,R))*(1-w);m.material.emissiveIntensity=1.6*F,p.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),_.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};be.rellano=(n,e)=>{let t=!!e.night;n.background=new he("#14120F"),n.fog=new Be("#2A2620",.035),n.add(ti(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(x(6.38,3.4,.3,T(i),-3.81,1.7,-3.2)),n.add(x(6.38,3.4,.3,T(i),3.81,1.7,-3.2)),n.add(x(1.24,1.2,.3,T(i),0,2.8,-3.2)),n.add(x(.3,3.4,10,T(i),-5,1.7,0)),n.add(x(.3,3.4,10,T(i),5,1.7,0)),n.add(x(14,.2,10,T("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(x(6.3,.9,.02,T(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(x(1.5,.12,.1,In("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(x(.12,2.3,.1,In("#9EA2A6"),E*.69,1.13,-3.02));let s=new te;s.add(x(1.3,.05,1.6,T("#4A4440"),0,0,-.8)),s.add(x(1.3,2.2,.05,_a(),0,1.1,-1.6));for(let E of[-1,1])s.add(x(.05,2.2,1.6,_a(),E*.65,1.1,-.8));let r=Ot(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new ot("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=In("#B4B8BC"),l=x(.62,2.2,.05,a,-.31,1.1,-3),c=x(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=Hu(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=x(.1,.2,.03,In(),.95,1.2,-3.03);n.add(d);let u=new H(new nt(.03,10,8),Wr("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let f=Bu(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(f.position.set(1.5,2.2,-3.03),n.add(f),e.portal){let E=new te;for(let p=0;p<12;p++)E.add(x(.36,.26,.04,T("#8E6242"),-.6+p%4*.4,-Math.floor(p/4)*.3,0)),E.add(x(.2,.02,.02,T("#2A2A2A"),-.6+p%4*.4,-Math.floor(p/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(x(.04,2.6,2,T("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=He(Ht(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(x(1,2.2,.06,T("#6B4A33"),E,1.1,-3.02));let p=He(Ht([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);p.position.set(E,1.85,-2.98),n.add(p);let v=new H(new nt(.04,10,8),In("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new H(new nt(.16,14,10),Wr("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let p=new ot("#FFE0B0",t?6:9,9,1.4);p.position.set(E,2.9,-.8),p.castShadow=E<0,n.add(p)}n.add(new Ne("#F4ECE0","#4A4034",t?.35:.6))};var zi=3;be.hueco=(n,e)=>{n.background=new he("#05060C"),n.fog=new Be("#0A0C18",.02),Rt(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),Sn(n,1600,220,3),Gn(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*zi,i=T("#3A3A42",{roughness:.95});n.add(x(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(x(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*zi;if(n.add(x(4.1,.14,.1,T("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(x(4.1,.25,3.2,T("#5A5A64"),0,-.12,-.8)),g<=12){let m=He(Ht([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(x(.08,t,.08,In("#7A7E84"),g*1.75,t/2,-1.6));let s=new te,r=_a("#A4A8AC");s.add(x(2.6,.12,2.2,T("#3A3634"),0,0,0)),s.add(x(2.6,.1,2.2,T("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(x(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(x(2.6,2.8,.08,r,0,1.4,-1.1));let o=Ot(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new ot("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new ot("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(x(.4,.3,.4,T("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=x(.18,.3,.18,T("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new H(new Xe(.6,.6,.3,24),In("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new H(new Xe(.018,.018,1,6),In("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=x(.7,1.6,.3,T("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new H(new Xe(.03,.03,1,6),In("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let D=Math.max(.01,(t-m)*(1-E));_.scale.y=D,_.position.set(y,t-D/2,-.6)});let p=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*zi);for(let g=0;g<=12;g+=2){let E=new ot("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*zi+2.2,.4),n.add(E)}n.add(new Ne("#6A78A8","#101018",.5));let f=Ue(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let p=f()<.55,v=Ot(.8,1,p?"#FFD890":"#1A1C2A",p?1.2:.2);v.position.set(E*(3.2+m*1.6),g*zi+1.6,-.6),n.add(v),n.add(x(1.4,zi,.2,T("#2A2A34"),E*(3.2+m*1.6),g*zi+zi/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};be.feria=(n,e)=>{n.background=new he("#2A2018"),n.fog=new Be("#6A5A44",.03),n.add(ti(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(x(.25,12,.25,T("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new H(new rn(2,.1,6,24,Math.PI),T("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=Ot(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(x(.6,.4,.02,T(t[l%3]),-8+l*2,9.5,-6));let i=T("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(x(.25,9,.25,i,l*1.4,4.5,-3));n.add(x(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=x(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new H(new Xe(.4,.4,.15,18),T("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new te;r.add(x(2.4,.15,1.8,T("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(x(.08,1,.08,i,l*1.1,.5,.8));r.add(x(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=x(.16,.2,.16,T("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new H(new Xe(.03,.03,1,6),T("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=He(Ht(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new Ne("#FFE8C8","#5A4A38",.9)),n.add(at("#FFD8A0",2.2,[-6,14,8],14,50))};var kg=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));be.escalera=(n,e)=>{n.background=new he("#1E1A16"),n.fog=new Be("#2A2620",.04),n.add(ti(14,10,"#C8B898","#B8A888",8)),n.add(x(16,7,.3,T("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=x(.34,.18*(15-o),1.6,T("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(x(.34,.03,1.62,T("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(x(2.6,2.6,1.6,T("#B8A890"),-4.3,1.3,-1.3));let i=new H(new Xe(.03,.03,5.7,8),T("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(x(.025,.9,.025,T("#2A2A2E"),-2.9+o*.32,kg(-2.9+o*.32)+.45,-.5));let s=Bu(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=Ot(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new ot("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new Ne("#F4ECE0","#4A4034",.6))};var hr=[],Gg=999,Wu=n=>n+1<kr.length?kr[n+1]:Gg,hh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Xu=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[hh(i,s,t),s,hh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,hh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},ie=(n,e)=>{let t=kr[n],i=Wu(n),s=Math.min(i,658.8)-t;hr.push([(r,o)=>th(r,o,Xu(e(s,t),s)),t,i])},Vg=(n,e,t)=>{let i=Math.min(e,658.8)-n;hr.push([(s,r)=>th(s,r,Xu(t(i,n),i)),n,e])},fs=(n,e,t)=>{let i=kr[n],s=Wu(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=nh(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>Vg(r[l],r[l+1],a))},ki=n=>({tipo:"humano",...n}),Te=(n={})=>ki({glow:.1,...n});var L=(n,e,t=0)=>nh(e,n+t)-n,it=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=He(Ht(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},ut=(n,e,t,i,s={})=>it(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Wg=(n,e,t,i,s={})=>it(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var ye=(n,e,t,i=1e9,s)=>{let r=yt(t,t+.2,e)*(1-yt(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&yi(n,s)},qr=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),ph=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})},Xg=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),qg=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),qu=n=>n.pose({armL:[12,8],armR:[95,0]}),hs=n=>n.pose({armL:[60,70],armR:[60,70]}),Yu=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},zu=n=>{n.pose({armL:[8,6],armR:[8,6]}),Yu(n)},Zu=(n,e,t=1)=>{let i=Math.sin(e*7);n.pose({armL:[40+i*30*t,40],armR:[120,100],lean:i*8*t,bob:Math.abs(Math.cos(e*7))*.06*t,legL:[i*10,0],legR:[-i*10,0],head:i*6})},qt=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e};var Yg=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=He(zr(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),yi(a,r)})},Ma=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=Ze(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},Zg=n=>{let e=[0,1,2].map(()=>{let t=He(zr("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),yi(o,s)})},Vn={exposure:.95,bloom:.45};var $g=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=He(Tu(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l},Jg=(n,e,t,i,s=56)=>xu(n,e,t,{w:640,h:400,size:s}),Qg=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)};var dr=(n={})=>ki({outfit:"azul",hair:"bun",hairc:"#3A2418",lash:!0,glow:0,...n}),mh=(n={})=>ki({outfit:"laranja",glasses:!0,glow:0,...n}),$u=(n={})=>ki({outfit:"avental",glow:0,s:.9,...n});var ku=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],ze=(n,e={})=>{let[t,i,s]=ku[n%ku.length];return ki({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},ds=(n=0,e={})=>ze(n,{outfit:"jaleco",glasses:!0,...e}),Sa=(n={})=>ki({outfit:"terno3",hair:"bob",hairc:"#2A1A14",lash:!0,glow:0,...n}),dh=(n=0,e={})=>ze(n,{outfit:"terno",glasses:!0,...e}),Gu=(n=0,e={})=>ze(n,{outfit:"terno2",...e}),Xr=(n={})=>ki({outfit:"verde",hair:"old",hairc:"#E8E2D8",glasses:!0,lash:!0,glow:0,...n}),Kg=(n={})=>ki({outfit:"jaleco",hair:"bun",hairc:"#4A2A1A",lash:!0,glow:0,...n}),lr=(n={})=>Te({outfit:"terno",...n}),ps={bg:"#C9361F",fg:"#fff"},jg={bg:"#2F5A9A",fg:"#fff"},Gi={exposure:1,vig:.7,bloom:.2},gh={bloom:.38,bloomT:.9,vig:.6,exposure:1},Pe=(n,e,t,i,s=2.2)=>{let r={y:it,w:ut,p:Wg,r:(l,c,h,d)=>it(l,c,h,d,ps),b:(l,c,h,d)=>it(l,c,h,d,jg)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:L(e,l));return(l,c)=>o.forEach((h,d)=>ye(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))},eE=(n,e,t={})=>{let i=n.createLinearGradient(0,0,0,360);i.addColorStop(0,t.top||"#22467E"),i.addColorStop(1,"#0E1C38"),n.fillStyle=i,n.fillRect(0,0,640,360),t.anchor!==!1&&(n.fillStyle="#4A2A1A",n.beginPath(),n.ellipse(470,120,62,70,0,0,7),n.fill(),n.fillStyle="#6A3A44",n.beginPath(),n.roundRect(400,175,140,120,30),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(470,125,48,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.ellipse(452,122,8,11,0,0,7),n.ellipse(488,122,8,11,0,0,7),n.fill()),n.fillStyle="#C9361F",n.fillRect(0,238,640,70),n.fillStyle="#F2C14E",n.fillRect(0,24,230,44),n.fillStyle="#111",n.font="900 28px Inter",n.textAlign="left",n.fillText(t.tag||"\xDALTIMA HORA",14,56),n.fillStyle="#fff",n.font="900 "+(t.size||40)+"px Inter",n.fillText(e[0]||"",18,287),e[1]&&(n.font="700 26px Inter",n.fillStyle="#E8EEF8",n.fillText(e[1],18,340))},ba=(n,e,t=1.3,i=["",""],s={})=>{let r=new te;r.add(x(t+.1,t*.5625+.1,.08,T("#15161C",{metalness:.3}),0,0,0,!1));let o=document.createElement("canvas");o.width=640,o.height=360;let a=o.getContext("2d"),l=new Hn(o);l.colorSpace=kt;let c=new H(new xe(t,t*.5625),new tt({map:l,toneMapped:!1}));c.position.z=.045,r.add(c);let h="";r.userData.set=(u,f=s)=>{let g=JSON.stringify([u,f]);g!==h&&(h=g,eE(a,u,f),l.needsUpdate=!0)},r.userData.set(i,s),r.position.set(...e),n.add(r);let d=new ot("#8FB0FF",2.5,4,1.6);return d.position.set(e[0],e[1],e[2]+.6),n.add(d),r},tE=(n,e,t,i="#F2C14E",s="#5E6474")=>{let r=Math.ceil(e/t),o=64;return ve(t*o,r*o,a=>{a.clearRect(0,0,t*o,r*o);for(let l=0;l<e;l++){let c=l%t*o+o/2,h=Math.floor(l/t)*o+o/2;a.fillStyle=l<n?i:s,a.beginPath(),a.arc(c,h-13,11,0,7),a.fill(),a.beginPath(),a.roundRect(c-15,h,30,25,10),a.fill()}})},ur=(n,e,t,i,s,r,o,a)=>{let l=Math.ceil(t/i),c=He(tE(e,t,i,o,a),s,s*l/i);return c.position.set(...r),c.renderOrder=5,n.add(c),c},Yr=(n,e,t,i,s="#1E2230",r=.82)=>{let o=new H(new xe(e,t),new tt({color:s,transparent:!0,opacity:r,depthWrite:!1}));return o.position.set(...i),o.renderOrder=4,n.add(o),o},nE=(n,e)=>{let t=[];for(let[i,s,r]of e){let o=new H(new Xe(.08,.065,.14,20),T("#F4F0E4"));o.position.set(i,s+.07,r),n.add(o);let a=new H(new rn(.045,.012,8,16),T("#F4F0E4"));a.position.set(i+.09,s+.08,r),n.add(a);for(let l=0;l<6;l++){let c=Ze("#FFFFFF",.14,.5);n.add(c),t.push([c,i,s,r,l])}}return i=>t.forEach(([s,r,o,a,l])=>{let c=(i*.5+l/6)%1;s.position.set(r+Math.sin(i*2+l)*.03,o+.2+c*.5,a),s.material.opacity=.45*(1-c)})},Wn=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(x(s,.08,r,T(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(x(.07,i,.07,T("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))},uh=(n,e,t,i=0,s="#8E6242")=>{let r=new te;r.add(x(.5,.06,.5,T(s),0,.5,0)),r.add(x(.5,.7,.06,T(s),0,.85,-.22));for(let[o,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(x(.05,.5,.05,T(s),o*.2,.25,a*.2));return r.position.set(e,0,t),r.rotation.y=i,n.add(r),r},Eh=(n=7,e="#F2B83A")=>{let t=new te,i=T(e,{roughness:.5});t.add(x(.45,n,.45,i,0,n/2,0));for(let a=0;a<n;a+=.6){let l=x(.03,.7,.03,T("#B07A20"),0,a+.3,.24);l.rotation.z=.7,t.add(l)}let s=new te;s.position.y=n,s.add(x(8,.35,.35,i,2.2,0,0)),s.add(x(1,.7,.7,T("#3A3A44"),-1.6,-.2,0)),s.add(x(.8,.8,.8,T("#E8E2D2"),.3,-.6,0));let r=x(.03,2.4,.03,T("#222"),5.2,-1.2,0);s.add(r);let o=x(1.6,.6,.7,T("#8A5A3A"),5.2,-2.6,0);return s.add(o),t.add(s),t.userData={arm:s,load:o,cab:r},t},yh=(n="#F4F6F8",e="#C9361F")=>{let t=new te,i=T(n,{roughness:.4}),s=new H(new Xe(.5,.5,6,16),i);s.rotation.z=Math.PI/2,s.position.y=1.2,t.add(s);let r=new H(new nt(.5,16,12),i);r.scale.set(1.5,1,1),r.position.set(3,1.2,0),t.add(r),t.add(x(1.3,.1,6.6,i,-.2,1,0)),t.add(x(1,1.4,.1,T(e),-2.7,1.95,0)),t.add(x(.7,.08,2.2,i,-2.7,1.3,0));for(let o of[-1.6,1.6]){let a=new H(new Xe(.24,.24,.8,12),T("#9AA0A8",{metalness:.6}));a.rotation.z=Math.PI/2,a.position.set(.1,.74,o),t.add(a)}for(let o=0;o<8;o++)t.add(x(.2,.17,.02,T("#2A3A55"),2.1-o*.55,1.4,.5));t.add(x(.25,.3,.02,T("#2A3A55"),3.35,1.38,.3));for(let o of[2.4,-.5])t.add(x(.12,.7,.12,T("#3A3A44"),o,.35,0));return t},fh=(n="#4A86C7")=>{let e=new te,t=T(n,{roughness:.35,metalness:.3});e.add(x(2,.55,.95,t,0,.45,0)),e.add(x(1.1,.45,.85,t,-.1,.92,0)),e.add(x(1.12,.34,.87,T("#2A3A55",{roughness:.1}),-.1,.94,0));for(let[i,s]of[[-.65,.48],[.65,.48],[-.65,-.48],[.65,-.48]]){let r=new H(new Xe(.2,.2,.14,14),T("#1A1A20"));r.rotation.x=Math.PI/2,r.position.set(i,.2,s),e.add(r)}return e},Ju=()=>{let n=new te;n.add(x(.8,1,.2,T("#9AA4AE",{metalness:.4}),0,0,0));for(let i=0;i<8;i++)n.add(x(.08,.2,.05,T(i%3?"#2A2A34":"#C9361F"),-.28+i%4*.18,i<4?.25:-.05,.1));for(let i=0;i<6;i++){let s=x(.025,.55,.025,T(["#C9361F","#3A6AE8","#F2C14E","#2A2A34","#3AA860","#E8667F"][i]),-.3+i*.12,-.2,.12);s.rotation.z=(i-2.5)*.35,n.add(s)}let e=new te;e.position.set(-.4,0,.11),e.add(x(.8,1,.03,T("#B0BAC4",{metalness:.4}),.4,0,0));let t=He(zr("\u26A1","#F2C14E",150),.3,.24);return t.position.set(.4,.1,.02),e.add(t),n.add(e),n.userData.door=e,n},cs=(n=1)=>{let e=new te,t=new H(new Xe(.1,.1,.22,20),T("#E9853A",{roughness:.3}));t.position.y=.11,e.add(t);let i=new H(new Xe(.103,.103,.1,20),T("#FBF7EC"));i.position.y=.1,e.add(i);let s=new H(new Xe(.112,.112,.05,20),T("#C9361F",{metalness:.3}));return s.position.y=.245,e.add(s),e.userData.lid=s,e.scale.setScalar(n),e},Qu=()=>{let n=new te,e=T("#D8DCE0",{metalness:.8,roughness:.25});n.add(x(.03,.26,.015,e,0,.13,0));let t=new H(new nt(.05,12,8),e);return t.scale.set(1,1.4,.4),t.position.y=.29,n.add(t),n},iE=(n,e=30,t=[-3,3,-2,1])=>{let i=Ue(5),s=[];for(let r=0;r<e;r++){let o=x(.3,.2,.01,T(r%4?"#FBF7EC":"#F2C9C9"),0,0,0,!1);n.add(o),s.push([o,t[0]+i()*(t[1]-t[0]),t[2]+i()*(t[3]-t[2]),i()*6,i()])}return(r,o=1)=>s.forEach(([a,l,c,h,d])=>{let u=(r*.3+d)%1;a.visible=o>0,a.position.set(l+Math.sin(r+h)*.2,4-u*4.2,c),a.rotation.set(r*2+h,r+h,h)})},sE=(n,e,t="")=>ve(400,520,i=>{i.fillStyle=e,i.fillRect(0,0,400,520),i.fillStyle="#fff",i.font="900 54px Fraunces",i.textAlign="center",i.fillText(n,200,80),i.fillStyle="#43C4B4",i.beginPath(),i.roundRect(100,340,200,200,50),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(200,250,92,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(170,245,16,22,0,0,7),i.ellipse(230,245,16,22,0,0,7),i.fill(),t&&(i.fillStyle="#F2C14E",i.font="900 36px Inter",i.fillText(t,200,140))}),vh=(n,e,t,i)=>{let s=new H(new xe(t,t*1.3),new Le({map:sE(n,e,i),roughness:.6}));return s.castShadow=!0,s},rE=(n,e,t=.7,i)=>{let s=new te;s.add(x(t,t*1.3,t*.35,T(e),0,t*.65,0));let r=vh(n,e,t*.98,i);return r.position.set(0,t*.65,t*.176),s.add(r),s},oE=()=>ve(256,160,n=>{n.clearRect(0,0,256,160),n.strokeStyle="#E8A0A8",n.lineWidth=7,n.beginPath(),n.moveTo(50,115),n.quadraticCurveTo(0,70,22,30),n.stroke(),n.fillStyle="#C8C8D0",n.beginPath(),n.ellipse(120,108,75,45,0,0,7),n.fill(),n.beginPath(),n.ellipse(190,92,40,32,0,0,7),n.fill(),n.fillStyle="#F2B8C0",n.beginPath(),n.arc(172,56,21,0,7),n.arc(206,56,21,0,7),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(206,86,7,0,7),n.fill(),n.fillStyle="#E87A8A",n.beginPath(),n.arc(229,98,7,0,7),n.fill()}),Aa=(n,e=.5)=>{let t=He(oE(),e,e*160/256);return t.renderOrder=4,n.add(t),t},aE=()=>ve(300,260,n=>{n.clearRect(0,0,300,260),n.fillStyle="#F4F0E4",n.beginPath(),n.ellipse(140,130,90,55,0,0,7),n.fill();for(let e of[80,110,170,200])n.fillRect(e,160,16,80);n.fillStyle="#2A2A34";for(let e of[80,110,170,200])n.fillRect(e,228,16,14);n.fillStyle="#F4F0E4",n.beginPath(),n.ellipse(240,80,38,30,-.4,0,7),n.fill(),n.fillStyle="#8A7A6A",n.beginPath(),n.moveTo(225,55),n.quadraticCurveTo(210,10,240,15),n.lineTo(238,55),n.fill(),n.fillStyle="#D8D0C0",n.beginPath(),n.moveTo(250,100),n.lineTo(262,140),n.lineTo(270,100),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(250,75,6,0,7),n.fill()}),lE=(n,e=1)=>{let t=He(aE(),e,e*260/300);return t.renderOrder=3,n.add(t),t},cE=()=>ve(256,200,n=>{n.clearRect(0,0,256,200),n.fillStyle="#2A2A34",n.beginPath(),n.arc(85,80,18,0,7),n.arc(171,80,18,0,7),n.fill(),n.strokeStyle="#2A2A34",n.lineWidth=7,n.beginPath(),n.arc(128,105,55,.3,Math.PI-.3),n.stroke();for(let e=0;e<6;e++)n.beginPath(),n.moveTo(90+e*15,145),n.lineTo(90+e*15,165),n.stroke()}),cr=()=>{let n=new te,e=T("#7A5232",{roughness:.9});n.add(x(.1,2.4,.1,e,0,1.2,-.12)),n.add(x(1.7,.1,.1,e,0,1.6,-.12));let t=T("#4A5A7A",{roughness:.95});n.add(x(.8,.95,.36,t,0,1.35,0));for(let l of[-1,1])n.add(x(.5,.24,.24,t,l*.62,1.6,0));for(let l of[-1,1]){let c=new H(new hn(.09,.28,6),T("#E8C860"));c.rotation.z=-l*Math.PI/2,c.position.set(l*1,1.6,0),n.add(c)}let i=new H(new nt(.3,20,16),T("#D8C090",{roughness:1}));i.position.y=2.08,n.add(i);let s=new H(new Xe(.58,.58,.04,24),T("#B88A40"));s.position.y=2.32,n.add(s);let r=new H(new Xe(.26,.32,.34,20),T("#B88A40"));r.position.y=2.5,n.add(r);let o=new H(new hn(.3,.55,14),T("#8A5A30",{roughness:1}));o.rotation.x=Math.PI,o.position.set(0,1.75,.14),n.add(o);let a=He(cE(),.42,.33);return a.position.set(0,2.1,.31),n.add(a),n},Vu=n=>ve(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#fff",e.strokeStyle="#fff",e.lineWidth=8,n?(e.beginPath(),e.arc(40,40,13,Math.PI,0),e.stroke(),e.beginPath(),e.arc(88,40,13,Math.PI,0),e.stroke()):(e.beginPath(),e.ellipse(40,32,11,15,0,0,7),e.ellipse(88,32,11,15,0,0,7),e.fill())}),us=()=>{let n=new te,e=new H(new nt(.2,20,14),T("#BFE0F2",{roughness:.9}));e.scale.set(1.5,.9,.9),n.add(e);let t=new H(new nt(.13,20,14),T("#15151A",{roughness:.5}));t.position.set(.27,.07,.02),n.add(t);let i=He(Vu(!1),.15,.075),s=He(Vu(!0),.15,.075);for(let r of[i,s])r.position.set(.28,.09,.155),r.renderOrder=6,n.add(r);return s.visible=!1,n.userData.rie=r=>{i.visible=!r,s.visible=r},n},Ku=()=>{let n=new te,e=new H(new Xe(.06,.06,.22,16),T("#EEF4FA",{roughness:.2}));e.position.y=.11,n.add(e);let t=new te;t.position.y=.24,t.add(new H(new Xe(.066,.066,.045,16),T("#7AB8E8")));let i=new H(new hn(.035,.09,12),T("#E8C8A0"));return i.position.y=.065,t.add(i),n.add(t),n.userData.lid=t,n},ar=(n,e,t,i=.5)=>{let s=He(zr(e,t,170),i,i*.78);return s.renderOrder=6,n.add(s),s},_h=(n,e=8)=>{let t=[],i=Ue(3);for(let s=0;s<e;s++){let r=Ze("#FFFFFF",.7,0);n.add(r),t.push([r,i()*6-3,1+i()*2,-1-i()*2,i()*3])}return(s,r=1)=>t.forEach(([o,a,l,c,h])=>{o.position.set(a,l,c);let d=(s*1.3+h)%1;o.material.opacity=r*(d<.08?1:0)})};var hE=(n,e={})=>ve(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),ju=(n,e)=>{let t=new te;t.add(x(.62,1.18,.06,T("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new H(new xe(.56,1.04),new tt({map:hE(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t},dE=()=>{let n=new te;for(let e=0;e<6;e++){let t=new H(new Js(.04,.18,4,8),T("#C8603A",{roughness:.5}));t.rotation.z=Math.PI/2,t.position.set(0,.05+e*.02,-.1+e*.04),n.add(t)}return n};ie(0,(n,e)=>({amb:"cuartoYo",ambo:{},fov:32,atores:[Te({x:-.2,z:-.6,eyes:[[0,"shut"],[.6,"flat"],[1.1,"look"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[120+Math.sin(i*6)*10,30],head:-6})})],extra:t=>{let i=ut(t,["UN D\xCDA NORMAL\u2026"],1.6,[0,2.25,-.6]);return{update:(s,r,o)=>ye(i,s,.2,99,o)}},c:[[0,1.5,2.6],[0,1.25,-.6],[0,1.55,2.2],[0,1.25,-.6]],range:2}));ie(1,(n,e)=>{let t=L(e,"padre"),i=L(e,"hermano");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:32,atores:[Te({x:1.4,z:.2,eyes:[[0,"look"],[t,"lookl"],[i,"wide"]],move:s=>[Nt(2.2,1.4,yt(0,1.2,s)),0,.2],pose:(s,r)=>r<1.2?s.walk(r):s.pose()})],extra:s=>{Wn(s,-.4,-1.1),uh(s,-1,-.4,Math.PI),uh(s,.2,-.4,Math.PI);let r=Pe(s,e,[[["PAP\xC1: NO EST\xC1"],"padre","r",[-1,1.75,-.4],1.4,1],[["HERMANO: TAMPOCO"],"hermano","r",[.2,2.15,-.4],1.6,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[1.2,1.7,3.6],[-.2,1.2,-.6],[.8,1.6,3],[-.3,1.2,-.6]],range:3}});ie(2,(n,e)=>{let t=L(e,"calientes");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:26,atores:[],extra:i=>{Wn(i,0,-1);let s=nE(i,[[-.3,.94,-.9],[.3,.94,-1]]),r=ut(i,["TODAV\xCDA CALIENTES"],1.3,[0,1.75,-1]);return{update:(o,a,l)=>{s(o),ye(r,o,t-.2,99,l)}}},c:[[-.4,1.45,.9],[0,1.05,-.95],[.3,1.35,.6],[0,1.05,-.95]],k:1,range:.8,blur:14}});ie(3,(n,e)=>{let t=L(e,"boca"),i=L(e,"noticias");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:32,atores:[dr({x:1.1,z:.5,eyes:[[0,"look"],[t,"wide"]],pose:s=>s.pose({armL:[12,8],armR:[60,60]})})],extra:s=>{let r=ba(s,[-.7,1.5,-2.6],1.5,["TODOS LOS HOMBRES\u2026","NOTICIAS DE \xDALTIMA HORA"]),o=ut(s,["UNA Y OTRA VEZ"],1.4,[-.7,2.5,-2.6]);return{update:(a,l,c)=>{ye(o,a,L(e,"vez"),99,c),r.userData.set(a<i?["",""]:["TODOS LOS HOMBRES\u2026","NOTICIAS DE \xDALTIMA HORA"])}}},c:[[.6,1.7,3.4],[-.1,1.45,-1],[.4,1.65,2.8],[-.2,1.45,-1.2]],k:1.15,range:3.5,look:{exposure:.98}}});ie(4,(n,e)=>{let t=L(e,"todos",2),i=L(e,"millones");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:24,atores:[],extra:s=>{let r=ba(s,[0,1.5,-2.6],1.8,[""]),o=it(s,["+4.000 MILLONES"],1.6,[0,2.35,-2.4],ps);return{update:(a,l,c)=>{r.userData.set(a<t?["DESAPARECEN TODOS LOS HOMBRES","ESTA NOCHE \xB7 EN TODO EL PLANETA"]:["TODOS. SIN EXCEPCI\xD3N","M\xC1S DE 4.000 MILLONES"],{size:28}),ye(o,a,i-.3,99,c)}}},c:[[0,1.6,.9],[0,1.6,-2.6],[0,1.6,.4],[0,1.6,-2.6]],k:1,range:2,blur:6}});ie(5,(n,e)=>{let t=L(e,"mira"),i=L(e,"grita");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:30,atores:[dr({x:.7,z:.2,eyes:[[0,"look"],[t,"wide"]],pose:(s,r)=>r>i?s.pose({armL:[150,30],armR:[150,30],bob:Math.abs(Math.sin(r*20))*.02}):s.pose()}),Te({x:-.7,z:.3,eyes:[[0,"look"],[i,"wide"]]})],extra:s=>{let r=it(s,["\xA1AAAH!"],1.1,[.7,2.35,.2],{...ps,size:90,w:500});return{update:(o,a,l)=>{ye(r,o,i,99,l),Qg(l,o>i&&o<i+.8?.03:0,o)}}},c:[[0,1.6,3.6],[0,1.3,.2],[0,1.6,3],[0,1.3,.2]],range:2.5}});ie(6,(n,e)=>{let t=L(e,"ultimo");return{amb:"espacio",fov:34,k:1,atores:[],extra:i=>{let s=new H(new nt(2.2,48,32),new Le({map:ve(512,256,l=>{l.fillStyle="#2C6FB8",l.fillRect(0,0,512,256),l.fillStyle="#4FA35A";let c=Ue(4);for(let h=0;h<9;h++)l.beginPath(),l.ellipse(c()*512,50+c()*156,14+c()*30,10+c()*22,c()*3,0,7),l.fill();l.fillStyle="#F4F6FA",l.fillRect(0,0,512,14),l.fillRect(0,242,512,14)}),roughness:.8}));i.add(s);let r=Ze("#FFE27A",.7,1);r.position.set(.5,.8,2.05),i.add(r);let o=it(i,["EL \xDALTIMO HOMBRE DEL PLANETA"],2.6,[0,1.2,3.2]),a=ut(i,["T\xDA"],.7,[.5,1.35,2.1],{size:90,w:360});return{update:(l,c,h)=>{s.rotation.y=-.6+l*.04,r.material.opacity=.6+.4*Math.abs(Math.sin(l*4)),r.scale.setScalar(.5+.3*Math.abs(Math.sin(l*4))),ye(a,l,.2,99,h),ye(o,l,t-.2,99,h)}}},c:[[0,.6,9],[0,.6,0],[0,.9,7.4],[0,.7,0]],range:6,blur:2,look:{bloom:.6}}});ie(7,(n,e)=>{let t=L(e,"suscribete"),i=L(e,"campanita");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:32,atores:[Te({x:-1.4,z:-.4,eyes:[[0,"happy"]],pose:(s,r)=>r<t?qr(s,r):qu(s)})],extra:s=>{let r=ch(2.6);r.position.set(.9,1.7,-.6),s.add(r);let o=Ma(s,14,"#FFE27A"),a=ut(s,["\xA1ANTES DE QUE VENGAN A BUSCARTE!"],2.6,[.4,2.75,-.7]);return{update:(l,c,h)=>{let d=yt(t-.3,t,l);r.scale.setScalar(Math.max(.01,d*(1+.06*Math.sin(l*8)*(l>t+1?1:0)))),r.rotation.z=l>i&&l<i+1.4?Math.sin(l*40)*.06:0,o(l,[.9,1.7,-.5,1.2],yt(i,i+.2,l)),ye(a,l,.1,t-.2,h)}}},c:[[0,1.7,4.4],[-.2,1.5,-.6],[0,1.7,4],[-.2,1.5,-.6]],k:1.2,range:6,blur:4}});ie(8,(n,e)=>{let t=L(e,"vamos"),i=L(e,"unico");return{amb:"rua",ambo:{},fov:32,atores:[Te({x:0,z:0,eyes:[[0,"look"],[i,"smug"]],move:s=>[0,0,Nt(1,-1.5,yt(0,n,s))],pose:(s,r)=>s.walk(r)})],extra:s=>{let r=it(s,["MISI\xD3N: SOBREVIVIR SIENDO EL \xDANICO"],2.8,[0,2.6,-1.5]);return{update:(o,a,l)=>ye(r,o,t,99,l)}},c:[[0,1.6,4.4],[0,1.3,.5],[0,1.6,2.6],[0,1.3,-1.5]],range:3}});ie(9,(n,e)=>{let t=L(e,"cola"),i=L(e,"siempre"),s=L(e,"tuyos");return{amb:"gris",fov:32,atores:[...[0,1,2,3,4,5].map(r=>ze(r,{x:1.9+r%2*.25,z:-2.4+r*.65,eyes:[[0,r%2?"flat":"look"]],pose:o=>o.pose({armL:[20,-60],armR:[20,-60]})})),Te({x:-1.2,z:.6,eyes:[[0,"look"],[t,"happy"],[s,"smug"]],move:r=>[Nt(-.4,-1.7,yt(i,i+2,r)),0,Nt(.8,-2.4,yt(i,i+2.4,r))],pose:(r,o)=>o>i&&o<i+2.4?r.walk(o):o>i+2.4?r.pose({armL:[150,10],armR:[150,10]}):r.pose()})],extra:r=>{r.add(x(9,4,.2,T("#DCE6EC"),0,2,-3.3));for(let l=0;l<12;l++)r.add(x(.02,4,.02,T("#B8C4CC"),-4.4+l*.8,2,-3.19));let o=(l,c,h)=>{r.add(x(1.1,2.3,.1,T(h),l,1.15,-3.2));let d=it(r,[c],1,[l,2.65,-3.15],{bg:"#2A2A34",fg:"#fff",size:80,w:560});d.renderOrder=3};o(2,"MUJERES","#E8667F"),o(-1.7,"HOMBRES","#4A86C7");let a=Pe(r,e,[[["SE ACAB\xD3 LA COLA"],"cola","w"],[["PARA SIEMPRE"],"siempre","r"],[["TODOS LOS BA\xD1OS DEL MUNDO: TUYOS"],"tuyos","y"]],[-.2,2.6,.2],2.4);return{update:(l,c,h)=>a(l,h)}},c:[[-.4,1.7,4.6],[0,1.3,-1],[-.8,1.7,4],[-.6,1.3,-1.6]],range:4}});ie(10,(n,e)=>{let t=L(e,"por");return{amb:"rua",ambo:{dusk:!0},fov:30,atores:[Te({x:0,z:0,eyes:[[0,"flat"],[t,"sad"]],pose:(i,s)=>i.pose({head:Math.sin(s*2)*6})})],extra:i=>{let s=it(i,["\xBFPOR QU\xC9 YO?"],1.6,[0,2.3,0],{size:90,w:640});return{update:(r,o,a)=>{ye(s,r,t-.2,99,a)}}},c:[[0,1.6,3.8],[.3,1.5,0],[0,1.6,3.2],[.3,1.55,0]],range:2}});ie(11,(n,e)=>{let t=L(e,"medicos"),i=L(e,"cientificos"),s=L(e,"gobiernos"),r=L(e,"tampoco"),o=(a,l)=>a.pose({armL:[60,100],armR:[60,100],head:Math.sin(l*3)*5});return{amb:"lab",fov:34,atores:[ds(0,{x:-1.6,z:-.6,pose:o,eyes:[[0,"flat"]]}),ds(2,{x:-.5,z:-.9,pose:o,eyes:[[0,"sad"]]}),Sa({x:.6,z:-.8,pose:o,eyes:[[0,"flat"]]}),Te({x:1.7,z:-.3,eyes:[[0,"look"],[r,"sad"]],pose:(a,l)=>l>r?o(a,l):a.pose()})],extra:a=>{let l=[ut(a,["M\xC9DICAS"],.9,[-1.6,2.35,-.6],{size:80}),ut(a,["CIENT\xCDFICAS"],1.1,[-.5,2.35,-.9],{size:80}),ut(a,["GOBIERNOS"],1.1,[.6,2.35,-.8],{size:80}),it(a,["T\xDA TAMPOCO"],1.1,[1.7,2.35,-.3],{...ps,size:80})],c=it(a,["NADIE LO SABE"],1.8,[0,2.95,-.8]);return{update:(h,d,u)=>{ye(c,h,.1,99,u),[t,i,s,r].forEach((f,g)=>ye(l[g],h,f,99,u))}}},c:[[0,1.8,5],[0,1.6,-.6],[0,1.8,4.4],[0,1.6,-.6]],k:1.15,range:4}});ie(12,(n,e)=>{let t=L(e,"macarrones"),i=L(e,"serie"),s=L(e,"movil"),r=L(e,"nada"),o=L(e,"aqui");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:32,atores:[Te({x:-1,z:-1,y:.82,eyes:[[0,"shut"]],pose:(a,l)=>{a.pose({armL:[10,6],armR:[10,6]}),bu(a)}})],extra:a=>{let l=ju([""],{hora:"03:12",bg:"#3A4A8A"});l.scale.setScalar(.28),l.rotation.x=-Math.PI/2+.3,a.add(l);let c=Zg(a),h=Pe(a,e,[[["MACARRONES \u{1F35D}"],"macarrones","w"],[["UNA SERIE \u{1F4FA}"],"serie","w"],[["M\xD3VIL EN LA CARA \u{1F4F1}"],"movil","w"],[["NADA ESPECIAL"],"nada","y"],[["PERO AQU\xCD EST\xC1S"],"aqui","r"]],[-.6,2.35,-1],2);return{update:(d,u,f)=>{l.position.set(-1.62,1.12,-1),c(d,[-1.3,1.5,-.9],f),h(d,f)}}},c:[[.6,1.9,2.6],[-1,1.2,-1],[.3,1.8,2],[-1,1.2,-1]],range:2.5,look:Vn}});ie(13,(n,e)=>({amb:"apagon",fov:34,atores:[],extra:t=>{let i=it(t,["D\xCDA 1"],2,[0,2.6,0],{size:110,w:520});return{update:(s,r,o)=>ye(i,s,0,99,o)}},c:[[0,2.4,6],[0,2.6,0],[0,2.4,5.4],[0,2.6,0]],k:1,range:4,look:{exposure:1.3}}));ie(14,(n,e)=>{let t=L(e,"oficinas"),i=L(e,"cocinas"),s=L(e,"aviones");return{amb:"hall",fov:34,atores:[ze(1,{x:-1.4,z:-1,eyes:[[0,"wide"]]}),ze(4,{x:1.2,z:-1.4,eyes:[[0,"sad"]],pose:r=>r.pose({armL:[20,-60],armR:[20,-60]})})],extra:r=>{for(let[a,l]of[[-2.4,-2.2],[0,-2.6],[2.4,-2.2]]){Wn(r,a,l,.8,1.4,.8,"#8E6242"),uh(r,a,l+.7,Math.PI);let c=x(.5,.35,.04,T("#1A1A24"),a,1.05,l-.2);r.add(c)}let o=Pe(r,e,[[["EL MUNDO SE QUEDA QUIETO"],.1,"y"],[["OFICINAS A MEDIAS"],"oficinas","w"],[["COCINAS A MEDIAS"],"cocinas","w"],[["AVIONES QUE NO DESPEGAN"],"aviones","r"]],[0,2.75,-1.4],2.4);return{update:(a,l,c)=>o(a,c)}},c:[[0,2,4.6],[0,1.4,-1.6],[-.4,1.9,4],[0,1.4,-1.6]],range:4,look:{exposure:.95}}});ie(15,(n,e)=>({amb:"hall",fov:30,atores:[],extra:t=>{let i=ur(t,92,100,20,3.4,[0,1.6,-1.5],"#4A86C7","#E8667F"),s=it(t,["TRABAJOS DE (CASI) SOLO HOMBRES"],3,[0,2.75,-1.4]);return{update:(r,o,a)=>{ye(i,r,.1,99),ye(s,r,.3,99,a)}}},c:[[0,1.9,3.6],[0,1.9,-1.5],[0,1.9,3],[0,1.9,-1.5]],range:4,blur:4}));ie(16,(n,e)=>{let t=L(e,"3"),i=L(e,"carpinteros"),s=L(e,"electricistas");return{amb:"hall",fov:30,atores:[],extra:r=>{let o=Yr(r,4,2.9,[0,1.75,-1.62]),a=ur(r,3,100,20,3.2,[0,1.3,-1.5],"#E8667F","#7A8A9A"),l=Pe(r,e,[[["EE. UU. \xB7 3 DE CADA 100"],"3","y",[0,2.75,-1.4],2.4,1],[["\u{1F528} CARPINTERAS"],"carpinteros","w",[-.9,2.2,-1.4],1.4,1],[["\u26A1 ELECTRICISTAS"],"electricistas","w",[.9,2.2,-1.4],1.4,1]]);return{update:(c,h,d)=>{ye(a,c,t,99),ye(o,c,0,99),l(c,d)}}},c:[[0,1.9,3.6],[0,1.8,-1.5],[0,1.9,3.2],[0,1.8,-1.5]],range:4,blur:4}});ie(17,(n,e)=>({amb:"plaza",ambo:{seed:3},fov:34,atores:[],extra:t=>{let i=Eh(7);i.position.set(-3,0,-10),t.add(i);for(let r=0;r<3;r++)t.add(x(2.5,2+r,2.5,T("#B8B0A0"),2+r*1.2,1+r/2,-7-r));let s=it(t,["OBRAS: CASI LO MISMO"],2.4,[0,2.6,-1]);return{update:(r,o,a)=>{i.userData.arm.rotation.y=Math.sin(r*.4)*.2,ye(s,r,.2,99,a)}}},c:[[0,1.6,5],[0,3,-5],[.6,1.8,4.4],[0,3.4,-5]],k:1,range:8,blur:4}));ie(18,(n,e)=>{let t=L(e,"5");return{amb:"hall",fov:30,atores:[],extra:i=>{let s=Yr(i,4,2.9,[0,1.75,-1.62]),r=ur(i,5,100,20,3.2,[0,1.3,-1.5],"#E8667F","#7A8A9A"),o=it(i,["\u2708 PILOTOS: MENOS DE 5 DE CADA 100"],3,[0,2.75,-1.4]);return{update:(a,l,c)=>{ye(s,a,0,99),ye(r,a,t-.3,99),ye(o,a,.2,99,c)}}},c:[[0,1.9,3.6],[0,1.8,-1.5],[0,1.9,3.2],[0,1.8,-1.5]],range:4,blur:4}});ie(19,(n,e)=>{let t=L(e,"obras");return{amb:"plaza",ambo:{seed:5},fov:34,atores:[],extra:i=>{let s=yh();s.position.set(0,0,-3),s.scale.setScalar(1.1),i.add(s);let r=Eh(7);r.position.set(-3,0,-9),i.add(r);let o=Pe(i,e,[[["\u2708 EN TIERRA"],.2,"r"],[["LA GR\xDAA, EN EL AIRE"],"obras","w"]],[0,3.6,-2],2.2);return{update:(a,l,c)=>{r.userData.load.position.y=-2.6+Math.sin(a*1.5)*.05,o(a,c)}}},c:[[3.2,1.6,4.6],[0,1.8,-3],[1.5,2,5.4],[-.6,2.4,-4.5]],k:1,range:8,blur:4}});ie(20,(n,e)=>{let t=L(e,"parados");return{amb:"rua",ambo:{},fov:32,atores:[],extra:i=>{let s=ah();s.position.set(1.2,0,-6),s.rotation.y=.5,i.add(s);let r=ah();r.position.set(-2.6,0,-9),r.rotation.y=.3,i.add(r);let o=Pe(i,e,[[["COMIDA PARA EL S\xDAPER"],.2,"w"],[["PARADOS EN LA CARRETERA"],"parados","r"]],[0,4,-2.4],2.6);return{update:(a,l,c)=>o(a,c)}},c:[[3.6,1.8,5],[0,2,-3],[2.6,2,4.2],[0,2.2,-3]],k:1,range:8,blur:5}});ie(21,(n,e)=>{let t=L(e,"algo"),i=L(e,"luz");return{amb:"barrio",ambo:{dusk:!0},fov:32,atores:[Te({x:-.4,z:0,eyes:[[0,"look"],[t,"smug"]],pose:(s,r)=>r>t?s.pose({armL:[12,8],armR:[100,0],lean:-4}):s.pose()}),ze(2,{x:1.2,z:-.5,eyes:[[0,"look"],[i,"flat"]]}),ze(6,{x:2,z:-.9,eyes:[[0,"look"]]})],extra:s=>{let r=it(s,["\xA1YO ME ENCARGO!"],1.7,[-.4,2.35,0]),o=ut(s,["ARREGLAR LA LUZ DEL BARRIO"],2.4,[.4,2.9,-.4]);return{update:(a,l,c)=>{ye(r,a,t,i-.2,c),ye(o,a,i,99,c)}}},c:[[0,1.6,4.6],[.4,1.4,-.3],[-.3,1.6,4],[.3,1.4,-.3]],range:3.5,look:{exposure:.98}}});ie(22,(n,e)=>{let t=L(e,"miras"),i=L(e,"cierras");return{amb:"barrio",ambo:{dusk:!0},fov:28,atores:[Te({x:-.5,z:-.2,eyes:[[0,"look"],[t,"wide"],[i,"flat"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r<i+.5?85:12,20]})})],extra:s=>{s.add(x(3,3,.3,T("#C8B8A0"),.4,1.5,-1));let r=Ju();r.position.set(.4,1.5,-.8),s.add(r);let o=Jg(s,["\xBF\u2026?"],.8,[0,0,0]);return o.position.set(-1.2,2,-.2),{update:(a,l,c)=>{r.userData.door.rotation.y=-1.9*yt(0,.6,a)*(1-yt(i,i+.5,a)),ye(o,a,t,99,c)}}},c:[[-1.6,1.7,3.2],[-.1,1.5,-.6],[-1.3,1.6,2.8],[-.1,1.5,-.6]],range:2}});ie(23,(n,e)=>{let t=L(e,"ingenieria"),i=L(e,"aparta"),s=L(e,"arregla");return{amb:"barrio",ambo:{dusk:!0},fov:30,atores:[Te({x:-.5,z:-.2,eyes:[[0,"flat"],[i,"wide"],[s+1,"sad"]],move:r=>[Nt(-.5,-1.5,yt(i,i+.8,r)),0,-.2]}),ze(7,{x:.9,z:-.2,glasses:!0,eyes:[[0,"look"],[s+1.5,"happy"]],move:r=>[Nt(1.6,.9,yt(0,i+.5,r)),0,-.2],pose:(r,o)=>o<i+.5?r.walk(o):r.pose({armL:[12,8],armR:[90+Math.sin(o*12)*8,20]})})],extra:r=>{r.add(x(3,3,.3,T("#C8B8A0"),.4,1.5,-1));let o=Ju();o.position.set(.4,1.5,-.8),r.add(o);let a=Pe(r,e,[[["INGENIERA"],"ingenieria","b",[1,2.4,-.2],1.1],[["\u23F1 10 MINUTOS \xB7 ARREGLADO"],"arregla","w",[.2,2.5,-.4],2.4]]),l=Ze("#FFE7A0",1.6,0);return l.position.set(2.6,3.2,-1.2),r.add(l),{update:(c,h,d)=>{o.userData.door.rotation.y=-1.9*yt(i,i+.6,c),a(c,d),l.material.opacity=yt(s+1.2,s+1.6,c)}}},c:[[0,1.7,4],[0,1.4,-.6],[-.2,1.6,3.4],[0,1.4,-.6]],range:3}});ie(24,(n,e)=>{let t=L(e,"ocurrido");return{amb:"plaza",ambo:{seed:7},fov:34,atores:[ze(0,{x:-2,z:-1,pose:(i,s)=>i.pose({armL:[12,8],armR:[90+Math.sin(s*9)*10,20]})}),ze(3,{x:0,z:-1.6,outfit:"laranja",pose:(i,s)=>i.pose({armL:[100,30],armR:[12,8]})}),ze(5,{x:2,z:-1.1,pose:hs})],extra:i=>{let s=Pe(i,e,[[["EN TODAS PARTES"],.1,"w"],[["YA HAB\xCDA OCURRIDO ANTES\u2026"],"ocurrido","y"]],[0,2.8,-1.2],2.6);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.8,5],[0,1.4,-1.2],[0,1.9,4.2],[0,1.4,-1.2]],range:4,lookFn:i=>i>L(e,"ocurrido")?{exposure:.95,vig:.7}:{}}});ie(25,(n,e)=>{let t=L(e,"frente"),i=L(e,"mujeres");return{amb:"rua",ambo:{dusk:!0},fov:34,atores:[...[0,1,2,3].map(s=>mh({outfit:"terno2",glasses:!1,x:-1.5+s*.5,z:-1-s*.3,eyes:[[0,"flat"]],move:r=>[-1.5+s*.5+(r>t-1,0),0,Nt(-1-s*.3,-9-s*.3,yt(0,t+1,r))],pose:(r,o)=>r.walk(o+s)})),...[0,1,2].map(s=>ze(s+3,{outfit:"laranja",x:-.6+s*1,z:.4,eyes:[[0,"smug"]],move:r=>[-.6+s*1,0,Nt(3,.4,yt(i-1,i+.8,r))],pose:(r,o)=>o>i-1&&o<i+.8?r.walk(o):r.pose({armL:[150,20],armR:[12,8]})}))],extra:s=>{let r=Pe(s,e,[[["1939\u20131945"],.1,"y"],[["ELLOS: AL FRENTE"],"frente","w"],[["ELLAS: A OCUPAR SU LUGAR"],"mujeres","r"]],[0,2.9,-.5],2.4);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.7,5.2],[0,1.4,-2],[0,1.8,4.6],[0,1.4,-1]],range:5,look:Gi}});ie(26,(n,e)=>{let t=L(e,"barcos"),i=L(e,"tanques");return{amb:"hall",fov:34,atores:[ze(1,{outfit:"laranja",x:-1.8,z:-.4,pose:(s,r)=>s.pose({armL:[12,8],armR:[80+Math.abs(Math.sin(r*8))*40,10]})}),ze(3,{outfit:"laranja",x:2.1,z:-.6,pose:(s,r)=>s.pose({armL:[100,40],armR:[100+Math.sin(r*6)*10,40]})})],extra:s=>{let r=yh("#8A9298","#4A5A3A");r.position.set(0,0,-2.6),r.scale.setScalar(.8),s.add(r);let o=Pe(s,e,[[["\u2708 AVIONES"],.1,"w"],[["\u{1F6A2} BARCOS"],"barcos","w"],[["TANQUES"],"tanques","w"]],[0,2.8,-1.4],1.6),a=Ma(s,10,"#FFC870");return{update:(l,c,h)=>{o(l,h),a(l,[-1.3,1.3,-.8,.3])}}},c:[[0,1.9,5],[0,1.4,-1.6],[0,1.9,4.4],[0,1.4,-1.6]],range:5,look:Gi}});ie(27,(n,e)=>{let t=L(e,"wasp");return{amb:"plaza",ambo:{seed:9},fov:34,atores:[ze(0,{x:2.4,z:.2,outfit:"terno2",eyes:[[0,"smug"]],pose:i=>i.pose({armL:[12,8],armR:[150,40]})})],extra:i=>{let s=yh("#8A9A7A","#F2C14E");return i.add(s),{update:r=>{let o=yt(0,n,r);s.position.set(Nt(-6,6,o),Nt(0,2.5,yt(.4,.9,o)),-4),s.rotation.z=yt(.35,.6,o)*.2}}},c:[[0,1.4,5.4],[0,1.6,-3],[0,1.5,5],[.4,2.2,-3]],k:1,range:6,look:Gi}});ie(28,(n,e)=>{let t=L(e,"hicieron");return{amb:"plaza",ambo:{seed:9},fov:32,atores:[ze(0,{x:-.8,z:-.2,outfit:"terno2",eyes:[[0,"flat"],[t,"smug"]],pose:(i,s)=>s>t?i.pose({armL:[150,30],armR:[150,30]}):i.pose()}),ze(4,{x:.8,z:-.4,outfit:"terno2",eyes:[[0,"flat"],[t,"happy"]],pose:(i,s)=>s>t?ph(i,s):i.pose()})],extra:i=>{let s=Pe(i,e,[[["\u201CNO PODR\xC1N\u201D"],.1,"w"],[["LO HICIERON"],"hicieron","r"]],[0,2.5,-.3],1.8);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.8],[0,1.4,-.3],[0,1.6,3.2],[0,1.4,-.3]],range:2.5,look:Gi}});ie(29,(n,e)=>{let t=L(e,"pilotos"),i=L(e,"electricistas"),s=L(e,"camioneras");return{amb:"aula",fov:34,atores:[...[0,1,2,3,4,5,6].map(r=>ze(r,{x:-2.4+r*.8,z:-1.2+r%2*.3,eyes:[[0,r%3?"happy":"look"]],pose:(o,a)=>o.pose({armL:[12,8],armR:[a>.5+r*.3?150:12,20]})}))],extra:r=>{let o=Pe(r,e,[[["UNA SEMANA DESPU\xC9S"],.1,"y"],[["\u2708 ESCUELA DE PILOTOS"],"pilotos","w"],[["\u26A1 ELECTRICISTAS"],"electricistas","w"],[["\u{1F69A} CAMIONERAS"],"camioneras","w"]],[0,2.85,-1],2.4);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.8,4.8],[0,1.4,-1.2],[0,1.8,4.2],[0,1.4,-1.2]],range:4}});ie(30,(n,e)=>({amb:"panaderia",fov:32,atores:[ze(6,{x:.8,z:-1,eyes:[[0,"happy"]],pose:hs})],extra:t=>{for(let s=0;s<10;s++){let r=new H(new Js(.09,.32,4,10),T("#D8A060",{roughness:.8}));r.rotation.z=Math.PI/2,r.position.set(-1.6+s%5*.4,1+Math.floor(s/5)*.25,-1.2),t.add(r)}Wn(t,-.8,-1.2,.85,2.4,.7,"#8E6242");let i=it(t,["UN MES: VUELVE EL PAN \u{1F956}"],2.4,[0,2.6,-1]);return{update:(s,r,o)=>ye(i,s,.1,99,o)}},c:[[0,1.7,3.8],[-.2,1.3,-1.1],[0,1.6,3.2],[-.2,1.3,-1.1]],range:3}));ie(31,(n,e)=>({amb:"plaza",ambo:{seed:3},fov:34,atores:[],extra:t=>{let i=Eh(7);i.position.set(-2,0,-6),t.add(i);let s=it(t,["UN A\xD1O: LA GR\xDAA SE MUEVE"],2.6,[0,2.6,-1]);return{update:(r,o,a)=>{i.userData.arm.rotation.y=-.4+yt(.3,n,r)*1,ye(s,r,.1,99,a)}}},c:[[0,1.6,5],[0,3,-5],[.6,1.8,4.4],[0,3.4,-5]],k:1,range:8,blur:4}));ie(32,(n,e)=>{let t=L(e,"apagones"),i=L(e,"retrasos"),s=L(e,"colas");return{amb:"apagon",fov:34,atores:[...[0,1,2,3,4].map(r=>ze(r,{x:-1.6+r*.8,z:-.4-r*.5,eyes:[[0,"flat"]],pose:o=>o.pose({armL:[20,-60],armR:[20,-60]})}))],extra:r=>{let o=Pe(r,e,[[["NO ES F\xC1CIL"],.1,"y"],[["APAGONES"],"apagones","r"],[["RETRASOS"],"retrasos","r"],[["COLAS LARGU\xCDSIMAS"],"colas","r"]],[0,2.7,-.8],2),a=Uu();a.position.set(-1.6,1.25,-.2),r.add(a);let l=Ze("#FFF2C0",1.2,.6);return r.add(l),{update:(c,h,d)=>{o(c,d),l.position.set(-1.2,1.25,.2)}}},c:[[0,1.8,5],[0,1.4,-1],[0,1.8,4.4],[0,1.4,-1]],range:4,look:Vn}});ie(33,(n,e)=>{let t=L(e,"funcionar"),i=L(e,"nuevo");return{amb:"barrio",ambo:{night:!0},fov:34,atores:[ze(7,{x:0,z:0,eyes:[[0,"look"],[i,"smug"]],move:s=>[Nt(2.5,0,yt(i-1,i+.5,s)),0,0],pose:(s,r)=>r<i+.5?s.walk(r):s.pose({armL:[12,8],armR:[150,30]})})],extra:s=>{let r=[];for(let a=0;a<6;a++){let l=Ze("#FFE7A0",1.4,0);l.position.set(-4+a*1.6,3.2+a%2*.5,-3-a%3),s.add(l),r.push(l)}let o=Pe(s,e,[[["CADA D\xCDA, ALGO VUELVE A FUNCIONAR"],"funcionar","y"],[["ALGUIEN NUEVO QUE SABE HACERLO"],"nuevo","w"]],[0,2.6,-.3],2.8);return{update:(a,l,c)=>{r.forEach((h,d)=>h.material.opacity=yt(.4+d*.5,.7+d*.5,a)),o(a,c)}}},c:[[0,1.7,5],[0,1.6,-1],[0,1.7,4.4],[0,1.6,-1]],range:4,look:Vn}});ie(34,(n,e)=>{let t=L(e,"aprender");return{amb:"espacio",fov:34,k:1,atores:[],extra:i=>{let s=new H(new nt(2.2,48,32),new Le({map:ve(512,256,o=>{o.fillStyle="#2C6FB8",o.fillRect(0,0,512,256),o.fillStyle="#4FA35A";let a=Ue(4);for(let l=0;l<9;l++)o.beginPath(),o.ellipse(a()*512,50+a()*156,14+a()*30,10+a()*22,a()*3,0,7),o.fill()}),roughness:.8}));i.add(s);let r=Pe(i,e,[[["EL MUNDO NO SE ROMPI\xD3"],.1,"w"],[["SOLO TUVO QUE APRENDER R\xC1PIDO"],"aprender","y"]],[0,1.2,3.2],2.6);return{update:(o,a,l)=>{s.rotation.y=o*.25,r(o,l)}}},c:[[0,.6,9],[0,.6,0],[0,.9,7.4],[0,.7,0]],range:6,blur:2,look:{bloom:.6}}});ie(35,(n,e)=>({amb:"parque",fov:32,atores:[ze(2,{x:-.6,z:0,eyes:[[0,"happy"]],pose:qr}),ze(5,{x:.7,z:-.3,eyes:[[0,"happy"]],pose:Zu})],extra:t=>{let i=it(t,["ALGUNAS COSAS\u2026 MEJORAN \u2197"],2.6,[0,2.55,-.2],{bg:"#3AA860",fg:"#fff"});return{update:(s,r,o)=>ye(i,s,.2,99,o)}},c:[[0,1.6,4],[0,1.4,0],[0,1.6,3.4],[0,1.4,0]],range:3}));ie(36,(n,e)=>{let t=L(e,"3"),i=L(e,"hombres");return{amb:"rua",ambo:{},fov:32,atores:[],extra:s=>{let r=Yr(s,3.6,2.4,[0,1.75,-1.62]),o=ur(s,3,4,4,2.6,[0,1.45,-1.5],"#4A86C7","#E8667F"),a=Pe(s,e,[[["OMS \xB7 ACCIDENTES DE TR\xC1FICO"],.2,"w",[0,2.6,-1.4],2.6,1],[["3 DE CADA 4: HOMBRES"],i,"r",[0,.7,-1.4],2.4,1]]);return{update:(l,c,h)=>{ye(r,l,0,99),ye(o,l,t-.2,99),a(l,h)}}},c:[[0,1.7,3.6],[0,1.6,-1.5],[0,1.7,3.2],[0,1.6,-1.5]],range:4,blur:6}});ie(37,(n,e)=>({amb:"rua",ambo:{dusk:!0},fov:34,atores:[],extra:t=>{let i=fh("#E8667F"),s=fh("#F2C14E");t.add(i),t.add(s);let r=ut(t,["CARRETERAS M\xC1S TRANQUILAS"],2.6,[0,2.6,-2]);return{update:(o,a,l)=>{i.position.set(Nt(-6,6,o/n),0,-1.4),s.position.set(Nt(7,-5,o/n),0,-3.2),s.rotation.y=Math.PI,ye(r,o,.2,99,l)}}},c:[[0,2.2,6],[0,1,-2],[0,2.2,5.4],[0,1,-2]],k:1,range:6}));ie(38,(n,e)=>{let t=L(e,"93");return{amb:"hall",fov:30,atores:[],extra:i=>{let s=Yr(i,4,2.9,[0,1.75,-1.62]),r=ur(i,93,100,20,3.2,[0,1.3,-1.5],"#4A86C7","#E8667F"),o=it(i,["C\xC1RCELES FEDERALES (EE. UU.) \xB7 93 DE CADA 100: HOMBRES"],3.4,[0,2.75,-1.4],{size:60});return{update:(a,l,c)=>{ye(s,a,0,99),ye(r,a,t-.3,99),ye(o,a,.2,99,c)}}},c:[[0,1.9,3.6],[0,1.8,-1.5],[0,1.9,3.2],[0,1.8,-1.5]],range:4,blur:4}});ie(39,(n,e)=>{let t=L(e,"vacias");return{amb:"gris",fov:32,atores:[],extra:i=>{for(let r=0;r<3;r++){let o=-3+r*3;i.add(x(2.6,3,.1,T("#7A7E86"),o,1.5,-2.6));for(let a=0;a<9;a++)i.add(x(.05,2.6,.05,T("#3A3E46",{metalness:.7}),o-1.2+a*.3,1.3,-1.2));i.add(x(2.6,.08,.08,T("#3A3E46",{metalness:.7}),o,2.6,-1.2)),i.add(x(1.4,.3,.7,T("#8A6A4A"),o-.4,.3,-2.1))}let s=it(i,["CASI VAC\xCDAS"],1.6,[0,2.95,-1.1],ps);return{update:(r,o,a)=>ye(s,r,t-.3,99,a)}},c:[[0,1.7,4.6],[0,1.4,-1.4],[-.6,1.7,4],[0,1.4,-1.4]],range:4,look:{exposure:.95}}});ie(40,(n,e)=>{let t=L(e,"una"),i=L(e,"acaso");return{amb:"gris",fov:30,atores:[Gu(0,{x:-1.4,z:-.3,eyes:[[0,"flat"]],pose:(s,r)=>s.pose({head:Math.sin(r*2)*8})}),Gu(3,{x:-.3,z:-.6,eyes:[[0,"flat"],[t,"angry"]]}),Te({x:1.4,z:-.2,eyes:[[0,"look"],[t+.5,"wide"]],pose:s=>s.pose({armL:[150,10],armR:[150,10]})})],extra:s=>{let r=Pe(s,e,[[["\xBFY AHORA QU\xC9 HACEMOS?"],.1,"w",[-1,2.4,-.4],2],[["POR SI ACASO\u2026"],"acaso","y",[-.3,2.4,-.6],1.6]]),o=it(s,["\u{1F928}"],.6,[-.3,2.95,-.6],{size:90,w:300});return{update:(a,l,c)=>{r(a,c),ye(o,a,t,i-.2,c)}}},c:[[0,1.6,3.8],[0,1.4,-.4],[.3,1.6,3.2],[0,1.4,-.4]],range:3}});ie(41,(n,e)=>{let t=L(e,"famoso"),i=L(e,"planeta");return{amb:"concierto",fov:32,atores:[Te({x:0,z:0,eyes:[[0,"wide"],[t+.4,"smug"]],pose:(s,r)=>r>i?qr(s,r):s.pose()}),...[0,1,2,3].map(s=>ze(s,{x:-2.4+s*1.6+(s>1?.8:0),z:1.4,eyes:[[0,"wide"]],pose:r=>r.pose({armL:[12,8],armR:[100,40]})}))],extra:s=>{let r=_h(s,10),o=Pe(s,e,[[["FAMOSO"],"famoso","r"],[["EL M\xC1S FAMOSO DEL PLANETA"],"planeta","y"]],[0,2.45,0],2.4);return{update:(a,l,c)=>{r(a,yt(t-.5,t,a)),o(a,c)}}},c:[[0,1.6,5.2],[0,1.4,0],[0,1.6,4.4],[0,1.4,0]],range:3}});ie(42,(n,e)=>{let t=L(e,"telediarios"),i=L(e,"revistas"),s=L(e,"cereales");return{amb:"super",fov:34,atores:[ze(4,{x:1.4,z:-.4,eyes:[[0,"wide"]],pose:hs})],extra:r=>{let o=ba(r,[-1.6,1.9,-1.4],1.2,["EL \xDALTIMO HOMBRE","EN DIRECTO DESDE SU CASA"],{size:30,anchor:!1,tag:"EN DIRECTO"}),a=vh("\xA1\xC9L!","#C9361F",.55,"REVISTA");a.position.set(-.1,1.5,-1),r.add(a);let l=rE("CEREALES","#F2B83A",.6,"\xA1EL \xDALTIMO!");l.position.set(1,.95,-1.1),r.add(l),Wn(r,.8,-1.1,.9,1,.6,"#8E6242");let c=Pe(r,e,[[["TELEDIARIOS"],"telediarios","w",[-1.6,2.75,-1.4],1.4,1],[["REVISTAS"],"revistas","w",[-.1,2.3,-1],1.1,1],[["CEREALES"],"cereales","w",[1,2.3,-1.1],1.1,1]]);return{update:(h,d,u)=>{c(h,u),a.visible=h>i-.2,l.visible=h>s-.2}}},c:[[0,1.7,4.2],[-.2,1.6,-1.2],[0,1.7,3.6],[-.2,1.6,-1.2]],range:3.5}});ie(43,(n,e)=>{let t=L(e,"preguntaron");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:30,atores:[Te({x:1.4,z:0,eyes:[[0,"look"],[t,"flat"]]})],extra:i=>{let s=vh("EL \xDALTIMO","#1E2A55",1.2,"DOCUMENTAL \xB7 ESTRENO");s.position.set(-.6,1.6,-.6),i.add(s);let r=ut(i,["NI SIQUIERA TE PREGUNTARON"],2.2,[.6,2.6,0]);return{update:(o,a,l)=>ye(r,o,t-.4,99,l)}},c:[[0,1.6,4.2],[.2,1.5,-.3],[0,1.6,3.6],[.2,1.5,-.3]],range:3}});ie(44,(n,e)=>{let t=L(e,"cientificas"),i=L(e,"abuelas"),s=L(e,"nietas");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:32,atores:[Te({x:0,z:.2,eyes:[[0,"wide"],[s,"smug"]],pose:hs})],extra:r=>{let o=iE(r,40,[-3,3,-2,1]),a=Pe(r,e,[[["1.000.000 DE CARTAS AL D\xCDA \u2709"],.1,"y",[0,2.6,.2],2.6],[["\xBD CIENT\xCDFICAS: \u201CQUEREMOS ESTUDIARTE\u201D"],"cientificas","w",[0,2.6,.2],2.8],[["\xBD ABUELAS: \u201CCONOCE A MI NIETA\u201D"],"abuelas","p",[0,2.6,.2],2.8]]);return{update:(l,c,h)=>{o(l),a(l,h)}}},c:[[0,1.7,4.2],[0,1.4,0],[0,1.7,3.6],[0,1.4,0]],range:3}});ie(45,(n,e)=>{let t=L(e,"misma");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:30,atores:[dr({x:-.3,z:-.6,eyes:[[0,"flat"]],pose:(i,s)=>i.pose({armL:[60,70],armR:[60+Math.abs(Math.sin(s*10))*30,70]})})],extra:i=>{Wn(i,-.3,-.9,.85,2,.9);let s=[];for(let a=0;a<14;a++){let l=x(.3,.02,.22,T("#FBF7EC"),.5+a%2*.05,.9+a*.02,-.9);i.add(l),s.push(l)}let r=ut(i,["\u201CGRACIAS. NO.\u201D"],1.4,[-.3,2.3,-.6],{size:80}),o=it(i,["LA MISMA CARTA"],1.5,[-.3,2.75,-.6]);return{update:(a,l,c)=>{s.forEach((h,d)=>h.visible=d<2+a*3),ye(r,a,.2,99,c),ye(o,a,t,99,c)}}},c:[[0,1.8,3.2],[-.3,1.3,-.8],[0,1.7,2.7],[-.3,1.3,-.8]],range:2}});ie(46,(n,e)=>{let t=L(e,"blindado");return{amb:"rua",ambo:{},fov:32,atores:[Te({x:0,z:0,eyes:[[0,"flat"]]}),dh(0,{x:-.9,z:.2,eyes:[[0,"flat"]]}),dh(3,{x:.9,z:.1,eyes:[[0,"flat"]]})],extra:i=>{let s=fh("#15161C");s.scale.setScalar(1.3),s.position.set(0,0,-2.2),i.add(s);let r=Pe(i,e,[[["GUARDAESPALDAS"],.1,"w"],[["COCHE BLINDADO"],"blindado","y"]],[0,2.5,.1],1.8);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,4.4],[0,1.3,-.4],[0,1.6,3.8],[0,1.3,-.4]],range:3}});ie(47,(n,e)=>{let t=L(e,"4");return{amb:"panaderia",fov:32,atores:[Te({x:0,z:-.2,eyes:[[0,"flat"]],pose:i=>i.pose({armL:[12,8],armR:[70,40]})}),...[0,1,2,3].map(i=>dh(i+1,{x:[-1.8,-1,1,1.8][i],z:[.3,-.5,-.5,.3][i],eyes:[[0,"flat"]],pose:s=>s.pose({armL:[40,-50],armR:[40,-50]})}))],extra:i=>{let s=new H(new Js(.07,.3,4,10),T("#D8A060"));i.add(s);let r=it(i,["4 AGENTES \xB7 PARA UNA BARRA DE PAN"],2.8,[0,2.6,-.2]);return{update:(o,a,l)=>{s.visible=!1,ye(r,o,t-.2,99,l)}}},c:[[0,1.7,4.6],[0,1.4,-.2],[0,1.7,4],[0,1.4,-.2]],range:3}});ie(48,(n,e)=>{let t=L(e,"importante");return{amb:"lab",fov:32,atores:[ds(1,{x:-.9,z:-.4,talk:[[0,n]]}),Te({x:.9,z:-.2,eyes:[[0,"look"],[t,"smug"]]})],extra:i=>{let s=it(i,["\xBFPOR QU\xC9 ERES TAN IMPORTANTE?"],2.6,[0,2.5,-.3]);return{update:(r,o,a)=>ye(s,r,.2,99,a)}},c:[[0,1.6,4],[0,1.4,-.3],[0,1.6,3.4],[0,1.4,-.3]],range:3}});ie(49,(n,e)=>{let t=L(e,"mujeres"),i=L(e,"hombres"),s=L(e,"y",L(e,"hombres")+.5);return{amb:"lab",fov:30,atores:[],extra:r=>{let o=Yr(r,4.2,2.6,[0,1.75,-1.62],"#14182A",.9),a=new H(new nt(.55,32,20),new tt({color:"#7FD0FF",transparent:!0,opacity:.25,depthWrite:!1}));a.position.set(0,1.6,-1.4),r.add(a);let l=Pe(r,e,[[["2 CROMOSOMAS SEXUALES EN CADA C\xC9LULA"],.2,"y",[0,2.75,-1.4],3.2,1]]),c=ar(r,"X","#E8667F"),h=ar(r,"X","#E8667F"),d=ar(r,"X","#E8667F"),u=ar(r,"Y","#4A86C7"),f=ut(r,["MUJERES"],1,[-1,.75,-1.4],{size:70}),g=ut(r,["HOMBRES"],1,[1,.75,-1.4],{size:70});return{update:(E,m,p)=>{l(E,p);let v=yt(t-.5,t,E);a.visible=E<t-.5,c.position.set(-1.25,1.55,-1.4),h.position.set(-.75,1.55,-1.4),d.position.set(.75,1.55,-1.4),u.position.set(1.25,1.55,-1.4),c.visible=h.visible=E>t,d.visible=E>i,u.visible=E>s-.2,ye(f,E,t,99,p),ye(g,E,i,99,p),u.scale.setScalar(1+(E>s?Math.abs(Math.sin(E*4))*.15:0))}}},c:[[0,1.75,3.6],[0,1.7,-1.5],[0,1.75,3.2],[0,1.7,-1.5]],range:4,blur:4}});ie(50,(n,e)=>{let t=L(e,"generaciones"),i=L(e,"dentro");return{amb:"espacio",fov:32,k:1,atores:[Te({x:0,z:0,eyes:[[0,"look"],[i,"wide"]]})],extra:s=>{let r=ar(s,"Y","#7FC8FF",.5),o=Ze("#7FC8FF",1.1,.3);s.add(o);let a=[];for(let c=0;c<6;c++){let h=ar(s,"Y","#4A6A9A",.32);a.push(h)}let l=Pe(s,e,[[["DE PADRES A HIJOS \xB7 MILES DE GENERACIONES"],.3,"w",[0,2.3,0],3.2],[["AHORA SOLO DENTRO DE TI"],"dentro","y",[0,2.3,0],2.6]]);return{update:(c,h,d)=>{r.position.set(0,1.25,.35),o.position.set(0,1.25,.2),o.material.opacity=.2+.15*Math.abs(Math.sin(c*3)),a.forEach((u,f)=>{let g=yt(.3+f*.5,t+1+f*.3,c);u.position.set(Nt(-3.6+f*.4,0,g),Nt(2-f*.2,1.25,g),Nt(-2,.3,g)),u.visible=g<.98,yi(u,d)}),yi(r,d),l(c,d)}}},c:[[0,1.5,4.8],[0,1.4,0],[0,1.5,4],[0,1.4,0]],range:3,look:{bloom:.55}}});ie(51,(n,e)=>{let t=L(e,"sangre"),i=L(e,"preguntas"),s=L(e,"cabeza"),r=L(e,"mismo");return{amb:"lab",fov:30,atores:[Te({x:0,z:-.2,eyes:[[0,"look"],[t,"wide"],[i,"flat"],[s,"small"]],pose:(o,a)=>o.pose({armL:[a>t&&a<i?70:12,8],armR:[12,8]})}),ds(0,{x:-1.2,z:-.3,pose:o=>o.pose({armL:[12,8],armR:[85,20]})}),ds(3,{x:1.2,z:-.4,talk:[[i,s]],pose:(o,a)=>a>s?o.pose({armL:[12,8],armR:[130,60]}):o.pose({armL:[60,70],armR:[12,8]})})],extra:o=>{let a=Pe(o,e,[[["\u{1F489} SANGRE"],"sangre","w"],[["\u2753 PREGUNTAS"],"preguntas","w"],[["\u{1F4CF} TE MIDEN LA CABEZA"],"cabeza","w"]],[0,2.55,-.2],2),l=x(.03,.6,.01,T("#F2C14E"),0,0,0);return o.add(l),{update:(c,h,d)=>{a(c,d),l.visible=c>s,l.position.set(.35,1.62,.05)}}},c:[[0,1.6,4],[0,1.4,-.3],[0,1.6,3.4],[0,1.4,-.3]],range:3}});ie(52,(n,e)=>({amb:"concierto",fov:30,atores:[Te({x:0,z:0,eyes:[[0,"heart"]],pose:t=>t.pose({armL:[150,30],armR:[150,30]})})],extra:t=>{let i=it(t,["EL FUTURO DE LA HUMANIDAD"],2.6,[0,2.55,0]),s=Ma(t,14,"#FFE27A");return{update:(r,o,a)=>{ye(i,r,.1,99,a),s(r,[0,1.6,.2,1.3])}}},c:[[0,1.4,3.6],[0,1.5,0],[0,1.4,3.2],[0,1.5,0]],range:3,look:{bloom:.55}}));ie(53,(n,e)=>{let t=L(e,"traje"),i=L(e,"heroe");return{amb:"cuartoYo",ambo:{},fov:30,atores:[lr({x:-.5,z:-.2,eyes:[[0,"smug"]],pose:(s,r)=>r>i?s.pose({armL:[40,-60],armR:[40,-60],lean:-4}):s.pose()}),lr({x:.9,z:-1.4,eyes:[[0,"smug"]],glow:0,pose:(s,r)=>r>i?s.pose({armL:[40,-60],armR:[40,-60],lean:4}):s.pose()})],extra:s=>{for(let[a,l,c,h]of[[1.3,.1,.9,2.35],[1.3,.1,.9,.05],[.1,2.4,.3,1.2],[.1,2.4,1.5,1.2]])s.add(x(a,l,.08,T("#8E6242"),c,h,-1));let r=new H(new xe(1.1,2.2),new tt({color:"#BFD8EE",transparent:!0,opacity:.18,depthWrite:!1}));r.position.set(.9,1.2,-.96),r.renderOrder=5,s.add(r);let o=Pe(s,e,[[["TE COMPRAS UN TRAJE"],"traje","w"],[["CARA DE H\xC9ROE \u{1F60E}"],"heroe","y"]],[.2,2.35,-.4],2);return{update:(a,l,c)=>o(a,c)}},c:[[-.8,1.7,3.4],[.2,1.4,-.6],[-.5,1.7,2.9],[.2,1.4,-.6]],range:3}});ie(54,(n,e)=>{let t=L(e,"paciencia");return{amb:"lab",fov:30,atores:[lr({x:.8,z:-.2,eyes:[[0,"smug"],[t,"look"]]}),ds(2,{x:-.8,z:-.3,eyes:[[0,"flat"]],talk:[[0,n]]})],extra:i=>{let s=ut(i,["CON MUCHA PACIENCIA\u2026"],1.9,[-.4,2.45,-.3]);return{update:(r,o,a)=>ye(s,r,t-.4,99,a)}},c:[[0,1.6,3.8],[0,1.4,-.3],[0,1.6,3.2],[0,1.4,-.3]],range:3}});ie(55,(n,e)=>{let t=L(e,"100"),i=L(e,"miles");return{amb:"lab",fov:32,atores:[ds(2,{x:-1.8,z:-.2,eyes:[[0,"flat"]],pose:s=>s.pose({armL:[12,8],armR:[95,0]})})],extra:s=>{for(let o=0;o<4;o++){s.add(x(.9,1.9,.8,T("#D8DEE6",{metalness:.4,roughness:.3}),-.3+o*1,.95,-2.2)),s.add(x(.8,.05,.02,T("#7FC8FF"),-.3+o*1,1.6,-1.79));let a=Ze("#BFE6FF",.9,.35);a.position.set(-.3+o*1,1.95,-1.8),s.add(a)}let r=Pe(s,e,[[["BANCOS DE DONANTES \u2744"],.2,"w"],[["A M\xC1S DE 100 PA\xCDSES"],"100","y"],[["MILES DE MUESTRAS"],"miles","b"]],[.6,2.75,-1.2],2.2);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.8,4.2],[.3,1.4,-1.4],[0,1.8,3.6],[.3,1.4,-1.4]],range:3.5}});ie(56,(n,e)=>{let t=L(e,"permiso");return{amb:"parque",fov:32,atores:[ze(0,{x:-1,z:-.3,eyes:[[0,"happy"]],pose:hs}),ze(3,{x:1,z:-.5,eyes:[[0,"happy"]],pose:hs}),lr({x:2.4,z:.2,eyes:[[0,"smug"],[t,"sad"]]})],extra:(i,s,r)=>{let o=us(),a=us();i.add(o),i.add(a);let l=it(i,["SIN PEDIRTE PERMISO"],2,[0,2.5,-.3],ps);return{update:(c,h,d)=>{let u=qt(r[0]),f=qt(r[1]);o.position.set(u.x,u.y+.05,u.z+.15),a.position.set(f.x,f.y+.05,f.z+.15),ye(l,c,t-.3,99,d)}}},c:[[0,1.6,4.4],[.4,1.3,-.3],[0,1.6,3.8],[.4,1.3,-.3]],range:3}});ie(57,(n,e)=>{let t=L(e,"raton");return{amb:"lab",fov:30,atores:[],extra:i=>{Wn(i,0,-1,.85,2.6,1,"#E8ECF0");let s=Aa(i,.55),r=Aa(i,.65),o=Aa(i,.65);return{update:(a,l,c)=>{s.position.set(0,1.08,-.8),s.visible=a>t-.3,r.position.set(-.8,1.12,-1.1),o.position.set(.8,1.12,-1.1),o.scale.x=-1,s.position.y=1.08+Math.abs(Math.sin(a*6))*.03}}},c:[[0,1.6,2.4],[0,1.4,-1],[0,1.6,2.1],[0,1.4,-1]],k:1,range:1.6}});ie(58,(n,e)=>{let t=L(e,"decenas");return{amb:"lab",fov:32,atores:[],extra:i=>{Wn(i,0,-1,.85,3,1.2,"#E8ECF0");let s=Ue(6),r=[];for(let a=0;a<24;a++){let l=Aa(i,.3);l.position.set(-1.3+a%8*.37,1,-.6-Math.floor(a/8)*.3),s()>.5&&(l.scale.x=-1),r.push(l)}let o=it(i,["2018 \xB7 CHINA \xB7 DECENAS DE RATONES SANOS"],3,[0,1.95,-1]);return{update:(a,l,c)=>{r.forEach((h,d)=>{h.visible=a>t-.3+d*.04,h.position.y=1+Math.abs(Math.sin(a*5+d))*.02}),ye(o,a,.1,99,c)}}},c:[[0,1.7,2.8],[0,1.15,-1],[0,1.65,2.4],[0,1.15,-1]],k:1,range:2}});ie(59,(n,e)=>{let t=L(e,"necesario");return{amb:"lab",fov:30,atores:[lr({x:0,z:-.2,eyes:[[0,"look"],[t,"sad"]],pose:(i,s)=>i.pose({head:s>t?10:0,bob:s>t?-.03:0})})],extra:i=>{let s=Pe(i,e,[[["EN HUMANOS: HOY NO SE PUEDE"],.1,"w"],[["YA NO ERES TAN NECESARIO"],"necesario","r"]],[0,2.25,-.2],2.4);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.6],[0,1.4,-.2],[0,1.8,3],[0,1.3,-.2]],range:3}});fs(60,["camiseta"],[(n,e)=>({amb:"cuartoYo",ambo:{},fov:30,atores:[lr({x:0,z:-.4,eyes:[[0,"sad"]]})],extra:t=>{let i=ut(t,["ADI\xD3S, TRAJE"],1.4,[0,2.4,-.4]);return{update:(s,r,o)=>ye(i,s,.1,99,o)}},c:[[0,1.6,3.4],[0,1.4,-.4],[0,1.6,3],[0,1.4,-.4]],range:3}),(n,e)=>{let t=L(e,"chiste");return{amb:"cuartoYo",ambo:{},fov:30,atores:[Te({x:0,z:-.4,eyes:[[0,"look"],[t,"flat"]]})],extra:i=>{let s=Pe(i,e,[[["LA CAMISETA DE SIEMPRE"],.1,"w"],[["EMPIEZA EL CHISTE\u2026"],"chiste","y"]],[0,2.4,-.4],2);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.4],[0,1.4,-.4],[0,1.6,3],[0,1.4,-.4]],range:3}}]);ie(61,(n,e)=>{let t=L(e,"abres");return{amb:"rua",ambo:{},fov:32,atores:[Te({x:1.2,z:0,eyes:[[0,"look"],[t,"wide"]]}),ze(1,{x:-.2,z:-.1,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[80,10]})}),ze(5,{x:-1.4,z:-.6,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[80,10]})})],extra:(i,s,r)=>{let o=cs(),a=cs();i.add(o),i.add(a);let l=$g(i,"\xBFME ABRES ESTE BOTE?",1.8,[-.5,2.35,-.1],60);return{update:(c,h,d)=>{let u=qt(r[1]),f=qt(r[2]);o.position.set(u.x,u.y-.08,u.z+.1),a.position.set(f.x,f.y-.08,f.z+.1),ye(l,c,t-.2,99,d)}}},c:[[0,1.6,4.2],[0,1.4,-.2],[0,1.6,3.6],[0,1.4,-.2]],range:3}});fs(62,["presidenta"],[(n,e)=>{let t=L(e,"panadera");return{amb:"panaderia",fov:32,atores:[ze(2,{x:-1,z:-.3,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[80,10]})}),ze(6,{x:.7,z:-.6,outfit:"jaleco",eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[80,10]})})],extra:(i,s,r)=>{let o=cs(),a=cs();i.add(o),i.add(a);let l=Pe(i,e,[[["LA VECINA"],.1,"w",[-1,2.35,-.3],1.2,1],[["LA PANADERA"],"panadera","w",[.7,2.35,-.6],1.3,1]]);return{update:(c,h,d)=>{let u=qt(r[0]),f=qt(r[1]);o.position.set(u.x,u.y-.08,u.z+.1),a.position.set(f.x,f.y-.08,f.z+.1),a.visible=c>t-.2,l(c,d)}}},c:[[0,1.6,4],[-.1,1.4,-.4],[0,1.6,3.5],[-.1,1.4,-.4]],range:3}},(n,e)=>({amb:"gris",fov:32,atores:[Sa({x:-.6,z:-.3,eyes:[[0,"happy"]],pose:t=>t.pose({armL:[12,8],armR:[80,10]})}),Te({x:.7,z:-.2,eyes:[[0,"wide"]]}),...[0,1].map(t=>ze(t+2,{x:t?2.4:-2.4,z:.4,eyes:[[0,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[100,40]})}))],extra:(t,i,s)=>{Wn(t,0,-1,.85,3.4,1,"#F4F0E4");let r=cs();t.add(r);let o=_h(t,8),a=it(t,["LA PRESIDENTA \xB7 CENA OFICIAL"],2.4,[0,2.55,-.3]);return{update:(l,c,h)=>{let d=qt(s[0]);r.position.set(d.x,d.y-.08,d.z+.1),o(l),ye(a,l,.1,99,h)}}},c:[[0,1.7,4.6],[0,1.4,-.4],[0,1.7,4],[0,1.4,-.4]],range:3.5})]);ie(63,(n,e)=>{let t=L(e,"esfuerzo"),i=L(e,"abre"),s=L(e,"no");return{amb:"rua",ambo:{},fov:26,atores:[Te({x:0,z:0,eyes:[[0,"look"],[t,"angry"],[i,"happy"],[s,"sad"]],pose:(r,o)=>r.pose({armL:[70,80],armR:[70,80],bob:o>t&&o<i?Math.sin(o*30)*.01:0})})],extra:(r,o,a)=>{let l=cs();r.add(l);let c=Pe(r,e,[[["\u{1F624} \xA1\xD1GGGH!"],"esfuerzo","w"],[["A VECES S\xCD \u2705"],"abre","w"],[["A VECES NO \u274C"],"no","r"]],[0,2.1,0],1.6);return{update:(h,d,u)=>{let f=qt(a[0]);l.position.set(f.x-.12,f.y-.05,f.z+.15),l.userData.lid.rotation.y=h>t&&h<s?h*4:0,l.userData.lid.position.y=h>i&&h<s?.3:.245,c(h,u)}}},c:[[0,1.6,2.8],[0,1.45,0],[0,1.6,2.4],[0,1.45,0]],range:2}});ie(64,(n,e)=>{let t=L(e,"quita"),i=L(e,"golpecito"),s=L(e,"abre",L(e,"cuchara")),r=L(e,"aplaude"),o=L(e,"ella");return{amb:"rua",ambo:{},fov:30,atores:[Te({x:-.8,z:0,eyes:[[0,"sad"],[r,"flat"]]}),ze(1,{x:.7,z:-.1,eyes:[[0,"look"],[s,"smug"]],pose:(a,l)=>a.pose({armL:[70,80],armR:[l>i&&l<s?90+Math.abs(Math.sin(l*14))*30:70,80]})}),...[0,1,2].map(a=>ze(a+3,{x:-2.2+a*2.2,z:-1.6,eyes:[[0,"happy"]],pose:(l,c)=>c>r?ph(l,c+a):l.pose()}))],extra:(a,l,c)=>{let h=cs(),d=Qu();a.add(h),a.add(d);let u=it(a,["\u{1F44F} A ELLA"],1.4,[.7,2.4,-.1],ps);return{update:(f,g,E)=>{let m=f<t?c[0]:c[1],p=qt(m);h.position.set(p.x-.1,p.y-.05,p.z+.15);let v=qt(c[1]);d.visible=f>i-.5,d.position.set(v.x+.05,v.y,v.z+.12),d.rotation.z=f>i&&f<s?Math.sin(f*28)*.4:0,h.userData.lid.position.y=f>s?.33:.245,h.userData.lid.rotation.z=f>s?.5:0,ye(u,f,o-.1,99,E)}}},c:[[0,1.6,4.2],[0,1.4,-.3],[0,1.6,3.6],[0,1.4,-.3]],range:3}});ie(65,(n,e)=>{let t=L(e,"libro"),i=L(e,"contrario");return{amb:"biblio",fov:30,atores:[Te({x:0,z:-.2,eyes:[[0,"look"],[t,"down"],[i,"wide"]],pose:s=>s.pose({armL:[60,70],armR:[60,70]})})],extra:(s,r,o)=>{let a=lh("#7A3A2A","HISTORIA");s.add(a);let l=Pe(s,e,[[["UN LIBRO DE HISTORIA"],"libro","w"],[["UN D\xCDA\u2026 JUSTO AL REV\xC9S"],"contrario","y"]],[0,2.4,-.2],2);return{update:(c,h,d)=>{let u=qt(o[0]);a.position.set(0,u.y+.1,u.z+.2),a.visible=c>t-.3,l(c,d)}}},c:[[0,1.6,3.6],[0,1.35,-.3],[0,1.6,3],[0,1.35,-.3]],range:3,look:{exposure:1.05}}});ie(66,(n,e)=>{let t=L(e,"nueve");return{amb:"plaza",ambo:{seed:11},fov:34,atores:[...[0,1,2,3,4,5,6].map(i=>ze(i,{x:-2.7+i*.9,z:-.2-i%2*.5,eyes:[[0,"smug"]],pose:s=>s.pose({armL:[12,8],armR:[150,20]})}))],extra:(i,s,r)=>{let o=r.map((l,c)=>{let h=Ru(c%2?["HOY","NO"]:["D\xCDA","LIBRE"],.55);return i.add(h),h}),a=ur(i,9,10,10,2.6,[0,.45,1],"#E8667F","#7A8A9A");return{update:(l,c,h)=>{r.forEach((d,u)=>{let f=qt(d);o[u].position.set(f.x,f.y+.35,f.z+.05)}),ye(a,l,t-.2,99)}}},c:[[0,1.4,5.6],[0,1.2,-.3],[0,1.4,5],[0,1.2,-.3]],range:4,look:Gi}});ie(67,(n,e)=>{let t=L(e,"oficina"),i=L(e,"cocinaron"),s=L(e,"ninos"),r=L(e,"paralizo"),o=L(e,"bancos");return{amb:"plaza",ambo:{seed:11},fov:32,atores:[],extra:a=>{let l=Pe(a,e,[[["\u274C OFICINA"],"oficina","w",[-1.6,2.4,-.5],1.3,1],[["\u274C COCINA"],"cocinaron","w",[0,2.4,-.5],1.3,1],[["\u274C NI\xD1OS"],"ninos","w",[1.6,2.4,-.5],1.3,1],[["EL PA\xCDS SE PARALIZA"],"paralizo","r",[0,1.7,-.5],2.4,1],[["BANCOS Y F\xC1BRICAS: CERRADOS"],"bancos","y",[0,1,-.5],2.6,1]]);return{update:(c,h,d)=>l(c,d)}},c:[[0,1.7,4.2],[0,1.7,-.5],[0,1.7,3.8],[0,1.7,-.5]],range:4,look:Gi}});ie(68,(n,e)=>{let t=L(e,"salchichas");return{amb:"hall",fov:32,atores:[mh({x:-1,z:-.3,glasses:!1,outfit:"terno2",eyes:[[0,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[60,40]})}),ze(0,{s:.55,x:-.5,z:.1,eyes:[[0,"happy"]],pose:Zu}),$u({s:.55,x:-1.6,z:.2,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[150,20],armR:[150,20],bob:Math.abs(Math.sin(s*8))*.05})})],extra:i=>{Wn(i,-1,-1.2,.8,1.6,.8,"#8E6242");let s=new te;s.position.set(1.6,0,-.6),i.add(s),s.add(x(1.4,1.6,.5,T("#E8E2D2"),0,.8,0));for(let a=0;a<3;a++)s.add(x(1.3,.04,.45,T("#B8B0A0"),0,.45+a*.45,0));let r=dE();r.position.set(0,.92,0),s.add(r);let o=Pe(i,e,[[["PAP\xC1S CON NI\xD1OS EN LA OFICINA"],.1,"w",[-.6,2.4,-.3],2.6],[["\u{1F32D} SALCHICHAS: AGOTADAS"],"salchichas","r",[1,2.4,-.3],2.4]]);return{update:(a,l,c)=>{r.visible=a<t+.4,o(a,c)}}},c:[[0,1.6,4.4],[0,1.3,-.4],[0,1.6,3.8],[0,1.3,-.4]],range:3.5,look:Gi}});ie(69,(n,e)=>{let t=L(e,"vigdis");return{amb:"plaza",ambo:{seed:11},fov:32,atores:[Sa({x:0,z:-.6,hair:"bob",hairc:"#E8C890",eyes:[[0,"happy"]],pose:(i,s)=>s>t?qr(i,s):i.pose()}),...[0,1,2,3].map(i=>ze(i,{x:[-2.6,-1.5,1.5,2.6][i],z:.2,eyes:[[0,"happy"]],pose:(s,r)=>ph(s,r+i)}))],extra:i=>{i.add(x(.9,1,.5,T("#2A3A6A"),0,.5,-.2));let s=_h(i,8);return{update:r=>s(r,.7)}},c:[[0,2.2,5.6],[0,2,-.4],[0,2.2,5],[0,2,-.4]],range:4,look:Gi}});ie(70,(n,e)=>{let t=L(e,"todos"),i=L(e,"cuenta");return{amb:"biblio",fov:30,atores:[Te({x:0,z:-.2,eyes:[[0,"look"],[t,"happy"]]})],extra:s=>{let r=it(s,["EL MUNDO NECESITA A TODOS"],2.4,[0,2.3,-.3]),o=ut(s,["\u2026AUNQUE NO SIEMPRE SE D\xC9 CUENTA"],2.4,[0,2.3,-.3]);return{update:(a,l,c)=>{ye(r,a,t-.5,i-.6,c),ye(o,a,i-.5,99,c)}}},c:[[0,1.6,3.8],[.2,1.5,-.3],[0,1.6,3.3],[.2,1.5,-.3]],range:3}});fs(71,["equipo"],[(n,e)=>{let t=L(e,"futbol"),i=L(e,"ligas");return{amb:"estadio",fov:34,atores:[...[0,1,2].map(s=>ze(s+2,{x:-1.6+s*1.6,z:-.6+s%2*.4,outfit:s===1?"avental":"azul",eyes:[[0,"smug"]],move:r=>[-1.6+s*1.6+Math.sin(r*2+s)*.3,0,-.6+s%2*.4],pose:(r,o)=>r.walk(o*1.4+s)}))],extra:s=>{let r=Fu();s.add(r);let o=Pe(s,e,[[["MES 6"],.05,"y"],[["\u26BD VUELVE EL F\xDATBOL"],"futbol","w"],[["ESTADIOS LLENOS"],"ligas","r"]],[0,2.6,-.4],2);return{update:(a,l,c)=>{r.position.set(Math.sin(a*2)*1.2,.15+Math.abs(Math.sin(a*5))*.4,.2),r.rotation.x=a*6,o(a,c)}}},c:[[0,1.8,5],[0,1.2,-.4],[0,1.8,4.4],[0,1.2,-.4]],range:4}},(n,e)=>{let t=L(e,"goles"),i=L(e,"ganais");return{amb:"estadio",fov:32,atores:[ze(1,{x:0,z:-.3,outfit:"avental",eyes:[[0,"smug"],[i,"happy"]],pose:(s,r)=>r>i?s.pose({armL:[150,30],armR:[150,30],bob:Math.abs(Math.sin(r*8))*.06}):s.walk(r*1.5)})],extra:s=>{let r=new te,o=T("#F2C14E",{metalness:.8,roughness:.25}),a=new H(new Xe(.22,.1,.35,20),o);a.position.y=.3,r.add(a),r.add(x(.16,.12,.16,o,0,.06,0)),s.add(r);let l=Pe(s,e,[[["\u26BD\u26BD\u26BD 3 GOLES POR PARTIDO"],"goles","w"],[["\u{1F3C6} \xA1POR FIN GAN\xC1IS ALGO!"],"ganais","y"]],[0,2.55,-.3],2.4);return{update:(c,h,d)=>{r.visible=c>i,r.position.set(0,2.25,-.2),l(c,d)}}},c:[[0,1.6,4.2],[0,1.4,-.3],[0,1.6,3.6],[0,1.4,-.3]],range:3}}]);ie(72,(n,e)=>{let t=L(e,"grave"),i=L(e,"gira");return{amb:"estadio",fov:32,atores:[Te({x:0,z:0,eyes:[[0,"happy"],[i+.3,"small"]],pose:(s,r)=>r<i?s.pose({armL:[150,30],armR:[150,30],bob:Math.abs(Math.sin(r*8))*.04}):s.pose({armL:[20,8],armR:[20,8]})}),...[0,1,2,3,4,5].map(s=>ze(s,{x:[-2.4,-1.4,1.4,2.4,-1.9,1.9][s],z:s<4?-.2:-1.2,eyes:[[0,"happy"],[i,"wide"]],pose:(r,o)=>o<i?r.pose({armL:[150,30],armR:[150,30],bob:Math.abs(Math.sin(o*8+s))*.04}):r.pose()}))],extra:s=>{let r=it(s,["\xA1GOOOOL!"],1.4,[0,2.4,0],{size:90,w:520}),o=ut(s,["\u{1F50A} EL \xDANICO CON VOZ GRAVE"],2.2,[0,2.4,0]),a=it(s,["\u{1F440}"],.7,[0,2.4,0],{size:100,w:300});return{update:(l,c,h)=>{ye(r,l,.1,t-.8,h),ye(o,l,t-.7,i-.1,h),ye(a,l,i,99,h)}}},c:[[0,1.6,4.6],[0,1.4,-.3],[0,1.6,3.6],[0,1.4,-.3]],range:3,look:Vn}});ie(73,(n,e)=>{let t=L(e,"luz");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[Te({x:0,z:-.4,eyes:[[0,"look"],[t,"sad"]]})],extra:i=>{let s=ut(i,["LO QUE NADIE VE\u2026"],1.6,[0,2.4,-.4]);return{update:(r,o,a)=>ye(s,r,.1,99,a)}},c:[[0,1.6,3.4],[0,1.4,-.4],[0,1.6,2.8],[0,1.4,-.4]],range:2.5,look:Vn,lookFn:i=>i>t?{exposure:.7,vig:.75}:{}}});ie(74,(n,e)=>{let t=L(e,"silbar"),i=L(e,"chistes"),s=L(e,"consejos");return{amb:"sala",ambo:{wall:"#6A4A3A"},fov:30,atores:[mh({x:-.4,z:-.6,eyes:[[0,"happy"],[s,"look"]],talk:[[i,i+2],[s,n]],pose:(r,o)=>o<i?r.pose({armL:[12,8],armR:[70+Math.sin(o*6)*15,60]}):qg(r,o)}),Te({x:1.1,z:-.2,glow:0,eyes:[[0,"happy"],[s+1.5,"sad"]]})],extra:r=>{Wn(r,-.6,-1.4,.9,1.8,.7,"#C8A27A");let o=Yg(r,6),a=Pe(r,e,[[["\u{1F3B6} SILBANDO EN LA COCINA"],"silbar","w"],[["SUS CHISTES MALOS"],"chistes","w"],[["LOS CONSEJOS QUE NUNCA PEDISTE"],"consejos","y"]],[.3,2.55,-.4],2.6);return{update:(l,c,h)=>{o(l,new I(-.4,1.9,-.6),h,l>t-.3&&l<i+1),a(l,h)}}},c:[[0,1.6,4],[.2,1.4,-.5],[0,1.6,3.4],[.2,1.4,-.5]],range:3,look:gh}});ie(75,(n,e)=>{let t=L(e,"mando");return{amb:"sala",ambo:{wall:"#6A4A3A"},fov:30,atores:[$u({x:-.6,z:-.4,eyes:[[0,"angry"],[t+1,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[80+Math.sin(s*9)*10,10],lean:Math.sin(s*9)*4})}),Te({x:.6,z:-.4,glow:0,eyes:[[0,"angry"],[t+1,"happy"]],pose:(i,s)=>i.pose({armL:[80+Math.sin(s*9+2)*10,10],armR:[12,8],lean:-Math.sin(s*9)*4})})],extra:i=>{let s=x(.35,.07,.1,T("#2A2A34"),0,1.25,-.3);i.add(s);let r=ut(i,["\u{1F4FA} LA GUERRA DEL MANDO"],2,[0,2.45,-.4]);return{update:(o,a,l)=>{s.position.x=Math.sin(o*9)*.12,ye(r,o,t-.5,99,l)}}},c:[[0,1.6,3.6],[0,1.4,-.4],[0,1.6,3.1],[0,1.4,-.4]],range:3,look:gh}});ie(76,(n,e)=>{let t=L(e,"dos"),i=L(e,"tonterias");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[Te({x:.1,z:-.4,eyes:[[0,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[150,150]})})],extra:(s,r,o)=>{let a=ju(["MEJOR AMIGO","LLAMANDO\u2026"],{hora:"02:00"});a.scale.setScalar(.3),s.add(a);let l=Pe(s,e,[[["\u{1F4DE} LAS 2 DE LA MA\xD1ANA"],"dos","w"],[["PARA HABLAR DE TONTER\xCDAS"],"tonterias","y"]],[0,2.45,-.4],2.2);return{update:(c,h,d)=>{let u=qt(o[0]);a.position.set(u.x-.05,u.y+.05,u.z+.05),yi(a,d),l(c,d)}}},c:[[0,1.6,3.4],[0,1.45,-.4],[0,1.6,2.9],[0,1.45,-.4]],range:2.5,look:{...Vn,...gh}}});ie(77,(n,e)=>{let t=L(e,"nadie");return{amb:"apagon",fov:34,atores:[Te({x:0,z:0,eyes:[[0,"sad"]],pose:i=>i.pose({head:8})})],extra:i=>{let s=ut(i,["EL \xDANICO QUE QUEDA"],1.8,[0,2.35,0]);return{update:(r,o,a)=>ye(s,r,.2,99,a)}},c:[[0,2.4,6.5],[0,1.2,0],[0,2,4.8],[0,1.3,0]],range:3,look:Vn}});ie(78,(n,e)=>{let t=L(e,"madre"),i=L(e,"sienta"),s=L(e,"nada");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[Te({x:-.6,z:-.2,eyes:[[0,"sad"],[i+.5,"look"]]}),dr({x:.3,z:-.3,eyes:[[0,"sad"]],move:r=>[Nt(2.4,.3,yt(t,i,r)),0,-.3],pose:(r,o)=>o>t&&o<i?r.walk(o):r.pose({armL:[60,70],armR:[60,70]})})],extra:(r,o,a)=>{let l=ut(r,["NO DICE NADA"],1.4,[-.1,2.3,-.3]);return{update:(c,h,d)=>{ye(l,c,s-.2,99,d)}}},c:[[.2,1.6,3.6],[-.1,1.35,-.3],[.1,1.6,3.1],[-.1,1.35,-.3]],range:2.5,look:Vn}});ie(79,(n,e)=>{let t=L(e,"padre"),i=L(e,"hermano"),s=L(e,"padre",L(e,"hermano")),r=L(e,"hijo");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[Te({x:-1,z:-.2,eyes:[[0,"look"]]}),dr({x:-.2,z:-.3,eyes:[[0,"sad"]]})],extra:o=>{let a=[ut(o,["SU MARIDO"],1.2,[1.2,2.2,-.3],{size:70}),ut(o,["SU HERMANO"],1.2,[1.2,1.8,-.3],{size:70}),ut(o,["SU PADRE"],1.2,[1.2,1.4,-.3],{size:70}),ut(o,["SU HIJO MAYOR"],1.2,[1.2,1,-.3],{size:70})],l=[t,i,s,r];return{update:(c,h,d)=>a.forEach((u,f)=>ye(u,c,l[f],99,d))}},c:[[0,1.6,3.8],[.1,1.4,-.3],[0,1.6,3.3],[.1,1.4,-.3]],range:2.5,look:Vn}});ie(80,(n,e)=>({amb:"barrio",ambo:{night:!0},fov:34,atores:[...[0,1,2,3,4,5].map(t=>ze(t,{x:-2.5+t,z:-.5-t%2*.6,eyes:[[0,"sad"]],pose:i=>i.pose({head:6})}))],extra:t=>{let i=ut(t,["TODAS PERDIERON A ALGUIEN"],2.4,[0,2.6,-.6]),s=[0,1,2,3,4,5].map(r=>{let o=Ze("#FFE7A0",.5,.7);return o.position.set(-2.5+r,1.1,-.2-r%2*.6),t.add(o),o});return{update:(r,o,a)=>{ye(i,r,.1,99,a),s.forEach((l,c)=>l.material.opacity=.5+.2*Math.sin(r*3+c))}}},c:[[0,1.7,5],[0,1.4,-.6],[0,1.7,4.4],[0,1.4,-.6]],range:4,look:Vn}));ie(81,(n,e)=>{let t=L(e,"ve");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[Te({x:0,z:-.4,eyes:[[0,"look"],[t,"flat"]]})],extra:i=>{let s=Pe(i,e,[[["NO ERES EL QUE M\xC1S HA PERDIDO"],.3,"w"],[["SOLO EL QUE M\xC1S SE VE"],"ve","y"]],[0,2.4,-.4],2.6),r=Ze("#FFF2C0",2.6,.25);return r.position.set(0,1.4,-.6),i.add(r),{update:(o,a,l)=>s(o,l)}},c:[[0,1.6,3.4],[0,1.4,-.4],[0,1.6,2.9],[0,1.4,-.4]],range:2.5,look:Vn}});fs(82,["casa"],[(n,e)=>{let t=L(e,"proyecto"),i=L(e,"historias");return{amb:"cuartoYo",ambo:{},fov:30,atores:[Te({x:0,z:-.4,eyes:[[0,"look"],[t,"smug"]],pose:s=>s.pose({armL:[60,70],armR:[60,70]})})],extra:(s,r,o)=>{let a=lh("#C9361F","HISTORIAS");s.add(a);let l=Pe(s,e,[[["ALGO \xDATIL"],.2,"w"],[["PROYECTO: SUS HISTORIAS"],"historias","y"]],[0,2.45,-.4],2.2);return{update:(c,h,d)=>{let u=qt(o[0]);a.position.set(0,u.y+.1,u.z+.2),l(c,d)}}},c:[[0,1.6,3.4],[0,1.4,-.4],[0,1.6,2.9],[0,1.4,-.4]],range:2.5}},(n,e)=>{let t=L(e,"ciudad"),i=L(e,"escuchas");return{amb:"barrio",ambo:{},fov:32,atores:[Te({x:.9,z:0,eyes:[[0,"look"]],move:s=>s<i?[Nt(3,.9,yt(0,i,s)),0,0]:[.9,0,0],pose:(s,r)=>r<i?s.walk(r):s.pose({armL:[60,70],armR:[60,70]})}),ze(3,{x:-.4,z:-.3,eyes:[[0,"sad"]],talk:[[i,n]]}),Xr({x:-1.4,z:-.6,eyes:[[0,"sad"]]}),ze(5,{s:.7,x:-2.2,z:-.3,eyes:[[0,"sad"]]})],extra:s=>{let r=Pe(s,e,[[["CASA POR CASA \xB7 CIUDAD POR CIUDAD"],.1,"w"],[["HIJAS \xB7 MADRES \xB7 AMIGAS"],"escuchas","y"]],[0,2.55,-.3],2.8);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,4.6],[-.3,1.3,-.3],[0,1.6,4],[-.3,1.3,-.3]],range:3.5}}]);ie(83,(n,e)=>{let t=L(e,"archivos"),i=L(e,"biblioteca"),s=L(e,"volvieron");return{amb:"biblio",fov:32,atores:[Te({x:0,z:-.4,eyes:[[0,"look"],[s,"happy"]]})],extra:r=>{let o=Pe(r,e,[[["\u{1F4D3} CUADERNOS"],.1,"w"],[["\u{1F5C2} ARCHIVOS"],"archivos","w"],[["LA BIBLIOTECA DE LOS QUE NO VOLVIERON"],i,"y",[0,2.6,-.4],3.6]],[0,2.4,-.4],2.4);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.6,2.8],[0,1.4,-.4],[0,2,4.4],[0,1.6,-.6]],range:3.5,blur:5,look:{exposure:1.05}}});ie(84,(n,e)=>{let t=L(e,"curioso"),i=L(e,"5");return{amb:"residencia",fov:32,atores:[Xr({x:-1.2,z:-.4,eyes:[[0,"happy"]],talk:[[0,n]]}),Xr({x:.2,z:-.7,hair:"bun",hairc:"#D8D8D8",eyes:[[0,"happy"]]}),Te({x:1.5,z:-.2,eyes:[[0,"look"],[i,"wide"]]})],extra:s=>{let r=Pe(s,e,[[["DATO CURIOSO"],"curioso","w"],[["ELLAS VIVEN UNOS 5 A\xD1OS M\xC1S (OMS)"],"5","y"]],[0,2.55,-.4],2.8);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,4.4],[0,1.4,-.4],[0,1.6,3.8],[0,1.4,-.4]],range:3}});ie(85,(n,e)=>{let t=L(e,"ensenan");return{amb:"residencia",fov:32,atores:[Xr({x:-.6,z:-.4,eyes:[[0,"happy"]],pose:(i,s)=>s>t?i.pose({armL:[12,8],armR:[100,20]}):i.pose()}),Te({x:.7,z:-.2,eyes:[[0,"look"],[t+.5,"happy"]],pose:(i,s)=>s>t+.5?Xg(i,s):i.pose()})],extra:i=>{let s=Pe(i,e,[[["SEGUIR ADELANTE"],.3,"w"],[["TE ENSE\xD1AN C\xD3MO SE HACE"],"ensenan","y"]],[0,2.45,-.3],2.2);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.6],[0,1.4,-.3],[0,1.6,3.1],[0,1.4,-.3]],range:3}});fs(86,["pueblo"],[(n,e)=>{let t=L(e,"otro");return{amb:"rua",ambo:{},fov:30,atores:[Te({x:.8,z:0,eyes:[[0,"look"],[t,"wide"]]}),ze(4,{x:-.7,z:-.2,eyes:[[0,"smug"]],talk:[[0,n]],pose:i=>i.pose({armL:[12,8],armR:[130,60]})})],extra:i=>{let s=Pe(i,e,[[["UN RUMOR\u2026"],.1,"w"],[["\xBFOTRO HOMBRE?"],"otro","r"]],[0,2.45,-.1],1.8);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.8],[0,1.4,-.1],[0,1.6,3.3],[0,1.4,-.1]],range:3}},(n,e)=>{let t=L(e,"barba");return{amb:"pradera",fov:34,atores:[],extra:i=>{let s=Ue(12);for(let a=0;a<7;a++){let l=new H(new hn(4+s()*4,5+s()*5,6),T(["#7A8A9A","#8A9AAA","#6A7A8A"][a%3],{flatShading:!0}));l.position.set(-24+a*8,2.5,-30-s()*10),i.add(l);let c=new H(new hn(1.4,1.6,6),T("#F4F6FA"));c.position.set(l.position.x,l.position.y+l.geometry.parameters.height/2-.7,l.position.z),i.add(c)}let r=cr();r.scale.setScalar(.5),r.rotation.y=Math.PI,r.position.set(1.2,1.6,-8),i.add(r);let o=Pe(i,e,[[["UN PUEBLO EN LAS MONTA\xD1AS"],.1,"w"],[["CON BARBA Y SOMBRERO"],"barba","y"]],[0,3,-2],2.6);return{update:(a,l,c)=>o(a,c)}},c:[[0,2.2,6],[0,2.4,-10],[0,2.4,5],[.6,2.4,-10]],k:1,range:10,blur:4}}]);ie(87,(n,e)=>{let t=L(e,"paises"),i=L(e,"rio"),s=L(e,"cabras");return{amb:"rio",fov:34,atores:[Te({x:0,z:0,eyes:[[0,"look"],[s,"wide"]],move:r=>[Nt(-3,2.2,r/n),0,.4],pose:(r,o)=>r.walk(o)})],extra:r=>{let o=[];for(let l=0;l<7;l++){let c=lE(r,.8);o.push(c)}let a=Pe(r,e,[[["3 D\xCDAS"],.1,"w"],[["2 PA\xCDSES"],"paises","w"],[["1 R\xCDO"],"rio","w"],[["\u{1F410} 1 REBA\xD1O DE CABRAS"],"cabras","y"]],[0,2.6,0],1.8);return{update:(l,c,h)=>{o.forEach((d,u)=>{d.visible=l>s-.4,d.position.set(-1.6+u*.6+Math.sin(l+u)*.1,.35,-.6-u%3*.5),yi(d,h)}),a(l,h)}}},c:[[0,1.8,5.4],[0,1.2,0],[.6,1.8,4.8],[.6,1.2,0]],range:4}});ie(88,(n,e)=>{let t=L(e,"colina"),i=L(e,"espaldas");return{amb:"granja",fov:32,atores:[Te({x:-1.2,z:1.2,eyes:[[0,"look"],[i,"wide"]]}),Xr({x:-2.2,z:1,eyes:[[0,"smug"]],pose:(s,r)=>r>t?s.pose({armL:[12,8],armR:[95,-10]}):s.pose()})],extra:s=>{let r=cr();r.rotation.y=Math.PI,r.position.set(1.4,0,-2.2),s.add(r);let o=Pe(s,e,[[["LA COLINA"],"colina","w",[1.4,3.2,-2.2]],[["DE ESPALDAS\u2026"],"espaldas","y",[1.4,3.2,-2.2]]],null,1.6);return{update:(a,l,c)=>o(a,c)}},c:[[-.6,1.7,5.6],[.4,1.6,-1.2],[-.2,1.7,4.8],[.8,1.7,-1.6]],range:5}});ie(89,(n,e)=>{let t=L(e,"hombro"),i=L(e,"vuelta");return{amb:"granja",fov:30,atores:[Te({x:.4,z:-1.4,eyes:[[0,"small"],[i,"wide"]],move:s=>[Nt(-.6,.5,yt(0,t,s)),0,-1.4],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t?100:12,0],bob:Math.sin(r*40)*.006})})],extra:s=>{let r=cr();r.position.set(1.4,0,-2.2),s.add(r);let o=ut(s,["*TIEMBLA*"],1.1,[0,2.4,-1.4],{size:70});return{update:(a,l,c)=>{r.rotation.y=Math.PI*(1-yt(i,i+1,a)),ye(o,a,.1,t-.2,c)}}},c:[[-.6,1.8,2.4],[.8,1.6,-1.8],[-.4,1.8,2],[1,1.7,-2]],range:2.5}});ie(90,(n,e)=>{let t=L(e,"bien");return{amb:"granja",fov:28,atores:[Te({x:.2,z:-1.2,eyes:[[0,"flat"]]})],extra:i=>{let s=cr();s.position.set(1.3,0,-2.2),i.add(s);let r=Pe(i,e,[[["ES UN ESPANTAP\xC1JAROS"],.1,"r"],[["MUY BIEN HECHO, ESO S\xCD \u{1F44D}"],"bien","w"]],[.7,2.95,-1.8],2.2);return{update:(o,a,l)=>r(o,l)}},c:[[.6,1.8,2.8],[.8,1.7,-1.8],[.5,1.8,2.4],[.8,1.7,-1.8]],range:2.5}});fs(91,["primera"],[(n,e)=>{let t=L(e,"lloras"),i=[];return{amb:"granja",ambo:{},fov:30,atores:[Te({x:.4,z:-1.6,y:0,eyes:[[0,"happy"]],pose:(s,r)=>{zu(s),s.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(r*14))*.03,head:Math.sin(r*14)*5}),Yu(s)}})],extra:s=>{let r=cr();r.position.set(1.3,0,-2.2),s.add(r);let o=Pe(s,e,[[["JAJAJAJA"],.3,"y"],[["\u{1F602} HASTA LLORAR"],"lloras","w"]],[.6,2.5,-1.6],1.8),a=[0,1].map(()=>{let l=Ze("#9FE0FF",.12,.9);return s.add(l),l});return{update:(l,c,h)=>{o(l,h),a.forEach((d,u)=>{let f=(l*1.2+u*.5)%1;d.visible=l>t,d.position.set(.4+(u?.12:-.12),1.05-f*.3,-1.45)})}}},c:[[0,1.4,2.6],[.7,1.1,-1.8],[-.2,1.4,2.3],[.7,1.1,-1.8]],range:2}},(n,e)=>{let t=L(e,"ridiculo");return{amb:"granja",ambo:{},fov:32,atores:[Te({x:.4,z:-1.6,eyes:[[0,"happy"]],pose:i=>{zu(i)}})],extra:i=>{let s=cr();s.position.set(1.3,0,-2.2),i.add(s);let r=Pe(i,e,[[["NO TE SIENTES SOLO"],.1,"w"],[["TE SIENTES RID\xCDCULO (MUCHO MEJOR)"],"ridiculo","y"]],[.7,2.9,-1.8],2.8);return{update:(o,a,l)=>r(o,l)}},c:[[.4,1.8,3.4],[.8,1.4,-1.8],[.4,2.2,5.2],[.8,1.5,-1.8]],range:3,look:{exposure:1.02,bloom:.4}}}]);fs(92,["mujeres","nadie"],[(n,e)=>{let t=L(e,"mejor"),i=L(e,"peor");return{amb:"barrio",ambo:{dusk:!0},fov:34,atores:[],extra:s=>{let r=Pe(s,e,[[["PASAN LOS A\xD1OS\u2026"],.1,"w"],[["COSAS MEJOR \u2197"],"mejor","b"],[["COSAS PEOR \u2198"],"peor","r"]],[0,2.8,-.5],2);return{update:(o,a,l)=>r(o,l)}},c:[[0,2,6],[0,2,-2],[0,2.4,4.6],[0,2.2,-2]],k:1,range:6,lookFn:s=>({exposure:1+Math.sin(s*1.5)*.06})}},(n,e)=>{let t=L(e,"aviones"),i=L(e,"obras"),s=L(e,"gobiernos"),r=L(e,"futbol");return{amb:"plaza",ambo:{seed:13},fov:34,atores:[ze(0,{x:-2.4,z:-.3,outfit:"terno2",eyes:[[0,"smug"]]}),ze(1,{x:-.8,z:-.5,outfit:"laranja",eyes:[[0,"smug"]]}),Sa({x:.8,z:-.5,eyes:[[0,"smug"]]}),ze(3,{x:2.4,z:-.3,outfit:"avental",eyes:[[0,"smug"]]})],extra:o=>{let a=[ut(o,["\u2708"],.5,[-2.4,2.35,-.3],{size:90,w:220}),ut(o,["\u{1F3D7}"],.5,[-.8,2.35,-.5],{size:90,w:220}),ut(o,["\u{1F3DB}"],.5,[.8,2.35,-.5],{size:90,w:220}),ut(o,["\u26BD"],.5,[2.4,2.35,-.3],{size:90,w:220})],l=[t,i,s,r];return{update:(c,h,d)=>a.forEach((u,f)=>ye(u,c,l[f]-.1,99,d))}},c:[[0,1.6,5.4],[0,1.4,-.4],[0,1.6,4.8],[0,1.4,-.4]],range:4}},(n,e)=>{let t=L(e,"sigue");return{amb:"espacio",fov:34,k:1,atores:[],extra:i=>{let s=new H(new nt(2.2,48,32),new Le({map:ve(512,256,o=>{o.fillStyle="#2C6FB8",o.fillRect(0,0,512,256),o.fillStyle="#4FA35A";let a=Ue(4);for(let l=0;l<9;l++)o.beginPath(),o.ellipse(a()*512,50+a()*156,14+a()*30,10+a()*22,a()*3,0,7),o.fill()}),roughness:.8}));i.add(s);let r=Pe(i,e,[[["\xBFDENTRO DE 100 A\xD1OS?"],.1,"y"],[["PERO SIGUE"],"sigue","y"]],[0,1.2,3.2],2.2);return{update:(o,a,l)=>{s.rotation.y=o*.3,r(o,l)}}},c:[[0,.6,9],[0,.6,0],[0,.9,7.4],[0,.7,0]],range:6,blur:2,look:{bloom:.6}}}]);ie(93,(n,e)=>{let t=L(e,"nacido");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:26,atores:[],extra:i=>{let s=ba(i,[0,1.5,-2.6],1.8,[""]);return{update:r=>s.userData.set(r<t?["LA MISMA PRESENTADORA\u2026","NOTICIA ESPECIAL"]:["HA NACIDO EL PRIMER NI\xD1O","DESDE QUE DESAPARECIERON LOS HOMBRES"],{size:34,tag:r<t?"\xDALTIMA HORA":"\xA1BUENAS NOTICIAS!",top:r<t?"#22467E":"#2A7A5A"})}},c:[[0,1.6,1],[0,1.6,-2.6],[0,1.6,.5],[0,1.6,-2.6]],k:1,range:2,blur:6}});ie(94,(n,e)=>{let t=L(e,"cogerlo"),i=L(e,"grita");return{amb:"lab",fov:30,atores:[Te({x:.3,z:-.2,eyes:[[0,"look"],[t+.5,"heart"],[i,"wide"]],pose:(s,r)=>r>t?s.pose({armL:[55,75],armR:[55,75]}):s.pose()}),ze(2,{x:-1,z:-.5,eyes:[[0,"happy"]],pose:(s,r)=>r<t?s.pose({armL:[55,75],armR:[55,75]}):s.pose()})],extra:(s,r,o)=>{s.add(x(1.8,.5,.9,T("#F4F6FA"),-1.6,.5,-1.4));let a=us();s.add(a);let l=Pe(s,e,[[["\u{1F3E5} EL HOSPITAL"],.1,"w"],[["DIMINUTO \xB7 ARRUGADO"],"diminuto","w"],[["\xA1BUAAAA! \u{1F451}"],"grita","y"]],[-.2,2.45,-.3],1.8);return{update:(c,h,d)=>{let u=c>t?o[0]:o[1],f=qt(u);a.position.set(f.x+(c>t?-.2:.2),f.y+.05,f.z+.2),a.rotation.z=Math.sin(c*(c>i?20:2))*.05,l(c,d)}}},c:[[0,1.6,3.6],[-.2,1.4,-.3],[0,1.6,3.1],[-.2,1.4,-.3]],range:3,look:{exposure:1.2}}});ie(95,(n,e)=>{let t=L(e,"quienes"),i=L(e,"silbaba"),s=L(e,"aprendio");return{amb:"lab",fov:28,atores:[Te({x:0,z:-.2,eyes:[[0,"happy"]],talk:[[0,n]],pose:r=>r.pose({armL:[55,75],armR:[55,75]})})],extra:(r,o,a)=>{let l=us();r.add(l);let c=Pe(r,e,[[["TE LO VOY A CONTAR TODO"],.1,"w"],[["LOS QUE NO VOLVIERON"],"quienes","w"],[["\u{1F3B6} EL SILBIDO DEL ABUELO"],"silbaba","w"],[["C\xD3MO EL MUNDO APRENDI\xD3"],"aprendio","y"]],[0,2.2,-.3],2.2);return{update:(h,d,u)=>{let f=qt(a[0]);l.position.set(f.x-.2,f.y+.05,f.z+.2),c(h,u)}}},c:[[0,1.6,3.2],[0,1.45,-.3],[0,1.6,2.8],[0,1.45,-.3]],range:2.5,look:{exposure:1.2}}});ie(96,(n,e)=>{let t=L(e,"botes");return{amb:"lab",fov:28,atores:[Te({x:0,z:-.2,eyes:[[0,"smug"]],pose:i=>i.pose({armL:[55,75],armR:[55,75]})})],extra:(i,s,r)=>{let o=us();i.add(o);let a=it(i,["PROMESA: ENSE\xD1ARLE A ABRIR BOTES"],2.6,[0,2.2,-.3]);return{update:(l,c,h)=>{let d=qt(r[0]);o.position.set(d.x-.2,d.y+.05,d.z+.2),ye(a,l,t-.6,99,h)}}},c:[[0,1.6,3.2],[0,1.45,-.3],[0,1.6,2.8],[0,1.45,-.3]],range:2.5,look:{exposure:1.2}}});ie(97,(n,e)=>{let t=L(e,"biberon"),i=L(e,"intentas"),s=L(e,"esfuerzo"),r=L(e,"no",L(e,"esfuerzo"));return{amb:"lab",fov:28,atores:[Te({x:.3,z:-.2,eyes:[[0,"look"],[i,"angry"],[r,"sad"]],pose:(o,a)=>o.pose({armL:[70,80],armR:[70,80],bob:a>i&&a<r?Math.sin(a*30)*.01:0})}),Kg({x:-1,z:-.4,eyes:[[0,"happy"]],pose:(o,a)=>a<t+.5?o.pose({armL:[12,8],armR:[80,10]}):o.pose()})],extra:(o,a,l)=>{let c=Ku();o.add(c);let h=Pe(o,e,[[["\u{1F37C} TAPA APRETADA"],"tapa","w"],[["\u{1F624} \xA1\xD1GGGH!"],"esfuerzo","w"],[["NO SE ABRE"],r,"r"]],[-.2,2.2,-.3],1.8);return{update:(d,u,f)=>{let g=qt(d<t+.5?l[1]:l[0]);c.position.set(g.x-.1,g.y-.05,g.z+.15),c.userData.lid.rotation.y=d>i&&d<r?Math.sin(d*20)*.3:0,h(d,f)}}},c:[[0,1.6,3.4],[-.2,1.45,-.3],[0,1.6,3],[-.2,1.45,-.3]],range:2.5,look:{exposure:1.2}}});ie(98,(n,e)=>{let t=L(e,"golpecito"),i=L(e,"abre"),s=L(e,"rie");return{amb:"lab",fov:28,atores:[Te({x:.7,z:-.2,eyes:[[0,"sad"],[s,"flat"]],pose:r=>r.pose({armL:[55,75],armR:[55,75]})}),ze(2,{x:-.7,z:-.3,eyes:[[0,"look"],[i,"smug"]],pose:(r,o)=>r.pose({armL:[70,80],armR:[o>t&&o<i?90+Math.abs(Math.sin(o*14))*30:70,80]})})],extra:(r,o,a)=>{let l=us(),c=Ku(),h=Qu();r.add(l),r.add(c),r.add(h);let d=it(r,["EL BEB\xC9 SE R\xCDE"],1.6,[0,2.45,-.3]);return{update:(u,f,g)=>{let E=qt(a[0]),m=qt(a[1]);l.position.set(E.x-.2,E.y+.05,E.z+.2),l.userData.rie(u>s),l.rotation.z=u>s?Math.sin(u*12)*.06:0,c.position.set(m.x-.1,m.y-.05,m.z+.15),h.visible=u>t-.4&&u<i+.5,h.position.set(m.x+.05,m.y,m.z+.12),h.rotation.z=u>t&&u<i?Math.sin(u*28)*.4:0,c.userData.lid.position.y=u>i?.3:.24,c.userData.lid.rotation.z=u>i?.5:0,ye(d,u,s-.1,99,g)}}},c:[[0,1.6,3.4],[0,1.45,-.3],[0,1.6,3],[0,1.45,-.3]],range:2.5,look:{exposure:1.2}}});ie(99,(n,e)=>{let t=L(e,"mundo");return{amb:"parque",ambo:{dusk:!0},fov:32,atores:[Te({x:0,z:0,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],bob:Math.abs(Math.sin(s*10))*.02})}),dr({x:-1.2,z:-.3,eyes:[[0,"happy"]]}),ze(2,{x:1.2,z:-.3,eyes:[[0,"happy"]],pose:hs})],extra:(i,s,r)=>{let o=us();i.add(o),o.userData.rie(!0);let a=Pe(i,e,[[["JAJAJA"],.1,"w"],[["EL MUNDO SIGUI\xD3 ADELANTE. Y T\xDA CON \xC9L"],"mundo","y"]],[0,2.5,-.2],3);return{update:(l,c,h)=>{let d=qt(r[2]);o.position.set(d.x-.2,d.y+.05,d.z+.2),a(l,h)}}},c:[[0,1.6,4.4],[0,1.4,-.2],[0,2,6],[0,1.6,-.2]],range:4,look:{bloom:.45}}});ie(100,(n,e)=>{let t=L(e,"que");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:30,atores:[Te({x:0,z:0,eyes:[[0,"look"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[95,0]})})],extra:i=>{let s=it(i,["\xBFQU\xC9 HAR\xCDAS T\xDA PRIMERO?"],2.4,[0,2.2,0]);return{update:(r,o,a)=>ye(s,r,t-.3,99,a)}},c:[[0,1.6,3.4],[0,1.45,0],[0,1.6,2.6],[0,1.45,0]],range:2.5}});ie(101,(n,e)=>{let t=L(e,"suscribete");return{amb:"sala",ambo:{wall:"#2F6E68"},fov:32,atores:[Te({x:-1.4,z:-.4,eyes:[[0,"happy"]],pose:(i,s)=>s<t?qr(i,s):qu(i)})],extra:i=>{let s=ut(i,["\u{1F4AC} \xA1CU\xC9NTAMELO EN LOS COMENTARIOS!"],2.8,[.4,2.75,-.7]),r=ch(2.6);r.position.set(.9,1.7,-.6),i.add(r);let o=Ma(i,14,"#FFE27A");return{update:(a,l,c)=>{ye(s,a,.1,99,c);let h=yt(t-.3,t,a);r.scale.setScalar(Math.max(.01,h)),o(a,[.9,1.7,-.5,1.2],h)}}},c:[[0,1.7,4.4],[-.2,1.5,-.6],[0,1.7,4],[-.2,1.5,-.6]],k:1.2,range:6,blur:4}});function uE(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new ca(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=hr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=hr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(uE(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=hr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
