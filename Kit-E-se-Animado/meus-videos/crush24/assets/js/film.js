var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var zc="170";var af=0,Dh=1,lf=2;var Gd=1,kc=2,yi=3,zi=0,jt=1,Mt=2,ei=0,Bi=1,yn=2,Lh=3,Uh=4,cf=5,ds=100,hf=101,df=102,uf=103,ff=104,pf=200,mf=201,gf=202,Ef=203,ml=204,gl=205,yf=206,vf=207,_f=208,Af=209,Mf=210,Sf=211,bf=212,xf=213,Tf=214,El=0,yl=1,vl=2,Zs=3,_l=4,Al=5,Ml=6,Sl=7,Vd=0,wf=1,Rf=2,ti=0,Cf=1,Ff=2,Pf=3,If=4,Df=5,Lf=6,Uf=7;var Wd=300,$s=301,Js=302,bl=303,xl=304,ca=306,tn=1e3,fs=1001,Tl=1002,Pn=1003,Nf=1004;var oo=1005;var Kn=1006,Da=1007;var ps=1008;var Mi=1009,Xd=1010,qd=1011,kr=1012,Gc=1013,Si=1014,jn=1015,Mn=1016,Vc=1017,Wc=1018,Qs=1020,Yd=35902,Zd=1021,$d=1022,Gn=1023,Jd=1024,Qd=1025,Xs=1026,Ks=1027,Xc=1028,qc=1029,Kd=1030,Yc=1031;var Zc=1033,No=33776,Oo=33777,Bo=33778,Ho=33779,wl=35840,Rl=35841,Cl=35842,Fl=35843,Pl=36196,Il=37492,Dl=37496,Ll=37808,Ul=37809,Nl=37810,Ol=37811,Bl=37812,Hl=37813,zl=37814,kl=37815,Gl=37816,Vl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,zo=36492,Zl=36494,$l=36495,jd=36283,Jl=36284,Ql=36285,Kl=36286;var ko=2300,jl=2301,La=2302,Nh=2400,Oh=2401,Bh=2402;var Of=3200,lr=3201;var eu=0,Bf=1,Ni="",It="srgb",qi="srgb-linear",ha="linear",St="srgb";var xs=7680;var Hh=519,Hf=512,zf=513,kf=514,tu=515,Gf=516,Vf=517,Wf=518,Xf=519,ec=35044;var zh="300 es",_i=2e3,Go=2001,ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ua=Math.PI/180,Vo=180/Math.PI;function Hi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function dn(n,e,t){return Math.max(e,Math.min(t,n))}function qf(n,e){return(n%e+e)%e}function Na(n,e,t){return(1-t)*n+t*e}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],E=s[0],m=s[3],f=s[6],v=s[1],_=s[4],y=s[7],D=s[2],R=s[5],x=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*_+l*R,r[6]=o*f+a*y+l*x,r[1]=c*E+h*v+d*D,r[4]=c*m+h*_+d*R,r[7]=c*f+h*y+d*x,r[2]=u*E+p*v+g*D,r[5]=u*m+p*_+g*R,r[8]=u*f+p*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=p*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oa=new Qe;function nu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yf(){let n=Wo("canvas");return n.style.display="block",n}var kh={};function Nr(n){n in kh||(kh[n]=!0,console.warn(n))}function Zf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function $f(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jf(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ft={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(n.r=Ai(n.r),n.g=Ai(n.g),n.b=Ai(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(n.r=qs(n.r),n.g=qs(n.g),n.b=qs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ni?ha:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gh=[.64,.33,.3,.6,.15,.06],Vh=[.2126,.7152,.0722],Wh=[.3127,.329],Xh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ft.define({[qi]:{primaries:Gh,whitePoint:Wh,transfer:ha,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:Vh,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:Gh,whitePoint:Wh,transfer:St,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:Vh,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});var Ts,tc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=Wo("canvas")),Ts.width=e.width,Ts.height=e.height;let i=Ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qf=0,Xo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kf=0,vn=class n extends ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=fs,s=fs,r=Kn,o=ps,a=Gn,l=Mi,c=n.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Hi(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tn:e.x=e.x-Math.floor(e.x);break;case fs:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tn:e.y=e.y-Math.floor(e.y);break;case fs:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Wd;vn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,D=(f+1)/2,R=(h+u)/4,x=(d+E)/4,F=(g+m)/4;return _>y&&_>D?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=x/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=F/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=x/r,s=F/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends nc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},qo=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*E,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let D=Math.sqrt(_),R=Math.atan2(D,f*v);m=Math.sin(m*R)/D,a=Math.sin(a*R)/D}let y=a*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha=new I,Yh=new Gi,bi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),lo.subVectors(this.max,Tr),ws.subVectors(e.a,Tr),Rs.subVectors(e.b,Tr),Cs.subVectors(e.c,Tr),Fi.subVectors(Rs,ws),Pi.subVectors(Cs,Rs),ss.subVectors(ws,Cs);let t=[0,-Fi.z,Fi.y,0,-Pi.z,Pi.y,0,-ss.z,ss.y,Fi.z,0,-Fi.x,Pi.z,0,-Pi.x,ss.z,0,-ss.x,-Fi.y,Fi.x,0,-Pi.y,Pi.x,0,-ss.y,ss.x,0];return!za(t,ws,Rs,Cs,lo)||(t=[1,0,0,0,1,0,0,0,1],!za(t,ws,Rs,Cs,lo))?!1:(co.crossVectors(Fi,Pi),t=[co.x,co.y,co.z],za(t,ws,Rs,Cs,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new I,new I,new I,new I,new I,new I,new I,new I],Hn=new I,ao=new bi,ws=new I,Rs=new I,Cs=new I,Fi=new I,Pi=new I,ss=new I,Tr=new I,lo=new I,co=new I,rs=new I;function za(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rs.fromArray(n,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=i.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jf=new bi,wr=new I,ka=new I,Vi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(ka)),this.expandByPoint(wr.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new I,Ga=new I,ho=new I,Ii=new I,Va=new I,uo=new I,Wa=new I,Yo=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ga.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Ga);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=Ii.dot(this.direction),l=-Ii.dot(ho),c=Ii.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ga).addScaledVector(ho,u),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){Va.subVectors(t,e),uo.subVectors(i,e),Wa.crossVectors(Va,uo);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);let l=a*this.direction.dot(uo.crossVectors(Ii,uo));if(l<0)return null;let c=a*this.direction.dot(Va.cross(Ii));if(c<0||l+c>o)return null;let h=-a*Ii.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Fs.setFromMatrixColumn(e,0).length(),r=1/Fs.setFromMatrixColumn(e,1).length(),o=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Di.crossVectors(i,Cn),Di.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Di.crossVectors(i,Cn)),Di.normalize(),fo.crossVectors(Cn,Di),s[0]=Di.x,s[4]=fo.x,s[8]=Cn.x,s[1]=Di.y,s[5]=fo.y,s[9]=Cn.y,s[2]=Di.z,s[6]=fo.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],E=i[6],m=i[10],f=i[14],v=i[3],_=i[7],y=i[11],D=i[15],R=s[0],x=s[4],F=s[8],S=s[12],A=s[1],P=s[5],B=s[9],H=s[13],X=s[2],ee=s[6],Z=s[10],oe=s[14],Y=s[3],pe=s[7],Me=s[11],Oe=s[15];return r[0]=o*R+a*A+l*X+c*Y,r[4]=o*x+a*P+l*ee+c*pe,r[8]=o*F+a*B+l*Z+c*Me,r[12]=o*S+a*H+l*oe+c*Oe,r[1]=h*R+d*A+u*X+p*Y,r[5]=h*x+d*P+u*ee+p*pe,r[9]=h*F+d*B+u*Z+p*Me,r[13]=h*S+d*H+u*oe+p*Oe,r[2]=g*R+E*A+m*X+f*Y,r[6]=g*x+E*P+m*ee+f*pe,r[10]=g*F+E*B+m*Z+f*Me,r[14]=g*S+E*H+m*oe+f*Oe,r[3]=v*R+_*A+y*X+D*Y,r[7]=v*x+_*P+y*ee+D*pe,r[11]=v*F+_*B+y*Z+D*Me,r[15]=v*S+_*H+y*oe+D*Oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],E=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+E*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],E=e[13],m=e[14],f=e[15],v=d*m*c-E*u*c+E*l*p-a*m*p-d*l*f+a*u*f,_=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,y=h*E*c-g*d*c+g*a*p-o*E*p-h*a*f+o*d*f,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,R=t*v+i*_+s*y+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/R;return e[0]=v*x,e[1]=(E*u*r-d*m*r-E*s*p+i*m*p+d*s*f-i*u*f)*x,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*f+i*l*f)*x,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*x,e[4]=_*x,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*x,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*x,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*x,e[8]=y*x,e[9]=(g*d*r-h*E*r-g*i*p+t*E*p+h*i*f-t*d*f)*x,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*f+t*a*f)*x,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*x,e[12]=D*x,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*x,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*x,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*x,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,E=o*h,m=o*d,f=a*d,v=l*c,_=l*h,y=l*d,D=i.x,R=i.y,x=i.z;return s[0]=(1-(E+f))*D,s[1]=(p+y)*D,s[2]=(g-_)*D,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(u+f))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(g+_)*x,s[9]=(m-v)*x,s[10]=(1-(u+E))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Fs.set(s[0],s[1],s[2]).length(),o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);let c=1/r,h=1/o,d=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,t.setFromRotationMatrix(zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=_i){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,g;if(a===_i)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Go)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=_i){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,p=(i+s)*h,g,E;if(a===_i)g=(o+r)*d,E=-2*d;else if(a===Go)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Fs=new I,zn=new Tt,ep=new I(0,0,0),tp=new I(1,1,1),Di=new I,fo=new I,Cn=new I,Zh=new Tt,$h=new Gi,ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},np=0,Jh=new I,Ps=new Gi,mi=new Tt,po=new I,Rr=new I,ip=new I,sp=new Gi,Qh=new I(1,0,0),Kh=new I(0,1,0),jh=new I(0,0,1),ed={type:"added"},rp={type:"removed"},Is={type:"childadded",child:null},Xa={type:"childremoved",child:null},Vt=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ni,i=new Gi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Qe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?po.copy(e):po.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Rr,po,this.up):mi.lookAt(po,Rr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(mi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new I,gi=new I,qa=new I,Ei=new I,Ds=new I,Ls=new I,td=new I,Ya=new I,Za=new I,$a=new I,Ja=new xt,Qa=new xt,Ka=new xt,Oi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){kn.subVectors(s,t),gi.subVectors(i,t),qa.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(gi),l=kn.dot(qa),c=gi.dot(gi),h=gi.dot(qa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ja.setScalar(0),Qa.setScalar(0),Ka.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,i),Ka.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ja,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(Ka,r.z),o}static isFrontFacing(e,t,i,s){return kn.subVectors(i,t),gi.subVectors(e,t),kn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ds.subVectors(s,i),Ls.subVectors(r,i),Ya.subVectors(e,i);let l=Ds.dot(Ya),c=Ls.dot(Ya);if(l<=0&&c<=0)return t.copy(i);Za.subVectors(e,s);let h=Ds.dot(Za),d=Ls.dot(Za);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ds,o);$a.subVectors(e,r);let p=Ds.dot($a),g=Ls.dot($a);if(g>=0&&p<=g)return t.copy(r);let E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ls,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return td.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(td,a);let f=1/(m+E+u);return o=E*f,a=u*f,t.copy(i).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},mo={h:0,s:0,l:0};function ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var de=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=qf(e,1),t=dn(t,0,1),i=dn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ja(o,r,e+1/3),this.g=ja(o,r,e),this.b=ja(o,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ft.fromWorkingColorSpace(hn.copy(this),e),Math.round(dn(hn.r*255,0,255))*65536+Math.round(dn(hn.g*255,0,255))*256+Math.round(dn(hn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=It){ft.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(mo);let i=Na(Li.h,mo.h,t),s=Na(Li.s,mo.s,t),r=Na(Li.l,mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new de;de.NAMES=iu;var op=0,xi=class extends ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Hi(),this.name="",this.blending=Bi,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ml&&(i.blendSrc=this.blendSrc),this.blendDst!==gl&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},et=class extends xi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Xt=new I,go=new ce,en=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ec,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)go.fromBufferAttribute(this,t),go.applyMatrix3(e),this.setXY(t,go.x,go.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}};var $o=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Jo=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var _t=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},ap=0,Un=new Tt,el=new Vt,Us=new I,Fn=new bi,Cr=new bi,Kt=new I,qt=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?Jo:$o)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Fn.min,Cr.min),Fn.expandByPoint(Kt),Kt.addVectors(Fn.max,Cr.max),Fn.expandByPoint(Kt)):(Fn.expandByPoint(Cr.min),Fn.expandByPoint(Cr.max))}Fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Kt.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),Kt.add(Us)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new I,l[F]=new I;let c=new I,h=new I,d=new I,u=new ce,p=new ce,g=new ce,E=new I,m=new I;function f(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,B=A.count;for(let H=P,X=P+B;H<X;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new I,y=new I,D=new I,R=new I;function x(F){D.fromBufferAttribute(s,F),R.copy(D);let S=a[F];_.copy(S),_.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(R,S);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,S=v.length;F<S;++F){let A=v[F],P=A.start,B=A.count;for(let H=P,X=P+B;H<X;H+=3)x(e.getX(H+0)),x(e.getX(H+1)),x(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new en(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nd=new Tt,os=new Yo,Eo=new Vi,id=new I,yo=new I,vo=new I,_o=new I,tl=new I,Ao=new I,sd=new I,Mo=new I,G=class extends Vt{constructor(e=new qt,t=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(tl.fromBufferAttribute(d,e),o?Ao.addScaledVector(tl,h):Ao.addScaledVector(tl.sub(t),h))}t.add(Ao)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Eo.containsPoint(os.origin)===!1&&(os.intersectSphere(Eo,id)===null||os.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(r).invert(),os.copy(e.ray).applyMatrix4(nd),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,D=_;y<D;y+=3){let R=a.getX(y),x=a.getX(y+1),F=a.getX(y+2);s=So(this,f,e,i,c,h,d,R,x,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=So(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,D=_;y<D;y+=3){let R=y,x=y+1,F=y+2;s=So(this,f,e,i,c,h,d,R,x,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=m,_=m+1,y=m+2;s=So(this,o,e,i,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function lp(n,e,t,i,s,r,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zi,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:n}}function So(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,yo),n.getVertexPosition(l,vo),n.getVertexPosition(c,_o);let h=lp(n,e,t,i,yo,vo,_o,sd);if(h){let d=new I;Oi.getBarycoord(sd,yo,vo,_o,d),s&&(h.uv=Oi.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Oi.getNormal(yo,vo,_o,u.normal),h.face=u,h.barycoord=d}return h}var _n=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function g(E,m,f,v,_,y,D,R,x,F,S){let A=y/x,P=D/F,B=y/2,H=D/2,X=R/2,ee=x+1,Z=F+1,oe=0,Y=0,pe=new I;for(let Me=0;Me<Z;Me++){let Oe=Me*P-H;for(let it=0;it<ee;it++){let Ct=it*A-B;pe[E]=Ct*v,pe[m]=Oe*_,pe[f]=X,c.push(pe.x,pe.y,pe.z),pe[E]=0,pe[m]=0,pe[f]=R>0?1:-1,h.push(pe.x,pe.y,pe.z),d.push(it/x),d.push(1-Me/F),oe+=1}}for(let Me=0;Me<F;Me++)for(let Oe=0;Oe<x;Oe++){let it=u+Oe+ee*Me,Ct=u+Oe+ee*(Me+1),Q=u+(Oe+1)+ee*(Me+1),ae=u+(Oe+1)+ee*Me;l.push(it,Ct,ae),l.push(Ct,Q,ae),Y+=6}a.addGroup(p,Y,S),p+=Y,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function js(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function mn(n){let e={};for(let t=0;t<n.length;t++){let i=js(n[t]);for(let s in i)e[s]=i[s]}return e}function cp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function su(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var cr={clone:js,merge:mn},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends xi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Qo=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=_i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new I,rd=new ce,od=new ce,on=class extends Qo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,rd,od),t.subVectors(od,rd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Os=1,sc=class extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Ns,Os,e,t);s.layers=this.layers,this.add(s);let r=new on(Ns,Os,e,t);r.layers=this.layers,this.add(r);let o=new on(Ns,Os,e,t);o.layers=this.layers,this.add(o);let a=new on(Ns,Os,e,t);a.layers=this.layers,this.add(a);let l=new on(Ns,Os,e,t);l.layers=this.layers,this.add(l);let c=new on(Ns,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ko=class extends vn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rc=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ko(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ei});r.uniforms.tEquirect.value=t;let o=new G(s,r),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=Kn),new sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},nl=new I,up=new I,fp=new Qe,vi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nl.subVectors(i,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fp.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new Vi,bo=new I,Gr=class{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],E=s[10],m=s[11],f=s[12],v=s[13],_=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-_).normalize(),t===_i)i[5].setComponents(l+a,u+d,m+E,y+_).normalize();else if(t===Go)i[5].setComponents(a,d,E,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ru(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function pp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],E=d[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let E=d[p];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Te=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],E=[],m=[];for(let f=0;f<h;f++){let v=f*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let _=v+c*f,y=v+c*(f+1),D=v+1+c*(f+1),R=v+1+c*f;p.push(_,y,R),p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(E,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
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
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zp=`vec3 transformedNormal = objectNormal;
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
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
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
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,f0=`struct PhysicalMaterial {
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
}`,p0=`
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Pm=`#define LAMBERT
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
}`,Im=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Bm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,km=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:Ep,alphamap_pars_fragment:yp,alphatest_fragment:vp,alphatest_pars_fragment:_p,aomap_fragment:Ap,aomap_pars_fragment:Mp,batching_pars_vertex:Sp,batching_vertex:bp,begin_vertex:xp,beginnormal_vertex:Tp,bsdfs:wp,iridescence_fragment:Rp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Dp,color_fragment:Lp,color_pars_fragment:Up,color_pars_vertex:Np,color_vertex:Op,common:Bp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:zp,displacementmap_pars_vertex:kp,displacementmap_vertex:Gp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:$p,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:a0,envmap_vertex:Qp,fog_vertex:Kp,fog_pars_vertex:jp,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:o0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:h0,lights_phong_pars_fragment:d0,lights_physical_fragment:u0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:_0,map_fragment:A0,map_pars_fragment:M0,map_particle_fragment:S0,map_particle_pars_fragment:b0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:T0,morphinstance_vertex:w0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:F0,morphtarget_vertex:P0,normal_fragment_begin:I0,normal_fragment_maps:D0,normal_pars_fragment:L0,normal_pars_vertex:U0,normal_vertex:N0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:k0,opaque_fragment:G0,packing:V0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:K0,shadowmask_pars_fragment:j0,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:om,tonemapping_pars_fragment:am,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:dm,uv_vertex:um,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:Em,cube_vert:ym,cube_frag:vm,depth_vert:_m,depth_frag:Am,distanceRGBA_vert:Mm,distanceRGBA_frag:Sm,equirect_vert:bm,equirect_frag:xm,linedashed_vert:Tm,linedashed_frag:wm,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Fm,meshlambert_frag:Pm,meshmatcap_vert:Im,meshmatcap_frag:Dm,meshnormal_vert:Lm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Om,meshphysical_vert:Bm,meshphysical_frag:Hm,meshtoon_vert:zm,meshtoon_frag:km,points_vert:Gm,points_frag:Vm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},he={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Jn={basic:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new de(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:mn([he.points,he.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:mn([he.common,he.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:mn([he.sprite,he.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:mn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:mn([he.lights,he.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Jn.physical={uniforms:mn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var xo={r:0,b:0,g:0},ls=new ni,Zm=new Tt;function $m(n,e,t,i,s,r,o){let a=new de(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function E(v){let _=!1,y=g(v);y===null?f(a,l):y&&y.isColor&&(f(y,1),_=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===ca)?(h===void 0&&(h=new G(new _n(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:js(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ls.copy(_.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(ls)),h.material.toneMapped=ft.getTransfer(y.colorSpace)!==St,(d!==y||u!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new G(new Te(2,2),new sn({name:"BackgroundMaterial",uniforms:js(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(xo,su(n)),i.buffers.color.setClear(xo.r,xo.g,xo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:E,addToRenderList:m}}function Jm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,B,H,X){let ee=!1,Z=d(H,B,P);r!==Z&&(r=Z,c(r.object)),ee=p(A,H,B,X),ee&&g(A,H,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(A,P,B,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,B){let H=B.wireframe===!0,X=i[A.id];X===void 0&&(X={},i[A.id]=X);let ee=X[P.id];ee===void 0&&(ee={},X[P.id]=ee);let Z=ee[H];return Z===void 0&&(Z=u(l()),ee[H]=Z),Z}function u(A){let P=[],B=[],H=[];for(let X=0;X<t;X++)P[X]=0,B[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:H,object:A,attributes:{},index:null}}function p(A,P,B,H){let X=r.attributes,ee=P.attributes,Z=0,oe=B.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Me=X[Y],Oe=ee[Y];if(Oe===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Oe=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Oe=A.instanceColor)),Me===void 0||Me.attribute!==Oe||Oe&&Me.data!==Oe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function g(A,P,B,H){let X={},ee=P.attributes,Z=0,oe=B.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Me=ee[Y];Me===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor));let Oe={};Oe.attribute=Me,Me&&Me.data&&(Oe.data=Me.data),X[Y]=Oe,Z++}r.attributes=X,r.attributesNum=Z,r.index=H}function E(){let A=r.newAttributes;for(let P=0,B=A.length;P<B;P++)A[P]=0}function m(A){f(A,0)}function f(A,P){let B=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;B[A]=1,H[A]===0&&(n.enableVertexAttribArray(A),H[A]=1),X[A]!==P&&(n.vertexAttribDivisor(A,P),X[A]=P)}function v(){let A=r.newAttributes,P=r.enabledAttributes;for(let B=0,H=P.length;B<H;B++)P[B]!==A[B]&&(n.disableVertexAttribArray(B),P[B]=0)}function _(A,P,B,H,X,ee,Z){Z===!0?n.vertexAttribIPointer(A,P,B,X,ee):n.vertexAttribPointer(A,P,B,H,X,ee)}function y(A,P,B,H){E();let X=H.attributes,ee=B.getAttributes(),Z=P.defaultAttributeValues;for(let oe in ee){let Y=ee[oe];if(Y.location>=0){let pe=X[oe];if(pe===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(pe=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(pe=A.instanceColor)),pe!==void 0){let Me=pe.normalized,Oe=pe.itemSize,it=e.get(pe);if(it===void 0)continue;let Ct=it.buffer,Q=it.type,ae=it.bytesPerElement,Ie=Q===n.INT||Q===n.UNSIGNED_INT||pe.gpuType===Gc;if(pe.isInterleavedBufferAttribute){let me=pe.data,Ve=me.stride,Ze=pe.offset;if(me.isInstancedInterleavedBuffer){for(let st=0;st<Y.locationSize;st++)f(Y.location+st,me.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let st=0;st<Y.locationSize;st++)m(Y.location+st);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let st=0;st<Y.locationSize;st++)_(Y.location+st,Oe/Y.locationSize,Q,Me,Ve*ae,(Ze+Oe/Y.locationSize*st)*ae,Ie)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)f(Y.location+me,pe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let me=0;me<Y.locationSize;me++)_(Y.location+me,Oe/Y.locationSize,Q,Me,Oe*ae,Oe/Y.locationSize*me*ae,Ie)}}else if(Z!==void 0){let Me=Z[oe];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(Y.location,Me);break;case 3:n.vertexAttrib3fv(Y.location,Me);break;case 4:n.vertexAttrib4fv(Y.location,Me);break;default:n.vertexAttrib1fv(Y.location,Me)}}}}v()}function D(){F();for(let A in i){let P=i[A];for(let B in P){let H=P[B];for(let X in H)h(H[X].object),delete H[X];delete P[B]}delete i[A]}}function R(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let B in P){let H=P[B];for(let X in H)h(H[X].object),delete H[X];delete P[B]}delete i[A.id]}function x(A){for(let P in i){let B=i[P];if(B[A.id]===void 0)continue;let H=B[A.id];for(let X in H)h(H[X].object),delete H[X];delete B[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:x,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function Qm(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Km(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Gn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let F=x===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Mi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==jn&&!F)}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:D,maxSamples:R}}function jm(n){let e=this,t=null,i=0,s=!1,r=!1,o=new vi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,_=v*4,y=f.clippingState||null;l.value=y,y=h(g,u,_,p);for(let D=0;D!==_;++D)y[D]=t[D];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=p+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,y=p;_!==E;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function e1(n){let e=new WeakMap;function t(o,a){return a===bl?o.mapping=$s:a===xl&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===bl||a===xl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var er=class extends Qo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ws=4,ad=[.125,.215,.35,.446,.526,.582],us=20,il=new er,ld=new de,sl=null,rl=0,ol=0,al=!1,hs=(1+Math.sqrt(5))/2,Bs=1/hs,cd=[new I(-hs,Bs,0),new I(hs,Bs,0),new I(-Bs,0,hs),new I(Bs,0,hs),new I(0,hs,-Bs),new I(0,hs,Bs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Mn,format:Gn,colorSpace:qi,depthBuffer:!1},s=hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t1(r)),this._blurMaterial=n1(r,e,t)}return s}_compileMaterial(e){let t=new G(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,i,s){let a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ld),h.toneMapping=ti,h.autoClear=!1;let p=new et({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new G(new _n,p),E=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,E=!0):(p.color.copy(ld),E=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;To(s,v*_,f>2?_:0,_,_),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===$s||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;To(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,il)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cd[(s-r-1)%cd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new G(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);let f=[],v=0;for(let x=0;x<us;++x){let F=x/E,S=Math.exp(-F*F/2);f.push(S),x===0?v+=S:x<m&&(v+=2*S)}for(let x=0;x<f.length;x++)f[x]=f[x]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let y=this._sizeLods[s],D=3*y*(s>_-Ws?s-_+Ws:0),R=4*(this._cubeSize-y);To(t,D,R,3*y,2*y),l.setRenderTarget(t),l.render(d,il)}};function t1(n){let e=[],t=[],i=[],s=n,r=n-Ws+1+ad.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ws?l=ad[o-n+Ws-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,E=3,m=2,f=1,v=new Float32Array(E*g*p),_=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){let x=R%3*2/3-1,F=R>2?0:-1,S=[x,F,0,x+2/3,F,0,x+2/3,F+1,0,x,F,0,x+2/3,F+1,0,x,F+1,0];v.set(S,E*g*R),_.set(u,m*g*R);let A=[R,R,R,R,R,R];y.set(A,f*g*R)}let D=new qt;D.setAttribute("position",new en(v,E)),D.setAttribute("uv",new en(_,m)),D.setAttribute("faceIndex",new en(y,f)),e.push(D),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hd(n,e,t){let i=new nn(n,e,t);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function To(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function n1(n,e,t){let i=new Float32Array(us),s=new I(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function dd(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ud(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function i1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===bl||l===xl,h=l===$s||l===Js;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new jo(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new jo(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function s1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Nr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function r1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let E=p[g];for(let m=0,f=E.length;m<f;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,E=0;if(p!==null){let v=p.array;E=p.version;for(let _=0,y=v.length;_<y;_+=3){let D=v[_+0],R=v[_+1],x=v[_+2];u.push(D,R,R,x,x,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let D=_+0,R=_+1,x=_+2;u.push(D,R,R,x,x,D)}}else return;let m=new(nu(u)?Jo:$o)(u,1);m.version=E;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function o1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,E,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*E[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function a1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function l1(n,e,t){let i=new WeakMap,s=new xt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),E===!0&&(_=3);let y=a.attributes.position.count*_,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*D*4*d),x=new qo(R,y,D,d);x.type=jn,x.needsUpdate=!0;let F=_*4;for(let A=0;A<d;A++){let P=m[A],B=f[A],H=v[A],X=y*D*4*A;for(let ee=0;ee<P.count;ee++){let Z=ee*F;p===!0&&(s.fromBufferAttribute(P,ee),R[X+Z+0]=s.x,R[X+Z+1]=s.y,R[X+Z+2]=s.z,R[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(B,ee),R[X+Z+4]=s.x,R[X+Z+5]=s.y,R[X+Z+6]=s.z,R[X+Z+7]=0),E===!0&&(s.fromBufferAttribute(H,ee),R[X+Z+8]=s.x,R[X+Z+9]=s.y,R[X+Z+10]=s.z,R[X+Z+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ce(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function c1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var tr=class extends vn{constructor(e,t,i,s,r,o,a,l,c,h=Xs){if(h!==Xs&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xs&&(i=Si),i===void 0&&h===Ks&&(i=Qs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ou=new vn,fd=new tr(1,1),au=new qo,lu=new ic,cu=new Ko,pd=[],md=[],gd=new Float32Array(16),Ed=new Float32Array(9),yd=new Float32Array(4);function hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function da(n,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function h1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function p1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;yd.set(i),n.uniformMatrix2fv(this.addr,!1,yd),Zt(t,i)}}function m1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;Ed.set(i),n.uniformMatrix3fv(this.addr,!1,Ed),Zt(t,i)}}function g1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;gd.set(i),n.uniformMatrix4fv(this.addr,!1,gd),Zt(t,i)}}function E1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function A1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function S1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function x1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fd.compareFunction=tu,r=fd):r=ou,t.setTexture2D(e||r,s)}function T1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lu,s)}function w1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cu,s)}function R1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||au,s)}function C1(n){switch(n){case 5126:return h1;case 35664:return d1;case 35665:return u1;case 35666:return f1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return E1;case 35667:case 35671:return y1;case 35668:case 35672:return v1;case 35669:case 35673:return _1;case 5125:return A1;case 36294:return M1;case 36295:return S1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return R1}}function F1(n,e){n.uniform1fv(this.addr,e)}function P1(n,e){let t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function I1(n,e){let t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function D1(n,e){let t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function L1(n,e){let t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U1(n,e){let t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N1(n,e){let t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O1(n,e){n.uniform1iv(this.addr,e)}function B1(n,e){n.uniform2iv(this.addr,e)}function H1(n,e){n.uniform3iv(this.addr,e)}function z1(n,e){n.uniform4iv(this.addr,e)}function k1(n,e){n.uniform1uiv(this.addr,e)}function G1(n,e){n.uniform2uiv(this.addr,e)}function V1(n,e){n.uniform3uiv(this.addr,e)}function W1(n,e){n.uniform4uiv(this.addr,e)}function X1(n,e,t){let i=this.cache,s=e.length,r=da(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ou,r[o])}function q1(n,e,t){let i=this.cache,s=e.length,r=da(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lu,r[o])}function Y1(n,e,t){let i=this.cache,s=e.length,r=da(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cu,r[o])}function Z1(n,e,t){let i=this.cache,s=e.length,r=da(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||au,r[o])}function $1(n){switch(n){case 5126:return F1;case 35664:return P1;case 35665:return I1;case 35666:return D1;case 35674:return L1;case 35675:return U1;case 35676:return N1;case 5124:case 35670:return O1;case 35667:case 35671:return B1;case 35668:case 35672:return H1;case 35669:case 35673:return z1;case 5125:return k1;case 36294:return G1;case 36295:return V1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return Z1}}var oc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C1(t.type)}},ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$1(t.type)}},lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ll=/(\w+)(\])?(\[|\.)?/g;function vd(n,e){n.seq.push(e),n.map[e.id]=e}function J1(n,e,t){let i=n.name,s=i.length;for(ll.lastIndex=0;;){let r=ll.exec(i),o=ll.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vd(t,c===void 0?new oc(a,n,e):new ac(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new lc(a),vd(t,d)),t=d}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);J1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function _d(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Q1=37297,K1=0;function j1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Ad=new Qe;function e2(n){ft._getMatrix(Ad,ft.workingColorSpace,n);let e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case ha:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Md(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+j1(n.getShaderSource(e),o)}else return s}function t2(n,e){let t=e2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n2(n,e){let t;switch(e){case Cf:t="Linear";break;case Ff:t="Reinhard";break;case Pf:t="Cineon";break;case If:t="ACESFilmic";break;case Lf:t="AgX";break;case Uf:t="Neutral";break;case Df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wo=new I;function i2(){ft.getLuminanceCoefficients(wo);let n=wo.x.toFixed(4),e=wo.y.toFixed(4),t=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function r2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function Sd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(n){return n.replace(a2,c2)}var l2=new Map;function c2(n,e){let t=je[e];if(t===void 0){let i=l2.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}var h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(n){return n.replace(h2,d2)}function d2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function u2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function f2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Js:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function m2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vd:e="ENVMAP_BLENDING_MULTIPLY";break;case wf:e="ENVMAP_BLENDING_MIX";break;case Rf:e="ENVMAP_BLENDING_ADD";break}return e}function g2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function E2(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=u2(t),c=f2(t),h=p2(t),d=m2(t),u=g2(t),p=s2(t),g=r2(r),E=s.createProgram(),m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),f.length>0&&(f+=`
`)):(m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),f=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?je.tonemapping_pars_fragment:"",t.toneMapping!==ti?n2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,t2("linearToOutputTexel",t.outputColorSpace),i2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=cc(o),o=Sd(o,t),o=bd(o,t),a=cc(a),a=Sd(a,t),a=bd(a,t),o=xd(o),a=xd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=v+m+o,y=v+f+a,D=_d(s,s.VERTEX_SHADER,_),R=_d(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,R),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function x(P){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(E).trim(),H=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(R).trim(),ee=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,R);else{let oe=Md(s,D,"vertex"),Y=Md(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+oe+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||X==="")&&(Z=!1);Z&&(P.diagnostics={runnable:ee,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(D),s.deleteShader(R),F=new Ys(s,E),S=o2(s,E)}let F;this.getUniforms=function(){return F===void 0&&x(this),F};let S;this.getAttributes=function(){return S===void 0&&x(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,Q1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=R,this}var y2=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dc(e),t.set(e,i)),i}},dc=class{constructor(e){this.id=y2++,this.code=e,this.usedTimes=0}};function v2(n,e,t,i,s,r,o){let a=new Zo,l=new hc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,B,H){let X=B.fog,ee=H.geometry,Z=S.isMeshStandardMaterial?B.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=oe&&oe.mapping===ca?oe.image.height:null,pe=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Me=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Oe=Me!==void 0?Me.length:0,it=0;ee.morphAttributes.position!==void 0&&(it=1),ee.morphAttributes.normal!==void 0&&(it=2),ee.morphAttributes.color!==void 0&&(it=3);let Ct,Q,ae,Ie;if(pe){let At=Jn[pe];Ct=At.vertexShader,Q=At.fragmentShader}else Ct=S.vertexShader,Q=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Ie=l.getFragmentShaderID(S);let me=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),Ze=H.isInstancedMesh===!0,st=H.isBatchedMesh===!0,Ht=!!S.map,dt=!!S.matcap,Gt=!!oe,O=!!S.aoMap,Dn=!!S.lightMap,lt=!!S.bumpMap,ct=!!S.normalMap,ze=!!S.displacementMap,Dt=!!S.emissiveMap,He=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,te=S.iridescence>0,J=S.sheen>0,De=S.transmission>0,ge=M&&!!S.anisotropyMap,Se=z&&!!S.clearcoatMap,ut=z&&!!S.clearcoatNormalMap,se=z&&!!S.clearcoatRoughnessMap,be=te&&!!S.iridescenceMap,ke=te&&!!S.iridescenceThicknessMap,qe=J&&!!S.sheenColorMap,xe=J&&!!S.sheenRoughnessMap,ht=!!S.specularMap,Ke=!!S.specularColorMap,Ft=!!S.specularIntensityMap,L=De&&!!S.transmissionMap,fe=De&&!!S.thicknessMap,q=!!S.gradientMap,j=!!S.alphaMap,ve=S.alphaTest>0,Ee=!!S.alphaHash,$e=!!S.extensions,kt=ti;S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(kt=n.toneMapping);let ln={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Ct,fragmentShader:Q,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:st,batchingColor:st&&H._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&H.instanceColor!==null,instancingMorph:Ze&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:qi,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:dt,envMap:Gt,envMapMode:Gt&&oe.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:Dn,bumpMap:lt,normalMap:ct,displacementMap:u&&ze,emissiveMap:Dt,normalMapObjectSpace:ct&&S.normalMapType===Bf,normalMapTangentSpace:ct&&S.normalMapType===eu,metalnessMap:He,roughnessMap:w,anisotropy:M,anisotropyMap:ge,clearcoat:z,clearcoatMap:Se,clearcoatNormalMap:ut,clearcoatRoughnessMap:se,dispersion:K,iridescence:te,iridescenceMap:be,iridescenceThicknessMap:ke,sheen:J,sheenColorMap:qe,sheenRoughnessMap:xe,specularMap:ht,specularColorMap:Ke,specularIntensityMap:Ft,transmission:De,transmissionMap:L,thicknessMap:fe,gradientMap:q,opaque:S.transparent===!1&&S.blending===Bi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ve,alphaHash:Ee,combine:S.combine,mapUv:Ht&&E(S.map.channel),aoMapUv:O&&E(S.aoMap.channel),lightMapUv:Dn&&E(S.lightMap.channel),bumpMapUv:lt&&E(S.bumpMap.channel),normalMapUv:ct&&E(S.normalMap.channel),displacementMapUv:ze&&E(S.displacementMap.channel),emissiveMapUv:Dt&&E(S.emissiveMap.channel),metalnessMapUv:He&&E(S.metalnessMap.channel),roughnessMapUv:w&&E(S.roughnessMap.channel),anisotropyMapUv:ge&&E(S.anisotropyMap.channel),clearcoatMapUv:Se&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:ut&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&E(S.sheenRoughnessMap.channel),specularMapUv:ht&&E(S.specularMap.channel),specularColorMapUv:Ke&&E(S.specularColorMap.channel),specularIntensityMapUv:Ft&&E(S.specularIntensityMap.channel),transmissionMapUv:L&&E(S.transmissionMap.channel),thicknessMapUv:fe&&E(S.thicknessMap.channel),alphaMapUv:j&&E(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ct||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ee.attributes.uv&&(Ht||j),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ve,skinning:H.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mt,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ln.vertexUv1s=c.has(1),ln.vertexUv2s=c.has(2),ln.vertexUv3s=c.has(3),c.clear(),ln}function f(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(A,S),_(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let B=Jn[A];P=cr.clone(B.uniforms)}else P=S.uniforms;return P}function D(S,A){let P;for(let B=0,H=h.length;B<H;B++){let X=h[B];if(X.cacheKey===A){P=X,++P.usedTimes;break}}return P===void 0&&(P=new E2(n,A,S,r),h.push(P)),P}function R(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function x(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:R,releaseShaderCache:x,programs:h,dispose:F}}function _2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function A2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,p,g,E,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=E,f.group=m),e++,f}function a(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||A2),i.length>1&&i.sort(u||wd),s.length>1&&s.sort(u||wd)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function M2(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Rd,n.set(i,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function S2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new de};break;case"SpotLight":t={position:new I,direction:new I,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function b2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var x2=0;function T2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w2(n){let e=new S2,t=b2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Tt,o=new Tt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,v=0,_=0,y=0,D=0,R=0,x=0;c.sort(T2);for(let S=0,A=c.length;S<A;S++){let P=c[S],B=P.color,H=P.intensity,X=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*H,d+=B.g*H,u+=B.b*H;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],H);x++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let oe=P.shadow,Y=t.get(P);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Z,p++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(B).multiplyScalar(H),Z.distance=X,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[E]=Z;let oe=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,oe.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[E]=oe.matrix,P.castShadow){let Y=t.get(P);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=ee,y++}E++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(B).multiplyScalar(H),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let oe=P.shadow,Y=t.get(P);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=Z,g++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(H),Z.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[f]=Z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==v||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==x)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=x,F.directionalLength=p,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=v,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=x,i.version=x2++)}function l(c,h){let d=0,u=0,p=0,g=0,E=0,m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let _=c[f];if(_.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function Cd(n){let e=new w2(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function R2(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Cd(n),e.set(s,[a])):r>=o.length?(a=new Cd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Wi=class extends xi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uc=class extends xi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},C2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F2=`uniform sampler2D shadow_pass;
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
}`;function P2(n,e,t){let i=new Gr,s=new ce,r=new ce,o=new xt,a=new Wi({depthPacking:lr}),l=new uc,c={},h=t.maxTextureSize,d={[zi]:jt,[jt]:zi,[Mt]:Mt},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:C2,fragmentShader:F2}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new G(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let f=this.type;this.render=function(R,x,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ei),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=f!==yi&&this.type===yi,X=f===yi&&this.type!==yi;for(let ee=0,Z=R.length;ee<Z;ee++){let oe=R[ee],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let pe=Y.getFrameExtents();if(s.multiply(pe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,Y.mapSize.y=r.y)),Y.map===null||H===!0||X===!0){let Oe=this.type!==yi?{minFilter:Pn,magFilter:Pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new nn(s.x,s.y,Oe),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Me=Y.getViewportCount();for(let Oe=0;Oe<Me;Oe++){let it=Y.getViewport(Oe);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),B.viewport(o),Y.updateMatrices(oe,Oe),i=Y.getFrustum(),y(x,F,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===yi&&v(Y,F),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function v(R,x){let F=e.update(E);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new nn(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(x,null,F,u,E,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(x,null,F,p,E,null)}function _(R,x,F,S){let A=null,P=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)A=P;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){let B=A.uuid,H=x.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let ee=X[H];ee===void 0&&(ee=A.clone(),X[H]=ee,x.addEventListener("dispose",D)),A=ee}if(A.visible=x.visible,A.wireframe=x.wireframe,S===yi?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=n.properties.get(A);B.light=F}return A}function y(R,x,F,S,A){if(R.visible===!1)return;if(R.layers.test(x.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===yi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let H=e.update(R),X=R.material;if(Array.isArray(X)){let ee=H.groups;for(let Z=0,oe=ee.length;Z<oe;Z++){let Y=ee[Z],pe=X[Y.materialIndex];if(pe&&pe.visible){let Me=_(R,pe,S,A);R.onBeforeShadow(n,R,x,F,H,Me,Y),n.renderBufferDirect(F,null,H,Me,R,Y),R.onAfterShadow(n,R,x,F,H,Me,Y)}}}else if(X.visible){let ee=_(R,X,S,A);R.onBeforeShadow(n,R,x,F,H,ee,null),n.renderBufferDirect(F,null,H,ee,R,null),R.onAfterShadow(n,R,x,F,H,ee,null)}}let B=R.children;for(let H=0,X=B.length;H<X;H++)y(B[H],x,F,S,A)}function D(R){R.target.removeEventListener("dispose",D);for(let F in c){let S=c[F],A=R.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var I2={[El]:yl,[vl]:Ml,[_l]:Sl,[Zs]:Al,[yl]:El,[Ml]:vl,[Sl]:_l,[Al]:Zs};function D2(n,e){function t(){let L=!1,fe=new xt,q=null,j=new xt(0,0,0,0);return{setMask:function(ve){q!==ve&&!L&&(n.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ee,$e,kt,ln){ln===!0&&(ve*=kt,Ee*=kt,$e*=kt),fe.set(ve,Ee,$e,kt),j.equals(fe)===!1&&(n.clearColor(ve,Ee,$e,kt),j.copy(fe))},reset:function(){L=!1,q=null,j.set(-1,0,0,0)}}}function i(){let L=!1,fe=!1,q=null,j=null,ve=null;return{setReversed:function(Ee){if(fe!==Ee){let $e=e.get("EXT_clip_control");fe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);let kt=ve;ve=null,this.setClear(kt)}fe=Ee},getReversed:function(){return fe},setTest:function(Ee){Ee?me(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(Ee){q!==Ee&&!L&&(n.depthMask(Ee),q=Ee)},setFunc:function(Ee){if(fe&&(Ee=I2[Ee]),j!==Ee){switch(Ee){case El:n.depthFunc(n.NEVER);break;case yl:n.depthFunc(n.ALWAYS);break;case vl:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case _l:n.depthFunc(n.EQUAL);break;case Al:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){ve!==Ee&&(fe&&(Ee=1-Ee),n.clearDepth(Ee),ve=Ee)},reset:function(){L=!1,q=null,j=null,ve=null,fe=!1}}}function s(){let L=!1,fe=null,q=null,j=null,ve=null,Ee=null,$e=null,kt=null,ln=null;return{setTest:function(At){L||(At?me(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(At){fe!==At&&!L&&(n.stencilMask(At),fe=At)},setFunc:function(At,On,di){(q!==At||j!==On||ve!==di)&&(n.stencilFunc(At,On,di),q=At,j=On,ve=di)},setOp:function(At,On,di){(Ee!==At||$e!==On||kt!==di)&&(n.stencilOp(At,On,di),Ee=At,$e=On,kt=di)},setLocked:function(At){L=At},setClear:function(At){ln!==At&&(n.clearStencil(At),ln=At)},reset:function(){L=!1,fe=null,q=null,j=null,ve=null,Ee=null,$e=null,kt=null,ln=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,D=null,R=null,x=new de(0,0,0),F=0,S=!1,A=null,P=null,B=null,H=null,X=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,oe=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=oe>=2);let pe=null,Me={},Oe=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),Ct=new xt().fromArray(Oe),Q=new xt().fromArray(it);function ae(L,fe,q,j){let ve=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(L,Ee),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<q;$e++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(fe+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Ee}let Ie={};Ie[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Ie[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ie[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(Zs),lt(!1),ct(Dh),me(n.CULL_FACE),O(ei);function me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ve(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ze(L,fe){return d[L]!==fe?(n.bindFramebuffer(L,fe),d[L]=fe,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function st(L,fe){let q=p,j=!1;if(L){q=u.get(fe),q===void 0&&(q=[],u.set(fe,q));let ve=L.textures;if(q.length!==ve.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,$e=ve.length;Ee<$e;Ee++)q[Ee]=n.COLOR_ATTACHMENT0+Ee;q.length=ve.length,j=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,j=!0);j&&n.drawBuffers(q)}function Ht(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let dt={[ds]:n.FUNC_ADD,[hf]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};dt[uf]=n.MIN,dt[ff]=n.MAX;let Gt={[pf]:n.ZERO,[mf]:n.ONE,[gf]:n.SRC_COLOR,[ml]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[_f]:n.DST_COLOR,[yf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[gl]:n.ONE_MINUS_SRC_ALPHA,[Af]:n.ONE_MINUS_DST_COLOR,[vf]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[bf]:n.ONE_MINUS_CONSTANT_COLOR,[xf]:n.CONSTANT_ALPHA,[Tf]:n.ONE_MINUS_CONSTANT_ALPHA};function O(L,fe,q,j,ve,Ee,$e,kt,ln,At){if(L===ei){E===!0&&(Ve(n.BLEND),E=!1);return}if(E===!1&&(me(n.BLEND),E=!0),L!==cf){if(L!==m||At!==S){if((f!==ds||y!==ds)&&(n.blendEquation(n.FUNC_ADD),f=ds,y=ds),At)switch(L){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.ONE,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,D=null,R=null,x.set(0,0,0),F=0,m=L,S=At}return}ve=ve||fe,Ee=Ee||q,$e=$e||j,(fe!==f||ve!==y)&&(n.blendEquationSeparate(dt[fe],dt[ve]),f=fe,y=ve),(q!==v||j!==_||Ee!==D||$e!==R)&&(n.blendFuncSeparate(Gt[q],Gt[j],Gt[Ee],Gt[$e]),v=q,_=j,D=Ee,R=$e),(kt.equals(x)===!1||ln!==F)&&(n.blendColor(kt.r,kt.g,kt.b,ln),x.copy(kt),F=ln),m=L,S=!1}function Dn(L,fe){L.side===Mt?Ve(n.CULL_FACE):me(n.CULL_FACE);let q=L.side===jt;fe&&(q=!q),lt(q),L.blending===Bi&&L.transparent===!1?O(ei):O(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(L){A!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),A=L)}function ct(L){L!==af?(me(n.CULL_FACE),L!==P&&(L===Dh?n.cullFace(n.BACK):L===lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),P=L}function ze(L){L!==B&&(Z&&n.lineWidth(L),B=L)}function Dt(L,fe,q){L?(me(n.POLYGON_OFFSET_FILL),(H!==fe||X!==q)&&(n.polygonOffset(fe,q),H=fe,X=q)):Ve(n.POLYGON_OFFSET_FILL)}function He(L){L?me(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function w(L){L===void 0&&(L=n.TEXTURE0+ee-1),pe!==L&&(n.activeTexture(L),pe=L)}function M(L,fe,q){q===void 0&&(pe===null?q=n.TEXTURE0+ee-1:q=pe);let j=Me[q];j===void 0&&(j={type:void 0,texture:void 0},Me[q]=j),(j.type!==L||j.texture!==fe)&&(pe!==q&&(n.activeTexture(q),pe=q),n.bindTexture(L,fe||Ie[L]),j.type=L,j.texture=fe)}function z(){let L=Me[pe];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(L){Ct.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ct.copy(L))}function xe(L){Q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function ht(L,fe){let q=c.get(fe);q===void 0&&(q=new WeakMap,c.set(fe,q));let j=q.get(L);j===void 0&&(j=n.getUniformBlockIndex(fe,L.name),q.set(L,j))}function Ke(L,fe){let j=c.get(fe).get(L);l.get(fe)!==j&&(n.uniformBlockBinding(fe,j,L.__bindingPointIndex),l.set(fe,j))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pe=null,Me={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,_=null,y=null,D=null,R=null,x=new de(0,0,0),F=0,S=!1,A=null,P=null,B=null,H=null,X=null,Ct.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Ve,bindFramebuffer:Ze,drawBuffers:st,useProgram:Ht,setBlending:O,setMaterial:Dn,setFlipSided:lt,setCullFace:ct,setLineWidth:ze,setPolygonOffset:Dt,setScissorTest:He,activeTexture:w,bindTexture:M,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:be,texImage3D:ke,updateUBOMapping:ht,uniformBlockBinding:Ke,texStorage2D:ut,texStorage3D:se,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:ge,compressedTexSubImage3D:Se,scissor:qe,viewport:xe,reset:Ft}}function Fd(n,e,t,i){let s=L2(i);switch(t){case Zd:return n*e;case Jd:return n*e;case Qd:return n*e*2;case Xc:return n*e/s.components*s.byteLength;case qc:return n*e/s.components*s.byteLength;case Kd:return n*e*2/s.components*s.byteLength;case Yc:return n*e*2/s.components*s.byteLength;case $d:return n*e*3/s.components*s.byteLength;case Gn:return n*e*4/s.components*s.byteLength;case Zc:return n*e*4/s.components*s.byteLength;case No:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bo:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Fl:return Math.max(n,16)*Math.max(e,8)/4;case wl:case Cl:return Math.max(n,8)*Math.max(e,8)/2;case Pl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zo:case Zl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jd:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ql:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function L2(n){switch(n){case Mi:case Xd:return{byteLength:1,components:1};case kr:case qd:case Mn:return{byteLength:2,components:1};case Vc:case Wc:return{byteLength:2,components:4};case Si:case Gc:case jn:return{byteLength:4,components:1};case Yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function U2(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):Wo("canvas")}function E(w,M,z){let K=1,te=He(w);if((te.width>z||te.height>z)&&(K=z/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let J=Math.floor(K*te.width),De=Math.floor(K*te.height);d===void 0&&(d=g(J,De));let ge=M?g(J,De):d;return ge.width=J,ge.height=De,ge.getContext("2d").drawImage(w,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+De+")."),ge}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(w,M,z,K,te=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=M;if(M===n.RED&&(z===n.FLOAT&&(J=n.R32F),z===n.HALF_FLOAT&&(J=n.R16F),z===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.R8UI),z===n.UNSIGNED_SHORT&&(J=n.R16UI),z===n.UNSIGNED_INT&&(J=n.R32UI),z===n.BYTE&&(J=n.R8I),z===n.SHORT&&(J=n.R16I),z===n.INT&&(J=n.R32I)),M===n.RG&&(z===n.FLOAT&&(J=n.RG32F),z===n.HALF_FLOAT&&(J=n.RG16F),z===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RG8UI),z===n.UNSIGNED_SHORT&&(J=n.RG16UI),z===n.UNSIGNED_INT&&(J=n.RG32UI),z===n.BYTE&&(J=n.RG8I),z===n.SHORT&&(J=n.RG16I),z===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGB8UI),z===n.UNSIGNED_SHORT&&(J=n.RGB16UI),z===n.UNSIGNED_INT&&(J=n.RGB32UI),z===n.BYTE&&(J=n.RGB8I),z===n.SHORT&&(J=n.RGB16I),z===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),z===n.UNSIGNED_INT&&(J=n.RGBA32UI),z===n.BYTE&&(J=n.RGBA8I),z===n.SHORT&&(J=n.RGBA16I),z===n.INT&&(J=n.RGBA32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let De=te?ha:ft.getTransfer(K);z===n.FLOAT&&(J=n.RGBA32F),z===n.HALF_FLOAT&&(J=n.RGBA16F),z===n.UNSIGNED_BYTE&&(J=De===St?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(w,M){let z;return w?M===null||M===Si||M===Qs?z=n.DEPTH24_STENCIL8:M===jn?z=n.DEPTH32F_STENCIL8:M===kr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Si||M===Qs?z=n.DEPTH_COMPONENT24:M===jn?z=n.DEPTH_COMPONENT32F:M===kr&&(z=n.DEPTH_COMPONENT16),z}function D(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pn&&w.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){let M=w.target;M.removeEventListener("dispose",R),F(M),M.isVideoTexture&&h.delete(M)}function x(w){let M=w.target;M.removeEventListener("dispose",x),A(M)}function F(w){let M=i.get(w);if(M.__webglInit===void 0)return;let z=w.source,K=u.get(z);if(K){let te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(w),Object.keys(K).length===0&&u.delete(z)}i.remove(w)}function S(w){let M=i.get(w);n.deleteTexture(M.__webglTexture);let z=w.source,K=u.get(z);delete K[M.__cacheKey],o.memory.textures--}function A(w){let M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[K][te]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=w.textures;for(let K=0,te=z.length;K<te;K++){let J=i.get(z[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(w)}let P=0;function B(){P=0}function H(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function X(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ee(w,M){let z=i.get(w);if(w.isVideoTexture&&ze(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(z,w,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function Z(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){Q(z,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function oe(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){Q(z,w,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function Y(w,M){let z=i.get(w);if(w.version>0&&z.__version!==w.version){ae(z,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}let pe={[tn]:n.REPEAT,[fs]:n.CLAMP_TO_EDGE,[Tl]:n.MIRRORED_REPEAT},Me={[Pn]:n.NEAREST,[Nf]:n.NEAREST_MIPMAP_NEAREST,[oo]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},Oe={[Hf]:n.NEVER,[Xf]:n.ALWAYS,[zf]:n.LESS,[tu]:n.LEQUAL,[kf]:n.EQUAL,[Wf]:n.GEQUAL,[Gf]:n.GREATER,[Vf]:n.NOTEQUAL};function it(w,M){if(M.type===jn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kn||M.magFilter===Da||M.magFilter===oo||M.magFilter===ps||M.minFilter===Kn||M.minFilter===Da||M.minFilter===oo||M.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,pe[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,pe[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,pe[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Me[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==oo&&M.minFilter!==ps||M.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ct(w,M){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let K=M.source,te=u.get(K);te===void 0&&(te={},u.set(K,te));let J=X(M);if(J!==w.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[J].usedTimes++;let De=te[w.__cacheKey];De!==void 0&&(te[w.__cacheKey].usedTimes--,De.usedTimes===0&&S(M)),w.__cacheKey=J,w.__webglTexture=te[J].texture}return z}function Q(w,M,z){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let te=Ct(w,M),J=M.source;t.bindTexture(K,w.__webglTexture,n.TEXTURE0+z);let De=i.get(J);if(J.version!==De.__version||te===!0){t.activeTexture(n.TEXTURE0+z);let ge=ft.getPrimaries(ft.workingColorSpace),Se=M.colorSpace===Ni?null:ft.getPrimaries(M.colorSpace),ut=M.colorSpace===Ni||ge===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let se=E(M.image,!1,s.maxTextureSize);se=Dt(M,se);let be=r.convert(M.format,M.colorSpace),ke=r.convert(M.type),qe=_(M.internalFormat,be,ke,M.colorSpace,M.isVideoTexture);it(K,M);let xe,ht=M.mipmaps,Ke=M.isVideoTexture!==!0,Ft=De.__version===void 0||te===!0,L=J.dataReady,fe=D(M,se);if(M.isDepthTexture)qe=y(M.format===Ks,M.type),Ft&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,qe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,qe,se.width,se.height,0,be,ke,null));else if(M.isDataTexture)if(ht.length>0){Ke&&Ft&&t.texStorage2D(n.TEXTURE_2D,fe,qe,ht[0].width,ht[0].height);for(let q=0,j=ht.length;q<j;q++)xe=ht[q],Ke?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,be,ke,xe.data):t.texImage2D(n.TEXTURE_2D,q,qe,xe.width,xe.height,0,be,ke,xe.data);M.generateMipmaps=!1}else Ke?(Ft&&t.texStorage2D(n.TEXTURE_2D,fe,qe,se.width,se.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,be,ke,se.data)):t.texImage2D(n.TEXTURE_2D,0,qe,se.width,se.height,0,be,ke,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&Ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,qe,ht[0].width,ht[0].height,se.depth);for(let q=0,j=ht.length;q<j;q++)if(xe=ht[q],M.format!==Gn)if(be!==null)if(Ke){if(L)if(M.layerUpdates.size>0){let ve=Fd(xe.width,xe.height,M.format,M.type);for(let Ee of M.layerUpdates){let $e=xe.data.subarray(Ee*ve/xe.data.BYTES_PER_ELEMENT,(Ee+1)*ve/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Ee,xe.width,xe.height,1,be,$e)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,se.depth,be,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,qe,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,se.depth,be,ke,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,qe,xe.width,xe.height,se.depth,0,be,ke,xe.data)}else{Ke&&Ft&&t.texStorage2D(n.TEXTURE_2D,fe,qe,ht[0].width,ht[0].height);for(let q=0,j=ht.length;q<j;q++)xe=ht[q],M.format!==Gn?be!==null?Ke?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,q,qe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe.width,xe.height,be,ke,xe.data):t.texImage2D(n.TEXTURE_2D,q,qe,xe.width,xe.height,0,be,ke,xe.data)}else if(M.isDataArrayTexture)if(Ke){if(Ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,qe,se.width,se.height,se.depth),L)if(M.layerUpdates.size>0){let q=Fd(se.width,se.height,M.format,M.type);for(let j of M.layerUpdates){let ve=se.data.subarray(j*q/se.data.BYTES_PER_ELEMENT,(j+1)*q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,be,ke,ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,ke,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,qe,se.width,se.height,se.depth,0,be,ke,se.data);else if(M.isData3DTexture)Ke?(Ft&&t.texStorage3D(n.TEXTURE_3D,fe,qe,se.width,se.height,se.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,ke,se.data)):t.texImage3D(n.TEXTURE_3D,0,qe,se.width,se.height,se.depth,0,be,ke,se.data);else if(M.isFramebufferTexture){if(Ft)if(Ke)t.texStorage2D(n.TEXTURE_2D,fe,qe,se.width,se.height);else{let q=se.width,j=se.height;for(let ve=0;ve<fe;ve++)t.texImage2D(n.TEXTURE_2D,ve,qe,q,j,0,be,ke,null),q>>=1,j>>=1}}else if(ht.length>0){if(Ke&&Ft){let q=He(ht[0]);t.texStorage2D(n.TEXTURE_2D,fe,qe,q.width,q.height)}for(let q=0,j=ht.length;q<j;q++)xe=ht[q],Ke?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be,ke,xe):t.texImage2D(n.TEXTURE_2D,q,qe,be,ke,xe);M.generateMipmaps=!1}else if(Ke){if(Ft){let q=He(se);t.texStorage2D(n.TEXTURE_2D,fe,qe,q.width,q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,ke,se)}else t.texImage2D(n.TEXTURE_2D,0,qe,be,ke,se);m(M)&&f(K),De.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,z){if(M.image.length!==6)return;let K=Ct(w,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let J=i.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+z);let De=ft.getPrimaries(ft.workingColorSpace),ge=M.colorSpace===Ni?null:ft.getPrimaries(M.colorSpace),Se=M.colorSpace===Ni||De===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,be=[];for(let j=0;j<6;j++)!ut&&!se?be[j]=E(M.image[j],!0,s.maxCubemapSize):be[j]=se?M.image[j].image:M.image[j],be[j]=Dt(M,be[j]);let ke=be[0],qe=r.convert(M.format,M.colorSpace),xe=r.convert(M.type),ht=_(M.internalFormat,qe,xe,M.colorSpace),Ke=M.isVideoTexture!==!0,Ft=J.__version===void 0||K===!0,L=te.dataReady,fe=D(M,ke);it(n.TEXTURE_CUBE_MAP,M);let q;if(ut){Ke&&Ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ht,ke.width,ke.height);for(let j=0;j<6;j++){q=be[j].mipmaps;for(let ve=0;ve<q.length;ve++){let Ee=q[ve];M.format!==Gn?qe!==null?Ke?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ee.width,Ee.height,qe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ht,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ee.width,Ee.height,qe,xe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ht,Ee.width,Ee.height,0,qe,xe,Ee.data)}}}else{if(q=M.mipmaps,Ke&&Ft){q.length>0&&fe++;let j=He(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ht,j.width,j.height)}for(let j=0;j<6;j++)if(se){Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be[j].width,be[j].height,qe,xe,be[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ht,be[j].width,be[j].height,0,qe,xe,be[j].data);for(let ve=0;ve<q.length;ve++){let $e=q[ve].image[j].image;Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,$e.width,$e.height,qe,xe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ht,$e.width,$e.height,0,qe,xe,$e.data)}}else{Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,qe,xe,be[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ht,qe,xe,be[j]);for(let ve=0;ve<q.length;ve++){let Ee=q[ve];Ke?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,qe,xe,Ee.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ht,qe,xe,Ee.image[j])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ie(w,M,z,K,te,J){let De=r.convert(z.format,z.colorSpace),ge=r.convert(z.type),Se=_(z.internalFormat,De,ge,z.colorSpace),ut=i.get(M),se=i.get(z);if(se.__renderTarget=M,!ut.__hasExternalTextures){let be=Math.max(1,M.width>>J),ke=Math.max(1,M.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Se,be,ke,M.depth,0,De,ge,null):t.texImage2D(te,J,Se,be,ke,0,De,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ct(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,se.__webglTexture,0,lt(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,se.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(w,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){let K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=y(M.stencilBuffer,te),De=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=lt(M);ct(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,J,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,w)}else{let K=M.textures;for(let te=0;te<K.length;te++){let J=K[te],De=r.convert(J.format,J.colorSpace),ge=r.convert(J.type),Se=_(J.internalFormat,De,ge,J.colorSpace),ut=lt(M);z&&ct(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Se,M.width,M.height):ct(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Se,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Se,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let te=K.__webglTexture,J=lt(M);if(M.depthTexture.format===Xs)ct(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===Ks)ct(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ze(w){let M=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,w)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),me(M.__webglDepthbuffer[K],w,!1);else{let te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),me(M.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(w,M,z){let K=i.get(w);M!==void 0&&Ie(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ze(w)}function Ht(w){let M=w.texture,z=i.get(w),K=i.get(M);w.addEventListener("dispose",x);let te=w.textures,J=w.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ge]=[];for(let Se=0;Se<M.mipmaps.length;Se++)z.__webglFramebuffer[ge][Se]=n.createFramebuffer()}else z.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)z.__webglFramebuffer[ge]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(De)for(let ge=0,Se=te.length;ge<Se;ge++){let ut=i.get(te[ge]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ct(w)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){let Se=te[ge];z.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ge]);let ut=r.convert(Se.format,Se.colorSpace),se=r.convert(Se.type),be=_(Se.internalFormat,ut,se,Se.colorSpace,w.isXRRenderTarget===!0),ke=lt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,be,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,z.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),me(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),it(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Ie(z.__webglFramebuffer[ge][Se],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else Ie(z.__webglFramebuffer[ge],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ge=0,Se=te.length;ge<Se;ge++){let ut=te[ge],se=i.get(ut);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),it(n.TEXTURE_2D,ut),Ie(z.__webglFramebuffer,w,ut,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(ut)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,K.__webglTexture),it(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Ie(z.__webglFramebuffer[Se],w,M,n.COLOR_ATTACHMENT0,ge,Se);else Ie(z.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,ge,0);m(M)&&f(ge),t.unbindTexture()}w.depthBuffer&&Ze(w)}function dt(w){let M=w.textures;for(let z=0,K=M.length;z<K;z++){let te=M[z];if(m(te)){let J=v(w),De=i.get(te).__webglTexture;t.bindTexture(J,De),f(J),t.unbindTexture()}}}let Gt=[],O=[];function Dn(w){if(w.samples>0){if(ct(w)===!1){let M=w.textures,z=w.width,K=w.height,te=n.COLOR_BUFFER_BIT,J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(w),ge=M.length>1;if(ge)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Se]);let ut=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ut,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,te,n.NEAREST),l===!0&&(Gt.length=0,O.length=0,Gt.push(n.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Gt.push(J),O.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,De.__webglColorRenderbuffer[Se]);let ut=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function lt(w){return Math.min(s.maxSamples,w.samples)}function ct(w){let M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ze(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Dt(w,M){let z=w.colorSpace,K=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==qi&&z!==Ni&&(ft.getTransfer(z)===St?(K!==Gn||te!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=st,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ct}function N2(n,e){function t(i,s=Ni){let r,o=ft.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===Vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xd)return n.BYTE;if(i===qd)return n.SHORT;if(i===kr)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===Mn)return n.HALF_FLOAT;if(i===Zd)return n.ALPHA;if(i===$d)return n.RGB;if(i===Gn)return n.RGBA;if(i===Jd)return n.LUMINANCE;if(i===Qd)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===Ks)return n.DEPTH_STENCIL;if(i===Xc)return n.RED;if(i===qc)return n.RED_INTEGER;if(i===Kd)return n.RG;if(i===Yc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===No||i===Oo||i===Bo||i===Ho)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Rl||i===Cl||i===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Il||i===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Il)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ll||i===Ul||i===Nl||i===Ol||i===Bl||i===Hl||i===zl||i===kl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Zl||i===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===zo)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jd||i===Jl||i===Ql||i===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fc=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},O2={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O2)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},B2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H2=`
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

}`,pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new vn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:B2,fragmentShader:H2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new Te(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mc=class extends ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,E=new pc,m=t.getContextAttributes(),f=null,v=null,_=[],y=[],D=new ce,R=null,x=new on;x.viewport=new xt;let F=new on;F.viewport=new xt;let S=[x,F],A=new fc,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Br,_[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Br,_[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=_[Q];return ae===void 0&&(ae=new Br,_[Q]=ae),ae.getHandSpace()};function H(Q){let ae=y.indexOf(Q.inputSource);if(ae===-1)return;let Ie=_[ae];Ie!==void 0&&(Ie.update(Q.inputSource,Q.frame,c||o),Ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<_.length;Q++){let ae=y[Q];ae!==null&&(y[Q]=null,_[Q].disconnect(ae))}P=null,B=null,E.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,v=null,Ct.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new nn(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Ie=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Ks:Xs,Ie=m.stencil?Qs:Si);let Ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new nn(u.textureWidth,u.textureHeight,{format:Gn,type:Mi,depthTexture:new tr(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(Q){for(let ae=0;ae<Q.removed.length;ae++){let Ie=Q.removed[ae],me=y.indexOf(Ie);me>=0&&(y[me]=null,_[me].disconnect(Ie))}for(let ae=0;ae<Q.added.length;ae++){let Ie=Q.added[ae],me=y.indexOf(Ie);if(me===-1){for(let Ze=0;Ze<_.length;Ze++)if(Ze>=y.length){y.push(Ie),me=Ze;break}else if(y[Ze]===null){y[Ze]=Ie,me=Ze;break}if(me===-1)break}let Ve=_[me];Ve&&Ve.connect(Ie)}}let Z=new I,oe=new I;function Y(Q,ae,Ie){Z.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Ie.matrixWorld);let me=Z.distanceTo(oe),Ve=ae.projectionMatrix.elements,Ze=Ie.projectionMatrix.elements,st=Ve[14]/(Ve[10]-1),Ht=Ve[14]/(Ve[10]+1),dt=(Ve[9]+1)/Ve[5],Gt=(Ve[9]-1)/Ve[5],O=(Ve[8]-1)/Ve[0],Dn=(Ze[8]+1)/Ze[0],lt=st*O,ct=st*Dn,ze=me/(-O+Dn),Dt=ze*-O;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Dt),Q.translateZ(ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ve[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let He=st+ze,w=Ht+ze,M=lt-Dt,z=ct+(me-Dt),K=dt*Ht/w*He,te=Gt*Ht/w*He;Q.projectionMatrix.makePerspective(M,z,K,te,He,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pe(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ae=Q.near,Ie=Q.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Ie=E.depthFar)),A.near=F.near=x.near=ae,A.far=F.far=x.far=Ie,(P!==A.near||B!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,B=A.far),x.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,A.layers.mask=x.layers.mask|F.layers.mask;let me=Q.parent,Ve=A.cameras;pe(A,me);for(let Ze=0;Ze<Ve.length;Ze++)pe(Ve[Ze],me);Ve.length===2?Y(A,x,F):A.projectionMatrix.copy(x.projectionMatrix),Me(Q,A,me)};function Me(Q,ae,Ie){Ie===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Vo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Oe=null;function it(Q,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let me=!1;Ie.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let Ze=0;Ze<Ie.length;Ze++){let st=Ie[Ze],Ht=null;if(p!==null)Ht=p.getViewport(st);else{let Gt=d.getViewSubImage(u,st);Ht=Gt.viewport,Ze===0&&(e.setRenderTargetTextures(v,Gt.colorTexture,u.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(v))}let dt=S[Ze];dt===void 0&&(dt=new on,dt.layers.enable(Ze),dt.viewport=new xt,S[Ze]=dt),dt.matrix.fromArray(st.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(st.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Ze===0&&(A.matrix.copy(dt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(dt)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let Ze=d.getDepthInformation(Ie[0]);Ze&&Ze.isValid&&Ze.texture&&E.init(e,Ze,s.renderState)}}for(let Ie=0;Ie<_.length;Ie++){let me=y[Ie],Ve=_[Ie];me!==null&&Ve!==void 0&&Ve.update(me,ae,c||o)}Oe&&Oe(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Ct=new ru;Ct.setAnimationLoop(it),this.setAnimationLoop=function(Q){Oe=Q},this.dispose=function(){}}},cs=new ni,z2=new Tt;function k2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,su(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=e.get(f),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,cs.copy(y),cs.x*=-1,cs.y*=-1,cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),m.envMapRotation.value.setFromMatrix4(z2.makeRotationFromEuler(cs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function G2(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=_.program;i.updateUBOMapping(v,D);let R=e.render.frame;r[v.id]!==R&&(u(v),r[v.id]=R)}function h(v){let _=d();v.__bindingPointIndex=_;let y=n.createBuffer(),D=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,x=y.length;R<x;R++){let F=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,A=F.length;S<A;S++){let P=F[S];if(p(P,R,S,D)===!0){let B=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],X=0;for(let ee=0;ee<H.length;ee++){let Z=H[ee],oe=E(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,B+X,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,X),X+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,y,D){let R=v.value,x=_+"_"+y;if(D[x]===void 0)return typeof R=="number"||typeof R=="boolean"?D[x]=R:D[x]=R.clone(),!0;{let F=D[x];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return D[x]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(v){let _=v.uniforms,y=0,D=16;for(let x=0,F=_.length;x<F;x++){let S=Array.isArray(_[x])?_[x]:[_[x]];for(let A=0,P=S.length;A<P;A++){let B=S[A],H=Array.isArray(B.value)?B.value:[B.value];for(let X=0,ee=H.length;X<ee;X++){let Z=H[X],oe=E(Z),Y=y%D,pe=Y%oe.boundary,Me=Y+pe;y+=pe,Me!==0&&D-Me<oe.storage&&(y+=D-Me),B.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=oe.storage}}}let R=y%D;return R>0&&(y+=D-R),v.__size=y,v.__cache={},this}function E(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ea=class{constructor(e={}){let{canvas:t=Yf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,f=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=ti,this.toneMappingExposure=1;let y=this,D=!1,R=0,x=0,F=null,S=-1,A=null,P=new xt,B=new xt,H=null,X=new de(0),ee=0,Z=t.width,oe=t.height,Y=1,pe=null,Me=null,Oe=new xt(0,0,Z,oe),it=new xt(0,0,Z,oe),Ct=!1,Q=new Gr,ae=!1,Ie=!1,me=new Tt,Ve=new Tt,Ze=new I,st=new xt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function Gt(){return F===null?Y:1}let O=i;function Dn(b,U){return t.getContext(b,U)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),O===null){let U="webgl2";if(O=Dn(U,b),O===null)throw Dn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let lt,ct,ze,Dt,He,w,M,z,K,te,J,De,ge,Se,ut,se,be,ke,qe,xe,ht,Ke,Ft,L;function fe(){lt=new s1(O),lt.init(),Ke=new N2(O,lt),ct=new Km(O,lt,e,Ke),ze=new D2(O,lt),ct.reverseDepthBuffer&&u&&ze.buffers.depth.setReversed(!0),Dt=new a1(O),He=new _2,w=new U2(O,lt,ze,He,ct,Ke,Dt),M=new e1(y),z=new i1(y),K=new pp(O),Ft=new Jm(O,K),te=new r1(O,K,Dt,Ft),J=new c1(O,te,K,Dt),qe=new l1(O,ct,w),se=new jm(He),De=new v2(y,M,z,lt,ct,Ft,se),ge=new k2(y,He),Se=new M2,ut=new R2(lt),ke=new $m(y,M,z,ze,J,p,l),be=new P2(y,J,ct),L=new G2(O,Dt,ct,ze),xe=new Qm(O,lt,Dt),ht=new o1(O,lt,Dt),Dt.programs=De.programs,y.capabilities=ct,y.extensions=lt,y.properties=He,y.renderLists=Se,y.shadowMap=be,y.state=ze,y.info=Dt}fe();let q=new mc(y,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=lt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=lt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(Z,oe,!1))},this.getSize=function(b){return b.set(Z,oe)},this.setSize=function(b,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,oe=U,t.width=Math.floor(b*Y),t.height=Math.floor(U*Y),V===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Z*Y,oe*Y).floor()},this.setDrawingBufferSize=function(b,U,V){Z=b,oe=U,Y=V,t.width=Math.floor(b*V),t.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(Oe)},this.setViewport=function(b,U,V,W){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,U,V,W),ze.viewport(P.copy(Oe).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(it)},this.setScissor=function(b,U,V,W){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,U,V,W),ze.scissor(B.copy(it).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(b){ze.setScissorTest(Ct=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){Me=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(b=!0,U=!0,V=!0){let W=0;if(b){let N=!1;if(F!==null){let re=F.texture.format;N=re===Zc||re===Yc||re===qc}if(N){let re=F.texture.type,ye=re===Mi||re===Si||re===kr||re===Qs||re===Vc||re===Wc,Ce=ke.getClearColor(),Fe=ke.getClearAlpha(),Ye=Ce.r,Je=Ce.g,Pe=Ce.b;ye?(g[0]=Ye,g[1]=Je,g[2]=Pe,g[3]=Fe,O.clearBufferuiv(O.COLOR,0,g)):(E[0]=Ye,E[1]=Je,E[2]=Pe,E[3]=Fe,O.clearBufferiv(O.COLOR,0,E))}else W|=O.COLOR_BUFFER_BIT}U&&(W|=O.DEPTH_BUFFER_BIT),V&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Se.dispose(),ut.dispose(),He.dispose(),M.dispose(),z.dispose(),J.dispose(),Ft.dispose(),L.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",xh),q.removeEventListener("sessionend",Th),is.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let b=Dt.autoReset,U=be.enabled,V=be.autoUpdate,W=be.needsUpdate,N=be.type;fe(),Dt.autoReset=b,be.enabled=U,be.autoUpdate=V,be.needsUpdate=W,be.type=N}function Ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $e(b){let U=b.target;U.removeEventListener("dispose",$e),kt(U)}function kt(b){ln(b),He.remove(b)}function ln(b){let U=He.get(b).programs;U!==void 0&&(U.forEach(function(V){De.releaseProgram(V)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,W,N,re){U===null&&(U=Ht);let ye=N.isMesh&&N.matrixWorld.determinant()<0,Ce=sf(b,U,V,W,N);ze.setMaterial(W,ye);let Fe=V.index,Ye=1;if(W.wireframe===!0){if(Fe=te.getWireframeAttribute(V),Fe===void 0)return;Ye=2}let Je=V.drawRange,Pe=V.attributes.position,mt=Je.start*Ye,Pt=(Je.start+Je.count)*Ye;re!==null&&(mt=Math.max(mt,re.start*Ye),Pt=Math.min(Pt,(re.start+re.count)*Ye)),Fe!==null?(mt=Math.max(mt,0),Pt=Math.min(Pt,Fe.count)):Pe!=null&&(mt=Math.max(mt,0),Pt=Math.min(Pt,Pe.count));let Lt=Pt-mt;if(Lt<0||Lt===1/0)return;Ft.setup(N,W,Ce,V,Fe);let En,yt=xe;if(Fe!==null&&(En=K.get(Fe),yt=ht,yt.setIndex(En)),N.isMesh)W.wireframe===!0?(ze.setLineWidth(W.wireframeLinewidth*Gt()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(N.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),ze.setLineWidth(Le*Gt()),N.isLineSegments?yt.setMode(O.LINES):N.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else N.isPoints?yt.setMode(O.POINTS):N.isSprite&&yt.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Le=N._multiDrawStarts,ui=N._multiDrawCounts,vt=N._multiDrawCount,Bn=Fe?K.get(Fe).bytesPerElement:1,bs=He.get(W).currentProgram.getUniforms();for(let Rn=0;Rn<vt;Rn++)bs.setValue(O,"_gl_DrawID",Rn),yt.render(Le[Rn]/Bn,ui[Rn])}else if(N.isInstancedMesh)yt.renderInstances(mt,Lt,N.count);else if(V.isInstancedBufferGeometry){let Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ui=Math.min(V.instanceCount,Le);yt.renderInstances(mt,Lt,ui)}else yt.render(mt,Lt)};function At(b,U,V){b.transparent===!0&&b.side===Mt&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,ro(b,U,V),b.side=zi,b.needsUpdate=!0,ro(b,U,V),b.side=Mt):ro(b,U,V)}this.compile=function(b,U,V=null){V===null&&(V=b),f=ut.get(V),f.init(U),_.push(f),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==V&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let W=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let re=N.material;if(re)if(Array.isArray(re))for(let ye=0;ye<re.length;ye++){let Ce=re[ye];At(Ce,V,N),W.add(Ce)}else At(re,V,N),W.add(re)}),_.pop(),f=null,W},this.compileAsync=function(b,U,V=null){let W=this.compile(b,U,V);return new Promise(N=>{function re(){if(W.forEach(function(ye){He.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){N(b);return}setTimeout(re,10)}lt.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let On=null;function di(b){On&&On(b)}function xh(){is.stop()}function Th(){is.start()}let is=new ru;is.setAnimationLoop(di),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(b){On=b,q.setAnimationLoop(b),b===null?is.stop():is.start()},q.addEventListener("sessionstart",xh),q.addEventListener("sessionend",Th),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,F),f=ut.get(b,_.length),f.init(U),_.push(f),Ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(Ve),Ie=this.localClippingEnabled,ae=se.init(this.clippingPlanes,Ie),m=Se.get(b,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&Ia(re,U,-1/0,y.sortObjects)}Ia(b,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(pe,Me),dt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,dt&&ke.addToRenderList(m,b),this.info.render.frame++,ae===!0&&se.beginShadows();let V=f.state.shadowsArray;be.render(V,b,U),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let re=U.cameras;if(N.length>0)for(let ye=0,Ce=re.length;ye<Ce;ye++){let Fe=re[ye];Rh(W,N,b,Fe)}dt&&ke.render(b);for(let ye=0,Ce=re.length;ye<Ce;ye++){let Fe=re[ye];wh(m,b,Fe,Fe.viewport)}}else N.length>0&&Rh(W,N,b,U),dt&&ke.render(b),wh(m,b,U);F!==null&&(w.updateMultisampleRenderTarget(F),w.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(y,b,U),Ft.resetDefaultState(),S=-1,A=null,_.pop(),_.length>0?(f=_[_.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ia(b,U,V,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){W&&st.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ve);let ye=J.update(b),Ce=b.material;Ce.visible&&m.push(b,ye,Ce,V,st.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){let ye=J.update(b),Ce=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),st.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),st.copy(ye.boundingSphere.center)),st.applyMatrix4(b.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ce)){let Fe=ye.groups;for(let Ye=0,Je=Fe.length;Ye<Je;Ye++){let Pe=Fe[Ye],mt=Ce[Pe.materialIndex];mt&&mt.visible&&m.push(b,ye,mt,V,st.z,Pe)}}else Ce.visible&&m.push(b,ye,Ce,V,st.z,null)}}let re=b.children;for(let ye=0,Ce=re.length;ye<Ce;ye++)Ia(re[ye],U,V,W)}function wh(b,U,V,W){let N=b.opaque,re=b.transmissive,ye=b.transparent;f.setupLightsView(V),ae===!0&&se.setGlobalState(y.clippingPlanes,V),W&&ze.viewport(P.copy(W)),N.length>0&&so(N,U,V),re.length>0&&so(re,U,V),ye.length>0&&so(ye,U,V),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Rh(b,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new nn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Mn:Mi,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let re=f.state.transmissionRenderTarget[W.id],ye=W.viewport||P;re.setSize(ye.z,ye.w);let Ce=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(X),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),dt&&ke.render(V);let Fe=y.toneMapping;y.toneMapping=ti;let Ye=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ae===!0&&se.setGlobalState(y.clippingPlanes,W),so(b,V,W),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Pe=0,mt=U.length;Pe<mt;Pe++){let Pt=U[Pe],Lt=Pt.object,En=Pt.geometry,yt=Pt.material,Le=Pt.group;if(yt.side===Mt&&Lt.layers.test(W.layers)){let ui=yt.side;yt.side=jt,yt.needsUpdate=!0,Ch(Lt,V,W,En,yt,Le),yt.side=ui,yt.needsUpdate=!0,Je=!0}}Je===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re))}y.setRenderTarget(Ce),y.setClearColor(X,ee),Ye!==void 0&&(W.viewport=Ye),y.toneMapping=Fe}function so(b,U,V){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,re=b.length;N<re;N++){let ye=b[N],Ce=ye.object,Fe=ye.geometry,Ye=W===null?ye.material:W,Je=ye.group;Ce.layers.test(V.layers)&&Ch(Ce,U,V,Fe,Ye,Je)}}function Ch(b,U,V,W,N,re){b.onBeforeRender(y,U,V,W,N,re),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,U,V,W,b,re),N.transparent===!0&&N.side===Mt&&N.forceSinglePass===!1?(N.side=jt,N.needsUpdate=!0,y.renderBufferDirect(V,U,W,N,b,re),N.side=zi,N.needsUpdate=!0,y.renderBufferDirect(V,U,W,N,b,re),N.side=Mt):y.renderBufferDirect(V,U,W,N,b,re),b.onAfterRender(y,U,V,W,N,re)}function ro(b,U,V){U.isScene!==!0&&(U=Ht);let W=He.get(b),N=f.state.lights,re=f.state.shadowsArray,ye=N.state.version,Ce=De.getParameters(b,N.state,re,U,V),Fe=De.getProgramCacheKey(Ce),Ye=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?z:M).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",$e),Ye=new Map,W.programs=Ye);let Je=Ye.get(Fe);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===ye)return Ph(b,Ce),Je}else Ce.uniforms=De.getUniforms(b),b.onBeforeCompile(Ce,y),Je=De.acquireProgram(Ce,Fe),Ye.set(Fe,Je),W.uniforms=Ce.uniforms;let Pe=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=se.uniform),Ph(b,Ce),W.needsLights=of(b),W.lightsStateVersion=ye,W.needsLights&&(Pe.ambientLightColor.value=N.state.ambient,Pe.lightProbe.value=N.state.probe,Pe.directionalLights.value=N.state.directional,Pe.directionalLightShadows.value=N.state.directionalShadow,Pe.spotLights.value=N.state.spot,Pe.spotLightShadows.value=N.state.spotShadow,Pe.rectAreaLights.value=N.state.rectArea,Pe.ltc_1.value=N.state.rectAreaLTC1,Pe.ltc_2.value=N.state.rectAreaLTC2,Pe.pointLights.value=N.state.point,Pe.pointLightShadows.value=N.state.pointShadow,Pe.hemisphereLights.value=N.state.hemi,Pe.directionalShadowMap.value=N.state.directionalShadowMap,Pe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pe.spotShadowMap.value=N.state.spotShadowMap,Pe.spotLightMatrix.value=N.state.spotLightMatrix,Pe.spotLightMap.value=N.state.spotLightMap,Pe.pointShadowMap.value=N.state.pointShadowMap,Pe.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function Fh(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ys.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ph(b,U){let V=He.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function sf(b,U,V,W,N){U.isScene!==!0&&(U=Ht),w.resetTextureUnits();let re=U.fog,ye=W.isMeshStandardMaterial?U.environment:null,Ce=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:qi,Fe=(W.isMeshStandardMaterial?z:M).get(W.envMap||ye),Ye=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Je=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,Pt=!!V.morphAttributes.color,Lt=ti;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let En=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=En!==void 0?En.length:0,Le=He.get(W),ui=f.state.lights;if(ae===!0&&(Ie===!0||b!==A)){let Ln=b===A&&W.id===S;se.setState(W,b,Ln)}let vt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ui.state.version||Le.outputColorSpace!==Ce||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Fe||W.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==Ye||Le.vertexTangents!==Je||Le.morphTargets!==Pe||Le.morphNormals!==mt||Le.morphColors!==Pt||Le.toneMapping!==Lt||Le.morphTargetsCount!==yt)&&(vt=!0):(vt=!0,Le.__version=W.version);let Bn=Le.currentProgram;vt===!0&&(Bn=ro(W,U,N));let bs=!1,Rn=!1,br=!1,Ut=Bn.getUniforms(),$n=Le.uniforms;if(ze.useProgram(Bn.program)&&(bs=!0,Rn=!0,br=!0),W.id!==S&&(S=W.id,Rn=!0),bs||A!==b){ze.buffers.depth.getReversed()?(me.copy(b.projectionMatrix),$f(me),Jf(me),Ut.setValue(O,"projectionMatrix",me)):Ut.setValue(O,"projectionMatrix",b.projectionMatrix),Ut.setValue(O,"viewMatrix",b.matrixWorldInverse);let Ri=Ut.map.cameraPosition;Ri!==void 0&&Ri.setValue(O,Ze.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&Ut.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Rn=!0,br=!0)}if(N.isSkinnedMesh){Ut.setOptional(O,N,"bindMatrix"),Ut.setOptional(O,N,"bindMatrixInverse");let Ln=N.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Ut.setValue(O,"boneTexture",Ln.boneTexture,w))}N.isBatchedMesh&&(Ut.setOptional(O,N,"batchingTexture"),Ut.setValue(O,"batchingTexture",N._matricesTexture,w),Ut.setOptional(O,N,"batchingIdTexture"),Ut.setValue(O,"batchingIdTexture",N._indirectTexture,w),Ut.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&Ut.setValue(O,"batchingColorTexture",N._colorsTexture,w));let xr=V.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&qe.update(N,V,Bn),(Rn||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,Ut.setValue(O,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($n.envMap.value=Fe,$n.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&($n.envMapIntensity.value=U.environmentIntensity),Rn&&(Ut.setValue(O,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&rf($n,br),re&&W.fog===!0&&ge.refreshFogUniforms($n,re),ge.refreshMaterialUniforms($n,W,Y,oe,f.state.transmissionRenderTarget[b.id]),Ys.upload(O,Fh(Le),$n,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ys.upload(O,Fh(Le),$n,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(O,"center",N.center),Ut.setValue(O,"modelViewMatrix",N.modelViewMatrix),Ut.setValue(O,"normalMatrix",N.normalMatrix),Ut.setValue(O,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Ln=W.uniformsGroups;for(let Ri=0,Ci=Ln.length;Ri<Ci;Ri++){let Ih=Ln[Ri];L.update(Ih,Bn),L.bind(Ih,Bn)}}return Bn}function rf(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function of(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,U,V){He.get(b.texture).__webglTexture=U,He.get(b.depthTexture).__webglTexture=V;let W=He.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){let V=He.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,V=0){F=b,R=U,x=V;let W=!0,N=null,re=!1,ye=!1;if(b){let Fe=He.get(b);if(Fe.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Fe.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Fe.__hasExternalTextures)w.rebindTextures(b,He.get(b.texture).__webglTexture,He.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Pe=b.depthTexture;if(Fe.__boundDepthTexture!==Pe){if(Pe!==null&&He.has(Pe)&&(b.width!==Pe.image.width||b.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let Ye=b.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ye=!0);let Je=He.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[U])?N=Je[U][V]:N=Je[U],re=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=He.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?N=Je[V]:N=Je,P.copy(b.viewport),B.copy(b.scissor),H=b.scissorTest}else P.copy(Oe).multiplyScalar(Y).floor(),B.copy(it).multiplyScalar(Y).floor(),H=Ct;if(ze.bindFramebuffer(O.FRAMEBUFFER,N)&&W&&ze.drawBuffers(b,N),ze.viewport(P),ze.scissor(B),ze.setScissorTest(H),re){let Fe=He.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Fe.__webglTexture,V)}else if(ye){let Fe=He.get(b.texture),Ye=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,Ye)}S=-1},this.readRenderTargetPixels=function(b,U,V,W,N,re,ye){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){ze.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let Fe=b.texture,Ye=Fe.format,Je=Fe.type;if(!ct.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&V>=0&&V<=b.height-N&&O.readPixels(U,V,W,N,Ke.convert(Ye),Ke.convert(Je),re)}finally{let Fe=F!==null?He.get(F).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,W,N,re,ye){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){let Fe=b.texture,Ye=Fe.format,Je=Fe.type;if(!ct.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-W&&V>=0&&V<=b.height-N){ze.bindFramebuffer(O.FRAMEBUFFER,Ce);let Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,re.byteLength,O.STREAM_READ),O.readPixels(U,V,W,N,Ke.convert(Ye),Ke.convert(Je),0);let mt=F!==null?He.get(F).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,mt);let Pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Zf(O,Pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,re),O.deleteBuffer(Pe),O.deleteSync(Pt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,V=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(b.image.width*W),re=Math.floor(b.image.height*W),ye=U!==null?U.x:0,Ce=U!==null?U.y:0;w.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,ye,Ce,N,re),ze.unbindTexture()},this.copyTextureToTexture=function(b,U,V=null,W=null,N=0){b.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let re,ye,Ce,Fe,Ye,Je,Pe,mt,Pt,Lt=b.isCompressedTexture?b.mipmaps[N]:b.image;V!==null?(re=V.max.x-V.min.x,ye=V.max.y-V.min.y,Ce=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Ye=V.min.y,Je=V.isBox3?V.min.z:0):(re=Lt.width,ye=Lt.height,Ce=Lt.depth||1,Fe=0,Ye=0,Je=0),W!==null?(Pe=W.x,mt=W.y,Pt=W.z):(Pe=0,mt=0,Pt=0);let En=Ke.convert(U.format),yt=Ke.convert(U.type),Le;U.isData3DTexture?(w.setTexture3D(U,0),Le=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Le=O.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Le=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let ui=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Bn=O.getParameter(O.UNPACK_SKIP_PIXELS),bs=O.getParameter(O.UNPACK_SKIP_ROWS),Rn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je);let br=b.isDataArrayTexture||b.isData3DTexture,Ut=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let $n=He.get(b),xr=He.get(U),Ln=He.get($n.__renderTarget),Ri=He.get(xr.__renderTarget);ze.bindFramebuffer(O.READ_FRAMEBUFFER,Ln.__webglFramebuffer),ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ci=0;Ci<Ce;Ci++)br&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(b).__webglTexture,N,Je+Ci),b.isDepthTexture?(Ut&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(U).__webglTexture,N,Pt+Ci),O.blitFramebuffer(Fe,Ye,re,ye,Pe,mt,re,ye,O.DEPTH_BUFFER_BIT,O.NEAREST)):Ut?O.copyTexSubImage3D(Le,N,Pe,mt,Pt+Ci,Fe,Ye,re,ye):O.copyTexSubImage2D(Le,N,Pe,mt,Pt+Ci,Fe,Ye,re,ye);ze.bindFramebuffer(O.READ_FRAMEBUFFER,null),ze.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ut?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Le,N,Pe,mt,Pt,re,ye,Ce,En,yt,Lt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,N,Pe,mt,Pt,re,ye,Ce,En,Lt.data):O.texSubImage3D(Le,N,Pe,mt,Pt,re,ye,Ce,En,yt,Lt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Pe,mt,re,ye,En,yt,Lt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Pe,mt,Lt.width,Lt.height,En,Lt.data):O.texSubImage2D(O.TEXTURE_2D,N,Pe,mt,re,ye,En,yt,Lt);O.pixelStorei(O.UNPACK_ROW_LENGTH,ui),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bn),O.pixelStorei(O.UNPACK_SKIP_ROWS,bs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Rn),N===0&&U.generateMipmaps&&O.generateMipmap(Le),ze.unbindTexture()},this.copyTextureToTexture3D=function(b,U,V=null,W=null,N=0){return b.isTexture!==!0&&(Nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,V,W,N)},this.initRenderTarget=function(b){He.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ze.unbindTexture()},this.resetState=function(){R=0,x=0,F=null,ze.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}},Be=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new de(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ta=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},gc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new I,na=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nr=class extends xi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs,Fr=new I,zs=new I,ks=new I,Gs=new ce,Pr=new ce,hu=new Tt,Ro=new I,Ir=new I,Co=new I,Pd=new ce,cl=new ce,Id=new ce,Vr=class extends Vt{constructor(e=new nr){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gc(t,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new na(i,3,0,!1)),Hs.setAttribute("uv",new na(i,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fo(Ro.set(-.5,-.5,0),ks,o,zs,s,r),Fo(Ir.set(.5,-.5,0),ks,o,zs,s,r),Fo(Co.set(.5,.5,0),ks,o,zs,s,r),Pd.set(0,0),cl.set(1,0),Id.set(1,1);let a=e.ray.intersectTriangle(Ro,Ir,Co,!1,Fr);if(a===null&&(Fo(Ir.set(-.5,.5,0),ks,o,zs,s,r),cl.set(0,1),a=e.ray.intersectTriangle(Ro,Co,Ir,!1,Fr),a===null))return;let l=e.ray.origin.distanceTo(Fr);l<e.near||l>e.far||t.push({distance:l,point:Fr.clone(),uv:Oi.getInterpolation(Fr,Ro,Ir,Co,Pd,cl,Id,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fo(n,e,t,i,s,r){Gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Pr.x=r*Gs.x-s*Gs.y,Pr.y=s*Gs.x+r*Gs.y):Pr.copy(Gs),n.copy(e),n.x+=Pr.x,n.y+=Pr.y,n.applyMatrix4(hu)}var Ec=class extends vn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Pn,h=Pn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ia=class extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new Tt,Dd=new Tt,Po=[],Ld=new bi,V2=new Tt,Dr=new G,Lr=new Vi,sa=class extends G{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,V2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Ld.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Lr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(i),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Dd.multiplyMatrices(i,Vs),Dr.matrixWorld=Dd,Dr.raycast(e,Po);for(let o=0,a=Po.length;o<a;o++){let l=Po[o];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ec(new Float32Array(s*this.count),s,this.count,Xc,jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ir=class extends xi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new Tt,yc=new Yo,Io=new Vi,Do=new I,Wr=class extends Vt{constructor(e=new qt,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;Ud.copy(s).invert(),yc.copy(e.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,E=p;g<E;g++){let m=c.getX(g);Do.fromBufferAttribute(d,m),Nd(Do,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,E=p;g<E;g++)Do.fromBufferAttribute(d,g),Nd(Do,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nd(n,e,t,i,s,r,o){let a=yc.distanceSqToPoint(n);if(a<t){let l=new I;yc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends vn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new Tt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(dn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(dn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ra=class extends Vn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vc=class extends ra{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Lo=new I,hl=new Jc,dl=new Jc,ul=new Jc,Xi=class extends Vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Lo.subVectors(s[0],s[1]).add(s[0]),c=Lo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),hl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),dl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),ul.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),dl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ul.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(hl.calc(l),dl.calc(l),ul.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Od(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function W2(n,e){let t=1-n;return t*t*e}function X2(n,e){return 2*(1-n)*n*e}function q2(n,e){return n*n*e}function Hr(n,e,t,i){return W2(n,e)+X2(n,t)+q2(n,i)}function Y2(n,e){let t=1-n;return t*t*t*e}function Z2(n,e){let t=1-n;return 3*t*t*n*e}function $2(n,e){return 3*(1-n)*n*n*e}function J2(n,e){return n*n*n*e}function zr(n,e,t,i,s){return Y2(n,e)+Z2(n,t)+$2(n,i)+J2(n,s)}var _c=class extends Vn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ac=class extends Vn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(zr(e,s.x,r.x,o.x,a.x),zr(e,s.y,r.y,o.y,a.y),zr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends Vn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sc=class extends Vn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bc=class extends Vn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Vn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Hr(e,s.x,r.x,o.x),Hr(e,s.y,r.y,o.y),Hr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xc=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Od(a,l.x,c.x,h.x,d.x),Od(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Q2=Object.freeze({__proto__:null,ArcCurve:vc,CatmullRomCurve3:Xi,CubicBezierCurve:_c,CubicBezierCurve3:Ac,EllipseCurve:ra,LineCurve:Mc,LineCurve3:Sc,QuadraticBezierCurve:bc,QuadraticBezierCurve3:oa,SplineCurve:xc});var ii=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},tt=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,E=[],m=i/2,f=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(p,2));function v(){let y=new I,D=new I,R=0,x=(t-e)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,P=A*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,X=H*l+a,ee=Math.sin(X),Z=Math.cos(X);D.x=P*ee,D.y=-A*i+m,D.z=P*Z,d.push(D.x,D.y,D.z),y.set(ee,x,Z).normalize(),u.push(y.x,y.y,y.z),p.push(H,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],P=E[S+1][F],B=E[S+1][F+1],H=E[S][F+1];(e>0||S!==0)&&(h.push(A,P,H),R+=3),(t>0||S!==r-1)&&(h.push(P,B,H),R+=3)}c.addGroup(f,R,0),f+=R}function _(y){let D=g,R=new ce,x=new I,F=0,S=y===!0?e:t,A=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;let P=g;for(let B=0;B<=s;B++){let X=B/s*l+a,ee=Math.cos(X),Z=Math.sin(X);x.x=S*Z,x.y=m*A,x.z=S*ee,d.push(x.x,x.y,x.z),u.push(0,A,0),R.x=ee*.5+.5,R.y=Z*.5*A+.5,p.push(R.x,R.y),g++}for(let B=0;B<s;B++){let H=D+B,X=P+B;y===!0?h.push(X,X+1,H):h.push(X+1,X,H),F+=3}c.addGroup(f,F,y===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class n extends tt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tc=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new I,y=new I,D=new I;for(let R=0;R<t.length;R+=3)p(t[R+0],_),p(t[R+1],y),p(t[R+2],D),l(_,y,D,v)}function l(v,_,y,D){let R=D+1,x=[];for(let F=0;F<=R;F++){x[F]=[];let S=v.clone().lerp(y,F/R),A=_.clone().lerp(y,F/R),P=R-F;for(let B=0;B<=P;B++)B===0&&F===R?x[F][B]=S:x[F][B]=S.clone().lerp(A,B/P)}for(let F=0;F<R;F++)for(let S=0;S<2*(R-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(x[F][A+1]),u(x[F+1][A]),u(x[F][A])):(u(x[F][A+1]),u(x[F+1][A+1]),u(x[F+1][A]))}}function c(v){let _=new I;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,D=f(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],D=o[v+4],R=Math.max(_,y,D),x=Math.min(_,y,D);R>.9&&x<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){let v=new I,_=new I,y=new I,D=new I,R=new ce,x=new ce,F=new ce;for(let S=0,A=0;S<r.length;S+=9,A+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),R.set(o[A+0],o[A+1]),x.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),D.copy(v).add(_).add(y).divideScalar(3);let P=m(D);E(R,A+0,v,P),E(x,A+2,_,P),E(F,A+4,y,P)}}function E(v,_,y,D){D<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},sr=class n extends Tc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var wt=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,p=[],g=[],E=[],m=[];for(let f=0;f<=i;f++){let v=[],_=f/i,y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let R=D/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(R+y,1-_),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let _=h[f][v+1],y=h[f][v],D=h[f+1][v],R=h[f+1][v+1];(f!==0||o>0)&&p.push(_,y,R),(f!==i-1||l<Math.PI)&&p.push(y,D,R)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(E,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var an=class n extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let E=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let E=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(E,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ms=class n extends qt{constructor(e=new oa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ce,h=new I,d=[],u=[],p=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(p,2));function E(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),f()}function m(_){h=e.getPointAt(_/t,h);let y=o.normals[_],D=o.binormals[_];for(let R=0;R<=s;R++){let x=R/s*Math.PI*2,F=Math.sin(x),S=-Math.cos(x);l.x=S*y.x+F*D.x,l.y=S*y.y+F*D.y,l.z=S*y.z+F*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=t;_++)for(let y=1;y<=s;y++){let D=(s+1)*(_-1)+(y-1),R=(s+1)*_+(y-1),x=(s+1)*_+y,F=(s+1)*(_-1)+y;g.push(D,R,F),g.push(R,x,F)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=s;y++)c.x=_/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Q2[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ue=class extends xi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Uo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function K2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var rr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wc=class extends rr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oh:r=e,a=2*t-i;break;case Bh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oh:o=e,l=2*i-t;break;case Bh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,f=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,_=(-1-p)*m+(1.5+p)*E+.5*g,y=p*m-p*E;for(let D=0;D!==a;++D)r[D]=f*o[h+D]+v*o[c+D]+_*o[l+D]+y*o[d+D];return r}},Rc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Cc=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uo(t,this.TimeBufferType),this.values=Uo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Uo(e.times,Array),values:Uo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ko:t=this.InterpolantFactoryMethodDiscrete;break;case jl:t=this.InterpolantFactoryMethodLinear;break;case La:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&K2(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===La,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=jl;var gs=class extends Wn{constructor(e,t,i){super(e,t,i)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ko;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Wn{};Fc.prototype.ValueTypeName="color";var Pc=class extends Wn{};Pc.prototype.ValueTypeName="number";var Ic=class extends rr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}},aa=class extends Wn{InterpolantFactoryMethodLinear(e){return new Ic(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends Wn{constructor(e,t,i){super(e,t,i)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=ko;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Wn{};Dc.prototype.ValueTypeName="vector";var Lc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},j2=new Lc,Uc=class{constructor(e){this.manager=e!==void 0?e:j2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ne=class extends or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fl=new Tt,Bd=new I,Hd=new I,Xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),Hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hd),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nc=class extends Xr{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ri=class extends or{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zd=new Tt,Ur=new I,pl=new I,Oc=class extends Xr{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ur),pl.copy(i.position),pl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pl),i.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd)}},nt=class extends or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bc=class extends Xr{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Bc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var la=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=kd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function kd(){return 0}var Qc="\\[\\]\\.:\\/",eg=new RegExp("["+Qc+"]","g"),Kc="[^"+Qc+"]",tg="[^"+Qc.replace("\\.","")+"]",ng=/((?:WC+[\/:])*)/.source.replace("WC",Kc),ig=/(WCOD+)?/.source.replace("WCOD",tg),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),og=new RegExp("^"+ng+ig+sg+rg+"$"),ag=["material","materials","bones","map"],Hc=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eg,"")}static parseTrackName(e){let t=og.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ag.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Hc;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);var ua={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lg=new er(-1,1,1,-1,0,1),jc=class extends qt{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},cg=new jc,dr=class{constructor(e){this._mesh=new G(cg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ys=class extends Ti{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cr.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new dr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qr=class extends Ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fa=class extends Ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var pa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ys(ua),this.copyPass.material.blending=ei,this.clock=new la}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qr!==void 0&&(o instanceof qr?i=!0:o instanceof fa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var du={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ur=class n extends Ti{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new nn(r,o,{type:Mn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new nn(r,o,{type:Mn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=du;this.highPassUniforms=cr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ua;this.copyUniforms=cr.clone(h.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new et,this.fsQuad=new dr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ur.BlurDirectionX=new ce(1,0);ur.BlurDirectionY=new ce(0,1);var vs=1280,_s=720;function Ge(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var eh=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),zt=(n,e,t)=>n+(e-n)*t,pt=(n,e,t)=>{let i=eh((t-n)/(e-n));return i*i*(3-2*i)};var hg=n=>(n=eh(n),n*n*(3-2*n));function ga(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=hg((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>zt(o,r[a],i)):zt(s,r,i)}return n[n.length-1][1]}var dg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ce(vs,_s)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},ug={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new de(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},ma=class{constructor(e){let t=this.r=new ea({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(vs,_s,!1),t.shadowMap.enabled=!0,t.shadowMap.type=kc,t.toneMapping=ti,t.outputColorSpace=qi;let i=new tr(vs,_s);i.type=Si,this.rt=new nn(vs,_s,{type:Mn,samples:2,depthTexture:i}),this.composer=new pa(t,new nn(vs,_s,{type:Mn})),this.dof=new ys(dg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new ur(new ce(vs/2,_s/2),.45,.75,.82),this.grade=new ys(ug),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function uu(n,e,t,i=40){let s=new ta;s.background=new de(t);let r=new on(i,vs/_s,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function fu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var bn=1/420,th=new Map;function xn(n,e,t,i){if(th.has(n))return th.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new An(s);return o.colorSpace=It,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,th.set(n,o),o}var gt=n=>new Path2D(n);function rn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function Xn(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var fg={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function pg(n,e){return xn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=gt("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");rn(t,i,Xn(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(gt("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(gt("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(gt("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=gt("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){rn(t,gt("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Xn(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(gt("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(gt("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(gt("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(gt("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(gt("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")rn(t,gt("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Xn(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(gt("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(gt("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(gt("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){rn(t,gt("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Xn(t,-60,0,60,120,n.a,n.b)),rn(t,gt("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Xn(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else rn(t,gt("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Xn(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(gt("M-22 26 L22 26 L0 64Z")),rn(t,gt("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function pu(n,e,t){return xn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(rn(i,gt("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Xn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(rn(i,gt("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;rn(i,gt(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Xn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(gt(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(gt(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function mg(){return xn("hand",90,100,n=>{n.translate(45,14);let e=gt("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");rn(n,e,Xn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function mu(n){return xn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function gg(){return xn("foot",80,40,n=>{n.translate(26,6),rn(n,gt("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function Eg(n="round"){return xn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var yu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function yg(n,e){return xn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),yu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function vg(n,e,t){return xn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=gt("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");rn(i,s,Xn(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),rn(i,s,e);let r=gt("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");rn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),rn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=gt("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");rn(i,s,Xn(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),rn(i,l,"#E9E9EF")})})})}var gu=(n,e={})=>new et({map:n,alphaTest:.5,alphaToCoverage:!0,side:Mt,...e}),Eu=new Map,nh=new Map,_g=[];function Ag(n){if(nh.has(n))return nh.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new An(t);return r.colorSpace=It,r.anisotropy=8,nh.set(n,r),r}function Sn(n,e,t,i,s,r=0,o,a=!1){let l=new Te(e*bn,t*bn);l.translate((e/2-i)*bn,(s-t/2)*bn,0);let c=gu(n);o.push(c);let h=new G(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=gu(Ag(n),{color:"#FFE9C8"});_g.push(u);let p=new G(l,u);p.position.z=-.045-r,h.add(p)}let d=Eu.get(n);return d||(d=new Wi({depthPacking:lr,map:n,alphaTest:.5,side:Mt}),Eu.set(n,d)),h.customDepthMaterial=d,h}function Mg(){return xn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function Sg(){return xn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function ih(n={}){let e=fg[n.outfit||"hero"],t=n.outfit||"hero",i=new le,s=[],r=new le;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,v]of[["L",-1,-.012],["R",1,-.01]]){let _=new le;_.position.set(f*34*bn,o*bn,v);let y=new le;y.position.y=-142*bn,_.add(Sn(mu(1),50,160,25,6,0,s)),y.add(Sn(mu(1),50,160,25,6,0,s));let D=Sn(gg(),80,40,26,6,.001,s);D.position.y=-142*bn,f<0&&(D.scale.x=-1),y.add(D),_.add(y),r.add(_),l[m]={th:_,shin:y}}let h=Sn(pg(e,t),300,320,150,20,0,s);h.position.y=(a+4)*bn,r.add(h);for(let[m,f,v]of[["L",-1,-.006],["R",1,.006]]){let _=new le;_.position.set(f*(e.kind==="dress"?66:84)*bn,(a-24)*bn,v);let y=new le;y.position.y=-124*bn,_.add(Sn(pu(e,t,"u"),90,170,45,10,0,s)),y.add(Sn(pu(e,t,"f"),90,170,45,10,.001,s));let D=Sn(mg(),90,100,45,14,.002,s);D.position.y=-128*bn,D.scale.set(f>0?-.8:.8,.8,1),y.add(D),_.add(y),r.add(_),c[m]={u:_,f:y,hand:D}}let d=new le;if(d.position.set(0,(a+104)*bn,.02),r.add(d),n.hair){let m=Sn(vg(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Sn(Eg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Sn(xn("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let v=n.hairc||"#4a2c1a";f.fillStyle=v,f.fill(gt(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Sn(xn("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(v=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(v*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(yu)){let f=Sn(yg(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",d.add(f),u[m]=f}if(n.glasses){let m=Sn(xn("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Sn(n.hat(xn),300,300,150,150,.006,s);d.add(m)}let p=new G(new Te(1,.4),new et({map:Mg(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new G(new Te(2.1,3),new et({map:Sg(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:yn,side:Mt})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in u)u[f].visible=f===m},cheer(m,f=0,v=1){let _=m*6+f,y=Math.sin(_);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(_*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,v=m.armL||[6,4],_=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*f,c.L.f.rotation.z=-v[1]*f,c.R.u.rotation.z=_[0]*f,c.R.f.rotation.z=_[1]*f,l.L.th.rotation.z=-y[0]*f,l.L.shin.rotation.z=-y[1]*f,l.R.th.rotation.z=D[0]*f,l.R.shin.rotation.z=D[1]*f,d.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let R=m.squash||0;r.scale.set(1-R*.5,1+R,1)},walk(m,f=1,v=1){let _=m*6.4*f,y=Math.sin(_),D=Math.cos(_);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,f,v=0,_=1){i.position.set(m,v,f),i.scale.setScalar(_)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return E.pose(),E}function Ae(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new An(i);return r.colorSpace=It,r.anisotropy=8,r}var As=(n,e={})=>new Ue({color:n,roughness:.88,metalness:0,...e});function T(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new G(new _n(n,e,t),typeof i=="string"?As(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function at(n,e,t=1){let i=Ae(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Vr(new nr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:yn}));return s.scale.set(e,e,1),s}var vu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function bg(n,e,t,i,s,r=.42){let o=Ge(n),a=256*e,l=300*t,c,h=Ae(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,p,28,10);for(let p=0;p<t;p++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,p*300+292,a,8)}),d=Ae(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,f=g*300+60,v=144,_=196,y=o()<r,D=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,v+18,_+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+_+9,v+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+_+6,v+36,8),p.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,v,_),y||!s){let R=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=R,p.fillRect(m,f,26,_),p.fillRect(m+v-26,f,26,_)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+_),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+_),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+v/2-3,f,6,_),p.fillRect(m,f+_*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,f,v,_),u.fillStyle="#000",u.fillRect(m+v/2-3,f,6,_),u.fillRect(m,f+_*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=It,{map:h,emissiveMap:d}}function Yi(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=Ge(n),u=new le,p=o*2.9+3.6,g=c||vu[Math.floor(d()*vu.length)],E=Math.max(2,Math.round(r/2.1)),m=bg(n,E,o,g,l,e.lit??.42),f=new Ue({map:m.map,emissiveMap:m.emissiveMap,emissive:new de(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=As(g),_=[a>0?f:v,a>0?v:f,As("#2c2730"),v,v,v],y=new G(new _n(s,o*2.9,r),_);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(T(s+.5,.5,r+.5,"#3d3540",t,p+.25,i)),u.add(T(s+.3,.35,r+.3,g,t,3.6,i));let D=t+a*(s/2+.01);if(h){let R=Ae(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),x=new G(new _n(.18,1.05,r-.3),[new Ue({map:R,emissiveMap:R,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),new Ue({map:R,emissiveMap:R,emissive:new de(l?.85:0,l?.85:0,l?.85:0)}),As("#222"),As("#222"),As("#222"),As("#222")]);x.position.set(D+a*.1,3.25,i),a>0&&(x.scale.z=-1),x.castShadow=!0,u.add(x);let F=Ae(512,256,P=>{let B=P.createLinearGradient(0,0,0,256);B.addColorStop(0,h.win||"#F4C783"),B.addColorStop(1,"#D59A5C"),P.fillStyle=B,P.fillRect(0,0,512,256);let H=Ge(n+9);for(let X=0;X<26;X++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(H()*6)],P.fillRect(H()*490,30+Math.floor(H()*3)*76,12+H()*26,52);for(let X of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,X,512,7)}),S=new Ue({map:F,emissiveMap:F,emissive:new de(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(T(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let A=new G(new Te(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(D+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(T(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=Ae(512,128,H=>{for(let X=0;X<12;X++)H.fillStyle=X%2?h.awning:"#F4EEDF",H.fillRect(X*512/12,0,42.666666666666664,128)}),B=new G(new Te(r-.3,1.3),new Ue({map:P,side:Mt,roughness:.9}));B.rotation.y=a*Math.PI/2,B.rotation.order="YXZ",B.rotation.x=-1,B.position.set(D+a*.55,2.56,i),B.castShadow=!0,u.add(B)}if(l){let P=new nt(h.light||"#FFC88A",3.2,7,1.8);P.position.set(D+a*1.7,2.1,i),u.add(P)}}return u}function _u(n,e,t){let i=new G(new Te(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function xg(n="#A99D90"){let e=Ae(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=Ge(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=tn,e}function Ea(n,e){let t=Ae(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Ge(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=tn,t.repeat.set(1,12);let i=_u(9,240,new Ue({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=xg(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=_u(4.4,240,new Ue({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(T(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function ya(n,e,t,i,s=!0,r=5.5){let o=new le;o.add(T(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(T(.26,.3,.26,"#15151b",e,.15,t));let a=T(.26,.4,.26,new Ue({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(T(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=at("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new nt("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var Au={};function un(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new le;o.add(T(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=Au[a]||(Au[a]=Ae(512,512,c=>{let h=Ge(r%3+3),d=(u,p,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,v=g*(.86+.14*Math.sin(f*5+u)+h()*.05);c.lineTo(u+Math.cos(f)*v,p+Math.sin(f)*v)}c.fill()};for(let[u,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,p,g,s[0]);for(let[u,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,p,g,s[1]);for(let[u,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,p,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new G(new Te(3.6*i,3.6*i),new Ue({map:l,alphaTest:.5,side:Mt,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Wi({depthPacking:lr,map:l,alphaTest:.5,side:Mt}),o.add(h)}return n.add(o),o}function qn(n,e,t,i,s,r,o=3,a=0){let l=Ae(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Ge(o);for(let u=0;u<3;u++)for(let p=-40;p<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(p,900-E,g,E),d()<.2&&h.fillRect(p+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new G(new Te(t,i),new et({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Rt(n,e,t,i,s){let r=Ae(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new G(new Te(t,i),new et({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var C=(n,e={})=>new Ue({color:n,roughness:.85,...e});function Re(n,e,t,i={}){let s=new G(new Te(e,t),new et({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:Mt,color:i.color||"#fff",blending:i.add?yn:Bi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Wi({depthPacking:lr,map:n,alphaTest:.5,side:Mt})),s}function Yr(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var sh={value:0};function va(n="#8E3D30",e=4,t=3){let i=Ae(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Ge(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=tn,i.repeat.set(e,t),i}function Mu(n="#A59383",e=12,t=12){let i=Ae(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Ge(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=tn,i.repeat.set(e,t),i}var Su=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function Tg(n,e){let[t,i,s,r]=Su[n];return Ae(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function rh(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=Ge(o),l={};for(let c of e){let h=Math.floor(a()*Su.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=Tg(d,h),p=new et({map:u,alphaTest:.5,side:Mt,color:r});p.onBeforeCompile=m=>{m.uniforms.uT=sh,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new sa(new Te(i*.5,i),p,l[c].length),E=new Vt;l[c].forEach((m,f)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(f,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function Tn(n,e=2600,t=300,i=1){let s=Ge(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,p=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(p)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(p)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new qt;a.setAttribute("position",new en(r,3)),a.setAttribute("color",new en(o,3));let l=Ae(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new ir({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Wr(a,c);return h.frustumCulled=!1,n.add(h),h}function wi(n,e,t="#6D4A33"){let i=Ae(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=Ge(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=tn,i.repeat.set(n/5,e/5);let s=new G(new Te(n,e),new Ue({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function oi(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Ae(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=tn,r.repeat.set(n/s*4,e/s*4);let o=new G(new Te(n,e),new Ue({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Ms(n,e,t="#FFD9A0",i=.22){let s=Ae(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new G(new Te(n,e),new et({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:yn,side:Mt,fog:!1}))}function oh(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new le,a=new G(new tt(.3,.22,.5,20),C(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Ae(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Re(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function ah(n,e,t,i="#2A1E18"){let s=new le;s.add(T(n+.08,e+.08,.04,i,0,0,0));let r=Ae(Math.round(n*400),Math.round(e*400),t),o=new G(new Te(n,e),new Ue({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Nt(n,e,t,i=1.2){return new G(new Te(n,e),new Ue({color:"#000",emissive:t,emissiveIntensity:i}))}function rt(n,e,t,i=10,s=60){let r=new ar(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function Zr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Be(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Rt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),qn(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=va(t,2,2),a=()=>new Ue({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,E,m])=>n.add(T(E,m,.3,a(),p,g,-3)));for(let[p,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(T(E,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(T(18,5.2,.3,a(),0,2.6,-3));n.add(wi(18,12,s));let l=ah(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(oh(4.4,0,-2.4,1.1)),n.add(oh(-5,0,-2.4,.9,"#36AEA2")),n.add(new Ne(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=rt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new nt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new G(new tt(.18,.3,.34,24),new Ue({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(T(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=at("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var bu=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function $r(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Be(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Rt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),qn(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),Ea(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Yi(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:bu[(a+i)%5]})),n.add(Yi(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:bu[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)un(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),ya(n,-5,-3-l*12,1,t||r);n.add(new Ne(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(rt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},ot=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},Et=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},fr={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),ot(n,120,330,34,100,14,"#B5784A"),ot(n,340,330,34,100,14,"#B5784A"),ot(n,180,340,34,90,14,"#C98E5E"),ot(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),ot(n,120,330,34,100,14,"#B5906A"),ot(n,340,330,34,100,14,"#B5906A"),ot(n,180,340,34,90,14,"#C9A07E"),ot(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),Et(n,[[96,120],[110,30],[160,100]],"#E9853A"),Et(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),Et(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),Et(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),Et(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),ot(n,92,200,26,70,12,"#A87A44"),ot(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),Et(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),Et(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),Et(n,[[300,90],[360,20],[370,100]],"#5A88AC"),Et(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),Et(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])ot(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),Et(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{ot(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),Et(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),ot(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),Et(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),Et(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])ot(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),Et(n,[[80,80],[60,40],[104,72]],"#C9A06A"),Et(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])ot(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),Et(n,[[160,70],[150,30],[196,70]],"#E890A4"),Et(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),ot(n,40,260,70,240,30,"#2E2E38"),ot(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{ot(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])ot(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),ot(n,160,20,12,50,6,"#8A5A2A"),ot(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])ot(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),Et(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),Et(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),Et(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])ot(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])ot(n,e,330,26,180,12,"#9A6238");ot(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),Et(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])ot(n,e,360,34,190,14,"#4A3222");ot(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)Et(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])ot(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),Et(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),Et(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])ot(n,e,320,34,230,14,"#7A4A2E");ot(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),ot(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),Et(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},_a={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(_a,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in _a)fr[n][3]=_a[n][0],fr[n][4]=_a[n][1];fr.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),Et(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];fr.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)Et(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),Et(n,[[100,80],[90,30],[130,74]],"#F2913A"),Et(n,[[160,76],[170,26],[190,80]],"#F2913A"),ot(n,160,380,40,56,18,"#6AB05A"),ot(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];fr.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])ot(n,e,320,34,230,14,"#E4DED2");ot(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),ot(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),Et(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Aa={},xu=n=>Aa["e"+n]||(Aa["e"+n]=Ae(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function Tu(n,e={}){let[t,i,s,r,o,a]=fr[n],l=Aa[n]||(Aa[n]=Ae(t,i,s)),c=a*i/t,h=new le,d=new le;h.add(d);let u=Re(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let p=new G(new Te(o*a,o*a*.5),new et({map:xu("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(p);let g=new G(new ii(a*.45,24),new et({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){p.material.map=xu(m)},face(m){let f=new I;h.getWorldPosition(f),d.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){u.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,v=0,_=1){return h.position.set(m,v,f),h.scale.setScalar(_),E}};return E}var Zi=(n,e,t=200,i=200,s)=>{let r=new G(new Te(t,i),s?new Ue({map:s,roughness:.95}):C(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},lh=(n,e=1)=>{n.add(new Ne("#E9EEFF","#B08A6A",1.05*e)),n.add(rt("#FFD29A",3*e,[-14,16,10],20,70))},we={sala:(n,e)=>Zr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{Zr(n,{wall:"#9A4632",night:e.night}),n.add(T(2.4,.45,3.2,C("#6B4A33"),-1.7,.25,-1.4)),n.add(T(2.3,.3,3,C("#F3EEE4"),-1.7,.6,-1.4)),n.add(T(2.38,.22,2,C("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(T(.8,.22,.5,C("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>$r(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Be(e.dusk?"#E8A880":"#F2D8B8",.02),Rt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),qn(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),Zi(n,"#7A9A50");for(let t=0;t<12;t++)un(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(T(2.4,.1,.5,C("#8E6242"),-3.4,.5,-2.2)),n.add(T(2.4,.5,.08,C("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)ya(n,-6+t*6,-4,1,!!e.dusk);n.add(new Ne("#E9EEFF","#B08A6A",1)),n.add(rt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{$r(n,{seed:e.seed||2}),Zi(n,"",60,60,Mu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Be("#F2D8B8",.012),Rt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Zi(n,"#8AAA58");let t=new le;t.add(T(6,4,5,C("#B5402E"),0,2,0));let i=new G(new tt(.01,4.4,2.2,4),C("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(T(2,2.6,.1,C("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(T(.1,1,.1,C("#C9A06A"),-10+s*1.3,.5,-4));n.add(T(20,.08,.06,C("#C9A06A"),0,.9,-4)),n.add(T(20,.08,.06,C("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)un(n,6+s*3,-16-s%2*3,1.6,void 0,s);lh(n)},sabana:(n,e)=>{n.fog=new Be("#F2C890",.01),Rt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=at("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),Zi(n,"#C8A858");for(let i=0;i<6;i++){let s=new le;s.add(T(.3,3,.3,C("#5A3A22"),0,1.5,0));let r=new G(new tt(2.6,2.2,.6,12),C("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Ne("#FFE8C8","#8A6A3A",1)),n.add(rt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Be("#F2E2C0",.012),Rt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),Zi(n,"#B8B070");for(let t=0;t<14;t++){let i=new G(new wt(.55,16,10,0,Math.PI*2,0,Math.PI/2),C("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}lh(n)},mar:(n,e)=>{wg(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Be(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=Zi(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=Ge(5);for(let r=0;r<30;r++){let o=new G(new si(.2+s()*.3,.8+s()*1.4,7),C(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Ms(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=at("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Ne("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(rt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Be("#162238",.04),n.add(oi(16,20,"#2A3348","#232B3E",6)),n.add(T(16,6,.3,C("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Nt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Nt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Ae(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new G(new Te(2.5,1.3),new et({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Ne("#6E86C8","#101420",.8)),n.add(rt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Be("#1E2236",.02),Zi(n,"#2F4A7A"),n.add(T(30,10,.3,C("#E8E2D2"),0,5,-8));let t=Ae(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Re(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new G(new an(4,.35,10,48),C("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new nt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Ne("#E8E8FF","#3A3A50",.9)),n.add(rt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Be("#E6E2D6",.03),n.add(oi(9,40));for(let i of[-1,1]){n.add(T(.7,4.2,30,C("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(T(1.2,.05,30,C("#DDE0E4"),i*3,.5+s*.9,-10))}let t=Ge(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(T(.3,.3,.4,C(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Nt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Ne("#FFFFFF","#B9B3A6",1)),n.add(rt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{we.parque(n,{});for(let t=0;t<12;t++)n.add(T(.08,1.4,.08,C("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(T(8,.08,.08,C("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{Zr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Be("#8A8070",.03),Rt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),Zi(n,"#8A8070");let t=Ge(8);for(let i=0;i<40;i++){let s=T(.4+t()*1.6,.3+t()*1,.4+t()*1.4,C(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}lh(n,.8)}};function wg(n,e){n.background=new de(e)}function Rg(n,e={}){let t=ih({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var Cg=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function ch(n,e,t){let i=uu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(we[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?Rg(s,a):(()=>{let c=Tu(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{sh.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=ga(t.cam.map(([g,E])=>[g,E]),l),u=ga(t.cam.map(([g,,E])=>[g,E]),l);fu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let f=g.move(l);E.root.position.set(f[0],f[1],f[2])}E.face(c),E.eye(Cg(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,v])=>l>=f&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?ga(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function wu(n,e,t,i="#E8667F"){n.add(T(2.2,.45,3,C("#6B4A33"),e,.25,t)),n.add(T(2.1,.3,2.8,C("#F3EEE4"),e,.6,t)),n.add(T(2.18,.2,1.9,C(i,{roughness:.9}),e,.8,t+.5)),n.add(T(2.2,1.3,.16,C("#5A3C28"),e,.9,t-1.55)),n.add(T(.8,.2,.45,C("#FFFFFF"),e-.5,.82,t-1.1)),n.add(T(.8,.2,.45,C("#F6E6C8"),e+.5,.82,t-1.1))}function Ru(n,e=Math.PI/2){n.root.rotation.z=e}function Cu(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return Ae(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function pr(n,e="#F2C14E",t=140,i=256,s=200){return Ae(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function Fg(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function Jr(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new An(i);r.colorSpace=It;let o=new G(new Te(n,n),new Ue({map:r,transparent:!0,alphaTest:.05,side:Mt,roughness:.7}));return o.set=(a,l={})=>{Fg(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}function Pg(n,e={}){let{w:t=512,h:i=256,bg:s="#10141E",fg:r="#FFFFFF",size:o=80,font:a="Inter",weight:l=800}=e;return Ae(t,i,c=>{c.fillStyle=s,c.fillRect(0,0,t,i),c.fillStyle=r,c.font=`${l} ${o}px ${a}`,c.textAlign="center",c.textBaseline="middle";let h=Array.isArray(n)?n:[n];h.forEach((d,u)=>c.fillText(d,t/2,i/2+(u-(h.length-1)/2)*o*1.15))})}function hh(n,e,t,i,s={}){let r=Pg(e,s),o=new G(new Te(t,i),new et({map:r,toneMapped:!1}));return n.add(o),o}var Qr=[0,7.3,11.58,16.94,20.54,23.62,30.24,35.16,43.14,49.1,50.2,64.9,74.34,81.32,86.78,91,97.06,100.8,105.68,109.04,116.94,124,129,129.98,134,142.98,147.66,151.76,153.14,156.68,160.58,164.24,172.54,176.18,180.06,188.28,195.16,195.7,203.56,208.92,222.3,232.7,239.78,240.24,247.24,261.2,268.78,277.64,286.46,297.84,303.72,308.8,320.24,324.86,326.02,333.36,343.22,353.94,362.74,363.96,367.72,369.8,380.76,385.54,393.34,397.72,402.94,408.32,409.7,415.34,420.98,435,438.06,447.08,451.7,452.88,458.68,463.88,470.4,478.18,486.7,488.2,496.38,501.74,508.66,518.92,528.62,530.32,533.96,547.16,550.34,557.62,563.36,568.36,576.28,580.42,591.7,594.08,602.56,603.86,611.36,617.6,621.2,632.28,639.1,649.44,660.48],Ig=[["son",0],["las",.24],["doce",.46],["menos",.84],["un",1.04],["minuto",1.32],["de",1.76],["la",1.86],["noche",1.96],["estas",2.86],["en",3.16],["la",3.32],["cama",3.44],["mirando",4.18],["su",4.5],["foto",4.72],["de",5],["perfil",5.16],["otra",6.06],["vez",6.4],["tu",7.3],["crush",7.46],["la",8.42],["persona",8.56],["que",8.9],["ni",9.12],["siquiera",9.34],["sabe",9.78],["que",10.14],["existes",10.34],["y",11.58],["entonces",11.74],["a",12.54],["las",12.68],["doce",12.8],["en",13.16],["punto",13.3],["te",13.64],["llega",14.16],["un",14.42],["mensaje",14.66],["de",15.78],["ella",15.98],["estas",16.94],["despierto",17.22],["no",18.26],["puedo",18.44],["dejar",18.76],["de",19.12],["pensar",19.26],["en",19.5],["ti",19.76],["te",20.54],["sientas",20.74],["de",21.14],["golpe",21.28],["lo",22],["lees",22.12],["diez",22.42],["veces",22.72],["y",23.62],["debajo",23.78],["aparece",24.14],["un",24.68],["segundo",24.96],["mensaje",25.34],["que",26.22],["no",26.34],["ha",26.54],["enviado",26.66],["nadie",27.1],["tienes",28.02],["24",28.44],["horas",29.14],["tu",30.24],["crush",30.36],["se",30.7],["ha",31.2],["enamorado",31.34],["de",31.88],["ti",32.1],["pero",32.64],["solo",32.86],["hasta",33.2],["manana",33.44],["a",33.84],["medianoche",34.06],["y",35.16],["antes",35.34],["de",35.58],["que",35.74],["empiece",35.84],["la",36.16],["cuenta",36.34],["atras",36.56],["si",37.46],["te",37.56],["gustan",37.66],["estas",38],["historias",38.22],["de",38.78],["y",39.02],["si",39.5],["suscribete",40.22],["al",40.84],["canal",41],["y",41.26],["activa",41.54],["la",41.94],["campanita",42.04],["y",43.14],["ahora",43.26],["si",43.5],["vamos",44.16],["a",44.4],["ver",44.6],["que",44.74],["haces",44.94],["con",45.22],["las",45.42],["24",45.58],["horas",46.3],["mas",46.58],["importantes",46.94],["de",47.68],["tu",47.94],["vida",48.06],["hora",49.1],["uno",49.4],["no",50.2],["sabes",50.48],["que",50.76],["contestar",51],["escribes",52],["hola",52.44],["lo",53.82],["borras",53.9],["escribes",54.6],["yo",55.1],["tambien",55.68],["lo",56.62],["borras",56.7],["escribes",57.48],["jaja",58.12],["lo",59.3],["borras",59.38],["al",60.34],["final",60.48],["mandas",60.72],["un",61.2],["emoji",61.32],["de",61.6],["una",61.8],["carita",61.96],["sonriendo",62.32],["y",62.92],["quieres",63.2],["desaparecer",63.6],["pero",64.9],["ella",65.1],["contesta",65.36],["en",66.08],["un",66.26],["segundo",66.4],["un",67.42],["corazon",67.58],["y",68.54],["luego",68.7],["otro",68.9],["y",69.68],["luego",69.82],["un",70.02],["audio",70.28],["de",70.5],["cuarenta",70.68],["segundos",71.22],["riendose",71.64],["de",72.44],["lo",72.56],["nervioso",72.66],["que",73.14],["estas",73.38],["lo",74.34],["que",74.62],["te",74.74],["esta",74.86],["pasando",75.04],["ahora",75.42],["mismo",75.64],["tiene",76.08],["explicacion",76.46],["cuando",77.7],["te",77.86],["gusta",78.08],["alguien",78.32],["de",78.68],["verdad",78.86],["tu",79.54],["cerebro",79.64],["suelta",80],["dopamina",80.4],["la",81.32],["misma",81.52],["sustancia",81.74],["que",82.34],["aparece",82.56],["cuando",82.9],["ganas",83.14],["en",83.66],["un",83.78],["videojuego",83.88],["o",84.44],["cuando",84.74],["comes",85.04],["algo",85.36],["riquisimo",85.66],["la",86.78],["antropologa",86.98],["helen",87.6],["fisher",87.92],["metio",88.26],["a",88.84],["personas",88.9],["enamoradas",89.28],["en",89.88],["un",90.1],["escaner",90.2],["les",91],["enseno",91.1],["una",91.58],["foto",91.76],["de",92],["la",92.18],["persona",92.28],["que",92.6],["les",92.8],["gustaba",92.94],["y",93.38],["se",93.82],["les",93.92],["encendio",94.06],["el",94.6],["sistema",94.72],["de",95.1],["recompensa",95.28],["del",95.92],["cerebro",96.12],["el",97.06],["amor",97.2],["por",97.74],["dentro",97.9],["funciona",98.62],["un",99],["poco",99.26],["como",99.42],["un",99.74],["premio",99.94],["por",100.8],["eso",100.98],["no",101.2],["puedes",101.38],["dormir",101.76],["por",102.56],["eso",102.72],["son",103.04],["las",103.2],["3",103.4],["de",103.64],["la",103.78],["manana",103.9],["y",104.2],["seguis",104.44],["hablando",104.86],["y",105.68],["por",105.84],["eso",106],["no",106.26],["puedes",106.76],["pensar",107.2],["en",107.64],["otra",107.84],["cosa",108.06],["en",109.04],["1999",109.22],["una",110.14],["psiquiatra",111.16],["italiana",111.66],["donatella",112.46],["marazziti",112.9],["analizo",113.86],["la",114.28],["sangre",114.42],["de",114.7],["personas",114.88],["recien",115.32],["enamoradas",115.92],["tenian",116.94],["la",117.32],["serotonina",117.54],["una",118.5],["sustancia",118.62],["que",119.12],["ayuda",119.32],["a",119.56],["calmar",119.72],["los",120.02],["pensamientos",120.2],["tan",121.2],["baja",121.38],["como",121.72],["las",122.02],["personas",122.2],["con",122.68],["obsesiones",122.94],["es",124],["decir",124.16],["enamorarse",124.86],["es",125.42],["literalmente",126.04],["obsesionarse",127.36],["un",128.04],["poquito",128.26],["hora",129],["8",129.62],["suena",129.98],["el",130.92],["despertador",131.04],["has",131.94],["dormido",132.26],["dos",132.74],["horas",133.1],["te",134],["miras",134.14],["al",134.4],["espejo",134.52],["tienes",135.36],["ojeras",135.62],["el",136.48],["pelo",136.58],["de",136.8],["lado",136.96],["y",137.28],["una",137.62],["camiseta",137.78],["con",138.3],["una",138.54],["mancha",138.7],["de",139.04],["ketchup",139.18],["es",140.08],["el",140.34],["peor",140.5],["momento",140.94],["para",141.38],["ver",141.7],["a",141.9],["tu",141.98],["crush",142.12],["y",142.98],["en",143.16],["ese",143.26],["momento",143.42],["te",143.86],["escribe",144.28],["te",145.34],["espero",145.54],["en",145.82],["la",145.98],["puerta",146.08],["del",146.32],["instituto",146.58],["te",147.66],["cambias",147.88],["tres",148.26],["veces",148.58],["de",148.94],["ropa",149.14],["te",149.82],["echas",149.9],["medio",150.16],["bote",150.5],["de",150.84],["colonia",150.98],["sales",151.76],["corriendo",151.98],["ella",153.14],["esta",153.4],["ahi",153.74],["esperandote",154.6],["a",155.64],["ti",155.88],["la",156.68],["gente",156.9],["que",157.12],["pasa",157.3],["os",157.6],["mira",157.88],["como",158.12],["si",158.34],["fuerais",158.48],["un",158.88],["fenomeno",159.02],["paranormal",159.56],["tu",160.58],["mejor",160.74],["amigo",161],["se",161.26],["queda",161.52],["congelado",161.72],["con",162.4],["el",162.6],["bocadillo",162.72],["en",163.2],["la",163.34],["boca",163.44],["ella",164.24],["te",164.52],["saluda",164.72],["y",165.64],["tu",165.72],["con",166.3],["todo",166.42],["el",166.72],["control",166.94],["del",167.32],["mundo",167.54],["le",168.32],["dices",168.42],["buenas",169.54],["tardes",169.7],["son",170.74],["las",171.1],["8",171.32],["de",171.62],["la",171.82],["manana",171.9],["pero",172.54],["ella",172.78],["se",173.06],["rie",173.3],["y",174.14],["aqui",174.36],["viene",174.58],["algo",174.88],["curioso",175.14],["cuando",176.18],["alguien",176.4],["te",176.74],["gusta",176.96],["tus",177.64],["pupilas",177.78],["se",178.3],["hacen",178.44],["mas",178.66],["grandes",179],["al",179.44],["mirarlo",179.66],["en",180.06],["los",180.76],["anos",180.9],["60",181.16],["un",181.96],["psicologo",182.14],["llamado",182.58],["eckhard",182.9],["hess",183.62],["estudio",183.9],["como",184.62],["las",185],["pupilas",185.22],["cambian",185.7],["de",186.1],["tamano",186.26],["segun",186.7],["lo",187],["que",187.22],["nos",187.32],["interesa",187.46],["y",188.28],["hoy",188.56],["lo",188.72],["estas",188.88],["viendo",189.14],["en",189.42],["directo",189.62],["sus",190.52],["ojos",190.7],["cuando",191.36],["te",191.58],["mira",191.84],["parecen",192.44],["dos",192.82],["monedas",193.16],["negras",193.72],["hora",195.16],["10",195.4],["clase",195.7],["de",196.52],["matematicas",196.72],["ella",197.82],["se",198.16],["sienta",198.38],["a",198.78],["tu",198.88],["lado",198.96],["el",199.7],["profesor",199.86],["explica",200.34],["ecuaciones",200.82],["y",201.38],["tu",201.9],["no",202.1],["oyes",202.46],["nada",202.72],["solo",203.56],["oyes",203.92],["tu",204.2],["corazon",204.4],["que",204.78],["va",205.32],["como",205.48],["si",205.74],["hubieras",205.92],["subido",206.32],["10",206.7],["pisos",207.04],["por",207.54],["la",207.74],["escalera",207.86],["eso",208.92],["tambien",209.28],["tiene",209.74],["explicacion",209.98],["cuando",211.18],["estas",211.34],["cerca",211.66],["de",212],["la",212.18],["persona",212.28],["que",212.64],["te",212.84],["gusta",212.96],["tu",213.62],["cuerpo",213.76],["se",214.06],["pone",214.28],["en",214.52],["modo",214.72],["alerta",214.96],["suelta",215.9],["adrenalina",216.24],["el",217.22],["corazon",217.34],["se",217.68],["acelera",217.9],["te",218.66],["sudan",218.76],["las",219.04],["manos",219.22],["y",219.58],["sientes",219.98],["cosquillas",220.28],["en",220.98],["el",221.2],["estomago",221.32],["las",222.3],["famosas",222.5],["mariposas",222.96],["no",223.68],["son",224.36],["mariposas",224.64],["es",225.74],["tu",225.94],["cuerpo",226.1],["preparandose",226.46],["como",227.2],["si",227.42],["fuera",227.6],["a",227.84],["pasar",227.96],["algo",228.18],["muy",228.52],["importante",228.9],["y",230],["en",230.3],["cierto",230.54],["modo",230.76],["es",231.48],["verdad",231.66],["ella",232.7],["te",232.92],["pasa",233.12],["una",233.34],["nota",233.6],["la",234.42],["abres",234.56],["debajo",234.84],["de",235.22],["la",235.4],["mesa",235.5],["pone",236.3],["hoy",237.18],["quiero",237.34],["conocerte",237.66],["de",238.22],["verdad",238.42],["hora",239.78],["12",239.98],["en",240.24],["el",240.98],["recreo",241.1],["ella",241.82],["saca",242],["el",242.36],["movil",242.46],["y",242.78],["te",242.92],["ensena",242.98],["una",243.4],["lista",243.6],["se",244.34],["llama",244.54],["las",244.82],["36",245.36],["preguntas",246.06],["y",247.24],["esto",247.44],["existe",247.68],["de",248.08],["verdad",248.28],["en",249.08],["1997",249.24],["el",251.2],["psicologo",251.24],["arthur",251.74],["aron",252.16],["hizo",252.58],["un",253.04],["experimento",253.24],["junto",254.42],["a",254.8],["parejas",254.9],["de",255.24],["desconocidos",255.4],["y",256.14],["les",256.42],["pidio",256.58],["que",256.88],["se",257],["hicieran",257.14],["36",257.48],["preguntas",258.2],["cada",259.18],["vez",259.38],["mas",259.62],["personales",260],["al",261.2],["final",261.34],["muchos",262.1],["se",262.36],["sentian",262.58],["mucho",262.96],["mas",263.4],["unidos",263.62],["que",264.02],["al",264.2],["empezar",264.3],["una",265.16],["de",265.36],["esas",265.5],["parejas",265.7],["anos",266.5],["despues",266.84],["se",267.66],["caso",267.78],["las",268.78],["primeras",268.94],["preguntas",269.34],["son",269.82],["faciles",270.14],["con",271.2],["quien",271.34],["te",271.54],["gustaria",271.72],["cenar",272.14],["si",272.54],["pudieras",272.72],["elegir",273.18],["a",273.54],["cualquier",273.66],["persona",274],["del",274.6],["mundo",274.82],["como",275.54],["seria",275.8],["tu",276.2],["dia",276.42],["perfecto",276.62],["pero",277.64],["luego",277.92],["se",278.24],["ponen",278.5],["serias",278.78],["cual",279.9],["es",280.12],["tu",280.28],["recuerdo",280.4],["mas",280.84],["bonito",281.22],["cual",282.3],["es",282.56],["el",282.68],["mas",282.8],["doloroso",282.98],["que",284.18],["es",284.36],["lo",284.56],["que",284.72],["mas",284.84],["te",285.06],["averguenza",285.24],["y",286.46],["tu",286.66],["que",287.18],["llevas",287.34],["anos",287.62],["fingiendo",288],["que",288.64],["eres",288.82],["un",288.98],["tipo",289.18],["tranquilo",289.4],["y",290.08],["misterioso",290.18],["le",291.26],["cuentas",291.46],["la",291.88],["verdad",292],["que",292.74],["lloraste",292.98],["con",293.38],["una",293.62],["pelicula",293.78],["de",294.18],["dibujos",294.4],["animados",294.84],["que",295.94],["te",296.04],["da",296.16],["miedo",296.28],["la",296.62],["oscuridad",296.8],["que",297.84],["una",298.02],["vez",298.2],["te",298.46],["caiste",298.64],["delante",299.02],["de",299.42],["todo",299.6],["el",299.86],["comedor",300.08],["y",300.56],["fingiste",300.92],["que",301.44],["lo",301.58],["habias",301.72],["hecho",301.96],["a",302.24],["proposito",302.38],["ella",303.72],["no",303.96],["se",304.26],["rie",304.44],["de",304.72],["ti",304.84],["te",305.62],["escucha",305.74],["y",306.86],["luego",306.94],["te",307.18],["cuenta",307.38],["sus",307.74],["cosas",307.94],["y",308.8],["descubres",308.94],["que",309.42],["tu",309.62],["crush",309.76],["la",310.5],["persona",310.62],["perfecta",311.02],["tambien",312.08],["tiene",312.42],["miedo",312.72],["de",313.1],["muchas",313.28],["cosas",313.5],["tambien",314.44],["se",314.9],["siente",315.12],["sola",315.44],["a",315.78],["veces",315.98],["tambien",316.76],["se",317.16],["mira",317.38],["al",317.58],["espejo",317.76],["y",318.3],["no",318.66],["le",318.82],["gusta",318.94],["lo",319.2],["que",319.4],["ve",319.52],["por",320.24],["primera",320.4],["vez",320.72],["no",321.48],["es",321.74],["tu",321.94],["crush",322.06],["es",323.06],["una",323.22],["persona",323.4],["hora",324.86],["13",325.08],["tu",326.02],["mejor",326.18],["amigo",326.48],["te",326.74],["acorrala",327],["en",327.5],["el",327.6],["bano",327.72],["que",328.48],["esta",328.62],["pasando",328.8],["le",329.56],["has",329.7],["pagado",329.82],["la",330.5],["tienes",330.68],["amenazada",330.9],["es",331.82],["una",332],["camara",332.18],["oculta",332.42],["le",333.36],["intentas",333.58],["explicarlo",333.98],["del",334.7],["mensaje",334.86],["de",335.32],["media",335.46],["noche",335.64],["te",336.46],["mira",336.62],["como",336.8],["si",337.06],["estuvieras",337.24],["loco",337.82],["luego",338.6],["te",338.88],["pide",339.1],["que",339.36],["ya",339.96],["que",340.1],["estas",340.24],["le",340.9],["preguntes",341.06],["si",341.58],["su",341.74],["amiga",341.86],["tiene",342.14],["novio",342.52],["y",343.22],["mientras",343.26],["tanto",343.54],["el",344.26],["instituto",344.44],["entero",344.9],["habla",345.32],["de",345.62],["vosotros",345.8],["en",346.76],["el",346.9],["grupo",347],["de",347.2],["clase",347.4],["hay",347.68],["140",347.92],["mensajes",348.44],["nuevos",349.4],["alguien",350.38],["ha",350.72],["hecho",350.82],["un",351],["montaje",351.12],["con",351.58],["vuestras",351.8],["caras",352.1],["dentro",352.52],["de",352.74],["un",352.98],["corazon",353.08],["y",353.94],["otro",354.14],["ha",354.36],["abierto",354.7],["una",355.06],["encuesta",355.28],["cuanto",356.22],["durara",356.54],["la",357.42],["opcion",357.58],["mas",357.84],["votada",358.04],["es",358.4],["menos",358.72],["de",359.22],["una",359.48],["semana",359.66],["si",360.6],["ellos",360.96],["supieran",361.26],["hora",362.74],["15",362.98],["ella",363.96],["quiere",364.26],["ir",364.56],["a",364.82],["algun",364.9],["sitio",365.14],["contigo",365.42],["vais",366.44],["a",366.68],["la",366.82],["feria",366.92],["os",367.72],["subis",367.88],["a",368.24],["la",368.36],["montana",368.46],["rusa",368.94],["y",369.8],["aqui",369.96],["hay",370.16],["otro",370.34],["dato",370.56],["curioso",370.78],["en",371.8],["1974",371.94],["dos",373.72],["psicologos",373.94],["dutton",374.84],["y",375.3],["aron",375.56],["hicieron",376.14],["un",376.44],["experimento",376.64],["en",377.34],["un",377.44],["puente",377.58],["colgante",377.88],["muy",378.32],["alto",378.74],["y",379.08],["que",379.26],["se",379.36],["movia",379.5],["mucho",379.86],["una",380.76],["chica",380.94],["entrevistaba",381.26],["a",381.9],["los",382.04],["hombres",382.16],["que",382.44],["lo",382.64],["cruzaban",382.74],["y",383.2],["les",383.48],["daba",383.64],["su",383.82],["numero",384.08],["de",384.4],["telefono",384.56],["los",385.54],["que",385.72],["la",385.86],["conocieron",385.98],["en",386.5],["el",386.64],["puente",386.78],["que",387.12],["daba",387.28],["miedo",387.52],["la",387.9],["llamaron",388.32],["muchas",388.66],["mas",389.04],["veces",389.3],["que",389.66],["los",389.9],["que",390.04],["la",390.18],["conocieron",390.28],["en",390.86],["un",391],["puente",391.14],["tranquilo",391.44],["por",392.52],["que",392.68],["porque",393.34],["el",393.62],["cuerpo",393.78],["confunde",394.1],["los",394.68],["nervios",394.88],["del",395.3],["miedo",395.52],["con",395.84],["los",396.16],["nervios",396.38],["del",396.8],["amor",396.98],["asi",397.72],["que",398],["tecnicamente",398.44],["la",399.64],["montana",399.72],["rusa",400.14],["es",400.46],["la",400.68],["mejor",400.86],["cita",401.28],["del",401.72],["mundo",401.94],["bajais",402.94],["mareados",403.3],["ella",404.42],["te",404.66],["coge",405.02],["de",405.3],["la",405.44],["mano",405.52],["y",406.28],["no",406.52],["la",406.7],["suelta",406.84],["hora",408.32],["18",408.52],["os",409.7],["sentais",409.9],["en",410.28],["un",410.46],["banco",410.56],["del",410.84],["parque",411.04],["a",411.44],["ver",411.58],["el",411.7],["atardecer",411.88],["ella",412.96],["apoya",413.24],["la",413.62],["cabeza",413.78],["en",414.06],["tu",414.32],["hombro",414.46],["y",415.34],["sin",415.82],["daros",415.92],["cuenta",416.26],["vuestros",417.16],["corazones",417.44],["empiezan",418],["a",418.56],["latir",418.68],["casi",419],["al",419.32],["mismo",419.62],["ritmo",419.94],["esto",420.98],["tambien",421.32],["lo",421.8],["han",421.98],["medido",422.1],["unos",423],["investigadores",423.28],["de",423.94],["la",424.16],["universidad",424.26],["de",424.86],["california",424.96],["en",425.44],["davis",425.7],["conectaron",426.06],["a",426.92],["parejas",427.04],["a",427.42],["unos",427.64],["sensores",427.8],["y",428.32],["vieron",428.92],["que",429.1],["cuando",429.66],["estaban",429.78],["juntas",430.18],["sus",431],["ritmos",431.16],["del",431.5],["corazon",431.68],["y",432.12],["de",432.28],["la",432.38],["respiracion",432.48],["se",433.14],["parecian",433.4],["mucho",433.92],["ella",435],["te",435.24],["pregunta",435.42],["desde",436.5],["cuando",436.74],["te",437.02],["gusto",437.14],["y",438.06],["tu",438.18],["le",438.38],["dices",438.74],["la",439.02],["verdad",439.2],["desde",440.04],["el",440.26],["primer",440.46],["dia",440.7],["desde",441.44],["que",441.62],["se",441.84],["te",441.98],["cayeron",442.06],["todos",442.46],["los",442.68],["libros",442.98],["en",443.34],["el",443.46],["pasillo",443.56],["y",444.04],["yo",444.38],["no",444.54],["te",444.64],["ayude",444.76],["porque",445.06],["me",445.42],["quede",445.64],["paralizado",445.9],["ella",447.08],["se",447.4],["rie",447.62],["eras",448.44],["tu",448.68],["pense",449.52],["que",449.82],["eras",449.94],["un",450.16],["maleducado",450.28],["hora",451.7],["20",452.04],["y",452.88],["entonces",453.16],["miras",453.54],["el",454.18],["movil",454.3],["son",454.62],["las",455.32],["ocho",455.52],["de",455.9],["la",455.98],["tarde",456.1],["quedan",456.88],["cuatro",457.26],["horas",457.68],["y",458.68],["te",458.92],["entra",459.08],["un",459.34],["miedo",459.54],["enorme",459.88],["porque",460.92],["a",461.22],["media",461.36],["noche",461.52],["todo",461.86],["esto",462.46],["se",462.8],["acaba",463.02],["manana",463.88],["ella",464.36],["volvera",464.8],["a",465.26],["pasar",465.36],["a",465.56],["tu",465.74],["lado",465.82],["por",466.04],["el",466.28],["pasillo",466.4],["sin",466.84],["mirarte",467.04],["como",468.04],["si",468.28],["hoy",468.48],["no",468.7],["hubiera",468.9],["existido",469.2],["piensas",470.4],["en",470.82],["contarselo",470.96],["en",472.04],["decirle",472.18],["oye",473.1],["esto",473.72],["no",473.94],["es",474.16],["real",474.34],["estas",475.04],["asi",475.36],["por",475.62],["una",475.8],["cosa",475.96],["rara",476.2],["que",476.54],["ha",476.74],["pasado",476.84],["esta",477.12],["noche",477.36],["pero",478.18],["si",478.46],["se",478.72],["lo",478.88],["dices",479],["igual",479.34],["se",479.98],["rompe",480.22],["todo",480.54],["antes",480.8],["de",481.12],["tiempo",481.32],["asi",482.16],["que",482.5],["te",482.7],["callas",482.84],["y",483.3],["decides",483.86],["aprovechar",484.24],["cada",484.92],["minuto",485.34],["hora",486.7],["21",487.16],["cenais",488.2],["en",488.64],["una",488.84],["hamburgueseria",489],["ella",490.22],["se",490.44],["come",490.66],["tus",490.88],["patatas",491.1],["tu",492.12],["se",492.22],["lo",492.38],["permites",492.46],["y",493.32],["eso",493.48],["creeme",494.08],["es",494.8],["amor",494.98],["de",495.28],["verdad",495.48],["hablais",496.38],["de",496.78],["todo",497],["de",497.74],["lo",497.92],["que",498],["quereis",498.12],["ser",498.42],["de",498.6],["mayores",498.72],["de",499.44],["los",499.64],["sitios",499.76],["del",500.08],["mundo",500.26],["que",500.52],["quereis",500.74],["ver",501.08],["de",501.74],["si",501.92],["una",502.04],["salchicha",502.22],["es",502.74],["un",502.94],["bocadillo",503.08],["o",503.54],["no",503.88],["discutis",504.52],["durante",505.08],["20",505.32],["minutos",505.96],["ninguno",506.94],["de",507.46],["los",507.62],["dos",507.78],["cede",507.98],["al",508.66],["final",508.82],["el",509.48],["camarero",509.62],["que",510.3],["lo",510.46],["ha",510.64],["oido",510.74],["todo",511],["se",511.76],["acerca",511.88],["y",512.26],["os",512.42],["dice",512.54],["que",512.78],["es",513],["un",513.14],["perrito",513.3],["caliente",513.7],["y",514.58],["que",514.72],["por",514.84],["favor",515],["dejeis",515.28],["de",515.74],["discutir",515.88],["porque",516.42],["esta",516.64],["asustando",517],["a",517.54],["los",517.64],["clientes",517.76],["y",518.92],["te",519.02],["das",519.14],["cuenta",519.32],["de",519.66],["algo",519.92],["llevas",520.84],["casi",521.1],["un",521.36],["dia",521.74],["entero",521.9],["sin",522.32],["pensar",522.52],["en",522.94],["lo",523.12],["que",523.24],["ella",523.38],["opina",523.58],["de",523.92],["ti",524.1],["solo",524.72],["estas",525.04],["siendo",525.28],["tu",525.7],["y",526.52],["esta",526.72],["funcionando",527.04],["hora",528.62],["23",529],["os",530.32],["despedis",530.52],["delante",531],["de",531.4],["su",531.56],["portal",531.72],["ella",532.66],["te",532.86],["abraza",533.06],["y",533.96],["en",534.16],["ese",534.26],["abrazo",534.42],["pasa",534.84],["otra",535.12],["cosa",535.4],["que",535.7],["tiene",535.9],["nombre",536.2],["la",537.2],["oxitocina",537.34],["una",538.6],["sustancia",538.78],["que",539.34],["tu",539.54],["cuerpo",539.68],["suelta",539.94],["cuando",540.38],["abrazas",540.62],["a",541.18],["alguien",541.28],["que",541.52],["te",541.72],["importa",541.82],["es",542.84],["la",543],["que",543.14],["te",543.24],["hace",543.4],["sentir",543.52],["tranquilo",543.96],["en",545.14],["casa",545.24],["a",546.08],["salvo",546.12],["ella",547.16],["te",547.38],["dice",547.58],["manana",548.4],["nos",548.7],["vemos",549],["no",549.62],["y",550.34],["tu",550.5],["no",550.68],["sabes",550.86],["que",551.18],["contestar",551.4],["porque",552.48],["manana",552.7],["ella",553.44],["no",553.68],["se",553.92],["acordara",554.08],["de",554.54],["nada",554.66],["o",555.44],["si",555.7],["no",556.4],["lo",556.62],["sabes",556.74],["asi",557.62],["que",557.88],["le",558.04],["dices",558.16],["pase",559.04],["lo",559.32],["que",559.52],["pase",559.62],["manana",559.86],["hoy",560.72],["ha",560.94],["sido",561.02],["el",561.28],["mejor",561.46],["dia",561.84],["de",562.12],["mi",562.28],["vida",562.4],["ella",563.36],["sube",563.6],["a",563.98],["su",564.08],["casa",564.2],["tu",565.14],["te",565.2],["vas",565.36],["andando",565.52],["muy",566.56],["despacio",566.84],["media",568.36],["noche",568.6],["estas",569.54],["en",569.9],["la",570.06],["cama",570.18],["miras",571.02],["el",571.3],["reloj",571.44],["del",571.8],["movil",571.96],["11",572.9],["59",572.9],["12",574.78],["en",575],["punto",575.22],["llega",576.28],["un",576.46],["mensaje",576.64],["tiempo",577.7],["terminado",578],["y",579.12],["nada",579.32],["mas",579.5],["abres",580.42],["el",580.74],["chat",580.94],["con",581.14],["ella",581.4],["todos",582.1],["los",582.28],["mensajes",582.54],["del",583.02],["dia",583.26],["siguen",583.46],["ahi",583.92],["los",584.58],["corazones",584.72],["los",585.72],["audios",585.86],["la",586.76],["lista",586.84],["de",587.1],["las",587.28],["36",587.4],["preguntas",588.04],["pero",589.18],["ella",589.4],["ya",589.7],["no",590.2],["esta",590.34],["conectada",590.54],["no",591.7],["duermes",591.94],["en",592.38],["toda",592.56],["la",592.84],["noche",593.06],["al",594.08],["dia",594.26],["siguiente",594.4],["vas",594.7],["al",595.14],["instituto",595.32],["con",595.8],["el",596.04],["estomago",596.16],["encogido",596.64],["ella",597.76],["esta",597.98],["en",598.26],["la",598.4],["puerta",598.5],["hablando",599.38],["con",599.74],["sus",599.96],["amigas",600.12],["pasas",601.14],["a",601.46],["su",601.6],["lado",601.68],["y",602.56],["no",602.64],["te",602.8],["mira",602.96],["se",603.86],["te",604.02],["cae",604.16],["el",604.4],["mundo",604.54],["encima",604.82],["te",605.94],["sientas",606.04],["en",606.46],["tu",606.64],["sitio",606.74],["el",607.62],["profesor",607.76],["explica",608.22],["ecuaciones",608.68],["tu",609.88],["no",610],["oyes",610.22],["nada",610.46],["y",611.36],["entonces",611.54],["alguien",611.9],["te",612.68],["deja",612.94],["una",613.16],["nota",613.38],["en",613.66],["la",613.78],["mesa",613.88],["la",614.6],["abres",614.84],["debajo",615.12],["del",615.5],["pupitre",615.72],["pone",616.68],["no",617.6],["se",617.9],["que",618.08],["me",618.22],["paso",618.36],["ayer",618.58],["no",619.4],["me",619.6],["acuerdo",619.7],["de",620],["casi",620.22],["nada",620.4],["pero",621.2],["me",621.38],["acuerdo",621.56],["de",621.82],["que",622.08],["una",622.2],["persona",622.38],["me",622.84],["conto",623.06],["que",623.46],["una",623.7],["vez",623.88],["se",624.08],["cayo",624.3],["delante",624.54],["de",624.96],["todo",625.12],["el",625.34],["comedor",625.5],["y",625.96],["fingio",626.32],["que",626.72],["lo",626.84],["habia",626.96],["hecho",627.18],["a",627.42],["proposito",627.52],["y",628.44],["me",628.62],["rei",628.74],["tanto",629.02],["que",629.3],["me",629.56],["dolio",629.72],["la",630],["tripa",630.12],["eras",631.04],["tu",631.22],["levantas",632.28],["la",632.76],["vista",632.88],["ella",633.8],["te",634],["esta",634.16],["mirando",634.38],["desde",634.8],["la",634.98],["otra",635.24],["punta",635.44],["de",635.84],["la",635.98],["clase",636.08],["con",636.86],["las",637.02],["pupilas",637.22],["muy",637.72],["grandes",638.08],["porque",639.1],["al",639.44],["final",639.92],["el",640.22],["hechizo",640.84],["duro",641.18],["solo",641.5],["24",641.8],["horas",642.42],["pero",643.36],["lo",643.62],["que",643.78],["le",643.88],["contaste",644],["no",644.56],["era",645.06],["un",645.26],["hechizo",645.42],["eras",646.34],["tu",646.64],["y",647.4],["eso",647.58],["si",647.84],["se",648.14],["quedo",648.32],["y",649.44],["ahora",649.64],["te",649.88],["pregunto",650.08],["a",650.54],["ti",650.68],["si",651.38],["tu",651.5],["crush",651.64],["se",651.9],["enamorara",652.18],["de",652.64],["ti",652.82],["solo",652.96],["por",653.28],["un",653.52],["dia",653.68],["que",654.34],["harias",654.46],["con",654.78],["esas",655.06],["24",655.22],["horas",655.76],["se",656.84],["lo",657],["contarias",657.12],["todo",657.64],["cuentamelo",658.46],["en",659.06],["los",659.2],["comentarios",659.32],["y",660.48],["si",660.64],["te",660.72],["ha",660.88],["gustado",660.94],["esta",661.24],["historia",661.58],["suscribete",662.42],["al",662.86],["canal",663.02],["para",663.28],["ver",663.52],["mas",663.76],["videos",664.06],["de",664.42],["y",664.8],["si",664.8]],dh=(n,e=0)=>{for(let[t,i]of Ig)if(i>=e&&t===n)return i;return e};var Ma=(n,e,t=200,i=200)=>{let s=new G(new Te(t,i),C(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Ot=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Ae(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})},Fu=(n,e=1.2,t)=>Re(Ae(512,280,i=>{i.clearRect(0,0,512,280),i.fillStyle="#FBF7EC",i.strokeStyle="#2A2A34",i.lineWidth=8,i.beginPath(),i.roundRect(10,10,492,200,60),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,205),i.lineTo(80,270),i.lineTo(170,205),i.fill(),i.stroke(),i.fillStyle="#2A2A34",i.font=`900 ${t||(n.length>14?40:n.length>10?54:80)}px Fraunces`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,256,112)}),e,e*.55);function Dg(n,e=.5){let t=new le,i=Ae(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Ge(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new G(new Te(400,100),new et({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:yn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function Lg(n,e=0,t=-1){for(let i=0;i<4;i++){let s=T(5,.22,.6,C("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new G(new si(.16,.35,6),C(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function uh(n,e=40,t=3,i=[-12,12,-40,4]){let s=Ge(t),r=Ae(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Re(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function Pu(n,e=200,t=5,i=10,s=30,r=2){let o=Ge(t),a=Ae(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Re(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}we.pasteleria=n=>{n.fog=new Be("#F3D2C0",.02),n.add(oi(16,14,"#F2E6DA","#E2CFC0",8)),n.add(T(16,5,.3,C("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(T(.12,5,.05,C("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(T(5.4,1,.9,C("#8A5A3C"),0,.5,-1.2)),n.add(T(5.5,.08,1,C("#F4EEE6"),0,1.04,-1.2)),n.add(T(3.6,.1,.5,C("#F4EEE6"),0,2.1,-3)),n.add(T(3.6,.1,.5,C("#F4EEE6"),0,2.9,-3));let e=Re(Ot(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new Ne("#FFF0F0","#A07060",1));let t=rt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new nt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};we.espacio=n=>{n.background=new de("#05060E"),Tn(n,2600,200,3),n.add(new Ne("#8FA8FF","#101020",.5));let e=new ar("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};we.aula=n=>{n.fog=new Be("#E8DCC8",.02),n.add(oi(16,16,"#C9B89A","#BBA98A",10)),n.add(T(16,5,.3,C("#E8DCC0"),0,2.5,-3.6)),n.add(T(4.4,1.8,.06,C("#2F5A48"),0,2.3,-3.42)),n.add(T(4.6,.1,.2,C("#8E6242"),0,1.36,-3.35));let e=Re(Ae(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new Ne("#FFFFFF","#9A8A70",1)),n.add(rt("#FFE8C8",2.2,[-6,8,6],10,40))};we.ruaV=(n,e)=>{$r(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(uh(n,60,4),Pu(n,260,6,9,40))};we.apagon=(n,e)=>{n.fog=new Be("#0A0C18",.03),Rt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Tn(n,1800,200,4),Ea(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(Yi(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Yi(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new Ne("#5A64A8","#141420",.5)),n.add(rt("#8A9AE0",.7,[-10,20,10],30,90))};we.azotea=(n,e)=>{n.background=new de("#03040A"),n.fog=new Be("#060814",.008),Tn(n,4200,200,9),Dg(n,e.ang??.45),qn(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=T(16,.3,12,C("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(T(16,.5,.2,C("#4A4A54"),0,.25,-8)),n.add(T(1.4,1.2,1.4,C("#4A4A54"),4.5,.6,-5)),n.add(new Ne("#6A78C8","#141420",.55)),n.add(rt("#9AAAF0",.6,[-6,10,6],12,40))};we.panaderia=n=>{we.pasteleria(n);let e=Re(Ot(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};we.metro=n=>{n.background=new de("#0A0C10"),n.fog=new Be("#0C1014",.07);let e=C("#4A4E54",{roughness:.9,side:jt}),t=new G(new tt(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new le,s=new G(new tt(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=T(6.4,.1,60,C("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(T(.08,.12,60,C("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(T(2.2,.08,.2,C("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new nt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=at("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Ne("#8A90A0","#202024",1.1))};we.bosque=(n,e)=>{n.fog=new Be(e.nieve?"#E8EEF4":"#C8D0B8",.025),Rt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Ma(n,e.nieve?"#F2F4F8":"#6E8A48");let t=Ge(14);for(let i=0;i<26;i++)un(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=Yi(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),uh(n,0)}n.add(new Ne("#E9EEFF","#5A6A4A",.95)),n.add(rt("#FFE8C0",2.4,[-10,14,8],18,60))};we.rio=(n,e)=>{we.parque(n,e);let t=new G(new Te(60,3.4),new Ue({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};we.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Be(t?"#F2A880":"#CFE8F0",.006),Rt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=at(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=Ma(n,"#E8D4A0"),r=new G(new Te(800,400),new Ue({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=T(800,.02,.6,C("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new G(new sr(1.1,0),C("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Ne(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(rt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};we.svalbard=n=>{n.fog=new Be("#C8D8E8",.02),Rt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),Ma(n,"#F4F6FA");let e=Ge(19);for(let l=0;l<8;l++){let c=new G(new si(10+e()*12,10+e()*10,7),C("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new G(new wt(14,32,16,0,Math.PI*2,0,Math.PI/2),C("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=T(3,4.4,6,C("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=T(1.4,2.2,.1,C("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Nt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=at("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=at("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new Ne("#D8E8FF","#8A9AB0",1.1)),n.add(rt("#F0F4FF",1.6,[-8,10,8],16,50))};we.huerto=(n,e)=>{we.parque(n,e),Lg(n,0,-1.4)};we.biblio=n=>{n.fog=new Be("#4A3A2A",.03),n.add(wi(18,14,"#6D4A33")),n.add(T(18,6,.3,C("#5A3E2A"),0,3,-3.4));let e=Ge(8);for(let s=0;s<5;s++){n.add(T(14,.06,.4,C("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(T(o,a,.3,C(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Ne("#FFE8C8","#3A2A1C",.7));let t=new nt("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=at("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};we.hotel=n=>{n.fog=new Be("#E8D8C0",.02),n.add(wi(18,14,"#8A5A3A")),n.add(T(18,6,.3,C("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(T(2.4,2.6,.05,C("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Re(Ae(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=T(3.2,.6,2.4,C("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(T(3.3,1.4,.2,C("#6A3A2A"),0,.7,-2.8)),uh(n,0);let t=Re(Ae(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new Ne("#FFF0E0","#8A6A4A",1)),n.add(rt("#FFE0B0",2,[-4,8,6],10,30))};we.selva=n=>{n.fog=new Be("#7AA870",.05),Rt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),Ma(n,"#3E5A2A");let e=Ge(23);for(let t=0;t<40;t++)un(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);Pu(n,160,9,12,12,3),n.add(new Ne("#D8F0C8","#2A3A1A",.9)),n.add(rt("#FFF0C0",2.2,[-6,14,4],14,50))};we.desierto=n=>{we.sabana(n,{})};var mh=(n,e,t=200,i=200)=>{let s=new G(new Te(t,i),C(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var Ug=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return Ae(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function Iu(n,e=.9,t={}){let i=Ug(n,t),s=new G(new Te(e,e*(t.h||360)/(t.w||512)),new Ue({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function Sa(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new le,[d,u,p,g]=s,E=()=>l?new Ue({map:va(i,3,3),roughness:.95}):C(i,{roughness:.9}),m=d-p/2+e/2,f=e/2-(d+p/2),v=u-g/2,_=t-(u+g/2);h.add(T(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(T(f,t,.3,E(),e/2-f/2,t/2,0)),h.add(T(p,v,.3,E(),d,v/2,0)),h.add(T(p,_,.3,E(),d,t-_/2,0));let y=C("#F4F0E4");for(let[B,H,X,ee]of[[d-p/2,u,.1,g+.1],[d+p/2,u,.1,g+.1],[d,u+g/2,p+.2,.1],[d,u,.05,g]])h.add(T(X,ee,.36,y,B,H,0));h.add(T(p+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,R=C(o,{roughness:.9});h.add(T(p+3,t,.2,R,d,t/2,-D)),h.add(T(.2,t,D,R,d-p/2-1.4,t/2,-D/2)),h.add(T(.2,t,D,R,d+p/2+1.4,t/2,-D/2)),h.add(T(p+3,.2,D,C("#8A6A4A"),d,v-c,-D/2)),h.add(T(p+3,.2,D,R,d,u+g/2+.5,-D/2));let x=new nt("#FFC880",a?9:2.5,7,1.4);x.position.set(d,u+.6,-1.2),h.add(x);let F=Nt(p+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-D+.12),h.add(F);let S=T(p-.04,g,.06,C("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let B=0;B<10;B++){let H=T(p-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(H),A.push([H,B])}let P=B=>{let H=Math.max(.001,g*B);S.scale.y=H/g,S.position.y=u+g/2-H/2,S.visible=B>.01,A.forEach(([X,ee])=>{let Z=u+g/2-(ee+.5)*g/10;X.visible=B>.01&&Z>u+g/2-H,X.position.y=Z})};return P(0),h.userData={persiana:P,luz:B=>{x.intensity=B?9:2.5,F.material.emissiveIntensity=B?.35:.08},win:s,lamp:x},h.children.forEach(B=>{B.castShadow=B.castShadow??!0,B.receiveShadow=!0}),h}function ph(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new le;l.add(T(i,s,r,C(e,{roughness:.9}),0,s/2,-r/2));let c=new G(new tt(.01,i*.62,2.4,4,1),C(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(T(1.1,2.1,.1,C(o),0,1.05,.02)),l.add(T(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ue({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(T(1.3,1.2,.06,h(),d,u,.03)),l.add(T(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(T(2,.2,1.2,C("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function fh(n=4){let e=new le,t=Ge(n*7);for(let i=0;i<n*3;i++){let s=new G(new wt(.42+t()*.12,12,10),C(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function Du(n=8,e="#E8E2D2"){let t=new le;for(let i=0;i<=n*4;i++)t.add(T(.1,1.3,.05,C(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(T(n,.08,.06,C(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function ba(){let n=new le,e=Ge(4);for(let t=0;t<7;t++){let i=new G(new wt(.35,12,10),C("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new G(new wt(.08,10,8),C(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function Ng(){let n=new le;n.add(T(2.2,2,1.8,C("#8A6A4A",{roughness:.9}),0,1,0));let e=T(2.6,.12,2.3,C("#5A3E2A"),0,2.12,0);return n.add(e),n.add(T(.8,1.5,.05,C("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Lu(n=.6){let e=T(n,n*.8,n,C("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(T(n*1.01,.06,.15,C("#E8D8A8"),0,n*.4,0)),e}function Uu(){let n=new le;n.add(T(.04,1.4,.04,C("#E8667F"),0,.7,0));let e=new G(new wt(.28,16,12),new Ue({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new G(new an(.18,.04,8,16,Math.PI*1.2),C("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=at("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Nu(n=.9,e=1.2){let t=Ae(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new le;i.add(T(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new G(new Te(n,e),C("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Ou(n=.9,e=1.2){let t=Ae(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new le;i.add(T(n+.08,e+.08,.04,"#111",0,0,0));let s=new G(new Te(n,e),C("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}var Og=(n,e)=>{we.quarto(n,e);let t=Nu();t.position.set(-3,2.8,-2.8),n.add(t)};we.cuartoYo=(n,e)=>{Og(n,e);let t=Sa({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=Uu();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Ou(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&Tn(n,600,120,2)};we.cuartoElla=(n,e)=>{we.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(T(2.4,.45,3.2,C("#6B4A33"),1.7,.25,-1.4)),n.add(T(2.3,.3,3,C("#F3EEE4"),1.7,.6,-1.4)),n.add(T(2.38,.22,2,C("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=Uu();t.position.set(-3.2,0,-2.2),n.add(t);let i=Ou();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Sa({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Nu(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&Tn(n,600,120,2)};we.entreCasas=(n,e)=>{let t=!!e.night;n.background=new de(t?"#0A0C1E":"#9FC8E8"),n.fog=new Be(t?"#0E1028":"#CFE0EE",.02),Rt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&Tn(n,1600,120,5),mh(n,t?"#24301E":"#6E9A50");let i=Sa({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Sa({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Du(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Ne(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(rt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};we.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Be(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Rt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),mh(n,t?"#24301E":"#6E9A50");let s=T(200,.02,6,C(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=T(200,.1,2,C("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let p=ph({col:d,roof:u,night:t});p.position.set(h,0,-3),n.add(p)}let a=fh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=fh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=fh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])un(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));qn(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new Ne(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(rt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};we.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Be(t?"#E8A880":"#F2E2C8",.015),Rt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),mh(n,"#6E9A50");let i=Du(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=ba();s.position.set(1.6,0,-1.2),n.add(s);let r=ba();r.position.set(2.8,0,-2.6),n.add(r);let o=Ng();o.position.set(-2.4,0,-3.2),n.add(o);let a=ph({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=ph({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])un(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Ne("#E9EEFF","#6A5A4A",1.05)),n.add(rt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};we.esquina=(n,e)=>{we.barrio(n,e)};we.concurso=n=>{n.background=new de("#140C24"),n.fog=new Be("#1A1030",.03);let e=T(20,.2,12,C("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=at(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Re(Ot(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=T(1.2,1.1,.7,C("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(T(1.3,.1,.8,C("#F2C14E"),0,1.12,-.6)),n.add(new Ne("#B8A8FF","#2A1A3A",.9));let s=new ri("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};we.residencia=n=>{n.fog=new Be("#E8DCC8",.02),n.add(wi(20,14,"#8A6A4A")),n.add(T(20,4,.3,C("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(T(1,2.2,.08,C("#6B4A33"),-7+e*2,1.1,-3.2));let t=Re(Ot([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new Ne("#FFFFFF","#9A8A70",1)),n.add(rt("#FFE8C8",2,[-6,8,6],12,40))};var jr=(n,e,t=200,i=200,s={})=>{let r=new G(new Te(t,i),C(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Kr=(n,e=1.6)=>new Ue({color:n,emissive:n,emissiveIntensity:e});function gh(n=2.6){let e=new le,t=Ae(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Re(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function Bg(n="#FFB25A"){let e=new le,t=new G(new tt(.16,.12,.34,12),Kr(n,1.8));e.add(t);let i=at(n,1,.55);return e.add(i),e}var Hg=(n,e,t,i=3)=>{let s=Ge(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new G(new wt(.07+s()*.06,10,8),Kr(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=T(.02,.12,.02,C("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};we.desvan=(n,e)=>{let t=!!e.night;n.background=new de("#1A120C"),n.fog=new Be("#2A1C12",.05),n.add(wi(16,14,"#6A4630"));for(let h of[-1,1]){let d=T(16,.15,7.5,C("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(T(16,6,.2,C("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=T(.22,.22,9,C("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Ge(6);for(let h=0;h<9;h++){let d=Lu(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=T(1.4,.8,.7,C("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(T(1.44,.1,.74,C("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Nt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=Ms(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new G(new wt(.09,12,10),Kr("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(T(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new nt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Ne("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=at("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};we.pasillo=(n,e)=>{n.background=new de("#1A1036"),n.fog=new Be("#2A1850",.045),Tn(n,1600,120,7),jr(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=Ge(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let p of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(p>0?1:0))%i.length],m=T(.12,2.6,1.3,C("#F4ECD6"),p*2.4,1.3,g);n.add(m);let f=T(.08,2.3,1.05,C(E,{roughness:.6}),p*2.35,1.15,g);n.add(f);let v=new G(new wt(.05,8,6),Kr("#F2C14E",.6));v.position.set(p*2.29,1.1,g+.35),n.add(v)}let s=new le,r=new le;r.position.set(0,0,.55),s.add(r);let o=T(.08,2.3,1.05,C("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new G(new wt(.05,8,6),Kr("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Re(Ot(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Nt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let p=at(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);p.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(p)}n.add(new Ne("#D8C8FF","#4A3070",1));let h=new nt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new nt("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};we.playaSueno=(n,e)=>{n.fog=new Be("#E8B8E0",.018),Rt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=at("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new G(new ii(4,40),new et({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=jr(n,"#F8EEF2",200,200),r=new G(new Te(400,200),new Ue({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=T(400,.02,.3,C("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Ge(4);for(let l=0;l<70;l++){let c=at("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new le;c.add(T(.18,2.8,.18,C("#E8A0C0"),0,1.4,0));let h=at(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Ne("#FFE0F6","#B88AC8",1.15)),n.add(rt("#FFD8E8",2,[8,14,-6],14,60))};we.baile=(n,e)=>{n.background=new de("#0E0A28"),n.fog=new Be("#1A1240",.03),Tn(n,2400,160,3),Rt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),jr(n,"#3A2A5A");let t=new G(new ii(3.2,48),new Ue({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),Hg(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=ba();c.position.set(a,0,l),n.add(c)}let i=Ge(9),s=[];for(let a=0;a<22;a++){let l=Bg(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Ne("#B8A8FF","#2A1A3A",.7));let r=new ri("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new nt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};we.estadio=(n,e)=>{n.background=new de("#0A1020"),n.fog=new Be("#18203A",.02),Tn(n,800,160,5);let t=Ae(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new G(new Te(40,40),new Ue({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new le,r=C("#FFFFFF",{roughness:.4});s.add(T(.12,2.4,.12,r,-3.6,1.2,0),T(.12,2.4,.12,r,3.6,1.2,0),T(7.3,.12,.12,r,0,2.4,0));let o=new G(new Te(7.2,2.4),new et({color:"#FFFFFF",transparent:!0,opacity:.18,side:Mt}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(T(60,1,2,C(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Ge(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);rh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=at("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new Ne("#D8E0FF","#2A3A2A",1));let c=rt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};we.concierto=(n,e)=>{n.background=new de("#0C0820"),n.fog=new Be("#140C2C",.025);let t=T(14,.6,6,C("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),jr(n,"#140E26").position.y=-.01;let i=Nt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Ge(4);for(let l=0;l<9;l++){let c=at(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=Ms(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new le;r.add(T(.03,1.4,.03,C("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new G(new wt(.06,12,10),C("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=at(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Ne("#B8A8FF","#2A1A3A",.8));let a=new ri("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};we.gris=(n,e)=>{n.background=new de("#1C1E24"),n.fog=new Be("#262830",.06),jr(n,"#4A4C54"),n.add(T(14,7,.2,C("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(T(.2,7,12,C("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(T(.2,7,12,C("#52545C",{roughness:1}),4.2,3.5,0));let t=Nt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(T(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(T(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Ne("#A8B0C8","#2A2A30",.6));let i=new ri("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new nt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};we.labSueno=(n,e)=>{we.lab(n,e),wu(n,-1.4,-1.6,"#4A86C7");let t=new le;t.add(T(.12,1.4,.12,C("#3A3A44"),0,.7,0)),t.add(T(1,.7,.1,C("#20242E"),0,1.7,0));let i=Nt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var xa=(n,e,t=200,i=200,s={})=>{let r=new G(new Te(t,i),C(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Bu=(n,e=1.6)=>new Ue({color:n,emissive:n,emissiveIntensity:e}),zg=(n="#8C8A84",e=3)=>{let t=Ae(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Ge(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=tn,t},Ss=(n,e,t,i,s,r,o,a=3)=>{let l=zg(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new G(new _n(n,e,t),new Ue({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function kg(n="#B8B4A8"){let e=new le,t=new G(new tt(.09,.09,.22,18),C(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new G(new tt(.092,.092,.12,18,1,!0),new Ue({map:Ae(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function Gg(){let n=new le;n.add(T(1,.8,.6,C("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(T(.3,.3,.02,C("#222"),-.25,.5,.31));let e=new G(new wt(.04,10,8),Bu("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(T(.02,.4,.02,C("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function Vg(){let n=new le;n.add(T(.36,.5,.08,C("#3A3C3A",{metalness:.5}),0,0,0));let e=new le;e.position.set(0,0,.06),n.add(e);let t=T(.05,.4,.05,C("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new G(new wt(.07,14,10),C("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function Wg(){let n=new le;n.add(T(8,2.4,2.5,C("#F2B830",{roughness:.5}),0,1.6,0)),n.add(T(8.02,.25,2.52,C("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(T(.85,.7,.02,C("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new G(new tt(.45,.45,.3,16),C("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=at("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function Hu(n,e,t={}){let i=Ot(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Re(i,e,e*(t.h||260)/(t.w||1100))}we.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new de("#0E0F10"),n.fog=new Be(t?"#050608":"#2A2A28",t?.08:.045);let s=Ss(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Ss(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Ss(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Ss(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Ss(12,.3,10,0,3.6,-.5,"#7A7872"));for(let x of[-2.4,0,2.4])n.add(T(.25,.3,10,C("#6A6862"),x,3.35,-.5));let r=new le;r.add(T(2,.2,.3,C("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),T(.2,2.6,.3,C("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),T(.2,2.6,.3,C("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new le;o.position.set(-.85,0,-3.3),n.add(o);let a=C("#6E7670",{metalness:.7,roughness:.35}),l=T(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let x of[.5,1.9])o.add(T(1.6,.08,.04,C("#5A605C",{metalness:.7}),.85,x,.1));let c=new G(new an(.26,.035,8,28),C("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let x=0;x<3;x++){let F=T(.5,.03,.03,C("#B8241A"),.85,1.25,.14);F.rotation.z=x*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=Vg();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Re(Ot(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=x=>{let F=new le,S=C("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])F.add(T(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])F.add(T(.96,.06,2.1,S,0,A,0)),F.add(T(.86,.14,1.96,C("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(T(.5,.1,.3,C("#D8D2C0"),0,A+.21,-.8));return F.position.set(x,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let p=new le;for(let x of[.9,1.5])p.add(T(1.4,.05,.35,C("#5A4A3A"),0,x,0));for(let x of[-.7,.7])p.add(T(.05,1.6,.35,C("#5A4A3A"),x,.8,0));p.position.set(-2,0,-3.2),n.add(p);let g=[];for(let x=0;x<6;x++){let F=kg();F.position.set(-2.5+x%3*.26,x<3?.93:1.53,-3.2),p.parent.add(F),g.push(F)}n.userData.cans=g;let E=Gg();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new le;m.add(T(.06,.7,.9,C("#3A3C3A",{metalness:.5}),0,0,0));for(let x=0;x<6;x++)m.add(T(.08,.04,.8,C("#5A5C5A",{metalness:.6}),.02,-.28+x*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(T(1.4,.06,.8,C("#5A4632"),0,.75,.3));for(let x of[-.6,.6])for(let F of[-.32,.32])n.add(T(.05,.75,.05,C("#3A2E22"),x,.375,.3+F))}if(e.museo){let x=Hu(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});x.position.set(-2,2.6,-3.38),n.add(x)}let f=Re(Ae(360,480,x=>{x.fillStyle="#E8D8A0",x.fillRect(0,0,360,480),x.fillStyle="#7A2A1A",x.font="900 46px Fraunces",x.textAlign="center",x.fillText("REFUGIO",180,70),x.fillStyle="#3A3A2A",x.fillRect(80,140,200,140),x.fillStyle="#E8D8A0",x.beginPath(),x.moveTo(60,150),x.lineTo(180,90),x.lineTo(300,150),x.fill(),x.fillStyle="#7A2A1A",x.font="700 30px Inter",x.fillText("1962",180,340)}),.5,.66);f.position.set(2.6,2.3,-3.38),n.add(f);let v=[];for(let x of[-1.6,1.6]){let F=new G(new wt(.09,12,10),Bu("#FFD089",t?0:2.2));F.position.set(x,3.1,-.6),n.add(F),v.push(F),n.add(T(.22,.02,.22,C("#333"),x,3.2,-.6,!1))}let _=[];if(!t)for(let x of[-1.6,1.6]){let F=new nt("#FFC27A",11,10,1.4);F.position.set(x,2.9,-.4),F.castShadow=x<0,n.add(F),_.push(F)}let y=new Ne(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=_,n.userData.bulbs=v,n.userData.hemi=y,i){let x=Nt(1.7,2.4,"#FFF4D8",3.2);x.position.set(0,1.2,-3.5),n.add(x);let F=Ms(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new ri("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[x,F,S]}let D=Ge(5),R=[];for(let x=0;x<26;x++){let F=at("#FFE8C0",.04,t?.2:.5);F.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(F),R.push(F)}n.userData.dust=R};we.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Be(t?"#1A1E28":"#C8D0B8",t?.045:.022),Rt(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),xa(n,t?"#2A3A24":"#6E8A48");let i=Ge(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||un(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new G(new wt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),C(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Ss(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(T(1.5,2,.1,C("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=Hu(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=Wg();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new Ne("#6A7A9A","#1A1E1A",.75));let a=new Ne("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=rt("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new et({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new G(new _n(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[p,g,E,m]=u.userData.p;u.position.set(p+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new Ne("#E9EEFF","#5A6A4A",.95)),n.add(rt("#FFD29A",2.6,[-12,16,10],16,70))};we.puente=(n,e)=>{let t=!!e.normal;n.fog=new Be("#C8D8E0",t?.02:.012),Rt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new Ne("#E9EEFF","#5A6A4A",1)),n.add(rt("#FFE2B0",2.6,[-10,18,12],16,80));let i=Ge(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){xa(n,"#6E8A48");let l=new G(new Te(3.4,60),C("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(T(1.4,.14,5,C("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(T(.08,.5,5,C("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(T(.1,.6,.1,C("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)un(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Ss(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),xa(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)un(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new G(new Te(14,200),new Ue({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new G(new sr(1.5+i()*2),C("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=C("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=T(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new G(new ms(new Xi(c),60,.025,6),C("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(T(.015,1,.015,C("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(T(.18,1.6,.18,C("#6A4630"),d,.8,l*.55))}n.userData.y=0};we.marte=(n,e)=>{n.background=new de("#10141A"),n.fog=new Be("#1A2028",.05);let t=new G(new tt(2.4,2.4,30,28,1,!0),new Ue({color:"#C8CCD0",side:jt,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(T(3.6,.1,30,C("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new G(new an(2.38,.05,6,28),C("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=Nt(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(T(.6,.5,1.8,C("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(T(.05,.6,.5,C("#2A3A4A"),r*1.75,1.6,-o*3));let a=Nt(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Re(Ot(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new Ne("#E8F0FF","#4A505A",.9));let s=new nt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};we.biosfera=(n,e)=>{n.fog=new Be("#F2D8B0",.012),Rt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),xa(n,"#D8B07A");let t=Ge(31);for(let l=0;l<8;l++){let c=new G(new si(8+t()*8,6+t()*6,6),C("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new le;c.add(T(.3,1.6+t(),.3,C("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ue({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:Mt}),s=new et({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new si(l,l*1.1,4,4);for(let u of[i,s]){let p=new G(d,u);p.rotation.y=Math.PI/4,p.position.set(c,l*.55,h),n.add(p)}};r(5,-3,-12),r(3.4,5,-10);let o=new wt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new G(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)un(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Re(Ot(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new Ne("#FFF0DC","#B08A6A",1.05)),n.add(rt("#FFD29A",3,[-14,16,10],20,70))};we.noria=(n,e)=>{we.parque(n,{dusk:!0});let t=new le,i=C("#E8E2D2",{metalness:.4,roughness:.4}),s=new G(new an(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=T(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new le;c.add(T(.7,.6,.6,C(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=at("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=T(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var eo=(n,e=1.6)=>new Ue({color:n,emissive:n,emissiveIntensity:e}),Nn=(n="#A8ACB0")=>C(n,{metalness:.75,roughness:.32}),Ta=(n="#9EA2A6")=>{let e=Ae(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=Ge(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Ue({map:e,metalness:.7,roughness:.35})},zu=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Re(Ot([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function ku(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new An(e);i.colorSpace=It;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new G(new Te(.5,.31),new et({map:i,toneMapped:!1}));return r.userData.set=s,r}function Xg(){let n=new le;n.add(T(.36,.9,.03,Nn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new G(new tt(.04,.04,.02,16),eo("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Re(Ot([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new G(new tt(.05,.05,.025,16),eo("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Re(Ot(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new le;for(let o=0;o<5;o++)r.add(T(.16,.012,.01,C("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}we.ascensor=(n,e)=>{n.background=new de("#08090C"),n.fog=new Be("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=Ta("#A4A8AC"),o=T(2.6,.1,2.4,C("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new G(new Te(2.4,2),new Ue({map:(()=>{let R=Ae(256,256,x=>{x.fillStyle="#4A4440",x.fillRect(0,0,256,256),x.strokeStyle="#3A3430",x.lineWidth=3;for(let F=0;F<256;F+=32)x.beginPath(),x.moveTo(F,0),x.lineTo(F,256),x.stroke(),x.beginPath(),x.moveTo(0,F),x.lineTo(256,F),x.stroke()});return R.wrapS=R.wrapT=tn,R.repeat.set(3,3),R})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(T(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(T(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(T(2.6,.08,2.4,C("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(T(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(T(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(T(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Nn("#B4B8BC"),c=T(.56,2.2,.04,l,-.28,1.1,i+.03),h=T(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(T(.01,2.2,.045,C("#555"),0,1.1,i+.04));let d=T(1.1,2.2,.02,C("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=R=>{c.position.x=-.28-.55*R,h.position.x=.28+.55*R};let u=ku(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let p=Xg();p.position.set(.85,1.25,i+.05),n.add(p),n.userData.botonera=p;for(let R of[-1,1])n.add(T(.04,.04,1.8,Nn("#C8CCD0"),R*(t-.06),.95,-.5));let g=new G(new Te(1.5,1.5),new Ue({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(T(.02,1.56,1.56,C("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Re(Ot(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=Nt(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let f=new nt("#FFF4E4",10,7,1.4);f.position.set(0,s-.3,-.3),f.castShadow=!0,n.add(f);let v=new G(new _n(.3,.06,.14),eo("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let _=new nt("#FFA840",0,6,1.4);_.position.set(-.6,s-.4,-1),n.add(_);let y=new Ne("#E8ECF0","#3A3634",.5);n.add(y);let D=new nt("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(R,x=0)=>{let F=Math.max(0,Math.min(1,R))*(1-x);m.material.emissiveIntensity=1.6*F,f.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),_.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};we.rellano=(n,e)=>{let t=!!e.night;n.background=new de("#14120F"),n.fog=new Be("#2A2620",.035),n.add(oi(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(T(6.38,3.4,.3,C(i),-3.81,1.7,-3.2)),n.add(T(6.38,3.4,.3,C(i),3.81,1.7,-3.2)),n.add(T(1.24,1.2,.3,C(i),0,2.8,-3.2)),n.add(T(.3,3.4,10,C(i),-5,1.7,0)),n.add(T(.3,3.4,10,C(i),5,1.7,0)),n.add(T(14,.2,10,C("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(T(6.3,.9,.02,C(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(T(1.5,.12,.1,Nn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(T(.12,2.3,.1,Nn("#9EA2A6"),E*.69,1.13,-3.02));let s=new le;s.add(T(1.3,.05,1.6,C("#4A4440"),0,0,-.8)),s.add(T(1.3,2.2,.05,Ta(),0,1.1,-1.6));for(let E of[-1,1])s.add(T(.05,2.2,1.6,Ta(),E*.65,1.1,-.8));let r=Nt(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new nt("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Nn("#B4B8BC"),l=T(.62,2.2,.05,a,-.31,1.1,-3),c=T(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=ku(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=T(.1,.2,.03,Nn(),.95,1.2,-3.03);n.add(d);let u=new G(new wt(.03,10,8),eo("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let p=zu(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(p.position.set(1.5,2.2,-3.03),n.add(p),e.portal){let E=new le;for(let f=0;f<12;f++)E.add(T(.36,.26,.04,C("#8E6242"),-.6+f%4*.4,-Math.floor(f/4)*.3,0)),E.add(T(.2,.02,.02,C("#2A2A2A"),-.6+f%4*.4,-Math.floor(f/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(T(.04,2.6,2,C("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Re(Ot(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(T(1,2.2,.06,C("#6B4A33"),E,1.1,-3.02));let f=Re(Ot([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);f.position.set(E,1.85,-2.98),n.add(f);let v=new G(new wt(.04,10,8),Nn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new G(new wt(.16,14,10),eo("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let f=new nt("#FFE0B0",t?6:9,9,1.4);f.position.set(E,2.9,-.8),f.castShadow=E<0,n.add(f)}n.add(new Ne("#F4ECE0","#4A4034",t?.35:.6))};var $i=3;we.hueco=(n,e)=>{n.background=new de("#05060C"),n.fog=new Be("#0A0C18",.02),Rt(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),Tn(n,1600,220,3),qn(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*$i,i=C("#3A3A42",{roughness:.95});n.add(T(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(T(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*$i;if(n.add(T(4.1,.14,.1,C("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(T(4.1,.25,3.2,C("#5A5A64"),0,-.12,-.8)),g<=12){let m=Re(Ot([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(T(.08,t,.08,Nn("#7A7E84"),g*1.75,t/2,-1.6));let s=new le,r=Ta("#A4A8AC");s.add(T(2.6,.12,2.2,C("#3A3634"),0,0,0)),s.add(T(2.6,.1,2.2,C("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(T(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(T(2.6,2.8,.08,r,0,1.4,-1.1));let o=Nt(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new nt("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new nt("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(T(.4,.3,.4,C("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=T(.18,.3,.18,C("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new G(new tt(.6,.6,.3,24),Nn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new G(new tt(.018,.018,1,6),Nn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=T(.7,1.6,.3,C("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new G(new tt(.03,.03,1,6),Nn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([_,y])=>{let D=Math.max(.01,(t-m)*(1-E));_.scale.y=D,_.position.set(y,t-D/2,-.6)});let f=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*$i);for(let g=0;g<=12;g+=2){let E=new nt("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*$i+2.2,.4),n.add(E)}n.add(new Ne("#6A78A8","#101018",.5));let p=Ge(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let f=p()<.55,v=Nt(.8,1,f?"#FFD890":"#1A1C2A",f?1.2:.2);v.position.set(E*(3.2+m*1.6),g*$i+1.6,-.6),n.add(v),n.add(T(1.4,$i,.2,C("#2A2A34"),E*(3.2+m*1.6),g*$i+$i/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};we.feria=(n,e)=>{n.background=new de("#2A2018"),n.fog=new Be("#6A5A44",.03),n.add(oi(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(T(.25,12,.25,C("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new G(new an(2,.1,6,24,Math.PI),C("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=Nt(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(T(.6,.4,.02,C(t[l%3]),-8+l*2,9.5,-6));let i=C("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(T(.25,9,.25,i,l*1.4,4.5,-3));n.add(T(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=T(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new G(new tt(.4,.4,.15,18),C("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new le;r.add(T(2.4,.15,1.8,C("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(T(.08,1,.08,i,l*1.1,.5,.8));r.add(T(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=T(.16,.2,.16,C("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new G(new tt(.03,.03,1,6),C("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Re(Ot(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new Ne("#FFE8C8","#5A4A38",.9)),n.add(rt("#FFD8A0",2.2,[-6,14,8],14,50))};var qg=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));we.escalera=(n,e)=>{n.background=new de("#1E1A16"),n.fog=new Be("#2A2620",.04),n.add(oi(14,10,"#C8B898","#B8A888",8)),n.add(T(16,7,.3,C("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=T(.34,.18*(15-o),1.6,C("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(T(.34,.03,1.62,C("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(T(2.6,2.6,1.6,C("#B8A890"),-4.3,1.3,-1.3));let i=new G(new tt(.03,.03,5.7,8),C("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(T(.025,.9,.025,C("#2A2A2E"),-2.9+o*.32,qg(-2.9+o*.32)+.45,-.5));let s=zu(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=Nt(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new nt("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new Ne("#F4ECE0","#4A4034",.6))};var vr=[],Yg=999,qu=n=>n+1<Qr.length?Qr[n+1]:Yg,Eh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Yu=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[Eh(i,s,t),s,Eh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,Eh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},ie=(n,e)=>{let t=Qr[n],i=qu(n),s=Math.min(i,666)-t;vr.push([(r,o)=>ch(r,o,Yu(e(s,t),s)),t,i])},Zg=(n,e,t)=>{let i=Math.min(e,666)-n;vr.push([(s,r)=>ch(s,r,Yu(t(i,n),i)),n,e])},_r=(n,e,t)=>{let i=Qr[n],s=qu(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=dh(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>Zg(r[l],r[l+1],a))},Ki=n=>({tipo:"humano",...n}),ue=(n={})=>Ki({glow:.1,...n});var $g=(n={})=>Ki({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var Jg=(n={})=>Ki({outfit:"jaleco",hair:"old",hairc:"#E8E2D8",glasses:!0,glow:0,...n}),Zu=(n={})=>Ki({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n});var k=(n,e,t=0)=>dh(e,n+t)-n,_e=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Re(Ot(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},We=(n,e,t,i,s={})=>_e(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Qg=(n,e,t,i,s={})=>_e(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s}),$u=(n,e,t,i,s)=>{let r=Fu(e,t,s||Math.min(80,Math.floor(470/(e.length*.62))));return r.position.set(...i),r.renderOrder=5,n.add(r),r},$=(n,e,t,i=1e9,s)=>{let r=pt(t,t+.2,e)*(1-pt(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&Yr(n,s)},gr=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),Kg=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})},jg=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),fn=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),vh=n=>n.pose({armL:[12,8],armR:[95,0]});var _h=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e},Er=n=>{let e=[-1,1].map(t=>{let i=at("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)};var Jt=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=at(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},eE=n=>{let e=[0,1,2].map(()=>{let t=Re(pr("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),Yr(o,s)})};var tE={bloom:.45,bloomT:.88,vig:.5},Ju=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),Ru(t),e.p2&&e.p2(t,i)}});var ji=(n,e,t=-.1)=>{let i=_h(e);n.position.set(i.x-.1,i.y+t,i.z+.1)},li=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Ki({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},Ji=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Re(Cu(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var Fa=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)};var Ah=(n={})=>Ki({outfit:"terno2",glow:0,...n}),Gu=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],Qi=(n,e={})=>{let[t,i,s]=Gu[n%Gu.length];return Ki({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},Qu=(n=0,e={})=>Qi(n,{outfit:"jaleco",glasses:!0,...e}),wn={bg:"#C9361F",fg:"#fff"},In={bg:"#2F5A9A",fg:"#fff"};var Pa={bloom:.38,bloomT:.9,vig:.6,exposure:1},Qt=(n,e,t,i,s=2.2)=>{let r={y:_e,w:We,p:Qg,r:(l,c,h,d)=>_e(l,c,h,d,wn),b:(l,c,h,d)=>_e(l,c,h,d,In)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:k(e,l));return(l,c)=>o.forEach((h,d)=>$(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var to=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(T(s,.08,r,C(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(T(.07,i,.07,C("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))};var nE=(n,e={})=>Ae(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),es=(n,e)=>{let t=new le;t.add(T(.62,1.18,.06,C("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new G(new Te(.56,1.04),new et({map:nE(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t},wa=(n,e,t="")=>Ae(400,520,i=>{i.fillStyle=e,i.fillRect(0,0,400,520),i.fillStyle="#fff",i.font="900 54px Fraunces",i.textAlign="center",i.fillText(n,200,80),i.fillStyle="#43C4B4",i.beginPath(),i.roundRect(100,340,200,200,50),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(200,250,92,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(170,245,16,22,0,0,7),i.ellipse(230,245,16,22,0,0,7),i.fill(),t&&(i.fillStyle="#F2C14E",i.font="900 36px Inter",i.fillText(t,200,140))});var Xe=(n={})=>$g({glow:0,...n}),iE=(n={})=>Ki({outfit:"avental",glasses:!0,glow:0,...n}),Wt={bg:"#D66A86",fg:"#fff"},$t={exposure:.95,bloom:.42},Yn=(n,e=.35,t="#E8667F")=>{let i=Re(pr("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},Zn=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)},Ar=(n,e)=>{let t=new nt("#9FC0FF",1.6,2.2,1.6);return n.add(t),()=>{let i=_h(e);t.position.set(i.x,i.y+.1,i.z+.3)}},Vu=(n,e,t)=>{let i=e.split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s},sE=(n,e,t,i)=>{n.fillStyle="#F2C14E",n.beginPath(),n.arc(e,t,i,0,7),n.fill(),n.fillStyle="#2A2A34",n.beginPath(),n.arc(e-i*.35,t-i*.2,i*.12,0,7),n.arc(e+i*.35,t-i*.2,i*.12,0,7),n.fill(),n.strokeStyle="#2A2A34",n.lineWidth=i*.12,n.beginPath(),n.arc(e,t+i*.05,i*.5,.3,Math.PI-.3),n.stroke()},rE=(n,e,t,i,s="#E8445A")=>{n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.6,t-i*1.3,e,t-i*.45),n.bezierCurveTo(e+i*.6,t-i*1.3,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()},oE=(n,e,t)=>{n.fillStyle="#10131F",n.fillRect(0,0,540,1e3),n.fillStyle="#1E2336",n.fillRect(0,0,540,150),n.fillStyle="#E8667F",n.beginPath(),n.arc(70,92,34,0,7),n.fill(),n.fillStyle="#4A2A1A",n.beginPath(),n.arc(70,92,26,Math.PI,0),n.fill(),n.fillStyle="#fff",n.textAlign="left",n.font="800 34px Inter",n.fillText(t.name||"MI CRUSH \u2665",120,88),n.font="600 24px Inter",n.fillStyle=t.off?"#8A90A0":"#5FD08A",n.fillText(t.off?"desconectada":t.typing?"escribiendo\u2026":"en l\xEDnea",120,122),n.fillStyle="#C8CCD8",n.font="700 26px Inter",n.textAlign="right",n.fillText(t.hora||"00:00",515,40);let i=190;n.font="700 36px Inter";for(let[s,r]of e){if(r==="@smile"||r==="@heart"){let h=s==="r"?440:100;r==="@smile"?sE(n,h,i+50,46):rE(n,h,i+50,44),i+=120;continue}if(s==="s"){n.font="900 40px Inter";let h=Vu(n,r,420),d=h.length*50+34;n.fillStyle="#C9361F",n.beginPath(),n.roundRect(40,i,460,d,20),n.fill(),n.fillStyle="#fff",n.textAlign="center",h.forEach((u,p)=>n.fillText(u,270,i+52+p*50)),i+=d+24,n.font="700 36px Inter";continue}let o=Vu(n,r,330),a=Math.max(...o.map(h=>n.measureText(h).width))+44,l=o.length*46+30,c=s==="r"?500-a:40;n.fillStyle=s==="r"?"#2E7D6A":"#EDEFF5",n.beginPath(),n.roundRect(c,i,a,l,26),n.fill(),n.fillStyle=s==="r"?"#fff":"#1A1C24",n.textAlign="left",o.forEach((h,d)=>n.fillText(h,c+22,i+46+d*46)),t.strike&&t.strike.includes(r)&&(n.strokeStyle="#FF5A5A",n.lineWidth=6,n.beginPath(),n.moveTo(c+10,i+l/2),n.lineTo(c+a-10,i+l/2),n.stroke()),i+=l+20}},ci=(n,e,t,i,s={})=>{let r=new le;r.add(T(t*1.08,t*1.95,.06,C("#1A1A24",{metalness:.4}),0,0,0,!1));let o=document.createElement("canvas");o.width=540,o.height=1e3;let a=o.getContext("2d"),l=new An(o);l.colorSpace=It;let c=new G(new Te(t,t*1.852),new et({map:l,toneMapped:!1}));c.position.z=.032,r.add(c),r.position.set(...e),n.add(r);let h=new nt("#9FC0FF",1.5,3,1.6);h.position.set(e[0],e[1],e[2]+.8),n.add(h);let d="";return r.userData.upd=(u,p={})=>{let g=i.filter(f=>u>=f[2]).map(f=>[f[0],f[1]]),E={...s,...p},m=JSON.stringify([g,E]);m!==d&&(d=m,oE(a,g.slice(-(E.max||7)),E),l.needsUpdate=!0)},r.userData.upd(0),r},aE=(n,e)=>Ae(1024,512,t=>{t.clearRect(0,0,1024,512),t.fillStyle="#F2C14E",t.font="900 230px Fraunces",t.textAlign="center",t.fillText(n,512,270),t.fillStyle="#FBF7EC",t.font="900 70px Inter",t.fillText(e,512,400)}),Mh=n=>Ae(512,512,e=>{e.clearRect(0,0,512,512);for(let t=0;t<24;t++){let i=-Math.PI/2+t/24*Math.PI*2;e.strokeStyle=t<n?"#E8667F":"#3A3E4C",e.lineWidth=34,e.beginPath(),e.arc(256,256,220,i+.03,i+Math.PI*2/24-.03),e.stroke()}}),hi=(n,e,t,i)=>ie(n,s=>({amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=Re(Mh(e),2.6,2.6);o.position.set(0,1.5,-1),r.add(o);let a=Re(aE(t,i),2.4,1.2);a.position.set(0,1.5,-.95),a.renderOrder=6,r.add(a);let l=Jt(r,8,"#FFB0C0");return{update:c=>{o.rotation.z=-c*.1;let h=pt(0,.25,c);a.scale.setScalar(.6+.4*h),l(c,[0,1.5,-.9,1.4])}}},c:[[0,1.5,2.4],[0,1.5,-1],[0,1.5,2],[0,1.5,-1]],range:3,blur:4,look:{bloom:.5}})),Sh=(n,e,t=1.6)=>{let i=document.createElement("canvas");i.width=512,i.height=300;let s=i.getContext("2d"),r=new An(i);r.colorSpace=It;let o=new G(new Te(t,t*300/512),new et({map:r,transparent:!0,toneMapped:!1}));o.position.set(...e),o.renderOrder=5,n.add(o);let a=-1;return o.userData.set=l=>{let c=Math.round(l*30)/30;c!==a&&(a=c,s.clearRect(0,0,512,300),s.fillStyle="#FBF7EC",s.beginPath(),s.moveTo(20,150),s.quadraticCurveTo(256,-60,492,150),s.quadraticCurveTo(256,360,20,150),s.fill(),s.fillStyle="#5A8A5A",s.beginPath(),s.arc(256,150,100,0,7),s.fill(),s.fillStyle="#111",s.beginPath(),s.arc(256,150,30+c*62,0,7),s.fill(),s.fillStyle="#fff",s.beginPath(),s.arc(226,120,14,0,7),s.fill(),s.strokeStyle="#2A2A34",s.lineWidth=10,s.beginPath(),s.moveTo(20,150),s.quadraticCurveTo(256,-60,492,150),s.quadraticCurveTo(256,360,20,150),s.stroke(),r.needsUpdate=!0)},o.userData.set(0),o},Wu=n=>Ae(512,400,e=>{e.clearRect(0,0,512,400),e.fillStyle="#F2A6B4";for(let[t,i,s]of[[170,170,110],[300,150,120],[380,210,90],[230,250,100],[130,250,70]])e.beginPath(),e.arc(t,i,s,0,7),e.fill();e.fillStyle="#E08A9A",e.fillRect(250,300,50,80),e.strokeStyle="#D0788A",e.lineWidth=9;for(let t=0;t<9;t++)e.beginPath(),e.arc(150+t%3*100,130+Math.floor(t/3)*70,34,t,t+2.4),e.stroke();if(n){let t=e.createRadialGradient(270,230,5,270,230,120);t.addColorStop(0,"rgba(255,240,120,1)"),t.addColorStop(1,"rgba(255,200,60,0)"),e.fillStyle=t,e.beginPath(),e.arc(270,230,120,0,7),e.fill()}}),Ku=(n,e,t=1.6)=>{let i=Re(Wu(!1),t,t*.78),s=Re(Wu(!0),t,t*.78);for(let r of[i,s])r.position.set(...e),r.renderOrder=4,n.add(r);return s.position.z+=.01,s.visible=!1,r=>{s.visible=r}},lE=(n,e={})=>Ae(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),mr=(n,e,t,i,s)=>{let r=Re(lE(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r},cE=(n,e=64)=>Ae(700,520,t=>{t.fillStyle="#FFF6C8",t.fillRect(0,0,700,520),t.strokeStyle="#9EC0E8",t.lineWidth=3;for(let i=90;i<520;i+=70)t.beginPath(),t.moveTo(0,i),t.lineTo(700,i),t.stroke();t.fillStyle="#2A3A8A",t.font=`700 ${e}px Caveat`,t.textAlign="center",n.forEach((i,s)=>t.fillText(i,350,260-(n.length-1)*e*.55+s*e*1.1))}),ai=(n,e,t,i,s)=>{let r=new G(new Te(t,t*520/700),new Ue({map:cE(e,s),roughness:.9}));return r.position.set(...i),r.renderOrder=4,n.add(r),r},hE=n=>Ae(256,200,e=>{e.clearRect(0,0,256,200),e.fillStyle=n;for(let t of[-1,1])e.beginPath(),e.ellipse(128+t*55,70,55,50,t*.4,0,7),e.fill(),e.beginPath(),e.ellipse(128+t*40,140,35,38,-t*.3,0,7),e.fill();e.fillStyle="#2A2A34",e.fillRect(122,40,12,130)}),dE=(n,e=10)=>{let t=[],i=["#F29AB0","#F2C14E","#8AC8F2","#B89AF2"];for(let s=0;s<e;s++){let r=Re(hE(i[s%4]),.26,.2);r.renderOrder=5,n.add(r),t.push(r)}return(s,r,o,a=1)=>t.forEach((l,c)=>{let h=s*(.8+c*.07)+c*1.9;l.visible=a>0,l.position.set(r[0]+Math.cos(h)*(.4+c%3*.2),r[1]+Math.sin(h*1.3)*.35+c%4*.1,r[2]+Math.sin(h)*.3),Yr(l,o),l.scale.set(Math.max(.15,Math.abs(Math.sin(s*14+c)))*a,a,1)})},yh=()=>{let n=new le,e=[["#D8A050",.05,.16],["#5A3420",.05,.17],["#F2C14E",.02,.17],["#6EAA50",.02,.18],["#D8A050",.07,.16]],t=0;for(let[i,s,r]of e){let o=new G(new tt(r,r,s,20),C(i));o.position.y=t+s/2,n.add(o),t+=s}return n},uE=()=>{let n=new le;n.add(T(.16,.18,.1,C("#C9361F"),0,.09,0));for(let e=0;e<9;e++){let t=T(.025,.16,.025,C("#F2C14E"),-.06+e%5*.03,.2+e%3*.02,-.02+e%2*.03);t.rotation.z=(e-4)*.06,n.add(t)}return n},fE=()=>Ae(512,256,n=>{n.clearRect(0,0,512,256),n.fillStyle="#E0A860",n.beginPath(),n.roundRect(40,110,430,100,50),n.fill(),n.fillStyle="#B8502A",n.beginPath(),n.roundRect(20,80,470,60,30),n.fill(),n.strokeStyle="#F2C14E",n.lineWidth=10,n.beginPath();for(let e=0;e<9;e++)n.lineTo(60+e*48,105+e%2*12);n.stroke()}),ju=n=>{let e=[[-9,1,-6],[-5,6,-7],[-2,1.5,-5],[1,4,-4],[4,.8,-3],[7,3.5,-5],[9,1,-8],[3,2,-10],[-4,3,-10],[-9,1,-6]].map(s=>new I(...s)),t=new Xi(e,!0);n.add(new G(new ms(t,300,.12,8,!0),C("#C9361F",{metalness:.4,roughness:.4})));for(let s=0;s<40;s++){let r=t.getPointAt(s/40);r.y>.6&&n.add(T(.1,r.y,.1,C("#E8E2D2"),r.x,r.y/2,r.z))}let i=new le;return i.add(T(1.2,.45,.8,C("#2F5A9A",{metalness:.3}),0,-.05,0)),n.add(i),{cur:t,cart:i}},ef=(n,e=-2.5,t="#BFD8DA")=>{let i=Ae(512,512,r=>{r.fillStyle=t,r.fillRect(0,0,512,512),r.strokeStyle="#E8F2F2",r.lineWidth=6;for(let o=0;o<=8;o++)r.beginPath(),r.moveTo(o*64,0),r.lineTo(o*64,512),r.stroke(),r.beginPath(),r.moveTo(0,o*64),r.lineTo(512,o*64),r.stroke()});i.wrapS=i.wrapT=tn,i.repeat.set(4,2);let s=new G(new Te(12,5),new Ue({map:i,roughness:.3}));return s.position.set(0,2.5,e),n.add(s),s},bh=(n,e,t)=>{n.add(T(1.2,1.7,.06,C("#8E6242"),e,1.6,t));let i=new G(new Te(1.05,1.55),new et({color:"#A8C4D8"}));i.position.set(e,1.6,t+.035),n.add(i)},tf=(n,e,t,i=1.3)=>_e(n,[t],i,e,{bg:"#1E2230",fg:"#FF7A8A"});ie(0,(n,e)=>{let t=k(e,"foto"),i=k(e,"otra");return{amb:"cuartoYo",ambo:{night:!0},fov:32,atores:[ue({x:-.2,z:-.4,eyes:[[0,"look"],[t,"smug"],[i,"happy"]],pose:s=>s.pose({armL:[60,70],armR:[60,70],head:-10})})],extra:(s,r,o)=>{let a=es(["",""],{hora:"23:59",bg:"#2A1830"});a.scale.setScalar(.35),s.add(a);let l=Ar(s,o[0]),c=_e(s,["23:59"],1,[.9,2.1,-.6],{bg:"#1E2230",fg:"#FF7A8A",size:96,w:420}),h=We(s,["OTRA VEZ"],1,[-1,2.1,-.6]);return{update:(d,u,p)=>{l(),ji(a,o[0],-.02),a.lookAt(p.position),$(c,d,.3,99,p),$(h,d,i-.1,99,p)}}},c:[[.6,1.7,3.2],[-.1,1.3,-.4],[.3,1.6,2.4],[-.1,1.35,-.4]],range:2.5,look:$t}});ie(1,(n,e)=>{let t=k(e,"existes");return{amb:"gris",fov:30,k:1,atores:[Xe({x:.9,z:-.6,eyes:[[0,"look"],[1.2,"lookl"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:4})})],extra:i=>{let s=_e(i,["TU CRUSH"],1.3,[.9,2.1,-.6],Wt),r=Yn(i,.35);r.position.set(.9,2.45,-.6);let o=We(i,["NI SABE QUE EXISTES"],1.6,[-.5,1.6,-.4]);return{update:(a,l,c)=>{$(s,a,.1,99,c),r.scale.setScalar(Zn(a,90)*.9),$(o,a,t-.3,99,c)}}},c:[[0,1.6,3.4],[.3,1.4,-.5],[0,1.6,2.8],[.4,1.45,-.5]],range:2.5,blur:8}});ie(2,(n,e)=>{let t=k(e,"mensaje"),i=k(e,"ella");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"look"],[t,"wide"]],pose:(s,r)=>s.pose({armL:[60,70],armR:[60,70],bob:r>t&&r<t+.6?Math.sin(r*40)*.01:0})})],extra:(s,r,o)=>{let a=_e(s,["00:00"],1,[-.9,2.05,-.6],{bg:"#C9361F",fg:"#fff",size:96,w:420}),l=_e(s,["1 MENSAJE NUEVO"],1.4,[.8,2,-.5],Wt),c=We(s,["DE ELLA"],1,[.8,1.65,-.4]),h=Ar(s,o[0]),d=es(["MI CRUSH \u2665","1 mensaje"],{hora:"00:00",bg:"#2A1830"});return d.scale.setScalar(.35),s.add(d),{update:(u,p,g)=>{h(),ji(d,o[0],-.02),d.lookAt(g.position),$(a,u,.1,99,g),$(l,u,t-.2,99,g),$(c,u,i-.1,99,g)}}},c:[[0,1.6,2.8],[0,1.4,-.4],[0,1.55,2],[0,1.45,-.4]],range:2.5,look:$t}});ie(3,(n,e)=>{let t=k(e,"no");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=ci(i,[0,1.5,-.5],1.15,[["l","\xBFEst\xE1s despierto?",.1],["l","No puedo dejar de pensar en ti.",t]],{hora:"00:00"}),r=Yn(i,.3);return r.position.set(.85,2.35,-.3),{update:(o,a,l)=>{s.userData.upd(o),r.visible=o>t+.3,r.scale.setScalar(Zn(o,110)*.9)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.9],[0,1.5,-.5]],range:2,blur:4}});ie(4,(n,e)=>{let t=k(e,"lees");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"wide"],[t,"small"]],move:i=>[0,Math.max(0,Math.sin(Math.min(i,.6)*5.2))*.25,-.4],pose:(i,s)=>i.pose({armL:[60,70],armR:[60,70],head:s>t?Math.sin(s*8)*6:0})})],extra:(i,s,r)=>{let o=_e(i,["\xD710"],.8,[.9,2.2,-.4],{...Wt,size:110,w:400}),a=Ar(i,r[0]),l=es(["MI CRUSH \u2665","\xBFEst\xE1s despierto?"],{hora:"00:00",bg:"#2A1830"});return l.scale.setScalar(.35),i.add(l),{update:(c,h,d)=>{a(),ji(l,r[0],-.02),l.lookAt(d.position),$(o,c,t,99,d),Fa(d,c<.5?.03:0,c)}}},c:[[.4,1.6,2.8],[0,1.4,-.4],[.2,1.55,2.2],[0,1.45,-.4]],range:2.5,look:$t}});ie(5,(n,e)=>{let t=k(e,"nadie"),i=k(e,"tienes");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=ci(s,[0,1.5,-.5],1.15,[["l","\xBFEst\xE1s despierto?",0],["l","No puedo dejar de pensar en ti.",0],["s","TIENES 24 HORAS",i]],{hora:"00:00"}),o=We(s,["NO LO HA ENVIADO NADIE"],1.6,[0,2.5,.2]);return{update:(a,l,c)=>{r.userData.upd(a),$(o,a,t-.5,99,c),Fa(c,a>i&&a<i+.5?.02:0,a)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});ie(6,(n,e)=>{let t=k(e,"pero");return{amb:"cuartoElla",ambo:{night:!0},fov:30,atores:[Xe({x:-.2,z:-.2,eyes:[[0,"heart"]],pose:(i,s)=>i.pose({armL:[60,70],armR:[60,70],lean:Math.sin(s*2)*4})})],extra:(i,s,r)=>{let o=Jt(i,10,"#FFB0C0"),a=Yn(i,.4);a.position.set(-.2,2.55,-.2);let l=_e(i,["SOLO HASTA MEDIANOCHE"],1.9,[.2,2.25,.1],wn),c=Er(r[0]);return{update:(h,d,u)=>{c(1),o(h,[-.2,1.9,-.1,.7]),a.scale.setScalar(Zn(h,100)),$(l,h,t,99,u)}}},c:[[0,1.6,3],[-.1,1.5,-.2],[0,1.6,2.4],[-.1,1.55,-.2]],range:2.5,look:$t}});ie(7,(n,e)=>{let t=k(e,"suscribete");return{amb:"cuartoYo",ambo:{night:!0},fov:32,atores:[ue({x:-1,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s>t?gr(i,s):i.pose()})],extra:i=>{let s=gh(2.4);s.position.set(.7,1.8,-1),i.add(s);let r=Jt(i,14,"#FFE27A"),o=tf(i,[-1,2.35,-.3],"CUENTA ATR\xC1S: 24:00:00",2);return{update:(a,l,c)=>{$(o,a,.2,99,c);let h=pt(t-.3,t,a);s.scale.setScalar(Math.max(.01,h)),s.rotation.z=a>t+.6&&a<t+1.6?Math.sin(a*40)*.05:0,r(a,[.7,1.8,-.9,1.1],pt(t,t+.3,a))}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3,look:$t}});ie(8,(n,e)=>{let t=k(e,"vida");return{amb:"gris",fov:30,k:1,atores:[ue({x:-.9,z:-.5,eyes:[[0,"look"],[t-.5,"smug"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[150,30]})}),Xe({x:.9,z:-.5,eyes:[[0,"heart"]],pose:(i,s)=>i.pose({armL:[150,30],armR:[12,8]})})],extra:i=>{let s=Re(Mh(24),2.2,2.2);s.position.set(0,2.1,-2),i.add(s);let r=_e(i,["24 HORAS"],1.4,[0,2.1,-1.9],{...Wt,size:90,w:520}),o=We(i,["LAS M\xC1S IMPORTANTES DE TU VIDA"],2.4,[0,.85,-.3]);return{update:(a,l,c)=>{s.rotation.z=-a*.2,$(r,a,.2,99,c),$(o,a,t-.8,99,c)}}},c:[[0,1.7,4],[0,1.6,-.8],[0,1.6,3.4],[0,1.6,-.8]],range:3,look:{bloom:.45}}});hi(9,1,"HORA 1","QUEDAN 23");_r(10,["hola","final"],[(n,e)=>({amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"flat"],[k(e,"hola"),"look"]],pose:(t,i)=>t.pose({armL:[60,70],armR:[60,70],head:-8})})],extra:(t,i,s)=>{let r=Ar(t,s[0]),o=es(["",""],{hora:"00:01",bg:"#2A1830"});o.scale.setScalar(.35),t.add(o);let a=We(t,["\xBFQU\xC9 LE CONTESTO?"],1.6,[0,2.3,-.4]);return{update:(l,c,h)=>{r(),ji(o,s[0],-.02),o.lookAt(h.position),$(a,l,.2,99,h)}}},c:[[.4,1.6,2.8],[0,1.4,-.4],[.2,1.55,2.2],[0,1.45,-.4]],range:2.5,look:$t}),(n,e)=>{let t=k(e,"borras"),i=k(e,"tambien"),s=k(e,"borras",i+.1),r=k(e,"jaja"),o=k(e,"borras",r+.1);return{amb:"gris",fov:28,k:1,atores:[],extra:a=>{let l=ci(a,[0,1.5,-.5],1.15,[["l","\xBFEst\xE1s despierto?",0],["l","No puedo dejar de pensar en ti.",0]],{hora:"00:01"}),c=[["hola",0,t],["yo tambi\xE9n",i-.3,s],["jaja",r-.3,o]],h=c.map(([u])=>We(a,[u.toUpperCase()],1,[0,.7,-.2])),d=c.map(()=>_e(a,["BORRAR"],.7,[.75,.95,-.15],{...wn,size:60,w:300}));return{update:(u,p,g)=>{l.userData.upd(u,{typing:!0}),c.forEach(([,E,m],f)=>{$(h[f],u,E,m+.5,g),$(d[f],u,m,m+.5,g)})}}},c:[[0,1.4,4.3],[0,1.3,-.5],[0,1.4,3.9],[0,1.3,-.5]],range:2,blur:4}},(n,e)=>{let t=k(e,"emoji"),i=k(e,"desaparecer");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"look"],[i-.4,"shut"]],pose:(s,r)=>r>i-.4?s.pose({armL:[150,120],armR:[150,120],head:10}):s.pose({armL:[60,70],armR:[60,70]})})],extra:s=>{let r=ci(s,[1.1,1.5,-.7],.6,[["l","\xBFEst\xE1s despierto?",0],["l","No puedo dejar de pensar en ti.",0],["r","@smile",t]],{hora:"00:02"}),o=_e(s,["QUIERES DESAPARECER"],1.7,[-.4,2.35,-.4],wn);return{update:(a,l,c)=>{r.userData.upd(a),$(o,a,i-.3,99,c)}}},c:[[.3,1.6,3],[.3,1.4,-.5],[.2,1.55,2.5],[.3,1.45,-.5]],range:2.5,look:$t}}]);_r(11,["audio"],[(n,e)=>{let t=k(e,"corazon"),i=k(e,"otro");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=ci(s,[0,1.5,-.5],1.15,[["l","\xBFEst\xE1s despierto?",0],["l","No puedo dejar de pensar en ti.",0],["r","@smile",0],["l","@heart",t],["l","@heart",i]],{hora:"00:02"}),o=Jt(s,10,"#FFB0C0");return{update:(a,l,c)=>{r.userData.upd(a),o(a,[0,1.5,-.2,.9],a>t?1:0)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}},(n,e)=>({amb:"cuartoElla",ambo:{night:!0},fov:30,atores:[Xe({x:-.2,z:-.2,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[60,70],armR:[80+Math.sin(i*12)*6,60],bob:Math.abs(Math.sin(i*12))*.02,head:Math.sin(i*12)*5})})],extra:t=>{let i=_e(t,["AUDIO \xB7 0:40"],1.3,[-.2,2.35,-.2],Wt),s=We(t,["\xA1JAJAJAJA!"],1.1,[.9,1.9,-.1]);return{update:(r,o,a)=>{$(i,r,.1,99,a),$(s,r,.8,99,a)}}},c:[[0,1.6,3],[-.1,1.45,-.2],[0,1.6,2.4],[-.1,1.5,-.2]],range:2.5,look:$t})]);ie(12,(n,e)=>{let t=k(e,"dopamina");return{amb:"lab",fov:30,k:1,atores:[],extra:i=>{let s=Ku(i,[0,1.4,-.6],1.7),r=_e(i,["DOPAMINA"],1.3,[0,2.3,-.5],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:560}),o=We(i,["CUANDO TE GUSTA ALGUIEN"],2,[0,.95,-.4]),a=Jt(i,12,"#FFE27A");return{update:(l,c,h)=>{s(l>t),$(o,l,.2,t,h),$(r,l,t,99,h),a(l,[.1,1.4,-.4,.7],l>t?1:0)}}},c:[[0,1.5,3],[0,1.5,-.6],[0,1.5,2.4],[0,1.5,-.6]],range:2.5,blur:6,look:{bloom:.5}}});ie(13,(n,e)=>{let t=k(e,"videojuego"),i=k(e,"comes");return{amb:"sala",ambo:{wall:"#5A4A8A"},fov:32,atores:[ue({x:-.8,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>s.pose({armL:[60,70],armR:[60+Math.sin(r*14)*6,70]})}),ue({x:.9,z:-.3,eyes:[[0,"look"],[i,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[100+Math.sin(r*6)*20,60]})})],extra:s=>{let r=_e(s,["\xA1HAS GANADO!"],1.3,[-.8,2.3,-.3]),o=We(s,["\xA1QU\xC9 RICO!"],1.1,[.9,2.3,-.3]);hh(s,["WIN!"],1.1,.62,{bg:"#2A1A58",fg:"#F2C14E",size:120}).position.set(-.8,1.2,-2.2);let l=yh();l.position.set(.9,1,.1),l.scale.setScalar(.9),s.add(l);let c=_e(s,["+ DOPAMINA"],1.2,[0,.85,0],{bg:"#F2C14E",fg:"#2A2A34"});return{update:(h,d,u)=>{$(r,h,t,99,u),$(o,h,i,99,u),$(c,h,i+.6,99,u),l.visible=h>i-.3}}},c:[[0,1.6,3.8],[0,1.4,-.4],[0,1.6,3.2],[0,1.4,-.4]],range:3}});ie(14,(n,e)=>{let t=k(e,"escaner");return{amb:"lab",fov:32,atores:[Qu(2,{x:1.2,z:-.2,eyes:[[0,"look"]],pose:(i,s)=>fn(i,s)}),Ju(ue,{x:-.6,z:-.6,y:.75})],extra:i=>{let s=new G(new an(.75,.3,16,32),C("#E8ECF2",{roughness:.3}));s.position.set(-1.5,.9,-.6),s.rotation.y=Math.PI/2,i.add(s),i.add(T(2.6,.2,.7,C("#C8CCD4"),-.8,.6,-.6));let r=_e(i,["HELEN FISHER"],1.4,[1.2,2.35,-.2],In),o=We(i,["ESC\xC1NER CEREBRAL"],1.5,[-1.2,2,-.6]);return{update:(a,l,c)=>{$(r,a,.2,99,c),$(o,a,t-.2,99,c)}}},c:[[.2,1.8,3.8],[0,1.2,-.5],[0,1.7,3.2],[0,1.2,-.5]],range:3}});ie(15,(n,e)=>{let t=k(e,"foto"),i=k(e,"encendio");return{amb:"lab",fov:30,k:1,atores:[],extra:s=>{let r=Re(wa("\u2665","#D66A86"),.8,1.04);r.position.set(-1.1,1.5,-.6),s.add(r);let o=Ku(s,[.7,1.5,-.6],1.6),a=_e(s,["SISTEMA DE RECOMPENSA"],1.7,[.45,2.25,-.5],{bg:"#F2C14E",fg:"#2A2A34"}),l=Jt(s,12,"#FFE27A");return{update:(c,h,d)=>{r.visible=c>t-.2,o(c>i),$(a,c,i+.2,99,d),l(c,[.8,1.4,-.4,.6],c>i?1:0)}}},c:[[0,1.5,3],[-.1,1.5,-.6],[0,1.5,2.6],[.1,1.5,-.6]],range:2.5,blur:6,look:{bloom:.5}}});ie(16,(n,e)=>{let t=k(e,"premio");return{amb:"gris",fov:30,atores:[ue({x:0,z:-.3,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[150,30],armR:[150,30],bob:Math.abs(Math.sin(s*6))*.03})})],extra:i=>{let s=new le,r=C("#F2C14E",{metalness:.7,roughness:.3}),o=new G(new tt(.3,.12,.45,20),r);o.position.y=.5,s.add(o),s.add(T(.08,.3,.08,r,0,.15,0)),s.add(T(.36,.06,.36,r,0,.02,0));let a=Re(pr("\u2665","#E8445A",170),.3,.24);a.position.set(0,.5,.31),s.add(a),s.position.set(0,1.95,-.3),i.add(s);let l=_e(i,["EL AMOR = UN PREMIO"],2,[0,.85,0]),c=Jt(i,12,"#FFE27A");return{update:(h,d,u)=>{s.rotation.y=Math.sin(h*2)*.4,$(l,h,t-.6,99,u),c(h,[0,2.2,-.2,.6])}}},c:[[0,1.7,3.4],[0,1.6,-.3],[0,1.65,2.8],[0,1.6,-.3]],range:2.5,look:{bloom:.5}}});ie(17,(n,e)=>{let t=k(e,"3");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[60,70],armR:[60,70],head:Math.sin(s*3)*5})})],extra:(i,s,r)=>{let o=Ar(i,r[0]),a=es(["",""],{hora:"03:00",bg:"#2A1830"});a.scale.setScalar(.35),i.add(a);let l=Jr(.55,3);l.position.set(-1,2,-.8),i.add(l);let c=_e(i,["03:00 \xB7 SEGU\xCDS HABLANDO"],2.1,[.3,2.4,-.5],{bg:"#1E2230",fg:"#FF7A8A"});return{update:(h,d,u)=>{o(),ji(a,r[0],-.02),a.lookAt(u.position),$(c,h,t-.2,99,u)}}},c:[[.4,1.6,3],[0,1.5,-.4],[.2,1.55,2.4],[0,1.5,-.4]],range:2.5,look:$t}});ie(18,(n,e)=>({amb:"gris",fov:30,atores:[ue({x:-.7,z:-.3,eyes:[[0,"smug"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[130,100],head:8})})],extra:t=>{let i=[0,1,2,3,4].map(r=>{let o=Re(wa("\u2665",["#D66A86","#E8667F","#C95A7A","#D66A86","#E88A9F"][r]),.5,.65);return o.position.set(.3+r%3*.6,2+Math.floor(r/3)*.7,-.6-r%2*.2),t.add(o),o}),s=We(t,["SOLO PIENSAS EN ELLA"],1.7,[0,.85,0]);return{update:(r,o,a)=>{i.forEach((l,c)=>{l.visible=r>c*.4,l.rotation.z=Math.sin(r*2+c)*.1}),$(s,r,1,99,a)}}},c:[[0,1.8,3.6],[.1,1.7,-.5],[0,1.75,3],[.1,1.7,-.5]],range:3,look:tE}));ie(19,(n,e)=>{let t=k(e,"sangre");return{amb:"lab",fov:32,atores:[Qu(4,{x:.9,z:-.3,eyes:[[0,"look"],[t,"smug"]],pose:i=>i.pose({armL:[12,8],armR:[80,40]})}),ue({x:-.9,z:-.3,eyes:[[0,"heart"]],pose:i=>i.pose({armL:[12,8],armR:[70,0]})})],extra:i=>{let s=[0,1,2,3].map(a=>{let l=new le;l.add(new G(new tt(.05,.05,.35,12),C("#EEF4FA",{roughness:.1,transparent:!0,opacity:.6})));let c=new G(new tt(.045,.045,.2,12),C("#B0202A"));return c.position.y=-.07,l.add(c),l.position.set(-.3+a*.2,1.25,.2),i.add(l),l});i.add(T(1.2,.06,.5,C("#C8CCD4"),0,1.05,.2));for(let[a,l]of[[-.5,0],[.5,0],[-.5,.4],[.5,.4]])i.add(T(.05,1.05,.05,C("#8A8E98"),a,.52,l));let r=_e(i,["DONATELLA MARAZZITI"],2,[.9,2.4,-.3],In),o=We(i,["RECI\xC9N ENAMORADOS"],1.5,[-.9,2.25,-.3]);return{update:(a,l,c)=>{$(r,a,1.2,99,c),$(o,a,k(e,"recien")-.2,99,c),s.forEach((h,d)=>h.visible=a>t-.3+d*.15)}}},c:[[0,1.7,3.8],[0,1.4,-.2],[0,1.65,3.2],[0,1.4,-.2]],range:3}});ie(20,(n,e)=>{let t=k(e,"baja"),i=k(e,"obsesiones");return{amb:"lab",fov:30,k:1,atores:[],extra:s=>{let r=mr(s,[["NORMAL",.95,"#5FA0D8"]],1.2,[-1.3,1.5,-.6],{title:"SEROTONINA"}),o=mr(s,[["NORMAL",.95,"#5FA0D8"],["ENAMORADOS",.4,"#E8667F"]],1.9,[0,1.5,-.6],{title:"SEROTONINA"}),a=mr(s,[["NORMAL",.95,"#5FA0D8"],["ENAMORADOS",.4,"#E8667F"],["OBSESIONES",.4,"#8A6AC8"]],2.6,[0,1.5,-.6],{title:"SEROTONINA"}),l=We(s,["CALMA LOS PENSAMIENTOS"],1.9,[0,2.5,-.5]);return{update:(c,h,d)=>{r.visible=!1,o.visible=c<i-.1,a.visible=c>=i-.1,$(l,c,.8,t-.2,d)}}},c:[[0,1.5,2.8],[0,1.5,-.6],[0,1.5,2.4],[0,1.5,-.6]],range:2.5,blur:6}});ie(21,(n,e)=>{let t=k(e,"obsesionarse");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"heart"]],pose:(i,s)=>i.pose({armL:[70,80],armR:[70,80],lean:Math.sin(s*3)*6})})],extra:i=>{let s=_e(i,["ENAMORARSE = OBSESIONARSE"],2.3,[0,2.4,-.4],Wt),r=We(i,["UN POQUITO"],1,[0,2,-.3]),o=Jt(i,10,"#FFB0C0");return{update:(a,l,c)=>{$(s,a,t-.4,99,c),$(r,a,t+.5,99,c),o(a,[0,1.6,-.2,.7])}}},c:[[0,1.6,3],[0,1.5,-.4],[0,1.6,2.5],[0,1.5,-.4]],range:2.5,look:$t}});var ts=n=>{let e=Iu(["INSTITUTO"],2.6,{bg:"#2F5A9A",fg:"#fff"});e.position.set(0,3.2,-4.2),n.add(e)},pE=(n,e)=>{let t=hh(n,e,4.2,1.6,{bg:"#2F5A48",fg:"#F4F0E4",size:64,font:"Caveat",w:1024,h:390});return t.position.set(0,2.3,-3.38),t},yr=(n,e,t=-.1)=>{for(let i of e){n.add(T(1,.06,.6,C("#C8A27A"),i,.75,t));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(T(.05,.75,.05,C("#6A6E78"),i+s*.44,.37,t+r*.25))}},mE=()=>{let n=new le;return n.add(T(.32,.1,.12,C("#E0A860"),0,0,0)),n.add(T(.3,.03,.13,C("#C9361F"),0,.055,0)),n.add(T(.32,.07,.12,C("#E0A860"),0,.1,0)),n},ns=(n={})=>({amb:"aula",fov:32,...n}),no=n=>pE(n,["x\xB2 + 3x = 10","x = ?"]);hi(22,8,"HORA 8","QUEDAN 16");ie(23,(n,e)=>{let t=k(e,"dormido");return{amb:"cuartoYo",fov:30,atores:[ue({x:.2,z:-.4,eyes:[[0,"shut"],[.8,"flat"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>.8?150:12,40],head:-8,lean:Math.sin(s*2)*3})})],extra:i=>{let s=Jr(.5,7);s.position.set(-1,1.4,-.3),i.add(s);let r=_e(i,["\xA1RIIIING!"],1,[-1,2,-.3],wn),o=We(i,["DORMIDO: 2 HORAS"],1.5,[.6,2.15,-.4]),a=eE(i);return{update:(l,c,h)=>{s.rotation.z=l<1.5?Math.sin(l*50)*.12:0,$(r,l,0,1.5,h),$(o,l,t-.2,99,h),a(l,[.5,2.2,-.4],h,l>t)}}},c:[[0,1.6,3.2],[-.1,1.5,-.4],[0,1.6,2.6],[-.1,1.5,-.4]],range:2.5,look:{exposure:1.05}}});ie(24,(n,e)=>{let t=k(e,"peor");return{amb:"cuartoYo",fov:30,atores:[ue({x:.5,z:-.2,eyes:[[0,"flat"],[t,"sad"]],pose:i=>i.pose({armL:[12,8],armR:[12,8],head:14})})],extra:(i,s,r)=>{bh(i,-.8,-.9);let o=Re(pr("\u25CF","#C9361F",170),.16,.13);o.position.set(.06,-.3,.2),r[0].torso.add(o);let a=Qt(i,e,[[["OJERAS"],"ojeras","w",[1.35,2.05,-.2],1,1],[["PELO DE LADO"],"pelo","w",[1.45,1.65,-.2],1.3,1],[["K\xC9TCHUP"],"ketchup","r",[1.35,1.25,-.2],1,1],[["EL PEOR MOMENTO"],"peor","y",[-.5,2.15,-.5],1.6,1]]);return{update:(l,c,h)=>a(l,h)}},c:[[.2,1.6,3.2],[.2,1.5,-.3],[.2,1.6,2.7],[.3,1.5,-.3]],range:2.5}});ie(25,(n,e)=>{let t=k(e,"espero");return{amb:"gris",fov:28,k:1,atores:[],extra:i=>{let s=ci(i,[0,1.5,-.5],1.15,[["l","Buenos d\xEDas \u2665",.2],["l","Te espero en la puerta del instituto.",t-.2]],{hora:"07:45"});return{update:r=>s.userData.upd(r)}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.8],[0,1.5,-.5]],range:2,blur:4}});ie(26,(n,e)=>{let t=k(e,"colonia"),i=s=>r=>Math.min(2,Math.floor(r/Math.max(.6,(t-.3)/3)))===s?[0,0,-.3]:[0,0,30];return{amb:"cuartoYo",fov:30,atores:[ue({outfit:"laranja",move:i(0),eyes:[[0,"flat"]]}),ue({outfit:"azul",move:i(1),eyes:[[0,"lookl"]]}),ue({move:i(2),eyes:[[0,"smug"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t?110:12,60]})})],extra:s=>{let r=_e(s,["\xD73"],.7,[-1,2.1,-.3],{...Wt,size:110,w:360}),o=new G(new tt(.08,.1,.28,16),C("#8AC8F2",{roughness:.1,transparent:!0,opacity:.75}));o.position.set(.55,1.55,.1),s.add(o);let a=We(s,["MEDIO BOTE DE COLONIA"],1.8,[.4,2.15,-.3]),l=Jt(s,14,"#CFE8FF");return{update:(c,h,d)=>{$(r,c,.3,t-.2,d),o.visible=c>t-.1,$(a,c,t,99,d),l(c,[0,1.6,0,.6],c>t?1:0)}}},c:[[0,1.6,3.2],[0,1.45,-.3],[0,1.6,2.7],[0,1.45,-.3]],range:2.5}});ie(27,(n,e)=>({amb:"barrio",fov:34,atores:[ue({eyes:[[0,"wide"]],move:t=>[zt(-3,2.5,t/1.6),0,0],pose:(t,i)=>{t.walk(i*2.2),t.pose({lean:12})}})],extra:t=>{let i=We(t,["\xA1TARDE!"],.9,[0,2.3,-.3]);return{update:(s,r,o)=>$(i,s,.1,99,o)}},c:[[0,1.5,4.6],[0,1.2,0],[.3,1.5,4.4],[.3,1.2,0]],range:4}));ie(28,(n,e)=>{let t=k(e,"ti");return{amb:"barrio",fov:32,atores:[Xe({x:.4,z:-.6,eyes:[[0,"happy"]],pose:gr}),ue({x:-1.2,z:.2,eyes:[[0,"wide"]]})],extra:i=>{ts(i);let s=_e(i,["\xBFA TI?"],.9,[-1.2,2.2,.2],Wt);return{update:(r,o,a)=>$(s,r,t-.1,99,a)}},c:[[-.2,1.6,4],[-.2,1.5,-.3],[-.2,1.6,3.4],[-.2,1.5,-.3]],range:3.5}});ie(29,(n,e)=>{let t=k(e,"fenomeno");return{amb:"barrio",fov:34,atores:[ue({x:-.3,z:-.4,eyes:[[0,"happy"]]}),Xe({x:.4,z:-.4,eyes:[[0,"heart"]]}),...[0,1,2].map(i=>li(i+2,{eyes:[[0,"wide"]],move:s=>[zt(-3.5+i*.9,3.5,s/5)-i*.4,0,.8+i*.25],pose:(s,r)=>s.walk(r+i)}))],extra:i=>{ts(i);let s=_e(i,["FEN\xD3MENO PARANORMAL"],1.9,[0,2.15,-.3],{bg:"#4A2A7A",fg:"#C8FF8A"});return{update:(r,o,a)=>$(s,r,t-.2,99,a)}},c:[[0,1.7,4.6],[0,1.4,-.2],[0,1.65,4.1],[0,1.4,-.2]],range:4}});ie(30,(n,e)=>{let t=k(e,"congelado");return{amb:"barrio",fov:30,atores:[Ah({x:0,z:-.2,eyes:[[0,"look"],[t-.2,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[120,70]})})],extra:(i,s,r)=>{ts(i);let o=mE();i.add(o);let a=_e(i,["CONGELADO"],1.1,[.9,2.05,-.2],In),l=We(i,["TU MEJOR AMIGO"],1.3,[-.9,2.05,-.2]);return{update:(c,h,d)=>{let u=new I;r[0].head.getWorldPosition(u),o.position.set(u.x+.05,u.y-.15,u.z+.3),$(l,c,.2,99,d),$(a,c,t,99,d)}}},c:[[0,1.65,3],[0,1.5,-.2],[0,1.65,2.5],[0,1.55,-.2]],range:2.5,look:{exposure:1}}});ie(31,(n,e)=>{let t=k(e,"buenas"),i=k(e,"manana");return{amb:"barrio",fov:30,atores:[Xe({x:.7,z:-.3,eyes:[[0,"happy"]],pose:(s,r)=>r<t?gr(s,r):s.pose()}),ue({x:-.7,z:-.3,eyes:[[0,"look"],[t,"smug"],[i-.3,"wide"]],pose:(s,r)=>r>t-.3?s.pose({armL:[12,8],armR:[110,20]}):s.pose()})],extra:s=>{ts(s);let r=$u(s,"\xA1Buenas tardes!",1.4,[-.5,2.25,-.2]),o=_e(s,["8:00 DE LA MA\xD1ANA"],1.7,[.4,.9,.3],wn);return{update:(a,l,c)=>{$(r,a,t,99,c),$(o,a,i-.3,99,c)}}},c:[[0,1.6,3.4],[0,1.45,-.3],[0,1.6,2.9],[0,1.45,-.3]],range:3}});ie(32,(n,e)=>({amb:"barrio",fov:28,atores:[Xe({x:.2,z:-.3,eyes:[[0,"happy"]],pose:(t,i)=>t.pose({armL:[70,80],armR:[12,8],bob:Math.abs(Math.sin(i*12))*.02,head:Math.sin(i*12)*5})})],extra:(t,i,s)=>{ts(t);let r=Er(s[0]),o=We(t,["SE R\xCDE"],.9,[1,2.05,-.3]);return{update:(a,l,c)=>{r(.6),$(o,a,.2,99,c)}}},c:[[0,1.65,2.8],[.2,1.55,-.3],[0,1.65,2.4],[.2,1.6,-.3]],range:2.5}));ie(33,(n,e)=>{let t=k(e,"pupilas"),i=k(e,"grandes");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=Sh(s,[0,1.45,-.5],2.2),o=_e(s,["PUPILAS"],1.1,[0,2.15,-.4]);return{update:(a,l,c)=>{r.userData.set(pt(i-.4,i+.8,a)),$(o,a,t-.2,99,c)}}},c:[[0,1.5,3],[0,1.5,-.5],[0,1.5,2.6],[0,1.5,-.5]],range:2.5,blur:4}});ie(34,(n,e)=>{let t=k(e,"tamano");return{amb:"lab",fov:32,atores:[Jg({x:1.1,z:-.2,glasses:!0,eyes:[[0,"look"]],pose:vh})],extra:i=>{let s=Sh(i,[-.6,1.6,-.8],1.8),r=_e(i,["ECKHARD HESS"],1.4,[1.1,2.2,-.2],In),o=We(i,["SEG\xDAN LO QUE NOS INTERESA"],2.1,[-.5,.85,-.4]);return{update:(a,l,c)=>{s.userData.set(.5+.45*Math.sin(a*1.5)),$(r,a,2.5,99,c),$(o,a,t+.3,99,c)}}},c:[[0,1.6,3.8],[0,1.5,-.4],[0,1.6,3.2],[0,1.5,-.4]],range:3}});ie(35,(n,e)=>{let t=k(e,"monedas");return{amb:"barrio",fov:26,atores:[Xe({x:0,z:-.3,eyes:[[0,"look"],[t-.5,"wide"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:Math.sin(s)*3})})],extra:(i,s,r)=>{ts(i);let o=Er(r[0]),a=_e(i,["EN DIRECTO"],1,[-.8,2,-.3],wn),l=We(i,["DOS MONEDAS NEGRAS"],1.4,[.85,1.2,.1]);return{update:(c,h,d)=>{o(.5),$(a,c,.3,99,d),$(l,c,t-.2,99,d)}}},c:[[0,1.65,2.6],[0,1.6,-.3],[0,1.68,2],[0,1.65,-.3]],range:2}});hi(36,10,"HORA 10","QUEDAN 14");ie(37,(n,e)=>{let t=k(e,"lado"),i=k(e,"nada");return{...ns(),atores:[Zu({x:1.8,z:-2.6,eyes:[[0,"look"]],pose:(s,r)=>fn(s,r)}),ue({x:-.5,z:-.5,eyes:[[0,"look"],[t,"lookl"],[i,"heart"]]}),Xe({x:.6,z:-.5,eyes:[[0,"look"]],move:s=>[zt(2.5,.6,pt(0,t,s)),0,-.5],pose:(s,r)=>r<t?s.walk(r):s.pose()})],extra:s=>{no(s),yr(s,[-.5,.6],-.1);let r=We(s,["NO OYES NADA"],1.4,[-.8,2,.1]);return{update:(o,a,l)=>$(r,o,i-.1,99,l)}},c:[[0,1.8,3.6],[0,1.5,-1],[0,1.75,3],[0,1.5,-1]],range:3.5}});ie(38,(n,e)=>{let t=k(e,"pisos");return{amb:"gris",fov:30,atores:[ue({x:-.6,z:-.3,eyes:[[0,"wide"]],pose:(i,s)=>i.pose({armL:[70,80],armR:[12,8],bob:Math.abs(Math.sin(s*14))*.012})})],extra:i=>{let s=Yn(i,1);s.position.set(.8,1.5,-.3);let r=_e(i,["\xA1BUM-BUM!"],1.1,[.8,2.25,-.2],wn),o=We(i,["COMO SUBIR 10 PISOS"],1.6,[.2,.85,.1]);return{update:(a,l,c)=>{s.scale.setScalar(Zn(a,160)),$(r,a,.2,99,c),$(o,a,t-.4,99,c)}}},c:[[0,1.6,3.2],[0,1.5,-.3],[0,1.6,2.7],[0,1.5,-.3]],range:2.5,look:{bloom:.5}}});ie(39,(n,e)=>{let t=k(e,"cosquillas");return{amb:"lab",fov:30,atores:[ue({x:0,z:-.3,eyes:[[0,"look"],[k(e,"alerta"),"wide"]],pose:(i,s)=>i.pose({armL:[30,20],armR:[30,20],bob:Math.abs(Math.sin(s*14))*.01})})],extra:i=>{let s=Yn(i,.28);s.position.set(.12,1.35,.25);let r=Qt(i,e,[[["MODO ALERTA"],"alerta","r",[0,2.2,-.2],1.4,1],[["ADRENALINA"],"adrenalina","y",[-1.15,1.85,-.2],1.3,1],[["CORAZ\xD3N A TOPE"],"acelera","w",[1.25,1.85,-.2],1.5,1],[["MANOS SUDADAS"],"sudan","w",[-1.2,1.2,-.2],1.5,1],[["COSQUILLAS"],"cosquillas","p",[1.2,1.2,-.2],1.3,1]]);return{update:(o,a,l)=>{r(o,l),s.scale.setScalar(Zn(o,150)*.9)}}},c:[[0,1.55,3.6],[0,1.5,-.3],[0,1.55,3.2],[0,1.5,-.3]],range:3}});ie(40,(n,e)=>{let t=k(e,"no"),i=k(e,"cuerpo"),s=k(e,"verdad");return{amb:"gris",fov:30,atores:[ue({x:0,z:-.3,eyes:[[0,"happy"],[t,"look"],[s-.5,"heart"]],pose:(r,o)=>r.pose({armL:[60,70],armR:[60,70]})})],extra:r=>{let o=dE(r,12),a=_e(r,["MARIPOSAS"],1.2,[0,2.2,-.3],Wt),l=We(r,["NO SON MARIPOSAS"],1.5,[0,2.2,-.3]),c=_e(r,["ALGO IMPORTANTE VA A PASAR"],2.2,[0,2.2,-.3]);return{update:(h,d,u)=>{o(h,[0,1.2,-.1],u,h<t+1.2||h>s-.8?1:.001),$(a,h,.2,t-.1,u),$(l,h,t,i-.1,u),$(c,h,i+1.5,99,u)}}},c:[[0,1.55,3],[0,1.45,-.3],[0,1.55,2.5],[0,1.45,-.3]],range:2.5,look:{bloom:.45}}});_r(41,["pone"],[(n,e)=>({...ns(),atores:[ue({x:-.5,z:-.5,eyes:[[0,"lookl"],[k(e,"abres"),"down"]]}),Xe({x:.6,z:-.5,eyes:[[0,"smug"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[i<2?70:12,70]})})],extra:t=>{no(t),yr(t,[-.5,.6],-.1);let i=ai(t,[""],.25,[0,.82,.1]);return i.rotation.x=-Math.PI/2,{update:s=>{i.position.x=zt(.4,-.4,pt(.3,1.6,s))}}},c:[[0,1.4,2.2],[0,1,-.2],[0,1.4,1.9],[-.2,1,-.2]],range:2}),(n,e)=>({amb:"aula",fov:30,k:1,atores:[],extra:t=>{let i=ai(t,["Hoy quiero","conocerte","de verdad \u2665"],1.6,[0,1.5,-.5],90),s=Jt(t,8,"#FFB0C0");return{update:r=>{i.rotation.z=Math.sin(r)*.03,s(r,[0,1.5,-.3,1])}}},c:[[0,1.5,2.2],[0,1.5,-.5],[0,1.5,1.9],[0,1.5,-.5]],range:1.5,blur:6})]);hi(42,12,"HORA 12","QUEDAN 12");ie(43,(n,e)=>{let t=k(e,"llama");return{amb:"plaza",fov:32,atores:[Xe({x:.6,z:-.3,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[90,20]})}),ue({x:-.7,z:-.3,eyes:[[0,"look"],[t,"wide"]]})],extra:(i,s,r)=>{let o=es(["LAS 36","PREGUNTAS"],{hora:"12:00",bg:"#2A1830"});o.scale.setScalar(.4),i.add(o);let a=_e(i,["LAS 36 PREGUNTAS"],1.8,[0,2.2,-.3],Wt);return{update:(l,c,h)=>{ji(o,r[0],.1),o.lookAt(h.position),$(a,l,t,99,h)}}},c:[[0,1.6,3.4],[0,1.45,-.3],[0,1.6,2.9],[0,1.45,-.3]],range:3}});ie(44,(n,e)=>{let t=k(e,"desconocidos"),i=k(e,"personales");return{amb:"lab",fov:34,atores:[Qi(0,{x:-1.6,z:-.3,eyes:[[0,"look"],[i,"happy"]]}),li(4,{x:-.6,z:-.3,eyes:[[0,"lookl"],[i,"happy"]]}),Qi(2,{x:.6,z:-.3,eyes:[[0,"flat"],[i,"happy"]]}),li(1,{x:1.6,z:-.3,eyes:[[0,"look"],[i,"happy"]]})],extra:s=>{to(s,-1.1,.2,.75,1.4,.6),to(s,1.1,.2,.75,1.4,.6);let r=_e(s,["ARTHUR ARON"],1.3,[0,2.3,-.6],In),o=Qt(s,e,[[["DESCONOCIDOS"],"desconocidos","w",[0,2.3,-.6],1.5],[["36 PREGUNTAS"],"36","y",[0,2.3,-.6],1.5],[["CADA VEZ M\xC1S PERSONALES"],"personales","p",[0,2.3,-.6],2.2,1]]);return{update:(a,l,c)=>{$(r,a,0,t-.3,c),o(a,c)}}},c:[[0,1.7,4.4],[0,1.4,-.3],[0,1.7,3.9],[0,1.4,-.3]],range:3.5}});ie(45,(n,e)=>{let t=k(e,"caso");return{amb:"jardin",fov:30,atores:[Qi(0,{x:-.4,z:-.3,outfit:"jaleco",eyes:[[0,"happy"]],pose:i=>i.pose({armL:[12,8],armR:[60,60]})}),li(4,{x:.4,z:-.3,outfit:"terno",eyes:[[0,"happy"]],pose:i=>i.pose({armL:[60,60],armR:[12,8]})})],extra:i=>{let s=We(i,["M\xC1S UNIDOS"],1.2,[0,2.2,-.3]),r=_e(i,["\xA1SE CASARON!"],1.4,[0,2.2,-.3],Wt),o=Yn(i,.4);o.position.set(0,1.95,-.3);let a=Jt(i,16,"#FFF2C0");return{update:(l,c,h)=>{$(s,l,.3,t-.3,h),$(r,l,t-.2,99,h),o.visible=l>t,o.scale.setScalar(Zn(l,90)),a(l,[0,1.8,-.2,1.2],l>t?1:0)}}},c:[[0,1.6,3.2],[0,1.45,-.3],[0,1.6,2.7],[0,1.45,-.3]],range:3}});ie(46,(n,e)=>{let t=k(e,"cenar"),i=k(e,"como");return{amb:"plaza",fov:32,atores:[Xe({x:.7,z:-.3,eyes:[[0,"look"]],pose:fn}),ue({x:-.7,z:-.3,eyes:[[0,"look"],[i,"happy"]]})],extra:s=>{let r=Qt(s,e,[[["F\xC1CILES"],"faciles","w",[0,2.25,-.3],1],[["\xBFCON QUI\xC9N CENAR\xCDAS?"],"cenar","y",[0,2.25,-.3],1.9],[["\xBFTU D\xCDA PERFECTO?"],"como","y",[0,2.25,-.3],1.7]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,3.4],[0,1.45,-.3],[0,1.6,2.9],[0,1.45,-.3]],range:3}});ie(47,(n,e)=>({amb:"plaza",ambo:{dusk:!0},fov:30,atores:[Xe({x:.7,z:-.3,eyes:[[0,"look"]],pose:fn}),ue({x:-.7,z:-.3,eyes:[[0,"flat"],[k(e,"doloroso"),"sad"],[k(e,"averguenza"),"small"]]})],extra:t=>{let i=Qt(t,e,[[["SERIAS"],"serias","b",[0,2.25,-.3],1],[["\xBFTU RECUERDO M\xC1S BONITO?"],"recuerdo","b",[0,2.25,-.3],2.2],[["\xBFEL M\xC1S DOLOROSO?"],"doloroso","b",[0,2.25,-.3],1.8],[["\xBFQU\xC9 TE AVERG\xDCENZA?"],"averguenza","r",[0,2.25,-.3],1.9]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,3.2],[0,1.45,-.3],[0,1.6,2.7],[0,1.45,-.3]],range:3,look:{exposure:.92}}));ie(48,(n,e)=>{let t=k(e,"lloraste");return{amb:"plaza",ambo:{dusk:!0},fov:30,atores:[ue({x:-.5,z:-.3,eyes:[[0,"smug"],[k(e,"verdad"),"look"],[t,"sad"]],pose:(i,s)=>s>k(e,"verdad")?fn(i,s):i.pose({armL:[60,70],armR:[60,70]})}),Xe({x:.8,z:-.3,eyes:[[0,"look"]]})],extra:i=>{let s=Qt(i,e,[[["TRANQUILO Y MISTERIOSO"],"tranquilo","w",[-.2,2.2,-.3],2.1],[["LA VERDAD"],"verdad","p",[-.2,2.2,-.3],1.1],[["LLOR\xC9 CON UNA PELI DE DIBUJOS"],"lloraste","y",[-.2,2.2,-.3],2.4],[["MIEDO A LA OSCURIDAD"],"miedo","y",[-.2,2.2,-.3],1.9,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.2],[0,1.45,-.3],[0,1.6,2.8],[0,1.45,-.3]],range:3}});ie(49,(n,e)=>{let t=k(e,"fingiste");return{...ns(),look:Pa,atores:[...[0,1,2,3].map(i=>li(i,{x:-2.2+i*1.45,z:-1.6,eyes:[[0,"happy"]],pose:(s,r)=>Kg(s,r+i)})),Ju(ue,{x:.4,z:.2,y:.12,eyes:[[0,"wide"],[t,"smug"]]})],extra:i=>{to(i,-1.4,-1,.75,2,.7),to(i,1.4,-1,.75,2,.7);let s=T(.5,.03,.35,C("#E8E2D2"),-.5,.02,.4);i.add(s);let r=_e(i,["EL COMEDOR ENTERO"],1.8,[0,2.3,-1.4]),o=We(i,["\xAB\xA1LO HE HECHO A PROP\xD3SITO!\xBB"],2.3,[0,1.15,.4]);return{update:(a,l,c)=>{$(r,a,.2,99,c),$(o,a,t,99,c)}}},c:[[0,2,3.8],[0,1,-.6],[0,1.9,3.2],[0,1,-.6]],range:3.5}});ie(50,(n,e)=>{let t=k(e,"escucha"),i=k(e,"cosas");return{amb:"plaza",ambo:{dusk:!0},fov:30,atores:[Xe({x:.7,z:-.3,eyes:[[0,"look"],[i-.8,"happy"]],pose:(s,r)=>r>i-.8?fn(s,r):jg(s,r)}),ue({x:-.7,z:-.3,eyes:[[0,"sad"],[t,"look"]]})],extra:s=>{let r=Qt(s,e,[[["NO SE R\xCDE"],"rie","w",[.4,2.2,-.3],1.1],[["TE ESCUCHA"],"escucha","y",[.4,2.2,-.3],1.2]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,3.2],[0,1.45,-.3],[0,1.6,2.8],[0,1.45,-.3]],range:3}});ie(51,(n,e)=>({amb:"cuartoElla",fov:30,look:Pa,atores:[Xe({x:.4,z:-.2,eyes:[[0,"look"],[k(e,"miedo"),"sad"],[k(e,"espejo"),"down"]],pose:t=>t.pose({armL:[60,70],armR:[60,70]})})],extra:t=>{bh(t,-.9,-1);let i=Qt(t,e,[[["LA PERSONA PERFECTA"],"perfecta","p",[.4,2.15,-.2],1.9],[["TAMBI\xC9N TIENE MIEDO"],"miedo","w",[.4,2.15,-.2],1.8],[["SE SIENTE SOLA"],"sola","w",[.4,2.15,-.2],1.5],[["NO LE GUSTA LO QUE VE"],"ve","b",[.4,2.15,-.2],2,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,3.2],[-.1,1.5,-.4],[0,1.6,2.7],[-.1,1.5,-.4]],range:2.5}));ie(52,(n,e)=>{let t=k(e,"persona");return{amb:"plaza",ambo:{dusk:!0},fov:30,atores:[Xe({x:.6,z:-.3,eyes:[[0,"happy"]]}),ue({x:-.6,z:-.3,eyes:[[0,"happy"]]})],extra:i=>{let s=_e(i,["NO ES TU CRUSH"],1.5,[0,2.2,-.3],Wt),r=We(i,["ES UNA PERSONA"],1.5,[0,2.2,-.3]),o=Jt(i,10,"#FFF2C0");return{update:(a,l,c)=>{$(s,a,.3,t-.6,c),$(r,a,t-.5,99,c),o(a,[0,1.6,-.2,1],a>t?1:0)}}},c:[[0,1.6,3.4],[0,1.45,-.3],[0,1.6,2.8],[0,1.45,-.3]],range:3}});var gE=()=>Ae(900,420,n=>{n.fillStyle="#0E1C24",n.beginPath(),n.roundRect(0,0,900,420,26),n.fill();let e=(t,i)=>{n.strokeStyle=i,n.lineWidth=7,n.beginPath();for(let s=0;s<=880;s+=4){let r=s%220/220,o=t;r>.4&&r<.45?o-=(r-.4)*1400:r>=.45&&r<.5?o-=(.5-r)*1400-30:r>=.5&&r<.55&&(o+=0),o+=Math.sin(s*.03)*4,n.lineTo(10+s,o)}n.stroke()};e(140,"#5FD08A"),e(310,"#E8667F"),n.fillStyle="#5FD08A",n.font="800 30px Inter",n.textAlign="left",n.fillText("T\xDA",24,60),n.fillStyle="#E8667F",n.fillText("ELLA",24,232)}),EE={exposure:.9,bloom:.4,vig:.6},Xu=n=>(e,t)=>e.pose({armL:n>0?[12,8]:[40,0],armR:n>0?[40,0]:[12,8]}),nf=(n,e,t=.09,i=0)=>s=>{let r=(s*t+i)%1,o=n.cur.getPointAt(r),a=n.cur.getPointAt((r+.01)%1);return n.cart.position.copy(o),n.cart.lookAt(a),o},Ra=n=>(e,t)=>e.pose({armL:[150+Math.sin(t*9+n)*15,30],armR:[150+Math.cos(t*9+n)*15,30]});hi(53,13,"HORA 13","QUEDAN 11");ie(54,(n,e)=>({amb:"gris",fov:32,atores:[Ah({x:.7,z:-.3,eyes:[[0,"angry"]],pose:(t,i)=>t.pose({armL:[12,8],armR:[95+Math.sin(i*7)*8,0],lean:-6})}),ue({x:-.7,z:-.3,eyes:[[0,"wide"]]})],extra:t=>{ef(t,-2.4),t.add(T(1,.5,.5,C("#F4F6F8",{roughness:.2}),-2.2,.9,-2.1)),bh(t,-2.2,-2.36);let i=Qt(t,e,[[["\xBFQU\xC9 EST\xC1 PASANDO?"],"pasando","w",[.3,2.2,-.3],1.8],[["\xBFLE HAS PAGADO?"],"pagado","w",[.3,2.2,-.3],1.6],[["\xBFLA TIENES AMENAZADA?"],"amenazada","r",[.3,2.2,-.3],2],[["\xBFC\xC1MARA OCULTA?"],"camara","y",[.3,2.2,-.3],1.6,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,3.4],[0,1.45,-.3],[0,1.6,2.9],[0,1.45,-.3]],range:3,look:{exposure:1.1}}));ie(55,(n,e)=>{let t=k(e,"loco"),i=k(e,"pide");return{amb:"gris",fov:32,atores:[Ah({x:.7,z:-.3,eyes:[[0,"look"],[t-.5,"flat"],[i,"smug"]],pose:(s,r)=>r>i?s.pose({armL:[12,8],armR:[60,40]}):s.pose({armL:[70,80],armR:[70,80]})}),ue({x:-.7,z:-.3,eyes:[[0,"look"],[i+1,"flat"]],pose:(s,r)=>r<t?fn(s,r):s.pose()})],extra:s=>{ef(s,-2.4);let r=ci(s,[-.7,2.2,-.2],.28,[["l","\xBFEst\xE1s despierto?",0],["s","TIENES 24 HORAS",0]],{hora:"00:00"}),o=Qt(s,e,[[["\xBFEST\xC1S LOCO?"],"loco","w",[.8,2.2,-.3],1.3],[["\xBFY SU AMIGA TIENE NOVIO?"],"amiga","p",[.6,2.2,-.3],2.1,1]]);return{update:(a,l,c)=>{r.visible=a<t,r.userData.upd(a),o(a,c)}}},c:[[0,1.6,3.4],[0,1.5,-.3],[0,1.6,2.9],[0,1.5,-.3]],range:3,look:{exposure:1.1}}});ie(56,(n,e)=>{let t=k(e,"140"),i=k(e,"montaje");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=ci(s,[-.8,1.5,-.5],.9,[["l","\xBF\xBFHAB\xC9IS VISTO??",.2],["l","\xA1\xA1NO PUEDE SER!!",.8],["l","jajajaja",1.4],["l","\xBFEst\xE1n saliendo?",2],["l","Mirad esto\u2026",i-.3]],{name:"CLASE 4\xBAB",hora:"13:10",max:6}),o=_e(s,["140 MENSAJES"],1.4,[-.8,2.45,-.3],wn),a=Re(pr("\u2665","#E8667F",170),1.5,1.2);a.position.set(1,1.5,-.7),s.add(a);let l=Re(wa("","#D66A86"),.45,.58),c=Re(wa("","#43C4B4"),.45,.58);l.position.set(.78,1.55,-.6),c.position.set(1.22,1.55,-.6);for(let h of[l,c])h.renderOrder=7,s.add(h);return{update:(h,d,u)=>{r.userData.upd(h),$(o,h,t-.2,99,u);let p=h>i;a.visible=l.visible=c.visible=p,a.scale.setScalar(p?Zn(h,90):1)}}},c:[[0,1.6,4],[0,1.6,-.5],[0,1.6,3.6],[0,1.6,-.5]],range:2.5,blur:4}});ie(57,(n,e)=>{let t=k(e,"votada"),i=k(e,"supieran");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=mr(s,[["1 D\xCDA",.15,"#9AA0B0"],[`MENOS DE
UNA SEMANA`,.9,"#E8667F"],["UN MES",.35,"#9AA0B0"],["SIEMPRE",.2,"#9AA0B0"]],2.6,[0,1.5,-.6],{title:"ENCUESTA: \xBFCU\xC1NTO DURAR\xC1?"}),o=_e(s,["SI ELLOS SUPIERAN\u2026"],1.8,[0,2.45,-.4],{bg:"#1E2230",fg:"#FF7A8A"}),a=at("#FFE27A",.9,0);return a.position.set(-.2,1.6,-.5),s.add(a),{update:(l,c,h)=>{r.scale.setScalar(.6+.4*pt(0,.4,l)),a.material.opacity=l>t?.5+.3*Math.sin(l*6):0,$(o,l,i-.2,99,h)}}},c:[[0,1.6,3.2],[0,1.6,-.6],[0,1.6,2.8],[0,1.6,-.6]],range:2.5,blur:4}});hi(58,15,"HORA 15","QUEDAN 9");ie(59,(n,e)=>{let t=k(e,"feria");return{amb:"noria",fov:34,atores:[Xe({eyes:[[0,"happy"]],move:i=>[zt(-1.6,.4,pt(0,n,i)),0,.4],pose:(i,s)=>i.walk(s)}),ue({eyes:[[0,"happy"]],move:i=>[zt(-2.4,-.4,pt(0,n,i)),0,.4],pose:(i,s)=>i.walk(s+.5)})],extra:i=>{let s=_e(i,["LA FERIA"],1.1,[0,2.4,.2],Wt);return{update:(r,o,a)=>$(s,r,t-.2,99,a)}},c:[[0,1.8,5.2],[0,1.9,-1],[.4,1.7,4.6],[0,1.8,-1]],range:5,look:{bloom:.5}}});ie(60,(n,e)=>{let t,i=s=>r=>{let o=t?nf(t,null,.09,.02)(r):new I;return[o.x+s,o.y-.25,o.z]};return{amb:"noria",fov:40,atores:[ue({eyes:[[0,"wide"]],move:i(-.25),pose:Ra(0)}),Xe({eyes:[[0,"happy"]],move:i(.25),pose:Ra(2)})],extra:s=>{t=ju(s);let r=_e(s,["MONTA\xD1A RUSA"],1.8,[0,4.2,-3],wn);return{update:(o,a,l)=>{$(r,o,.2,99,l);let c=t.cart.position;l.position.set(c.x+2.2,c.y+1.6,c.z+3.6),l.lookAt(c.x,c.y+.3,c.z)}}},c:[[0,3,6],[0,2.5,-4],[1,3,5.5],[0,2.5,-4]],k:1,range:8,blur:3,look:{bloom:.5}}});ie(61,(n,e)=>{let t=k(e,"alto"),i=k(e,"movia");return{amb:"puente",fov:34,atores:[li(5,{x:-.3,z:0,eyes:[[0,"look"],[i,"wide"]],pose:(s,r)=>s.pose({armL:[60,20],armR:[60,20],lean:r>i?Math.sin(r*5)*8:0})})],extra:s=>{let r=_e(s,["DUTTON Y ARON"],1.5,[-.3,2.3,0],In),o=Qt(s,e,[[["MUY ALTO"],"alto","w",[1.1,1.8,0],1,1],[["SE MOV\xCDA MUCHO"],"movia","r",[1.2,1.35,0],1.5,1]]);return{update:(a,l,c)=>{$(r,a,k(e,"dutton")-.2,99,c),o(a,c),Fa(c,a>i?.015:0,a)}}},c:[[0,1.8,4.2],[0,1.3,0],[.3,1.7,3.6],[0,1.3,0]],range:4}});ie(62,(n,e)=>{let t=k(e,"numero");return{amb:"puente",fov:32,atores:[Qi(3,{x:.6,z:0,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[60,60],armR:[80,20]})}),li(5,{x:-.6,z:0,eyes:[[0,"look"],[t,"wide"]],pose:(i,s)=>i.pose({armL:[60,20],armR:[60,20],lean:Math.sin(s*5)*6})})],extra:(i,s,r)=>{let o=T(.3,.4,.03,C("#C8A27A"),0,0,0);i.add(o);let a=ai(i,["555 - 0174"],.5,[0,2.2,0],90),l=We(i,["UNA ENTREVISTA"],1.4,[.6,2.25,0]);return{update:(c,h,d)=>{let u=_h(r[0]);o.position.set(u.x-.15,u.y+.05,u.z+.1),$(l,c,.2,t-.2,d),a.visible=c>t,a.lookAt(d.position)}}},c:[[0,1.7,3.6],[0,1.45,0],[0,1.7,3.1],[0,1.45,0]],range:3}});ie(63,(n,e)=>{let t=k(e,"tranquilo");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=mr(i,[[`PUENTE
QUE DA MIEDO`,.9,"#C9361F"]],1.4,[-.7,1.5,-.6],{title:"LLAMADAS"}),r=mr(i,[[`PUENTE
QUE DA MIEDO`,.9,"#C9361F"],[`PUENTE
TRANQUILO`,.3,"#5FA0D8"]],2.4,[0,1.5,-.6],{title:"LLAMADAS"});return{update:o=>{s.visible=o<t-.2,r.visible=o>=t-.2}}},c:[[0,1.5,3],[0,1.5,-.6],[0,1.5,2.6],[0,1.5,-.6]],range:2.5,blur:4}});ie(64,(n,e)=>{let t=k(e,"amor");return{amb:"gris",fov:30,atores:[ue({x:0,z:-.3,eyes:[[0,"wide"],[t-.2,"heart"]],pose:(i,s)=>i.pose({armL:[70,80],armR:[70,80],bob:Math.abs(Math.sin(s*14))*.01})})],extra:i=>{let s=_e(i,["MIEDO"],1,[-1,2,-.3],wn),r=We(i,["="],.5,[0,2.3,-.3],{size:110,w:260}),o=_e(i,["AMOR"],1,[1,2,-.3],Wt),a=Yn(i,.5);return a.position.set(1,1.4,-.2),{update:(l,c,h)=>{$(s,l,.2,99,h),$(r,l,t-.6,99,h),$(o,l,t-.2,99,h),a.visible=l>t,a.scale.setScalar(Zn(l,150))}}},c:[[0,1.6,3.4],[0,1.5,-.3],[0,1.6,2.9],[0,1.5,-.3]],range:2.5}});ie(65,(n,e)=>{let t=k(e,"cita"),i,s=r=>o=>{let a=i?nf(i,null,.09,.35)(o):new I;return[a.x+r,a.y-.25,a.z]};return{amb:"noria",fov:38,atores:[ue({eyes:[[0,"happy"]],move:s(-.25),pose:Ra(1)}),Xe({eyes:[[0,"heart"]],move:s(.25),pose:Ra(3)})],extra:r=>{i=ju(r);let o=_e(r,["LA MEJOR CITA DEL MUNDO"],2.6,[0,4.4,-3],Wt),a=Jt(r,14,"#FFE27A");return{update:(l,c,h)=>{$(o,l,t-.4,99,h);let d=i.cart.position;h.position.set(d.x-2,d.y+1.5,d.z+3.6),h.lookAt(d.x,d.y+.3,d.z),a(l,[d.x,d.y+1,d.z,1],l>t?1:0)}}},c:[[2,3.5,6.5],[0,2.5,-4],[-1,3.2,6],[0,2.5,-4]],k:1,range:8,blur:3,look:{bloom:.55}}});ie(66,(n,e)=>{let t=k(e,"coge"),i=k(e,"suelta");return{amb:"noria",fov:30,atores:[ue({x:-.35,z:.2,eyes:[[0,"flat"],[t,"wide"],[i,"heart"]],pose:(s,r)=>r>t?Xu(1)(s,r):s.pose({lean:Math.sin(r*3)*8,head:Math.sin(r*4)*10})}),Xe({x:.35,z:.2,eyes:[[0,"flat"],[t-.3,"happy"]],pose:(s,r)=>r>t?Xu(-1)(s,r):s.pose({lean:-Math.sin(r*3)*8,head:-Math.sin(r*4)*10})})],extra:s=>{let r=We(s,["MAREADOS"],1,[0,2.3,.2]),o=Yn(s,.25);o.position.set(0,1.05,.35);let a=_e(s,["NO LA SUELTA"],1.3,[0,2.3,.2],Wt);return{update:(l,c,h)=>{$(r,l,.2,t-.2,h),o.visible=l>t,o.scale.setScalar(Zn(l,100)),$(a,l,i-.2,99,h)}}},c:[[0,1.6,3.4],[0,1.45,.2],[0,1.6,2.9],[0,1.45,.2]],range:2.5,look:{bloom:.45}}});hi(67,18,"HORA 18","QUEDAN 6");ie(68,(n,e)=>{let t=k(e,"hombro");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[ue({x:-3.75,z:-1.8,eyes:[[0,"look"],[t,"heart"]]}),Xe({x:-3.2,z:-1.8,eyes:[[0,"happy"],[t,"shut"]],pose:(i,s)=>i.pose({lean:-8*pt(t-.3,t+.3,s),head:-14*pt(t-.3,t+.3,s)})})],extra:i=>{let s=We(i,["EL ATARDECER"],1.2,[-3.45,2.1,-1.8]);return{update:(r,o,a)=>$(s,r,k(e,"atardecer")-.2,t-.1,a)}},c:[[-3.4,1.6,1.4],[-3.45,1.4,-1.8],[-3.4,1.55,.9],[-3.45,1.4,-1.8]],range:3,look:{bloom:.5,exposure:.98}}});ie(69,(n,e)=>{let t=k(e,"ritmo");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[],extra:i=>{let s=Yn(i,.8,"#5FD08A"),r=Yn(i,.8);s.position.set(-.6,1.5,-.5),r.position.set(.6,1.5,-.5);let o=_e(i,["AL MISMO RITMO"],1.6,[0,2.3,-.4],Wt);return{update:(a,l,c)=>{let h=pt(t-2.5,t,a);s.scale.setScalar(Zn(a,90)),r.scale.setScalar(Zn(a+(1-h)*.27,90+(1-h)*25)),$(o,a,t-.3,99,c)}}},c:[[0,1.5,2.8],[0,1.6,-.5],[0,1.5,2.4],[0,1.6,-.5]],range:2,blur:10,look:{bloom:.5}}});ie(70,(n,e)=>{let t=k(e,"sensores"),i=k(e,"respiracion");return{amb:"lab",fov:32,atores:[Qi(5,{x:.9,z:-.2,eyes:[[0,"look"],[i,"happy"]]}),li(1,{x:-.9,z:-.2,eyes:[[0,"look"],[i,"happy"]]})],extra:(s,r,o)=>{let a=Re(gE(),1.9,.8866666666666667);a.position.set(0,2,-1.4),a.renderOrder=4,s.add(a);let l=o.map(()=>{let d=at("#5FD08A",.25,0);return s.add(d),d}),c=_e(s,["UNIVERSIDAD DE CALIFORNIA \xB7 DAVIS"],2.6,[0,.9,.2],In),h=Qt(s,e,[[["CORAZ\xD3N Y RESPIRACI\xD3N"],"corazon","w",[0,.9,.2],2.1],[["\xA1SE PARECEN MUCHO!"],"parecian","p",[0,.9,.2],1.8,1]]);return{update:(d,u,p)=>{$(c,d,k(e,"universidad")-.2,k(e,"corazon")-.2,p),h(d,p),o.forEach((g,E)=>{let m=new I;g.torso.getWorldPosition(m),l[E].position.set(m.x,m.y-.45,m.z+.2),l[E].material.opacity=d>t?.5+.5*Math.abs(Math.sin(d*5)):0}),a.visible=d>t-.3}}},c:[[0,1.7,3.8],[0,1.6,-.5],[0,1.65,3.3],[0,1.6,-.5]],range:3}});ie(71,(n,e)=>({amb:"parque",ambo:{dusk:!0},fov:30,atores:[ue({x:-3.85,z:-1.8,eyes:[[0,"wide"]]}),Xe({x:-3.05,z:-1.8,eyes:[[0,"smug"]],pose:fn})],extra:t=>{let i=Ji(t,["\xBFDESDE CU\xC1NDO","TE GUSTO?"],1.3,[-2.9,2.05,-1.7],64);return{update:(s,r,o)=>$(i,s,.5,99,o)}},c:[[-3.4,1.6,1.2],[-3.45,1.45,-1.8],[-3.4,1.6,.8],[-3.45,1.45,-1.8]],range:3,look:{bloom:.5}}));_r(72,["cayeron"],[(n,e)=>({amb:"parque",ambo:{dusk:!0},fov:30,atores:[ue({x:-3.75,z:-1.8,eyes:[[0,"happy"]],pose:fn}),Xe({x:-3.2,z:-1.8,eyes:[[0,"look"]]})],extra:t=>{let i=_e(t,["DESDE EL PRIMER D\xCDA"],1.8,[-3.45,2.3,-1.7],Wt);return{update:(s,r,o)=>$(i,s,.2,99,o)}},c:[[-3.4,1.6,1.2],[-3.45,1.45,-1.8],[-3.4,1.6,.9],[-3.45,1.45,-1.8]],range:3,look:{bloom:.5}}),(n,e)=>{let t=k(e,"paralizado");return{...ns(),look:Pa,atores:[Xe({x:.5,z:-.3,eyes:[[0,"wide"],[1.2,"sad"]],pose:i=>i.pose({armL:[40,60],armR:[40,60]})}),ue({x:-.9,z:-.3,eyes:[[0,"wide"]],pose:i=>i.pose({armL:[20,10],armR:[20,10]})})],extra:i=>{let s=[0,1,2,3,4].map(a=>{let l=T(.3,.06,.22,C(["#C9361F","#2F5A9A","#F2C14E","#3AA860","#8A6AC8"][a]),0,0,0);return i.add(l),l}),r=_e(i,["PARALIZADO"],1.3,[-.9,2.2,-.3],In),o=We(i,["EL PRIMER D\xCDA"],1.3,[.3,2.4,-.8]);return{update:(a,l,c)=>{s.forEach((h,d)=>{let u=pt(.1+d*.08,.7+d*.08,a);h.position.set(.5+(d-2)*.18*u,zt(1.2,.05+d*.01,u*u),-.1+d*.05*u),h.rotation.set(u*(d+1),u*2,0)}),$(o,a,.1,99,c),$(r,a,t-.3,99,c)}}},c:[[0,1.6,3.2],[-.2,1.3,-.3],[0,1.6,2.7],[-.2,1.3,-.3]],range:3}}]);ie(73,(n,e)=>{let t=k(e,"pense");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[ue({x:-3.75,z:-1.8,eyes:[[0,"smug"]]}),Xe({x:-3.2,z:-1.8,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[70,80],armR:[12,8],bob:Math.abs(Math.sin(s*12))*.02})})],extra:i=>{let s=$u(i,"\xBFEras t\xFA?",1.1,[-3,2.1,-1.7]),r=Ji(i,["\xA1PENS\xC9 QUE ERAS","UN MALEDUCADO!"],1.4,[-3,2.05,-1.7],64);return{update:(o,a,l)=>{$(s,o,.4,t-.1,l),$(r,o,t,99,l)}}},c:[[-3.4,1.6,1.2],[-3.45,1.45,-1.8],[-3.4,1.6,.9],[-3.45,1.45,-1.8]],range:3,look:{bloom:.5}}});hi(74,20,"HORA 20","QUEDAN 4");ie(75,(n,e)=>{let t=k(e,"quedan");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[ue({x:-.5,z:-.3,eyes:[[0,"look"],[t,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[80,60],head:-8})})],extra:(i,s,r)=>{let o=es(["QUEDAN","4 HORAS"],{hora:"20:00",bg:"#2A1830"});o.scale.setScalar(.5),i.add(o);let a=tf(i,[.7,2.2,-.3],"QUEDAN 4 HORAS",1.5);return{update:(l,c,h)=>{ji(o,r[0],.05),o.lookAt(h.position),$(a,l,t-.2,99,h)}}},c:[[0,1.6,3],[0,1.5,-.3],[0,1.6,2.5],[0,1.5,-.3]],range:2.5,look:{bloom:.45}}});ie(76,(n,e)=>{let t=k(e,"medianoche");return{amb:"gris",fov:30,atores:[ue({x:-.5,z:-.3,eyes:[[0,"wide"],[t,"sad"]],pose:(i,s)=>i.pose({armL:[70,80],armR:[70,80],bob:Math.sin(s*30)*.004})})],extra:i=>{let s=Jr(.8,11.9);s.position.set(.8,1.6,-.5),i.add(s);let r=_e(i,["A MEDIANOCHE SE ACABA"],2.1,[0,2.4,-.4],wn);return{update:(o,a,l)=>{s.set(11.75+o*.03),$(r,o,t-.2,99,l)}}},c:[[0,1.6,3.2],[0,1.5,-.3],[0,1.6,2.7],[0,1.5,-.3]],range:2.5,look:EE}});ie(77,(n,e)=>{let t=k(e,"existido");return{...ns(),look:{...Pa,exposure:.85},atores:[ue({x:-.6,z:-.2,eyes:[[0,"sad"]]}),Xe({eyes:[[0,"lookl"]],move:i=>[zt(-2.6,2.6,i/n),0,.4],pose:(i,s)=>i.walk(s)})],extra:i=>{let s=We(i,["MA\xD1ANA\u2026"],1,[-.6,2.25,-.2]),r=_e(i,["COMO SI HOY NO HUBIERA EXISTIDO"],2.6,[0,2.25,-.4],In);return{update:(o,a,l)=>{$(s,o,.1,t-1.6,l),$(r,o,t-1.5,99,l)}}},c:[[0,1.6,3.6],[0,1.4,-.2],[0,1.6,3.1],[0,1.4,-.2]],range:3}});ie(78,(n,e)=>{let t=k(e,"no");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[ue({x:-.6,z:-.3,eyes:[[0,"look"],[t,"sad"]]}),Xe({x:.7,z:-.3,eyes:[[0,"happy"]]})],extra:i=>{let s=Ji(i,["\xABESTO NO ES REAL\u2026\xBB"],1.5,[-.4,2.3,-.2],60);return{update:(r,o,a)=>$(s,r,.4,99,a)}},c:[[0,1.6,3.2],[0,1.5,-.3],[0,1.6,2.7],[0,1.5,-.3]],range:3,look:{bloom:.45}}});_r(79,["asi"],[(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=Yn(t,.9);i.position.set(0,1.5,-.5);let s=_e(t,["\xBFY SI SE ROMPE TODO?"],1.9,[0,2.35,-.4],wn);return{update:(r,o,a)=>{let l=pt(.8,1.4,r);i.position.x=Math.sin(r*40)*.02*l,i.rotation.z=l*.15,$(s,r,.3,99,a)}}},c:[[0,1.6,2.8],[0,1.6,-.5],[0,1.6,2.4],[0,1.6,-.5]],range:2.5,blur:6}),(n,e)=>{let t=k(e,"aprovechar");return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[ue({x:-.6,z:-.3,eyes:[[0,"flat"],[t,"happy"]],pose:(i,s)=>s<t?i.pose({armL:[12,8],armR:[120,120]}):i.pose()}),Xe({x:.7,z:-.3,eyes:[[0,"happy"]]})],extra:i=>{let s=We(i,["SHHH\u2026"],.8,[-.6,2.25,-.2]),r=_e(i,["APROVECHAR CADA MINUTO"],2.1,[0,2.3,-.3],Wt),o=Jt(i,12,"#FFE27A");return{update:(a,l,c)=>{$(s,a,.2,t-.2,c),$(r,a,t-.1,99,c),o(a,[0,1.6,-.2,1.1],a>t?1:0)}}},c:[[0,1.6,3.2],[0,1.5,-.3],[0,1.6,2.7],[0,1.5,-.3]],range:3,look:{bloom:.5}}}]);hi(80,21,"HORA 21","QUEDAN 3");var io=n=>{we.pasteleria(n);let e=Re(Ot(["HAMBURGUESER\xCDA"],{bg:"#C9361F",fg:"#FFE7B8",size:80,w:900,h:160}),3.2,.57);e.position.set(0,3.9,-2.98),n.add(e),to(n,0,.35,.8,1.6,.8,"#E8E2D2");let t=yh(),i=yh();t.position.set(-.45,.84,.35),i.position.set(.45,.84,.35);let s=uE();return s.position.set(-.1,.84,.45),n.add(t,i,s),s},Mr=n=>{n.add(T(1.3,2.4,.2,C("#5A3A28"),0,1.2,-1.6)),n.add(T(1.1,2.2,.05,C("#2F4A3A"),0,1.15,-1.48));let e=new nt("#FFD8A0",3,4,1.6);e.position.set(0,2.6,-1),n.add(e);let t=Re(Ot(["N\xBA 7"],{bg:"#F4F0E4",fg:"#2A2A34",size:80,w:300,h:150}),.4,.2);t.position.set(0,2.55,-1.45),n.add(t)},Ca=n=>(e,t)=>e.pose({armL:[35,45],armR:[35,45],lean:n*-5}),Sr={amb:"barrio",ambo:{night:!0}};ie(81,(n,e)=>{let t=k(e,"patatas"),i=k(e,"verdad");return{amb:"gris",fov:32,atores:[ue({x:-.6,z:-.2,eyes:[[0,"happy"],[t,"look"],[i-1,"heart"]]}),Xe({x:.6,z:-.2,eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t-.3?70+Math.sin(r*6)*25:12,60]})})],extra:s=>{let r=io(s),o=Qt(s,e,[[["SE COME TUS PATATAS"],"patatas","w",[0,2.2,-.3],1.9],[["AMOR DE VERDAD"],"verdad","p",[0,2.2,-.3],1.6,1]]);return{update:(a,l,c)=>{o(a,c),r.position.x=zt(-.1,.25,pt(t-.3,t+.8,a))}}},c:[[0,1.7,3.4],[0,1.3,-.1],[0,1.65,2.9],[0,1.3,-.1]],range:3,look:{exposure:1.05}}});ie(82,(n,e)=>({amb:"gris",fov:32,atores:[ue({x:-.6,z:-.2,eyes:[[0,"happy"]],pose:fn}),Xe({x:.6,z:-.2,eyes:[[0,"happy"]],pose:(t,i)=>fn(t,i+1)})],extra:t=>{io(t);let i=Qt(t,e,[[["DE TODO"],"todo","w",[0,2.2,-.3],1],[["\xBFQU\xC9 SER\xC9IS DE MAYORES?"],"mayores","y",[0,2.2,-.3],2.1],[["SITIOS DEL MUNDO"],"sitios","y",[0,2.2,-.3],1.6,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[.3,1.7,3.2],[0,1.3,-.1],[.1,1.65,2.8],[0,1.3,-.1]],range:3,look:{exposure:1.05}}));ie(83,(n,e)=>{let t=k(e,"minutos"),i=k(e,"cede");return{amb:"gris",fov:32,atores:[ue({x:-.6,z:-.2,eyes:[[0,"look"],[t-.8,"angry"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[80+Math.sin(r*9)*15,30]})}),Xe({x:.6,z:-.2,eyes:[[0,"look"],[t-.8,"angry"]],pose:(s,r)=>s.pose({armL:[80+Math.cos(r*9)*15,30],armR:[12,8]})})],extra:s=>{io(s);let r=Re(fE(),.9,.45);r.position.set(0,2,-.2),r.renderOrder=5,s.add(r);let o=_e(s,["\xBFES UN BOCADILLO?"],1.7,[0,2.5,-.3]),a=_e(s,["20 MINUTOS"],1.1,[-1.2,1.9,-.2],wn),l=We(s,["NADIE CEDE"],1.1,[1.2,1.9,-.2]);return{update:(c,h,d)=>{r.visible=c>.2,r.rotation.z=Math.sin(c*2)*.1,$(o,c,.4,99,d),$(a,c,t-.3,99,d),$(l,c,i-.3,99,d)}}},c:[[0,1.8,3.6],[0,1.5,-.1],[0,1.75,3.1],[0,1.5,-.1]],range:3,look:{exposure:1.05}}});ie(84,(n,e)=>{let t=k(e,"perrito"),i=k(e,"favor");return{amb:"gris",fov:34,atores:[ue({x:-.8,z:-.2,eyes:[[0,"angry"],[t,"wide"]]}),Xe({x:.4,z:-.2,eyes:[[0,"angry"],[t,"wide"]]}),iE({eyes:[[0,"flat"]],move:s=>[zt(2.4,1.3,pt(0,1.5,s)),0,.2],pose:(s,r)=>r<1.5?s.walk(r):vh(s)}),li(2,{x:-2.2,z:-1.5,eyes:[[0,"wide"]]}),li(6,{x:2.3,z:-1.6,eyes:[[0,"wide"]]})],extra:s=>{io(s);let r=Ji(s,["ES UN PERRITO","CALIENTE."],1.4,[1.1,2.3,.2],64),o=Ji(s,["\xA1EST\xC1IS ASUSTANDO","A LOS CLIENTES!"],1.5,[1,2.3,.2],64);return{update:(a,l,c)=>{$(r,a,t-.3,i-.1,c),$(o,a,i,99,c)}}},c:[[0,1.8,4.2],[0,1.4,-.2],[0,1.75,3.7],[0,1.4,-.2]],range:3.5,look:{exposure:1.05}}});ie(85,(n,e)=>{let t=k(e,"siendo"),i=k(e,"funcionando");return{amb:"gris",fov:30,atores:[ue({x:-.5,z:-.2,eyes:[[0,"look"],[t,"happy"]]}),Xe({x:.6,z:-.2,eyes:[[0,"heart"]]})],extra:s=>{io(s);let r=Qt(s,e,[[["UN D\xCDA ENTERO"],"dia","w",[0,2.2,-.3],1.4],[["SOLO SIENDO T\xDA"],"siendo","p",[0,2.2,-.3],1.6],[["Y FUNCIONA"],"funcionando","y",[0,2.2,-.3],1.2,1]]),o=Jt(s,12,"#FFE27A");return{update:(a,l,c)=>{r(a,c),o(a,[0,1.6,-.1,1],a>i?1:0)}}},c:[[0,1.7,3.2],[0,1.4,-.1],[0,1.65,2.6],[0,1.4,-.1]],range:3,look:{exposure:1.05,bloom:.45}}});hi(86,23,"HORA 23","QUEDA 1");ie(87,(n,e)=>{let t=k(e,"abraza");return{...Sr,fov:30,atores:[ue({eyes:[[0,"look"],[t,"shut"]],move:i=>[zt(-.6,-.22,pt(t-.4,t,i)),0,-.6],pose:(i,s)=>s>t-.2?Ca(1)(i,s):i.pose()}),Xe({eyes:[[0,"happy"],[t,"shut"]],move:i=>[zt(.6,.22,pt(t-.4,t,i)),0,-.6],pose:(i,s)=>s>t-.2?Ca(-1)(i,s):i.pose()})],extra:i=>{Mr(i);let s=We(i,["SU PORTAL"],1,[-.9,2.2,-.6]);return{update:(r,o,a)=>$(s,r,.2,t,a)}},c:[[0,1.6,3],[0,1.45,-.6],[0,1.6,2.5],[0,1.45,-.6]],range:2.5,look:$t}});ie(88,(n,e)=>({...Sr,fov:30,atores:[ue({x:-.22,z:-.6,eyes:[[0,"shut"]],pose:Ca(1)}),Xe({x:.22,z:-.6,eyes:[[0,"shut"]],pose:Ca(-1)})],extra:t=>{Mr(t);let i=at("#FFB0C0",2.2,0);i.position.set(0,1.4,-1.2),t.add(i);let s=Qt(t,e,[[["OXITOCINA"],"oxitocina","p",[0,2.3,-.5],1.3],[["TRANQUILO"],"tranquilo","w",[0,2.3,-.5],1.1],[["EN CASA"],"casa","w",[0,2.3,-.5],1],[["A SALVO"],"salvo","y",[0,2.3,-.5],1,1]]),r=Jt(t,14,"#FFB0C0");return{update:(o,a,l)=>{s(o,l);let c=pt(k(e,"oxitocina")-.3,k(e,"oxitocina")+.8,o);i.material.opacity=.22*c,r(o,[0,1.5,-.4,.8],c)}}},c:[[0,1.6,2.8],[0,1.5,-.6],[0,1.6,2.3],[0,1.5,-.6]],range:2.5,look:{...$t,bloom:.55}}));ie(89,(n,e)=>({...Sr,fov:30,atores:[ue({x:-.5,z:-.6,eyes:[[0,"look"]]}),Xe({x:.5,z:-.6,eyes:[[0,"happy"]],pose:fn})],extra:t=>{Mr(t);let i=Ji(t,["MA\xD1ANA NOS VEMOS,","\xBFNO?"],1.4,[.6,2.1,-.5],64);return{update:(s,r,o)=>$(i,s,.4,99,o)}},c:[[0,1.6,3],[0,1.45,-.6],[0,1.6,2.6],[0,1.45,-.6]],range:2.5,look:$t}));ie(90,(n,e)=>{let t=k(e,"nada"),i=k(e,"si");return{...Sr,fov:30,atores:[ue({x:-.5,z:-.6,eyes:[[0,"look"],[t-.8,"sad"],[i,"small"]],pose:s=>s.pose({armL:[12,8],armR:[130,100],head:8})}),Xe({x:.5,z:-.6,eyes:[[0,"happy"]]})],extra:s=>{Mr(s);let r=Qt(s,e,[[["\xBFQU\xC9 LE DIGO?"],.2,"w",[-.5,2.25,-.5],1.3],[["NO SE ACORDAR\xC1 DE NADA"],"acordara","b",[-.3,2.25,-.5],2.1],[["\xBFO S\xCD?"],"si","p",[-.5,2.25,-.5],.8,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,3],[0,1.45,-.6],[0,1.6,2.6],[0,1.45,-.6]],range:2.5,look:$t}});ie(91,(n,e)=>{let t=k(e,"hoy");return{...Sr,fov:30,atores:[ue({x:-.5,z:-.6,eyes:[[0,"happy"]],pose:fn}),Xe({x:.5,z:-.6,eyes:[[0,"look"],[t+1,"heart"]]})],extra:(i,s,r)=>{Mr(i);let o=Er(r[1]),a=Ji(i,["PASE LO QUE PASE","MA\xD1ANA\u2026"],1.4,[-.4,2.1,-.5],64),l=Ji(i,["HOY HA SIDO EL MEJOR","D\xCDA DE MI VIDA"],1.6,[-.3,2.1,-.5],64);return{update:(c,h,d)=>{o(pt(t+.5,t+1.5,c)),$(a,c,.2,t-.1,d),$(l,c,t,99,d)}}},c:[[0,1.6,3],[0,1.45,-.6],[0,1.6,2.6],[0,1.45,-.6]],range:2.5,look:$t}});ie(92,(n,e)=>{let t=k(e,"vas"),i=k(e,"despacio");return{...Sr,fov:32,atores:[Xe({eyes:[[0,"happy"]],move:s=>s>1.6?[0,0,30]:[zt(.4,0,pt(0,1.2,s)),0,zt(-.6,-1.4,pt(0,1.5,s))],pose:(s,r)=>s.walk(r)}),ue({eyes:[[0,"happy"]],move:s=>[zt(-.4,-2.2,pt(t,n,s)),0,zt(-.6,.4,pt(t,n,s))],pose:(s,r)=>r>t?s.walk(r*.5):s.pose()})],extra:s=>{Mr(s);let r=We(s,["MUY DESPACIO"],1.3,[-1.4,2.2,-.2]);return{update:(o,a,l)=>$(r,o,i-.2,99,l)}},c:[[0,1.7,3.6],[-.4,1.4,-.6],[-.4,1.7,3.2],[-.8,1.4,-.4]],range:3,look:$t}});ie(93,(n,e)=>{let t=k(e,"59"),i=k(e,"punto");return{amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"look"],[i,"wide"]],pose:s=>s.pose({armL:[60,70],armR:[60,70],head:-8})})],extra:(s,r,o)=>{let a=Ar(s,o[0]),l=es(["",""],{hora:"23:59",bg:"#2A1830"});l.scale.setScalar(.35),s.add(l);let c=_e(s,["23:59"],1,[.9,2.1,-.6],{bg:"#1E2230",fg:"#FF7A8A",size:96,w:420}),h=_e(s,["00:00"],1,[.9,2.1,-.6],{bg:"#C9361F",fg:"#fff",size:96,w:420}),d=We(s,["MEDIANOCHE"],1.3,[-.9,2.1,-.6]);return{update:(u,p,g)=>{a(),ji(l,o[0],-.02),l.lookAt(g.position),$(d,u,0,t-.5,g),$(c,u,t-.2,i-.1,g),$(h,u,i,99,g),Fa(g,u>i&&u<i+.4?.02:0,u)}}},c:[[.4,1.6,3],[0,1.4,-.4],[.2,1.55,2.3],[0,1.45,-.4]],range:2.5,look:$t}});ie(94,(n,e)=>{let t=k(e,"tiempo"),i=k(e,"nada");return{amb:"gris",fov:28,k:1,atores:[],extra:s=>{let r=ci(s,[0,1.5,-.5],1.15,[["l","Hoy ha sido incre\xEDble \u2665",0],["s","TIEMPO TERMINADO",t-.1]],{hora:"00:00"}),o=We(s,["Y NADA M\xC1S"],1.1,[1.1,1,-.2]);return{update:(a,l,c)=>{r.userData.upd(a),$(o,a,i-.2,99,c)}}},c:[[0,1.5,4.3],[0,1.5,-.5],[0,1.5,3.9],[0,1.5,-.5]],range:2,blur:4,look:$t}});ie(95,(n,e)=>{let t=k(e,"conectada"),i=k(e,"corazones"),s=k(e,"audios"),r=k(e,"lista");return{amb:"gris",fov:28,k:1,atores:[],extra:o=>{let a=ci(o,[0,1.5,-.5],1.15,[["l","@heart",0],["r","@smile",0],["l","\u266A Audio \xB7 0:40",0],["l","Las 36 preguntas",0],["l","Hoy ha sido incre\xEDble \u2665",0],["s","TIEMPO TERMINADO",0]],{hora:"00:01",max:6}),l=Qt(o,e,[[["LOS CORAZONES"],"corazones","p",[1.2,2.2,-.2],1.3],[["LOS AUDIOS"],"audios","p",[1.2,2.2,-.2],1.1],[["LAS 36 PREGUNTAS"],"lista","p",[1.2,2.2,-.2],1.5],[["DESCONECTADA"],"conectada","b",[1.2,2.2,-.2],1.4,1]]);return{update:(c,h,d)=>{a.userData.upd(c,{off:c>t-.5}),l(c,d)}}},c:[[.3,1.5,4.3],[.3,1.5,-.5],[.3,1.5,3.9],[.3,1.5,-.5]],range:2,blur:4,look:$t}});ie(96,(n,e)=>({amb:"cuartoYo",ambo:{night:!0},fov:30,atores:[ue({x:0,z:-.4,eyes:[[0,"sad"]],pose:t=>t.pose({armL:[12,8],armR:[12,8],head:-6})})],extra:t=>{let i=Jr(.5,4);i.position.set(-1,2,-.8),t.add(i);let s=We(t,["NO DUERMES"],1.1,[.9,2.1,-.5]);return{update:(r,o,a)=>{i.set(1+r*1.5),$(s,r,.2,99,a)}}},c:[[0,1.6,3],[0,1.5,-.4],[0,1.6,2.6],[0,1.5,-.4]],range:2.5,look:{exposure:.85,bloom:.35,vig:.65}}));ie(97,(n,e)=>{let t=k(e,"pasas");return{amb:"barrio",fov:32,look:{exposure:.95},atores:[Xe({x:.6,z:-.8,eyes:[[0,"happy"]],pose:fn}),Qi(1,{x:1.3,z:-1,eyes:[[0,"happy"]]}),Qi(3,{x:-.1,z:-1.1,eyes:[[0,"happy"]]}),ue({eyes:[[0,"sad"]],move:i=>[zt(-2.6,1.6,pt(t-2,n+.5,i)),0,.3],pose:(i,s)=>i.walk(s)})],extra:i=>{ts(i);let s=We(i,["AL D\xCDA SIGUIENTE"],1.6,[-.6,2.4,-.6]),r=_e(i,["EST\xD3MAGO ENCOGIDO"],1.8,[-.6,2.4,-.6],In);return{update:(o,a,l)=>{$(s,o,.1,k(e,"estomago")-.2,l),$(r,o,k(e,"estomago"),t,l)}}},c:[[0,1.7,4.2],[0,1.4,-.4],[.4,1.7,3.7],[.4,1.4,-.4]],range:3.5}});ie(98,(n,e)=>({amb:"barrio",fov:30,look:{exposure:.9},atores:[Xe({x:.5,z:-.6,eyes:[[0,"lookl"]],pose:fn}),ue({x:-.5,z:.1,eyes:[[0,"sad"]]})],extra:t=>{ts(t);let i=_e(t,["NO TE MIRA"],1.2,[-.5,2.15,.1],In);return{update:(s,r,o)=>$(i,s,.1,99,o)}},c:[[-.2,1.6,3],[0,1.45,-.3],[-.2,1.6,2.7],[0,1.45,-.3]],range:2.5}));ie(99,(n,e)=>{let t=k(e,"nada");return{...ns(),look:{exposure:.85,vig:.65},atores:[Zu({x:1.8,z:-2.6,eyes:[[0,"look"]],pose:fn}),ue({x:-.5,z:-.5,eyes:[[0,"sad"]],pose:i=>i.pose({armL:[12,8],armR:[12,8],head:12})})],extra:i=>{no(i),yr(i,[-.5,.6],-.1);let s=_e(i,["SE TE CAE EL MUNDO"],1.8,[-.5,2.2,-.3],In),r=We(i,["NO OYES NADA"],1.3,[-.5,2.2,-.3]);return{update:(o,a,l)=>{$(s,o,.2,k(e,"sientas"),l),$(r,o,t-.2,99,l)}}},c:[[-.3,1.7,3],[-.3,1.4,-.8],[-.3,1.65,2.5],[-.3,1.4,-.8]],range:3}});ie(100,(n,e)=>{let t=k(e,"nota");return{...ns(),look:{exposure:.9},atores:[ue({x:-.5,z:-.5,eyes:[[0,"sad"],[t,"wide"],[k(e,"abres"),"down"]]})],extra:i=>{no(i),yr(i,[-.5,.6],-.1);let s=ai(i,[""],.25,[0,.82,.1]);s.rotation.x=-Math.PI/2;let r=We(i,["UNA NOTA"],1,[-.5,2.1,-.3]);return{update:(o,a,l)=>{s.position.x=zt(.8,-.45,pt(t-.8,t+.3,o)),$(r,o,t,99,l)}}},c:[[-.3,1.65,2.9],[-.4,1.2,-.2],[-.3,1.6,2.5],[-.4,1.2,-.2]],range:2}});ie(101,(n,e)=>{let t=k(e,"no",1.2);return{amb:"aula",fov:30,k:1,atores:[],extra:i=>{let s=ai(i,["No s\xE9 qu\xE9","me pas\xF3 ayer."],1.6,[0,1.5,-.5],90),r=ai(i,["No me acuerdo","de casi nada."],1.6,[0,1.5,-.5],90);return{update:o=>{s.visible=o<t,r.visible=o>=t}}},c:[[0,1.5,2.2],[0,1.5,-.5],[0,1.5,1.9],[0,1.5,-.5]],range:1.5,blur:6}});ie(102,(n,e)=>{let t=k(e,"cayo"),i=k(e,"rei"),s=k(e,"eras");return{amb:"aula",fov:30,k:1,atores:[],extra:r=>{let o=[ai(r,["Pero me acuerdo","de una persona\u2026"],1.6,[0,1.5,-.5],84),ai(r,["\u2026que se cay\xF3","delante de todo","el comedor"],1.6,[0,1.5,-.5],80),ai(r,["y me re\xED tanto","que me doli\xF3","la tripa"],1.6,[0,1.5,-.5],80),ai(r,["\xBFEras t\xFA? \u2665"],1.6,[0,1.5,-.5],120)],a=[0,t-.3,i-.2,s-.2],l=Jt(r,10,"#FFB0C0");return{update:c=>{o.forEach((h,d)=>h.visible=c>=a[d]&&(d===3||c<a[d+1])),l(c,[0,1.5,-.3,1],c>s?1:0)}}},c:[[0,1.5,2.2],[0,1.5,-.5],[0,1.5,1.9],[0,1.5,-.5]],range:1.5,blur:6}});_r(103,["pupilas"],[(n,e)=>({...ns(),atores:[ue({x:-1.6,z:.3,eyes:[[0,"down"],[.6,"wide"]]}),Xe({x:1.6,z:-1.6,eyes:[[0,"look"]]})],extra:(t,i,s)=>{no(t),yr(t,[-1.6],.6),yr(t,[1.6],-1.2);let r=Er(s[1]),o=We(t,["TE EST\xC1 MIRANDO"],1.5,[1.6,2.4,-1.6]);return{update:(a,l,c)=>{r(.6),$(o,a,k(e,"mirando")-.2,99,c)}}},c:[[-2.4,1.8,2.6],[1.4,1.4,-1.6],[-2.2,1.75,2.2],[1.5,1.45,-1.6]],range:4}),(n,e)=>({amb:"aula",fov:28,atores:[Xe({x:0,z:-.3,eyes:[[0,"wide"]]})],extra:(t,i,s)=>{let r=Er(s[0]),o=Sh(t,[-1.1,1.8,-.2],.9),a=_e(t,["PUPILAS MUY GRANDES"],1.7,[.4,2.25,-.2],Wt);return{update:(l,c,h)=>{r(.7),o.userData.set(.95),$(a,l,.2,99,h)}}},c:[[0,1.65,2.6],[0,1.6,-.3],[0,1.65,2.2],[0,1.6,-.3]],range:2})]);ie(104,(n,e)=>{let t=k(e,"contaste"),i=k(e,"eras"),s=k(e,"quedo");return{amb:"plaza",ambo:{dusk:!0},fov:30,atores:[ue({x:-.6,z:-.3,eyes:[[0,"look"],[i,"happy"]]}),Xe({x:.6,z:-.3,eyes:[[0,"happy"]]})],extra:r=>{let o=Re(Mh(24),1.4,1.4);o.position.set(0,2.3,-1.2),r.add(o);let a=_e(r,["EL HECHIZO: 24 HORAS"],1.9,[0,2.3,-1.1],{bg:"#1E2230",fg:"#FF7A8A"}),l=_e(r,["ERAS T\xDA"],1.1,[0,2.3,-.3],Wt),c=We(r,["Y ESO SE QUED\xD3"],1.4,[0,2.3,-.3]),h=Jt(r,16,"#FFE27A");return{update:(d,u,p)=>{o.visible=d<t,o.material.opacity=1-pt(t-1.5,t,d),$(a,d,.3,t-.2,p),$(l,d,i-.1,s-.3,p),$(c,d,s-.2,99,p),h(d,[0,1.6,-.2,1.2],d>i?1:0)}}},c:[[0,1.7,3.6],[0,1.5,-.3],[0,1.65,3],[0,1.5,-.3]],range:3,look:{bloom:.55}}});ie(105,(n,e)=>{let t=k(e,"harias"),i=k(e,"contarias"),s=k(e,"cuentamelo");return{amb:"cuartoYo",fov:32,atores:[ue({x:-.5,z:-.3,eyes:[[0,"look"],[s,"happy"]],pose:(r,o)=>o>s?gr(r,o):vh(r)})],extra:r=>{let o=Qt(r,e,[[["\xBFQU\xC9 HAR\xCDAS CON 24 HORAS?"],"harias","y",[.6,2.2,-.3],2.3],[["\xBFSE LO CONTAR\xCDAS TODO?"],"contarias","p",[.6,2.2,-.3],2.1],[["CU\xC9NTAMELO EN LOS COMENTARIOS"],"cuentamelo","w",[.4,2.2,-.3],2.5,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.6,3.4],[0,1.5,-.3],[0,1.6,2.9],[0,1.5,-.3]],range:3}});ie(106,(n,e)=>{let t=k(e,"suscribete");return{amb:"plaza",ambo:{dusk:!0},fov:32,atores:[ue({x:-1.4,z:-.3,eyes:[[0,"happy"]],pose:gr}),Xe({x:-.6,z:-.3,eyes:[[0,"heart"]],pose:(i,s)=>gr(i,s+1)})],extra:i=>{let s=gh(2.2);s.position.set(1.1,1.8,-1),i.add(s);let r=Jt(i,14,"#FFE27A");return{update:(o,a,l)=>{let c=pt(t-.3,t,o);s.scale.setScalar(Math.max(.01,c)),s.rotation.z=o>t+.6&&o<t+1.6?Math.sin(o*40)*.05:0,r(o,[1.1,1.8,-.9,1.1],pt(t,t+.3,o))}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3,look:{bloom:.5}}});function yE(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new ma(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=vr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=vr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(yE(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=vr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
