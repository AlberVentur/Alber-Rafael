var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Bc="170";var ef=0,wh=1,tf=2;var Nd=1,Oc=2,pi=3,Bi=0,Qt=1,_t=2,ti=0,Ui=1,gn=2,Rh=3,Ch=4,nf=5,is=100,sf=101,rf=102,of=103,af=104,lf=200,cf=201,hf=202,df=203,ul=204,fl=205,uf=206,ff=207,pf=208,mf=209,gf=210,Ef=211,yf=212,vf=213,_f=214,pl=0,ml=1,gl=2,Vs=3,El=4,yl=5,vl=6,_l=7,Bd=0,Af=1,Mf=2,ni=0,Sf=1,bf=2,Tf=3,xf=4,wf=5,Rf=6,Cf=7;var Od=300,Ws=301,Xs=302,Al=303,Ml=304,Ko=306,qt=1e3,rs=1001,Sl=1002,wn=1003,Ff=1004;var $r=1005;var jn=1006,Fa=1007;var os=1008;var yi=1009,Hd=1010,zd=1011,Ir=1012,Hc=1013,vi=1014,ei=1015,vn=1016,zc=1017,kc=1018,qs=1020,kd=35902,Gd=1021,Vd=1022,Wn=1023,Wd=1024,Xd=1025,zs=1026,Ys=1027,Gc=1028,Vc=1029,qd=1030,Wc=1031;var Xc=1033,To=33776,xo=33777,wo=33778,Ro=33779,bl=35840,Tl=35841,xl=35842,wl=35843,Rl=36196,Cl=37492,Fl=37496,Pl=37808,Il=37809,Dl=37810,Ll=37811,Ul=37812,Nl=37813,Bl=37814,Ol=37815,Hl=37816,zl=37817,kl=37818,Gl=37819,Vl=37820,Wl=37821,Co=36492,Xl=36494,ql=36495,Yd=36283,Yl=36284,Zl=36285,$l=36286;var Fo=2300,Jl=2301,Pa=2302,Fh=2400,Ph=2401,Ih=2402;var Pf=3200,sr=3201;var Zd=0,If=1,Di="",Lt="srgb",Gi="srgb-linear",jo="linear",At="srgb";var _s=7680;var Dh=519,Df=512,Lf=513,Uf=514,$d=515,Nf=516,Bf=517,Of=518,Hf=519,Ql=35044;var Lh="300 es",gi=2e3,Po=2001,Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ia=Math.PI/180,Io=180/Math.PI;function Ni(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function zf(n,e){return(n%e+e)%e}function Da(n,e,t){return(1-t)*n+t*e}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],E=s[0],m=s[3],f=s[6],v=s[1],_=s[4],y=s[7],D=s[2],R=s[5],T=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*_+l*R,r[6]=o*f+a*y+l*T,r[1]=c*E+h*v+d*D,r[4]=c*m+h*_+d*R,r[7]=c*f+h*y+d*T,r[2]=u*E+p*v+g*D,r[5]=u*m+p*_+g*R,r[8]=u*f+p*y+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=p*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},La=new $e;function Jd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Do(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kf(){let n=Do("canvas");return n.style.display="block",n}var Uh={};function wr(n){n in Uh||(Uh[n]=!0,console.warn(n))}function Gf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Vf(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wf(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var dt={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===At&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===At&&(n.r=ks(n.r),n.g=ks(n.g),n.b=ks(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Di?jo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Nh=[.64,.33,.3,.6,.15,.06],Bh=[.2126,.7152,.0722],Oh=[.3127,.329],Hh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Gi]:{primaries:Nh,whitePoint:Oh,transfer:jo,toXYZ:Hh,fromXYZ:zh,luminanceCoefficients:Bh,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:Nh,whitePoint:Oh,transfer:At,toXYZ:Hh,fromXYZ:zh,luminanceCoefficients:Bh,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}});var As,Kl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Do("canvas")),As.width=e.width,As.height=e.height;let i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Do("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xf=0,Lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qf=0,En=class n extends Oi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=rs,s=rs,r=jn,o=os,a=Wn,l=yi,c=n.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ni(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qt:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qt:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Od;En.DEFAULT_ANISOTROPY=1;var St=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,D=(f+1)/2,R=(h+u)/4,T=(d+E)/4,C=(g+m)/4;return _>y&&_>D?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=T/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=C/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=T/r,s=C/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jl=class extends Oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new En(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Uo=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ec=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*E,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let D=Math.sqrt(_),R=Math.atan2(D,f*v);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}let y=a*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new I,kh=new Hi,_i=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Qr.subVectors(this.max,Er),Ms.subVectors(e.a,Er),Ss.subVectors(e.b,Er),bs.subVectors(e.c,Er),wi.subVectors(Ss,Ms),Ri.subVectors(bs,Ss),Ji.subVectors(Ms,bs);let t=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-Ji.y,Ji.x,0];return!Ba(t,Ms,Ss,bs,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Ms,Ss,bs,Qr))?!1:(Kr.crossVectors(wi,Ri),t=[Kr.x,Kr.y,Kr.z],Ba(t,Ms,Ss,bs,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,Jr=new _i,Ms=new I,Ss=new I,bs=new I,wi=new I,Ri=new I,Ji=new I,Er=new I,Qr=new I,Kr=new I,Qi=new I;function Ba(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yf=new _i,yr=new I,Oa=new I,zi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Yf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Oa)),this.expandByPoint(yr.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new I,Ha=new I,jr=new I,Ci=new I,za=new I,eo=new I,ka=new I,No=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ha.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ha);let r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=Ci.dot(this.direction),l=-Ci.dot(jr),c=Ci.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ha).addScaledVector(jr,u),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){za.subVectors(t,e),eo.subVectors(i,e),ka.crossVectors(za,eo);let o=this.direction.dot(ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let l=a*this.direction.dot(eo.crossVectors(Ci,eo));if(l<0)return null;let c=a*this.direction.dot(za.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(ka);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,$f)}lookAt(e,t,i){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Fi.crossVectors(i,Tn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Fi.crossVectors(i,Tn)),Fi.normalize(),to.crossVectors(Tn,Fi),s[0]=Fi.x,s[4]=to.x,s[8]=Tn.x,s[1]=Fi.y,s[5]=to.y,s[9]=Tn.y,s[2]=Fi.z,s[6]=to.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],E=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],D=i[15],R=s[0],T=s[4],C=s[8],S=s[12],A=s[1],P=s[5],O=s[9],H=s[13],W=s[2],j=s[6],Y=s[10],re=s[14],q=s[3],fe=s[7],_e=s[11],Le=s[15];return r[0]=o*R+a*A+l*W+c*q,r[4]=o*T+a*P+l*j+c*fe,r[8]=o*C+a*O+l*Y+c*_e,r[12]=o*S+a*H+l*re+c*Le,r[1]=h*R+d*A+u*W+p*q,r[5]=h*T+d*P+u*j+p*fe,r[9]=h*C+d*O+u*Y+p*_e,r[13]=h*S+d*H+u*re+p*Le,r[2]=g*R+E*A+m*W+f*q,r[6]=g*T+E*P+m*j+f*fe,r[10]=g*C+E*O+m*Y+f*_e,r[14]=g*S+E*H+m*re+f*Le,r[3]=v*R+_*A+y*W+D*q,r[7]=v*T+_*P+y*j+D*fe,r[11]=v*C+_*O+y*Y+D*_e,r[15]=v*S+_*H+y*re+D*Le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],E=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+E*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],E=e[13],m=e[14],f=e[15],v=d*m*c-E*u*c+E*l*p-a*m*p-d*l*f+a*u*f,_=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,y=h*E*c-g*d*c+g*a*p-o*E*p-h*a*f+o*d*f,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,R=t*v+i*_+s*y+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=v*T,e[1]=(E*u*r-d*m*r-E*s*p+i*m*p+d*s*f-i*u*f)*T,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*f+i*l*f)*T,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*T,e[4]=_*T,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*T,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*T,e[8]=y*T,e[9]=(g*d*r-h*E*r-g*i*p+t*E*p+h*i*f-t*d*f)*T,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*f+t*a*f)*T,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*T,e[12]=D*T,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*T,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*T,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,E=o*h,m=o*d,f=a*d,v=l*c,_=l*h,y=l*d,D=i.x,R=i.y,T=i.z;return s[0]=(1-(E+f))*D,s[1]=(p+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(u+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+_)*T,s[9]=(m-v)*T,s[10]=(1-(u+E))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let c=1/r,h=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,t.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=gi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,g;if(a===gi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Po)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=gi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,p=(i+s)*h,g,E;if(a===gi)g=(o+r)*d,E=-2*d;else if(a===Po)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ts=new I,Gn=new bt,Zf=new I(0,0,0),$f=new I(1,1,1),Fi=new I,to=new I,Tn=new I,Gh=new bt,Vh=new Hi,ii=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jf=0,Wh=new I,xs=new Hi,di=new bt,no=new I,vr=new I,Qf=new I,Kf=new Hi,Xh=new I(1,0,0),qh=new I(0,1,0),Yh=new I(0,0,1),Zh={type:"added"},jf={type:"removed"},ws={type:"childadded",child:null},Ga={type:"childremoved",child:null},Vt=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ii,i=new Hi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new $e}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?no.copy(e):no.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(vr,no,this.up):di.lookAt(no,vr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(di),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jf),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new I,ui=new I,Va=new I,fi=new I,Rs=new I,Cs=new I,$h=new I,Wa=new I,Xa=new I,qa=new I,Ya=new St,Za=new St,$a=new St,Li=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vn.subVectors(s,t),ui.subVectors(i,t),Va.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(ui),l=Vn.dot(Va),c=ui.dot(ui),h=ui.dot(Va),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ya.setScalar(0),Za.setScalar(0),$a.setScalar(0),Ya.fromBufferAttribute(e,t),Za.fromBufferAttribute(e,i),$a.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ya,r.x),o.addScaledVector(Za,r.y),o.addScaledVector($a,r.z),o}static isFrontFacing(e,t,i,s){return Vn.subVectors(i,t),ui.subVectors(e,t),Vn.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Vn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),Wa.subVectors(e,i);let l=Rs.dot(Wa),c=Cs.dot(Wa);if(l<=0&&c<=0)return t.copy(i);Xa.subVectors(e,s);let h=Rs.dot(Xa),d=Cs.dot(Xa);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Rs,o);qa.subVectors(e,r);let p=Rs.dot(qa),g=Cs.dot(qa);if(g>=0&&p<=g)return t.copy(r);let E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cs,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return $h.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector($h,a);let f=1/(m+E+u);return o=E*f,a=u*f,t.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=zf(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ja(o,r,e+1/3),this.g=Ja(o,r,e),this.b=Ja(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return dt.fromWorkingColorSpace(ln.copy(this),e),Math.round(cn(ln.r*255,0,255))*65536+Math.round(cn(ln.g*255,0,255))*256+Math.round(cn(ln.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Lt){dt.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(io);let i=Da(Pi.h,io.h,t),s=Da(Pi.s,io.s,t),r=Da(Pi.l,io.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new de;de.NAMES=Qd;var ep=0,Ai=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Ni(),this.name="",this.blending=Ui,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qe=class extends Ai{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new I,so=new ce,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}};var Oo=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ho=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var yt=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},tp=0,Ln=new bt,Qa=new Vt,Fs=new I,xn=new _i,_r=new _i,Jt=new I,Xt=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?Ho:Oo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(xn.min,_r.min),xn.expandByPoint(Jt),Jt.addVectors(xn.max,_r.max),xn.expandByPoint(Jt)):(xn.expandByPoint(_r.min),xn.expandByPoint(_r.max))}xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),Jt.add(Fs)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new I,l[C]=new I;let c=new I,h=new I,d=new I,u=new ce,p=new ce,g=new ce,E=new I,m=new I;function f(C,S,A){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(E),a[S].add(E),a[A].add(E),l[C].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){let A=v[C],P=A.start,O=A.count;for(let H=P,W=P+O;H<W;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new I,y=new I,D=new I,R=new I;function T(C){D.fromBufferAttribute(s,C),R.copy(D);let S=a[C];_.copy(S),_.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(R,S);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=v.length;C<S;++C){let A=v[C],P=A.start,O=A.count;for(let H=P,W=P+O;H<W;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jh=new bt,Ki=new No,ro=new zi,Qh=new I,oo=new I,ao=new I,lo=new I,Ka=new I,co=new I,Kh=new I,ho=new I,k=class extends Vt{constructor(e=new Xt,t=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ka.fromBufferAttribute(d,e),o?co.addScaledVector(Ka,h):co.addScaledVector(Ka.sub(t),h))}t.add(co)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(ro.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ro,Qh)===null||Ki.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,D=_;y<D;y+=3){let R=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);s=uo(this,f,e,i,c,h,d,R,T,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=uo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,D=_;y<D;y+=3){let R=y,T=y+1,C=y+2;s=uo(this,f,e,i,c,h,d,R,T,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=m,_=m+1,y=m+2;s=uo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function np(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;ho.copy(a),ho.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:n}}function uo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,oo),n.getVertexPosition(l,ao),n.getVertexPosition(c,lo);let h=np(n,e,t,i,oo,ao,lo,Kh);if(h){let d=new I;Li.getBarycoord(Kh,oo,ao,lo,d),s&&(h.uv=Li.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=Li.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Li.getNormal(oo,ao,lo,u.normal),h.face=u,h.barycoord=d}return h}var yn=class n extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function g(E,m,f,v,_,y,D,R,T,C,S){let A=y/T,P=D/C,O=y/2,H=D/2,W=R/2,j=T+1,Y=C+1,re=0,q=0,fe=new I;for(let _e=0;_e<Y;_e++){let Le=_e*P-H;for(let et=0;et<j;et++){let Rt=et*A-O;fe[E]=Rt*v,fe[m]=Le*_,fe[f]=W,c.push(fe.x,fe.y,fe.z),fe[E]=0,fe[m]=0,fe[f]=R>0?1:-1,h.push(fe.x,fe.y,fe.z),d.push(et/T),d.push(1-_e/C),re+=1}}for(let _e=0;_e<C;_e++)for(let Le=0;Le<T;Le++){let et=u+Le+j*_e,Rt=u+Le+j*(_e+1),J=u+(Le+1)+j*(_e+1),oe=u+(Le+1)+j*_e;l.push(et,Rt,oe),l.push(Rt,J,oe),q+=6}a.addGroup(p,q,S),p+=q,u+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function un(n){let e={};for(let t=0;t<n.length;t++){let i=Zs(n[t]);for(let s in i)e[s]=i[s]}return e}function ip(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var rr={clone:Zs,merge:un},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends Ai{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},zo=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new I,jh=new ce,ed=new ce,sn=class extends zo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,jh,ed),t.subVectors(ed,jh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=-90,Is=1,tc=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Ps,Is,e,t);s.layers=this.layers,this.add(s);let r=new sn(Ps,Is,e,t);r.layers=this.layers,this.add(r);let o=new sn(Ps,Is,e,t);o.layers=this.layers,this.add(o);let a=new sn(Ps,Is,e,t);a.layers=this.layers,this.add(a);let l=new sn(Ps,Is,e,t);l.layers=this.layers,this.add(l);let c=new sn(Ps,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ko=class extends En{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nc=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ko(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ti});r.uniforms.tEquirect.value=t;let o=new k(s,r),a=t.minFilter;return t.minFilter===os&&(t.minFilter=jn),new tc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ja=new I,op=new I,ap=new $e,mi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ja.subVectors(i,t).cross(op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ap.getNormalMatrix(e),s=this.coplanarPoint(ja).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new zi,fo=new I,Dr=class{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],E=s[10],m=s[11],f=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),t===gi)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(t===Po)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],E=d[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let E=d[p];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var be=class n extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],E=[],m=[];for(let f=0;f<h;f++){let v=f*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let _=v+c*f,y=v+c*(f+1),D=v+1+c*(f+1),R=v+1+c*f;p.push(_,y,R),p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(E,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,a0=`struct PhysicalMaterial {
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
}`,l0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y0=`#if defined( USE_POINTS_UV )
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
#endif`,v0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
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
}`,mm=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,xm=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Fm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,zm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:dp,alphamap_pars_fragment:up,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:Ep,batching_vertex:yp,begin_vertex:vp,beginnormal_vertex:_p,bsdfs:Ap,iridescence_fragment:Mp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:wp,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Fp,color_vertex:Pp,common:Ip,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Bp,emissivemap_pars_fragment:Op,colorspace_fragment:Hp,colorspace_pars_fragment:zp,envmap_fragment:kp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:t0,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Zp,fog_pars_fragment:$p,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Qp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:jp,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:o0,lights_physical_pars_fragment:a0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:h0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:f0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:E0,map_particle_pars_fragment:y0,metalnessmap_fragment:v0,metalnessmap_pars_fragment:_0,morphinstance_vertex:A0,morphcolor_vertex:M0,morphnormal_vertex:S0,morphtarget_pars_vertex:b0,morphtarget_vertex:T0,normal_fragment_begin:x0,normal_fragment_maps:w0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:F0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:U0,opaque_fragment:N0,packing:B0,premultiplied_alpha_fragment:O0,project_vertex:H0,dithering_fragment:z0,dithering_pars_fragment:k0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:Z0,skinning_pars_vertex:$0,skinning_vertex:J0,skinnormal_vertex:Q0,specularmap_fragment:K0,specularmap_pars_fragment:j0,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:dm,cube_vert:um,cube_frag:fm,depth_vert:pm,depth_frag:mm,distanceRGBA_vert:gm,distanceRGBA_frag:Em,equirect_vert:ym,equirect_frag:vm,linedashed_vert:_m,linedashed_frag:Am,meshbasic_vert:Mm,meshbasic_frag:Sm,meshlambert_vert:bm,meshlambert_frag:Tm,meshmatcap_vert:xm,meshmatcap_frag:wm,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Fm,meshphong_frag:Pm,meshphysical_vert:Im,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Um,points_vert:Nm,points_frag:Bm,shadow_vert:Om,shadow_frag:Hm,sprite_vert:zm,sprite_frag:km},he={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Qn={basic:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:un([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:un([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:un([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:un([he.points,he.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:un([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:un([he.common,he.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:un([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:un([he.sprite,he.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:un([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:un([he.lights,he.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Qn.physical={uniforms:un([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var po={r:0,b:0,g:0},es=new ii,Gm=new bt;function Vm(n,e,t,i,s,r,o){let a=new de(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function E(v){let _=!1,y=g(v);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Ko)?(h===void 0&&(h=new k(new yn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Zs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(_.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(es)),h.material.toneMapped=dt.getTransfer(y.colorSpace)!==At,(d!==y||u!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new k(new be(2,2),new en({name:"BackgroundMaterial",uniforms:Zs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(y.colorSpace)!==At,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(po,Kd(n)),i.buffers.color.setClear(po.r,po.g,po.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:E,addToRenderList:m}}function Wm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,O,H,W){let j=!1,Y=d(H,O,P);r!==Y&&(r=Y,c(r.object)),j=p(A,H,O,W),j&&g(A,H,O,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(A,P,O,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,O){let H=O.wireframe===!0,W=i[A.id];W===void 0&&(W={},i[A.id]=W);let j=W[P.id];j===void 0&&(j={},W[P.id]=j);let Y=j[H];return Y===void 0&&(Y=u(l()),j[H]=Y),Y}function u(A){let P=[],O=[],H=[];for(let W=0;W<t;W++)P[W]=0,O[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:H,object:A,attributes:{},index:null}}function p(A,P,O,H){let W=r.attributes,j=P.attributes,Y=0,re=O.getAttributes();for(let q in re)if(re[q].location>=0){let _e=W[q],Le=j[q];if(Le===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Le=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Le=A.instanceColor)),_e===void 0||_e.attribute!==Le||Le&&_e.data!==Le.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(A,P,O,H){let W={},j=P.attributes,Y=0,re=O.getAttributes();for(let q in re)if(re[q].location>=0){let _e=j[q];_e===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor));let Le={};Le.attribute=_e,_e&&_e.data&&(Le.data=_e.data),W[q]=Le,Y++}r.attributes=W,r.attributesNum=Y,r.index=H}function E(){let A=r.newAttributes;for(let P=0,O=A.length;P<O;P++)A[P]=0}function m(A){f(A,0)}function f(A,P){let O=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;O[A]=1,H[A]===0&&(n.enableVertexAttribArray(A),H[A]=1),W[A]!==P&&(n.vertexAttribDivisor(A,P),W[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let O=0,H=P.length;O<H;O++)P[O]!==A[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function _(A,P,O,H,W,j,Y){Y===!0?n.vertexAttribIPointer(A,P,O,W,j):n.vertexAttribPointer(A,P,O,H,W,j)}function y(A,P,O,H){E();let W=H.attributes,j=O.getAttributes(),Y=P.defaultAttributeValues;for(let re in j){let q=j[re];if(q.location>=0){let fe=W[re];if(fe===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){let _e=fe.normalized,Le=fe.itemSize,et=e.get(fe);if(et===void 0)continue;let Rt=et.buffer,J=et.type,oe=et.bytesPerElement,Ce=J===n.INT||J===n.UNSIGNED_INT||fe.gpuType===Hc;if(fe.isInterleavedBufferAttribute){let pe=fe.data,ke=pe.stride,Xe=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let tt=0;tt<q.locationSize;tt++)f(q.location+tt,pe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let tt=0;tt<q.locationSize;tt++)_(q.location+tt,Le/q.locationSize,J,_e,ke*oe,(Xe+Le/q.locationSize*tt)*oe,Ce)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)f(q.location+pe,fe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Rt);for(let pe=0;pe<q.locationSize;pe++)_(q.location+pe,Le/q.locationSize,J,_e,Le*oe,Le/q.locationSize*pe*oe,Ce)}}else if(Y!==void 0){let _e=Y[re];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(q.location,_e);break;case 3:n.vertexAttrib3fv(q.location,_e);break;case 4:n.vertexAttrib4fv(q.location,_e);break;default:n.vertexAttrib1fv(q.location,_e)}}}}v()}function D(){C();for(let A in i){let P=i[A];for(let O in P){let H=P[O];for(let W in H)h(H[W].object),delete H[W];delete P[O]}delete i[A]}}function R(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let O in P){let H=P[O];for(let W in H)h(H[W].object),delete H[W];delete P[O]}delete i[A.id]}function T(A){for(let P in i){let O=i[P];if(O[A.id]===void 0)continue;let H=O[A.id];for(let W in H)h(H[W].object),delete H[W];delete O[A.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Xm(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Wn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ei&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function Ym(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=f.clippingState||null;l.value=y,y=h(g,u,_,p);for(let D=0;D!==_;++D)y[D]=t[D];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=p+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function Zm(n){let e=new WeakMap;function t(o,a){return a===Al?o.mapping=Ws:a===Ml&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Al||a===Ml)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new nc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var $s=class extends zo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,td=[.125,.215,.35,.446,.526,.582],ss=20,el=new $s,nd=new de,tl=null,nl=0,il=0,sl=!1,ns=(1+Math.sqrt(5))/2,Ds=1/ns,id=[new I(-ns,Ds,0),new I(ns,Ds,0),new I(-Ds,0,ns),new I(Ds,0,ns),new I(0,ns,-Ds),new I(0,ns,Ds),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),this._renderer.xr.enabled=sl,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:vn,format:Wn,colorSpace:Gi,depthBuffer:!1},s=sd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(r)),this._blurMaterial=Jm(r,e,t)}return s}_compileMaterial(e){let t=new k(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,i,s){let a=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(nd),h.toneMapping=ni,h.autoClear=!1;let p=new qe({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new k(new yn,p),E=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,E=!0):(p.color.copy(nd),E=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;mo(s,v*_,f>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ws||e.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;mo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,el)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=id[(s-r-1)%id.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new k(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ss-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let f=[],v=0;for(let T=0;T<ss;++T){let C=T/E,S=Math.exp(-C*C/2);f.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],D=3*y*(s>_-Hs?s-_+Hs:0),R=4*(this._cubeSize-y);mo(t,D,R,3*y,2*y),l.setRenderTarget(t),l.render(d,el)}};function $m(n){let e=[],t=[],i=[],s=n,r=n-Hs+1+td.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Hs?l=td[o-n+Hs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,E=3,m=2,f=1,v=new Float32Array(E*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){let T=R%3*2/3-1,C=R>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(S,E*g*R),_.set(u,m*g*R);let A=[R,R,R,R,R,R];y.set(A,f*g*R)}let D=new Xt;D.setAttribute("position",new Kt(v,E)),D.setAttribute("uv",new Kt(_,m)),D.setAttribute("faceIndex",new Kt(y,f)),e.push(D),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sd(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Jm(n,e,t){let i=new Float32Array(ss),s=new I(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function rd(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function od(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function Qm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Al||l===Ml,h=l===Ws||l===Xs;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Go(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Go(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Km(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&wr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jm(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let E=p[g];for(let m=0,f=E.length;m<f;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,E=0;if(p!==null){let v=p.array;E=p.version;for(let _=0,y=v.length;_<y;_+=3){let D=v[_+0],R=v[_+1],T=v[_+2];u.push(D,R,R,T,T,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let D=_+0,R=_+1,T=_+2;u.push(D,R,R,T,T,D)}}else return;let m=new(Jd(u)?Ho:Oo)(u,1);m.version=E;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function e1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,E,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*E[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function t1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function n1(n,e,t){let i=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*D*4*d),T=new Uo(R,y,D,d);T.type=ei,T.needsUpdate=!0;let C=_*4;for(let A=0;A<d;A++){let P=m[A],O=f[A],H=v[A],W=y*D*4*A;for(let j=0;j<P.count;j++){let Y=j*C;p===!0&&(s.fromBufferAttribute(P,j),R[W+Y+0]=s.x,R[W+Y+1]=s.y,R[W+Y+2]=s.z,R[W+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,j),R[W+Y+4]=s.x,R[W+Y+5]=s.y,R[W+Y+6]=s.z,R[W+Y+7]=0),E===!0&&(s.fromBufferAttribute(H,j),R[W+Y+8]=s.x,R[W+Y+9]=s.y,R[W+Y+10]=s.z,R[W+Y+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new ce(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function i1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Js=class extends En{constructor(e,t,i,s,r,o,a,l,c,h=zs){if(h!==zs&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zs&&(i=vi),i===void 0&&h===Ys&&(i=qs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},eu=new En,ad=new Js(1,1),tu=new Uo,nu=new ec,iu=new ko,ld=[],cd=[],hd=new Float32Array(16),dd=new Float32Array(9),ud=new Float32Array(4);function or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ea(n,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function s1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function a1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function l1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),Zt(t,i)}}function c1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;dd.set(i),n.uniformMatrix3fv(this.addr,!1,dd),Zt(t,i)}}function h1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;hd.set(i),n.uniformMatrix4fv(this.addr,!1,hd),Zt(t,i)}}function d1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function m1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function v1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ad.compareFunction=$d,r=ad):r=eu,t.setTexture2D(e||r,s)}function _1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nu,s)}function A1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||iu,s)}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tu,s)}function S1(n){switch(n){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return h1;case 5124:case 35670:return d1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return E1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return M1}}function b1(n,e){n.uniform1fv(this.addr,e)}function T1(n,e){let t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function x1(n,e){let t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function w1(n,e){let t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function R1(n,e){let t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C1(n,e){let t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F1(n,e){let t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P1(n,e){n.uniform1iv(this.addr,e)}function I1(n,e){n.uniform2iv(this.addr,e)}function D1(n,e){n.uniform3iv(this.addr,e)}function L1(n,e){n.uniform4iv(this.addr,e)}function U1(n,e){n.uniform1uiv(this.addr,e)}function N1(n,e){n.uniform2uiv(this.addr,e)}function B1(n,e){n.uniform3uiv(this.addr,e)}function O1(n,e){n.uniform4uiv(this.addr,e)}function H1(n,e,t){let i=this.cache,s=e.length,r=ea(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||eu,r[o])}function z1(n,e,t){let i=this.cache,s=e.length,r=ea(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nu,r[o])}function k1(n,e,t){let i=this.cache,s=e.length,r=ea(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||iu,r[o])}function G1(n,e,t){let i=this.cache,s=e.length,r=ea(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tu,r[o])}function V1(n){switch(n){case 5126:return b1;case 35664:return T1;case 35665:return x1;case 35666:return w1;case 35674:return R1;case 35675:return C1;case 35676:return F1;case 5124:case 35670:return P1;case 35667:case 35671:return I1;case 35668:case 35672:return D1;case 35669:case 35673:return L1;case 5125:return U1;case 36294:return N1;case 36295:return B1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return G1}}var ic=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=S1(t.type)}},sc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V1(t.type)}},rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},rl=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function W1(n,e,t){let i=n.name,s=i.length;for(rl.lastIndex=0;;){let r=rl.exec(i),o=rl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fd(t,c===void 0?new ic(a,n,e):new sc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new rc(a),fd(t,d)),t=d}}}var Gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);W1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function pd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var X1=37297,q1=0;function Y1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var md=new $e;function Z1(n){dt._getMatrix(md,dt.workingColorSpace,n);let e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case jo:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Y1(n.getShaderSource(e),o)}else return s}function $1(n,e){let t=Z1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J1(n,e){let t;switch(e){case Sf:t="Linear";break;case bf:t="Reinhard";break;case Tf:t="Cineon";break;case xf:t="ACESFilmic";break;case Rf:t="AgX";break;case Cf:t="Neutral";break;case wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var go=new I;function Q1(){dt.getLuminanceCoefficients(go);let n=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function j1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function e2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rr(n){return n!==""}function Ed(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(n){return n.replace(t2,i2)}var n2=new Map;function i2(n,e){let t=Qe[e];if(t===void 0){let i=n2.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return oc(t)}var s2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(s2,r2)}function r2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function o2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function a2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function c2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bd:e="ENVMAP_BLENDING_MULTIPLY";break;case Af:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function h2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function d2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=o2(t),c=a2(t),h=l2(t),d=c2(t),u=h2(t),p=K1(t),g=j1(r),E=s.createProgram(),m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(m=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[_d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ni?J1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,$1("linearToOutputTexel",t.outputColorSpace),Q1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=oc(o),o=Ed(o,t),o=yd(o,t),a=oc(a),a=Ed(a,t),a=yd(a,t),o=vd(o),a=vd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+o,y=v+f+a,D=pd(s,s.VERTEX_SHADER,_),R=pd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,R),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function T(P){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(E).trim(),H=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(R).trim(),j=!0,Y=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,R);else{let re=gd(s,D,"vertex"),q=gd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+re+`
`+q)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:j,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(D),s.deleteShader(R),C=new Gs(s,E),S=e2(s,E)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,X1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=R,this}var u2=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lc(e),t.set(e,i)),i}},lc=class{constructor(e){this.id=u2++,this.code=e,this.usedTimes=0}};function f2(n,e,t,i,s,r,o){let a=new Bo,l=new ac,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,O,H){let W=O.fog,j=H.geometry,Y=S.isMeshStandardMaterial?O.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),q=re&&re.mapping===Ko?re.image.height:null,fe=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let _e=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Le=_e!==void 0?_e.length:0,et=0;j.morphAttributes.position!==void 0&&(et=1),j.morphAttributes.normal!==void 0&&(et=2),j.morphAttributes.color!==void 0&&(et=3);let Rt,J,oe,Ce;if(fe){let vt=Qn[fe];Rt=vt.vertexShader,J=vt.fragmentShader}else Rt=S.vertexShader,J=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);let pe=n.getRenderTarget(),ke=n.state.buffers.depth.getReversed(),Xe=H.isInstancedMesh===!0,tt=H.isBatchedMesh===!0,Ot=!!S.map,ct=!!S.matcap,Gt=!!re,B=!!S.aoMap,In=!!S.lightMap,rt=!!S.bumpMap,ot=!!S.normalMap,Oe=!!S.displacementMap,Pt=!!S.emissiveMap,Be=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,z=S.clearcoat>0,Q=S.dispersion>0,ee=S.iridescence>0,$=S.sheen>0,Fe=S.transmission>0,me=M&&!!S.anisotropyMap,Ae=z&&!!S.clearcoatMap,ht=z&&!!S.clearcoatNormalMap,ie=z&&!!S.clearcoatRoughnessMap,Me=ee&&!!S.iridescenceMap,ze=ee&&!!S.iridescenceThicknessMap,Ve=$&&!!S.sheenColorMap,Se=$&&!!S.sheenRoughnessMap,at=!!S.specularMap,Je=!!S.specularColorMap,Ct=!!S.specularIntensityMap,L=Fe&&!!S.transmissionMap,ue=Fe&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,ye=S.alphaTest>0,ge=!!S.alphaHash,Ye=!!S.extensions,zt=ni;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(zt=n.toneMapping);let on={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:Rt,fragmentShader:J,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:tt,batchingColor:tt&&H._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&H.instanceColor!==null,instancingMorph:Xe&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Gi,alphaToCoverage:!!S.alphaToCoverage,map:Ot,matcap:ct,envMap:Gt,envMapMode:Gt&&re.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:In,bumpMap:rt,normalMap:ot,displacementMap:u&&Oe,emissiveMap:Pt,normalMapObjectSpace:ot&&S.normalMapType===If,normalMapTangentSpace:ot&&S.normalMapType===Zd,metalnessMap:Be,roughnessMap:w,anisotropy:M,anisotropyMap:me,clearcoat:z,clearcoatMap:Ae,clearcoatNormalMap:ht,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:ze,sheen:$,sheenColorMap:Ve,sheenRoughnessMap:Se,specularMap:at,specularColorMap:Je,specularIntensityMap:Ct,transmission:Fe,transmissionMap:L,thicknessMap:ue,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ui&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ye,alphaHash:ge,combine:S.combine,mapUv:Ot&&E(S.map.channel),aoMapUv:B&&E(S.aoMap.channel),lightMapUv:In&&E(S.lightMap.channel),bumpMapUv:rt&&E(S.bumpMap.channel),normalMapUv:ot&&E(S.normalMap.channel),displacementMapUv:Oe&&E(S.displacementMap.channel),emissiveMapUv:Pt&&E(S.emissiveMap.channel),metalnessMapUv:Be&&E(S.metalnessMap.channel),roughnessMapUv:w&&E(S.roughnessMap.channel),anisotropyMapUv:me&&E(S.anisotropyMap.channel),clearcoatMapUv:Ae&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&E(S.sheenRoughnessMap.channel),specularMapUv:at&&E(S.specularMap.channel),specularColorMapUv:Je&&E(S.specularColorMap.channel),specularIntensityMapUv:Ct&&E(S.specularIntensityMap.channel),transmissionMapUv:L&&E(S.transmissionMap.channel),thicknessMapUv:ue&&E(S.thicknessMap.channel),alphaMapUv:K&&E(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ot||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(Ot||K),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ke,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ot&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===At,decodeVideoTextureEmissive:Pt&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_t,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ye&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&S.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=c.has(1),on.vertexUv2s=c.has(2),on.vertexUv3s=c.has(3),c.clear(),on}function f(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let O=Qn[A];P=rr.clone(O.uniforms)}else P=S.uniforms;return P}function D(S,A){let P;for(let O=0,H=h.length;O<H;O++){let W=h[O];if(W.cacheKey===A){P=W,++P.usedTimes;break}}return P===void 0&&(P=new d2(n,A,S,r),h.push(P)),P}function R(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:C}}function p2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function m2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Md(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,p,g,E,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=E,f.group=m),e++,f}function a(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||m2),i.length>1&&i.sort(u||Ad),s.length>1&&s.sort(u||Ad)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function g2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Md,n.set(i,[o])):s>=r.length?(o=new Md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function E2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new de};break;case"SpotLight":t={position:new I,direction:new I,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function y2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var v2=0;function _2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function A2(n){let e=new E2,t=y2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new bt,o=new bt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,v=0,_=0,y=0,D=0,R=0,T=0;c.sort(_2);for(let S=0,A=c.length;S<A;S++){let P=c[S],O=P.color,H=P.intensity,W=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*H,d+=O.g*H,u+=O.b*H;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],H);T++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let re=P.shadow,q=t.get(P);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Y,p++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(H),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[E]=Y;let re=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,re.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[E]=re.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,i.spotShadow[E]=q,i.spotShadowMap[E]=j,y++}E++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(O).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let re=P.shadow,q=t.get(P);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,q.shadowCameraNear=re.camera.near,q.shadowCameraFar=re.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=Y,g++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(H),Y.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[f]=Y,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==E||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==D||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=E,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=D,C.numLightProbes=T,i.version=v2++)}function l(c,h){let d=0,u=0,p=0,g=0,E=0,m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let _=c[f];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Sd(n){let e=new A2(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function M2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sd(n),e.set(s,[a])):r>=o.length?(a=new Sd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ki=class extends Ai{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cc=class extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},S2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b2=`uniform sampler2D shadow_pass;
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
}`;function T2(n,e,t){let i=new Dr,s=new ce,r=new ce,o=new St,a=new ki({depthPacking:sr}),l=new cc,c={},h=t.maxTextureSize,d={[Bi]:Qt,[Qt]:Bi,[_t]:_t},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:S2,fragmentShader:b2}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new k(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let f=this.type;this.render=function(R,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ti),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=f!==pi&&this.type===pi,W=f===pi&&this.type!==pi;for(let j=0,Y=R.length;j<Y;j++){let re=R[j],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let fe=q.getFrameExtents();if(s.multiply(fe),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,q.mapSize.y=r.y)),q.map===null||H===!0||W===!0){let Le=this.type!==pi?{minFilter:wn,magFilter:wn}:{};q.map!==null&&q.map.dispose(),q.map=new jt(s.x,s.y,Le),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let _e=q.getViewportCount();for(let Le=0;Le<_e;Le++){let et=q.getViewport(Le);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),O.viewport(o),q.updateMatrices(re,Le),i=q.getFrustum(),y(T,C,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===pi&&v(q,C),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(R,T){let C=e.update(E);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jt(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,C,u,E,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,C,p,E,null)}function _(R,T,C,S){let A=null,P=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)A=P;else if(A=C.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=A.uuid,H=T.uuid,W=c[O];W===void 0&&(W={},c[O]=W);let j=W[H];j===void 0&&(j=A.clone(),W[H]=j,T.addEventListener("dispose",D)),A=j}if(A.visible=T.visible,A.wireframe=T.wireframe,S===pi?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:d[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,C.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=n.properties.get(A);O.light=C}return A}function y(R,T,C,S,A){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===pi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let H=e.update(R),W=R.material;if(Array.isArray(W)){let j=H.groups;for(let Y=0,re=j.length;Y<re;Y++){let q=j[Y],fe=W[q.materialIndex];if(fe&&fe.visible){let _e=_(R,fe,S,A);R.onBeforeShadow(n,R,T,C,H,_e,q),n.renderBufferDirect(C,null,H,_e,R,q),R.onAfterShadow(n,R,T,C,H,_e,q)}}}else if(W.visible){let j=_(R,W,S,A);R.onBeforeShadow(n,R,T,C,H,j,null),n.renderBufferDirect(C,null,H,j,R,null),R.onAfterShadow(n,R,T,C,H,j,null)}}let O=R.children;for(let H=0,W=O.length;H<W;H++)y(O[H],T,C,S,A)}function D(R){R.target.removeEventListener("dispose",D);for(let C in c){let S=c[C],A=R.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var x2={[pl]:ml,[gl]:vl,[El]:_l,[Vs]:yl,[ml]:pl,[vl]:gl,[_l]:El,[yl]:Vs};function w2(n,e){function t(){let L=!1,ue=new St,X=null,K=new St(0,0,0,0);return{setMask:function(ye){X!==ye&&!L&&(n.colorMask(ye,ye,ye,ye),X=ye)},setLocked:function(ye){L=ye},setClear:function(ye,ge,Ye,zt,on){on===!0&&(ye*=zt,ge*=zt,Ye*=zt),ue.set(ye,ge,Ye,zt),K.equals(ue)===!1&&(n.clearColor(ye,ge,Ye,zt),K.copy(ue))},reset:function(){L=!1,X=null,K.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,X=null,K=null,ye=null;return{setReversed:function(ge){if(ue!==ge){let Ye=e.get("EXT_clip_control");ue?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let zt=ye;ye=null,this.setClear(zt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?pe(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(ge){X!==ge&&!L&&(n.depthMask(ge),X=ge)},setFunc:function(ge){if(ue&&(ge=x2[ge]),K!==ge){switch(ge){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case yl:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ge}},setLocked:function(ge){L=ge},setClear:function(ge){ye!==ge&&(ue&&(ge=1-ge),n.clearDepth(ge),ye=ge)},reset:function(){L=!1,X=null,K=null,ye=null,ue=!1}}}function s(){let L=!1,ue=null,X=null,K=null,ye=null,ge=null,Ye=null,zt=null,on=null;return{setTest:function(vt){L||(vt?pe(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(vt){ue!==vt&&!L&&(n.stencilMask(vt),ue=vt)},setFunc:function(vt,Hn,ai){(X!==vt||K!==Hn||ye!==ai)&&(n.stencilFunc(vt,Hn,ai),X=vt,K=Hn,ye=ai)},setOp:function(vt,Hn,ai){(ge!==vt||Ye!==Hn||zt!==ai)&&(n.stencilOp(vt,Hn,ai),ge=vt,Ye=Hn,zt=ai)},setLocked:function(vt){L=vt},setClear:function(vt){on!==vt&&(n.clearStencil(vt),on=vt)},reset:function(){L=!1,ue=null,X=null,K=null,ye=null,ge=null,Ye=null,zt=null,on=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,D=null,R=null,T=new de(0,0,0),C=0,S=!1,A=null,P=null,O=null,H=null,W=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,re=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=re>=2);let fe=null,_e={},Le=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),Rt=new St().fromArray(Le),J=new St().fromArray(et);function oe(L,ue,X,K){let ye=new Uint8Array(4),ge=n.createTexture();n.bindTexture(L,ge),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<X;Ye++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ue+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ge}let Ce={};Ce[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(Vs),rt(!1),ot(wh),pe(n.CULL_FACE),B(ti);function pe(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function ke(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Xe(L,ue){return d[L]!==ue?(n.bindFramebuffer(L,ue),d[L]=ue,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function tt(L,ue){let X=p,K=!1;if(L){X=u.get(ue),X===void 0&&(X=[],u.set(ue,X));let ye=L.textures;if(X.length!==ye.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ye=ye.length;ge<Ye;ge++)X[ge]=n.COLOR_ATTACHMENT0+ge;X.length=ye.length,K=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,K=!0);K&&n.drawBuffers(X)}function Ot(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let ct={[is]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[rf]:n.FUNC_REVERSE_SUBTRACT};ct[of]=n.MIN,ct[af]=n.MAX;let Gt={[lf]:n.ZERO,[cf]:n.ONE,[hf]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[gf]:n.SRC_ALPHA_SATURATE,[pf]:n.DST_COLOR,[uf]:n.DST_ALPHA,[df]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[mf]:n.ONE_MINUS_DST_COLOR,[ff]:n.ONE_MINUS_DST_ALPHA,[Ef]:n.CONSTANT_COLOR,[yf]:n.ONE_MINUS_CONSTANT_COLOR,[vf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function B(L,ue,X,K,ye,ge,Ye,zt,on,vt){if(L===ti){E===!0&&(ke(n.BLEND),E=!1);return}if(E===!1&&(pe(n.BLEND),E=!0),L!==nf){if(L!==m||vt!==S){if((f!==is||y!==is)&&(n.blendEquation(n.FUNC_ADD),f=is,y=is),vt)switch(L){case Ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gn:n.blendFunc(n.ONE,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ch:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,D=null,R=null,T.set(0,0,0),C=0,m=L,S=vt}return}ye=ye||ue,ge=ge||X,Ye=Ye||K,(ue!==f||ye!==y)&&(n.blendEquationSeparate(ct[ue],ct[ye]),f=ue,y=ye),(X!==v||K!==_||ge!==D||Ye!==R)&&(n.blendFuncSeparate(Gt[X],Gt[K],Gt[ge],Gt[Ye]),v=X,_=K,D=ge,R=Ye),(zt.equals(T)===!1||on!==C)&&(n.blendColor(zt.r,zt.g,zt.b,on),T.copy(zt),C=on),m=L,S=!1}function In(L,ue){L.side===_t?ke(n.CULL_FACE):pe(n.CULL_FACE);let X=L.side===Qt;ue&&(X=!X),rt(X),L.blending===Ui&&L.transparent===!1?B(ti):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function rt(L){A!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),A=L)}function ot(L){L!==ef?(pe(n.CULL_FACE),L!==P&&(L===wh?n.cullFace(n.BACK):L===tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),P=L}function Oe(L){L!==O&&(Y&&n.lineWidth(L),O=L)}function Pt(L,ue,X){L?(pe(n.POLYGON_OFFSET_FILL),(H!==ue||W!==X)&&(n.polygonOffset(ue,X),H=ue,W=X)):ke(n.POLYGON_OFFSET_FILL)}function Be(L){L?pe(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function w(L){L===void 0&&(L=n.TEXTURE0+j-1),fe!==L&&(n.activeTexture(L),fe=L)}function M(L,ue,X){X===void 0&&(fe===null?X=n.TEXTURE0+j-1:X=fe);let K=_e[X];K===void 0&&(K={type:void 0,texture:void 0},_e[X]=K),(K.type!==L||K.texture!==ue)&&(fe!==X&&(n.activeTexture(X),fe=X),n.bindTexture(L,ue||Ce[L]),K.type=L,K.texture=ue)}function z(){let L=_e[fe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(L){Rt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Rt.copy(L))}function Se(L){J.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function at(L,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let K=X.get(L);K===void 0&&(K=n.getUniformBlockIndex(ue,L.name),X.set(L,K))}function Je(L,ue){let K=c.get(ue).get(L);l.get(ue)!==K&&(n.uniformBlockBinding(ue,K,L.__bindingPointIndex),l.set(ue,K))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,_e={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,D=null,R=null,T=new de(0,0,0),C=0,S=!1,A=null,P=null,O=null,H=null,W=null,Rt.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:ke,bindFramebuffer:Xe,drawBuffers:tt,useProgram:Ot,setBlending:B,setMaterial:In,setFlipSided:rt,setCullFace:ot,setLineWidth:Oe,setPolygonOffset:Pt,setScissorTest:Be,activeTexture:w,bindTexture:M,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Me,texImage3D:ze,updateUBOMapping:at,uniformBlockBinding:Je,texStorage2D:ht,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Fe,compressedTexSubImage2D:me,compressedTexSubImage3D:Ae,scissor:Ve,viewport:Se,reset:Ct}}function bd(n,e,t,i){let s=R2(i);switch(t){case Gd:return n*e;case Wd:return n*e;case Xd:return n*e*2;case Gc:return n*e/s.components*s.byteLength;case Vc:return n*e/s.components*s.byteLength;case qd:return n*e*2/s.components*s.byteLength;case Wc:return n*e*2/s.components*s.byteLength;case Vd:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case Xc:return n*e*4/s.components*s.byteLength;case To:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wo:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:case wl:return Math.max(n,16)*Math.max(e,8)/4;case bl:case xl:return Math.max(n,8)*Math.max(e,8)/2;case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case Xl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yd:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R2(n){switch(n){case yi:case Hd:return{byteLength:1,components:1};case Ir:case zd:case vn:return{byteLength:2,components:1};case zc:case kc:return{byteLength:2,components:4};case vi:case Hc:case ei:return{byteLength:4,components:1};case kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function C2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):Do("canvas")}function E(w,M,z){let Q=1,ee=Be(w);if((ee.width>z||ee.height>z)&&(Q=z/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let $=Math.floor(Q*ee.width),Fe=Math.floor(Q*ee.height);d===void 0&&(d=g($,Fe));let me=M?g($,Fe):d;return me.width=$,me.height=Fe,me.getContext("2d").drawImage(w,0,0,$,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Fe+")."),me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(w,M,z,Q,ee=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=M;if(M===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),M===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){let Fe=ee?jo:dt.getTransfer(Q);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=Fe===At?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(w,M){let z;return w?M===null||M===vi||M===qs?z=n.DEPTH24_STENCIL8:M===ei?z=n.DEPTH32F_STENCIL8:M===Ir&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vi||M===qs?z=n.DEPTH_COMPONENT24:M===ei?z=n.DEPTH_COMPONENT32F:M===Ir&&(z=n.DEPTH_COMPONENT16),z}function D(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){let M=w.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M)}function T(w){let M=w.target;M.removeEventListener("dispose",T),A(M)}function C(w){let M=i.get(w);if(M.__webglInit===void 0)return;let z=w.source,Q=u.get(z);if(Q){let ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(w),Object.keys(Q).length===0&&u.delete(z)}i.remove(w)}function S(w){let M=i.get(w);n.deleteTexture(M.__webglTexture);let z=w.source,Q=u.get(z);delete Q[M.__cacheKey],o.memory.textures--}function A(w){let M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=w.textures;for(let Q=0,ee=z.length;Q<ee;Q++){let $=i.get(z[Q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(w)}let P=0;function O(){P=0}function H(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function W(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function j(w,M){let z=i.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,w,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Y(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){J(z,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function re(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){J(z,w,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function q(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){oe(z,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}let fe={[qt]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},_e={[wn]:n.NEAREST,[Ff]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[jn]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},Le={[Df]:n.NEVER,[Hf]:n.ALWAYS,[Lf]:n.LESS,[$d]:n.LEQUAL,[Uf]:n.EQUAL,[Of]:n.GEQUAL,[Nf]:n.GREATER,[Bf]:n.NOTEQUAL};function et(w,M){if(M.type===ei&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===Fa||M.magFilter===$r||M.magFilter===os||M.minFilter===jn||M.minFilter===Fa||M.minFilter===$r||M.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,fe[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,fe[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,fe[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,_e[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==$r&&M.minFilter!==os||M.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Rt(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let Q=M.source,ee=u.get(Q);ee===void 0&&(ee={},u.set(Q,ee));let $=W(M);if($!==w.__cacheKey){ee[$]===void 0&&(ee[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[$].usedTimes++;let Fe=ee[w.__cacheKey];Fe!==void 0&&(ee[w.__cacheKey].usedTimes--,Fe.usedTimes===0&&S(M)),w.__cacheKey=$,w.__webglTexture=ee[$].texture}return z}function J(w,M,z){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);let ee=Rt(w,M),$=M.source;t.bindTexture(Q,w.__webglTexture,n.TEXTURE0+z);let Fe=i.get($);if($.version!==Fe.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let me=dt.getPrimaries(dt.workingColorSpace),Ae=M.colorSpace===Di?null:dt.getPrimaries(M.colorSpace),ht=M.colorSpace===Di||me===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let ie=E(M.image,!1,s.maxTextureSize);ie=Pt(M,ie);let Me=r.convert(M.format,M.colorSpace),ze=r.convert(M.type),Ve=_(M.internalFormat,Me,ze,M.colorSpace,M.isVideoTexture);et(Q,M);let Se,at=M.mipmaps,Je=M.isVideoTexture!==!0,Ct=Fe.__version===void 0||ee===!0,L=$.dataReady,ue=D(M,ie);if(M.isDepthTexture)Ve=y(M.format===Ys,M.type),Ct&&(Je?t.texStorage2D(n.TEXTURE_2D,1,Ve,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ie.width,ie.height,0,Me,ze,null));else if(M.isDataTexture)if(at.length>0){Je&&Ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ve,at[0].width,at[0].height);for(let X=0,K=at.length;X<K;X++)Se=at[X],Je?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Me,ze,Se.data):t.texImage2D(n.TEXTURE_2D,X,Ve,Se.width,Se.height,0,Me,ze,Se.data);M.generateMipmaps=!1}else Je?(Ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ve,ie.width,ie.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Me,ze,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,ie.width,ie.height,0,Me,ze,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ve,at[0].width,at[0].height,ie.depth);for(let X=0,K=at.length;X<K;X++)if(Se=at[X],M.format!==Wn)if(Me!==null)if(Je){if(L)if(M.layerUpdates.size>0){let ye=bd(Se.width,Se.height,M.format,M.type);for(let ge of M.layerUpdates){let Ye=Se.data.subarray(ge*ye/Se.data.BYTES_PER_ELEMENT,(ge+1)*ye/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ge,Se.width,Se.height,1,Me,Ye)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,ie.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ve,Se.width,Se.height,ie.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,ie.depth,Me,ze,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ve,Se.width,Se.height,ie.depth,0,Me,ze,Se.data)}else{Je&&Ct&&t.texStorage2D(n.TEXTURE_2D,ue,Ve,at[0].width,at[0].height);for(let X=0,K=at.length;X<K;X++)Se=at[X],M.format!==Wn?Me!==null?Je?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Me,ze,Se.data):t.texImage2D(n.TEXTURE_2D,X,Ve,Se.width,Se.height,0,Me,ze,Se.data)}else if(M.isDataArrayTexture)if(Je){if(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ve,ie.width,ie.height,ie.depth),L)if(M.layerUpdates.size>0){let X=bd(ie.width,ie.height,M.format,M.type);for(let K of M.layerUpdates){let ye=ie.data.subarray(K*X/ie.data.BYTES_PER_ELEMENT,(K+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,Me,ze,ye)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,ze,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ie.width,ie.height,ie.depth,0,Me,ze,ie.data);else if(M.isData3DTexture)Je?(Ct&&t.texStorage3D(n.TEXTURE_3D,ue,Ve,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,ze,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ie.width,ie.height,ie.depth,0,Me,ze,ie.data);else if(M.isFramebufferTexture){if(Ct)if(Je)t.texStorage2D(n.TEXTURE_2D,ue,Ve,ie.width,ie.height);else{let X=ie.width,K=ie.height;for(let ye=0;ye<ue;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ve,X,K,0,Me,ze,null),X>>=1,K>>=1}}else if(at.length>0){if(Je&&Ct){let X=Be(at[0]);t.texStorage2D(n.TEXTURE_2D,ue,Ve,X.width,X.height)}for(let X=0,K=at.length;X<K;X++)Se=at[X],Je?L&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Me,ze,Se):t.texImage2D(n.TEXTURE_2D,X,Ve,Me,ze,Se);M.generateMipmaps=!1}else if(Je){if(Ct){let X=Be(ie);t.texStorage2D(n.TEXTURE_2D,ue,Ve,X.width,X.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,ze,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Me,ze,ie);m(M)&&f(Q),Fe.__version=$.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function oe(w,M,z){if(M.image.length!==6)return;let Q=Rt(w,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let $=i.get(ee);if(ee.version!==$.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);let Fe=dt.getPrimaries(dt.workingColorSpace),me=M.colorSpace===Di?null:dt.getPrimaries(M.colorSpace),Ae=M.colorSpace===Di||Fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ht=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let K=0;K<6;K++)!ht&&!ie?Me[K]=E(M.image[K],!0,s.maxCubemapSize):Me[K]=ie?M.image[K].image:M.image[K],Me[K]=Pt(M,Me[K]);let ze=Me[0],Ve=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),at=_(M.internalFormat,Ve,Se,M.colorSpace),Je=M.isVideoTexture!==!0,Ct=$.__version===void 0||Q===!0,L=ee.dataReady,ue=D(M,ze);et(n.TEXTURE_CUBE_MAP,M);let X;if(ht){Je&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,at,ze.width,ze.height);for(let K=0;K<6;K++){X=Me[K].mipmaps;for(let ye=0;ye<X.length;ye++){let ge=X[ye];M.format!==Wn?Ve!==null?Je?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,ge.width,ge.height,Ve,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,at,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,ge.width,ge.height,Ve,Se,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,at,ge.width,ge.height,0,Ve,Se,ge.data)}}}else{if(X=M.mipmaps,Je&&Ct){X.length>0&&ue++;let K=Be(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,at,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me[K].width,Me[K].height,Ve,Se,Me[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,at,Me[K].width,Me[K].height,0,Ve,Se,Me[K].data);for(let ye=0;ye<X.length;ye++){let Ye=X[ye].image[K].image;Je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Ye.width,Ye.height,Ve,Se,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,at,Ye.width,Ye.height,0,Ve,Se,Ye.data)}}else{Je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ve,Se,Me[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,at,Ve,Se,Me[K]);for(let ye=0;ye<X.length;ye++){let ge=X[ye];Je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Ve,Se,ge.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,at,Ve,Se,ge.image[K])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),$.__version=ee.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ce(w,M,z,Q,ee,$){let Fe=r.convert(z.format,z.colorSpace),me=r.convert(z.type),Ae=_(z.internalFormat,Fe,me,z.colorSpace),ht=i.get(M),ie=i.get(z);if(ie.__renderTarget=M,!ht.__hasExternalTextures){let Me=Math.max(1,M.width>>$),ze=Math.max(1,M.height>>$);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,Ae,Me,ze,M.depth,0,Fe,me,null):t.texImage2D(ee,$,Ae,Me,ze,0,Fe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,ie.__webglTexture,0,rt(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,ie.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(w,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){let Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,$=y(M.stencilBuffer,ee),Fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=rt(M);ot(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,$,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,w)}else{let Q=M.textures;for(let ee=0;ee<Q.length;ee++){let $=Q[ee],Fe=r.convert($.format,$.colorSpace),me=r.convert($.type),Ae=_($.internalFormat,Fe,me,$.colorSpace),ht=rt(M);z&&ot(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Ae,M.width,M.height):ot(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ke(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let ee=Q.__webglTexture,$=rt(M);if(M.depthTexture.format===zs)ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ys)ot(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Xe(w){let M=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let Q=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Q}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),pe(M.__webglDepthbuffer[Q],w,!1);else{let ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),pe(M.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(w,M,z){let Q=i.get(w);M!==void 0&&Ce(Q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Xe(w)}function Ot(w){let M=w.texture,z=i.get(w),Q=i.get(M);w.addEventListener("dispose",T);let ee=w.textures,$=w.isWebGLCubeRenderTarget===!0,Fe=ee.length>1;if(Fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)z.__webglFramebuffer[me][Ae]=n.createFramebuffer()}else z.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)z.__webglFramebuffer[me]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let me=0,Ae=ee.length;me<Ae;me++){let ht=i.get(ee[me]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ot(w)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<ee.length;me++){let Ae=ee[me];z.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[me]);let ht=r.convert(Ae.format,Ae.colorSpace),ie=r.convert(Ae.type),Me=_(Ae.internalFormat,ht,ie,Ae.colorSpace,w.isXRRenderTarget===!0),ze=rt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Me,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,z.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),et(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Ce(z.__webglFramebuffer[me][Ae],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae);else Ce(z.__webglFramebuffer[me],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let me=0,Ae=ee.length;me<Ae;me++){let ht=ee[me],ie=i.get(ht);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),et(n.TEXTURE_2D,ht),Ce(z.__webglFramebuffer,w,ht,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(ht)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),et(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Ce(z.__webglFramebuffer[Ae],w,M,n.COLOR_ATTACHMENT0,me,Ae);else Ce(z.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,me,0);m(M)&&f(me),t.unbindTexture()}w.depthBuffer&&Xe(w)}function ct(w){let M=w.textures;for(let z=0,Q=M.length;z<Q;z++){let ee=M[z];if(m(ee)){let $=v(w),Fe=i.get(ee).__webglTexture;t.bindTexture($,Fe),f($),t.unbindTexture()}}}let Gt=[],B=[];function In(w){if(w.samples>0){if(ot(w)===!1){let M=w.textures,z=w.width,Q=w.height,ee=n.COLOR_BUFFER_BIT,$=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(w),me=M.length>1;if(me)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ae]);let ht=i.get(M[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ht,0)}n.blitFramebuffer(0,0,z,Q,0,0,z,Q,ee,n.NEAREST),l===!0&&(Gt.length=0,B.length=0,Gt.push(n.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Gt.push($),B.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ae]);let ht=i.get(M[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ht,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function rt(w){return Math.min(s.maxSamples,w.samples)}function ot(w){let M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Oe(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Pt(w,M){let z=w.colorSpace,Q=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Gi&&z!==Di&&(dt.getTransfer(z)===At?(Q!==Wn||ee!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=q,this.rebindTextures=tt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=In,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ot}function F2(n,e){function t(i,s=Di){let r,o=dt.getTransfer(s);if(i===yi)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hd)return n.BYTE;if(i===zd)return n.SHORT;if(i===Ir)return n.UNSIGNED_SHORT;if(i===Hc)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===vn)return n.HALF_FLOAT;if(i===Gd)return n.ALPHA;if(i===Vd)return n.RGB;if(i===Wn)return n.RGBA;if(i===Wd)return n.LUMINANCE;if(i===Xd)return n.LUMINANCE_ALPHA;if(i===zs)return n.DEPTH_COMPONENT;if(i===Ys)return n.DEPTH_STENCIL;if(i===Gc)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===qd)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===Xc)return n.RGBA_INTEGER;if(i===To||i===xo||i===wo||i===Ro)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===Tl||i===xl||i===wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Cl||i===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rl||i===Cl)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Il||i===Dl||i===Ll||i===Ul||i===Nl||i===Bl||i===Ol||i===Hl||i===zl||i===kl||i===Gl||i===Vl||i===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ll)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Xl||i===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Co)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yd||i===Yl||i===Zl||i===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var hc=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},P2={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},I2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D2=`
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

}`,dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new En,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new en({vertexShader:I2,fragmentShader:D2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new k(new be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uc=class extends Oi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,E=new dc,m=t.getContextAttributes(),f=null,v=null,_=[],y=[],D=new ce,R=null,T=new sn;T.viewport=new St;let C=new sn;C.viewport=new St;let S=[T,C],A=new hc,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=_[J];return oe===void 0&&(oe=new Cr,_[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=_[J];return oe===void 0&&(oe=new Cr,_[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=_[J];return oe===void 0&&(oe=new Cr,_[J]=oe),oe.getHandSpace()};function H(J){let oe=y.indexOf(J.inputSource);if(oe===-1)return;let Ce=_[oe];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,c||o),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let J=0;J<_.length;J++){let oe=y[J];oe!==null&&(y[J]=null,_[J].disconnect(oe))}P=null,O=null,E.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,v=null,Rt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new jt(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,Ce=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Ys:zs,Ce=m.stencil?qs:vi);let ke={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new jt(u.textureWidth,u.textureHeight,{format:Wn,type:yi,depthTexture:new Js(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function j(J){for(let oe=0;oe<J.removed.length;oe++){let Ce=J.removed[oe],pe=y.indexOf(Ce);pe>=0&&(y[pe]=null,_[pe].disconnect(Ce))}for(let oe=0;oe<J.added.length;oe++){let Ce=J.added[oe],pe=y.indexOf(Ce);if(pe===-1){for(let Xe=0;Xe<_.length;Xe++)if(Xe>=y.length){y.push(Ce),pe=Xe;break}else if(y[Xe]===null){y[Xe]=Ce,pe=Xe;break}if(pe===-1)break}let ke=_[pe];ke&&ke.connect(Ce)}}let Y=new I,re=new I;function q(J,oe,Ce){Y.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(Ce.matrixWorld);let pe=Y.distanceTo(re),ke=oe.projectionMatrix.elements,Xe=Ce.projectionMatrix.elements,tt=ke[14]/(ke[10]-1),Ot=ke[14]/(ke[10]+1),ct=(ke[9]+1)/ke[5],Gt=(ke[9]-1)/ke[5],B=(ke[8]-1)/ke[0],In=(Xe[8]+1)/Xe[0],rt=tt*B,ot=tt*In,Oe=pe/(-B+In),Pt=Oe*-B;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(Oe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ke[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Be=tt+Oe,w=Ot+Oe,M=rt-Pt,z=ot+(pe-Pt),Q=ct*Ot/w*Be,ee=Gt*Ot/w*Be;J.projectionMatrix.makePerspective(M,z,Q,ee,Be,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let oe=J.near,Ce=J.far;E.texture!==null&&(E.depthNear>0&&(oe=E.depthNear),E.depthFar>0&&(Ce=E.depthFar)),A.near=C.near=T.near=oe,A.far=C.far=T.far=Ce,(P!==A.near||O!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,O=A.far),T.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,A.layers.mask=T.layers.mask|C.layers.mask;let pe=J.parent,ke=A.cameras;fe(A,pe);for(let Xe=0;Xe<ke.length;Xe++)fe(ke[Xe],pe);ke.length===2?q(A,T,C):A.projectionMatrix.copy(T.projectionMatrix),_e(J,A,pe)};function _e(J,oe,Ce){Ce===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Io*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Le=null;function et(J,oe){if(h=oe.getViewerPose(c||o),g=oe,h!==null){let Ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let pe=!1;Ce.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let Xe=0;Xe<Ce.length;Xe++){let tt=Ce[Xe],Ot=null;if(p!==null)Ot=p.getViewport(tt);else{let Gt=d.getViewSubImage(u,tt);Ot=Gt.viewport,Xe===0&&(e.setRenderTargetTextures(v,Gt.colorTexture,u.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(v))}let ct=S[Xe];ct===void 0&&(ct=new sn,ct.layers.enable(Xe),ct.viewport=new St,S[Xe]=ct),ct.matrix.fromArray(tt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(tt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Xe===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(ct)}let ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){let Xe=d.getDepthInformation(Ce[0]);Xe&&Xe.isValid&&Xe.texture&&E.init(e,Xe,s.renderState)}}for(let Ce=0;Ce<_.length;Ce++){let pe=y[Ce],ke=_[Ce];pe!==null&&ke!==void 0&&ke.update(pe,oe,c||o)}Le&&Le(J,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Rt=new jd;Rt.setAnimationLoop(et),this.setAnimationLoop=function(J){Le=J},this.dispose=function(){}}},ts=new ii,L2=new bt;function U2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Kd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=e.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,ts.copy(y),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(ts)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=_.program;i.updateUBOMapping(v,D);let R=e.render.frame;r[v.id]!==R&&(u(v),r[v.id]=R)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),D=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,T=y.length;R<T;R++){let C=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,A=C.length;S<A;S++){let P=C[S];if(p(P,R,S,D)===!0){let O=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],W=0;for(let j=0;j<H.length;j++){let Y=H[j],re=E(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,O+W,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,y,D){let R=v.value,T=_+"_"+y;if(D[T]===void 0)return typeof R=="number"||typeof R=="boolean"?D[T]=R:D[T]=R.clone(),!0;{let C=D[T];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return D[T]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(v){let _=v.uniforms,y=0,D=16;for(let T=0,C=_.length;T<C;T++){let S=Array.isArray(_[T])?_[T]:[_[T]];for(let A=0,P=S.length;A<P;A++){let O=S[A],H=Array.isArray(O.value)?O.value:[O.value];for(let W=0,j=H.length;W<j;W++){let Y=H[W],re=E(Y),q=y%D,fe=q%re.boundary,_e=q+fe;y+=fe,_e!==0&&D-_e<re.storage&&(y+=D-_e),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=re.storage}}}let R=y%D;return R>0&&(y+=D-R),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Vo=class{constructor(e={}){let{canvas:t=kf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,f=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=ni,this.toneMappingExposure=1;let y=this,D=!1,R=0,T=0,C=null,S=-1,A=null,P=new St,O=new St,H=null,W=new de(0),j=0,Y=t.width,re=t.height,q=1,fe=null,_e=null,Le=new St(0,0,Y,re),et=new St(0,0,Y,re),Rt=!1,J=new Dr,oe=!1,Ce=!1,pe=new bt,ke=new bt,Xe=new I,tt=new St,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function Gt(){return C===null?q:1}let B=i;function In(b,U){return t.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){let U="webgl2";if(B=In(U,b),B===null)throw In(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let rt,ot,Oe,Pt,Be,w,M,z,Q,ee,$,Fe,me,Ae,ht,ie,Me,ze,Ve,Se,at,Je,Ct,L;function ue(){rt=new Km(B),rt.init(),Je=new F2(B,rt),ot=new qm(B,rt,e,Je),Oe=new w2(B,rt),ot.reverseDepthBuffer&&u&&Oe.buffers.depth.setReversed(!0),Pt=new t1(B),Be=new p2,w=new C2(B,rt,Oe,Be,ot,Je,Pt),M=new Zm(y),z=new Qm(y),Q=new lp(B),Ct=new Wm(B,Q),ee=new jm(B,Q,Pt,Ct),$=new i1(B,ee,Q,Pt),Ve=new n1(B,ot,w),ie=new Ym(Be),Fe=new f2(y,M,z,rt,ot,Ct,ie),me=new U2(y,Be),Ae=new g2,ht=new M2(rt),ze=new Vm(y,M,z,Oe,$,p,l),Me=new T2(y,$,ot),L=new N2(B,Pt,ot,Oe),Se=new Xm(B,rt,Pt),at=new e1(B,rt,Pt),Pt.programs=Fe.programs,y.capabilities=ot,y.extensions=rt,y.properties=Be,y.renderLists=Ae,y.shadowMap=Me,y.state=Oe,y.info=Pt}ue();let X=new uc(y,B);this.xr=X,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(Y,re,!1))},this.getSize=function(b){return b.set(Y,re)},this.setSize=function(b,U,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,re=U,t.width=Math.floor(b*q),t.height=Math.floor(U*q),G===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Y*q,re*q).floor()},this.setDrawingBufferSize=function(b,U,G){Y=b,re=U,q=G,t.width=Math.floor(b*G),t.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Le)},this.setViewport=function(b,U,G,V){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,U,G,V),Oe.viewport(P.copy(Le).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,U,G,V){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,U,G,V),Oe.scissor(O.copy(et).multiplyScalar(q).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){Oe.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(b=!0,U=!0,G=!0){let V=0;if(b){let N=!1;if(C!==null){let se=C.texture.format;N=se===Xc||se===Wc||se===Vc}if(N){let se=C.texture.type,Ee=se===yi||se===vi||se===Ir||se===qs||se===zc||se===kc,xe=ze.getClearColor(),we=ze.getClearAlpha(),We=xe.r,Ze=xe.g,Re=xe.b;Ee?(g[0]=We,g[1]=Ze,g[2]=Re,g[3]=we,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=We,E[1]=Ze,E[2]=Re,E[3]=we,B.clearBufferiv(B.COLOR,0,E))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ae.dispose(),ht.dispose(),Be.dispose(),M.dispose(),z.dispose(),$.dispose(),Ct.dispose(),L.dispose(),Fe.dispose(),X.dispose(),X.removeEventListener("sessionstart",vh),X.removeEventListener("sessionend",_h),$i.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let b=Pt.autoReset,U=Me.enabled,G=Me.autoUpdate,V=Me.needsUpdate,N=Me.type;ue(),Pt.autoReset=b,Me.enabled=U,Me.autoUpdate=G,Me.needsUpdate=V,Me.type=N}function ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ye(b){let U=b.target;U.removeEventListener("dispose",Ye),zt(U)}function zt(b){on(b),Be.remove(b)}function on(b){let U=Be.get(b).programs;U!==void 0&&(U.forEach(function(G){Fe.releaseProgram(G)}),b.isShaderMaterial&&Fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,V,N,se){U===null&&(U=Ot);let Ee=N.isMesh&&N.matrixWorld.determinant()<0,xe=Qu(b,U,G,V,N);Oe.setMaterial(V,Ee);let we=G.index,We=1;if(V.wireframe===!0){if(we=ee.getWireframeAttribute(G),we===void 0)return;We=2}let Ze=G.drawRange,Re=G.attributes.position,ut=Ze.start*We,Ft=(Ze.start+Ze.count)*We;se!==null&&(ut=Math.max(ut,se.start*We),Ft=Math.min(Ft,(se.start+se.count)*We)),we!==null?(ut=Math.max(ut,0),Ft=Math.min(Ft,we.count)):Re!=null&&(ut=Math.max(ut,0),Ft=Math.min(Ft,Re.count));let It=Ft-ut;if(It<0||It===1/0)return;Ct.setup(N,V,xe,G,we);let mn,gt=Se;if(we!==null&&(mn=Q.get(we),gt=at,gt.setIndex(mn)),N.isMesh)V.wireframe===!0?(Oe.setLineWidth(V.wireframeLinewidth*Gt()),gt.setMode(B.LINES)):gt.setMode(B.TRIANGLES);else if(N.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),Oe.setLineWidth(Pe*Gt()),N.isLineSegments?gt.setMode(B.LINES):N.isLineLoop?gt.setMode(B.LINE_LOOP):gt.setMode(B.LINE_STRIP)}else N.isPoints?gt.setMode(B.POINTS):N.isSprite&&gt.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)gt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))gt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Pe=N._multiDrawStarts,li=N._multiDrawCounts,Et=N._multiDrawCount,zn=we?Q.get(we).bytesPerElement:1,vs=Be.get(V).currentProgram.getUniforms();for(let bn=0;bn<Et;bn++)vs.setValue(B,"_gl_DrawID",bn),gt.render(Pe[bn]/zn,li[bn])}else if(N.isInstancedMesh)gt.renderInstances(ut,It,N.count);else if(G.isInstancedBufferGeometry){let Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,li=Math.min(G.instanceCount,Pe);gt.renderInstances(ut,It,li)}else gt.render(ut,It)};function vt(b,U,G){b.transparent===!0&&b.side===_t&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,Zr(b,U,G),b.side=Bi,b.needsUpdate=!0,Zr(b,U,G),b.side=_t):Zr(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),f=ht.get(G),f.init(U),_.push(f),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==G&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let Ee=0;Ee<se.length;Ee++){let xe=se[Ee];vt(xe,G,N),V.add(xe)}else vt(se,G,N),V.add(se)}),_.pop(),f=null,V},this.compileAsync=function(b,U,G=null){let V=this.compile(b,U,G);return new Promise(N=>{function se(){if(V.forEach(function(Ee){Be.get(Ee).currentProgram.isReady()&&V.delete(Ee)}),V.size===0){N(b);return}setTimeout(se,10)}rt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Hn=null;function ai(b){Hn&&Hn(b)}function vh(){$i.stop()}function _h(){$i.start()}let $i=new jd;$i.setAnimationLoop(ai),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(b){Hn=b,X.setAnimationLoop(b),b===null?$i.stop():$i.start()},X.addEventListener("sessionstart",vh),X.addEventListener("sessionend",_h),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,C),f=ht.get(b,_.length),f.init(U),_.push(f),ke.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(ke),Ce=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,Ce),m=Ae.get(b,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){let se=y.xr.getDepthSensingMesh();se!==null&&Ca(se,U,-1/0,y.sortObjects)}Ca(b,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,_e),ct=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ct&&ze.addToRenderList(m,b),this.info.render.frame++,oe===!0&&ie.beginShadows();let G=f.state.shadowsArray;Me.render(G,b,U),oe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let se=U.cameras;if(N.length>0)for(let Ee=0,xe=se.length;Ee<xe;Ee++){let we=se[Ee];Mh(V,N,b,we)}ct&&ze.render(b);for(let Ee=0,xe=se.length;Ee<xe;Ee++){let we=se[Ee];Ah(m,b,we,we.viewport)}}else N.length>0&&Mh(V,N,b,U),ct&&ze.render(b),Ah(m,b,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(y,b,U),Ct.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(f=_[_.length-1],oe===!0&&ie.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ca(b,U,G,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){V&&tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ke);let Ee=$.update(b),xe=b.material;xe.visible&&m.push(b,Ee,xe,G,tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){let Ee=$.update(b),xe=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),tt.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),tt.copy(Ee.boundingSphere.center)),tt.applyMatrix4(b.matrixWorld).applyMatrix4(ke)),Array.isArray(xe)){let we=Ee.groups;for(let We=0,Ze=we.length;We<Ze;We++){let Re=we[We],ut=xe[Re.materialIndex];ut&&ut.visible&&m.push(b,Ee,ut,G,tt.z,Re)}}else xe.visible&&m.push(b,Ee,xe,G,tt.z,null)}}let se=b.children;for(let Ee=0,xe=se.length;Ee<xe;Ee++)Ca(se[Ee],U,G,V)}function Ah(b,U,G,V){let N=b.opaque,se=b.transmissive,Ee=b.transparent;f.setupLightsView(G),oe===!0&&ie.setGlobalState(y.clippingPlanes,G),V&&Oe.viewport(P.copy(V)),N.length>0&&Yr(N,U,G),se.length>0&&Yr(se,U,G),Ee.length>0&&Yr(Ee,U,G),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Mh(b,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new jt(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?vn:yi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let se=f.state.transmissionRenderTarget[V.id],Ee=V.viewport||P;se.setSize(Ee.z,Ee.w);let xe=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(W),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),ct&&ze.render(G);let we=y.toneMapping;y.toneMapping=ni;let We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),oe===!0&&ie.setGlobalState(y.clippingPlanes,V),Yr(b,G,V),w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Re=0,ut=U.length;Re<ut;Re++){let Ft=U[Re],It=Ft.object,mn=Ft.geometry,gt=Ft.material,Pe=Ft.group;if(gt.side===_t&&It.layers.test(V.layers)){let li=gt.side;gt.side=Qt,gt.needsUpdate=!0,Sh(It,G,V,mn,gt,Pe),gt.side=li,gt.needsUpdate=!0,Ze=!0}}Ze===!0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se))}y.setRenderTarget(xe),y.setClearColor(W,j),We!==void 0&&(V.viewport=We),y.toneMapping=we}function Yr(b,U,G){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,se=b.length;N<se;N++){let Ee=b[N],xe=Ee.object,we=Ee.geometry,We=V===null?Ee.material:V,Ze=Ee.group;xe.layers.test(G.layers)&&Sh(xe,U,G,we,We,Ze)}}function Sh(b,U,G,V,N,se){b.onBeforeRender(y,U,G,V,N,se),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,U,G,V,b,se),N.transparent===!0&&N.side===_t&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,y.renderBufferDirect(G,U,V,N,b,se),N.side=Bi,N.needsUpdate=!0,y.renderBufferDirect(G,U,V,N,b,se),N.side=_t):y.renderBufferDirect(G,U,V,N,b,se),b.onAfterRender(y,U,G,V,N,se)}function Zr(b,U,G){U.isScene!==!0&&(U=Ot);let V=Be.get(b),N=f.state.lights,se=f.state.shadowsArray,Ee=N.state.version,xe=Fe.getParameters(b,N.state,se,U,G),we=Fe.getProgramCacheKey(xe),We=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?z:M).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",Ye),We=new Map,V.programs=We);let Ze=We.get(we);if(Ze!==void 0){if(V.currentProgram===Ze&&V.lightsStateVersion===Ee)return Th(b,xe),Ze}else xe.uniforms=Fe.getUniforms(b),b.onBeforeCompile(xe,y),Ze=Fe.acquireProgram(xe,we),We.set(we,Ze),V.uniforms=xe.uniforms;let Re=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=ie.uniform),Th(b,xe),V.needsLights=ju(b),V.lightsStateVersion=Ee,V.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ze,V.uniformsList=null,Ze}function bh(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Gs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Th(b,U){let G=Be.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Qu(b,U,G,V,N){U.isScene!==!0&&(U=Ot),w.resetTextureUnits();let se=U.fog,Ee=V.isMeshStandardMaterial?U.environment:null,xe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gi,we=(V.isMeshStandardMaterial?z:M).get(V.envMap||Ee),We=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ze=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!G.morphAttributes.position,ut=!!G.morphAttributes.normal,Ft=!!G.morphAttributes.color,It=ni;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(It=y.toneMapping);let mn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,gt=mn!==void 0?mn.length:0,Pe=Be.get(V),li=f.state.lights;if(oe===!0&&(Ce===!0||b!==A)){let Dn=b===A&&V.id===S;ie.setState(V,b,Dn)}let Et=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==li.state.version||Pe.outputColorSpace!==xe||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==we||V.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==We||Pe.vertexTangents!==Ze||Pe.morphTargets!==Re||Pe.morphNormals!==ut||Pe.morphColors!==Ft||Pe.toneMapping!==It||Pe.morphTargetsCount!==gt)&&(Et=!0):(Et=!0,Pe.__version=V.version);let zn=Pe.currentProgram;Et===!0&&(zn=Zr(V,U,N));let vs=!1,bn=!1,mr=!1,Dt=zn.getUniforms(),Jn=Pe.uniforms;if(Oe.useProgram(zn.program)&&(vs=!0,bn=!0,mr=!0),V.id!==S&&(S=V.id,bn=!0),vs||A!==b){Oe.buffers.depth.getReversed()?(pe.copy(b.projectionMatrix),Vf(pe),Wf(pe),Dt.setValue(B,"projectionMatrix",pe)):Dt.setValue(B,"projectionMatrix",b.projectionMatrix),Dt.setValue(B,"viewMatrix",b.matrixWorldInverse);let Ti=Dt.map.cameraPosition;Ti!==void 0&&Ti.setValue(B,Xe.setFromMatrixPosition(b.matrixWorld)),ot.logarithmicDepthBuffer&&Dt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Dt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,bn=!0,mr=!0)}if(N.isSkinnedMesh){Dt.setOptional(B,N,"bindMatrix"),Dt.setOptional(B,N,"bindMatrixInverse");let Dn=N.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Dt.setValue(B,"boneTexture",Dn.boneTexture,w))}N.isBatchedMesh&&(Dt.setOptional(B,N,"batchingTexture"),Dt.setValue(B,"batchingTexture",N._matricesTexture,w),Dt.setOptional(B,N,"batchingIdTexture"),Dt.setValue(B,"batchingIdTexture",N._indirectTexture,w),Dt.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&Dt.setValue(B,"batchingColorTexture",N._colorsTexture,w));let gr=G.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&Ve.update(N,G,zn),(bn||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,Dt.setValue(B,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jn.envMap.value=we,Jn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Jn.envMapIntensity.value=U.environmentIntensity),bn&&(Dt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&Ku(Jn,mr),se&&V.fog===!0&&me.refreshFogUniforms(Jn,se),me.refreshMaterialUniforms(Jn,V,q,re,f.state.transmissionRenderTarget[b.id]),Gs.upload(B,bh(Pe),Jn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gs.upload(B,bh(Pe),Jn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Dt.setValue(B,"center",N.center),Dt.setValue(B,"modelViewMatrix",N.modelViewMatrix),Dt.setValue(B,"normalMatrix",N.normalMatrix),Dt.setValue(B,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Dn=V.uniformsGroups;for(let Ti=0,xi=Dn.length;Ti<xi;Ti++){let xh=Dn[Ti];L.update(xh,zn),L.bind(xh,zn)}}return zn}function Ku(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ju(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,U,G){Be.get(b.texture).__webglTexture=U,Be.get(b.depthTexture).__webglTexture=G;let V=Be.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let G=Be.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,G=0){C=b,R=U,T=G;let V=!0,N=null,se=!1,Ee=!1;if(b){let we=Be.get(b);if(we.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(we.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(we.__hasExternalTextures)w.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Re=b.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&Be.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ee=!0);let Ze=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[U])?N=Ze[U][G]:N=Ze[U],se=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?N=Ze[G]:N=Ze,P.copy(b.viewport),O.copy(b.scissor),H=b.scissorTest}else P.copy(Le).multiplyScalar(q).floor(),O.copy(et).multiplyScalar(q).floor(),H=Rt;if(Oe.bindFramebuffer(B.FRAMEBUFFER,N)&&V&&Oe.drawBuffers(b,N),Oe.viewport(P),Oe.scissor(O),Oe.setScissorTest(H),se){let we=Be.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,we.__webglTexture,G)}else if(Ee){let we=Be.get(b.texture),We=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,G||0,We)}S=-1},this.readRenderTargetPixels=function(b,U,G,V,N,se,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe){Oe.bindFramebuffer(B.FRAMEBUFFER,xe);try{let we=b.texture,We=we.format,Ze=we.type;if(!ot.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&G>=0&&G<=b.height-N&&B.readPixels(U,G,V,N,Je.convert(We),Je.convert(Ze),se)}finally{let we=C!==null?Be.get(C).__webglFramebuffer:null;Oe.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,U,G,V,N,se,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(xe=xe[Ee]),xe){let we=b.texture,We=we.format,Ze=we.type;if(!ot.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-V&&G>=0&&G<=b.height-N){Oe.bindFramebuffer(B.FRAMEBUFFER,xe);let Re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.bufferData(B.PIXEL_PACK_BUFFER,se.byteLength,B.STREAM_READ),B.readPixels(U,G,V,N,Je.convert(We),Je.convert(Ze),0);let ut=C!==null?Be.get(C).__webglFramebuffer:null;Oe.bindFramebuffer(B.FRAMEBUFFER,ut);let Ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Gf(B,Ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,se),B.deleteBuffer(Re),B.deleteSync(Ft),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,G=0){b.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let V=Math.pow(2,-G),N=Math.floor(b.image.width*V),se=Math.floor(b.image.height*V),Ee=U!==null?U.x:0,xe=U!==null?U.y:0;w.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,Ee,xe,N,se),Oe.unbindTexture()},this.copyTextureToTexture=function(b,U,G=null,V=null,N=0){b.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let se,Ee,xe,we,We,Ze,Re,ut,Ft,It=b.isCompressedTexture?b.mipmaps[N]:b.image;G!==null?(se=G.max.x-G.min.x,Ee=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,We=G.min.y,Ze=G.isBox3?G.min.z:0):(se=It.width,Ee=It.height,xe=It.depth||1,we=0,We=0,Ze=0),V!==null?(Re=V.x,ut=V.y,Ft=V.z):(Re=0,ut=0,Ft=0);let mn=Je.convert(U.format),gt=Je.convert(U.type),Pe;U.isData3DTexture?(w.setTexture3D(U,0),Pe=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Pe=B.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let li=B.getParameter(B.UNPACK_ROW_LENGTH),Et=B.getParameter(B.UNPACK_IMAGE_HEIGHT),zn=B.getParameter(B.UNPACK_SKIP_PIXELS),vs=B.getParameter(B.UNPACK_SKIP_ROWS),bn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,It.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,It.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,we),B.pixelStorei(B.UNPACK_SKIP_ROWS,We),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);let mr=b.isDataArrayTexture||b.isData3DTexture,Dt=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Jn=Be.get(b),gr=Be.get(U),Dn=Be.get(Jn.__renderTarget),Ti=Be.get(gr.__renderTarget);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let xi=0;xi<xe;xi++)mr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(b).__webglTexture,N,Ze+xi),b.isDepthTexture?(Dt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(U).__webglTexture,N,Ft+xi),B.blitFramebuffer(we,We,se,Ee,Re,ut,se,Ee,B.DEPTH_BUFFER_BIT,B.NEAREST)):Dt?B.copyTexSubImage3D(Pe,N,Re,ut,Ft+xi,we,We,se,Ee):B.copyTexSubImage2D(Pe,N,Re,ut,Ft+xi,we,We,se,Ee);Oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Dt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Pe,N,Re,ut,Ft,se,Ee,xe,mn,gt,It.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,N,Re,ut,Ft,se,Ee,xe,mn,It.data):B.texSubImage3D(Pe,N,Re,ut,Ft,se,Ee,xe,mn,gt,It):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,N,Re,ut,se,Ee,mn,gt,It.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,N,Re,ut,It.width,It.height,mn,It.data):B.texSubImage2D(B.TEXTURE_2D,N,Re,ut,se,Ee,mn,gt,It);B.pixelStorei(B.UNPACK_ROW_LENGTH,li),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),B.pixelStorei(B.UNPACK_SKIP_PIXELS,zn),B.pixelStorei(B.UNPACK_SKIP_ROWS,vs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,bn),N===0&&U.generateMipmaps&&B.generateMipmap(Pe),Oe.unbindTexture()},this.copyTextureToTexture3D=function(b,U,G=null,V=null,N=0){return b.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,G,V,N)},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Oe.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,Oe.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}},Ue=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Wo=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new I,Xo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends Ai{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ls,Ar=new I,Us=new I,Ns=new I,Bs=new ce,Mr=new ce,su=new bt,Eo=new I,Sr=new I,yo=new I,Td=new ce,ol=new ce,xd=new ce,Lr=class extends Vt{constructor(e=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fc(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Xo(i,3,0,!1)),Ls.setAttribute("uv",new Xo(i,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),su.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;vo(Eo.set(-.5,-.5,0),Ns,o,Us,s,r),vo(Sr.set(.5,-.5,0),Ns,o,Us,s,r),vo(yo.set(.5,.5,0),Ns,o,Us,s,r),Td.set(0,0),ol.set(1,0),xd.set(1,1);let a=e.ray.intersectTriangle(Eo,Sr,yo,!1,Ar);if(a===null&&(vo(Sr.set(-.5,.5,0),Ns,o,Us,s,r),ol.set(0,1),a=e.ray.intersectTriangle(Eo,yo,Sr,!1,Ar),a===null))return;let l=e.ray.origin.distanceTo(Ar);l<e.near||l>e.far||t.push({distance:l,point:Ar.clone(),uv:Li.getInterpolation(Ar,Eo,Sr,yo,Td,ol,xd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function vo(n,e,t,i,s,r){Bs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Mr.x=r*Bs.x-s*Bs.y,Mr.y=s*Bs.x+r*Bs.y):Mr.copy(Bs),n.copy(e),n.x+=Mr.x,n.y+=Mr.y,n.applyMatrix4(su)}var pc=class extends En{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wn,h=wn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qo=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Os=new bt,wd=new bt,_o=[],Rd=new _i,B2=new bt,br=new k,Tr=new zi,Yo=class extends k{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,B2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),Rd.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(Rd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Os),Tr.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(i),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),wd.multiplyMatrices(i,Os),br.matrixWorld=wd,br.raycast(e,_o);for(let o=0,a=_o.length;o<a;o++){let l=_o[o];l.instanceId=r,l.object=this,t.push(l)}_o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pc(new Float32Array(s*this.count),s,this.count,Gc,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ks=class extends Ai{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cd=new bt,mc=new No,Ao=new zi,Mo=new I,Ur=class extends Vt{constructor(e=new Xt,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Cd.copy(s).invert(),mc.copy(e.ray).applyMatrix4(Cd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,E=p;g<E;g++){let m=c.getX(g);Mo.fromBufferAttribute(d,m),Fd(Mo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,E=p;g<E;g++)Mo.fromBufferAttribute(d,g),Fd(Mo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fd(n,e,t,i,s,r,o){let a=mc.distanceSqToPoint(n);if(a<t){let l=new I;mc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends En{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new bt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(cn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(cn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zo=class extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gc=class extends Zo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var So=new I,al=new Yc,ll=new Yc,cl=new Yc,as=class extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),c=So);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),al.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),ll.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),cl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(al.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ll.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),cl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(al.calc(l),ll.calc(l),cl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function O2(n,e){let t=1-n;return t*t*e}function H2(n,e){return 2*(1-n)*n*e}function z2(n,e){return n*n*e}function Fr(n,e,t,i){return O2(n,e)+H2(n,t)+z2(n,i)}function k2(n,e){let t=1-n;return t*t*t*e}function G2(n,e){let t=1-n;return 3*t*t*n*e}function V2(n,e){return 3*(1-n)*n*n*e}function W2(n,e){return n*n*n*e}function Pr(n,e,t,i,s){return k2(n,e)+G2(n,t)+V2(n,i)+W2(n,s)}var Ec=class extends Xn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Pr(e,s.x,r.x,o.x,a.x),Pr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yc=class extends Xn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Pr(e,s.x,r.x,o.x,a.x),Pr(e,s.y,r.y,o.y,a.y),Pr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vc=class extends Xn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_c=class extends Xn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends Xn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends Xn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y),Fr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Pd(a,l.x,c.x,h.x,d.x),Pd(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},X2=Object.freeze({__proto__:null,ArcCurve:gc,CatmullRomCurve3:as,CubicBezierCurve:Ec,CubicBezierCurve3:yc,EllipseCurve:Zo,LineCurve:vc,LineCurve3:_c,QuadraticBezierCurve:Ac,QuadraticBezierCurve3:$o,SplineCurve:Mc});var Un=class n extends Xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ke=class n extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,E=[],m=i/2,f=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function v(){let y=new I,D=new I,R=0,T=(t-e)/i;for(let C=0;C<=r;C++){let S=[],A=C/r,P=A*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,W=H*l+a,j=Math.sin(W),Y=Math.cos(W);D.x=P*j,D.y=-A*i+m,D.z=P*Y,d.push(D.x,D.y,D.z),y.set(j,T,Y).normalize(),u.push(y.x,y.y,y.z),p.push(H,1-A),S.push(g++)}E.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let A=E[S][C],P=E[S+1][C],O=E[S+1][C+1],H=E[S][C+1];(e>0||S!==0)&&(h.push(A,P,H),R+=3),(t>0||S!==r-1)&&(h.push(P,O,H),R+=3)}c.addGroup(f,R,0),f+=R}function _(y){let D=g,R=new ce,T=new I,C=0,S=y===!0?e:t,A=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let O=0;O<=s;O++){let W=O/s*l+a,j=Math.cos(W),Y=Math.sin(W);T.x=S*Y,T.y=m*A,T.z=S*j,d.push(T.x,T.y,T.z),u.push(0,A,0),R.x=j*.5+.5,R.y=Y*.5*A+.5,p.push(R.x,R.y),g++}for(let O=0;O<s;O++){let H=D+O,W=P+O;y===!0?h.push(W,W+1,H):h.push(W+1,W,H),C+=3}c.addGroup(f,C,y===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nn=class n extends Ke{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sc=class n extends Xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,D=new I;for(let R=0;R<t.length;R+=3)p(t[R+0],_),p(t[R+1],y),p(t[R+2],D),l(_,y,D,v)}function l(v,_,y,D){let R=D+1,T=[];for(let C=0;C<=R;C++){T[C]=[];let S=v.clone().lerp(y,C/R),A=_.clone().lerp(y,C/R),P=R-C;for(let O=0;O<=P;O++)O===0&&C===R?T[C][O]=S:T[C][O]=S.clone().lerp(A,O/P)}for(let C=0;C<R;C++)for(let S=0;S<2*(R-C)-1;S++){let A=Math.floor(S/2);S%2===0?(u(T[C][A+1]),u(T[C+1][A]),u(T[C][A])):(u(T[C][A+1]),u(T[C+1][A+1]),u(T[C+1][A]))}}function c(v){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,D=f(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],D=o[v+4],R=Math.max(_,y,D),T=Math.min(_,y,D);R>.9&&T<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new I,_=new I,y=new I,D=new I,R=new ce,T=new ce,C=new ce;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),R.set(o[A+0],o[A+1]),T.set(o[A+2],o[A+3]),C.set(o[A+4],o[A+5]),D.copy(v).add(_).add(y).divideScalar(3);let P=m(D);E(R,A+0,v,P),E(T,A+2,_,P),E(C,A+4,y,P)}}function E(v,_,y,D){D<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},js=class n extends Sc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Tt=class n extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,p=[],g=[],E=[],m=[];for(let f=0;f<=i;f++){let v=[],_=f/i,y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let R=D/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(R+y,1-_),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let _=h[f][v+1],y=h[f][v],D=h[f+1][v],R=h[f+1][v+1];(f!==0||o>0)&&p.push(_,y,R),(f!==i-1||l<Math.PI)&&p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(E,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var tn=class n extends Xt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let E=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let E=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(E,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var er=class n extends Xt{constructor(e=new $o(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ce,h=new I,d=[],u=[],p=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function E(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),f()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],D=o.binormals[_];for(let R=0;R<=s;R++){let T=R/s*Math.PI*2,C=Math.sin(T),S=-Math.cos(T);l.x=S*y.x+C*D.x,l.y=S*y.y+C*D.y,l.z=S*y.z+C*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let D=(s+1)*(_-1)+(y-1),R=(s+1)*_+(y-1),T=(s+1)*_+y,C=(s+1)*(_-1)+y;g.push(D,R,C),g.push(R,T,C)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new X2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ie=class extends Ai{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function bo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function q2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var tr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bc=class extends tr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ph:r=e,a=2*t-i;break;case Ih:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:o=e,l=2*i-t;break;case Ih:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,f=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-p)*m+(1.5+p)*E+.5*g,y=p*m-p*E;for(let D=0;D!==a;++D)r[D]=f*o[h+D]+v*o[c+D]+_*o[l+D]+y*o[d+D];return r}},Tc=class extends tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},xc=class extends tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case Jl:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return Jl;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&q2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Jl;var ls=class extends qn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Fo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends qn{};wc.prototype.ValueTypeName="color";var Rc=class extends qn{};Rc.prototype.ValueTypeName="number";var Cc=class extends tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Hi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jo=class extends qn{InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends qn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Fo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends qn{};Fc.prototype.ValueTypeName="vector";var Pc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Y2=new Pc,Ic=class{constructor(e){this.manager=e!==void 0?e:Y2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},De=class extends nr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hl=new bt,Id=new I,Dd=new I,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dc=class extends Nr{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Io*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Bn=class extends nr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ld=new bt,xr=new I,dl=new I,Lc=class extends Nr{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),i.position.copy(xr),dl.copy(i.position),dl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(dl),i.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),Ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}},je=class extends nr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uc=class extends Nr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ud();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ud(){return 0}var Zc="\\[\\]\\.:\\/",Z2=new RegExp("["+Zc+"]","g"),$c="[^"+Zc+"]",$2="[^"+Zc.replace("\\.","")+"]",J2=/((?:WC+[\/:])*)/.source.replace("WC",$c),Q2=/(WCOD+)?/.source.replace("WCOD",$2),K2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),j2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),eg=new RegExp("^"+J2+Q2+K2+j2+"$"),tg=["material","materials","bones","map"],Nc=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z2,"")}static parseTrackName(e){let t=eg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);tg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Nc;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);var ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ng=new $s(-1,1,1,-1,0,1),Jc=class extends Xt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},ig=new Jc,ar=class{constructor(e){this._mesh=new k(ig,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ng)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var hs=class extends Mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rr.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ar(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br=class extends Mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},na=class extends Mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ia=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hs(ta),this.copyPass.material.blending=ti,this.clock=new Qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Br!==void 0&&(o instanceof Br?i=!0:o instanceof na&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ru={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var lr=class n extends Mi{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new jt(r,o,{type:vn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new jt(r,o,{type:vn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=ru;this.highPassUniforms=rr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ta;this.copyUniforms=rr.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new qe,this.fsQuad=new ar(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};lr.BlurDirectionX=new ce(1,0);lr.BlurDirectionY=new ce(0,1);var ds=1280,us=720;function He(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Qc=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Cn=(n,e,t)=>n+(e-n)*t,pn=(n,e,t)=>{let i=Qc((t-n)/(e-n));return i*i*(3-2*i)};var sg=n=>(n=Qc(n),n*n*(3-2*n));function ra(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=sg((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>Cn(o,r[a],i)):Cn(s,r,i)}return n[n.length-1][1]}var rg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ce(ds,us)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},og={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new de(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},sa=class{constructor(e){let t=this.r=new Vo({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(ds,us,!1),t.shadowMap.enabled=!0,t.shadowMap.type=Oc,t.toneMapping=ni,t.outputColorSpace=Gi;let i=new Js(ds,us);i.type=vi,this.rt=new jt(ds,us,{type:vn,samples:2,depthTexture:i}),this.composer=new ia(t,new jt(ds,us,{type:vn})),this.dof=new hs(rg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new lr(new ce(ds/2,us/2),.45,.75,.82),this.grade=new hs(og),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function ou(n,e,t,i=40){let s=new Wo;s.background=new de(t);let r=new sn(i,ds/us,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function au(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var An=1/420,Kc=new Map;function Mn(n,e,t,i){if(Kc.has(n))return Kc.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Rn(s);return o.colorSpace=Lt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Kc.set(n,o),o}var ft=n=>new Path2D(n);function nn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function Yn(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var ag={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function lg(n,e){return Mn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=ft("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");nn(t,i,Yn(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(ft("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(ft("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(ft("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=ft("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){nn(t,ft("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Yn(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(ft("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(ft("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(ft("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(ft("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(ft("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")nn(t,ft("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Yn(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(ft("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(ft("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(ft("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){nn(t,ft("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Yn(t,-60,0,60,120,n.a,n.b)),nn(t,ft("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Yn(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else nn(t,ft("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Yn(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(ft("M-22 26 L22 26 L0 64Z")),nn(t,ft("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function lu(n,e,t){return Mn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(nn(i,ft("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Yn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(nn(i,ft("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;nn(i,ft(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Yn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(ft(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(ft(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function cg(){return Mn("hand",90,100,n=>{n.translate(45,14);let e=ft("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");nn(n,e,Yn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function cu(n){return Mn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function hg(){return Mn("foot",80,40,n=>{n.translate(26,6),nn(n,ft("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function dg(n="round"){return Mn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var uu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function ug(n,e){return Mn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),uu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function fg(n,e,t){return Mn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=ft("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");nn(i,s,Yn(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),nn(i,s,e);let r=ft("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");nn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),nn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=ft("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");nn(i,s,Yn(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),nn(i,l,"#E9E9EF")})})})}var hu=(n,e={})=>new qe({map:n,alphaTest:.5,alphaToCoverage:!0,side:_t,...e}),du=new Map,jc=new Map,pg=[];function mg(n){if(jc.has(n))return jc.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Rn(t);return r.colorSpace=Lt,r.anisotropy=8,jc.set(n,r),r}function _n(n,e,t,i,s,r=0,o,a=!1){let l=new be(e*An,t*An);l.translate((e/2-i)*An,(s-t/2)*An,0);let c=hu(n);o.push(c);let h=new k(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=hu(mg(n),{color:"#FFE9C8"});pg.push(u);let p=new k(l,u);p.position.z=-.045-r,h.add(p)}let d=du.get(n);return d||(d=new ki({depthPacking:sr,map:n,alphaTest:.5,side:_t}),du.set(n,d)),h.customDepthMaterial=d,h}function gg(){return Mn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function Eg(){return Mn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function eh(n={}){let e=ag[n.outfit||"hero"],t=n.outfit||"hero",i=new le,s=[],r=new le;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new le;_.position.set(f*34*An,o*An,v);let y=new le;y.position.y=-142*An,_.add(_n(cu(1),50,160,25,6,0,s)),y.add(_n(cu(1),50,160,25,6,0,s));let D=_n(hg(),80,40,26,6,.001,s);D.position.y=-142*An,f<0&&(D.scale.x=-1),y.add(D),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=_n(lg(e,t),300,320,150,20,0,s);h.position.y=(a+4)*An,r.add(h);for(let[m,f,v]of[["L",-1,-.006],["R",1,.006]]){let _=new le;_.position.set(f*(e.kind==="dress"?66:84)*An,(a-24)*An,v);let y=new le;y.position.y=-124*An,_.add(_n(lu(e,t,"u"),90,170,45,10,0,s)),y.add(_n(lu(e,t,"f"),90,170,45,10,.001,s));let D=_n(cg(),90,100,45,14,.002,s);D.position.y=-128*An,D.scale.set(f>0?-.8:.8,.8,1),y.add(D),_.add(y),r.add(_),c[m]={u:_,f:y,hand:D}}let d=new le;if(d.position.set(0,(a+104)*An,.02),r.add(d),n.hair){let m=_n(fg(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(_n(dg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=_n(Mn("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let v=n.hairc||"#4a2c1a";f.fillStyle=v,f.fill(ft(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=_n(Mn("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(v=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(v*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(uu)){let f=_n(ug(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",d.add(f),u[m]=f}if(n.glasses){let m=_n(Mn("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=_n(n.hat(Mn),300,300,150,150,.006,s);d.add(m)}let p=new k(new be(1,.4),new qe({map:gg(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new k(new be(2.1,3),new qe({map:Eg(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:gn,side:_t})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in u)u[f].visible=f===m},cheer(m,f=0,v=1){let _=m*6+f,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*f,c.L.f.rotation.z=-v[1]*f,c.R.u.rotation.z=_[0]*f,c.R.f.rotation.z=_[1]*f,l.L.th.rotation.z=-y[0]*f,l.L.shin.rotation.z=-y[1]*f,l.R.th.rotation.z=D[0]*f,l.R.shin.rotation.z=D[1]*f,d.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let R=m.squash||0;r.scale.set(1-R*.5,1+R,1)},walk(m,f=1,v=1){let _=m*6.4*f,y=Math.sin(_),D=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,f,v=0,_=1){i.position.set(m,v,f),i.scale.setScalar(_)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return E.pose(),E}function ve(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Rn(i);return r.colorSpace=Lt,r.anisotropy=8,r}var fs=(n,e={})=>new Ie({color:n,roughness:.88,metalness:0,...e});function x(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new k(new yn(n,e,t),typeof i=="string"?fs(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function lt(n,e,t=1){let i=ve(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Lr(new Qs({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:gn}));return s.scale.set(e,e,1),s}var fu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function yg(n,e,t,i,s,r=.42){let o=He(n),a=256*e,l=300*t,c,h=ve(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,p,28,10);for(let p=0;p<t;p++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,p*300+292,a,8)}),d=ve(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,f=g*300+60,v=144,_=196,y=o()<r,D=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,v+18,_+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+_+9,v+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+_+6,v+36,8),p.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,v,_),y||!s){let R=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=R,p.fillRect(m,f,26,_),p.fillRect(m+v-26,f,26,_)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+_),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+_),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+v/2-3,f,6,_),p.fillRect(m,f+_*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,f,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,f,6,_),u.fillRect(m,f+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Lt,{map:h,emissiveMap:d}}function Vi(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=He(n),u=new le,p=o*2.9+3.6,g=c||fu[Math.floor(d()*fu.length)],E=Math.max(2,Math.round(r/2.1)),m=yg(n,E,o,g,l,e.lit??.42),f=new Ie({map:m.map,emissiveMap:m.emissiveMap,emissive:new de(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=fs(g),_=[a>0?f:v,a>0?v:f,fs("#2c2730"),v,v,v],y=new k(new yn(s,o*2.9,r),_);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(x(s+.5,.5,r+.5,"#3d3540",t,p+.25,i)),u.add(x(s+.3,.35,r+.3,g,t,3.6,i));let D=t+a*(s/2+.01);if(h){let R=ve(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),T=new k(new yn(.18,1.05,r-.3),[new Ie({map:R,emissiveMap:R,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),new Ie({map:R,emissiveMap:R,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),fs("#222"),fs("#222"),fs("#222"),fs("#222")]);T.position.set(D+a*.1,3.25,i),a>0&&(T.scale.z=-1),T.castShadow=!0,u.add(T);let C=ve(512,256,P=>{let O=P.createLinearGradient(0,0,0,256);O.addColorStop(0,h.win||"#F4C783"),O.addColorStop(1,"#D59A5C"),P.fillStyle=O,P.fillRect(0,0,512,256);let H=He(n+9);for(let W=0;W<26;W++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(H()*6)],P.fillRect(H()*490,30+Math.floor(H()*3)*76,12+H()*26,52);for(let W of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,W,512,7)}),S=new Ie({map:C,emissiveMap:C,emissive:new de(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(x(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let A=new k(new be(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(D+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(x(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=ve(512,128,H=>{for(let W=0;W<12;W++)H.fillStyle=W%2?h.awning:"#F4EEDF",H.fillRect(W*512/12,0,42.666666666666664,128)}),O=new k(new be(r-.3,1.3),new Ie({map:P,side:_t,roughness:.9}));O.rotation.y=a*Math.PI/2,O.rotation.order="YXZ",O.rotation.x=-1,O.position.set(D+a*.55,2.56,i),O.castShadow=!0,u.add(O)}if(l){let P=new je(h.light||"#FFC88A",3.2,7,1.8);P.position.set(D+a*1.7,2.1,i),u.add(P)}}return u}function pu(n,e,t){let i=new k(new be(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function vg(n="#A99D90"){let e=ve(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=He(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=qt,e}function oa(n,e){let t=ve(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=He(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=qt,t.repeat.set(1,12);let i=pu(9,240,new Ie({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=vg(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=pu(4.4,240,new Ie({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(x(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function aa(n,e,t,i,s=!0,r=5.5){let o=new le;o.add(x(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(x(.26,.3,.26,"#15151b",e,.15,t));let a=x(.26,.4,.26,new Ie({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(x(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=lt("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new je("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var mu={};function hn(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new le;o.add(x(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=mu[a]||(mu[a]=ve(512,512,c=>{let h=He(r%3+3),d=(u,p,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,v=g*(.86+.14*Math.sin(f*5+u)+h()*.05);c.lineTo(u+Math.cos(f)*v,p+Math.sin(f)*v)}c.fill()};for(let[u,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,p,g,s[0]);for(let[u,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,p,g,s[1]);for(let[u,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,p,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new k(new be(3.6*i,3.6*i),new Ie({map:l,alphaTest:.5,side:_t,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new ki({depthPacking:sr,map:l,alphaTest:.5,side:_t}),o.add(h)}return n.add(o),o}function Zn(n,e,t,i,s,r,o=3,a=0){let l=ve(1600,900,h=>{h.clearRect(0,0,1600,900);let d=He(o);for(let u=0;u<3;u++)for(let p=-40;p<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(p,900-E,g,E),d()<.2&&h.fillRect(p+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new k(new be(t,i),new qe({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function xt(n,e,t,i,s){let r=ve(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new k(new be(t,i),new qe({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var F=(n,e={})=>new Ie({color:n,roughness:.85,...e});function Ne(n,e,t,i={}){let s=new k(new be(e,t),new qe({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:_t,color:i.color||"#fff",blending:i.add?gn:Ui,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new ki({depthPacking:sr,map:n,alphaTest:.5,side:_t})),s}function ps(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var th={value:0};function la(n="#8E3D30",e=4,t=3){let i=ve(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=He(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=qt,i.repeat.set(e,t),i}function gu(n="#A59383",e=12,t=12){let i=ve(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=He(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=qt,i.repeat.set(e,t),i}var Eu=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function _g(n,e){let[t,i,s,r]=Eu[n];return ve(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function nh(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=He(o),l={};for(let c of e){let h=Math.floor(a()*Eu.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=_g(d,h),p=new qe({map:u,alphaTest:.5,side:_t,color:r});p.onBeforeCompile=m=>{m.uniforms.uT=th,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new Yo(new be(i*.5,i),p,l[c].length),E=new Vt;l[c].forEach((m,f)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(f,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function Sn(n,e=2600,t=300,i=1){let s=He(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,p=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(p)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(p)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Xt;a.setAttribute("position",new Kt(r,3)),a.setAttribute("color",new Kt(o,3));let l=ve(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new Ks({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Ur(a,c);return h.frustumCulled=!1,n.add(h),h}function Si(n,e,t="#6D4A33"){let i=ve(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=He(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=qt,i.repeat.set(n/5,e/5);let s=new k(new be(n,e),new Ie({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function si(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=ve(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=qt,r.repeat.set(n/s*4,e/s*4);let o=new k(new be(n,e),new Ie({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function ms(n,e,t="#FFD9A0",i=.22){let s=ve(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new k(new be(n,e),new qe({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:gn,side:_t,fog:!1}))}function ih(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new le,a=new k(new Ke(.3,.22,.5,20),F(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=ve(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Ne(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function sh(n,e,t,i="#2A1E18"){let s=new le;s.add(x(n+.08,e+.08,.04,i,0,0,0));let r=ve(Math.round(n*400),Math.round(e*400),t),o=new k(new be(n,e),new Ie({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Ut(n,e,t,i=1.2){return new k(new be(n,e),new Ie({color:"#000",emissive:t,emissiveIntensity:i}))}function nt(n,e,t,i=10,s=60){let r=new ir(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function Or(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Ue(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(xt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),Zn(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=la(t,2,2),a=()=>new Ie({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,E,m])=>n.add(x(E,m,.3,a(),p,g,-3)));for(let[p,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(x(E,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(x(18,5.2,.3,a(),0,2.6,-3));n.add(Si(18,12,s));let l=sh(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(ih(4.4,0,-2.4,1.1)),n.add(ih(-5,0,-2.4,.9,"#36AEA2")),n.add(new De(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=nt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new je("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new k(new Ke(.18,.3,.34,24),new Ie({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(x(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=lt("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var yu=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Hr(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Ue(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),xt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),Zn(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),oa(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Vi(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:yu[(a+i)%5]})),n.add(Vi(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:yu[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)hn(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),aa(n,-5,-3-l*12,1,t||r);n.add(new De(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(nt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},it=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},pt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},cr={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),it(n,120,330,34,100,14,"#B5784A"),it(n,340,330,34,100,14,"#B5784A"),it(n,180,340,34,90,14,"#C98E5E"),it(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),it(n,120,330,34,100,14,"#B5906A"),it(n,340,330,34,100,14,"#B5906A"),it(n,180,340,34,90,14,"#C9A07E"),it(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),pt(n,[[96,120],[110,30],[160,100]],"#E9853A"),pt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),pt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),pt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),pt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),it(n,92,200,26,70,12,"#A87A44"),it(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),pt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),pt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),pt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),pt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),pt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])it(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),pt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{it(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),pt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),it(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),pt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),pt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])it(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),pt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),pt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])it(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),pt(n,[[160,70],[150,30],[196,70]],"#E890A4"),pt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),it(n,40,260,70,240,30,"#2E2E38"),it(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{it(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])it(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),it(n,160,20,12,50,6,"#8A5A2A"),it(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])it(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),pt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),pt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),pt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])it(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])it(n,e,330,26,180,12,"#9A6238");it(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),pt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])it(n,e,360,34,190,14,"#4A3222");it(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)pt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])it(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),pt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),pt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])it(n,e,320,34,230,14,"#7A4A2E");it(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),it(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),pt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},ca={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(ca,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in ca)cr[n][3]=ca[n][0],cr[n][4]=ca[n][1];cr.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),pt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];cr.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)pt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),pt(n,[[100,80],[90,30],[130,74]],"#F2913A"),pt(n,[[160,76],[170,26],[190,80]],"#F2913A"),it(n,160,380,40,56,18,"#6AB05A"),it(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];cr.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])it(n,e,320,34,230,14,"#E4DED2");it(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),it(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),pt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var ha={},vu=n=>ha["e"+n]||(ha["e"+n]=ve(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function _u(n,e={}){let[t,i,s,r,o,a]=cr[n],l=ha[n]||(ha[n]=ve(t,i,s)),c=a*i/t,h=new le,d=new le;h.add(d);let u=Ne(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let p=new k(new be(o*a,o*a*.5),new qe({map:vu("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(p);let g=new k(new Un(a*.45,24),new qe({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){p.material.map=vu(m)},face(m){let f=new I;h.getWorldPosition(f),d.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){u.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,v=0,_=1){return h.position.set(m,v,f),h.scale.setScalar(_),E}};return E}var Wi=(n,e,t=200,i=200,s)=>{let r=new k(new be(t,i),s?new Ie({map:s,roughness:.95}):F(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},rh=(n,e=1)=>{n.add(new De("#E9EEFF","#B08A6A",1.05*e)),n.add(nt("#FFD29A",3*e,[-14,16,10],20,70))},Te={sala:(n,e)=>Or(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{Or(n,{wall:"#9A4632",night:e.night}),n.add(x(2.4,.45,3.2,F("#6B4A33"),-1.7,.25,-1.4)),n.add(x(2.3,.3,3,F("#F3EEE4"),-1.7,.6,-1.4)),n.add(x(2.38,.22,2,F("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(x(.8,.22,.5,F("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Hr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Ue(e.dusk?"#E8A880":"#F2D8B8",.02),xt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),Zn(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),Wi(n,"#7A9A50");for(let t=0;t<12;t++)hn(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(x(2.4,.1,.5,F("#8E6242"),-3.4,.5,-2.2)),n.add(x(2.4,.5,.08,F("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)aa(n,-6+t*6,-4,1,!!e.dusk);n.add(new De("#E9EEFF","#B08A6A",1)),n.add(nt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Hr(n,{seed:e.seed||2}),Wi(n,"",60,60,gu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Ue("#F2D8B8",.012),xt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Wi(n,"#8AAA58");let t=new le;t.add(x(6,4,5,F("#B5402E"),0,2,0));let i=new k(new Ke(.01,4.4,2.2,4),F("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(x(2,2.6,.1,F("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(x(.1,1,.1,F("#C9A06A"),-10+s*1.3,.5,-4));n.add(x(20,.08,.06,F("#C9A06A"),0,.9,-4)),n.add(x(20,.08,.06,F("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)hn(n,6+s*3,-16-s%2*3,1.6,void 0,s);rh(n)},sabana:(n,e)=>{n.fog=new Ue("#F2C890",.01),xt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=lt("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),Wi(n,"#C8A858");for(let i=0;i<6;i++){let s=new le;s.add(x(.3,3,.3,F("#5A3A22"),0,1.5,0));let r=new k(new Ke(2.6,2.2,.6,12),F("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new De("#FFE8C8","#8A6A3A",1)),n.add(nt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Ue("#F2E2C0",.012),xt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),Wi(n,"#B8B070");for(let t=0;t<14;t++){let i=new k(new Tt(.55,16,10,0,Math.PI*2,0,Math.PI/2),F("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}rh(n)},mar:(n,e)=>{Ag(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Ue(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=Wi(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=He(5);for(let r=0;r<30;r++){let o=new k(new Nn(.2+s()*.3,.8+s()*1.4,7),F(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=ms(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=lt("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new De("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(nt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Ue("#162238",.04),n.add(si(16,20,"#2A3348","#232B3E",6)),n.add(x(16,6,.3,F("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Ut(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Ut(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=ve(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new k(new be(2.5,1.3),new qe({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new De("#6E86C8","#101420",.8)),n.add(nt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Ue("#1E2236",.02),Wi(n,"#2F4A7A"),n.add(x(30,10,.3,F("#E8E2D2"),0,5,-8));let t=ve(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Ne(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new k(new tn(4,.35,10,48),F("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new je("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new De("#E8E8FF","#3A3A50",.9)),n.add(nt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Ue("#E6E2D6",.03),n.add(si(9,40));for(let i of[-1,1]){n.add(x(.7,4.2,30,F("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(x(1.2,.05,30,F("#DDE0E4"),i*3,.5+s*.9,-10))}let t=He(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(x(.3,.3,.4,F(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Ut(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new De("#FFFFFF","#B9B3A6",1)),n.add(nt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{Te.parque(n,{});for(let t=0;t<12;t++)n.add(x(.08,1.4,.08,F("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(x(8,.08,.08,F("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{Or(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Ue("#8A8070",.03),xt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),Wi(n,"#8A8070");let t=He(8);for(let i=0;i<40;i++){let s=x(.4+t()*1.6,.3+t()*1,.4+t()*1.4,F(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}rh(n,.8)}};function Ag(n,e){n.background=new de(e)}function Mg(n,e={}){let t=eh({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var Sg=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function Au(n,e,t){let i=ou(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(Te[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?Mg(s,a):(()=>{let c=_u(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{th.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=ra(t.cam.map(([g,E])=>[g,E]),l),u=ra(t.cam.map(([g,,E])=>[g,E]),l);au(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let f=g.move(l);E.root.position.set(f[0],f[1],f[2])}E.face(c),E.eye(Sg(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,v])=>l>=f&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?ra(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function Mu(n,e,t,i="#E8667F"){n.add(x(2.2,.45,3,F("#6B4A33"),e,.25,t)),n.add(x(2.1,.3,2.8,F("#F3EEE4"),e,.6,t)),n.add(x(2.18,.2,1.9,F(i,{roughness:.9}),e,.8,t+.5)),n.add(x(2.2,1.3,.16,F("#5A3C28"),e,.9,t-1.55)),n.add(x(.8,.2,.45,F("#FFFFFF"),e-.5,.82,t-1.1)),n.add(x(.8,.2,.45,F("#F6E6C8"),e+.5,.82,t-1.1))}function Su(n,e=Math.PI/2){n.root.rotation.z=e}function bu(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return ve(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,p,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,p,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,p)=>c.fillText(u,t/2,i*.42+(p-(d.length-1)/2)*o*1.15))})}function Tu(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return ve(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function oh(n,e="#F2C14E",t=140,i=256,s=200){return ve(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function bg(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function zr(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new Rn(i);r.colorSpace=Lt;let o=new k(new be(n,n),new Ie({map:r,transparent:!0,alphaTest:.05,side:_t,roughness:.7}));return o.set=(a,l={})=>{bg(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}function Tg(n,e={}){let{w:t=512,h:i=256,bg:s="#10141E",fg:r="#FFFFFF",size:o=80,font:a="Inter",weight:l=800}=e;return ve(t,i,c=>{c.fillStyle=s,c.fillRect(0,0,t,i),c.fillStyle=r,c.font=`${l} ${o}px ${a}`,c.textAlign="center",c.textBaseline="middle";let h=Array.isArray(n)?n:[n];h.forEach((d,u)=>c.fillText(d,t/2,i/2+(u-(h.length-1)/2)*o*1.15))})}function ah(n,e,t,i,s={}){let r=Tg(e,s),o=new k(new be(t,i),new qe({map:r,toneMapped:!1}));return n.add(o),o}var da=[0,4.62,7.04,12.46,16.3,22.6,30.4,37.88,42.32,44.14,54.82,60.82,71.64,77.6,79.86,83.14,89.42,95.36,105.04,116.86,122.62,125.18,130.36,136.32,143.8,146.14,148.6,158.64,165.46,172.1,174.7,182.64,192.94,196.9,200.4,211.18,215.88,217.6,224.9,230.8,234.78,242.88,247.36,252.56,258.46,260.88,271.96,278.48,281.66,286.56,292.94,298.3,307.02,318.84,322.32,335.12,342.4,348.74,350.28,356.92,367.94,375.44,384.18,392.4,393.9,401.98,404.26,412.38,416.2,422.58,429.84,437.12,438.98,443.42,448.66,455.38,459.88,462.22,469.5,474.14,479.96,486.42,490.4,495.2,503.36,510.4,514.32,517.66],xg=[["son",0],["las",.22],["siete",.44],["de",.78],["la",.94],["manana",1.06],["suena",2.02],["la",2.4],["alarma",2.56],["la",3.5],["apagas",3.64],["y",4.62],["entonces",4.8],["oyes",5.18],["una",5.9],["voz",6.1],["no",7.04],["viene",7.16],["del",7.38],["pasillo",7.6],["no",8.6],["viene",8.7],["del",8.96],["movil",9.2],["viene",10.02],["de",10.44],["dentro",10.64],["de",11.04],["tu",11.22],["cabeza",11.34],["cinco",12.46],["minutos",12.76],["mas",13],["solo",14.14],["cinco",14.34],["minutos",14.78],["mas",15.26],["conoces",16.3],["esa",16.84],["voz",17.12],["es",17.84],["la",18.02],["de",18.18],["tu",18.28],["crush",18.42],["y",19.22],["no",19.34],["te",19.5],["esta",19.64],["hablando",19.9],["a",20.18],["ti",20.46],["esta",21.04],["pensando",21.34],["en",22.6],["la",22.78],["pantalla",22.88],["del",23.2],["movil",23.46],["aparece",23.84],["un",24.18],["mensaje",24.44],["que",24.92],["nadie",25.14],["ha",25.48],["escrito",25.74],["hoy",26.78],["puedes",26.96],["oir",27.4],["su",27.78],["mente",27.96],["hasta",28.78],["medianoche",29.06],["y",30.4],["antes",30.54],["de",30.78],["que",30.96],["empieces",31.06],["a",31.5],["escuchar",31.62],["si",32.5],["te",32.6],["gustan",32.72],["estas",33.04],["historias",33.28],["de",33.82],["y",34.06],["si",34.06],["suscribete",35.04],["al",35.66],["canal",35.82],["y",36.08],["activa",36.36],["la",36.76],["campanita",36.84],["y",37.88],["ahora",38.06],["si",38.32],["vamos",39.04],["a",39.22],["ver",39.48],["que",39.62],["hay",39.86],["dentro",40.02],["de",40.38],["la",40.62],["cabeza",40.72],["de",41.1],["tu",41.26],["crush",41.38],["siete",42.32],["y",42.58],["cuarto",42.78],["de",43.08],["la",43.28],["manana",43.36],["te",44.14],["estas",44.32],["lavando",44.56],["los",44.92],["dientes",45.12],["y",45.46],["en",45.76],["tu",45.92],["cabeza",46],["suena",46.26],["donde",47.32],["esta",47.54],["mi",47.76],["otro",47.94],["calcetin",48.12],["hay",49.2],["galletas",49.32],["tengo",50.16],["que",50.42],["acordarme",50.56],["de",51.08],["devolver",51.24],["el",51.62],["libro",51.8],["por",52.52],["que",52.66],["los",52.82],["gatos",53.02],["odian",53.32],["el",53.68],["agua",53.88],["esperabas",54.82],["secretos",55.34],["esperabas",56.3],["poesia",56.88],["y",58],["te",58.08],["encuentras",58.18],["con",58.7],["calcetines",58.94],["y",59.62],["gatos",59.98],["pero",60.82],["eso",61.06],["es",61.46],["lo",61.64],["normal",61.78],["en",62.66],["2020",62.84],["unos",63.84],["investigadores",63.96],["de",64.7],["la",64.9],["universidad",64.98],["de",65.54],["queen",65.7],["s",65.7],["en",66.3],["canada",66.36],["midieron",67.16],["con",67.5],["escaneres",67.72],["del",68.32],["cerebro",68.48],["cuantas",68.9],["veces",69.36],["cambiamos",69.76],["de",70.32],["pensamiento",70.5],["el",71.64],["resultado",71.78],["unas",72.76],["6",73.02],["200",73.02],["veces",73.88],["al",74.62],["dia",74.96],["seis",75.6],["mil",76],["pensamientos",76.32],["y",77.6],["casi",77.74],["ninguno",77.94],["es",78.44],["importante",78.68],["ocho",79.86],["de",80.12],["la",80.28],["manana",80.38],["vas",81.22],["al",81.4],["instituto",81.6],["en",82.04],["autobus",82.38],["y",83.14],["empiezas",83.3],["a",83.76],["notar",83.94],["algo",84.22],["raro",84.48],["a",85.44],["ratos",85.58],["la",86.02],["voz",86.24],["de",86.44],["tu",86.58],["crush",86.7],["se",87],["apaga",87.32],["no",88.08],["hay",88.32],["palabras",88.48],["solo",89.42],["una",89.74],["imagen",89.94],["borrosa",90.32],["de",90.96],["una",91.08],["playa",91.26],["un",92.14],["olor",92.34],["a",92.58],["pan",92.68],["una",93.34],["cancion",93.5],["que",93.98],["se",94.22],["repite",94.36],["eso",95.36],["tambien",95.64],["tiene",96.06],["explicacion",96.3],["el",97.48],["psicologo",97.64],["russell",98.02],["hurlburt",98.46],["lleva",98.98],["decadas",99.46],["preguntando",99.9],["a",100.6],["personas",100.7],["que",101.1],["estaban",101.46],["pensando",101.9],["justo",102.28],["cuando",102.84],["sonaba",103.14],["un",103.64],["pitido",103.82],["al",104.22],["azar",104.36],["y",105.04],["descubrio",105.16],["que",105.66],["la",105.84],["voz",105.94],["interior",106.14],["eso",106.94],["de",107.16],["hablarnos",107.32],["a",107.74],["nosotros",107.94],["mismos",108.08],["con",108.64],["palabras",108.9],["aparece",109.72],["solo",109.98],["en",110.44],["una",110.6],["parte",110.74],["de",111.06],["los",111.2],["momentos",111.34],["mucha",112.34],["gente",112.66],["piensa",112.9],["en",113.36],["imagenes",113.52],["en",114.36],["sensaciones",114.5],["o",115.1],["en",115.56],["nada",115.7],["concreto",115.88],["asi",116.86],["que",117.06],["leer",117.28],["una",117.54],["mente",117.78],["no",118.12],["es",118.46],["como",118.66],["leer",118.88],["un",119.12],["libro",119.3],["es",120.04],["como",120.16],["cambiar",120.4],["de",120.84],["canal",121.04],["sin",121.36],["parar",121.64],["ocho",122.62],["y",122.86],["media",123],["entras",123.84],["en",124.12],["clase",124.32],["y",125.18],["llevas",125.22],["el",125.6],["pelo",125.8],["fatal",126.1],["se",127.14],["te",127.28],["ha",127.42],["levantado",127.44],["un",127.94],["mechon",128.06],["y",128.4],["no",128.64],["hay",128.84],["forma",128.96],["de",129.28],["bajarlo",129.46],["te",130.36],["sientas",130.46],["muy",130.88],["recto",131.16],["convencido",131.84],["de",132.4],["que",132.58],["toda",132.7],["la",133.02],["clase",133.24],["te",133.54],["esta",133.74],["mirando",133.98],["sobre",134.8],["todo",135.2],["ella",135.44],["y",136.32],["escuchas",136.46],["su",136.96],["mente",137.16],["tengo",137.44],["hambre",138.28],["hoy",139.1],["habia",139.46],["examen",139.6],["no",140.48],["era",141.04],["manana",141.2],["uf",142.1],["que",142.72],["alivio",142.88],["ni",143.8],["una",144.1],["palabra",144.36],["sobre",144.78],["tu",145.1],["pelo",145.3],["esto",146.14],["se",146.44],["llama",146.64],["el",146.92],["efecto",147.26],["foco",147.74],["en",148.6],["el",148.74],["ano",148.84],["2000",148.98],["el",149.74],["psicologo",149.82],["thomas",150.24],["gilovich",150.62],["hizo",151.12],["que",151.58],["unos",151.72],["estudiantes",151.92],["entraran",152.56],["en",153.2],["una",153.3],["sala",153.46],["llevando",153.78],["una",154.34],["camiseta",154.56],["bastante",155.06],["vergonzosa",155.58],["con",156.68],["la",156.9],["cara",157.04],["de",157.26],["un",157.44],["cantante",157.58],["ellos",158.64],["creian",159],["que",159.42],["la",159.58],["mitad",159.7],["de",159.92],["la",160.12],["gente",160.22],["se",160.5],["iba",160.78],["a",160.98],["fijar",161.12],["en",161.84],["realidad",162.04],["se",162.68],["fijo",162.8],["como",163.1],["mucho",163.36],["una",163.76],["de",164.2],["cada",164.36],["cuatro",164.56],["personas",164.92],["creemos",165.46],["que",166.38],["todo",166.64],["el",167.02],["mundo",167.28],["nos",167.54],["mira",167.8],["pero",168.56],["todo",168.6],["el",168.9],["mundo",169.1],["esta",169.36],["ocupado",169.6],["pensando",170.06],["en",170.44],["si",170.72],["mismo",170.86],["10",172.1],["de",172.36],["la",172.56],["manana",172.68],["el",173.5],["recreo",173.66],["ella",174.7],["esta",174.88],["con",175.22],["sus",175.42],["amigas",175.58],["se",176.4],["rie",176.6],["de",176.88],["algo",177],["tu",177.88],["te",178],["acercas",178.12],["con",178.54],["el",178.72],["bocadillo",178.84],["y",179.32],["le",179.54],["dices",179.62],["hola",180.42],["solo",181.16],["hola",181.92],["y",182.64],["en",182.76],["tu",182.88],["cabeza",183],["explota",183.32],["su",184.06],["voz",184.28],["me",184.82],["ha",185.04],["dicho",185.14],["hola",185.36],["le",186.06],["he",186.22],["contestado",186.34],["bien",186.76],["he",187.42],["sonado",187.56],["rarisima",187.84],["por",188.78],["que",188.9],["he",189.06],["dicho",189.16],["hola",189.38],["que",189.78],["tal",189.9],["tan",190.1],["rapido",190.28],["seguro",191.12],["que",191.4],["piensa",191.52],["que",191.82],["soy",191.94],["tonta",192.08],["te",192.94],["quedas",193.1],["helado",193.5],["estaba",194.48],["nerviosa",194.9],["por",195.84],["ti",196.06],["y",196.9],["por",197.02],["fuera",197.18],["no",197.48],["se",197.66],["le",197.82],["notaba",197.88],["nada",198.24],["parecia",198.88],["tranquila",199.26],["eso",200.4],["se",200.68],["llama",200.88],["la",201.14],["ilusion",201.32],["de",201.78],["transparencia",201.92],["creemos",203.16],["que",203.52],["los",203.72],["demas",203.88],["ven",204.18],["nuestros",204.44],["nervios",204.74],["nuestra",205.66],["verguenza",205.88],["lo",206.86],["que",206.94],["sentimos",207.04],["pero",208.02],["casi",208.24],["nunca",208.5],["se",208.84],["nota",209.12],["tanto",209.3],["como",209.72],["pensamos",210],["ella",211.18],["creia",211.44],["que",211.9],["se",212.04],["le",212.2],["notaba",212.26],["todo",212.62],["tu",213.42],["no",213.64],["habias",213.96],["visto",214.22],["nada",214.66],["12",215.88],["del",216.4],["mediodia",216.66],["ahora",217.6],["ya",218],["no",218.24],["puedes",218.38],["parar",218.7],["de",218.98],["escuchar",219.2],["esperas",220.12],["a",220.58],["que",220.68],["piense",220.76],["en",221.12],["ti",221.24],["cada",221.92],["vez",222.1],["que",222.32],["la",222.48],["miras",222.58],["deseas",223],["oir",223.64],["tu",223.92],["nombre",224.08],["y",224.9],["a",225.1],["veces",225.16],["llega",225.44],["por",226.5],["que",226.68],["no",226.8],["me",226.92],["habla",227.06],["mas",227.24],["antes",227.94],["me",228.18],["hablaba",228.38],["seguro",229.16],["que",229.54],["le",229.66],["caigo",229.76],["mal",229.98],["que",230.8],["le",230.92],["caes",231.08],["mal",231.44],["pero",232.14],["si",232.32],["llevas",232.5],["meses",232.8],["pensando",233.22],["en",233.7],["ella",233.96],["en",234.78],["2018",235.02],["unos",236.2],["investigadores",236.44],["de",237.22],["las",237.44],["universidades",237.58],["de",238.24],["yale",238.48],["y",238.82],["cornell",239.06],["pusieron",239.42],["a",240.12],["hablar",240.26],["a",240.46],["desconocidos",240.6],["durante",241.22],["unos",241.46],["minutos",241.9],["despues",242.88],["preguntaron",243.28],["a",244.02],["cada",244.14],["uno",244.3],["cuanto",245.1],["le",245.38],["has",245.5],["gustado",245.6],["a",245.92],["la",246.12],["otra",246.2],["persona",246.4],["casi",247.36],["todos",247.62],["se",247.96],["quedaron",248.22],["cortos",248.56],["le",249.5],["gustaban",249.64],["a",250.06],["la",250.18],["otra",250.24],["persona",250.46],["mas",250.94],["de",251.28],["lo",251.44],["que",251.54],["creian",251.66],["lo",252.56],["llamaron",252.76],["la",253.22],["brecha",253.54],["de",253.92],["la",254.06],["simpatia",254.16],["pensamos",255.22],["que",255.72],["caemos",255.94],["peor",256.3],["de",256.78],["lo",256.92],["que",257.02],["caemos",257.14],["una",258.46],["de",258.74],["la",258.9],["tarde",259],["el",259.68],["comedor",259.88],["aqui",260.88],["empiezas",261.14],["a",261.72],["hacer",261.88],["trampa",262.06],["ella",262.84],["piensa",263.04],["ojala",264.06],["hubiera",264.5],["pizza",264.8],["tu",265.72],["vas",265.9],["y",266.14],["le",266.34],["dices",266.44],["oye",267.2],["te",267.78],["apetece",267.86],["pizza",268.2],["se",268.46],["queda",269.16],["mirandote",269.44],["con",269.98],["los",270.18],["ojos",270.34],["muy",270.66],["abiertos",271.06],["ella",271.96],["piensa",272.42],["me",273.4],["encanta",273.52],["esa",273.92],["serie",274.28],["tu",275.08],["dices",275.26],["has",276.04],["visto",276.2],["esa",276.4],["serie",276.68],["es",277.26],["la",277.44],["mejor",277.62],["ella",278.48],["piensa",278.66],["es",279.6],["como",279.76],["si",279.94],["me",280.12],["leyera",280.24],["la",280.58],["mente",280.76],["y",281.66],["por",281.82],["un",281.98],["momento",282.1],["te",282.44],["sientes",282.72],["un",283.14],["genio",283.4],["pero",284.16],["tambien",284.46],["un",284.98],["poco",285.16],["tramposo",285.46],["porque",286.56],["no",286.82],["la",287.08],["estas",287.22],["escuchando",287.5],["a",288.14],["ella",288.3],["estas",288.96],["escuchando",289.3],["su",289.84],["mente",290.04],["para",290.4],["decirle",290.7],["lo",291.24],["que",291.4],["quiere",291.54],["oir",291.86],["lo",292.94],["curioso",293.16],["es",293.64],["que",293.86],["sin",294.34],["poderes",294.44],["somos",295.32],["bastante",295.54],["malos",296.1],["adivinando",296.6],["lo",297.14],["que",297.32],["piensan",297.42],["los",297.84],["demas",298],["el",298.3],["psicologo",299.06],["william",299.52],["ickes",299.9],["lo",300.38],["midio",300.72],["grabando",301.02],["conversaciones",301.46],["y",302.22],["preguntando",302.54],["despues",303.08],["a",303.42],["cada",303.68],["persona",303.86],["que",304.36],["estaba",304.68],["pensando",305.04],["en",305.54],["cada",305.8],["momento",306],["entre",307.02],["desconocidos",307.32],["acertamos",308.32],["mas",308.8],["o",309.16],["menos",309.34],["uno",309.6],["de",310.02],["cada",310.2],["cinco",310.36],["pensamientos",310.7],["entre",311.9],["buenos",312.18],["amigos",312.46],["algo",313.2],["mas",313.42],["de",313.66],["uno",313.84],["de",314.08],["cada",314.24],["tres",314.42],["ni",315.22],["siquiera",315.46],["los",315.8],["que",316],["mejor",316.14],["nos",316.44],["conocen",316.62],["saben",317.12],["lo",317.52],["que",317.7],["pensamos",317.82],["y",318.84],["la",319.02],["ciencia",319.14],["de",319.5],["leer",319.66],["mentes",319.86],["de",320.28],["verdad",320.46],["todavia",320.74],["esta",321.4],["empezando",321.76],["en",322.32],["2023",322.78],["en",324.36],["la",324.46],["universidad",324.54],["de",325.14],["texas",325.26],["el",326.04],["equipo",326.16],["de",326.42],["alexander",326.6],["huth",327.02],["consiguio",327.52],["que",328.18],["un",328.34],["ordenador",328.52],["adivinara",329],["la",329.5],["idea",329.66],["general",329.94],["de",330.46],["lo",330.62],["que",330.72],["una",330.86],["persona",331.04],["escuchaba",331.44],["o",332.1],["imaginaba",332.26],["usando",332.86],["un",333.4],["escaner",333.76],["del",334.18],["cerebro",334.42],["pero",335.12],["la",335.3],["persona",335.46],["tenia",335.84],["que",336.2],["pasar",336.38],["muchas",336.62],["horas",337.1],["tumbada",337.4],["dentro",337.9],["de",338.24],["la",338.44],["maquina",338.54],["y",339.22],["si",339.5],["no",339.62],["queria",339.76],["colaborar",340.04],["no",340.96],["funcionaba",341.22],["o",342.4],["sea",342.54],["nadie",343.3],["puede",343.62],["leerte",343.94],["la",344.4],["mente",344.6],["sin",344.9],["que",345.16],["tu",345.38],["quieras",345.6],["menos",346.54],["tu",347.04],["hoy",347.68],["cinco",348.74],["de",349.3],["la",349.4],["tarde",349.52],["estas",350.28],["en",350.74],["el",350.9],["parque",351.02],["ella",351.92],["pasa",352.12],["con",352.42],["los",352.66],["cascos",352.8],["puestos",353.1],["y",353.7],["se",353.94],["sienta",354.04],["en",354.44],["un",354.56],["banco",354.68],["no",355.56],["te",355.82],["ha",355.96],["visto",356.02],["y",356.92],["su",357.02],["voz",357.16],["suena",357.5],["distinta",358],["mas",359.1],["baja",359.42],["mi",360.36],["madre",360.48],["otra",360.76],["vez",361.02],["enfadada",361.26],["nadie",362.48],["en",362.78],["clase",362.9],["sabe",363.08],["que",363.54],["en",363.76],["casa",363.9],["todo",364.08],["va",364.56],["mal",364.76],["siempre",365.52],["sonrio",365.86],["para",366.38],["que",366.62],["no",366.74],["pregunten",366.88],["te",367.94],["duele",368.12],["el",368.4],["pecho",368.54],["llevas",369.44],["meses",369.7],["mirandola",370.14],["y",370.86],["nunca",371.12],["te",371.46],["imaginaste",371.64],["esto",372.22],["siempre",373.12],["parecia",373.52],["tan",374.02],["feliz",374.38],["y",375.44],["te",375.64],["das",375.74],["cuenta",375.9],["de",376.14],["algo",376.4],["has",377.2],["estado",377.36],["todo",377.72],["el",378.04],["dia",378.28],["escuchando",378.46],["su",379.06],["mente",379.26],["como",379.58],["si",379.84],["fuera",380.02],["un",380.28],["juego",380.42],["para",380.74],["saber",381.42],["si",381.74],["le",381.9],["gustas",382.02],["para",383],["quedar",383.06],["bien",383.34],["pero",384.18],["lo",384.4],["que",384.54],["hay",384.7],["ahi",384.92],["dentro",385.08],["no",385.44],["es",385.98],["tuyo",386.22],["son",387],["sus",387.2],["miedos",387.44],["sus",388.54],["secretos",388.64],["cosas",389.84],["que",390.04],["nunca",390.32],["te",390.66],["ha",390.94],["contado",391],["seis",392.4],["de",392.82],["la",392.94],["tarde",393.06],["tomas",393.9],["una",394.24],["decision",394.42],["te",395.52],["acercas",395.58],["al",395.96],["banco",396.14],["te",396.9],["sientas",397.02],["a",397.46],["su",397.62],["lado",397.7],["y",398.42],["no",398.6],["le",398.7],["dices",398.82],["lo",399.1],["que",399.3],["ella",399.44],["esta",399.62],["pensando",399.84],["le",400.9],["preguntas",401.02],["oye",401.98],["estas",402.94],["bien",403.3],["ella",404.26],["se",404.52],["quita",404.72],["un",404.96],["casco",405.12],["te",405.92],["mira",406.04],["y",406.26],["en",406.88],["su",407],["cabeza",407.14],["suena",407.38],["se",408.48],["lo",408.6],["cuento",408.72],["no",409.58],["si",410.4],["no",411.38],["lo",411.54],["se",411.68],["y",412.38],["por",412.54],["fuera",412.7],["dice",412.98],["si",413.84],["si",414.52],["todo",415.06],["bien",415.14],["esperas",416.2],["no",417.16],["dices",417.34],["nada",417.62],["no",418.52],["usas",418.68],["lo",419.02],["que",419.16],["sabes",419.26],["solo",420.1],["te",420.4],["quedas",420.58],["ahi",420.88],["a",421.52],["su",421.62],["lado",421.72],["y",422.58],["al",422.66],["rato",422.76],["ella",423.1],["empieza",423.56],["a",423.96],["hablar",424.16],["te",424.9],["cuenta",425.02],["lo",425.37],["de",425.42],["su",425.58],["madre",425.72],["lo",426.4],["de",426.58],["casa",426.72],["lo",427.48],["de",427.6],["sonreir",427.72],["para",428.24],["que",428.44],["nadie",428.58],["pregunte",428.82],["y",429.84],["esta",430.02],["vez",430.24],["no",430.52],["lo",430.94],["oyes",431.12],["dentro",431.34],["de",431.66],["tu",431.9],["cabeza",432],["lo",432.88],["oyes",433.08],["con",433.34],["su",433.58],["voz",433.78],["de",434.02],["verdad",434.16],["porque",434.88],["ha",435.24],["decidido",435.46],["contartelo",435.94],["es",437.12],["mucho",437.26],["mejor",437.58],["nueve",438.98],["de",439.4],["la",439.52],["noche",439.62],["os",440.44],["habeis",440.56],["quedado",440.82],["hablando",441.18],["hasta",441.5],["que",441.82],["se",441.98],["ha",442.16],["hecho",442.28],["de",442.5],["noche",442.62],["de",443.42],["vuestras",443.54],["series",443.86],["de",444.7],["la",444.76],["pizza",444.88],["de",445.76],["que",445.84],["los",445.94],["dos",446.1],["pensabais",446.26],["que",446.84],["le",447.02],["caiais",447.14],["mal",447.58],["al",447.78],["otro",447.92],["y",448.66],["cuando",448.78],["se",448.98],["despide",449.18],["oyes",449.94],["su",450.22],["mente",450.46],["una",450.7],["ultima",450.98],["vez",451.36],["ojala",452.24],["me",452.74],["hubiera",452.88],["atrevido",453.18],["a",453.66],["hablarle",453.78],["antes",454.16],["sonries",455.38],["porque",455.9],["tu",456.54],["pensabas",456.88],["exactamente",457.62],["lo",458.2],["mismo",458.66],["once",459.88],["y",460.42],["cincuenta",460.54],["y",460.94],["nueve",461.04],["de",461.3],["la",461.44],["noche",461.54],["estas",462.22],["en",462.66],["la",462.82],["cama",462.94],["su",463.74],["voz",463.86],["en",464.04],["tu",464.2],["cabeza",464.32],["se",464.64],["va",464.94],["apagando",465.08],["poco",465.98],["a",466.2],["poco",466.38],["como",467.1],["una",467.26],["radio",467.5],["que",467.86],["se",468.02],["queda",468.14],["sin",468.36],["pilas",468.56],["lo",469.5],["ultimo",469.68],["que",469.98],["oyes",470.22],["es",470.52],["manana",471.38],["le",471.64],["digo",471.94],["de",472.16],["ir",472.32],["juntos",472.44],["al",472.78],["instituto",473],["y",474.14],["a",474.3],["las",474.38],["doce",474.54],["en",474.82],["punto",474.96],["silencio",475.78],["tu",476.94],["cabeza",477.04],["vuelve",477.42],["a",478.06],["ser",478.14],["solo",478.34],["tuya",478.7],["a",479.96],["la",480.24],["manana",480.3],["siguiente",480.56],["suena",480.9],["la",481.48],["alarma",481.56],["no",482.48],["hay",482.74],["ninguna",482.86],["voz",483.3],["no",484.12],["sabes",484.32],["que",484.62],["esta",484.84],["pensando",485.04],["tu",485.48],["crush",485.66],["y",486.42],["no",486.56],["pasa",486.68],["nada",486.9],["porque",487.64],["a",487.88],["las",488.04],["siete",488.12],["y",488.38],["media",488.58],["te",488.78],["llega",489.04],["un",489.26],["mensaje",489.44],["de",490.4],["verdad",490.54],["escrito",491.3],["por",491.72],["ella",492.08],["vamos",492.94],["juntos",493.24],["al",493.54],["instituto",493.78],["al",495.2],["final",495.48],["leer",496.22],["la",496.38],["mente",496.58],["de",496.84],["tu",496.98],["crush",497.12],["te",497.4],["enseno",497.6],["algo",498.04],["que",498.26],["no",498.48],["esperabas",498.66],["que",499.74],["la",499.86],["gente",499.98],["piensa",500.22],["muchas",500.68],["mas",501.08],["tonterias",501.38],["de",501.94],["las",502.14],["que",502.26],["creemos",502.4],["que",503.36],["nadie",503.48],["se",503.78],["fija",504.04],["tanto",504.28],["en",504.62],["nosotros",504.76],["como",505.12],["pensamos",505.46],["que",506.5],["casi",506.62],["siempre",506.84],["le",507.28],["caemos",507.46],["mejor",507.8],["a",508.16],["los",508.32],["demas",508.46],["de",508.74],["lo",508.94],["que",509.04],["imaginamos",509.16],["y",510.4],["que",510.42],["lo",510.54],["que",510.66],["de",510.78],["verdad",510.88],["importa",511.16],["no",511.72],["se",512.22],["descubre",512.38],["espiando",512.94],["una",513.42],["mente",513.62],["se",514.32],["descubre",514.5],["preguntando",515.04],["y",515.78],["escuchando",516.38],["y",517.66],["tu",517.74],["querrias",518.4],["saber",518.7],["que",519.02],["piensa",519.2],["tu",519.58],["crush",519.76],["de",520.04],["ti",520.24],["te",520.9],["leo",521.02],["en",521.3],["los",521.38],["comentarios",521.48]],xu=(n,e=0)=>{for(let[t,i]of xg)if(i>=e&&t===n)return i;return e};var ua=(n,e,t=200,i=200)=>{let s=new k(new be(t,i),F(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Nt=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return ve(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function wg(n,e=.5){let t=new le,i=ve(1024,256,r=>{r.clearRect(0,0,1024,256);let o=He(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new k(new be(400,100),new qe({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:gn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function Rg(n,e=0,t=-1){for(let i=0;i<4;i++){let s=x(5,.22,.6,F("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new k(new Nn(.16,.35,6),F(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function lh(n,e=40,t=3,i=[-12,12,-40,4]){let s=He(t),r=ve(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Ne(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function wu(n,e=200,t=5,i=10,s=30,r=2){let o=He(t),a=ve(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Ne(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}Te.pasteleria=n=>{n.fog=new Ue("#F3D2C0",.02),n.add(si(16,14,"#F2E6DA","#E2CFC0",8)),n.add(x(16,5,.3,F("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(x(.12,5,.05,F("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(x(5.4,1,.9,F("#8A5A3C"),0,.5,-1.2)),n.add(x(5.5,.08,1,F("#F4EEE6"),0,1.04,-1.2)),n.add(x(3.6,.1,.5,F("#F4EEE6"),0,2.1,-3)),n.add(x(3.6,.1,.5,F("#F4EEE6"),0,2.9,-3));let e=Ne(Nt(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new De("#FFF0F0","#A07060",1));let t=nt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new je("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};Te.espacio=n=>{n.background=new de("#05060E"),Sn(n,2600,200,3),n.add(new De("#8FA8FF","#101020",.5));let e=new ir("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};Te.aula=n=>{n.fog=new Ue("#E8DCC8",.02),n.add(si(16,16,"#C9B89A","#BBA98A",10)),n.add(x(16,5,.3,F("#E8DCC0"),0,2.5,-3.6)),n.add(x(4.4,1.8,.06,F("#2F5A48"),0,2.3,-3.42)),n.add(x(4.6,.1,.2,F("#8E6242"),0,1.36,-3.35));let e=Ne(ve(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new De("#FFFFFF","#9A8A70",1)),n.add(nt("#FFE8C8",2.2,[-6,8,6],10,40))};Te.ruaV=(n,e)=>{Hr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(lh(n,60,4),wu(n,260,6,9,40))};Te.apagon=(n,e)=>{n.fog=new Ue("#0A0C18",.03),xt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Sn(n,1800,200,4),oa(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(Vi(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Vi(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new De("#5A64A8","#141420",.5)),n.add(nt("#8A9AE0",.7,[-10,20,10],30,90))};Te.azotea=(n,e)=>{n.background=new de("#03040A"),n.fog=new Ue("#060814",.008),Sn(n,4200,200,9),wg(n,e.ang??.45),Zn(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=x(16,.3,12,F("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(x(16,.5,.2,F("#4A4A54"),0,.25,-8)),n.add(x(1.4,1.2,1.4,F("#4A4A54"),4.5,.6,-5)),n.add(new De("#6A78C8","#141420",.55)),n.add(nt("#9AAAF0",.6,[-6,10,6],12,40))};Te.panaderia=n=>{Te.pasteleria(n);let e=Ne(Nt(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};Te.metro=n=>{n.background=new de("#0A0C10"),n.fog=new Ue("#0C1014",.07);let e=F("#4A4E54",{roughness:.9,side:Qt}),t=new k(new Ke(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new le,s=new k(new Ke(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=x(6.4,.1,60,F("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(x(.08,.12,60,F("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(x(2.2,.08,.2,F("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new je("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=lt("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new De("#8A90A0","#202024",1.1))};Te.bosque=(n,e)=>{n.fog=new Ue(e.nieve?"#E8EEF4":"#C8D0B8",.025),xt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ua(n,e.nieve?"#F2F4F8":"#6E8A48");let t=He(14);for(let i=0;i<26;i++)hn(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=Vi(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),lh(n,0)}n.add(new De("#E9EEFF","#5A6A4A",.95)),n.add(nt("#FFE8C0",2.4,[-10,14,8],18,60))};Te.rio=(n,e)=>{Te.parque(n,e);let t=new k(new be(60,3.4),new Ie({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};Te.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Ue(t?"#F2A880":"#CFE8F0",.006),xt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=lt(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=ua(n,"#E8D4A0"),r=new k(new be(800,400),new Ie({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=x(800,.02,.6,F("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new k(new js(1.1,0),F("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new De(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(nt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};Te.svalbard=n=>{n.fog=new Ue("#C8D8E8",.02),xt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),ua(n,"#F4F6FA");let e=He(19);for(let l=0;l<8;l++){let c=new k(new Nn(10+e()*12,10+e()*10,7),F("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new k(new Tt(14,32,16,0,Math.PI*2,0,Math.PI/2),F("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=x(3,4.4,6,F("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=x(1.4,2.2,.1,F("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Ut(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=lt("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=lt("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new De("#D8E8FF","#8A9AB0",1.1)),n.add(nt("#F0F4FF",1.6,[-8,10,8],16,50))};Te.huerto=(n,e)=>{Te.parque(n,e),Rg(n,0,-1.4)};Te.biblio=n=>{n.fog=new Ue("#4A3A2A",.03),n.add(Si(18,14,"#6D4A33")),n.add(x(18,6,.3,F("#5A3E2A"),0,3,-3.4));let e=He(8);for(let s=0;s<5;s++){n.add(x(14,.06,.4,F("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(x(o,a,.3,F(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new De("#FFE8C8","#3A2A1C",.7));let t=new je("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=lt("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};Te.hotel=n=>{n.fog=new Ue("#E8D8C0",.02),n.add(Si(18,14,"#8A5A3A")),n.add(x(18,6,.3,F("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(x(2.4,2.6,.05,F("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Ne(ve(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=x(3.2,.6,2.4,F("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(x(3.3,1.4,.2,F("#6A3A2A"),0,.7,-2.8)),lh(n,0);let t=Ne(ve(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new De("#FFF0E0","#8A6A4A",1)),n.add(nt("#FFE0B0",2,[-4,8,6],10,30))};Te.selva=n=>{n.fog=new Ue("#7AA870",.05),xt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),ua(n,"#3E5A2A");let e=He(23);for(let t=0;t<40;t++)hn(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);wu(n,160,9,12,12,3),n.add(new De("#D8F0C8","#2A3A1A",.9)),n.add(nt("#FFF0C0",2.2,[-6,14,4],14,50))};Te.desierto=n=>{Te.sabana(n,{})};var dh=(n,e,t=200,i=200)=>{let s=new k(new be(t,i),F(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var Cg=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return ve(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function Ru(n,e=.9,t={}){let i=Cg(n,t),s=new k(new be(e,e*(t.h||360)/(t.w||512)),new Ie({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function fa(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new le,[d,u,p,g]=s,E=()=>l?new Ie({map:la(i,3,3),roughness:.95}):F(i,{roughness:.9}),m=d-p/2+e/2,f=e/2-(d+p/2),v=u-g/2,_=t-(u+g/2);h.add(x(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(x(f,t,.3,E(),e/2-f/2,t/2,0)),h.add(x(p,v,.3,E(),d,v/2,0)),h.add(x(p,_,.3,E(),d,t-_/2,0));let y=F("#F4F0E4");for(let[O,H,W,j]of[[d-p/2,u,.1,g+.1],[d+p/2,u,.1,g+.1],[d,u+g/2,p+.2,.1],[d,u,.05,g]])h.add(x(W,j,.36,y,O,H,0));h.add(x(p+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,R=F(o,{roughness:.9});h.add(x(p+3,t,.2,R,d,t/2,-D)),h.add(x(.2,t,D,R,d-p/2-1.4,t/2,-D/2)),h.add(x(.2,t,D,R,d+p/2+1.4,t/2,-D/2)),h.add(x(p+3,.2,D,F("#8A6A4A"),d,v-c,-D/2)),h.add(x(p+3,.2,D,R,d,u+g/2+.5,-D/2));let T=new je("#FFC880",a?9:2.5,7,1.4);T.position.set(d,u+.6,-1.2),h.add(T);let C=Ut(p+2.6,t*.6,"#FFD9A0",a?.35:.08);C.position.set(d,u,-D+.12),h.add(C);let S=x(p-.04,g,.06,F("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let O=0;O<10;O++){let H=x(p-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(H),A.push([H,O])}let P=O=>{let H=Math.max(.001,g*O);S.scale.y=H/g,S.position.y=u+g/2-H/2,S.visible=O>.01,A.forEach(([W,j])=>{let Y=u+g/2-(j+.5)*g/10;W.visible=O>.01&&Y>u+g/2-H,W.position.y=Y})};return P(0),h.userData={persiana:P,luz:O=>{T.intensity=O?9:2.5,C.material.emissiveIntensity=O?.35:.08},win:s,lamp:T},h.children.forEach(O=>{O.castShadow=O.castShadow??!0,O.receiveShadow=!0}),h}function hh(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new le;l.add(x(i,s,r,F(e,{roughness:.9}),0,s/2,-r/2));let c=new k(new Ke(.01,i*.62,2.4,4,1),F(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(x(1.1,2.1,.1,F(o),0,1.05,.02)),l.add(x(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ie({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(x(1.3,1.2,.06,h(),d,u,.03)),l.add(x(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(x(2,.2,1.2,F("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function ch(n=4){let e=new le,t=He(n*7);for(let i=0;i<n*3;i++){let s=new k(new Tt(.42+t()*.12,12,10),F(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function Cu(n=8,e="#E8E2D2"){let t=new le;for(let i=0;i<=n*4;i++)t.add(x(.1,1.3,.05,F(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(x(n,.08,.06,F(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function pa(){let n=new le,e=He(4);for(let t=0;t<7;t++){let i=new k(new Tt(.35,12,10),F("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new k(new Tt(.08,10,8),F(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function Fg(){let n=new le;n.add(x(2.2,2,1.8,F("#8A6A4A",{roughness:.9}),0,1,0));let e=x(2.6,.12,2.3,F("#5A3E2A"),0,2.12,0);return n.add(e),n.add(x(.8,1.5,.05,F("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Fu(n=.6){let e=x(n,n*.8,n,F("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(x(n*1.01,.06,.15,F("#E8D8A8"),0,n*.4,0)),e}function Pu(){let n=new le;n.add(x(.04,1.4,.04,F("#E8667F"),0,.7,0));let e=new k(new Tt(.28,16,12),new Ie({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new k(new tn(.18,.04,8,16,Math.PI*1.2),F("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=lt("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Iu(n=.9,e=1.2){let t=ve(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new le;i.add(x(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new k(new be(n,e),F("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Du(n=.9,e=1.2){let t=ve(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new le;i.add(x(n+.08,e+.08,.04,"#111",0,0,0));let s=new k(new be(n,e),F("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}var Pg=(n,e)=>{Te.quarto(n,e);let t=Iu();t.position.set(-3,2.8,-2.8),n.add(t)};Te.cuartoYo=(n,e)=>{Pg(n,e);let t=fa({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=Pu();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Du(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&Sn(n,600,120,2)};Te.cuartoElla=(n,e)=>{Te.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(x(2.4,.45,3.2,F("#6B4A33"),1.7,.25,-1.4)),n.add(x(2.3,.3,3,F("#F3EEE4"),1.7,.6,-1.4)),n.add(x(2.38,.22,2,F("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=Pu();t.position.set(-3.2,0,-2.2),n.add(t);let i=Du();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=fa({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Iu(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&Sn(n,600,120,2)};Te.entreCasas=(n,e)=>{let t=!!e.night;n.background=new de(t?"#0A0C1E":"#9FC8E8"),n.fog=new Ue(t?"#0E1028":"#CFE0EE",.02),xt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&Sn(n,1600,120,5),dh(n,t?"#24301E":"#6E9A50");let i=fa({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=fa({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Cu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new De(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(nt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};Te.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Ue(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),xt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),dh(n,t?"#24301E":"#6E9A50");let s=x(200,.02,6,F(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=x(200,.1,2,F("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let p=hh({col:d,roof:u,night:t});p.position.set(h,0,-3),n.add(p)}let a=ch(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=ch(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=ch(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])hn(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));Zn(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new De(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(nt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};Te.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Ue(t?"#E8A880":"#F2E2C8",.015),xt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),dh(n,"#6E9A50");let i=Cu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=pa();s.position.set(1.6,0,-1.2),n.add(s);let r=pa();r.position.set(2.8,0,-2.6),n.add(r);let o=Fg();o.position.set(-2.4,0,-3.2),n.add(o);let a=hh({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=hh({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])hn(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new De("#E9EEFF","#6A5A4A",1.05)),n.add(nt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};Te.esquina=(n,e)=>{Te.barrio(n,e)};Te.concurso=n=>{n.background=new de("#140C24"),n.fog=new Ue("#1A1030",.03);let e=x(20,.2,12,F("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=lt(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Ne(Nt(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=x(1.2,1.1,.7,F("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(x(1.3,.1,.8,F("#F2C14E"),0,1.12,-.6)),n.add(new De("#B8A8FF","#2A1A3A",.9));let s=new Bn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};Te.residencia=n=>{n.fog=new Ue("#E8DCC8",.02),n.add(Si(20,14,"#8A6A4A")),n.add(x(20,4,.3,F("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(x(1,2.2,.08,F("#6B4A33"),-7+e*2,1.1,-3.2));let t=Ne(Nt([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new De("#FFFFFF","#9A8A70",1)),n.add(nt("#FFE8C8",2,[-6,8,6],12,40))};var Gr=(n,e,t=200,i=200,s={})=>{let r=new k(new be(t,i),F(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},kr=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e});function Lu(n=2.6){let e=new le,t=ve(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Ne(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function Ig(n="#FFB25A"){let e=new le,t=new k(new Ke(.16,.12,.34,12),kr(n,1.8));e.add(t);let i=lt(n,1,.55);return e.add(i),e}var Dg=(n,e,t,i=3)=>{let s=He(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new k(new Tt(.07+s()*.06,10,8),kr(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=x(.02,.12,.02,F("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};Te.desvan=(n,e)=>{let t=!!e.night;n.background=new de("#1A120C"),n.fog=new Ue("#2A1C12",.05),n.add(Si(16,14,"#6A4630"));for(let h of[-1,1]){let d=x(16,.15,7.5,F("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(x(16,6,.2,F("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=x(.22,.22,9,F("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=He(6);for(let h=0;h<9;h++){let d=Fu(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=x(1.4,.8,.7,F("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(x(1.44,.1,.74,F("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Ut(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=ms(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new k(new Tt(.09,12,10),kr("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(x(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new je("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new De("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=lt("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};Te.pasillo=(n,e)=>{n.background=new de("#1A1036"),n.fog=new Ue("#2A1850",.045),Sn(n,1600,120,7),Gr(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=He(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let p of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(p>0?1:0))%i.length],m=x(.12,2.6,1.3,F("#F4ECD6"),p*2.4,1.3,g);n.add(m);let f=x(.08,2.3,1.05,F(E,{roughness:.6}),p*2.35,1.15,g);n.add(f);let v=new k(new Tt(.05,8,6),kr("#F2C14E",.6));v.position.set(p*2.29,1.1,g+.35),n.add(v)}let s=new le,r=new le;r.position.set(0,0,.55),s.add(r);let o=x(.08,2.3,1.05,F("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new k(new Tt(.05,8,6),kr("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Ne(Nt(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Ut(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let p=lt(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);p.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(p)}n.add(new De("#D8C8FF","#4A3070",1));let h=new je("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new je("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};Te.playaSueno=(n,e)=>{n.fog=new Ue("#E8B8E0",.018),xt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=lt("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new k(new Un(4,40),new qe({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=Gr(n,"#F8EEF2",200,200),r=new k(new be(400,200),new Ie({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=x(400,.02,.3,F("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=He(4);for(let l=0;l<70;l++){let c=lt("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new le;c.add(x(.18,2.8,.18,F("#E8A0C0"),0,1.4,0));let h=lt(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new De("#FFE0F6","#B88AC8",1.15)),n.add(nt("#FFD8E8",2,[8,14,-6],14,60))};Te.baile=(n,e)=>{n.background=new de("#0E0A28"),n.fog=new Ue("#1A1240",.03),Sn(n,2400,160,3),xt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),Gr(n,"#3A2A5A");let t=new k(new Un(3.2,48),new Ie({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),Dg(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=pa();c.position.set(a,0,l),n.add(c)}let i=He(9),s=[];for(let a=0;a<22;a++){let l=Ig(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new De("#B8A8FF","#2A1A3A",.7));let r=new Bn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new je("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};Te.estadio=(n,e)=>{n.background=new de("#0A1020"),n.fog=new Ue("#18203A",.02),Sn(n,800,160,5);let t=ve(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new k(new be(40,40),new Ie({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new le,r=F("#FFFFFF",{roughness:.4});s.add(x(.12,2.4,.12,r,-3.6,1.2,0),x(.12,2.4,.12,r,3.6,1.2,0),x(7.3,.12,.12,r,0,2.4,0));let o=new k(new be(7.2,2.4),new qe({color:"#FFFFFF",transparent:!0,opacity:.18,side:_t}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(x(60,1,2,F(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=He(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);nh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=lt("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new De("#D8E0FF","#2A3A2A",1));let c=nt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};Te.concierto=(n,e)=>{n.background=new de("#0C0820"),n.fog=new Ue("#140C2C",.025);let t=x(14,.6,6,F("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),Gr(n,"#140E26").position.y=-.01;let i=Ut(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=He(4);for(let l=0;l<9;l++){let c=lt(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=ms(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new le;r.add(x(.03,1.4,.03,F("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new k(new Tt(.06,12,10),F("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=lt(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new De("#B8A8FF","#2A1A3A",.8));let a=new Bn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};Te.gris=(n,e)=>{n.background=new de("#1C1E24"),n.fog=new Ue("#262830",.06),Gr(n,"#4A4C54"),n.add(x(14,7,.2,F("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(x(.2,7,12,F("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(x(.2,7,12,F("#52545C",{roughness:1}),4.2,3.5,0));let t=Ut(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(x(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(x(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new De("#A8B0C8","#2A2A30",.6));let i=new Bn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new je("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};Te.labSueno=(n,e)=>{Te.lab(n,e),Mu(n,-1.4,-1.6,"#4A86C7");let t=new le;t.add(x(.12,1.4,.12,F("#3A3A44"),0,.7,0)),t.add(x(1,.7,.1,F("#20242E"),0,1.7,0));let i=Ut(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var ma=(n,e,t=200,i=200,s={})=>{let r=new k(new be(t,i),F(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Uu=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e}),Lg=(n="#8C8A84",e=3)=>{let t=ve(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=He(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=qt,t},gs=(n,e,t,i,s,r,o,a=3)=>{let l=Lg(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new k(new yn(n,e,t),new Ie({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function Ug(n="#B8B4A8"){let e=new le,t=new k(new Ke(.09,.09,.22,18),F(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new k(new Ke(.092,.092,.12,18,1,!0),new Ie({map:ve(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function Ng(){let n=new le;n.add(x(1,.8,.6,F("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(x(.3,.3,.02,F("#222"),-.25,.5,.31));let e=new k(new Tt(.04,10,8),Uu("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(x(.02,.4,.02,F("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function Bg(){let n=new le;n.add(x(.36,.5,.08,F("#3A3C3A",{metalness:.5}),0,0,0));let e=new le;e.position.set(0,0,.06),n.add(e);let t=x(.05,.4,.05,F("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new k(new Tt(.07,14,10),F("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function Og(){let n=new le;n.add(x(8,2.4,2.5,F("#F2B830",{roughness:.5}),0,1.6,0)),n.add(x(8.02,.25,2.52,F("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(x(.85,.7,.02,F("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new k(new Ke(.45,.45,.3,16),F("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=lt("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function Nu(n,e,t={}){let i=Nt(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Ne(i,e,e*(t.h||260)/(t.w||1100))}Te.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new de("#0E0F10"),n.fog=new Ue(t?"#050608":"#2A2A28",t?.08:.045);let s=gs(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(gs(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(gs(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(gs(.3,4,10,4.2,2,-.5,"#84827C")),n.add(gs(12,.3,10,0,3.6,-.5,"#7A7872"));for(let T of[-2.4,0,2.4])n.add(x(.25,.3,10,F("#6A6862"),T,3.35,-.5));let r=new le;r.add(x(2,.2,.3,F("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),x(.2,2.6,.3,F("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),x(.2,2.6,.3,F("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new le;o.position.set(-.85,0,-3.3),n.add(o);let a=F("#6E7670",{metalness:.7,roughness:.35}),l=x(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let T of[.5,1.9])o.add(x(1.6,.08,.04,F("#5A605C",{metalness:.7}),.85,T,.1));let c=new k(new tn(.26,.035,8,28),F("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let T=0;T<3;T++){let C=x(.5,.03,.03,F("#B8241A"),.85,1.25,.14);C.rotation.z=T*Math.PI/3,o.add(C)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=Bg();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Ne(Nt(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=T=>{let C=new le,S=F("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])C.add(x(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])C.add(x(.96,.06,2.1,S,0,A,0)),C.add(x(.86,.14,1.96,F("#7A8A6A",{roughness:1}),0,A+.1,0)),C.add(x(.5,.1,.3,F("#D8D2C0"),0,A+.21,-.8));return C.position.set(T,0,-1.1),C};n.add(u(-3.3)),n.add(u(3.3));let p=new le;for(let T of[.9,1.5])p.add(x(1.4,.05,.35,F("#5A4A3A"),0,T,0));for(let T of[-.7,.7])p.add(x(.05,1.6,.35,F("#5A4A3A"),T,.8,0));p.position.set(-2,0,-3.2),n.add(p);let g=[];for(let T=0;T<6;T++){let C=Ug();C.position.set(-2.5+T%3*.26,T<3?.93:1.53,-3.2),p.parent.add(C),g.push(C)}n.userData.cans=g;let E=Ng();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new le;m.add(x(.06,.7,.9,F("#3A3C3A",{metalness:.5}),0,0,0));for(let T=0;T<6;T++)m.add(x(.08,.04,.8,F("#5A5C5A",{metalness:.6}),.02,-.28+T*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(x(1.4,.06,.8,F("#5A4632"),0,.75,.3));for(let T of[-.6,.6])for(let C of[-.32,.32])n.add(x(.05,.75,.05,F("#3A2E22"),T,.375,.3+C))}if(e.museo){let T=Nu(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});T.position.set(-2,2.6,-3.38),n.add(T)}let f=Ne(ve(360,480,T=>{T.fillStyle="#E8D8A0",T.fillRect(0,0,360,480),T.fillStyle="#7A2A1A",T.font="900 46px Fraunces",T.textAlign="center",T.fillText("REFUGIO",180,70),T.fillStyle="#3A3A2A",T.fillRect(80,140,200,140),T.fillStyle="#E8D8A0",T.beginPath(),T.moveTo(60,150),T.lineTo(180,90),T.lineTo(300,150),T.fill(),T.fillStyle="#7A2A1A",T.font="700 30px Inter",T.fillText("1962",180,340)}),.5,.66);f.position.set(2.6,2.3,-3.38),n.add(f);let v=[];for(let T of[-1.6,1.6]){let C=new k(new Tt(.09,12,10),Uu("#FFD089",t?0:2.2));C.position.set(T,3.1,-.6),n.add(C),v.push(C),n.add(x(.22,.02,.22,F("#333"),T,3.2,-.6,!1))}let _=[];if(!t)for(let T of[-1.6,1.6]){let C=new je("#FFC27A",11,10,1.4);C.position.set(T,2.9,-.4),C.castShadow=T<0,n.add(C),_.push(C)}let y=new De(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let T=Ut(1.7,2.4,"#FFF4D8",3.2);T.position.set(0,1.2,-3.5),n.add(T);let C=ms(2.2,8,"#FFE8B8",.3);C.position.set(0,1.4,-.6),C.rotation.set(-1.25,0,0),n.add(C);let S=new Bn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[T,C,S]}let D=He(5),R=[];for(let T=0;T<26;T++){let C=lt("#FFE8C0",.04,t?.2:.5);C.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(C),R.push(C)}n.userData.dust=R};Te.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Ue(t?"#1A1E28":"#C8D0B8",t?.045:.022),xt(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ma(n,t?"#2A3A24":"#6E8A48");let i=He(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||hn(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new k(new Tt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),F(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(gs(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(x(1.5,2,.1,F("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=Nu(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=Og();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new De("#6A7A9A","#1A1E1A",.75));let a=new De("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=nt("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new qe({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new k(new yn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[p,g,E,m]=u.userData.p;u.position.set(p+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new De("#E9EEFF","#5A6A4A",.95)),n.add(nt("#FFD29A",2.6,[-12,16,10],16,70))};Te.puente=(n,e)=>{let t=!!e.normal;n.fog=new Ue("#C8D8E0",t?.02:.012),xt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new De("#E9EEFF","#5A6A4A",1)),n.add(nt("#FFE2B0",2.6,[-10,18,12],16,80));let i=He(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){ma(n,"#6E8A48");let l=new k(new be(3.4,60),F("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(x(1.4,.14,5,F("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(x(.08,.5,5,F("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(x(.1,.6,.1,F("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)hn(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=gs(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),ma(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)hn(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new k(new be(14,200),new Ie({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new k(new js(1.5+i()*2),F("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=F("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=x(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new k(new er(new as(c),60,.025,6),F("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(x(.015,1,.015,F("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(x(.18,1.6,.18,F("#6A4630"),d,.8,l*.55))}n.userData.y=0};Te.marte=(n,e)=>{n.background=new de("#10141A"),n.fog=new Ue("#1A2028",.05);let t=new k(new Ke(2.4,2.4,30,28,1,!0),new Ie({color:"#C8CCD0",side:Qt,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(x(3.6,.1,30,F("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new k(new tn(2.38,.05,6,28),F("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=Ut(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(x(.6,.5,1.8,F("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(x(.05,.6,.5,F("#2A3A4A"),r*1.75,1.6,-o*3));let a=Ut(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Ne(Nt(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new De("#E8F0FF","#4A505A",.9));let s=new je("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};Te.biosfera=(n,e)=>{n.fog=new Ue("#F2D8B0",.012),xt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),ma(n,"#D8B07A");let t=He(31);for(let l=0;l<8;l++){let c=new k(new Nn(8+t()*8,6+t()*6,6),F("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new le;c.add(x(.3,1.6+t(),.3,F("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ie({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:_t}),s=new qe({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new Nn(l,l*1.1,4,4);for(let u of[i,s]){let p=new k(d,u);p.rotation.y=Math.PI/4,p.position.set(c,l*.55,h),n.add(p)}};r(5,-3,-12),r(3.4,5,-10);let o=new Tt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new k(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)hn(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Ne(Nt(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new De("#FFF0DC","#B08A6A",1.05)),n.add(nt("#FFD29A",3,[-14,16,10],20,70))};Te.noria=(n,e)=>{Te.parque(n,{dusk:!0});let t=new le,i=F("#E8E2D2",{metalness:.4,roughness:.4}),s=new k(new tn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=x(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new le;c.add(x(.7,.6,.6,F(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=lt("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=x(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var Vr=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e}),On=(n="#A8ACB0")=>F(n,{metalness:.75,roughness:.32}),ga=(n="#9EA2A6")=>{let e=ve(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=He(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Ie({map:e,metalness:.7,roughness:.35})},Bu=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Ne(Nt([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function Ou(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new Rn(e);i.colorSpace=Lt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new k(new be(.5,.31),new qe({map:i,toneMapped:!1}));return r.userData.set=s,r}function Hg(){let n=new le;n.add(x(.36,.9,.03,On("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new k(new Ke(.04,.04,.02,16),Vr("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Ne(Nt([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new k(new Ke(.05,.05,.025,16),Vr("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Ne(Nt(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new le;for(let o=0;o<5;o++)r.add(x(.16,.012,.01,F("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}Te.ascensor=(n,e)=>{n.background=new de("#08090C"),n.fog=new Ue("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=ga("#A4A8AC"),o=x(2.6,.1,2.4,F("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new k(new be(2.4,2),new Ie({map:(()=>{let R=ve(256,256,T=>{T.fillStyle="#4A4440",T.fillRect(0,0,256,256),T.strokeStyle="#3A3430",T.lineWidth=3;for(let C=0;C<256;C+=32)T.beginPath(),T.moveTo(C,0),T.lineTo(C,256),T.stroke(),T.beginPath(),T.moveTo(0,C),T.lineTo(256,C),T.stroke()});return R.wrapS=R.wrapT=qt,R.repeat.set(3,3),R})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(x(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(x(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(x(2.6,.08,2.4,F("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(x(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(x(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(x(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=On("#B4B8BC"),c=x(.56,2.2,.04,l,-.28,1.1,i+.03),h=x(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(x(.01,2.2,.045,F("#555"),0,1.1,i+.04));let d=x(1.1,2.2,.02,F("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=R=>{c.position.x=-.28-.55*R,h.position.x=.28+.55*R};let u=Ou(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let p=Hg();p.position.set(.85,1.25,i+.05),n.add(p),n.userData.botonera=p;for(let R of[-1,1])n.add(x(.04,.04,1.8,On("#C8CCD0"),R*(t-.06),.95,-.5));let g=new k(new be(1.5,1.5),new Ie({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(x(.02,1.56,1.56,F("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Ne(Nt(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=Ut(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let f=new je("#FFF4E4",10,7,1.4);f.position.set(0,s-.3,-.3),f.castShadow=!0,n.add(f);let v=new k(new yn(.3,.06,.14),Vr("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new je("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new De("#E8ECF0","#3A3634",.5);n.add(y);let D=new je("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(R,T=0)=>{let C=Math.max(0,Math.min(1,R))*(1-T);m.material.emissiveIntensity=1.6*C,f.intensity=10*C,v.material.emissiveIntensity=2.4*(1-C),_.intensity=9*(1-C),y.intensity=.14+.36*C,y.color.set(C>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-C)},n.userData.luz(e.luz??1)};Te.rellano=(n,e)=>{let t=!!e.night;n.background=new de("#14120F"),n.fog=new Ue("#2A2620",.035),n.add(si(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(x(6.38,3.4,.3,F(i),-3.81,1.7,-3.2)),n.add(x(6.38,3.4,.3,F(i),3.81,1.7,-3.2)),n.add(x(1.24,1.2,.3,F(i),0,2.8,-3.2)),n.add(x(.3,3.4,10,F(i),-5,1.7,0)),n.add(x(.3,3.4,10,F(i),5,1.7,0)),n.add(x(14,.2,10,F("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(x(6.3,.9,.02,F(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(x(1.5,.12,.1,On("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(x(.12,2.3,.1,On("#9EA2A6"),E*.69,1.13,-3.02));let s=new le;s.add(x(1.3,.05,1.6,F("#4A4440"),0,0,-.8)),s.add(x(1.3,2.2,.05,ga(),0,1.1,-1.6));for(let E of[-1,1])s.add(x(.05,2.2,1.6,ga(),E*.65,1.1,-.8));let r=Ut(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new je("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=On("#B4B8BC"),l=x(.62,2.2,.05,a,-.31,1.1,-3),c=x(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=Ou(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=x(.1,.2,.03,On(),.95,1.2,-3.03);n.add(d);let u=new k(new Tt(.03,10,8),Vr("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let p=Bu(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(p.position.set(1.5,2.2,-3.03),n.add(p),e.portal){let E=new le;for(let f=0;f<12;f++)E.add(x(.36,.26,.04,F("#8E6242"),-.6+f%4*.4,-Math.floor(f/4)*.3,0)),E.add(x(.2,.02,.02,F("#2A2A2A"),-.6+f%4*.4,-Math.floor(f/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(x(.04,2.6,2,F("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Ne(Nt(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(x(1,2.2,.06,F("#6B4A33"),E,1.1,-3.02));let f=Ne(Nt([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);f.position.set(E,1.85,-2.98),n.add(f);let v=new k(new Tt(.04,10,8),On("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new k(new Tt(.16,14,10),Vr("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let f=new je("#FFE0B0",t?6:9,9,1.4);f.position.set(E,2.9,-.8),f.castShadow=E<0,n.add(f)}n.add(new De("#F4ECE0","#4A4034",t?.35:.6))};var Xi=3;Te.hueco=(n,e)=>{n.background=new de("#05060C"),n.fog=new Ue("#0A0C18",.02),xt(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),Sn(n,1600,220,3),Zn(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*Xi,i=F("#3A3A42",{roughness:.95});n.add(x(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(x(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*Xi;if(n.add(x(4.1,.14,.1,F("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(x(4.1,.25,3.2,F("#5A5A64"),0,-.12,-.8)),g<=12){let m=Ne(Nt([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(x(.08,t,.08,On("#7A7E84"),g*1.75,t/2,-1.6));let s=new le,r=ga("#A4A8AC");s.add(x(2.6,.12,2.2,F("#3A3634"),0,0,0)),s.add(x(2.6,.1,2.2,F("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(x(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(x(2.6,2.8,.08,r,0,1.4,-1.1));let o=Ut(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new je("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new je("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(x(.4,.3,.4,F("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=x(.18,.3,.18,F("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new k(new Ke(.6,.6,.3,24),On("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new k(new Ke(.018,.018,1,6),On("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=x(.7,1.6,.3,F("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new k(new Ke(.03,.03,1,6),On("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let D=Math.max(.01,(t-m)*(1-E));_.scale.y=D,_.position.set(y,t-D/2,-.6)});let f=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*Xi);for(let g=0;g<=12;g+=2){let E=new je("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*Xi+2.2,.4),n.add(E)}n.add(new De("#6A78A8","#101018",.5));let p=He(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let f=p()<.55,v=Ut(.8,1,f?"#FFD890":"#1A1C2A",f?1.2:.2);v.position.set(E*(3.2+m*1.6),g*Xi+1.6,-.6),n.add(v),n.add(x(1.4,Xi,.2,F("#2A2A34"),E*(3.2+m*1.6),g*Xi+Xi/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};Te.feria=(n,e)=>{n.background=new de("#2A2018"),n.fog=new Ue("#6A5A44",.03),n.add(si(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(x(.25,12,.25,F("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new k(new tn(2,.1,6,24,Math.PI),F("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=Ut(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(x(.6,.4,.02,F(t[l%3]),-8+l*2,9.5,-6));let i=F("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(x(.25,9,.25,i,l*1.4,4.5,-3));n.add(x(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=x(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new k(new Ke(.4,.4,.15,18),F("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new le;r.add(x(2.4,.15,1.8,F("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(x(.08,1,.08,i,l*1.1,.5,.8));r.add(x(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=x(.16,.2,.16,F("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new k(new Ke(.03,.03,1,6),F("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Ne(Nt(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new De("#FFE8C8","#5A4A38",.9)),n.add(nt("#FFD8A0",2.2,[-6,14,8],14,50))};var zg=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));Te.escalera=(n,e)=>{n.background=new de("#1E1A16"),n.fog=new Ue("#2A2620",.04),n.add(si(14,10,"#C8B898","#B8A888",8)),n.add(x(16,7,.3,F("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=x(.34,.18*(15-o),1.6,F("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(x(.34,.03,1.62,F("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(x(2.6,2.6,1.6,F("#B8A890"),-4.3,1.3,-1.3));let i=new k(new Ke(.03,.03,5.7,8),F("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(x(.025,.9,.025,F("#2A2A2E"),-2.9+o*.32,zg(-2.9+o*.32)+.45,-.5));let s=Bu(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=Ut(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new je("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new De("#F4ECE0","#4A4034",.6))};var Wr=[],kg=999,Gg=n=>n+1<da.length?da[n+1]:kg,uh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Vg=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[uh(i,s,t),s,uh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,uh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},ae=(n,e)=>{let t=da[n],i=Gg(n),s=Math.min(i,522.5)-t;Wr.push([(r,o)=>Au(r,o,Vg(e(s,t),s)),t,i])};var Xr=n=>({tipo:"humano",...n}),Ge=(n={})=>Xr({glow:.1,...n});var Gu=(n={})=>Xr({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var Vu=(n={})=>Xr({outfit:"jaleco",hair:"old",hairc:"#E8E2D8",glasses:!0,glow:0,...n});var Z=(n,e,t=0)=>xu(e,n+t)-n,mt=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Ne(Nt(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},Ht=(n,e,t,i,s={})=>mt(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Fn=(n,e,t,i,s={})=>mt(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var te=(n,e,t,i=1e9,s)=>{let r=pn(t,t+.2,e)*(1-pn(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&ps(n,s)},Ea=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]});var mh=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),$n=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),Wu=n=>n.pose({armL:[12,8],armR:[95,0]});var ya=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e},Wg=n=>{let e=[-1,1].map(t=>{let i=lt("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)};var qi=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=lt(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},Xg=n=>{let e=[0,1,2].map(()=>{let t=Ne(oh("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),ps(o,s)})};var Es=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),Su(t),e.p2&&e.p2(t,i)}}),qg=(n={})=>Es(Gu,{x:2.75,z:-.6,y:.97,...n});var Xu=(n,e,t=-.1)=>{let i=ya(e);n.position.set(i.x-.1,i.y+t,i.z+.1)},$t=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Xr({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},dr=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Ne(Tu(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var va=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)},_a=(n,e,t=5,i=7)=>{let s=new je("#FFD8A0",t,i,1.6);return s.position.set(...e),n.add(s),s};var Hu=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],fh=(n,e={})=>{let[t,i,s]=Hu[n%Hu.length];return Xr({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},ph=(n=0,e={})=>fh(n,{outfit:"jaleco",glasses:!0,...e}),ys={bg:"#C9361F",fg:"#fff"},ur={bg:"#2F5A9A",fg:"#fff"};var wt=(n,e,t,i,s=2.2)=>{let r={y:mt,w:Ht,p:Fn,r:(l,c,h,d)=>mt(l,c,h,d,ys),b:(l,c,h,d)=>mt(l,c,h,d,ur)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:Z(e,l));return(l,c)=>o.forEach((h,d)=>te(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var Yg=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(x(s,.08,r,F(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(x(.07,i,.07,F("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))};var Zg=(n,e={})=>ve(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),$g=(n,e)=>{let t=new le;t.add(x(.62,1.18,.06,F("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new k(new be(.56,1.04),new qe({map:Zg(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t},Jg=(n,e,t="")=>ve(400,520,i=>{i.fillStyle=e,i.fillRect(0,0,400,520),i.fillStyle="#fff",i.font="900 54px Fraunces",i.textAlign="center",i.fillText(n,200,80),i.fillStyle="#43C4B4",i.beginPath(),i.roundRect(100,340,200,200,50),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(200,250,92,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(170,245,16,22,0,0,7),i.ellipse(230,245,16,22,0,0,7),i.fill(),t&&(i.fillStyle="#F2C14E",i.font="900 36px Inter",i.fillText(t,200,140))}),Qg=(n,e,t,i)=>{let s=new k(new be(t,t*1.3),new Ie({map:Jg(n,e,i),roughness:.6}));return s.castShadow=!0,s},st=(n={})=>Gu({glow:0,...n});var Yi={bg:"#D66A86",fg:"#fff"},fr={exposure:.95,bloom:.42},Aa=(n,e=.35,t="#E8667F")=>{let i=Ne(oh("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},Ma=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)};var zu=(n,e,t)=>{let i=e.split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s},Kg=(n,e,t,i)=>{n.fillStyle="#F2C14E",n.beginPath(),n.arc(e,t,i,0,7),n.fill(),n.fillStyle="#2A2A34",n.beginPath(),n.arc(e-i*.35,t-i*.2,i*.12,0,7),n.arc(e+i*.35,t-i*.2,i*.12,0,7),n.fill(),n.strokeStyle="#2A2A34",n.lineWidth=i*.12,n.beginPath(),n.arc(e,t+i*.05,i*.5,.3,Math.PI-.3),n.stroke()},jg=(n,e,t,i,s="#E8445A")=>{n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.6,t-i*1.3,e,t-i*.45),n.bezierCurveTo(e+i*.6,t-i*1.3,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()},eE=(n,e,t)=>{n.fillStyle="#10131F",n.fillRect(0,0,540,1e3),n.fillStyle="#1E2336",n.fillRect(0,0,540,150),n.fillStyle="#E8667F",n.beginPath(),n.arc(70,92,34,0,7),n.fill(),n.fillStyle="#4A2A1A",n.beginPath(),n.arc(70,92,26,Math.PI,0),n.fill(),n.fillStyle="#fff",n.textAlign="left",n.font="800 34px Inter",n.fillText(t.name||"MI CRUSH \u2665",120,88),n.font="600 24px Inter",n.fillStyle=t.off?"#8A90A0":"#5FD08A",n.fillText(t.off?"desconectada":t.typing?"escribiendo\u2026":"en l\xEDnea",120,122),n.fillStyle="#C8CCD8",n.font="700 26px Inter",n.textAlign="right",n.fillText(t.hora||"00:00",515,40);let i=190;n.font="700 36px Inter";for(let[s,r]of e){if(r==="@smile"||r==="@heart"){let h=s==="r"?440:100;r==="@smile"?Kg(n,h,i+50,46):jg(n,h,i+50,44),i+=120;continue}if(s==="s"){n.font="900 40px Inter";let h=zu(n,r,420),d=h.length*50+34;n.fillStyle="#C9361F",n.beginPath(),n.roundRect(40,i,460,d,20),n.fill(),n.fillStyle="#fff",n.textAlign="center",h.forEach((u,p)=>n.fillText(u,270,i+52+p*50)),i+=d+24,n.font="700 36px Inter";continue}let o=zu(n,r,330),a=Math.max(...o.map(h=>n.measureText(h).width))+44,l=o.length*46+30,c=s==="r"?500-a:40;n.fillStyle=s==="r"?"#2E7D6A":"#EDEFF5",n.beginPath(),n.roundRect(c,i,a,l,26),n.fill(),n.fillStyle=s==="r"?"#fff":"#1A1C24",n.textAlign="left",o.forEach((h,d)=>n.fillText(h,c+22,i+46+d*46)),t.strike&&t.strike.includes(r)&&(n.strokeStyle="#FF5A5A",n.lineWidth=6,n.beginPath(),n.moveTo(c+10,i+l/2),n.lineTo(c+a-10,i+l/2),n.stroke()),i+=l+20}},qu=(n,e,t,i,s={})=>{let r=new le;r.add(x(t*1.08,t*1.95,.06,F("#1A1A24",{metalness:.4}),0,0,0,!1));let o=document.createElement("canvas");o.width=540,o.height=1e3;let a=o.getContext("2d"),l=new Rn(o);l.colorSpace=Lt;let c=new k(new be(t,t*1.852),new qe({map:l,toneMapped:!1}));c.position.z=.032,r.add(c),r.position.set(...e),n.add(r);let h=new je("#9FC0FF",1.5,3,1.6);h.position.set(e[0],e[1],e[2]+.8),n.add(h);let d="";return r.userData.upd=(u,p={})=>{let g=i.filter(f=>u>=f[2]).map(f=>[f[0],f[1]]),E={...s,...p},m=JSON.stringify([g,E]);m!==d&&(d=m,eE(a,g.slice(-(E.max||7)),E),l.needsUpdate=!0)},r.userData.upd(0),r},tE=(n,e)=>ve(1024,512,t=>{t.clearRect(0,0,1024,512),t.fillStyle="#F2C14E",t.font="900 230px Fraunces",t.textAlign="center",t.fillText(n,512,270),t.fillStyle="#FBF7EC",t.font="900 70px Inter",t.fillText(e,512,400)}),nE=n=>ve(512,512,e=>{e.clearRect(0,0,512,512);for(let t=0;t<24;t++){let i=-Math.PI/2+t/24*Math.PI*2;e.strokeStyle=t<n?"#E8667F":"#3A3E4C",e.lineWidth=34,e.beginPath(),e.arc(256,256,220,i+.03,i+Math.PI*2/24-.03),e.stroke()}}),iE=(n,e,t,i)=>ae(n,s=>({amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=Ne(nE(e),2.6,2.6);o.position.set(0,1.5,-1),r.add(o);let a=Ne(tE(t,i),2.4,1.2);a.position.set(0,1.5,-.95),a.renderOrder=6,r.add(a);let l=qi(r,8,"#FFB0C0");return{update:c=>{o.rotation.z=-c*.1;let h=pn(0,.25,c);a.scale.setScalar(.6+.4*h),l(c,[0,1.5,-.9,1.4])}}},c:[[0,1.5,2.4],[0,1.5,-1],[0,1.5,2],[0,1.5,-1]],range:3,blur:4,look:{bloom:.5}}));var ku=n=>ve(512,400,e=>{e.clearRect(0,0,512,400),e.fillStyle="#F2A6B4";for(let[t,i,s]of[[170,170,110],[300,150,120],[380,210,90],[230,250,100],[130,250,70]])e.beginPath(),e.arc(t,i,s,0,7),e.fill();e.fillStyle="#E08A9A",e.fillRect(250,300,50,80),e.strokeStyle="#D0788A",e.lineWidth=9;for(let t=0;t<9;t++)e.beginPath(),e.arc(150+t%3*100,130+Math.floor(t/3)*70,34,t,t+2.4),e.stroke();if(n){let t=e.createRadialGradient(270,230,5,270,230,120);t.addColorStop(0,"rgba(255,240,120,1)"),t.addColorStop(1,"rgba(255,200,60,0)"),e.fillStyle=t,e.beginPath(),e.arc(270,230,120,0,7),e.fill()}}),gh=(n,e,t=1.6)=>{let i=Ne(ku(!1),t,t*.78),s=Ne(ku(!0),t,t*.78);for(let r of[i,s])r.position.set(...e),r.renderOrder=4,n.add(r);return s.position.z+=.01,s.visible=!1,r=>{s.visible=r}},sE=(n,e={})=>ve(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),hr=(n,e,t,i,s)=>{let r=Ne(sE(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r};var rE=(n,e=-2.5,t="#BFD8DA")=>{let i=ve(512,512,r=>{r.fillStyle=t,r.fillRect(0,0,512,512),r.strokeStyle="#E8F2F2",r.lineWidth=6;for(let o=0;o<=8;o++)r.beginPath(),r.moveTo(o*64,0),r.lineTo(o*64,512),r.stroke(),r.beginPath(),r.moveTo(0,o*64),r.lineTo(512,o*64),r.stroke()});i.wrapS=i.wrapT=qt,i.repeat.set(4,2);let s=new k(new be(12,5),new Ie({map:i,roughness:.3}));return s.position.set(0,2.5,e),n.add(s),s},oE=(n,e,t)=>{n.add(x(1.2,1.7,.06,F("#8E6242"),e,1.6,t));let i=new k(new be(1.05,1.55),new qe({color:"#A8C4D8"}));i.position.set(e,1.6,t+.035),n.add(i)},aE=(n,e,t,i=1.3)=>mt(n,[t],i,e,{bg:"#1E2230",fg:"#FF7A8A"}),qr=n=>{let e=Ru(["INSTITUTO"],2.6,{bg:"#2F5A9A",fg:"#fff"});e.position.set(0,3.2,-4.2),n.add(e)},lE=(n,e)=>{let t=ah(n,e,4.2,1.6,{bg:"#2F5A48",fg:"#F4F0E4",size:64,font:"Caveat",w:1024,h:390});return t.position.set(0,2.3,-3.38),t};var Yu=()=>{let n=new le;return n.add(x(.32,.1,.12,F("#E0A860"),0,0,0)),n.add(x(.3,.03,.13,F("#C9361F"),0,.055,0)),n.add(x(.32,.07,.12,F("#E0A860"),0,.1,0)),n},Sa=(n={})=>({amb:"aula",fov:32,...n}),ba=n=>lE(n,["x\xB2 + 3x = 10","x = ?"]);var cE={bg:"#6A3AB8",fg:"#FFFFFF"},oi={bloom:.45,bloomT:.85,vig:.55},kt=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||60,a=Math.round(Math.max(640,Math.max(...r.map(d=>d.length))*o*.6+220)),l=Math.round(o*1.2*r.length+230),c=bu(r,{w:a,h:l,size:o,bg:s.bg||"#EFE6FF",fg:s.fg||"#4A2A8A",tail:s.tail||"left"}),h=Ne(c,t,t*l/a);return h.position.set(...i),h.renderOrder=6,n.add(h),h},pr=(n,e,t,i={})=>{let s=t.map(([o,,a,l=1.6,c={}])=>kt(n,o,l,a,{...i,...c})),r=t.map(([,o])=>typeof o=="number"?o:Z(e,o));return(o,a)=>s.forEach((l,c)=>te(l,o,r[c],i.keep?1e9:c+1<r.length?r[c+1]-.1:1e9,a))},hE=()=>ve(256,256,n=>{n.clearRect(0,0,256,256),n.strokeStyle="#C8A8FF",n.lineWidth=12,n.beginPath(),n.arc(128,128,108,0,7),n.stroke()}),rn=(n,e=3,t)=>{let i=[...Array(e)].map(()=>{let r=Ne(hE(),.6,.6);return r.renderOrder=5,r.castShadow=!1,n.add(r),r}),s=new I;return(r,o,a,l=1)=>{o.head.getWorldPosition(s),i.forEach((c,h)=>{let d=(r*.6+h/e)%1;c.visible=l>.01,c.position.copy(s),c.scale.setScalar(.7+d*1.4),c.material.opacity=l*(1-d)*.85,ps(c,a)})}},Pn=n=>{let e=new le,t=new k(new tn(.34,.035,8,24,Math.PI),F("#E8667F"));e.add(t);for(let i of[-1,1]){let s=new k(new Ke(.09,.09,.07,16),F("#E8667F"));s.rotation.z=Math.PI/2,s.position.set(i*.34,0,0),e.add(s)}return n.head.add(e),e},Ta=n=>{let e=new k(new Nn(.05,.26,8),F("#111"));return e.position.set(.06,.36,0),e.rotation.z=-.35,n.head.add(e),e},dE=()=>{let n=ve(1024,256,e=>{e.fillStyle="#BFE0F2",e.fillRect(0,0,1024,256);let t=He(5);for(let i=0;i<24;i++){e.fillStyle=["#D88A6A","#E8C27A","#8AA8C8","#C8B8A0"][i%4];let s=40+t()*60,r=60+t()*150;e.fillRect(i*44,256-r,s,r)}e.fillStyle="#6EAA50";for(let i=0;i<12;i++)e.beginPath(),e.arc(i*90+30,236,32,0,7),e.fill()});return n.wrapS=qt,n},Zu=n=>{n.add(x(12,3.4,.1,F("#E8E2D2"),0,1.7,-1.8));let e=dE(),t=new k(new be(9,1.1),new qe({map:e,toneMapped:!1}));t.position.set(0,1.9,-1.74),n.add(t);for(let s of[-4.5,-1.5,1.5,4.5])n.add(x(.12,1.2,.05,F("#C8C2B2"),s,1.9,-1.72));for(let s of[-3.2,-1.8,-.4,1,2.4,3.8])n.add(x(.9,.45,.55,F("#2F5A9A"),s,.45,-1.3)),n.add(x(.9,.75,.12,F("#2F5A9A"),s,.95,-1.55));for(let s of[-2.2,.4,3]){let r=new k(new Ke(.03,.03,3.4,8),F("#F2C14E",{metalness:.5,roughness:.3}));r.position.set(s,1.7,-.4),n.add(r)}let i=Ne(Nt(["AUTOB\xDAS 7 \xB7 INSTITUTO"],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:900,h:140}),2.4,.37);return i.position.set(0,2.85,-1.7),n.add(i),s=>{e.offset.x=s*.09}},$u=(n,e=-1.2)=>{let t=new k(new tn(.95,.5,20,48),F("#F4F2EE",{roughness:.35}));t.rotation.y=Math.PI/2,t.position.set(e,1.15,-.4),n.add(t),n.add(x(.9,.7,2.4,F("#E8E6E0"),e,.35,-.4)),n.add(x(2.6,.14,.7,F("#DDE6EE"),e+1.2,.78,-.4)),n.add(x(.4,.7,.4,F("#B8C0C8"),e+2.2,.35,-.4));let i=lt("#7FD0FF",.9,0);return i.position.set(e,1.15,-.4),n.add(i),i},uE=(n,e,t)=>{let i=new Bn("#FFF2C0",40,9,.32,.45,1.2);i.position.set(e,5,t+1.2),i.target.position.set(e,0,t),n.add(i,i.target);let s=new k(new Un(.75,32),new qe({color:"#FFF2C0",transparent:!0,opacity:.35,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.set(e,.02,t),n.add(s),[i,s]},fE=n=>ve(512,360,e=>{e.clearRect(0,0,512,360),e.fillStyle="#EFE6FF",e.strokeStyle="#2A2A34",e.lineWidth=8,e.beginPath(),e.ellipse(256,160,236,150,0,0,7),e.fill(),e.stroke();for(let[t,i,s]of[[150,320,18],[118,348,10]])e.beginPath(),e.arc(t,i,s,0,7),e.fill(),e.stroke();if(e.save(),e.beginPath(),e.ellipse(256,160,228,142,0,0,7),e.clip(),e.filter="blur(3px)",n==="playa"&&(e.fillStyle="#8AC8F2",e.fillRect(0,0,512,180),e.fillStyle="#2F7AB8",e.fillRect(0,180,512,60),e.fillStyle="#F2D79A",e.fillRect(0,240,512,120),e.fillStyle="#F2C14E",e.beginPath(),e.arc(380,90,44,0,7),e.fill()),n==="pan"){e.fillStyle="#F6E7C8",e.fillRect(0,0,512,360),e.fillStyle="#D8A050",e.beginPath(),e.ellipse(256,180,150,70,-.15,0,7),e.fill(),e.strokeStyle="#B87830",e.lineWidth=10;for(let t=-2;t<=2;t++)e.beginPath(),e.moveTo(256+t*50-20,150),e.lineTo(256+t*50+20,200),e.stroke();e.strokeStyle="#C8C0B0",e.lineWidth=6;for(let t=0;t<3;t++)e.beginPath(),e.moveTo(200+t*50,100),e.quadraticCurveTo(220+t*50,70,200+t*50,40),e.stroke()}if(n==="musica"&&(e.fillStyle="#2A2050",e.fillRect(0,0,512,360),e.fillStyle="#F2C14E",e.font="900 150px Inter",e.textAlign="center",e.fillText("\u266A \u266B \u266A",256,220)),n==="nada"&&(e.fillStyle="#D8D4E0",e.fillRect(0,0,512,360)),n==="pizza"){e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#E8A040",e.beginPath(),e.moveTo(256,300),e.lineTo(130,60),e.quadraticCurveTo(256,20,382,60),e.fill(),e.fillStyle="#C9361F";for(let[t,i]of[[230,110],[290,130],[256,190],[215,70],[310,75]])e.beginPath(),e.arc(t,i,18,0,7),e.fill()}if(n==="tele"&&(e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#2A2A34",e.beginPath(),e.roundRect(130,70,252,170,16),e.fill(),e.fillStyle="#8AC8F2",e.fillRect(146,86,220,138),e.fillStyle="#F2C14E",e.beginPath(),e.moveTo(230,120),e.lineTo(290,155),e.lineTo(230,190),e.fill(),e.fillStyle="#2A2A34",e.fillRect(240,240,32,30)),n==="gato"){e.fillStyle="#BFE0F2",e.fillRect(0,0,512,360),e.fillStyle="#2A2A34",e.beginPath(),e.arc(256,190,70,0,7),e.fill(),e.beginPath(),e.moveTo(200,150),e.lineTo(205,80),e.lineTo(245,125),e.fill(),e.beginPath(),e.moveTo(312,150),e.lineTo(307,80),e.lineTo(267,125),e.fill(),e.fillStyle="#F2C14E",e.beginPath(),e.arc(230,180,12,0,7),e.arc(282,180,12,0,7),e.fill(),e.fillStyle="#2F7AB8";for(let t=0;t<6;t++)e.beginPath(),e.arc(150+t*45,290,14,0,7),e.fill()}if(n==="calcetin"&&(e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#C9361F",e.beginPath(),e.roundRect(220,60,70,170,16),e.fill(),e.beginPath(),e.roundRect(220,180,150,70,30),e.fill(),e.fillStyle="#FBF7EC",e.fillRect(220,60,70,26)),n==="galleta"){e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#C88A4A",e.beginPath(),e.arc(256,180,100,0,7),e.fill(),e.fillStyle="#4A2A1A";for(let[t,i]of[[220,150],[290,160],[250,220],[300,220],[210,200]])e.beginPath(),e.arc(t,i,12,0,7),e.fill()}if(n==="libro"&&(e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#2F5A9A",e.beginPath(),e.roundRect(180,70,150,200,10),e.fill(),e.fillStyle="#F2C14E",e.fillRect(205,110,100,18)),n==="casa"){e.fillStyle="#3A3E5C",e.fillRect(0,0,512,360),e.fillStyle="#C8B8A0",e.fillRect(176,150,160,130),e.fillStyle="#8A4A3A",e.beginPath(),e.moveTo(156,155),e.lineTo(256,70),e.lineTo(356,155),e.fill(),e.fillStyle="#5A6A8A";for(let t=0;t<14;t++)e.fillRect(40+t*32,20+t*53%120,4,30)}n==="yo"&&(e.fillStyle="#FFE8F0",e.fillRect(0,0,512,360),e.fillStyle="#111",e.beginPath(),e.arc(256,150,70,0,7),e.fill(),e.fillStyle="#43C4B4",e.beginPath(),e.roundRect(196,210,120,110,30),e.fill(),e.fillStyle="#fff",e.beginPath(),e.arc(232,140,10,0,7),e.arc(280,140,10,0,7),e.fill(),e.fillStyle="#E8445A",e.font="900 70px Inter",e.fillText("\u2665",340,110)),e.restore()}),ri=(n,e,t,i)=>{let s=Ne(fE(e),t,t*360/512);return s.position.set(...i),s.renderOrder=6,n.add(s),s},Eh=(n,e,t,i,s=1.5)=>{let r=t.map(([a])=>ri(n,a,s,i)),o=t.map(([,a])=>typeof a=="number"?a:Z(e,a));return(a,l)=>r.forEach((c,h)=>{c.visible=a>=o[h]&&(h+1>=o.length||a<o[h+1]),c.visible&&ps(c,l)})},bi=(n,e,t,i)=>iE(n,e,t,i);var Zi={exposure:1.05,bloom:.3},pE=()=>{let n=new le;return n.add(x(.03,.26,.03,F("#5FB0E8"),0,0,0,!1)),n.add(x(.05,.06,.04,F("#FFFFFF"),0,.14,.02,!1)),n};ae(0,(n,e)=>{let t=Z(e,"suena"),i=Z(e,"apagas");return{amb:"cuartoYo",fov:30,atores:[Es(Ge,{x:-.7,z:-1,y:.97,eyes:[[0,"shut"],[t+.3,"flat"]]})],extra:s=>{let r=zr(.45,7);r.position.set(.3,1.3,-1.6),s.add(r);let o=mt(s,["7:00"],.9,[-.2,2,-.8],{bg:"#1E2230",fg:"#F2C14E",size:96,w:400}),a=mt(s,["\xA1RIIIING!"],1.1,[-1.6,2,-.8],ys);return{update:(l,c,h)=>{r.rotation.z=l>t&&l<i?Math.sin(l*50)*.12:0,te(o,l,.2,99,h),te(a,l,t,i,h)}}},c:[[-1,1.8,2.8],[-1.1,1.1,-1],[-1,1.7,2.3],[-1.1,1.1,-1]],range:2.5,look:Zi}});ae(1,(n,e)=>({amb:"cuartoYo",fov:28,atores:[Ge({x:0,z:-.4,eyes:[[0,"wide"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[12,8],head:Math.sin(i*3)*8})})],extra:(t,i,s)=>{let r=rn(t),o=Fn(t,["UNA VOZ"],1,[1,2.05,-.4]);return{update:(a,l,c)=>{r(a,s[0],c,pn(.3,1,a)),te(o,a,.6,99,c)}}},c:[[0,1.65,2.8],[0,1.55,-.4],[0,1.65,2.3],[0,1.6,-.4]],range:2.5,look:Zi}));ae(2,(n,e)=>{let t=Z(e,"pasillo"),i=Z(e,"movil"),s=Z(e,"cabeza");return{amb:"cuartoYo",fov:30,atores:[Ge({x:0,z:-.4,eyes:[[0,"lookl"],[i,"look"],[s-.2,"wide"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[o>s-.3?150:12,40],head:o<i?14:o<s?-14:0})})],extra:(r,o,a)=>{let l=wt(r,e,[[["\u2717 EL PASILLO"],"pasillo","w",[-1.1,2.05,-.4],1.3,1],[["\u2717 EL M\xD3VIL"],"movil","w",[1.1,2.05,-.4],1.2,1],[["DENTRO DE TU CABEZA"],"cabeza","p",[0,.95,.2],2,1]]),c=rn(r);return{update:(h,d,u)=>{l(h,u),c(h,a[0],u,h>s-.2?1:.3)}}},c:[[0,1.65,3.2],[0,1.5,-.4],[0,1.65,2.6],[0,1.55,-.4]],range:2.5,look:Zi}});ae(3,(n,e)=>({amb:"cuartoElla",fov:30,atores:[qg({eyes:[[0,"shut"]]})],extra:t=>{let i=kt(t,["CINCO MINUTOS M\xC1S\u2026"],1.5,[1.1,1.8,-.3]),s=Xg(t);return{update:(r,o,a)=>{te(i,r,.1,99,a),s(r,[2,1.4,-.6],a)}}},c:[[1.6,1.8,2.4],[1.7,1.2,-.6],[1.6,1.7,2],[1.7,1.2,-.6]],range:2.5,look:Zi}));ae(4,(n,e)=>{let t=Z(e,"crush"),i=Z(e,"pensando");return{amb:"gris",fov:30,k:1,atores:[Ge({x:-1,z:-.5,eyes:[[0,"wide"],[t,"heart"]]}),st({x:1,z:-.5,eyes:[[0,"look"],[i-.3,"lookl"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[110,120],head:8})})],extra:(s,r,o)=>{let a=rn(s),l=mt(s,["TU CRUSH"],1.2,[1,2.25,-.5],Yi),c=kt(s,["\u2026"],.9,[1.6,2.15,-.6]),h=Fn(s,["EST\xC1 PENSANDO"],1.4,[0,.9,.1]);return{update:(d,u,p)=>{a(d,o[0],p),te(l,d,t-.2,i-.2,p),te(c,d,i-.2,99,p),te(h,d,i,99,p)}}},c:[[0,1.6,4],[0,1.5,-.5],[0,1.6,3.5],[0,1.5,-.5]],range:3,blur:6}});ae(5,(n,e)=>{let t=Z(e,"nadie"),i=Z(e,"hoy"),s=Z(e,"medianoche");return{amb:"gris",fov:28,k:1,atores:[],extra:r=>{let o=qu(r,[0,1.5,-.5],1.15,[["s","HOY PUEDES O\xCDR SU MENTE",i-.1],["s","HASTA MEDIANOCHE",s-.2]],{hora:"07:00",name:"SIN REMITENTE"}),a=Ht(r,["NADIE LO HA ESCRITO"],1.6,[0,.5,.5]);return{update:(l,c,h)=>{o.userData.upd(l),te(a,l,t-.3,i-.2,h),va(h,l>i&&l<i+.4?.02:0,l)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});ae(6,(n,e)=>{let t=Z(e,"suscribete");return{amb:"cuartoYo",fov:32,atores:[Ge({x:-1,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s>t?Ea(i,s):i.pose()})],extra:(i,s,r)=>{let o=Lu(2.4);o.position.set(.7,1.8,-1),i.add(o);let a=qi(i,14,"#FFE27A"),l=aE(i,[-1,2.35,-.3],"MENTE: HASTA MEDIANOCHE",2),c=rn(i);return{update:(h,d,u)=>{c(h,r[0],u,.6),te(l,h,.2,99,u);let p=pn(t-.3,t,h);o.scale.setScalar(Math.max(.01,p)),o.rotation.z=h>t+.6&&h<t+1.6?Math.sin(h*40)*.05:0,a(h,[.7,1.8,-.9,1.1],pn(t,t+.3,h))}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3,look:Zi}});ae(7,(n,e)=>{let t=Z(e,"cabeza");return{amb:"gris",fov:30,k:1,atores:[st({x:0,z:-.6,eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{let s=gh(i,[0,2.3,-.7],1),r=Fn(i,["\xBFQU\xC9 HAY DENTRO?"],1.6,[0,1.05,.1]),o=qi(i,10,"#C8A8FF");return{update:(a,l,c)=>{s(a>t),te(r,a,.3,99,c),o(a,[0,2.4,-.6,.8],a>t?1:0)}}},c:[[0,1.7,4.4],[0,1.7,-.6],[0,1.7,3.9],[0,1.7,-.6]],range:3,look:oi}});bi(8,7,"7:15","DE LA MA\xD1ANA");ae(9,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ge({x:-.6,z:-.4,eyes:[[0,"flat"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[100+Math.sin(i*16)*6,120]})})],extra:(t,i,s)=>{rE(t,-2),oE(t,-.6,-1.9);let r=pE();t.add(r);let o=rn(t),a=pr(t,e,[[["\xBFD\xD3NDE EST\xC1","MI OTRO CALCET\xCDN?"],"donde",[.9,2.15,-.3],1.7],[["\xBFHAY GALLETAS?"],"galletas",[.9,2.15,-.3],1.5],[["DEVOLVER EL LIBRO\u2026"],"tengo",[.9,2.15,-.3],1.6],[["\xBFPOR QU\xC9 LOS GATOS","ODIAN EL AGUA?"],"gatos",[.9,2.15,-.3],1.7]]),l=Eh(t,e,[["calcetin","donde"],["galleta","galletas"],["libro","tengo"],["gato","gatos"]],[1,1.15,-.3],1.1);return{update:(c,h,d)=>{let u=ya(s[0]);r.position.set(u.x+.05,u.y+.12,u.z+.1),o(c,s[0],d,.7),a(c,d),l(c,d)}}},c:[[.2,1.6,3.6],[.2,1.5,-.4],[.2,1.6,3.1],[.2,1.5,-.4]],range:3}));ae(10,(n,e)=>{let t=Z(e,"calcetines");return{amb:"gris",fov:30,k:1,atores:[Ge({x:0,z:-.4,eyes:[[0,"look"],[t-.2,"flat"]],pose:(i,s)=>i.pose({armL:[s>t?40:12,s>t?60:8],armR:[s>t?40:12,s>t?60:8],head:s>t?-8:0})})],extra:i=>{let s=wt(i,e,[[["\xBFSECRETOS?"],"secretos","p",[-1.05,2.05,-.4],1.1,1],[["\xBFPOES\xCDA?"],"poesia","p",[1.05,2.05,-.4],1,1]]),r=ri(i,"calcetin",.9,[-1.05,1.3,-.3]),o=ri(i,"gato",.9,[1.05,1.3,-.3]);return{update:(a,l,c)=>{s(a,c),te(r,a,t,99,c),te(o,a,t+.5,99,c)}}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.1],[0,1.6,-.4]],range:3}});ae(11,(n,e)=>{let t=Z(e,"cambiamos");return{amb:"lab",fov:32,atores:[ph(1,{x:1.2,z:-.3,eyes:[[0,"look"]],pose:Wu}),ph(4,{x:-1.3,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[60,70]})})],extra:i=>{let s=gh(i,[0,1.9,-.9],1.4),r=Fn(i,["CAMBIOS DE PENSAMIENTO"],2.1,[0,1.05,-.2]);return{update:(o,a,l)=>{s(Math.sin(o*7)>0&&o>t-.5),te(r,o,t,99,l)}}},c:[[0,1.7,3.8],[0,1.6,-.5],[0,1.65,3.3],[0,1.6,-.5]],range:3}});var Ju=["\xBFY?","\u2026","hambre","\u266A","sue\xF1o","\xA1ay!","\xBFeh?","mmm","fr\xEDo","\xBFqu\xE9?","jaja","uf"];ae(12,(n,e)=>{let t=Z(e,"6");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=mt(i,["6.200"],1.8,[0,1.75,-.3],{...cE,size:120,w:620,h:170}),r=Ht(i,["PENSAMIENTOS AL D\xCDA"],2,[0,1.05,-.2]),o=Ju.map((a,l)=>kt(i,[a],.62,[-2.1+l%6*.84,l<6?2.6:.45,-.9-l%3*.2],{size:70}));return{update:(a,l,c)=>{te(s,a,t-.1,99,c),te(r,a,t+.6,99,c),o.forEach((h,d)=>te(h,a,t+.2+d*.25,99,c))}}},c:[[0,1.55,4.3],[0,1.55,-.5],[0,1.55,3.8],[0,1.55,-.5]],range:3,blur:4,look:oi}});ae(13,(n,e)=>({amb:"gris",fov:30,k:1,atores:[st({x:0,z:-.5,eyes:[[0,"lookl"]],pose:(t,i)=>t.pose({head:Math.sin(i*2)*6})})],extra:t=>{let i=Ju.slice(0,6).map((r,o)=>kt(t,[r],.55,[-1.3+o%3*1.3,o<3?2.5:1.95,-.8],{size:70})),s=Ht(t,["CASI NINGUNO ES IMPORTANTE"],2.3,[0,.9,.1]);return{update:(r,o,a)=>{i.forEach((l,c)=>{te(l,r,c*.12,99,a)}),te(s,r,.4,99,a)}}},c:[[0,1.65,3.8],[0,1.65,-.5],[0,1.65,3.4],[0,1.65,-.5]],range:3}));bi(14,8,"8:00","EN EL AUTOB\xDAS");ae(15,(n,e)=>{let t=Z(e,"apaga"),i=Z(e,"palabras");return{amb:"gris",fov:32,k:1,atores:[Ge({x:-1.4,z:-.3,eyes:[[0,"look"],[t,"wide"]],pose:s=>s.pose({armL:[12,8],armR:[150,20]})}),st({x:1,z:-.3,eyes:[[0,"lookl"]],pose:s=>s.pose({armL:[150,20],armR:[12,8]})})],extra:(s,r,o)=>{let a=Zu(s),l=rn(s),c=kt(s,["bla bla bla\u2026"],1.2,[1.6,2.2,-.3]),h=wt(s,e,[[["ALGO RARO"],"raro","w",[-1.4,2.25,-.3],1.2],[["SE APAGA"],"apaga","r",[-1.4,2.25,-.3],1.1],[["NO HAY PALABRAS"],"palabras","p",[-1.2,2.25,-.3],1.6]]);return{update:(d,u,p)=>{a(d),h(d,p);let g=d<t-.2||d<i&&Math.sin(d*13)>0?1:0;l(d,o[0],p,g),te(c,d,.1,99,p),c.visible=c.visible&&g>0,va(p,.004,d)}}},c:[[-.2,1.65,3.8],[-.2,1.5,-.4],[-.2,1.65,3.4],[-.2,1.5,-.4]],range:3}});ae(16,(n,e)=>({amb:"gris",fov:30,k:1,atores:[st({x:.2,z:-.3,eyes:[[0,"shut"]],pose:t=>t.pose({armL:[150,20],armR:[12,8],head:6})})],extra:t=>{let i=Zu(t),s=Eh(t,e,[["playa","playa"],["pan","pan"],["musica","cancion"]],[-.9,2.1,-.3],1.5),r=wt(t,e,[[["UNA PLAYA BORROSA"],"playa","w",[-.9,1.2,-.2],1.6],[["OLOR A PAN"],"pan","w",[-.9,1.2,-.2],1.2],[["UNA CANCI\xD3N"],"cancion","w",[-.9,1.2,-.2],1.3]]);return{update:(o,a,l)=>{i(o),s(o,l),r(o,l)}}},c:[[-.3,1.7,3.2],[-.3,1.65,-.4],[-.3,1.7,2.8],[-.3,1.65,-.4]],range:3,look:oi}));ae(17,(n,e)=>{let t=Z(e,"russell"),i=Z(e,"pitido");return{amb:"lab",fov:32,atores:[Vu({x:1.1,z:-.3,eyes:[[0,"look"]],pose:(s,r)=>$n(s,r)}),$t(1,{x:-1,z:-.3,eyes:[[0,"look"],[i,"wide"]],pose:s=>s.pose({armL:[12,8],armR:[60,70]})})],extra:(s,r,o)=>{let a=x(.12,.18,.05,F("#2A2A34"),0,0,0,!1);s.add(a);let l=mt(s,["RUSSELL HURLBURT"],1.8,[1.1,2.3,-.3],ur),c=Ht(s,["\xBFQU\xC9 PENSABAS AHORA MISMO?"],2.2,[0,.9,.2]),h=mt(s,["\xA1PIP!"],.7,[-1,2.25,-.3],ys);return{update:(d,u,p)=>{Xu(a,o[1],.05),te(l,d,t-.2,99,p),te(c,d,Z(e,"pensando")-.2,99,p),te(h,d,i,99,p),h.visible=h.visible&&Math.sin(d*10)>-.3}}},c:[[0,1.7,3.8],[0,1.55,-.4],[0,1.65,3.3],[0,1.55,-.4]],range:3}});ae(18,(n,e)=>{let t=Z(e,"voz"),i=Z(e,"parte"),s=Z(e,"imagenes"),r=Z(e,"sensaciones"),o=Z(e,"nada");return{amb:"gris",fov:30,k:1,atores:[$t(3,{x:-.9,z:-.5,eyes:[[0,"look"],[s,"shut"]]})],extra:a=>{let l=kt(a,["BLA BLA BLA"],1.3,[-.3,2.3,-.5]),c=Eh(a,e,[["playa","imagenes"],["pan","sensaciones"],["nada","nada"]],[-.3,2.3,-.5],1.3),h=wt(a,e,[[["VOZ INTERIOR"],"voz","p",[1,1.9,-.3],1.6],[["SOLO A VECES"],"parte","r",[1,1.9,-.3],1.6],[["IM\xC1GENES"],"imagenes","y",[1,1.9,-.3],1.4],[["SENSACIONES"],"sensaciones","y",[1,1.9,-.3],1.6],[["NADA CONCRETO"],"nada","w",[1,1.9,-.3],1.7]]);return{update:(d,u,p)=>{te(l,d,t,s-.1,p),c(d,p),h(d,p)}}},c:[[0,1.7,3.8],[0,1.65,-.5],[0,1.7,3.3],[0,1.65,-.5]],range:3}});var mE=["playa","pizza","gato","musica","calcetin","galleta","tele","pan"];ae(19,(n,e)=>{let t=Z(e,"libro"),i=Z(e,"canal");return{amb:"gris",fov:30,k:1,atores:[st({x:.9,z:-.5,eyes:[[0,"lookl"]]})],extra:s=>{let r=ri(s,"libro",1.3,[-.6,2.05,-.4]),o=mE.map(c=>ri(s,c,1.3,[-.6,2.05,-.4])),a=Ht(s,["NO ES COMO LEER UN LIBRO"],2.2,[-.3,.95,.1]),l=Fn(s,["ES COMO CAMBIAR DE CANAL"],2.3,[-.3,.95,.1]);return{update:(c,h,d)=>{te(r,c,t-.4,i-.1,d);let u=Math.floor(c*6)%o.length;o.forEach((p,g)=>{p.visible=c>i-.1&&g===u,ps(p,d)}),te(a,c,.2,i-.2,d),te(l,c,i-.1,99,d)}}},c:[[0,1.6,3.8],[0,1.6,-.5],[0,1.6,3.4],[0,1.6,-.5]],range:3,look:oi}});bi(20,8,"8:30","EN CLASE");ae(21,(n,e)=>{let t=Z(e,"mechon");return{...Sa(),atores:[Ge({x:0,z:-.4,eyes:[[0,"flat"],[t,"sad"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?160:12,40]})})],extra:(i,s,r)=>{Ta(r[0]),ba(i);let o=wt(i,e,[[["PELO FATAL"],"fatal","r",[1,2.1,-.4],1.2,1],[["UN MECH\xD3N REBELDE"],"mechon","w",[-1,2.1,-.4],1.7,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.65,3],[0,1.6,-.4],[0,1.65,2.6],[0,1.65,-.4]],range:2.5}});ae(22,(n,e)=>{let t=Z(e,"toda"),i=Z(e,"ella");return{...Sa(),atores:[Ge({x:-.3,z:-.3,eyes:[[0,"wide"]],pose:s=>s.pose({armL:[12,8],armR:[12,8],lean:-4})}),st({x:1.5,z:-1.2,eyes:[[0,"lookl"]]}),$t(2,{x:-1.9,z:-1.3,eyes:[[0,"look"]]}),$t(4,{x:.5,z:-1.6,eyes:[[0,"look"]]})],extra:(s,r,o)=>{Ta(o[0]),ba(s);let a=wt(s,e,[[["MUY RECTO"],"recto","w",[-.3,2.15,-.3],1.1],[["TODOS TE MIRAN"],"toda","r",[-.3,2.15,-.3],1.5],[["SOBRE TODO ELLA"],"ella","p",[1.3,2.25,-1],1.6,1]]);return{update:(l,c,h)=>a(l,h)}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.3],[0,1.5,-.6]],range:3}});ae(23,(n,e)=>({...Sa(),atores:[st({x:.7,z:-.4,eyes:[[0,"look"],[Z(e,"hoy"),"wide"],[Z(e,"uf"),"happy"]]})],extra:t=>{ba(t);let i=pr(t,e,[[["TENGO HAMBRE"],"tengo",[-.5,2.15,-.3],1.5],[["\xBFHOY HAB\xCDA EXAMEN?"],"hoy",[-.5,2.15,-.3],1.7],[["NO, ERA MA\xD1ANA"],"era",[-.5,2.15,-.3],1.6],[["UF, QU\xC9 ALIVIO"],"uf",[-.5,2.15,-.3],1.6]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.7,3],[.1,1.65,-.4],[0,1.7,2.6],[.1,1.65,-.4]],range:2.5}));ae(24,(n,e)=>({...Sa(),atores:[Ge({x:0,z:-.4,eyes:[[0,"flat"]],pose:t=>t.pose({armL:[12,8],armR:[12,8],lean:6,head:-10})})],extra:(t,i,s)=>{Ta(s[0]),ba(t);let r=Ht(t,["NI UNA PALABRA SOBRE TU PELO"],2.4,[0,.95,.1]);return{update:(o,a,l)=>te(r,o,.1,99,l)}},c:[[0,1.6,2.8],[0,1.45,-.4],[0,1.6,2.4],[0,1.5,-.4]],range:2.5}));ae(25,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ge({x:0,z:-.5,eyes:[[0,"wide"]]})],extra:(t,i,s)=>{Ta(s[0]),uE(t,0,-.5);let r=Fn(t,["EFECTO FOCO"],1.5,[0,2.3,-.4]);return{update:(o,a,l)=>te(r,o,.2,99,l)}},c:[[0,1.7,3.8],[0,1.5,-.5],[0,1.7,3.4],[0,1.5,-.5]],range:3,look:{exposure:.8,vig:.7}}));ae(26,(n,e)=>{let t=Z(e,"camiseta"),i=Z(e,"cantante");return{amb:"sala",fov:32,atores:[$t(5,{x:0,z:0,eyes:[[0,"flat"],[i,"sad"]],move:s=>[Cn(-3,0,pn(0,3,s)),0,0],pose:(s,r)=>r<3?s.walk(r*2):s.pose()}),$t(0,{x:-1.8,z:-1.4,eyes:[[0,"look"]]}),$t(2,{x:1.6,z:-1.4,eyes:[[0,"lookl"]]}),$t(3,{x:2.5,z:-.8,eyes:[[0,"lookl"]]})],extra:(s,r,o)=>{let a=Qg("\u266A\u266A","#E8667F",.3);a.position.set(0,-.28,.17),o[0].torso.add(a);let l=mt(s,["CAMISETA VERGONZOSA"],2,[0,2.2,-.1],ys),c=Ht(s,["CON LA CARA DE UN CANTANTE"],2.2,[0,.55,.4]);return{update:(h,d,u)=>{te(l,h,t-.2,99,u),te(c,h,i-.6,99,u)}}},c:[[0,1.7,4],[0,1.4,-.4],[0,1.65,3.4],[0,1.4,-.4]],range:3}});ae(27,(n,e)=>{let t=Z(e,"realidad");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=hr(i,[[`LO QUE
CRE\xCDAN`,.8,"#E8667F"],["",0,"#5FA0D8"]],2.6,[0,1.5,-.4],{title:"\xBFCU\xC1NTOS SE FIJAN?"}),r=hr(i,[[`LO QUE
CRE\xCDAN`,.5*1.6,"#E8667F"],[`EN
REALIDAD`,.25*1.6,"#5FA0D8"]],2.6,[0,1.5,-.39],{title:"\xBFCU\xC1NTOS SE FIJAN?"}),o=mt(i,["LA MITAD"],1,[-.65,2.35,-.2],Yi),a=mt(i,["1 DE CADA 4"],1.1,[.65,2.35,-.2],ur);return{update:(l,c,h)=>{r.visible=l>t,s.visible=!r.visible,te(o,l,.5,99,h),te(a,l,t+.8,99,h)}}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});ae(28,(n,e)=>{let t=Z(e,"ocupado"),i=["\xBFY MI PELO?","\xBFME VEO RARO?","\xBFY MI CARA?","\xBFHE DICHO ALGO MAL?"];return{amb:"plaza",fov:32,atores:[0,1,2,3].map(s=>$t(s+1,{x:-2.1+s*1.4,z:-.4-s%2*.4,eyes:[[0,"look"],[t,s%2?"lookl":"flat"]]})),extra:s=>{let r=i.map((l,c)=>kt(s,[l],1.1,[-2.1+c*1.4,2.35-c%2*.15,-.4-c%2*.4],{size:56})),o=Ht(s,["TODOS NOS MIRAN\u2026 \xBFNO?"],2,[0,.85,.5]),a=Fn(s,["CADA UNO PIENSA EN S\xCD MISMO"],2.4,[0,.85,.5]);return{update:(l,c,h)=>{r.forEach((d,u)=>te(d,l,t+u*.3,99,h)),te(o,l,.2,t-.2,h),te(a,l,t,99,h)}}},c:[[0,1.7,4.4],[0,1.5,-.5],[0,1.65,3.9],[0,1.5,-.5]],range:3.5}});bi(29,10,"10:00","EL RECREO");ae(30,(n,e)=>{let t=Z(e,"hola"),i=Z(e,"solo");return{amb:"barrio",fov:32,atores:[st({x:.7,z:-.6,eyes:[[0,"happy"],[t,"wide"]],pose:(s,r)=>s.pose({armL:[70,80],armR:[12,8],bob:r<t?Math.abs(Math.sin(r*12))*.02:0})}),fh(1,{x:1.6,z:-.9,eyes:[[0,"happy"]]}),fh(4,{x:2.4,z:-.5,eyes:[[0,"happy"]]}),Ge({x:-1,z:-.3,eyes:[[0,"look"],[t,"smug"]],move:s=>[Cn(-2.6,-.9,pn(0,t-.5,s)),0,-.3],pose:(s,r)=>{r<t-.5&&s.walk(r*2),s.pose({armL:[60,70],armR:[r>t?110:12,20]})}})],extra:(s,r,o)=>{qr(s);let a=Yu();s.add(a);let l=dr(s,["\xA1HOLA!"],.9,[-.7,2.25,-.2],72),c=Ht(s,['SOLO "HOLA"'],1.3,[.3,.85,.4]),h=Ht(s,["SE R\xCDE"],.9,[1.4,2.25,-.7]);return{update:(d,u,p)=>{let g=ya(o[3]);a.position.set(g.x,g.y+.08,g.z+.12),te(h,d,Z(e,"rie")-.2,t-.2,p),te(l,d,t,99,p),te(c,d,i,99,p)}}},c:[[0,1.7,4.2],[0,1.4,-.4],[0,1.65,3.7],[0,1.4,-.4]],range:3.5}});ae(31,(n,e)=>({amb:"barrio",fov:30,atores:[st({x:.7,z:-.4,eyes:[[0,"happy"]],pose:t=>t.pose({armL:[12,8],armR:[100,20]})})],extra:(t,i,s)=>{qr(t);let r=pr(t,e,[[["\xA1ME HA DICHO HOLA!"],"dicho",[-.6,2.2,-.3],1.7],[["\xBFLE HE CONTESTADO BIEN?"],"contestado",[-.6,2.2,-.3],1.9],[["HE SONADO RAR\xCDSIMA"],"sonado",[-.6,2.2,-.3],1.8],[["\xBFPOR QU\xC9 HE DICHO",'"HOLA QU\xC9 TAL" TAN R\xC1PIDO?'],"por",[-.6,2.2,-.3],2],[["SEGURO QUE PIENSA","QUE SOY TONTA"],"seguro",[-.6,2.2,-.3],1.9]],{bg:"#FFE0E6",fg:"#A0203A"}),o=qi(t,10,"#FF9AB0");return{update:(a,l,c)=>{r(a,c),o(a,[.7,2,-.3,.6]),va(c,a<.5?.03:.004,a)}}},c:[[0,1.75,3.2],[0,1.7,-.4],[0,1.75,2.8],[0,1.7,-.4]],range:2.5,look:oi}));ae(32,(n,e)=>{let t=Z(e,"nerviosa"),i=Z(e,"ti");return{amb:"barrio",fov:28,atores:[Ge({x:0,z:-.4,eyes:[[0,"wide"],[i,"heart"]],pose:s=>s.pose({armL:[12,8],armR:[60,70]})})],extra:(s,r,o)=>{qr(s);let a=Yu();s.add(a);let l=wt(s,e,[[["HELADO"],"helado","b",[-1,2.15,-.4],1,1],[["ESTABA NERVIOSA"],"nerviosa","w",[.85,2.15,-.4],1.4,1],[["POR TI"],"ti","p",[.85,1.75,-.4],.8,1]]);return{update:(c,h,d)=>{let u=ya(o[0]);a.position.set(u.x,u.y+.08,u.z+.12),l(c,d)}}},c:[[0,1.65,2.8],[0,1.55,-.4],[0,1.65,2.4],[0,1.6,-.4]],range:2.5}});ae(33,(n,e)=>{let t=Z(e,"tranquila");return{amb:"barrio",fov:30,atores:[st({x:0,z:-.4,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:Math.sin(s*2)*4})})],extra:i=>{qr(i);let s=wt(i,e,[[["POR FUERA: NADA"],"fuera","w",[0,2.2,-.4],1.6],[["TRANQUILA"],"tranquila","b",[0,2.2,-.4],1.2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.65,3],[0,1.55,-.4],[0,1.65,2.6],[0,1.55,-.4]],range:2.5}});ae(34,(n,e)=>{let t=Z(e,"ilusion"),i=Z(e,"casi");return{amb:"gris",fov:30,k:1,atores:[st({x:-1,z:-.5,eyes:[[0,"happy"]]}),Ge({x:1,z:-.5,eyes:[[0,"look"],[i,"happy"]]})],extra:(s,r,o)=>{let a=lt("#FF4A6A",1,0);s.add(a);let l=wt(s,e,[[["ILUSI\xD3N DE TRANSPARENCIA"],"ilusion","p",[0,2.35,-.4],2.4,1],[["NERVIOS"],"nervios","r",[-1,.9,.1],1],[["VERG\xDCENZA"],"verguenza","r",[-1,.9,.1],1.1],[["LO QUE SENTIMOS"],"sentimos","r",[-1,.9,.1],1.5],[["SE NOTA MENOS DE LO QUE CREES"],"casi","w",[0,.9,.2],2.6]]),c=new I;return{update:(h,d,u)=>{o[0].torso.getWorldPosition(c),a.position.set(c.x,c.y,c.z+.25),a.material.opacity=h>t?(h<i?.7:.25)*(.7+.3*Math.sin(h*8)):0,l(h,u)}}},c:[[0,1.6,4],[0,1.6,-.5],[0,1.6,3.6],[0,1.6,-.5]],range:3}});ae(35,(n,e)=>{let t=Z(e,"visto");return{amb:"gris",fov:30,k:1,atores:[st({x:-1,z:-.5,eyes:[[0,"sad"]],pose:i=>i.pose({armL:[60,70],armR:[60,70],head:-6})}),Ge({x:1,z:-.5,eyes:[[0,"look"],[t,"flat"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?60:12,s>t?90:8]})})],extra:i=>{let s=wt(i,e,[[['"SE ME NOTA TODO"'],"creia","p",[-1,2.25,-.5],1.6,1],[["NO HAB\xCDAS VISTO NADA"],"visto","w",[1,2.25,-.5],1.8,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,4],[0,1.6,-.5],[0,1.6,3.6],[0,1.6,-.5]],range:3}});bi(36,12,"12:00","MEDIOD\xCDA");ae(37,(n,e)=>{let t=Z(e,"piense"),i=Z(e,"nombre");return{amb:"plaza",fov:30,atores:[Ge({x:-1,z:-.3,eyes:[[0,"look"],[t,"heart"]],pose:s=>s.pose({armL:[12,8],armR:[12,8],lean:6})}),st({x:1.2,z:-1,eyes:[[0,"lookl"]]})],extra:(s,r,o)=>{let a=rn(s),l=kt(s,["\xBFPENSAR\xC1 EN M\xCD?"],1.5,[-1,2.35,-.3],{bg:"#FFFFFF",fg:"#2A2A34"}),c=Fn(s,["QUIERES O\xCDR TU NOMBRE"],2,[.2,.85,.3]);return{update:(h,d,u)=>{a(h,o[0],u),te(l,h,t-.2,99,u),te(c,h,i-.5,99,u)}}},c:[[0,1.65,3.8],[0,1.45,-.5],[0,1.65,3.4],[0,1.45,-.5]],range:3}});ae(38,(n,e)=>({amb:"plaza",fov:30,atores:[st({x:.8,z:-.4,eyes:[[0,"look"],[Z(e,"seguro"),"sad"]],pose:t=>t.pose({armL:[12,8],armR:[12,8],head:-6})})],extra:t=>{let i=pr(t,e,[[["\xBFPOR QU\xC9 NO ME HABLA M\xC1S?"],"por",[-.5,2.2,-.3],2],[["ANTES ME HABLABA\u2026"],"antes",[-.5,2.2,-.3],1.7],[["SEGURO QUE LE CAIGO MAL"],"seguro",[-.5,2.2,-.3],2]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.7,3],[.1,1.65,-.4],[0,1.7,2.6],[.1,1.65,-.4]],range:2.5,look:oi}));ae(39,(n,e)=>{let t=Z(e,"meses");return{amb:"plaza",fov:28,atores:[Ge({x:0,z:-.4,eyes:[[0,"wide"],[t,"heart"]],pose:(i,s)=>i.pose({armL:[s<t?150:12,40],armR:[s<t?150:12,40]})})],extra:i=>{let s=mt(i,["\xBF\xA1QUE LE CAES MAL!?"],1.9,[0,2.25,-.4],ys),r=kt(i,["LLEVO MESES","PENSANDO EN ELLA"],1.6,[1,2.05,-.4],{bg:"#FFFFFF",fg:"#2A2A34"}),o=Aa(i,.35);return o.position.set(-.9,2,-.3),{update:(a,l,c)=>{te(s,a,.05,t-.1,c),te(r,a,t-.1,99,c),o.visible=a>t,o.scale.setScalar(Ma(a,100)),va(c,a<.4?.025:0,a)}}},c:[[0,1.65,3],[0,1.6,-.4],[0,1.65,2.6],[0,1.6,-.4]],range:2.5}});ae(40,(n,e)=>{let t=Z(e,"minutos");return{amb:"lab",fov:32,atores:[$t(2,{x:-.7,z:-.3,eyes:[[0,"look"]],pose:(i,s)=>$n(i,s)}),$t(6,{x:.7,z:-.3,eyes:[[0,"lookl"]],pose:(i,s)=>mh(i,s)})],extra:i=>{let s=zr(.35,3);s.position.set(0,2.5,-1.3),i.add(s);let r=wt(i,e,[[["DESCONOCIDOS"],"desconocidos","w",[0,2.1,-.3],1.5],[["UNOS MINUTOS"],"minutos","b",[0,2.1,-.3],1.4,1]]);return{update:(o,a,l)=>{s.rotation.z=-o*.6,r(o,l)}}},c:[[0,1.65,3.6],[0,1.5,-.4],[0,1.65,3.1],[0,1.5,-.4]],range:3}});ae(41,(n,e)=>{let t=Z(e,"cuanto");return{amb:"lab",fov:30,atores:[$t(2,{x:-.9,z:-.3,eyes:[[0,"lookl"]]}),$t(6,{x:.9,z:-.3,eyes:[[0,"look"]]})],extra:i=>{let s=mt(i,["\xBFCU\xC1NTO LE HAS GUSTADO?"],2.3,[0,.9,.2],Yi),r=kt(i,["\xBF?"],.7,[-.9,2.25,-.3],{size:90}),o=kt(i,["\xBF?"],.7,[.9,2.25,-.3],{size:90,tail:"right"});return{update:(a,l,c)=>{te(s,a,t-.2,99,c),te(r,a,t+.4,99,c),te(o,a,t+.6,99,c)}}},c:[[0,1.65,3.6],[0,1.55,-.4],[0,1.65,3.1],[0,1.55,-.4]],range:3}});ae(42,(n,e)=>{let t=Z(e,"gustaban");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=hr(i,[[`LO QUE
CRE\xCDAN`,.45,"#5FA0D8"],["",0,"#E8667F"]],2.6,[0,1.5,-.4],{title:"\xBFCU\xC1NTO LE GUSTABAS?"}),r=hr(i,[[`LO QUE
CRE\xCDAN`,.45,"#5FA0D8"],[`LA
VERDAD`,.85,"#E8667F"]],2.6,[0,1.5,-.39],{title:"\xBFCU\xC1NTO LE GUSTABAS?"}),o=Ht(i,["SE QUEDARON CORTOS"],1.8,[0,2.45,-.2]),a=mt(i,["\xA1M\xC1S!"],.7,[.65,2.35,-.2],Yi);return{update:(l,c,h)=>{r.visible=l>t-.2,s.visible=!r.visible,te(o,l,.3,t-.3,h),te(a,l,t+.3,99,h)}}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});ae(43,(n,e)=>{let t=Z(e,"pensamos");return{amb:"gris",fov:30,k:1,atores:[Ge({x:-1.4,z:-.5,eyes:[[0,"sad"],[t+1,"happy"]]}),st({x:1.4,z:-.5,eyes:[[0,"sad"],[t+1,"happy"]]})],extra:i=>{let s=new k(new be(.6,3),new qe({color:"#1E2230"}));s.rotation.x=-Math.PI/2,s.position.set(0,.01,-.5),i.add(s);let r=wt(i,e,[[["LA BRECHA DE LA SIMPAT\xCDA"],"brecha","p",[0,2.35,-.4],2.4,1],[["CAEMOS MEJOR DE LO QUE CREEMOS"],"pensamos","w",[0,.9,.2],2.6,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,4.4],[0,1.5,-.5],[0,1.6,3.9],[0,1.5,-.5]],range:3.5}});bi(44,13,"13:00","EL COMEDOR");var xa=n=>{Te.pasteleria(n);let e=Ne(Nt(["COMEDOR"],{bg:"#2F5A9A",fg:"#FFFFFF",size:90,w:700,h:170}),2.4,.58);e.position.set(0,3.9,-2.98),n.add(e),Yg(n,0,.35,.8,1.8,.8,"#E8E2D2")},wa=(n,e={})=>({amb:"gris",fov:30,k:1,...e,c:[[0,1.7,4.3],[0,1.55,-.3],[0,1.7,3.9],[0,1.55,-.3]],range:3});ae(45,(n,e)=>{let t=Z(e,"trampa"),i=Z(e,"ojala"),s=Z(e,"apetece"),r=Z(e,"mirandote");return wa(e,{atores:[Ge({x:-.8,z:-.5,eyes:[[0,"look"],[t,"smug"]],pose:(o,a)=>a>s-.3&&a<r?$n(o,a):o.pose()}),st({x:.8,z:-.5,eyes:[[0,"look"],[r-.3,"wide"]]})],extra:(o,a,l)=>{xa(o);let c=rn(o),h=mt(o,["MODO TRAMPA"],1.3,[-.8,2.3,-.4],ys),d=kt(o,["OJAL\xC1 HUBIERA PIZZA"],1.7,[1,2.25,-.4],{tail:"left"}),u=ri(o,"pizza",.7,[1.9,1.7,-.3]),p=dr(o,["\xBFTE APETECE PIZZA?"],1.4,[-.7,2.25,-.3],60);return{update:(g,E,m)=>{c(g,l[0],m,.7),te(h,g,t-.2,i-.1,m),te(d,g,i-.1,99,m),te(u,g,i+.4,99,m),te(p,g,s-.3,99,m)}}}})});ae(46,(n,e)=>{let t=Z(e,"has");return wa(e,{atores:[Ge({x:-.8,z:-.5,eyes:[[0,"smug"]],pose:(i,s)=>s>t-.3?$n(i,s):i.pose()}),st({x:.8,z:-.5,eyes:[[0,"look"],[t+.5,"wide"]]})],extra:(i,s,r)=>{xa(i);let o=rn(i),a=kt(i,["ME ENCANTA ESA SERIE"],1.7,[1,2.25,-.4]),l=ri(i,"tele",.7,[1.9,1.7,-.3]),c=dr(i,["\xBFHAS VISTO ESA SERIE?","\xA1ES LA MEJOR!"],1.5,[-.7,2.25,-.3],56);return{update:(h,d,u)=>{o(h,r[0],u,.7),te(a,h,.1,99,u),te(l,h,.5,99,u),te(c,h,t-.3,99,u)}}}})});ae(47,(n,e)=>wa(e,{atores:[Ge({x:-.8,z:-.5,eyes:[[0,"smug"]]}),st({x:.8,z:-.5,eyes:[[0,"heart"]],pose:t=>t.pose({armL:[60,70],armR:[60,70]})})],extra:(t,i,s)=>{xa(t);let r=kt(t,["\xA1ES COMO SI","ME LEYERA LA MENTE!"],1.8,[.9,2.3,-.4]),o=Wg(s[1]),a=qi(t,10,"#FFB0C0");return{update:(l,c,h)=>{te(r,l,.1,99,h),o(.8),a(l,[.8,1.9,-.4,.6])}}}}));ae(48,(n,e)=>{let t=Z(e,"genio"),i=Z(e,"tramposo");return{amb:"gris",fov:28,k:1,atores:[Ge({x:0,z:-.5,eyes:[[0,"smug"],[i,"flat"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r<i?150:12,30],head:r>i?-8:0})})],extra:(s,r,o)=>{let a=wt(s,e,[[["UN GENIO"],"genio","y",[1,2.15,-.4],1.1,1],[["UN POCO TRAMPOSO"],"tramposo","r",[-1,1.75,-.4],1.6,1]]),l=qi(s,10);return{update:(c,h,d)=>{a(c,d),l(c,[0,1.8,-.4,.6],c>t&&c<i?1:0)}}},c:[[0,1.65,3.2],[0,1.6,-.5],[0,1.65,2.8],[0,1.6,-.5]],range:2.5}});ae(49,(n,e)=>{let t=Z(e,"decirle");return wa(e,{atores:[Ge({x:-.8,z:-.5,eyes:[[0,"flat"]]}),st({x:.8,z:-.5,eyes:[[0,"happy"]],pose:(i,s)=>$n(i,s)})],extra:(i,s,r)=>{xa(i);let o=rn(i),a=wt(i,e,[[["NO LA ESCUCHAS A ELLA"],"escuchando","w",[0,2.35,-.3],2],[["LE DICES LO QUE QUIERE O\xCDR"],"decirle","r",[0,2.35,-.3],2.3,1]]);return{update:(l,c,h)=>{o(l,r[0],h),a(l,h)}}}})});ae(50,(n,e)=>{let t=Z(e,"malos");return{amb:"plaza",fov:30,atores:[$t(0,{x:-.9,z:-.4,eyes:[[0,"look"]]}),$t(3,{x:.9,z:-.4,eyes:[[0,"lookl"]]})],extra:i=>{let s=kt(i,["\xBF?"],.7,[-.9,2.25,-.4],{size:90}),r=kt(i,["\xBF?"],.7,[.9,2.25,-.4],{size:90,tail:"right"}),o=wt(i,e,[[["SIN PODERES"],"sin","w",[0,.9,.2],1.3],[["MALOS ADIVINANDO"],"malos","r",[0,.9,.2],1.7,1]]);return{update:(a,l,c)=>{te(s,a,t,99,c),te(r,a,t+.3,99,c),o(a,c)}}},c:[[0,1.6,3.6],[0,1.5,-.4],[0,1.6,3.2],[0,1.5,-.4]],range:3}});var gE=(n,e,t)=>{let i=new le;i.add(x(.4,.28,.25,F("#2A2A34",{metalness:.4}),0,1.45,0));let s=new k(new Ke(.09,.1,.2,16),F("#1A1A24",{metalness:.5}));s.rotation.x=Math.PI/2,s.position.set(0,1.45,.2),i.add(s);for(let r of[-1,0,1]){let o=x(.03,1.4,.03,F("#5A5E68"),r*.18,.7,r===0?-.18:.1);o.rotation.z=r*.12,i.add(o)}return i.position.set(e,0,t),n.add(i),i};ae(51,(n,e)=>{let t=Z(e,"william"),i=Z(e,"grabando");return{amb:"lab",fov:32,atores:[$t(1,{x:-1,z:-.6,eyes:[[0,"look"]],pose:(s,r)=>$n(s,r)}),$t(5,{x:.2,z:-.6,eyes:[[0,"lookl"]],pose:(s,r)=>mh(s,r)}),Vu({x:1.7,z:.2,glasses:!0,eyes:[[0,"lookl"]],pose:Wu})],extra:s=>{let r=gE(s,1,.6);r.rotation.y=-.6;let o=mt(s,["WILLIAM ICKES"],1.5,[1.6,2.3,.2],ur),a=mt(s,["\u25CF REC"],.7,[-1.6,2.3,-.5],ys),l=Ht(s,["GRABANDO CONVERSACIONES"],2.2,[-.4,.7,.4]);return{update:(c,h,d)=>{te(o,c,t-.2,99,d),te(a,c,i-.2,99,d),a.visible=a.visible&&Math.sin(c*6)>-.4,te(l,c,i,99,d)}}},c:[[0,1.7,4.2],[0,1.45,-.3],[0,1.65,3.7],[0,1.45,-.3]],range:3.5}});ae(52,(n,e)=>{let t=Z(e,"amigos"),i=Z(e,"siquiera");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=hr(s,[["DESCONOCIDOS",.44000000000000006,"#5FA0D8"],["",0,"#E8667F"]],2.6,[0,1.55,-.4],{title:"PENSAMIENTOS ACERTADOS"}),o=hr(s,[["DESCONOCIDOS",.2*2.2,"#5FA0D8"],["BUENOS AMIGOS",.35*2.2,"#E8667F"]],2.6,[0,1.55,-.39],{title:"PENSAMIENTOS ACERTADOS"}),a=mt(s,["1 DE 5"],.8,[-.65,2.35,-.2],ur),l=mt(s,["1 DE 3"],.8,[.65,2.35,-.2],Yi),c=Ht(s,["NI LOS QUE MEJOR TE CONOCEN"],2.2,[0,.75,.2]);return{update:(h,d,u)=>{o.visible=h>t-.2,r.visible=!o.visible,te(a,h,.6,99,u),te(l,h,t+.5,99,u),te(c,h,i-.2,99,u)}}},c:[[0,1.5,4.2],[0,1.5,-.4],[0,1.5,3.8],[0,1.5,-.4]],range:3,blur:4}});ae(53,(n,e)=>{let t=Z(e,"empezando");return{amb:"lab",fov:30,atores:[],extra:i=>{let s=gh(i,[0,1.75,-.6],1.6),r=Fn(i,["LEER MENTES DE VERDAD"],2,[0,2.5,-.4]),o=Ht(i,["TODAV\xCDA EMPEZANDO"],1.7,[0,.85,-.2]);return{update:(a,l,c)=>{s(Math.sin(a*5)>0),te(r,a,.1,99,c),te(o,a,t-.3,99,c)}}},c:[[0,1.7,3.4],[0,1.7,-.6],[0,1.7,3],[0,1.7,-.6]],range:3,look:oi}});ae(54,(n,e)=>{let t=Z(e,"alexander"),i=Z(e,"idea"),s=Z(e,"escaner");return{amb:"lab",fov:32,atores:[Es(r=>$t(3,r),{x:-.1,z:-.4,y:.97,eyes:[[0,"shut"]]}),ph(2,{x:1.9,z:.1,eyes:[[0,"lookl"]],pose:(r,o)=>r.pose({armL:[60,70],armR:[60,70]})})],extra:r=>{let o=$u(r,-1.2),a=ah(r,["UNA PERSONA","ESCUCHA UNA HISTORIA\u2026"],1.6,.8,{bg:"#0E1C24",fg:"#7FD0FF",size:54,w:800,h:400});a.position.set(1.7,1.95,-1.2);let l=mt(r,["ALEXANDER HUTH"],1.6,[.2,2.45,-.4],ur),c=Fn(r,["ADIVINA LA IDEA GENERAL"],2,[.6,.6,-.2]);return{update:(h,d,u)=>{o.material.opacity=.4+.3*Math.sin(h*6),te(l,h,Math.max(t,6.4)-.2,99,u),a.visible=h>i-.5,te(c,h,i,99,u)}}},c:[[.5,1.8,4.8],[.5,1.4,-.4],[.5,1.75,4.3],[.5,1.4,-.4]],range:3.5,look:{bloom:.4}}});ae(55,(n,e)=>{let t=Z(e,"muchas"),i=Z(e,"colaborar");return{amb:"lab",fov:30,atores:[Es(s=>$t(3,s),{x:-.1,z:-.4,y:.97,eyes:[[0,"flat"],[i,"angry"]]})],extra:s=>{let r=$u(s,-1.2),o=zr(.35,4);o.position.set(1.4,2.3,-1),s.add(o);let a=wt(s,e,[[["MUCHAS HORAS"],"muchas","w",[.9,2.05,-.4],1.4],[["SI NO QUIERE, NO FUNCIONA"],"colaborar","r",[.5,2.05,-.4],2.3,1]]);return{update:(l,c,h)=>{o.rotation.z=-l*3,o.visible=l>t-.3&&l<i,r.material.opacity=l>i+.3?0:.5,a(l,h)}}},c:[[.4,1.75,4.2],[.4,1.35,-.4],[.4,1.7,3.8],[.4,1.35,-.4]],range:3}});ae(56,(n,e)=>{let t=Z(e,"menos");return{amb:"gris",fov:30,k:1,atores:[Ge({x:0,z:-.5,eyes:[[0,"look"],[t,"smug"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?150:12,30]})})],extra:(i,s,r)=>{let o=rn(i),a=wt(i,e,[[["NADIE PUEDE LEERTE LA MENTE"],"nadie","w",[0,.9,.2],2.4,1],[["MENOS T\xDA, HOY"],"menos","p",[0,2.35,-.4],1.5,1]]);return{update:(l,c,h)=>{o(l,r[0],h,l>t?1:0),a(l,h)}}},c:[[0,1.6,3.6],[0,1.6,-.5],[0,1.6,3.2],[0,1.6,-.5]],range:3,look:oi}});bi(57,17,"17:00","EL PARQUE");ae(58,(n,e)=>{let t=Z(e,"banco"),i=Z(e,"visto");return{amb:"parque",fov:32,atores:[st({x:-3.2,z:-1.8,eyes:[[0,"lookl"]],move:s=>[Cn(-1.2,-3.2,pn(0,t,s)),0,-1.8],pose:(s,r)=>r<t?s.walk(r*2):s.pose({head:-8})}),Ge({x:-1,z:-.2,eyes:[[0,"look"]]})],extra:(s,r,o)=>{Pn(o[0]);let a=Ht(s,["NO TE HA VISTO"],1.4,[-1,2.2,-.2]),l=Ht(s,["CON CASCOS"],1.2,[-3,2.25,-1.8]);return{update:(c,h,d)=>{te(l,c,Z(e,"cascos")-.2,i-.2,d),te(a,c,i-.2,99,d)}}},c:[[-2,1.7,2.6],[-2.1,1.3,-1.2],[-2,1.65,2.1],[-2.1,1.3,-1.2]],range:3.5}});var yh={exposure:.92,bloom:.3,vig:.65},EE={bg:"#2A3050",fg:"#DDE4FF"};ae(59,(n,e)=>{let t=Z(e,"baja");return{amb:"parque",fov:30,atores:[st({x:-3,z:-1.8,eyes:[[0,"down"],[Z(e,"siempre"),"sad"]],pose:i=>i.pose({armL:[12,8],armR:[12,8],head:-10,lean:4})})],extra:(i,s,r)=>{Pn(r[0]);let o=Ht(i,["M\xC1S BAJA"],1,[-4.1,2.15,-1.7]),a=pr(i,e,[[["MI MADRE OTRA VEZ ENFADADA"],"madre",[-3.95,2.15,-1.7],1.8],[["NADIE EN CLASE SABE","QUE EN CASA TODO VA MAL"],"nadie",[-3.95,2.15,-1.7],1.8],[["SIEMPRE SONR\xCDO","PARA QUE NO PREGUNTEN"],"siempre",[-3.95,2.15,-1.7],1.75]],EE),l=ri(i,"casa",.8,[-1.95,2.2,-1.7]);return{update:(c,h,d)=>{te(o,c,t-.2,Z(e,"madre")-.2,d),a(c,d),te(l,c,Z(e,"casa")-.1,99,d)}}},c:[[-3.4,1.65,1.4],[-3.3,1.55,-1.8],[-3.4,1.65,1],[-3.3,1.55,-1.8]],range:3,look:yh}});ae(60,(n,e)=>{let t=Z(e,"siempre");return{amb:"parque",fov:30,atores:[Ge({x:-1,z:-.2,eyes:[[0,"sad"]],pose:i=>i.pose({armL:[12,8],armR:[12,8],head:-12,lean:5})})],extra:i=>{let s=wt(i,e,[[["TE DUELE EL PECHO"],"duele","w",[-1,2.2,-.2],1.6],[["NUNCA TE LO IMAGINASTE"],"imaginaste","w",[-1,2.2,-.2],1.9],[["SIEMPRE PAREC\xCDA TAN FELIZ"],"siempre","p",[-1,2.2,-.2],2.1,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-.8,1.65,2.6],[-.9,1.5,-.3],[-.8,1.65,2.2],[-.9,1.5,-.3]],range:3,look:yh}});ae(61,(n,e)=>{let t=Z(e,"juego");return{amb:"parque",fov:30,atores:[Ge({x:-1,z:-.2,eyes:[[0,"flat"],[t,"sad"]],pose:i=>i.pose({armL:[12,8],armR:[12,8],head:-12})})],extra:(i,s,r)=>{let o=rn(i),a=wt(i,e,[[["COMO UN JUEGO"],"juego","r",[-1,2.2,-.2],1.5],[["\xBFLE GUSTO?"],"gustas","p",[-1,2.2,-.2],1.1],[["QUEDAR BIEN"],"quedar","w",[-1,2.2,-.2],1.3,1]]);return{update:(l,c,h)=>{o(l,r[0],h,.5),a(l,h)}}},c:[[-.8,1.65,2.6],[-.9,1.5,-.3],[-.8,1.65,2.2],[-.9,1.5,-.3]],range:3,look:yh}});ae(62,(n,e)=>{let t=Z(e,"tuyo");return{amb:"gris",fov:30,k:1,atores:[st({x:0,z:-.6,eyes:[[0,"down"]],pose:i=>i.pose({armL:[60,70],armR:[60,70],head:-8})})],extra:i=>{let s=qi(i,12,"#8AA8FF"),r=wt(i,e,[[["NO ES TUYO"],"tuyo","r",[0,2.45,-.5],1.2,1],[["SUS MIEDOS"],"miedos","p",[-1.2,1.7,-.4],1.2,1],[["SUS SECRETOS"],"secretos","p",[1.2,1.7,-.4],1.3,1],[["COSAS QUE NO TE HA CONTADO"],"cosas","w",[0,.85,.1],2.4,1]]);return{update:(o,a,l)=>{s(o,[0,1.6,-.5,.5],o>t?1:.3),r(o,l)}}},c:[[0,1.6,4.2],[0,1.6,-.6],[0,1.6,3.8],[0,1.6,-.6]],range:3,look:oi}});bi(63,18,"18:00","EL BANCO");ae(64,(n,e)=>{let t=Z(e,"banco"),i=Z(e,"lado"),s=Z(e,"preguntas");return{amb:"parque",ambo:{dusk:!0},fov:32,atores:[st({x:-3,z:-1.8,eyes:[[0,"down"]],pose:r=>r.pose({head:-10})}),Ge({x:-3.9,z:-1.8,eyes:[[0,"look"]],move:r=>[Cn(-1,-3.9,pn(t-1.2,i,r)),0,Cn(.2,-1.8,pn(t-1.2,i,r))],pose:(r,o)=>o>t-1.2&&o<i?r.walk(o*2):r.pose()})],extra:(r,o,a)=>{Pn(a[0]);let l=wt(r,e,[[["UNA DECISI\xD3N"],"decision","y",[-2.4,2.3,-1.5],1.4],[["NO LE DICES LO QUE PIENSA"],"dices","w",[-3.45,2.3,-1.6],2.2],[["LE PREGUNTAS"],"preguntas","p",[-3.45,2.3,-1.6],1.4,1]]);return{update:(c,h,d)=>l(c,d)}},c:[[-2.6,1.75,2.4],[-2.8,1.35,-1.4],[-3,1.65,1.6],[-3.3,1.35,-1.6]],range:3.5,look:{bloom:.45}}});ae(65,(n,e)=>({amb:"parque",ambo:{dusk:!0},fov:30,atores:[Ge({x:-3.9,z:-1.8,eyes:[[0,"look"]],pose:$n}),st({x:-3,z:-1.8,eyes:[[0,"down"],[1.2,"look"]],pose:(t,i)=>t.pose({head:i<1.2?-10:0})})],extra:(t,i,s)=>{Pn(s[1]);let r=dr(t,["OYE\u2026","\xBFEST\xC1S BIEN?"],1.2,[-4.2,2.1,-1.7],64);return{update:(o,a,l)=>te(r,o,.1,99,l)}},c:[[-3.45,1.6,1.2],[-3.45,1.45,-1.8],[-3.45,1.6,.8],[-3.45,1.45,-1.8]],range:3,look:{bloom:.45}}));ae(66,(n,e)=>{let t=Z(e,"quita"),i=Z(e,"cuento");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[Ge({x:-3.9,z:-1.8,eyes:[[0,"look"]]}),st({x:-3,z:-1.8,eyes:[[0,"look"],[i,"lookl"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t&&r<t+1.2?150:12,30]})})],extra:(s,r,o)=>{let a=Pn(o[1]),l=rn(s),c=pr(s,e,[[["\xBFSE LO CUENTO?"],"cuento",[-2.5,2.15,-1.7],1.5],[["NO\u2026 S\xCD\u2026 NO LO S\xC9"],Z(e,"cuento")+1,[-2.5,2.15,-1.7],1.6]]);return{update:(h,d,u)=>{a.rotation.z=h>t+.4?.9:0,l(h,o[0],u,.6),c(h,u)}}},c:[[-3.3,1.6,1.3],[-3.3,1.45,-1.8],[-3.3,1.6,.9],[-3.3,1.45,-1.8]],range:3,look:{bloom:.45}}});ae(67,(n,e)=>{let t=Z(e,"si");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[Ge({x:-3.9,z:-1.8,eyes:[[0,"look"]]}),st({x:-3,z:-1.8,eyes:[[0,"happy"]],pose:$n})],extra:(i,s,r)=>{let o=Pn(r[1]);o.rotation.z=.9;let a=dr(i,["S\xCD, S\xCD.","TODO BIEN."],1.2,[-2.6,2.1,-1.7],64),l=Ht(i,["POR FUERA"],1,[-4.1,2.2,-1.7]);return{update:(c,h,d)=>{te(l,c,.1,99,d),te(a,c,t-.2,99,d)}}},c:[[-3.45,1.6,1.2],[-3.45,1.45,-1.8],[-3.45,1.6,.8],[-3.45,1.45,-1.8]],range:3,look:{bloom:.45}}});ae(68,(n,e)=>{let t=Z(e,"usas");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[Ge({x:-3.75,z:-1.8,eyes:[[0,"look"]]}),st({x:-3.15,z:-1.8,eyes:[[0,"down"]],pose:i=>i.pose({head:-8})})],extra:(i,s,r)=>{let o=Pn(r[1]);o.rotation.z=.9;let a=wt(i,e,[[["ESPERAS"],"esperas","w",[-3.45,2.25,-1.7],1],[["NO USAS LO QUE SABES"],"usas","p",[-3.45,2.25,-1.7],2],[["SOLO EST\xC1S A SU LADO"],"solo","w",[-3.45,2.25,-1.7],1.9,1]]);return{update:(l,c,h)=>a(l,h)}},c:[[-3.45,1.7,2.6],[-3.45,1.4,-1.8],[-3.45,1.65,2.2],[-3.45,1.4,-1.8]],range:3,look:{bloom:.5,exposure:.98}}});ae(69,(n,e)=>({amb:"parque",ambo:{dusk:!0},fov:30,atores:[Ge({x:-3.85,z:-1.8,eyes:[[0,"look"]],pose:mh}),st({x:-3.05,z:-1.8,eyes:[[0,"sad"]],pose:(t,i)=>i>Z(e,"hablar")?$n(t,i):t.pose()})],extra:(t,i,s)=>{let r=Pn(s[1]);r.rotation.z=.9;let o=wt(t,e,[[["EMPIEZA A HABLAR"],"hablar","y",[-3.45,2.25,-1.7],1.6],[["SU MADRE"],"madre","w",[-3.45,2.25,-1.7],1.1],[["SU CASA"],"casa","w",[-3.45,2.25,-1.7],1],[["SONRE\xCDR PARA QUE NO PREGUNTEN"],"sonreir","w",[-3.45,2.25,-1.7],2.4,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[-3.45,1.6,1.4],[-3.45,1.45,-1.8],[-3.45,1.6,1],[-3.45,1.45,-1.8]],range:3,look:{bloom:.45}}));ae(70,(n,e)=>{let t=Z(e,"voz"),i=Z(e,"decidido");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[Ge({x:-3.85,z:-1.8,eyes:[[0,"look"],[i,"happy"]]}),st({x:-3.05,z:-1.8,eyes:[[0,"look"]],pose:$n})],extra:(s,r,o)=>{let a=Pn(o[1]);a.rotation.z=.9;let l=kt(s,["\u2717"],.7,[-4.3,2.2,-1.7],{size:110}),c=dr(s,["\u2026Y EN CASA\u2026"],1.1,[-2.6,2.15,-1.7],60),h=wt(s,e,[[["CON SU VOZ DE VERDAD"],"voz","w",[-3.45,.85,-1.3],2],[["HA DECIDIDO CONT\xC1RTELO"],"decidido","p",[-3.45,.85,-1.3],2.2,1]]),d=qi(s,10,"#FFD8A0");return{update:(u,p,g)=>{te(l,u,.2,t,g),te(c,u,t-.3,99,g),h(u,g),d(u,[-3.45,1.7,-1.7,.7],u>i?1:0)}}},c:[[-3.45,1.6,1.5],[-3.45,1.45,-1.8],[-3.45,1.6,1.1],[-3.45,1.45,-1.8]],range:3,look:{bloom:.5}}});ae(71,(n,e)=>({amb:"parque",ambo:{dusk:!0},fov:30,atores:[Ge({x:-3.75,z:-1.8,eyes:[[0,"happy"]]}),st({x:-3.15,z:-1.8,eyes:[[0,"happy"]]})],extra:(t,i,s)=>{let r=Pn(s[1]);r.rotation.z=.9;let o=mt(t,["ES MUCHO MEJOR"],1.7,[-3.45,2.25,-1.7],Yi);return{update:(a,l,c)=>te(o,a,.1,99,c)}},c:[[-3.45,1.6,1.6],[-3.45,1.45,-1.8],[-3.45,1.6,1.3],[-3.45,1.45,-1.8]],range:3,look:{bloom:.55}}));ae(72,(n,e)=>({amb:"parque",ambo:{night:!0},fov:32,atores:[Ge({x:-3.75,z:-1.8,eyes:[[0,"happy"]],pose:$n}),st({x:-3.15,z:-1.8,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[70,80],armR:[12,8],bob:Math.abs(Math.sin(i*10))*.02})})],extra:(t,i,s)=>{let r=Pn(s[1]);r.rotation.z=.9,_a(t,[-3.45,2.8,-1],4,6);let o=mt(t,["21:00"],.9,[-4.4,2.3,-1.6],{bg:"#1E2230",fg:"#F2C14E",size:96,w:420}),a=Ht(t,["HABLANDO Y HABLANDO"],1.8,[-3.2,.8,-1.2]);return{update:(l,c,h)=>{te(o,l,.1,99,h),te(a,l,Z(e,"hablando")-.2,99,h)}}},c:[[-3.45,1.7,2.4],[-3.45,1.4,-1.8],[-3.45,1.65,2],[-3.45,1.4,-1.8]],range:3,look:fr}));ae(73,(n,e)=>{let t=Z(e,"dos");return{amb:"parque",ambo:{night:!0},fov:30,atores:[Ge({x:-3.75,z:-1.8,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[70,80],armR:[12,8],bob:Math.abs(Math.sin(s*10))*.02})}),st({x:-3.15,z:-1.8,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[70,80],bob:Math.abs(Math.sin(s*11))*.02})})],extra:(i,s,r)=>{let o=Pn(r[1]);o.rotation.z=.9,_a(i,[-3.45,2.8,-1],4,6);let a=ri(i,"tele",.7,[-4.3,2.15,-1.6]),l=ri(i,"pizza",.7,[-2.6,2.15,-1.6]),c=Ht(i,['"\xA1YO CRE\xCDA QUE TE CA\xCDA MAL!"'],2.3,[-3.45,.8,-1.2]);return{update:(h,d,u)=>{te(a,h,Z(e,"series")-.1,99,u),te(l,h,Z(e,"pizza")-.1,99,u),te(c,h,t-.2,99,u)}}},c:[[-3.45,1.6,1.6],[-3.45,1.45,-1.8],[-3.45,1.6,1.2],[-3.45,1.45,-1.8]],range:3,look:fr}});ae(74,(n,e)=>{let t=Z(e,"despide"),i=Z(e,"ojala");return{amb:"parque",ambo:{night:!0},fov:32,atores:[Ge({x:-3.9,z:-1.8,eyes:[[0,"happy"]],pose:(s,r)=>r>t?Ea(s,r):s.pose()}),st({x:-3.1,z:-1.8,eyes:[[0,"happy"]],move:s=>[Cn(-3.1,-1.6,pn(t+.8,n,s)),0,-1.8],pose:(s,r)=>{r>t+.8?s.walk(r*2):Ea(s,r)}})],extra:(s,r,o)=>{let a=Pn(o[1]);a.rotation.z=.9,_a(s,[-3.45,2.8,-1],4,6);let l=rn(s),c=kt(s,["OJAL\xC1 ME HUBIERA ATREVIDO","A HABLARLE ANTES"],2.1,[-2.4,2.25,-1.6]);return{update:(h,d,u)=>{l(h,o[0],u,h>i-.5?1:0),te(c,h,i-.1,99,u)}}},c:[[-3,1.7,2.4],[-3,1.45,-1.8],[-3,1.65,2],[-3,1.45,-1.8]],range:3,look:fr}});ae(75,(n,e)=>{let t=Z(e,"exactamente");return{amb:"parque",ambo:{night:!0},fov:28,atores:[Ge({x:-3.6,z:-1.8,eyes:[[0,"happy"],[t,"heart"]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})})],extra:i=>{_a(i,[-3.45,2.8,-1],4,6);let s=kt(i,["YO TAMBI\xC9N"],1.3,[-2.7,2.2,-1.7],{bg:"#FFFFFF",fg:"#2A2A34"}),r=Aa(i,.3);return r.position.set(-4.3,2.1,-1.6),{update:(o,a,l)=>{te(s,o,t-.3,99,l),r.visible=o>t,r.scale.setScalar(Ma(o,90))}}},c:[[-3.3,1.65,1.2],[-3.3,1.55,-1.8],[-3.3,1.65,.9],[-3.3,1.55,-1.8]],range:2.5,look:fr}});bi(76,24,"23:59","SE ACABA");ae(77,(n,e)=>{let t=Z(e,"radio");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[Es(Ge,{x:-.7,z:-1,y:.97,eyes:[[0,"look"]]})],extra:(i,s,r)=>{let o=rn(i),a=Fn(i,["COMO UNA RADIO SIN PILAS"],2.1,[-1.1,2.1,-.8]),l=mt(i,["\u25AE\u25AF\u25AF\u25AF"],.7,[.1,1.55,-.8],{bg:"#1E2230",fg:"#FF7A6A",size:90,w:360});return{update:(c,h,d)=>{o(c,r[0],d,1-pn(0,n,c)*.9),te(a,c,t-.2,99,d),te(l,c,t+.3,99,d)}}},c:[[-1,1.8,2.8],[-1.1,1.1,-1],[-1,1.7,2.3],[-1.1,1.1,-1]],range:2.5,look:fr}});ae(78,(n,e)=>({amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[Es(Ge,{x:-.7,z:-1,y:.97,eyes:[[0,"look"],[Z(e,"instituto"),"heart"]]})],extra:(t,i,s)=>{let r=rn(t),o=kt(t,["MA\xD1ANA LE DIGO DE IR","JUNTOS AL INSTITUTO"],1.9,[-.6,2,-.8]);return{update:(a,l,c)=>{r(a,s[0],c,.15),te(o,a,Z(e,"manana")-.1,99,c),o.material.opacity=.85}}},c:[[-1,1.8,2.8],[-1.1,1.2,-1],[-1,1.7,2.3],[-1.1,1.2,-1]],range:2.5,look:fr}));ae(79,(n,e)=>{let t=Z(e,"silencio"),i=Z(e,"cabeza");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[Es(Ge,{x:-.7,z:-1,y:.97,eyes:[[0,"look"],[i,"shut"]]})],extra:s=>{let r=mt(s,["00:00"],.9,[-1.9,2.05,-.8],{bg:"#C9361F",fg:"#fff",size:96,w:420}),o=wt(s,e,[[["SILENCIO"],"silencio","w",[-.3,2.05,-.8],1.1],[["TU CABEZA ES SOLO TUYA"],"cabeza","w",[-.6,2.05,-.8],2,1]]);return{update:(a,l,c)=>{te(r,a,.1,t+1,c),o(a,c)}}},c:[[-1,1.8,2.8],[-1.1,1.1,-1],[-1,1.7,2.3],[-1.1,1.1,-1]],range:2.5,look:{exposure:.85,bloom:.35}}});ae(80,(n,e)=>{let t=Z(e,"ninguna"),i=Z(e,"sabes");return{amb:"cuartoYo",fov:30,atores:[Ge({x:0,z:-.4,eyes:[[0,"flat"],[t,"look"],[i,"lookl"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[12,8],head:r>t?Math.sin(r*2)*10:0})})],extra:s=>{let r=zr(.4,7);r.position.set(-1.1,1.4,-.6),s.add(r);let o=wt(s,e,[[["\xA1RIIIING!"],"alarma","r",[-1,2.1,-.5],1.1],[["NINGUNA VOZ"],"ninguna","w",[1,2.1,-.4],1.3],[["\xBFQU\xC9 ESTAR\xC1 PENSANDO?"],"sabes","p",[1,2.1,-.4],1.9,1]]);return{update:(a,l,c)=>{r.rotation.z=a<t?Math.sin(a*50)*.1:0,o(a,c)}}},c:[[0,1.65,3.2],[0,1.5,-.4],[0,1.65,2.7],[0,1.5,-.4]],range:2.5,look:Zi}});ae(81,(n,e)=>{let t=Z(e,"mensaje");return{amb:"cuartoYo",fov:30,atores:[Ge({x:0,z:-.4,eyes:[[0,"look"],[t,"wide"]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})})],extra:(i,s,r)=>{let o=$g(["MI CRUSH \u2665","1 mensaje"],{hora:"07:30",bg:"#2A1830"});o.scale.setScalar(.35),i.add(o);let a=Ht(i,["NO PASA NADA"],1.3,[-1,2.1,-.4]),l=mt(i,["7:30"],.8,[1,2.1,-.4],{bg:"#1E2230",fg:"#F2C14E",size:96,w:400}),c=mt(i,["1 MENSAJE NUEVO"],1.4,[1,1.7,-.3],Yi);return{update:(h,d,u)=>{Xu(o,r[0],-.02),o.lookAt(u.position),te(a,h,.1,99,u),te(l,h,Z(e,"siete")-.1,99,u),te(c,h,t-.1,99,u)}}},c:[[0,1.6,2.8],[0,1.4,-.4],[0,1.55,2.2],[0,1.45,-.4]],range:2.5,look:Zi}});ae(82,(n,e)=>{let t=Z(e,"vamos");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=qu(i,[0,1.5,-.5],1.15,[["l","\xBFVamos juntos al instituto?",t-.2]],{hora:"07:30"}),r=Ht(i,["DE VERDAD \xB7 ESCRITO POR ELLA"],2,[0,.5,.5]),o=Aa(i,.3);return o.position.set(.85,2.2,-.3),{update:(a,l,c)=>{s.userData.upd(a),te(r,a,.1,99,c),o.visible=a>t+.5,o.scale.setScalar(Ma(a,110)*.9)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.9],[0,1.5,-.5]],range:2,blur:4}});var Ra=(n,e,t,i)=>({amb:"barrio",fov:32,atores:[Ge({x:-.4,z:-.4,eyes:[[0,"happy"]],move:s=>[Cn(-1.2,.6,s/Math.max(e,1))-.35,0,-.4],pose:(s,r)=>s.walk(r*1.6)}),st({x:.4,z:-.4,eyes:[[0,"happy"]],move:s=>[Cn(-1.2,.6,s/Math.max(e,1))+.35,0,-.4],pose:(s,r)=>s.walk(r*1.6+.5)})],extra:(s,r,o)=>{qr(s);let a=wt(s,n,t,[0,2.3,-.3],2.4),l=i?i(s,o):null;return{update:(c,h,d)=>{a(c,d),l&&l(c,d)}}},cam:[[0,[-.6,1.6,3.6],[-.3,1.3,-.4]],[e,[.6,1.6,3.2],[.3,1.3,-.4]]],f:[[0,4],[e,3.6]],range:3.5,look:Zi});ae(83,(n,e)=>Ra(e,n,[[["LEER SU MENTE TE ENSE\xD1\xD3\u2026"],.1,"p"],[["LA GENTE PIENSA MUCHAS TONTER\xCDAS"],"tonterias","w",void 0,2.6,1]]));ae(84,(n,e)=>Ra(e,n,[[["NADIE SE FIJA TANTO EN TI"],"nadie","w",void 0,2.3],[["CAES MEJOR DE LO QUE CREES"],"caemos","p",void 0,2.4,1]]));ae(85,(n,e)=>Ra(e,n,[[["LO IMPORTANTE NO SE DESCUBRE ESPIANDO"],.1,"w",void 0,2.8,1]]));ae(86,(n,e)=>Ra(e,n,[[["PREGUNTANDO"],"preguntando","p",[-.6,2.3,-.3],1.4,1],[["Y ESCUCHANDO"],"escuchando","y",[.8,2.3,-.3],1.4,1]],t=>{let i=Aa(t,.3);return i.position.set(.1,1.95,-.3),s=>{i.scale.setScalar(Ma(s,100))}}));ae(87,(n,e)=>{let t=Z(e,"comentarios");return{amb:"gris",fov:30,k:1,atores:[Ge({x:-.7,z:-.5,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s>t?Ea(i,s):i.pose({armL:[12,8],armR:[110,20]})}),st({x:.7,z:-.5,eyes:[[0,"smug"]]})],extra:(i,s,r)=>{let o=rn(i),a=Fn(i,["\xBFQUERR\xCDAS SABER QU\xC9 PIENSA?"],2.4,[0,2.4,-.4]),l=kt(i,["\xBF?"],.7,[1.35,2,-.5],{size:100}),c=mt(i,["TE LEO EN LOS COMENTARIOS"],2.3,[0,.85,.1],Yi);return{update:(h,d,u)=>{o(h,r[0],u,.6),te(a,h,Z(e,"querrias")-.2,99,u),te(l,h,.4,99,u),te(c,h,t-.4,99,u)}}},c:[[0,1.6,4],[0,1.6,-.5],[0,1.6,3.6],[0,1.6,-.5]],range:3,look:oi}});function yE(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new sa(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=Wr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Wr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(yE(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Wr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
