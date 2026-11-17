var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Lc="170";var Wu=0,Th=1,Xu=2;var Ud=1,Uc=2,Si=3,qi=0,ln=1,wt=2,ci=0,Wi=1,Tn=2,wh=3,Rh=4,qu=5,hs=100,Yu=101,Zu=102,$u=103,Ju=104,Qu=200,Ku=201,ju=202,ef=203,cl=204,hl=205,tf=206,nf=207,sf=208,rf=209,of=210,af=211,lf=212,cf=213,hf=214,dl=0,ul=1,fl=2,Ys=3,pl=4,ml=5,gl=6,El=7,Nd=0,df=1,uf=2,hi=0,ff=1,pf=2,mf=3,gf=4,Ef=5,yf=6,vf=7;var Bd=300,Zs=301,$s=302,yl=303,vl=304,ra=306,vn=1e3,us=1001,_l=1002,On=1003,_f=1004;var to=1005;var ai=1006,wa=1007;var fs=1008;var wi=1009,Od=1010,Hd=1011,Hr=1012,Nc=1013,Ri=1014,li=1015,Cn=1016,Bc=1017,Oc=1018,Js=1020,zd=35902,kd=1021,Gd=1022,Jn=1023,Vd=1024,Wd=1025,Ws=1026,Qs=1027,Hc=1028,zc=1029,Xd=1030,kc=1031;var Gc=1033,Po=33776,Io=33777,Do=33778,Lo=33779,Al=35840,Ml=35841,Sl=35842,xl=35843,bl=36196,Tl=37492,wl=37496,Rl=37808,Cl=37809,Fl=37810,Pl=37811,Il=37812,Dl=37813,Ll=37814,Ul=37815,Nl=37816,Bl=37817,Ol=37818,Hl=37819,zl=37820,kl=37821,Uo=36492,Gl=36494,Vl=36495,qd=36283,Wl=36284,Xl=36285,ql=36286;var No=2300,Yl=2301,Ra=2302,Ch=2400,Fh=2401,Ph=2402;var Af=3200,lr=3201;var Yd=0,Mf=1,Gi="",Jt="srgb",Qi="srgb-linear",oa="linear",Lt="srgb";var xs=7680;var Ih=519,Sf=512,xf=513,bf=514,Zd=515,Tf=516,wf=517,Rf=518,Cf=519,Zl=35044;var Dh="300 es",bi=2e3,Bo=2001,Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ca=Math.PI/180,Oo=180/Math.PI;function Xi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function yn(n,e,t){return Math.max(e,Math.min(t,n))}function Ff(n,e){return(n%e+e)%e}function Fa(n,e,t){return(1-t)*n+t*e}function oi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],D=s[2],w=s[5],b=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*_+l*w,r[6]=o*p+a*y+l*b,r[1]=c*E+h*v+d*D,r[4]=c*m+h*_+d*w,r[7]=c*p+h*y+d*b,r[2]=u*E+f*v+g*D,r[5]=u*m+f*_+g*w,r[8]=u*p+f*y+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new st;function $d(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pf(){let n=Ho("canvas");return n.style.display="block",n}var Lh={};function Lr(n){n in Lh||(Lh[n]=!0,console.warn(n))}function If(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Df(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lf(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var xt={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(n.r=Ti(n.r),n.g=Ti(n.g),n.b=Ti(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(n.r=Xs(n.r),n.g=Xs(n.g),n.b=Xs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gi?oa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Uh=[.64,.33,.3,.6,.15,.06],Nh=[.2126,.7152,.0722],Bh=[.3127,.329],Oh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Qi]:{primaries:Uh,whitePoint:Bh,transfer:oa,toXYZ:Oh,fromXYZ:Hh,luminanceCoefficients:Nh,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:Uh,whitePoint:Bh,transfer:Lt,toXYZ:Oh,fromXYZ:Hh,luminanceCoefficients:Nh,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}});var bs,$l=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Ho("canvas")),bs.width=e.width,bs.height=e.height;let i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ho("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uf=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ia(s[o].image)):r.push(Ia(s[o]))}else r=Ia(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$l.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nf=0,wn=class n extends Yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=us,s=us,r=ai,o=fs,a=Jn,l=wi,c=n.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Xi(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Bd;wn.DEFAULT_ANISOTROPY=1;var Nt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,D=(p+1)/2,w=(h+u)/4,b=(d+E)/4,C=(g+m)/4;return _>y&&_>D?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=w/i,r=b/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=C/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=b/r,s=C/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends Yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Jl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ko=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ql=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),w=Math.atan2(D,p*v);m=Math.sin(m*w)/D,a=Math.sin(a*w)/D}let y=a*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new I,zh=new Zi,Ci=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),no.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(e.matrixWorld),this.union(no)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),io.subVectors(this.max,xr),Ts.subVectors(e.a,xr),ws.subVectors(e.b,xr),Rs.subVectors(e.c,xr),Ni.subVectors(ws,Ts),Bi.subVectors(Rs,ws),is.subVectors(Ts,Rs);let t=[0,-Ni.z,Ni.y,0,-Bi.z,Bi.y,0,-is.z,is.y,Ni.z,0,-Ni.x,Bi.z,0,-Bi.x,is.z,0,-is.x,-Ni.y,Ni.x,0,-Bi.y,Bi.x,0,-is.y,is.x,0];return!La(t,Ts,ws,Rs,io)||(t=[1,0,0,0,1,0,0,0,1],!La(t,Ts,ws,Rs,io))?!1:(so.crossVectors(Ni,Bi),t=[so.x,so.y,so.z],La(t,Ts,ws,Rs,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yi=[new I,new I,new I,new I,new I,new I,new I,new I],Yn=new I,no=new Ci,Ts=new I,ws=new I,Rs=new I,Ni=new I,Bi=new I,is=new I,xr=new I,io=new I,so=new I,ss=new I;function La(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),h=i.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Bf=new Ci,br=new I,Ua=new I,$i=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Ua)),this.expandByPoint(br.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new I,Na=new I,ro=new I,Oi=new I,Ba=new I,oo=new I,Oa=new I,Go=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Na.copy(e).add(t).multiplyScalar(.5),ro.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Na);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ro),a=Oi.dot(this.direction),l=-Oi.dot(ro),c=Oi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Na).addScaledVector(ro,u),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){Ba.subVectors(t,e),oo.subVectors(i,e),Oa.crossVectors(Ba,oo);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let l=a*this.direction.dot(oo.crossVectors(Oi,oo));if(l<0)return null;let c=a*this.direction.dot(Ba.cross(Oi));if(c<0||l+c>o)return null;let h=-a*Oi.dot(Oa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,Hf)}lookAt(e,t,i){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Hi.crossVectors(i,Nn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Hi.crossVectors(i,Nn)),Hi.normalize(),ao.crossVectors(Nn,Hi),s[0]=Hi.x,s[4]=ao.x,s[8]=Nn.x,s[1]=Hi.y,s[5]=ao.y,s[9]=Nn.y,s[2]=Hi.z,s[6]=ao.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],v=i[3],_=i[7],y=i[11],D=i[15],w=s[0],b=s[4],C=s[8],S=s[12],A=s[1],P=s[5],z=s[9],k=s[13],q=s[2],ee=s[6],$=s[10],oe=s[14],Z=s[3],fe=s[7],Me=s[11],ze=s[15];return r[0]=o*w+a*A+l*q+c*Z,r[4]=o*b+a*P+l*ee+c*fe,r[8]=o*C+a*z+l*$+c*Me,r[12]=o*S+a*k+l*oe+c*ze,r[1]=h*w+d*A+u*q+f*Z,r[5]=h*b+d*P+u*ee+f*fe,r[9]=h*C+d*z+u*$+f*Me,r[13]=h*S+d*k+u*oe+f*ze,r[2]=g*w+E*A+m*q+p*Z,r[6]=g*b+E*P+m*ee+p*fe,r[10]=g*C+E*z+m*$+p*Me,r[14]=g*S+E*k+m*oe+p*ze,r[3]=v*w+_*A+y*q+D*Z,r[7]=v*b+_*P+y*ee+D*fe,r[11]=v*C+_*z+y*$+D*Me,r[15]=v*S+_*k+y*oe+D*ze,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],E=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+E*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],E=e[13],m=e[14],p=e[15],v=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*E*c-g*d*c+g*a*f-o*E*f-h*a*p+o*d*p,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,w=t*v+i*_+s*y+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/w;return e[0]=v*b,e[1]=(E*u*r-d*m*r-E*s*f+i*m*f+d*s*p-i*u*p)*b,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*b,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*b,e[4]=_*b,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*b,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*b,e[8]=y*b,e[9]=(g*d*r-h*E*r-g*i*f+t*E*f+h*i*p-t*d*p)*b,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*p+t*a*p)*b,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*f-t*a*f)*b,e[12]=D*b,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*b,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*b,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,E=o*h,m=o*d,p=a*d,v=l*c,_=l*h,y=l*d,D=i.x,w=i.y,b=i.z;return s[0]=(1-(E+p))*D,s[1]=(f+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(u+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+_)*b,s[9]=(m-v)*b,s[10]=(1-(u+E))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Cs.set(s[0],s[1],s[2]).length(),o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let c=1/r,h=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,t.setFromRotationMatrix(Zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=bi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(a===bi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=bi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,f=(i+s)*h,g,E;if(a===bi)g=(o+r)*d,E=-2*d;else if(a===Bo)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Cs=new I,Zn=new Bt,Of=new I(0,0,0),Hf=new I(1,1,1),Hi=new I,ao=new I,Nn=new I,kh=new Bt,Gh=new Zi,di=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zf=0,Vh=new I,Fs=new Zi,_i=new Bt,lo=new I,Tr=new I,kf=new I,Gf=new Zi,Wh=new I(1,0,0),Xh=new I(0,1,0),qh=new I(0,0,1),Yh={type:"added"},Vf={type:"removed"},Ps={type:"childadded",child:null},Ha={type:"childremoved",child:null},jt=class n extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new di,i=new Zi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lo.copy(e):lo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Tr,lo,this.up):_i.lookAt(lo,Tr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(_i),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf),Ha.child=e,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};jt.DEFAULT_UP=new I(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new I,Ai=new I,za=new I,Mi=new I,Is=new I,Ds=new I,Zh=new I,ka=new I,Ga=new I,Va=new I,Wa=new Nt,Xa=new Nt,qa=new Nt,Vi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),Ai.subVectors(i,t),za.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(za),c=Ai.dot(Ai),h=Ai.dot(za),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,i),qa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wa,r.x),o.addScaledVector(Xa,r.y),o.addScaledVector(qa,r.z),o}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),Ai.subVectors(e,t),$n.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,i),Ds.subVectors(r,i),ka.subVectors(e,i);let l=Is.dot(ka),c=Ds.dot(ka);if(l<=0&&c<=0)return t.copy(i);Ga.subVectors(e,s);let h=Is.dot(Ga),d=Ds.dot(Ga);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Is,o);Va.subVectors(e,r);let f=Is.dot(Va),g=Ds.dot(Va);if(g>=0&&f<=g)return t.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ds,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Zh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Zh,a);let p=1/(m+E+u);return o=E*p,a=u*p,t.copy(i).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},co={h:0,s:0,l:0};function Ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=xt.workingColorSpace){if(e=Ff(e,1),t=yn(t,0,1),i=yn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ya(o,r,e+1/3),this.g=Ya(o,r,e),this.b=Ya(o,r,e-1/3)}return xt.toWorkingColorSpace(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let i=Jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return xt.fromWorkingColorSpace(En.copy(this),e),Math.round(yn(En.r*255,0,255))*65536+Math.round(yn(En.g*255,0,255))*256+Math.round(yn(En.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Jt){xt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(co);let i=Fa(zi.h,co.h,t),s=Fa(zi.s,co.s,t),r=Fa(zi.l,co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new de;de.NAMES=Jd;var Wf=0,Fi=class extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Xi(),this.name="",this.blending=Wi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=hl,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new I,ho=new ce,cn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zl,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}};var Wo=class extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xo=class extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var bt=class extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xf=0,Vn=new Bt,Za=new jt,Ls=new I,Bn=new Ci,wr=new Ci,an=new I,en=class n extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($d(e)?Xo:Wo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Bn.min,wr.min),Bn.expandByPoint(an),an.addVectors(Bn.max,wr.max),Bn.expandByPoint(an)):(Bn.expandByPoint(wr.min),Bn.expandByPoint(wr.max))}Bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),an.add(Ls)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new I,l[C]=new I;let c=new I,h=new I,d=new I,u=new ce,f=new ce,g=new ce,E=new I,m=new I;function p(C,S,A){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(E),a[S].add(E),a[A].add(E),l[C].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){let A=v[C],P=A.start,z=A.count;for(let k=P,q=P+z;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let _=new I,y=new I,D=new I,w=new I;function b(C){D.fromBufferAttribute(s,C),w.copy(D);let S=a[C];_.copy(S),_.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(w,S);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,S=v.length;C<S;++C){let A=v[C],P=A.start,z=A.count;for(let k=P,q=P+z;k<q;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new cn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$h=new Bt,rs=new Go,uo=new $i,Jh=new I,fo=new I,po=new I,mo=new I,$a=new I,go=new I,Qh=new I,Eo=new I,W=class extends jt{constructor(e=new en,t=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&($a.fromBufferAttribute(d,e),o?go.addScaledVector($a,h):go.addScaledVector($a.sub(t),h))}t.add(go)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(uo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(uo,Jh)===null||rs.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&($h.copy(r).invert(),rs.copy(e.ray).applyMatrix4($h),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let w=a.getX(y),b=a.getX(y+1),C=a.getX(y+2);s=yo(this,p,e,i,c,h,d,w,b,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=yo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let w=y,b=y+1,C=y+2;s=yo(this,p,e,i,c,h,d,w,b,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=m,_=m+1,y=m+2;s=yo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function qf(n,e,t,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qi,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:n}}function yo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,fo),n.getVertexPosition(l,po),n.getVertexPosition(c,mo);let h=qf(n,e,t,i,fo,po,mo,Qh);if(h){let d=new I;Vi.getBarycoord(Qh,fo,po,mo,d),s&&(h.uv=Vi.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Vi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Vi.getNormal(fo,po,mo,u.normal),h.face=u,h.barycoord=d}return h}var Rn=class n extends en{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function g(E,m,p,v,_,y,D,w,b,C,S){let A=y/b,P=D/C,z=y/2,k=D/2,q=w/2,ee=b+1,$=C+1,oe=0,Z=0,fe=new I;for(let Me=0;Me<$;Me++){let ze=Me*P-k;for(let dt=0;dt<ee;dt++){let Ht=dt*A-z;fe[E]=Ht*v,fe[m]=ze*_,fe[p]=q,c.push(fe.x,fe.y,fe.z),fe[E]=0,fe[m]=0,fe[p]=w>0?1:-1,h.push(fe.x,fe.y,fe.z),d.push(dt/b),d.push(1-Me/C),oe+=1}}for(let Me=0;Me<C;Me++)for(let ze=0;ze<b;ze++){let dt=u+ze+ee*Me,Ht=u+ze+ee*(Me+1),Q=u+(ze+1)+ee*(Me+1),ae=u+(ze+1)+ee*Me;l.push(dt,Ht,ae),l.push(Ht,Q,ae),Z+=6}a.addGroup(f,Z,S),f+=Z,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ks(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=Ks(n[t]);for(let s in i)e[s]=i[s]}return e}function Yf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var cr={clone:Ks,merge:Sn},Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qo=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new I,Kh=new ce,jh=new ce,fn=class extends qo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,jh),t.subVectors(jh,Kh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,Ns=1,Kl=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Us,Ns,e,t);s.layers=this.layers,this.add(s);let r=new fn(Us,Ns,e,t);r.layers=this.layers,this.add(r);let o=new fn(Us,Ns,e,t);o.layers=this.layers,this.add(o);let a=new fn(Us,Ns,e,t);a.layers=this.layers,this.add(a);let l=new fn(Us,Ns,e,t);l.layers=this.layers,this.add(l);let c=new fn(Us,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Yo=class extends wn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jl=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ai}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ci});r.uniforms.tEquirect.value=t;let o=new W(s,r),a=t.minFilter;return t.minFilter===fs&&(t.minFilter=ai),new Kl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ja=new I,Jf=new I,Qf=new st,xi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ja.subVectors(i,t).cross(Jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Qf.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new $i,vo=new I,zr=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-f,y-p).normalize(),i[1].setComponents(l+r,u+c,m+f,y+p).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),t===bi)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(t===Bo)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Kf(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ie=class n extends en{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),D=v+1+c*(p+1),w=v+1+c*p;f.push(_,y,w),f.push(y,D,w)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(E,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,up=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l0=`#if defined( USE_POINTS_UV )
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
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,vm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,bm=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:jf,alphahash_pars_fragment:ep,alphamap_fragment:tp,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:dp,iridescence_fragment:up,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:Ep,color_fragment:yp,color_pars_fragment:vp,color_pars_vertex:_p,color_vertex:Ap,common:Mp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:xp,displacementmap_pars_vertex:bp,displacementmap_vertex:Tp,emissivemap_fragment:wp,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Fp,envmap_fragment:Pp,envmap_common_pars_fragment:Ip,envmap_pars_fragment:Dp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Xp,envmap_vertex:Up,fog_vertex:Np,fog_pars_vertex:Bp,fog_fragment:Op,fog_pars_fragment:Hp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:kp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:$p,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:Kp,lights_fragment_maps:jp,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:o0,map_particle_fragment:a0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:d0,morphcolor_vertex:u0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:E0,normal_pars_fragment:y0,normal_pars_vertex:v0,normal_vertex:_0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:b0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:F0,dithering_pars_fragment:P0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:U0,shadowmap_vertex:N0,shadowmask_pars_fragment:B0,skinbase_vertex:O0,skinning_pars_vertex:H0,skinning_vertex:z0,skinnormal_vertex:k0,specularmap_fragment:G0,specularmap_pars_fragment:V0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:$0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:K0,background_frag:j0,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:dm,meshbasic_vert:um,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:Em,meshnormal_vert:ym,meshnormal_frag:vm,meshphong_vert:_m,meshphong_frag:Am,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:xm,meshtoon_frag:bm,points_vert:Tm,points_frag:wm,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Fm,sprite_frag:Pm},he={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ri={basic:{uniforms:Sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Sn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Sn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Sn([he.points,he.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Sn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Sn([he.common,he.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Sn([he.sprite,he.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Sn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Sn([he.lights,he.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ri.physical={uniforms:Sn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var _o={r:0,b:0,g:0},as=new di,Im=new Bt;function Dm(n,e,t,i,s,r,o){let a=new de(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function E(v){let _=!1,y=g(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===ra)?(h===void 0&&(h=new W(new Rn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ks(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),as.copy(_.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(as)),h.material.toneMapped=xt.getTransfer(y.colorSpace)!==Lt,(d!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new W(new Ie(2,2),new dn({name:"BackgroundMaterial",uniforms:Ks(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=xt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(_o,Qd(n)),i.buffers.color.setClear(_o.r,_o.g,_o.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:E,addToRenderList:m}}function Lm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,z,k,q){let ee=!1,$=d(k,z,P);r!==$&&(r=$,c(r.object)),ee=f(A,k,z,q),ee&&g(A,k,z,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(A,P,z,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,z){let k=z.wireframe===!0,q=i[A.id];q===void 0&&(q={},i[A.id]=q);let ee=q[P.id];ee===void 0&&(ee={},q[P.id]=ee);let $=ee[k];return $===void 0&&($=u(l()),ee[k]=$),$}function u(A){let P=[],z=[],k=[];for(let q=0;q<t;q++)P[q]=0,z[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:A,attributes:{},index:null}}function f(A,P,z,k){let q=r.attributes,ee=P.attributes,$=0,oe=z.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let Me=q[Z],ze=ee[Z];if(ze===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(ze=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(ze=A.instanceColor)),Me===void 0||Me.attribute!==ze||ze&&Me.data!==ze.data)return!0;$++}return r.attributesNum!==$||r.index!==k}function g(A,P,z,k){let q={},ee=P.attributes,$=0,oe=z.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let Me=ee[Z];Me===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor));let ze={};ze.attribute=Me,Me&&Me.data&&(ze.data=Me.data),q[Z]=ze,$++}r.attributes=q,r.attributesNum=$,r.index=k}function E(){let A=r.newAttributes;for(let P=0,z=A.length;P<z;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){let z=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;z[A]=1,k[A]===0&&(n.enableVertexAttribArray(A),k[A]=1),q[A]!==P&&(n.vertexAttribDivisor(A,P),q[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==A[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function _(A,P,z,k,q,ee,$){$===!0?n.vertexAttribIPointer(A,P,z,q,ee):n.vertexAttribPointer(A,P,z,k,q,ee)}function y(A,P,z,k){E();let q=k.attributes,ee=z.getAttributes(),$=P.defaultAttributeValues;for(let oe in ee){let Z=ee[oe];if(Z.location>=0){let fe=q[oe];if(fe===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){let Me=fe.normalized,ze=fe.itemSize,dt=e.get(fe);if(dt===void 0)continue;let Ht=dt.buffer,Q=dt.type,ae=dt.bytesPerElement,Le=Q===n.INT||Q===n.UNSIGNED_INT||fe.gpuType===Nc;if(fe.isInterleavedBufferAttribute){let pe=fe.data,Ye=pe.stride,tt=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let ut=0;ut<Z.locationSize;ut++)p(Z.location+ut,pe.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ut=0;ut<Z.locationSize;ut++)m(Z.location+ut);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let ut=0;ut<Z.locationSize;ut++)_(Z.location+ut,ze/Z.locationSize,Q,Me,Ye*ae,(tt+ze/Z.locationSize*ut)*ae,Le)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<Z.locationSize;pe++)p(Z.location+pe,fe.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<Z.locationSize;pe++)m(Z.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let pe=0;pe<Z.locationSize;pe++)_(Z.location+pe,ze/Z.locationSize,Q,Me,ze*ae,ze/Z.locationSize*pe*ae,Le)}}else if($!==void 0){let Me=$[oe];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(Z.location,Me);break;case 3:n.vertexAttrib3fv(Z.location,Me);break;case 4:n.vertexAttrib4fv(Z.location,Me);break;default:n.vertexAttrib1fv(Z.location,Me)}}}}v()}function D(){C();for(let A in i){let P=i[A];for(let z in P){let k=P[z];for(let q in k)h(k[q].object),delete k[q];delete P[z]}delete i[A]}}function w(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let z in P){let k=P[z];for(let q in k)h(k[q].object),delete k[q];delete P[z]}delete i[A.id]}function b(A){for(let P in i){let z=i[P];if(z[A.id]===void 0)continue;let k=z[A.id];for(let q in k)h(k[q].object),delete k[q];delete z[A.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Um(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Jn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let C=b===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==li&&!C)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:w}}function Bm(n){let e=this,t=null,i=0,s=!1,r=!1,o=new xi,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let D=0;D!==_;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function Om(n){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=Zs:a===vl&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yl||a===vl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new jl(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var js=class extends qo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vs=4,ed=[.125,.215,.35,.446,.526,.582],ds=20,Qa=new js,td=new de,Ka=null,ja=0,el=0,tl=!1,cs=(1+Math.sqrt(5))/2,Bs=1/cs,nd=[new I(-cs,Bs,0),new I(cs,Bs,0),new I(-Bs,0,cs),new I(Bs,0,cs),new I(0,cs,-Bs),new I(0,cs,Bs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,ja,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Cn,format:Jn,colorSpace:Qi,depthBuffer:!1},s=id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=zm(r,e,t)}return s}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,s){let a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(td),h.toneMapping=hi,h.autoClear=!1;let f=new Ke({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new W(new Rn,f),E=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,E=!0):(f.color.copy(td),E=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Ao(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Zs||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nd[(s-r-1)%nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new W(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ds-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);let p=[],v=0;for(let b=0;b<ds;++b){let C=b/E,S=Math.exp(-C*C/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],D=3*y*(s>_-Vs?s-_+Vs:0),w=4*(this._cubeSize-y);Ao(t,D,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Qa)}};function Hm(n){let e=[],t=[],i=[],s=n,r=n-Vs+1+ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Vs?l=ed[o-n+Vs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,v=new Float32Array(E*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){let b=w%3*2/3-1,C=w>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];v.set(S,E*g*w),_.set(u,m*g*w);let A=[w,w,w,w,w,w];y.set(A,p*g*w)}let D=new en;D.setAttribute("position",new cn(v,E)),D.setAttribute("uv",new cn(_,m)),D.setAttribute("faceIndex",new cn(y,p)),e.push(D),s>Vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function id(n,e,t){let i=new hn(n,e,t);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zm(n,e,t){let i=new Float32Array(ds),s=new I(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function sd(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function rd(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function km(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===yl||l===vl,h=l===Zs||l===$s;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Zo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Zo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Lr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vm(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let v=f.array;E=f.version;for(let _=0,y=v.length;_<y;_+=3){let D=v[_+0],w=v[_+1],b=v[_+2];u.push(D,w,w,b,b,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let D=_+0,w=_+1,b=_+2;u.push(D,w,w,b,b,D)}}else return;let m=new($d(u)?Xo:Wo)(u,1);m.version=E;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,E,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*E[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function qm(n,e,t){let i=new WeakMap,s=new Nt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*D*4*d),b=new ko(w,y,D,d);b.type=li,b.needsUpdate=!0;let C=_*4;for(let A=0;A<d;A++){let P=m[A],z=p[A],k=v[A],q=y*D*4*A;for(let ee=0;ee<P.count;ee++){let $=ee*C;f===!0&&(s.fromBufferAttribute(P,ee),w[q+$+0]=s.x,w[q+$+1]=s.y,w[q+$+2]=s.z,w[q+$+3]=0),g===!0&&(s.fromBufferAttribute(z,ee),w[q+$+4]=s.x,w[q+$+5]=s.y,w[q+$+6]=s.z,w[q+$+7]=0),E===!0&&(s.fromBufferAttribute(k,ee),w[q+$+8]=s.x,w[q+$+9]=s.y,w[q+$+10]=s.z,w[q+$+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new ce(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ym(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var er=class extends wn{constructor(e,t,i,s,r,o,a,l,c,h=Ws){if(h!==Ws&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=Ri),i===void 0&&h===Qs&&(i=Js),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jd=new wn,od=new er(1,1),eu=new ko,tu=new Ql,nu=new Yo,ad=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function aa(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function Jm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function Qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function Km(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),rn(t,i)}}function jm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;hd.set(i),n.uniformMatrix3fv(this.addr,!1,hd),rn(t,i)}}function e1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),rn(t,i)}}function t1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function n1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function i1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function s1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function r1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function a1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function c1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(od.compareFunction=Zd,r=od):r=jd,t.setTexture2D(e||r,s)}function h1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tu,s)}function d1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nu,s)}function u1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||eu,s)}function f1(n){switch(n){case 5126:return Zm;case 35664:return $m;case 35665:return Jm;case 35666:return Qm;case 35674:return Km;case 35675:return jm;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return s1;case 5125:return r1;case 36294:return o1;case 36295:return a1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return u1}}function p1(n,e){n.uniform1fv(this.addr,e)}function m1(n,e){let t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function g1(n,e){let t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function E1(n,e){let t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function y1(n,e){let t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v1(n,e){let t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _1(n,e){let t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function A1(n,e){n.uniform1iv(this.addr,e)}function M1(n,e){n.uniform2iv(this.addr,e)}function S1(n,e){n.uniform3iv(this.addr,e)}function x1(n,e){n.uniform4iv(this.addr,e)}function b1(n,e){n.uniform1uiv(this.addr,e)}function T1(n,e){n.uniform2uiv(this.addr,e)}function w1(n,e){n.uniform3uiv(this.addr,e)}function R1(n,e){n.uniform4uiv(this.addr,e)}function C1(n,e,t){let i=this.cache,s=e.length,r=aa(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||jd,r[o])}function F1(n,e,t){let i=this.cache,s=e.length,r=aa(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tu,r[o])}function P1(n,e,t){let i=this.cache,s=e.length,r=aa(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nu,r[o])}function I1(n,e,t){let i=this.cache,s=e.length,r=aa(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||eu,r[o])}function D1(n){switch(n){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return E1;case 35674:return y1;case 35675:return v1;case 35676:return _1;case 5124:case 35670:return A1;case 35667:case 35671:return M1;case 35668:case 35672:return S1;case 35669:case 35673:return x1;case 5125:return b1;case 36294:return T1;case 36295:return w1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}}var ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=f1(t.type)}},tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D1(t.type)}},nc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},nl=/(\w+)(\])?(\[|\.)?/g;function ud(n,e){n.seq.push(e),n.map[e.id]=e}function L1(n,e,t){let i=n.name,s=i.length;for(nl.lastIndex=0;;){let r=nl.exec(i),o=nl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ud(t,c===void 0?new ec(a,n,e):new tc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new nc(a),ud(t,d)),t=d}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);L1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function fd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var U1=37297,N1=0;function B1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var pd=new st;function O1(n){xt._getMatrix(pd,xt.workingColorSpace,n);let e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+B1(n.getShaderSource(e),o)}else return s}function H1(n,e){let t=O1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z1(n,e){let t;switch(e){case ff:t="Linear";break;case pf:t="Reinhard";break;case mf:t="Cineon";break;case gf:t="ACESFilmic";break;case yf:t="AgX";break;case vf:t="Neutral";break;case Ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mo=new I;function k1(){xt.getLuminanceCoefficients(Mo);let n=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function V1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ur(n){return n!==""}function gd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var X1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(X1,Y1)}var q1=new Map;function Y1(n,e){let t=at[e];if(t===void 0){let i=q1.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}var Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(n){return n.replace(Z1,$1)}function $1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function J1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Q1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zs:case $s:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function j1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nd:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case uf:e="ENVMAP_BLENDING_ADD";break}return e}function e2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function t2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=J1(t),c=Q1(t),h=K1(t),d=j1(t),u=e2(t),f=G1(t),g=V1(r),E=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?at.tonemapping_pars_fragment:"",t.toneMapping!==hi?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,H1("linearToOutputTexel",t.outputColorSpace),k1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=ic(o),o=gd(o,t),o=Ed(o,t),a=ic(a),a=gd(a,t),a=Ed(a,t),o=yd(o),a=yd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,D=fd(s,s.VERTEX_SHADER,_),w=fd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,w),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(P){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(E).trim(),k=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(w).trim(),ee=!0,$=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,w);else{let oe=md(s,D,"vertex"),Z=md(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+oe+`
`+Z)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||q==="")&&($=!1);$&&(P.diagnostics={runnable:ee,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(D),s.deleteShader(w),C=new qs(s,E),S=W1(s,E)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,U1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=w,this}var n2=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new rc(e),t.set(e,i)),i}},rc=class{constructor(e){this.id=n2++,this.code=e,this.usedTimes=0}};function i2(n,e,t,i,s,r,o){let a=new Vo,l=new sc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,z,k){let q=z.fog,ee=k.geometry,$=S.isMeshStandardMaterial?z.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),Z=oe&&oe.mapping===ra?oe.image.height:null,fe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ze=Me!==void 0?Me.length:0,dt=0;ee.morphAttributes.position!==void 0&&(dt=1),ee.morphAttributes.normal!==void 0&&(dt=2),ee.morphAttributes.color!==void 0&&(dt=3);let Ht,Q,ae,Le;if(fe){let Dt=ri[fe];Ht=Dt.vertexShader,Q=Dt.fragmentShader}else Ht=S.vertexShader,Q=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);let pe=n.getRenderTarget(),Ye=n.state.buffers.depth.getReversed(),tt=k.isInstancedMesh===!0,ut=k.isBatchedMesh===!0,$t=!!S.map,Mt=!!S.matcap,Kt=!!oe,H=!!S.aoMap,kn=!!S.lightMap,vt=!!S.bumpMap,_t=!!S.normalMap,We=!!S.displacementMap,Vt=!!S.emissiveMap,Ve=!!S.metalnessMap,T=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,K=S.dispersion>0,te=S.iridescence>0,J=S.sheen>0,Ne=S.transmission>0,me=M&&!!S.anisotropyMap,Se=G&&!!S.clearcoatMap,St=G&&!!S.clearcoatNormalMap,se=G&&!!S.clearcoatRoughnessMap,xe=te&&!!S.iridescenceMap,qe=te&&!!S.iridescenceThicknessMap,$e=J&&!!S.sheenColorMap,be=J&&!!S.sheenRoughnessMap,At=!!S.specularMap,ot=!!S.specularColorMap,kt=!!S.specularIntensityMap,U=Ne&&!!S.transmissionMap,ue=Ne&&!!S.thicknessMap,Y=!!S.gradientMap,j=!!S.alphaMap,ye=S.alphaTest>0,ge=!!S.alphaHash,nt=!!S.extensions,Qt=hi;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Qt=n.toneMapping);let mn={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:Q,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ut,batchingColor:ut&&k._colorsTexture!==null,instancing:tt,instancingColor:tt&&k.instanceColor!==null,instancingMorph:tt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:Mt,envMap:Kt,envMapMode:Kt&&oe.mapping,envMapCubeUVHeight:Z,aoMap:H,lightMap:kn,bumpMap:vt,normalMap:_t,displacementMap:u&&We,emissiveMap:Vt,normalMapObjectSpace:_t&&S.normalMapType===Mf,normalMapTangentSpace:_t&&S.normalMapType===Yd,metalnessMap:Ve,roughnessMap:T,anisotropy:M,anisotropyMap:me,clearcoat:G,clearcoatMap:Se,clearcoatNormalMap:St,clearcoatRoughnessMap:se,dispersion:K,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:qe,sheen:J,sheenColorMap:$e,sheenRoughnessMap:be,specularMap:At,specularColorMap:ot,specularIntensityMap:kt,transmission:Ne,transmissionMap:U,thicknessMap:ue,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Wi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ye,alphaHash:ge,combine:S.combine,mapUv:$t&&E(S.map.channel),aoMapUv:H&&E(S.aoMap.channel),lightMapUv:kn&&E(S.lightMap.channel),bumpMapUv:vt&&E(S.bumpMap.channel),normalMapUv:_t&&E(S.normalMap.channel),displacementMapUv:We&&E(S.displacementMap.channel),emissiveMapUv:Vt&&E(S.emissiveMap.channel),metalnessMapUv:Ve&&E(S.metalnessMap.channel),roughnessMapUv:T&&E(S.roughnessMap.channel),anisotropyMapUv:me&&E(S.anisotropyMap.channel),clearcoatMapUv:Se&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:St&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&E(S.sheenRoughnessMap.channel),specularMapUv:At&&E(S.specularMap.channel),specularColorMapUv:ot&&E(S.specularColorMap.channel),specularIntensityMapUv:kt&&E(S.specularIntensityMap.channel),transmissionMapUv:U&&E(S.transmissionMap.channel),thicknessMapUv:ue&&E(S.thicknessMap.channel),alphaMapUv:j&&E(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(_t||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&($t||j),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ye,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:dt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qt,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:Vt&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wt,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:nt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&S.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mn.vertexUv1s=c.has(1),mn.vertexUv2s=c.has(2),mn.vertexUv3s=c.has(3),c.clear(),mn}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let z=ri[A];P=cr.clone(z.uniforms)}else P=S.uniforms;return P}function D(S,A){let P;for(let z=0,k=h.length;z<k;z++){let q=h[z];if(q.cacheKey===A){P=q,++P.usedTimes;break}}return P===void 0&&(P=new t2(n,A,S,r),h.push(P)),P}function w(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:C}}function s2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function r2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ad(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,E,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),e++,p}function a(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||r2),i.length>1&&i.sort(u||_d),s.length>1&&s.sort(u||_d)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function o2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ad,n.set(i,[o])):s>=r.length?(o=new Ad,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function a2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new de};break;case"SpotLight":t={position:new I,direction:new I,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function l2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var c2=0;function h2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function d2(n){let e=new a2,t=l2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Bt,o=new Bt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,v=0,_=0,y=0,D=0,w=0,b=0;c.sort(h2);for(let S=0,A=c.length;S<A;S++){let P=c[S],z=P.color,k=P.intensity,q=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],k);b++}else if(P.isDirectionalLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let oe=P.shadow,Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=ee,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=$,f++}else if(P.isSpotLight){let $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(z).multiplyScalar(k),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[E]=$;let oe=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,oe.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[E]=oe.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,i.spotShadow[E]=Z,i.spotShadowMap[E]=ee,y++}E++}else if(P.isRectAreaLight){let $=e.get(P);$.color.copy(z).multiplyScalar(k),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=$,m++}else if(P.isPointLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let oe=P.shadow,Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,Z.shadowCameraNear=oe.camera.near,Z.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=$,g++}else if(P.isHemisphereLight){let $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(k),$.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==E||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==_||C.numSpotShadows!==y||C.numSpotMaps!==D||C.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+D-w,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,C.directionalLength=f,C.pointLength=g,C.spotLength=E,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=_,C.numSpotShadows=y,C.numSpotMaps=D,C.numLightProbes=b,i.version=c2++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Md(n){let e=new d2(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function u2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Md(n),e.set(s,[a])):r>=o.length?(a=new Md(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ji=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oc=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p2=`uniform sampler2D shadow_pass;
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
}`;function m2(n,e,t){let i=new zr,s=new ce,r=new ce,o=new Nt,a=new Ji({depthPacking:lr}),l=new oc,c={},h=t.maxTextureSize,d={[qi]:ln,[ln]:qi,[wt]:wt},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:f2,fragmentShader:p2}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new W(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let p=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ci),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==Si&&this.type===Si,q=p===Si&&this.type!==Si;for(let ee=0,$=w.length;ee<$;ee++){let oe=w[ee],Z=oe.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let fe=Z.getFrameExtents();if(s.multiply(fe),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,Z.mapSize.y=r.y)),Z.map===null||k===!0||q===!0){let ze=this.type!==Si?{minFilter:On,magFilter:On}:{};Z.map!==null&&Z.map.dispose(),Z.map=new hn(s.x,s.y,ze),Z.map.texture.name=oe.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let Me=Z.getViewportCount();for(let ze=0;ze<Me;ze++){let dt=Z.getViewport(ze);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),z.viewport(o),Z.updateMatrices(oe,ze),i=Z.getFrustum(),y(b,C,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===Si&&v(Z,C),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(w,b){let C=e.update(E);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,C,u,E,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,C,f,E,null)}function _(w,b,C,S){let A=null,P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)A=P;else if(A=C.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let z=A.uuid,k=b.uuid,q=c[z];q===void 0&&(q={},c[z]=q);let ee=q[k];ee===void 0&&(ee=A.clone(),q[k]=ee,b.addEventListener("dispose",D)),A=ee}if(A.visible=b.visible,A.wireframe=b.wireframe,S===Si?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,C.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=n.properties.get(A);z.light=C}return A}function y(w,b,C,S,A){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===Si)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let k=e.update(w),q=w.material;if(Array.isArray(q)){let ee=k.groups;for(let $=0,oe=ee.length;$<oe;$++){let Z=ee[$],fe=q[Z.materialIndex];if(fe&&fe.visible){let Me=_(w,fe,S,A);w.onBeforeShadow(n,w,b,C,k,Me,Z),n.renderBufferDirect(C,null,k,Me,w,Z),w.onAfterShadow(n,w,b,C,k,Me,Z)}}}else if(q.visible){let ee=_(w,q,S,A);w.onBeforeShadow(n,w,b,C,k,ee,null),n.renderBufferDirect(C,null,k,ee,w,null),w.onAfterShadow(n,w,b,C,k,ee,null)}}let z=w.children;for(let k=0,q=z.length;k<q;k++)y(z[k],b,C,S,A)}function D(w){w.target.removeEventListener("dispose",D);for(let C in c){let S=c[C],A=w.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var g2={[dl]:ul,[fl]:gl,[pl]:El,[Ys]:ml,[ul]:dl,[gl]:fl,[El]:pl,[ml]:Ys};function E2(n,e){function t(){let U=!1,ue=new Nt,Y=null,j=new Nt(0,0,0,0);return{setMask:function(ye){Y!==ye&&!U&&(n.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){U=ye},setClear:function(ye,ge,nt,Qt,mn){mn===!0&&(ye*=Qt,ge*=Qt,nt*=Qt),ue.set(ye,ge,nt,Qt),j.equals(ue)===!1&&(n.clearColor(ye,ge,nt,Qt),j.copy(ue))},reset:function(){U=!1,Y=null,j.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,Y=null,j=null,ye=null;return{setReversed:function(ge){if(ue!==ge){let nt=e.get("EXT_clip_control");ue?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);let Qt=ye;ye=null,this.setClear(Qt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?pe(n.DEPTH_TEST):Ye(n.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!U&&(n.depthMask(ge),Y=ge)},setFunc:function(ge){if(ue&&(ge=g2[ge]),j!==ge){switch(ge){case dl:n.depthFunc(n.NEVER);break;case ul:n.depthFunc(n.ALWAYS);break;case fl:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case pl:n.depthFunc(n.EQUAL);break;case ml:n.depthFunc(n.GEQUAL);break;case gl:n.depthFunc(n.GREATER);break;case El:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ge}},setLocked:function(ge){U=ge},setClear:function(ge){ye!==ge&&(ue&&(ge=1-ge),n.clearDepth(ge),ye=ge)},reset:function(){U=!1,Y=null,j=null,ye=null,ue=!1}}}function s(){let U=!1,ue=null,Y=null,j=null,ye=null,ge=null,nt=null,Qt=null,mn=null;return{setTest:function(Dt){U||(Dt?pe(n.STENCIL_TEST):Ye(n.STENCIL_TEST))},setMask:function(Dt){ue!==Dt&&!U&&(n.stencilMask(Dt),ue=Dt)},setFunc:function(Dt,Xn,gi){(Y!==Dt||j!==Xn||ye!==gi)&&(n.stencilFunc(Dt,Xn,gi),Y=Dt,j=Xn,ye=gi)},setOp:function(Dt,Xn,gi){(ge!==Dt||nt!==Xn||Qt!==gi)&&(n.stencilOp(Dt,Xn,gi),ge=Dt,nt=Xn,Qt=gi)},setLocked:function(Dt){U=Dt},setClear:function(Dt){mn!==Dt&&(n.clearStencil(Dt),mn=Dt)},reset:function(){U=!1,ue=null,Y=null,j=null,ye=null,ge=null,nt=null,Qt=null,mn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,w=null,b=new de(0,0,0),C=0,S=!1,A=null,P=null,z=null,k=null,q=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,oe=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=oe>=2);let fe=null,Me={},ze=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),Ht=new Nt().fromArray(ze),Q=new Nt().fromArray(dt);function ae(U,ue,Y,j){let ye=new Uint8Array(4),ge=n.createTexture();n.bindTexture(U,ge),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<Y;nt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(ue+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return ge}let Le={};Le[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(Ys),vt(!1),_t(Th),pe(n.CULL_FACE),H(ci);function pe(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Ye(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function tt(U,ue){return d[U]!==ue?(n.bindFramebuffer(U,ue),d[U]=ue,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ut(U,ue){let Y=f,j=!1;if(U){Y=u.get(ue),Y===void 0&&(Y=[],u.set(ue,Y));let ye=U.textures;if(Y.length!==ye.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,nt=ye.length;ge<nt;ge++)Y[ge]=n.COLOR_ATTACHMENT0+ge;Y.length=ye.length,j=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,j=!0);j&&n.drawBuffers(Y)}function $t(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let Mt={[hs]:n.FUNC_ADD,[Yu]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};Mt[$u]=n.MIN,Mt[Ju]=n.MAX;let Kt={[Qu]:n.ZERO,[Ku]:n.ONE,[ju]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[of]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[ef]:n.ONE_MINUS_SRC_COLOR,[hl]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[nf]:n.ONE_MINUS_DST_ALPHA,[af]:n.CONSTANT_COLOR,[lf]:n.ONE_MINUS_CONSTANT_COLOR,[cf]:n.CONSTANT_ALPHA,[hf]:n.ONE_MINUS_CONSTANT_ALPHA};function H(U,ue,Y,j,ye,ge,nt,Qt,mn,Dt){if(U===ci){E===!0&&(Ye(n.BLEND),E=!1);return}if(E===!1&&(pe(n.BLEND),E=!0),U!==qu){if(U!==m||Dt!==S){if((p!==hs||y!==hs)&&(n.blendEquation(n.FUNC_ADD),p=hs,y=hs),Dt)switch(U){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.ONE,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,_=null,D=null,w=null,b.set(0,0,0),C=0,m=U,S=Dt}return}ye=ye||ue,ge=ge||Y,nt=nt||j,(ue!==p||ye!==y)&&(n.blendEquationSeparate(Mt[ue],Mt[ye]),p=ue,y=ye),(Y!==v||j!==_||ge!==D||nt!==w)&&(n.blendFuncSeparate(Kt[Y],Kt[j],Kt[ge],Kt[nt]),v=Y,_=j,D=ge,w=nt),(Qt.equals(b)===!1||mn!==C)&&(n.blendColor(Qt.r,Qt.g,Qt.b,mn),b.copy(Qt),C=mn),m=U,S=!1}function kn(U,ue){U.side===wt?Ye(n.CULL_FACE):pe(n.CULL_FACE);let Y=U.side===ln;ue&&(Y=!Y),vt(Y),U.blending===Wi&&U.transparent===!1?H(ci):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function vt(U){A!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),A=U)}function _t(U){U!==Wu?(pe(n.CULL_FACE),U!==P&&(U===Th?n.cullFace(n.BACK):U===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ye(n.CULL_FACE),P=U}function We(U){U!==z&&($&&n.lineWidth(U),z=U)}function Vt(U,ue,Y){U?(pe(n.POLYGON_OFFSET_FILL),(k!==ue||q!==Y)&&(n.polygonOffset(ue,Y),k=ue,q=Y)):Ye(n.POLYGON_OFFSET_FILL)}function Ve(U){U?pe(n.SCISSOR_TEST):Ye(n.SCISSOR_TEST)}function T(U){U===void 0&&(U=n.TEXTURE0+ee-1),fe!==U&&(n.activeTexture(U),fe=U)}function M(U,ue,Y){Y===void 0&&(fe===null?Y=n.TEXTURE0+ee-1:Y=fe);let j=Me[Y];j===void 0&&(j={type:void 0,texture:void 0},Me[Y]=j),(j.type!==U||j.texture!==ue)&&(fe!==Y&&(n.activeTexture(Y),fe=Y),n.bindTexture(U,ue||Le[U]),j.type=U,j.texture=ue)}function G(){let U=Me[fe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(U){Ht.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ht.copy(U))}function be(U){Q.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function At(U,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let j=Y.get(U);j===void 0&&(j=n.getUniformBlockIndex(ue,U.name),Y.set(U,j))}function ot(U,ue){let j=c.get(ue).get(U);l.get(ue)!==j&&(n.uniformBlockBinding(ue,j,U.__bindingPointIndex),l.set(ue,j))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,Me={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,w=null,b=new de(0,0,0),C=0,S=!1,A=null,P=null,z=null,k=null,q=null,Ht.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ye,bindFramebuffer:tt,drawBuffers:ut,useProgram:$t,setBlending:H,setMaterial:kn,setFlipSided:vt,setCullFace:_t,setLineWidth:We,setPolygonOffset:Vt,setScissorTest:Ve,activeTexture:T,bindTexture:M,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:xe,texImage3D:qe,updateUBOMapping:At,uniformBlockBinding:ot,texStorage2D:St,texStorage3D:se,texSubImage2D:J,texSubImage3D:Ne,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:$e,viewport:be,reset:kt}}function Sd(n,e,t,i){let s=y2(i);switch(t){case kd:return n*e;case Vd:return n*e;case Wd:return n*e*2;case Hc:return n*e/s.components*s.byteLength;case zc:return n*e/s.components*s.byteLength;case Xd:return n*e*2/s.components*s.byteLength;case kc:return n*e*2/s.components*s.byteLength;case Gd:return n*e*3/s.components*s.byteLength;case Jn:return n*e*4/s.components*s.byteLength;case Gc:return n*e*4/s.components*s.byteLength;case Po:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:case xl:return Math.max(n,16)*Math.max(e,8)/4;case Al:case Sl:return Math.max(n,8)*Math.max(e,8)/2;case bl:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uo:case Gl:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qd:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y2(n){switch(n){case wi:case Od:return{byteLength:1,components:1};case Hr:case Hd:case Cn:return{byteLength:2,components:1};case Bc:case Oc:return{byteLength:2,components:4};case Ri:case Nc:case li:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function v2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):Ho("canvas")}function E(T,M,G){let K=1,te=Ve(T);if((te.width>G||te.height>G)&&(K=G/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let J=Math.floor(K*te.width),Ne=Math.floor(K*te.height);d===void 0&&(d=g(J,Ne));let me=M?g(J,Ne):d;return me.width=J,me.height=Ne,me.getContext("2d").drawImage(T,0,0,J,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ne+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(T,M,G,K,te=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=M;if(M===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),M===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let Ne=te?oa:xt.getTransfer(K);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Ne===Lt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(T,M){let G;return T?M===null||M===Ri||M===Js?G=n.DEPTH24_STENCIL8:M===li?G=n.DEPTH32F_STENCIL8:M===Hr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===Js?G=n.DEPTH_COMPONENT24:M===li?G=n.DEPTH_COMPONENT32F:M===Hr&&(G=n.DEPTH_COMPONENT16),G}function D(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==On&&T.minFilter!==ai?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){let M=T.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&h.delete(M)}function b(T){let M=T.target;M.removeEventListener("dispose",b),A(M)}function C(T){let M=i.get(T);if(M.__webglInit===void 0)return;let G=T.source,K=u.get(G);if(K){let te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(T),Object.keys(K).length===0&&u.delete(G)}i.remove(T)}function S(T){let M=i.get(T);n.deleteTexture(M.__webglTexture);let G=T.source,K=u.get(G);delete K[M.__cacheKey],o.memory.textures--}function A(T){let M=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[K][te]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=T.textures;for(let K=0,te=G.length;K<te;K++){let J=i.get(G[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[K])}i.remove(T)}let P=0;function z(){P=0}function k(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function q(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function ee(T,M){let G=i.get(T);if(T.isVideoTexture&&We(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,T,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function $(T,M){let G=i.get(T);if(T.version>0&&G.__version!==T.version){Q(G,T,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function oe(T,M){let G=i.get(T);if(T.version>0&&G.__version!==T.version){Q(G,T,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function Z(T,M){let G=i.get(T);if(T.version>0&&G.__version!==T.version){ae(G,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}let fe={[vn]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},Me={[On]:n.NEAREST,[_f]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[ai]:n.LINEAR,[wa]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},ze={[Sf]:n.NEVER,[Cf]:n.ALWAYS,[xf]:n.LESS,[Zd]:n.LEQUAL,[bf]:n.EQUAL,[Rf]:n.GEQUAL,[Tf]:n.GREATER,[wf]:n.NOTEQUAL};function dt(T,M){if(M.type===li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ai||M.magFilter===wa||M.magFilter===to||M.magFilter===fs||M.minFilter===ai||M.minFilter===wa||M.minFilter===to||M.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,fe[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,fe[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,fe[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Me[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==to&&M.minFilter!==fs||M.type===li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ht(T,M){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));let K=M.source,te=u.get(K);te===void 0&&(te={},u.set(K,te));let J=q(M);if(J!==T.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[J].usedTimes++;let Ne=te[T.__cacheKey];Ne!==void 0&&(te[T.__cacheKey].usedTimes--,Ne.usedTimes===0&&S(M)),T.__cacheKey=J,T.__webglTexture=te[J].texture}return G}function Q(T,M,G){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let te=Ht(T,M),J=M.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+G);let Ne=i.get(J);if(J.version!==Ne.__version||te===!0){t.activeTexture(n.TEXTURE0+G);let me=xt.getPrimaries(xt.workingColorSpace),Se=M.colorSpace===Gi?null:xt.getPrimaries(M.colorSpace),St=M.colorSpace===Gi||me===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let se=E(M.image,!1,s.maxTextureSize);se=Vt(M,se);let xe=r.convert(M.format,M.colorSpace),qe=r.convert(M.type),$e=_(M.internalFormat,xe,qe,M.colorSpace,M.isVideoTexture);dt(K,M);let be,At=M.mipmaps,ot=M.isVideoTexture!==!0,kt=Ne.__version===void 0||te===!0,U=J.dataReady,ue=D(M,se);if(M.isDepthTexture)$e=y(M.format===Qs,M.type),kt&&(ot?t.texStorage2D(n.TEXTURE_2D,1,$e,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,$e,se.width,se.height,0,xe,qe,null));else if(M.isDataTexture)if(At.length>0){ot&&kt&&t.texStorage2D(n.TEXTURE_2D,ue,$e,At[0].width,At[0].height);for(let Y=0,j=At.length;Y<j;Y++)be=At[Y],ot?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,be.width,be.height,xe,qe,be.data):t.texImage2D(n.TEXTURE_2D,Y,$e,be.width,be.height,0,xe,qe,be.data);M.generateMipmaps=!1}else ot?(kt&&t.texStorage2D(n.TEXTURE_2D,ue,$e,se.width,se.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,xe,qe,se.data)):t.texImage2D(n.TEXTURE_2D,0,$e,se.width,se.height,0,xe,qe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ot&&kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,$e,At[0].width,At[0].height,se.depth);for(let Y=0,j=At.length;Y<j;Y++)if(be=At[Y],M.format!==Jn)if(xe!==null)if(ot){if(U)if(M.layerUpdates.size>0){let ye=Sd(be.width,be.height,M.format,M.type);for(let ge of M.layerUpdates){let nt=be.data.subarray(ge*ye/be.data.BYTES_PER_ELEMENT,(ge+1)*ye/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ge,be.width,be.height,1,xe,nt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,be.width,be.height,se.depth,xe,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,$e,be.width,be.height,se.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,be.width,be.height,se.depth,xe,qe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,$e,be.width,be.height,se.depth,0,xe,qe,be.data)}else{ot&&kt&&t.texStorage2D(n.TEXTURE_2D,ue,$e,At[0].width,At[0].height);for(let Y=0,j=At.length;Y<j;Y++)be=At[Y],M.format!==Jn?xe!==null?ot?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,$e,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,be.width,be.height,xe,qe,be.data):t.texImage2D(n.TEXTURE_2D,Y,$e,be.width,be.height,0,xe,qe,be.data)}else if(M.isDataArrayTexture)if(ot){if(kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,$e,se.width,se.height,se.depth),U)if(M.layerUpdates.size>0){let Y=Sd(se.width,se.height,M.format,M.type);for(let j of M.layerUpdates){let ye=se.data.subarray(j*Y/se.data.BYTES_PER_ELEMENT,(j+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,xe,qe,ye)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,qe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,se.width,se.height,se.depth,0,xe,qe,se.data);else if(M.isData3DTexture)ot?(kt&&t.texStorage3D(n.TEXTURE_3D,ue,$e,se.width,se.height,se.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,qe,se.data)):t.texImage3D(n.TEXTURE_3D,0,$e,se.width,se.height,se.depth,0,xe,qe,se.data);else if(M.isFramebufferTexture){if(kt)if(ot)t.texStorage2D(n.TEXTURE_2D,ue,$e,se.width,se.height);else{let Y=se.width,j=se.height;for(let ye=0;ye<ue;ye++)t.texImage2D(n.TEXTURE_2D,ye,$e,Y,j,0,xe,qe,null),Y>>=1,j>>=1}}else if(At.length>0){if(ot&&kt){let Y=Ve(At[0]);t.texStorage2D(n.TEXTURE_2D,ue,$e,Y.width,Y.height)}for(let Y=0,j=At.length;Y<j;Y++)be=At[Y],ot?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe,qe,be):t.texImage2D(n.TEXTURE_2D,Y,$e,xe,qe,be);M.generateMipmaps=!1}else if(ot){if(kt){let Y=Ve(se);t.texStorage2D(n.TEXTURE_2D,ue,$e,Y.width,Y.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,qe,se)}else t.texImage2D(n.TEXTURE_2D,0,$e,xe,qe,se);m(M)&&p(K),Ne.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ae(T,M,G){if(M.image.length!==6)return;let K=Ht(T,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);let J=i.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+G);let Ne=xt.getPrimaries(xt.workingColorSpace),me=M.colorSpace===Gi?null:xt.getPrimaries(M.colorSpace),Se=M.colorSpace===Gi||Ne===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let St=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let j=0;j<6;j++)!St&&!se?xe[j]=E(M.image[j],!0,s.maxCubemapSize):xe[j]=se?M.image[j].image:M.image[j],xe[j]=Vt(M,xe[j]);let qe=xe[0],$e=r.convert(M.format,M.colorSpace),be=r.convert(M.type),At=_(M.internalFormat,$e,be,M.colorSpace),ot=M.isVideoTexture!==!0,kt=J.__version===void 0||K===!0,U=te.dataReady,ue=D(M,qe);dt(n.TEXTURE_CUBE_MAP,M);let Y;if(St){ot&&kt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,At,qe.width,qe.height);for(let j=0;j<6;j++){Y=xe[j].mipmaps;for(let ye=0;ye<Y.length;ye++){let ge=Y[ye];M.format!==Jn?$e!==null?ot?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,ge.width,ge.height,$e,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,At,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,ge.width,ge.height,$e,be,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,At,ge.width,ge.height,0,$e,be,ge.data)}}}else{if(Y=M.mipmaps,ot&&kt){Y.length>0&&ue++;let j=Ve(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,At,j.width,j.height)}for(let j=0;j<6;j++)if(se){ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe[j].width,xe[j].height,$e,be,xe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,At,xe[j].width,xe[j].height,0,$e,be,xe[j].data);for(let ye=0;ye<Y.length;ye++){let nt=Y[ye].image[j].image;ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,nt.width,nt.height,$e,be,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,At,nt.width,nt.height,0,$e,be,nt.data)}}else{ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,$e,be,xe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,At,$e,be,xe[j]);for(let ye=0;ye<Y.length;ye++){let ge=Y[ye];ot?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,$e,be,ge.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,At,$e,be,ge.image[j])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Le(T,M,G,K,te,J){let Ne=r.convert(G.format,G.colorSpace),me=r.convert(G.type),Se=_(G.internalFormat,Ne,me,G.colorSpace),St=i.get(M),se=i.get(G);if(se.__renderTarget=M,!St.__hasExternalTextures){let xe=Math.max(1,M.width>>J),qe=Math.max(1,M.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Se,xe,qe,M.depth,0,Ne,me,null):t.texImage2D(te,J,Se,xe,qe,0,Ne,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),_t(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,se.__webglTexture,0,vt(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,se.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(T,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){let K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=y(M.stencilBuffer,te),Ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=vt(M);_t(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,T)}else{let K=M.textures;for(let te=0;te<K.length;te++){let J=K[te],Ne=r.convert(J.format,J.colorSpace),me=r.convert(J.type),Se=_(J.internalFormat,Ne,me,J.colorSpace),St=vt(M);G&&_t(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Se,M.width,M.height):_t(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,Se,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Se,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let te=K.__webglTexture,J=vt(M);if(M.depthTexture.format===Ws)_t(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===Qs)_t(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function tt(T){let M=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ye(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),pe(M.__webglDepthbuffer[K],T,!1);else{let te=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),pe(M.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(T,M,G){let K=i.get(T);M!==void 0&&Le(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&tt(T)}function $t(T){let M=T.texture,G=i.get(T),K=i.get(M);T.addEventListener("dispose",b);let te=T.textures,J=T.isWebGLCubeRenderTarget===!0,Ne=te.length>1;if(Ne||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Se=0;Se<M.mipmaps.length;Se++)G.__webglFramebuffer[me][Se]=n.createFramebuffer()}else G.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)G.__webglFramebuffer[me]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let me=0,Se=te.length;me<Se;me++){let St=i.get(te[me]);St.__webglTexture===void 0&&(St.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&_t(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){let Se=te[me];G.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[me]);let St=r.convert(Se.format,Se.colorSpace),se=r.convert(Se.type),xe=_(Se.internalFormat,St,se,Se.colorSpace,T.isXRRenderTarget===!0),qe=vt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,G.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),dt(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Le(G.__webglFramebuffer[me][Se],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else Le(G.__webglFramebuffer[me],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let me=0,Se=te.length;me<Se;me++){let St=te[me],se=i.get(St);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),dt(n.TEXTURE_2D,St),Le(G.__webglFramebuffer,T,St,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(St)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),dt(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Le(G.__webglFramebuffer[Se],T,M,n.COLOR_ATTACHMENT0,me,Se);else Le(G.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,me,0);m(M)&&p(me),t.unbindTexture()}T.depthBuffer&&tt(T)}function Mt(T){let M=T.textures;for(let G=0,K=M.length;G<K;G++){let te=M[G];if(m(te)){let J=v(T),Ne=i.get(te).__webglTexture;t.bindTexture(J,Ne),p(J),t.unbindTexture()}}}let Kt=[],H=[];function kn(T){if(T.samples>0){if(_t(T)===!1){let M=T.textures,G=T.width,K=T.height,te=n.COLOR_BUFFER_BIT,J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(T),me=M.length>1;if(me)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Se]);let St=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,St,0)}n.blitFramebuffer(0,0,G,K,0,0,G,K,te,n.NEAREST),l===!0&&(Kt.length=0,H.length=0,Kt.push(n.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Kt.push(J),H.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Kt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Se]);let St=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,St,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function vt(T){return Math.min(s.maxSamples,T.samples)}function _t(T){let M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function We(T){let M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Vt(T,M){let G=T.colorSpace,K=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==Qi&&G!==Gi&&(xt.getTransfer(G)===Lt?(K!==Jn||te!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=$,this.setTexture3D=oe,this.setTextureCube=Z,this.rebindTextures=ut,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=_t}function _2(n,e){function t(i,s=Gi){let r,o=xt.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===Bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Od)return n.BYTE;if(i===Hd)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===Nc)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===kd)return n.ALPHA;if(i===Gd)return n.RGB;if(i===Jn)return n.RGBA;if(i===Vd)return n.LUMINANCE;if(i===Wd)return n.LUMINANCE_ALPHA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Qs)return n.DEPTH_STENCIL;if(i===Hc)return n.RED;if(i===zc)return n.RED_INTEGER;if(i===Xd)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Po||i===Io||i===Do||i===Lo)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===Ml||i===Sl||i===xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===Tl||i===wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===Tl)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rl||i===Cl||i===Fl||i===Pl||i===Il||i===Dl||i===Ll||i===Ul||i===Nl||i===Bl||i===Ol||i===Hl||i===zl||i===kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ul)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uo||i===Gl||i===Vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Uo)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qd||i===Wl||i===Xl||i===ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ac=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},A2={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},M2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S2=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new wn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new dn({vertexShader:M2,fragmentShader:S2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Ie(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends Yi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new lc,m=t.getContextAttributes(),p=null,v=null,_=[],y=[],D=new ce,w=null,b=new fn;b.viewport=new Nt;let C=new fn;C.viewport=new Nt;let S=[b,C],A=new ac,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Nr,_[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Nr,_[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Nr,_[Q]=ae),ae.getHandSpace()};function k(Q){let ae=y.indexOf(Q.inputSource);if(ae===-1)return;let Le=_[ae];Le!==void 0&&(Le.update(Q.inputSource,Q.frame,c||o),Le.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<_.length;Q++){let ae=y[Q];ae!==null&&(y[Q]=null,_[Q].disconnect(ae))}P=null,z=null,E.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,Ht.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new hn(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Le=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Qs:Ws,Le=m.stencil?Js:Ri);let Ye={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ye),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new hn(u.textureWidth,u.textureHeight,{format:Jn,type:wi,depthTexture:new er(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(Q){for(let ae=0;ae<Q.removed.length;ae++){let Le=Q.removed[ae],pe=y.indexOf(Le);pe>=0&&(y[pe]=null,_[pe].disconnect(Le))}for(let ae=0;ae<Q.added.length;ae++){let Le=Q.added[ae],pe=y.indexOf(Le);if(pe===-1){for(let tt=0;tt<_.length;tt++)if(tt>=y.length){y.push(Le),pe=tt;break}else if(y[tt]===null){y[tt]=Le,pe=tt;break}if(pe===-1)break}let Ye=_[pe];Ye&&Ye.connect(Le)}}let $=new I,oe=new I;function Z(Q,ae,Le){$.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Le.matrixWorld);let pe=$.distanceTo(oe),Ye=ae.projectionMatrix.elements,tt=Le.projectionMatrix.elements,ut=Ye[14]/(Ye[10]-1),$t=Ye[14]/(Ye[10]+1),Mt=(Ye[9]+1)/Ye[5],Kt=(Ye[9]-1)/Ye[5],H=(Ye[8]-1)/Ye[0],kn=(tt[8]+1)/tt[0],vt=ut*H,_t=ut*kn,We=pe/(-H+kn),Vt=We*-H;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Vt),Q.translateZ(We),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ye[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Ve=ut+We,T=$t+We,M=vt-Vt,G=_t+(pe-Vt),K=Mt*$t/T*Ve,te=Kt*$t/T*Ve;Q.projectionMatrix.makePerspective(M,G,K,te,Ve,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,Le=Q.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Le=E.depthFar)),A.near=C.near=b.near=ae,A.far=C.far=b.far=Le,(P!==A.near||z!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,z=A.far),b.layers.mask=Q.layers.mask|2,C.layers.mask=Q.layers.mask|4,A.layers.mask=b.layers.mask|C.layers.mask;let pe=Q.parent,Ye=A.cameras;fe(A,pe);for(let tt=0;tt<Ye.length;tt++)fe(Ye[tt],pe);Ye.length===2?Z(A,b,C):A.projectionMatrix.copy(b.projectionMatrix),Me(Q,A,pe)};function Me(Q,ae,Le){Le===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Le.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Oo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let ze=null;function dt(Q,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Le=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let pe=!1;Le.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let tt=0;tt<Le.length;tt++){let ut=Le[tt],$t=null;if(f!==null)$t=f.getViewport(ut);else{let Kt=d.getViewSubImage(u,ut);$t=Kt.viewport,tt===0&&(e.setRenderTargetTextures(v,Kt.colorTexture,u.ignoreDepthValues?void 0:Kt.depthStencilTexture),e.setRenderTarget(v))}let Mt=S[tt];Mt===void 0&&(Mt=new fn,Mt.layers.enable(tt),Mt.viewport=new Nt,S[tt]=Mt),Mt.matrix.fromArray(ut.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(ut.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set($t.x,$t.y,$t.width,$t.height),tt===0&&(A.matrix.copy(Mt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(Mt)}let Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")){let tt=d.getDepthInformation(Le[0]);tt&&tt.isValid&&tt.texture&&E.init(e,tt,s.renderState)}}for(let Le=0;Le<_.length;Le++){let pe=y[Le],Ye=_[Le];pe!==null&&Ye!==void 0&&Ye.update(pe,ae,c||o)}ze&&ze(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Ht=new Kd;Ht.setAnimationLoop(dt),this.setAnimationLoop=function(Q){ze=Q},this.dispose=function(){}}},ls=new di,x2=new Bt;function b2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,ls.copy(y),ls.x*=-1,ls.y*=-1,ls.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(ls)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=_.program;i.updateUBOMapping(v,D);let w=e.render.frame;r[v.id]!==w&&(u(v),r[v.id]=w)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),D=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,b=y.length;w<b;w++){let C=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,A=C.length;S<A;S++){let P=C[S];if(f(P,w,S,D)===!0){let z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],q=0;for(let ee=0;ee<k.length;ee++){let $=k[ee],oe=E($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,z+q,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,q),q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,y,D){let w=v.value,b=_+"_"+y;if(D[b]===void 0)return typeof w=="number"||typeof w=="boolean"?D[b]=w:D[b]=w.clone(),!0;{let C=D[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return D[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(v){let _=v.uniforms,y=0,D=16;for(let b=0,C=_.length;b<C;b++){let S=Array.isArray(_[b])?_[b]:[_[b]];for(let A=0,P=S.length;A<P;A++){let z=S[A],k=Array.isArray(z.value)?z.value:[z.value];for(let q=0,ee=k.length;q<ee;q++){let $=k[q],oe=E($),Z=y%D,fe=Z%oe.boundary,Me=Z+fe;y+=fe,Me!==0&&D-Me<oe.storage&&(y+=D-Me),z.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=oe.storage}}}let w=y%D;return w>0&&(y+=D-w),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var $o=class{constructor(e={}){let{canvas:t=Pf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=hi,this.toneMappingExposure=1;let y=this,D=!1,w=0,b=0,C=null,S=-1,A=null,P=new Nt,z=new Nt,k=null,q=new de(0),ee=0,$=t.width,oe=t.height,Z=1,fe=null,Me=null,ze=new Nt(0,0,$,oe),dt=new Nt(0,0,$,oe),Ht=!1,Q=new zr,ae=!1,Le=!1,pe=new Bt,Ye=new Bt,tt=new I,ut=new Nt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function Kt(){return C===null?Z:1}let H=i;function kn(x,B){return t.getContext(x,B)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),H===null){let B="webgl2";if(H=kn(B,x),H===null)throw kn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let vt,_t,We,Vt,Ve,T,M,G,K,te,J,Ne,me,Se,St,se,xe,qe,$e,be,At,ot,kt,U;function ue(){vt=new Gm(H),vt.init(),ot=new _2(H,vt),_t=new Nm(H,vt,e,ot),We=new E2(H,vt),_t.reverseDepthBuffer&&u&&We.buffers.depth.setReversed(!0),Vt=new Xm(H),Ve=new s2,T=new v2(H,vt,We,Ve,_t,ot,Vt),M=new Om(y),G=new km(y),K=new Kf(H),kt=new Lm(H,K),te=new Vm(H,K,Vt,kt),J=new Ym(H,te,K,Vt),$e=new qm(H,_t,T),se=new Bm(Ve),Ne=new i2(y,M,G,vt,_t,kt,se),me=new b2(y,Ve),Se=new o2,St=new u2(vt),qe=new Dm(y,M,G,We,J,f,l),xe=new m2(y,J,_t),U=new T2(H,Vt,_t,We),be=new Um(H,vt,Vt),At=new Wm(H,vt,Vt),Vt.programs=Ne.programs,y.capabilities=_t,y.extensions=vt,y.properties=Ve,y.renderLists=Se,y.shadowMap=xe,y.state=We,y.info=Vt}ue();let Y=new cc(y,H);this.xr=Y,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let x=vt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=vt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(x){x!==void 0&&(Z=x,this.setSize($,oe,!1))},this.getSize=function(x){return x.set($,oe)},this.setSize=function(x,B,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=x,oe=B,t.width=Math.floor(x*Z),t.height=Math.floor(B*Z),V===!0&&(t.style.width=x+"px",t.style.height=B+"px"),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set($*Z,oe*Z).floor()},this.setDrawingBufferSize=function(x,B,V){$=x,oe=B,Z=V,t.width=Math.floor(x*V),t.height=Math.floor(B*V),this.setViewport(0,0,x,B)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(ze)},this.setViewport=function(x,B,V,X){x.isVector4?ze.set(x.x,x.y,x.z,x.w):ze.set(x,B,V,X),We.viewport(P.copy(ze).multiplyScalar(Z).round())},this.getScissor=function(x){return x.copy(dt)},this.setScissor=function(x,B,V,X){x.isVector4?dt.set(x.x,x.y,x.z,x.w):dt.set(x,B,V,X),We.scissor(z.copy(dt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(x){We.setScissorTest(Ht=x)},this.setOpaqueSort=function(x){fe=x},this.setTransparentSort=function(x){Me=x},this.getClearColor=function(x){return x.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(x=!0,B=!0,V=!0){let X=0;if(x){let O=!1;if(C!==null){let re=C.texture.format;O=re===Gc||re===kc||re===zc}if(O){let re=C.texture.type,Ee=re===wi||re===Ri||re===Hr||re===Js||re===Bc||re===Oc,Ce=qe.getClearColor(),Fe=qe.getClearAlpha(),Je=Ce.r,it=Ce.g,Pe=Ce.b;Ee?(g[0]=Je,g[1]=it,g[2]=Pe,g[3]=Fe,H.clearBufferuiv(H.COLOR,0,g)):(E[0]=Je,E[1]=it,E[2]=Pe,E[3]=Fe,H.clearBufferiv(H.COLOR,0,E))}else X|=H.COLOR_BUFFER_BIT}B&&(X|=H.DEPTH_BUFFER_BIT),V&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Se.dispose(),St.dispose(),Ve.dispose(),M.dispose(),G.dispose(),J.dispose(),kt.dispose(),U.dispose(),Ne.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",yh),Y.removeEventListener("sessionend",vh),ns.stop()};function j(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let x=Vt.autoReset,B=xe.enabled,V=xe.autoUpdate,X=xe.needsUpdate,O=xe.type;ue(),Vt.autoReset=x,xe.enabled=B,xe.autoUpdate=V,xe.needsUpdate=X,xe.type=O}function ge(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function nt(x){let B=x.target;B.removeEventListener("dispose",nt),Qt(B)}function Qt(x){mn(x),Ve.remove(x)}function mn(x){let B=Ve.get(x).programs;B!==void 0&&(B.forEach(function(V){Ne.releaseProgram(V)}),x.isShaderMaterial&&Ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,V,X,O,re){B===null&&(B=$t);let Ee=O.isMesh&&O.matrixWorld.determinant()<0,Ce=ku(x,B,V,X,O);We.setMaterial(X,Ee);let Fe=V.index,Je=1;if(X.wireframe===!0){if(Fe=te.getWireframeAttribute(V),Fe===void 0)return;Je=2}let it=V.drawRange,Pe=V.attributes.position,Tt=it.start*Je,Gt=(it.start+it.count)*Je;re!==null&&(Tt=Math.max(Tt,re.start*Je),Gt=Math.min(Gt,(re.start+re.count)*Je)),Fe!==null?(Tt=Math.max(Tt,0),Gt=Math.min(Gt,Fe.count)):Pe!=null&&(Tt=Math.max(Tt,0),Gt=Math.min(Gt,Pe.count));let Wt=Gt-Tt;if(Wt<0||Wt===1/0)return;kt.setup(O,X,Ce,V,Fe);let bn,Pt=be;if(Fe!==null&&(bn=K.get(Fe),Pt=At,Pt.setIndex(bn)),O.isMesh)X.wireframe===!0?(We.setLineWidth(X.wireframeLinewidth*Kt()),Pt.setMode(H.LINES)):Pt.setMode(H.TRIANGLES);else if(O.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),We.setLineWidth(Be*Kt()),O.isLineSegments?Pt.setMode(H.LINES):O.isLineLoop?Pt.setMode(H.LINE_LOOP):Pt.setMode(H.LINE_STRIP)}else O.isPoints?Pt.setMode(H.POINTS):O.isSprite&&Pt.setMode(H.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Pt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Be=O._multiDrawStarts,Ei=O._multiDrawCounts,It=O._multiDrawCount,qn=Fe?K.get(Fe).bytesPerElement:1,Ss=Ve.get(X).currentProgram.getUniforms();for(let Un=0;Un<It;Un++)Ss.setValue(H,"_gl_DrawID",Un),Pt.render(Be[Un]/qn,Ei[Un])}else if(O.isInstancedMesh)Pt.renderInstances(Tt,Wt,O.count);else if(V.isInstancedBufferGeometry){let Be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ei=Math.min(V.instanceCount,Be);Pt.renderInstances(Tt,Wt,Ei)}else Pt.render(Tt,Wt)};function Dt(x,B,V){x.transparent===!0&&x.side===wt&&x.forceSinglePass===!1?(x.side=ln,x.needsUpdate=!0,eo(x,B,V),x.side=qi,x.needsUpdate=!0,eo(x,B,V),x.side=wt):eo(x,B,V)}this.compile=function(x,B,V=null){V===null&&(V=x),p=St.get(V),p.init(B),_.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),x!==V&&x.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let X=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let re=O.material;if(re)if(Array.isArray(re))for(let Ee=0;Ee<re.length;Ee++){let Ce=re[Ee];Dt(Ce,V,O),X.add(Ce)}else Dt(re,V,O),X.add(re)}),_.pop(),p=null,X},this.compileAsync=function(x,B,V=null){let X=this.compile(x,B,V);return new Promise(O=>{function re(){if(X.forEach(function(Ee){Ve.get(Ee).currentProgram.isReady()&&X.delete(Ee)}),X.size===0){O(x);return}setTimeout(re,10)}vt.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xn=null;function gi(x){Xn&&Xn(x)}function yh(){ns.stop()}function vh(){ns.start()}let ns=new Kd;ns.setAnimationLoop(gi),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(x){Xn=x,Y.setAnimationLoop(x),x===null?ns.stop():ns.start()},Y.addEventListener("sessionstart",yh),Y.addEventListener("sessionend",vh),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,B,C),p=St.get(x,_.length),p.init(B),_.push(p),Ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(Ye),Le=this.localClippingEnabled,ae=se.init(this.clippingPlanes,Le),m=Se.get(x,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&Ta(re,B,-1/0,y.sortObjects)}Ta(x,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,Me),Mt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Mt&&qe.addToRenderList(m,x),this.info.render.frame++,ae===!0&&se.beginShadows();let V=p.state.shadowsArray;xe.render(V,x,B),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,O=m.transmissive;if(p.setupLights(),B.isArrayCamera){let re=B.cameras;if(O.length>0)for(let Ee=0,Ce=re.length;Ee<Ce;Ee++){let Fe=re[Ee];Ah(X,O,x,Fe)}Mt&&qe.render(x);for(let Ee=0,Ce=re.length;Ee<Ce;Ee++){let Fe=re[Ee];_h(m,x,Fe,Fe.viewport)}}else O.length>0&&Ah(X,O,x,B),Mt&&qe.render(x),_h(m,x,B);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),x.isScene===!0&&x.onAfterRender(y,x,B),kt.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(p=_[_.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ta(x,B,V,X){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Q.intersectsSprite(x)){X&&ut.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ye);let Ee=J.update(x),Ce=x.material;Ce.visible&&m.push(x,Ee,Ce,V,ut.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Q.intersectsObject(x))){let Ee=J.update(x),Ce=x.material;if(X&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ut.copy(x.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ut.copy(Ee.boundingSphere.center)),ut.applyMatrix4(x.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ce)){let Fe=Ee.groups;for(let Je=0,it=Fe.length;Je<it;Je++){let Pe=Fe[Je],Tt=Ce[Pe.materialIndex];Tt&&Tt.visible&&m.push(x,Ee,Tt,V,ut.z,Pe)}}else Ce.visible&&m.push(x,Ee,Ce,V,ut.z,null)}}let re=x.children;for(let Ee=0,Ce=re.length;Ee<Ce;Ee++)Ta(re[Ee],B,V,X)}function _h(x,B,V,X){let O=x.opaque,re=x.transmissive,Ee=x.transparent;p.setupLightsView(V),ae===!0&&se.setGlobalState(y.clippingPlanes,V),X&&We.viewport(P.copy(X)),O.length>0&&jr(O,B,V),re.length>0&&jr(re,B,V),Ee.length>0&&jr(Ee,B,V),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Ah(x,B,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new hn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Cn:wi,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let re=p.state.transmissionRenderTarget[X.id],Ee=X.viewport||P;re.setSize(Ee.z,Ee.w);let Ce=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(q),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),Mt&&qe.render(V);let Fe=y.toneMapping;y.toneMapping=hi;let Je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ae===!0&&se.setGlobalState(y.clippingPlanes,X),jr(x,V,X),T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re),vt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Pe=0,Tt=B.length;Pe<Tt;Pe++){let Gt=B[Pe],Wt=Gt.object,bn=Gt.geometry,Pt=Gt.material,Be=Gt.group;if(Pt.side===wt&&Wt.layers.test(X.layers)){let Ei=Pt.side;Pt.side=ln,Pt.needsUpdate=!0,Mh(Wt,V,X,bn,Pt,Be),Pt.side=Ei,Pt.needsUpdate=!0,it=!0}}it===!0&&(T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re))}y.setRenderTarget(Ce),y.setClearColor(q,ee),Je!==void 0&&(X.viewport=Je),y.toneMapping=Fe}function jr(x,B,V){let X=B.isScene===!0?B.overrideMaterial:null;for(let O=0,re=x.length;O<re;O++){let Ee=x[O],Ce=Ee.object,Fe=Ee.geometry,Je=X===null?Ee.material:X,it=Ee.group;Ce.layers.test(V.layers)&&Mh(Ce,B,V,Fe,Je,it)}}function Mh(x,B,V,X,O,re){x.onBeforeRender(y,B,V,X,O,re),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(y,B,V,X,x,re),O.transparent===!0&&O.side===wt&&O.forceSinglePass===!1?(O.side=ln,O.needsUpdate=!0,y.renderBufferDirect(V,B,X,O,x,re),O.side=qi,O.needsUpdate=!0,y.renderBufferDirect(V,B,X,O,x,re),O.side=wt):y.renderBufferDirect(V,B,X,O,x,re),x.onAfterRender(y,B,V,X,O,re)}function eo(x,B,V){B.isScene!==!0&&(B=$t);let X=Ve.get(x),O=p.state.lights,re=p.state.shadowsArray,Ee=O.state.version,Ce=Ne.getParameters(x,O.state,re,B,V),Fe=Ne.getProgramCacheKey(Ce),Je=X.programs;X.environment=x.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(x.isMeshStandardMaterial?G:M).get(x.envMap||X.environment),X.envMapRotation=X.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,Je===void 0&&(x.addEventListener("dispose",nt),Je=new Map,X.programs=Je);let it=Je.get(Fe);if(it!==void 0){if(X.currentProgram===it&&X.lightsStateVersion===Ee)return xh(x,Ce),it}else Ce.uniforms=Ne.getUniforms(x),x.onBeforeCompile(Ce,y),it=Ne.acquireProgram(Ce,Fe),Je.set(Fe,it),X.uniforms=Ce.uniforms;let Pe=X.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pe.clippingPlanes=se.uniform),xh(x,Ce),X.needsLights=Vu(x),X.lightsStateVersion=Ee,X.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=it,X.uniformsList=null,it}function Sh(x){if(x.uniformsList===null){let B=x.currentProgram.getUniforms();x.uniformsList=qs.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function xh(x,B){let V=Ve.get(x);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.batchingColor=B.batchingColor,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.instancingMorph=B.instancingMorph,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function ku(x,B,V,X,O){B.isScene!==!0&&(B=$t),T.resetTextureUnits();let re=B.fog,Ee=X.isMeshStandardMaterial?B.environment:null,Ce=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qi,Fe=(X.isMeshStandardMaterial?G:M).get(X.envMap||Ee),Je=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,it=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!V.morphAttributes.position,Tt=!!V.morphAttributes.normal,Gt=!!V.morphAttributes.color,Wt=hi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Wt=y.toneMapping);let bn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Pt=bn!==void 0?bn.length:0,Be=Ve.get(X),Ei=p.state.lights;if(ae===!0&&(Le===!0||x!==A)){let Gn=x===A&&X.id===S;se.setState(X,x,Gn)}let It=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ei.state.version||Be.outputColorSpace!==Ce||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==Fe||X.fog===!0&&Be.fog!==re||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==se.numPlanes||Be.numIntersection!==se.numIntersection)||Be.vertexAlphas!==Je||Be.vertexTangents!==it||Be.morphTargets!==Pe||Be.morphNormals!==Tt||Be.morphColors!==Gt||Be.toneMapping!==Wt||Be.morphTargetsCount!==Pt)&&(It=!0):(It=!0,Be.__version=X.version);let qn=Be.currentProgram;It===!0&&(qn=eo(X,B,O));let Ss=!1,Un=!1,Mr=!1,Xt=qn.getUniforms(),si=Be.uniforms;if(We.useProgram(qn.program)&&(Ss=!0,Un=!0,Mr=!0),X.id!==S&&(S=X.id,Un=!0),Ss||A!==x){We.buffers.depth.getReversed()?(pe.copy(x.projectionMatrix),Df(pe),Lf(pe),Xt.setValue(H,"projectionMatrix",pe)):Xt.setValue(H,"projectionMatrix",x.projectionMatrix),Xt.setValue(H,"viewMatrix",x.matrixWorldInverse);let Li=Xt.map.cameraPosition;Li!==void 0&&Li.setValue(H,tt.setFromMatrixPosition(x.matrixWorld)),_t.logarithmicDepthBuffer&&Xt.setValue(H,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Xt.setValue(H,"isOrthographic",x.isOrthographicCamera===!0),A!==x&&(A=x,Un=!0,Mr=!0)}if(O.isSkinnedMesh){Xt.setOptional(H,O,"bindMatrix"),Xt.setOptional(H,O,"bindMatrixInverse");let Gn=O.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Xt.setValue(H,"boneTexture",Gn.boneTexture,T))}O.isBatchedMesh&&(Xt.setOptional(H,O,"batchingTexture"),Xt.setValue(H,"batchingTexture",O._matricesTexture,T),Xt.setOptional(H,O,"batchingIdTexture"),Xt.setValue(H,"batchingIdTexture",O._indirectTexture,T),Xt.setOptional(H,O,"batchingColorTexture"),O._colorsTexture!==null&&Xt.setValue(H,"batchingColorTexture",O._colorsTexture,T));let Sr=V.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&$e.update(O,V,qn),(Un||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,Xt.setValue(H,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(si.envMap.value=Fe,si.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(si.envMapIntensity.value=B.environmentIntensity),Un&&(Xt.setValue(H,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Gu(si,Mr),re&&X.fog===!0&&me.refreshFogUniforms(si,re),me.refreshMaterialUniforms(si,X,Z,oe,p.state.transmissionRenderTarget[x.id]),qs.upload(H,Sh(Be),si,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qs.upload(H,Sh(Be),si,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Xt.setValue(H,"center",O.center),Xt.setValue(H,"modelViewMatrix",O.modelViewMatrix),Xt.setValue(H,"normalMatrix",O.normalMatrix),Xt.setValue(H,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Gn=X.uniformsGroups;for(let Li=0,Ui=Gn.length;Li<Ui;Li++){let bh=Gn[Li];U.update(bh,qn),U.bind(bh,qn)}}return qn}function Gu(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function Vu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(x,B,V){Ve.get(x.texture).__webglTexture=B,Ve.get(x.depthTexture).__webglTexture=V;let X=Ve.get(x);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,B){let V=Ve.get(x);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(x,B=0,V=0){C=x,w=B,b=V;let X=!0,O=null,re=!1,Ee=!1;if(x){let Fe=Ve.get(x);if(Fe.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(H.FRAMEBUFFER,null),X=!1;else if(Fe.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(Fe.__hasExternalTextures)T.rebindTextures(x,Ve.get(x.texture).__webglTexture,Ve.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Pe=x.depthTexture;if(Fe.__boundDepthTexture!==Pe){if(Pe!==null&&Ve.has(Pe)&&(x.width!==Pe.image.width||x.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}let Je=x.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ee=!0);let it=Ve.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(it[B])?O=it[B][V]:O=it[B],re=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?O=Ve.get(x).__webglMultisampledFramebuffer:Array.isArray(it)?O=it[V]:O=it,P.copy(x.viewport),z.copy(x.scissor),k=x.scissorTest}else P.copy(ze).multiplyScalar(Z).floor(),z.copy(dt).multiplyScalar(Z).floor(),k=Ht;if(We.bindFramebuffer(H.FRAMEBUFFER,O)&&X&&We.drawBuffers(x,O),We.viewport(P),We.scissor(z),We.setScissorTest(k),re){let Fe=Ve.get(x.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe.__webglTexture,V)}else if(Ee){let Fe=Ve.get(x.texture),Je=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,Je)}S=-1},this.readRenderTargetPixels=function(x,B,V,X,O,re,Ee){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){We.bindFramebuffer(H.FRAMEBUFFER,Ce);try{let Fe=x.texture,Je=Fe.format,it=Fe.type;if(!_t.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-X&&V>=0&&V<=x.height-O&&H.readPixels(B,V,X,O,ot.convert(Je),ot.convert(it),re)}finally{let Fe=C!==null?Ve.get(C).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(x,B,V,X,O,re,Ee){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){let Fe=x.texture,Je=Fe.format,it=Fe.type;if(!_t.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=x.width-X&&V>=0&&V<=x.height-O){We.bindFramebuffer(H.FRAMEBUFFER,Ce);let Pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Pe),H.bufferData(H.PIXEL_PACK_BUFFER,re.byteLength,H.STREAM_READ),H.readPixels(B,V,X,O,ot.convert(Je),ot.convert(it),0);let Tt=C!==null?Ve.get(C).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,Tt);let Gt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await If(H,Gt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,re),H.deleteBuffer(Pe),H.deleteSync(Gt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,B=null,V=0){x.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1]);let X=Math.pow(2,-V),O=Math.floor(x.image.width*X),re=Math.floor(x.image.height*X),Ee=B!==null?B.x:0,Ce=B!==null?B.y:0;T.setTexture2D(x,0),H.copyTexSubImage2D(H.TEXTURE_2D,V,0,0,Ee,Ce,O,re),We.unbindTexture()},this.copyTextureToTexture=function(x,B,V=null,X=null,O=0){x.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,x=arguments[1],B=arguments[2],O=arguments[3]||0,V=null);let re,Ee,Ce,Fe,Je,it,Pe,Tt,Gt,Wt=x.isCompressedTexture?x.mipmaps[O]:x.image;V!==null?(re=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Ce=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Je=V.min.y,it=V.isBox3?V.min.z:0):(re=Wt.width,Ee=Wt.height,Ce=Wt.depth||1,Fe=0,Je=0,it=0),X!==null?(Pe=X.x,Tt=X.y,Gt=X.z):(Pe=0,Tt=0,Gt=0);let bn=ot.convert(B.format),Pt=ot.convert(B.type),Be;B.isData3DTexture?(T.setTexture3D(B,0),Be=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(T.setTexture2DArray(B,0),Be=H.TEXTURE_2D_ARRAY):(T.setTexture2D(B,0),Be=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);let Ei=H.getParameter(H.UNPACK_ROW_LENGTH),It=H.getParameter(H.UNPACK_IMAGE_HEIGHT),qn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ss=H.getParameter(H.UNPACK_SKIP_ROWS),Un=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Wt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Wt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Fe),H.pixelStorei(H.UNPACK_SKIP_ROWS,Je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,it);let Mr=x.isDataArrayTexture||x.isData3DTexture,Xt=B.isDataArrayTexture||B.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let si=Ve.get(x),Sr=Ve.get(B),Gn=Ve.get(si.__renderTarget),Li=Ve.get(Sr.__renderTarget);We.bindFramebuffer(H.READ_FRAMEBUFFER,Gn.__webglFramebuffer),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ui=0;Ui<Ce;Ui++)Mr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(x).__webglTexture,O,it+Ui),x.isDepthTexture?(Xt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.get(B).__webglTexture,O,Gt+Ui),H.blitFramebuffer(Fe,Je,re,Ee,Pe,Tt,re,Ee,H.DEPTH_BUFFER_BIT,H.NEAREST)):Xt?H.copyTexSubImage3D(Be,O,Pe,Tt,Gt+Ui,Fe,Je,re,Ee):H.copyTexSubImage2D(Be,O,Pe,Tt,Gt+Ui,Fe,Je,re,Ee);We.bindFramebuffer(H.READ_FRAMEBUFFER,null),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Xt?x.isDataTexture||x.isData3DTexture?H.texSubImage3D(Be,O,Pe,Tt,Gt,re,Ee,Ce,bn,Pt,Wt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,O,Pe,Tt,Gt,re,Ee,Ce,bn,Wt.data):H.texSubImage3D(Be,O,Pe,Tt,Gt,re,Ee,Ce,bn,Pt,Wt):x.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,O,Pe,Tt,re,Ee,bn,Pt,Wt.data):x.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,O,Pe,Tt,Wt.width,Wt.height,bn,Wt.data):H.texSubImage2D(H.TEXTURE_2D,O,Pe,Tt,re,Ee,bn,Pt,Wt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ei),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,It),H.pixelStorei(H.UNPACK_SKIP_PIXELS,qn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ss),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Un),O===0&&B.generateMipmaps&&H.generateMipmap(Be),We.unbindTexture()},this.copyTextureToTexture3D=function(x,B,V=null,X=null,O=0){return x.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,x=arguments[2],B=arguments[3],O=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,B,V,X,O)},this.initRenderTarget=function(x){Ve.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),We.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,We.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}},ke=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Jo=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mn=new I,Qo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tr=class extends Fi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,Rr=new I,Hs=new I,zs=new I,ks=new ce,Cr=new ce,iu=new Bt,So=new I,Fr=new I,xo=new I,xd=new ce,il=new ce,bd=new ce,kr=class extends jt{constructor(e=new tr){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new en;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hc(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new Qo(i,3,0,!1)),Os.setAttribute("uv",new Qo(i,2,3,!1))}this.geometry=Os,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),iu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-zs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;bo(So.set(-.5,-.5,0),zs,o,Hs,s,r),bo(Fr.set(.5,-.5,0),zs,o,Hs,s,r),bo(xo.set(.5,.5,0),zs,o,Hs,s,r),xd.set(0,0),il.set(1,0),bd.set(1,1);let a=e.ray.intersectTriangle(So,Fr,xo,!1,Rr);if(a===null&&(bo(Fr.set(-.5,.5,0),zs,o,Hs,s,r),il.set(0,1),a=e.ray.intersectTriangle(So,xo,Fr,!1,Rr),a===null))return;let l=e.ray.origin.distanceTo(Rr);l<e.near||l>e.far||t.push({distance:l,point:Rr.clone(),uv:Vi.getInterpolation(Rr,So,Fr,xo,xd,il,bd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function bo(n,e,t,i,s,r){ks.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Cr.x=r*ks.x-s*ks.y,Cr.y=s*ks.x+r*ks.y):Cr.copy(ks),n.copy(e),n.x+=Cr.x,n.y+=Cr.y,n.applyMatrix4(iu)}var dc=class extends wn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=On,h=On,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ko=class extends cn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new Bt,Td=new Bt,To=[],wd=new Ci,w2=new Bt,Pr=new W,Ir=new $i,jo=class extends W{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,w2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),wd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Ir.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Td.multiplyMatrices(i,Gs),Pr.matrixWorld=Td,Pr.raycast(e,To);for(let o=0,a=To.length;o<a;o++){let l=To[o];l.instanceId=r,l.object=this,t.push(l)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new dc(new Float32Array(s*this.count),s,this.count,Hc,li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var nr=class extends Fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rd=new Bt,uc=new Go,wo=new $i,Ro=new I,Gr=class extends jt{constructor(e=new en,t=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Rd.copy(s).invert(),uc.copy(e.ray).applyMatrix4(Rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);Ro.fromBufferAttribute(d,m),Cd(Ro,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,E=f;g<E;g++)Ro.fromBufferAttribute(d,g),Cd(Ro,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cd(n,e,t,i,s,r,o){let a=uc.distanceSqToPoint(n);if(a<t){let l=new I;uc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Qn=class extends wn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new Bt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(yn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(yn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ea=class extends Kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fc=class extends ea{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Co=new I,sl=new Wc,rl=new Wc,ol=new Wc,ir=class extends Kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Co.subVectors(s[0],s[1]).add(s[0]),c=Co);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),sl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),rl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),ol.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(sl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),rl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ol.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(sl.calc(l),rl.calc(l),ol.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fd(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function R2(n,e){let t=1-n;return t*t*e}function C2(n,e){return 2*(1-n)*n*e}function F2(n,e){return n*n*e}function Br(n,e,t,i){return R2(n,e)+C2(n,t)+F2(n,i)}function P2(n,e){let t=1-n;return t*t*t*e}function I2(n,e){let t=1-n;return 3*t*t*n*e}function D2(n,e){return 3*(1-n)*n*n*e}function L2(n,e){return n*n*n*e}function Or(n,e,t,i,s){return P2(n,e)+I2(n,t)+D2(n,i)+L2(n,s)}var pc=class extends Kn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mc=class extends Kn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Or(e,s.x,r.x,o.x,a.x),Or(e,s.y,r.y,o.y,a.y),Or(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gc=class extends Kn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends Kn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends Kn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends Kn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y),Br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Fd(a,l.x,c.x,h.x,d.x),Fd(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},U2=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:ir,CubicBezierCurve:pc,CubicBezierCurve3:mc,EllipseCurve:ea,LineCurve:gc,LineCurve3:Ec,QuadraticBezierCurve:yc,QuadraticBezierCurve3:ta,SplineCurve:vc});var ui=class n extends en{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ft=class n extends en{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(f,2));function v(){let y=new I,D=new I,w=0,b=(t-e)/i;for(let C=0;C<=r;C++){let S=[],A=C/r,P=A*(t-e)+e;for(let z=0;z<=s;z++){let k=z/s,q=k*l+a,ee=Math.sin(q),$=Math.cos(q);D.x=P*ee,D.y=-A*i+m,D.z=P*$,d.push(D.x,D.y,D.z),y.set(ee,b,$).normalize(),u.push(y.x,y.y,y.z),f.push(k,1-A),S.push(g++)}E.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let A=E[S][C],P=E[S+1][C],z=E[S+1][C+1],k=E[S][C+1];(e>0||S!==0)&&(h.push(A,P,k),w+=3),(t>0||S!==r-1)&&(h.push(P,z,k),w+=3)}c.addGroup(p,w,0),p+=w}function _(y){let D=g,w=new ce,b=new I,C=0,S=y===!0?e:t,A=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let z=0;z<=s;z++){let q=z/s*l+a,ee=Math.cos(q),$=Math.sin(q);b.x=S*$,b.y=m*A,b.z=S*ee,d.push(b.x,b.y,b.z),u.push(0,A,0),w.x=ee*.5+.5,w.y=$*.5*A+.5,f.push(w.x,w.y),g++}for(let z=0;z<s;z++){let k=D+z,q=P+z;y===!0?h.push(q,q+1,k):h.push(q+1,q,k),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fi=class n extends ft{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_c=class n extends en{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,D=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],_),f(t[w+1],y),f(t[w+2],D),l(_,y,D,v)}function l(v,_,y,D){let w=D+1,b=[];for(let C=0;C<=w;C++){b[C]=[];let S=v.clone().lerp(y,C/w),A=_.clone().lerp(y,C/w),P=w-C;for(let z=0;z<=P;z++)z===0&&C===w?b[C][z]=S:b[C][z]=S.clone().lerp(A,z/P)}for(let C=0;C<w;C++)for(let S=0;S<2*(w-C)-1;S++){let A=Math.floor(S/2);S%2===0?(u(b[C][A+1]),u(b[C+1][A]),u(b[C][A])):(u(b[C][A+1]),u(b[C+1][A+1]),u(b[C+1][A]))}}function c(v){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,D=p(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],D=o[v+4],w=Math.max(_,y,D),b=Math.min(_,y,D);w>.9&&b<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new I,_=new I,y=new I,D=new I,w=new ce,b=new ce,C=new ce;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),w.set(o[A+0],o[A+1]),b.set(o[A+2],o[A+3]),C.set(o[A+4],o[A+5]),D.copy(v).add(_).add(y).divideScalar(3);let P=m(D);E(w,A+0,v,P),E(b,A+2,_,P),E(C,A+4,y,P)}}function E(v,_,y,D){D<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},sr=class n extends _c{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var na=class n extends en{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new I,g=new ce;for(let E=0;E<=s;E++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let E=0;E<s;E++){let m=E*(i+1);for(let p=0;p<i;p++){let v=p+m,_=v,y=v+i+1,D=v+i+2,w=v+1;a.push(_,y,w),a.push(y,D,w)}}this.setIndex(a),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var gt=class n extends en{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let w=D/t;d.x=-e*Math.cos(s+w*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+w*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(w+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let _=h[p][v+1],y=h[p][v],D=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(_,y,w),(p!==i-1||l<Math.PI)&&f.push(y,D,w)}this.setIndex(f),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(E,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pn=class n extends en{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(E,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Vr=class n extends en{constructor(e=new ta(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ce,h=new I,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(f,2));function E(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),p()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],D=o.binormals[_];for(let w=0;w<=s;w++){let b=w/s*Math.PI*2,C=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+C*D.x,l.y=S*y.y+C*D.y,l.z=S*y.z+C*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let D=(s+1)*(_-1)+(y-1),w=(s+1)*_+(y-1),b=(s+1)*_+y,C=(s+1)*(_-1)+y;g.push(D,w,C),g.push(w,b,C)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new U2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Oe=class extends Fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function N2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ac=class extends rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fh:r=e,a=2*t-i;break;case Ph:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fh:o=e,l=2*i-t;break;case Ph:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+v*o[c+D]+_*o[l+D]+y*o[d+D];return r}},Mc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Sc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ac(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case Yl:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&N2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ra,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Yl;var ps=class extends jn{constructor(e,t,i){super(e,t,i)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=No;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends jn{};xc.prototype.ValueTypeName="color";var bc=class extends jn{};bc.prototype.ValueTypeName="number";var Tc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Zi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ia=class extends jn{InterpolantFactoryMethodLinear(e){return new Tc(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends jn{constructor(e,t,i){super(e,t,i)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=No;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var wc=class extends jn{};wc.prototype.ValueTypeName="vector";var Rc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},B2=new Rc,Cc=class{constructor(e){this.manager=e!==void 0?e:B2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Cc.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},He=class extends or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},al=new Bt,Pd=new I,Id=new I,Wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fc=class extends Wr{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Oo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Hn=class extends or{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dd=new Bt,Dr=new I,ll=new I,Pc=class extends Wr{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Dr),ll.copy(i.position),ll.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ll),i.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd)}},lt=class extends or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Pc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ic=class extends Wr{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Ic}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var sa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ld();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ld(){return 0}var Xc="\\[\\]\\.:\\/",O2=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",H2="[^"+Xc.replace("\\.","")+"]",z2=/((?:WC+[\/:])*)/.source.replace("WC",qc),k2=/(WCOD+)?/.source.replace("WCOD",H2),G2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),V2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),W2=new RegExp("^"+z2+k2+G2+V2+"$"),X2=["material","materials","bones","map"],Dc=class{constructor(e,t,i){let s=i||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O2,"")}static parseTrackName(e){let t=W2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);X2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=Dc;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);var la={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},q2=new js(-1,1,1,-1,0,1),Yc=class extends en{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}},Y2=new Yc,dr=class{constructor(e){this._mesh=new W(Y2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,q2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var gs=class extends Pi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cr.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xr=class extends Pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ca=class extends Pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ha=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gs(la),this.copyPass.material.blending=ci,this.clock=new sa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xr!==void 0&&(o instanceof Xr?i=!0:o instanceof ca&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var su={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ur=class n extends Pi{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new hn(r,o,{type:Cn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new hn(r,o,{type:Cn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=su;this.highPassUniforms=cr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=la;this.copyUniforms=cr.clone(h.uniforms),this.blendMaterial=new dn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new Ke,this.fsQuad=new dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new dn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ur.BlurDirectionX=new ce(1,0);ur.BlurDirectionY=new ce(0,1);var Es=1280,ys=720;function Xe(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var qr=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Rt=(n,e,t)=>n+(e-n)*t,Re=(n,e,t)=>{let i=qr((t-n)/(e-n));return i*i*(3-2*i)};var Z2=n=>(n=qr(n),n*n*(3-2*n));function ua(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=Z2((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>Rt(o,r[a],i)):Rt(s,r,i)}return n[n.length-1][1]}var $2={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ce(Es,ys)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},J2={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new de(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},da=class{constructor(e){let t=this.r=new $o({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(Es,ys,!1),t.shadowMap.enabled=!0,t.shadowMap.type=Uc,t.toneMapping=hi,t.outputColorSpace=Qi;let i=new er(Es,ys);i.type=Ri,this.rt=new hn(Es,ys,{type:Cn,samples:2,depthTexture:i}),this.composer=new ha(t,new hn(Es,ys,{type:Cn})),this.dof=new gs($2,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new ur(new ce(Es/2,ys/2),.45,.75,.82),this.grade=new gs(J2),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function ru(n,e,t,i=40){let s=new Jo;s.background=new de(t);let r=new fn(i,Es/ys,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function ou(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var Pn=1/420,Zc=new Map;function In(n,e,t,i){if(Zc.has(n))return Zc.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Qn(s);return o.colorSpace=Jt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Zc.set(n,o),o}var Ct=n=>new Path2D(n);function un(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function ei(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var Q2={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function K2(n,e){return In("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=Ct("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");un(t,i,ei(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(Ct("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(Ct("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(Ct("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=Ct("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){un(t,Ct("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),ei(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(Ct("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(Ct("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(Ct("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(Ct("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(Ct("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")un(t,Ct("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),ei(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(Ct("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(Ct("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(Ct("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){un(t,Ct("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),ei(t,-60,0,60,120,n.a,n.b)),un(t,Ct("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),ei(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else un(t,Ct("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),ei(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(Ct("M-22 26 L22 26 L0 64Z")),un(t,Ct("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function au(n,e,t){return In("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(un(i,Ct("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),ei(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(un(i,Ct("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;un(i,Ct(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),ei(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(Ct(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(Ct(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function j2(){return In("hand",90,100,n=>{n.translate(45,14);let e=Ct("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");un(n,e,ei(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function lu(n){return In("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function eg(){return In("foot",80,40,n=>{n.translate(26,6),un(n,Ct("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function tg(n="round"){return In("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var du={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function ng(n,e){return In("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),du[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function ig(n,e,t){return In("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=Ct("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");un(i,s,ei(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),un(i,s,e);let r=Ct("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");un(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),un(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=Ct("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");un(i,s,ei(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),un(i,l,"#E9E9EF")})})})}var cu=(n,e={})=>new Ke({map:n,alphaTest:.5,alphaToCoverage:!0,side:wt,...e}),hu=new Map,$c=new Map,sg=[];function rg(n){if($c.has(n))return $c.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Qn(t);return r.colorSpace=Jt,r.anisotropy=8,$c.set(n,r),r}function Fn(n,e,t,i,s,r=0,o,a=!1){let l=new Ie(e*Pn,t*Pn);l.translate((e/2-i)*Pn,(s-t/2)*Pn,0);let c=cu(n);o.push(c);let h=new W(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=cu(rg(n),{color:"#FFE9C8"});sg.push(u);let f=new W(l,u);f.position.z=-.045-r,h.add(f)}let d=hu.get(n);return d||(d=new Ji({depthPacking:lr,map:n,alphaTest:.5,side:wt}),hu.set(n,d)),h.customDepthMaterial=d,h}function og(){return In("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function ag(){return In("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function Jc(n={}){let e=Q2[n.outfit||"hero"],t=n.outfit||"hero",i=new le,s=[],r=new le;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new le;_.position.set(p*34*Pn,o*Pn,v);let y=new le;y.position.y=-142*Pn,_.add(Fn(lu(1),50,160,25,6,0,s)),y.add(Fn(lu(1),50,160,25,6,0,s));let D=Fn(eg(),80,40,26,6,.001,s);D.position.y=-142*Pn,p<0&&(D.scale.x=-1),y.add(D),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=Fn(K2(e,t),300,320,150,20,0,s);h.position.y=(a+4)*Pn,r.add(h);for(let[m,p,v]of[["L",-1,-.006],["R",1,.006]]){let _=new le;_.position.set(p*(e.kind==="dress"?66:84)*Pn,(a-24)*Pn,v);let y=new le;y.position.y=-124*Pn,_.add(Fn(au(e,t,"u"),90,170,45,10,0,s)),y.add(Fn(au(e,t,"f"),90,170,45,10,.001,s));let D=Fn(j2(),90,100,45,14,.002,s);D.position.y=-128*Pn,D.scale.set(p>0?-.8:.8,.8,1),y.add(D),_.add(y),r.add(_),c[m]={u:_,f:y,hand:D}}let d=new le;if(d.position.set(0,(a+104)*Pn,.02),r.add(d),n.hair){let m=Fn(ig(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Fn(tg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Fn(In("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let v=n.hairc||"#4a2c1a";p.fillStyle=v,p.fill(Ct(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Fn(In("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(v=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(v*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(du)){let p=Fn(ng(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",d.add(p),u[m]=p}if(n.glasses){let m=Fn(In("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Fn(n.hat(In),300,300,150,150,.006,s);d.add(m)}let f=new W(new Ie(1,.4),new Ke({map:og(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new W(new Ie(2.1,3),new Ke({map:ag(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:Tn,side:wt})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in u)u[p].visible=p===m},cheer(m,p=0,v=1){let _=m*6+p,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*p,c.L.f.rotation.z=-v[1]*p,c.R.u.rotation.z=_[0]*p,c.R.f.rotation.z=_[1]*p,l.L.th.rotation.z=-y[0]*p,l.L.shin.rotation.z=-y[1]*p,l.R.th.rotation.z=D[0]*p,l.R.shin.rotation.z=D[1]*p,d.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let w=m.squash||0;r.scale.set(1-w*.5,1+w,1)},walk(m,p=1,v=1){let _=m*6.4*p,y=Math.sin(_),D=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,p,v=0,_=1){i.position.set(m,v,p),i.scale.setScalar(_)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return E.pose(),E}function Ue(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Qn(i);return r.colorSpace=Jt,r.anisotropy=8,r}var vs=(n,e={})=>new Oe({color:n,roughness:.88,metalness:0,...e});function R(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new W(new Rn(n,e,t),typeof i=="string"?vs(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function ct(n,e,t=1){let i=Ue(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new kr(new tr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:Tn}));return s.scale.set(e,e,1),s}var uu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function lg(n,e,t,i,s,r=.42){let o=Xe(n),a=256*e,l=300*t,c,h=Ue(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,f,28,10);for(let f=0;f<t;f++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,f*300+292,a,8)}),d=Ue(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,p=g*300+60,v=144,_=196,y=o()<r,D=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,v+18,_+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+_+9,v+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+_+6,v+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,v,_),y||!s){let w=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=w,f.fillRect(m,p,26,_),f.fillRect(m+v-26,p,26,_)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+_),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+_),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+v/2-3,p,6,_),f.fillRect(m,p+_*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,p,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,p,6,_),u.fillRect(m,p+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Jt,{map:h,emissiveMap:d}}function Ki(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=Xe(n),u=new le,f=o*2.9+3.6,g=c||uu[Math.floor(d()*uu.length)],E=Math.max(2,Math.round(r/2.1)),m=lg(n,E,o,g,l,e.lit??.42),p=new Oe({map:m.map,emissiveMap:m.emissiveMap,emissive:new de(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=vs(g),_=[a>0?p:v,a>0?v:p,vs("#2c2730"),v,v,v],y=new W(new Rn(s,o*2.9,r),_);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(R(s+.5,.5,r+.5,"#3d3540",t,f+.25,i)),u.add(R(s+.3,.35,r+.3,g,t,3.6,i));let D=t+a*(s/2+.01);if(h){let w=Ue(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),b=new W(new Rn(.18,1.05,r-.3),[new Oe({map:w,emissiveMap:w,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),new Oe({map:w,emissiveMap:w,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),vs("#222"),vs("#222"),vs("#222"),vs("#222")]);b.position.set(D+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,u.add(b);let C=Ue(512,256,P=>{let z=P.createLinearGradient(0,0,0,256);z.addColorStop(0,h.win||"#F4C783"),z.addColorStop(1,"#D59A5C"),P.fillStyle=z,P.fillRect(0,0,512,256);let k=Xe(n+9);for(let q=0;q<26;q++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(k()*6)],P.fillRect(k()*490,30+Math.floor(k()*3)*76,12+k()*26,52);for(let q of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,q,512,7)}),S=new Oe({map:C,emissiveMap:C,emissive:new de(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(R(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let A=new W(new Ie(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(D+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(R(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=Ue(512,128,k=>{for(let q=0;q<12;q++)k.fillStyle=q%2?h.awning:"#F4EEDF",k.fillRect(q*512/12,0,42.666666666666664,128)}),z=new W(new Ie(r-.3,1.3),new Oe({map:P,side:wt,roughness:.9}));z.rotation.y=a*Math.PI/2,z.rotation.order="YXZ",z.rotation.x=-1,z.position.set(D+a*.55,2.56,i),z.castShadow=!0,u.add(z)}if(l){let P=new lt(h.light||"#FFC88A",3.2,7,1.8);P.position.set(D+a*1.7,2.1,i),u.add(P)}}return u}function fu(n,e,t){let i=new W(new Ie(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function cg(n="#A99D90"){let e=Ue(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=Xe(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=vn,e}function fa(n,e){let t=Ue(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Xe(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=vn,t.repeat.set(1,12);let i=fu(9,240,new Oe({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=cg(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=fu(4.4,240,new Oe({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(R(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function pa(n,e,t,i,s=!0,r=5.5){let o=new le;o.add(R(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(R(.26,.3,.26,"#15151b",e,.15,t));let a=R(.26,.4,.26,new Oe({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(R(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=ct("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new lt("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var pu={};function _n(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new le;o.add(R(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=pu[a]||(pu[a]=Ue(512,512,c=>{let h=Xe(r%3+3),d=(u,f,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,v=g*(.86+.14*Math.sin(p*5+u)+h()*.05);c.lineTo(u+Math.cos(p)*v,f+Math.sin(p)*v)}c.fill()};for(let[u,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,f,g,s[0]);for(let[u,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,f,g,s[1]);for(let[u,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,f,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new W(new Ie(3.6*i,3.6*i),new Oe({map:l,alphaTest:.5,side:wt,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Ji({depthPacking:lr,map:l,alphaTest:.5,side:wt}),o.add(h)}return n.add(o),o}function ti(n,e,t,i,s,r,o=3,a=0){let l=Ue(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Xe(o);for(let u=0;u<3;u++)for(let f=-40;f<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(f,900-E,g,E),d()<.2&&h.fillRect(f+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new W(new Ie(t,i),new Ke({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Ot(n,e,t,i,s){let r=Ue(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new W(new Ie(t,i),new Ke({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var F=(n,e={})=>new Oe({color:n,roughness:.85,...e});function Ze(n,e,t,i={}){let s=new W(new Ie(e,t),new Ke({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:wt,color:i.color||"#fff",blending:i.add?Tn:Wi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Ji({depthPacking:lr,map:n,alphaTest:.5,side:wt})),s}function zn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var Qc={value:0};function ma(n="#8E3D30",e=4,t=3){let i=Ue(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Xe(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=vn,i.repeat.set(e,t),i}function mu(n="#A59383",e=12,t=12){let i=Ue(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Xe(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=vn,i.repeat.set(e,t),i}var gu=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function hg(n,e){let[t,i,s,r]=gu[n];return Ue(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Kc(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=Xe(o),l={};for(let c of e){let h=Math.floor(a()*gu.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=hg(d,h),f=new Ke({map:u,alphaTest:.5,side:wt,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=Qc,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new jo(new Ie(i*.5,i),f,l[c].length),E=new jt;l[c].forEach((m,p)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(p,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function Dn(n,e=2600,t=300,i=1){let s=Xe(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,f=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(f)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(f)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new en;a.setAttribute("position",new cn(r,3)),a.setAttribute("color",new cn(o,3));let l=Ue(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new nr({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Gr(a,c);return h.frustumCulled=!1,n.add(h),h}function Ii(n,e,t="#6D4A33"){let i=Ue(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=Xe(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=vn,i.repeat.set(n/5,e/5);let s=new W(new Ie(n,e),new Oe({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function pi(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Ue(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=vn,r.repeat.set(n/s*4,e/s*4);let o=new W(new Ie(n,e),new Oe({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function _s(n,e,t="#FFD9A0",i=.22){let s=Ue(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new W(new Ie(n,e),new Ke({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:Tn,side:wt,fog:!1}))}function jc(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new le,a=new W(new ft(.3,.22,.5,20),F(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Ue(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Ze(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function eh(n,e,t,i="#2A1E18"){let s=new le;s.add(R(n+.08,e+.08,.04,i,0,0,0));let r=Ue(Math.round(n*400),Math.round(e*400),t),o=new W(new Ie(n,e),new Oe({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function zt(n,e,t,i=1.2){return new W(new Ie(n,e),new Oe({color:"#000",emissive:t,emissiveIntensity:i}))}function pt(n,e,t,i=10,s=60){let r=new ar(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function Yr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new ke(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Ot(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),ti(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=ma(t,2,2),a=()=>new Oe({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,E,m])=>n.add(R(E,m,.3,a(),f,g,-3)));for(let[f,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(R(E,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(R(18,5.2,.3,a(),0,2.6,-3));n.add(Ii(18,12,s));let l=eh(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(jc(4.4,0,-2.4,1.1)),n.add(jc(-5,0,-2.4,.9,"#36AEA2")),n.add(new He(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=pt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new lt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new W(new ft(.18,.3,.34,24),new Oe({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(R(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=ct("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var Eu=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Zr(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new ke(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Ot(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),ti(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),fa(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Ki(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:Eu[(a+i)%5]})),n.add(Ki(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:Eu[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)_n(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),pa(n,-5,-3-l*12,1,t||r);n.add(new He(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(pt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},mt=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},Ft=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},fr={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),mt(n,120,330,34,100,14,"#B5784A"),mt(n,340,330,34,100,14,"#B5784A"),mt(n,180,340,34,90,14,"#C98E5E"),mt(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),mt(n,120,330,34,100,14,"#B5906A"),mt(n,340,330,34,100,14,"#B5906A"),mt(n,180,340,34,90,14,"#C9A07E"),mt(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),Ft(n,[[96,120],[110,30],[160,100]],"#E9853A"),Ft(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),Ft(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),Ft(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),Ft(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),mt(n,92,200,26,70,12,"#A87A44"),mt(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),Ft(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),Ft(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),Ft(n,[[300,90],[360,20],[370,100]],"#5A88AC"),Ft(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),Ft(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])mt(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),Ft(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{mt(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),Ft(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),mt(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),Ft(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),Ft(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])mt(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),Ft(n,[[80,80],[60,40],[104,72]],"#C9A06A"),Ft(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])mt(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),Ft(n,[[160,70],[150,30],[196,70]],"#E890A4"),Ft(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),mt(n,40,260,70,240,30,"#2E2E38"),mt(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{mt(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])mt(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),mt(n,160,20,12,50,6,"#8A5A2A"),mt(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])mt(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),Ft(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),Ft(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),Ft(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])mt(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])mt(n,e,330,26,180,12,"#9A6238");mt(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),Ft(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])mt(n,e,360,34,190,14,"#4A3222");mt(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)Ft(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])mt(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),Ft(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),Ft(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])mt(n,e,320,34,230,14,"#7A4A2E");mt(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),mt(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),Ft(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},ga={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(ga,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in ga)fr[n][3]=ga[n][0],fr[n][4]=ga[n][1];fr.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),Ft(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];fr.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)Ft(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),Ft(n,[[100,80],[90,30],[130,74]],"#F2913A"),Ft(n,[[160,76],[170,26],[190,80]],"#F2913A"),mt(n,160,380,40,56,18,"#6AB05A"),mt(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];fr.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])mt(n,e,320,34,230,14,"#E4DED2");mt(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),mt(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),Ft(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Ea={},yu=n=>Ea["e"+n]||(Ea["e"+n]=Ue(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function vu(n,e={}){let[t,i,s,r,o,a]=fr[n],l=Ea[n]||(Ea[n]=Ue(t,i,s)),c=a*i/t,h=new le,d=new le;h.add(d);let u=Ze(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let f=new W(new Ie(o*a,o*a*.5),new Ke({map:yu("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(f);let g=new W(new ui(a*.45,24),new Ke({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){f.material.map=yu(m)},face(m){let p=new I;h.getWorldPosition(p),d.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){u.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,v=0,_=1){return h.position.set(m,v,p),h.scale.setScalar(_),E}};return E}var ji=(n,e,t=200,i=200,s)=>{let r=new W(new Ie(t,i),s?new Oe({map:s,roughness:.95}):F(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},th=(n,e=1)=>{n.add(new He("#E9EEFF","#B08A6A",1.05*e)),n.add(pt("#FFD29A",3*e,[-14,16,10],20,70))},we={sala:(n,e)=>Yr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{Yr(n,{wall:"#9A4632",night:e.night}),n.add(R(2.4,.45,3.2,F("#6B4A33"),-1.7,.25,-1.4)),n.add(R(2.3,.3,3,F("#F3EEE4"),-1.7,.6,-1.4)),n.add(R(2.38,.22,2,F("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(R(.8,.22,.5,F("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Zr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new ke(e.dusk?"#E8A880":"#F2D8B8",.02),Ot(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),ti(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),ji(n,"#7A9A50");for(let t=0;t<12;t++)_n(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(R(2.4,.1,.5,F("#8E6242"),-3.4,.5,-2.2)),n.add(R(2.4,.5,.08,F("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)pa(n,-6+t*6,-4,1,!!e.dusk);n.add(new He("#E9EEFF","#B08A6A",1)),n.add(pt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Zr(n,{seed:e.seed||2}),ji(n,"",60,60,mu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new ke("#F2D8B8",.012),Ot(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),ji(n,"#8AAA58");let t=new le;t.add(R(6,4,5,F("#B5402E"),0,2,0));let i=new W(new ft(.01,4.4,2.2,4),F("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(R(2,2.6,.1,F("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(R(.1,1,.1,F("#C9A06A"),-10+s*1.3,.5,-4));n.add(R(20,.08,.06,F("#C9A06A"),0,.9,-4)),n.add(R(20,.08,.06,F("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)_n(n,6+s*3,-16-s%2*3,1.6,void 0,s);th(n)},sabana:(n,e)=>{n.fog=new ke("#F2C890",.01),Ot(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=ct("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),ji(n,"#C8A858");for(let i=0;i<6;i++){let s=new le;s.add(R(.3,3,.3,F("#5A3A22"),0,1.5,0));let r=new W(new ft(2.6,2.2,.6,12),F("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new He("#FFE8C8","#8A6A3A",1)),n.add(pt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new ke("#F2E2C0",.012),Ot(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),ji(n,"#B8B070");for(let t=0;t<14;t++){let i=new W(new gt(.55,16,10,0,Math.PI*2,0,Math.PI/2),F("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}th(n)},mar:(n,e)=>{dg(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new ke(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=ji(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=Xe(5);for(let r=0;r<30;r++){let o=new W(new fi(.2+s()*.3,.8+s()*1.4,7),F(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=_s(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=ct("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new He("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(pt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new ke("#162238",.04),n.add(pi(16,20,"#2A3348","#232B3E",6)),n.add(R(16,6,.3,F("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=zt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=zt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Ue(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new W(new Ie(2.5,1.3),new Ke({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new He("#6E86C8","#101420",.8)),n.add(pt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new ke("#1E2236",.02),ji(n,"#2F4A7A"),n.add(R(30,10,.3,F("#E8E2D2"),0,5,-8));let t=Ue(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Ze(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new W(new pn(4,.35,10,48),F("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new lt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new He("#E8E8FF","#3A3A50",.9)),n.add(pt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new ke("#E6E2D6",.03),n.add(pi(9,40));for(let i of[-1,1]){n.add(R(.7,4.2,30,F("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(R(1.2,.05,30,F("#DDE0E4"),i*3,.5+s*.9,-10))}let t=Xe(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(R(.3,.3,.4,F(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=zt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new He("#FFFFFF","#B9B3A6",1)),n.add(pt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{we.parque(n,{});for(let t=0;t<12;t++)n.add(R(.08,1.4,.08,F("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(R(8,.08,.08,F("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{Yr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new ke("#8A8070",.03),Ot(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),ji(n,"#8A8070");let t=Xe(8);for(let i=0;i<40;i++){let s=R(.4+t()*1.6,.3+t()*1,.4+t()*1.4,F(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}th(n,.8)}};function dg(n,e){n.background=new de(e)}function ug(n,e={}){let t=Jc({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var fg=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function nh(n,e,t){let i=ru(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(we[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?ug(s,a):(()=>{let c=vu(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{Qc.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=ua(t.cam.map(([g,E])=>[g,E]),l),u=ua(t.cam.map(([g,,E])=>[g,E]),l);ou(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let p=g.move(l);E.root.position.set(p[0],p[1],p[2])}E.face(c),E.eye(fg(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,v])=>l>=p&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?ua(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function _u(n,e,t,i="#E8667F"){n.add(R(2.2,.45,3,F("#6B4A33"),e,.25,t)),n.add(R(2.1,.3,2.8,F("#F3EEE4"),e,.6,t)),n.add(R(2.18,.2,1.9,F(i,{roughness:.9}),e,.8,t+.5)),n.add(R(2.2,1.3,.16,F("#5A3C28"),e,.9,t-1.55)),n.add(R(.8,.2,.45,F("#FFFFFF"),e-.5,.82,t-1.1)),n.add(R(.8,.2,.45,F("#F6E6C8"),e+.5,.82,t-1.1))}function pg(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return Ue(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,f,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,f,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,f)=>c.fillText(u,t/2,i*.42+(f-(d.length-1)/2)*o*1.15))})}function Au(n,e,t=1.4,i={}){let s=pg(e,i),r=Ze(s,t,t*(i.h||400)/(i.w||640),{blend:!0});return r.renderOrder=5,n.add(r),r}function Mu(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return Ue(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function pr(n,e="#F2C14E",t=140,i=256,s=200){return Ue(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function mg(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function mr(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new Qn(i);r.colorSpace=Jt;let o=new W(new Ie(n,n),new Oe({map:r,transparent:!0,alphaTest:.05,side:wt,roughness:.7}));return o.set=(a,l={})=>{mg(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}var $r=[0,4.78,8.58,16.6,19.88,24.54,29.52,36.8,44.88,51.94,57.64,64.44,73.52,81.38,90.08,101.58,106.26,112.3,119.5,123.64,132.54,139.28,147.52,155.86,158.62,166.46,172.5,179,189.18,197.8,203.78,212.18,218.5,224.52,228.96,242.88,250.64,259.88,268.1,273.2,279.9,284.06,288.38,301.24,311.34,318.38,324.42,329.78,336.36,343.32,350.72,356.08,363.52,370.54,383.24,386.86,393.4,407.46,415.3,422.48,430.4,435.66,444.6,453.54,457.34,466.34,470.76,478.36,485.8,496.72,503.2,513.5,528.8,541.02,548.44,559.06,569.56,575.52,582.34,591.8,599.08,611.48,621.24,622.82,632.68,636.16,645.96,659.78,665.38],gg=[["estas",0],["atrapado",.28],["en",.9],["un",1.06],["ascensor",1.18],["entre",1.68],["el",2.3],["piso",2.5],["7",2.74],["y",3.06],["el",3.42],["piso",3.54],["8",3.84],["la",4.78],["luz",4.94],["parpadea",5.16],["el",6.32],["boton",6.5],["de",6.8],["alarma",6.9],["no",7.24],["hace",7.52],["nada",7.76],["y",8.58],["a",8.76],["medio",8.84],["metro",9.02],["de",9.4],["ti",9.56],["esta",9.78],["nora",10.38],["tu",11.22],["vecina",11.44],["nueva",11.76],["la",12.64],["chica",12.74],["que",13],["te",13.18],["gusta",13.3],["desde",13.6],["el",13.86],["primer",14.08],["dia",14.4],["que",14.76],["la",14.94],["viste",15.04],["en",15.34],["el",15.48],["portal",15.58],["como",16.6],["has",16.8],["llegado",16.98],["hasta",17.28],["aqui",17.46],["rebobinemos",18.7],["31",19.88],["de",20.24],["diciembre",20.64],["las",21.54],["11",21.66],["de",21.9],["la",22.1],["noche",22.2],["vives",23.08],["en",23.36],["el",23.56],["tercero",23.66],["tu",24.54],["madre",24.66],["te",24.9],["manda",25.12],["a",25.46],["casa",25.56],["de",25.76],["la",25.94],["abuela",26.04],["en",26.36],["el",26.7],["piso",26.8],["12",27.06],["con",27.32],["una",27.76],["bandeja",27.94],["de",28.38],["turrones",28.52],["llamas",29.52],["al",29.96],["ascensor",30.12],["se",31.04],["abre",31.18],["la",31.4],["puerta",31.54],["y",31.82],["dentro",32.5],["esta",32.88],["nora",33.38],["con",34.1],["una",34.34],["bolsa",34.5],["de",34.84],["uvas",35],["para",35.28],["las",35.54],["campanadas",35.72],["y",36.8],["antes",37],["de",37.26],["que",37.42],["se",37.54],["cierre",37.66],["esa",38.06],["puerta",38.3],["si",39.34],["te",39.44],["gustan",39.56],["estas",39.9],["historias",40.12],["de",40.7],["y",40.96],["si",41.5],["suscribete",42.28],["al",42.82],["canal",42.98],["y",43.28],["activa",43.48],["la",43.86],["campanita",43.96],["asi",44.88],["no",45.12],["te",45.44],["pierdes",45.56],["la",45.88],["proxima",46.04],["y",46.94],["ahora",47.18],["si",47.38],["vamos",48.08],["a",48.36],["ver",48.6],["como",48.74],["sobrevives",49.16],["a",49.86],["esta",50.06],["nochevieja",50.28],["nora",51.94],["te",52.24],["sonrie",52.46],["esta",53.52],["noche",53.76],["su",54.06],["familia",54.32],["cena",54.68],["en",55.06],["casa",55.24],["de",55.44],["su",55.64],["tia",55.78],["tambien",56.3],["en",56.6],["el",56.84],["12",56.98],["te",57.64],["dice",57.84],["al",58.14],["12",58.82],["yo",59.56],["tambien",59.74],["tu",60.66],["dices",60.84],["si",61.18],["con",62.12],["una",62.26],["voz",62.44],["que",62.7],["no",62.88],["es",63.08],["la",63.26],["tuya",63.38],["nora",64.44],["se",64.78],["mudo",65.02],["al",65.3],["edificio",65.44],["hace",65.98],["dos",66.18],["meses",66.46],["al",67.2],["noveno",67.38],["y",68.18],["desde",68.32],["entonces",68.5],["el",68.9],["ascensor",69.44],["se",69.92],["ha",70.12],["convertido",70.18],["en",70.78],["el",70.92],["sitio",71.04],["mas",71.36],["dificil",71.74],["del",72.3],["mundo",72.6],["cada",73.52],["manana",73.78],["coincidis",74.16],["cada",75.3],["manana",75.52],["los",75.92],["dos",76.4],["mirando",76.68],["los",77.16],["numeros",77.38],["cada",78.18],["manana",78.48],["tu",79.32],["pensando",79.46],["que",79.88],["decir",80.36],["y",81.38],["cada",81.46],["manana",81.72],["justo",82.58],["cuando",82.82],["por",83.16],["fin",83.5],["se",83.82],["te",84.02],["ocurre",84.12],["algo",84.46],["ya",85.08],["habeis",85.3],["llegado",85.6],["al",85.98],["bajo",86.12],["32",87.08],["segundos",87.54],["lo",88.7],["has",88.84],["cronometrado",88.98],["pero",90.08],["hoy",90.38],["no",90.62],["vais",90.84],["al",91.04],["bajo",91.26],["vais",92],["al",92.18],["12",92.42],["mas",93.14],["tiempo",93.44],["y",94.32],["tienes",94.52],["un",94.78],["plan",95.02],["decirle",95.74],["algo",96.16],["lo",96.8],["que",96.88],["sea",97.02],["un",97.68],["comentario",97.8],["sobre",98.32],["el",98.56],["frio",98.74],["sobre",99.26],["las",99.46],["uvas",99.64],["lo",100.32],["que",100.44],["sea",100.58],["piso",101.58],["4",101.86],["abres",102.24],["la",103.1],["boca",103.26],["la",104.06],["cierras",104.16],["fracaso",105.06],["piso",106.26],["5",106.5],["piso",107.3],["6",107.62],["piso",108.52],["7",108.76],["y",109.8],["de",109.94],["repente",110.06],["un",110.92],["golpe",111.08],["seco",111.38],["clanc",112.3],["el",113.2],["ascensor",113.38],["se",113.84],["para",114.13],["la",114.84],["luz",114.94],["parpadea",115.14],["y",116.12],["se",116.34],["queda",116.46],["en",116.7],["una",116.86],["lucecita",117.02],["amarilla",117.6],["de",118.1],["emergencia",118.28],["silencio",119.5],["nora",120.74],["te",121.06],["mira",121.28],["tu",122],["miras",122.16],["los",122.52],["botones",122.68],["primero",123.64],["lo",124.38],["obvio",124.48],["pulsas",125.26],["todos",125.62],["los",126.02],["botones",126.28],["todos",127.14],["el",127.36],["7",128.02],["el",128.74],["8",128.86],["el",129.42],["12",129.54],["el",130.16],["de",130.32],["abrir",130.42],["puertas",130.58],["nada",131.62],["pulsas",132.54],["el",132.84],["boton",133.02],["de",133.32],["cerrar",133.46],["puertas",133.8],["por",134.44],["si",134.6],["acaso",134.72],["y",135.52],["nora",135.56],["te",135.76],["dice",135.94],["ese",136.7],["boton",136.96],["no",137.34],["sirve",137.5],["para",137.76],["nada",137.98],["sabes",138.44],["y",139.28],["tiene",139.44],["razon",139.66],["en",140.5],["muchos",140.64],["ascensores",140.86],["el",141.68],["boton",141.8],["de",142.12],["cerrar",142.24],["puertas",142.54],["no",143],["hace",143.34],["nada",143.58],["esta",144.2],["ahi",144.5],["para",144.74],["que",144.92],["la",145.08],["gente",145.18],["sienta",145.42],["que",145.98],["tiene",146.12],["el",146.42],["control",146.56],["luego",147.52],["pulsas",147.98],["el",148.46],["boton",148.64],["de",148.94],["la",149.04],["campanita",149.14],["suena",150.2],["un",150.48],["pitido",150.62],["y",151.44],["una",151.64],["voz",151.82],["desde",152.36],["un",152.52],["altavoz",152.78],["servicio",153.66],["tecnico",154.18],["en",154.94],["que",155.08],["puedo",155.18],["ayudarle",155.4],["le",155.86],["explicas",156.62],["que",157.1],["estais",157.3],["atrapados",157.64],["la",158.62],["voz",158.8],["dice",159],["que",159.34],["manda",159.5],["un",159.84],["tecnico",159.98],["pero",160.78],["que",161],["es",161.22],["nochevieja",161.36],["que",162.22],["hay",162.32],["muchos",162.44],["avisos",162.7],["y",163.26],["que",163.6],["puede",163.72],["tardar",163.94],["un",164.56],["par",165.1],["de",165.34],["horas",165.52],["un",166.46],["par",166.68],["de",167.02],["horas",167.24],["tu",168.04],["ella",168.92],["y",169.14],["un",169.7],["ascensor",169.86],["de",170.32],["un",170.56],["metro",170.74],["por",171.1],["un",171.36],["metro",171.52],["nora",172.5],["se",172.84],["sienta",173.04],["en",173.42],["el",173.52],["suelo",173.62],["tu",174.38],["te",174.52],["quedas",174.72],["de",174.98],["pie",175.12],["pegado",175.62],["a",175.96],["la",176.06],["pared",176.14],["como",176.76],["si",176.94],["el",177.1],["ascensor",177.2],["fuera",177.64],["muy",178],["grande",178.3],["y",179],["es",179.14],["que",179.3],["esto",179.44],["tiene",179.74],["nombre",180.14],["en",181.02],["1966",181.2],["un",183.02],["antropologo",183.22],["llamado",183.8],["edward",184.14],["hall",184.62],["estudio",185.02],["como",185.78],["usamos",186.16],["el",186.58],["espacio",186.8],["que",187.2],["hay",187.48],["a",187.59],["nuestro",187.7],["alrededor",188],["descubrio",189.18],["que",189.78],["todos",190],["llevamos",190.36],["encima",190.8],["una",191.26],["especie",191.54],["de",191.94],["burbuja",192.2],["invisible",192.74],["hasta",193.76],["unos",194],["45",194.28],["centimetros",194.82],["es",195.78],["la",196.3],["zona",196.48],["intima",196.78],["ahi",197.8],["solo",198.04],["dejamos",198.32],["entrar",198.76],["a",199.12],["la",199.26],["familia",199.36],["a",200.3],["los",200.36],["amigos",200.48],["de",200.82],["verdad",201.04],["o",201.3],["a",202.08],["la",202.2],["persona",202.26],["que",202.62],["nos",202.78],["gusta",202.94],["por",203.78],["eso",204.04],["en",204.32],["los",204.38],["ascensores",204.52],["la",205.36],["gente",205.44],["mira",205.72],["a",206.06],["la",206.24],["puerta",206.3],["mira",207.1],["el",207.26],["movil",207.42],["o",207.78],["mira",208.16],["los",208.4],["numeros",208.6],["cualquier",208.9],["cosa",209.96],["menos",210.32],["a",210.64],["la",210.9],["cara",211],["del",211.28],["otro",211.48],["un",212.18],["ascensor",212.46],["nos",212.98],["mete",213.24],["a",213.52],["desconocidos",213.64],["en",214.4],["la",214.58],["burbuja",214.72],["y",215.42],["al",215.8],["cerebro",215.96],["no",216.38],["le",216.8],["gusta",216.98],["nada",217.28],["y",218.5],["tu",218.66],["ahora",219.12],["mismo",219.4],["tienes",220.04],["a",220.28],["nora",220.5],["dentro",220.66],["de",221.1],["la",221.34],["burbuja",221.44],["durante",222.36],["un",222.76],["par",223.12],["de",223.38],["horas",223.58],["nora",224.52],["desde",225.22],["el",225.48],["suelo",225.7],["oye",226.38],["y",227.14],["si",227.28],["se",227.34],["rompen",227.5],["los",227.82],["cables",228],["y",228.96],["aqui",229.12],["por",229.66],["suerte",229.74],["sabes",230.46],["algo",230.68],["en",231.58],["1854",231.76],["en",233.6],["nueva",233.7],["york",233.94],["un",234.56],["inventor",234.7],["llamado",235.04],["elisha",235.46],["otis",235.9],["se",236.34],["subio",236.64],["a",237],["una",237.14],["plataforma",237.28],["delante",238.2],["de",238.58],["un",238.74],["monton",238.88],["de",239.32],["gente",239.58],["y",240.28],["mando",240.36],["cortar",240.64],["la",240.92],["cuerda",241.16],["que",241.54],["la",241.68],["sostenia",241.78],["la",242.88],["plataforma",243.02],["no",243.52],["cayo",244.02],["se",244.76],["quedo",244.96],["frenada",245.22],["al",245.72],["momento",245.98],["habia",247.04],["inventado",247.34],["el",247.94],["freno",248.08],["de",248.48],["seguridad",248.58],["de",249.04],["los",249.26],["ascensores",249.4],["desde",250.64],["entonces",250.86],["los",251.72],["ascensores",251.74],["llevan",252.32],["varios",252.72],["cables",253.1],["y",253.88],["cada",254.04],["uno",254.22],["solo",254.5],["podria",254.88],["aguantar",255.34],["el",255.86],["peso",255.98],["y",256.78],["si",256.94],["todo",257.06],["fallara",257.32],["el",258.18],["freno",258.3],["se",258.66],["activa",258.84],["nora",259.88],["te",260.2],["mira",260.42],["y",261.18],["tu",261.32],["como",261.48],["sabes",261.72],["eso",262.04],["y",262.84],["tu",263.04],["no",263.24],["le",263.6],["dices",263.76],["la",264.02],["verdad",264.2],["que",264.96],["lo",265.14],["viste",265.28],["en",265.54],["un",265.72],["video",265.82],["a",266.08],["las",266.28],["3",266.46],["de",266.68],["la",266.86],["manana",266.96],["media",268.1],["hora",268.56],["tu",269.22],["movil",269.4],["sin",269.78],["cobertura",270.14],["el",271.26],["de",271.36],["nora",271.5],["sin",271.66],["bateria",272.12],["abris",273.2],["la",273.52],["bandeja",273.68],["de",274.06],["turrones",274.2],["de",274.58],["la",274.78],["abuela",274.9],["primero",275.72],["uno",276.08],["luego",276.86],["otro",277.1],["luego",278.02],["media",278.36],["bandeja",278.84],["le",279.9],["diremos",280.12],["a",280.48],["tu",280.58],["abuela",280.68],["que",280.94],["el",281.16],["ascensor",281.26],["se",281.66],["los",281.84],["comio",281.94],["dice",282.76],["nora",283.06],["una",284.06],["hora",284.26],["hace",285.14],["calor",285.36],["nora",286.24],["pregunta",286.56],["si",286.92],["se",287.24],["puede",287.38],["acabar",287.6],["el",287.96],["aire",288.2],["y",288.38],["no",289.08],["los",289.66],["ascensores",289.84],["no",290.4],["son",290.8],["hermeticos",291.1],["tienen",292.12],["rendijas",292.38],["y",293.08],["huecos",293.22],["por",293.54],["todas",293.8],["partes",294.12],["el",295.18],["aire",295.38],["entra",295.6],["y",296.1],["sale",296.26],["puedes",297.06],["quedarte",297.32],["dentro",297.64],["muchas",297.94],["horas",298.5],["y",298.78],["respirar",299.1],["perfectamente",299.66],["y",301.24],["si",301.46],["no",301.6],["que",302.04],["se",302.12],["lo",302.26],["digan",302.4],["a",302.68],["nicholas",302.8],["white",303.14],["en",304.04],["1999",304.24],["en",306.04],["un",306.14],["rascacielos",306.28],["de",306.9],["nueva",307.02],["york",307.24],["este",307.92],["hombre",308.1],["bajo",308.36],["a",308.74],["fumar",308.82],["un",309.12],["cigarro",309.24],["un",309.72],["viernes",309.86],["por",310.22],["la",310.44],["noche",310.56],["se",311.34],["subio",311.5],["al",311.86],["ascensor",311.98],["y",313.02],["se",313.14],["quedo",313.3],["atrapado",313.64],["41",314.78],["horas",315.32],["todo",316.54],["el",316.74],["fin",317.02],["de",317.24],["semana",317.44],["sin",318.38],["agua",318.54],["sin",319.28],["comida",319.42],["sin",320.28],["que",320.44],["nadie",320.66],["supiera",321.02],["que",321.54],["estaba",321.74],["ahi",322.08],["y",322.96],["sobrevivio",323.06],["nora",324.42],["te",324.7],["escucha",324.92],["y",325.44],["dice",325.56],["vale",326.34],["nosotros",327.1],["tenemos",327.32],["turrones",327.8],["estamos",328.64],["bien",328.94],["pero",329.78],["no",330],["esta",330.3],["bien",330.68],["a",331.48],["los",331.64],["pocos",331.76],["minutos",332.08],["nora",332.9],["empieza",333.04],["a",333.44],["respirar",333.68],["rapido",334.14],["muy",335.22],["rapido",335.4],["te",336.36],["dice",336.52],["que",336.76],["las",336.92],["paredes",337.1],["estan",337.52],["mas",337.8],["cerca",338.1],["que",338.44],["antes",338.64],["que",339.44],["le",339.58],["falta",339.7],["el",339.96],["aire",340.18],["que",340.9],["necesita",341],["salir",341.36],["ya",342.4],["y",343.32],["tu",343.52],["te",343.7],["acuerdas",344.02],["de",344.4],["algo",344.6],["que",344.82],["te",345],["enseno",345.12],["tu",345.5],["entrenador",345.6],["de",346.1],["futbol",346.3],["antes",346.62],["de",346.96],["los",347.12],["penaltis",347.26],["se",348.2],["llama",348.46],["respiracion",348.74],["en",349.82],["caja",350],["la",350.72],["usan",350.84],["hasta",351.16],["los",351.36],["soldados",351.54],["y",352],["los",352.2],["astronautas",352.34],["para",353.02],["calmarse",353.24],["en",353.86],["situaciones",353.98],["de",354.52],["mucho",354.78],["estres",355.1],["coges",356.08],["aire",356.34],["contando",356.6],["hasta",357.28],["cuatro",357.46],["lo",358.38],["aguantas",358.5],["cuatro",358.9],["lo",359.96],["sueltas",360.06],["en",360.64],["cuatro",360.78],["y",361.64],["esperas",361.7],["otros",362.22],["cuatro",362.46],["respirar",363.52],["despacio",364],["le",364.54],["dice",364.82],["al",365.04],["cuerpo",365.2],["que",365.52],["no",365.78],["hay",366.04],["peligro",366.24],["y",367.12],["el",367.26],["corazon",367.36],["poco",367.78],["a",368.44],["poco",368.62],["baja",368.88],["el",369.5],["ritmo",369.72],["te",370.54],["sientas",370.7],["a",371.12],["su",371.28],["lado",371.34],["mirame",372.22],["uno",373.08],["dos",373.76],["tres",374.62],["cuatro",375.52],["y",376.4],["contais",376.56],["juntos",376.96],["una",377.94],["vez",378.18],["otra",379],["diez",379.82],["veces",380.12],["hasta",381.02],["que",381.36],["nora",381.56],["deja",381.72],["de",382.12],["temblar",382.32],["gracias",383.24],["te",384.26],["dice",384.38],["y",385.18],["no",385.24],["te",385.42],["suelta",385.56],["la",385.9],["manga",386.02],["para",386.86],["pasar",387.02],["el",387.3],["rato",387.48],["jugais",387.76],["a",388.32],["algo",388.46],["nora",389.1],["dice",389.42],["aguantar",390.16],["la",390.7],["mirada",390.84],["el",391.5],["primero",391.64],["que",391.92],["se",392.1],["rie",392.24],["pierde",392.56],["y",393.4],["esto",393.56],["tambien",393.84],["tiene",394.34],["ciencia",394.58],["en",395.6],["1989",395.76],["unos",396.68],["psicologos",397.72],["de",398.4],["estados",398.52],["unidos",398.78],["juntaron",399.26],["a",399.84],["parejas",400],["de",400.36],["desconocidos",400.54],["y",401.26],["les",401.6],["pidieron",401.78],["que",402.12],["se",402.3],["miraran",402.44],["a",402.84],["los",402.96],["ojos",403.12],["durante",403.38],["dos",403.78],["minutos",404.16],["sin",405.06],["hablar",405.34],["solo",406.12],["mirarse",406.42],["y",407.46],["al",407.58],["terminar",407.68],["muchos",408.06],["dijeron",408.76],["que",409.3],["sentian",409.44],["mas",409.88],["carino",410.24],["y",410.72],["mas",410.88],["interes",411.08],["por",411.6],["la",411.8],["otra",411.94],["persona",412.12],["dos",413.18],["minutos",413.34],["nada",414.26],["mas",414.52],["tu",415.3],["no",415.48],["sabias",415.68],["nada",416.02],["de",416.4],["ese",416.64],["experimento",416.78],["pero",417.84],["aguantas",418.06],["10",419.08],["segundos",419.36],["30",420.44],["un",421.34],["minuto",421.52],["nora",422.48],["tiene",422.74],["los",423],["ojos",423.24],["marrones",423.5],["con",424.32],["una",424.56],["manchita",424.72],["mas",425.16],["clara",425.48],["en",425.8],["el",425.96],["izquierdo",426.04],["y",427.02],["en",427.04],["el",427.16],["minuto",427.26],["y",427.62],["medio",427.72],["nora",428],["se",428.62],["rie",428.86],["pierde",429.56],["es",430.4],["que",430.54],["pones",430.66],["una",430.96],["cara",431.16],["muy",431.4],["rara",431.64],["te",432.38],["dice",432.5],["y",433.26],["se",433.32],["pone",433.48],["roja",433.7],["y",434.6],["tu",434.68],["tambien",434.8],["y",435.66],["entonces",435.78],["empezais",436.16],["a",437.08],["hablar",437.26],["de",437.98],["verdad",438.14],["te",438.94],["enteras",439.1],["de",439.48],["que",439.64],["nora",439.74],["se",439.96],["ha",440.22],["mudado",440.3],["tres",440.66],["veces",441.02],["en",441.4],["dos",441.66],["anos",441.84],["que",442.48],["siempre",442.76],["es",443.1],["la",443.44],["nueva",443.84],["que",444.6],["en",444.74],["el",444.88],["instituto",444.98],["todavia",445.54],["come",445.96],["sola",446.32],["algunos",446.66],["dias",447],["y",447.82],["que",447.96],["lo",448.06],["peor",448.2],["de",448.46],["mudarse",448.58],["no",449],["es",449.34],["cambiar",449.58],["de",449.88],["casa",450.08],["es",450.78],["que",450.96],["nadie",451.1],["sabe",451.42],["como",451.8],["eres",452.24],["de",452.56],["verdad",452.74],["y",453.54],["tu",453.64],["le",453.82],["cuentas",454.02],["que",454.4],["llevas",454.56],["dos",454.88],["meses",455.12],["intentando",455.48],["hablar",456.22],["con",456.44],["ella",456.74],["que",457.34],["una",457.5],["vez",457.66],["la",457.92],["esperaste",458.12],["en",458.56],["el",458.68],["portal",458.78],["20",459.04],["minutos",459.56],["para",460.02],["coincidir",460.42],["y",461.9],["que",461.98],["al",462.08],["final",462.18],["cuando",462.44],["bajo",462.84],["dijiste",463.34],["hola",464.12],["y",464.8],["te",465],["fuiste",465.12],["corriendo",465.42],["nora",466.34],["se",466.68],["tapa",466.94],["la",467.2],["cara",467.38],["me",468.1],["acuerdo",468.24],["pense",469.16],["que",469.52],["te",469.6],["caia",469.74],["mal",470.02],["y",470.76],["que",470.92],["pensabas",471.02],["decirme",471.52],["todas",471.98],["esas",472.26],["mananas",472.6],["te",473.52],["pregunta",473.66],["y",474.6],["tu",474.7],["la",474.9],["verdad",475.36],["no",476.16],["se",476.42],["algo",477.06],["del",477.34],["frio",477.54],["nora",478.36],["levanta",478.6],["una",479.2],["ceja",479.36],["que",480.16],["romantico",480.32],["y",481.52],["los",481.64],["dos",481.82],["os",482.06],["reis",482.26],["por",483.08],["primera",483.22],["vez",483.58],["sin",483.92],["mirar",484.3],["los",484.68],["numeros",484.84],["las",485.8],["12",486.02],["menos",486.3],["cuarto",486.52],["la",487.42],["luz",487.62],["de",487.76],["emergencia",487.94],["parpadea",488.5],["y",489.48],["el",489.62],["ascensor",489.74],["se",490.18],["mueve",490.4],["un",490.76],["poco",490.92],["un",491.66],["centimetro",491.82],["nora",492.88],["te",493.22],["agarra",493.44],["del",493.76],["brazo",493.9],["fuerte",494.7],["y",495.54],["no",495.6],["te",495.78],["suelta",495.92],["por",496.72],["el",496.92],["altavoz",497.04],["el",497.8],["tecnico",497.92],["tranquilos",498.84],["es",499.76],["normal",499.88],["ya",500.64],["estoy",500.76],["en",500.94],["el",501.16],["edificio",501.24],["10",502.06],["minutos",502.26],["y",503.2],["nora",503.36],["de",503.56],["repente",503.74],["se",504.76],["pone",505.04],["seria",505.24],["oye",506.14],["cuando",506.86],["salgamos",507.04],["de",507.54],["aqui",507.76],["todo",508.44],["va",508.56],["a",508.78],["volver",508.84],["a",509.02],["ser",509.24],["como",509.42],["antes",509.64],["tu",510.46],["mirando",510.6],["los",510.98],["numeros",511.2],["y",511.6],["yo",512.08],["mirando",512.24],["el",512.62],["movil",512.74],["tu",513.5],["piensas",513.74],["en",514.32],["los",514.48],["32",514.62],["segundos",515.08],["en",516.3],["todas",516.48],["las",516.78],["mananas",517.06],["en",518.02],["todas",518.22],["las",518.46],["cosas",518.74],["que",519.08],["no",519.38],["dijiste",519.62],["y",520.56],["le",520.72],["contestas",520.8],["no",521.96],["a",522.6],["partir",522.74],["de",522.96],["ahora",523.18],["te",523.4],["hablo",523.8],["del",524.06],["frio",524.2],["todos",524.56],["los",524.96],["dias",525.26],["nora",526.18],["sonrie",526.54],["trato",527.46],["hecho",527.78],["las",528.8],["12",529.06],["menos",529.32],["5",529.56],["nora",530.46],["abre",530.88],["la",531.32],["bolsa",531.48],["son",532.36],["las",532.54],["uvas",532.72],["de",532.98],["mi",533.12],["familia",533.22],["pero",534.12],["mi",534.28],["familia",534.48],["esta",534.86],["en",535.16],["el",535.28],["piso",535.38],["12",535.64],["y",536.34],["yo",536.46],["estoy",536.64],["aqui",536.88],["cuenta",537.8],["12",538.14],["para",538.46],["ella",538.78],["y",539.54],["12",539.8],["para",540.02],["ti",540.32],["y",541.02],["entonces",541.16],["por",542.04],["el",542.14],["hueco",542.24],["del",542.54],["ascensor",542.72],["se",543.52],["oye",543.64],["la",543.84],["tele",543.98],["de",544.24],["algun",544.4],["vecino",544.68],["los",545.6],["cuartos",545.78],["y",546.74],["la",546.82],["primera",546.92],["campanada",547.28],["una",548.44],["uva",548.66],["dos",549.4],["uvas",549.64],["tres",550.48],["nora",551.32],["se",551.6],["atraganta",551.8],["en",552.24],["la",552.4],["seis",552.52],["y",552.8],["se",553.12],["rie",553.26],["con",553.58],["la",553.76],["boca",553.9],["llena",554.08],["tu",554.94],["vas",555.06],["por",555.26],["la",555.44],["nueve",555.56],["10",556.36],["11",557.14],["12",557.98],["fuera",559.06],["en",559.62],["la",559.74],["calle",559.86],["empiezan",560.52],["los",560.98],["fuegos",561.16],["artificiales",561.56],["y",562.72],["en",562.94],["un",563.04],["ascensor",563.16],["parado",563.64],["entre",564.06],["el",564.3],["piso",564.48],["7",564.72],["y",564.96],["el",565.22],["8",565.34],["nora",566.1],["te",566.26],["da",566.5],["un",566.64],["beso",566.78],["en",567.56],["la",567.66],["mejilla",567.74],["rapido",568.62],["feliz",569.56],["ano",569.84],["nuevo",570.06],["te",570.72],["dice",570.84],["y",571.66],["mira",571.74],["a",571.98],["la",572.14],["puerta",572.22],["como",572.96],["hace",573.12],["todo",573.36],["el",573.62],["mundo",573.84],["en",574.12],["los",574.24],["ascensores",574.34],["clanc",575.52],["la",576.46],["luz",576.66],["vuelve",576.92],["el",577.94],["ascensor",578.1],["sube",578.58],["solo",578.94],["hasta",579.24],["el",579.52],["piso",579.68],["8",579.94],["y",580.64],["la",580.86],["puerta",581],["se",581.28],["abre",581.58],["y",582.34],["en",582.44],["el",582.54],["rellano",582.66],["esta",583.08],["el",583.38],["tecnico",583.54],["y",584.38],["tu",584.46],["abuela",584.58],["y",585.22],["los",585.36],["padres",585.52],["de",585.78],["nora",586.04],["y",586.78],["media",586.88],["escalera",587.18],["de",587.7],["vecinos",587.82],["en",588.24],["pijama",588.66],["con",589.38],["copas",589.54],["de",589.9],["champan",590.02],["aplaudiendo",590.46],["tu",591.8],["abuela",591.94],["mira",592.26],["la",592.58],["bandeja",592.74],["vacia",593.16],["y",594.06],["los",594.22],["turrones",594.4],["nora",595.44],["muy",596.36],["seria",596.46],["se",597.28],["los",597.46],["comio",597.6],["el",597.94],["ascensor",598.08],["al",599.08],["dia",599.3],["siguiente",599.44],["el",600.3],["ascensor",600.38],["ya",600.86],["funciona",601.1],["pero",602.06],["tu",602.26],["tienes",602.5],["una",602.86],["duda",603.1],["y",603.98],["si",604.14],["nora",604.26],["solo",604.46],["se",604.78],["acerco",605],["a",605.36],["ti",605.52],["porque",605.6],["estaba",605.86],["asustada",606.26],["porque",607.26],["estabais",607.5],["en",607.96],["un",608.12],["metro",608.24],["cuadrado",608.48],["porque",609.4],["no",609.7],["habia",609.98],["nadie",610.26],["mas",610.64],["asi",611.48],["que",611.82],["subes",612.02],["al",612.42],["noveno",612.56],["y",613.28],["esta",613.44],["vez",613.68],["no",613.92],["esperas",614.24],["20",614.68],["minutos",614.9],["para",615.36],["coincidir",615.72],["llamas",617.2],["a",617.66],["su",617.76],["puerta",617.92],["y",618.6],["le",618.74],["preguntas",618.84],["si",619.2],["quiere",619.52],["ir",619.8],["a",620],["dar",620.1],["una",620.24],["vuelta",620.42],["y",621.24],["ella",621.4],["dice",621.66],["que",621.96],["si",622.14],["y",622.82],["cuando",622.92],["salis",623.12],["al",623.52],["rellano",623.66],["el",624.42],["ascensor",624.52],["esta",624.94],["ahi",625.28],["abierto",625.96],["esperando",626.86],["nora",627.9],["lo",628.18],["mira",628.4],["te",629.1],["mira",629.24],["a",629.46],["ti",629.68],["y",630.22],["dice",630.34],["bajamos",631.16],["andando",631.58],["9",632.68],["pisos",633],["de",633.52],["escaleras",633.66],["y",634.56],["no",634.7],["se",634.84],["te",635],["hacen",635.1],["largos",635.32],["porque",636.16],["eso",636.42],["es",636.7],["lo",636.9],["curioso",637.02],["un",637.92],["ascensor",638.1],["puede",638.62],["meterte",638.96],["a",639.44],["alguien",639.6],["dentro",639.82],["de",640.3],["la",640.46],["burbuja",640.6],["pero",641.42],["lo",641.64],["que",641.78],["hace",641.92],["que",642.12],["se",642.28],["quede",642.44],["ahi",642.66],["es",642.96],["lo",643.42],["que",643.56],["os",643.68],["contais",643.82],["cuando",644.26],["se",644.54],["va",644.86],["la",645],["luz",645.12],["y",645.96],["si",646.14],["un",646.24],["dia",646.4],["te",646.58],["quedas",646.76],["atrapado",647.04],["en",647.56],["un",647.72],["ascensor",647.84],["de",648.3],["verdad",648.48],["pulsa",649.26],["la",649.62],["alarma",649.76],["no",650.6],["intentes",650.7],["salir",651.18],["por",651.42],["tu",651.66],["cuenta",651.78],["y",652.08],["espera",652.58],["tranquilo",653],["los",654.12],["cables",654.26],["aguantan",654.58],["el",655.66],["aire",655.8],["no",656.02],["se",656.34],["acaba",656.5],["y",657.3],["la",657.38],["ayuda",657.5],["siempre",657.82],["llega",658.44],["si",659.78],["te",660.26],["ha",660.38],["gustado",660.44],["esta",660.72],["historia",661.08],["suscribete",661.86],["al",662.3],["canal",662.44],["para",662.72],["ver",662.96],["mas",663.2],["videos",663.48],["de",663.86],["y",664.16],["si",664.45],["y",665.38],["cuentame",665.56],["en",665.92],["los",666.06],["comentarios",666.16],["con",667.2],["quien",667.34],["te",667.56],["quedarias",667.74],["tu",668.24],["atrapado",668.44],["en",669.02],["un",669.14],["ascensor",669.26]],ih=(n,e=0)=>{for(let[t,i]of gg)if(i>=e&&t===n)return i;return e};var ya=(n,e,t=200,i=200)=>{let s=new W(new Ie(t,i),F(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},qt=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Ue(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function Eg(n,e=.5){let t=new le,i=Ue(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Xe(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new W(new Ie(400,100),new Ke({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:Tn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function yg(n,e=0,t=-1){for(let i=0;i<4;i++){let s=R(5,.22,.6,F("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new W(new fi(.16,.35,6),F(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function sh(n,e=40,t=3,i=[-12,12,-40,4]){let s=Xe(t),r=Ue(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Ze(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function Su(n,e=200,t=5,i=10,s=30,r=2){let o=Xe(t),a=Ue(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Ze(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}we.pasteleria=n=>{n.fog=new ke("#F3D2C0",.02),n.add(pi(16,14,"#F2E6DA","#E2CFC0",8)),n.add(R(16,5,.3,F("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(R(.12,5,.05,F("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(R(5.4,1,.9,F("#8A5A3C"),0,.5,-1.2)),n.add(R(5.5,.08,1,F("#F4EEE6"),0,1.04,-1.2)),n.add(R(3.6,.1,.5,F("#F4EEE6"),0,2.1,-3)),n.add(R(3.6,.1,.5,F("#F4EEE6"),0,2.9,-3));let e=Ze(qt(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new He("#FFF0F0","#A07060",1));let t=pt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new lt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};we.espacio=n=>{n.background=new de("#05060E"),Dn(n,2600,200,3),n.add(new He("#8FA8FF","#101020",.5));let e=new ar("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};we.aula=n=>{n.fog=new ke("#E8DCC8",.02),n.add(pi(16,16,"#C9B89A","#BBA98A",10)),n.add(R(16,5,.3,F("#E8DCC0"),0,2.5,-3.6)),n.add(R(4.4,1.8,.06,F("#2F5A48"),0,2.3,-3.42)),n.add(R(4.6,.1,.2,F("#8E6242"),0,1.36,-3.35));let e=Ze(Ue(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new He("#FFFFFF","#9A8A70",1)),n.add(pt("#FFE8C8",2.2,[-6,8,6],10,40))};we.ruaV=(n,e)=>{Zr(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(sh(n,60,4),Su(n,260,6,9,40))};we.apagon=(n,e)=>{n.fog=new ke("#0A0C18",.03),Ot(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Dn(n,1800,200,4),fa(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(Ki(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Ki(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new He("#5A64A8","#141420",.5)),n.add(pt("#8A9AE0",.7,[-10,20,10],30,90))};we.azotea=(n,e)=>{n.background=new de("#03040A"),n.fog=new ke("#060814",.008),Dn(n,4200,200,9),Eg(n,e.ang??.45),ti(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=R(16,.3,12,F("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(R(16,.5,.2,F("#4A4A54"),0,.25,-8)),n.add(R(1.4,1.2,1.4,F("#4A4A54"),4.5,.6,-5)),n.add(new He("#6A78C8","#141420",.55)),n.add(pt("#9AAAF0",.6,[-6,10,6],12,40))};we.panaderia=n=>{we.pasteleria(n);let e=Ze(qt(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};we.metro=n=>{n.background=new de("#0A0C10"),n.fog=new ke("#0C1014",.07);let e=F("#4A4E54",{roughness:.9,side:ln}),t=new W(new ft(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new le,s=new W(new ft(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=R(6.4,.1,60,F("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(R(.08,.12,60,F("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(R(2.2,.08,.2,F("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new lt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=ct("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new He("#8A90A0","#202024",1.1))};we.bosque=(n,e)=>{n.fog=new ke(e.nieve?"#E8EEF4":"#C8D0B8",.025),Ot(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ya(n,e.nieve?"#F2F4F8":"#6E8A48");let t=Xe(14);for(let i=0;i<26;i++)_n(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=Ki(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),sh(n,0)}n.add(new He("#E9EEFF","#5A6A4A",.95)),n.add(pt("#FFE8C0",2.4,[-10,14,8],18,60))};we.rio=(n,e)=>{we.parque(n,e);let t=new W(new Ie(60,3.4),new Oe({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};we.playa=(n,e)=>{let t=!!e.dusk;n.fog=new ke(t?"#F2A880":"#CFE8F0",.006),Ot(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=ct(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=ya(n,"#E8D4A0"),r=new W(new Ie(800,400),new Oe({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=R(800,.02,.6,F("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new W(new sr(1.1,0),F("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new He(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(pt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};we.svalbard=n=>{n.fog=new ke("#C8D8E8",.02),Ot(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),ya(n,"#F4F6FA");let e=Xe(19);for(let l=0;l<8;l++){let c=new W(new fi(10+e()*12,10+e()*10,7),F("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new W(new gt(14,32,16,0,Math.PI*2,0,Math.PI/2),F("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=R(3,4.4,6,F("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=R(1.4,2.2,.1,F("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=zt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=ct("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=ct("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new He("#D8E8FF","#8A9AB0",1.1)),n.add(pt("#F0F4FF",1.6,[-8,10,8],16,50))};we.huerto=(n,e)=>{we.parque(n,e),yg(n,0,-1.4)};we.biblio=n=>{n.fog=new ke("#4A3A2A",.03),n.add(Ii(18,14,"#6D4A33")),n.add(R(18,6,.3,F("#5A3E2A"),0,3,-3.4));let e=Xe(8);for(let s=0;s<5;s++){n.add(R(14,.06,.4,F("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(R(o,a,.3,F(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new He("#FFE8C8","#3A2A1C",.7));let t=new lt("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=ct("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};we.hotel=n=>{n.fog=new ke("#E8D8C0",.02),n.add(Ii(18,14,"#8A5A3A")),n.add(R(18,6,.3,F("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(R(2.4,2.6,.05,F("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Ze(Ue(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=R(3.2,.6,2.4,F("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(R(3.3,1.4,.2,F("#6A3A2A"),0,.7,-2.8)),sh(n,0);let t=Ze(Ue(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new He("#FFF0E0","#8A6A4A",1)),n.add(pt("#FFE0B0",2,[-4,8,6],10,30))};we.selva=n=>{n.fog=new ke("#7AA870",.05),Ot(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),ya(n,"#3E5A2A");let e=Xe(23);for(let t=0;t<40;t++)_n(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);Su(n,160,9,12,12,3),n.add(new He("#D8F0C8","#2A3A1A",.9)),n.add(pt("#FFF0C0",2.2,[-6,14,4],14,50))};we.desierto=n=>{we.sabana(n,{})};var ah=(n,e,t=200,i=200)=>{let s=new W(new Ie(t,i),F(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};function va(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new le,[d,u,f,g]=s,E=()=>l?new Oe({map:ma(i,3,3),roughness:.95}):F(i,{roughness:.9}),m=d-f/2+e/2,p=e/2-(d+f/2),v=u-g/2,_=t-(u+g/2);h.add(R(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(R(p,t,.3,E(),e/2-p/2,t/2,0)),h.add(R(f,v,.3,E(),d,v/2,0)),h.add(R(f,_,.3,E(),d,t-_/2,0));let y=F("#F4F0E4");for(let[z,k,q,ee]of[[d-f/2,u,.1,g+.1],[d+f/2,u,.1,g+.1],[d,u+g/2,f+.2,.1],[d,u,.05,g]])h.add(R(q,ee,.36,y,z,k,0));h.add(R(f+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,w=F(o,{roughness:.9});h.add(R(f+3,t,.2,w,d,t/2,-D)),h.add(R(.2,t,D,w,d-f/2-1.4,t/2,-D/2)),h.add(R(.2,t,D,w,d+f/2+1.4,t/2,-D/2)),h.add(R(f+3,.2,D,F("#8A6A4A"),d,v-c,-D/2)),h.add(R(f+3,.2,D,w,d,u+g/2+.5,-D/2));let b=new lt("#FFC880",a?9:2.5,7,1.4);b.position.set(d,u+.6,-1.2),h.add(b);let C=zt(f+2.6,t*.6,"#FFD9A0",a?.35:.08);C.position.set(d,u,-D+.12),h.add(C);let S=R(f-.04,g,.06,F("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let z=0;z<10;z++){let k=R(f-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(k),A.push([k,z])}let P=z=>{let k=Math.max(.001,g*z);S.scale.y=k/g,S.position.y=u+g/2-k/2,S.visible=z>.01,A.forEach(([q,ee])=>{let $=u+g/2-(ee+.5)*g/10;q.visible=z>.01&&$>u+g/2-k,q.position.y=$})};return P(0),h.userData={persiana:P,luz:z=>{b.intensity=z?9:2.5,C.material.emissiveIntensity=z?.35:.08},win:s,lamp:b},h.children.forEach(z=>{z.castShadow=z.castShadow??!0,z.receiveShadow=!0}),h}function oh(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new le;l.add(R(i,s,r,F(e,{roughness:.9}),0,s/2,-r/2));let c=new W(new ft(.01,i*.62,2.4,4,1),F(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(R(1.1,2.1,.1,F(o),0,1.05,.02)),l.add(R(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Oe({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(R(1.3,1.2,.06,h(),d,u,.03)),l.add(R(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(R(2,.2,1.2,F("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function rh(n=4){let e=new le,t=Xe(n*7);for(let i=0;i<n*3;i++){let s=new W(new gt(.42+t()*.12,12,10),F(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function xu(n=8,e="#E8E2D2"){let t=new le;for(let i=0;i<=n*4;i++)t.add(R(.1,1.3,.05,F(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(R(n,.08,.06,F(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function _a(){let n=new le,e=Xe(4);for(let t=0;t<7;t++){let i=new W(new gt(.35,12,10),F("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new W(new gt(.08,10,8),F(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function vg(){let n=new le;n.add(R(2.2,2,1.8,F("#8A6A4A",{roughness:.9}),0,1,0));let e=R(2.6,.12,2.3,F("#5A3E2A"),0,2.12,0);return n.add(e),n.add(R(.8,1.5,.05,F("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function bu(){let n=Ue(256,128,t=>{t.fillStyle="#F4F0E4",t.fillRect(0,0,256,128),t.fillStyle="#2A2A34";for(let i=0;i<6;i++)t.beginPath(),t.arc(20+i*44,30+i%2*60,16,0,7),t.fill()}),e=new W(new gt(.16,20,14),new Oe({map:n,roughness:.5}));return e.castShadow=!0,e}function gr(n=.6){let e=R(n,n*.8,n,F("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(R(n*1.01,.06,.15,F("#E8D8A8"),0,n*.4,0)),e}function Tu(){let n=new le;n.add(R(.04,1.4,.04,F("#E8667F"),0,.7,0));let e=new W(new gt(.28,16,12),new Oe({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new W(new pn(.18,.04,8,16,Math.PI*1.2),F("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=ct("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function wu(n=.9,e=1.2){let t=Ue(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new le;i.add(R(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new W(new Ie(n,e),F("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Ru(n=.9,e=1.2){let t=Ue(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new le;i.add(R(n+.08,e+.08,.04,"#111",0,0,0));let s=new W(new Ie(n,e),F("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Cu(n="#FFF2C0"){let e=new le,t=R(.07,.07,.26,F("#3A3A44",{metalness:.5}),0,0,0);e.add(t);let i=ct(n,.9,.95);i.position.z=.16,e.add(i);let s=new lt(n,4,4,1.5);return s.position.z=.25,e.add(s),e.userData.on=r=>{i.visible=r>.5,s.intensity=r>.5?4:0},e}var _g=(n,e)=>{we.quarto(n,e);let t=wu();t.position.set(-3,2.8,-2.8),n.add(t)};we.cuartoYo=(n,e)=>{_g(n,e);let t=va({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=Tu();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Ru(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&Dn(n,600,120,2)};we.cuartoElla=(n,e)=>{we.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(R(2.4,.45,3.2,F("#6B4A33"),1.7,.25,-1.4)),n.add(R(2.3,.3,3,F("#F3EEE4"),1.7,.6,-1.4)),n.add(R(2.38,.22,2,F("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=Tu();t.position.set(-3.2,0,-2.2),n.add(t);let i=Ru();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=va({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=wu(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&Dn(n,600,120,2)};we.entreCasas=(n,e)=>{let t=!!e.night;n.background=new de(t?"#0A0C1E":"#9FC8E8"),n.fog=new ke(t?"#0E1028":"#CFE0EE",.02),Ot(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&Dn(n,1600,120,5),ah(n,t?"#24301E":"#6E9A50");let i=va({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=va({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=xu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new He(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(pt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};we.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new ke(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Ot(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),ah(n,t?"#24301E":"#6E9A50");let s=R(200,.02,6,F(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=R(200,.1,2,F("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let f=oh({col:d,roof:u,night:t});f.position.set(h,0,-3),n.add(f)}let a=rh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=rh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=rh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])_n(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));ti(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new He(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(pt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};we.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new ke(t?"#E8A880":"#F2E2C8",.015),Ot(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),ah(n,"#6E9A50");let i=xu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=_a();s.position.set(1.6,0,-1.2),n.add(s);let r=_a();r.position.set(2.8,0,-2.6),n.add(r);let o=vg();o.position.set(-2.4,0,-3.2),n.add(o);let a=oh({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=oh({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])_n(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new He("#E9EEFF","#6A5A4A",1.05)),n.add(pt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};we.esquina=(n,e)=>{we.barrio(n,e)};we.concurso=n=>{n.background=new de("#140C24"),n.fog=new ke("#1A1030",.03);let e=R(20,.2,12,F("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=ct(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Ze(qt(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=R(1.2,1.1,.7,F("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(R(1.3,.1,.8,F("#F2C14E"),0,1.12,-.6)),n.add(new He("#B8A8FF","#2A1A3A",.9));let s=new Hn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};we.residencia=n=>{n.fog=new ke("#E8DCC8",.02),n.add(Ii(20,14,"#8A6A4A")),n.add(R(20,4,.3,F("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(R(1,2.2,.08,F("#6B4A33"),-7+e*2,1.1,-3.2));let t=Ze(qt([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new He("#FFFFFF","#9A8A70",1)),n.add(pt("#FFE8C8",2,[-6,8,6],12,40))};var Qr=(n,e,t=200,i=200,s={})=>{let r=new W(new Ie(t,i),F(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Jr=(n,e=1.6)=>new Oe({color:n,emissive:n,emissiveIntensity:e});function lh(n=2.6){let e=new le,t=Ue(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Ze(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function Ag(n="#FFB25A"){let e=new le,t=new W(new ft(.16,.12,.34,12),Jr(n,1.8));e.add(t);let i=ct(n,1,.55);return e.add(i),e}var Mg=(n,e,t,i=3)=>{let s=Xe(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new W(new gt(.07+s()*.06,10,8),Jr(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=R(.02,.12,.02,F("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};we.desvan=(n,e)=>{let t=!!e.night;n.background=new de("#1A120C"),n.fog=new ke("#2A1C12",.05),n.add(Ii(16,14,"#6A4630"));for(let h of[-1,1]){let d=R(16,.15,7.5,F("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(R(16,6,.2,F("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=R(.22,.22,9,F("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Xe(6);for(let h=0;h<9;h++){let d=gr(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=R(1.4,.8,.7,F("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(R(1.44,.1,.74,F("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=zt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=_s(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new W(new gt(.09,12,10),Jr("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(R(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new lt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new He("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=ct("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};we.pasillo=(n,e)=>{n.background=new de("#1A1036"),n.fog=new ke("#2A1850",.045),Dn(n,1600,120,7),Qr(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=Xe(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let f of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(f>0?1:0))%i.length],m=R(.12,2.6,1.3,F("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=R(.08,2.3,1.05,F(E,{roughness:.6}),f*2.35,1.15,g);n.add(p);let v=new W(new gt(.05,8,6),Jr("#F2C14E",.6));v.position.set(f*2.29,1.1,g+.35),n.add(v)}let s=new le,r=new le;r.position.set(0,0,.55),s.add(r);let o=R(.08,2.3,1.05,F("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new W(new gt(.05,8,6),Jr("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Ze(qt(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=zt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let f=ct(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);f.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(f)}n.add(new He("#D8C8FF","#4A3070",1));let h=new lt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new lt("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};we.playaSueno=(n,e)=>{n.fog=new ke("#E8B8E0",.018),Ot(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=ct("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new W(new ui(4,40),new Ke({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=Qr(n,"#F8EEF2",200,200),r=new W(new Ie(400,200),new Oe({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=R(400,.02,.3,F("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Xe(4);for(let l=0;l<70;l++){let c=ct("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new le;c.add(R(.18,2.8,.18,F("#E8A0C0"),0,1.4,0));let h=ct(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new He("#FFE0F6","#B88AC8",1.15)),n.add(pt("#FFD8E8",2,[8,14,-6],14,60))};we.baile=(n,e)=>{n.background=new de("#0E0A28"),n.fog=new ke("#1A1240",.03),Dn(n,2400,160,3),Ot(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),Qr(n,"#3A2A5A");let t=new W(new ui(3.2,48),new Oe({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),Mg(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=_a();c.position.set(a,0,l),n.add(c)}let i=Xe(9),s=[];for(let a=0;a<22;a++){let l=Ag(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new He("#B8A8FF","#2A1A3A",.7));let r=new Hn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new lt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};we.estadio=(n,e)=>{n.background=new de("#0A1020"),n.fog=new ke("#18203A",.02),Dn(n,800,160,5);let t=Ue(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new W(new Ie(40,40),new Oe({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new le,r=F("#FFFFFF",{roughness:.4});s.add(R(.12,2.4,.12,r,-3.6,1.2,0),R(.12,2.4,.12,r,3.6,1.2,0),R(7.3,.12,.12,r,0,2.4,0));let o=new W(new Ie(7.2,2.4),new Ke({color:"#FFFFFF",transparent:!0,opacity:.18,side:wt}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(R(60,1,2,F(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Xe(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Kc(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=ct("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new He("#D8E0FF","#2A3A2A",1));let c=pt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};we.concierto=(n,e)=>{n.background=new de("#0C0820"),n.fog=new ke("#140C2C",.025);let t=R(14,.6,6,F("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),Qr(n,"#140E26").position.y=-.01;let i=zt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Xe(4);for(let l=0;l<9;l++){let c=ct(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=_s(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new le;r.add(R(.03,1.4,.03,F("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new W(new gt(.06,12,10),F("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=ct(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new He("#B8A8FF","#2A1A3A",.8));let a=new Hn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};we.gris=(n,e)=>{n.background=new de("#1C1E24"),n.fog=new ke("#262830",.06),Qr(n,"#4A4C54"),n.add(R(14,7,.2,F("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(R(.2,7,12,F("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(R(.2,7,12,F("#52545C",{roughness:1}),4.2,3.5,0));let t=zt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(R(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(R(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new He("#A8B0C8","#2A2A30",.6));let i=new Hn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new lt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};we.labSueno=(n,e)=>{we.lab(n,e),_u(n,-1.4,-1.6,"#4A86C7");let t=new le;t.add(R(.12,1.4,.12,F("#3A3A44"),0,.7,0)),t.add(R(1,.7,.1,F("#20242E"),0,1.7,0));let i=zt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var Aa=(n,e,t=200,i=200,s={})=>{let r=new W(new Ie(t,i),F(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Fu=(n,e=1.6)=>new Oe({color:n,emissive:n,emissiveIntensity:e}),Sg=(n="#8C8A84",e=3)=>{let t=Ue(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Xe(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=vn,t},As=(n,e,t,i,s,r,o,a=3)=>{let l=Sg(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new W(new Rn(n,e,t),new Oe({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function xg(n="#B8B4A8"){let e=new le,t=new W(new ft(.09,.09,.22,18),F(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new W(new ft(.092,.092,.12,18,1,!0),new Oe({map:Ue(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function bg(){let n=new le;n.add(R(1,.8,.6,F("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(R(.3,.3,.02,F("#222"),-.25,.5,.31));let e=new W(new gt(.04,10,8),Fu("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(R(.02,.4,.02,F("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function Tg(){let n=new le;n.add(R(.36,.5,.08,F("#3A3C3A",{metalness:.5}),0,0,0));let e=new le;e.position.set(0,0,.06),n.add(e);let t=R(.05,.4,.05,F("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new W(new gt(.07,14,10),F("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function wg(){let n=new le;n.add(R(8,2.4,2.5,F("#F2B830",{roughness:.5}),0,1.6,0)),n.add(R(8.02,.25,2.52,F("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(R(.85,.7,.02,F("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new W(new ft(.45,.45,.3,16),F("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=ct("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function Pu(n,e,t={}){let i=qt(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Ze(i,e,e*(t.h||260)/(t.w||1100))}we.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new de("#0E0F10"),n.fog=new ke(t?"#050608":"#2A2A28",t?.08:.045);let s=As(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(As(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(As(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(As(.3,4,10,4.2,2,-.5,"#84827C")),n.add(As(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(R(.25,.3,10,F("#6A6862"),b,3.35,-.5));let r=new le;r.add(R(2,.2,.3,F("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),R(.2,2.6,.3,F("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),R(.2,2.6,.3,F("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new le;o.position.set(-.85,0,-3.3),n.add(o);let a=F("#6E7670",{metalness:.7,roughness:.35}),l=R(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(R(1.6,.08,.04,F("#5A605C",{metalness:.7}),.85,b,.1));let c=new W(new pn(.26,.035,8,28),F("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let C=R(.5,.03,.03,F("#B8241A"),.85,1.25,.14);C.rotation.z=b*Math.PI/3,o.add(C)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=Tg();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Ze(qt(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=b=>{let C=new le,S=F("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])C.add(R(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])C.add(R(.96,.06,2.1,S,0,A,0)),C.add(R(.86,.14,1.96,F("#7A8A6A",{roughness:1}),0,A+.1,0)),C.add(R(.5,.1,.3,F("#D8D2C0"),0,A+.21,-.8));return C.position.set(b,0,-1.1),C};n.add(u(-3.3)),n.add(u(3.3));let f=new le;for(let b of[.9,1.5])f.add(R(1.4,.05,.35,F("#5A4A3A"),0,b,0));for(let b of[-.7,.7])f.add(R(.05,1.6,.35,F("#5A4A3A"),b,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let b=0;b<6;b++){let C=xg();C.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),f.parent.add(C),g.push(C)}n.userData.cans=g;let E=bg();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new le;m.add(R(.06,.7,.9,F("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(R(.08,.04,.8,F("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(R(1.4,.06,.8,F("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let C of[-.32,.32])n.add(R(.05,.75,.05,F("#3A2E22"),b,.375,.3+C))}if(e.museo){let b=Pu(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let p=Ze(Ue(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let v=[];for(let b of[-1.6,1.6]){let C=new W(new gt(.09,12,10),Fu("#FFD089",t?0:2.2));C.position.set(b,3.1,-.6),n.add(C),v.push(C),n.add(R(.22,.02,.22,F("#333"),b,3.2,-.6,!1))}let _=[];if(!t)for(let b of[-1.6,1.6]){let C=new lt("#FFC27A",11,10,1.4);C.position.set(b,2.9,-.4),C.castShadow=b<0,n.add(C),_.push(C)}let y=new He(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let b=zt(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let C=_s(2.2,8,"#FFE8B8",.3);C.position.set(0,1.4,-.6),C.rotation.set(-1.25,0,0),n.add(C);let S=new Hn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,C,S]}let D=Xe(5),w=[];for(let b=0;b<26;b++){let C=ct("#FFE8C0",.04,t?.2:.5);C.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(C),w.push(C)}n.userData.dust=w};we.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new ke(t?"#1A1E28":"#C8D0B8",t?.045:.022),Ot(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Aa(n,t?"#2A3A24":"#6E8A48");let i=Xe(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||_n(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new W(new gt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),F(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(As(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(R(1.5,2,.1,F("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=Pu(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=wg();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new He("#6A7A9A","#1A1E1A",.75));let a=new He("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=pt("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new Ke({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new W(new Rn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[f,g,E,m]=u.userData.p;u.position.set(f+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new He("#E9EEFF","#5A6A4A",.95)),n.add(pt("#FFD29A",2.6,[-12,16,10],16,70))};we.puente=(n,e)=>{let t=!!e.normal;n.fog=new ke("#C8D8E0",t?.02:.012),Ot(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new He("#E9EEFF","#5A6A4A",1)),n.add(pt("#FFE2B0",2.6,[-10,18,12],16,80));let i=Xe(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){Aa(n,"#6E8A48");let l=new W(new Ie(3.4,60),F("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(R(1.4,.14,5,F("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(R(.08,.5,5,F("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(R(.1,.6,.1,F("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)_n(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=As(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),Aa(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)_n(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new W(new Ie(14,200),new Oe({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new W(new sr(1.5+i()*2),F("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=F("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=R(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new W(new Vr(new ir(c),60,.025,6),F("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(R(.015,1,.015,F("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(R(.18,1.6,.18,F("#6A4630"),d,.8,l*.55))}n.userData.y=0};we.marte=(n,e)=>{n.background=new de("#10141A"),n.fog=new ke("#1A2028",.05);let t=new W(new ft(2.4,2.4,30,28,1,!0),new Oe({color:"#C8CCD0",side:ln,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(R(3.6,.1,30,F("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new W(new pn(2.38,.05,6,28),F("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=zt(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(R(.6,.5,1.8,F("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(R(.05,.6,.5,F("#2A3A4A"),r*1.75,1.6,-o*3));let a=zt(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Ze(qt(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new He("#E8F0FF","#4A505A",.9));let s=new lt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};we.biosfera=(n,e)=>{n.fog=new ke("#F2D8B0",.012),Ot(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),Aa(n,"#D8B07A");let t=Xe(31);for(let l=0;l<8;l++){let c=new W(new fi(8+t()*8,6+t()*6,6),F("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new le;c.add(R(.3,1.6+t(),.3,F("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Oe({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:wt}),s=new Ke({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new fi(l,l*1.1,4,4);for(let u of[i,s]){let f=new W(d,u);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new gt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new W(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)_n(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Ze(qt(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new He("#FFF0DC","#B08A6A",1.05)),n.add(pt("#FFD29A",3,[-14,16,10],20,70))};we.noria=(n,e)=>{we.parque(n,{dusk:!0});let t=new le,i=F("#E8E2D2",{metalness:.4,roughness:.4}),s=new W(new pn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=R(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new le;c.add(R(.7,.6,.6,F(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=ct("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=R(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var Kr=(n,e=1.6)=>new Oe({color:n,emissive:n,emissiveIntensity:e}),Wn=(n="#A8ACB0")=>F(n,{metalness:.75,roughness:.32}),Ma=(n="#9EA2A6")=>{let e=Ue(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=Xe(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Oe({map:e,metalness:.7,roughness:.35})},Iu=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Ze(qt([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function Du(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new Qn(e);i.colorSpace=Jt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new W(new Ie(.5,.31),new Ke({map:i,toneMapped:!1}));return r.userData.set=s,r}function Rg(){let n=new le;n.add(R(.36,.9,.03,Wn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new W(new ft(.04,.04,.02,16),Kr("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Ze(qt([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new W(new ft(.05,.05,.025,16),Kr("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Ze(qt(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new le;for(let o=0;o<5;o++)r.add(R(.16,.012,.01,F("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}we.ascensor=(n,e)=>{n.background=new de("#08090C"),n.fog=new ke("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=Ma("#A4A8AC"),o=R(2.6,.1,2.4,F("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new W(new Ie(2.4,2),new Oe({map:(()=>{let w=Ue(256,256,b=>{b.fillStyle="#4A4440",b.fillRect(0,0,256,256),b.strokeStyle="#3A3430",b.lineWidth=3;for(let C=0;C<256;C+=32)b.beginPath(),b.moveTo(C,0),b.lineTo(C,256),b.stroke(),b.beginPath(),b.moveTo(0,C),b.lineTo(256,C),b.stroke()});return w.wrapS=w.wrapT=vn,w.repeat.set(3,3),w})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(R(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(R(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(R(2.6,.08,2.4,F("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(R(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(R(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(R(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Wn("#B4B8BC"),c=R(.56,2.2,.04,l,-.28,1.1,i+.03),h=R(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(R(.01,2.2,.045,F("#555"),0,1.1,i+.04));let d=R(1.1,2.2,.02,F("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=w=>{c.position.x=-.28-.55*w,h.position.x=.28+.55*w};let u=Du(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let f=Rg();f.position.set(.85,1.25,i+.05),n.add(f),n.userData.botonera=f;for(let w of[-1,1])n.add(R(.04,.04,1.8,Wn("#C8CCD0"),w*(t-.06),.95,-.5));let g=new W(new Ie(1.5,1.5),new Oe({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(R(.02,1.56,1.56,F("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Ze(qt(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=zt(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let p=new lt("#FFF4E4",10,7,1.4);p.position.set(0,s-.3,-.3),p.castShadow=!0,n.add(p);let v=new W(new Rn(.3,.06,.14),Kr("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new lt("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new He("#E8ECF0","#3A3634",.5);n.add(y);let D=new lt("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(w,b=0)=>{let C=Math.max(0,Math.min(1,w))*(1-b);m.material.emissiveIntensity=1.6*C,p.intensity=10*C,v.material.emissiveIntensity=2.4*(1-C),_.intensity=9*(1-C),y.intensity=.14+.36*C,y.color.set(C>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-C)},n.userData.luz(e.luz??1)};we.rellano=(n,e)=>{let t=!!e.night;n.background=new de("#14120F"),n.fog=new ke("#2A2620",.035),n.add(pi(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(R(6.38,3.4,.3,F(i),-3.81,1.7,-3.2)),n.add(R(6.38,3.4,.3,F(i),3.81,1.7,-3.2)),n.add(R(1.24,1.2,.3,F(i),0,2.8,-3.2)),n.add(R(.3,3.4,10,F(i),-5,1.7,0)),n.add(R(.3,3.4,10,F(i),5,1.7,0)),n.add(R(14,.2,10,F("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(R(6.3,.9,.02,F(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(R(1.5,.12,.1,Wn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(R(.12,2.3,.1,Wn("#9EA2A6"),E*.69,1.13,-3.02));let s=new le;s.add(R(1.3,.05,1.6,F("#4A4440"),0,0,-.8)),s.add(R(1.3,2.2,.05,Ma(),0,1.1,-1.6));for(let E of[-1,1])s.add(R(.05,2.2,1.6,Ma(),E*.65,1.1,-.8));let r=zt(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new lt("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Wn("#B4B8BC"),l=R(.62,2.2,.05,a,-.31,1.1,-3),c=R(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=Du(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=R(.1,.2,.03,Wn(),.95,1.2,-3.03);n.add(d);let u=new W(new gt(.03,10,8),Kr("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let f=Iu(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(f.position.set(1.5,2.2,-3.03),n.add(f),e.portal){let E=new le;for(let p=0;p<12;p++)E.add(R(.36,.26,.04,F("#8E6242"),-.6+p%4*.4,-Math.floor(p/4)*.3,0)),E.add(R(.2,.02,.02,F("#2A2A2A"),-.6+p%4*.4,-Math.floor(p/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(R(.04,2.6,2,F("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Ze(qt(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(R(1,2.2,.06,F("#6B4A33"),E,1.1,-3.02));let p=Ze(qt([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);p.position.set(E,1.85,-2.98),n.add(p);let v=new W(new gt(.04,10,8),Wn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new W(new gt(.16,14,10),Kr("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let p=new lt("#FFE0B0",t?6:9,9,1.4);p.position.set(E,2.9,-.8),p.castShadow=E<0,n.add(p)}n.add(new He("#F4ECE0","#4A4034",t?.35:.6))};var Qe=3;we.hueco=(n,e)=>{n.background=new de("#05060C"),n.fog=new ke("#0A0C18",.02),Ot(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),Dn(n,1600,220,3),ti(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*Qe,i=F("#3A3A42",{roughness:.95});n.add(R(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(R(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*Qe;if(n.add(R(4.1,.14,.1,F("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(R(4.1,.25,3.2,F("#5A5A64"),0,-.12,-.8)),g<=12){let m=Ze(qt([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(R(.08,t,.08,Wn("#7A7E84"),g*1.75,t/2,-1.6));let s=new le,r=Ma("#A4A8AC");s.add(R(2.6,.12,2.2,F("#3A3634"),0,0,0)),s.add(R(2.6,.1,2.2,F("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(R(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(R(2.6,2.8,.08,r,0,1.4,-1.1));let o=zt(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new lt("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new lt("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(R(.4,.3,.4,F("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=R(.18,.3,.18,F("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new W(new ft(.6,.6,.3,24),Wn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new W(new ft(.018,.018,1,6),Wn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=R(.7,1.6,.3,F("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new W(new ft(.03,.03,1,6),Wn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let D=Math.max(.01,(t-m)*(1-E));_.scale.y=D,_.position.set(y,t-D/2,-.6)});let p=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*Qe);for(let g=0;g<=12;g+=2){let E=new lt("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*Qe+2.2,.4),n.add(E)}n.add(new He("#6A78A8","#101018",.5));let f=Xe(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let p=f()<.55,v=zt(.8,1,p?"#FFD890":"#1A1C2A",p?1.2:.2);v.position.set(E*(3.2+m*1.6),g*Qe+1.6,-.6),n.add(v),n.add(R(1.4,Qe,.2,F("#2A2A34"),E*(3.2+m*1.6),g*Qe+Qe/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};we.feria=(n,e)=>{n.background=new de("#2A2018"),n.fog=new ke("#6A5A44",.03),n.add(pi(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(R(.25,12,.25,F("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new W(new pn(2,.1,6,24,Math.PI),F("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=zt(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(R(.6,.4,.02,F(t[l%3]),-8+l*2,9.5,-6));let i=F("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(R(.25,9,.25,i,l*1.4,4.5,-3));n.add(R(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=R(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new W(new ft(.4,.4,.15,18),F("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new le;r.add(R(2.4,.15,1.8,F("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(R(.08,1,.08,i,l*1.1,.5,.8));r.add(R(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=R(.16,.2,.16,F("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new W(new ft(.03,.03,1,6),F("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Ze(qt(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new He("#FFE8C8","#5A4A38",.9)),n.add(pt("#FFD8A0",2.2,[-6,14,8],14,50))};var Sa=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));we.escalera=(n,e)=>{n.background=new de("#1E1A16"),n.fog=new ke("#2A2620",.04),n.add(pi(14,10,"#C8B898","#B8A888",8)),n.add(R(16,7,.3,F("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=R(.34,.18*(15-o),1.6,F("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(R(.34,.03,1.62,F("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(R(2.6,2.6,1.6,F("#B8A890"),-4.3,1.3,-1.3));let i=new W(new ft(.03,.03,5.7,8),F("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(R(.025,.9,.025,F("#2A2A2E"),-2.9+o*.32,Sa(-2.9+o*.32)+.45,-.5));let s=Iu(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=zt(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new lt("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new He("#F4ECE0","#4A4034",.6))};var vr=[],Cg=999,Lu=n=>n+1<$r.length?$r[n+1]:Cg,ch=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Uu=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[ch(i,s,t),s,ch(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,ch(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},ie=(n,e)=>{let t=$r[n],i=Lu(n),s=Math.min(i,670)-t;vr.push([(r,o)=>nh(r,o,Uu(e(s,t),s)),t,i])},Fg=(n,e,t)=>{let i=Math.min(e,670)-n;vr.push([(s,r)=>nh(s,r,Uu(t(i,n),i)),n,e])},Pg=(n,e,t)=>{let i=$r[n],s=Lu(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=ih(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>Fg(r[l],r[l+1],a))},Ln=n=>({tipo:"humano",...n}),Ae=(n={})=>Ln({glow:.1,...n});var Ig=(n={})=>Ln({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n});var L=(n,e,t=0)=>ih(e,n+t)-n,_e=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Ze(qt(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},ve=(n,e,t,i,s={})=>_e(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s});var N=(n,e,t,i=1e9,s)=>{let r=Re(t,t+.2,e)*(1-Re(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&zn(n,s)},es=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),Nu=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})};var Er=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),dh=n=>n.pose({armL:[12,8],armR:[95,0]});var Yt=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)};var ni=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e},An=n=>{let e=[-1,1].map(t=>{let i=ct("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},Dg=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=Ze(pr(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),zn(a,r)})},uh=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=ct(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})};var nn=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Ln({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},ht=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Ze(Mu(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l},Di=(n,e,t,i,s=56)=>Au(n,e,t,{w:640,h:400,size:s}),_r=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)},fh=(n,e,t=5,i=7)=>{let s=new lt("#FFD8A0",t,i,1.6);return s.position.set(...e),n.add(s),s},Te=(n={})=>Ln({outfit:"rosa",hair:"long",hairc:"#1E120C",lash:!0,glow:.1,...n}),ph=(n={})=>Ln({outfit:"verde",hair:"old",hairc:"#E8E2D8",glasses:!0,lash:!0,glow:0,...n}),Bu=(n={})=>Ln({outfit:"azul",hair:"bun",hairc:"#3A2418",lash:!0,glow:0,...n}),Ou=(n={})=>Ln({outfit:"laranja",glasses:!0,glow:0,...n}),Hu=(n={})=>Ln({outfit:"terno",hair:"old",hairc:"#6A5A4A",glow:0,...n}),mh=(n={})=>Ln({outfit:"terno2",glow:0,...n}),Ge=(n={})=>({amb:"ascensor",ambo:n,k:1.3}),mi=n=>n.pose({armL:[22,115],armR:[22,115]}),ts=(n,e)=>{let t=new I,i=new I;e.arms.R.hand.getWorldPosition(t),e.arms.L.hand.getWorldPosition(i),n.position.set((t.x+i.x)/2,(t.y+i.y)/2-.02,(t.z+i.z)/2+.12)},je={exposure:1.08,bloom:.32,bloomT:.94,vig:.6},et=(n,e,t=0)=>n.userData.luz(e,t),gh=(n,e,t)=>n>e&&n<t&&Math.sin(n*37)>.2?1:0,on=(n=-.5,e=.3,t=1.35,i=0)=>[[n,1.6,3.1+i],[0,t,-.7],[e,1.55,2.7+i],[0,t,-.7]],Et=[-.45,-.7],yt=[.45,-.8],rt=n=>{n.pose({armL:[8,6],armR:[8,6]}),Yt(n)},De=-.42,Eh=(n,e,t="#7FD0FF",i=.7)=>{let s=new W(new na(e-.03,e,64),new Ke({color:t,transparent:!0,opacity:i,side:wt,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.y=.02,n.add(s),s},yr=(n,e,t="#9FE0FF")=>{let i=new W(new gt(e,32,20),new Ke({color:t,transparent:!0,opacity:.14,depthWrite:!1}));n.add(i);let s=new W(new gt(e,32,20),new Ke({color:t,transparent:!0,opacity:.35,wireframe:!0,depthWrite:!1}));return i.add(s),i},hh=(n,e=5,t=[-8,8,6,14,-20])=>{let i=[],s=Xe(9),r=["#FF5A7A","#FFD25A","#7AE0FF","#B88AFF","#7AFF9A"];for(let o=0;o<e;o++){let a=new le,l=[];for(let c=0;c<18;c++){let h=ct(r[o%5],.5,0);a.add(h),l.push([h,Math.cos(c/18*6.28),Math.sin(c/18*6.28)])}a.position.set(t[0]+s()*(t[1]-t[0]),t[2]+s()*(t[3]-t[2]),t[4]),n.add(a),i.push([a,l,s()*3])}return(o,a=1)=>i.forEach(([l,c,h])=>{let d=(o+h)%2.2/2.2;c.forEach(([u,f,g])=>{u.position.set(f*d*3,g*d*3-d*d,0),u.material.opacity=a*(1-d)*(d>.05?1:0)})})},Lg=(n,e={})=>Ue(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),e.bat!=null&&(t.strokeStyle="#fff",t.lineWidth=6,t.strokeRect(380,30,110,50),t.fillStyle=e.bat<10?"#FF4A3A":"#7AE07A",t.fillRect(386,36,98*e.bat/100,38),t.font="700 34px Inter",t.fillStyle="#fff",t.fillText(e.bat+"%",300,70)),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),xa=(n,e)=>{let t=new le;t.add(R(.62,1.18,.06,F("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new W(new Ie(.56,1.04),new Ke({map:Lg(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t},ii=(n=8)=>{let e=new le;e.add(R(.5,.03,.32,F("#C8CCD0",{metalness:.7,roughness:.3}),0,0,0));let t=[];for(let i=0;i<n;i++){let s=R(.1,.04,.07,F(i%2?"#E8C890":"#7A4A2A"),-.18+i%4*.12,.035,-.08+Math.floor(i/4)*.14);e.add(s),t.push(s)}return e.userData.T=t,e},Ar=()=>{let n=new le;n.add(R(.26,.3,.14,F("#F4F0E4",{roughness:.9}),0,.15,0));for(let e=0;e<6;e++){let t=new W(new gt(.035,10,8),F("#9ACA5A",{roughness:.3}));t.position.set(-.06+e%3*.06,.32+Math.floor(e/3)*.05,0),n.add(t)}return n},Ug=()=>new W(new gt(.04,10,8),F("#9ACA5A",{roughness:.3})),zu={exposure:1,vig:.65,bloom:.2},Ms=(n,e,t,i={})=>{let s=_e(n,[" "],t,e,i);s.visible=!1;let r=null,o=a=>(a!==r&&(r=a,a&&(s.material.map.dispose(),s.material.map=qt([a],{bg:i.bg||"#2A2A34",fg:i.fg||"#F2C14E",size:i.size||72,w:i.w||720,h:i.h||150}))),s.visible=!!a,s);return o.m=s,o},ba=(n,e=.35)=>{let t=Ze(pr("\u2665","#E8667F",170),e,e*.8);return t.renderOrder=6,n.add(t),t};ie(0,(n,e)=>{let t=L(e,"7");return{...Ge({luz:0}),fov:30,atores:[Ae({x:-.3,z:-.6,eyes:[[0,"wide"],[1.6,"lookl"],[2.6,"look"]]})],extra:i=>{et(i,0);let s=_e(i,["ENTRE EL PISO 7 Y EL 8"],2,[0,2.2,-.3]);return{update:(r,o,a)=>{i.userData.display.userData.set("7\xBD"),N(s,r,t,99,a)}}},c:[[0,1.5,2.2],[0,1.4,-.8],[0,1.6,3.2],[0,1.4,-.8]],range:2,look:je}});ie(1,(n,e)=>{let t=L(e,"boton"),i=L(e,"nada");return{...Ge(),fov:28,atores:[Ae({x:.35,z:-1,eyes:[[0,"look"],[i,"flat"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t?75+Math.sin(r*14)*4:12,0]})})],extra:s=>{let r=ve(s,["LA ALARMA NO HACE NADA"],1.6,[.5,2.15,-1.1]);return{update:(o,a,l)=>{let c=o<t?gh(o,0,t):0;et(s,o<t?c:0),s.userData.botonera.userData.alarm.material.emissiveIntensity=o>t?.3+Math.abs(Math.sin(o*14)):.3,N(r,o,i,99,l)}}},c:[[.95,1.6,1.4],[.7,1.35,-1.5],[.9,1.55,1],[.8,1.35,-1.5]],range:1.5,look:je}});ie(2,(n,e)=>{let t=L(e,"nora"),i=L(e,"vecina"),s=L(e,"gusta"),r=L(e,"portal"),o;return{...Ge({luz:0}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"look"],[s,"heart"]]}),Te({x:yt[0],z:yt[1],eyes:[[0,"lookl"],[s,"happy"]]})],extra:(a,l,c)=>{et(a,0),o=An(c[0]);let h=ve(a,["MEDIO METRO"],1.1,[0,1.9,-.3],{size:80}),d=_e(a,["NORA \xB7 TU VECINA NUEVA"],1.9,[.4,2.2,-.6],{bg:"#D66A86",fg:"#fff"}),u=ve(a,["TE GUSTA DESDE EL PRIMER D\xCDA"],2.2,[0,2.2,-.4]),f=ba(a);return{update:(g,E,m)=>{N(h,g,.1,t-.1,m),N(d,g,t,s-.1,m),N(u,g,s,99,m),o(Re(s,s+.5,g)),f.visible=g>s,f.position.set(Et[0],1.95+g*.4%.3,Et[1]),f.scale.setScalar(1+Math.abs(Math.sin(g*6))*.3),zn(f,m)}}},c:[[-.6,1.6,2.6],[0,1.25,-.7],[.4,1.55,2.3],[0,1.25,-.7]],range:1.8,look:je}});ie(3,(n,e)=>{let t=L(e,"rebobinemos");return{...Ge({luz:0}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"look"],[t,"shut"]]}),Te({x:yt[0],z:yt[1],eyes:[[0,"lookl"],[t,"shut"]]})],extra:i=>{et(i,0);let s=_e(i,["\xBFC\xD3MO HAS LLEGADO AQU\xCD?"],2,[0,2.2,-.4]),r=_e(i,["\u25C0\u25C0 REBOBINEMOS"],1.7,[0,2.2,-.4],{bg:"#FBF7EC",fg:"#C9361F"});return{update:(o,a,l)=>{N(s,o,.1,t-.1,l),N(r,o,t,99,l)}}},c:on(0,0),range:2,look:je,lookFn:i=>i>t?{exposure:1.2,bloom:.55,vig:.7}:{}}});ie(4,(n,e)=>{let t=L(e,"11"),i=L(e,"vives");return{amb:"barrio",ambo:{night:!0},fov:34,k:1.25,atores:[],extra:s=>{let r=[_e(s,["31 DE DICIEMBRE"],2.4,[0,3.3,2],{bg:"#C9361F",fg:"#fff"}),ve(s,["23:00"],1.2,[0,2.6,2],{size:100,w:500}),ve(s,["VIVES EN EL 3\xBA"],1.9,[0,1.9,2])],o=hh(s,3,[-8,8,8,14,-26]);return{update:(a,l,c)=>{N(r[0],a,.1,99,c),N(r[1],a,t,99,c),N(r[2],a,i,99,c),o(a,.5)}}},c:[[0,2.4,8],[0,2.8,2],[0,2.6,7],[0,3,2]],range:4,blur:6,look:{exposure:1.05,bloom:.5}}});ie(5,(n,e)=>{let t=L(e,"abuela"),i=L(e,"turrones");return{amb:"sala",ambo:{night:!0},fov:30,atores:[Bu({x:.7,z:.2,talk:[[0,3]],pose:(s,r)=>r>i?s.pose({armL:[12,8],armR:[70,40]}):Er(s,r)}),Ae({x:-.6,z:.3,eyes:[[0,"flat"],[i,"look"]],pose:(s,r)=>r>i+.4?mi(s):s.pose()})],extra:(s,r,o)=>{let a=ii();a.scale.setScalar(1.2),s.add(a);let l=[ve(s,["A CASA DE LA ABUELA \xB7 PISO 12"],2.2,[0,2.3,.2]),_e(s,["TURRONES"],1.2,[-.5,1.95,.4])];return{update:(c,h,d)=>{let u=Re(i,i+.6,c),f=ni(o[0]),g=ni(o[1]);a.position.set(Rt(f.x-.1,g.x+.25,u),Rt(f.y,g.y,u),Rt(f.z,g.z,u)+.15),a.visible=c>i-.4,N(l[0],c,t,99,d),N(l[1],c,i,99,d)}}},c:[[0,1.6,3.6],[0,1.3,.2],[0,1.6,3],[0,1.3,.2]],range:2.4}});ie(6,(n,e)=>{let t=L(e,"abre"),i=L(e,"nora"),s=L(e,"uvas");return{amb:"rellano",ambo:{piso:3},fov:30,atores:[Ae({x:-1,z:-1.6,eyes:[[0,"look"],[i,"wide"]],pose:(r,o)=>o<1?r.pose({armL:[22,115],armR:[80,0]}):mi(r)}),Te({x:-.15,z:-3.6,eyes:[[0,"look"],[i+.4,"happy"]],pose:r=>r.pose({armL:[12,8],armR:[45,30]})})],extra:(r,o,a)=>{let l=ii();r.add(l);let c=Ar();r.add(c);let h=_e(r,["UVAS PARA LAS CAMPANADAS"],2,[0,2.75,-2.6],{size:64}),d=An(a[0]);return{update:(u,f,g)=>{r.userData.doors(Re(t-.2,t+1,u)),ts(l,a[0]);let E=ni(a[1]);c.position.set(E.x,E.y-.25,E.z+.05),N(h,u,s,99,g),d(Re(i,i+.5,u))}}},c:[[1.8,1.6,2.4],[.2,1.3,-2.2],[1.4,1.55,2],[.1,1.3,-2.4]],range:3.2}});ie(7,(n,e)=>{let t=L(e,"suscribete"),i=L(e,"campanita");return{amb:"rellano",ambo:{piso:3,open:.9},fov:32,atores:[Ae({x:-1.6,z:-1,eyes:[[0,"happy"]],pose:(s,r)=>r<t?es(s,r):dh(s)}),Te({x:-2.3,z:-1.4,eyes:[[0,"happy"]],pose:es})],extra:s=>{let r=lh(2.6);r.position.set(1,1.9,-1.2),s.add(r);let o=uh(s,14,"#FFE27A"),a=ve(s,["\xA1ANTES DE QUE SE CIERRE!"],2.2,[.6,2.95,-1.3]);return{update:(l,c,h)=>{let d=Re(t-.3,t,l);r.scale.setScalar(Math.max(.01,d*(1+.06*Math.sin(l*8)*(l>t+1?1:0)))),r.rotation.z=l>i&&l<i+1.4?Math.sin(l*40)*.06:0,o(l,[1,1.9,-1.1,1.2],Re(i,i+.2,l)),N(a,l,.1,t-.2,h)}}},c:[[0,1.7,4.6],[-.2,1.6,-1.2],[0,1.7,4.2],[-.2,1.6,-1.2]],k:1.25,range:6,blur:4}});ie(8,(n,e)=>{let t=L(e,"vamos"),i=L(e,"nochevieja");return{amb:"rellano",ambo:{piso:3,open:1},fov:32,atores:[Ae({x:-.6,z:-1.2,eyes:[[0,"happy"],[t,"smug"]],move:s=>[Rt(-.6,-.25,Re(t,t+2,s)),0,Rt(-1.2,-3.5,Re(t,t+2.4,s))],pose:(s,r)=>r>t&&r<t+2.4?s.walk(r):s.pose()})],extra:s=>{let r=_e(s,["\xA1NO TE PIERDAS LA PR\xD3XIMA!"],2.2,[0,2.9,-1.4]),o=_e(s,["SOBREVIVIR A LA NOCHEVIEJA"],2.4,[0,2.9,-1.4],{bg:"#C9361F",fg:"#fff"});return{update:(a,l,c)=>{N(r,a,.1,t-.1,c),N(o,a,i-.3,99,c)}}},c:[[0,1.7,3.6],[0,1.4,-2.4],[0,1.6,2.6],[0,1.4,-3]],k:1.25,range:3}});ie(9,(n,e)=>{let t=L(e,"familia"),i=L(e,"12");return{...Ge({piso:3}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"wide"]],pose:mi}),Te({x:yt[0],z:yt[1],eyes:[[0,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[45,30]})})],extra:(s,r,o)=>{let a=ii();s.add(a);let l=Ar();s.add(l);let c=Di(s,["CENA EN CASA","DE SU T\xCDA \xB7 PISO 12"],1.3,[0,0,0]);c.position.set(.5,1.95,-.5);let h=An(o[0]);return{update:(d,u,f)=>{ts(a,o[0]);let g=ni(o[1]);l.position.set(g.x,g.y-.25,g.z+.05),N(c,d,t,99,f),h(.6)}}},c:on(-.4,.3),range:1.8}});ie(10,(n,e)=>{let t=L(e,"tambien"),i=L(e,"si"),s=L(e,"voz");return{...Ge({piso:3}),fov:28,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"wide"],[i,"happy"]],pose:mi}),Te({x:yt[0],z:yt[1],eyes:[[0,"happy"]],talk:[[0,t+.6]]})],extra:(r,o,a)=>{let l=ii();r.add(l);let c=ht(r,"\xBFAL 12? YO TAMBI\xC9N",1.5,[.5,2.2,-.7],60),h=ht(r,"s\xED\u2026 (GALLO)",1.2,[-.5,2.2,-.6],64),d=An(a[0]);return{update:(u,f,g)=>{ts(l,a[0]),N(c,u,.1,i-.2,g),N(h,u,i,99,g),d(Re(i,i+.3,u))}}},c:on(-.3,.2,1.35),range:1.8}});ie(11,(n,e)=>{let t=L(e,"noveno"),i=L(e,"dificil");return{amb:"rellano",ambo:{piso:9,portal:!1},fov:32,atores:[Te({x:1.2,z:-1.5,eyes:[[0,"happy"]],pose:s=>s.pose({armL:[60,70],armR:[60,70]})}),nn(4,{x:2.4,z:-1.8,pose:mi})],extra:(s,r,o)=>{let a=gr(.6);s.add(a);let l=gr(.5);l.position.set(3,0,-2.4),s.add(l);let c=[ve(s,["SE MUD\xD3 HACE 2 MESES"],2,[1,2.55,-1.6]),_e(s,["AL 9\xBA"],1,[1,2.55,-1.6],{size:90,w:420}),_e(s,["EL SITIO M\xC1S DIF\xCDCIL DEL MUNDO"],2.4,[1,2.55,-1.6],{bg:"#C9361F",fg:"#fff"})];return{update:(h,d,u)=>{let f=ni(o[0]);a.position.set(f.x,f.y-.3,f.z+.25),N(c[0],h,.1,t-.1,u),N(c[1],h,t,i-1.5,u),N(c[2],h,i-.8,99,u)}}},c:[[2.6,1.7,3],[1.6,1.4,-1.6],[1.8,1.6,2.4],[1.4,1.4,-1.6]],k:1.15,range:3}});ie(12,(n,e)=>{let t=L(e,"numeros"),i=L(e,"pensando");return{...Ge({piso:9}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"look"],[i,"down"]],pose:(s,r)=>s.pose({head:r>i?8:0})}),Te({x:yt[0],z:yt[1],eyes:[[0,"look"]],pose:s=>s.pose({armL:[12,8],armR:[55,40]})})],extra:(s,r,o)=>{let a=xa(["",""],{hora:"08:01"});a.scale.setScalar(.25),s.add(a);let l=[ve(s,["CADA MA\xD1ANA"],1.3,[0,2.2,-.5]),_e(s,["MIRANDO LOS N\xDAMEROS"],1.8,[0,2.2,-.5])],c=Di(s,["\xBFQU\xC9 LE DIGO?"],1,[0,0,0]);return c.position.set(-.9,2.1,-.5),{update:(h,d,u)=>{s.userData.display.userData.set(Math.max(0,9-Math.floor(h/1)),"\u25BC");let f=ni(o[1]);a.position.set(f.x,f.y+.12,f.z+.08),zn(a,u),N(l[0],h,.1,t-.1,u),N(l[1],h,t,i-.1,u),N(c,h,i,99,u)}}},c:on(-.3,.3,1.5),range:1.8}});ie(13,(n,e)=>{let t=L(e,"bajo"),i=L(e,"32");return{...Ge({piso:1}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"look"],[t-.6,"wide"],[t+.3,"sad"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t-.6&&r<t+.3?90:12,20]})}),Te({x:yt[0],z:yt[1],eyes:[[0,"look"]],move:s=>[yt[0],0,Rt(yt[1],-3.2,Re(t,t+2,s))],pose:(s,r)=>r>t?s.walk(r):s.pose()})],extra:s=>{let r=ve(s,["\xA1YA HAB\xC9IS LLEGADO AL BAJO!"],1.9,[0,2.2,-.4]),o=Ms(s,[0,2.2,-.4],1.3,{size:100,w:600});return{update:(a,l,c)=>{s.userData.display.userData.set(a>t?0:1,a>t?"":"\u25BC"),s.userData.doors(Re(t,t+.8,a)),N(r,a,t,i-.1,c),a>i?o("\u23F1 0:"+String(Math.min(32,Math.floor((a-i)*18))).padStart(2,"0")):o("")}}},c:on(-.4,.2,1.3),range:1.8}});ie(14,(n,e)=>{let t=L(e,"12"),i=L(e,"plan"),s=L(e,"frio"),r=L(e,"uvas");return{...Ge({piso:3}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"look"],[i,"smug"]],pose:mi}),Te({x:yt[0],z:yt[1],eyes:[[0,"look"]],pose:o=>o.pose({armL:[12,8],armR:[45,30]})})],extra:(o,a,l)=>{let c=ii();o.add(c);let h=Ar();o.add(h);let d=[_e(o,["HOY: AL 12 \xB7 M\xC1S TIEMPO"],2,[0,2.2,-.4]),ve(o,["PLAN: DECIRLE ALGO"],1.8,[0,2.2,-.4])],u=Di(o,["\xBFEL FR\xCDO?","\xBFLAS UVAS?"],1.1,[0,0,0]);return u.position.set(-1,1.95,-.4),{update:(f,g,E)=>{o.userData.display.userData.set(3,"\u25B2"),ts(c,l[0]);let m=ni(l[1]);h.position.set(m.x,m.y-.25,m.z+.05),N(d[0],f,t-.3,i-.1,E),N(d[1],f,i,s-.2,E),N(u,f,s-.2,99,E)}}},c:on(-.4,.3,1.35),range:1.8}});ie(15,(n,e)=>{let t=L(e,"abres"),i=L(e,"cierras"),s=L(e,"fracaso");return{...Ge({piso:4}),fov:26,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"look"],[t,"wide"],[i,"flat"],[s,"sad"]],pose:mi}),Te({x:yt[0],z:yt[1],eyes:[[0,"look"]]})],extra:(r,o,a)=>{let l=ii();r.add(l);let c=_e(r,["FRACASO"],1.2,[-.4,2.2,-.5],{bg:"#C9361F",fg:"#fff",size:90}),h=Ze(pr("\u2026","#2A2A34",150),.3,.24);return h.renderOrder=6,r.add(h),{update:(d,u,f)=>{r.userData.display.userData.set(4,"\u25B2"),ts(l,a[0]),h.visible=d>t&&d<i,h.position.set(-.2,1.85,-.5),zn(h,f),N(c,d,s,99,f)}}},c:[[-1,1.6,2],[-.3,1.4,-.7],[-.8,1.55,1.7],[-.3,1.4,-.7]],range:1.4}});ie(16,(n,e)=>{let t=L(e,"6"),i=L(e,"7"),s=L(e,"golpe"),r=o=>Rt(4*Qe,7.5*Qe,Re(0,s,o));return{amb:"hueco",fov:30,k:1.25,atores:[Ae({x:-.5,z:-.6,move:o=>[-.5,r(o)+.06,-.6],eyes:[[0,"look"],[s,"wide"]]}),Te({x:.5,z:-.7,move:o=>[.5,r(o)+.06,-.7],eyes:[[0,"look"],[s,"wide"]]})],extra:o=>{let a=Ms(o,[2.2,0,.6],1.3,{size:100,w:600}),l=_e(o,["\xA1GOLPE SECO!"],1.6,[0,0,.6],{bg:"#C9361F",fg:"#fff"});return{update:(c,h,d)=>{let u=r(c);o.userData.setCab(u),a(c<t?"PISO 5":c<i?"PISO 6":"PISO 7"),a.m.position.set(2.1,u+2.3,.6),zn(a.m,d),l.position.set(0,u+3.5,.6),N(l,c,s,99,d),_r(d,c>s&&c<s+.6?.06:0,c)}}},cam:[0,.2,.4,.6,.8,1].map(o=>{let a=o*n,l=Rt(4*Qe,7.5*Qe,Re(0,s,a));return[a,[0,l+1.7,4.6],[0,l+1.4,-.6]]}),f:[[0,5.2],[n,5.2]],k:1,range:3,look:{exposure:1.05,bloom:.4}}});ie(17,(n,e)=>{let t=L(e,"parpadea"),i=L(e,"emergencia"),s=L(e,"queda");return{...Ge(),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"wide"]],pose:mi}),Te({x:yt[0],z:yt[1],eyes:[[0,"wide"]],pose:r=>r.pose({armL:[12,8],armR:[45,30]})})],extra:(r,o,a)=>{let l=ii();r.add(l);let c=Ar();r.add(c);let h=_e(r,["\xA1CLANC!"],1.4,[0,2.2,-.4],{size:100,bg:"#C9361F",fg:"#fff"}),d=_e(r,["LUZ DE EMERGENCIA"],1.6,[0,2.2,-.4],{bg:"#F2A640",fg:"#2A2A34"});return{update:(u,f,g)=>{r.userData.display.userData.set("7\xBD");let E=u<t?1:u<s?gh(u,t,s):0;et(r,E),ts(l,a[0]);let m=ni(a[1]);c.position.set(m.x,m.y-.25,m.z+.05),N(h,u,0,t-.2,g),N(d,u,i-.3,99,g),_r(g,u<.6?.05:0,u)}}},c:on(-.3,.2),range:2,lookFn:r=>r>s?je:{}}});ie(18,(n,e)=>{let t=L(e,"nora"),i=L(e,"botones");return{...Ge({luz:0}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"flat"],[i,"look"]],pose:mi}),Te({x:yt[0],z:yt[1],eyes:[[0,"flat"],[t,"lookl"]]})],extra:(s,r,o)=>{et(s,0);let a=ii();s.add(a);let l=ve(s,["SILENCIO\u2026"],1.3,[0,2.2,-.4],{size:90});return{update:(c,h,d)=>{s.userData.display.userData.set("7\xBD"),ts(a,o[0]),N(l,c,.1,99,d)}}},c:[[0,1.55,2.8],[0,1.3,-.7],[.3,1.5,2.5],[.4,1.3,-1.2]],range:2,look:je}});ie(19,(n,e)=>{let t=L(e,"todos"),i=L(e,"nada");return{...Ge({luz:0}),fov:26,atores:[Ae({x:.35,z:-1.05,eyes:[[0,"angry"],[i,"flat"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[80+Math.sin(r*9)*10,0]})})],extra:s=>{et(s,0);let r=s.userData.botonera.userData.btns,o=_e(s,["PULSAS TODOS LOS BOTONES"],1.6,[.6,2.15,-1.1]),a=ve(s,["NADA"],.7,[.85,1.85,-1.2],{size:90});return{update:(l,c,h)=>{r.forEach((d,u)=>d.material.emissiveIntensity=l>t&&l<i&&Math.floor(l*6)%r.length===u?2.5:.15),N(o,l,.1,i-.1,h),N(a,l,i,99,h)}}},c:[[.95,1.5,1.2],[.8,1.3,-1.5],[.9,1.5,.9],[.85,1.3,-1.5]],range:1.2,look:je}});ie(20,(n,e)=>{let t=L(e,"ese");return{...Ge({luz:0}),fov:28,atores:[Ae({x:.35,z:-1.05,eyes:[[0,"look"],[t,"flat"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[80,0]})}),Te({x:-.5,z:-.6,eyes:[[0,"smug"]],talk:[[t,n]]})],extra:i=>{et(i,0);let s=ve(i,["\u25C0\u25B6 CERRAR PUERTAS"],1.4,[.8,2.2,-1.1]),r=ht(i,["ESE BOT\xD3N NO SIRVE","PARA NADA, \xBFSABES?"],1.6,[-.4,2.2,-.6],56);return{update:(o,a,l)=>{N(s,o,.1,t-.1,l),N(r,o,t,99,l)}}},c:on(-.2,.3,1.35),range:2,look:je}});ie(21,(n,e)=>{let t=L(e,"muchos"),i=L(e,"control");return{amb:"gris",fov:30,atores:[],extra:s=>{let r=new le;r.add(R(1,1.4,.08,F("#8E9296",{metalness:.7,roughness:.3}),0,0,0));let o=new W(new ft(.22,.22,.08,24),new Oe({color:"#F4E8C8",emissive:"#F4E8C8",emissiveIntensity:.2}));o.rotation.x=Math.PI/2,o.position.z=.08,r.add(o);let a=Ze(qt(["\u25B6\u25C0"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:300,h:200}),.3,.2);a.position.z=.13,r.add(a),r.position.set(0,1.4,0),s.add(r);let l=new lt("#FFF4E4",14,8,1.4);l.position.set(.5,2.4,2),s.add(l);let c=[_e(s,["EL BOT\xD3N DE CERRAR\u2026"],2,[0,2.3,.2]),ve(s,["\u2026MUCHAS VECES NO HACE NADA"],2.4,[0,2.3,.2]),_e(s,["SOLO TE HACE SENTIR QUE TIENES EL CONTROL"],3,[0,.45,.4],{size:56,w:1300})],h=Ze(pr("\u2715","#E8344A",200),.9,.7);return h.position.set(0,1.4,.2),h.renderOrder=6,s.add(h),{update:(d,u,f)=>{o.position.z=.08-.03*Math.abs(Math.sin(d*6)),N(c[0],d,.1,t-.1,f),N(c[1],d,t,99,f),N(c[2],d,i-1.2,99,f),h.visible=d>t+.8}}},c:[[0,1.5,4],[0,1.4,0],[0,1.5,3.4],[0,1.4,0]],k:1.25,range:3}});ie(22,(n,e)=>{let t=L(e,"campanita"),i=L(e,"pitido"),s=L(e,"servicio");return{...Ge({luz:0}),fov:26,atores:[Ae({x:.35,z:-1,eyes:[[0,"look"],[s,"wide"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[o>t&&o<i+.5?75:12,0]})})],extra:r=>{et(r,0);let o=r.userData.botonera.userData.alarm,a=_e(r,["\xA1PIIII!"],.9,[1.1,1.6,-1.1],{size:90}),l=ht(r,["SERVICIO T\xC9CNICO,","\xBFEN QU\xC9 PUEDO AYUDARLE?"],1.5,[.55,2.15,-1.1],52),c=[0,1,2].map(()=>{let h=new W(new pn(.12,.01,6,30,Math.PI*.7),new Ke({color:"#7FD08A",transparent:!0}));return h.rotation.z=-Math.PI*.35,r.add(h),h});return{update:(h,d,u)=>{o.material.emissiveIntensity=h>t?1+Math.abs(Math.sin(h*10))*2:.3,N(a,h,i,s-.2,u),N(l,h,s,99,u),c.forEach((f,g)=>{let E=(h*.9+g/3)%1;f.position.set(.85,1.07,-1.5),f.scale.setScalar(.6+E*1.6),f.material.opacity=h>s?1-E:0})}}},c:[[.95,1.5,1.1],[.8,1.3,-1.5],[.9,1.5,.8],[.85,1.3,-1.5]],range:1.2,look:je}});ie(23,(n,e)=>({...Ge({luz:0}),fov:28,atores:[Ae({x:.35,z:-1,eyes:[[0,"wide"]],talk:[[0,n]],pose:(t,i)=>t.pose({armL:[50+Math.sin(i*9)*20,40],armR:[50+Math.cos(i*9)*20,40],bob:Math.abs(Math.sin(i*9))*.015})}),Te({x:-.5,z:-.6,eyes:[[0,"flat"]]})],extra:t=>{et(t,0);let i=ht(t,"\xA1ESTAMOS ATRAPADOS!",1.4,[.4,2.15,-1],62);return{update:(s,r,o)=>N(i,s,.2,99,o)}},c:on(.3,.5,1.35),range:2,look:je}));ie(24,(n,e)=>{let t=L(e,"nochevieja"),i=L(e,"par");return{...Ge({luz:0}),fov:28,atores:[Ae({x:.35,z:-1,eyes:[[0,"look"],[i,"wide"]]}),Te({x:-.5,z:-.6,eyes:[[0,"look"],[i,"wide"]]})],extra:s=>{et(s,0);let r=ht(s,["MANDO UN T\xC9CNICO\u2026"],1.3,[.6,2.15,-1.1],60),o=ht(s,["ES NOCHEVIEJA,","HAY MUCHOS AVISOS\u2026"],1.4,[.6,2.15,-1.1],54),a=ht(s,["\u2026UN PAR DE HORAS"],1.3,[.6,2.15,-1.1],60),l=mr(.45,11);return l.position.set(-.4,2,-.8),s.add(l),{update:(c,h,d)=>{N(r,c,.1,t-.2,d),N(o,c,t,i-.3,d),N(a,c,i,99,d),l.visible=c>i,l.set(11+Re(i,i+1.5,c)*2)}}},c:on(.2,.4,1.35),range:2,look:je}});ie(25,(n,e)=>{let t=L(e,"tu"),i=L(e,"ella"),s=L(e,"metro");return{...Ge({luz:0}),fov:30,atores:[Ae({x:Et[0],z:Et[1]}),Te({x:yt[0],z:yt[1]})],extra:r=>{et(r,0);let o=new Hn("#FFF2D8",0,6,.3,.5,1);o.position.set(Et[0],2.7,.6),o.target.position.set(Et[0],0,Et[1]);let a=new Hn("#FFF2D8",0,6,.3,.5,1);a.position.set(yt[0],2.7,.6),a.target.position.set(yt[0],0,yt[1]),r.add(o,o.target,a,a.target);let l=[ve(r,["T\xDA"],.6,[Et[0],2.05,Et[1]+.3],{size:100,w:360}),ve(r,["ELLA"],.8,[yt[0],2.05,yt[1]+.3],{size:100,w:460}),_e(r,["1 m \xD7 1 m"],1.3,[0,2.2,-.4],{size:90,w:600})],c=Eh(r,.01);return{update:(h,d,u)=>{o.intensity=25*Re(t,t+.2,h),a.intensity=25*Re(i,i+.2,h),N(l[0],h,t,99,u),N(l[1],h,i,99,u),N(l[2],h,s,99,u)}}},c:[[0,2.6,2.6],[0,1,-.6],[0,2.9,3],[0,1,-.6]],range:2.4,look:je}});ie(26,(n,e)=>{let t=L(e,"quedas"),i=L(e,"grande");return{...Ge({luz:0}),fov:30,atores:[Ae({x:-1,z:-.5,eyes:[[0,"look"],[t,"flat"]],pose:s=>s.pose({armL:[8,4],armR:[8,4]})}),Te({x:.7,z:-1,eyes:[[0,"flat"]],move:s=>[.7,Rt(0,De,Re(.2,1.2,s)),-1],pose:(s,r)=>r>.6?rt(s):s.pose()})],extra:(s,r,o)=>{et(s,0);let a=ve(s,["PEGADO A LA PARED"],1.5,[-.6,2,-.4]),l=Ar();return s.add(l),l.position.set(.25,0,-.8),{update:(c,h,d)=>N(a,c,t,99,d)}},c:on(-.3,.3,1.1),range:2.2,look:je}});ie(27,(n,e)=>{let t=L(e,"1966"),i=L(e,"hall"),s=L(e,"espacio");return{amb:"gris",fov:30,atores:[nn(5,{x:1.5,z:0,eyes:[[0,"look"]],pose:(r,o)=>o>s?r.pose({armL:[60,60],armR:[60,60]}):Er(r,o)})],extra:r=>{let o=[_e(r,["ESTO TIENE NOMBRE"],1.8,[1.2,2.25,0]),null,null,ve(r,["EL ESPACIO A NUESTRO ALREDEDOR"],2.2,[.6,.45,.6])],a=Eh(r,1.2,"#F2C14E",.8);return a.position.set(1.5,.02,0),{update:(l,c,h)=>{N(o[0],l,.1,t-.1,h),N(o[3],l,s,99,h),a.scale.setScalar(Math.max(.01,Re(s,s+.8,l)))}}},c:[[0,2,5],[.3,1.3,0],[0,1.9,4.2],[.3,1.3,0]],k:1.25,range:3}});ie(28,(n,e)=>{let t=L(e,"burbuja"),i=L(e,"45"),s=L(e,"intima");return{amb:"gris",fov:30,atores:[nn(5,{x:0,z:0,eyes:[[0,"look"],[t,"happy"]]})],extra:r=>{let o=yr(r,.9);o.position.set(0,1,0);let a=Eh(r,.45*2,"#FF7A8A",.9),l=[_e(r,["UNA BURBUJA INVISIBLE"],2,[0,2.3,0]),_e(r,["ZONA \xCDNTIMA: 45 cm"],1.9,[0,2.3,0],{bg:"#E8667F",fg:"#fff"})],c=ve(r,["\u2190 45 cm \u2192"],1,[1.3,.5,.9],{size:80});return{update:(h,d,u)=>{let f=Re(t-.2,t+.8,h);o.scale.setScalar(Math.max(.01,f)),a.visible=h>i,N(c,h,i,99,u),N(l[0],h,t,s-.1,u),N(l[1],h,s,99,u)}}},c:[[0,2.6,4.6],[0,1,0],[.6,2.2,4],[0,1,0]],k:1.25,range:3}});ie(29,(n,e)=>{let t=L(e,"familia"),i=L(e,"amigos"),s=L(e,"persona");return{amb:"gris",fov:32,atores:[nn(5,{x:0,z:0,eyes:[[0,"happy"],[s,"heart"]]}),ph({x:-2.6,z:.2,move:r=>[Rt(-2.6,-.75,Re(t,t+1,r)),0,.2],pose:(r,o)=>o>t&&o<t+1?r.walk(o):r.pose()}),nn(2,{x:2.6,z:.2,move:r=>[Rt(2.6,.75,Re(i,i+1,r)),0,.2],pose:(r,o)=>o>i&&o<i+1?r.walk(o):r.pose()}),Te({x:0,z:-2.6,move:r=>[0,0,Rt(-2.6,-.75,Re(s,s+1,r))],pose:(r,o)=>o>s&&o<s+1?r.walk(o):r.pose(),eyes:[[0,"happy"]]})],extra:r=>{yr(r,.95).position.set(0,1,0);let a=[ve(r,["FAMILIA"],1,[-1.3,2.3,.2]),ve(r,["AMIGOS DE VERDAD"],1.6,[1.3,2.3,.2]),_e(r,["\u2026O QUIEN NOS GUSTA"],1.7,[0,2.6,-1.2],{bg:"#E8667F",fg:"#fff"})];return{update:(l,c,h)=>{N(a[0],l,t,99,h),N(a[1],l,i,99,h),N(a[2],l,s,99,h)}}},c:[[0,2.2,5.6],[0,1.2,-.4],[0,2,4.8],[0,1.2,-.4]],k:1.25,range:4}});ie(30,(n,e)=>{let t=L(e,"puerta"),i=L(e,"movil"),s=L(e,"numeros"),r=L(e,"cualquier");return{...Ge({piso:5}),fov:32,atores:[nn(1,{x:-.7,z:-.5,eyes:[[0,"look"]]}),nn(3,{x:.1,z:-1,eyes:[[0,"down"]],pose:o=>o.pose({armL:[12,8],armR:[55,40]})}),nn(6,{x:.75,z:-.4,eyes:[[0,"lookl"]],pose:o=>o.pose({head:18})})],extra:(o,a,l)=>{let c=xa(["",""],{hora:"09:12"});c.scale.setScalar(.25),o.add(c);let h=[ve(o,["LA PUERTA"],.9,[-.7,2.15,-.4]),ve(o,["EL M\xD3VIL"],.9,[.1,2.2,-.9]),ve(o,["LOS N\xDAMEROS"],1,[.8,2.15,-.4]),_e(o,["\xA1CUALQUIER COSA MENOS LA CARA!"],2.2,[0,2.2,-.3],{bg:"#C9361F",fg:"#fff"})];return{update:(d,u,f)=>{let g=ni(l[1]);c.position.set(g.x,g.y+.12,g.z+.08),zn(c,f),N(h[0],d,t,r-.1,f),N(h[1],d,i,r-.1,f),N(h[2],d,s,r-.1,f),N(h[3],d,r,99,f)}}},c:on(-.3,.3,1.3),range:2}});ie(31,(n,e)=>{let t=L(e,"burbuja"),i=L(e,"cerebro");return{...Ge({piso:5}),fov:32,atores:[nn(1,{x:-.5,z:-.6,eyes:[[0,"look"],[i,"angry"]]}),nn(3,{x:.5,z:-.7,eyes:[[0,"look"],[i,"sad"]]})],extra:s=>{let r=yr(s,.62,"#9FE0FF"),o=yr(s,.62,"#FFB0C0");r.position.set(-.5,1,-.6),o.position.set(.5,1,-.7);let a=_e(s,["AL CEREBRO NO LE GUSTA NADA"],2.2,[0,2.2,-.4]),l=Ze(pr("\u26A1","#FFD25A",170),.4,.32);return l.position.set(0,1.5,-.5),s.add(l),{update:(c,h,d)=>{let u=Re(t-.5,t+.5,c);r.scale.setScalar(Math.max(.01,u)),o.scale.setScalar(Math.max(.01,u)),l.visible=c>t+.3&&Math.sin(c*20)>0,zn(l,d),N(a,c,i,99,d)}}},c:on(0,0,1.2),range:2}});ie(32,(n,e)=>{let t=L(e,"nora"),i=L(e,"par"),s;return{...Ge({luz:0}),fov:30,atores:[Ae({x:-.55,z:-.6,eyes:[[0,"look"],[t,"wide"]],pose:r=>r.pose({armL:[8,4],armR:[8,4]})}),Te({x:-.1,z:-1,y:De,eyes:[[0,"flat"]],pose:rt})],extra:(r,o,a)=>{et(r,0),s=An(a[0]);let l=yr(r,.5,"#9FE0FF");l.position.set(-.55,1,-.6);let c=_e(r,["NORA, DENTRO DE TU BURBUJA"],2,[0,2.2,-.4],{bg:"#D66A86",fg:"#fff"}),h=ve(r,["DURANTE UN PAR DE HORAS"],1.8,[0,2.2,-.4]);return{update:(d,u,f)=>{l.scale.setScalar(Math.max(.01,Re(0,.8,d))),N(c,d,t,i-.1,f),N(h,d,i,99,f),s(Re(t,t+.5,d))}}},c:on(-.4,-.1,1.1),range:2,look:je}});ie(33,(n,e)=>{let t=L(e,"oye");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.6,z:-.6,eyes:[[0,"look"],[t+1,"wide"]]}),Te({x:.3,z:-1,y:De,eyes:[[0,"sad"]],talk:[[t,n]],pose:rt})],extra:i=>{et(i,0);let s=ht(i,["OYE\u2026 \xBFY SI SE","ROMPEN LOS CABLES?"],1.5,[.3,1.6,-.8],56);return{update:(r,o,a)=>N(s,r,t,99,a)}},c:[[.6,1.2,2.4],[0,1,-.8],[.4,1.2,2.1],[0,1,-.8]],range:1.8,look:je}});ie(34,(n,e)=>{let t=L(e,"1854"),i=L(e,"elisha"),s=L(e,"plataforma"),r=L(e,"cortar");return{amb:"feria",fov:34,k:1.25,atores:[Hu({x:0,z:-3,move:o=>[0,5.08,-3],eyes:[[0,"smug"]],pose:(o,a)=>a>r?o.pose({armL:[12,8],armR:[150,20]}):Er(o,a)}),...[0,1,2,3,4,5].map(o=>nn(o,{x:-2.6+o*1.05,z:1.4+o%2*.6,eyes:[[0,"lookl"]],pose:a=>a.pose({head:-10})})),Ln({outfit:"terno3",glow:0,x:1.9,z:-2.4,eyes:[[0,"look"]],pose:(o,a)=>o.pose({armL:[12,8],armR:[a>r?120:30,30]})})],extra:o=>{let a=[null,ve(o,["ELISHA OTIS"],2,[-1.8,7,-2.4]),_e(o,["\xA1CORTEN LA CUERDA!"],2.4,[1.6,7.2,-2.4],{bg:"#C9361F",fg:"#fff"})];return{update:(l,c,h)=>{o.userData.setPlat(5),N(a[1],l,i,r-.2,h),N(a[2],l,r,99,h)}}},cam:[[0,[1.5,2.2,8],[1.5,3,-3]],[n*.55,[1.8,4.2,6.5],[1.8,5.2,-3]],[n,[2.2,5.6,4],[1.6,5.8,-3]]],f:[[0,11],[n*.55,9.5],[n,7.2]],k:1,range:6,blur:4,look:zu}});ie(35,(n,e)=>{let t=L(e,"frenada"),i=L(e,"inventado");return{amb:"feria",fov:32,k:1.25,atores:[Hu({x:0,z:-3,move:s=>[0,5-.25*Re(0,.3,s)+.08,-3],eyes:[[0,"smug"],[t,"happy"]],pose:(s,r)=>r>t?s.pose({armL:[150,20],armR:[150,20]}):s.pose({armL:[12,8],armR:[150,20]})}),...[0,1,2,3,4].map(s=>nn(s,{x:-2.2+s*1.1,z:1.4+s%2*.6,eyes:[[0,"wide"],[t+.5,"happy"]],pose:(r,o)=>o>t+.5?Nu(r,o+s):r.pose()}))],extra:s=>{let r=[ve(s,["NO CAY\xD3"],1.4,[0,7.4,-2.4],{size:90}),_e(s,["EL FRENO DE SEGURIDAD"],2.6,[0,7.4,-2.4],{bg:"#2A7A4A",fg:"#fff"})],o=[-1,1].map(a=>{let l=ct("#FFD25A",.6,0);return l.position.set(a*1.3,4.8,-2.8),s.add(l),l});return{update:(a,l,c)=>{s.userData.setPlat(5-.25*Re(0,.3,a),1),o.forEach(h=>h.material.opacity=a<.8?.9*(1-a/.8):0),N(r[0],a,.3,i-.1,c),N(r[1],a,i,99,c),_r(c,a<.4?.05:0,a)}}},c:[[1,5.6,4.2],[0,5.6,-3],[0,5,5.4],[0,5.4,-3]],k:1,range:6,blur:4,look:zu}});ie(36,(n,e)=>{let t=L(e,"cada"),i=L(e,"freno");return{amb:"hueco",fov:30,k:1.25,atores:[Ae({x:-.5,z:-.6,move:()=>[-.5,7.5*Qe+.06,-.6]}),Te({x:.5,z:-.7,move:()=>[.5,7.5*Qe+.06,-.7]})],extra:s=>{let r=7.5*Qe;s.userData.setCab(r),s.userData.cabLuz(0);let o=[_e(s,["VARIOS CABLES"],1.8,[-1.2,r+5.6,.4]),ve(s,["CADA UNO AGUANTA EL PESO"],2.4,[-1,r+5,.4]),_e(s,["+ FRENO DE SEGURIDAD"],2.2,[0,r-.7,.6],{bg:"#2A7A4A",fg:"#fff"})],a=[-1,1].map(l=>{let c=ct("#FFD25A",.7,0);return c.position.set(l*1.6,r+.25,-1.1),s.add(c),c});return{update:(l,c,h)=>{N(o[0],l,.2,99,h),N(o[1],l,t,99,h),N(o[2],l,i,99,h),a.forEach(d=>d.material.opacity=l>i?.5+.4*Math.sin(l*8):0)}}},cam:[[0,[2,7.5*Qe+6,6],[0,7.5*Qe+5,-.6]],[n*.6,[1,7.5*Qe+3,7],[0,7.5*Qe+2,-.6]],[n,[1.6,7.5*Qe+.8,5],[0,7.5*Qe+.6,-.6]]],f:[[0,6.5],[n,5.5]],range:4,look:{exposure:1.05,bloom:.4}}});ie(37,(n,e)=>{let t=L(e,"como"),i=L(e,"video");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.6,z:-.6,eyes:[[0,"smug"],[i-1,"lookl"]]}),Te({x:.3,z:-1,y:De,eyes:[[0,"look"],[t,"smug"]],talk:[[t,t+1.5]],pose:rt})],extra:s=>{et(s,0);let r=ht(s,"\xBFY T\xDA C\xD3MO SABES ESO?",1.5,[.3,1.6,-.8],58),o=Di(s,["UN V\xCDDEO A LAS","3 DE LA MA\xD1ANA"],1.2,[0,0,0]);return o.position.set(-1,2.25,-.5),{update:(a,l,c)=>{N(r,a,t-.2,i-1.2,c),N(o,a,i-.8,99,c)}}},c:on(-.2,.2,1.1),range:2,look:je}});ie(38,(n,e)=>{let t=L(e,"cobertura"),i=L(e,"bateria");return{amb:"gris",fov:30,atores:[],extra:s=>{let r=xa(["SIN COBERTURA","\u2715 \u2715 \u2715"],{hora:"23:42",bat:61}),o=xa(["SIN BATER\xCDA",""],{hora:"23:42",bat:0,bg:"#2A0E10"});r.position.set(-.7,1.4,0),o.position.set(.7,1.4,0),s.add(r,o);let a=_e(s,["MEDIA HORA"],1.6,[0,2.2,0]),l=mr(.5,11.5);return l.position.set(0,.4,.2),s.add(l),{update:(c,h,d)=>{r.visible=c>t-.4,o.visible=c>i-.4,N(a,c,.1,99,d),l.set(11.5+c/60)}}},c:[[0,1.5,3.4],[0,1.4,0],[0,1.5,3],[0,1.4,0]],k:1.25,range:2}});ie(39,(n,e)=>{let t=L(e,"primero"),i=L(e,"otro"),s=L(e,"media");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.45,z:-.8,y:De,eyes:[[0,"happy"]],pose:(r,o)=>{rt(r),r.pose({armL:[8,6],armR:[60+Math.sin(o*6)*20,60],bob:0}),Yt(r)}}),Te({x:.45,z:-.9,y:De,eyes:[[0,"happy"]],pose:(r,o)=>{r.pose({armL:[60+Math.cos(o*6)*20,60],armR:[8,6]}),Yt(r)}})],extra:r=>{et(r,0);let o=ii();o.scale.setScalar(1.3),o.position.set(0,.05,-.5),r.add(o);let a=o.userData.T,l=[ve(r,["UNO"],.6,[-.3,1.5,-.4],{size:90}),ve(r,["OTRO"],.7,[.3,1.5,-.4],{size:90}),_e(r,["MEDIA BANDEJA"],1.4,[0,1.85,-.4])];return{update:(c,h,d)=>{a.forEach((u,f)=>u.visible=!(c>t&&f===0)&&!(c>i&&f===1)&&!(c>s&&f<4)),N(l[0],c,t,i-.1,d),N(l[1],c,i,s-.1,d),N(l[2],c,s,99,d)}}},c:[[0,1.35,2],[0,.6,-.7],[0,1.4,1.7],[0,.6,-.7]],range:1.5,look:je}});ie(40,(n,e)=>({...Ge({luz:0}),fov:28,atores:[Ae({x:-.45,z:-.8,y:De,eyes:[[0,"happy"]],pose:rt}),Te({x:.45,z:-.9,y:De,eyes:[[0,"smug"]],talk:[[0,n-.5]],pose:rt})],extra:t=>{et(t,0);let i=ii();i.scale.setScalar(1.3),i.position.set(0,.05,-.5),t.add(i),i.userData.T.forEach((r,o)=>r.visible=o>=4);let s=ht(t,["LE DIREMOS QUE EL","ASCENSOR SE LOS COMI\xD3"],1.6,[.4,1.5,-.8],54);return{update:(r,o,a)=>N(s,r,.1,99,a)}},c:[[0,1.3,2.3],[0,.8,-.8],[.2,1.3,2],[0,.8,-.8]],range:1.6,look:je}));ie(41,(n,e)=>{let t=L(e,"calor"),i=L(e,"aire");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.45,z:-.8,y:De,eyes:[[0,"flat"]],pose:(s,r)=>{s.pose({armL:[8,6],armR:[140+Math.sin(r*10)*15,40]}),Yt(s)}}),Te({x:.45,z:-.9,y:De,eyes:[[0,"flat"],[i-.8,"sad"]],talk:[[i-1.5,i+.5]],pose:rt})],extra:s=>{et(s,0);let r=[_e(s,["UNA HORA"],1.2,[0,1.9,-.4]),ve(s,["HACE CALOR"],1.1,[-.4,1.5,-.4])],o=ht(s,"\xBFSE PUEDE ACABAR EL AIRE?",1.5,[.4,1.5,-.8],54),a=mr(.4,12);return a.position.set(0,2.5,-1.5),s.add(a),{update:(l,c,h)=>{N(r[0],l,.1,i-1.6,h),N(r[1],l,t,i-1.6,h),N(o,l,i-1.5,99,h),a.set(12+l/60)}}},c:[[0,1.3,2.3],[0,.8,-.8],[0,1.4,2],[0,.8,-.8]],range:1.6,look:je}});ie(42,(n,e)=>{let t=L(e,"hermeticos"),i=L(e,"rendijas"),s=L(e,"entra"),r=L(e,"perfectamente");return{amb:"hueco",fov:30,k:1.25,atores:[Ae({x:-.5,z:-.6,y:7.5*Qe+.06-.42,pose:rt}),Te({x:.5,z:-.7,y:7.5*Qe+.06-.42,pose:rt})],extra:o=>{let a=7.5*Qe;o.userData.setCab(a),o.userData.cabLuz(0);let l=[_e(o,["NO SON HERM\xC9TICOS"],2,[0,a+3.8,.5]),ve(o,["RENDIJAS Y HUECOS"],1.8,[0,a+3.8,.5]),_e(o,["EL AIRE ENTRA Y SALE"],2,[0,a+3.8,.5],{bg:"#2A7A9A",fg:"#fff"}),ve(o,["PUEDES RESPIRAR PERFECTAMENTE"],2.6,[0,a-.7,.6])],c=[];for(let h=0;h<16;h++){let d=ct("#9FE0FF",.18,0);o.add(d),c.push(d)}return{update:(h,d,u)=>{N(l[0],h,t-.3,i-.1,u),N(l[1],h,i,s-.1,u),N(l[2],h,s,99,u),N(l[3],h,r-1.5,99,u),c.forEach((f,g)=>{let E=(h*.5+g/16)%1,m=g%4,p=m===0?-1.4+E*.6:m===1?1.4-E*.6:(g%7-3)*.3,v=m<2?a+.3+g%5*.5:a+3.2-E*.5;f.position.set(p,v,-.2+g%3*.3),f.material.opacity=h>i?Math.sin(E*Math.PI)*.9:0})}}},cam:[[0,[0,7.5*Qe+2.2,7],[0,7.5*Qe+1.6,-.6]],[n,[0,7.5*Qe+2,5.8],[0,7.5*Qe+1.6,-.6]]],f:[[0,7.6],[n,6.4]],range:3,look:{exposure:1.05,bloom:.45}}});ie(43,(n,e)=>{let t=L(e,"1999"),i=L(e,"rascacielos"),s=L(e,"viernes");return{amb:"apagon",fov:34,k:1.25,atores:[mh({x:0,z:2,eyes:[[0,"look"]],move:r=>[Rt(-1.2,.4,Re(s,s+2.5,r)),0,2],pose:(r,o)=>o>s&&o<s+2.5?r.walk(o):r.pose()})],extra:r=>{let o=[_e(r,["NICHOLAS WHITE"],2,[.8,2.3,2])];return{update:(a,l,c)=>{N(o[0],a,.2,t-.1,c)}}},c:[[0,1.4,6.6],[0,2.4,-6],[0,1.6,5.6],[0,1.6,0]],range:5,blur:6,look:{exposure:1.1,bloom:.5}}});ie(44,(n,e)=>{let t=L(e,"atrapado"),i=L(e,"41"),s=L(e,"fin");return{...Ge({luz:0,piso:13}),fov:30,atores:[mh({x:0,z:-.7,eyes:[[0,"look"],[t,"wide"],[i+1,"sad"]],move:r=>[0,r>i+.5?De:0,-.7],pose:(r,o)=>o>i+.5?rt(r):r.pose()})],extra:r=>{et(r,0);let o=Ms(r,[0,2.2,-.4],1.4,{size:100,w:600}),a=ve(r,["TODO EL FIN DE SEMANA"],1.9,[0,1.7,-.3]);return{update:(l,c,h)=>{l>i?o(Math.min(41,Math.floor((l-i)*20))+" HORAS"):o(""),N(a,l,s,99,h)}}},c:on(0,0,1.2),range:2,look:je}});ie(45,(n,e)=>{let t=L(e,"sobrevivio");return{...Ge({luz:0,piso:13}),fov:30,atores:[mh({x:0,z:-.7,y:De,eyes:[[0,"sad"],[t,"happy"]],pose:(i,s)=>s>t?(i.pose({armL:[150,20],armR:[150,20]}),Yt(i)):rt(i)})],extra:i=>{et(i,0);let s=[ve(i,["SIN AGUA \xB7 SIN COMIDA"],1.9,[0,2.2,-.4]),_e(i,["\xA1Y SOBREVIVI\xD3!"],1.6,[0,2.2,-.4],{bg:"#2A7A4A",fg:"#fff"})];return{update:(r,o,a)=>{N(s[0],r,.1,t-.1,a),N(s[1],r,t,99,a)}}},c:on(0,0,1),range:2,look:je,lookFn:i=>i>t?{exposure:1.18}:{}}});ie(46,(n,e)=>{let t=L(e,"vale");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.45,z:-.8,y:De,eyes:[[0,"look"],[t+1.5,"happy"]],pose:rt}),Te({x:.45,z:-.9,y:De,eyes:[[0,"look"],[t,"happy"]],talk:[[t,n]],pose:i=>{i.pose({armL:[8,6],armR:[80,40]}),Yt(i)}})],extra:(i,s,r)=>{et(i,0);let o=R(.1,.04,.07,F("#E8C890"),0,0,0);i.add(o);let a=ht(i,["VALE. TENEMOS TURRONES.","ESTAMOS BIEN"],1.6,[.4,1.5,-.8],54);return{update:(l,c,h)=>{let d=ni(r[1]);o.position.set(d.x,d.y+.05,d.z+.05),N(a,l,t,99,h)}}},c:[[0,1.3,2.3],[0,.8,-.8],[.2,1.3,2],[0,.8,-.8]],range:1.6,look:je}});ie(47,(n,e)=>{let t=L(e,"respirar"),i=L(e,"muy");return{...Ge({luz:0}),fov:26,atores:[Te({x:.2,z:-.9,y:De,eyes:[[0,"flat"],[t,"wide"]],pose:(s,r)=>{s.pose({armL:[40,60],armR:[40,60],bob:r>t?Math.abs(Math.sin(r*(r>i?22:14)))*.025:0}),Yt(s)}})],extra:s=>{et(s,0);let r=[ve(s,["PERO NO EST\xC1 BIEN"],1.5,[.1,1.45,-.7]),_e(s,["RESPIRA R\xC1PIDO"],1.4,[.1,1.45,-.7],{bg:"#C9361F",fg:"#fff"})];return{update:(o,a,l)=>{N(r[0],o,.1,t-.1,l),N(r[1],o,t,99,l),_r(l,o>i?.006:0,o)}}},c:[[.2,1.1,1.8],[.2,.9,-.9],[.2,1,1.4],[.2,.9,-.9]],range:1.4,look:je,lookFn:s=>({vig:.6+.15*Re(t,i+1,s)})}});ie(48,(n,e)=>{let t=L(e,"paredes"),i=L(e,"falta"),s=L(e,"salir"),r=L(e,"ya");return{...Ge({luz:0}),fov:30,atores:[Te({x:.2,z:-.9,y:De,eyes:[[0,"wide"],[r,"shut"]],talk:[[0,n]],pose:(o,a)=>{o.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(a*22))*.02}),Yt(o)}}),Ae({x:-.7,z:-.6,eyes:[[0,"wide"]]})],extra:o=>{et(o,0);let a=[ht(o,"LAS PAREDES EST\xC1N M\xC1S CERCA",1.6,[.2,1.6,-.7],52),ht(o,"ME FALTA EL AIRE",1.3,[.2,1.6,-.7],58),ht(o,"NECESITO SALIR. \xA1YA!",1.4,[.2,1.6,-.7],58)];return{update:(l,c,h)=>{N(a[0],l,t-.3,i-.2,h),N(a[1],l,i,s-.5,h),N(a[2],l,s-.4,99,h)}}},cam:[[0,[0,1.4,3.6],[0,1,-.8]],[n,[0,1.2,2],[0,1,-.8]]],f:[[0,4.4],[n,2.8]],range:1.8,look:{...je,vig:.78}}});ie(49,(n,e)=>{let t=L(e,"entrenador"),i=L(e,"caja");return{amb:"estadio",fov:32,k:1.25,atores:[Ln({outfit:"azul",hair:"old",hairc:"#3A3A3A",glow:0,x:.6,z:0,eyes:[[0,"look"]],talk:[[0,n]],pose:Er}),Ae({x:-.6,z:.1,eyes:[[0,"look"],[i,"happy"]]})],extra:s=>{let r=[ve(s,["TU ENTRENADOR DE F\xDATBOL"],2,[0,2.4,0]),_e(s,["RESPIRACI\xD3N EN CAJA"],2,[0,2.4,0],{bg:"#2A7A9A",fg:"#fff"})],o=bu();return o.position.set(-.1,.15,.6),s.add(o),{update:(a,l,c)=>{N(r[0],a,t-.2,i-.2,c),N(r[1],a,i-.1,99,c)}}},c:[[0,1.6,4],[0,1.3,0],[0,1.6,3.4],[0,1.3,0]],range:2.5,blur:8}});ie(50,(n,e)=>{let t=L(e,"soldados"),i=L(e,"astronautas");return{amb:"gris",fov:32,atores:[Ln({outfit:"verde",glow:0,x:-.8,z:0,eyes:[[0,"flat"]]}),Ln({outfit:"jaleco",glow:0,x:.8,z:0,eyes:[[0,"flat"]]})],extra:(s,r,o)=>{let a=[ve(s,["SOLDADOS"],1.1,[-.8,2.2,0]),ve(s,["ASTRONAUTAS"],1.3,[.8,2.2,0]),_e(s,["PARA CALMARSE CON MUCHO ESTR\xC9S"],2.6,[0,2.75,0])],l=new W(new gt(.34,20,14),F("#F4F0E4",{transparent:!0,opacity:.35}));return s.add(l),{update:(c,h,d)=>{o[0].root.visible=c>t-.3,o[1].root.visible=c>i-.3;let u=new I;o[1].head.getWorldPosition(u),l.position.copy(u),l.visible=o[1].root.visible,N(a[0],c,t,99,d),N(a[1],c,i,99,d),N(a[2],c,i+1,99,d)}}},c:[[0,1.6,4.2],[0,1.3,0],[0,1.6,3.6],[0,1.3,0]],k:1.25,range:3}});ie(51,(n,e)=>{let t=[L(e,"coges"),L(e,"aguantas"),L(e,"sueltas"),L(e,"esperas")];return{amb:"gris",fov:30,atores:[],extra:i=>{let s=new le,r=new Ke({color:"#7FD0FF"});for(let[l,c,h,d]of[[2,.05,0,1],[2,.05,0,-1],[.05,2,-1,0],[.05,2,1,0]]){let u=new W(new Ie(l,c),r);u.position.set(h,d,0),s.add(u)}s.position.set(0,1.5,0),i.add(s);let o=ct("#FFFFFF",.5,1);i.add(o);let a=[ve(i,["COGES AIRE \xB7 4"],1.3,[0,2.75,.1]),ve(i,["AGUANTAS \xB7 4"],1.3,[1.75,1.5,.1]),ve(i,["SUELTAS \xB7 4"],1.3,[0,.25,.1]),ve(i,["ESPERAS \xB7 4"],1.3,[-1.75,1.5,.1])];return{update:(l,c,h)=>{let d=0;for(let m=0;m<4;m++)l>t[m]&&(d=m);let u=qr((l-t[d])/((t[d+1]??t[3]+1.8)-t[d]),0,1),f=[[-1,1],[1,1],[1,-1],[-1,-1],[-1,1]],g=f[d],E=f[d+1];o.position.set(Rt(g[0],E[0],u),1.5+Rt(g[1],E[1],u),.05),a.forEach((m,p)=>N(m,l,t[p],99,h))}}},c:[[0,1.5,4.4],[0,1.5,0],[0,1.5,4.2],[0,1.5,0]],k:1.25,range:3}});ie(52,(n,e)=>{let t=L(e,"peligro"),i=L(e,"corazon");return{amb:"gris",fov:30,atores:[Te({x:0,z:0,eyes:[[0,"shut"],[i+2,"look"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[12,8],bob:Math.sin(r*1.6)*.02})})],extra:s=>{let r=ba(s,.5),o=[ve(s,["NO HAY PELIGRO"],1.5,[0,2.15,0]),_e(s,["EL CORAZ\xD3N BAJA EL RITMO"],2.2,[0,2.15,0],{bg:"#2A7A9A",fg:"#fff"})];return{update:(a,l,c)=>{let h=Rt(16,4,Re(i,i+3,a));r.position.set(0,1.25,.3),r.scale.setScalar(1+.2*Math.abs(Math.sin(a*h))),zn(r,c),N(o[0],a,t-.3,i-.2,c),N(o[1],a,i,99,c)}}},c:[[0,1.6,3.2],[0,1.4,0],[0,1.6,2.6],[0,1.4,0]],k:1.25,range:2}});ie(53,(n,e)=>{let t=L(e,"mirame"),i=L(e,"uno"),s=L(e,"contais"),r=L(e,"deja");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.35,z:-.85,y:De,eyes:[[0,"look"]],talk:[[t,s]],pose:(o,a)=>{o.pose({armL:[8,6],armR:[40,50]}),Yt(o)}}),Te({x:.35,z:-.9,y:De,eyes:[[0,"wide"],[s,"shut"],[r,"look"]],pose:(o,a)=>{o.pose({armL:[40,50],armR:[8,6],bob:a<s?Math.abs(Math.sin(a*20))*.02:Math.sin(a*1.6)*.01}),Yt(o)}})],extra:o=>{et(o,0);let a=ht(o,"M\xCDRAME",1,[-.4,1.5,-.8],70),l=Ms(o,[0,1.8,-.6],1,{size:100,w:500}),c=ve(o,["DEJA DE TEMBLAR"],1.5,[0,1.8,-.6]),h=fh(o,[0,1.35,.6],0,4);return{update:(d,u,f)=>{N(a,d,t,i-.1,f),d>i&&d<r-.2?l(String(1+Math.floor((d-i)/.8)%4)):l(""),N(c,d,r,99,f),h.intensity=4*Re(s,r,d)}}},c:[[0,1.2,2.3],[0,.85,-.85],[0,1.15,1.9],[0,.85,-.85]],range:1.4,look:je}});ie(54,(n,e)=>{let t=L(e,"manga"),i;return{...Ge({luz:0}),fov:26,atores:[Ae({x:-.3,z:-.85,y:De,eyes:[[0,"look"],[t,"happy"]],pose:rt}),Te({x:.3,z:-.9,y:De,eyes:[[0,"happy"]],talk:[[0,1]],pose:s=>{s.pose({armL:[55,80],armR:[8,6]}),Yt(s)}})],extra:(s,r,o)=>{et(s,0),i=An(o[0]);let a=ht(s,"GRACIAS",1,[.4,1.45,-.8],70);return{update:(l,c,h)=>{N(a,l,0,t-.3,h),i(Re(t,t+.5,l))}}},c:[[0,1,1.9],[0,.85,-.85],[0,1,1.7],[0,.85,-.85]],range:1.2,look:je}});ie(55,(n,e)=>{let t=L(e,"aguantar"),i=L(e,"primero");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"look"],[i,"smug"]],pose:rt}),Te({x:.4,z:-.85,y:De,eyes:[[0,"smug"]],talk:[[t,n]],pose:rt})],extra:s=>{et(s,0);let r=ht(s,["AGUANTAR LA MIRADA.","EL QUE SE R\xCDE, PIERDE"],1.6,[.35,1.5,-.8],54);return{update:(o,a,l)=>N(r,o,t,99,l)}},c:[[0,1.2,2.3],[0,.85,-.8],[0,1.15,2],[0,.85,-.8]],range:1.5,look:je}});ie(56,(n,e)=>{let t=L(e,"1989"),i=L(e,"miraran"),s=L(e,"minutos"),r=L(e,"hablar");return{amb:"lab",fov:30,k:1.25,atores:[nn(1,{x:-.6,z:0,y:-.3,eyes:[[0,"lookl"],[i,"look"]],pose:o=>{o.pose(),Yt(o)}}),nn(6,{x:.6,z:0,y:-.3,eyes:[[0,"look"],[i,"lookl"]],pose:o=>{o.pose(),Yt(o)}}),Ig({x:2,z:-1.2,eyes:[[0,"look"]],pose:o=>o.pose({armL:[12,8],armR:[60,60]})})],extra:(o,a,l)=>{for(let u of[-.6,.6])o.add(R(.5,.45,.5,F("#3A4A6A"),u,.22,0));l[0].root.rotation.y=0;let c=[null,ve(o,["MIRARSE A LOS OJOS"],1.8,[0,2.1,.2]),_e(o,["2 MINUTOS \xB7 SIN HABLAR"],2,[0,2.1,.2],{bg:"#2A7A9A",fg:"#fff"})],h=mr(.4,12);h.position.set(1.4,2,-.5),o.add(h);let d=new W(new Ie(.9,.015),new Ke({color:"#FFE27A",transparent:!0}));return d.position.set(0,1.35,.1),o.add(d),{update:(u,f,g)=>{N(c[1],u,i,s-.1,g),N(c[2],u,s,99,g),h.visible=u>s,h.set(12+(u-s)*.1),d.material.opacity=u>i?.6+.3*Math.sin(u*6):0}}},c:[[0,1.8,4.2],[0,1.2,0],[0,1.6,3.4],[0,1.2,0]],range:2.5}});ie(57,(n,e)=>{let t=L(e,"carino"),i=L(e,"dos");return{amb:"lab",fov:30,k:1.25,atores:[nn(1,{x:-.6,z:0,y:-.3,eyes:[[0,"look"],[t,"happy"]],pose:s=>{s.pose(),Yt(s)}}),nn(6,{x:.6,z:0,y:-.3,eyes:[[0,"lookl"],[t,"heart"]],pose:s=>{s.pose(),Yt(s)}})],extra:s=>{for(let a of[-.6,.6])s.add(R(.5,.45,.5,F("#3A4A6A"),a,.22,0));let r=[_e(s,["M\xC1S CARI\xD1O \xB7 M\xC1S INTER\xC9S"],2.2,[0,2.4,0],{bg:"#E8667F",fg:"#fff"}),ve(s,["DOS MINUTOS. NADA M\xC1S"],2,[0,2.4,0])],o=uh(s,12,"#FFB2C8");return{update:(a,l,c)=>{N(r[0],a,t-.3,i-.1,c),N(r[1],a,i,99,c),o(a,[0,2,.2,.5],0)}}},c:[[0,1.6,3.4],[0,1.2,0],[0,1.6,3],[0,1.2,0]],range:2.2}});ie(58,(n,e)=>{let t=L(e,"aguantas"),i=L(e,"10"),s=L(e,"30"),r=L(e,"minuto");return{...Ge({luz:0}),fov:26,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"look"]],pose:rt}),Te({x:.4,z:-.85,y:De,eyes:[[0,"lookl"]],pose:rt})],extra:o=>{et(o,0);let a=Ms(o,[0,1.5,-.6],1,{size:100,w:500}),l=new W(new Ie(.6,.012),new Ke({color:"#FFE27A",transparent:!0}));return l.position.set(0,.95,-.75),o.add(l),{update:(c,h,d)=>{a(c>r?"1:00":c>s?"0:30":c>i?"0:10":""),l.material.opacity=c>t?.5+.3*Math.sin(c*5):0}}},c:[[0,1,1.9],[0,.9,-.8],[0,1,1.6],[0,.9,-.8]],range:1.2,look:je}});ie(59,(n,e)=>{let t=L(e,"manchita"),i;return{...Ge({luz:0}),fov:18,atores:[Te({x:.4,z:-.85,y:De,eyes:[[0,"lookl"]],pose:rt}),Ae({x:-.4,z:-.8,y:De,eyes:[[0,"heart"]],pose:rt})],extra:(s,r,o)=>{et(s,0),i=An(o[1]);let a=ve(s,["OJOS MARRONES"],1,[.4,1.55,-.6]),l=ve(s,["\u2026CON UNA MANCHITA M\xC1S CLARA"],1.5,[.4,1.55,-.6]),c=ct("#FFD8A0",.1,0);return s.add(c),{update:(h,d,u)=>{N(a,h,.2,t-.1,u),N(l,h,t,99,u),i(.7);let f=new I;o[0].head.getWorldPosition(f),c.position.set(f.x-.08,f.y+.05,f.z+.2),c.material.opacity=0}}},c:[[-.2,1.05,1.6],[.4,1,-.85],[-.1,1.05,1.4],[.4,1,-.85]],range:1,look:je}});ie(60,(n,e)=>{let t=L(e,"roja"),i=L(e,"tambien"),s,r;return{...Ge({luz:0}),fov:26,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"smug"],[i,"happy"]],pose:rt}),Te({x:.4,z:-.85,y:De,eyes:[[0,"happy"]],talk:[[0,2]],pose:(o,a)=>{o.pose({armL:[8,6],armR:[8,6],bob:a<2?Math.abs(Math.sin(a*9))*.03:0}),Yt(o)}})],extra:(o,a,l)=>{et(o,0),s=An(l[1]),r=An(l[0]);let c=ht(o,["ES QUE PONES","UNA CARA MUY RARA"],1.4,[.45,1.5,-.8],56);return{update:(h,d,u)=>{N(c,h,0,t-.2,u),s(Re(t-.2,t+.3,h)),r(Re(i-.2,i+.3,h))}}},c:[[0,1.1,2],[0,.9,-.8],[0,1.05,1.7],[0,.9,-.8]],range:1.3,look:je}});ie(61,(n,e)=>{let t=L(e,"mudado"),i=L(e,"nueva");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"look"]],pose:rt}),Te({x:.4,z:-.85,y:De,eyes:[[0,"look"],[i,"sad"]],talk:[[t-.5,n]],pose:rt})],extra:s=>{et(s,0);let r=Di(s,["3 MUDANZAS","EN 2 A\xD1OS"],1.1,[0,0,0]);r.position.set(.6,1.8,-.8);let o=_e(s,["SIEMPRE \xABLA NUEVA\xBB"],1.5,[0,1.95,-.6],{bg:"#D66A86",fg:"#fff"}),a=[0,1,2].map(l=>{let c=gr(.18);return c.position.set(.9+l*.05,.02+l*.15,-1.2),s.add(c),c});return{update:(l,c,h)=>{N(r,l,t,i-.1,h),N(o,l,i,99,h),a.forEach((d,u)=>d.visible=l>t+u*.3)}}},c:[[0,1.2,2.3],[0,.85,-.8],[0,1.2,2],[0,.85,-.8]],range:1.5,look:je}});ie(62,(n,e)=>{let t=L(e,"peor"),i=L(e,"nadie");return{amb:"aula",fov:32,k:1.25,atores:[Te({x:0,z:.2,y:-.35,eyes:[[0,"down"],[i,"sad"]],pose:s=>{s.pose({armL:[40,50],armR:[12,8]}),Yt(s)}}),nn(0,{x:-2.4,z:-.8,eyes:[[0,"happy"]],pose:Er}),nn(2,{x:-1.7,z:-.9,eyes:[[0,"happy"]]}),nn(4,{x:2.2,z:-1,eyes:[[0,"happy"]],pose:Er})],extra:s=>{s.add(R(1.2,.06,.7,F("#C8A878"),0,.55,.5));let r=[ve(s,["COME SOLA ALGUNOS D\xCDAS"],2,[0,2.2,.2]),_e(s,["NADIE SABE C\xD3MO ERES DE VERDAD"],2.6,[0,2.2,.2],{bg:"#D66A86",fg:"#fff"})];return{update:(o,a,l)=>{N(r[0],o,.2,t-.1,l),N(r[1],o,i,99,l)}}},c:[[0,1.7,4.4],[0,1.1,0],[0,1.5,3.4],[0,1,.2]],range:2.6,blur:8,look:{exposure:.92,vig:.6}}});ie(63,(n,e)=>{let t=L(e,"meses"),i;return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"down"]],talk:[[0,n]],pose:rt}),Te({x:.4,z:-.85,y:De,eyes:[[0,"lookl"],[t,"wide"]],pose:rt})],extra:(s,r,o)=>{et(s,0),i=An(o[0]);let a=ve(s,["2 MESES INTENTANDO HABLARLE"],1.9,[0,1.75,-.6]);return{update:(l,c,h)=>{N(a,l,t,99,h),i(.8)}}},c:[[-.3,1.2,2.3],[0,.85,-.8],[-.2,1.15,2],[0,.85,-.8]],range:1.5,look:je}});ie(64,(n,e)=>{let t=L(e,"20"),i=L(e,"bajo"),s=L(e,"hola"),r=L(e,"corriendo");return{amb:"rellano",ambo:{piso:0,portal:!0,open:0},fov:32,k:1.25,atores:[Ae({x:-1.6,z:-1.2,eyes:[[0,"look"],[i,"wide"],[r,"shut"]],move:o=>[Rt(-1.6,6,Re(r-.3,r+1.4,o)),0,Rt(-1.2,0,Re(r-.3,r+1.4,o))],pose:(o,a)=>a>r-.3?o.walk(a*2.2):a>s&&a<s+.8?es(o,a):o.pose()}),Te({x:0,z:-3.4,eyes:[[0,"look"],[r,"wide"]],move:o=>[0,0,Rt(-3.6,-2.4,Re(i,i+1,o))],pose:(o,a)=>a>i&&a<i+1?o.walk(a):o.pose()})],extra:o=>{let a=Ms(o,[-1.6,2.45,-1.2],1,{size:100,w:500}),l=ht(o,"HOLA",.8,[-1.2,2.2,-1.2],80),c=_e(o,["\xABCOINCIDIR\xBB"],1.3,[-1,2.9,-1.6],{bg:"#F2C14E",fg:"#2A2A34"});return{update:(h,d,u)=>{o.userData.doors(Re(i-.8,i,h)),h>t&&h<i?a("\u23F1 "+Math.min(20,Math.floor((h-t)*6))+" min"):a(""),N(c,h,.2,t-.1,u),N(l,h,s,r,u)}}},c:[[1,1.8,4.6],[-.4,1.4,-1.8],[.6,1.7,4],[-.2,1.4,-1.8]],range:3.5}});ie(65,(n,e)=>{let t=L(e,"acuerdo"),i=L(e,"pense");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"look"],[i,"wide"]],pose:rt}),Te({x:.4,z:-.85,y:De,eyes:[[0,"shut"],[i,"happy"]],talk:[[t-.2,n]],pose:(s,r)=>{s.pose({armL:r<i?[150,70]:[8,6],armR:r<i?[150,70]:[8,6]}),Yt(s)}})],extra:s=>{et(s,0);let r=ht(s,"\xA1ME ACUERDO!",1.1,[.45,1.5,-.8],66),o=ht(s,"PENS\xC9 QUE TE CA\xCDA MAL",1.5,[.45,1.5,-.8],56);return{update:(a,l,c)=>{N(r,a,t-.2,i-.1,c),N(o,a,i,99,c)}}},c:[[.2,1.2,2.3],[0,.85,-.8],[.1,1.15,2],[0,.85,-.8]],range:1.5,look:je}});ie(66,(n,e)=>{let t=L(e,"que"),i=L(e,"no"),s=L(e,"frio");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"look"],[i,"flat"]],talk:[[i,n]],pose:rt}),Te({x:.4,z:-.85,y:De,eyes:[[0,"smug"]],talk:[[0,i-1.5]],pose:rt})],extra:r=>{et(r,0);let o=ht(r,["\xBFQU\xC9 PENSABAS DECIRME","TODAS ESAS MA\xD1ANAS?"],1.6,[.45,1.5,-.8],54),a=ht(r,["NO S\xC9\u2026","ALGO DEL FR\xCDO"],1.2,[-.45,1.5,-.8],60);return{update:(l,c,h)=>{N(o,l,0,i-.2,h),N(a,l,i,99,h)}}},c:[[0,1.2,2.3],[0,.85,-.8],[0,1.15,2],[0,.85,-.8]],range:1.5,look:je}});ie(67,(n,e)=>{let t=L(e,"romantico"),i=L(e,"reis"),s=L(e,"numeros");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.4,z:-.8,y:De,eyes:[[0,"flat"],[i,"happy"]],pose:(r,o)=>{r.pose({armL:[8,6],armR:[8,6],bob:o>i?Math.abs(Math.sin(o*9))*.03:0}),Yt(r)}}),Te({x:.4,z:-.85,y:De,eyes:[[0,"smug"],[i,"happy"]],talk:[[t-.5,t+.5]],pose:(r,o)=>{r.pose({armL:[8,6],armR:[8,6],bob:o>i?Math.abs(Math.sin(o*9+1))*.03:0}),Yt(r)}})],extra:r=>{et(r,0);let o=ht(r,"QU\xC9 ROM\xC1NTICO",1.2,[.45,1.5,-.8],62),a=ve(r,["SIN MIRAR LOS N\xDAMEROS"],1.8,[0,1.85,-.6]),l=fh(r,[0,1.35,.6],0,4);return{update:(c,h,d)=>{N(o,c,t-.5,i-.1,d),N(a,c,s-.5,99,d),l.intensity=4*Re(i,i+1,c)}}},c:[[0,1.2,2.3],[0,.85,-.8],[0,1.15,2],[0,.85,-.8]],range:1.5,look:je}});ie(68,(n,e)=>{let t=L(e,"luz"),i=L(e,"mueve"),s=L(e,"centimetro"),r=L(e,"agarra"),o;return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.3,z:-.8,y:De,eyes:[[0,"look"],[i,"wide"],[r+1,"heart"]],pose:rt}),Te({x:.3,z:-.85,y:De,eyes:[[0,"look"],[i,"wide"]],move:a=>[Rt(.4,.22,Re(r,r+.3,a)),De,-.85],pose:(a,l)=>{a.pose({armL:l>r?[70,90]:[8,6],armR:[8,6]}),Yt(a)}})],extra:(a,l,c)=>{o=An(c[0]);let h=mr(.4,11.75);h.position.set(0,2.15,-.9),a.add(h);let d=_e(a,["23:45"],.9,[0,2.55,-.6],{size:90,w:450}),u=ve(a,["1 cm"],.6,[0,1.45,-.5],{size:90,w:360});return{update:(f,g,E)=>{et(a,0,0);let m=f>t&&f<i?gh(f,t,i):0;a.userData.luz(m*.6),N(d,f,.1,t,E),N(u,f,s,r,E),_r(E,f>i&&f<i+.6?.03:0,f),o(Re(r,r+.5,f))}}},c:[[0,1.2,2.2],[0,.85,-.8],[0,1.1,1.8],[0,.85,-.8]],range:1.4,look:je}});ie(69,(n,e)=>{let t=L(e,"tranquilos"),i=L(e,"10");return{amb:"hueco",fov:30,k:1.25,atores:[Ou({x:0,z:-.6,move:()=>[-.3,7.5*Qe+2.92,-.4],eyes:[[0,"look"]],talk:[[t,n]],pose:(s,r)=>s.pose({armL:[12,8],armR:[70+Math.sin(r*6)*20,40]})})],extra:s=>{let r=7.5*Qe;s.userData.setCab(r),s.userData.cabLuz(0);let o=ht(s,["TRANQUILOS, ES NORMAL.","YA ESTOY EN EL EDIFICIO"],2,[0,r+5.6,-.2],54),a=_e(s,["10 MINUTOS"],1.4,[0,r+5.6,-.2]),l=Cu();return l.position.set(.3,r+4.2,-.2),s.add(l),l.userData.on(1),{update:(c,h,d)=>{N(o,c,t,i-.1,d),N(a,c,i,99,d)}}},c:[[1.6,7.5*Qe+5,5],[0,7.5*Qe+4,-.6],[1,7.5*Qe+4.6,4.4],[0,7.5*Qe+4,-.6]],range:3,look:{exposure:1.05,bloom:.45}}});ie(70,(n,e)=>{let t=L(e,"cuando"),i=L(e,"numeros");return{...Ge({luz:0}),fov:26,atores:[Ae({x:-.3,z:-.8,y:De,eyes:[[0,"look"]],pose:rt}),Te({x:.25,z:-.85,y:De,eyes:[[0,"flat"],[t,"sad"]],talk:[[t,n]],pose:rt})],extra:s=>{et(s,0);let r=ht(s,["CUANDO SALGAMOS\u2026","\xBFTODO COMO ANTES?"],1.4,[.35,1.55,-.6],56),o=ht(s,["\xBFT\xDA MIRANDO LOS N\xDAMEROS","Y YO EL M\xD3VIL?"],1.6,[.35,1.55,-.6],52);return{update:(a,l,c)=>{N(r,a,t,i-1.5,c),N(o,a,i-1.4,99,c)}}},c:[[.2,1.1,2],[0,.9,-.8],[.1,1.05,1.7],[0,.9,-.8]],k:1.75,range:1.6,look:je}});ie(71,(n,e)=>{let t=L(e,"32"),i=L(e,"no",6),s=L(e,"frio",6),r=L(e,"trato"),o;return{...Ge({luz:0}),fov:26,atores:[Ae({x:-.3,z:-.8,y:De,eyes:[[0,"down"],[i,"smug"]],talk:[[i,s+1]],pose:rt}),Te({x:.25,z:-.85,y:De,eyes:[[0,"sad"],[s,"happy"]],talk:[[r,r+1]],pose:rt})],extra:(a,l,c)=>{et(a,0),o=An(c[1]);let h=Di(a,["32 SEGUNDOS","CADA MA\xD1ANA\u2026"],1.1,[0,0,0]);h.position.set(-.9,1.8,-.6);let d=ht(a,["NO. TE HABLO DEL FR\xCDO","TODOS LOS D\xCDAS"],1.5,[-.35,1.55,-.6],54),u=ht(a,"TRATO HECHO",1.1,[.35,1.55,-.6],64),f=fh(a,[0,1.35,.6],0,4);return{update:(g,E,m)=>{N(h,g,t,i-.2,m),N(d,g,i,r-.2,m),N(u,g,r,99,m),o(Re(s,s+.5,g)),f.intensity=4*Re(s,r,g)}}},c:[[0,1.1,2],[0,.9,-.8],[0,1.05,1.7],[0,.9,-.8]],k:1.75,range:1.6,look:je}});ie(72,(n,e)=>{let t=L(e,"bolsa"),i=L(e,"son"),s=L(e,"cuenta"),r=L(e,"ti");return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.3,z:-.8,y:De,eyes:[[0,"look"],[r,"happy"]],pose:rt}),Te({x:.25,z:-.85,y:De,eyes:[[0,"happy"]],talk:[[i,s]],pose:(o,a)=>{o.pose({armL:[8,6],armR:[a>s?60+Math.sin(a*8)*15:40,50]}),Yt(o)}})],extra:o=>{et(o,0);let a=Ar();a.position.set(.6,.02,-.5),o.add(a);let l=_e(o,["23:55"],.9,[0,1.9,-.6],{size:90,w:450}),c=ht(o,["SON LAS UVAS DE MI FAMILIA\u2026","PERO YO ESTOY AQU\xCD"],1.6,[.35,1.5,-.8],50),h=[];for(let d=0;d<24;d++){let u=Ug();u.position.set((d<12?.25:-.25)+d%4*.05-.08,.05,-.45+Math.floor(d%12/4)*.06),o.add(u),h.push(u)}return{update:(d,u,f)=>{N(l,d,.1,i-.2,f),N(c,d,i,s-.1,f),h.forEach((g,E)=>g.visible=d>s+(E<12?E*.12:r-s+(E-12)*.05))}}},c:[[0,1.4,2.1],[0,.7,-.7],[0,1.3,1.8],[0,.7,-.7]],range:1.4,look:je}});ie(73,(n,e)=>{let t=L(e,"cuartos"),i=L(e,"primera");return{amb:"hueco",fov:30,k:1.25,atores:[Ae({x:-.3,z:-.6,y:7.5*Qe+.06+De,pose:rt}),Te({x:.25,z:-.7,y:7.5*Qe+.06+De,pose:rt})],extra:s=>{let r=7.5*Qe;s.userData.setCab(r),s.userData.cabLuz(0);let o=zt(1,.6,"#9FC8FF",2.2);o.position.set(3.2,9*Qe+1.4,-.4),s.add(o);let a=Dg(s,6),l=[ve(s,["LOS CUARTOS\u2026"],1.6,[0,r+5,.4]),_e(s,["\u{1F514} \xA1DONG!"],1.4,[0,r+5,.4],{bg:"#C9361F",fg:"#fff"})];return{update:(c,h,d)=>{a(c,new I(2.4,9*Qe+1-c*.4%3,-.4),d),N(l[0],c,t-.2,i-.1,d),N(l[1],c,i,99,d)}}},cam:[[0,[2,9*Qe+1.8,6],[1.6,9*Qe+1.2,-.6]],[n,[.6,7.5*Qe+2.6,6],[0,7.5*Qe+2.2,-.6]]],f:[[0,6.6],[n,6.4]],range:3.5,look:{exposure:1.05,bloom:.45}}});ie(74,(n,e)=>{let t=L(e,"atraganta"),i=L(e,"nueve"),s=L(e,"12"),r=o=>o<0?0:o<t?1+Math.floor(o/.9):o<i?6:o<i+1.4?9:o<s?9+Math.floor((o-i-1.4)/.8)+1:12;return{...Ge({luz:0}),fov:28,atores:[Ae({x:-.3,z:-.8,y:De,eyes:[[0,"look"],[s,"happy"]],pose:(o,a)=>{o.pose({armL:[8,6],armR:[100+Math.abs(Math.sin(a*4))*20,30]}),Yt(o)}}),Te({x:.25,z:-.85,y:De,eyes:[[0,"look"],[t,"shut"],[t+.6,"happy"]],pose:(o,a)=>{o.pose({armL:[100+Math.abs(Math.cos(a*4))*20,30],armR:[8,6],bob:a>t&&a<t+1.5?Math.abs(Math.sin(a*12))*.03:0}),Yt(o)}})],extra:o=>{et(o,0);let a=Ms(o,[0,1.9,-.6],.9,{size:100,w:450}),l=ve(o,["\xA1SE ATRAGANTA!"],1.2,[.5,1.4,-.7]);return{update:(c,h,d)=>{a("\u{1F347} "+r(c)),N(l,c,t,t+1.8,d)}}},c:[[0,1.15,2.1],[0,.9,-.8],[0,1.1,1.8],[0,.9,-.8]],range:1.4,look:je}});Pg(75,["ascensor"],[(n,e)=>({amb:"barrio",ambo:{night:!0},fov:34,k:1.25,atores:[],extra:t=>{let i=hh(t,7,[-12,12,6,16,-24]),s=_e(t,["\xA1FELIZ A\xD1O NUEVO!"],3.2,[0,4.4,-6],{bg:"#C9361F",fg:"#fff"});return{update:(r,o,a)=>{i(r,1),N(s,r,.3,99,a)}}},c:[[0,2.2,8],[0,4,-10],[0,2.6,7],[0,4.2,-10]],range:8,blur:4,look:{exposure:1.05,bloom:.7}}),(n,e)=>{let t=L(e,"beso"),i=L(e,"mejilla"),s;return{...Ge({luz:0}),fov:26,atores:[Ae({x:-.2,z:-.8,y:De,eyes:[[0,"look"],[t+.2,"wide"],[i+.6,"heart"]],pose:rt}),Te({x:.25,z:-.85,y:De,eyes:[[0,"look"],[t,"shut"],[i+.6,"happy"]],move:r=>[Rt(.25,.02,Re(t-.3,t,r))+Rt(0,.2,Re(t+.5,t+.9,r)),De,-.85],pose:rt})],extra:(r,o,a)=>{et(r,0),s=An(a[0]);let l=ve(r,["EN LA MEJILLA. R\xC1PIDO."],1.6,[0,1.85,-.6]),c=ba(r,.3),h=hh(r,3,[-3,3,3,5,-4]);return{update:(d,u,f)=>{N(l,d,i,99,f),s(Re(t,t+.5,d)),c.visible=d>t,c.position.set(-.1,1.4+d*.3%.3,-.8),zn(c,f)}}},c:[[0,1.05,1.9],[0,.9,-.8],[0,1,1.6],[0,.9,-.8]],range:1.2,look:je}}]);ie(76,(n,e)=>{let t=L(e,"mira"),i;return{...Ge({luz:0}),fov:26,atores:[Ae({x:-.2,z:-.8,y:De,eyes:[[0,"heart"]],pose:rt}),Te({x:.2,z:-.85,y:De,eyes:[[0,"happy"],[t,"look"]],talk:[[0,1.2]],pose:(s,r)=>{s.pose({armL:[8,6],armR:[8,6],head:r>t?-12:0}),Yt(s)}})],extra:(s,r,o)=>{et(s,0),i=An(o[0]);let a=An(o[1]),l=ht(s,"FELIZ A\xD1O NUEVO",1.3,[.3,1.5,-.8],60),c=ve(s,["\u2026Y MIRA A LA PUERTA"],1.5,[0,1.85,-.6]),h=ba(s,.3);return{update:(d,u,f)=>{N(l,d,0,t-.1,f),N(c,d,t,99,f),i(1),a(.7),h.position.set(-.2,1.35+d*.3%.3,-.8),zn(h,f)}}},c:[[0,1.05,1.9],[0,.9,-.8],[0,1,1.6],[0,.9,-.8]],range:1.2,look:je}});ie(77,(n,e)=>{let t=L(e,"luz"),i=L(e,"sube"),s=L(e,"puerta");return{...Ge(),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"wide"],[s,"look"]],move:r=>[Et[0],r<t?De:0,Et[1]],pose:(r,o)=>o<t?rt(r):r.pose()}),Te({x:yt[0],z:yt[1],eyes:[[0,"wide"],[s,"look"]],move:r=>[yt[0],r<t?De:0,yt[1]],pose:(r,o)=>o<t?rt(r):r.pose()})],extra:r=>{let o=_e(r,["\xA1CLANC!"],1.3,[0,2.2,-.4],{size:100,bg:"#C9361F",fg:"#fff"}),a=ve(r,["\xA1VUELVE LA LUZ!"],1.5,[0,2.2,-.4]),l=_e(r,["PISO 8"],1,[0,2.2,-.4],{size:90,w:450});return{update:(c,h,d)=>{et(r,Re(t-.2,t+.2,c)),r.userData.display.userData.set(c>i+1.2?8:"7\xBD",c>i&&c<i+1.2?"\u25B2":""),r.userData.doors(Re(s,s+1,c)),N(o,c,0,t-.1,d),N(a,c,t,i+1.1,d),N(l,c,i+1.2,99,d),_r(d,c<.5?.04:0,c)}}},c:on(-.2,.2),range:2,lookFn:r=>r<t?je:{}}});ie(78,(n,e)=>{let t=L(e,"tecnico"),i=L(e,"abuela"),s=L(e,"padres"),r=L(e,"vecinos"),o=L(e,"aplaudiendo"),a=l=>c=>c>l-.2;return{amb:"rellano",ambo:{piso:8,open:1,night:!0},fov:34,k:1.25,atores:[Ae({x:-.3,z:-3.5,eyes:[[0,"wide"]]}),Te({x:.3,z:-3.5,eyes:[[0,"wide"]]}),Ou({x:1.2,z:-2.2,eyes:[[0,"happy"]],pose:es}),ph({x:-1.3,z:-2,eyes:[[0,"happy"]]}),Bu({x:1.9,z:-1.4,eyes:[[0,"happy"]]}),Ln({outfit:"terno",glow:0,x:2.6,z:-1.6,eyes:[[0,"happy"]]}),...[0,2,3,6,7].map((l,c)=>nn(l,{x:-3.6+c*.75,z:-.4-c%2*.5,outfit:"jaleco",eyes:[[0,"happy"]],pose:(h,d)=>d>o-.3?Nu(h,d+c):h.pose()}))],extra:(l,c,h)=>{let d=[];[5,6,7,8,9].forEach(f=>{let g=new W(new ft(.04,.02,.14,10),F("#F2E2A0",{transparent:!0,opacity:.8}));l.add(g),d.push([g,f])});let u=[ve(l,["EL T\xC9CNICO"],1.1,[1.2,2.25,-2.2]),ve(l,["TU ABUELA"],1.1,[-1.3,2.25,-2]),ve(l,["SUS PADRES"],1.2,[2.3,2.25,-1.5]),_e(l,["MEDIA ESCALERA EN PIJAMA"],2.4,[-2.2,2.4,-.5])];return{update:(f,g,E)=>{h[2].root.visible=f>t-.3,h[3].root.visible=f>i-.3,h[4].root.visible=h[5].root.visible=f>s-.3;for(let m=6;m<11;m++)h[m].root.visible=f>r-.3;d.forEach(([m,p])=>{let v=ni(h[p]);m.position.set(v.x,v.y+.1,v.z+.05),m.visible=h[p].root.visible&&f<o-.3}),N(u[0],f,t,99,E),N(u[1],f,i,99,E),N(u[2],f,s,99,E),N(u[3],f,r,99,E)}}},c:[[0,2,4.6],[0,1.3,-2],[0,1.9,4],[0,1.3,-2]],range:4,blur:6}});ie(79,(n,e)=>{let t=L(e,"turrones"),i=L(e,"comio");return{amb:"rellano",ambo:{piso:8,open:1,night:!0},fov:30,atores:[ph({x:-.8,z:-1.6,eyes:[[0,"down"],[t-.4,"angry"]],talk:[[t-.8,t+.4]],pose:s=>s.pose({armL:[12,8],armR:[80,30]})}),Te({x:.6,z:-2,eyes:[[0,"flat"],[i+.6,"smug"]],talk:[[i-1,i+.4]]}),Ae({x:0,z:-2.2,eyes:[[0,"flat"],[i+.6,"happy"]],pose:mi})],extra:(s,r,o)=>{let a=ii();a.userData.T.forEach(h=>h.visible=!1),s.add(a);let l=ht(s,"\xBFY LOS TURRONES?",1.3,[-.8,2.2,-1.6],62),c=ht(s,["SE LOS COMI\xD3","EL ASCENSOR"],1.2,[.7,2.2,-2],60);return{update:(h,d,u)=>{ts(a,o[2]),N(l,h,t-.8,i-1.3,u),N(c,h,i-1.1,99,u)}}},c:[[0,1.6,2.6],[0,1.3,-1.9],[.2,1.6,2.2],[0,1.3,-1.9]],range:2.4}});ie(80,(n,e)=>{let t=L(e,"duda"),i=L(e,"asustada"),s=L(e,"metro"),r=L(e,"nadie");return{amb:"rellano",ambo:{piso:3},fov:30,atores:[Ae({x:0,z:-1.4,eyes:[[0,"look"],[t,"down"],[i,"sad"]],pose:(o,a)=>o.pose({armL:[12,8],armR:[a>t?110:12,120],head:a>t?8:0})})],extra:o=>{let a=ve(o,["AL D\xCDA SIGUIENTE \xB7 FUNCIONA"],2.2,[0,2.75,-1.6]),l=[Di(o,["\xBFSOLO PORQUE","ESTABA ASUSTADA?"],1.5,[0,0,0]),Di(o,["\xBFPOR EL METRO","CUADRADO?"],1.5,[0,0,0]),Di(o,["\xBFPORQUE NO HAB\xCDA","NADIE M\xC1S?"],1.5,[0,0,0])];return l.forEach((c,h)=>c.position.set(-1.5+h*1.5,2.15+h%2*.3,-1.3)),{update:(c,h,d)=>{o.userData.display.userData.set(3),N(a,c,.1,t-.1,d),N(l[0],c,i-1.2,99,d),N(l[1],c,s-.8,99,d),N(l[2],c,r-.6,99,d)}}},c:[[0,1.7,3.6],[0,1.6,-1.5],[0,1.7,3],[0,1.7,-1.5]],range:2.4}});ie(81,(n,e)=>{let t=L(e,"llamas"),i=L(e,"preguntas");return{amb:"rellano",ambo:{piso:9},fov:30,atores:[Ae({x:-1.2,z:-1.6,eyes:[[0,"smug"],[i,"look"]],move:s=>[Rt(.6,2.4,Re(0,t-.3,s)),0,-1.9],pose:(s,r)=>r<t-.3?s.walk(r):r<t+1?s.pose({armL:[12,8],armR:[80+Math.abs(Math.sin(r*12))*10,0]}):s.pose(),talk:[[i,n]]}),Te({x:3.25,z:-2.6,eyes:[[0,"wide"],[i+1,"happy"]],move:s=>[3.25,s>t+1?0:-5,-2.6]})],extra:s=>{let r=ve(s,["NO ESPERAS 20 MINUTOS"],1.9,[1.6,2.8,-2.2]),o=_e(s,["TOC TOC"],.9,[2.8,2.3,-2.6],{size:90,w:450}),a=ht(s,["\xBFQUIERES IR A","DAR UNA VUELTA?"],1.3,[2.4,2.35,-1.9],56);return{update:(l,c,h)=>{N(r,l,.3,t-.1,h),N(o,l,t,t+1.2,h),N(a,l,i,99,h)}}},c:[[1,1.7,2.6],[2.4,1.3,-2.2],[1.6,1.65,2],[2.8,1.3,-2.2]],range:2.4}});ie(82,(n,e)=>({amb:"rellano",ambo:{piso:9},fov:28,atores:[Te({x:3.3,z:-2.4,eyes:[[0,"happy"]],talk:[[0,n]]}),Ae({x:2.6,z:-1.9,eyes:[[0,"heart"]]})],extra:(t,i,s)=>{let r=ht(t,"\xA1S\xCD!",.8,[3.3,2.15,-2.3],90),o=An(s[1]);return{update:(a,l,c)=>{N(r,a,0,99,c),o(.9)}}},c:[[3,1.6,1],[3,1.4,-2.2],[3,1.6,.8],[3,1.4,-2.2]],range:1.6}));ie(83,(n,e)=>{let t=L(e,"abierto"),i=L(e,"nora"),s=L(e,"ti"),r=L(e,"bajamos");return{amb:"rellano",ambo:{piso:9,open:1},fov:32,atores:[Ae({x:-.5,z:-1.4,eyes:[[0,"look"],[s,"lookl"],[r+.8,"happy"]]}),Te({x:.5,z:-1.5,eyes:[[0,"happy"],[i,"look"],[s,"lookl"],[r,"smug"]],talk:[[r,n]],pose:(o,a)=>o.pose({head:a>i&&a<s?-15:0})})],extra:o=>{let a=[ve(o,["ABIERTO. ESPERANDO."],1.8,[0,2.95,-2.6])],l=ht(o,"\xBFBAJAMOS ANDANDO?",1.5,[.6,2.3,-1.5],58);return{update:(c,h,d)=>{N(a[0],c,t-.3,r-.2,d),N(l,c,r,99,d)}}},c:[[0,1.7,3],[0,1.4,-2.2],[0,1.65,2.5],[0,1.4,-2]],range:2.6}});ie(84,(n,e)=>{let t=L(e,"largos"),i=(s,r)=>Rt(-3.4+r,1.6+r,Re(0,n+1,s));return{amb:"escalera",ambo:{piso:9},fov:32,k:1.25,atores:[Te({x:-3,z:-1,move:s=>{let r=i(s,.3);return[r,Sa(r),-1]},pose:(s,r)=>s.walk(r*1.2),eyes:[[0,"happy"]]}),Ae({x:-3,z:-1.5,move:s=>{let r=i(s,-.1);return[r,Sa(r),-1.5]},pose:(s,r)=>s.walk(r*1.2+1),eyes:[[0,"happy"]]})],extra:s=>{let r=_e(s,["9 PISOS DE ESCALERAS"],2.2,[-.6,3.5,-1]),o=ve(s,["\u2026Y NO SE TE HACEN LARGOS"],2.4,[-.6,3.5,-1]);return{update:(a,l,c)=>{N(r,a,.1,t-.6,c),N(o,a,t-.5,99,c)}}},c:[[-.6,3,5.6],[-1.2,2.2,-1.2],[.4,2.4,5],[0,1.6,-1.2]],range:4}});ie(85,(n,e)=>{let t=L(e,"burbuja"),i=L(e,"pero"),s=L(e,"contais");return{amb:"barrio",ambo:{night:!1,dusk:!0},fov:32,k:1.25,atores:[Ae({x:-.35,z:1,eyes:[[0,"happy"]],move:r=>[-.35,0,Rt(-2,1,Re(0,n*.6,r))],pose:(r,o)=>o<n*.6?r.walk(o):r.pose({armL:[12,8],armR:[35,20]})}),Te({x:.35,z:1,eyes:[[0,"happy"]],move:r=>[.35,0,Rt(-2,1,Re(0,n*.6,r))],pose:(r,o)=>o<n*.6?r.walk(o+1):r.pose({armL:[35,20],armR:[12,8]})})],extra:(r,o,a)=>{let l=yr(r,1.1,"#FFB0C8"),c=[_e(r,["UN ASCENSOR TE METE EN LA BURBUJA\u2026"],2.8,[0,3,0],{size:62,w:1300}),ve(r,["\u2026LO QUE HACE QUE SE QUEDE:"],2.4,[0,3,0]),_e(r,["LO QUE OS CONT\xC1IS CUANDO SE VA LA LUZ"],3,[0,3,0],{size:60,w:1400,bg:"#E8667F",fg:"#fff"})];return{update:(h,d,u)=>{let f=a[0].root.position.z;l.position.set(0,1,f),l.scale.setScalar(Math.max(.01,Re(t,t+1,h))),N(c[0],h,t-.5,i-.1,u),N(c[1],h,i,s-1.4,u),N(c[2],h,s-1.3,99,u)}}},c:[[0,1.8,6.4],[0,1.6,.6],[0,1.8,5.6],[0,1.6,.8]],range:4,blur:6}});ie(86,(n,e)=>{let t=L(e,"pulsa"),i=L(e,"intentes"),s=L(e,"espera"),r=L(e,"cables"),o=L(e,"aire"),a=L(e,"ayuda");return{amb:"gris",fov:30,atores:[Ae({x:-1.4,z:0,eyes:[[0,"happy"]],pose:(l,c)=>c>t?dh(l):l.pose()})],extra:l=>{let c=[_e(l,["1. PULSA LA ALARMA \u{1F514}"],2.4,[.6,2.6,0],{bg:"#2A7A4A",fg:"#fff"}),_e(l,["2. NO INTENTES SALIR"],2.4,[.6,2.05,0],{bg:"#C9361F",fg:"#fff"}),_e(l,["3. ESPERA TRANQUILO"],2.4,[.6,1.5,0],{bg:"#2A7A9A",fg:"#fff"}),ve(l,["LOS CABLES AGUANTAN \xB7 EL AIRE NO SE ACABA"],3.2,[.2,.75,.3],{size:56,w:1400}),_e(l,["LA AYUDA SIEMPRE LLEGA"],2.4,[.2,.25,.4])];return{update:(h,d,u)=>{N(c[0],h,t,99,u),N(c[1],h,i,99,u),N(c[2],h,s,99,u),N(c[3],h,r,99,u),N(c[4],h,a,99,u)}}},c:[[0,1.6,4.6],[0,1.4,0],[0,1.6,4.2],[0,1.4,0]],k:1.25,range:3}});ie(87,(n,e)=>{let t=L(e,"suscribete");return{amb:"rellano",ambo:{piso:9,open:1},fov:32,atores:[Te({x:-1.8,z:-1,eyes:[[0,"happy"]],pose:es}),Ae({x:-1,z:-1,eyes:[[0,"happy"]],pose:(i,s)=>s>t?dh(i):es(i,s)})],extra:i=>{let s=lh(2.4);s.position.set(1.1,1.9,-1.2),i.add(s);let r=uh(i,14,"#FFE27A");return{update:(o,a,l)=>{let c=Re(t-.3,t,o);s.scale.setScalar(Math.max(.01,c)),s.rotation.z=o>t+.6&&o<t+1.6?Math.sin(o*40)*.05:0,r(o,[1.1,1.9,-1.1,1.1],Re(t,t+.3,o))}}},c:[[0,1.7,4.6],[-.2,1.6,-1.2],[0,1.7,4.2],[-.2,1.6,-1.2]],k:1.25,range:6,blur:4}});ie(88,(n,e)=>{let t=L(e,"quien");return{...Ge({piso:9}),fov:30,atores:[Ae({x:Et[0],z:Et[1],eyes:[[0,"happy"]],pose:es}),Te({x:yt[0],z:yt[1],eyes:[[0,"happy"]],pose:es})],extra:i=>{let s=ve(i,["CU\xC9NTAMELO EN LOS COMENTARIOS"],2.2,[0,2.2,-.3],{size:62,w:1200}),r=_e(i,["\xBFCON QUI\xC9N TE QUEDAR\xCDAS","ATRAPADO EN UN ASCENSOR?"],2,[0,.55,.3],{size:62,w:1e3,h:240});return{update:(o,a,l)=>{N(s,o,.1,99,l),N(r,o,t-.4,99,l)}}},c:on(0,0,1.2,.4),range:2.4}});function Ng(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new da(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=vr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=vr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(Ng(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=vr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
