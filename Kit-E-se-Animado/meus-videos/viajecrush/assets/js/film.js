var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var fh="170";var Zf=0,hd=1,Jf=2;var _u=1,ph=2,bi=3,Qi=0,sn=1,wt=2,fi=0,ei=1,bn=2,dd=3,ud=4,$f=5,Es=100,Qf=101,Kf=102,jf=103,e0=104,t0=200,n0=201,i0=202,s0=203,Gl=204,Vl=205,r0=206,o0=207,a0=208,l0=209,c0=210,h0=211,d0=212,u0=213,f0=214,Wl=0,Xl=1,ql=2,tr=3,Yl=4,Zl=5,Jl=6,$l=7,Mu=0,p0=1,m0=2,pi=0,g0=1,E0=2,y0=3,v0=4,A0=5,_0=6,M0=7;var Su=300,nr=301,ir=302,Ql=303,Kl=304,xa=306,on=1e3,vs=1001,jl=1002,Un=1003,S0=1004;var _o=1005;var di=1006,rl=1007;var As=1008;var Ci=1009,Tu=1010,bu=1011,Xr=1012,mh=1013,Fi=1014,ui=1015,Rn=1016,gh=1017,Eh=1018,sr=1020,wu=35902,xu=1021,Ru=1022,jn=1023,Cu=1024,Fu=1025,Ks=1026,rr=1027,yh=1028,vh=1029,Pu=1030,Ah=1031;var _h=1033,Ko=33776,jo=33777,ea=33778,ta=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,hc=37811,dc=37812,uc=37813,fc=37814,pc=37815,mc=37816,gc=37817,Ec=37818,yc=37819,vc=37820,Ac=37821,na=36492,_c=36494,Mc=36495,Iu=36283,Sc=36284,Tc=36285,bc=36286;var ia=2300,wc=2301,ol=2302,fd=2400,pd=2401,md=2402;var T0=3200,pr=3201;var Lu=0,b0=1,Zi="",zt="srgb",ts="srgb-linear",Ra="linear",Ft="srgb";var Is=7680;var gd=519,w0=512,x0=513,R0=514,Du=515,C0=516,F0=517,P0=518,I0=519,xc=35044;var Ed="300 es",xi=2e3,sa=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var al=Math.PI/180,ra=180/Math.PI;function $i(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function yn(n,e,t){return Math.max(e,Math.min(t,n))}function L0(n,e){return(n%e+e)%e}function ll(n,e,t){return(1-t)*n+t*e}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],A=s[1],v=s[4],y=s[7],L=s[2],C=s[5],w=s[8];return r[0]=o*E+a*A+l*L,r[3]=o*m+a*v+l*C,r[6]=o*p+a*y+l*w,r[1]=c*E+h*A+d*L,r[4]=c*m+h*v+d*C,r[7]=c*p+h*y+d*w,r[2]=u*E+f*A+g*L,r[5]=u*m+f*v+g*C,r[8]=u*p+f*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cl.makeScale(e,t)),this}rotate(e){return this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cl=new je;function Uu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function D0(){let n=oa("canvas");return n.style.display="block",n}var yd={};function zr(n){n in yd||(yd[n]=!0,console.warn(n))}function U0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function N0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function B0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Et={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ft&&(n.r=Ri(n.r),n.g=Ri(n.g),n.b=Ri(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ft&&(n.r=js(n.r),n.g=js(n.g),n.b=js(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zi?Ra:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vd=[.64,.33,.3,.6,.15,.06],Ad=[.2126,.7152,.0722],_d=[.3127,.329],Md=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[ts]:{primaries:vd,whitePoint:_d,transfer:Ra,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:Ad,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:vd,whitePoint:_d,transfer:Ft,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:Ad,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});var Ls,Rc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=oa("canvas")),Ls.width=e.width,Ls.height=e.height;let i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=oa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O0=0,aa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hl(s[o].image)):r.push(hl(s[o]))}else r=hl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var H0=0,wn=class n extends Ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=vs,s=vs,r=di,o=As,a=jn,l=Ci,c=n.DEFAULT_ANISOTROPY,h=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=$i(),this.name="",this.source=new aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case on:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case on:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Su;wn.DEFAULT_ANISOTROPY=1;var It=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,L=(p+1)/2,C=(h+u)/4,w=(d+E)/4,F=(g+m)/4;return v>y&&v>L?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=w/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=w/r,s=F/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(d-E)/A,this.z=(u-h)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cc=class extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},la=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fc=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,A=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),C=Math.atan2(L,p*A);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let y=a*A;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new P,Td=new ji,Pi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),So.subVectors(this.max,Cr),Ds.subVectors(e.a,Cr),Us.subVectors(e.b,Cr),Ns.subVectors(e.c,Cr),Gi.subVectors(Us,Ds),Vi.subVectors(Ns,Us),hs.subVectors(Ds,Ns);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-hs.z,hs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,hs.z,0,-hs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-hs.y,hs.x,0];return!ul(t,Ds,Us,Ns,So)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Ds,Us,Ns,So))?!1:(To.crossVectors(Gi,Vi),t=[To.x,To.y,To.z],ul(t,Ds,Us,Ns,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ai=[new P,new P,new P,new P,new P,new P,new P,new P],$n=new P,Mo=new Pi,Ds=new P,Us=new P,Ns=new P,Gi=new P,Vi=new P,hs=new P,Cr=new P,So=new P,To=new P,ds=new P;function ul(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ds.fromArray(n,r);let a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),h=i.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var z0=new Pi,Fr=new P,fl=new P,Ii=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):z0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(fl)),this.expandByPoint(Fr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new P,pl=new P,bo=new P,Wi=new P,ml=new P,wo=new P,gl=new P,qr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){pl.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(pl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=Wi.dot(this.direction),l=-Wi.dot(bo),c=Wi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pl).addScaledVector(bo,u),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let i=_i.dot(this.direction),s=_i.dot(_i)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,s,r){ml.subVectors(t,e),wo.subVectors(i,e),gl.crossVectors(ml,wo);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);let l=a*this.direction.dot(wo.crossVectors(Wi,wo));if(l<0)return null;let c=a*this.direction.dot(ml.cross(Wi));if(c<0||l+c>o)return null;let h=-a*Wi.dot(gl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,G0)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xi.crossVectors(i,Ln),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xi.crossVectors(i,Ln)),Xi.normalize(),xo.crossVectors(Ln,Xi),s[0]=Xi.x,s[4]=xo.x,s[8]=Ln.x,s[1]=Xi.y,s[5]=xo.y,s[9]=Ln.y,s[2]=Xi.z,s[6]=xo.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],A=i[3],v=i[7],y=i[11],L=i[15],C=s[0],w=s[4],F=s[8],S=s[12],_=s[1],I=s[5],H=s[9],k=s[13],X=s[2],te=s[6],Z=s[10],oe=s[14],Y=s[3],fe=s[7],Me=s[11],Oe=s[15];return r[0]=o*C+a*_+l*X+c*Y,r[4]=o*w+a*I+l*te+c*fe,r[8]=o*F+a*H+l*Z+c*Me,r[12]=o*S+a*k+l*oe+c*Oe,r[1]=h*C+d*_+u*X+f*Y,r[5]=h*w+d*I+u*te+f*fe,r[9]=h*F+d*H+u*Z+f*Me,r[13]=h*S+d*k+u*oe+f*Oe,r[2]=g*C+E*_+m*X+p*Y,r[6]=g*w+E*I+m*te+p*fe,r[10]=g*F+E*H+m*Z+p*Me,r[14]=g*S+E*k+m*oe+p*Oe,r[3]=A*C+v*_+y*X+L*Y,r[7]=A*w+v*I+y*te+L*fe,r[11]=A*F+v*H+y*Z+L*Me,r[15]=A*S+v*k+y*oe+L*Oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],E=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+E*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],E=e[13],m=e[14],p=e[15],A=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,v=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*E*c-g*d*c+g*a*f-o*E*f-h*a*p+o*d*p,L=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=t*A+i*v+s*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return e[0]=A*w,e[1]=(E*u*r-d*m*r-E*s*f+i*m*f+d*s*p-i*u*p)*w,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*w,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*w,e[4]=v*w,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*w,e[8]=y*w,e[9]=(g*d*r-h*E*r-g*i*f+t*E*f+h*i*p-t*d*p)*w,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*p+t*a*p)*w,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*f-t*a*f)*w,e[12]=L*w,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*w,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*w,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,E=o*h,m=o*d,p=a*d,A=l*c,v=l*h,y=l*d,L=i.x,C=i.y,w=i.z;return s[0]=(1-(E+p))*L,s[1]=(f+y)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(u+p))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+v)*w,s[9]=(m-A)*w,s[10]=(1-(u+E))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),a=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,h=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(a===xi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=xi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,f=(i+s)*h,g,E;if(a===xi)g=(o+r)*d,E=-2*d;else if(a===sa)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Bs=new P,Qn=new xt,k0=new P(0,0,0),G0=new P(1,1,1),Xi=new P,xo=new P,Ln=new P,bd=new xt,wd=new ji,mi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V0=0,xd=new P,Os=new ji,Mi=new xt,Ro=new P,Pr=new P,W0=new P,X0=new ji,Rd=new P(1,0,0),Cd=new P(0,1,0),Fd=new P(0,0,1),Pd={type:"added"},q0={type:"removed"},Hs={type:"childadded",child:null},El={type:"childremoved",child:null},Jt=class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new mi,i=new ji,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ro.copy(e):Ro.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Pr,Ro,this.up):Mi.lookAt(Ro,Pr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(Mi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q0),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,X0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Jt.DEFAULT_UP=new P(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new P,Si=new P,yl=new P,Ti=new P,zs=new P,ks=new P,Id=new P,vl=new P,Al=new P,_l=new P,Ml=new It,Sl=new It,Tl=new It,Ji=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),Si.subVectors(i,t),yl.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(Si),l=Kn.dot(yl),c=Si.dot(Si),h=Si.dot(yl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ml.setScalar(0),Sl.setScalar(0),Tl.setScalar(0),Ml.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),Tl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ml,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(Tl,r.z),o}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),Si.subVectors(e,t),Kn.cross(Si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Kn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,i),ks.subVectors(r,i),vl.subVectors(e,i);let l=zs.dot(vl),c=ks.dot(vl);if(l<=0&&c<=0)return t.copy(i);Al.subVectors(e,s);let h=zs.dot(Al),d=ks.dot(Al);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(zs,o);_l.subVectors(e,r);let f=zs.dot(_l),g=ks.dot(_l);if(g>=0&&f<=g)return t.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ks,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Id.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Id,a);let p=1/(m+E+u);return o=E*p,a=u*p,t.copy(i).addScaledVector(zs,o).addScaledVector(ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=L0(e,1),t=yn(t,0,1),i=yn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bl(o,r,e+1/3),this.g=bl(o,r,e),this.b=bl(o,r,e-1/3)}return Et.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=Nu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Et.fromWorkingColorSpace(En.copy(this),e),Math.round(yn(En.r*255,0,255))*65536+Math.round(yn(En.g*255,0,255))*256+Math.round(yn(En.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=zt){Et.fromWorkingColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(Co);let i=ll(qi.h,Co.h,t),s=ll(qi.s,Co.s,t),r=ll(qi.l,Co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new ce;ce.NAMES=Nu;var Y0=0,gi=class extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=$i(),this.name="",this.blending=ei,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Vl,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rt=class extends gi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new P,Fo=new he,rn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xc,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}};var ha=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var da=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var vt=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Z0=0,kn=new xt,wl=new Jt,Gs=new P,Dn=new Pi,Ir=new Pi,nn=new P,qt=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?da:ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Dn.min,Ir.min),Dn.expandByPoint(nn),nn.addVectors(Dn.max,Ir.max),Dn.expandByPoint(nn)):(Dn.expandByPoint(Ir.min),Dn.expandByPoint(Ir.max))}Dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),nn.add(Gs)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new P,l[F]=new P;let c=new P,h=new P,d=new P,u=new he,f=new he,g=new he,E=new P,m=new P;function p(F,S,_){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[F].add(E),a[S].add(E),a[_].add(E),l[F].add(m),l[S].add(m),l[_].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,S=A.length;F<S;++F){let _=A[F],I=_.start,H=_.count;for(let k=I,X=I+H;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new P,y=new P,L=new P,C=new P;function w(F){L.fromBufferAttribute(s,F),C.copy(L);let S=a[F];v.copy(S),v.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(C,S);let I=y.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,I)}for(let F=0,S=A.length;F<S;++F){let _=A[F],I=_.start,H=_.count;for(let k=I,X=I+H;k<X;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new rn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ld=new xt,us=new qr,Po=new Ii,Dd=new P,Io=new P,Lo=new P,Do=new P,xl=new P,Uo=new P,Ud=new P,No=new P,z=class extends Jt{constructor(e=new qt,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xl.fromBufferAttribute(d,e),o?Uo.addScaledVector(xl,h):Uo.addScaledVector(xl.sub(t),h))}t.add(Uo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Po.containsPoint(us.origin)===!1&&(us.intersectSphere(Po,Dd)===null||us.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Ld.copy(r).invert(),us.copy(e.ray).applyMatrix4(Ld),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=A,L=v;y<L;y+=3){let C=a.getX(y),w=a.getX(y+1),F=a.getX(y+2);s=Bo(this,p,e,i,c,h,d,C,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let A=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Bo(this,o,e,i,c,h,d,A,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=A,L=v;y<L;y+=3){let C=y,w=y+1,F=y+2;s=Bo(this,p,e,i,c,h,d,C,w,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let A=m,v=m+1,y=m+2;s=Bo(this,o,e,i,c,h,d,A,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function J0(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qi,a),l===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:n}}function Bo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Io),n.getVertexPosition(l,Lo),n.getVertexPosition(c,Do);let h=J0(n,e,t,i,Io,Lo,Do,Ud);if(h){let d=new P;Ji.getBarycoord(Ud,Io,Lo,Do,d),s&&(h.uv=Ji.getInterpolatedAttribute(s,a,l,c,d,new he)),r&&(h.uv1=Ji.getInterpolatedAttribute(r,a,l,c,d,new he)),o&&(h.normal=Ji.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Ji.getNormal(Io,Lo,Do,u.normal),h.face=u,h.barycoord=d}return h}var xn=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function g(E,m,p,A,v,y,L,C,w,F,S){let _=y/w,I=L/F,H=y/2,k=L/2,X=C/2,te=w+1,Z=F+1,oe=0,Y=0,fe=new P;for(let Me=0;Me<Z;Me++){let Oe=Me*I-k;for(let at=0;at<te;at++){let Lt=at*_-H;fe[E]=Lt*A,fe[m]=Oe*v,fe[p]=X,c.push(fe.x,fe.y,fe.z),fe[E]=0,fe[m]=0,fe[p]=C>0?1:-1,h.push(fe.x,fe.y,fe.z),d.push(at/w),d.push(1-Me/F),oe+=1}}for(let Me=0;Me<F;Me++)for(let Oe=0;Oe<w;Oe++){let at=u+Oe+te*Me,Lt=u+Oe+te*(Me+1),$=u+(Oe+1)+te*(Me+1),ae=u+(Oe+1)+te*Me;l.push(at,Lt,ae),l.push(Lt,$,ae),Y+=6}a.addGroup(f,Y,S),f+=Y,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Sn(n){let e={};for(let t=0;t<n.length;t++){let i=or(n[t]);for(let s in i)e[s]=i[s]}return e}function $0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var mr={clone:or,merge:Sn},Q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends gi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ua=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yi=new P,Nd=new he,Bd=new he,un=class extends ua{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Bd),t.subVectors(Bd,Nd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(al*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Ws=1,Pc=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new un(Vs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new un(Vs,Ws,e,t);r.layers=this.layers,this.add(r);let o=new un(Vs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new un(Vs,Ws,e,t);a.layers=this.layers,this.add(a);let l=new un(Vs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new un(Vs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fa=class extends wn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ic=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:fi});r.uniforms.tEquirect.value=t;let o=new z(s,r),a=t.minFilter;return t.minFilter===As&&(t.minFilter=di),new Pc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Rl=new P,j0=new P,ep=new je,wi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rl.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ep.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new Ii,Oo=new P,Yr=class{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],A=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-f,y-p).normalize(),i[1].setComponents(l+r,u+c,m+f,y+p).normalize(),i[2].setComponents(l+o,u+h,m+g,y+A).normalize(),i[3].setComponents(l-o,u-h,m-g,y-A).normalize(),i[4].setComponents(l-a,u-d,m-E,y-v).normalize(),t===xi)i[5].setComponents(l+a,u+d,m+E,y+v).normalize();else if(t===sa)i[5].setComponents(a,d,E,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ou(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function tp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _e=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let A=p*u-o;for(let v=0;v<c;v++){let y=v*d-r;g.push(y,-A,0),E.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){let v=A+c*p,y=A+c*(p+1),L=A+1+c*(p+1),C=A+1+c*p;f.push(v,y,C),f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(E,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
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
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,em=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`#include <common>
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
}`,l1=`#if DEPTH_PACKING == 3200
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
}`,c1=`#define DISTANCE
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
}`,h1=`#define DISTANCE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,g1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
}`,y1=`#define LAMBERT
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
}`,v1=`#define MATCAP
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
}`,A1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,M1=`#define NORMAL
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
}`,S1=`#define PHONG
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
}`,T1=`#define PHONG
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
}`,b1=`#define STANDARD
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
}`,w1=`#define STANDARD
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
}`,x1=`#define TOON
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
}`,R1=`#define TOON
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
}`,C1=`uniform float size;
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
}`,F1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,L1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:op,alphatest_pars_fragment:ap,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:hp,batching_vertex:dp,begin_vertex:up,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:Ap,color_fragment:_p,color_pars_fragment:Mp,color_pars_vertex:Sp,color_vertex:Tp,common:bp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:xp,displacementmap_pars_vertex:Rp,displacementmap_vertex:Cp,emissivemap_fragment:Fp,emissivemap_pars_fragment:Pp,colorspace_fragment:Ip,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Zp,envmap_vertex:Op,fog_vertex:Hp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:qp,lights_pars_begin:Yp,lights_toon_fragment:Jp,lights_toon_pars_fragment:$p,lights_phong_fragment:Qp,lights_phong_pars_fragment:Kp,lights_physical_fragment:jp,lights_physical_pars_fragment:em,lights_fragment_begin:tm,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:dm,metalnessmap_fragment:um,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:Em,morphtarget_vertex:ym,normal_fragment_begin:vm,normal_fragment_maps:Am,normal_pars_fragment:_m,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Fm,premultiplied_alpha_fragment:Pm,project_vertex:Im,dithering_fragment:Lm,dithering_pars_fragment:Dm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:Om,shadowmap_vertex:Hm,shadowmask_pars_fragment:zm,skinbase_vertex:km,skinning_pars_vertex:Gm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:$m,uv_pars_fragment:Qm,uv_pars_vertex:Km,uv_vertex:jm,worldpos_vertex:e1,background_vert:t1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:s1,cube_vert:r1,cube_frag:o1,depth_vert:a1,depth_frag:l1,distanceRGBA_vert:c1,distanceRGBA_frag:h1,equirect_vert:d1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:g1,meshlambert_vert:E1,meshlambert_frag:y1,meshmatcap_vert:v1,meshmatcap_frag:A1,meshnormal_vert:_1,meshnormal_frag:M1,meshphong_vert:S1,meshphong_frag:T1,meshphysical_vert:b1,meshphysical_frag:w1,meshtoon_vert:x1,meshtoon_frag:R1,points_vert:C1,points_frag:F1,shadow_vert:P1,shadow_frag:I1,sprite_vert:L1,sprite_frag:D1},de={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ci={basic:{uniforms:Sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ce(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Sn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Sn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Sn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ce(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Sn([de.points,de.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Sn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Sn([de.common,de.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Sn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Sn([de.sprite,de.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Sn([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Sn([de.lights,de.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ci.physical={uniforms:Sn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Ho={r:0,b:0,g:0},ps=new mi,U1=new xt;function N1(n,e,t,i,s,r,o){let a=new ce(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(A){let v=A.isScene===!0?A.background:null;return v&&v.isTexture&&(v=(A.backgroundBlurriness>0?t:e).get(v)),v}function E(A){let v=!1,y=g(A);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===xa)?(h===void 0&&(h=new z(new xn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:or(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(v.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(ps)),h.material.toneMapped=Et.getTransfer(y.colorSpace)!==Ft,(d!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new z(new _e(2,2),new ln({name:"BackgroundMaterial",uniforms:or(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Et.getTransfer(y.colorSpace)!==Ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,v){A.getRGB(Ho,Bu(n)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(A,v=1){a.set(A),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:E,addToRenderList:m}}function B1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(_,I,H,k,X){let te=!1,Z=d(k,H,I);r!==Z&&(r=Z,c(r.object)),te=f(_,k,H,X),te&&g(_,k,H,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(_,I,H,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function d(_,I,H){let k=H.wireframe===!0,X=i[_.id];X===void 0&&(X={},i[_.id]=X);let te=X[I.id];te===void 0&&(te={},X[I.id]=te);let Z=te[k];return Z===void 0&&(Z=u(l()),te[k]=Z),Z}function u(_){let I=[],H=[],k=[];for(let X=0;X<t;X++)I[X]=0,H[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:k,object:_,attributes:{},index:null}}function f(_,I,H,k){let X=r.attributes,te=I.attributes,Z=0,oe=H.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Me=X[Y],Oe=te[Y];if(Oe===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Oe=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Oe=_.instanceColor)),Me===void 0||Me.attribute!==Oe||Oe&&Me.data!==Oe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==k}function g(_,I,H,k){let X={},te=I.attributes,Z=0,oe=H.getAttributes();for(let Y in oe)if(oe[Y].location>=0){let Me=te[Y];Me===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Me=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Me=_.instanceColor));let Oe={};Oe.attribute=Me,Me&&Me.data&&(Oe.data=Me.data),X[Y]=Oe,Z++}r.attributes=X,r.attributesNum=Z,r.index=k}function E(){let _=r.newAttributes;for(let I=0,H=_.length;I<H;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let H=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;H[_]=1,k[_]===0&&(n.enableVertexAttribArray(_),k[_]=1),X[_]!==I&&(n.vertexAttribDivisor(_,I),X[_]=I)}function A(){let _=r.newAttributes,I=r.enabledAttributes;for(let H=0,k=I.length;H<k;H++)I[H]!==_[H]&&(n.disableVertexAttribArray(H),I[H]=0)}function v(_,I,H,k,X,te,Z){Z===!0?n.vertexAttribIPointer(_,I,H,X,te):n.vertexAttribPointer(_,I,H,k,X,te)}function y(_,I,H,k){E();let X=k.attributes,te=H.getAttributes(),Z=I.defaultAttributeValues;for(let oe in te){let Y=te[oe];if(Y.location>=0){let fe=X[oe];if(fe===void 0&&(oe==="instanceMatrix"&&_.instanceMatrix&&(fe=_.instanceMatrix),oe==="instanceColor"&&_.instanceColor&&(fe=_.instanceColor)),fe!==void 0){let Me=fe.normalized,Oe=fe.itemSize,at=e.get(fe);if(at===void 0)continue;let Lt=at.buffer,$=at.type,ae=at.bytesPerElement,Le=$===n.INT||$===n.UNSIGNED_INT||fe.gpuType===mh;if(fe.isInterleavedBufferAttribute){let pe=fe.data,Ve=pe.stride,Ze=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let lt=0;lt<Y.locationSize;lt++)p(Y.location+lt,pe.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let lt=0;lt<Y.locationSize;lt++)m(Y.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let lt=0;lt<Y.locationSize;lt++)v(Y.location+lt,Oe/Y.locationSize,$,Me,Ve*ae,(Ze+Oe/Y.locationSize*lt)*ae,Le)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)p(Y.location+pe,fe.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Lt);for(let pe=0;pe<Y.locationSize;pe++)v(Y.location+pe,Oe/Y.locationSize,$,Me,Oe*ae,Oe/Y.locationSize*pe*ae,Le)}}else if(Z!==void 0){let Me=Z[oe];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(Y.location,Me);break;case 3:n.vertexAttrib3fv(Y.location,Me);break;case 4:n.vertexAttrib4fv(Y.location,Me);break;default:n.vertexAttrib1fv(Y.location,Me)}}}}A()}function L(){F();for(let _ in i){let I=i[_];for(let H in I){let k=I[H];for(let X in k)h(k[X].object),delete k[X];delete I[H]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let H in I){let k=I[H];for(let X in k)h(k[X].object),delete k[X];delete I[H]}delete i[_.id]}function w(_){for(let I in i){let H=i[I];if(H[_.id]===void 0)continue;let k=H[_.id];for(let X in k)h(k[X].object),delete k[X];delete H[_.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:A}}function O1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function H1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==jn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let F=w===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ci&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ui&&!F)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function z1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new wi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let A=r?0:i,v=A*4,y=p.clippingState||null;l.value=y,y=h(g,u,v,f);for(let L=0;L!==v;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==E;++v,y+=4)o.copy(d[v]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function k1(n){let e=new WeakMap;function t(o,a){return a===Ql?o.mapping=nr:a===Kl&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ql||a===Kl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ic(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ar=class extends ua{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qs=4,Od=[.125,.215,.35,.446,.526,.582],ys=20,Cl=new ar,Hd=new ce,Fl=null,Pl=0,Il=0,Ll=!1,gs=(1+Math.sqrt(5))/2,Xs=1/gs,zd=[new P(-gs,Xs,0),new P(gs,Xs,0),new P(-Xs,0,gs),new P(Xs,0,gs),new P(0,gs,-Xs),new P(0,gs,Xs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Fl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Pl,Il),this._renderer.xr.enabled=Ll,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),Ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:Rn,format:jn,colorSpace:ts,depthBuffer:!1},s=kd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G1(r)),this._blurMaterial=V1(r,e,t)}return s}_compileMaterial(e){let t=new z(this._lodPlanes[0],e);this._renderer.compile(t,Cl)}_sceneToCubeUV(e,t,i,s){let a=new un(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Hd),h.toneMapping=pi,h.autoClear=!1;let f=new rt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new z(new xn,f),E=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,E=!0):(f.color.copy(Hd),E=!0);for(let p=0;p<6;p++){let A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;zo(s,A*v,p>2?v:0,v,v),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===nr||e.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;zo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Cl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zd[(s-r-1)%zd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new z(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],A=0;for(let w=0;w<ys;++w){let F=w/E,S=Math.exp(-F*F/2);p.push(S),w===0?A+=S:w<m&&(A+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/A;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let y=this._sizeLods[s],L=3*y*(s>v-Qs?s-v+Qs:0),C=4*(this._cubeSize-y);zo(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Cl)}};function G1(n){let e=[],t=[],i=[],s=n,r=n-Qs+1+Od.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Qs?l=Od[o-n+Qs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,A=new Float32Array(E*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let w=C%3*2/3-1,F=C>2?0:-1,S=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];A.set(S,E*g*C),v.set(u,m*g*C);let _=[C,C,C,C,C,C];y.set(_,p*g*C)}let L=new qt;L.setAttribute("position",new rn(A,E)),L.setAttribute("uv",new rn(v,m)),L.setAttribute("faceIndex",new rn(y,p)),e.push(L),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kd(n,e,t){let i=new an(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function V1(n,e,t){let i=new Float32Array(ys),s=new P(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Gd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Vd(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function W1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ql||l===Kl,h=l===nr||l===ir;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new pa(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new pa(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function X1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function q1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let A=f.array;E=f.version;for(let v=0,y=A.length;v<y;v+=3){let L=A[v+0],C=A[v+1],w=A[v+2];u.push(L,C,C,w,w,L)}}else if(g!==void 0){let A=g.array;E=g.version;for(let v=0,y=A.length/3-1;v<y;v+=3){let L=v+0,C=v+1,w=v+2;u.push(L,C,C,w,w,L)}}else return;let m=new(Uu(u)?da:ha)(u,1);m.version=E;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Y1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,E,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*E[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Z1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function J1(n,e,t){let i=new WeakMap,s=new It;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),E===!0&&(v=3);let y=a.attributes.position.count*v,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*L*4*d),w=new la(C,y,L,d);w.type=ui,w.needsUpdate=!0;let F=v*4;for(let _=0;_<d;_++){let I=m[_],H=p[_],k=A[_],X=y*L*4*_;for(let te=0;te<I.count;te++){let Z=te*F;f===!0&&(s.fromBufferAttribute(I,te),C[X+Z+0]=s.x,C[X+Z+1]=s.y,C[X+Z+2]=s.z,C[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(H,te),C[X+Z+4]=s.x,C[X+Z+5]=s.y,C[X+Z+6]=s.z,C[X+Z+7]=0),E===!0&&(s.fromBufferAttribute(k,te),C[X+Z+8]=s.x,C[X+Z+9]=s.y,C[X+Z+10]=s.z,C[X+Z+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:w,size:new he(y,L)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function $1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var lr=class extends wn{constructor(e,t,i,s,r,o,a,l,c,h=Ks){if(h!==Ks&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ks&&(i=Fi),i===void 0&&h===rr&&(i=sr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hu=new wn,Wd=new lr(1,1),zu=new la,ku=new Fc,Gu=new fa,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ca(n,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function K1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function j1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function e2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function t2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),en(t,i)}}function n2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;Zd.set(i),n.uniformMatrix3fv(this.addr,!1,Zd),en(t,i)}}function i2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;Yd.set(i),n.uniformMatrix4fv(this.addr,!1,Yd),en(t,i)}}function s2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function o2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function a2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function l2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function c2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function h2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function d2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function u2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Wd.compareFunction=Du,r=Wd):r=Hu,t.setTexture2D(e||r,s)}function f2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ku,s)}function p2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gu,s)}function m2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zu,s)}function g2(n){switch(n){case 5126:return Q1;case 35664:return K1;case 35665:return j1;case 35666:return e2;case 35674:return t2;case 35675:return n2;case 35676:return i2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return o2;case 35669:case 35673:return a2;case 5125:return l2;case 36294:return c2;case 36295:return h2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return p2;case 36289:case 36303:case 36311:case 36292:return m2}}function E2(n,e){n.uniform1fv(this.addr,e)}function y2(n,e){let t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function v2(n,e){let t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function A2(n,e){let t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function _2(n,e){let t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function M2(n,e){let t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function S2(n,e){let t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T2(n,e){n.uniform1iv(this.addr,e)}function b2(n,e){n.uniform2iv(this.addr,e)}function w2(n,e){n.uniform3iv(this.addr,e)}function x2(n,e){n.uniform4iv(this.addr,e)}function R2(n,e){n.uniform1uiv(this.addr,e)}function C2(n,e){n.uniform2uiv(this.addr,e)}function F2(n,e){n.uniform3uiv(this.addr,e)}function P2(n,e){n.uniform4uiv(this.addr,e)}function I2(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hu,r[o])}function L2(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ku,r[o])}function D2(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gu,r[o])}function U2(n,e,t){let i=this.cache,s=e.length,r=Ca(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zu,r[o])}function N2(n){switch(n){case 5126:return E2;case 35664:return y2;case 35665:return v2;case 35666:return A2;case 35674:return _2;case 35675:return M2;case 35676:return S2;case 5124:case 35670:return T2;case 35667:case 35671:return b2;case 35668:case 35672:return w2;case 35669:case 35673:return x2;case 5125:return R2;case 36294:return C2;case 36295:return F2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return U2}}var Lc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=g2(t.type)}},Dc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N2(t.type)}},Uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function $d(n,e){n.seq.push(e),n.map[e.id]=e}function B2(n,e,t){let i=n.name,s=i.length;for(Dl.lastIndex=0;;){let r=Dl.exec(i),o=Dl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$d(t,c===void 0?new Lc(a,n,e):new Dc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Uc(a),$d(t,d)),t=d}}}var er=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);B2(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Qd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var O2=37297,H2=0;function z2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Kd=new je;function k2(n){Et._getMatrix(Kd,Et.workingColorSpace,n);let e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case Ra:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+z2(n.getShaderSource(e),o)}else return s}function G2(n,e){let t=k2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function V2(n,e){let t;switch(e){case g0:t="Linear";break;case E0:t="Reinhard";break;case y0:t="Cineon";break;case v0:t="ACESFilmic";break;case _0:t="AgX";break;case M0:t="Neutral";break;case A0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new P;function W2(){Et.getLuminanceCoefficients(ko);let n=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function q2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Y2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function kr(n){return n!==""}function eu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Z2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(Z2,$2)}var J2=new Map;function $2(n,e){let t=it[e];if(t===void 0){let i=J2.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}var Q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(n){return n.replace(Q2,K2)}function K2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function j2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function eg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function ng(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function ig(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sg(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=j2(t),c=eg(t),h=tg(t),d=ng(t),u=ig(t),f=X2(t),g=q2(r),E=s.createProgram(),m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?it.tonemapping_pars_fragment:"",t.toneMapping!==pi?V2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,G2("linearToOutputTexel",t.outputColorSpace),W2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=Nc(o),o=eu(o,t),o=tu(o,t),a=Nc(a),a=eu(a,t),a=tu(a,t),o=nu(o),a=nu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=A+m+o,y=A+p+a,L=Qd(s,s.VERTEX_SHADER,v),C=Qd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,L),s.attachShader(E,C),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function w(I){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(E).trim(),k=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(C).trim(),te=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,C);else{let oe=jd(s,L,"vertex"),Y=jd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+oe+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||X==="")&&(Z=!1);Z&&(I.diagnostics={runnable:te,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(L),s.deleteShader(C),F=new er(s,E),S=Y2(s,E)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(E,O2)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=C,this}var rg=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Oc(e),t.set(e,i)),i}},Oc=class{constructor(e){this.id=rg++,this.code=e,this.usedTimes=0}};function og(n,e,t,i,s,r,o){let a=new ca,l=new Bc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,I,H,k){let X=H.fog,te=k.geometry,Z=S.isMeshStandardMaterial?H.environment:null,oe=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=oe&&oe.mapping===xa?oe.image.height:null,fe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Me=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Oe=Me!==void 0?Me.length:0,at=0;te.morphAttributes.position!==void 0&&(at=1),te.morphAttributes.normal!==void 0&&(at=2),te.morphAttributes.color!==void 0&&(at=3);let Lt,$,ae,Le;if(fe){let bt=ci[fe];Lt=bt.vertexShader,$=bt.fragmentShader}else Lt=S.vertexShader,$=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);let pe=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),Ze=k.isInstancedMesh===!0,lt=k.isBatchedMesh===!0,Xt=!!S.map,mt=!!S.matcap,$t=!!oe,O=!!S.aoMap,Hn=!!S.lightMap,ht=!!S.bumpMap,dt=!!S.normalMap,ke=!!S.displacementMap,Bt=!!S.emissiveMap,He=!!S.metalnessMap,R=!!S.roughnessMap,M=S.anisotropy>0,G=S.clearcoat>0,K=S.dispersion>0,ne=S.iridescence>0,J=S.sheen>0,Ne=S.transmission>0,me=M&&!!S.anisotropyMap,Se=G&&!!S.clearcoatMap,gt=G&&!!S.clearcoatNormalMap,se=G&&!!S.clearcoatRoughnessMap,Te=ne&&!!S.iridescenceMap,Ge=ne&&!!S.iridescenceThicknessMap,We=J&&!!S.sheenColorMap,be=J&&!!S.sheenRoughnessMap,ut=!!S.specularMap,nt=!!S.specularColorMap,Ut=!!S.specularIntensityMap,D=Ne&&!!S.transmissionMap,ue=Ne&&!!S.thicknessMap,q=!!S.gradientMap,j=!!S.alphaMap,ve=S.alphaTest>0,ge=!!S.alphaHash,Qe=!!S.extensions,Zt=pi;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Zt=n.toneMapping);let mn={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:Lt,fragmentShader:$,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:lt,batchingColor:lt&&k._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&k.instanceColor!==null,instancingMorph:Ze&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ts,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:mt,envMap:$t,envMapMode:$t&&oe.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:Hn,bumpMap:ht,normalMap:dt,displacementMap:u&&ke,emissiveMap:Bt,normalMapObjectSpace:dt&&S.normalMapType===b0,normalMapTangentSpace:dt&&S.normalMapType===Lu,metalnessMap:He,roughnessMap:R,anisotropy:M,anisotropyMap:me,clearcoat:G,clearcoatMap:Se,clearcoatNormalMap:gt,clearcoatRoughnessMap:se,dispersion:K,iridescence:ne,iridescenceMap:Te,iridescenceThicknessMap:Ge,sheen:J,sheenColorMap:We,sheenRoughnessMap:be,specularMap:ut,specularColorMap:nt,specularIntensityMap:Ut,transmission:Ne,transmissionMap:D,thicknessMap:ue,gradientMap:q,opaque:S.transparent===!1&&S.blending===ei&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ve,alphaHash:ge,combine:S.combine,mapUv:Xt&&E(S.map.channel),aoMapUv:O&&E(S.aoMap.channel),lightMapUv:Hn&&E(S.lightMap.channel),bumpMapUv:ht&&E(S.bumpMap.channel),normalMapUv:dt&&E(S.normalMap.channel),displacementMapUv:ke&&E(S.displacementMap.channel),emissiveMapUv:Bt&&E(S.emissiveMap.channel),metalnessMapUv:He&&E(S.metalnessMap.channel),roughnessMapUv:R&&E(S.roughnessMap.channel),anisotropyMapUv:me&&E(S.anisotropyMap.channel),clearcoatMapUv:Se&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:gt&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&E(S.sheenRoughnessMap.channel),specularMapUv:ut&&E(S.specularMap.channel),specularColorMapUv:nt&&E(S.specularColorMap.channel),specularIntensityMapUv:Ut&&E(S.specularIntensityMap.channel),transmissionMapUv:D&&E(S.transmissionMap.channel),thicknessMapUv:ue&&E(S.thicknessMap.channel),alphaMapUv:j&&E(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(dt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!te.attributes.uv&&(Xt||j),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ve,skinning:k.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:at,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Ft,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&Et.getTransfer(S.emissiveMap.colorSpace)===Ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wt,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&S.extensions.multiDraw===!0||lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mn.vertexUv1s=c.has(1),mn.vertexUv2s=c.has(2),mn.vertexUv3s=c.has(3),c.clear(),mn}function p(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)_.push(I),_.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(A(_,S),v(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function A(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function v(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let _=g[S.type],I;if(_){let H=ci[_];I=mr.clone(H.uniforms)}else I=S.uniforms;return I}function L(S,_){let I;for(let H=0,k=h.length;H<k;H++){let X=h[H];if(X.cacheKey===_){I=X,++I.usedTimes;break}}return I===void 0&&(I=new sg(n,_,S,r),h.push(I)),I}function C(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:F}}function ag(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function lg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function su(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ru(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,E,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),e++,p}function a(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||lg),i.length>1&&i.sort(u||su),s.length>1&&s.sort(u||su)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cg(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ru,n.set(i,[o])):s>=r.length?(o=new ru,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ce};break;case"SpotLight":t={position:new P,direction:new P,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function dg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var ug=0;function fg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pg(n){let e=new hg,t=dg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new xt,o=new xt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,A=0,v=0,y=0,L=0,C=0,w=0;c.sort(fg);for(let S=0,_=c.length;S<_;S++){let I=c[S],H=I.color,k=I.intensity,X=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=H.r*k,d+=H.g*k,u+=H.b*k;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],k);w++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let oe=I.shadow,Y=t.get(I);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=te,i.directionalShadowMatrix[f]=I.shadow.matrix,A++}i.directional[f]=Z,f++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(H).multiplyScalar(k),Z.distance=X,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[E]=Z;let oe=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,oe.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[E]=oe.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=te,y++}E++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(H).multiplyScalar(k),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Z,m++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let oe=I.shadow,Y=t.get(I);Y.shadowIntensity=oe.intensity,Y.shadowBias=oe.bias,Y.shadowNormalBias=oe.normalBias,Y.shadowRadius=oe.radius,Y.shadowMapSize=oe.mapSize,Y.shadowCameraNear=oe.camera.near,Y.shadowCameraFar=oe.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=Z,g++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(k),Z.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==A||F.numPointShadows!==v||F.numSpotShadows!==y||F.numSpotMaps!==L||F.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=A,F.numPointShadows=v,F.numSpotShadows=y,F.numSpotMaps=L,F.numLightProbes=w,i.version=ug++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){let v=c[p];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function ou(n){let e=new pg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mg(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ou(n),e.set(s,[a])):r>=o.length?(a=new ou(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var es=class extends gi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hc=class extends gi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function yg(n,e,t){let i=new Yr,s=new he,r=new he,o=new It,a=new es({depthPacking:pr}),l=new Hc,c={},h=t.maxTextureSize,d={[Qi]:sn,[sn]:Qi,[wt]:wt},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:gg,fragmentShader:Eg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new z(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let p=this.type;this.render=function(C,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),H=n.state;H.setBlending(fi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==bi&&this.type===bi,X=p===bi&&this.type!==bi;for(let te=0,Z=C.length;te<Z;te++){let oe=C[te],Y=oe.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let fe=Y.getFrameExtents();if(s.multiply(fe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||X===!0){let Oe=this.type!==bi?{minFilter:Un,magFilter:Un}:{};Y.map!==null&&Y.map.dispose(),Y.map=new an(s.x,s.y,Oe),Y.map.texture.name=oe.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Me=Y.getViewportCount();for(let Oe=0;Oe<Me;Oe++){let at=Y.getViewport(Oe);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),H.viewport(o),Y.updateMatrices(oe,Oe),i=Y.getFrustum(),y(w,F,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===bi&&A(Y,F),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,I)};function A(C,w){let F=e.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new an(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,F,u,E,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,F,f,E,null)}function v(C,w,F,S){let _=null,I=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)_=I;else if(_=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=_.uuid,k=w.uuid,X=c[H];X===void 0&&(X={},c[H]=X);let te=X[k];te===void 0&&(te=_.clone(),X[k]=te,w.addEventListener("dispose",L)),_=te}if(_.visible=w.visible,_.wireframe=w.wireframe,S===bi?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:d[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let H=n.properties.get(_);H.light=F}return _}function y(C,w,F,S,_){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let k=e.update(C),X=C.material;if(Array.isArray(X)){let te=k.groups;for(let Z=0,oe=te.length;Z<oe;Z++){let Y=te[Z],fe=X[Y.materialIndex];if(fe&&fe.visible){let Me=v(C,fe,S,_);C.onBeforeShadow(n,C,w,F,k,Me,Y),n.renderBufferDirect(F,null,k,Me,C,Y),C.onAfterShadow(n,C,w,F,k,Me,Y)}}}else if(X.visible){let te=v(C,X,S,_);C.onBeforeShadow(n,C,w,F,k,te,null),n.renderBufferDirect(F,null,k,te,C,null),C.onAfterShadow(n,C,w,F,k,te,null)}}let H=C.children;for(let k=0,X=H.length;k<X;k++)y(H[k],w,F,S,_)}function L(C){C.target.removeEventListener("dispose",L);for(let F in c){let S=c[F],_=C.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var vg={[Wl]:Xl,[ql]:Jl,[Yl]:$l,[tr]:Zl,[Xl]:Wl,[Jl]:ql,[$l]:Yl,[Zl]:tr};function Ag(n,e){function t(){let D=!1,ue=new It,q=null,j=new It(0,0,0,0);return{setMask:function(ve){q!==ve&&!D&&(n.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ge,Qe,Zt,mn){mn===!0&&(ve*=Zt,ge*=Zt,Qe*=Zt),ue.set(ve,ge,Qe,Zt),j.equals(ue)===!1&&(n.clearColor(ve,ge,Qe,Zt),j.copy(ue))},reset:function(){D=!1,q=null,j.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,q=null,j=null,ve=null;return{setReversed:function(ge){if(ue!==ge){let Qe=e.get("EXT_clip_control");ue?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let Zt=ve;ve=null,this.setClear(Zt)}ue=ge},getReversed:function(){return ue},setTest:function(ge){ge?pe(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(ge){q!==ge&&!D&&(n.depthMask(ge),q=ge)},setFunc:function(ge){if(ue&&(ge=vg[ge]),j!==ge){switch(ge){case Wl:n.depthFunc(n.NEVER);break;case Xl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Jl:n.depthFunc(n.GREATER);break;case $l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ge}},setLocked:function(ge){D=ge},setClear:function(ge){ve!==ge&&(ue&&(ge=1-ge),n.clearDepth(ge),ve=ge)},reset:function(){D=!1,q=null,j=null,ve=null,ue=!1}}}function s(){let D=!1,ue=null,q=null,j=null,ve=null,ge=null,Qe=null,Zt=null,mn=null;return{setTest:function(bt){D||(bt?pe(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(bt){ue!==bt&&!D&&(n.stencilMask(bt),ue=bt)},setFunc:function(bt,Zn,yi){(q!==bt||j!==Zn||ve!==yi)&&(n.stencilFunc(bt,Zn,yi),q=bt,j=Zn,ve=yi)},setOp:function(bt,Zn,yi){(ge!==bt||Qe!==Zn||Zt!==yi)&&(n.stencilOp(bt,Zn,yi),ge=bt,Qe=Zn,Zt=yi)},setLocked:function(bt){D=bt},setClear:function(bt){mn!==bt&&(n.clearStencil(bt),mn=bt)},reset:function(){D=!1,ue=null,q=null,j=null,ve=null,ge=null,Qe=null,Zt=null,mn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,A=null,v=null,y=null,L=null,C=null,w=new ce(0,0,0),F=0,S=!1,_=null,I=null,H=null,k=null,X=null,te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,oe=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=oe>=2);let fe=null,Me={},Oe=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),Lt=new It().fromArray(Oe),$=new It().fromArray(at);function ae(D,ue,q,j){let ve=new Uint8Array(4),ge=n.createTexture();n.bindTexture(D,ge),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<q;Qe++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ue+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return ge}let Le={};Le[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(tr),ht(!1),dt(hd),pe(n.CULL_FACE),O(fi);function pe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ve(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ze(D,ue){return d[D]!==ue?(n.bindFramebuffer(D,ue),d[D]=ue,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function lt(D,ue){let q=f,j=!1;if(D){q=u.get(ue),q===void 0&&(q=[],u.set(ue,q));let ve=D.textures;if(q.length!==ve.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Qe=ve.length;ge<Qe;ge++)q[ge]=n.COLOR_ATTACHMENT0+ge;q.length=ve.length,j=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,j=!0);j&&n.drawBuffers(q)}function Xt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let mt={[Es]:n.FUNC_ADD,[Qf]:n.FUNC_SUBTRACT,[Kf]:n.FUNC_REVERSE_SUBTRACT};mt[jf]=n.MIN,mt[e0]=n.MAX;let $t={[t0]:n.ZERO,[n0]:n.ONE,[i0]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[c0]:n.SRC_ALPHA_SATURATE,[a0]:n.DST_COLOR,[r0]:n.DST_ALPHA,[s0]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[l0]:n.ONE_MINUS_DST_COLOR,[o0]:n.ONE_MINUS_DST_ALPHA,[h0]:n.CONSTANT_COLOR,[d0]:n.ONE_MINUS_CONSTANT_COLOR,[u0]:n.CONSTANT_ALPHA,[f0]:n.ONE_MINUS_CONSTANT_ALPHA};function O(D,ue,q,j,ve,ge,Qe,Zt,mn,bt){if(D===fi){E===!0&&(Ve(n.BLEND),E=!1);return}if(E===!1&&(pe(n.BLEND),E=!0),D!==$f){if(D!==m||bt!==S){if((p!==Es||y!==Es)&&(n.blendEquation(n.FUNC_ADD),p=Es,y=Es),bt)switch(D){case ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bn:n.blendFunc(n.ONE,n.ONE);break;case dd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,v=null,L=null,C=null,w.set(0,0,0),F=0,m=D,S=bt}return}ve=ve||ue,ge=ge||q,Qe=Qe||j,(ue!==p||ve!==y)&&(n.blendEquationSeparate(mt[ue],mt[ve]),p=ue,y=ve),(q!==A||j!==v||ge!==L||Qe!==C)&&(n.blendFuncSeparate($t[q],$t[j],$t[ge],$t[Qe]),A=q,v=j,L=ge,C=Qe),(Zt.equals(w)===!1||mn!==F)&&(n.blendColor(Zt.r,Zt.g,Zt.b,mn),w.copy(Zt),F=mn),m=D,S=!1}function Hn(D,ue){D.side===wt?Ve(n.CULL_FACE):pe(n.CULL_FACE);let q=D.side===sn;ue&&(q=!q),ht(q),D.blending===ei&&D.transparent===!1?O(fi):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(D){_!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),_=D)}function dt(D){D!==Zf?(pe(n.CULL_FACE),D!==I&&(D===hd?n.cullFace(n.BACK):D===Jf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),I=D}function ke(D){D!==H&&(Z&&n.lineWidth(D),H=D)}function Bt(D,ue,q){D?(pe(n.POLYGON_OFFSET_FILL),(k!==ue||X!==q)&&(n.polygonOffset(ue,q),k=ue,X=q)):Ve(n.POLYGON_OFFSET_FILL)}function He(D){D?pe(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function R(D){D===void 0&&(D=n.TEXTURE0+te-1),fe!==D&&(n.activeTexture(D),fe=D)}function M(D,ue,q){q===void 0&&(fe===null?q=n.TEXTURE0+te-1:q=fe);let j=Me[q];j===void 0&&(j={type:void 0,texture:void 0},Me[q]=j),(j.type!==D||j.texture!==ue)&&(fe!==q&&(n.activeTexture(q),fe=q),n.bindTexture(D,ue||Le[D]),j.type=D,j.texture=ue)}function G(){let D=Me[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){Lt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Lt.copy(D))}function be(D){$.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function ut(D,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let j=q.get(D);j===void 0&&(j=n.getUniformBlockIndex(ue,D.name),q.set(D,j))}function nt(D,ue){let j=c.get(ue).get(D);l.get(ue)!==j&&(n.uniformBlockBinding(ue,j,D.__bindingPointIndex),l.set(ue,j))}function Ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,Me={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,A=null,v=null,y=null,L=null,C=null,w=new ce(0,0,0),F=0,S=!1,_=null,I=null,H=null,k=null,X=null,Lt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ve,bindFramebuffer:Ze,drawBuffers:lt,useProgram:Xt,setBlending:O,setMaterial:Hn,setFlipSided:ht,setCullFace:dt,setLineWidth:ke,setPolygonOffset:Bt,setScissorTest:He,activeTexture:R,bindTexture:M,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:ne,texImage2D:Te,texImage3D:Ge,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:gt,texStorage3D:se,texSubImage2D:J,texSubImage3D:Ne,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:We,viewport:be,reset:Ut}}function au(n,e,t,i){let s=_g(i);switch(t){case xu:return n*e;case Cu:return n*e;case Fu:return n*e*2;case yh:return n*e/s.components*s.byteLength;case vh:return n*e/s.components*s.byteLength;case Pu:return n*e*2/s.components*s.byteLength;case Ah:return n*e*2/s.components*s.byteLength;case Ru:return n*e*3/s.components*s.byteLength;case jn:return n*e*4/s.components*s.byteLength;case _h:return n*e*4/s.components*s.byteLength;case Ko:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(n,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(n,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case na:case _c:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Iu:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _g(n){switch(n){case Ci:case Tu:return{byteLength:1,components:1};case Xr:case bu:case Rn:return{byteLength:2,components:1};case gh:case Eh:return{byteLength:2,components:4};case Fi:case mh:case ui:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Mg(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):oa("canvas")}function E(R,M,G){let K=1,ne=He(R);if((ne.width>G||ne.height>G)&&(K=G/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor(K*ne.width),Ne=Math.floor(K*ne.height);d===void 0&&(d=g(J,Ne));let me=M?g(J,Ne):d;return me.width=J,me.height=Ne,me.getContext("2d").drawImage(R,0,0,J,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ne+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,M,G,K,ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),M===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let Ne=ne?Ra:Et.getTransfer(K);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Ne===Ft?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(R,M){let G;return R?M===null||M===Fi||M===sr?G=n.DEPTH24_STENCIL8:M===ui?G=n.DEPTH32F_STENCIL8:M===Xr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===sr?G=n.DEPTH_COMPONENT24:M===ui?G=n.DEPTH_COMPONENT32F:M===Xr&&(G=n.DEPTH_COMPONENT16),G}function L(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function w(R){let M=R.target;M.removeEventListener("dispose",w),_(M)}function F(R){let M=i.get(R);if(M.__webglInit===void 0)return;let G=R.source,K=u.get(G);if(K){let ne=K[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(R),Object.keys(K).length===0&&u.delete(G)}i.remove(R)}function S(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let G=R.source,K=u.get(G);delete K[M.__cacheKey],o.memory.textures--}function _(R){let M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ne=0;ne<M.__webglFramebuffer[K].length;ne++)n.deleteFramebuffer(M.__webglFramebuffer[K][ne]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=R.textures;for(let K=0,ne=G.length;K<ne;K++){let J=i.get(G[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(G[K])}i.remove(R)}let I=0;function H(){I=0}function k(){let R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function X(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function te(R,M){let G=i.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,R,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function Z(R,M){let G=i.get(R);if(R.version>0&&G.__version!==R.version){$(G,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function oe(R,M){let G=i.get(R);if(R.version>0&&G.__version!==R.version){$(G,R,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function Y(R,M){let G=i.get(R);if(R.version>0&&G.__version!==R.version){ae(G,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}let fe={[on]:n.REPEAT,[vs]:n.CLAMP_TO_EDGE,[jl]:n.MIRRORED_REPEAT},Me={[Un]:n.NEAREST,[S0]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},Oe={[w0]:n.NEVER,[I0]:n.ALWAYS,[x0]:n.LESS,[Du]:n.LEQUAL,[R0]:n.EQUAL,[P0]:n.GEQUAL,[C0]:n.GREATER,[F0]:n.NOTEQUAL};function at(R,M){if(M.type===ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===rl||M.magFilter===_o||M.magFilter===As||M.minFilter===di||M.minFilter===rl||M.minFilter===_o||M.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,fe[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,fe[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,fe[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Me[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==_o&&M.minFilter!==As||M.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Lt(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let K=M.source,ne=u.get(K);ne===void 0&&(ne={},u.set(K,ne));let J=X(M);if(J!==R.__cacheKey){ne[J]===void 0&&(ne[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[J].usedTimes++;let Ne=ne[R.__cacheKey];Ne!==void 0&&(ne[R.__cacheKey].usedTimes--,Ne.usedTimes===0&&S(M)),R.__cacheKey=J,R.__webglTexture=ne[J].texture}return G}function $(R,M,G){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let ne=Lt(R,M),J=M.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+G);let Ne=i.get(J);if(J.version!==Ne.__version||ne===!0){t.activeTexture(n.TEXTURE0+G);let me=Et.getPrimaries(Et.workingColorSpace),Se=M.colorSpace===Zi?null:Et.getPrimaries(M.colorSpace),gt=M.colorSpace===Zi||me===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let se=E(M.image,!1,s.maxTextureSize);se=Bt(M,se);let Te=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),We=v(M.internalFormat,Te,Ge,M.colorSpace,M.isVideoTexture);at(K,M);let be,ut=M.mipmaps,nt=M.isVideoTexture!==!0,Ut=Ne.__version===void 0||ne===!0,D=J.dataReady,ue=L(M,se);if(M.isDepthTexture)We=y(M.format===rr,M.type),Ut&&(nt?t.texStorage2D(n.TEXTURE_2D,1,We,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,Te,Ge,null));else if(M.isDataTexture)if(ut.length>0){nt&&Ut&&t.texStorage2D(n.TEXTURE_2D,ue,We,ut[0].width,ut[0].height);for(let q=0,j=ut.length;q<j;q++)be=ut[q],nt?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,Te,Ge,be.data):t.texImage2D(n.TEXTURE_2D,q,We,be.width,be.height,0,Te,Ge,be.data);M.generateMipmaps=!1}else nt?(Ut&&t.texStorage2D(n.TEXTURE_2D,ue,We,se.width,se.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,Te,Ge,se.data)):t.texImage2D(n.TEXTURE_2D,0,We,se.width,se.height,0,Te,Ge,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,We,ut[0].width,ut[0].height,se.depth);for(let q=0,j=ut.length;q<j;q++)if(be=ut[q],M.format!==jn)if(Te!==null)if(nt){if(D)if(M.layerUpdates.size>0){let ve=au(be.width,be.height,M.format,M.type);for(let ge of M.layerUpdates){let Qe=be.data.subarray(ge*ve/be.data.BYTES_PER_ELEMENT,(ge+1)*ve/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ge,be.width,be.height,1,Te,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,se.depth,Te,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,We,be.width,be.height,se.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,se.depth,Te,Ge,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,We,be.width,be.height,se.depth,0,Te,Ge,be.data)}else{nt&&Ut&&t.texStorage2D(n.TEXTURE_2D,ue,We,ut[0].width,ut[0].height);for(let q=0,j=ut.length;q<j;q++)be=ut[q],M.format!==jn?Te!==null?nt?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(n.TEXTURE_2D,q,We,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,Te,Ge,be.data):t.texImage2D(n.TEXTURE_2D,q,We,be.width,be.height,0,Te,Ge,be.data)}else if(M.isDataArrayTexture)if(nt){if(Ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,We,se.width,se.height,se.depth),D)if(M.layerUpdates.size>0){let q=au(se.width,se.height,M.format,M.type);for(let j of M.layerUpdates){let ve=se.data.subarray(j*q/se.data.BYTES_PER_ELEMENT,(j+1)*q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,Te,Ge,ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,Ge,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,se.width,se.height,se.depth,0,Te,Ge,se.data);else if(M.isData3DTexture)nt?(Ut&&t.texStorage3D(n.TEXTURE_3D,ue,We,se.width,se.height,se.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,Ge,se.data)):t.texImage3D(n.TEXTURE_3D,0,We,se.width,se.height,se.depth,0,Te,Ge,se.data);else if(M.isFramebufferTexture){if(Ut)if(nt)t.texStorage2D(n.TEXTURE_2D,ue,We,se.width,se.height);else{let q=se.width,j=se.height;for(let ve=0;ve<ue;ve++)t.texImage2D(n.TEXTURE_2D,ve,We,q,j,0,Te,Ge,null),q>>=1,j>>=1}}else if(ut.length>0){if(nt&&Ut){let q=He(ut[0]);t.texStorage2D(n.TEXTURE_2D,ue,We,q.width,q.height)}for(let q=0,j=ut.length;q<j;q++)be=ut[q],nt?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te,Ge,be):t.texImage2D(n.TEXTURE_2D,q,We,Te,Ge,be);M.generateMipmaps=!1}else if(nt){if(Ut){let q=He(se);t.texStorage2D(n.TEXTURE_2D,ue,We,q.width,q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ge,se)}else t.texImage2D(n.TEXTURE_2D,0,We,Te,Ge,se);m(M)&&p(K),Ne.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ae(R,M,G){if(M.image.length!==6)return;let K=Lt(R,M),ne=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let J=i.get(ne);if(ne.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+G);let Ne=Et.getPrimaries(Et.workingColorSpace),me=M.colorSpace===Zi?null:Et.getPrimaries(M.colorSpace),Se=M.colorSpace===Zi||Ne===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let gt=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let j=0;j<6;j++)!gt&&!se?Te[j]=E(M.image[j],!0,s.maxCubemapSize):Te[j]=se?M.image[j].image:M.image[j],Te[j]=Bt(M,Te[j]);let Ge=Te[0],We=r.convert(M.format,M.colorSpace),be=r.convert(M.type),ut=v(M.internalFormat,We,be,M.colorSpace),nt=M.isVideoTexture!==!0,Ut=J.__version===void 0||K===!0,D=ne.dataReady,ue=L(M,Ge);at(n.TEXTURE_CUBE_MAP,M);let q;if(gt){nt&&Ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ut,Ge.width,Ge.height);for(let j=0;j<6;j++){q=Te[j].mipmaps;for(let ve=0;ve<q.length;ve++){let ge=q[ve];M.format!==jn?We!==null?nt?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,ge.width,ge.height,We,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ut,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,ge.width,ge.height,We,be,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,ut,ge.width,ge.height,0,We,be,ge.data)}}}else{if(q=M.mipmaps,nt&&Ut){q.length>0&&ue++;let j=He(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ut,j.width,j.height)}for(let j=0;j<6;j++)if(se){nt?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Te[j].width,Te[j].height,We,be,Te[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,Te[j].width,Te[j].height,0,We,be,Te[j].data);for(let ve=0;ve<q.length;ve++){let Qe=q[ve].image[j].image;nt?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Qe.width,Qe.height,We,be,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ut,Qe.width,Qe.height,0,We,be,Qe.data)}}else{nt?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,We,be,Te[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,We,be,Te[j]);for(let ve=0;ve<q.length;ve++){let ge=q[ve];nt?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,We,be,ge.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,ut,We,be,ge.image[j])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),J.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Le(R,M,G,K,ne,J){let Ne=r.convert(G.format,G.colorSpace),me=r.convert(G.type),Se=v(G.internalFormat,Ne,me,G.colorSpace),gt=i.get(M),se=i.get(G);if(se.__renderTarget=M,!gt.__hasExternalTextures){let Te=Math.max(1,M.width>>J),Ge=Math.max(1,M.height>>J);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,Se,Te,Ge,M.depth,0,Ne,me,null):t.texImage2D(ne,J,Se,Te,Ge,0,Ne,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ne,se.__webglTexture,0,ht(M)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ne,se.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(R,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let K=M.depthTexture,ne=K&&K.isDepthTexture?K.type:null,J=y(M.stencilBuffer,ne),Ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=ht(M);dt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,R)}else{let K=M.textures;for(let ne=0;ne<K.length;ne++){let J=K[ne],Ne=r.convert(J.format,J.colorSpace),me=r.convert(J.type),Se=v(J.internalFormat,Ne,me,J.colorSpace),gt=ht(M);G&&dt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,Se,M.width,M.height):dt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,Se,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Se,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te(M.depthTexture,0);let ne=K.__webglTexture,J=ht(M);if(M.depthTexture.format===Ks)dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(M.depthTexture.format===rr)dt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ze(R){let M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),pe(M.__webglDepthbuffer[K],R,!1);else{let ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),pe(M.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(R,M,G){let K=i.get(R);M!==void 0&&Le(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ze(R)}function Xt(R){let M=R.texture,G=i.get(R),K=i.get(M);R.addEventListener("dispose",w);let ne=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ne=ne.length>1;if(Ne||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let Se=0;Se<M.mipmaps.length;Se++)G.__webglFramebuffer[me][Se]=n.createFramebuffer()}else G.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)G.__webglFramebuffer[me]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let me=0,Se=ne.length;me<Se;me++){let gt=i.get(ne[me]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&dt(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){let Se=ne[me];G.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[me]);let gt=r.convert(Se.format,Se.colorSpace),se=r.convert(Se.type),Te=v(Se.internalFormat,gt,se,Se.colorSpace,R.isXRRenderTarget===!0),Ge=ht(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,G.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),at(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Le(G.__webglFramebuffer[me][Se],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else Le(G.__webglFramebuffer[me],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let me=0,Se=ne.length;me<Se;me++){let gt=ne[me],se=i.get(gt);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),at(n.TEXTURE_2D,gt),Le(G.__webglFramebuffer,R,gt,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(gt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),at(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)Le(G.__webglFramebuffer[Se],R,M,n.COLOR_ATTACHMENT0,me,Se);else Le(G.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,me,0);m(M)&&p(me),t.unbindTexture()}R.depthBuffer&&Ze(R)}function mt(R){let M=R.textures;for(let G=0,K=M.length;G<K;G++){let ne=M[G];if(m(ne)){let J=A(R),Ne=i.get(ne).__webglTexture;t.bindTexture(J,Ne),p(J),t.unbindTexture()}}}let $t=[],O=[];function Hn(R){if(R.samples>0){if(dt(R)===!1){let M=R.textures,G=R.width,K=R.height,ne=n.COLOR_BUFFER_BIT,J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(R),me=M.length>1;if(me)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Se]);let gt=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,G,K,0,0,G,K,ne,n.NEAREST),l===!0&&($t.length=0,O.length=0,$t.push(n.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&($t.push(J),O.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[Se]);let gt=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,gt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ht(R){return Math.min(s.maxSamples,R.samples)}function dt(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Bt(R,M){let G=R.colorSpace,K=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ts&&G!==Zi&&(Et.getTransfer(G)===Ft?(K!==jn||ne!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=te,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=Y,this.rebindTextures=lt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Hn,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=dt}function Sg(n,e){function t(i,s=Zi){let r,o=Et.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.BYTE;if(i===bu)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===mh)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===Rn)return n.HALF_FLOAT;if(i===xu)return n.ALPHA;if(i===Ru)return n.RGB;if(i===jn)return n.RGBA;if(i===Cu)return n.LUMINANCE;if(i===Fu)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===yh)return n.RED;if(i===vh)return n.RED_INTEGER;if(i===Pu)return n.RG;if(i===Ah)return n.RG_INTEGER;if(i===_h)return n.RGBA_INTEGER;if(i===Ko||i===jo||i===ea||i===ta)if(o===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===tc||i===nc||i===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===rc||i===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sc||i===rc)return o===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc||i===gc||i===Ec||i===yc||i===vc||i===Ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ac)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return o===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===_c||i===Mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return o===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Iu||i===Sc||i===Tc||i===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zc=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new wn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ln({vertexShader:bg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new _e(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends Ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new kc,m=t.getContextAttributes(),p=null,A=null,v=[],y=[],L=new he,C=null,w=new un;w.viewport=new It;let F=new un;F.viewport=new It;let S=[w,F],_=new zc,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ae=v[$];return ae===void 0&&(ae=new Gr,v[$]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function($){let ae=v[$];return ae===void 0&&(ae=new Gr,v[$]=ae),ae.getGripSpace()},this.getHand=function($){let ae=v[$];return ae===void 0&&(ae=new Gr,v[$]=ae),ae.getHandSpace()};function k($){let ae=y.indexOf($.inputSource);if(ae===-1)return;let Le=v[ae];Le!==void 0&&(Le.update($.inputSource,$.frame,c||o),Le.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",te);for(let $=0;$<v.length;$++){let ae=y[$];ae!==null&&(y[$]=null,v[$].disconnect(ae))}I=null,H=null,E.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,A=null,Lt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new an(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Le=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?rr:Ks,Le=m.stencil?sr:Fi);let Ve={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),A=new an(u.textureWidth,u.textureHeight,{format:jn,type:Ci,depthTexture:new lr(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function te($){for(let ae=0;ae<$.removed.length;ae++){let Le=$.removed[ae],pe=y.indexOf(Le);pe>=0&&(y[pe]=null,v[pe].disconnect(Le))}for(let ae=0;ae<$.added.length;ae++){let Le=$.added[ae],pe=y.indexOf(Le);if(pe===-1){for(let Ze=0;Ze<v.length;Ze++)if(Ze>=y.length){y.push(Le),pe=Ze;break}else if(y[Ze]===null){y[Ze]=Le,pe=Ze;break}if(pe===-1)break}let Ve=v[pe];Ve&&Ve.connect(Le)}}let Z=new P,oe=new P;function Y($,ae,Le){Z.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Le.matrixWorld);let pe=Z.distanceTo(oe),Ve=ae.projectionMatrix.elements,Ze=Le.projectionMatrix.elements,lt=Ve[14]/(Ve[10]-1),Xt=Ve[14]/(Ve[10]+1),mt=(Ve[9]+1)/Ve[5],$t=(Ve[9]-1)/Ve[5],O=(Ve[8]-1)/Ve[0],Hn=(Ze[8]+1)/Ze[0],ht=lt*O,dt=lt*Hn,ke=pe/(-O+Hn),Bt=ke*-O;if(ae.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ve[10]===-1)$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let He=lt+ke,R=Xt+ke,M=ht-Bt,G=dt+(pe-Bt),K=mt*Xt/R*He,ne=$t*Xt/R*He;$.projectionMatrix.makePerspective(M,G,K,ne,He,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function fe($,ae){ae===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ae.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ae=$.near,Le=$.far;E.texture!==null&&(E.depthNear>0&&(ae=E.depthNear),E.depthFar>0&&(Le=E.depthFar)),_.near=F.near=w.near=ae,_.far=F.far=w.far=Le,(I!==_.near||H!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,H=_.far),w.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,_.layers.mask=w.layers.mask|F.layers.mask;let pe=$.parent,Ve=_.cameras;fe(_,pe);for(let Ze=0;Ze<Ve.length;Ze++)fe(Ve[Ze],pe);Ve.length===2?Y(_,w,F):_.projectionMatrix.copy(w.projectionMatrix),Me($,_,pe)};function Me($,ae,Le){Le===null?$.matrix.copy(ae.matrixWorld):($.matrix.copy(Le.matrixWorld),$.matrix.invert(),$.matrix.multiply(ae.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ae.projectionMatrix),$.projectionMatrixInverse.copy(ae.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ra*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(_)};let Oe=null;function at($,ae){if(h=ae.getViewerPose(c||o),g=ae,h!==null){let Le=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let pe=!1;Le.length!==_.cameras.length&&(_.cameras.length=0,pe=!0);for(let Ze=0;Ze<Le.length;Ze++){let lt=Le[Ze],Xt=null;if(f!==null)Xt=f.getViewport(lt);else{let $t=d.getViewSubImage(u,lt);Xt=$t.viewport,Ze===0&&(e.setRenderTargetTextures(A,$t.colorTexture,u.ignoreDepthValues?void 0:$t.depthStencilTexture),e.setRenderTarget(A))}let mt=S[Ze];mt===void 0&&(mt=new un,mt.layers.enable(Ze),mt.viewport=new It,S[Ze]=mt),mt.matrix.fromArray(lt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(lt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ze===0&&(_.matrix.copy(mt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),pe===!0&&_.cameras.push(mt)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let Ze=d.getDepthInformation(Le[0]);Ze&&Ze.isValid&&Ze.texture&&E.init(e,Ze,s.renderState)}}for(let Le=0;Le<v.length;Le++){let pe=y[Le],Ve=v[Le];pe!==null&&Ve!==void 0&&Ve.update(pe,ae,c||o)}Oe&&Oe($,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Lt=new Ou;Lt.setAnimationLoop(at),this.setAnimationLoop=function($){Oe=$},this.dispose=function(){}}},ms=new mi,xg=new xt;function Rg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=e.get(p),v=A.envMap,y=A.envMapRotation;v&&(m.envMap.value=v,ms.copy(y),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(ms)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cg(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,v){let y=v.program;i.uniformBlockBinding(A,y)}function c(A,v){let y=s[A.id];y===void 0&&(g(A),y=h(A),s[A.id]=y,A.addEventListener("dispose",m));let L=v.program;i.updateUBOMapping(A,L);let C=e.render.frame;r[A.id]!==C&&(u(A),r[A.id]=C)}function h(A){let v=d();A.__bindingPointIndex=v;let y=n.createBuffer(),L=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let v=s[A.id],y=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=y.length;C<w;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,_=F.length;S<_;S++){let I=F[S];if(f(I,C,S,L)===!0){let H=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],X=0;for(let te=0;te<k.length;te++){let Z=k[te],oe=E(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,H+X,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,X),X+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,v,y,L){let C=A.value,w=v+"_"+y;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{let F=L[w];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[w]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(A){let v=A.uniforms,y=0,L=16;for(let w=0,F=v.length;w<F;w++){let S=Array.isArray(v[w])?v[w]:[v[w]];for(let _=0,I=S.length;_<I;_++){let H=S[_],k=Array.isArray(H.value)?H.value:[H.value];for(let X=0,te=k.length;X<te;X++){let Z=k[X],oe=E(Z),Y=y%L,fe=Y%oe.boundary,Me=Y+fe;y+=fe,Me!==0&&L-Me<oe.storage&&(y+=L-Me),H.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=oe.storage}}}let C=y%L;return C>0&&(y+=L-C),A.__size=y,A.__cache={},this}function E(A){let v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function m(A){let v=A.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ma=class{constructor(e={}){let{canvas:t=D0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,A=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=pi,this.toneMappingExposure=1;let y=this,L=!1,C=0,w=0,F=null,S=-1,_=null,I=new It,H=new It,k=null,X=new ce(0),te=0,Z=t.width,oe=t.height,Y=1,fe=null,Me=null,Oe=new It(0,0,Z,oe),at=new It(0,0,Z,oe),Lt=!1,$=new Yr,ae=!1,Le=!1,pe=new xt,Ve=new xt,Ze=new P,lt=new It,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function $t(){return F===null?Y:1}let O=i;function Hn(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ge,!1),O===null){let N="webgl2";if(O=Hn(N,T),O===null)throw Hn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,dt,ke,Bt,He,R,M,G,K,ne,J,Ne,me,Se,gt,se,Te,Ge,We,be,ut,nt,Ut,D;function ue(){ht=new X1(O),ht.init(),nt=new Sg(O,ht),dt=new H1(O,ht,e,nt),ke=new Ag(O,ht),dt.reverseDepthBuffer&&u&&ke.buffers.depth.setReversed(!0),Bt=new Z1(O),He=new ag,R=new Mg(O,ht,ke,He,dt,nt,Bt),M=new k1(y),G=new W1(y),K=new tp(O),Ut=new B1(O,K),ne=new q1(O,K,Bt,Ut),J=new $1(O,ne,K,Bt),We=new J1(O,dt,R),se=new z1(He),Ne=new og(y,M,G,ht,dt,Ut,se),me=new Rg(y,He),Se=new cg,gt=new mg(ht),Ge=new N1(y,M,G,ke,J,f,l),Te=new yg(y,J,dt),D=new Cg(O,Bt,dt,ke),be=new O1(O,ht,Bt),ut=new Y1(O,ht,Bt),Bt.programs=Ne.programs,y.capabilities=dt,y.extensions=ht,y.properties=He,y.renderLists=Se,y.shadowMap=Te,y.state=ke,y.info=Bt}ue();let q=new Gc(y,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Z,oe,!1))},this.getSize=function(T){return T.set(Z,oe)},this.setSize=function(T,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,oe=N,t.width=Math.floor(T*Y),t.height=Math.floor(N*Y),V===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Z*Y,oe*Y).floor()},this.setDrawingBufferSize=function(T,N,V){Z=T,oe=N,Y=V,t.width=Math.floor(T*V),t.height=Math.floor(N*V),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Oe)},this.setViewport=function(T,N,V,W){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,N,V,W),ke.viewport(I.copy(Oe).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,N,V,W){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,N,V,W),ke.scissor(H.copy(at).multiplyScalar(Y).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){ke.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){Me=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(T=!0,N=!0,V=!0){let W=0;if(T){let B=!1;if(F!==null){let re=F.texture.format;B=re===_h||re===Ah||re===vh}if(B){let re=F.texture.type,Ee=re===Ci||re===Fi||re===Xr||re===sr||re===gh||re===Eh,Ce=Ge.getClearColor(),Fe=Ge.getClearAlpha(),qe=Ce.r,Ke=Ce.g,Pe=Ce.b;Ee?(g[0]=qe,g[1]=Ke,g[2]=Pe,g[3]=Fe,O.clearBufferuiv(O.COLOR,0,g)):(E[0]=qe,E[1]=Ke,E[2]=Pe,E[3]=Fe,O.clearBufferiv(O.COLOR,0,E))}else W|=O.COLOR_BUFFER_BIT}N&&(W|=O.DEPTH_BUFFER_BIT),V&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Se.dispose(),gt.dispose(),He.dispose(),M.dispose(),G.dispose(),J.dispose(),Ut.dispose(),D.dispose(),Ne.dispose(),q.dispose(),q.removeEventListener("sessionstart",nd),q.removeEventListener("sessionend",id),cs.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let T=Bt.autoReset,N=Te.enabled,V=Te.autoUpdate,W=Te.needsUpdate,B=Te.type;ue(),Bt.autoReset=T,Te.enabled=N,Te.autoUpdate=V,Te.needsUpdate=W,Te.type=B}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qe(T){let N=T.target;N.removeEventListener("dispose",Qe),Zt(N)}function Zt(T){mn(T),He.remove(T)}function mn(T){let N=He.get(T).programs;N!==void 0&&(N.forEach(function(V){Ne.releaseProgram(V)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,V,W,B,re){N===null&&(N=Xt);let Ee=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Xf(T,N,V,W,B);ke.setMaterial(W,Ee);let Fe=V.index,qe=1;if(W.wireframe===!0){if(Fe=ne.getWireframeAttribute(V),Fe===void 0)return;qe=2}let Ke=V.drawRange,Pe=V.attributes.position,yt=Ke.start*qe,Nt=(Ke.start+Ke.count)*qe;re!==null&&(yt=Math.max(yt,re.start*qe),Nt=Math.min(Nt,(re.start+re.count)*qe)),Fe!==null?(yt=Math.max(yt,0),Nt=Math.min(Nt,Fe.count)):Pe!=null&&(yt=Math.max(yt,0),Nt=Math.min(Nt,Pe.count));let Ot=Nt-yt;if(Ot<0||Ot===1/0)return;Ut.setup(B,W,Ce,V,Fe);let Tn,Mt=be;if(Fe!==null&&(Tn=K.get(Fe),Mt=ut,Mt.setIndex(Tn)),B.isMesh)W.wireframe===!0?(ke.setLineWidth(W.wireframeLinewidth*$t()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if(B.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),ke.setLineWidth(Be*$t()),B.isLineSegments?Mt.setMode(O.LINES):B.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else B.isPoints?Mt.setMode(O.POINTS):B.isSprite&&Mt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Mt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Be=B._multiDrawStarts,vi=B._multiDrawCounts,St=B._multiDrawCount,Jn=Fe?K.get(Fe).bytesPerElement:1,Ps=He.get(W).currentProgram.getUniforms();for(let In=0;In<St;In++)Ps.setValue(O,"_gl_DrawID",In),Mt.render(Be[In]/Jn,vi[In])}else if(B.isInstancedMesh)Mt.renderInstances(yt,Ot,B.count);else if(V.isInstancedBufferGeometry){let Be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,vi=Math.min(V.instanceCount,Be);Mt.renderInstances(yt,Ot,vi)}else Mt.render(yt,Ot)};function bt(T,N,V){T.transparent===!0&&T.side===wt&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Ao(T,N,V),T.side=Qi,T.needsUpdate=!0,Ao(T,N,V),T.side=wt):Ao(T,N,V)}this.compile=function(T,N,V=null){V===null&&(V=T),p=gt.get(V),p.init(N),v.push(p),V.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==V&&T.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let W=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let re=B.material;if(re)if(Array.isArray(re))for(let Ee=0;Ee<re.length;Ee++){let Ce=re[Ee];bt(Ce,V,B),W.add(Ce)}else bt(re,V,B),W.add(re)}),v.pop(),p=null,W},this.compileAsync=function(T,N,V=null){let W=this.compile(T,N,V);return new Promise(B=>{function re(){if(W.forEach(function(Ee){He.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){B(T);return}setTimeout(re,10)}ht.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Zn=null;function yi(T){Zn&&Zn(T)}function nd(){cs.stop()}function id(){cs.start()}let cs=new Ou;cs.setAnimationLoop(yi),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(T){Zn=T,q.setAnimationLoop(T),T===null?cs.stop():cs.start()},q.addEventListener("sessionstart",nd),q.addEventListener("sessionend",id),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,N,F),p=gt.get(T,v.length),p.init(N),v.push(p),Ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Ve),Le=this.localClippingEnabled,ae=se.init(this.clippingPlanes,Le),m=Se.get(T,A.length),m.init(),A.push(m),q.enabled===!0&&q.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&sl(re,N,-1/0,y.sortObjects)}sl(T,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,Me),mt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,mt&&Ge.addToRenderList(m,T),this.info.render.frame++,ae===!0&&se.beginShadows();let V=p.state.shadowsArray;Te.render(V,T,N),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,B=m.transmissive;if(p.setupLights(),N.isArrayCamera){let re=N.cameras;if(B.length>0)for(let Ee=0,Ce=re.length;Ee<Ce;Ee++){let Fe=re[Ee];rd(W,B,T,Fe)}mt&&Ge.render(T);for(let Ee=0,Ce=re.length;Ee<Ce;Ee++){let Fe=re[Ee];sd(m,T,Fe,Fe.viewport)}}else B.length>0&&rd(W,B,T,N),mt&&Ge.render(T),sd(m,T,N);F!==null&&(R.updateMultisampleRenderTarget(F),R.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,N),Ut.resetDefaultState(),S=-1,_=null,v.pop(),v.length>0?(p=v[v.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function sl(T,N,V,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){W&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ve);let Ee=J.update(T),Ce=T.material;Ce.visible&&m.push(T,Ee,Ce,V,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let Ee=J.update(T),Ce=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),lt.copy(Ee.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ce)){let Fe=Ee.groups;for(let qe=0,Ke=Fe.length;qe<Ke;qe++){let Pe=Fe[qe],yt=Ce[Pe.materialIndex];yt&&yt.visible&&m.push(T,Ee,yt,V,lt.z,Pe)}}else Ce.visible&&m.push(T,Ee,Ce,V,lt.z,null)}}let re=T.children;for(let Ee=0,Ce=re.length;Ee<Ce;Ee++)sl(re[Ee],N,V,W)}function sd(T,N,V,W){let B=T.opaque,re=T.transmissive,Ee=T.transparent;p.setupLightsView(V),ae===!0&&se.setGlobalState(y.clippingPlanes,V),W&&ke.viewport(I.copy(W)),B.length>0&&vo(B,N,V),re.length>0&&vo(re,N,V),Ee.length>0&&vo(Ee,N,V),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function rd(T,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new an(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Rn:Ci,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));let re=p.state.transmissionRenderTarget[W.id],Ee=W.viewport||I;re.setSize(Ee.z,Ee.w);let Ce=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(X),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear(),mt&&Ge.render(V);let Fe=y.toneMapping;y.toneMapping=pi;let qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ae===!0&&se.setGlobalState(y.clippingPlanes,W),vo(T,V,W),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Pe=0,yt=N.length;Pe<yt;Pe++){let Nt=N[Pe],Ot=Nt.object,Tn=Nt.geometry,Mt=Nt.material,Be=Nt.group;if(Mt.side===wt&&Ot.layers.test(W.layers)){let vi=Mt.side;Mt.side=sn,Mt.needsUpdate=!0,od(Ot,V,W,Tn,Mt,Be),Mt.side=vi,Mt.needsUpdate=!0,Ke=!0}}Ke===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}y.setRenderTarget(Ce),y.setClearColor(X,te),qe!==void 0&&(W.viewport=qe),y.toneMapping=Fe}function vo(T,N,V){let W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,re=T.length;B<re;B++){let Ee=T[B],Ce=Ee.object,Fe=Ee.geometry,qe=W===null?Ee.material:W,Ke=Ee.group;Ce.layers.test(V.layers)&&od(Ce,N,V,Fe,qe,Ke)}}function od(T,N,V,W,B,re){T.onBeforeRender(y,N,V,W,B,re),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(y,N,V,W,T,re),B.transparent===!0&&B.side===wt&&B.forceSinglePass===!1?(B.side=sn,B.needsUpdate=!0,y.renderBufferDirect(V,N,W,B,T,re),B.side=Qi,B.needsUpdate=!0,y.renderBufferDirect(V,N,W,B,T,re),B.side=wt):y.renderBufferDirect(V,N,W,B,T,re),T.onAfterRender(y,N,V,W,B,re)}function Ao(T,N,V){N.isScene!==!0&&(N=Xt);let W=He.get(T),B=p.state.lights,re=p.state.shadowsArray,Ee=B.state.version,Ce=Ne.getParameters(T,B.state,re,N,V),Fe=Ne.getProgramCacheKey(Ce),qe=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?G:M).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",Qe),qe=new Map,W.programs=qe);let Ke=qe.get(Fe);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Ee)return ld(T,Ce),Ke}else Ce.uniforms=Ne.getUniforms(T),T.onBeforeCompile(Ce,y),Ke=Ne.acquireProgram(Ce,Fe),qe.set(Fe,Ke),W.uniforms=Ce.uniforms;let Pe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=se.uniform),ld(T,Ce),W.needsLights=Yf(T),W.lightsStateVersion=Ee,W.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMap.value=B.state.directionalShadowMap,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotShadowMap.value=B.state.spotShadowMap,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMap.value=B.state.pointShadowMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ke,W.uniformsList=null,Ke}function ad(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=er.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function ld(T,N){let V=He.get(T);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Xf(T,N,V,W,B){N.isScene!==!0&&(N=Xt),R.resetTextureUnits();let re=N.fog,Ee=W.isMeshStandardMaterial?N.environment:null,Ce=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ts,Fe=(W.isMeshStandardMaterial?G:M).get(W.envMap||Ee),qe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ke=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!V.morphAttributes.position,yt=!!V.morphAttributes.normal,Nt=!!V.morphAttributes.color,Ot=pi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ot=y.toneMapping);let Tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Mt=Tn!==void 0?Tn.length:0,Be=He.get(W),vi=p.state.lights;if(ae===!0&&(Le===!0||T!==_)){let zn=T===_&&W.id===S;se.setState(W,T,zn)}let St=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vi.state.version||Be.outputColorSpace!==Ce||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==Fe||W.fog===!0&&Be.fog!==re||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==se.numPlanes||Be.numIntersection!==se.numIntersection)||Be.vertexAlphas!==qe||Be.vertexTangents!==Ke||Be.morphTargets!==Pe||Be.morphNormals!==yt||Be.morphColors!==Nt||Be.toneMapping!==Ot||Be.morphTargetsCount!==Mt)&&(St=!0):(St=!0,Be.__version=W.version);let Jn=Be.currentProgram;St===!0&&(Jn=Ao(W,N,B));let Ps=!1,In=!1,xr=!1,Ht=Jn.getUniforms(),li=Be.uniforms;if(ke.useProgram(Jn.program)&&(Ps=!0,In=!0,xr=!0),W.id!==S&&(S=W.id,In=!0),Ps||_!==T){ke.buffers.depth.getReversed()?(pe.copy(T.projectionMatrix),N0(pe),B0(pe),Ht.setValue(O,"projectionMatrix",pe)):Ht.setValue(O,"projectionMatrix",T.projectionMatrix),Ht.setValue(O,"viewMatrix",T.matrixWorldInverse);let zi=Ht.map.cameraPosition;zi!==void 0&&zi.setValue(O,Ze.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&Ht.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ht.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,In=!0,xr=!0)}if(B.isSkinnedMesh){Ht.setOptional(O,B,"bindMatrix"),Ht.setOptional(O,B,"bindMatrixInverse");let zn=B.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Ht.setValue(O,"boneTexture",zn.boneTexture,R))}B.isBatchedMesh&&(Ht.setOptional(O,B,"batchingTexture"),Ht.setValue(O,"batchingTexture",B._matricesTexture,R),Ht.setOptional(O,B,"batchingIdTexture"),Ht.setValue(O,"batchingIdTexture",B._indirectTexture,R),Ht.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&Ht.setValue(O,"batchingColorTexture",B._colorsTexture,R));let Rr=V.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&We.update(B,V,Jn),(In||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,Ht.setValue(O,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(li.envMap.value=Fe,li.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(li.envMapIntensity.value=N.environmentIntensity),In&&(Ht.setValue(O,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&qf(li,xr),re&&W.fog===!0&&me.refreshFogUniforms(li,re),me.refreshMaterialUniforms(li,W,Y,oe,p.state.transmissionRenderTarget[T.id]),er.upload(O,ad(Be),li,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(er.upload(O,ad(Be),li,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ht.setValue(O,"center",B.center),Ht.setValue(O,"modelViewMatrix",B.modelViewMatrix),Ht.setValue(O,"normalMatrix",B.normalMatrix),Ht.setValue(O,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let zn=W.uniformsGroups;for(let zi=0,ki=zn.length;zi<ki;zi++){let cd=zn[zi];D.update(cd,Jn),D.bind(cd,Jn)}}return Jn}function qf(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Yf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,N,V){He.get(T.texture).__webglTexture=N,He.get(T.depthTexture).__webglTexture=V;let W=He.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let V=He.get(T);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,V=0){F=T,C=N,w=V;let W=!0,B=null,re=!1,Ee=!1;if(T){let Fe=He.get(T);if(Fe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Fe.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Fe.__hasExternalTextures)R.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Pe=T.depthTexture;if(Fe.__boundDepthTexture!==Pe){if(Pe!==null&&He.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);let Ke=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[N])?B=Ke[N][V]:B=Ke[N],re=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?B=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?B=Ke[V]:B=Ke,I.copy(T.viewport),H.copy(T.scissor),k=T.scissorTest}else I.copy(Oe).multiplyScalar(Y).floor(),H.copy(at).multiplyScalar(Y).floor(),k=Lt;if(ke.bindFramebuffer(O.FRAMEBUFFER,B)&&W&&ke.drawBuffers(T,B),ke.viewport(I),ke.scissor(H),ke.setScissorTest(k),re){let Fe=He.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe.__webglTexture,V)}else if(Ee){let Fe=He.get(T.texture),qe=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,V||0,qe)}S=-1},this.readRenderTargetPixels=function(T,N,V,W,B,re,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){ke.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let Fe=T.texture,qe=Fe.format,Ke=Fe.type;if(!dt.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&V>=0&&V<=T.height-B&&O.readPixels(N,V,W,B,nt.convert(qe),nt.convert(Ke),re)}finally{let Fe=F!==null?He.get(F).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,N,V,W,B,re,Ee){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){let Fe=T.texture,qe=Fe.format,Ke=Fe.type;if(!dt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-W&&V>=0&&V<=T.height-B){ke.bindFramebuffer(O.FRAMEBUFFER,Ce);let Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,re.byteLength,O.STREAM_READ),O.readPixels(N,V,W,B,nt.convert(qe),nt.convert(Ke),0);let yt=F!==null?He.get(F).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,yt);let Nt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await U0(O,Nt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,re),O.deleteBuffer(Pe),O.deleteSync(Nt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,V=0){T.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-V),B=Math.floor(T.image.width*W),re=Math.floor(T.image.height*W),Ee=N!==null?N.x:0,Ce=N!==null?N.y:0;R.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,Ee,Ce,B,re),ke.unbindTexture()},this.copyTextureToTexture=function(T,N,V=null,W=null,B=0){T.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],N=arguments[2],B=arguments[3]||0,V=null);let re,Ee,Ce,Fe,qe,Ke,Pe,yt,Nt,Ot=T.isCompressedTexture?T.mipmaps[B]:T.image;V!==null?(re=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Ce=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,qe=V.min.y,Ke=V.isBox3?V.min.z:0):(re=Ot.width,Ee=Ot.height,Ce=Ot.depth||1,Fe=0,qe=0,Ke=0),W!==null?(Pe=W.x,yt=W.y,Nt=W.z):(Pe=0,yt=0,Nt=0);let Tn=nt.convert(N.format),Mt=nt.convert(N.type),Be;N.isData3DTexture?(R.setTexture3D(N,0),Be=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Be=O.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Be=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let vi=O.getParameter(O.UNPACK_ROW_LENGTH),St=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Jn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ps=O.getParameter(O.UNPACK_SKIP_ROWS),In=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ot.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ot.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);let xr=T.isDataArrayTexture||T.isData3DTexture,Ht=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let li=He.get(T),Rr=He.get(N),zn=He.get(li.__renderTarget),zi=He.get(Rr.__renderTarget);ke.bindFramebuffer(O.READ_FRAMEBUFFER,zn.__webglFramebuffer),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let ki=0;ki<Ce;ki++)xr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(T).__webglTexture,B,Ke+ki),T.isDepthTexture?(Ht&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(N).__webglTexture,B,Nt+ki),O.blitFramebuffer(Fe,qe,re,Ee,Pe,yt,re,Ee,O.DEPTH_BUFFER_BIT,O.NEAREST)):Ht?O.copyTexSubImage3D(Be,B,Pe,yt,Nt+ki,Fe,qe,re,Ee):O.copyTexSubImage2D(Be,B,Pe,yt,Nt+ki,Fe,qe,re,Ee);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ht?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Be,B,Pe,yt,Nt,re,Ee,Ce,Tn,Mt,Ot.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Be,B,Pe,yt,Nt,re,Ee,Ce,Tn,Ot.data):O.texSubImage3D(Be,B,Pe,yt,Nt,re,Ee,Ce,Tn,Mt,Ot):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Pe,yt,re,Ee,Tn,Mt,Ot.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Pe,yt,Ot.width,Ot.height,Tn,Ot.data):O.texSubImage2D(O.TEXTURE_2D,B,Pe,yt,re,Ee,Tn,Mt,Ot);O.pixelStorei(O.UNPACK_ROW_LENGTH,vi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Jn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ps),O.pixelStorei(O.UNPACK_SKIP_IMAGES,In),B===0&&N.generateMipmaps&&O.generateMipmap(Be),ke.unbindTexture()},this.copyTextureToTexture3D=function(T,N,V=null,W=null,B=0){return T.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],N=arguments[3],B=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,V,W,B)},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ke.unbindTexture()},this.resetState=function(){C=0,w=0,F=null,ke.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}},xe=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ga=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mn=new P,Ea=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends gi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qs,Lr=new P,Ys=new P,Zs=new P,Js=new he,Dr=new he,Vu=new xt,Go=new P,Ur=new P,Vo=new P,lu=new he,Ul=new he,cu=new he,Zr=class extends Jt{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vc(t,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new Ea(i,3,0,!1)),qs.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=qs,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Vu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Zs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Wo(Go.set(-.5,-.5,0),Zs,o,Ys,s,r),Wo(Ur.set(.5,-.5,0),Zs,o,Ys,s,r),Wo(Vo.set(.5,.5,0),Zs,o,Ys,s,r),lu.set(0,0),Ul.set(1,0),cu.set(1,1);let a=e.ray.intersectTriangle(Go,Ur,Vo,!1,Lr);if(a===null&&(Wo(Ur.set(-.5,.5,0),Zs,o,Ys,s,r),Ul.set(0,1),a=e.ray.intersectTriangle(Go,Vo,Ur,!1,Lr),a===null))return;let l=e.ray.origin.distanceTo(Lr);l<e.near||l>e.far||t.push({distance:l,point:Lr.clone(),uv:Ji.getInterpolation(Lr,Go,Ur,Vo,lu,Ul,cu,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Wo(n,e,t,i,s,r){Js.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Dr.x=r*Js.x-s*Js.y,Dr.y=s*Js.x+r*Js.y):Dr.copy(Js),n.copy(e),n.x+=Dr.x,n.y+=Dr.y,n.applyMatrix4(Vu)}var Wc=class extends wn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Un,h=Un,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ya=class extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new xt,hu=new xt,Xo=[],du=new Pi,Fg=new xt,Nr=new z,Br=new Ii,va=class extends z{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ya(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),du.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),Br.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),hu.multiplyMatrices(i,$s),Nr.matrixWorld=hu,Nr.raycast(e,Xo);for(let o=0,a=Xo.length;o<a;o++){let l=Xo[o];l.instanceId=r,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wc(new Float32Array(s*this.count),s,this.count,yh,ui));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Jr=class extends gi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Aa=new P,_a=new P,uu=new xt,Or=new qr,qo=new Ii,Nl=new P,fu=new P,Ma=class extends Jt{constructor(e=new qt,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Aa.fromBufferAttribute(t,s-1),_a.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Aa.distanceTo(_a);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;uu.copy(s).invert(),Or.copy(e.ray).applyMatrix4(uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let E=f,m=g-1;E<m;E+=c){let p=h.getX(E),A=h.getX(E+1),v=Yo(this,e,Or,l,p,A);v&&t.push(v)}if(this.isLineLoop){let E=h.getX(g-1),m=h.getX(f),p=Yo(this,e,Or,l,E,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let E=f,m=g-1;E<m;E+=c){let p=Yo(this,e,Or,l,E,E+1);p&&t.push(p)}if(this.isLineLoop){let E=Yo(this,e,Or,l,g-1,f);E&&t.push(E)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yo(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Aa.fromBufferAttribute(o,s),_a.fromBufferAttribute(o,r),t.distanceSqToSegment(Aa,_a,Nl,fu)>i)return;Nl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Nl);if(!(l<e.near||l>e.far))return{distance:l,point:fu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var hr=class extends gi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pu=new xt,Xc=new qr,Zo=new Ii,Jo=new P,$r=class extends Jt{constructor(e=new qt,t=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;pu.copy(s).invert(),Xc.copy(e.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);Jo.fromBufferAttribute(d,m),mu(Jo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,E=f;g<E;g++)Jo.fromBufferAttribute(d,g),mu(Jo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mu(n,e,t,i,s,r,o){let a=Xc.distanceSqToPoint(n);if(a<t){let l=new P;Xc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Nn=class extends wn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,l=new xt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(yn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(yn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sa=class extends ti{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qc=class extends Sa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var $o=new P,Bl=new Sh,Ol=new Sh,Hl=new Sh,_s=class extends ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),c=$o);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Bl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Ol.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),Hl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ol.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Hl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Bl.calc(l),Ol.calc(l),Hl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Pg(n,e){let t=1-n;return t*t*e}function Ig(n,e){return 2*(1-n)*n*e}function Lg(n,e){return n*n*e}function Vr(n,e,t,i){return Pg(n,e)+Ig(n,t)+Lg(n,i)}function Dg(n,e){let t=1-n;return t*t*t*e}function Ug(n,e){let t=1-n;return 3*t*t*n*e}function Ng(n,e){return 3*(1-n)*n*n*e}function Bg(n,e){return n*n*n*e}function Wr(n,e,t,i,s){return Dg(n,e)+Ug(n,t)+Ng(n,i)+Bg(n,s)}var Yc=class extends ti{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(e,s.x,r.x,o.x,a.x),Wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zc=class extends ti{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Wr(e,s.x,r.x,o.x,a.x),Wr(e,s.y,r.y,o.y,a.y),Wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jc=class extends ti{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends ti{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qc=class extends ti{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(e,s.x,r.x,o.x),Vr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends ti{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Vr(e,s.x,r.x,o.x),Vr(e,s.y,r.y,o.y),Vr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kc=class extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(gu(a,l.x,c.x,h.x,d.x),gu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Og=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:_s,CubicBezierCurve:Yc,CubicBezierCurve3:Zc,EllipseCurve:Sa,LineCurve:Jc,LineCurve3:$c,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:Ta,SplineCurve:Kc});var fn=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},st=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;A(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function A(){let y=new P,L=new P,C=0,w=(t-e)/i;for(let F=0;F<=r;F++){let S=[],_=F/r,I=_*(t-e)+e;for(let H=0;H<=s;H++){let k=H/s,X=k*l+a,te=Math.sin(X),Z=Math.cos(X);L.x=I*te,L.y=-_*i+m,L.z=I*Z,d.push(L.x,L.y,L.z),y.set(te,w,Z).normalize(),u.push(y.x,y.y,y.z),f.push(k,1-_),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let _=E[S][F],I=E[S+1][F],H=E[S+1][F+1],k=E[S][F+1];(e>0||S!==0)&&(h.push(_,I,k),C+=3),(t>0||S!==r-1)&&(h.push(I,H,k),C+=3)}c.addGroup(p,C,0),p+=C}function v(y){let L=g,C=new he,w=new P,F=0,S=y===!0?e:t,_=y===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*_,0),u.push(0,_,0),f.push(.5,.5),g++;let I=g;for(let H=0;H<=s;H++){let X=H/s*l+a,te=Math.cos(X),Z=Math.sin(X);w.x=S*Z,w.y=m*_,w.z=S*te,d.push(w.x,w.y,w.z),u.push(0,_,0),C.x=te*.5+.5,C.y=Z*.5*_+.5,f.push(C.x,C.y),g++}for(let H=0;H<s;H++){let k=L+H,X=I+H;y===!0?h.push(X,X+1,k):h.push(X+1,X,k),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pn=class n extends st{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jc=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let v=new P,y=new P,L=new P;for(let C=0;C<t.length;C+=3)f(t[C+0],v),f(t[C+1],y),f(t[C+2],L),l(v,y,L,A)}function l(A,v,y,L){let C=L+1,w=[];for(let F=0;F<=C;F++){w[F]=[];let S=A.clone().lerp(y,F/C),_=v.clone().lerp(y,F/C),I=C-F;for(let H=0;H<=I;H++)H===0&&F===C?w[F][H]=S:w[F][H]=S.clone().lerp(_,H/I)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let _=Math.floor(S/2);S%2===0?(u(w[F][_+1]),u(w[F+1][_]),u(w[F][_])):(u(w[F][_+1]),u(w[F+1][_+1]),u(w[F+1][_]))}}function c(A){let v=new P;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(A),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let A=new P;for(let v=0;v<r.length;v+=3){A.x=r[v+0],A.y=r[v+1],A.z=r[v+2];let y=m(A)/2/Math.PI+.5,L=p(A)/Math.PI+.5;o.push(y,1-L)}g(),d()}function d(){for(let A=0;A<o.length;A+=6){let v=o[A+0],y=o[A+2],L=o[A+4],C=Math.max(v,y,L),w=Math.min(v,y,L);C>.9&&w<.1&&(v<.2&&(o[A+0]+=1),y<.2&&(o[A+2]+=1),L<.2&&(o[A+4]+=1))}}function u(A){r.push(A.x,A.y,A.z)}function f(A,v){let y=A*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){let A=new P,v=new P,y=new P,L=new P,C=new he,w=new he,F=new he;for(let S=0,_=0;S<r.length;S+=9,_+=6){A.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),F.set(o[_+4],o[_+5]),L.copy(A).add(v).add(y).divideScalar(3);let I=m(L);E(C,_+0,A,I),E(w,_+2,v,I),E(F,_+4,y,I)}}function E(A,v,y,L){L<0&&A.x===1&&(o[v]=A.x-1),y.x===0&&y.z===0&&(o[v]=L/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Li=class n extends jc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ft=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let A=[],v=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let C=L/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-v),A.push(c++)}h.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){let v=h[p][A+1],y=h[p][A],L=h[p+1][A],C=h[p+1][A+1];(p!==0||o>0)&&f.push(v,y,C),(p!==i-1||l<Math.PI)&&f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(E,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vn=class n extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,d=new P,u=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,A=(s+1)*f+g;o.push(E,m,A),o.push(m,p,A)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var dr=class n extends qt{constructor(e=new Ta(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new he,h=new P,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function E(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),A(),p()}function m(v){h=e.getPointAt(v/t,h);let y=o.normals[v],L=o.binormals[v];for(let C=0;C<=s;C++){let w=C/s*Math.PI*2,F=Math.sin(w),S=-Math.cos(w);l.x=S*y.x+F*L.x,l.y=S*y.y+F*L.y,l.z=S*y.z+F*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=s;y++){let L=(s+1)*(v-1)+(y-1),C=(s+1)*v+(y-1),w=(s+1)*v+y,F=(s+1)*(v-1)+y;g.push(L,C,F),g.push(C,w,F)}}function A(){for(let v=0;v<=t;v++)for(let y=0;y<=s;y++)c.x=v/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Og[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ie=class extends gi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lu,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Qo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Hg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ur=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends ur{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:r=e,a=2*t-i;break;case md:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:o=e,l=2*i-t;break;case md:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,A=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+A*o[c+L]+v*o[l+L]+y*o[d+L];return r}},th=class extends ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},nh=class extends ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case wc:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Hg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=wc;var Ms=class extends ni{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=ia;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends ni{};ih.prototype.ValueTypeName="color";var sh=class extends ni{};sh.prototype.ValueTypeName="number";var rh=class extends ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ji.slerpFlat(r,0,o,c-a,o,c,l);return r}},ba=class extends ni{InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ni{constructor(e,t,i){super(e,t,i)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ia;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends ni{};oh.prototype.ValueTypeName="vector";var ah=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},zg=new ah,lh=class{constructor(e){this.manager=e!==void 0?e:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},we=class extends fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zl=new xt,Eu=new P,yu=new P,Qr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ch=class extends Qr{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ra*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Bn=class extends fr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vu=new xt,Hr=new P,kl=new P,hh=class extends Qr{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hr),kl.copy(i.position),kl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-Hr.x,-Hr.y,-Hr.z),vu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}},Je=class extends fr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dh=class extends Qr{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Di=class extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var wa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Au(){return 0}var Th="\\[\\]\\.:\\/",kg=new RegExp("["+Th+"]","g"),bh="[^"+Th+"]",Gg="[^"+Th.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",bh),Wg=/(WCOD+)?/.source.replace("WCOD",Gg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Yg=new RegExp("^"+Vg+Wg+Xg+qg+"$"),Zg=["material","materials","bones","map"],uh=class{constructor(e,t,i){let s=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(e){let t=Yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Zg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=uh;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);var Fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ui=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jg=new ar(-1,1,1,-1,0,1),wh=class extends qt{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},$g=new wh,Er=class{constructor(e){this._mesh=new z($g,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ts=class extends Ui{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mr.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Er(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Kr=class extends Ui{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pa=class extends Ui{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ia=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new he);this._width=i.width,this._height=i.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ts(Fa),this.copyPass.material.blending=fi,this.clock=new wa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kr!==void 0&&(o instanceof Kr?i=!0:o instanceof Pa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Wu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var yr=class n extends Ui{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new an(r,o,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new an(r,o,{type:Rn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new an(r,o,{type:Rn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Wu;this.highPassUniforms=mr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Fa;this.copyUniforms=mr.clone(h.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new rt,this.fsQuad=new Er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};yr.BlurDirectionX=new he(1,0);yr.BlurDirectionY=new he(0,1);var bs=1280,ws=720;function De(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var xh=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Rt=(n,e,t)=>n+(e-n)*t,et=(n,e,t)=>{let i=xh((t-n)/(e-n));return i*i*(3-2*i)};var Qg=n=>(n=xh(n),n*n*(3-2*n));function Da(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=Qg((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>Rt(o,r[a],i)):Rt(s,r,i)}return n[n.length-1][1]}var Kg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new he(bs,ws)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},jg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new ce(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},La=class{constructor(e){let t=this.r=new ma({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(bs,ws,!1),t.shadowMap.enabled=!0,t.shadowMap.type=ph,t.toneMapping=pi,t.outputColorSpace=ts;let i=new lr(bs,ws);i.type=Fi,this.rt=new an(bs,ws,{type:Rn,samples:2,depthTexture:i}),this.composer=new Ia(t,new an(bs,ws,{type:Rn})),this.dof=new Ts(Kg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new yr(new he(bs/2,ws/2),.45,.75,.82),this.grade=new Ts(jg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function Xu(n,e,t,i=40){let s=new ga;s.background=new ce(t);let r=new un(i,bs/ws,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function qu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var Fn=1/420,Rh=new Map;function Pn(n,e,t,i){if(Rh.has(n))return Rh.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new Nn(s);return o.colorSpace=zt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Rh.set(n,o),o}var At=n=>new Path2D(n);function cn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function ii(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var eE={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function tE(n,e){return Pn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=At("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");cn(t,i,ii(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(At("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(At("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(At("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=At("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){cn(t,At("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),ii(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(At("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(At("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(At("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(At("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(At("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")cn(t,At("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),ii(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(At("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(At("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(At("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){cn(t,At("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),ii(t,-60,0,60,120,n.a,n.b)),cn(t,At("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),ii(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else cn(t,At("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),ii(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(At("M-22 26 L22 26 L0 64Z")),cn(t,At("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function Yu(n,e,t){return Pn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(cn(i,At("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),ii(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(cn(i,At("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;cn(i,At(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),ii(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(At(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(At(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function nE(){return Pn("hand",90,100,n=>{n.translate(45,14);let e=At("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");cn(n,e,ii(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function Zu(n){return Pn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function iE(){return Pn("foot",80,40,n=>{n.translate(26,6),cn(n,At("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function sE(n="round"){return Pn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var Qu={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function rE(n,e){return Pn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),Qu[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function oE(n,e,t){return Pn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=At("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");cn(i,s,ii(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),cn(i,s,e);let r=At("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");cn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),cn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=At("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");cn(i,s,ii(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),cn(i,l,"#E9E9EF")})})})}var Ju=(n,e={})=>new rt({map:n,alphaTest:.5,alphaToCoverage:!0,side:wt,...e}),$u=new Map,Ch=new Map,aE=[];function lE(n){if(Ch.has(n))return Ch.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new Nn(t);return r.colorSpace=zt,r.anisotropy=8,Ch.set(n,r),r}function Cn(n,e,t,i,s,r=0,o,a=!1){let l=new _e(e*Fn,t*Fn);l.translate((e/2-i)*Fn,(s-t/2)*Fn,0);let c=Ju(n);o.push(c);let h=new z(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=Ju(lE(n),{color:"#FFE9C8"});aE.push(u);let f=new z(l,u);f.position.z=-.045-r,h.add(f)}let d=$u.get(n);return d||(d=new es({depthPacking:pr,map:n,alphaTest:.5,side:wt}),$u.set(n,d)),h.customDepthMaterial=d,h}function cE(){return Pn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function hE(){return Pn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function Fh(n={}){let e=eE[n.outfit||"hero"],t=n.outfit||"hero",i=new le,s=[],r=new le;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,A]of[["L",-1,-.012],["R",1,-.01]]){let v=new le;v.position.set(p*34*Fn,o*Fn,A);let y=new le;y.position.y=-142*Fn,v.add(Cn(Zu(1),50,160,25,6,0,s)),y.add(Cn(Zu(1),50,160,25,6,0,s));let L=Cn(iE(),80,40,26,6,.001,s);L.position.y=-142*Fn,p<0&&(L.scale.x=-1),y.add(L),v.add(y),r.add(v),l[m]={th:v,shin:y}}let h=Cn(tE(e,t),300,320,150,20,0,s);h.position.y=(a+4)*Fn,r.add(h);for(let[m,p,A]of[["L",-1,-.006],["R",1,.006]]){let v=new le;v.position.set(p*(e.kind==="dress"?66:84)*Fn,(a-24)*Fn,A);let y=new le;y.position.y=-124*Fn,v.add(Cn(Yu(e,t,"u"),90,170,45,10,0,s)),y.add(Cn(Yu(e,t,"f"),90,170,45,10,.001,s));let L=Cn(nE(),90,100,45,14,.002,s);L.position.y=-128*Fn,L.scale.set(p>0?-.8:.8,.8,1),y.add(L),v.add(y),r.add(v),c[m]={u:v,f:y,hand:L}}let d=new le;if(d.position.set(0,(a+104)*Fn,.02),r.add(d),n.hair){let m=Cn(oE(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Cn(sE(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Cn(Pn("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let A=n.hairc||"#4a2c1a";p.fillStyle=A,p.fill(At(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Cn(Pn("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(A=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(A*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(Qu)){let p=Cn(rE(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",d.add(p),u[m]=p}if(n.glasses){let m=Cn(Pn("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Cn(n.hat(Pn),300,300,150,150,.006,s);d.add(m)}let f=new z(new _e(1,.4),new rt({map:cE(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new z(new _e(2.1,3),new rt({map:hE(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:bn,side:wt})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in u)u[p].visible=p===m},cheer(m,p=0,A=1){let v=m*6+p,y=Math.sin(v);E.pose({armL:[150+y*16*A,18+y*10],armR:[150-y*16*A,18-y*10],bob:Math.abs(Math.sin(v*.5))*.07*A,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,A=m.armL||[6,4],v=m.armR||[6,4],y=m.legL||[0,0],L=m.legR||[0,0];c.L.u.rotation.z=-A[0]*p,c.L.f.rotation.z=-A[1]*p,c.R.u.rotation.z=v[0]*p,c.R.f.rotation.z=v[1]*p,l.L.th.rotation.z=-y[0]*p,l.L.shin.rotation.z=-y[1]*p,l.R.th.rotation.z=L[0]*p,l.R.shin.rotation.z=L[1]*p,d.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,p=1,A=1){let v=m*6.4*p,y=Math.sin(v),L=Math.cos(v);E.pose({legL:[y*15*A,Math.max(0,-y)*26*A],legR:[-y*15*A,Math.max(0,y)*26*A],armL:[8-y*12*A,6],armR:[8+y*12*A,6],bob:Math.abs(L)*.03*A,head:y*2})},place(m,p,A=0,v=1){i.position.set(m,A,p),i.scale.setScalar(v)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return E.pose(),E}function Ae(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new Nn(i);return r.colorSpace=zt,r.anisotropy=8,r}var xs=(n,e={})=>new Ie({color:n,roughness:.88,metalness:0,...e});function x(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new z(new xn(n,e,t),typeof i=="string"?xs(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Ye(n,e,t=1){let i=Ae(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Zr(new cr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:bn}));return s.scale.set(e,e,1),s}var Ku=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function dE(n,e,t,i,s,r=.42){let o=De(n),a=256*e,l=300*t,c,h=Ae(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,f,28,10);for(let f=0;f<t;f++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,f*300+292,a,8)}),d=Ae(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,p=g*300+60,A=144,v=196,y=o()<r,L=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,A+18,v+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+v+9,A+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+v+6,A+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,A,v),y||!s){let C=y?L<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=C,f.fillRect(m,p,26,v),f.fillRect(m+A-26,p,26,v)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+v),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+v),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+A/2-3,p,6,v),f.fillRect(m,p+v*.45,A,6),y&&s&&(u.fillStyle=L<.5?"#FFC47A":"#FFD79C",u.fillRect(m,p,A,v),u.fillStyle="#000",u.fillRect(m+A/2-3,p,6,v),u.fillRect(m,p+v*.45,A,6))}h.needsUpdate=!0});return d.colorSpace=zt,{map:h,emissiveMap:d}}function ns(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=De(n),u=new le,f=o*2.9+3.6,g=c||Ku[Math.floor(d()*Ku.length)],E=Math.max(2,Math.round(r/2.1)),m=dE(n,E,o,g,l,e.lit??.42),p=new Ie({map:m.map,emissiveMap:m.emissiveMap,emissive:new ce(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),A=xs(g),v=[a>0?p:A,a>0?A:p,xs("#2c2730"),A,A,A],y=new z(new xn(s,o*2.9,r),v);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(x(s+.5,.5,r+.5,"#3d3540",t,f+.25,i)),u.add(x(s+.3,.35,r+.3,g,t,3.6,i));let L=t+a*(s/2+.01);if(h){let C=Ae(1024,180,I=>{I.fillStyle=h.bg,I.fillRect(0,0,1024,180),I.fillStyle="#ffffff22",I.fillRect(0,0,1024,8),I.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,I.textAlign="center",I.textBaseline="middle",I.fillStyle=h.fg||"#FFF4DC",I.shadowColor=h.fg||"#FFF4DC",I.shadowBlur=l?26:0,I.fillText(h.name,512,96)}),w=new z(new xn(.18,1.05,r-.3),[new Ie({map:C,emissiveMap:C,emissive:new ce(l?.85:0,l?.85:0,l?.85:0)}),new Ie({map:C,emissiveMap:C,emissive:new ce(l?.85:0,l?.85:0,l?.85:0)}),xs("#222"),xs("#222"),xs("#222"),xs("#222")]);w.position.set(L+a*.1,3.25,i),a>0&&(w.scale.z=-1),w.castShadow=!0,u.add(w);let F=Ae(512,256,I=>{let H=I.createLinearGradient(0,0,0,256);H.addColorStop(0,h.win||"#F4C783"),H.addColorStop(1,"#D59A5C"),I.fillStyle=H,I.fillRect(0,0,512,256);let k=De(n+9);for(let X=0;X<26;X++)I.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(k()*6)],I.fillRect(k()*490,30+Math.floor(k()*3)*76,12+k()*26,52);for(let X of[84,160,236])I.fillStyle="#6b4530",I.fillRect(0,X,512,7)}),S=new Ie({map:F,emissiveMap:F,emissive:new ce(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(x(.3,2.8,r-.1,"#3a2a24",L-a*.1,1.4,i));let _=new z(new _e(r-.9,2.1),S);_.rotation.y=a*Math.PI/2,_.position.set(L+a*.07,1.5,i),u.add(_);for(let I=-1;I<=1;I++)u.add(x(.08,2.3,.09,"#2a1d18",L+a*.1,1.5,i+I*(r-.9)/2));if(h.awning){let I=Ae(512,128,k=>{for(let X=0;X<12;X++)k.fillStyle=X%2?h.awning:"#F4EEDF",k.fillRect(X*512/12,0,42.666666666666664,128)}),H=new z(new _e(r-.3,1.3),new Ie({map:I,side:wt,roughness:.9}));H.rotation.y=a*Math.PI/2,H.rotation.order="YXZ",H.rotation.x=-1,H.position.set(L+a*.55,2.56,i),H.castShadow=!0,u.add(H)}if(l){let I=new Je(h.light||"#FFC88A",3.2,7,1.8);I.position.set(L+a*1.7,2.1,i),u.add(I)}}return u}function ju(n,e,t){let i=new z(new _e(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function uE(n="#A99D90"){let e=Ae(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=De(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=on,e}function Ua(n,e){let t=Ae(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=De(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=on,t.repeat.set(1,12);let i=ju(9,240,new Ie({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=uE(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=ju(4.4,240,new Ie({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(x(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function Na(n,e,t,i,s=!0,r=5.5){let o=new le;o.add(x(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(x(.26,.3,.26,"#15151b",e,.15,t));let a=x(.26,.4,.26,new Ie({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(x(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=Ye("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new Je("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var ef={};function Yt(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new le;o.add(x(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=ef[a]||(ef[a]=Ae(512,512,c=>{let h=De(r%3+3),d=(u,f,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,A=g*(.86+.14*Math.sin(p*5+u)+h()*.05);c.lineTo(u+Math.cos(p)*A,f+Math.sin(p)*A)}c.fill()};for(let[u,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,f,g,s[0]);for(let[u,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,f,g,s[1]);for(let[u,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,f,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new z(new _e(3.6*i,3.6*i),new Ie({map:l,alphaTest:.5,side:wt,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new es({depthPacking:pr,map:l,alphaTest:.5,side:wt}),o.add(h)}return n.add(o),o}function si(n,e,t,i,s,r,o=3,a=0){let l=Ae(1600,900,h=>{h.clearRect(0,0,1600,900);let d=De(o);for(let u=0;u<3;u++)for(let f=-40;f<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(f,900-E,g,E),d()<.2&&h.fillRect(f+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new z(new _e(t,i),new rt({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function pt(n,e,t,i,s){let r=Ae(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new z(new _e(t,i),new rt({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var b=(n,e={})=>new Ie({color:n,roughness:.85,...e});function Re(n,e,t,i={}){let s=new z(new _e(e,t),new rt({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:wt,color:i.color||"#fff",blending:i.add?bn:ei,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new es({depthPacking:pr,map:n,alphaTest:.5,side:wt})),s}function tn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var Ph={value:0};function Ba(n="#8E3D30",e=4,t=3){let i=Ae(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=De(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=on,i.repeat.set(e,t),i}function tf(n="#A59383",e=12,t=12){let i=Ae(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=De(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=on,i.repeat.set(e,t),i}var nf=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function fE(n,e){let[t,i,s,r]=nf[n];return Ae(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Ih(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=De(o),l={};for(let c of e){let h=Math.floor(a()*nf.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=fE(d,h),f=new rt({map:u,alphaTest:.5,side:wt,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=Ph,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new va(new _e(i*.5,i),f,l[c].length),E=new Jt;l[c].forEach((m,p)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let A=.92+a()*.16;E.scale.set(A,A,1),E.updateMatrix(),g.setMatrixAt(p,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function _n(n,e=2600,t=300,i=1){let s=De(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,f=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(f)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(f)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new qt;a.setAttribute("position",new rn(r,3)),a.setAttribute("color",new rn(o,3));let l=Ae(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new hr({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new $r(a,c);return h.frustumCulled=!1,n.add(h),h}function ri(n,e,t="#6D4A33"){let i=Ae(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=De(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=on,i.repeat.set(n/5,e/5);let s=new z(new _e(n,e),new Ie({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function Ei(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Ae(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=on,r.repeat.set(n/s*4,e/s*4);let o=new z(new _e(n,e),new Ie({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Rs(n,e,t="#FFD9A0",i=.22){let s=Ae(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new z(new _e(n,e),new rt({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:bn,side:wt,fog:!1}))}function Lh(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new le,a=new z(new st(.3,.22,.5,20),b(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Ae(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Re(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function Dh(n,e,t,i="#2A1E18"){let s=new le;s.add(x(n+.08,e+.08,.04,i,0,0,0));let r=Ae(Math.round(n*400),Math.round(e*400),t),o=new z(new _e(n,e),new Ie({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function kt(n,e,t,i=1.2){return new z(new _e(n,e),new Ie({color:"#000",emissive:t,emissiveIntensity:i}))}function tt(n,e,t,i=10,s=60){let r=new Di(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function jr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new xe(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(pt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),si(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=Ba(t,2,2),a=()=>new Ie({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,E,m])=>n.add(x(E,m,.3,a(),f,g,-3)));for(let[f,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(x(E,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(x(18,5.2,.3,a(),0,2.6,-3));n.add(ri(18,12,s));let l=Dh(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Lh(4.4,0,-2.4,1.1)),n.add(Lh(-5,0,-2.4,.9,"#36AEA2")),n.add(new we(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=tt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new Je("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new z(new st(.18,.3,.34,24),new Ie({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(x(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=Ye("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var sf=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function eo(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new xe(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),pt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),si(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),Ua(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(ns(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:sf[(a+i)%5]})),n.add(ns(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:sf[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)Yt(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),Na(n,-5,-3-l*12,1,t||r);n.add(new we(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(tt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ie=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},ct=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},_t=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},vr={perro:[520,440,n=>{ie(n,250,300,150,90,"#C98E5E"),ie(n,250,330,100,50,"#E9C49A"),ct(n,120,330,34,100,14,"#B5784A"),ct(n,340,330,34,100,14,"#B5784A"),ct(n,180,340,34,90,14,"#C98E5E"),ct(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ie(n,180,170,110,100,"#C98E5E"),ie(n,100,140,40,80,"#8A5A34",-.3),ie(n,262,140,40,80,"#8A5A34",.3),ie(n,180,220,54,40,"#E9C49A"),ie(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ie(n,250,300,150,90,"#C9A07E"),ie(n,250,330,100,50,"#EEDCC4"),ct(n,120,330,34,100,14,"#B5906A"),ct(n,340,330,34,100,14,"#B5906A"),ct(n,180,340,34,90,14,"#C9A07E"),ct(n,300,340,34,90,14,"#C9A07E"),ie(n,180,170,110,100,"#C9A07E"),ie(n,100,140,40,80,"#9A7A5A",-.3),ie(n,262,140,40,80,"#9A7A5A",.3),ie(n,180,220,60,46,"#F4F0E8"),ie(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ie(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ie(n,180,170,100,92,"#E9853A"),_t(n,[[96,120],[110,30],[160,100]],"#E9853A"),_t(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ie(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ie(n,150,260,80,130,"#3FA34D"),ie(n,150,140,80,80,"#3FA34D"),_t(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ie(n,150,300,56,70,"#F2C14E"),_t(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ie(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ie(n,170,190,130,80,"#8D94A8"),ie(n,90,110,56,52,"#7A8296"),ie(n,120,150,40,26,"#5FA898",.3),_t(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ie(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ie(n,150,130,70,22,"#3A3040"),ie(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ie(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ie(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ie(n,150,260,90,120,"#C9A06A"),ie(n,150,290,56,80,"#EBD3A8"),ie(n,150,120,74,70,"#C9A06A"),ie(n,100,70,18,14,"#A87A44"),ie(n,200,70,18,14,"#A87A44"),ie(n,150,156,14,10,"#1A1A24"),ct(n,92,200,26,70,12,"#A87A44"),ct(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ie(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ie(n,64,130,46,44,"#1A1A24"),ie(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ie(n,200,64,54,30,"rgba(230,246,255,.8)",.3),_t(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ie(n,300,160,250,80,"#6F9FC4"),ie(n,300,200,200,40,"#D8E8F4"),_t(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),_t(n,[[300,90],[360,20],[370,100]],"#5A88AC"),_t(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),_t(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ie(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])ct(n,e,360,70,160,20,"#8A8A98");ie(n,170,200,120,110,"#9A9AA8"),ie(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),_t(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{ct(n,20,60,560,220,110,"#4A5A6E"),ie(n,600,180,220,90,"#4A5A6E"),_t(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),ct(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ie(n,170,230,120,100,"#FBF7EC"),ie(n,120,120,66,64,"#FBF7EC"),_t(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),_t(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ie(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ie(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ie(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ie(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])ct(n,e,300,50,150,16,"#EDE6D4");ie(n,140,160,100,92,"#FBF7EC"),ie(n,120,220,70,46,"#F2B4C0"),_t(n,[[80,80],[60,40],[104,72]],"#C9A06A"),_t(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ie(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])ct(n,e,260,44,90,14,"#E890A4");ie(n,120,170,34,24,"#E06A84"),_t(n,[[160,70],[150,30],[196,70]],"#E890A4"),_t(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ie(n,230,320,170,170,"#2E2E38"),ie(n,230,160,110,104,"#2E2E38"),ie(n,230,190,70,56,"#5A5A68"),ct(n,40,260,70,240,30,"#2E2E38"),ct(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{ct(n,160,120,70,560,30,"#F2C14E"),ie(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])ct(n,e,760,30,140,12,"#E2A83A");ie(n,190,110,80,60,"#F2C14E"),ct(n,160,20,12,50,6,"#8A5A2A"),ct(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ie(n,300,260,190,100,"#8A8E9A"),ie(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])ct(n,e,320,36,100,14,"#7A7E8A");ie(n,140,170,96,90,"#8A8E9A"),_t(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),_t(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),_t(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ie(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])ct(n,e,330,44,120,16,"#D29A30");ie(n,170,200,150,150,"#A8642A"),ie(n,170,210,96,92,"#E2A83A"),ie(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ie(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ie(n,230,190,60,46,"#3A2A2A"),ie(n,150,180,40,34,"#3A2A2A"),ie(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ie(n,300,300,170,80,"#B5784A"),ie(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])ct(n,e,330,26,180,12,"#9A6238");ct(n,120,120,60,200,26,"#B5784A"),ie(n,130,110,70,56,"#B5784A"),ie(n,80,130,30,22,"#3A2A22"),_t(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ie(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ie(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])ct(n,e,360,34,190,14,"#4A3222");ct(n,110,150,90,200,36,"#5A3E2A"),ie(n,110,160,80,66,"#5A3E2A"),ie(n,60,200,54,46,"#6A4A34"),ie(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ie(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)_t(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])ct(n,e,250,40,90,14,"#4A3A30");ie(n,90,200,70,60,"#5E4A3E"),ie(n,30,220,34,28,"#7A6050"),_t(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),_t(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ie(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])ct(n,e,320,34,230,14,"#7A4A2E");ct(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),ct(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),_t(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},Oa={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(Oa,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in Oa)vr[n][3]=Oa[n][0],vr[n][4]=Oa[n][1];vr.pato=[380,400,n=>{ie(n,210,280,150,100,"#F6D44A"),ie(n,290,250,70,50,"#E8BC30",-.4),ie(n,130,140,86,82,"#F6D44A"),ie(n,40,160,56,22,"#F2913A"),ie(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),_t(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];vr.dragon=[480,440,n=>{ie(n,250,300,140,110,"#7BC86A"),ie(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)_t(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ie(n,380,210,80,50,"#9AD884",-.6),ie(n,130,160,100,92,"#7BC86A"),ie(n,70,190,46,34,"#9AD884"),_t(n,[[100,80],[90,30],[130,74]],"#F2913A"),_t(n,[[160,76],[170,26],[190,80]],"#F2913A"),ct(n,160,380,40,56,18,"#6AB05A"),ct(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];vr.caballoB=[620,560,n=>{ie(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])ct(n,e,320,34,230,14,"#E4DED2");ct(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),ct(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),_t(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Ha={},rf=n=>Ha["e"+n]||(Ha["e"+n]=Ae(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function of(n,e={}){let[t,i,s,r,o,a]=vr[n],l=Ha[n]||(Ha[n]=Ae(t,i,s)),c=a*i/t,h=new le,d=new le;h.add(d);let u=Re(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let f=new z(new _e(o*a,o*a*.5),new rt({map:rf("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(f);let g=new z(new fn(a*.45,24),new rt({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){f.material.map=rf(m)},face(m){let p=new P;h.getWorldPosition(p),d.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){u.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,A=0,v=1){return h.position.set(m,A,p),h.scale.setScalar(v),E}};return E}var is=(n,e,t=200,i=200,s)=>{let r=new z(new _e(t,i),s?new Ie({map:s,roughness:.95}):b(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Uh=(n,e=1)=>{n.add(new we("#E9EEFF","#B08A6A",1.05*e)),n.add(tt("#FFD29A",3*e,[-14,16,10],20,70))},ye={sala:(n,e)=>jr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{jr(n,{wall:"#9A4632",night:e.night}),n.add(x(2.4,.45,3.2,b("#6B4A33"),-1.7,.25,-1.4)),n.add(x(2.3,.3,3,b("#F3EEE4"),-1.7,.6,-1.4)),n.add(x(2.38,.22,2,b("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(x(.8,.22,.5,b("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new xe(e.dusk?"#E8A880":"#F2D8B8",.02),pt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),si(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),is(n,"#7A9A50");for(let t=0;t<12;t++)Yt(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(x(2.4,.1,.5,b("#8E6242"),-3.4,.5,-2.2)),n.add(x(2.4,.5,.08,b("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)Na(n,-6+t*6,-4,1,!!e.dusk);n.add(new we("#E9EEFF","#B08A6A",1)),n.add(tt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{eo(n,{seed:e.seed||2}),is(n,"",60,60,tf("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new xe("#F2D8B8",.012),pt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),is(n,"#8AAA58");let t=new le;t.add(x(6,4,5,b("#B5402E"),0,2,0));let i=new z(new st(.01,4.4,2.2,4),b("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(x(2,2.6,.1,b("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(x(.1,1,.1,b("#C9A06A"),-10+s*1.3,.5,-4));n.add(x(20,.08,.06,b("#C9A06A"),0,.9,-4)),n.add(x(20,.08,.06,b("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)Yt(n,6+s*3,-16-s%2*3,1.6,void 0,s);Uh(n)},sabana:(n,e)=>{n.fog=new xe("#F2C890",.01),pt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=Ye("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),is(n,"#C8A858");for(let i=0;i<6;i++){let s=new le;s.add(x(.3,3,.3,b("#5A3A22"),0,1.5,0));let r=new z(new st(2.6,2.2,.6,12),b("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new we("#FFE8C8","#8A6A3A",1)),n.add(tt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new xe("#F2E2C0",.012),pt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),is(n,"#B8B070");for(let t=0;t<14;t++){let i=new z(new ft(.55,16,10,0,Math.PI*2,0,Math.PI/2),b("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}Uh(n)},mar:(n,e)=>{pE(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new xe(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=is(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=De(5);for(let r=0;r<30;r++){let o=new z(new pn(.2+s()*.3,.8+s()*1.4,7),b(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Rs(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=Ye("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new we("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(tt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new xe("#162238",.04),n.add(Ei(16,20,"#2A3348","#232B3E",6)),n.add(x(16,6,.3,b("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=kt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=kt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Ae(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new z(new _e(2.5,1.3),new rt({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new we("#6E86C8","#101420",.8)),n.add(tt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new xe("#1E2236",.02),is(n,"#2F4A7A"),n.add(x(30,10,.3,b("#E8E2D2"),0,5,-8));let t=Ae(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Re(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new z(new vn(4,.35,10,48),b("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new Je("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new we("#E8E8FF","#3A3A50",.9)),n.add(tt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new xe("#E6E2D6",.03),n.add(Ei(9,40));for(let i of[-1,1]){n.add(x(.7,4.2,30,b("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(x(1.2,.05,30,b("#DDE0E4"),i*3,.5+s*.9,-10))}let t=De(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(x(.3,.3,.4,b(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=kt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new we("#FFFFFF","#B9B3A6",1)),n.add(tt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{ye.parque(n,{});for(let t=0;t<12;t++)n.add(x(.08,1.4,.08,b("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(x(8,.08,.08,b("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{jr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new xe("#8A8070",.03),pt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),is(n,"#8A8070");let t=De(8);for(let i=0;i<40;i++){let s=x(.4+t()*1.6,.3+t()*1,.4+t()*1.4,b(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}Uh(n,.8)}};function pE(n,e){n.background=new ce(e)}function mE(n,e={}){let t=Fh({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var gE=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function Nh(n,e,t){let i=Xu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(ye[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?mE(s,a):(()=>{let c=of(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{Ph.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Da(t.cam.map(([g,E])=>[g,E]),l),u=Da(t.cam.map(([g,,E])=>[g,E]),l);qu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let p=g.move(l);E.root.position.set(p[0],p[1],p[2])}E.face(c),E.eye(gE(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,A])=>l>=p&&l<A);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Da(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function af(n,e,t,i="#E8667F"){n.add(x(2.2,.45,3,b("#6B4A33"),e,.25,t)),n.add(x(2.1,.3,2.8,b("#F3EEE4"),e,.6,t)),n.add(x(2.18,.2,1.9,b(i,{roughness:.9}),e,.8,t+.5)),n.add(x(2.2,1.3,.16,b("#5A3C28"),e,.9,t-1.55)),n.add(x(.8,.2,.45,b("#FFFFFF"),e-.5,.82,t-1.1)),n.add(x(.8,.2,.45,b("#F6E6C8"),e+.5,.82,t-1.1))}function lf(n,e=Math.PI/2){n.root.rotation.z=e}function cf(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return Ae(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,f,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,f,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,f)=>c.fillText(u,t/2,i*.42+(f-(d.length-1)/2)*o*1.15))})}function hf(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return Ae(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function to(n,e="#F2C14E",t=140,i=256,s=200){return Ae(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function EE(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function df(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new Nn(i);r.colorSpace=zt;let o=new z(new _e(n,n),new Ie({map:r,transparent:!0,alphaTest:.05,side:wt,roughness:.7}));return o.set=(a,l={})=>{EE(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}function yE(n,e={}){let{w:t=512,h:i=256,bg:s="#10141E",fg:r="#FFFFFF",size:o=80,font:a="Inter",weight:l=800}=e;return Ae(t,i,c=>{c.fillStyle=s,c.fillRect(0,0,t,i),c.fillStyle=r,c.font=`${l} ${o}px ${a}`,c.textAlign="center",c.textBaseline="middle";let h=Array.isArray(n)?n:[n];h.forEach((d,u)=>c.fillText(d,t/2,i/2+(u-(h.length-1)/2)*o*1.15))})}function uf(n,e,t,i,s={}){let r=yE(e,s),o=new z(new _e(t,i),new rt({map:r,toneMapped:!1}));return n.add(o),o}var no=[0,1.56,5.36,9.04,16.62,18.8,22.8,25.88,27.56,31.5,33.02,41.36,50.86,52.88,59.24,64.24,68.12,70.56,72.84,78.22,79.52,82.16,85.94,91.64,96.72,100.5,105.3,106.96,112.34,116.42,120.64,126.16,127.62,129.18,133.28,134.7,141.34,145.32,150.62,152.46,157.26,161.88,166.72,171.6,179.72,186.12,192.54,197.92,204.5,208.58,213.74,215.08,222.5,228.68,232.84,235.5,240.52,248.28,252.54,258.84,275.84,284.96,289.84,298.6,305.74,312.1,317.94,318.88,325,332.3,336.54,339.72,344.32,348.66,357.44,363.82,375.88,386.68,391.84,393.56,399.06,404.26,412.3,418.98,425.52,430.04,433.94,443.9,449.14,455.18,458.8,471.2,477.46,486.2,490.38,494.46,503.74,512.72,514.76,520.78,523.62,529.16,535.7,539.84,543.5,546,549.68,560.2,564.62,566.08,577.14,579.58,591.08,592.54,604.48,612.84,619.2,631.66],vE=[["ultimo",0],["mes",.4],["de",.62],["clase",.78],["la",1.56],["tutora",1.86],["entra",2.2],["con",2.5],["una",2.78],["hoja",3],["en",3.28],["la",3.4],["mano",3.5],["atencion",4.34],["para",5.36],["el",5.54],["viaje",5.66],["de",5.84],["fin",6.08],["de",6.22],["curso",6.34],["cada",6.92],["uno",7.1],["tendra",7.36],["una",7.82],["pareja",8.04],["os",9.04],["sentareis",9.16],["juntos",9.56],["en",9.88],["el",10.14],["autobus",10.24],["hareis",11],["juntos",11.22],["todas",11.6],["las",12.06],["actividades",12.34],["y",13.32],["si",13.5],["alguien",13.6],["se",13.86],["pierde",14.06],["la",14.74],["culpa",14.82],["es",15.1],["de",15.44],["los",15.56],["dos",15.7],["empieza",16.62],["a",17.06],["leer",17.28],["los",17.42],["nombres",17.74],["tu",18.8],["mejor",18.92],["amigo",19.18],["con",19.76],["el",19.92],["chico",20.06],["que",20.38],["siempre",20.56],["huele",20.98],["a",21.46],["chicle",21.6],["de",21.82],["fresa",22],["la",22.8],["delegada",22.98],["con",23.68],["el",23.8],["que",23.92],["nunca",24.06],["hace",24.4],["los",24.8],["deberes",24.96],["y",25.88],["entonces",26.04],["dice",26.42],["tu",27.06],["nombre",27.26],["y",27.56],["justo",28.34],["despues",28.68],["dice",29.34],["el",30.28],["suyo",30.5],["el",31.5],["de",31.62],["tu",31.76],["crush",31.9],["cinco",33.02],["dias",33.42],["un",34.34],["autobus",34.48],["un",35.54],["albergue",35.68],["en",36.14],["la",36.26],["montana",36.36],["y",37.32],["la",37.5],["persona",37.6],["que",37.98],["te",38.16],["gusta",38.3],["pegada",38.54],["a",39.24],["ti",39.46],["todo",39.58],["el",40],["tiempo",40.24],["y",41.36],["antes",41.5],["de",41.72],["ver",41.88],["que",42.04],["pasa",42.2],["si",42.96],["te",43.02],["gustan",43.14],["estas",43.48],["historias",43.7],["de",44.26],["y",44.78],["si",44.96],["suscribete",45.58],["al",46.26],["canal",46.4],["y",46.66],["activa",46.86],["la",47.2],["campanita",47.3],["y",48.4],["ahora",48.52],["si",48.72],["vamos",49.46],["alla",49.66],["esa",50.86],["noche",51.22],["no",51.42],["duermes",51.84],["haces",52.88],["la",53.1],["maleta",53.3],["tres",53.66],["veces",54.04],["metes",55],["tu",55.38],["sudadera",55.5],["favorita",55.94],["la",56.92],["sacas",57.06],["la",57.82],["vuelves",57.94],["a",58.3],["meter",58.46],["y",59.24],["te",59.34],["descargas",59.46],["en",59.92],["el",60.08],["movil",60.2],["tres",60.46],["horas",60.8],["de",61.08],["musica",61.28],["por",61.7],["si",62.08],["ella",62.28],["te",62.44],["pregunta",62.6],["que",62.94],["escuchas",63.22],["musica",64.24],["que",64.66],["en",65.02],["realidad",65.2],["no",65.64],["has",66.2],["escuchado",66.36],["nunca",66.88],["lunes",68.12],["siete",68.96],["de",69.32],["la",69.52],["manana",69.6],["el",70.56],["autobus",70.7],["espera",71.08],["en",71.5],["la",71.64],["puerta",71.74],["del",72],["instituto",72.26],["subes",72.84],["de",73.66],["los",73.78],["primeros",73.9],["y",74.46],["guardas",74.66],["dos",75.08],["sitios",75.36],["ventanilla",76.2],["y",76.88],["pasillo",77.22],["y",78.22],["esperas",78.34],["llegan",79.52],["todos",79.84],["menos",80.76],["ella",81.14],["el",82.16],["conductor",82.32],["arranca",82.74],["el",83.28],["motor",83.38],["la",84.18],["tutora",84.3],["cuenta",84.7],["cabezas",85.04],["y",85.94],["en",86.12],["el",86.22],["ultimo",86.34],["segundo",86.64],["aparece",87.2],["corriendo",87.66],["con",88.66],["la",88.8],["mochila",88.92],["abierta",89.28],["y",89.74],["el",89.86],["pelo",89.98],["todavia",90.26],["mojado",90.68],["se",91.64],["deja",91.88],["caer",92.14],["a",92.52],["tu",92.62],["lado",92.7],["perdon",93.48],["no",94.4],["ha",94.58],["sonado",94.7],["el",94.94],["despertador",95.06],["y",96.1],["se",96.28],["rie",96.4],["tu",96.72],["dices",97.38],["hola",98.26],["solo",98.98],["hola",99.64],["llevas",100.5],["toda",100.82],["la",101.16],["noche",101.38],["pensando",101.62],["que",102.12],["decir",102.48],["y",102.86],["te",103.22],["sale",103.34],["hola",104],["hora",105.3],["y",105.56],["media",105.68],["de",105.92],["viaje",106.12],["nadie",106.96],["habla",107.46],["ella",108.34],["mira",108.56],["por",108.84],["la",109.1],["ventanilla",109.22],["tu",110.26],["miras",110.42],["al",110.86],["asiento",111],["de",111.3],["delante",111.5],["y",112.34],["entonces",112.5],["te",112.84],["ofrece",113.18],["uno",113.5],["de",113.84],["sus",114],["auriculares",114.14],["quieres",115.42],["suena",116.42],["una",116.78],["cancion",116.98],["que",117.36],["no",117.6],["conoces",117.76],["ella",118.78],["te",119],["pregunta",119.2],["si",119.52],["te",119.74],["gusta",119.86],["dices",120.64],["que",121.04],["te",121.28],["encanta",121.42],["ella",122.5],["sonrie",122.76],["en",123.86],["serio",124.06],["si",124.68],["nadie",124.86],["la",125.06],["conoce",125.24],["pillado",126.16],["tres",127.62],["horas",127.94],["de",128.18],["viaje",128.38],["curvas",129.18],["muchas",130.1],["curvas",130.58],["ella",131.76],["se",131.98],["pone",132.18],["palida",132.44],["se",133.28],["esta",133.42],["mareando",133.68],["y",134.7],["tu",134.78],["que",135.32],["tu",135.36],["abuela",135.5],["te",135.78],["obligo",135.98],["a",136.3],["meter",136.38],["en",136.6],["la",136.76],["mochila",136.86],["un",137.22],["paquete",137.42],["de",137.8],["galletas",137.94],["saladas",138.36],["por",139.12],["si",139.28],["acaso",139.48],["se",140.28],["lo",140.44],["das",140.56],["le",141.34],["abres",141.54],["la",141.82],["ventanilla",141.98],["le",142.98],["dices",143.06],["que",143.36],["mire",143.62],["al",143.94],["horizonte",144.1],["diez",145.32],["minutos",145.54],["despues",145.86],["esta",146.28],["mejor",146.74],["y",147.58],["diez",147.66],["minutos",147.88],["mas",148.26],["tarde",148.5],["se",148.88],["queda",149.34],["dormida",149.62],["con",150.62],["la",150.72],["cabeza",150.86],["en",151.2],["tu",151.42],["hombro",151.58],["no",152.46],["te",152.74],["mueves",152.9],["durante",153.8],["cuarenta",154.24],["minutos",154.62],["no",155.32],["te",156.02],["mueves",156.26],["se",157.26],["te",157.46],["duerme",157.58],["el",157.86],["brazo",158.02],["te",158.76],["pica",158.9],["la",159.16],["nariz",159.32],["y",160.2],["no",160.28],["te",160.54],["mueves",160.74],["detras",161.88],["tu",162.36],["mejor",162.74],["amigo",163.02],["os",163.3],["hace",163.62],["una",163.84],["foto",164.04],["lo",164.94],["mataras",165.1],["despues",165.64],["pero",166.72],["por",167],["que",167.56],["justo",167.84],["ella",168.32],["por",169.28],["que",169.4],["justo",169.66],["contigo",170.16],["en",171.6],["1974",171.96],["la",173],["sociologa",173.84],["mady",174.42],["segal",174.88],["estudio",175.2],["a",175.84],["un",175.98],["grupo",176.1],["de",176.3],["cadetes",176.52],["en",176.92],["una",177.16],["academia",177.32],["de",177.68],["policia",177.94],["de",178.42],["estados",178.56],["unidos",178.84],["alli",179.72],["a",180.42],["los",180.56],["cadetes",180.68],["los",181.06],["colocaban",181.26],["en",181.82],["las",181.96],["habitaciones",182.12],["y",182.76],["en",183.02],["los",183.1],["pupitres",183.22],["por",183.76],["orden",184.04],["alfabetico",184.3],["de",184.9],["apellido",185.12],["al",186.12],["cabo",186.34],["de",186.5],["unas",186.7],["semanas",186.88],["les",187.6],["pregunto",187.78],["a",188.34],["cada",188.5],["uno",188.68],["quienes",188.98],["eran",189.58],["sus",189.74],["mejores",190],["amigos",190.34],["dentro",190.82],["de",191.16],["la",191.42],["academia",191.52],["y",192.54],["casi",192.72],["siempre",192.96],["elegian",193.4],["a",193.98],["alguien",194.1],["cuyo",194.38],["apellido",194.8],["estaba",195.24],["muy",195.58],["cerca",195.98],["del",196.34],["suyo",196.56],["en",196.94],["la",197.04],["lista",197.12],["no",197.92],["a",198.22],["quien",198.4],["mas",198.5],["se",198.8],["le",198.96],["parecia",199.02],["no",199.92],["a",200.26],["quien",200.38],["tenia",200.52],["mas",200.9],["cosas",201.2],["en",201.46],["comun",201.7],["a",202.56],["quien",202.76],["tenia",202.94],["al",203.46],["lado",203.76],["la",204.5],["cercania",204.8],["es",205.34],["una",205.6],["de",205.76],["las",205.88],["cosas",206.06],["que",206.36],["mas",206.68],["amistades",207.04],["crea",207.58],["y",208.58],["ahora",208.62],["tu",208.92],["tienes",209.4],["a",209.76],["tu",210],["crush",210.1],["al",210.44],["lado",210.68],["cinco",211.88],["dias",212.26],["seguidos",212.54],["una",213.74],["de",214.02],["la",214.18],["tarde",214.28],["llegais",215.08],["al",215.48],["albergue",215.7],["esta",216.54],["en",216.84],["mitad",217.02],["de",217.26],["un",217.48],["bosque",217.6],["con",218.22],["un",218.4],["rio",218.54],["un",219.32],["lago",219.44],["y",219.76],["montanas",220.16],["por",220.76],["todas",221.06],["partes",221.4],["el",222.5],["monitor",222.68],["os",223.02],["reune",223.28],["en",223.68],["la",223.82],["explanada",223.92],["primera",224.96],["actividad",225.3],["de",225.8],["la",225.98],["tarde",226.1],["el",226.88],["puente",227.08],["colgante",227.46],["es",228.68],["un",228.9],["puente",229.08],["de",229.32],["cuerdas",229.52],["y",229.96],["tablas",230.12],["de",230.42],["madera",230.6],["encima",230.94],["de",231.72],["un",232],["barranco",232.14],["y",232.84],["se",233.22],["mueve",233.4],["mucho",234.46],["ella",235.5],["se",235.72],["agarra",235.94],["a",236.3],["la",236.4],["barandilla",236.46],["y",237],["no",237.34],["da",237.56],["ni",237.74],["un",238.06],["paso",238.26],["yo",239.24],["no",239.46],["puedo",239.6],["y",240.52],["tu",240.68],["tampoco",240.9],["puedes",241.36],["te",242.4],["tiemblan",242.52],["las",243.02],["piernas",243.2],["pero",244.14],["le",244.38],["tiendes",244.56],["la",244.92],["mano",245.04],["vamos",245.9],["juntos",246.1],["sin",246.9],["mirar",247.12],["abajo",247.38],["y",248.28],["cruzais",248.38],["paso",248.82],["a",249.72],["paso",249.94],["con",250.7],["el",250.92],["corazon",251.06],["a",251.58],["mil",251.8],["al",252.54],["llegar",252.72],["al",252.94],["otro",253.12],["lado",253.3],["ella",253.94],["todavia",254.16],["te",254.62],["esta",254.88],["apretando",255.18],["la",255.68],["mano",255.82],["y",256.52],["tarda",256.72],["un",256.98],["poco",257.2],["en",257.44],["soltarla",257.66],["y",258.84],["aqui",259],["viene",259.2],["uno",259.5],["de",259.74],["los",259.9],["experimentos",259.98],["mas",260.84],["famosos",261.18],["de",261.66],["la",261.86],["psicologia",261.96],["en",263.02],["1974",263.2],["donald",265.06],["dutton",265.38],["y",265.96],["arthur",266.22],["aron",266.46],["hicieron",266.86],["una",267.36],["prueba",267.6],["en",267.88],["canada",268.12],["en",268.8],["el",268.94],["puente",269.08],["colgante",269.36],["de",269.88],["capilano",270.06],["un",271.02],["puente",271.2],["estrecho",271.5],["que",272.38],["se",272.42],["balancea",272.56],["a",273.36],["setenta",273.6],["metros",274.04],["sobre",274.46],["un",274.84],["rio",275.08],["una",275.84],["chica",276.02],["paraba",276.32],["a",276.7],["los",276.84],["hombres",276.96],["que",277.26],["acababan",277.52],["de",277.96],["cruzarlo",278.12],["les",279],["pedia",279.12],["rellenar",279.48],["una",279.92],["encuesta",280.1],["y",280.5],["les",280.9],["daba",281.04],["su",281.26],["numero",281.5],["de",281.78],["telefono",281.96],["por",282.66],["si",282.84],["querian",283],["saber",283.3],["mas",283.58],["del",283.92],["estudio",284.08],["hicieron",284.96],["lo",285.34],["mismo",285.54],["en",285.82],["otro",286.08],["puente",286.26],["uno",287.12],["bajo",287.3],["ancho",288.1],["y",288.48],["firme",288.86],["que",289.84],["paso",289.96],["de",290.78],["los",290.98],["que",291.1],["cruzaron",291.24],["el",291.64],["puente",291.82],["que",292.16],["daba",292.32],["miedo",292.56],["la",293.2],["llamo",293.3],["casi",293.62],["la",293.98],["mitad",294.2],["de",294.94],["los",295.12],["del",295.24],["puente",295.44],["firme",295.74],["mas",296.16],["o",296.6],["menos",296.74],["uno",296.94],["de",297.38],["cada",297.56],["ocho",297.74],["por",298.6],["que",298.88],["porque",299.44],["el",299.7],["cuerpo",299.9],["cuando",300.46],["tiene",300.74],["miedo",301.08],["se",301.76],["acelera",301.9],["el",302.86],["corazon",303],["late",303.38],["fuerte",303.76],["te",304.76],["sudan",304.88],["las",305.24],["manos",305.42],["y",305.74],["el",306.42],["cerebro",306.56],["se",306.94],["confunde",307.12],["me",308.24],["late",308.42],["el",308.64],["corazon",308.78],["sera",309.76],["por",310.16],["la",310.28],["persona",310.42],["que",310.76],["tengo",310.96],["delante",311.2],["asi",312.1],["que",312.44],["si",312.96],["le",313.18],["late",313.28],["el",313.54],["corazon",313.7],["a",314.04],["mil",314.24],["quiza",315],["no",315.36],["sea",315.52],["solo",315.8],["por",316.2],["el",316.44],["puente",316.58],["martes",317.94],["gymkana",318.88],["por",319.56],["parejas",319.74],["la",320.72],["prueba",320.96],["mas",321.32],["dificil",321.8],["la",322.88],["carrera",323],["a",323.48],["tres",323.64],["piernas",323.94],["el",325],["monitor",325.2],["os",325.56],["ata",325.76],["el",325.94],["tobillo",326.12],["de",326.46],["uno",326.66],["al",326.88],["del",327.12],["otro",327.24],["teneis",327.98],["que",328.32],["correr",328.42],["asi",328.68],["hasta",328.98],["el",329.28],["lago",329.46],["recoger",330.02],["una",330.4],["bandera",330.6],["y",331.02],["volver",331.4],["os",332.3],["caeis",332.5],["a",332.88],["los",333.04],["diez",333.2],["metros",333.46],["os",334.46],["volveis",334.6],["a",334.96],["caer",335.12],["a",335.4],["los",335.48],["veinte",335.66],["ella",336.54],["se",336.8],["rie",337.02],["tanto",337.3],["que",337.58],["no",337.9],["puede",338.06],["ni",338.42],["levantarse",338.62],["al",339.72],["final",339.92],["llegais",340.2],["los",340.68],["ultimos",340.88],["llenos",341.78],["de",342.24],["barro",342.44],["y",342.86],["sin",343.26],["bandera",343.48],["pero",344.32],["no",344.56],["os",344.86],["importa",345.06],["es",346.04],["la",346.2],["mejor",346.4],["carrera",346.8],["de",347.42],["vuestra",347.56],["vida",347.86],["y",348.66],["esto",348.84],["tambien",349.18],["tiene",349.82],["explicacion",350.22],["en",351.22],["el",351.36],["ano",351.48],["2000",351.64],["arthur",352.46],["aron",352.79],["el",353.48],["mismo",353.6],["del",353.86],["puente",354.06],["hizo",354.88],["otro",355.12],["experimento",355.42],["con",356.16],["parejas",356.3],["a",357.44],["unas",357.62],["les",357.78],["toco",358.04],["hacer",358.4],["algo",358.66],["aburrido",358.96],["pasar",359.94],["una",360.3],["pelota",360.46],["despacio",360.82],["de",361.42],["un",361.66],["lado",361.84],["a",362.1],["otro",362.3],["de",362.54],["una",362.76],["sala",362.98],["a",363.82],["otras",364],["algo",364.26],["nuevo",364.86],["y",365.34],["emocionante",365.54],["atadas",366.66],["por",367.08],["la",367.32],["muneca",367.48],["y",367.92],["el",368.04],["tobillo",368.14],["tenian",368.8],["que",369.1],["cruzar",369.34],["un",369.68],["recorrido",369.86],["de",370.4],["obstaculos",370.52],["empujando",371.06],["un",371.74],["cojin",371.94],["sin",372.32],["usar",372.58],["las",372.94],["manos",373.14],["y",373.86],["con",374.06],["el",374.26],["tiempo",374.38],["contado",374.74],["las",375.88],["parejas",376.04],["que",376.42],["hicieron",376.62],["la",376.98],["prueba",377.16],["dificil",377.42],["dijeron",377.88],["despues",378.62],["que",378.96],["se",379.26],["sentian",379.38],["mas",379.88],["unidas",380.24],["hacer",381.3],["cosas",381.54],["nuevas",381.86],["juntos",382.16],["sobre",383.04],["todo",383.32],["si",383.62],["son",383.82],["un",384.04],["poco",384.18],["locas",384.36],["acerca",385.12],["a",385.48],["la",385.78],["gente",385.84],["y",386.68],["no",386.88],["hay",387.02],["nada",387.16],["mas",387.4],["nuevo",387.78],["y",388.06],["mas",388.26],["loco",388.52],["que",388.88],["acabar",389.14],["dentro",389.46],["de",389.84],["un",390.06],["charco",390.2],["con",390.62],["tu",390.84],["crush",391],["martes",391.84],["por",392.36],["la",392.56],["noche",392.7],["hoguera",393.56],["junto",393.9],["al",394.18],["lago",394.46],["la",395.2],["tutora",395.38],["reparte",395.72],["nubes",396.18],["de",396.62],["azucar",396.74],["para",397.08],["tostarlas",397.38],["en",398.02],["el",398.16],["fuego",398.26],["la",399.06],["tuya",399.26],["se",399.6],["quema",399.76],["la",400.54],["de",400.68],["ella",400.84],["se",401.04],["cae",401.32],["al",401.66],["fuego",401.8],["os",402.66],["reis",402.86],["otra",403.22],["vez",403.42],["todos",404.26],["se",404.46],["van",404.72],["a",404.86],["dormir",404.96],["y",405.22],["vosotros",405.68],["os",406.14],["quedais",406.32],["un",406.66],["rato",406.88],["mas",407.16],["mirando",407.84],["las",408.26],["estrellas",408.46],["en",409.52],["la",409.66],["ciudad",409.78],["nunca",410.12],["se",410.68],["ven",411.1],["tantas",411.24],["y",412.3],["entonces",412.46],["ella",412.86],["dice",413.46],["algo",413.76],["raro",414.08],["sabes",415.06],["que",415.4],["llevo",415.56],["todo",415.84],["el",416.12],["curso",416.34],["sentandome",416.58],["detras",417.3],["de",417.7],["ti",417.84],["en",418],["mates",418.14],["tu",418.98],["no",419.18],["lo",419.4],["sabias",419.54],["y",420.28],["no",420.6],["hemos",420.76],["hablado",420.92],["ni",421.4],["una",421.68],["vez",421.9],["hasta",422.62],["esta",422.9],["semana",423.18],["se",423.54],["encoge",424.2],["de",424.6],["hombros",424.74],["pero",425.52],["no",425.82],["se",426.4],["ya",427.08],["me",427.28],["caias",427.38],["bien",427.68],["antes",427.96],["de",428.72],["hablar",428.9],["contigo",429.1],["como",430.04],["puede",430.26],["caerte",430.62],["bien",430.98],["alguien",431.28],["con",431.64],["quien",431.94],["no",432.12],["has",432.4],["hablado",432.56],["nunca",432.92],["en",433.94],["1992",434.16],["dos",435.3],["psicologos",436.22],["de",436.84],["la",436.96],["universidad",437.06],["de",437.62],["pittsburgh",437.78],["richard",438.7],["moreland",438.94],["y",439.5],["scott",439.74],["beach",440.06],["hicieron",440.76],["un",441.12],["experimento",441.32],["en",442.04],["una",442.14],["clase",442.32],["de",442.62],["la",442.78],["universidad",442.88],["pidieron",443.9],["a",444.34],["cuatro",444.5],["chicas",444.78],["parecidas",445.18],["que",445.74],["fueran",446.06],["a",446.44],["esa",446.52],["clase",446.7],["durante",447.02],["todo",447.34],["el",447.88],["semestre",448.1],["una",449.14],["no",449.36],["fue",449.7],["nunca",449.92],["otra",450.68],["fue",451],["cinco",451.24],["veces",451.54],["otra",452.34],["diez",452.68],["y",453.56],["otra",453.72],["quince",454],["no",455.18],["hablaban",455.42],["con",455.94],["nadie",456.18],["solo",456.98],["se",457.3],["sentaban",457.5],["alli",458.02],["al",458.8],["final",458.96],["del",459.18],["curso",459.4],["ensenaron",459.76],["sus",460.54],["fotos",460.76],["a",461.06],["los",461.28],["alumnos",461.4],["y",462.3],["cuantas",462.46],["mas",462.88],["veces",463.1],["habian",463.46],["visto",463.84],["a",464.16],["una",464.38],["chica",464.5],["en",464.86],["clase",465],["mas",465.62],["simpatica",465.96],["y",466.56],["mas",466.76],["atractiva",467.02],["les",467.62],["parecia",467.78],["sin",468.28],["haber",468.98],["hablado",469.24],["con",469.66],["ella",469.92],["nunca",470.14],["lo",471.2],["llaman",471.48],["el",471.76],["efecto",472.1],["de",472.42],["la",472.7],["mera",472.82],["exposicion",473.08],["lo",474.22],["que",474.4],["vemos",474.54],["muchas",474.78],["veces",475.16],["nos",475.58],["acaba",476.06],["gustando",476.4],["o",477.46],["sea",477.62],["que",478.26],["durante",478.36],["todo",478.58],["el",479.04],["curso",479.26],["mientras",480.06],["tu",480.28],["creias",480.64],["que",481.06],["ella",481.32],["ni",481.6],["sabia",481.84],["como",482.24],["te",482.54],["llamabas",482.7],["tu",483.7],["nuca",483.86],["le",484.24],["iba",484.46],["cayendo",484.68],["bien",485.12],["miercoles",486.2],["excursion",487.24],["al",487.86],["pico",488.04],["tres",488.78],["horas",488.98],["de",489.34],["subida",489.54],["a",490.38],["mitad",490.52],["de",490.68],["camino",490.92],["ella",491.26],["tropieza",491.72],["y",492.24],["se",492.44],["hace",492.56],["una",492.76],["herida",493],["en",493.34],["la",493.46],["rodilla",493.56],["tu",494.46],["llevas",494.62],["tiritas",494.9],["porque",495.4],["tu",495.86],["abuela",496.06],["tambien",496.34],["te",496.74],["obligo",497],["a",497.34],["meterlas",497.44],["ella",498.34],["te",498.66],["mira",498.88],["tu",499.66],["abuela",499.74],["ha",500.1],["hecho",500.26],["tu",500.4],["mochila",500.58],["si",501.46],["me",502.1],["cae",502.34],["bien",502.54],["tu",502.72],["abuela",502.92],["arriba",503.74],["todos",504.18],["se",504.58],["hacen",504.88],["fotos",505.1],["ella",506],["te",506.18],["pide",506.36],["que",506.6],["te",506.74],["pongas",506.88],["a",507.24],["su",507.36],["lado",507.44],["y",507.68],["en",508.28],["la",508.4],["foto",508.52],["sin",509.14],["que",509.38],["nadie",509.58],["se",509.82],["lo",510.04],["diga",510.18],["te",510.9],["coge",511.02],["del",511.34],["brazo",511.5],["jueves",512.72],["ultima",513.5],["noche",513.86],["fiesta",514.76],["en",515.1],["el",515.28],["comedor",515.4],["del",515.82],["albergue",515.98],["luces",516.92],["de",517.26],["colores",517.48],["musica",518.22],["alta",518.64],["todos",519.48],["bailan",519.74],["tu",520.78],["no",520.96],["bailas",521.46],["nunca",522.28],["bailas",522.66],["y",523.62],["entonces",523.72],["ponen",524.08],["una",524.62],["cancion",524.78],["la",525.66],["de",525.88],["los",526.02],["auriculares",526.12],["la",527.2],["que",527.42],["nadie",527.6],["conoce",527.94],["ella",529.16],["cruza",529.36],["todo",529.76],["el",530.1],["comedor",530.28],["hasta",530.7],["donde",530.92],["estas",531.18],["tu",531.48],["es",532.2],["tu",532.38],["cancion",532.46],["favorita",532.72],["no",533.4],["y",533.98],["te",534.1],["saca",534.24],["a",534.62],["bailar",534.72],["bailas",535.7],["fatal",536.06],["ella",536.94],["tambien",537.22],["y",538.04],["no",538.22],["importa",538.38],["nada",538.82],["la",539.84],["tutora",540.02],["os",540.38],["mira",540.56],["desde",540.8],["la",541],["puerta",541.2],["y",541.5],["sonrie",542.24],["viernes",543.5],["viaje",544.5],["de",544.84],["vuelta",545.08],["esta",546],["vez",546.24],["ella",546.52],["llega",546.9],["la",547.34],["primera",547.34],["al",547.64],["autobus",547.84],["y",548.28],["te",548.9],["guarda",549.02],["el",549.32],["sitio",549.42],["una",549.68],["hora",550.44],["de",550.76],["curvas",550.92],["ella",551.66],["te",552.12],["ofrece",552.28],["un",552.58],["auricular",552.82],["y",553.26],["tu",553.88],["le",554.06],["ofreces",554.24],["una",554.66],["galleta",554.9],["salada",555.26],["por",555.84],["si",556.04],["acaso",556.18],["y",556.96],["entonces",557.12],["mirando",557.92],["por",558.32],["la",558.56],["ventanilla",558.68],["te",559.18],["dice",559.4],["tengo",560.2],["que",560.44],["confesarte",560.64],["una",561.18],["cosa",561.36],["las",562.22],["parejas",562.38],["no",562.82],["las",563.14],["hizo",563.32],["la",563.54],["tutora",563.7],["te",564.62],["la",564.74],["quedas",564.86],["mirando",565.14],["bueno",566.08],["si",566.82],["pero",567.48],["la",567.7],["semana",567.94],["pasada",568.2],["le",568.7],["pedi",568.88],["que",569.14],["me",569.22],["pusiera",569.36],["contigo",569.72],["le",570.64],["dije",570.8],["que",571],["eras",571.22],["la",571.46],["unica",571.6],["persona",571.88],["de",572.34],["la",572.48],["clase",572.6],["con",572.88],["la",573.16],["que",573.28],["no",573.42],["habia",573.62],["hablado",573.86],["nunca",574.24],["y",574.56],["que",575.2],["queria",575.36],["saber",575.62],["como",575.92],["eras",576.24],["le",577.14],["preguntas",577.3],["y",578.3],["como",578.5],["soy",578.8],["ella",579.58],["se",579.78],["lo",579.98],["piensa",580.08],["mientes",581.1],["fatal",581.44],["sobre",582.04],["la",582.4],["musica",582.56],["y",583.48],["tu",583.5],["abuela",583.62],["es",583.9],["una",584.14],["crack",584.32],["se",585.14],["rie",585.32],["y",585.66],["apoya",586.1],["otra",586.42],["vez",586.68],["la",586.92],["cabeza",587.1],["en",587.44],["tu",587.6],["hombro",587.76],["pero",588.54],["esta",588.62],["vez",588.86],["no",589.14],["esta",589.62],["dormida",589.82],["cinco",591.08],["de",591.42],["la",591.64],["tarde",591.72],["el",592.54],["autobus",592.64],["llega",593.06],["al",593.32],["instituto",593.52],["los",594.5],["padres",594.66],["esperan",594.94],["en",595.48],["la",595.62],["puerta",595.7],["tu",596.56],["mejor",596.64],["amigo",596.9],["se",597.16],["baja",597.42],["el",597.62],["primero",597.78],["y",598.06],["te",598.3],["ensena",598.38],["el",598.76],["movil",598.88],["la",599.16],["foto",599.76],["del",600.04],["lunes",600.26],["ella",600.96],["dormida",601.34],["en",601.84],["tu",601.96],["hombro",602.1],["esto",602.84],["vale",603.22],["oro",603.54],["y",604.48],["antes",604.64],["de",604.84],["irse",605.02],["ella",605.7],["se",605.88],["da",606.06],["la",606.18],["vuelta",606.28],["oye",607.12],["el",607.84],["ano",608],["que",608.14],["viene",608.3],["pedimos",608.56],["ser",609.44],["pareja",609.7],["otra",610.06],["vez",610.2],["ya",610.94],["no",611.12],["hara",611.24],["falta",611.38],["que",611.58],["me",611.76],["lo",611.86],["pongan",611.96],["y",612.84],["te",612.96],["quedas",613.06],["en",613.36],["la",613.5],["acera",613.64],["con",613.9],["la",614.1],["mochila",614.24],["las",615.12],["galletas",615.26],["que",615.64],["sobraron",615.8],["y",616.26],["una",616.66],["sonrisa",616.86],["que",617.46],["no",617.7],["se",617.94],["te",618.12],["quita",618.24],["al",619.2],["final",619.34],["no",619.6],["fue",620.22],["la",620.42],["suerte",620.54],["no",621.4],["fue",621.6],["la",621.78],["lista",621.92],["fue",622.74],["alguien",622.96],["que",623.26],["se",623.5],["atrevio",623.62],["a",624.06],["pedir",624.12],["lo",624.34],["que",624.62],["queria",624.76],["y",625.68],["cinco",625.76],["dias",626.04],["de",626.32],["puentes",626.5],["barro",627.3],["y",627.86],["canciones",628.12],["que",628.58],["nadie",628.88],["conoce",629.18],["hicieron",629.8],["el",630.44],["resto",630.6],["y",631.66],["tu",631.82],["que",632.42],["habrias",632.5],["hecho",632.88],["le",633.7],["habrias",633.8],["pedido",634.12],["a",634.5],["la",634.58],["tutora",634.66],["ir",635.08],["con",635.18],["tu",635.36],["crush",635.5],["te",636.28],["leo",636.4],["en",636.68],["los",636.76],["comentarios",636.86]],Bh=(n,e=0)=>{for(let[t,i]of vE)if(i>=e&&t===n)return i;return e};var za=(n,e,t=200,i=200)=>{let s=new z(new _e(t,i),b(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Tt=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Ae(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})},ff=(n,e=1.2,t)=>Re(Ae(512,280,i=>{i.clearRect(0,0,512,280),i.fillStyle="#FBF7EC",i.strokeStyle="#2A2A34",i.lineWidth=8,i.beginPath(),i.roundRect(10,10,492,200,60),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,205),i.lineTo(80,270),i.lineTo(170,205),i.fill(),i.stroke(),i.fillStyle="#2A2A34",i.font=`900 ${t||(n.length>14?40:n.length>10?54:80)}px Fraunces`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,256,112)}),e,e*.55);function pf(n="#E9B44C"){let e=new le;e.add(x(2.4,2.4,9,b(n,{roughness:.5}),0,1.5,0));for(let i=0;i<6;i++)for(let s of[-1,1])e.add(x(.02,.8,1.1,b("#1A2233",{roughness:.1,metalness:.5}),s*1.21,2,-3.6+i*1.4));e.add(x(2.2,1,.02,b("#1A2233",{roughness:.1}),0,2,4.51));let t=x(.02,1.8,1,b("#2A2A34"),1.22,1.2,2.8);e.add(t);for(let i of[-3,3])for(let s of[-1,1]){let r=new z(new st(.45,.45,.3,20),b("#1A1A20"));r.rotation.z=Math.PI/2,r.position.set(s*1.1,.45,i),e.add(r)}return e}function ka(){let n=new le;for(let i=0;i<5;i++){let s=x(.6,.08,.08,b("#5A3A22"),0,.06,0);s.rotation.y=i/5*Math.PI,n.add(s)}let e=[];for(let i=0;i<3;i++){let s=Ye(["#FFB040","#FF7A30","#FFE080"][i],.5-i*.1,.9);s.position.y=.25+i*.1,n.add(s),e.push(s)}let t=new Je("#FF9A40",6,6,1.6);return t.position.y=.5,n.add(t),n.tick=i=>{e.forEach((s,r)=>{s.scale.setScalar((.5-r*.1)*(1+Math.sin(i*13+r*2)*.15))}),t.intensity=6+Math.sin(i*17)*1.2},n}function AE(n,e=.5){let t=new le,i=Ae(1024,256,r=>{r.clearRect(0,0,1024,256);let o=De(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new z(new _e(400,100),new rt({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:bn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function _E(n,e=0,t=-1){for(let i=0;i<4;i++){let s=x(5,.22,.6,b("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new z(new pn(.16,.35,6),b(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function Oh(n,e=40,t=3,i=[-12,12,-40,4]){let s=De(t),r=Ae(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Re(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function mf(n,e=200,t=5,i=10,s=30,r=2){let o=De(t),a=Ae(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Re(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}ye.pasteleria=n=>{n.fog=new xe("#F3D2C0",.02),n.add(Ei(16,14,"#F2E6DA","#E2CFC0",8)),n.add(x(16,5,.3,b("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(x(.12,5,.05,b("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(x(5.4,1,.9,b("#8A5A3C"),0,.5,-1.2)),n.add(x(5.5,.08,1,b("#F4EEE6"),0,1.04,-1.2)),n.add(x(3.6,.1,.5,b("#F4EEE6"),0,2.1,-3)),n.add(x(3.6,.1,.5,b("#F4EEE6"),0,2.9,-3));let e=Re(Tt(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new we("#FFF0F0","#A07060",1));let t=tt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new Je("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};ye.espacio=n=>{n.background=new ce("#05060E"),_n(n,2600,200,3),n.add(new we("#8FA8FF","#101020",.5));let e=new Di("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};ye.aula=n=>{n.fog=new xe("#E8DCC8",.02),n.add(Ei(16,16,"#C9B89A","#BBA98A",10)),n.add(x(16,5,.3,b("#E8DCC0"),0,2.5,-3.6)),n.add(x(4.4,1.8,.06,b("#2F5A48"),0,2.3,-3.42)),n.add(x(4.6,.1,.2,b("#8E6242"),0,1.36,-3.35));let e=Re(Ae(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new we("#FFFFFF","#9A8A70",1)),n.add(tt("#FFE8C8",2.2,[-6,8,6],10,40))};ye.ruaV=(n,e)=>{eo(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(Oh(n,60,4),mf(n,260,6,9,40))};ye.apagon=(n,e)=>{n.fog=new xe("#0A0C18",.03),pt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),_n(n,1800,200,4),Ua(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(ns(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(ns(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new we("#5A64A8","#141420",.5)),n.add(tt("#8A9AE0",.7,[-10,20,10],30,90))};ye.azotea=(n,e)=>{n.background=new ce("#03040A"),n.fog=new xe("#060814",.008),_n(n,4200,200,9),AE(n,e.ang??.45),si(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=x(16,.3,12,b("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(x(16,.5,.2,b("#4A4A54"),0,.25,-8)),n.add(x(1.4,1.2,1.4,b("#4A4A54"),4.5,.6,-5)),n.add(new we("#6A78C8","#141420",.55)),n.add(tt("#9AAAF0",.6,[-6,10,6],12,40))};ye.panaderia=n=>{ye.pasteleria(n);let e=Re(Tt(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};ye.metro=n=>{n.background=new ce("#0A0C10"),n.fog=new xe("#0C1014",.07);let e=b("#4A4E54",{roughness:.9,side:sn}),t=new z(new st(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new le,s=new z(new st(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=x(6.4,.1,60,b("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(x(.08,.12,60,b("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(x(2.2,.08,.2,b("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new Je("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=Ye("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new we("#8A90A0","#202024",1.1))};ye.bosque=(n,e)=>{n.fog=new xe(e.nieve?"#E8EEF4":"#C8D0B8",.025),pt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),za(n,e.nieve?"#F2F4F8":"#6E8A48");let t=De(14);for(let i=0;i<26;i++)Yt(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=ns(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),Oh(n,0)}n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(tt("#FFE8C0",2.4,[-10,14,8],18,60))};ye.rio=(n,e)=>{ye.parque(n,e);let t=new z(new _e(60,3.4),new Ie({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};ye.playa=(n,e)=>{let t=!!e.dusk;n.fog=new xe(t?"#F2A880":"#CFE8F0",.006),pt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=Ye(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=za(n,"#E8D4A0"),r=new z(new _e(800,400),new Ie({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=x(800,.02,.6,b("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new z(new Li(1.1,0),b("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new we(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(tt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};ye.svalbard=n=>{n.fog=new xe("#C8D8E8",.02),pt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),za(n,"#F4F6FA");let e=De(19);for(let l=0;l<8;l++){let c=new z(new pn(10+e()*12,10+e()*10,7),b("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new z(new ft(14,32,16,0,Math.PI*2,0,Math.PI/2),b("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=x(3,4.4,6,b("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=x(1.4,2.2,.1,b("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=kt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=Ye("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=Ye("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new we("#D8E8FF","#8A9AB0",1.1)),n.add(tt("#F0F4FF",1.6,[-8,10,8],16,50))};ye.huerto=(n,e)=>{ye.parque(n,e),_E(n,0,-1.4)};ye.biblio=n=>{n.fog=new xe("#4A3A2A",.03),n.add(ri(18,14,"#6D4A33")),n.add(x(18,6,.3,b("#5A3E2A"),0,3,-3.4));let e=De(8);for(let s=0;s<5;s++){n.add(x(14,.06,.4,b("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(x(o,a,.3,b(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new we("#FFE8C8","#3A2A1C",.7));let t=new Je("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=Ye("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};ye.hotel=n=>{n.fog=new xe("#E8D8C0",.02),n.add(ri(18,14,"#8A5A3A")),n.add(x(18,6,.3,b("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(x(2.4,2.6,.05,b("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Re(Ae(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=x(3.2,.6,2.4,b("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(x(3.3,1.4,.2,b("#6A3A2A"),0,.7,-2.8)),Oh(n,0);let t=Re(Ae(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new we("#FFF0E0","#8A6A4A",1)),n.add(tt("#FFE0B0",2,[-4,8,6],10,30))};ye.selva=n=>{n.fog=new xe("#7AA870",.05),pt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),za(n,"#3E5A2A");let e=De(23);for(let t=0;t<40;t++)Yt(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);mf(n,160,9,12,12,3),n.add(new we("#D8F0C8","#2A3A1A",.9)),n.add(tt("#FFF0C0",2.2,[-6,14,4],14,50))};ye.desierto=n=>{ye.sabana(n,{})};var zh=(n,e,t=200,i=200)=>{let s=new z(new _e(t,i),b(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var ME=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return Ae(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function kh(n,e=.9,t={}){let i=ME(n,t),s=new z(new _e(e,e*(t.h||360)/(t.w||512)),new Ie({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function Ga(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new le,[d,u,f,g]=s,E=()=>l?new Ie({map:Ba(i,3,3),roughness:.95}):b(i,{roughness:.9}),m=d-f/2+e/2,p=e/2-(d+f/2),A=u-g/2,v=t-(u+g/2);h.add(x(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(x(p,t,.3,E(),e/2-p/2,t/2,0)),h.add(x(f,A,.3,E(),d,A/2,0)),h.add(x(f,v,.3,E(),d,t-v/2,0));let y=b("#F4F0E4");for(let[H,k,X,te]of[[d-f/2,u,.1,g+.1],[d+f/2,u,.1,g+.1],[d,u+g/2,f+.2,.1],[d,u,.05,g]])h.add(x(X,te,.36,y,H,k,0));h.add(x(f+.4,.1,.5,y,d,u-g/2-.03,.12));let L=3.2,C=b(o,{roughness:.9});h.add(x(f+3,t,.2,C,d,t/2,-L)),h.add(x(.2,t,L,C,d-f/2-1.4,t/2,-L/2)),h.add(x(.2,t,L,C,d+f/2+1.4,t/2,-L/2)),h.add(x(f+3,.2,L,b("#8A6A4A"),d,A-c,-L/2)),h.add(x(f+3,.2,L,C,d,u+g/2+.5,-L/2));let w=new Je("#FFC880",a?9:2.5,7,1.4);w.position.set(d,u+.6,-1.2),h.add(w);let F=kt(f+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-L+.12),h.add(F);let S=x(f-.04,g,.06,b("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let _=[];for(let H=0;H<10;H++){let k=x(f-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(k),_.push([k,H])}let I=H=>{let k=Math.max(.001,g*H);S.scale.y=k/g,S.position.y=u+g/2-k/2,S.visible=H>.01,_.forEach(([X,te])=>{let Z=u+g/2-(te+.5)*g/10;X.visible=H>.01&&Z>u+g/2-k,X.position.y=Z})};return I(0),h.userData={persiana:I,luz:H=>{w.intensity=H?9:2.5,F.material.emissiveIntensity=H?.35:.08},win:s,lamp:w},h.children.forEach(H=>{H.castShadow=H.castShadow??!0,H.receiveShadow=!0}),h}function io(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new le;l.add(x(i,s,r,b(e,{roughness:.9}),0,s/2,-r/2));let c=new z(new st(.01,i*.62,2.4,4,1),b(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(x(1.1,2.1,.1,b(o),0,1.05,.02)),l.add(x(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Ie({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(x(1.3,1.2,.06,h(),d,u,.03)),l.add(x(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(x(2,.2,1.2,b("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function Hh(n=4){let e=new le,t=De(n*7);for(let i=0;i<n*3;i++){let s=new z(new ft(.42+t()*.12,12,10),b(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function gf(n=8,e="#E8E2D2"){let t=new le;for(let i=0;i<=n*4;i++)t.add(x(.1,1.3,.05,b(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(x(n,.08,.06,b(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function Va(){let n=new le,e=De(4);for(let t=0;t<7;t++){let i=new z(new ft(.35,12,10),b("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new z(new ft(.08,10,8),b(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function SE(){let n=new le;n.add(x(2.2,2,1.8,b("#8A6A4A",{roughness:.9}),0,1,0));let e=x(2.6,.12,2.3,b("#5A3E2A"),0,2.12,0);return n.add(e),n.add(x(.8,1.5,.05,b("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Ef(n=.6){let e=x(n,n*.8,n,b("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(x(n*1.01,.06,.15,b("#E8D8A8"),0,n*.4,0)),e}function yf(){let n=new le;n.add(x(.04,1.4,.04,b("#E8667F"),0,.7,0));let e=new z(new ft(.28,16,12),new Ie({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new z(new vn(.18,.04,8,16,Math.PI*1.2),b("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=Ye("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function vf(n=.9,e=1.2){let t=Ae(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new le;i.add(x(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new z(new _e(n,e),b("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Af(n=.9,e=1.2){let t=Ae(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new le;i.add(x(n+.08,e+.08,.04,"#111",0,0,0));let s=new z(new _e(n,e),b("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}var TE=(n,e)=>{ye.quarto(n,e);let t=vf();t.position.set(-3,2.8,-2.8),n.add(t)};ye.cuartoYo=(n,e)=>{TE(n,e);let t=Ga({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=yf();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Af(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&_n(n,600,120,2)};ye.cuartoElla=(n,e)=>{ye.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(x(2.4,.45,3.2,b("#6B4A33"),1.7,.25,-1.4)),n.add(x(2.3,.3,3,b("#F3EEE4"),1.7,.6,-1.4)),n.add(x(2.38,.22,2,b("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=yf();t.position.set(-3.2,0,-2.2),n.add(t);let i=Af();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Ga({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=vf(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&_n(n,600,120,2)};ye.entreCasas=(n,e)=>{let t=!!e.night;n.background=new ce(t?"#0A0C1E":"#9FC8E8"),n.fog=new xe(t?"#0E1028":"#CFE0EE",.02),pt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&_n(n,1600,120,5),zh(n,t?"#24301E":"#6E9A50");let i=Ga({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Ga({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=gf(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new we(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(tt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};ye.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new xe(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),pt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),zh(n,t?"#24301E":"#6E9A50");let s=x(200,.02,6,b(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=x(200,.1,2,b("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let f=io({col:d,roof:u,night:t});f.position.set(h,0,-3),n.add(f)}let a=Hh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Hh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Hh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])Yt(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));si(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new we(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(tt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};ye.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new xe(t?"#E8A880":"#F2E2C8",.015),pt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),zh(n,"#6E9A50");let i=gf(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=Va();s.position.set(1.6,0,-1.2),n.add(s);let r=Va();r.position.set(2.8,0,-2.6),n.add(r);let o=SE();o.position.set(-2.4,0,-3.2),n.add(o);let a=io({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=io({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])Yt(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new we("#E9EEFF","#6A5A4A",1.05)),n.add(tt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};ye.esquina=(n,e)=>{ye.barrio(n,e)};ye.concurso=n=>{n.background=new ce("#140C24"),n.fog=new xe("#1A1030",.03);let e=x(20,.2,12,b("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=Ye(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Re(Tt(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=x(1.2,1.1,.7,b("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(x(1.3,.1,.8,b("#F2C14E"),0,1.12,-.6)),n.add(new we("#B8A8FF","#2A1A3A",.9));let s=new Bn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};ye.residencia=n=>{n.fog=new xe("#E8DCC8",.02),n.add(ri(20,14,"#8A6A4A")),n.add(x(20,4,.3,b("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(x(1,2.2,.08,b("#6B4A33"),-7+e*2,1.1,-3.2));let t=Re(Tt([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new we("#FFFFFF","#9A8A70",1)),n.add(tt("#FFE8C8",2,[-6,8,6],12,40))};var Xa=(n,e,t=200,i=200)=>{let s=new z(new _e(t,i),b(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Wa=["#2E4F2C","#3B6636","#55813F","#A9B65A"],_f=["#0E1A16","#13221C","#1A2C22","#22382A"],qa=(n,e=-60,t="#7A8AA8",i="#F4F6FA",s=4,r=9)=>{let o=De(s);for(let a=0;a<r;a++){let l=14+o()*16,c=12+o()*10,h=new z(new pn(c,l,7),b(t,{roughness:1}));if(h.position.set(-70+a*17+o()*6,l/2-1,e-o()*25),n.add(h),i){let d=new z(new pn(c*.34,l*.34,7),b(i,{roughness:1}));d.position.set(h.position.x,l-l*.17-1,h.position.z),n.add(d)}}},Gh=(n,e,t,i,s,r="#4A8AB0",o=!1)=>{let a=new z(new fn(1,48),new Ie({color:r,roughness:.08,metalness:.35,emissive:o?"#0A1A30":"#000",emissiveIntensity:o?.6:0}));return a.rotation.x=-Math.PI/2,a.scale.set(i,s,1),a.position.set(e,.02,t),a.receiveShadow=!0,n.add(a),a};ye.albergue=(n,e)=>{let t=!!e.dusk;n.fog=new xe(t?"#E8B090":"#D8E4E8",.012),pt(n,-200,700,260,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),qa(n,-70,t?"#6A5A88":"#7A8EAE"),Xa(n,"#6E9A48");let i=io({col:"#9A6A44",roof:"#5A3A2A",w:9,h:4.2,d:6,door:"#4A2E1E"});i.position.set(-3.5,0,-7),n.add(i);let s=Re(Tt(["ALBERGUE LOS PINOS"],{bg:"#4A2E1E",fg:"#F2C14E",size:70,w:900,h:150}),3.2,.54);s.position.set(-3.5,3.4,-6.9),n.add(s),Gh(n,6,-9,6,3.2);let r=De(31);for(let o=0;o<22;o++){let a=(r()-.5)*40;Math.abs(a+3.5)<6&&o<14||Yt(n,a,-10-r()*16,1.3+r()*.7,Wa,o)}for(let[o,a]of[[-9,-3],[9,-4],[-11,-6]])Yt(n,o,a,1.4,Wa,o|0);n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(tt(t?"#FFB080":"#FFE2B0",t?2.2:2.8,[-10,16,10],16,70))};ye.gymkana=(n,e)=>{n.fog=new xe("#D8E4E8",.012),pt(n,-200,700,260,[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),qa(n,-70),Xa(n,"#7AA850"),Gh(n,0,-9,9,3.4);let t=De(7);for(let s=0;s<18;s++)Yt(n,(t()-.5)*44,-14-t()*14,1.3+t()*.6,Wa,s);let i=new z(new fn(1,32),b("#6A4A2E",{roughness:.4}));i.rotation.x=-Math.PI/2,i.scale.set(1.6,1,1),i.position.set(1.2,.015,-1.2),n.add(i);for(let s of[-3,3]){let r=new z(new pn(.18,.45,12),b("#F2A766"));r.position.set(s,.22,.8),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(tt("#FFE2B0",2.8,[-10,16,10],16,70))};ye.lagoNoche=(n,e)=>{n.background=new ce("#05071A"),n.fog=new xe("#0A0E24",.02),_n(n,4200,200,11),pt(n,-150,600,220,[[0,"#03040E"],[.6,"#0E1434"],[1,"#22284A"]]),qa(n,-80,"#141A30","#3A4460",6),Xa(n,"#1E2A20"),Gh(n,0,-8,12,4,"#1A2A48",!0);let t=De(17);for(let r=0;r<24;r++){let o=(t()-.5)*40;Yt(n,o,-14-t()*14,1.3+t()*.6,_f,r)}for(let[r,o]of[[-6,-2],[6.5,-3],[-8,-5]])Yt(n,r,o,1.3,_f,r*3|0);let i=Ye("#F4F0D8",5,.9);i.position.set(14,22,-90),i.material.fog=!1,n.add(i),n.add(new we("#6A78C8","#10141E",.55));let s=new Di("#9AA8E8",.6);s.position.set(8,12,-6),n.add(s)};ye.cima=(n,e)=>{n.fog=new xe("#E4EEF4",.006),pt(n,-200,900,300,[[0,"#2F6AB8"],[.55,"#8EC0E8"],[1,"#F4F8FA"]]);let t=new z(new _e(800,800),b("#F6F8FA",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-14,n.add(t);let i=De(9);for(let l=0;l<40;l++){let c=Ye("#FFFFFF",18+i()*14,.55);c.position.set((i()-.5)*300,-12+i()*3,-40-i()*200),n.add(c)}for(let l=0;l<6;l++){let c=10+i()*8,h=new z(new pn(8+i()*6,c,6),b("#8A8EA0"));h.position.set(-60+l*24,-14+c/2,-90-i()*40),n.add(h);let d=new z(new pn(3,c*.3,6),b("#F4F6FA"));d.position.set(h.position.x,-14+c*.85,h.position.z),n.add(d)}let s=new z(new st(4.5,9,14,9),b("#8A8070",{roughness:1}));s.position.set(0,-7,-1),n.add(s);let r=new z(new fn(4.6,9),b("#9A9070",{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.01,-1),n.add(r);for(let l=0;l<10;l++){let c=new z(new Li(.3+i()*.4),b("#7A7262")),h=i()*6.28;c.position.set(Math.cos(h)*(3+i()),.1,-1+Math.sin(h)*(2.5+i())),!(c.position.z>1.2)&&n.add(c)}n.add(x(.5,1,.5,b("#C8C0A8"),-2.6,.5,-2.6));let o=x(.06,.9,.06,b("#3A3A40"),-2.6,1.45,-2.6);n.add(o),n.add(x(.5,.06,.06,b("#3A3A40"),-2.6,1.6,-2.6));let a=Re(Tt(["PICO \xB7 2.130 m"],{bg:"#FBF7EC",fg:"#2A2A34",size:70,w:600,h:150}),1,.25);a.position.set(-2.6,.75,-2.34),n.add(a),n.add(new we("#EEF4FF","#8A8070",1.05)),n.add(tt("#FFF0D0",3,[-8,18,10],12,60))};ye.sendero=(n,e)=>{n.fog=new xe("#C8D8C8",.02),pt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),qa(n,-60,"#7A8EAE"),Xa(n,"#6E8A48");let t=new z(new _e(2.2,60),b("#B49A72",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.set(0,.012,-20),n.add(t);let i=De(23);for(let s=0;s<30;s++){let r=i()<.5?-1:1;Yt(n,r*(2.6+i()*12),2-i()*30,1.2+i()*.7,Wa,s)}for(let s=0;s<8;s++){let r=new z(new Li(.2+i()*.3),b("#8A8070"));r.position.set((i()<.5?-1:1)*(1.3+i()),.1,-i()*10),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(tt("#FFE2B0",2.6,[-10,16,10],16,70))};ye.comedor=(n,e)=>{n.background=new ce("#0E0A1E"),n.fog=new xe("#140E2A",.03),n.add(ri(20,14,"#6A4A30")),n.add(x(20,5,.3,b("#5A3A2A"),0,2.5,-4.2));for(let a of[-1,1])n.add(x(.3,5,14,b("#5A3A2A"),a*8,2.5,0));for(let a=0;a<9;a++)n.add(x(.12,5,.1,b("#3A2418"),-8+a*2,2.5,-4));let t=Re(Tt(["FIESTA FIN DE CURSO"],{bg:"#E8447A",fg:"#FFFFFF",size:80,w:1100,h:170}),4,.62);t.position.set(0,3.6,-4),n.add(t);for(let a of[-5.2,5.2]){n.add(x(1,.08,4,b("#8E6242"),a,.78,-1.2));for(let[l,c]of[[-1,-2.8],[1,-2.8],[-1,.4],[1,.4]])n.add(x(.06,.78,.06,b("#3A2418"),a+l*.4,.39,c))}let i=[];for(let a=0;a<26;a++){let l=-7+a*.56,c=Ye(["#FF6A9A","#6AD8FF","#FFD84A","#9AFF8A"][a%4],.35,.9);c.position.set(l,3-Math.sin(a/25*Math.PI)*.5,-3.8),n.add(c),i.push(c)}let s=new z(new fn(2.8,48),new Ie({color:"#2A2240",roughness:.2,metalness:.4,emissive:"#4A2A7A",emissiveIntensity:.35}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-.8),n.add(s);let r=[];for(let[a,l]of[["#FF3A8A",-3],["#3AB8FF",0],["#FFD83A",3]]){let c=new Je(a,10,9,1.4);c.position.set(l,3.2,0),n.add(c),r.push(c)}n.add(new we("#8A7AC8","#20142A",.55));let o=new Bn("#FFE8F0",30,14,.6,.6,1.2);o.position.set(0,6,3),o.target.position.set(0,0,-.8),o.castShadow=!0,n.add(o,o.target),n.userData.disco=a=>{r.forEach((l,c)=>{l.position.x=Math.sin(a*.9+c*2.1)*3.5,l.intensity=8+Math.sin(a*5+c)*3}),i.forEach((l,c)=>l.material.opacity=.55+.45*Math.sin(a*4+c))}};ye.salida=(n,e)=>{let t=!!e.dusk,i=!!e.manana;ye.barrio(n,{dusk:t});let s=pf("#F2C14E");s.rotation.y=Math.PI/2,s.position.set(1,0,-3.4),n.add(s);let r=Re(Tt(["VIAJE FIN DE CURSO"],{bg:"#2F5A9A",fg:"#FFFFFF",size:70,w:900,h:140}),2.6,.4);if(r.position.set(1,2.3,-2.18),n.add(r),i){let o=new Di("#FFD0A0",.8);o.position.set(10,3,6),n.add(o)}};var ro=(n,e,t=200,i=200,s={})=>{let r=new z(new _e(t,i),b(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},so=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e});function Mf(n=2.6){let e=new le,t=Ae(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Re(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function bE(n,e={}){return Ae(540,1e3,t=>{let i=t.createLinearGradient(0,0,0,1e3);if(i.addColorStop(0,"#2B2F5A"),i.addColorStop(1,"#141830"),t.fillStyle=i,t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:47",270,120),t.fillStyle="#F4F0E4",t.beginPath(),t.roundRect(40,300,460,120+n.length*62,34),t.fill(),t.fillStyle="#E8667F",t.beginPath(),t.arc(100,350,34,0,7),t.fill(),t.fillStyle="#fff",t.font="800 40px Inter",t.fillText("S",100,364),t.textAlign="left",t.fillStyle="#2A2A34",t.font="800 36px Inter",t.fillText("Sara",150,362),t.font="600 38px Inter",n.forEach((s,r)=>t.fillText(s,70,440+r*56)),e.pato){let s=440+n.length*62+40;t.fillStyle="#F4F0E4",t.beginPath(),t.roundRect(300,s-60,170,150,30),t.fill(),t.fillStyle="#F6D44A",t.beginPath(),t.ellipse(395,s+40,50,32,0,0,7),t.fill(),t.beginPath(),t.arc(360,s,28,0,7),t.fill(),t.fillStyle="#F2913A",t.beginPath(),t.ellipse(330,s+6,18,8,0,0,7),t.fill(),t.fillStyle="#1A1A24",t.beginPath(),t.arc(362,s-6,5,0,7),t.fill()}})}function Sf(n,e={}){let t=new le;t.add(x(.62,1.18,.06,b("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new z(new _e(.56,1.04),new rt({map:bE(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t}function wE(n="#FFB25A"){let e=new le,t=new z(new st(.16,.12,.34,12),so(n,1.8));e.add(t);let i=Ye(n,1,.55);return e.add(i),e}var xE=(n,e,t,i=3)=>{let s=De(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new z(new ft(.07+s()*.06,10,8),so(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=x(.02,.12,.02,b("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};ye.desvan=(n,e)=>{let t=!!e.night;n.background=new ce("#1A120C"),n.fog=new xe("#2A1C12",.05),n.add(ri(16,14,"#6A4630"));for(let h of[-1,1]){let d=x(16,.15,7.5,b("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(x(16,6,.2,b("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=x(.22,.22,9,b("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=De(6);for(let h=0;h<9;h++){let d=Ef(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=x(1.4,.8,.7,b("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(x(1.44,.1,.74,b("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=kt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=Rs(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new z(new ft(.09,12,10),so("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(x(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new Je("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new we("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=Ye("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};ye.pasillo=(n,e)=>{n.background=new ce("#1A1036"),n.fog=new xe("#2A1850",.045),_n(n,1600,120,7),ro(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=De(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let f of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(f>0?1:0))%i.length],m=x(.12,2.6,1.3,b("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=x(.08,2.3,1.05,b(E,{roughness:.6}),f*2.35,1.15,g);n.add(p);let A=new z(new ft(.05,8,6),so("#F2C14E",.6));A.position.set(f*2.29,1.1,g+.35),n.add(A)}let s=new le,r=new le;r.position.set(0,0,.55),s.add(r);let o=x(.08,2.3,1.05,b("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new z(new ft(.05,8,6),so("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Re(Tt(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=kt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let f=Ye(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);f.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(f)}n.add(new we("#D8C8FF","#4A3070",1));let h=new Je("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new Je("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};ye.playaSueno=(n,e)=>{n.fog=new xe("#E8B8E0",.018),pt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=Ye("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new z(new fn(4,40),new rt({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=ro(n,"#F8EEF2",200,200),r=new z(new _e(400,200),new Ie({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=x(400,.02,.3,b("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=De(4);for(let l=0;l<70;l++){let c=Ye("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new le;c.add(x(.18,2.8,.18,b("#E8A0C0"),0,1.4,0));let h=Ye(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new we("#FFE0F6","#B88AC8",1.15)),n.add(tt("#FFD8E8",2,[8,14,-6],14,60))};ye.baile=(n,e)=>{n.background=new ce("#0E0A28"),n.fog=new xe("#1A1240",.03),_n(n,2400,160,3),pt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),ro(n,"#3A2A5A");let t=new z(new fn(3.2,48),new Ie({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),xE(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=Va();c.position.set(a,0,l),n.add(c)}let i=De(9),s=[];for(let a=0;a<22;a++){let l=wE(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new we("#B8A8FF","#2A1A3A",.7));let r=new Bn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new Je("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};ye.estadio=(n,e)=>{n.background=new ce("#0A1020"),n.fog=new xe("#18203A",.02),_n(n,800,160,5);let t=Ae(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new z(new _e(40,40),new Ie({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new le,r=b("#FFFFFF",{roughness:.4});s.add(x(.12,2.4,.12,r,-3.6,1.2,0),x(.12,2.4,.12,r,3.6,1.2,0),x(7.3,.12,.12,r,0,2.4,0));let o=new z(new _e(7.2,2.4),new rt({color:"#FFFFFF",transparent:!0,opacity:.18,side:wt}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(x(60,1,2,b(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=De(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Ih(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=Ye("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new we("#D8E0FF","#2A3A2A",1));let c=tt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};ye.concierto=(n,e)=>{n.background=new ce("#0C0820"),n.fog=new xe("#140C2C",.025);let t=x(14,.6,6,b("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),ro(n,"#140E26").position.y=-.01;let i=kt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=De(4);for(let l=0;l<9;l++){let c=Ye(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=Rs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new le;r.add(x(.03,1.4,.03,b("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new z(new ft(.06,12,10),b("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=Ye(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new we("#B8A8FF","#2A1A3A",.8));let a=new Bn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};ye.gris=(n,e)=>{n.background=new ce("#1C1E24"),n.fog=new xe("#262830",.06),ro(n,"#4A4C54"),n.add(x(14,7,.2,b("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(x(.2,7,12,b("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(x(.2,7,12,b("#52545C",{roughness:1}),4.2,3.5,0));let t=kt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(x(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(x(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new we("#A8B0C8","#2A2A30",.6));let i=new Bn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new Je("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};ye.labSueno=(n,e)=>{ye.lab(n,e),af(n,-1.4,-1.6,"#4A86C7");let t=new le;t.add(x(.12,1.4,.12,b("#3A3A44"),0,.7,0)),t.add(x(1,.7,.1,b("#20242E"),0,1.7,0));let i=kt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var Ya=(n,e,t=200,i=200,s={})=>{let r=new z(new _e(t,i),b(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Tf=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e}),RE=(n="#8C8A84",e=3)=>{let t=Ae(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=De(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=on,t},Cs=(n,e,t,i,s,r,o,a=3)=>{let l=RE(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new z(new xn(n,e,t),new Ie({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function CE(n="#B8B4A8"){let e=new le,t=new z(new st(.09,.09,.22,18),b(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new z(new st(.092,.092,.12,18,1,!0),new Ie({map:Ae(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function FE(){let n=new le;n.add(x(1,.8,.6,b("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(x(.3,.3,.02,b("#222"),-.25,.5,.31));let e=new z(new ft(.04,10,8),Tf("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(x(.02,.4,.02,b("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function PE(){let n=new le;n.add(x(.36,.5,.08,b("#3A3C3A",{metalness:.5}),0,0,0));let e=new le;e.position.set(0,0,.06),n.add(e);let t=x(.05,.4,.05,b("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new z(new ft(.07,14,10),b("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function IE(){let n=new le;n.add(x(8,2.4,2.5,b("#F2B830",{roughness:.5}),0,1.6,0)),n.add(x(8.02,.25,2.52,b("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(x(.85,.7,.02,b("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new z(new st(.45,.45,.3,16),b("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=Ye("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function bf(n,e,t={}){let i=Tt(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Re(i,e,e*(t.h||260)/(t.w||1100))}ye.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new ce("#0E0F10"),n.fog=new xe(t?"#050608":"#2A2A28",t?.08:.045);let s=Cs(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Cs(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Cs(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Cs(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Cs(12,.3,10,0,3.6,-.5,"#7A7872"));for(let w of[-2.4,0,2.4])n.add(x(.25,.3,10,b("#6A6862"),w,3.35,-.5));let r=new le;r.add(x(2,.2,.3,b("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),x(.2,2.6,.3,b("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),x(.2,2.6,.3,b("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new le;o.position.set(-.85,0,-3.3),n.add(o);let a=b("#6E7670",{metalness:.7,roughness:.35}),l=x(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let w of[.5,1.9])o.add(x(1.6,.08,.04,b("#5A605C",{metalness:.7}),.85,w,.1));let c=new z(new vn(.26,.035,8,28),b("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let w=0;w<3;w++){let F=x(.5,.03,.03,b("#B8241A"),.85,1.25,.14);F.rotation.z=w*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=PE();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Re(Tt(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=w=>{let F=new le,S=b("#4A5450",{metalness:.6,roughness:.4});for(let _ of[-.45,.45])for(let I of[-1,1])F.add(x(.06,2.3,.06,S,_,1.15,I));for(let _ of[.45,1.6])F.add(x(.96,.06,2.1,S,0,_,0)),F.add(x(.86,.14,1.96,b("#7A8A6A",{roughness:1}),0,_+.1,0)),F.add(x(.5,.1,.3,b("#D8D2C0"),0,_+.21,-.8));return F.position.set(w,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let f=new le;for(let w of[.9,1.5])f.add(x(1.4,.05,.35,b("#5A4A3A"),0,w,0));for(let w of[-.7,.7])f.add(x(.05,1.6,.35,b("#5A4A3A"),w,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let w=0;w<6;w++){let F=CE();F.position.set(-2.5+w%3*.26,w<3?.93:1.53,-3.2),f.parent.add(F),g.push(F)}n.userData.cans=g;let E=FE();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new le;m.add(x(.06,.7,.9,b("#3A3C3A",{metalness:.5}),0,0,0));for(let w=0;w<6;w++)m.add(x(.08,.04,.8,b("#5A5C5A",{metalness:.6}),.02,-.28+w*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(x(1.4,.06,.8,b("#5A4632"),0,.75,.3));for(let w of[-.6,.6])for(let F of[-.32,.32])n.add(x(.05,.75,.05,b("#3A2E22"),w,.375,.3+F))}if(e.museo){let w=bf(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});w.position.set(-2,2.6,-3.38),n.add(w)}let p=Re(Ae(360,480,w=>{w.fillStyle="#E8D8A0",w.fillRect(0,0,360,480),w.fillStyle="#7A2A1A",w.font="900 46px Fraunces",w.textAlign="center",w.fillText("REFUGIO",180,70),w.fillStyle="#3A3A2A",w.fillRect(80,140,200,140),w.fillStyle="#E8D8A0",w.beginPath(),w.moveTo(60,150),w.lineTo(180,90),w.lineTo(300,150),w.fill(),w.fillStyle="#7A2A1A",w.font="700 30px Inter",w.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let A=[];for(let w of[-1.6,1.6]){let F=new z(new ft(.09,12,10),Tf("#FFD089",t?0:2.2));F.position.set(w,3.1,-.6),n.add(F),A.push(F),n.add(x(.22,.02,.22,b("#333"),w,3.2,-.6,!1))}let v=[];if(!t)for(let w of[-1.6,1.6]){let F=new Je("#FFC27A",11,10,1.4);F.position.set(w,2.9,-.4),F.castShadow=w<0,n.add(F),v.push(F)}let y=new we(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=v,n.userData.bulbs=A,n.userData.hemi=y,i){let w=kt(1.7,2.4,"#FFF4D8",3.2);w.position.set(0,1.2,-3.5),n.add(w);let F=Rs(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new Bn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[w,F,S]}let L=De(5),C=[];for(let w=0;w<26;w++){let F=Ye("#FFE8C0",.04,t?.2:.5);F.position.set((L()-.5)*6,.5+L()*2.6,-3+L()*4),n.add(F),C.push(F)}n.userData.dust=C};ye.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new xe(t?"#1A1E28":"#C8D0B8",t?.045:.022),pt(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Ya(n,t?"#2A3A24":"#6E8A48");let i=De(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||Yt(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new z(new ft(3.2,24,12,0,Math.PI*2,0,Math.PI/2),b(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Cs(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(x(1.5,2,.1,b("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=bf(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=IE();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new we("#6A7A9A","#1A1E1A",.75));let a=new we("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=tt("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new rt({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new z(new xn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[f,g,E,m]=u.userData.p;u.position.set(f+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(tt("#FFD29A",2.6,[-12,16,10],16,70))};ye.puente=(n,e)=>{let t=!!e.normal;n.fog=new xe("#C8D8E0",t?.02:.012),pt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(tt("#FFE2B0",2.6,[-10,18,12],16,80));let i=De(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){Ya(n,"#6E8A48");let l=new z(new _e(3.4,60),b("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(x(1.4,.14,5,b("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(x(.08,.5,5,b("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(x(.1,.6,.1,b("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)Yt(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Cs(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),Ya(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)Yt(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new z(new _e(14,200),new Ie({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new z(new Li(1.5+i()*2),b("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=b("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=x(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new P(u,o(u)+1,l*.55))}let h=new z(new dr(new _s(c),60,.025,6),b("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(x(.015,1,.015,b("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(x(.18,1.6,.18,b("#6A4630"),d,.8,l*.55))}n.userData.y=0};ye.marte=(n,e)=>{n.background=new ce("#10141A"),n.fog=new xe("#1A2028",.05);let t=new z(new st(2.4,2.4,30,28,1,!0),new Ie({color:"#C8CCD0",side:sn,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(x(3.6,.1,30,b("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new z(new vn(2.38,.05,6,28),b("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=kt(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(x(.6,.5,1.8,b("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(x(.05,.6,.5,b("#2A3A4A"),r*1.75,1.6,-o*3));let a=kt(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Re(Tt(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new we("#E8F0FF","#4A505A",.9));let s=new Je("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};ye.biosfera=(n,e)=>{n.fog=new xe("#F2D8B0",.012),pt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),Ya(n,"#D8B07A");let t=De(31);for(let l=0;l<8;l++){let c=new z(new pn(8+t()*8,6+t()*6,6),b("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new le;c.add(x(.3,1.6+t(),.3,b("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new Ie({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:wt}),s=new rt({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new pn(l,l*1.1,4,4);for(let u of[i,s]){let f=new z(d,u);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new ft(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new z(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)Yt(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Re(Tt(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new we("#FFF0DC","#B08A6A",1.05)),n.add(tt("#FFD29A",3,[-14,16,10],20,70))};ye.noria=(n,e)=>{ye.parque(n,{dusk:!0});let t=new le,i=b("#E8E2D2",{metalness:.4,roughness:.4}),s=new z(new vn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=x(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new le;c.add(x(.7,.6,.6,b(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=Ye("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=x(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var oo=(n,e=1.6)=>new Ie({color:n,emissive:n,emissiveIntensity:e}),Gn=(n="#A8ACB0")=>b(n,{metalness:.75,roughness:.32}),Za=(n="#9EA2A6")=>{let e=Ae(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=De(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new Ie({map:e,metalness:.7,roughness:.35})},wf=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Re(Tt([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function xf(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new Nn(e);i.colorSpace=zt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new z(new _e(.5,.31),new rt({map:i,toneMapped:!1}));return r.userData.set=s,r}function LE(){let n=new le;n.add(x(.36,.9,.03,Gn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new z(new st(.04,.04,.02,16),oo("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Re(Tt([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new z(new st(.05,.05,.025,16),oo("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Re(Tt(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new le;for(let o=0;o<5;o++)r.add(x(.16,.012,.01,b("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}ye.ascensor=(n,e)=>{n.background=new ce("#08090C"),n.fog=new xe("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=Za("#A4A8AC"),o=x(2.6,.1,2.4,b("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new z(new _e(2.4,2),new Ie({map:(()=>{let C=Ae(256,256,w=>{w.fillStyle="#4A4440",w.fillRect(0,0,256,256),w.strokeStyle="#3A3430",w.lineWidth=3;for(let F=0;F<256;F+=32)w.beginPath(),w.moveTo(F,0),w.lineTo(F,256),w.stroke(),w.beginPath(),w.moveTo(0,F),w.lineTo(256,F),w.stroke()});return C.wrapS=C.wrapT=on,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(x(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(x(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(x(2.6,.08,2.4,b("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(x(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(x(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(x(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Gn("#B4B8BC"),c=x(.56,2.2,.04,l,-.28,1.1,i+.03),h=x(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(x(.01,2.2,.045,b("#555"),0,1.1,i+.04));let d=x(1.1,2.2,.02,b("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=xf(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let f=LE();f.position.set(.85,1.25,i+.05),n.add(f),n.userData.botonera=f;for(let C of[-1,1])n.add(x(.04,.04,1.8,Gn("#C8CCD0"),C*(t-.06),.95,-.5));let g=new z(new _e(1.5,1.5),new Ie({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(x(.02,1.56,1.56,b("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Re(Tt(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=kt(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let p=new Je("#FFF4E4",10,7,1.4);p.position.set(0,s-.3,-.3),p.castShadow=!0,n.add(p);let A=new z(new xn(.3,.06,.14),oo("#FFB040",0));A.position.set(-.7,s-.05,-1.3),n.add(A);let v=new Je("#FFA840",0,6,1.4);v.position.set(-.6,s-.4,-1),n.add(v);let y=new we("#E8ECF0","#3A3634",.5);n.add(y);let L=new Je("#FFE8C8",0,8,1.6);L.position.set(0,1.8,2.4),n.add(L),n.userData.luz=(C,w=0)=>{let F=Math.max(0,Math.min(1,C))*(1-w);m.material.emissiveIntensity=1.6*F,p.intensity=10*F,A.material.emissiveIntensity=2.4*(1-F),v.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),L.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};ye.rellano=(n,e)=>{let t=!!e.night;n.background=new ce("#14120F"),n.fog=new xe("#2A2620",.035),n.add(Ei(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(x(6.38,3.4,.3,b(i),-3.81,1.7,-3.2)),n.add(x(6.38,3.4,.3,b(i),3.81,1.7,-3.2)),n.add(x(1.24,1.2,.3,b(i),0,2.8,-3.2)),n.add(x(.3,3.4,10,b(i),-5,1.7,0)),n.add(x(.3,3.4,10,b(i),5,1.7,0)),n.add(x(14,.2,10,b("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(x(6.3,.9,.02,b(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(x(1.5,.12,.1,Gn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(x(.12,2.3,.1,Gn("#9EA2A6"),E*.69,1.13,-3.02));let s=new le;s.add(x(1.3,.05,1.6,b("#4A4440"),0,0,-.8)),s.add(x(1.3,2.2,.05,Za(),0,1.1,-1.6));for(let E of[-1,1])s.add(x(.05,2.2,1.6,Za(),E*.65,1.1,-.8));let r=kt(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new Je("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Gn("#B4B8BC"),l=x(.62,2.2,.05,a,-.31,1.1,-3),c=x(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=xf(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=x(.1,.2,.03,Gn(),.95,1.2,-3.03);n.add(d);let u=new z(new ft(.03,10,8),oo("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let f=wf(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(f.position.set(1.5,2.2,-3.03),n.add(f),e.portal){let E=new le;for(let p=0;p<12;p++)E.add(x(.36,.26,.04,b("#8E6242"),-.6+p%4*.4,-Math.floor(p/4)*.3,0)),E.add(x(.2,.02,.02,b("#2A2A2A"),-.6+p%4*.4,-Math.floor(p/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(x(.04,2.6,2,b("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Re(Tt(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(x(1,2.2,.06,b("#6B4A33"),E,1.1,-3.02));let p=Re(Tt([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);p.position.set(E,1.85,-2.98),n.add(p);let A=new z(new ft(.04,10,8),Gn("#D8B860"));A.position.set(E+.38,1.05,-2.96),n.add(A)}let g=[];for(let E of[-2.5,2.5]){let m=new z(new ft(.16,14,10),oo("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let p=new Je("#FFE0B0",t?6:9,9,1.4);p.position.set(E,2.9,-.8),p.castShadow=E<0,n.add(p)}n.add(new we("#F4ECE0","#4A4034",t?.35:.6))};var ss=3;ye.hueco=(n,e)=>{n.background=new ce("#05060C"),n.fog=new xe("#0A0C18",.02),pt(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),_n(n,1600,220,3),si(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*ss,i=b("#3A3A42",{roughness:.95});n.add(x(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(x(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*ss;if(n.add(x(4.1,.14,.1,b("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(x(4.1,.25,3.2,b("#5A5A64"),0,-.12,-.8)),g<=12){let m=Re(Tt([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(x(.08,t,.08,Gn("#7A7E84"),g*1.75,t/2,-1.6));let s=new le,r=Za("#A4A8AC");s.add(x(2.6,.12,2.2,b("#3A3634"),0,0,0)),s.add(x(2.6,.1,2.2,b("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(x(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(x(2.6,2.8,.08,r,0,1.4,-1.1));let o=kt(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new Je("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new Je("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(x(.4,.3,.4,b("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=x(.18,.3,.18,b("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new z(new st(.6,.6,.3,24),Gn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new z(new st(.018,.018,1,6),Gn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=x(.7,1.6,.3,b("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new z(new st(.03,.03,1,6),Gn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([v,y])=>{let L=Math.max(.01,(t-m)*(1-E));v.scale.y=L,v.position.set(y,t-L/2,-.6)});let p=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let A=t-d.position.y-.8;u.scale.y=Math.max(.01,A),u.position.set(1.25,t-A/2,-1.8)},n.userData.setCab(e.y??7.5*ss);for(let g=0;g<=12;g+=2){let E=new Je("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*ss+2.2,.4),n.add(E)}n.add(new we("#6A78A8","#101018",.5));let f=De(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let p=f()<.55,A=kt(.8,1,p?"#FFD890":"#1A1C2A",p?1.2:.2);A.position.set(E*(3.2+m*1.6),g*ss+1.6,-.6),n.add(A),n.add(x(1.4,ss,.2,b("#2A2A34"),E*(3.2+m*1.6),g*ss+ss/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};ye.feria=(n,e)=>{n.background=new ce("#2A2018"),n.fog=new xe("#6A5A44",.03),n.add(Ei(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(x(.25,12,.25,b("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new z(new vn(2,.1,6,24,Math.PI),b("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=kt(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(x(.6,.4,.02,b(t[l%3]),-8+l*2,9.5,-6));let i=b("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(x(.25,9,.25,i,l*1.4,4.5,-3));n.add(x(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=x(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new z(new st(.4,.4,.15,18),b("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new le;r.add(x(2.4,.15,1.8,b("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(x(.08,1,.08,i,l*1.1,.5,.8));r.add(x(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=x(.16,.2,.16,b("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new z(new st(.03,.03,1,6),b("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Re(Tt(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new we("#FFE8C8","#5A4A38",.9)),n.add(tt("#FFD8A0",2.2,[-6,14,8],14,50))};var DE=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));ye.escalera=(n,e)=>{n.background=new ce("#1E1A16"),n.fog=new xe("#2A2620",.04),n.add(Ei(14,10,"#C8B898","#B8A888",8)),n.add(x(16,7,.3,b("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=x(.34,.18*(15-o),1.6,b("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(x(.34,.03,1.62,b("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(x(2.6,2.6,1.6,b("#B8A890"),-4.3,1.3,-1.3));let i=new z(new st(.03,.03,5.7,8),b("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(x(.025,.9,.025,b("#2A2A2E"),-2.9+o*.32,DE(-2.9+o*.32)+.45,-.5));let s=wf(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=kt(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new Je("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new we("#F4ECE0","#4A4034",.6))};var Mr=[],UE=999,If=n=>n+1<no.length?no[n+1]:UE,Vh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Lf=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[Vh(i,s,t),s,Vh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,Vh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},Q=(n,e)=>{let t=no[n],i=If(n),s=Math.min(i,638)-t;Mr.push([(r,o)=>Nh(r,o,Lf(e(s,t),s)),t,i])},NE=(n,e,t)=>{let i=Math.min(e,638)-n;Mr.push([(s,r)=>Nh(s,r,Lf(t(i,n),i)),n,e])},BE=(n,e,t)=>{let i=no[n],s=If(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=Bh(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>NE(r[l],r[l+1],a))},Oi=n=>({tipo:"humano",...n}),ze=(n={})=>Oi({glow:.1,...n});var OE=(n={})=>Oi({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var ao=(n={})=>Oi({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n});var U=(n,e,t=0)=>Bh(e,n+t)-n,Xe=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Re(Tt(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},Wt=(n,e,t,i,s={})=>Xe(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),HE=(n,e,t,i,s={})=>Xe(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s}),lo=(n,e,t,i,s)=>{let r=ff(e,t,s||Math.min(80,Math.floor(470/(e.length*.62))));return r.position.set(...i),r.renderOrder=5,n.add(r),r},ee=(n,e,t,i=1e9,s)=>{let r=et(t,t+.2,e)*(1-et(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&tn(n,s)},Ja=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]});var Qa=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),Wh=n=>n.pose({armL:[12,8],armR:[95,0]});var zE=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},co=n=>{n.pose({armL:[8,6],armR:[8,6]}),zE(n)},Ni=(n,e,t=1)=>{let i=Math.sin(e*7);n.pose({armL:[40+i*30*t,40],armR:[120,100],lean:i*8*t,bob:Math.abs(Math.cos(e*7))*.06*t,legL:[i*10,0],legR:[-i*10,0],head:i*6})},On=n=>{let e=new P;return n.arms.R.hand.getWorldPosition(e),e},Xh=n=>{let e=[-1,1].map(t=>{let i=Ye("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},Ka=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=Re(to(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),tn(a,r)})},os=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=Ye(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},qh=n=>{let e=[0,1,2].map(()=>{let t=Re(to("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),tn(o,s)})};var kE=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),lf(t),e.p2&&e.p2(t,i)}});var $e=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Oi({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},Ct=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Re(hf(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var Df=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)},Uf=(n,e,t=5,i=7)=>{let s=new Je("#FFD8A0",t,i,1.6);return s.position.set(...e),n.add(s),s};var Rf=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],uo=(n,e={})=>{let[t,i,s]=Rf[n%Rf.length];return Oi({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},Yh=(n=0,e={})=>uo(n,{outfit:"jaleco",glasses:!0,...e}),Vn={bg:"#C9361F",fg:"#fff"},GE={bg:"#2F5A9A",fg:"#fff"};var ja={bloom:.38,bloomT:.9,vig:.6,exposure:1},Ue=(n,e,t,i,s=2.2)=>{let r={y:Xe,w:Wt,p:HE,r:(l,c,h,d)=>Xe(l,c,h,d,Vn),b:(l,c,h,d)=>Xe(l,c,h,d,GE)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:U(e,l));return(l,c)=>o.forEach((h,d)=>ee(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var VE=(n,e,t="")=>Ae(400,520,i=>{i.fillStyle=e,i.fillRect(0,0,400,520),i.fillStyle="#fff",i.font="900 54px Fraunces",i.textAlign="center",i.fillText(n,200,80),i.fillStyle="#43C4B4",i.beginPath(),i.roundRect(100,340,200,200,50),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(200,250,92,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(170,245,16,22,0,0,7),i.ellipse(230,245,16,22,0,0,7),i.fill(),t&&(i.fillStyle="#F2C14E",i.font="900 36px Inter",i.fillText(t,200,140))}),WE=(n,e,t,i)=>{let s=new z(new _e(t,t*1.3),new Ie({map:VE(n,e,i),roughness:.6}));return s.castShadow=!0,s},ot=(n={})=>OE({glow:0,...n});var Xn={bg:"#D66A86",fg:"#fff"};var qn=(n,e=.35,t="#E8667F")=>{let i=Re(to("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},oi=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)},XE=(n,e)=>{let t=new Je("#9FC0FF",1.6,2.2,1.6);return n.add(t),()=>{let i=On(e);t.position.set(i.x,i.y+.1,i.z+.3)}};var qE=(n,e)=>Ae(1024,512,t=>{t.clearRect(0,0,1024,512),t.fillStyle="#F2C14E",t.font="900 230px Fraunces",t.textAlign="center",t.fillText(n,512,270),t.fillStyle="#FBF7EC",t.font="900 70px Inter",t.fillText(e,512,400)}),YE=n=>Ae(512,512,e=>{e.clearRect(0,0,512,512);for(let t=0;t<24;t++){let i=-Math.PI/2+t/24*Math.PI*2;e.strokeStyle=t<n?"#E8667F":"#3A3E4C",e.lineWidth=34,e.beginPath(),e.arc(256,256,220,i+.03,i+Math.PI*2/24-.03),e.stroke()}}),ZE=(n,e,t,i)=>Q(n,s=>({amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=Re(YE(e),2.6,2.6);o.position.set(0,1.5,-1),r.add(o);let a=Re(qE(t,i),2.4,1.2);a.position.set(0,1.5,-.95),a.renderOrder=6,r.add(a);let l=os(r,8,"#FFB0C0");return{update:c=>{o.rotation.z=-c*.1;let h=et(0,.25,c);a.scale.setScalar(.6+.4*h),l(c,[0,1.5,-.9,1.4])}}},c:[[0,1.5,2.4],[0,1.5,-1],[0,1.5,2],[0,1.5,-1]],range:3,blur:4,look:{bloom:.5}}));var Cf=n=>Ae(512,400,e=>{e.clearRect(0,0,512,400),e.fillStyle="#F2A6B4";for(let[t,i,s]of[[170,170,110],[300,150,120],[380,210,90],[230,250,100],[130,250,70]])e.beginPath(),e.arc(t,i,s,0,7),e.fill();e.fillStyle="#E08A9A",e.fillRect(250,300,50,80),e.strokeStyle="#D0788A",e.lineWidth=9;for(let t=0;t<9;t++)e.beginPath(),e.arc(150+t%3*100,130+Math.floor(t/3)*70,34,t,t+2.4),e.stroke();if(n){let t=e.createRadialGradient(270,230,5,270,230,120);t.addColorStop(0,"rgba(255,240,120,1)"),t.addColorStop(1,"rgba(255,200,60,0)"),e.fillStyle=t,e.beginPath(),e.arc(270,230,120,0,7),e.fill()}}),JE=(n,e,t=1.6)=>{let i=Re(Cf(!1),t,t*.78),s=Re(Cf(!0),t,t*.78);for(let r of[i,s])r.position.set(...e),r.renderOrder=4,n.add(r);return s.position.z+=.01,s.visible=!1,r=>{s.visible=r}},$E=(n,e={})=>Ae(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),Nf=(n,e,t,i,s)=>{let r=Re($E(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r};var QE=(n,e)=>{let t=uf(n,e,4.2,1.6,{bg:"#2F5A48",fg:"#F4F0E4",size:64,font:"Caveat",w:1024,h:390});return t.position.set(0,2.3,-3.38),t},Wn=(n,e,t=-.1)=>{for(let i of e){n.add(x(1,.06,.6,b("#C8A27A"),i,.75,t));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(x(.05,.75,.05,b("#6A6E78"),i+s*.44,.37,t+r*.25))}};var dn=(n={})=>({amb:"aula",fov:32,...n}),Bf=n=>QE(n,["x\xB2 + 3x = 10","x = ?"]);var Ff=n=>(e,t)=>e.pose({armL:[35,45],armR:[35,45],lean:n*-5});var fo=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||60,a=Math.round(Math.max(640,Math.max(...r.map(d=>d.length))*o*.6+220)),l=Math.round(o*1.2*r.length+230),c=cf(r,{w:a,h:l,size:o,bg:s.bg||"#EFE6FF",fg:s.fg||"#4A2A8A",tail:s.tail||"left"}),h=Re(c,t,t*l/a);return h.position.set(...i),h.renderOrder=6,n.add(h),h},KE=(n,e,t,i={})=>{let s=t.map(([o,,a,l=1.6,c={}])=>fo(n,o,l,a,{...i,...c})),r=t.map(([,o])=>typeof o=="number"?o:U(e,o));return(o,a)=>s.forEach((l,c)=>ee(l,o,r[c],i.keep?1e9:c+1<r.length?r[c+1]-.1:1e9,a))};var Hi=(n,e,t,i)=>ZE(n,e,t,i);var po=(n,e,t,i,s={})=>{let r=s.w||900,o=s.h||220,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=new Nn(a);c.colorSpace=zt;let h=new z(new _e(t,t*o/r),new rt({map:c,transparent:!0,toneMapped:!1}));h.position.set(...e),h.renderOrder=6,n.add(h);let d="";return h.userData.upd=u=>{let f=i(u);f!==d&&(d=f,l.clearRect(0,0,r,o),l.fillStyle=s.bg||"#1E2230",l.beginPath(),l.roundRect(0,0,r,o,30),l.fill(),l.fillStyle=s.fg||"#F2C14E",l.font=`900 ${s.size||110}px Inter`,l.textAlign="center",l.textBaseline="middle",l.fillText(f,r/2,o/2+6),c.needsUpdate=!0)},h.userData.upd(0),h};var jE=()=>{let n=new z(new ft(.28,20,14),b("#E8667F",{roughness:.9}));return n.scale.set(1.3,.55,1),n.castShadow=!0,n},ey=(n,e,t)=>{n.add(x(.06,.4,.06,b("#F2C14E"),e,.2,t-.5)),n.add(x(.06,.4,.06,b("#F2C14E"),e,.2,t+.5)),n.add(x(.06,.06,1,b("#C9361F"),e,.38,t))},Of=(n,e,t,i=2,s="#2F5A9A")=>n.add(x(i,.08,1.4,b(s,{roughness:.9}),e,.04,t));var ty={bg:"#E8667F",fg:"#fff"};var yA=(()=>{let n=[];for(let e of[-1,1])for(let t of[0,1])for(let i=0;i<5;i++)n.push([e*(2.9+t*.75),-2+i*.8,e*-Math.PI/2]);return n})();var ny=n=>Ae(256,256,e=>{e.clearRect(0,0,256,256),e.fillStyle=n,e.beginPath(),e.moveTo(70,30),e.lineTo(186,30),e.lineTo(250,80),e.lineTo(215,120),e.lineTo(190,100),e.lineTo(190,240),e.lineTo(66,240),e.lineTo(66,100),e.lineTo(41,120),e.lineTo(6,80),e.closePath(),e.fill(),e.fillStyle="rgba(0,0,0,.18)",e.beginPath(),e.arc(128,32,26,0,Math.PI),e.fill()}),iy=(n,e,t=.6)=>{let i=Re(ny(e),t,t);return i.renderOrder=4,n.add(i),i};var mo=(n,e="#4A86C7")=>{let t=new le;return t.add(x(.5,.6,.25,b(e),0,.3,0)),t.add(x(.42,.25,.06,b("#2A4A7A"),0,.2,.14)),t.add(x(.5,.05,.27,b("#2A4A7A"),0,.58,0)),t.children.forEach(i=>i.castShadow=!0),n.add(t),t},Hf={amb:"cuartoYo"},el={amb:"cuartoYo",ambo:{night:!0}},tl={exposure:.95,bloom:.45},as=(n={})=>uo(4,{glasses:!0,...n}),nl=(n={})=>Oi({outfit:"verde",glow:0,...n}),Yn=(n={})=>Oi({outfit:"laranja",glow:0,...n}),zf=(n={})=>Oi({outfit:"roxo",hair:"old",hairc:"#E8E2D8",glasses:!0,glow:0,lash:!0,...n}),$a=(n,e={})=>Oi({outfit:n%2?"azul":"terno",glow:0,...e}),sy={bg:"#3F8A52",fg:"#fff"},Zh={bg:"#1E2230",fg:"#F2C14E"},rs=n=>(e,t)=>{co(e),n&&n(e,t)},Bi=-.1,hn=-1.15,ry=()=>{let n=Ae(1024,256,e=>{let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#7FB2E0"),t.addColorStop(1,"#DDEBF2"),e.fillStyle=t,e.fillRect(0,0,1024,256);let i=De(8);e.fillStyle="#8A9AB8";for(let s=0;s<14;s++){let r=s*80+i()*40,o=90+i()*80;e.beginPath(),e.moveTo(r-90,256),e.lineTo(r,256-o-40),e.lineTo(r+90,256),e.fill(),e.fillStyle="#F4F6FA",e.beginPath(),e.moveTo(r-22,256-o-40+30),e.lineTo(r,256-o-40),e.lineTo(r+22,256-o-40+30),e.fill(),e.fillStyle="#8A9AB8"}e.fillStyle="#4F7A44";for(let s=0;s<40;s++){let r=s*26+i()*10;e.beginPath(),e.moveTo(r-14,256),e.lineTo(r,180-i()*30),e.lineTo(r+14,256),e.fill()}e.fillStyle="#6E9A50",e.fillRect(0,236,1024,20)});return n.wrapS=on,n},Dt=(n,e={})=>{n.add(x(14,3.4,.1,b("#E8E2D2"),0,1.7,-1.8));let t=ry(),i=new z(new _e(10,1.1),new rt({map:t,toneMapped:!1}));i.position.set(0,1.85,-1.74),n.add(i);for(let r of[-5,-2.5,-.95,.95,2.5,5])n.add(x(.12,1.2,.05,b("#C8C2B2"),r,1.85,-1.72));for(let r of[-2.5,0,2.5])n.add(x(1.8,.45,.6,b("#C9361F"),r,.35,-1.3)),n.add(x(1.8,.9,.14,b("#A82E1C"),r,.95,-1.6)),n.add(x(.06,.1,.5,b("#2A2A34"),r,.62,-1.3));n.add(x(14,.02,4,b("#4A4C54"),0,.01,0));let s=Re(Tt(["VIAJE FIN DE CURSO"],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:900,h:140}),2.2,.34);return s.position.set(0,2.85,-1.7),n.add(s),Uf(n,[0,2.6,.8],3,6),(r,o=1)=>{t.offset.x=r*.07*o}},ai=[[0,1.6,2.6],[0,1.3,-1.2],[0,1.55,2.25],[0,1.3,-1.2]],ls=[[0,1.45,2],[0,1.38,-1.2],[0,1.42,1.75],[0,1.38,-1.2]],Gt=(n={})=>ze({x:-.4,z:hn,y:Bi,...n,pose:rs(n.pose)}),Qt=(n={})=>ot({x:.4,z:hn,y:Bi,...n,pose:rs(n.pose)}),go=n=>(e,t)=>e.pose({lean:10*n,head:10*n}),Sr=n=>{let e=new qt().setFromPoints([0,1,2].map(()=>new P)),t=new Ma(e,new Jr({color:"#F4F0E4"}));n.add(t);let i=[0,1].map(()=>{let o=new z(new ft(.045,12,8),b("#FBF7EC"));return n.add(o),o}),s=new P,r=new P;return(o,a,l=!0)=>{if(t.visible=l,i.forEach(h=>h.visible=l),!l)return;o.head.getWorldPosition(s),a.head.getWorldPosition(r),s.x+=.27,r.x-=.27,s.z+=.05,r.z+=.05,i[0].position.copy(s),i[1].position.copy(r);let c=e.attributes.position;c.setXYZ(0,s.x,s.y,s.z),c.setXYZ(1,(s.x+r.x)/2,Math.min(s.y,r.y)-.55,(s.z+r.z)/2+.12),c.setXYZ(2,r.x,r.y,r.z),c.needsUpdate=!0}},oy=(n,e="#2F5A9A")=>{let t=new le;return t.add(x(.9,.26,.6,b(e),0,.13,0)),t.add(x(.9,.2,.6,b(e),0,.5,-.2)),t.children[1].rotation.x=-.9,t.add(x(.3,.04,.04,b("#2A2A34"),0,.28,.3)),n.add(t),t},ay=(n,e=.55)=>iy(n,"#43C4B4",e),Jh=(n,e=1)=>{let t=new le;t.add(x(.42*e,.22*e,.1*e,b("#F2C14E"),0,0,0));let i=Re(Tt(["SALADAS"],{bg:"#C9361F",fg:"#fff",size:70,w:420,h:130}),.38*e,.12*e);return i.position.z=.052*e,t.add(i),n.add(t),t},ly=(n,e=-1,t="PAREJAS \xB7 VIAJE")=>Ae(620,820,i=>{i.fillStyle="#FBF7EC",i.fillRect(0,0,620,820),i.fillStyle="#2F5A9A",i.fillRect(0,0,620,110),i.fillStyle="#fff",i.font="900 52px Inter",i.textAlign="center",i.fillText(t,310,74),i.textAlign="left",n.forEach((s,r)=>{let o=180+r*92;r===e&&(i.fillStyle="#F8D7E0",i.fillRect(20,o-58,580,80)),i.fillStyle=r===e?"#C9365A":"#2A2A34",i.font=(r===e?"900 ":"700 ")+"36px Inter",i.fillText(s,40,o),i.fillStyle="#D8CCB0",i.fillRect(40,o+20,540,3)})}),kf=(n,e,t,i,s,r)=>{let o=new z(new _e(t,t*820/620),new Ie({map:ly(e,s,r),roughness:.9}));return o.position.set(...i),o.renderOrder=4,n.add(o),o},$h=n=>{let e=x(.3,.4,.01,b("#FBF7EC"),0,0,0,!1);return n.add(e),e},Qh=(n,e=6,t="#8AC8F2")=>{let i=[];for(let s=0;s<e;s++){let r=Ye(t,.12,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.9+l/e)%1;a.position.set(r[0]+Math.sin(l*2.3)*r[3],r[1]-c*.7,r[2]+.1),a.material.opacity=o*(1-c)})},Kh=(n,e="#7AD07A",t=.55)=>{let i=Ye(e,t,0);return i.position.set(0,0,.1),n.head.add(i),s=>i.material.opacity=s},Pf=n=>{let e=new le,t=x(.02,.02,.9,b("#8E6242"),0,0,0,!1);e.add(t);let i=new z(new st(.06,.06,.1,12),b("#FBF7EC"));return i.rotation.x=Math.PI/2,i.position.z=.47,e.add(i),e.nube=i,n.add(e),e},Gf=(n=!0)=>Ae(420,500,e=>{e.fillStyle="#FBF7EC",e.fillRect(0,0,420,500),e.fillStyle=n?"#8EC0E8":"#2A2A40",e.fillRect(24,24,372,360),n&&(e.fillStyle="#F4F6FA",e.fillRect(24,300,372,84));for(let[t,i]of[[150,"#43C4B4"],[270,"#F7CC58"]])e.fillStyle=i,e.beginPath(),e.roundRect(t-45,280,90,104,22),e.fill(),e.fillStyle="#111",e.beginPath(),e.arc(t,230,52,0,7),e.fill(),e.fillStyle="#fff",e.beginPath(),e.arc(t-16,226,8,0,7),e.arc(t+16,226,8,0,7),e.fill();e.fillStyle="#4A2A1A",e.fillRect(222,200,14,120),e.fillRect(304,200,14,120),e.fillStyle="#E8667F",e.font="900 60px Inter",e.textAlign="center",e.fillText("\u2665",210,140),e.fillStyle="#2A2A34",e.font="700 44px Caveat",e.fillText(n?"el pico \u2665":"bus \u2665",210,450)}),cy=(n,e,t,i)=>{let s=Re(Gf(i),e,e*500/420);return s.position.set(...t),s.renderOrder=6,n.add(s),s},hy=(n,e,t,i="#E8447A")=>{let s=new le;s.add(x(.04,1.4,.04,b("#E8E2D2"),0,.7,0));let r=x(.5,.32,.02,b(i),.27,1.22,0);return s.add(r),s.position.set(e,0,t),n.add(s),s},Ar=(n,e=6)=>{let t=De(e);for(let i=0;i<e;i++){let s=new z(new fn(.05+t()*.05,10),b("#5A3A22"));s.position.set((t()-.5)*.3,-.1-t()*.4,.2),n.torso.add(s)}},Vf=n=>{let e=x(.5,.05,.05,b("#C9A050"),0,0,0,!1);return n.add(e),e},ho=(n,e)=>{n.root.rotation.z=e},dy=(n,e,t,i,s="#F2C14E",r=150)=>{let o=Re(to(e,s,r),t,t*.8);return o.position.set(...i),o.renderOrder=6,n.add(o),o},uy=[[0,1.8,4.6],[0,1.5,-1],[0,1.75,4.1],[0,1.5,-1]],fy=["TU AMIGO + EL DEL CHICLE","DELEGADA + EL VAGO","T\xDA + \u2026","","","",""];Q(0,(n,e)=>({...dn(),atores:[ze({x:-.4,z:.6,eyes:[[0,"flat"]],pose:(t,i)=>t.pose({head:Math.sin(i*2)*5})}),$e(1,{x:1.4,z:.6,eyes:[[0,"shut"]]}),ot({x:-2.1,z:.6,eyes:[[0,"look"]]})],extra:t=>{Wn(t,[-2.1,-.4,1.4],1.1);let i=Xe(t,["\xDALTIMO MES DE CLASE"],2.2,[0,2.35,.6],Zh);return{update:(s,r,o)=>ee(i,s,.1,99,o)}},c:[[0,1.8,4.4],[0,1.5,.6],[0,1.75,3.9],[0,1.5,.6]],range:4}));Q(1,(n,e)=>({...dn(),atores:[as({x:1,z:-1.4,move:t=>[Rt(3.2,.6,et(0,2.2,t)),0,-1.4],eyes:[[0,"look"]],pose:(t,i)=>i<2.2?t.walk(i*2):t.pose({armL:[12,8],armR:[70,40]})})],extra:(t,i,s)=>{let r=$h(t),o=Xe(t,["LA TUTORA"],1.2,[0,2.6,-1.2],Zh),a=Wt(t,["UNA HOJA"],1,[1.3,1.7,-1]);return{update:(l,c,h)=>{let d=On(s[0]);r.position.set(d.x,d.y+.05,d.z+.12),ee(o,l,.2,99,h),ee(a,l,U(e,"hoja"),99,h)}}},c:[[0,1.8,4.4],[.8,1.4,-1.4],[0,1.75,3.9],[.6,1.4,-1.4]],range:4}));Q(2,(n,e)=>{let t=U(e,"viaje"),i=U(e,"pareja");return{...dn(),atores:[as({x:.6,z:-1.4,talk:[[0,n]],eyes:[[0,"look"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[110+Math.sin(r*5)*10,30]})})],extra:s=>{let r=Ct(s,["\xA1ATENCI\xD3N!"],.9,[1.4,2.4,-1.3],70),o=Ue(s,e,[[["VIAJE DE FIN DE CURSO"],t,"y",[-.8,2.55,-1.3],2.2],[["CADA UNO, UNA PAREJA"],i-.2,"p",[-.8,2.55,-1.3],2,1]]);return{update:(a,l,c)=>{ee(r,a,0,t-.2,c),o(a,c)}}},c:[[0,1.8,4.2],[0,1.6,-1.4],[0,1.75,3.8],[0,1.6,-1.4]],range:4}});Q(3,(n,e)=>({...dn(),atores:[as({x:1.6,z:-1.4,talk:[[0,n]],eyes:[[0,"look"]],pose:Qa}),$e(0,{x:-1.6,z:.4,eyes:[[0,"look"],[U(e,"culpa"),"wide"]]}),$e(3,{x:-.4,z:.4,eyes:[[0,"look"],[U(e,"culpa"),"wide"]]})],extra:t=>{Wn(t,[-1.6,-.4],1);let i=[-.3,2.45,-.4],s=Ue(t,e,[[["JUNTOS EN EL AUTOB\xDAS"],"autobus","w",i,2],[["JUNTOS EN TODO"],"actividades","y",i,1.5],[["SI ALGUIEN SE PIERDE\u2026"],"pierde","w",i,1.9],[["LA CULPA ES DE LOS DOS"],"culpa","r",i,2.1,1]]);return{update:(r,o,a)=>s(r,a)}},c:uy,range:4}));Q(4,(n,e)=>({amb:"gris",fov:28,k:1,atores:[],extra:t=>{let i=kf(t,fy,1.6,[0,1.55,-.6]);return Uf(t,[0,2.2,1.2],5,6),{update:s=>{i.rotation.z=Math.sin(s)*.02}}},c:[[0,1.4,3.4],[0,1.6,-.6],[0,1.45,2.6],[0,1.7,-.6]],range:3}));Q(5,(n,e)=>{let t=U(e,"chicle");return{...dn(),atores:[Yn({x:-.5,z:.2,eyes:[[0,"flat"]],pose:i=>i.pose({armL:[12,8],armR:[12,8]})}),$e(5,{x:.5,z:.2,eyes:[[0,"happy"]]})],extra:(i,s,r)=>{let o=new z(new ft(.16,20,14),b("#F29AB0",{roughness:.3}));i.add(o);let a=Ue(i,e,[[["TU MEJOR AMIGO"],0,"w",[-.5,2.05,.2],1.4],[["HUELE A CHICLE DE FRESA"],t-.3,"p",[0,2.1,.2],2.1,1]]),l=new P;return{update:(c,h,d)=>{r[1].head.getWorldPosition(l);let u=et(t,t+1.2,c);o.position.set(l.x,l.y-.14,l.z+.3),o.scale.setScalar(.05+u*(c>t+2.4?0:1)),a(c,d)}}},c:[[0,1.7,3.4],[0,1.4,.2],[0,1.65,2.9],[0,1.4,.2]],range:3}});Q(6,(n,e)=>{let t=U(e,"nunca");return{...dn(),atores:[$e(6,{x:-.5,z:.2,eyes:[[0,"smug"]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})}),$e(4,{x:.55,z:.2,eyes:[[0,"shut"]],pose:i=>i.pose({head:18})})],extra:i=>{let s=Ue(i,e,[[["LA DELEGADA"],0,"y",[-.5,2.05,.2],1.2],[["NUNCA HACE LOS DEBERES"],t-.2,"r",[.3,2.1,.2],2.1,1]]),r=qh(i);return{update:(o,a,l)=>{s(o,l),r(o,[.8,1.9,.2],l,o>t)}}},c:[[0,1.7,3.4],[0,1.4,.2],[0,1.65,2.9],[0,1.4,.2]],range:3}});Q(7,(n,e)=>{let t=U(e,"nombre");return{...dn(),atores:[ze({x:0,z:.4,eyes:[[0,"look"],[t,"wide"]],move:i=>[0,i>t&&i<t+.4?Math.sin((i-t)/.4*Math.PI)*.15:0,.4]})],extra:i=>{Wn(i,[0],1);let s=Xe(i,["\xA1TU NOMBRE!"],1.3,[0,2.02,.4],Vn);return{update:(r,o,a)=>ee(s,r,t,99,a)}},c:[[0,1.6,3],[0,1.45,.4],[0,1.55,2.4],[0,1.45,.4]],range:2.5}});Q(8,(n,e)=>{let t=U(e,"suyo");return{...dn(),atores:[as({x:0,z:-1.4,talk:[[t-.3,n]],eyes:[[0,"look"]],pose:i=>i.pose({armL:[12,8],armR:[70,40]})})],extra:(i,s,r)=>{let o=$h(i),a=Xe(i,["\u2026Y EL SUYO"],1.3,[0,2.12,-1.2],Xn);return{update:(l,c,h)=>{let d=On(r[0]);o.position.set(d.x,d.y+.05,d.z+.12),ee(a,l,t-.1,99,h)}}},c:[[0,1.7,3],[0,1.6,-1.4],[0,1.68,1.6],[0,1.62,-1.4]],range:3,look:{vig:.6}}});Q(9,(n,e)=>({...dn(),atores:[ot({x:.2,z:.3,eyes:[[0,"look"],[.6,"happy"]],pose:(t,i)=>t.pose({head:Rt(0,-15,et(0,.6,i))})})],extra:t=>{Wn(t,[.2],1);let i=Xe(t,["TU CRUSH"],1.1,[.2,2.08,.3],Xn),s=qn(t,.35);return s.position.set(.95,1.85,.3),{update:(r,o,a)=>{ee(i,r,.1,99,a),s.scale.setScalar(oi(r,140)),tn(s,a)}}},c:[[.2,1.6,2.8],[.2,1.45,.3],[.2,1.55,2.3],[.2,1.45,.3]],range:2.5}));Q(10,(n,e)=>{let t=U(e,"persona");return{amb:"albergue",fov:32,atores:[ze({x:-.35,z:.4,eyes:[[0,"look"],[t,"heart"]]}),ot({x:.35,z:.4,eyes:[[0,"happy"]],move:i=>[Rt(1.6,.35,et(t,t+1,i)),0,.4],pose:(i,s)=>s>t&&s<t+1?i.walk(s*2):i.pose()})],extra:i=>{let s=[0,2.5,.4],r=Ue(i,e,[[["5 D\xCDAS"],0,"y",s,1],[["UN AUTOB\xDAS"],"autobus","w",s,1.3],[["UN ALBERGUE EN LA MONTA\xD1A"],"albergue","y",s,2.4],[["PEGADA A TI TODO EL TIEMPO"],"pegada","p",s,2.4,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.8,4.6],[0,1.4,-.4],[0,1.7,3.8],[0,1.4,-.4]],range:5}});Q(11,(n,e)=>{let t=U(e,"suscribete"),i=U(e,"vamos");return{...Hf,fov:32,atores:[ze({x:-1,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>r>t?Ja(s,r):s.pose()})],extra:s=>{let r=Mf(2.4);r.position.set(.7,1.8,-1),s.add(r);let o=os(s,14,"#FFE27A"),a=Wt(s,["\xBFY SI\u2026?"],1,[-1,2.3,-.3]),l=Xe(s,["\xA1VAMOS ALL\xC1!"],1.4,[-1,2.3,-.3],ty);return{update:(c,h,d)=>{ee(a,c,.2,i-.2,d),ee(l,c,i-.2,99,d);let u=et(t-.3,t,c)*(1-et(i-.4,i,c));r.scale.setScalar(Math.max(.01,u)),o(c,[.7,1.8,-.9,1.1],u)}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3}});Q(12,(n,e)=>({...el,fov:30,atores:[kE(ze,{x:-.7,z:-1,y:1.08,eyes:[[0,"wide"]]})],extra:t=>{let i=Xe(t,["NO DUERMES"],1.2,[-.4,1.95,-.8],Zh);return{update:(s,r,o)=>ee(i,s,.3,99,o)}},c:[[-.6,2.3,3],[-.8,1,-1],[-.6,2.2,2.6],[-.8,1,-1]],range:3,look:tl}));Q(13,(n,e)=>{let t=U(e,"metes"),i=U(e,"sacas"),s=U(e,"vuelves");return{...el,fov:32,atores:[ze({x:-.9,z:-.3,eyes:[[0,"look"],[i,"flat"],[s,"look"]],pose:(r,o)=>r.pose({armL:[60,60],armR:[o>t&&o<t+.6||o>i&&o<i+.6||o>s&&o<s+.6?120:60,40]})})],extra:r=>{oy(r).position.set(.3,0,-.2);let a=ay(r,.55),l=Ue(r,e,[[["LA MALETA: 3 VECES"],0,"w",[0,2.12,-.3],1.9],[["TU SUDADERA FAVORITA"],t,"y",[0,2.12,-.3],2],[["LA SACAS"],i,"r",[0,2.12,-.3],1.1],[["LA VUELVES A METER"],s,"p",[0,2.12,-.3],1.8,1]]);return{update:(c,h,d)=>{let u=c>i&&c<s?1:0,f=c<t?0:et(t,t+.6,c)*(1-et(i,i+.6,c))+et(s,s+.6,c);a.visible=c>t-.2,a.position.set(.3,Rt(1.8,.45,f),-.2+(1-f)*.2),a.rotation.z=u?Math.sin(c*3)*.3:0,l(c,d)}}},c:[[-.2,1.7,3.4],[-.2,1.2,-.3],[-.2,1.65,3],[-.2,1.2,-.3]],range:3,look:tl}});Q(14,(n,e)=>{let t=U(e,"tres"),i=U(e,"pregunta");return{...el,fov:32,atores:[ze({x:-.9,z:-.3,eyes:[[0,"look"]],pose:s=>s.pose({armL:[12,8],armR:[80,70],head:10})})],extra:(s,r,o)=>{let a=po(s,[.6,1.6,-.4],1.4,u=>`DESCARGANDO ${Math.min(100,Math.max(0,Math.round((u-t)*30)))}%`,{w:900,h:200,size:80}),l=Ka(s,6),c=Xe(s,["3 HORAS DE M\xDASICA"],1.7,[.6,2.45,-.4]),h=fo(s,["\xBFQU\xC9 ESCUCHAS?"],1.4,[-.2,2.45,-.3]),d=XE(s,o[0]);return{update:(u,f,g)=>{a.userData.upd(u),a.visible=u>t-.2,ee(c,u,t,i-.2,g),ee(h,u,i,99,g),l(u,new P(.4,1.5,-.4),g,u>t),d()}}},c:[[-.1,1.7,3.4],[-.1,1.5,-.3],[-.1,1.65,3],[-.1,1.5,-.3]],range:3,look:tl}});Q(15,(n,e)=>{let t=U(e,"nunca");return{...el,fov:30,atores:[ze({x:-.3,z:-.3,eyes:[[0,"look"],[t,"flat"]],pose:i=>i.pose({armL:[12,8],armR:[80,70]})})],extra:i=>{let s=Xe(i,["NO LA HAS ESCUCHADO NUNCA"],2.3,[-.3,2.4,-.3],Vn),r=Qh(i,3);return{update:(o,a,l)=>{ee(s,o,t-.3,99,l),r(o,[-.05,1.9,-.2,.1],o>t?1:0)}}},c:[[-.3,1.65,3],[-.3,1.5,-.3],[-.3,1.6,2.5],[-.3,1.5,-.3]],range:3,look:tl}});Hi(16,7,"7:00","LUNES");Q(17,(n,e)=>({amb:"salida",ambo:{manana:!0},fov:34,atores:[$e(0,{x:-2.6,z:.6,eyes:[[0,"happy"]]}),$e(3,{x:-3.2,z:.2}),Yn({x:-2,z:.9,eyes:[[0,"look"]]})],extra:t=>{let i=Xe(t,["EL AUTOB\xDAS ESPERA"],1.9,[1,3.9,-2]);return{update:(s,r,o)=>ee(i,s,.2,99,o)}},c:[[-1,2.4,7.4],[.6,1.6,-2.5],[-.4,2.3,6.6],[.6,1.6,-2.5]],k:1,range:6}));Q(18,(n,e)=>{let t=U(e,"ventanilla"),i=U(e,"pasillo"),s=U(e,"guardas");return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"happy"]]})],extra:r=>{let o=Dt(r);mo(r,"#E8667F").position.set(.4,.58,hn);let l=Ue(r,e,[[["DE LOS PRIMEROS"],0,"w",[0,2.08,-1],1.5],[["GUARDAS DOS SITIOS"],s,"y",[0,2.08,-1],1.8],[["VENTANILLA"],t,"w",[-.4,2.08,-1],1.1],[["Y PASILLO"],i,"w",[.5,2.08,-1],1,1]]);return{update:(c,h,d)=>{l(c,d)}}},c:ai,range:3}});Q(19,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Gt({eyes:[[0,"look"]],pose:(t,i)=>t.pose({head:Math.sin(i*2)*15})})],extra:t=>{Dt(t),mo(t,"#E8667F").position.set(.4,.58,hn);let s=df(.5,7);s.position.set(-1,1.75,-1),t.add(s);let r=Wt(t,["\u2026Y ESPERAS"],1.1,[0,1.95,-1]);return{update:(o,a,l)=>{ee(r,o,.1,99,l)}}},c:ls,range:3}));Q(20,(n,e)=>{let t=U(e,"menos");return{amb:"gris",fov:34,k:1,atores:[Gt({eyes:[[0,"look"],[t,"sad"]]}),$e(0,{x:-2.9,z:hn,y:Bi,pose:rs()}),$e(1,{x:-2.1,z:hn,y:Bi,pose:rs()}),$e(2,{x:2.1,z:hn,y:Bi,pose:rs()}),Yn({x:2.9,z:hn,y:Bi,pose:rs()})],extra:i=>{Dt(i);let s=Ye("#FFB0C0",.9,0);s.position.set(.4,1,hn+.2),i.add(s);let r=Ue(i,e,[[["LLEGAN TODOS"],0,"w",[0,2.08,-1],1.4],[["MENOS ELLA"],t,"r",[0,2.08,-1],1.2,1]]);return{update:(o,a,l)=>{r(o,l),s.material.opacity=o>t?.5+.2*Math.sin(o*4):0}}},c:[[0,1.6,3.6],[0,1.15,-1.2],[0,1.55,3.2],[0,1.15,-1.2]],range:4}});Q(21,(n,e)=>{let t=U(e,"tutora");return{amb:"gris",fov:34,k:1,atores:[Gt({eyes:[[0,"sad"]]}),$e(0,{x:-2.9,z:hn,y:Bi,pose:rs()}),$e(1,{x:-2.1,z:hn,y:Bi,pose:rs()}),as({x:1.6,z:.2,eyes:[[0,"look"]],pose:(i,s)=>s>t?i.pose({armL:[12,8],armR:[95,0],head:Math.sin(s*3)*20}):i.pose()})],extra:(i,s,r)=>{let o=Dt(i),a=$h(i),l=po(i,[1,2,.2],1,h=>`${Math.min(27,Math.max(1,Math.floor((h-t)*6)))}\u2026`,{w:500,h:200,size:110}),c=Xe(i,["\xA1RRRUM!"],1,[-1.5,1.95,-1],Vn);return{update:(h,d,u)=>{o(h,.1),l.userData.upd(h),l.visible=h>t,ee(c,h,.2,t-.2,u);let f=On(r[3]);a.position.set(f.x,f.y,f.z+.12),Df(u,h<t?.006:0,h)}}},c:[[.2,1.6,3.6],[.2,1.2,-1],[.2,1.55,3.2],[.2,1.2,-1]],range:4}});Q(22,(n,e)=>{let t=U(e,"corriendo"),i=U(e,"mochila"),s=U(e,"pelo");return{amb:"salida",ambo:{manana:!0},fov:34,atores:[ot({x:-1,z:.8,move:r=>[Rt(-6,1.2,et(t-.4,n-.2,r)),0,.8],eyes:[[0,"wide"]],pose:(r,o)=>r.walk(o*3.2)})],extra:(r,o,a)=>{let l=mo(r,"#43C4B4"),c=[];for(let f=0;f<5;f++){let g=x(.18,.24,.02,b(["#FBF7EC","#F2C14E","#8AC8F2"][f%3]),0,0,0,!1);r.add(g),c.push(g)}let h=Qh(r,8),d=Ue(r,e,[[["EN EL \xDALTIMO SEGUNDO"],0,"r",[0,2.45,.8],2],[["LA MOCHILA ABIERTA"],i,"y",[0,2.45,.8],1.8],[["EL PELO MOJADO"],s,"b",[0,2.45,.8],1.6,1]]),u=new P;return{update:(f,g,E)=>{a[0].torso.getWorldPosition(u),l.position.set(u.x-.2,u.y-.3,u.z-.25),c.forEach((m,p)=>{let A=((f-i)*.8+p/5)%1;m.visible=f>i,m.position.set(u.x-.5-A*1.5,Math.max(.02,u.y-A*1.2),u.z-.2),m.rotation.z=A*6}),a[0].head.getWorldPosition(u),h(f,[u.x,u.y+.1,u.z,.25],f>s-.3?1:0),d(f,E)}}},c:[[-1.5,1.9,6.4],[-.5,1.3,.4],[0,1.85,5.8],[.5,1.3,.4]],k:1,range:6}});Q(23,(n,e)=>{let t=U(e,"perdon"),i=U(e,"rie");return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"wide"]]}),Qt({move:s=>[Rt(1.4,.4,et(0,.6,s)),Bi+(1-et(.3,.7,s))*.4,hn],eyes:[[0,"look"],[i,"happy"]],talk:[[t,i]]})],extra:s=>{Dt(s);let r=Ct(s,["PERD\xD3N\u2026 NO HA","SONADO EL DESPERTADOR"],1.7,[1.1,1.95,-1],54),o=lo(s,"JA, JA",.7,[1.2,2,-1]);return{update:(a,l,c)=>{ee(r,a,t,i-.1,c),ee(o,a,i,99,c)}}},c:ai,range:3}});Q(24,(n,e)=>{let t=U(e,"solo");return{amb:"gris",fov:30,k:1,atores:[Gt({eyes:[[0,"look"]],talk:[[.3,.9]]}),Qt({eyes:[[0,"happy"]]})],extra:i=>{Dt(i);let s=Ct(i,["\u2026hola."],.8,[-.6,1.95,-1],70),r=Xe(i,['SOLO "HOLA"'],1.2,[0,2.08,-1],Vn);return{update:(o,a,l)=>{ee(s,o,.3,t-.1,l),ee(r,o,t,99,l)}}},c:ls,range:3}});Q(25,(n,e)=>{let t=U(e,"hola");return{amb:"gris",fov:30,k:1,atores:[Gt({eyes:[[0,"look"],[t,"flat"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t+.2?150:12,s>t+.2?120:8]})}),Qt({eyes:[[0,"lookl"]]})],extra:i=>{Dt(i);let s=KE(i,e,[[['"\xBFTe gusta el mar?"'],.1,[-1.4,1.95,-1],1.3],[['"\xBFSab\xEDas que los',"pulpos tienen 3",'corazones?"'],1.2,[-1.4,1.95,-1],1.3],[['"Buenos d\xEDas,','compa\xF1era"'],2.4,[-1.4,1.95,-1],1.3]]),r=Xe(i,['Y TE SALE "HOLA"'],1.6,[0,2.08,-1],Vn);return{update:(o,a,l)=>{o<t?s(o,l):s(-1,l),ee(r,o,t,99,l)}}},c:ai,range:3}});Hi(26,8,"8:30","HORA Y MEDIA DE VIAJE");Q(27,(n,e)=>{let t=U(e,"ella"),i=U(e,"miras");return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"flat"]]}),Qt({eyes:[[0,"look"]],pose:(s,r)=>s.pose({head:r>t?-25:0})})],extra:s=>{let r=Dt(s),o=Ue(s,e,[[["NADIE HABLA"],0,"w",[0,2.08,-1],1.2],[["ELLA: LA VENTANILLA"],t,"y",[.4,2.08,-1],1.7],[["T\xDA: EL ASIENTO DE DELANTE"],i,"y",[0,2.08,-1],2.2,1]]);return{update:(a,l,c)=>{r(a),o(a,c)}}},c:ai,range:3}});Q(28,(n,e)=>{let t=U(e,"auriculares"),i=U(e,"quieres");return{amb:"gris",fov:30,k:1,atores:[Gt({eyes:[[0,"flat"],[t,"wide"]]}),Qt({eyes:[[0,"look"],[i,"happy"]],talk:[[i,i+.8]],pose:s=>s.pose({armL:[70,0],armR:[12,8]})})],extra:(s,r,o)=>{let a=Dt(s),l=new z(new ft(.05,12,8),b("#FBF7EC"));s.add(l);let c=Ct(s,["\xBFQUIERES?"],.9,[1,1.95,-1],70),h=Wt(s,["UN AURICULAR"],1.2,[-.6,1.95,-1]),d=new P;return{update:(u,f,g)=>{a(u),o[1].arms.L.hand.getWorldPosition(d),l.position.set(d.x,d.y+.05,d.z+.08),l.visible=u>t-.3,ee(h,u,t,i-.1,g),ee(c,u,i,99,g)}}},c:ls,range:3}});Q(29,(n,e)=>{let t=U(e,"conoces"),i=U(e,"pregunta");return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"look"],[t,"flat"]]}),Qt({eyes:[[0,"happy"]],talk:[[i,n]],pose:(s,r)=>s.pose({head:Math.sin(r*4)*6})})],extra:(s,r,o)=>{let a=Dt(s),l=Sr(s),c=Ka(s,6),h=fo(s,["\xBF\xBFQU\xC9 ES ESTO??"],1.3,[-1.3,1.95,-1]),d=Ct(s,["\xBFTE GUSTA?"],.9,[1.1,1.95,-1],70),u=new P;return{update:(f,g,E)=>{a(f),l(o[0],o[1]),o[1].head.getWorldPosition(u),c(f,u,E),ee(h,f,t-.2,i-.1,E),ee(d,f,i,99,E)}}},c:ai,range:3}});Q(30,(n,e)=>{let t=U(e,"serio");return{amb:"gris",fov:30,k:1,atores:[Gt({eyes:[[0,"happy"],[t+1,"wide"]],talk:[[.2,1.2]]}),Qt({eyes:[[0,"happy"],[t,"look"]],talk:[[t,n]]})],extra:(i,s,r)=>{let o=Dt(i),a=Sr(i),l=Ct(i,["\xA1ME ENCANTA!"],1,[-.8,1.95,-1],70),c=Ct(i,["\xBFEN SERIO? SI","NADIE LA CONOCE"],1.4,[.9,1.95,-1],56);return{update:(h,d,u)=>{o(h),a(r[0],r[1]),ee(l,h,.2,t-.3,u),ee(c,h,t,99,u)}}},c:ls,range:3}});Q(31,(n,e)=>({amb:"gris",fov:28,k:1,atores:[Gt({x:-.2,eyes:[[0,"wide"]]})],extra:(t,i,s)=>{Dt(t);let r=Xh(s[0]),o=Xe(t,["\xA1PILLADO!"],1.4,[-.2,1.95,-1],Vn);return{update:(a,l,c)=>{ee(o,a,0,99,c),r(.5*et(0,.5,a))}}},c:[[-.2,1.5,1.6],[-.2,1.45,-1.2],[-.2,1.5,1.3],[-.2,1.45,-1.2]],range:2}));Hi(32,10,"10:00","TRES HORAS DE VIAJE");Q(33,(n,e)=>{let t=U(e,"muchas"),i=U(e,"palida"),s=r=>Math.sin(r*2.6)*10*(r>t?1.6:1);return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"wide"]],pose:(r,o)=>r.pose({lean:s(o)})}),Qt({eyes:[[0,"look"],[i,"flat"]],pose:(r,o)=>r.pose({lean:s(o)})})],extra:(r,o,a)=>{let l=Dt(r),c=Kh(a[1]),h=Ue(r,e,[[["CURVAS"],0,"w",[0,2.08,-1],1],[["MUCHAS CURVAS"],t,"r",[0,2.08,-1],1.5],[["SE PONE P\xC1LIDA"],i,"b",[.4,2.08,-1],1.5,1]]);return{update:(d,u,f)=>{l(d,2),h(d,f),c(.35*et(i,i+.6,d)),f.rotation.z+=Math.sin(d*2.6)*.03}}},c:ai,range:3}});Q(34,(n,e)=>({amb:"gris",fov:28,k:1,atores:[Qt({x:.3,eyes:[[0,"shut"]],pose:(t,i)=>t.pose({head:Math.sin(i*3)*10,armL:[12,8],armR:[150,140]})})],extra:(t,i,s)=>{Dt(t);let r=Kh(s[0]),o=Xe(t,["SE EST\xC1 MAREANDO"],1.6,[.3,1.95,-1],sy),a=dy(t,"@",.4,[.7,1.9,-1],"#7AD07A");return{update:(l,c,h)=>{r(.38),ee(o,l,0,99,h),a.rotation.z=-l*4}}},c:[[.3,1.5,1.7],[.3,1.45,-1.2],[.3,1.5,1.4],[.3,1.45,-1.2]],range:2}));Q(35,(n,e)=>{let t=U(e,"galletas"),i=U(e,"acaso");return{...Hf,fov:32,atores:[zf({x:.4,z:-.3,talk:[[i-.8,i+.5]],eyes:[[0,"look"]],pose:s=>s.pose({armL:[12,8],armR:[70,50]})}),ze({x:-.8,z:-.3,eyes:[[0,"flat"]]})],extra:(s,r,o)=>{mo(s).position.set(-.1,0,.2);let l=Jh(s),c=Ue(s,e,[[["TU ABUELA"],0,"y",[.4,2.45,-.3],1],[["GALLETAS SALADAS"],t,"y",[0,2.5,-.3],1.7],[['"POR SI ACASO"'],i-.3,"p",[0,2.5,-.3],1.6,1]]);return{update:(h,d,u)=>{let f=On(o[0]),g=et(i,i+.8,h);l.position.set(Rt(f.x,-.1,g),Rt(f.y,.55,g),Rt(f.z+.12,.2,g)),l.visible=h>t-.3,tn(l,u),c(h,u)}}},c:[[0,1.6,3.4],[-.2,1.3,-.3],[0,1.55,3],[-.2,1.3,-.3]],range:3,look:ja}});Q(36,(n,e)=>{let t=U(e,"horizonte");return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"look"]],talk:[[t-1.2,t+.6]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s<1.2?150:95,s<1.2?30:0]})}),Qt({eyes:[[0,"shut"],[t,"look"]],pose:i=>i.pose({head:-15})})],extra:(i,s,r)=>{let o=Dt(i),a=Kh(r[1]),l=[];for(let h=0;h<6;h++){let d=x(.5,.02,.02,b("#FBF7EC"),0,0,0,!1);i.add(d),l.push(d)}let c=Ue(i,e,[[["LE ABRES LA VENTANILLA"],0,"w",[0,2.08,-1],2],[["MIRA AL HORIZONTE"],t-.2,"b",[0,2.08,-1],1.8,1]]);return{update:(h,d,u)=>{o(h),a(.35*(1-et(t,t+1.5,h))),l.forEach((f,g)=>{let E=(h*1.4+g/6)%1;f.visible=h>.8,f.position.set(1.6-E*2.4,1.6+g%3*.2,-1.5)}),c(h,u)}}},c:ai,range:3}});Q(37,(n,e)=>{let t=U(e,"mejor"),i=U(e,"dormida");return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"look"],[i,"wide"]]}),Qt({eyes:[[0,"look"],[t,"happy"],[i-.2,"shut"]]})],extra:s=>{let r=Dt(s),o=qh(s),a=Ue(s,e,[[["10 MINUTOS: MEJOR"],t-.4,"y",[0,2.08,-1],1.8],[["10 M\xC1S: DORMIDA"],i-.3,"b",[0,2.08,-1],1.7,1]]);return{update:(l,c,h)=>{r(l),a(l,h),o(l,[.6,1.6,-1],h,l>i)}}},c:ai,range:3}});Q(38,(n,e)=>({amb:"gris",fov:28,k:1,atores:[Gt({x:-.38,eyes:[[0,"heart"]]}),Qt({x:.38,z:hn-.08,eyes:[[0,"shut"]],pose:go(1)})],extra:t=>{Dt(t);let i=Xe(t,["EN TU HOMBRO"],1.3,[0,1.95,-1],Xn),s=qn(t,.3);return s.position.set(-.05,1.95,-.9),{update:(r,o,a)=>{ee(i,r,.2,99,a),s.scale.setScalar(oi(r,160)),tn(s,a)}}},c:[[0,1.5,1.7],[0,1.45,-1.2],[0,1.5,1.4],[0,1.45,-1.2]],range:2}));Q(39,(n,e)=>{let t=U(e,"cuarenta");return{amb:"gris",fov:30,k:1,atores:[Gt({x:-.38,eyes:[[0,"wide"]]}),Qt({x:.38,z:hn-.08,eyes:[[0,"shut"]],pose:go(1)})],extra:i=>{let s=Dt(i),r=po(i,[-1.4,2,-1],1,a=>`${Math.min(40,Math.max(0,Math.floor((a-t)*12)))} MIN`,{w:600,h:200,size:110}),o=Xe(i,["NO TE MUEVES"],1.3,[0,2.08,-1],Vn);return{update:(a,l,c)=>{s(a),r.userData.upd(a),r.visible=a>t-.2,ee(o,a,.1,99,c)}}},c:ls,range:3}});Q(40,(n,e)=>{let t=U(e,"pica"),i=U(e,"mueves");return{amb:"gris",fov:30,k:1,atores:[Gt({x:-.38,eyes:[[0,"flat"],[t,"shut"],[i,"wide"]]}),Qt({x:.38,z:hn-.08,eyes:[[0,"shut"]],pose:go(1)})],extra:(s,r,o)=>{Dt(s);let a=os(s,8,"#FFFFFF"),l=Ue(s,e,[[["SE TE DUERME EL BRAZO"],0,"w",[-.3,2.08,-1],1.9],[["TE PICA LA NARIZ"],t,"y",[-.3,2.08,-1],1.6],[["Y NO TE MUEVES"],i-.3,"r",[-.3,2.08,-1],1.5,1]]),c=new P;return{update:(h,d,u)=>{l(h,u),o[0].arms.L.hand.getWorldPosition(c),a(h,[c.x,c.y+.2,c.z+.1,.15],h<t?1:0)}}},c:ls,range:3}});Q(41,(n,e)=>{let t=U(e,"foto"),i=U(e,"mataras");return{amb:"gris",fov:32,k:1,atores:[Gt({x:-.38,eyes:[[0,"wide"],[i,"flat"]]}),Qt({x:.38,z:hn-.08,eyes:[[0,"shut"]],pose:go(1)}),Yn({x:1.5,z:-.9,eyes:[[0,"smug"]],pose:s=>s.pose({armL:[12,8],armR:[100,60]})})],extra:(s,r,o)=>{Dt(s);let a=Sf(["\u{1F4F7}"],{hora:"10:42"});a.scale.setScalar(.4),s.add(a);let l=Ye("#FFFFFF",1.6,0);s.add(l);let c=Ue(s,e,[[["TU MEJOR AMIGO"],0,"w",[1.5,2,-.6],1.4],[["\xA1CLIC!"],t,"y",[1.1,2,-.6],.8],[["LO MATAR\xC1S DESPU\xC9S"],i-.2,"r",[0,2.08,-1],1.8,1]]);return{update:(h,d,u)=>{let f=On(o[2]);a.position.set(f.x-.05,f.y+.1,f.z+.1),tn(a,u),l.position.set(f.x,f.y+.1,f.z+.2),l.material.opacity=h>t&&h<t+.25?1:0,c(h,u)}}},c:[[.5,1.6,3],[.5,1.3,-1],[.5,1.55,2.7],[.5,1.3,-1]],range:3}});var jh=n=>(Math.abs(n)<6?-.55*(1-(n/6)**2):0)+.03,il=n=>{let e=kh(["ACADEMIA DE POLIC\xCDA"],3.4,{bg:"#1E2A55",fg:"#F2C14E"});e.position.set(0,3.3,-3.4),n.add(e)},py=["ABAD","ACOSTA","ALONSO","\xC1LVAREZ"],my=(n,e,t)=>Wt(n,[e],.75,t,{size:60}),ed=(n={})=>[-2.1,-.7,.7,2.1].map((e,t)=>$a(t,{x:e,z:.2,eyes:[[0,n.eyes||"look"]],...n.pose?{pose:n.pose(t)}:{}})),Fs={amb:"gymkana",fov:34},Eo={amb:"lagoNoche",fov:32},yo={exposure:1,bloom:.5,vig:.55};Q(42,(n,e)=>{let t=U(e,"contigo");return{amb:"gris",fov:30,k:1,atores:[ze({x:-.6,z:-.3,eyes:[[0,"look"]]}),ot({x:.6,z:-.3,eyes:[[0,"shut"]]})],extra:i=>{let s=Ue(i,e,[[["\xBFPOR QU\xC9 JUSTO ELLA?"],0,"p",[0,2.45,-.3],2],[["\xBFPOR QU\xC9 JUSTO CONTIGO?"],t-.5,"y",[0,2.45,-.3],2.2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.6],[0,1.4,-.3],[0,1.6,3.1],[0,1.4,-.3]],range:3}});Q(43,(n,e)=>{let t=U(e,"cadetes");return{...dn(),atores:[Yh(1,{x:-2.6,z:-.6,eyes:[[0,"look"]],pose:i=>i.pose({armL:[60,70],armR:[12,8]})}),...ed().map((i,s)=>({...i,x:-.9+s*1,z:-1.2}))],extra:i=>{il(i);let s=Ue(i,e,[[["MADY SEGAL"],0,"w",[-2.6,2.4,-.5],1.3],[["CADETES DE POLIC\xCDA"],t,"y",[.6,2.6,-1],1.9,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.9,5.2],[0,1.6,-1.4],[0,1.85,4.6],[0,1.6,-1.4]],range:5}});Q(44,(n,e)=>{let t=U(e,"orden");return{...dn(),atores:ed(),extra:i=>{il(i),Wn(i,[-2.1,-.7,.7,2.1],1);let s=py.map((o,a)=>my(i,o,[-2.1+a*1.4,.95,1.35])),r=Xe(i,["ORDEN ALFAB\xC9TICO"],1.9,[0,2.5,.2]);return{update:(o,a,l)=>{s.forEach((c,h)=>ee(c,o,t+h*.35,99,l)),ee(r,o,t-.3,99,l)}}},c:[[0,1.9,5],[0,1.3,.2],[0,1.85,4.4],[0,1.3,.2]],range:5}});Q(45,(n,e)=>{let t=U(e,"pregunto");return{...dn(),atores:[Yh(1,{x:-1,z:-.2,talk:[[t,t+2.5]],eyes:[[0,"look"]],pose:i=>i.pose({armL:[60,70],armR:[12,8]})}),$a(0,{x:.6,z:-.2,eyes:[[0,"look"],[t+2,"happy"]]})],extra:i=>{il(i);let s=Wt(i,["UNAS SEMANAS DESPU\xC9S"],2,[0,2.6,-.3]),r=Ct(i,["\xBFQUI\xC9N ES TU","MEJOR AMIGO?"],1.3,[-1.2,2.2,-.2],60);return{update:(o,a,l)=>{ee(s,o,0,t-.2,l),ee(r,o,t,99,l)}}},c:[[-.2,1.7,3.6],[-.2,1.5,-.2],[-.2,1.65,3.1],[-.2,1.5,-.2]],range:3}});Q(46,(n,e)=>{let t=U(e,"cerca");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=kf(i,["ABAD","ACOSTA","ALONSO","\xC1LVAREZ","AMADO","ARIAS","\xC1VILA"],1.7,[-.4,1.5,-.6],-1,"LA LISTA"),r=[0,1,2].map(a=>{let l=qn(i,.28);return l.position.set(.75,2.05-a*.48,-.5),l}),o=Xe(i,["MUY CERCA EN LA LISTA"],2,[.4,2.75,-.5],Xn);return{update:(a,l,c)=>{r.forEach((h,d)=>{h.visible=a>t-.4+d*.3,h.scale.setScalar(oi(a+d*.3,130))}),ee(o,a,t,99,c)}}},c:[[0,1.6,3.6],[0,1.6,-.6],[0,1.6,3.1],[0,1.6,-.6]],range:3}});Q(47,(n,e)=>{let t=U(e,"comun")-1.5,i=U(e,"lado")-.9;return{...dn(),atores:ed({pose:s=>(r,o)=>r.pose({armL:[s%2?40:12,8],armR:[s%2?12:40,8]})}),extra:s=>{il(s),Wn(s,[-2.1,-.7,.7,2.1],1);let r=[0,2.55,.2],o=Ue(s,e,[[["NO AL M\xC1S PARECIDO"],0,"r",r,1.9],[["NO AL QUE TEN\xCDA M\xC1S EN COM\xDAN"],t,"r",r,2.6],[["\xA1AL QUE TEN\xCDA AL LADO!"],i,"y",r,2.1,1]]),a=[-1.4,1.4].map(l=>{let c=qn(s,.3);return c.position.set(l,2,.3),c});return{update:(l,c,h)=>{o(l,h),a.forEach(d=>{d.visible=l>i,d.scale.setScalar(oi(l,130))})}}},c:[[0,1.9,5],[0,1.4,.2],[0,1.85,4.4],[0,1.4,.2]],range:5}});Q(48,(n,e)=>({amb:"gris",fov:30,k:1,atores:[$a(0,{x:-.32,z:-.3,eyes:[[0,"happy"]],pose:Ff(1)}),$a(1,{x:.32,z:-.3,eyes:[[0,"happy"]],pose:Ff(-1)})],extra:t=>{let i=Xe(t,["LA CERCAN\xCDA CREA AMISTADES"],2.4,[0,2.4,-.3]),s=os(t,10,"#FFE27A");return{update:(r,o,a)=>{ee(i,r,.2,99,a),s(r,[0,1.5,-.2,.9])}}},c:[[0,1.6,3.4],[0,1.4,-.3],[0,1.6,2.9],[0,1.4,-.3]],range:3}));Q(49,(n,e)=>{let t=U(e,"cinco");return{amb:"gris",fov:30,k:1,atores:[Gt({x:-.38,eyes:[[0,"heart"]]}),Qt({x:.38,z:hn-.08,eyes:[[0,"shut"]],pose:go(1)})],extra:i=>{let s=Dt(i),r=Ue(i,e,[[["TU CRUSH, AL LADO"],0,"p",[0,2.08,-1],1.7],[["5 D\xCDAS SEGUIDOS"],t,"y",[0,2.08,-1],1.6,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:ai,range:3}});Hi(50,1,"13:00","EL ALBERGUE");Q(51,(n,e)=>{let t=U(e,"bosque"),i=U(e,"lago"),s=U(e,"montanas");return{amb:"albergue",fov:34,atores:[ze({x:-.5,z:1,move:r=>[-.5,0,Rt(3,1,et(0,2,r))],eyes:[[0,"wide"]],pose:(r,o)=>o<2?r.walk(o*2):r.pose()}),ot({x:.4,z:1,move:r=>[.4,0,Rt(3.2,1,et(0,2.2,r))],eyes:[[0,"happy"]],pose:(r,o)=>o<2.2?r.walk(o*2):r.pose()}),$e(0,{x:-1.6,z:1.4}),Yn({x:1.6,z:1.6})],extra:r=>{let o=[1.5,3,-1],a=Ue(r,e,[[["EL ALBERGUE"],0,"y",o,1.3],[["UN BOSQUE"],t,"w",o,1.1],[["UN LAGO"],i,"w",o,1],[["MONTA\xD1AS POR TODAS PARTES"],s,"y",o,2.4,1]]);return{update:(l,c,h)=>a(l,h)}},c:[[0,2.4,8.5],[0,2,-4],[1,2.2,7.6],[1,2,-4]],k:1,range:8}});Q(52,(n,e)=>{let t=U(e,"primera"),i=U(e,"colgante");return{amb:"albergue",fov:32,atores:[nl({x:0,z:-.6,talk:[[t,n]],eyes:[[0,"happy"]],pose:Qa}),ze({x:-.9,z:1,eyes:[[0,"look"],[i,"wide"]]}),ot({x:-.3,z:1.2,eyes:[[0,"look"],[i,"wide"]]}),$e(2,{x:.8,z:1.1}),Yn({x:1.4,z:1})],extra:s=>{let r=Wt(s,["EL MONITOR"],1.1,[0,2.4,-.6]),o=Ct(s,["PRIMERA ACTIVIDAD","DE LA TARDE\u2026"],1.4,[.9,2.3,-.6],56),a=Xe(s,["\xA1EL PUENTE COLGANTE!"],2,[0,2.6,-.6],Vn);return{update:(l,c,h)=>{ee(r,l,.1,t-.2,h),ee(o,l,t,i-.6,h),ee(a,l,i-.5,99,h)}}},c:[[0,1.9,5.2],[0,1.4,-.2],[0,1.85,4.6],[0,1.4,-.2]],range:5}});Q(53,(n,e)=>{let t=U(e,"barranco");return{amb:"puente",fov:34,atores:[],extra:i=>{let s=Ue(i,e,[[["CUERDAS Y TABLAS DE MADERA"],0,"w",[0,2.4,0],2.6],[["ENCIMA DE UN BARRANCO"],t,"r",[0,2.4,0],2.4,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-9,3.2,9],[0,.2,0],[-6,2,8],[0,-2.5,0]],k:1,range:9,blur:4}});Q(54,(n,e)=>{let t=U(e,"mucho");return{amb:"puente",fov:32,atores:[],extra:i=>{let s=Xe(i,["\xA1SE MUEVE!"],1.4,[0,1.8,0],Vn),r=Xe(i,["MUCHO"],1,[0,1.2,0],Vn);return{update:(o,a,l)=>{ee(s,o,0,99,l),ee(r,o,t,99,l),Df(l,o>t?.06:.03,o),l.rotation.z+=Math.sin(o*3)*.05}}},c:[[-5,1.6,5],[0,-.2,0],[-4.4,1.5,4.6],[0,-.2,0]],k:1,range:6}});Q(55,(n,e)=>{let t=U(e,"yo");return{amb:"puente",fov:30,atores:[ot({x:-6.4,z:.2,eyes:[[0,"wide"],[t,"sad"]],talk:[[t,n]],pose:(i,s)=>i.pose({armL:[12,8],armR:[70,20],lean:-6+Math.sin(s*20)*2})}),ze({x:-7.2,z:-.3,eyes:[[0,"look"]]})],extra:i=>{let s=Wt(i,["NI UN PASO"],1.1,[-6.4,2.35,.2]),r=Ct(i,["YO NO PUEDO."],1.1,[-5.6,2.2,.3],66);return{update:(o,a,l)=>{ee(s,o,.3,t-.2,l),ee(r,o,t,99,l)}}},c:[[-4.2,1.7,3.6],[-6.6,1.3,0],[-4.6,1.65,3.1],[-6.6,1.3,0]],k:1,range:3.5}});Q(56,(n,e)=>{let t=U(e,"tiemblan"),i=U(e,"tiendes"),s=U(e,"vamos");return{amb:"puente",fov:30,atores:[ze({x:-6.7,z:-.25,eyes:[[0,"wide"],[i,"look"]],talk:[[s,n]],pose:(r,o)=>r.pose({armL:[12,8],armR:[o>i?70:12,0],legL:[Math.sin(o*40)*(o>t&&o<i?6:0),0],legR:[-Math.sin(o*40)*(o>t&&o<i?6:0),0]})}),ot({x:-6,z:.25,eyes:[[0,"sad"],[i+.5,"look"]],pose:r=>r.pose({armL:[12,8],armR:[70,20]})})],extra:r=>{let o=Ue(r,e,[[["T\xDA TAMPOCO PUEDES"],0,"r",[-6.4,2.5,0],1.8],[["TE TIEMBLAN LAS PIERNAS"],t,"w",[-6.4,2.5,0],2.1],[["LE TIENDES LA MANO"],i,"y",[-6.4,2.5,0],1.8]]),a=Ct(r,["VAMOS JUNTOS.","SIN MIRAR ABAJO."],1.3,[-7.3,2.2,0],60);return{update:(l,c,h)=>{o(l,h),ee(a,l,s,99,h)}}},c:[[-5.2,1.6,3.4],[-6.4,1.3,0],[-5.4,1.6,2.9],[-6.4,1.3,0]],k:1,range:3.5}});Q(57,(n,e)=>{let t=U(e,"corazon"),i=s=>r=>{let o=Rt(-5.6,-1.2,et(0,n,r));return[o,jh(o),s]};return{amb:"puente",fov:30,atores:[ze({x:-5,z:-.25,move:i(-.25),eyes:[[0,"wide"]],pose:(s,r)=>{s.walk(r*.7,.5),s.pose({armR:[40,0]}),s.root.rotation.z=Math.sin(r*3)*.05}}),ot({x:-5,z:.25,move:i(.25),eyes:[[0,"wide"]],pose:(s,r)=>{s.walk(r*.7+.5,.5),s.pose({armL:[40,0]}),s.root.rotation.z=Math.sin(r*3)*.05}})],extra:(s,r,o)=>{let a=qn(s,.4),l=Ue(s,e,[[["PASO A PASO"],.8,"w",[0,0,0],1.3],[["EL CORAZ\xD3N A MIL"],t,"r",[0,0,0],1.7,1]]),c=new P;return{update:(h,d,u)=>{o[0].head.getWorldPosition(c),a.position.set(c.x+.3,c.y+.5,c.z+.3),a.scale.setScalar(oi(h,h>t?220:130)),tn(a,u),l(h,u)}}},cam:[[0,[-8,1.6,3.4],[-5.2,.8,0]],[99,[-3.2,1.2,3.4],[-1,.6,0]]],f:[[0,4.4],[99,4.4]],k:1,range:4}});Q(58,(n,e)=>{let t=U(e,"tarda");return{amb:"puente",fov:30,atores:[ze({x:6.8,z:-.25,eyes:[[0,"look"],[t,"heart"]],pose:i=>i.pose({armL:[12,8],armR:[40,0]})}),ot({x:6.8,z:.3,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[40,0],armR:[12,8]})})],extra:(i,s,r)=>{let o=Wt(i,["TODAV\xCDA TE APRIETA LA MANO"],2.3,[6.8,2.45,0]),a=Xe(i,["TARDA EN SOLTARLA"],1.8,[6.8,2.45,0],Xn),l=Xh(r[0]);return{update:(c,h,d)=>{ee(o,c,.2,t-.2,d),ee(a,c,t,99,d),l(et(t,t+.6,c))}}},c:[[5.2,1.6,3.4],[6.8,1.3,0],[5.6,1.55,2.9],[6.8,1.3,0]],k:1,range:3}});BE(59,["1974"],[(n,e)=>({amb:"lab",fov:30,atores:[],extra:t=>{let i=Xe(t,["UNO DE LOS EXPERIMENTOS","M\xC1S FAMOSOS"],2.6,[0,1.8,-1],{h:260});return{update:(s,r,o)=>ee(i,s,0,99,o)}},c:[[0,1.8,3.6],[0,1.8,-1],[0,1.8,3],[0,1.8,-1]],k:1,range:3}),(n,e)=>{let t=U(e,"capilano"),i=U(e,"setenta");return{amb:"puente",fov:34,atores:[ao({x:-8,z:1.4,eyes:[[0,"look"]],pose:(s,r)=>r>t?Wh(s):s.pose()}),ao({x:-8.8,z:.6,hair:"old",hairc:"#8A7A6A",eyes:[[0,"look"]]}),$e(1,{x:-2,z:0,move:s=>{let r=Rt(-5.5,1.5,et(1,n,s));return[r,jh(r),0]},eyes:[[0,"wide"]],pose:(s,r)=>{s.walk(r*.7,.6),s.root.rotation.z=Math.sin(r*3)*.06}})],extra:s=>{let r=Ue(s,e,[[["DUTTON Y ARON"],.2,"w",[-8.4,2.5,1],1.5],[["CANAD\xC1 \xB7 PUENTE DE CAPILANO"],t-.4,"y",[-4,2.2,0],2.6]]),o=Xe(s,["70 METROS"],1.3,[2.6,-1.5,.8],{fg:"#FF8A5A"}),a=Xe(s,["\u2193"],.35,[2.6,-2.2,.8],{size:110,w:200,h:150});return{update:(l,c,h)=>{r(l,h),ee(o,l,i,99,h),ee(a,l,i,99,h)}}},c:[[-11,2.6,9.5],[-4,.4,0],[-2,1.6,9],[0,-1,0]],k:1,range:9,blur:4}}]);Q(60,(n,e)=>{let t=U(e,"encuesta"),i=U(e,"numero");return{amb:"puente",fov:30,atores:[$e(0,{x:6.9,z:.1,talk:[[0,1.5],[i-.5,i+2.5]],eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[50,60],armR:[r>i?85:12,0]})}),$e(1,{x:5.6,z:.1,move:s=>{let r=Rt(3.5,5.7,et(0,1.6,s));return[r,jh(r),0]},eyes:[[0,"wide"],[i+.5,"heart"]],pose:(s,r)=>r<1.6?s.walk(r):s.pose({armL:[12,8],armR:[r>i+.4?70:12,0]})})],extra:s=>{let r=x(.24,.32,.02,b("#C9A06A"),7.2,1,.25);s.add(r);let o=Wt(s,["SU N\xDAMERO DE TEL\xC9FONO"],1.6,[6.4,2.35,.3]),a=x(.18,.12,.005,b("#FBF7EC"),6.4,1.1,.3,!1);s.add(a);let l=Wt(s,["UNA ENCUESTA"],1.1,[7.2,2.35,.3]),c=Wt(s,["UNA CHICA"],1,[6.9,2.35,.3]);return{update:(h,d,u)=>{ee(c,h,0,t-.2,u),ee(l,h,t,i-.1,u),ee(o,h,i,99,u),a.visible=h>i}}},c:[[4.6,1.8,4.6],[6.4,1.2,0],[5.2,1.7,3.8],[6.4,1.2,0]],k:1,range:4}});Q(61,n=>({amb:"puente",ambo:{normal:!0},fov:32,atores:[$e(5,{x:0,z:0,y:.42,move:e=>[0,.42,Rt(2,-1,e/n)],pose:(e,t)=>e.walk(t)}),$e(0,{x:.6,z:-3.2,eyes:[[0,"happy"]],pose:e=>e.pose({armL:[50,60]})})],extra:e=>{let t=Wt(e,["OTRO PUENTE: BAJO, ANCHO Y FIRME"],2.8,[0,2.6,-1]);return{update:(i,s,r)=>ee(t,i,.2,99,r)}},c:[[4.4,1.8,4.4],[0,.8,-.6],[3.6,1.7,3.6],[0,.8,-.8]],k:1,range:5}));Q(62,(n,e)=>{let t=U(e,"mitad"),i=U(e,"ocho");return{amb:"lab",fov:30,atores:[],extra:s=>{let r=(h,d)=>{let u=x(1,1,.4,b(d,{emissive:d,emissiveIntensity:.25}),h,0,-1);return s.add(u),u},o=r(-1,"#E8667F"),a=r(1,"#4A86C7"),l=[Wt(s,["PUENTE QUE DA MIEDO"],1.8,[-1,.45,-.6],{size:56}),Wt(s,["PUENTE FIRME"],1.4,[1,.45,-.6],{size:56}),Xe(s,["CASI LA MITAD LLAM\xD3"],1.8,[-1,3.25,-.8]),Xe(s,["1 DE CADA 8"],1.3,[1,1.55,-.8])],c=Xe(s,["\xBFQU\xC9 PAS\xD3?"],1.4,[0,3.6,-1]);return{update:(h,d,u)=>{let f=2.4*et(t-.5,t+.6,h),g=.5*et(i-.6,i+.3,h);o.scale.y=Math.max(.01,f),o.position.y=.6+f/2,a.scale.y=Math.max(.01,g),a.position.y=.6+g/2,ee(l[0],h,.3,99,u),ee(l[1],h,.3,99,u),ee(c,h,0,t-.5,u),ee(l[2],h,t+.4,99,u),ee(l[3],h,i,99,u)}}},c:[[0,2,6.6],[0,1.7,-1],[0,1.9,6],[0,1.7,-1]],k:1,range:6}});Q(63,(n,e)=>{let t=U(e,"acelera"),i=U(e,"corazon"),s=U(e,"sudan");return{amb:"gris",fov:30,k:1,atores:[ze({x:0,z:-.3,eyes:[[0,"look"],[t,"wide"]],pose:(r,o)=>r.pose({armL:[o>s?60:12,40],armR:[o>s?60:12,40],bob:o>t?Math.abs(Math.sin(o*14))*.02:0})})],extra:(r,o,a)=>{let l=qn(r,.45);l.position.set(0,1.25,.05);let c=Qh(r,8),h=Ue(r,e,[[["\xBFPOR QU\xC9?"],0,"w",[0,2.45,-.3],1],[["EL CUERPO SE ACELERA"],t-.3,"r",[0,2.45,-.3],2],[["EL CORAZ\xD3N LATE FUERTE"],i,"r",[0,2.45,-.3],2.1],[["TE SUDAN LAS MANOS"],s,"b",[0,2.45,-.3],1.9,1]]);return{update:(d,u,f)=>{l.visible=d>i-.2,l.scale.setScalar(oi(d,200)),tn(l,f);let g=On(a[0]);c(d,[g.x,g.y+.1,g.z,.5],d>s?1:0),h(d,f)}}},c:[[0,1.5,3.4],[0,1.4,-.3],[0,1.5,2.9],[0,1.4,-.3]],range:3}});Q(64,(n,e)=>{let t=U(e,"late"),i=U(e,"persona");return{amb:"gris",fov:30,k:1,atores:[ze({x:-.9,z:-.3,eyes:[[0,"wide"],[i,"heart"]]}),ot({x:.9,z:-.3,eyes:[[0,"happy"]]})],extra:s=>{let r=JE(s,[-.9,2.35,-.2],1),o=Ue(s,e,[[["EL CEREBRO SE CONFUNDE"],0,"p",[0,2.75,-.3],2.2]]),a=fo(s,['"Me late el coraz\xF3n\u2026 ser\xE1','por la persona de delante"'],2,[0,2.65,-.2],{size:50});return{update:(l,c,h)=>{r(l>.3),l<t-.2?o(l,h):o(-1,h),ee(a,l,t-.1,99,h)}}},c:[[0,1.7,4],[0,1.6,-.3],[0,1.7,3.5],[0,1.6,-.3]],range:3}});Q(65,(n,e)=>{let t=U(e,"quiza");return{amb:"puente",fov:30,atores:[ze({x:6.6,z:-.25,eyes:[[0,"look"]]}),ot({x:6.9,z:.3,eyes:[[0,"heart"]],pose:i=>i.pose({head:-10})})],extra:(i,s,r)=>{let o=qn(i,.35),a=Xe(i,["QUIZ\xC1 NO SEA SOLO POR EL PUENTE"],2.6,[6.7,2.5,0],Xn),l=new P;return{update:(c,h,d)=>{r[1].head.getWorldPosition(l),o.position.set(l.x+.35,l.y+.4,l.z+.2),o.scale.setScalar(oi(c,200)),tn(o,d),ee(a,c,t-.2,99,d)}}},c:[[5,1.6,3.4],[6.7,1.3,0],[5.4,1.55,2.9],[6.7,1.3,0]],k:1,range:3}});Hi(66,10,"MARTES","GYMKANA");Q(67,(n,e)=>{let t=U(e,"carrera");return{...Fs,atores:[nl({x:2.2,z:-.4,eyes:[[0,"happy"]],talk:[[0,n]],pose:Qa}),ze({x:-.6,z:.6,eyes:[[0,"look"]]}),ot({x:0,z:.6,eyes:[[0,"look"],[t,"wide"]]}),$e(0,{x:-1.6,z:.7}),$e(4,{x:-2.2,z:.7}),Yn({x:1,z:.8})],extra:i=>{let s=[0,2.6,-.2],r=Ue(i,e,[[["GYMKANA POR PAREJAS"],0,"y",s,2],[["LA PRUEBA M\xC1S DIF\xCDCIL"],"prueba","w",s,2],[["CARRERA A TRES PIERNAS"],t,"r",s,2.2,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,2,6],[0,1.3,-.4],[0,1.95,5.4],[0,1.3,-.4]],range:6}});Q(68,(n,e)=>{let t=U(e,"lago"),i=U(e,"bandera"),s=U(e,"volver");return{...Fs,atores:[ze({x:-.22,z:.6,eyes:[[0,"look"]],pose:r=>r.pose({armL:[12,8],armR:[40,0]})}),ot({x:.22,z:.6,eyes:[[0,"happy"]],pose:r=>r.pose({armL:[40,0],armR:[12,8]})}),nl({x:.9,z:.9,eyes:[[0,"look"]],pose:r=>r.pose({armL:[70,40],armR:[70,40],lean:15})})],extra:r=>{Vf(r).position.set(0,.12,.65);let a=hy(r,0,-5.3),l=[0,2.5,.4],c=Ue(r,e,[[["ATADOS POR EL TOBILLO"],0,"w",l,2],[["HASTA EL LAGO"],t,"b",l,1.4],[["UNA BANDERA"],i,"p",l,1.3],[["\xA1Y VOLVER!"],s,"y",l,1.1,1]]);return{update:(h,d,u)=>{c(h,u),a.rotation.y=Math.sin(h*2)*.2}}},cam:[[0,[0,1.3,3.2],[0,.6,.6]],[t-.3,[0,1.3,3.2],[0,.6,.6]],[t+.6,[0,2.2,4],[0,.9,-4]],[99,[0,2.2,3.6],[0,.9,-4]]],f:[[0,2.7],[t-.3,2.7],[t+.6,8.5],[99,8]],k:1,range:6}});Q(69,(n,e)=>{let t=U(e,"diez"),i=U(e,"veinte"),s=o=>{let a=et(t-.2,t+.1,o)*(1-et(t+.9,t+1.2,o)),l=et(i-.2,i+.1,o);return Math.max(a,l)},r=o=>a=>[Rt(-3,2,et(0,n,a))+o,0,.2];return{...Fs,atores:[ze({x:-3,z:.2,move:r(-.22),eyes:[[0,"wide"]],pose:(o,a)=>{let l=s(a);l>.1?o.pose({armL:[150,20],armR:[150,20]}):o.walk(a*3),ho(o,l*1.4)}}),ot({x:-3,z:.2,move:r(.22),eyes:[[0,"wide"],[t+.3,"happy"]],pose:(o,a)=>{let l=s(a);l>.1?o.pose({armL:[150,20],armR:[150,20]}):o.walk(a*3+.5),ho(o,l*1.4)}})],extra:o=>{let a=Vf(o),l=Ue(o,e,[[["10 METROS: \xA1PLAF!"],t,"r",[0,2.4,.2],1.7],[["20 METROS: \xA1PLAF!"],i,"r",[0,2.4,.2],1.7,1]]);return{update:(c,h,d)=>{let u=Rt(-3,2,et(0,n,c));a.position.set(u,.12,.25),l(c,d)}}},cam:[[0,[-3,1.5,4.2],[-3,.8,.2]],[99,[2,1.5,4.2],[2,.8,.2]]],f:[[0,4.1],[99,4.1]],k:1,range:4}});Q(70,(n,e)=>({...Fs,atores:[ot({x:.4,z:.2,y:.15,eyes:[[0,"happy"]],pose:(t,i)=>{t.pose({armL:[60,70],armR:[60,70]}),ho(t,-1.35+Math.sin(i*14)*.05)}}),ze({x:-.6,z:.2,y:.15,eyes:[[0,"happy"]],pose:(t,i)=>{t.pose({armL:[12,8],armR:[12,8]}),ho(t,1.4+Math.sin(i*12)*.04)}})],extra:t=>{let i=[lo(t,"JA, JA, JA",.9,[.8,1.3,.2]),lo(t,"\xA1JAJAJA!",.8,[-.9,1.3,.2])],s=Wt(t,["NO PUEDE NI LEVANTARSE"],2,[0,1.9,.2]);return{update:(r,o,a)=>{ee(i[0],r,.2,99,a),ee(i[1],r,1.2,99,a),ee(s,r,1.6,99,a)}}},c:[[0,1.6,3.4],[0,.5,.2],[0,1.5,2.9],[0,.5,.2]],k:1,range:3}));Q(71,(n,e)=>{let t=U(e,"barro"),i=U(e,"sin");return{...Fs,atores:[ze({x:-.25,z:.6,eyes:[[0,"flat"],[i,"happy"]]}),ot({x:.25,z:.6,eyes:[[0,"happy"]]})],extra:(s,r,o)=>{let a=!1,l=[0,2.4,.6],c=Ue(s,e,[[["LOS \xDALTIMOS"],0,"w",l,1.2],[["LLENOS DE BARRO"],t,"y",l,1.6],[["Y SIN BANDERA"],i,"r",l,1.5,1]]);return{update:(h,d,u)=>{a||(Ar(o[0],8),Ar(o[1],8),a=!0),c(h,u)}}},c:[[0,1.6,3.2],[0,1.3,.6],[0,1.55,2.7],[0,1.3,.6]],range:3}});Q(72,(n,e)=>{let t=U(e,"mejor");return{...Fs,atores:[ze({x:-.25,z:.6,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[150,40]})}),ot({x:.25,z:.6,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[150,40],armR:[12,8]})})],extra:(i,s,r)=>{let o=!1,a=os(i,12,"#FFE27A"),l=Ue(i,e,[[["NO OS IMPORTA"],0,"w",[0,2.5,.6],1.4],[["LA MEJOR CARRERA DE VUESTRA VIDA"],t-.3,"p",[0,2.5,.6],2.8,1]]);return{update:(c,h,d)=>{o||(Ar(r[0],8),Ar(r[1],8),o=!0),a(c,[0,1.6,.7,1]),l(c,d)}}},c:[[0,1.6,3.4],[0,1.4,.6],[0,1.55,2.9],[0,1.4,.6]],range:3,look:{bloom:.45}}});Q(73,(n,e)=>{let t=U(e,"arthur"),i=U(e,"puente");return{amb:"lab",fov:30,atores:[Yh(2,{x:0,z:-.6,eyes:[[0,"look"]],pose:Wh})],extra:s=>{let r=Ue(s,e,[[["TAMBI\xC9N TIENE EXPLICACI\xD3N"],0,"w",[0,2.6,-.6],2.4],[["ARTHUR ARON"],t,"y",[0,2.6,-.6],1.3],[["EL MISMO DEL PUENTE"],i-.3,"w",[0,2.6,-.6],1.9],[["OTRO EXPERIMENTO CON PAREJAS"],"experimento","y",[0,2.6,-.6],2.6,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.8,3.8],[0,1.6,-.6],[0,1.75,3.2],[0,1.6,-.6]],range:3}});Q(74,(n,e)=>{let t=U(e,"pelota");return{amb:"lab",fov:32,atores:[$e(3,{x:-1.2,z:-.3,eyes:[[0,"flat"]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})}),$e(5,{x:1.2,z:-.3,eyes:[[0,"flat"]],pose:i=>i.pose({armL:[60,70],armR:[60,70]})})],extra:i=>{Of(i,0,-.3,3,"#8A8E98");let s=new z(new ft(.12,16,12),b("#E8667F"));i.add(s);let r=Ue(i,e,[[["ALGO ABURRIDO"],0,"w",[0,2.3,-.3],1.4],[["PASAR UNA PELOTA, DESPACIO"],t,"w",[0,2.3,-.3],2.4,1]]),o=qh(i);return{update:(a,l,c)=>{let h=(Math.sin((a-t)*.9)+1)/2;s.visible=a>t-.3,s.position.set(Rt(-.95,.95,h),.2,-.3),s.rotation.z=-a*2,r(a,c),o(a,[1.6,1.8,-.3],c)}}},c:[[0,1.65,3.6],[0,1.2,-.3],[0,1.6,3.1],[0,1.2,-.3]],range:3,look:{exposure:.95}}});Q(75,(n,e)=>{let t=U(e,"atadas"),i=U(e,"cojin"),s=U(e,"manos"),r=U(e,"tiempo"),o=l=>c=>[l+Rt(-1.4,1.4,et(t,n-.3,c)),0,-.3],a=(l,c)=>c>t?l.walk(c*1.4):l.pose();return{amb:"lab",fov:32,atores:[$e(0,{x:-1.6,z:-.3,eyes:[[0,"look"],[t,"happy"]],move:o(-.22),pose:(l,c)=>{a(l,c),l.pose({armR:[60,80]})}}),$e(1,{x:-1.2,z:-.3,eyes:[[0,"lookl"],[t,"happy"]],move:o(.22),pose:(l,c)=>{a(l,c),l.pose({armL:[60,80]})}})],extra:(l,c,h)=>{Of(l,-.2,-.3,4.2);for(let m of[-.4,.8])ey(l,m,-.3);let d=jE();l.add(d);let u=x(.5,.05,.05,b("#C9A050"),0,0,0,!1);l.add(u);let f=po(l,[2.3,1.9,-.6],1,m=>`0:${String(Math.max(0,59-Math.floor((m-r)*8))).padStart(2,"0")}`,{w:500,h:200,size:110}),g=[-.2,2.5,-.4],E=Ue(l,e,[[["ALGO NUEVO Y EMOCIONANTE"],0,"y",g,2.3],[["ATADOS: MU\xD1ECA Y TOBILLO"],t,"w",g,2.3],[["\xA1CON UN COJ\xCDN!"],i,"p",g,1.4],[["SIN USAR LAS MANOS"],s-.4,"w",g,1.8],[["CON EL TIEMPO CONTADO"],r,"r",g,2.1,1]]);return{update:(m,p,A)=>{let v=new P,y=new P;h[0].torso.getWorldPosition(v),h[1].torso.getWorldPosition(y),d.position.set((v.x+y.x)/2,v.y+.05,v.z+.25),d.visible=m>i-.3,u.position.set((v.x+y.x)/2,.15,v.z),f.userData.upd(m),f.visible=m>r-.2,E(m,A)}}},c:[[0,1.8,5.2],[0,1.35,-.4],[0,1.75,4.8],[0,1.35,-.4]],range:4,k:1}});Q(76,(n,e)=>{let t=U(e,"hacer"),i=U(e,"locas");return{amb:"gris",fov:30,k:1,atores:[$e(0,{x:-2.15,z:-.3,eyes:[[0,"happy"]]}),$e(1,{x:-1.6,z:-.3,eyes:[[0,"happy"]]})],extra:s=>{let r=Nf(s,[[`PRUEBA
DIF\xCDCIL`,.88,"#E8447A"],[`ALGO
ABURRIDO`,.5,"#8A8E98"]],2.3,[.6,1.55,-.5],{title:"SE SENT\xCDAN M\xC1S UNIDAS"}),o=Ue(s,e,[[["COSAS NUEVAS JUNTOS"],t,"y",[0,2.55,-.4],2],[["SI SON UN POCO LOCAS, MEJOR"],i-.6,"p",[0,2.55,-.4],2.5,1]]),a=qn(s,.4);return a.position.set(-1.88,2.2,-.3),{update:(l,c,h)=>{ee(r,l,.1,99,h),o(l,h),a.scale.setScalar(oi(l)),tn(a,h)}}},c:[[-.3,1.6,4.4],[-.3,1.55,-.4],[-.3,1.6,3.9],[-.3,1.55,-.4]],range:3}});Q(77,(n,e)=>{let t=U(e,"charco");return{...Fs,atores:[ze({x:.9,z:-1,y:-.35,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[150,40],armR:[150,40]})}),ot({x:1.5,z:-1.2,y:-.35,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[150,40],armR:[12,8],head:Math.sin(s*6)*8})})],extra:(i,s,r)=>{let o=!1,a=[];for(let c=0;c<10;c++){let h=Ye("#6A4A2E",.14,0);h.material.blending=ei,i.add(h),a.push(h)}let l=Xe(i,["DENTRO DE UN CHARCO CON TU CRUSH"],2.8,[1.2,2.2,-1],Xn);return{update:(c,h,d)=>{o||(Ar(r[0],10),Ar(r[1],10),o=!0),a.forEach((u,f)=>{let g=(c*1.2+f/10)%1;u.position.set(1.2+Math.sin(f*2.1)*g*1.2,.1+Math.sin(g*Math.PI)*.8,-1.1+Math.cos(f)*.3),u.material.opacity=.9*(1-g)}),ee(l,c,t-.4,99,d)}}},c:[[1.2,1.5,2.6],[1.2,.8,-1.1],[1.2,1.45,2.2],[1.2,.8,-1.1]],k:1,range:3}});Hi(78,9,"21:00","MARTES POR LA NOCHE");Q(79,(n,e)=>{let t=U(e,"nubes");return{...Eo,atores:[as({x:1.2,z:.6,eyes:[[0,"happy"]],talk:[[t-.5,t+1]],pose:i=>i.pose({armL:[12,8],armR:[70,40]})}),ze({x:-.9,z:.9,eyes:[[0,"look"]]}),ot({x:-.3,z:1.2,eyes:[[0,"happy"]]}),$e(0,{x:-1.6,z:.2}),Yn({x:.4,z:-.6}),$e(4,{x:-.6,z:-.8})],extra:(i,s,r)=>{let o=ka();o.position.set(-.2,0,.1),o.scale.setScalar(1.6),i.add(o);let a=new le;for(let c=0;c<3;c++){let h=new z(new st(.06,.06,.1,12),b("#FBF7EC"));h.position.set(c*.1-.1,0,0),a.add(h)}i.add(a);let l=Ue(i,e,[[["HOGUERA JUNTO AL LAGO"],0,"y",[-.2,2.6,.1],2.2],[["NUBES DE AZ\xDACAR"],t,"p",[-.2,2.6,.1],1.7,1]]);return{update:(c,h,d)=>{o.tick(c);let u=On(r[0]);a.position.set(u.x,u.y+.08,u.z+.1),a.visible=c>t-.4,l(c,d)}}},c:[[0,2.2,5.4],[-.2,.9,-.2],[0,2.1,4.8],[-.2,.9,-.2]],range:5,look:yo}});Q(80,(n,e)=>{let t=U(e,"cae"),i=U(e,"reis");return{...Eo,atores:[ze({x:-.8,z:.6,eyes:[[0,"look"],[1,"wide"],[i,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[70,30]})}),ot({x:.6,z:.6,eyes:[[0,"look"],[t+.3,"wide"],[i,"happy"]],pose:s=>s.pose({armL:[70,30],armR:[12,8]})})],extra:(s,r,o)=>{let a=ka();a.position.set(-.1,0,.2),a.scale.setScalar(1.4),s.add(a);let l=Pf(s),c=Pf(s),h=[];for(let u=0;u<8;u++){let f=Ye("#202024",.3,0);f.material.blending=ei,s.add(f),h.push(f)}let d=Ue(s,e,[[["LA TUYA SE QUEMA"],.2,"r",[-.1,2.4,.2],1.6],[["LA DE ELLA, AL FUEGO"],t,"r",[-.1,2.4,.2],1.8],[["OS RE\xCDS OTRA VEZ"],i,"p",[-.1,2.4,.2],1.6,1]]);return{update:(u,f,g)=>{a.tick(u);let E=On(o[0]),m=On(o[1]);l.position.set(E.x,E.y,E.z),l.lookAt(-.1,.45,.2),c.position.set(m.x,m.y,m.z),c.lookAt(-.1,.45,.2);let p=et(.4,1.4,u);l.nube.material.color.set(p>.5?"#2A2220":"#FBF7EC"),c.nube.visible=u<t+.3,h.forEach((A,v)=>{let y=((u-.6)*.6+v/8)%1;A.position.set(-.35+Math.sin(v)*.08,.55+y*1.2,.35),A.material.opacity=u>.6&&u<i?.6*(1-y):0}),d(u,g)}}},c:[[-.1,1.6,3.6],[-.1,.9,.2],[-.1,1.55,3.1],[-.1,.9,.2]],range:3,look:yo}});var td=(n,e=1.2)=>{let t=ka();return t.position.set(0,0,.3),t.scale.setScalar(e),n.add(t),t},_r=(n={})=>({y:-.5,pose:(e,t)=>{co(e),e.pose({armL:[40,40],armR:[40,40],...n.p||{}})}}),gy=(n,e,t)=>{n.add(x(1,.06,.6,b("#C8A27A"),e,.75,t));for(let[i,s]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(x(.05,.75,.05,b("#6A6E78"),e+i*.44,.37,t+s*.25))},Wf=[0,1,2,3].map(n=>(e={})=>uo([0,3,5,7][n],{...e})),Tr={amb:"comedor",fov:32},br=n=>e=>{n.userData.disco&&n.userData.disco(e)},wr={bloom:.55,exposure:1};Q(81,(n,e)=>{let t=U(e,"estrellas"),i=U(e,"ciudad");return{...Eo,atores:[ze({x:-.45,z:.6,..._r(),eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>{co(s),s.pose({armL:[40,40],armR:[40,40],head:r>t?-20:0})}}),ot({x:.45,z:.6,..._r(),eyes:[[0,"happy"]],pose:(s,r)=>{co(s),s.pose({armL:[40,40],armR:[40,40],head:r>t?-20:0})}})],extra:s=>{let r=td(s,.8);r.position.set(0,0,1.6);let o=os(s,16,"#FFFFFF"),a=Ue(s,e,[[["OS QUED\xC1IS UN RATO M\xC1S"],0,"w",[0,2.3,.4],2.2],[["MIRANDO LAS ESTRELLAS"],t,"y",[0,2.3,.4],2],[["EN LA CIUDAD NUNCA SE VEN TANTAS"],i,"p",[0,2.3,.4],2.8,1]]);return{update:(l,c,h)=>{r.tick(l),o(l,[0,3.2,-2,3]),a(l,h)}}},cam:[[0,[0,1,3.6],[0,1,.6]],[99,[0,1.3,3.4],[0,2,-1]]],f:[[0,3],[99,3]],k:1,range:4,look:yo}});Q(82,(n,e)=>{let t=U(e,"sabes");return{...Eo,fov:30,atores:[ze({x:-.4,z:.6,..._r(),eyes:[[0,"look"],[t+2,"wide"]]}),ot({x:.4,z:.6,..._r(),talk:[[t,n]],eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{let s=td(i,.8);s.position.set(0,0,1.6);let r=Wt(i,["ALGO RARO"],1,[0,1.95,.5]),o=Ct(i,["\xBFSABES QUE LLEVO TODO","EL CURSO SENT\xC1NDOME","DETR\xC1S DE TI EN MATES?"],1.6,[.6,1.85,.6],52);return{update:(a,l,c)=>{s.tick(a),ee(r,a,.2,t-.2,c),ee(o,a,t,99,c)}}},c:[[0,1.2,3],[0,1.15,.6],[0,1.2,2.6],[0,1.15,.6]],k:1,range:3,look:yo}});Q(83,(n,e)=>{let t=U(e,"hemos");return{...dn(),atores:[ze({x:-.2,z:.3,eyes:[[0,"flat"]]}),ot({x:-.2,z:-1.3,eyes:[[0,"look"]]})],extra:i=>{Wn(i,[-.2],.55),Wn(i,[-.2],-1),Bf(i);let s=Wt(i,["NO LO SAB\xCDAS"],1.2,[-.2,2.2,.4]),r=Ct(i,["NI UNA VEZ.","HASTA ESTA SEMANA."],1.4,[1,2.1,-.6],58);return{update:(o,a,l)=>{ee(s,o,.1,t-.3,l),ee(r,o,t,99,l)}}},c:[[1.6,1.8,3.6],[-.2,1.3,-.4],[1.4,1.75,3.1],[-.2,1.3,-.4]],range:4,look:ja}});Q(84,(n,e)=>{let t=U(e,"pero"),i=U(e,"caias");return{...Eo,fov:30,atores:[ze({x:-.4,z:.6,..._r(),eyes:[[0,"look"],[i,"heart"]]}),ot({x:.4,z:.6,..._r(),talk:[[t,n]],eyes:[[0,"happy"]],pose:(s,r)=>{co(s),s.pose({armL:[r<t?60:40,40],armR:[r<t?60:40,40],bob:r<t?Math.abs(Math.sin(r*6))*.03:0})}})],extra:(s,r,o)=>{let a=td(s,.8);a.position.set(0,0,1.6);let l=Xh(o[1]),c=Ct(s,["PERO NO S\xC9. YA ME CA\xCDAS","BIEN. ANTES DE HABLAR","CONTIGO."],1.6,[.6,1.85,.6],52);return{update:(h,d,u)=>{a.tick(h),ee(c,h,t,99,u),l(.4*et(i,i+.6,h))}}},c:[[0,1.2,3],[0,1.15,.6],[0,1.2,2.6],[0,1.15,.6]],k:1,range:3,look:yo}});Q(85,(n,e)=>({amb:"gris",fov:30,k:1,atores:[ze({x:0,z:-.3,eyes:[[0,"look"]],pose:t=>t.pose({armL:[12,8],armR:[150,120]})})],extra:t=>{let i=Xe(t,["\xBFC\xD3MO PUEDE CAERTE BIEN","ALGUIEN CON QUIEN NUNCA","HAS HABLADO?"],2.4,[0,2.3,-.3],{h:330});return{update:(s,r,o)=>ee(i,s,.1,99,o)}},c:[[0,1.6,3.6],[0,1.5,-.3],[0,1.6,3.1],[0,1.5,-.3]],range:3}));Q(86,(n,e)=>{let t=U(e,"richard"),i=U(e,"clase");return{...dn(),atores:[ao({x:-1,z:-1.4,eyes:[[0,"look"]],pose:Wh}),ao({x:1,z:-1.4,hair:"old",hairc:"#6A5A4A",eyes:[[0,"look"]]}),$e(0,{x:-1.6,z:1}),$e(2,{x:0,z:1}),$e(5,{x:1.6,z:1})],extra:s=>{Wn(s,[-1.6,0,1.6],1.5);let r=kh(["UNIVERSIDAD DE PITTSBURGH"],3.6,{bg:"#2F5A9A",fg:"#fff"});r.position.set(0,3.3,-3.4),s.add(r);let o=Ue(s,e,[[["MORELAND Y BEACH"],t,"w",[0,2.6,-1.3],1.8],[["UNA CLASE DE LA UNIVERSIDAD"],i-.5,"y",[0,2.6,-1.3],2.5,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,2.1,5.6],[0,1.6,-1.2],[0,2,5],[0,1.6,-1.2]],range:6}});Q(87,(n,e)=>{let t=U(e,"semestre");return{amb:"gris",fov:30,k:1,atores:Wf.map((i,s)=>i({x:-1.65+s*1.1,z:-.3,eyes:[[0,"look"]]})),extra:i=>{let s=["A","B","C","D"].map((o,a)=>Wt(i,[o],.35,[-1.65+a*1.1,2.05,-.3],{size:80,w:200})),r=Ue(i,e,[[["4 CHICAS PARECIDAS"],0,"y",[0,2.55,-.3],1.9],[["TODO EL SEMESTRE"],t-.3,"w",[0,2.55,-.3],1.7,1]]);return{update:(o,a,l)=>{s.forEach((c,h)=>ee(c,o,.3+h*.2,99,l)),r(o,l)}}},c:[[0,1.6,5],[0,1.5,-.3],[0,1.6,4.4],[0,1.5,-.3]],range:4}});Q(88,(n,e)=>{let t=[U(e,"nunca"),U(e,"cinco"),U(e,"diez"),U(e,"quince")];return{amb:"gris",fov:30,k:1,atores:Wf.map((i,s)=>i({x:-1.65+s*1.1,z:-.3,eyes:[[0,"look"],[t[s],"happy"]]})),extra:i=>{let s=["0","5","10","15"].map((r,o)=>Xe(i,[r+" VECES"],.8,[-1.65+o*1.1,2.05,-.3],{size:64}));return{update:(r,o,a)=>s.forEach((l,c)=>ee(l,r,t[c]-.2,99,a))}},c:[[0,1.6,5],[0,1.5,-.3],[0,1.6,4.4],[0,1.5,-.3]],range:4}});Q(89,(n,e)=>{let t=U(e,"sentaban");return{...dn(),atores:[uo(7,{x:.2,z:.3,eyes:[[0,"flat"]]}),$e(1,{x:-1.2,z:.3,eyes:[[0,"look"]]}),$e(4,{x:1.6,z:.3,eyes:[[0,"shut"]]})],extra:i=>{Wn(i,[-1.2,.2,1.6],.8);let s=Ue(i,e,[[["NO HABLABAN CON NADIE"],0,"w",[.2,2.35,.3],2],[["SOLO SE SENTABAN ALL\xCD"],t-.3,"y",[.2,2.35,.3],2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[.2,1.7,3.8],[.2,1.4,.3],[.2,1.65,3.3],[.2,1.4,.3]],range:3}});Q(90,(n,e)=>{let t=U(e,"fotos"),i=U(e,"cuantas"),s=U(e,"sin");return{amb:"gris",fov:30,k:1,atores:[],extra:r=>{let o=[0,1,2,3].map(h=>{let d=WE(["A","B","C","D"][h],["#6A3AB8","#2F5A9A","#3F8A52","#C9365A"][h],.6);return d.position.set(-1.65+h*1.1,1.85,-.6),r.add(d),d}),a=Nf(r,[["0",.3,"#8A8E98"],["5",.5,"#B89AF2"],["10",.7,"#E8667F"],["15",.9,"#E8447A"]],2.6,[0,1.35,-.4],{title:"CU\xC1NTO LES GUSTABA"}),l=Xe(r,["SIN HABER HABLADO NUNCA"],2.2,[0,2.65,-.4],Xn),c=Wt(r,["ENSE\xD1ARON SUS FOTOS"],1.9,[0,2.65,-.4]);return{update:(h,d,u)=>{o.forEach((f,g)=>{f.visible=h>t-.2+g*.15&&h<i-.2}),ee(c,h,t-.2,i-.2,u),ee(a,h,i-.1,99,u),ee(l,h,s-.2,99,u)}}},c:[[0,1.75,4.6],[0,1.65,-.5],[0,1.75,4.1],[0,1.65,-.5]],range:4}});Q(91,(n,e)=>{let t=U(e,"vemos");return{amb:"lab",fov:30,atores:[],extra:i=>{let s=Ue(i,e,[[["EL EFECTO DE LA","MERA EXPOSICI\xD3N"],0,"y",[0,1.8,-1],2.4],[["LO QUE VEMOS MUCHO,","NOS ACABA GUSTANDO"],t-.2,"p",[0,1.8,-1],2.4,1]]),r=qn(i,.5);return r.position.set(0,.9,-.9),{update:(o,a,l)=>{s(o,l),r.visible=o>t,r.scale.setScalar(oi(o))}}},c:[[0,1.6,3.8],[0,1.6,-1],[0,1.6,3.2],[0,1.6,-1]],k:1,range:3}});Q(92,(n,e)=>{let t=U(e,"nuca");return{...dn(),atores:[ze({x:-.2,z:.3,eyes:[[0,"flat"]]}),ot({x:-.2,z:-1.3,eyes:[[0,"look"],[t,"heart"]]})],extra:i=>{Wn(i,[-.2],.55),Wn(i,[-.2],-1),Bf(i);let s=po(i,[1.4,2.4,-.4],1.2,a=>`D\xCDA ${Math.min(160,Math.max(1,Math.floor(a*22)))}`,{w:600,h:200,size:100}),r=[0,1,2].map(()=>qn(i,.22)),o=Xe(i,["TU NUCA LE IBA CAYENDO BIEN"],2.4,[-.2,2.45,.4],Xn);return{update:(a,l,c)=>{s.userData.upd(a),s.visible=a<t,r.forEach((h,d)=>{let u=(a*.5+d/3)%1;h.position.set(-.2+Math.sin(d*2)*.2,1.6+u*.5,-1+u*1.1),h.visible=a>1.5,h.material.opacity=Math.sin(u*Math.PI),tn(h,c)}),ee(o,a,t-.3,99,c)}}},c:[[1.6,1.8,3.6],[-.2,1.4,-.4],[1.4,1.75,3.1],[-.2,1.4,-.4]],range:4,look:ja}});Q(93,(n,e)=>{let t=U(e,"excursion"),i=U(e,"tres"),s=(r,o)=>a=>[r,0,Rt(1,-6,a/n)+o];return{amb:"sendero",fov:34,atores:[nl({x:0,move:s(0,-1.5),pose:(r,o)=>r.walk(o)}),ze({x:-.3,move:s(-.35,0),pose:(r,o)=>r.walk(o)}),ot({x:.3,move:s(.35,.2),pose:(r,o)=>r.walk(o+.5)}),Yn({move:s(0,1.4),pose:(r,o)=>r.walk(o+.3)})],extra:r=>{let o=Ue(r,e,[[["MI\xC9RCOLES"],0,"y",[0,2.8,-2],1.3],[["EXCURSI\xD3N AL PICO"],t,"w",[0,2.8,-2],1.8],[["3 HORAS DE SUBIDA"],i,"r",[0,2.8,-2],1.8,1]]);return{update:(a,l,c)=>o(a,c)}},cam:[[0,[2.2,1.9,5],[0,1,-.5]],[99,[2.2,1.9,-1.5],[0,1,-7]]],f:[[0,6],[99,6]],k:1,range:6}});Q(94,(n,e)=>{let t=U(e,"tropieza"),i=U(e,"herida");return{amb:"sendero",fov:32,atores:[ot({x:.3,z:0,move:s=>[.3,s>t+.3?-.35:0,s<t?Rt(1.2,.2,s/t):.2],eyes:[[0,"look"],[t,"wide"],[i,"sad"]],pose:(s,r)=>{r<t?s.walk(r):(s.pose({armL:[60,60],armR:[60,60]}),ho(s,0))}}),ze({x:-.5,z:.4,eyes:[[0,"look"],[t+.2,"wide"]],pose:(s,r)=>r>t+.2?s.pose({armL:[12,8],armR:[80,0]}):s.walk(r)})],extra:s=>{let r=Wt(s,["A MITAD DE CAMINO"],1.6,[0,2.3,.2]),o=lo(s,"\xA1AY!",.6,[.7,1.6,.3]),a=Xe(s,["UNA HERIDA EN LA RODILLA"],2.1,[0,2.3,.2],Vn);return{update:(l,c,h)=>{ee(r,l,0,t-.2,h),ee(o,l,t+.1,i,h),ee(a,l,i,99,h)}}},c:[[0,1.6,3.8],[0,1,.2],[0,1.55,3.3],[0,1,.2]],range:3}});Q(95,(n,e)=>{let t=U(e,"tiritas"),i=U(e,"abuela"),s=U(e,"mira"),r=U(e,"tu",s),o=U(e,"si",s+1),a=U(e,"cae");return{amb:"sendero",fov:30,atores:[ot({x:.35,y:-.35,z:.2,eyes:[[0,"sad"],[s,"look"],[a,"happy"]],talk:[[r,o-.2],[a-.2,n]],pose:l=>l.pose({armL:[60,60],armR:[60,60]})}),ze({x:-.35,y:-.3,z:.3,eyes:[[0,"look"],[o+.4,"flat"],[a,"happy"]],talk:[[o,o+.5]],pose:l=>l.pose({armL:[12,8],armR:[70,30],lean:12})})],extra:l=>{let c=x(.18,.07,.01,b("#F2C8A0"),.3,.35,.45,!1);l.add(c);let h=Ue(l,e,[[["T\xDA LLEVAS TIRITAS"],0,"y",[0,2,.2],1.7],[["TAMBI\xC9N LAS METI\xD3 TU ABUELA"],i-.5,"w",[0,2,.2],2.4,0]]),d=[Ct(l,["\xBFTU ABUELA HA","HECHO TU MOCHILA?"],1.3,[.9,1.85,.2],56),Ct(l,["S\xCD."],.5,[-.8,1.7,.3],70),Ct(l,["ME CAE BIEN","TU ABUELA."],1.1,[.9,1.85,.2],60)];return{update:(u,f,g)=>{c.visible=u>t,u<r-.2?h(u,g):h(-1,g),ee(d[0],u,r,o-.1,g),ee(d[1],u,o,a-.2,g),ee(d[2],u,a-.1,99,g)}}},c:[[0,1.3,3.2],[0,.9,.2],[0,1.3,2.8],[0,.9,.2]],range:3}});Q(96,(n,e)=>{let t=U(e,"lado"),i=U(e,"foto",t),s=U(e,"brazo");return{amb:"cima",fov:32,atores:[ze({x:-.3,z:.2,eyes:[[0,"look"],[s,"heart"]],pose:r=>r.pose({armL:[12,8],armR:[30,0]})}),ot({x:.3,z:.2,eyes:[[0,"happy"]],pose:(r,o)=>r.pose({armL:[o>s-.2?40:12,o>s-.2?30:8],armR:[150,40]})}),$e(1,{x:-2.2,z:-.6,eyes:[[0,"happy"]],pose:r=>r.pose({armL:[12,8],armR:[150,40]})}),Yn({x:2.2,z:-.4,eyes:[[0,"happy"]]})],extra:r=>{let o=Ye("#FFFFFF",3,0);o.position.set(0,1.5,1.5),r.add(o);let a=cy(r,.9,[1.25,1.55,.5],!0),l=Ue(r,e,[[["ARRIBA DEL TODO"],0,"w",[0,2.45,.2],1.6],[["A SU LADO"],t-.2,"p",[0,2.45,.2],1.1],[["TE COGE DEL BRAZO"],s-.2,"p",[0,2.45,.2],1.8,1]]);return{update:(c,h,d)=>{o.material.opacity=c>i&&c<i+.2?1:0,a.visible=c>s+.4,a.rotation.z=-.1,l(c,d)}}},c:[[0,1.8,4.2],[0,1.4,0],[0,1.75,3.6],[0,1.4,0]],range:4}});Hi(97,9,"JUEVES","\xDALTIMA NOCHE");Q(98,(n,e)=>{let t=U(e,"luces"),i=U(e,"musica"),s=U(e,"bailan");return{...Tr,atores:[$e(0,{x:-1.4,z:-.6,eyes:[[0,"happy"]],pose:(r,o)=>Ni(r,o)}),$e(1,{x:-.4,z:-1.2,eyes:[[0,"happy"]],pose:(r,o)=>Ni(r,o+1)}),$e(2,{x:.6,z:-.5,eyes:[[0,"happy"]],pose:(r,o)=>Ni(r,o+2)}),Yn({x:1.6,z:-1.1,eyes:[[0,"happy"]],pose:(r,o)=>Ni(r,o+.5,1.4)}),$e(6,{x:0,z:.3,eyes:[[0,"happy"]],pose:(r,o)=>Ni(r,o+1.5)})],extra:r=>{let o=br(r),a=Ka(r,8),l=[0,2.6,-.4],c=Ue(r,e,[[["FIESTA EN EL COMEDOR"],0,"y",l,2],[["LUCES DE COLORES"],t,"p",l,1.7],[["M\xDASICA ALTA"],i,"w",l,1.3],[["TODOS BAILAN"],s,"y",l,1.4,1]]);return{update:(h,d,u)=>{o(h),a(h,new P(-1.5,1.6,-1),u),c(h,u)}}},c:[[0,2,5.4],[0,1.3,-.6],[0,1.95,4.8],[0,1.3,-.6]],range:5,look:wr}});Q(99,(n,e)=>{let t=U(e,"nunca");return{...Tr,atores:[ze({x:-3,z:-1.2,eyes:[[0,"flat"]],pose:i=>i.pose({armL:[60,90],armR:[60,90]})}),$e(0,{x:-1,z:-.6,eyes:[[0,"happy"]],pose:(i,s)=>Ni(i,s)}),$e(2,{x:0,z:-.9,eyes:[[0,"happy"]],pose:(i,s)=>Ni(i,s+2)})],extra:i=>{let s=br(i),r=Ue(i,e,[[["T\xDA NO BAILAS"],0,"w",[-3,2.3,-1.1],1.3],[["NUNCA"],t,"r",[-3,2.3,-1.1],.8,1]]);return{update:(o,a,l)=>{s(o),r(o,l)}}},c:[[-2,1.7,2.6],[-2.8,1.4,-1.2],[-2.2,1.65,2.2],[-2.8,1.4,-1.2]],range:3,look:wr}});Q(100,(n,e)=>{let t=U(e,"auriculares"),i=U(e,"nadie");return{...Tr,atores:[ze({x:-3,z:-1.2,eyes:[[0,"flat"],[t,"wide"]],pose:(s,r)=>s.pose({armL:[60,90],armR:[60,90],head:r>t?Math.sin(r*6)*5:0})})],extra:s=>{let r=br(s),o=Ka(s,8),a=Ue(s,e,[[["PONEN UNA CANCI\xD3N"],0,"w",[-2.6,2.3,-1.1],1.7],[["LA DE LOS AURICULARES"],t-.2,"y",[-2.6,2.3,-1.1],2],[["LA QUE NADIE CONOCE"],i-.2,"p",[-2.6,2.3,-1.1],1.9,1]]);return{update:(l,c,h)=>{r(l),o(l,new P(-2.6,1.7,-1),h),a(l,h)}}},c:[[-2.4,1.7,2.6],[-2.8,1.45,-1.2],[-2.5,1.65,2.2],[-2.8,1.45,-1.2]],range:3,look:wr}});Q(101,(n,e)=>{let t=U(e,"es",1.5),i=U(e,"saca");return{...Tr,atores:[ze({x:-2.6,z:-1,eyes:[[0,"look"],[i,"wide"]],pose:(s,r)=>s.pose({armL:[r>i?12:60,r>i?8:90],armR:[r>i?70:60,r>i?0:90]})}),ot({x:-1.8,z:-1,move:s=>[Rt(2.6,-1.85,et(0,t-.2,s)),0,-1],eyes:[[0,"happy"]],talk:[[t,i-.2]],pose:(s,r)=>r<t-.2?s.walk(r*2):s.pose({armL:[r>i?70:12,0],armR:[12,8]})})],extra:s=>{let r=br(s),o=Ct(s,["ES TU CANCI\xD3N","FAVORITA, \xBFNO?"],1.3,[-1.4,2.2,-1],58),a=Xe(s,["TE SACA A BAILAR"],1.7,[-2.2,2.5,-1],Xn);return{update:(l,c,h)=>{r(l),ee(o,l,t,i-.2,h),ee(a,l,i,99,h)}}},cam:[[0,[0,1.9,4.4],[0,1.3,-1]],[99,[-2.2,1.7,2.8],[-2.2,1.4,-1]]],f:[[0,5.6],[99,3.8]],k:1,range:4,look:wr}});Q(102,(n,e)=>{let t=U(e,"tambien"),i=U(e,"importa");return{...Tr,atores:[ze({x:-.35,z:-.6,eyes:[[0,"wide"],[i,"happy"]],pose:(s,r)=>s.pose({armL:[150+Math.sin(r*11)*30,20],armR:[20+Math.sin(r*7)*40,60],lean:Math.sin(r*5)*14,bob:Math.abs(Math.sin(r*9))*.05,legL:[Math.sin(r*9)*25,0],legR:[0,0]})}),ot({x:.35,z:-.6,eyes:[[0,"happy"]],pose:(s,r)=>s.pose({armL:[40+Math.sin(r*6)*50,80],armR:[150,100],lean:-Math.sin(r*4)*16,bob:Math.abs(Math.sin(r*8))*.05,legL:[0,0],legR:[Math.sin(r*8)*25,0]})})],extra:s=>{let r=br(s),o=os(s,12,"#FFB0D0"),a=[0,2.35,-.6],l=Ue(s,e,[[["BAILAS FATAL"],0,"r",a,1.3],[["ELLA TAMBI\xC9N"],t,"r",a,1.3],[["Y NO IMPORTA NADA"],i-.4,"p",a,1.8,1]]);return{update:(c,h,d)=>{r(c),o(c,[0,1.6,-.5,1],c>i?1:0),l(c,d)}}},c:[[0,1.7,3.6],[0,1.35,-.6],[0,1.65,3.1],[0,1.35,-.6]],range:3,look:wr}});Q(103,(n,e)=>{let t=U(e,"sonrie");return{...Tr,atores:[as({x:2.6,z:-2.6,eyes:[[0,"look"],[t,"happy"]]}),ze({x:-.35,z:-.6,eyes:[[0,"happy"]],pose:(i,s)=>Ni(i,s)}),ot({x:.35,z:-.6,eyes:[[0,"happy"]],pose:(i,s)=>Ni(i,s+1)})],extra:i=>{let s=br(i);i.add(x(1.2,2.4,.1,b("#3A2418"),2.6,1.2,-3.95));let r=new Je("#FFD8A0",4,4,1.6);r.position.set(2.6,2.4,-2.2),i.add(r);let o=Wt(i,["LA TUTORA"],1,[2.6,2.35,-2.5]),a=Xe(i,["Y SONR\xCDE"],1,[2.6,2.35,-2.5],Xn);return{update:(l,c,h)=>{s(l),ee(o,l,.1,t-.2,h),ee(a,l,t,99,h)}}},c:[[-.4,1.8,3.8],[1.2,1.4,-1.6],[-.2,1.75,3.3],[1.4,1.4,-1.8]],range:5,look:wr}});Hi(104,9,"VIERNES","VIAJE DE VUELTA");Q(105,(n,e)=>{let t=U(e,"guarda");return{amb:"gris",fov:32,k:1,atores:[Qt({eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[s>t?40+Math.abs(Math.sin(s*8))*20:12,0],armR:[12,8]})}),ze({x:-2.5,z:-.3,move:i=>[Rt(-3.2,-1.4,et(0,2.5,i)),0,-.3],eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>s<2.5?i.walk(s*2):i.pose()})],extra:i=>{Dt(i);let s=Ue(i,e,[[["ELLA LLEGA LA PRIMERA"],0,"y",[0,2.08,-1],2],[["TE GUARDA EL SITIO"],t-.2,"p",[0,2.08,-1],1.8,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-.6,1.6,2.8],[-.6,1.3,-1],[-.6,1.55,2.5],[-.6,1.3,-1]],range:3}});Q(106,(n,e)=>{let t=U(e,"auricular"),i=U(e,"galleta"),s=U(e,"acaso"),r=U(e,"mirando");return{amb:"gris",fov:32,k:1,atores:[Gt({eyes:[[0,"happy"]],pose:(o,a)=>o.pose({armL:[12,8],armR:[a>i-.2&&a<r?60:12,8],lean:Math.sin(a*2.4)*6})}),Qt({eyes:[[0,"happy"],[r,"look"]],pose:(o,a)=>o.pose({head:a>r?-20:0,lean:Math.sin(a*2.4)*6})})],extra:(o,a,l)=>{let c=Dt(o),h=Sr(o),d=Jh(o,.8),u=Ue(o,e,[[["UNA HORA DE CURVAS"],0,"w",[0,2.08,-1],1.8],[["TE OFRECE UN AURICULAR"],t-.2,"y",[0,2.08,-1],2.1],[["UNA GALLETA SALADA"],i-.2,"y",[0,2.08,-1],1.9],[['"POR SI ACASO"'],s-.3,"p",[0,2.08,-1],1.5],[["Y ENTONCES\u2026"],r,"w",[0,2.08,-1],1.2,1]]);return{update:(f,g,E)=>{c(f,1.5),h(l[0],l[1],f>t);let m=On(l[0]);d.position.set(m.x+.1,m.y+.1,m.z+.15),d.visible=f>i-.2&&f<r,tn(d,E),u(f,E)}}},c:ai,range:3}});Q(107,(n,e)=>{let t=U(e,"parejas");return{amb:"gris",fov:30,k:1,atores:[Gt({eyes:[[0,"look"],[t+.8,"wide"]]}),Qt({eyes:[[0,"look"]],talk:[[0,n]]})],extra:(i,s,r)=>{let o=Dt(i),a=Sr(i),l=Ct(i,["TENGO QUE CONFESARTE","UNA COSA\u2026"],1.5,[.9,1.95,-1],56),c=Ct(i,["LAS PAREJAS NO","LAS HIZO LA TUTORA."],1.5,[.9,1.95,-1],56);return{update:(h,d,u)=>{o(h),a(r[0],r[1]),ee(l,h,.1,t-.2,u),ee(c,h,t-.1,99,u)}}},c:ls,range:3}});Q(108,(n,e)=>({amb:"gris",fov:28,k:1,atores:[Gt({x:-.2,eyes:[[0,"wide"]]})],extra:t=>{Dt(t);let i=Wt(t,["\u2026"],.6,[-.2,1.95,-1],{size:110,w:300});return{update:(s,r,o)=>ee(i,s,.1,99,o)}},c:[[-.2,1.5,1.6],[-.2,1.45,-1.2],[-.2,1.5,1.3],[-.2,1.45,-1.2]],range:2}));Q(109,(n,e)=>{let t=U(e,"pedi"),i=U(e,"unica"),s=U(e,"queria");return{...dn(),atores:[as({x:.7,z:-1.3,eyes:[[0,"look"],[s+1,"happy"]],pose:r=>r.pose({armL:[12,8],armR:[60,40]})}),ot({x:-.3,z:-1,talk:[[t-.3,n]],eyes:[[0,"look"]],pose:Qa})],extra:r=>{gy(r,.7,-1.9);let o=Ue(r,e,[[["LA SEMANA PASADA"],0,"w",[.2,2.55,-1.1],1.7]]),a=[Ct(r,["P\xD3NGAME CON \xC9L,","PORFA."],1.2,[-.9,2.2,-1],58),Ct(r,["ES LA \xDANICA PERSONA","CON LA QUE NUNCA","HE HABLADO."],1.4,[-.9,2.25,-1],52),Ct(r,["Y QUIERO SABER","C\xD3MO ES."],1.2,[-.9,2.2,-1],58)];return{update:(l,c,h)=>{o(l,h),ee(a[0],l,t-.2,i-.4,h),ee(a[1],l,i-.3,s-.2,h),ee(a[2],l,s-.1,99,h)}}},c:[[0,1.8,3.8],[.1,1.5,-1.1],[0,1.75,3.3],[.1,1.5,-1.1]],range:4,look:ja}});Q(110,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Gt({eyes:[[0,"look"]],talk:[[.4,1.6]]}),Qt({eyes:[[0,"look"]]})],extra:(t,i,s)=>{Dt(t);let r=Sr(t),o=Ct(t,["\xBFY C\xD3MO SOY?"],1,[-.8,1.95,-1],66);return{update:(a,l,c)=>{r(s[0],s[1]),ee(o,a,.4,99,c)}}},c:ls,range:3}));Q(111,(n,e)=>{let t=U(e,"mientes"),i=U(e,"abuela"),s=U(e,"rie"),r=U(e,"apoya"),o=U(e,"esta",r+1);return{amb:"gris",fov:30,k:1,atores:[Gt({x:-.38,eyes:[[0,"look"],[t+.5,"flat"],[i+.5,"happy"],[r+.3,"heart"]]}),Qt({x:.38,z:hn-.08,eyes:[[0,"look"],[t,"happy"]],talk:[[t,s]],pose:(a,l)=>{let c=et(r,r+.6,l);a.pose({lean:10*c,head:(l<t?15:0)+10*c})}})],extra:(a,l,c)=>{let h=Dt(a),d=Sr(a),u=fo(a,["mmm\u2026"],.8,[1.1,1.95,-1]),f=[Ct(a,["MIENTES FATAL","SOBRE LA M\xDASICA."],1.3,[.95,1.95,-1],56),Ct(a,["Y TU ABUELA","ES UNA CRACK."],1.2,[.95,1.95,-1],58)],g=lo(a,"JA, JA",.6,[1,1.8,-1]),E=Xe(a,["ESTA VEZ NO EST\xC1 DORMIDA"],2.1,[0,2.08,-1],Xn),m=qn(a,.28);return{update:(p,A,v)=>{h(p),d(c[0],c[1]),ee(u,p,.1,t-.2,v),ee(f[0],p,t,i-.5,v),ee(f[1],p,i-.4,s-.1,v),ee(g,p,s,r,v),ee(E,p,o-.3,99,v),m.position.set(.05,1.85,-.9),m.visible=p>r+.5,m.scale.setScalar(oi(p,150)),tn(m,v)}}},c:ai,range:3}});Hi(112,5,"17:00","VUELTA AL INSTITUTO");Q(113,(n,e)=>{let t=U(e,"padres"),i=U(e,"amigo"),s=U(e,"foto"),r=U(e,"esto");return{amb:"salida",ambo:{dusk:!0},fov:32,atores:[Yn({x:-.2,z:1.2,eyes:[[0,"smug"]],talk:[[r,n]],pose:(o,a)=>o.pose({armL:[12,8],armR:[a>s-.5?90:12,a>s-.5?40:8]})}),ze({x:-1,z:1.2,eyes:[[0,"look"],[s,"wide"],[r+.4,"flat"]]}),zf({x:2.6,z:.6,eyes:[[0,"happy"]],pose:Ja}),uo(2,{x:3.3,z:.8,eyes:[[0,"happy"]]}),ao({x:1.8,z:.9,glasses:!1,eyes:[[0,"happy"]]})],extra:(o,a,l)=>{let c=new le;c.add(x(.36,.66,.04,b("#1A1A24"),0,0,0,!1));let h=Re(Gf(!1),.3,.36);h.position.z=.025,c.add(h),o.add(c);let d=Ue(o,e,[[["LOS PADRES ESPERAN"],t,"w",[1.5,2.6,.5],1.9],[["TU MEJOR AMIGO"],i,"y",[-.4,2.45,1.2],1.4],[["LA FOTO DEL LUNES"],s,"p",[-.4,2.45,1.2],1.7]]),u=Ct(o,["ESTO VALE ORO."],1.1,[.4,2.2,1.2],64);return{update:(f,g,E)=>{let m=On(l[0]);c.position.set(m.x-.05,m.y+.25,m.z+.12),c.visible=f>s-.6,tn(c,E),d(f,E),ee(u,f,r,99,E)}}},cam:[[0,[0,2.4,8.5],[.8,1.6,-2]],[i-.2,[0,2.4,8.5],[.8,1.6,-2]],[i+.8,[-.4,1.65,4],[-.5,1.4,1.2]],[99,[-.4,1.6,3.6],[-.5,1.4,1.2]]],f:[[0,10.6],[i-.2,10.6],[i+.8,2.8],[99,2.4]],k:1,range:5}});Q(114,(n,e)=>{let t=U(e,"oye"),i=U(e,"ya");return{amb:"salida",ambo:{dusk:!0},fov:30,atores:[ot({x:.9,z:1.2,eyes:[[0,"look"],[t,"happy"]],talk:[[t,n]],pose:(s,r)=>s.pose({head:Rt(0,-10,et(0,.8,r))})}),ze({x:-.6,z:1.3,eyes:[[0,"look"],[i,"heart"]]})],extra:s=>{let r=[Ct(s,["OYE. EL A\xD1O QUE VIENE\u2026","\xBFPEDIMOS SER PAREJA","OTRA VEZ?"],1.6,[1.2,2.2,1.2],52),Ct(s,["YA NO HAR\xC1 FALTA","QUE ME LO PONGAN."],1.4,[1.2,2.2,1.2],56)];return{update:(o,a,l)=>{ee(r[0],o,t,i-.2,l),ee(r[1],o,i-.1,99,l)}}},c:[[.2,1.7,4],[.2,1.45,1.2],[.2,1.65,3.5],[.2,1.45,1.2]],range:3}});Q(115,(n,e)=>{let t=U(e,"galletas"),i=U(e,"sonrisa");return{amb:"salida",ambo:{dusk:!0},fov:30,atores:[ze({x:0,z:1.3,eyes:[[0,"look"],[i,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[60,40]})})],extra:(s,r,o)=>{mo(s,"#E8667F").position.set(-.45,0,1.4);let l=Jh(s,.7),c=os(s,12,"#FFE27A"),h=Ue(s,e,[[["LA MOCHILA"],"mochila","w",[0,2.2,1.3],1.1],[["LAS GALLETAS QUE SOBRARON"],t,"y",[0,2.2,1.3],2.3],[["UNA SONRISA QUE NO SE QUITA"],i,"p",[0,2.2,1.3],2.5,1]]);return{update:(d,u,f)=>{let g=On(o[0]);l.position.set(g.x+.05,g.y+.1,g.z+.12),tn(l,f),c(d,[0,1.6,1.4,.7],d>i?1:0),h(d,f)}}},c:[[0,1.6,3.9],[0,1.4,1.3],[0,1.55,3.4],[0,1.4,1.3]],range:3,look:{bloom:.45}}});Q(116,(n,e)=>{let t=U(e,"lista"),i=U(e,"fue",t+.3),s=U(e,"cinco"),r=U(e,"puentes"),o=U(e,"barro"),a=U(e,"canciones");return{amb:"gris",fov:30,k:1,atores:[ze({x:-.4,z:-.3,eyes:[[0,"look"],[i,"happy"]]}),ot({x:.4,z:-.3,eyes:[[0,"happy"]],pose:(l,c)=>l.pose({lean:c>s?6:0})})],extra:l=>{let c=[0,2.45,-.3],h=Ue(l,e,[[["NO FUE LA SUERTE"],0,"r",c,1.6],[["NO FUE LA LISTA"],t-.4,"r",c,1.5],[["FUE ALGUIEN QUE SE ATREVI\xD3"],i,"p",c,2.4],[["5 D\xCDAS"],s,"y",c,.9],[["PUENTES"],r,"w",[-1.4,1.3,-.2],1,1],[["BARRO"],o,"w",[0,.55,0],.8,1],[["CANCIONES QUE NADIE CONOCE"],a,"p",[1.4,1.3,-.2],1.5,1]]),d=qn(l,.32);return d.position.set(0,1.9,-.2),{update:(u,f,g)=>{h(u,g),d.visible=u>i,d.scale.setScalar(oi(u,130)),tn(d,g)}}},c:[[0,1.5,4.4],[0,1.4,-.3],[0,1.5,3.9],[0,1.4,-.3]],range:3,look:{bloom:.45}}});Q(117,(n,e)=>{let t=U(e,"pedido"),i=U(e,"comentarios");return{amb:"salida",ambo:{dusk:!0},fov:32,atores:[ze({x:-.4,z:1.2,eyes:[[0,"happy"]],pose:(s,r)=>r>i-.5?Ja(s,r):s.pose()}),ot({x:.4,z:1.2,eyes:[[0,"happy"]],pose:(s,r)=>r>i-.5?Ja(s,r+1):s.pose()})],extra:s=>{let r=[0,2.4,1.2],o=Ue(s,e,[[["\xBFY T\xDA QU\xC9 HABR\xCDAS HECHO?"],0,"y",r,2.3],[["\xBFLE HABR\xCDAS PEDIDO A LA","TUTORA IR CON TU CRUSH?"],t-.6,"p",r,2.5],[["TE LEO EN LOS COMENTARIOS"],i-.4,"w",r,2.4,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.7,4.4],[0,1.45,1.2],[0,1.65,3.9],[0,1.45,1.2]],range:3,look:{bloom:.45}}});function Ey(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new La(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=Mr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Mr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(Ey(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Mr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
