var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Zl="170";var Wu=0,Dc=1,Xu=2;var Hh=1,$l=2,ni=3,wi=0,rn=1,It=2,Wn=0,Xn=1,on=2,Uc=3,Nc=4,qu=5,qi=100,Yu=101,Zu=102,$u=103,Ju=104,Qu=200,Ku=201,ju=202,ed=203,Pa=204,Ia=205,td=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,ld=213,cd=214,La=0,Da=1,Ua=2,Cs=3,Na=4,Ba=5,Oa=6,za=7,kh=0,hd=1,ud=2,qn=0,dd=1,fd=2,pd=3,md=4,gd=5,yd=6,vd=7;var Vh=300,Fs=301,Ps=302,Ha=303,ka=304,Ro=306,An=1e3,Zi=1001,Va=1002,Dn=1003,_d=1004;var Fr=1005;var Gn=1006,Ko=1007;var $i=1008;var ai=1009,Gh=1010,Wh=1011,fr=1012,Jl=1013,li=1014,si=1015,fn=1016,Ql=1017,Kl=1018,Is=1020,Xh=35902,qh=1021,Yh=1022,Ln=1023,Zh=1024,$h=1025,Ts=1026,Ls=1027,Jh=1028,jl=1029,Qh=1030,ec=1031;var tc=1033,io=33776,so=33777,ro=33778,oo=33779,Ga=35840,Wa=35841,Xa=35842,qa=35843,Ya=36196,Za=37492,$a=37496,Ja=37808,Qa=37809,Ka=37810,ja=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,ll=37820,cl=37821,ao=36492,hl=36494,ul=36495,Kh=36283,dl=36284,fl=36285,pl=36286;var lo=2300,ml=2301,jo=2302,Bc=2400,Oc=2401,zc=2402;var Ed=3200,Xs=3201;var jh=0,xd=1,bi="",Gt="srgb",Ii="srgb-linear",Co="linear",yt="srgb";var as=7680;var Hc=519,Md=512,Sd=513,bd=514,eu=515,Ad=516,Td=517,wd=518,Rd=519,gl=35044;var kc="300 es",ri=2e3,co=2001,Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ea=Math.PI/180,ho=180/Math.PI;function Ti(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function dn(n,e,t){return Math.max(e,Math.min(t,n))}function Cd(n,e){return(n%e+e)%e}function ta(n,e,t){return(1-t)*n+t*e}function Vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Me=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],E=s[1],M=s[4],v=s[7],C=s[2],T=s[5],R=s[8];return r[0]=o*y+a*E+l*C,r[3]=o*m+a*M+l*T,r[6]=o*f+a*v+l*R,r[1]=c*y+h*E+u*C,r[4]=c*m+h*M+u*T,r[7]=c*f+h*v+u*R,r[2]=d*y+p*E+g*C,r[5]=d*m+p*M+g*T,r[8]=d*f+p*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},na=new We;function tu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fd(){let n=uo("canvas");return n.style.display="block",n}var Vc={};function hr(n){n in Vc||(Vc[n]=!0,console.warn(n))}function Pd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Id(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ld(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(n.r=oi(n.r),n.g=oi(n.g),n.b=oi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(n.r=ws(n.r),n.g=ws(n.g),n.b=ws(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===bi?Co:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gc=[.64,.33,.3,.6,.15,.06],Wc=[.2126,.7152,.0722],Xc=[.3127,.329],qc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[Ii]:{primaries:Gc,whitePoint:Xc,transfer:Co,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:Gc,whitePoint:Xc,transfer:yt,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});var ls,yl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=uo("canvas")),ls.width=e.width,ls.height=e.height;let i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dd=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ud=0,xn=class n extends Ri{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zi,s=Zi,r=Gn,o=$i,a=Ln,l=ai,c=n.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ti(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Vh;xn.DEFAULT_ANISOTROPY=1;var _t=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,C=(f+1)/2,T=(h+d)/4,R=(u+y)/4,P=(g+m)/4;return M>v&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=R/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=P/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=P/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vl=class extends Ri{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends vl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},po=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let C=Math.sqrt(M),T=Math.atan2(C,f*E);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let v=a*E;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sa=new F,Zc=new Ci,Ji=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Ir.subVectors(this.max,nr),cs.subVectors(e.a,nr),hs.subVectors(e.b,nr),us.subVectors(e.c,nr),vi.subVectors(hs,cs),_i.subVectors(us,hs),zi.subVectors(cs,us);let t=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-zi.z,zi.y,vi.z,0,-vi.x,_i.z,0,-_i.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-zi.y,zi.x,0];return!ra(t,cs,hs,us,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,cs,hs,us,Ir))?!1:(Lr.crossVectors(vi,_i),t=[Lr.x,Lr.y,Lr.z],ra(t,cs,hs,us,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qn=[new F,new F,new F,new F,new F,new F,new F,new F],Fn=new F,Pr=new Ji,cs=new F,hs=new F,us=new F,vi=new F,_i=new F,zi=new F,nr=new F,Ir=new F,Lr=new F,Hi=new F;function ra(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Hi.fromArray(n,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=i.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nd=new Ji,ir=new F,oa=new F,Ds=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Nd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(oa)),this.expandByPoint(ir.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new F,aa=new F,Dr=new F,Ei=new F,la=new F,Ur=new F,ca=new F,mo=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){aa.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(aa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Dr),a=Ei.dot(this.direction),l=-Ei.dot(Dr),c=Ei.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(Dr,d),p}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,s,r){la.subVectors(t,e),Ur.subVectors(i,e),ca.crossVectors(la,Ur);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);let l=a*this.direction.dot(Ur.crossVectors(Ei,Ur));if(l<0)return null;let c=a*this.direction.dot(la.cross(Ei));if(c<0||l+c>o)return null;let h=-a*Ei.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,y,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,Od)}lookAt(e,t,i){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),xi.crossVectors(i,_n),xi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),xi.crossVectors(i,_n)),xi.normalize(),Nr.crossVectors(_n,xi),s[0]=xi.x,s[4]=Nr.x,s[8]=_n.x,s[1]=xi.y,s[5]=Nr.y,s[9]=_n.y,s[2]=xi.z,s[6]=Nr.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],E=i[3],M=i[7],v=i[11],C=i[15],T=s[0],R=s[4],P=s[8],b=s[12],x=s[1],w=s[5],N=s[9],B=s[13],G=s[2],j=s[6],q=s[10],se=s[14],X=s[3],he=s[7],ve=s[11],Ce=s[15];return r[0]=o*T+a*x+l*G+c*X,r[4]=o*R+a*w+l*j+c*he,r[8]=o*P+a*N+l*q+c*ve,r[12]=o*b+a*B+l*se+c*Ce,r[1]=h*T+u*x+d*G+p*X,r[5]=h*R+u*w+d*j+p*he,r[9]=h*P+u*N+d*q+p*ve,r[13]=h*b+u*B+d*se+p*Ce,r[2]=g*T+y*x+m*G+f*X,r[6]=g*R+y*w+m*j+f*he,r[10]=g*P+y*N+m*q+f*ve,r[14]=g*b+y*B+m*se+f*Ce,r[3]=E*T+M*x+v*G+C*X,r[7]=E*R+M*w+v*j+C*he,r[11]=E*P+M*N+v*q+C*ve,r[15]=E*b+M*B+v*se+C*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+y*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],E=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,M=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,C=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,T=t*E+i*M+s*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=E*R,e[1]=(y*d*r-u*m*r-y*s*p+i*m*p+u*s*f-i*d*f)*R,e[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*f+i*l*f)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*R,e[4]=M*R,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*R,e[8]=v*R,e[9]=(g*u*r-h*y*r-g*i*p+t*y*p+h*i*f-t*u*f)*R,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*R,e[12]=C*R,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,E=l*c,M=l*h,v=l*u,C=i.x,T=i.y,R=i.z;return s[0]=(1-(y+f))*C,s[1]=(p+v)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+f))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+M)*R,s[9]=(m-E)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ds.set(s[0],s[1],s[2]).length(),o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);let c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ri){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===ri)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===co)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ri){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h,g,y;if(a===ri)g=(o+r)*u,y=-2*u;else if(a===co)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ds=new F,Pn=new Lt,Bd=new F(0,0,0),Od=new F(1,1,1),xi=new F,Nr=new F,_n=new F,$c=new Lt,Jc=new Ci,Yn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zd=0,Qc=new F,fs=new Ci,jn=new Lt,Br=new F,sr=new F,Hd=new F,kd=new Ci,Kc=new F(1,0,0),jc=new F(0,1,0),eh=new F(0,0,1),th={type:"added"},Vd={type:"removed"},ps={type:"childadded",child:null},ha={type:"childremoved",child:null},Vt=class n extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Yn,i=new Ci,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new We}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis(jc,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis(jc,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(sr,Br,this.up):jn.lookAt(Br,sr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(jn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new F(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new F,ei=new F,ua=new F,ti=new F,ms=new F,gs=new F,nh=new F,da=new F,fa=new F,pa=new F,ma=new _t,ga=new _t,ya=new _t,Ai=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),ei.subVectors(i,t),ua.subVectors(e,t);let o=In.dot(In),a=In.dot(ei),l=In.dot(ua),c=ei.dot(ei),h=ei.dot(ua),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ma.setScalar(0),ga.setScalar(0),ya.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,i),ya.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(ya,r.z),o}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),ei.subVectors(e,t),In.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),In.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ms.subVectors(s,i),gs.subVectors(r,i),da.subVectors(e,i);let l=ms.dot(da),c=gs.dot(da);if(l<=0&&c<=0)return t.copy(i);fa.subVectors(e,s);let h=ms.dot(fa),u=gs.dot(fa);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ms,o);pa.subVectors(e,r);let p=ms.dot(pa),g=gs.dot(pa);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(gs,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return nh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(nh,a);let f=1/(m+y+d);return o=y*f,a=d*f,t.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Cd(e,1),t=dn(t,0,1),i=dn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=va(o,r,e+1/3),this.g=va(o,r,e),this.b=va(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=nu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ot.fromWorkingColorSpace(sn.copy(this),e),Math.round(dn(sn.r*255,0,255))*65536+Math.round(dn(sn.g*255,0,255))*256+Math.round(dn(sn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Gt){ot.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,s=sn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Or);let i=ta(Mi.h,Or.h,t),s=ta(Mi.s,Or.s,t),r=ta(Mi.l,Or.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ye;ye.NAMES=nu;var Gd=0,ci=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ti(),this.name="",this.blending=Xn,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=Ia,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xn&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ia&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},At=class extends ci{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new F,zr=new Me,en=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}};var yo=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var vo=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Mt=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},Wd=0,bn=new Lt,_a=new Vt,ys=new F,En=new Ji,rr=new Ji,Zt=new F,Wt=class n extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?vo:yo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(En.min,rr.min),En.expandByPoint(Zt),Zt.addVectors(En.max,rr.max),En.expandByPoint(Zt)):(En.expandByPoint(rr.min),En.expandByPoint(rr.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Zt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Zt.add(ys)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;let c=new F,h=new F,u=new F,d=new Me,p=new Me,g=new Me,y=new F,m=new F;function f(P,b,x){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(y),a[b].add(y),a[x].add(y),l[P].add(m),l[b].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,b=E.length;P<b;++P){let x=E[P],w=x.start,N=x.count;for(let B=w,G=w+N;B<G;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new F,v=new F,C=new F,T=new F;function R(P){C.fromBufferAttribute(s,P),T.copy(C);let b=a[P];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(T,b);let w=v.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,w)}for(let P=0,b=E.length;P<b;++P){let x=E[P],w=x.start,N=x.count;for(let B=w,G=w+N;B<G;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new Lt,ki=new mo,Hr=new Ds,sh=new F,kr=new F,Vr=new F,Gr=new F,Ea=new F,Wr=new F,rh=new F,Xr=new F,oe=class extends Vt{constructor(e=new Wt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,e),o?Wr.addScaledVector(Ea,h):Wr.addScaledVector(Ea.sub(t),h))}t.add(Wr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(Hr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Hr,sh)===null||ki.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),ki.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,C=M;v<C;v+=3){let T=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);s=qr(this,f,e,i,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=qr(this,o,e,i,c,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,C=M;v<C;v+=3){let T=v,R=v+1,P=v+2;s=qr(this,f,e,i,c,h,u,T,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let E=m,M=m+1,v=m+2;s=qr(this,o,e,i,c,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Xd(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===wi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,kr),n.getVertexPosition(l,Vr),n.getVertexPosition(c,Gr);let h=Xd(n,e,t,i,kr,Vr,Gr,rh);if(h){let u=new F;Ai.getBarycoord(rh,kr,Vr,Gr,u),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,l,c,u,new Me)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Ai.getNormal(kr,Vr,Gr,d.normal),h.face=d,h.barycoord=u}return h}var hi=class n extends Wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(y,m,f,E,M,v,C,T,R,P,b){let x=v/R,w=C/P,N=v/2,B=C/2,G=T/2,j=R+1,q=P+1,se=0,X=0,he=new F;for(let ve=0;ve<q;ve++){let Ce=ve*w-B;for(let $e=0;$e<j;$e++){let xt=$e*x-N;he[y]=xt*E,he[m]=Ce*M,he[f]=G,c.push(he.x,he.y,he.z),he[y]=0,he[m]=0,he[f]=T>0?1:-1,h.push(he.x,he.y,he.z),u.push($e/R),u.push(1-ve/P),se+=1}}for(let ve=0;ve<P;ve++)for(let Ce=0;Ce<R;Ce++){let $e=d+Ce+j*ve,xt=d+Ce+j*(ve+1),$=d+(Ce+1)+j*(ve+1),re=d+(Ce+1)+j*ve;l.push($e,xt,re),l.push(xt,$,re),X+=6}a.addGroup(p,X,b),p+=X,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Us(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function cn(n){let e={};for(let t=0;t<n.length;t++){let i=Us(n[t]);for(let s in i)e[s]=i[s]}return e}function qd(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var qs={clone:Us,merge:cn},Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends ci{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_o=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new F,oh=new Me,ah=new Me,jt=class extends _o{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,oh,ah),t.subVectors(ah,oh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,_s=1,El=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(vs,_s,e,t);s.layers=this.layers,this.add(s);let r=new jt(vs,_s,e,t);r.layers=this.layers,this.add(r);let o=new jt(vs,_s,e,t);o.layers=this.layers,this.add(o);let a=new jt(vs,_s,e,t);a.layers=this.layers,this.add(a);let l=new jt(vs,_s,e,t);l.layers=this.layers,this.add(l);let c=new jt(vs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Eo=class extends xn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xl=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Eo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hi(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Wn});r.uniforms.tEquirect.value=t;let o=new oe(s,r),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=Gn),new El(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},xa=new F,$d=new F,Jd=new We,ii=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xa.subVectors(i,t).cross($d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Jd.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new Ds,Yr=new F,pr=class{constructor(e=new ii,t=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],E=s[13],M=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-p,v-f).normalize(),i[1].setComponents(l+r,d+c,m+p,v+f).normalize(),i[2].setComponents(l+o,d+h,m+g,v+E).normalize(),i[3].setComponents(l-o,d-h,m-g,v-E).normalize(),i[4].setComponents(l-a,d-u,m-y,v-M).normalize(),t===ri)i[5].setComponents(l+a,d+u,m+y,v+M).normalize();else if(t===co)i[5].setComponents(a,u,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function su(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qd(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xe=class n extends Wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let E=f*d-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-E,0),y.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let M=E+c*f,v=E+c*(f+1),C=E+1+c*(f+1),T=E+1+c*f;p.push(M,v,T),p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(y,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
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
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,Qf=`struct PhysicalMaterial {
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
}`,Kf=`
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
#endif`,jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,y0=`#define MATCAP
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
}`,v0=`#define NORMAL
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
}`,_0=`#define NORMAL
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
}`,E0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,M0=`#define STANDARD
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
}`,S0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,A0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:of,batching_pars_vertex:af,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:uf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:yf,color_fragment:vf,color_pars_fragment:_f,color_pars_vertex:Ef,color_vertex:xf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Af,displacementmap_vertex:Tf,emissivemap_fragment:wf,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Ff,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Xf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:Bf,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Zf,lights_phong_pars_fragment:$f,lights_physical_fragment:Jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:Kf,lights_fragment_maps:jf,lights_fragment_end:ep,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:yp,normal_pars_fragment:vp,normal_pars_vertex:_p,normal_vertex:Ep,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ap,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Fp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Bp,skinbase_vertex:Op,skinning_pars_vertex:zp,skinning_vertex:Hp,skinnormal_vertex:kp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:$p,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:Kp,background_frag:jp,backgroundCube_vert:e0,backgroundCube_frag:t0,cube_vert:n0,cube_frag:i0,depth_vert:s0,depth_frag:r0,distanceRGBA_vert:o0,distanceRGBA_frag:a0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:h0,linedashed_frag:u0,meshbasic_vert:d0,meshbasic_frag:f0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:y0,meshnormal_vert:v0,meshnormal_frag:_0,meshphong_vert:E0,meshphong_frag:x0,meshphysical_vert:M0,meshphysical_frag:S0,meshtoon_vert:b0,meshtoon_frag:A0,points_vert:T0,points_frag:w0,shadow_vert:R0,shadow_frag:C0,sprite_vert:F0,sprite_frag:P0},le={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},kn={basic:{uniforms:cn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:cn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:cn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:cn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:cn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:cn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:cn([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:cn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:cn([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:cn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:cn([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:cn([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:cn([le.lights,le.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};kn.physical={uniforms:cn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Zr={r:0,b:0,g:0},Gi=new Yn,I0=new Lt;function L0(n,e,t,i,s,r,o){let a=new ye(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function y(E){let M=!1,v=g(E);v===null?f(a,l):v&&v.isColor&&(f(v,1),M=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Ro)?(h===void 0&&(h=new oe(new hi(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Us(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gi.copy(M.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(Gi)),h.material.toneMapped=ot.getTransfer(v.colorSpace)!==yt,(u!==v||d!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new oe(new Xe(2,2),new Jt({name:"BackgroundMaterial",uniforms:Us(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,M){E.getRGB(Zr,iu(n)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:y,addToRenderList:m}}function D0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(x,w,N,B,G){let j=!1,q=u(B,N,w);r!==q&&(r=q,c(r.object)),j=p(x,B,N,G),j&&g(x,B,N,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(x,w,N,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,w,N){let B=N.wireframe===!0,G=i[x.id];G===void 0&&(G={},i[x.id]=G);let j=G[w.id];j===void 0&&(j={},G[w.id]=j);let q=j[B];return q===void 0&&(q=d(l()),j[B]=q),q}function d(x){let w=[],N=[],B=[];for(let G=0;G<t;G++)w[G]=0,N[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,w,N,B){let G=r.attributes,j=w.attributes,q=0,se=N.getAttributes();for(let X in se)if(se[X].location>=0){let ve=G[X],Ce=j[X];if(Ce===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Ce=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Ce=x.instanceColor)),ve===void 0||ve.attribute!==Ce||Ce&&ve.data!==Ce.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(x,w,N,B){let G={},j=w.attributes,q=0,se=N.getAttributes();for(let X in se)if(se[X].location>=0){let ve=j[X];ve===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));let Ce={};Ce.attribute=ve,ve&&ve.data&&(Ce.data=ve.data),G[X]=Ce,q++}r.attributes=G,r.attributesNum=q,r.index=B}function y(){let x=r.newAttributes;for(let w=0,N=x.length;w<N;w++)x[w]=0}function m(x){f(x,0)}function f(x,w){let N=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;N[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),G[x]!==w&&(n.vertexAttribDivisor(x,w),G[x]=w)}function E(){let x=r.newAttributes,w=r.enabledAttributes;for(let N=0,B=w.length;N<B;N++)w[N]!==x[N]&&(n.disableVertexAttribArray(N),w[N]=0)}function M(x,w,N,B,G,j,q){q===!0?n.vertexAttribIPointer(x,w,N,G,j):n.vertexAttribPointer(x,w,N,B,G,j)}function v(x,w,N,B){y();let G=B.attributes,j=N.getAttributes(),q=w.defaultAttributeValues;for(let se in j){let X=j[se];if(X.location>=0){let he=G[se];if(he===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),he!==void 0){let ve=he.normalized,Ce=he.itemSize,$e=e.get(he);if($e===void 0)continue;let xt=$e.buffer,$=$e.type,re=$e.bytesPerElement,Te=$===n.INT||$===n.UNSIGNED_INT||he.gpuType===Jl;if(he.isInterleavedBufferAttribute){let ue=he.data,Ne=ue.stride,ke=he.offset;if(ue.isInstancedInterleavedBuffer){for(let Je=0;Je<X.locationSize;Je++)f(X.location+Je,ue.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Je=0;Je<X.locationSize;Je++)m(X.location+Je);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Je=0;Je<X.locationSize;Je++)M(X.location+Je,Ce/X.locationSize,$,ve,Ne*re,(ke+Ce/X.locationSize*Je)*re,Te)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)f(X.location+ue,he.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let ue=0;ue<X.locationSize;ue++)M(X.location+ue,Ce/X.locationSize,$,ve,Ce*re,Ce/X.locationSize*ue*re,Te)}}else if(q!==void 0){let ve=q[se];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(X.location,ve);break;case 3:n.vertexAttrib3fv(X.location,ve);break;case 4:n.vertexAttrib4fv(X.location,ve);break;default:n.vertexAttrib1fv(X.location,ve)}}}}E()}function C(){P();for(let x in i){let w=i[x];for(let N in w){let B=w[N];for(let G in B)h(B[G].object),delete B[G];delete w[N]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;let w=i[x.id];for(let N in w){let B=w[N];for(let G in B)h(B[G].object),delete B[G];delete w[N]}delete i[x.id]}function R(x){for(let w in i){let N=i[w];if(N[x.id]===void 0)continue;let B=N[x.id];for(let G in B)h(B[G].object),delete B[G];delete N[x.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function U0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function N0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ai&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==si&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function B0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ii,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,M=E*4,v=f.clippingState||null;l.value=v,v=h(g,d,M,p);for(let C=0;C!==M;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=p;M!==y;++M,v+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function O0(n){let e=new WeakMap;function t(o,a){return a===Ha?o.mapping=Fs:a===ka&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ha||a===ka)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new xl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ns=class extends _o{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},As=4,lh=[.125,.215,.35,.446,.526,.582],Yi=20,Ma=new Ns,ch=new ye,Sa=null,ba=0,Aa=0,Ta=!1,Xi=(1+Math.sqrt(5))/2,Es=1/Xi,hh=[new F(-Xi,Es,0),new F(Xi,Es,0),new F(-Es,0,Xi),new F(Es,0,Xi),new F(0,Xi,-Es),new F(0,Xi,Es),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],xo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ba,Aa),this._renderer.xr.enabled=Ta,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:fn,format:Ln,colorSpace:Ii,depthBuffer:!1},s=uh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z0(r)),this._blurMaterial=H0(r,e,t)}return s}_compileMaterial(e){let t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,i,s){let a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ch),h.toneMapping=qn,h.autoClear=!1;let p=new At({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new oe(new hi,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(ch),y=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let M=this._cubeSize;$r(s,E*M,f>2?M:0,M,M),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Fs||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;$r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ma)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hh[(s-r-1)%hh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let f=[],E=0;for(let R=0;R<Yi;++R){let P=R/y,b=Math.exp(-P*P/2);f.push(b),R===0?E+=b:R<m&&(E+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;let v=this._sizeLods[s],C=3*v*(s>M-As?s-M+As:0),T=4*(this._cubeSize-v);$r(t,C,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Ma)}};function z0(n){let e=[],t=[],i=[],s=n,r=n-As+1+lh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-As?l=lh[o-n+As-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,E=new Float32Array(y*g*p),M=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,P=T>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];E.set(b,y*g*T),M.set(d,m*g*T);let x=[T,T,T,T,T,T];v.set(x,f*g*T)}let C=new Wt;C.setAttribute("position",new en(E,y)),C.setAttribute("uv",new en(M,m)),C.setAttribute("faceIndex",new en(v,f)),e.push(C),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uh(n,e,t){let i=new $t(n,e,t);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function H0(n,e,t){let i=new Float32Array(Yi),s=new F(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function dh(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function fh(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function k0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ha||l===ka,h=l===Fs||l===Ps;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new xo(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new xo(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function V0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&hr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function G0(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let E=p.array;y=p.version;for(let M=0,v=E.length;M<v;M+=3){let C=E[M+0],T=E[M+1],R=E[M+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){let E=g.array;y=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){let C=M+0,T=M+1,R=M+2;d.push(C,T,T,R,R,C)}}else return;let m=new(tu(d)?vo:yo)(d,1);m.version=y;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function W0(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,y,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*y[E];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function q0(n,e,t){let i=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*C*4*u),R=new po(T,v,C,u);R.type=si,R.needsUpdate=!0;let P=M*4;for(let x=0;x<u;x++){let w=m[x],N=f[x],B=E[x],G=v*C*4*x;for(let j=0;j<w.count;j++){let q=j*P;p===!0&&(s.fromBufferAttribute(w,j),T[G+q+0]=s.x,T[G+q+1]=s.y,T[G+q+2]=s.z,T[G+q+3]=0),g===!0&&(s.fromBufferAttribute(N,j),T[G+q+4]=s.x,T[G+q+5]=s.y,T[G+q+6]=s.z,T[G+q+7]=0),y===!0&&(s.fromBufferAttribute(B,j),T[G+q+8]=s.x,T[G+q+9]=s.y,T[G+q+10]=s.z,T[G+q+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Me(v,C)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Y0(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Bs=class extends xn{constructor(e,t,i,s,r,o,a,l,c,h=Ts){if(h!==Ts&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ts&&(i=li),i===void 0&&h===Ls&&(i=Is),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ru=new xn,ph=new Bs(1,1),ou=new po,au=new _l,lu=new Eo,mh=[],gh=[],yh=new Float32Array(16),vh=new Float32Array(9),_h=new Float32Array(4);function Ys(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fo(n,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function J0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Q0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function K0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;_h.set(i),n.uniformMatrix2fv(this.addr,!1,_h),qt(t,i)}}function j0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;vh.set(i),n.uniformMatrix3fv(this.addr,!1,vh),qt(t,i)}}function em(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),qt(t,i)}}function tm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function im(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function sm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function rm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function om(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function am(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function lm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function cm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ph.compareFunction=eu,r=ph):r=ru,t.setTexture2D(e||r,s)}function hm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||au,s)}function um(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||lu,s)}function dm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ou,s)}function fm(n){switch(n){case 5126:return Z0;case 35664:return $0;case 35665:return J0;case 35666:return Q0;case 35674:return K0;case 35675:return j0;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}function pm(n,e){n.uniform1fv(this.addr,e)}function mm(n,e){let t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function gm(n,e){let t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function ym(n,e){let t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function vm(n,e){let t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _m(n,e){let t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Em(n,e){let t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xm(n,e){n.uniform1iv(this.addr,e)}function Mm(n,e){n.uniform2iv(this.addr,e)}function Sm(n,e){n.uniform3iv(this.addr,e)}function bm(n,e){n.uniform4iv(this.addr,e)}function Am(n,e){n.uniform1uiv(this.addr,e)}function Tm(n,e){n.uniform2uiv(this.addr,e)}function wm(n,e){n.uniform3uiv(this.addr,e)}function Rm(n,e){n.uniform4uiv(this.addr,e)}function Cm(n,e,t){let i=this.cache,s=e.length,r=Fo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ru,r[o])}function Fm(n,e,t){let i=this.cache,s=e.length,r=Fo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||au,r[o])}function Pm(n,e,t){let i=this.cache,s=e.length,r=Fo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||lu,r[o])}function Im(n,e,t){let i=this.cache,s=e.length,r=Fo(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ou,r[o])}function Lm(n){switch(n){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return ym;case 35674:return vm;case 35675:return _m;case 35676:return Em;case 5124:case 35670:return xm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return bm;case 5125:return Am;case 36294:return Tm;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}var Ml=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fm(t.type)}},Sl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}},bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},wa=/(\w+)(\])?(\[|\.)?/g;function Eh(n,e){n.seq.push(e),n.map[e.id]=e}function Dm(n,e,t){let i=n.name,s=i.length;for(wa.lastIndex=0;;){let r=wa.exec(i),o=wa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Eh(t,c===void 0?new Ml(a,n,e):new Sl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new bl(a),Eh(t,u)),t=u}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Dm(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function xh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Um=37297,Nm=0;function Bm(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Mh=new We;function Om(n){ot._getMatrix(Mh,ot.workingColorSpace,n);let e=`mat3( ${Mh.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Co:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Bm(n.getShaderSource(e),o)}else return s}function zm(n,e){let t=Om(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hm(n,e){let t;switch(e){case dd:t="Linear";break;case fd:t="Reinhard";break;case pd:t="Cineon";break;case md:t="ACESFilmic";break;case yd:t="AgX";break;case vd:t="Neutral";break;case gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Jr=new F;function km(){ot.getLuminanceCoefficients(Jr);let n=Jr.x.toFixed(4),e=Jr.y.toFixed(4),t=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Gm(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Wm(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ur(n){return n!==""}function bh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(Xm,Ym)}var qm=new Map;function Ym(n,e){let t=Ye[e];if(t===void 0){let i=qm.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}var Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(n){return n.replace(Zm,$m)}function $m(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Jm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Qm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Km(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function jm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kh:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function eg(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tg(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Jm(t),c=Qm(t),h=Km(t),u=jm(t),d=eg(t),p=Vm(t),g=Gm(r),y=s.createProgram(),m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),f.length>0&&(f+=`
`)):(m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),f=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==qn?Hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,zm("linearToOutputTexel",t.outputColorSpace),km(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=Al(o),o=bh(o,t),o=Ah(o,t),a=Al(a),a=bh(a,t),a=Ah(a,t),o=Th(o),a=Th(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=E+m+o,v=E+f+a,C=xh(s,s.VERTEX_SHADER,M),T=xh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,C),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(w){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(y).trim(),B=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(T).trim(),j=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,C,T);else{let se=Sh(s,C,"vertex"),X=Sh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+se+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||G==="")&&(q=!1);q&&(w.diagnostics={runnable:j,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(C),s.deleteShader(T),P=new Rs(s,y),b=Wm(s,y)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,Um)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nm++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var ng=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new wl(e),t.set(e,i)),i}},wl=class{constructor(e){this.id=ng++,this.code=e,this.usedTimes=0}};function ig(n,e,t,i,s,r,o){let a=new go,l=new Tl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,w,N,B){let G=N.fog,j=B.geometry,q=b.isMeshStandardMaterial?N.environment:null,se=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),X=se&&se.mapping===Ro?se.image.height:null,he=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ce=ve!==void 0?ve.length:0,$e=0;j.morphAttributes.position!==void 0&&($e=1),j.morphAttributes.normal!==void 0&&($e=2),j.morphAttributes.color!==void 0&&($e=3);let xt,$,re,Te;if(he){let gt=kn[he];xt=gt.vertexShader,$=gt.fragmentShader}else xt=b.vertexShader,$=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),Te=l.getFragmentShaderID(b);let ue=n.getRenderTarget(),Ne=n.state.buffers.depth.getReversed(),ke=B.isInstancedMesh===!0,Je=B.isBatchedMesh===!0,Ut=!!b.map,st=!!b.matcap,Ht=!!se,U=!!b.aoMap,Mn=!!b.lightMap,tt=!!b.bumpMap,nt=!!b.normalMap,De=!!b.displacementMap,Rt=!!b.emissiveMap,Ie=!!b.metalnessMap,A=!!b.roughnessMap,_=b.anisotropy>0,O=b.clearcoat>0,Q=b.dispersion>0,ee=b.iridescence>0,Z=b.sheen>0,we=b.transmission>0,de=_&&!!b.anisotropyMap,_e=O&&!!b.clearcoatMap,rt=O&&!!b.clearcoatNormalMap,te=O&&!!b.clearcoatRoughnessMap,Ee=ee&&!!b.iridescenceMap,Ue=ee&&!!b.iridescenceThicknessMap,Be=Z&&!!b.sheenColorMap,xe=Z&&!!b.sheenRoughnessMap,it=!!b.specularMap,qe=!!b.specularColorMap,St=!!b.specularIntensityMap,I=we&&!!b.transmissionMap,ce=we&&!!b.thicknessMap,W=!!b.gradientMap,K=!!b.alphaMap,me=b.alphaTest>0,fe=!!b.alphaHash,Ve=!!b.extensions,Bt=qn;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Bt=n.toneMapping);let tn={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:xt,fragmentShader:$,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Je,batchingColor:Je&&B._colorsTexture!==null,instancing:ke,instancingColor:ke&&B.instanceColor!==null,instancingMorph:ke&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ii,alphaToCoverage:!!b.alphaToCoverage,map:Ut,matcap:st,envMap:Ht,envMapMode:Ht&&se.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:Mn,bumpMap:tt,normalMap:nt,displacementMap:d&&De,emissiveMap:Rt,normalMapObjectSpace:nt&&b.normalMapType===xd,normalMapTangentSpace:nt&&b.normalMapType===jh,metalnessMap:Ie,roughnessMap:A,anisotropy:_,anisotropyMap:de,clearcoat:O,clearcoatMap:_e,clearcoatNormalMap:rt,clearcoatRoughnessMap:te,dispersion:Q,iridescence:ee,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:Z,sheenColorMap:Be,sheenRoughnessMap:xe,specularMap:it,specularColorMap:qe,specularIntensityMap:St,transmission:we,transmissionMap:I,thicknessMap:ce,gradientMap:W,opaque:b.transparent===!1&&b.blending===Xn&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:me,alphaHash:fe,combine:b.combine,mapUv:Ut&&y(b.map.channel),aoMapUv:U&&y(b.aoMap.channel),lightMapUv:Mn&&y(b.lightMap.channel),bumpMapUv:tt&&y(b.bumpMap.channel),normalMapUv:nt&&y(b.normalMap.channel),displacementMapUv:De&&y(b.displacementMap.channel),emissiveMapUv:Rt&&y(b.emissiveMap.channel),metalnessMapUv:Ie&&y(b.metalnessMap.channel),roughnessMapUv:A&&y(b.roughnessMap.channel),anisotropyMapUv:de&&y(b.anisotropyMap.channel),clearcoatMapUv:_e&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&y(b.sheenRoughnessMap.channel),specularMapUv:it&&y(b.specularMap.channel),specularColorMapUv:qe&&y(b.specularColorMap.channel),specularIntensityMapUv:St&&y(b.specularIntensityMap.channel),transmissionMapUv:I&&y(b.transmissionMap.channel),thicknessMapUv:ce&&y(b.thicknessMap.channel),alphaMapUv:K&&y(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(nt||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Ut||K),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:$e,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ut&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===It,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function f(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let w in b.defines)x.push(w),x.push(b.defines[w]);return b.isRawShaderMaterial===!1&&(E(x,b),M(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function E(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function M(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let x=g[b.type],w;if(x){let N=kn[x];w=qs.clone(N.uniforms)}else w=b.uniforms;return w}function C(b,x){let w;for(let N=0,B=h.length;N<B;N++){let G=h[N];if(G.cacheKey===x){w=G,++w.usedTimes;break}}return w===void 0&&(w=new tg(n,x,b,r),h.push(w)),w}function T(b){if(--b.usedTimes===0){let x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function sg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function rg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ch(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,y,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||rg),i.length>1&&i.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function og(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ch,n.set(i,[o])):s>=r.length?(o=new Ch,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ag(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ye};break;case"SpotLight":t={position:new F,direction:new F,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function lg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var cg=0;function hg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ug(n){let e=new ag,t=lg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new Lt,o=new Lt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,E=0,M=0,v=0,C=0,T=0,R=0;c.sort(hg);for(let b=0,x=c.length;b<x;b++){let w=c[b],N=w.color,B=w.intensity,G=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=N.r*B,u+=N.g*B,d+=N.b*B;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],B);R++}else if(w.isDirectionalLight){let q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let se=w.shadow,X=t.get(w);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=w.shadow.matrix,E++}i.directional[p]=q,p++}else if(w.isSpotLight){let q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(N).multiplyScalar(B),q.distance=G,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[y]=q;let se=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,se.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[y]=se.matrix,w.castShadow){let X=t.get(w);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=j,v++}y++}else if(w.isRectAreaLight){let q=e.get(w);q.color.copy(N).multiplyScalar(B),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=q,m++}else if(w.isPointLight){let q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){let se=w.shadow,X=t.get(w);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=w.shadow.matrix,M++}i.point[g]=q,g++}else if(w.isHemisphereLight){let q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(B),q.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[f]=q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==C||P.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=C,P.numLightProbes=R,i.version=cg++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let M=c[f];if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Fh(n){let e=new ug(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dg(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Fh(n),e.set(s,[a])):r>=o.length?(a=new Fh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Fi=class extends ci{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends ci{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(n,e,t){let i=new pr,s=new Me,r=new Me,o=new _t,a=new Fi({depthPacking:Xs}),l=new Rl,c={},h=t.maxTextureSize,u={[wi]:rn,[rn]:wi,[It]:It},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Wt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let f=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Wn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=f!==ni&&this.type===ni,G=f===ni&&this.type!==ni;for(let j=0,q=T.length;j<q;j++){let se=T[j],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let he=X.getFrameExtents();if(s.multiply(he),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,X.mapSize.y=r.y)),X.map===null||B===!0||G===!0){let Ce=this.type!==ni?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new $t(s.x,s.y,Ce),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ve=X.getViewportCount();for(let Ce=0;Ce<ve;Ce++){let $e=X.getViewport(Ce);o.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),N.viewport(o),X.updateMatrices(se,Ce),i=X.getFrustum(),v(R,P,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===ni&&E(X,P),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,w)};function E(T,R){let P=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $t(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,P,p,y,null)}function M(T,R,P,b){let x=null,w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)x=w;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let N=x.uuid,B=R.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let j=G[B];j===void 0&&(j=x.clone(),G[B]=j,R.addEventListener("dispose",C)),x=j}if(x.visible=R.visible,x.wireframe=R.wireframe,b===ni?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let N=n.properties.get(x);N.light=P}return x}function v(T,R,P,b,x){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===ni)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let B=e.update(T),G=T.material;if(Array.isArray(G)){let j=B.groups;for(let q=0,se=j.length;q<se;q++){let X=j[q],he=G[X.materialIndex];if(he&&he.visible){let ve=M(T,he,b,x);T.onBeforeShadow(n,T,R,P,B,ve,X),n.renderBufferDirect(P,null,B,ve,T,X),T.onAfterShadow(n,T,R,P,B,ve,X)}}}else if(G.visible){let j=M(T,G,b,x);T.onBeforeShadow(n,T,R,P,B,j,null),n.renderBufferDirect(P,null,B,j,T,null),T.onAfterShadow(n,T,R,P,B,j,null)}}let N=T.children;for(let B=0,G=N.length;B<G;B++)v(N[B],R,P,b,x)}function C(T){T.target.removeEventListener("dispose",C);for(let P in c){let b=c[P],x=T.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var gg={[La]:Da,[Ua]:Oa,[Na]:za,[Cs]:Ba,[Da]:La,[Oa]:Ua,[za]:Na,[Ba]:Cs};function yg(n,e){function t(){let I=!1,ce=new _t,W=null,K=new _t(0,0,0,0);return{setMask:function(me){W!==me&&!I&&(n.colorMask(me,me,me,me),W=me)},setLocked:function(me){I=me},setClear:function(me,fe,Ve,Bt,tn){tn===!0&&(me*=Bt,fe*=Bt,Ve*=Bt),ce.set(me,fe,Ve,Bt),K.equals(ce)===!1&&(n.clearColor(me,fe,Ve,Bt),K.copy(ce))},reset:function(){I=!1,W=null,K.set(-1,0,0,0)}}}function i(){let I=!1,ce=!1,W=null,K=null,me=null;return{setReversed:function(fe){if(ce!==fe){let Ve=e.get("EXT_clip_control");ce?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let Bt=me;me=null,this.setClear(Bt)}ce=fe},getReversed:function(){return ce},setTest:function(fe){fe?ue(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(fe){W!==fe&&!I&&(n.depthMask(fe),W=fe)},setFunc:function(fe){if(ce&&(fe=gg[fe]),K!==fe){switch(fe){case La:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Ua:n.depthFunc(n.LESS);break;case Cs:n.depthFunc(n.LEQUAL);break;case Na:n.depthFunc(n.EQUAL);break;case Ba:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=fe}},setLocked:function(fe){I=fe},setClear:function(fe){me!==fe&&(ce&&(fe=1-fe),n.clearDepth(fe),me=fe)},reset:function(){I=!1,W=null,K=null,me=null,ce=!1}}}function s(){let I=!1,ce=null,W=null,K=null,me=null,fe=null,Ve=null,Bt=null,tn=null;return{setTest:function(gt){I||(gt?ue(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(gt){ce!==gt&&!I&&(n.stencilMask(gt),ce=gt)},setFunc:function(gt,Rn,$n){(W!==gt||K!==Rn||me!==$n)&&(n.stencilFunc(gt,Rn,$n),W=gt,K=Rn,me=$n)},setOp:function(gt,Rn,$n){(fe!==gt||Ve!==Rn||Bt!==$n)&&(n.stencilOp(gt,Rn,$n),fe=gt,Ve=Rn,Bt=$n)},setLocked:function(gt){I=gt},setClear:function(gt){tn!==gt&&(n.clearStencil(gt),tn=gt)},reset:function(){I=!1,ce=null,W=null,K=null,me=null,fe=null,Ve=null,Bt=null,tn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,M=null,v=null,C=null,T=null,R=new ye(0,0,0),P=0,b=!1,x=null,w=null,N=null,B=null,G=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,se=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=se>=2);let he=null,ve={},Ce=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),xt=new _t().fromArray(Ce),$=new _t().fromArray($e);function re(I,ce,W,K){let me=new Uint8Array(4),fe=n.createTexture();n.bindTexture(I,fe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<W;Ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ce+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return fe}let Te={};Te[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Cs),tt(!1),nt(Dc),ue(n.CULL_FACE),U(Wn);function ue(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Ne(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function ke(I,ce){return u[I]!==ce?(n.bindFramebuffer(I,ce),u[I]=ce,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Je(I,ce){let W=p,K=!1;if(I){W=d.get(ce),W===void 0&&(W=[],d.set(ce,W));let me=I.textures;if(W.length!==me.length||W[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Ve=me.length;fe<Ve;fe++)W[fe]=n.COLOR_ATTACHMENT0+fe;W.length=me.length,K=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,K=!0);K&&n.drawBuffers(W)}function Ut(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let st={[qi]:n.FUNC_ADD,[Yu]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};st[$u]=n.MIN,st[Ju]=n.MAX;let Ht={[Qu]:n.ZERO,[Ku]:n.ONE,[ju]:n.SRC_COLOR,[Pa]:n.SRC_ALPHA,[rd]:n.SRC_ALPHA_SATURATE,[id]:n.DST_COLOR,[td]:n.DST_ALPHA,[ed]:n.ONE_MINUS_SRC_COLOR,[Ia]:n.ONE_MINUS_SRC_ALPHA,[sd]:n.ONE_MINUS_DST_COLOR,[nd]:n.ONE_MINUS_DST_ALPHA,[od]:n.CONSTANT_COLOR,[ad]:n.ONE_MINUS_CONSTANT_COLOR,[ld]:n.CONSTANT_ALPHA,[cd]:n.ONE_MINUS_CONSTANT_ALPHA};function U(I,ce,W,K,me,fe,Ve,Bt,tn,gt){if(I===Wn){y===!0&&(Ne(n.BLEND),y=!1);return}if(y===!1&&(ue(n.BLEND),y=!0),I!==qu){if(I!==m||gt!==b){if((f!==qi||v!==qi)&&(n.blendEquation(n.FUNC_ADD),f=qi,v=qi),gt)switch(I){case Xn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case on:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Xn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case on:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,M=null,C=null,T=null,R.set(0,0,0),P=0,m=I,b=gt}return}me=me||ce,fe=fe||W,Ve=Ve||K,(ce!==f||me!==v)&&(n.blendEquationSeparate(st[ce],st[me]),f=ce,v=me),(W!==E||K!==M||fe!==C||Ve!==T)&&(n.blendFuncSeparate(Ht[W],Ht[K],Ht[fe],Ht[Ve]),E=W,M=K,C=fe,T=Ve),(Bt.equals(R)===!1||tn!==P)&&(n.blendColor(Bt.r,Bt.g,Bt.b,tn),R.copy(Bt),P=tn),m=I,b=!1}function Mn(I,ce){I.side===It?Ne(n.CULL_FACE):ue(n.CULL_FACE);let W=I.side===rn;ce&&(W=!W),tt(W),I.blending===Xn&&I.transparent===!1?U(Wn):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function nt(I){I!==Wu?(ue(n.CULL_FACE),I!==w&&(I===Dc?n.cullFace(n.BACK):I===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),w=I}function De(I){I!==N&&(q&&n.lineWidth(I),N=I)}function Rt(I,ce,W){I?(ue(n.POLYGON_OFFSET_FILL),(B!==ce||G!==W)&&(n.polygonOffset(ce,W),B=ce,G=W)):Ne(n.POLYGON_OFFSET_FILL)}function Ie(I){I?ue(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function A(I){I===void 0&&(I=n.TEXTURE0+j-1),he!==I&&(n.activeTexture(I),he=I)}function _(I,ce,W){W===void 0&&(he===null?W=n.TEXTURE0+j-1:W=he);let K=ve[W];K===void 0&&(K={type:void 0,texture:void 0},ve[W]=K),(K.type!==I||K.texture!==ce)&&(he!==W&&(n.activeTexture(W),he=W),n.bindTexture(I,ce||Te[I]),K.type=I,K.texture=ce)}function O(){let I=ve[he];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(I){xt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),xt.copy(I))}function xe(I){$.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function it(I,ce){let W=c.get(ce);W===void 0&&(W=new WeakMap,c.set(ce,W));let K=W.get(I);K===void 0&&(K=n.getUniformBlockIndex(ce,I.name),W.set(I,K))}function qe(I,ce){let K=c.get(ce).get(I);l.get(ce)!==K&&(n.uniformBlockBinding(ce,K,I.__bindingPointIndex),l.set(ce,K))}function St(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,ve={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,E=null,M=null,v=null,C=null,T=null,R=new ye(0,0,0),P=0,b=!1,x=null,w=null,N=null,B=null,G=null,xt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Ne,bindFramebuffer:ke,drawBuffers:Je,useProgram:Ut,setBlending:U,setMaterial:Mn,setFlipSided:tt,setCullFace:nt,setLineWidth:De,setPolygonOffset:Rt,setScissorTest:Ie,activeTexture:A,bindTexture:_,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Ee,texImage3D:Ue,updateUBOMapping:it,uniformBlockBinding:qe,texStorage2D:rt,texStorage3D:te,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Be,viewport:xe,reset:St}}function Ph(n,e,t,i){let s=vg(i);switch(t){case qh:return n*e;case Zh:return n*e;case $h:return n*e*2;case Jh:return n*e/s.components*s.byteLength;case jl:return n*e/s.components*s.byteLength;case Qh:return n*e*2/s.components*s.byteLength;case ec:return n*e*2/s.components*s.byteLength;case Yh:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case tc:return n*e*4/s.components*s.byteLength;case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:case qa:return Math.max(n,16)*Math.max(e,8)/4;case Ga:case Xa:return Math.max(n,8)*Math.max(e,8)/2;case Ya:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ao:case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Kh:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vg(n){switch(n){case ai:case Gh:return{byteLength:1,components:1};case fr:case Wh:case fn:return{byteLength:2,components:1};case Ql:case Kl:return{byteLength:2,components:4};case li:case Jl:case si:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function _g(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):uo("canvas")}function y(A,_,O){let Q=1,ee=Ie(A);if((ee.width>O||ee.height>O)&&(Q=O/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Z=Math.floor(Q*ee.width),we=Math.floor(Q*ee.height);u===void 0&&(u=g(Z,we));let de=_?g(Z,we):u;return de.width=Z,de.height=we,de.getContext("2d").drawImage(A,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+we+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,_,O,Q,ee=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=_;if(_===n.RED&&(O===n.FLOAT&&(Z=n.R32F),O===n.HALF_FLOAT&&(Z=n.R16F),O===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.R8UI),O===n.UNSIGNED_SHORT&&(Z=n.R16UI),O===n.UNSIGNED_INT&&(Z=n.R32UI),O===n.BYTE&&(Z=n.R8I),O===n.SHORT&&(Z=n.R16I),O===n.INT&&(Z=n.R32I)),_===n.RG&&(O===n.FLOAT&&(Z=n.RG32F),O===n.HALF_FLOAT&&(Z=n.RG16F),O===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RG8UI),O===n.UNSIGNED_SHORT&&(Z=n.RG16UI),O===n.UNSIGNED_INT&&(Z=n.RG32UI),O===n.BYTE&&(Z=n.RG8I),O===n.SHORT&&(Z=n.RG16I),O===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),O===n.UNSIGNED_INT&&(Z=n.RGB32UI),O===n.BYTE&&(Z=n.RGB8I),O===n.SHORT&&(Z=n.RGB16I),O===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),O===n.UNSIGNED_INT&&(Z=n.RGBA32UI),O===n.BYTE&&(Z=n.RGBA8I),O===n.SHORT&&(Z=n.RGBA16I),O===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),_===n.RGBA){let we=ee?Co:ot.getTransfer(Q);O===n.FLOAT&&(Z=n.RGBA32F),O===n.HALF_FLOAT&&(Z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Z=we===yt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(A,_){let O;return A?_===null||_===li||_===Is?O=n.DEPTH24_STENCIL8:_===si?O=n.DEPTH32F_STENCIL8:_===fr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Is?O=n.DEPTH_COMPONENT24:_===si?O=n.DEPTH_COMPONENT32F:_===fr&&(O=n.DEPTH_COMPONENT16),O}function C(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Gn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){let _=A.target;_.removeEventListener("dispose",T),P(_),_.isVideoTexture&&h.delete(_)}function R(A){let _=A.target;_.removeEventListener("dispose",R),x(_)}function P(A){let _=i.get(A);if(_.__webglInit===void 0)return;let O=A.source,Q=d.get(O);if(Q){let ee=Q[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(A),Object.keys(Q).length===0&&d.delete(O)}i.remove(A)}function b(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let O=A.source,Q=d.get(O);delete Q[_.__cacheKey],o.memory.textures--}function x(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ee=0;ee<_.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=A.textures;for(let Q=0,ee=O.length;Q<ee;Q++){let Z=i.get(O[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[Q])}i.remove(A)}let w=0;function N(){w=0}function B(){let A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function G(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function j(A,_){let O=i.get(A);if(A.isVideoTexture&&De(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,A,_);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function q(A,_){let O=i.get(A);if(A.version>0&&O.__version!==A.version){$(O,A,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function se(A,_){let O=i.get(A);if(A.version>0&&O.__version!==A.version){$(O,A,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function X(A,_){let O=i.get(A);if(A.version>0&&O.__version!==A.version){re(O,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}let he={[An]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},ve={[Dn]:n.NEAREST,[_d]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ce={[Md]:n.NEVER,[Rd]:n.ALWAYS,[Sd]:n.LESS,[eu]:n.LEQUAL,[bd]:n.EQUAL,[wd]:n.GEQUAL,[Ad]:n.GREATER,[Td]:n.NOTEQUAL};function $e(A,_){if(_.type===si&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gn||_.magFilter===Ko||_.magFilter===Fr||_.magFilter===$i||_.minFilter===Gn||_.minFilter===Ko||_.minFilter===Fr||_.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,he[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ve[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Dn||_.minFilter!==Fr&&_.minFilter!==$i||_.type===si&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function xt(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));let Q=_.source,ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));let Z=G(_);if(Z!==A.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[Z].usedTimes++;let we=ee[A.__cacheKey];we!==void 0&&(ee[A.__cacheKey].usedTimes--,we.usedTimes===0&&b(_)),A.__cacheKey=Z,A.__webglTexture=ee[Z].texture}return O}function $(A,_,O){let Q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=n.TEXTURE_3D);let ee=xt(A,_),Z=_.source;t.bindTexture(Q,A.__webglTexture,n.TEXTURE0+O);let we=i.get(Z);if(Z.version!==we.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);let de=ot.getPrimaries(ot.workingColorSpace),_e=_.colorSpace===bi?null:ot.getPrimaries(_.colorSpace),rt=_.colorSpace===bi||de===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let te=y(_.image,!1,s.maxTextureSize);te=Rt(_,te);let Ee=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),Be=M(_.internalFormat,Ee,Ue,_.colorSpace,_.isVideoTexture);$e(Q,_);let xe,it=_.mipmaps,qe=_.isVideoTexture!==!0,St=we.__version===void 0||ee===!0,I=Z.dataReady,ce=C(_,te);if(_.isDepthTexture)Be=v(_.format===Ls,_.type),St&&(qe?t.texStorage2D(n.TEXTURE_2D,1,Be,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Be,te.width,te.height,0,Ee,Ue,null));else if(_.isDataTexture)if(it.length>0){qe&&St&&t.texStorage2D(n.TEXTURE_2D,ce,Be,it[0].width,it[0].height);for(let W=0,K=it.length;W<K;W++)xe=it[W],qe?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,xe.width,xe.height,Ee,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,W,Be,xe.width,xe.height,0,Ee,Ue,xe.data);_.generateMipmaps=!1}else qe?(St&&t.texStorage2D(n.TEXTURE_2D,ce,Be,te.width,te.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Ee,Ue,te.data)):t.texImage2D(n.TEXTURE_2D,0,Be,te.width,te.height,0,Ee,Ue,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){qe&&St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Be,it[0].width,it[0].height,te.depth);for(let W=0,K=it.length;W<K;W++)if(xe=it[W],_.format!==Ln)if(Ee!==null)if(qe){if(I)if(_.layerUpdates.size>0){let me=Ph(xe.width,xe.height,_.format,_.type);for(let fe of _.layerUpdates){let Ve=xe.data.subarray(fe*me/xe.data.BYTES_PER_ELEMENT,(fe+1)*me/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,fe,xe.width,xe.height,1,Ee,Ve)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,xe.width,xe.height,te.depth,Ee,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Be,xe.width,xe.height,te.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,xe.width,xe.height,te.depth,Ee,Ue,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Be,xe.width,xe.height,te.depth,0,Ee,Ue,xe.data)}else{qe&&St&&t.texStorage2D(n.TEXTURE_2D,ce,Be,it[0].width,it[0].height);for(let W=0,K=it.length;W<K;W++)xe=it[W],_.format!==Ln?Ee!==null?qe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,xe.width,xe.height,Ee,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,xe.width,xe.height,Ee,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,W,Be,xe.width,xe.height,0,Ee,Ue,xe.data)}else if(_.isDataArrayTexture)if(qe){if(St&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Be,te.width,te.height,te.depth),I)if(_.layerUpdates.size>0){let W=Ph(te.width,te.height,_.format,_.type);for(let K of _.layerUpdates){let me=te.data.subarray(K*W/te.data.BYTES_PER_ELEMENT,(K+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,Ee,Ue,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Ee,Ue,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,te.width,te.height,te.depth,0,Ee,Ue,te.data);else if(_.isData3DTexture)qe?(St&&t.texStorage3D(n.TEXTURE_3D,ce,Be,te.width,te.height,te.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Ee,Ue,te.data)):t.texImage3D(n.TEXTURE_3D,0,Be,te.width,te.height,te.depth,0,Ee,Ue,te.data);else if(_.isFramebufferTexture){if(St)if(qe)t.texStorage2D(n.TEXTURE_2D,ce,Be,te.width,te.height);else{let W=te.width,K=te.height;for(let me=0;me<ce;me++)t.texImage2D(n.TEXTURE_2D,me,Be,W,K,0,Ee,Ue,null),W>>=1,K>>=1}}else if(it.length>0){if(qe&&St){let W=Ie(it[0]);t.texStorage2D(n.TEXTURE_2D,ce,Be,W.width,W.height)}for(let W=0,K=it.length;W<K;W++)xe=it[W],qe?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ee,Ue,xe):t.texImage2D(n.TEXTURE_2D,W,Be,Ee,Ue,xe);_.generateMipmaps=!1}else if(qe){if(St){let W=Ie(te);t.texStorage2D(n.TEXTURE_2D,ce,Be,W.width,W.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ue,te)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ee,Ue,te);m(_)&&f(Q),we.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function re(A,_,O){if(_.image.length!==6)return;let Q=xt(A,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);let Z=i.get(ee);if(ee.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);let we=ot.getPrimaries(ot.workingColorSpace),de=_.colorSpace===bi?null:ot.getPrimaries(_.colorSpace),_e=_.colorSpace===bi||we===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let rt=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let K=0;K<6;K++)!rt&&!te?Ee[K]=y(_.image[K],!0,s.maxCubemapSize):Ee[K]=te?_.image[K].image:_.image[K],Ee[K]=Rt(_,Ee[K]);let Ue=Ee[0],Be=r.convert(_.format,_.colorSpace),xe=r.convert(_.type),it=M(_.internalFormat,Be,xe,_.colorSpace),qe=_.isVideoTexture!==!0,St=Z.__version===void 0||Q===!0,I=ee.dataReady,ce=C(_,Ue);$e(n.TEXTURE_CUBE_MAP,_);let W;if(rt){qe&&St&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,it,Ue.width,Ue.height);for(let K=0;K<6;K++){W=Ee[K].mipmaps;for(let me=0;me<W.length;me++){let fe=W[me];_.format!==Ln?Be!==null?qe?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,fe.width,fe.height,Be,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,it,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,fe.width,fe.height,Be,xe,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,it,fe.width,fe.height,0,Be,xe,fe.data)}}}else{if(W=_.mipmaps,qe&&St){W.length>0&&ce++;let K=Ie(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,it,K.width,K.height)}for(let K=0;K<6;K++)if(te){qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee[K].width,Ee[K].height,Be,xe,Ee[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,it,Ee[K].width,Ee[K].height,0,Be,xe,Ee[K].data);for(let me=0;me<W.length;me++){let Ve=W[me].image[K].image;qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Ve.width,Ve.height,Be,xe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,it,Ve.width,Ve.height,0,Be,xe,Ve.data)}}else{qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Be,xe,Ee[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,it,Be,xe,Ee[K]);for(let me=0;me<W.length;me++){let fe=W[me];qe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Be,xe,fe.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,it,Be,xe,fe.image[K])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Te(A,_,O,Q,ee,Z){let we=r.convert(O.format,O.colorSpace),de=r.convert(O.type),_e=M(O.internalFormat,we,de,O.colorSpace),rt=i.get(_),te=i.get(O);if(te.__renderTarget=_,!rt.__hasExternalTextures){let Ee=Math.max(1,_.width>>Z),Ue=Math.max(1,_.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,_e,Ee,Ue,_.depth,0,we,de,null):t.texImage2D(ee,Z,_e,Ee,Ue,0,we,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),nt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,te.__webglTexture,0,tt(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,te.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(A,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let Q=_.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,Z=v(_.stencilBuffer,ee),we=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=tt(_);nt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,Z,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,A)}else{let Q=_.textures;for(let ee=0;ee<Q.length;ee++){let Z=Q[ee],we=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),_e=M(Z.internalFormat,we,de,Z.colorSpace),rt=tt(_);O&&nt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,_e,_.width,_.height):nt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,_e,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,_e,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);let ee=Q.__webglTexture,Z=tt(_);if(_.depthTexture.format===Ts)nt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Ls)nt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ke(A){let _=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=Q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ne(_.__webglFramebuffer,A)}else if(O){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=n.createRenderbuffer(),ue(_.__webglDepthbuffer[Q],A,!1);else{let ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ue(_.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(A,_,O){let Q=i.get(A);_!==void 0&&Te(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ke(A)}function Ut(A){let _=A.texture,O=i.get(A),Q=i.get(_);A.addEventListener("dispose",R);let ee=A.textures,Z=A.isWebGLCubeRenderTarget===!0,we=ee.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=_.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let _e=0;_e<_.mipmaps.length;_e++)O.__webglFramebuffer[de][_e]=n.createFramebuffer()}else O.__webglFramebuffer[de]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)O.__webglFramebuffer[de]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(we)for(let de=0,_e=ee.length;de<_e;de++){let rt=i.get(ee[de]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&nt(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){let _e=ee[de];O.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[de]);let rt=r.convert(_e.format,_e.colorSpace),te=r.convert(_e.type),Ee=M(_e.internalFormat,rt,te,_e.colorSpace,A.isXRRenderTarget===!0),Ue=tt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ee,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,O.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),$e(n.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Te(O.__webglFramebuffer[de][_e],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else Te(O.__webglFramebuffer[de],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,_e=ee.length;de<_e;de++){let rt=ee[de],te=i.get(rt);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),$e(n.TEXTURE_2D,rt),Te(O.__webglFramebuffer,A,rt,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(rt)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),$e(de,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Te(O.__webglFramebuffer[_e],A,_,n.COLOR_ATTACHMENT0,de,_e);else Te(O.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,de,0);m(_)&&f(de),t.unbindTexture()}A.depthBuffer&&ke(A)}function st(A){let _=A.textures;for(let O=0,Q=_.length;O<Q;O++){let ee=_[O];if(m(ee)){let Z=E(A),we=i.get(ee).__webglTexture;t.bindTexture(Z,we),f(Z),t.unbindTexture()}}}let Ht=[],U=[];function Mn(A){if(A.samples>0){if(nt(A)===!1){let _=A.textures,O=A.width,Q=A.height,ee=n.COLOR_BUFFER_BIT,Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(A),de=_.length>1;if(de)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);let rt=i.get(_[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,O,Q,0,0,O,Q,ee,n.NEAREST),l===!0&&(Ht.length=0,U.length=0,Ht.push(n.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ht.push(Z),U.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);let rt=i.get(_[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,rt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function tt(A){return Math.min(s.maxSamples,A.samples)}function nt(A){let _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function De(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Rt(A,_){let O=A.colorSpace,Q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ii&&O!==bi&&(ot.getTransfer(O)===yt?(Q!==Ln||ee!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=X,this.rebindTextures=Je,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=nt}function Eg(n,e){function t(i,s=bi){let r,o=ot.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===Ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===Jl)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===fn)return n.HALF_FLOAT;if(i===qh)return n.ALPHA;if(i===Yh)return n.RGB;if(i===Ln)return n.RGBA;if(i===Zh)return n.LUMINANCE;if(i===$h)return n.LUMINANCE_ALPHA;if(i===Ts)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===Jh)return n.RED;if(i===jl)return n.RED_INTEGER;if(i===Qh)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===tc)return n.RGBA_INTEGER;if(i===io||i===so||i===ro||i===oo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Wa||i===Xa||i===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===Za||i===$a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ya||i===Za)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$a)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ja||i===Qa||i===Ka||i===ja||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===hl||i===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ao)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===dl||i===fl||i===pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Cl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pe=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xg={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new xn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Jt({vertexShader:Mg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new Xe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pl=class extends Ri{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Fl,m=t.getContextAttributes(),f=null,E=null,M=[],v=[],C=new Me,T=null,R=new jt;R.viewport=new _t;let P=new jt;P.viewport=new _t;let b=[R,P],x=new Cl,w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=M[$];return re===void 0&&(re=new dr,M[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=M[$];return re===void 0&&(re=new dr,M[$]=re),re.getGripSpace()},this.getHand=function($){let re=M[$];return re===void 0&&(re=new dr,M[$]=re),re.getHandSpace()};function B($){let re=v.indexOf($.inputSource);if(re===-1)return;let Te=M[re];Te!==void 0&&(Te.update($.inputSource,$.frame,c||o),Te.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let $=0;$<M.length;$++){let re=v[$];re!==null&&(v[$]=null,M[$].disconnect(re))}w=null,N=null,y.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new $t(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,Te=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Ls:Ts,Te=m.stencil?Is:li);let Ne={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new $t(d.textureWidth,d.textureHeight,{format:Ln,type:ai,depthTexture:new Bs(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j($){for(let re=0;re<$.removed.length;re++){let Te=$.removed[re],ue=v.indexOf(Te);ue>=0&&(v[ue]=null,M[ue].disconnect(Te))}for(let re=0;re<$.added.length;re++){let Te=$.added[re],ue=v.indexOf(Te);if(ue===-1){for(let ke=0;ke<M.length;ke++)if(ke>=v.length){v.push(Te),ue=ke;break}else if(v[ke]===null){v[ke]=Te,ue=ke;break}if(ue===-1)break}let Ne=M[ue];Ne&&Ne.connect(Te)}}let q=new F,se=new F;function X($,re,Te){q.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(Te.matrixWorld);let ue=q.distanceTo(se),Ne=re.projectionMatrix.elements,ke=Te.projectionMatrix.elements,Je=Ne[14]/(Ne[10]-1),Ut=Ne[14]/(Ne[10]+1),st=(Ne[9]+1)/Ne[5],Ht=(Ne[9]-1)/Ne[5],U=(Ne[8]-1)/Ne[0],Mn=(ke[8]+1)/ke[0],tt=Je*U,nt=Je*Mn,De=ue/(-U+Mn),Rt=De*-U;if(re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Rt),$.translateZ(De),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Ie=Je+De,A=Ut+De,_=tt-Rt,O=nt+(ue-Rt),Q=st*Ut/A*Ie,ee=Ht*Ut/A*Ie;$.projectionMatrix.makePerspective(_,O,Q,ee,Ie,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let re=$.near,Te=$.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),x.near=P.near=R.near=re,x.far=P.far=R.far=Te,(w!==x.near||N!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,N=x.far),R.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,x.layers.mask=R.layers.mask|P.layers.mask;let ue=$.parent,Ne=x.cameras;he(x,ue);for(let ke=0;ke<Ne.length;ke++)he(Ne[ke],ue);Ne.length===2?X(x,R,P):x.projectionMatrix.copy(R.projectionMatrix),ve($,x,ue)};function ve($,re,Te){Te===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(Te.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ho*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Ce=null;function $e($,re){if(h=re.getViewerPose(c||o),g=re,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ue=!1;Te.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let ke=0;ke<Te.length;ke++){let Je=Te[ke],Ut=null;if(p!==null)Ut=p.getViewport(Je);else{let Ht=u.getViewSubImage(d,Je);Ut=Ht.viewport,ke===0&&(e.setRenderTargetTextures(E,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(E))}let st=b[ke];st===void 0&&(st=new jt,st.layers.enable(ke),st.viewport=new _t,b[ke]=st),st.matrix.fromArray(Je.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Je.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ke===0&&(x.matrix.copy(st.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(st)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let ke=u.getDepthInformation(Te[0]);ke&&ke.isValid&&ke.texture&&y.init(e,ke,s.renderState)}}for(let Te=0;Te<M.length;Te++){let ue=v[Te],Ne=M[Te];ue!==null&&Ne!==void 0&&Ne.update(ue,re,c||o)}Ce&&Ce($,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let xt=new su;xt.setAnimationLoop($e),this.setAnimationLoop=function($){Ce=$},this.dispose=function(){}}},Wi=new Yn,bg=new Lt;function Ag(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,iu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===rn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===rn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,Wi.copy(v),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(Wi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Tg(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){let v=M.program;i.uniformBlockBinding(E,v)}function c(E,M){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));let C=M.program;i.updateUBOMapping(E,C);let T=e.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function h(E){let M=u();E.__bindingPointIndex=M;let v=n.createBuffer(),C=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let M=s[E.id],v=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,R=v.length;T<R;T++){let P=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,x=P.length;b<x;b++){let w=P[b];if(p(w,T,b,C)===!0){let N=w.__offset,B=Array.isArray(w.value)?w.value:[w.value],G=0;for(let j=0;j<B.length;j++){let q=B[j],se=y(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+G,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,G),G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,v,C){let T=E.value,R=M+"_"+v;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let P=C[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(E){let M=E.uniforms,v=0,C=16;for(let R=0,P=M.length;R<P;R++){let b=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,w=b.length;x<w;x++){let N=b[x],B=Array.isArray(N.value)?N.value:[N.value];for(let G=0,j=B.length;G<j;G++){let q=B[G],se=y(q),X=v%C,he=X%se.boundary,ve=X+he;v+=he,ve!==0&&C-ve<se.storage&&(v+=C-ve),N.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=se.storage}}}let T=v%C;return T>0&&(v+=C-T),E.__size=v,E.__cache={},this}function y(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){let M=E.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Mo=class{constructor(e={}){let{canvas:t=Fd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=qn,this.toneMappingExposure=1;let v=this,C=!1,T=0,R=0,P=null,b=-1,x=null,w=new _t,N=new _t,B=null,G=new ye(0),j=0,q=t.width,se=t.height,X=1,he=null,ve=null,Ce=new _t(0,0,q,se),$e=new _t(0,0,q,se),xt=!1,$=new pr,re=!1,Te=!1,ue=new Lt,Ne=new Lt,ke=new F,Je=new _t,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function Ht(){return P===null?X:1}let U=i;function Mn(S,L){return t.getContext(S,L)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zl}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){let L="webgl2";if(U=Mn(L,S),U===null)throw Mn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let tt,nt,De,Rt,Ie,A,_,O,Q,ee,Z,we,de,_e,rt,te,Ee,Ue,Be,xe,it,qe,St,I;function ce(){tt=new V0(U),tt.init(),qe=new Eg(U,tt),nt=new N0(U,tt,e,qe),De=new yg(U,tt),nt.reverseDepthBuffer&&d&&De.buffers.depth.setReversed(!0),Rt=new X0(U),Ie=new sg,A=new _g(U,tt,De,Ie,nt,qe,Rt),_=new O0(v),O=new k0(v),Q=new Qd(U),St=new D0(U,Q),ee=new G0(U,Q,Rt,St),Z=new Y0(U,ee,Q,Rt),Be=new q0(U,nt,A),te=new B0(Ie),we=new ig(v,_,O,tt,nt,St,te),de=new Ag(v,Ie),_e=new og,rt=new dg(tt),Ue=new L0(v,_,O,De,Z,p,l),Ee=new mg(v,Z,nt),I=new Tg(U,Rt,nt,De),xe=new U0(U,tt,Rt),it=new W0(U,tt,Rt),Rt.programs=we.programs,v.capabilities=nt,v.extensions=tt,v.properties=Ie,v.renderLists=_e,v.shadowMap=Ee,v.state=De,v.info=Rt}ce();let W=new Pl(v,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(q,se,!1))},this.getSize=function(S){return S.set(q,se)},this.setSize=function(S,L,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,se=L,t.width=Math.floor(S*X),t.height=Math.floor(L*X),z===!0&&(t.style.width=S+"px",t.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(q*X,se*X).floor()},this.setDrawingBufferSize=function(S,L,z){q=S,se=L,X=z,t.width=Math.floor(S*z),t.height=Math.floor(L*z),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,L,z,H){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,L,z,H),De.viewport(w.copy(Ce).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy($e)},this.setScissor=function(S,L,z,H){S.isVector4?$e.set(S.x,S.y,S.z,S.w):$e.set(S,L,z,H),De.scissor(N.copy($e).multiplyScalar(X).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(S){De.setScissorTest(xt=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(S=!0,L=!0,z=!0){let H=0;if(S){let D=!1;if(P!==null){let ne=P.texture.format;D=ne===tc||ne===ec||ne===jl}if(D){let ne=P.texture.type,pe=ne===ai||ne===li||ne===fr||ne===Is||ne===Ql||ne===Kl,Se=Ue.getClearColor(),be=Ue.getClearAlpha(),Oe=Se.r,Ge=Se.g,Ae=Se.b;pe?(g[0]=Oe,g[1]=Ge,g[2]=Ae,g[3]=be,U.clearBufferuiv(U.COLOR,0,g)):(y[0]=Oe,y[1]=Ge,y[2]=Ae,y[3]=be,U.clearBufferiv(U.COLOR,0,y))}else H|=U.COLOR_BUFFER_BIT}L&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),rt.dispose(),Ie.dispose(),_.dispose(),O.dispose(),Z.dispose(),St.dispose(),I.dispose(),we.dispose(),W.dispose(),W.removeEventListener("sessionstart",Tc),W.removeEventListener("sessionend",wc),Oi.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=Rt.autoReset,L=Ee.enabled,z=Ee.autoUpdate,H=Ee.needsUpdate,D=Ee.type;ce(),Rt.autoReset=S,Ee.enabled=L,Ee.autoUpdate=z,Ee.needsUpdate=H,Ee.type=D}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){let L=S.target;L.removeEventListener("dispose",Ve),Bt(L)}function Bt(S){tn(S),Ie.remove(S)}function tn(S){let L=Ie.get(S).programs;L!==void 0&&(L.forEach(function(z){we.releaseProgram(z)}),S.isShaderMaterial&&we.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,z,H,D,ne){L===null&&(L=Ut);let pe=D.isMesh&&D.matrixWorld.determinant()<0,Se=ku(S,L,z,H,D);De.setMaterial(H,pe);let be=z.index,Oe=1;if(H.wireframe===!0){if(be=ee.getWireframeAttribute(z),be===void 0)return;Oe=2}let Ge=z.drawRange,Ae=z.attributes.position,lt=Ge.start*Oe,bt=(Ge.start+Ge.count)*Oe;ne!==null&&(lt=Math.max(lt,ne.start*Oe),bt=Math.min(bt,(ne.start+ne.count)*Oe)),be!==null?(lt=Math.max(lt,0),bt=Math.min(bt,be.count)):Ae!=null&&(lt=Math.max(lt,0),bt=Math.min(bt,Ae.count));let Ct=bt-lt;if(Ct<0||Ct===1/0)return;St.setup(D,H,Se,z,be);let un,pt=xe;if(be!==null&&(un=Q.get(be),pt=it,pt.setIndex(un)),D.isMesh)H.wireframe===!0?(De.setLineWidth(H.wireframeLinewidth*Ht()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(D.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),De.setLineWidth(Re*Ht()),D.isLineSegments?pt.setMode(U.LINES):D.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else D.isPoints?pt.setMode(U.POINTS):D.isSprite&&pt.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)pt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))pt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Re=D._multiDrawStarts,Jn=D._multiDrawCounts,mt=D._multiDrawCount,Cn=be?Q.get(be).bytesPerElement:1,os=Ie.get(H).currentProgram.getUniforms();for(let vn=0;vn<mt;vn++)os.setValue(U,"_gl_DrawID",vn),pt.render(Re[vn]/Cn,Jn[vn])}else if(D.isInstancedMesh)pt.renderInstances(lt,Ct,D.count);else if(z.isInstancedBufferGeometry){let Re=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Jn=Math.min(z.instanceCount,Re);pt.renderInstances(lt,Ct,Jn)}else pt.render(lt,Ct)};function gt(S,L,z){S.transparent===!0&&S.side===It&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,Cr(S,L,z),S.side=wi,S.needsUpdate=!0,Cr(S,L,z),S.side=It):Cr(S,L,z)}this.compile=function(S,L,z=null){z===null&&(z=S),f=rt.get(z),f.init(L),M.push(f),z.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),S!==z&&S.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let H=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ne=D.material;if(ne)if(Array.isArray(ne))for(let pe=0;pe<ne.length;pe++){let Se=ne[pe];gt(Se,z,D),H.add(Se)}else gt(ne,z,D),H.add(ne)}),M.pop(),f=null,H},this.compileAsync=function(S,L,z=null){let H=this.compile(S,L,z);return new Promise(D=>{function ne(){if(H.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){D(S);return}setTimeout(ne,10)}tt.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Rn=null;function $n(S){Rn&&Rn(S)}function Tc(){Oi.stop()}function wc(){Oi.start()}let Oi=new su;Oi.setAnimationLoop($n),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(S){Rn=S,W.setAnimationLoop(S),S===null?Oi.stop():Oi.start()},W.addEventListener("sessionstart",Tc),W.addEventListener("sessionend",wc),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,L,P),f=rt.get(S,M.length),f.init(L),M.push(f),Ne.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),$.setFromProjectionMatrix(Ne),Te=this.localClippingEnabled,re=te.init(this.clippingPlanes,Te),m=_e.get(S,E.length),m.init(),E.push(m),W.enabled===!0&&W.isPresenting===!0){let ne=v.xr.getDepthSensingMesh();ne!==null&&Qo(ne,L,-1/0,v.sortObjects)}Qo(S,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(he,ve),st=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,st&&Ue.addToRenderList(m,S),this.info.render.frame++,re===!0&&te.beginShadows();let z=f.state.shadowsArray;Ee.render(z,S,L),re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,D=m.transmissive;if(f.setupLights(),L.isArrayCamera){let ne=L.cameras;if(D.length>0)for(let pe=0,Se=ne.length;pe<Se;pe++){let be=ne[pe];Cc(H,D,S,be)}st&&Ue.render(S);for(let pe=0,Se=ne.length;pe<Se;pe++){let be=ne[pe];Rc(m,S,be,be.viewport)}}else D.length>0&&Cc(H,D,S,L),st&&Ue.render(S),Rc(m,S,L);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(v,S,L),St.resetDefaultState(),b=-1,x=null,M.pop(),M.length>0?(f=M[M.length-1],re===!0&&te.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Qo(S,L,z,H){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){H&&Je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);let pe=Z.update(S),Se=S.material;Se.visible&&m.push(S,pe,Se,z,Je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){let pe=Z.update(S),Se=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Je.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Je.copy(pe.boundingSphere.center)),Je.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Se)){let be=pe.groups;for(let Oe=0,Ge=be.length;Oe<Ge;Oe++){let Ae=be[Oe],lt=Se[Ae.materialIndex];lt&&lt.visible&&m.push(S,pe,lt,z,Je.z,Ae)}}else Se.visible&&m.push(S,pe,Se,z,Je.z,null)}}let ne=S.children;for(let pe=0,Se=ne.length;pe<Se;pe++)Qo(ne[pe],L,z,H)}function Rc(S,L,z,H){let D=S.opaque,ne=S.transmissive,pe=S.transparent;f.setupLightsView(z),re===!0&&te.setGlobalState(v.clippingPlanes,z),H&&De.viewport(w.copy(H)),D.length>0&&Rr(D,L,z),ne.length>0&&Rr(ne,L,z),pe.length>0&&Rr(pe,L,z),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Cc(S,L,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new $t(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?fn:ai,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let ne=f.state.transmissionRenderTarget[H.id],pe=H.viewport||w;ne.setSize(pe.z,pe.w);let Se=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(G),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),st&&Ue.render(z);let be=v.toneMapping;v.toneMapping=qn;let Oe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),re===!0&&te.setGlobalState(v.clippingPlanes,H),Rr(S,z,H),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ae=0,lt=L.length;Ae<lt;Ae++){let bt=L[Ae],Ct=bt.object,un=bt.geometry,pt=bt.material,Re=bt.group;if(pt.side===It&&Ct.layers.test(H.layers)){let Jn=pt.side;pt.side=rn,pt.needsUpdate=!0,Fc(Ct,z,H,un,pt,Re),pt.side=Jn,pt.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}v.setRenderTarget(Se),v.setClearColor(G,j),Oe!==void 0&&(H.viewport=Oe),v.toneMapping=be}function Rr(S,L,z){let H=L.isScene===!0?L.overrideMaterial:null;for(let D=0,ne=S.length;D<ne;D++){let pe=S[D],Se=pe.object,be=pe.geometry,Oe=H===null?pe.material:H,Ge=pe.group;Se.layers.test(z.layers)&&Fc(Se,L,z,be,Oe,Ge)}}function Fc(S,L,z,H,D,ne){S.onBeforeRender(v,L,z,H,D,ne),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(v,L,z,H,S,ne),D.transparent===!0&&D.side===It&&D.forceSinglePass===!1?(D.side=rn,D.needsUpdate=!0,v.renderBufferDirect(z,L,H,D,S,ne),D.side=wi,D.needsUpdate=!0,v.renderBufferDirect(z,L,H,D,S,ne),D.side=It):v.renderBufferDirect(z,L,H,D,S,ne),S.onAfterRender(v,L,z,H,D,ne)}function Cr(S,L,z){L.isScene!==!0&&(L=Ut);let H=Ie.get(S),D=f.state.lights,ne=f.state.shadowsArray,pe=D.state.version,Se=we.getParameters(S,D.state,ne,L,z),be=we.getProgramCacheKey(Se),Oe=H.programs;H.environment=S.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(S.isMeshStandardMaterial?O:_).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Ve),Oe=new Map,H.programs=Oe);let Ge=Oe.get(be);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===pe)return Ic(S,Se),Ge}else Se.uniforms=we.getUniforms(S),S.onBeforeCompile(Se,v),Ge=we.acquireProgram(Se,be),Oe.set(be,Ge),H.uniforms=Se.uniforms;let Ae=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=te.uniform),Ic(S,Se),H.needsLights=Gu(S),H.lightsStateVersion=pe,H.needsLights&&(Ae.ambientLightColor.value=D.state.ambient,Ae.lightProbe.value=D.state.probe,Ae.directionalLights.value=D.state.directional,Ae.directionalLightShadows.value=D.state.directionalShadow,Ae.spotLights.value=D.state.spot,Ae.spotLightShadows.value=D.state.spotShadow,Ae.rectAreaLights.value=D.state.rectArea,Ae.ltc_1.value=D.state.rectAreaLTC1,Ae.ltc_2.value=D.state.rectAreaLTC2,Ae.pointLights.value=D.state.point,Ae.pointLightShadows.value=D.state.pointShadow,Ae.hemisphereLights.value=D.state.hemi,Ae.directionalShadowMap.value=D.state.directionalShadowMap,Ae.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Ae.spotShadowMap.value=D.state.spotShadowMap,Ae.spotLightMatrix.value=D.state.spotLightMatrix,Ae.spotLightMap.value=D.state.spotLightMap,Ae.pointShadowMap.value=D.state.pointShadowMap,Ae.pointShadowMatrix.value=D.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Pc(S){if(S.uniformsList===null){let L=S.currentProgram.getUniforms();S.uniformsList=Rs.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function Ic(S,L){let z=Ie.get(S);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function ku(S,L,z,H,D){L.isScene!==!0&&(L=Ut),A.resetTextureUnits();let ne=L.fog,pe=H.isMeshStandardMaterial?L.environment:null,Se=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ii,be=(H.isMeshStandardMaterial?O:_).get(H.envMap||pe),Oe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ge=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!z.morphAttributes.position,lt=!!z.morphAttributes.normal,bt=!!z.morphAttributes.color,Ct=qn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=v.toneMapping);let un=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pt=un!==void 0?un.length:0,Re=Ie.get(H),Jn=f.state.lights;if(re===!0&&(Te===!0||S!==x)){let Sn=S===x&&H.id===b;te.setState(H,S,Sn)}let mt=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Jn.state.version||Re.outputColorSpace!==Se||D.isBatchedMesh&&Re.batching===!1||!D.isBatchedMesh&&Re.batching===!0||D.isBatchedMesh&&Re.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Re.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Re.instancing===!1||!D.isInstancedMesh&&Re.instancing===!0||D.isSkinnedMesh&&Re.skinning===!1||!D.isSkinnedMesh&&Re.skinning===!0||D.isInstancedMesh&&Re.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Re.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Re.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Re.instancingMorph===!1&&D.morphTexture!==null||Re.envMap!==be||H.fog===!0&&Re.fog!==ne||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==te.numPlanes||Re.numIntersection!==te.numIntersection)||Re.vertexAlphas!==Oe||Re.vertexTangents!==Ge||Re.morphTargets!==Ae||Re.morphNormals!==lt||Re.morphColors!==bt||Re.toneMapping!==Ct||Re.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Re.__version=H.version);let Cn=Re.currentProgram;mt===!0&&(Cn=Cr(H,L,D));let os=!1,vn=!1,er=!1,Ft=Cn.getUniforms(),Hn=Re.uniforms;if(De.useProgram(Cn.program)&&(os=!0,vn=!0,er=!0),H.id!==b&&(b=H.id,vn=!0),os||x!==S){De.buffers.depth.getReversed()?(ue.copy(S.projectionMatrix),Id(ue),Ld(ue),Ft.setValue(U,"projectionMatrix",ue)):Ft.setValue(U,"projectionMatrix",S.projectionMatrix),Ft.setValue(U,"viewMatrix",S.matrixWorldInverse);let gi=Ft.map.cameraPosition;gi!==void 0&&gi.setValue(U,ke.setFromMatrixPosition(S.matrixWorld)),nt.logarithmicDepthBuffer&&Ft.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ft.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,vn=!0,er=!0)}if(D.isSkinnedMesh){Ft.setOptional(U,D,"bindMatrix"),Ft.setOptional(U,D,"bindMatrixInverse");let Sn=D.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ft.setValue(U,"boneTexture",Sn.boneTexture,A))}D.isBatchedMesh&&(Ft.setOptional(U,D,"batchingTexture"),Ft.setValue(U,"batchingTexture",D._matricesTexture,A),Ft.setOptional(U,D,"batchingIdTexture"),Ft.setValue(U,"batchingIdTexture",D._indirectTexture,A),Ft.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&Ft.setValue(U,"batchingColorTexture",D._colorsTexture,A));let tr=z.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Be.update(D,z,Cn),(vn||Re.receiveShadow!==D.receiveShadow)&&(Re.receiveShadow=D.receiveShadow,Ft.setValue(U,"receiveShadow",D.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Hn.envMap.value=be,Hn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(Hn.envMapIntensity.value=L.environmentIntensity),vn&&(Ft.setValue(U,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&Vu(Hn,er),ne&&H.fog===!0&&de.refreshFogUniforms(Hn,ne),de.refreshMaterialUniforms(Hn,H,X,se,f.state.transmissionRenderTarget[S.id]),Rs.upload(U,Pc(Re),Hn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rs.upload(U,Pc(Re),Hn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ft.setValue(U,"center",D.center),Ft.setValue(U,"modelViewMatrix",D.modelViewMatrix),Ft.setValue(U,"normalMatrix",D.normalMatrix),Ft.setValue(U,"modelMatrix",D.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Sn=H.uniformsGroups;for(let gi=0,yi=Sn.length;gi<yi;gi++){let Lc=Sn[gi];I.update(Lc,Cn),I.bind(Lc,Cn)}}return Cn}function Vu(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Gu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,L,z){Ie.get(S.texture).__webglTexture=L,Ie.get(S.depthTexture).__webglTexture=z;let H=Ie.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){let z=Ie.get(S);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,z=0){P=S,T=L,R=z;let H=!0,D=null,ne=!1,pe=!1;if(S){let be=Ie.get(S);if(be.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(be.__hasExternalTextures)A.rebindTextures(S,Ie.get(S.texture).__webglTexture,Ie.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ae=S.depthTexture;if(be.__boundDepthTexture!==Ae){if(Ae!==null&&Ie.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}let Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(pe=!0);let Ge=Ie.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[L])?D=Ge[L][z]:D=Ge[L],ne=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?D=Ie.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?D=Ge[z]:D=Ge,w.copy(S.viewport),N.copy(S.scissor),B=S.scissorTest}else w.copy(Ce).multiplyScalar(X).floor(),N.copy($e).multiplyScalar(X).floor(),B=xt;if(De.bindFramebuffer(U.FRAMEBUFFER,D)&&H&&De.drawBuffers(S,D),De.viewport(w),De.scissor(N),De.setScissorTest(B),ne){let be=Ie.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,z)}else if(pe){let be=Ie.get(S.texture),Oe=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,z||0,Oe)}b=-1},this.readRenderTargetPixels=function(S,L,z,H,D,ne,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){De.bindFramebuffer(U.FRAMEBUFFER,Se);try{let be=S.texture,Oe=be.format,Ge=be.type;if(!nt.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-H&&z>=0&&z<=S.height-D&&U.readPixels(L,z,H,D,qe.convert(Oe),qe.convert(Ge),ne)}finally{let be=P!==null?Ie.get(P).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(S,L,z,H,D,ne,pe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ie.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){let be=S.texture,Oe=be.format,Ge=be.type;if(!nt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-H&&z>=0&&z<=S.height-D){De.bindFramebuffer(U.FRAMEBUFFER,Se);let Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),U.readPixels(L,z,H,D,qe.convert(Oe),qe.convert(Ge),0);let lt=P!==null?Ie.get(P).__webglFramebuffer:null;De.bindFramebuffer(U.FRAMEBUFFER,lt);let bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Pd(U,bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne),U.deleteBuffer(Ae),U.deleteSync(bt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,z=0){S.isTexture!==!0&&(hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);let H=Math.pow(2,-z),D=Math.floor(S.image.width*H),ne=Math.floor(S.image.height*H),pe=L!==null?L.x:0,Se=L!==null?L.y:0;A.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,pe,Se,D,ne),De.unbindTexture()},this.copyTextureToTexture=function(S,L,z=null,H=null,D=0){S.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],L=arguments[2],D=arguments[3]||0,z=null);let ne,pe,Se,be,Oe,Ge,Ae,lt,bt,Ct=S.isCompressedTexture?S.mipmaps[D]:S.image;z!==null?(ne=z.max.x-z.min.x,pe=z.max.y-z.min.y,Se=z.isBox3?z.max.z-z.min.z:1,be=z.min.x,Oe=z.min.y,Ge=z.isBox3?z.min.z:0):(ne=Ct.width,pe=Ct.height,Se=Ct.depth||1,be=0,Oe=0,Ge=0),H!==null?(Ae=H.x,lt=H.y,bt=H.z):(Ae=0,lt=0,bt=0);let un=qe.convert(L.format),pt=qe.convert(L.type),Re;L.isData3DTexture?(A.setTexture3D(L,0),Re=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(A.setTexture2DArray(L,0),Re=U.TEXTURE_2D_ARRAY):(A.setTexture2D(L,0),Re=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let Jn=U.getParameter(U.UNPACK_ROW_LENGTH),mt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Cn=U.getParameter(U.UNPACK_SKIP_PIXELS),os=U.getParameter(U.UNPACK_SKIP_ROWS),vn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,be),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);let er=S.isDataArrayTexture||S.isData3DTexture,Ft=L.isDataArrayTexture||L.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Hn=Ie.get(S),tr=Ie.get(L),Sn=Ie.get(Hn.__renderTarget),gi=Ie.get(tr.__renderTarget);De.bindFramebuffer(U.READ_FRAMEBUFFER,Sn.__webglFramebuffer),De.bindFramebuffer(U.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let yi=0;yi<Se;yi++)er&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(S).__webglTexture,D,Ge+yi),S.isDepthTexture?(Ft&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(L).__webglTexture,D,bt+yi),U.blitFramebuffer(be,Oe,ne,pe,Ae,lt,ne,pe,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ft?U.copyTexSubImage3D(Re,D,Ae,lt,bt+yi,be,Oe,ne,pe):U.copyTexSubImage2D(Re,D,Ae,lt,bt+yi,be,Oe,ne,pe);De.bindFramebuffer(U.READ_FRAMEBUFFER,null),De.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ft?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Re,D,Ae,lt,bt,ne,pe,Se,un,pt,Ct.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,D,Ae,lt,bt,ne,pe,Se,un,Ct.data):U.texSubImage3D(Re,D,Ae,lt,bt,ne,pe,Se,un,pt,Ct):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,Ae,lt,ne,pe,un,pt,Ct.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,Ae,lt,Ct.width,Ct.height,un,Ct.data):U.texSubImage2D(U.TEXTURE_2D,D,Ae,lt,ne,pe,un,pt,Ct);U.pixelStorei(U.UNPACK_ROW_LENGTH,Jn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,os),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vn),D===0&&L.generateMipmaps&&U.generateMipmap(Re),De.unbindTexture()},this.copyTextureToTexture3D=function(S,L,z=null,H=null,D=0){return S.isTexture!==!0&&(hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,S=arguments[2],L=arguments[3],D=arguments[4]||0),hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,z,H,D)},this.initRenderTarget=function(S){Ie.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,De.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}},at=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var So=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Il=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new F,bo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Os=class extends ci{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xs,or=new F,Ms=new F,Ss=new F,bs=new Me,ar=new Me,cu=new Lt,Qr=new F,lr=new F,Kr=new F,Ih=new Me,Ra=new Me,Lh=new Me,mr=class extends Vt{constructor(e=new Os){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Il(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new bo(i,3,0,!1)),xs.setAttribute("uv",new bo(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),cu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;jr(Qr.set(-.5,-.5,0),Ss,o,Ms,s,r),jr(lr.set(.5,-.5,0),Ss,o,Ms,s,r),jr(Kr.set(.5,.5,0),Ss,o,Ms,s,r),Ih.set(0,0),Ra.set(1,0),Lh.set(1,1);let a=e.ray.intersectTriangle(Qr,lr,Kr,!1,or);if(a===null&&(jr(lr.set(-.5,.5,0),Ss,o,Ms,s,r),Ra.set(0,1),a=e.ray.intersectTriangle(Qr,Kr,lr,!1,or),a===null))return;let l=e.ray.origin.distanceTo(or);l<e.near||l>e.far||t.push({distance:l,point:or.clone(),uv:Ai.getInterpolation(or,Qr,lr,Kr,Ih,Ra,Lh,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function jr(n,e,t,i,s,r){bs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ar.x=r*bs.x-s*bs.y,ar.y=s*bs.x+r*bs.y):ar.copy(bs),n.copy(e),n.x+=ar.x,n.y+=ar.y,n.applyMatrix4(cu)}var zs=class extends ci{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dh=new Lt,Ll=new mo,eo=new Ds,to=new F,gr=class extends Vt{constructor(e=new Wt,t=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Dh.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(Dh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){let m=c.getX(g);to.fromBufferAttribute(u,m),Uh(to,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++)to.fromBufferAttribute(u,g),Uh(to,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uh(n,e,t,i,s,r,o){let a=Ll.distanceSqToPoint(n);if(a<t){let l=new F;Ll.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Qi=class extends xn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hs=class n extends Wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ot=class n extends Wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=i/2,f=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(p,2));function E(){let v=new F,C=new F,T=0,R=(t-e)/i;for(let P=0;P<=r;P++){let b=[],x=P/r,w=x*(t-e)+e;for(let N=0;N<=s;N++){let B=N/s,G=B*l+a,j=Math.sin(G),q=Math.cos(G);C.x=w*j,C.y=-x*i+m,C.z=w*q,u.push(C.x,C.y,C.z),v.set(j,R,q).normalize(),d.push(v.x,v.y,v.z),p.push(B,1-x),b.push(g++)}y.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let x=y[b][P],w=y[b+1][P],N=y[b+1][P+1],B=y[b][P+1];(e>0||b!==0)&&(h.push(x,w,B),T+=3),(t>0||b!==r-1)&&(h.push(w,N,B),T+=3)}c.addGroup(f,T,0),f+=T}function M(v){let C=g,T=new Me,R=new F,P=0,b=v===!0?e:t,x=v===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;let w=g;for(let N=0;N<=s;N++){let G=N/s*l+a,j=Math.cos(G),q=Math.sin(G);R.x=b*q,R.y=m*x,R.z=b*j,u.push(R.x,R.y,R.z),d.push(0,x,0),T.x=j*.5+.5,T.y=q*.5*x+.5,p.push(T.x,T.y),g++}for(let N=0;N<s;N++){let B=C+N,G=w+N;v===!0?h.push(G,G+1,B):h.push(G+1,G,B),P+=3}c.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ui=class n extends Ot{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dl=class n extends Wt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let M=new F,v=new F,C=new F;for(let T=0;T<t.length;T+=3)p(t[T+0],M),p(t[T+1],v),p(t[T+2],C),l(M,v,C,E)}function l(E,M,v,C){let T=C+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let b=E.clone().lerp(v,P/T),x=M.clone().lerp(v,P/T),w=T-P;for(let N=0;N<=w;N++)N===0&&P===T?R[P][N]=b:R[P][N]=b.clone().lerp(x,N/w)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){let x=Math.floor(b/2);b%2===0?(d(R[P][x+1]),d(R[P+1][x]),d(R[P][x])):(d(R[P][x+1]),d(R[P+1][x+1]),d(R[P+1][x]))}}function c(E){let M=new F;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(E),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let E=new F;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];let v=m(E)/2/Math.PI+.5,C=f(E)/Math.PI+.5;o.push(v,1-C)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){let M=o[E+0],v=o[E+2],C=o[E+4],T=Math.max(M,v,C),R=Math.min(M,v,C);T>.9&&R<.1&&(M<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,M){let v=E*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){let E=new F,M=new F,v=new F,C=new F,T=new Me,R=new Me,P=new Me;for(let b=0,x=0;b<r.length;b+=9,x+=6){E.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),C.copy(E).add(M).add(v).divideScalar(3);let w=m(C);y(T,x+0,E,w),y(R,x+2,M,w),y(P,x+4,v,w)}}function y(E,M,v,C){C<0&&E.x===1&&(o[M]=E.x-1),v.x===0&&v.z===0&&(o[M]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Ao=class n extends Dl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var hn=class n extends Wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let E=[],M=f/i,v=0;f===0&&o===0?v=.5/t:f===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+v,1-M),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){let M=h[f][E+1],v=h[f][E],C=h[f+1][E],T=h[f+1][E+1];(f!==0||o>0)&&p.push(M,v,T),(f!==i-1||l<Math.PI)&&p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(y,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pi=class n extends Wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,u=new F,d=new F;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(y,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ke=class extends ci{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function no(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ks=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ul=class extends ks{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oc:r=e,a=2*t-i;break;case zc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:o=e,l=2*i-t;break;case zc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,E=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+E*o[c+C]+M*o[l+C]+v*o[u+C];return r}},Nl=class extends ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Bl=class extends ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lo:t=this.InterpolantFactoryMethodDiscrete;break;case ml:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&wg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ml;var Ki=class extends Un{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=lo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends Un{};Ol.prototype.ValueTypeName="color";var zl=class extends Un{};zl.prototype.ValueTypeName="number";var Hl=class extends ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},To=class extends Un{InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Un{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=lo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Un{};kl.prototype.ValueTypeName="vector";var Vl=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Rg=new Vl,Gl=class{constructor(e){this.manager=e!==void 0?e:Rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ct=class extends Vs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ca=new Lt,Nh=new F,Bh=new F,yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wl=class extends yr{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ho*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Gs=class extends Vs{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Oh=new Lt,cr=new F,Fa=new F,Xl=class extends yr{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(cr),Fa.copy(i.position),Fa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fa),i.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh)}},an=class extends Vs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ql=class extends yr{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zh(){return 0}var ic="\\[\\]\\.:\\/",Cg=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",Fg="[^"+ic.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",sc),Ig=/(WCOD+)?/.source.replace("WCOD",Fg),Lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),Ug=new RegExp("^"+Pg+Ig+Lg+Dg+"$"),Ng=["material","materials","bones","map"],Yl=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(e){let t=Ug.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ng.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Yl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);var Po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Bg=new Ns(-1,1,1,-1,0,1),rc=class extends Wt{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}},Og=new rc,Zs=class{constructor(e){this._mesh=new oe(Og,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var es=class extends di{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qs.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var vr=class extends di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Io=class extends di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new es(Po),this.copyPass.material.blending=Wn,this.clock=new wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vr!==void 0&&(o instanceof vr?i=!0:o instanceof Io&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var $s=class n extends di{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new $t(r,o,{type:fn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new $t(r,o,{type:fn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=hu;this.highPassUniforms=qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Po;this.copyUniforms=qs.clone(h.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:on,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new At,this.fsQuad=new Zs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Jt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};$s.BlurDirectionX=new Me(1,0);$s.BlurDirectionY=new Me(0,1);var ts=1280,ns=720;function ht(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var _r=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),et=(n,e,t)=>n+(e-n)*t,Fe=(n,e,t)=>{let i=_r((t-n)/(e-n));return i*i*(3-2*i)};var zg=n=>(n=_r(n),n*n*(3-2*n));function Uo(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=zg((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>et(o,r[a],i)):et(s,r,i)}return n[n.length-1][1]}var Hg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new Me(ts,ns)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},kg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new ye(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Do=class{constructor(e){let t=this.r=new Mo({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(ts,ns,!1),t.shadowMap.enabled=!0,t.shadowMap.type=$l,t.toneMapping=qn,t.outputColorSpace=Ii;let i=new Bs(ts,ns);i.type=li,this.rt=new $t(ts,ns,{type:fn,samples:2,depthTexture:i}),this.composer=new Lo(t,new $t(ts,ns,{type:fn})),this.dof=new es(Hg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new $s(new Me(ts/2,ns/2),.45,.75,.82),this.grade=new es(kg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function uu(n,e,t,i=40){let s=new So;s.background=new ye(t);let r=new jt(i,ts/ns,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function du(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var mn=1/420,oc=new Map;function gn(n,e,t,i){if(oc.has(n))return oc.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Qi(s);return o.colorSpace=Gt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,oc.set(n,o),o}var ut=n=>new Path2D(n);function Qt(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function Bn(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var Vg={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function Gg(n,e){return gn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=ut("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");Qt(t,i,Bn(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(ut("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(ut("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(ut("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=ut("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){Qt(t,ut("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Bn(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(ut("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(ut("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(ut("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(ut("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(ut("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")Qt(t,ut("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Bn(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(ut("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(ut("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(ut("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){Qt(t,ut("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Bn(t,-60,0,60,120,n.a,n.b)),Qt(t,ut("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Bn(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else Qt(t,ut("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Bn(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(ut("M-22 26 L22 26 L0 64Z")),Qt(t,ut("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function fu(n,e,t){return gn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(Qt(i,ut("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Bn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(Qt(i,ut("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;Qt(i,ut(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Bn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(ut(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(ut(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function Wg(){return gn("hand",90,100,n=>{n.translate(45,14);let e=ut("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");Qt(n,e,Bn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function pu(n){return gn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function Xg(){return gn("foot",80,40,n=>{n.translate(26,6),Qt(n,ut("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function qg(n="round"){return gn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var yu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function Yg(n,e){return gn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),yu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function Zg(n,e,t){return gn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=ut("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");Qt(i,s,Bn(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),Qt(i,s,e);let r=ut("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");Qt(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),Qt(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=ut("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");Qt(i,s,Bn(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),Qt(i,l,"#E9E9EF")})})})}var mu=(n,e={})=>new At({map:n,alphaTest:.5,alphaToCoverage:!0,side:It,...e}),gu=new Map,ac=new Map,$g=[];function Jg(n){if(ac.has(n))return ac.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Qi(t);return r.colorSpace=Gt,r.anisotropy=8,ac.set(n,r),r}function pn(n,e,t,i,s,r=0,o,a=!1){let l=new Xe(e*mn,t*mn);l.translate((e/2-i)*mn,(s-t/2)*mn,0);let c=mu(n);o.push(c);let h=new oe(l,c);if(h.position.z=r,h.castShadow=!0,!a){let d=mu(Jg(n),{color:"#FFE9C8"});$g.push(d);let p=new oe(l,d);p.position.z=-.045-r,h.add(p)}let u=gu.get(n);return u||(u=new Fi({depthPacking:Xs,map:n,alphaTest:.5,side:It}),gu.set(n,u)),h.customDepthMaterial=u,h}function Qg(){return gn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function Kg(){return gn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function lc(n={}){let e=Vg[n.outfit||"hero"],t=n.outfit||"hero",i=new Pe,s=[],r=new Pe;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,E]of[["L",-1,-.012],["R",1,-.01]]){let M=new Pe;M.position.set(f*34*mn,o*mn,E);let v=new Pe;v.position.y=-142*mn,M.add(pn(pu(1),50,160,25,6,0,s)),v.add(pn(pu(1),50,160,25,6,0,s));let C=pn(Xg(),80,40,26,6,.001,s);C.position.y=-142*mn,f<0&&(C.scale.x=-1),v.add(C),M.add(v),r.add(M),l[m]={th:M,shin:v}}let h=pn(Gg(e,t),300,320,150,20,0,s);h.position.y=(a+4)*mn,r.add(h);for(let[m,f,E]of[["L",-1,-.006],["R",1,.006]]){let M=new Pe;M.position.set(f*(e.kind==="dress"?66:84)*mn,(a-24)*mn,E);let v=new Pe;v.position.y=-124*mn,M.add(pn(fu(e,t,"u"),90,170,45,10,0,s)),v.add(pn(fu(e,t,"f"),90,170,45,10,.001,s));let C=pn(Wg(),90,100,45,14,.002,s);C.position.y=-128*mn,C.scale.set(f>0?-.8:.8,.8,1),v.add(C),M.add(v),r.add(M),c[m]={u:M,f:v,hand:C}}let u=new Pe;if(u.position.set(0,(a+104)*mn,.02),r.add(u),n.hair){let m=pn(Zg(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);u.add(m)}if(u.add(pn(qg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=pn(gn("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let E=n.hairc||"#4a2c1a";f.fillStyle=E,f.fill(ut(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);u.add(m)}if(n.lash){let m=pn(gn("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(E=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(E*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}let d={};for(let m of Object.keys(yu)){let f=pn(Yg(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",u.add(f),d[m]=f}if(n.glasses){let m=pn(gn("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}if(n.hat){let m=pn(n.hat(gn),300,300,150,150,.006,s);u.add(m)}let p=new oe(new Xe(1,.4),new At({map:Qg(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new oe(new Xe(2.1,3),new At({map:Kg(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:on,side:It})),g.position.set(0,.95,-.09),r.add(g));let y={root:i,body:r,head:u,arms:c,legs:l,eyes:d,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in d)d[f].visible=f===m},cheer(m,f=0,E=1){let M=m*6+f,v=Math.sin(M);y.pose({armL:[150+v*16*E,18+v*10],armR:[150-v*16*E,18-v*10],bob:Math.abs(Math.sin(M*.5))*.07*E,head:v*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,E=m.armL||[6,4],M=m.armR||[6,4],v=m.legL||[0,0],C=m.legR||[0,0];c.L.u.rotation.z=-E[0]*f,c.L.f.rotation.z=-E[1]*f,c.R.u.rotation.z=M[0]*f,c.R.f.rotation.z=M[1]*f,l.L.th.rotation.z=-v[0]*f,l.L.shin.rotation.z=-v[1]*f,l.R.th.rotation.z=C[0]*f,l.R.shin.rotation.z=C[1]*f,u.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let T=m.squash||0;r.scale.set(1-T*.5,1+T,1)},walk(m,f=1,E=1){let M=m*6.4*f,v=Math.sin(M),C=Math.cos(M);y.pose({legL:[v*15*E,Math.max(0,-v)*26*E],legR:[-v*15*E,Math.max(0,v)*26*E],armL:[8-v*12*E,6],armR:[8+v*12*E,6],bob:Math.abs(C)*.03*E,head:v*2})},place(m,f,E=0,M=1){i.position.set(m,E,f),i.scale.setScalar(M)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return y.pose(),y}function Le(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Qi(i);return r.colorSpace=Gt,r.anisotropy=8,r}var is=(n,e={})=>new Ke({color:n,roughness:.88,metalness:0,...e});function k(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new oe(new hi(n,e,t),typeof i=="string"?is(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Nt(n,e,t=1){let i=Le(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new mr(new Os({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:on}));return s.scale.set(e,e,1),s}var vu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function jg(n,e,t,i,s,r=.42){let o=ht(n),a=256*e,l=300*t,c,h=Le(a,l,d=>{d.fillStyle=i,d.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)d.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,d.fillRect(g,p,28,10);for(let p=0;p<t;p++)d.fillStyle="rgba(255,240,220,.14)",d.fillRect(0,p*300+292,a,8)}),u=Le(a,l,d=>{d.fillStyle="#000",d.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<t;g++)for(let y=0;y<e;y++){let m=y*256+56,f=g*300+60,E=144,M=196,v=o()<r,C=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,E+18,M+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+M+9,E+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+M+6,E+36,8),p.fillStyle=s?v?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,E,M),v||!s){let T=v?C<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=T,p.fillRect(m,f,26,M),p.fillRect(m+E-26,f,26,M)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+M),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+M),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+E/2-3,f,6,M),p.fillRect(m,f+M*.45,E,6),v&&s&&(d.fillStyle=C<.5?"#FFC47A":"#FFD79C",d.fillRect(m,f,E,M),d.fillStyle="#000",d.fillRect(m+E/2-3,f,6,M),d.fillRect(m,f+M*.45,E,6))}h.needsUpdate=!0});return u.colorSpace=Gt,{map:h,emissiveMap:u}}function Li(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,u=ht(n),d=new Pe,p=o*2.9+3.6,g=c||vu[Math.floor(u()*vu.length)],y=Math.max(2,Math.round(r/2.1)),m=jg(n,y,o,g,l,e.lit??.42),f=new Ke({map:m.map,emissiveMap:m.emissiveMap,emissive:new ye(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),E=is(g),M=[a>0?f:E,a>0?E:f,is("#2c2730"),E,E,E],v=new oe(new hi(s,o*2.9,r),M);v.position.set(t,3.6+o*1.45,i),v.castShadow=v.receiveShadow=!0,d.add(v),d.add(k(s+.5,.5,r+.5,"#3d3540",t,p+.25,i)),d.add(k(s+.3,.35,r+.3,g,t,3.6,i));let C=t+a*(s/2+.01);if(h){let T=Le(1024,180,w=>{w.fillStyle=h.bg,w.fillRect(0,0,1024,180),w.fillStyle="#ffffff22",w.fillRect(0,0,1024,8),w.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,w.textAlign="center",w.textBaseline="middle",w.fillStyle=h.fg||"#FFF4DC",w.shadowColor=h.fg||"#FFF4DC",w.shadowBlur=l?26:0,w.fillText(h.name,512,96)}),R=new oe(new hi(.18,1.05,r-.3),[new Ke({map:T,emissiveMap:T,emissive:new ye(l?.85:0,l?.85:0,l?.85:0)}),new Ke({map:T,emissiveMap:T,emissive:new ye(l?.85:0,l?.85:0,l?.85:0)}),is("#222"),is("#222"),is("#222"),is("#222")]);R.position.set(C+a*.1,3.25,i),a>0&&(R.scale.z=-1),R.castShadow=!0,d.add(R);let P=Le(512,256,w=>{let N=w.createLinearGradient(0,0,0,256);N.addColorStop(0,h.win||"#F4C783"),N.addColorStop(1,"#D59A5C"),w.fillStyle=N,w.fillRect(0,0,512,256);let B=ht(n+9);for(let G=0;G<26;G++)w.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(B()*6)],w.fillRect(B()*490,30+Math.floor(B()*3)*76,12+B()*26,52);for(let G of[84,160,236])w.fillStyle="#6b4530",w.fillRect(0,G,512,7)}),b=new Ke({map:P,emissiveMap:P,emissive:new ye(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});d.add(k(.3,2.8,r-.1,"#3a2a24",C-a*.1,1.4,i));let x=new oe(new Xe(r-.9,2.1),b);x.rotation.y=a*Math.PI/2,x.position.set(C+a*.07,1.5,i),d.add(x);for(let w=-1;w<=1;w++)d.add(k(.08,2.3,.09,"#2a1d18",C+a*.1,1.5,i+w*(r-.9)/2));if(h.awning){let w=Le(512,128,B=>{for(let G=0;G<12;G++)B.fillStyle=G%2?h.awning:"#F4EEDF",B.fillRect(G*512/12,0,42.666666666666664,128)}),N=new oe(new Xe(r-.3,1.3),new Ke({map:w,side:It,roughness:.9}));N.rotation.y=a*Math.PI/2,N.rotation.order="YXZ",N.rotation.x=-1,N.position.set(C+a*.55,2.56,i),N.castShadow=!0,d.add(N)}if(l){let w=new an(h.light||"#FFC88A",3.2,7,1.8);w.position.set(C+a*1.7,2.1,i),d.add(w)}}return d}function _u(n,e,t){let i=new oe(new Xe(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function e1(n="#A99D90"){let e=Le(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=ht(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=An,e}function No(n,e){let t=Le(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=ht(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=An,t.repeat.set(1,12);let i=_u(9,240,new Ke({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=e1(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=_u(4.4,240,new Ke({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(k(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function Bo(n,e,t,i,s=!0,r=5.5){let o=new Pe;o.add(k(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(k(.26,.3,.26,"#15151b",e,.15,t));let a=k(.26,.4,.26,new Ke({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(k(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=Nt("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new an("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var Eu={};function On(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new Pe;o.add(k(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=Eu[a]||(Eu[a]=Le(512,512,c=>{let h=ht(r%3+3),u=(d,p,g,y)=>{c.fillStyle=y,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,E=g*(.86+.14*Math.sin(f*5+d)+h()*.05);c.lineTo(d+Math.cos(f)*E,p+Math.sin(f)*E)}c.fill()};for(let[d,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])u(d,p,g,s[0]);for(let[d,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])u(d,p,g,s[1]);for(let[d,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])u(d,p,g,s[2]);c.fillStyle=s[3];for(let d=0;d<70;d++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new oe(new Xe(3.6*i,3.6*i),new Ke({map:l,alphaTest:.5,side:It,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Fi({depthPacking:Xs,map:l,alphaTest:.5,side:It}),o.add(h)}return n.add(o),o}function fi(n,e,t,i,s,r,o=3,a=0){let l=Le(1600,900,h=>{h.clearRect(0,0,1600,900);let u=ht(o);for(let d=0;d<3;d++)for(let p=-40;p<1620;){let g=50+u()*110,y=180+u()*(d===0?660:400);if(h.fillStyle=s[d],h.fillRect(p,900-y,g,y),u()<.2&&h.fillRect(p+g/2-4,900-y-60,8,60),r)for(let m=900-y+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)u()<.34&&(h.fillStyle=d===2?"#FFD999":d===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new oe(new Xe(t,i),new At({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Yt(n,e,t,i,s){let r=Le(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new oe(new Xe(t,i),new At({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var V=(n,e={})=>new Ke({color:n,roughness:.85,...e});function dt(n,e,t,i={}){let s=new oe(new Xe(e,t),new At({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:It,color:i.color||"#fff",blending:i.add?on:Xn,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Fi({depthPacking:Xs,map:n,alphaTest:.5,side:It})),s}function Er(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var xu={value:0};function Oo(n="#8E3D30",e=4,t=3){let i=Le(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=ht(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=An,i.repeat.set(e,t),i}function Mu(n="#A59383",e=12,t=12){let i=Le(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=ht(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=An,i.repeat.set(e,t),i}function Di(n,e=2600,t=300,i=1){let s=ht(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let u=0;u<e;u++){let d=s()*2-1,p=s()*6.283,g=Math.sqrt(1-d*d);r[u*3]=g*Math.cos(p)*t,r[u*3+1]=d*t,r[u*3+2]=g*Math.sin(p)*t;let y=.55+s()*.45,m=s();o[u*3]=y*(m>.8?1:.9),o[u*3+1]=y*.94,o[u*3+2]=y*(m<.2?.8:1)}let a=new Wt;a.setAttribute("position",new en(r,3)),a.setAttribute("color",new en(o,3));let l=Le(32,32,u=>{let d=u.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"#fff"),d.addColorStop(.35,"#ffffffaa"),d.addColorStop(1,"#ffffff00"),u.fillStyle=d,u.fillRect(0,0,32,32)}),c=new zs({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new gr(a,c);return h.frustumCulled=!1,n.add(h),h}function ss(n,e,t="#6D4A33"){let i=Le(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=ht(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=An,i.repeat.set(n/5,e/5);let s=new oe(new Xe(n,e),new Ke({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function Js(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Le(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=An,r.repeat.set(n/s*4,e/s*4);let o=new oe(new Xe(n,e),new Ke({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Su(n,e,t="#FFD9A0",i=.22){let s=Le(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new oe(new Xe(n,e),new At({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:on,side:It,fog:!1}))}function cc(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new Pe,a=new oe(new Ot(.3,.22,.5,20),V(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Le(256,256,h=>{h.clearRect(0,0,256,256);for(let u=0;u<9;u++)h.save(),h.translate(128,250),h.rotate((u-4)*.3),h.fillStyle=u%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=dt(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function hc(n,e,t,i="#2A1E18"){let s=new Pe;s.add(k(n+.08,e+.08,.04,i,0,0,0));let r=Le(Math.round(n*400),Math.round(e*400),t),o=new oe(new Xe(n,e),new Ke({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Zn(n,e,t,i=1.2){return new oe(new Xe(n,e),new Ke({color:"#000",emissive:t,emissiveIntensity:i}))}function Tt(n,e,t,i=10,s=60){let r=new Ws(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function xr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new at(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Yt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),fi(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=Oo(t,2,2),a=()=>new Ke({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,y,m])=>n.add(k(y,m,.3,a(),p,g,-3)));for(let[p,g,y,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(k(y,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(k(18,5.2,.3,a(),0,2.6,-3));n.add(ss(18,12,s));let l=hc(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(cc(4.4,0,-2.4,1.1)),n.add(cc(-5,0,-2.4,.9,"#36AEA2")),n.add(new ct(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=Tt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new an("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let u=new oe(new Ot(.18,.3,.34,24),new Ke({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));u.position.set(3.6,1.9,-1.9),n.add(u),n.add(k(.04,1.7,.04,"#222",3.6,.85,-1.9));let d=Nt("#FFC07A",1.2,.35);d.position.copy(u.position),n.add(d)}var bu=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Mr(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new at(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Yt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),fi(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),No(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Li(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:bu[(a+i)%5]})),n.add(Li(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:bu[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)On(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),Bo(n,-5,-3-l*12,1,t||r);n.add(new ct(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(Tt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ie=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},ft=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},wt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},uc={perro:[520,440,n=>{ie(n,250,300,150,90,"#C98E5E"),ie(n,250,330,100,50,"#E9C49A"),ft(n,120,330,34,100,14,"#B5784A"),ft(n,340,330,34,100,14,"#B5784A"),ft(n,180,340,34,90,14,"#C98E5E"),ft(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ie(n,180,170,110,100,"#C98E5E"),ie(n,100,140,40,80,"#8A5A34",-.3),ie(n,262,140,40,80,"#8A5A34",.3),ie(n,180,220,54,40,"#E9C49A"),ie(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ie(n,250,300,150,90,"#C9A07E"),ie(n,250,330,100,50,"#EEDCC4"),ft(n,120,330,34,100,14,"#B5906A"),ft(n,340,330,34,100,14,"#B5906A"),ft(n,180,340,34,90,14,"#C9A07E"),ft(n,300,340,34,90,14,"#C9A07E"),ie(n,180,170,110,100,"#C9A07E"),ie(n,100,140,40,80,"#9A7A5A",-.3),ie(n,262,140,40,80,"#9A7A5A",.3),ie(n,180,220,60,46,"#F4F0E8"),ie(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ie(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ie(n,180,170,100,92,"#E9853A"),wt(n,[[96,120],[110,30],[160,100]],"#E9853A"),wt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ie(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ie(n,150,260,80,130,"#3FA34D"),ie(n,150,140,80,80,"#3FA34D"),wt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ie(n,150,300,56,70,"#F2C14E"),wt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ie(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ie(n,170,190,130,80,"#8D94A8"),ie(n,90,110,56,52,"#7A8296"),ie(n,120,150,40,26,"#5FA898",.3),wt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ie(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ie(n,150,130,70,22,"#3A3040"),ie(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ie(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ie(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ie(n,150,260,90,120,"#C9A06A"),ie(n,150,290,56,80,"#EBD3A8"),ie(n,150,120,74,70,"#C9A06A"),ie(n,100,70,18,14,"#A87A44"),ie(n,200,70,18,14,"#A87A44"),ie(n,150,156,14,10,"#1A1A24"),ft(n,92,200,26,70,12,"#A87A44"),ft(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ie(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ie(n,64,130,46,44,"#1A1A24"),ie(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ie(n,200,64,54,30,"rgba(230,246,255,.8)",.3),wt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ie(n,300,160,250,80,"#6F9FC4"),ie(n,300,200,200,40,"#D8E8F4"),wt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),wt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),wt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),wt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ie(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])ft(n,e,360,70,160,20,"#8A8A98");ie(n,170,200,120,110,"#9A9AA8"),ie(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),wt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{ft(n,20,60,560,220,110,"#4A5A6E"),ie(n,600,180,220,90,"#4A5A6E"),wt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),ft(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ie(n,170,230,120,100,"#FBF7EC"),ie(n,120,120,66,64,"#FBF7EC"),wt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),wt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ie(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ie(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ie(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ie(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])ft(n,e,300,50,150,16,"#EDE6D4");ie(n,140,160,100,92,"#FBF7EC"),ie(n,120,220,70,46,"#F2B4C0"),wt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),wt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ie(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])ft(n,e,260,44,90,14,"#E890A4");ie(n,120,170,34,24,"#E06A84"),wt(n,[[160,70],[150,30],[196,70]],"#E890A4"),wt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ie(n,230,320,170,170,"#2E2E38"),ie(n,230,160,110,104,"#2E2E38"),ie(n,230,190,70,56,"#5A5A68"),ft(n,40,260,70,240,30,"#2E2E38"),ft(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{ft(n,160,120,70,560,30,"#F2C14E"),ie(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])ft(n,e,760,30,140,12,"#E2A83A");ie(n,190,110,80,60,"#F2C14E"),ft(n,160,20,12,50,6,"#8A5A2A"),ft(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ie(n,300,260,190,100,"#8A8E9A"),ie(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])ft(n,e,320,36,100,14,"#7A7E8A");ie(n,140,170,96,90,"#8A8E9A"),wt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),wt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),wt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ie(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])ft(n,e,330,44,120,16,"#D29A30");ie(n,170,200,150,150,"#A8642A"),ie(n,170,210,96,92,"#E2A83A"),ie(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ie(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ie(n,230,190,60,46,"#3A2A2A"),ie(n,150,180,40,34,"#3A2A2A"),ie(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ie(n,300,300,170,80,"#B5784A"),ie(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])ft(n,e,330,26,180,12,"#9A6238");ft(n,120,120,60,200,26,"#B5784A"),ie(n,130,110,70,56,"#B5784A"),ie(n,80,130,30,22,"#3A2A22"),wt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ie(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ie(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])ft(n,e,360,34,190,14,"#4A3222");ft(n,110,150,90,200,36,"#5A3E2A"),ie(n,110,160,80,66,"#5A3E2A"),ie(n,60,200,54,46,"#6A4A34"),ie(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ie(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)wt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])ft(n,e,250,40,90,14,"#4A3A30");ie(n,90,200,70,60,"#5E4A3E"),ie(n,30,220,34,28,"#7A6050"),wt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),wt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ie(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])ft(n,e,320,34,230,14,"#7A4A2E");ft(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),ft(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),wt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},zo={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(zo,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in zo)uc[n][3]=zo[n][0],uc[n][4]=zo[n][1];var Ho={},Au=n=>Ho["e"+n]||(Ho["e"+n]=Le(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function Tu(n,e={}){let[t,i,s,r,o,a]=uc[n],l=Ho[n]||(Ho[n]=Le(t,i,s)),c=a*i/t,h=new Pe,u=new Pe;h.add(u);let d=dt(l,a,c,{shadow:!0});d.position.y=c/2,u.add(d);let p=new oe(new Xe(o*a,o*a*.5),new At({map:Au("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),u.add(p);let g=new oe(new Hs(a*.45,24),new At({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(u.scale.x=-1);let y={root:h,card:u,kind:n,h:c,w:a,eye(m){p.material.map=Au(m)},face(m){let f=new F;h.getWorldPosition(f),u.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){d.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),u.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,E=0,M=1){return h.position.set(m,E,f),h.scale.setScalar(M),y}};return y}var Ui=(n,e,t=200,i=200,s)=>{let r=new oe(new Xe(t,i),s?new Ke({map:s,roughness:.95}):V(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},dc=(n,e=1)=>{n.add(new ct("#E9EEFF","#B08A6A",1.05*e)),n.add(Tt("#FFD29A",3*e,[-14,16,10],20,70))},je={sala:(n,e)=>xr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{xr(n,{wall:"#9A4632",night:e.night}),n.add(k(2.4,.45,3.2,V("#6B4A33"),-1.7,.25,-1.4)),n.add(k(2.3,.3,3,V("#F3EEE4"),-1.7,.6,-1.4)),n.add(k(2.38,.22,2,V("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(k(.8,.22,.5,V("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Mr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new at(e.dusk?"#E8A880":"#F2D8B8",.02),Yt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),fi(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),Ui(n,"#7A9A50");for(let t=0;t<12;t++)On(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(k(2.4,.1,.5,V("#8E6242"),-3.4,.5,-2.2)),n.add(k(2.4,.5,.08,V("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)Bo(n,-6+t*6,-4,1,!!e.dusk);n.add(new ct("#E9EEFF","#B08A6A",1)),n.add(Tt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Mr(n,{seed:e.seed||2}),Ui(n,"",60,60,Mu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new at("#F2D8B8",.012),Yt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Ui(n,"#8AAA58");let t=new Pe;t.add(k(6,4,5,V("#B5402E"),0,2,0));let i=new oe(new Ot(.01,4.4,2.2,4),V("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(k(2,2.6,.1,V("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(k(.1,1,.1,V("#C9A06A"),-10+s*1.3,.5,-4));n.add(k(20,.08,.06,V("#C9A06A"),0,.9,-4)),n.add(k(20,.08,.06,V("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)On(n,6+s*3,-16-s%2*3,1.6,void 0,s);dc(n)},sabana:(n,e)=>{n.fog=new at("#F2C890",.01),Yt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=Nt("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),Ui(n,"#C8A858");for(let i=0;i<6;i++){let s=new Pe;s.add(k(.3,3,.3,V("#5A3A22"),0,1.5,0));let r=new oe(new Ot(2.6,2.2,.6,12),V("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new ct("#FFE8C8","#8A6A3A",1)),n.add(Tt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new at("#F2E2C0",.012),Yt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),Ui(n,"#B8B070");for(let t=0;t<14;t++){let i=new oe(new hn(.55,16,10,0,Math.PI*2,0,Math.PI/2),V("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}dc(n)},mar:(n,e)=>{t1(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new at(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=Ui(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=ht(5);for(let r=0;r<30;r++){let o=new oe(new ui(.2+s()*.3,.8+s()*1.4,7),V(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Su(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=Nt("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new ct("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(Tt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new at("#162238",.04),n.add(Js(16,20,"#2A3348","#232B3E",6)),n.add(k(16,6,.3,V("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Zn(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Zn(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Le(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new oe(new Xe(2.5,1.3),new At({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new ct("#6E86C8","#101420",.8)),n.add(Tt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new at("#1E2236",.02),Ui(n,"#2F4A7A"),n.add(k(30,10,.3,V("#E8E2D2"),0,5,-8));let t=Le(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=dt(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new oe(new Pi(4,.35,10,48),V("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new an("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new ct("#E8E8FF","#3A3A50",.9)),n.add(Tt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new at("#E6E2D6",.03),n.add(Js(9,40));for(let i of[-1,1]){n.add(k(.7,4.2,30,V("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(k(1.2,.05,30,V("#DDE0E4"),i*3,.5+s*.9,-10))}let t=ht(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(k(.3,.3,.4,V(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Zn(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new ct("#FFFFFF","#B9B3A6",1)),n.add(Tt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{je.parque(n,{});for(let t=0;t<12;t++)n.add(k(.08,1.4,.08,V("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(k(8,.08,.08,V("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{xr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new at("#8A8070",.03),Yt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),Ui(n,"#8A8070");let t=ht(8);for(let i=0;i<40;i++){let s=k(.4+t()*1.6,.3+t()*1,.4+t()*1.4,V(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}dc(n,.8)}};function t1(n,e){n.background=new ye(e)}function n1(n,e={}){let t=lc({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var i1=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function fc(n,e,t){let i=uu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(je[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?n1(s,a):(()=>{let c=Tu(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{xu.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,y)=>g.position.set(-4+y%12*.7,-2.5+(l*.5+y*.13)%7,-2-y%5*1.5));let u=Uo(t.cam.map(([g,y])=>[g,y]),l),d=Uo(t.cam.map(([g,,y])=>[g,y]),l);du(c,u,d,0);for(let{a:g,k:y}of r){if(g.move){let f=g.move(l);y.root.position.set(f[0],f[1],f[2])}y.face(c),y.eye(i1(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,E])=>l>=f&&l<E);g.tipo==="humano"?g.pose?g.pose(y,l):y.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(y.talk(l,m),g.pose&&g.pose(y,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Uo(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function wu(n,e=Math.PI/2){n.root.rotation.z=e}function s1(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return Le(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[d,p,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(d,p,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let u=Array.isArray(n)?n:[n];u.forEach((d,p)=>c.fillText(d,t/2,i*.42+(p-(u.length-1)/2)*o*1.15))})}function pc(n,e,t=1.4,i={}){let s=s1(e,i),r=dt(s,t,t*(i.h||400)/(i.w||640),{blend:!0});return r.renderOrder=5,n.add(r),r}function Sr(n,e="#F2C14E",t=140,i=256,s=200){return Le(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}var br=[0,11.48,13.78,26.42,28.82,38.54,41.42,49.72,51.38,64.34,66.94,77.42,85.42,90.44,101.3,103.98,110.08,113.36,118.38,136.94,141.76,145.14,150.58,161.5,165.16,174.34,176.48,178.82,180.74,187.68,189.44,212.18,227.78,236.58,238.82,241.84,243.94,254.66,257.48,260.94,271.44,279.72,280.6,290.56,307.9,311.96,319.58,324.04,328.86,341.14,353,355.64,368.5,374.32,376.98,382.6,386.3,399.52,404.28,407.66,422.3,425.94,440.3,444.28,452.8,455.16,457.06,464.34,491.58,496.5,501.38,504.4,522.86,527.3,530.98,536.64,543.1,544.48,554.46,555.76,559.52,566.66,570.08,573.42,579.76,582.88,585.48,596.7],r1=[["es",0],["sabado",.24],["por",.62],["la",.84],["manana",.96],["estas",1.86],["en",2.2],["tu",2.38],["habitacion",2.48],["en",3.34],["pijama",3.46],["bailando",4.26],["delante",4.68],["del",5.1],["espejo",5.28],["con",5.74],["el",5.96],["cepillo",6.12],["del",6.46],["pelo",6.68],["como",6.94],["microfono",7.22],["nadie",8.38],["te",8.72],["ve",8.9],["es",9.5],["tu",9.7],["concierto",9.86],["privado",10.4],["y",11.48],["entonces",11.64],["oyes",12.02],["un",12.66],["camion",12.84],["te",13.78],["asomas",13.88],["a",14.12],["la",14.32],["ventana",14.38],["delante",15.44],["de",15.74],["la",15.9],["casa",16],["de",16.22],["al",16.4],["lado",16.48],["la",17.1],["que",17.18],["llevaba",17.32],["un",17.64],["ano",17.86],["vacia",18.04],["hay",18.84],["un",18.98],["camion",19.1],["de",19.4],["mudanzas",19.58],["enorme",20.16],["salen",21.4],["cajas",21.78],["sale",22.54],["un",22.84],["sofa",23.02],["sale",23.76],["una",24.06],["lampara",24.26],["con",24.66],["forma",24.9],["de",25.18],["flamenco",25.34],["y",26.42],["sale",26.56],["ella",26.9],["sara",27.48],["sara",28.82],["de",29.6],["tu",29.78],["clase",29.9],["sara",30.62],["la",31.32],["que",31.42],["se",31.54],["sienta",31.66],["junto",31.98],["a",32.16],["la",32.36],["ventana",32.44],["sara",33.32],["a",33.98],["la",34.04],["que",34.1],["llevas",34.24],["dos",34.54],["anos",34.8],["intentando",35.12],["decirle",35.82],["algo",36.32],["mas",36.54],["largo",36.78],["que",37.08],["hola",37.34],["sara",38.54],["se",38.92],["acaba",39.14],["de",39.36],["mudar",39.58],["a",39.8],["la",39.98],["casa",40.08],["de",40.32],["al",40.52],["lado",40.6],["te",41.42],["escondes",41.56],["debajo",42.02],["de",42.36],["la",42.54],["ventana",42.62],["el",43.58],["corazon",43.72],["te",44.14],["va",44.44],["a",44.62],["mil",44.74],["respiras",45.7],["vuelves",46.92],["a",47.28],["asomarte",47.42],["muy",48.22],["despacio",48.52],["y",49.72],["descubres",49.86],["algo",50.46],["terrible",50.92],["la",51.38],["ventana",52.24],["de",52.64],["la",52.8],["habitacion",52.9],["de",53.4],["sara",53.56],["esta",53.8],["justo",54.26],["enfrente",54.66],["de",55.2],["la",55.44],["tuya",55.56],["a",56.3],["tres",56.48],["metros",56.76],["tres",57.8],["metros",58.14],["puedes",59.3],["ver",59.72],["su",59.86],["lampara",60.04],["sus",60.78],["cortinas",60.96],["su",61.94],["poster",62.1],["de",62.44],["una",62.62],["banda",62.76],["que",63.04],["no",63.22],["conoces",63.38],["y",64.34],["ella",64.56],["puede",64.84],["ver",65.3],["tu",65.6],["habitacion",65.78],["miras",66.94],["hacia",67.36],["atras",67.52],["tu",68.42],["pijama",68.5],["de",68.86],["dinosaurios",69.02],["tus",70],["calcetines",70.12],["por",70.62],["el",70.88],["suelo",71.02],["tu",71.72],["cama",71.82],["sin",72.08],["hacer",72.32],["y",73.06],["un",73.24],["poster",73.4],["tuyo",73.74],["de",74.4],["cuando",74.58],["tenias",74.74],["ocho",75.18],["anos",75.5],["de",76.18],["un",76.34],["caballo",76.46],["con",76.86],["alas",77.08],["esa",77.42],["tarde",78.32],["haces",78.54],["algo",78.88],["que",79.16],["no",79.36],["habias",79.54],["hecho",79.84],["nunca",80.12],["ordenas",81.06],["tu",81.6],["habitacion",81.76],["entera",82.76],["sin",83.68],["que",83.88],["te",84.04],["lo",84.16],["pida",84.26],["nadie",84.46],["tu",85.42],["madre",85.56],["entra",85.78],["mira",86.66],["y",86.82],["te",87.3],["pone",87.42],["la",87.62],["mano",87.8],["en",88],["la",88.12],["frente",88.2],["para",88.52],["ver",88.8],["si",89.02],["tienes",89.14],["fiebre",89.48],["esa",90.44],["noche",90.72],["tienes",90.9],["un",91.54],["plan",91.74],["vas",92.5],["a",92.76],["ser",92.92],["misterioso",93.14],["elegante",94.44],["interesante",95.7],["te",96.92],["sientas",97.04],["junto",97.42],["a",97.58],["la",97.78],["ventana",97.84],["con",98.24],["un",98.48],["libro",98.62],["gordisimo",98.86],["como",99.92],["si",100.12],["fueras",100.26],["un",100.58],["intelectual",100.72],["el",101.3],["libro",102.06],["esta",102.34],["al",102.84],["reves",103.06],["sara",103.98],["abre",104.34],["su",104.76],["ventana",104.94],["te",105.84],["mira",105.96],["mira",106.64],["el",106.92],["libro",107.14],["y",107.74],["te",107.9],["dice",108.02],["hola",108.86],["vecino",109.06],["tu",110.08],["dices",110.28],["hola",111.14],["record",111.88],["igualado",112.26],["y",113.36],["tu",113.46],["cara",113.6],["se",113.84],["pone",114.08],["roja",114.32],["muy",115.12],["roja",115.5],["como",116.38],["un",116.56],["tomate",116.76],["con",117.16],["fiebre",117.4],["eso",118.38],["tiene",118.66],["explicacion",118.98],["cuando",120.14],["te",120.28],["da",120.54],["verguenza",120.66],["tu",121.14],["cuerpo",121.48],["suelta",121.78],["adrenalina",122.22],["y",123.08],["los",123.24],["vasos",123.36],["sanguineos",123.68],["de",124.22],["la",124.32],["cara",124.44],["se",124.68],["abren",124.9],["mas",125.66],["sangre",125.98],["mas",126.76],["rojo",126.94],["charles",127.3],["darwin",128.18],["escribio",128.62],["que",129.28],["ponerse",129.44],["rojo",130.04],["es",130.42],["la",130.72],["expresion",130.88],["mas",131.38],["peculiar",131.7],["y",132.1],["mas",132.48],["humana",132.7],["de",133.12],["todas",133.24],["ningun",134.06],["otro",134.5],["animal",134.68],["se",135.04],["sonroja",135.3],["de",135.78],["verguenza",135.9],["o",136.94],["sea",137.08],["que",137.28],["eres",137.7],["muy",137.96],["humano",138.36],["muchisimo",139.36],["demasiado",140.46],["a",141.76],["la",141.9],["manana",141.96],["siguiente",142.22],["descubres",142.58],["algo",143.28],["que",143.58],["lo",143.76],["cambia",143.92],["todo",144.26],["ella",145.14],["sale",145.34],["de",145.62],["casa",145.8],["para",146.04],["ir",146.32],["al",146.48],["instituto",146.6],["a",147.1],["las",147.26],["ocho",147.42],["y",147.68],["cuarto",147.76],["exactamente",148.84],["a",149.44],["la",149.62],["misma",149.68],["hora",149.94],["que",150.24],["tu",150.42],["el",150.58],["lunes",151.3],["sales",151.58],["a",152.06],["las",152.26],["ocho",152.36],["y",152.62],["cuarto",152.7],["coincidis",153.46],["en",154.02],["la",154.16],["puerta",154.28],["caminais",155.12],["juntos",155.46],["hasta",155.74],["la",156.06],["esquina",156.24],["en",157.06],["silencio",157.24],["bueno",158.32],["ella",158.94],["habla",159.14],["tu",159.92],["asientes",160.06],["el",161.5],["martes",161.64],["sales",162.06],["a",162.42],["las",162.64],["ocho",162.74],["y",163.02],["catorce",163.1],["por",163.9],["si",164.12],["acaso",164.26],["el",165.16],["miercoles",165.3],["a",165.72],["las",166.1],["ocho",166.24],["y",166.52],["diez",166.62],["esperas",167.42],["detras",167.88],["del",168.2],["seto",168.38],["diez",168.66],["minutos",169.46],["para",170.42],["salir",170.7],["por",171.02],["casualidad",171.4],["justo",172.18],["cuando",172.62],["sale",172.98],["ella",173.38],["el",174.34],["jueves",174.48],["te",174.8],["ve",175.08],["detras",175.16],["del",175.5],["seto",175.66],["le",176.48],["dices",176.58],["que",176.84],["estabas",177.04],["buscando",177.42],["una",177.72],["lagartija",178.06],["ella",178.82],["te",179.06],["ayuda",179.28],["a",179.56],["buscarla",179.72],["cinco",180.74],["minutos",181.08],["buscando",181.38],["una",181.88],["lagartija",182.3],["que",182.94],["no",183.12],["existe",183.32],["es",184.32],["la",184.52],["conversacion",184.64],["mas",185.28],["larga",185.7],["que",186.14],["habeis",186.3],["tenido",186.56],["nunca",186.82],["y",187.68],["eso",187.88],["tiene",188.14],["explicacion",188.46],["tambien",189.1],["en",189.44],["los",190.16],["anos",190.3],["cincuenta",190.54],["unos",191.16],["investigadores",191.62],["estudiaron",192.42],["una",193.06],["residencia",193.34],["de",193.92],["estudiantes",194.06],["en",194.62],["estados",194.88],["unidos",195.16],["querian",196],["saber",196.4],["quien",196.72],["se",197.1],["hacia",197.38],["amigo",197.64],["de",198],["quien",198.22],["y",198.92],["descubrieron",199.1],["que",199.72],["no",199.92],["importaba",200.12],["tanto",200.62],["si",200.96],["la",201.22],["gente",201.36],["se",201.6],["parecia",201.84],["ni",202.36],["si",202.8],["tenia",202.96],["los",203.28],["mismos",203.46],["gustos",203.82],["lo",204.7],["que",204.94],["mas",205.08],["importaba",205.28],["era",205.98],["vivir",206.4],["cerca",206.66],["la",207.12],["gente",207.8],["se",208.06],["hacia",208.34],["amiga",208.6],["sobre",209.16],["todo",209.4],["de",210],["sus",210.18],["vecinos",210.38],["mas",210.82],["cercanos",211.26],["y",212.18],["en",212.42],["mil",212.58],["novecientos",212.68],["sesenta",213.38],["y",213.74],["ocho",213.88],["el",214.16],["psicologo",214.56],["robert",215.02],["zajonc",215.42],["encontro",216.1],["otra",216.72],["cosa",217.02],["curiosa",217.32],["cuantas",218.38],["mas",218.68],["veces",218.98],["vemos",219.36],["algo",219.64],["mas",220.52],["nos",220.68],["suele",220.9],["gustar",221.26],["una",222.16],["cara",222.34],["una",223.12],["cancion",223.26],["una",224.32],["palabra",224.46],["lo",225.3],["llamo",225.54],["el",225.96],["efecto",226.2],["de",226.54],["mera",226.84],["exposicion",227.12],["vivir",227.78],["al",228.62],["lado",228.78],["de",228.98],["alguien",229.16],["es",229.46],["verle",229.88],["todos",230.24],["los",230.58],["dias",230.9],["en",231.68],["la",231.82],["ventana",231.92],["en",232.86],["la",232.94],["puerta",233.06],["en",233.84],["la",234],["esquina",234.1],["buscando",234.86],["lagartijas",235.42],["la",236.58],["ciencia",236.78],["esta",237.2],["de",237.72],["tu",237.92],["parte",238.02],["pero",238.82],["vivir",239.06],["al",239.36],["lado",239.64],["tambien",239.88],["tiene",240.36],["un",240.82],["problema",240.98],["ella",241.84],["tambien",242.16],["te",242.7],["ve",243],["a",243.14],["ti",243.32],["una",243.94],["noche",244.14],["se",244.42],["te",244.92],["olvida",245.04],["bajar",245.32],["la",245.74],["persiana",245.9],["y",246.34],["das",246.96],["tu",247.16],["concierto",247.44],["privado",248],["con",249.02],["el",249.12],["cepillo",249.26],["en",250.08],["pijama",250.28],["de",250.68],["dinosaurios",250.88],["cantando",251.9],["a",252.5],["gritos",252.62],["una",252.96],["cancion",253.24],["de",253.7],["amor",253.92],["cuando",254.66],["terminas",254.86],["haces",255.86],["una",256.1],["reverencia",256.34],["y",257.48],["al",257.56],["otro",257.68],["lado",257.86],["en",258.48],["su",258.58],["ventana",258.74],["sara",259.62],["aplaude",259.92],["te",260.94],["tiras",261.1],["al",261.5],["suelo",261.66],["te",262.36],["arrastras",262.5],["hasta",263],["la",263.24],["persiana",263.4],["la",264.34],["bajas",264.56],["te",265.44],["quedas",265.56],["tumbado",265.84],["en",266.26],["la",266.42],["alfombra",266.54],["una",267],["hora",267.38],["entera",267.68],["mirando",268.44],["el",268.84],["techo",269.02],["pensando",269.7],["en",270.1],["mudarte",270.34],["a",270.76],["otro",270.94],["pais",271.14],["al",271.44],["dia",272.2],["siguiente",272.36],["estas",273.12],["convencido",273.26],["de",273.92],["que",274.1],["lo",274.2],["sabe",274.34],["todo",274.58],["el",274.94],["instituto",275.16],["de",276.12],["que",276.3],["todos",276.42],["te",276.76],["miran",277.04],["de",277.74],["que",277.94],["alguien",278.06],["lo",278.42],["ha",278.7],["grabado",278.82],["pues",279.72],["no",279.94],["los",280.6],["psicologos",280.76],["tienen",281.34],["un",281.64],["nombre",281.84],["para",282.2],["eso",282.44],["el",283.18],["efecto",283.32],["foco",283.68],["sentimos",284.68],["que",285.18],["todo",285.44],["el",285.72],["mundo",285.92],["se",286.2],["fija",286.42],["en",286.68],["nuestros",286.84],["errores",287.04],["como",287.86],["si",288.12],["nos",288.26],["iluminara",288.42],["un",288.96],["foco",289.18],["de",289.52],["teatro",289.66],["en",290.56],["un",290.72],["experimento",290.84],["famoso",291.54],["de",291.84],["la",292.14],["universidad",292.22],["de",292.8],["cornell",292.96],["pusieron",293.26],["a",294.04],["unos",294.22],["estudiantes",294.38],["una",294.98],["camiseta",295.32],["muy",295.86],["vergonzosa",296.24],["y",296.98],["los",297.34],["mandaron",297.48],["a",297.92],["una",298.08],["sala",298.22],["llena",298.52],["de",298.96],["gente",299.08],["ellos",299.38],["creian",300.28],["que",300.72],["la",300.9],["mitad",301.04],["de",301.3],["la",301.48],["sala",301.58],["se",301.86],["habia",302.1],["fijado",302.34],["en",303.24],["realidad",303.46],["solo",304.08],["se",304.38],["fijo",304.58],["mas",304.94],["o",305.24],["menos",305.4],["una",305.64],["de",306.1],["cada",306.28],["cuatro",306.46],["personas",306.86],["los",307.9],["demas",308.06],["estan",308.36],["demasiado",308.82],["ocupados",309.24],["con",310],["sus",310.24],["propias",310.46],["verguenzas",310.86],["y",311.96],["sara",312.12],["no",312.36],["se",312.82],["lo",312.98],["ha",313.1],["contado",313.2],["a",313.66],["nadie",313.82],["solo",314.56],["te",314.86],["dice",315.02],["en",315.78],["la",315.8],["esquina",315.9],["cantas",316.76],["fatal",317.24],["pero",318.2],["bailas",318.44],["bien",318.84],["no",319.58],["sabes",319.82],["si",320.14],["es",320.4],["un",320.54],["insulto",320.68],["o",321.32],["un",321.5],["piropo",321.66],["lo",322.54],["apuntas",322.72],["en",323.14],["tu",323.32],["diario",323.4],["igual",323.72],["pasan",324.04],["las",325.06],["semanas",325.22],["y",326.18],["empezais",326.36],["a",326.78],["hablar",326.94],["de",327.14],["ventana",327.42],["a",327.92],["ventana",328.04],["primero",328.86],["con",329.32],["gestos",329.56],["luego",330.46],["con",330.76],["carteles",331.1],["de",331.52],["papel",331.7],["escritos",332.3],["con",332.74],["rotulador",333.04],["pegados",333.9],["al",334.26],["cristal",334.46],["has",335.36],["hecho",335.52],["los",335.72],["deberes",335.88],["de",336.26],["mates",336.38],["no",337.02],["yo",337.8],["tampoco",338],["manana",338.88],["vamos",339.24],["juntos",339.44],["vale",340.32],["por",341.14],["las",341.3],["noches",341.48],["ella",342.18],["apaga",342.44],["y",342.88],["enciende",343.06],["la",343.44],["linterna",343.64],["tres",344.18],["veces",344.52],["significa",345.42],["buenas",346.1],["noches",346.64],["tu",347.62],["contestas",347.82],["con",348.6],["la",348.78],["tuya",348.92],["tu",349.24],["perro",349.6],["ladra",349.96],["cada",350.28],["vez",350.58],["no",351.36],["entiende",351.62],["nada",351.96],["y",353],["entonces",353.18],["llega",354.02],["la",354.38],["pelea",354.6],["un",355.64],["domingo",355.94],["tu",356.62],["balon",356.68],["cruza",356.96],["la",357.36],["valla",357.5],["y",357.76],["aterriza",357.96],["en",358.46],["el",358.58],["jardin",358.7],["de",359.1],["sara",359.24],["justo",360.04],["encima",360.5],["de",360.86],["las",361.02],["rosas",361.2],["de",361.58],["su",361.72],["madre",361.86],["le",362.82],["tocas",363],["el",363.28],["timbre",363.46],["te",364.3],["abre",364.42],["ella",364.64],["y",365.52],["te",365.58],["dice",365.7],["que",365.94],["es",366.16],["la",366.32],["tercera",366.5],["vez",367.02],["esta",367.24],["semana",367.62],["tu",368.5],["dices",368.7],["que",368.98],["no",369.18],["es",369.34],["para",369.48],["tanto",369.6],["ella",370.5],["dice",370.74],["que",371.04],["eres",371.3],["un",371.54],["pesado",371.72],["tu",372.62],["dices",372.78],["que",373.1],["ella",373.36],["es",373.6],["una",373.76],["mandona",373.92],["ella",374.32],["cierra",375.16],["la",375.78],["puerta",375.96],["esa",376.98],["noche",377.36],["su",377.92],["persiana",378.06],["esta",378.42],["bajada",378.74],["no",379.74],["hay",380.02],["linterna",380.14],["no",381.02],["hay",381.28],["carteles",381.38],["tres",382.6],["metros",382.86],["nunca",383.2],["habian",383.6],["parecido",384.1],["tan",384.62],["lejos",384.94],["pasan",386.3],["dos",386.82],["dias",387.02],["te",387.94],["sientas",388.06],["en",388.42],["tu",388.58],["ventana",388.72],["mirando",389.14],["su",389.72],["persiana",389.9],["cerrada",390.34],["y",391.5],["a",391.56],["medianoche",391.64],["ves",392.22],["luz",392.7],["por",393.02],["una",393.3],["rendija",393.48],["la",394.6],["persiana",394.8],["sube",395.22],["un",395.66],["poquito",395.82],["ella",396.86],["esta",397.16],["ahi",397.7],["con",398.44],["los",398.58],["ojos",398.78],["rojos",399.04],["pega",399.52],["un",400.44],["cartel",400.58],["al",400.98],["cristal",401.12],["dice",402.2],["lo",403.08],["siento",403.2],["tu",404.28],["escribes",404.46],["yo",405.48],["tambien",405.68],["que",406.52],["te",406.6],["pasa",406.72],["y",407.66],["ella",407.88],["te",408.16],["lo",408.5],["cuenta",408.62],["a",409.54],["carteles",409.64],["que",410.74],["echa",410.96],["de",411.16],["menos",411.32],["su",411.56],["ciudad",411.8],["a",412.58],["sus",412.66],["amigas",412.76],["su",413.58],["antigua",413.74],["habitacion",414.18],["que",415.3],["aqui",415.36],["no",415.6],["conoce",415.8],["a",416.24],["casi",416.34],["nadie",416.54],["que",417.36],["la",417.54],["unica",417.66],["persona",417.9],["con",418.42],["la",418.66],["que",418.8],["habla",418.94],["de",419.18],["verdad",419.36],["es",419.68],["el",420.46],["vecino",420.6],["de",421],["la",421.14],["ventana",421.24],["tu",422.3],["te",422.5],["quedas",423.26],["mirando",423.54],["ese",423.96],["ultimo",424.2],["cartel",424.52],["mucho",425.06],["rato",425.48],["al",425.94],["dia",426.94],["siguiente",427.12],["quieres",427.54],["hacer",428.02],["algo",428.36],["especial",428.64],["su",429.58],["gato",429.82],["un",430.44],["gato",430.64],["naranja",430.88],["y",431.4],["gordisimo",431.56],["llamado",432.14],["pepino",432.66],["se",433.74],["ha",433.86],["subido",433.94],["al",434.28],["tejado",434.44],["de",434.8],["tu",434.96],["caseta",435.1],["del",435.46],["jardin",435.64],["y",436.1],["no",436.48],["sabe",436.66],["bajar",437.02],["sara",438.02],["esta",438.28],["abajo",438.56],["preocupada",439.24],["tu",440.3],["subes",440.46],["con",441.28],["estilo",441.44],["como",442.28],["un",442.48],["bombero",442.68],["de",443.18],["pelicula",443.26],["coges",444.28],["a",444.62],["pepino",444.76],["pepino",445.62],["te",446.04],["arana",446.24],["la",446.52],["cara",446.66],["pierdes",446.9],["el",447.8],["equilibrio",447.96],["y",448.82],["caes",449.12],["de",449.52],["culo",449.92],["encima",450.5],["de",450.96],["las",451.18],["rosas",451.32],["de",451.72],["su",451.86],["madre",452],["otra",452.8],["vez",453.32],["las",453.56],["rosas",453.8],["pero",455.16],["pepino",455.36],["esta",455.76],["a",456.08],["salvo",456.28],["y",457.06],["sara",457.16],["en",457.78],["vez",457.88],["de",458.02],["reirse",458.2],["de",458.62],["ti",458.76],["se",459.32],["rie",459.4],["contigo",459.74],["te",460.84],["ayuda",460.96],["a",461.22],["levantarte",461.38],["te",462.42],["quita",462.54],["una",462.78],["espina",462.96],["del",463.3],["pelo",463.48],["eso",464.34],["tambien",464.6],["tiene",465.12],["nombre",465.36],["se",466.2],["llama",466.32],["el",466.6],["efecto",467.04],["del",467.38],["tropiezo",467.68],["en",468.72],["los",468.9],["anos",469.02],["sesenta",469.24],["el",469.66],["psicologo",470.16],["elliot",470.66],["aronson",471.1],["hizo",471.82],["escuchar",472.18],["a",472.68],["unos",472.76],["estudiantes",472.94],["la",473.56],["grabacion",473.8],["de",474.24],["un",474.44],["concursante",474.58],["muy",475.24],["listo",475.66],["que",476.16],["al",476.5],["final",476.58],["tiraba",476.82],["un",477.24],["cafe",477.38],["encima",477.64],["de",478.1],["su",478.26],["traje",478.38],["y",479.2],["aquel",479.44],["torpe",479.76],["les",480.18],["cayo",480.5],["mejor",480.84],["que",481.16],["el",481.36],["mismo",481.48],["concursante",481.78],["sin",482.56],["el",482.86],["cafe",483],["ojo",483.92],["solo",484.58],["funciona",484.86],["si",485.36],["antes",485.64],["has",485.96],["demostrado",486.18],["que",486.72],["vales",486.96],["para",487.32],["algo",487.52],["si",488.4],["solo",488.54],["eres",488.8],["torpe",488.96],["eres",489.88],["solo",490.1],["torpe",490.5],["pero",491.58],["tu",491.8],["rescataste",492.06],["a",492.92],["pepino",493.06],["asi",493.9],["que",494.12],["puedes",494.36],["aplastar",494.68],["unas",495.24],["rosas",495.4],["la",496.5],["madre",496.74],["de",496.96],["sara",497.14],["no",497.38],["opina",497.74],["lo",498.04],["mismo",498.18],["pero",498.9],["te",499.12],["da",499.3],["una",499.42],["tirita",499.58],["y",500.02],["un",500.32],["trozo",500.46],["de",500.8],["bizcocho",500.92],["a",501.38],["partir",502.22],["de",502.48],["ahi",502.7],["todo",502.88],["cambia",503.36],["haceis",504.4],["los",504.7],["deberes",504.9],["juntos",505.3],["cada",505.92],["uno",506.1],["en",506.36],["su",506.5],["ventana",506.62],["ensenandoos",507.32],["los",508.14],["cuadernos",508.28],["ella",509.42],["te",509.64],["explica",509.86],["mates",510.28],["tu",511.18],["le",511.28],["explicas",511.44],["historia",511.86],["mal",512.86],["pero",513.3],["con",513.46],["mucho",513.74],["entusiasmo",514.04],["le",515.34],["ensenas",515.44],["el",515.9],["barrio",516.04],["la",516.8],["tienda",516.88],["de",517.12],["chuches",517.3],["el",518],["parque",518.1],["con",518.44],["el",518.6],["columpio",518.72],["que",519.14],["chirria",519.28],["el",520.2],["banco",520.34],["desde",520.58],["donde",520.82],["se",521.1],["ve",521.38],["el",521.52],["atardecer",521.66],["ella",522.86],["te",523.12],["ensena",523.3],["su",523.68],["banda",523.88],["favorita",524.16],["resulta",525.2],["que",525.7],["no",525.88],["esta",526.08],["mal",526.28],["pasan",527.3],["los",527.74],["meses",527.9],["llega",528.7],["el",528.88],["ultimo",529.06],["dia",529.32],["de",529.58],["clase",529.72],["antes",530.02],["del",530.36],["verano",530.62],["volveis",530.98],["juntos",531.92],["a",532.16],["casa",532.42],["como",533.12],["siempre",533.36],["y",534.3],["en",534.44],["la",534.54],["puerta",534.64],["ella",535.3],["se",535.56],["para",535.56],["sabes",536.64],["que",536.9],["mis",537.04],["padres",537.24],["podian",537.5],["elegir",537.98],["entre",538.42],["dos",538.68],["casas",538.98],["una",539.8],["en",540.06],["el",540.22],["centro",540.34],["con",540.96],["piscina",541.18],["y",542.06],["esta",542.2],["tu",543.1],["no",543.22],["lo",543.36],["sabias",543.46],["ella",544.48],["sigue",544.76],["el",545.6],["dia",545.8],["que",545.94],["vinimos",546.1],["a",546.42],["verla",546.6],["me",547.26],["asome",547.32],["a",547.32],["mi",547.74],["futura",547.88],["habitacion",548.24],["y",549.36],["en",549.4],["la",549.5],["ventana",549.58],["de",549.96],["enfrente",550.1],["habia",550.54],["un",550.84],["chico",551.08],["en",551.8],["pijama",551.86],["de",552.2],["dinosaurios",552.36],["cantando",553.18],["con",553.68],["un",553.92],["cepillo",554.06],["pausa",554.46],["y",555.76],["les",556.08],["dije",556.22],["a",556.48],["mis",556.58],["padres",556.7],["esta",557.52],["quiero",558.28],["esta",558.52],["te",559.52],["quedas",559.62],["sin",559.98],["palabras",560.22],["ella",561.4],["se",561.68],["pone",561.88],["roja",562.12],["muy",563],["roja",563.38],["como",564.3],["un",564.48],["tomate",564.66],["con",565.06],["fiebre",565.28],["darwin",566.66],["tenia",566.66],["razon",567.06],["es",567.98],["lo",568.1],["mas",568.28],["humano",568.56],["del",568.9],["mundo",569.18],["ella",570.08],["entra",570.32],["en",570.62],["su",570.76],["casa",570.88],["corriendo",571.08],["sin",572],["mirar",572.14],["atras",572.42],["esa",573.42],["noche",573.68],["te",573.9],["asomas",574.38],["a",574.68],["la",574.88],["ventana",574.94],["su",575.92],["luz",576.06],["esta",576.26],["encendida",576.6],["hay",577.76],["un",577.92],["cartel",578.04],["nuevo",578.36],["pegado",578.86],["al",579.18],["cristal",579.3],["dice",579.76],["manana",580.98],["vamos",581.44],["juntos",581.78],["manana",582.88],["es",583.34],["sabado",583.54],["no",584.36],["hay",584.48],["clase",584.62],["coges",585.48],["tu",585.84],["rotulador",585.98],["pero",586.9],["no",587.12],["hace",587.38],["falta",587.54],["sacas",588.42],["de",588.78],["debajo",588.9],["de",589.24],["la",589.38],["cama",589.48],["un",589.76],["cartel",589.98],["que",590.38],["escribiste",590.54],["hace",591.12],["dos",591.38],["anos",591.64],["el",592.44],["primer",592.56],["dia",592.84],["que",593.14],["la",593.32],["viste",593.42],["en",593.7],["clase",593.84],["nunca",594.72],["te",595.08],["atreviste",595.24],["a",595.68],["usarlo",595.78],["lo",596.7],["pegas",596.88],["en",597.22],["el",597.38],["cristal",597.5],["dice",598.38],["si",599.36]],mc=(n,e=0)=>{for(let[t,i]of r1)if(i>=e&&t===n)return i;return e};var ko=(n,e,t=200,i=200)=>{let s=new oe(new Xe(t,i),V(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},pi=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Le(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})},Ru=(n,e=1.2,t)=>dt(Le(512,280,i=>{i.clearRect(0,0,512,280),i.fillStyle="#FBF7EC",i.strokeStyle="#2A2A34",i.lineWidth=8,i.beginPath(),i.roundRect(10,10,492,200,60),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,205),i.lineTo(80,270),i.lineTo(170,205),i.fill(),i.stroke(),i.fillStyle="#2A2A34",i.font=`900 ${t||(n.length>14?40:n.length>10?54:80)}px Fraunces`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,256,112)}),e,e*.55);function o1(n,e=.5){let t=new Pe,i=Le(1024,256,r=>{r.clearRect(0,0,1024,256);let o=ht(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,u=r.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),u.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=u,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new oe(new Xe(400,100),new At({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:on}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function a1(n,e=0,t=-1){for(let i=0;i<4;i++){let s=k(5,.22,.6,V("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new oe(new ui(.16,.35,6),V(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function gc(n,e,t,i=1){let s=new oe(new hn(.1*i,16,12),V("#D83A2A",{roughness:.35}));return s.position.set(n,e,t),s.castShadow=!0,s}function yc(n,e=40,t=3,i=[-12,12,-40,4]){let s=ht(t),r=Le(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=dt(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function Cu(n,e=200,t=5,i=10,s=30,r=2){let o=ht(t),a=Le(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=dt(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}je.pasteleria=n=>{n.fog=new at("#F3D2C0",.02),n.add(Js(16,14,"#F2E6DA","#E2CFC0",8)),n.add(k(16,5,.3,V("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(k(.12,5,.05,V("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(k(5.4,1,.9,V("#8A5A3C"),0,.5,-1.2)),n.add(k(5.5,.08,1,V("#F4EEE6"),0,1.04,-1.2)),n.add(k(3.6,.1,.5,V("#F4EEE6"),0,2.1,-3)),n.add(k(3.6,.1,.5,V("#F4EEE6"),0,2.9,-3));let e=dt(pi(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new ct("#FFF0F0","#A07060",1));let t=Tt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new an("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};je.espacio=n=>{n.background=new ye("#05060E"),Di(n,2600,200,3),n.add(new ct("#8FA8FF","#101020",.5));let e=new Ws("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};je.aula=n=>{n.fog=new at("#E8DCC8",.02),n.add(Js(16,16,"#C9B89A","#BBA98A",10)),n.add(k(16,5,.3,V("#E8DCC0"),0,2.5,-3.6)),n.add(k(4.4,1.8,.06,V("#2F5A48"),0,2.3,-3.42)),n.add(k(4.6,.1,.2,V("#8E6242"),0,1.36,-3.35));let e=dt(Le(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new ct("#FFFFFF","#9A8A70",1)),n.add(Tt("#FFE8C8",2.2,[-6,8,6],10,40))};je.ruaV=(n,e)=>{Mr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(yc(n,60,4),Cu(n,260,6,9,40))};je.apagon=(n,e)=>{n.fog=new at("#0A0C18",.03),Yt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Di(n,1800,200,4),No(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(Li(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Li(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new ct("#5A64A8","#141420",.5)),n.add(Tt("#8A9AE0",.7,[-10,20,10],30,90))};je.azotea=(n,e)=>{n.background=new ye("#03040A"),n.fog=new at("#060814",.008),Di(n,4200,200,9),o1(n,e.ang??.45),fi(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=k(16,.3,12,V("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(k(16,.5,.2,V("#4A4A54"),0,.25,-8)),n.add(k(1.4,1.2,1.4,V("#4A4A54"),4.5,.6,-5)),n.add(new ct("#6A78C8","#141420",.55)),n.add(Tt("#9AAAF0",.6,[-6,10,6],12,40))};je.panaderia=n=>{je.pasteleria(n);let e=dt(pi(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};je.metro=n=>{n.background=new ye("#0A0C10"),n.fog=new at("#0C1014",.07);let e=V("#4A4E54",{roughness:.9,side:rn}),t=new oe(new Ot(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new Pe,s=new oe(new Ot(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=k(6.4,.1,60,V("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(k(.08,.12,60,V("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(k(2.2,.08,.2,V("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new an("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=Nt("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new ct("#8A90A0","#202024",1.1))};je.bosque=(n,e)=>{n.fog=new at(e.nieve?"#E8EEF4":"#C8D0B8",.025),Yt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ko(n,e.nieve?"#F2F4F8":"#6E8A48");let t=ht(14);for(let i=0;i<26;i++)On(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=Li(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),yc(n,0)}n.add(new ct("#E9EEFF","#5A6A4A",.95)),n.add(Tt("#FFE8C0",2.4,[-10,14,8],18,60))};je.rio=(n,e)=>{je.parque(n,e);let t=new oe(new Xe(60,3.4),new Ke({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};je.playa=(n,e)=>{let t=!!e.dusk;n.fog=new at(t?"#F2A880":"#CFE8F0",.006),Yt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=Nt(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=ko(n,"#E8D4A0"),r=new oe(new Xe(800,400),new Ke({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=k(800,.02,.6,V("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new oe(new Ao(1.1,0),V("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new ct(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(Tt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};je.svalbard=n=>{n.fog=new at("#C8D8E8",.02),Yt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),ko(n,"#F4F6FA");let e=ht(19);for(let l=0;l<8;l++){let c=new oe(new ui(10+e()*12,10+e()*10,7),V("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new oe(new hn(14,32,16,0,Math.PI*2,0,Math.PI/2),V("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=k(3,4.4,6,V("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=k(1.4,2.2,.1,V("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Zn(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=Nt("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=Nt("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new ct("#D8E8FF","#8A9AB0",1.1)),n.add(Tt("#F0F4FF",1.6,[-8,10,8],16,50))};je.huerto=(n,e)=>{je.parque(n,e),a1(n,0,-1.4)};je.biblio=n=>{n.fog=new at("#4A3A2A",.03),n.add(ss(18,14,"#6D4A33")),n.add(k(18,6,.3,V("#5A3E2A"),0,3,-3.4));let e=ht(8);for(let s=0;s<5;s++){n.add(k(14,.06,.4,V("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(k(o,a,.3,V(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new ct("#FFE8C8","#3A2A1C",.7));let t=new an("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=Nt("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};je.hotel=n=>{n.fog=new at("#E8D8C0",.02),n.add(ss(18,14,"#8A5A3A")),n.add(k(18,6,.3,V("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(k(2.4,2.6,.05,V("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=dt(Le(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=k(3.2,.6,2.4,V("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(k(3.3,1.4,.2,V("#6A3A2A"),0,.7,-2.8)),yc(n,0);let t=dt(Le(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new ct("#FFF0E0","#8A6A4A",1)),n.add(Tt("#FFE0B0",2,[-4,8,6],10,30))};je.selva=n=>{n.fog=new at("#7AA870",.05),Yt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),ko(n,"#3E5A2A");let e=ht(23);for(let t=0;t<40;t++)On(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);Cu(n,160,9,12,12,3),n.add(new ct("#D8F0C8","#2A3A1A",.9)),n.add(Tt("#FFF0C0",2.2,[-6,14,4],14,50))};je.desierto=n=>{je.sabana(n,{})};var Ec=(n,e,t=200,i=200)=>{let s=new oe(new Xe(t,i),V(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Fu=(n,e,t)=>{let i=new F(...t).applyAxisAngle(new F(0,1,0),e);return[n[0]+i.x,n[1]+i.y,n[2]+i.z]},l1=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return Le(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function Qs(n,e=.9,t={}){let i=l1(n,t),s=new oe(new Xe(e,e*(t.h||360)/(t.w||512)),new Ke({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function Vo(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new Pe,[u,d,p,g]=s,y=()=>l?new Ke({map:Oo(i,3,3),roughness:.95}):V(i,{roughness:.9}),m=u-p/2+e/2,f=e/2-(u+p/2),E=d-g/2,M=t-(d+g/2);h.add(k(m,t,.3,y(),-e/2+m/2,t/2,0)),h.add(k(f,t,.3,y(),e/2-f/2,t/2,0)),h.add(k(p,E,.3,y(),u,E/2,0)),h.add(k(p,M,.3,y(),u,t-M/2,0));let v=V("#F4F0E4");for(let[N,B,G,j]of[[u-p/2,d,.1,g+.1],[u+p/2,d,.1,g+.1],[u,d+g/2,p+.2,.1],[u,d,.05,g]])h.add(k(G,j,.36,v,N,B,0));h.add(k(p+.4,.1,.5,v,u,d-g/2-.03,.12));let C=3.2,T=V(o,{roughness:.9});h.add(k(p+3,t,.2,T,u,t/2,-C)),h.add(k(.2,t,C,T,u-p/2-1.4,t/2,-C/2)),h.add(k(.2,t,C,T,u+p/2+1.4,t/2,-C/2)),h.add(k(p+3,.2,C,V("#8A6A4A"),u,E-c,-C/2)),h.add(k(p+3,.2,C,T,u,d+g/2+.5,-C/2));let R=new an("#FFC880",a?9:2.5,7,1.4);R.position.set(u,d+.6,-1.2),h.add(R);let P=Zn(p+2.6,t*.6,"#FFD9A0",a?.35:.08);P.position.set(u,d,-C+.12),h.add(P);let b=k(p-.04,g,.06,V("#E8E2D2",{roughness:.8}),u,d,.1);b.castShadow=!1,h.add(b);let x=[];for(let N=0;N<10;N++){let B=k(p-.04,.015,.07,"#B8B0A0",u,0,.11,!1);h.add(B),x.push([B,N])}let w=N=>{let B=Math.max(.001,g*N);b.scale.y=B/g,b.position.y=d+g/2-B/2,b.visible=N>.01,x.forEach(([G,j])=>{let q=d+g/2-(j+.5)*g/10;G.visible=N>.01&&q>d+g/2-B,G.position.y=q})};return w(0),h.userData={persiana:w,luz:N=>{R.intensity=N?9:2.5,P.material.emissiveIntensity=N?.35:.08},win:s,lamp:R},h.children.forEach(N=>{N.castShadow=N.castShadow??!0,N.receiveShadow=!0}),h}function _c(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new Pe;l.add(k(i,s,r,V(e,{roughness:.9}),0,s/2,-r/2));let c=new oe(new Ot(.01,i*.62,2.4,4,1),V(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(k(1.1,2.1,.1,V(o),0,1.05,.02)),l.add(k(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ke({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[u,d]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(k(1.3,1.2,.06,h(),u,d,.03)),l.add(k(1.5,.1,.2,"#F4F0E4",u,d-.65,.08));return l.add(k(2,.2,1.2,V("#B8AC9D"),0,.1,.6)),l.children.forEach(u=>{u.castShadow=!0,u.receiveShadow=!0}),l}function vc(n=4){let e=new Pe,t=ht(n*7);for(let i=0;i<n*3;i++){let s=new oe(new hn(.42+t()*.12,12,10),V(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function Iu(n=8,e="#E8E2D2"){let t=new Pe;for(let i=0;i<=n*4;i++)t.add(k(.1,1.3,.05,V(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(k(n,.08,.06,V(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function Pu(){let n=new Pe,e=ht(4);for(let t=0;t<7;t++){let i=new oe(new hn(.35,12,10),V("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new oe(new hn(.08,10,8),V(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function c1(){let n=new Pe;n.add(k(2.2,2,1.8,V("#8A6A4A",{roughness:.9}),0,1,0));let e=k(2.6,.12,2.3,V("#5A3E2A"),0,2.12,0);return n.add(e),n.add(k(.8,1.5,.05,V("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Lu(){let n=Le(256,128,t=>{t.fillStyle="#F4F0E4",t.fillRect(0,0,256,128),t.fillStyle="#2A2A34";for(let i=0;i<6;i++)t.beginPath(),t.arc(20+i*44,30+i%2*60,16,0,7),t.fill()}),e=new oe(new hn(.16,20,14),new Ke({map:n,roughness:.5}));return e.castShadow=!0,e}function Du(){let n=new Pe;n.add(k(2.4,2.8,5.5,V("#F4F0E4",{roughness:.6}),0,1.9,-1)),n.add(k(2.3,2,1.8,V("#4A86C7",{roughness:.5}),0,1.5,2.7)),n.add(k(2.1,.8,.05,V("#1A2233",{roughness:.1,metalness:.4}),0,2,3.62));let e=dt(pi(["MUDANZAS"],{bg:"#4A86C7",fg:"#FFFFFF",size:70,w:512,h:120}),3.2,.75);e.rotation.y=Math.PI/2,e.position.set(1.22,2.3,-1),n.add(e);for(let t of[-2.6,.4,2.7])for(let i of[-1,1]){let s=new oe(new Ot(.45,.45,.3,20),V("#222"));s.rotation.z=Math.PI/2,s.position.set(i*1.15,.45,t),n.add(s)}return n.children.forEach(t=>t.castShadow=!0),n}function rs(n=.6){let e=k(n,n*.8,n,V("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(k(n*1.01,.06,.15,V("#E8D8A8"),0,n*.4,0)),e}function Uu(n="#C9361F"){let e=new Pe;e.add(k(2,.45,.9,V(n),0,.4,0)),e.add(k(2,.7,.2,V(n),0,.8,-.4));for(let t of[-1,1])e.add(k(.2,.55,.9,V(n),t*.95,.55,0));return e.children.forEach(t=>t.castShadow=!0),e}function Go(){let n=new Pe;n.add(k(.04,1.4,.04,V("#E8667F"),0,.7,0));let e=new oe(new hn(.28,16,12),new Ke({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new oe(new Pi(.18,.04,8,16,Math.PI*1.2),V("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=Nt("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Wo(n=.9,e=1.2){let t=Le(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new Pe;i.add(k(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new oe(new Xe(n,e),V("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Nu(n=.9,e=1.2){let t=Le(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new Pe;i.add(k(n+.08,e+.08,.04,"#111",0,0,0));let s=new oe(new Xe(n,e),V("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function xc(n="#FFF2C0"){let e=new Pe,t=k(.07,.07,.26,V("#3A3A44",{metalness:.5}),0,0,0);e.add(t);let i=Nt(n,.9,.95);i.position.z=.16,e.add(i);let s=new an(n,4,4,1.5);return s.position.z=.25,e.add(s),e.userData.on=r=>{i.visible=r>.5,s.intensity=r>.5?4:0},e}function Xo(){let n=new Pe,e=new oe(new Ot(.03,.035,.3,10),V("#E8667F"));n.add(e);let t=new oe(new hn(.08,14,10),V("#2A2A34"));return t.scale.set(1,1.4,.6),t.position.y=.2,n.add(t),n}function qo(n="#3A4F7A",e="FILOSOF\xCDA"){let t=new Pe;t.add(k(.5,.64,.06,V(n),0,0,0));let i=Le(256,128,r=>{r.fillStyle=n,r.fillRect(0,0,256,128),r.fillStyle="#F2C14E",r.font="900 40px Fraunces",r.textAlign="center",r.fillText(e,128,76)}),s=new oe(new Xe(.46,.23),V("#fff"));return s.material.map=i,s.position.z=.032,t.add(s),t.userData.label=s,t}var h1=(n,e)=>{je.quarto(n,e);let t=Wo();t.position.set(-3,2.8,-2.8),n.add(t)};je.cuartoYo=(n,e)=>{h1(n,e);let t=Vo({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=Go();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Nu(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&Di(n,600,120,2)};je.cuartoElla=(n,e)=>{je.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(k(2.4,.45,3.2,V("#6B4A33"),1.7,.25,-1.4)),n.add(k(2.3,.3,3,V("#F3EEE4"),1.7,.6,-1.4)),n.add(k(2.38,.22,2,V("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=Go();t.position.set(-3.2,0,-2.2),n.add(t);let i=Nu();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Vo({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Wo(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&Di(n,600,120,2)};je.entreCasas=(n,e)=>{let t=!!e.night;n.background=new ye(t?"#0A0C1E":"#9FC8E8"),n.fog=new at(t?"#0E1028":"#CFE0EE",.02),Yt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&Di(n,1600,120,5),Ec(n,t?"#24301E":"#6E9A50");let i=Vo({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Vo({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Iu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new ct(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(Tt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};var Mc=(n,e=1)=>n<0?Fu([-2.3,0,-1],.62,[0,2.5,-e]):Fu([2.3,0,-1],-.62,[0,2.5,-e]);je.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new at(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Yt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Ec(n,t?"#24301E":"#6E9A50");let s=k(200,.02,6,V(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=k(200,.1,2,V("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,u,d]of o){let p=_c({col:u,roof:d,night:t});p.position.set(h,0,-3),n.add(p)}let a=vc(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=vc(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=vc(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])On(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));fi(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new ct(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(Tt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};je.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new at(t?"#E8A880":"#F2E2C8",.015),Yt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Ec(n,"#6E9A50");let i=Iu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=Pu();s.position.set(1.6,0,-1.2),n.add(s);let r=Pu();r.position.set(2.8,0,-2.6),n.add(r);let o=c1();o.position.set(-2.4,0,-3.2),n.add(o);let a=_c({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=_c({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])On(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new ct("#E9EEFF","#6A5A4A",1.05)),n.add(Tt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};je.esquina=(n,e)=>{je.barrio(n,e)};je.concurso=n=>{n.background=new ye("#140C24"),n.fog=new at("#1A1030",.03);let e=k(20,.2,12,V("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=Nt(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=dt(pi(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=k(1.2,1.1,.7,V("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(k(1.3,.1,.8,V("#F2C14E"),0,1.12,-.6)),n.add(new ct("#B8A8FF","#2A1A3A",.9));let s=new Gs("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};je.residencia=n=>{n.fog=new at("#E8DCC8",.02),n.add(ss(20,14,"#8A6A4A")),n.add(k(20,4,.3,V("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(k(1,2.2,.08,V("#6B4A33"),-7+e*2,1.1,-3.2));let t=dt(pi([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new ct("#FFFFFF","#9A8A70",1)),n.add(Tt("#FFE8C8",2,[-6,8,6],12,40))};var Ks=[],u1=999,Bu=n=>n+1<br.length?br[n+1]:u1,Ou=(n,e)=>{if(n.c){let[t,i,s,r]=n.c;n.cam=[[0,t,i],[e,s,r]];let o=(a,l)=>Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2]);n.f=[[0,o(t,i)],[e,o(s,r)]]}return n},ae=(n,e)=>{let t=br[n],i=Bu(n),s=Math.min(i,640)-t;Ks.push([(r,o)=>fc(r,o,Ou(e(s,t),s)),t,i])},d1=(n,e,t)=>{let i=Math.min(e,640)-n;Ks.push([(s,r)=>fc(s,r,Ou(t(i,n),i)),n,e])},Tr=(n,e,t)=>{let i=br[n],s=Bu(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=mc(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>d1(r[l],r[l+1],a))},Kt=n=>({tipo:"humano",...n}),ge=(n={})=>Kt({glow:.1,...n}),f1=()=>Le(256,256,n=>{n.clearRect(0,0,256,256),n.fillStyle="#5FB04A",n.beginPath(),n.ellipse(120,150,70,45,0,0,7),n.fill(),n.beginPath(),n.ellipse(190,90,34,28,0,0,7),n.fill(),n.fillRect(160,95,30,60),n.fillRect(80,180,18,40),n.fillRect(140,180,18,40),n.beginPath(),n.moveTo(55,150),n.lineTo(5,175),n.lineTo(60,172),n.fill(),n.fillStyle="#F2C14E";for(let e=0;e<5;e++)n.beginPath(),n.moveTo(70+e*22,112-e%2*4),n.lineTo(81+e*22,88),n.lineTo(92+e*22,112),n.fill();n.fillStyle="#111",n.beginPath(),n.arc(198,84,5,0,7),n.fill()}),p1=n=>{if(n.dino)return;let e=dt(f1(),.3,.3);e.position.set(0,-.36,.012),e.castShadow=!1,n.torso.add(e),n.dino=e},wn=(n={})=>{let e=n.pose;return ge({outfit:"avental",...n,pose:(t,i)=>{p1(t),e?e(t,i):t.pose()}})},He=(n={})=>Kt({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n}),m1=(n={})=>Kt({outfit:"rosa",hair:"bun",hairc:"#5A3A2A",lash:!0,glow:0,...n}),g1=(n={})=>Kt({outfit:"roxo",hair:"bun",hairc:"#2A1A12",lash:!0,glow:0,...n}),zu=(n={})=>Kt({outfit:"terno",hair:"old",hairc:"#E8E2D8",glow:0,...n}),Sc=(n={})=>Kt({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n}),js=(n={})=>({tipo:"gato",s:.5,...n}),Hu=(n={})=>({tipo:"perro",s:.55,...n}),Y=(n,e,t=0)=>mc(e,n+t)-n,ze=(n,e,t,i,s={})=>{let r=dt(pi(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...s}),t,t*(s.h||150)/(s.w||720));return r.position.set(...i),r.renderOrder=4,n.add(r),r},Qe=(n,e,t,i,s={})=>ze(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Et=(n,e,t,i,s)=>{let r=Ru(e,t,s);return r.position.set(...i),r.renderOrder=5,n.add(r),r},J=(n,e,t,i=1e9,s)=>{let r=Fe(t,t+.2,e)*(1-Fe(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&Er(n,s)},Yo=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),y1=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})},v1=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02});var zn=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},Ni=n=>{n.pose({armL:[8,6],armR:[8,6]}),zn(n)},bc=(n,e,t=1)=>{let i=Math.sin(e*7);n.pose({armL:[40+i*30*t,40],armR:[120,100],lean:i*8*t,bob:Math.abs(Math.cos(e*7))*.06*t,legL:[i*10,0],legR:[-i*10,0],head:i*6})},Tn=n=>{let e=new F;return n.arms.R.hand.getWorldPosition(e),e},Ar=n=>{let e=[-1,1].map(t=>{let i=Nt("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},yn=(n,e,t,i={})=>{e.updateMatrixWorld(!0);let s=Qs(t,i.ww||.9,i),[r,o]=e.userData.win,a=new F(r+(i.dx||0),o+(i.dy||0),.2);return e.localToWorld(a),s.position.copy(a),s.rotation.y=e.rotation.y,n.add(s),s},Bi=(n,e,t,i=1e9)=>n.visible=e>=t&&e<i,Zo=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=dt(Sr(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),Er(a,r)})},$o=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=Nt(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})};var zt={exposure:.95,bloom:.45};var Ze=Mc(-1),Dt=Mc(1),Ac=[[0,4.3,7.2],[0,3.9,-1.4]],mi={x:1,z:-7,y:.4},wr={x:-1,z:-7,y:.4},Jo=(n=[.9,1.9,-.6],e=[.95,1.9,-1.8])=>[n,[1,1.9,-7.2],e,[1,1.9,-7.2]],_1=(n=[-.9,1.9,-.6],e=[-.95,1.9,-1.8])=>[n,[-1,1.9,-7.2],e,[-1,1.9,-7.2]],E1=n=>{let e=k(3.8,3.2,.06,V("#E8E2D2",{roughness:.8}),0,2.6,-2.8);return e.castShadow=!1,n.add(e),t=>{let i=Math.max(.001,3.2*t);e.scale.y=i/3.2,e.position.y=4.2-i/2,e.visible=t>.01}};ae(0,(n,e)=>{let t=Y(e,"nadie"),i=Y(e,"concierto");return{amb:"quarto",fov:34,atores:[wn({x:.2,z:-.6,eyes:[[0,"shut"],[t,"happy"],[i,"shut"]],pose:(s,r)=>bc(s,r)})],extra:(s,r,[o])=>{let a=new Pe;a.add(k(1.3,2.3,.08,V("#8E6242"),0,1.25,0));let l=new oe(new Xe(1.1,2.1),new Ke({color:"#BFD8E8",roughness:.05,metalness:.6,emissive:"#5A7A9A",emissiveIntensity:.25}));l.position.set(0,1.25,.05),a.add(l),a.position.set(1.9,0,-1.6),a.rotation.y=-.5,s.add(a);let c=Xo();s.add(c);let h=Zo(s),u=Qe(s,["CONCIERTO PRIVADO"],1.6,[.2,2.5,-.6],{fg:"#C9361F"});return{update:(d,p,g)=>{let y=Tn(o);c.position.set(y.x,y.y+.12,y.z+.05),h(d,y,g),J(u,d,i,99,g)}}},c:[[-1.4,1.5,3.4],[.4,1.2,-1],[-.4,1.6,2.6],[.4,1.3,-1]],range:2}});ae(1,n=>({amb:"quarto",fov:30,atores:[wn({x:.2,z:-.6,eyes:[[0,"wide"]],pose:e=>e.pose({armL:[12,8],armR:[120,100]})})],extra:e=>{let t=Et(e,"\xA1BRRRUM!",1,[-.9,2.5,-1.2]);return{update:(i,s,r)=>{J(t,i,.2,99,r),t.position.x=-.9+Math.sin(i*40)*.02}}},c:[[-.2,1.6,2.4],[.2,1.5,-.6],[-.1,1.6,2],[.1,1.5,-.6]],range:1.4}));ae(2,(n,e)=>{let t=Y(e,"cajas"),i=Y(e,"sofa"),s=Y(e,"lampara");return{amb:"barrio",fov:34,atores:[Kt({outfit:"laranja",glow:0,x:6,z:1.6,eyes:[[0,"flat"]],move:r=>[et(6.4,4.6,Fe(t,t+3,r)),0,et(2.2,-.2,Fe(t,t+3,r))],pose:(r,o)=>{r.walk(o),r.pose({armL:[150,150],armR:[150,150],bob:Math.abs(Math.sin(o*6))*.03})}}),Kt({outfit:"azul",glow:0,x:7,z:1.8,eyes:[[0,"flat"]],move:r=>[et(7.6,5.4,Fe(i,i+3,r)),0,et(2.4,.2,Fe(i,i+3,r))],pose:(r,o)=>{r.walk(o),r.pose({armL:[100,60],armR:[100,60]})}})],extra:(r,o,[a,l])=>{let c=Du();c.position.set(6.8,0,4.2),c.rotation.y=Math.PI/2,r.add(c),[rs(),rs(.5),rs(.7)].forEach((y,m)=>{y.position.set(5.6+m*.8,0,2.6),r.add(y)});let u=Uu("#4A86C7");r.add(u);let d=Go();d.position.set(3.4,0,.6),r.add(d);let p=rs(.5);r.add(p);let g=[Qe(r,["CAJAS"],.9,[5.6,2.8,2.2]),Qe(r,["UN SOF\xC1"],.9,[5.6,2.8,2.2]),Qe(r,["L\xC1MPARA FLAMENCO"],1.4,[3.4,2.6,.6],{fg:"#E8667F"})];return{update:(y,m,f)=>{let E=a.root.position;p.position.set(E.x,2,E.z+.1),p.visible=y>t;let M=l.root.position;u.position.set(M.x,1.2,M.z+.2),u.visible=y>i,d.visible=y>s,J(g[0],y,t,i-.2,f),J(g[1],y,i,s-.2,f),J(g[2],y,s,99,f)}}},cam:[[0,[-3.2,4.4,0],[5,1.4,1]],[n,[-2.6,4.2,.4],[4.4,1.4,.6]]],f:[[0,8.5]],range:4}});ae(3,n=>({amb:"barrio",fov:30,atores:[He({x:4.5,z:-2.6,eyes:[[0,"look"]],move:e=>[4.5,0,-2.6+e*.6],pose:(e,t)=>{e.walk(t),e.pose({armL:[110,120],armR:[110,120]})}})],extra:(e,t,[i])=>{let s=rs(.45);return e.add(s),{update:()=>{let r=i.root.position;s.position.set(r.x,1.2,r.z+.15)}}},c:[[3,2,3.6],[4.5,1.5,-2],[3.4,1.9,2.8],[4.5,1.5,-1.6]],range:2,look:{bloom:.45}}));ae(4,(n,e)=>{let t=Y(e,"ventana"),i=Y(e,"dos");return{amb:"aula",fov:32,atores:[He({x:-1.6,z:-1.4,y:-.4,eyes:[[0,"look"]],pose:Ni}),ge({x:1.3,z:.4,y:-.4,eyes:[[0,"heart"],[i,"sad"]],pose:Ni}),Kt({outfit:"azul",hair:"bob",hairc:"#D9B65A",lash:!0,x:.4,z:-1.4,y:-.4,eyes:[[0,"look"]],pose:Ni})],extra:s=>{let r=Zn(1.6,1.4,"#CFE8FF",1.2);r.position.set(-3,2.3,-3.4),s.add(r);for(let[c,h]of[[-1.6,-1.4],[.4,-1.4],[1.3,.4]])s.add(k(.9,.06,.55,V("#C9A06A"),c,.75,h-.45)),s.add(k(.5,.06,.5,V("#4A86C7"),c,.45,h));let o=Qe(s,["SARA"],.9,[-1.6,2.3,-1.4],{fg:"#C9361F"}),a=Qe(s,["JUNTO A LA VENTANA"],1.7,[-1.6,2.3,-1.4]),l=ze(s,['2 A\xD1OS: "HOLA"'],1.5,[1,2.3,.4]);return{update:(c,h,u)=>{J(o,c,.2,t-.3,u),J(a,c,t,i-.3,u),J(l,c,i+.4,99,u)}}},c:[[-.2,1.9,3.6],[0,1,-.6],[0,1.7,3],[.1,1,-.6]],range:3}});ae(5,n=>({amb:"cuartoYo",fov:30,atores:[wn({x:-.3,z:-2,eyes:[[0,"wide"]],pose:e=>e.pose({armL:[110,130],armR:[110,130]})}),He({...mi,x:1.1,eyes:[[0,"look"]]})],extra:e=>{let t=Et(e,"\xA1\xBFAL LADO?!",.9,[.4,2.6,-2]);return{update:(i,s,r)=>J(t,i,.4,99,r)}},c:[[-.8,1.7,1.6],[.2,1.7,-3.4],[-.6,1.7,1.2],[.3,1.7,-3.6]],range:3}));ae(6,(n,e)=>{let t=Y(e,"corazon"),i=Y(e,"vuelves");return{amb:"cuartoYo",fov:32,atores:[wn({x:-.4,z:-2.2,eyes:[[0,"wide"],[i,"look"]],pose:(s,r)=>{s.pose({armL:[60,90],armR:[60,90]}),zn(s),s.root.position.y=et(-.1,-1,Fe(0,.6,r))+et(0,.75,Fe(i,n,r))}}),He({...mi,x:1.1,eyes:[[0,"look"]]})],extra:(s,r,[o])=>{let a=dt(Sr("\u2665","#E2483A",170),.45,.36);return a.renderOrder=5,s.add(a),{update:(l,c,h)=>{let u=o.root.position;a.position.set(u.x+.55,u.y+1.9,u.z+.2),a.visible=l>t&&l<i+.5,a.scale.setScalar(1+Math.abs(Math.sin(l*14))*.4),Er(a,h)}}},c:[[-1.6,1.1,1.4],[-.2,1,-2.2],[-1.2,1.2,1],[-.2,1.1,-2.2]],range:2}});ae(7,n=>({amb:"cuartoYo",fov:26,atores:[wn({x:0,z:-1.2,eyes:[[0,"wide"]]})],c:[[0,1.6,2.6],[0,1.6,-1.2],[0,1.62,1],[0,1.62,-1.2]],range:1,lookFn:e=>({exposure:1-e*.08,vig:.7})}));Tr(8,["puedes"],[n=>({amb:"entreCasas",fov:36,atores:[wn({x:Ze[0],y:Ze[1],z:Ze[2],eyes:[[0,"wide"]]}),He({x:Dt[0],y:Dt[1],z:Dt[2],eyes:[[0,"look"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[60,90]})})],extra:e=>{let t=k(3.2,.05,.05,V("#F2C14E",{emissive:"#F2C14E",emissiveIntensity:.6}),0,4,.2);e.add(t);let i=ze(e,["3 METROS"],1.4,[0,4.6,.4]);return{update:(s,r,o)=>{t.scale.x=Math.max(.01,Fe(1,2.5,s)),J(i,s,2,99,o)}}},fov:40,cam:[[0,[0,6.6,11],[0,5.5,-1.4]],[n,[0,6.4,9.4],[0,5.4,-1.4]]],f:[[0,12]],range:6}),(n,e)=>{let t=Y(e,"cortinas"),i=Y(e,"poster");return{amb:"cuartoYo",fov:30,atores:[He({...mi,x:.6,eyes:[[0,"look"]]})],extra:(s,r)=>{let o=k(.3,1.6,.05,V("#E8667F",{roughness:.9}),1.95,1.9,-6);s.add(o);let a=k(.3,1.6,.05,V("#E8667F",{roughness:.9}),.05,1.9,-6);return s.add(a),{update:()=>{}}},cam:[[0,[.9,1.9,-1],[1,1.9,-7.4]],[t,[1,1.9,-3.2],[.4,1.5,-8.4]],[i,[1.1,2,-3.6],[1.6,2.2,-9]],[n,[1.1,2,-3.9],[1.7,2.3,-9]]],f:[[0,6],[t,5.4]],range:3}}]);ae(9,n=>({amb:"cuartoElla",fov:32,atores:[He({x:.9,z:-2,eyes:[[0,"lookl"]]}),wn({...wr,eyes:[[0,"wide"]]})],c:[[1.6,1.8,1.4],[-.8,1.8,-6],[1.4,1.8,.9],[-.9,1.8,-6.5]],range:6,blur:6}));ae(10,(n,e)=>{let t=[Y(e,"pijama"),Y(e,"calcetines"),Y(e,"cama"),Y(e,"caballo")];return{amb:"quarto",fov:34,atores:[wn({x:.8,z:0,eyes:[[0,"down"],[t[1],"wide"]]})],extra:i=>{let s=ht(2);for(let l=0;l<6;l++){let c=k(.28,.05,.12,V(["#E8667F","#4A86C7","#F2C14E"][l%3]),-.4+s()*2.4,.03,-.2+s()*1.4);c.rotation.y=s()*3,i.add(c)}let r=k(2,.1,1.2,V("#4A86C7"),-1.6,.95,-.4);r.rotation.z=.2,i.add(r);let o=Wo();o.position.set(-3,2.8,-2.8),i.add(o);let a=[Qe(i,["PIJAMA DE DINOSAURIOS"],1.8,[.8,2.5,0],{fg:"#3E7A5C"}),Qe(i,["CALCETINES"],1.2,[.8,.7,.6]),Qe(i,["CAMA SIN HACER"],1.4,[-1.6,1.9,-.6]),ze(i,["P\xD3STER (8 A\xD1OS)"],1.4,[-3,1.9,-2.6])];return{update:(l,c,h)=>a.forEach((u,d)=>J(u,l,t[d],d<3?t[d+1]-.2:99,h))}},cam:[[0,[.6,1.6,3.2],[.8,1.3,0]],[t[1],[.4,1.3,2.8],[.6,.4,.4]],[t[2],[0,1.8,2.8],[-1.6,1,-1]],[t[3],[-1.6,2.4,1.6],[-3,2.8,-2.8]],[n,[-1.8,2.5,1],[-3,2.8,-2.8]]],f:[[0,3.2],[t[1],2.5],[t[2],3.5],[t[3],3.8]],range:2}});ae(11,(n,e)=>{let t=Y(e,"entera");return{amb:"quarto",fov:34,atores:[ge({x:0,z:0,eyes:[[0,"flat"],[t+1.5,"happy"]],move:i=>[Math.sin(i*3)*1.8,0,Math.cos(i*2.1)*.5],pose:(i,s)=>s<t+1.5?i.walk(s,2.2):i.cheer(s,0,.6)})],extra:(i,s,[r])=>{let o=$o(i,14),a=Qe(i,["\xA1ORDENADO!"],1.4,[0,2.6,0],{fg:"#3E7A5C"});return{update:(l,c,h)=>{o(l,[-1.6,1.4,-1,1.4],Fe(t,t+1,l)),J(a,l,t+1.5,99,h)}}},c:[[0,2.2,4.4],[0,1,-.6],[0,2,3.8],[0,1.1,-.6]],range:3,lookFn:i=>({exposure:1+Fe(t,t+1,i)*.1})}});ae(12,(n,e)=>{let t=Y(e,"mano");return{amb:"quarto",fov:32,atores:[ge({x:-.2,z:0,eyes:[[0,"happy"],[t,"flat"]]}),m1({x:1.6,z:.3,eyes:[[0,"wide"],[t,"look"]],move:i=>[et(3.4,.75,Fe(0,1.4,i)),0,.3],pose:(i,s)=>s<1.4?i.walk(s):i.pose({armL:[12,8],armR:[et(10,120,Fe(t-.4,t,s)),60]})})],extra:i=>{let s=Et(i,"\xBFTienes fiebre?",1,[1.4,2.6,.3]);return{update:(r,o,a)=>J(s,r,t+.4,99,a)}},c:[[.6,1.6,3.4],[.6,1.4,0],[.6,1.6,2.8],[.6,1.5,0]],range:2}});ae(13,(n,e)=>{let t=[Y(e,"misterioso"),Y(e,"elegante"),Y(e,"interesante"),Y(e,"libro")];return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:32,atores:[ge({x:-.6,z:-2,y:-.4,glasses:!0,eyes:[[0,"smug"]],pose:i=>{Ni(i),i.pose({armL:[20,120],armR:[20,120]})}})],extra:(i,s,[r])=>{i.add(k(.6,.5,.6,V("#8E6242"),-.6,.25,-2));let o=qo();i.add(o);let a=["MISTERIOSO","ELEGANTE","INTERESANTE"].map((l,c)=>Qe(i,[l],1.3,[-1.9+c*1.3,2.9-c%2*.3,-1.6],{fg:"#7F6BC4"}));return{update:(l,c,h)=>{let u=Tn(r);o.position.set(-.6,u.y+.1,-1.7),o.rotation.z=Math.PI,o.visible=l>t[3]-.3,a.forEach((d,p)=>J(d,l,t[p],99,h))}}},c:[[-1.6,1.7,1.6],[-.4,1.3,-2],[-1.2,1.6,1],[-.5,1.3,-2]],range:2,look:zt}});ae(14,n=>({amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:26,atores:[ge({x:-.6,z:-2,y:-.4,glasses:!0,eyes:[[0,"smug"]],pose:e=>{Ni(e),e.pose({armL:[20,120],armR:[20,120]})}})],extra:(e,t,[i])=>{let s=qo();s.rotation.z=Math.PI,s.position.set(-.6,1,-1.7),e.add(s);let r=ze(e,["\xA1AL REV\xC9S!"],.6,[.2,1.3,-1.2],{bg:"#C9361F",fg:"#FFF"});return{update:(o,a,l)=>J(r,o,.4,99,l)}},c:[[-.4,1.2,.4],[-.6,1,-1.7],[-.4,1.15,.1],[-.6,1,-1.7]],range:1,look:zt}));ae(15,(n,e)=>{let t=Y(e,"hola");return{amb:"entreCasas",ambo:{night:!0},fov:34,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],glasses:!0,eyes:[[0,"smug"],[t,"wide"]]}),He({x:Dt[0],y:Dt[1],z:Dt[2],eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s>t?Yo(i,s):i.pose()})],extra:i=>{let s=Et(i,"Hola, vecino.",1.1,[Dt[0]-.3,Dt[1]+2.4,Dt[2]+.6]);return{update:(r,o,a)=>J(s,r,t,99,a)}},cam:[[0,...Ac],[n,[0,4.2,6],[0,3.9,-1.4]]],f:[[0,9]],range:4,look:zt}});ae(16,(n,e)=>{let t=Y(e,"record");return{amb:"entreCasas",ambo:{night:!0},fov:30,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],glasses:!0,eyes:[[0,"wide"]],pose:(i,s)=>Yo(i,s)})],extra:i=>{let s=Et(i,"hola.",.6,[Ze[0]+.5,Ze[1]+2.3,Ze[2]+.5]),r=ze(i,["R\xC9CORD IGUALADO"],1.2,[Ze[0]+1.6,Ze[1]+2,Ze[2]+2.6]);return{update:(o,a,l)=>{J(s,o,.1,t,l),J(r,o,t,99,l)}}},c:[[Ze[0]+2.4,4.2,3.6],[Ze[0],4,Ze[2]],[Ze[0]+2,4.1,3],[Ze[0],4,Ze[2]]],range:2,look:zt}});ae(17,(n,e)=>{let t=Y(e,"tomate");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:28,atores:[ge({x:0,z:-1,glasses:!0,eyes:[[0,"wide"]]})],extra:(i,s,[r])=>{let o=Ar(r),a=gc(.9,1.5,-1,3);a.visible=!1,i.add(a);let l=k(.04,.4,.04,V("#E8E2D2"),1.05,1.75,-.9);i.add(l);let c=Qe(i,["38,5 \xB0C"],.6,[1.3,2.1,-1],{fg:"#C9361F"});return{update:(h,u,d)=>{let p=Fe(0,1.6,h);o(p),r.tint(new ye("#FFF0DC").lerp(new ye("#FF7A6A"),p).getStyle()),a.visible=l.visible=h>t,a.position.y=1.5+Math.sin(h*4)*.03,J(c,h,t+.3,99,d)}}},c:[[.3,1.6,1.6],[.3,1.6,-1],[.3,1.6,1.2],[.3,1.6,-1]],range:1.4,look:zt}});Tr(18,["charles","ningun"],[(n,e)=>{let t=Y(e,"adrenalina"),i=Y(e,"vasos"),s=Y(e,"sangre");return{amb:"lab",fov:30,atores:[ge({x:0,z:0,eyes:[[0,"wide"]]})],extra:(r,o,[a])=>{let l=Le(256,256,g=>{g.clearRect(0,0,256,256),g.strokeStyle="#FF4A5A",g.lineCap="round";let y=(m,f,E,M,v)=>{if(M<8)return;let C=m+Math.cos(E)*M,T=f+Math.sin(E)*M;g.lineWidth=v,g.beginPath(),g.moveTo(m,f),g.lineTo(C,T),g.stroke(),y(C,T,E-.5,M*.7,v*.7),y(C,T,E+.5,M*.7,v*.7)};y(70,200,-1.9,45,8),y(186,200,-1.25,45,8)}),c=dt(l,.62,.62,{blend:!0});c.position.set(0,-.04,.06),c.renderOrder=6,a.head.add(c);let h=Ar(a),u=ze(r,["ADRENALINA"],1.3,[-1.2,2.3,0]),d=Qe(r,["VASOS SANGU\xCDNEOS: \xA1ABIERTOS!"],1.9,[1.1,2.6,0],{fg:"#C9361F",size:56}),p=ze(r,["+ SANGRE = + ROJO"],1.5,[0,.6,.4],{bg:"#C9361F",fg:"#FFF"});return{update:(g,y,m)=>{let f=Fe(i,s+1,g);c.material.opacity=f,h(f),J(u,g,t,99,m),J(d,g,i,99,m),J(p,g,s,99,m)}}},c:[[0,1.7,3],[0,1.6,0],[0,1.7,2.4],[0,1.6,0]],range:1.4}},(n,e)=>{let t=Y(e,"expresion");return{amb:"biblio",fov:32,atores:[zu({x:-.4,z:-1,eyes:[[0,"look"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[60,100]})})],extra:(i,s,[r])=>{let o=qo("#6B3A22","EMOCIONES");i.add(o);let a=Et(i,'"La expresi\xF3n m\xE1s humana"',1.4,[.8,2.6,-1],52);return{update:(l,c,h)=>{let u=Tn(r);o.position.set(u.x,u.y+.1,u.z+.05),J(a,l,t,99,h)}}},c:[[.6,1.6,3],[0,1.5,-1],[.4,1.6,2.4],[0,1.5,-1]],range:2}},n=>({amb:"parque",fov:36,atores:[Hu({x:-2.4,z:0,eyes:[[0,"flat"]]}),js({x:-1.2,z:0,s:.6,eyes:[[0,"flat"]]}),{tipo:"loro",s:.5,x:1,z:0,eyes:[[0,"flat"]]},{tipo:"vaca",s:.9,x:2.6,z:-.6,eyes:[[0,"flat"]]},ge({x:0,z:.4,eyes:[[0,"wide"]]})],extra:(e,t,i)=>{let s=Ar(i[4]),r=Qe(e,["NING\xDAN ANIMAL SE SONROJA"],2.2,[0,2.6,-.4],{size:56});return{update:(o,a,l)=>{s(Fe(.6,1.2,o)),J(r,o,.3,99,l)}}},c:[[0,1.4,5.4],[0,.8,0],[0,1.4,4.6],[0,.9,0]],range:3})]);ae(19,(n,e)=>{let t=[0,Y(e,"muchisimo"),Y(e,"demasiado")];return{amb:"lab",fov:30,atores:[ge({x:0,z:0,eyes:[[0,"flat"],[t[2],"wide"]]})],extra:(i,s,[r])=>{let o=Ar(r),a=["HUMANO: 100 %","HUMANO: 200 %","HUMANO: \u221E"].map(l=>ze(i,[l],1.5,[0,2.6,0]));return{update:(l,c,h)=>{let u=.6+Fe(t[1],t[2]+.5,l)*.4;o(u),r.tint(new ye("#FFF0DC").lerp(new ye("#FF6A5A"),u).getStyle()),a.forEach((d,p)=>J(d,l,t[p]+.3,p<2?t[p+1]-.1:99,h))}}},c:[[0,1.6,3.4],[0,1.5,0],[0,1.6,2.2],[0,1.6,0]],range:1.4}});ae(20,n=>({amb:"barrio",fov:36,c:[[0,3.4,9],[0,2.4,-3],[0,3,7.6],[0,2.4,-3]],range:10,blur:4,lookFn:e=>({exposure:et(.9,1.05,e/n)})}));ae(21,(n,e)=>{let t=Y(e,"exactamente");return{amb:"barrio",fov:38,atores:[He({x:4.5,z:-2.6,eyes:[[0,"look"]],move:i=>[4.5,0,-2.6+Fe(.3,2,i)*1.6],pose:(i,s)=>s<2?i.walk(s):i.pose()}),ge({x:-4.5,z:-2.6,eyes:[[0,"look"],[t,"wide"]],move:i=>[-4.5,0,-2.6+Fe(t,t+1.6,i)*1.6],pose:(i,s)=>s>t&&s<t+1.6?i.walk(s):i.pose()})],extra:i=>{let s=ze(i,["8:15"],1.3,[4.5,3,-1]),r=ze(i,["8:15"],1.3,[-4.5,3,-1]);return{update:(o,a,l)=>{J(s,o,.4,99,l),J(r,o,t,99,l)}}},c:[[0,2.4,9],[0,1.6,-1],[0,2.3,8],[0,1.6,-1]],range:6}});ae(22,(n,e)=>{let t=Y(e,"bueno");return{amb:"barrio",fov:34,atores:[He({x:0,z:.4,eyes:[[0,"happy"]],move:i=>[1.2-i*.6,0,.6],pose:(i,s)=>{i.walk(s),s>t&&i.pose({armR:[50+Math.sin(s*8)*15,30],legL:[Math.sin(s*6.4)*15,0],legR:[-Math.sin(s*6.4)*15,0]})}}),ge({x:0,z:.6,eyes:[[0,"look"]],move:i=>[.2-i*.6,0,.7],pose:(i,s)=>{i.walk(s+.4),s>t+1&&i.pose({head:Math.sin(s*7)*7,legL:[Math.sin(s*6.4+2)*15,0],legR:[-Math.sin(s*6.4+2)*15,0]})}})],extra:(i,s,[r])=>{let o=ze(i,["LUNES \xB7 8:15"],1.4,[0,0,0]),a=Et(i,"bla bla bla\u2026",.8,[0,0,0]);return{update:(l,c,h)=>{let u=r.root.position;o.position.set(u.x-.5,3,u.z),a.position.set(u.x+.4,2.5,u.z),J(o,l,.2,4,h),J(a,l,t+.3,99,h)}}},cam:[[0,[.8,1.8,5],[.6,1.4,.6]],[n,[.8-n*.6,1.8,5],[.6-n*.6,1.4,.6]]],f:[[0,4.4]],range:3}});ae(23,n=>({amb:"barrio",fov:30,atores:[ge({x:-4.5,z:-1.4,eyes:[[0,"smug"]],pose:e=>e.pose({armL:[12,8],armR:[80,120]})})],extra:e=>{let t=ze(e,["MARTES \xB7 8:14"],1.5,[-4.5,2.7,-1.4]);return{update:(i,s,r)=>J(t,i,.2,99,r)}},c:[[-3.2,1.8,2.4],[-4.5,1.6,-1.4],[-3.4,1.8,1.8],[-4.5,1.6,-1.4]],range:2}));ae(24,(n,e)=>{let t=Y(e,"diez"),i=Y(e,"casualidad");return{amb:"barrio",fov:32,atores:[ge({x:-1.4,z:-2.2,eyes:[[0,"look"],[i,"smug"]],pose:(s,r)=>{s.pose({armL:[40,60],armR:[40,60]}),zn(s),s.root.position.y=-.6}})],extra:s=>{let r=ze(s,["MI\xC9RCOLES \xB7 8:10"],1.7,[-1.4,2.4,-1.4]),o=Qe(s,["\u23F1 10 MIN"],1,[-.1,1.9,-1.2],{fg:"#C9361F"}),a=Et(s,'"por casualidad"',1.1,[-2.6,2,-1.4],52);return{update:(l,c,h)=>{J(r,l,.2,t-.2,h),J(o,l,t,99,h),J(a,l,i,99,h)}}},c:[[.4,1.4,3],[-1.4,1,-1.6],[0,1.4,2.4],[-1.4,1,-1.6]],range:2}});ae(25,n=>({amb:"barrio",fov:32,atores:[ge({x:-1.4,z:-2.2,eyes:[[0,"wide"]],pose:e=>{e.pose({armL:[40,60],armR:[40,60]}),zn(e),e.root.position.y=-.6}}),He({x:.4,z:-.6,eyes:[[0,"wide"]]})],extra:e=>{let t=ze(e,["JUEVES"],.9,[-.4,2.8,-1]);return{update:(i,s,r)=>J(t,i,.2,99,r)}},c:[[1.4,1.5,3.2],[-.6,1.2,-1.4],[1,1.5,2.6],[-.6,1.2,-1.4]],range:2.4}));ae(26,n=>({amb:"barrio",fov:30,atores:[ge({x:-1.4,z:-1.6,eyes:[[0,"smug"]],pose:e=>e.pose({armL:[12,8],armR:[60,90]})}),He({x:.2,z:-.6,eyes:[[0,"look"]]})],extra:e=>{let t=Et(e,"Busco\u2026 una lagartija.",1.2,[-1,2.35,-1.6],54);return{update:(i,s,r)=>J(t,i,.2,99,r)}},c:[[-.4,1.6,2.6],[-.7,1.4,-1.2],[-.4,1.6,2.2],[-.7,1.4,-1.2]],range:2}));ae(27,n=>({amb:"barrio",fov:32,atores:[He({x:.1,z:-.8,eyes:[[0,"down"]],pose:e=>{e.pose({armL:[30,40],armR:[30,40],lean:10}),zn(e),e.root.position.y=-.5}}),ge({x:-1.2,z:-1.4,eyes:[[0,"heart"]]})],c:[[-.2,1.5,2.8],[-.5,1,-1.1],[-.2,1.4,2.3],[-.5,1,-1.1]],range:2}));ae(28,(n,e)=>{let t=Y(e,"conversacion");return{amb:"barrio",fov:34,atores:[He({x:.2,z:-.8,eyes:[[0,"down"],[t,"happy"]],pose:i=>{i.pose({armL:[30,40],armR:[30,40],lean:8}),zn(i),i.root.position.y=-.5}}),ge({x:-.8,z:-.8,eyes:[[0,"down"],[t,"happy"]],pose:i=>{i.pose({armL:[30,40],armR:[30,40],lean:-8}),zn(i),i.root.position.y=-.5}})],extra:i=>{let s=Qe(i,["LAGARTIJAS: 0"],1,[-1.5,.9,-.2]),r=ze(i,["NUEVO R\xC9CORD: 5 MIN"],1.2,[-1.4,.9,-.2]);return{update:(o,a,l)=>{J(s,o,.3,t-.2,l),J(r,o,t,99,l)}}},c:[[-.3,1.3,3],[-.3,.8,-.8],[-.3,1.3,2.4],[-.3,.9,-.8]],range:2}});ae(29,n=>({amb:"lab",fov:28,atores:[ge({x:0,z:0,eyes:[[0,"smug"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[140,20]})})],c:[[0,1.6,2.8],[0,1.5,0],[0,1.6,2.2],[0,1.55,0]],range:1.4}));ae(30,(n,e)=>{let t=Y(e,"querian"),i=Y(e,"descubrieron"),s=Y(e,"vivir"),r=Y(e,"gente",s);return{amb:"residencia",fov:42,atores:[...["azul","laranja","roxo","verde","rosa","hero","azul","laranja"].map((a,l)=>Kt({outfit:a,glow:0,hair:l%3===1?"bob":l%3===2?"long":null,hairc:"#3A2418",lash:l%3>0,x:-7+l*2,z:-2.5,eyes:[[0,"look"],[s,"happy"]]})),Sc({x:-1.2,z:1.4,eyes:[[0,"look"]],pose:a=>a.pose({armL:[60,90],armR:[12,8]})}),Sc({x:1.2,z:1.4,hair:"bun",hairc:"#5A3A2A",lash:!0,eyes:[[0,"look"]],pose:a=>a.pose({armL:[12,8],armR:[60,90]})})],extra:a=>{let l=[];for(let y=0;y<7;y++){let m=dt(Sr("\u2665","#E2483A",150),.4,.32);m.position.set(-6+y*2,2.5,-2.4),m.renderOrder=5,a.add(m),l.push(m)}let c=[];for(let y=0;y<7;y++){let m=k(1.4,.06,.06,V("#F2C14E",{emissive:"#F2C14E",emissiveIntensity:.8}),-6+y*2,1.4,-2.4);a.add(m),c.push(m)}let h=ze(a,["A\xD1OS 50 \xB7 RESIDENCIA DEL MIT"],2.6,[0,3.4,-2.8],{size:60}),u=Qe(a,["\xBFQUI\xC9N SE HACE AMIGO DE QUI\xC9N?"],2.6,[0,3.4,-2.8],{size:56}),d=Qe(a,["\u2717 PARECERSE"],1.5,[-2.4,3.4,-2.8],{fg:"#C9361F"}),p=Qe(a,["\u2717 MISMOS GUSTOS"],1.8,[2.4,3.4,-2.8],{fg:"#C9361F"}),g=ze(a,["\u2713 VIVIR CERCA"],2,[0,3.4,-2.8],{bg:"#3E7A5C",fg:"#FFF"});return{update:(y,m,f)=>{J(h,y,.3,t-.1,f),J(u,y,t,i-.1,f),J(d,y,i+1,s-.1,f),J(p,y,i+2.4,s-.1,f),J(g,y,s,99,f),c.forEach((E,M)=>{E.scale.x=Math.max(.01,Fe(r+M*.25,r+M*.25+.4,y))}),l.forEach((E,M)=>{J(E,y,r+1+M*.25,99,f)})}}},c:[[0,2.6,8.4],[0,1.8,-2.4],[0,2.4,7],[0,1.8,-2.4]],range:6,blur:6}});ae(31,(n,e)=>{let t=Y(e,"cuantas"),i=[Y(e,"cara"),Y(e,"cancion"),Y(e,"palabra")],s=Y(e,"llamo");return{amb:"lab",fov:34,atores:[Sc({x:-2,z:0,outfit:"terno",tint:"#FFF0DC",eyes:[[0,"look"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[70,30]})})],extra:r=>{let o=k(3,1.9,.1,V("#10141E"),.9,1.9,-1.2);r.add(o);let a=[dt(Le(256,256,d=>{d.clearRect(0,0,256,256),d.fillStyle="#2A2A34",d.beginPath(),d.arc(128,128,100,0,7),d.fill(),d.fillStyle="#FBF7EC",d.beginPath(),d.ellipse(95,115,14,22,0,0,7),d.ellipse(161,115,14,22,0,0,7),d.fill()}),1.1,1.1),dt(Sr("\u266B","#F2C14E",180),1.2,.95),dt(pi(['"HOLA"'],{bg:"#00000000",fg:"#FFFFFF",size:110,w:512,h:200}),1.8,.7)];a.forEach(d=>{d.position.set(.9,1.9,-1.1),d.renderOrder=5,r.add(d)});let l=k(2.6,.14,.05,V("#E2483A",{emissive:"#E2483A",emissiveIntensity:.7}),.9,.75,-1.1);r.add(l);let c=Qe(r,["\u2665 CU\xC1NTO TE GUSTA"],1.4,[.9,.45,-1],{size:56}),h=ze(r,["ROBERT ZAJONC \xB7 1968"],1.9,[-2,2.6,0],{size:60}),u=ze(r,["EFECTO DE MERA EXPOSICI\xD3N"],2.6,[.9,3.25,-1],{size:58});return{update:(d,p,g)=>{let y=d<i[1]?0:d<i[2]?1:2;a.forEach((f,E)=>{f.visible=d>t&&E===y,f.scale.setScalar(1+Math.max(0,Math.sin(d*9))*.05)});let m=Fe(t,s,d);l.scale.x=Math.max(.02,m),l.position.x=.9-1.3*(1-m),J(c,d,t,99,g),J(h,d,.2,s,g),J(u,d,s,99,g)}}},c:[[-.4,1.9,4.6],[-.4,1.7,-.6],[-.2,1.9,4],[-.2,1.7,-.6]],range:3}});ae(32,(n,e)=>{let t=[Y(e,"ventana"),Y(e,"puerta"),Y(e,"esquina"),Y(e,"buscando")];return{amb:"barrio",fov:36,atores:[ge({x:-1,z:.4,eyes:[[0,"happy"]],pose:(i,s)=>i.walk(s*.5)}),He({x:1,z:.4,eyes:[[0,"happy"]],pose:(i,s)=>i.walk(s*.5+.3)})],extra:i=>{let s=[["LA VENTANA \u2713"],["LA PUERTA \u2713"],["LA ESQUINA \u2713"],["LAS LAGARTIJAS \u2713"]].map((r,o)=>Qe(i,r,1.5,[-2.2+o%2*4.4,2.8-Math.floor(o/2)*.6,0],{fg:"#3E7A5C"}));return{update:(r,o,a)=>s.forEach((l,c)=>J(l,r,t[c],99,a))}},c:[[0,2,5.6],[0,1.6,0],[0,2,4.8],[0,1.6,0]],range:3}});ae(33,n=>({amb:"lab",fov:30,atores:[ge({x:0,z:0,eyes:[[0,"happy"]],pose:(e,t)=>e.cheer(t,0,.8)})],extra:e=>{let t=ze(e,["CIENCIA \u2713"],1.2,[.9,2.5,0],{bg:"#3E7A5C",fg:"#FFF"});return{update:(i,s,r)=>J(t,i,.3,99,r)}},c:[[0,1.6,3.2],[0,1.4,0],[0,1.6,2.8],[0,1.45,0]],range:1.6}));ae(34,n=>({amb:"lab",fov:28,atores:[ge({x:0,z:0,eyes:[[0,"happy"],[1.2,"look"],[2,"wide"]],pose:(e,t)=>t<1?e.cheer(t,0,.8*(1-t)):e.pose()})],c:[[0,1.6,2.6],[0,1.5,0],[0,1.6,2],[0,1.55,0]],range:1.2,lookFn:e=>({exposure:1-Fe(1,2.5,e)*.15})}));ae(35,n=>({amb:"cuartoElla",fov:30,atores:[He({x:.2,z:-2.2,eyes:[[0,"lookl"]]}),ge({...wr,eyes:[[0,"look"]]})],c:[[1.2,1.8,1.2],[-.6,1.8,-5],[1,1.8,.8],[-.8,1.8,-6]],range:5,blur:8}));ae(36,(n,e)=>{let t=Y(e,"gritos");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:34,atores:[wn({x:-.4,z:-1,eyes:[[0,"shut"],[t,"heart"]],pose:(i,s)=>bc(i,s,1.2)}),He({...mi,eyes:[[0,"wide"]]})],extra:(i,s,[r])=>{let o=Xo();i.add(o);let a=Zo(i,8),l=Qe(i,["PERSIANA: SUBIDA"],1.5,[-1.6,3.6,-2.6],{fg:"#C9361F"}),c=Et(i,"\u2665 \xA1AMOOOR! \u2665",1,[-.4,2.6,-1]);return{update:(h,u,d)=>{let p=Tn(r);o.position.set(p.x,p.y+.12,p.z+.05),a(h,p,d),J(l,h,.4,4,d),J(c,h,t,99,d)}}},c:[[-1.4,1.7,2.6],[.2,1.6,-3],[-1,1.7,2],[.3,1.6,-3]],range:5,blur:6,look:zt}});ae(37,n=>({amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:32,atores:[wn({x:-.4,z:-1,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[20,10],armR:[90,60],lean:0,head:0,bob:-Fe(.3,.9,t)*.15})})],extra:(e,t,[i])=>({update:s=>{i.body.rotation.x=Fe(.3,.9,s)*.6}}),c:[[.6,1.5,2.2],[-.4,1.3,-1],[.4,1.5,1.8],[-.4,1.3,-1]],range:1.6,look:zt}));ae(38,n=>({amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[He({...mi,eyes:[[0,"happy"]],pose:(e,t)=>y1(e,t)})],extra:e=>{let t=Et(e,"\xA1CLAP CLAP!",.8,[1.8,3,-7]);return{update:(i,s,r)=>J(t,i,.4,99,r)}},c:Jo([.9,1.9,-.4],[1,1.95,-2.4]),range:3,look:zt}));ae(39,(n,e)=>{let t=Y(e,"arrastras"),i=Y(e,"bajas"),s=Y(e,"quedas"),r=Y(e,"pensando");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:34,atores:[wn({x:-.4,z:-1,eyes:[[0,"wide"],[s,"flat"]],move:o=>[et(.6,1.9,Fe(t,i,o)),.25,et(-1,-2.2,Fe(t,i,o))],pose:(o,a)=>{o.pose({armL:[150,30],armR:[150+Math.sin(a*8)*10,30]}),wu(o,Math.PI/2*Fe(0,.5,a)*(a<i,1))}})],extra:(o,a,[l])=>{let c=E1(o),h=Et(o,"\xBFMe mudo a otro pa\xEDs?",1.3,[1,1.4,-1],52);return{update:(u,d,p)=>{c(Fe(i,i+1.2,u)),l.root.rotation.z=Math.PI/2,u>s&&l.root.position.set(1.9,.3,-1),J(h,u,r,99,p)}}},cam:[[0,[0,1.5,2.6],[.8,.5,-1.4]],[s-.1,[.2,1.5,2.2],[1.4,.5,-2]],[s,[1,2,1.8],[1,.5,-1]],[n,[1,1.8,1.4],[1,.5,-1]]],f:[[0,3],[s,3.2]],range:2,look:zt}});ae(40,(n,e)=>{let t=[Y(e,"instituto"),Y(e,"todos"),Y(e,"grabado")],i=[["azul","bob","#D9B65A"],["laranja"],["roxo","long","#2A1A12"],["rosa","bun","#5A3A2A"],["verde"]];return{amb:"aula",fov:36,atores:[ge({x:0,z:.6,eyes:[[0,"sad"]]}),...i.map(([s,r,o],a)=>Kt({outfit:s,hair:r,hairc:o,lash:!!r,glow:0,x:-2.4+a*1.2,z:-1.6,eyes:[[0,"look"],[t[1],"wide"]],pose:l=>a===3?l.pose({armL:[12,8],armR:[80,120]}):l.pose()}))],extra:(s,r,o)=>{let a=k(.12,.22,.02,V("#1A1A24"),0,0,0);s.add(a);let l=Nt("#FF3A3A",.2,.9);s.add(l);let c=[Qe(s,["LO SABE TODO EL INSTITUTO"],2.4,[0,2.55,-1],{size:56}),Qe(s,["TODOS TE MIRAN"],1.6,[0,2.55,-1]),ze(s,["\u25CF REC"],.9,[1.2,2.4,-1],{bg:"#C9361F",fg:"#FFF"})];return{update:(h,u,d)=>{let p=Tn(o[4]);a.position.set(p.x,p.y+.12,p.z+.05),l.position.set(p.x,p.y+.3,p.z+.1),l.visible=a.visible=h>t[2]-.3,c.forEach((g,y)=>J(g,h,t[y],y<2?t[y+1]-.2:99,d))}}},c:[[0,1.9,4.6],[0,1.4,-.6],[0,1.8,3.8],[0,1.4,-.6]],range:3}});ae(41,n=>{let e=[["azul","bob","#D9B65A"],["laranja"],["roxo","long","#2A1A12"],["rosa","bun","#5A3A2A"],["verde"]];return{amb:"aula",fov:36,atores:[ge({x:0,z:.6,eyes:[[0,"look"]]}),...e.map(([t,i,s],r)=>Kt({outfit:t,hair:i,hairc:s,lash:!!i,glow:0,x:-2.4+r*1.2,z:-1.6,eyes:[[0,["down","lookl","shut","down","lookl"][r]]]}))],extra:t=>{let i=ze(t,["PUES NO."],1.2,[0,2.9,-1.6]);return{update:(s,r,o)=>J(i,s,.05,99,o)}},c:[[0,1.8,3.8],[0,1.4,-.6],[0,1.8,3.7],[0,1.4,-.6]],range:3}});ae(42,(n,e)=>{let t=Y(e,"foco"),i=Y(e,"teatro");return{amb:"concurso",fov:34,atores:[ge({x:0,z:1.2,eyes:[[0,"wide"]]})],extra:s=>{let r=new oe(new ui(1.4,7,32,1,!0),new At({color:"#FFF2C0",transparent:!0,opacity:.14,depthWrite:!1,side:It,blending:on}));r.position.set(0,3.5,1.2),s.add(r);let o=new Gs("#FFF6D8",120,14,.32,.4,1);o.position.set(0,8,1.2),o.target.position.set(0,0,1.2),s.add(o,o.target);let a=ze(s,["EFECTO FOCO"],1.6,[0,2.75,1.2]);return{update:(l,c,h)=>{r.material.opacity=.14*Fe(t-.4,t,l),o.intensity=120*Fe(t-.4,t,l),J(a,l,t,99,h)}}},c:[[0,2.4,7],[0,1.6,1.2],[0,2,5.2],[0,1.6,1.2]],range:3,lookFn:s=>({exposure:et(1,.85,Fe(t-.4,t,s))})}});ae(43,(n,e)=>{let t=Y(e,"creian"),i=Y(e,"realidad"),s=12,r=["azul","laranja","roxo","verde","hero","amarelo"];return{amb:"aula",fov:40,atores:[Kt({outfit:"rosa",x:0,z:1.6,glow:.15,eyes:[[0,"flat"],[t,"wide"]]}),...Array.from({length:s},(o,a)=>Kt({outfit:r[a%6],hair:a%4===1?"bob":a%4===3?"long":null,hairc:["#3A2418","#D9B65A","#2A1A12"][a%3],lash:a%4%2===1,glow:0,x:-4.5+a%6*1.8,z:-.4-Math.floor(a/6)*1.6,eyes:[[0,"down"],[t,a%2?"look":"down"],[i,a%4===0?"look":"down"]]}))],extra:o=>{let a=Qe(o,["CAMISETA VERGONZOSA"],1.4,[0,2.55,1.6],{fg:"#C9361F",size:56}),l=pc(o,['"Me mira','la mitad"'],1.4,{size:64});l.position.set(1.4,2.7,1.6);let c=[];for(let u=0;u<s;u++){let d=Nt("#F2C14E",1.6,0);d.position.set(-4.5+u%6*1.8,1,-.45-Math.floor(u/6)*1.6),o.add(d),c.push(d)}let h=ze(o,["CORNELL \xB7 2000"],1.5,[-2.2,2.6,1]);return{update:(u,d,p)=>{J(a,u,.5,t,p),J(l,u,t+.3,i-.2,p),J(h,u,.4,t,p),c.forEach((g,y)=>g.material.opacity=u>i?y%4===0?.55:0:u>t&&y%2?.55:0)}}},c:[[0,2.8,8.6],[0,1.4,-.6],[0,2.6,7.4],[0,1.4,-.6]],range:8,blur:4}});ae(44,n=>{let e=["\xBFTengo algo en los dientes?","\xBFSe me ve el grano?","\xBFDije una tonter\xEDa?","\xBFHuelo raro?"];return{amb:"aula",fov:38,atores:e.map((t,i)=>Kt({outfit:["azul","laranja","roxo","verde"][i],hair:i%2?"long":null,hairc:"#3A2418",lash:i%2===1,glow:0,x:-3.3+i*2.2,z:-.6,eyes:[[0,["sad","wide","down","flat"][i]]]})),extra:t=>{let i=e.map((s,r)=>{let o=pc(t,[s],1.5,{size:46});return o.position.set(-3.3+r*2.2,2.75+r%2*.5,-.6),o});return{update:(s,r,o)=>i.forEach((a,l)=>J(a,s,.2+l*.5,99,o))}},c:[[0,2.2,7.4],[0,1.8,-.6],[0,2.2,6.6],[0,1.8,-.6]],range:4}});ae(45,(n,e)=>{let t=Y(e,"cantas"),i=Y(e,"pero");return{amb:"barrio",fov:32,atores:[He({x:.6,z:.4,eyes:[[0,"smug"],[i,"happy"]],talk:[[t,n]]}),ge({x:-.6,z:.4,eyes:[[0,"look"],[t,"flat"],[i+.6,"wide"]]})],extra:s=>{let r=Et(s,"Cantas fatal.",.9,[1.1,2.3,.4]),o=Et(s,"Pero bailas bien.",1.1,[1.1,2.3,.4]);return{update:(a,l,c)=>{J(r,a,t,i-.1,c),J(o,a,i,99,c)}}},c:[[0,1.8,4.4],[0,1.6,.4],[0,1.8,3.8],[0,1.6,.4]],range:2}});ae(46,(n,e)=>{let t=Y(e,"apuntas");return{amb:"quarto",fov:30,atores:[ge({x:0,z:-.4,y:-.4,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>{Ni(i),i.pose({armL:[40,70],armR:[40+Math.sin(s*12)*5,70]})}})],extra:i=>{i.add(k(1.2,.06,.7,V("#C9A06A"),0,.75,.1));let s=Qs(["Querido diario:",'"bailas bien" \u2665'],.9,{size:64});s.rotation.x=-1.1,s.position.set(0,.82,.25),i.add(s);let r=Qe(i,["\xBFINSULTO? \xBFPIROPO?"],1.8,[0,2.5,-.4],{fg:"#7F6BC4"});return{update:(o,a,l)=>{J(r,o,.2,t,l),s.visible=o>t-.2}}},c:[[0,1.9,3],[0,1.2,-.2],[0,1.8,2.4],[0,1.1,.1]],range:1.6}});ae(47,n=>({amb:"entreCasas",fov:36,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],eyes:[[0,"happy"]],pose:(e,t)=>Yo(e,t)}),He({x:Dt[0],y:Dt[1],z:Dt[2],eyes:[[0,"happy"]],pose:(e,t)=>Yo(e,t+1)})],extra:e=>{let t=Qe(e,["SEMANA 1 \u2026 2 \u2026 3"],1.8,[0,6,0]);return{update:(i,s,r)=>J(t,i,.2,99,r)}},cam:[[0,[0,5.4,9.6],[0,4.2,-1.4]],[n,...Ac]],f:[[0,9]],range:4}));ae(48,(n,e)=>{let t=Y(e,"gestos"),i=[Y(e,"has"),Y(e,"no",Y(e,"mates")+.1),Y(e,"yo"),Y(e,"manana"),Y(e,"vale")];return{amb:"entreCasas",fov:34,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],eyes:[[0,"look"]],pose:(s,r)=>r<i[0]?s.pose({armL:[100+Math.sin(r*6)*30,60],armR:[40,90]}):s.pose()}),He({x:Dt[0],y:Dt[1],z:Dt[2],eyes:[[0,"look"],[i[4],"happy"]],pose:(s,r)=>r<i[0]?s.pose({armR:[100+Math.sin(r*6+1)*30,60],armL:[40,90]}):s.pose()})],extra:s=>{let r=s.userData.me,o=s.userData.her,a=[yn(s,o,["\xBFHas hecho los","deberes de mates?"],{size:70,ww:1.4}),yn(s,r,["No."],{ww:1.4,size:120}),yn(s,o,["Yo tampoco."],{ww:1.4,size:100}),yn(s,r,["\xBFMa\xF1ana","vamos juntos?"],{size:76,ww:1.4}),yn(s,o,["Vale. \u2665"],{ww:1.4,size:110})];return{update:l=>a.forEach((c,h)=>Bi(c,l,i[h],[i[2],i[3],99,99,99][h]))}},fov:40,cam:[[0,[0,4.1,5.4],[0,4,-1.4]],[n,[0,4.1,4.6],[0,4,-1.4]]],f:[[0,6.6]],range:4}});ae(49,(n,e)=>{let t=Y(e,"significa"),i=Y(e,"contestas"),s=Y(e,"perro");return{amb:"entreCasas",ambo:{night:!0},fov:36,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],eyes:[[0,"happy"]],pose:r=>r.pose({armL:[12,8],armR:[80,60]})}),He({x:Dt[0],y:Dt[1],z:Dt[2],eyes:[[0,"happy"]],pose:r=>r.pose({armL:[80,60],armR:[12,8]})}),Hu({x:-1.2,z:2.6,eyes:[[0,"open"],[s,"wide"]]})],extra:(r,o,[a,l,c])=>{let h=xc(),u=xc("#C8E8FF");r.add(h,u);let d=ze(r,["BUENAS NOCHES"],1.8,[0,5.4,.4]),p=Et(r,"\xA1GUAU!",.6,[-.6,1.4,2.6]),g=(y,m)=>y>m&&y<m+2.4&&Math.floor((y-m)/.4)%2===0;return{update:(y,m,f)=>{let E=Tn(l),M=Tn(a);h.position.copy(E),u.position.copy(M),h.userData.on(g(y,.4)?1:0),u.userData.on(g(y,i)?1:0),J(d,y,t,99,f),J(p,y,s,99,f)}}},fov:40,cam:[[0,[0,4.2,6.4],[0,4,-1]],[n,[0,3.8,7.4],[0,3.6,-1]]],f:[[0,7.5]],range:5,look:zt}});ae(50,n=>({amb:"barrio",fov:30,atores:[ge({x:-.6,z:0,eyes:[[0,"angry"]]}),He({x:.6,z:0,eyes:[[0,"angry"]]})],extra:e=>{let t=ze(e,["\xA1PELEA!"],1.2,[0,2.7,0],{bg:"#C9361F",fg:"#FFF"});return{update:(i,s,r)=>J(t,i,.2,99,r)}},c:[[0,1.7,3.2],[0,1.5,0],[0,1.65,2.6],[0,1.5,0]],range:1.6,lookFn:e=>({exposure:1+Math.max(0,Math.sin(e*6))*.1})}));Tr(51,["tocas"],[n=>({amb:"jardin",fov:34,atores:[ge({x:-2.6,z:1,eyes:[[0,"wide"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[t<.6?20:100,20],legR:[t<.6?-20:30,0]})})],extra:e=>{let t=Lu();return e.add(t),{update:i=>{let s=Fe(.5,2.6,i);t.position.set(et(-2.2,1.6,s),.16+Math.sin(s*Math.PI)*3.2,et(1.2,-1,s)),t.rotation.z=-i*6}}},c:[[-.4,2.2,6.4],[-.2,1.2,-1],[0,2,5.4],[.6,1,-1]],range:4}),(n,e)=>{let t=Y(e,"tercera");return{amb:"barrio",fov:32,atores:[ge({x:3.5,z:-1.2,eyes:[[0,"look"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s<1?60:12,30]})}),He({x:4.8,z:-2.6,eyes:[[0,"flat"],[t,"angry"]],talk:[[t-.4,n]]})],extra:i=>{let s=Et(i,"\xA1DING DONG!",.9,[3.1,2.3,-1.2]),r=ze(i,["3.\xAA VEZ ESTA SEMANA"],1.9,[4.8,2.5,-2.4],{bg:"#C9361F",fg:"#FFF"});return{update:(o,a,l)=>{J(s,o,.1,1.4,l),J(r,o,t,99,l)}}},c:[[2,1.8,3.6],[4.2,1.6,-2],[2.3,1.8,3],[4.2,1.6,-2]],range:2.4}}]);ae(52,(n,e)=>{let t=Y(e,"pesado"),i=Y(e,"mandona");return{amb:"barrio",fov:30,atores:[ge({x:3.8,z:-1.6,eyes:[[0,"flat"],[t,"angry"]],talk:[[0,1.4],[i-.8,i+.4]]}),He({x:4.6,z:-2.6,eyes:[[0,"angry"]],talk:[[t-.6,t+.4]]})],extra:s=>{let r=[Et(s,"No es para tanto.",1,[3.4,2.5,-1.6]),Et(s,"\xA1PESADO!",.8,[5,2.6,-2.6]),Et(s,"\xA1MANDONA!",.8,[3.4,2.5,-1.6])];return{update:(o,a,l)=>{J(r[0],o,.1,t-.6,l),J(r[1],o,t-.3,99,l),J(r[2],o,i-.3,99,l)}}},c:[[2.6,1.7,2.4],[4.2,1.5,-2],[2.9,1.7,2],[4.2,1.5,-2]],range:2}});ae(53,n=>({amb:"barrio",fov:30,atores:[ge({x:3.9,z:-1.2,eyes:[[0,"sad"]]})],extra:e=>{let t=k(1.1,2.1,.02,V("#1A1410"),4.5,1.05,-2.92);e.add(t);let i=k(1.1,2.1,.1,V("#3E6A5A"),0,0,0),s=new Pe;s.position.set(4.5-.55,1.05,-2.94),i.position.set(.55,0,0),s.add(i),e.add(s);let r=Et(e,"\xA1PAM!",.6,[4.8,2.35,-2.6]);return{update:(o,a,l)=>{s.rotation.y=et(-1.3,0,Fe(.3,.6,o)),t.visible=o<.6,J(r,o,.6,99,l)}}},c:[[2.8,1.7,2.2],[4.3,1.4,-2.2],[3,1.7,1.8],[4.3,1.4,-2.2]],range:2}));ae(54,(n,e)=>{let t=Y(e,"linterna"),i=Y(e,"carteles");return{amb:"cuartoYo",ambo:{night:!0,lit:!1},fov:32,atores:[ge({x:-.5,z:-2,eyes:[[0,"sad"]]})],extra:s=>{s.userData.her.userData.persiana(1);let r=[Qe(s,["\u2717 LINTERNA"],1.2,[1,3.2,-5.6],{fg:"#C9361F"}),Qe(s,["\u2717 CARTELES"],1.2,[1,2.7,-5.6],{fg:"#C9361F"})];return{update:(o,a,l)=>{J(r[0],o,t,99,l),J(r[1],o,i,99,l)}}},c:[[-1.2,1.8,1.4],[.6,1.9,-6.2],[-1,1.8,.8],[.8,1.9,-6.2]],range:6,blur:6,look:{...zt,exposure:.85}}});ae(55,n=>({amb:"entreCasas",ambo:{night:!0},fov:34,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],eyes:[[0,"sad"]]})],extra:e=>{e.userData.her.userData.persiana(1),e.userData.her.userData.luz(!1);let t=ze(e,["3 METROS"],1.2,[0,4.6,.4]);return{update:(i,s,r)=>{J(t,i,.3,99,r),t.scale.x=.9+i*.25}}},cam:[[0,[0,4.3,6],[0,3.9,-1.4]],[n,[0,6.4,22],[0,3.9,-1.4]]],f:[[0,7.5],[n,23]],range:6,look:{...zt,exposure:1}}));ae(56,(n,e)=>{let t=Y(e,"medianoche"),i=Y(e,"sube"),s=Y(e,"ella");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[He({...mi,eyes:[[0,"sad"]]}),ge({x:-.6,z:-2,y:-.4,eyes:[[0,"sad"],[t,"look"],[i,"wide"]],pose:Ni})],extra:r=>{let o=r.userData.her,a=ze(r,["DOS D\xCDAS DESPU\xC9S"],1.6,[-.6,3,-2]),l=Qe(r,["00:00"],.8,[-.6,3,-2],{fg:"#7F6BC4"}),c=Nt("#FFE0A0",2,0);return c.position.set(1,1.25,-6),r.add(c),{update:(h,u,d)=>{o.userData.persiana(1-Fe(i,i+1.4,h)*.55),c.material.opacity=Fe(t,t+.8,h)*.8,o.userData.luz(h>t),J(a,h,.2,t-.3,d),J(l,h,t,i,d)}}},cam:[[0,[-1.4,1.7,1.4],[.4,1.9,-6.2]],[i,[.6,1.9,-1.4],[1,1.9,-7]],[n,[.8,1.9,-2.6],[1,1.9,-7]]],f:[[0,7],[i,5.6]],range:3,look:{...zt,exposure:.9}}});ae(57,(n,e)=>{let t=Y(e,"siento");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[He({...mi,eyes:[[0,"sad"]]})],extra:i=>{let s=i.userData.her;s.userData.persiana(.45);let r=yn(i,s,["Lo siento."],{dy:-.2});return{update:o=>Bi(r,o,Math.min(.8,t-.3))}},c:Jo([.9,1.9,-1.8],[1,1.85,-3.2]),range:3,look:zt}});ae(58,n=>({amb:"cuartoElla",ambo:{night:!0,lit:!0},fov:30,atores:[ge({...wr,eyes:[[0,"sad"]]})],extra:e=>{let t=yn(e,e.userData.me,["Yo tambi\xE9n.","\xBFQu\xE9 te pasa?"],{size:80,dy:-.2});return{update:i=>Bi(t,i,.4)}},c:_1([-.9,1.9,-1.8],[-1,1.85,-3.2]),range:3,look:zt}));ae(59,(n,e)=>{let t=[Y(e,"echa"),Y(e,"amigas"),Y(e,"antigua"),Y(e,"aqui"),Y(e,"unica"),Y(e,"vecino")];return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[He({...mi,x:.7,eyes:[[0,"sad"],[t[5],"look"]]})],extra:i=>{let s=i.userData.her;s.userData.persiana(.3);let r=[["Echo de menos","mi ciudad."],["A mis amigas."],["Mi antigua","habitaci\xF3n."],["Aqu\xED no conozco","a casi nadie."],["Solo hablo de","verdad con\u2026"],["\u2026el vecino","de la ventana."]].map(o=>yn(i,s,o,{size:76,dx:.2,dy:-.25}));return{update:o=>r.forEach((a,l)=>Bi(a,o,t[l],l<5?t[l+1]:99))}},c:Jo([.9,1.9,-2.6],[1,1.85,-3.4]),range:3,look:zt}});ae(60,n=>({amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[ge({x:-.5,z:-2,eyes:[[0,"wide"],[1,"heart"]]}),He({...mi,x:.7,eyes:[[0,"look"]]})],extra:e=>{let t=e.userData.her;t.userData.persiana(.3);let i=yn(e,t,["\u2026el vecino","de la ventana."],{size:76,dx:.2,dy:-.25}),s=ze(e,["T\xDA."],.7,[-.5,2.45,-2]);return{update:(r,o,a)=>J(s,r,.05,99,a)}},c:[[-1.6,1.8,1],[-.2,1.8,-4],[-1.4,1.8,.6],[-.1,1.8,-4]],range:4,blur:6,look:zt}));ae(61,(n,e)=>{let t=Y(e,"pepino"),i=Y(e,"sara");return{amb:"jardin",fov:34,atores:[js({x:-2.4,y:2.18,z:-3,s:.7,eyes:[[0,"wide"]]}),He({x:1.6,z:.4,eyes:[[0,"look"],[i,"sad"]],pose:s=>s.pose({armL:[110,130],armR:[110,130]})}),ge({x:-.8,z:1.4,eyes:[[0,"look"]]})],extra:s=>{let r=ze(s,["PEPINO"],.9,[-2.4,3.6,-3]),o=Et(s,"\xA1Miau!",.5,[-1.9,3,-3]);return{update:(a,l,c)=>{J(r,a,t,99,c),J(o,a,t+2,99,c)}}},c:[[0,2.4,6.4],[-.6,1.6,-1.4],[-.2,2.4,5.4],[-.8,1.8,-1.6]],range:4}});ae(62,n=>({amb:"jardin",fov:34,atores:[ge({x:-1.2,z:-2.2,eyes:[[0,"smug"]],move:e=>[-1.2-Fe(0,3,e)*.6,Fe(0,3,e)*2.2,-2.2-Fe(0,3,e)*.6],pose:(e,t)=>e.pose({armL:[150+Math.sin(t*8)*20,20],armR:[150-Math.sin(t*8)*20,20],legL:[Math.sin(t*8)*20,30],legR:[-Math.sin(t*8)*20,30]})}),js({x:-2.4,y:2.18,z:-3,s:.7,eyes:[[0,"wide"]]})],extra:e=>{let t=ze(e,["MODO BOMBERO"],1.4,[-.2,4.4,-2.4],{bg:"#C9361F",fg:"#FFF"});return{update:(i,s,r)=>J(t,i,.6,99,r)}},c:[[1.4,2.4,4.2],[-1.6,2.6,-2.6],[1,2.8,3.6],[-1.8,3,-2.8]],range:3}));ae(63,(n,e)=>{let t=Y(e,"arana"),i=Y(e,"pierdes"),s=Y(e,"caes");return{amb:"jardin",fov:36,atores:[ge({x:-1.8,y:2.18,z:-2.8,eyes:[[0,"happy"],[t,"wide"],[s+1.2,"shut"]],move:r=>{let o=Fe(s,s+1,r);return[et(-1.8,1.6,o),r<s?2.18:et(2.18,0,o)+Math.sin(o*Math.PI)*1.4,et(-2.8,-1,o)]},pose:(r,o)=>{o<i?r.pose({armL:[60,80],armR:[60,80]}):o<s?r.pose({armL:[150+Math.sin(o*14)*20,10],armR:[150-Math.sin(o*14)*20,10],lean:Math.sin(o*9)*18}):(r.pose({armL:[130,10],armR:[130,10],squash:o>s+1?-.15*(1-Fe(s+1,s+1.4,o)):0}),o>s+1&&(zn(r),r.root.position.y=-.35))}}),js({x:-1.6,y:2.18,z:-2.6,s:.5,eyes:[[0,"angry"]]})],extra:(r,o,[a,l])=>{let c=Et(r,"\xA1ZAS!",.6,[-1,4.2,-2.6]),h=Et(r,"\xA1AY!",.5,[2.2,1.8,-1]);return{update:(u,d,p)=>{let g=a.root.position;l.root.position.set(g.x+.3,g.y+1.1,g.z+.2),u>i&&l.root.position.set(-1.8+Math.sin(u*3)*.2,u>s?0:2.18,-2.4),J(c,u,t,i,p),J(h,u,s+1,99,p)}}},cam:[[0,[.4,3.2,3.4],[-1.6,2.8,-2.6]],[s,[.6,2.6,4.4],[0,2,-2]],[n,[1.4,1.6,3],[1.6,.8,-1]]],f:[[0,4.8],[s,4.6],[s+1.2,4]],range:3}});ae(64,n=>({amb:"jardin",fov:30,atores:[ge({x:1.6,y:-.35,z:-1,eyes:[[0,"shut"]],pose:e=>{e.pose({armL:[120,20],armR:[120,20]}),zn(e)}})],extra:e=>{let t=Qe(e,["OTRA VEZ LAS ROSAS"],1.8,[1.6,2.15,-1],{fg:"#C9361F"});return{update:(i,s,r)=>J(t,i,.2,99,r)}},c:[[1.6,1.4,2.6],[1.6,.8,-1],[1.6,1.3,2],[1.6,.8,-1]],range:1.6}));ae(65,n=>({amb:"jardin",fov:30,atores:[js({x:-.8,z:.4,s:.7,eyes:[[0,"happy"]]})],extra:e=>{let t=ze(e,["PEPINO: A SALVO \u2713"],1.7,[-.8,1.4,.4],{bg:"#3E7A5C",fg:"#FFF"});return{update:(i,s,r)=>J(t,i,.2,99,r)}},c:[[-.8,.8,2.6],[-.8,.5,.4],[-.8,.8,2.2],[-.8,.5,.4]],range:1.4}));ae(66,(n,e)=>{let t=Y(e,"levantarte"),i=Y(e,"espina");return{amb:"jardin",fov:32,atores:[ge({x:1.6,z:-1,eyes:[[0,"happy"]],pose:(s,r)=>{if(s.pose({armL:[12,8],armR:[et(120,40,Fe(t,t+1,r)),20]}),r<t+.6)zn(s),s.root.position.y=et(-.35,-.35,0);else{s.root.position.y=0;for(let o of Object.values(s.legs))o.th.visible=!0,o.shin.visible=!0}}}),He({x:2.6,z:-.6,eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[r>i?150:12,40],armR:[70,20],bob:r<t?Math.abs(Math.sin(r*10))*.03:0})})],extra:s=>{let r=Et(s,"\xA1JAJAJA!",.7,[3,2.6,-.6]);return{update:(o,a,l)=>J(r,o,.2,t,l)}},c:[[2,1.6,2.8],[2.1,1.2,-.8],[2,1.6,2.2],[2.1,1.3,-.8]],range:2}});Tr(67,["anos","y","ojo",["si",2]],[n=>({amb:"lab",fov:30,atores:[ge({x:0,z:0,eyes:[[0,"smug"]]})],extra:e=>{let t=ze(e,["EFECTO DEL TROPIEZO"],2,[0,2.6,0]);return{update:(i,s,r)=>J(t,i,.2,99,r)}},c:[[0,1.8,3.6],[0,1.6,0],[0,1.8,3],[0,1.6,0]],range:1.6}),(n,e)=>{let t=Y(e,"listo"),i=Y(e,"cafe");return{amb:"concurso",fov:34,atores:[Kt({outfit:"terno",glasses:!0,glow:0,x:0,z:-1.1,eyes:[[0,"smug"],[i,"wide"]],pose:(s,r)=>r>i?s.pose({armL:[30,20],armR:[130,20]}):s.pose({armL:[12,8],armR:[70,90]})})],extra:(s,r,[o])=>{let a=new oe(new Ot(.08,.065,.18,16),V("#FBF7EC"));s.add(a);let l=[];for(let d=0;d<16;d++){let p=Nt("#6B3A1A",.18,0);p.material.blending=Xn,s.add(p),l.push(p)}let c=ze(s,["ELLIOT ARONSON \xB7 1966"],2,[-2,2.4,-.6],{size:60}),h=Qe(s,["\u2605 MUY LISTO \u2605"],1.5,[1.8,2.4,-.6],{fg:"#3E7A5C"}),u=Et(s,"\xA1SPLASH!",.8,[1,2.8,-1.1]);return{update:(d,p,g)=>{let y=Tn(o);a.position.set(y.x,y.y+.08,y.z+.05),a.rotation.z=d>i?-2:0,l.forEach((m,f)=>{let E=_r((d-i)*1.5-f*.05,0,1);m.position.set(y.x-.1+Math.sin(f)*.25,y.y-E*1.2,y.z+.1),m.material.opacity=E>0&&E<1?.9:0}),J(c,d,.2,99,g),J(h,d,t,i,g),J(u,d,i+.2,99,g)}}},c:[[0,2,5],[0,1.6,-1],[0,1.9,4.2],[0,1.6,-1]],range:3}},n=>({amb:"aula",fov:36,atores:["azul","laranja","roxo","verde"].map((e,t)=>Kt({outfit:e,glow:0,hair:t%2?"long":null,hairc:"#3A2418",lash:t%2===1,x:-2.4+t*1.6,z:-.6,y:-.4,eyes:[[0,"look"],[1.2,"heart"]],pose:Ni})),extra:e=>{let t=ze(e,["LES CAY\xD3 MEJOR \u2665"],1.9,[0,2.15,-.6]);return{update:(i,s,r)=>J(t,i,1,99,r)}},c:[[0,1.8,4.6],[0,1,-.6],[0,1.7,3.8],[0,1,-.6]],range:3}),n=>({amb:"lab",fov:30,atores:[ge({x:-.6,z:0,eyes:[[0,"look"]],pose:e=>e.pose({armL:[12,8],armR:[140,10]})})],extra:e=>{let t=ze(e,["OJO: SOLO SI ANTES","DEMUESTRAS QUE VALES"],1.8,[.75,2.05,0],{h:240,size:64});return{update:(i,s,r)=>J(t,i,.3,99,r)}},c:[[0,1.8,3.8],[.2,1.6,0],[0,1.8,3.2],[.2,1.6,0]],range:1.8}),n=>({amb:"concurso",fov:34,atores:[Kt({outfit:"laranja",glow:0,x:0,z:-1.1,eyes:[[0,"flat"],[1,"wide"]],pose:(e,t)=>e.pose({armL:[30,20],armR:[t>1?130:70,20]})})],extra:(e,t,[i])=>{let s=new oe(new Ot(.08,.065,.18,16),V("#FBF7EC"));e.add(s);let r=Qe(e,["SOLO TORPE"],1.3,[1.6,2.4,-.6],{fg:"#C9361F"});return{update:(o,a,l)=>{let c=Tn(i);s.position.set(c.x,c.y+.08,c.z+.05),s.rotation.z=o>1?-2:0,J(r,o,1.4,99,l)}}},c:[[0,2,4.6],[0,1.6,-1],[0,1.9,4],[0,1.6,-1]],range:3})]);ae(68,n=>({amb:"jardin",fov:30,atores:[ge({x:0,z:0,eyes:[[0,"smug"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[60,100]})}),js({x:.55,y:1.1,z:.1,s:.4,eyes:[[0,"happy"]]})],extra:e=>{let t=ze(e,["PEPINO SALVADO > ROSAS"],2.1,[0,2.35,0],{size:60});return{update:(i,s,r)=>J(t,i,.4,99,r)}},c:[[0,1.7,3.4],[0,1.4,0],[0,1.7,2.8],[0,1.45,0]],range:1.8}));ae(69,(n,e)=>{let t=Y(e,"tirita");return{amb:"jardin",fov:32,atores:[g1({x:.8,z:-.2,eyes:[[0,"flat"],[t,"look"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?70:12,20]})}),ge({x:-.6,z:0,eyes:[[0,"sad"],[t+.6,"happy"]]})],extra:(i,s,[r])=>{let o=k(.22,.08,.02,V("#E8C8A0"),0,0,0);i.add(o);let a=k(.3,.16,.2,V("#E9B44C"),0,0,0);i.add(a);let l=Qe(i,["+ TIRITA + BIZCOCHO"],1.6,[.1,2.35,0],{fg:"#3E7A5C"});return{update:(c,h,u)=>{let d=Tn(r);a.position.set(d.x,d.y+.1,d.z+.1),o.position.set(d.x,d.y+.24,d.z+.1),a.visible=o.visible=c>t,J(l,c,t+.3,99,u)}}},c:[[0,1.7,3.6],[.1,1.4,0],[0,1.7,3],[.1,1.4,0]],range:2}});ae(70,n=>({amb:"entreCasas",fov:36,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],eyes:[[0,"happy"]]}),He({x:Dt[0],y:Dt[1],z:Dt[2],eyes:[[0,"happy"]]})],extra:e=>{let t=$o(e,16);return{update:i=>t(i,[0,4.4,0,3])}},cam:[[0,[0,2.4,9],[0,4.8,-1.4]],[n,...Ac]],f:[[0,9]],range:5,lookFn:e=>({exposure:et(.9,1.08,Fe(0,n,e)),bloom:.5})}));Tr(71,["barrio"],[(n,e)=>{let t=Y(e,"mates"),i=Y(e,"historia");return{amb:"entreCasas",fov:34,atores:[ge({x:Ze[0],y:Ze[1],z:Ze[2],eyes:[[0,"look"],[i,"happy"]],pose:(s,r)=>r>i?s.pose({armL:[12,8],armR:[60+Math.sin(r*8)*25,40]}):s.pose()}),He({x:Dt[0],y:Dt[1],z:Dt[2],eyes:[[0,"happy"]],pose:(s,r)=>r>t&&r<i?s.pose({armL:[60+Math.sin(r*7)*20,40],armR:[12,8]}):s.pose()})],extra:s=>{let r=s.userData.me,o=s.userData.her,a=yn(s,o,["x + 2 = 5","\u2192 x = 3"],{size:80,ww:1.4}),l=yn(s,r,["1492: \xBF\xBFlos","dinosaurios??"],{size:70,ww:1.4});return{update:c=>{Bi(a,c,t-.3),Bi(l,c,i-.3)}}},fov:40,cam:[[0,[0,4.1,5.6],[0,4,-1.4]],[n,[0,4.1,4.8],[0,4,-1.4]]],f:[[0,6.8]],range:4}},(n,e)=>{let t=[Y(e,"chuches"),Y(e,"columpio"),Y(e,"banco")];return{amb:"parque",ambo:{dusk:!0},fov:36,atores:[ge({x:-.5,z:0,eyes:[[0,"happy"]],move:i=>[-.5,0,2-i*.35],pose:(i,s)=>i.walk(s)}),He({x:.5,z:0,eyes:[[0,"happy"]],move:i=>[.5,0,2-i*.35],pose:(i,s)=>i.walk(s+.5)})],extra:i=>{let s=[["TIENDA DE CHUCHES"],["EL COLUMPIO QUE CHIRR\xCDA"],["EL BANCO DEL ATARDECER"]].map((r,o)=>Qe(i,r,2,[0,0,0],{size:56}));return{update:(r,o,a)=>s.forEach((l,c)=>{l.position.set((c-1)*1.6,2.6-c%2*.3,1-r*.35),J(l,r,t[c],c<2?t[c+1]-.1:99,a)})}},cam:[[0,[0,2,6.4],[0,1.6,1.6]],[n,[0,2,6.4-n*.35],[0,1.6,1.6-n*.35]]],f:[[0,4.8]],range:3}}]);ae(72,(n,e)=>{let t=Y(e,"resulta");return{amb:"cuartoElla",fov:32,atores:[He({x:.5,z:-1.4,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({head:Math.sin(s*6)*6,armL:[12,8],armR:[12,8]})}),ge({x:-.6,z:-1.4,eyes:[[0,"flat"],[t,"happy"]],pose:(i,s)=>s>t?v1(i,s):i.pose()})],extra:(i,s,[r,o])=>{let a=Zo(i,6),l=Et(i,"No est\xE1 mal.",.8,[-.9,2.35,-1.4]);return{update:(c,h,u)=>{a(c,r.root.position.clone().add(new F(0,1.6,0)),u),J(l,c,t+.3,99,u)}}},c:[[0,1.7,3],[0,1.5,-1.4],[0,1.7,2.4],[0,1.5,-1.4]],range:2}});ae(73,n=>({amb:"barrio",fov:36,extra:e=>{let i=["OCTUBRE","DICIEMBRE","MARZO","JUNIO"].map(s=>ze(e,[s],2.2,[0,2.7,-1]));return{update:(s,r,o)=>i.forEach((a,l)=>J(a,s,l*n/4,(l+1)*n/4-.1,o))}},c:[[0,3,8],[0,2.2,-3],[0,2.8,7],[0,2.2,-3]],range:10,blur:4,lookFn:e=>({sat:.7+.3*Math.sin(e*2)})}));ae(74,(n,e)=>{let t=Y(e,"puerta");return{amb:"barrio",ambo:{dusk:!0},fov:34,atores:[ge({x:0,z:.6,eyes:[[0,"happy"],[t,"look"]],move:i=>[et(-3,2.4,Fe(0,t,i)),0,.6],pose:(i,s)=>s<t?i.walk(s):i.pose()}),He({x:0,z:.4,eyes:[[0,"happy"],[t,"look"]],move:i=>[et(-2.2,3.4,Fe(0,t,i)),0,.4],pose:(i,s)=>s<t?i.walk(s+.5):i.pose()})],extra:i=>{let s=ze(i,["\xDALTIMO D\xCDA DE CLASE"],1.9,[0,2.6,0]);return{update:(r,o,a)=>J(s,r,.2,t,a)}},cam:[[0,[-1.6,2,6],[-1,1.5,.4]],[t,[2.4,1.9,4.6],[2.9,1.5,.4]],[n,[2.8,1.8,3.6],[2.9,1.5,.4]]],f:[[0,5.6],[t,4.2]],range:3}});ae(75,(n,e)=>{let t=Y(e,"centro"),i=Y(e,"esta");return{amb:"barrio",ambo:{dusk:!0},fov:32,atores:[He({x:3.4,z:.4,eyes:[[0,"look"]],talk:[[0,n]]}),ge({x:2.4,z:.6,eyes:[[0,"look"]]})],extra:s=>{let r=Qs(["CENTRO","+ PISCINA"],1.1,{size:80,col:"#4A86C7"});r.position.set(1.9,2.3,.2),s.add(r);let o=Qs(["ESTA"],1.1,{size:90,col:"#C9361F"});o.position.set(3.9,2.3,.2),s.add(o);let a=Et(s,"\xBFSabes que\u2026?",.9,[3.8,2.3,.4]);return{update:(l,c,h)=>{J(a,l,.1,t-.4,h),J(r,l,t,99,h),J(o,l,i,99,h)}}},c:[[2.9,1.8,4],[2.9,1.8,.4],[2.9,1.8,3.4],[2.9,1.8,.4]],range:2}});ae(76,n=>({amb:"barrio",ambo:{dusk:!0},fov:28,atores:[ge({x:2.4,z:.6,eyes:[[0,"wide"]]})],c:[[2.4,1.65,2.6],[2.4,1.6,.6],[2.4,1.65,2.2],[2.4,1.6,.6]],range:1}));ae(77,(n,e)=>{let t=Y(e,"chico");return{amb:"cuartoElla",fov:30,atores:[He({x:.7,z:-2,eyes:[[0,"look"],[t,"happy"]]}),wn({...wr,eyes:[[0,"shut"]],pose:(i,s)=>bc(i,s)})],extra:(i,s,[r,o])=>{for(let h=0;h<4;h++){let u=rs(.6);u.position.set(-2.6+h*.7,0,-1.6+h%2*.4),i.add(u)}let a=Xo();i.add(a);let l=ze(i,["HACE UN A\xD1O"],1.4,[.7,3,-2]),c=Zo(i,5);return{update:(h,u,d)=>{let p=Tn(o);a.position.set(p.x,p.y+.12,p.z+.05),c(h,p,d),J(l,h,.2,3,d)}}},cam:[[0,[1.4,1.8,1],[.4,1.8,-3]],[t,[-.4,1.9,-1.6],[-1,1.9,-7]],[n,[-.6,1.9,-2.6],[-1,1.9,-7]]],f:[[0,4],[t,5.4]],range:3,look:{sat:.55,exposure:1.05,vig:.7}}});ae(78,n=>({amb:"barrio",ambo:{dusk:!0},fov:30,atores:[He({x:3.4,z:.4,eyes:[[0,"down"]]}),ge({x:2.4,z:.6,eyes:[[0,"look"]]})],c:[[2.9,1.7,3.4],[2.9,1.6,.4],[2.9,1.7,3.2],[2.9,1.6,.4]],range:2}));ae(79,(n,e)=>{let t=Y(e,"esta");return{amb:"barrio",ambo:{dusk:!0},fov:30,atores:[He({x:3.4,z:.4,eyes:[[0,"look"],[t,"happy"]],talk:[[0,n]]}),ge({x:2.4,z:.6,eyes:[[0,"wide"]]})],extra:i=>{let s=Et(i,"Esta. Quiero esta.",1.1,[3.8,2.3,.4]);return{update:(r,o,a)=>J(s,r,t,99,a)}},c:[[3.2,1.7,3.2],[3.2,1.6,.4],[3.2,1.7,2.8],[3.2,1.6,.4]],range:2}});ae(80,(n,e)=>{let t=Y(e,"roja"),i=Y(e,"tomate");return{amb:"barrio",ambo:{dusk:!0},fov:30,atores:[He({x:3.4,z:.4,eyes:[[0,"look"],[t,"happy"]]}),ge({x:2.4,z:.6,eyes:[[0,"wide"],[t,"heart"]]})],extra:(s,r,[o])=>{let a=Ar(o),l=gc(4.3,1.8,.4,3);s.add(l);let c=Qe(s,["SIN PALABRAS"],1.4,[2.4,2.35,.6]);return{update:(h,u,d)=>{let p=Fe(t,t+1.2,h);a(p),o.tint(new ye("#FFF0DC").lerp(new ye("#FF7A6A"),p).getStyle()),l.visible=h>i,J(c,h,.2,t-.2,d)}}},c:[[3,1.7,3.4],[3,1.6,.4],[3,1.7,2.8],[3,1.6,.4]],range:2}});ae(81,n=>({amb:"biblio",fov:30,atores:[zu({x:0,z:-1,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[150,20],head:Math.sin(t*5)*4})})],extra:e=>{let t=ze(e,["DARWIN: \u2713"],1.1,[.9,2.3,-1]);return{update:(i,s,r)=>J(t,i,.3,99,r)}},c:[[0,1.7,2.6],[0,1.6,-1],[0,1.7,2.2],[0,1.6,-1]],range:1.6}));ae(82,n=>({amb:"barrio",ambo:{dusk:!0},fov:34,atores:[He({x:3.4,z:.4,eyes:[[0,"happy"]],move:e=>[et(3.4,4.5,Fe(0,1.6,e)),0,et(.4,-2.9,Fe(0,1.6,e))],pose:(e,t)=>e.walk(t,1.8)}),ge({x:2.4,z:.6,eyes:[[0,"heart"]]})],extra:e=>{let t=k(1.1,2.1,.02,V("#1A1410"),4.5,1.05,-2.92);e.add(t);let i=k(1.1,2.1,.1,V("#3E6A5A"),0,0,0),s=new Pe;return s.position.set(4.5-.55,1.05,-2.94),i.position.set(.55,0,0),s.add(i),e.add(s),{update:r=>{s.rotation.y=r<1.7?-1.3:et(-1.3,0,Fe(1.7,2,r)),t.visible=r<2}}},c:[[1.6,2,5.2],[3.4,1.4,-1],[1.8,2,4.6],[3.6,1.4,-1.2]],range:4}));ae(83,(n,e)=>{let t=Y(e,"cartel");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:32,atores:[ge({x:-.5,z:-2,eyes:[[0,"look"],[t,"wide"]]})],extra:i=>{let s=yn(i,i.userData.her,["\xBFMa\xF1ana","vamos juntos?"],{size:80});return{update:r=>Bi(s,r,t-.2)}},c:[[-1.4,1.8,1.2],[.6,1.9,-6.2],[-1,1.8,.4],[.9,1.9,-6.2]],range:6,blur:6,look:zt}});ae(84,n=>({amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:30,atores:[],extra:e=>(yn(e,e.userData.her,["\xBFMa\xF1ana","vamos juntos?"],{size:80}),{}),c:Jo([1,1.9,-3.4],[1,2,-4.6]),range:2,look:zt}));ae(85,(n,e)=>{let t=Y(e,"no");return{amb:"cuartoYo",ambo:{night:!0,lit:!0},fov:28,atores:[ge({x:-.5,z:-1.6,eyes:[[0,"look"],[t+.4,"happy"]]})],extra:i=>{let s=Qe(i,["S\xC1BADO: SIN CLASE"],1.4,[-.5,2.3,-1.6],{fg:"#7F6BC4"});return{update:(r,o,a)=>J(s,r,.2,99,a)}},c:[[-.2,1.7,1.4],[-.4,1.6,-1.6],[-.2,1.7,1.1],[-.4,1.6,-1.6]],range:1.4,look:zt}});ae(86,(n,e)=>{let t=Y(e,"sacas"),i=Y(e,"hace",t),s=Y(e,"nunca");return{amb:"quarto",ambo:{night:!0},fov:32,atores:[ge({x:-.2,z:.2,eyes:[[0,"look"],[t,"down"],[i+.5,"happy"]],pose:(r,o)=>{if(o>t&&o<i+.6)r.pose({armL:[12,8],armR:[40,20],lean:-20}),zn(r),r.root.position.y=-.5;else{r.pose({armL:[12,8],armR:[70,90]}),r.root.position.y=0;for(let a of Object.values(r.legs))a.th.visible=!0,a.shin.visible=!0}}})],extra:(r,o,[a])=>{let l=k(.03,.2,.03,V("#1E2A55"),0,0,0);r.add(l);let c=Qs(["S\xCD."],.8,{size:200,col:"#C9361F"});r.add(c);let h=$o(r,10,"#E8DCC0"),u=ze(r,["HACE 2 A\xD1OS"],1.4,[.4,2.6,.2]);return{update:(d,p,g)=>{let y=Tn(a);l.position.set(y.x,y.y+.1,y.z+.05),l.visible=d<t;let m=Fe(t+.4,i+.4,d);c.position.set(et(-1.2,y.x+.2,m),et(.1,y.y+.3,m),et(-.6,.5,m)),c.visible=d>t,c.rotation.x=et(-1.4,0,m),h(d,[c.position.x,c.position.y,c.position.z+.1,.5],d>t&&d<i+1?1:0),J(u,d,i,s+1.5,g)}}},c:[[1,1.6,3],[-.4,1,-.2],[.8,1.6,2.4],[-.2,1.2,.1]],range:2,look:zt}});ae(87,n=>({amb:"cuartoElla",ambo:{night:!0,lit:!0},fov:30,atores:[He({x:.7,z:-2,eyes:[[0,"look"],[1.4,"heart"]]}),ge({...wr,eyes:[[0,"happy"]]})],extra:e=>{let t=yn(e,e.userData.me,["S\xCD."],{size:200,col:"#C9361F"}),i=$o(e,14);return{update:s=>{Bi(t,s,.4),i(s,[-1,2,-6,1.2],Fe(1,2,s))}}},cam:[[0,[-.9,1.9,-1.4],[-1,1.9,-7]],[1.8,[-.8,1.9,-2.6],[-1,1.9,-7]],[n,[1.6,2.2,1.8],[-.4,1.8,-4]]],f:[[0,5.6],[1.8,4.4],[5,5]],range:4,lookFn:e=>({...zt,exposure:.95-Fe(3,3.6,e)*.95})}));function x1(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new Do(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=Ks.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Ks.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(x1(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Ks[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
