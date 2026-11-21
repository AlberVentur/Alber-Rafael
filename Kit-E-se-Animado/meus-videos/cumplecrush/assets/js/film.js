var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var Kc="170";var Ff=0,Xh=1,Pf=2;var eu=1,jc=2,bi=3,Ji=0,sn=1,It=2,fi=0,Zi=1,Tn=2,qh=3,Yh=4,If=5,gs=100,Df=101,Lf=102,Uf=103,Nf=104,Of=200,Bf=201,Hf=202,zf=203,xl=204,Rl=205,kf=206,Gf=207,Vf=208,Wf=209,Xf=210,qf=211,Yf=212,Zf=213,$f=214,Cl=0,Fl=1,Pl=2,tr=3,Il=4,Dl=5,Ll=6,Ul=7,tu=0,Jf=1,Qf=2,pi=0,Kf=1,jf=2,e0=3,t0=4,n0=5,i0=6,s0=7;var nu=300,nr=301,ir=302,Nl=303,Ol=304,ga=306,dn=1e3,ys=1001,Bl=1002,Bn=1003,r0=1004;var po=1005;var di=1006,Xa=1007;var vs=1008;var Ci=1009,iu=1010,su=1011,qr=1012,eh=1013,Fi=1014,ui=1015,xn=1016,th=1017,nh=1018,sr=1020,ru=35902,ou=1021,au=1022,ei=1023,lu=1024,cu=1025,Ks=1026,rr=1027,ih=1028,sh=1029,hu=1030,rh=1031;var oh=1033,Vo=33776,Wo=33777,Xo=33778,qo=33779,Hl=35840,zl=35841,kl=35842,Gl=35843,Vl=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,Zl=37810,$l=37811,Jl=37812,Ql=37813,Kl=37814,jl=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,Yo=36492,oc=36494,ac=36495,du=36283,lc=36284,cc=36285,hc=36286;var Zo=2300,dc=2301,qa=2302,Zh=2400,$h=2401,Jh=2402;var o0=3200,gr=3201;var uu=0,a0=1,qi="",Gt="srgb",ts="srgb-linear",Ea="linear",wt="srgb";var Is=7680;var Qh=519,l0=512,c0=513,h0=514,fu=515,d0=516,u0=517,f0=518,p0=519,uc=35044;var Kh="300 es",xi=2e3,$o=2001,Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ya=Math.PI/180,Jo=180/Math.PI;function $i(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function m0(n,e){return(n%e+e)%e}function Za(n,e,t){return(1-t)*n+t*e}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],D=s[2],C=s[5],b=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*_+l*C,r[6]=o*p+a*y+l*b,r[1]=c*E+h*v+d*D,r[4]=c*m+h*_+d*C,r[7]=c*p+h*y+d*b,r[2]=u*E+f*v+g*D,r[5]=u*m+f*_+g*C,r[8]=u*p+f*y+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$a=new Je;function pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function g0(){let n=Qo("canvas");return n.style.display="block",n}var jh={};function kr(n){n in jh||(jh[n]=!0,console.warn(n))}function E0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function y0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function v0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var mt={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===wt&&(n.r=Ri(n.r),n.g=Ri(n.g),n.b=Ri(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===wt&&(n.r=js(n.r),n.g=js(n.g),n.b=js(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qi?Ea:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ed=[.64,.33,.3,.6,.15,.06],td=[.2126,.7152,.0722],nd=[.3127,.329],id=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[ts]:{primaries:ed,whitePoint:nd,transfer:Ea,toXYZ:id,fromXYZ:sd,luminanceCoefficients:td,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:ed,whitePoint:nd,transfer:wt,toXYZ:id,fromXYZ:sd,luminanceCoefficients:td,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});var Ds,fc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Qo("canvas")),Ds.width=e.width,Ds.height=e.height;let i=Ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_0=0,Ko=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var A0=0,bn=class n extends Qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ys,s=ys,r=di,o=vs,a=ei,l=Ci,c=n.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=$i(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dn:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dn:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=nu;bn.DEFAULT_ANISOTROPY=1;var Rt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,D=(p+1)/2,C=(h+u)/4,b=(d+E)/4,F=(g+m)/4;return _>y&&_>D?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=C/i,r=b/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=b/r,s=F/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new bn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends pc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},jo=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let D=Math.sqrt(_),C=Math.atan2(D,p*v);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let y=a*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new I,rd=new Ki,Pi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),go.subVectors(this.max,Pr),Ls.subVectors(e.a,Pr),Us.subVectors(e.b,Pr),Ns.subVectors(e.c,Pr),zi.subVectors(Us,Ls),ki.subVectors(Ns,Us),cs.subVectors(Ls,Ns);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-cs.z,cs.y,zi.z,0,-zi.x,ki.z,0,-ki.x,cs.z,0,-cs.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-cs.y,cs.x,0];return!Ka(t,Ls,Us,Ns,go)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Ls,Us,Ns,go))?!1:(Eo.crossVectors(zi,ki),t=[Eo.x,Eo.y,Eo.z],Ka(t,Ls,Us,Ns,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_i=[new I,new I,new I,new I,new I,new I,new I,new I],Qn=new I,mo=new Pi,Ls=new I,Us=new I,Ns=new I,zi=new I,ki=new I,cs=new I,Pr=new I,go=new I,Eo=new I,hs=new I;function Ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var M0=new Pi,Ir=new I,ja=new I,ji=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):M0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(ja)),this.expandByPoint(Ir.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new I,el=new I,yo=new I,Gi=new I,tl=new I,vo=new I,nl=new I,ea=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){el.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,o=-this.direction.dot(yo),a=Gi.dot(this.direction),l=-Gi.dot(yo),c=Gi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(el).addScaledVector(yo,u),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){tl.subVectors(t,e),vo.subVectors(i,e),nl.crossVectors(tl,vo);let o=this.direction.dot(nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let l=a*this.direction.dot(vo.crossVectors(Gi,vo));if(l<0)return null;let c=a*this.direction.dot(tl.cross(Gi));if(c<0||l+c>o)return null;let h=-a*Gi.dot(nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,T0)}lookAt(e,t,i){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Vi.crossVectors(i,Nn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Vi.crossVectors(i,Nn)),Vi.normalize(),_o.crossVectors(Nn,Vi),s[0]=Vi.x,s[4]=_o.x,s[8]=Nn.x,s[1]=Vi.y,s[5]=_o.y,s[9]=Nn.y,s[2]=Vi.z,s[6]=_o.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],v=i[3],_=i[7],y=i[11],D=i[15],C=s[0],b=s[4],F=s[8],S=s[12],A=s[1],P=s[5],H=s[9],z=s[13],q=s[2],ee=s[6],$=s[10],oe=s[14],Z=s[3],pe=s[7],_e=s[11],Ne=s[15];return r[0]=o*C+a*A+l*q+c*Z,r[4]=o*b+a*P+l*ee+c*pe,r[8]=o*F+a*H+l*$+c*_e,r[12]=o*S+a*z+l*oe+c*Ne,r[1]=h*C+d*A+u*q+f*Z,r[5]=h*b+d*P+u*ee+f*pe,r[9]=h*F+d*H+u*$+f*_e,r[13]=h*S+d*z+u*oe+f*Ne,r[2]=g*C+E*A+m*q+p*Z,r[6]=g*b+E*P+m*ee+p*pe,r[10]=g*F+E*H+m*$+p*_e,r[14]=g*S+E*z+m*oe+p*Ne,r[3]=v*C+_*A+y*q+D*Z,r[7]=v*b+_*P+y*ee+D*pe,r[11]=v*F+_*H+y*$+D*_e,r[15]=v*S+_*z+y*oe+D*Ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],E=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+E*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],E=e[13],m=e[14],p=e[15],v=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*E*c-g*d*c+g*a*f-o*E*f-h*a*p+o*d*p,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=t*v+i*_+s*y+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return e[0]=v*b,e[1]=(E*u*r-d*m*r-E*s*f+i*m*f+d*s*p-i*u*p)*b,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*b,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*b,e[4]=_*b,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*b,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*b,e[8]=y*b,e[9]=(g*d*r-h*E*r-g*i*f+t*E*f+h*i*p-t*d*p)*b,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*p+t*a*p)*b,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*f-t*a*f)*b,e[12]=D*b,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*b,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*b,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,E=o*h,m=o*d,p=a*d,v=l*c,_=l*h,y=l*d,D=i.x,C=i.y,b=i.z;return s[0]=(1-(E+p))*D,s[1]=(f+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(u+p))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(g+_)*b,s[9]=(m-v)*b,s[10]=(1-(u+E))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);let c=1/r,h=1/o,d=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(a===xi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$o)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=xi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,f=(i+s)*h,g,E;if(a===xi)g=(o+r)*d,E=-2*d;else if(a===$o)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Os=new I,Kn=new Ct,S0=new I(0,0,0),T0=new I(1,1,1),Vi=new I,_o=new I,Nn=new I,od=new Ct,ad=new Ki,mi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},b0=0,ld=new I,Bs=new Ki,Mi=new Ct,Ao=new I,Dr=new I,w0=new I,x0=new Ki,cd=new I(1,0,0),hd=new I(0,1,0),dd=new I(0,0,1),ud={type:"added"},R0={type:"removed"},Hs={type:"childadded",child:null},il={type:"childremoved",child:null},Jt=class n extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new mi,i=new Ki,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(cd,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return ld.copy(e).applyQuaternion(this.quaternion),this.position.add(ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cd,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ao.copy(e):Ao.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Dr,Ao,this.up):Mi.lookAt(Ao,Dr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Mi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Jt.DEFAULT_UP=new I(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new I,Si=new I,sl=new I,Ti=new I,zs=new I,ks=new I,fd=new I,rl=new I,ol=new I,al=new I,ll=new Rt,cl=new Rt,hl=new Rt,Yi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),Si.subVectors(i,t),sl.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Si),l=jn.dot(sl),c=Si.dot(Si),h=Si.dot(sl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,i),hl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Si.subVectors(e,t),jn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,i),ks.subVectors(r,i),rl.subVectors(e,i);let l=zs.dot(rl),c=ks.dot(rl);if(l<=0&&c<=0)return t.copy(i);ol.subVectors(e,s);let h=zs.dot(ol),d=ks.dot(ol);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(zs,o);al.subVectors(e,r);let f=zs.dot(al),g=ks.dot(al);if(g>=0&&f<=g)return t.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ks,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return fd.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(fd,a);let p=1/(m+E+u);return o=E*p,a=u*p,t.copy(i).addScaledVector(zs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=m0(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=dl(o,r,e+1/3),this.g=dl(o,r,e),this.b=dl(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=mu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return mt.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(mn.copy(this),t);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Gt){mt.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,s=mn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Mo);let i=Za(Wi.h,Mo.h,t),s=Za(Wi.s,Mo.s,t),r=Za(Wi.l,Mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new de;de.NAMES=mu;var C0=0,Ii=class extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=$i(),this.name="",this.blending=Zi,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Rl,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xl&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},et=class extends Ii{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new I,So=new ce,rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uc,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),e}};var na=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ia=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var St=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},F0=0,Xn=new Ct,ul=new Jt,Gs=new I,On=new Pi,Lr=new Pi,nn=new I,Kt=class n extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pu(e)?ia:na)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(On.min,Lr.min),On.expandByPoint(nn),nn.addVectors(On.max,Lr.max),On.expandByPoint(nn)):(On.expandByPoint(Lr.min),On.expandByPoint(Lr.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),nn.add(Gs)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new I,l[F]=new I;let c=new I,h=new I,d=new I,u=new ce,f=new ce,g=new ce,E=new I,m=new I;function p(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,H=A.count;for(let z=P,q=P+H;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new I,y=new I,D=new I,C=new I;function b(F){D.fromBufferAttribute(s,F),C.copy(D);let S=a[F];_.copy(S),_.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(C,S);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,H=A.count;for(let z=P,q=P+H;z<q;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new rn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pd=new Ct,ds=new ea,To=new ji,md=new I,bo=new I,wo=new I,xo=new I,fl=new I,Ro=new I,gd=new I,Co=new I,k=class extends Jt{constructor(e=new Kt,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(fl.fromBufferAttribute(d,e),o?Ro.addScaledVector(fl,h):Ro.addScaledVector(fl.sub(t),h))}t.add(Ro)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(To.containsPoint(ds.origin)===!1&&(ds.intersectSphere(To,md)===null||ds.origin.distanceToSquared(md)>(e.far-e.near)**2))&&(pd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(pd),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let C=a.getX(y),b=a.getX(y+1),F=a.getX(y+2);s=Fo(this,p,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=Fo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,D=_;y<D;y+=3){let C=y,b=y+1,F=y+2;s=Fo(this,p,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let v=m,_=m+1,y=m+2;s=Fo(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function P0(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ji,a),l===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Co);return c<t.near||c>t.far?null:{distance:c,point:Co.clone(),object:n}}function Fo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,bo),n.getVertexPosition(l,wo),n.getVertexPosition(c,xo);let h=P0(n,e,t,i,bo,wo,xo,gd);if(h){let d=new I;Yi.getBarycoord(gd,bo,wo,xo,d),s&&(h.uv=Yi.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Yi.getNormal(bo,wo,xo,u.normal),h.face=u,h.barycoord=d}return h}var wn=class n extends Kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(d,2));function g(E,m,p,v,_,y,D,C,b,F,S){let A=y/b,P=D/F,H=y/2,z=D/2,q=C/2,ee=b+1,$=F+1,oe=0,Z=0,pe=new I;for(let _e=0;_e<$;_e++){let Ne=_e*P-z;for(let nt=0;nt<ee;nt++){let Pt=nt*A-H;pe[E]=Pt*v,pe[m]=Ne*_,pe[p]=q,c.push(pe.x,pe.y,pe.z),pe[E]=0,pe[m]=0,pe[p]=C>0?1:-1,h.push(pe.x,pe.y,pe.z),d.push(nt/b),d.push(1-_e/F),oe+=1}}for(let _e=0;_e<F;_e++)for(let Ne=0;Ne<b;Ne++){let nt=u+Ne+ee*_e,Pt=u+Ne+ee*(_e+1),Q=u+(Ne+1)+ee*(_e+1),ae=u+(Ne+1)+ee*_e;l.push(nt,Pt,ae),l.push(Pt,Q,ae),Z+=6}a.addGroup(f,Z,S),f+=Z,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){let e={};for(let t=0;t<n.length;t++){let i=or(n[t]);for(let s in i)e[s]=i[s]}return e}function I0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Er={clone:or,merge:_n},D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Ii{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},sa=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new I,Ed=new ce,yd=new ce,hn=class extends sa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,yd),t.subVectors(yd,Ed)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Ws=1,gc=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Vs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new hn(Vs,Ws,e,t);r.layers=this.layers,this.add(r);let o=new hn(Vs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new hn(Vs,Ws,e,t);a.layers=this.layers,this.add(a);let l=new hn(Vs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new hn(Vs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ra=class extends bn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ec=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ra(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:fi});r.uniforms.tEquirect.value=t;let o=new k(s,r),a=t.minFilter;return t.minFilter===vs&&(t.minFilter=di),new gc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},pl=new I,U0=new I,N0=new Je,wi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=pl.subVectors(i,t).cross(U0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||N0.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new ji,Po=new I,Yr=class{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-f,y-p).normalize(),i[1].setComponents(l+r,u+c,m+f,y+p).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),t===xi)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(t===$o)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Po.x=s.normal.x>0?e.max.x:e.min.x,Po.y=s.normal.y>0?e.max.y:e.min.y,Po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function O0(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Re=class n extends Kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),D=v+1+c*(p+1),C=v+1+c*p;f.push(_,y,C),f.push(y,D,C)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(E,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},B0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W0=`#ifdef USE_AOMAP
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
#endif`,X0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q0=`#ifdef USE_BATCHING
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
#endif`,Y0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
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
#endif`,K0=`#ifdef USE_BUMPMAP
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ap=`#define PI 3.141592653589793
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
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Np=`struct PhysicalMaterial {
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
}`,Op=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
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
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define MATCAP
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
}`,n1=`#define MATCAP
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
}`,i1=`#define NORMAL
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
}`,s1=`#define NORMAL
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
}`,r1=`#define PHONG
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
}`,o1=`#define PHONG
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
}`,a1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,h1=`#define TOON
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
}`,d1=`uniform float size;
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,p1=`uniform vec3 color;
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
}`,m1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:B0,alphahash_pars_fragment:H0,alphamap_fragment:z0,alphamap_pars_fragment:k0,alphatest_fragment:G0,alphatest_pars_fragment:V0,aomap_fragment:W0,aomap_pars_fragment:X0,batching_pars_vertex:q0,batching_vertex:Y0,begin_vertex:Z0,beginnormal_vertex:$0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:K0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:tp,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:op,common:ap,cube_uv_reflection_fragment:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:dp,emissivemap_fragment:up,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:yp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Fp,envmap_vertex:_p,fog_vertex:Ap,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:Tp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:xp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Dp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Up,lights_physical_pars_fragment:Np,lights_fragment_begin:Op,lights_fragment_maps:Bp,lights_fragment_end:Hp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Vp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Jp,morphcolor_vertex:Qp,morphnormal_vertex:Kp,morphtarget_pars_vertex:jp,morphtarget_vertex:em,normal_fragment_begin:tm,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:dm,packing:um,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:_m,shadowmap_vertex:Am,shadowmask_pars_fragment:Mm,skinbase_vertex:Sm,skinning_pars_vertex:Tm,skinning_vertex:bm,skinnormal_vertex:wm,specularmap_fragment:xm,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Fm,transmission_fragment:Pm,transmission_pars_fragment:Im,uv_pars_fragment:Dm,uv_pars_vertex:Lm,uv_vertex:Um,worldpos_vertex:Nm,background_vert:Om,background_frag:Bm,backgroundCube_vert:Hm,backgroundCube_frag:zm,cube_vert:km,cube_frag:Gm,depth_vert:Vm,depth_frag:Wm,distanceRGBA_vert:Xm,distanceRGBA_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:$m,linedashed_frag:Jm,meshbasic_vert:Qm,meshbasic_frag:Km,meshlambert_vert:jm,meshlambert_frag:e1,meshmatcap_vert:t1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:s1,meshphong_vert:r1,meshphong_frag:o1,meshphysical_vert:a1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:h1,points_vert:d1,points_frag:u1,shadow_vert:f1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},he={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ci={basic:{uniforms:_n([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:_n([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:_n([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:_n([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:_n([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:_n([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:_n([he.points,he.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:_n([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:_n([he.common,he.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:_n([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:_n([he.sprite,he.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:_n([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:_n([he.lights,he.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ci.physical={uniforms:_n([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Io={r:0,b:0,g:0},fs=new mi,E1=new Ct;function y1(n,e,t,i,s,r,o){let a=new de(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function E(v){let _=!1,y=g(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===ga)?(h===void 0&&(h=new k(new wn(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:or(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fs.copy(_.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(fs)),h.material.toneMapped=mt.getTransfer(y.colorSpace)!==wt,(d!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new k(new Re(2,2),new an({name:"BackgroundMaterial",uniforms:or(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=mt.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(Io,gu(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:E,addToRenderList:m}}function v1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,H,z,q){let ee=!1,$=d(z,H,P);r!==$&&(r=$,c(r.object)),ee=f(A,z,H,q),ee&&g(A,z,H,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(A,P,H,z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,H){let z=H.wireframe===!0,q=i[A.id];q===void 0&&(q={},i[A.id]=q);let ee=q[P.id];ee===void 0&&(ee={},q[P.id]=ee);let $=ee[z];return $===void 0&&($=u(l()),ee[z]=$),$}function u(A){let P=[],H=[],z=[];for(let q=0;q<t;q++)P[q]=0,H[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:A,attributes:{},index:null}}function f(A,P,H,z){let q=r.attributes,ee=P.attributes,$=0,oe=H.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let _e=q[Z],Ne=ee[Z];if(Ne===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(Ne=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(Ne=A.instanceColor)),_e===void 0||_e.attribute!==Ne||Ne&&_e.data!==Ne.data)return!0;$++}return r.attributesNum!==$||r.index!==z}function g(A,P,H,z){let q={},ee=P.attributes,$=0,oe=H.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let _e=ee[Z];_e===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor));let Ne={};Ne.attribute=_e,_e&&_e.data&&(Ne.data=_e.data),q[Z]=Ne,$++}r.attributes=q,r.attributesNum=$,r.index=z}function E(){let A=r.newAttributes;for(let P=0,H=A.length;P<H;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){let H=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;H[A]=1,z[A]===0&&(n.enableVertexAttribArray(A),z[A]=1),q[A]!==P&&(n.vertexAttribDivisor(A,P),q[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==A[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function _(A,P,H,z,q,ee,$){$===!0?n.vertexAttribIPointer(A,P,H,q,ee):n.vertexAttribPointer(A,P,H,z,q,ee)}function y(A,P,H,z){E();let q=z.attributes,ee=H.getAttributes(),$=P.defaultAttributeValues;for(let oe in ee){let Z=ee[oe];if(Z.location>=0){let pe=q[oe];if(pe===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){let _e=pe.normalized,Ne=pe.itemSize,nt=e.get(pe);if(nt===void 0)continue;let Pt=nt.buffer,Q=nt.type,ae=nt.bytesPerElement,Ce=Q===n.INT||Q===n.UNSIGNED_INT||pe.gpuType===eh;if(pe.isInterleavedBufferAttribute){let me=pe.data,Ve=me.stride,Ye=pe.offset;if(me.isInstancedInterleavedBuffer){for(let it=0;it<Z.locationSize;it++)p(Z.location+it,me.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let it=0;it<Z.locationSize;it++)m(Z.location+it);n.bindBuffer(n.ARRAY_BUFFER,Pt);for(let it=0;it<Z.locationSize;it++)_(Z.location+it,Ne/Z.locationSize,Q,_e,Ve*ae,(Ye+Ne/Z.locationSize*it)*ae,Ce)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<Z.locationSize;me++)p(Z.location+me,pe.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<Z.locationSize;me++)m(Z.location+me);n.bindBuffer(n.ARRAY_BUFFER,Pt);for(let me=0;me<Z.locationSize;me++)_(Z.location+me,Ne/Z.locationSize,Q,_e,Ne*ae,Ne/Z.locationSize*me*ae,Ce)}}else if($!==void 0){let _e=$[oe];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(Z.location,_e);break;case 3:n.vertexAttrib3fv(Z.location,_e);break;case 4:n.vertexAttrib4fv(Z.location,_e);break;default:n.vertexAttrib1fv(Z.location,_e)}}}}v()}function D(){F();for(let A in i){let P=i[A];for(let H in P){let z=P[H];for(let q in z)h(z[q].object),delete z[q];delete P[H]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let H in P){let z=P[H];for(let q in z)h(z[q].object),delete z[q];delete P[H]}delete i[A.id]}function b(A){for(let P in i){let H=i[P];if(H[A.id]===void 0)continue;let z=H[A.id];for(let q in z)h(z[q].object),delete z[q];delete H[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function _1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==ei&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let F=b===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ci&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ui&&!F)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:C}}function M1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new wi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let D=0;D!==_;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function S1(n){let e=new WeakMap;function t(o,a){return a===Nl?o.mapping=nr:a===Ol&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nl||a===Ol)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ec(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ar=class extends sa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qs=4,vd=[.125,.215,.35,.446,.526,.582],Es=20,ml=new ar,_d=new de,gl=null,El=0,yl=0,vl=!1,ms=(1+Math.sqrt(5))/2,Xs=1/ms,Ad=[new I(-ms,Xs,0),new I(ms,Xs,0),new I(-Xs,0,ms),new I(Xs,0,ms),new I(0,ms,-Xs),new I(0,ms,Xs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){gl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gl,El,yl),this._renderer.xr.enabled=vl,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:xn,format:ei,colorSpace:ts,depthBuffer:!1},s=Md(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T1(r)),this._blurMaterial=b1(r,e,t)}return s}_compileMaterial(e){let t=new k(this._lodPlanes[0],e);this._renderer.compile(t,ml)}_sceneToCubeUV(e,t,i,s){let a=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_d),h.toneMapping=pi,h.autoClear=!1;let f=new et({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new k(new wn,f),E=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,E=!0):(f.color.copy(_d),E=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Do(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===nr||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Do(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ml)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ad[(s-r-1)%Ad.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new k(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Es-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):Es;m>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);let p=[],v=0;for(let b=0;b<Es;++b){let F=b/E,S=Math.exp(-F*F/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],D=3*y*(s>_-Qs?s-_+Qs:0),C=4*(this._cubeSize-y);Do(t,D,C,3*y,2*y),l.setRenderTarget(t),l.render(d,ml)}};function T1(n){let e=[],t=[],i=[],s=n,r=n-Qs+1+vd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Qs?l=vd[o-n+Qs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,v=new Float32Array(E*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let b=C%3*2/3-1,F=C>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];v.set(S,E*g*C),_.set(u,m*g*C);let A=[C,C,C,C,C,C];y.set(A,p*g*C)}let D=new Kt;D.setAttribute("position",new rn(v,E)),D.setAttribute("uv",new rn(_,m)),D.setAttribute("faceIndex",new rn(y,p)),e.push(D),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Md(n,e,t){let i=new on(n,e,t);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function b1(n,e,t){let i=new Float32Array(Es),s=new I(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ah(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Sd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Td(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function w1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Nl||l===Ol,h=l===nr||l===ir;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new oa(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new oa(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function x1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function R1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let v=f.array;E=f.version;for(let _=0,y=v.length;_<y;_+=3){let D=v[_+0],C=v[_+1],b=v[_+2];u.push(D,C,C,b,b,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let D=_+0,C=_+1,b=_+2;u.push(D,C,C,b,b,D)}}else return;let m=new(pu(u)?ia:na)(u,1);m.version=E;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function C1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,E,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*E[v];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function F1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function P1(n,e,t){let i=new WeakMap,s=new Rt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*D*4*d),b=new jo(C,y,D,d);b.type=ui,b.needsUpdate=!0;let F=_*4;for(let A=0;A<d;A++){let P=m[A],H=p[A],z=v[A],q=y*D*4*A;for(let ee=0;ee<P.count;ee++){let $=ee*F;f===!0&&(s.fromBufferAttribute(P,ee),C[q+$+0]=s.x,C[q+$+1]=s.y,C[q+$+2]=s.z,C[q+$+3]=0),g===!0&&(s.fromBufferAttribute(H,ee),C[q+$+4]=s.x,C[q+$+5]=s.y,C[q+$+6]=s.z,C[q+$+7]=0),E===!0&&(s.fromBufferAttribute(z,ee),C[q+$+8]=s.x,C[q+$+9]=s.y,C[q+$+10]=s.z,C[q+$+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new ce(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function I1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var lr=class extends bn{constructor(e,t,i,s,r,o,a,l,c,h=Ks){if(h!==Ks&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ks&&(i=Fi),i===void 0&&h===rr&&(i=sr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yu=new bn,bd=new lr(1,1),vu=new jo,_u=new mc,Au=new ra,wd=[],xd=[],Rd=new Float32Array(16),Cd=new Float32Array(9),Fd=new Float32Array(4);function yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ya(n,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function D1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function U1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function O1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Fd.set(i),n.uniformMatrix2fv(this.addr,!1,Fd),tn(t,i)}}function B1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Cd.set(i),n.uniformMatrix3fv(this.addr,!1,Cd),tn(t,i)}}function H1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Rd.set(i),n.uniformMatrix4fv(this.addr,!1,Rd),tn(t,i)}}function z1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function G1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function V1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function W1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function X1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function q1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function Y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function Z1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bd.compareFunction=fu,r=bd):r=yu,t.setTexture2D(e||r,s)}function $1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_u,s)}function J1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Au,s)}function Q1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||vu,s)}function K1(n){switch(n){case 5126:return D1;case 35664:return L1;case 35665:return U1;case 35666:return N1;case 35674:return O1;case 35675:return B1;case 35676:return H1;case 5124:case 35670:return z1;case 35667:case 35671:return k1;case 35668:case 35672:return G1;case 35669:case 35673:return V1;case 5125:return W1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return Q1}}function j1(n,e){n.uniform1fv(this.addr,e)}function e2(n,e){let t=yr(e,this.size,2);n.uniform2fv(this.addr,t)}function t2(n,e){let t=yr(e,this.size,3);n.uniform3fv(this.addr,t)}function n2(n,e){let t=yr(e,this.size,4);n.uniform4fv(this.addr,t)}function i2(n,e){let t=yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s2(n,e){let t=yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r2(n,e){let t=yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function o2(n,e){n.uniform1iv(this.addr,e)}function a2(n,e){n.uniform2iv(this.addr,e)}function l2(n,e){n.uniform3iv(this.addr,e)}function c2(n,e){n.uniform4iv(this.addr,e)}function h2(n,e){n.uniform1uiv(this.addr,e)}function d2(n,e){n.uniform2uiv(this.addr,e)}function u2(n,e){n.uniform3uiv(this.addr,e)}function f2(n,e){n.uniform4uiv(this.addr,e)}function p2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yu,r[o])}function m2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_u,r[o])}function g2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Au,r[o])}function E2(n,e,t){let i=this.cache,s=e.length,r=ya(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vu,r[o])}function y2(n){switch(n){case 5126:return j1;case 35664:return e2;case 35665:return t2;case 35666:return n2;case 35674:return i2;case 35675:return s2;case 35676:return r2;case 5124:case 35670:return o2;case 35667:case 35671:return a2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return h2;case 36294:return d2;case 36295:return u2;case 36296:return f2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return E2}}var yc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=K1(t.type)}},vc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y2(t.type)}},_c=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},_l=/(\w+)(\])?(\[|\.)?/g;function Pd(n,e){n.seq.push(e),n.map[e.id]=e}function v2(n,e,t){let i=n.name,s=i.length;for(_l.lastIndex=0;;){let r=_l.exec(i),o=_l.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pd(t,c===void 0?new yc(a,n,e):new vc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new _c(a),Pd(t,d)),t=d}}}var er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);v2(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Id(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var _2=37297,A2=0;function M2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Dd=new Je;function S2(n){mt._getMatrix(Dd,mt.workingColorSpace,n);let e=`mat3( ${Dd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(n)){case Ea:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ld(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+M2(n.getShaderSource(e),o)}else return s}function T2(n,e){let t=S2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b2(n,e){let t;switch(e){case Kf:t="Linear";break;case jf:t="Reinhard";break;case e0:t="Cineon";break;case t0:t="ACESFilmic";break;case i0:t="AgX";break;case s0:t="Neutral";break;case n0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lo=new I;function w2(){mt.getLuminanceCoefficients(Lo);let n=Lo.x.toFixed(4),e=Lo.y.toFixed(4),t=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function R2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function C2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gr(n){return n!==""}function Ud(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(n){return n.replace(F2,I2)}var P2=new Map;function I2(n,e){let t=je[e];if(t===void 0){let i=P2.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}var D2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(n){return n.replace(D2,L2)}function L2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function U2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function N2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function B2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tu:e="ENVMAP_BLENDING_MULTIPLY";break;case Jf:e="ENVMAP_BLENDING_MIX";break;case Qf:e="ENVMAP_BLENDING_ADD";break}return e}function H2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function z2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=U2(t),c=N2(t),h=O2(t),d=B2(t),u=H2(t),f=x2(t),g=R2(r),E=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?je.tonemapping_pars_fragment:"",t.toneMapping!==pi?b2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,T2("linearToOutputTexel",t.outputColorSpace),w2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Ac(o),o=Ud(o,t),o=Nd(o,t),a=Ac(a),a=Ud(a,t),a=Nd(a,t),o=Od(o),a=Od(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,D=Id(s,s.VERTEX_SHADER,_),C=Id(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,C),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(P){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(E).trim(),z=s.getShaderInfoLog(D).trim(),q=s.getShaderInfoLog(C).trim(),ee=!0,$=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,C);else{let oe=Ld(s,D,"vertex"),Z=Ld(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+oe+`
`+Z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||q==="")&&($=!1);$&&(P.diagnostics={runnable:ee,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(D),s.deleteShader(C),F=new er(s,E),S=C2(s,E)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,_2)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=C,this}var k2=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Sc(e),t.set(e,i)),i}},Sc=class{constructor(e){this.id=k2++,this.code=e,this.usedTimes=0}};function G2(n,e,t,i,s,r,o){let a=new ta,l=new Mc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,H,z){let q=H.fog,ee=z.geometry,$=S.isMeshStandardMaterial?H.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),Z=oe&&oe.mapping===ga?oe.image.height:null,pe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let _e=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ne=_e!==void 0?_e.length:0,nt=0;ee.morphAttributes.position!==void 0&&(nt=1),ee.morphAttributes.normal!==void 0&&(nt=2),ee.morphAttributes.color!==void 0&&(nt=3);let Pt,Q,ae,Ce;if(pe){let Tt=ci[pe];Pt=Tt.vertexShader,Q=Tt.fragmentShader}else Pt=S.vertexShader,Q=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);let me=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,it=z.isBatchedMesh===!0,Xt=!!S.map,ft=!!S.matcap,$t=!!oe,B=!!S.aoMap,Vn=!!S.lightMap,ht=!!S.bumpMap,dt=!!S.normalMap,ke=!!S.displacementMap,Ot=!!S.emissiveMap,Be=!!S.metalnessMap,R=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,K=S.dispersion>0,te=S.iridescence>0,J=S.sheen>0,Ie=S.transmission>0,ge=M&&!!S.anisotropyMap,Ae=G&&!!S.clearcoatMap,pt=G&&!!S.clearcoatNormalMap,ie=G&&!!S.clearcoatRoughnessMap,Me=te&&!!S.iridescenceMap,Ge=te&&!!S.iridescenceThicknessMap,We=J&&!!S.sheenColorMap,Se=J&&!!S.sheenRoughnessMap,ut=!!S.specularMap,Ke=!!S.specularColorMap,Dt=!!S.specularIntensityMap,L=Ie&&!!S.transmissionMap,ue=Ie&&!!S.thicknessMap,Y=!!S.gradientMap,j=!!S.alphaMap,ve=S.alphaTest>0,Ee=!!S.alphaHash,Ze=!!S.extensions,Yt=pi;S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Yt=n.toneMapping);let fn={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Pt,fragmentShader:Q,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:it,batchingColor:it&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ts,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:ft,envMap:$t,envMapMode:$t&&oe.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:Vn,bumpMap:ht,normalMap:dt,displacementMap:u&&ke,emissiveMap:Ot,normalMapObjectSpace:dt&&S.normalMapType===a0,normalMapTangentSpace:dt&&S.normalMapType===uu,metalnessMap:Be,roughnessMap:R,anisotropy:M,anisotropyMap:ge,clearcoat:G,clearcoatMap:Ae,clearcoatNormalMap:pt,clearcoatRoughnessMap:ie,dispersion:K,iridescence:te,iridescenceMap:Me,iridescenceThicknessMap:Ge,sheen:J,sheenColorMap:We,sheenRoughnessMap:Se,specularMap:ut,specularColorMap:Ke,specularIntensityMap:Dt,transmission:Ie,transmissionMap:L,thicknessMap:ue,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ve,alphaHash:Ee,combine:S.combine,mapUv:Xt&&E(S.map.channel),aoMapUv:B&&E(S.aoMap.channel),lightMapUv:Vn&&E(S.lightMap.channel),bumpMapUv:ht&&E(S.bumpMap.channel),normalMapUv:dt&&E(S.normalMap.channel),displacementMapUv:ke&&E(S.displacementMap.channel),emissiveMapUv:Ot&&E(S.emissiveMap.channel),metalnessMapUv:Be&&E(S.metalnessMap.channel),roughnessMapUv:R&&E(S.roughnessMap.channel),anisotropyMapUv:ge&&E(S.anisotropyMap.channel),clearcoatMapUv:Ae&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&E(S.sheenRoughnessMap.channel),specularMapUv:ut&&E(S.specularMap.channel),specularColorMapUv:Ke&&E(S.specularColorMap.channel),specularIntensityMapUv:Dt&&E(S.specularIntensityMap.channel),transmissionMapUv:L&&E(S.transmissionMap.channel),thicknessMapUv:ue&&E(S.thicknessMap.channel),alphaMapUv:j&&E(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(dt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(Xt||j),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ve,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:nt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===It,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||it)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fn.vertexUv1s=c.has(1),fn.vertexUv2s=c.has(2),fn.vertexUv3s=c.has(3),c.clear(),fn}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let H=ci[A];P=Er.clone(H.uniforms)}else P=S.uniforms;return P}function D(S,A){let P;for(let H=0,z=h.length;H<z;H++){let q=h[H];if(q.cacheKey===A){P=q,++P.usedTimes;break}}return P===void 0&&(P=new z2(n,A,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:F}}function V2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function W2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,E,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),e++,p}function a(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||W2),i.length>1&&i.sort(u||Hd),s.length>1&&s.sort(u||Hd)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function X2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new zd,n.set(i,[o])):s>=r.length?(o=new zd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function q2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new de};break;case"SpotLight":t={position:new I,direction:new I,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Y2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Z2=0;function $2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function J2(n){let e=new q2,t=Y2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Ct,o=new Ct;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,v=0,_=0,y=0,D=0,C=0,b=0;c.sort($2);for(let S=0,A=c.length;S<A;S++){let P=c[S],H=P.color,z=P.intensity,q=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*z,d+=H.g*z,u+=H.b*z;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],z);b++}else if(P.isDirectionalLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let oe=P.shadow,Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=ee,i.directionalShadowMatrix[f]=P.shadow.matrix,v++}i.directional[f]=$,f++}else if(P.isSpotLight){let $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(H).multiplyScalar(z),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[E]=$;let oe=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,oe.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[E]=oe.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,i.spotShadow[E]=Z,i.spotShadowMap[E]=ee,y++}E++}else if(P.isRectAreaLight){let $=e.get(P);$.color.copy(H).multiplyScalar(z),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=$,m++}else if(P.isPointLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let oe=P.shadow,Z=t.get(P);Z.shadowIntensity=oe.intensity,Z.shadowBias=oe.bias,Z.shadowNormalBias=oe.normalBias,Z.shadowRadius=oe.radius,Z.shadowMapSize=oe.mapSize,Z.shadowCameraNear=oe.camera.near,Z.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=$,g++}else if(P.isHemisphereLight){let $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(z),$.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==v||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=v,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=b,i.version=Z2++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function kd(n){let e=new J2(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Q2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new kd(n),e.set(s,[a])):r>=o.length?(a=new kd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var es=class extends Ii{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tc=class extends Ii{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},K2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j2=`uniform sampler2D shadow_pass;
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
}`;function eg(n,e,t){let i=new Yr,s=new ce,r=new ce,o=new Rt,a=new es({depthPacking:gr}),l=new Tc,c={},h=t.maxTextureSize,d={[Ji]:sn,[sn]:Ji,[It]:It},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:K2,fragmentShader:j2}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new k(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(C,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(fi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=p!==bi&&this.type===bi,q=p===bi&&this.type!==bi;for(let ee=0,$=C.length;ee<$;ee++){let oe=C[ee],Z=oe.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let pe=Z.getFrameExtents();if(s.multiply(pe),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,Z.mapSize.y=r.y)),Z.map===null||z===!0||q===!0){let Ne=this.type!==bi?{minFilter:Bn,magFilter:Bn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new on(s.x,s.y,Ne),Z.map.texture.name=oe.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let _e=Z.getViewportCount();for(let Ne=0;Ne<_e;Ne++){let nt=Z.getViewport(Ne);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),H.viewport(o),Z.updateMatrices(oe,Ne),i=Z.getFrustum(),y(b,F,Z.camera,oe,this.type)}Z.isPointLightShadow!==!0&&this.type===bi&&v(Z,F),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(C,b){let F=e.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new on(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,F,u,E,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,F,f,E,null)}function _(C,b,F,S){let A=null,P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)A=P;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let H=A.uuid,z=b.uuid,q=c[H];q===void 0&&(q={},c[H]=q);let ee=q[z];ee===void 0&&(ee=A.clone(),q[z]=ee,b.addEventListener("dispose",D)),A=ee}if(A.visible=b.visible,A.wireframe=b.wireframe,S===bi?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let H=n.properties.get(A);H.light=F}return A}function y(C,b,F,S,A){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let z=e.update(C),q=C.material;if(Array.isArray(q)){let ee=z.groups;for(let $=0,oe=ee.length;$<oe;$++){let Z=ee[$],pe=q[Z.materialIndex];if(pe&&pe.visible){let _e=_(C,pe,S,A);C.onBeforeShadow(n,C,b,F,z,_e,Z),n.renderBufferDirect(F,null,z,_e,C,Z),C.onAfterShadow(n,C,b,F,z,_e,Z)}}}else if(q.visible){let ee=_(C,q,S,A);C.onBeforeShadow(n,C,b,F,z,ee,null),n.renderBufferDirect(F,null,z,ee,C,null),C.onAfterShadow(n,C,b,F,z,ee,null)}}let H=C.children;for(let z=0,q=H.length;z<q;z++)y(H[z],b,F,S,A)}function D(C){C.target.removeEventListener("dispose",D);for(let F in c){let S=c[F],A=C.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var tg={[Cl]:Fl,[Pl]:Ll,[Il]:Ul,[tr]:Dl,[Fl]:Cl,[Ll]:Pl,[Ul]:Il,[Dl]:tr};function ng(n,e){function t(){let L=!1,ue=new Rt,Y=null,j=new Rt(0,0,0,0);return{setMask:function(ve){Y!==ve&&!L&&(n.colorMask(ve,ve,ve,ve),Y=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ee,Ze,Yt,fn){fn===!0&&(ve*=Yt,Ee*=Yt,Ze*=Yt),ue.set(ve,Ee,Ze,Yt),j.equals(ue)===!1&&(n.clearColor(ve,Ee,Ze,Yt),j.copy(ue))},reset:function(){L=!1,Y=null,j.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,Y=null,j=null,ve=null;return{setReversed:function(Ee){if(ue!==Ee){let Ze=e.get("EXT_clip_control");ue?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);let Yt=ve;ve=null,this.setClear(Yt)}ue=Ee},getReversed:function(){return ue},setTest:function(Ee){Ee?me(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(Ee){Y!==Ee&&!L&&(n.depthMask(Ee),Y=Ee)},setFunc:function(Ee){if(ue&&(Ee=tg[Ee]),j!==Ee){switch(Ee){case Cl:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case Il:n.depthFunc(n.EQUAL);break;case Dl:n.depthFunc(n.GEQUAL);break;case Ll:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){ve!==Ee&&(ue&&(Ee=1-Ee),n.clearDepth(Ee),ve=Ee)},reset:function(){L=!1,Y=null,j=null,ve=null,ue=!1}}}function s(){let L=!1,ue=null,Y=null,j=null,ve=null,Ee=null,Ze=null,Yt=null,fn=null;return{setTest:function(Tt){L||(Tt?me(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(Tt){ue!==Tt&&!L&&(n.stencilMask(Tt),ue=Tt)},setFunc:function(Tt,$n,yi){(Y!==Tt||j!==$n||ve!==yi)&&(n.stencilFunc(Tt,$n,yi),Y=Tt,j=$n,ve=yi)},setOp:function(Tt,$n,yi){(Ee!==Tt||Ze!==$n||Yt!==yi)&&(n.stencilOp(Tt,$n,yi),Ee=Tt,Ze=$n,Yt=yi)},setLocked:function(Tt){L=Tt},setClear:function(Tt){fn!==Tt&&(n.clearStencil(Tt),fn=Tt)},reset:function(){L=!1,ue=null,Y=null,j=null,ve=null,Ee=null,Ze=null,Yt=null,fn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,C=null,b=new de(0,0,0),F=0,S=!1,A=null,P=null,H=null,z=null,q=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,oe=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=oe>=2);let pe=null,_e={},Ne=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),Pt=new Rt().fromArray(Ne),Q=new Rt().fromArray(nt);function ae(L,ue,Y,j){let ve=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(L,Ee),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<Y;Ze++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ue+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Ee}let Ce={};Ce[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(tr),ht(!1),dt(Xh),me(n.CULL_FACE),B(fi);function me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ve(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ye(L,ue){return d[L]!==ue?(n.bindFramebuffer(L,ue),d[L]=ue,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function it(L,ue){let Y=f,j=!1;if(L){Y=u.get(ue),Y===void 0&&(Y=[],u.set(ue,Y));let ve=L.textures;if(Y.length!==ve.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ze=ve.length;Ee<Ze;Ee++)Y[Ee]=n.COLOR_ATTACHMENT0+Ee;Y.length=ve.length,j=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,j=!0);j&&n.drawBuffers(Y)}function Xt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let ft={[gs]:n.FUNC_ADD,[Df]:n.FUNC_SUBTRACT,[Lf]:n.FUNC_REVERSE_SUBTRACT};ft[Uf]=n.MIN,ft[Nf]=n.MAX;let $t={[Of]:n.ZERO,[Bf]:n.ONE,[Hf]:n.SRC_COLOR,[xl]:n.SRC_ALPHA,[Xf]:n.SRC_ALPHA_SATURATE,[Vf]:n.DST_COLOR,[kf]:n.DST_ALPHA,[zf]:n.ONE_MINUS_SRC_COLOR,[Rl]:n.ONE_MINUS_SRC_ALPHA,[Wf]:n.ONE_MINUS_DST_COLOR,[Gf]:n.ONE_MINUS_DST_ALPHA,[qf]:n.CONSTANT_COLOR,[Yf]:n.ONE_MINUS_CONSTANT_COLOR,[Zf]:n.CONSTANT_ALPHA,[$f]:n.ONE_MINUS_CONSTANT_ALPHA};function B(L,ue,Y,j,ve,Ee,Ze,Yt,fn,Tt){if(L===fi){E===!0&&(Ve(n.BLEND),E=!1);return}if(E===!1&&(me(n.BLEND),E=!0),L!==If){if(L!==m||Tt!==S){if((p!==gs||y!==gs)&&(n.blendEquation(n.FUNC_ADD),p=gs,y=gs),Tt)switch(L){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.ONE,n.ONE);break;case qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,D=null,C=null,b.set(0,0,0),F=0,m=L,S=Tt}return}ve=ve||ue,Ee=Ee||Y,Ze=Ze||j,(ue!==p||ve!==y)&&(n.blendEquationSeparate(ft[ue],ft[ve]),p=ue,y=ve),(Y!==v||j!==_||Ee!==D||Ze!==C)&&(n.blendFuncSeparate($t[Y],$t[j],$t[Ee],$t[Ze]),v=Y,_=j,D=Ee,C=Ze),(Yt.equals(b)===!1||fn!==F)&&(n.blendColor(Yt.r,Yt.g,Yt.b,fn),b.copy(Yt),F=fn),m=L,S=!1}function Vn(L,ue){L.side===It?Ve(n.CULL_FACE):me(n.CULL_FACE);let Y=L.side===sn;ue&&(Y=!Y),ht(Y),L.blending===Zi&&L.transparent===!1?B(fi):B(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(L){A!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),A=L)}function dt(L){L!==Ff?(me(n.CULL_FACE),L!==P&&(L===Xh?n.cullFace(n.BACK):L===Pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),P=L}function ke(L){L!==H&&($&&n.lineWidth(L),H=L)}function Ot(L,ue,Y){L?(me(n.POLYGON_OFFSET_FILL),(z!==ue||q!==Y)&&(n.polygonOffset(ue,Y),z=ue,q=Y)):Ve(n.POLYGON_OFFSET_FILL)}function Be(L){L?me(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function R(L){L===void 0&&(L=n.TEXTURE0+ee-1),pe!==L&&(n.activeTexture(L),pe=L)}function M(L,ue,Y){Y===void 0&&(pe===null?Y=n.TEXTURE0+ee-1:Y=pe);let j=_e[Y];j===void 0&&(j={type:void 0,texture:void 0},_e[Y]=j),(j.type!==L||j.texture!==ue)&&(pe!==Y&&(n.activeTexture(Y),pe=Y),n.bindTexture(L,ue||Ce[L]),j.type=L,j.texture=ue)}function G(){let L=_e[pe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(L){Pt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Pt.copy(L))}function Se(L){Q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function ut(L,ue){let Y=c.get(ue);Y===void 0&&(Y=new WeakMap,c.set(ue,Y));let j=Y.get(L);j===void 0&&(j=n.getUniformBlockIndex(ue,L.name),Y.set(L,j))}function Ke(L,ue){let j=c.get(ue).get(L);l.get(ue)!==j&&(n.uniformBlockBinding(ue,j,L.__bindingPointIndex),l.set(ue,j))}function Dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pe=null,_e={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,v=null,_=null,y=null,D=null,C=null,b=new de(0,0,0),F=0,S=!1,A=null,P=null,H=null,z=null,q=null,Pt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Ve,bindFramebuffer:Ye,drawBuffers:it,useProgram:Xt,setBlending:B,setMaterial:Vn,setFlipSided:ht,setCullFace:dt,setLineWidth:ke,setPolygonOffset:Ot,setScissorTest:Be,activeTexture:R,bindTexture:M,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:Me,texImage3D:Ge,updateUBOMapping:ut,uniformBlockBinding:Ke,texStorage2D:pt,texStorage3D:ie,texSubImage2D:J,texSubImage3D:Ie,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ae,scissor:We,viewport:Se,reset:Dt}}function Gd(n,e,t,i){let s=ig(i);switch(t){case ou:return n*e;case lu:return n*e;case cu:return n*e*2;case ih:return n*e/s.components*s.byteLength;case sh:return n*e/s.components*s.byteLength;case hu:return n*e*2/s.components*s.byteLength;case rh:return n*e*2/s.components*s.byteLength;case au:return n*e*3/s.components*s.byteLength;case ei:return n*e*4/s.components*s.byteLength;case oh:return n*e*4/s.components*s.byteLength;case Vo:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:case Gl:return Math.max(n,16)*Math.max(e,8)/4;case Hl:case kl:return Math.max(n,8)*Math.max(e,8)/2;case Vl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yo:case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case du:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ig(n){switch(n){case Ci:case iu:return{byteLength:1,components:1};case qr:case su:case xn:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case Fi:case eh:case ui:return{byteLength:4,components:1};case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function sg(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):Qo("canvas")}function E(R,M,G){let K=1,te=Be(R);if((te.width>G||te.height>G)&&(K=G/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(K*te.width),Ie=Math.floor(K*te.height);d===void 0&&(d=g(J,Ie));let ge=M?g(J,Ie):d;return ge.width=J,ge.height=Ie,ge.getContext("2d").drawImage(R,0,0,J,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ie+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,M,G,K,te=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),M===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let Ie=te?Ea:mt.getTransfer(K);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Ie===wt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(R,M){let G;return R?M===null||M===Fi||M===sr?G=n.DEPTH24_STENCIL8:M===ui?G=n.DEPTH32F_STENCIL8:M===qr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===sr?G=n.DEPTH_COMPONENT24:M===ui?G=n.DEPTH_COMPONENT32F:M===qr&&(G=n.DEPTH_COMPONENT16),G}function D(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bn&&R.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function b(R){let M=R.target;M.removeEventListener("dispose",b),A(M)}function F(R){let M=i.get(R);if(M.__webglInit===void 0)return;let G=R.source,K=u.get(G);if(K){let te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(R),Object.keys(K).length===0&&u.delete(G)}i.remove(R)}function S(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let G=R.source,K=u.get(G);delete K[M.__cacheKey],o.memory.textures--}function A(R){let M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[K][te]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=R.textures;for(let K=0,te=G.length;K<te;K++){let J=i.get(G[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[K])}i.remove(R)}let P=0;function H(){P=0}function z(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function q(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function ee(R,M){let G=i.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,R,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function $(R,M){let G=i.get(R);if(R.version>0&&G.__version!==R.version){Q(G,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function oe(R,M){let G=i.get(R);if(R.version>0&&G.__version!==R.version){Q(G,R,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function Z(R,M){let G=i.get(R);if(R.version>0&&G.__version!==R.version){ae(G,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}let pe={[dn]:n.REPEAT,[ys]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},_e={[Bn]:n.NEAREST,[r0]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[vs]:n.LINEAR_MIPMAP_LINEAR},Ne={[l0]:n.NEVER,[p0]:n.ALWAYS,[c0]:n.LESS,[fu]:n.LEQUAL,[h0]:n.EQUAL,[f0]:n.GEQUAL,[d0]:n.GREATER,[u0]:n.NOTEQUAL};function nt(R,M){if(M.type===ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===Xa||M.magFilter===po||M.magFilter===vs||M.minFilter===di||M.minFilter===Xa||M.minFilter===po||M.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,pe[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,pe[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,pe[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_e[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bn||M.minFilter!==po&&M.minFilter!==vs||M.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Pt(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let K=M.source,te=u.get(K);te===void 0&&(te={},u.set(K,te));let J=q(M);if(J!==R.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[J].usedTimes++;let Ie=te[R.__cacheKey];Ie!==void 0&&(te[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(M)),R.__cacheKey=J,R.__webglTexture=te[J].texture}return G}function Q(R,M,G){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let te=Pt(R,M),J=M.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+G);let Ie=i.get(J);if(J.version!==Ie.__version||te===!0){t.activeTexture(n.TEXTURE0+G);let ge=mt.getPrimaries(mt.workingColorSpace),Ae=M.colorSpace===qi?null:mt.getPrimaries(M.colorSpace),pt=M.colorSpace===qi||ge===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let ie=E(M.image,!1,s.maxTextureSize);ie=Ot(M,ie);let Me=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),We=_(M.internalFormat,Me,Ge,M.colorSpace,M.isVideoTexture);nt(K,M);let Se,ut=M.mipmaps,Ke=M.isVideoTexture!==!0,Dt=Ie.__version===void 0||te===!0,L=J.dataReady,ue=D(M,ie);if(M.isDepthTexture)We=y(M.format===rr,M.type),Dt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,We,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,We,ie.width,ie.height,0,Me,Ge,null));else if(M.isDataTexture)if(ut.length>0){Ke&&Dt&&t.texStorage2D(n.TEXTURE_2D,ue,We,ut[0].width,ut[0].height);for(let Y=0,j=ut.length;Y<j;Y++)Se=ut[Y],Ke?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Ge,Se.data):t.texImage2D(n.TEXTURE_2D,Y,We,Se.width,Se.height,0,Me,Ge,Se.data);M.generateMipmaps=!1}else Ke?(Dt&&t.texStorage2D(n.TEXTURE_2D,ue,We,ie.width,ie.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Me,Ge,ie.data)):t.texImage2D(n.TEXTURE_2D,0,We,ie.width,ie.height,0,Me,Ge,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,We,ut[0].width,ut[0].height,ie.depth);for(let Y=0,j=ut.length;Y<j;Y++)if(Se=ut[Y],M.format!==ei)if(Me!==null)if(Ke){if(L)if(M.layerUpdates.size>0){let ve=Gd(Se.width,Se.height,M.format,M.type);for(let Ee of M.layerUpdates){let Ze=Se.data.subarray(Ee*ve/Se.data.BYTES_PER_ELEMENT,(Ee+1)*ve/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Ee,Se.width,Se.height,1,Me,Ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,ie.depth,Me,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,We,Se.width,Se.height,ie.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Se.width,Se.height,ie.depth,Me,Ge,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,We,Se.width,Se.height,ie.depth,0,Me,Ge,Se.data)}else{Ke&&Dt&&t.texStorage2D(n.TEXTURE_2D,ue,We,ut[0].width,ut[0].height);for(let Y=0,j=ut.length;Y<j;Y++)Se=ut[Y],M.format!==ei?Me!==null?Ke?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,We,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Se.width,Se.height,Me,Ge,Se.data):t.texImage2D(n.TEXTURE_2D,Y,We,Se.width,Se.height,0,Me,Ge,Se.data)}else if(M.isDataArrayTexture)if(Ke){if(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,We,ie.width,ie.height,ie.depth),L)if(M.layerUpdates.size>0){let Y=Gd(ie.width,ie.height,M.format,M.type);for(let j of M.layerUpdates){let ve=ie.data.subarray(j*Y/ie.data.BYTES_PER_ELEMENT,(j+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,Me,Ge,ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,Ge,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,ie.width,ie.height,ie.depth,0,Me,Ge,ie.data);else if(M.isData3DTexture)Ke?(Dt&&t.texStorage3D(n.TEXTURE_3D,ue,We,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,Ge,ie.data)):t.texImage3D(n.TEXTURE_3D,0,We,ie.width,ie.height,ie.depth,0,Me,Ge,ie.data);else if(M.isFramebufferTexture){if(Dt)if(Ke)t.texStorage2D(n.TEXTURE_2D,ue,We,ie.width,ie.height);else{let Y=ie.width,j=ie.height;for(let ve=0;ve<ue;ve++)t.texImage2D(n.TEXTURE_2D,ve,We,Y,j,0,Me,Ge,null),Y>>=1,j>>=1}}else if(ut.length>0){if(Ke&&Dt){let Y=Be(ut[0]);t.texStorage2D(n.TEXTURE_2D,ue,We,Y.width,Y.height)}for(let Y=0,j=ut.length;Y<j;Y++)Se=ut[Y],Ke?L&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Me,Ge,Se):t.texImage2D(n.TEXTURE_2D,Y,We,Me,Ge,Se);M.generateMipmaps=!1}else if(Ke){if(Dt){let Y=Be(ie);t.texStorage2D(n.TEXTURE_2D,ue,We,Y.width,Y.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ge,ie)}else t.texImage2D(n.TEXTURE_2D,0,We,Me,Ge,ie);m(M)&&p(K),Ie.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ae(R,M,G){if(M.image.length!==6)return;let K=Pt(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let J=i.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+G);let Ie=mt.getPrimaries(mt.workingColorSpace),ge=M.colorSpace===qi?null:mt.getPrimaries(M.colorSpace),Ae=M.colorSpace===qi||Ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let pt=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let j=0;j<6;j++)!pt&&!ie?Me[j]=E(M.image[j],!0,s.maxCubemapSize):Me[j]=ie?M.image[j].image:M.image[j],Me[j]=Ot(M,Me[j]);let Ge=Me[0],We=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),ut=_(M.internalFormat,We,Se,M.colorSpace),Ke=M.isVideoTexture!==!0,Dt=J.__version===void 0||K===!0,L=te.dataReady,ue=D(M,Ge);nt(n.TEXTURE_CUBE_MAP,M);let Y;if(pt){Ke&&Dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ut,Ge.width,Ge.height);for(let j=0;j<6;j++){Y=Me[j].mipmaps;for(let ve=0;ve<Y.length;ve++){let Ee=Y[ve];M.format!==ei?We!==null?Ke?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ee.width,Ee.height,We,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ut,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ee.width,Ee.height,We,Se,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ut,Ee.width,Ee.height,0,We,Se,Ee.data)}}}else{if(Y=M.mipmaps,Ke&&Dt){Y.length>0&&ue++;let j=Be(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ut,j.width,j.height)}for(let j=0;j<6;j++)if(ie){Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me[j].width,Me[j].height,We,Se,Me[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,Me[j].width,Me[j].height,0,We,Se,Me[j].data);for(let ve=0;ve<Y.length;ve++){let Ze=Y[ve].image[j].image;Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Ze.width,Ze.height,We,Se,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ut,Ze.width,Ze.height,0,We,Se,Ze.data)}}else{Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,We,Se,Me[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,We,Se,Me[j]);for(let ve=0;ve<Y.length;ve++){let Ee=Y[ve];Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,We,Se,Ee.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ut,We,Se,Ee.image[j])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ce(R,M,G,K,te,J){let Ie=r.convert(G.format,G.colorSpace),ge=r.convert(G.type),Ae=_(G.internalFormat,Ie,ge,G.colorSpace),pt=i.get(M),ie=i.get(G);if(ie.__renderTarget=M,!pt.__hasExternalTextures){let Me=Math.max(1,M.width>>J),Ge=Math.max(1,M.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Ae,Me,Ge,M.depth,0,Ie,ge,null):t.texImage2D(te,J,Ae,Me,Ge,0,Ie,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,ie.__webglTexture,0,ht(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,ie.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(R,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=y(M.stencilBuffer,te),Ie=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=ht(M);dt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,J,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,R)}else{let K=M.textures;for(let te=0;te<K.length;te++){let J=K[te],Ie=r.convert(J.format,J.colorSpace),ge=r.convert(J.type),Ae=_(J.internalFormat,Ie,ge,J.colorSpace),pt=ht(M);G&&dt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Ae,M.width,M.height):dt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,Ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let te=K.__webglTexture,J=ht(M);if(M.depthTexture.format===Ks)dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===rr)dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(R){let M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),me(M.__webglDepthbuffer[K],R,!1);else{let te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),me(M.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(R,M,G){let K=i.get(R);M!==void 0&&Ce(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ye(R)}function Xt(R){let M=R.texture,G=i.get(R),K=i.get(M);R.addEventListener("dispose",b);let te=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ie=te.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)G.__webglFramebuffer[ge][Ae]=n.createFramebuffer()}else G.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)G.__webglFramebuffer[ge]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let ge=0,Ae=te.length;ge<Ae;ge++){let pt=i.get(te[ge]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&dt(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){let Ae=te[ge];G.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);let pt=r.convert(Ae.format,Ae.colorSpace),ie=r.convert(Ae.type),Me=_(Ae.internalFormat,pt,ie,Ae.colorSpace,R.isXRRenderTarget===!0),Ge=ht(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),me(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),nt(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Ce(G.__webglFramebuffer[ge][Ae],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae);else Ce(G.__webglFramebuffer[ge],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,Ae=te.length;ge<Ae;ge++){let pt=te[ge],ie=i.get(pt);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),nt(n.TEXTURE_2D,pt),Ce(G.__webglFramebuffer,R,pt,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(pt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,K.__webglTexture),nt(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Ce(G.__webglFramebuffer[Ae],R,M,n.COLOR_ATTACHMENT0,ge,Ae);else Ce(G.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ge,0);m(M)&&p(ge),t.unbindTexture()}R.depthBuffer&&Ye(R)}function ft(R){let M=R.textures;for(let G=0,K=M.length;G<K;G++){let te=M[G];if(m(te)){let J=v(R),Ie=i.get(te).__webglTexture;t.bindTexture(J,Ie),p(J),t.unbindTexture()}}}let $t=[],B=[];function Vn(R){if(R.samples>0){if(dt(R)===!1){let M=R.textures,G=R.width,K=R.height,te=n.COLOR_BUFFER_BIT,J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(R),ge=M.length>1;if(ge)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);let pt=i.get(M[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,G,K,0,0,G,K,te,n.NEAREST),l===!0&&($t.length=0,B.length=0,$t.push(n.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&R.resolveDepthBuffer===!1&&($t.push(J),B.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);let pt=i.get(M[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,pt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ht(R){return Math.min(s.maxSamples,R.samples)}function dt(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Ot(R,M){let G=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ts&&G!==qi&&(mt.getTransfer(G)===wt?(K!==ei||te!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=$,this.setTexture3D=oe,this.setTextureCube=Z,this.rebindTextures=it,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Vn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=dt}function rg(n,e){function t(i,s=qi){let r,o=mt.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===th)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iu)return n.BYTE;if(i===su)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===eh)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===ou)return n.ALPHA;if(i===au)return n.RGB;if(i===ei)return n.RGBA;if(i===lu)return n.LUMINANCE;if(i===cu)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===ih)return n.RED;if(i===sh)return n.RED_INTEGER;if(i===hu)return n.RG;if(i===rh)return n.RG_INTEGER;if(i===oh)return n.RGBA_INTEGER;if(i===Vo||i===Wo||i===Xo||i===qo)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===zl||i===kl||i===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Wl||i===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Vl||i===Wl)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ql||i===Yl||i===Zl||i===$l||i===Jl||i===Ql||i===Kl||i===jl||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ql)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===oc||i===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===du||i===lc||i===cc||i===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var bc=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},se=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},og={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new se;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
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

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new bn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new an({vertexShader:ag,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new k(new Re(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends Qi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new wc,m=t.getContextAttributes(),p=null,v=null,_=[],y=[],D=new ce,C=null,b=new hn;b.viewport=new Rt;let F=new hn;F.viewport=new Rt;let S=[b,F],A=new bc,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Vr,_[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Vr,_[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Vr,_[Q]=ae),ae.getHandSpace()};function z(Q){let ae=y.indexOf(Q.inputSource);if(ae===-1)return;let Ce=_[ae];Ce!==void 0&&(Ce.update(Q.inputSource,Q.frame,c||o),Ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<_.length;Q++){let ae=y[Q];ae!==null&&(y[Q]=null,_[Q].disconnect(ae))}P=null,H=null,E.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,Pt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new on(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ce=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?rr:Ks,Ce=m.stencil?sr:Fi);let Ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new on(u.textureWidth,u.textureHeight,{format:ei,type:Ci,depthTexture:new lr(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(Q){for(let ae=0;ae<Q.removed.length;ae++){let Ce=Q.removed[ae],me=y.indexOf(Ce);me>=0&&(y[me]=null,_[me].disconnect(Ce))}for(let ae=0;ae<Q.added.length;ae++){let Ce=Q.added[ae],me=y.indexOf(Ce);if(me===-1){for(let Ye=0;Ye<_.length;Ye++)if(Ye>=y.length){y.push(Ce),me=Ye;break}else if(y[Ye]===null){y[Ye]=Ce,me=Ye;break}if(me===-1)break}let Ve=_[me];Ve&&Ve.connect(Ce)}}let $=new I,oe=new I;function Z(Q,ae,Ce){$.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Ce.matrixWorld);let me=$.distanceTo(oe),Ve=ae.projectionMatrix.elements,Ye=Ce.projectionMatrix.elements,it=Ve[14]/(Ve[10]-1),Xt=Ve[14]/(Ve[10]+1),ft=(Ve[9]+1)/Ve[5],$t=(Ve[9]-1)/Ve[5],B=(Ve[8]-1)/Ve[0],Vn=(Ye[8]+1)/Ye[0],ht=it*B,dt=it*Vn,ke=me/(-B+Vn),Ot=ke*-B;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ot),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ve[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let Be=it+ke,R=Xt+ke,M=ht-Ot,G=dt+(me-Ot),K=ft*Xt/R*Be,te=$t*Xt/R*Be;Q.projectionMatrix.makePerspective(M,G,K,te,Be,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pe(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,Ce=Q.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Ce=E.depthFar)),A.near=F.near=b.near=ae,A.far=F.far=b.far=Ce,(P!==A.near||H!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,H=A.far),b.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,A.layers.mask=b.layers.mask|F.layers.mask;let me=Q.parent,Ve=A.cameras;pe(A,me);for(let Ye=0;Ye<Ve.length;Ye++)pe(Ve[Ye],me);Ve.length===2?Z(A,b,F):A.projectionMatrix.copy(b.projectionMatrix),_e(Q,A,me)};function _e(Q,ae,Ce){Ce===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Jo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Ne=null;function nt(Q,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let me=!1;Ce.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let Ye=0;Ye<Ce.length;Ye++){let it=Ce[Ye],Xt=null;if(f!==null)Xt=f.getViewport(it);else{let $t=d.getViewSubImage(u,it);Xt=$t.viewport,Ye===0&&(e.setRenderTargetTextures(v,$t.colorTexture,u.ignoreDepthValues?void 0:$t.depthStencilTexture),e.setRenderTarget(v))}let ft=S[Ye];ft===void 0&&(ft=new hn,ft.layers.enable(Ye),ft.viewport=new Rt,S[Ye]=ft),ft.matrix.fromArray(it.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(it.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ye===0&&(A.matrix.copy(ft.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(ft)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let Ye=d.getDepthInformation(Ce[0]);Ye&&Ye.isValid&&Ye.texture&&E.init(e,Ye,s.renderState)}}for(let Ce=0;Ce<_.length;Ce++){let me=y[Ce],Ve=_[Ce];me!==null&&Ve!==void 0&&Ve.update(me,ae,c||o)}Ne&&Ne(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Pt=new Eu;Pt.setAnimationLoop(nt),this.setAnimationLoop=function(Q){Ne=Q},this.dispose=function(){}}},ps=new mi,cg=new Ct;function hg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,ps.copy(y),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(ps)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dg(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=_.program;i.updateUBOMapping(v,D);let C=e.render.frame;r[v.id]!==C&&(u(v),r[v.id]=C)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),D=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let C=0,b=y.length;C<b;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,A=F.length;S<A;S++){let P=F[S];if(f(P,C,S,D)===!0){let H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],q=0;for(let ee=0;ee<z.length;ee++){let $=z[ee],oe=E($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,H+q,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,q),q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,y,D){let C=v.value,b=_+"_"+y;if(D[b]===void 0)return typeof C=="number"||typeof C=="boolean"?D[b]=C:D[b]=C.clone(),!0;{let F=D[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return D[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(v){let _=v.uniforms,y=0,D=16;for(let b=0,F=_.length;b<F;b++){let S=Array.isArray(_[b])?_[b]:[_[b]];for(let A=0,P=S.length;A<P;A++){let H=S[A],z=Array.isArray(H.value)?H.value:[H.value];for(let q=0,ee=z.length;q<ee;q++){let $=z[q],oe=E($),Z=y%D,pe=Z%oe.boundary,_e=Z+pe;y+=pe,_e!==0&&D-_e<oe.storage&&(y+=D-_e),H.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=oe.storage}}}let C=y%D;return C>0&&(y+=D-C),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var aa=class{constructor(e={}){let{canvas:t=g0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=pi,this.toneMappingExposure=1;let y=this,D=!1,C=0,b=0,F=null,S=-1,A=null,P=new Rt,H=new Rt,z=null,q=new de(0),ee=0,$=t.width,oe=t.height,Z=1,pe=null,_e=null,Ne=new Rt(0,0,$,oe),nt=new Rt(0,0,$,oe),Pt=!1,Q=new Yr,ae=!1,Ce=!1,me=new Ct,Ve=new Ct,Ye=new I,it=new Rt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function $t(){return F===null?Z:1}let B=i;function Vn(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),B===null){let N="webgl2";if(B=Vn(N,T),B===null)throw Vn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,dt,ke,Ot,Be,R,M,G,K,te,J,Ie,ge,Ae,pt,ie,Me,Ge,We,Se,ut,Ke,Dt,L;function ue(){ht=new x1(B),ht.init(),Ke=new rg(B,ht),dt=new A1(B,ht,e,Ke),ke=new ng(B,ht),dt.reverseDepthBuffer&&u&&ke.buffers.depth.setReversed(!0),Ot=new F1(B),Be=new V2,R=new sg(B,ht,ke,Be,dt,Ke,Ot),M=new S1(y),G=new w1(y),K=new O0(B),Dt=new v1(B,K),te=new R1(B,K,Ot,Dt),J=new I1(B,te,K,Ot),We=new P1(B,dt,R),ie=new M1(Be),Ie=new G2(y,M,G,ht,dt,Dt,ie),ge=new hg(y,Be),Ae=new X2,pt=new Q2(ht),Ge=new y1(y,M,G,ke,J,f,l),Me=new eg(y,J,dt),L=new dg(B,Ot,dt,ke),Se=new _1(B,ht,Ot),ut=new C1(B,ht,Ot),Ot.programs=Ie.programs,y.capabilities=dt,y.extensions=ht,y.properties=Be,y.renderLists=Ae,y.shadowMap=Me,y.state=ke,y.info=Ot}ue();let Y=new xc(y,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize($,oe,!1))},this.getSize=function(T){return T.set($,oe)},this.setSize=function(T,N,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,oe=N,t.width=Math.floor(T*Z),t.height=Math.floor(N*Z),W===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set($*Z,oe*Z).floor()},this.setDrawingBufferSize=function(T,N,W){$=T,oe=N,Z=W,t.width=Math.floor(T*W),t.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Ne)},this.setViewport=function(T,N,W,X){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,N,W,X),ke.viewport(P.copy(Ne).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(nt)},this.setScissor=function(T,N,W,X){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,N,W,X),ke.scissor(H.copy(nt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){ke.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){pe=T},this.setTransparentSort=function(T){_e=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(T=!0,N=!0,W=!0){let X=0;if(T){let O=!1;if(F!==null){let re=F.texture.format;O=re===oh||re===rh||re===sh}if(O){let re=F.texture.type,ye=re===Ci||re===Fi||re===qr||re===sr||re===th||re===nh,be=Ge.getClearColor(),we=Ge.getClearAlpha(),Xe=be.r,$e=be.g,xe=be.b;ye?(g[0]=Xe,g[1]=$e,g[2]=xe,g[3]=we,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=Xe,E[1]=$e,E[2]=xe,E[3]=we,B.clearBufferiv(B.COLOR,0,E))}else X|=B.COLOR_BUFFER_BIT}N&&(X|=B.DEPTH_BUFFER_BIT),W&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ae.dispose(),pt.dispose(),Be.dispose(),M.dispose(),G.dispose(),J.dispose(),Dt.dispose(),L.dispose(),Ie.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Oh),Y.removeEventListener("sessionend",Bh),ls.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=Ot.autoReset,N=Me.enabled,W=Me.autoUpdate,X=Me.needsUpdate,O=Me.type;ue(),Ot.autoReset=T,Me.enabled=N,Me.autoUpdate=W,Me.needsUpdate=X,Me.type=O}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){let N=T.target;N.removeEventListener("dispose",Ze),Yt(N)}function Yt(T){fn(T),Be.remove(T)}function fn(T){let N=Be.get(T).programs;N!==void 0&&(N.forEach(function(W){Ie.releaseProgram(W)}),T.isShaderMaterial&&Ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,X,O,re){N===null&&(N=Xt);let ye=O.isMesh&&O.matrixWorld.determinant()<0,be=xf(T,N,W,X,O);ke.setMaterial(X,ye);let we=W.index,Xe=1;if(X.wireframe===!0){if(we=te.getWireframeAttribute(W),we===void 0)return;Xe=2}let $e=W.drawRange,xe=W.attributes.position,gt=$e.start*Xe,Lt=($e.start+$e.count)*Xe;re!==null&&(gt=Math.max(gt,re.start*Xe),Lt=Math.min(Lt,(re.start+re.count)*Xe)),we!==null?(gt=Math.max(gt,0),Lt=Math.min(Lt,we.count)):xe!=null&&(gt=Math.max(gt,0),Lt=Math.min(Lt,xe.count));let Bt=Lt-gt;if(Bt<0||Bt===1/0)return;Dt.setup(O,X,be,W,we);let Sn,At=Se;if(we!==null&&(Sn=K.get(we),At=ut,At.setIndex(Sn)),O.isMesh)X.wireframe===!0?(ke.setLineWidth(X.wireframeLinewidth*$t()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(O.isLine){let De=X.linewidth;De===void 0&&(De=1),ke.setLineWidth(De*$t()),O.isLineSegments?At.setMode(B.LINES):O.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else O.isPoints?At.setMode(B.POINTS):O.isSprite&&At.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)At.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))At.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let De=O._multiDrawStarts,vi=O._multiDrawCounts,Mt=O._multiDrawCount,Jn=we?K.get(we).bytesPerElement:1,Ps=Be.get(X).currentProgram.getUniforms();for(let Un=0;Un<Mt;Un++)Ps.setValue(B,"_gl_DrawID",Un),At.render(De[Un]/Jn,vi[Un])}else if(O.isInstancedMesh)At.renderInstances(gt,Bt,O.count);else if(W.isInstancedBufferGeometry){let De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vi=Math.min(W.instanceCount,De);At.renderInstances(gt,Bt,vi)}else At.render(gt,Bt)};function Tt(T,N,W){T.transparent===!0&&T.side===It&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,fo(T,N,W),T.side=Ji,T.needsUpdate=!0,fo(T,N,W),T.side=It):fo(T,N,W)}this.compile=function(T,N,W=null){W===null&&(W=T),p=pt.get(W),p.init(N),_.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==W&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let X=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let re=O.material;if(re)if(Array.isArray(re))for(let ye=0;ye<re.length;ye++){let be=re[ye];Tt(be,W,O),X.add(be)}else Tt(re,W,O),X.add(re)}),_.pop(),p=null,X},this.compileAsync=function(T,N,W=null){let X=this.compile(T,N,W);return new Promise(O=>{function re(){if(X.forEach(function(ye){Be.get(ye).currentProgram.isReady()&&X.delete(ye)}),X.size===0){O(T);return}setTimeout(re,10)}ht.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let $n=null;function yi(T){$n&&$n(T)}function Oh(){ls.stop()}function Bh(){ls.start()}let ls=new Eu;ls.setAnimationLoop(yi),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(T){$n=T,Y.setAnimationLoop(T),T===null?ls.stop():ls.start()},Y.addEventListener("sessionstart",Oh),Y.addEventListener("sessionend",Bh),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,N,F),p=pt.get(T,_.length),p.init(N),_.push(p),Ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(Ve),Ce=this.localClippingEnabled,ae=ie.init(this.clippingPlanes,Ce),m=Ae.get(T,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&Wa(re,N,-1/0,y.sortObjects)}Wa(T,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(pe,_e),ft=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ft&&Ge.addToRenderList(m,T),this.info.render.frame++,ae===!0&&ie.beginShadows();let W=p.state.shadowsArray;Me.render(W,T,N),ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let re=N.cameras;if(O.length>0)for(let ye=0,be=re.length;ye<be;ye++){let we=re[ye];zh(X,O,T,we)}ft&&Ge.render(T);for(let ye=0,be=re.length;ye<be;ye++){let we=re[ye];Hh(m,T,we,we.viewport)}}else O.length>0&&zh(X,O,T,N),ft&&Ge.render(T),Hh(m,T,N);F!==null&&(R.updateMultisampleRenderTarget(F),R.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,N),Dt.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(p=_[_.length-1],ae===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Wa(T,N,W,X){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){X&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ve);let ye=J.update(T),be=T.material;be.visible&&m.push(T,ye,be,W,it.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){let ye=J.update(T),be=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),it.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),it.copy(ye.boundingSphere.center)),it.applyMatrix4(T.matrixWorld).applyMatrix4(Ve)),Array.isArray(be)){let we=ye.groups;for(let Xe=0,$e=we.length;Xe<$e;Xe++){let xe=we[Xe],gt=be[xe.materialIndex];gt&&gt.visible&&m.push(T,ye,gt,W,it.z,xe)}}else be.visible&&m.push(T,ye,be,W,it.z,null)}}let re=T.children;for(let ye=0,be=re.length;ye<be;ye++)Wa(re[ye],N,W,X)}function Hh(T,N,W,X){let O=T.opaque,re=T.transmissive,ye=T.transparent;p.setupLightsView(W),ae===!0&&ie.setGlobalState(y.clippingPlanes,W),X&&ke.viewport(P.copy(X)),O.length>0&&uo(O,N,W),re.length>0&&uo(re,N,W),ye.length>0&&uo(ye,N,W),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function zh(T,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new on(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?xn:Ci,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let re=p.state.transmissionRenderTarget[X.id],ye=X.viewport||P;re.setSize(ye.z,ye.w);let be=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(q),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),ft&&Ge.render(W);let we=y.toneMapping;y.toneMapping=pi;let Xe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ae===!0&&ie.setGlobalState(y.clippingPlanes,X),uo(T,W,X),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),ht.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let xe=0,gt=N.length;xe<gt;xe++){let Lt=N[xe],Bt=Lt.object,Sn=Lt.geometry,At=Lt.material,De=Lt.group;if(At.side===It&&Bt.layers.test(X.layers)){let vi=At.side;At.side=sn,At.needsUpdate=!0,kh(Bt,W,X,Sn,At,De),At.side=vi,At.needsUpdate=!0,$e=!0}}$e===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}y.setRenderTarget(be),y.setClearColor(q,ee),Xe!==void 0&&(X.viewport=Xe),y.toneMapping=we}function uo(T,N,W){let X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,re=T.length;O<re;O++){let ye=T[O],be=ye.object,we=ye.geometry,Xe=X===null?ye.material:X,$e=ye.group;be.layers.test(W.layers)&&kh(be,N,W,we,Xe,$e)}}function kh(T,N,W,X,O,re){T.onBeforeRender(y,N,W,X,O,re),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,N,W,X,T,re),O.transparent===!0&&O.side===It&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,y.renderBufferDirect(W,N,X,O,T,re),O.side=Ji,O.needsUpdate=!0,y.renderBufferDirect(W,N,X,O,T,re),O.side=It):y.renderBufferDirect(W,N,X,O,T,re),T.onAfterRender(y,N,W,X,O,re)}function fo(T,N,W){N.isScene!==!0&&(N=Xt);let X=Be.get(T),O=p.state.lights,re=p.state.shadowsArray,ye=O.state.version,be=Ie.getParameters(T,O.state,re,N,W),we=Ie.getProgramCacheKey(be),Xe=X.programs;X.environment=T.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Ze),Xe=new Map,X.programs=Xe);let $e=Xe.get(we);if($e!==void 0){if(X.currentProgram===$e&&X.lightsStateVersion===ye)return Vh(T,be),$e}else be.uniforms=Ie.getUniforms(T),T.onBeforeCompile(be,y),$e=Ie.acquireProgram(be,we),Xe.set(we,$e),X.uniforms=be.uniforms;let xe=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(xe.clippingPlanes=ie.uniform),Vh(T,be),X.needsLights=Cf(T),X.lightsStateVersion=ye,X.needsLights&&(xe.ambientLightColor.value=O.state.ambient,xe.lightProbe.value=O.state.probe,xe.directionalLights.value=O.state.directional,xe.directionalLightShadows.value=O.state.directionalShadow,xe.spotLights.value=O.state.spot,xe.spotLightShadows.value=O.state.spotShadow,xe.rectAreaLights.value=O.state.rectArea,xe.ltc_1.value=O.state.rectAreaLTC1,xe.ltc_2.value=O.state.rectAreaLTC2,xe.pointLights.value=O.state.point,xe.pointLightShadows.value=O.state.pointShadow,xe.hemisphereLights.value=O.state.hemi,xe.directionalShadowMap.value=O.state.directionalShadowMap,xe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xe.spotShadowMap.value=O.state.spotShadowMap,xe.spotLightMatrix.value=O.state.spotLightMatrix,xe.spotLightMap.value=O.state.spotLightMap,xe.pointShadowMap.value=O.state.pointShadowMap,xe.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=$e,X.uniformsList=null,$e}function Gh(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=er.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Vh(T,N){let W=Be.get(T);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function xf(T,N,W,X,O){N.isScene!==!0&&(N=Xt),R.resetTextureUnits();let re=N.fog,ye=X.isMeshStandardMaterial?N.environment:null,be=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ts,we=(X.isMeshStandardMaterial?G:M).get(X.envMap||ye),Xe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),xe=!!W.morphAttributes.position,gt=!!W.morphAttributes.normal,Lt=!!W.morphAttributes.color,Bt=pi;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Bt=y.toneMapping);let Sn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,At=Sn!==void 0?Sn.length:0,De=Be.get(X),vi=p.state.lights;if(ae===!0&&(Ce===!0||T!==A)){let Wn=T===A&&X.id===S;ie.setState(X,T,Wn)}let Mt=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==vi.state.version||De.outputColorSpace!==be||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==we||X.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Xe||De.vertexTangents!==$e||De.morphTargets!==xe||De.morphNormals!==gt||De.morphColors!==Lt||De.toneMapping!==Bt||De.morphTargetsCount!==At)&&(Mt=!0):(Mt=!0,De.__version=X.version);let Jn=De.currentProgram;Mt===!0&&(Jn=fo(X,N,O));let Ps=!1,Un=!1,Cr=!1,Ht=Jn.getUniforms(),li=De.uniforms;if(ke.useProgram(Jn.program)&&(Ps=!0,Un=!0,Cr=!0),X.id!==S&&(S=X.id,Un=!0),Ps||A!==T){ke.buffers.depth.getReversed()?(me.copy(T.projectionMatrix),y0(me),v0(me),Ht.setValue(B,"projectionMatrix",me)):Ht.setValue(B,"projectionMatrix",T.projectionMatrix),Ht.setValue(B,"viewMatrix",T.matrixWorldInverse);let Bi=Ht.map.cameraPosition;Bi!==void 0&&Bi.setValue(B,Ye.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Un=!0,Cr=!0)}if(O.isSkinnedMesh){Ht.setOptional(B,O,"bindMatrix"),Ht.setOptional(B,O,"bindMatrixInverse");let Wn=O.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Ht.setValue(B,"boneTexture",Wn.boneTexture,R))}O.isBatchedMesh&&(Ht.setOptional(B,O,"batchingTexture"),Ht.setValue(B,"batchingTexture",O._matricesTexture,R),Ht.setOptional(B,O,"batchingIdTexture"),Ht.setValue(B,"batchingIdTexture",O._indirectTexture,R),Ht.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&Ht.setValue(B,"batchingColorTexture",O._colorsTexture,R));let Fr=W.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&We.update(O,W,Jn),(Un||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,Ht.setValue(B,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(li.envMap.value=we,li.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(li.envMapIntensity.value=N.environmentIntensity),Un&&(Ht.setValue(B,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Rf(li,Cr),re&&X.fog===!0&&ge.refreshFogUniforms(li,re),ge.refreshMaterialUniforms(li,X,Z,oe,p.state.transmissionRenderTarget[T.id]),er.upload(B,Gh(De),li,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(er.upload(B,Gh(De),li,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ht.setValue(B,"center",O.center),Ht.setValue(B,"modelViewMatrix",O.modelViewMatrix),Ht.setValue(B,"normalMatrix",O.normalMatrix),Ht.setValue(B,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Wn=X.uniformsGroups;for(let Bi=0,Hi=Wn.length;Bi<Hi;Bi++){let Wh=Wn[Bi];L.update(Wh,Jn),L.bind(Wh,Jn)}}return Jn}function Rf(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Cf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,N,W){Be.get(T.texture).__webglTexture=N,Be.get(T.depthTexture).__webglTexture=W;let X=Be.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let W=Be.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,W=0){F=T,C=N,b=W;let X=!0,O=null,re=!1,ye=!1;if(T){let we=Be.get(T);if(we.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(B.FRAMEBUFFER,null),X=!1;else if(we.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(we.__hasExternalTextures)R.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let xe=T.depthTexture;if(we.__boundDepthTexture!==xe){if(xe!==null&&Be.has(xe)&&(T.width!==xe.image.width||T.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ye=!0);let $e=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[N])?O=$e[N][W]:O=$e[N],re=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=Be.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?O=$e[W]:O=$e,P.copy(T.viewport),H.copy(T.scissor),z=T.scissorTest}else P.copy(Ne).multiplyScalar(Z).floor(),H.copy(nt).multiplyScalar(Z).floor(),z=Pt;if(ke.bindFramebuffer(B.FRAMEBUFFER,O)&&X&&ke.drawBuffers(T,O),ke.viewport(P),ke.scissor(H),ke.setScissorTest(z),re){let we=Be.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,W)}else if(ye){let we=Be.get(T.texture),Xe=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Xe)}S=-1},this.readRenderTargetPixels=function(T,N,W,X,O,re,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){ke.bindFramebuffer(B.FRAMEBUFFER,be);try{let we=T.texture,Xe=we.format,$e=we.type;if(!dt.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-X&&W>=0&&W<=T.height-O&&B.readPixels(N,W,X,O,Ke.convert(Xe),Ke.convert($e),re)}finally{let we=F!==null?Be.get(F).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,N,W,X,O,re,ye){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){let we=T.texture,Xe=we.format,$e=we.type;if(!dt.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-X&&W>=0&&W<=T.height-O){ke.bindFramebuffer(B.FRAMEBUFFER,be);let xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.bufferData(B.PIXEL_PACK_BUFFER,re.byteLength,B.STREAM_READ),B.readPixels(N,W,X,O,Ke.convert(Xe),Ke.convert($e),0);let gt=F!==null?Be.get(F).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,gt);let Lt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await E0(B,Lt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,re),B.deleteBuffer(xe),B.deleteSync(Lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,W=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);let X=Math.pow(2,-W),O=Math.floor(T.image.width*X),re=Math.floor(T.image.height*X),ye=N!==null?N.x:0,be=N!==null?N.y:0;R.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,ye,be,O,re),ke.unbindTexture()},this.copyTextureToTexture=function(T,N,W=null,X=null,O=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,W=null);let re,ye,be,we,Xe,$e,xe,gt,Lt,Bt=T.isCompressedTexture?T.mipmaps[O]:T.image;W!==null?(re=W.max.x-W.min.x,ye=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Xe=W.min.y,$e=W.isBox3?W.min.z:0):(re=Bt.width,ye=Bt.height,be=Bt.depth||1,we=0,Xe=0,$e=0),X!==null?(xe=X.x,gt=X.y,Lt=X.z):(xe=0,gt=0,Lt=0);let Sn=Ke.convert(N.format),At=Ke.convert(N.type),De;N.isData3DTexture?(R.setTexture3D(N,0),De=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),De=B.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),De=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let vi=B.getParameter(B.UNPACK_ROW_LENGTH),Mt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Jn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ps=B.getParameter(B.UNPACK_SKIP_ROWS),Un=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,we),B.pixelStorei(B.UNPACK_SKIP_ROWS,Xe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);let Cr=T.isDataArrayTexture||T.isData3DTexture,Ht=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let li=Be.get(T),Fr=Be.get(N),Wn=Be.get(li.__renderTarget),Bi=Be.get(Fr.__renderTarget);ke.bindFramebuffer(B.READ_FRAMEBUFFER,Wn.__webglFramebuffer),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Hi=0;Hi<be;Hi++)Cr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(T).__webglTexture,O,$e+Hi),T.isDepthTexture?(Ht&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(N).__webglTexture,O,Lt+Hi),B.blitFramebuffer(we,Xe,re,ye,xe,gt,re,ye,B.DEPTH_BUFFER_BIT,B.NEAREST)):Ht?B.copyTexSubImage3D(De,O,xe,gt,Lt+Hi,we,Xe,re,ye):B.copyTexSubImage2D(De,O,xe,gt,Lt+Hi,we,Xe,re,ye);ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ht?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(De,O,xe,gt,Lt,re,ye,be,Sn,At,Bt.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(De,O,xe,gt,Lt,re,ye,be,Sn,Bt.data):B.texSubImage3D(De,O,xe,gt,Lt,re,ye,be,Sn,At,Bt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,xe,gt,re,ye,Sn,At,Bt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,xe,gt,Bt.width,Bt.height,Sn,Bt.data):B.texSubImage2D(B.TEXTURE_2D,O,xe,gt,re,ye,Sn,At,Bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,vi),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ps),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Un),O===0&&N.generateMipmaps&&B.generateMipmap(De),ke.unbindTexture()},this.copyTextureToTexture3D=function(T,N,W=null,X=null,O=0){return T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,W,X,O)},this.initRenderTarget=function(T){Be.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ke.unbindTexture()},this.resetState=function(){C=0,b=0,F=null,ke.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}},Oe=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var la=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new I,ca=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),i=xt(i,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends Ii{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qs,Ur=new I,Ys=new I,Zs=new I,$s=new ce,Nr=new ce,Mu=new Ct,Uo=new I,Or=new I,No=new I,Vd=new ce,Al=new ce,Wd=new ce,Zr=class extends Jt{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Rc(t,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new ca(i,3,0,!1)),qs.setAttribute("uv",new ca(i,2,3,!1))}this.geometry=qs,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Mu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Zs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Oo(Uo.set(-.5,-.5,0),Zs,o,Ys,s,r),Oo(Or.set(.5,-.5,0),Zs,o,Ys,s,r),Oo(No.set(.5,.5,0),Zs,o,Ys,s,r),Vd.set(0,0),Al.set(1,0),Wd.set(1,1);let a=e.ray.intersectTriangle(Uo,Or,No,!1,Ur);if(a===null&&(Oo(Or.set(-.5,.5,0),Zs,o,Ys,s,r),Al.set(0,1),a=e.ray.intersectTriangle(Uo,No,Or,!1,Ur),a===null))return;let l=e.ray.origin.distanceTo(Ur);l<e.near||l>e.far||t.push({distance:l,point:Ur.clone(),uv:Yi.getInterpolation(Ur,Uo,Or,No,Vd,Al,Wd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Oo(n,e,t,i,s,r){$s.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Nr.x=r*$s.x-s*$s.y,Nr.y=s*$s.x+r*$s.y):Nr.copy($s),n.copy(e),n.x+=Nr.x,n.y+=Nr.y,n.applyMatrix4(Mu)}var Cc=class extends bn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Bn,h=Bn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ha=class extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Ct,Xd=new Ct,Bo=[],qd=new Pi,ug=new Ct,Br=new k,Hr=new ji,da=class extends k{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ha(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),qd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),Hr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Xd.multiplyMatrices(i,Js),Br.matrixWorld=Xd,Br.raycast(e,Bo);for(let o=0,a=Bo.length;o<a;o++){let l=Bo[o];l.instanceId=r,l.object=this,t.push(l)}Bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Cc(new Float32Array(s*this.count),s,this.count,ih,ui));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hr=class extends Ii{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new Ct,Fc=new ea,Ho=new ji,zo=new I,$r=class extends Jt{constructor(e=new Kt,t=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;Yd.copy(s).invert(),Fc.copy(e.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);zo.fromBufferAttribute(d,m),Zd(zo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,E=f;g<E;g++)zo.fromBufferAttribute(d,g),Zd(zo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zd(n,e,t,i,s,r,o){let a=Fc.distanceSqToPoint(n);if(a<t){let l=new I;Fc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qn=class extends bn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new Ct;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(gn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(gn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ua=class extends ti{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pc=class extends ua{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ko=new I,Ml=new lh,Sl=new lh,Tl=new lh,_s=class extends ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ko.subVectors(s[0],s[1]).add(s[0]),c=ko);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ko),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Ml.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Sl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),Tl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Sl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Tl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ml.calc(l),Sl.calc(l),Tl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $d(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function fg(n,e){let t=1-n;return t*t*e}function pg(n,e){return 2*(1-n)*n*e}function mg(n,e){return n*n*e}function Wr(n,e,t,i){return fg(n,e)+pg(n,t)+mg(n,i)}function gg(n,e){let t=1-n;return t*t*t*e}function Eg(n,e){let t=1-n;return 3*t*t*n*e}function yg(n,e){return 3*(1-n)*n*n*e}function vg(n,e){return n*n*n*e}function Xr(n,e,t,i,s){return gg(n,e)+Eg(n,t)+yg(n,i)+vg(n,s)}var Ic=class extends ti{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(e,s.x,r.x,o.x,a.x),Xr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dc=class extends ti{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(e,s.x,r.x,o.x,a.x),Xr(e,s.y,r.y,o.y,a.y),Xr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lc=class extends ti{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends ti{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends ti{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends ti{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y),Wr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set($d(a,l.x,c.x,h.x,d.x),$d(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},_g=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:_s,CubicBezierCurve:Ic,CubicBezierCurve3:Dc,EllipseCurve:ua,LineCurve:Lc,LineCurve3:Uc,QuadraticBezierCurve:Nc,QuadraticBezierCurve3:fa,SplineCurve:Oc});var Hn=class n extends Kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qe=class n extends Kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(f,2));function v(){let y=new I,D=new I,C=0,b=(t-e)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,P=A*(t-e)+e;for(let H=0;H<=s;H++){let z=H/s,q=z*l+a,ee=Math.sin(q),$=Math.cos(q);D.x=P*ee,D.y=-A*i+m,D.z=P*$,d.push(D.x,D.y,D.z),y.set(ee,b,$).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],P=E[S+1][F],H=E[S+1][F+1],z=E[S][F+1];(e>0||S!==0)&&(h.push(A,P,z),C+=3),(t>0||S!==r-1)&&(h.push(P,H,z),C+=3)}c.addGroup(p,C,0),p+=C}function _(y){let D=g,C=new ce,b=new I,F=0,S=y===!0?e:t,A=y===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let H=0;H<=s;H++){let q=H/s*l+a,ee=Math.cos(q),$=Math.sin(q);b.x=S*$,b.y=m*A,b.z=S*ee,d.push(b.x,b.y,b.z),u.push(0,A,0),C.x=ee*.5+.5,C.y=$*.5*A+.5,f.push(C.x,C.y),g++}for(let H=0;H<s;H++){let z=D+H,q=P+H;y===!0?h.push(q,q+1,z):h.push(q+1,q,z),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},An=class n extends qe{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bc=class n extends Kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,D=new I;for(let C=0;C<t.length;C+=3)f(t[C+0],_),f(t[C+1],y),f(t[C+2],D),l(_,y,D,v)}function l(v,_,y,D){let C=D+1,b=[];for(let F=0;F<=C;F++){b[F]=[];let S=v.clone().lerp(y,F/C),A=_.clone().lerp(y,F/C),P=C-F;for(let H=0;H<=P;H++)H===0&&F===C?b[F][H]=S:b[F][H]=S.clone().lerp(A,H/P)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(b[F][A+1]),u(b[F+1][A]),u(b[F][A])):(u(b[F][A+1]),u(b[F+1][A+1]),u(b[F+1][A]))}}function c(v){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,D=p(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],D=o[v+4],C=Math.max(_,y,D),b=Math.min(_,y,D);C>.9&&b<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new I,_=new I,y=new I,D=new I,C=new ce,b=new ce,F=new ce;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[A+0],o[A+1]),b.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),D.copy(v).add(_).add(y).divideScalar(3);let P=m(D);E(C,A+0,v,P),E(b,A+2,_,P),E(F,A+4,y,P)}}function E(v,_,y,D){D<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},dr=class n extends Bc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Et=class n extends Kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let v=[],_=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let C=D/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let _=h[p][v+1],y=h[p][v],D=h[p+1][v],C=h[p+1][v+1];(p!==0||o>0)&&f.push(_,y,C),(p!==i-1||l<Math.PI)&&f.push(y,D,C)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(E,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jt=class n extends Kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(E,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ur=class n extends Kt{constructor(e=new fa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ce,h=new I,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(f,2));function E(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),p()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],D=o.binormals[_];for(let C=0;C<=s;C++){let b=C/s*Math.PI*2,F=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+F*D.x,l.y=S*y.y+F*D.y,l.z=S*y.z+F*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let D=(s+1)*(_-1)+(y-1),C=(s+1)*_+(y-1),b=(s+1)*_+y,F=(s+1)*(_-1)+y;g.push(D,C,F),g.push(C,b,F)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new _g[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Le=class extends Ii{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Go(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ag(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var fr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends fr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $h:r=e,a=2*t-i;break;case Jh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $h:o=e,l=2*i-t;break;case Jh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+v*o[c+D]+_*o[l+D]+y*o[d+D];return r}},zc=class extends fr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},kc=class extends fr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case dc:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ag(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=dc;var As=class extends ni{constructor(e,t,i){super(e,t,i)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Zo;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends ni{};Gc.prototype.ValueTypeName="color";var Vc=class extends ni{};Vc.prototype.ValueTypeName="number";var Wc=class extends fr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ki.slerpFlat(r,0,o,c-a,o,c,l);return r}},pa=class extends ni{InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends ni{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Zo;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends ni{};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Mg=new qc,Yc=class{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ue=class extends pr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bl=new Ct,Jd=new I,Qd=new I,Jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zc=class extends Jr{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Jo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Yn=class extends pr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Kd=new Ct,zr=new I,wl=new I,$c=class extends Jr{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(zr),wl.copy(i.position),wl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wl),i.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),Kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd)}},Qe=class extends pr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jc=class extends Jr{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mr=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ma=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=jd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jd(){return 0}var ch="\\[\\]\\.:\\/",Sg=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",Tg="[^"+ch.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",hh),wg=/(WCOD+)?/.source.replace("WCOD",Tg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),Cg=new RegExp("^"+bg+wg+xg+Rg+"$"),Fg=["material","materials","bones","map"],Qc=class{constructor(e,t,i){let s=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(e){let t=Cg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Fg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Qc;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ny=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);var va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Pg=new ar(-1,1,1,-1,0,1),dh=class extends Kt{constructor(){super(),this.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new St([0,2,0,0,2,0],2))}},Ig=new dh,vr=class{constructor(e){this._mesh=new k(Ig,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ss=class extends Di{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Er.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qr=class extends Di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_a=class extends Di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Aa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ss(va),this.copyPass.material.blending=fi,this.clock=new ma}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qr!==void 0&&(o instanceof Qr?i=!0:o instanceof _a&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Su={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _r=class n extends Di{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new on(r,o,{type:xn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new on(r,o,{type:xn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Su;this.highPassUniforms=Er.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=va;this.copyUniforms=Er.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new et,this.fsQuad=new vr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_r.BlurDirectionX=new ce(1,0);_r.BlurDirectionY=new ce(0,1);var Ts=1280,bs=720;function He(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Kr=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),bt=(n,e,t)=>n+(e-n)*t,st=(n,e,t)=>{let i=Kr((t-n)/(e-n));return i*i*(3-2*i)};var Dg=n=>(n=Kr(n),n*n*(3-2*n));function Sa(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=Dg((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>bt(o,r[a],i)):bt(s,r,i)}return n[n.length-1][1]}var Lg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ce(Ts,bs)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},Ug={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new de(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Ma=class{constructor(e){let t=this.r=new aa({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(Ts,bs,!1),t.shadowMap.enabled=!0,t.shadowMap.type=jc,t.toneMapping=pi,t.outputColorSpace=ts;let i=new lr(Ts,bs);i.type=Fi,this.rt=new on(Ts,bs,{type:xn,samples:2,depthTexture:i}),this.composer=new Aa(t,new on(Ts,bs,{type:xn})),this.dof=new Ss(Lg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new _r(new ce(Ts/2,bs/2),.45,.75,.82),this.grade=new Ss(Ug),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function Tu(n,e,t,i=40){let s=new la;s.background=new de(t);let r=new hn(i,Ts/bs,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function bu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var Fn=1/420,uh=new Map;function Pn(n,e,t,i){if(uh.has(n))return uh.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new qn(s);return o.colorSpace=Gt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,uh.set(n,o),o}var yt=n=>new Path2D(n);function ln(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function ii(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var Ng={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function Og(n,e){return Pn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=yt("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");ln(t,i,ii(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(yt("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(yt("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(yt("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=yt("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){ln(t,yt("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),ii(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(yt("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(yt("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(yt("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(yt("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(yt("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")ln(t,yt("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),ii(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(yt("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(yt("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(yt("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){ln(t,yt("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),ii(t,-60,0,60,120,n.a,n.b)),ln(t,yt("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),ii(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else ln(t,yt("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),ii(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(yt("M-22 26 L22 26 L0 64Z")),ln(t,yt("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function wu(n,e,t){return Pn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(ln(i,yt("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),ii(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(ln(i,yt("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;ln(i,yt(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),ii(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(yt(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(yt(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function Bg(){return Pn("hand",90,100,n=>{n.translate(45,14);let e=yt("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");ln(n,e,ii(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function xu(n){return Pn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function Hg(){return Pn("foot",80,40,n=>{n.translate(26,6),ln(n,yt("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function zg(n="round"){return Pn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var Fu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function kg(n,e){return Pn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),Fu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function Gg(n,e,t){return Pn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=yt("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");ln(i,s,ii(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),ln(i,s,e);let r=yt("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");ln(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),ln(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=yt("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");ln(i,s,ii(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),ln(i,l,"#E9E9EF")})})})}var Ru=(n,e={})=>new et({map:n,alphaTest:.5,alphaToCoverage:!0,side:It,...e}),Cu=new Map,fh=new Map,Vg=[];function Wg(n){if(fh.has(n))return fh.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new qn(t);return r.colorSpace=Gt,r.anisotropy=8,fh.set(n,r),r}function Cn(n,e,t,i,s,r=0,o,a=!1){let l=new Re(e*Fn,t*Fn);l.translate((e/2-i)*Fn,(s-t/2)*Fn,0);let c=Ru(n);o.push(c);let h=new k(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=Ru(Wg(n),{color:"#FFE9C8"});Vg.push(u);let f=new k(l,u);f.position.z=-.045-r,h.add(f)}let d=Cu.get(n);return d||(d=new es({depthPacking:gr,map:n,alphaTest:.5,side:It}),Cu.set(n,d)),h.customDepthMaterial=d,h}function Xg(){return Pn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function qg(){return Pn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function ph(n={}){let e=Ng[n.outfit||"hero"],t=n.outfit||"hero",i=new se,s=[],r=new se;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new se;_.position.set(p*34*Fn,o*Fn,v);let y=new se;y.position.y=-142*Fn,_.add(Cn(xu(1),50,160,25,6,0,s)),y.add(Cn(xu(1),50,160,25,6,0,s));let D=Cn(Hg(),80,40,26,6,.001,s);D.position.y=-142*Fn,p<0&&(D.scale.x=-1),y.add(D),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=Cn(Og(e,t),300,320,150,20,0,s);h.position.y=(a+4)*Fn,r.add(h);for(let[m,p,v]of[["L",-1,-.006],["R",1,.006]]){let _=new se;_.position.set(p*(e.kind==="dress"?66:84)*Fn,(a-24)*Fn,v);let y=new se;y.position.y=-124*Fn,_.add(Cn(wu(e,t,"u"),90,170,45,10,0,s)),y.add(Cn(wu(e,t,"f"),90,170,45,10,.001,s));let D=Cn(Bg(),90,100,45,14,.002,s);D.position.y=-128*Fn,D.scale.set(p>0?-.8:.8,.8,1),y.add(D),_.add(y),r.add(_),c[m]={u:_,f:y,hand:D}}let d=new se;if(d.position.set(0,(a+104)*Fn,.02),r.add(d),n.hair){let m=Cn(Gg(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Cn(zg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Cn(Pn("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let v=n.hairc||"#4a2c1a";p.fillStyle=v,p.fill(yt(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Cn(Pn("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(v=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(v*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(Fu)){let p=Cn(kg(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",d.add(p),u[m]=p}if(n.glasses){let m=Cn(Pn("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Cn(n.hat(Pn),300,300,150,150,.006,s);d.add(m)}let f=new k(new Re(1,.4),new et({map:Xg(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new k(new Re(2.1,3),new et({map:qg(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:Tn,side:It})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in u)u[p].visible=p===m},cheer(m,p=0,v=1){let _=m*6+p,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*p,c.L.f.rotation.z=-v[1]*p,c.R.u.rotation.z=_[0]*p,c.R.f.rotation.z=_[1]*p,l.L.th.rotation.z=-y[0]*p,l.L.shin.rotation.z=-y[1]*p,l.R.th.rotation.z=D[0]*p,l.R.shin.rotation.z=D[1]*p,d.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,p=1,v=1){let _=m*6.4*p,y=Math.sin(_),D=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,p,v=0,_=1){i.position.set(m,v,p),i.scale.setScalar(_)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return E.pose(),E}function fe(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new qn(i);return r.colorSpace=Gt,r.anisotropy=8,r}var ws=(n,e={})=>new Le({color:n,roughness:.88,metalness:0,...e});function w(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new k(new wn(n,e,t),typeof i=="string"?ws(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function lt(n,e,t=1){let i=fe(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Zr(new cr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:Tn}));return s.scale.set(e,e,1),s}var Pu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function Yg(n,e,t,i,s,r=.42){let o=He(n),a=256*e,l=300*t,c,h=fe(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,f,28,10);for(let f=0;f<t;f++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,f*300+292,a,8)}),d=fe(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,p=g*300+60,v=144,_=196,y=o()<r,D=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,v+18,_+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+_+9,v+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+_+6,v+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,v,_),y||!s){let C=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=C,f.fillRect(m,p,26,_),f.fillRect(m+v-26,p,26,_)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+_),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+_),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+v/2-3,p,6,_),f.fillRect(m,p+_*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,p,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,p,6,_),u.fillRect(m,p+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Gt,{map:h,emissiveMap:d}}function ns(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=He(n),u=new se,f=o*2.9+3.6,g=c||Pu[Math.floor(d()*Pu.length)],E=Math.max(2,Math.round(r/2.1)),m=Yg(n,E,o,g,l,e.lit??.42),p=new Le({map:m.map,emissiveMap:m.emissiveMap,emissive:new de(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=ws(g),_=[a>0?p:v,a>0?v:p,ws("#2c2730"),v,v,v],y=new k(new wn(s,o*2.9,r),_);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(w(s+.5,.5,r+.5,"#3d3540",t,f+.25,i)),u.add(w(s+.3,.35,r+.3,g,t,3.6,i));let D=t+a*(s/2+.01);if(h){let C=fe(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),b=new k(new wn(.18,1.05,r-.3),[new Le({map:C,emissiveMap:C,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),new Le({map:C,emissiveMap:C,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),ws("#222"),ws("#222"),ws("#222"),ws("#222")]);b.position.set(D+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,u.add(b);let F=fe(512,256,P=>{let H=P.createLinearGradient(0,0,0,256);H.addColorStop(0,h.win||"#F4C783"),H.addColorStop(1,"#D59A5C"),P.fillStyle=H,P.fillRect(0,0,512,256);let z=He(n+9);for(let q=0;q<26;q++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(z()*6)],P.fillRect(z()*490,30+Math.floor(z()*3)*76,12+z()*26,52);for(let q of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,q,512,7)}),S=new Le({map:F,emissiveMap:F,emissive:new de(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(w(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let A=new k(new Re(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(D+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(w(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=fe(512,128,z=>{for(let q=0;q<12;q++)z.fillStyle=q%2?h.awning:"#F4EEDF",z.fillRect(q*512/12,0,42.666666666666664,128)}),H=new k(new Re(r-.3,1.3),new Le({map:P,side:It,roughness:.9}));H.rotation.y=a*Math.PI/2,H.rotation.order="YXZ",H.rotation.x=-1,H.position.set(D+a*.55,2.56,i),H.castShadow=!0,u.add(H)}if(l){let P=new Qe(h.light||"#FFC88A",3.2,7,1.8);P.position.set(D+a*1.7,2.1,i),u.add(P)}}return u}function Iu(n,e,t){let i=new k(new Re(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function Zg(n="#A99D90"){let e=fe(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=He(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=dn,e}function Ta(n,e){let t=fe(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=He(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=dn,t.repeat.set(1,12);let i=Iu(9,240,new Le({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=Zg(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=Iu(4.4,240,new Le({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(w(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function ba(n,e,t,i,s=!0,r=5.5){let o=new se;o.add(w(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(w(.26,.3,.26,"#15151b",e,.15,t));let a=w(.26,.4,.26,new Le({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(w(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=lt("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new Qe("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var Du={};function cn(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new se;o.add(w(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=Du[a]||(Du[a]=fe(512,512,c=>{let h=He(r%3+3),d=(u,f,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,v=g*(.86+.14*Math.sin(p*5+u)+h()*.05);c.lineTo(u+Math.cos(p)*v,f+Math.sin(p)*v)}c.fill()};for(let[u,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,f,g,s[0]);for(let[u,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,f,g,s[1]);for(let[u,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,f,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new k(new Re(3.6*i,3.6*i),new Le({map:l,alphaTest:.5,side:It,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new es({depthPacking:gr,map:l,alphaTest:.5,side:It}),o.add(h)}return n.add(o),o}function si(n,e,t,i,s,r,o=3,a=0){let l=fe(1600,900,h=>{h.clearRect(0,0,1600,900);let d=He(o);for(let u=0;u<3;u++)for(let f=-40;f<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(f,900-E,g,E),d()<.2&&h.fillRect(f+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new k(new Re(t,i),new et({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Ft(n,e,t,i,s){let r=fe(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new k(new Re(t,i),new et({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var x=(n,e={})=>new Le({color:n,roughness:.85,...e});function Fe(n,e,t,i={}){let s=new k(new Re(e,t),new et({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:It,color:i.color||"#fff",blending:i.add?Tn:Zi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new es({depthPacking:gr,map:n,alphaTest:.5,side:It})),s}function En(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var mh={value:0};function wa(n="#8E3D30",e=4,t=3){let i=fe(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=He(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=dn,i.repeat.set(e,t),i}function Lu(n="#A59383",e=12,t=12){let i=fe(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=He(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=dn,i.repeat.set(e,t),i}var Uu=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function $g(n,e){let[t,i,s,r]=Uu[n];return fe(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function gh(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=He(o),l={};for(let c of e){let h=Math.floor(a()*Uu.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=$g(d,h),f=new et({map:u,alphaTest:.5,side:It,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=mh,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new da(new Re(i*.5,i),f,l[c].length),E=new Jt;l[c].forEach((m,p)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(p,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function In(n,e=2600,t=300,i=1){let s=He(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,f=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(f)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(f)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Kt;a.setAttribute("position",new rn(r,3)),a.setAttribute("color",new rn(o,3));let l=fe(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new hr({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new $r(a,c);return h.frustumCulled=!1,n.add(h),h}function Li(n,e,t="#6D4A33"){let i=fe(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=He(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=dn,i.repeat.set(n/5,e/5);let s=new k(new Re(n,e),new Le({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function gi(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=fe(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=dn,r.repeat.set(n/s*4,e/s*4);let o=new k(new Re(n,e),new Le({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function xs(n,e,t="#FFD9A0",i=.22){let s=fe(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new k(new Re(n,e),new et({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:Tn,side:It,fog:!1}))}function Eh(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new se,a=new k(new qe(.3,.22,.5,20),x(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=fe(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Fe(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function yh(n,e,t,i="#2A1E18"){let s=new se;s.add(w(n+.08,e+.08,.04,i,0,0,0));let r=fe(Math.round(n*400),Math.round(e*400),t),o=new k(new Re(n,e),new Le({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function zt(n,e,t,i=1.2){return new k(new Re(n,e),new Le({color:"#000",emissive:t,emissiveIntensity:i}))}function ot(n,e,t,i=10,s=60){let r=new mr(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function jr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Oe(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Ft(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),si(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=wa(t,2,2),a=()=>new Le({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,E,m])=>n.add(w(E,m,.3,a(),f,g,-3)));for(let[f,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(w(E,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(w(18,5.2,.3,a(),0,2.6,-3));n.add(Li(18,12,s));let l=yh(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Eh(4.4,0,-2.4,1.1)),n.add(Eh(-5,0,-2.4,.9,"#36AEA2")),n.add(new Ue(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=ot(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new Qe("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new k(new qe(.18,.3,.34,24),new Le({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(w(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=lt("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var Nu=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function eo(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Oe(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Ft(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),si(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),Ta(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(ns(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:Nu[(a+i)%5]})),n.add(ns(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:Nu[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)cn(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),ba(n,-5,-3-l*12,1,t||r);n.add(new Ue(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(ot(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},at=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},vt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},Ar={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),at(n,120,330,34,100,14,"#B5784A"),at(n,340,330,34,100,14,"#B5784A"),at(n,180,340,34,90,14,"#C98E5E"),at(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),at(n,120,330,34,100,14,"#B5906A"),at(n,340,330,34,100,14,"#B5906A"),at(n,180,340,34,90,14,"#C9A07E"),at(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),vt(n,[[96,120],[110,30],[160,100]],"#E9853A"),vt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),vt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),vt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),vt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),at(n,92,200,26,70,12,"#A87A44"),at(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),vt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),vt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),vt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),vt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),vt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])at(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),vt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{at(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),vt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),at(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),vt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),vt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])at(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),vt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),vt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])at(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),vt(n,[[160,70],[150,30],[196,70]],"#E890A4"),vt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),at(n,40,260,70,240,30,"#2E2E38"),at(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{at(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])at(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),at(n,160,20,12,50,6,"#8A5A2A"),at(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])at(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),vt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),vt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),vt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])at(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])at(n,e,330,26,180,12,"#9A6238");at(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),vt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])at(n,e,360,34,190,14,"#4A3222");at(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)vt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])at(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),vt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),vt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])at(n,e,320,34,230,14,"#7A4A2E");at(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),at(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),vt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},xa={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(xa,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in xa)Ar[n][3]=xa[n][0],Ar[n][4]=xa[n][1];Ar.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),vt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];Ar.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)vt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),vt(n,[[100,80],[90,30],[130,74]],"#F2913A"),vt(n,[[160,76],[170,26],[190,80]],"#F2913A"),at(n,160,380,40,56,18,"#6AB05A"),at(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];Ar.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])at(n,e,320,34,230,14,"#E4DED2");at(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),at(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),vt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Ra={},Ou=n=>Ra["e"+n]||(Ra["e"+n]=fe(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function Bu(n,e={}){let[t,i,s,r,o,a]=Ar[n],l=Ra[n]||(Ra[n]=fe(t,i,s)),c=a*i/t,h=new se,d=new se;h.add(d);let u=Fe(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let f=new k(new Re(o*a,o*a*.5),new et({map:Ou("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(f);let g=new k(new Hn(a*.45,24),new et({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){f.material.map=Ou(m)},face(m){let p=new I;h.getWorldPosition(p),d.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){u.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,v=0,_=1){return h.position.set(m,v,p),h.scale.setScalar(_),E}};return E}var is=(n,e,t=200,i=200,s)=>{let r=new k(new Re(t,i),s?new Le({map:s,roughness:.95}):x(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},vh=(n,e=1)=>{n.add(new Ue("#E9EEFF","#B08A6A",1.05*e)),n.add(ot("#FFD29A",3*e,[-14,16,10],20,70))},Te={sala:(n,e)=>jr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{jr(n,{wall:"#9A4632",night:e.night}),n.add(w(2.4,.45,3.2,x("#6B4A33"),-1.7,.25,-1.4)),n.add(w(2.3,.3,3,x("#F3EEE4"),-1.7,.6,-1.4)),n.add(w(2.38,.22,2,x("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(w(.8,.22,.5,x("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Oe(e.dusk?"#E8A880":"#F2D8B8",.02),Ft(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),si(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),is(n,"#7A9A50");for(let t=0;t<12;t++)cn(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(w(2.4,.1,.5,x("#8E6242"),-3.4,.5,-2.2)),n.add(w(2.4,.5,.08,x("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)ba(n,-6+t*6,-4,1,!!e.dusk);n.add(new Ue("#E9EEFF","#B08A6A",1)),n.add(ot(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{eo(n,{seed:e.seed||2}),is(n,"",60,60,Lu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Oe("#F2D8B8",.012),Ft(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),is(n,"#8AAA58");let t=new se;t.add(w(6,4,5,x("#B5402E"),0,2,0));let i=new k(new qe(.01,4.4,2.2,4),x("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(w(2,2.6,.1,x("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(w(.1,1,.1,x("#C9A06A"),-10+s*1.3,.5,-4));n.add(w(20,.08,.06,x("#C9A06A"),0,.9,-4)),n.add(w(20,.08,.06,x("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)cn(n,6+s*3,-16-s%2*3,1.6,void 0,s);vh(n)},sabana:(n,e)=>{n.fog=new Oe("#F2C890",.01),Ft(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=lt("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),is(n,"#C8A858");for(let i=0;i<6;i++){let s=new se;s.add(w(.3,3,.3,x("#5A3A22"),0,1.5,0));let r=new k(new qe(2.6,2.2,.6,12),x("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Ue("#FFE8C8","#8A6A3A",1)),n.add(ot("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Oe("#F2E2C0",.012),Ft(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),is(n,"#B8B070");for(let t=0;t<14;t++){let i=new k(new Et(.55,16,10,0,Math.PI*2,0,Math.PI/2),x("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}vh(n)},mar:(n,e)=>{Jg(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Oe(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=is(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=He(5);for(let r=0;r<30;r++){let o=new k(new An(.2+s()*.3,.8+s()*1.4,7),x(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=xs(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=lt("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Ue("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(ot("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Oe("#162238",.04),n.add(gi(16,20,"#2A3348","#232B3E",6)),n.add(w(16,6,.3,x("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=zt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=zt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=fe(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new k(new Re(2.5,1.3),new et({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Ue("#6E86C8","#101420",.8)),n.add(ot("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Oe("#1E2236",.02),is(n,"#2F4A7A"),n.add(w(30,10,.3,x("#E8E2D2"),0,5,-8));let t=fe(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Fe(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new k(new jt(4,.35,10,48),x("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new Qe("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Ue("#E8E8FF","#3A3A50",.9)),n.add(ot("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Oe("#E6E2D6",.03),n.add(gi(9,40));for(let i of[-1,1]){n.add(w(.7,4.2,30,x("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(w(1.2,.05,30,x("#DDE0E4"),i*3,.5+s*.9,-10))}let t=He(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(w(.3,.3,.4,x(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=zt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Ue("#FFFFFF","#B9B3A6",1)),n.add(ot("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{Te.parque(n,{});for(let t=0;t<12;t++)n.add(w(.08,1.4,.08,x("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(w(8,.08,.08,x("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{jr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Oe("#8A8070",.03),Ft(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),is(n,"#8A8070");let t=He(8);for(let i=0;i<40;i++){let s=w(.4+t()*1.6,.3+t()*1,.4+t()*1.4,x(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}vh(n,.8)}};function Jg(n,e){n.background=new de(e)}function Qg(n,e={}){let t=ph({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var Kg=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function _h(n,e,t){let i=Tu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(Te[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?Qg(s,a):(()=>{let c=Bu(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{mh.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Sa(t.cam.map(([g,E])=>[g,E]),l),u=Sa(t.cam.map(([g,,E])=>[g,E]),l);bu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let p=g.move(l);E.root.position.set(p[0],p[1],p[2])}E.face(c),E.eye(Kg(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,v])=>l>=p&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Sa(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function Hu(n,e,t,i="#E8667F"){n.add(w(2.2,.45,3,x("#6B4A33"),e,.25,t)),n.add(w(2.1,.3,2.8,x("#F3EEE4"),e,.6,t)),n.add(w(2.18,.2,1.9,x(i,{roughness:.9}),e,.8,t+.5)),n.add(w(2.2,1.3,.16,x("#5A3C28"),e,.9,t-1.55)),n.add(w(.8,.2,.45,x("#FFFFFF"),e-.5,.82,t-1.1)),n.add(w(.8,.2,.45,x("#F6E6C8"),e+.5,.82,t-1.1))}function zu(n,e=Math.PI/2){n.root.rotation.z=e}function ku(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return fe(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,f,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,f,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,f)=>c.fillText(u,t/2,i*.42+(f-(d.length-1)/2)*o*1.15))})}function Gu(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return fe(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function Ca(n,e="#F2C14E",t=140,i=256,s=200){return fe(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}var to=[0,2.42,6.72,9.76,13.72,16.56,21.42,26.13,35.44,37.6,43.14,53.22,56.76,63.62,64.82,71,78.32,79.46,82.32,92.6,98.18,99.44,105.12,114.18,117.44,124.78,126.06,130.6,140.96,142.32,150.14,161.6,171.16,180.7,185.36,189.9,200.04,208.22,209.7,214.22,221.06,222.22,228.84,233.26,237.3,238.66,242.06,249.7,253.38,256.84,261.94,266.56,272.72,277.68,284.26,289.72,290.94,296.78,304.96,312.08,320.16,325.34,339.74,348.32,353.34,354.78,360.08,370.26,373.8,377.8,387.52,393.88,400.1,404.46,418.72,423.76,425.24,430.64,437.68,441.48,445.46,453.58,459.74,463.46,467.34,468.82,480.12,486.52,487.86,492.6,501.04,513.32,524.7,528.48,537.16,542.32,544.88,550.82,557.42,563.62,569.34,576.8,583.36,588.42,592.84,600.26],jg=[["es",0],["viernes",.26],["ultima",1.18],["clase",1.52],["y",2.42],["en",2.6],["tu",2.7],["mochila",2.82],["sin",3.46],["que",3.68],["te",3.82],["des",3.96],["cuenta",4.12],["alguien",4.86],["ha",5.16],["metido",5.34],["un",5.7],["sobre",5.88],["lo",6.72],["abres",6.92],["en",7.16],["casa",7.34],["es",8.18],["una",8.36],["invitacion",8.52],["mi",9.76],["cumpleanos",9.88],["sabado",11.02],["a",11.3],["las",11.72],["seis",11.82],["te",12.58],["espero",12.7],["y",13.72],["la",13.84],["firma",13.94],["es",14.98],["de",15.2],["tu",15.42],["crush",15.58],["el",16.56],["corazon",16.68],["te",17.06],["da",17.32],["un",17.46],["salto",17.58],["te",18.46],["invita",18.56],["a",18.94],["su",19.06],["cumpleanos",19.16],["a",20.32],["ti",20.56],["ahora",21.42],["imagina",21.72],["que",22.18],["llegas",22.34],["a",22.7],["la",22.8],["fiesta",22.9],["y",23.28],["eres",24.22],["el",24.48],["unico",24.78],["invitado",25.06],["y",26.13],["antes",26.42],["de",26.64],["ver",26.82],["que",26.98],["pasa",27.12],["si",27.78],["te",27.9],["gustan",28.02],["estas",28.34],["historias",28.54],["de",29.12],["y",29.64],["si",29.8],["suscribete",30.34],["al",31],["canal",31.16],["y",31.4],["activa",31.58],["la",31.94],["campanita",32.02],["y",32.98],["ahora",33.2],["si",33.42],["vamos",34.12],["alla",34.38],["sabado",35.44],["diez",36.2],["de",36.48],["la",36.64],["manana",36.74],["llevas",37.6],["una",37.88],["hora",38.08],["delante",38.3],["del",38.74],["armario",38.94],["te",39.74],["pruebas",39.86],["cinco",40.22],["camisetas",40.56],["ninguna",41.52],["te",41.92],["convence",42.2],["y",43.14],["luego",43.26],["esta",43.5],["el",43.84],["regalo",44],["que",44.96],["le",45.04],["regalas",45.18],["a",45.64],["alguien",45.74],["que",45.96],["te",46.16],["gusta",46.28],["sin",46.6],["que",47.02],["se",47.2],["note",47.38],["que",47.6],["te",47.8],["gusta",47.92],["un",48.82],["libro",49.04],["demasiado",49.7],["serio",50.16],["bombones",51.06],["demasiado",51.98],["romantico",52.56],["al",53.22],["final",53.9],["eliges",54.16],["unos",54.56],["auriculares",54.84],["con",55.48],["orejas",55.78],["de",56.1],["gato",56.28],["porque",56.76],["una",57.14],["vez",57.36],["en",57.84],["clase",58],["dijo",58.7],["que",58.98],["le",59.16],["encantaban",59.28],["los",59.88],["gatos",60.06],["y",60.86],["tu",60.96],["te",61.12],["acuerdas",61.3],["de",61.74],["todo",61.94],["lo",62.22],["que",62.44],["dice",62.56],["cuatro",63.62],["de",63.94],["la",64.08],["tarde",64.18],["le",64.82],["escribes",65],["a",65.38],["tu",65.54],["mejor",65.62],["amigo",65.88],["vas",66.74],["al",66.88],["cumple",67.06],["el",67.78],["contesta",67.98],["que",68.96],["cumple",69.08],["que",70.04],["raro",70.18],["preguntas",71],["en",71.52],["el",71.66],["grupo",71.76],["de",71.96],["clase",72.14],["nadie",72.84],["dice",73.22],["nada",73.58],["bueno",74.38],["piensas",74.94],["seguro",75.62],["que",75.92],["lo",76.14],["ha",76.26],["organizado",76.36],["por",76.9],["privado",77.08],["cinco",78.32],["y",78.64],["media",78.76],["vas",79.46],["andando",79.64],["hacia",80.04],["su",80.24],["casa",80.46],["con",80.68],["el",80.9],["regalo",81.02],["debajo",81.34],["del",81.74],["brazo",81.96],["y",82.32],["vas",82.8],["ensayando",82.96],["feliz",84.1],["cumpleanos",84.46],["no",85.6],["demasiado",86.14],["serio",86.62],["felicidades",87.54],["demasiado",88.7],["alegre",89.3],["hola",90.1],["feliz",90.7],["cumple",90.9],["mejor",91.68],["lo",92.6],["repites",92.74],["tantas",93.14],["veces",93.62],["en",93.82],["voz",94.14],["alta",94.28],["que",94.58],["una",94.82],["senora",95],["que",95.34],["pasea",95.54],["a",95.94],["su",96],["perro",96.16],["se",96.42],["te",96.6],["queda",96.7],["mirando",96.96],["seis",98.18],["en",98.56],["punto",98.7],["llamas",99.44],["al",99.84],["timbre",100.02],["abre",100.72],["su",100.96],["madre",101.14],["sonrie",101.86],["pasa",102.72],["pasa",103.22],["eres",103.82],["el",104],["primero",104.18],["el",105.12],["salon",105.38],["esta",105.74],["precioso",106.06],["globos",107.24],["guirnaldas",108.18],["una",109.2],["tarta",109.36],["enorme",109.68],["una",110.28],["mesa",110.86],["llena",111.14],["de",111.54],["patatas",111.68],["sandwiches",112.5],["y",113.06],["refrescos",113.18],["y",114.18],["sillas",114.3],["muchas",115.04],["sillas",115.52],["unas",116.38],["veinte",116.6],["y",117.44],["ella",117.64],["en",118.24],["el",118.3],["sofa",118.42],["con",119.06],["un",119.18],["vestido",119.34],["nuevo",119.76],["mirando",120.08],["el",120.76],["movil",120.92],["te",121.68],["ve",121.86],["sonrie",122.46],["has",123.42],["venido",123.62],["seis",124.78],["y",125.22],["media",125.32],["seguis",126.06],["siendo",126.36],["dos",126.64],["su",127.48],["madre",127.6],["se",127.82],["asoma",128.04],["desde",128.3],["la",128.5],["cocina",128.7],["vuelve",129.5],["a",129.82],["entrar",129.92],["ella",130.6],["mira",130.86],["el",131.06],["movil",131.26],["otra",131.52],["vez",131.72],["y",132.06],["otra",132.56],["y",133.3],["tu",133.42],["intentas",133.58],["hacer",134.12],["como",134.38],["si",134.64],["todo",134.8],["fuera",135.06],["normal",135.34],["hablas",136.24],["del",136.5],["tiempo",136.7],["del",137.5],["instituto",137.6],["de",138.56],["la",138.64],["tarta",138.76],["de",139.06],["cualquier",139.6],["cosa",139.8],["siete",140.96],["de",141.4],["la",141.58],["tarde",141.7],["no",142.32],["ha",142.58],["llegado",142.7],["nadie",143.04],["mas",143.42],["ella",144.22],["deja",144.44],["el",144.68],["movil",144.86],["en",145.1],["la",145.24],["mesa",145.36],["y",145.62],["dice",145.84],["muy",146.56],["bajito",146.68],["no",147.74],["va",147.86],["a",148.02],["venir",148.1],["nadie",148.28],["mas",148.58],["verdad",149.14],["y",150.14],["tu",150.26],["sientes",150.4],["que",150.78],["todo",151.04],["el",151.36],["mundo",151.58],["en",152.14],["algun",152.34],["sitio",152.6],["se",153.44],["esta",153.58],["riendo",153.84],["de",154.22],["esto",154.46],["que",155.18],["el",155.32],["lunes",155.52],["toda",155.68],["la",156.1],["clase",156.32],["lo",156.64],["sabra",156.8],["que",157.48],["es",157.66],["lo",157.84],["mas",158.02],["vergonzoso",158.3],["que",158.98],["le",159.24],["ha",159.36],["pasado",159.46],["nunca",159.76],["a",160.28],["nadie",160.56],["pero",161.6],["aqui",162],["la",162.24],["ciencia",162.4],["tiene",162.8],["algo",163.14],["que",163.44],["decirte",163.6],["en",164.12],["el",164.8],["ano",164.9],["2000",165.08],["el",165.82],["psicologo",165.92],["thomas",166.34],["gilovich",166.82],["de",167.5],["la",167.58],["universidad",167.68],["cornell",168.24],["hizo",168.98],["un",169.2],["experimento",169.34],["muy",170.04],["curioso",170.3],["pidio",171.16],["a",171.48],["unos",171.6],["estudiantes",171.78],["que",172.4],["se",172.66],["pusieran",172.78],["una",173.2],["camiseta",173.42],["muy",173.92],["vergonzosa",174.32],["con",175.28],["la",175.44],["cara",175.58],["de",175.8],["un",175.98],["cantante",176.1],["pasado",176.54],["de",176.9],["moda",177.14],["y",177.62],["que",177.84],["entraran",177.94],["asi",178.42],["en",178.66],["una",178.8],["sala",178.94],["llena",179.22],["de",179.64],["gente",179.76],["los",180.7],["estudiantes",180.9],["creian",181.42],["que",181.92],["casi",182.14],["la",182.44],["mitad",182.64],["de",182.82],["la",183.06],["sala",183.14],["se",183.42],["fijaria",183.62],["en",184.1],["la",184.2],["camiseta",184.3],["cuantos",185.36],["se",185.78],["fijaron",185.96],["de",186.32],["verdad",186.46],["mas",187.34],["o",187.66],["menos",187.78],["uno",187.98],["de",188.5],["cada",188.7],["cuatro",188.9],["lo",189.9],["llamo",190.1],["el",190.44],["efecto",190.6],["foco",190.92],["creemos",191.5],["que",192.44],["todo",192.72],["el",193.12],["mundo",193.36],["nos",193.62],["mira",193.9],["pero",194.56],["casi",194.86],["nadie",195.12],["se",195.44],["da",195.64],["cuenta",195.76],["cada",196.52],["uno",196.7],["esta",196.98],["demasiado",197.24],["ocupado",197.68],["pensando",198.38],["en",198.82],["si",199.12],["mismo",199.22],["asi",200.04],["que",200.38],["de",200.88],["todos",201.06],["los",201.36],["que",201.64],["no",201.84],["han",202],["venido",202.16],["cuantos",202.92],["van",203.22],["a",203.38],["estar",203.48],["pensando",203.62],["en",204.08],["esto",204.34],["el",204.54],["lunes",204.7],["seguramente",205.76],["casi",206.32],["ninguno",206.68],["siete",208.22],["y",208.52],["cuarto",208.76],["ella",209.7],["se",209.96],["pone",210.16],["a",210.36],["recoger",210.48],["los",210.88],["vasos",211.1],["sin",211.46],["usar",211.64],["esta",212.36],["a",212.7],["punto",212.94],["de",213.08],["llorar",213.36],["y",214.22],["tu",214.36],["tienes",214.5],["dos",214.86],["opciones",215.1],["puedes",216.14],["decir",216.4],["bueno",217.3],["yo",217.96],["me",218.04],["voy",218.18],["que",218.56],["es",218.62],["tarde",218.82],["o",219.54],["puedes",219.72],["quedarte",220.08],["te",221.06],["quedas",221.36],["coges",222.22],["un",222.6],["globo",222.78],["le",223.6],["pintas",223.74],["una",224.1],["cara",224.3],["con",224.54],["un",224.78],["rotulador",224.92],["le",225.9],["pones",226.08],["un",226.34],["gorro",226.58],["de",226.88],["fiesta",227],["y",227.8],["dices",228],["este",228.84],["es",229.16],["paco",229.42],["ha",230.12],["venido",230.22],["a",230.52],["tu",230.62],["cumpleanos",230.72],["y",231.68],["tiene",231.88],["hambre",232.2],["ella",233.26],["se",233.52],["rie",233.74],["por",234.42],["primera",234.6],["vez",235],["en",235.3],["toda",235.52],["la",235.76],["tarde",235.98],["ocho",237.3],["de",237.54],["la",237.72],["tarde",237.82],["hay",238.66],["veinte",238.92],["sillas",239.32],["asi",240.22],["que",240.46],["llenais",240.7],["las",241.06],["veinte",241.26],["un",242.06],["globo",242.26],["en",242.6],["cada",242.76],["una",242.98],["con",243.74],["caras",243.92],["con",244.64],["nombres",244.82],["paco",245.72],["lola",246.52],["el",247.3],["profe",247.42],["de",247.72],["mates",247.78],["con",248.04],["gafas",248.4],["y",248.82],["cara",248.94],["de",249.12],["enfadado",249.24],["cantais",249.7],["el",250.6],["cumpleanos",250.78],["feliz",251.34],["con",251.64],["un",251.96],["coro",252.12],["de",252.52],["globos",252.6],["ella",253.38],["sopla",253.76],["las",254.2],["velas",254.42],["y",255.1],["pide",255.32],["un",255.6],["deseo",255.78],["luego",256.84],["abre",257.1],["tu",257.48],["regalo",257.64],["los",258.52],["auriculares",258.64],["de",259.26],["gato",259.52],["se",260.28],["queda",260.54],["mirandolos",260.76],["te",261.94],["acordabas",262.06],["de",262.58],["lo",262.72],["de",262.8],["los",262.92],["gatos",263.02],["te",263.86],["pones",264.1],["rojo",264.38],["ella",265.32],["tambien",265.54],["entonces",266.56],["suena",266.98],["su",267.48],["movil",267.66],["ella",268.38],["da",268.62],["un",268.8],["salto",268.94],["sera",269.8],["alguien",270.08],["que",270.34],["por",270.52],["fin",270.68],["viene",270.9],["lo",271.7],["mira",271.98],["es",272.72],["un",272.88],["mensaje",273.06],["de",273.52],["su",273.66],["abuela",273.8],["felicidades",274.84],["carino",275.4],["que",276.3],["tal",276.4],["la",276.6],["fiesta",276.76],["ella",277.68],["te",277.98],["mira",278.18],["tu",278.4],["la",279.02],["miras",279.22],["y",279.82],["contesta",280.06],["muy",281.16],["bien",281.28],["abuela",281.56],["ha",282.24],["venido",282.4],["muchisima",282.68],["gente",283.44],["y",284.26],["le",284.46],["manda",284.54],["una",284.88],["foto",285.08],["tu",286],["rodeado",286.56],["de",286.96],["veinte",287.18],["globos",287.58],["con",288.08],["caras",288.26],["ocho",289.72],["y",289.98],["media",290.12],["os",290.94],["sentais",291.14],["en",291.48],["el",291.68],["suelo",291.8],["comiendo",292.34],["tarta",292.78],["con",293.14],["los",293.38],["dedos",293.54],["y",294.32],["empezais",294.4],["a",294.84],["hablar",295],["pero",295.7],["de",295.88],["verdad",296.04],["de",296.78],["que",297],["quereis",297.12],["ser",297.44],["de",297.66],["mayores",297.8],["de",298.62],["lo",298.8],["que",298.9],["os",299.02],["da",299.14],["miedo",299.26],["de",299.98],["la",300.14],["vez",300.24],["que",300.42],["ella",300.6],["se",300.82],["cayo",301.02],["en",301.32],["la",301.4],["funcion",301.5],["de",301.8],["fin",302.1],["de",302.24],["curso",302.36],["y",302.66],["todo",303],["el",303.32],["colegio",303.56],["se",303.98],["rio",304.14],["ella",304.96],["te",305.18],["pregunta",305.34],["cual",305.66],["es",306.08],["tu",306.26],["recuerdo",306.38],["mas",306.82],["bonito",307.2],["tu",307.54],["le",308.24],["preguntas",308.4],["adonde",308.76],["viajaria",309.207],["si",309.653],["pudiera",310.1],["ir",310.48],["a",310.68],["cualquier",310.76],["sitio",311.08],["ella",312.08],["dice",312.24],["que",312.54],["a",312.74],["japon",312.84],["a",313.58],["ver",313.67],["los",313.76],["cerezos",314.06],["en",314.42],["flor",314.64],["tu",315.38],["dices",315.54],["que",315.84],["tu",316.08],["tambien",316.28],["aunque",317.1],["nunca",317.34],["lo",317.64],["habias",317.88],["pensado",318.1],["hasta",318.62],["ese",318.86],["momento",319.1],["y",320.16],["pasa",320.32],["algo",320.62],["extrano",320.94],["cuanto",322.08],["mas",322.32],["hablais",322.62],["mas",323.58],["cerca",323.74],["os",324.12],["sentis",324.38],["eso",325.34],["tambien",325.62],["lo",326.14],["ha",326.3],["estudiado",326.38],["la",326.78],["ciencia",326.94],["en",327.92],["1997",328.06],["el",330],["psicologo",330.04],["arthur",330.52],["aron",330.96],["junto",331.46],["a",331.98],["desconocidos",332.06],["por",332.68],["parejas",332.94],["y",333.36],["les",333.68],["dio",333.84],["una",334.04],["lista",334.24],["de",334.54],["preguntas",334.72],["las",335.66],["primeras",335.86],["eran",336.26],["faciles",336.56],["las",337.16],["ultimas",337.64],["muy",338.16],["personales",338.8],["en",339.74],["solo",339.94],["cuarenta",340.18],["y",340.4],["cinco",340.62],["minutos",340.84],["esas",341.84],["parejas",342.12],["se",342.56],["sentian",342.76],["mucho",343.18],["mas",343.64],["cercanas",343.88],["que",344.36],["otras",344.68],["que",344.94],["solo",345.22],["habian",345.5],["charlado",345.84],["de",346.3],["cosas",346.5],["sin",346.74],["importancia",346.98],["abrirse",348.32],["poco",348.8],["a",349.22],["poco",349.42],["y",349.68],["por",350.14],["turnos",350.3],["acerca",351.04],["a",351.5],["las",351.74],["personas",351.86],["nueve",353.34],["de",353.66],["la",353.8],["noche",353.9],["y",354.78],["entonces",354.96],["se",355.38],["te",355.96],["escapa",356.08],["le",357.04],["cuentas",357.2],["algo",357.54],["que",357.82],["nunca",358.02],["le",358.32],["has",358.62],["contado",358.72],["a",359.14],["nadie",359.26],["que",360.08],["cuando",360.24],["empezo",360.46],["el",360.88],["curso",360.98],["ensayabas",361.54],["en",362.04],["casa",362.18],["como",362.42],["saludarla",362.9],["delante",363.96],["del",364.36],["espejo",364.56],["y",364.98],["aun",365.56],["asi",365.7],["el",366.38],["primer",366.48],["dia",366.74],["le",367.36],["dijiste",367.46],["hola",367.88],["dos",368.42],["veces",368.74],["seguidas",369.12],["te",370.26],["quieres",370.4],["morir",370.84],["acabas",371.82],["de",372.32],["quedar",372.46],["fatal",372.72],["pero",373.8],["ella",374.04],["no",374.3],["se",374.7],["rie",374.9],["de",375.18],["ti",375.32],["te",375.94],["mira",376.1],["de",376.3],["otra",376.5],["forma",376.72],["y",377.8],["es",377.94],["que",378.1],["hay",378.24],["otro",378.58],["estudio",378.8],["en",379.82],["1966",380],["el",381.88],["psicologo",381.98],["elliot",382.44],["aronson",382.86],["puso",383.52],["a",384.02],["unos",384.16],["estudiantes",384.34],["a",384.92],["escuchar",385.12],["la",385.56],["grabacion",385.68],["de",386.14],["un",386.32],["concurso",386.44],["un",387.52],["concursante",387.72],["era",388.36],["muy",388.7],["listo",389],["y",389.48],["lo",389.72],["acertaba",389.82],["casi",390.26],["todo",390.56],["pero",391.32],["al",391.5],["final",391.62],["se",392.16],["le",392.26],["caia",392.36],["una",392.66],["taza",392.84],["de",393.12],["cafe",393.3],["encima",393.48],["el",393.88],["resultado",394.62],["ese",395.64],["concursante",395.86],["les",396.58],["cayo",396.82],["todavia",397.12],["mejor",397.52],["que",398.04],["el",398.26],["que",398.36],["no",398.48],["hacia",398.66],["el",398.94],["ridiculo",399.12],["un",400.1],["pequeno",400.3],["fallo",400.6],["nos",401.18],["hace",401.54],["mas",401.8],["humanos",402.12],["mas",403.14],["cercanos",403.34],["y",404.46],["en",404.62],["2018",404.72],["unos",405.96],["investigadores",406.08],["de",406.82],["la",407.04],["universidad",407.12],["de",407.68],["mannheim",407.84],["en",408.32],["alemania",408.6],["descubrieron",409.04],["algo",410],["parecido",410.22],["cuando",411.24],["alguien",411.44],["muestra",411.8],["su",412.26],["lado",412.44],["vulnerable",412.66],["cree",413.68],["que",413.84],["queda",414],["debil",414.24],["o",414.66],["ridiculo",414.9],["pero",415.8],["los",416.06],["demas",416.24],["lo",416.54],["ven",416.88],["como",417.04],["algo",417.32],["valiente",417.62],["tu",418.72],["creiste",418.92],["que",419.38],["habias",419.56],["quedado",419.84],["fatal",420.24],["ella",421.22],["vio",421.5],["que",422.06],["eras",422.24],["sincero",422.46],["nueve",423.76],["y",424.32],["media",424.46],["ella",425.24],["se",425.54],["queda",425.76],["callada",425.98],["un",426.38],["momento",426.56],["luego",427.4],["dice",427.7],["tengo",428.68],["que",428.94],["contarte",429.1],["una",429.56],["cosa",429.74],["coge",430.64],["el",430.92],["movil",431.06],["te",431.88],["ensena",431.96],["los",432.34],["mensajes",432.54],["no",433.6],["hay",433.82],["ningun",433.92],["grupo",434.3],["no",435.06],["hay",435.24],["ninguna",435.34],["invitacion",435.7],["para",436.28],["nadie",436.54],["mas",436.84],["no",437.68],["invite",437.88],["a",438.26],["nadie",438.4],["mas",438.58],["dice",439.4],["solo",440.32],["a",440.6],["ti",440.78],["llevo",441.48],["meses",441.66],["queriendo",442.04],["pedirte",442.5],["que",443],["quedaramos",443.08],["pero",444.04],["no",444.26],["me",444.46],["atrevia",444.6],["asi",445.46],["que",445.72],["pense",445.88],["si",446.74],["lo",446.88],["llamo",447.04],["fiesta",447.24],["no",448.04],["da",448.22],["tanto",448.34],["miedo",448.56],["y",449.32],["si",449.46],["no",449.64],["venias",449.76],["bueno",450.84],["por",451.1],["lo",451.74],["menos",451.88],["no",452.14],["era",452.52],["una",452.66],["cita",452.8],["te",453.58],["quedas",454.02],["helado",454.42],["las",455.44],["veinte",455.58],["sillas",455.9],["los",456.88],["globos",457.02],["la",458.04],["tarta",458.18],["enorme",458.46],["y",459.74],["las",459.88],["sillas",460.06],["las",460.88],["puso",461.12],["mi",461.4],["madre",461.56],["no",462.3],["sabe",462.4],["nada",462.6],["los",463.46],["dos",463.66],["os",463.88],["reis",464.04],["tanto",464.46],["que",464.8],["se",465.04],["os",465.18],["saltan",465.32],["las",465.7],["lagrimas",465.9],["diez",467.34],["de",467.74],["la",467.84],["noche",467.96],["su",468.82],["madre",468.94],["sale",469.18],["de",469.5],["la",469.68],["cocina",469.78],["os",470.66],["mira",470.72],["mira",471.42],["los",471.66],["globos",471.86],["con",472.22],["caras",472.4],["y",473.2],["dice",473.26],["pues",474.06],["si",474.22],["que",474.5],["ha",474.6],["sido",474.7],["una",474.86],["fiesta",475.04],["pequena",475.3],["y",476.28],["vuelve",476.46],["a",476.8],["entrar",476.88],["seguramente",477.78],["lo",478.3],["sabia",478.5],["desde",478.86],["el",479.06],["principio",479.26],["en",480.12],["la",480.46],["puerta",480.58],["ella",480.9],["te",481.44],["da",481.64],["un",481.78],["abrazo",481.9],["corto",482.76],["rapido",483.5],["gracias",484.58],["por",484.82],["quedarte",485.12],["once",486.52],["de",486.82],["la",486.96],["noche",487.06],["estas",487.86],["en",488.24],["tu",488.42],["cuarto",488.52],["mirando",489.22],["el",489.62],["techo",489.78],["y",490.58],["repasas",490.66],["la",491.14],["tarde",491.3],["entera",491.58],["lo",492.6],["del",492.78],["hola",492.98],["dos",493.72],["veces",493.8],["lo",494.68],["de",494.82],["paco",494.94],["el",495.26],["globo",495.4],["y",496.18],["piensas",496.38],["le",497.48],["habre",497.58],["caido",497.86],["bien",498.12],["o",499.02],["solo",499.1],["estaba",499.34],["siendo",499.66],["amable",500],["pues",501.04],["tambien",501.32],["hay",501.72],["ciencia",501.9],["para",502.34],["esto",502.58],["en",503.4],["2018",503.58],["la",504.76],["investigadora",504.84],["erica",505.46],["boothby",505.92],["y",506.4],["su",506.6],["equipo",506.74],["en",507.28],["estados",507.4],["unidos",507.62],["estudiaron",508.08],["que",508.96],["pasa",509.24],["despues",509.54],["de",509.92],["una",510.12],["conversacion",510.28],["entre",510.98],["dos",511.28],["personas",511.52],["que",511.98],["no",512.24],["se",512.44],["conocen",512.6],["casi",513.32],["siempre",513.5],["cada",514.28],["uno",514.46],["pensaba",514.7],["que",515.2],["le",515.38],["habia",515.5],["caido",515.76],["al",516.08],["otro",516.24],["peor",516.46],["de",516.98],["lo",517.12],["que",517.24],["le",517.36],["habia",517.48],["caido",517.74],["en",518.12],["realidad",518.28],["lo",519.26],["llamaron",519.4],["la",519.8],["brecha",520.24],["del",520.64],["agrado",520.86],["le",521.8],["caemos",521.88],["mejor",522.24],["a",522.6],["la",522.74],["gente",522.8],["de",523.14],["lo",523.36],["que",523.48],["creemos",523.6],["y",524.7],["justo",524.86],["en",525.12],["ese",525.32],["momento",525.48],["vibra",526.3],["el",526.58],["movil",526.7],["es",527.52],["ella",527.72],["paco",528.48],["dice",528.76],["que",528.94],["quiere",529.12],["repetir",529.36],["el",530.28],["sabado",530.4],["que",530.68],["viene",530.84],["y",531.58],["una",531.68],["foto",531.9],["el",532.62],["globo",532.82],["con",533.18],["cara",533.4],["con",533.98],["su",534.2],["gorro",534.38],["de",534.64],["fiesta",534.74],["sentado",535.48],["en",535.96],["su",536.1],["cama",536.24],["contestas",537.16],["dile",538.02],["a",538.4],["paco",538.58],["que",538.82],["si",538.94],["pero",539.52],["esta",539.76],["vez",540],["sin",540.46],["sillas",540.64],["vacias",541],["lunes",542.32],["ocho",543.32],["de",543.6],["la",543.78],["manana",543.86],["llegas",544.88],["al",545.26],["instituto",545.38],["con",545.92],["miedo",546.14],["y",547.1],["si",547.24],["alguien",547.34],["sabe",547.62],["lo",547.92],["de",548.06],["la",548.18],["fiesta",548.28],["y",549.16],["si",549.3],["se",549.38],["rien",549.56],["de",549.88],["ella",550.04],["pero",550.82],["no",551.02],["pasa",551.2],["nada",551.42],["nadie",552.2],["dice",552.62],["nada",552.9],["tu",553.74],["mejor",553.84],["amigo",554.1],["solo",554.36],["te",554.68],["pregunta",554.86],["si",555.22],["has",555.52],["hecho",555.68],["los",555.88],["deberes",556.04],["de",556.46],["mates",556.56],["gilovich",557.42],["tenia",557.88],["razon",558.38],["nadie",559.34],["estaba",559.74],["pensando",560.08],["en",560.58],["vosotros",560.82],["bueno",561.84],["casi",562.54],["nadie",562.72],["en",563.62],["el",563.86],["recreo",564],["ella",564.52],["se",564.84],["sienta",565.08],["a",565.44],["tu",565.6],["lado",565.64],["en",565.88],["el",566.02],["banco",566.14],["lleva",566.84],["puestos",567.18],["los",567.66],["auriculares",567.84],["de",568.44],["gato",568.66],["y",569.34],["en",569.58],["la",569.68],["mochila",569.76],["colgado",570.48],["de",570.78],["la",570.98],["cremallera",571.08],["un",571.92],["llavero",572.1],["nuevo",572.44],["un",573.34],["globo",573.54],["pequenito",573.88],["con",574.88],["una",575.18],["cara",575.38],["pintada",575.62],["tu",576.8],["amigo",576.9],["os",577.16],["mira",577.42],["luego",578.16],["te",578.46],["mira",578.74],["a",578.98],["ti",579.14],["y",579.8],["dice",579.9],["vale",580.74],["tu",581.5],["me",581.64],["tienes",581.82],["que",582.08],["contar",582.24],["algo",582.5],["y",583.36],["sonries",583.54],["porque",584.54],["esa",584.76],["historia",585],["de",585.78],["momento",585.96],["es",586.78],["solo",586.96],["vuestra",587.26],["al",588.42],["final",588.6],["la",589.3],["peor",589.4],["fiesta",589.64],["del",590],["mundo",590.22],["fue",590.54],["la",590.88],["mejor",591.02],["tarde",591.42],["de",591.82],["tu",592.02],["vida",592.16],["porque",592.84],["a",593.18],["veces",593.28],["la",593.5],["persona",593.96],["que",594.34],["te",594.52],["gusta",594.64],["tiene",594.92],["tanto",595.3],["miedo",595.72],["como",596.16],["tu",596.46],["y",597.18],["solo",597.26],["hace",597.46],["falta",597.66],["que",598.02],["uno",598.28],["de",598.52],["los",598.68],["dos",598.86],["se",599.06],["atreva",599.24],["y",600.26],["tu",600.4],["que",600.94],["habrias",601.04],["hecho",601.4],["te",602.16],["habrias",602.26],["quedado",602.6],["o",603.06],["te",603.36],["habrias",603.5],["ido",603.86],["te",604.62],["leo",604.74],["en",605],["los",605.08],["comentarios",605.18]],Ah=(n,e=0)=>{for(let[t,i]of jg)if(i>=e&&t===n)return i;return e};var Fa=(n,e,t=200,i=200)=>{let s=new k(new Re(t,i),x(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Vt=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return fe(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function eE(n,e=.5){let t=new se,i=fe(1024,256,r=>{r.clearRect(0,0,1024,256);let o=He(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new k(new Re(400,100),new et({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:Tn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function tE(n,e=0,t=-1){for(let i=0;i<4;i++){let s=w(5,.22,.6,x("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new k(new An(.16,.35,6),x(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function Mh(n,e=40,t=3,i=[-12,12,-40,4]){let s=He(t),r=fe(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Fe(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function Vu(n,e=200,t=5,i=10,s=30,r=2){let o=He(t),a=fe(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Fe(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}Te.pasteleria=n=>{n.fog=new Oe("#F3D2C0",.02),n.add(gi(16,14,"#F2E6DA","#E2CFC0",8)),n.add(w(16,5,.3,x("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(w(.12,5,.05,x("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(w(5.4,1,.9,x("#8A5A3C"),0,.5,-1.2)),n.add(w(5.5,.08,1,x("#F4EEE6"),0,1.04,-1.2)),n.add(w(3.6,.1,.5,x("#F4EEE6"),0,2.1,-3)),n.add(w(3.6,.1,.5,x("#F4EEE6"),0,2.9,-3));let e=Fe(Vt(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new Ue("#FFF0F0","#A07060",1));let t=ot("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new Qe("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};Te.espacio=n=>{n.background=new de("#05060E"),In(n,2600,200,3),n.add(new Ue("#8FA8FF","#101020",.5));let e=new mr("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};Te.aula=n=>{n.fog=new Oe("#E8DCC8",.02),n.add(gi(16,16,"#C9B89A","#BBA98A",10)),n.add(w(16,5,.3,x("#E8DCC0"),0,2.5,-3.6)),n.add(w(4.4,1.8,.06,x("#2F5A48"),0,2.3,-3.42)),n.add(w(4.6,.1,.2,x("#8E6242"),0,1.36,-3.35));let e=Fe(fe(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new Ue("#FFFFFF","#9A8A70",1)),n.add(ot("#FFE8C8",2.2,[-6,8,6],10,40))};Te.ruaV=(n,e)=>{eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(Mh(n,60,4),Vu(n,260,6,9,40))};Te.apagon=(n,e)=>{n.fog=new Oe("#0A0C18",.03),Ft(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),In(n,1800,200,4),Ta(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(ns(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(ns(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new Ue("#5A64A8","#141420",.5)),n.add(ot("#8A9AE0",.7,[-10,20,10],30,90))};Te.azotea=(n,e)=>{n.background=new de("#03040A"),n.fog=new Oe("#060814",.008),In(n,4200,200,9),eE(n,e.ang??.45),si(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=w(16,.3,12,x("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(w(16,.5,.2,x("#4A4A54"),0,.25,-8)),n.add(w(1.4,1.2,1.4,x("#4A4A54"),4.5,.6,-5)),n.add(new Ue("#6A78C8","#141420",.55)),n.add(ot("#9AAAF0",.6,[-6,10,6],12,40))};Te.panaderia=n=>{Te.pasteleria(n);let e=Fe(Vt(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};Te.metro=n=>{n.background=new de("#0A0C10"),n.fog=new Oe("#0C1014",.07);let e=x("#4A4E54",{roughness:.9,side:sn}),t=new k(new qe(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new se,s=new k(new qe(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=w(6.4,.1,60,x("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(w(.08,.12,60,x("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(w(2.2,.08,.2,x("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new Qe("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=lt("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Ue("#8A90A0","#202024",1.1))};Te.bosque=(n,e)=>{n.fog=new Oe(e.nieve?"#E8EEF4":"#C8D0B8",.025),Ft(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Fa(n,e.nieve?"#F2F4F8":"#6E8A48");let t=He(14);for(let i=0;i<26;i++)cn(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=ns(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),Mh(n,0)}n.add(new Ue("#E9EEFF","#5A6A4A",.95)),n.add(ot("#FFE8C0",2.4,[-10,14,8],18,60))};Te.rio=(n,e)=>{Te.parque(n,e);let t=new k(new Re(60,3.4),new Le({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};Te.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Oe(t?"#F2A880":"#CFE8F0",.006),Ft(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=lt(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=Fa(n,"#E8D4A0"),r=new k(new Re(800,400),new Le({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=w(800,.02,.6,x("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new k(new dr(1.1,0),x("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Ue(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(ot(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};Te.svalbard=n=>{n.fog=new Oe("#C8D8E8",.02),Ft(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),Fa(n,"#F4F6FA");let e=He(19);for(let l=0;l<8;l++){let c=new k(new An(10+e()*12,10+e()*10,7),x("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new k(new Et(14,32,16,0,Math.PI*2,0,Math.PI/2),x("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=w(3,4.4,6,x("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=w(1.4,2.2,.1,x("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=zt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=lt("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=lt("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new Ue("#D8E8FF","#8A9AB0",1.1)),n.add(ot("#F0F4FF",1.6,[-8,10,8],16,50))};Te.huerto=(n,e)=>{Te.parque(n,e),tE(n,0,-1.4)};Te.biblio=n=>{n.fog=new Oe("#4A3A2A",.03),n.add(Li(18,14,"#6D4A33")),n.add(w(18,6,.3,x("#5A3E2A"),0,3,-3.4));let e=He(8);for(let s=0;s<5;s++){n.add(w(14,.06,.4,x("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(w(o,a,.3,x(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Ue("#FFE8C8","#3A2A1C",.7));let t=new Qe("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=lt("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};Te.hotel=n=>{n.fog=new Oe("#E8D8C0",.02),n.add(Li(18,14,"#8A5A3A")),n.add(w(18,6,.3,x("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(w(2.4,2.6,.05,x("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Fe(fe(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=w(3.2,.6,2.4,x("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(w(3.3,1.4,.2,x("#6A3A2A"),0,.7,-2.8)),Mh(n,0);let t=Fe(fe(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new Ue("#FFF0E0","#8A6A4A",1)),n.add(ot("#FFE0B0",2,[-4,8,6],10,30))};Te.selva=n=>{n.fog=new Oe("#7AA870",.05),Ft(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),Fa(n,"#3E5A2A");let e=He(23);for(let t=0;t<40;t++)cn(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);Vu(n,160,9,12,12,3),n.add(new Ue("#D8F0C8","#2A3A1A",.9)),n.add(ot("#FFF0C0",2.2,[-6,14,4],14,50))};Te.desierto=n=>{Te.sabana(n,{})};var bh=(n,e,t=200,i=200)=>{let s=new k(new Re(t,i),x(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};function Pa(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new se,[d,u,f,g]=s,E=()=>l?new Le({map:wa(i,3,3),roughness:.95}):x(i,{roughness:.9}),m=d-f/2+e/2,p=e/2-(d+f/2),v=u-g/2,_=t-(u+g/2);h.add(w(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(w(p,t,.3,E(),e/2-p/2,t/2,0)),h.add(w(f,v,.3,E(),d,v/2,0)),h.add(w(f,_,.3,E(),d,t-_/2,0));let y=x("#F4F0E4");for(let[H,z,q,ee]of[[d-f/2,u,.1,g+.1],[d+f/2,u,.1,g+.1],[d,u+g/2,f+.2,.1],[d,u,.05,g]])h.add(w(q,ee,.36,y,H,z,0));h.add(w(f+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,C=x(o,{roughness:.9});h.add(w(f+3,t,.2,C,d,t/2,-D)),h.add(w(.2,t,D,C,d-f/2-1.4,t/2,-D/2)),h.add(w(.2,t,D,C,d+f/2+1.4,t/2,-D/2)),h.add(w(f+3,.2,D,x("#8A6A4A"),d,v-c,-D/2)),h.add(w(f+3,.2,D,C,d,u+g/2+.5,-D/2));let b=new Qe("#FFC880",a?9:2.5,7,1.4);b.position.set(d,u+.6,-1.2),h.add(b);let F=zt(f+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-D+.12),h.add(F);let S=w(f-.04,g,.06,x("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let H=0;H<10;H++){let z=w(f-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(z),A.push([z,H])}let P=H=>{let z=Math.max(.001,g*H);S.scale.y=z/g,S.position.y=u+g/2-z/2,S.visible=H>.01,A.forEach(([q,ee])=>{let $=u+g/2-(ee+.5)*g/10;q.visible=H>.01&&$>u+g/2-z,q.position.y=$})};return P(0),h.userData={persiana:P,luz:H=>{b.intensity=H?9:2.5,F.material.emissiveIntensity=H?.35:.08},win:s,lamp:b},h.children.forEach(H=>{H.castShadow=H.castShadow??!0,H.receiveShadow=!0}),h}function Th(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new se;l.add(w(i,s,r,x(e,{roughness:.9}),0,s/2,-r/2));let c=new k(new qe(.01,i*.62,2.4,4,1),x(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(w(1.1,2.1,.1,x(o),0,1.05,.02)),l.add(w(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Le({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(w(1.3,1.2,.06,h(),d,u,.03)),l.add(w(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(w(2,.2,1.2,x("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function Sh(n=4){let e=new se,t=He(n*7);for(let i=0;i<n*3;i++){let s=new k(new Et(.42+t()*.12,12,10),x(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function Wu(n=8,e="#E8E2D2"){let t=new se;for(let i=0;i<=n*4;i++)t.add(w(.1,1.3,.05,x(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(w(n,.08,.06,x(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function Ia(){let n=new se,e=He(4);for(let t=0;t<7;t++){let i=new k(new Et(.35,12,10),x("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new k(new Et(.08,10,8),x(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function nE(){let n=new se;n.add(w(2.2,2,1.8,x("#8A6A4A",{roughness:.9}),0,1,0));let e=w(2.6,.12,2.3,x("#5A3E2A"),0,2.12,0);return n.add(e),n.add(w(.8,1.5,.05,x("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Xu(n=.6){let e=w(n,n*.8,n,x("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(w(n*1.01,.06,.15,x("#E8D8A8"),0,n*.4,0)),e}function qu(n="#C9361F"){let e=new se;e.add(w(2,.45,.9,x(n),0,.4,0)),e.add(w(2,.7,.2,x(n),0,.8,-.4));for(let t of[-1,1])e.add(w(.2,.55,.9,x(n),t*.95,.55,0));return e.children.forEach(t=>t.castShadow=!0),e}function Yu(){let n=new se;n.add(w(.04,1.4,.04,x("#E8667F"),0,.7,0));let e=new k(new Et(.28,16,12),new Le({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new k(new jt(.18,.04,8,16,Math.PI*1.2),x("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=lt("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Zu(n=.9,e=1.2){let t=fe(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new se;i.add(w(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new k(new Re(n,e),x("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function $u(n=.9,e=1.2){let t=fe(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new se;i.add(w(n+.08,e+.08,.04,"#111",0,0,0));let s=new k(new Re(n,e),x("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}var iE=(n,e)=>{Te.quarto(n,e);let t=Zu();t.position.set(-3,2.8,-2.8),n.add(t)};Te.cuartoYo=(n,e)=>{iE(n,e);let t=Pa({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=Yu();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=$u(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&In(n,600,120,2)};Te.cuartoElla=(n,e)=>{Te.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(w(2.4,.45,3.2,x("#6B4A33"),1.7,.25,-1.4)),n.add(w(2.3,.3,3,x("#F3EEE4"),1.7,.6,-1.4)),n.add(w(2.38,.22,2,x("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=Yu();t.position.set(-3.2,0,-2.2),n.add(t);let i=$u();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Pa({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Zu(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&In(n,600,120,2)};Te.entreCasas=(n,e)=>{let t=!!e.night;n.background=new de(t?"#0A0C1E":"#9FC8E8"),n.fog=new Oe(t?"#0E1028":"#CFE0EE",.02),Ft(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&In(n,1600,120,5),bh(n,t?"#24301E":"#6E9A50");let i=Pa({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Pa({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Wu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Ue(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(ot(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};Te.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Oe(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Ft(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),bh(n,t?"#24301E":"#6E9A50");let s=w(200,.02,6,x(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=w(200,.1,2,x("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let f=Th({col:d,roof:u,night:t});f.position.set(h,0,-3),n.add(f)}let a=Sh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Sh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Sh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])cn(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));si(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new Ue(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(ot(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};Te.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Oe(t?"#E8A880":"#F2E2C8",.015),Ft(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),bh(n,"#6E9A50");let i=Wu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=Ia();s.position.set(1.6,0,-1.2),n.add(s);let r=Ia();r.position.set(2.8,0,-2.6),n.add(r);let o=nE();o.position.set(-2.4,0,-3.2),n.add(o);let a=Th({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=Th({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])cn(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Ue("#E9EEFF","#6A5A4A",1.05)),n.add(ot(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};Te.esquina=(n,e)=>{Te.barrio(n,e)};Te.concurso=n=>{n.background=new de("#140C24"),n.fog=new Oe("#1A1030",.03);let e=w(20,.2,12,x("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=lt(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Fe(Vt(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=w(1.2,1.1,.7,x("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(w(1.3,.1,.8,x("#F2C14E"),0,1.12,-.6)),n.add(new Ue("#B8A8FF","#2A1A3A",.9));let s=new Yn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};Te.residencia=n=>{n.fog=new Oe("#E8DCC8",.02),n.add(Li(20,14,"#8A6A4A")),n.add(w(20,4,.3,x("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(w(1,2.2,.08,x("#6B4A33"),-7+e*2,1.1,-3.2));let t=Fe(Vt([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new Ue("#FFFFFF","#9A8A70",1)),n.add(ot("#FFE8C8",2,[-6,8,6],12,40))};var io=(n,e,t=200,i=200,s={})=>{let r=new k(new Re(t,i),x(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},no=(n,e=1.6)=>new Le({color:n,emissive:n,emissiveIntensity:e});function Ju(n=2.6){let e=new se,t=fe(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Fe(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function sE(n="#FFB25A"){let e=new se,t=new k(new qe(.16,.12,.34,12),no(n,1.8));e.add(t);let i=lt(n,1,.55);return e.add(i),e}var rE=(n,e,t,i=3)=>{let s=He(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new k(new Et(.07+s()*.06,10,8),no(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=w(.02,.12,.02,x("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};Te.desvan=(n,e)=>{let t=!!e.night;n.background=new de("#1A120C"),n.fog=new Oe("#2A1C12",.05),n.add(Li(16,14,"#6A4630"));for(let h of[-1,1]){let d=w(16,.15,7.5,x("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(w(16,6,.2,x("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=w(.22,.22,9,x("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=He(6);for(let h=0;h<9;h++){let d=Xu(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=w(1.4,.8,.7,x("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(w(1.44,.1,.74,x("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=zt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=xs(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new k(new Et(.09,12,10),no("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(w(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new Qe("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Ue("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=lt("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};Te.pasillo=(n,e)=>{n.background=new de("#1A1036"),n.fog=new Oe("#2A1850",.045),In(n,1600,120,7),io(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=He(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let f of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(f>0?1:0))%i.length],m=w(.12,2.6,1.3,x("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=w(.08,2.3,1.05,x(E,{roughness:.6}),f*2.35,1.15,g);n.add(p);let v=new k(new Et(.05,8,6),no("#F2C14E",.6));v.position.set(f*2.29,1.1,g+.35),n.add(v)}let s=new se,r=new se;r.position.set(0,0,.55),s.add(r);let o=w(.08,2.3,1.05,x("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new k(new Et(.05,8,6),no("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Fe(Vt(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=zt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let f=lt(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);f.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(f)}n.add(new Ue("#D8C8FF","#4A3070",1));let h=new Qe("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new Qe("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};Te.playaSueno=(n,e)=>{n.fog=new Oe("#E8B8E0",.018),Ft(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=lt("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new k(new Hn(4,40),new et({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=io(n,"#F8EEF2",200,200),r=new k(new Re(400,200),new Le({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=w(400,.02,.3,x("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=He(4);for(let l=0;l<70;l++){let c=lt("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new se;c.add(w(.18,2.8,.18,x("#E8A0C0"),0,1.4,0));let h=lt(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Ue("#FFE0F6","#B88AC8",1.15)),n.add(ot("#FFD8E8",2,[8,14,-6],14,60))};Te.baile=(n,e)=>{n.background=new de("#0E0A28"),n.fog=new Oe("#1A1240",.03),In(n,2400,160,3),Ft(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),io(n,"#3A2A5A");let t=new k(new Hn(3.2,48),new Le({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),rE(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=Ia();c.position.set(a,0,l),n.add(c)}let i=He(9),s=[];for(let a=0;a<22;a++){let l=sE(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Ue("#B8A8FF","#2A1A3A",.7));let r=new Yn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new Qe("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};Te.estadio=(n,e)=>{n.background=new de("#0A1020"),n.fog=new Oe("#18203A",.02),In(n,800,160,5);let t=fe(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new k(new Re(40,40),new Le({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new se,r=x("#FFFFFF",{roughness:.4});s.add(w(.12,2.4,.12,r,-3.6,1.2,0),w(.12,2.4,.12,r,3.6,1.2,0),w(7.3,.12,.12,r,0,2.4,0));let o=new k(new Re(7.2,2.4),new et({color:"#FFFFFF",transparent:!0,opacity:.18,side:It}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(w(60,1,2,x(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=He(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);gh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=lt("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new Ue("#D8E0FF","#2A3A2A",1));let c=ot("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};Te.concierto=(n,e)=>{n.background=new de("#0C0820"),n.fog=new Oe("#140C2C",.025);let t=w(14,.6,6,x("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),io(n,"#140E26").position.y=-.01;let i=zt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=He(4);for(let l=0;l<9;l++){let c=lt(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=xs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new se;r.add(w(.03,1.4,.03,x("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new k(new Et(.06,12,10),x("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=lt(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Ue("#B8A8FF","#2A1A3A",.8));let a=new Yn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};Te.gris=(n,e)=>{n.background=new de("#1C1E24"),n.fog=new Oe("#262830",.06),io(n,"#4A4C54"),n.add(w(14,7,.2,x("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(w(.2,7,12,x("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(w(.2,7,12,x("#52545C",{roughness:1}),4.2,3.5,0));let t=zt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(w(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(w(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Ue("#A8B0C8","#2A2A30",.6));let i=new Yn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new Qe("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};Te.labSueno=(n,e)=>{Te.lab(n,e),Hu(n,-1.4,-1.6,"#4A86C7");let t=new se;t.add(w(.12,1.4,.12,x("#3A3A44"),0,.7,0)),t.add(w(1,.7,.1,x("#20242E"),0,1.7,0));let i=zt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var Da=(n,e,t=200,i=200,s={})=>{let r=new k(new Re(t,i),x(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Qu=(n,e=1.6)=>new Le({color:n,emissive:n,emissiveIntensity:e}),oE=(n="#8C8A84",e=3)=>{let t=fe(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=He(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=dn,t},Rs=(n,e,t,i,s,r,o,a=3)=>{let l=oE(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new k(new wn(n,e,t),new Le({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function aE(n="#B8B4A8"){let e=new se,t=new k(new qe(.09,.09,.22,18),x(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new k(new qe(.092,.092,.12,18,1,!0),new Le({map:fe(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function lE(){let n=new se;n.add(w(1,.8,.6,x("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(w(.3,.3,.02,x("#222"),-.25,.5,.31));let e=new k(new Et(.04,10,8),Qu("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(w(.02,.4,.02,x("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function cE(){let n=new se;n.add(w(.36,.5,.08,x("#3A3C3A",{metalness:.5}),0,0,0));let e=new se;e.position.set(0,0,.06),n.add(e);let t=w(.05,.4,.05,x("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new k(new Et(.07,14,10),x("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function hE(){let n=new se;n.add(w(8,2.4,2.5,x("#F2B830",{roughness:.5}),0,1.6,0)),n.add(w(8.02,.25,2.52,x("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(w(.85,.7,.02,x("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new k(new qe(.45,.45,.3,16),x("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=lt("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function Ku(n,e,t={}){let i=Vt(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Fe(i,e,e*(t.h||260)/(t.w||1100))}Te.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new de("#0E0F10"),n.fog=new Oe(t?"#050608":"#2A2A28",t?.08:.045);let s=Rs(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Rs(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Rs(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Rs(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Rs(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(w(.25,.3,10,x("#6A6862"),b,3.35,-.5));let r=new se;r.add(w(2,.2,.3,x("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),w(.2,2.6,.3,x("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),w(.2,2.6,.3,x("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new se;o.position.set(-.85,0,-3.3),n.add(o);let a=x("#6E7670",{metalness:.7,roughness:.35}),l=w(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(w(1.6,.08,.04,x("#5A605C",{metalness:.7}),.85,b,.1));let c=new k(new jt(.26,.035,8,28),x("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let F=w(.5,.03,.03,x("#B8241A"),.85,1.25,.14);F.rotation.z=b*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=cE();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Fe(Vt(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=b=>{let F=new se,S=x("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])F.add(w(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])F.add(w(.96,.06,2.1,S,0,A,0)),F.add(w(.86,.14,1.96,x("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(w(.5,.1,.3,x("#D8D2C0"),0,A+.21,-.8));return F.position.set(b,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let f=new se;for(let b of[.9,1.5])f.add(w(1.4,.05,.35,x("#5A4A3A"),0,b,0));for(let b of[-.7,.7])f.add(w(.05,1.6,.35,x("#5A4A3A"),b,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let b=0;b<6;b++){let F=aE();F.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),f.parent.add(F),g.push(F)}n.userData.cans=g;let E=lE();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new se;m.add(w(.06,.7,.9,x("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(w(.08,.04,.8,x("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(w(1.4,.06,.8,x("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let F of[-.32,.32])n.add(w(.05,.75,.05,x("#3A2E22"),b,.375,.3+F))}if(e.museo){let b=Ku(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let p=Fe(fe(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let v=[];for(let b of[-1.6,1.6]){let F=new k(new Et(.09,12,10),Qu("#FFD089",t?0:2.2));F.position.set(b,3.1,-.6),n.add(F),v.push(F),n.add(w(.22,.02,.22,x("#333"),b,3.2,-.6,!1))}let _=[];if(!t)for(let b of[-1.6,1.6]){let F=new Qe("#FFC27A",11,10,1.4);F.position.set(b,2.9,-.4),F.castShadow=b<0,n.add(F),_.push(F)}let y=new Ue(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let b=zt(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let F=xs(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new Yn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,F,S]}let D=He(5),C=[];for(let b=0;b<26;b++){let F=lt("#FFE8C0",.04,t?.2:.5);F.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(F),C.push(F)}n.userData.dust=C};Te.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Oe(t?"#1A1E28":"#C8D0B8",t?.045:.022),Ft(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Da(n,t?"#2A3A24":"#6E8A48");let i=He(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||cn(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new k(new Et(3.2,24,12,0,Math.PI*2,0,Math.PI/2),x(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Rs(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(w(1.5,2,.1,x("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=Ku(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=hE();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new Ue("#6A7A9A","#1A1E1A",.75));let a=new Ue("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=ot("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new et({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new k(new wn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[f,g,E,m]=u.userData.p;u.position.set(f+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new Ue("#E9EEFF","#5A6A4A",.95)),n.add(ot("#FFD29A",2.6,[-12,16,10],16,70))};Te.puente=(n,e)=>{let t=!!e.normal;n.fog=new Oe("#C8D8E0",t?.02:.012),Ft(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new Ue("#E9EEFF","#5A6A4A",1)),n.add(ot("#FFE2B0",2.6,[-10,18,12],16,80));let i=He(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){Da(n,"#6E8A48");let l=new k(new Re(3.4,60),x("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(w(1.4,.14,5,x("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(w(.08,.5,5,x("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(w(.1,.6,.1,x("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)cn(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Rs(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),Da(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)cn(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new k(new Re(14,200),new Le({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new k(new dr(1.5+i()*2),x("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=x("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=w(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new k(new ur(new _s(c),60,.025,6),x("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(w(.015,1,.015,x("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(w(.18,1.6,.18,x("#6A4630"),d,.8,l*.55))}n.userData.y=0};Te.marte=(n,e)=>{n.background=new de("#10141A"),n.fog=new Oe("#1A2028",.05);let t=new k(new qe(2.4,2.4,30,28,1,!0),new Le({color:"#C8CCD0",side:sn,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(w(3.6,.1,30,x("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new k(new jt(2.38,.05,6,28),x("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=zt(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(w(.6,.5,1.8,x("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(w(.05,.6,.5,x("#2A3A4A"),r*1.75,1.6,-o*3));let a=zt(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Fe(Vt(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new Ue("#E8F0FF","#4A505A",.9));let s=new Qe("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};Te.biosfera=(n,e)=>{n.fog=new Oe("#F2D8B0",.012),Ft(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),Da(n,"#D8B07A");let t=He(31);for(let l=0;l<8;l++){let c=new k(new An(8+t()*8,6+t()*6,6),x("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new se;c.add(w(.3,1.6+t(),.3,x("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Le({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:It}),s=new et({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new An(l,l*1.1,4,4);for(let u of[i,s]){let f=new k(d,u);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new Et(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new k(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)cn(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Fe(Vt(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new Ue("#FFF0DC","#B08A6A",1.05)),n.add(ot("#FFD29A",3,[-14,16,10],20,70))};Te.noria=(n,e)=>{Te.parque(n,{dusk:!0});let t=new se,i=x("#E8E2D2",{metalness:.4,roughness:.4}),s=new k(new jt(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=w(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new se;c.add(w(.7,.6,.6,x(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=lt("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=w(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var so=(n,e=1.6)=>new Le({color:n,emissive:n,emissiveIntensity:e}),Zn=(n="#A8ACB0")=>x(n,{metalness:.75,roughness:.32}),La=(n="#9EA2A6")=>{let e=fe(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=He(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Le({map:e,metalness:.7,roughness:.35})},ju=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Fe(Vt([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function ef(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new qn(e);i.colorSpace=Gt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new k(new Re(.5,.31),new et({map:i,toneMapped:!1}));return r.userData.set=s,r}function dE(){let n=new se;n.add(w(.36,.9,.03,Zn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new k(new qe(.04,.04,.02,16),so("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Fe(Vt([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new k(new qe(.05,.05,.025,16),so("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Fe(Vt(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new se;for(let o=0;o<5;o++)r.add(w(.16,.012,.01,x("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}Te.ascensor=(n,e)=>{n.background=new de("#08090C"),n.fog=new Oe("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=La("#A4A8AC"),o=w(2.6,.1,2.4,x("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new k(new Re(2.4,2),new Le({map:(()=>{let C=fe(256,256,b=>{b.fillStyle="#4A4440",b.fillRect(0,0,256,256),b.strokeStyle="#3A3430",b.lineWidth=3;for(let F=0;F<256;F+=32)b.beginPath(),b.moveTo(F,0),b.lineTo(F,256),b.stroke(),b.beginPath(),b.moveTo(0,F),b.lineTo(256,F),b.stroke()});return C.wrapS=C.wrapT=dn,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(w(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(w(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(w(2.6,.08,2.4,x("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(w(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(w(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(w(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Zn("#B4B8BC"),c=w(.56,2.2,.04,l,-.28,1.1,i+.03),h=w(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(w(.01,2.2,.045,x("#555"),0,1.1,i+.04));let d=w(1.1,2.2,.02,x("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=ef(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let f=dE();f.position.set(.85,1.25,i+.05),n.add(f),n.userData.botonera=f;for(let C of[-1,1])n.add(w(.04,.04,1.8,Zn("#C8CCD0"),C*(t-.06),.95,-.5));let g=new k(new Re(1.5,1.5),new Le({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(w(.02,1.56,1.56,x("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Fe(Vt(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=zt(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let p=new Qe("#FFF4E4",10,7,1.4);p.position.set(0,s-.3,-.3),p.castShadow=!0,n.add(p);let v=new k(new wn(.3,.06,.14),so("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new Qe("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new Ue("#E8ECF0","#3A3634",.5);n.add(y);let D=new Qe("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(C,b=0)=>{let F=Math.max(0,Math.min(1,C))*(1-b);m.material.emissiveIntensity=1.6*F,p.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),_.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};Te.rellano=(n,e)=>{let t=!!e.night;n.background=new de("#14120F"),n.fog=new Oe("#2A2620",.035),n.add(gi(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(w(6.38,3.4,.3,x(i),-3.81,1.7,-3.2)),n.add(w(6.38,3.4,.3,x(i),3.81,1.7,-3.2)),n.add(w(1.24,1.2,.3,x(i),0,2.8,-3.2)),n.add(w(.3,3.4,10,x(i),-5,1.7,0)),n.add(w(.3,3.4,10,x(i),5,1.7,0)),n.add(w(14,.2,10,x("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(w(6.3,.9,.02,x(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(w(1.5,.12,.1,Zn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(w(.12,2.3,.1,Zn("#9EA2A6"),E*.69,1.13,-3.02));let s=new se;s.add(w(1.3,.05,1.6,x("#4A4440"),0,0,-.8)),s.add(w(1.3,2.2,.05,La(),0,1.1,-1.6));for(let E of[-1,1])s.add(w(.05,2.2,1.6,La(),E*.65,1.1,-.8));let r=zt(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new Qe("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Zn("#B4B8BC"),l=w(.62,2.2,.05,a,-.31,1.1,-3),c=w(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=ef(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=w(.1,.2,.03,Zn(),.95,1.2,-3.03);n.add(d);let u=new k(new Et(.03,10,8),so("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let f=ju(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(f.position.set(1.5,2.2,-3.03),n.add(f),e.portal){let E=new se;for(let p=0;p<12;p++)E.add(w(.36,.26,.04,x("#8E6242"),-.6+p%4*.4,-Math.floor(p/4)*.3,0)),E.add(w(.2,.02,.02,x("#2A2A2A"),-.6+p%4*.4,-Math.floor(p/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(w(.04,2.6,2,x("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Fe(Vt(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(w(1,2.2,.06,x("#6B4A33"),E,1.1,-3.02));let p=Fe(Vt([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);p.position.set(E,1.85,-2.98),n.add(p);let v=new k(new Et(.04,10,8),Zn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new k(new Et(.16,14,10),so("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let p=new Qe("#FFE0B0",t?6:9,9,1.4);p.position.set(E,2.9,-.8),p.castShadow=E<0,n.add(p)}n.add(new Ue("#F4ECE0","#4A4034",t?.35:.6))};var ss=3;Te.hueco=(n,e)=>{n.background=new de("#05060C"),n.fog=new Oe("#0A0C18",.02),Ft(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),In(n,1600,220,3),si(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*ss,i=x("#3A3A42",{roughness:.95});n.add(w(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(w(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*ss;if(n.add(w(4.1,.14,.1,x("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(w(4.1,.25,3.2,x("#5A5A64"),0,-.12,-.8)),g<=12){let m=Fe(Vt([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(w(.08,t,.08,Zn("#7A7E84"),g*1.75,t/2,-1.6));let s=new se,r=La("#A4A8AC");s.add(w(2.6,.12,2.2,x("#3A3634"),0,0,0)),s.add(w(2.6,.1,2.2,x("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(w(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(w(2.6,2.8,.08,r,0,1.4,-1.1));let o=zt(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new Qe("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new Qe("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(w(.4,.3,.4,x("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=w(.18,.3,.18,x("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new k(new qe(.6,.6,.3,24),Zn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new k(new qe(.018,.018,1,6),Zn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=w(.7,1.6,.3,x("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new k(new qe(.03,.03,1,6),Zn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let D=Math.max(.01,(t-m)*(1-E));_.scale.y=D,_.position.set(y,t-D/2,-.6)});let p=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*ss);for(let g=0;g<=12;g+=2){let E=new Qe("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*ss+2.2,.4),n.add(E)}n.add(new Ue("#6A78A8","#101018",.5));let f=He(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let p=f()<.55,v=zt(.8,1,p?"#FFD890":"#1A1C2A",p?1.2:.2);v.position.set(E*(3.2+m*1.6),g*ss+1.6,-.6),n.add(v),n.add(w(1.4,ss,.2,x("#2A2A34"),E*(3.2+m*1.6),g*ss+ss/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};Te.feria=(n,e)=>{n.background=new de("#2A2018"),n.fog=new Oe("#6A5A44",.03),n.add(gi(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(w(.25,12,.25,x("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new k(new jt(2,.1,6,24,Math.PI),x("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=zt(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(w(.6,.4,.02,x(t[l%3]),-8+l*2,9.5,-6));let i=x("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(w(.25,9,.25,i,l*1.4,4.5,-3));n.add(w(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=w(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new k(new qe(.4,.4,.15,18),x("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new se;r.add(w(2.4,.15,1.8,x("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(w(.08,1,.08,i,l*1.1,.5,.8));r.add(w(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=w(.16,.2,.16,x("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new k(new qe(.03,.03,1,6),x("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Fe(Vt(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new Ue("#FFE8C8","#5A4A38",.9)),n.add(ot("#FFD8A0",2.2,[-6,14,8],14,50))};var uE=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));Te.escalera=(n,e)=>{n.background=new de("#1E1A16"),n.fog=new Oe("#2A2620",.04),n.add(gi(14,10,"#C8B898","#B8A888",8)),n.add(w(16,7,.3,x("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=w(.34,.18*(15-o),1.6,x("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(w(.34,.03,1.62,x("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(w(2.6,2.6,1.6,x("#B8A890"),-4.3,1.3,-1.3));let i=new k(new qe(.03,.03,5.7,8),x("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(w(.025,.9,.025,x("#2A2A2E"),-2.9+o*.32,uE(-2.9+o*.32)+.45,-.5));let s=ju(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=zt(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new Qe("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new Ue("#F4ECE0","#4A4034",.6))};var br=[],fE=999,df=n=>n+1<to.length?to[n+1]:fE,wh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),uf=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[wh(i,s,t),s,wh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,wh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},le=(n,e)=>{let t=to[n],i=df(n),s=Math.min(i,606)-t;br.push([(r,o)=>_h(r,o,uf(e(s,t),s)),t,i])},pE=(n,e,t)=>{let i=Math.min(e,606)-n;br.push([(s,r)=>_h(s,r,uf(t(i,n),i)),n,e])},kn=(n,e,t)=>{let i=to[n],s=df(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=Ah(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>pE(r[l],r[l+1],a))},Cs=n=>({tipo:"humano",...n}),ze=(n={})=>Cs({glow:.1,...n});var ff=(n={})=>Cs({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n}),mE=(n={})=>ff({s:.66,outfit:"rosa",...n});var Ph=(n={})=>Cs({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n});var U=(n,e,t=0)=>Ah(e,n+t)-n,Pe=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Fe(Vt(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},ct=(n,e,t,i,s={})=>Pe(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Oa=(n,e,t,i,s={})=>Pe(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var V=(n,e,t,i=1e9,s)=>{let r=st(t,t+.2,e)*(1-st(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&En(n,s)},Ua=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),gE=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})},pf=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),Zt=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015});var Ui=n=>n.pose({armL:[60,70],armR:[60,70]}),EE=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},qt=n=>{n.pose({armL:[8,6],armR:[8,6]}),EE(n)},tf=(n,e,t=1)=>{let i=Math.sin(e*7);n.pose({armL:[40+i*30*t,40],armR:[120,100],lean:i*8*t,bob:Math.abs(Math.cos(e*7))*.06*t,legL:[i*10,0],legR:[-i*10,0],head:i*6})},Ni=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e},xh=n=>{let e=[-1,1].map(t=>{let i=lt("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},mf=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=Fe(Ca(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),En(a,r)})},yn=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=lt(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})};var yE={bloom:.45,bloomT:.88,vig:.5},Ih=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),zu(t),e.p2&&e.p2(t,i)}});var Ba=(n,e,t=-.1)=>{let i=Ni(e);n.position.set(i.x-.1,i.y+t,i.z+.1)},Wt=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Cs({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},_t=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Fe(Gu(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var gf=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)},wr=(n,e,t=5,i=7)=>{let s=new Qe("#FFD8A0",t,i,1.6);return s.position.set(...e),n.add(s),s},Ef=(n={})=>Cs({outfit:"terno2",glow:0,...n}),nf=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],yf=(n,e={})=>{let[t,i,s]=nf[n%nf.length];return Cs({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},Rh=(n=0,e={})=>yf(n,{outfit:"jaleco",glasses:!0,...e}),Mn={bg:"#C9361F",fg:"#fff"},vE={bg:"#2F5A9A",fg:"#fff"};var Dh={bloom:.38,bloomT:.9,vig:.6,exposure:1},rt=(n,e,t,i,s=2.2)=>{let r={y:Pe,w:ct,p:Oa,r:(l,c,h,d)=>Pe(l,c,h,d,Mn),b:(l,c,h,d)=>Pe(l,c,h,d,vE)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:U(e,l));return(l,c)=>o.forEach((h,d)=>V(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var vf=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(w(s,.08,r,x(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.07,i,.07,x("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))},_E=(n,e,t,i=0,s="#8E6242")=>{let r=new se;r.add(w(.5,.06,.5,x(s),0,.5,0)),r.add(w(.5,.7,.06,x(s),0,.85,-.22));for(let[o,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add(w(.05,.5,.05,x(s),o*.2,.25,a*.2));return r.position.set(e,0,t),r.rotation.y=i,n.add(r),r};var AE=(n,e={})=>fe(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),Ha=(n,e)=>{let t=new se;t.add(w(.62,1.18,.06,x("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new k(new Re(.56,1.04),new et({map:AE(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t},ME=(n,e,t="")=>fe(400,520,i=>{i.fillStyle=e,i.fillRect(0,0,400,520),i.fillStyle="#fff",i.font="900 54px Fraunces",i.textAlign="center",i.fillText(n,200,80),i.fillStyle="#43C4B4",i.beginPath(),i.roundRect(100,340,200,200,50),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(200,250,92,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(170,245,16,22,0,0,7),i.ellipse(230,245,16,22,0,0,7),i.fill(),t&&(i.fillStyle="#F2C14E",i.font="900 36px Inter",i.fillText(t,200,140))});var Oi=(n={})=>ff({glow:0,...n});var Ei={bg:"#D66A86",fg:"#fff"},SE={exposure:.95,bloom:.42},rs=(n,e=.35,t="#E8667F")=>{let i=Fe(Ca("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},os=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)};var sf=(n,e,t)=>{let i=e.split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s},TE=(n,e,t,i)=>{n.fillStyle="#F2C14E",n.beginPath(),n.arc(e,t,i,0,7),n.fill(),n.fillStyle="#2A2A34",n.beginPath(),n.arc(e-i*.35,t-i*.2,i*.12,0,7),n.arc(e+i*.35,t-i*.2,i*.12,0,7),n.fill(),n.strokeStyle="#2A2A34",n.lineWidth=i*.12,n.beginPath(),n.arc(e,t+i*.05,i*.5,.3,Math.PI-.3),n.stroke()},bE=(n,e,t,i,s="#E8445A")=>{n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.6,t-i*1.3,e,t-i*.45),n.bezierCurveTo(e+i*.6,t-i*1.3,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()},wE=(n,e,t)=>{n.fillStyle="#10131F",n.fillRect(0,0,540,1e3),n.fillStyle="#1E2336",n.fillRect(0,0,540,150),n.fillStyle="#E8667F",n.beginPath(),n.arc(70,92,34,0,7),n.fill(),n.fillStyle="#4A2A1A",n.beginPath(),n.arc(70,92,26,Math.PI,0),n.fill(),n.fillStyle="#fff",n.textAlign="left",n.font="800 34px Inter",n.fillText(t.name||"MI CRUSH \u2665",120,88),n.font="600 24px Inter",n.fillStyle=t.off?"#8A90A0":"#5FD08A",n.fillText(t.off?"desconectada":t.typing?"escribiendo\u2026":"en l\xEDnea",120,122),n.fillStyle="#C8CCD8",n.font="700 26px Inter",n.textAlign="right",n.fillText(t.hora||"00:00",515,40);let i=190;n.font="700 36px Inter";for(let[s,r]of e){if(r==="@smile"||r==="@heart"){let h=s==="r"?440:100;r==="@smile"?TE(n,h,i+50,46):bE(n,h,i+50,44),i+=120;continue}if(s==="s"){n.font="900 40px Inter";let h=sf(n,r,420),d=h.length*50+34;n.fillStyle="#C9361F",n.beginPath(),n.roundRect(40,i,460,d,20),n.fill(),n.fillStyle="#fff",n.textAlign="center",h.forEach((u,f)=>n.fillText(u,270,i+52+f*50)),i+=d+24,n.font="700 36px Inter";continue}let o=sf(n,r,330),a=Math.max(...o.map(h=>n.measureText(h).width))+44,l=o.length*46+30,c=s==="r"?500-a:40;n.fillStyle=s==="r"?"#2E7D6A":"#EDEFF5",n.beginPath(),n.roundRect(c,i,a,l,26),n.fill(),n.fillStyle=s==="r"?"#fff":"#1A1C24",n.textAlign="left",o.forEach((h,d)=>n.fillText(h,c+22,i+46+d*46)),t.strike&&t.strike.includes(r)&&(n.strokeStyle="#FF5A5A",n.lineWidth=6,n.beginPath(),n.moveTo(c+10,i+l/2),n.lineTo(c+a-10,i+l/2),n.stroke()),i+=l+20}},as=(n,e,t,i,s={})=>{let r=new se;r.add(w(t*1.08,t*1.95,.06,x("#1A1A24",{metalness:.4}),0,0,0,!1));let o=document.createElement("canvas");o.width=540,o.height=1e3;let a=o.getContext("2d"),l=new qn(o);l.colorSpace=Gt;let c=new k(new Re(t,t*1.852),new et({map:l,toneMapped:!1}));c.position.z=.032,r.add(c),r.position.set(...e),n.add(r);let h=new Qe("#9FC0FF",1.5,3,1.6);h.position.set(e[0],e[1],e[2]+.8),n.add(h);let d="";return r.userData.upd=(u,f={})=>{let g=i.filter(p=>u>=p[2]).map(p=>[p[0],p[1]]),E={...s,...f},m=JSON.stringify([g,E]);m!==d&&(d=m,wE(a,g.slice(-(E.max||7)),E),l.needsUpdate=!0)},r.userData.upd(0),r},xE=(n,e)=>fe(1024,512,t=>{t.clearRect(0,0,1024,512),t.fillStyle="#F2C14E",t.font="900 230px Fraunces",t.textAlign="center",t.fillText(n,512,270),t.fillStyle="#FBF7EC",t.font="900 70px Inter",t.fillText(e,512,400)}),RE=n=>fe(512,512,e=>{e.clearRect(0,0,512,512);for(let t=0;t<24;t++){let i=-Math.PI/2+t/24*Math.PI*2;e.strokeStyle=t<n?"#E8667F":"#3A3E4C",e.lineWidth=34,e.beginPath(),e.arc(256,256,220,i+.03,i+Math.PI*2/24-.03),e.stroke()}}),CE=(n,e,t,i)=>le(n,s=>({amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=Fe(RE(e),2.6,2.6);o.position.set(0,1.5,-1),r.add(o);let a=Fe(xE(t,i),2.4,1.2);a.position.set(0,1.5,-.95),a.renderOrder=6,r.add(a);let l=yn(r,8,"#FFB0C0");return{update:c=>{o.rotation.z=-c*.1;let h=st(0,.25,c);a.scale.setScalar(.6+.4*h),l(c,[0,1.5,-.9,1.4])}}},c:[[0,1.5,2.4],[0,1.5,-1],[0,1.5,2],[0,1.5,-1]],range:3,blur:4,look:{bloom:.5}}));var FE=(n,e={})=>fe(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),Mr=(n,e,t,i,s)=>{let r=Fe(FE(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r};var PE=(n,e,t)=>{n.add(w(1.2,1.7,.06,x("#8E6242"),e,1.6,t));let i=new k(new Re(1.05,1.55),new et({color:"#A8C4D8"}));i.position.set(e,1.6,t+.035),n.add(i)};var _f=(n,e,t=-.1)=>{for(let i of e){n.add(w(1,.06,.6,x("#C8A27A"),i,.75,t));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.05,.75,.05,x("#6A6E78"),i+s*.44,.37,t+r*.25))}};var oo=(n={})=>({amb:"aula",fov:32,...n});var Af=n=>{n.add(w(1.3,2.4,.2,x("#5A3A28"),0,1.2,-1.6)),n.add(w(1.1,2.2,.05,x("#2F4A3A"),0,1.15,-1.48));let e=new Qe("#FFD8A0",3,4,1.6);e.position.set(0,2.6,-1),n.add(e);let t=Fe(Vt(["N\xBA 7"],{bg:"#F4F0E4",fg:"#2A2A34",size:80,w:300,h:150}),.4,.2);t.position.set(0,2.55,-1.45),n.add(t)},rf=n=>(e,t)=>e.pose({armL:[35,45],armR:[35,45],lean:n*-5}),IE={amb:"barrio",ambo:{night:!0}};var oi=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||60,a=Math.round(Math.max(640,Math.max(...r.map(d=>d.length))*o*.6+220)),l=Math.round(o*1.2*r.length+230),c=ku(r,{w:a,h:l,size:o,bg:s.bg||"#EFE6FF",fg:s.fg||"#4A2A8A",tail:s.tail||"left"}),h=Fe(c,t,t*l/a);return h.position.set(...i),h.renderOrder=6,n.add(h),h},za=(n,e,t,i={})=>{let s=t.map(([o,,a,l=1.6,c={}])=>oi(n,o,l,a,{...i,...c})),r=t.map(([,o])=>typeof o=="number"?o:U(e,o));return(o,a)=>s.forEach((l,c)=>V(l,o,r[c],i.keep?1e9:c+1<r.length?r[c+1]-.1:1e9,a))};var DE=n=>{let e=new se,t=new k(new jt(.34,.035,8,24,Math.PI),x("#E8667F"));e.add(t);for(let i of[-1,1]){let s=new k(new qe(.09,.09,.07,16),x("#E8667F"));s.rotation.z=Math.PI/2,s.position.set(i*.34,0,0),e.add(s)}return n.head.add(e),e};var Mf=(n,e,t)=>{let i=new Yn("#FFF2C0",40,9,.32,.45,1.2);i.position.set(e,5,t+1.2),i.target.position.set(e,0,t),n.add(i,i.target);let s=new k(new Hn(.75,32),new et({color:"#FFF2C0",transparent:!0,opacity:.35,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.set(e,.02,t),n.add(s),[i,s]};var Ln=(n,e,t,i)=>CE(n,e,t,i),ao={bg:"#F2C14E",fg:"#2A2A34"};var xr=(n,e,t,i,s={})=>{let r=s.w||900,o=s.h||220,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=new qn(a);c.colorSpace=Gt;let h=new k(new Re(t,t*o/r),new et({map:c,transparent:!0,toneMapped:!1}));h.position.set(...e),h.renderOrder=6,n.add(h);let d="";return h.userData.upd=u=>{let f=i(u);f!==d&&(d=f,l.clearRect(0,0,r,o),l.fillStyle=s.bg||"#1E2230",l.beginPath(),l.roundRect(0,0,r,o,30),l.fill(),l.fillStyle=s.fg||"#F2C14E",l.font=`900 ${s.size||110}px Inter`,l.textAlign="center",l.textBaseline="middle",l.fillText(f,r/2,o/2+6),c.needsUpdate=!0)},h.userData.upd(0),h};var LE=(n,e,t)=>{n.add(w(1.1,2.2,.1,x("#8E6242"),e,1.1,t)),n.add(w(.08,.08,.08,x("#F2C14E",{metalness:.6}),e+.4,1.05,t+.08))};var tt={amb:"sala",ambo:{wall:"#B8607A"}},Ch={amb:"sala",ambo:{wall:"#B8607A",night:!0}},zn=["#E8667F","#F2C14E","#43C4B4","#9A6AE8","#FF8A3A","#4A86C7","#7BC86A"],lo={bg:"#E8667F",fg:"#fff"},Fs={bg:"#2F8A5A",fg:"#fff"},UE=(n={})=>fe(256,256,e=>{if(e.clearRect(0,0,256,256),e.strokeStyle="#1A1A24",e.fillStyle="#1A1A24",e.lineWidth=11,e.lineCap="round",n.gafas&&(e.lineWidth=8,e.beginPath(),e.arc(88,108,32,0,7),e.stroke(),e.beginPath(),e.arc(168,108,32,0,7),e.stroke(),e.beginPath(),e.moveTo(120,108),e.lineTo(136,108),e.stroke(),e.lineWidth=11),e.beginPath(),e.arc(88,108,11,0,7),e.fill(),e.beginPath(),e.arc(168,108,11,0,7),e.fill(),n.enfado?(e.beginPath(),e.moveTo(52,58),e.lineTo(118,80),e.stroke(),e.beginPath(),e.moveTo(204,58),e.lineTo(138,80),e.stroke(),e.beginPath(),e.arc(128,215,40,Math.PI*1.2,Math.PI*1.8),e.stroke()):(e.beginPath(),e.arc(128,150,50,.15*Math.PI,.85*Math.PI),e.stroke()),n.pelo){e.lineWidth=8;for(let t=0;t<5;t++)e.beginPath(),e.moveTo(90+t*19,40),e.quadraticCurveTo(80+t*19,15,100+t*19,4),e.stroke()}if(n.pest){e.lineWidth=6;for(let t of[88,168])for(let i of[-14,0,14])e.beginPath(),e.moveTo(t+i,92),e.lineTo(t+i*1.4,76),e.stroke()}}),of={},ri=(n,e,t={})=>{let i=new se,s=new k(new Et(.3,24,18),new Le({color:e,roughness:.25,metalness:.05,emissive:e,emissiveIntensity:.12}));s.scale.set(1,1.18,1),s.castShadow=!0,i.add(s);let r=new k(new An(.05,.08,10),x(e));r.position.y=-.38,r.rotation.x=Math.PI,i.add(r),t.hilo!==!1&&i.add(w(.008,.9,.008,x("#EDE7DA"),0,-.85,0,!1));let o=JSON.stringify(t),a=Fe(of[o]||(of[o]=UE(t)),.42,.42);if(a.position.set(0,.02,.3),a.renderOrder=3,a.castShadow=!1,i.add(a),a.visible=!!t.cara,i.userData.cara=a,t.gorro){let l=new k(new An(.13,.32,16),new Le({map:NE(t.gorro),roughness:.6}));l.position.set(.05,.48,0),l.rotation.z=-.15,i.add(l);let c=new k(new Et(.04,10,8),x("#F2C14E"));c.position.set(.09,.65,0),i.add(c)}return n.add(i),i},NE=n=>fe(128,128,e=>{e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle="#FBF7EC";for(let t=0;t<6;t++)e.fillRect(0,t*24,128,10)});var co=(n,e,t=0,i=2.2,s=.06)=>{n.position.y=i+Math.sin(e*1.6+t*1.7)*s,n.rotation.z=Math.sin(e*1.1+t)*.08},af=(n,e,t,i=5,s=2.3,r=1)=>{let o=He(r),a=[];for(let l=0;l<i;l++){let c=ri(n,zn[(l+r)%zn.length]);c.position.set(e+(o()-.5)*.9,s+o()*.5,t+(o()-.5)*.4),a.push([c,c.position.y])}return l=>a.forEach(([c,h],d)=>co(c,l,d+r,h,.05))},OE=n=>fe(2048,256,e=>{e.clearRect(0,0,2048,256);let t=[...n],i=t.length,s=2048/i;e.strokeStyle="#EDE7DA",e.lineWidth=6,e.beginPath(),e.moveTo(0,24);for(let r=0;r<=i;r++)e.lineTo(r*s,24+Math.sin(r/i*Math.PI)*30);e.stroke(),t.forEach((r,o)=>{let a=24+Math.sin((o+.5)/i*Math.PI)*30;e.fillStyle=zn[o%zn.length],e.beginPath(),e.moveTo(o*s+8,a),e.lineTo(o*s+s-8,a),e.lineTo(o*s+s/2,a+200),e.closePath(),e.fill(),e.fillStyle="#fff",e.font="900 86px Fraunces",e.textAlign="center",e.fillText(r,o*s+s/2,a+100)})}),BE=(n,e="FELIZ CUMPLE",t=5.6,i=[0,3.3,-2.8])=>{let s=Fe(OE(e),t,t/8);return s.position.set(...i),s.castShadow=!1,n.add(s),s},HE=(n,e,t=6)=>{let i=new se,s=(a,l,c,h)=>{let d=new k(new qe(a,a,l,32),x(c));return d.position.y=h,d.castShadow=!0,i.add(d),d};s(.42,.05,"#EDE7DA",.025),s(.36,.24,"#F6D8E4",.17),s(.37,.04,"#E8667F",.3),s(.26,.2,"#F6D8E4",.42),s(.27,.04,"#E8667F",.53);let r=[];for(let a=0;a<t;a++){let l=a/t*Math.PI*2,c=new k(new qe(.015,.015,.14,8),x(zn[a%zn.length]));c.position.set(Math.cos(l)*.16,.62,Math.sin(l)*.16),i.add(c);let h=lt("#FFC86A",.16,.95);h.position.set(Math.cos(l)*.16,.73,Math.sin(l)*.16),i.add(h),r.push(h)}let o=new Qe("#FFB86A",2.5,2.5,1.6);return o.position.y=1,i.add(o),i.position.set(...e),n.add(i),i.userData.velas=a=>{r.forEach((l,c)=>l.material.opacity=a*(.8+Math.sin(c*3+a*50)*.1)),o.intensity=2.5*a},i},zE=(n,e,t,i=!0)=>{vf(n,e,t,.8,2,.9,"#F4F0E4"),n.add(w(2.06,.03,.96,x("#E8667F"),e,.845,t,!1));let s=He(4);for(let r=0;r<4;r++){let o=new k(new qe(.17,.14,.05,20),x("#FBF7EC"));o.position.set(e-.8+r*.2+(r>1?.9:0),.89,t+.25),n.add(o);let a=w(.18,.06,.14,x(["#F2C14E","#E8A86A","#C9361F","#7BC86A"][r]),o.position.x,.94,o.position.z);n.add(a)}for(let r=0;r<5;r++){let o=new k(new qe(.045,.04,.2,12),x(["#C9361F","#F2C14E","#43C4B4","#E8667F","#4A86C7"][r]));o.position.set(e-.9+r*.12,.95,t-.25),n.add(o)}return i?HE(n,[e+.45,.85,t-.05]):null},lf=[{cara:1,gorro:"#E8667F"},{cara:1,pest:1},{cara:1,gafas:1,enfado:1},{cara:1,pelo:1},{cara:1,gorro:"#43C4B4"},{cara:1,pest:1,gorro:"#F2C14E"},{cara:1},{cara:1,gafas:1},{cara:1,pelo:1,gorro:"#9A6AE8"},{cara:1,pest:1}],Fh=(()=>{let n=[];for(let e of[-1,1])for(let t of[0,1])for(let i=0;i<5;i++)n.push([e*(2.9+t*.75),-2+i*.8,e*-Math.PI/2]);return n})(),kE=(n,e=0,t=0)=>{let i=[];return Fh.forEach(([s,r,o],a)=>{if(_E(n,s,r,o,["#C8A27A","#8E6242"][a%2]),a<e){let l={...lf[(a+t)%lf.length],hilo:!1},c=ri(n,zn[a%zn.length],l);c.position.set(s,.95,r),c.rotation.y=o,i.push([c,a])}}),(s,r=99)=>i.forEach(([o,a])=>{o.visible=a<r,o.position.y=.95+Math.sin(s*2+a)*.03})},Ut=(n,e={})=>{BE(n);let t=af(n,-2,-2.4,5,2.6,1),i=af(n,2.2,-2.4,5,2.6,3),s=e.tarta===!1?null:zE(n,1.3,-2.1);if(e.sofa!==!1){let o=qu("#6A3AB8");o.position.set(-1,0,-2.2),n.add(o)}let r=kE(n,e.globos||0,e.seed||0);return wr(n,[0,2.8,0],3,7),(o,a=1,l=99)=>{t(o),i(o),r(o,l),s&&s.userData.velas(a)}},ai={y:-.2,z:-2.2},GE=()=>fe(700,480,n=>{n.fillStyle="#FBF7EC",n.fillRect(0,0,700,480),n.strokeStyle="#E8667F",n.lineWidth=14,n.strokeRect(18,18,664,444);for(let e=0;e<12;e++)n.fillStyle=zn[e%zn.length],n.beginPath(),n.arc(55+e*54,44,9,0,7),n.fill();n.fillStyle="#E8667F",n.textAlign="center",n.font="900 82px Fraunces",n.fillText("\xA1MI CUMPLE!",350,140),n.fillStyle="#2A2A34",n.font="800 54px Inter",n.fillText("S\xC1BADO \xB7 18:00",350,245),n.font="700 50px Inter",n.fillText("TE ESPERO \u2665",350,330),n.fillStyle="#6A3AB8",n.font="italic 700 46px Fraunces",n.fillText("\u2014 ella",470,420)}),ka=(n,e=1.4)=>{let t=new k(new Re(e,e*480/700),new Le({map:GE(),roughness:.7}));return t.castShadow=!0,n.add(t),t},VE=()=>fe(600,400,n=>{n.fillStyle="#F6D8E4",n.fillRect(0,0,600,400),n.strokeStyle="#C8909E",n.lineWidth=6,n.beginPath(),n.moveTo(0,0),n.lineTo(300,220),n.lineTo(600,0),n.stroke(),n.beginPath(),n.moveTo(0,400),n.lineTo(240,190),n.moveTo(600,400),n.lineTo(360,190),n.stroke(),n.fillStyle="#E8667F",n.font="900 120px Inter",n.textAlign="center",n.fillText("\u2665",300,300)}),Sf=(n,e=1)=>{let t=new k(new Re(e,e*2/3),new Le({map:VE(),roughness:.7}));return t.castShadow=!0,n.add(t),t},Rr=(n,e="#43C4B4",t=.42)=>{let i=new se;i.add(w(t,t*.8,t,x(e),0,t*.4,0)),i.add(w(t*1.02,t*.82,t*.14,x("#F2C14E"),0,t*.4,0)),i.add(w(t*.14,t*.82,t*1.02,x("#F2C14E"),0,t*.4,0));for(let s of[-.6,.6]){let r=new k(new jt(t*.14,t*.04,8,16),x("#F2C14E"));r.position.set(0,t*.86,0),r.rotation.set(0,s,0),i.add(r)}return i.children.forEach(s=>s.castShadow=!0),n.add(i),i},Ga=(n,e=1)=>{let t=new se,i=x("#F6A8C4"),s=new k(new jt(.2,.035,10,28,Math.PI),i);t.add(s);for(let r of[-1,1]){let o=new k(new qe(.08,.08,.07,20),x("#FBF7EC"));o.rotation.z=Math.PI/2,o.position.set(r*.2,-.02,0),t.add(o);let a=new k(new An(.06,.12,4),i);a.position.set(r*.11,.2,0),a.rotation.z=-r*.35,t.add(a);let l=new k(new An(.03,.07,4),x("#E8667F"));l.position.set(r*.11,.19,.025),l.rotation.z=-r*.35,t.add(l)}return t.scale.setScalar(e),t.children.forEach(r=>r.castShadow=!0),n.add(t),t},Lh=n=>{if(n.auris)return;let e=Ga({add(){}},1.75);e.position.set(0,.06,0),n.head.add(e),n.auris=e},WE=(n,e,t)=>{n.add(w(1.5,2.3,.6,x("#8E6242"),e,1.15,t)),n.add(w(.68,2.1,.04,x("#A87A52"),e-.36,1.15,t+.31)),n.add(w(.68,2.1,.04,x("#A87A52"),e+.36,1.15,t+.31))},XE=n=>fe(256,256,e=>{e.clearRect(0,0,256,256),e.fillStyle=n,e.beginPath(),e.moveTo(70,30),e.lineTo(186,30),e.lineTo(250,80),e.lineTo(215,120),e.lineTo(190,100),e.lineTo(190,240),e.lineTo(66,240),e.lineTo(66,100),e.lineTo(41,120),e.lineTo(6,80),e.closePath(),e.fill(),e.fillStyle="rgba(0,0,0,.18)",e.beginPath(),e.arc(128,32,26,0,Math.PI),e.fill()}),qE=(n,e,t=.6)=>{let i=Fe(XE(e),t,t);return i.renderOrder=4,n.add(i),i},YE=()=>fe(256,256,n=>{n.fillStyle="#F4F0E4",n.fillRect(0,0,256,256),n.fillStyle="#8A4A26",n.beginPath(),n.ellipse(128,110,92,88,0,0,7),n.fill(),n.fillStyle="#F2C8A0",n.beginPath(),n.ellipse(128,128,56,66,0,0,7),n.fill(),n.fillStyle="#1A1A24",n.fillRect(80,106,40,20),n.fillRect(136,106,40,20),n.fillRect(118,112,20,5),n.strokeStyle="#C9361F",n.lineWidth=7,n.beginPath(),n.arc(128,160,20,.1,Math.PI-.1),n.stroke(),n.fillStyle="#E8667F",n.font="900 34px Fraunces",n.textAlign="center",n.fillText("\u2665 TOUR 1978 \u2665",128,238)}),Na=n=>{if(n.cant)return;let e=Fe(YE(),.34,.34);e.position.set(0,-.38,.012),e.castShadow=!1,n.torso.add(e),n.cant=e},ZE=n=>{let e=new se,t=new k(new qe(.08,.065,.16,18),x("#FBF7EC"));e.add(t);let i=new k(new jt(.045,.013,8,14),x("#FBF7EC"));i.position.x=.09,e.add(i);let s=new k(new Hn(.07,18),x("#4A2A18"));return s.rotation.x=-Math.PI/2,s.position.y=.075,e.add(s),n.add(e),e},$E=["#D9799A","#E89AB8","#F2B8CC","#FBD8E4"],JE=()=>fe(512,400,n=>{n.fillStyle="#B8607A",n.fillRect(0,0,512,400),n.fillStyle="#7A5236",n.fillRect(0,300,512,100);for(let e=0;e<12;e++){let t=30+e%6*90+(e>5?45:0),i=e>5?250:170;n.strokeStyle="#EDE7DA",n.lineWidth=2,n.beginPath(),n.moveTo(t,i+30),n.lineTo(t,i+70),n.stroke(),n.fillStyle=zn[e%zn.length],n.beginPath(),n.ellipse(t,i,26,31,0,0,7),n.fill(),n.fillStyle="#1A1A24",n.beginPath(),n.arc(t-8,i-4,3,0,7),n.arc(t+8,i-4,3,0,7),n.fill()}n.fillStyle="#111",n.beginPath(),n.arc(256,190,55,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.ellipse(238,185,9,13,0,0,7),n.ellipse(274,185,9,13,0,0,7),n.fill(),n.fillStyle="#43C4B4",n.beginPath(),n.roundRect(200,250,112,150,26),n.fill()}),QE=()=>fe(512,400,n=>{n.fillStyle="#6E5A9A",n.fillRect(0,0,512,400),n.fillStyle="#F3EEE4",n.fillRect(0,280,512,120),n.fillStyle="#E8667F",n.beginPath(),n.ellipse(256,180,90,106,0,0,7),n.fill(),n.fillStyle="#1A1A24",n.beginPath(),n.arc(226,165,10,0,7),n.arc(286,165,10,0,7),n.fill(),n.strokeStyle="#1A1A24",n.lineWidth=8,n.beginPath(),n.arc(256,195,40,.2*Math.PI,.8*Math.PI),n.stroke(),n.fillStyle="#E8667F",n.beginPath(),n.moveTo(230,82),n.lineTo(300,70),n.lineTo(270,0),n.fill(),n.fillStyle="#FBF7EC",n.fillRect(240,60,50,8),n.fillRect(255,30,30,7)}),Tf=(n,e,t=1.2)=>{let i=Fe(e,t,t*400/512);return i.renderOrder=6,n.add(i),i},Va=(n,e,t,i=2)=>{n.add(w(i,.08,.5,x("#A87A52"),e,.5,t)),n.add(w(i,.5,.08,x("#A87A52"),e,.8,t-.24));for(let s of[-1,1])n.add(w(.08,.5,.45,x("#3A3A44"),e+s*(i/2-.15),.25,t))},bf=n=>{let e=ri(n,"#E8667F",{cara:1,hilo:!1});return e.scale.setScalar(.28),e},wf=(n,e="#4A86C7")=>{let t=new se;return t.add(w(.5,.6,.25,x(e),0,.3,0)),t.add(w(.42,.25,.06,x("#2A4A7A"),0,.2,.14)),t.add(w(.5,.05,.27,x("#2A4A7A"),0,.58,0)),t.children.forEach(i=>i.castShadow=!0),n.add(t),t},ho={amb:"cuartoYo"},Nt=(n={})=>Oi({outfit:"rosa",...n}),ro=(n={})=>yf(4,n),KE=(n={})=>Cs({outfit:"roxo",hair:"old",hairc:"#E8E2D8",glasses:!0,glow:0,lash:!0,...n});var jE=(n,e="#2F5A9A")=>{let t=new se;return t.add(w(.5,.66,.12,x(e),0,0,0)),t.add(w(.46,.62,.13,x("#F4F0E4"),.03,0,0)),t.add(w(.06,.66,.125,x("#1E3A6A"),-.24,0,0)),n.add(t),t},ey=n=>{let e=new se;e.add(w(.6,.14,.5,x("#C9361F"),0,0,0));let t=Fe(Ca("\u2665","#FFD8E0",150),.3,.24);return t.position.set(0,.075,0),t.rotation.x=-Math.PI/2,e.add(t),n.add(e),e};le(0,(n,e)=>({...oo(),atores:[ze({x:-.4,z:.6,eyes:[[0,"flat"]],pose:(t,i)=>t.pose({head:Math.sin(i*2)*5})}),Wt(1,{x:1.4,z:.6,eyes:[[0,"shut"]]}),Wt(3,{x:-2.1,z:.6,eyes:[[0,"look"]]})],extra:t=>{_f(t,[-2.1,-.4,1.4],1.1);let i=Pe(t,["VIERNES \xB7 \xDALTIMA CLASE"],2.2,[0,2.45,.6],{bg:"#1E2230",fg:"#F2C14E"});return{update:(s,r,o)=>V(i,s,.1,99,o)}},c:[[0,1.8,4.6],[0,1.6,-1.6],[0,1.75,4.1],[0,1.6,-1.6]],range:4}));le(1,(n,e)=>{let t=U(e,"metido");return{...oo(),atores:[ze({x:-1.3,z:.2,eyes:[[0,"lookl"]],pose:i=>i.pose({head:25})}),Oi({x:.9,z:-.2,eyes:[[0,"look"],[t+.6,"happy"]],move:i=>[bt(2.6,.7,st(0,1.4,i)),0,-.2],pose:(i,s)=>s<1.4?i.walk(s*2):i.pose({armL:[12,8],armR:[s<t+.4?70:20,10],lean:s<t+.4?10:0})})],extra:(i,s,r)=>{wf(i).position.set(-.1,0,.1);let a=Sf(i,.4),l=Oa(i,["ALGUIEN\u2026"],1,[.7,2.05,-.2]),c=ct(i,["UN SOBRE"],1,[-.1,1.2,.2]);return{update:(h,d,u)=>{let f=st(t-.5,t+.3,h),g=Ni(r[1]);a.position.set(bt(g.x,-.1,f),bt(g.y,.55,f),bt(g.z+.1,.1,f)),a.rotation.x=-f*1.2,V(l,h,1.2,99,u),V(c,h,t,99,u)}}},c:[[0,1.5,3.8],[-.2,1,-.2],[0,1.45,3.3],[-.2,.9,-.2]],range:3.5}});le(2,(n,e)=>{let t=U(e,"invitacion");return{...ho,fov:32,atores:[ze({x:-.5,z:-.4,eyes:[[0,"look"],[t,"wide"]],pose:Ui})],extra:(i,s,r)=>{let o=Sf(i,.45),a=ka(i,.9),l=Pe(i,["UNA INVITACI\xD3N"],1.4,[-.5,2.25,-.4],lo);return{update:(c,h,d)=>{let u=Ni(r[0]);o.position.set(u.x+.15,u.y+.15,u.z+.15),o.visible=c<t-.3,a.visible=!o.visible,a.position.set(-.45,1.25+st(t-.3,t+.3,c)*.1,.1),En(a,d),En(o,d),V(l,c,t,99,d)}}},c:[[0,1.6,3],[-.3,1.45,-.4],[0,1.55,2.6],[-.3,1.45,-.4]],range:3}});le(3,(n,e)=>({amb:"gris",fov:28,k:1,atores:[],extra:t=>{ka(t,2.6).position.set(0,1.55,-.5);let s=yn(t,14,"#FFB0C0");return{update:r=>s(r,[0,1.6,-.4,1.5])}},c:[[0,1.55,4.6],[0,1.55,-.5],[0,1.55,3.6],[0,1.55,-.5]],range:3}));le(4,(n,e)=>{let t=U(e,"crush");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{ka(i,2.6).position.set(0,1.55,-.5);let r=Pe(i,["DE TU CRUSH"],1,[.6,1.25,.2],Ei),o=rs(i,.35);return o.position.set(1.25,1,.1),{update:(a,l,c)=>{V(r,a,t-.2,99,c),o.visible=a>t,o.scale.setScalar(os(a,140))}}},c:[[.3,1.4,3],[.4,1.2,-.5],[.6,1.15,2],[.6,1.05,-.5]],range:2}});le(5,(n,e)=>{let t=U(e,"salto"),i=U(e,"ti");return{...ho,fov:32,atores:[ze({x:-.3,z:-.4,eyes:[[0,"wide"],[t,"heart"]],move:s=>[-.3,s>t&&s<t+.6?Math.sin((s-t)/.6*Math.PI)*.35:0,-.4],pose:(s,r)=>s.pose({armL:[r>t?150:60,40],armR:[r>t?150:60,40]})})],extra:s=>{let r=rs(s,.5);r.position.set(-1.3,2,-.4);let o=rt(s,e,[[["\xA1UN SALTO!"],"salto","p",[-.3,2.45,-.4],1.3],[["TE INVITA A TI"],"invita","y",[-.3,2.45,-.4],1.5],[["\xA1A TI!"],i,"r",[-.3,2.45,-.4],.9,1]]);return{update:(a,l,c)=>{r.scale.setScalar(os(a,160)*(a>t?1.3:1)),En(r,c),o(a,c)}}},c:[[0,1.7,3.6],[-.3,1.5,-.4],[0,1.65,3.1],[-.3,1.5,-.4]],range:3}});le(6,(n,e)=>{let t=U(e,"unico");return{...tt,fov:34,atores:[ze({x:0,z:.2,eyes:[[0,"happy"],[t,"wide"]],move:i=>[0,0,bt(1.6,.2,st(0,2,i))],pose:(i,s)=>s<2?i.walk(s*2):i.pose({head:Math.sin(s*3)*18})})],extra:i=>{let s=Ut(i),r=rt(i,e,[[["IMAGINA\u2026"],0,"w",[0,2.6,.2],1.1],[["\xBFEL \xDANICO INVITADO?"],t-.2,"r",[0,2.6,.2],1.9,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:[[0,2.6,5],[0,1.2,-.8],[0,2.4,4.4],[0,1.2,-.8]],range:5}});le(7,(n,e)=>{let t=U(e,"suscribete"),i=U(e,"vamos");return{...ho,fov:32,atores:[ze({x:-1,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>r>t?Ua(s,r):s.pose()})],extra:s=>{let r=Ju(2.4);r.position.set(.7,1.8,-1),s.add(r);let o=yn(s,14,"#FFE27A"),a=ct(s,["\xBFY SI\u2026?"],1,[-1,2.3,-.3]),l=Pe(s,["\xA1VAMOS ALL\xC1!"],1.4,[-1,2.3,-.3],lo);return{update:(c,h,d)=>{V(a,c,.2,i-.2,d),V(l,c,i-.2,99,d);let u=st(t-.3,t,c)*(1-st(i-.4,i,c));r.scale.setScalar(Math.max(.01,u)),r.rotation.z=c>t+.6&&c<t+1.6?Math.sin(c*40)*.05:0,o(c,[.7,1.8,-.9,1.1],u)}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3}});Ln(8,10,"10:00","S\xC1BADO");le(9,(n,e)=>{let t=U(e,"cinco"),i=U(e,"ninguna");return{...ho,fov:32,atores:[ze({x:-.6,z:-.6,eyes:[[0,"look"],[i,"flat"]],pose:(s,r)=>r>t&&r<i?s.pose({armL:[12,8],armR:[130+Math.sin(r*9)*20,40]}):s.pose({armL:[60,70],armR:[60,70],head:10})})],extra:s=>{WE(s,.9,-1.6);let r=[0,1,2,3,4].map(c=>qE(s,zn[c],.5)),o=xr(s,[1,2.6,-1.2],1.2,c=>`CAMISETA ${Math.min(5,Math.max(1,Math.floor((c-t)*1.6)+1))}/5`,{w:700,h:170,size:90}),a=ct(s,["1 HORA DELANTE DEL ARMARIO"],2.2,[0,2.6,-1]),l=Pe(s,["NINGUNA TE CONVENCE"],1.9,[0,2.6,-1],Mn);return{update:(c,h,d)=>{r.forEach((u,f)=>{let g=Kr((c-t-f*.62)/.9,0,1);u.visible=g>0,u.position.set(bt(-.2,-2.2+f*.45,g),bt(1.4,.15+f*.03,g)+Math.sin(g*Math.PI)*1,bt(-.4,.4,g)),u.rotation.z=g*6,En(u,d)}),o.userData.upd(c),o.visible=c>t&&c<i,V(a,c,.1,t-.1,d),V(l,c,i,99,d)}}},c:[[-.3,1.7,3.6],[-.3,1.3,-.8],[-.3,1.65,3.1],[-.3,1.3,-.8]],range:4}});le(10,(n,e)=>{let t=U(e,"que"),i=U(e,"libro"),s=U(e,"bombones");return{amb:"gris",fov:30,k:1,atores:[ze({x:-1.15,z:-.3,eyes:[[0,"look"],[i,"flat"],[s+.8,"sad"]],pose:r=>r.pose({armL:[12,8],armR:[110,120],head:10})})],extra:r=>{let o=jE(r);o.position.set(.2,1.4,-.4);let a=ey(r);a.position.set(1.5,1.35,-.4),a.rotation.x=.9;let l=oi(r,["\xBFQU\xC9 LE REGALO","SIN QUE SE NOTE?"],1.9,[-.7,2.5,-.5]),c=rt(r,e,[[["EL REGALO"],0,"y",[.5,2.4,-.4],1.1],[["DEMASIADO SERIO"],i+.4,"r",[.2,.7,-.2],1.3,1]]),h=Pe(r,["DEMASIADO ROM\xC1NTICO"],1.5,[1.5,.7,-.2],Ei);return{update:(d,u,f)=>{V(l,d,t-.2,i-.2,f),o.visible=d>i,o.rotation.y=Math.sin(d)*.3,a.visible=d>s,c(d,f),V(h,d,s+.4,99,f)}}},c:[[0,1.6,4.2],[0,1.6,-.4],[0,1.6,3.7],[0,1.6,-.4]],range:3}});le(11,(n,e)=>{let t=U(e,"auriculares");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=Ga(i,2.8);s.position.set(0,1.5,-.4),wr(i,[0,2.2,1.2],6,6);let r=yn(i,16,"#FFB0D0"),o=Pe(i,["AURICULARES DE GATO"],2,[0,2.45,-.3],Ei);return{update:(a,l,c)=>{s.rotation.y=Math.sin(a*1.2)*.5,s.scale.setScalar(2.8*st(t-.4,t+.2,a)+.001),r(a,[0,1.5,-.3,1.3],st(t,t+.3,a)),V(o,a,t,99,c)}}},c:[[0,1.6,4],[0,1.6,-.4],[0,1.6,3.4],[0,1.6,-.4]],range:3,look:{bloom:.5}}});le(12,(n,e)=>{let t=U(e,"dijo"),i=U(e,"acuerdas");return{...oo(),atores:[Oi({x:.7,z:.4,eyes:[[0,"happy"]],pose:(s,r)=>r>t&&r<i?Zt(s,r):s.pose()}),ze({x:-.7,z:.6,eyes:[[0,"look"],[t+.5,"heart"]],pose:s=>s.pose({head:8})})],extra:s=>{_f(s,[-.7,.7],1.2);let r=_t(s,["\xA1ME ENCANTAN","LOS GATOS!"],1.3,[1.1,2.2,.3],60),o=Oa(s,["TE ACUERDAS DE TODO"],1.8,[0,2.45,.4]),a=ct(s,["UNA VEZ, EN CLASE"],1.6,[0,2.45,.4]);return{update:(l,c,h)=>{V(a,l,.1,t-.2,h),V(r,l,t,i-.2,h),V(o,l,i-.1,99,h)}}},c:[[0,1.7,4.2],[0,1.5,-.2],[0,1.65,3.7],[0,1.5,-.2]],range:4,look:Dh}});Ln(13,16,"16:00","S\xC1BADO");le(14,(n,e)=>{let t=U(e,"vas"),i=U(e,"contesta"),s=U(e,"raro");return{amb:"gris",fov:28,k:1,atores:[],extra:r=>{let o=as(r,[-.4,1.5,-.5],1.15,[["r","\xBFVas al cumple?",t-.2],["l","\xBFQu\xE9 cumple?",i+.4]],{hora:"16:02",name:"MI MEJOR AMIGO"}),a=Pe(r,["\xBFQU\xC9 RARO\u2026?"],1.3,[1.15,2.2,-.3],{bg:"#1E2230",fg:"#F2C14E"});return{update:(l,c,h)=>{o.userData.upd(l),V(a,l,s-.3,99,h)}}},c:[[.2,1.5,4.3],[.2,1.5,-.5],[.2,1.5,3.8],[.2,1.5,-.5]],range:2,blur:4}});le(15,(n,e)=>{let t=U(e,"nadie"),i=U(e,"privado");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=as(s,[-.4,1.5,-.5],1.15,[["r","\xBFAlguien va al cumple?",.2]],{hora:"16:05",name:"GRUPO DE CLASE"}),o=xr(s,[1.15,1.7,-.3],.9,l=>".".repeat(1+Math.floor(l*2)%3),{w:400,h:200,size:140}),a=rt(s,e,[[["SILENCIO"],t,"w",[1.15,2.3,-.3],1.1],[["SER\xC1 POR PRIVADO\u2026"],U(e,"bueno"),"y",[1.15,2.3,-.3],1.6,1]]);return{update:(l,c,h)=>{r.userData.upd(l),o.userData.upd(l),o.visible=l>t,a(l,h)}}},c:[[.2,1.5,4.3],[.2,1.5,-.5],[.2,1.5,3.8],[.2,1.5,-.5]],range:2,blur:4}});Ln(16,17,"17:30","DE CAMINO");le(17,(n,e)=>({amb:"barrio",fov:32,atores:[ze({x:0,z:-.3,eyes:[[0,"happy"]],move:t=>[bt(-1.4,.6,t/Math.max(n,1)),0,-.3],pose:(t,i)=>{t.walk(i*1.8),t.pose({armL:[12+Math.sin(i*5)*10,8],armR:[55,75]})}})],extra:(t,i,s)=>{let r=Rr(t,"#43C4B4",.32),o=ct(t,["CON EL REGALO"],1.4,[0,2.4,-.3]);return{update:(a,l,c)=>{let h=Ni(s[0]);r.position.set(h.x-.05,h.y-.2,h.z+.12),o.position.x=s[0].root.position.x,V(o,a,.3,99,c)}}},c:[[-.4,1.6,3.4],[-.4,1.3,-.3],[.6,1.6,3.2],[.6,1.3,-.3]],range:3.5,look:{bloom:.4}}));le(18,(n,e)=>{let t=U(e,"serio"),i=U(e,"felicidades"),s=U(e,"alegre"),r=U(e,"hola"),o=U(e,"mejor");return{amb:"barrio",fov:32,atores:[ze({x:-.4,z:-.3,eyes:[[0,"look"],[t,"flat"],[i,"happy"],[s,"flat"],[r,"look"],[o,"happy"]],move:a=>[bt(-.8,.2,a/Math.max(n,1)),0,-.3],pose:(a,l)=>l>i&&l<s?a.pose({armL:[150,40],armR:[150,40],bob:Math.abs(Math.sin(l*9))*.05}):Zt(a,l)})],extra:(a,l,c)=>{let h=Rr(a,"#43C4B4",.32),d=[_t(a,["FELIZ CUMPLEA\xD1OS."],1.5,[-.3,2.35,-.3],60),_t(a,["\xA1FELICIDADES!"],1.4,[-.3,2.35,-.3],64),_t(a,["HOLA, FELIZ CUMPLE."],1.6,[-.3,2.35,-.3],58)],u=Pe(a,["DEMASIADO SERIO"],1.3,[1.3,1.6,-.2],Mn),f=Pe(a,["DEMASIADO ALEGRE"],1.3,[1.3,1.6,-.2],Mn),g=Pe(a,["MEJOR"],.9,[1.3,1.6,-.2],Fs);return{update:(E,m,p)=>{let v=Ni(c[0]);h.position.set(v.x-.05,v.y-.2,v.z+.12),h.visible=!(E>i&&E<s),V(d[0],E,.1,i-.2,p),V(d[1],E,i-.2,r-.2,p),V(d[2],E,r-.2,99,p),V(u,E,t-.3,i-.2,p),V(f,E,s-.3,r-.2,p),V(g,E,o-.2,99,p)}}},c:[[0,1.6,3.6],[0,1.45,-.3],[0,1.6,3.2],[0,1.45,-.3]],range:3.5,look:{bloom:.4}}});le(19,(n,e)=>{let t=U(e,"senora"),i=U(e,"mirando");return{amb:"barrio",fov:32,atores:[ze({x:-.9,z:-.3,eyes:[[0,"happy"],[i,"wide"]],pose:(s,r)=>r<i?Zt(s,r):s.pose({head:-12})}),KE({x:1,z:-.6,eyes:[[0,"lookl"],[i-.5,"flat"]],move:s=>[bt(3.2,1,st(t-.6,i-.3,s)),0,-.6],pose:(s,r)=>r<i-.3?s.walk(r*1.6):s.pose({armL:[12,8],armR:[40,20]})}),{tipo:"perro",s:.7,x:1.7,z:-.4,eyes:[[0,"open"]],move:s=>[bt(3.9,1.7,st(t-.6,i-.3,s)),0,-.4]}],extra:s=>{let r=_t(s,["HOLA, FELIZ CUMPLE.","HOLA, FELIZ CUMPLE.","HOLA, FELIZ\u2026"],1.6,[-1,2.35,-.3],50),o=Pe(s,["\xAC \xAC"],.55,[1,2.3,-.6],{bg:"#FBF7EC",fg:"#2A2A34",size:90,w:300}),a=ct(s,["EN VOZ ALTA"],1.2,[-.9,.5,.3]);return{update:(l,c,h)=>{V(r,l,.1,i-.3,h),V(a,l,U(e,"voz")-.2,99,h),V(o,l,i-.2,99,h)}}},c:[[0,1.6,4],[0,1.4,-.4],[0,1.6,3.6],[0,1.4,-.4]],range:3.5,look:{bloom:.4}}});Ln(20,18,"18:00","LA FIESTA");le(21,(n,e)=>{let t=U(e,"abre"),i=U(e,"pasa");return{amb:"barrio",fov:30,atores:[ze({x:-.5,z:-.6,eyes:[[0,"look"],[i,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r<.8?100:55,r<.8?30:75],head:-10})}),ro({x:.3,z:-1.2,eyes:[[0,"happy"]],move:s=>[.3,0,bt(-1.7,-1.2,st(t,t+.5,s))],pose:(s,r)=>r>i?s.pose({armL:[12,8],armR:[100+Math.sin(r*8)*25,60]}):s.pose()})],extra:(s,r,o)=>{Af(s),wr(s,[0,2.6,-.5],3,5);let a=Rr(s,"#43C4B4",.32),l=Pe(s,["DING DONG"],1.1,[.4,2.65,-1],{bg:"#F2C14E",fg:"#2A2A34"}),c=_t(s,["\xA1PASA, PASA!","\xA1ERES EL PRIMERO!"],1.5,[1.1,2.3,-1.1],54);return{update:(h,d,u)=>{let f=Ni(o[0]);a.position.set(f.x-.05,f.y-.2,f.z+.12),a.visible=h>.8,V(l,h,.05,t-.1,u),V(c,h,i-.2,99,u)}}},c:[[0,1.6,2.9],[0,1.5,-.9],[0,1.6,2.5],[0,1.5,-.9]],range:3,look:{bloom:.4}}});le(22,(n,e)=>{let t=U(e,"globos"),i=U(e,"guirnaldas"),s=U(e,"tarta"),r=U(e,"patatas");return{...tt,fov:34,atores:[],extra:o=>{let a=Ut(o),l=rt(o,e,[[["\xA1QU\xC9 PRECIOSO!"],0,"w",[0,2.2,-1.2],1.5],[["GLOBOS"],t,"p",[-2,1.9,-2],1],[["GUIRNALDAS"],i,"y",[0,2.6,-2.4],1.3],[["UNA TARTA ENORME"],s,"w",[1.7,1.7,-1.8],1.5],[["PATATAS \xB7 S\xC1NDWICHES \xB7 REFRESCOS"],r,"y",[1.3,1.6,-1.6],2,1]]);return{update:(c,h,d)=>{a(c),l(c,d)}}},cam:[[0,[0,2.2,4],[0,1.6,-1.6]],[U(e,"globos"),[-1.4,2.2,3],[-1.6,2,-2.2]],[U(e,"guirnaldas"),[0,2.6,2.6],[0,2.8,-2.6]],[U(e,"tarta"),[1.6,1.8,1.4],[1.6,1.1,-2.1]],[n,[1.2,1.7,1.2],[1.2,1,-2.1]]],f:[[0,5.6],[n,3.4]],range:5}});le(23,(n,e)=>{let t=U(e,"veinte");return{...tt,fov:38,atores:[],extra:i=>{let s=Ut(i),r=xr(i,[0,2.5,-.6],1.6,o=>`${Math.max(1,Math.round(20*st(.2,t+.2,o)))} SILLAS`,{w:800,h:200,size:110});return{update:(o,a,l)=>{s(o),r.userData.upd(o)}}},c:[[0,4.2,5.2],[0,.6,-.6],[0,3.8,4.6],[0,.6,-.6]],range:6}});le(24,(n,e)=>{let t=U(e,"vestido"),i=U(e,"ve"),s=U(e,"sonrie"),r=U(e,"has");return{...tt,fov:32,atores:[Nt({x:-1,...ai,eyes:[[0,"down"],[i,"look"],[s,"happy"]],pose:(o,a)=>{qt(o),o.pose({armL:[12,8],armR:[a<i?60:12,75],head:a<i?-12:0})}}),ze({x:.8,z:-1,eyes:[[0,"look"],[s,"happy"]],pose:o=>o.pose({armL:[12,8],armR:[55,75],head:10})})],extra:(o,a,l)=>{let c=Ut(o),h=Ha([""],{hora:"18:01"});h.scale.setScalar(.25),o.add(h);let d=Rr(o,"#43C4B4",.32),u=ct(o,["VESTIDO NUEVO"],1.3,[-1,1.95,-2]),f=_t(o,["\xA1HAS VENIDO!"],1.2,[-1.6,2.15,-1.8],64);return{update:(g,E,m)=>{c(g),Ba(h,l[0],.02),h.visible=g<i,En(h,m);let p=Ni(l[1]);d.position.set(p.x-.05,p.y-.2,p.z+.12),V(u,g,t-.1,i-.2,m),V(f,g,r-.2,99,m)}}},c:[[0,1.6,3],[-.2,1.2,-1.6],[0,1.55,2.6],[-.2,1.2,-1.6]],range:4}});Ln(25,18,"18:30","SEGU\xCDS SIENDO DOS");le(26,(n,e)=>{let t=U(e,"asoma"),i=U(e,"vuelve");return{...tt,fov:36,atores:[Nt({x:-.5,z:-.6,eyes:[[0,"look"]]}),ze({x:.3,z:-.4,eyes:[[0,"lookl"]],pose:s=>s.pose({armL:[12,8],armR:[55,75]})}),ro({x:2.4,z:-2.6,eyes:[[0,"lookl"]],move:s=>[bt(4.2,2.4,st(t,t+.6,s)*(1-st(i,i+.6,s))),0,-2.6],pose:s=>s.pose({lean:-8})})],extra:(s,r,o)=>{let a=Ut(s);Rr(s,"#43C4B4",.32).position.set(0,.85,-1.8);let c=Pe(s,["2 PERSONAS \xB7 20 SILLAS"],2,[0,2.5,-.6],{bg:"#1E2230",fg:"#F2C14E"});return{update:(h,d,u)=>{a(h),V(c,h,.1,99,u)}}},c:[[0,2.2,4.6],[.3,1.2,-1.2],[0,2.1,4.1],[.3,1.2,-1.2]],range:5}});kn(27,["intentas"],[(n,e)=>{let t=U(e,"otra"),i=U(e,"otra",t+.2);return{...tt,fov:30,atores:[Nt({x:-1,...ai,eyes:[[0,"down"],[t+.6,"look"],[t+1,"down"]],pose:(s,r)=>{qt(s),s.pose({armL:[12,8],armR:[60,75],head:-10})}})],extra:(s,r,o)=>{Ut(s);let a=Ha([""],{hora:"18:34"});a.scale.setScalar(.25),s.add(a);let l=rt(s,e,[[["OTRA VEZ"],t,"w",[-1,1.95,-2],1],[["Y OTRA"],i,"y",[-1,1.95,-2],.9,1]]);return{update:(c,h,d)=>{Ba(a,o[0],.02),En(a,d),l(c,d)}}},c:[[-.8,1.4,1],[-1,1.15,-2.2],[-.8,1.35,.7],[-1,1.15,-2.2]],range:3}},(n,e)=>{let t=U(e,"tiempo"),i=U(e,"instituto"),s=U(e,"tarta"),r=U(e,"cualquier");return{...tt,fov:32,atores:[Nt({x:-1,...ai,eyes:[[0,"look"]],pose:o=>{qt(o),o.pose({armL:[12,8],armR:[60,75]})}}),ze({x:.3,z:-1.3,eyes:[[0,"happy"],[r,"flat"]],pose:Zt})],extra:o=>{let a=Ut(o),l=ct(o,["COMO SI TODO FUERA NORMAL"],2.2,[-.3,2.5,-1.3]),c=[_t(o,["\xA1QU\xC9 CALOR HACE, \xBFEH?"],1.5,[.9,2.15,-1.3],52),_t(o,["\xBFY EL INSTI, QU\xC9?"],1.4,[.9,2.15,-1.3],56),_t(o,["LA TARTA\u2026 QU\xC9 REDONDA"],1.5,[.9,2.15,-1.3],52),_t(o,["\u2026"],.8,[.9,2.15,-1.3],90)];return{update:(h,d,u)=>{a(h),V(l,h,.1,t-.3,u),V(c[0],h,t-.2,i-.2,u),V(c[1],h,i-.2,s-.2,u),V(c[2],h,s-.2,r-.2,u),V(c[3],h,r-.2,99,u)}}},c:[[0,1.6,3],[-.3,1.3,-1.6],[0,1.55,2.6],[-.3,1.3,-1.6]],range:4}}]);Ln(28,19,"19:00","NADIE M\xC1S");kn(29,["deja"],[(n,e)=>({...tt,fov:38,atores:[Nt({x:-.5,z:-.6,eyes:[[0,"sad"]]}),ze({x:.3,z:-.4,eyes:[[0,"flat"]]})],extra:t=>{let i=Ut(t),s=Pe(t,["NADIE M\xC1S"],1.3,[0,2.5,-.6],Mn);return{update:(r,o,a)=>{i(r),V(s,r,.2,99,a)}}},c:[[0,3.6,5.4],[0,.8,-.6],[0,3.3,4.9],[0,.8,-.6]],range:6}),(n,e)=>{let t=U(e,"va");return{...tt,fov:30,atores:[Nt({x:.4,z:-1.3,eyes:[[0,"down"],[t,"sad"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s<t-.5?55:12,40],head:-10})}),ze({x:-.5,z:-1,eyes:[[0,"sad"]]})],extra:i=>{Ut(i);let s=_t(i,["NO VA A VENIR NADIE M\xC1S,","\xBFVERDAD?"],1.4,[.9,2.15,-1.3],46),r=ct(i,["MUY BAJITO"],1,[.4,.9,-.8]);return{update:(o,a,l)=>{V(r,o,U(e,"bajito")-.2,t-.2,l),V(s,o,t-.2,99,l)}}},c:[[0,1.6,2.4],[0,1.4,-1.2],[0,1.55,2.1],[0,1.4,-1.2]],range:3}}]);le(30,(n,e)=>{let t=U(e,"riendo"),i=U(e,"lunes"),s=U(e,"vergonzoso"),r=[[-2.2,-1.2],[-1.4,-1.8],[1.4,-1.8],[2.2,-1.2],[-2.8,-.4],[2.8,-.4]];return{amb:"gris",fov:34,k:1,atores:[ze({x:0,z:-.2,eyes:[[0,"sad"],[s,"shut"]],pose:(o,a)=>o.pose({armL:[20,10],armR:[20,10],head:-10,bob:-.02})}),...r.map(([o,a],l)=>Wt(l,{x:o,z:a,eyes:[[0,"happy"]],pose:(c,h)=>h>t-.3+l*.3?c.pose({armL:[12,8],armR:[95,0],bob:Math.abs(Math.sin(h*10+l))*.04}):c.pose()}))],extra:(o,a,l)=>{let c=r.map(([d,u],f)=>Pe(o,["JA JA"],.6,[d,2.2,u+.2],{bg:"#FBF7EC",fg:"#2A2A34",size:80,w:330})),h=rt(o,e,[[["TODO EL MUNDO SE R\xCDE"],t,"w",[0,2.75,-.3],2.1],[["EL LUNES LO SABR\xC1 TODA LA CLASE"],i,"y",[0,2.75,-.3],2.6],[["LO M\xC1S VERGONZOSO DEL MUNDO"],s-.3,"r",[0,2.75,-.3],2.6,1]]);return{update:(d,u,f)=>{c.forEach((g,E)=>V(g,d,t+E*.3,99,f)),h(d,f),gf(f,d>s-.3&&d<s+.3?.02:0,d)}}},c:[[0,1.8,5],[0,1.4,-.8],[0,1.7,4.2],[0,1.4,-.8]],range:4,look:{vig:.65}}});le(31,(n,e)=>{let t=U(e,"ciencia"),i=U(e,"experimento");return{amb:"gris",fov:30,k:1,atores:[Ph({x:1.6,z:-.4,eyes:[[0,"look"],[i,"happy"]],pose:(s,r)=>r>i?Zt(s,r):Ui(s)})],extra:s=>{let r=rt(s,e,[[["LA CIENCIA"],t-.2,"y",[-.9,2.2,-.3],1.3],[["THOMAS GILOVICH"],U(e,"thomas"),"w",[-.9,2.2,-.3],1.6],[["UN EXPERIMENTO MUY CURIOSO"],i,"p",[-.9,2.2,-.3],2.2,1]]),o=yn(s,10,"#FFE27A");return{update:(a,l,c)=>{r(a,c),o(a,[.9,1.6,-.3,.9])}}},c:[[0,1.6,4],[0,1.5,-.4],[0,1.6,3.5],[0,1.5,-.4]],range:3}});kn(32,["entraran"],[(n,e)=>{let t=U(e,"camiseta");return{amb:"gris",fov:30,k:1,atores:[Wt(1,{x:0,z:-.3,eyes:[[0,"look"],[t+.4,"wide"]],pose:(i,s)=>{s>t&&Na(i),i.pose({armL:[12,8],armR:[12,8]})}}),Ph({x:-1.5,z:-.5,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[80,20]})})],extra:i=>{let s=rt(i,e,[[["UNA CAMISETA MUY VERGONZOSA"],t,"r",[0,2.4,-.2],2.4],[["UN CANTANTE PASADO DE MODA"],U(e,"cantante"),"w",[0,2.4,-.2],2.3,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.5,3.2],[-.3,1.3,-.3],[0,1.45,2.6],[-.1,1.2,-.3]],range:3}},(n,e)=>{let t=[[-2,-1.4],[-1.2,-1.8],[-.4,-2],[.6,-1.9],[1.5,-1.6],[2.3,-1.2],[-2.6,-.6],[2.8,-.5]];return{...oo(),atores:[Wt(1,{x:0,z:.4,eyes:[[0,"wide"]],move:i=>[bt(-3.6,0,st(0,2.2,i)),0,.4],pose:(i,s)=>{Na(i),s<2.2?i.walk(s*2):i.pose({head:-8})}}),...t.map(([i,s],r)=>Wt(r+2,{x:i,z:s,eyes:[[0,r%2?"look":"lookl"]]}))],extra:i=>{let s=ct(i,["UNA SALA LLENA DE GENTE"],2.2,[0,2.7,-.6]);return{update:(r,o,a)=>V(s,r,U(e,"sala")-.2,99,a)}},c:[[0,2,4.8],[0,1.3,-1],[0,1.95,4.3],[0,1.3,-1]],range:4}}]);le(33,(n,e)=>{let t=U(e,"mitad");return{amb:"gris",fov:30,k:1,atores:[Wt(1,{x:-1.4,z:-.3,eyes:[[0,"sad"]],pose:i=>{Na(i),i.pose({armL:[12,8],armR:[12,8],head:-8})}})],extra:i=>{let s=oi(i,["\xA1ME MIRA","MEDIA SALA!"],1.4,[-.6,2.2,-.4]),r=Mr(i,[["CRE\xCDAN",.5,"#E8667F"]],1.9,[.9,1.45,-.5],{title:"SE FIJAR\xCDAN"}),o=Pe(i,["LA MITAD"],1,[.9,2.3,-.3],Mn);return{update:(a,l,c)=>{V(s,a,.2,99,c),V(r,a,t-.5,99,c),V(o,a,t-.2,99,c)}}},c:[[-.2,1.6,4],[-.2,1.6,-.4],[-.2,1.6,3.5],[-.2,1.6,-.4]],range:3}});le(34,(n,e)=>{let t=U(e,"uno");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=Mr(i,[["CRE\xCDAN",.5,"#E8667F"],["DE VERDAD",.02,"#43C4B4"]],2.4,[0,1.55,-.5],{title:"SE FIJARON"}),r=Mr(i,[["CRE\xCDAN",.5,"#E8667F"],["DE VERDAD",.25,"#43C4B4"]],2.4,[0,1.55,-.49],{title:"SE FIJARON"}),o=ct(i,["\xBFDE VERDAD?"],1.2,[0,2.6,-.4]),a=Pe(i,["1 DE CADA 4"],1.2,[0,2.6,-.4],ao);return{update:(l,c,h)=>{V(s,l,.1,t-.2,h),V(r,l,t-.2,99,h),V(o,l,.1,t-.2,h),V(a,l,t-.2,99,h)}}},c:[[0,1.7,3.9],[0,1.7,-.5],[0,1.7,3.4],[0,1.7,-.5]],range:3}});le(35,(n,e)=>{let t=U(e,"foco"),i=U(e,"casi"),s=U(e,"cada"),r=[[-2,-1],[-1.1,-1.6],[1.1,-1.6],[2,-1]],o=["\xBFY MI PELO?","MIS DEBERES\u2026","\xBFHAY PIZZA?","MI M\xD3VIL\u2026"];return{amb:"gris",fov:34,k:1,atores:[Wt(1,{x:0,z:-.2,eyes:[[0,"wide"],[s,"look"]],pose:a=>{Na(a),a.pose()}}),...r.map(([a,l],c)=>Wt(c+3,{x:a,z:l,eyes:[[0,"look"],[i,c%2?"lookl":"look"],[s,"flat"]],pose:h=>h.pose({head:c%2?15:-15})}))],extra:a=>{let[l,c]=Mf(a,0,-.2),h=rt(a,e,[[["EL EFECTO FOCO"],t-.2,"y",[0,2.8,-.4],1.6],[["CREES QUE TODOS TE MIRAN"],U(e,"creemos"),"w",[0,2.8,-.4],2.2],[["CASI NADIE SE DA CUENTA"],i,"p",[0,2.8,-.4],2.2,1]]),d=r.map(([u,f],g)=>oi(a,[o[g]],1,[u,2.1,f+.1],{size:54}));return{update:(u,f,g)=>{h(u,g),d.forEach((E,m)=>V(E,u,s+m*.35,99,g))}}},c:[[0,1.8,5],[0,1.4,-.8],[0,1.75,4.5],[0,1.4,-.8]],range:4,look:{vig:.6}}});var Sr={y:-.78},Gn=[[0,1.3,2.8],[0,.95,-.6],[0,1.25,2.4],[0,.95,-.6]],cf=(n,e,t)=>{let i=new k(new qe(.14,.12,.03,18),x("#FBF7EC"));i.position.set(e,.02,t),n.add(i);let s=w(.12,.08,.1,x("#F6D8E4"),e,.07,t);n.add(s),n.add(w(.12,.02,.1,x("#E8667F"),e,.12,t))},Dn=(n={},e={},t=0)=>[Nt({x:-.5+t*.15,z:-.6,...Sr,eyes:[[0,"happy"]],...e,pose:(i,s)=>{qt(i),(e.p2||(r=>r.pose({armL:[12,8],armR:[40,60]})))(i,s)}}),ze({x:.5-t*.15,z:-.6,...Sr,eyes:[[0,"happy"]],...n,pose:(i,s)=>{qt(i),(n.p2||(r=>r.pose({armL:[40,60],armR:[12,8]})))(i,s)}})],un=n=>{let e=Ut(n,{globos:20});return cf(n,-.15,-.25),cf(n,.2,-.3),e};le(36,(n,e)=>{let t=U(e,"ninguno");return{...tt,fov:36,atores:[Nt({x:-.5,z:-.6,eyes:[[0,"sad"]]}),ze({x:.3,z:-.4,eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{let s=Ut(i),r=rt(i,e,[[["\xBFCU\xC1NTOS PENSAR\xC1N EN ESTO EL LUNES?"],U(e,"cuantos"),"w",[0,2.55,-.5],3],[["CASI NINGUNO"],t-.2,"y",[0,2.55,-.5],1.4,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:[[0,2.3,4.6],[0,1.3,-1],[0,2.2,4.1],[0,1.3,-1]],range:5}});Ln(37,19,"19:15","DOS OPCIONES");le(38,(n,e)=>{let t=U(e,"llorar");return{...tt,fov:30,atores:[Nt({x:1,z:-1.4,eyes:[[0,"down"],[t-.5,"sad"]],pose:(i,s)=>i.pose({armL:[40+Math.sin(s*3)*15,50],armR:[40+Math.cos(s*3)*15,50],head:-12,lean:6})})],extra:(i,s,r)=>{let o=Ut(i),a=new k(new qe(.045,.04,.2,12),x("#43C4B4"));i.add(a);let l=rt(i,e,[[["LOS VASOS SIN USAR"],"vasos","w",[1,2.3,-1.2],1.7],[["A PUNTO DE LLORAR"],t-.3,"p",[1,2.3,-1.2],1.7,1]]),c=lt("#9FD0FF",.12,0);return i.add(c),{update:(h,d,u)=>{o(h),Ba(a,r[0],-.05),l(h,u);let f=(h-t)*.8%1;c.material.opacity=h>t?.9*(1-f):0;let g=new I;r[0].head.getWorldPosition(g),c.position.set(g.x+.12,g.y-.05-f*.3,g.z+.3)}}},c:[[.6,1.6,1.6],[.9,1.4,-1.5],[.6,1.55,1.3],[.9,1.4,-1.5]],range:3}});le(39,(n,e)=>{let t=U(e,"bueno"),i=U(e,"quedarte");return{amb:"gris",fov:32,k:1,atores:[ze({x:0,z:-.2,eyes:[[0,"look"],[t,"lookl"],[i,"look"]],pose:(s,r)=>s.pose({head:r<t?0:r<i?20:-20})})],extra:s=>{LE(s,-1.8,-1);let r=ri(s,"#E8667F");r.position.set(1.8,1.9,-.8),wr(s,[0,2.4,1],5,6);let o=Pe(s,["IRTE"],.9,[-1.8,2.5,-.8],Mn),a=Pe(s,["QUEDARTE"],1.2,[1.8,2.5,-.8],Fs),l=_t(s,["BUENO, YO ME VOY,","QUE ES TARDE\u2026"],1.5,[-.6,2.15,-.3],50),c=ct(s,["DOS OPCIONES"],1.4,[0,2.75,-.4]);return{update:(h,d,u)=>{co(r,h,0,1.9),V(c,h,.1,t-.2,u),V(l,h,t-.1,i-.2,u),V(o,h,.4,99,u),V(a,h,.7,99,u),o.scale.multiplyScalar(h>t&&h<i?1.15:1),a.scale.multiplyScalar(h>i?1.2:1)}}},c:[[0,1.7,4.4],[0,1.6,-.6],[0,1.65,3.9],[0,1.6,-.6]],range:3}});le(40,(n,e)=>({...tt,fov:30,atores:[ze({x:0,z:-.6,eyes:[[0,"happy"]],pose:t=>t.pose({armL:[12,8],armR:[12,8],lean:-3})})],extra:t=>{Ut(t);let i=Pe(t,["TE QUEDAS"],1.5,[0,2.3,-.5],Fs),s=yn(t,10,"#FFE27A");return{update:(r,o,a)=>{V(i,r,.05,99,a),s(r,[0,1.5,-.5,1])}}},c:[[0,1.6,2.6],[0,1.6,-.6],[0,1.6,2.2],[0,1.6,-.6]],range:3}));le(41,(n,e)=>{let t=U(e,"pintas"),i=U(e,"gorro");return{...tt,fov:30,atores:[ze({x:-.2,z:-.6,eyes:[[0,"look"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t&&r<i?75+Math.sin(r*14)*6:50,30]})}),Nt({x:-1.6,z:-1,eyes:[[0,"sad"],[i,"look"]]})],extra:s=>{Ut(s);let r=ri(s,"#E8667F",{hilo:!1}),o=ri(s,"#E8667F",{cara:1,hilo:!1}),a=ri(s,"#E8667F",{cara:1,gorro:"#43C4B4",hilo:!1}),l=new k(new qe(.02,.02,.22,8),x("#1A1A24"));l.rotation.z=.8,s.add(l);let c=rt(s,e,[[["COGES UN GLOBO"],0,"w",[.3,2.25,-.5],1.5],[["LE PINTAS UNA CARA"],t,"y",[.3,2.25,-.5],1.7],[["Y UN GORRO DE FIESTA"],i,"p",[.3,2.25,-.5],1.9,1]]);return{update:(h,d,u)=>{let f=h<t+.8?0:h<i?1:2;[r,o,a].forEach((g,E)=>{g.visible=E===f,g.position.set(.45,1.45+Math.sin(h*2)*.03,-.4)}),l.visible=h>t-.2&&h<i,l.position.set(.3+Math.sin(h*14)*.04,1.5,-.15),c(h,u)}}},c:[[0,1.6,2.6],[0,1.45,-.6],[0,1.6,2.2],[0,1.45,-.6]],range:3}});le(42,(n,e)=>{let t=U(e,"ha"),i=U(e,"tiene");return{...tt,fov:30,atores:[ze({x:.6,z:-.6,eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[75,20],bob:Math.abs(Math.sin(r*6))*.02})}),Nt({x:-.9,z:-.8,eyes:[[0,"sad"],[i,"look"]]})],extra:s=>{Ut(s);let r=ri(s,"#E8667F",{cara:1,gorro:"#43C4B4",hilo:!1}),o=[_t(s,["ESTE ES PACO"],1.2,[1,2.35,-.5],64),_t(s,["HA VENIDO A","TU CUMPLEA\xD1OS"],1.4,[1,2.35,-.5],56),_t(s,["Y TIENE HAMBRE"],1.3,[1,2.35,-.5],60)],a=Pe(s,["PACO"],.7,[.05,.95,-.2],lo);return{update:(l,c,h)=>{r.position.set(.05+Math.sin(l*5)*.06,1.5+Math.abs(Math.sin(l*5))*.08,-.4),r.rotation.z=Math.sin(l*5)*.2,V(o[0],l,.05,t-.2,h),V(o[1],l,t-.2,i-.2,h),V(o[2],l,i-.2,99,h),V(a,l,.3,99,h)}}},c:[[0,1.6,2.8],[0,1.45,-.6],[0,1.6,2.4],[0,1.45,-.6]],range:3}});le(43,(n,e)=>{let t=U(e,"primera");return{...tt,fov:30,atores:[Nt({x:-.3,z:-.8,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[60,70],armR:[60,70],bob:Math.abs(Math.sin(s*9))*.04,lean:Math.sin(s*4)*5})})],extra:i=>{Ut(i);let s=ri(i,"#E8667F",{cara:1,gorro:"#43C4B4",hilo:!1});s.position.set(.7,1.5,-.6);let r=Pe(i,["JAJAJA"],.9,[-.3,2.3,-.7],Ei),o=ct(i,["POR PRIMERA VEZ EN TODA LA TARDE"],2.2,[0,.8,-.2]),a=yn(i,12,"#FFE27A");return{update:(l,c,h)=>{co(s,l,1,1.5),V(r,l,.1,99,h),V(o,l,t-.2,99,h),a(l,[-.3,1.6,-.7,.9])}}},c:[[0,1.6,2.6],[0,1.4,-.7],[0,1.6,2.2],[0,1.4,-.7]],range:3,look:{bloom:.45}}});Ln(44,20,"20:00","LA FIESTA DE VERDAD");le(45,(n,e)=>{let t=U(e,"llenais");return{...tt,fov:38,atores:[ze({x:-1.6,z:-.6,eyes:[[0,"happy"]],move:i=>[-1.6+Math.sin(i*2)*.4,0,-.6+Math.cos(i*2)*.4],pose:(i,s)=>i.walk(s*2)}),Nt({x:1.6,z:-.6,eyes:[[0,"happy"]],move:i=>[1.6+Math.sin(i*2+2)*.4,0,-.6+Math.cos(i*2+2)*.4],pose:(i,s)=>i.walk(s*2)})],extra:i=>{let s=Ut(i,{globos:20}),r=xr(i,[0,2.6,-.6],1.8,o=>`${Math.round(20*st(t-.5,n-.2,o))} / 20`,{w:700,h:200,size:120});return{update:(o,a,l)=>{s(o,1,Math.round(20*st(t-.5,n-.2,o))),r.userData.upd(o)}}},c:[[0,3.8,5.2],[0,.7,-.6],[0,3.5,4.7],[0,.7,-.6]],range:6}});le(46,(n,e)=>{let t=U(e,"paco"),i=U(e,"lola"),s=U(e,"profe");return{...tt,fov:32,atores:[],extra:r=>{let o=Ut(r,{globos:20}),a=(h,d,u)=>Pe(r,[h],h.length>6?1.4:.8,[Fh[d][0]+.6,1.75,Fh[d][1]],u),l=[a("PACO",0,lo),a("LOLA",1,{bg:"#F2C14E",fg:"#2A2A34"}),a("EL PROFE DE MATES",2,Mn)],c=ct(r,["CON CARAS \xB7 CON NOMBRES"],2,[-1.6,2.5,-1]);return{update:(h,d,u)=>{o(h),V(c,h,.1,t-.2,u),V(l[0],h,t-.1,99,u),V(l[1],h,i-.1,99,u),V(l[2],h,s-.1,99,u)}}},cam:[[0,[-.6,2,2.6],[-2.2,1.1,-1]],[U(e,"paco"),[-1.4,1.7,.6],[-2.9,1,-2]],[U(e,"lola"),[-1.4,1.7,1.2],[-2.9,1,-1.2]],[U(e,"profe"),[-1.4,1.65,1.9],[-2.9,1,-.4]],[n,[-1.5,1.6,2.1],[-2.9,1,-.4]]],f:[[0,4],[n,3]],range:4}});le(47,(n,e)=>({...tt,fov:36,atores:[ze({x:.3,z:-1.2,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[50+Math.sin(i*6)*20,40],armR:[50-Math.sin(i*6)*20,40],head:Math.sin(i*3)*8})}),Nt({x:1,z:-1.4,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[50-Math.sin(i*6)*20,40],armR:[50+Math.sin(i*6)*20,40],head:-Math.sin(i*3)*8})})],extra:(t,i,s)=>{let r=Ut(t,{globos:20}),o=mf(t,8),a=Pe(t,["\u266A CUMPLEA\xD1OS FELIZ \u266A"],2,[.6,2.6,-1.2],lo),l=ct(t,["CON UN CORO DE GLOBOS"],2,[.6,.45,-.4]);return{update:(c,h,d)=>{r(c),o(c,s[0].root.position,d),V(a,c,.1,99,d),V(l,c,U(e,"coro")-.2,99,d)}}},c:[[0,2.2,4.6],[.3,1.2,-1.2],[0,2.1,4.1],[.3,1.2,-1.2]],range:5}));le(48,(n,e)=>{let t=U(e,"sopla")+.4,i=U(e,"deseo");return{...tt,fov:30,atores:[Nt({x:1.75,z:-1.35,eyes:[[0,"look"],[t-.2,"shut"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[12,8],lean:r>t-.3&&r<t+.6?12:0})})],extra:s=>{let r=Ut(s,{globos:20}),o=yn(s,14,"#FFE27A"),a=Oa(s,["PIDE UN DESEO"],1.4,[1.75,2.35,-1.3]);return{update:(l,c,h)=>{r(l,1-st(t,t+.3,l)),V(a,l,i-.2,99,h),o(l,[1.75,1.5,-1.6,.7],l>i?1:0)}}},c:[[1.6,1.5,1],[1.75,1.15,-1.9],[1.6,1.45,.7],[1.75,1.15,-1.9]],range:3,look:{bloom:.5}}});le(49,(n,e)=>{let t=U(e,"auriculares");return{...tt,fov:30,atores:[Nt({x:-1.45,...ai,eyes:[[0,"look"],[t,"wide"]],pose:i=>{qt(i),Ui(i)}}),ze({x:-.55,...ai,eyes:[[0,"look"]],pose:i=>{qt(i),i.pose({head:10})}})],extra:(i,s,r)=>{Ut(i,{globos:20});let o=Rr(i,"#43C4B4",.36),a=Ga(i,1.3),l=Pe(i,["AURICULARES DE GATO"],1.8,[-1,2,-2],Ei);return{update:(c,h,d)=>{let u=Ni(r[0]);o.position.set(-1.45,.5,-1.55),o.visible=c<t-.2,a.visible=!o.visible,a.position.set(-1.45,.72,-1.55),a.rotation.y=Math.sin(c*1.5)*.4,V(l,c,t,99,d)}}},c:[[-1,1.4,.9],[-1,1.1,-2.2],[-1,1.35,.6],[-1,1.1,-2.2]],range:3}});le(50,(n,e)=>{let t=U(e,"rojo"),i=U(e,"tambien");return{...tt,fov:30,atores:[Nt({x:-1.45,...ai,eyes:[[0,"look"],[i,"happy"]],pose:s=>{qt(s),Ui(s)}}),ze({x:-.55,...ai,eyes:[[0,"lookl"],[t,"shut"]],pose:s=>{qt(s),s.pose({head:10})}})],extra:(s,r,o)=>{Ut(s,{globos:20});let a=Ga(s,1.3),l=xh(o[0]),c=xh(o[1]),h=_t(s,["\xBFTE ACORDABAS DE","LO DE LOS GATOS?"],1.5,[-1.9,2.05,-2],52);return{update:(d,u,f)=>{a.position.set(-1.45,.72,-1.55),V(h,d,.05,t-.2,f),c(st(t-.2,t+.4,d)),l(st(i-.2,i+.4,d))}}},c:[[-1,1.4,.9],[-1,1.15,-2.2],[-1,1.35,.6],[-1,1.15,-2.2]],range:3}});le(51,(n,e)=>{let t=U(e,"movil"),i=U(e,"salto"),s=U(e,"sera");return{...tt,fov:30,atores:[Nt({x:-1.45,...ai,eyes:[[0,"happy"],[t,"wide"],[s,"look"]],move:r=>[-1.45,-.2+(r>i&&r<i+.5?Math.sin((r-i)/.5*Math.PI)*.2:0),-2.2],pose:r=>{qt(r),Ui(r)}}),ze({x:-.55,...ai,eyes:[[0,"happy"],[s,"look"]],pose:(r,o)=>{qt(r),r.pose({head:o>s?-20:10})}})],extra:(r,o,a)=>{Ut(r,{globos:20});let l=Ha(["MENSAJE NUEVO"],{hora:"20:21"});l.scale.setScalar(.25),r.add(l);let c=Pe(r,["\xA1BZZZ!"],.8,[-1.9,2,-2],Mn),h=oi(r,["\xBFVIENE ALGUIEN?"],1.3,[-1.6,1.9,-2]);return{update:(d,u,f)=>{Ba(l,a[0],.05),l.position.x+=d>t&&d*12%1<.5?.01:0,En(l,f),V(c,d,t,s-.2,f),V(h,d,s-.2,99,f)}}},c:[[-1,1.4,1],[-1,1.15,-2.2],[-1,1.35,.7],[-1,1.15,-2.2]],range:3}});le(52,(n,e)=>{let t=U(e,"felicidades"),i=U(e,"que");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=as(s,[0,1.5,-.5],1.15,[["l","\xA1Felicidades, cari\xF1o!",t-.3],["l","\xBFQu\xE9 tal la fiesta?",i-.3]],{hora:"20:21",name:"ABUELA \u2665"}),o=Pe(s,["ES SU ABUELA"],1.3,[1.2,2.45,-.3],{bg:"#1E2230",fg:"#F2C14E"});return{update:(a,l,c)=>{r.userData.upd(a),V(o,a,U(e,"abuela")-.2,99,c)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});kn(53,["contesta"],[(n,e)=>{let t=U(e,"tu");return{...tt,fov:30,atores:[Nt({x:-1.45,...ai,eyes:[[0,"look"]],pose:i=>{qt(i),Ui(i)}}),ze({x:-.55,...ai,eyes:[[0,"look"],[t,"lookl"]],pose:i=>{qt(i),i.pose({head:10})}})],extra:i=>(Ut(i,{globos:20}),{}),c:[[-1,1.35,.7],[-1,1.2,-2.2],[-1,1.35,.5],[-1,1.2,-2.2]],range:3}},(n,e)=>{let t=U(e,"muchisima");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=as(i,[-.3,1.5,-.5],1.15,[["l","\xA1Felicidades, cari\xF1o!",0],["l","\xBFQu\xE9 tal la fiesta?",0],["r","Muy bien, abuela. Ha venido much\xEDsima gente.",.3]],{hora:"20:22",name:"ABUELA \u2665"}),r=Pe(i,["\xAC \xAC"],.55,[1.15,2.2,-.3],{bg:"#FBF7EC",fg:"#2A2A34",size:90,w:300});return{update:(o,a,l)=>{s.userData.upd(o),V(r,o,t,99,l)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}}]);le(54,(n,e)=>{let t=U(e,"foto"),i=U(e,"veinte");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=as(s,[-.4,1.5,-.5],1.15,[["l","\xBFQu\xE9 tal la fiesta?",0],["r","Muy bien, abuela. Ha venido much\xEDsima gente.",0],["r","[ FOTO ]",t]],{hora:"20:22",name:"ABUELA \u2665"}),o=Tf(s,JE(),1.3);o.position.set(1.1,1.6,-.3);let a=ct(s,["T\xDA + 20 GLOBOS"],1.4,[1.1,.9,-.2]);return{update:(l,c,h)=>{r.userData.upd(l),V(o,l,t+.2,99,h),V(a,l,i-.2,99,h)}}},c:[[.2,1.5,4.3],[.2,1.5,-.5],[.2,1.5,3.8],[.2,1.5,-.5]],range:2,blur:4}});Ln(55,20,"20:30","DE VERDAD");le(56,(n,e)=>{let t=U(e,"verdad");return{...tt,fov:30,atores:Dn({p2:(i,s)=>i.pose({armL:[12,8],armR:[60+Math.sin(s*4)*25,70]})},{p2:(i,s)=>i.pose({armL:[60+Math.cos(s*4)*25,70],armR:[12,8]})}),extra:i=>{let s=un(i),r=rt(i,e,[[["TARTA CON LOS DEDOS"],"tarta","w",[0,1.6,-.5],1.8],[["Y HABL\xC1IS\u2026"],"hablar","y",[0,1.6,-.5],1.2],[["DE VERDAD"],t-.2,"p",[0,1.6,-.5],1.2,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:Gn,range:3}});kn(57,["vez"],[(n,e)=>({...tt,fov:30,atores:Dn({p2:Zt},{}),extra:t=>{let i=un(t),s=za(t,e,[[["\xBFQU\xC9 QUER\xC9IS SER","DE MAYORES?"],"mayores",[0,1.6,-.5],1.7],[["LO QUE OS DA MIEDO"],"miedo",[0,1.6,-.5],1.6]],{keep:!1});return{update:(r,o,a)=>{i(r),s(r,a)}}},c:Gn,range:3}),(n,e)=>{let t=U(e,"cayo"),i=U(e,"rio"),s=[[-2,1.2],[-1,1.4],[0,1.5],[1,1.4],[2,1.2]];return{amb:"concurso",fov:32,atores:[mE({x:0,z:-.6,y:1.15,eyes:[[0,"happy"],[t,"wide"]],pose:(r,o)=>r.pose({armL:[o>t?150:12,40],armR:[o>t?150:12,40],lean:o>t?Math.min(70,(o-t)*160):0})}),...s.map(([r,o],a)=>Wt(a,{x:r,z:o,s:.66,eyes:[[0,"look"],[i-.3,"happy"]],pose:(l,c)=>c>i-.3?l.pose({bob:Math.abs(Math.sin(c*10+a))*.03}):l.pose()}))],extra:r=>{let o=ct(r,["FUNCI\xD3N DE FIN DE CURSO"],2.2,[0,2.9,-.6]),a=Pe(r,["JAJAJA"],.9,[1.5,1.9,1.3],{bg:"#FBF7EC",fg:"#2A2A34"});return{update:(l,c,h)=>{V(o,l,.1,99,h),V(a,l,i-.2,99,h)}}},c:[[0,2,5.2],[0,1.4,-.6],[0,1.95,4.7],[0,1.4,-.6]],range:4,look:Dh}}]);le(58,(n,e)=>{let t=U(e,"preguntas");return{...tt,fov:30,atores:Dn({p2:(i,s)=>s>t?Zt(i,s):i.pose({armL:[40,60],armR:[12,8]})},{p2:(i,s)=>s<t?Zt(i,s):i.pose({armL:[12,8],armR:[40,60]})}),extra:i=>{let s=un(i),r=_t(i,["\xBFTU RECUERDO","M\xC1S BONITO?"],1.2,[-.9,1.6,-.5],56),o=_t(i,["\xBFAD\xD3NDE VIAJAR\xCDAS?"],1.3,[.9,1.6,-.5],56);return{update:(a,l,c)=>{s(a),V(r,a,.1,t-.1,c),V(o,a,t-.1,99,c)}}},c:Gn,range:3}});kn(59,["dices"],[(n,e)=>({amb:"gris",fov:32,k:1,atores:[Nt({x:-.4,z:-.3,eyes:[[0,"happy"]],pose:t=>t.pose({armL:[12,8],armR:[130,30]})}),ze({x:.4,z:-.3,eyes:[[0,"heart"]]})],extra:t=>{[[-2.4,-1.6,1.2],[2.4,-1.6,1.2],[-1.3,-2.6,1],[1.3,-2.6,1],[0,-3.4,.9]].forEach(([r,o,a],l)=>cn(t,r,o,a,$E,l));let i=yn(t,22,"#FFC0D8"),s=Pe(t,["JAP\xD3N \xB7 LOS CEREZOS EN FLOR"],2.4,[0,2.6,-.4],Ei);return{update:(r,o,a)=>{i(r,[0,1.8,-.8,2.2]),V(s,r,.2,99,a)}}},c:[[0,1.6,4.4],[0,1.4,-.6],[0,1.6,3.9],[0,1.4,-.6]],range:4,look:yE}),(n,e)=>{let t=U(e,"nunca");return{...tt,fov:30,atores:Dn({eyes:[[0,"happy"],[t,"lookl"]],p2:pf},{}),extra:i=>{let s=un(i),r=_t(i,["\xA1YO TAMBI\xC9N!"],1.1,[.9,1.6,-.5],64),o=ct(i,["(NUNCA LO HAB\xCDAS PENSADO)"],2.2,[0,1.6,-.5]);return{update:(a,l,c)=>{s(a),V(r,a,.05,t-.2,c),V(o,a,t-.1,99,c)}}},c:Gn,range:3}}]);le(60,(n,e)=>{let t=U(e,"cerca");return{...tt,fov:30,atores:[Nt({x:-.5,z:-.6,...Sr,eyes:[[0,"happy"]],move:i=>[bt(-.5,-.28,st(1,t+.5,i)),-.78,-.6],pose:i=>{qt(i),i.pose({armL:[12,8],armR:[40,60]})}}),ze({x:.5,z:-.6,...Sr,eyes:[[0,"happy"]],move:i=>[bt(.5,.28,st(1,t+.5,i)),-.78,-.6],pose:i=>{qt(i),i.pose({armL:[40,60],armR:[12,8]})}})],extra:i=>{let s=un(i),r=rs(i,.35);r.position.set(0,1.5,-.5);let o=rt(i,e,[[["CUANTO M\xC1S HABL\xC1IS\u2026"],"cuanto","w",[0,1.7,-.5],1.9],[["M\xC1S CERCA"],t-.2,"p",[0,1.7,-.5],1.2,1]]);return{update:(a,l,c)=>{s(a),o(a,c),r.visible=a>t,r.scale.setScalar(os(a)),En(r,c)}}},c:Gn,range:3,look:{bloom:.45}}});var hf=n=>fe(512,640,e=>{e.fillStyle="#FBF7EC",e.fillRect(0,0,512,640),e.fillStyle="#2A2A34",e.font="900 40px Inter",e.textAlign="center",e.fillText("PREGUNTAS",256,60),e.textAlign="left",e.font="700 30px Inter";for(let t=0;t<9;t++)e.fillStyle=t<n?"#2A2A34":"#C8C0B0",e.fillText(`${t*4+1}.`,30,120+t*58),e.fillStyle=t<3?"#7BC86A":t<6?"#F2C14E":"#E8667F",e.fillRect(90,100+t*58,360-t*37%120,22)});kn(61,["junto","primeras"],[(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ph({x:.9,z:-.4,eyes:[[0,"happy"]],pose:Ui})],extra:t=>{let i=Pe(t,["TAMBI\xC9N LO ESTUDI\xD3 LA CIENCIA"],2.4,[-.6,2.3,-.3],{bg:"#1E2230",fg:"#F2C14E"}),s=ct(t,["ARTHUR ARON"],1.3,[-.6,1.6,-.3]);return{update:(r,o,a)=>{V(i,r,.1,99,a),V(s,r,U(e,"arthur")-.2,99,a)}}},c:[[0,1.6,4],[0,1.5,-.4],[0,1.6,3.5],[0,1.5,-.4]],range:3}),(n,e)=>{let t=U(e,"lista");return{amb:"gris",fov:30,k:1,atores:[Wt(2,{x:-1,z:-.4,eyes:[[0,"lookl"]],pose:i=>i.pose({head:20})}),Wt(5,{x:1,z:-.4,eyes:[[0,"look"]],pose:i=>i.pose({head:-20})})],extra:i=>{vf(i,0,-.2,.8,1.2,.7);let s=Fe(hf(9),.8,1);s.position.set(0,1.55,-.1),s.renderOrder=5,i.add(s);let r=rt(i,e,[[["DESCONOCIDOS, EN PAREJAS"],"desconocidos","w",[0,2.6,-.3],2.1],[["UNA LISTA DE PREGUNTAS"],t,"y",[0,2.6,-.3],2.1,1]]);return{update:(o,a,l)=>{V(s,o,t-.2,99,l),r(o,l)}}},c:[[0,1.6,4.2],[0,1.45,-.3],[0,1.6,3.7],[0,1.45,-.3]],range:3}},(n,e)=>{let t=U(e,"ultimas");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=Fe(hf(9),1.4,1.75);s.position.set(-.7,1.55,-.5),s.renderOrder=4,i.add(s);let r=rt(i,e,[[["F\xC1CILES"],0,"w",[1,2.1,-.3],1],[["MUY PERSONALES"],t,"p",[1,1.2,-.3],1.5,1]]),o=Pe(i,["F\xC1CILES"],1,[1,2.1,-.3],Fs);return{update:(a,l,c)=>{V(o,a,.1,99,c),r(a,c)}}},c:[[.1,1.6,3.8],[.1,1.6,-.5],[.1,1.6,3.3],[.1,1.6,-.5]],range:3}}]);le(62,(n,e)=>{let t=U(e,"minutos"),i=U(e,"cercanas");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=xr(s,[0,2.5,-.4],1.3,a=>`${Math.round(45*st(.2,t+.3,a))} MIN`,{w:600,h:200,size:120}),o=Mr(s,[[`PREGUNTAS
PERSONALES`,.9,"#E8667F"],[`CHARLA SIN
IMPORTANCIA`,.35,"#8AA8C8"]],2.1,[0,1.45,-.5],{title:"CERCAN\xCDA"});return{update:(a,l,c)=>{r.userData.upd(a),V(o,a,i-.4,99,c)}}},c:[[0,1.75,4],[0,1.6,-.5],[0,1.75,3.5],[0,1.6,-.5]],range:3}});le(63,(n,e)=>{let t=U(e,"turnos");return{...tt,fov:30,atores:Dn({p2:(i,s)=>Math.floor(s*1.2)%2?Zt(i,s):i.pose({armL:[40,60],armR:[12,8]})},{p2:(i,s)=>Math.floor(s*1.2)%2?i.pose({armL:[12,8],armR:[40,60]}):Zt(i,s)},.8),extra:i=>{let s=un(i),r=rt(i,e,[[["POCO A POCO"],0,"w",[0,1.7,-.5],1.3],[["POR TURNOS"],t-.2,"y",[0,1.7,-.5],1.2],[["ACERCA A LAS PERSONAS"],"acerca","p",[0,1.7,-.5],2,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:Gn,range:3}});Ln(64,21,"21:00","SE TE ESCAPA");le(65,(n,e)=>{let t=U(e,"nunca");return{...tt,fov:30,atores:Dn({eyes:[[0,"wide"],[t,"look"]],p2:(i,s)=>s>t?Zt(i,s):i.pose({armL:[12,8],armR:[100,120]})},{eyes:[[0,"look"]]},.8),extra:i=>{let s=un(i),r=rt(i,e,[[["\xA1SE TE ESCAPA!"],"escapa","r",[0,1.7,-.5],1.5],[["ALGO QUE NUNCA HAS CONTADO"],t,"w",[0,1.7,-.5],2.3,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:Gn,range:3}});kn(66,["primer"],[(n,e)=>{let t=U(e,"espejo");return{...ho,fov:32,atores:[ze({x:-.6,z:-.2,eyes:[[0,"happy"]],pose:(i,s)=>Math.floor(s*.9)%2?Ua(i,s):Zt(i,s)})],extra:i=>{PE(i,.6,-1.4);let s=Fe(ME("","#A8C4D8"),.5,.65);s.position.set(.6,1.6,-1.33),s.renderOrder=3,i.add(s);let r=_t(i,["HOLA\u2026","HOLA, \xBFQU\xC9 TAL?"],1.3,[-1.1,2.3,-.2],54),o=ct(i,["DELANTE DEL ESPEJO"],1.7,[.4,2.65,-1.2]);return{update:(a,l,c)=>{V(r,a,.2,99,c),V(o,a,t-.3,99,c)}}},c:[[0,1.7,3.2],[0,1.5,-.8],[0,1.65,2.8],[0,1.5,-.8]],range:3}},(n,e)=>{let t=U(e,"hola"),i=U(e,"dos");return{...oo(),atores:[ze({x:-.6,z:.4,eyes:[[0,"happy"],[i+.4,"wide"]],pose:Ua}),Oi({x:.6,z:.3,eyes:[[0,"look"],[i+.3,"smug"]]})],extra:s=>{let r=_t(s,["HOLA."],.8,[-.9,2.25,.4],70),o=_t(s,["HOLA."],.8,[-.3,2.6,.4],70),a=Pe(s,["\xD7 2"],.7,[.9,2.3,.3],Mn),l=ct(s,["EL PRIMER D\xCDA"],1.3,[0,2.45,.4]);return{update:(c,h,d)=>{V(l,c,.05,t-.3,d),V(r,c,t-.2,99,d),V(o,c,i-.1,99,d),V(a,c,i+.3,99,d)}}},c:[[0,1.7,3.6],[0,1.5,-.2],[0,1.65,3.1],[0,1.5,-.2]],range:3,look:Dh}}]);le(67,(n,e)=>{let t=U(e,"fatal");return{...tt,fov:30,atores:Dn({eyes:[[0,"shut"]],p2:i=>i.pose({armL:[150,110],armR:[150,110],head:-12})},{eyes:[[0,"look"]]},.8),extra:i=>{let s=un(i),r=rt(i,e,[[["TE QUIERES MORIR"],0,"r",[0,1.7,-.5],1.6],[["QUEDASTE FATAL"],t-.3,"w",[0,1.7,-.5],1.5,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:Gn,range:3}});le(68,(n,e)=>{let t=U(e,"mira");return{...tt,fov:30,atores:Dn({eyes:[[0,"shut"],[t+.4,"look"]],p2:(i,s)=>i.pose({armL:[s<t?150:40,s<t?110:60],armR:[s<t?150:12,s<t?110:8]})},{eyes:[[0,"look"],[t,"heart"]]},.8),extra:i=>{let s=un(i),r=yn(i,12,"#FFB0C0"),o=rt(i,e,[[["NO SE R\xCDE"],0,"w",[0,1.7,-.5],1],[["TE MIRA DE OTRA FORMA"],t,"p",[0,1.7,-.5],2,1]]);return{update:(a,l,c)=>{s(a),o(a,c),r(a,[-.3,1,-.5,.7],a>t?1:0)}}},c:Gn,range:3,look:{bloom:.45}}});le(69,(n,e)=>{let t=U(e,"grabacion");return{amb:"gris",fov:32,k:1,atores:[[-1.6,-.4],[-.55,-.6],[.55,-.6],[1.6,-.4]].map(([s,r],o)=>Wt(o,{x:s,z:r,eyes:[[0,"look"],[t,"shut"]],pose:(a,l)=>{a.cas||(a.cas=DE(a)),pf(a,l+o)}})),extra:s=>{let r=rt(s,e,[[["OTRO ESTUDIO"],0,"y",[0,2.5,-.4],1.3],[["ELLIOT ARONSON"],U(e,"elliot"),"w",[0,2.5,-.4],1.6],[["ESCUCHAN UN CONCURSO"],t,"p",[0,2.5,-.4],2,1]]),o=mf(s,6);return{update:(a,l,c)=>{r(a,c),o(a,new I(0,1.6,-.5),c,a>t)}}},c:[[0,1.6,4.6],[0,1.45,-.4],[0,1.6,4.1],[0,1.45,-.4]],range:3}});le(70,(n,e)=>{let t=U(e,"acertaba"),i=U(e,"caia");return{amb:"concurso",fov:30,atores:[Wt(5,{x:0,z:-1.05,eyes:[[0,"happy"],[i+.3,"wide"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r<i?r>t&&r*2%1<.5?150:60:30,40],lean:r>i+.3?-6:0})})],extra:(s,r,o)=>{let a=ZE(s),l=xr(s,[1.6,2.5,-.6],1.2,u=>`\u2713 ${Math.min(9,Math.max(0,Math.floor((u-t)*3)))}`,{w:400,h:200,size:120,bg:"#2F8A5A",fg:"#fff"}),c=Fe(fe(256,256,u=>{u.clearRect(0,0,256,256),u.fillStyle="#5A3418";for(let[f,g,E]of[[128,120,70],[80,170,40],[180,160,45],[120,200,35]])u.beginPath(),u.arc(f,g,E,0,7),u.fill()}),.4,.4);c.renderOrder=5,s.add(c);let h=Pe(s,["\xA1PLAF!"],.9,[-1.2,2.3,-.6],Mn),d=ct(s,["MUY LISTO"],1.1,[-1.3,2.3,-.6]);return{update:(u,f,g)=>{let E=Ni(o[0]),m=st(i,i+.4,u);a.position.set(E.x+.05,E.y+.05-m*.45,E.z+.15),a.rotation.z=m*2.2,a.visible=u<i+.5,c.visible=u>i+.35;let p=new I;o[0].torso.getWorldPosition(p),c.position.set(p.x,p.y-.45,p.z+.25),l.userData.upd(u),l.visible=u>t,V(d,u,.1,i-.2,g),V(h,u,i+.3,99,g)}}},c:[[0,1.8,4.4],[0,1.5,-.8],[0,1.75,3.9],[0,1.5,-.8]],range:4}});le(71,(n,e)=>{let t=U(e,"mejor");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=Mr(i,[["SIN FALLO",.55,"#8AA8C8"],[`CON CAF\xC9
ENCIMA`,.9,"#F2C14E"]],2.4,[0,1.5,-.5],{title:"LES CAE BIEN"}),r=ct(i,["\xBFEL RESULTADO?"],1.4,[0,2.55,-.4]),o=Pe(i,["\xA1TODAV\xCDA MEJOR!"],1.5,[0,2.55,-.4],ao);return{update:(a,l,c)=>{V(s,a,.6,99,c),V(r,a,.05,t-.2,c),V(o,a,t-.2,99,c)}}},c:[[0,1.7,3.9],[0,1.7,-.5],[0,1.7,3.4],[0,1.7,-.5]],range:3}});le(72,(n,e)=>{let t=U(e,"humanos"),i=U(e,"cercanos");return{amb:"concurso",fov:30,atores:[Wt(5,{x:0,z:-1.05,eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[130+Math.sin(r*6)*15,30]})})],extra:(s,r,o)=>{let a=Fe(fe(256,256,h=>{h.clearRect(0,0,256,256),h.fillStyle="#5A3418";for(let[d,u,f]of[[128,120,70],[80,170,40],[180,160,45],[120,200,35]])h.beginPath(),h.arc(d,u,f,0,7),h.fill()}),.4,.4);a.renderOrder=5,s.add(a);let l=[0,1,2].map(()=>rs(s,.3)),c=rt(s,e,[[["UN PEQUE\xD1O FALLO"],0,"w",[0,2.65,-.8],1.7],[["M\xC1S HUMANOS"],t-.2,"y",[0,2.65,-.8],1.4],[["M\xC1S CERCANOS"],i-.2,"p",[0,2.65,-.8],1.4,1]]);return{update:(h,d,u)=>{let f=new I;o[0].torso.getWorldPosition(f),a.position.set(f.x,f.y-.45,f.z+.25),l.forEach((g,E)=>{g.visible=h>t,g.position.set(-1+E,1.4+Math.sin(h*2+E)*.1,-.4),g.scale.setScalar(os(h+E*.2)),En(g,u)}),c(h,u)}}},c:[[0,1.7,3.8],[0,1.6,-.8],[0,1.65,3.3],[0,1.6,-.8]],range:4}});kn(73,["cuando","demas"],[(n,e)=>({amb:"gris",fov:30,k:1,atores:[Rh(0,{x:-.7,z:-.4,eyes:[[0,"happy"]],pose:Ui}),Rh(2,{x:.7,z:-.4,eyes:[[0,"look"]],pose:Zt})],extra:t=>{let i=rt(t,e,[[["UNIVERSIDAD DE MANNHEIM"],"universidad","w",[0,2.5,-.3],2.2],[["ALGO PARECIDO"],"parecido","y",[0,2.5,-.3],1.5,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,4],[0,1.5,-.4],[0,1.6,3.5],[0,1.5,-.4]],range:3}),(n,e)=>{let t=U(e,"debil");return{amb:"gris",fov:30,k:1,atores:[ze({x:-.5,z:-.3,eyes:[[0,"look"],[t-.5,"sad"]],pose:i=>i.pose({armL:[20,10],armR:[20,10],head:-8})})],extra:i=>{let s=rt(i,e,[[["MUESTRAS TU LADO VULNERABLE"],"vulnerable","w",[0,2.4,-.3],2.5,1]]),r=oi(i,["QUEDO D\xC9BIL\u2026","O RID\xCDCULO"],1.5,[.7,2,-.4]);return{update:(o,a,l)=>{s(o,l),V(r,o,t-.4,99,l)}}},c:[[0,1.6,4],[0,1.5,-.4],[0,1.6,3.5],[0,1.5,-.4]],range:3}},(n,e)=>{let t=U(e,"valiente"),i=[[-1.8,-.8],[-1,-1.2],[1,-1.2],[1.8,-.8]];return{amb:"gris",fov:32,k:1,atores:[ze({x:0,z:-.3,eyes:[[0,"sad"],[t,"happy"]]}),...i.map(([s,r],o)=>Wt(o+1,{x:s,z:r,eyes:[[0,"look"],[t-.3,"happy"]],pose:(a,l)=>l>t-.3?gE(a,l+o):a.pose()}))],extra:s=>{let r=ct(s,["LOS DEM\xC1S VEN\u2026"],1.4,[0,2.6,-.3]),o=Pe(s,["ALGO VALIENTE"],1.6,[0,2.6,-.3],Fs),a=yn(s,14,"#FFE27A");return{update:(l,c,h)=>{V(r,l,.05,t-.3,h),V(o,l,t-.3,99,h),a(l,[0,1.5,-.3,1],l>t?1:0)}}},c:[[0,1.7,4.6],[0,1.4,-.6],[0,1.65,4.1],[0,1.4,-.6]],range:4}}]);le(74,(n,e)=>{let t=U(e,"sincero");return{...tt,fov:30,atores:Dn({eyes:[[0,"flat"],[t,"happy"]]},{eyes:[[0,"heart"]]},.8),extra:i=>{let s=un(i),r=Pe(i,["T\xDA: \xABQUED\xC9 FATAL\xBB"],1.5,[.6,1.95,-.5],Mn),o=Pe(i,["ELLA: \xABES SINCERO\xBB"],1.5,[-.6,1.95,-.5],Fs);return{update:(a,l,c)=>{s(a),V(r,a,.05,t-.6,c),V(o,a,U(e,"ella")-.1,99,c)}}},c:Gn,range:3,look:{bloom:.45}}});var Uh={amb:"cuartoYo",ambo:{night:!0}},Nh={exposure:.95,bloom:.45};Ln(75,21,"21:30","UNA COSA");le(76,(n,e)=>{let t=U(e,"tengo");return{...tt,fov:30,atores:Dn({eyes:[[0,"look"]]},{eyes:[[0,"down"],[t,"look"]],p2:(i,s)=>s>t?Zt(i,s):i.pose({armL:[12,8],armR:[12,8],head:-10})},.8),extra:i=>{let s=un(i),r=ct(i,["\u2026"],.6,[-.3,1.6,-.5]),o=_t(i,["TENGO QUE CONTARTE","UNA COSA"],1.4,[-.8,1.6,-.5],50);return{update:(a,l,c)=>{s(a),V(r,a,.2,t-.2,c),V(o,a,t-.1,99,c)}}},c:Gn,range:3}});le(77,(n,e)=>{let t=U(e,"ningun"),i=U(e,"ninguna");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=as(s,[-.4,1.5,-.5],1.15,[["r","\xA1Mi cumple! S\xE1bado, 18:00. Te espero.",.3]],{hora:"21:31",name:"MENSAJES: SOLO T\xDA"}),o=rt(s,e,[[["NING\xDAN GRUPO"],t-.2,"w",[1.15,2.2,-.3],1.3],[["NINGUNA INVITACI\xD3N M\xC1S"],i-.2,"r",[1.15,2.2,-.3],1.9,1]]);return{update:(a,l,c)=>{r.userData.upd(a),o(a,c)}}},c:[[.2,1.5,4.3],[.2,1.5,-.5],[.2,1.5,3.8],[.2,1.5,-.5]],range:2,blur:4}});le(78,(n,e)=>{let t=U(e,"solo");return{...tt,fov:28,atores:[Nt({x:-.25,z:-.6,...Sr,eyes:[[0,"look"],[t,"happy"]],pose:i=>{qt(i),i.pose({armL:[12,8],armR:[40,60]})}})],extra:(i,s,r)=>{un(i);let o=xh(r[0]),a=_t(i,["NO INVIT\xC9 A NADIE M\xC1S"],1.3,[-.4,1.8,-.5],52),l=Pe(i,["SOLO A TI"],1.1,[-.25,1.8,-.5],Ei),c=rs(i,.3);return c.position.set(.25,1.2,-.5),{update:(h,d,u)=>{V(a,h,.05,t-.2,u),V(l,h,t-.2,99,u),o(st(t,t+.5,h)),c.visible=h>t,c.scale.setScalar(os(h,130)),En(c,u)}}},c:[[-.25,1,1.6],[-.25,.85,-.6],[-.25,1,1.3],[-.25,.85,-.6]],range:3}});le(79,(n,e)=>{let t=U(e,"atrevia");return{amb:"gris",fov:30,k:1,atores:[Nt({x:-1,z:-.3,eyes:[[0,"look"],[t-.4,"sad"]],pose:(i,s)=>s<t-.4?Zt(i,s):i.pose({armL:[20,10],armR:[20,10],head:-10})})],extra:i=>{let s=["SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"].map((o,a)=>ct(i,[o],1.3,[.9,1.95-a*.4,-.5])),r=rt(i,e,[[["LLEVO MESES\u2026"],0,"w",[.9,2.5,-.4],1.4],[["NO ME ATREV\xCDA"],t-.3,"p",[.9,2.5,-.4],1.5,1]]);return{update:(o,a,l)=>{s.forEach((c,h)=>V(c,o,.2+h*.4,99,l)),r(o,l)}}},c:[[0,1.6,4],[0,1.6,-.4],[0,1.6,3.5],[0,1.6,-.4]],range:3}});le(80,(n,e)=>{let t=U(e,"fiesta"),i=U(e,"venias"),s=U(e,"cita");return{amb:"gris",fov:30,k:1,atores:[Nt({x:-1.3,z:-.3,eyes:[[0,"look"],[i,"sad"],[s,"smug"]],pose:r=>r.pose({armL:[12,8],armR:[110,120],head:10})})],extra:r=>{let o=ka(r,1.3);o.position.set(.9,1.35,-.6);let a=za(r,e,[[["SI LO LLAMO FIESTA\u2026"],"si",[-.3,2.5,-.4],1.7],[["NO DA TANTO MIEDO"],"miedo",[-.3,2.5,-.4],1.7],[["Y SI NO VIENE\u2026"],i-.3,[-.3,2.5,-.4],1.5],[["NO ERA UNA CITA"],s-.5,[-.3,2.5,-.4],1.5]]);return{update:(l,c,h)=>{a(l,h),V(o,l,t-.2,99,h)}}},c:[[0,1.6,4.4],[0,1.6,-.4],[0,1.6,3.9],[0,1.6,-.4]],range:3}});kn(81,["veinte"],[(n,e)=>({...tt,fov:28,atores:[ze({x:.25,z:-.6,...Sr,eyes:[[0,"wide"]],pose:t=>{qt(t),t.pose({armL:[12,8],armR:[12,8]})}})],extra:t=>{un(t);let i=new Qe("#9FD0FF",4,3,1.6);i.position.set(.25,1.4,.4),t.add(i);let s=Pe(t,["TE QUEDAS HELADO"],1.5,[.25,1.8,-.5],{bg:"#4A86C7",fg:"#fff"});return{update:(r,o,a)=>{V(s,r,.1,99,a),gf(a,r<.4?.01:0,r)}}},c:[[.25,1,1.6],[.25,.85,-.6],[.25,1,1.4],[.25,.85,-.6]],range:3}),(n,e)=>({...tt,fov:38,atores:[],extra:t=>{let i=Ut(t,{globos:20}),s=rt(t,e,[[["LAS 20 SILLAS"],0,"w",[0,2.6,-.6],1.5],[["LOS GLOBOS"],"globos","p",[0,2.6,-.6],1.3],[["LA TARTA ENORME"],"tarta","y",[0,2.6,-.6],1.6,1]]);return{update:(r,o,a)=>{i(r),s(r,a)}}},c:[[0,3.8,5.2],[0,.8,-.8],[0,3.4,4.6],[0,.8,-.8]],range:6})]);le(82,(n,e)=>{let t=U(e,"puso"),i=U(e,"nada");return{...tt,fov:30,atores:Dn({eyes:[[0,"wide"],[i,"happy"]],p2:(s,r)=>r<t?Zt(s,r):s.pose({armL:[40,60],armR:[12,8]})},{eyes:[[0,"look"],[t,"smug"]],p2:(s,r)=>r>t?Zt(s,r):s.pose({armL:[12,8],armR:[40,60]})},.8),extra:s=>{let r=un(s),o=_t(s,["\xBFY LAS SILLAS?"],1.1,[.8,1.6,-.5],60),a=_t(s,["LAS PUSO MI MADRE.","NO SABE NADA."],1.4,[-.8,1.6,-.5],50);return{update:(l,c,h)=>{r(l),V(o,l,.05,t-.2,h),V(a,l,t-.2,99,h)}}},c:Gn,range:3}});le(83,(n,e)=>{let t=U(e,"lagrimas");return{...tt,fov:30,atores:Dn({eyes:[[0,"happy"]],p2:(i,s)=>i.pose({armL:[60,70],armR:[60,70],bob:Math.abs(Math.sin(s*10))*.03,lean:Math.sin(s*5)*8})},{eyes:[[0,"happy"]],p2:(i,s)=>i.pose({armL:[60,70],armR:[60,70],bob:Math.abs(Math.sin(s*10+1))*.03,lean:-Math.sin(s*5)*8})},.8),extra:(i,s,r)=>{let o=un(i),a=Pe(i,["\xA1JAJAJAJA!"],1.2,[0,1.7,-.5],Ei),l=[0,1,2,3].map(()=>{let c=lt("#9FD0FF",.1,0);return i.add(c),c});return{update:(c,h,d)=>{o(c),V(a,c,.05,99,d),l.forEach((u,f)=>{let g=r[f%2],E=new I;g.head.getWorldPosition(E);let m=(c*.9+f*.25)%1;u.position.set(E.x+(f<2?-.15:.15),E.y-.05-m*.3,E.z+.3),u.material.opacity=c>t-.5?.9*(1-m):0})}}},c:Gn,range:3,look:{bloom:.5}}});Ln(84,22,"22:00","LA MADRE");kn(85,["pues","seguramente"],[(n,e)=>{let t=U(e,"globos");return{...Ch,fov:34,atores:[ro({x:1.4,z:-1.2,eyes:[[0,"look"],[t,"wide"]],move:i=>[bt(3.6,1.4,st(0,1.5,i)),0,-1.2],pose:(i,s)=>s<1.5?i.walk(s*2):i.pose({head:s>t?25:-10})}),...Dn({eyes:[[0,"look"]]},{eyes:[[0,"look"]]},.8)],extra:i=>{let s=un(i),r=rt(i,e,[[["OS MIRA"],"mira","w",[1.4,2.4,-1],.9],[["MIRA LOS GLOBOS"],t-.3,"y",[1.4,2.4,-1],1.4,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:[[.3,2,4.2],[.4,1,-1],[.3,1.95,3.8],[.4,1,-1]],range:5}},(n,e)=>{let t=U(e,"vuelve");return{...Ch,fov:32,atores:[ro({x:1.4,z:-1.2,eyes:[[0,"smug"]],move:i=>[bt(1.4,3.8,st(t,t+1.4,i)),0,-1.2],pose:(i,s)=>s>t?i.walk(s*2):i.pose({armL:[60,70],armR:[60,70]})}),...Dn({eyes:[[0,"look"]]},{eyes:[[0,"look"]]},.8)],extra:i=>{let s=un(i),r=_t(i,["PUES S\xCD QUE HA SIDO","UNA FIESTA PEQUE\xD1A"],1.6,[1.6,2.4,-1.2],50);return{update:(o,a,l)=>{s(o),V(r,o,.05,t,l)}}},c:[[.4,1.9,4],[.5,1.1,-1],[.4,1.85,3.6],[.5,1.1,-1]],range:5}},(n,e)=>{let t=U(e,"principio");return{amb:"gris",fov:30,k:1,atores:[ro({x:0,z:-.3,eyes:[[0,"smug"]],pose:i=>i.pose({armL:[12,8],armR:[100,120],head:8})})],extra:i=>{let s=rt(i,e,[[["\xBFLO SAB\xCDA?"],0,"w",[0,2.45,-.3],1.1],[["DESDE EL PRINCIPIO"],t-.4,"y",[0,2.45,-.3],1.7,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.4],[0,1.6,-.3],[0,1.6,2.9],[0,1.6,-.3]],range:3}}]);le(86,(n,e)=>{let t=U(e,"abrazo"),i=U(e,"gracias"),s=r=>r>t-.2&&r<i-.3;return{...IE,fov:30,atores:[Nt({x:.5,z:-.6,eyes:[[0,"happy"],[t,"shut"],[i-.3,"happy"]],move:r=>[s(r)?.15:.5,0,-.6],pose:(r,o)=>s(o)?rf(1)(r,o):r.pose()}),ze({x:-.5,z:-.7,eyes:[[0,"look"],[t,"wide"],[i,"heart"]],move:r=>[s(r)?-.15:-.5,0,-.7],pose:(r,o)=>s(o)?rf(-1)(r,o):r.pose()})],extra:r=>{Af(r),wr(r,[0,2.6,-.5],3,5);let o=rt(r,e,[[["UN ABRAZO"],t-.2,"p",[-1.2,2.15,-.6],1.2],[["CORTO"],"corto","w",[-1.2,2.15,-.6],.8],[["R\xC1PIDO"],"rapido","w",[-1.2,2.15,-.6],.9,1]]),a=_t(r,["GRACIAS POR","QUEDARTE"],1.3,[.9,2.2,-.6],56);return{update:(l,c,h)=>{o(l,h),V(a,l,i-.2,99,h)}}},c:[[0,1.6,2.8],[0,1.45,-.7],[0,1.6,2.4],[0,1.45,-.7]],range:3,look:SE}});Ln(87,23,"23:00","TU CUARTO");le(88,(n,e)=>{let t=U(e,"repasas");return{...Uh,fov:30,atores:[Ih(ze,{x:-.7,z:-1,y:1.08,eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{let s=ct(i,["REPASAS LA TARDE ENTERA"],2,[-.8,2,-.9]),r=yn(i,12,"#FFB0C0");return{update:(o,a,l)=>{V(s,o,t-.2,99,l),r(o,[-1,1.6,-.9,.9],o>t?1:0)}}},c:[[-.6,2.3,3],[-.8,1,-1],[-.6,2.2,2.6],[-.8,1,-1]],range:3,look:Nh}});le(89,(n,e)=>{let t=U(e,"caido"),i=U(e,"amable");return{...Uh,fov:30,atores:[Ih(ze,{x:-.7,z:-1,y:1.08,eyes:[[0,"happy"],[t-.3,"look"]]})],extra:s=>{let r=ri(s,"#E8667F",{cara:1,gorro:"#43C4B4",hilo:!1});r.scale.setScalar(.7);let o=za(s,e,[[["\xABHOLA. HOLA.\xBB"],"hola",[-.4,2.1,-.9],1.3],[["PACO, EL GLOBO"],"paco",[-.4,2.1,-.9],1.4],[["\xBFLE HABR\xC9 CA\xCDDO BIEN?"],t-.3,[-.4,2.1,-.9],1.8],[["\xBFO SOLO ERA AMABLE?"],i-.5,[-.4,2.1,-.9],1.7]]);return{update:(a,l,c)=>{o(a,c),r.visible=a>U(e,"paco")&&a<t-.3,r.position.set(.6,2+Math.sin(a*2)*.05,-.9)}}},c:[[-.6,2.3,3],[-.6,1.3,-1],[-.6,2.2,2.6],[-.6,1.3,-1]],range:3,look:Nh}});kn(90,["estudiaron"],[(n,e)=>({amb:"gris",fov:30,k:1,atores:[Rh(3,{x:.8,z:-.4,eyes:[[0,"happy"]],pose:Ui})],extra:t=>{let i=rt(t,e,[[["\xA1CIENCIA PARA ESTO!"],0,"y",[-.7,2.3,-.3],1.8],[["ERICA BOOTHBY"],"erica","w",[-.7,2.3,-.3],1.5,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,4],[0,1.5,-.4],[0,1.6,3.5],[0,1.5,-.4]],range:3}),(n,e)=>({amb:"gris",fov:30,k:1,atores:[Wt(2,{x:-.7,z:-.4,eyes:[[0,"look"]],pose:(t,i)=>Math.floor(i)%2?Zt(t,i):t.pose()}),Wt(4,{x:.7,z:-.4,eyes:[[0,"lookl"]],pose:(t,i)=>Math.floor(i)%2?t.pose():Zt(t,i)})],extra:t=>{let i=rt(t,e,[[["UNA CONVERSACI\xD3N"],"conversacion","w",[0,2.4,-.3],1.8],[["ENTRE DESCONOCIDOS"],"personas","y",[0,2.4,-.3],1.9,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,4],[0,1.5,-.4],[0,1.6,3.5],[0,1.5,-.4]],range:3})]);kn(91,["llamaron"],[(n,e)=>{let t=U(e,"realidad");return{amb:"gris",fov:32,k:1,atores:[Wt(2,{x:-1.6,z:-.4,eyes:[[0,"sad"]]}),Wt(4,{x:1.6,z:-.4,eyes:[[0,"sad"]]})],extra:i=>{let s=oi(i,["NO LE HE","CA\xCDDO BIEN"],1.2,[-1.4,2.4,-.4],{size:54}),r=oi(i,["NO LE HE","CA\xCDDO BIEN"],1.2,[1.4,2.4,-.4],{size:54,tail:"right"}),o=Mr(i,[[`LO QUE
CREES`,.35,"#8AA8C8"],[`LA
REALIDAD`,.85,"#E8667F"]],1.8,[0,1.45,-.5],{title:"CU\xC1NTO GUSTAS"});return{update:(a,l,c)=>{V(s,a,.2,99,c),V(r,a,.5,99,c),V(o,a,t-.5,99,c)}}},c:[[0,1.65,4.6],[0,1.6,-.4],[0,1.65,4.1],[0,1.6,-.4]],range:3}},(n,e)=>{let t=U(e,"caemos");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=Pe(i,["LA BRECHA DEL AGRADO"],2.2,[0,1.95,-.4],ao),r=ct(i,["LE CAEMOS MEJOR A LA GENTE","DE LO QUE CREEMOS"],2.4,[0,1.1,-.4],{h:260}),o=yn(i,12,"#FFE27A");return{update:(a,l,c)=>{V(s,a,.05,99,c),V(r,a,t-.2,99,c),o(a,[0,1.6,-.3,1.4])}}},c:[[0,1.55,3.6],[0,1.55,-.4],[0,1.55,3.1],[0,1.55,-.4]],range:3}}]);le(92,(n,e)=>{let t=U(e,"vibra"),i=U(e,"ella");return{...Uh,fov:30,atores:[Ih(ze,{x:-.7,z:-1,y:1.08,eyes:[[0,"happy"],[t+.2,"wide"],[i,"heart"]]})],extra:s=>{let r=Ha(["ELLA \u2665"],{hora:"23:14"});r.rotation.x=-Math.PI/2+.3,r.scale.setScalar(.35),r.position.set(0,1.3,-.8),s.add(r);let o=new Qe("#9FC0FF",0,2,1.6);o.position.set(0,1.7,-.6),s.add(o);let a=Pe(s,["\xA1BZZZ!"],.8,[.3,1.9,-.8],Mn),l=Pe(s,["ES ELLA"],.9,[-.6,2,-.9],Ei);return{update:(c,h,d)=>{let u=c>t;r.position.x=u&&c*10%1<.5?.015:0,o.intensity=u?2.5:0,V(a,c,t,i-.2,d),V(l,c,i-.1,99,d)}}},c:[[-.4,2.3,3],[-.4,1.1,-1],[-.4,2.2,2.6],[-.4,1.1,-1]],range:3,look:Nh}});le(93,(n,e)=>{let t=U(e,"paco"),i=U(e,"sabado"),s=U(e,"foto");return{amb:"gris",fov:28,k:1,atores:[],extra:r=>{let o=as(r,[-.4,1.5,-.5],1.15,[["l","Paco dice que quiere repetir.",t-.2],["l","\xBFEl s\xE1bado que viene?",i-.3],["l","[ FOTO ]",s]],{hora:"23:14",name:"ELLA \u2665"}),a=Tf(r,QE(),1.3);a.position.set(1.1,1.65,-.3);let l=ct(r,["PACO, EN SU CAMA"],1.4,[1.1,.95,-.2]);return{update:(c,h,d)=>{o.userData.upd(c),V(a,c,s+.2,99,d),V(l,c,U(e,"sentado")-.3,99,d)}}},c:[[.2,1.5,4.3],[.2,1.5,-.5],[.2,1.5,3.8],[.2,1.5,-.5]],range:2,blur:4}});le(94,(n,e)=>{let t=U(e,"dile");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=as(i,[-.4,1.5,-.5],1.15,[["l","Paco dice que quiere repetir.",0],["l","\xBFEl s\xE1bado que viene?",0],["r","Dile a Paco que s\xED. Pero esta vez sin sillas vac\xEDas.",t-.2]],{hora:"23:15",name:"ELLA \u2665"}),r=rs(i,.5);r.position.set(1.1,1.8,-.3);let o=yn(i,12,"#FFB0C0");return{update:(a,l,c)=>{s.userData.upd(a),r.visible=a>t+1,r.scale.setScalar(os(a)),o(a,[.3,1.6,-.3,1.3],a>t+1?1:0)}}},c:[[.2,1.5,4.3],[.2,1.5,-.5],[.2,1.5,3.8],[.2,1.5,-.5]],range:2,blur:4}});Ln(95,8,"08:00","LUNES");le(96,(n,e)=>({amb:"pasillo",fov:30,atores:[ze({x:0,z:-.4,eyes:[[0,"look"],[1.2,"lookl"],[2.4,"look"],[3.6,"sad"]],move:t=>[0,0,bt(.6,-.4,st(0,3,t))],pose:(t,i)=>i<3?t.walk(i*1.4):t.pose({armL:[20,10],armR:[20,10]})})],extra:t=>{let i=za(t,e,[[["\xBFY SI ALGUIEN LO SABE?"],"alguien",[.5,2.4,-.4],1.7],[["\xBFY SI SE R\xCDEN DE ELLA?"],"rien",[.5,2.4,-.4],1.7]]),s=ct(t,["CON MIEDO"],1.1,[0,.5,.2]);return{update:(r,o,a)=>{i(r,a),V(s,r,U(e,"miedo")-.2,U(e,"alguien"),a)}}},c:[[0,1.6,3.4],[0,1.45,-.5],[0,1.6,3],[0,1.45,-.5]],range:3}));le(97,(n,e)=>{let t=U(e,"amigo");return{amb:"pasillo",fov:34,atores:[Wt(0,{x:-2.2,z:-.8,eyes:[[0,"happy"]],pose:Zt}),Wt(1,{x:-1.4,z:-1,eyes:[[0,"lookl"]]}),ze({x:0,z:-.2,eyes:[[0,"look"],[t,"happy"]]}),Ef({x:.9,z:-.4,eyes:[[0,"look"]],move:i=>[bt(2.6,.9,st(t-.8,t+.4,i)),0,-.4],pose:(i,s)=>s<t+.4?i.walk(s*2):Zt(i,s)}),Wt(3,{x:2.3,z:-1.2,eyes:[[0,"lookl"]],pose:Zt})],extra:i=>{let s=rt(i,e,[[["NO PASA NADA"],0,"w",[0,2.6,-.4],1.4],[["NADIE DICE NADA"],"nadie","y",[0,2.6,-.4],1.6,1]]),r=_t(i,["\xBFHAS HECHO LOS","DEBERES DE MATES?"],1.5,[1.4,2.2,-.4],52);return{update:(o,a,l)=>{s(o,l),V(r,o,U(e,"deberes")-.8,99,l)}}},c:[[0,1.65,4],[0,1.45,-.5],[0,1.65,3.6],[0,1.45,-.5]],range:3}});le(98,(n,e)=>{let t=U(e,"casi"),i=[[-2,-1],[-1.1,-1.6],[1.1,-1.6]],s=["\xBFY EL PARTIDO?","MIS DEBERES\u2026","\xBFHAY EXAMEN?"];return{amb:"gris",fov:34,k:1,atores:[ze({x:0,z:-.2,eyes:[[0,"look"],[t,"happy"]]}),...i.map(([r,o],a)=>Wt(a+3,{x:r,z:o,eyes:[[0,"flat"]],pose:l=>l.pose({head:a%2?15:-15})})),Oi({x:2,z:-1,eyes:[[0,"lookl"],[t,"heart"]],pose:(r,o)=>o>t?Ua(r,o):r.pose()})],extra:r=>{Mf(r,0,-.2);let o=i.map(([c,h],d)=>oi(r,[s[d]],1,[c,2.1,h+.1],{size:54})),a=rs(r,.35);a.position.set(2,2.2,-1);let l=rt(r,e,[[["GILOVICH TEN\xCDA RAZ\xD3N"],0,"y",[0,2.8,-.4],2],[["NADIE PENSABA EN VOSOTROS"],"nadie","w",[0,2.8,-.4],2.3],[["BUENO\u2026 CASI NADIE"],t-.2,"p",[0,2.8,-.4],1.8,1]]);return{update:(c,h,d)=>{l(c,d),o.forEach((u,f)=>V(u,c,.4+f*.3,t-.2,d)),a.visible=c>t,a.scale.setScalar(os(c)),En(a,d)}}},c:[[0,1.8,5],[0,1.4,-.8],[0,1.75,4.5],[0,1.4,-.8]],range:4,look:{vig:.6}}});var Tr=-.28;le(99,(n,e)=>{let t=U(e,"sienta"),i=U(e,"auriculares");return{amb:"jardin",fov:30,atores:[ze({x:.55,z:-.5,y:Tr,eyes:[[0,"look"],[t+.6,"happy"]],pose:s=>{qt(s),s.pose({head:-8})}}),Oi({x:1.45,z:-.5,eyes:[[0,"happy"]],move:s=>s<t+.2?[bt(3.6,1.45,st(0,t+.2,s)),0,-.2]:[1.45,Tr,-.5],pose:(s,r)=>{Lh(s),r<t+.2?s.walk(r*2):qt(s)}})],extra:s=>{Va(s,1,-.5);let r=rt(s,e,[[["EL RECREO"],0,"w",[1,2.3,-.4],1.1],[["SE SIENTA A TU LADO"],t,"p",[1,2.3,-.4],1.8],[["\xA1LOS AURICULARES DE GATO!"],i,"y",[1,2.3,-.4],2.3,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[1,1.5,3.2],[1,1.2,-.5],[1,1.45,2.8],[1,1.2,-.5]],range:3,look:{bloom:.4}}});le(100,(n,e)=>{let t=U(e,"llavero"),i=U(e,"globo"),s=U(e,"cara");return{amb:"jardin",fov:28,atores:[],extra:r=>{Va(r,1,-.5),wf(r,"#E8A86A").position.set(1.3,.54,-.45);let a=bf(r),l=rt(r,e,[[["UN LLAVERO NUEVO"],t,"w",[1.3,1.6,-.3],1.4],[["UN GLOBO PEQUE\xD1ITO"],i,"p",[1.3,1.6,-.3],1.6],[["CON UNA CARA PINTADA"],s,"y",[1.3,1.6,-.3],1.8,1]]);return{update:(c,h,d)=>{a.position.set(1.42,.95+Math.sin(c*3)*.02,-.28),a.rotation.z=Math.sin(c*3)*.3,l(c,d)}}},c:[[1.3,1.15,1.2],[1.35,.9,-.4],[1.33,1.1,.9],[1.38,.9,-.4]],range:2}});le(101,(n,e)=>{let t=U(e,"luego"),i=U(e,"vale");return{amb:"jardin",fov:32,atores:[ze({x:.55,z:-.5,y:Tr,eyes:[[0,"happy"],[i+1,"look"]],pose:s=>{qt(s)}}),Oi({x:1.45,z:-.5,y:Tr,eyes:[[0,"happy"]],pose:s=>{Lh(s),qt(s)}}),Ef({x:2.7,z:.1,eyes:[[0,"lookl"],[t,"smug"]],pose:(s,r)=>r>i?s.pose({armL:[12,8],armR:[95,0]}):s.pose({armL:[60,70],armR:[60,70]})})],extra:s=>{Va(s,1,-.5);let r=ct(s,["TU AMIGO OS MIRA"],1.6,[2.7,2.4,.1]),o=_t(s,["VALE. T\xDA ME TIENES","QUE CONTAR ALGO"],1.6,[2.5,2.3,.1],50);return{update:(a,l,c)=>{V(r,a,.05,i-.2,c),V(o,a,i-.2,99,c)}}},c:[[1.4,1.6,3.8],[1.4,1.25,-.3],[1.4,1.55,3.4],[1.4,1.25,-.3]],range:3,look:{bloom:.4}}});le(102,(n,e)=>{let t=U(e,"vuestra");return{amb:"jardin",fov:30,atores:[ze({x:.55,z:-.5,y:Tr,eyes:[[0,"happy"]],pose:i=>qt(i)}),Oi({x:1.45,z:-.5,y:Tr,eyes:[[0,"happy"]],pose:i=>{Lh(i),qt(i)}})],extra:i=>{Va(i,1,-.5);let s=bf(i);s.position.set(2,1.3,-.4);let r=ct(i,["Y SONR\xCDES"],1,[1,2,-.4]),o=Pe(i,["SOLO VUESTRA"],1.4,[1,2,-.4],Ei),a=yn(i,12,"#FFB0C0");return{update:(l,c,h)=>{V(r,l,.05,t-.5,h),V(o,l,t-.5,99,h),a(l,[1,1.3,-.4,.9]),co(s,l,0,1.3,.04)}}},c:[[1,1.45,3],[1,1.15,-.5],[1,1.4,2.5],[1,1.15,-.5]],range:3,look:{bloom:.45}}});le(103,(n,e)=>{let t=U(e,"mejor");return{...Ch,fov:36,atores:[Nt({x:-.5,z:-.6,eyes:[[0,"happy"]],pose:(i,s)=>tf(i,s)}),ze({x:.5,z:-.6,eyes:[[0,"happy"]],pose:(i,s)=>tf(i,s+1)})],extra:i=>{let s=Ut(i,{globos:20}),r=Pe(i,["LA PEOR FIESTA DEL MUNDO"],2.3,[0,2.6,-.6],Mn),o=Pe(i,["LA MEJOR TARDE DE TU VIDA"],2.4,[0,2.6,-.6],ao),a=yn(i,16,"#FFE27A");return{update:(l,c,h)=>{s(l),V(r,l,.1,t-.3,h),V(o,l,t-.3,99,h),a(l,[0,1.8,-.8,2],l>t?1:0)}}},c:[[0,2,4.4],[0,1.4,-1],[0,1.95,3.9],[0,1.4,-1]],range:5,look:{bloom:.5}}});le(104,(n,e)=>{let t=U(e,"miedo"),i=U(e,"atreva");return{amb:"gris",fov:30,k:1,atores:[ze({x:-.8,z:-.3,eyes:[[0,"sad"],[i-.3,"happy"]],move:s=>[bt(-.8,-.35,st(i-.5,i+.5,s)),0,-.3],pose:s=>s.pose({head:10})}),Oi({x:.8,z:-.3,eyes:[[0,"sad"],[i-.3,"heart"]],move:s=>[bt(.8,.35,st(i-.5,i+.5,s)),0,-.3],pose:s=>s.pose({head:-10})})],extra:s=>{let r=oi(s,["MIEDO"],.8,[-1.2,2.2,-.4],{size:64}),o=oi(s,["MIEDO"],.8,[1.2,2.2,-.4],{size:64,tail:"right"}),a=Pe(s,["ATR\xC9VETE"],1.3,[0,2.4,-.3],ao),l=rs(s,.45);l.position.set(0,1.9,-.2);let c=ct(s,["TANTO MIEDO COMO T\xDA"],1.9,[0,2.4,-.3]);return{update:(h,d,u)=>{V(r,h,t-.3,i-.3,u),V(o,h,t,i-.3,u),V(c,h,t-.2,i-.4,u),V(a,h,i-.3,99,u),l.visible=h>i,l.scale.setScalar(os(h)),En(l,u)}}},c:[[0,1.6,4],[0,1.6,-.4],[0,1.6,3.5],[0,1.6,-.4]],range:3}});le(105,(n,e)=>{let t=U(e,"quedado"),i=U(e,"ido"),s=U(e,"leo");return{amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=ri(r,"#E8667F",{cara:1,gorro:"#43C4B4"});o.position.set(0,1.7,-.5),wr(r,[0,2.4,1.2],6,6);let a=Pe(r,["\xBFY T\xDA QU\xC9 HABR\xCDAS HECHO?"],2.3,[0,2.65,-.4],{bg:"#1E2230",fg:"#F2C14E"}),l=Pe(r,["QUEDARTE"],1.1,[-1.5,1,-.2],Fs),c=Pe(r,["IRTE"],.8,[1.5,1,-.2],Mn),h=ct(r,["TE LEO EN LOS COMENTARIOS"],2.3,[0,2.65,-.4]);return{update:(d,u,f)=>{co(o,d,0,1.7,.08),V(a,d,.1,s-.2,f),V(l,d,t-.3,99,f),V(c,d,i-.2,99,f),V(h,d,s-.2,99,f)}}},c:[[0,1.6,4.4],[0,1.6,-.4],[0,1.6,3.9],[0,1.6,-.4]],range:3,look:{bloom:.45}}});function ty(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new Ma(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=br.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=br.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(ty(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=br[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
