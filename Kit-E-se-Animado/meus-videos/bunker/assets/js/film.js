var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Sc="170";var Rd=0,ph=1,Cd=2;var Su=1,xc=2,fi=3,Ni=0,nn=1,wt=2,ei=0,Li=1,vn=2,mh=3,gh=4,Fd=5,es=100,Pd=101,Id=102,Dd=103,Ld=104,Ud=200,Nd=201,Bd=202,Od=203,Ka=204,ja=205,Hd=206,zd=207,kd=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,Yd=214,el=0,tl=1,nl=2,Bs=3,il=4,sl=5,rl=6,ol=7,xu=0,Zd=1,$d=2,ti=0,Jd=1,Qd=2,Kd=3,jd=4,ef=5,tf=6,nf=7;var bu=300,Os=301,Hs=302,al=303,ll=304,$o=306,_n=1e3,ns=1001,cl=1002,Fn=1003,sf=1004;var qr=1005;var Kn=1006,ga=1007;var is=1008;var yi=1009,Tu=1010,wu=1011,Rr=1012,bc=1013,Ei=1014,jn=1015,An=1016,Tc=1017,wc=1018,zs=1020,Ru=35902,Cu=1021,Fu=1022,Vn=1023,Pu=1024,Iu=1025,Ls=1026,ks=1027,Rc=1028,Cc=1029,Du=1030,Fc=1031;var Pc=1033,Ao=33776,So=33777,xo=33778,bo=33779,hl=35840,ul=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,yl=37808,El=37809,vl=37810,_l=37811,Ml=37812,Al=37813,Sl=37814,xl=37815,bl=37816,Tl=37817,wl=37818,Rl=37819,Cl=37820,Fl=37821,To=36492,Pl=36494,Il=36495,Lu=36283,Dl=36284,Ll=36285,Ul=36286;var wo=2300,Nl=2301,ya=2302,yh=2400,Eh=2401,vh=2402;var rf=3200,Ks=3201;var Uu=0,of=1,Ii="",Wt="srgb",ki="srgb-linear",Jo="linear",Ct="srgb";var ps=7680;var _h=519,af=512,lf=513,cf=514,Nu=515,hf=516,uf=517,df=518,ff=519,Bl=35044;var Mh="300 es",mi=2e3,Ro=2001,Bi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,Co=180/Math.PI;function Ui(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function dn(n,e,t){return Math.max(e,Math.min(t,n))}function pf(n,e){return(n%e+e)%e}function va(n,e,t){return(1-t)*n+t*e}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],_=s[1],v=s[4],E=s[7],P=s[2],w=s[5],b=s[8];return r[0]=o*y+a*_+l*P,r[3]=o*m+a*v+l*w,r[6]=o*p+a*E+l*b,r[1]=c*y+h*_+u*P,r[4]=c*m+h*v+u*w,r[7]=c*p+h*E+u*b,r[2]=d*y+f*_+g*P,r[5]=d*m+f*v+g*w,r[8]=d*p+f*E+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Ke;function Bu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){let n=Fo("canvas");return n.style.display="block",n}var Ah={};function Sr(n){n in Ah||(Ah[n]=!0,console.warn(n))}function gf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function yf(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ef(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var mt={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(n.r=Us(n.r),n.g=Us(n.g),n.b=Us(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?Jo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Sh=[.64,.33,.3,.6,.15,.06],xh=[.2126,.7152,.0722],bh=[.3127,.329],Th=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[ki]:{primaries:Sh,whitePoint:bh,transfer:Jo,toXYZ:Th,fromXYZ:wh,luminanceCoefficients:xh,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:Sh,whitePoint:bh,transfer:Ct,toXYZ:Th,fromXYZ:wh,luminanceCoefficients:xh,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});var ms,Ol=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=Fo("canvas")),ms.width=e.width,ms.height=e.height;let i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vf=0,Po=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ma(s[o].image)):r.push(Ma(s[o]))}else r=Ma(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,Mn=class n extends Bi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ns,s=ns,r=Kn,o=is,a=Vn,l=yi,c=n.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ui(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=bu;Mn.DEFAULT_ANISOTROPY=1;var Pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,E=(f+1)/2,P=(p+1)/2,w=(h+d)/4,b=(u+y)/4,R=(g+m)/4;return v>E&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=w/i,r=b/i):E>P?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=R/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=b/r,s=R/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-y)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Po(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Hl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Io=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zl=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*y,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),w=Math.atan2(P,p*_);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let E=a*_;if(l=l*m+d*E,c=c*m+f*E,h=h*m+g*E,u=u*m+y*E,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new F,Rh=new Oi,vi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Zr.subVectors(this.max,fr),gs.subVectors(e.a,fr),ys.subVectors(e.b,fr),Es.subVectors(e.c,fr),Ti.subVectors(ys,gs),wi.subVectors(Es,ys),Yi.subVectors(gs,Es);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Yi.z,Yi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Yi.z,0,-Yi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Yi.y,Yi.x,0];return!Sa(t,gs,ys,Es,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,gs,ys,Es,Zr))?!1:($r.crossVectors(Ti,wi),t=[$r.x,$r.y,$r.z],Sa(t,gs,ys,Es,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new F,new F,new F,new F,new F,new F,new F,new F],zn=new F,Yr=new vi,gs=new F,ys=new F,Es=new F,Ti=new F,wi=new F,Yi=new F,fr=new F,Zr=new F,$r=new F,Zi=new F;function Sa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);let a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Mf=new vi,pr=new F,xa=new F,Hi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);let t=pr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(xa)),this.expandByPoint(pr.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new F,ba=new F,Jr=new F,Ri=new F,Ta=new F,Qr=new F,wa=new F,Do=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ba.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(ba);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=Ri.dot(this.direction),l=-Ri.dot(Jr),c=Ri.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ba).addScaledVector(Jr,d),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,s,r){Ta.subVectors(t,e),Qr.subVectors(i,e),wa.crossVectors(Ta,Qr);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);let l=a*this.direction.dot(Qr.crossVectors(Ri,Qr));if(l<0)return null;let c=a*this.direction.dot(Ta.cross(Ri));if(c<0||l+c>o)return null;let h=-a*Ri.dot(wa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,y,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Sf)}lookAt(e,t,i){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ci.crossVectors(i,Rn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ci.crossVectors(i,Rn)),Ci.normalize(),Kr.crossVectors(Rn,Ci),s[0]=Ci.x,s[4]=Kr.x,s[8]=Rn.x,s[1]=Ci.y,s[5]=Kr.y,s[9]=Rn.y,s[2]=Ci.z,s[6]=Kr.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],_=i[3],v=i[7],E=i[11],P=i[15],w=s[0],b=s[4],R=s[8],S=s[12],M=s[1],C=s[5],z=s[9],k=s[13],X=s[2],ee=s[6],Z=s[10],re=s[14],Y=s[3],pe=s[7],Se=s[11],Be=s[15];return r[0]=o*w+a*M+l*X+c*Y,r[4]=o*b+a*C+l*ee+c*pe,r[8]=o*R+a*z+l*Z+c*Se,r[12]=o*S+a*k+l*re+c*Be,r[1]=h*w+u*M+d*X+f*Y,r[5]=h*b+u*C+d*ee+f*pe,r[9]=h*R+u*z+d*Z+f*Se,r[13]=h*S+u*k+d*re+f*Be,r[2]=g*w+y*M+m*X+p*Y,r[6]=g*b+y*C+m*ee+p*pe,r[10]=g*R+y*z+m*Z+p*Se,r[14]=g*S+y*k+m*re+p*Be,r[3]=_*w+v*M+E*X+P*Y,r[7]=_*b+v*C+E*ee+P*pe,r[11]=_*R+v*z+E*Z+P*Se,r[15]=_*S+v*k+E*re+P*Be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+y*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],_=u*m*c-y*d*c+y*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,E=h*y*c-g*u*c+g*a*f-o*y*f-h*a*p+o*u*p,P=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,w=t*_+i*v+s*E+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/w;return e[0]=_*b,e[1]=(y*d*r-u*m*r-y*s*f+i*m*f+u*s*p-i*d*p)*b,e[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*p+i*l*p)*b,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*b,e[4]=v*b,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*b,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*b,e[8]=E*b,e[9]=(g*u*r-h*y*r-g*i*f+t*y*f+h*i*p-t*u*p)*b,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*p+t*a*p)*b,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*b,e[12]=P*b,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*b,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*m-t*a*m)*b,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,y=o*h,m=o*u,p=a*u,_=l*c,v=l*h,E=l*u,P=i.x,w=i.y,b=i.z;return s[0]=(1-(y+p))*P,s[1]=(f+E)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(f-E)*w,s[5]=(1-(d+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+v)*b,s[9]=(m-_)*b,s[10]=(1-(d+y))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);let c=1/r,h=1/o,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=mi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===mi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ro)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=mi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,y;if(a===mi)g=(o+r)*u,y=-2*u;else if(a===Ro)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},vs=new F,kn=new It,Af=new F(0,0,0),Sf=new F(1,1,1),Ci=new F,Kr=new F,Rn=new F,Ch=new It,Fh=new Oi,ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xf=0,Ph=new F,_s=new Oi,hi=new It,jr=new F,mr=new F,bf=new F,Tf=new Oi,Ih=new F(1,0,0),Dh=new F(0,1,0),Lh=new F(0,0,1),Uh={type:"added"},wf={type:"removed"},Ms={type:"childadded",child:null},Ra={type:"childremoved",child:null},$t=class n extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new ni,i=new Oi,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new Ke}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(mr,jr,this.up):hi.lookAt(jr,mr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(hi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};$t.DEFAULT_UP=new F(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new F,ui=new F,Ca=new F,di=new F,As=new F,Ss=new F,Nh=new F,Fa=new F,Pa=new F,Ia=new F,Da=new Pt,La=new Pt,Ua=new Pt,Di=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Gn.subVectors(s,t),ui.subVectors(i,t),Ca.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(ui),l=Gn.dot(Ca),c=ui.dot(ui),h=ui.dot(Ca),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Da.setScalar(0),La.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(e,t),La.fromBufferAttribute(e,i),Ua.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Da,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Ua,r.z),o}static isFrontFacing(e,t,i,s){return Gn.subVectors(i,t),ui.subVectors(e,t),Gn.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Gn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,i),Ss.subVectors(r,i),Fa.subVectors(e,i);let l=As.dot(Fa),c=Ss.dot(Fa);if(l<=0&&c<=0)return t.copy(i);Pa.subVectors(e,s);let h=As.dot(Pa),u=Ss.dot(Pa);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(As,o);Ia.subVectors(e,r);let f=As.dot(Ia),g=Ss.dot(Ia);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ss,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Nh,a);let p=1/(m+y+d);return o=y*p,a=d*p,t.copy(i).addScaledVector(As,o).addScaledVector(Ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=pf(e,1),t=dn(t,0,1),i=dn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let i=Ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return mt.fromWorkingColorSpace(un.copy(this),e),Math.round(dn(un.r*255,0,255))*65536+Math.round(dn(un.g*255,0,255))*256+Math.round(dn(un.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(un.copy(this),t);let i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Wt){mt.fromWorkingColorSpace(un.copy(this),e);let t=un.r,i=un.g,s=un.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(eo);let i=va(Fi.h,eo.h,t),s=va(Fi.s,eo.s,t),r=va(Fi.l,eo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Me;Me.NAMES=Ou;var Rf=0,_i=class extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Ui(),this.name="",this.blending=Li,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ka&&(i.blendSrc=this.blendSrc),this.blendDst!==ja&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},at=class extends _i{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new F,to=new ce,sn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bl,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),e}};var Uo=class extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var No=class extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var bt=class extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cf=0,Ln=new It,Ba=new $t,xs=new F,Cn=new vi,gr=new vi,tn=new F,Qt=class n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bu(e)?No:Uo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Cn.min,gr.min),Cn.expandByPoint(tn),tn.addVectors(Cn.max,gr.max),Cn.expandByPoint(tn)):(Cn.expandByPoint(gr.min),Cn.expandByPoint(gr.max))}Cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),tn.add(xs)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new F,l[R]=new F;let c=new F,h=new F,u=new F,d=new ce,f=new ce,g=new ce,y=new F,m=new F;function p(R,S,M){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[R].add(y),a[S].add(y),a[M].add(y),l[R].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,S=_.length;R<S;++R){let M=_[R],C=M.start,z=M.count;for(let k=C,X=C+z;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new F,E=new F,P=new F,w=new F;function b(R){P.fromBufferAttribute(s,R),w.copy(P);let S=a[R];v.copy(S),v.sub(P.multiplyScalar(P.dot(S))).normalize(),E.crossVectors(w,S);let C=E.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,C)}for(let R=0,S=_.length;R<S;++R){let M=_[R],C=M.start,z=M.count;for(let k=C,X=C+z;k<X;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bh=new It,$i=new Do,no=new Hi,Oh=new F,io=new F,so=new F,ro=new F,Oa=new F,oo=new F,Hh=new F,ao=new F,$=class extends $t{constructor(e=new Qt,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Oa.fromBufferAttribute(u,e),o?oo.addScaledVector(Oa,h):oo.addScaledVector(Oa.sub(t),h))}t.add(oo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(no.containsPoint($i.origin)===!1&&($i.intersectSphere(no,Oh)===null||$i.origin.distanceToSquared(Oh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Bh),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let E=_,P=v;E<P;E+=3){let w=a.getX(E),b=a.getX(E+1),R=a.getX(E+2);s=lo(this,p,e,i,c,h,u,w,b,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);s=lo(this,o,e,i,c,h,u,_,v,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=_,P=v;E<P;E+=3){let w=E,b=E+1,R=E+2;s=lo(this,p,e,i,c,h,u,w,b,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let _=m,v=m+1,E=m+2;s=lo(this,o,e,i,c,h,u,_,v,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ff(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ni,a),l===null)return null;ao.copy(a),ao.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:n}}function lo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,io),n.getVertexPosition(l,so),n.getVertexPosition(c,ro);let h=Ff(n,e,t,i,io,so,ro,Hh);if(h){let u=new F;Di.getBarycoord(Hh,io,so,ro,u),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,u,new ce)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,u,new ce)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Di.getNormal(io,so,ro,d.normal),h.face=d,h.barycoord=u}return h}var Un=class n extends Qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2));function g(y,m,p,_,v,E,P,w,b,R,S){let M=E/b,C=P/R,z=E/2,k=P/2,X=w/2,ee=b+1,Z=R+1,re=0,Y=0,pe=new F;for(let Se=0;Se<Z;Se++){let Be=Se*C-k;for(let rt=0;rt<ee;rt++){let Dt=rt*M-z;pe[y]=Dt*_,pe[m]=Be*v,pe[p]=X,c.push(pe.x,pe.y,pe.z),pe[y]=0,pe[m]=0,pe[p]=w>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(rt/b),u.push(1-Se/R),re+=1}}for(let Se=0;Se<R;Se++)for(let Be=0;Be<b;Be++){let rt=d+Be+ee*Se,Dt=d+Be+ee*(Se+1),Q=d+(Be+1)+ee*(Se+1),oe=d+(Be+1)+ee*Se;l.push(rt,Dt,oe),l.push(Dt,Q,oe),Y+=6}a.addGroup(f,Y,S),f+=Y,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=Gs(n[t]);for(let s in i)e[s]=i[s]}return e}function Pf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var js={clone:Gs,merge:mn},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends _i{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Bo=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new F,zh=new ce,kh=new ce,ln=class extends Bo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,zh,kh),t.subVectors(kh,zh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ts=1,kl=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(bs,Ts,e,t);s.layers=this.layers,this.add(s);let r=new ln(bs,Ts,e,t);r.layers=this.layers,this.add(r);let o=new ln(bs,Ts,e,t);o.layers=this.layers,this.add(o);let a=new ln(bs,Ts,e,t);a.layers=this.layers,this.add(a);let l=new ln(bs,Ts,e,t);l.layers=this.layers,this.add(l);let c=new ln(bs,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Oo=class extends Mn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gl=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Oo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ei});r.uniforms.tEquirect.value=t;let o=new $(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=Kn),new kl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ha=new F,Lf=new F,Uf=new Ke,pi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ha.subVectors(i,t).cross(Lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Uf.getNormalMatrix(e),s=this.coplanarPoint(Ha).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Hi,co=new F,Cr=class{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],_=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,m-f,E-p).normalize(),i[1].setComponents(l+r,d+c,m+f,E+p).normalize(),i[2].setComponents(l+o,d+h,m+g,E+_).normalize(),i[3].setComponents(l-o,d-h,m-g,E-_).normalize(),i[4].setComponents(l-a,d-u,m-y,E-v).normalize(),t===mi)i[5].setComponents(l+a,d+u,m+y,E+v).normalize();else if(t===Ro)i[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(co.x=s.normal.x>0?e.max.x:e.min.x,co.y=s.normal.y>0?e.max.y:e.min.y,co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Nf(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Oe=class n extends Qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let v=0;v<c;v++){let E=v*u-r;g.push(E,-_,0),y.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let v=_+c*p,E=_+c*(p+1),P=_+1+c*(p+1),w=_+1+c*p;f.push(v,E,w),f.push(E,P,w)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
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
#endif`,Hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,op=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Up=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M0=`float getShadowMask() {
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
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,V0=`#if DEPTH_PACKING == 3200
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
}`,W0=`#define DISTANCE
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
}`,X0=`#define DISTANCE
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,J0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,rm=`#define PHONG
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
}`,om=`#define STANDARD
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
}`,am=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Bf,alphahash_pars_fragment:Of,alphamap_fragment:Hf,alphamap_pars_fragment:zf,alphatest_fragment:kf,alphatest_pars_fragment:Gf,aomap_fragment:Vf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:Zf,bsdfs:$f,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:ep,clipping_planes_vertex:tp,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:op,cube_uv_reflection_fragment:ap,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:yp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Cp,envmap_vertex:vp,fog_vertex:_p,fog_pars_vertex:Mp,fog_fragment:Ap,fog_pars_fragment:Sp,gradientmap_pars_fragment:xp,lightmap_pars_fragment:bp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:wp,lights_pars_begin:Rp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Dp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Up,lights_fragment_begin:Np,lights_fragment_maps:Bp,lights_fragment_end:Op,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Gp,map_fragment:Vp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:$p,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:Kp,morphtarget_vertex:jp,normal_fragment_begin:e0,normal_fragment_maps:t0,normal_pars_fragment:n0,normal_pars_vertex:i0,normal_vertex:s0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:c0,opaque_fragment:h0,packing:u0,premultiplied_alpha_fragment:d0,project_vertex:f0,dithering_fragment:p0,dithering_pars_fragment:m0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:y0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:v0,shadowmap_vertex:_0,shadowmask_pars_fragment:M0,skinbase_vertex:A0,skinning_pars_vertex:S0,skinning_vertex:x0,skinnormal_vertex:b0,specularmap_fragment:T0,specularmap_pars_fragment:w0,tonemapping_fragment:R0,tonemapping_pars_fragment:C0,transmission_fragment:F0,transmission_pars_fragment:P0,uv_pars_fragment:I0,uv_pars_vertex:D0,uv_vertex:L0,worldpos_vertex:U0,background_vert:N0,background_frag:B0,backgroundCube_vert:O0,backgroundCube_frag:H0,cube_vert:z0,cube_frag:k0,depth_vert:G0,depth_frag:V0,distanceRGBA_vert:W0,distanceRGBA_frag:X0,equirect_vert:q0,equirect_frag:Y0,linedashed_vert:Z0,linedashed_frag:$0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:K0,meshlambert_frag:j0,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:om,meshphysical_frag:am,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:dm,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},he={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Jn={basic:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Me(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Me(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:mn([he.points,he.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:mn([he.common,he.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:mn([he.sprite,he.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:mn([he.common,he.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:mn([he.lights,he.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Jn.physical={uniforms:mn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var ho={r:0,b:0,g:0},Qi=new ni,gm=new It;function ym(n,e,t,i,s,r,o){let a=new Me(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function y(_){let v=!1,E=g(_);E===null?p(a,l):E&&E.isColor&&(p(E,1),v=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,v){let E=g(v);E&&(E.isCubeTexture||E.mapping===$o)?(h===void 0&&(h=new $(new Un(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Gs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(Qi)),h.material.toneMapped=mt.getTransfer(E.colorSpace)!==Ct,(u!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new $(new Oe(2,2),new on({name:"BackgroundMaterial",uniforms:Gs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(E.colorSpace)!==Ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(ho,Hu(n)),i.buffers.color.setClear(ho.r,ho.g,ho.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:y,addToRenderList:m}}function Em(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,C,z,k,X){let ee=!1,Z=u(k,z,C);r!==Z&&(r=Z,c(r.object)),ee=f(M,k,z,X),ee&&g(M,k,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,E(M,C,z,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,C,z){let k=z.wireframe===!0,X=i[M.id];X===void 0&&(X={},i[M.id]=X);let ee=X[C.id];ee===void 0&&(ee={},X[C.id]=ee);let Z=ee[k];return Z===void 0&&(Z=d(l()),ee[k]=Z),Z}function d(M){let C=[],z=[],k=[];for(let X=0;X<t;X++)C[X]=0,z[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,C,z,k){let X=r.attributes,ee=C.attributes,Z=0,re=z.getAttributes();for(let Y in re)if(re[Y].location>=0){let Se=X[Y],Be=ee[Y];if(Be===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Be=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Be=M.instanceColor)),Se===void 0||Se.attribute!==Be||Be&&Se.data!==Be.data)return!0;Z++}return r.attributesNum!==Z||r.index!==k}function g(M,C,z,k){let X={},ee=C.attributes,Z=0,re=z.getAttributes();for(let Y in re)if(re[Y].location>=0){let Se=ee[Y];Se===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor));let Be={};Be.attribute=Se,Se&&Se.data&&(Be.data=Se.data),X[Y]=Be,Z++}r.attributes=X,r.attributesNum=Z,r.index=k}function y(){let M=r.newAttributes;for(let C=0,z=M.length;C<z;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let z=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;z[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),X[M]!==C&&(n.vertexAttribDivisor(M,C),X[M]=C)}function _(){let M=r.newAttributes,C=r.enabledAttributes;for(let z=0,k=C.length;z<k;z++)C[z]!==M[z]&&(n.disableVertexAttribArray(z),C[z]=0)}function v(M,C,z,k,X,ee,Z){Z===!0?n.vertexAttribIPointer(M,C,z,X,ee):n.vertexAttribPointer(M,C,z,k,X,ee)}function E(M,C,z,k){y();let X=k.attributes,ee=z.getAttributes(),Z=C.defaultAttributeValues;for(let re in ee){let Y=ee[re];if(Y.location>=0){let pe=X[re];if(pe===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){let Se=pe.normalized,Be=pe.itemSize,rt=e.get(pe);if(rt===void 0)continue;let Dt=rt.buffer,Q=rt.type,oe=rt.bytesPerElement,Ie=Q===n.INT||Q===n.UNSIGNED_INT||pe.gpuType===bc;if(pe.isInterleavedBufferAttribute){let me=pe.data,Ve=me.stride,$e=pe.offset;if(me.isInstancedInterleavedBuffer){for(let ot=0;ot<Y.locationSize;ot++)p(Y.location+ot,me.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ot=0;ot<Y.locationSize;ot++)m(Y.location+ot);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let ot=0;ot<Y.locationSize;ot++)v(Y.location+ot,Be/Y.locationSize,Q,Se,Ve*oe,($e+Be/Y.locationSize*ot)*oe,Ie)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,pe.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);n.bindBuffer(n.ARRAY_BUFFER,Dt);for(let me=0;me<Y.locationSize;me++)v(Y.location+me,Be/Y.locationSize,Q,Se,Be*oe,Be/Y.locationSize*me*oe,Ie)}}else if(Z!==void 0){let Se=Z[re];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(Y.location,Se);break;case 3:n.vertexAttrib3fv(Y.location,Se);break;case 4:n.vertexAttrib4fv(Y.location,Se);break;default:n.vertexAttrib1fv(Y.location,Se)}}}}_()}function P(){R();for(let M in i){let C=i[M];for(let z in C){let k=C[z];for(let X in k)h(k[X].object),delete k[X];delete C[z]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let z in C){let k=C[z];for(let X in k)h(k[X].object),delete k[X];delete C[z]}delete i[M.id]}function b(M){for(let C in i){let z=i[C];if(z[M.id]===void 0)continue;let k=z[M.id];for(let X in k)h(k[X].object),delete k[X];delete z[M.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function vm(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _m(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Vn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let R=b===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==yi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==jn&&!R)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:P,maxSamples:w}}function Mm(n){let e=this,t=null,i=0,s=!1,r=!1,o=new pi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,v=_*4,E=p.clippingState||null;l.value=E,E=h(g,d,v,f);for(let P=0;P!==v;++P)E[P]=t[P];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=f;v!==y;++v,E+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Am(n){let e=new WeakMap;function t(o,a){return a===al?o.mapping=Os:a===ll&&(o.mapping=Hs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===al||a===ll)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Vs=class extends Bo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=4,Gh=[.125,.215,.35,.446,.526,.582],ts=20,za=new Vs,Vh=new Me,ka=null,Ga=0,Va=0,Wa=!1,ji=(1+Math.sqrt(5))/2,ws=1/ji,Wh=[new F(-ji,ws,0),new F(ji,ws,0),new F(-ws,0,ji),new F(ws,0,ji),new F(0,ji,-ws),new F(0,ji,ws),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ga,Va),this._renderer.xr.enabled=Wa,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:An,format:Vn,colorSpace:ki,depthBuffer:!1},s=Xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(r)),this._blurMaterial=xm(r,e,t)}return s}_compileMaterial(e){let t=new $(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,i,s){let a=new ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vh),h.toneMapping=ti,h.autoClear=!1;let f=new at({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new $(new Un,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(Vh),y=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;uo(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Os||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,za)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wh[(s-r-1)%Wh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);let p=[],_=0;for(let b=0;b<ts;++b){let R=b/y,S=Math.exp(-R*R/2);p.push(S),b===0?_+=S:b<m&&(_+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let E=this._sizeLods[s],P=3*E*(s>v-Ds?s-v+Ds:0),w=4*(this._cubeSize-E);uo(t,P,w,3*E,2*E),l.setRenderTarget(t),l.render(u,za)}};function Sm(n){let e=[],t=[],i=[],s=n,r=n-Ds+1+Gh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ds?l=Gh[o-n+Ds-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,_=new Float32Array(y*g*f),v=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let w=0;w<f;w++){let b=w%3*2/3-1,R=w>2?0:-1,S=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];_.set(S,y*g*w),v.set(d,m*g*w);let M=[w,w,w,w,w,w];E.set(M,p*g*w)}let P=new Qt;P.setAttribute("position",new sn(_,y)),P.setAttribute("uv",new sn(v,m)),P.setAttribute("faceIndex",new sn(E,p)),e.push(P),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xh(n,e,t){let i=new rn(n,e,t);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xm(n,e,t){let i=new Float32Array(ts),s=new F(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function qh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Yh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function bm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===al||l===ll,h=l===Os||l===Hs;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ho(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ho(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Tm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Sr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function wm(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let _=f.array;y=f.version;for(let v=0,E=_.length;v<E;v+=3){let P=_[v+0],w=_[v+1],b=_[v+2];d.push(P,w,w,b,b,P)}}else if(g!==void 0){let _=g.array;y=g.version;for(let v=0,E=_.length/3-1;v<E;v+=3){let P=v+0,w=v+1,b=v+2;d.push(P,w,w,b,b,P)}}else return;let m=new(Bu(d)?No:Uo)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rm(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,y,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*y[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fm(n,e,t){let i=new WeakMap,s=new Pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let E=a.attributes.position.count*v,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let w=new Float32Array(E*P*4*u),b=new Io(w,E,P,u);b.type=jn,b.needsUpdate=!0;let R=v*4;for(let M=0;M<u;M++){let C=m[M],z=p[M],k=_[M],X=E*P*4*M;for(let ee=0;ee<C.count;ee++){let Z=ee*R;f===!0&&(s.fromBufferAttribute(C,ee),w[X+Z+0]=s.x,w[X+Z+1]=s.y,w[X+Z+2]=s.z,w[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(z,ee),w[X+Z+4]=s.x,w[X+Z+5]=s.y,w[X+Z+6]=s.z,w[X+Z+7]=0),y===!0&&(s.fromBufferAttribute(k,ee),w[X+Z+8]=s.x,w[X+Z+9]=s.y,w[X+Z+10]=s.z,w[X+Z+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new ce(E,P)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Pm(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ws=class extends Mn{constructor(e,t,i,s,r,o,a,l,c,h=Ls){if(h!==Ls&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ls&&(i=Ei),i===void 0&&h===ks&&(i=zs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ku=new Mn,Zh=new Ws(1,1),Gu=new Io,Vu=new zl,Wu=new Oo,$h=[],Jh=[],Qh=new Float32Array(16),Kh=new Float32Array(9),jh=new Float32Array(4);function er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Im(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function Lm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function Um(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function Nm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,i))return;jh.set(i),n.uniformMatrix2fv(this.addr,!1,jh),jt(t,i)}}function Bm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,i))return;Kh.set(i),n.uniformMatrix3fv(this.addr,!1,Kh),jt(t,i)}}function Om(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),jt(t,i)}}function Hm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function Gm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function Vm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Wm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function Xm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function Ym(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=Nu,r=Zh):r=ku,t.setTexture2D(e||r,s)}function Zm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vu,s)}function $m(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wu,s)}function Jm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gu,s)}function Qm(n){switch(n){case 5126:return Im;case 35664:return Dm;case 35665:return Lm;case 35666:return Um;case 35674:return Nm;case 35675:return Bm;case 35676:return Om;case 5124:case 35670:return Hm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Jm}}function Km(n,e){n.uniform1fv(this.addr,e)}function jm(n,e){let t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function e1(n,e){let t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function t1(n,e){let t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function n1(n,e){let t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function i1(n,e){let t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function s1(n,e){let t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function r1(n,e){n.uniform1iv(this.addr,e)}function o1(n,e){n.uniform2iv(this.addr,e)}function a1(n,e){n.uniform3iv(this.addr,e)}function l1(n,e){n.uniform4iv(this.addr,e)}function c1(n,e){n.uniform1uiv(this.addr,e)}function h1(n,e){n.uniform2uiv(this.addr,e)}function u1(n,e){n.uniform3uiv(this.addr,e)}function d1(n,e){n.uniform4uiv(this.addr,e)}function f1(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ku,r[o])}function p1(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vu,r[o])}function m1(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wu,r[o])}function g1(n,e,t){let i=this.cache,s=e.length,r=Qo(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gu,r[o])}function y1(n){switch(n){case 5126:return Km;case 35664:return jm;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return s1;case 5124:case 35670:return r1;case 35667:case 35671:return o1;case 35668:case 35672:return a1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return h1;case 36295:return u1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}var Vl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}},Wl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y1(t.type)}},Xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Xa=/(\w+)(\])?(\[|\.)?/g;function eu(n,e){n.seq.push(e),n.map[e.id]=e}function E1(n,e,t){let i=n.name,s=i.length;for(Xa.lastIndex=0;;){let r=Xa.exec(i),o=Xa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){eu(t,c===void 0?new Vl(a,n,e):new Wl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Xl(a),eu(t,u)),t=u}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);E1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function tu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var v1=37297,_1=0;function M1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var nu=new Ke;function A1(n){mt._getMatrix(nu,mt.workingColorSpace,n);let e=`mat3( ${nu.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Jo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function iu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+M1(n.getShaderSource(e),o)}else return s}function S1(n,e){let t=A1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x1(n,e){let t;switch(e){case Jd:t="Linear";break;case Qd:t="Reinhard";break;case Kd:t="Cineon";break;case jd:t="ACESFilmic";break;case tf:t="AgX";break;case nf:t="Neutral";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fo=new F;function b1(){mt.getLuminanceCoefficients(fo);let n=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function w1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function R1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xr(n){return n!==""}function su(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ru(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(C1,P1)}var F1=new Map;function P1(n,e){let t=tt[e];if(t===void 0){let i=F1.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ql(t)}var I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(n){return n.replace(I1,D1)}function D1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function au(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function L1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function U1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Os:case Hs:e="ENVMAP_TYPE_CUBE";break;case $o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function B1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Zd:e="ENVMAP_BLENDING_MIX";break;case $d:e="ENVMAP_BLENDING_ADD";break}return e}function O1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function H1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=L1(t),c=U1(t),h=N1(t),u=B1(t),d=O1(t),f=T1(t),g=w1(r),y=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?tt.tonemapping_pars_fragment:"",t.toneMapping!==ti?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,S1("linearToOutputTexel",t.outputColorSpace),b1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=ql(o),o=su(o,t),o=ru(o,t),a=ql(a),a=su(a,t),a=ru(a,t),o=ou(o),a=ou(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+o,E=_+p+a,P=tu(s,s.VERTEX_SHADER,v),w=tu(s,s.FRAGMENT_SHADER,E);s.attachShader(y,P),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function b(C){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(y).trim(),k=s.getShaderInfoLog(P).trim(),X=s.getShaderInfoLog(w).trim(),ee=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,P,w);else{let re=iu(s,P,"vertex"),Y=iu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+re+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||X==="")&&(Z=!1);Z&&(C.diagnostics={runnable:ee,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(P),s.deleteShader(w),R=new Ns(s,y),S=R1(s,y)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,v1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=w,this}var z1=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zl(e),t.set(e,i)),i}},Zl=class{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}};function k1(n,e,t,i,s,r,o){let a=new Lo,l=new Yl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,z,k){let X=z.fog,ee=k.geometry,Z=S.isMeshStandardMaterial?z.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=re&&re.mapping===$o?re.image.height:null,pe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Se=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Be=Se!==void 0?Se.length:0,rt=0;ee.morphAttributes.position!==void 0&&(rt=1),ee.morphAttributes.normal!==void 0&&(rt=2),ee.morphAttributes.color!==void 0&&(rt=3);let Dt,Q,oe,Ie;if(pe){let Tt=Jn[pe];Dt=Tt.vertexShader,Q=Tt.fragmentShader}else Dt=S.vertexShader,Q=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),Ie=l.getFragmentShaderID(S);let me=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),$e=k.isInstancedMesh===!0,ot=k.isBatchedMesh===!0,Vt=!!S.map,ft=!!S.matcap,Zt=!!re,B=!!S.aoMap,In=!!S.lightMap,ct=!!S.bumpMap,ht=!!S.normalMap,ze=!!S.displacementMap,Ot=!!S.emissiveMap,He=!!S.metalnessMap,T=!!S.roughnessMap,A=S.anisotropy>0,G=S.clearcoat>0,K=S.dispersion>0,te=S.iridescence>0,J=S.sheen>0,De=S.transmission>0,ge=A&&!!S.anisotropyMap,xe=G&&!!S.clearcoatMap,pt=G&&!!S.clearcoatNormalMap,ie=G&&!!S.clearcoatRoughnessMap,be=te&&!!S.iridescenceMap,ke=te&&!!S.iridescenceThicknessMap,Ye=J&&!!S.sheenColorMap,Te=J&&!!S.sheenRoughnessMap,ut=!!S.specularMap,et=!!S.specularColorMap,Lt=!!S.specularIntensityMap,L=De&&!!S.transmissionMap,fe=De&&!!S.thicknessMap,q=!!S.gradientMap,j=!!S.alphaMap,_e=S.alphaTest>0,ye=!!S.alphaHash,Je=!!S.extensions,Yt=ti;S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Yt=n.toneMapping);let cn={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Dt,fragmentShader:Q,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:Ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ot,batchingColor:ot&&k._colorsTexture!==null,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ki,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:ft,envMap:Zt,envMapMode:Zt&&re.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:In,bumpMap:ct,normalMap:ht,displacementMap:d&&ze,emissiveMap:Ot,normalMapObjectSpace:ht&&S.normalMapType===of,normalMapTangentSpace:ht&&S.normalMapType===Uu,metalnessMap:He,roughnessMap:T,anisotropy:A,anisotropyMap:ge,clearcoat:G,clearcoatMap:xe,clearcoatNormalMap:pt,clearcoatRoughnessMap:ie,dispersion:K,iridescence:te,iridescenceMap:be,iridescenceThicknessMap:ke,sheen:J,sheenColorMap:Ye,sheenRoughnessMap:Te,specularMap:ut,specularColorMap:et,specularIntensityMap:Lt,transmission:De,transmissionMap:L,thicknessMap:fe,gradientMap:q,opaque:S.transparent===!1&&S.blending===Li&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:_e,alphaHash:ye,combine:S.combine,mapUv:Vt&&y(S.map.channel),aoMapUv:B&&y(S.aoMap.channel),lightMapUv:In&&y(S.lightMap.channel),bumpMapUv:ct&&y(S.bumpMap.channel),normalMapUv:ht&&y(S.normalMap.channel),displacementMapUv:ze&&y(S.displacementMap.channel),emissiveMapUv:Ot&&y(S.emissiveMap.channel),metalnessMapUv:He&&y(S.metalnessMap.channel),roughnessMapUv:T&&y(S.roughnessMap.channel),anisotropyMapUv:ge&&y(S.anisotropyMap.channel),clearcoatMapUv:xe&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&y(S.sheenRoughnessMap.channel),specularMapUv:ut&&y(S.specularMap.channel),specularColorMapUv:et&&y(S.specularColorMap.channel),specularIntensityMapUv:Lt&&y(S.specularIntensityMap.channel),transmissionMapUv:L&&y(S.transmissionMap.channel),thicknessMapUv:fe&&y(S.thicknessMap.channel),alphaMapUv:j&&y(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ht||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(Vt||j),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ve,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===Ct,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===Ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wt,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Je&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&S.extensions.multiDraw===!0||ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return cn.vertexUv1s=c.has(1),cn.vertexUv2s=c.has(2),cn.vertexUv3s=c.has(3),c.clear(),cn}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(_(M,S),v(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function E(S){let M=g[S.type],C;if(M){let z=Jn[M];C=js.clone(z.uniforms)}else C=S.uniforms;return C}function P(S,M){let C;for(let z=0,k=h.length;z<k;z++){let X=h[z];if(X.cacheKey===M){C=X,++C.usedTimes;break}}return C===void 0&&(C=new H1(n,M,S,r),h.push(C)),C}function w(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:P,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:R}}function G1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function V1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function cu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,y,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function a(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,y,m){let p=o(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||V1),i.length>1&&i.sort(d||lu),s.length>1&&s.sort(d||lu)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function W1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new cu,n.set(i,[o])):s>=r.length?(o=new cu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function X1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Me};break;case"SpotLight":t={position:new F,direction:new F,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function q1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Y1=0;function Z1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $1(n){let e=new X1,t=q1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new It,o=new It;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,_=0,v=0,E=0,P=0,w=0,b=0;c.sort(Z1);for(let S=0,M=c.length;S<M;S++){let C=c[S],z=C.color,k=C.intensity,X=C.distance,ee=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(C.sh.coefficients[Z],k);b++}else if(C.isDirectionalLight){let Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let re=C.shadow,Y=t.get(C);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=ee,i.directionalShadowMatrix[f]=C.shadow.matrix,_++}i.directional[f]=Z,f++}else if(C.isSpotLight){let Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(z).multiplyScalar(k),Z.distance=X,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,i.spot[y]=Z;let re=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,re.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[y]=re.matrix,C.castShadow){let Y=t.get(C);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=ee,E++}y++}else if(C.isRectAreaLight){let Z=e.get(C);Z.color.copy(z).multiplyScalar(k),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=Z,m++}else if(C.isPointLight){let Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){let re=C.shadow,Y=t.get(C);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,Y.shadowCameraNear=re.camera.near,Y.shadowCameraFar=re.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=C.shadow.matrix,v++}i.point[g]=Z,g++}else if(C.isHemisphereLight){let Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(k),Z.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==E||R.numSpotMaps!==P||R.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,R.directionalLength=f,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=E,R.numSpotMaps=P,R.numLightProbes=b,i.version=Y1++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++}else if(v.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let E=i.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function hu(n){let e=new $1(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function J1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new hu(n),e.set(s,[a])):r>=o.length?(a=new hu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var zi=class extends _i{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends _i{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
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
}`;function j1(n,e,t){let i=new Cr,s=new ce,r=new ce,o=new Pt,a=new zi({depthPacking:Ks}),l=new $l,c={},h=t.maxTextureSize,u={[Ni]:nn,[nn]:Ni,[wt]:wt},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Q1,fragmentShader:K1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new $(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let p=this.type;this.render=function(w,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ei),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==fi&&this.type===fi,X=p===fi&&this.type!==fi;for(let ee=0,Z=w.length;ee<Z;ee++){let re=w[ee],Y=re.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let pe=Y.getFrameExtents();if(s.multiply(pe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||X===!0){let Be=this.type!==fi?{minFilter:Fn,magFilter:Fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new rn(s.x,s.y,Be),Y.map.texture.name=re.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Se=Y.getViewportCount();for(let Be=0;Be<Se;Be++){let rt=Y.getViewport(Be);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),z.viewport(o),Y.updateMatrices(re,Be),i=Y.getFrustum(),E(b,R,Y.camera,re,this.type)}Y.isPointLightShadow!==!0&&this.type===fi&&_(Y,R),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,C)};function _(w,b){let R=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,R,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,R,f,y,null)}function v(w,b,R,S){let M=null,C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let z=M.uuid,k=b.uuid,X=c[z];X===void 0&&(X={},c[z]=X);let ee=X[k];ee===void 0&&(ee=M.clone(),X[k]=ee,b.addEventListener("dispose",P)),M=ee}if(M.visible=b.visible,M.wireframe=b.wireframe,S===fi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=n.properties.get(M);z.light=R}return M}function E(w,b,R,S,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===fi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let k=e.update(w),X=w.material;if(Array.isArray(X)){let ee=k.groups;for(let Z=0,re=ee.length;Z<re;Z++){let Y=ee[Z],pe=X[Y.materialIndex];if(pe&&pe.visible){let Se=v(w,pe,S,M);w.onBeforeShadow(n,w,b,R,k,Se,Y),n.renderBufferDirect(R,null,k,Se,w,Y),w.onAfterShadow(n,w,b,R,k,Se,Y)}}}else if(X.visible){let ee=v(w,X,S,M);w.onBeforeShadow(n,w,b,R,k,ee,null),n.renderBufferDirect(R,null,k,ee,w,null),w.onAfterShadow(n,w,b,R,k,ee,null)}}let z=w.children;for(let k=0,X=z.length;k<X;k++)E(z[k],b,R,S,M)}function P(w){w.target.removeEventListener("dispose",P);for(let R in c){let S=c[R],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var e2={[el]:tl,[nl]:rl,[il]:ol,[Bs]:sl,[tl]:el,[rl]:nl,[ol]:il,[sl]:Bs};function t2(n,e){function t(){let L=!1,fe=new Pt,q=null,j=new Pt(0,0,0,0);return{setMask:function(_e){q!==_e&&!L&&(n.colorMask(_e,_e,_e,_e),q=_e)},setLocked:function(_e){L=_e},setClear:function(_e,ye,Je,Yt,cn){cn===!0&&(_e*=Yt,ye*=Yt,Je*=Yt),fe.set(_e,ye,Je,Yt),j.equals(fe)===!1&&(n.clearColor(_e,ye,Je,Yt),j.copy(fe))},reset:function(){L=!1,q=null,j.set(-1,0,0,0)}}}function i(){let L=!1,fe=!1,q=null,j=null,_e=null;return{setReversed:function(ye){if(fe!==ye){let Je=e.get("EXT_clip_control");fe?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);let Yt=_e;_e=null,this.setClear(Yt)}fe=ye},getReversed:function(){return fe},setTest:function(ye){ye?me(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(ye){q!==ye&&!L&&(n.depthMask(ye),q=ye)},setFunc:function(ye){if(fe&&(ye=e2[ye]),j!==ye){switch(ye){case el:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case nl:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case il:n.depthFunc(n.EQUAL);break;case sl:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ye}},setLocked:function(ye){L=ye},setClear:function(ye){_e!==ye&&(fe&&(ye=1-ye),n.clearDepth(ye),_e=ye)},reset:function(){L=!1,q=null,j=null,_e=null,fe=!1}}}function s(){let L=!1,fe=null,q=null,j=null,_e=null,ye=null,Je=null,Yt=null,cn=null;return{setTest:function(Tt){L||(Tt?me(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(Tt){fe!==Tt&&!L&&(n.stencilMask(Tt),fe=Tt)},setFunc:function(Tt,On,oi){(q!==Tt||j!==On||_e!==oi)&&(n.stencilFunc(Tt,On,oi),q=Tt,j=On,_e=oi)},setOp:function(Tt,On,oi){(ye!==Tt||Je!==On||Yt!==oi)&&(n.stencilOp(Tt,On,oi),ye=Tt,Je=On,Yt=oi)},setLocked:function(Tt){L=Tt},setClear:function(Tt){cn!==Tt&&(n.clearStencil(Tt),cn=Tt)},reset:function(){L=!1,fe=null,q=null,j=null,_e=null,ye=null,Je=null,Yt=null,cn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,_=null,v=null,E=null,P=null,w=null,b=new Me(0,0,0),R=0,S=!1,M=null,C=null,z=null,k=null,X=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,re=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=re>=2);let pe=null,Se={},Be=n.getParameter(n.SCISSOR_BOX),rt=n.getParameter(n.VIEWPORT),Dt=new Pt().fromArray(Be),Q=new Pt().fromArray(rt);function oe(L,fe,q,j){let _e=new Uint8Array(4),ye=n.createTexture();n.bindTexture(L,ye),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<q;Je++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(fe+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ye}let Ie={};Ie[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ie[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ie[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(Bs),ct(!1),ht(ph),me(n.CULL_FACE),B(ei);function me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ve(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function $e(L,fe){return u[L]!==fe?(n.bindFramebuffer(L,fe),u[L]=fe,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=fe),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function ot(L,fe){let q=f,j=!1;if(L){q=d.get(fe),q===void 0&&(q=[],d.set(fe,q));let _e=L.textures;if(q.length!==_e.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Je=_e.length;ye<Je;ye++)q[ye]=n.COLOR_ATTACHMENT0+ye;q.length=_e.length,j=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,j=!0);j&&n.drawBuffers(q)}function Vt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let ft={[es]:n.FUNC_ADD,[Pd]:n.FUNC_SUBTRACT,[Id]:n.FUNC_REVERSE_SUBTRACT};ft[Dd]=n.MIN,ft[Ld]=n.MAX;let Zt={[Ud]:n.ZERO,[Nd]:n.ONE,[Bd]:n.SRC_COLOR,[Ka]:n.SRC_ALPHA,[Vd]:n.SRC_ALPHA_SATURATE,[kd]:n.DST_COLOR,[Hd]:n.DST_ALPHA,[Od]:n.ONE_MINUS_SRC_COLOR,[ja]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[zd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function B(L,fe,q,j,_e,ye,Je,Yt,cn,Tt){if(L===ei){y===!0&&(Ve(n.BLEND),y=!1);return}if(y===!1&&(me(n.BLEND),y=!0),L!==Fd){if(L!==m||Tt!==S){if((p!==es||E!==es)&&(n.blendEquation(n.FUNC_ADD),p=es,E=es),Tt)switch(L){case Li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vn:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,v=null,P=null,w=null,b.set(0,0,0),R=0,m=L,S=Tt}return}_e=_e||fe,ye=ye||q,Je=Je||j,(fe!==p||_e!==E)&&(n.blendEquationSeparate(ft[fe],ft[_e]),p=fe,E=_e),(q!==_||j!==v||ye!==P||Je!==w)&&(n.blendFuncSeparate(Zt[q],Zt[j],Zt[ye],Zt[Je]),_=q,v=j,P=ye,w=Je),(Yt.equals(b)===!1||cn!==R)&&(n.blendColor(Yt.r,Yt.g,Yt.b,cn),b.copy(Yt),R=cn),m=L,S=!1}function In(L,fe){L.side===wt?Ve(n.CULL_FACE):me(n.CULL_FACE);let q=L.side===nn;fe&&(q=!q),ct(q),L.blending===Li&&L.transparent===!1?B(ei):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function ht(L){L!==Rd?(me(n.CULL_FACE),L!==C&&(L===ph?n.cullFace(n.BACK):L===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),C=L}function ze(L){L!==z&&(Z&&n.lineWidth(L),z=L)}function Ot(L,fe,q){L?(me(n.POLYGON_OFFSET_FILL),(k!==fe||X!==q)&&(n.polygonOffset(fe,q),k=fe,X=q)):Ve(n.POLYGON_OFFSET_FILL)}function He(L){L?me(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function T(L){L===void 0&&(L=n.TEXTURE0+ee-1),pe!==L&&(n.activeTexture(L),pe=L)}function A(L,fe,q){q===void 0&&(pe===null?q=n.TEXTURE0+ee-1:q=pe);let j=Se[q];j===void 0&&(j={type:void 0,texture:void 0},Se[q]=j),(j.type!==L||j.texture!==fe)&&(pe!==q&&(n.activeTexture(q),pe=q),n.bindTexture(L,fe||Ie[L]),j.type=L,j.texture=fe)}function G(){let L=Se[pe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(L){Dt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Dt.copy(L))}function Te(L){Q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function ut(L,fe){let q=c.get(fe);q===void 0&&(q=new WeakMap,c.set(fe,q));let j=q.get(L);j===void 0&&(j=n.getUniformBlockIndex(fe,L.name),q.set(L,j))}function et(L,fe){let j=c.get(fe).get(L);l.get(fe)!==j&&(n.uniformBlockBinding(fe,j,L.__bindingPointIndex),l.set(fe,j))}function Lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pe=null,Se={},u={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,_=null,v=null,E=null,P=null,w=null,b=new Me(0,0,0),R=0,S=!1,M=null,C=null,z=null,k=null,X=null,Dt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Ve,bindFramebuffer:$e,drawBuffers:ot,useProgram:Vt,setBlending:B,setMaterial:In,setFlipSided:ct,setCullFace:ht,setLineWidth:ze,setPolygonOffset:Ot,setScissorTest:He,activeTexture:T,bindTexture:A,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:be,texImage3D:ke,updateUBOMapping:ut,uniformBlockBinding:et,texStorage2D:pt,texStorage3D:ie,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:ge,compressedTexSubImage3D:xe,scissor:Ye,viewport:Te,reset:Lt}}function uu(n,e,t,i){let s=n2(i);switch(t){case Cu:return n*e;case Pu:return n*e;case Iu:return n*e*2;case Rc:return n*e/s.components*s.byteLength;case Cc:return n*e/s.components*s.byteLength;case Du:return n*e*2/s.components*s.byteLength;case Fc:return n*e*2/s.components*s.byteLength;case Fu:return n*e*3/s.components*s.byteLength;case Vn:return n*e*4/s.components*s.byteLength;case Pc:return n*e*4/s.components*s.byteLength;case Ao:case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xo:case bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case fl:return Math.max(n,16)*Math.max(e,8)/4;case hl:case dl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case To:case Pl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lu:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ll:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n2(n){switch(n){case yi:case Tu:return{byteLength:1,components:1};case Rr:case wu:case An:return{byteLength:2,components:1};case Tc:case wc:return{byteLength:2,components:4};case Ei:case bc:case jn:return{byteLength:4,components:1};case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function i2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,A){return f?new OffscreenCanvas(T,A):Fo("canvas")}function y(T,A,G){let K=1,te=He(T);if((te.width>G||te.height>G)&&(K=G/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let J=Math.floor(K*te.width),De=Math.floor(K*te.height);u===void 0&&(u=g(J,De));let ge=A?g(J,De):u;return ge.width=J,ge.height=De,ge.getContext("2d").drawImage(T,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+De+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,A,G,K,te=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=A;if(A===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),A===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),A===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),A===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),A===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),A===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),A===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),A===n.RGBA){let De=te?Jo:mt.getTransfer(K);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=De===Ct?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(T,A){let G;return T?A===null||A===Ei||A===zs?G=n.DEPTH24_STENCIL8:A===jn?G=n.DEPTH32F_STENCIL8:A===Rr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ei||A===zs?G=n.DEPTH_COMPONENT24:A===jn?G=n.DEPTH_COMPONENT32F:A===Rr&&(G=n.DEPTH_COMPONENT16),G}function P(T,A){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Fn&&T.minFilter!==Kn?Math.log2(Math.max(A.width,A.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?A.mipmaps.length:1}function w(T){let A=T.target;A.removeEventListener("dispose",w),R(A),A.isVideoTexture&&h.delete(A)}function b(T){let A=T.target;A.removeEventListener("dispose",b),M(A)}function R(T){let A=i.get(T);if(A.__webglInit===void 0)return;let G=T.source,K=d.get(G);if(K){let te=K[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(T),Object.keys(K).length===0&&d.delete(G)}i.remove(T)}function S(T){let A=i.get(T);n.deleteTexture(A.__webglTexture);let G=T.source,K=d.get(G);delete K[A.__cacheKey],o.memory.textures--}function M(T){let A=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(A.__webglFramebuffer[K]))for(let te=0;te<A.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(A.__webglFramebuffer[K][te]);else n.deleteFramebuffer(A.__webglFramebuffer[K]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[K])}else{if(Array.isArray(A.__webglFramebuffer))for(let K=0;K<A.__webglFramebuffer.length;K++)n.deleteFramebuffer(A.__webglFramebuffer[K]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let K=0;K<A.__webglColorRenderbuffer.length;K++)A.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[K]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let G=T.textures;for(let K=0,te=G.length;K<te;K++){let J=i.get(G[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[K])}i.remove(T)}let C=0;function z(){C=0}function k(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function X(T){let A=[];return A.push(T.wrapS),A.push(T.wrapT),A.push(T.wrapR||0),A.push(T.magFilter),A.push(T.minFilter),A.push(T.anisotropy),A.push(T.internalFormat),A.push(T.format),A.push(T.type),A.push(T.generateMipmaps),A.push(T.premultiplyAlpha),A.push(T.flipY),A.push(T.unpackAlignment),A.push(T.colorSpace),A.join()}function ee(T,A){let G=i.get(T);if(T.isVideoTexture&&ze(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,T,A);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+A)}function Z(T,A){let G=i.get(T);if(T.version>0&&G.__version!==T.version){Q(G,T,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+A)}function re(T,A){let G=i.get(T);if(T.version>0&&G.__version!==T.version){Q(G,T,A);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+A)}function Y(T,A){let G=i.get(T);if(T.version>0&&G.__version!==T.version){oe(G,T,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+A)}let pe={[_n]:n.REPEAT,[ns]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},Se={[Fn]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Be={[af]:n.NEVER,[ff]:n.ALWAYS,[lf]:n.LESS,[Nu]:n.LEQUAL,[cf]:n.EQUAL,[df]:n.GEQUAL,[hf]:n.GREATER,[uf]:n.NOTEQUAL};function rt(T,A){if(A.type===jn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Kn||A.magFilter===ga||A.magFilter===qr||A.magFilter===is||A.minFilter===Kn||A.minFilter===ga||A.minFilter===qr||A.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,pe[A.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,pe[A.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,pe[A.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Se[A.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Se[A.minFilter]),A.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Be[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==qr&&A.minFilter!==is||A.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Dt(T,A){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,A.addEventListener("dispose",w));let K=A.source,te=d.get(K);te===void 0&&(te={},d.set(K,te));let J=X(A);if(J!==T.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[J].usedTimes++;let De=te[T.__cacheKey];De!==void 0&&(te[T.__cacheKey].usedTimes--,De.usedTimes===0&&S(A)),T.__cacheKey=J,T.__webglTexture=te[J].texture}return G}function Q(T,A,G){let K=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(K=n.TEXTURE_3D);let te=Dt(T,A),J=A.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+G);let De=i.get(J);if(J.version!==De.__version||te===!0){t.activeTexture(n.TEXTURE0+G);let ge=mt.getPrimaries(mt.workingColorSpace),xe=A.colorSpace===Ii?null:mt.getPrimaries(A.colorSpace),pt=A.colorSpace===Ii||ge===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let ie=y(A.image,!1,s.maxTextureSize);ie=Ot(A,ie);let be=r.convert(A.format,A.colorSpace),ke=r.convert(A.type),Ye=v(A.internalFormat,be,ke,A.colorSpace,A.isVideoTexture);rt(K,A);let Te,ut=A.mipmaps,et=A.isVideoTexture!==!0,Lt=De.__version===void 0||te===!0,L=J.dataReady,fe=P(A,ie);if(A.isDepthTexture)Ye=E(A.format===ks,A.type),Lt&&(et?t.texStorage2D(n.TEXTURE_2D,1,Ye,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ye,ie.width,ie.height,0,be,ke,null));else if(A.isDataTexture)if(ut.length>0){et&&Lt&&t.texStorage2D(n.TEXTURE_2D,fe,Ye,ut[0].width,ut[0].height);for(let q=0,j=ut.length;q<j;q++)Te=ut[q],et?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,be,ke,Te.data):t.texImage2D(n.TEXTURE_2D,q,Ye,Te.width,Te.height,0,be,ke,Te.data);A.generateMipmaps=!1}else et?(Lt&&t.texStorage2D(n.TEXTURE_2D,fe,Ye,ie.width,ie.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,be,ke,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ye,ie.width,ie.height,0,be,ke,ie.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ye,ut[0].width,ut[0].height,ie.depth);for(let q=0,j=ut.length;q<j;q++)if(Te=ut[q],A.format!==Vn)if(be!==null)if(et){if(L)if(A.layerUpdates.size>0){let _e=uu(Te.width,Te.height,A.format,A.type);for(let ye of A.layerUpdates){let Je=Te.data.subarray(ye*_e/Te.data.BYTES_PER_ELEMENT,(ye+1)*_e/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ye,Te.width,Te.height,1,be,Je)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,ie.depth,be,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ye,Te.width,Te.height,ie.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,ie.depth,be,ke,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ye,Te.width,Te.height,ie.depth,0,be,ke,Te.data)}else{et&&Lt&&t.texStorage2D(n.TEXTURE_2D,fe,Ye,ut[0].width,ut[0].height);for(let q=0,j=ut.length;q<j;q++)Te=ut[q],A.format!==Vn?be!==null?et?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ye,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,be,ke,Te.data):t.texImage2D(n.TEXTURE_2D,q,Ye,Te.width,Te.height,0,be,ke,Te.data)}else if(A.isDataArrayTexture)if(et){if(Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Ye,ie.width,ie.height,ie.depth),L)if(A.layerUpdates.size>0){let q=uu(ie.width,ie.height,A.format,A.type);for(let j of A.layerUpdates){let _e=ie.data.subarray(j*q/ie.data.BYTES_PER_ELEMENT,(j+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,be,ke,_e)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,be,ke,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ye,ie.width,ie.height,ie.depth,0,be,ke,ie.data);else if(A.isData3DTexture)et?(Lt&&t.texStorage3D(n.TEXTURE_3D,fe,Ye,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,be,ke,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ye,ie.width,ie.height,ie.depth,0,be,ke,ie.data);else if(A.isFramebufferTexture){if(Lt)if(et)t.texStorage2D(n.TEXTURE_2D,fe,Ye,ie.width,ie.height);else{let q=ie.width,j=ie.height;for(let _e=0;_e<fe;_e++)t.texImage2D(n.TEXTURE_2D,_e,Ye,q,j,0,be,ke,null),q>>=1,j>>=1}}else if(ut.length>0){if(et&&Lt){let q=He(ut[0]);t.texStorage2D(n.TEXTURE_2D,fe,Ye,q.width,q.height)}for(let q=0,j=ut.length;q<j;q++)Te=ut[q],et?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be,ke,Te):t.texImage2D(n.TEXTURE_2D,q,Ye,be,ke,Te);A.generateMipmaps=!1}else if(et){if(Lt){let q=He(ie);t.texStorage2D(n.TEXTURE_2D,fe,Ye,q.width,q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,ke,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ye,be,ke,ie);m(A)&&p(K),De.__version=J.version,A.onUpdate&&A.onUpdate(A)}T.__version=A.version}function oe(T,A,G){if(A.image.length!==6)return;let K=Dt(T,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);let J=i.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+G);let De=mt.getPrimaries(mt.workingColorSpace),ge=A.colorSpace===Ii?null:mt.getPrimaries(A.colorSpace),xe=A.colorSpace===Ii||De===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let pt=A.isCompressedTexture||A.image[0].isCompressedTexture,ie=A.image[0]&&A.image[0].isDataTexture,be=[];for(let j=0;j<6;j++)!pt&&!ie?be[j]=y(A.image[j],!0,s.maxCubemapSize):be[j]=ie?A.image[j].image:A.image[j],be[j]=Ot(A,be[j]);let ke=be[0],Ye=r.convert(A.format,A.colorSpace),Te=r.convert(A.type),ut=v(A.internalFormat,Ye,Te,A.colorSpace),et=A.isVideoTexture!==!0,Lt=J.__version===void 0||K===!0,L=te.dataReady,fe=P(A,ke);rt(n.TEXTURE_CUBE_MAP,A);let q;if(pt){et&&Lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ut,ke.width,ke.height);for(let j=0;j<6;j++){q=be[j].mipmaps;for(let _e=0;_e<q.length;_e++){let ye=q[_e];A.format!==Vn?Ye!==null?et?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,ye.width,ye.height,Ye,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,ut,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,0,0,ye.width,ye.height,Ye,Te,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e,ut,ye.width,ye.height,0,Ye,Te,ye.data)}}}else{if(q=A.mipmaps,et&&Lt){q.length>0&&fe++;let j=He(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ut,j.width,j.height)}for(let j=0;j<6;j++)if(ie){et?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be[j].width,be[j].height,Ye,Te,be[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,be[j].width,be[j].height,0,Ye,Te,be[j].data);for(let _e=0;_e<q.length;_e++){let Je=q[_e].image[j].image;et?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,Je.width,Je.height,Ye,Te,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,ut,Je.width,Je.height,0,Ye,Te,Je.data)}}else{et?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ye,Te,be[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,Ye,Te,be[j]);for(let _e=0;_e<q.length;_e++){let ye=q[_e];et?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,0,0,Ye,Te,ye.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,_e+1,ut,Ye,Te,ye.image[j])}}}m(A)&&p(n.TEXTURE_CUBE_MAP),J.__version=te.version,A.onUpdate&&A.onUpdate(A)}T.__version=A.version}function Ie(T,A,G,K,te,J){let De=r.convert(G.format,G.colorSpace),ge=r.convert(G.type),xe=v(G.internalFormat,De,ge,G.colorSpace),pt=i.get(A),ie=i.get(G);if(ie.__renderTarget=A,!pt.__hasExternalTextures){let be=Math.max(1,A.width>>J),ke=Math.max(1,A.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,xe,be,ke,A.depth,0,De,ge,null):t.texImage2D(te,J,xe,be,ke,0,De,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ht(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,ie.__webglTexture,0,ct(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,ie.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(T,A,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),A.depthBuffer){let K=A.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=E(A.stencilBuffer,te),De=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=ct(A);ht(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,J,A.width,A.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,J,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,J,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,T)}else{let K=A.textures;for(let te=0;te<K.length;te++){let J=K[te],De=r.convert(J.format,J.colorSpace),ge=r.convert(J.type),xe=v(J.internalFormat,De,ge,J.colorSpace),pt=ct(A);G&&ht(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,xe,A.width,A.height):ht(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,xe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,xe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(T,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(A.depthTexture);K.__renderTarget=A,(!K.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee(A.depthTexture,0);let te=K.__webglTexture,J=ct(A);if(A.depthTexture.format===Ls)ht(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(A.depthTexture.format===ks)ht(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function $e(T){let A=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),K){let te=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),A.__depthDisposeCallback=te}A.__boundDepthTexture=K}if(T.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ve(A.__webglFramebuffer,T)}else if(G){A.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[K]),A.__webglDepthbuffer[K]===void 0)A.__webglDepthbuffer[K]=n.createRenderbuffer(),me(A.__webglDepthbuffer[K],T,!1);else{let te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=A.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),me(A.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(T,A,G){let K=i.get(T);A!==void 0&&Ie(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&$e(T)}function Vt(T){let A=T.texture,G=i.get(T),K=i.get(A);T.addEventListener("dispose",b);let te=T.textures,J=T.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=A.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let xe=0;xe<A.mipmaps.length;xe++)G.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else G.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)G.__webglFramebuffer[ge]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(De)for(let ge=0,xe=te.length;ge<xe;ge++){let pt=i.get(te[ge]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ht(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){let xe=te[ge];G.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);let pt=r.convert(xe.format,xe.colorSpace),ie=r.convert(xe.type),be=v(xe.internalFormat,pt,ie,xe.colorSpace,T.isXRRenderTarget===!0),ke=ct(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,be,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),me(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),rt(n.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)Ie(G.__webglFramebuffer[ge][xe],T,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Ie(G.__webglFramebuffer[ge],T,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(A)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ge=0,xe=te.length;ge<xe;ge++){let pt=te[ge],ie=i.get(pt);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),rt(n.TEXTURE_2D,pt),Ie(G.__webglFramebuffer,T,pt,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(pt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,K.__webglTexture),rt(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let xe=0;xe<A.mipmaps.length;xe++)Ie(G.__webglFramebuffer[xe],T,A,n.COLOR_ATTACHMENT0,ge,xe);else Ie(G.__webglFramebuffer,T,A,n.COLOR_ATTACHMENT0,ge,0);m(A)&&p(ge),t.unbindTexture()}T.depthBuffer&&$e(T)}function ft(T){let A=T.textures;for(let G=0,K=A.length;G<K;G++){let te=A[G];if(m(te)){let J=_(T),De=i.get(te).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}let Zt=[],B=[];function In(T){if(T.samples>0){if(ht(T)===!1){let A=T.textures,G=T.width,K=T.height,te=n.COLOR_BUFFER_BIT,J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(T),ge=A.length>1;if(ge)for(let xe=0;xe<A.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[xe]);let pt=i.get(A[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,G,K,0,0,G,K,te,n.NEAREST),l===!0&&(Zt.length=0,B.length=0,Zt.push(n.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Zt.push(J),B.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<A.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,De.__webglColorRenderbuffer[xe]);let pt=i.get(A[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,pt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let A=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function ct(T){return Math.min(s.maxSamples,T.samples)}function ht(T){let A=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ze(T){let A=o.render.frame;h.get(T)!==A&&(h.set(T,A),T.update())}function Ot(T,A){let G=T.colorSpace,K=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==ki&&G!==Ii&&(mt.getTransfer(G)===Ct?(K!==Vn||te!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}function He(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=re,this.setTextureCube=Y,this.rebindTextures=ot,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=In,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ht}function s2(n,e){function t(i,s=Ii){let r,o=mt.getTransfer(s);if(i===yi)return n.UNSIGNED_BYTE;if(i===Tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.BYTE;if(i===wu)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===Cu)return n.ALPHA;if(i===Fu)return n.RGB;if(i===Vn)return n.RGBA;if(i===Pu)return n.LUMINANCE;if(i===Iu)return n.LUMINANCE_ALPHA;if(i===Ls)return n.DEPTH_COMPONENT;if(i===ks)return n.DEPTH_STENCIL;if(i===Rc)return n.RED;if(i===Cc)return n.RED_INTEGER;if(i===Du)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===Pc)return n.RGBA_INTEGER;if(i===Ao||i===So||i===xo||i===bo)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===ul||i===dl||i===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===El||i===vl||i===_l||i===Ml||i===Al||i===Sl||i===xl||i===bl||i===Tl||i===wl||i===Rl||i===Cl||i===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===Pl||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===To)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lu||i===Dl||i===Ll||i===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===To)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Jl=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},de=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},r2={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new de;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},o2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a2=`
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

}`,Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new on({vertexShader:o2,fragmentShader:a2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $(new Oe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends Bi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new Ql,m=t.getContextAttributes(),p=null,_=null,v=[],E=[],P=new ce,w=null,b=new ln;b.viewport=new Pt;let R=new ln;R.viewport=new Pt;let S=[b,R],M=new Jl,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=v[Q];return oe===void 0&&(oe=new br,v[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=v[Q];return oe===void 0&&(oe=new br,v[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=v[Q];return oe===void 0&&(oe=new br,v[Q]=oe),oe.getHandSpace()};function k(Q){let oe=E.indexOf(Q.inputSource);if(oe===-1)return;let Ie=v[oe];Ie!==void 0&&(Ie.update(Q.inputSource,Q.frame,c||o),Ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<v.length;Q++){let oe=E[Q];oe!==null&&(E[Q]=null,v[Q].disconnect(oe))}C=null,z=null,y.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Dt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new rn(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,Ie=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?ks:Ls,Ie=m.stencil?zs:Ei);let Ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new rn(d.textureWidth,d.textureHeight,{format:Vn,type:yi,depthTexture:new Ws(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Dt.setContext(s),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ee(Q){for(let oe=0;oe<Q.removed.length;oe++){let Ie=Q.removed[oe],me=E.indexOf(Ie);me>=0&&(E[me]=null,v[me].disconnect(Ie))}for(let oe=0;oe<Q.added.length;oe++){let Ie=Q.added[oe],me=E.indexOf(Ie);if(me===-1){for(let $e=0;$e<v.length;$e++)if($e>=E.length){E.push(Ie),me=$e;break}else if(E[$e]===null){E[$e]=Ie,me=$e;break}if(me===-1)break}let Ve=v[me];Ve&&Ve.connect(Ie)}}let Z=new F,re=new F;function Y(Q,oe,Ie){Z.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(Ie.matrixWorld);let me=Z.distanceTo(re),Ve=oe.projectionMatrix.elements,$e=Ie.projectionMatrix.elements,ot=Ve[14]/(Ve[10]-1),Vt=Ve[14]/(Ve[10]+1),ft=(Ve[9]+1)/Ve[5],Zt=(Ve[9]-1)/Ve[5],B=(Ve[8]-1)/Ve[0],In=($e[8]+1)/$e[0],ct=ot*B,ht=ot*In,ze=me/(-B+In),Ot=ze*-B;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ot),Q.translateZ(ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ve[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let He=ot+ze,T=Vt+ze,A=ct-Ot,G=ht+(me-Ot),K=ft*Vt/T*He,te=Zt*Vt/T*He;Q.projectionMatrix.makePerspective(A,G,K,te,He,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pe(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let oe=Q.near,Ie=Q.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(Ie=y.depthFar)),M.near=R.near=b.near=oe,M.far=R.far=b.far=Ie,(C!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,z=M.far),b.layers.mask=Q.layers.mask|2,R.layers.mask=Q.layers.mask|4,M.layers.mask=b.layers.mask|R.layers.mask;let me=Q.parent,Ve=M.cameras;pe(M,me);for(let $e=0;$e<Ve.length;$e++)pe(Ve[$e],me);Ve.length===2?Y(M,b,R):M.projectionMatrix.copy(b.projectionMatrix),Se(Q,M,me)};function Se(Q,oe,Ie){Ie===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(Ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Co*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Be=null;function rt(Q,oe){if(h=oe.getViewerPose(c||o),g=oe,h!==null){let Ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let me=!1;Ie.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let $e=0;$e<Ie.length;$e++){let ot=Ie[$e],Vt=null;if(f!==null)Vt=f.getViewport(ot);else{let Zt=u.getViewSubImage(d,ot);Vt=Zt.viewport,$e===0&&(e.setRenderTargetTextures(_,Zt.colorTexture,d.ignoreDepthValues?void 0:Zt.depthStencilTexture),e.setRenderTarget(_))}let ft=S[$e];ft===void 0&&(ft=new ln,ft.layers.enable($e),ft.viewport=new Pt,S[$e]=ft),ft.matrix.fromArray(ot.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ot.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),$e===0&&(M.matrix.copy(ft.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(ft)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let $e=u.getDepthInformation(Ie[0]);$e&&$e.isValid&&$e.texture&&y.init(e,$e,s.renderState)}}for(let Ie=0;Ie<v.length;Ie++){let me=E[Ie],Ve=v[Ie];me!==null&&Ve!==void 0&&Ve.update(me,oe,c||o)}Be&&Be(Q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Dt=new zu;Dt.setAnimationLoop(rt),this.setAnimationLoop=function(Q){Be=Q},this.dispose=function(){}}},Ki=new ni,l2=new It;function c2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),v=_.envMap,E=_.envMapRotation;v&&(m.envMap.value=v,Ki.copy(E),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(l2.makeRotationFromEuler(Ki)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function h2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let E=v.program;i.uniformBlockBinding(_,E)}function c(_,v){let E=s[_.id];E===void 0&&(g(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",m));let P=v.program;i.updateUBOMapping(_,P);let w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let v=u();_.__bindingPointIndex=v;let E=n.createBuffer(),P=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=s[_.id],E=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,b=E.length;w<b;w++){let R=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,M=R.length;S<M;S++){let C=R[S];if(f(C,w,S,P)===!0){let z=C.__offset,k=Array.isArray(C.value)?C.value:[C.value],X=0;for(let ee=0;ee<k.length;ee++){let Z=k[ee],re=y(Z);typeof Z=="number"||typeof Z=="boolean"?(C.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,z+X,C.__data)):Z.isMatrix3?(C.__data[0]=Z.elements[0],C.__data[1]=Z.elements[1],C.__data[2]=Z.elements[2],C.__data[3]=0,C.__data[4]=Z.elements[3],C.__data[5]=Z.elements[4],C.__data[6]=Z.elements[5],C.__data[7]=0,C.__data[8]=Z.elements[6],C.__data[9]=Z.elements[7],C.__data[10]=Z.elements[8],C.__data[11]=0):(Z.toArray(C.__data,X),X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,v,E,P){let w=_.value,b=v+"_"+E;if(P[b]===void 0)return typeof w=="number"||typeof w=="boolean"?P[b]=w:P[b]=w.clone(),!0;{let R=P[b];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return P[b]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(_){let v=_.uniforms,E=0,P=16;for(let b=0,R=v.length;b<R;b++){let S=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,C=S.length;M<C;M++){let z=S[M],k=Array.isArray(z.value)?z.value:[z.value];for(let X=0,ee=k.length;X<ee;X++){let Z=k[X],re=y(Z),Y=E%P,pe=Y%re.boundary,Se=Y+pe;E+=pe,Se!==0&&P-Se<re.storage&&(E+=P-Se),z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=re.storage}}}let w=E%P;return w>0&&(E+=P-w),_.__size=E,_.__cache={},this}function y(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var zo=class{constructor(e={}){let{canvas:t=mf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=ti,this.toneMappingExposure=1;let E=this,P=!1,w=0,b=0,R=null,S=-1,M=null,C=new Pt,z=new Pt,k=null,X=new Me(0),ee=0,Z=t.width,re=t.height,Y=1,pe=null,Se=null,Be=new Pt(0,0,Z,re),rt=new Pt(0,0,Z,re),Dt=!1,Q=new Cr,oe=!1,Ie=!1,me=new It,Ve=new It,$e=new F,ot=new Pt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Zt(){return R===null?Y:1}let B=i;function In(x,U){return t.getContext(x,U)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ye,!1),B===null){let U="webgl2";if(B=In(U,x),B===null)throw In(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ct,ht,ze,Ot,He,T,A,G,K,te,J,De,ge,xe,pt,ie,be,ke,Ye,Te,ut,et,Lt,L;function fe(){ct=new Tm(B),ct.init(),et=new s2(B,ct),ht=new _m(B,ct,e,et),ze=new t2(B,ct),ht.reverseDepthBuffer&&d&&ze.buffers.depth.setReversed(!0),Ot=new Cm(B),He=new G1,T=new i2(B,ct,ze,He,ht,et,Ot),A=new Am(E),G=new bm(E),K=new Nf(B),Lt=new Em(B,K),te=new wm(B,K,Ot,Lt),J=new Pm(B,te,K,Ot),Ye=new Fm(B,ht,T),ie=new Mm(He),De=new k1(E,A,G,ct,ht,Lt,ie),ge=new c2(E,He),xe=new W1,pt=new J1(ct),ke=new ym(E,A,G,ze,J,f,l),be=new j1(E,J,ht),L=new h2(B,Ot,ht,ze),Te=new vm(B,ct,Ot),ut=new Rm(B,ct,Ot),Ot.programs=De.programs,E.capabilities=ht,E.extensions=ct,E.properties=He,E.renderLists=xe,E.shadowMap=be,E.state=ze,E.info=Ot}fe();let q=new Kl(E,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let x=ct.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ct.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(x){x!==void 0&&(Y=x,this.setSize(Z,re,!1))},this.getSize=function(x){return x.set(Z,re)},this.setSize=function(x,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,re=U,t.width=Math.floor(x*Y),t.height=Math.floor(U*Y),V===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Z*Y,re*Y).floor()},this.setDrawingBufferSize=function(x,U,V){Z=x,re=U,Y=V,t.width=Math.floor(x*V),t.height=Math.floor(U*V),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(Be)},this.setViewport=function(x,U,V,W){x.isVector4?Be.set(x.x,x.y,x.z,x.w):Be.set(x,U,V,W),ze.viewport(C.copy(Be).multiplyScalar(Y).round())},this.getScissor=function(x){return x.copy(rt)},this.setScissor=function(x,U,V,W){x.isVector4?rt.set(x.x,x.y,x.z,x.w):rt.set(x,U,V,W),ze.scissor(z.copy(rt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(x){ze.setScissorTest(Dt=x)},this.setOpaqueSort=function(x){pe=x},this.setTransparentSort=function(x){Se=x},this.getClearColor=function(x){return x.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(x=!0,U=!0,V=!0){let W=0;if(x){let N=!1;if(R!==null){let se=R.texture.format;N=se===Pc||se===Fc||se===Cc}if(N){let se=R.texture.type,Ee=se===yi||se===Ei||se===Rr||se===zs||se===Tc||se===wc,Ce=ke.getClearColor(),Fe=ke.getClearAlpha(),Ze=Ce.r,Qe=Ce.g,Pe=Ce.b;Ee?(g[0]=Ze,g[1]=Qe,g[2]=Pe,g[3]=Fe,B.clearBufferuiv(B.COLOR,0,g)):(y[0]=Ze,y[1]=Qe,y[2]=Pe,y[3]=Fe,B.clearBufferiv(B.COLOR,0,y))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),xe.dispose(),pt.dispose(),He.dispose(),A.dispose(),G.dispose(),J.dispose(),Lt.dispose(),L.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",oh),q.removeEventListener("sessionend",ah),qi.stop()};function j(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let x=Ot.autoReset,U=be.enabled,V=be.autoUpdate,W=be.needsUpdate,N=be.type;fe(),Ot.autoReset=x,be.enabled=U,be.autoUpdate=V,be.needsUpdate=W,be.type=N}function ye(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Je(x){let U=x.target;U.removeEventListener("dispose",Je),Yt(U)}function Yt(x){cn(x),He.remove(x)}function cn(x){let U=He.get(x).programs;U!==void 0&&(U.forEach(function(V){De.releaseProgram(V)}),x.isShaderMaterial&&De.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,V,W,N,se){U===null&&(U=Vt);let Ee=N.isMesh&&N.matrixWorld.determinant()<0,Ce=bd(x,U,V,W,N);ze.setMaterial(W,Ee);let Fe=V.index,Ze=1;if(W.wireframe===!0){if(Fe=te.getWireframeAttribute(V),Fe===void 0)return;Ze=2}let Qe=V.drawRange,Pe=V.attributes.position,gt=Qe.start*Ze,Ut=(Qe.start+Qe.count)*Ze;se!==null&&(gt=Math.max(gt,se.start*Ze),Ut=Math.min(Ut,(se.start+se.count)*Ze)),Fe!==null?(gt=Math.max(gt,0),Ut=Math.min(Ut,Fe.count)):Pe!=null&&(gt=Math.max(gt,0),Ut=Math.min(Ut,Pe.count));let Ht=Ut-gt;if(Ht<0||Ht===1/0)return;Lt.setup(N,W,Ce,V,Fe);let En,St=Te;if(Fe!==null&&(En=K.get(Fe),St=ut,St.setIndex(En)),N.isMesh)W.wireframe===!0?(ze.setLineWidth(W.wireframeLinewidth*Zt()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(N.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),ze.setLineWidth(Le*Zt()),N.isLineSegments?St.setMode(B.LINES):N.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else N.isPoints?St.setMode(B.POINTS):N.isSprite&&St.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)St.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))St.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Le=N._multiDrawStarts,ai=N._multiDrawCounts,xt=N._multiDrawCount,Hn=Fe?K.get(Fe).bytesPerElement:1,fs=He.get(W).currentProgram.getUniforms();for(let wn=0;wn<xt;wn++)fs.setValue(B,"_gl_DrawID",wn),St.render(Le[wn]/Hn,ai[wn])}else if(N.isInstancedMesh)St.renderInstances(gt,Ht,N.count);else if(V.isInstancedBufferGeometry){let Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ai=Math.min(V.instanceCount,Le);St.renderInstances(gt,Ht,ai)}else St.render(gt,Ht)};function Tt(x,U,V){x.transparent===!0&&x.side===wt&&x.forceSinglePass===!1?(x.side=nn,x.needsUpdate=!0,Xr(x,U,V),x.side=Ni,x.needsUpdate=!0,Xr(x,U,V),x.side=wt):Xr(x,U,V)}this.compile=function(x,U,V=null){V===null&&(V=x),p=pt.get(V),p.init(U),v.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==V&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let W=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let Ee=0;Ee<se.length;Ee++){let Ce=se[Ee];Tt(Ce,V,N),W.add(Ce)}else Tt(se,V,N),W.add(se)}),v.pop(),p=null,W},this.compileAsync=function(x,U,V=null){let W=this.compile(x,U,V);return new Promise(N=>{function se(){if(W.forEach(function(Ee){He.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){N(x);return}setTimeout(se,10)}ct.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let On=null;function oi(x){On&&On(x)}function oh(){qi.stop()}function ah(){qi.start()}let qi=new zu;qi.setAnimationLoop(oi),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(x){On=x,q.setAnimationLoop(x),x===null?qi.stop():qi.start()},q.addEventListener("sessionstart",oh),q.addEventListener("sessionend",ah),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,U,R),p=pt.get(x,v.length),p.init(U),v.push(p),Ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(Ve),Ie=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,Ie),m=xe.get(x,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){let se=E.xr.getDepthSensingMesh();se!==null&&ma(se,U,-1/0,E.sortObjects)}ma(x,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(pe,Se),ft=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ft&&ke.addToRenderList(m,x),this.info.render.frame++,oe===!0&&ie.beginShadows();let V=p.state.shadowsArray;be.render(V,x,U),oe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let se=U.cameras;if(N.length>0)for(let Ee=0,Ce=se.length;Ee<Ce;Ee++){let Fe=se[Ee];ch(W,N,x,Fe)}ft&&ke.render(x);for(let Ee=0,Ce=se.length;Ee<Ce;Ee++){let Fe=se[Ee];lh(m,x,Fe,Fe.viewport)}}else N.length>0&&ch(W,N,x,U),ft&&ke.render(x),lh(m,x,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(E,x,U),Lt.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],oe===!0&&ie.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ma(x,U,V,W){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Q.intersectsSprite(x)){W&&ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ve);let Ee=J.update(x),Ce=x.material;Ce.visible&&m.push(x,Ee,Ce,V,ot.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Q.intersectsObject(x))){let Ee=J.update(x),Ce=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ot.copy(x.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ot.copy(Ee.boundingSphere.center)),ot.applyMatrix4(x.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ce)){let Fe=Ee.groups;for(let Ze=0,Qe=Fe.length;Ze<Qe;Ze++){let Pe=Fe[Ze],gt=Ce[Pe.materialIndex];gt&&gt.visible&&m.push(x,Ee,gt,V,ot.z,Pe)}}else Ce.visible&&m.push(x,Ee,Ce,V,ot.z,null)}}let se=x.children;for(let Ee=0,Ce=se.length;Ee<Ce;Ee++)ma(se[Ee],U,V,W)}function lh(x,U,V,W){let N=x.opaque,se=x.transmissive,Ee=x.transparent;p.setupLightsView(V),oe===!0&&ie.setGlobalState(E.clippingPlanes,V),W&&ze.viewport(C.copy(W)),N.length>0&&Wr(N,U,V),se.length>0&&Wr(se,U,V),Ee.length>0&&Wr(Ee,U,V),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ch(x,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new rn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?An:yi,minFilter:is,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let se=p.state.transmissionRenderTarget[W.id],Ee=W.viewport||C;se.setSize(Ee.z,Ee.w);let Ce=E.getRenderTarget();E.setRenderTarget(se),E.getClearColor(X),ee=E.getClearAlpha(),ee<1&&E.setClearColor(16777215,.5),E.clear(),ft&&ke.render(V);let Fe=E.toneMapping;E.toneMapping=ti;let Ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),oe===!0&&ie.setGlobalState(E.clippingPlanes,W),Wr(x,V,W),T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Pe=0,gt=U.length;Pe<gt;Pe++){let Ut=U[Pe],Ht=Ut.object,En=Ut.geometry,St=Ut.material,Le=Ut.group;if(St.side===wt&&Ht.layers.test(W.layers)){let ai=St.side;St.side=nn,St.needsUpdate=!0,hh(Ht,V,W,En,St,Le),St.side=ai,St.needsUpdate=!0,Qe=!0}}Qe===!0&&(T.updateMultisampleRenderTarget(se),T.updateRenderTargetMipmap(se))}E.setRenderTarget(Ce),E.setClearColor(X,ee),Ze!==void 0&&(W.viewport=Ze),E.toneMapping=Fe}function Wr(x,U,V){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,se=x.length;N<se;N++){let Ee=x[N],Ce=Ee.object,Fe=Ee.geometry,Ze=W===null?Ee.material:W,Qe=Ee.group;Ce.layers.test(V.layers)&&hh(Ce,U,V,Fe,Ze,Qe)}}function hh(x,U,V,W,N,se){x.onBeforeRender(E,U,V,W,N,se),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(E,U,V,W,x,se),N.transparent===!0&&N.side===wt&&N.forceSinglePass===!1?(N.side=nn,N.needsUpdate=!0,E.renderBufferDirect(V,U,W,N,x,se),N.side=Ni,N.needsUpdate=!0,E.renderBufferDirect(V,U,W,N,x,se),N.side=wt):E.renderBufferDirect(V,U,W,N,x,se),x.onAfterRender(E,U,V,W,N,se)}function Xr(x,U,V){U.isScene!==!0&&(U=Vt);let W=He.get(x),N=p.state.lights,se=p.state.shadowsArray,Ee=N.state.version,Ce=De.getParameters(x,N.state,se,U,V),Fe=De.getProgramCacheKey(Ce),Ze=W.programs;W.environment=x.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(x.isMeshStandardMaterial?G:A).get(x.envMap||W.environment),W.envMapRotation=W.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ze===void 0&&(x.addEventListener("dispose",Je),Ze=new Map,W.programs=Ze);let Qe=Ze.get(Fe);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Ee)return dh(x,Ce),Qe}else Ce.uniforms=De.getUniforms(x),x.onBeforeCompile(Ce,E),Qe=De.acquireProgram(Ce,Fe),Ze.set(Fe,Qe),W.uniforms=Ce.uniforms;let Pe=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),dh(x,Ce),W.needsLights=wd(x),W.lightsStateVersion=Ee,W.needsLights&&(Pe.ambientLightColor.value=N.state.ambient,Pe.lightProbe.value=N.state.probe,Pe.directionalLights.value=N.state.directional,Pe.directionalLightShadows.value=N.state.directionalShadow,Pe.spotLights.value=N.state.spot,Pe.spotLightShadows.value=N.state.spotShadow,Pe.rectAreaLights.value=N.state.rectArea,Pe.ltc_1.value=N.state.rectAreaLTC1,Pe.ltc_2.value=N.state.rectAreaLTC2,Pe.pointLights.value=N.state.point,Pe.pointLightShadows.value=N.state.pointShadow,Pe.hemisphereLights.value=N.state.hemi,Pe.directionalShadowMap.value=N.state.directionalShadowMap,Pe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pe.spotShadowMap.value=N.state.spotShadowMap,Pe.spotLightMatrix.value=N.state.spotLightMatrix,Pe.spotLightMap.value=N.state.spotLightMap,Pe.pointShadowMap.value=N.state.pointShadowMap,Pe.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function uh(x){if(x.uniformsList===null){let U=x.currentProgram.getUniforms();x.uniformsList=Ns.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function dh(x,U){let V=He.get(x);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function bd(x,U,V,W,N){U.isScene!==!0&&(U=Vt),T.resetTextureUnits();let se=U.fog,Ee=W.isMeshStandardMaterial?U.environment:null,Ce=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ki,Fe=(W.isMeshStandardMaterial?G:A).get(W.envMap||Ee),Ze=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!V.morphAttributes.position,gt=!!V.morphAttributes.normal,Ut=!!V.morphAttributes.color,Ht=ti;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ht=E.toneMapping);let En=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=En!==void 0?En.length:0,Le=He.get(W),ai=p.state.lights;if(oe===!0&&(Ie===!0||x!==M)){let Dn=x===M&&W.id===S;ie.setState(W,x,Dn)}let xt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ai.state.version||Le.outputColorSpace!==Ce||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Fe||W.fog===!0&&Le.fog!==se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ie.numPlanes||Le.numIntersection!==ie.numIntersection)||Le.vertexAlphas!==Ze||Le.vertexTangents!==Qe||Le.morphTargets!==Pe||Le.morphNormals!==gt||Le.morphColors!==Ut||Le.toneMapping!==Ht||Le.morphTargetsCount!==St)&&(xt=!0):(xt=!0,Le.__version=W.version);let Hn=Le.currentProgram;xt===!0&&(Hn=Xr(W,U,N));let fs=!1,wn=!1,ur=!1,zt=Hn.getUniforms(),$n=Le.uniforms;if(ze.useProgram(Hn.program)&&(fs=!0,wn=!0,ur=!0),W.id!==S&&(S=W.id,wn=!0),fs||M!==x){ze.buffers.depth.getReversed()?(me.copy(x.projectionMatrix),yf(me),Ef(me),zt.setValue(B,"projectionMatrix",me)):zt.setValue(B,"projectionMatrix",x.projectionMatrix),zt.setValue(B,"viewMatrix",x.matrixWorldInverse);let xi=zt.map.cameraPosition;xi!==void 0&&xi.setValue(B,$e.setFromMatrixPosition(x.matrixWorld)),ht.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&zt.setValue(B,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,wn=!0,ur=!0)}if(N.isSkinnedMesh){zt.setOptional(B,N,"bindMatrix"),zt.setOptional(B,N,"bindMatrixInverse");let Dn=N.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),zt.setValue(B,"boneTexture",Dn.boneTexture,T))}N.isBatchedMesh&&(zt.setOptional(B,N,"batchingTexture"),zt.setValue(B,"batchingTexture",N._matricesTexture,T),zt.setOptional(B,N,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",N._indirectTexture,T),zt.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",N._colorsTexture,T));let dr=V.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Ye.update(N,V,Hn),(wn||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,zt.setValue(B,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($n.envMap.value=Fe,$n.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&($n.envMapIntensity.value=U.environmentIntensity),wn&&(zt.setValue(B,"toneMappingExposure",E.toneMappingExposure),Le.needsLights&&Td($n,ur),se&&W.fog===!0&&ge.refreshFogUniforms($n,se),ge.refreshMaterialUniforms($n,W,Y,re,p.state.transmissionRenderTarget[x.id]),Ns.upload(B,uh(Le),$n,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ns.upload(B,uh(Le),$n,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&zt.setValue(B,"center",N.center),zt.setValue(B,"modelViewMatrix",N.modelViewMatrix),zt.setValue(B,"normalMatrix",N.normalMatrix),zt.setValue(B,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Dn=W.uniformsGroups;for(let xi=0,bi=Dn.length;xi<bi;xi++){let fh=Dn[xi];L.update(fh,Hn),L.bind(fh,Hn)}}return Hn}function Td(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function wd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,U,V){He.get(x.texture).__webglTexture=U,He.get(x.depthTexture).__webglTexture=V;let W=He.get(x);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){let V=He.get(x);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,V=0){R=x,w=U,b=V;let W=!0,N=null,se=!1,Ee=!1;if(x){let Fe=He.get(x);if(Fe.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(Fe.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(Fe.__hasExternalTextures)T.rebindTextures(x,He.get(x.texture).__webglTexture,He.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Pe=x.depthTexture;if(Fe.__boundDepthTexture!==Pe){if(Pe!==null&&He.has(Pe)&&(x.width!==Pe.image.width||x.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}let Ze=x.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ee=!0);let Qe=He.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Qe[U])?N=Qe[U][V]:N=Qe[U],se=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?N=He.get(x).__webglMultisampledFramebuffer:Array.isArray(Qe)?N=Qe[V]:N=Qe,C.copy(x.viewport),z.copy(x.scissor),k=x.scissorTest}else C.copy(Be).multiplyScalar(Y).floor(),z.copy(rt).multiplyScalar(Y).floor(),k=Dt;if(ze.bindFramebuffer(B.FRAMEBUFFER,N)&&W&&ze.drawBuffers(x,N),ze.viewport(C),ze.scissor(z),ze.setScissorTest(k),se){let Fe=He.get(x.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Fe.__webglTexture,V)}else if(Ee){let Fe=He.get(x.texture),Ze=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,Ze)}S=-1},this.readRenderTargetPixels=function(x,U,V,W,N,se,Ee){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=He.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){ze.bindFramebuffer(B.FRAMEBUFFER,Ce);try{let Fe=x.texture,Ze=Fe.format,Qe=Fe.type;if(!ht.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-W&&V>=0&&V<=x.height-N&&B.readPixels(U,V,W,N,et.convert(Ze),et.convert(Qe),se)}finally{let Fe=R!==null?He.get(R).__webglFramebuffer:null;ze.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(x,U,V,W,N,se,Ee){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=He.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){let Fe=x.texture,Ze=Fe.format,Qe=Fe.type;if(!ht.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-W&&V>=0&&V<=x.height-N){ze.bindFramebuffer(B.FRAMEBUFFER,Ce);let Pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.bufferData(B.PIXEL_PACK_BUFFER,se.byteLength,B.STREAM_READ),B.readPixels(U,V,W,N,et.convert(Ze),et.convert(Qe),0);let gt=R!==null?He.get(R).__webglFramebuffer:null;ze.bindFramebuffer(B.FRAMEBUFFER,gt);let Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await gf(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,se),B.deleteBuffer(Pe),B.deleteSync(Ut),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,V=0){x.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(x.image.width*W),se=Math.floor(x.image.height*W),Ee=U!==null?U.x:0,Ce=U!==null?U.y:0;T.setTexture2D(x,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,Ee,Ce,N,se),ze.unbindTexture()},this.copyTextureToTexture=function(x,U,V=null,W=null,N=0){x.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,x=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let se,Ee,Ce,Fe,Ze,Qe,Pe,gt,Ut,Ht=x.isCompressedTexture?x.mipmaps[N]:x.image;V!==null?(se=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Ce=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Ze=V.min.y,Qe=V.isBox3?V.min.z:0):(se=Ht.width,Ee=Ht.height,Ce=Ht.depth||1,Fe=0,Ze=0,Qe=0),W!==null?(Pe=W.x,gt=W.y,Ut=W.z):(Pe=0,gt=0,Ut=0);let En=et.convert(U.format),St=et.convert(U.type),Le;U.isData3DTexture?(T.setTexture3D(U,0),Le=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Le=B.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Le=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let ai=B.getParameter(B.UNPACK_ROW_LENGTH),xt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Hn=B.getParameter(B.UNPACK_SKIP_PIXELS),fs=B.getParameter(B.UNPACK_SKIP_ROWS),wn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Fe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);let ur=x.isDataArrayTexture||x.isData3DTexture,zt=U.isDataArrayTexture||U.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let $n=He.get(x),dr=He.get(U),Dn=He.get($n.__renderTarget),xi=He.get(dr.__renderTarget);ze.bindFramebuffer(B.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let bi=0;bi<Ce;bi++)ur&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.get(x).__webglTexture,N,Qe+bi),x.isDepthTexture?(zt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.get(U).__webglTexture,N,Ut+bi),B.blitFramebuffer(Fe,Ze,se,Ee,Pe,gt,se,Ee,B.DEPTH_BUFFER_BIT,B.NEAREST)):zt?B.copyTexSubImage3D(Le,N,Pe,gt,Ut+bi,Fe,Ze,se,Ee):B.copyTexSubImage2D(Le,N,Pe,gt,Ut+bi,Fe,Ze,se,Ee);ze.bindFramebuffer(B.READ_FRAMEBUFFER,null),ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else zt?x.isDataTexture||x.isData3DTexture?B.texSubImage3D(Le,N,Pe,gt,Ut,se,Ee,Ce,En,St,Ht.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,N,Pe,gt,Ut,se,Ee,Ce,En,Ht.data):B.texSubImage3D(Le,N,Pe,gt,Ut,se,Ee,Ce,En,St,Ht):x.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,N,Pe,gt,se,Ee,En,St,Ht.data):x.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,N,Pe,gt,Ht.width,Ht.height,En,Ht.data):B.texSubImage2D(B.TEXTURE_2D,N,Pe,gt,se,Ee,En,St,Ht);B.pixelStorei(B.UNPACK_ROW_LENGTH,ai),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Hn),B.pixelStorei(B.UNPACK_SKIP_ROWS,fs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,wn),N===0&&U.generateMipmaps&&B.generateMipmap(Le),ze.unbindTexture()},this.copyTextureToTexture3D=function(x,U,V=null,W=null,N=0){return x.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,x=arguments[2],U=arguments[3],N=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,V,W,N)},this.initRenderTarget=function(x){He.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),ze.unbindTexture()},this.resetState=function(){w=0,b=0,R=null,ze.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}},We=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ko=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new F,Go=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xs=class extends _i{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rs,yr=new F,Cs=new F,Fs=new F,Ps=new ce,Er=new ce,Xu=new It,po=new F,vr=new F,mo=new F,du=new ce,qa=new ce,fu=new ce,Fr=class extends $t{constructor(e=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jl(t,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Go(i,3,0,!1)),Rs.setAttribute("uv",new Go(i,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Fs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;go(po.set(-.5,-.5,0),Fs,o,Cs,s,r),go(vr.set(.5,-.5,0),Fs,o,Cs,s,r),go(mo.set(.5,.5,0),Fs,o,Cs,s,r),du.set(0,0),qa.set(1,0),fu.set(1,1);let a=e.ray.intersectTriangle(po,vr,mo,!1,yr);if(a===null&&(go(vr.set(-.5,.5,0),Fs,o,Cs,s,r),qa.set(0,1),a=e.ray.intersectTriangle(po,mo,vr,!1,yr),a===null))return;let l=e.ray.origin.distanceTo(yr);l<e.near||l>e.far||t.push({distance:l,point:yr.clone(),uv:Di.getInterpolation(yr,po,vr,mo,du,qa,fu,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function go(n,e,t,i,s,r){Ps.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Er.x=r*Ps.x-s*Ps.y,Er.y=s*Ps.x+r*Ps.y):Er.copy(Ps),n.copy(e),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(Xu)}var ec=class extends Mn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Fn,h=Fn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vo=class extends sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new It,pu=new It,yo=[],mu=new vi,u2=new It,_r=new $,Mr=new Hi,Wo=class extends ${constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,u2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),mu.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(mu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Is),Mr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),pu.multiplyMatrices(i,Is),_r.matrixWorld=pu,_r.raycast(e,yo);for(let o=0,a=yo.length;o<a;o++){let l=yo[o];l.instanceId=r,l.object=this,t.push(l)}yo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ec(new Float32Array(s*this.count),s,this.count,Rc,jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qs=class extends _i{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gu=new It,tc=new Do,Eo=new Hi,vo=new F,Pr=class extends $t{constructor(e=new Qt,t=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;gu.copy(s).invert(),tc.copy(e.ray).applyMatrix4(gu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);vo.fromBufferAttribute(u,m),yu(vo,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,y=f;g<y;g++)vo.fromBufferAttribute(u,g),yu(vo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yu(n,e,t,i,s,r,o){let a=tc.distanceSqToPoint(n);if(a<t){let l=new F;tc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wn=class extends Mn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new F,s=[],r=[],o=[],a=new F,l=new It;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(dn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(dn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xo=class extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nc=class extends Xo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var _o=new F,Ya=new Dc,Za=new Dc,$a=new Dc,Ys=class extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(_o.subVectors(s[0],s[1]).add(s[0]),c=_o);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ya.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),Za.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),$a.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Za.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ya.calc(l),Za.calc(l),$a.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Eu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function d2(n,e){let t=1-n;return t*t*e}function f2(n,e){return 2*(1-n)*n*e}function p2(n,e){return n*n*e}function Tr(n,e,t,i){return d2(n,e)+f2(n,t)+p2(n,i)}function m2(n,e){let t=1-n;return t*t*t*e}function g2(n,e){let t=1-n;return 3*t*t*n*e}function y2(n,e){return 3*(1-n)*n*n*e}function E2(n,e){return n*n*n*e}function wr(n,e,t,i,s){return m2(n,e)+g2(n,t)+y2(n,i)+E2(n,s)}var ic=class extends Xn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sc=class extends Xn{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y),wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rc=class extends Xn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends Xn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ac=class extends Xn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Xn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y),Tr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Eu(a,l.x,c.x,h.x,u.x),Eu(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},v2=Object.freeze({__proto__:null,ArcCurve:nc,CatmullRomCurve3:Ys,CubicBezierCurve:ic,CubicBezierCurve3:sc,EllipseCurve:Xo,LineCurve:rc,LineCurve3:oc,QuadraticBezierCurve:ac,QuadraticBezierCurve3:qo,SplineCurve:lc});var qn=class n extends Qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rt=class n extends Qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function _(){let E=new F,P=new F,w=0,b=(t-e)/i;for(let R=0;R<=r;R++){let S=[],M=R/r,C=M*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,X=k*l+a,ee=Math.sin(X),Z=Math.cos(X);P.x=C*ee,P.y=-M*i+m,P.z=C*Z,u.push(P.x,P.y,P.z),E.set(ee,b,Z).normalize(),d.push(E.x,E.y,E.z),f.push(k,1-M),S.push(g++)}y.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let M=y[S][R],C=y[S+1][R],z=y[S+1][R+1],k=y[S][R+1];(e>0||S!==0)&&(h.push(M,C,k),w+=3),(t>0||S!==r-1)&&(h.push(C,z,k),w+=3)}c.addGroup(p,w,0),p+=w}function v(E){let P=g,w=new ce,b=new F,R=0,S=E===!0?e:t,M=E===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let C=g;for(let z=0;z<=s;z++){let X=z/s*l+a,ee=Math.cos(X),Z=Math.sin(X);b.x=S*Z,b.y=m*M,b.z=S*ee,u.push(b.x,b.y,b.z),d.push(0,M,0),w.x=ee*.5+.5,w.y=Z*.5*M+.5,f.push(w.x,w.y),g++}for(let z=0;z<s;z++){let k=P+z,X=C+z;E===!0?h.push(X,X+1,k):h.push(X+1,X,k),R+=3}c.addGroup(p,R,E===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ii=class n extends Rt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cc=class n extends Qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new F,E=new F,P=new F;for(let w=0;w<t.length;w+=3)f(t[w+0],v),f(t[w+1],E),f(t[w+2],P),l(v,E,P,_)}function l(_,v,E,P){let w=P+1,b=[];for(let R=0;R<=w;R++){b[R]=[];let S=_.clone().lerp(E,R/w),M=v.clone().lerp(E,R/w),C=w-R;for(let z=0;z<=C;z++)z===0&&R===w?b[R][z]=S:b[R][z]=S.clone().lerp(M,z/C)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){let M=Math.floor(S/2);S%2===0?(d(b[R][M+1]),d(b[R+1][M]),d(b[R][M])):(d(b[R][M+1]),d(b[R+1][M+1]),d(b[R+1][M]))}}function c(_){let v=new F;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(_),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function h(){let _=new F;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let E=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;o.push(E,1-P)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let v=o[_+0],E=o[_+2],P=o[_+4],w=Math.max(v,E,P),b=Math.min(v,E,P);w>.9&&b<.1&&(v<.2&&(o[_+0]+=1),E<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){let E=_*3;v.x=e[E+0],v.y=e[E+1],v.z=e[E+2]}function g(){let _=new F,v=new F,E=new F,P=new F,w=new ce,b=new ce,R=new ce;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),E.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),b.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),P.copy(_).add(v).add(E).divideScalar(3);let C=m(P);y(w,M+0,_,C),y(b,M+2,v,C),y(R,M+4,E,C)}}function y(_,v,E,P){P<0&&_.x===1&&(o[v]=_.x-1),E.x===0&&E.z===0&&(o[v]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Zs=class n extends cc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Nt=class n extends Qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let _=[],v=p/i,E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){let w=P/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(w+E,1-v),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let v=h[p][_+1],E=h[p][_],P=h[p+1][_],w=h[p+1][_+1];(p!==0||o>0)&&f.push(v,E,w),(p!==i-1||l<Math.PI)&&f.push(E,P,w)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gn=class n extends Qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,u=new F,d=new F;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(y,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ir=class n extends Qt{constructor(e=new qo(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new ce,h=new F,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function y(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),p()}function m(v){h=e.getPointAt(v/t,h);let E=o.normals[v],P=o.binormals[v];for(let w=0;w<=s;w++){let b=w/s*Math.PI*2,R=Math.sin(b),S=-Math.cos(b);l.x=S*E.x+R*P.x,l.y=S*E.y+R*P.y,l.z=S*E.z+R*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let E=1;E<=s;E++){let P=(s+1)*(v-1)+(E-1),w=(s+1)*v+(E-1),b=(s+1)*v+E,R=(s+1)*(v-1)+E;g.push(P,w,R),g.push(w,b,R)}}function _(){for(let v=0;v<=t;v++)for(let E=0;E<=s;E++)c.x=v/t,c.y=E/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new v2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Xe=class extends _i{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Mo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends $s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:r=e,a=2*t-i;break;case vh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:o=e,l=2*i-t;break;case vh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,_=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,E=f*m-f*y;for(let P=0;P!==a;++P)r[P]=p*o[h+P]+_*o[c+P]+v*o[l+P]+E*o[u+P];return r}},uc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},dc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wo:t=this.InterpolantFactoryMethodDiscrete;break;case Nl:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&_2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ya,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Nl;var ss=class extends Yn{constructor(e,t,i){super(e,t,i)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=wo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Yn{};fc.prototype.ValueTypeName="color";var pc=class extends Yn{};pc.prototype.ValueTypeName="number";var mc=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Oi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Yo=class extends Yn{InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Yn{constructor(e,t,i){super(e,t,i)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=wo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends Yn{};gc.prototype.ValueTypeName="vector";var yc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},M2=new yc,Ec=class{constructor(e){this.manager=e!==void 0?e:M2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ge=class extends Js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ja=new It,vu=new F,_u=new F,Dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vc=class extends Dr{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Co*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pn=class extends Js{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Mu=new It,Ar=new F,Qa=new F,_c=class extends Dr{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ar),Qa.copy(i.position),Qa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qa),i.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Mu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu)}},yt=class extends Js{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Mc=class extends Dr{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Mc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Au(){return 0}var Lc="\\[\\]\\.:\\/",A2=new RegExp("["+Lc+"]","g"),Uc="[^"+Lc+"]",S2="[^"+Lc.replace("\\.","")+"]",x2=/((?:WC+[\/:])*)/.source.replace("WC",Uc),b2=/(WCOD+)?/.source.replace("WCOD",S2),T2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),w2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),R2=new RegExp("^"+x2+b2+T2+w2+"$"),C2=["material","materials","bones","map"],Ac=class{constructor(e,t,i){let s=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A2,"")}static parseTrackName(e){let t=R2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);C2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Ac;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Eg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);var Ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},F2=new Vs(-1,1,1,-1,0,1),Nc=class extends Qt{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}},P2=new Nc,tr=class{constructor(e){this._mesh=new $(P2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,F2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var os=class extends Mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lr=class extends Mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},jo=class extends Mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ea=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new os(Ko),this.copyPass.material.blending=ei,this.clock=new Zo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lr!==void 0&&(o instanceof Lr?i=!0:o instanceof jo&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var nr=class n extends Mi{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(r,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new rn(r,o,{type:An});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new rn(r,o,{type:An});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=qu;this.highPassUniforms=js.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ko;this.copyUniforms=js.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:vn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new at,this.fsQuad=new tr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};nr.BlurDirectionX=new ce(1,0);nr.BlurDirectionY=new ce(0,1);var as=1280,ls=720;function qe(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Bc=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),it=(n,e,t)=>n+(e-n)*t,ve=(n,e,t)=>{let i=Bc((t-n)/(e-n));return i*i*(3-2*i)};var I2=n=>(n=Bc(n),n*n*(3-2*n));function na(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=I2((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>it(o,r[a],i)):it(s,r,i)}return n[n.length-1][1]}var D2={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ce(as,ls)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},L2={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new Me(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},ta=class{constructor(e){let t=this.r=new zo({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(as,ls,!1),t.shadowMap.enabled=!0,t.shadowMap.type=xc,t.toneMapping=ti,t.outputColorSpace=ki;let i=new Ws(as,ls);i.type=Ei,this.rt=new rn(as,ls,{type:An,samples:2,depthTexture:i}),this.composer=new ea(t,new rn(as,ls,{type:An})),this.dof=new os(D2,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new nr(new ce(as/2,ls/2),.45,.75,.82),this.grade=new os(L2),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function Yu(n,e,t,i=40){let s=new ko;s.background=new Me(t);let r=new ln(i,as/ls,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function Zu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var bn=1/420,Oc=new Map;function Tn(n,e,t,i){if(Oc.has(n))return Oc.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Wn(s);return o.colorSpace=Wt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Oc.set(n,o),o}var _t=n=>new Path2D(n);function an(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function Zn(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var U2={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function N2(n,e){return Tn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=_t("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");an(t,i,Zn(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(_t("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(_t("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(_t("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=_t("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){an(t,_t("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Zn(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(_t("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(_t("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(_t("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(_t("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(_t("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")an(t,_t("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Zn(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(_t("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(_t("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(_t("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){an(t,_t("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Zn(t,-60,0,60,120,n.a,n.b)),an(t,_t("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Zn(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else an(t,_t("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Zn(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(_t("M-22 26 L22 26 L0 64Z")),an(t,_t("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function $u(n,e,t){return Tn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(an(i,_t("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Zn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(an(i,_t("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;an(i,_t(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Zn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(_t(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(_t(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function B2(){return Tn("hand",90,100,n=>{n.translate(45,14);let e=_t("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");an(n,e,Zn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function Ju(n){return Tn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function O2(){return Tn("foot",80,40,n=>{n.translate(26,6),an(n,_t("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function H2(n="round"){return Tn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var ju={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function z2(n,e){return Tn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),ju[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function k2(n,e,t){return Tn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=_t("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");an(i,s,Zn(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),an(i,s,e);let r=_t("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");an(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),an(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=_t("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");an(i,s,Zn(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),an(i,l,"#E9E9EF")})})})}var Qu=(n,e={})=>new at({map:n,alphaTest:.5,alphaToCoverage:!0,side:wt,...e}),Ku=new Map,Hc=new Map,G2=[];function V2(n){if(Hc.has(n))return Hc.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Wn(t);return r.colorSpace=Wt,r.anisotropy=8,Hc.set(n,r),r}function xn(n,e,t,i,s,r=0,o,a=!1){let l=new Oe(e*bn,t*bn);l.translate((e/2-i)*bn,(s-t/2)*bn,0);let c=Qu(n);o.push(c);let h=new $(l,c);if(h.position.z=r,h.castShadow=!0,!a){let d=Qu(V2(n),{color:"#FFE9C8"});G2.push(d);let f=new $(l,d);f.position.z=-.045-r,h.add(f)}let u=Ku.get(n);return u||(u=new zi({depthPacking:Ks,map:n,alphaTest:.5,side:wt}),Ku.set(n,u)),h.customDepthMaterial=u,h}function W2(){return Tn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function X2(){return Tn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function zc(n={}){let e=U2[n.outfit||"hero"],t=n.outfit||"hero",i=new de,s=[],r=new de;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,_]of[["L",-1,-.012],["R",1,-.01]]){let v=new de;v.position.set(p*34*bn,o*bn,_);let E=new de;E.position.y=-142*bn,v.add(xn(Ju(1),50,160,25,6,0,s)),E.add(xn(Ju(1),50,160,25,6,0,s));let P=xn(O2(),80,40,26,6,.001,s);P.position.y=-142*bn,p<0&&(P.scale.x=-1),E.add(P),v.add(E),r.add(v),l[m]={th:v,shin:E}}let h=xn(N2(e,t),300,320,150,20,0,s);h.position.y=(a+4)*bn,r.add(h);for(let[m,p,_]of[["L",-1,-.006],["R",1,.006]]){let v=new de;v.position.set(p*(e.kind==="dress"?66:84)*bn,(a-24)*bn,_);let E=new de;E.position.y=-124*bn,v.add(xn($u(e,t,"u"),90,170,45,10,0,s)),E.add(xn($u(e,t,"f"),90,170,45,10,.001,s));let P=xn(B2(),90,100,45,14,.002,s);P.position.y=-128*bn,P.scale.set(p>0?-.8:.8,.8,1),E.add(P),v.add(E),r.add(v),c[m]={u:v,f:E,hand:P}}let u=new de;if(u.position.set(0,(a+104)*bn,.02),r.add(u),n.hair){let m=xn(k2(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);u.add(m)}if(u.add(xn(H2(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=xn(Tn("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let _=n.hairc||"#4a2c1a";p.fillStyle=_,p.fill(_t(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);u.add(m)}if(n.lash){let m=xn(Tn("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(_=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(_*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}let d={};for(let m of Object.keys(ju)){let p=xn(z2(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",u.add(p),d[m]=p}if(n.glasses){let m=xn(Tn("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}if(n.hat){let m=xn(n.hat(Tn),300,300,150,150,.006,s);u.add(m)}let f=new $(new Oe(1,.4),new at({map:W2(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new $(new Oe(2.1,3),new at({map:X2(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:vn,side:wt})),g.position.set(0,.95,-.09),r.add(g));let y={root:i,body:r,head:u,arms:c,legs:l,eyes:d,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in d)d[p].visible=p===m},cheer(m,p=0,_=1){let v=m*6+p,E=Math.sin(v);y.pose({armL:[150+E*16*_,18+E*10],armR:[150-E*16*_,18-E*10],bob:Math.abs(Math.sin(v*.5))*.07*_,head:E*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,_=m.armL||[6,4],v=m.armR||[6,4],E=m.legL||[0,0],P=m.legR||[0,0];c.L.u.rotation.z=-_[0]*p,c.L.f.rotation.z=-_[1]*p,c.R.u.rotation.z=v[0]*p,c.R.f.rotation.z=v[1]*p,l.L.th.rotation.z=-E[0]*p,l.L.shin.rotation.z=-E[1]*p,l.R.th.rotation.z=P[0]*p,l.R.shin.rotation.z=P[1]*p,u.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let w=m.squash||0;r.scale.set(1-w*.5,1+w,1)},walk(m,p=1,_=1){let v=m*6.4*p,E=Math.sin(v),P=Math.cos(v);y.pose({legL:[E*15*_,Math.max(0,-E)*26*_],legR:[-E*15*_,Math.max(0,E)*26*_],armL:[8-E*12*_,6],armR:[8+E*12*_,6],bob:Math.abs(P)*.03*_,head:E*2})},place(m,p,_=0,v=1){i.position.set(m,_,p),i.scale.setScalar(v)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return y.pose(),y}function Ue(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Wn(i);return r.colorSpace=Wt,r.anisotropy=8,r}var cs=(n,e={})=>new Xe({color:n,roughness:.88,metalness:0,...e});function D(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new $(new Un(n,e,t),typeof i=="string"?cs(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function nt(n,e,t=1){let i=Ue(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Fr(new Xs({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:vn}));return s.scale.set(e,e,1),s}var ed=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function q2(n,e,t,i,s,r=.42){let o=qe(n),a=256*e,l=300*t,c,h=Ue(a,l,d=>{d.fillStyle=i,d.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)d.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,d.fillRect(g,f,28,10);for(let f=0;f<t;f++)d.fillStyle="rgba(255,240,220,.14)",d.fillRect(0,f*300+292,a,8)}),u=Ue(a,l,d=>{d.fillStyle="#000",d.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<t;g++)for(let y=0;y<e;y++){let m=y*256+56,p=g*300+60,_=144,v=196,E=o()<r,P=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,_+18,v+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+v+9,_+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+v+6,_+36,8),f.fillStyle=s?E?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,_,v),E||!s){let w=E?P<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=w,f.fillRect(m,p,26,v),f.fillRect(m+_-26,p,26,v)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+v),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+v),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+_/2-3,p,6,v),f.fillRect(m,p+v*.45,_,6),E&&s&&(d.fillStyle=P<.5?"#FFC47A":"#FFD79C",d.fillRect(m,p,_,v),d.fillStyle="#000",d.fillRect(m+_/2-3,p,6,v),d.fillRect(m,p+v*.45,_,6))}h.needsUpdate=!0});return u.colorSpace=Wt,{map:h,emissiveMap:u}}function Gi(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,u=qe(n),d=new de,f=o*2.9+3.6,g=c||ed[Math.floor(u()*ed.length)],y=Math.max(2,Math.round(r/2.1)),m=q2(n,y,o,g,l,e.lit??.42),p=new Xe({map:m.map,emissiveMap:m.emissiveMap,emissive:new Me(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),_=cs(g),v=[a>0?p:_,a>0?_:p,cs("#2c2730"),_,_,_],E=new $(new Un(s,o*2.9,r),v);E.position.set(t,3.6+o*1.45,i),E.castShadow=E.receiveShadow=!0,d.add(E),d.add(D(s+.5,.5,r+.5,"#3d3540",t,f+.25,i)),d.add(D(s+.3,.35,r+.3,g,t,3.6,i));let P=t+a*(s/2+.01);if(h){let w=Ue(1024,180,C=>{C.fillStyle=h.bg,C.fillRect(0,0,1024,180),C.fillStyle="#ffffff22",C.fillRect(0,0,1024,8),C.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,C.textAlign="center",C.textBaseline="middle",C.fillStyle=h.fg||"#FFF4DC",C.shadowColor=h.fg||"#FFF4DC",C.shadowBlur=l?26:0,C.fillText(h.name,512,96)}),b=new $(new Un(.18,1.05,r-.3),[new Xe({map:w,emissiveMap:w,emissive:new Me(l?.85:0,l?.85:0,l?.85:0)}),new Xe({map:w,emissiveMap:w,emissive:new Me(l?.85:0,l?.85:0,l?.85:0)}),cs("#222"),cs("#222"),cs("#222"),cs("#222")]);b.position.set(P+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,d.add(b);let R=Ue(512,256,C=>{let z=C.createLinearGradient(0,0,0,256);z.addColorStop(0,h.win||"#F4C783"),z.addColorStop(1,"#D59A5C"),C.fillStyle=z,C.fillRect(0,0,512,256);let k=qe(n+9);for(let X=0;X<26;X++)C.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(k()*6)],C.fillRect(k()*490,30+Math.floor(k()*3)*76,12+k()*26,52);for(let X of[84,160,236])C.fillStyle="#6b4530",C.fillRect(0,X,512,7)}),S=new Xe({map:R,emissiveMap:R,emissive:new Me(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});d.add(D(.3,2.8,r-.1,"#3a2a24",P-a*.1,1.4,i));let M=new $(new Oe(r-.9,2.1),S);M.rotation.y=a*Math.PI/2,M.position.set(P+a*.07,1.5,i),d.add(M);for(let C=-1;C<=1;C++)d.add(D(.08,2.3,.09,"#2a1d18",P+a*.1,1.5,i+C*(r-.9)/2));if(h.awning){let C=Ue(512,128,k=>{for(let X=0;X<12;X++)k.fillStyle=X%2?h.awning:"#F4EEDF",k.fillRect(X*512/12,0,42.666666666666664,128)}),z=new $(new Oe(r-.3,1.3),new Xe({map:C,side:wt,roughness:.9}));z.rotation.y=a*Math.PI/2,z.rotation.order="YXZ",z.rotation.x=-1,z.position.set(P+a*.55,2.56,i),z.castShadow=!0,d.add(z)}if(l){let C=new yt(h.light||"#FFC88A",3.2,7,1.8);C.position.set(P+a*1.7,2.1,i),d.add(C)}}return d}function td(n,e,t){let i=new $(new Oe(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function Y2(n="#A99D90"){let e=Ue(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=qe(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=_n,e}function ia(n,e){let t=Ue(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=qe(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=_n,t.repeat.set(1,12);let i=td(9,240,new Xe({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=Y2(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=td(4.4,240,new Xe({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(D(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function sa(n,e,t,i,s=!0,r=5.5){let o=new de;o.add(D(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(D(.26,.3,.26,"#15151b",e,.15,t));let a=D(.26,.4,.26,new Xe({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(D(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=nt("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new yt("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var nd={};function fn(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new de;o.add(D(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=nd[a]||(nd[a]=Ue(512,512,c=>{let h=qe(r%3+3),u=(d,f,g,y)=>{c.fillStyle=y,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,_=g*(.86+.14*Math.sin(p*5+d)+h()*.05);c.lineTo(d+Math.cos(p)*_,f+Math.sin(p)*_)}c.fill()};for(let[d,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])u(d,f,g,s[0]);for(let[d,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])u(d,f,g,s[1]);for(let[d,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])u(d,f,g,s[2]);c.fillStyle=s[3];for(let d=0;d<70;d++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new $(new Oe(3.6*i,3.6*i),new Xe({map:l,alphaTest:.5,side:wt,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new zi({depthPacking:Ks,map:l,alphaTest:.5,side:wt}),o.add(h)}return n.add(o),o}function Ai(n,e,t,i,s,r,o=3,a=0){let l=Ue(1600,900,h=>{h.clearRect(0,0,1600,900);let u=qe(o);for(let d=0;d<3;d++)for(let f=-40;f<1620;){let g=50+u()*110,y=180+u()*(d===0?660:400);if(h.fillStyle=s[d],h.fillRect(f,900-y,g,y),u()<.2&&h.fillRect(f+g/2-4,900-y-60,8,60),r)for(let m=900-y+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)u()<.34&&(h.fillStyle=d===2?"#FFD999":d===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new $(new Oe(t,i),new at({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Bt(n,e,t,i,s){let r=Ue(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new $(new Oe(t,i),new at({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var I=(n,e={})=>new Xe({color:n,roughness:.85,...e});function je(n,e,t,i={}){let s=new $(new Oe(e,t),new at({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:wt,color:i.color||"#fff",blending:i.add?vn:Li,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new zi({depthPacking:Ks,map:n,alphaTest:.5,side:wt})),s}function Nn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var kc={value:0};function ra(n="#8E3D30",e=4,t=3){let i=Ue(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=qe(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=_n,i.repeat.set(e,t),i}function id(n="#A59383",e=12,t=12){let i=Ue(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=qe(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=_n,i.repeat.set(e,t),i}var sd=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function Z2(n,e){let[t,i,s,r]=sd[n];return Ue(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Gc(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=qe(o),l={};for(let c of e){let h=Math.floor(a()*sd.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,u=c%100,d=Z2(u,h),f=new at({map:d,alphaTest:.5,side:wt,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=kc,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+u%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new Wo(new Oe(i*.5,i),f,l[c].length),y=new $t;l[c].forEach((m,p)=>{y.position.set(m[0],(m[2]||0)+i/2,m[1]),y.rotation.y=m[3]||0;let _=.92+a()*.16;y.scale.set(_,_,1),y.updateMatrix(),g.setMatrixAt(p,y.matrix)}),g.frustumCulled=!1,n.add(g)}}function Bn(n,e=2600,t=300,i=1){let s=qe(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let u=0;u<e;u++){let d=s()*2-1,f=s()*6.283,g=Math.sqrt(1-d*d);r[u*3]=g*Math.cos(f)*t,r[u*3+1]=d*t,r[u*3+2]=g*Math.sin(f)*t;let y=.55+s()*.45,m=s();o[u*3]=y*(m>.8?1:.9),o[u*3+1]=y*.94,o[u*3+2]=y*(m<.2?.8:1)}let a=new Qt;a.setAttribute("position",new sn(r,3)),a.setAttribute("color",new sn(o,3));let l=Ue(32,32,u=>{let d=u.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"#fff"),d.addColorStop(.35,"#ffffffaa"),d.addColorStop(1,"#ffffff00"),u.fillStyle=d,u.fillRect(0,0,32,32)}),c=new qs({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Pr(a,c);return h.frustumCulled=!1,n.add(h),h}function Si(n,e,t="#6D4A33"){let i=Ue(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=qe(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=_n,i.repeat.set(n/5,e/5);let s=new $(new Oe(n,e),new Xe({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function ir(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Ue(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=_n,r.repeat.set(n/s*4,e/s*4);let o=new $(new Oe(n,e),new Xe({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function hs(n,e,t="#FFD9A0",i=.22){let s=Ue(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new $(new Oe(n,e),new at({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:vn,side:wt,fog:!1}))}function Vc(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new de,a=new $(new Rt(.3,.22,.5,20),I(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Ue(256,256,h=>{h.clearRect(0,0,256,256);for(let u=0;u<9;u++)h.save(),h.translate(128,250),h.rotate((u-4)*.3),h.fillStyle=u%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=je(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function Wc(n,e,t,i="#2A1E18"){let s=new de;s.add(D(n+.08,e+.08,.04,i,0,0,0));let r=Ue(Math.round(n*400),Math.round(e*400),t),o=new $(new Oe(n,e),new Xe({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function en(n,e,t,i=1.2){return new $(new Oe(n,e),new Xe({color:"#000",emissive:t,emissiveIntensity:i}))}function dt(n,e,t,i=10,s=60){let r=new Qs(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function Ur(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new We(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Bt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),Ai(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=ra(t,2,2),a=()=>new Xe({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,y,m])=>n.add(D(y,m,.3,a(),f,g,-3)));for(let[f,g,y,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(D(y,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(D(18,5.2,.3,a(),0,2.6,-3));n.add(Si(18,12,s));let l=Wc(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Vc(4.4,0,-2.4,1.1)),n.add(Vc(-5,0,-2.4,.9,"#36AEA2")),n.add(new Ge(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=dt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new yt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let u=new $(new Rt(.18,.3,.34,24),new Xe({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));u.position.set(3.6,1.9,-1.9),n.add(u),n.add(D(.04,1.7,.04,"#222",3.6,.85,-1.9));let d=nt("#FFC07A",1.2,.35);d.position.copy(u.position),n.add(d)}var rd=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Nr(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new We(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Bt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),Ai(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),ia(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Gi(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:rd[(a+i)%5]})),n.add(Gi(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:rd[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)fn(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),sa(n,-5,-3-l*12,1,t||r);n.add(new Ge(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(dt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},lt=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},Mt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},sr={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),lt(n,120,330,34,100,14,"#B5784A"),lt(n,340,330,34,100,14,"#B5784A"),lt(n,180,340,34,90,14,"#C98E5E"),lt(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),lt(n,120,330,34,100,14,"#B5906A"),lt(n,340,330,34,100,14,"#B5906A"),lt(n,180,340,34,90,14,"#C9A07E"),lt(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),Mt(n,[[96,120],[110,30],[160,100]],"#E9853A"),Mt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),Mt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),Mt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),Mt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),lt(n,92,200,26,70,12,"#A87A44"),lt(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),Mt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),Mt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),Mt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),Mt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),Mt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])lt(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),Mt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{lt(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),Mt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),lt(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),Mt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),Mt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])lt(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),Mt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),Mt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])lt(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),Mt(n,[[160,70],[150,30],[196,70]],"#E890A4"),Mt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),lt(n,40,260,70,240,30,"#2E2E38"),lt(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{lt(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])lt(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),lt(n,160,20,12,50,6,"#8A5A2A"),lt(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])lt(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),Mt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),Mt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),Mt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])lt(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])lt(n,e,330,26,180,12,"#9A6238");lt(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),Mt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])lt(n,e,360,34,190,14,"#4A3222");lt(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)Mt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])lt(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),Mt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),Mt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])lt(n,e,320,34,230,14,"#7A4A2E");lt(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),lt(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),Mt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},oa={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(oa,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in oa)sr[n][3]=oa[n][0],sr[n][4]=oa[n][1];sr.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),Mt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];sr.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)Mt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),Mt(n,[[100,80],[90,30],[130,74]],"#F2913A"),Mt(n,[[160,76],[170,26],[190,80]],"#F2913A"),lt(n,160,380,40,56,18,"#6AB05A"),lt(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];sr.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])lt(n,e,320,34,230,14,"#E4DED2");lt(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),lt(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),Mt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var aa={},od=n=>aa["e"+n]||(aa["e"+n]=Ue(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function ad(n,e={}){let[t,i,s,r,o,a]=sr[n],l=aa[n]||(aa[n]=Ue(t,i,s)),c=a*i/t,h=new de,u=new de;h.add(u);let d=je(l,a,c,{shadow:!0});d.position.y=c/2,u.add(d);let f=new $(new Oe(o*a,o*a*.5),new at({map:od("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),u.add(f);let g=new $(new qn(a*.45,24),new at({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(u.scale.x=-1);let y={root:h,card:u,kind:n,h:c,w:a,eye(m){f.material.map=od(m)},face(m){let p=new F;h.getWorldPosition(p),u.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){d.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),u.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,_=0,v=1){return h.position.set(m,_,p),h.scale.setScalar(v),y}};return y}var Vi=(n,e,t=200,i=200,s)=>{let r=new $(new Oe(t,i),s?new Xe({map:s,roughness:.95}):I(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Xc=(n,e=1)=>{n.add(new Ge("#E9EEFF","#B08A6A",1.05*e)),n.add(dt("#FFD29A",3*e,[-14,16,10],20,70))},Ne={sala:(n,e)=>Ur(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{Ur(n,{wall:"#9A4632",night:e.night}),n.add(D(2.4,.45,3.2,I("#6B4A33"),-1.7,.25,-1.4)),n.add(D(2.3,.3,3,I("#F3EEE4"),-1.7,.6,-1.4)),n.add(D(2.38,.22,2,I("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(D(.8,.22,.5,I("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Nr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new We(e.dusk?"#E8A880":"#F2D8B8",.02),Bt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),Ai(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),Vi(n,"#7A9A50");for(let t=0;t<12;t++)fn(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(D(2.4,.1,.5,I("#8E6242"),-3.4,.5,-2.2)),n.add(D(2.4,.5,.08,I("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)sa(n,-6+t*6,-4,1,!!e.dusk);n.add(new Ge("#E9EEFF","#B08A6A",1)),n.add(dt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Nr(n,{seed:e.seed||2}),Vi(n,"",60,60,id("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new We("#F2D8B8",.012),Bt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Vi(n,"#8AAA58");let t=new de;t.add(D(6,4,5,I("#B5402E"),0,2,0));let i=new $(new Rt(.01,4.4,2.2,4),I("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(D(2,2.6,.1,I("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(D(.1,1,.1,I("#C9A06A"),-10+s*1.3,.5,-4));n.add(D(20,.08,.06,I("#C9A06A"),0,.9,-4)),n.add(D(20,.08,.06,I("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)fn(n,6+s*3,-16-s%2*3,1.6,void 0,s);Xc(n)},sabana:(n,e)=>{n.fog=new We("#F2C890",.01),Bt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=nt("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),Vi(n,"#C8A858");for(let i=0;i<6;i++){let s=new de;s.add(D(.3,3,.3,I("#5A3A22"),0,1.5,0));let r=new $(new Rt(2.6,2.2,.6,12),I("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Ge("#FFE8C8","#8A6A3A",1)),n.add(dt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new We("#F2E2C0",.012),Bt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),Vi(n,"#B8B070");for(let t=0;t<14;t++){let i=new $(new Nt(.55,16,10,0,Math.PI*2,0,Math.PI/2),I("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}Xc(n)},mar:(n,e)=>{$2(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new We(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=Vi(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=qe(5);for(let r=0;r<30;r++){let o=new $(new ii(.2+s()*.3,.8+s()*1.4,7),I(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=hs(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=nt("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Ge("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(dt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new We("#162238",.04),n.add(ir(16,20,"#2A3348","#232B3E",6)),n.add(D(16,6,.3,I("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=en(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=en(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Ue(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new $(new Oe(2.5,1.3),new at({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Ge("#6E86C8","#101420",.8)),n.add(dt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new We("#1E2236",.02),Vi(n,"#2F4A7A"),n.add(D(30,10,.3,I("#E8E2D2"),0,5,-8));let t=Ue(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=je(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new $(new gn(4,.35,10,48),I("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new yt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Ge("#E8E8FF","#3A3A50",.9)),n.add(dt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new We("#E6E2D6",.03),n.add(ir(9,40));for(let i of[-1,1]){n.add(D(.7,4.2,30,I("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(D(1.2,.05,30,I("#DDE0E4"),i*3,.5+s*.9,-10))}let t=qe(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(D(.3,.3,.4,I(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=en(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Ge("#FFFFFF","#B9B3A6",1)),n.add(dt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{Ne.parque(n,{});for(let t=0;t<12;t++)n.add(D(.08,1.4,.08,I("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(D(8,.08,.08,I("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{Ur(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new We("#8A8070",.03),Bt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),Vi(n,"#8A8070");let t=qe(8);for(let i=0;i<40;i++){let s=D(.4+t()*1.6,.3+t()*1,.4+t()*1.4,I(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}Xc(n,.8)}};function $2(n,e){n.background=new Me(e)}function J2(n,e={}){let t=zc({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var Q2=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function qc(n,e,t){let i=Yu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(Ne[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?J2(s,a):(()=>{let c=ad(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{kc.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,y)=>g.position.set(-4+y%12*.7,-2.5+(l*.5+y*.13)%7,-2-y%5*1.5));let u=na(t.cam.map(([g,y])=>[g,y]),l),d=na(t.cam.map(([g,,y])=>[g,y]),l);Zu(c,u,d,0);for(let{a:g,k:y}of r){if(g.move){let p=g.move(l);y.root.position.set(p[0],p[1],p[2])}y.face(c),y.eye(Q2(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,_])=>l>=p&&l<_);g.tipo==="humano"?g.pose?g.pose(y,l):y.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(y.talk(l,m),g.pose&&g.pose(y,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?na(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function ld(n,e,t,i="#E8667F"){n.add(D(2.2,.45,3,I("#6B4A33"),e,.25,t)),n.add(D(2.1,.3,2.8,I("#F3EEE4"),e,.6,t)),n.add(D(2.18,.2,1.9,I(i,{roughness:.9}),e,.8,t+.5)),n.add(D(2.2,1.3,.16,I("#5A3C28"),e,.9,t-1.55)),n.add(D(.8,.2,.45,I("#FFFFFF"),e-.5,.82,t-1.1)),n.add(D(.8,.2,.45,I("#F6E6C8"),e+.5,.82,t-1.1))}function cd(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return Ue(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function si(n,e="#F2C14E",t=140,i=256,s=200){return Ue(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function K2(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,u)=>{n.save(),n.rotate(c),n.fillRect(-u/2,-h,u,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function rr(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new Wn(i);r.colorSpace=Wt;let o=new $(new Oe(n,n),new Xe({map:r,transparent:!0,alphaTest:.05,side:wt,roughness:.7}));return o.set=(a,l={})=>{K2(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}var Br=[0,4.16,6.02,11.86,15.32,20.5,27.82,30.64,37.72,42.18,50.42,58.26,62.68,67.48,75.58,80.26,88.6,94.24,105.34,115.72,127.48,141.3,153.28,162,163.8,176.58,186,189.78,198.42,209.78,215.9,222.54,231.02,236.76,244.06,249.26,253.58,261.9,268.72,282.46,293.42,298.38,301.26,306.44,309.76,320.16,327.1,338.6,341.7,356.38,358.96,371.4,376.48,380.94,390.46,402.6,412.28,421.94,424.2,433.72,438.82,448.76,466.34,472.52,480.4,492.96,495.96,503.74,514.6,520.8,528.1,533.26,548.18,553.1,560.06,570.84,584.34,586.12,601.04,611.72,624.64,629.66,636],j2=[["estas",0],["encerrado",.36],["en",.92],["un",1.06],["bunker",1.2],["a",1.92],["doce",2.18],["metros",2.46],["bajo",2.82],["tierra",3.08],["la",4.16],["puerta",4.3],["no",4.62],["se",5.02],["abre",5.22],["y",6.02],["la",6.2],["unica",6.3],["persona",6.52],["que",7.02],["esta",7.22],["contigo",7.42],["es",7.92],["lucia",8.42],["la",9.44],["chica",9.58],["que",9.88],["te",10.04],["gusta",10.16],["desde",10.42],["primero",10.68],["como",11.86],["has",12.1],["llegado",12.28],["hasta",12.62],["aqui",12.86],["rebobinemos",14.04],["excursion",15.32],["del",15.9],["instituto",16.08],["un",17.12],["museo",17.3],["de",17.72],["la",17.82],["guerra",17.92],["fria",18.12],["en",18.94],["mitad",19.06],["del",19.34],["bosque",19.58],["un",20.5],["bunker",20.68],["antiguo",21],["con",21.86],["paredes",22.06],["de",22.48],["hormigon",22.58],["literas",23.42],["de",23.8],["metal",23.92],["y",24.2],["una",24.66],["puerta",24.82],["de",25.12],["acero",25.38],["que",25.66],["pesa",25.86],["mas",26.26],["que",26.62],["un",26.8],["coche",26.92],["el",27.82],["guia",28.04],["dice",28.3],["no",29.04],["toqueis",29.32],["nada",29.8],["y",30.64],["lucia",30.84],["claro",31.48],["toca",32.22],["algo",32.42],["una",33.28],["palanca",33.48],["roja",33.9],["tu",34.96],["intentas",35.08],["pararla",35.56],["llegas",36.56],["tarde",36.8],["la",37.72],["puerta",37.88],["se",38.2],["cierra",38.42],["clonc",39.34],["y",40.38],["se",40.5],["queda",40.66],["bloqueada",40.94],["fuera",42.18],["una",42.84],["tormenta",42.96],["corta",43.52],["la",43.92],["luz",44],["de",44.22],["todo",44.44],["el",44.7],["bosque",44.92],["el",45.78],["grupo",45.94],["ya",46.2],["ha",46.52],["subido",46.6],["al",46.96],["autobus",47.08],["nadie",47.96],["se",48.36],["ha",48.56],["dado",48.68],["cuenta",48.76],["de",49.12],["que",49.32],["faltais",49.4],["por",50.42],["el",50.62],["walkie",50.72],["talkie",50.72],["del",51.36],["bunker",51.52],["la",52.16],["voz",52.34],["del",52.52],["guia",52.68],["dice",52.94],["que",53.22],["el",53.44],["cerrojo",53.6],["es",54.06],["electrico",54.32],["que",55.34],["hasta",55.42],["que",55.6],["vuelva",55.78],["la",56.1],["corriente",56.2],["no",56.68],["se",57.02],["puede",57.24],["abrir",57.5],["y",58.26],["que",58.38],["eso",58.54],["con",59.18],["esta",59.3],["tormenta",59.5],["va",60.42],["a",60.58],["ser",60.7],["manana",60.86],["por",61.34],["la",61.64],["manana",61.78],["una",62.68],["noche",62.94],["entera",63.32],["tu",64.46],["ella",65.3],["y",65.52],["un",66.18],["bunker",66.38],["antes",67.48],["de",67.94],["seguir",68.1],["si",68.86],["te",68.96],["gustan",69.06],["estas",69.38],["historias",69.6],["de",70.16],["y",70.44],["si",70.92],["suscribete",71.82],["al",72.36],["canal",72.5],["y",72.76],["activa",72.96],["la",73.34],["campanita",73.46],["asi",74.34],["no",74.56],["te",74.76],["pierdes",74.88],["la",75.18],["proxima",75.32],["y",75.58],["ahora",76.32],["si",76.56],["vamos",77.14],["a",77.44],["ver",77.68],["como",77.82],["sobrevives",78.16],["a",78.84],["esta",79.06],["noche",79.3],["primero",80.26],["lo",81.04],["obvio",81.18],["intentar",81.92],["salir",82.36],["empujas",83.34],["la",83.82],["puerta",83.96],["nada",84.88],["lucia",85.7],["la",86.1],["empuja",86.28],["contigo",86.64],["nada",87.58],["probais",88.6],["con",88.84],["la",89.04],["palanca",89.16],["roja",89.48],["arriba",90.22],["y",90.74],["abajo",90.92],["cuarenta",91.66],["veces",92.24],["nada",93.18],["encuentras",94.24],["un",94.74],["conducto",94.92],["de",95.42],["ventilacion",95.52],["en",96.08],["el",96.26],["techo",96.38],["te",97.16],["subes",97.24],["a",97.6],["una",97.72],["litera",97.84],["metes",98.18],["la",98.94],["cabeza",99.08],["y",99.42],["descubres",100.18],["que",100.74],["por",100.92],["ahi",101.1],["como",101.6],["mucho",101.88],["cabe",102.6],["un",102.78],["gato",103],["un",103.74],["gato",103.98],["delgado",104.24],["lucia",105.34],["desde",106.1],["abajo",106.28],["y",107.24],["tu",107.36],["con",108.56],["la",108.66],["cabeza",108.78],["dentro",109.1],["del",109.42],["conducto",109.64],["hay",110.62],["mucho",110.8],["polvo",111.12],["y",112.02],["te",112.16],["sale",112.28],["un",112.5],["estornudo",112.66],["que",113.22],["retumba",113.42],["por",113.92],["todo",114.24],["el",114.56],["bunker",114.78],["primera",115.72],["hora",116.18],["silencio",116.94],["mucho",118.18],["silencio",118.56],["lucia",119.7],["sentada",120.6],["en",121.04],["una",121.2],["litera",121.36],["tu",122.24],["en",122.42],["la",122.9],["otra",123.04],["los",123.82],["dos",124],["mirando",124.2],["la",124.64],["pared",124.8],["como",125.08],["si",125.34],["fuera",125.52],["muy",125.82],["interesante",126.18],["haces",127.48],["inventario",127.76],["6",128.96],["latas",129.12],["de",129.5],["judias",129.62],["de",129.98],["1987",130.18],["una",132.12],["radio",132.34],["que",132.68],["no",132.84],["funciona",132.96],["una",133.88],["linterna",134.08],["una",135.1],["baraja",135.3],["de",135.64],["cartas",135.78],["a",136.14],["la",136.3],["que",136.34],["le",136.46],["faltan",136.58],["los",136.94],["ases",137.08],["y",137.8],["un",138.02],["generador",138.14],["de",138.64],["emergencia",138.78],["que",139.38],["da",139.56],["luz",139.68],["para",139.92],["unas",140.14],["horas",140.42],["lucia",141.3],["lee",141.76],["la",142],["fecha",142.2],["de",142.5],["las",142.6],["latas",142.76],["y",143.08],["dice",143.28],["bueno",144.06],["si",144.76],["nos",144.92],["morimos",145.08],["por",145.84],["lo",145.94],["menos",146.08],["no",146.28],["sera",146.52],["de",146.74],["hambre",146.92],["sera",147.52],["de",147.78],["judias",147.98],["y",148.82],["se",149.02],["rie",149.16],["y",149.86],["tu",149.98],["te",150.12],["ries",150.26],["y",150.96],["el",151.08],["bunker",151.24],["ya",151.5],["no",151.76],["parece",151.9],["tan",152.22],["frio",152.46],["pero",153.28],["tienes",153.52],["un",153.86],["problema",154.1],["el",155],["corazon",155.16],["te",155.58],["va",155.86],["a",156.04],["mil",156.16],["te",156.8],["sudan",156.98],["las",157.32],["manos",157.5],["y",158.28],["no",158.46],["sabes",158.56],["si",158.86],["es",159.06],["por",159.2],["estar",159.36],["encerrado",159.6],["o",160.24],["por",160.94],["ella",161.12],["y",162],["eso",162.18],["tiene",162.48],["nombre",162.84],["en",163.8],["1974",163.96],["dos",165.74],["psicologos",165.96],["de",166.54],["canada",166.66],["donald",167.44],["dutton",167.62],["y",168.14],["arthur",168.36],["aron",168.6],["hicieron",169.34],["un",169.66],["experimento",169.84],["en",170.54],["un",170.64],["puente",170.78],["colgante",171.08],["un",172.12],["puente",172.3],["estrecho",172.62],["que",173.2],["se",173.54],["balancea",173.66],["a",174.32],["70",174.66],["metros",175.02],["sobre",175.44],["un",175.8],["rio",176],["al",176.58],["final",176.74],["del",176.96],["puente",177.18],["una",177.9],["chica",178.04],["les",178.36],["pedia",178.52],["a",178.86],["los",178.98],["chicos",179.08],["que",179.4],["rellenaran",179.68],["una",180.18],["encuesta",180.4],["y",181.42],["luego",181.5],["les",181.78],["daba",182.02],["su",182.24],["numero",182.46],["de",182.74],["telefono",182.9],["por",183.6],["si",183.84],["querian",184.02],["saber",184.3],["mas",184.56],["del",184.88],["estudio",185.04],["hicieron",186],["lo",186.32],["mismo",186.5],["en",186.74],["un",186.96],["puente",187.08],["normal",187.38],["bajito",188.22],["y",188.72],["firme",188.9],["el",189.78],["resultado",189.92],["de",190.92],["los",191.08],["chicos",191.22],["que",191.52],["cruzaron",191.74],["el",192.14],["puente",192.32],["que",192.64],["daba",192.8],["miedo",193.02],["la",193.7],["mitad",193.88],["la",194.16],["llamaron",194.46],["despues",194.84],["del",195.78],["puente",196],["tranquilo",196.28],["muy",197.34],["pocos",197.44],["la",198.42],["explicacion",198.6],["el",199.74],["cuerpo",199.88],["no",200.18],["distingue",200.46],["bien",200.96],["entre",201.18],["los",201.46],["nervios",201.66],["del",202.04],["miedo",202.24],["y",202.56],["los",202.88],["nervios",203.04],["de",203.46],["alguien",203.64],["que",203.88],["te",204.12],["gusta",204.22],["el",205.04],["corazon",205.18],["late",205.58],["igual",205.88],["y",206.72],["el",206.9],["cerebro",207.02],["a",207.68],["veces",207.88],["se",208.64],["confunde",208.76],["o",209.78],["sea",209.94],["que",210.56],["un",210.66],["bunker",210.82],["cerrado",211.14],["es",211.58],["basicamente",212.2],["el",213.34],["puente",213.48],["colgante",213.84],["definitivo",214.4],["segunda",215.9],["hora",216.54],["el",217.38],["generador",217.56],["hace",218.04],["un",218.32],["ruido",218.44],["raro",218.7],["y",219.6],["se",219.78],["apaga",219.9],["oscuridad",220.84],["total",221.44],["y",222.54],["oyes",222.68],["la",222.96],["voz",223.14],["de",223.3],["lucia",223.48],["muy",224.34],["bajita",224.56],["oye",225.68],["puedes",226.42],["encender",226.76],["la",227.18],["linterna",227.36],["es",228.44],["que",228.64],["me",228.84],["da",229.3],["miedo",229.44],["la",229.68],["oscuridad",229.9],["lucia",231.02],["la",232.04],["que",232.2],["nunca",232.36],["tiene",232.68],["miedo",233.16],["de",233.58],["nada",233.74],["la",234.44],["que",234.62],["toco",234.76],["la",235.08],["palanca",235.22],["roja",235.62],["enciendes",236.76],["la",237.12],["linterna",237.36],["y",238.26],["le",238.44],["dices",238.54],["algo",238.78],["que",239.08],["nunca",239.32],["le",239.72],["habias",240],["dicho",240.26],["a",240.6],["nadie",240.74],["que",241.5],["a",241.6],["ti",241.76],["te",241.9],["dan",242.34],["miedo",242.5],["las",242.82],["alturas",243.04],["que",244.06],["en",244.16],["la",244.26],["excursion",244.36],["de",244.88],["la",245.02],["noria",245.14],["del",245.42],["ano",245.56],["pasado",245.74],["fingiste",246.08],["que",246.78],["te",246.94],["dolia",247.06],["el",247.34],["estomago",247.46],["para",247.94],["no",248.2],["subir",248.38],["ella",249.26],["se",249.5],["rie",249.72],["lo",250.52],["del",250.66],["estomago",250.8],["era",251.28],["mentira",251.46],["era",252.42],["mentira",252.62],["y",253.58],["entonces",253.76],["en",254.68],["un",254.8],["cajon",254.92],["encontrais",255.32],["algo",256.32],["un",257.08],["cuaderno",257.26],["viejo",257.74],["de",258.4],["los",258.58],["soldados",258.7],["que",259.12],["vigilaban",259.32],["el",259.76],["bunker",259.96],["hace",260.26],["40",260.52],["anos",260.86],["y",261.9],["en",262.1],["la",262.2],["ultima",262.32],["pagina",262.6],["alguien",263.5],["escribio",263.86],["una",264.44],["lista",264.58],["de",264.9],["preguntas",265.08],["para",266.12],["pasar",266.36],["las",266.78],["noches",267.06],["largas",267.52],["esto",268.72],["tambien",269.16],["tiene",269.66],["ciencia",269.9],["detras",270.36],["en",271.26],["1997",271.4],["el",273.14],["mismo",273.26],["arthur",273.6],["aron",273.93],["del",274.26],["puente",274.52],["hizo",274.86],["otro",275.34],["experimento",275.66],["junto",276.78],["a",277.08],["parejas",277.22],["de",277.56],["desconocidos",277.74],["y",278.48],["les",278.7],["dio",278.86],["36",279.04],["preguntas",279.68],["para",280.16],["hacerse",280.56],["en",281],["unos",281.12],["45",281.3],["minutos",281.88],["empezaban",282.46],["faciles",283.48],["y",284.26],["cada",284.56],["vez",284.76],["eran",285],["mas",285.26],["personales",285.58],["al",286.7],["final",286.86],["muchas",287.52],["de",287.92],["esas",288.12],["parejas",288.3],["de",288.74],["desconocidos",288.92],["se",289.58],["sentian",289.78],["tan",290.22],["cercanas",290.54],["como",291.06],["amigos",291.42],["de",291.8],["toda",292.04],["la",292.28],["vida",292.44],["lucia",293.42],["abre",293.8],["el",294.12],["cuaderno",294.24],["pregunta",295.24],["1",295.58],["cual",296.36],["seria",296.58],["tu",296.9],["dia",297.14],["perfecto",297.34],["tu",298.38],["contestas",298.52],["hoy",299.56],["no",299.78],["desde",300.24],["luego",300.36],["ella",301.26],["dice",301.44],["que",301.74],["el",301.98],["suyo",302.1],["seria",302.42],["un",302.68],["dia",302.9],["de",303.08],["lluvia",303.22],["en",303.86],["casa",304.02],["viendo",304.7],["una",304.92],["peli",305.18],["de",305.48],["miedo",305.58],["pregunta",306.44],["7",306.8],["pregunta",307.64],["12",308.12],["pregunta",308.92],["20",309.38],["te",309.76],["enteras",310.52],["de",310.94],["que",311.12],["lucia",311.2],["quiere",311.6],["ser",311.84],["biologa",312.14],["marina",312.62],["que",313.32],["tiene",313.52],["un",313.74],["perro",313.9],["que",314.18],["se",314.32],["llama",314.44],["calcetin",314.68],["que",315.74],["cuando",315.8],["era",316.04],["pequena",316.24],["se",316.6],["corto",316.9],["el",317.22],["flequillo",317.32],["ella",317.76],["sola",318],["y",318.34],["su",318.52],["madre",318.7],["casi",318.94],["llora",319.24],["y",320.16],["ella",320.26],["se",320.54],["entera",320.72],["de",321.04],["que",321.22],["tu",321.32],["dibujas",321.54],["que",322.58],["llenas",322.66],["cuadernos",322.94],["enteros",323.58],["y",324.22],["que",324.72],["nunca",324.84],["se",325.18],["los",325.42],["ensenas",325.54],["a",326.14],["nadie",326.24],["me",327.1],["dibujas",327.28],["algo",327.68],["te",328.4],["pregunta",328.52],["y",329.52],["con",329.6],["la",329.74],["linterna",329.88],["en",330.38],["la",330.48],["boca",330.58],["en",331.28],["la",331.44],["ultima",331.56],["hoja",331.9],["del",332.24],["cuaderno",332.42],["de",332.92],["los",333],["soldados",333.12],["la",334.06],["dibujas",334.24],["a",334.76],["ella",334.88],["tocando",335.62],["la",336.04],["palanca",336.26],["roja",336.66],["con",337.52],["cara",337.74],["de",337.98],["culpable",338.12],["se",338.6],["rie",339.3],["tanto",339.58],["que",339.86],["se",340.14],["le",340.3],["cae",340.42],["la",340.64],["linterna",340.74],["luego",341.7],["lucia",342.42],["coge",342.74],["la",343.06],["radio",343.22],["que",343.52],["no",343.7],["funciona",343.88],["le",344.7],["da",344.82],["un",344.96],["golpe",345.1],["otro",345.92],["golpe",346.22],["y",347.12],["al",347.18],["tercero",347.3],["la",348.14],["radio",348.22],["suelta",348.5],["un",348.96],["chasquido",349.08],["y",349.56],["empieza",350.34],["a",350.84],["sonar",351.04],["musica",351.34],["una",352.54],["emisora",352.68],["de",353.08],["canciones",353.24],["antiguas",353.62],["de",354.34],["las",354.68],["que",354.82],["escuchaba",354.94],["tu",355.38],["abuela",355.54],["lucia",356.38],["se",356.94],["levanta",357.12],["bailas",358.14],["tu",358.96],["no",359.16],["bailas",359.28],["nunca",360.1],["pero",361.1],["estas",361.34],["en",361.58],["un",361.78],["bunker",361.9],["a",362.52],["12",362.7],["metros",362.9],["bajo",363.22],["tierra",363.48],["y",364.26],["nadie",364.34],["te",364.58],["ve",364.84],["asi",364.94],["que",365.72],["bailas",365.92],["fatal",366.84],["ella",367.88],["tambien",368.08],["baila",368.52],["fatal",368.92],["os",369.84],["chocais",370],["con",370.34],["una",370.56],["litera",370.74],["hasta",371.4],["que",371.76],["la",371.92],["radio",372.04],["se",372.36],["vuelve",372.56],["a",372.92],["callar",373.02],["esta",373.88],["vez",374.16],["para",374.88],["siempre",375.1],["las",376.48],["3",376.72],["de",377.02],["la",377.2],["manana",377.3],["ya",378.18],["habeis",378.48],["perdido",378.72],["la",379.16],["cuenta",379.3],["de",379.6],["las",379.76],["horas",379.94],["en",380.94],["el",381.08],["experimento",381.18],["marte",381.86],["500",382.22],["seis",383.06],["hombres",383.26],["vivieron",383.62],["520",384.08],["dias",384.94],["encerrados",385.38],["en",386],["una",386.24],["nave",386.4],["de",386.64],["mentira",386.76],["en",387.54],["moscu",387.66],["para",388.44],["simular",388.58],["un",388.96],["viaje",389.14],["a",389.38],["marte",389.6],["y",390.46],["uno",390.64],["de",390.76],["los",390.88],["problemas",391],["mas",391.44],["serios",391.84],["no",392.24],["fue",392.5],["la",392.68],["comida",392.8],["ni",393.2],["el",393.44],["aire",393.58],["fue",394.28],["la",394.6],["convivencia",394.74],["el",396.1],["cansancio",396.26],["las",397.36],["pequenas",397.52],["manias",397.96],["del",398.34],["otro",398.6],["que",398.84],["despues",399.4],["de",399.74],["muchos",399.9],["dias",400.1],["se",400.92],["hacen",401.06],["enormes",401.36],["y",402.6],["a",402.74],["vosotros",402.84],["esa",403.62],["noche",403.86],["tambien",404.64],["os",404.94],["llega",405.2],["tienes",406.18],["frio",406.52],["lucia",407.3],["tiene",407.7],["hambre",408],["ninguno",408.88],["quiere",409.32],["las",409.58],["judias",409.84],["de",410.2],["1987",410.38],["y",412.28],["cuando",412.44],["le",412.58],["dices",412.78],["medio",413.42],["en",413.62],["broma",413.78],["que",414.4],["todo",414.42],["esto",414.62],["es",414.9],["culpa",415.12],["de",415.28],["la",415.48],["palanca",415.58],["roja",415.92],["ella",416.76],["se",417],["enfada",417.2],["de",417.62],["verdad",417.82],["ya",418.54],["lo",418.72],["se",418.86],["vale",419.24],["no",419.86],["hace",419.98],["falta",420.12],["que",420.34],["me",420.5],["lo",420.6],["recuerdes",420.68],["silencio",421.94],["del",422.96],["malo",423.22],["y",424.2],["entonces",424.36],["piensas",424.74],["en",425.4],["el",425.58],["puente",425.68],["en",426.58],["que",426.7],["a",426.82],["lo",426.88],["mejor",426.94],["ella",427.26],["solo",427.48],["se",427.78],["rie",427.96],["contigo",428.22],["porque",428.7],["tiene",428.96],["miedo",429.3],["porque",430.12],["no",430.44],["hay",430.68],["nadie",430.78],["mas",431.1],["porque",431.98],["es",432.24],["un",432.5],["bunker",432.66],["y",433.72],["que",433.82],["manana",433.92],["cuando",434.8],["se",434.86],["abra",435.1],["la",435.26],["puerta",435.42],["todo",436.3],["volvera",436.44],["a",437.02],["ser",437.1],["como",437.3],["antes",437.54],["te",438.82],["levantas",438.94],["te",439.92],["sientas",440.04],["en",440.42],["el",440.56],["suelo",440.68],["junto",441.3],["a",441.54],["su",441.7],["litera",441.78],["y",442.7],["le",442.82],["pides",442.94],["perdon",443.18],["no",444.32],["ha",444.44],["sido",444.54],["culpa",444.7],["de",445],["nadie",445.2],["ha",446],["sido",446.16],["culpa",446.34],["de",446.62],["una",446.84],["palanca",446.98],["roja",447.36],["muy",447.8],["mal",448.14],["puesta",448.14],["y",448.76],["para",449.6],["hacer",449.82],["las",450.06],["paces",450.24],["haceis",450.92],["algo",451.34],["que",451.56],["ninguno",451.76],["queria",452.26],["hacer",452.58],["abris",453.68],["una",454.06],["lata",454.26],["de",454.5],["judias",454.66],["de",455.06],["1987",455.28],["la",457.42],["oleis",457.62],["la",458.58],["mirais",458.74],["y",459.74],["decidis",459.84],["por",460.68],["unanimidad",460.8],["que",461.82],["hay",461.92],["cosas",462.06],["que",462.34],["es",462.66],["mejor",462.8],["no",463.14],["saber",463.36],["volveis",464.48],["a",464.9],["cerrar",465.02],["la",465.28],["lata",465.46],["ella",466.34],["se",466.56],["asoma",466.76],["vamos",467.7],["a",467.92],["la",468.1],["ultima",468.16],["pregunta",468.38],["dice",469.36],["saltandose",470.22],["todas",470.84],["las",471.2],["demas",471.48],["abres",472.52],["el",472.84],["cuaderno",473],["la",474],["ultima",474.16],["pregunta",474.44],["de",474.9],["los",475.08],["soldados",475.2],["dice",475.66],["que",476.66],["es",476.9],["lo",477.12],["que",477.28],["nunca",477.4],["te",477.74],["has",478.02],["atrevido",478.14],["a",478.64],["decirle",478.76],["a",479.24],["alguien",479.34],["lucia",480.4],["dice",480.9],["empiezo",481.66],["yo",482.1],["y",482.84],["te",483],["cuenta",483.12],["que",483.36],["el",483.6],["ano",483.72],["pasado",483.88],["en",484.64],["la",484.78],["excursion",484.86],["de",485.34],["la",485.48],["noria",485.58],["ella",486.26],["tampoco",486.42],["subio",486.86],["que",487.84],["se",487.92],["quedo",488.06],["abajo",488.32],["que",489.2],["se",489.32],["quedo",489.44],["abajo",489.72],["porque",490.46],["tu",490.62],["te",491.02],["quedaste",491.4],["abajo",491.78],["te",492.96],["quedas",493.06],["sin",493.4],["aire",493.58],["y",494.26],["no",494.46],["es",494.58],["por",494.74],["el",494.9],["bunker",495.02],["te",495.96],["toca",496.2],["y",496.96],["le",497.1],["dices",497.2],["la",497.46],["verdad",497.66],["que",498.56],["te",498.66],["gusta",498.78],["que",499.56],["te",499.78],["gusta",499.9],["desde",500.14],["primero",500.38],["desde",501.36],["mucho",501.56],["antes",501.96],["de",502.3],["cualquier",502.5],["puente",502.74],["colgante",503.26],["ella",503.74],["no",504.82],["dice",505.08],["nada",505.3],["te",506.14],["coge",506.28],["la",506.54],["mano",506.66],["y",507.4],["asi",507.58],["os",507.78],["quedais",507.98],["dormidos",508.3],["en",509.3],["el",509.48],["suelo",509.6],["de",509.9],["un",510.04],["bunker",510.18],["de",510.54],["la",510.72],["guerra",510.82],["fria",511.04],["al",511.88],["lado",512.04],["de",512.28],["seis",512.48],["latas",512.78],["de",513.22],["judias",513.36],["siete",514.6],["de",515.12],["la",515.28],["manana",515.38],["clonc",516.34],["la",517.22],["puerta",517.42],["se",517.7],["abre",517.96],["la",518.72],["luz",518.9],["del",519.04],["sol",519.24],["entra",519.54],["de",520.02],["golpe",520.2],["esta",520.8],["el",521.06],["guia",521.28],["esta",522.02],["tu",522.3],["profesora",522.5],["estan",523.44],["los",523.76],["bomberos",524],["y",524.96],["esta",525.04],["media",525.3],["clase",525.68],["haciendo",526.1],["fotos",526.5],["con",526.84],["el",527.12],["movil",527.24],["lucia",528.1],["te",528.54],["suelta",528.7],["la",529.08],["mano",529.2],["rapidisimo",529.42],["rojos",530.2],["como",531.08],["tomates",531.4],["los",532.24],["dos",532.48],["y",533.26],["entonces",533.42],["el",533.8],["guia",534.14],["mira",534.4],["la",534.66],["palanca",534.86],["roja",535.2],["y",535.66],["os",535.88],["explica",536.02],["muy",536.82],["serio",537.02],["que",537.84],["esa",537.92],["palanca",538.14],["no",538.6],["cierra",538.9],["nada",539.3],["es",540.1],["la",540.3],["alarma",540.46],["antigua",540.82],["y",541.58],["esta",541.74],["desconectada",541.98],["desde",542.64],["hace",542.86],["30",543.16],["anos",543.64],["la",544.58],["puerta",544.8],["se",545.06],["cerro",545.34],["sola",545.66],["por",546.32],["el",546.5],["apagon",546.6],["de",546.94],["la",547.06],["tormenta",547.18],["lucia",548.18],["te",548.62],["mira",548.78],["muy",549.4],["digna",549.68],["lo",550.58],["ves",550.74],["no",551.36],["fue",551.62],["culpa",551.92],["mia",552.2],["esa",553.1],["semana",553.4],["en",554],["el",554.14],["instituto",554.26],["no",555.26],["se",555.42],["habla",555.62],["de",555.9],["otra",556.08],["cosa",556.3],["y",556.64],["tu",557.26],["tienes",557.38],["una",557.66],["duda",557.94],["que",558.18],["no",558.42],["te",558.64],["deja",558.82],["dormir",559.08],["y",560.06],["si",560.22],["fue",560.3],["el",560.54],["puente",560.7],["y",561.62],["si",561.8],["ella",561.9],["solo",562.16],["sintio",562.46],["eso",562.96],["porque",563.22],["estaba",563.54],["encerrada",563.9],["a",564.94],["oscuras",565.02],["con",565.9],["miedo",566.1],["y",566.86],["si",567.08],["fuera",567.18],["en",567.5],["el",568.04],["mundo",568.16],["normal",568.4],["no",568.88],["siente",569.56],["nada",569.88],["asi",570.84],["que",571.14],["haces",571.4],["algo",571.68],["valiente",572.02],["le",573],["preguntas",573.16],["a",573.54],["lucia",573.78],["si",574.1],["quiere",574.34],["quedar",574.64],["el",574.9],["sabado",575.14],["en",575.92],["el",576.08],["sitio",576.2],["menos",576.54],["emocionante",576.96],["del",577.78],["mundo",578],["la",578.78],["biblioteca",578.9],["municipal",579.56],["sin",580.62],["tormenta",580.86],["sin",581.48],["palancas",582.04],["sin",583.04],["oscuridad",583.3],["y",584.34],["ella",584.54],["dice",584.82],["que",585.26],["si",585.44],["y",586.12],["el",586.3],["sabado",586.42],["en",587.12],["la",587.26],["biblioteca",587.36],["en",588.34],["la",588.44],["mesa",588.54],["del",588.76],["fondo",588.96],["con",589.66],["la",589.8],["luz",589.92],["encendida",590.1],["y",590.76],["nada",590.94],["que",591.22],["de",591.44],["miedo",591.58],["le",592.32],["ensenas",592.5],["tu",592.98],["cuaderno",593.12],["de",593.62],["dibujos",593.72],["el",594.66],["de",594.82],["verdad",594.96],["y",595.74],["ella",595.94],["se",596.2],["rie",596.42],["igual",596.72],["que",597.06],["en",597.3],["el",597.46],["bunker",597.58],["y",598.36],["te",598.52],["coge",598.64],["la",598.9],["mano",599.04],["igual",599.3],["que",599.68],["en",599.94],["el",600.12],["bunker",600.24],["porque",601.04],["eso",601.34],["es",601.7],["lo",601.9],["curioso",602.04],["el",603],["miedo",603.14],["puede",603.46],["encender",603.82],["algo",604.3],["pero",605.14],["no",605.34],["lo",605.58],["puede",605.74],["mantener",606],["encendido",606.46],["lo",607.56],["que",607.76],["se",607.88],["queda",608.02],["cuando",608.26],["se",608.52],["abre",608.8],["la",609],["puerta",609.16],["es",609.5],["lo",610.02],["que",610.18],["os",610.3],["habeis",610.44],["contado",610.7],["ah",611.72],["y",612.34],["una",612.42],["cosa",612.6],["mas",612.82],["en",613.6],["biosfera",613.8],["2",614.22],["un",614.94],["enorme",615.14],["invernadero",615.44],["cerrado",616.14],["en",616.6],["arizona",616.78],["ocho",617.66],["personas",617.92],["vivieron",618.38],["encerradas",618.82],["dos",619.44],["anos",619.8],["de",620.64],["1991",620.82],["a",621.8],["1993",622.64],["y",624.64],["dos",624.82],["de",624.98],["ellas",625.16],["jane",625.96],["poynter",626.08],["y",626.56],["taber",626.76],["maccallum",627.06],["acabaron",627.96],["casandose",628.44],["lucia",629.66],["lo",630.14],["lee",630.32],["en",630.5],["tu",630.68],["movil",630.8],["y",631.16],["te",631.38],["dice",631.52],["ni",631.78],["se",632.56],["te",632.8],["ocurra",632.94],["volver",633.44],["a",633.66],["tocar",633.86],["una",634.1],["palanca",634.5],["roja",634.96],["si",636],["te",636.2],["ha",636.32],["gustado",636.42],["esta",636.72],["historia",637.06],["suscribete",637.94],["al",638.38],["canal",638.52],["para",638.78],["ver",639.02],["mas",639.24],["videos",639.56],["de",639.94],["y",640.28],["si",640.28],["y",641.58],["cuentame",641.74],["en",642.14],["los",642.28],["comentarios",642.4],["con",643.48],["quien",643.64],["te",643.84],["quedarias",644.02],["tu",644.54],["atrapado",644.8],["en",645.44],["un",645.56],["bunker",645.68]],Yc=(n,e=0)=>{for(let[t,i]of j2)if(i>=e&&t===n)return i;return e};var la=(n,e,t=200,i=200)=>{let s=new $(new Oe(t,i),I(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},yn=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Ue(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function eg(n,e=.5){let t=new de,i=Ue(1024,256,r=>{r.clearRect(0,0,1024,256);let o=qe(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,u=r.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),u.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=u,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new $(new Oe(400,100),new at({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:vn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function tg(n,e=0,t=-1){for(let i=0;i<4;i++){let s=D(5,.22,.6,I("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new $(new ii(.16,.35,6),I(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function Zc(n,e,t,i=1){let s=new $(new Nt(.1*i,16,12),I("#D83A2A",{roughness:.35}));return s.position.set(n,e,t),s.castShadow=!0,s}function $c(n,e=40,t=3,i=[-12,12,-40,4]){let s=qe(t),r=Ue(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=je(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function hd(n,e=200,t=5,i=10,s=30,r=2){let o=qe(t),a=Ue(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=je(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}Ne.pasteleria=n=>{n.fog=new We("#F3D2C0",.02),n.add(ir(16,14,"#F2E6DA","#E2CFC0",8)),n.add(D(16,5,.3,I("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(D(.12,5,.05,I("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(D(5.4,1,.9,I("#8A5A3C"),0,.5,-1.2)),n.add(D(5.5,.08,1,I("#F4EEE6"),0,1.04,-1.2)),n.add(D(3.6,.1,.5,I("#F4EEE6"),0,2.1,-3)),n.add(D(3.6,.1,.5,I("#F4EEE6"),0,2.9,-3));let e=je(yn(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new Ge("#FFF0F0","#A07060",1));let t=dt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new yt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};Ne.espacio=n=>{n.background=new Me("#05060E"),Bn(n,2600,200,3),n.add(new Ge("#8FA8FF","#101020",.5));let e=new Qs("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};Ne.aula=n=>{n.fog=new We("#E8DCC8",.02),n.add(ir(16,16,"#C9B89A","#BBA98A",10)),n.add(D(16,5,.3,I("#E8DCC0"),0,2.5,-3.6)),n.add(D(4.4,1.8,.06,I("#2F5A48"),0,2.3,-3.42)),n.add(D(4.6,.1,.2,I("#8E6242"),0,1.36,-3.35));let e=je(Ue(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new Ge("#FFFFFF","#9A8A70",1)),n.add(dt("#FFE8C8",2.2,[-6,8,6],10,40))};Ne.ruaV=(n,e)=>{Nr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&($c(n,60,4),hd(n,260,6,9,40))};Ne.apagon=(n,e)=>{n.fog=new We("#0A0C18",.03),Bt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Bn(n,1800,200,4),ia(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(Gi(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Gi(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new Ge("#5A64A8","#141420",.5)),n.add(dt("#8A9AE0",.7,[-10,20,10],30,90))};Ne.azotea=(n,e)=>{n.background=new Me("#03040A"),n.fog=new We("#060814",.008),Bn(n,4200,200,9),eg(n,e.ang??.45),Ai(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=D(16,.3,12,I("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(D(16,.5,.2,I("#4A4A54"),0,.25,-8)),n.add(D(1.4,1.2,1.4,I("#4A4A54"),4.5,.6,-5)),n.add(new Ge("#6A78C8","#141420",.55)),n.add(dt("#9AAAF0",.6,[-6,10,6],12,40))};Ne.panaderia=n=>{Ne.pasteleria(n);let e=je(yn(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};Ne.metro=n=>{n.background=new Me("#0A0C10"),n.fog=new We("#0C1014",.07);let e=I("#4A4E54",{roughness:.9,side:nn}),t=new $(new Rt(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new de,s=new $(new Rt(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=D(6.4,.1,60,I("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(D(.08,.12,60,I("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(D(2.2,.08,.2,I("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new yt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=nt("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Ge("#8A90A0","#202024",1.1))};Ne.bosque=(n,e)=>{n.fog=new We(e.nieve?"#E8EEF4":"#C8D0B8",.025),Bt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),la(n,e.nieve?"#F2F4F8":"#6E8A48");let t=qe(14);for(let i=0;i<26;i++)fn(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=Gi(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),$c(n,0)}n.add(new Ge("#E9EEFF","#5A6A4A",.95)),n.add(dt("#FFE8C0",2.4,[-10,14,8],18,60))};Ne.rio=(n,e)=>{Ne.parque(n,e);let t=new $(new Oe(60,3.4),new Xe({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};Ne.playa=(n,e)=>{let t=!!e.dusk;n.fog=new We(t?"#F2A880":"#CFE8F0",.006),Bt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=nt(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=la(n,"#E8D4A0"),r=new $(new Oe(800,400),new Xe({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=D(800,.02,.6,I("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new $(new Zs(1.1,0),I("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Ge(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(dt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};Ne.svalbard=n=>{n.fog=new We("#C8D8E8",.02),Bt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),la(n,"#F4F6FA");let e=qe(19);for(let l=0;l<8;l++){let c=new $(new ii(10+e()*12,10+e()*10,7),I("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new $(new Nt(14,32,16,0,Math.PI*2,0,Math.PI/2),I("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=D(3,4.4,6,I("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=D(1.4,2.2,.1,I("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=en(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=nt("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=nt("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new Ge("#D8E8FF","#8A9AB0",1.1)),n.add(dt("#F0F4FF",1.6,[-8,10,8],16,50))};Ne.huerto=(n,e)=>{Ne.parque(n,e),tg(n,0,-1.4)};Ne.biblio=n=>{n.fog=new We("#4A3A2A",.03),n.add(Si(18,14,"#6D4A33")),n.add(D(18,6,.3,I("#5A3E2A"),0,3,-3.4));let e=qe(8);for(let s=0;s<5;s++){n.add(D(14,.06,.4,I("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(D(o,a,.3,I(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Ge("#FFE8C8","#3A2A1C",.7));let t=new yt("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=nt("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};Ne.hotel=n=>{n.fog=new We("#E8D8C0",.02),n.add(Si(18,14,"#8A5A3A")),n.add(D(18,6,.3,I("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(D(2.4,2.6,.05,I("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=je(Ue(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=D(3.2,.6,2.4,I("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(D(3.3,1.4,.2,I("#6A3A2A"),0,.7,-2.8)),$c(n,0);let t=je(Ue(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new Ge("#FFF0E0","#8A6A4A",1)),n.add(dt("#FFE0B0",2,[-4,8,6],10,30))};Ne.selva=n=>{n.fog=new We("#7AA870",.05),Bt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),la(n,"#3E5A2A");let e=qe(23);for(let t=0;t<40;t++)fn(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);hd(n,160,9,12,12,3),n.add(new Ge("#D8F0C8","#2A3A1A",.9)),n.add(dt("#FFF0C0",2.2,[-6,14,4],14,50))};Ne.desierto=n=>{Ne.sabana(n,{})};var Kc=(n,e,t=200,i=200)=>{let s=new $(new Oe(t,i),I(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};function ca(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new de,[u,d,f,g]=s,y=()=>l?new Xe({map:ra(i,3,3),roughness:.95}):I(i,{roughness:.9}),m=u-f/2+e/2,p=e/2-(u+f/2),_=d-g/2,v=t-(d+g/2);h.add(D(m,t,.3,y(),-e/2+m/2,t/2,0)),h.add(D(p,t,.3,y(),e/2-p/2,t/2,0)),h.add(D(f,_,.3,y(),u,_/2,0)),h.add(D(f,v,.3,y(),u,t-v/2,0));let E=I("#F4F0E4");for(let[z,k,X,ee]of[[u-f/2,d,.1,g+.1],[u+f/2,d,.1,g+.1],[u,d+g/2,f+.2,.1],[u,d,.05,g]])h.add(D(X,ee,.36,E,z,k,0));h.add(D(f+.4,.1,.5,E,u,d-g/2-.03,.12));let P=3.2,w=I(o,{roughness:.9});h.add(D(f+3,t,.2,w,u,t/2,-P)),h.add(D(.2,t,P,w,u-f/2-1.4,t/2,-P/2)),h.add(D(.2,t,P,w,u+f/2+1.4,t/2,-P/2)),h.add(D(f+3,.2,P,I("#8A6A4A"),u,_-c,-P/2)),h.add(D(f+3,.2,P,w,u,d+g/2+.5,-P/2));let b=new yt("#FFC880",a?9:2.5,7,1.4);b.position.set(u,d+.6,-1.2),h.add(b);let R=en(f+2.6,t*.6,"#FFD9A0",a?.35:.08);R.position.set(u,d,-P+.12),h.add(R);let S=D(f-.04,g,.06,I("#E8E2D2",{roughness:.8}),u,d,.1);S.castShadow=!1,h.add(S);let M=[];for(let z=0;z<10;z++){let k=D(f-.04,.015,.07,"#B8B0A0",u,0,.11,!1);h.add(k),M.push([k,z])}let C=z=>{let k=Math.max(.001,g*z);S.scale.y=k/g,S.position.y=d+g/2-k/2,S.visible=z>.01,M.forEach(([X,ee])=>{let Z=d+g/2-(ee+.5)*g/10;X.visible=z>.01&&Z>d+g/2-k,X.position.y=Z})};return C(0),h.userData={persiana:C,luz:z=>{b.intensity=z?9:2.5,R.material.emissiveIntensity=z?.35:.08},win:s,lamp:b},h.children.forEach(z=>{z.castShadow=z.castShadow??!0,z.receiveShadow=!0}),h}function Qc(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new de;l.add(D(i,s,r,I(e,{roughness:.9}),0,s/2,-r/2));let c=new $(new Rt(.01,i*.62,2.4,4,1),I(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(D(1.1,2.1,.1,I(o),0,1.05,.02)),l.add(D(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Xe({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[u,d]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(D(1.3,1.2,.06,h(),u,d,.03)),l.add(D(1.5,.1,.2,"#F4F0E4",u,d-.65,.08));return l.add(D(2,.2,1.2,I("#B8AC9D"),0,.1,.6)),l.children.forEach(u=>{u.castShadow=!0,u.receiveShadow=!0}),l}function Jc(n=4){let e=new de,t=qe(n*7);for(let i=0;i<n*3;i++){let s=new $(new Nt(.42+t()*.12,12,10),I(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function ud(n=8,e="#E8E2D2"){let t=new de;for(let i=0;i<=n*4;i++)t.add(D(.1,1.3,.05,I(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(D(n,.08,.06,I(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function ha(){let n=new de,e=qe(4);for(let t=0;t<7;t++){let i=new $(new Nt(.35,12,10),I("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new $(new Nt(.08,10,8),I(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function ng(){let n=new de;n.add(D(2.2,2,1.8,I("#8A6A4A",{roughness:.9}),0,1,0));let e=D(2.6,.12,2.3,I("#5A3E2A"),0,2.12,0);return n.add(e),n.add(D(.8,1.5,.05,I("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function dd(n=.6){let e=D(n,n*.8,n,I("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(D(n*1.01,.06,.15,I("#E8D8A8"),0,n*.4,0)),e}function fd(){let n=new de;n.add(D(.04,1.4,.04,I("#E8667F"),0,.7,0));let e=new $(new Nt(.28,16,12),new Xe({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new $(new gn(.18,.04,8,16,Math.PI*1.2),I("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=nt("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function pd(n=.9,e=1.2){let t=Ue(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new de;i.add(D(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new $(new Oe(n,e),I("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function md(n=.9,e=1.2){let t=Ue(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new de;i.add(D(n+.08,e+.08,.04,"#111",0,0,0));let s=new $(new Oe(n,e),I("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Xt(n="#FFF2C0"){let e=new de,t=D(.07,.07,.26,I("#3A3A44",{metalness:.5}),0,0,0);e.add(t);let i=nt(n,.9,.95);i.position.z=.16,e.add(i);let s=new yt(n,4,4,1.5);return s.position.z=.25,e.add(s),e.userData.on=r=>{i.visible=r>.5,s.intensity=r>.5?4:0},e}var ig=(n,e)=>{Ne.quarto(n,e);let t=pd();t.position.set(-3,2.8,-2.8),n.add(t)};Ne.cuartoYo=(n,e)=>{ig(n,e);let t=ca({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=fd();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=md(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&Bn(n,600,120,2)};Ne.cuartoElla=(n,e)=>{Ne.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(D(2.4,.45,3.2,I("#6B4A33"),1.7,.25,-1.4)),n.add(D(2.3,.3,3,I("#F3EEE4"),1.7,.6,-1.4)),n.add(D(2.38,.22,2,I("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=fd();t.position.set(-3.2,0,-2.2),n.add(t);let i=md();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=ca({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=pd(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&Bn(n,600,120,2)};Ne.entreCasas=(n,e)=>{let t=!!e.night;n.background=new Me(t?"#0A0C1E":"#9FC8E8"),n.fog=new We(t?"#0E1028":"#CFE0EE",.02),Bt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&Bn(n,1600,120,5),Kc(n,t?"#24301E":"#6E9A50");let i=ca({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=ca({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=ud(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Ge(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(dt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};Ne.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new We(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Bt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Kc(n,t?"#24301E":"#6E9A50");let s=D(200,.02,6,I(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=D(200,.1,2,I("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,u,d]of o){let f=Qc({col:u,roof:d,night:t});f.position.set(h,0,-3),n.add(f)}let a=Jc(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Jc(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Jc(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])fn(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));Ai(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new Ge(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(dt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};Ne.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new We(t?"#E8A880":"#F2E2C8",.015),Bt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Kc(n,"#6E9A50");let i=ud(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=ha();s.position.set(1.6,0,-1.2),n.add(s);let r=ha();r.position.set(2.8,0,-2.6),n.add(r);let o=ng();o.position.set(-2.4,0,-3.2),n.add(o);let a=Qc({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=Qc({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])fn(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Ge("#E9EEFF","#6A5A4A",1.05)),n.add(dt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};Ne.esquina=(n,e)=>{Ne.barrio(n,e)};Ne.concurso=n=>{n.background=new Me("#140C24"),n.fog=new We("#1A1030",.03);let e=D(20,.2,12,I("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=nt(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=je(yn(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=D(1.2,1.1,.7,I("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(D(1.3,.1,.8,I("#F2C14E"),0,1.12,-.6)),n.add(new Ge("#B8A8FF","#2A1A3A",.9));let s=new Pn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};Ne.residencia=n=>{n.fog=new We("#E8DCC8",.02),n.add(Si(20,14,"#8A6A4A")),n.add(D(20,4,.3,I("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(D(1,2.2,.08,I("#6B4A33"),-7+e*2,1.1,-3.2));let t=je(yn([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new Ge("#FFFFFF","#9A8A70",1)),n.add(dt("#FFE8C8",2,[-6,8,6],12,40))};var Hr=(n,e,t=200,i=200,s={})=>{let r=new $(new Oe(t,i),I(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Or=(n,e=1.6)=>new Xe({color:n,emissive:n,emissiveIntensity:e});function jc(n=2.6){let e=new de,t=Ue(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=je(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function sg(n,e={}){return Ue(540,1e3,t=>{let i=t.createLinearGradient(0,0,0,1e3);if(i.addColorStop(0,"#2B2F5A"),i.addColorStop(1,"#141830"),t.fillStyle=i,t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:47",270,120),t.fillStyle="#F4F0E4",t.beginPath(),t.roundRect(40,300,460,120+n.length*62,34),t.fill(),t.fillStyle="#E8667F",t.beginPath(),t.arc(100,350,34,0,7),t.fill(),t.fillStyle="#fff",t.font="800 40px Inter",t.fillText("S",100,364),t.textAlign="left",t.fillStyle="#2A2A34",t.font="800 36px Inter",t.fillText("Sara",150,362),t.font="600 38px Inter",n.forEach((s,r)=>t.fillText(s,70,440+r*56)),e.pato){let s=440+n.length*62+40;t.fillStyle="#F4F0E4",t.beginPath(),t.roundRect(300,s-60,170,150,30),t.fill(),t.fillStyle="#F6D44A",t.beginPath(),t.ellipse(395,s+40,50,32,0,0,7),t.fill(),t.beginPath(),t.arc(360,s,28,0,7),t.fill(),t.fillStyle="#F2913A",t.beginPath(),t.ellipse(330,s+6,18,8,0,0,7),t.fill(),t.fillStyle="#1A1A24",t.beginPath(),t.arc(362,s-6,5,0,7),t.fill()}})}function gd(n,e={}){let t=new de;t.add(D(.62,1.18,.06,I("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new $(new Oe(.56,1.04),new at({map:sg(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t}function rg(n="#FFB25A"){let e=new de,t=new $(new Rt(.16,.12,.34,12),Or(n,1.8));e.add(t);let i=nt(n,1,.55);return e.add(i),e}var og=(n,e,t,i=3)=>{let s=qe(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new $(new Nt(.07+s()*.06,10,8),Or(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=D(.02,.12,.02,I("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};Ne.desvan=(n,e)=>{let t=!!e.night;n.background=new Me("#1A120C"),n.fog=new We("#2A1C12",.05),n.add(Si(16,14,"#6A4630"));for(let h of[-1,1]){let u=D(16,.15,7.5,I("#5A3A26",{roughness:.9}),0,0,0);u.position.set(0,3.3,-1.2+h*2.3),u.rotation.x=h*-.62,u.position.y=3.2,u.position.z=h>0?2.4:-4.4,u.rotation.x=h>0?.62:-.62,h<0&&n.add(u)}n.add(D(16,6,.2,I("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let u=D(.22,.22,9,I("#3A2618"),-6+h*2.4,4.4,-1);n.add(u)}let i=qe(6);for(let h=0;h<9;h++){let u=dd(.5+i()*.5);u.position.set(-5+i()*10,0,-3.6+i()*1.2),u.rotation.y=i(),Math.abs(u.position.x)>1.4&&n.add(u)}let s=D(1.4,.8,.7,I("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(D(1.44,.1,.74,I("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=en(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=hs(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new $(new Nt(.09,12,10),Or("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(D(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new yt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Ge("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let u=nt("#FFE8C0",.05,.6);u.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(u),c.push(u)}n.userData.dust=c};Ne.pasillo=(n,e)=>{n.background=new Me("#1A1036"),n.fog=new We("#2A1850",.045),Bn(n,1600,120,7),Hr(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=qe(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let d=0;d<26;d++)for(let f of[-1,1]){let g=-2-d*2.2,y=i[(d*2+(f>0?1:0))%i.length],m=D(.12,2.6,1.3,I("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=D(.08,2.3,1.05,I(y,{roughness:.6}),f*2.35,1.15,g);n.add(p);let _=new $(new Nt(.05,8,6),Or("#F2C14E",.6));_.position.set(f*2.29,1.1,g+.35),n.add(_)}let s=new de,r=new de;r.position.set(0,0,.55),s.add(r);let o=D(.08,2.3,1.05,I("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new $(new Nt(.05,8,6),Or("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=je(yn(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=en(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let d=0;d<14;d++){let f=nt(["#FFB2E0","#B2D8FF","#FFF2B0"][d%3],.25+t()*.3,.7);f.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(f)}n.add(new Ge("#D8C8FF","#4A3070",1));let h=new yt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let u=new yt("#B8C8FF",10,14,1.4);u.position.set(0,3,-12),n.add(u)};Ne.playaSueno=(n,e)=>{n.fog=new We("#E8B8E0",.018),Bt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=nt("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new $(new qn(4,40),new at({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=Hr(n,"#F8EEF2",200,200),r=new $(new Oe(400,200),new Xe({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=D(400,.02,.3,I("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=qe(4);for(let l=0;l<70;l++){let c=nt("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new de;c.add(D(.18,2.8,.18,I("#E8A0C0"),0,1.4,0));let h=nt(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Ge("#FFE0F6","#B88AC8",1.15)),n.add(dt("#FFD8E8",2,[8,14,-6],14,60))};Ne.baile=(n,e)=>{n.background=new Me("#0E0A28"),n.fog=new We("#1A1240",.03),Bn(n,2400,160,3),Bt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),Hr(n,"#3A2A5A");let t=new $(new qn(3.2,48),new Xe({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),og(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=ha();c.position.set(a,0,l),n.add(c)}let i=qe(9),s=[];for(let a=0;a<22;a++){let l=rg(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Ge("#B8A8FF","#2A1A3A",.7));let r=new Pn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new yt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};Ne.estadio=(n,e)=>{n.background=new Me("#0A1020"),n.fog=new We("#18203A",.02),Bn(n,800,160,5);let t=Ue(512,512,h=>{for(let u=0;u<8;u++)h.fillStyle=u%2?"#3E8A3E":"#4A9A46",h.fillRect(0,u*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new $(new Oe(40,40),new Xe({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new de,r=I("#FFFFFF",{roughness:.4});s.add(D(.12,2.4,.12,r,-3.6,1.2,0),D(.12,2.4,.12,r,3.6,1.2,0),D(7.3,.12,.12,r,0,2.4,0));let o=new $(new Oe(7.2,2.4),new at({color:"#FFFFFF",transparent:!0,opacity:.18,side:wt}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(D(60,1,2,I(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=qe(2);for(let h=0;h<4;h++)for(let u=0;u<48;u++)a.push([-24+u+l()*.4,1+h*1.1,-14-h*2]);Gc(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let u=nt("#FFFFFF",6,.9);u.position.set(h*16,14,-20),n.add(u)}n.add(new Ge("#D8E0FF","#2A3A2A",1));let c=dt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};Ne.concierto=(n,e)=>{n.background=new Me("#0C0820"),n.fog=new We("#140C2C",.025);let t=D(14,.6,6,I("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),Hr(n,"#140E26").position.y=-.01;let i=en(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=qe(4);for(let l=0;l<9;l++){let c=nt(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=hs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new de;r.add(D(.03,1.4,.03,I("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new $(new Nt(.06,12,10),I("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=nt(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Ge("#B8A8FF","#2A1A3A",.8));let a=new Pn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};Ne.gris=(n,e)=>{n.background=new Me("#1C1E24"),n.fog=new We("#262830",.06),Hr(n,"#4A4C54"),n.add(D(14,7,.2,I("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(D(.2,7,12,I("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(D(.2,7,12,I("#52545C",{roughness:1}),4.2,3.5,0));let t=en(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(D(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(D(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Ge("#A8B0C8","#2A2A30",.6));let i=new Pn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new yt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};Ne.labSueno=(n,e)=>{Ne.lab(n,e),ld(n,-1.4,-1.6,"#4A86C7");let t=new de;t.add(D(.12,1.4,.12,I("#3A3A44"),0,.7,0)),t.add(D(1,.7,.1,I("#20242E"),0,1.7,0));let i=en(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var ua=(n,e,t=200,i=200,s={})=>{let r=new $(new Oe(t,i),I(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},eh=(n,e=1.6)=>new Xe({color:n,emissive:n,emissiveIntensity:e}),ag=(n="#8C8A84",e=3)=>{let t=Ue(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=qe(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=_n,t},us=(n,e,t,i,s,r,o,a=3)=>{let l=ag(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new $(new Un(n,e,t),new Xe({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function Wi(n="#B8B4A8"){let e=new de,t=new $(new Rt(.09,.09,.22,18),I(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new $(new Rt(.092,.092,.12,18,1,!0),new Xe({map:Ue(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function or(){let n=new de;n.add(D(.6,.36,.22,I("#6A4A32",{roughness:.6}),0,.18,0));let e=new $(new qn(.11,20),I("#2A2018"));e.position.set(-.14,.18,.111),n.add(e);let t=en(.2,.08,"#FFC870",.2);t.position.set(.15,.24,.111),n.add(t);for(let i of[.1,.2]){let s=new $(new Rt(.03,.03,.03,12),I("#D8C8A0"));s.rotation.x=Math.PI/2,s.position.set(i,.1,.12),n.add(s)}return n.add(D(.012,.5,.012,I("#AAA",{metalness:.8}),.24,.6,-.05)),n.userData.dial=t,n}function yd(){let n=new de;n.add(D(.16,.34,.07,I("#2A2E2A",{roughness:.6}),0,.17,0)),n.add(D(.025,.22,.025,I("#1A1A1A"),.05,.45,0));let e=new $(new Nt(.018,8,6),eh("#5AE05A",2));return e.position.set(-.04,.31,.036),n.add(e),n.add(D(.11,.1,.01,I("#555"),0,.2,.036)),n.userData.led=e,n}function Ed(){let n=new de;for(let e=0;e<4;e++){let t=D(.12,.01,.17,I(e===3?"#C9361F":"#F4F0E4"),(e-1.5)*.02,.005+e*.011,0);t.rotation.y=e*.2,n.add(t)}return n}function ar(n){let e=new de;e.add(D(.5,.02,.36,I("#5A6A3A"),0,.01,0));let t=Ue(500,360,s=>{s.fillStyle="#F2E8CC",s.fillRect(0,0,500,360),s.strokeStyle="rgba(80,90,150,.35)",s.lineWidth=2;for(let r=40;r<360;r+=28)s.beginPath(),s.moveTo(10,r),s.lineTo(490,r),s.stroke();s.strokeStyle="#B8A888",s.beginPath(),s.moveTo(250,0),s.lineTo(250,360),s.stroke(),n&&n(s)}),i=new $(new Oe(.48,.34),new Xe({map:t,roughness:.9}));return i.rotation.x=-Math.PI/2,i.position.y=.022,e.add(i),e}function lg(){let n=new de;n.add(D(1,.8,.6,I("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(D(.3,.3,.02,I("#222"),-.25,.5,.31));let e=new $(new Nt(.04,10,8),eh("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(D(.02,.4,.02,I("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function cg(){let n=new de;n.add(D(.36,.5,.08,I("#3A3C3A",{metalness:.5}),0,0,0));let e=new de;e.position.set(0,0,.06),n.add(e);let t=D(.05,.4,.05,I("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new $(new Nt(.07,14,10),I("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function hg(){let n=new de;n.add(D(8,2.4,2.5,I("#F2B830",{roughness:.5}),0,1.6,0)),n.add(D(8.02,.25,2.52,I("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(D(.85,.7,.02,I("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new $(new Rt(.45,.45,.3,16),I("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=nt("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function vd(n,e,t={}){let i=yn(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return je(i,e,e*(t.h||260)/(t.w||1100))}Ne.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new Me("#0E0F10"),n.fog=new We(t?"#050608":"#2A2A28",t?.08:.045);let s=us(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(us(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(us(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(us(.3,4,10,4.2,2,-.5,"#84827C")),n.add(us(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(D(.25,.3,10,I("#6A6862"),b,3.35,-.5));let r=new de;r.add(D(2,.2,.3,I("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),D(.2,2.6,.3,I("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),D(.2,2.6,.3,I("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new de;o.position.set(-.85,0,-3.3),n.add(o);let a=I("#6E7670",{metalness:.7,roughness:.35}),l=D(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(D(1.6,.08,.04,I("#5A605C",{metalness:.7}),.85,b,.1));let c=new $(new gn(.26,.035,8,28),I("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let R=D(.5,.03,.03,I("#B8241A"),.85,1.25,.14);R.rotation.z=b*Math.PI/3,o.add(R)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=cg();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let u=je(yn(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);u.position.set(1.55,1.82,-3.38),n.add(u);let d=b=>{let R=new de,S=I("#4A5450",{metalness:.6,roughness:.4});for(let M of[-.45,.45])for(let C of[-1,1])R.add(D(.06,2.3,.06,S,M,1.15,C));for(let M of[.45,1.6])R.add(D(.96,.06,2.1,S,0,M,0)),R.add(D(.86,.14,1.96,I("#7A8A6A",{roughness:1}),0,M+.1,0)),R.add(D(.5,.1,.3,I("#D8D2C0"),0,M+.21,-.8));return R.position.set(b,0,-1.1),R};n.add(d(-3.3)),n.add(d(3.3));let f=new de;for(let b of[.9,1.5])f.add(D(1.4,.05,.35,I("#5A4A3A"),0,b,0));for(let b of[-.7,.7])f.add(D(.05,1.6,.35,I("#5A4A3A"),b,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let b=0;b<6;b++){let R=Wi();R.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),f.parent.add(R),g.push(R)}n.userData.cans=g;let y=lg();y.position.set(2.6,0,-3),n.add(y),n.userData.gen=y.userData.led;let m=new de;m.add(D(.06,.7,.9,I("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(D(.08,.04,.8,I("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(D(1.4,.06,.8,I("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let R of[-.32,.32])n.add(D(.05,.75,.05,I("#3A2E22"),b,.375,.3+R))}if(e.museo){let b=vd(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let p=je(Ue(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let _=[];for(let b of[-1.6,1.6]){let R=new $(new Nt(.09,12,10),eh("#FFD089",t?0:2.2));R.position.set(b,3.1,-.6),n.add(R),_.push(R),n.add(D(.22,.02,.22,I("#333"),b,3.2,-.6,!1))}let v=[];if(!t)for(let b of[-1.6,1.6]){let R=new yt("#FFC27A",11,10,1.4);R.position.set(b,2.9,-.4),R.castShadow=b<0,n.add(R),v.push(R)}let E=new Ge(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(E),n.userData.lights=v,n.userData.bulbs=_,n.userData.hemi=E,i){let b=en(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let R=hs(2.2,8,"#FFE8B8",.3);R.position.set(0,1.4,-.6),R.rotation.set(-1.25,0,0),n.add(R);let S=new Pn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,R,S]}let P=qe(5),w=[];for(let b=0;b<26;b++){let R=nt("#FFE8C0",.04,t?.2:.5);R.position.set((P()-.5)*6,.5+P()*2.6,-3+P()*4),n.add(R),w.push(R)}n.userData.dust=w};Ne.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new We(t?"#1A1E28":"#C8D0B8",t?.045:.022),Bt(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ua(n,t?"#2A3A24":"#6E8A48");let i=qe(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||fn(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new $(new Nt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),I(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(us(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(D(1.5,2,.1,I("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=vd(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=hg();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new Ge("#6A7A9A","#1A1E1A",.75));let a=new Ge("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=dt("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new at({color:"#AFC4E8",transparent:!0,opacity:.45});for(let u=0;u<260;u++){let d=new $(new Un(.012,.45,.012),h);d.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(d),c.push(d)}n.userData.rain=u=>c.forEach(d=>{let[f,g,y,m]=d.userData.p;d.position.set(f+(u*1.2+m)%1*-.3,7-(g+u*14)%8,y),d.rotation.z=.12})}else n.add(new Ge("#E9EEFF","#5A6A4A",.95)),n.add(dt("#FFD29A",2.6,[-12,16,10],16,70))};Ne.puente=(n,e)=>{let t=!!e.normal;n.fog=new We("#C8D8E0",t?.02:.012),Bt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new Ge("#E9EEFF","#5A6A4A",1)),n.add(dt("#FFE2B0",2.6,[-10,18,12],16,80));let i=qe(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){ua(n,"#6E8A48");let l=new $(new Oe(3.4,60),I("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(D(1.4,.14,5,I("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(D(.08,.5,5,I("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(D(.1,.6,.1,I("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)fn(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=us(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),ua(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let u=0;u<8;u++)fn(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,u+(l>0?9:0))}let r=new $(new Oe(14,200),new Xe({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new $(new Zs(1.5+i()*2),I("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=I("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=D(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let u=0;u<=24;u++){let d=-6+u*.5;c.push(new F(d,o(d)+1,l*.55))}let h=new $(new Ir(new Ys(c),60,.025,6),I("#C8B088"));n.add(h);for(let u=0;u<=24;u+=2){let d=-6+u*.5;n.add(D(.015,1,.015,I("#C8B088"),d,o(d)+.5,l*.55))}for(let u of[-6.1,6.1])n.add(D(.18,1.6,.18,I("#6A4630"),u,.8,l*.55))}n.userData.y=0};Ne.marte=(n,e)=>{n.background=new Me("#10141A"),n.fog=new We("#1A2028",.05);let t=new $(new Rt(2.4,2.4,30,28,1,!0),new Xe({color:"#C8CCD0",side:nn,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(D(3.6,.1,30,I("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new $(new gn(2.38,.05,6,28),I("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=en(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(D(.6,.5,1.8,I("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(D(.05,.6,.5,I("#2A3A4A"),r*1.75,1.6,-o*3));let a=en(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=je(yn(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new Ge("#E8F0FF","#4A505A",.9));let s=new yt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};Ne.biosfera=(n,e)=>{n.fog=new We("#F2D8B0",.012),Bt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),ua(n,"#D8B07A");let t=qe(31);for(let l=0;l<8;l++){let c=new $(new ii(8+t()*8,6+t()*6,6),I("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new de;c.add(D(.3,1.6+t(),.3,I("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Xe({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:wt}),s=new at({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let u=new ii(l,l*1.1,4,4);for(let d of[i,s]){let f=new $(u,d);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new Nt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new $(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)fn(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=je(yn(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new Ge("#FFF0DC","#B08A6A",1.05)),n.add(dt("#FFD29A",3,[-14,16,10],20,70))};Ne.noria=(n,e)=>{Ne.parque(n,{dusk:!0});let t=new de,i=I("#E8E2D2",{metalness:.4,roughness:.4}),s=new $(new gn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=D(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new de;c.add(D(.7,.6,.6,I(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=nt("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=D(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var cr=[],ug=999,Md=n=>n+1<Br.length?Br[n+1]:ug,th=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Ad=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[th(i,s,t),s,th(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,th(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},le=(n,e)=>{let t=Br[n],i=Md(n),s=Math.min(i,646.4)-t;cr.push([(r,o)=>qc(r,o,Ad(e(s,t),s)),t,i])},dg=(n,e,t)=>{let i=Math.min(e,646.4)-n;cr.push([(s,r)=>qc(s,r,Ad(t(i,n),i)),n,e])},fa=(n,e,t)=>{let i=Br[n],s=Md(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=Yc(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>dg(r[l],r[l+1],a))},ds=n=>({tipo:"humano",...n}),Ae=(n={})=>ds({glow:.1,...n});var nh=(n={})=>ds({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n});var H=(n,e,t=0)=>Yc(e,n+t)-n,ue=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=je(yn(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},ae=(n,e,t,i,s={})=>ue(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s});var O=(n,e,t,i=1e9,s)=>{let r=ve(t,t+.2,e)*(1-ve(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&Nn(n,s)},lr=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]});var fg=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),Sd=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),kr=n=>n.pose({armL:[12,8],armR:[95,0]});var ri=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},st=n=>{n.pose({armL:[8,6],armR:[8,6]}),ri(n)},da=(n,e,t=1)=>{let i=Math.sin(e*7);n.pose({armL:[40+i*30*t,40],armR:[120,100],lean:i*8*t,bob:Math.abs(Math.cos(e*7))*.06*t,legL:[i*10,0],legR:[-i*10,0],head:i*6})},Gr=n=>{let e=new F;return n.arms.R.hand.getWorldPosition(e),e},Xi=n=>{let e=[-1,1].map(t=>{let i=nt("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},pa=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=je(si(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),Nn(a,r)})},xd=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=nt(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},pg=n=>{let e=[0,1,2].map(()=>{let t=je(si("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),Nn(o,s)})},mg={exposure:.95,bloom:.45};var Re=(n={})=>ds({outfit:"roxo",hair:"bob",hairc:"#3A1E14",lash:!0,glow:.1,...n}),Vr=(n={})=>ds({outfit:"verde",hair:"old",hairc:"#B8B0A0",glasses:!0,glow:0,...n}),gg=(n={})=>ds({outfit:"azul",hair:"bun",hairc:"#5A3A2A",lash:!0,glasses:!0,glow:0,...n}),_d=(n={})=>ds({outfit:"laranja",glow:0,...n}),Et=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return ds({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},we=(n={})=>({amb:"bunker",ambo:n}),At={exposure:1,bloom:.28,bloomT:.96,vig:.6},qt=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=je(cd(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var hr=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)},sh=(n,e,t=0)=>{let i=Gr(e);n.position.set(i.x,i.y+t,i.z+.12)},vt=(n,e,t=5,i=7)=>{let s=new yt("#FFD8A0",t,i,1.6);return s.position.set(...e),n.add(s),s},Gt=(n,e)=>{let t=n.userData;(t.lights||[]).forEach(i=>i.intensity=11*e),(t.bulbs||[]).forEach(i=>i.material.emissiveIntensity=2.2*e),t.hemi&&(t.hemi.intensity=.12+.43*e)},zr=(n,e)=>{n.userData.lever.rotation.x=-.5+1.1*e},ih=(n,e=1)=>{n.save(),n.globalAlpha=1,n.strokeStyle="#2A2A34",n.lineWidth=5,n.lineCap="round";let t=[[300,120,300,250],[300,160,360,120],[300,160,250,200],[300,250,270,320],[300,250,330,320]],i=Math.floor(t.length*e);for(let s=0;s<i;s++){let[r,o,a,l]=t[s];n.beginPath(),n.moveTo(r,o),n.lineTo(a,l),n.stroke()}e>.1&&(n.beginPath(),n.arc(300,95,28,0,7),n.stroke(),n.fillStyle="#3A1E14",n.beginPath(),n.arc(300,88,30,Math.PI,0),n.fill()),e>.5&&(n.beginPath(),n.moveTo(288,100),n.lineTo(296,104),n.moveTo(304,104),n.lineTo(312,100),n.stroke(),n.beginPath(),n.arc(300,116,7,Math.PI*1.1,Math.PI*1.9),n.stroke()),e>.7&&(n.fillStyle="#555",n.fillRect(380,90,14,70),n.fillStyle="#D8251A",n.beginPath(),n.arc(370,112,16,0,7),n.fill()),e>.9&&(n.fillStyle="#2A2A34",n.font="700 30px Caveat",n.fillText("\xA1culpable!",120,330)),n.restore()},rh=n=>{n.fillStyle="#2A2A34",n.font="700 30px Caveat",n.fillText("Para pasar las",20,40),n.fillText("noches largas:",20,70),["1. \xBFTu d\xEDa perfecto?","2. ...","7. ...","12. ...","20. ...","?? \xBFQu\xE9 es lo que","nunca te has atrevido","a decir?"].forEach((t,i)=>n.fillText(t,262,40+i*40))};le(0,(n,e)=>{let t=H(e,"doce");return{...we(),fov:30,atores:[Ae({x:0,z:-.6,eyes:[[0,"wide"],[1.4,"lookl"],[2.6,"look"]]})],extra:i=>{Gt(i,.45);let s=ue(i,["12 METROS BAJO TIERRA"],2,[0,2.15,-.3]);return{update:(r,o,a)=>O(s,r,t,99,a)}},c:[[0,2.6,4.6],[0,1.2,-1.2],[0,1.6,2.6],[0,1.2,-.8]],range:2,look:{exposure:.95,vig:.6}}});le(1,(n,e)=>({...we(),fov:30,atores:[Ae({x:.1,z:-2.55,eyes:[[0,"angry"]],pose:(t,i)=>t.pose({armL:[100,30],armR:[100,30],lean:-6+Math.sin(i*14)*3})})],extra:t=>{Gt(t,.45);let i=ue(t,["NO SE ABRE"],1.2,[.2,2.3,-2.4]);return{update:(s,r,o)=>{t.userData.wheel.rotation.z=Math.sin(s*16)*.08,O(i,s,.4,99,o),hr(o,.01,s)}}},c:[[1.6,1.6,1.2],[0,1.3,-3],[1.3,1.5,.8],[0,1.3,-3]],range:1.6,look:{exposure:.95,vig:.6}}));le(2,(n,e)=>{let t=H(e,"lucia"),i=H(e,"gusta"),s;return{...we(),fov:30,atores:[Ae({x:-.7,z:-.2,eyes:[[0,"look"],[i,"heart"]]}),Re({x:1.1,z:-.6,eyes:[[0,"lookl"],[i,"happy"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[30,40]})})],extra:(r,o,a)=>{Gt(r,.45),s=Xi(a[0]);let l=ue(r,["LUC\xCDA"],.9,[1.1,2.35,-.6],{bg:"#8667B0",fg:"#fff"}),c=ae(r,["TE GUSTA DESDE PRIMERO"],2.2,[-.4,2.75,-.4]),h=je(si("\u2665","#E8667F",170),.35,.28);return h.renderOrder=6,r.add(h),{update:(u,d,f)=>{O(l,u,t,99,f),O(c,u,i,99,f),s(ve(i,i+.5,u)),h.visible=u>i,h.position.set(-.7,2.05+u*.4%.4,-.2),h.scale.setScalar(1+Math.abs(Math.sin(u*6))*.3),Nn(h,f)}}},c:[[-2,1.7,3.4],[-.4,1.2,-.4],[.6,1.6,3.4],[.4,1.2,-.4]],range:2.4,look:{exposure:.98,vig:.55}}});le(3,(n,e)=>{let t=H(e,"rebobinemos");return{...we(),fov:32,atores:[Ae({x:-.7,z:-.2,eyes:[[0,"look"],[t,"shut"]],move:i=>[-.7+Math.max(0,i-t)*.5,0,-.2],pose:(i,s)=>s>t?i.walk(-s*2):i.pose({armL:[12,8],armR:[80,120]})}),Re({x:1.1,z:-.6,move:i=>[1.1-Math.max(0,i-t)*.5,0,-.6],pose:(i,s)=>s>t?i.walk(-s*2):i.pose()})],extra:i=>{Gt(i,.45);let s=ue(i,["\xBFC\xD3MO HAS LLEGADO AQU\xCD?"],2.4,[0,2.7,-.4]),r=ue(i,["\u25C0\u25C0 REBOBINEMOS"],1.9,[0,2.7,-.4],{bg:"#FBF7EC",fg:"#C9361F"});return{update:(o,a,l)=>{O(s,o,.1,t-.1,l),O(r,o,t,99,l)}}},c:[[0,1.8,4.6],[0,1.3,-.6],[0,1.7,4.2],[0,1.3,-.6]],range:3,lookFn:i=>i>t?{exposure:1.1,vig:.7,bloom:.5}:{}}});le(4,(n,e)=>{let t=H(e,"museo");return{amb:"bosqueBunker",ambo:{busX:6.5},fov:34,atores:[Ae({x:1.6,z:1,move:i=>[it(4.2,1.4,ve(0,3,i)),0,1],pose:(i,s)=>s<3?i.walk(s):i.pose()}),Re({x:2.4,z:.6,move:i=>[it(5,2.3,ve(0,3.2,i)),0,.6],pose:(i,s)=>s<3.2?i.walk(s+1):i.pose()}),Et(0,{x:3,z:1.5,move:i=>[it(5.6,3.1,ve(.3,3.5,i)),0,1.5],pose:(i,s)=>s<3.5?i.walk(s+2):i.pose()}),Et(1,{x:3.6,z:.3,move:i=>[it(6.2,3.7,ve(.5,3.8,i)),0,.3],pose:(i,s)=>s<3.8?i.walk(s+3):i.pose()}),Vr({x:-1.2,z:-.8,pose:lr})],extra:i=>{let s=ue(i,["EXCURSI\xD3N DEL INSTITUTO"],2.6,[1.2,3.4,-.2]),r=ae(i,["EN MITAD DEL BOSQUE"],2.2,[1.2,3.4,-.2]);return{update:(o,a,l)=>{O(s,o,.2,t-.1,l),O(r,o,t+1.5,99,l)}}},c:[[3,2.4,9],[.6,1.6,-2],[1.2,2.2,7.6],[0,1.8,-2.4]],k:1,range:6,blur:6}});le(5,(n,e)=>{let t=H(e,"hormigon"),i=H(e,"literas"),s=H(e,"puerta"),r=H(e,"coche");return{...we({museo:!0}),fov:34,atores:[Vr({x:-.8,z:.4,pose:(o,a)=>a>s?kr(o):Sd(o,a)}),Ae({x:.6,z:1,eyes:[[0,"look"],[r,"wide"]]}),Re({x:1.4,z:.8,eyes:[[0,"look"]]}),Et(2,{x:-1.8,z:1.2})],extra:o=>{let a=[ae(o,["HORMIG\xD3N"],1.7,[-2.6,2.7,-1.6]),ae(o,["LITERAS DE METAL"],2.2,[2.4,2.5,-1]),ue(o,["PUERTA DE ACERO"],2.2,[0,2.75,-2.6]),ue(o,["PESA M\xC1S QUE UN COCHE"],2.6,[0,2.75,-2.6],{fg:"#FF8A5A"})];return{update:(l,c,h)=>{O(a[0],l,t,99,h),O(a[1],l,i,99,h),O(a[2],l,s,r-.1,h),O(a[3],l,r,99,h)}}},c:[[-1.4,2.2,5.6],[-1,1.4,-1.6],[1.4,2,5.2],[.6,1.4,-1.8]],range:4,blur:6}});le(6,(n,e)=>({...we({museo:!0}),fov:30,atores:[Vr({x:-1.5,z:-1,talk:[[0,2]],pose:(t,i)=>t.pose({armL:[12,8],armR:[150,20],head:Math.sin(i*8)*4})}),Ae({x:.4,z:-.2,eyes:[[0,"lookl"]]}),Re({x:1.2,z:-.4,eyes:[[0,"smug"]]}),Et(3,{x:-.4,z:.2,eyes:[[0,"lookl"]]})],extra:t=>{let i=qt(t,"\xA1NO TOQU\xC9IS NADA!",1.8,[-1.5,2.55,-1],66);return{update:(s,r,o)=>O(i,s,.2,99,o)}},c:[[.6,1.7,4],[-.4,1.4,-.8],[.4,1.7,3.4],[-.5,1.4,-.8]],range:3.4}));le(7,(n,e)=>{let t=H(e,"toca"),i=H(e,"palanca"),s=H(e,"intentas"),r=H(e,"tarde");return{...we({museo:!0}),fov:30,atores:[Re({x:1.35,z:-2.75,eyes:[[0,"smug"],[r,"wide"]],pose:(o,a)=>o.pose({armL:[12,8],armR:[it(20,120,ve(t,t+.5,a)),10]})}),Ae({x:-.6,z:-1.6,eyes:[[0,"look"],[s,"wide"]],move:o=>[it(-1.2,.55,ve(s,r,o)),0,-2.3],pose:(o,a)=>a>s&&a<r?o.walk(a*1.6):o.pose({armL:[12,8],armR:[a>s?100:12,0]})})],extra:o=>{let a=ue(o,["PALANCA ROJA"],1.4,[1.55,2.4,-3],{fg:"#FF6A5A"}),l=ae(o,["LLEGAS TARDE"],1.5,[0,2.7,-2.4]),c=nt("#FF3A2A",.7,0);return c.position.set(1.55,1.85,-3.2),o.add(c),{update:(h,u,d)=>{zr(o,ve(r-.3,r+.1,h)),c.material.opacity=ve(i-.3,i,h)*(.5+.4*Math.sin(h*8)),O(a,h,i,r-.3,d),O(l,h,r,99,d)}}},c:[[2.6,1.8,1],[.8,1.5,-2.9],[2.2,1.7,.6],[.9,1.5,-2.9]],range:1.8}});le(8,(n,e)=>{let t=H(e,"clonc"),i=H(e,"bloqueada");return{...we({open:!0,museo:!0}),fov:32,atores:[Ae({x:-.5,z:-.4,eyes:[[0,"look"],[t,"wide"]]}),Re({x:.6,z:-.6,eyes:[[0,"wide"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[40,70]})})],extra:s=>{let r=ue(s,["\xA1CLONC!"],1.6,[0,2.8,-2.6],{size:100,bg:"#C9361F",fg:"#fff"}),o=ae(s,["BLOQUEADA"],1.5,[0,2.35,-2.6]),a=s.userData.sunObjs;return{update:(l,c,h)=>{let u=ve(0,t,l);s.userData.door.rotation.y=-1.45*(1-u*u),a[0].material.emissiveIntensity=3.2*(1-u),a[2].intensity=60*(1-u),a[1].visible=u<.95,O(r,l,t,i,h),O(o,l,i,99,h),hr(h,l>t&&l<t+.5?.04:0,l)}}},c:[[0,1.6,4.2],[0,1.3,-2.8],[0,1.6,3.6],[0,1.3,-2.8]],range:3}});le(9,(n,e)=>{let t=H(e,"grupo"),i=H(e,"nadie");return{amb:"bosqueBunker",ambo:{storm:!0},fov:34,atores:[],extra:s=>{let r=ue(s,["NADIE SE HA DADO CUENTA"],3.4,[-1,3,-1]),o=ae(s,["TORMENTA: SIN LUZ"],2.8,[-1,3,-1]);return{update:(a,l,c)=>{s.userData.rain(a);let h=Math.max(0,Math.sin(a*2.3)**40,Math.sin(a*1.1+2)**60);s.userData.flash.intensity=h*2.2,s.userData.bus.position.x=it(6.5,-22,ve(t+.5,t+6,a)),O(o,a,.3,i-.2,c),O(r,a,i,99,c)}}},c:[[3,2.6,9],[0,1.8,-3],[-1,2.4,8],[-1,1.8,-3]],k:1,range:9,blur:3,look:{exposure:1.05,bloom:.5,vig:.55}}});le(10,(n,e)=>{let t=H(e,"electrico"),i=H(e,"hasta");return{...we(),fov:28,atores:[Ae({x:-.6,z:-.35,eyes:[[0,"down"]]}),Re({x:.6,z:-.35,eyes:[[0,"down"],[i,"wide"]]})],extra:s=>{Gt(s,.45);let r=yd();r.position.set(0,.78,.35),r.scale.setScalar(1.6),s.add(r);let o=[0,1,2].map(()=>{let c=new $(new gn(.2,.012,6,30,Math.PI*.6),new at({color:"#7FD08A",transparent:!0}));return c.rotation.z=Math.PI*.2,s.add(c),c}),a=ue(s,["CERROJO EL\xC9CTRICO"],1.6,[0,2.15,.1]),l=ae(s,["SIN CORRIENTE, NO SE ABRE"],1.9,[0,2.15,.1]);return{update:(c,h,u)=>{r.userData.led.material.emissiveIntensity=1+2*Math.abs(Math.sin(c*7)),o.forEach((d,f)=>{let g=(c*.9+f/3)%1;d.position.set(0,1.5,.35),d.scale.setScalar(.6+g*1.6),d.material.opacity=1-g}),O(a,c,t,i-.1,u),O(l,c,i,99,u)}}},c:[[0,1.9,3],[0,1.2,.3],[.3,1.7,2.4],[0,1.2,.3]],range:1.6}});le(11,(n,e)=>{let t=H(e,"manana");return{...we(),fov:30,atores:[Ae({x:-.6,z:-.2,eyes:[[0,"look"],[t,"wide"]]}),Re({x:.6,z:-.2,eyes:[[0,"look"],[t,"wide"]]})],extra:i=>{Gt(i,.45);let s=rr(.8,7);s.position.set(0,2.2,-1),i.add(s);let r=ue(i,["MA\xD1ANA POR LA MA\xD1ANA"],2.3,[0,2.95,-1]);return{update:(o,a,l)=>{s.set(it(7,31,ve(t,t+1.5,o))%12||12),s.visible=o>t-.3,O(r,o,t,99,l)}}},c:[[0,1.7,4],[0,1.6,-.6],[0,1.7,3.4],[0,1.7,-.6]],range:2.6}});le(12,(n,e)=>{let t=H(e,"tu"),i=H(e,"ella"),s=H(e,"bunker");return{...we(),fov:32,atores:[Ae({x:-.8,z:-.3}),Re({x:.8,z:-.3})],extra:r=>{Gt(r,.35);let o=new Pn("#FFF2D8",0,8,.3,.5,1);o.position.set(-.8,3.3,1),o.target.position.set(-.8,0,-.3);let a=new Pn("#FFF2D8",0,8,.3,.5,1);a.position.set(.8,3.3,1),a.target.position.set(.8,0,-.3),r.add(o,o.target,a,a.target);let l=[ue(r,["UNA NOCHE ENTERA"],2,[0,2.8,-.4]),ae(r,["T\xDA"],.8,[-.8,2.15,-.3],{size:100,w:360}),ae(r,["ELLA"],1,[.8,2.15,-.3],{size:100,w:460}),ue(r,["Y UN B\xDANKER"],1.5,[0,2.8,-.4])];return{update:(c,h,u)=>{o.intensity=30*ve(t,t+.2,c),a.intensity=30*ve(i,i+.2,c),O(l[0],c,0,t-.1,u),O(l[1],c,t,99,u),O(l[2],c,i,99,u),O(l[3],c,s,99,u)}}},c:[[0,1.6,3],[0,1.5,-.4],[0,2,4.6],[0,1.6,-.8]],range:3}});le(13,(n,e)=>{let t=H(e,"suscribete"),i=H(e,"campanita"),s=H(e,"asi");return{...we(),fov:32,atores:[Ae({x:-1.7,z:.2,eyes:[[0,"happy"]],pose:(r,o)=>o<t?lr(r,o):kr(r)}),Re({x:-2.5,z:-.2,eyes:[[0,"happy"]],pose:lr})],extra:r=>{Gt(r,.6);let o=jc(2.8);o.position.set(.8,2,-.2),r.add(o);let a=ue(r,["\xA1NO TE PIERDAS LA PR\xD3XIMA!"],2.4,[.6,.95,.1]),l=xd(r,14,"#FFE27A");return{update:(c,h,u)=>{let d=ve(t-.3,t,c);o.scale.setScalar(Math.max(.01,d*(1+.06*Math.sin(c*8)*(c>t+1?1:0)))),o.rotation.z=c>i&&c<i+1.4?Math.sin(c*40)*.06:0,l(c,[.8,2,-.1,1.2],ve(i,i+.2,c)),O(a,c,s,99)}}},c:[[0,1.7,5],[-.2,1.6,-.2],[0,1.7,4.6],[-.2,1.6,-.2]],range:6,blur:4}});le(14,(n,e)=>({...we(),fov:32,atores:[Ae({x:-.6,z:0,eyes:[[0,"smug"]]}),Re({x:.6,z:-.1,eyes:[[0,"look"]]})],extra:t=>{Gt(t,.45);let i=ue(t,["NOCHE EN EL B\xDANKER"],2.2,[0,2.8,-.4],{bg:"#C9361F",fg:"#fff"}),s=rr(.55,9);return s.position.set(0,2.15,-1),t.add(s),{update:(r,o,a)=>{O(i,r,.3,99,a),s.set(9+r*.4)}}},c:[[0,2,5.2],[0,1.4,-.6],[0,1.7,4],[0,1.4,-.6]],range:3}));le(15,(n,e)=>{let t=H(e,"empujas"),i=H(e,"nada"),s=H(e,"lucia"),r=H(e,"nada",i+.3),o=(a,l)=>a.pose({armL:[95,20],armR:[95,20],lean:-10+Math.sin(l*12)*2});return{...we(),fov:32,atores:[Ae({x:-.35,z:-2.55,eyes:[[0,"angry"],[i,"flat"]],move:a=>[-.35,0,it(-1,-2.55,ve(0,t,a))],pose:(a,l)=>l<t?a.walk(l):o(a,l)}),Re({x:.45,z:-2.55,eyes:[[0,"look"],[s,"angry"],[r,"flat"]],move:a=>[.45,0,it(-.4,-2.55,ve(s,s+1.2,a))],pose:(a,l)=>l<s+1.2?l>s?a.walk(l):a.pose():o(a,l)})],extra:a=>{Gt(a,.45);let l=ue(a,["PLAN A: SALIR"],1.6,[0,2.85,-2.4]),c=ae(a,["NADA"],.9,[-.8,2.6,-2.4],{size:90}),h=ae(a,["NADA"],.9,[.8,2.6,-2.4],{size:90});return{update:(u,d,f)=>{O(l,u,.2,i-.2,f),O(c,u,i,99,f),O(h,u,r,99,f)}}},c:[[2.4,1.7,1.6],[0,1.3,-2.8],[1.8,1.6,1],[0,1.3,-2.8]],range:2}});le(16,(n,e)=>{let t=H(e,"cuarenta"),i=H(e,"nada");return{...we(),fov:28,atores:[Re({x:1.35,z:-2.75,eyes:[[0,"angry"],[i,"flat"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[100+Math.sin(r*12)*25,10]})}),Ae({x:.4,z:-2.3,eyes:[[0,"look"],[i,"flat"]]})],extra:s=>{Gt(s,.45);let r=ue(s,["\xD7 0"],.8,[.9,2.1,-2.8],{size:90}),o=-1,a=ae(s,["NADA"],.8,[.6,2.2,-2.6],{size:90});return{update:(l,c,h)=>{zr(s,.5+.5*Math.sin(l*12));let u=Math.min(40,Math.floor(l*7.5));u!==o&&l<i&&(o=u,r.material.map.dispose(),r.material.map=yn(["\xD7 "+u],{bg:"#2A2A34",fg:"#F2C14E",size:90,w:720,h:150})),O(r,l,.2,i-.1,h),O(a,l,i,99,h)}}},c:[[2.4,1.7,-.2],[1.3,1.5,-3],[2.1,1.6,-.6],[1.3,1.5,-3]],range:1.6}});le(17,(n,e)=>{let t=H(e,"litera"),i=H(e,"metes"),s=H(e,"gato"),r=H(e,"delgado");return{...we(),fov:32,atores:[Ae({x:-3.3,z:-1.1,eyes:[[0,"look"],[i,"wide"]],move:o=>o<t?[it(-1.6,-3,ve(0,t,o)),0,-.3]:[it(-3,-3.55,ve(t,i,o)),it(0,1.25,ve(t,t+1,o)),it(-.3,-1.1,ve(t,i,o))],pose:(o,a)=>a<t?o.walk(a):o.pose({armL:[160,20],armR:[160,20],lean:a>i?25:0})}),{tipo:"gato",x:-2.2,z:-.9,y:2,s:.55}],extra:(o,a,l)=>{Gt(o,.45);let c=ue(o,["CONDUCTO DE VENTILACI\xD3N"],2.3,[-2.2,3.1,-.6]),h=ae(o,["CABE UN GATO"],1.8,[-1.4,2.7,-.8]),u=ae(o,["UN GATO DELGADO"],2,[-1.4,2.7,-.8]),d=nt("#FFF2C0",.9,0);return d.position.set(-3.9,2.75,-1.1),o.add(d),{update:(f,g,y)=>{d.material.opacity=.6*ve(0,1,f),O(c,f,.2,s-.1,y),l[1].root.visible=f>s,l[1].root.scale.set(.55*(f>r?.45:1),.55,.55),O(h,f,s,r-.05,y),O(u,f,r,99,y)}}},c:[[.4,2,3],[-2.8,2,-1],[-.2,2.3,2.2],[-3,2.3,-1.1]],range:4}});le(18,(n,e)=>{let t=H(e,"hay"),i=H(e,"estornudo"),s=H(e,"retumba");return{...we(),fov:32,atores:[Ae({x:-3.55,z:-1.1,y:1.25,eyes:[[0,"flat"],[i,"shut"]],pose:(r,o)=>r.pose({armL:[160,20],armR:[160,20],lean:25-(o>i?20*Math.max(0,1-(o-i)*2):0)})}),Re({x:-2,z:-.2,eyes:[[0,"lookl"],[i,"wide"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[40,60],head:-8})})],extra:r=>{Gt(r,.45);let o=qt(r,"\xBFY?",.8,[-1.6,2.4,-.2],90),a=qt(r,"HAY MUCHO POLVO",1.6,[-2.6,3,-.6],62),l=ue(r,["\xA1ACH\xCDS!"],1.5,[-2.2,2.9,-.4],{size:100,bg:"#F2C14E",fg:"#2A2A34"}),c=[],h=qe(4);for(let u=0;u<40;u++){let d=nt("#D8D0C0",.2+h()*.3,0);d.userData.v=[h()*2+.5,(h()-.5)*2,(h()-.2)*2],r.add(d),c.push(d)}return{update:(u,d,f)=>{O(o,u,.1,t-.1,f),O(a,u,t,i-.1,f),O(l,u,i,99,f);let g=Math.max(0,u-i);c.forEach(y=>{let[m,p,_]=y.userData.v;y.position.set(-3.7+m*g,2.6+p*g*.5,-1.1+_*g*.6),y.material.opacity=u>i?Math.max(0,.7-g*.25):0}),hr(f,u>i&&u<s+1.2?.05*Math.max(0,1-(u-i)*.5):0,u)}}},c:[[.6,1.9,3.2],[-2.4,1.8,-.8],[.2,1.9,2.8],[-2.4,1.8,-.8]],range:3}});le(19,(n,e)=>{let t=H(e,"silencio"),i=H(e,"pared");return{...we(),fov:34,atores:[Re({x:-3.2,z:-.7,y:.22,eyes:[[0,"flat"],[i,"lookl"]],pose:st}),Ae({x:3.2,z:-.7,y:.22,eyes:[[0,"flat"],[i,"look"]],pose:st})],extra:s=>{Gt(s,.45);let r=ue(s,["1\xAA HORA"],1.6,[0,2.75,-1.2],{size:100,w:600}),o=ae(s,["SILENCIO\u2026"],2,[0,2.2,-1.2],{size:100,w:800}),a=rr(.6,10);return a.position.set(0,1.6,-3.35),s.add(a),{update:(l,c,h)=>{O(r,l,.1,99,h),O(o,l,t,99,h),a.set(10+l/12)}}},c:[[0,1.8,6.4],[0,1.2,-1],[0,1.6,4.6],[0,1.2,-1]],range:4,blur:6}});le(20,(n,e)=>{let t=H(e,"latas"),i=H(e,"radio"),s=H(e,"linterna"),r=H(e,"baraja"),o=H(e,"generador");return{...we(),fov:30,atores:[Ae({x:-.5,z:-.45,eyes:[[0,"down"]],pose:a=>a.pose({armL:[40,50],armR:[40,50]})}),Re({x:.6,z:-.45,eyes:[[0,"down"],[t+2,"smug"]]})],extra:a=>{Gt(a,.5);let l=[];for(let f=0;f<6;f++){let g=Wi();g.position.set(-.55+f%3*.2,.78,.2+Math.floor(f/3)*.2),a.add(g),l.push(g)}let c=or();c.position.set(.35,.78,.25),c.scale.setScalar(.7),a.add(c);let h=Xt();h.position.set(.25,.83,.55),h.rotation.y=1.2,a.add(h),h.userData.on(0);let u=Ed();u.position.set(.55,.78,.5),a.add(u);let d=[ae(a,["6 LATAS DE JUD\xCDAS \xB7 1987"],1.9,[-.6,1.6,.5]),ae(a,["RADIO (NO FUNCIONA)"],1.6,[.6,1.85,.5]),ae(a,["LINTERNA"],.9,[.2,1.35,.7]),ae(a,["BARAJA SIN ASES"],1.4,[.8,1.55,.7]),ue(a,["GENERADOR: LUZ PARA UNAS HORAS"],2.6,[1.6,2.2,-2.4])];return{update:(f,g,y)=>{l.forEach((m,p)=>m.visible=f>t-.2+p*.1),c.visible=f>i-.2,h.visible=f>s-.2,u.visible=f>r-.2,[t,i,s,r,o].forEach((m,p)=>O(d[p],f,m,p<4?[i,s,r,o,99][p]-.05:99,y)),a.userData.gen.material.emissiveIntensity=f>o?1+2*Math.abs(Math.sin(f*4)):1}}},cam:[[0,[0,2.4,2.4],[0,.9,.3]],[n*.78,[0,2.2,2.2],[0,.9,.3]],[n*.86,[1.2,2.2,2],[1.8,1,-2.4]],[n,[1.2,2.2,1.9],[1.8,1,-2.4]]],f:[[0,2.4],[n*.8,2.4],[n*.86,4.5],[n,4.5]],range:1.6}});le(21,(n,e)=>{let t=H(e,"bueno"),i=H(e,"sera",t+2),s=H(e,"rie"),r=H(e,"frio"),o;return{...we(),fov:30,atores:[Re({x:.5,z:-.2,eyes:[[0,"down"],[t,"smug"],[s,"happy"]],pose:(a,l)=>l>s?a.pose({armL:[60,70],armR:[12,8],bob:Math.abs(Math.sin(l*9))*.03}):a.pose({armL:[60,70],armR:[12,8]})}),Ae({x:-.6,z:-.1,eyes:[[0,"look"],[s+.4,"happy"]],pose:(a,l)=>a.pose({bob:l>s+.4?Math.abs(Math.sin(l*9))*.03:0})})],extra:(a,l,c)=>{let h=Wi();a.add(h);let u=qt(a,["SI NOS MORIMOS, NO SER\xC1","DE HAMBRE\u2026"],2,[.7,2.75,-.2],56),d=qt(a,"\xA1SER\xC1 DE JUD\xCDAS!",1.9,[.7,2.75,-.2],64),f=vt(a,[0,2.4,1.2],0,8);return{update:(g,y,m)=>{Gt(a,.45);let p=Gr(c[0]);h.position.set(p.x-.05,p.y-.12,p.z+.05),O(u,g,t,i-.1,m),O(d,g,i,s+1.5,m),f.intensity=9*ve(r-1,r+.5,g)}}},c:[[-.6,1.6,3.4],[0,1.4,-.2],[0,1.6,2.8],[0,1.4,-.2]],range:2.4,lookFn:a=>({exposure:1+.08*ve(r-1,r+.5,a)})}});le(22,(n,e)=>{let t=H(e,"mil"),i=H(e,"sudan"),s=H(e,"encerrado"),r=H(e,"ella"),o;return{...we(),fov:26,atores:[Ae({x:0,z:0,eyes:[[0,"look"],[t,"wide"],[r,"heart"]],pose:(a,l)=>a.pose({armL:[30,40],armR:[30,40],bob:Math.abs(Math.sin(l*14))*.01})}),Re({x:2.2,z:-1.6,eyes:[[0,"down"]]})],extra:(a,l,c)=>{Gt(a,.45),o=Xi(c[0]);let h=je(si("\u2665","#E8344A",170),.5,.4);h.renderOrder=6,a.add(h);let u=[0,1,2].map(f=>{let g=nt("#9FD8FF",.14,0);return a.add(g),g}),d=[ue(a,["CORAZ\xD3N A MIL"],1.5,[-.9,2.5,-.2],{fg:"#FF6A7A"}),ae(a,["MANOS SUDANDO"],1.5,[.9,2.25,-.2]),ue(a,["\xBFEL B\xDANKER\u2026 O ELLA?"],2,[0,2.85,-.2])];return{update:(f,g,y)=>{let m=1+.25*Math.abs(Math.sin(f*(f>t?14:5)));h.position.set(-.05,1.25,.2),h.scale.setScalar(f>t-.5?m:.001),Nn(h,y),u.forEach((p,_)=>{let v=(f*.8+_/3)%1;p.position.set(.2+_*.08,1.85-v*.6,.1),p.material.opacity=f>i?Math.sin(v*Math.PI):0}),o(ve(r-.3,r+.3,f)),O(d[0],f,t,s-.1,y),O(d[1],f,i,s-.1,y),O(d[2],f,s,99,y)}}},c:[[0,1.6,2.8],[0,1.45,0],[0,1.6,2.2],[0,1.5,0]],range:1.6}});le(23,n=>({amb:"lab",fov:30,atores:[],extra:e=>{let t=ue(e,["ESO TIENE NOMBRE\u2026"],2.4,[0,1.8,-1]);return{update:(i,s,r)=>O(t,i,0,99,r)}},c:[[0,1.8,3.6],[0,1.8,-1],[0,1.8,3],[0,1.8,-1]],k:1,range:3}));le(24,(n,e)=>{let t=H(e,"puente"),i=H(e,"metros");return{amb:"puente",fov:34,atores:[nh({x:-8,z:1.4,eyes:[[0,"look"]],pose:(s,r)=>r>t?kr(s):s.pose()}),nh({x:-8.8,z:.6,hair:"old",hairc:"#8A7A6A",eyes:[[0,"look"]]}),Et(1,{x:-2,z:0,move:s=>{let r=it(-5.5,1.5,ve(1,n,s));return[r,-.55*(1-(r/6)**2)+.03,0]},eyes:[[0,"wide"]],pose:(s,r)=>{s.walk(r*.7,.6),s.root.rotation.z=Math.sin(r*3)*.06}})],extra:s=>{let r=ue(s,["70 METROS"],1.3,[2.6,-1.5,.8],{fg:"#FF8A5A"}),o=ue(s,["\u2193"],.35,[2.6,-2.2,.8],{size:110,w:200,h:150});return{update:(a,l,c)=>{O(r,a,i,99,c),O(o,a,i,99,c)}}},c:[[-11,2.6,9.5],[-4,.4,0],[-2,1.6,9],[0,-1,0]],k:1,range:9,blur:4}});le(25,(n,e)=>{let t=H(e,"encuesta"),i=H(e,"numero");return{amb:"puente",fov:30,atores:[Et(0,{x:6.9,z:.1,talk:[[0,1.5],[i-.5,i+2.5]],eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[50,60],armR:[r>i?85:12,0]})}),Et(1,{x:5.6,z:.1,move:s=>{let r=it(3.5,5.7,ve(0,1.6,s));return[r,r<6?-.55*(1-(r/6)**2)+.03:0,0]},eyes:[[0,"wide"],[i+.5,"heart"]],pose:(s,r)=>r<1.6?s.walk(r):s.pose({armL:[12,8],armR:[r>i+.4?70:12,0]})})],extra:s=>{let r=D(.24,.32,.02,I("#C9A06A"),7.2,1,.25);s.add(r);let o=ae(s,["SU N\xDAMERO DE TEL\xC9FONO"],1.6,[6.4,2.35,.3]),a=D(.18,.12,.005,I("#FBF7EC"),6.4,1.1,.3,!1);s.add(a);let l=ae(s,["ENCUESTA"],1,[7.2,2.35,.3]);return{update:(c,h,u)=>{O(l,c,t,i-.1,u),O(o,c,i,99,u),a.visible=c>i}}},c:[[4.6,1.8,4.6],[6.4,1.2,0],[5.2,1.7,3.8],[6.4,1.2,0]],k:1,range:4}});le(26,n=>({amb:"puente",ambo:{normal:!0},fov:32,atores:[Et(5,{x:0,z:0,y:.42,move:e=>[0,.42,it(2,-1,e/n)],pose:(e,t)=>e.walk(t)}),Et(0,{x:.6,z:-3.2,eyes:[[0,"happy"]],pose:e=>e.pose({armL:[50,60]})})],extra:e=>{let t=ae(e,["PUENTE NORMAL: BAJITO Y FIRME"],2.6,[0,2.6,-1]);return{update:(i,s,r)=>O(t,i,.2,99,r)}},c:[[4.4,1.8,4.4],[0,.8,-.6],[3.6,1.7,3.6],[0,.8,-.8]],k:1,range:5}));le(27,(n,e)=>{let t=H(e,"mitad"),i=H(e,"tranquilo");return{amb:"lab",fov:30,atores:[],extra:s=>{let r=(h,u)=>{let d=D(1,1,.4,I(u,{emissive:u,emissiveIntensity:.25}),h,0,-1);return s.add(d),d},o=r(-1,"#E8667F"),a=r(1,"#4A86C7"),l=[ae(s,["PUENTE QUE DA MIEDO"],1.8,[-1,.45,-.6],{size:56}),ae(s,["PUENTE TRANQUILO"],1.6,[1,.45,-.6],{size:56}),ue(s,["LA MITAD LLAM\xD3"],1.6,[-1,3.25,-.8]),ue(s,["MUY POCOS"],1.2,[1,1.5,-.8])],c=ue(s,["\xBFEL RESULTADO?"],1.8,[0,3.6,-1]);return{update:(h,u,d)=>{let f=2.4*ve(t-.5,t+.6,h),g=.45*ve(i-.3,i+.5,h);o.scale.y=Math.max(.01,f),o.position.y=.6+f/2,a.scale.y=Math.max(.01,g),a.position.y=.6+g/2,O(l[0],h,.3,99,d),O(l[1],h,.3,99,d),O(c,h,0,t-.5,d),O(l[2],h,t+.4,99,d),O(l[3],h,i+.4,99,d)}}},c:[[0,2,6.6],[0,1.7,-1],[0,1.9,6],[0,1.7,-1]],k:1,range:6}});le(28,(n,e)=>{let t=H(e,"miedo"),i=H(e,"gusta"),s=H(e,"corazon"),r=H(e,"cerebro");return{amb:"lab",fov:30,atores:[Et(1,{x:0,z:0,eyes:[[0,"look"],[t,"wide"],[i,"heart"],[r,"flat"]]})],extra:o=>{let a=je(si("\u2665","#7FA8E8",170),.6,.48),l=je(si("\u2665","#E8667F",170),.6,.48);[a,l].forEach(g=>{g.renderOrder=6,o.add(g)});let c=ae(o,["MIEDO"],.9,[-1.2,1.9,0]),h=ae(o,["ME GUSTA"],1.1,[1.2,1.9,0]),u=ue(o,["LATEN IGUAL"],1.4,[0,2.75,0]),d=ue(o,["EL CEREBRO SE CONFUNDE"],2.4,[0,2.75,0],{fg:"#9FD8FF"}),f=ue(o,["?"],.4,[0,2.15,.1],{size:110,w:200,h:150});return{update:(g,y,m)=>{let p=ve(s-.3,s+.6,g),_=1+.2*Math.abs(Math.sin(g*10));a.position.set(it(-1.2,-.1,p),1.35,.1),l.position.set(it(1.2,.1,p),1.35,.1),a.scale.setScalar(g>t-.2?_:.001),l.scale.setScalar(g>i-.2?_:.001),O(c,g,t,s,m),O(h,g,i,s,m),O(u,g,s,r-.1,m),O(d,g,r,99,m),O(f,g,r+.3,99,m)}}},c:[[0,1.7,4.2],[0,1.5,0],[0,1.6,3.6],[0,1.5,0]],k:1,range:3}});le(29,(n,e)=>{let t=H(e,"puente");return{...we(),fov:32,atores:[Ae({x:-.6,z:-.2,eyes:[[0,"look"]]}),Re({x:.6,z:-.3,eyes:[[0,"lookl"]]})],extra:i=>{Gt(i,.45);let s=ue(i,["B\xDANKER CERRADO ="],1.9,[0,3,-.8]),r=ue(i,["EL PUENTE COLGANTE DEFINITIVO"],2.8,[0,2.55,-.8],{fg:"#FF8A5A"});return{update:(o,a,l)=>{O(s,o,.2,99,l),O(r,o,t,99,l)}}},c:[[0,1.8,5],[0,1.5,-.6],[0,1.7,4],[0,1.5,-.6]],range:3}});le(30,(n,e)=>{let t=H(e,"ruido"),i=H(e,"apaga"),s=H(e,"oscuridad");return{...we(),fov:32,atores:[Ae({x:.6,z:-1.6,eyes:[[0,"look"],[t,"wide"]]}),Re({x:-.3,z:-1.2,eyes:[[0,"look"],[t,"wide"]]})],extra:r=>{let o=ue(r,["2\xAA HORA"],1.1,[1.4,2.9,-2.2]),a=ae(r,["OSCURIDAD TOTAL"],1.8,[.6,2.2,-1.6]),l=ue(r,["\xA1BRRR\u2026!"],1.1,[2.6,1.4,-2.4],{bg:"#FBF7EC",fg:"#2A2A34"});return{update:(c,h,u)=>{let d=c>i-.6&&c<i?Math.sin(c*50)>0?.45:.1:c>=i?0:.45;Gt(r,d),r.userData.gen.material.emissiveIntensity=c<i?2.5:0,O(o,c,.1,t-.1,u),O(l,c,t,i,u),O(a,c,s,99,u),hr(u,c>t&&c<i?.01:0,c)}}},c:[[3.2,1.8,2],[1.4,1.2,-2.2],[2.6,1.7,1.6],[1,1.2,-2]],range:3,lookFn:r=>({exposure:r>i?.7:1,vig:.6})}});le(31,(n,e)=>{let t=H(e,"puedes"),i=H(e,"es");return{...we({dark:!0}),fov:30,atores:[Re({x:-.2,z:-.4,eyes:[[0,"small"],[i,"sad"]]}),Ae({x:1,z:-.2,eyes:[[0,"small"]]})],extra:s=>{vt(s,[.4,2,1.4],1.2,6);let r=qt(s,["OYE\u2026 \xBFPUEDES ENCENDER","LA LINTERNA?"],1.9,[-.3,2.3,-.4],54),o=qt(s,["ES QUE ME DA MIEDO","LA OSCURIDAD"],1.9,[-.3,2.3,-.4],54);return{update:(a,l,c)=>{O(r,a,t-.6,i-.1,c),O(o,a,i,99,c)}}},c:[[.4,1.6,3.2],[.2,1.3,-.4],[.3,1.6,2.6],[.2,1.3,-.4]],range:2,look:At}});le(32,(n,e)=>{let t=H(e,"nunca"),i=H(e,"toco");return{...we({museo:!0}),fov:30,atores:[Re({x:1.35,z:-2.75,eyes:[[0,"smug"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>i?120:20,10]})})],extra:s=>{zr(s,0);let r=ae(s,["NUNCA TIENE MIEDO DE NADA"],2.4,[.8,2.7,-2.6]),o=ue(s,["LA DE LA PALANCA ROJA"],2.2,[.8,2.7,-2.6],{fg:"#FF6A5A"});return{update:(a,l,c)=>{zr(s,ve(i+.3,i+.8,a)),O(r,a,t,i-.1,c),O(o,a,i,99,c)}}},c:[[2.6,1.7,.6],[1,1.4,-2.8],[2.3,1.6,.2],[1.1,1.4,-2.8]],range:2,look:{exposure:1.05,bloom:.5,vig:.7}}});le(33,(n,e)=>{let t=H(e,"alturas");return{...we({dark:!0}),fov:30,atores:[Ae({x:.5,z:-.2,eyes:[[0,"look"],[t-1,"sad"]],pose:i=>i.pose({armL:[12,8],armR:[60,40]})}),Re({x:-.6,z:-.4,eyes:[[0,"small"],[.6,"look"]]})],extra:(i,s,r)=>{let o=Xt();i.add(o);let a=vt(i,[0,1.6,.6],0,6),l=ue(i,["MIEDO A LAS ALTURAS"],1.8,[0,2.25,-.4]);return{update:(c,h,u)=>{sh(o,r[0]),o.rotation.y=Math.PI,o.userData.on(c>.3?1:0),a.intensity=c>.3?4:0,O(l,c,t,99,u)}}},c:[[0,1.6,3.2],[0,1.35,-.3],[0,1.6,2.6],[0,1.35,-.3]],range:2,look:At}});le(34,(n,e)=>{let t=H(e,"estomago");return{amb:"noria",fov:34,atores:[Ae({x:0,z:1,eyes:[[0,"look"],[t-.8,"sad"]],pose:(i,s)=>i.pose({armL:[40,60],armR:[40,60],lean:8})}),Et(2,{x:1.4,z:-1.4,move:i=>[1.4+i*.3,0,-1.4-i*.2],pose:(i,s)=>i.walk(s)}),Et(3,{x:2.2,z:-1,move:i=>[2.2+i*.3,0,-1-i*.2],pose:(i,s)=>i.walk(s+1)})],extra:i=>{let s=ue(i,["LA NORIA \xB7 EL A\xD1O PASADO"],2.4,[0,3,0]),r=qt(i,"\xA1ME DUELE EL EST\xD3MAGO!",2,[-.6,2.35,1],58);return{update:(o,a,l)=>{i.userData.wheel.rotation.z=o*.1,O(s,o,.1,t-.2,l),O(r,o,t-.3,99,l)}}},c:[[-1.5,1.8,6],[.8,2,-1],[-1,1.7,5.2],[.6,1.8,-1]],k:1,range:6,blur:5,look:{exposure:1.05,vig:.65}}});le(35,(n,e)=>{let t=H(e,"era",1.5);return{...we({dark:!0}),fov:30,atores:[Re({x:-.5,z:-.3,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({bob:Math.abs(Math.sin(s*9))*.03})}),Ae({x:.6,z:-.2,eyes:[[0,"smug"],[t,"shut"]],pose:i=>i.pose({armL:[12,8],armR:[60,40]})})],extra:(i,s,r)=>{let o=Xt();i.add(o),vt(i,[0,1.6,.6],4,6);let a=qt(i,["\xBFLO DEL EST\xD3MAGO","ERA MENTIRA?"],1.7,[-.6,2.3,-.3],56),l=ae(i,["ERA MENTIRA"],1.3,[.6,2.2,-.2]);return{update:(c,h,u)=>{sh(o,r[1]),o.rotation.y=Math.PI,o.userData.on(1),O(a,c,.1,t-.1,u),O(l,c,t,99,u)}}},c:[[0,1.6,3.2],[0,1.35,-.3],[0,1.6,2.7],[0,1.35,-.3]],range:2,look:At}});le(36,(n,e)=>{let t=H(e,"cuaderno"),i=H(e,"hace");return{...we({dark:!0}),fov:30,atores:[Ae({x:-.5,z:.9,eyes:[[0,"down"],[t,"wide"]],pose:s=>s.pose({armL:[12,8],armR:[70,40]})}),Re({x:.55,z:1,eyes:[[0,"down"],[t,"wide"]]})],extra:(s,r,o)=>{let a=Xt();s.add(a),vt(s,[0,1.6,1.4],3,6);let l=new de;l.add(D(.7,.25,.5,I("#4A3A2A"),0,0,0)),l.position.set(0,.6,.5),s.add(l);let c=ar();c.position.set(0,.74,.45),s.add(c);let h=nt("#FFE8B0",.8,0);h.position.set(0,.9,.5),s.add(h);let u=ue(s,["CUADERNO DE LOS SOLDADOS"],2.2,[0,2.2,.2]),d=ae(s,["HACE 40 A\xD1OS"],1.3,[0,1.8,.4]);return{update:(f,g,y)=>{sh(a,o[0]),a.rotation.set(-.6,Math.PI,0),a.userData.on(1),l.position.z=.5+.35*ve(.3,1.2,f),c.position.y=.74+.2*ve(t,t+.6,f),c.position.z=.7,h.material.opacity=.5*ve(t,t+.5,f),O(u,f,t,99,y),O(d,f,i,99,y)}}},c:[[0,2,3.6],[0,1.3,.3],[0,1.9,3.1],[0,1.3,.3]],range:2.2,look:At}});le(37,(n,e)=>{let t=H(e,"lista");return{...we({dark:!0}),fov:26,atores:[],extra:i=>{let s=ar(rh);s.position.set(0,.78,.3),s.scale.setScalar(1.6),i.add(s),vt(i,[0,1.6,.8],5,4);let r=ue(i,["\xABPARA PASAR LAS NOCHES LARGAS\xBB"],2,[0,1.6,.1],{size:60,w:1100});return{update:(o,a,l)=>O(r,o,t,99,l)}},c:[[0,2,1.2],[0,.78,.3],[0,1.8,1],[0,.78,.3]],range:1.2,look:At}});le(38,(n,e)=>{let t=H(e,"parejas"),i=H(e,"36"),s=H(e,"45");return{amb:"aula",fov:32,atores:[Et(0,{x:-1.6,z:0,y:-.4,eyes:[[0,"look"]],pose:st}),Et(1,{x:-.7,z:0,y:-.4,eyes:[[0,"lookl"]],pose:st}),Et(3,{x:.7,z:0,y:-.4,eyes:[[0,"look"]],pose:st}),Et(4,{x:1.6,z:0,y:-.4,eyes:[[0,"lookl"]],pose:st}),nh({x:2.8,z:-1.6,eyes:[[0,"look"]]})],extra:r=>{for(let h of[-1.15,1.15])r.add(D(.6,.06,.6,I("#8E6242"),h,.55,.05));let o=ue(r,["36 PREGUNTAS"],1.6,[0,2.6,-.6]),a=rr(.55,0,{});a.position.set(1.8,2.6,-.6),r.add(a);let l=ae(r,["45 MINUTOS"],1.2,[1.8,2,-.6]),c=ae(r,["PAREJAS DE DESCONOCIDOS"],2.2,[0,2.6,-.6]);return{update:(h,u,d)=>{O(c,h,t,i-.1,d),O(o,h,i,99,d),a.visible=h>s,a.set(12+.75*ve(s,s+2,h)),O(l,h,s,99,d)}}},c:[[0,2,5],[0,1.2,-.4],[0,1.9,4.4],[0,1.2,-.4]],range:3}});le(39,(n,e)=>{let t=H(e,"personales"),i=H(e,"amigos");return{amb:"aula",fov:30,atores:[Et(0,{x:-.9,z:0,y:-.4,eyes:[[0,"look"],[t,"happy"]],move:s=>[it(-.9,-.45,ve(t,i,s)),-.4,0],pose:st}),Et(1,{x:.9,z:0,y:-.4,eyes:[[0,"lookl"],[t,"happy"]],move:s=>[it(.9,.45,ve(t,i,s)),-.4,0],pose:st})],extra:s=>{let r=[ae(s,["F\xC1CILES"],1,[0,1.7,-.4]),ae(s,["M\xC1S PERSONALES"],1.6,[0,2.2,-.4]),ue(s,["COMO AMIGOS DE TODA LA VIDA"],2.6,[0,2.75,-.4])],o=je(si("\u2665","#E8667F",170),.35,.28);return o.renderOrder=6,s.add(o),{update:(a,l,c)=>{O(r[0],a,.2,99,c),O(r[1],a,t-.6,99,c),O(r[2],a,i,99,c),o.visible=a>i,o.position.set(0,1.35+Math.sin(a*3)*.05,0),Nn(o,c)}}},c:[[0,1.6,3.6],[0,1.4,-.2],[0,1.6,3],[0,1.5,-.2]],range:2.4}});le(40,(n,e)=>{let t=H(e,"pregunta");return{...we({dark:!0,mesa:!1}),fov:30,atores:[Re({x:-.5,z:-.2,y:-.4,eyes:[[0,"down"],[t,"look"]],pose:i=>{st(i),i.pose({armL:[50,60],armR:[50,60]}),ri(i)}}),Ae({x:.55,z:-.2,y:-.4,eyes:[[0,"look"]],pose:st})],extra:(i,s,r)=>{let o=Xt();o.position.set(0,.12,.4),o.rotation.y=Math.PI*.9,i.add(o),o.userData.on(1),vt(i,[0,1.2,.9],4,5);let a=ar(rh);i.add(a);let l=qt(i,["PREGUNTA 1:","\xBFCU\xC1L SER\xCDA TU D\xCDA PERFECTO?"],2.6,[-.4,2.25,-.2],54);return{update:(c,h,u)=>{let d=Gr(r[0]);a.position.set(d.x+.15,d.y-.05,d.z+.1),a.rotation.x=1,O(l,c,t,99,u)}}},c:[[0,1.4,3.2],[0,.9,-.2],[0,1.4,2.7],[0,.9,-.2]],range:2,look:At}});le(41,(n,e)=>({...we({dark:!0,mesa:!1}),fov:28,atores:[Re({x:-.5,z:-.2,y:-.4,eyes:[[0,"look"],[1.6,"happy"]],pose:st}),Ae({x:.55,z:-.2,y:-.4,eyes:[[0,"smug"]],pose:st})],extra:t=>{let i=Xt();i.position.set(0,.12,.4),i.rotation.y=Math.PI*.9,t.add(i),i.userData.on(1),vt(t,[0,1.2,.9],4,5);let s=qt(t,"HOY NO, DESDE LUEGO",1.9,[.6,1.95,-.2],60);return{update:(r,o,a)=>O(s,r,.3,99,a)}},c:[[.4,1.3,2.8],[.2,.9,-.2],[.3,1.3,2.4],[.2,.9,-.2]],range:2,look:At}));le(42,(n,e)=>{let t=H(e,"lluvia"),i=H(e,"peli");return{...we({dark:!0,mesa:!1}),fov:30,atores:[Re({x:-.5,z:-.2,y:-.4,eyes:[[0,"happy"]],pose:st}),Ae({x:.55,z:-.2,y:-.4,eyes:[[0,"look"]],pose:st})],extra:s=>{let r=Xt();r.position.set(0,.12,.4),r.rotation.y=Math.PI*.9,s.add(r),r.userData.on(1),vt(s,[0,1.2,.9],4,5);let o=Ue(640,400,c=>{c.clearRect(0,0,640,400),c.fillStyle="#FBF7EC",c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(320,170,300,160,0,0,7),c.fill(),c.stroke();for(let[h,u,d]of[[190,350,20],[150,385,11]])c.beginPath(),c.arc(h,u,d,0,7),c.fill(),c.stroke();c.fillStyle="#6A8AB8",c.fillRect(110,70,150,150),c.strokeStyle="#B8D0F0",c.lineWidth=3;for(let h=0;h<14;h++){c.beginPath();let u=120+h*37%140,d=80+h*53%120;c.moveTo(u,d),c.lineTo(u-6,d+22),c.stroke()}c.strokeStyle="#2A2A34",c.lineWidth=6,c.strokeRect(110,70,150,150),c.fillStyle="#2A2A34",c.fillRect(320,90,200,130),c.fillStyle="#F4F4F4",c.beginPath(),c.arc(420,150,34,Math.PI,0),c.lineTo(454,200),c.lineTo(386,200),c.fill(),c.fillStyle="#2A2A34",c.beginPath(),c.arc(408,148,6,0,7),c.arc(432,148,6,0,7),c.fill(),c.fillStyle="#C9361F",c.fillRect(300,240,240,40)}),a=je(o,1.9,1.19,{blend:!0});a.position.set(-.9,2,-.3),a.renderOrder=5,s.add(a);let l=ae(s,["LLUVIA + PELI DE MIEDO"],2,[-.9,2.85,-.3]);return{update:(c,h,u)=>{O(a,c,t-.4,99,u),O(l,c,i,99,u)}}},c:[[-.2,1.5,3.4],[-.4,1.4,-.2],[-.2,1.5,3],[-.4,1.4,-.2]],range:2.4,look:At}});le(43,(n,e)=>{let t=[H(e,"7"),H(e,"12"),H(e,"20")];return{...we({dark:!0,mesa:!1}),fov:32,atores:[Re({x:-.5,z:-.2,y:-.4,eyes:[[0,"look"]],talk:[[0,n]],pose:st}),Ae({x:.55,z:-.2,y:-.4,eyes:[[0,"happy"]],talk:[[1,2]],pose:st})],extra:i=>{let s=Xt();s.position.set(0,.12,.4),s.rotation.y=Math.PI*.9,i.add(s),s.userData.on(1),vt(i,[0,1.2,.9],4,5);let r=["PREGUNTA 7","PREGUNTA 12","PREGUNTA 20"].map((o,a)=>ae(i,[o],1.3,[-1.3+a*1.3,2+a%2*.35,-.6]));return{update:(o,a,l)=>r.forEach((c,h)=>O(c,o,t[h],99,l))}},c:[[0,1.4,3.6],[0,1.2,-.3],[0,1.4,3.2],[0,1.2,-.3]],range:2.4,look:At}});le(44,(n,e)=>{let t=H(e,"biologa"),i=H(e,"perro"),s=H(e,"flequillo");return{...we({dark:!0,mesa:!1}),fov:30,atores:[Re({x:-.5,z:-.2,y:-.4,eyes:[[0,"happy"]],talk:[[0,n]],pose:st}),{tipo:"delfin",x:-1.6,z:-.8,y:1.6,s:.7},{tipo:"perro",x:.4,z:-.9,y:0,s:.55}],extra:(r,o,a)=>{let l=Xt();l.position.set(.3,.12,.4),l.rotation.y=Math.PI*.9,r.add(l),l.userData.on(1),vt(r,[0,1.4,1],5,6);let c=[ae(r,["BI\xD3LOGA MARINA"],1.5,[-1.6,2.2,-.8]),ae(r,["SU PERRO: CALCET\xCDN"],1.7,[.6,1.25,-.6]),ae(r,["SE CORT\xD3 EL FLEQUILLO SOLA"],2.1,[-.4,2.05,-.2])];return{update:(h,u,d)=>{a[1].root.visible=h>t,a[1].root.position.y=1.6+Math.sin(h*3)*.1,a[2].root.visible=h>i,O(c[0],h,t,s-.1,d),O(c[1],h,i,s-.1,d),O(c[2],h,s,99,d)}}},c:[[-.4,1.5,3.6],[-.4,1.2,-.4],[-.4,1.5,3.2],[-.4,1.2,-.4]],range:2.6,look:At}});le(45,(n,e)=>{let t=H(e,"dibujas"),i=H(e,"cuadernos"),s=H(e,"nunca");return{...we({dark:!0,mesa:!1}),fov:30,atores:[Ae({x:.4,z:-.2,y:-.4,eyes:[[0,"down"],[s,"sad"]],talk:[[0,n]],pose:st})],extra:r=>{let o=Xt();o.position.set(-.3,.12,.4),o.rotation.y=Math.PI*1.1,r.add(o),o.userData.on(1),vt(r,[0,1.4,1],5,6);let a=[];for(let c=0;c<7;c++){let h=D(.5,.05,.36,I(["#5A6A3A","#8A3A2A","#3A4F7A","#C9A06A"][c%4]),-.6,.03+c*.055,.3);h.rotation.y=c%3*.15,r.add(h),a.push(h)}let l=[ae(r,["DIBUJAS"],1,[.4,1.9,-.2]),ae(r,["CUADERNOS ENTEROS"],1.7,[-.6,1.35,.2]),ue(r,["NUNCA SE LOS ENSE\xD1AS A NADIE"],2.3,[0,2.15,-.2])];return{update:(c,h,u)=>{a.forEach((d,f)=>d.visible=c>i-.3+f*.08),O(l[0],c,t,99,u),O(l[1],c,i,99,u),O(l[2],c,s,99,u)}}},c:[[0,1.5,3.2],[0,1,-.1],[0,1.4,2.8],[0,1,-.1]],range:2,look:At}});le(46,(n,e)=>{let t=H(e,"linterna"),i=H(e,"dibujas",2),s=H(e,"culpable");return{...we({dark:!0,mesa:!1}),fov:30,atores:[Re({x:-.6,z:-.3,y:-.4,eyes:[[0,"happy"]],pose:st}),Ae({x:.45,z:-.2,y:-.4,eyes:[[0,"down"]],pose:(r,o)=>{r.pose({armL:[40,60],armR:[45+Math.sin(o*10)*6,60]}),ri(r)}})],extra:(r,o,a)=>{let l=Xt();r.add(l),l.userData.on(1),vt(r,[0,1.3,.9],3,5);let c=qt(r,"\xBFME DIBUJAS ALGO?",1.7,[-.7,2.2,-.3],60),h=document.createElement("canvas");h.width=500,h.height=360;let u=h.getContext("2d"),d=new Wn(h);d.colorSpace=Wt;let f=new $(new Oe(1.1,.8),new at({map:d,toneMapped:!1}));f.position.set(.3,1.9,.2),f.renderOrder=6,r.add(f);let g=-1;return{update:(y,m,p)=>{let _=a[1].head.getWorldPosition(new F);l.position.set(_.x+.12,_.y-.1,_.z+.2),l.rotation.set(.9,Math.PI*.95,0),O(c,y,0,t-.2,p);let v=ve(i,s+.2,y);Math.abs(v-g)>.02&&(g=v,u.fillStyle="#F2E8CC",u.fillRect(0,0,500,360),ih(u,v),d.needsUpdate=!0),f.visible=y>i-.2,Nn(f,p)}}},c:[[0,1.5,3.2],[0,1.2,-.2],[.1,1.6,2.6],[.1,1.4,-.1]],range:2,look:At}});le(47,n=>({...we({dark:!0,mesa:!1}),fov:30,atores:[Re({x:-.4,z:-.3,y:-.4,eyes:[[0,"happy"]],pose:(e,t)=>{e.pose({armL:[60,80],armR:[60,80],bob:Math.abs(Math.sin(t*10))*.04}),ri(e)}}),Ae({x:.6,z:-.2,y:-.4,eyes:[[0,"happy"]],pose:st})],extra:e=>{let t=Xt();return e.add(t),t.userData.on(1),vt(e,[0,1.2,.9],2,5),{update:i=>{let s=ve(.6,1.3,i);t.position.set(.5-s*.4,it(1,.06,s*s),.3+s*.3),t.rotation.set(s*6,s*3,s*2)}}},c:[[0,1.4,3],[0,1,-.2],[0,1.3,2.6],[0,.8,0]],range:2,look:At}));le(48,(n,e)=>{let t=H(e,"golpe"),i=H(e,"golpe",t+.3),s=H(e,"tercero"),r=H(e,"chasquido"),o=H(e,"musica"),a=H(e,"antiguas");return{...we({dark:!0}),fov:30,atores:[Re({x:-.3,z:.55,eyes:[[0,"angry"],[o,"happy"]],pose:(l,c)=>{let h=[t,i,s].some(u=>c>u-.15&&c<u+.1);l.pose({armL:[12,8],armR:[h?60:120,20]})}}),Ae({x:.9,z:.7,eyes:[[0,"look"],[o,"wide"]]})],extra:(l,c,h)=>{let u=Xt();u.position.set(-.8,.06,.9),u.rotation.y=.6,l.add(u),u.userData.on(1),vt(l,[0,1.6,1.4],3,6);let d=or();d.position.set(.15,.78,.35),l.add(d);let f=new yt("#FFB25A",0,4,1.5);f.position.set(.15,1.1,.6),l.add(f);let g=pa(l,7),y=[ae(l,["\xA1PAM!"],.8,[0,1.65,.4]),ae(l,["\xA1PAM!"],.8,[.4,1.75,.4]),ue(l,["\xA1CHAS!"],.9,[.2,1.7,.4])],m=ae(l,["CANCIONES DE LA ABUELA"],2,[.2,2.55,.2]);return{update:(p,_,v)=>{let E=p>r;d.userData.dial.material.emissiveIntensity=E?2.5:.2,f.intensity=E?4:0,d.position.y=.78+([t,i,s].some(P=>p>P&&p<P+.15)?.03:0),g(p,new F(.15,1,.35),v,p>o),O(y[0],p,t,t+.6,v),O(y[1],p,i,i+.6,v),O(y[2],p,r,r+.8,v),O(m,p,a,99,v)}}},c:[[0,1.8,3.2],[.1,1.1,.3],[0,1.7,2.6],[.1,1.1,.3]],range:2,look:At}});le(49,n=>({...we({dark:!0}),fov:30,atores:[Re({x:-.4,z:0,eyes:[[0,"smug"]],pose:e=>e.pose({armL:[12,8],armR:[80,10]})}),Ae({x:.7,z:.1,eyes:[[0,"wide"]]})],extra:e=>{let t=or();t.position.set(-1.3,.78,.35),e.add(t),t.userData.dial.material.emissiveIntensity=2.5;let i=new yt("#FFB25A",4,5,1.5);i.position.set(-1,1.2,.8),e.add(i),vt(e,[0,1.8,1.4],3,6);let s=qt(e,"\xBFBAILAS?",1.1,[-.5,2.2,0],80),r=pa(e,5);return{update:(o,a,l)=>{O(s,o,.1,99,l),r(o,new F(-1.3,1,.35),l)}}},c:[[0,1.6,3.4],[0,1.3,0],[0,1.6,2.8],[0,1.3,0]],range:2,look:At}));le(50,(n,e)=>{let t=H(e,"nunca"),i=H(e,"asi"),s=H(e,"fatal"),r=H(e,"chocais");return{...we({dark:!0}),fov:32,atores:[Ae({x:.6,z:0,eyes:[[0,"flat"],[i,"happy"]],move:o=>[it(.6,2.5,ve(r-.6,r,o)),0,it(0,-.6,ve(r-.6,r,o))],pose:(o,a)=>a>i?da(o,a,1.3):o.pose()}),Re({x:-.3,z:0,eyes:[[0,"happy"]],move:o=>[it(-.3,1.6,ve(r-.6,r,o)),0,it(0,-.5,ve(r-.6,r,o))],pose:(o,a)=>a>s?da(o,a+1,1.2):lr(o,a)})],extra:o=>{let a=or();a.position.set(-1.3,.78,.35),o.add(a),a.userData.dial.material.emissiveIntensity=2.5;let l=new yt("#FFB25A",4,6,1.5);l.position.set(-1,1.2,.8),o.add(l),vt(o,[.5,2,1.6],3,7);let c=pa(o,6),h=[ae(o,["NO BAILAS. NUNCA."],1.8,[.6,2.4,-.2]),ue(o,["FATAL"],1,[0,2.7,-.2],{size:100}),ue(o,["\xA1PUM!"],.9,[2.4,2.2,-.8],{bg:"#C9361F",fg:"#fff"})];return{update:(u,d,f)=>{c(u,new F(-1.3,1,.35),f),O(h[0],u,.2,i-.1,f),O(h[1],u,s,r-.1,f),O(h[2],u,r,r+1.4,f),hr(f,u>r&&u<r+.5?.04:0,u)}}},c:[[0,1.8,4.6],[.6,1.3,-.2],[.8,1.8,4.2],[1.2,1.3,-.4]],range:3,look:At}});le(51,(n,e)=>{let t=H(e,"callar");return{...we({dark:!0}),fov:30,atores:[Ae({x:.4,z:0,eyes:[[0,"happy"],[t,"flat"]],pose:(i,s)=>s<t?da(i,s,.6):i.pose()}),Re({x:-.5,z:0,eyes:[[0,"happy"],[t,"flat"]],pose:(i,s)=>s<t?da(i,s+1,.6):i.pose()})],extra:i=>{let s=or();s.position.set(-1.3,.78,.35),i.add(s);let r=new yt("#FFB25A",4,6,1.5);r.position.set(-1,1.2,.8),i.add(r),vt(i,[.5,2,1.6],2.5,6);let o=pa(i,5),a=ae(i,["SILENCIO. PARA SIEMPRE."],2,[0,2.2,-.2]);return{update:(l,c,h)=>{let u=l<t;s.userData.dial.material.emissiveIntensity=u?2.5:0,r.intensity=u?4:0,o(l,new F(-1.3,1,.35),h,u),O(a,l,t+.3,99,h)}}},c:[[0,1.6,3.8],[0,1.3,-.2],[0,1.6,3.2],[0,1.3,-.2]],range:2.4,look:At}});le(52,(n,e)=>({...we({dark:!0,mesa:!1}),fov:32,atores:[Ae({x:.5,z:-.2,y:-.4,eyes:[[0,"flat"]],pose:st}),Re({x:-.5,z:-.3,y:-.4,eyes:[[0,"flat"]],pose:st})],extra:t=>{let i=Xt();i.position.set(0,.06,.6),i.rotation.y=Math.PI*.9,t.add(i),i.userData.on(1),vt(t,[0,1.4,1],3,5);let s=rr(.7,3);s.position.set(0,2,-1),t.add(s);let r=ue(t,["3:00 A. M."],1.2,[0,2.45,-1]);return{update:(o,a,l)=>{O(r,o,.1,99,l),s.set(3+o*.03)}}},c:[[0,1.4,3.6],[0,1.2,-.4],[0,1.4,3.1],[0,1.2,-.4]],range:2.4,look:At}));le(53,(n,e)=>{let t=H(e,"simular");return{amb:"marte",fov:34,atores:[0,1,2,3,4,5].map(i=>Et([1,5,4,7,2,1][i],{hair:null,x:(i%2?1:-1)*.6,z:.6-Math.floor(i/2)*1.6,eyes:[[0,["look","lookl"][i%2]]]})),extra:i=>{let s=ae(i,["SIMULAR UN VIAJE A MARTE"],2.4,[0,2.9,-.8]);return{update:(r,o,a)=>O(s,r,t,99,a)}},c:[[0,1.9,4.6],[0,1.4,-2],[0,1.8,3.6],[0,1.4,-2]],k:1,range:5}});le(54,(n,e)=>{let t=H(e,"comida"),i=H(e,"convivencia"),s=H(e,"cansancio"),r=H(e,"manias"),o=H(e,"enormes");return{amb:"marte",fov:32,atores:[Et(1,{hair:null,x:-.6,z:0,eyes:[[0,"look"],[i,"angry"]],talk:[[r,n]]}),Et(5,{hair:null,x:.6,z:0,eyes:[[0,"lookl"],[i,"angry"]],pose:(a,l)=>a.pose({armL:[12,8],armR:[l>r?50+Math.sin(l*14)*10:12,30]})})],extra:a=>{let l=[ae(a,["NI LA COMIDA, NI EL AIRE"],2.2,[0,2.9,-.6]),ue(a,["LA CONVIVENCIA"],1.7,[0,2.9,-.6],{fg:"#FF8A5A"}),ae(a,["EL CANSANCIO"],1.4,[-1.2,2.3,-.4]),ae(a,["LAS MAN\xCDAS DEL OTRO"],1.8,[1,2.3,-.4])];return{update:(c,h,u)=>{O(l[0],c,t,i-.1,u),O(l[1],c,i,99,u),O(l[2],c,s,99,u),O(l[3],c,r,99,u),c>o&&l[3].scale.setScalar(1+.5*ve(o,o+1,c))}}},c:[[0,1.7,3.6],[0,1.5,-.2],[0,1.7,3],[0,1.5,-.2]],k:1,range:3}});le(55,(n,e)=>{let t=H(e,"frio"),i=H(e,"hambre"),s=H(e,"ninguno");return{...we({dark:!0}),fov:30,atores:[Ae({x:.6,z:-.2,eyes:[[0,"sad"]],pose:(r,o)=>r.pose({armL:[60,90],armR:[60,90],lean:Math.sin(o*30)*1.5})}),Re({x:-.5,z:-.2,eyes:[[0,"sad"]],pose:r=>r.pose({armL:[40,70],armR:[40,70]})})],extra:r=>{let o=Xt();o.position.set(0,.78,.5),o.rotation.y=Math.PI,r.add(o),o.userData.on(1),vt(r,[0,1.6,1.2],3,6);let a=[];for(let c=0;c<3;c++){let h=Wi();h.position.set(-.2+c*.2,.78,.25),r.add(h),a.push(h)}let l=[ae(r,["FR\xCDO"],.8,[.7,2.1,-.2]),ae(r,["HAMBRE"],1,[-.6,2.1,-.2]),ue(r,["\xBFJUD\xCDAS DE 1987? NO, GRACIAS"],2.3,[0,2.45,-.4])];return{update:(c,h,u)=>{O(l[0],c,t,99,u),O(l[1],c,i,99,u),O(l[2],c,s,99,u)}}},c:[[0,1.7,3.6],[0,1.3,-.2],[0,1.7,3],[0,1.3,-.2]],range:2.4,look:At}});le(56,(n,e)=>{let t=H(e,"culpa"),i=H(e,"enfada"),s=H(e,"ya");return{...we({dark:!0}),fov:30,atores:[Ae({x:.6,z:-.2,eyes:[[0,"smug"],[i,"wide"]],talk:[[t-1.5,i]]}),Re({x:-.5,z:-.2,eyes:[[0,"look"],[i,"angry"]],talk:[[s,n]],pose:(r,o)=>r.pose({armL:[o>s?40:12,40],armR:[o>s?40:12,40]})})],extra:r=>{let o=Xt();o.position.set(0,.78,.5),o.rotation.y=Math.PI,r.add(o),o.userData.on(1),vt(r,[0,1.6,1.2],3,6);let a=qt(r,["TODO ES CULPA","DE LA PALANCA ROJA"],1.7,[.7,2.2,-.2],54),l=qt(r,["YA LO S\xC9, \xBFVALE?","NO HACE FALTA QUE ME LO RECUERDES"],2.4,[-.3,2.2,-.2],50);return{update:(c,h,u)=>{O(a,c,t-.6,s-.2,u),O(l,c,s,99,u)}}},c:[[0,1.6,3.4],[0,1.4,-.2],[0,1.6,2.8],[0,1.4,-.2]],range:2.4,look:At}});le(57,n=>({...we({dark:!0}),fov:34,atores:[Re({x:-3.2,z:-.7,y:.22,eyes:[[0,"sad"]],pose:st}),Ae({x:3.2,z:-.7,y:.22,eyes:[[0,"sad"]],pose:st})],extra:e=>{let t=Xt();t.position.set(0,.78,.5),t.rotation.y=Math.PI,e.add(t),t.userData.on(1),vt(e,[0,2,1],3,8);let i=ae(e,["SILENCIO. DEL MALO."],2,[0,2.5,-1]);return{update:(s,r,o)=>O(i,s,.3,99,o)}},c:[[0,1.9,6.4],[0,1.2,-1],[0,1.8,5.8],[0,1.2,-1]],range:4,blur:6,look:At}));le(58,(n,e)=>{let t=H(e,"miedo"),i=H(e,"nadie"),s=H(e,"bunker");return{...we({dark:!0}),fov:28,atores:[Ae({x:2.5,z:.3,y:-.4,eyes:[[0,"sad"]],pose:st})],extra:r=>{vt(r,[2,1.8,1.4],3,6);let o=Ue(640,400,c=>{c.clearRect(0,0,640,400),c.fillStyle="#FBF7EC",c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(320,170,300,160,0,0,7),c.fill(),c.stroke();for(let[h,u,d]of[[450,350,20],[490,385,11]])c.beginPath(),c.arc(h,u,d,0,7),c.fill(),c.stroke();c.fillStyle="#8A7A62",c.fillRect(60,160,120,120),c.fillRect(460,160,120,120),c.strokeStyle="#6A4630",c.lineWidth=6,c.beginPath(),c.moveTo(180,165),c.quadraticCurveTo(320,240,460,165),c.stroke(),c.beginPath(),c.moveTo(180,130),c.quadraticCurveTo(320,205,460,130),c.stroke(),c.fillStyle="#4A8AB0",c.fillRect(180,290,280,20)}),a=je(o,1.6,1,{blend:!0});a.position.set(1.7,1.75,-.2),a.renderOrder=5,r.add(a);let l=[ae(r,["\xBFSOLO SE R\xCDE POR MIEDO?"],1.8,[1.8,2.05,-.2]),ae(r,["\xBFPORQUE NO HAY NADIE M\xC1S?"],1.9,[1.8,2.05,-.2]),ae(r,["\xBFPORQUE ES UN B\xDANKER?"],1.7,[1.8,2.05,-.2])];return{update:(c,h,u)=>{O(a,c,.3,t-.3,u),O(l[0],c,t,i-.05,u),O(l[1],c,i,s-.05,u),O(l[2],c,s,99,u)}}},c:[[1.6,1.4,3.6],[2.1,1.3,-.1],[1.8,1.4,3.1],[2.1,1.3,-.1]],range:2.4,look:At}});le(59,(n,e)=>{let t=H(e,"antes");return{...we({open:!0}),fov:32,atores:[Ae({x:0,z:-1.6,eyes:[[0,"sad"]],move:i=>[it(0,1.8,ve(1,n,i)),0,-1.6],pose:(i,s)=>s>1?i.walk(s):i.pose()}),Re({x:-.3,z:-1.8,eyes:[[0,"flat"]],move:i=>[it(-.3,-2.2,ve(1,n,i)),0,-1.8],pose:(i,s)=>s>1?i.walk(s+1):i.pose()})],extra:i=>{let s=ae(i,["TODO VOLVER\xC1 A SER COMO ANTES"],2.6,[0,2.9,-2]);return{update:(r,o,a)=>O(s,r,t-.8,99,a)}},c:[[0,1.7,3.6],[0,1.3,-2.2],[0,1.7,3.2],[0,1.3,-2.2]],range:3,look:{exposure:1.1,bloom:.7,vig:.75,bloomT:.8}}});le(60,(n,e)=>{let t=H(e,"perdon"),i=H(e,"palanca");return{...we({dark:!0}),fov:30,atores:[Re({x:-3.2,z:-.7,y:.22,eyes:[[0,"sad"],[i+.6,"happy"]],pose:st}),Ae({x:-2.3,z:-.2,eyes:[[0,"sad"],[i,"smug"]],move:s=>[it(1.2,-2.3,ve(0,2.5,s)),s>2.5?-.4*ve(2.5,3,s):0,-.2],pose:(s,r)=>r<2.5?s.walk(r):st(s)})],extra:s=>{let r=Xt();r.position.set(-1.6,.06,.4),r.rotation.y=-.8,s.add(r),r.userData.on(1),vt(s,[-1.6,1.6,1],4,6);let o=[ue(s,["PERD\xD3N"],1,[-2.3,2,-.2]),ae(s,["PALANCA MUY MAL PUESTA"],2,[-2.6,2.6,-.4])];return{update:(a,l,c)=>{O(o[0],a,t,i-.1,c),O(o[1],a,i,99,c)}}},c:[[0,1.8,4],[-1.6,1.1,-.4],[-1,1.6,3.2],[-2.6,1,-.4]],range:3,look:At}});fa(61,["decidis"],[(n,e)=>{let t=H(e,"abris"),i=H(e,"oleis"),s=H(e,"mirais");return{...we({dark:!0,mesa:!1}),fov:28,atores:[Ae({x:.5,z:-.1,y:-.4,eyes:[[0,"look"],[i,"wide"]],pose:st}),Re({x:-.5,z:-.2,y:-.4,eyes:[[0,"look"],[i,"flat"]],pose:st})],extra:r=>{let o=Xt();o.position.set(.5,.06,.8),o.rotation.y=Math.PI*.8,r.add(o),o.userData.on(1),vt(r,[0,1.4,1],4,5);let a=Wi();a.position.set(0,0,.35),a.scale.setScalar(1.5),r.add(a);let l=new $(new Rt(.09,.09,.01,18),I("#C8C4B8",{metalness:.7}));r.add(l);let c=[],h=qe(3);for(let f=0;f<14;f++){let g=nt("#9AD84A",.25+h()*.2,0);g.userData.p=[h()-.5,h(),h()*6],r.add(g),c.push(g)}let u=ue(r,["JUD\xCDAS DE 1987"],1.5,[0,1.9,-.1]),d=ae(r,["\xA1PUAJ!"],.9,[.6,1.6,.2]);return{update:(f,g,y)=>{let m=ve(t,t+.6,f);l.position.set(-.08*m,.34+.1*m,.35),l.rotation.z=m*1.2,c.forEach(p=>{let[_,v,E]=p.userData.p,P=(f*.3+v)%1;p.position.set(_*.4+Math.sin(f+E)*.05,.4+P*1,.35),p.material.opacity=f>i-.3?.5*Math.sin(P*Math.PI):0}),O(u,f,.2,i,y),O(d,f,s,99,y)}}},c:[[0,1.2,2.6],[0,.7,.2],[0,1.2,2.2],[0,.7,.2]],range:1.8,look:At}},(n,e)=>{let t=H(e,"unanimidad"),i=H(e,"volveis");return{...we({dark:!0,mesa:!1}),fov:28,atores:[Ae({x:.5,z:-.1,y:-.4,eyes:[[0,"flat"],[i+.5,"happy"]],pose:s=>{s.pose({armL:[12,8],armR:[100,0]}),ri(s)}}),Re({x:-.5,z:-.2,y:-.4,eyes:[[0,"flat"],[i+.5,"happy"]],pose:s=>{s.pose({armL:[100,0],armR:[12,8]}),ri(s)}})],extra:s=>{let r=Xt();r.position.set(.5,.06,.8),r.rotation.y=Math.PI*.8,s.add(r),r.userData.on(1),vt(s,[0,1.4,1],4,5);let o=Wi();o.position.set(0,0,.35),o.scale.setScalar(1.5),s.add(o);let a=new $(new Rt(.09,.09,.01,18),I("#C8C4B8",{metalness:.7}));s.add(a);let l=ue(s,["POR UNANIMIDAD: MEJOR NO SABER"],2.6,[0,2,-.2]),c=ae(s,["LATA CERRADA"],1.3,[0,1.5,.1]);return{update:(h,u,d)=>{let f=1-ve(i,i+.5,h);a.position.set(-.08*f,.34+.1*f,.35),a.rotation.z=f*1.2,O(l,h,t-.3,i,d),O(c,h,i+.4,99,d)}}},c:[[0,1.3,2.8],[0,.9,0],[0,1.3,2.4],[0,.9,0]],range:2,look:At}}]);le(62,(n,e)=>({...we({dark:!0}),fov:30,atores:[Re({x:-2.9,z:-.6,y:.22,eyes:[[0,"smug"]],pose:t=>{st(t),t.root.rotation.z=-.15}}),Ae({x:-2.2,z:-.1,y:-.4,eyes:[[0,"look"]],pose:st})],extra:t=>{let i=Xt();i.position.set(-1.6,.06,.4),i.rotation.y=-.8,t.add(i),i.userData.on(1),vt(t,[-1.6,1.6,1],4,6);let s=qt(t,["\xBFVAMOS A LA","\xDALTIMA PREGUNTA?"],1.6,[-2.2,2.2,-.3],56);return{update:(r,o,a)=>O(s,r,.2,99,a)}},c:[[-.8,1.6,3],[-2.5,1.3,-.4],[-1,1.5,2.6],[-2.5,1.3,-.4]],range:2.4,look:At}));le(63,(n,e)=>{let t=H(e,"que");return{...we({dark:!0}),fov:26,atores:[],extra:i=>{let s=ar(rh);s.position.set(0,.78,.3),s.scale.setScalar(1.6),i.add(s),vt(i,[0,1.6,.8],5,4);let r=ue(i,["\xBFQU\xC9 ES LO QUE NUNCA TE HAS","ATREVIDO A DECIRLE A ALGUIEN?"],2.2,[0,1.75,.1],{size:60,w:1100,h:230});return{update:(o,a,l)=>O(r,o,t,99,l)}},c:[[0,2,1.3],[.25,.78,.3],[0,1.9,1.1],[.25,.9,.3]],range:1.2,look:At}});fa(64,["y"],[n=>({...we({dark:!0}),fov:30,atores:[Re({x:-2.9,z:-.6,y:.22,eyes:[[0,"look"]],pose:st}),Ae({x:-2.2,z:-.1,y:-.4,eyes:[[0,"look"]],pose:st})],extra:e=>{vt(e,[-1.6,1.6,1],4,6);let t=qt(e,"EMPIEZO YO",1.4,[-2.9,2.5,-.5],64);return{update:(i,s,r)=>O(t,i,.1,99,r)}},c:[[-1.2,1.6,3],[-2.6,1.3,-.4],[-1.3,1.5,2.6],[-2.6,1.3,-.4]],range:2.4,look:At}),(n,e)=>{let t=H(e,"tampoco"),i=H(e,"porque");return{amb:"noria",fov:34,atores:[Ae({x:-.8,z:1,eyes:[[0,"sad"]],pose:s=>s.pose({armL:[40,60],armR:[40,60],lean:8})}),Re({x:1,z:.6,eyes:[[0,"lookl"],[i,"heart"]],move:s=>[it(2.4,1,ve(0,1.5,s)),0,.6],pose:(s,r)=>r<1.5?s.walk(r):s.pose()})],extra:s=>{let r=[ae(s,["ELLA TAMPOCO SUBI\xD3"],2,[.2,2.9,.4]),ue(s,["PORQUE T\xDA TE QUEDASTE ABAJO"],2.6,[.2,2.9,.4])];return{update:(o,a,l)=>{s.userData.wheel.rotation.z=o*.1,O(r[0],o,t,i-.1,l),O(r[1],o,i,99,l)}}},c:[[0,1.8,6],[.2,1.8,-1],[0,1.7,5.2],[.2,1.6,-1]],k:1,range:6,blur:5,look:{exposure:1.05,vig:.65}}}]);le(65,n=>({...we({dark:!0}),fov:24,atores:[Ae({x:-2.2,z:-.1,y:-.4,eyes:[[0,"wide"],[1.5,"heart"]],pose:st})],extra:(e,t,i)=>{vt(e,[-1.6,1.6,1],4,6);let s=Xi(i[0]),r=ae(e,["SIN AIRE"],1.1,[-2.2,1.95,-.1]);return{update:(o,a,l)=>{s(ve(.8,1.5,o)),O(r,o,.3,99,l)}}},c:[[-1.8,1.2,2.2],[-2.2,1.1,-.1],[-1.9,1.2,1.8],[-2.2,1.1,-.1]],range:1.4,look:At}));le(66,(n,e)=>{let t=H(e,"gusta"),i=H(e,"primero");return{...we({dark:!0}),fov:30,atores:[Re({x:-2.9,z:-.6,y:.22,eyes:[[0,"look"],[t+.5,"happy"]],pose:st}),Ae({x:-2.2,z:-.1,y:-.4,eyes:[[0,"look"],[t,"heart"]],talk:[[t-1,n]],pose:st})],extra:(s,r,o)=>{vt(s,[-1.6,1.6,1],4,6);let a=Xi(o[0]),l=Xi(o[1]),c=qt(s,["ME GUSTAS.","DESDE PRIMERO."],1.5,[-1.7,2.05,-.1],62),h=ae(s,["MUCHO ANTES DE CUALQUIER PUENTE"],2.3,[-2.3,2.45,-.4]),u=je(si("\u2665","#E8667F",170),.35,.28);return u.renderOrder=6,s.add(u),{update:(d,f,g)=>{O(c,d,t-.3,99,g),O(h,d,i+.6,99,g),a(ve(t,t+.6,d)),l(ve(t,t+.6,d)),u.visible=d>t,u.position.set(-2.55,1.6+d*.4%.5,-.3),Nn(u,g)}}},c:[[-1,1.6,3],[-2.5,1.3,-.4],[-1.2,1.5,2.6],[-2.5,1.3,-.4]],range:2.4,look:At}});le(67,(n,e)=>{let t=H(e,"coge"),i=H(e,"dormidos"),s=H(e,"latas");return{...we({dark:!0,mesa:!1}),fov:30,atores:[Re({x:-.45,z:-.2,y:-.4,eyes:[[0,"happy"],[i,"shut"]],pose:(r,o)=>{r.pose({armL:[12,8],armR:[o>t?35:10,20],head:o>i?-10:0}),ri(r)}}),Ae({x:.3,z:-.15,y:-.4,eyes:[[0,"heart"],[i,"shut"]],pose:(r,o)=>{r.pose({armL:[o>t?35:10,20],armR:[12,8],head:o>i?10:0}),ri(r)}})],extra:r=>{let o=Xt();o.position.set(.9,.06,.5),o.rotation.y=Math.PI*.8,r.add(o);let a=vt(r,[0,1.4,1],4,6),l=[];for(let u=0;u<6;u++){let d=Wi();d.position.set(.8+u%3*.2,0,-.4+Math.floor(u/3)*.2),r.add(d)}let c=pg(r),h=ae(r,["6 LATAS DE JUD\xCDAS"],1.5,[1,1,0]);return{update:(u,d,f)=>{let g=1-.7*ve(i,n,u);a.intensity=4*g,o.userData.on(g>.5?1:0),c(u,[-.1,1.5,0],f,u>i+.5),O(h,u,s,99,f)}}},c:[[0,1.5,3.4],[0,1,-.2],[.6,1.8,3.8],[.2,.8,-.2]],range:2.4,look:At}});le(68,(n,e)=>{let t=H(e,"clonc"),i=H(e,"luz");return{...we({open:!0,mesa:!1}),fov:32,atores:[Re({x:-.45,z:.4,y:-.4,eyes:[[0,"shut"],[t+.3,"wide"]],pose:st}),Ae({x:.3,z:.45,y:-.4,eyes:[[0,"shut"],[t+.3,"wide"]],pose:st})],extra:s=>{Gt(s,0);let r=ue(s,["7:00 A. M."],1.2,[0,2.8,-1.4]),o=ue(s,["\xA1CLONC!"],1.5,[0,2.3,-2.4],{size:100,bg:"#C9361F",fg:"#fff"}),a=s.userData.sunObjs;return{update:(l,c,h)=>{let u=ve(t,t+1.2,l);s.userData.door.rotation.y=-1.45*u,a[0].material.emissiveIntensity=3.2*u,a[1].visible=u>.05,a[2].intensity=60*u,O(r,l,0,t,h),O(o,l,t,t+1.2,h),hr(h,l>t&&l<t+.4?.03:0,l)}}},c:[[0,1.4,4],[0,1.2,-2.4],[0,1.4,3.4],[0,1.2,-2.4]],range:3,lookFn:s=>({exposure:it(.75,1.15,ve(t,i+1,s)),bloom:.5+.4*ve(t,i+1,s)})}});le(69,(n,e)=>{let t=H(e,"guia"),i=H(e,"profesora"),s=H(e,"bomberos"),r=H(e,"media");return{...we({open:!0}),fov:32,atores:[Vr({x:-.5,z:-2.6,eyes:[[0,"wide"]]}),gg({x:.5,z:-2.5,eyes:[[0,"wide"]]}),_d({x:-1.3,z:-2.9}),_d({x:1.3,z:-2.9}),Et(0,{x:-2,z:-2.2,pose:o=>o.pose({armL:[12,8],armR:[110,30]})}),Et(2,{x:2,z:-2.3,pose:o=>o.pose({armL:[12,8],armR:[110,30]})}),Et(3,{x:-2.6,z:-1.6,pose:o=>o.pose({armL:[110,30],armR:[12,8]})}),Et(6,{x:2.7,z:-1.6,pose:o=>o.pose({armL:[110,30],armR:[12,8]})})],extra:(o,a,l)=>{Gt(o,.3);let c=[ae(o,["EL GU\xCDA"],.9,[-.5,2.25,-2.6]),ae(o,["TU PROFESORA"],1.3,[.5,2.55,-2.5]),ue(o,["BOMBEROS"],1.2,[0,2.95,-2.9],{fg:"#FF8A5A"}),ae(o,["MEDIA CLASE CON EL M\xD3VIL"],2.2,[0,1,-1.6])],h=[4,5,6,7].map(u=>{let d=nt("#FFFFFF",.5,0);return o.add(d),d});return{update:(u,d,f)=>{[t,i,s,r].forEach((g,y)=>O(c[y],u,g,99,f)),h.forEach((g,y)=>{let m=Gr(l[4+y]);g.position.set(m.x,m.y+.1,m.z+.1),g.material.opacity=u>r&&Math.sin(u*7+y*2)>.85?1:0})}}},c:[[0,1.6,2.6],[0,1.4,-2.6],[0,1.6,2.2],[0,1.4,-2.6]],range:2.4,look:{exposure:1.05,bloom:.5}}});le(70,(n,e)=>{let t=H(e,"rojos");return{...we({open:!0}),fov:28,atores:[Re({x:-.4,z:.4,eyes:[[0,"wide"],[t,"small"]],move:i=>[it(-.25,-.6,ve(0,.5,i)),0,.4]}),Ae({x:.4,z:.45,eyes:[[0,"wide"],[t,"small"]]})],extra:(i,s,r)=>{Gt(i,.3);let o=Xi(r[0]),a=Xi(r[1]),l=ue(i,["ROJOS COMO TOMATES"],1.7,[0,2.08,.3]),c=Zc(-1.25,1.05,.6,1.4),h=Zc(1.25,1.05,.6,1.4);return i.add(c,h),{update:(u,d,f)=>{o(ve(t,t+.5,u)),a(ve(t,t+.5,u)),O(l,u,t,99,f),c.visible=h.visible=u>t+.4}}},c:[[0,1.6,3],[0,1.45,.4],[0,1.6,2.6],[0,1.45,.4]],range:2,look:{exposure:1.05,bloom:.5}}});fa(71,["cerro"],[(n,e)=>{let t=H(e,"nada"),i=H(e,"alarma"),s=H(e,"desconectada");return{...we({open:!0}),fov:28,atores:[Vr({x:.6,z:-2.6,eyes:[[0,"look"]],talk:[[1,n]],pose:(r,o)=>o>i?kr(r):Sd(r,o)})],extra:r=>{Gt(r,.3),zr(r,1);let o=[ae(r,["NO CIERRA NADA"],1.5,[1.6,2.35,-2.9]),ue(r,["ALARMA ANTIGUA"],1.5,[1.6,2.35,-2.9]),ue(r,["DESCONECTADA HACE 30 A\xD1OS"],2.3,[1.4,2.8,-2.9],{fg:"#FF8A5A"})];return{update:(a,l,c)=>{O(o[0],a,t,i-.1,c),O(o[1],a,i,99,c),O(o[2],a,s,99,c)}}},c:[[2.8,1.8,.2],[1.2,1.6,-2.9],[2.4,1.7,-.2],[1.3,1.6,-2.9]],range:2}},(n,e)=>{let t=H(e,"apagon");return{amb:"bosqueBunker",ambo:{storm:!0,busX:40},fov:32,atores:[],extra:i=>{let s=ue(i,["SE CERR\xD3 SOLA: APAG\xD3N"],2.4,[0,3.4,-3]);return{update:(r,o,a)=>{i.userData.rain(r),i.userData.flash.intensity=Math.max(0,Math.sin(r*2.3)**40)*2.2,O(s,r,.2,99,a)}}},c:[[0,2,5.2],[0,1.4,-3.6],[0,1.9,4.4],[0,1.4,-3.6]],k:1,range:4,look:{exposure:.9,bloom:.5,vig:.6}}}]);le(72,n=>({...we({open:!0}),fov:28,atores:[Re({x:-.3,z:.3,eyes:[[0,"smug"]],pose:e=>e.pose({armL:[60,100],armR:[60,100],head:6})}),Ae({x:.7,z:.4,eyes:[[0,"flat"]]})],extra:e=>{Gt(e,.3);let t=qt(e,["\xBFLO VES?","NO FUE CULPA M\xCDA"],1.3,[-.4,2,.3],60);return{update:(i,s,r)=>O(t,i,.2,99,r)}},c:[[0,1.6,3.2],[0,1.45,.3],[0,1.6,2.7],[0,1.45,.3]],range:2,look:{exposure:1.05,bloom:.5}}));le(73,(n,e)=>({amb:"aula",fov:32,atores:[Ae({x:-.5,z:.2,eyes:[[0,"small"]]}),Re({x:.4,z:.2,eyes:[[0,"small"]]}),Et(0,{x:-2,z:-1,talk:[[0,n]],eyes:[[0,"smug"]]}),Et(2,{x:-1.4,z:-1.2,eyes:[[0,"happy"]]}),Et(3,{x:1.6,z:-1,talk:[[1,n]],eyes:[[0,"smug"]]}),Et(4,{x:2.2,z:-1.2,eyes:[[0,"happy"]]})],extra:t=>{let i=ue(t,["NO SE HABLA DE OTRA COSA"],2.4,[0,2.8,-.8]),s=qt(t,"\xA1UNA NOCHE EN EL B\xDANKER!",1.6,[-1.8,2.3,-1],56),r=qt(t,"\xBFY LA MANO?",1.1,[1.9,2.3,-1],66);return{update:(o,a,l)=>{O(i,o,.2,99,l),O(s,o,1.5,99,l),O(r,o,3,99,l)}}},c:[[0,1.8,5],[0,1.4,-.6],[0,1.7,4.4],[0,1.4,-.6]],range:3}));le(74,(n,e)=>{let t=H(e,"sintio"),i=H(e,"fuera");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[Ae({x:0,z:0,eyes:[[0,"sad"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[130,150],head:-6})})],extra:s=>{let r=[ue(s,["\xBFY SI FUE EL PUENTE?"],1.8,[0,2.45,-.4]),ae(s,["\xBFSOLO POR EL MIEDO?"],1.7,[0,2.45,-.4]),ae(s,["\xBFY SI FUERA NO SIENTE NADA?"],2.1,[0,2.45,-.4])];return{update:(o,a,l)=>{O(r[0],o,.1,t-.1,l),O(r[1],o,t,i-.1,l),O(r[2],o,i,99,l)}}},c:[[0,1.7,3.6],[0,1.6,-.2],[0,1.7,3],[0,1.6,-.2]],range:2.4,look:mg}});fa(75,["la"],[n=>({amb:"aula",fov:30,atores:[Ae({x:-.5,z:.2,eyes:[[0,"small"]],talk:[[1,n]]}),Re({x:.5,z:.2,eyes:[[0,"look"]]})],extra:(e,t,i)=>{let s=Xi(i[0]),r=qt(e,"\xBFQUEDAMOS EL S\xC1BADO?",1.8,[-.5,2.4,.2],60),o=ae(e,["ALGO VALIENTE"],1.4,[0,2.95,-.2]);return{update:(a,l,c)=>{s(.6),O(o,a,.1,2.2,c),O(r,a,2.4,99,c)}}},c:[[0,1.6,3.2],[0,1.5,.2],[0,1.6,2.7],[0,1.5,.2]],range:2}),(n,e)=>{let t=H(e,"tormenta"),i=H(e,"palancas"),s=H(e,"oscuridad");return{amb:"biblio",fov:32,atores:[],extra:r=>{let o=ue(r,["LA BIBLIOTECA MUNICIPAL"],3.4,[0,2.5,-.6]),a=[ae(r,["SIN TORMENTA"],1.8,[-1.9,1.7,-.6]),ae(r,["SIN PALANCAS"],1.8,[0,1.7,-.6]),ae(r,["SIN OSCURIDAD"],1.9,[1.9,1.7,-.6])];return{update:(l,c,h)=>{O(o,l,.1,99,h),O(a[0],l,t,99,h),O(a[1],l,i,99,h),O(a[2],l,s,99,h)}}},c:[[0,1.8,4.4],[0,1.8,-2],[0,1.8,3.8],[0,1.8,-2]],range:8,blur:4}}]);le(76,n=>({amb:"aula",fov:28,atores:[Re({x:.3,z:.2,eyes:[[0,"happy"]],pose:fg}),Ae({x:-.6,z:.2,eyes:[[0,"wide"],[.8,"happy"]]})],extra:e=>{let t=ue(e,["\xA1S\xCD!"],.7,[.3,2.1,.2],{size:110,w:360,bg:"#36AEA2",fg:"#fff"});return{update:(i,s,r)=>O(t,i,.1,99,r)}},c:[[0,1.6,2.8],[0,1.5,.2],[0,1.6,2.4],[0,1.5,.2]],range:2}));le(77,(n,e)=>{let t=H(e,"cuaderno"),i=H(e,"rie"),s=H(e,"mano");return{amb:"biblio",fov:30,atores:[Ae({x:-.55,z:.3,y:-.4,eyes:[[0,"look"],[i,"happy"]],pose:(r,o)=>{r.pose({armL:[12,8],armR:[o>s?50:30,40]}),ri(r)}}),Re({x:.55,z:.3,y:-.4,eyes:[[0,"look"],[i,"happy"]],pose:(r,o)=>{r.pose({armL:[o>s?50:20,40],armR:[12,8],bob:o>i&&o<s?Math.abs(Math.sin(o*9))*.03:0}),ri(r)}})],extra:r=>{r.add(D(2,.08,.9,I("#8E6242"),0,.5,.75));let o=ar(c=>{c.save(),c.translate(-200,0),ih(c,1),c.restore(),c.save(),c.translate(60,0),ih(c,1),c.restore()});o.position.set(0,.55,.8),o.scale.setScalar(1.3),r.add(o);let a=je(si("\u2665","#E8667F",170),.35,.28);a.renderOrder=6,r.add(a);let l=[ae(r,["EL CUADERNO DE VERDAD"],2,[0,2.2,.2]),ue(r,["IGUAL QUE EN EL B\xDANKER"],2.2,[0,2.2,.2])];return{update:(c,h,u)=>{o.visible=c>t-.3,O(l[0],c,t,s-.3,u),O(l[1],c,s,99,u),a.visible=c>s,a.position.set(0,1.5+Math.sin(c*3)*.05,.4),Nn(a,u)}}},c:[[0,1.6,3.6],[0,1,.5],[0,1.6,3],[0,1,.5]],range:2.4}});le(78,(n,e)=>{let t=H(e,"miedo"),i=H(e,"pero"),s=H(e,"queda");return{amb:"bosqueBunker",ambo:{busX:40},fov:32,atores:[Ae({x:-.4,z:-2.6,move:r=>[-.35,0,it(-3.4,-.6,ve(0,n*.7,r))],pose:(r,o)=>o<n*.7?r.walk(o):r.pose({armL:[12,8],armR:[35,20]}),eyes:[[0,"happy"]]}),Re({x:.35,z:-2.6,move:r=>[.35,0,it(-3.4,-.6,ve(0,n*.7,r))],pose:(r,o)=>o<n*.7?r.walk(o+1):r.pose({armL:[35,20],armR:[12,8]}),eyes:[[0,"happy"]]})],extra:r=>{let o=[ue(r,["EL MIEDO ENCIENDE ALGO\u2026"],2.4,[0,3.4,-2.4]),ae(r,["\u2026PERO NO LO MANTIENE"],2.2,[0,3.4,-2.4]),ue(r,["LO QUE QUEDA: LO QUE OS HAB\xC9IS CONTADO"],2.9,[0,3.3,-2.4],{size:62,w:1400})];return{update:(a,l,c)=>{O(o[0],a,t,i-.1,c),O(o[1],a,i,s-.3,c),O(o[2],a,s-.2,99,c)}}},c:[[0,1.8,5.6],[0,1.6,-2.6],[0,1.8,4.8],[0,1.6,-1.6]],k:1,range:4}});le(79,(n,e)=>{let t=H(e,"ocho");return{amb:"biosfera",fov:34,atores:[0,1,2,3,4,5,6,7].map(i=>Et(i,{x:-2.8+i*.8,z:1-i%2*.5,eyes:[[0,"happy"]]})),extra:(i,s,r)=>{let o=ae(i,["8 PERSONAS \xB7 2 A\xD1OS ENCERRADAS"],2.8,[0,2.6,0]);return{update:(a,l,c)=>{r.forEach((h,u)=>h.root.visible=a>t-.2+u*.1),O(o,a,t+.5,99,c)}}},c:[[0,2.4,9],[0,2,-6],[0,2,7.4],[0,1.6,-4]],k:1,range:8,blur:5}});le(80,(n,e)=>{let t=H(e,"casandose");return{amb:"biosfera",fov:30,atores:[Et(0,{x:-.4,z:1,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[40,30]})}),Et(5,{x:.4,z:1,eyes:[[0,"heart"]],pose:i=>i.pose({armL:[40,30],armR:[12,8]})})],extra:i=>{let s=ae(i,["JANE POYNTER Y TABER MACCALLUM"],2.6,[0,2.6,.8]),r=ue(i,["\xA1SE CASARON!"],1.4,[0,2.15,.8],{bg:"#E8667F",fg:"#fff"}),o=xd(i,14,"#FFB2C8");return i.userData.tag.visible=!1,{update:(a,l,c)=>{O(s,a,.1,99,c),O(r,a,t,99,c),o(a,[0,1.8,1,1],ve(t,t+.3,a))}}},c:[[0,1.8,4.2],[0,1.6,1],[0,1.7,3.6],[0,1.6,1]],k:1,range:3}});le(81,(n,e)=>{let t=H(e,"ni");return{amb:"biblio",fov:28,atores:[Re({x:.3,z:.3,eyes:[[0,"down"],[t,"smug"]],pose:i=>i.pose({armL:[12,8],armR:[70,60]})}),Ae({x:-.6,z:.3,eyes:[[0,"look"],[t+1.5,"happy"]]})],extra:(i,s,r)=>{let o=gd(["BIOSFERA 2:","SE CASARON"],{hora:"18:20"});o.scale.setScalar(.35),i.add(o);let a=qt(i,["NI SE TE OCURRA VOLVER","A TOCAR UNA PALANCA ROJA"],2,[.2,2.25,.3],54);return{update:(l,c,h)=>{let u=Gr(r[0]);o.position.set(u.x-.05,u.y+.1,u.z+.1),Nn(o,h),O(a,l,t,99,h)}}},c:[[0,1.6,3.2],[0,1.5,.3],[0,1.6,2.7],[0,1.5,.3]],range:2}});le(82,(n,e)=>{let t=H(e,"suscribete"),i=H(e,"cuentame"),s=H(e,"quien");return{amb:"bosqueBunker",ambo:{busX:40},fov:32,atores:[Re({x:-1.8,z:0,eyes:[[0,"happy"]],pose:lr}),Ae({x:-1,z:0,eyes:[[0,"happy"]],pose:(r,o)=>o>t?kr(r):lr(r,o)})],extra:r=>{let o=jc(2.4);o.position.set(1,2.5,-.2),r.add(o);let a=ue(r,["\xBFCON QUI\xC9N TE QUEDAR\xCDAS","ATRAPADO EN UN B\xDANKER?"],2.4,[1.1,.95,.3],{size:66,w:1e3,h:240}),l=ae(r,["CU\xC9NTAMELO EN LOS COMENTARIOS"],2.6,[.6,3.3,-.2],{size:62,w:1200});return{update:(c,h,u)=>{let d=ve(t-.3,t,c);o.scale.setScalar(Math.max(.01,d)),o.rotation.z=c>t+.6&&c<t+1.6?Math.sin(c*40)*.05:0,O(l,c,i,99,u),O(a,c,s-.4,99,u)}}},c:[[0,1.9,5.6],[0,1.6,-.2],[0,1.8,5],[0,1.6,-.2]],k:1,range:7,blur:4}});function yg(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new ta(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=cr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=cr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(yg(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=cr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
