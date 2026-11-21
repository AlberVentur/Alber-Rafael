var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Vc="170";var lf=0,Ih=1,cf=2;var kd=1,Wc=2,Ai=3,Yi=0,Qt=1,xt=2,ai=0,Xi=1,yn=2,Dh=3,Lh=4,hf=5,fs=100,df=101,uf=102,ff=103,pf=104,mf=200,gf=201,Ef=202,yf=203,yl=204,vl=205,vf=206,_f=207,Af=208,Mf=209,Sf=210,bf=211,Tf=212,wf=213,xf=214,_l=0,Al=1,Ml=2,js=3,Sl=4,bl=5,Tl=6,wl=7,Gd=0,Rf=1,Cf=2,li=0,Ff=1,Pf=2,If=3,Df=4,Lf=5,Uf=6,Nf=7;var Vd=300,er=301,tr=302,xl=303,Rl=304,ha=306,rn=1e3,ms=1001,Cl=1002,Pn=1003,Bf=1004;var ao=1005;var ri=1006,Na=1007;var gs=1008;var Ti=1009,Wd=1010,Xd=1011,Gr=1012,Xc=1013,wi=1014,oi=1015,An=1016,qc=1017,Yc=1018,nr=1020,qd=35902,Yd=1021,Zd=1022,Zn=1023,Jd=1024,$d=1025,$s=1026,ir=1027,Zc=1028,Jc=1029,Qd=1030,$c=1031;var Qc=1033,Bo=33776,Oo=33777,Ho=33778,zo=33779,Fl=35840,Pl=35841,Il=35842,Dl=35843,Ll=36196,Ul=37492,Nl=37496,Bl=37808,Ol=37809,Hl=37810,zl=37811,kl=37812,Gl=37813,Vl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Zl=37819,Jl=37820,$l=37821,ko=36492,Ql=36494,Kl=36495,Kd=36283,jl=36284,ec=36285,tc=36286;var Go=2300,nc=2301,Ba=2302,Uh=2400,Nh=2401,Bh=2402;var Of=3200,pr=3201;var jd=0,Hf=1,Vi="",Lt="srgb",Ki="srgb-linear",da="linear",At="srgb";var Fs=7680;var Oh=519,zf=512,kf=513,Gf=514,eu=515,Vf=516,Wf=517,Xf=518,qf=519,ic=35044;var Hh="300 es",Si=2e3,Vo=2001,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oa=Math.PI/180,Wo=180/Math.PI;function qi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function Yf(n,e){return(n%e+e)%e}function Ha(n,e,t){return(1-t)*n+t*e}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],D=s[2],R=s[5],T=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*_+l*R,r[6]=o*p+a*y+l*T,r[1]=c*E+h*v+d*D,r[4]=c*m+h*_+d*R,r[7]=c*p+h*y+d*T,r[2]=u*E+f*v+g*D,r[5]=u*m+f*_+g*R,r[8]=u*p+f*y+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},za=new $e;function tu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zf(){let n=Xo("canvas");return n.style.display="block",n}var zh={};function Br(n){n in zh||(zh[n]=!0,console.warn(n))}function Jf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function $f(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Qf(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===At&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===At&&(n.r=Qs(n.r),n.g=Qs(n.g),n.b=Qs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vi?da:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var kh=[.64,.33,.3,.6,.15,.06],Gh=[.2126,.7152,.0722],Vh=[.3127,.329],Wh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[Ki]:{primaries:kh,whitePoint:Vh,transfer:da,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Gh,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:kh,whitePoint:Vh,transfer:At,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:Gh,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}});var Ps,sc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Xo("canvas")),Ps.width=e.width,Ps.height=e.height;let i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kf=0,qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ka(s[o].image)):r.push(ka(s[o]))}else r=ka(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jf=0,vn=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ms,s=ms,r=ri,o=gs,a=Zn,l=Ti,c=n.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=qi(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Vd;vn.DEFAULT_ANISOTROPY=1;var St=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,D=(p+1)/2,R=(h+u)/4,T=(d+E)/4,F=(g+m)/4;return _>y&&_>D?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=T/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=F/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=F/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rc=class extends Zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends rc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yo=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var oc=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),R=Math.atan2(D,p*v);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}let y=a*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new I,qh=new Ji,xi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),co.subVectors(this.max,xr),Is.subVectors(e.a,xr),Ds.subVectors(e.b,xr),Ls.subVectors(e.c,xr),Bi.subVectors(Ds,Is),Oi.subVectors(Ls,Ds),os.subVectors(Is,Ls);let t=[0,-Bi.z,Bi.y,0,-Oi.z,Oi.y,0,-os.z,os.y,Bi.z,0,-Bi.x,Oi.z,0,-Oi.x,os.z,0,-os.x,-Bi.y,Bi.x,0,-Oi.y,Oi.x,0,-os.y,os.x,0];return!Va(t,Is,Ds,Ls,co)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Is,Ds,Ls,co))?!1:(ho.crossVectors(Bi,Oi),t=[ho.x,ho.y,ho.z],Va(t,Is,Ds,Ls,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,lo=new xi,Is=new I,Ds=new I,Ls=new I,Bi=new I,Oi=new I,os=new I,xr=new I,co=new I,ho=new I,as=new I;function Va(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){as.fromArray(n,r);let a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),h=i.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ep=new xi,Rr=new I,Wa=new I,$i=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ep.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Wa)),this.expandByPoint(Rr.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new I,Xa=new I,uo=new I,Hi=new I,qa=new I,fo=new I,Ya=new I,Zo=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xa.copy(e).add(t).multiplyScalar(.5),uo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Xa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(uo),a=Hi.dot(this.direction),l=-Hi.dot(uo),c=Hi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xa).addScaledVector(uo,u),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,s,r){qa.subVectors(t,e),fo.subVectors(i,e),Ya.crossVectors(qa,fo);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let l=a*this.direction.dot(fo.crossVectors(Hi,fo));if(l<0)return null;let c=a*this.direction.dot(qa.cross(Hi));if(c<0||l+c>o)return null;let h=-a*Hi.dot(Ya);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,np)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),zi.crossVectors(i,Cn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),zi.crossVectors(i,Cn)),zi.normalize(),po.crossVectors(Cn,zi),s[0]=zi.x,s[4]=po.x,s[8]=Cn.x,s[1]=zi.y,s[5]=po.y,s[9]=Cn.y,s[2]=zi.z,s[6]=po.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],v=i[3],_=i[7],y=i[11],D=i[15],R=s[0],T=s[4],F=s[8],S=s[12],A=s[1],P=s[5],O=s[9],H=s[13],W=s[2],j=s[6],Z=s[10],oe=s[14],Y=s[3],fe=s[7],ve=s[11],De=s[15];return r[0]=o*R+a*A+l*W+c*Y,r[4]=o*T+a*P+l*j+c*fe,r[8]=o*F+a*O+l*Z+c*ve,r[12]=o*S+a*H+l*oe+c*De,r[1]=h*R+d*A+u*W+f*Y,r[5]=h*T+d*P+u*j+f*fe,r[9]=h*F+d*O+u*Z+f*ve,r[13]=h*S+d*H+u*oe+f*De,r[2]=g*R+E*A+m*W+p*Y,r[6]=g*T+E*P+m*j+p*fe,r[10]=g*F+E*O+m*Z+p*ve,r[14]=g*S+E*H+m*oe+p*De,r[3]=v*R+_*A+y*W+D*Y,r[7]=v*T+_*P+y*j+D*fe,r[11]=v*F+_*O+y*Z+D*ve,r[15]=v*S+_*H+y*oe+D*De,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],E=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+E*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],E=e[13],m=e[14],p=e[15],v=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*E*c-g*d*c+g*a*f-o*E*f-h*a*p+o*d*p,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,R=t*v+i*_+s*y+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=v*T,e[1]=(E*u*r-d*m*r-E*s*f+i*m*f+d*s*p-i*u*p)*T,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*T,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*T,e[4]=_*T,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*T,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*T,e[8]=y*T,e[9]=(g*d*r-h*E*r-g*i*f+t*E*f+h*i*p-t*d*p)*T,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*p+t*a*p)*T,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*f-t*a*f)*T,e[12]=D*T,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*T,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*T,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,E=o*h,m=o*d,p=a*d,v=l*c,_=l*h,y=l*d,D=i.x,R=i.y,T=i.z;return s[0]=(1-(E+p))*D,s[1]=(f+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(u+p))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+_)*T,s[9]=(m-v)*T,s[10]=(1-(u+E))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),a=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let c=1/r,h=1/o,d=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Si){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(a===Si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Vo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Si){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,f=(i+s)*h,g,E;if(a===Si)g=(o+r)*d,E=-2*d;else if(a===Vo)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Us=new I,qn=new bt,tp=new I(0,0,0),np=new I(1,1,1),zi=new I,po=new I,Cn=new I,Yh=new bt,Zh=new Ji,ci=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Jo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ip=0,Jh=new I,Ns=new Ji,yi=new bt,mo=new I,Cr=new I,sp=new I,rp=new Ji,$h=new I(1,0,0),Qh=new I(0,1,0),Kh=new I(0,0,1),jh={type:"added"},op={type:"removed"},Bs={type:"childadded",child:null},Za={type:"childremoved",child:null},Wt=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ci,i=new Ji,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new $e}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mo.copy(e):mo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Cr,mo,this.up):yi.lookAt(mo,Cr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(yi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(op),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new I(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new I,vi=new I,Ja=new I,_i=new I,Os=new I,Hs=new I,ed=new I,$a=new I,Qa=new I,Ka=new I,ja=new St,el=new St,tl=new St,Wi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Yn.subVectors(s,t),vi.subVectors(i,t),Ja.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(vi),l=Yn.dot(Ja),c=vi.dot(vi),h=vi.dot(Ja),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ja.setScalar(0),el.setScalar(0),tl.setScalar(0),ja.fromBufferAttribute(e,t),el.fromBufferAttribute(e,i),tl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ja,r.x),o.addScaledVector(el,r.y),o.addScaledVector(tl,r.z),o}static isFrontFacing(e,t,i,s){return Yn.subVectors(i,t),vi.subVectors(e,t),Yn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Yn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,i),Hs.subVectors(r,i),$a.subVectors(e,i);let l=Os.dot($a),c=Hs.dot($a);if(l<=0&&c<=0)return t.copy(i);Qa.subVectors(e,s);let h=Os.dot(Qa),d=Hs.dot(Qa);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Os,o);Ka.subVectors(e,r);let f=Os.dot(Ka),g=Hs.dot(Ka);if(g>=0&&f<=g)return t.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Hs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ed.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(ed,a);let p=1/(m+E+u);return o=E*p,a=u*p,t.copy(i).addScaledVector(Os,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},go={h:0,s:0,l:0};function nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=Yf(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=nl(o,r,e+1/3),this.g=nl(o,r,e),this.b=nl(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=nu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ht.fromWorkingColorSpace(ln.copy(this),e),Math.round(cn(ln.r*255,0,255))*65536+Math.round(cn(ln.g*255,0,255))*256+Math.round(cn(ln.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Lt){ht.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(go);let i=Ha(ki.h,go.h,t),s=Ha(ki.s,go.s,t),r=Ha(ki.l,go.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new de;de.NAMES=nu;var ap=0,Ri=class extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=qi(),this.name="",this.blending=Xi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=vl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yl&&(i.blendSrc=this.blendSrc),this.blendDst!==vl&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},je=class extends Ri{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new I,Eo=new ce,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ic,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ic&&(e.usage=this.usage),e}};var $o=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Qo=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Et=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},lp=0,Nn=new bt,il=new Wt,zs=new I,Fn=new xi,Fr=new xi,$t=new I,Yt=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?Qo:$o)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Fn.min,Fr.min),Fn.expandByPoint($t),$t.addVectors(Fn.max,Fr.max),Fn.expandByPoint($t)):(Fn.expandByPoint(Fr.min),Fn.expandByPoint(Fr.max))}Fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),$t.add(zs)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new I,l[F]=new I;let c=new I,h=new I,d=new I,u=new ce,f=new ce,g=new ce,E=new I,m=new I;function p(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,O=A.count;for(let H=P,W=P+O;H<W;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new I,y=new I,D=new I,R=new I;function T(F){D.fromBufferAttribute(s,F),R.copy(D);let S=a[F];_.copy(S),_.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(R,S);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,O=A.count;for(let H=P,W=P+O;H<W;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},td=new bt,ls=new Zo,yo=new $i,nd=new I,vo=new I,_o=new I,Ao=new I,sl=new I,Mo=new I,id=new I,So=new I,V=class extends Wt{constructor(e=new Yt,t=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(sl.fromBufferAttribute(d,e),o?Mo.addScaledVector(sl,h):Mo.addScaledVector(sl.sub(t),h))}t.add(Mo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(yo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(yo,nd)===null||ls.origin.distanceToSquared(nd)>(e.far-e.near)**2))&&(td.copy(r).invert(),ls.copy(e.ray).applyMatrix4(td),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let R=a.getX(y),T=a.getX(y+1),F=a.getX(y+2);s=bo(this,p,e,i,c,h,d,R,T,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=bo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let R=y,T=y+1,F=y+2;s=bo(this,p,e,i,c,h,d,R,T,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=m,_=m+1,y=m+2;s=bo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function cp(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Yi,a),l===null)return null;So.copy(a),So.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(So);return c<t.near||c>t.far?null:{distance:c,point:So.clone(),object:n}}function bo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,vo),n.getVertexPosition(l,_o),n.getVertexPosition(c,Ao);let h=cp(n,e,t,i,vo,_o,Ao,id);if(h){let d=new I;Wi.getBarycoord(id,vo,_o,Ao,d),s&&(h.uv=Wi.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Wi.getNormal(vo,_o,Ao,u.normal),h.face=u,h.barycoord=d}return h}var _n=class n extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(d,2));function g(E,m,p,v,_,y,D,R,T,F,S){let A=y/T,P=D/F,O=y/2,H=D/2,W=R/2,j=T+1,Z=F+1,oe=0,Y=0,fe=new I;for(let ve=0;ve<Z;ve++){let De=ve*P-H;for(let et=0;et<j;et++){let wt=et*A-O;fe[E]=wt*v,fe[m]=De*_,fe[p]=W,c.push(fe.x,fe.y,fe.z),fe[E]=0,fe[m]=0,fe[p]=R>0?1:-1,h.push(fe.x,fe.y,fe.z),d.push(et/T),d.push(1-ve/F),oe+=1}}for(let ve=0;ve<F;ve++)for(let De=0;De<T;De++){let et=u+De+j*ve,wt=u+De+j*(ve+1),$=u+(De+1)+j*(ve+1),ae=u+(De+1)+j*ve;l.push(et,wt,ae),l.push(wt,$,ae),Y+=6}a.addGroup(f,Y,S),f+=Y,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=sr(n[t]);for(let s in i)e[s]=i[s]}return e}function hp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var mr={clone:sr,merge:pn},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Ri{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ko=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new I,sd=new ce,rd=new ce,sn=class extends Ko{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,sd,rd),t.subVectors(rd,sd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Gs=1,ac=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(ks,Gs,e,t);s.layers=this.layers,this.add(s);let r=new sn(ks,Gs,e,t);r.layers=this.layers,this.add(r);let o=new sn(ks,Gs,e,t);o.layers=this.layers,this.add(o);let a=new sn(ks,Gs,e,t);a.layers=this.layers,this.add(a);let l=new sn(ks,Gs,e,t);l.layers=this.layers,this.add(l);let c=new sn(ks,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jo=class extends vn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lc=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new jo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ai});r.uniforms.tEquirect.value=t;let o=new V(s,r),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=ri),new ac(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},rl=new I,fp=new I,pp=new $e,Mi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=rl.subVectors(i,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||pp.getNormalMatrix(e),s=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new $i,To=new I,Vr=class{constructor(e=new Mi,t=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-f,y-p).normalize(),i[1].setComponents(l+r,u+c,m+f,y+p).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),t===Si)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(t===Vo)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(To.x=s.normal.x>0?e.max.x:e.min.x,To.y=s.normal.y>0?e.max.y:e.min.y,To.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function su(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Re=class n extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),D=v+1+c*(p+1),R=v+1+c*p;f.push(_,y,R),f.push(y,D,R)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(E,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
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
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
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
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f0=`PhysicalMaterial material;
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
#endif`,p0=`struct PhysicalMaterial {
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
}`,m0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,Bm=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,km=`#define TOON
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
}`,Gm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:gp,alphahash_pars_fragment:Ep,alphamap_fragment:yp,alphamap_pars_fragment:vp,alphatest_fragment:_p,alphatest_pars_fragment:Ap,aomap_fragment:Mp,aomap_pars_fragment:Sp,batching_pars_vertex:bp,batching_vertex:Tp,begin_vertex:wp,beginnormal_vertex:xp,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Lp,color_fragment:Up,color_pars_fragment:Np,color_pars_vertex:Bp,color_vertex:Op,common:Hp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Vp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:$p,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:l0,envmap_vertex:Kp,fog_vertex:jp,fog_pars_vertex:e0,fog_fragment:t0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:s0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:o0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:d0,lights_phong_pars_fragment:u0,lights_physical_fragment:f0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:E0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:A0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:b0,map_particle_pars_fragment:T0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:x0,morphinstance_vertex:R0,morphcolor_vertex:C0,morphnormal_vertex:F0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:D0,normal_fragment_maps:L0,normal_pars_fragment:U0,normal_pars_vertex:N0,normal_vertex:B0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:G0,opaque_fragment:V0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:Y0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:K0,shadowmap_vertex:j0,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:dm,uv_pars_vertex:um,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:Em,backgroundCube_frag:ym,cube_vert:vm,cube_frag:_m,depth_vert:Am,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:bm,equirect_vert:Tm,equirect_frag:wm,linedashed_vert:xm,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Fm,meshlambert_vert:Pm,meshlambert_frag:Im,meshmatcap_vert:Dm,meshmatcap_frag:Lm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:Bm,meshphong_frag:Om,meshphysical_vert:Hm,meshphysical_frag:zm,meshtoon_vert:km,meshtoon_frag:Gm,points_vert:Vm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:Zm},he={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ii={basic:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:pn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:pn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:pn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:pn([he.points,he.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:pn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:pn([he.common,he.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:pn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:pn([he.sprite,he.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:pn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:pn([he.lights,he.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ii.physical={uniforms:pn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var wo={r:0,b:0,g:0},hs=new ci,Jm=new bt;function $m(n,e,t,i,s,r,o){let a=new de(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function E(v){let _=!1,y=g(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===ha)?(h===void 0&&(h=new V(new _n(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:sr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(_.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(hs)),h.material.toneMapped=ht.getTransfer(y.colorSpace)!==At,(d!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new V(new Re(2,2),new en({name:"BackgroundMaterial",uniforms:sr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(wo,iu(n)),i.buffers.color.setClear(wo.r,wo.g,wo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:E,addToRenderList:m}}function Qm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,O,H,W){let j=!1,Z=d(H,O,P);r!==Z&&(r=Z,c(r.object)),j=f(A,H,O,W),j&&g(A,H,O,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(A,P,O,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,O){let H=O.wireframe===!0,W=i[A.id];W===void 0&&(W={},i[A.id]=W);let j=W[P.id];j===void 0&&(j={},W[P.id]=j);let Z=j[H];return Z===void 0&&(Z=u(l()),j[H]=Z),Z}function u(A){let P=[],O=[],H=[];for(let W=0;W<t;W++)P[W]=0,O[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:H,object:A,attributes:{},index:null}}function f(A,P,O,H){let W=r.attributes,j=P.attributes,Z=0,oe=O.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let ve=W[Y],De=j[Y];if(De===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(De=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(De=A.instanceColor)),ve===void 0||ve.attribute!==De||De&&ve.data!==De.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function g(A,P,O,H){let W={},j=P.attributes,Z=0,oe=O.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let ve=j[Y];ve===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor));let De={};De.attribute=ve,ve&&ve.data&&(De.data=ve.data),W[Y]=De,Z++}r.attributes=W,r.attributesNum=Z,r.index=H}function E(){let A=r.newAttributes;for(let P=0,O=A.length;P<O;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){let O=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;O[A]=1,H[A]===0&&(n.enableVertexAttribArray(A),H[A]=1),W[A]!==P&&(n.vertexAttribDivisor(A,P),W[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let O=0,H=P.length;O<H;O++)P[O]!==A[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function _(A,P,O,H,W,j,Z){Z===!0?n.vertexAttribIPointer(A,P,O,W,j):n.vertexAttribPointer(A,P,O,H,W,j)}function y(A,P,O,H){E();let W=H.attributes,j=O.getAttributes(),Z=P.defaultAttributeValues;for(let oe in j){let Y=j[oe];if(Y.location>=0){let fe=W[oe];if(fe===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){let ve=fe.normalized,De=fe.itemSize,et=e.get(fe);if(et===void 0)continue;let wt=et.buffer,$=et.type,ae=et.bytesPerElement,Ce=$===n.INT||$===n.UNSIGNED_INT||fe.gpuType===Xc;if(fe.isInterleavedBufferAttribute){let pe=fe.data,Ge=pe.stride,qe=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt,pe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let tt=0;tt<Y.locationSize;tt++)_(Y.location+tt,De/Y.locationSize,$,ve,Ge*ae,(qe+De/Y.locationSize*tt)*ae,Ce)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)p(Y.location+pe,fe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let pe=0;pe<Y.locationSize;pe++)_(Y.location+pe,De/Y.locationSize,$,ve,De*ae,De/Y.locationSize*pe*ae,Ce)}}else if(Z!==void 0){let ve=Z[oe];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Y.location,ve);break;case 3:n.vertexAttrib3fv(Y.location,ve);break;case 4:n.vertexAttrib4fv(Y.location,ve);break;default:n.vertexAttrib1fv(Y.location,ve)}}}}v()}function D(){F();for(let A in i){let P=i[A];for(let O in P){let H=P[O];for(let W in H)h(H[W].object),delete H[W];delete P[O]}delete i[A]}}function R(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let O in P){let H=P[O];for(let W in H)h(H[W].object),delete H[W];delete P[O]}delete i[A.id]}function T(A){for(let P in i){let O=i[P];if(O[A.id]===void 0)continue;let H=O[A.id];for(let W in H)h(H[W].object),delete H[W];delete O[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Km(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Zn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let F=T===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ti&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==oi&&!F)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function e1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Mi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let D=0;D!==_;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function t1(n){let e=new WeakMap;function t(o,a){return a===xl?o.mapping=er:a===Rl&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===xl||a===Rl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new lc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var rr=class extends Ko{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Js=4,od=[.125,.215,.35,.446,.526,.582],ps=20,ol=new rr,ad=new de,al=null,ll=0,cl=0,hl=!1,us=(1+Math.sqrt(5))/2,Vs=1/us,ld=[new I(-us,Vs,0),new I(us,Vs,0),new I(-Vs,0,us),new I(Vs,0,us),new I(0,us,-Vs),new I(0,us,Vs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ll,cl),this._renderer.xr.enabled=hl,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:An,format:Zn,colorSpace:Ki,depthBuffer:!1},s=cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n1(r)),this._blurMaterial=i1(r,e,t)}return s}_compileMaterial(e){let t=new V(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,s){let a=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ad),h.toneMapping=li,h.autoClear=!1;let f=new je({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new V(new _n,f),E=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,E=!0):(f.color.copy(ad),E=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;xo(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new V(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;xo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ol)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ld[(s-r-1)%ld.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new V(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ps-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):ps;m>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);let p=[],v=0;for(let T=0;T<ps;++T){let F=T/E,S=Math.exp(-F*F/2);p.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],D=3*y*(s>_-Js?s-_+Js:0),R=4*(this._cubeSize-y);xo(t,D,R,3*y,2*y),l.setRenderTarget(t),l.render(d,ol)}};function n1(n){let e=[],t=[],i=[],s=n,r=n-Js+1+od.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Js?l=od[o-n+Js-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,v=new Float32Array(E*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let R=0;R<f;R++){let T=R%3*2/3-1,F=R>2?0:-1,S=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];v.set(S,E*g*R),_.set(u,m*g*R);let A=[R,R,R,R,R,R];y.set(A,p*g*R)}let D=new Yt;D.setAttribute("position",new Kt(v,E)),D.setAttribute("uv",new Kt(_,m)),D.setAttribute("faceIndex",new Kt(y,p)),e.push(D),s>Js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cd(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function i1(n,e,t){let i=new Float32Array(ps),s=new I(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function hd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function dd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function s1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===xl||l===Rl,h=l===er||l===tr;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ea(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ea(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function r1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Br("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function o1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let v=f.array;E=f.version;for(let _=0,y=v.length;_<y;_+=3){let D=v[_+0],R=v[_+1],T=v[_+2];u.push(D,R,R,T,T,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let D=_+0,R=_+1,T=_+2;u.push(D,R,R,T,T,D)}}else return;let m=new(tu(u)?Qo:$o)(u,1);m.version=E;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function a1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,E,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*E[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function l1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function c1(n,e,t){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*D*4*d),T=new Yo(R,y,D,d);T.type=oi,T.needsUpdate=!0;let F=_*4;for(let A=0;A<d;A++){let P=m[A],O=p[A],H=v[A],W=y*D*4*A;for(let j=0;j<P.count;j++){let Z=j*F;f===!0&&(s.fromBufferAttribute(P,j),R[W+Z+0]=s.x,R[W+Z+1]=s.y,R[W+Z+2]=s.z,R[W+Z+3]=0),g===!0&&(s.fromBufferAttribute(O,j),R[W+Z+4]=s.x,R[W+Z+5]=s.y,R[W+Z+6]=s.z,R[W+Z+7]=0),E===!0&&(s.fromBufferAttribute(H,j),R[W+Z+8]=s.x,R[W+Z+9]=s.y,R[W+Z+10]=s.z,R[W+Z+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new ce(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function h1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var or=class extends vn{constructor(e,t,i,s,r,o,a,l,c,h=$s){if(h!==$s&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$s&&(i=wi),i===void 0&&h===ir&&(i=nr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ru=new vn,ud=new or(1,1),ou=new Yo,au=new oc,lu=new jo,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),Ed=new Float32Array(4);function gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ua(n,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function m1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;Ed.set(i),n.uniformMatrix2fv(this.addr,!1,Ed),Jt(t,i)}}function g1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;gd.set(i),n.uniformMatrix3fv(this.addr,!1,gd),Jt(t,i)}}function E1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;md.set(i),n.uniformMatrix4fv(this.addr,!1,md),Jt(t,i)}}function y1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function A1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function M1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function T1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function w1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ud.compareFunction=eu,r=ud):r=ru,t.setTexture2D(e||r,s)}function x1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||au,s)}function R1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lu,s)}function C1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ou,s)}function F1(n){switch(n){case 5126:return d1;case 35664:return u1;case 35665:return f1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return E1;case 5124:case 35670:return y1;case 35667:case 35671:return v1;case 35668:case 35672:return _1;case 35669:case 35673:return A1;case 5125:return M1;case 36294:return S1;case 36295:return b1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}function P1(n,e){n.uniform1fv(this.addr,e)}function I1(n,e){let t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function D1(n,e){let t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function L1(n,e){let t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function U1(n,e){let t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function N1(n,e){let t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B1(n,e){let t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O1(n,e){n.uniform1iv(this.addr,e)}function H1(n,e){n.uniform2iv(this.addr,e)}function z1(n,e){n.uniform3iv(this.addr,e)}function k1(n,e){n.uniform4iv(this.addr,e)}function G1(n,e){n.uniform1uiv(this.addr,e)}function V1(n,e){n.uniform2uiv(this.addr,e)}function W1(n,e){n.uniform3uiv(this.addr,e)}function X1(n,e){n.uniform4uiv(this.addr,e)}function q1(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ru,r[o])}function Y1(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||au,r[o])}function Z1(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lu,r[o])}function J1(n,e,t){let i=this.cache,s=e.length,r=ua(t,s);Zt(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ou,r[o])}function $1(n){switch(n){case 5126:return P1;case 35664:return I1;case 35665:return D1;case 35666:return L1;case 35674:return U1;case 35675:return N1;case 35676:return B1;case 5124:case 35670:return O1;case 35667:case 35671:return H1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return G1;case 36294:return V1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return J1}}var cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=F1(t.type)}},hc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$1(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},dl=/(\w+)(\])?(\[|\.)?/g;function yd(n,e){n.seq.push(e),n.map[e.id]=e}function Q1(n,e,t){let i=n.name,s=i.length;for(dl.lastIndex=0;;){let r=dl.exec(i),o=dl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yd(t,c===void 0?new cc(a,n,e):new hc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new dc(a),yd(t,d)),t=d}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Q1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function vd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var K1=37297,j1=0;function e2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var _d=new $e;function t2(n){ht._getMatrix(_d,ht.workingColorSpace,n);let e=`mat3( ${_d.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case da:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ad(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+e2(n.getShaderSource(e),o)}else return s}function n2(n,e){let t=t2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function i2(n,e){let t;switch(e){case Ff:t="Linear";break;case Pf:t="Reinhard";break;case If:t="Cineon";break;case Df:t="ACESFilmic";break;case Uf:t="AgX";break;case Nf:t="Neutral";break;case Lf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ro=new I;function s2(){ht.getLuminanceCoefficients(Ro);let n=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function o2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function Md(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(l2,h2)}var c2=new Map;function h2(n,e){let t=Ke[e];if(t===void 0){let i=c2.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}var d2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(n){return n.replace(d2,u2)}function u2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function f2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function p2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function g2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gd:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case Cf:e="ENVMAP_BLENDING_ADD";break}return e}function E2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function y2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=f2(t),c=p2(t),h=m2(t),d=g2(t),u=E2(t),f=r2(t),g=o2(r),E=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ke.tonemapping_pars_fragment:"",t.toneMapping!==li?i2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,n2("linearToOutputTexel",t.outputColorSpace),s2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=uc(o),o=Md(o,t),o=Sd(o,t),a=uc(a),a=Md(a,t),a=Sd(a,t),o=bd(o),a=bd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,D=vd(s,s.VERTEX_SHADER,_),R=vd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,R),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function T(P){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(E).trim(),H=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(R).trim(),j=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,R);else{let oe=Ad(s,D,"vertex"),Y=Ad(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+oe+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||W==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(D),s.deleteShader(R),F=new Ks(s,E),S=a2(s,E)}let F;this.getUniforms=function(){return F===void 0&&T(this),F};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,K1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=R,this}var v2=0,fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pc(e),t.set(e,i)),i}},pc=class{constructor(e){this.id=v2++,this.code=e,this.usedTimes=0}};function _2(n,e,t,i,s,r,o){let a=new Jo,l=new fc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,O,H){let W=O.fog,j=H.geometry,Z=S.isMeshStandardMaterial?O.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=oe&&oe.mapping===ha?oe.image.height:null,fe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,De=ve!==void 0?ve.length:0,et=0;j.morphAttributes.position!==void 0&&(et=1),j.morphAttributes.normal!==void 0&&(et=2),j.morphAttributes.color!==void 0&&(et=3);let wt,$,ae,Ce;if(fe){let vt=ii[fe];wt=vt.vertexShader,$=vt.fragmentShader}else wt=S.vertexShader,$=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);let pe=n.getRenderTarget(),Ge=n.state.buffers.depth.getReversed(),qe=H.isInstancedMesh===!0,tt=H.isBatchedMesh===!0,Ht=!!S.map,lt=!!S.matcap,Vt=!!oe,B=!!S.aoMap,Ln=!!S.lightMap,rt=!!S.bumpMap,ot=!!S.normalMap,He=!!S.displacementMap,Pt=!!S.emissiveMap,Be=!!S.metalnessMap,x=!!S.roughnessMap,M=S.anisotropy>0,z=S.clearcoat>0,Q=S.dispersion>0,ee=S.iridescence>0,J=S.sheen>0,Fe=S.transmission>0,me=M&&!!S.anisotropyMap,_e=z&&!!S.clearcoatMap,ct=z&&!!S.clearcoatNormalMap,ie=z&&!!S.clearcoatRoughnessMap,Ae=ee&&!!S.iridescenceMap,ze=ee&&!!S.iridescenceThicknessMap,Ve=J&&!!S.sheenColorMap,Me=J&&!!S.sheenRoughnessMap,at=!!S.specularMap,Qe=!!S.specularColorMap,Ct=!!S.specularIntensityMap,L=Fe&&!!S.transmissionMap,ue=Fe&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,ye=S.alphaTest>0,ge=!!S.alphaHash,Ze=!!S.extensions,kt=li;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(kt=n.toneMapping);let on={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:wt,fragmentShader:$,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:tt,batchingColor:tt&&H._colorsTexture!==null,instancing:qe,instancingColor:qe&&H.instanceColor!==null,instancingMorph:qe&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:lt,envMap:Vt,envMapMode:Vt&&oe.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:Ln,bumpMap:rt,normalMap:ot,displacementMap:u&&He,emissiveMap:Pt,normalMapObjectSpace:ot&&S.normalMapType===Hf,normalMapTangentSpace:ot&&S.normalMapType===jd,metalnessMap:Be,roughnessMap:x,anisotropy:M,anisotropyMap:me,clearcoat:z,clearcoatMap:_e,clearcoatNormalMap:ct,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:ee,iridescenceMap:Ae,iridescenceThicknessMap:ze,sheen:J,sheenColorMap:Ve,sheenRoughnessMap:Me,specularMap:at,specularColorMap:Qe,specularIntensityMap:Ct,transmission:Fe,transmissionMap:L,thicknessMap:ue,gradientMap:q,opaque:S.transparent===!1&&S.blending===Xi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ye,alphaHash:ge,combine:S.combine,mapUv:Ht&&E(S.map.channel),aoMapUv:B&&E(S.aoMap.channel),lightMapUv:Ln&&E(S.lightMap.channel),bumpMapUv:rt&&E(S.bumpMap.channel),normalMapUv:ot&&E(S.normalMap.channel),displacementMapUv:He&&E(S.displacementMap.channel),emissiveMapUv:Pt&&E(S.emissiveMap.channel),metalnessMapUv:Be&&E(S.metalnessMap.channel),roughnessMapUv:x&&E(S.roughnessMap.channel),anisotropyMapUv:me&&E(S.anisotropyMap.channel),clearcoatMapUv:_e&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:ct&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&E(S.sheenRoughnessMap.channel),specularMapUv:at&&E(S.specularMap.channel),specularColorMapUv:Qe&&E(S.specularColorMap.channel),specularIntensityMapUv:Ct&&E(S.specularIntensityMap.channel),transmissionMapUv:L&&E(S.transmissionMap.channel),thicknessMapUv:ue&&E(S.thicknessMap.channel),alphaMapUv:K&&E(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ot||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Ht||K),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ge,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===At,decodeVideoTextureEmissive:Pt&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xt,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=c.has(1),on.vertexUv2s=c.has(2),on.vertexUv3s=c.has(3),c.clear(),on}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let O=ii[A];P=mr.clone(O.uniforms)}else P=S.uniforms;return P}function D(S,A){let P;for(let O=0,H=h.length;O<H;O++){let W=h[O];if(W.cacheKey===A){P=W,++P.usedTimes;break}}return P===void 0&&(P=new y2(n,A,S,r),h.push(P)),P}function R(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:F}}function A2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function M2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,E,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),e++,p}function a(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||M2),i.length>1&&i.sort(u||wd),s.length>1&&s.sort(u||wd)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function S2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new xd,n.set(i,[o])):s>=r.length?(o=new xd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function b2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new de};break;case"SpotLight":t={position:new I,direction:new I,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function T2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var w2=0;function x2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R2(n){let e=new b2,t=T2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new bt,o=new bt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,v=0,_=0,y=0,D=0,R=0,T=0;c.sort(x2);for(let S=0,A=c.length;S<A;S++){let P=c[S],O=P.color,H=P.intensity,W=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*H,d+=O.g*H,u+=O.b*H;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],H);T++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let oe=P.shadow,Y=t.get(P);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=Z,f++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(H),Z.distance=W,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[E]=Z;let oe=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,oe.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[E]=oe.matrix,P.castShadow){let Y=t.get(P);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=j,y++}E++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(O).multiplyScalar(H),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let oe=P.shadow,Y=t.get(P);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=Z,g++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(H),Z.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==v||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=v,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=T,i.version=w2++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Rd(n){let e=new R2(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function C2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Rd(n),e.set(s,[a])):r>=o.length?(a=new Rd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Qi=class extends Ri{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mc=class extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},F2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
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
}`;function I2(n,e,t){let i=new Vr,s=new ce,r=new ce,o=new St,a=new Qi({depthPacking:pr}),l=new mc,c={},h=t.maxTextureSize,d={[Yi]:Qt,[Qt]:Yi,[xt]:xt},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:F2,fragmentShader:P2}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new V(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kd;let p=this.type;this.render=function(R,T,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ai),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==Ai&&this.type===Ai,W=p===Ai&&this.type!==Ai;for(let j=0,Z=R.length;j<Z;j++){let oe=R[j],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let fe=Y.getFrameExtents();if(s.multiply(fe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,Y.mapSize.y=r.y)),Y.map===null||H===!0||W===!0){let De=this.type!==Ai?{minFilter:Pn,magFilter:Pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new jt(s.x,s.y,De),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let ve=Y.getViewportCount();for(let De=0;De<ve;De++){let et=Y.getViewport(De);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),O.viewport(o),Y.updateMatrices(oe,De),i=Y.getFrustum(),y(T,F,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===Ai&&v(Y,F),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(R,T){let F=e.update(E);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jt(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,F,u,E,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,F,f,E,null)}function _(R,T,F,S){let A=null,P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)A=P;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=A.uuid,H=T.uuid,W=c[O];W===void 0&&(W={},c[O]=W);let j=W[H];j===void 0&&(j=A.clone(),W[H]=j,T.addEventListener("dispose",D)),A=j}if(A.visible=T.visible,A.wireframe=T.wireframe,S===Ai?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=n.properties.get(A);O.light=F}return A}function y(R,T,F,S,A){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===Ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let H=e.update(R),W=R.material;if(Array.isArray(W)){let j=H.groups;for(let Z=0,oe=j.length;Z<oe;Z++){let Y=j[Z],fe=W[Y.materialIndex];if(fe&&fe.visible){let ve=_(R,fe,S,A);R.onBeforeShadow(n,R,T,F,H,ve,Y),n.renderBufferDirect(F,null,H,ve,R,Y),R.onAfterShadow(n,R,T,F,H,ve,Y)}}}else if(W.visible){let j=_(R,W,S,A);R.onBeforeShadow(n,R,T,F,H,j,null),n.renderBufferDirect(F,null,H,j,R,null),R.onAfterShadow(n,R,T,F,H,j,null)}}let O=R.children;for(let H=0,W=O.length;H<W;H++)y(O[H],T,F,S,A)}function D(R){R.target.removeEventListener("dispose",D);for(let F in c){let S=c[F],A=R.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var D2={[_l]:Al,[Ml]:Tl,[Sl]:wl,[js]:bl,[Al]:_l,[Tl]:Ml,[wl]:Sl,[bl]:js};function L2(n,e){function t(){let L=!1,ue=new St,q=null,K=new St(0,0,0,0);return{setMask:function(ye){q!==ye&&!L&&(n.colorMask(ye,ye,ye,ye),q=ye)},setLocked:function(ye){L=ye},setClear:function(ye,ge,Ze,kt,on){on===!0&&(ye*=kt,ge*=kt,Ze*=kt),ue.set(ye,ge,Ze,kt),K.equals(ue)===!1&&(n.clearColor(ye,ge,Ze,kt),K.copy(ue))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,q=null,K=null,ye=null;return{setReversed:function(ge){if(ue!==ge){let Ze=e.get("EXT_clip_control");ue?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);let kt=ye;ye=null,this.setClear(kt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?pe(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(ge){q!==ge&&!L&&(n.depthMask(ge),q=ge)},setFunc:function(ge){if(ue&&(ge=D2[ge]),K!==ge){switch(ge){case _l:n.depthFunc(n.NEVER);break;case Al:n.depthFunc(n.ALWAYS);break;case Ml:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Sl:n.depthFunc(n.EQUAL);break;case bl:n.depthFunc(n.GEQUAL);break;case Tl:n.depthFunc(n.GREATER);break;case wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ge}},setLocked:function(ge){L=ge},setClear:function(ge){ye!==ge&&(ue&&(ge=1-ge),n.clearDepth(ge),ye=ge)},reset:function(){L=!1,q=null,K=null,ye=null,ue=!1}}}function s(){let L=!1,ue=null,q=null,K=null,ye=null,ge=null,Ze=null,kt=null,on=null;return{setTest:function(vt){L||(vt?pe(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(vt){ue!==vt&&!L&&(n.stencilMask(vt),ue=vt)},setFunc:function(vt,Vn,pi){(q!==vt||K!==Vn||ye!==pi)&&(n.stencilFunc(vt,Vn,pi),q=vt,K=Vn,ye=pi)},setOp:function(vt,Vn,pi){(ge!==vt||Ze!==Vn||kt!==pi)&&(n.stencilOp(vt,Vn,pi),ge=vt,Ze=Vn,kt=pi)},setLocked:function(vt){L=vt},setClear:function(vt){on!==vt&&(n.clearStencil(vt),on=vt)},reset:function(){L=!1,ue=null,q=null,K=null,ye=null,ge=null,Ze=null,kt=null,on=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,R=null,T=new de(0,0,0),F=0,S=!1,A=null,P=null,O=null,H=null,W=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,oe=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=oe>=2);let fe=null,ve={},De=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),wt=new St().fromArray(De),$=new St().fromArray(et);function ae(L,ue,q,K){let ye=new Uint8Array(4),ge=n.createTexture();n.bindTexture(L,ge),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<q;Ze++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ue+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ge}let Ce={};Ce[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(js),rt(!1),ot(Ih),pe(n.CULL_FACE),B(ai);function pe(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ge(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function qe(L,ue){return d[L]!==ue?(n.bindFramebuffer(L,ue),d[L]=ue,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function tt(L,ue){let q=f,K=!1;if(L){q=u.get(ue),q===void 0&&(q=[],u.set(ue,q));let ye=L.textures;if(q.length!==ye.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ze=ye.length;ge<Ze;ge++)q[ge]=n.COLOR_ATTACHMENT0+ge;q.length=ye.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function Ht(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let lt={[fs]:n.FUNC_ADD,[df]:n.FUNC_SUBTRACT,[uf]:n.FUNC_REVERSE_SUBTRACT};lt[ff]=n.MIN,lt[pf]=n.MAX;let Vt={[mf]:n.ZERO,[gf]:n.ONE,[Ef]:n.SRC_COLOR,[yl]:n.SRC_ALPHA,[Sf]:n.SRC_ALPHA_SATURATE,[Af]:n.DST_COLOR,[vf]:n.DST_ALPHA,[yf]:n.ONE_MINUS_SRC_COLOR,[vl]:n.ONE_MINUS_SRC_ALPHA,[Mf]:n.ONE_MINUS_DST_COLOR,[_f]:n.ONE_MINUS_DST_ALPHA,[bf]:n.CONSTANT_COLOR,[Tf]:n.ONE_MINUS_CONSTANT_COLOR,[wf]:n.CONSTANT_ALPHA,[xf]:n.ONE_MINUS_CONSTANT_ALPHA};function B(L,ue,q,K,ye,ge,Ze,kt,on,vt){if(L===ai){E===!0&&(Ge(n.BLEND),E=!1);return}if(E===!1&&(pe(n.BLEND),E=!0),L!==hf){if(L!==m||vt!==S){if((p!==fs||y!==fs)&&(n.blendEquation(n.FUNC_ADD),p=fs,y=fs),vt)switch(L){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.ONE,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,D=null,R=null,T.set(0,0,0),F=0,m=L,S=vt}return}ye=ye||ue,ge=ge||q,Ze=Ze||K,(ue!==p||ye!==y)&&(n.blendEquationSeparate(lt[ue],lt[ye]),p=ue,y=ye),(q!==v||K!==_||ge!==D||Ze!==R)&&(n.blendFuncSeparate(Vt[q],Vt[K],Vt[ge],Vt[Ze]),v=q,_=K,D=ge,R=Ze),(kt.equals(T)===!1||on!==F)&&(n.blendColor(kt.r,kt.g,kt.b,on),T.copy(kt),F=on),m=L,S=!1}function Ln(L,ue){L.side===xt?Ge(n.CULL_FACE):pe(n.CULL_FACE);let q=L.side===Qt;ue&&(q=!q),rt(q),L.blending===Xi&&L.transparent===!1?B(ai):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(L){A!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),A=L)}function ot(L){L!==lf?(pe(n.CULL_FACE),L!==P&&(L===Ih?n.cullFace(n.BACK):L===cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),P=L}function He(L){L!==O&&(Z&&n.lineWidth(L),O=L)}function Pt(L,ue,q){L?(pe(n.POLYGON_OFFSET_FILL),(H!==ue||W!==q)&&(n.polygonOffset(ue,q),H=ue,W=q)):Ge(n.POLYGON_OFFSET_FILL)}function Be(L){L?pe(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function x(L){L===void 0&&(L=n.TEXTURE0+j-1),fe!==L&&(n.activeTexture(L),fe=L)}function M(L,ue,q){q===void 0&&(fe===null?q=n.TEXTURE0+j-1:q=fe);let K=ve[q];K===void 0&&(K={type:void 0,texture:void 0},ve[q]=K),(K.type!==L||K.texture!==ue)&&(fe!==q&&(n.activeTexture(q),fe=q),n.bindTexture(L,ue||Ce[L]),K.type=L,K.texture=ue)}function z(){let L=ve[fe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(L){wt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),wt.copy(L))}function Me(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function at(L,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let K=q.get(L);K===void 0&&(K=n.getUniformBlockIndex(ue,L.name),q.set(L,K))}function Qe(L,ue){let K=c.get(ue).get(L);l.get(ue)!==K&&(n.uniformBlockBinding(ue,K,L.__bindingPointIndex),l.set(ue,K))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,ve={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,R=null,T=new de(0,0,0),F=0,S=!1,A=null,P=null,O=null,H=null,W=null,wt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ge,bindFramebuffer:qe,drawBuffers:tt,useProgram:Ht,setBlending:B,setMaterial:Ln,setFlipSided:rt,setCullFace:ot,setLineWidth:He,setPolygonOffset:Pt,setScissorTest:Be,activeTexture:x,bindTexture:M,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Ae,texImage3D:ze,updateUBOMapping:at,uniformBlockBinding:Qe,texStorage2D:ct,texStorage3D:ie,texSubImage2D:J,texSubImage3D:Fe,compressedTexSubImage2D:me,compressedTexSubImage3D:_e,scissor:Ve,viewport:Me,reset:Ct}}function Cd(n,e,t,i){let s=U2(i);switch(t){case Yd:return n*e;case Jd:return n*e;case $d:return n*e*2;case Zc:return n*e/s.components*s.byteLength;case Jc:return n*e/s.components*s.byteLength;case Qd:return n*e*2/s.components*s.byteLength;case $c:return n*e*2/s.components*s.byteLength;case Zd:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case Qc:return n*e*4/s.components*s.byteLength;case Bo:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ho:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Dl:return Math.max(n,16)*Math.max(e,8)/4;case Fl:case Il:return Math.max(n,8)*Math.max(e,8)/2;case Ll:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ko:case Ql:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kd:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U2(n){switch(n){case Ti:case Wd:return{byteLength:1,components:1};case Gr:case Xd:case An:return{byteLength:2,components:1};case qc:case Yc:return{byteLength:2,components:4};case wi:case Xc:case oi:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function N2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return f?new OffscreenCanvas(x,M):Xo("canvas")}function E(x,M,z){let Q=1,ee=Be(x);if((ee.width>z||ee.height>z)&&(Q=z/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let J=Math.floor(Q*ee.width),Fe=Math.floor(Q*ee.height);d===void 0&&(d=g(J,Fe));let me=M?g(J,Fe):d;return me.width=J,me.height=Fe,me.getContext("2d").drawImage(x,0,0,J,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+Fe+")."),me}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function v(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(x,M,z,Q,ee=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let J=M;if(M===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),M===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let Fe=ee?da:ht.getTransfer(Q);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=Fe===At?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(x,M){let z;return x?M===null||M===wi||M===nr?z=n.DEPTH24_STENCIL8:M===oi?z=n.DEPTH32F_STENCIL8:M===Gr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===wi||M===nr?z=n.DEPTH_COMPONENT24:M===oi?z=n.DEPTH_COMPONENT32F:M===Gr&&(z=n.DEPTH_COMPONENT16),z}function D(x,M){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Pn&&x.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function R(x){let M=x.target;M.removeEventListener("dispose",R),F(M),M.isVideoTexture&&h.delete(M)}function T(x){let M=x.target;M.removeEventListener("dispose",T),A(M)}function F(x){let M=i.get(x);if(M.__webglInit===void 0)return;let z=x.source,Q=u.get(z);if(Q){let ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(x),Object.keys(Q).length===0&&u.delete(z)}i.remove(x)}function S(x){let M=i.get(x);n.deleteTexture(M.__webglTexture);let z=x.source,Q=u.get(z);delete Q[M.__cacheKey],o.memory.textures--}function A(x){let M=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=x.textures;for(let Q=0,ee=z.length;Q<ee;Q++){let J=i.get(z[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(x)}let P=0;function O(){P=0}function H(){let x=P;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),P+=1,x}function W(x){let M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function j(x,M){let z=i.get(x);if(x.isVideoTexture&&He(x),x.isRenderTargetTexture===!1&&x.version>0&&z.__version!==x.version){let Q=x.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,x,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Z(x,M){let z=i.get(x);if(x.version>0&&z.__version!==x.version){$(z,x,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function oe(x,M){let z=i.get(x);if(x.version>0&&z.__version!==x.version){$(z,x,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function Y(x,M){let z=i.get(x);if(x.version>0&&z.__version!==x.version){ae(z,x,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}let fe={[rn]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[Cl]:n.MIRRORED_REPEAT},ve={[Pn]:n.NEAREST,[Bf]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},De={[zf]:n.NEVER,[qf]:n.ALWAYS,[kf]:n.LESS,[eu]:n.LEQUAL,[Gf]:n.EQUAL,[Xf]:n.GEQUAL,[Vf]:n.GREATER,[Wf]:n.NOTEQUAL};function et(x,M){if(M.type===oi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===Na||M.magFilter===ao||M.magFilter===gs||M.minFilter===ri||M.minFilter===Na||M.minFilter===ao||M.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,fe[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,fe[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,fe[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ve[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,De[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==ao&&M.minFilter!==gs||M.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function wt(x,M){let z=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",R));let Q=M.source,ee=u.get(Q);ee===void 0&&(ee={},u.set(Q,ee));let J=W(M);if(J!==x.__cacheKey){ee[J]===void 0&&(ee[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[J].usedTimes++;let Fe=ee[x.__cacheKey];Fe!==void 0&&(ee[x.__cacheKey].usedTimes--,Fe.usedTimes===0&&S(M)),x.__cacheKey=J,x.__webglTexture=ee[J].texture}return z}function $(x,M,z){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);let ee=wt(x,M),J=M.source;t.bindTexture(Q,x.__webglTexture,n.TEXTURE0+z);let Fe=i.get(J);if(J.version!==Fe.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let me=ht.getPrimaries(ht.workingColorSpace),_e=M.colorSpace===Vi?null:ht.getPrimaries(M.colorSpace),ct=M.colorSpace===Vi||me===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ie=E(M.image,!1,s.maxTextureSize);ie=Pt(M,ie);let Ae=r.convert(M.format,M.colorSpace),ze=r.convert(M.type),Ve=_(M.internalFormat,Ae,ze,M.colorSpace,M.isVideoTexture);et(Q,M);let Me,at=M.mipmaps,Qe=M.isVideoTexture!==!0,Ct=Fe.__version===void 0||ee===!0,L=J.dataReady,ue=D(M,ie);if(M.isDepthTexture)Ve=y(M.format===ir,M.type),Ct&&(Qe?t.texStorage2D(n.TEXTURE_2D,1,Ve,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ie.width,ie.height,0,Ae,ze,null));else if(M.isDataTexture)if(at.length>0){Qe&&Ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ve,at[0].width,at[0].height);for(let q=0,K=at.length;q<K;q++)Me=at[q],Qe?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,Ae,ze,Me.data):t.texImage2D(n.TEXTURE_2D,q,Ve,Me.width,Me.height,0,Ae,ze,Me.data);M.generateMipmaps=!1}else Qe?(Ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ve,ie.width,ie.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Ae,ze,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,ie.width,ie.height,0,Ae,ze,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ve,at[0].width,at[0].height,ie.depth);for(let q=0,K=at.length;q<K;q++)if(Me=at[q],M.format!==Zn)if(Ae!==null)if(Qe){if(L)if(M.layerUpdates.size>0){let ye=Cd(Me.width,Me.height,M.format,M.type);for(let ge of M.layerUpdates){let Ze=Me.data.subarray(ge*ye/Me.data.BYTES_PER_ELEMENT,(ge+1)*ye/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ge,Me.width,Me.height,1,Ae,Ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ie.depth,Ae,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ve,Me.width,Me.height,ie.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ie.depth,Ae,ze,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ve,Me.width,Me.height,ie.depth,0,Ae,ze,Me.data)}else{Qe&&Ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ve,at[0].width,at[0].height);for(let q=0,K=at.length;q<K;q++)Me=at[q],M.format!==Zn?Ae!==null?Qe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ve,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Me.width,Me.height,Ae,ze,Me.data):t.texImage2D(n.TEXTURE_2D,q,Ve,Me.width,Me.height,0,Ae,ze,Me.data)}else if(M.isDataArrayTexture)if(Qe){if(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ve,ie.width,ie.height,ie.depth),L)if(M.layerUpdates.size>0){let q=Cd(ie.width,ie.height,M.format,M.type);for(let K of M.layerUpdates){let ye=ie.data.subarray(K*q/ie.data.BYTES_PER_ELEMENT,(K+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,Ae,ze,ye)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ae,ze,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ie.width,ie.height,ie.depth,0,Ae,ze,ie.data);else if(M.isData3DTexture)Qe?(Ct&&t.texStorage3D(n.TEXTURE_3D,ue,Ve,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ae,ze,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ie.width,ie.height,ie.depth,0,Ae,ze,ie.data);else if(M.isFramebufferTexture){if(Ct)if(Qe)t.texStorage2D(n.TEXTURE_2D,ue,Ve,ie.width,ie.height);else{let q=ie.width,K=ie.height;for(let ye=0;ye<ue;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ve,q,K,0,Ae,ze,null),q>>=1,K>>=1}}else if(at.length>0){if(Qe&&Ct){let q=Be(at[0]);t.texStorage2D(n.TEXTURE_2D,ue,Ve,q.width,q.height)}for(let q=0,K=at.length;q<K;q++)Me=at[q],Qe?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ae,ze,Me):t.texImage2D(n.TEXTURE_2D,q,Ve,Ae,ze,Me);M.generateMipmaps=!1}else if(Qe){if(Ct){let q=Be(ie);t.texStorage2D(n.TEXTURE_2D,ue,Ve,q.width,q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,ze,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ae,ze,ie);m(M)&&p(Q),Fe.__version=J.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function ae(x,M,z){if(M.image.length!==6)return;let Q=wt(x,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+z);let J=i.get(ee);if(ee.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);let Fe=ht.getPrimaries(ht.workingColorSpace),me=M.colorSpace===Vi?null:ht.getPrimaries(M.colorSpace),_e=M.colorSpace===Vi||Fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ct=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let K=0;K<6;K++)!ct&&!ie?Ae[K]=E(M.image[K],!0,s.maxCubemapSize):Ae[K]=ie?M.image[K].image:M.image[K],Ae[K]=Pt(M,Ae[K]);let ze=Ae[0],Ve=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),at=_(M.internalFormat,Ve,Me,M.colorSpace),Qe=M.isVideoTexture!==!0,Ct=J.__version===void 0||Q===!0,L=ee.dataReady,ue=D(M,ze);et(n.TEXTURE_CUBE_MAP,M);let q;if(ct){Qe&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,at,ze.width,ze.height);for(let K=0;K<6;K++){q=Ae[K].mipmaps;for(let ye=0;ye<q.length;ye++){let ge=q[ye];M.format!==Zn?Ve!==null?Qe?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,ge.width,ge.height,Ve,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,at,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,ge.width,ge.height,Ve,Me,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,at,ge.width,ge.height,0,Ve,Me,ge.data)}}}else{if(q=M.mipmaps,Qe&&Ct){q.length>0&&ue++;let K=Be(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,at,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Qe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ae[K].width,Ae[K].height,Ve,Me,Ae[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,at,Ae[K].width,Ae[K].height,0,Ve,Me,Ae[K].data);for(let ye=0;ye<q.length;ye++){let Ze=q[ye].image[K].image;Qe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Ze.width,Ze.height,Ve,Me,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,at,Ze.width,Ze.height,0,Ve,Me,Ze.data)}}else{Qe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ve,Me,Ae[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,at,Ve,Me,Ae[K]);for(let ye=0;ye<q.length;ye++){let ge=q[ye];Qe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Ve,Me,ge.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,at,Ve,Me,ge.image[K])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),J.__version=ee.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function Ce(x,M,z,Q,ee,J){let Fe=r.convert(z.format,z.colorSpace),me=r.convert(z.type),_e=_(z.internalFormat,Fe,me,z.colorSpace),ct=i.get(M),ie=i.get(z);if(ie.__renderTarget=M,!ct.__hasExternalTextures){let Ae=Math.max(1,M.width>>J),ze=Math.max(1,M.height>>J);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,_e,Ae,ze,M.depth,0,Fe,me,null):t.texImage2D(ee,J,_e,Ae,ze,0,Fe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,ie.__webglTexture,0,rt(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,ie.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(x,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer){let Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,J=y(M.stencilBuffer,ee),Fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=rt(M);ot(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,x)}else{let Q=M.textures;for(let ee=0;ee<Q.length;ee++){let J=Q[ee],Fe=r.convert(J.format,J.colorSpace),me=r.convert(J.type),_e=_(J.internalFormat,Fe,me,J.colorSpace),ct=rt(M);z&&ot(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,_e,M.width,M.height):ot(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,_e,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,_e,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let ee=Q.__webglTexture,J=rt(M);if(M.depthTexture.format===$s)ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ir)ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(x){let M=i.get(x),z=x.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==x.depthTexture){let Q=x.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Q}if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ge(M.__webglFramebuffer,x)}else if(z){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),pe(M.__webglDepthbuffer[Q],x,!1);else{let ee=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),pe(M.__webglDepthbuffer,x,!1);else{let Q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(x,M,z){let Q=i.get(x);M!==void 0&&Ce(Q.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&qe(x)}function Ht(x){let M=x.texture,z=i.get(x),Q=i.get(M);x.addEventListener("dispose",T);let ee=x.textures,J=x.isWebGLCubeRenderTarget===!0,Fe=ee.length>1;if(Fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let _e=0;_e<M.mipmaps.length;_e++)z.__webglFramebuffer[me][_e]=n.createFramebuffer()}else z.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)z.__webglFramebuffer[me]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let me=0,_e=ee.length;me<_e;me++){let ct=i.get(ee[me]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&ot(x)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<ee.length;me++){let _e=ee[me];z.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[me]);let ct=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),Ae=_(_e.internalFormat,ct,ie,_e.colorSpace,x.isXRRenderTarget===!0),ze=rt(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ae,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,z.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),et(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ce(z.__webglFramebuffer[me][_e],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else Ce(z.__webglFramebuffer[me],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let me=0,_e=ee.length;me<_e;me++){let ct=ee[me],ie=i.get(ct);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),et(n.TEXTURE_2D,ct),Ce(z.__webglFramebuffer,x,ct,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(ct)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(me=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),et(me,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ce(z.__webglFramebuffer[_e],x,M,n.COLOR_ATTACHMENT0,me,_e);else Ce(z.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,me,0);m(M)&&p(me),t.unbindTexture()}x.depthBuffer&&qe(x)}function lt(x){let M=x.textures;for(let z=0,Q=M.length;z<Q;z++){let ee=M[z];if(m(ee)){let J=v(x),Fe=i.get(ee).__webglTexture;t.bindTexture(J,Fe),p(J),t.unbindTexture()}}}let Vt=[],B=[];function Ln(x){if(x.samples>0){if(ot(x)===!1){let M=x.textures,z=x.width,Q=x.height,ee=n.COLOR_BUFFER_BIT,J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(x),me=M.length>1;if(me)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[_e]);let ct=i.get(M[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,z,Q,0,0,z,Q,ee,n.NEAREST),l===!0&&(Vt.length=0,B.length=0,Vt.push(n.COLOR_ATTACHMENT0+_e),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Vt.push(J),B.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[_e]);let ct=i.get(M[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let M=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function rt(x){return Math.min(s.maxSamples,x.samples)}function ot(x){let M=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function He(x){let M=o.render.frame;h.get(x)!==M&&(h.set(x,M),x.update())}function Pt(x,M){let z=x.colorSpace,Q=x.format,ee=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||z!==Ki&&z!==Vi&&(ht.getTransfer(z)===At?(Q!==Zn||ee!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Be(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=tt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ot}function B2(n,e){function t(i,s=Vi){let r,o=ht.getTransfer(s);if(i===Ti)return n.UNSIGNED_BYTE;if(i===qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wd)return n.BYTE;if(i===Xd)return n.SHORT;if(i===Gr)return n.UNSIGNED_SHORT;if(i===Xc)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===Yd)return n.ALPHA;if(i===Zd)return n.RGB;if(i===Zn)return n.RGBA;if(i===Jd)return n.LUMINANCE;if(i===$d)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===Zc)return n.RED;if(i===Jc)return n.RED_INTEGER;if(i===Qd)return n.RG;if(i===$c)return n.RG_INTEGER;if(i===Qc)return n.RGBA_INTEGER;if(i===Bo||i===Oo||i===Ho||i===zo)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Pl||i===Il||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ll||i===Ul||i===Nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ll||i===Ul)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bl||i===Ol||i===Hl||i===zl||i===kl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===Jl||i===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ol)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ql)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===Ql||i===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ko)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kd||i===jl||i===ec||i===tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var gc=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},O2={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},H2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new vn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new en({vertexShader:H2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new Re(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yc=class extends Zi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new Ec,m=t.getContextAttributes(),p=null,v=null,_=[],y=[],D=new ce,R=null,T=new sn;T.viewport=new St;let F=new sn;F.viewport=new St;let S=[T,F],A=new gc,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=_[$];return ae===void 0&&(ae=new Hr,_[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=_[$];return ae===void 0&&(ae=new Hr,_[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=_[$];return ae===void 0&&(ae=new Hr,_[$]=ae),ae.getHandSpace()};function H($){let ae=y.indexOf($.inputSource);if(ae===-1)return;let Ce=_[ae];Ce!==void 0&&(Ce.update($.inputSource,$.frame,c||o),Ce.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let $=0;$<_.length;$++){let ae=y[$];ae!==null&&(y[$]=null,_[$].disconnect(ae))}P=null,O=null,E.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,wt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new jt(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ce=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?ir:$s,Ce=m.stencil?nr:wi);let Ge={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ge),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new jt(u.textureWidth,u.textureHeight,{format:Zn,type:Ti,depthTexture:new or(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function j($){for(let ae=0;ae<$.removed.length;ae++){let Ce=$.removed[ae],pe=y.indexOf(Ce);pe>=0&&(y[pe]=null,_[pe].disconnect(Ce))}for(let ae=0;ae<$.added.length;ae++){let Ce=$.added[ae],pe=y.indexOf(Ce);if(pe===-1){for(let qe=0;qe<_.length;qe++)if(qe>=y.length){y.push(Ce),pe=qe;break}else if(y[qe]===null){y[qe]=Ce,pe=qe;break}if(pe===-1)break}let Ge=_[pe];Ge&&Ge.connect(Ce)}}let Z=new I,oe=new I;function Y($,ae,Ce){Z.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Ce.matrixWorld);let pe=Z.distanceTo(oe),Ge=ae.projectionMatrix.elements,qe=Ce.projectionMatrix.elements,tt=Ge[14]/(Ge[10]-1),Ht=Ge[14]/(Ge[10]+1),lt=(Ge[9]+1)/Ge[5],Vt=(Ge[9]-1)/Ge[5],B=(Ge[8]-1)/Ge[0],Ln=(qe[8]+1)/qe[0],rt=tt*B,ot=tt*Ln,He=pe/(-B+Ln),Pt=He*-B;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pt),$.translateZ(He),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ge[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Be=tt+He,x=Ht+He,M=rt-Pt,z=ot+(pe-Pt),Q=lt*Ht/x*Be,ee=Vt*Ht/x*Be;$.projectionMatrix.makePerspective(M,z,Q,ee,Be,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function fe($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ae=$.near,Ce=$.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Ce=E.depthFar)),A.near=F.near=T.near=ae,A.far=F.far=T.far=Ce,(P!==A.near||O!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,O=A.far),T.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,A.layers.mask=T.layers.mask|F.layers.mask;let pe=$.parent,Ge=A.cameras;fe(A,pe);for(let qe=0;qe<Ge.length;qe++)fe(Ge[qe],pe);Ge.length===2?Y(A,T,F):A.projectionMatrix.copy(T.projectionMatrix),ve($,A,pe)};function ve($,ae,Ce){Ce===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(Ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Wo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let De=null;function et($,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let pe=!1;Ce.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let qe=0;qe<Ce.length;qe++){let tt=Ce[qe],Ht=null;if(f!==null)Ht=f.getViewport(tt);else{let Vt=d.getViewSubImage(u,tt);Ht=Vt.viewport,qe===0&&(e.setRenderTargetTextures(v,Vt.colorTexture,u.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(v))}let lt=S[qe];lt===void 0&&(lt=new sn,lt.layers.enable(qe),lt.viewport=new St,S[qe]=lt),lt.matrix.fromArray(tt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(tt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),qe===0&&(A.matrix.copy(lt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(lt)}let Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){let qe=d.getDepthInformation(Ce[0]);qe&&qe.isValid&&qe.texture&&E.init(e,qe,s.renderState)}}for(let Ce=0;Ce<_.length;Ce++){let pe=y[Ce],Ge=_[Ce];pe!==null&&Ge!==void 0&&Ge.update(pe,ae,c||o)}De&&De($,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let wt=new su;wt.setAnimationLoop(et),this.setAnimationLoop=function($){De=$},this.dispose=function(){}}},ds=new ci,k2=new bt;function G2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,iu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,ds.copy(y),ds.x*=-1,ds.y*=-1,ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(k2.makeRotationFromEuler(ds)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function V2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=_.program;i.updateUBOMapping(v,D);let R=e.render.frame;r[v.id]!==R&&(u(v),r[v.id]=R)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),D=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,T=y.length;R<T;R++){let F=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,A=F.length;S<A;S++){let P=F[S];if(f(P,R,S,D)===!0){let O=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],W=0;for(let j=0;j<H.length;j++){let Z=H[j],oe=E(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,O+W,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,W),W+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,y,D){let R=v.value,T=_+"_"+y;if(D[T]===void 0)return typeof R=="number"||typeof R=="boolean"?D[T]=R:D[T]=R.clone(),!0;{let F=D[T];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return D[T]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(v){let _=v.uniforms,y=0,D=16;for(let T=0,F=_.length;T<F;T++){let S=Array.isArray(_[T])?_[T]:[_[T]];for(let A=0,P=S.length;A<P;A++){let O=S[A],H=Array.isArray(O.value)?O.value:[O.value];for(let W=0,j=H.length;W<j;W++){let Z=H[W],oe=E(Z),Y=y%D,fe=Y%oe.boundary,ve=Y+fe;y+=fe,ve!==0&&D-ve<oe.storage&&(y+=D-ve),O.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=oe.storage}}}let R=y%D;return R>0&&(y+=D-R),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ta=class{constructor(e={}){let{canvas:t=Zf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=li,this.toneMappingExposure=1;let y=this,D=!1,R=0,T=0,F=null,S=-1,A=null,P=new St,O=new St,H=null,W=new de(0),j=0,Z=t.width,oe=t.height,Y=1,fe=null,ve=null,De=new St(0,0,Z,oe),et=new St(0,0,Z,oe),wt=!1,$=new Vr,ae=!1,Ce=!1,pe=new bt,Ge=new bt,qe=new I,tt=new St,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Vt(){return F===null?Y:1}let B=i;function Ln(b,U){return t.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){let U="webgl2";if(B=Ln(U,b),B===null)throw Ln(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let rt,ot,He,Pt,Be,x,M,z,Q,ee,J,Fe,me,_e,ct,ie,Ae,ze,Ve,Me,at,Qe,Ct,L;function ue(){rt=new r1(B),rt.init(),Qe=new B2(B,rt),ot=new jm(B,rt,e,Qe),He=new L2(B,rt),ot.reverseDepthBuffer&&u&&He.buffers.depth.setReversed(!0),Pt=new l1(B),Be=new A2,x=new N2(B,rt,He,Be,ot,Qe,Pt),M=new t1(y),z=new s1(y),Q=new mp(B),Ct=new Qm(B,Q),ee=new o1(B,Q,Pt,Ct),J=new h1(B,ee,Q,Pt),Ve=new c1(B,ot,x),ie=new e1(Be),Fe=new _2(y,M,z,rt,ot,Ct,ie),me=new G2(y,Be),_e=new S2,ct=new C2(rt),ze=new $m(y,M,z,He,J,f,l),Ae=new I2(y,J,ot),L=new V2(B,Pt,ot,He),Me=new Km(B,rt,Pt),at=new a1(B,rt,Pt),Pt.programs=Fe.programs,y.capabilities=ot,y.extensions=rt,y.properties=Be,y.renderLists=_e,y.shadowMap=Ae,y.state=He,y.info=Pt}ue();let q=new yc(y,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(Z,oe,!1))},this.getSize=function(b){return b.set(Z,oe)},this.setSize=function(b,U,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,oe=U,t.width=Math.floor(b*Y),t.height=Math.floor(U*Y),k===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Z*Y,oe*Y).floor()},this.setDrawingBufferSize=function(b,U,k){Z=b,oe=U,Y=k,t.width=Math.floor(b*k),t.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(De)},this.setViewport=function(b,U,k,G){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,U,k,G),He.viewport(P.copy(De).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,U,k,G){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,U,k,G),He.scissor(O.copy(et).multiplyScalar(Y).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(b){He.setScissorTest(wt=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){ve=b},this.getClearColor=function(b){return b.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(b=!0,U=!0,k=!0){let G=0;if(b){let N=!1;if(F!==null){let se=F.texture.format;N=se===Qc||se===$c||se===Jc}if(N){let se=F.texture.type,Ee=se===Ti||se===wi||se===Gr||se===nr||se===qc||se===Yc,Te=ze.getClearColor(),we=ze.getClearAlpha(),We=Te.r,Je=Te.g,xe=Te.b;Ee?(g[0]=We,g[1]=Je,g[2]=xe,g[3]=we,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=We,E[1]=Je,E[2]=xe,E[3]=we,B.clearBufferiv(B.COLOR,0,E))}else G|=B.COLOR_BUFFER_BIT}U&&(G|=B.DEPTH_BUFFER_BIT),k&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),ct.dispose(),Be.dispose(),M.dispose(),z.dispose(),J.dispose(),Ct.dispose(),L.dispose(),Fe.dispose(),q.dispose(),q.removeEventListener("sessionstart",bh),q.removeEventListener("sessionend",Th),rs.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let b=Pt.autoReset,U=Ae.enabled,k=Ae.autoUpdate,G=Ae.needsUpdate,N=Ae.type;ue(),Pt.autoReset=b,Ae.enabled=U,Ae.autoUpdate=k,Ae.needsUpdate=G,Ae.type=N}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ze(b){let U=b.target;U.removeEventListener("dispose",Ze),kt(U)}function kt(b){on(b),Be.remove(b)}function on(b){let U=Be.get(b).programs;U!==void 0&&(U.forEach(function(k){Fe.releaseProgram(k)}),b.isShaderMaterial&&Fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,G,N,se){U===null&&(U=Ht);let Ee=N.isMesh&&N.matrixWorld.determinant()<0,Te=rf(b,U,k,G,N);He.setMaterial(G,Ee);let we=k.index,We=1;if(G.wireframe===!0){if(we=ee.getWireframeAttribute(k),we===void 0)return;We=2}let Je=k.drawRange,xe=k.attributes.position,dt=Je.start*We,Ft=(Je.start+Je.count)*We;se!==null&&(dt=Math.max(dt,se.start*We),Ft=Math.min(Ft,(se.start+se.count)*We)),we!==null?(dt=Math.max(dt,0),Ft=Math.min(Ft,we.count)):xe!=null&&(dt=Math.max(dt,0),Ft=Math.min(Ft,xe.count));let It=Ft-dt;if(It<0||It===1/0)return;Ct.setup(N,G,Te,k,we);let En,mt=Me;if(we!==null&&(En=Q.get(we),mt=at,mt.setIndex(En)),N.isMesh)G.wireframe===!0?(He.setLineWidth(G.wireframeLinewidth*Vt()),mt.setMode(B.LINES)):mt.setMode(B.TRIANGLES);else if(N.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),He.setLineWidth(Pe*Vt()),N.isLineSegments?mt.setMode(B.LINES):N.isLineLoop?mt.setMode(B.LINE_LOOP):mt.setMode(B.LINE_STRIP)}else N.isPoints?mt.setMode(B.POINTS):N.isSprite&&mt.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)mt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))mt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Pe=N._multiDrawStarts,mi=N._multiDrawCounts,gt=N._multiDrawCount,Wn=we?Q.get(we).bytesPerElement:1,Cs=Be.get(G).currentProgram.getUniforms();for(let Rn=0;Rn<gt;Rn++)Cs.setValue(B,"_gl_DrawID",Rn),mt.render(Pe[Rn]/Wn,mi[Rn])}else if(N.isInstancedMesh)mt.renderInstances(dt,It,N.count);else if(k.isInstancedBufferGeometry){let Pe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,mi=Math.min(k.instanceCount,Pe);mt.renderInstances(dt,It,mi)}else mt.render(dt,It)};function vt(b,U,k){b.transparent===!0&&b.side===xt&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,oo(b,U,k),b.side=Yi,b.needsUpdate=!0,oo(b,U,k),b.side=xt):oo(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),p=ct.get(k),p.init(U),_.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let G=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let Ee=0;Ee<se.length;Ee++){let Te=se[Ee];vt(Te,k,N),G.add(Te)}else vt(se,k,N),G.add(se)}),_.pop(),p=null,G},this.compileAsync=function(b,U,k=null){let G=this.compile(b,U,k);return new Promise(N=>{function se(){if(G.forEach(function(Ee){Be.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){N(b);return}setTimeout(se,10)}rt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Vn=null;function pi(b){Vn&&Vn(b)}function bh(){rs.stop()}function Th(){rs.start()}let rs=new su;rs.setAnimationLoop(pi),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(b){Vn=b,q.setAnimationLoop(b),b===null?rs.stop():rs.start()},q.addEventListener("sessionstart",bh),q.addEventListener("sessionend",Th),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,F),p=ct.get(b,_.length),p.init(U),_.push(p),Ge.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ge),Ce=this.localClippingEnabled,ae=ie.init(this.clippingPlanes,Ce),m=_e.get(b,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let se=y.xr.getDepthSensingMesh();se!==null&&Ua(se,U,-1/0,y.sortObjects)}Ua(b,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,ve),lt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,lt&&ze.addToRenderList(m,b),this.info.render.frame++,ae===!0&&ie.beginShadows();let k=p.state.shadowsArray;Ae.render(k,b,U),ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let se=U.cameras;if(N.length>0)for(let Ee=0,Te=se.length;Ee<Te;Ee++){let we=se[Ee];xh(G,N,b,we)}lt&&ze.render(b);for(let Ee=0,Te=se.length;Ee<Te;Ee++){let we=se[Ee];wh(m,b,we,we.viewport)}}else N.length>0&&xh(G,N,b,U),lt&&ze.render(b),wh(m,b,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(y,b,U),Ct.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(p=_[_.length-1],ae===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ua(b,U,k,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){G&&tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ge);let Ee=J.update(b),Te=b.material;Te.visible&&m.push(b,Ee,Te,k,tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){let Ee=J.update(b),Te=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),tt.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),tt.copy(Ee.boundingSphere.center)),tt.applyMatrix4(b.matrixWorld).applyMatrix4(Ge)),Array.isArray(Te)){let we=Ee.groups;for(let We=0,Je=we.length;We<Je;We++){let xe=we[We],dt=Te[xe.materialIndex];dt&&dt.visible&&m.push(b,Ee,dt,k,tt.z,xe)}}else Te.visible&&m.push(b,Ee,Te,k,tt.z,null)}}let se=b.children;for(let Ee=0,Te=se.length;Ee<Te;Ee++)Ua(se[Ee],U,k,G)}function wh(b,U,k,G){let N=b.opaque,se=b.transmissive,Ee=b.transparent;p.setupLightsView(k),ae===!0&&ie.setGlobalState(y.clippingPlanes,k),G&&He.viewport(P.copy(G)),N.length>0&&ro(N,U,k),se.length>0&&ro(se,U,k),Ee.length>0&&ro(Ee,U,k),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function xh(b,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new jt(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?An:Ti,minFilter:gs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let se=p.state.transmissionRenderTarget[G.id],Ee=G.viewport||P;se.setSize(Ee.z,Ee.w);let Te=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(W),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),lt&&ze.render(k);let we=y.toneMapping;y.toneMapping=li;let We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ae===!0&&ie.setGlobalState(y.clippingPlanes,G),ro(b,k,G),x.updateMultisampleRenderTarget(se),x.updateRenderTargetMipmap(se),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let xe=0,dt=U.length;xe<dt;xe++){let Ft=U[xe],It=Ft.object,En=Ft.geometry,mt=Ft.material,Pe=Ft.group;if(mt.side===xt&&It.layers.test(G.layers)){let mi=mt.side;mt.side=Qt,mt.needsUpdate=!0,Rh(It,k,G,En,mt,Pe),mt.side=mi,mt.needsUpdate=!0,Je=!0}}Je===!0&&(x.updateMultisampleRenderTarget(se),x.updateRenderTargetMipmap(se))}y.setRenderTarget(Te),y.setClearColor(W,j),We!==void 0&&(G.viewport=We),y.toneMapping=we}function ro(b,U,k){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,se=b.length;N<se;N++){let Ee=b[N],Te=Ee.object,we=Ee.geometry,We=G===null?Ee.material:G,Je=Ee.group;Te.layers.test(k.layers)&&Rh(Te,U,k,we,We,Je)}}function Rh(b,U,k,G,N,se){b.onBeforeRender(y,U,k,G,N,se),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,U,k,G,b,se),N.transparent===!0&&N.side===xt&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,y.renderBufferDirect(k,U,G,N,b,se),N.side=Yi,N.needsUpdate=!0,y.renderBufferDirect(k,U,G,N,b,se),N.side=xt):y.renderBufferDirect(k,U,G,N,b,se),b.onAfterRender(y,U,k,G,N,se)}function oo(b,U,k){U.isScene!==!0&&(U=Ht);let G=Be.get(b),N=p.state.lights,se=p.state.shadowsArray,Ee=N.state.version,Te=Fe.getParameters(b,N.state,se,U,k),we=Fe.getProgramCacheKey(Te),We=G.programs;G.environment=b.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(b.isMeshStandardMaterial?z:M).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",Ze),We=new Map,G.programs=We);let Je=We.get(we);if(Je!==void 0){if(G.currentProgram===Je&&G.lightsStateVersion===Ee)return Fh(b,Te),Je}else Te.uniforms=Fe.getUniforms(b),b.onBeforeCompile(Te,y),Je=Fe.acquireProgram(Te,we),We.set(we,Je),G.uniforms=Te.uniforms;let xe=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xe.clippingPlanes=ie.uniform),Fh(b,Te),G.needsLights=af(b),G.lightsStateVersion=Ee,G.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Je,G.uniformsList=null,Je}function Ch(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ks.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Fh(b,U){let k=Be.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function rf(b,U,k,G,N){U.isScene!==!0&&(U=Ht),x.resetTextureUnits();let se=U.fog,Ee=G.isMeshStandardMaterial?U.environment:null,Te=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ki,we=(G.isMeshStandardMaterial?z:M).get(G.envMap||Ee),We=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Je=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),xe=!!k.morphAttributes.position,dt=!!k.morphAttributes.normal,Ft=!!k.morphAttributes.color,It=li;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(It=y.toneMapping);let En=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=En!==void 0?En.length:0,Pe=Be.get(G),mi=p.state.lights;if(ae===!0&&(Ce===!0||b!==A)){let Un=b===A&&G.id===S;ie.setState(G,b,Un)}let gt=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==mi.state.version||Pe.outputColorSpace!==Te||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==we||G.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==We||Pe.vertexTangents!==Je||Pe.morphTargets!==xe||Pe.morphNormals!==dt||Pe.morphColors!==Ft||Pe.toneMapping!==It||Pe.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Pe.__version=G.version);let Wn=Pe.currentProgram;gt===!0&&(Wn=oo(G,U,N));let Cs=!1,Rn=!1,Tr=!1,Dt=Wn.getUniforms(),ni=Pe.uniforms;if(He.useProgram(Wn.program)&&(Cs=!0,Rn=!0,Tr=!0),G.id!==S&&(S=G.id,Rn=!0),Cs||A!==b){He.buffers.depth.getReversed()?(pe.copy(b.projectionMatrix),$f(pe),Qf(pe),Dt.setValue(B,"projectionMatrix",pe)):Dt.setValue(B,"projectionMatrix",b.projectionMatrix),Dt.setValue(B,"viewMatrix",b.matrixWorldInverse);let Ui=Dt.map.cameraPosition;Ui!==void 0&&Ui.setValue(B,qe.setFromMatrixPosition(b.matrixWorld)),ot.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Rn=!0,Tr=!0)}if(N.isSkinnedMesh){Dt.setOptional(B,N,"bindMatrix"),Dt.setOptional(B,N,"bindMatrixInverse");let Un=N.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Dt.setValue(B,"boneTexture",Un.boneTexture,x))}N.isBatchedMesh&&(Dt.setOptional(B,N,"batchingTexture"),Dt.setValue(B,"batchingTexture",N._matricesTexture,x),Dt.setOptional(B,N,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",N._indirectTexture,x),Dt.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",N._colorsTexture,x));let wr=k.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&Ve.update(N,k,Wn),(Rn||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,Dt.setValue(B,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ni.envMap.value=we,ni.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(ni.envMapIntensity.value=U.environmentIntensity),Rn&&(Dt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&of(ni,Tr),se&&G.fog===!0&&me.refreshFogUniforms(ni,se),me.refreshMaterialUniforms(ni,G,Y,oe,p.state.transmissionRenderTarget[b.id]),Ks.upload(B,Ch(Pe),ni,x)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ks.upload(B,Ch(Pe),ni,x),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Dt.setValue(B,"center",N.center),Dt.setValue(B,"modelViewMatrix",N.modelViewMatrix),Dt.setValue(B,"normalMatrix",N.normalMatrix),Dt.setValue(B,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Un=G.uniformsGroups;for(let Ui=0,Ni=Un.length;Ui<Ni;Ui++){let Ph=Un[Ui];L.update(Ph,Wn),L.bind(Ph,Wn)}}return Wn}function of(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function af(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,U,k){Be.get(b.texture).__webglTexture=U,Be.get(b.depthTexture).__webglTexture=k;let G=Be.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let k=Be.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,k=0){F=b,R=U,T=k;let G=!0,N=null,se=!1,Ee=!1;if(b){let we=Be.get(b);if(we.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(B.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)x.setupRenderTarget(b);else if(we.__hasExternalTextures)x.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let xe=b.depthTexture;if(we.__boundDepthTexture!==xe){if(xe!==null&&Be.has(xe)&&(b.width!==xe.image.width||b.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(b)}}let We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ee=!0);let Je=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[U])?N=Je[U][k]:N=Je[U],se=!0):b.samples>0&&x.useMultisampledRTT(b)===!1?N=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?N=Je[k]:N=Je,P.copy(b.viewport),O.copy(b.scissor),H=b.scissorTest}else P.copy(De).multiplyScalar(Y).floor(),O.copy(et).multiplyScalar(Y).floor(),H=wt;if(He.bindFramebuffer(B.FRAMEBUFFER,N)&&G&&He.drawBuffers(b,N),He.viewport(P),He.scissor(O),He.setScissorTest(H),se){let we=Be.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,k)}else if(Ee){let we=Be.get(b.texture),We=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,k||0,We)}S=-1},this.readRenderTargetPixels=function(b,U,k,G,N,se,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){He.bindFramebuffer(B.FRAMEBUFFER,Te);try{let we=b.texture,We=we.format,Je=we.type;if(!ot.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&k>=0&&k<=b.height-N&&B.readPixels(U,k,G,N,Qe.convert(We),Qe.convert(Je),se)}finally{let we=F!==null?Be.get(F).__webglFramebuffer:null;He.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,G,N,se,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){let we=b.texture,We=we.format,Je=we.type;if(!ot.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-G&&k>=0&&k<=b.height-N){He.bindFramebuffer(B.FRAMEBUFFER,Te);let xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.bufferData(B.PIXEL_PACK_BUFFER,se.byteLength,B.STREAM_READ),B.readPixels(U,k,G,N,Qe.convert(We),Qe.convert(Je),0);let dt=F!==null?Be.get(F).__webglFramebuffer:null;He.bindFramebuffer(B.FRAMEBUFFER,dt);let Ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Jf(B,Ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,se),B.deleteBuffer(xe),B.deleteSync(Ft),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let G=Math.pow(2,-k),N=Math.floor(b.image.width*G),se=Math.floor(b.image.height*G),Ee=U!==null?U.x:0,Te=U!==null?U.y:0;x.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,k,0,0,Ee,Te,N,se),He.unbindTexture()},this.copyTextureToTexture=function(b,U,k=null,G=null,N=0){b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let se,Ee,Te,we,We,Je,xe,dt,Ft,It=b.isCompressedTexture?b.mipmaps[N]:b.image;k!==null?(se=k.max.x-k.min.x,Ee=k.max.y-k.min.y,Te=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,We=k.min.y,Je=k.isBox3?k.min.z:0):(se=It.width,Ee=It.height,Te=It.depth||1,we=0,We=0,Je=0),G!==null?(xe=G.x,dt=G.y,Ft=G.z):(xe=0,dt=0,Ft=0);let En=Qe.convert(U.format),mt=Qe.convert(U.type),Pe;U.isData3DTexture?(x.setTexture3D(U,0),Pe=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Pe=B.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let mi=B.getParameter(B.UNPACK_ROW_LENGTH),gt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Wn=B.getParameter(B.UNPACK_SKIP_PIXELS),Cs=B.getParameter(B.UNPACK_SKIP_ROWS),Rn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,we),B.pixelStorei(B.UNPACK_SKIP_ROWS,We),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je);let Tr=b.isDataArrayTexture||b.isData3DTexture,Dt=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let ni=Be.get(b),wr=Be.get(U),Un=Be.get(ni.__renderTarget),Ui=Be.get(wr.__renderTarget);He.bindFramebuffer(B.READ_FRAMEBUFFER,Un.__webglFramebuffer),He.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ni=0;Ni<Te;Ni++)Tr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,N,Je+Ni),b.isDepthTexture?(Dt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(U).__webglTexture,N,Ft+Ni),B.blitFramebuffer(we,We,se,Ee,xe,dt,se,Ee,B.DEPTH_BUFFER_BIT,B.NEAREST)):Dt?B.copyTexSubImage3D(Pe,N,xe,dt,Ft+Ni,we,We,se,Ee):B.copyTexSubImage2D(Pe,N,xe,dt,Ft+Ni,we,We,se,Ee);He.bindFramebuffer(B.READ_FRAMEBUFFER,null),He.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Dt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Pe,N,xe,dt,Ft,se,Ee,Te,En,mt,It.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,N,xe,dt,Ft,se,Ee,Te,En,It.data):B.texSubImage3D(Pe,N,xe,dt,Ft,se,Ee,Te,En,mt,It):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,N,xe,dt,se,Ee,En,mt,It.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,N,xe,dt,It.width,It.height,En,It.data):B.texSubImage2D(B.TEXTURE_2D,N,xe,dt,se,Ee,En,mt,It);B.pixelStorei(B.UNPACK_ROW_LENGTH,mi),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Wn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Cs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Rn),N===0&&U.generateMipmaps&&B.generateMipmap(Pe),He.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,G=null,N=0){return b.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,k,G,N)},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&x.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?x.setTextureCube(b,0):b.isData3DTexture?x.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?x.setTexture2DArray(b,0):x.setTexture2D(b,0),He.unbindTexture()},this.resetState=function(){R=0,T=0,F=null,He.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}},Le=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var na=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new I,ia=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ar=class extends Ri{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,Pr=new I,Xs=new I,qs=new I,Ys=new ce,Ir=new ce,cu=new bt,Co=new I,Dr=new I,Fo=new I,Fd=new ce,ul=new ce,Pd=new ce,Wr=class extends Wt{constructor(e=new ar){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vc(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new ia(i,3,0,!1)),Ws.setAttribute("uv",new ia(i,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),cu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Po(Co.set(-.5,-.5,0),qs,o,Xs,s,r),Po(Dr.set(.5,-.5,0),qs,o,Xs,s,r),Po(Fo.set(.5,.5,0),qs,o,Xs,s,r),Fd.set(0,0),ul.set(1,0),Pd.set(1,1);let a=e.ray.intersectTriangle(Co,Dr,Fo,!1,Pr);if(a===null&&(Po(Dr.set(-.5,.5,0),qs,o,Xs,s,r),ul.set(0,1),a=e.ray.intersectTriangle(Co,Fo,Dr,!1,Pr),a===null))return;let l=e.ray.origin.distanceTo(Pr);l<e.near||l>e.far||t.push({distance:l,point:Pr.clone(),uv:Wi.getInterpolation(Pr,Co,Dr,Fo,Fd,ul,Pd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Po(n,e,t,i,s,r){Ys.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ir.x=r*Ys.x-s*Ys.y,Ir.y=s*Ys.x+r*Ys.y):Ir.copy(Ys),n.copy(e),n.x+=Ir.x,n.y+=Ir.y,n.applyMatrix4(cu)}var _c=class extends vn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Pn,h=Pn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sa=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new bt,Id=new bt,Io=[],Dd=new xi,W2=new bt,Lr=new V,Ur=new $i,ra=class extends V{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,W2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),Dd.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),Ur.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Id.multiplyMatrices(i,Zs),Lr.matrixWorld=Id,Lr.raycast(e,Io);for(let o=0,a=Io.length;o<a;o++){let l=Io[o];l.instanceId=r,l.object=this,t.push(l)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new _c(new Float32Array(s*this.count),s,this.count,Zc,oi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var lr=class extends Ri{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ld=new bt,Ac=new Zo,Do=new $i,Lo=new I,Xr=class extends Wt{constructor(e=new Yt,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Ld.copy(s).invert(),Ac.copy(e.ray).applyMatrix4(Ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);Lo.fromBufferAttribute(d,m),Ud(Lo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,E=f;g<E;g++)Lo.fromBufferAttribute(d,g),Ud(Lo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ud(n,e,t,i,s,r,o){let a=Ac.distanceSqToPoint(n);if(a<t){let l=new I;Ac.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var In=class extends vn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new bt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(cn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(cn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},oa=class extends Jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends oa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Uo=new I,fl=new jc,pl=new jc,ml=new jc,Es=class extends Jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Uo.subVectors(s[0],s[1]).add(s[0]),c=Uo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),fl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),pl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),ml.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),pl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ml.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(fl.calc(l),pl.calc(l),ml.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function X2(n,e){let t=1-n;return t*t*e}function q2(n,e){return 2*(1-n)*n*e}function Y2(n,e){return n*n*e}function zr(n,e,t,i){return X2(n,e)+q2(n,t)+Y2(n,i)}function Z2(n,e){let t=1-n;return t*t*t*e}function J2(n,e){let t=1-n;return 3*t*t*n*e}function $2(n,e){return 3*(1-n)*n*n*e}function Q2(n,e){return n*n*n*e}function kr(n,e,t,i,s){return Z2(n,e)+J2(n,t)+$2(n,i)+Q2(n,s)}var Sc=class extends Jn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bc=class extends Jn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tc=class extends Jn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends Jn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xc=class extends Jn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Jn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y),zr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Nd(a,l.x,c.x,h.x,d.x),Nd(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},K2=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Es,CubicBezierCurve:Sc,CubicBezierCurve3:bc,EllipseCurve:oa,LineCurve:Tc,LineCurve3:wc,QuadraticBezierCurve:xc,QuadraticBezierCurve3:aa,SplineCurve:Rc});var Bn=class n extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},st=class n extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(f,2));function v(){let y=new I,D=new I,R=0,T=(t-e)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,P=A*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,W=H*l+a,j=Math.sin(W),Z=Math.cos(W);D.x=P*j,D.y=-A*i+m,D.z=P*Z,d.push(D.x,D.y,D.z),y.set(j,T,Z).normalize(),u.push(y.x,y.y,y.z),f.push(H,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],P=E[S+1][F],O=E[S+1][F+1],H=E[S][F+1];(e>0||S!==0)&&(h.push(A,P,H),R+=3),(t>0||S!==r-1)&&(h.push(P,O,H),R+=3)}c.addGroup(p,R,0),p+=R}function _(y){let D=g,R=new ce,T=new I,F=0,S=y===!0?e:t,A=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let O=0;O<=s;O++){let W=O/s*l+a,j=Math.cos(W),Z=Math.sin(W);T.x=S*Z,T.y=m*A,T.z=S*j,d.push(T.x,T.y,T.z),u.push(0,A,0),R.x=j*.5+.5,R.y=Z*.5*A+.5,f.push(R.x,R.y),g++}for(let O=0;O<s;O++){let H=D+O,W=P+O;y===!0?h.push(W,W+1,H):h.push(W+1,W,H),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},On=class n extends st{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cc=class n extends Yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,D=new I;for(let R=0;R<t.length;R+=3)f(t[R+0],_),f(t[R+1],y),f(t[R+2],D),l(_,y,D,v)}function l(v,_,y,D){let R=D+1,T=[];for(let F=0;F<=R;F++){T[F]=[];let S=v.clone().lerp(y,F/R),A=_.clone().lerp(y,F/R),P=R-F;for(let O=0;O<=P;O++)O===0&&F===R?T[F][O]=S:T[F][O]=S.clone().lerp(A,O/P)}for(let F=0;F<R;F++)for(let S=0;S<2*(R-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(T[F][A+1]),u(T[F+1][A]),u(T[F][A])):(u(T[F][A+1]),u(T[F+1][A+1]),u(T[F+1][A]))}}function c(v){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,D=p(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],D=o[v+4],R=Math.max(_,y,D),T=Math.min(_,y,D);R>.9&&T<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new I,_=new I,y=new I,D=new I,R=new ce,T=new ce,F=new ce;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),R.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),D.copy(v).add(_).add(y).divideScalar(3);let P=m(D);E(R,A+0,v,P),E(T,A+2,_,P),E(F,A+4,y,P)}}function E(v,_,y,D){D<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},cr=class n extends Cc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var yt=class n extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let R=D/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(R+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let _=h[p][v+1],y=h[p][v],D=h[p+1][v],R=h[p+1][v+1];(p!==0||o>0)&&f.push(_,y,R),(p!==i-1||l<Math.PI)&&f.push(y,D,R)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(E,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tn=class n extends Yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(E,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var hr=class n extends Yt{constructor(e=new aa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ce,h=new I,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(f,2));function E(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),p()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],D=o.binormals[_];for(let R=0;R<=s;R++){let T=R/s*Math.PI*2,F=Math.sin(T),S=-Math.cos(T);l.x=S*y.x+F*D.x,l.y=S*y.y+F*D.y,l.z=S*y.z+F*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let D=(s+1)*(_-1)+(y-1),R=(s+1)*_+(y-1),T=(s+1)*_+y,F=(s+1)*(_-1)+y;g.push(D,R,F),g.push(R,T,F)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new K2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ne=class extends Ri{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function No(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function j2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var dr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends dr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,a=2*t-i;break;case Bh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:o=e,l=2*i-t;break;case Bh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+v*o[c+D]+_*o[l+D]+y*o[d+D];return r}},Pc=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ic=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=No(t,this.TimeBufferType),this.values=No(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:No(e.times,Array),values:No(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case nc:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return nc;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&j2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ba,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=nc;var ys=class extends $n{constructor(e,t,i){super(e,t,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Go;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends $n{};Dc.prototype.ValueTypeName="color";var Lc=class extends $n{};Lc.prototype.ValueTypeName="number";var Uc=class extends dr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ji.slerpFlat(r,0,o,c-a,o,c,l);return r}},la=class extends $n{InterpolantFactoryMethodLinear(e){return new Uc(this.times,this.values,this.getValueSize(),e)}};la.prototype.ValueTypeName="quaternion";la.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends $n{constructor(e,t,i){super(e,t,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Go;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends $n{};Nc.prototype.ValueTypeName="vector";var Bc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},eg=new Bc,Oc=class{constructor(e){this.manager=e!==void 0?e:eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ie=class extends ur{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gl=new bt,Bd=new I,Od=new I,qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),Od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Od),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hc=class extends qr{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qn=class extends ur{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hd=new bt,Nr=new I,El=new I,zc=class extends qr{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Nr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Nr),El.copy(i.position),El.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(El),i.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd)}},Xe=class extends ur{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},kc=class extends qr{constructor(){super(new rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new kc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ca=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zd(){return 0}var eh="\\[\\]\\.:\\/",tg=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",ng="[^"+eh.replace("\\.","")+"]",ig=/((?:WC+[\/:])*)/.source.replace("WC",th),sg=/(WCOD+)?/.source.replace("WCOD",ng),rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),ag=new RegExp("^"+ig+sg+rg+og+"$"),lg=["material","materials","bones","map"],Gc=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tg,"")}static parseTrackName(e){let t=ag.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);lg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Gc;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);var fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cg=new rr(-1,1,1,-1,0,1),nh=class extends Yt{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}},hg=new nh,Er=class{constructor(e){this._mesh=new V(hg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _s=class extends Ci{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mr.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Er(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yr=class extends Ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},pa=class extends Ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ma=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _s(fa),this.copyPass.material.blending=ai,this.clock=new ca}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yr!==void 0&&(o instanceof Yr?i=!0:o instanceof pa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class n extends Ci{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new jt(r,o,{type:An});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new jt(r,o,{type:An});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=hu;this.highPassUniforms=mr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=fa;this.copyUniforms=mr.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new je,this.fsQuad=new Er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};yr.BlurDirectionX=new ce(1,0);yr.BlurDirectionY=new ce(0,1);var As=1280,Ms=720;function ke(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ih=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),hn=(n,e,t)=>n+(e-n)*t,zt=(n,e,t)=>{let i=ih((t-n)/(e-n));return i*i*(3-2*i)};var dg=n=>(n=ih(n),n*n*(3-2*n));function Ea(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=dg((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>hn(o,r[a],i)):hn(s,r,i)}return n[n.length-1][1]}var ug={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ce(As,Ms)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},fg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new de(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},ga=class{constructor(e){let t=this.r=new ta({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(As,Ms,!1),t.shadowMap.enabled=!0,t.shadowMap.type=Wc,t.toneMapping=li,t.outputColorSpace=Ki;let i=new or(As,Ms);i.type=wi,this.rt=new jt(As,Ms,{type:An,samples:2,depthTexture:i}),this.composer=new ma(t,new jt(As,Ms,{type:An})),this.dof=new _s(ug,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new yr(new ce(As/2,Ms/2),.45,.75,.82),this.grade=new _s(fg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function du(n,e,t,i=40){let s=new na;s.background=new de(t);let r=new sn(i,As/Ms,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function uu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var bn=1/420,sh=new Map;function Tn(n,e,t,i){if(sh.has(n))return sh.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new In(s);return o.colorSpace=Lt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,sh.set(n,o),o}var ft=n=>new Path2D(n);function nn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function Kn(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var pg={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function mg(n,e){return Tn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=ft("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");nn(t,i,Kn(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(ft("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(ft("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(ft("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=ft("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){nn(t,ft("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Kn(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(ft("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(ft("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(ft("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(ft("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(ft("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")nn(t,ft("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Kn(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(ft("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(ft("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(ft("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){nn(t,ft("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Kn(t,-60,0,60,120,n.a,n.b)),nn(t,ft("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Kn(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else nn(t,ft("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Kn(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(ft("M-22 26 L22 26 L0 64Z")),nn(t,ft("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function fu(n,e,t){return Tn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(nn(i,ft("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Kn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(nn(i,ft("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;nn(i,ft(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Kn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(ft(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(ft(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function gg(){return Tn("hand",90,100,n=>{n.translate(45,14);let e=ft("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");nn(n,e,Kn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function pu(n){return Tn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function Eg(){return Tn("foot",80,40,n=>{n.translate(26,6),nn(n,ft("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function yg(n="round"){return Tn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var Eu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function vg(n,e){return Tn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),Eu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function _g(n,e,t){return Tn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=ft("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");nn(i,s,Kn(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),nn(i,s,e);let r=ft("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");nn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),nn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=ft("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");nn(i,s,Kn(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),nn(i,l,"#E9E9EF")})})})}var mu=(n,e={})=>new je({map:n,alphaTest:.5,alphaToCoverage:!0,side:xt,...e}),gu=new Map,rh=new Map,Ag=[];function Mg(n){if(rh.has(n))return rh.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new In(t);return r.colorSpace=Lt,r.anisotropy=8,rh.set(n,r),r}function Sn(n,e,t,i,s,r=0,o,a=!1){let l=new Re(e*bn,t*bn);l.translate((e/2-i)*bn,(s-t/2)*bn,0);let c=mu(n);o.push(c);let h=new V(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=mu(Mg(n),{color:"#FFE9C8"});Ag.push(u);let f=new V(l,u);f.position.z=-.045-r,h.add(f)}let d=gu.get(n);return d||(d=new Qi({depthPacking:pr,map:n,alphaTest:.5,side:xt}),gu.set(n,d)),h.customDepthMaterial=d,h}function Sg(){return Tn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function bg(){return Tn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function oh(n={}){let e=pg[n.outfit||"hero"],t=n.outfit||"hero",i=new le,s=[],r=new le;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new le;_.position.set(p*34*bn,o*bn,v);let y=new le;y.position.y=-142*bn,_.add(Sn(pu(1),50,160,25,6,0,s)),y.add(Sn(pu(1),50,160,25,6,0,s));let D=Sn(Eg(),80,40,26,6,.001,s);D.position.y=-142*bn,p<0&&(D.scale.x=-1),y.add(D),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=Sn(mg(e,t),300,320,150,20,0,s);h.position.y=(a+4)*bn,r.add(h);for(let[m,p,v]of[["L",-1,-.006],["R",1,.006]]){let _=new le;_.position.set(p*(e.kind==="dress"?66:84)*bn,(a-24)*bn,v);let y=new le;y.position.y=-124*bn,_.add(Sn(fu(e,t,"u"),90,170,45,10,0,s)),y.add(Sn(fu(e,t,"f"),90,170,45,10,.001,s));let D=Sn(gg(),90,100,45,14,.002,s);D.position.y=-128*bn,D.scale.set(p>0?-.8:.8,.8,1),y.add(D),_.add(y),r.add(_),c[m]={u:_,f:y,hand:D}}let d=new le;if(d.position.set(0,(a+104)*bn,.02),r.add(d),n.hair){let m=Sn(_g(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Sn(yg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Sn(Tn("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let v=n.hairc||"#4a2c1a";p.fillStyle=v,p.fill(ft(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Sn(Tn("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(v=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(v*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(Eu)){let p=Sn(vg(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",d.add(p),u[m]=p}if(n.glasses){let m=Sn(Tn("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Sn(n.hat(Tn),300,300,150,150,.006,s);d.add(m)}let f=new V(new Re(1,.4),new je({map:Sg(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new V(new Re(2.1,3),new je({map:bg(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:yn,side:xt})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in u)u[p].visible=p===m},cheer(m,p=0,v=1){let _=m*6+p,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*p,c.L.f.rotation.z=-v[1]*p,c.R.u.rotation.z=_[0]*p,c.R.f.rotation.z=_[1]*p,l.L.th.rotation.z=-y[0]*p,l.L.shin.rotation.z=-y[1]*p,l.R.th.rotation.z=D[0]*p,l.R.shin.rotation.z=D[1]*p,d.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let R=m.squash||0;r.scale.set(1-R*.5,1+R,1)},walk(m,p=1,v=1){let _=m*6.4*p,y=Math.sin(_),D=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,p,v=0,_=1){i.position.set(m,v,p),i.scale.setScalar(_)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return E.pose(),E}function Se(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new In(i);return r.colorSpace=Lt,r.anisotropy=8,r}var Ss=(n,e={})=>new Ne({color:n,roughness:.88,metalness:0,...e});function w(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new V(new _n(n,e,t),typeof i=="string"?Ss(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function ut(n,e,t=1){let i=Se(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Wr(new ar({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:yn}));return s.scale.set(e,e,1),s}var yu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function Tg(n,e,t,i,s,r=.42){let o=ke(n),a=256*e,l=300*t,c,h=Se(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,f,28,10);for(let f=0;f<t;f++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,f*300+292,a,8)}),d=Se(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,p=g*300+60,v=144,_=196,y=o()<r,D=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,v+18,_+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+_+9,v+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+_+6,v+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,v,_),y||!s){let R=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=R,f.fillRect(m,p,26,_),f.fillRect(m+v-26,p,26,_)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+_),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+_),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+v/2-3,p,6,_),f.fillRect(m,p+_*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,p,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,p,6,_),u.fillRect(m,p+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Lt,{map:h,emissiveMap:d}}function ji(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=ke(n),u=new le,f=o*2.9+3.6,g=c||yu[Math.floor(d()*yu.length)],E=Math.max(2,Math.round(r/2.1)),m=Tg(n,E,o,g,l,e.lit??.42),p=new Ne({map:m.map,emissiveMap:m.emissiveMap,emissive:new de(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=Ss(g),_=[a>0?p:v,a>0?v:p,Ss("#2c2730"),v,v,v],y=new V(new _n(s,o*2.9,r),_);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(w(s+.5,.5,r+.5,"#3d3540",t,f+.25,i)),u.add(w(s+.3,.35,r+.3,g,t,3.6,i));let D=t+a*(s/2+.01);if(h){let R=Se(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),T=new V(new _n(.18,1.05,r-.3),[new Ne({map:R,emissiveMap:R,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),new Ne({map:R,emissiveMap:R,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),Ss("#222"),Ss("#222"),Ss("#222"),Ss("#222")]);T.position.set(D+a*.1,3.25,i),a>0&&(T.scale.z=-1),T.castShadow=!0,u.add(T);let F=Se(512,256,P=>{let O=P.createLinearGradient(0,0,0,256);O.addColorStop(0,h.win||"#F4C783"),O.addColorStop(1,"#D59A5C"),P.fillStyle=O,P.fillRect(0,0,512,256);let H=ke(n+9);for(let W=0;W<26;W++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(H()*6)],P.fillRect(H()*490,30+Math.floor(H()*3)*76,12+H()*26,52);for(let W of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,W,512,7)}),S=new Ne({map:F,emissiveMap:F,emissive:new de(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(w(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let A=new V(new Re(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(D+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(w(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=Se(512,128,H=>{for(let W=0;W<12;W++)H.fillStyle=W%2?h.awning:"#F4EEDF",H.fillRect(W*512/12,0,42.666666666666664,128)}),O=new V(new Re(r-.3,1.3),new Ne({map:P,side:xt,roughness:.9}));O.rotation.y=a*Math.PI/2,O.rotation.order="YXZ",O.rotation.x=-1,O.position.set(D+a*.55,2.56,i),O.castShadow=!0,u.add(O)}if(l){let P=new Xe(h.light||"#FFC88A",3.2,7,1.8);P.position.set(D+a*1.7,2.1,i),u.add(P)}}return u}function vu(n,e,t){let i=new V(new Re(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function wg(n="#A99D90"){let e=Se(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=ke(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=rn,e}function ya(n,e){let t=Se(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=ke(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=rn,t.repeat.set(1,12);let i=vu(9,240,new Ne({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=wg(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=vu(4.4,240,new Ne({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(w(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function va(n,e,t,i,s=!0,r=5.5){let o=new le;o.add(w(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(w(.26,.3,.26,"#15151b",e,.15,t));let a=w(.26,.4,.26,new Ne({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(w(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=ut("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new Xe("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var _u={};function dn(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new le;o.add(w(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=_u[a]||(_u[a]=Se(512,512,c=>{let h=ke(r%3+3),d=(u,f,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,v=g*(.86+.14*Math.sin(p*5+u)+h()*.05);c.lineTo(u+Math.cos(p)*v,f+Math.sin(p)*v)}c.fill()};for(let[u,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,f,g,s[0]);for(let[u,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,f,g,s[1]);for(let[u,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,f,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new V(new Re(3.6*i,3.6*i),new Ne({map:l,alphaTest:.5,side:xt,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Qi({depthPacking:pr,map:l,alphaTest:.5,side:xt}),o.add(h)}return n.add(o),o}function jn(n,e,t,i,s,r,o=3,a=0){let l=Se(1600,900,h=>{h.clearRect(0,0,1600,900);let d=ke(o);for(let u=0;u<3;u++)for(let f=-40;f<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(f,900-E,g,E),d()<.2&&h.fillRect(f+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new V(new Re(t,i),new je({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Tt(n,e,t,i,s){let r=Se(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new V(new Re(t,i),new je({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var C=(n,e={})=>new Ne({color:n,roughness:.85,...e});function Oe(n,e,t,i={}){let s=new V(new Re(e,t),new je({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:xt,color:i.color||"#fff",blending:i.add?yn:Xi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Qi({depthPacking:pr,map:n,alphaTest:.5,side:xt})),s}function hi(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var ah={value:0};function _a(n="#8E3D30",e=4,t=3){let i=Se(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=ke(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=rn,i.repeat.set(e,t),i}function Au(n="#A59383",e=12,t=12){let i=Se(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=ke(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=rn,i.repeat.set(e,t),i}var Mu=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function xg(n,e){let[t,i,s,r]=Mu[n];return Se(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function lh(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=ke(o),l={};for(let c of e){let h=Math.floor(a()*Mu.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=xg(d,h),f=new je({map:u,alphaTest:.5,side:xt,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=ah,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new ra(new Re(i*.5,i),f,l[c].length),E=new Wt;l[c].forEach((m,p)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(p,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function wn(n,e=2600,t=300,i=1){let s=ke(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,f=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(f)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(f)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Yt;a.setAttribute("position",new Kt(r,3)),a.setAttribute("color",new Kt(o,3));let l=Se(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new lr({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Xr(a,c);return h.frustumCulled=!1,n.add(h),h}function Fi(n,e,t="#6D4A33"){let i=Se(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=ke(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=rn,i.repeat.set(n/5,e/5);let s=new V(new Re(n,e),new Ne({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function di(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Se(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=rn,r.repeat.set(n/s*4,e/s*4);let o=new V(new Re(n,e),new Ne({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function bs(n,e,t="#FFD9A0",i=.22){let s=Se(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new V(new Re(n,e),new je({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:yn,side:xt,fog:!1}))}function ch(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new le,a=new V(new st(.3,.22,.5,20),C(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Se(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Oe(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function hh(n,e,t,i="#2A1E18"){let s=new le;s.add(w(n+.08,e+.08,.04,i,0,0,0));let r=Se(Math.round(n*400),Math.round(e*400),t),o=new V(new Re(n,e),new Ne({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Ut(n,e,t,i=1.2){return new V(new Re(n,e),new Ne({color:"#000",emissive:t,emissiveIntensity:i}))}function nt(n,e,t,i=10,s=60){let r=new fr(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function Zr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Le(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Tt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),jn(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=_a(t,2,2),a=()=>new Ne({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,E,m])=>n.add(w(E,m,.3,a(),f,g,-3)));for(let[f,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(w(E,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(w(18,5.2,.3,a(),0,2.6,-3));n.add(Fi(18,12,s));let l=hh(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(ch(4.4,0,-2.4,1.1)),n.add(ch(-5,0,-2.4,.9,"#36AEA2")),n.add(new Ie(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=nt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new Xe("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new V(new st(.18,.3,.34,24),new Ne({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(w(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=ut("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var Su=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Jr(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Le(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Tt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),jn(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),ya(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(ji(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:Su[(a+i)%5]})),n.add(ji(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:Su[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)dn(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),va(n,-5,-3-l*12,1,t||r);n.add(new Ie(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(nt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var te=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},it=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},pt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},vr={perro:[520,440,n=>{te(n,250,300,150,90,"#C98E5E"),te(n,250,330,100,50,"#E9C49A"),it(n,120,330,34,100,14,"#B5784A"),it(n,340,330,34,100,14,"#B5784A"),it(n,180,340,34,90,14,"#C98E5E"),it(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),te(n,180,170,110,100,"#C98E5E"),te(n,100,140,40,80,"#8A5A34",-.3),te(n,262,140,40,80,"#8A5A34",.3),te(n,180,220,54,40,"#E9C49A"),te(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{te(n,250,300,150,90,"#C9A07E"),te(n,250,330,100,50,"#EEDCC4"),it(n,120,330,34,100,14,"#B5906A"),it(n,340,330,34,100,14,"#B5906A"),it(n,180,340,34,90,14,"#C9A07E"),it(n,300,340,34,90,14,"#C9A07E"),te(n,180,170,110,100,"#C9A07E"),te(n,100,140,40,80,"#9A7A5A",-.3),te(n,262,140,40,80,"#9A7A5A",.3),te(n,180,220,60,46,"#F4F0E8"),te(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{te(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),te(n,180,170,100,92,"#E9853A"),pt(n,[[96,120],[110,30],[160,100]],"#E9853A"),pt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();te(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{te(n,150,260,80,130,"#3FA34D"),te(n,150,140,80,80,"#3FA34D"),pt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),te(n,150,300,56,70,"#F2C14E"),pt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),te(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{te(n,170,190,130,80,"#8D94A8"),te(n,90,110,56,52,"#7A8296"),te(n,120,150,40,26,"#5FA898",.3),pt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),te(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{te(n,150,130,70,22,"#3A3040"),te(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();te(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),te(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{te(n,150,260,90,120,"#C9A06A"),te(n,150,290,56,80,"#EBD3A8"),te(n,150,120,74,70,"#C9A06A"),te(n,100,70,18,14,"#A87A44"),te(n,200,70,18,14,"#A87A44"),te(n,150,156,14,10,"#1A1A24"),it(n,92,200,26,70,12,"#A87A44"),it(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{te(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);te(n,64,130,46,44,"#1A1A24"),te(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),te(n,200,64,54,30,"rgba(230,246,255,.8)",.3),pt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{te(n,300,160,250,80,"#6F9FC4"),te(n,300,200,200,40,"#D8E8F4"),pt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),pt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),pt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),pt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{te(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])it(n,e,360,70,160,20,"#8A8A98");te(n,170,200,120,110,"#9A9AA8"),te(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),pt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{it(n,20,60,560,220,110,"#4A5A6E"),te(n,600,180,220,90,"#4A5A6E"),pt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),it(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{te(n,170,230,120,100,"#FBF7EC"),te(n,120,120,66,64,"#FBF7EC"),pt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),pt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),te(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),te(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{te(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])te(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])it(n,e,300,50,150,16,"#EDE6D4");te(n,140,160,100,92,"#FBF7EC"),te(n,120,220,70,46,"#F2B4C0"),pt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),pt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{te(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])it(n,e,260,44,90,14,"#E890A4");te(n,120,170,34,24,"#E06A84"),pt(n,[[160,70],[150,30],[196,70]],"#E890A4"),pt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{te(n,230,320,170,170,"#2E2E38"),te(n,230,160,110,104,"#2E2E38"),te(n,230,190,70,56,"#5A5A68"),it(n,40,260,70,240,30,"#2E2E38"),it(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{it(n,160,120,70,560,30,"#F2C14E"),te(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])it(n,e,760,30,140,12,"#E2A83A");te(n,190,110,80,60,"#F2C14E"),it(n,160,20,12,50,6,"#8A5A2A"),it(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{te(n,300,260,190,100,"#8A8E9A"),te(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])it(n,e,320,36,100,14,"#7A7E8A");te(n,140,170,96,90,"#8A8E9A"),pt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),pt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),pt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{te(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])it(n,e,330,44,120,16,"#D29A30");te(n,170,200,150,150,"#A8642A"),te(n,170,210,96,92,"#E2A83A"),te(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{te(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{te(n,230,190,60,46,"#3A2A2A"),te(n,150,180,40,34,"#3A2A2A"),te(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{te(n,300,300,170,80,"#B5784A"),te(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])it(n,e,330,26,180,12,"#9A6238");it(n,120,120,60,200,26,"#B5784A"),te(n,130,110,70,56,"#B5784A"),te(n,80,130,30,22,"#3A2A22"),pt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),te(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{te(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])it(n,e,360,34,190,14,"#4A3222");it(n,110,150,90,200,36,"#5A3E2A"),te(n,110,160,80,66,"#5A3E2A"),te(n,60,200,54,46,"#6A4A34"),te(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{te(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)pt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])it(n,e,250,40,90,14,"#4A3A30");te(n,90,200,70,60,"#5E4A3E"),te(n,30,220,34,28,"#7A6050"),pt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),pt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{te(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])it(n,e,320,34,230,14,"#7A4A2E");it(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),it(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),pt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},Aa={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(Aa,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in Aa)vr[n][3]=Aa[n][0],vr[n][4]=Aa[n][1];vr.pato=[380,400,n=>{te(n,210,280,150,100,"#F6D44A"),te(n,290,250,70,50,"#E8BC30",-.4),te(n,130,140,86,82,"#F6D44A"),te(n,40,160,56,22,"#F2913A"),te(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),pt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];vr.dragon=[480,440,n=>{te(n,250,300,140,110,"#7BC86A"),te(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)pt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");te(n,380,210,80,50,"#9AD884",-.6),te(n,130,160,100,92,"#7BC86A"),te(n,70,190,46,34,"#9AD884"),pt(n,[[100,80],[90,30],[130,74]],"#F2913A"),pt(n,[[160,76],[170,26],[190,80]],"#F2913A"),it(n,160,380,40,56,18,"#6AB05A"),it(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];vr.caballoB=[620,560,n=>{te(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])it(n,e,320,34,230,14,"#E4DED2");it(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),it(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),pt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Ma={},bu=n=>Ma["e"+n]||(Ma["e"+n]=Se(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function Tu(n,e={}){let[t,i,s,r,o,a]=vr[n],l=Ma[n]||(Ma[n]=Se(t,i,s)),c=a*i/t,h=new le,d=new le;h.add(d);let u=Oe(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let f=new V(new Re(o*a,o*a*.5),new je({map:bu("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(f);let g=new V(new Bn(a*.45,24),new je({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){f.material.map=bu(m)},face(m){let p=new I;h.getWorldPosition(p),d.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){u.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,v=0,_=1){return h.position.set(m,v,p),h.scale.setScalar(_),E}};return E}var es=(n,e,t=200,i=200,s)=>{let r=new V(new Re(t,i),s?new Ne({map:s,roughness:.95}):C(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},dh=(n,e=1)=>{n.add(new Ie("#E9EEFF","#B08A6A",1.05*e)),n.add(nt("#FFD29A",3*e,[-14,16,10],20,70))},be={sala:(n,e)=>Zr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{Zr(n,{wall:"#9A4632",night:e.night}),n.add(w(2.4,.45,3.2,C("#6B4A33"),-1.7,.25,-1.4)),n.add(w(2.3,.3,3,C("#F3EEE4"),-1.7,.6,-1.4)),n.add(w(2.38,.22,2,C("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(w(.8,.22,.5,C("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Jr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Le(e.dusk?"#E8A880":"#F2D8B8",.02),Tt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),jn(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),es(n,"#7A9A50");for(let t=0;t<12;t++)dn(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(w(2.4,.1,.5,C("#8E6242"),-3.4,.5,-2.2)),n.add(w(2.4,.5,.08,C("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)va(n,-6+t*6,-4,1,!!e.dusk);n.add(new Ie("#E9EEFF","#B08A6A",1)),n.add(nt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Jr(n,{seed:e.seed||2}),es(n,"",60,60,Au("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Le("#F2D8B8",.012),Tt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),es(n,"#8AAA58");let t=new le;t.add(w(6,4,5,C("#B5402E"),0,2,0));let i=new V(new st(.01,4.4,2.2,4),C("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(w(2,2.6,.1,C("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(w(.1,1,.1,C("#C9A06A"),-10+s*1.3,.5,-4));n.add(w(20,.08,.06,C("#C9A06A"),0,.9,-4)),n.add(w(20,.08,.06,C("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)dn(n,6+s*3,-16-s%2*3,1.6,void 0,s);dh(n)},sabana:(n,e)=>{n.fog=new Le("#F2C890",.01),Tt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=ut("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),es(n,"#C8A858");for(let i=0;i<6;i++){let s=new le;s.add(w(.3,3,.3,C("#5A3A22"),0,1.5,0));let r=new V(new st(2.6,2.2,.6,12),C("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Ie("#FFE8C8","#8A6A3A",1)),n.add(nt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Le("#F2E2C0",.012),Tt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),es(n,"#B8B070");for(let t=0;t<14;t++){let i=new V(new yt(.55,16,10,0,Math.PI*2,0,Math.PI/2),C("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}dh(n)},mar:(n,e)=>{Rg(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Le(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=es(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=ke(5);for(let r=0;r<30;r++){let o=new V(new On(.2+s()*.3,.8+s()*1.4,7),C(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=bs(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=ut("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Ie("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(nt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Le("#162238",.04),n.add(di(16,20,"#2A3348","#232B3E",6)),n.add(w(16,6,.3,C("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Ut(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Ut(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Se(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new V(new Re(2.5,1.3),new je({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Ie("#6E86C8","#101420",.8)),n.add(nt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Le("#1E2236",.02),es(n,"#2F4A7A"),n.add(w(30,10,.3,C("#E8E2D2"),0,5,-8));let t=Se(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Oe(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new V(new tn(4,.35,10,48),C("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new Xe("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Ie("#E8E8FF","#3A3A50",.9)),n.add(nt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Le("#E6E2D6",.03),n.add(di(9,40));for(let i of[-1,1]){n.add(w(.7,4.2,30,C("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(w(1.2,.05,30,C("#DDE0E4"),i*3,.5+s*.9,-10))}let t=ke(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(w(.3,.3,.4,C(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Ut(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Ie("#FFFFFF","#B9B3A6",1)),n.add(nt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{be.parque(n,{});for(let t=0;t<12;t++)n.add(w(.08,1.4,.08,C("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(w(8,.08,.08,C("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{Zr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Le("#8A8070",.03),Tt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),es(n,"#8A8070");let t=ke(8);for(let i=0;i<40;i++){let s=w(.4+t()*1.6,.3+t()*1,.4+t()*1.4,C(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}dh(n,.8)}};function Rg(n,e){n.background=new de(e)}function Cg(n,e={}){let t=oh({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var Fg=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function wu(n,e,t){let i=du(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(be[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?Cg(s,a):(()=>{let c=Tu(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{ah.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Ea(t.cam.map(([g,E])=>[g,E]),l),u=Ea(t.cam.map(([g,,E])=>[g,E]),l);uu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let p=g.move(l);E.root.position.set(p[0],p[1],p[2])}E.face(c),E.eye(Fg(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,v])=>l>=p&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Ea(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function xu(n,e,t,i="#E8667F"){n.add(w(2.2,.45,3,C("#6B4A33"),e,.25,t)),n.add(w(2.1,.3,2.8,C("#F3EEE4"),e,.6,t)),n.add(w(2.18,.2,1.9,C(i,{roughness:.9}),e,.8,t+.5)),n.add(w(2.2,1.3,.16,C("#5A3C28"),e,.9,t-1.55)),n.add(w(.8,.2,.45,C("#FFFFFF"),e-.5,.82,t-1.1)),n.add(w(.8,.2,.45,C("#F6E6C8"),e+.5,.82,t-1.1))}function Ru(n,e=Math.PI/2){n.root.rotation.z=e}function Cu(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return Se(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function uh(n,e="#F2C14E",t=140,i=256,s=200){return Se(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}var Sa=[0,1.96,4.08,5.96,9.56,16.06,20.92,23.32,25.8,28.76,32.56,40.18,43.18,44.48,47.62,53.8,62.32,66.64,69.06,78.04,82.82,92.98,97.64,99.1,105.04,111.76,117.12,123.44,132.3,145.54,151.28,152.76,163.46,169.86,171.1,174.76,185.14,192.56,205.7,209.78,214.74,220.88,225.56,228.18,235.02,241.78,249.48,255.82,257.16,267.52,272.68,276.58,280.8,283.46,288.86,292,294.04,298.9,303.38,307.36,318.1,322.72,324.2,331.52,339.18,355.68,358.16,366.56,371.46,372.92,379.38,383.48,385.66,390.08,399.12,402.58,405.52,417.26,420.9,430.28,436.58,437.94,447.92,454.02,455.5,461.16,466.7,475.38,479.76,486.86,488.52,495.84,504.04,508.82,512.04],Pg=[["es",0],["miercoles",.2],["por",.72],["la",.98],["noche",1.12],["manana",1.96],["es",2.52],["el",3.02],["dia",3.24],["llevas",4.08],["anos",4.36],["esperandolo",4.72],["manana",5.96],["por",6.68],["fin",6.88],["sale",7.64],["gta",7.88],["6",8.36],["lo",9.56],["tienes",9.78],["todo",10.04],["planeado",10.36],["la",11.4],["consola",11.5],["actualizada",11.92],["los",13],["mandos",13.12],["cargados",13.44],["las",14.38],["patatas",14.5],["compradas",14.88],["tus",16.06],["amigos",16.14],["y",16.44],["tu",16.66],["habeis",16.8],["hecho",17.14],["un",17.36],["pacto",17.52],["manana",18.32],["nadie",19.28],["sale",19.48],["de",19.88],["casa",20.06],["y",20.92],["entonces",21.08],["vibra",21.92],["el",22.34],["movil",22.46],["es",23.32],["un",23.46],["mensaje",23.6],["de",24.5],["tu",24.7],["crush",24.84],["oye",25.8],["te",26.5],["apetece",26.58],["quedar",27],["manana",27.2],["por",27.54],["la",27.8],["tarde",27.92],["manana",28.76],["el",29.68],["mismo",29.98],["dia",30.38],["que",30.74],["sale",30.9],["gta",31.14],["6",31.58],["y",32.56],["antes",32.86],["de",33.1],["decidir",33.26],["que",33.68],["haces",33.88],["si",34.66],["te",34.82],["gustan",34.92],["estas",35.22],["historias",35.44],["de",35.98],["y",36.62],["si",36.72],["suscribete",37.42],["al",37.98],["canal",38.12],["y",38.38],["activa",38.66],["la",39.04],["campanita",39.14],["y",40.18],["ahora",40.3],["si",40.48],["vamos",41.14],["a",41.4],["ver",41.66],["que",41.82],["pasa",42.02],["once",43.18],["de",43.5],["la",43.62],["noche",43.72],["miras",44.48],["el",44.9],["mensaje",45],["lo",45.92],["lees",46.02],["diez",46.32],["veces",46.66],["escribes",47.62],["si",48.4],["lo",49.14],["borras",49.32],["escribes",50.04],["es",51],["que",51.2],["manana",51.36],["lo",51.66],["borras",52.56],["tambien",52.88],["en",53.8],["el",53.98],["grupo",54.08],["de",54.26],["tus",54.46],["amigos",54.58],["el",55.24],["chat",55.38],["arde",55.64],["queda",56.14],["una",56.78],["hora",56.98],["yo",57.68],["he",57.88],["dormido",57.96],["la",58.26],["siesta",58.44],["para",58.74],["aguantar",58.96],["el",59.82],["que",60.02],["salga",60.14],["de",60.42],["casa",60.54],["manana",60.68],["es",61.04],["un",61.34],["traidor",61.5],["y",62.32],["tu",62.54],["con",63.14],["el",63.22],["pulgar",63.34],["encima",63.66],["de",64.06],["la",64.22],["pantalla",64.32],["sin",65.08],["saber",65.3],["que",65.64],["hacer",65.84],["porque",66.64],["esto",66.92],["no",67.22],["es",67.52],["cualquier",67.76],["juego",67.98],["cuando",69.06],["rockstar",69.26],["publico",69.74],["el",70.22],["primer",70.32],["trailer",70.58],["en",70.98],["diciembre",71.36],["de",71.8],["2023",71.96],["tuvo",73.12],["unos",73.4],["90",73.68],["millones",74.26],["de",74.64],["visitas",74.94],["en",75.34],["youtube",75.52],["en",75.82],["solo",76.12],["24",76.38],["horas",77.04],["guinness",78.04],["lo",78.5],["registro",78.68],["como",79.18],["el",79.36],["anuncio",79.5],["de",79.86],["un",79.98],["videojuego",80.12],["mas",80.66],["visto",81.02],["en",81.36],["su",81.56],["primer",81.68],["dia",81.96],["y",82.82],["luego",83],["vinieron",83.28],["los",83.96],["retrasos",84.18],["primero",84.78],["iba",85.6],["a",85.82],["salir",85.94],["en",86.14],["2025",86.36],["luego",87.68],["en",88.28],["mayo",88.36],["de",88.6],["2026",88.78],["y",90.1],["al",90.28],["final",90.38],["el",91.04],["19",91.14],["de",91.66],["noviembre",91.92],["anos",92.98],["esperando",93.38],["y",94.62],["justo",94.8],["ese",95.1],["dia",95.34],["ella",96.04],["te",96.28],["escribe",96.44],["doce",97.64],["de",98.04],["la",98.18],["noche",98.28],["el",99.1],["juego",99.22],["se",99.48],["desbloquea",99.74],["tus",100.82],["amigos",100.94],["mandan",101.26],["fotos",101.68],["de",101.94],["la",102.18],["pantalla",102.26],["de",102.64],["inicio",102.82],["tu",103.64],["tambien",103.76],["lo",104.02],["pones",104.24],["y",105.04],["es",105.28],["increible",105.48],["el",107.06],["sol",107.22],["la",108],["playa",108.1],["los",108.9],["coches",109.04],["durante",110],["un",110.36],["rato",110.52],["te",110.78],["olvidas",110.96],["de",111.4],["todo",111.54],["pero",111.76],["el",112.48],["movil",112.66],["sigue",112.94],["ahi",113.3],["en",113.96],["la",114.06],["mesa",114.16],["con",114.9],["el",115.06],["mensaje",115.18],["sin",115.66],["contestar",115.9],["y",117.12],["sabes",117.26],["que",117.5],["es",117.76],["lo",117.94],["curioso",118.06],["que",118.96],["una",119.1],["parte",119.28],["enorme",119.58],["de",120.06],["la",120.28],["emocion",120.38],["de",120.8],["gta",120.98],["6",121.28],["ya",121.7],["la",122.2],["has",122.34],["vivido",122.54],["en",123.44],["2010",123.68],["el",124.68],["investigador",124.72],["jeroen",125.3],["nawijn",125.74],["en",126.34],["los",126.44],["paises",126.56],["bajos",127],["estudio",127.7],["a",128.12],["mas",128.26],["de",128.4],["1500",128.58],["personas",128.92],["antes",129.78],["y",130.32],["despues",130.66],["de",131.04],["sus",131.18],["vacaciones",131.32],["y",132.3],["descubrio",132.52],["que",132.94],["la",133.1],["felicidad",133.22],["mas",133.7],["grande",133.96],["no",134.34],["llegaba",134.64],["durante",135.02],["el",135.36],["viaje",135.54],["llegaba",136.34],["antes",136.8],["las",137.88],["semanas",138.08],["de",138.5],["esperarlo",138.7],["la",139.22],["ilusion",139.68],["de",140.18],["lo",140.34],["que",140.44],["iba",140.56],["a",140.76],["pasar",140.88],["al",141.74],["volver",141.92],["la",142.58],["felicidad",142.74],["regresaba",143.24],["enseguida",143.84],["a",144.4],["lo",144.52],["normal",144.6],["tu",145.54],["llevas",145.7],["anos",146],["con",146.4],["esa",146.74],["ilusion",146.96],["y",147.92],["el",148.06],["juego",148.18],["manana",148.46],["seguira",149.18],["ahi",150.18],["una",151.28],["de",151.54],["la",151.7],["madrugada",151.78],["contestas",152.76],["por",153.32],["fin",153.5],["a",154.26],["que",154.34],["hora",154.46],["ella",155.24],["responde",155.46],["enseguida",156.02],["como",156.78],["si",156.94],["estuviera",157.06],["esperando",157.46],["con",157.84],["el",158.14],["movil",158.26],["en",158.54],["la",158.68],["mano",158.78],["a",159.46],["las",159.6],["cinco",159.72],["en",160.34],["el",160.54],["parque",160.64],["y",161.44],["una",161.6],["carita",161.82],["sonriente",162.24],["el",163.46],["corazon",163.6],["te",164.04],["va",164.36],["a",164.54],["mil",164.68],["y",165.42],["tus",165.56],["amigos",165.68],["en",166.32],["el",166.44],["grupo",166.54],["por",166.76],["que",167.34],["estas",167.52],["en",167.72],["linea",167.92],["y",168.16],["no",168.32],["estas",168.44],["jugando",168.62],["ocho",169.86],["de",170.14],["la",170.3],["manana",170.4],["has",171.1],["dormido",171.38],["tres",171.8],["horas",172.12],["tienes",172.84],["unas",173.2],["ojeras",173.38],["enormes",173.8],["y",174.76],["en",174.92],["el",175.02],["instituto",175.12],["nadie",175.64],["habla",176.1],["de",176.54],["otra",176.68],["cosa",176.86],["en",177.62],["el",177.78],["pasillo",177.88],["en",178.7],["clase",178.82],["en",179.6],["la",179.7],["fila",179.84],["de",180.14],["la",180.24],["cafeteria",180.32],["todo",181.36],["el",181.56],["mundo",181.78],["ha",182.04],["jugado",182.2],["todo",183.02],["el",183.26],["mundo",183.44],["cuenta",183.74],["cosas",184.12],["y",185.14],["ahi",185.34],["llega",185.5],["tu",185.86],["gran",186.12],["miedo",186.36],["los",187.34],["spoilers",187.5],["si",188.72],["hoy",188.94],["no",189.1],["juegas",189.2],["manana",189.88],["te",190.28],["lo",190.58],["van",190.7],["a",190.84],["destripar",190.96],["todo",191.44],["pero",192.56],["aqui",192.82],["la",193.1],["ciencia",193.4],["tiene",193.82],["una",194.26],["sorpresa",194.46],["en",194.9],["2011",195.7],["dos",196.72],["investigadores",196.82],["de",197.52],["la",197.74],["universidad",197.84],["de",198.38],["california",198.52],["en",199.02],["san",199.22],["diego",199.36],["jonathan",200.06],["leavitt",200.28],["y",200.88],["nicholas",201.08],["christenfeld",201.36],["dieron",202.44],["a",202.68],["un",202.82],["grupo",202.92],["de",203.1],["estudiantes",203.32],["varios",203.78],["relatos",204.24],["cortos",204.78],["a",205.7],["unos",205.86],["les",206],["contaron",206.3],["el",206.74],["final",206.92],["antes",207.18],["de",207.56],["empezar",207.72],["a",208.62],["otros",208.72],["no",208.96],["el",209.78],["resultado",209.96],["las",210.92],["historias",211.1],["con",211.56],["spoiler",211.76],["gustaron",212.12],["igual",212.7],["o",213.06],["incluso",213.38],["mas",213.82],["saber",214.74],["como",215.04],["acaba",215.26],["no",215.58],["estropea",215.88],["el",216.36],["viaje",216.46],["a",217.22],["veces",217.34],["lo",217.56],["disfrutas",217.8],["mas",218.3],["porque",218.88],["te",219.08],["fijas",219.26],["en",219.64],["los",219.74],["detalles",219.88],["asi",220.88],["que",221.16],["respira",221.8],["los",222.3],["spoilers",222.96],["no",223.42],["te",223.96],["van",224.16],["a",224.38],["matar",224.48],["diez",225.56],["de",225.96],["la",226.08],["manana",226.18],["el",227.1],["recreo",227.24],["la",228.18],["ves",228.38],["al",228.56],["otro",228.74],["lado",228.92],["del",229.18],["patio",229.4],["ella",230.26],["te",230.46],["mira",230.64],["sonrie",231.54],["y",232.42],["se",232.58],["pone",232.74],["roja",232.98],["tu",234],["tambien",234.12],["tu",235.02],["mejor",235.14],["amigo",235.42],["te",235.66],["agarra",235.92],["del",236.24],["brazo",236.38],["dime",237.26],["que",237.44],["no",237.64],["vas",237.78],["a",237.94],["quedar",238.04],["con",238.22],["ella",238.48],["hoy",238.66],["hoy",239.32],["llevamos",239.98],["anos",240.32],["esperando",240.7],["y",241.78],["tu",241.98],["le",242.1],["dices",242.24],["gta",243.12],["6",243.42],["va",243.8],["a",244.02],["estar",244.16],["ahi",244.26],["manana",244.48],["y",245.34],["pasado",245.5],["y",246.4],["dentro",246.46],["de",246.7],["un",246.9],["ano",247.06],["ella",247.76],["me",247.96],["lo",248.14],["ha",248.26],["pedido",248.34],["hoy",248.66],["tu",249.48],["amigo",249.66],["se",249.9],["queda",250.18],["callado",250.44],["luego",250.9],["dice",251.56],["vale",252.54],["pero",253.42],["esta",253.48],["noche",253.72],["me",253.96],["lo",254.16],["cuentas",254.26],["todo",254.68],["dos",255.82],["de",256.12],["la",256.28],["tarde",256.38],["vuelves",257.16],["a",257.56],["casa",257.7],["y",258.4],["la",258.52],["consola",258.64],["te",259.1],["mira",259.34],["bueno",260.16],["no",260.78],["te",260.9],["mira",261.04],["pero",261.6],["lo",261.78],["parece",261.94],["solo",262.9],["una",263.16],["partida",263.34],["piensas",264.26],["media",265.22],["hora",265.38],["una",266.26],["mision",266.42],["y",267.52],["claro",267.66],["una",268.38],["mision",268.54],["lleva",268.98],["a",269.3],["otra",269.48],["y",270.16],["a",270.34],["otra",270.44],["y",271.22],["cuando",271.34],["miras",271.5],["el",271.92],["reloj",272.04],["son",272.68],["las",272.84],["5",273.06],["menos",273.44],["20",273.68],["las",274.66],["5",274.92],["menos",275.3],["20",275.5],["sales",276.58],["corriendo",276.92],["sin",277.84],["peinarte",277.96],["con",278.8],["la",278.9],["camiseta",279.04],["del",279.48],["reves",279.68],["cinco",280.8],["de",281.4],["la",281.5],["tarde",281.6],["el",282.34],["parque",282.58],["llegas",283.46],["sin",283.84],["aliento",284.16],["ella",285.18],["ya",285.38],["esta",285.62],["en",285.86],["el",286.04],["banco",286.14],["te",286.94],["mira",287.08],["de",287.32],["arriba",287.52],["abajo",287.82],["y",288.86],["se",289.04],["rie",289.14],["llevas",290.04],["la",290.3],["camiseta",290.46],["del",290.92],["reves",291.14],["quieres",292],["que",292.38],["te",292.52],["trague",292.68],["la",293.06],["tierra",293.2],["pero",294.04],["ella",294.28],["dice",294.5],["pensaba",295.4],["que",295.74],["no",295.9],["ibas",296],["a",296.14],["venir",296.34],["hoy",297.08],["sale",297.24],["gta",297.4],["6",297.76],["no",298.36],["te",298.9],["quedas",299.06],["helado",299.48],["tu",300.54],["sabes",300.84],["lo",301.68],["de",301.94],["gta",302.08],["6",302.42],["ella",303.38],["saca",303.7],["el",304.08],["movil",304.2],["en",305.02],["el",305.14],["fondo",305.24],["de",305.46],["pantalla",305.64],["el",306.5],["logo",306.58],["del",306.88],["juego",307.08],["llevo",307.36],["esperandolo",308.16],["desde",308.74],["el",308.92],["primer",309.12],["trailer",309.36],["dice",310.2],["pero",311.22],["mi",311.24],["consola",311.46],["se",311.86],["rompio",312.06],["la",312.4],["semana",312.54],["pasada",312.78],["y",313.58],["no",313.82],["queria",313.94],["pasarme",314.16],["el",314.64],["dia",314.74],["en",314.88],["casa",315.02],["viendo",315.26],["como",315.56],["jugaba",315.98],["todo",316.4],["el",316.7],["mundo",316.9],["menos",317.16],["yo",317.36],["asi",318.1],["que",318.36],["pense",318.58],["por",319.84],["lo",319.92],["menos",320.08],["lo",320.32],["paso",320.52],["con",320.72],["alguien",320.96],["que",321.18],["me",321.36],["cae",321.5],["bien",321.7],["seis",322.72],["de",323.18],["la",323.28],["tarde",323.4],["os",324.2],["pasais",324.34],["una",324.7],["hora",324.94],["hablando",325.18],["del",325.52],["juego",325.8],["de",326.5],["las",326.66],["teorias",326.82],["de",327.64],["los",327.84],["traileres",327.98],["de",328.96],["que",329.14],["mision",329.28],["haria",329.68],["cada",330],["uno",330.24],["primero",330.58],["ella",331.52],["sabe",331.78],["mas",332.14],["que",332.42],["tu",332.56],["mucho",333.2],["mas",333.66],["y",334.36],["no",334.54],["te",334.74],["lo",334.88],["puedes",335.04],["creer",335.32],["tu",335.86],["crush",336.38],["es",336.8],["igual",337.16],["de",337.52],["friki",337.74],["que",338.2],["tu",338.38],["y",339.18],["aqui",339.4],["pasa",339.6],["algo",339.96],["que",340.26],["los",340.44],["psicologos",340.6],["conocen",341.16],["bien",341.62],["en",342.38],["el",342.54],["ano",342.66],["2000",342.8],["el",343.58],["psicologo",343.66],["arthur",344.14],["aron",344.56],["hizo",344.84],["un",345.24],["experimento",345.38],["con",346.06],["parejas",346.2],["a",347],["unas",347.23],["les",347.46],["pidio",347.62],["una",347.98],["actividad",348.12],["nueva",348.56],["y",348.92],["emocionante",349.12],["atadas",350.18],["por",350.54],["la",350.76],["muneca",350.88],["y",351.3],["el",351.4],["tobillo",351.5],["tenian",352.12],["que",352.32],["llevar",352.56],["un",352.76],["cojin",352.98],["a",353.34],["traves",353.48],["de",353.72],["una",353.9],["carrera",354.1],["de",354.54],["obstaculos",354.66],["otras",355.68],["parejas",355.96],["hicieron",356.44],["algo",356.92],["aburrido",357.18],["las",358.16],["que",358.34],["hicieron",358.5],["la",358.84],["actividad",359],["emocionante",359.4],["dijeron",360.1],["despues",360.72],["que",361.02],["estaban",361.3],["mas",361.58],["contentas",361.92],["con",362.54],["su",362.68],["relacion",362.84],["compartir",363.74],["algo",364.22],["nuevo",364.42],["y",364.8],["emocionante",365],["une",365.68],["y",366.56],["vosotros",366.76],["dos",367.14],["estais",367.4],["compartiendo",367.86],["una",368.5],["de",368.7],["las",368.84],["cosas",369],["que",369.26],["mas",369.54],["os",369.86],["emocionan",369.98],["siete",371.46],["de",371.82],["la",372],["tarde",372.12],["entonces",372.92],["se",373.36],["te",373.7],["ocurre",373.8],["oye",374.66],["quieres",375.34],["venir",375.56],["a",375.74],["jugar",375.88],["a",376.04],["mi",376.2],["casa",376.3],["juego",377.06],["un",377.28],["rato",377.42],["y",377.68],["luego",377.92],["te",378.12],["dejo",378.32],["el",378.52],["mando",378.62],["ella",379.38],["se",379.62],["lo",379.8],["piensa",379.92],["un",380.22],["segundo",380.4],["solo",381.16],["si",381.58],["me",381.76],["dejas",381.88],["conducir",382.14],["ocho",383.48],["de",383.68],["la",383.82],["tarde",383.94],["tu",384.68],["casa",384.82],["tu",385.66],["madre",385.78],["os",386],["ve",386.24],["entrar",386.48],["y",386.7],["levanta",386.98],["las",387.34],["cejas",387.52],["tu",388.28],["haces",388.52],["como",388.8],["que",389.04],["no",389.18],["lo",389.3],["ves",389.42],["os",390.08],["sentais",390.26],["en",390.6],["el",390.78],["sofa",390.88],["ella",391.58],["con",391.84],["el",392.06],["mando",392.2],["tu",392.54],["con",393.04],["las",393.3],["patatas",393.48],["y",394.3],["te",394.54],["das",394.64],["cuenta",394.8],["de",395.1],["que",395.36],["es",395.46],["mucho",395.62],["mas",395.96],["divertido",396.18],["verla",396.72],["jugar",397.06],["a",397.26],["ella",397.46],["que",397.7],["jugar",397.92],["tu",398.22],["solo",398.44],["grita",399.12],["en",399.56],["cada",399.78],["persecucion",399.98],["se",401.08],["rie",401.24],["cuando",401.56],["choca",401.74],["te",402.58],["pide",402.7],["consejos",402.88],["y",403.48],["luego",403.76],["no",404],["te",404.24],["hace",404.38],["ni",404.56],["caso",404.68],["y",405.52],["aqui",405.74],["tambien",405.98],["hay",406.44],["ciencia",406.7],["en",407.54],["2012",407.72],["unos",408.64],["investigadores",408.86],["de",409.6],["la",409.78],["universidad",409.86],["brigham",410.46],["young",410.9],["en",411.12],["estados",411.38],["unidos",411.6],["estudiaron",412.14],["a",412.98],["casi",413.12],["350",413.34],["parejas",413.98],["que",414.96],["jugaban",415.16],["a",415.58],["videojuegos",415.7],["en",416.22],["internet",416.38],["lo",417.26],["que",417.46],["importaba",417.56],["no",418.1],["era",418.36],["jugar",418.52],["o",418.82],["no",419.16],["jugar",419.28],["era",420.1],["como",420.38],["cuando",420.9],["el",421.54],["juego",421.78],["los",422],["separaba",422.18],["la",423.08],["relacion",423.14],["sufria",423.52],["cuando",424.42],["lo",424.64],["usaban",424.84],["para",425.22],["pasar",425.42],["tiempo",425.7],["juntos",426.02],["y",426.48],["los",426.76],["dos",426.94],["estaban",427.12],["a",427.56],["gusto",427.68],["a",428.3],["la",428.46],["relacion",428.54],["le",428.98],["iba",429.24],["mejor",429.44],["el",430.28],["problema",430.4],["nunca",430.78],["fue",431.14],["gta",431.5],["6",431.88],["el",432.72],["problema",432.88],["habria",433.32],["sido",433.82],["usarlo",434.1],["para",434.7],["esconderte",434.92],["diez",436.58],["de",436.88],["la",437],["noche",437.1],["tu",437.94],["movil",438.04],["vibra",438.34],["es",439.18],["el",439.36],["grupo",439.5],["de",439.7],["tus",439.88],["amigos",440.02],["que",440.84],["tal",440.96],["la",441.12],["cita",441.26],["has",441.82],["jugado",441.98],["algo",442.28],["les",443.02],["mandas",443.22],["una",443.56],["foto",443.72],["ella",444.46],["con",444.68],["el",444.88],["mando",445],["en",445.6],["tu",445.72],["sofa",445.84],["concentradisima",446.94],["el",447.92],["grupo",448.08],["explota",448.34],["que",449.36],["tu",449.58],["crush",449.78],["juega",450.52],["a",450.92],["gta",451.12],["eres",451.96],["una",452.4],["leyenda",452.62],["once",454.02],["de",454.52],["la",454.64],["noche",454.76],["ella",455.5],["se",455.76],["tiene",455.96],["que",456.2],["ir",456.36],["en",456.98],["la",457.12],["puerta",457.22],["se",457.54],["gira",458.04],["manana",458.76],["seguimos",459.16],["con",460.04],["la",460.24],["partida",460.34],["vale",461.16],["pero",461.8],["manana",461.98],["conduzco",462.3],["yo",462.9],["ni",463.42],["lo",463.7],["suenes",463.86],["y",464.74],["se",464.9],["va",465.06],["riendose",465.18],["medianoche",466.7],["estas",467.92],["en",468.24],["tu",468.38],["cuarto",468.5],["la",469.3],["consola",469.42],["encendida",469.86],["la",470.9],["partida",471.02],["guardada",471.46],["podrias",472.4],["seguir",472.84],["jugando",473.12],["pero",474.02],["no",474.3],["lo",474.48],["haces",474.6],["te",475.38],["tumbas",475.52],["en",475.86],["la",476.02],["cama",476.14],["y",476.42],["miras",476.62],["el",476.94],["techo",477.1],["sonriendo",477.46],["como",478.54],["un",478.78],["tonto",479],["has",479.76],["jugado",479.98],["muchas",480.34],["menos",480.76],["horas",481.02],["que",481.36],["tus",481.56],["amigos",481.7],["vas",482.54],["muy",482.8],["atrasado",483.14],["manana",484.14],["te",484.58],["van",484.78],["a",484.9],["destripar",485],["media",485.48],["historia",485.86],["y",486.86],["no",487.02],["te",487.18],["importa",487.32],["nada",487.62],["porque",488.52],["gta",488.78],["6",489.1],["ha",489.6],["tardado",489.94],["mas",490.34],["de",490.6],["13",490.8],["anos",491.14],["en",491.5],["llegar",491.72],["desde",492],["gta",492.28],["5",492.82],["y",493.68],["va",493.86],["a",494],["estar",494.06],["ahi",494.24],["mucho",494.48],["tiempo",494.88],["pero",495.84],["hay",496.06],["oportunidades",496.22],["que",496.92],["pasan",497.18],["una",497.58],["sola",497.78],["vez",498.1],["un",498.86],["mensaje",499.06],["un",500.06],["te",500.7],["apetece",500.72],["quedar",501.14],["un",501.86],["dia",502.06],["que",502.32],["podria",502.5],["haber",502.8],["sido",503.08],["uno",503.44],["mas",503.74],["al",504.04],["final",504.7],["no",505],["tuviste",505.52],["que",505.92],["elegir",506.08],["entre",506.54],["tu",506.74],["crush",506.94],["y",507.2],["gta",507.58],["6",507.88],["solo",508.82],["tuviste",509.08],["que",509.62],["atreverte",509.8],["a",510.42],["salir",510.5],["de",510.76],["casa",511],["y",512.04],["tu",512.14],["que",512.82],["habrias",512.9],["hecho",513.28],["crush",513.86],["o",514.22],["gta",514.68],["6",515.1],["te",516.14],["leo",516.36],["en",516.64],["los",516.74],["comentarios",516.84]],Fu=(n,e=0)=>{for(let[t,i]of Pg)if(i>=e&&t===n)return i;return e};var ba=(n,e,t=200,i=200)=>{let s=new V(new Re(t,i),C(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Nt=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Se(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function Ig(n,e=.5){let t=new le,i=Se(1024,256,r=>{r.clearRect(0,0,1024,256);let o=ke(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new V(new Re(400,100),new je({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:yn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function Dg(n,e=0,t=-1){for(let i=0;i<4;i++){let s=w(5,.22,.6,C("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new V(new On(.16,.35,6),C(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function fh(n,e=40,t=3,i=[-12,12,-40,4]){let s=ke(t),r=Se(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Oe(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function Pu(n,e=200,t=5,i=10,s=30,r=2){let o=ke(t),a=Se(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Oe(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}be.pasteleria=n=>{n.fog=new Le("#F3D2C0",.02),n.add(di(16,14,"#F2E6DA","#E2CFC0",8)),n.add(w(16,5,.3,C("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(w(.12,5,.05,C("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(w(5.4,1,.9,C("#8A5A3C"),0,.5,-1.2)),n.add(w(5.5,.08,1,C("#F4EEE6"),0,1.04,-1.2)),n.add(w(3.6,.1,.5,C("#F4EEE6"),0,2.1,-3)),n.add(w(3.6,.1,.5,C("#F4EEE6"),0,2.9,-3));let e=Oe(Nt(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new Ie("#FFF0F0","#A07060",1));let t=nt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new Xe("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};be.espacio=n=>{n.background=new de("#05060E"),wn(n,2600,200,3),n.add(new Ie("#8FA8FF","#101020",.5));let e=new fr("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};be.aula=n=>{n.fog=new Le("#E8DCC8",.02),n.add(di(16,16,"#C9B89A","#BBA98A",10)),n.add(w(16,5,.3,C("#E8DCC0"),0,2.5,-3.6)),n.add(w(4.4,1.8,.06,C("#2F5A48"),0,2.3,-3.42)),n.add(w(4.6,.1,.2,C("#8E6242"),0,1.36,-3.35));let e=Oe(Se(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new Ie("#FFFFFF","#9A8A70",1)),n.add(nt("#FFE8C8",2.2,[-6,8,6],10,40))};be.ruaV=(n,e)=>{Jr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(fh(n,60,4),Pu(n,260,6,9,40))};be.apagon=(n,e)=>{n.fog=new Le("#0A0C18",.03),Tt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),wn(n,1800,200,4),ya(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(ji(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(ji(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new Ie("#5A64A8","#141420",.5)),n.add(nt("#8A9AE0",.7,[-10,20,10],30,90))};be.azotea=(n,e)=>{n.background=new de("#03040A"),n.fog=new Le("#060814",.008),wn(n,4200,200,9),Ig(n,e.ang??.45),jn(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=w(16,.3,12,C("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(w(16,.5,.2,C("#4A4A54"),0,.25,-8)),n.add(w(1.4,1.2,1.4,C("#4A4A54"),4.5,.6,-5)),n.add(new Ie("#6A78C8","#141420",.55)),n.add(nt("#9AAAF0",.6,[-6,10,6],12,40))};be.panaderia=n=>{be.pasteleria(n);let e=Oe(Nt(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};be.metro=n=>{n.background=new de("#0A0C10"),n.fog=new Le("#0C1014",.07);let e=C("#4A4E54",{roughness:.9,side:Qt}),t=new V(new st(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new le,s=new V(new st(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=w(6.4,.1,60,C("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(w(.08,.12,60,C("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(w(2.2,.08,.2,C("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new Xe("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=ut("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Ie("#8A90A0","#202024",1.1))};be.bosque=(n,e)=>{n.fog=new Le(e.nieve?"#E8EEF4":"#C8D0B8",.025),Tt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ba(n,e.nieve?"#F2F4F8":"#6E8A48");let t=ke(14);for(let i=0;i<26;i++)dn(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=ji(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),fh(n,0)}n.add(new Ie("#E9EEFF","#5A6A4A",.95)),n.add(nt("#FFE8C0",2.4,[-10,14,8],18,60))};be.rio=(n,e)=>{be.parque(n,e);let t=new V(new Re(60,3.4),new Ne({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};be.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Le(t?"#F2A880":"#CFE8F0",.006),Tt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=ut(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=ba(n,"#E8D4A0"),r=new V(new Re(800,400),new Ne({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=w(800,.02,.6,C("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new V(new cr(1.1,0),C("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Ie(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(nt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};be.svalbard=n=>{n.fog=new Le("#C8D8E8",.02),Tt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),ba(n,"#F4F6FA");let e=ke(19);for(let l=0;l<8;l++){let c=new V(new On(10+e()*12,10+e()*10,7),C("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new V(new yt(14,32,16,0,Math.PI*2,0,Math.PI/2),C("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=w(3,4.4,6,C("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=w(1.4,2.2,.1,C("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Ut(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=ut("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=ut("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new Ie("#D8E8FF","#8A9AB0",1.1)),n.add(nt("#F0F4FF",1.6,[-8,10,8],16,50))};be.huerto=(n,e)=>{be.parque(n,e),Dg(n,0,-1.4)};be.biblio=n=>{n.fog=new Le("#4A3A2A",.03),n.add(Fi(18,14,"#6D4A33")),n.add(w(18,6,.3,C("#5A3E2A"),0,3,-3.4));let e=ke(8);for(let s=0;s<5;s++){n.add(w(14,.06,.4,C("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(w(o,a,.3,C(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Ie("#FFE8C8","#3A2A1C",.7));let t=new Xe("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=ut("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};be.hotel=n=>{n.fog=new Le("#E8D8C0",.02),n.add(Fi(18,14,"#8A5A3A")),n.add(w(18,6,.3,C("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(w(2.4,2.6,.05,C("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Oe(Se(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=w(3.2,.6,2.4,C("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(w(3.3,1.4,.2,C("#6A3A2A"),0,.7,-2.8)),fh(n,0);let t=Oe(Se(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new Ie("#FFF0E0","#8A6A4A",1)),n.add(nt("#FFE0B0",2,[-4,8,6],10,30))};be.selva=n=>{n.fog=new Le("#7AA870",.05),Tt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),ba(n,"#3E5A2A");let e=ke(23);for(let t=0;t<40;t++)dn(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);Pu(n,160,9,12,12,3),n.add(new Ie("#D8F0C8","#2A3A1A",.9)),n.add(nt("#FFF0C0",2.2,[-6,14,4],14,50))};be.desierto=n=>{be.sabana(n,{})};var gh=(n,e,t=200,i=200)=>{let s=new V(new Re(t,i),C(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};function Ta(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new le,[d,u,f,g]=s,E=()=>l?new Ne({map:_a(i,3,3),roughness:.95}):C(i,{roughness:.9}),m=d-f/2+e/2,p=e/2-(d+f/2),v=u-g/2,_=t-(u+g/2);h.add(w(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(w(p,t,.3,E(),e/2-p/2,t/2,0)),h.add(w(f,v,.3,E(),d,v/2,0)),h.add(w(f,_,.3,E(),d,t-_/2,0));let y=C("#F4F0E4");for(let[O,H,W,j]of[[d-f/2,u,.1,g+.1],[d+f/2,u,.1,g+.1],[d,u+g/2,f+.2,.1],[d,u,.05,g]])h.add(w(W,j,.36,y,O,H,0));h.add(w(f+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,R=C(o,{roughness:.9});h.add(w(f+3,t,.2,R,d,t/2,-D)),h.add(w(.2,t,D,R,d-f/2-1.4,t/2,-D/2)),h.add(w(.2,t,D,R,d+f/2+1.4,t/2,-D/2)),h.add(w(f+3,.2,D,C("#8A6A4A"),d,v-c,-D/2)),h.add(w(f+3,.2,D,R,d,u+g/2+.5,-D/2));let T=new Xe("#FFC880",a?9:2.5,7,1.4);T.position.set(d,u+.6,-1.2),h.add(T);let F=Ut(f+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-D+.12),h.add(F);let S=w(f-.04,g,.06,C("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let O=0;O<10;O++){let H=w(f-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(H),A.push([H,O])}let P=O=>{let H=Math.max(.001,g*O);S.scale.y=H/g,S.position.y=u+g/2-H/2,S.visible=O>.01,A.forEach(([W,j])=>{let Z=u+g/2-(j+.5)*g/10;W.visible=O>.01&&Z>u+g/2-H,W.position.y=Z})};return P(0),h.userData={persiana:P,luz:O=>{T.intensity=O?9:2.5,F.material.emissiveIntensity=O?.35:.08},win:s,lamp:T},h.children.forEach(O=>{O.castShadow=O.castShadow??!0,O.receiveShadow=!0}),h}function mh(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new le;l.add(w(i,s,r,C(e,{roughness:.9}),0,s/2,-r/2));let c=new V(new st(.01,i*.62,2.4,4,1),C(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(w(1.1,2.1,.1,C(o),0,1.05,.02)),l.add(w(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ne({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(w(1.3,1.2,.06,h(),d,u,.03)),l.add(w(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(w(2,.2,1.2,C("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function ph(n=4){let e=new le,t=ke(n*7);for(let i=0;i<n*3;i++){let s=new V(new yt(.42+t()*.12,12,10),C(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function Iu(n=8,e="#E8E2D2"){let t=new le;for(let i=0;i<=n*4;i++)t.add(w(.1,1.3,.05,C(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(w(n,.08,.06,C(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function wa(){let n=new le,e=ke(4);for(let t=0;t<7;t++){let i=new V(new yt(.35,12,10),C("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new V(new yt(.08,10,8),C(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function Lg(){let n=new le;n.add(w(2.2,2,1.8,C("#8A6A4A",{roughness:.9}),0,1,0));let e=w(2.6,.12,2.3,C("#5A3E2A"),0,2.12,0);return n.add(e),n.add(w(.8,1.5,.05,C("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Du(n=.6){let e=w(n,n*.8,n,C("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(w(n*1.01,.06,.15,C("#E8D8A8"),0,n*.4,0)),e}function Lu(n="#C9361F"){let e=new le;e.add(w(2,.45,.9,C(n),0,.4,0)),e.add(w(2,.7,.2,C(n),0,.8,-.4));for(let t of[-1,1])e.add(w(.2,.55,.9,C(n),t*.95,.55,0));return e.children.forEach(t=>t.castShadow=!0),e}function Uu(){let n=new le;n.add(w(.04,1.4,.04,C("#E8667F"),0,.7,0));let e=new V(new yt(.28,16,12),new Ne({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new V(new tn(.18,.04,8,16,Math.PI*1.2),C("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=ut("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Nu(n=.9,e=1.2){let t=Se(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new le;i.add(w(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new V(new Re(n,e),C("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Bu(n=.9,e=1.2){let t=Se(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new le;i.add(w(n+.08,e+.08,.04,"#111",0,0,0));let s=new V(new Re(n,e),C("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}var Ug=(n,e)=>{be.quarto(n,e);let t=Nu();t.position.set(-3,2.8,-2.8),n.add(t)};be.cuartoYo=(n,e)=>{Ug(n,e);let t=Ta({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=Uu();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Bu(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&wn(n,600,120,2)};be.cuartoElla=(n,e)=>{be.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(w(2.4,.45,3.2,C("#6B4A33"),1.7,.25,-1.4)),n.add(w(2.3,.3,3,C("#F3EEE4"),1.7,.6,-1.4)),n.add(w(2.38,.22,2,C("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=Uu();t.position.set(-3.2,0,-2.2),n.add(t);let i=Bu();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Ta({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Nu(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&wn(n,600,120,2)};be.entreCasas=(n,e)=>{let t=!!e.night;n.background=new de(t?"#0A0C1E":"#9FC8E8"),n.fog=new Le(t?"#0E1028":"#CFE0EE",.02),Tt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&wn(n,1600,120,5),gh(n,t?"#24301E":"#6E9A50");let i=Ta({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Ta({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Iu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Ie(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(nt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};be.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Le(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Tt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),gh(n,t?"#24301E":"#6E9A50");let s=w(200,.02,6,C(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=w(200,.1,2,C("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let f=mh({col:d,roof:u,night:t});f.position.set(h,0,-3),n.add(f)}let a=ph(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=ph(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=ph(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])dn(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));jn(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new Ie(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(nt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};be.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Le(t?"#E8A880":"#F2E2C8",.015),Tt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),gh(n,"#6E9A50");let i=Iu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=wa();s.position.set(1.6,0,-1.2),n.add(s);let r=wa();r.position.set(2.8,0,-2.6),n.add(r);let o=Lg();o.position.set(-2.4,0,-3.2),n.add(o);let a=mh({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=mh({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])dn(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Ie("#E9EEFF","#6A5A4A",1.05)),n.add(nt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};be.esquina=(n,e)=>{be.barrio(n,e)};be.concurso=n=>{n.background=new de("#140C24"),n.fog=new Le("#1A1030",.03);let e=w(20,.2,12,C("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=ut(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Oe(Nt(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=w(1.2,1.1,.7,C("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(w(1.3,.1,.8,C("#F2C14E"),0,1.12,-.6)),n.add(new Ie("#B8A8FF","#2A1A3A",.9));let s=new Qn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};be.residencia=n=>{n.fog=new Le("#E8DCC8",.02),n.add(Fi(20,14,"#8A6A4A")),n.add(w(20,4,.3,C("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(w(1,2.2,.08,C("#6B4A33"),-7+e*2,1.1,-3.2));let t=Oe(Nt([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new Ie("#FFFFFF","#9A8A70",1)),n.add(nt("#FFE8C8",2,[-6,8,6],12,40))};var Qr=(n,e,t=200,i=200,s={})=>{let r=new V(new Re(t,i),C(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},$r=(n,e=1.6)=>new Ne({color:n,emissive:n,emissiveIntensity:e});function Ou(n=2.6){let e=new le,t=Se(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Oe(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function Ng(n="#FFB25A"){let e=new le,t=new V(new st(.16,.12,.34,12),$r(n,1.8));e.add(t);let i=ut(n,1,.55);return e.add(i),e}var Bg=(n,e,t,i=3)=>{let s=ke(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new V(new yt(.07+s()*.06,10,8),$r(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=w(.02,.12,.02,C("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};be.desvan=(n,e)=>{let t=!!e.night;n.background=new de("#1A120C"),n.fog=new Le("#2A1C12",.05),n.add(Fi(16,14,"#6A4630"));for(let h of[-1,1]){let d=w(16,.15,7.5,C("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(w(16,6,.2,C("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=w(.22,.22,9,C("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=ke(6);for(let h=0;h<9;h++){let d=Du(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=w(1.4,.8,.7,C("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(w(1.44,.1,.74,C("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Ut(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=bs(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new V(new yt(.09,12,10),$r("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(w(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new Xe("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Ie("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=ut("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};be.pasillo=(n,e)=>{n.background=new de("#1A1036"),n.fog=new Le("#2A1850",.045),wn(n,1600,120,7),Qr(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=ke(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let f of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(f>0?1:0))%i.length],m=w(.12,2.6,1.3,C("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=w(.08,2.3,1.05,C(E,{roughness:.6}),f*2.35,1.15,g);n.add(p);let v=new V(new yt(.05,8,6),$r("#F2C14E",.6));v.position.set(f*2.29,1.1,g+.35),n.add(v)}let s=new le,r=new le;r.position.set(0,0,.55),s.add(r);let o=w(.08,2.3,1.05,C("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new V(new yt(.05,8,6),$r("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Oe(Nt(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Ut(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let f=ut(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);f.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(f)}n.add(new Ie("#D8C8FF","#4A3070",1));let h=new Xe("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new Xe("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};be.playaSueno=(n,e)=>{n.fog=new Le("#E8B8E0",.018),Tt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=ut("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new V(new Bn(4,40),new je({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=Qr(n,"#F8EEF2",200,200),r=new V(new Re(400,200),new Ne({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=w(400,.02,.3,C("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=ke(4);for(let l=0;l<70;l++){let c=ut("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new le;c.add(w(.18,2.8,.18,C("#E8A0C0"),0,1.4,0));let h=ut(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Ie("#FFE0F6","#B88AC8",1.15)),n.add(nt("#FFD8E8",2,[8,14,-6],14,60))};be.baile=(n,e)=>{n.background=new de("#0E0A28"),n.fog=new Le("#1A1240",.03),wn(n,2400,160,3),Tt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),Qr(n,"#3A2A5A");let t=new V(new Bn(3.2,48),new Ne({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),Bg(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=wa();c.position.set(a,0,l),n.add(c)}let i=ke(9),s=[];for(let a=0;a<22;a++){let l=Ng(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Ie("#B8A8FF","#2A1A3A",.7));let r=new Qn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new Xe("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};be.estadio=(n,e)=>{n.background=new de("#0A1020"),n.fog=new Le("#18203A",.02),wn(n,800,160,5);let t=Se(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new V(new Re(40,40),new Ne({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new le,r=C("#FFFFFF",{roughness:.4});s.add(w(.12,2.4,.12,r,-3.6,1.2,0),w(.12,2.4,.12,r,3.6,1.2,0),w(7.3,.12,.12,r,0,2.4,0));let o=new V(new Re(7.2,2.4),new je({color:"#FFFFFF",transparent:!0,opacity:.18,side:xt}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(w(60,1,2,C(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=ke(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);lh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=ut("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new Ie("#D8E0FF","#2A3A2A",1));let c=nt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};be.concierto=(n,e)=>{n.background=new de("#0C0820"),n.fog=new Le("#140C2C",.025);let t=w(14,.6,6,C("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),Qr(n,"#140E26").position.y=-.01;let i=Ut(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=ke(4);for(let l=0;l<9;l++){let c=ut(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=bs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new le;r.add(w(.03,1.4,.03,C("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new V(new yt(.06,12,10),C("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=ut(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Ie("#B8A8FF","#2A1A3A",.8));let a=new Qn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};be.gris=(n,e)=>{n.background=new de("#1C1E24"),n.fog=new Le("#262830",.06),Qr(n,"#4A4C54"),n.add(w(14,7,.2,C("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(w(.2,7,12,C("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(w(.2,7,12,C("#52545C",{roughness:1}),4.2,3.5,0));let t=Ut(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(w(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(w(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Ie("#A8B0C8","#2A2A30",.6));let i=new Qn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new Xe("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};be.labSueno=(n,e)=>{be.lab(n,e),xu(n,-1.4,-1.6,"#4A86C7");let t=new le;t.add(w(.12,1.4,.12,C("#3A3A44"),0,.7,0)),t.add(w(1,.7,.1,C("#20242E"),0,1.7,0));let i=Ut(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var xa=(n,e,t=200,i=200,s={})=>{let r=new V(new Re(t,i),C(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Hu=(n,e=1.6)=>new Ne({color:n,emissive:n,emissiveIntensity:e}),Og=(n="#8C8A84",e=3)=>{let t=Se(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=ke(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=rn,t},Ts=(n,e,t,i,s,r,o,a=3)=>{let l=Og(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new V(new _n(n,e,t),new Ne({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function Hg(n="#B8B4A8"){let e=new le,t=new V(new st(.09,.09,.22,18),C(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new V(new st(.092,.092,.12,18,1,!0),new Ne({map:Se(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function zg(){let n=new le;n.add(w(1,.8,.6,C("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(w(.3,.3,.02,C("#222"),-.25,.5,.31));let e=new V(new yt(.04,10,8),Hu("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(w(.02,.4,.02,C("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function kg(){let n=new le;n.add(w(.36,.5,.08,C("#3A3C3A",{metalness:.5}),0,0,0));let e=new le;e.position.set(0,0,.06),n.add(e);let t=w(.05,.4,.05,C("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new V(new yt(.07,14,10),C("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function Gg(){let n=new le;n.add(w(8,2.4,2.5,C("#F2B830",{roughness:.5}),0,1.6,0)),n.add(w(8.02,.25,2.52,C("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(w(.85,.7,.02,C("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new V(new st(.45,.45,.3,16),C("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=ut("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function zu(n,e,t={}){let i=Nt(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Oe(i,e,e*(t.h||260)/(t.w||1100))}be.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new de("#0E0F10"),n.fog=new Le(t?"#050608":"#2A2A28",t?.08:.045);let s=Ts(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Ts(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Ts(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Ts(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Ts(12,.3,10,0,3.6,-.5,"#7A7872"));for(let T of[-2.4,0,2.4])n.add(w(.25,.3,10,C("#6A6862"),T,3.35,-.5));let r=new le;r.add(w(2,.2,.3,C("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),w(.2,2.6,.3,C("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),w(.2,2.6,.3,C("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new le;o.position.set(-.85,0,-3.3),n.add(o);let a=C("#6E7670",{metalness:.7,roughness:.35}),l=w(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let T of[.5,1.9])o.add(w(1.6,.08,.04,C("#5A605C",{metalness:.7}),.85,T,.1));let c=new V(new tn(.26,.035,8,28),C("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let T=0;T<3;T++){let F=w(.5,.03,.03,C("#B8241A"),.85,1.25,.14);F.rotation.z=T*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=kg();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Oe(Nt(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=T=>{let F=new le,S=C("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])F.add(w(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])F.add(w(.96,.06,2.1,S,0,A,0)),F.add(w(.86,.14,1.96,C("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(w(.5,.1,.3,C("#D8D2C0"),0,A+.21,-.8));return F.position.set(T,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let f=new le;for(let T of[.9,1.5])f.add(w(1.4,.05,.35,C("#5A4A3A"),0,T,0));for(let T of[-.7,.7])f.add(w(.05,1.6,.35,C("#5A4A3A"),T,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let T=0;T<6;T++){let F=Hg();F.position.set(-2.5+T%3*.26,T<3?.93:1.53,-3.2),f.parent.add(F),g.push(F)}n.userData.cans=g;let E=zg();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new le;m.add(w(.06,.7,.9,C("#3A3C3A",{metalness:.5}),0,0,0));for(let T=0;T<6;T++)m.add(w(.08,.04,.8,C("#5A5C5A",{metalness:.6}),.02,-.28+T*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(w(1.4,.06,.8,C("#5A4632"),0,.75,.3));for(let T of[-.6,.6])for(let F of[-.32,.32])n.add(w(.05,.75,.05,C("#3A2E22"),T,.375,.3+F))}if(e.museo){let T=zu(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});T.position.set(-2,2.6,-3.38),n.add(T)}let p=Oe(Se(360,480,T=>{T.fillStyle="#E8D8A0",T.fillRect(0,0,360,480),T.fillStyle="#7A2A1A",T.font="900 46px Fraunces",T.textAlign="center",T.fillText("REFUGIO",180,70),T.fillStyle="#3A3A2A",T.fillRect(80,140,200,140),T.fillStyle="#E8D8A0",T.beginPath(),T.moveTo(60,150),T.lineTo(180,90),T.lineTo(300,150),T.fill(),T.fillStyle="#7A2A1A",T.font="700 30px Inter",T.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let v=[];for(let T of[-1.6,1.6]){let F=new V(new yt(.09,12,10),Hu("#FFD089",t?0:2.2));F.position.set(T,3.1,-.6),n.add(F),v.push(F),n.add(w(.22,.02,.22,C("#333"),T,3.2,-.6,!1))}let _=[];if(!t)for(let T of[-1.6,1.6]){let F=new Xe("#FFC27A",11,10,1.4);F.position.set(T,2.9,-.4),F.castShadow=T<0,n.add(F),_.push(F)}let y=new Ie(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let T=Ut(1.7,2.4,"#FFF4D8",3.2);T.position.set(0,1.2,-3.5),n.add(T);let F=bs(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new Qn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[T,F,S]}let D=ke(5),R=[];for(let T=0;T<26;T++){let F=ut("#FFE8C0",.04,t?.2:.5);F.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(F),R.push(F)}n.userData.dust=R};be.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Le(t?"#1A1E28":"#C8D0B8",t?.045:.022),Tt(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),xa(n,t?"#2A3A24":"#6E8A48");let i=ke(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||dn(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new V(new yt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),C(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Ts(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(w(1.5,2,.1,C("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=zu(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=Gg();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new Ie("#6A7A9A","#1A1E1A",.75));let a=new Ie("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=nt("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new je({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new V(new _n(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[f,g,E,m]=u.userData.p;u.position.set(f+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new Ie("#E9EEFF","#5A6A4A",.95)),n.add(nt("#FFD29A",2.6,[-12,16,10],16,70))};be.puente=(n,e)=>{let t=!!e.normal;n.fog=new Le("#C8D8E0",t?.02:.012),Tt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new Ie("#E9EEFF","#5A6A4A",1)),n.add(nt("#FFE2B0",2.6,[-10,18,12],16,80));let i=ke(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){xa(n,"#6E8A48");let l=new V(new Re(3.4,60),C("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(w(1.4,.14,5,C("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(w(.08,.5,5,C("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(w(.1,.6,.1,C("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)dn(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Ts(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),xa(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)dn(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new V(new Re(14,200),new Ne({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new V(new cr(1.5+i()*2),C("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=C("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=w(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new V(new hr(new Es(c),60,.025,6),C("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(w(.015,1,.015,C("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(w(.18,1.6,.18,C("#6A4630"),d,.8,l*.55))}n.userData.y=0};be.marte=(n,e)=>{n.background=new de("#10141A"),n.fog=new Le("#1A2028",.05);let t=new V(new st(2.4,2.4,30,28,1,!0),new Ne({color:"#C8CCD0",side:Qt,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(w(3.6,.1,30,C("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new V(new tn(2.38,.05,6,28),C("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=Ut(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(w(.6,.5,1.8,C("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(w(.05,.6,.5,C("#2A3A4A"),r*1.75,1.6,-o*3));let a=Ut(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Oe(Nt(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new Ie("#E8F0FF","#4A505A",.9));let s=new Xe("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};be.biosfera=(n,e)=>{n.fog=new Le("#F2D8B0",.012),Tt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),xa(n,"#D8B07A");let t=ke(31);for(let l=0;l<8;l++){let c=new V(new On(8+t()*8,6+t()*6,6),C("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new le;c.add(w(.3,1.6+t(),.3,C("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ne({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:xt}),s=new je({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new On(l,l*1.1,4,4);for(let u of[i,s]){let f=new V(d,u);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new yt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new V(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)dn(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Oe(Nt(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new Ie("#FFF0DC","#B08A6A",1.05)),n.add(nt("#FFD29A",3,[-14,16,10],20,70))};be.noria=(n,e)=>{be.parque(n,{dusk:!0});let t=new le,i=C("#E8E2D2",{metalness:.4,roughness:.4}),s=new V(new tn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=w(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new le;c.add(w(.7,.6,.6,C(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=ut("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=w(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var Kr=(n,e=1.6)=>new Ne({color:n,emissive:n,emissiveIntensity:e}),Hn=(n="#A8ACB0")=>C(n,{metalness:.75,roughness:.32}),Ra=(n="#9EA2A6")=>{let e=Se(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=ke(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Ne({map:e,metalness:.7,roughness:.35})},ku=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Oe(Nt([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function Gu(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new In(e);i.colorSpace=Lt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new V(new Re(.5,.31),new je({map:i,toneMapped:!1}));return r.userData.set=s,r}function Vg(){let n=new le;n.add(w(.36,.9,.03,Hn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new V(new st(.04,.04,.02,16),Kr("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Oe(Nt([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new V(new st(.05,.05,.025,16),Kr("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Oe(Nt(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new le;for(let o=0;o<5;o++)r.add(w(.16,.012,.01,C("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}be.ascensor=(n,e)=>{n.background=new de("#08090C"),n.fog=new Le("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=Ra("#A4A8AC"),o=w(2.6,.1,2.4,C("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new V(new Re(2.4,2),new Ne({map:(()=>{let R=Se(256,256,T=>{T.fillStyle="#4A4440",T.fillRect(0,0,256,256),T.strokeStyle="#3A3430",T.lineWidth=3;for(let F=0;F<256;F+=32)T.beginPath(),T.moveTo(F,0),T.lineTo(F,256),T.stroke(),T.beginPath(),T.moveTo(0,F),T.lineTo(256,F),T.stroke()});return R.wrapS=R.wrapT=rn,R.repeat.set(3,3),R})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(w(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(w(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(w(2.6,.08,2.4,C("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(w(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(w(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(w(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Hn("#B4B8BC"),c=w(.56,2.2,.04,l,-.28,1.1,i+.03),h=w(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(w(.01,2.2,.045,C("#555"),0,1.1,i+.04));let d=w(1.1,2.2,.02,C("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=R=>{c.position.x=-.28-.55*R,h.position.x=.28+.55*R};let u=Gu(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let f=Vg();f.position.set(.85,1.25,i+.05),n.add(f),n.userData.botonera=f;for(let R of[-1,1])n.add(w(.04,.04,1.8,Hn("#C8CCD0"),R*(t-.06),.95,-.5));let g=new V(new Re(1.5,1.5),new Ne({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(w(.02,1.56,1.56,C("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Oe(Nt(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=Ut(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let p=new Xe("#FFF4E4",10,7,1.4);p.position.set(0,s-.3,-.3),p.castShadow=!0,n.add(p);let v=new V(new _n(.3,.06,.14),Kr("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new Xe("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new Ie("#E8ECF0","#3A3634",.5);n.add(y);let D=new Xe("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(R,T=0)=>{let F=Math.max(0,Math.min(1,R))*(1-T);m.material.emissiveIntensity=1.6*F,p.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),_.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};be.rellano=(n,e)=>{let t=!!e.night;n.background=new de("#14120F"),n.fog=new Le("#2A2620",.035),n.add(di(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(w(6.38,3.4,.3,C(i),-3.81,1.7,-3.2)),n.add(w(6.38,3.4,.3,C(i),3.81,1.7,-3.2)),n.add(w(1.24,1.2,.3,C(i),0,2.8,-3.2)),n.add(w(.3,3.4,10,C(i),-5,1.7,0)),n.add(w(.3,3.4,10,C(i),5,1.7,0)),n.add(w(14,.2,10,C("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(w(6.3,.9,.02,C(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(w(1.5,.12,.1,Hn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(w(.12,2.3,.1,Hn("#9EA2A6"),E*.69,1.13,-3.02));let s=new le;s.add(w(1.3,.05,1.6,C("#4A4440"),0,0,-.8)),s.add(w(1.3,2.2,.05,Ra(),0,1.1,-1.6));for(let E of[-1,1])s.add(w(.05,2.2,1.6,Ra(),E*.65,1.1,-.8));let r=Ut(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new Xe("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Hn("#B4B8BC"),l=w(.62,2.2,.05,a,-.31,1.1,-3),c=w(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=Gu(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=w(.1,.2,.03,Hn(),.95,1.2,-3.03);n.add(d);let u=new V(new yt(.03,10,8),Kr("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let f=ku(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(f.position.set(1.5,2.2,-3.03),n.add(f),e.portal){let E=new le;for(let p=0;p<12;p++)E.add(w(.36,.26,.04,C("#8E6242"),-.6+p%4*.4,-Math.floor(p/4)*.3,0)),E.add(w(.2,.02,.02,C("#2A2A2A"),-.6+p%4*.4,-Math.floor(p/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(w(.04,2.6,2,C("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Oe(Nt(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(w(1,2.2,.06,C("#6B4A33"),E,1.1,-3.02));let p=Oe(Nt([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);p.position.set(E,1.85,-2.98),n.add(p);let v=new V(new yt(.04,10,8),Hn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new V(new yt(.16,14,10),Kr("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let p=new Xe("#FFE0B0",t?6:9,9,1.4);p.position.set(E,2.9,-.8),p.castShadow=E<0,n.add(p)}n.add(new Ie("#F4ECE0","#4A4034",t?.35:.6))};var ts=3;be.hueco=(n,e)=>{n.background=new de("#05060C"),n.fog=new Le("#0A0C18",.02),Tt(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),wn(n,1600,220,3),jn(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*ts,i=C("#3A3A42",{roughness:.95});n.add(w(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(w(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*ts;if(n.add(w(4.1,.14,.1,C("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(w(4.1,.25,3.2,C("#5A5A64"),0,-.12,-.8)),g<=12){let m=Oe(Nt([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(w(.08,t,.08,Hn("#7A7E84"),g*1.75,t/2,-1.6));let s=new le,r=Ra("#A4A8AC");s.add(w(2.6,.12,2.2,C("#3A3634"),0,0,0)),s.add(w(2.6,.1,2.2,C("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(w(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(w(2.6,2.8,.08,r,0,1.4,-1.1));let o=Ut(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new Xe("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new Xe("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(w(.4,.3,.4,C("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=w(.18,.3,.18,C("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new V(new st(.6,.6,.3,24),Hn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new V(new st(.018,.018,1,6),Hn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=w(.7,1.6,.3,C("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new V(new st(.03,.03,1,6),Hn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let D=Math.max(.01,(t-m)*(1-E));_.scale.y=D,_.position.set(y,t-D/2,-.6)});let p=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*ts);for(let g=0;g<=12;g+=2){let E=new Xe("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*ts+2.2,.4),n.add(E)}n.add(new Ie("#6A78A8","#101018",.5));let f=ke(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let p=f()<.55,v=Ut(.8,1,p?"#FFD890":"#1A1C2A",p?1.2:.2);v.position.set(E*(3.2+m*1.6),g*ts+1.6,-.6),n.add(v),n.add(w(1.4,ts,.2,C("#2A2A34"),E*(3.2+m*1.6),g*ts+ts/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};be.feria=(n,e)=>{n.background=new de("#2A2018"),n.fog=new Le("#6A5A44",.03),n.add(di(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(w(.25,12,.25,C("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new V(new tn(2,.1,6,24,Math.PI),C("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=Ut(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(w(.6,.4,.02,C(t[l%3]),-8+l*2,9.5,-6));let i=C("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(w(.25,9,.25,i,l*1.4,4.5,-3));n.add(w(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=w(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new V(new st(.4,.4,.15,18),C("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new le;r.add(w(2.4,.15,1.8,C("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(w(.08,1,.08,i,l*1.1,.5,.8));r.add(w(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=w(.16,.2,.16,C("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new V(new st(.03,.03,1,6),C("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Oe(Nt(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new Ie("#FFE8C8","#5A4A38",.9)),n.add(nt("#FFD8A0",2.2,[-6,14,8],14,50))};var Wg=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));be.escalera=(n,e)=>{n.background=new de("#1E1A16"),n.fog=new Le("#2A2620",.04),n.add(di(14,10,"#C8B898","#B8A888",8)),n.add(w(16,7,.3,C("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=w(.34,.18*(15-o),1.6,C("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(w(.34,.03,1.62,C("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(w(2.6,2.6,1.6,C("#B8A890"),-4.3,1.3,-1.3));let i=new V(new st(.03,.03,5.7,8),C("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(w(.025,.9,.025,C("#2A2A2E"),-2.9+o*.32,Wg(-2.9+o*.32)+.45,-.5));let s=ku(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=Ut(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new Xe("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new Ie("#F4ECE0","#4A4034",.6))};var eo=[],Xg=999,qg=n=>n+1<Sa.length?Sa[n+1]:Xg,Eh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Yg=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[Eh(i,s,t),s,Eh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,Eh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},re=(n,e)=>{let t=Sa[n],i=qg(n),s=Math.min(i,517.7)-t;eo.push([(r,o)=>wu(r,o,Yg(e(s,t),s)),t,i])};var Ar=n=>({tipo:"humano",...n}),Ue=(n={})=>Ar({glow:.1,...n});var Zg=(n={})=>Ar({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var X=(n,e,t=0)=>Fu(e,n+t)-n,Ye=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Oe(Nt(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},Xt=(n,e,t,i,s={})=>Ye(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),yh=(n,e,t,i,s={})=>Ye(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var ne=(n,e,t,i=1e9,s)=>{let r=zt(t,t+.2,e)*(1-zt(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&hi(n,s)},Fa=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),Xu=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})};var zn=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),Pa=n=>n.pose({armL:[12,8],armR:[95,0]}),ws=n=>n.pose({armL:[60,70],armR:[60,70]}),Jg=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},ui=n=>{n.pose({armL:[8,6],armR:[8,6]}),Jg(n)};var ns=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e},jr=n=>{let e=[-1,1].map(t=>{let i=ut("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)};var xn=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=ut(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},qu=n=>{let e=[0,1,2].map(()=>{let t=Oe(uh("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),hi(o,s)})};var Yu=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),Ru(t),e.p2&&e.p2(t,i)}});var vh=(n,e,t=-.1)=>{let i=ns(e);n.position.set(i.x-.1,i.y+t,i.z+.1)},Rt=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Ar({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},Ot=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Oe(Cu(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var to=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)},Zu=(n,e,t=5,i=7)=>{let s=new Xe("#FFD8A0",t,i,1.6);return s.position.set(...e),n.add(s),s},Ia=(n={})=>Ar({outfit:"terno2",glow:0,...n}),Vu=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],Ju=(n,e={})=>{let[t,i,s]=Vu[n%Vu.length];return Ar({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},_h=(n=0,e={})=>Ju(n,{outfit:"jaleco",glasses:!0,...e}),ei={bg:"#C9361F",fg:"#fff"},$u={bg:"#2F5A9A",fg:"#fff"};var _t=(n,e,t,i,s=2.2)=>{let r={y:Ye,w:Xt,p:yh,r:(l,c,h,d)=>Ye(l,c,h,d,ei),b:(l,c,h,d)=>Ye(l,c,h,d,$u)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:X(e,l));return(l,c)=>o.forEach((h,d)=>ne(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))},$g=(n,e,t,i,s="#1E2230",r=.82)=>{let o=new V(new Re(e,t),new je({color:s,transparent:!0,opacity:r,depthWrite:!1}));return o.position.set(...i),o.renderOrder=4,n.add(o),o};var Ca=(n=[],e=[])=>{let t=Se(640,400,s=>{s.fillStyle="#F6EEDB",s.fillRect(0,0,640,400),s.fillStyle="#D8CCB0",s.fillRect(316,0,8,400),s.fillStyle="#2A2A34",s.textAlign="center",s.font="900 34px Fraunces",n.forEach((r,o)=>s.fillText(r,160,90+o*50)),e.forEach((r,o)=>s.fillText(r,480,90+o*50)),s.fillStyle="#9A8A70";for(let r=0;r<6;r++)s.fillRect(40,250+r*22,230,6),s.fillRect(360,250+r*22,230,6)});return new V(new Re(.9,.56),new Ne({map:t,roughness:.8}))},Qg=(n,e={})=>Se(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),xs=(n,e)=>{let t=new le;t.add(w(.62,1.18,.06,C("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new V(new Re(.56,1.04),new je({map:Qg(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t};var Gt=(n={})=>Zg({glow:0,...n});var is={bg:"#D66A86",fg:"#fff"},Qu={exposure:.95,bloom:.42},Mr=(n,e=.35,t="#E8667F")=>{let i=Oe(uh("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},Sr=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)},Ah=(n,e)=>{let t=new Xe("#9FC0FF",1.6,2.2,1.6);return n.add(t),()=>{let i=ns(e);t.position.set(i.x,i.y+.1,i.z+.3)}},Wu=(n,e,t)=>{let i=e.split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s},Kg=(n,e,t,i)=>{n.fillStyle="#F2C14E",n.beginPath(),n.arc(e,t,i,0,7),n.fill(),n.fillStyle="#2A2A34",n.beginPath(),n.arc(e-i*.35,t-i*.2,i*.12,0,7),n.arc(e+i*.35,t-i*.2,i*.12,0,7),n.fill(),n.strokeStyle="#2A2A34",n.lineWidth=i*.12,n.beginPath(),n.arc(e,t+i*.05,i*.5,.3,Math.PI-.3),n.stroke()},jg=(n,e,t,i,s="#E8445A")=>{n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.6,t-i*1.3,e,t-i*.45),n.bezierCurveTo(e+i*.6,t-i*1.3,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()},eE=(n,e,t)=>{n.fillStyle="#10131F",n.fillRect(0,0,540,1e3),n.fillStyle="#1E2336",n.fillRect(0,0,540,150),n.fillStyle="#E8667F",n.beginPath(),n.arc(70,92,34,0,7),n.fill(),n.fillStyle="#4A2A1A",n.beginPath(),n.arc(70,92,26,Math.PI,0),n.fill(),n.fillStyle="#fff",n.textAlign="left",n.font="800 34px Inter",n.fillText(t.name||"MI CRUSH \u2665",120,88),n.font="600 24px Inter",n.fillStyle=t.off?"#8A90A0":"#5FD08A",n.fillText(t.off?"desconectada":t.typing?"escribiendo\u2026":"en l\xEDnea",120,122),n.fillStyle="#C8CCD8",n.font="700 26px Inter",n.textAlign="right",n.fillText(t.hora||"00:00",515,40);let i=190;n.font="700 36px Inter";for(let[s,r]of e){if(r==="@smile"||r==="@heart"){let h=s==="r"?440:100;r==="@smile"?Kg(n,h,i+50,46):jg(n,h,i+50,44),i+=120;continue}if(s==="s"){n.font="900 40px Inter";let h=Wu(n,r,420),d=h.length*50+34;n.fillStyle="#C9361F",n.beginPath(),n.roundRect(40,i,460,d,20),n.fill(),n.fillStyle="#fff",n.textAlign="center",h.forEach((u,f)=>n.fillText(u,270,i+52+f*50)),i+=d+24,n.font="700 36px Inter";continue}let o=Wu(n,r,330),a=Math.max(...o.map(h=>n.measureText(h).width))+44,l=o.length*46+30,c=s==="r"?500-a:40;n.fillStyle=s==="r"?"#2E7D6A":"#EDEFF5",n.beginPath(),n.roundRect(c,i,a,l,26),n.fill(),n.fillStyle=s==="r"?"#fff":"#1A1C24",n.textAlign="left",o.forEach((h,d)=>n.fillText(h,c+22,i+46+d*46)),t.strike&&t.strike.includes(r)&&(n.strokeStyle="#FF5A5A",n.lineWidth=6,n.beginPath(),n.moveTo(c+10,i+l/2),n.lineTo(c+a-10,i+l/2),n.stroke()),i+=l+20}},Pi=(n,e,t,i,s={})=>{let r=new le;r.add(w(t*1.08,t*1.95,.06,C("#1A1A24",{metalness:.4}),0,0,0,!1));let o=document.createElement("canvas");o.width=540,o.height=1e3;let a=o.getContext("2d"),l=new In(o);l.colorSpace=Lt;let c=new V(new Re(t,t*1.852),new je({map:l,toneMapped:!1}));c.position.z=.032,r.add(c),r.position.set(...e),n.add(r);let h=new Xe("#9FC0FF",1.5,3,1.6);h.position.set(e[0],e[1],e[2]+.8),n.add(h);let d="";return r.userData.upd=(u,f={})=>{let g=i.filter(p=>u>=p[2]).map(p=>[p[0],p[1]]),E={...s,...f},m=JSON.stringify([g,E]);m!==d&&(d=m,eE(a,g.slice(-(E.max||7)),E),l.needsUpdate=!0)},r.userData.upd(0),r},tE=(n,e)=>Se(1024,512,t=>{t.clearRect(0,0,1024,512),t.fillStyle="#F2C14E",t.font="900 230px Fraunces",t.textAlign="center",t.fillText(n,512,270),t.fillStyle="#FBF7EC",t.font="900 70px Inter",t.fillText(e,512,400)}),nE=n=>Se(512,512,e=>{e.clearRect(0,0,512,512);for(let t=0;t<24;t++){let i=-Math.PI/2+t/24*Math.PI*2;e.strokeStyle=t<n?"#E8667F":"#3A3E4C",e.lineWidth=34,e.beginPath(),e.arc(256,256,220,i+.03,i+Math.PI*2/24-.03),e.stroke()}}),iE=(n,e,t,i)=>re(n,s=>({amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=Oe(nE(e),2.6,2.6);o.position.set(0,1.5,-1),r.add(o);let a=Oe(tE(t,i),2.4,1.2);a.position.set(0,1.5,-.95),a.renderOrder=6,r.add(a);let l=xn(r,8,"#FFB0C0");return{update:c=>{o.rotation.z=-c*.1;let h=zt(0,.25,c);a.scale.setScalar(.6+.4*h),l(c,[0,1.5,-.9,1.4])}}},c:[[0,1.5,2.4],[0,1.5,-1],[0,1.5,2],[0,1.5,-1]],range:3,blur:4,look:{bloom:.5}}));var sE=(n,e={})=>Se(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),Da=(n,e,t,i,s)=>{let r=Oe(sE(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r};var rE=n=>Se(256,200,e=>{e.clearRect(0,0,256,200),e.fillStyle=n;for(let t of[-1,1])e.beginPath(),e.ellipse(128+t*55,70,55,50,t*.4,0,7),e.fill(),e.beginPath(),e.ellipse(128+t*40,140,35,38,-t*.3,0,7),e.fill();e.fillStyle="#2A2A34",e.fillRect(122,40,12,130)}),oE=(n,e=10)=>{let t=[],i=["#F29AB0","#F2C14E","#8AC8F2","#B89AF2"];for(let s=0;s<e;s++){let r=Oe(rE(i[s%4]),.26,.2);r.renderOrder=5,n.add(r),t.push(r)}return(s,r,o,a=1)=>t.forEach((l,c)=>{let h=s*(.8+c*.07)+c*1.9;l.visible=a>0,l.position.set(r[0]+Math.cos(h)*(.4+c%3*.2),r[1]+Math.sin(h*1.3)*.35+c%4*.1,r[2]+Math.sin(h)*.3),hi(l,o),l.scale.set(Math.max(.15,Math.abs(Math.sin(s*14+c)))*a,a,1)})};var Ku=n=>{n.add(w(1.3,2.4,.2,C("#5A3A28"),0,1.2,-1.6)),n.add(w(1.1,2.2,.05,C("#2F4A3A"),0,1.15,-1.48));let e=new Xe("#FFD8A0",3,4,1.6);e.position.set(0,2.6,-1),n.add(e);let t=Oe(Nt(["N\xBA 7"],{bg:"#F4F0E4",fg:"#2A2A34",size:80,w:300,h:150}),.4,.2);t.position.set(0,2.55,-1.45),n.add(t)};var ju={amb:"barrio",ambo:{night:!0}};var ss=n=>{let e=new V(new On(.05,.26,8),C("#111"));return e.position.set(.06,.36,0),e.rotation.z=-.35,n.head.add(e),e};var Gn=(n,e,t,i)=>iE(n,e,t,i),no={bg:"#F2C14E",fg:"#2A2A34"},br={bg:"#E8447A",fg:"#FFFFFF"};var Mh=(n,e,t=0)=>{if(e==="inicio"||e==="coche"){let r=n.createLinearGradient(0,0,0,576);r.addColorStop(0,e==="coche"?"#1A1240":"#3A1E6A"),r.addColorStop(.55,e==="coche"?"#6A2A6A":"#E8447A"),r.addColorStop(1,"#FFB06A"),n.fillStyle=r,n.fillRect(0,0,1024,576),n.fillStyle="#FFD27A",n.beginPath(),n.arc(512,330,120,0,7),n.fill(),n.fillStyle="rgba(58,30,106,.55)";for(let a=0;a<6;a++)n.fillRect(392,300+a*22,240,8);n.fillStyle="#2A1440";for(let a=0;a<16;a++){let l=60+a*53%140;n.fillRect(a*66,400-l,56,l)}n.fillStyle="#1A0E2A",n.fillRect(0,400,1024,176),n.strokeStyle="#FFD27A",n.lineWidth=8,n.setLineDash([40,30]),n.lineDashOffset=-t*400,n.beginPath(),n.moveTo(0,490),n.lineTo(1024,490),n.stroke(),n.setLineDash([]);let o=(a,l)=>{n.strokeStyle="#140A20",n.lineWidth=14*l,n.beginPath(),n.moveTo(a,400),n.quadraticCurveTo(a+20*l,300,a+10*l,210),n.stroke(),n.fillStyle="#140A20";for(let c=0;c<6;c++){let h=c/6*Math.PI*2;n.beginPath(),n.ellipse(a+10*l+Math.cos(h)*50*l,210+Math.sin(h)*18*l,60*l,12*l,h,0,7),n.fill()}};if(o(120,1.1),o(900,1.2),o(780,.8),e==="coche"){let a=380+Math.sin(t*3)*40;n.fillStyle="#E8447A",n.beginPath(),n.roundRect(a,440,220,60,14),n.fill(),n.fillStyle="#FF8AB0",n.beginPath(),n.roundRect(a+50,410,110,40,10),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(a+45,505,22,0,7),n.arc(a+175,505,22,0,7),n.fill();let l=Math.sin(t*14)>0;n.fillStyle="#222",n.beginPath(),n.roundRect(a-260,445,180,55,12),n.fill(),n.fillStyle=l?"#3A7AFF":"#FF3A3A",n.fillRect(a-200,430,30,16),n.fillStyle=l?"#FF3A3A":"#3A7AFF",n.fillRect(a-160,430,30,16),n.fillStyle="#111",n.beginPath(),n.arc(a-220,505,20,0,7),n.arc(a-110,505,20,0,7),n.fill(),n.strokeStyle="rgba(255,255,255,.5)",n.lineWidth=4;for(let c=0;c<8;c++){let h=420+c*12;n.beginPath(),n.moveTo(a+240+c*10,h),n.lineTo(a+320+c*10,h),n.stroke()}}e==="inicio"&&(n.fillStyle="#FFFFFF",n.font="900 46px Inter",n.textAlign="center",Math.sin(t*5)>-.3&&n.fillText("PULSA START",512,560));return}if(e==="cargando"){n.fillStyle="#10101A",n.fillRect(0,0,1024,576),n.fillStyle="#fff",n.font="900 60px Inter",n.textAlign="center",n.fillText("CARGANDO\u2026",512,260),n.fillStyle="#333",n.fillRect(212,320,600,30),n.fillStyle="#E8447A",n.fillRect(212,320,600*Math.min(1,t*.25%1.2),30);return}if(e==="apagada"){n.fillStyle="#08080C",n.fillRect(0,0,1024,576);return}if(e==="pausa"){Mh(n,"inicio",0),n.fillStyle="rgba(10,10,20,.6)",n.fillRect(0,0,1024,576),n.fillStyle="#fff",n.font="900 70px Inter",n.textAlign="center",n.fillText("PARTIDA GUARDADA",512,300);return}},Rs=(n,e,t=2,i="inicio")=>{let s=new le,r=t*576/1024;s.add(w(t+.12,r+.12,.08,C("#141418",{metalness:.3}),0,0,-.05,!1));let o=document.createElement("canvas");o.width=1024,o.height=576;let a=o.getContext("2d"),l=new In(o);l.colorSpace=Lt;let c=new V(new Re(t,r),new je({map:l,toneMapped:!1}));s.add(c);let h=new Xe("#FF8AB0",2.5,5,1.6);h.position.set(0,0,.8),s.add(h),s.position.set(...e),n.add(s);let d="";return s.userData.upd=(u,f=i)=>{let g=f+Math.round(u*12);g!==d&&(d=g,Mh(a,f,u),l.needsUpdate=!0,h.intensity=f==="apagada"?0:2.5)},s.userData.upd(0),s},aE=()=>{let n=new le;return n.add(w(.5,.12,.38,C("#F4F2EE",{roughness:.4}),0,.06,0)),n.add(w(.5,.02,.02,C("#7FD0FF"),0,.08,.2,!1)),n},ef=(n,e,t,i=2.4)=>{n.add(w(i,.5,.5,C("#3A2A20"),e,.25,t));let s=aE();s.position.set(e+i*.3,.5,t),n.add(s)},mn=()=>{let n=new le;n.add(w(.26,.1,.12,C("#22222A",{roughness:.5}),0,0,0,!1));for(let e of[-1,1]){let t=w(.08,.14,.1,C("#22222A"),e*.12,-.05,0,!1);t.rotation.z=e*.3,n.add(t)}return n.add(w(.03,.03,.02,C("#E8447A"),.07,.03,.06,!1)),n.add(w(.03,.03,.02,C("#5FD08A"),.1,0,.06,!1)),n},Dn=(n,e)=>{let t=ns(e);n.position.set(t.x,t.y+.02,t.z+.12)},kn=(n,e,t=1)=>n.pose({armL:[55,60],armR:[55,60],lean:Math.sin(e*3)*4*t,bob:Math.abs(Math.sin(e*6))*.01*t}),tf=()=>{let n=new le;n.add(w(.3,.4,.1,C("#F2C14E",{roughness:.4}),0,.2,0));let e=Oe(Nt(["PATATAS"],{bg:"#C9361F",fg:"#fff",size:70,w:420,h:130}),.26,.08);return e.position.set(0,.24,.055),n.add(e),n},io=(n,e,t,i,s={})=>{let r=s.w||900,o=s.h||220,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=new In(a);c.colorSpace=Lt;let h=new V(new Re(t,t*o/r),new je({map:c,transparent:!0,toneMapped:!1}));h.position.set(...e),h.renderOrder=6,n.add(h);let d="";return h.userData.upd=u=>{let f=i(u);f!==d&&(d=f,l.clearRect(0,0,r,o),l.fillStyle=s.bg||"#1E2230",l.beginPath(),l.roundRect(0,0,r,o,30),l.fill(),l.fillStyle=s.fg||"#F2C14E",l.font=`900 ${s.size||110}px Inter`,l.textAlign="center",l.textBaseline="middle",l.fillText(f,r/2,o/2+6),c.needsUpdate=!0)},h.userData.upd(0),h},lE=n=>Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),cE=()=>Se(1024,640,n=>{n.fillStyle="#141418",n.beginPath(),n.roundRect(0,0,1024,640,30),n.fill(),Mh(n,"inicio",0),n.fillStyle="rgba(0,0,0,.35)",n.fillRect(0,0,1024,576),n.fillStyle="#E8333A",n.beginPath(),n.roundRect(422,230,180,124,34),n.fill(),n.fillStyle="#fff",n.beginPath(),n.moveTo(490,262),n.lineTo(550,292),n.lineTo(490,322),n.fill(),n.fillStyle="#141418",n.fillRect(0,576,1024,64),n.fillStyle="#fff",n.font="800 38px Inter",n.textAlign="left",n.fillText("TR\xC1ILER 1 \xB7 DICIEMBRE 2023",30,622)}),hE=(n,e,t=2.2)=>{let i=Oe(cE(),t,t*640/1024);return i.position.set(...e),i.renderOrder=4,n.add(i),i},dE=(n,e)=>Se(512,420,t=>{t.fillStyle="#FBF7EC",t.beginPath(),t.roundRect(0,0,512,420,26),t.fill(),t.fillStyle="#C9361F",t.beginPath(),t.roundRect(0,0,512,110,[26,26,0,0]),t.fill(),t.fillStyle="#fff",t.font="900 52px Inter",t.textAlign="center",t.fillText("SALE EN\u2026",256,76),t.fillStyle="#2A2A34",t.font="900 80px Fraunces",n.split(`
`).forEach((i,s,r)=>t.fillText(i,256,250-(r.length-1)*45+s*90)),e&&(t.strokeStyle="#C9361F",t.lineWidth=22,t.beginPath(),t.moveTo(60,150),t.lineTo(452,380),t.moveTo(452,150),t.lineTo(60,380),t.stroke())}),_r=(n,e,t,i,s)=>{let r=Oe(dE(e,t),i,i*420/512);return r.position.set(...s),r.renderOrder=5,n.add(r),r},uE=()=>{let n=new V(new yt(.28,20,14),C("#E8667F",{roughness:.9}));return n.scale.set(1.3,.55,1),n.castShadow=!0,n},fE=(n,e,t)=>{n.add(w(.06,.4,.06,C("#F2C14E"),e,.2,t-.5)),n.add(w(.06,.4,.06,C("#F2C14E"),e,.2,t+.5)),n.add(w(.06,.06,1,C("#C9361F"),e,.38,t))},nf=(n,e,t,i=2,s="#2F5A9A")=>n.add(w(i,.08,1.4,C(s,{roughness:.9}),e,.04,t));var pE=(n,e)=>n.pose({armL:[150+Math.sin(e*14)*15,40],armR:[150+Math.cos(e*14)*15,40],bob:Math.abs(Math.sin(e*14))*.04}),sf=(n,e)=>n.walk(e*3.2),un={amb:"cuartoYo",ambo:{night:!0}},gn={exposure:.95,bloom:.45},Ii=(n,e="apagada")=>(ef(n,1.4,-2.2,1.8),Rs(n,[1.4,1.35,-2.1],1.5,e)),Sh="EL GRUPO \u{1F3AE}";re(0,(n,e)=>({...un,fov:32,atores:[Ue({x:-.3,z:-.4,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[12,8],bob:Math.abs(Math.sin(i*5))*.02})})],extra:t=>{let i=Ii(t,"apagada"),s=Ye(t,["MI\xC9RCOLES \xB7 NOCHE"],1.7,[-.3,2.2,-.4],{bg:"#1E2230",fg:"#F2C14E"});return{update:(r,o,a)=>{i.userData.upd(r),ne(s,r,.2,99,a)}}},c:[[0,1.7,3.4],[.2,1.4,-.8],[0,1.65,2.9],[.2,1.4,-.8]],range:3,look:gn}));re(1,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=_r(t,"MA\xD1ANA",!1,1.5,[0,1.6,-.5]),s=xn(t,12,"#FFE27A");return{update:(r,o,a)=>{ne(i,r,.05,99,a),s(r,[0,1.6,-.4,1])}}},c:[[0,1.6,3.6],[0,1.6,-.5],[0,1.6,3],[0,1.6,-.5]],range:3,look:{bloom:.5}}));re(2,(n,e)=>({...un,fov:30,atores:[Ue({x:-.3,z:-.4,eyes:[[0,"heart"]],pose:ws})],extra:t=>{Ii(t);let i=yh(t,["A\xD1OS ESPERANDO"],1.5,[-.3,2.2,-.4]);return{update:(s,r,o)=>ne(i,s,.2,99,o)}},c:[[-.3,1.6,2.8],[-.3,1.45,-.4],[-.3,1.6,2.4],[-.3,1.45,-.4]],range:3,look:gn}));re(3,(n,e)=>{let t=X(e,"gta");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=Rs(i,[0,1.3,-.8],2.2,"inicio"),r=Ye(i,["SALE GTA 6"],1.6,[0,2.25,-.5],br),o=xn(i,14,"#FF8AB0");return{update:(a,l,c)=>{s.userData.upd(a),ne(r,a,t-.2,99,c),o(a,[0,1.6,-.6,1.5],zt(t-.2,t+.3,a))}}},c:[[0,1.4,3.8],[0,1.3,-.8],[0,1.4,3.2],[0,1.3,-.8]],range:3,look:{bloom:.55}}});re(4,(n,e)=>{let t=X(e,"consola"),i=X(e,"mandos"),s=X(e,"patatas");return{...un,fov:32,atores:[Ue({x:-1,z:-.4,eyes:[[0,"happy"]],pose:(r,o)=>o>s?Pa(r):r.pose({armL:[12,8],armR:[60,70]})})],extra:r=>{let o=Ii(r,"cargando");r.add(w(1,.5,.6,C("#8E6242"),.2,.25,-.6));let a=mn(),l=mn();a.position.set(0,.55,-.5),l.position.set(.35,.55,-.55),l.rotation.y=.4;let c=tf();c.position.set(-.5,.5,-1),r.add(a,l,c);let h=_t(r,e,[[["TODO PLANEADO"],0,"y",[-1,2.2,-.4],1.6],[["\u2713 CONSOLA"],"consola","w",[.9,2.3,-1.2],1.2],[["\u2713 MANDOS"],"mandos","w",[.9,2.3,-1.2],1.2],[["\u2713 PATATAS"],"patatas","w",[.9,2.3,-1.2],1.2,1]]);return{update:(d,u,f)=>{o.userData.upd(d,"cargando"),h(d,f)}}},c:[[0,1.7,3.4],[.1,1.3,-.7],[0,1.6,2.8],[.1,1.2,-.7]],range:3,look:gn}});re(5,(n,e)=>{let t=X(e,"pacto"),i=(s,r)=>s.pose({armL:[12,8],armR:[r>t?80:12,70]});return{amb:"gris",fov:30,k:1,atores:[Ue({x:-1.35,z:-.4,eyes:[[0,"happy"]],pose:i}),Ia({x:-.45,z:-.6,eyes:[[0,"happy"]],pose:i}),Rt(1,{x:.45,z:-.6,eyes:[[0,"happy"]],pose:i}),Rt(4,{x:1.35,z:-.4,eyes:[[0,"happy"]],pose:i})],extra:s=>{let r=_t(s,e,[[["EL PACTO"],"pacto","y",[0,2.3,-.4],1.2],[["NADIE SALE DE CASA"],"nadie","r",[0,2.3,-.4],2,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,4.4],[0,1.45,-.5],[0,1.6,3.9],[0,1.45,-.5]],range:3}});re(6,(n,e)=>{let t=X(e,"vibra");return{...un,fov:30,atores:[Ue({x:-.6,z:-.4,eyes:[[0,"happy"],[t+.2,"wide"]],pose:(i,s)=>i.pose({head:s>t+.2?15:0})})],extra:i=>{Ii(i,"inicio"),i.add(w(.8,.6,.5,C("#8E6242"),.5,.3,-.4));let s=xs(["MENSAJE NUEVO"],{hora:"22:47"});s.rotation.x=-Math.PI/2+.3,s.scale.setScalar(.35),s.position.set(.5,.63,-.35),i.add(s);let r=new Xe("#9FC0FF",0,2,1.6);r.position.set(.5,1,-.2),i.add(r);let o=Ye(i,["\xA1BZZZ!"],.9,[.6,1.4,-.2],ei);return{update:(a,l,c)=>{let h=a>t;s.position.x=.5+(h&&a*10%1<.5?.015:0),r.intensity=h?2.5:0,ne(o,a,t,99,c)}}},c:[[0,1.6,2.8],[0,1.2,-.4],[0,1.5,2.4],[0,1.1,-.4]],range:3,look:gn}});re(7,(n,e)=>{let t=X(e,"crush");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=Pi(i,[0,1.5,-.5],1.15,[],{hora:"22:47",name:"MI CRUSH \u2665",typing:!0}),r=Ye(i,["DE TU CRUSH"],1.4,[0,.45,.4],is),o=Mr(i,.5);return o.position.set(.95,2.3,-.3),{update:(a,l,c)=>{s.userData.upd(a),ne(r,a,t-.2,99,c),o.visible=a>t,o.scale.setScalar(Sr(a,140))}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});re(8,(n,e)=>({amb:"gris",fov:28,k:1,atores:[],extra:t=>{let i=Pi(t,[0,1.5,-.5],1.15,[["l","Oye\u2026 \xBFte apetece quedar ma\xF1ana por la tarde?",.1]],{hora:"22:47",name:"MI CRUSH \u2665"});return{update:s=>i.userData.upd(s)}},c:[[0,1.5,3.9],[0,1.6,-.5],[0,1.5,3.4],[0,1.6,-.5]],range:2,blur:4}));re(9,(n,e)=>{let t=X(e,"mismo");return{...un,fov:32,atores:[Ue({x:-.4,z:-.4,eyes:[[0,"wide"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[60,70],head:Math.sin(s*4)*14})})],extra:i=>{let s=Ii(i,"inicio"),r=Mr(i,.45);r.position.set(-1.4,1.9,-.4);let o=Ye(i,["\xA1EL MISMO D\xCDA!"],1.7,[-.4,2.25,-.4],ei);return{update:(a,l,c)=>{s.userData.upd(a),r.scale.setScalar(Sr(a,130)),hi(r,c),ne(o,a,t-.2,99,c),to(c,a>t&&a<t+.5?.02:0,a)}}},c:[[0,1.7,3.6],[0,1.4,-.7],[0,1.65,3.1],[0,1.4,-.7]],range:3,look:gn}});re(10,(n,e)=>{let t=X(e,"suscribete");return{...un,fov:32,atores:[Ue({x:-1,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s>t?Fa(i,s):i.pose()})],extra:i=>{let s=Ou(2.4);s.position.set(.7,1.8,-1),i.add(s);let r=xn(i,14,"#FFE27A"),o=Xt(i,["\xBFQU\xC9 HACES?"],1.3,[-1,2.3,-.3]);return{update:(a,l,c)=>{ne(o,a,.2,99,c);let h=zt(t-.3,t,a);s.scale.setScalar(Math.max(.01,h)),s.rotation.z=a>t+.6&&a<t+1.6?Math.sin(a*40)*.05:0,r(a,[.7,1.8,-.9,1.1],zt(t,t+.3,a))}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3,look:gn}});re(11,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ue({x:0,z:-.4,eyes:[[0,"lookl"],[1.2,"look"]],pose:(t,i)=>t.pose({head:i<1.2?14:-14})})],extra:t=>{let i=xs(["MI CRUSH \u2665"],{hora:"22:48"});i.position.set(-1.3,1.5,-.5),i.scale.setScalar(.9),t.add(i);let s=Rs(t,[1.5,1.5,-.6],1.3,"inicio"),r=Xt(t,["\xBFQU\xC9 PASAR\xC1?"],1.4,[0,2.25,-.4]);return{update:(o,a,l)=>{s.userData.upd(o),ne(r,o,.3,99,l)}}},c:[[0,1.6,4.4],[0,1.45,-.4],[0,1.6,3.9],[0,1.45,-.4]],range:3,look:gn}));Gn(12,23,"23:00","MI\xC9RCOLES");re(13,(n,e)=>{let t=X(e,"lees");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=Pi(i,[-.5,1.5,-.5],1,[["l","Oye\u2026 \xBFte apetece quedar ma\xF1ana por la tarde?",0]],{hora:"23:00",name:"MI CRUSH \u2665"}),r=io(i,[1,1.9,-.4],1,a=>`${Math.min(10,Math.max(1,Math.floor((a-t)*4)+1))}x`,{w:420,h:200,size:120,bg:"#C9361F",fg:"#fff"}),o=Xt(i,["LE\xCDDO"],.8,[1,1.35,-.4]);return{update:(a,l,c)=>{s.userData.upd(a),r.userData.upd(a),r.visible=a>t,ne(o,a,t,99,c)}}},c:[[.2,1.5,4],[.2,1.5,-.5],[.2,1.5,3.6],[.2,1.5,-.5]],range:2,blur:4}});re(14,(n,e)=>{let t=X(e,"borras"),i=X(e,"escribes",1),s=X(e,"borras",t+.3);return{amb:"gris",fov:28,k:1,atores:[],extra:r=>{let o=Pi(r,[-.5,1.5,-.5],1,[["l","Oye\u2026 \xBFte apetece quedar ma\xF1ana por la tarde?",0]],{hora:"23:02",name:"MI CRUSH \u2665",typing:!0}),a=_t(r,e,[[["\u201C\xA1S\xCD!\u201D"],.1,"w",[1.05,1.9,-.4],.9],[["\u2717 BORRADO"],t-.1,"r",[1.05,1.9,-.4],1.1],[["\u201CES QUE MA\xD1ANA\u2026\u201D"],i,"w",[1.05,1.9,-.4],1.5],[["\u2717 BORRADO"],s-.1,"r",[1.05,1.9,-.4],1.1,1]]);return{update:(l,c,h)=>{o.userData.upd(l),a(l,h)}}},c:[[.2,1.5,4],[.2,1.5,-.5],[.2,1.5,3.6],[.2,1.5,-.5]],range:2,blur:4}});re(15,(n,e)=>{let t=X(e,"arde"),i=X(e,"queda"),s=X(e,"dormido"),r=X(e,"traidor");return{amb:"gris",fov:28,k:1,atores:[],extra:o=>{let a=Pi(o,[0,1.5,-.5],1.15,[["l","\xA1Queda una hora!",i-.1],["l","\xA1Yo he dormido la siesta para aguantar!",s-.4],["l","El que salga de casa ma\xF1ana es un traidor.",r-1.2]],{hora:"23:00",name:Sh}),l=Ye(o,["\u{1F525} EL CHAT ARDE"],1.3,[1.15,2.4,-.3],ei);return{update:(c,h,d)=>{a.userData.upd(c),ne(l,c,t-.2,99,d)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});re(16,(n,e)=>({...un,fov:30,atores:[Ue({x:-.2,z:-.4,eyes:[[0,"flat"]],pose:t=>t.pose({armL:[12,8],armR:[70,90],head:-10})})],extra:(t,i,s)=>{let r=xs(["MI CRUSH \u2665"],{hora:"23:04"});r.scale.setScalar(.35),t.add(r);let o=Ah(t,s[0]),a=Xt(t,["\xBFY AHORA QU\xC9?"],1.4,[-.2,2.2,-.4]);return{update:(l,c,h)=>{vh(r,s[0],.05),o(),ne(a,l,X(e,"saber")-.2,99,h)}}},c:[[-.2,1.6,2.4],[-.2,1.45,-.4],[-.2,1.55,2],[-.2,1.45,-.4]],range:2.5,look:gn}));re(17,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=Rs(t,[0,1.3,-.8],2,"coche"),s=Ye(t,["NO ES CUALQUIER JUEGO"],1.9,[0,2.2,-.5],br);return{update:(r,o,a)=>{i.userData.upd(r,"coche"),ne(s,r,.2,99,a)}}},c:[[0,1.4,3.6],[0,1.35,-.8],[0,1.4,3.1],[0,1.35,-.8]],range:3,look:{bloom:.55}}));re(18,(n,e)=>{let t=X(e,"90"),i=X(e,"horas");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=hE(s,[0,1.85,-.6],2.3),o=io(s,[0,.7,-.3],2.2,l=>lE(9e7*zt(t-1.5,t+.4,l)),{size:120}),a=Xt(s,["VISITAS EN 24 HORAS"],1.8,[0,.2,-.1]);return{update:(l,c,h)=>{o.userData.upd(l),ne(a,l,i-.3,99,h)}}},c:[[0,1.4,4.4],[0,1.3,-.5],[0,1.4,3.9],[0,1.3,-.5]],range:3,blur:5,look:{bloom:.45}}});re(19,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=new le,s=C("#F2C14E",{metalness:.15,roughness:.35}),r=new V(new st(.38,.18,.55,24),s);r.position.y=.5,i.add(r,w(.12,.3,.12,s,0,.1,0),w(.5,.1,.4,s,0,-.05,0));for(let c of[-1,1]){let h=new V(new tn(.14,.035,8,16),s);h.position.set(c*.42,.55,0),i.add(h)}i.position.set(0,1.1,-.6),t.add(i);let o=Ye(t,["R\xC9CORD GUINNESS"],1.9,[0,2.4,-.5],no),a=Xt(t,["EL ANUNCIO DE UN JUEGO M\xC1S VISTO"],2.4,[0,.8,-.1]),l=xn(t,14,"#FFE27A");return{update:(c,h,d)=>{i.rotation.y=c*.8,ne(o,c,.1,99,d),ne(a,c,X(e,"anuncio")-.2,99,d),l(c,[0,1.6,-.5,1])}}},c:[[0,1.6,4],[0,1.5,-.5],[0,1.6,3.5],[0,1.5,-.5]],range:3,look:{bloom:.55}}));re(20,(n,e)=>{let t=X(e,"2025"),i=X(e,"mayo"),s=X(e,"noviembre");return{amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=_r(r,"2025",!1,1.1,[-1.4,1.6,-.5]),a=_r(r,"2025",!0,1.1,[-1.4,1.6,-.49]),l=_r(r,`MAYO
2026`,!1,1.1,[0,1.6,-.5]),c=_r(r,`MAYO
2026`,!0,1.1,[0,1.6,-.49]),h=_r(r,`19 NOV
2026`,!1,1.1,[1.4,1.6,-.5]),d=Ye(r,["RETRASOS"],1.4,[0,2.6,-.5],ei),u=Ye(r,["\xA1POR FIN!"],1,[1.4,.7,-.3],br);return{update:(f,g,E)=>{ne(d,f,.1,99,E),ne(o,f,t-.2,99,E),a.visible=f>i-.2,o.visible=o.visible&&!a.visible,ne(l,f,i-.2,99,E),c.visible=f>s-.8,l.visible=l.visible&&!c.visible,ne(h,f,s-.6,99,E),ne(u,f,s+.3,99,E)}}},c:[[0,1.6,4.6],[0,1.6,-.5],[0,1.6,4.1],[0,1.6,-.5]],range:3}});re(21,(n,e)=>{let t=X(e,"ella");return{...un,fov:30,atores:[Ue({x:-.4,z:-.4,eyes:[[0,"flat"],[t,"heart"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?70:12,90]})})],extra:(i,s,r)=>{Ii(i,"inicio");let o=xs(["MI CRUSH \u2665"],{hora:"23:10"});o.scale.setScalar(.35),i.add(o);let a=Ah(i,r[0]),l=_t(i,e,[[["A\xD1OS ESPERANDO\u2026"],0,"w",[-.4,2.2,-.4],1.6],[["\u2026Y JUSTO ESE D\xCDA, ELLA"],"justo","p",[-.4,2.2,-.4],2.1,1]]);return{update:(c,h,d)=>{vh(o,r[0],.05),o.visible=c>t,a(),l(c,d)}}},c:[[0,1.65,3],[-.2,1.45,-.5],[0,1.6,2.6],[-.2,1.45,-.5]],range:3,look:gn}});Gn(22,24,"00:00","MEDIANOCHE");re(23,(n,e)=>{let t=X(e,"fotos"),i=X(e,"tambien");return{...un,fov:32,atores:[Ue({x:-.6,z:0,eyes:[[0,"wide"],[i,"happy"]],pose:(s,r)=>r>i?kn(s,r):s.pose()})],extra:(s,r,o)=>{let a=Ii(s),l=mn();s.add(l);let c=Ye(s,["\xA1DESBLOQUEADO!"],1.6,[1.4,2.3,-2],br),h=Xt(s,["FOTOS Y M\xC1S FOTOS"],1.5,[-.6,2.2,0]);return{update:(d,u,f)=>{a.userData.upd(d,d<.8?"cargando":"inicio"),ne(c,d,.6,99,f),ne(h,d,t-.2,i-.1,f),Dn(l,o[0]),l.visible=d>i}}},c:[[-1.2,1.6,2.4],[.6,1.3,-1.6],[-1,1.55,2],[.6,1.3,-1.6]],range:3.5,look:{exposure:.95,bloom:.5}}});re(24,(n,e)=>{let t=X(e,"sol"),i=X(e,"playa"),s=X(e,"coches"),r=X(e,"olvidas");return{...un,fov:30,atores:[Ue({x:0,z:.4,eyes:[[0,"wide"],[r,"happy"]],pose:kn})],extra:(o,a,l)=>{let c=Rs(o,[0,1.4,-1.6],2.6,"inicio"),h=mn();o.add(h);let d=_t(o,e,[[["EL SOL"],"sol","y",[-1.1,2.6,-1.4],.9],[["LA PLAYA"],"playa","y",[0,2.6,-1.4],1],[["LOS COCHES"],"coches","y",[1.1,2.6,-1.4],1.1]].map(u=>[...u,1]));return{update:(u,f,g)=>{c.userData.upd(u,u>s?"coche":"inicio"),Dn(h,l[0]),d(u,g)}}},c:[[1.6,1.8,2.6],[0,1.5,-1.4],[1.3,1.75,2.2],[0,1.5,-1.4]],range:3.5,look:{exposure:.95,bloom:.55}}});re(25,(n,e)=>{let t=X(e,"contestar");return{...un,fov:26,atores:[],extra:i=>{i.add(w(1.2,.6,.7,C("#8E6242"),0,.3,-.4));let s=xs(["1 MENSAJE","MI CRUSH \u2665"],{hora:"00:41"});s.rotation.x=-Math.PI/2+.5,s.scale.setScalar(.45),s.position.set(0,.66,-.35),i.add(s);let r=new Xe("#9FC0FF",2.5,2,1.6);r.position.set(0,1,-.1),i.add(r);let o=Ye(i,["SIN CONTESTAR"],1,[0,1.08,-.1],ei);return{update:(a,l,c)=>{r.intensity=1.5+Math.sin(a*4)*1,ne(o,a,t-.3,99,c)}}},c:[[0,1.4,1.8],[0,.7,-.4],[0,1.3,1.4],[0,.75,-.4]],range:1.5,look:gn}});re(26,(n,e)=>{let t=X(e,"vivido");return{amb:"gris",fov:30,k:1,atores:[Ue({x:0,z:-.4,eyes:[[0,"look"],[t-.3,"wide"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>1?150:12,40]})})],extra:i=>{let s=_t(i,e,[[["LO CURIOSO\u2026"],0,"w",[0,2.2,-.4],1.3],[["LA EMOCI\xD3N"],"emocion","p",[0,2.2,-.4],1.3],[["\xA1YA LA HAS VIVIDO!"],"vivido","y",[0,2.2,-.4],1.8,1]]),r=xn(i,10,"#FFE27A");return{update:(o,a,l)=>{s(o,l),r(o,[0,1.5,-.3,.8],o>t?1:0)}}},c:[[0,1.6,3.6],[0,1.5,-.4],[0,1.6,3.1],[0,1.5,-.4]],range:3}});re(27,(n,e)=>{let t=X(e,"1500"),i=X(e,"vacaciones");return{amb:"playa",fov:32,atores:[_h(1,{x:1.6,z:-.3,eyes:[[0,"look"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[60,70]})}),Rt(0,{x:-1.4,z:-.6,eyes:[[0,"happy"]]}),Rt(2,{x:-.5,z:-.8,eyes:[[0,"happy"]],pose:Fa}),Rt(4,{x:.4,z:-.6,eyes:[[0,"happy"]]})],extra:s=>{let r=_t(s,e,[[["+1.500 PERSONAS"],"1500","y",[-.5,2.3,-.6],1.7],[["ANTES Y DESPU\xC9S DE LAS VACACIONES"],"vacaciones","w",[-.2,2.3,-.6],2.8,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.7,3.8],[0,1.4,-.5],[0,1.65,3.3],[0,1.4,-.5]],range:3.5}});re(28,(n,e)=>{let t=X(e,"antes"),i=X(e,"ilusion"),s=X(e,"volver");return{amb:"gris",fov:30,k:1,atores:[Ue({x:-1.6,z:-.3,eyes:[[0,"look"],[t,"happy"],[s,"flat"]],pose:(r,o)=>o>s?r.pose():Pa(r)})],extra:r=>{let o=Da(r,[[`ESPERANDO
EL VIAJE`,.92,"#F2C14E"],[`AL
VOLVER`,.45,"#8AA8C8"]],2.2,[.5,1.55,-.5],{title:"FELICIDAD"}),a=_t(r,e,[[["LLEGABA ANTES"],"antes","y",[.5,2.55,-.4],1.5],[["LA ILUSI\xD3N"],"ilusion","p",[.5,2.45,-.4],1.3],[["AL VOLVER: LO NORMAL"],"volver","w",[.5,2.55,-.4],2,1]]);return{update:(l,c,h)=>{ne(o,l,.2,99,h),a(l,h)}}},c:[[-.3,1.6,4.2],[-.3,1.55,-.4],[-.3,1.6,3.7],[-.3,1.55,-.4]],range:3}});re(29,(n,e)=>{let t=X(e,"juego");return{...un,fov:30,atores:[Ue({x:-.5,z:-.4,eyes:[[0,"happy"]]})],extra:i=>{let s=Ii(i,"inicio"),r=_t(i,e,[[["A\xD1OS DE ILUSI\xD3N"],0,"p",[-.5,2.2,-.4],1.6],[["EL JUEGO SEGUIR\xC1 AH\xCD"],"juego","w",[-.2,2.2,-.4],2,1]]),o=xn(i,10,"#C8A8FF");return{update:(a,l,c)=>{s.userData.upd(a),r(a,c),o(a,[-.5,1.4,-.3,.7],a<t?1:0)}}},c:[[0,1.65,3.2],[.1,1.4,-.7],[0,1.6,2.7],[.1,1.4,-.7]],range:3,look:gn}});Gn(30,1,"1:00","DE LA MADRUGADA");re(31,(n,e)=>{let t=X(e,"hora"),i=X(e,"cinco"),s=X(e,"parque"),r=X(e,"carita");return{amb:"gris",fov:28,k:1,atores:[],extra:o=>{let a=Pi(o,[0,1.5,-.5],1.15,[["l","Oye\u2026 \xBFte apetece quedar ma\xF1ana por la tarde?",0],["r","\xBFA qu\xE9 hora?",t-.4],["l","\xBFA las cinco? En el parque.",i-.3],["l","@smile",r]],{hora:"01:00",name:"MI CRUSH \u2665"}),l=Xt(o,["\xA1RESPONDE ENSEGUIDA!"],1.6,[1.3,2.4,-.3]);return{update:(c,h,d)=>{a.userData.upd(c,{typing:c>t&&c<i-.3}),ne(l,c,X(e,"enseguida")-.2,i+1,d)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});re(32,(n,e)=>{let t=X(e,"amigos");return{...un,fov:30,atores:[Ue({x:-.6,z:-.4,eyes:[[0,"heart"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[70,90],bob:Math.abs(Math.sin(s*12))*.02})})],extra:(i,s,r)=>{let o=xs(["MI CRUSH \u2665"],{hora:"01:01"});o.scale.setScalar(.35),i.add(o);let a=Ah(i,r[0]),l=Mr(i,.45),c=Ye(i,["\u2665 A MIL"],1,[-1.6,2.2,-.4],is),h=Ot(i,["\xBFPOR QU\xC9 EST\xC1S EN L\xCDNEA","Y NO EST\xC1S JUGANDO?"],1.7,[.9,2.1,-.6],52);return{update:(d,u,f)=>{vh(o,r[0],.05),a();let g=new I;r[0].torso.getWorldPosition(g),l.position.set(g.x+.05,g.y+.15,g.z+.3),l.scale.setScalar(Sr(d,170)*.8),hi(l,f),ne(c,d,.2,99,f),ne(h,d,t,99,f)}}},c:[[0,1.65,3.2],[0,1.5,-.4],[0,1.6,2.8],[0,1.5,-.4]],range:3,look:gn}});Gn(33,8,"8:00","EL INSTITUTO");re(34,(n,e)=>{let t=X(e,"ojeras");return{amb:"pasillo",fov:30,atores:[Ue({x:0,z:-.4,eyes:[[0,"flat"]],pose:(i,s)=>i.pose({armL:[8,6],armR:[8,6],head:-8+Math.sin(s*2)*4,lean:Math.sin(s*1.5)*4})})],extra:i=>{let s=Ye(i,["3 HORAS DE SUE\xD1O"],1.6,[0,2.25,-.4],{bg:"#1E2230",fg:"#F2C14E"}),r=Xt(i,["OJERAS ENORMES"],1.5,[0,2.25,-.4]),o=qu(i);return{update:(a,l,c)=>{ne(s,a,.1,t-.1,c),ne(r,a,t,99,c),o(a,[.35,1.7,-.3],c)}}},c:[[0,1.6,2.6],[0,1.45,-.4],[0,1.55,2.2],[0,1.45,-.4]],range:2.5}});var mE=["\xA1QU\xC9 PASADA!","\xBFHAS VISTO EL COCHE?","\xA1LA PRIMERA MISI\xD3N!","\xA1NO HE DORMIDO!","\xA1LA PLAYA!","\xA1LA PERSECUCI\xD3N!"];re(35,(n,e)=>{let t=X(e,"jugado");return{amb:"pasillo",fov:34,atores:[Rt(0,{x:-2.2,z:-.8,eyes:[[0,"happy"]],pose:zn}),Rt(1,{x:-1.4,z:-1,eyes:[[0,"lookl"]]}),Ue({x:0,z:-.2,eyes:[[0,"flat"],[t,"wide"]]}),Rt(2,{x:1.3,z:-1,eyes:[[0,"happy"]],pose:zn}),Rt(3,{x:2.1,z:-.8,eyes:[[0,"lookl"]],pose:Xu})],extra:i=>{let s=[[-1.9,2.25,-.8],[1.8,2.25,-.8],[-1.7,2.6,-1],[1.6,2.6,-1],[-2.3,2,-.9],[2.3,2,-.9]],r=mE.map((a,l)=>Ot(i,[a],1.15,s[l],54)),o=_t(i,e,[[["NADIE HABLA DE OTRA COSA"],"nadie","w",[0,.85,.2],2.2,1]]);return{update:(a,l,c)=>{o(a,c),r.forEach((h,d)=>ne(h,a,1.2+d*1.2,99,c))}}},c:[[0,1.75,4.2],[0,1.5,-.6],[0,1.7,3.6],[0,1.5,-.6]],range:3.5}});re(36,(n,e)=>{let t=X(e,"spoilers"),i=X(e,"destripar");return{amb:"gris",fov:30,k:1,atores:[Ue({x:0,z:-.4,eyes:[[0,"look"],[t,"wide"]],pose:(s,r)=>r>t?s.pose({armL:[165,80],armR:[165,80],bob:Math.abs(Math.sin(r*20))*.015}):s.pose()})],extra:s=>{let r=_t(s,e,[[["TU GRAN MIEDO"],0,"w",[0,2.3,-.4],1.5],[["\u26A0 SPOILERS \u26A0"],"spoilers","r",[0,2.3,-.4],1.7],[["TE LO VAN A DESTRIPAR TODO"],"destripar","r",[0,2.3,-.4],2.5,1]]);return{update:(o,a,l)=>{r(o,l),to(l,o>t&&o<t+.5?.02:0,o)}}},c:[[0,1.6,3.6],[0,1.5,-.4],[0,1.6,3],[0,1.5,-.4]],range:3,look:{vig:.65}}});re(37,(n,e)=>{let t=X(e,"relatos");return{amb:"biblio",fov:32,atores:[_h(0,{x:-1.9,z:-.6,eyes:[[0,"look"]],pose:Pa}),Ar({outfit:"jaleco",glasses:!0,glow:0,x:-1.1,z:-.7,eyes:[[0,"happy"]]}),Rt(1,{x:.6,z:-.3,eyes:[[0,"look"]],pose:ws}),Rt(3,{x:1.4,z:-.4,eyes:[[0,"lookl"]],pose:ws}),Rt(5,{x:2.2,z:-.3,eyes:[[0,"look"]],pose:ws})],extra:(i,s,r)=>{let o=[2,3,4].map(()=>{let l=Ca(["RELATO"],["\u2026"]);return l.scale.setScalar(.45),i.add(l),l}),a=_t(i,e,[[["DOS INVESTIGADORES"],"investigadores","w",[-1.5,2.3,-.6],1.9],[["RELATOS CORTOS"],"relatos","y",[1.4,2.3,-.4],1.5,1]]);return{update:(l,c,h)=>{a(l,h),o.forEach((d,u)=>{let f=ns(r[u+2]);d.position.set(f.x-.15,f.y+.1,f.z+.15),d.visible=l>t-.3})}}},c:[[0,1.7,4.4],[0,1.4,-.5],[0,1.65,3.9],[0,1.4,-.5]],range:3.5}});re(38,(n,e)=>{let t=X(e,"otros");return{amb:"gris",fov:30,k:1,atores:[Rt(1,{x:-1.2,z:-.4,eyes:[[0,"look"]],pose:ws}),Rt(3,{x:1.2,z:-.4,eyes:[[0,"look"]],pose:ws})],extra:(i,s,r)=>{let o=Ca(["EL FINAL:","ERA \xC9L"],["\u2026"]),a=Ca(["\xC9RASE","UNA VEZ"],["\u2026"]);for(let h of[o,a])h.scale.setScalar(.55),i.add(h);let l=Ye(i,["CON SPOILER"],1.3,[-1.2,2.25,-.4],ei),c=Ye(i,["SIN SPOILER"],1.3,[1.2,2.25,-.4],$u);return{update:(h,d,u)=>{let f=ns(r[0]),g=ns(r[1]);o.position.set(f.x-.2,f.y+.12,f.z+.2),a.position.set(g.x-.2,g.y+.12,g.z+.2),ne(l,h,.1,99,u),ne(c,h,t-.2,99,u),a.visible=h>t-.2}}},c:[[0,1.6,4.2],[0,1.5,-.4],[0,1.6,3.7],[0,1.5,-.4]],range:3}});re(39,(n,e)=>{let t=X(e,"incluso");return{amb:"gris",fov:30,k:1,atores:[Rt(1,{x:-2,z:-.3,eyes:[[0,"happy"]],pose:Xu})],extra:i=>{let s=Da(i,[[`CON
SPOILER`,.88,"#C9361F"],[`SIN
SPOILER`,.78,"#2F5A9A"]],2.3,[.4,1.55,-.5],{title:"\xBFCU\xC1NTO GUST\xD3?"}),r=Ye(i,["\xA1IGUAL O M\xC1S!"],1.5,[.4,2.55,-.4],no);return{update:(o,a,l)=>{ne(s,o,.1,99,l),ne(r,o,t-.3,99,l)}}},c:[[-.5,1.6,4.4],[-.5,1.55,-.4],[-.5,1.6,3.9],[-.5,1.55,-.4]],range:3}});re(40,(n,e)=>{let t=X(e,"fijas");return{amb:"gris",fov:30,k:1,atores:[Rt(1,{x:0,z:-.4,eyes:[[0,"look"],[t,"happy"]],pose:ws})],extra:(i,s,r)=>{let o=Ca(["EL FINAL:","ERA \xC9L"],["\xA1AH\xCD","ESTABA LA PISTA!"]);o.scale.setScalar(.6),i.add(o);let a=new le,l=new V(new tn(.16,.025,8,24),C("#2A2A34")),c=new V(new Bn(.16,24),new je({color:"#BFE0F2",transparent:!0,opacity:.35})),h=w(.04,.25,.04,C("#8E6242"),.1,-.25,0,!1);h.rotation.z=.4,a.add(l,c,h),i.add(a);let d=_t(i,e,[[["NO ESTROPEA EL VIAJE"],"estropea","w",[0,2.05,-.4],2],[["TE FIJAS EN LOS DETALLES"],"fijas","y",[0,2.05,-.4],2.3,1]]);return{update:(u,f,g)=>{let E=ns(r[0]);o.position.set(E.x-.25,E.y+.15,E.z+.2),a.position.set(E.x-.05+Math.sin(u*2)*.15,E.y+.25,E.z+.35),a.visible=u>t-.3,d(u,g)}}},c:[[0,1.6,3.2],[0,1.5,-.4],[0,1.6,2.7],[0,1.45,-.4]],range:3}});re(41,(n,e)=>{let t=X(e,"spoilers");return{amb:"pasillo",fov:30,atores:[Ue({x:0,z:-.4,eyes:[[0,"shut"],[t,"happy"]],pose:(i,s)=>i.pose({armL:[30+Math.sin(s*2)*15,30],armR:[30+Math.sin(s*2)*15,30],bob:Math.sin(s*2)*.02})})],extra:i=>{let s=_t(i,e,[[["RESPIRA\u2026"],0,"w",[0,2.2,-.4],1.1],[["LOS SPOILERS NO MATAN"],"spoilers","y",[0,2.2,-.4],2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,2.8],[0,1.45,-.4],[0,1.6,2.4],[0,1.45,-.4]],range:2.5}});Gn(42,10,"10:00","EL RECREO");re(43,(n,e)=>{let t=X(e,"mira"),i=X(e,"sonrie"),s=X(e,"roja"),r=X(e,"tambien");return{amb:"jardin",fov:30,atores:[Ue({x:-1.6,z:.2,eyes:[[0,"look"],[r-.2,"happy"]],pose:o=>o.pose({head:10})}),Gt({x:1.6,z:-1.2,eyes:[[0,"lookl"],[t,"look"],[i,"happy"]]}),Rt(2,{x:2.3,z:-1.4,eyes:[[0,"lookl"]]}),Rt(4,{x:1,z:-1.6,eyes:[[0,"look"]]})],extra:(o,a,l)=>{let c=jr(l[1]),h=jr(l[0]),d=_t(o,e,[[["SE PONE ROJA"],"roja","p",[1.6,2.25,-1.2],1.3],[["T\xDA TAMBI\xC9N"],"tambien","p",[-1.6,2.2,.2],1.2,1]]);return{update:(u,f,g)=>{c(zt(s-.2,s+.4,u)),h(zt(r-.2,r+.4,u)),d(u,g)}}},c:[[0,1.7,4.2],[0,1.4,-.6],[0,1.65,3.7],[0,1.4,-.6]],range:4}});re(44,(n,e)=>{let t=X(e,"hoy",X(e,"hoy")+.2),i=X(e,"llevamos");return{amb:"jardin",fov:30,atores:[Ia({x:1.4,z:-.4,eyes:[[0,"look"],[t,"wide"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t?150+Math.sin(r*12)*15:80,60],lean:-6})}),Ue({x:.55,z:-.4,eyes:[[0,"flat"]],pose:s=>s.pose({armL:[12,8],armR:[40,10]})})],extra:s=>{let r=Ot(s,["DIME QUE NO VAS","A QUEDAR CON ELLA HOY"],1.6,[2,2.2,-.4],50),o=Ot(s,["\xA1HOY!"],.8,[2,2.2,-.4],90),a=Ot(s,["\xA1LLEVAMOS A\xD1OS","ESPERANDO!"],1.5,[2,2.2,-.4],54),l=Xt(s,["TU MEJOR AMIGO"],1.3,[1.4,2.25,-.4]);return{update:(c,h,d)=>{ne(l,c,.1,2.2,d),ne(r,c,X(e,"dime")-.1,t-.1,d),ne(o,c,t-.1,i-.1,d),ne(a,c,i-.1,99,d),to(d,c>t&&c<t+.4?.015:0,c)}}},c:[[1.1,1.65,3],[1.1,1.5,-.4],[1.1,1.6,2.6],[1.1,1.5,-.4]],range:3}});re(45,(n,e)=>{let t=X(e,"ella");return{amb:"jardin",fov:30,atores:[Ia({x:1.4,z:-.4,eyes:[[0,"look"]]}),Ue({x:.55,z:-.4,eyes:[[0,"look"],[t,"heart"]],pose:zn})],extra:i=>{let s=_t(i,e,[[["GTA 6 VA A ESTAR AH\xCD"],"gta","w",[0,2.25,-.4],1.9],[["MA\xD1ANA"],"manana","w",[0,2.25,-.4],1],[["Y PASADO"],"pasado","w",[0,2.25,-.4],1],[["Y DENTRO DE UN A\xD1O"],"dentro","w",[0,2.25,-.4],1.7],[["ELLA ME LO HA PEDIDO HOY"],"ella","p",[.3,2.25,-.4],2.3,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[1.1,1.65,3],[1.1,1.5,-.4],[1.1,1.6,2.6],[1.1,1.5,-.4]],range:3}});re(46,(n,e)=>{let t=X(e,"vale");return{amb:"jardin",fov:30,atores:[Ia({x:1.4,z:-.4,eyes:[[0,"flat"],[t,"happy"]],pose:(i,s)=>s>t?i.pose({armL:[12,8],armR:[100,40]}):i.pose()}),Ue({x:.55,z:-.4,eyes:[[0,"look"],[t+.5,"happy"]]})],extra:i=>{let s=Xt(i,["\u2026"],.6,[1.4,2.2,-.4]),r=Ot(i,["VALE. PERO ESTA NOCHE","ME LO CUENTAS TODO"],1.6,[2,2.2,-.4],50);return{update:(o,a,l)=>{ne(s,o,.1,t-.1,l),ne(r,o,t-.1,99,l)}}},c:[[1.1,1.65,3],[1.1,1.5,-.4],[1.1,1.6,2.6],[1.1,1.5,-.4]],range:3}});Gn(47,14,"14:00","EN CASA");var Di={amb:"sala"},La=(n,e)=>(ef(n,0,-2.5,2.4),Rs(n,[0,1.4,-2.4],1.9,e));re(48,(n,e)=>{let t=X(e,"mira"),i=X(e,"solo"),s=X(e,"hora"),r=X(e,"mision");return{...Di,fov:32,atores:[Ue({x:-.9,z:.2,eyes:[[0,"look"],[t,"lookl"],[i,"happy"]],pose:(o,a)=>o.pose({head:a>t&&a<i?-12:0})})],extra:o=>{let a=La(o,"inicio"),l=Ye(o,["( O  O )"],.7,[0,1.45,-2.3],{bg:"#00000000",fg:"#FFFFFF",size:90}),c=_t(o,e,[[["LA CONSOLA TE MIRA"],"consola","w",[.4,2.65,-2.2],1.9],[["\u201CSOLO UNA PARTIDA\u2026\u201D"],"solo","p",[-.9,2.2,.2],1.8],[["MEDIA HORA"],"hora","w",[-.9,2.2,.2],1.1],[["UNA MISI\xD3N"],"mision","w",[-.9,2.2,.2],1.1,1]]);return{update:(h,d,u)=>{a.userData.upd(h),ne(l,h,t-.2,i,u),c(h,u)}}},c:[[-.3,1.7,3.2],[-.3,1.4,-.8],[-.3,1.65,2.7],[-.3,1.4,-.8]],range:3.5}});re(49,(n,e)=>{let t=X(e,"otra"),i=X(e,"reloj");return{...Di,fov:32,atores:[Ue({x:0,z:.5,eyes:[[0,"wide"]],pose:kn})],extra:(s,r,o)=>{let a=La(s,"coche"),l=mn();s.add(l);let c=io(s,[1.5,2.3,-1],.9,d=>{let u=Math.min(160,Math.floor(d/Math.max(n-.3,1)*160));return`${14+Math.floor(u/60)}:${String(u%60).padStart(2,"0")}`},{w:420,h:200,size:120}),h=_t(s,e,[[["OTRA MISI\xD3N"],"otra","y",[-1.3,2.3,-.8],1.2],[["Y OTRA"],X(e,"otra",t+.3),"y",[-1.3,2.3,-.8],.9,1]]);return{update:(d,u,f)=>{a.userData.upd(d,"coche"),Dn(l,o[0]),c.userData.upd(d),h(d,f)}}},c:[[1.2,1.7,3.2],[0,1.4,-1],[1,1.65,2.8],[0,1.4,-1]],range:3.5}});re(50,(n,e)=>{let t=X(e,"las",1.5);return{...Di,fov:30,atores:[Ue({x:0,z:.2,eyes:[[0,"wide"]],pose:(i,s)=>s>t?pE(i,s):i.pose({armL:[55,60],armR:[55,60]})})],extra:i=>{La(i,"pausa").userData.upd(0,"pausa");let s=Ye(i,["16:40"],1.2,[0,2.3,.1],{bg:"#C9361F",fg:"#fff",size:120,w:520,h:200});return{update:(r,o,a)=>{ne(s,r,.1,99,a),s.scale.multiplyScalar(r>t?1+Math.abs(Math.sin(r*10))*.12:1),to(a,r>t?.018:0,r)}}},c:[[0,1.65,3],[0,1.6,.2],[0,1.65,2.4],[0,1.6,.2]],range:3}});re(51,(n,e)=>{let t=X(e,"peinarte"),i=X(e,"reves");return{amb:"barrio",fov:32,atores:[Ue({x:-2.5,z:-.3,eyes:[[0,"wide"]],move:s=>[hn(-3,3,s/Math.max(n,1)),0,-.3],pose:sf})],extra:(s,r,o)=>{let a=ss(o[0]),l=_t(s,e,[[["\xA1SALES CORRIENDO!"],0,"y",[0,2.6,-.6],1.7],[["SIN PEINARTE"],"peinarte","w",[0,2.6,-.6],1.3],[["CAMISETA DEL REV\xC9S"],"reves","r",[0,2.6,-.6],1.9,1]]);return{update:(c,h,d)=>l(c,d)}},cam:[[0,[-2,1.6,3.2],[-2,1.3,-.3]],[n,[2,1.6,3.2],[2,1.3,-.3]]],f:[[0,3.5],[n,3.5]],range:4,k:1}});Gn(52,17,"17:00","EL PARQUE");var ti={amb:"parque",fov:30},Li=[[-3.45,1.6,1.5],[-3.45,1.45,-1.8],[-3.45,1.6,1.1],[-3.45,1.45,-1.8]];re(53,(n,e)=>{let t=X(e,"banco"),i=X(e,"mira");return{amb:"parque",fov:32,atores:[Gt({x:-3,z:-1.8,eyes:[[0,"look"],[i,"lookl"]],pose:(s,r)=>s.pose({head:r>i?Math.sin(r*3)*10:0})}),Ue({x:-3.9,z:-1.8,eyes:[[0,"flat"]],move:s=>[hn(-1,-3.9,zt(0,1.6,s)),0,hn(.4,-1.6,zt(0,1.6,s))],pose:(s,r)=>r<1.6?sf(s,r):s.pose({lean:12,armL:[20,10],armR:[20,10],bob:Math.abs(Math.sin(r*8))*.02})})],extra:(s,r,o)=>{ss(o[1]);let a=_t(s,e,[[["SIN ALIENTO"],0,"w",[-3.9,2.2,-1.6],1.2],[["YA EST\xC1 EN EL BANCO"],"banco","p",[-3,2.25,-1.7],1.9],[["DE ARRIBA ABAJO\u2026"],"mira","w",[-3,2.25,-1.7],1.6,1]]);return{update:(l,c,h)=>a(l,h)}},c:[[-2.6,1.75,2.4],[-3,1.35,-1.4],[-3,1.65,1.7],[-3.4,1.35,-1.6]],range:3.5}});re(54,(n,e)=>({...ti,atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"wide"]]}),Gt({x:-3,z:-1.8,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[95,0],bob:Math.abs(Math.sin(i*12))*.02})})],extra:(t,i,s)=>{ss(s[0]);let r=jr(s[0]),o=Ot(t,["LLEVAS LA CAMISETA","DEL REV\xC9S"],1.4,[-2.6,2.15,-1.7],54);return{update:(a,l,c)=>{r(zt(1,1.6,a)),ne(o,a,X(e,"llevas")-.1,99,c)}}},c:Li,range:3}));re(55,(n,e)=>({...ti,atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"shut"]],move:t=>[-3.9,-zt(.3,1.8,t)*.25,-1.8],pose:t=>t.pose({armL:[150,80],armR:[150,80],head:-12})}),Gt({x:-3,z:-1.8,eyes:[[0,"happy"]]})],extra:(t,i,s)=>{ss(s[0]),jr(s[0])(1);let o=Ye(t,["TR\xC1GAME, TIERRA"],1.5,[-3.45,2.2,-1.7],ei);return{update:(a,l,c)=>ne(o,a,.1,99,c)}},c:Li,range:3}));re(56,(n,e)=>{let t=X(e,"hoy");return{...ti,atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"look"]]}),Gt({x:-3,z:-1.8,eyes:[[0,"look"]],pose:zn})],extra:(i,s,r)=>{ss(r[0]);let o=Ot(i,["PENSABA QUE","NO IBAS A VENIR"],1.4,[-2.6,2.15,-1.7],54),a=Ot(i,["HOY SALE","GTA 6, \xBFNO?"],1.3,[-2.6,2.15,-1.7],58);return{update:(l,c,h)=>{ne(o,l,X(e,"pensaba")-.1,t-.1,h),ne(a,l,t-.1,99,h)}}},c:Li,range:3}});re(57,(n,e)=>{let t=X(e,"sabes");return{...ti,atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"wide"]],pose:(i,s)=>s>t?i.pose({armL:[12,8],armR:[95,-20]}):i.pose()}),Gt({x:-3,z:-1.8,eyes:[[0,"happy"]]})],extra:(i,s,r)=>{ss(r[0]);let o=Xt(i,["TE QUEDAS HELADO"],1.5,[-3.9,2.2,-1.6]),a=Ot(i,["\xBFT\xDA\u2026 SABES","LO DE GTA 6?"],1.3,[-4.3,2.15,-1.7],58);return{update:(l,c,h)=>{ne(o,l,.1,t-.4,h),ne(a,l,t-.4,99,h)}}},c:Li,range:3,look:{exposure:1,bloom:.35}}});re(58,(n,e)=>{let t=X(e,"fondo");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=xs(["GTA 6","\u2665 \u2665 \u2665"],{hora:"17:06",bg:"#5A2A6A"});s.scale.setScalar(1.35),s.position.set(0,1.35,-.5),i.add(s);let r=Ye(i,["SU FONDO DE PANTALLA"],1.9,[0,2.4,-.3],br),o=xn(i,12,"#FF8AB0");return{update:(a,l,c)=>{ne(r,a,t-.2,99,c),o(a,[0,1.5,-.3,1],a>t?1:0),s.rotation.y=Math.sin(a)*.1}}},c:[[0,1.5,4.2],[0,1.5,-.5],[0,1.5,3.6],[0,1.5,-.5]],range:2,blur:4,look:{bloom:.5}}});re(59,(n,e)=>{let t=X(e,"consola"),i=X(e,"queria"),s=X(e,"menos");return{...ti,atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"look"],[t,"wide"]]}),Gt({x:-3,z:-1.8,eyes:[[0,"happy"],[t,"sad"]],pose:zn})],extra:(r,o,a)=>{ss(a[0]);let l=Ot(r,["DESDE EL","PRIMER TR\xC1ILER"],1.3,[-2.6,2.15,-1.7],58),c=Ot(r,["MI CONSOLA","SE ROMPI\xD3"],1.3,[-2.6,2.15,-1.7],58),h=Ot(r,["TODO EL MUNDO","JUGANDO\u2026 MENOS YO"],1.5,[-2.6,2.15,-1.7],52);return{update:(d,u,f)=>{ne(l,d,.1,t-.2,f),ne(c,d,t-.2,i-.1,f),ne(h,d,i-.1,99,f)}}},c:Li,range:3}});re(60,(n,e)=>{let t=X(e,"bien");return{...ti,atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"look"],[t,"heart"]]}),Gt({x:-3,z:-1.8,eyes:[[0,"look"],[t-.3,"happy"]],pose:zn})],extra:(i,s,r)=>{ss(r[0]);let o=jr(r[1]),a=Ot(i,["\u2026CON ALGUIEN","QUE ME CAE BIEN"],1.4,[-2.6,2.15,-1.7],54),l=oE(i,10);return{update:(c,h,d)=>{ne(a,c,X(e,"alguien")-.5,99,d),o(zt(t-.5,t,c)),l(c,[-3.9,1.9,-1.5],d,c>t?1:0)}}},c:Li,range:3,look:{bloom:.45}}});Gn(61,18,"18:00","HABLANDO");re(62,(n,e)=>({...ti,ambo:{dusk:!0},atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"happy"]],pose:zn}),Gt({x:-3,z:-1.8,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[70,80],armR:[12,8],bob:Math.abs(Math.sin(i*9))*.02})})],extra:t=>{let i=_t(t,e,[[["UNA HORA HABLANDO"],0,"y",[-3.45,2.25,-1.7],1.7],[["LAS TEOR\xCDAS"],"teorias","w",[-3.45,2.25,-1.7],1.3],[["LOS TR\xC1ILERES"],"traileres","w",[-3.45,2.25,-1.7],1.4],[["\xBFQU\xC9 MISI\xD3N PRIMERO?"],"mision","p",[-3.45,2.25,-1.7],1.9,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[-3.45,1.7,2.2],[-3.45,1.4,-1.8],[-3.45,1.65,1.8],[-3.45,1.4,-1.8]],range:3,look:{bloom:.45}}));re(63,(n,e)=>{let t=X(e,"friki");return{...ti,ambo:{dusk:!0},atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"wide"],[t,"heart"]]}),Gt({x:-3,z:-1.8,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[100+Math.sin(s*6)*20,30]})})],extra:i=>{let s=_t(i,e,[[["SABE M\xC1S QUE T\xDA"],0,"w",[-3,2.25,-1.7],1.5],[["MUCHO M\xC1S"],"mucho","y",[-3,2.25,-1.7],1.1],[["\xA1TU CRUSH ES IGUAL DE FRIKI!"],"friki","p",[-3.45,2.25,-1.7],2.5,1]]),r=xn(i,10,"#FFB0C0");return{update:(o,a,l)=>{s(o,l),r(o,[-3.45,1.6,-1.6,.8],o>t?1:0)}}},c:Li,range:3,look:{bloom:.45}}});re(64,(n,e)=>{let t=X(e,"nueva"),i=X(e,"atadas"),s=X(e,"cojin"),r=X(e,"obstaculos"),o=l=>c=>[l+hn(-1.4,1.4,zt(i,n-.3,c)),0,-.3],a=(l,c)=>c>i?l.walk(c*1.4):l.pose();return{amb:"lab",fov:32,atores:[Rt(0,{x:-1.6,z:-.3,eyes:[[0,"look"],[i,"happy"]],move:o(-.22),pose:(l,c)=>{a(l,c),l.pose({armR:[60,80]})}}),Rt(1,{x:-1.2,z:-.3,eyes:[[0,"lookl"],[i,"happy"]],move:o(.22),pose:(l,c)=>{a(l,c),l.pose({armL:[60,80]})}}),_h(2,{x:2.6,z:-1.2,eyes:[[0,"lookl"]],pose:Pa})],extra:(l,c,h)=>{nf(l,-.2,-.3,4.2);for(let g of[-.4,.8])fE(l,g,-.3);let d=uE();l.add(d);let u=w(.5,.05,.05,C("#C9A050"),0,0,0,!1);l.add(u);let f=_t(l,e,[[["ARTHUR ARON"],0,"w",[-1,2.5,-.4],1.3],[["ALGO NUEVO Y EMOCIONANTE"],"nueva","y",[-.2,2.5,-.4],2.3],[["ATADOS: MU\xD1ECA Y TOBILLO"],"atadas","w",[-.2,2.5,-.4],2.3],[["\xA1CON UN COJ\xCDN!"],"cojin","p",[-.2,2.5,-.4],1.4],[["CARRERA DE OBST\xC1CULOS"],"obstaculos","y",[-.2,2.5,-.4],2.1,1]]);return{update:(g,E,m)=>{let p=new I,v=new I;h[0].torso.getWorldPosition(p),h[1].torso.getWorldPosition(v),d.position.set((p.x+v.x)/2,p.y+.05,p.z+.25),d.visible=g>s-.3,u.position.set((p.x+v.x)/2,.15,p.z),f(g,m)}}},c:[[0,1.8,5.2],[0,1.35,-.4],[0,1.75,4.8],[0,1.35,-.4]],range:4,k:1}});re(65,(n,e)=>({amb:"lab",fov:32,atores:[Rt(3,{x:-.35,z:-.3,eyes:[[0,"flat"]],move:t=>[hn(-.6,.2,t/Math.max(n,1))-.35,0,-.3],pose:(t,i)=>t.walk(i*.7)}),Rt(5,{x:.35,z:-.3,eyes:[[0,"flat"]],move:t=>[hn(-.6,.2,t/Math.max(n,1))+.35,0,-.3],pose:(t,i)=>t.walk(i*.7)})],extra:t=>{nf(t,0,-.3,3,"#8A8E98");let i=Xt(t,["ALGO ABURRIDO"],1.4,[0,2.25,-.3]),s=qu(t);return{update:(r,o,a)=>{ne(i,r,.1,99,a),s(r,[.6,1.8,-.3],a)}}},c:[[0,1.65,3.2],[0,1.4,-.3],[0,1.6,2.8],[0,1.4,-.3]],range:3,look:{exposure:.95}}));re(66,(n,e)=>{let t=X(e,"compartir");return{amb:"gris",fov:30,k:1,atores:[Rt(0,{x:-2.15,z:-.3,eyes:[[0,"happy"]]}),Rt(1,{x:-1.6,z:-.3,eyes:[[0,"happy"]]})],extra:i=>{let s=Da(i,[[`ALGO NUEVO Y
EMOCIONANTE`,.88,"#E8447A"],[`ALGO
ABURRIDO`,.5,"#8A8E98"]],2.3,[.6,1.55,-.5],{title:"CONTENTOS CON SU RELACI\xD3N"}),r=Ye(i,["COMPARTIR ALGO NUEVO UNE"],2.3,[0,2.55,-.4],is),o=Mr(i,.4);return o.position.set(-1.88,2.2,-.3),{update:(a,l,c)=>{ne(s,a,.1,99,c),ne(r,a,t-.2,99,c),o.scale.setScalar(Sr(a)),hi(o,c)}}},c:[[-.3,1.6,4.4],[-.3,1.55,-.4],[-.3,1.6,3.9],[-.3,1.55,-.4]],range:3}});re(67,(n,e)=>({...ti,ambo:{dusk:!0},atores:[Ue({x:-3.8,z:-1.8,eyes:[[0,"happy"]],pose:zn}),Gt({x:-3.1,z:-1.8,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[70,80],armR:[12,8],bob:Math.abs(Math.sin(i*9))*.02})})],extra:t=>{let i=Ye(t,["LO EST\xC1IS COMPARTIENDO"],2.1,[-3.45,2.25,-1.7],is),s=xn(t,12,"#FFD8A0");return{update:(r,o,a)=>{ne(i,r,.3,99,a),s(r,[-3.45,1.6,-1.6,.9])}}},c:[[-3.45,1.75,2.6],[-3.45,1.4,-1.8],[-3.45,1.7,2.1],[-3.45,1.4,-1.8]],range:3,look:{bloom:.5}}));Gn(68,19,"19:00","UNA IDEA");re(69,(n,e)=>{let t=X(e,"juego");return{...ti,ambo:{dusk:!0},atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"happy"]],pose:zn}),Gt({x:-3,z:-1.8,eyes:[[0,"look"]]})],extra:i=>{let s=Xt(i,["SE TE OCURRE\u2026"],1.3,[-3.9,2.25,-1.6]),r=Ot(i,["\xBFQUIERES VENIR A","JUGAR A MI CASA?"],1.5,[-4.3,2.15,-1.7],54),o=Ot(i,["JUEGO UN RATO Y","LUEGO TE DEJO EL MANDO"],1.6,[-4.3,2.15,-1.7],50);return{update:(a,l,c)=>{ne(s,a,.1,X(e,"quieres")-.2,c),ne(r,a,X(e,"quieres")-.2,t-.1,c),ne(o,a,t-.1,99,c)}}},c:Li,range:3,look:{bloom:.45}}});re(70,(n,e)=>{let t=X(e,"solo");return{...ti,ambo:{dusk:!0},atores:[Ue({x:-3.9,z:-1.8,eyes:[[0,"look"],[t+.8,"happy"]]}),Gt({x:-3,z:-1.8,eyes:[[0,"lookl"],[t,"smug"]],pose:(i,s)=>s<t?i.pose({armL:[12,8],armR:[110,120],head:10}):zn(i,s)})],extra:i=>{let s=Xt(i,["UN SEGUNDO\u2026"],1.1,[-3,2.25,-1.6]),r=Ot(i,["SOLO SI ME","DEJAS CONDUCIR"],1.4,[-2.6,2.15,-1.7],56);return{update:(o,a,l)=>{ne(s,o,.1,t-.2,l),ne(r,o,t-.2,99,l)}}},c:Li,range:3,look:{bloom:.45}}});Gn(71,20,"20:00","TU CASA");var gE=(n={})=>Ju(4,{...n});re(72,(n,e)=>{let t=X(e,"cejas"),i=X(e,"haces");return{...Di,ambo:{night:!0},fov:32,atores:[gE({x:1.6,z:-.6,eyes:[[0,"look"],[t-.2,"smug"]],pose:s=>s.pose({armL:[60,70],armR:[60,70],head:6})}),Ue({x:-.6,z:-.2,eyes:[[0,"look"],[i,"shut"]],move:s=>[hn(-2.4,-.6,zt(0,1.5,s)),0,-.2],pose:(s,r)=>r<1.5?s.walk(r*2):s.pose({head:r>i?12:0})}),Gt({x:.2,z:-.4,eyes:[[0,"happy"]],move:s=>[hn(-1.6,.2,zt(0,1.6,s)),0,-.4],pose:(s,r)=>r<1.6?s.walk(r*2):s.pose({armL:[12,8],armR:[150,20]})})],extra:s=>{let r=Ye(s,["\xAC \xAC"],.55,[1.6,2.2,-.6],{bg:"#FBF7EC",fg:"#2A2A34",size:90,w:300}),o=_t(s,e,[[["TU MADRE"],0,"w",[1.6,2.25,-.6],1],[["LEVANTA LAS CEJAS"],"cejas","y",[1.6,2.25,-.6],1.7],[["T\xDA, COMO SI NADA"],"haces","w",[-.6,2.25,-.2],1.6,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.7,3.6],[.2,1.4,-.4],[0,1.65,3.1],[.2,1.4,-.4]],range:3.5}});var so=n=>{let e=Lu("#3A5A9A");e.position.set(0,0,.3),n.add(e)},fi={y:-.2,z:.3};re(73,(n,e)=>{let t=X(e,"mando"),i=X(e,"patatas"),s=X(e,"divertido");return{...Di,ambo:{night:!0},fov:32,atores:[Gt({x:-.45,...fi,eyes:[[0,"wide"]],pose:(r,o)=>{ui(r),kn(r,o)}}),Ue({x:.45,...fi,eyes:[[0,"look"],[s,"heart"]],pose:r=>{ui(r),r.pose({armL:[60,70],armR:[12,8],head:10})}})],extra:(r,o,a)=>{so(r);let l=new Xe("#FF8AB0",6,5,1.6);l.position.set(0,1.3,2.2),r.add(l);let c=mn();r.add(c);let h=tf();r.add(h);let d=_t(r,e,[[["ELLA: EL MANDO"],"mando","p",[-.45,2,.3],1.4],[["T\xDA: LAS PATATAS"],"patatas","y",[.45,2,.3],1.4],[["M\xC1S DIVERTIDO VERLA JUGAR"],"divertido","w",[0,2,.3],2.3,1]]);return{update:(u,f,g)=>{Dn(c,a[0]);let E=ns(a[1]);h.position.set(E.x-.05,E.y-.2,E.z+.1),l.intensity=5+Math.sin(u*7)*2,d(u,g)}}},c:[[0,1.4,3.4],[0,1.1,.3],[0,1.4,2.9],[0,1.1,.3]],range:3,look:{exposure:.95,bloom:.45}}});re(74,(n,e)=>{let t=X(e,"choca");return{...Di,ambo:{night:!0},fov:34,atores:[Gt({x:-.45,...fi,eyes:[[0,"wide"],[t,"happy"]],pose:(i,s)=>{ui(i),kn(i,s,3)}}),Ue({x:.45,...fi,eyes:[[0,"happy"]],pose:i=>{ui(i),i.pose({armL:[60,70],armR:[12,8],head:10})}})],extra:(i,s,r)=>{so(i);let o=La(i,"coche"),a=mn();i.add(a);let l=Ot(i,["\xA1AAAAH!"],1.2,[-.9,2,.3],80),c=Ot(i,["\xA1JAJAJA!"],1.2,[-.9,2,.3],80);return{update:(h,d,u)=>{o.userData.upd(h,"coche"),Dn(a,r[0]),ne(l,h,.1,t-.2,u),ne(c,h,t-.2,99,u)}}},c:[[1.6,2.2,3.6],[-.2,1.2,-1],[1.3,2.1,3.1],[-.2,1.2,-1]],range:4,look:{exposure:.95,bloom:.5}}});re(75,(n,e)=>{let t=X(e,"caso");return{...Di,ambo:{night:!0},fov:32,atores:[Gt({x:-.45,...fi,eyes:[[0,"look"],[t-.6,"smug"]],pose:(i,s)=>{ui(i),kn(i,s)}}),Ue({x:.45,...fi,eyes:[[0,"look"],[t,"flat"]],pose:(i,s)=>{ui(i),zn(i,s)}})],extra:(i,s,r)=>{so(i);let o=mn();i.add(o);let a=Ot(i,["\xBFPOR D\xD3NDE VOY?"],1.1,[-.9,2,.3],60),l=Ot(i,["\xA1A LA IZQUIERDA!"],1.1,[.9,2,.3],60),c=Ye(i,["NI CASO"],1,[-.45,2,.3],ei);return{update:(h,d,u)=>{Dn(o,r[0]),ne(a,h,.1,1.1,u),ne(l,h,1.1,t-.3,u),ne(c,h,t-.3,99,u)}}},c:[[0,1.4,3.2],[0,1.1,.3],[0,1.4,2.8],[0,1.1,.3]],range:3,look:{exposure:.95,bloom:.45}}});re(76,(n,e)=>{let t=X(e,"350");return{amb:"gris",fov:32,k:1,atores:[[-1.5,-.3],[-.9,-.3],[.9,-.3],[1.5,-.3]].map(([s,r],o)=>Rt(o,{x:s,z:r,eyes:[[0,"happy"]],pose:(a,l)=>kn(a,l+o)})),extra:(s,r,o)=>{let a=o.map(()=>{let h=mn();return s.add(h),h}),l=io(s,[0,2.5,-.5],1.4,h=>`${Math.round(350*zt(t-1,t+.3,h))} PAREJAS`,{w:900,h:200,size:100}),c=Xt(s,["JUGANDO EN INTERNET"],1.7,[0,2.5,-.5]);return{update:(h,d,u)=>{o.forEach((f,g)=>Dn(a[g],f)),l.userData.upd(h),l.visible=h<X(e,"internet")-.3,ne(c,h,X(e,"internet")-.3,99,u)}}},c:[[0,1.6,4.8],[0,1.5,-.4],[0,1.6,4.3],[0,1.5,-.4]],range:3}});re(77,(n,e)=>{let t=X(e,"como");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=Xt(i,["\xBFJUGAR O NO JUGAR?"],1.9,[0,1.9,-.4]),r=Ye(i,["ERA C\xD3MO"],1.8,[0,1.2,-.4],no);return{update:(o,a,l)=>{ne(s,o,.1,99,l),ne(r,o,t-.2,99,l)}}},c:[[0,1.55,3.6],[0,1.55,-.4],[0,1.55,3.1],[0,1.55,-.4]],range:3}});re(78,(n,e)=>{let t=X(e,"cuando",1.5),i=s=>s<t;return{amb:"gris",fov:32,k:1,atores:[Rt(5,{x:-1,z:-.4,eyes:[[0,"flat"],[t,"happy"]],move:s=>[i(s)?-1.6:-.3,0,-.4],pose:(s,r)=>kn(s,r)}),Rt(0,{x:1,z:-.4,eyes:[[0,"sad"],[t,"happy"]],move:s=>[i(s)?1.6:.3,0,-.4],pose:(s,r)=>i(r)?s.pose({head:-12}):kn(s,r+1)})],extra:(s,r,o)=>{let a=mn(),l=mn();s.add(a,l);let c=$g(s,.08,2.2,[0,1.1,-.6],"#C9361F",.9),h=Ye(s,["SEPARADOS: SUFRE"],1.8,[0,2.4,-.4],ei),d=Ye(s,["JUNTOS: MEJOR"],1.6,[0,2.4,-.4],{bg:"#2F8A5A",fg:"#fff"}),u=Mr(s,.45);return u.position.set(0,2,-.3),{update:(f,g,E)=>{Dn(a,o[0]),Dn(l,o[1]),l.visible=!i(f),c.visible=i(f),ne(h,f,.1,t-.1,E),ne(d,f,t,99,E),u.visible=!i(f)&&f>t+.5,u.scale.setScalar(Sr(f)),hi(u,E)}}},c:[[0,1.6,4.4],[0,1.45,-.4],[0,1.6,3.9],[0,1.45,-.4]],range:3}});re(79,(n,e)=>{let t=X(e,"esconderte");return{...Di,ambo:{night:!0},fov:32,atores:[Gt({x:-.45,...fi,eyes:[[0,"happy"]],pose:(i,s)=>{ui(i),kn(i,s)}}),Ue({x:.45,...fi,eyes:[[0,"happy"]],pose:i=>{ui(i),i.pose({armL:[60,70],armR:[12,8],head:10})}})],extra:(i,s,r)=>{so(i);let o=mn();i.add(o);let a=_t(i,e,[[["EL PROBLEMA NO ERA GTA 6"],0,"w",[0,2,.3],2.3],[["ERA ESCONDERTE"],"esconderte","p",[0,2,.3],1.6,1]]);return{update:(l,c,h)=>{Dn(o,r[0]),a(l,h)}}},c:[[0,1.4,3.2],[0,1.15,.3],[0,1.4,2.8],[0,1.15,.3]],range:3,look:{exposure:.95,bloom:.45}}});Gn(80,22,"22:00","EL GRUPO");var EE=()=>Se(512,400,n=>{n.fillStyle="#3A5A9A",n.fillRect(0,0,512,400),n.fillStyle="#6A4A8A",n.fillRect(0,0,512,170),n.fillStyle="#111",n.beginPath(),n.arc(256,160,70,0,7),n.fill(),n.fillStyle="#4A2A1A",n.beginPath(),n.ellipse(256,175,95,110,0,Math.PI,0),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(256,165,66,0,7),n.fill(),n.fillStyle="#F2C14E",n.beginPath(),n.roundRect(186,235,140,165,30),n.fill(),n.fillStyle="#22222A",n.beginPath(),n.roundRect(200,260,112,40,14),n.fill(),n.fillStyle="#fff",n.fillRect(226,150,16,6),n.fillRect(270,150,16,6)});re(81,(n,e)=>{let t=X(e,"que"),i=X(e,"foto");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=Pi(s,[-.4,1.5,-.5],1.15,[["l","\xBFQu\xE9 tal la cita?",t-.2],["l","\xBFHas jugado algo?",X(e,"jugado")-.5],["r","[ FOTO ]",i]],{hora:"22:00",name:Sh}),o=Oe(EE(),1.2,.94);o.position.set(1.1,1.6,-.3),o.renderOrder=6,s.add(o);let a=Xt(s,["CONCENTRAD\xCDSIMA"],1.5,[1.1,.9,-.2]);return{update:(l,c,h)=>{r.userData.upd(l),ne(o,l,i+.2,99,h),ne(a,l,X(e,"concentradisima")-.2,99,h)}}},c:[[.2,1.5,4.3],[.2,1.5,-.5],[.2,1.5,3.8],[.2,1.5,-.5]],range:2,blur:4}});re(82,(n,e)=>{let t=X(e,"que"),i=X(e,"crush"),s=X(e,"leyenda");return{amb:"gris",fov:28,k:1,atores:[],extra:r=>{let o=Pi(r,[0,1.5,-.5],1.15,[["r","[ FOTO ]",0],["l","\xBF\xA1QU\xC9!?",t-.2],["l","\xBFTu crush juega a GTA?",i-.8],["l","Eres una leyenda.",s-.6]],{hora:"22:01",name:Sh}),a=Ye(r,["\xA1EL GRUPO EXPLOTA!"],1.6,[1.15,2.45,-.3],ei),l=xn(r,14,"#FFE27A");return{update:(c,h,d)=>{o.userData.upd(c),ne(a,c,.1,99,d),l(c,[0,1.6,-.3,1.2],c>s?1:0),to(d,c>t&&c<t+.4?.02:0,c)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});Gn(83,23,"23:00","LA PUERTA");re(84,(n,e)=>{let t=X(e,"gira");return{...ju,fov:30,atores:[Gt({x:.5,z:-.6,eyes:[[0,"lookl"],[t,"happy"]],pose:(i,s)=>i.pose({head:s>t?0:-15})}),Ue({x:-.5,z:-.9,eyes:[[0,"look"]]})],extra:i=>{Ku(i),Zu(i,[0,2.6,-.5],3,5);let s=Ot(i,["MA\xD1ANA\u2026","\xBFSEGUIMOS CON","LA PARTIDA?"],1.4,[.8,2.2,-.6],50);return{update:(r,o,a)=>ne(s,r,X(e,"manana")-.2,99,a)}},c:[[0,1.6,2.6],[0,1.45,-.7],[0,1.6,2.2],[0,1.45,-.7]],range:3,look:Qu}});re(85,(n,e)=>{let t=X(e,"ni"),i=X(e,"va");return{...ju,fov:30,atores:[Gt({x:.5,z:-.6,eyes:[[0,"smug"],[i,"happy"]],move:s=>[hn(.5,3.2,zt(i,i+2.5,s)),0,hn(-.6,-.2,zt(i,i+2.5,s))],pose:(s,r)=>r>i?s.walk(r*2):s.pose({armL:[12,8],armR:[100,30]})}),Ue({x:-.5,z:-.9,eyes:[[0,"happy"]],pose:(s,r)=>r>i+.5?Fa(s,r):zn(s,r)})],extra:s=>{Ku(s),Zu(s,[0,2.6,-.5],3,5);let r=Ot(s,["VALE. PERO MA\xD1ANA","CONDUZCO YO"],1.6,[-1.1,2.15,-.9],52),o=Ot(s,["NI LO SUE\xD1ES"],1.2,[1.2,2.15,-.6],62),a=Ye(s,["JAJAJA"],.9,[2.2,2,-.4],is);return{update:(l,c,h)=>{ne(r,l,.1,t-.1,h),ne(o,l,t-.1,i+.3,h),ne(a,l,i+.4,99,h)}}},c:[[.3,1.6,2.8],[.3,1.45,-.7],[.8,1.6,2.5],[.8,1.45,-.6]],range:3,look:Qu}});re(86,(n,e)=>{let t=X(e,"partida"),i=X(e,"haces");return{...un,fov:32,atores:[Ue({x:-.4,z:-.4,eyes:[[0,"look"],[i-.5,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r<i-.6?55:12,60]})})],extra:(s,r,o)=>{let a=Ii(s,"pausa"),l=mn();s.add(l);let c=_t(s,e,[[["MEDIANOCHE"],0,"y",[-.4,2.25,-.4],1.3],[["PODR\xCDAS SEGUIR JUGANDO"],"podrias","w",[-.4,2.25,-.4],2.1],[["PERO NO"],"haces","p",[-.4,2.25,-.4],1,1]]);return{update:(h,d,u)=>{a.userData.upd(h,h<t?"inicio":"pausa"),Dn(l,o[0]),l.visible=h<i-.6,c(h,u)}}},c:[[0,1.65,3.2],[.2,1.4,-.7],[0,1.6,2.7],[.2,1.4,-.7]],range:3,look:gn}});re(87,(n,e)=>{let t=X(e,"sonriendo");return{...un,fov:30,atores:[Yu(Ue,{x:-.7,z:-1,y:1.08,eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{let s=yh(i,["SONRIENDO COMO UN TONTO"],2,[-.8,2,-.9]),r=xn(i,12,"#FFB0C0"),o=Mr(i,.35);return o.position.set(-.4,1.55,-.9),{update:(a,l,c)=>{ne(s,a,t-.2,99,c),r(a,[-1,1.5,-.9,.8],a>t?1:0),o.visible=a>t,o.scale.setScalar(Sr(a,100)),hi(o,c)}}},c:[[-.6,2.3,3],[-.8,1,-1],[-.6,2.2,2.6],[-.8,1,-1]],range:3,look:gn}});re(88,(n,e)=>{let t=X(e,"atrasado"),i=X(e,"destripar");return{amb:"gris",fov:30,k:1,atores:[Ue({x:-1.8,z:-.3,eyes:[[0,"look"],[t,"flat"]]})],extra:s=>{let r=Da(s,[[`TUS
AMIGOS`,.95,"#8AA8C8"],["T\xDA",.18,"#43C4B4"]],2.2,[.5,1.55,-.5],{title:"HORAS JUGADAS"}),o=_t(s,e,[[["VAS MUY ATRASADO"],"atrasado","w",[.5,2.55,-.4],1.7],[["SPOILERS A LA VISTA"],"destripar","r",[.5,2.55,-.4],1.9,1]]);return{update:(a,l,c)=>{ne(r,a,.1,99,c),o(a,c)}}},c:[[-.3,1.6,4.2],[-.3,1.55,-.4],[-.3,1.6,3.7],[-.3,1.55,-.4]],range:3}});re(89,(n,e)=>({...un,fov:30,atores:[Yu(Ue,{x:-.7,z:-1,y:1.08,eyes:[[0,"happy"]]})],extra:t=>{let i=Ye(t,["NO TE IMPORTA NADA"],1.8,[-.8,2,-.9],is);return{update:(s,r,o)=>ne(i,s,.1,99,o)}},c:[[-.6,2.3,2.9],[-.8,1,-1],[-.6,2.25,2.6],[-.8,1,-1]],range:3,look:gn}));re(90,(n,e)=>{let t=X(e,"13"),i=X(e,"mucho");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=io(s,[0,1.7,-.4],1.8,l=>`${2013+Math.round(13*zt(t-1.2,t+.6,l))}`,{w:700,h:260,size:170}),o=Xt(s,["+13 A\xD1OS DESDE GTA 5"],2,[0,.95,-.3]),a=Ye(s,["Y SEGUIR\xC1 AH\xCD"],1.5,[0,2.35,-.4],no);return{update:(l,c,h)=>{r.userData.upd(l),ne(o,l,t-.2,99,h),ne(a,l,i-.5,99,h)}}},c:[[0,1.65,3.8],[0,1.65,-.4],[0,1.65,3.3],[0,1.65,-.4]],range:3}});re(91,(n,e)=>{let t=X(e,"mensaje"),i=X(e,"apetece"),s=X(e,"dia");return{amb:"gris",fov:28,k:1,atores:[],extra:r=>{let o=Pi(r,[-.6,1.5,-.5],1,[["l","Oye\u2026 \xBFte apetece quedar ma\xF1ana por la tarde?",i-.3]],{hora:"22:47",name:"MI CRUSH \u2665"}),a=_t(r,e,[[["UNA SOLA VEZ"],0,"p",[.95,2,-.4],1.3],[["UN MENSAJE"],"mensaje","w",[.95,2,-.4],1.2],[["\xBFTE APETECE QUEDAR?"],"apetece","y",[.95,2,-.4],1.7],[["UN D\xCDA CUALQUIERA"],"dia","w",[.95,2,-.4],1.6,1]]);return{update:(l,c,h)=>{o.userData.upd(l),a(l,h)}}},c:[[.2,1.5,4],[.2,1.5,-.5],[.2,1.5,3.6],[.2,1.5,-.5]],range:2,blur:4}});re(92,(n,e)=>({...Di,ambo:{night:!0},fov:32,atores:[Gt({x:-.45,...fi,eyes:[[0,"happy"]],pose:(t,i)=>{ui(t),kn(t,i)}}),Ue({x:.45,...fi,eyes:[[0,"happy"]],pose:(t,i)=>{ui(t),kn(t,i+1)}})],extra:(t,i,s)=>{so(t);let r=mn(),o=mn();t.add(r,o);let a=Ye(t,["NO TUVISTE QUE ELEGIR"],2,[0,2,.3],is),l=xn(t,12,"#FFD8A0");return{update:(c,h,d)=>{Dn(r,s[0]),Dn(o,s[1]),ne(a,c,X(e,"elegir")-.3,99,d),l(c,[0,1.4,.4,1])}}},c:[[0,1.4,3.4],[0,1.15,.3],[0,1.4,2.9],[0,1.15,.3]],range:3,look:{exposure:.95,bloom:.5}}));re(93,(n,e)=>({amb:"barrio",fov:32,atores:[Ue({x:0,z:-.3,eyes:[[0,"happy"]],move:t=>[hn(-1.2,.8,t/Math.max(n,1)),0,-.3],pose:(t,i)=>t.walk(i*1.6)})],extra:t=>{let i=Ye(t,["ATR\xC9VETE A SALIR DE CASA"],2.2,[0,2.4,-.4],no),s=xn(t,12,"#FFE27A");return{update:(r,o,a)=>{ne(i,r,X(e,"atreverte")-.2,99,a),s(r,[0,1.6,-.3,1.4])}}},c:[[0,1.7,3.6],[0,1.4,-.3],[0,1.65,3.2],[0,1.4,-.3]],range:3.5,look:{bloom:.45}}));re(94,(n,e)=>{let t=X(e,"crush"),i=X(e,"leo");return{amb:"gris",fov:30,k:1,atores:[Gt({x:-1.4,z:-.4,eyes:[[0,"happy"]],pose:Fa})],extra:s=>{let r=Rs(s,[1.4,1.5,-.6],1.6,"inicio"),o=Ye(s,["\xBFY T\xDA QU\xC9 HABR\xCDAS HECHO?"],2.3,[0,2.6,-.4],{bg:"#1E2230",fg:"#F2C14E"}),a=Ye(s,["CRUSH"],1,[-1.4,.85,-.2],is),l=Ye(s,["GTA 6"],1,[1.4,.85,-.2],br),c=Xt(s,["TE LEO EN LOS COMENTARIOS"],2.3,[0,2.6,-.4]);return{update:(h,d,u)=>{r.userData.upd(h),ne(o,h,.1,i-.2,u),ne(a,h,t-.2,99,u),ne(l,h,t+.4,99,u),ne(c,h,i-.2,99,u)}}},c:[[0,1.6,4.4],[0,1.6,-.4],[0,1.6,3.9],[0,1.6,-.4]],range:3,look:{bloom:.45}}});function yE(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new ga(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=eo.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=eo.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(yE(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=eo[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
