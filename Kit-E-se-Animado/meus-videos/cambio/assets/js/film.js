var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var fh="170";var Jf=0,ld=1,Qf=2;var _u=1,ph=2,Ri=3,$i=0,nn=1,At=2,di=0,Zi=1,bn=2,cd=3,hd=4,Kf=5,ys=100,jf=101,e0=102,t0=103,n0=104,i0=200,s0=201,r0=202,o0=203,Gl=204,Vl=205,a0=206,l0=207,c0=208,h0=209,d0=210,u0=211,f0=212,p0=213,m0=214,Wl=0,Xl=1,ql=2,cr=3,Yl=4,Zl=5,$l=6,Jl=7,Au=0,g0=1,E0=2,ui=0,y0=1,v0=2,_0=3,A0=4,M0=5,S0=6,T0=7;var Mu=300,hr=301,dr=302,Ql=303,Kl=304,Ca=306,cn=1e3,_s=1001,jl=1002,Hn=1003,b0=1004;var _o=1005;var ci=1006,ol=1007;var As=1008;var Ii=1009,Su=1010,Tu=1011,Yr=1012,mh=1013,Li=1014,hi=1015,Cn=1016,gh=1017,Eh=1018,ur=1020,bu=35902,wu=1021,Ru=1022,jn=1023,xu=1024,Cu=1025,or=1026,fr=1027,yh=1028,vh=1029,Fu=1030,_h=1031;var Ah=1033,Qo=33776,Ko=33777,jo=33778,ea=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37808,lc=37809,cc=37810,hc=37811,dc=37812,uc=37813,fc=37814,pc=37815,mc=37816,gc=37817,Ec=37818,yc=37819,vc=37820,_c=37821,ta=36492,Ac=36494,Mc=36495,Pu=36283,Sc=36284,Tc=36285,bc=36286;var na=2300,wc=2301,al=2302,dd=2400,ud=2401,fd=2402;var w0=3200,Ar=3201;var Iu=0,R0=1,qi="",Gt="srgb",ts="srgb-linear",Fa="linear",wt="srgb";var Os=7680;var pd=519,x0=512,C0=513,F0=514,Lu=515,P0=516,I0=517,L0=518,D0=519,Rc=35044;var md="300 es",Ci=2e3,ia=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ll=Math.PI/180,sa=180/Math.PI;function Fi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function U0(n,e){return(n%e+e)%e}function cl(n,e,t){return(1-t)*n+t*e}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ie=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],E=s[0],m=s[3],p=s[6],_=s[1],v=s[4],y=s[7],L=s[2],C=s[5],b=s[8];return r[0]=o*E+a*_+l*L,r[3]=o*m+a*v+l*C,r[6]=o*p+a*y+l*b,r[1]=c*E+h*_+d*L,r[4]=c*m+h*v+d*C,r[7]=c*p+h*y+d*b,r[2]=u*E+f*_+g*L,r[5]=u*m+f*v+g*C,r[8]=u*p+f*y+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=f*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hl=new Je;function Du(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function H0(){let n=ra("canvas");return n.style.display="block",n}var gd={};function kr(n){n in gd||(gd[n]=!0,console.warn(n))}function B0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function N0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ut={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===wt&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===wt&&(n.r=ar(n.r),n.g=ar(n.g),n.b=ar(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qi?Fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ed=[.64,.33,.3,.6,.15,.06],yd=[.2126,.7152,.0722],vd=[.3127,.329],_d=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ut.define({[ts]:{primaries:Ed,whitePoint:vd,transfer:Fa,toXYZ:_d,fromXYZ:Ad,luminanceCoefficients:yd,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:Ed,whitePoint:vd,transfer:wt,toXYZ:_d,fromXYZ:Ad,luminanceCoefficients:yd,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}});var zs,xc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=ra("canvas")),zs.width=e.width,zs.height=e.height;let i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ra("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},z0=0,oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dl(s[o].image)):r.push(dl(s[o]))}else r=dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var k0=0,wn=class n extends Ji{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=_s,s=_s,r=ci,o=As,a=jn,l=Ii,c=n.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Fi(),this.name="",this.source=new oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case _s:e.x=e.x<0?0:1;break;case jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case _s:e.y=e.y<0?0:1;break;case jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Mu;wn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],E=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,L=(p+1)/2,C=(h+u)/4,b=(d+E)/4,F=(g+m)/4;return v>y&&v>L?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=b/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=b/r,s=F/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-E)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cc=class extends Ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new wn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},aa=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fc=class extends wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*E,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let L=Math.sqrt(v),C=Math.atan2(L,p*_);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}let y=a*_;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new I,Md=new Qi,Di=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Mo.subVectors(this.max,Pr),ks.subVectors(e.a,Pr),Gs.subVectors(e.b,Pr),Vs.subVectors(e.c,Pr),zi.subVectors(Gs,ks),ki.subVectors(Vs,Gs),ds.subVectors(ks,Vs);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-ds.z,ds.y,zi.z,0,-zi.x,ki.z,0,-ki.x,ds.z,0,-ds.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-ds.y,ds.x,0];return!fl(t,ks,Gs,Vs,Mo)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,ks,Gs,Vs,Mo))?!1:(So.crossVectors(zi,ki),t=[So.x,So.y,So.z],fl(t,ks,Gs,Vs,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new I,new I,new I,new I,new I,new I,new I,new I],Jn=new I,Ao=new Di,ks=new I,Gs=new I,Vs=new I,zi=new I,ki=new I,ds=new I,Pr=new I,Mo=new I,So=new I,us=new I;function fl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){us.fromArray(n,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),h=i.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var G0=new Di,Ir=new I,pl=new I,Ki=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):G0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(pl)),this.expandByPoint(Ir.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new I,ml=new I,To=new I,Gi=new I,gl=new I,bo=new I,El=new I,la=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ml.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(ml);let r=e.distanceTo(t)*.5,o=-this.direction.dot(To),a=Gi.dot(this.direction),l=-Gi.dot(To),c=Gi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ml).addScaledVector(To,u),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){gl.subVectors(t,e),bo.subVectors(i,e),El.crossVectors(gl,bo);let o=this.direction.dot(El),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);let l=a*this.direction.dot(bo.crossVectors(Gi,bo));if(l<0)return null;let c=a*this.direction.dot(gl.cross(Gi));if(c<0||l+c>o)return null;let h=-a*Gi.dot(El);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,E,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=E,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V0,e,W0)}lookAt(e,t,i){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Vi.crossVectors(i,Dn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Vi.crossVectors(i,Dn)),Vi.normalize(),wo.crossVectors(Dn,Vi),s[0]=Vi.x,s[4]=wo.x,s[8]=Dn.x,s[1]=Vi.y,s[5]=wo.y,s[9]=Dn.y,s[2]=Vi.z,s[6]=wo.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],E=i[6],m=i[10],p=i[14],_=i[3],v=i[7],y=i[11],L=i[15],C=s[0],b=s[4],F=s[8],S=s[12],A=s[1],P=s[5],N=s[9],O=s[13],W=s[2],ee=s[6],Z=s[10],ae=s[14],Y=s[3],fe=s[7],Ae=s[11],Ne=s[15];return r[0]=o*C+a*A+l*W+c*Y,r[4]=o*b+a*P+l*ee+c*fe,r[8]=o*F+a*N+l*Z+c*Ae,r[12]=o*S+a*O+l*ae+c*Ne,r[1]=h*C+d*A+u*W+f*Y,r[5]=h*b+d*P+u*ee+f*fe,r[9]=h*F+d*N+u*Z+f*Ae,r[13]=h*S+d*O+u*ae+f*Ne,r[2]=g*C+E*A+m*W+p*Y,r[6]=g*b+E*P+m*ee+p*fe,r[10]=g*F+E*N+m*Z+p*Ae,r[14]=g*S+E*O+m*ae+p*Ne,r[3]=_*C+v*A+y*W+L*Y,r[7]=_*b+v*P+y*ee+L*fe,r[11]=_*F+v*N+y*Z+L*Ae,r[15]=_*S+v*O+y*ae+L*Ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],E=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*f-i*l*f)+E*(+t*l*f-t*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],E=e[13],m=e[14],p=e[15],_=d*m*c-E*u*c+E*l*f-a*m*f-d*l*p+a*u*p,v=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*E*c-g*d*c+g*a*f-o*E*f-h*a*p+o*d*p,L=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=t*_+i*v+s*y+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return e[0]=_*b,e[1]=(E*u*r-d*m*r-E*s*f+i*m*f+d*s*p-i*u*p)*b,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*p+i*l*p)*b,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*f-i*l*f)*b,e[4]=v*b,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*b,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*f+t*l*f)*b,e[8]=y*b,e[9]=(g*d*r-h*E*r-g*i*f+t*E*f+h*i*p-t*d*p)*b,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*p+t*a*p)*b,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*f-t*a*f)*b,e[12]=L*b,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*b,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*b,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,E=o*h,m=o*d,p=a*d,_=l*c,v=l*h,y=l*d,L=i.x,C=i.y,b=i.z;return s[0]=(1-(E+p))*L,s[1]=(f+y)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(u+p))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(g+v)*b,s[9]=(m-_)*b,s[10]=(1-(u+E))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ws.set(s[0],s[1],s[2]).length(),o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,h=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ci){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(a===Ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ia)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ci){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,f=(i+s)*h,g,E;if(a===Ci)g=(o+r)*d,E=-2*d;else if(a===ia)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ws=new I,Qn=new Ct,V0=new I(0,0,0),W0=new I(1,1,1),Vi=new I,wo=new I,Dn=new I,Sd=new Ct,Td=new Qi,fi=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},X0=0,bd=new I,Xs=new Qi,Ti=new Ct,Ro=new I,Lr=new I,q0=new I,Y0=new Qi,wd=new I(1,0,0),Rd=new I(0,1,0),xd=new I(0,0,1),Cd={type:"added"},Z0={type:"removed"},qs={type:"childadded",child:null},yl={type:"childremoved",child:null},zt=class n extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new fi,i=new Qi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return bd.copy(e).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ro.copy(e):Ro.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Lr,Ro,this.up):Ti.lookAt(Ro,Lr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Z0),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};zt.DEFAULT_UP=new I(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new I,bi=new I,vl=new I,wi=new I,Ys=new I,Zs=new I,Fd=new I,_l=new I,Al=new I,Ml=new I,Sl=new xt,Tl=new xt,bl=new xt,Yi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),bi.subVectors(i,t),vl.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(bi),l=Kn.dot(vl),c=bi.dot(bi),h=bi.dot(vl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sl.setScalar(0),Tl.setScalar(0),bl.setScalar(0),Sl.fromBufferAttribute(e,t),Tl.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(Tl,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),bi.subVectors(e,t),Kn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Kn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,i),Zs.subVectors(r,i),_l.subVectors(e,i);let l=Ys.dot(_l),c=Zs.dot(_l);if(l<=0&&c<=0)return t.copy(i);Al.subVectors(e,s);let h=Ys.dot(Al),d=Zs.dot(Al);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ys,o);Ml.subVectors(e,r);let f=Ys.dot(Ml),g=Zs.dot(Ml);if(g>=0&&f<=g)return t.copy(r);let E=f*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Zs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Fd.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Fd,a);let p=1/(m+E+u);return o=E*p,a=u*p,t.copy(i).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var he=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=U0(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=wl(o,r,e+1/3),this.g=wl(o,r,e),this.b=wl(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Uu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ut.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Gt){ut.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(xo);let i=cl(Wi.h,xo.h,t),s=cl(Wi.s,xo.s,t),r=cl(Wi.l,xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new he;he.NAMES=Uu;var $0=0,Ui=class extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Fi(),this.name="",this.blending=Zi,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Vl,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},tt=class extends Ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new I,Co=new ie,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var ha=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var da=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ft=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},J0=0,kn=new Ct,Rl=new zt,$s=new I,Un=new Di,Dr=new Di,tn=new I,qt=class n extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Du(e)?da:ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Un.min,Dr.min),Un.expandByPoint(tn),tn.addVectors(Un.max,Dr.max),Un.expandByPoint(tn)):(Un.expandByPoint(Dr.min),Un.expandByPoint(Dr.max))}Un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),tn.add($s)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new I,l[F]=new I;let c=new I,h=new I,d=new I,u=new ie,f=new ie,g=new ie,E=new I,m=new I;function p(F,S,A){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[F].add(E),a[S].add(E),a[A].add(E),l[F].add(m),l[S].add(m),l[A].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,S=_.length;F<S;++F){let A=_[F],P=A.start,N=A.count;for(let O=P,W=P+N;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new I,y=new I,L=new I,C=new I;function b(F){L.fromBufferAttribute(s,F),C.copy(L);let S=a[F];v.copy(S),v.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(C,S);let P=y.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,P)}for(let F=0,S=_.length;F<S;++F){let A=_[F],P=A.start,N=A.count;for(let O=P,W=P+N;O<W;O+=3)b(e.getX(O+0)),b(e.getX(O+1)),b(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?f=l[E]*a.data.stride+a.offset:f=l[E]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Kt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pd=new Ct,fs=new la,Fo=new Ki,Id=new I,Po=new I,Io=new I,Lo=new I,xl=new I,Do=new I,Ld=new I,Uo=new I,z=class extends zt{constructor(e=new qt,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xl.fromBufferAttribute(d,e),o?Do.addScaledVector(xl,h):Do.addScaledVector(xl.sub(t),h))}t.add(Do)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Fo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Fo,Id)===null||fs.origin.distanceToSquared(Id)>(e.far-e.near)**2))&&(Pd.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Pd),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,L=v;y<L;y+=3){let C=a.getX(y),b=a.getX(y+1),F=a.getX(y+2);s=Ho(this,p,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(a.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Ho(this,o,e,i,c,h,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,L=v;y<L;y+=3){let C=y,b=y+1,F=y+2;s=Ho(this,p,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),E=Math.min(l.count,f.start+f.count);for(let m=g,p=E;m<p;m+=3){let _=m,v=m+1,y=m+2;s=Ho(this,o,e,i,c,h,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Q0(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$i,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:n}}function Ho(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Po),n.getVertexPosition(l,Io),n.getVertexPosition(c,Lo);let h=Q0(n,e,t,i,Po,Io,Lo,Ld);if(h){let d=new I;Yi.getBarycoord(Ld,Po,Io,Lo,d),s&&(h.uv=Yi.getInterpolatedAttribute(s,a,l,c,d,new ie)),r&&(h.uv1=Yi.getInterpolatedAttribute(r,a,l,c,d,new ie)),o&&(h.normal=Yi.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Yi.getNormal(Po,Io,Lo,u.normal),h.face=u,h.barycoord=d}return h}var Rn=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(d,2));function g(E,m,p,_,v,y,L,C,b,F,S){let A=y/b,P=L/F,N=y/2,O=L/2,W=C/2,ee=b+1,Z=F+1,ae=0,Y=0,fe=new I;for(let Ae=0;Ae<Z;Ae++){let Ne=Ae*P-O;for(let it=0;it<ee;it++){let Pt=it*A-N;fe[E]=Pt*_,fe[m]=Ne*v,fe[p]=W,c.push(fe.x,fe.y,fe.z),fe[E]=0,fe[m]=0,fe[p]=C>0?1:-1,h.push(fe.x,fe.y,fe.z),d.push(it/b),d.push(1-Ae/F),ae+=1}}for(let Ae=0;Ae<F;Ae++)for(let Ne=0;Ne<b;Ne++){let it=u+Ne+ee*Ae,Pt=u+Ne+ee*(Ae+1),Q=u+(Ne+1)+ee*(Ae+1),le=u+(Ne+1)+ee*Ae;l.push(it,Pt,le),l.push(Pt,Q,le),Y+=6}a.addGroup(f,Y,S),f+=Y,u+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=pr(n[t]);for(let s in i)e[s]=i[s]}return e}function K0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Mr={clone:pr,merge:Mn},j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ua=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new I,Dd=new ie,Ud=new ie,ln=class extends ua{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Ud),t.subVectors(Ud,Dd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ll*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,Qs=1,Pc=class extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Js,Qs,e,t);s.layers=this.layers,this.add(s);let r=new ln(Js,Qs,e,t);r.layers=this.layers,this.add(r);let o=new ln(Js,Qs,e,t);o.layers=this.layers,this.add(o);let a=new ln(Js,Qs,e,t);a.layers=this.layers,this.add(a);let l=new ln(Js,Qs,e,t);l.layers=this.layers,this.add(l);let c=new ln(Js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fa=class extends wn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ic=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:di});r.uniforms.tEquirect.value=t;let o=new z(s,r),a=t.minFilter;return t.minFilter===As&&(t.minFilter=ci),new Pc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Cl=new I,tp=new I,np=new Je,xi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Cl.subVectors(i,t).cross(tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Cl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||np.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ps=new Ki,Bo=new I,Zr=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],E=s[10],m=s[11],p=s[12],_=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-f,y-p).normalize(),i[1].setComponents(l+r,u+c,m+f,y+p).normalize(),i[2].setComponents(l+o,u+h,m+g,y+_).normalize(),i[3].setComponents(l-o,u-h,m-g,y-_).normalize(),i[4].setComponents(l-a,u-d,m-E,y-v).normalize(),t===Ci)i[5].setComponents(l+a,u+d,m+E,y+v).normalize();else if(t===ia)i[5].setComponents(a,d,E,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Bo.x=s.normal.x>0?e.max.x:e.min.x,Bo.y=s.normal.y>0?e.max.y:e.min.y,Bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ip(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],E=d[f];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let E=d[f];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var be=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],E=[],m=[];for(let p=0;p<h;p++){let _=p*u-o;for(let v=0;v<c;v++){let y=v*d-r;g.push(y,-_,0),E.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let v=_+c*p,y=_+c*(p+1),L=_+1+c*(p+1),C=_+1+c*p;f.push(v,y,C),f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(E,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
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
#endif`,nm=`struct PhysicalMaterial {
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
}`,im=`
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
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
}`,h1=`#if DEPTH_PACKING == 3200
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
}`,d1=`#define DISTANCE
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
}`,u1=`#define DISTANCE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
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
}`,g1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,y1=`uniform vec3 diffuse;
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
}`,v1=`#define LAMBERT
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
}`,_1=`#define LAMBERT
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
}`,A1=`#define MATCAP
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
}`,M1=`#define MATCAP
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
}`,S1=`#define NORMAL
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
}`,T1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,R1=`#define STANDARD
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
}`,x1=`#define STANDARD
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
}`,C1=`#define TOON
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
}`,F1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,I1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,D1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,H1=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:dp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:Ep,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:Tp,color_pars_vertex:bp,color_vertex:wp,common:Rp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Fp,displacementmap_vertex:Pp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Up,envmap_fragment:Hp,envmap_common_pars_fragment:Bp,envmap_pars_fragment:Np,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Jp,envmap_vertex:zp,fog_vertex:kp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Zp,lights_pars_begin:$p,lights_toon_fragment:Qp,lights_toon_pars_fragment:Kp,lights_phong_fragment:jp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:dm,map_particle_fragment:um,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:Em,morphnormal_vertex:ym,morphtarget_pars_vertex:vm,morphtarget_vertex:_m,normal_fragment_begin:Am,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:Tm,normal_vertex:bm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Fm,opaque_fragment:Pm,packing:Im,premultiplied_alpha_fragment:Lm,project_vertex:Dm,dithering_fragment:Um,dithering_pars_fragment:Hm,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:zm,shadowmap_vertex:km,shadowmask_pars_fragment:Gm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Zm,tonemapping_fragment:$m,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:Km,uv_pars_fragment:jm,uv_pars_vertex:e1,uv_vertex:t1,worldpos_vertex:n1,background_vert:i1,background_frag:s1,backgroundCube_vert:r1,backgroundCube_frag:o1,cube_vert:a1,cube_frag:l1,depth_vert:c1,depth_frag:h1,distanceRGBA_vert:d1,distanceRGBA_frag:u1,equirect_vert:f1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:E1,meshbasic_frag:y1,meshlambert_vert:v1,meshlambert_frag:_1,meshmatcap_vert:A1,meshmatcap_frag:M1,meshnormal_vert:S1,meshnormal_frag:T1,meshphong_vert:b1,meshphong_frag:w1,meshphysical_vert:R1,meshphysical_frag:x1,meshtoon_vert:C1,meshtoon_frag:F1,points_vert:P1,points_frag:I1,shadow_vert:L1,shadow_frag:D1,sprite_vert:U1,sprite_frag:H1},de={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ai={basic:{uniforms:Mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new he(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Mn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Mn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Mn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new he(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Mn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Mn([de.points,de.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Mn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Mn([de.common,de.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Mn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Mn([de.sprite,de.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Mn([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Mn([de.lights,de.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ai.physical={uniforms:Mn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var No={r:0,b:0,g:0},ms=new fi,B1=new Ct;function N1(n,e,t,i,s,r,o){let a=new he(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function E(_){let v=!1,y=g(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===Ca)?(h===void 0&&(h=new z(new Rn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:pr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ms.copy(v.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(ms)),h.material.toneMapped=ut.getTransfer(y.colorSpace)!==wt,(d!==y||u!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new z(new be(2,2),new rn({name:"BackgroundMaterial",uniforms:pr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(No,Hu(n)),i.buffers.color.setClear(No.r,No.g,No.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:E,addToRenderList:m}}function O1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,N,O,W){let ee=!1,Z=d(O,N,P);r!==Z&&(r=Z,c(r.object)),ee=f(A,O,N,W),ee&&g(A,O,N,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(A,P,N,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function d(A,P,N){let O=N.wireframe===!0,W=i[A.id];W===void 0&&(W={},i[A.id]=W);let ee=W[P.id];ee===void 0&&(ee={},W[P.id]=ee);let Z=ee[O];return Z===void 0&&(Z=u(l()),ee[O]=Z),Z}function u(A){let P=[],N=[],O=[];for(let W=0;W<t;W++)P[W]=0,N[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:O,object:A,attributes:{},index:null}}function f(A,P,N,O){let W=r.attributes,ee=P.attributes,Z=0,ae=N.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let Ae=W[Y],Ne=ee[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Ne=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Ne=A.instanceColor)),Ae===void 0||Ae.attribute!==Ne||Ne&&Ae.data!==Ne.data)return!0;Z++}return r.attributesNum!==Z||r.index!==O}function g(A,P,N,O){let W={},ee=P.attributes,Z=0,ae=N.getAttributes();for(let Y in ae)if(ae[Y].location>=0){let Ae=ee[Y];Ae===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Ae=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Ae=A.instanceColor));let Ne={};Ne.attribute=Ae,Ae&&Ae.data&&(Ne.data=Ae.data),W[Y]=Ne,Z++}r.attributes=W,r.attributesNum=Z,r.index=O}function E(){let A=r.newAttributes;for(let P=0,N=A.length;P<N;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){let N=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;N[A]=1,O[A]===0&&(n.enableVertexAttribArray(A),O[A]=1),W[A]!==P&&(n.vertexAttribDivisor(A,P),W[A]=P)}function _(){let A=r.newAttributes,P=r.enabledAttributes;for(let N=0,O=P.length;N<O;N++)P[N]!==A[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function v(A,P,N,O,W,ee,Z){Z===!0?n.vertexAttribIPointer(A,P,N,W,ee):n.vertexAttribPointer(A,P,N,O,W,ee)}function y(A,P,N,O){E();let W=O.attributes,ee=N.getAttributes(),Z=P.defaultAttributeValues;for(let ae in ee){let Y=ee[ae];if(Y.location>=0){let fe=W[ae];if(fe===void 0&&(ae==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),ae==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){let Ae=fe.normalized,Ne=fe.itemSize,it=e.get(fe);if(it===void 0)continue;let Pt=it.buffer,Q=it.type,le=it.bytesPerElement,Pe=Q===n.INT||Q===n.UNSIGNED_INT||fe.gpuType===mh;if(fe.isInterleavedBufferAttribute){let pe=fe.data,We=pe.stride,Ye=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let st=0;st<Y.locationSize;st++)p(Y.location+st,pe.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let st=0;st<Y.locationSize;st++)m(Y.location+st);n.bindBuffer(n.ARRAY_BUFFER,Pt);for(let st=0;st<Y.locationSize;st++)v(Y.location+st,Ne/Y.locationSize,Q,Ae,We*le,(Ye+Ne/Y.locationSize*st)*le,Pe)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)p(Y.location+pe,fe.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Pt);for(let pe=0;pe<Y.locationSize;pe++)v(Y.location+pe,Ne/Y.locationSize,Q,Ae,Ne*le,Ne/Y.locationSize*pe*le,Pe)}}else if(Z!==void 0){let Ae=Z[ae];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(Y.location,Ae);break;case 3:n.vertexAttrib3fv(Y.location,Ae);break;case 4:n.vertexAttrib4fv(Y.location,Ae);break;default:n.vertexAttrib1fv(Y.location,Ae)}}}}_()}function L(){F();for(let A in i){let P=i[A];for(let N in P){let O=P[N];for(let W in O)h(O[W].object),delete O[W];delete P[N]}delete i[A]}}function C(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let N in P){let O=P[N];for(let W in O)h(O[W].object),delete O[W];delete P[N]}delete i[A.id]}function b(A){for(let P in i){let N=i[P];if(N[A.id]===void 0)continue;let O=N[A.id];for(let W in O)h(O[W].object),delete O[W];delete N[A.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:_}}function z1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function k1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==jn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let F=b===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ii&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==hi&&!F)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function G1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new xi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,v=_*4,y=p.clippingState||null;l.value=y,y=h(g,u,v,f);for(let L=0;L!==v;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let p=f+E*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==E;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function V1(n){let e=new WeakMap;function t(o,a){return a===Ql?o.mapping=hr:a===Kl&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ql||a===Kl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ic(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var mr=class extends ua{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sr=4,Hd=[.125,.215,.35,.446,.526,.582],vs=20,Fl=new mr,Bd=new he,Pl=null,Il=0,Ll=0,Dl=!1,Es=(1+Math.sqrt(5))/2,Ks=1/Es,Nd=[new I(-Es,Ks,0),new I(Es,Ks,0),new I(-Ks,0,Es),new I(Ks,0,Es),new I(0,Es,-Ks),new I(0,Es,Ks),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Dl,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Cn,format:jn,colorSpace:ts,depthBuffer:!1},s=Od(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W1(r)),this._blurMaterial=X1(r,e,t)}return s}_compileMaterial(e){let t=new z(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,i,s){let a=new ln(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Bd),h.toneMapping=ui,h.autoClear=!1;let f=new tt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new z(new Rn,f),E=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,E=!0):(f.color.copy(Bd),E=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Oo(s,_*v,p>2?v:0,v,v),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===hr||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Oo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nd[(s-r-1)%Nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new z(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vs-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);let p=[],_=0;for(let b=0;b<vs;++b){let F=b/E,S=Math.exp(-F*F/2);p.push(S),b===0?_+=S:b<m&&(_+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let y=this._sizeLods[s],L=3*y*(s>v-sr?s-v+sr:0),C=4*(this._cubeSize-y);Oo(t,L,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Fl)}};function W1(n){let e=[],t=[],i=[],s=n,r=n-sr+1+Hd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-sr?l=Hd[o-n+sr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,E=3,m=2,p=1,_=new Float32Array(E*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let b=C%3*2/3-1,F=C>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];_.set(S,E*g*C),v.set(u,m*g*C);let A=[C,C,C,C,C,C];y.set(A,p*g*C)}let L=new qt;L.setAttribute("position",new Kt(_,E)),L.setAttribute("uv",new Kt(v,m)),L.setAttribute("faceIndex",new Kt(y,p)),e.push(L),s>sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Od(n,e,t){let i=new sn(n,e,t);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function X1(n,e,t){let i=new Float32Array(vs),s=new I(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function zd(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function kd(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function q1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ql||l===Kl,h=l===hr||l===dr;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new pa(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new pa(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Y1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Z1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,p=E.length;m<p;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let E=f[g];for(let m=0,p=E.length;m<p;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,E=0;if(f!==null){let _=f.array;E=f.version;for(let v=0,y=_.length;v<y;v+=3){let L=_[v+0],C=_[v+1],b=_[v+2];u.push(L,C,C,b,b,L)}}else if(g!==void 0){let _=g.array;E=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let L=v+0,C=v+1,b=v+2;u.push(L,C,C,b,b,L)}}else return;let m=new(Du(u)?da:ha)(u,1);m.version=E;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function $1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*o,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],E[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,E,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*E[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function J1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Q1(n,e,t){let i=new WeakMap,s=new xt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),E===!0&&(v=3);let y=a.attributes.position.count*v,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*L*4*d),b=new aa(C,y,L,d);b.type=hi,b.needsUpdate=!0;let F=v*4;for(let A=0;A<d;A++){let P=m[A],N=p[A],O=_[A],W=y*L*4*A;for(let ee=0;ee<P.count;ee++){let Z=ee*F;f===!0&&(s.fromBufferAttribute(P,ee),C[W+Z+0]=s.x,C[W+Z+1]=s.y,C[W+Z+2]=s.z,C[W+Z+3]=0),g===!0&&(s.fromBufferAttribute(N,ee),C[W+Z+4]=s.x,C[W+Z+5]=s.y,C[W+Z+6]=s.z,C[W+Z+7]=0),E===!0&&(s.fromBufferAttribute(O,ee),C[W+Z+8]=s.x,C[W+Z+9]=s.y,C[W+Z+10]=s.z,C[W+Z+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new ie(y,L)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let E=0;E<c.length;E++)f+=c[E];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function K1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var gr=class extends wn{constructor(e,t,i,s,r,o,a,l,c,h=or){if(h!==or&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===or&&(i=Li),i===void 0&&h===fr&&(i=ur),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nu=new wn,Gd=new gr(1,1),Ou=new aa,zu=new Fc,ku=new fa,Vd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function Sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Vd[s];if(r===void 0&&(r=new Float32Array(s),Vd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=Wd[e];t===void 0&&(t=new Int32Array(e),Wd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function j1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function e2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function t2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function n2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function i2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;Yd.set(i),n.uniformMatrix2fv(this.addr,!1,Yd),en(t,i)}}function s2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;qd.set(i),n.uniformMatrix3fv(this.addr,!1,qd),en(t,i)}}function r2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;Xd.set(i),n.uniformMatrix4fv(this.addr,!1,Xd),en(t,i)}}function o2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function a2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function l2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function c2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function h2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function d2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function u2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function f2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function p2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gd.compareFunction=Lu,r=Gd):r=Nu,t.setTexture2D(e||r,s)}function m2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zu,s)}function g2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ku,s)}function E2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ou,s)}function y2(n){switch(n){case 5126:return j1;case 35664:return e2;case 35665:return t2;case 35666:return n2;case 35674:return i2;case 35675:return s2;case 35676:return r2;case 5124:case 35670:return o2;case 35667:case 35671:return a2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return h2;case 36294:return d2;case 36295:return u2;case 36296:return f2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return E2}}function v2(n,e){n.uniform1fv(this.addr,e)}function _2(n,e){let t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function A2(n,e){let t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function M2(n,e){let t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function S2(n,e){let t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T2(n,e){let t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function b2(n,e){let t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function w2(n,e){n.uniform1iv(this.addr,e)}function R2(n,e){n.uniform2iv(this.addr,e)}function x2(n,e){n.uniform3iv(this.addr,e)}function C2(n,e){n.uniform4iv(this.addr,e)}function F2(n,e){n.uniform1uiv(this.addr,e)}function P2(n,e){n.uniform2uiv(this.addr,e)}function I2(n,e){n.uniform3uiv(this.addr,e)}function L2(n,e){n.uniform4uiv(this.addr,e)}function D2(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nu,r[o])}function U2(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zu,r[o])}function H2(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ku,r[o])}function B2(n,e,t){let i=this.cache,s=e.length,r=Pa(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ou,r[o])}function N2(n){switch(n){case 5126:return v2;case 35664:return _2;case 35665:return A2;case 35666:return M2;case 35674:return S2;case 35675:return T2;case 35676:return b2;case 5124:case 35670:return w2;case 35667:case 35671:return R2;case 35668:case 35672:return x2;case 35669:case 35673:return C2;case 5125:return F2;case 36294:return P2;case 36295:return I2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return B2}}var Lc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y2(t.type)}},Dc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N2(t.type)}},Uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ul=/(\w+)(\])?(\[|\.)?/g;function Zd(n,e){n.seq.push(e),n.map[e.id]=e}function O2(n,e,t){let i=n.name,s=i.length;for(Ul.lastIndex=0;;){let r=Ul.exec(i),o=Ul.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zd(t,c===void 0?new Lc(a,n,e):new Dc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Uc(a),Zd(t,d)),t=d}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);O2(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function $d(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var z2=37297,k2=0;function G2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Jd=new Je;function V2(n){ut._getMatrix(Jd,ut.workingColorSpace,n);let e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Fa:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+G2(n.getShaderSource(e),o)}else return s}function W2(n,e){let t=V2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X2(n,e){let t;switch(e){case y0:t="Linear";break;case v0:t="Reinhard";break;case _0:t="Cineon";break;case A0:t="ACESFilmic";break;case S0:t="AgX";break;case T0:t="Neutral";break;case M0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zo=new I;function q2(){ut.getLuminanceCoefficients(zo);let n=zo.x.toFixed(4),e=zo.y.toFixed(4),t=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Z2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gr(n){return n!==""}function Kd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(n){return n.replace(J2,K2)}var Q2=new Map;function K2(n,e){let t=je[e];if(t===void 0){let i=Q2.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hc(t)}var j2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(j2,eg)}function eg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function tg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case dr:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function sg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Au:e="ENVMAP_BLENDING_MULTIPLY";break;case g0:e="ENVMAP_BLENDING_MIX";break;case E0:e="ENVMAP_BLENDING_ADD";break}return e}function rg(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function og(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=tg(t),c=ng(t),h=ig(t),d=sg(t),u=rg(t),f=Y2(t),g=Z2(r),E=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?je.tonemapping_pars_fragment:"",t.toneMapping!==ui?X2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,W2("linearToOutputTexel",t.outputColorSpace),q2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Hc(o),o=Kd(o,t),o=jd(o,t),a=Hc(a),a=Kd(a,t),a=jd(a,t),o=eu(o),a=eu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+o,y=_+p+a,L=$d(s,s.VERTEX_SHADER,v),C=$d(s,s.FRAGMENT_SHADER,y);s.attachShader(E,L),s.attachShader(E,C),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(P){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(E).trim(),O=s.getShaderInfoLog(L).trim(),W=s.getShaderInfoLog(C).trim(),ee=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,L,C);else{let ae=Qd(s,L,"vertex"),Y=Qd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+ae+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||W==="")&&(Z=!1);Z&&(P.diagnostics={runnable:ee,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(L),s.deleteShader(C),F=new lr(s,E),S=$2(s,E)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(E,z2)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=C,this}var ag=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Nc(e),t.set(e,i)),i}},Nc=class{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}};function lg(n,e,t,i,s,r,o){let a=new ca,l=new Bc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,P,N,O){let W=N.fog,ee=O.geometry,Z=S.isMeshStandardMaterial?N.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=ae&&ae.mapping===Ca?ae.image.height:null,fe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let Ae=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ne=Ae!==void 0?Ae.length:0,it=0;ee.morphAttributes.position!==void 0&&(it=1),ee.morphAttributes.normal!==void 0&&(it=2),ee.morphAttributes.color!==void 0&&(it=3);let Pt,Q,le,Pe;if(fe){let St=ai[fe];Pt=St.vertexShader,Q=St.fragmentShader}else Pt=S.vertexShader,Q=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),Pe=l.getFragmentShaderID(S);let pe=n.getRenderTarget(),We=n.state.buffers.depth.getReversed(),Ye=O.isInstancedMesh===!0,st=O.isBatchedMesh===!0,kt=!!S.map,ht=!!S.matcap,$t=!!ae,B=!!S.aoMap,On=!!S.lightMap,ot=!!S.bumpMap,at=!!S.normalMap,Ge=!!S.displacementMap,Ht=!!S.emissiveMap,Oe=!!S.metalnessMap,x=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,K=S.dispersion>0,te=S.iridescence>0,J=S.sheen>0,De=S.transmission>0,me=M&&!!S.anisotropyMap,Me=k&&!!S.clearcoatMap,dt=k&&!!S.clearcoatNormalMap,re=k&&!!S.clearcoatRoughnessMap,Se=te&&!!S.iridescenceMap,Ve=te&&!!S.iridescenceThicknessMap,Xe=J&&!!S.sheenColorMap,Te=J&&!!S.sheenRoughnessMap,lt=!!S.specularMap,Ke=!!S.specularColorMap,Lt=!!S.specularIntensityMap,D=De&&!!S.transmissionMap,ue=De&&!!S.thicknessMap,q=!!S.gradientMap,j=!!S.alphaMap,ve=S.alphaTest>0,Ee=!!S.alphaHash,Ze=!!S.extensions,Xt=ui;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let un={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:Pt,fragmentShader:Q,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:st,batchingColor:st&&O._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&O.instanceColor!==null,instancingMorph:Ye&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ts,alphaToCoverage:!!S.alphaToCoverage,map:kt,matcap:ht,envMap:$t,envMapMode:$t&&ae.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:On,bumpMap:ot,normalMap:at,displacementMap:u&&Ge,emissiveMap:Ht,normalMapObjectSpace:at&&S.normalMapType===R0,normalMapTangentSpace:at&&S.normalMapType===Iu,metalnessMap:Oe,roughnessMap:x,anisotropy:M,anisotropyMap:me,clearcoat:k,clearcoatMap:Me,clearcoatNormalMap:dt,clearcoatRoughnessMap:re,dispersion:K,iridescence:te,iridescenceMap:Se,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:Xe,sheenRoughnessMap:Te,specularMap:lt,specularColorMap:Ke,specularIntensityMap:Lt,transmission:De,transmissionMap:D,thicknessMap:ue,gradientMap:q,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ve,alphaHash:Ee,combine:S.combine,mapUv:kt&&E(S.map.channel),aoMapUv:B&&E(S.aoMap.channel),lightMapUv:On&&E(S.lightMap.channel),bumpMapUv:ot&&E(S.bumpMap.channel),normalMapUv:at&&E(S.normalMap.channel),displacementMapUv:Ge&&E(S.displacementMap.channel),emissiveMapUv:Ht&&E(S.emissiveMap.channel),metalnessMapUv:Oe&&E(S.metalnessMap.channel),roughnessMapUv:x&&E(S.roughnessMap.channel),anisotropyMapUv:me&&E(S.anisotropyMap.channel),clearcoatMapUv:Me&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:dt&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&E(S.sheenRoughnessMap.channel),specularMapUv:lt&&E(S.specularMap.channel),specularColorMapUv:Ke&&E(S.specularColorMap.channel),specularIntensityMapUv:Lt&&E(S.specularIntensityMap.channel),transmissionMapUv:D&&E(S.transmissionMap.channel),thicknessMapUv:ue&&E(S.thicknessMap.channel),alphaMapUv:j&&E(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(at||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ee.attributes.uv&&(kt||j),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:We,skinning:O.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:it,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:Ht&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===At,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return un.vertexUv1s=c.has(1),un.vertexUv2s=c.has(2),un.vertexUv3s=c.has(3),c.clear(),un}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(_(A,S),v(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=g[S.type],P;if(A){let N=ai[A];P=Mr.clone(N.uniforms)}else P=S.uniforms;return P}function L(S,A){let P;for(let N=0,O=h.length;N<O;N++){let W=h[N];if(W.cacheKey===A){P=W,++P.usedTimes;break}}return P===void 0&&(P=new og(n,A,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){let A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:F}}function cg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function iu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,f,g,E,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=E,p.group=m),e++,p}function a(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,E,m){let p=o(d,u,f,g,E,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||hg),i.length>1&&i.sort(u||nu),s.length>1&&s.sort(u||nu)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function dg(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new iu,n.set(i,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ug(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new he};break;case"SpotLight":t={position:new I,direction:new I,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function fg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var pg=0;function mg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gg(n){let e=new ug,t=fg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Ct,o=new Ct;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,E=0,m=0,p=0,_=0,v=0,y=0,L=0,C=0,b=0;c.sort(mg);for(let S=0,A=c.length;S<A;S++){let P=c[S],N=P.color,O=P.intensity,W=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*O,d+=N.g*O,u+=N.b*O;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],O);b++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ae=P.shadow,Y=t.get(P);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=ee,i.directionalShadowMatrix[f]=P.shadow.matrix,_++}i.directional[f]=Z,f++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(N).multiplyScalar(O),Z.distance=W,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[E]=Z;let ae=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,ae.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[E]=ae.matrix,P.castShadow){let Y=t.get(P);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=ee,y++}E++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(N).multiplyScalar(O),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Z,m++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let ae=P.shadow,Y=t.get(P);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,Y.shadowCameraNear=ae.camera.near,Y.shadowCameraFar=ae.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=P.shadow.matrix,v++}i.point[g]=Z,g++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(O),Z.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=Z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==_||F.numPointShadows!==v||F.numSpotShadows!==y||F.numSpotMaps!==L||F.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=f,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=_,F.numPointShadows=v,F.numSpotShadows=y,F.numSpotMaps=L,F.numLightProbes=b,i.version=pg++)}function l(c,h){let d=0,u=0,f=0,g=0,E=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let v=c[p];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function su(n){let e=new gg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Eg(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new su(n),e.set(s,[a])):r>=o.length?(a=new su(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ji=class extends Ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`;function _g(n,e,t){let i=new Zr,s=new ie,r=new ie,o=new xt,a=new ji({depthPacking:Ar}),l=new Oc,c={},h=t.maxTextureSize,d={[$i]:nn,[nn]:$i,[At]:At},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:yg,fragmentShader:vg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new z(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let p=this.type;this.render=function(C,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(di),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==Ri&&this.type===Ri,W=p===Ri&&this.type!==Ri;for(let ee=0,Z=C.length;ee<Z;ee++){let ae=C[ee],Y=ae.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let fe=Y.getFrameExtents();if(s.multiply(fe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,Y.mapSize.y=r.y)),Y.map===null||O===!0||W===!0){let Ne=this.type!==Ri?{minFilter:Hn,magFilter:Hn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new sn(s.x,s.y,Ne),Y.map.texture.name=ae.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Ae=Y.getViewportCount();for(let Ne=0;Ne<Ae;Ne++){let it=Y.getViewport(Ne);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),N.viewport(o),Y.updateMatrices(ae,Ne),i=Y.getFrustum(),y(b,F,Y.camera,ae,this.type)}Y.isPointLightShadow!==!0&&this.type===Ri&&_(Y,F),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,A,P)};function _(C,b){let F=e.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,F,u,E,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,F,f,E,null)}function v(C,b,F,S){let A=null,P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)A=P;else if(A=F.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=A.uuid,O=b.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let ee=W[O];ee===void 0&&(ee=A.clone(),W[O]=ee,b.addEventListener("dispose",L)),A=ee}if(A.visible=b.visible,A.wireframe=b.wireframe,S===Ri?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=n.properties.get(A);N.light=F}return A}function y(C,b,F,S,A){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Ri)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let O=e.update(C),W=C.material;if(Array.isArray(W)){let ee=O.groups;for(let Z=0,ae=ee.length;Z<ae;Z++){let Y=ee[Z],fe=W[Y.materialIndex];if(fe&&fe.visible){let Ae=v(C,fe,S,A);C.onBeforeShadow(n,C,b,F,O,Ae,Y),n.renderBufferDirect(F,null,O,Ae,C,Y),C.onAfterShadow(n,C,b,F,O,Ae,Y)}}}else if(W.visible){let ee=v(C,W,S,A);C.onBeforeShadow(n,C,b,F,O,ee,null),n.renderBufferDirect(F,null,O,ee,C,null),C.onAfterShadow(n,C,b,F,O,ee,null)}}let N=C.children;for(let O=0,W=N.length;O<W;O++)y(N[O],b,F,S,A)}function L(C){C.target.removeEventListener("dispose",L);for(let F in c){let S=c[F],A=C.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var Ag={[Wl]:Xl,[ql]:$l,[Yl]:Jl,[cr]:Zl,[Xl]:Wl,[$l]:ql,[Jl]:Yl,[Zl]:cr};function Mg(n,e){function t(){let D=!1,ue=new xt,q=null,j=new xt(0,0,0,0);return{setMask:function(ve){q!==ve&&!D&&(n.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){D=ve},setClear:function(ve,Ee,Ze,Xt,un){un===!0&&(ve*=Xt,Ee*=Xt,Ze*=Xt),ue.set(ve,Ee,Ze,Xt),j.equals(ue)===!1&&(n.clearColor(ve,Ee,Ze,Xt),j.copy(ue))},reset:function(){D=!1,q=null,j.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,q=null,j=null,ve=null;return{setReversed:function(Ee){if(ue!==Ee){let Ze=e.get("EXT_clip_control");ue?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);let Xt=ve;ve=null,this.setClear(Xt)}ue=Ee},getReversed:function(){return ue},setTest:function(Ee){Ee?pe(n.DEPTH_TEST):We(n.DEPTH_TEST)},setMask:function(Ee){q!==Ee&&!D&&(n.depthMask(Ee),q=Ee)},setFunc:function(Ee){if(ue&&(Ee=Ag[Ee]),j!==Ee){switch(Ee){case Wl:n.depthFunc(n.NEVER);break;case Xl:n.depthFunc(n.ALWAYS);break;case ql:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=Ee}},setLocked:function(Ee){D=Ee},setClear:function(Ee){ve!==Ee&&(ue&&(Ee=1-Ee),n.clearDepth(Ee),ve=Ee)},reset:function(){D=!1,q=null,j=null,ve=null,ue=!1}}}function s(){let D=!1,ue=null,q=null,j=null,ve=null,Ee=null,Ze=null,Xt=null,un=null;return{setTest:function(St){D||(St?pe(n.STENCIL_TEST):We(n.STENCIL_TEST))},setMask:function(St){ue!==St&&!D&&(n.stencilMask(St),ue=St)},setFunc:function(St,Zn,_i){(q!==St||j!==Zn||ve!==_i)&&(n.stencilFunc(St,Zn,_i),q=St,j=Zn,ve=_i)},setOp:function(St,Zn,_i){(Ee!==St||Ze!==Zn||Xt!==_i)&&(n.stencilOp(St,Zn,_i),Ee=St,Ze=Zn,Xt=_i)},setLocked:function(St){D=St},setClear:function(St){un!==St&&(n.clearStencil(St),un=St)},reset:function(){D=!1,ue=null,q=null,j=null,ve=null,Ee=null,Ze=null,Xt=null,un=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,_=null,v=null,y=null,L=null,C=null,b=new he(0,0,0),F=0,S=!1,A=null,P=null,N=null,O=null,W=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ae=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=ae>=1):Y.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=ae>=2);let fe=null,Ae={},Ne=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),Pt=new xt().fromArray(Ne),Q=new xt().fromArray(it);function le(D,ue,q,j){let ve=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(D,Ee),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<q;Ze++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ue+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Ee}let Pe={};Pe[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(cr),ot(!1),at(ld),pe(n.CULL_FACE),B(di);function pe(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function We(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ye(D,ue){return d[D]!==ue?(n.bindFramebuffer(D,ue),d[D]=ue,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function st(D,ue){let q=f,j=!1;if(D){q=u.get(ue),q===void 0&&(q=[],u.set(ue,q));let ve=D.textures;if(q.length!==ve.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ze=ve.length;Ee<Ze;Ee++)q[Ee]=n.COLOR_ATTACHMENT0+Ee;q.length=ve.length,j=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,j=!0);j&&n.drawBuffers(q)}function kt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}let ht={[ys]:n.FUNC_ADD,[jf]:n.FUNC_SUBTRACT,[e0]:n.FUNC_REVERSE_SUBTRACT};ht[t0]=n.MIN,ht[n0]=n.MAX;let $t={[i0]:n.ZERO,[s0]:n.ONE,[r0]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[d0]:n.SRC_ALPHA_SATURATE,[c0]:n.DST_COLOR,[a0]:n.DST_ALPHA,[o0]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[h0]:n.ONE_MINUS_DST_COLOR,[l0]:n.ONE_MINUS_DST_ALPHA,[u0]:n.CONSTANT_COLOR,[f0]:n.ONE_MINUS_CONSTANT_COLOR,[p0]:n.CONSTANT_ALPHA,[m0]:n.ONE_MINUS_CONSTANT_ALPHA};function B(D,ue,q,j,ve,Ee,Ze,Xt,un,St){if(D===di){E===!0&&(We(n.BLEND),E=!1);return}if(E===!1&&(pe(n.BLEND),E=!0),D!==Kf){if(D!==m||St!==S){if((p!==ys||y!==ys)&&(n.blendEquation(n.FUNC_ADD),p=ys,y=ys),St)switch(D){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bn:n.blendFunc(n.ONE,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,v=null,L=null,C=null,b.set(0,0,0),F=0,m=D,S=St}return}ve=ve||ue,Ee=Ee||q,Ze=Ze||j,(ue!==p||ve!==y)&&(n.blendEquationSeparate(ht[ue],ht[ve]),p=ue,y=ve),(q!==_||j!==v||Ee!==L||Ze!==C)&&(n.blendFuncSeparate($t[q],$t[j],$t[Ee],$t[Ze]),_=q,v=j,L=Ee,C=Ze),(Xt.equals(b)===!1||un!==F)&&(n.blendColor(Xt.r,Xt.g,Xt.b,un),b.copy(Xt),F=un),m=D,S=!1}function On(D,ue){D.side===At?We(n.CULL_FACE):pe(n.CULL_FACE);let q=D.side===nn;ue&&(q=!q),ot(q),D.blending===Zi&&D.transparent===!1?B(di):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):We(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(D){A!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),A=D)}function at(D){D!==Jf?(pe(n.CULL_FACE),D!==P&&(D===ld?n.cullFace(n.BACK):D===Qf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):We(n.CULL_FACE),P=D}function Ge(D){D!==N&&(Z&&n.lineWidth(D),N=D)}function Ht(D,ue,q){D?(pe(n.POLYGON_OFFSET_FILL),(O!==ue||W!==q)&&(n.polygonOffset(ue,q),O=ue,W=q)):We(n.POLYGON_OFFSET_FILL)}function Oe(D){D?pe(n.SCISSOR_TEST):We(n.SCISSOR_TEST)}function x(D){D===void 0&&(D=n.TEXTURE0+ee-1),fe!==D&&(n.activeTexture(D),fe=D)}function M(D,ue,q){q===void 0&&(fe===null?q=n.TEXTURE0+ee-1:q=fe);let j=Ae[q];j===void 0&&(j={type:void 0,texture:void 0},Ae[q]=j),(j.type!==D||j.texture!==ue)&&(fe!==q&&(n.activeTexture(q),fe=q),n.bindTexture(D,ue||Pe[D]),j.type=D,j.texture=ue)}function k(){let D=Ae[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(D){Pt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Pt.copy(D))}function Te(D){Q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function lt(D,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let j=q.get(D);j===void 0&&(j=n.getUniformBlockIndex(ue,D.name),q.set(D,j))}function Ke(D,ue){let j=c.get(ue).get(D);l.get(ue)!==j&&(n.uniformBlockBinding(ue,j,D.__bindingPointIndex),l.set(ue,j))}function Lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,Ae={},d={},u=new WeakMap,f=[],g=null,E=!1,m=null,p=null,_=null,v=null,y=null,L=null,C=null,b=new he(0,0,0),F=0,S=!1,A=null,P=null,N=null,O=null,W=null,Pt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:We,bindFramebuffer:Ye,drawBuffers:st,useProgram:kt,setBlending:B,setMaterial:On,setFlipSided:ot,setCullFace:at,setLineWidth:Ge,setPolygonOffset:Ht,setScissorTest:Oe,activeTexture:x,bindTexture:M,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:Se,texImage3D:Ve,updateUBOMapping:lt,uniformBlockBinding:Ke,texStorage2D:dt,texStorage3D:re,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:Xe,viewport:Te,reset:Lt}}function ru(n,e,t,i){let s=Sg(i);switch(t){case wu:return n*e;case xu:return n*e;case Cu:return n*e*2;case yh:return n*e/s.components*s.byteLength;case vh:return n*e/s.components*s.byteLength;case Fu:return n*e*2/s.components*s.byteLength;case _h:return n*e*2/s.components*s.byteLength;case Ru:return n*e*3/s.components*s.byteLength;case jn:return n*e*4/s.components*s.byteLength;case Ah:return n*e*4/s.components*s.byteLength;case Qo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jo:case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(n,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(n,8)*Math.max(e,8)/2;case sc:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ta:case Ac:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pu:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sg(n){switch(n){case Ii:case Su:return{byteLength:1,components:1};case Yr:case Tu:case Cn:return{byteLength:2,components:1};case gh:case Eh:return{byteLength:2,components:4};case Li:case mh:case hi:return{byteLength:4,components:1};case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Tg(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return f?new OffscreenCanvas(x,M):ra("canvas")}function E(x,M,k){let K=1,te=Oe(x);if((te.width>k||te.height>k)&&(K=k/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let J=Math.floor(K*te.width),De=Math.floor(K*te.height);d===void 0&&(d=g(J,De));let me=M?g(J,De):d;return me.width=J,me.height=De,me.getContext("2d").drawImage(x,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+De+")."),me}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function _(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(x,M,k,K,te=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let J=M;if(M===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),M===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let De=te?Fa:ut.getTransfer(K);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=De===wt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(x,M){let k;return x?M===null||M===Li||M===ur?k=n.DEPTH24_STENCIL8:M===hi?k=n.DEPTH32F_STENCIL8:M===Yr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===ur?k=n.DEPTH_COMPONENT24:M===hi?k=n.DEPTH_COMPONENT32F:M===Yr&&(k=n.DEPTH_COMPONENT16),k}function L(x,M){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Hn&&x.minFilter!==ci?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function C(x){let M=x.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function b(x){let M=x.target;M.removeEventListener("dispose",b),A(M)}function F(x){let M=i.get(x);if(M.__webglInit===void 0)return;let k=x.source,K=u.get(k);if(K){let te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(x),Object.keys(K).length===0&&u.delete(k)}i.remove(x)}function S(x){let M=i.get(x);n.deleteTexture(M.__webglTexture);let k=x.source,K=u.get(k);delete K[M.__cacheKey],o.memory.textures--}function A(x){let M=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[K][te]);else n.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)n.deleteFramebuffer(M.__webglFramebuffer[K]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=x.textures;for(let K=0,te=k.length;K<te;K++){let J=i.get(k[K]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(x)}let P=0;function N(){P=0}function O(){let x=P;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),P+=1,x}function W(x){let M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function ee(x,M){let k=i.get(x);if(x.isVideoTexture&&Ge(x),x.isRenderTargetTexture===!1&&x.version>0&&k.__version!==x.version){let K=x.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,x,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Z(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){Q(k,x,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function ae(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){Q(k,x,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function Y(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){le(k,x,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let fe={[cn]:n.REPEAT,[_s]:n.CLAMP_TO_EDGE,[jl]:n.MIRRORED_REPEAT},Ae={[Hn]:n.NEAREST,[b0]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[ol]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},Ne={[x0]:n.NEVER,[D0]:n.ALWAYS,[C0]:n.LESS,[Lu]:n.LEQUAL,[F0]:n.EQUAL,[L0]:n.GEQUAL,[P0]:n.GREATER,[I0]:n.NOTEQUAL};function it(x,M){if(M.type===hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ci||M.magFilter===ol||M.magFilter===_o||M.magFilter===As||M.minFilter===ci||M.minFilter===ol||M.minFilter===_o||M.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,fe[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,fe[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,fe[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Ae[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Ae[M.minFilter]),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Hn||M.minFilter!==_o&&M.minFilter!==As||M.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Pt(x,M){let k=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",C));let K=M.source,te=u.get(K);te===void 0&&(te={},u.set(K,te));let J=W(M);if(J!==x.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[J].usedTimes++;let De=te[x.__cacheKey];De!==void 0&&(te[x.__cacheKey].usedTimes--,De.usedTimes===0&&S(M)),x.__cacheKey=J,x.__webglTexture=te[J].texture}return k}function Q(x,M,k){let K=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=n.TEXTURE_3D);let te=Pt(x,M),J=M.source;t.bindTexture(K,x.__webglTexture,n.TEXTURE0+k);let De=i.get(J);if(J.version!==De.__version||te===!0){t.activeTexture(n.TEXTURE0+k);let me=ut.getPrimaries(ut.workingColorSpace),Me=M.colorSpace===qi?null:ut.getPrimaries(M.colorSpace),dt=M.colorSpace===qi||me===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let re=E(M.image,!1,s.maxTextureSize);re=Ht(M,re);let Se=r.convert(M.format,M.colorSpace),Ve=r.convert(M.type),Xe=v(M.internalFormat,Se,Ve,M.colorSpace,M.isVideoTexture);it(K,M);let Te,lt=M.mipmaps,Ke=M.isVideoTexture!==!0,Lt=De.__version===void 0||te===!0,D=J.dataReady,ue=L(M,re);if(M.isDepthTexture)Xe=y(M.format===fr,M.type),Lt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Xe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Xe,re.width,re.height,0,Se,Ve,null));else if(M.isDataTexture)if(lt.length>0){Ke&&Lt&&t.texStorage2D(n.TEXTURE_2D,ue,Xe,lt[0].width,lt[0].height);for(let q=0,j=lt.length;q<j;q++)Te=lt[q],Ke?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,Se,Ve,Te.data):t.texImage2D(n.TEXTURE_2D,q,Xe,Te.width,Te.height,0,Se,Ve,Te.data);M.generateMipmaps=!1}else Ke?(Lt&&t.texStorage2D(n.TEXTURE_2D,ue,Xe,re.width,re.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Se,Ve,re.data)):t.texImage2D(n.TEXTURE_2D,0,Xe,re.width,re.height,0,Se,Ve,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Xe,lt[0].width,lt[0].height,re.depth);for(let q=0,j=lt.length;q<j;q++)if(Te=lt[q],M.format!==jn)if(Se!==null)if(Ke){if(D)if(M.layerUpdates.size>0){let ve=ru(Te.width,Te.height,M.format,M.type);for(let Ee of M.layerUpdates){let Ze=Te.data.subarray(Ee*ve/Te.data.BYTES_PER_ELEMENT,(Ee+1)*ve/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Ee,Te.width,Te.height,1,Se,Ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,re.depth,Se,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Xe,Te.width,Te.height,re.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,re.depth,Se,Ve,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Xe,Te.width,Te.height,re.depth,0,Se,Ve,Te.data)}else{Ke&&Lt&&t.texStorage2D(n.TEXTURE_2D,ue,Xe,lt[0].width,lt[0].height);for(let q=0,j=lt.length;q<j;q++)Te=lt[q],M.format!==jn?Se!==null?Ke?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,Se,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Xe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,Se,Ve,Te.data):t.texImage2D(n.TEXTURE_2D,q,Xe,Te.width,Te.height,0,Se,Ve,Te.data)}else if(M.isDataArrayTexture)if(Ke){if(Lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Xe,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){let q=ru(re.width,re.height,M.format,M.type);for(let j of M.layerUpdates){let ve=re.data.subarray(j*q/re.data.BYTES_PER_ELEMENT,(j+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,Se,Ve,ve)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Se,Ve,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,re.width,re.height,re.depth,0,Se,Ve,re.data);else if(M.isData3DTexture)Ke?(Lt&&t.texStorage3D(n.TEXTURE_3D,ue,Xe,re.width,re.height,re.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Se,Ve,re.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,re.width,re.height,re.depth,0,Se,Ve,re.data);else if(M.isFramebufferTexture){if(Lt)if(Ke)t.texStorage2D(n.TEXTURE_2D,ue,Xe,re.width,re.height);else{let q=re.width,j=re.height;for(let ve=0;ve<ue;ve++)t.texImage2D(n.TEXTURE_2D,ve,Xe,q,j,0,Se,Ve,null),q>>=1,j>>=1}}else if(lt.length>0){if(Ke&&Lt){let q=Oe(lt[0]);t.texStorage2D(n.TEXTURE_2D,ue,Xe,q.width,q.height)}for(let q=0,j=lt.length;q<j;q++)Te=lt[q],Ke?D&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se,Ve,Te):t.texImage2D(n.TEXTURE_2D,q,Xe,Se,Ve,Te);M.generateMipmaps=!1}else if(Ke){if(Lt){let q=Oe(re);t.texStorage2D(n.TEXTURE_2D,ue,Xe,q.width,q.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ve,re)}else t.texImage2D(n.TEXTURE_2D,0,Xe,Se,Ve,re);m(M)&&p(K),De.__version=J.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function le(x,M,k){if(M.image.length!==6)return;let K=Pt(x,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+k);let J=i.get(te);if(te.version!==J.__version||K===!0){t.activeTexture(n.TEXTURE0+k);let De=ut.getPrimaries(ut.workingColorSpace),me=M.colorSpace===qi?null:ut.getPrimaries(M.colorSpace),Me=M.colorSpace===qi||De===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let dt=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let j=0;j<6;j++)!dt&&!re?Se[j]=E(M.image[j],!0,s.maxCubemapSize):Se[j]=re?M.image[j].image:M.image[j],Se[j]=Ht(M,Se[j]);let Ve=Se[0],Xe=r.convert(M.format,M.colorSpace),Te=r.convert(M.type),lt=v(M.internalFormat,Xe,Te,M.colorSpace),Ke=M.isVideoTexture!==!0,Lt=J.__version===void 0||K===!0,D=te.dataReady,ue=L(M,Ve);it(n.TEXTURE_CUBE_MAP,M);let q;if(dt){Ke&&Lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,lt,Ve.width,Ve.height);for(let j=0;j<6;j++){q=Se[j].mipmaps;for(let ve=0;ve<q.length;ve++){let Ee=q[ve];M.format!==jn?Xe!==null?Ke?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ee.width,Ee.height,Xe,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,lt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,Ee.width,Ee.height,Xe,Te,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,lt,Ee.width,Ee.height,0,Xe,Te,Ee.data)}}}else{if(q=M.mipmaps,Ke&&Lt){q.length>0&&ue++;let j=Oe(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,lt,j.width,j.height)}for(let j=0;j<6;j++)if(re){Ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se[j].width,Se[j].height,Xe,Te,Se[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,lt,Se[j].width,Se[j].height,0,Xe,Te,Se[j].data);for(let ve=0;ve<q.length;ve++){let Ze=q[ve].image[j].image;Ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Ze.width,Ze.height,Xe,Te,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,lt,Ze.width,Ze.height,0,Xe,Te,Ze.data)}}else{Ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Xe,Te,Se[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,lt,Xe,Te,Se[j]);for(let ve=0;ve<q.length;ve++){let Ee=q[ve];Ke?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,Xe,Te,Ee.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,lt,Xe,Te,Ee.image[j])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function Pe(x,M,k,K,te,J){let De=r.convert(k.format,k.colorSpace),me=r.convert(k.type),Me=v(k.internalFormat,De,me,k.colorSpace),dt=i.get(M),re=i.get(k);if(re.__renderTarget=M,!dt.__hasExternalTextures){let Se=Math.max(1,M.width>>J),Ve=Math.max(1,M.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Me,Se,Ve,M.depth,0,De,me,null):t.texImage2D(te,J,Me,Se,Ve,0,De,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),at(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,re.__webglTexture,0,ot(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,re.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(x,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer){let K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,J=y(M.stencilBuffer,te),De=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=ot(M);at(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,J,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,x)}else{let K=M.textures;for(let te=0;te<K.length;te++){let J=K[te],De=r.convert(J.format,J.colorSpace),me=r.convert(J.type),Me=v(J.internalFormat,De,me,J.colorSpace),dt=ot(M);k&&at(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Me,M.width,M.height):at(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let te=K.__webglTexture,J=ot(M);if(M.depthTexture.format===or)at(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===fr)at(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(x){let M=i.get(x),k=x.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==x.depthTexture){let K=x.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");We(M.__webglFramebuffer,x)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=n.createRenderbuffer(),pe(M.__webglDepthbuffer[K],x,!1);else{let te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),pe(M.__webglDepthbuffer,x,!1);else{let K=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(x,M,k){let K=i.get(x);M!==void 0&&Pe(K.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ye(x)}function kt(x){let M=x.texture,k=i.get(x),K=i.get(M);x.addEventListener("dispose",b);let te=x.textures,J=x.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=M.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[me]=[];for(let Me=0;Me<M.mipmaps.length;Me++)k.__webglFramebuffer[me][Me]=n.createFramebuffer()}else k.__webglFramebuffer[me]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)k.__webglFramebuffer[me]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(De)for(let me=0,Me=te.length;me<Me;me++){let dt=i.get(te[me]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&at(x)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){let Me=te[me];k.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[me]);let dt=r.convert(Me.format,Me.colorSpace),re=r.convert(Me.type),Se=v(Me.internalFormat,dt,re,Me.colorSpace,x.isXRRenderTarget===!0),Ve=ot(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,k.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(k.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),it(n.TEXTURE_CUBE_MAP,M);for(let me=0;me<6;me++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Pe(k.__webglFramebuffer[me][Me],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else Pe(k.__webglFramebuffer[me],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let me=0,Me=te.length;me<Me;me++){let dt=te[me],re=i.get(dt);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),it(n.TEXTURE_2D,dt),Pe(k.__webglFramebuffer,x,dt,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(dt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(me=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),it(me,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Pe(k.__webglFramebuffer[Me],x,M,n.COLOR_ATTACHMENT0,me,Me);else Pe(k.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,me,0);m(M)&&p(me),t.unbindTexture()}x.depthBuffer&&Ye(x)}function ht(x){let M=x.textures;for(let k=0,K=M.length;k<K;k++){let te=M[k];if(m(te)){let J=_(x),De=i.get(te).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}let $t=[],B=[];function On(x){if(x.samples>0){if(at(x)===!1){let M=x.textures,k=x.width,K=x.height,te=n.COLOR_BUFFER_BIT,J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(x),me=M.length>1;if(me)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Me]);let dt=i.get(M[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,dt,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,te,n.NEAREST),l===!0&&($t.length=0,B.length=0,$t.push(n.COLOR_ATTACHMENT0+Me),x.depthBuffer&&x.resolveDepthBuffer===!1&&($t.push(J),B.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,De.__webglColorRenderbuffer[Me]);let dt=i.get(M[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,dt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let M=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ot(x){return Math.min(s.maxSamples,x.samples)}function at(x){let M=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(x){let M=o.render.frame;h.get(x)!==M&&(h.set(x,M),x.update())}function Ht(x,M){let k=x.colorSpace,K=x.format,te=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||k!==ts&&k!==qi&&(ut.getTransfer(k)===wt?(K!==jn||te!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Oe(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=ae,this.setTextureCube=Y,this.rebindTextures=st,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=at}function bg(n,e){function t(i,s=qi){let r,o=ut.getTransfer(s);if(i===Ii)return n.UNSIGNED_BYTE;if(i===gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Su)return n.BYTE;if(i===Tu)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===mh)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===wu)return n.ALPHA;if(i===Ru)return n.RGB;if(i===jn)return n.RGBA;if(i===xu)return n.LUMINANCE;if(i===Cu)return n.LUMINANCE_ALPHA;if(i===or)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===yh)return n.RED;if(i===vh)return n.RED_INTEGER;if(i===Fu)return n.RG;if(i===_h)return n.RG_INTEGER;if(i===Ah)return n.RGBA_INTEGER;if(i===Qo||i===Ko||i===jo||i===ea)if(o===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===tc||i===nc||i===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===rc||i===oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sc||i===rc)return o===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc||i===mc||i===gc||i===Ec||i===yc||i===vc||i===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ac)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return o===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ta||i===Ac||i===Mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ta)return o===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===Sc||i===Tc||i===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zc=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ce=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),p=this._getHandJoint(c,E);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new wn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new rn({vertexShader:Rg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new be(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends Ji{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,E=new kc,m=t.getContextAttributes(),p=null,_=null,v=[],y=[],L=new ie,C=null,b=new ln;b.viewport=new xt;let F=new ln;F.viewport=new xt;let S=[b,F],A=new zc,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=v[Q];return le===void 0&&(le=new Vr,v[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=v[Q];return le===void 0&&(le=new Vr,v[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=v[Q];return le===void 0&&(le=new Vr,v[Q]=le),le.getHandSpace()};function O(Q){let le=y.indexOf(Q.inputSource);if(le===-1)return;let Pe=v[le];Pe!==void 0&&(Pe.update(Q.inputSource,Q.frame,c||o),Pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<v.length;Q++){let le=y[Q];le!==null&&(y[Q]=null,v[Q].disconnect(le))}P=null,N=null,E.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,_=null,Pt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new sn(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Pe=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?fr:or,Pe=m.stencil?ur:Li);let We={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new sn(u.textureWidth,u.textureHeight,{format:jn,type:Ii,depthTexture:new gr(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(Q){for(let le=0;le<Q.removed.length;le++){let Pe=Q.removed[le],pe=y.indexOf(Pe);pe>=0&&(y[pe]=null,v[pe].disconnect(Pe))}for(let le=0;le<Q.added.length;le++){let Pe=Q.added[le],pe=y.indexOf(Pe);if(pe===-1){for(let Ye=0;Ye<v.length;Ye++)if(Ye>=y.length){y.push(Pe),pe=Ye;break}else if(y[Ye]===null){y[Ye]=Pe,pe=Ye;break}if(pe===-1)break}let We=v[pe];We&&We.connect(Pe)}}let Z=new I,ae=new I;function Y(Q,le,Pe){Z.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(Pe.matrixWorld);let pe=Z.distanceTo(ae),We=le.projectionMatrix.elements,Ye=Pe.projectionMatrix.elements,st=We[14]/(We[10]-1),kt=We[14]/(We[10]+1),ht=(We[9]+1)/We[5],$t=(We[9]-1)/We[5],B=(We[8]-1)/We[0],On=(Ye[8]+1)/Ye[0],ot=st*B,at=st*On,Ge=pe/(-B+On),Ht=Ge*-B;if(le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ht),Q.translateZ(Ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),We[10]===-1)Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Oe=st+Ge,x=kt+Ge,M=ot-Ht,k=at+(pe-Ht),K=ht*kt/x*Oe,te=$t*kt/x*Oe;Q.projectionMatrix.makePerspective(M,k,K,te,Oe,x),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let le=Q.near,Pe=Q.far;E.texture!==null&&(E.depthNear>0&&(le=E.depthNear),E.depthFar>0&&(Pe=E.depthFar)),A.near=F.near=b.near=le,A.far=F.far=b.far=Pe,(P!==A.near||N!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,N=A.far),b.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,A.layers.mask=b.layers.mask|F.layers.mask;let pe=Q.parent,We=A.cameras;fe(A,pe);for(let Ye=0;Ye<We.length;Ye++)fe(We[Ye],pe);We.length===2?Y(A,b,F):A.projectionMatrix.copy(b.projectionMatrix),Ae(Q,A,pe)};function Ae(Q,le,Pe){Pe===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(Pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=sa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(A)};let Ne=null;function it(Q,le){if(h=le.getViewerPose(c||o),g=le,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let pe=!1;Pe.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let Ye=0;Ye<Pe.length;Ye++){let st=Pe[Ye],kt=null;if(f!==null)kt=f.getViewport(st);else{let $t=d.getViewSubImage(u,st);kt=$t.viewport,Ye===0&&(e.setRenderTargetTextures(_,$t.colorTexture,u.ignoreDepthValues?void 0:$t.depthStencilTexture),e.setRenderTarget(_))}let ht=S[Ye];ht===void 0&&(ht=new ln,ht.layers.enable(Ye),ht.viewport=new xt,S[Ye]=ht),ht.matrix.fromArray(st.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(st.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(kt.x,kt.y,kt.width,kt.height),Ye===0&&(A.matrix.copy(ht.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(ht)}let We=s.enabledFeatures;if(We&&We.includes("depth-sensing")){let Ye=d.getDepthInformation(Pe[0]);Ye&&Ye.isValid&&Ye.texture&&E.init(e,Ye,s.renderState)}}for(let Pe=0;Pe<v.length;Pe++){let pe=y[Pe],We=v[Pe];pe!==null&&We!==void 0&&We.update(pe,le,c||o)}Ne&&Ne(Q,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}let Pt=new Bu;Pt.setAnimationLoop(it),this.setAnimationLoop=function(Q){Ne=Q},this.dispose=function(){}}},gs=new fi,Cg=new Ct;function Fg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),E(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,gs.copy(y),gs.x*=-1,gs.y*=-1,gs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(gs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function E(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Pg(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let L=v.program;i.updateUBOMapping(_,L);let C=e.render.frame;r[_.id]!==C&&(u(_),r[_.id]=C)}function h(_){let v=d();_.__bindingPointIndex=v;let y=n.createBuffer(),L=_.__size,C=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=s[_.id],y=_.uniforms,L=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,b=y.length;C<b;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,A=F.length;S<A;S++){let P=F[S];if(f(P,C,S,L)===!0){let N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],W=0;for(let ee=0;ee<O.length;ee++){let Z=O[ee],ae=E(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,N+W,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,v,y,L){let C=_.value,b=v+"_"+y;if(L[b]===void 0)return typeof C=="number"||typeof C=="boolean"?L[b]=C:L[b]=C.clone(),!0;{let F=L[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(_){let v=_.uniforms,y=0,L=16;for(let b=0,F=v.length;b<F;b++){let S=Array.isArray(v[b])?v[b]:[v[b]];for(let A=0,P=S.length;A<P;A++){let N=S[A],O=Array.isArray(N.value)?N.value:[N.value];for(let W=0,ee=O.length;W<ee;W++){let Z=O[W],ae=E(Z),Y=y%L,fe=Y%ae.boundary,Ae=Y+fe;y+=fe,Ae!==0&&L-Ae<ae.storage&&(y+=L-Ae),N.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=ae.storage}}}let C=y%L;return C>0&&(y+=L-C),_.__size=y,_.__cache={},this}function E(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ma=class{constructor(e={}){let{canvas:t=H0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,p=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=ui,this.toneMappingExposure=1;let y=this,L=!1,C=0,b=0,F=null,S=-1,A=null,P=new xt,N=new xt,O=null,W=new he(0),ee=0,Z=t.width,ae=t.height,Y=1,fe=null,Ae=null,Ne=new xt(0,0,Z,ae),it=new xt(0,0,Z,ae),Pt=!1,Q=new Zr,le=!1,Pe=!1,pe=new Ct,We=new Ct,Ye=new I,st=new xt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function $t(){return F===null?Y:1}let B=i;function On(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),B===null){let U="webgl2";if(B=On(U,T),B===null)throw On(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ot,at,Ge,Ht,Oe,x,M,k,K,te,J,De,me,Me,dt,re,Se,Ve,Xe,Te,lt,Ke,Lt,D;function ue(){ot=new Y1(B),ot.init(),Ke=new bg(B,ot),at=new k1(B,ot,e,Ke),Ge=new Mg(B,ot),at.reverseDepthBuffer&&u&&Ge.buffers.depth.setReversed(!0),Ht=new J1(B),Oe=new cg,x=new Tg(B,ot,Ge,Oe,at,Ke,Ht),M=new V1(y),k=new q1(y),K=new ip(B),Lt=new O1(B,K),te=new Z1(B,K,Ht,Lt),J=new K1(B,te,K,Ht),Xe=new Q1(B,at,x),re=new G1(Oe),De=new lg(y,M,k,ot,at,Lt,re),me=new Fg(y,Oe),Me=new dg,dt=new Eg(ot),Ve=new N1(y,M,k,Ge,J,f,l),Se=new _g(y,J,at),D=new Pg(B,Ht,at,Ge),Te=new z1(B,ot,Ht),lt=new $1(B,ot,Ht),Ht.programs=De.programs,y.capabilities=at,y.extensions=ot,y.properties=Oe,y.renderLists=Me,y.shadowMap=Se,y.state=Ge,y.info=Ht}ue();let q=new Gc(y,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Z,ae,!1))},this.getSize=function(T){return T.set(Z,ae)},this.setSize=function(T,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,ae=U,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),G===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*Y,ae*Y).floor()},this.setDrawingBufferSize=function(T,U,G){Z=T,ae=U,Y=G,t.width=Math.floor(T*G),t.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Ne)},this.setViewport=function(T,U,G,V){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,U,G,V),Ge.viewport(P.copy(Ne).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,U,G,V){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,U,G,V),Ge.scissor(N.copy(it).multiplyScalar(Y).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){Ge.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){Ae=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(T=!0,U=!0,G=!0){let V=0;if(T){let H=!1;if(F!==null){let oe=F.texture.format;H=oe===Ah||oe===_h||oe===vh}if(H){let oe=F.texture.type,ye=oe===Ii||oe===Li||oe===Yr||oe===ur||oe===gh||oe===Eh,xe=Ve.getClearColor(),Ce=Ve.getClearAlpha(),qe=xe.r,$e=xe.g,Fe=xe.b;ye?(g[0]=qe,g[1]=$e,g[2]=Fe,g[3]=Ce,B.clearBufferuiv(B.COLOR,0,g)):(E[0]=qe,E[1]=$e,E[2]=Fe,E[3]=Ce,B.clearBufferiv(B.COLOR,0,E))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT),G&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Me.dispose(),dt.dispose(),Oe.dispose(),M.dispose(),k.dispose(),J.dispose(),Lt.dispose(),D.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",ed),q.removeEventListener("sessionend",td),hs.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let T=Ht.autoReset,U=Se.enabled,G=Se.autoUpdate,V=Se.needsUpdate,H=Se.type;ue(),Ht.autoReset=T,Se.enabled=U,Se.autoUpdate=G,Se.needsUpdate=V,Se.type=H}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){let U=T.target;U.removeEventListener("dispose",Ze),Xt(U)}function Xt(T){un(T),Oe.remove(T)}function un(T){let U=Oe.get(T).programs;U!==void 0&&(U.forEach(function(G){De.releaseProgram(G)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,V,H,oe){U===null&&(U=kt);let ye=H.isMesh&&H.matrixWorld.determinant()<0,xe=Yf(T,U,G,V,H);Ge.setMaterial(V,ye);let Ce=G.index,qe=1;if(V.wireframe===!0){if(Ce=te.getWireframeAttribute(G),Ce===void 0)return;qe=2}let $e=G.drawRange,Fe=G.attributes.position,pt=$e.start*qe,Dt=($e.start+$e.count)*qe;oe!==null&&(pt=Math.max(pt,oe.start*qe),Dt=Math.min(Dt,(oe.start+oe.count)*qe)),Ce!==null?(pt=Math.max(pt,0),Dt=Math.min(Dt,Ce.count)):Fe!=null&&(pt=Math.max(pt,0),Dt=Math.min(Dt,Fe.count));let Bt=Dt-pt;if(Bt<0||Bt===1/0)return;Lt.setup(H,V,xe,G,Ce);let Tn,vt=Te;if(Ce!==null&&(Tn=K.get(Ce),vt=lt,vt.setIndex(Tn)),H.isMesh)V.wireframe===!0?(Ge.setLineWidth(V.wireframeLinewidth*$t()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(H.isLine){let Ue=V.linewidth;Ue===void 0&&(Ue=1),Ge.setLineWidth(Ue*$t()),H.isLineSegments?vt.setMode(B.LINES):H.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else H.isPoints?vt.setMode(B.POINTS):H.isSprite&&vt.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)vt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))vt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ue=H._multiDrawStarts,Ai=H._multiDrawCounts,_t=H._multiDrawCount,$n=Ce?K.get(Ce).bytesPerElement:1,Ns=Oe.get(V).currentProgram.getUniforms();for(let Ln=0;Ln<_t;Ln++)Ns.setValue(B,"_gl_DrawID",Ln),vt.render(Ue[Ln]/$n,Ai[Ln])}else if(H.isInstancedMesh)vt.renderInstances(pt,Bt,H.count);else if(G.isInstancedBufferGeometry){let Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ai=Math.min(G.instanceCount,Ue);vt.renderInstances(pt,Bt,Ai)}else vt.render(pt,Bt)};function St(T,U,G){T.transparent===!0&&T.side===At&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,vo(T,U,G),T.side=$i,T.needsUpdate=!0,vo(T,U,G),T.side=At):vo(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),p=dt.get(G),p.init(U),v.push(p),G.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==G&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let V=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let oe=H.material;if(oe)if(Array.isArray(oe))for(let ye=0;ye<oe.length;ye++){let xe=oe[ye];St(xe,G,H),V.add(xe)}else St(oe,G,H),V.add(oe)}),v.pop(),p=null,V},this.compileAsync=function(T,U,G=null){let V=this.compile(T,U,G);return new Promise(H=>{function oe(){if(V.forEach(function(ye){Oe.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){H(T);return}setTimeout(oe,10)}ot.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Zn=null;function _i(T){Zn&&Zn(T)}function ed(){hs.stop()}function td(){hs.start()}let hs=new Bu;hs.setAnimationLoop(_i),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(T){Zn=T,q.setAnimationLoop(T),T===null?hs.stop():hs.start()},q.addEventListener("sessionstart",ed),q.addEventListener("sessionend",td),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,F),p=dt.get(T,v.length),p.init(U),v.push(p),We.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(We),Pe=this.localClippingEnabled,le=re.init(this.clippingPlanes,Pe),m=Me.get(T,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){let oe=y.xr.getDepthSensingMesh();oe!==null&&rl(oe,U,-1/0,y.sortObjects)}rl(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,Ae),ht=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ht&&Ve.addToRenderList(m,T),this.info.render.frame++,le===!0&&re.beginShadows();let G=p.state.shadowsArray;Se.render(G,T,U),le===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,H=m.transmissive;if(p.setupLights(),U.isArrayCamera){let oe=U.cameras;if(H.length>0)for(let ye=0,xe=oe.length;ye<xe;ye++){let Ce=oe[ye];id(V,H,T,Ce)}ht&&Ve.render(T);for(let ye=0,xe=oe.length;ye<xe;ye++){let Ce=oe[ye];nd(m,T,Ce,Ce.viewport)}}else H.length>0&&id(V,H,T,U),ht&&Ve.render(T),nd(m,T,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,U),Lt.resetDefaultState(),S=-1,A=null,v.pop(),v.length>0?(p=v[v.length-1],le===!0&&re.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function rl(T,U,G,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){V&&st.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);let ye=J.update(T),xe=T.material;xe.visible&&m.push(T,ye,xe,G,st.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){let ye=J.update(T),xe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),st.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),st.copy(ye.boundingSphere.center)),st.applyMatrix4(T.matrixWorld).applyMatrix4(We)),Array.isArray(xe)){let Ce=ye.groups;for(let qe=0,$e=Ce.length;qe<$e;qe++){let Fe=Ce[qe],pt=xe[Fe.materialIndex];pt&&pt.visible&&m.push(T,ye,pt,G,st.z,Fe)}}else xe.visible&&m.push(T,ye,xe,G,st.z,null)}}let oe=T.children;for(let ye=0,xe=oe.length;ye<xe;ye++)rl(oe[ye],U,G,V)}function nd(T,U,G,V){let H=T.opaque,oe=T.transmissive,ye=T.transparent;p.setupLightsView(G),le===!0&&re.setGlobalState(y.clippingPlanes,G),V&&Ge.viewport(P.copy(V)),H.length>0&&yo(H,U,G),oe.length>0&&yo(oe,U,G),ye.length>0&&yo(ye,U,G),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function id(T,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new sn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Cn:Ii,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let oe=p.state.transmissionRenderTarget[V.id],ye=V.viewport||P;oe.setSize(ye.z,ye.w);let xe=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(W),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),ht&&Ve.render(G);let Ce=y.toneMapping;y.toneMapping=ui;let qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),le===!0&&re.setGlobalState(y.clippingPlanes,V),yo(T,G,V),x.updateMultisampleRenderTarget(oe),x.updateRenderTargetMipmap(oe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Fe=0,pt=U.length;Fe<pt;Fe++){let Dt=U[Fe],Bt=Dt.object,Tn=Dt.geometry,vt=Dt.material,Ue=Dt.group;if(vt.side===At&&Bt.layers.test(V.layers)){let Ai=vt.side;vt.side=nn,vt.needsUpdate=!0,sd(Bt,G,V,Tn,vt,Ue),vt.side=Ai,vt.needsUpdate=!0,$e=!0}}$e===!0&&(x.updateMultisampleRenderTarget(oe),x.updateRenderTargetMipmap(oe))}y.setRenderTarget(xe),y.setClearColor(W,ee),qe!==void 0&&(V.viewport=qe),y.toneMapping=Ce}function yo(T,U,G){let V=U.isScene===!0?U.overrideMaterial:null;for(let H=0,oe=T.length;H<oe;H++){let ye=T[H],xe=ye.object,Ce=ye.geometry,qe=V===null?ye.material:V,$e=ye.group;xe.layers.test(G.layers)&&sd(xe,U,G,Ce,qe,$e)}}function sd(T,U,G,V,H,oe){T.onBeforeRender(y,U,G,V,H,oe),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,U,G,V,T,oe),H.transparent===!0&&H.side===At&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,y.renderBufferDirect(G,U,V,H,T,oe),H.side=$i,H.needsUpdate=!0,y.renderBufferDirect(G,U,V,H,T,oe),H.side=At):y.renderBufferDirect(G,U,V,H,T,oe),T.onAfterRender(y,U,G,V,H,oe)}function vo(T,U,G){U.isScene!==!0&&(U=kt);let V=Oe.get(T),H=p.state.lights,oe=p.state.shadowsArray,ye=H.state.version,xe=De.getParameters(T,H.state,oe,U,G),Ce=De.getProgramCacheKey(xe),qe=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",Ze),qe=new Map,V.programs=qe);let $e=qe.get(Ce);if($e!==void 0){if(V.currentProgram===$e&&V.lightsStateVersion===ye)return od(T,xe),$e}else xe.uniforms=De.getUniforms(T),T.onBeforeCompile(xe,y),$e=De.acquireProgram(xe,Ce),qe.set(Ce,$e),V.uniforms=xe.uniforms;let Fe=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=re.uniform),od(T,xe),V.needsLights=$f(T),V.lightsStateVersion=ye,V.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=$e,V.uniformsList=null,$e}function rd(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=lr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function od(T,U){let G=Oe.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Yf(T,U,G,V,H){U.isScene!==!0&&(U=kt),x.resetTextureUnits();let oe=U.fog,ye=V.isMeshStandardMaterial?U.environment:null,xe=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ts,Ce=(V.isMeshStandardMaterial?k:M).get(V.envMap||ye),qe=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$e=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!G.morphAttributes.position,pt=!!G.morphAttributes.normal,Dt=!!G.morphAttributes.color,Bt=ui;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Bt=y.toneMapping);let Tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,vt=Tn!==void 0?Tn.length:0,Ue=Oe.get(V),Ai=p.state.lights;if(le===!0&&(Pe===!0||T!==A)){let zn=T===A&&V.id===S;re.setState(V,T,zn)}let _t=!1;V.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ai.state.version||Ue.outputColorSpace!==xe||H.isBatchedMesh&&Ue.batching===!1||!H.isBatchedMesh&&Ue.batching===!0||H.isBatchedMesh&&Ue.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ue.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ue.instancing===!1||!H.isInstancedMesh&&Ue.instancing===!0||H.isSkinnedMesh&&Ue.skinning===!1||!H.isSkinnedMesh&&Ue.skinning===!0||H.isInstancedMesh&&Ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ue.instancingMorph===!1&&H.morphTexture!==null||Ue.envMap!==Ce||V.fog===!0&&Ue.fog!==oe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==qe||Ue.vertexTangents!==$e||Ue.morphTargets!==Fe||Ue.morphNormals!==pt||Ue.morphColors!==Dt||Ue.toneMapping!==Bt||Ue.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,Ue.__version=V.version);let $n=Ue.currentProgram;_t===!0&&($n=vo(V,U,H));let Ns=!1,Ln=!1,Cr=!1,Nt=$n.getUniforms(),oi=Ue.uniforms;if(Ge.useProgram($n.program)&&(Ns=!0,Ln=!0,Cr=!0),V.id!==S&&(S=V.id,Ln=!0),Ns||A!==T){Ge.buffers.depth.getReversed()?(pe.copy(T.projectionMatrix),N0(pe),O0(pe),Nt.setValue(B,"projectionMatrix",pe)):Nt.setValue(B,"projectionMatrix",T.projectionMatrix),Nt.setValue(B,"viewMatrix",T.matrixWorldInverse);let Ni=Nt.map.cameraPosition;Ni!==void 0&&Ni.setValue(B,Ye.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Ln=!0,Cr=!0)}if(H.isSkinnedMesh){Nt.setOptional(B,H,"bindMatrix"),Nt.setOptional(B,H,"bindMatrixInverse");let zn=H.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Nt.setValue(B,"boneTexture",zn.boneTexture,x))}H.isBatchedMesh&&(Nt.setOptional(B,H,"batchingTexture"),Nt.setValue(B,"batchingTexture",H._matricesTexture,x),Nt.setOptional(B,H,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",H._indirectTexture,x),Nt.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",H._colorsTexture,x));let Fr=G.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&Xe.update(H,G,$n),(Ln||Ue.receiveShadow!==H.receiveShadow)&&(Ue.receiveShadow=H.receiveShadow,Nt.setValue(B,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(oi.envMap.value=Ce,oi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(oi.envMapIntensity.value=U.environmentIntensity),Ln&&(Nt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ue.needsLights&&Zf(oi,Cr),oe&&V.fog===!0&&me.refreshFogUniforms(oi,oe),me.refreshMaterialUniforms(oi,V,Y,ae,p.state.transmissionRenderTarget[T.id]),lr.upload(B,rd(Ue),oi,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lr.upload(B,rd(Ue),oi,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(B,"center",H.center),Nt.setValue(B,"modelViewMatrix",H.modelViewMatrix),Nt.setValue(B,"normalMatrix",H.normalMatrix),Nt.setValue(B,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let zn=V.uniformsGroups;for(let Ni=0,Oi=zn.length;Ni<Oi;Ni++){let ad=zn[Ni];D.update(ad,$n),D.bind(ad,$n)}}return $n}function Zf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function $f(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,G){Oe.get(T.texture).__webglTexture=U,Oe.get(T.depthTexture).__webglTexture=G;let V=Oe.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let G=Oe.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){F=T,C=U,b=G;let V=!0,H=null,oe=!1,ye=!1;if(T){let Ce=Oe.get(T);if(Ce.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(Ce.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(Ce.__hasExternalTextures)x.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Fe=T.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&Oe.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ye=!0);let $e=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[U])?H=$e[U][G]:H=$e[U],oe=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?H=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?H=$e[G]:H=$e,P.copy(T.viewport),N.copy(T.scissor),O=T.scissorTest}else P.copy(Ne).multiplyScalar(Y).floor(),N.copy(it).multiplyScalar(Y).floor(),O=Pt;if(Ge.bindFramebuffer(B.FRAMEBUFFER,H)&&V&&Ge.drawBuffers(T,H),Ge.viewport(P),Ge.scissor(N),Ge.setScissorTest(O),oe){let Ce=Oe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ce.__webglTexture,G)}else if(ye){let Ce=Oe.get(T.texture),qe=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,qe)}S=-1},this.readRenderTargetPixels=function(T,U,G,V,H,oe,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(xe=xe[ye]),xe){Ge.bindFramebuffer(B.FRAMEBUFFER,xe);try{let Ce=T.texture,qe=Ce.format,$e=Ce.type;if(!at.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&G>=0&&G<=T.height-H&&B.readPixels(U,G,V,H,Ke.convert(qe),Ke.convert($e),oe)}finally{let Ce=F!==null?Oe.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,V,H,oe,ye){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(xe=xe[ye]),xe){let Ce=T.texture,qe=Ce.format,$e=Ce.type;if(!at.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&G>=0&&G<=T.height-H){Ge.bindFramebuffer(B.FRAMEBUFFER,xe);let Fe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.bufferData(B.PIXEL_PACK_BUFFER,oe.byteLength,B.STREAM_READ),B.readPixels(U,G,V,H,Ke.convert(qe),Ke.convert($e),0);let pt=F!==null?Oe.get(F).__webglFramebuffer:null;Ge.bindFramebuffer(B.FRAMEBUFFER,pt);let Dt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await B0(B,Dt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,oe),B.deleteBuffer(Fe),B.deleteSync(Dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,G=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let V=Math.pow(2,-G),H=Math.floor(T.image.width*V),oe=Math.floor(T.image.height*V),ye=U!==null?U.x:0,xe=U!==null?U.y:0;x.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,ye,xe,H,oe),Ge.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,V=null,H=0){T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],H=arguments[3]||0,G=null);let oe,ye,xe,Ce,qe,$e,Fe,pt,Dt,Bt=T.isCompressedTexture?T.mipmaps[H]:T.image;G!==null?(oe=G.max.x-G.min.x,ye=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,qe=G.min.y,$e=G.isBox3?G.min.z:0):(oe=Bt.width,ye=Bt.height,xe=Bt.depth||1,Ce=0,qe=0,$e=0),V!==null?(Fe=V.x,pt=V.y,Dt=V.z):(Fe=0,pt=0,Dt=0);let Tn=Ke.convert(U.format),vt=Ke.convert(U.type),Ue;U.isData3DTexture?(x.setTexture3D(U,0),Ue=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Ue=B.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Ue=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Ai=B.getParameter(B.UNPACK_ROW_LENGTH),_t=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$n=B.getParameter(B.UNPACK_SKIP_PIXELS),Ns=B.getParameter(B.UNPACK_SKIP_ROWS),Ln=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ce),B.pixelStorei(B.UNPACK_SKIP_ROWS,qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);let Cr=T.isDataArrayTexture||T.isData3DTexture,Nt=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let oi=Oe.get(T),Fr=Oe.get(U),zn=Oe.get(oi.__renderTarget),Ni=Oe.get(Fr.__renderTarget);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,zn.__webglFramebuffer),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Oi=0;Oi<xe;Oi++)Cr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(T).__webglTexture,H,$e+Oi),T.isDepthTexture?(Nt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,H,Dt+Oi),B.blitFramebuffer(Ce,qe,oe,ye,Fe,pt,oe,ye,B.DEPTH_BUFFER_BIT,B.NEAREST)):Nt?B.copyTexSubImage3D(Ue,H,Fe,pt,Dt+Oi,Ce,qe,oe,ye):B.copyTexSubImage2D(Ue,H,Fe,pt,Dt+Oi,Ce,qe,oe,ye);Ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Nt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ue,H,Fe,pt,Dt,oe,ye,xe,Tn,vt,Bt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Ue,H,Fe,pt,Dt,oe,ye,xe,Tn,Bt.data):B.texSubImage3D(Ue,H,Fe,pt,Dt,oe,ye,xe,Tn,vt,Bt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,H,Fe,pt,oe,ye,Tn,vt,Bt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,H,Fe,pt,Bt.width,Bt.height,Tn,Bt.data):B.texSubImage2D(B.TEXTURE_2D,H,Fe,pt,oe,ye,Tn,vt,Bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ai),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$n),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ns),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ln),H===0&&U.generateMipmaps&&B.generateMipmap(Ue),Ge.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G=null,V=null,H=0){return T.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],H=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,G,V,H)},this.initRenderTarget=function(T){Oe.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){C=0,b=0,F=null,Ge.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}},Re=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ga=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},An=new I,Ea=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Er=class extends Ui{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,Ur=new I,er=new I,tr=new I,nr=new ie,Hr=new ie,Gu=new Ct,ko=new I,Br=new I,Go=new I,ou=new ie,Hl=new ie,au=new ie,$r=class extends zt{constructor(e=new Er){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vc(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new Ea(i,3,0,!1)),js.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=js,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Gu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Vo(ko.set(-.5,-.5,0),tr,o,er,s,r),Vo(Br.set(.5,-.5,0),tr,o,er,s,r),Vo(Go.set(.5,.5,0),tr,o,er,s,r),ou.set(0,0),Hl.set(1,0),au.set(1,1);let a=e.ray.intersectTriangle(ko,Br,Go,!1,Ur);if(a===null&&(Vo(Br.set(-.5,.5,0),tr,o,er,s,r),Hl.set(0,1),a=e.ray.intersectTriangle(ko,Go,Br,!1,Ur),a===null))return;let l=e.ray.origin.distanceTo(Ur);l<e.near||l>e.far||t.push({distance:l,point:Ur.clone(),uv:Yi.getInterpolation(Ur,ko,Br,Go,ou,Hl,au,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vo(n,e,t,i,s,r){nr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Hr.x=r*nr.x-s*nr.y,Hr.y=s*nr.x+r*nr.y):Hr.copy(nr),n.copy(e),n.x+=Hr.x,n.y+=Hr.y,n.applyMatrix4(Gu)}var Wc=class extends wn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Hn,h=Hn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ya=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new Ct,lu=new Ct,Wo=[],cu=new Di,Ig=new Ct,Nr=new z,Or=new Ki,va=class extends z{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ya(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ig)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),cu.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(cu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ir),Or.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(i),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),lu.multiplyMatrices(i,ir),Nr.matrixWorld=lu,Nr.raycast(e,Wo);for(let o=0,a=Wo.length;o<a;o++){let l=Wo[o];l.instanceId=r,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wc(new Float32Array(s*this.count),s,this.count,yh,hi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yr=class extends Ui{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hu=new Ct,Xc=new la,Xo=new Ki,qo=new I,Jr=class extends zt{constructor(e=new qt,t=new yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;hu.copy(s).invert(),Xc.copy(e.ray).applyMatrix4(hu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,E=f;g<E;g++){let m=c.getX(g);qo.fromBufferAttribute(d,m),du(qo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,E=f;g<E;g++)qo.fromBufferAttribute(d,g),du(qo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function du(n,e,t,i,s,r,o){let a=Xc.distanceSqToPoint(n);if(a<t){let l=new I;Xc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ei=class extends wn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ie:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new Ct;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(mn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(mn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qr=class extends Gn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qc=class extends Qr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Sh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Yo=new I,Bl=new Sh,Nl=new Sh,Ol=new Sh,es=class extends Gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yo.subVectors(s[0],s[1]).add(s[0]),c=Yo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),E=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Bl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Nl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),Ol.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Nl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ol.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Bl.calc(l),Nl.calc(l),Ol.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Lg(n,e){let t=1-n;return t*t*e}function Dg(n,e){return 2*(1-n)*n*e}function Ug(n,e){return n*n*e}function Wr(n,e,t,i){return Lg(n,e)+Dg(n,t)+Ug(n,i)}function Hg(n,e){let t=1-n;return t*t*t*e}function Bg(n,e){let t=1-n;return 3*t*t*n*e}function Ng(n,e){return 3*(1-n)*n*n*e}function Og(n,e){return n*n*n*e}function Xr(n,e,t,i,s){return Hg(n,e)+Bg(n,t)+Ng(n,i)+Og(n,s)}var _a=class extends Gn{constructor(e=new ie,t=new ie,i=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(e,s.x,r.x,o.x,a.x),Xr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yc=class extends Gn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(e,s.x,r.x,o.x,a.x),Xr(e,s.y,r.y,o.y,a.y),Xr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Gn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends Gn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends Gn{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Gn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y),Wr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(uu(a,l.x,c.x,h.x,d.x),uu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},$c=Object.freeze({__proto__:null,ArcCurve:qc,CatmullRomCurve3:es,CubicBezierCurve:_a,CubicBezierCurve3:Yc,EllipseCurve:Qr,LineCurve:Aa,LineCurve3:Zc,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:Sa,SplineCurve:Ta}),Jc=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $c[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new $c[s.type]().fromJSON(s))}return this}},ba=class extends Jc{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Aa(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ma(this.currentPoint.clone(),new ie(e,t),new ie(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new _a(this.currentPoint.clone(),new ie(e,t),new ie(i,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ta(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Qr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var hn=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},et=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,E=[],m=i/2,p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(f,2));function _(){let y=new I,L=new I,C=0,b=(t-e)/i;for(let F=0;F<=r;F++){let S=[],A=F/r,P=A*(t-e)+e;for(let N=0;N<=s;N++){let O=N/s,W=O*l+a,ee=Math.sin(W),Z=Math.cos(W);L.x=P*ee,L.y=-A*i+m,L.z=P*Z,d.push(L.x,L.y,L.z),y.set(ee,b,Z).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-A),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let A=E[S][F],P=E[S+1][F],N=E[S+1][F+1],O=E[S][F+1];(e>0||S!==0)&&(h.push(A,P,O),C+=3),(t>0||S!==r-1)&&(h.push(P,N,O),C+=3)}c.addGroup(p,C,0),p+=C}function v(y){let L=g,C=new ie,b=new I,F=0,S=y===!0?e:t,A=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let W=N/s*l+a,ee=Math.cos(W),Z=Math.sin(W);b.x=S*Z,b.y=m*A,b.z=S*ee,d.push(b.x,b.y,b.z),u.push(0,A,0),C.x=ee*.5+.5,C.y=Z*.5*A+.5,f.push(C.x,C.y),g++}for(let N=0;N<s;N++){let O=L+N,W=P+N;y===!0?h.push(W,W+1,O):h.push(W+1,W,O),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},dn=class n extends et{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qc=class n extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let v=new I,y=new I,L=new I;for(let C=0;C<t.length;C+=3)f(t[C+0],v),f(t[C+1],y),f(t[C+2],L),l(v,y,L,_)}function l(_,v,y,L){let C=L+1,b=[];for(let F=0;F<=C;F++){b[F]=[];let S=_.clone().lerp(y,F/C),A=v.clone().lerp(y,F/C),P=C-F;for(let N=0;N<=P;N++)N===0&&F===C?b[F][N]=S:b[F][N]=S.clone().lerp(A,N/P)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let A=Math.floor(S/2);S%2===0?(u(b[F][A+1]),u(b[F+1][A]),u(b[F][A])):(u(b[F][A+1]),u(b[F+1][A+1]),u(b[F+1][A]))}}function c(_){let v=new I;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(_),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let y=m(_)/2/Math.PI+.5,L=p(_)/Math.PI+.5;o.push(y,1-L)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let v=o[_+0],y=o[_+2],L=o[_+4],C=Math.max(v,y,L),b=Math.min(v,y,L);C>.9&&b<.1&&(v<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),L<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,v){let y=_*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){let _=new I,v=new I,y=new I,L=new I,C=new ie,b=new ie,F=new ie;for(let S=0,A=0;S<r.length;S+=9,A+=6){_.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[A+0],o[A+1]),b.set(o[A+2],o[A+3]),F.set(o[A+4],o[A+5]),L.copy(_).add(v).add(y).divideScalar(3);let P=m(L);E(C,A+0,_,P),E(b,A+2,v,P),E(F,A+4,y,P)}}function E(_,v,y,L){L<0&&_.x===1&&(o[v]=_.x-1),y.x===0&&y.z===0&&(o[v]=L/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Hi=class n extends Qc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Kr=class extends ba{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ba().fromJSON(s))}return this}},zg={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Vu(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(i&&(r=Xg(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)d=n[g],u=n[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return jr(r,o,t,a,l,f,0),o}};function Vu(n,e,t,i,s){let r,o;if(s===nE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=fu(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=fu(r,n[r],n[r+1],o);return o&&Ia(o,o.next)&&(to(o),o=o.next),o}function Ms(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ia(t,t.next)||Vt(t.prev,t,t.next)===0)){if(to(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function jr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Jg(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Gg(n,i,s,r):kg(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),to(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Vg(Ms(n),e,t),jr(n,e,t,i,s,r,2)):o===2&&Wg(n,e,t,i,s,r):jr(Ms(n),e,t,i,s,r,1);break}}}function kg(n){let e=n.prev,t=n,i=n.next;if(Vt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&rr(s,a,r,l,o,c,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gg(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,E=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Kc(f,g,e,t,i),_=Kc(E,m,e,t,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=f&&v.x<=E&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&rr(a,h,l,d,c,u,v.x,v.y)&&Vt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,h,l,d,c,u,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=E&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&rr(a,h,l,d,c,u,v.x,v.y)&&Vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=E&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rr(a,h,l,d,c,u,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vg(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Ia(s,r)&&Wu(s,i,i.next,r)&&eo(s,r)&&eo(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),to(i),to(i.next),i=n=r),i=i.next}while(i!==n);return Ms(i)}function Wg(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jg(o,a)){let l=Xu(o,a);o=Ms(o,o.next),l=Ms(l,l.next),jr(o,e,t,i,s,r,0),jr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Xg(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Vu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Kg(c));for(s.sort(qg),r=0;r<s.length;r++)t=Yg(s[r],t);return t}function qg(n,e){return n.x-e.x}function Yg(n,e){let t=Zg(n,e);if(!t)return e;let i=Xu(t,n);return Ms(i,i.next),Ms(t,t.next)}function Zg(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&rr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),eo(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&$g(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function $g(n,e){return Vt(n.prev,n,e.prev)<0&&Vt(e.next,n,n.next)<0}function Jg(n,e,t,i){let s=n;do s.z===0&&(s.z=Kc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Kc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Kg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function rr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function jg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!eE(n,e)&&(eo(n,e)&&eo(e,n)&&tE(n,e)&&(Vt(n.prev,n,e.prev)||Vt(n,e.prev,e))||Ia(n,e)&&Vt(n.prev,n,n.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ia(n,e){return n.x===e.x&&n.y===e.y}function Wu(n,e,t,i){let s=$o(Vt(n,e,t)),r=$o(Vt(n,e,i)),o=$o(Vt(t,i,n)),a=$o(Vt(t,i,e));return!!(s!==r&&o!==a||s===0&&Zo(n,t,e)||r===0&&Zo(n,i,e)||o===0&&Zo(t,n,i)||a===0&&Zo(t,e,i))}function Zo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function $o(n){return n>0?1:n<0?-1:0}function eE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function eo(n,e){return Vt(n.prev,n,n.next)<0?Vt(n,e,n.next)>=0&&Vt(n,n.prev,e)>=0:Vt(n,e,n.prev)<0||Vt(n,n.next,e)<0}function tE(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xu(n,e){let t=new jc(n.i,n.x,n.y),i=new jc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function fu(n,e,t,i){let s=new jc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function to(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var qr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];pu(e),mu(i,e);let o=e.length;t.forEach(pu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,mu(i,t[l]);let a=zg.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function pu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function mu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var wa=class n extends qt{constructor(e=new Kr([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;qr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];qr.isClockWise(_)===!0&&(g[m]=_.reverse())}let E=qr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=E.length;m<p;m++){let _=E[m],v=_[0]+d,y=_[1]+d,L=_[2]+d;i.push(v,y,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return iE(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function iE(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Tt=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],E=[],m=[];for(let p=0;p<=i;p++){let _=[],v=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let C=L/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-v),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let v=h[p][_+1],y=h[p][_],L=h[p+1][_],C=h[p+1][_+1];(p!==0||o>0)&&f.push(v,y,C),(p!==i-1||l<Math.PI)&&f.push(y,L,C)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(E,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gn=class n extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let E=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let E=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(E,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ss=class n extends qt{constructor(e=new Sa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ie,h=new I,d=[],u=[],f=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(f,2));function E(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),p()}function m(v){h=e.getPointAt(v/t,h);let y=o.normals[v],L=o.binormals[v];for(let C=0;C<=s;C++){let b=C/s*Math.PI*2,F=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+F*L.x,l.y=S*y.y+F*L.y,l.z=S*y.z+F*L.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=s;y++){let L=(s+1)*(v-1)+(y-1),C=(s+1)*v+(y-1),b=(s+1)*v+y,F=(s+1)*(v-1)+y;g.push(L,C,F),g.push(C,b,F)}}function _(){for(let v=0;v<=t;v++)for(let y=0;y<=s;y++)c.x=v/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new $c[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var He=class extends Ui{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Jo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function sE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var vr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eh=class extends vr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dd,endingEnd:dd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ud:r=e,a=2*t-i;break;case fd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ud:o=e,l=2*i-t;break;case fd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,p=-u*m+2*u*E-u*g,_=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*E+.5*g,y=f*m-f*E;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+_*o[c+L]+v*o[l+L]+y*o[d+L];return r}},th=class extends vr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},nh=class extends vr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case wc:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return wc;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===al,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=wc;var Ts=class extends ti{constructor(e,t,i){super(e,t,i)}};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=na;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends ti{};ih.prototype.ValueTypeName="color";var sh=class extends ti{};sh.prototype.ValueTypeName="number";var rh=class extends vr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ra=class extends ti{InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends ti{constructor(e,t,i){super(e,t,i)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=na;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends ti{};oh.prototype.ValueTypeName="vector";var ah=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},rE=new ah,lh=class{constructor(e){this.manager=e!==void 0?e:rE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};lh.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},we=class extends _r{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zl=new Ct,gu=new I,Eu=new I,no=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ch=class extends no{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=sa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xn=class extends _r{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yu=new Ct,zr=new I,kl=new I,hh=class extends no{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(zr),kl.copy(i.position),kl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(kl),i.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),yu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}},nt=class extends _r{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dh=class extends no{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pi=class extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vu(){return 0}var Th="\\[\\]\\.:\\/",oE=new RegExp("["+Th+"]","g"),bh="[^"+Th+"]",aE="[^"+Th.replace("\\.","")+"]",lE=/((?:WC+[\/:])*)/.source.replace("WC",bh),cE=/(WCOD+)?/.source.replace("WCOD",aE),hE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),dE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),uE=new RegExp("^"+lE+cE+hE+dE+"$"),fE=["material","materials","bones","map"],uh=class{constructor(e,t,i){let s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oE,"")}static parseTrackName(e){let t=uE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=uh;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);var La={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Bi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pE=new mr(-1,1,1,-1,0,1),wh=class extends qt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},mE=new wh,Tr=class{constructor(e){this._mesh=new z(mE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ws=class extends Bi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mr.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Tr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var io=class extends Bi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Da=class extends Bi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ua=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ws(La),this.copyPass.material.blending=di,this.clock=new xa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}io!==void 0&&(o instanceof io?i=!0:o instanceof Da&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var br=class n extends Bi{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new he(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new sn(r,o,{type:Cn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new sn(r,o,{type:Cn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=qu;this.highPassUniforms=Mr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=La;this.copyUniforms=Mr.clone(h.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new he,this.oldClearAlpha=1,this.basic=new tt,this.fsQuad=new Tr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};br.BlurDirectionX=new ie(1,0);br.BlurDirectionY=new ie(0,1);var Rs=1280,xs=720;function Ie(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Rh=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),gt=(n,e,t)=>n+(e-n)*t,ze=(n,e,t)=>{let i=Rh((t-n)/(e-n));return i*i*(3-2*i)};var gE=n=>(n=Rh(n),n*n*(3-2*n));function Ba(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=gE((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>gt(o,r[a],i)):gt(s,r,i)}return n[n.length-1][1]}var EE={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ie(Rs,xs)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},yE={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new he(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Ha=class{constructor(e){let t=this.r=new ma({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(Rs,xs,!1),t.shadowMap.enabled=!0,t.shadowMap.type=ph,t.toneMapping=ui,t.outputColorSpace=ts;let i=new gr(Rs,xs);i.type=Li,this.rt=new sn(Rs,xs,{type:Cn,samples:2,depthTexture:i}),this.composer=new Ua(t,new sn(Rs,xs,{type:Cn})),this.dof=new ws(EE,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new br(new ie(Rs/2,xs/2),.45,.75,.82),this.grade=new ws(yE),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function Yu(n,e,t,i=40){let s=new ga;s.background=new he(t);let r=new ln(i,Rs/xs,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function Zu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var Pn=1/420,xh=new Map;function In(n,e,t,i){if(xh.has(n))return xh.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new ei(s);return o.colorSpace=Gt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,xh.set(n,o),o}var Et=n=>new Path2D(n);function on(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function ni(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var vE={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function _E(n,e){return In("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=Et("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");on(t,i,ni(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(Et("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(Et("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(Et("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=Et("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){on(t,Et("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),ni(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(Et("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(Et("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(Et("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(Et("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(Et("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")on(t,Et("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),ni(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(Et("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(Et("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(Et("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){on(t,Et("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),ni(t,-60,0,60,120,n.a,n.b)),on(t,Et("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),ni(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else on(t,Et("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),ni(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(Et("M-22 26 L22 26 L0 64Z")),on(t,Et("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function $u(n,e,t){return In("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(on(i,Et("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),ni(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(on(i,Et("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;on(i,Et(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),ni(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(Et(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(Et(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function AE(){return In("hand",90,100,n=>{n.translate(45,14);let e=Et("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");on(n,e,ni(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function Ju(n){return In("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function ME(){return In("foot",80,40,n=>{n.translate(26,6),on(n,Et("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function SE(n="round"){return In("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var ju={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function TE(n,e){return In("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),ju[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function bE(n,e,t){return In("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=Et("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");on(i,s,ni(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),on(i,s,e);let r=Et("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");on(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),on(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=Et("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");on(i,s,ni(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),on(i,l,"#E9E9EF")})})})}var Qu=(n,e={})=>new tt({map:n,alphaTest:.5,alphaToCoverage:!0,side:At,...e}),Ku=new Map,Ch=new Map,wE=[];function RE(n){if(Ch.has(n))return Ch.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new ei(t);return r.colorSpace=Gt,r.anisotropy=8,Ch.set(n,r),r}function Fn(n,e,t,i,s,r=0,o,a=!1){let l=new be(e*Pn,t*Pn);l.translate((e/2-i)*Pn,(s-t/2)*Pn,0);let c=Qu(n);o.push(c);let h=new z(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=Qu(RE(n),{color:"#FFE9C8"});wE.push(u);let f=new z(l,u);f.position.z=-.045-r,h.add(f)}let d=Ku.get(n);return d||(d=new ji({depthPacking:Ar,map:n,alphaTest:.5,side:At}),Ku.set(n,d)),h.customDepthMaterial=d,h}function xE(){return In("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function CE(){return In("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function Fh(n={}){let e=vE[n.outfit||"hero"],t=n.outfit||"hero",i=new ce,s=[],r=new ce;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,p,_]of[["L",-1,-.012],["R",1,-.01]]){let v=new ce;v.position.set(p*34*Pn,o*Pn,_);let y=new ce;y.position.y=-142*Pn,v.add(Fn(Ju(1),50,160,25,6,0,s)),y.add(Fn(Ju(1),50,160,25,6,0,s));let L=Fn(ME(),80,40,26,6,.001,s);L.position.y=-142*Pn,p<0&&(L.scale.x=-1),y.add(L),v.add(y),r.add(v),l[m]={th:v,shin:y}}let h=Fn(_E(e,t),300,320,150,20,0,s);h.position.y=(a+4)*Pn,r.add(h);for(let[m,p,_]of[["L",-1,-.006],["R",1,.006]]){let v=new ce;v.position.set(p*(e.kind==="dress"?66:84)*Pn,(a-24)*Pn,_);let y=new ce;y.position.y=-124*Pn,v.add(Fn($u(e,t,"u"),90,170,45,10,0,s)),y.add(Fn($u(e,t,"f"),90,170,45,10,.001,s));let L=Fn(AE(),90,100,45,14,.002,s);L.position.y=-128*Pn,L.scale.set(p>0?-.8:.8,.8,1),y.add(L),v.add(y),r.add(v),c[m]={u:v,f:y,hand:L}}let d=new ce;if(d.position.set(0,(a+104)*Pn,.02),r.add(d),n.hair){let m=Fn(bE(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Fn(SE(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Fn(In("fringe_"+n.hair+(n.hairc||""),300,300,p=>{p.translate(150,150);let _=n.hairc||"#4a2c1a";p.fillStyle=_,p.fill(Et(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),p.strokeStyle="#ffffff2c",p.lineWidth=5,p.beginPath(),p.moveTo(-70,-92),p.quadraticCurveTo(-10,-114,54,-96),p.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Fn(In("earring",300,300,p=>{p.translate(150,150),[-1,1].forEach(_=>{p.strokeStyle="#F2C94C",p.lineWidth=6,p.beginPath(),p.arc(_*124,58,15,0,7),p.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(ju)){let p=Fn(TE(m,n.lash),300,300,150,150,.002,s,!0);p.castShadow=!1,p.visible=m==="open",d.add(p),u[m]=p}if(n.glasses){let m=Fn(In("glasses",300,300,p=>{p.translate(150,150),p.strokeStyle="#E4E6EC",p.lineWidth=7,p.beginPath(),p.arc(-42,0,36,0,7),p.stroke(),p.beginPath(),p.arc(42,0,36,0,7),p.stroke(),p.beginPath(),p.moveTo(-6,0),p.lineTo(6,0),p.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Fn(n.hat(In),300,300,150,150,.006,s);d.add(m)}let f=new z(new be(1,.4),new tt({map:xE(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,i.add(f);let g=null;n.glow&&(g=new z(new be(2.1,3),new tt({map:CE(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:bn,side:At})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(p=>p.color.set(m))},eye(m){for(let p in u)u[p].visible=p===m},cheer(m,p=0,_=1){let v=m*6+p,y=Math.sin(v);E.pose({armL:[150+y*16*_,18+y*10],armR:[150-y*16*_,18-y*10],bob:Math.abs(Math.sin(v*.5))*.07*_,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(p=>{p.transparent=m<1,p.opacity=m,p.alphaTest=m<1?.02:.5,p.alphaToCoverage=m>=1,p.depthWrite=m>=1}),f.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let p=Math.PI/180,_=m.armL||[6,4],v=m.armR||[6,4],y=m.legL||[0,0],L=m.legR||[0,0];c.L.u.rotation.z=-_[0]*p,c.L.f.rotation.z=-_[1]*p,c.R.u.rotation.z=v[0]*p,c.R.f.rotation.z=v[1]*p,l.L.th.rotation.z=-y[0]*p,l.L.shin.rotation.z=-y[1]*p,l.R.th.rotation.z=L[0]*p,l.R.shin.rotation.z=L[1]*p,d.rotation.z=(m.head||0)*p,r.rotation.z=(m.lean||0)*p,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,p=1,_=1){let v=m*6.4*p,y=Math.sin(v),L=Math.cos(v);E.pose({legL:[y*15*_,Math.max(0,-y)*26*_],legR:[-y*15*_,Math.max(0,y)*26*_],armL:[8-y*12*_,6],armR:[8+y*12*_,6],bob:Math.abs(L)*.03*_,head:y*2})},place(m,p,_=0,v=1){i.position.set(m,_,p),i.scale.setScalar(v)},face(m){let p=m.position;i.rotation.y=Math.atan2(p.x-i.position.x,p.z-i.position.z),f.rotation.z=-i.rotation.y}};return E.pose(),E}function _e(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new ei(i);return r.colorSpace=Gt,r.anisotropy=8,r}var Cs=(n,e={})=>new He({color:n,roughness:.88,metalness:0,...e});function w(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new z(new Rn(n,e,t),typeof i=="string"?Cs(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function ke(n,e,t=1){let i=_e(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new $r(new Er({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:bn}));return s.scale.set(e,e,1),s}var ef=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function FE(n,e,t,i,s,r=.42){let o=Ie(n),a=256*e,l=300*t,c,h=_e(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,f,28,10);for(let f=0;f<t;f++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,f*300+292,a,8)}),d=_e(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let f=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,p=g*300+60,_=144,v=196,y=o()<r,L=o();if(f.fillStyle="#E8E0CE",f.fillRect(m-9,p-9,_+18,v+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(m-18,p+v+9,_+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(m-18,p+v+6,_+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(m,p,_,v),y||!s){let C=y?L<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=C,f.fillRect(m,p,26,v),f.fillRect(m+_-26,p,26,v)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(m+20,p+v),f.lineTo(m+90,p),f.lineTo(m+124,p),f.lineTo(m+54,p+v),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(m+_/2-3,p,6,v),f.fillRect(m,p+v*.45,_,6),y&&s&&(u.fillStyle=L<.5?"#FFC47A":"#FFD79C",u.fillRect(m,p,_,v),u.fillStyle="#000",u.fillRect(m+_/2-3,p,6,v),u.fillRect(m,p+v*.45,_,6))}h.needsUpdate=!0});return d.colorSpace=Gt,{map:h,emissiveMap:d}}function ns(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=Ie(n),u=new ce,f=o*2.9+3.6,g=c||ef[Math.floor(d()*ef.length)],E=Math.max(2,Math.round(r/2.1)),m=FE(n,E,o,g,l,e.lit??.42),p=new He({map:m.map,emissiveMap:m.emissiveMap,emissive:new he(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),_=Cs(g),v=[a>0?p:_,a>0?_:p,Cs("#2c2730"),_,_,_],y=new z(new Rn(s,o*2.9,r),v);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(w(s+.5,.5,r+.5,"#3d3540",t,f+.25,i)),u.add(w(s+.3,.35,r+.3,g,t,3.6,i));let L=t+a*(s/2+.01);if(h){let C=_e(1024,180,P=>{P.fillStyle=h.bg,P.fillRect(0,0,1024,180),P.fillStyle="#ffffff22",P.fillRect(0,0,1024,8),P.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,P.textAlign="center",P.textBaseline="middle",P.fillStyle=h.fg||"#FFF4DC",P.shadowColor=h.fg||"#FFF4DC",P.shadowBlur=l?26:0,P.fillText(h.name,512,96)}),b=new z(new Rn(.18,1.05,r-.3),[new He({map:C,emissiveMap:C,emissive:new he(l?.85:0,l?.85:0,l?.85:0)}),new He({map:C,emissiveMap:C,emissive:new he(l?.85:0,l?.85:0,l?.85:0)}),Cs("#222"),Cs("#222"),Cs("#222"),Cs("#222")]);b.position.set(L+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,u.add(b);let F=_e(512,256,P=>{let N=P.createLinearGradient(0,0,0,256);N.addColorStop(0,h.win||"#F4C783"),N.addColorStop(1,"#D59A5C"),P.fillStyle=N,P.fillRect(0,0,512,256);let O=Ie(n+9);for(let W=0;W<26;W++)P.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(O()*6)],P.fillRect(O()*490,30+Math.floor(O()*3)*76,12+O()*26,52);for(let W of[84,160,236])P.fillStyle="#6b4530",P.fillRect(0,W,512,7)}),S=new He({map:F,emissiveMap:F,emissive:new he(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(w(.3,2.8,r-.1,"#3a2a24",L-a*.1,1.4,i));let A=new z(new be(r-.9,2.1),S);A.rotation.y=a*Math.PI/2,A.position.set(L+a*.07,1.5,i),u.add(A);for(let P=-1;P<=1;P++)u.add(w(.08,2.3,.09,"#2a1d18",L+a*.1,1.5,i+P*(r-.9)/2));if(h.awning){let P=_e(512,128,O=>{for(let W=0;W<12;W++)O.fillStyle=W%2?h.awning:"#F4EEDF",O.fillRect(W*512/12,0,42.666666666666664,128)}),N=new z(new be(r-.3,1.3),new He({map:P,side:At,roughness:.9}));N.rotation.y=a*Math.PI/2,N.rotation.order="YXZ",N.rotation.x=-1,N.position.set(L+a*.55,2.56,i),N.castShadow=!0,u.add(N)}if(l){let P=new nt(h.light||"#FFC88A",3.2,7,1.8);P.position.set(L+a*1.7,2.1,i),u.add(P)}}return u}function tf(n,e,t){let i=new z(new be(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function PE(n="#A99D90"){let e=_e(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=Ie(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=cn,e}function Na(n,e){let t=_e(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Ie(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=cn,t.repeat.set(1,12);let i=tf(9,240,new He({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=PE(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=tf(4.4,240,new He({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(w(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function Oa(n,e,t,i,s=!0,r=5.5){let o=new ce;o.add(w(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(w(.26,.3,.26,"#15151b",e,.15,t));let a=w(.26,.4,.26,new He({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(w(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=ke("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new nt("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var nf={};function Wt(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new ce;o.add(w(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=nf[a]||(nf[a]=_e(512,512,c=>{let h=Ie(r%3+3),d=(u,f,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let p=m/26*6.283,_=g*(.86+.14*Math.sin(p*5+u)+h()*.05);c.lineTo(u+Math.cos(p)*_,f+Math.sin(p)*_)}c.fill()};for(let[u,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,f,g,s[0]);for(let[u,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,f,g,s[1]);for(let[u,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,f,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let f=90+h()*330,g=70+h()*300;c.save(),c.translate(f,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new z(new be(3.6*i,3.6*i),new He({map:l,alphaTest:.5,side:At,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new ji({depthPacking:Ar,map:l,alphaTest:.5,side:At}),o.add(h)}return n.add(o),o}function ii(n,e,t,i,s,r,o=3,a=0){let l=_e(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Ie(o);for(let u=0;u<3;u++)for(let f=-40;f<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(f,900-E,g,E),d()<.2&&h.fillRect(f+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let p=f+8;p<f+g-8;p+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(p,m,7,10));f+=g*.92}}),c=new z(new be(t,i),new tt({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function ct(n,e,t,i,s){let r=_e(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new z(new be(t,i),new tt({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var R=(n,e={})=>new He({color:n,roughness:.85,...e});function Le(n,e,t,i={}){let s=new z(new be(e,t),new tt({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:At,color:i.color||"#fff",blending:i.add?bn:Zi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new ji({depthPacking:Ar,map:n,alphaTest:.5,side:At})),s}function yn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var Ph={value:0};function za(n="#8E3D30",e=4,t=3){let i=_e(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Ie(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=cn,i.repeat.set(e,t),i}function sf(n="#A59383",e=12,t=12){let i=_e(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Ie(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=cn,i.repeat.set(e,t),i}var rf=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function IE(n,e){let[t,i,s,r]=rf[n];return _e(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Ih(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=Ie(o),l={};for(let c of e){let h=Math.floor(a()*rf.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=IE(d,h),f=new tt({map:u,alphaTest:.5,side:At,color:r});f.onBeforeCompile=m=>{m.uniforms.uT=Ph,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new va(new be(i*.5,i),f,l[c].length),E=new zt;l[c].forEach((m,p)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let _=.92+a()*.16;E.scale.set(_,_,1),E.updateMatrix(),g.setMatrixAt(p,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function vn(n,e=2600,t=300,i=1){let s=Ie(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,f=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(f)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(f)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new qt;a.setAttribute("position",new Kt(r,3)),a.setAttribute("color",new Kt(o,3));let l=_e(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new yr({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new Jr(a,c);return h.frustumCulled=!1,n.add(h),h}function si(n,e,t="#6D4A33"){let i=_e(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=Ie(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=cn,i.repeat.set(n/5,e/5);let s=new z(new be(n,e),new He({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function mi(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=_e(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=cn,r.repeat.set(n/s*4,e/s*4);let o=new z(new be(n,e),new He({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Fs(n,e,t="#FFD9A0",i=.22){let s=_e(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new z(new be(n,e),new tt({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:bn,side:At,fog:!1}))}function Lh(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new ce,a=new z(new et(.3,.22,.5,20),R(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=_e(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Le(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function Dh(n,e,t,i="#2A1E18"){let s=new ce;s.add(w(n+.08,e+.08,.04,i,0,0,0));let r=_e(Math.round(n*400),Math.round(e*400),t),o=new z(new be(n,e),new He({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function It(n,e,t,i=1.2){return new z(new be(n,e),new He({color:"#000",emissive:t,emissiveIntensity:i}))}function Qe(n,e,t,i=10,s=60){let r=new pi(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function so(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Re(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(ct(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),ii(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=za(t,2,2),a=()=>new He({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([f,g,E,m])=>n.add(w(E,m,.3,a(),f,g,-3)));for(let[f,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(w(E,m,.2,"#EDE7DA",f,g,-2.95))}else n.add(w(18,5.2,.3,a(),0,2.6,-3));n.add(si(18,12,s));let l=Dh(.9,1.2,f=>{f.fillStyle="#F2E6CC",f.fillRect(0,0,360,480),f.fillStyle="#E8667F",f.beginPath(),f.arc(180,200,110,0,7),f.fill(),f.fillStyle="#36AEA2",f.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Lh(4.4,0,-2.4,1.1)),n.add(Lh(-5,0,-2.4,.9,"#36AEA2")),n.add(new we(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=Qe(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new nt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new z(new et(.18,.3,.34,24),new He({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(w(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=ke("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var of=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function ro(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Re(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),ct(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),ii(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),Na(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(ns(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:of[(a+i)%5]})),n.add(ns(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:of[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)Wt(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),Oa(n,-5,-3-l*12,1,t||r);n.add(new we(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(Qe(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},rt=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},yt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},wr={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),rt(n,120,330,34,100,14,"#B5784A"),rt(n,340,330,34,100,14,"#B5784A"),rt(n,180,340,34,90,14,"#C98E5E"),rt(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),rt(n,120,330,34,100,14,"#B5906A"),rt(n,340,330,34,100,14,"#B5906A"),rt(n,180,340,34,90,14,"#C9A07E"),rt(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),yt(n,[[96,120],[110,30],[160,100]],"#E9853A"),yt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),yt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),yt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),yt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),rt(n,92,200,26,70,12,"#A87A44"),rt(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),yt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),yt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),yt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),yt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),yt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])rt(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),yt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{rt(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),yt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),rt(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),yt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),yt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])rt(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),yt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),yt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])rt(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),yt(n,[[160,70],[150,30],[196,70]],"#E890A4"),yt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),rt(n,40,260,70,240,30,"#2E2E38"),rt(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{rt(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])rt(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),rt(n,160,20,12,50,6,"#8A5A2A"),rt(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])rt(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),yt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),yt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),yt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])rt(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])rt(n,e,330,26,180,12,"#9A6238");rt(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),yt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])rt(n,e,360,34,190,14,"#4A3222");rt(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)yt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])rt(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),yt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),yt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])rt(n,e,320,34,230,14,"#7A4A2E");rt(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),rt(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),yt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},ka={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(ka,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in ka)wr[n][3]=ka[n][0],wr[n][4]=ka[n][1];wr.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),yt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];wr.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)yt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),yt(n,[[100,80],[90,30],[130,74]],"#F2913A"),yt(n,[[160,76],[170,26],[190,80]],"#F2913A"),rt(n,160,380,40,56,18,"#6AB05A"),rt(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];wr.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])rt(n,e,320,34,230,14,"#E4DED2");rt(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),rt(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),yt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Ga={},af=n=>Ga["e"+n]||(Ga["e"+n]=_e(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function lf(n,e={}){let[t,i,s,r,o,a]=wr[n],l=Ga[n]||(Ga[n]=_e(t,i,s)),c=a*i/t,h=new ce,d=new ce;h.add(d);let u=Le(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let f=new z(new be(o*a,o*a*.5),new tt({map:af("open"),transparent:!0,depthWrite:!1}));f.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(f);let g=new z(new hn(a*.45,24),new tt({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){f.material.map=af(m)},face(m){let p=new I;h.getWorldPosition(p),d.rotation.y=Math.atan2(m.position.x-p.x,m.position.z-p.z)},talk(m,p=!0){u.position.y=c/2+(p?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=p?1+Math.sin(m*14)*.012:1},place(m,p,_=0,v=1){return h.position.set(m,_,p),h.scale.setScalar(v),E}};return E}var is=(n,e,t=200,i=200,s)=>{let r=new z(new be(t,i),s?new He({map:s,roughness:.95}):R(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Uh=(n,e=1)=>{n.add(new we("#E9EEFF","#B08A6A",1.05*e)),n.add(Qe("#FFD29A",3*e,[-14,16,10],20,70))},ge={sala:(n,e)=>so(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{so(n,{wall:"#9A4632",night:e.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),-1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),-1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(w(.8,.22,.5,R("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>ro(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Re(e.dusk?"#E8A880":"#F2D8B8",.02),ct(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),ii(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),is(n,"#7A9A50");for(let t=0;t<12;t++)Wt(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(w(2.4,.1,.5,R("#8E6242"),-3.4,.5,-2.2)),n.add(w(2.4,.5,.08,R("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)Oa(n,-6+t*6,-4,1,!!e.dusk);n.add(new we("#E9EEFF","#B08A6A",1)),n.add(Qe(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{ro(n,{seed:e.seed||2}),is(n,"",60,60,sf("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Re("#F2D8B8",.012),ct(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),is(n,"#8AAA58");let t=new ce;t.add(w(6,4,5,R("#B5402E"),0,2,0));let i=new z(new et(.01,4.4,2.2,4),R("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(w(2,2.6,.1,R("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(w(.1,1,.1,R("#C9A06A"),-10+s*1.3,.5,-4));n.add(w(20,.08,.06,R("#C9A06A"),0,.9,-4)),n.add(w(20,.08,.06,R("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)Wt(n,6+s*3,-16-s%2*3,1.6,void 0,s);Uh(n)},sabana:(n,e)=>{n.fog=new Re("#F2C890",.01),ct(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=ke("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),is(n,"#C8A858");for(let i=0;i<6;i++){let s=new ce;s.add(w(.3,3,.3,R("#5A3A22"),0,1.5,0));let r=new z(new et(2.6,2.2,.6,12),R("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new we("#FFE8C8","#8A6A3A",1)),n.add(Qe("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Re("#F2E2C0",.012),ct(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),is(n,"#B8B070");for(let t=0;t<14;t++){let i=new z(new Tt(.55,16,10,0,Math.PI*2,0,Math.PI/2),R("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}Uh(n)},mar:(n,e)=>{LE(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Re(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=is(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=Ie(5);for(let r=0;r<30;r++){let o=new z(new dn(.2+s()*.3,.8+s()*1.4,7),R(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Fs(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=ke("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new we("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(Qe("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Re("#162238",.04),n.add(mi(16,20,"#2A3348","#232B3E",6)),n.add(w(16,6,.3,R("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=It(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=It(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=_e(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new z(new be(2.5,1.3),new tt({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new we("#6E86C8","#101420",.8)),n.add(Qe("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Re("#1E2236",.02),is(n,"#2F4A7A"),n.add(w(30,10,.3,R("#E8E2D2"),0,5,-8));let t=_e(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Le(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new z(new gn(4,.35,10,48),R("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new nt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new we("#E8E8FF","#3A3A50",.9)),n.add(Qe("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Re("#E6E2D6",.03),n.add(mi(9,40));for(let i of[-1,1]){n.add(w(.7,4.2,30,R("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(w(1.2,.05,30,R("#DDE0E4"),i*3,.5+s*.9,-10))}let t=Ie(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(w(.3,.3,.4,R(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=It(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new we("#FFFFFF","#B9B3A6",1)),n.add(Qe("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{ge.parque(n,{});for(let t=0;t<12;t++)n.add(w(.08,1.4,.08,R("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(w(8,.08,.08,R("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{so(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Re("#8A8070",.03),ct(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),is(n,"#8A8070");let t=Ie(8);for(let i=0;i<40;i++){let s=w(.4+t()*1.6,.3+t()*1,.4+t()*1.4,R(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}Uh(n,.8)}};function LE(n,e){n.background=new he(e)}function DE(n,e={}){let t=Fh({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var UE=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function cf(n,e,t){let i=Yu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(ge[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?DE(s,a):(()=>{let c=lf(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{Ph.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Ba(t.cam.map(([g,E])=>[g,E]),l),u=Ba(t.cam.map(([g,,E])=>[g,E]),l);Zu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let p=g.move(l);E.root.position.set(p[0],p[1],p[2])}E.face(c),E.eye(UE(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([p,_])=>l>=p&&l<_);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Ba(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function hf(n,e,t,i="#E8667F"){n.add(w(2.2,.45,3,R("#6B4A33"),e,.25,t)),n.add(w(2.1,.3,2.8,R("#F3EEE4"),e,.6,t)),n.add(w(2.18,.2,1.9,R(i,{roughness:.9}),e,.8,t+.5)),n.add(w(2.2,1.3,.16,R("#5A3C28"),e,.9,t-1.55)),n.add(w(.8,.2,.45,R("#FFFFFF"),e-.5,.82,t-1.1)),n.add(w(.8,.2,.45,R("#F6E6C8"),e+.5,.82,t-1.1))}function df(n,e=Math.PI/2){n.root.rotation.z=e}function uf(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return _e(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,f,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,f,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,f)=>c.fillText(u,t/2,i*.42+(f-(d.length-1)/2)*o*1.15))})}function ff(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return _e(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function Hh(n,e="#F2C14E",t=140,i=256,s=200){return _e(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function HE(n,e={}){let{w:t=512,h:i=256,bg:s="#10141E",fg:r="#FFFFFF",size:o=80,font:a="Inter",weight:l=800}=e;return _e(t,i,c=>{c.fillStyle=s,c.fillRect(0,0,t,i),c.fillStyle=r,c.font=`${l} ${o}px ${a}`,c.textAlign="center",c.textBaseline="middle";let h=Array.isArray(n)?n:[n];h.forEach((d,u)=>c.fillText(d,t/2,i/2+(u-(h.length-1)/2)*o*1.15))})}function Bh(n,e,t,i,s={}){let r=HE(e,s),o=new z(new be(t,i),new tt({map:r,toneMapped:!1}));return n.add(o),o}var Va=[0,2.92,12.34,19.96,27.78,29.28,32.88,38.7,44.62,51.76,53.84,60.12,63.02,68.14,70.9,82.1,86.54,91.44,95.4,101.3,110.24,117.38,121.98,128.74,134.5,140.44,146,152.28,159.32,162.3,164.98,168.76,170.64,178,181.08,186.12,190,193.62,198.74,204.02,208.7,211.54,219.06,225.36,233.64,239.6,242.1,244.04,249.16,253.26,259,265.32,274.44,276.26,280.54,285.08,291.7,294.22,300.08,307.84,310.68,314.96,317.72,322.4,327.92,331.5,336.18,341.8,345,350.46,352.7,355.66,363.6,365.8,370.16,373.78,376.74,385.54,392.1,397.52,400.86,402.9,409.04,411.52,413.24,418.18,422.68,426.9,432.04,437.9,440.96,444,447.62,452.04,458.94,462.3,470.54,477.3,484.22,490.76,495.94,498.06,500.5,501.5,507.28,512.06,520.22,525.76,530,531.82,537.04,543.16,550.04,554.04,561,565.3],BE=[["martes",0],["las",.56],["siete",1.12],["y",1.48],["diez",1.66],["de",1.9],["la",2.04],["manana",2.12],["suena",2.92],["una",3.44],["alarma",3.72],["pero",4.68],["no",4.96],["es",5.3],["tu",5.52],["alarma",5.62],["tu",6.52],["alarma",6.58],["es",6.96],["un",7.18],["pitido",7.32],["horrible",7.84],["esta",9.06],["es",9.34],["una",9.56],["cancion",9.74],["suave",10.06],["con",10.9],["pajaritos",11.1],["abres",12.34],["los",12.62],["ojos",12.8],["el",13.78],["techo",13.9],["esta",14.22],["lleno",14.44],["de",14.82],["estrellitas",14.96],["que",15.58],["brillan",15.8],["en",16.22],["la",16.32],["oscuridad",16.44],["tu",17.6],["no",17.62],["tienes",17.76],["estrellitas",18.06],["en",18.7],["el",18.88],["techo",19],["te",19.96],["levantas",20.02],["algo",21.1],["te",21.36],["cae",21.54],["sobre",21.82],["la",22.04],["cara",22.22],["pelo",23.1],["muchisimo",24.04],["pelo",24.64],["tu",25.66],["llevas",25.76],["el",26.1],["pelo",26.28],["cortisimo",26.46],["corres",27.78],["al",28.22],["espejo",28.34],["y",29.28],["desde",29.32],["el",29.5],["espejo",29.68],["te",30.18],["mira",30.54],["ella",30.74],["tu",31.7],["crush",31.8],["tu",32.88],["parpadeas",33.02],["ella",34.04],["parpadea",34.28],["tu",35.36],["levantas",35.48],["la",35.96],["mano",36.08],["ella",36.78],["levanta",37.06],["la",37.72],["mano",37.82],["ayer",38.7],["por",38.96],["la",39.16],["tarde",39.3],["en",39.92],["la",40],["biblioteca",40.08],["del",40.62],["instituto",40.8],["los",41.72],["dos",41.84],["fuisteis",42.02],["a",42.54],["coger",42.64],["el",42.92],["mismo",43.06],["libro",43.38],["a",43.74],["la",43.84],["vez",43.9],["vuestras",44.62],["manos",44.98],["se",45.28],["tocaron",45.54],["salto",46.38],["una",46.8],["chispa",47],["os",48],["reisteis",48.18],["y",49.3],["ya",49.52],["esta",49.8],["eso",50.52],["fue",50.76],["todo",50.98],["bueno",51.76],["eso",52.08],["parecia",52.74],["entonces",53.84],["suena",54.36],["el",54.94],["movil",55.06],["su",55.88],["movil",56.02],["en",57.02],["la",57.14],["pantalla",57.24],["pone",57.62],["tu",58.06],["nombre",58.22],["contestas",59.06],["y",60.12],["oyes",60.24],["tu",60.48],["propia",60.74],["voz",61.1],["gritando",61.82],["que",63.02],["ha",63.14],["pasado",63.26],["por",64.02],["que",64.14],["estoy",64.28],["en",64.48],["tu",64.66],["cuerpo",64.8],["y",65.54],["por",65.66],["que",65.84],["tu",66],["cuarto",66.14],["huele",66.44],["a",66.82],["calcetin",66.94],["has",68.14],["intercambiado",68.38],["el",69.1],["cuerpo",69.26],["con",69.58],["tu",69.9],["crush",70.1],["y",70.9],["antes",71.04],["de",71.22],["ver",71.38],["como",71.56],["sale",71.82],["este",72.08],["dia",72.4],["tan",72.62],["raro",72.98],["si",73.84],["te",73.94],["gustan",74.06],["estas",74.38],["historias",74.6],["de",75.16],["y",75.82],["si",75.92],["suscribete",76.7],["al",77.32],["canal",77.46],["y",77.72],["activa",78.02],["la",78.4],["campanita",78.5],["y",79.02],["ahora",79.64],["si",79.86],["vamos",80.44],["alla",80.76],["lo",82.1],["primero",82.26],["que",82.56],["notas",82.74],["es",83.14],["algo",83.34],["muy",83.62],["extrano",84.02],["te",85.08],["miras",85.24],["las",85.52],["manos",85.66],["son",86.54],["sus",86.76],["manos",87.12],["mas",87.98],["pequenas",88.34],["con",89.26],["las",89.46],["unas",89.64],["pintadas",89.94],["de",90.5],["azul",90.68],["y",91.44],["aun",91.58],["asi",91.7],["las",92.04],["mueves",92.5],["tu",92.84],["y",93.1],["las",93.6],["sientes",93.76],["tuyas",94.12],["esto",95.4],["aunque",96.02],["parezca",96.22],["imposible",96.7],["la",97.6],["ciencia",97.72],["lo",98.14],["ha",98.38],["probado",98.52],["bueno",99.38],["mas",100.2],["o",100.32],["menos",100.5],["en",101.3],["2008",101.52],["dos",102.48],["neurocientificos",102.58],["de",103.56],["suecia",103.66],["valeria",104.4],["petkova",104.72],["y",105.24],["henrik",105.5],["ehrsson",105.9],["pusieron",106.62],["a",106.98],["unos",107.12],["voluntarios",107.28],["unas",107.96],["gafas",108.26],["de",108.64],["realidad",108.78],["virtual",109.18],["las",110.24],["gafas",110.44],["estaban",110.82],["conectadas",111.18],["a",111.84],["una",112.04],["camara",112.2],["colocada",112.56],["en",113.1],["la",113.24],["cabeza",113.34],["de",113.68],["un",113.88],["maniqui",114],["mirando",114.42],["hacia",115],["abajo",115.28],["hacia",115.96],["su",116.22],["cuerpo",116.44],["asi",117.38],["el",117.98],["voluntario",118.1],["veia",118.64],["el",119],["cuerpo",119.12],["del",119.4],["maniqui",119.62],["como",120.1],["si",120.36],["fuera",120.56],["el",120.88],["suyo",121.02],["luego",121.98],["un",122.58],["investigador",122.74],["les",123.36],["tocaba",123.62],["la",124],["barriga",124.12],["con",124.56],["un",124.74],["palito",124.9],["a",125.28],["los",125.4],["dos",125.56],["a",125.84],["la",125.94],["vez",126.02],["al",126.62],["voluntario",126.82],["y",127.4],["al",127.72],["maniqui",127.82],["y",128.74],["en",128.92],["muy",129.04],["poco",129.24],["tiempo",129.42],["muchos",130.26],["voluntarios",130.46],["sentian",131.12],["que",131.66],["el",131.9],["cuerpo",132.04],["del",132.32],["maniqui",132.54],["era",133.04],["su",133.4],["cuerpo",133.64],["tanto",134.5],["que",134.94],["cuando",135.32],["acercaban",135.56],["un",136.12],["cuchillo",136.28],["a",136.72],["la",136.86],["barriga",136.92],["del",137.32],["maniqui",137.46],["su",138.2],["piel",138.32],["reaccionaba",138.56],["con",139.32],["miedo",139.54],["y",140.44],["hay",140.68],["mas",140.8],["en",141.56],["otra",141.7],["prueba",141.88],["el",142.56],["voluntario",142.68],["veia",143.2],["a",143.58],["traves",143.72],["de",143.96],["los",144.14],["ojos",144.26],["de",144.56],["otra",144.8],["persona",145.02],["y",146],["cuando",146.12],["se",146.32],["daban",146.52],["la",146.76],["mano",146.94],["mucha",147.58],["gente",147.8],["sentia",148.12],["que",148.62],["estaba",148.78],["estrechandose",149.08],["la",149.88],["mano",150.02],["a",150.34],["si",150.77],["misma",151.2],["nuestro",152.28],["cerebro",152.72],["decide",153.12],["cual",153.48],["es",153.84],["nuestro",154.04],["cuerpo",154.2],["usando",154.76],["lo",155.24],["que",155.5],["ve",155.64],["y",155.82],["lo",156.14],["que",156.26],["siente",156.36],["y",157.24],["se",157.4],["le",157.52],["puede",157.64],["enganar",157.86],["bajas",159.32],["a",159.76],["la",159.84],["cocina",159.92],["su",160.78],["madre",160.9],["esta",161.14],["haciendo",161.5],["tostadas",161.82],["buenos",162.3],["dias",163.22],["carino",163.54],["has",164.34],["dormido",164.46],["bien",164.8],["eh",164.98],["si",165.82],["muy",166.94],["bien",167.18],["mama",167.84],["te",168.76],["sale",168.9],["rarisimo",169.16],["en",170.64],["la",170.8],["mesa",170.9],["esta",171.14],["su",171.46],["hermano",171.62],["pequeno",171.96],["mirandote",172.26],["con",173.14],["los",173.34],["ojos",173.5],["entrecerrados",173.78],["por",175.2],["que",175.36],["te",175.52],["sientas",175.64],["asi",175.98],["pareces",176.74],["un",177.06],["chico",177.28],["te",178],["pones",178.1],["recta",178.34],["de",178.84],["golpe",178.96],["coges",179.76],["una",180.06],["tostada",180.22],["le",181.08],["pones",181.24],["mantequilla",181.48],["mermelada",182.42],["y",182.96],["ketchup",183.36],["como",184.58],["haces",184.78],["tu",185.04],["siempre",185.18],["su",186.12],["madre",186.28],["deja",186.54],["de",186.88],["masticar",187.02],["su",188.02],["hermano",188.1],["deja",188.52],["de",188.78],["masticar",188.94],["es",190],["una",190.32],["moda",190.92],["nueva",191.26],["dices",191.96],["sale",192.78],["en",193.08],["internet",193.24],["y",193.62],["te",194.3],["comes",194.44],["la",194.66],["tostada",194.92],["entera",195.4],["con",195.84],["ketchup",196.48],["sin",197.32],["respirar",197.66],["su",198.74],["movil",198.94],["vibra",199.22],["en",199.62],["tu",199.72],["bolsillo",199.82],["un",200.72],["mensaje",200.9],["de",201.36],["ella",201.52],["bueno",202.32],["de",202.98],["tu",203.04],["cuerpo",203.16],["tu",204.02],["madre",204.14],["me",204.36],["ha",204.6],["dado",204.66],["un",204.82],["beso",204.98],["en",205.22],["la",205.32],["frente",205.42],["y",205.74],["me",205.98],["ha",206.1],["llamado",206.2],["campeon",206.52],["esto",207.58],["es",207.76],["normal",207.9],["si",208.7],["le",209.42],["contestas",209.52],["disimula",210.5],["quedais",211.54],["a",211.78],["las",211.96],["ocho",212.06],["menos",212.34],["cuarto",212.46],["en",212.82],["la",213.08],["esquina",213.2],["del",213.54],["instituto",213.72],["y",214.3],["ahi",214.86],["por",215.52],["primera",215.6],["vez",215.92],["te",216.58],["ves",216.72],["a",216.86],["ti",217.02],["mismo",217.1],["desde",217.86],["fuera",218.08],["y",219.06],["te",219.1],["parece",219.24],["rarisimo",219.56],["tu",220.88],["cara",221],["no",221.18],["es",221.5],["como",221.68],["tu",221.88],["pensabas",222.06],["esta",223.08],["como",223.38],["al",223.68],["reves",224.42],["y",225.36],["no",225.52],["es",225.7],["una",225.92],["sensacion",226.08],["tuya",226.6],["en",227.58],["1977",227.76],["unos",229.64],["psicologos",229.78],["de",230.4],["estados",230.52],["unidos",230.76],["hicieron",231.24],["fotos",231.78],["a",232.1],["un",232.34],["grupo",232.44],["de",232.64],["chicas",232.84],["luego",233.64],["les",233.98],["ensenaron",234.22],["dos",234.76],["versiones",235.02],["de",235.62],["su",235.72],["foto",235.86],["la",236.58],["normal",236.72],["y",237.08],["la",237.56],["del",237.68],["espejo",237.82],["dada",238.56],["la",238.74],["vuelta",238.86],["y",239.6],["les",239.74],["preguntaron",239.84],["cual",240.42],["les",240.72],["gustaba",240.98],["mas",241.38],["casi",242.1],["todas",242.34],["preferian",242.66],["la",243.3],["del",243.46],["espejo",243.58],["pero",244.04],["cuando",244.52],["ensenaban",244.78],["las",245.32],["mismas",245.52],["fotos",245.92],["a",246.22],["sus",246.44],["amigos",246.54],["ellos",247.22],["preferian",247.54],["la",248.16],["normal",248.32],["por",249.16],["que",249.32],["porque",249.96],["tu",250.24],["te",250.48],["ves",250.64],["cada",250.8],["dia",251.06],["en",251.32],["el",251.46],["espejo",251.58],["al",252.08],["reves",252.52],["y",253.26],["los",253.42],["demas",253.56],["te",253.86],["ven",254.12],["tal",254.28],["y",254.56],["como",254.7],["eres",254.88],["cada",255.68],["uno",255.9],["prefiere",256.16],["la",256.64],["cara",256.8],["que",257.02],["esta",257.22],["acostumbrado",257.46],["a",258.18],["ver",258.36],["o",259],["sea",259.14],["que",259.78],["tu",259.82],["crush",259.98],["lleva",260.24],["meses",260.6],["viendo",261.08],["tu",261.46],["cara",261.74],["de",262],["verdad",262.16],["y",262.9],["tu",263.04],["no",263.24],["la",263.72],["habias",263.84],["visto",264.08],["nunca",264.42],["ella",265.32],["te",265.56],["mira",265.76],["desde",266],["tu",266.26],["cuerpo",266.52],["vale",267.54],["plan",268.22],["hasta",268.9],["que",269.1],["sepamos",269.28],["como",269.62],["arreglarlo",269.9],["tu",270.76],["eres",270.88],["yo",271.1],["y",271.78],["yo",271.84],["soy",272.02],["tu",272.2],["nadie",272.4],["puede",273.14],["enterarse",273.38],["y",274.44],["como",274.64],["hago",275],["para",275.24],["ser",275.44],["tu",275.66],["saluda",276.26],["a",276.7],["todo",276.86],["el",277],["mundo",277.18],["sonrie",277.74],["y",278.64],["no",278.7],["hables",278.9],["de",279.2],["videojuegos",279.36],["entras",280.54],["en",280.84],["clase",281.06],["con",281.74],["su",281.94],["mochila",282.1],["con",282.84],["sus",283],["zapatillas",283.18],["que",283.74],["te",284.08],["aprietan",284.22],["y",285.08],["sientes",285.22],["que",285.56],["todo",285.86],["el",286.2],["mundo",286.44],["te",286.68],["mira",286.92],["que",287.58],["todos",287.72],["saben",288],["que",288.46],["algo",288.68],["raro",288.88],["pasa",289.2],["que",290.02],["se",290.1],["te",290.26],["nota",290.4],["en",290.64],["la",290.82],["cara",290.94],["pero",291.7],["de",291.96],["verdad",292.56],["te",292.84],["estan",293.06],["mirando",293.28],["en",294.22],["el",294.42],["ano",294.52],["2000",294.7],["el",295.38],["psicologo",295.56],["thomas",296],["gilovich",296.46],["y",296.88],["su",297.08],["equipo",297.16],["hicieron",297.46],["un",298],["experimento",298.18],["buenisimo",298.96],["pidieron",300.08],["a",300.48],["unos",300.62],["estudiantes",300.74],["que",301.36],["se",301.6],["pusieran",301.72],["una",302.1],["camiseta",302.32],["muy",302.82],["vergonzosa",303.18],["con",304.16],["la",304.32],["cara",304.46],["de",304.66],["un",304.82],["cantante",304.92],["que",305.42],["entonces",305.62],["les",306.02],["parecia",306.32],["muy",306.78],["hortera",307.08],["y",307.84],["que",308],["entraran",308.1],["asi",308.58],["en",308.82],["una",308.96],["sala",309.1],["llena",309.38],["de",309.78],["gente",309.9],["luego",310.68],["les",310.96],["preguntaron",311.18],["cuantos",311.78],["crees",312.66],["que",313],["se",313.1],["han",313.24],["fijado",313.34],["en",313.74],["tu",313.86],["camiseta",313.96],["ellos",314.96],["creian",315.26],["que",315.68],["mas",316.14],["o",316.24],["menos",316.42],["la",316.86],["mitad",316.96],["en",317.72],["realidad",317.92],["solo",318.76],["se",318.88],["habia",319.08],["fijado",319.26],["alrededor",319.7],["de",319.98],["una",320.46],["persona",320.68],["de",321.2],["cada",321.36],["cuatro",321.56],["lo",322.4],["llamaron",322.62],["el",323.08],["efecto",323.4],["foco",323.74],["creemos",324.64],["que",325.04],["estamos",325.28],["bajo",325.54],["un",325.88],["foco",326.1],["y",326.42],["que",326.6],["todos",326.72],["nos",327],["miran",327.26],["pero",327.92],["la",328.16],["gente",328.32],["esta",328.54],["demasiado",328.86],["ocupada",329.24],["pensando",329.98],["en",330.4],["si",330.68],["misma",330.86],["y",331.5],["tiene",331.74],["razon",331.96],["nadie",332.76],["nota",333.18],["nada",333.54],["bueno",334.42],["casi",335.08],["nadie",335.3],["en",336.18],["la",336.34],["clase",336.44],["de",336.68],["mates",336.86],["el",337.4],["profe",337.52],["pregunta",337.86],["algo",338.08],["dificilisimo",338.52],["y",339.94],["tu",339.98],["cuerpo",340.12],["levanta",340.46],["la",341],["mano",341.1],["ella",341.8],["desde",342.4],["tu",342.52],["cuerpo",342.78],["responde",343.44],["perfecto",344.06],["toda",345],["la",345.26],["clase",345.38],["se",345.7],["gira",345.88],["tu",346.72],["mejor",346.84],["amigo",347.08],["marcos",347.72],["la",348.4],["mira",348.6],["con",348.78],["la",349.02],["boca",349.16],["abierta",349.4],["desde",350.46],["cuando",350.7],["sabes",351.02],["tu",351.5],["mates",351.7],["tu",352.7],["en",353.24],["su",353.38],["sitio",353.52],["te",354.3],["tapas",354.38],["la",354.68],["cara",354.84],["y",355.66],["luego",355.82],["llega",356.1],["tu",356.54],["turno",356.78],["ella",357.18],["tenia",357.92],["que",358.3],["hacer",358.5],["hoy",358.72],["una",358.9],["presentacion",359.04],["de",359.72],["biologia",359.88],["delante",360.7],["de",361.32],["todos",361.54],["sobre",362.32],["las",362.66],["ranas",362.88],["tu",363.6],["no",363.8],["sabes",363.92],["nada",364.2],["de",364.66],["ranas",364.9],["sales",365.8],["abres",366.74],["la",367.1],["boca",367.28],["y",367.5],["dices",368.08],["lo",368.4],["unico",368.7],["que",369.06],["sabes",369.28],["las",370.16],["ranas",370.5],["saltan",371.08],["silencio",372.64],["y",373.78],["son",374.06],["verdes",374.82],["a",375.78],["veces",375.88],["alguien",376.74],["se",377.14],["rie",377.36],["pero",378.12],["entonces",378.32],["ves",378.72],["a",379.08],["tu",379.22],["cuerpo",379.32],["en",380],["la",380.14],["ultima",380.26],["fila",380.54],["haciendote",381.04],["gestos",381.76],["senalando",382.64],["cosas",383.16],["moviendo",383.88],["los",384.34],["labios",384.58],["y",385.54],["lo",385.6],["vas",385.72],["entendiendo",385.88],["y",387.06],["vas",387.18],["repitiendo",387.32],["y",388.46],["la",388.54],["presentacion",388.64],["sale",389.22],["regular",390.08],["pero",390.94],["sale",391.06],["en",392.1],["el",392.26],["recreo",392.38],["la",393.16],["mejor",393.22],["amiga",393.46],["de",393.7],["ella",393.92],["sara",394.5],["te",395.06],["coge",395.18],["del",395.42],["brazo",395.58],["y",395.9],["te",396.02],["lleva",396.14],["a",396.4],["un",396.54],["rincon",396.66],["bueno",397.52],["que",398.26],["hoy",398.76],["si",398.92],["se",399.1],["lo",399.26],["vas",399.34],["a",399.48],["decir",399.62],["decirle",400.86],["que",401.38],["a",402],["quien",402.14],["sara",402.9],["pone",403.24],["los",403.56],["ojos",403.78],["en",404.02],["blanco",404.24],["a",404.58],["el",405.2],["al",405.76],["que",405.96],["llevas",406.1],["mirando",406.34],["desde",406.76],["septiembre",406.94],["y",408.02],["senala",408.24],["te",409.04],["senala",409.28],["a",409.7],["ti",409.88],["a",410.46],["tu",410.56],["cuerpo",410.68],["te",411.52],["quedas",411.74],["de",412.1],["piedra",412.26],["mientras",413.24],["tanto",413.56],["en",414.28],["la",414.4],["otra",414.52],["punta",414.7],["del",415.08],["patio",415.24],["marcos",416.02],["le",416.34],["da",416.54],["un",416.66],["codazo",416.76],["a",417.12],["tu",417.26],["cuerpo",417.36],["tio",418.18],["hoy",418.84],["le",418.98],["vas",419.06],["a",419.2],["decir",419.32],["algo",419.5],["a",419.76],["ella",419.9],["o",420.12],["que",420.36],["que",420.88],["se",421],["te",421.14],["nota",421.24],["muchisimo",421.46],["y",422.68],["ella",422.86],["dentro",423.56],["de",423.72],["tu",423.96],["cuerpo",424.1],["se",424.84],["queda",424.98],["de",425.24],["piedra",425.42],["tambien",425.84],["esa",426.9],["tarde",427.24],["volveis",427.42],["a",427.92],["quedar",428.06],["en",428.72],["la",428.88],["biblioteca",428.96],["delante",429.96],["de",430.36],["la",430.54],["misma",430.64],["estanteria",430.92],["y",432.04],["los",432.2],["dos",432.36],["teneis",432.56],["la",433],["misma",433.16],["cara",433.38],["la",434.16],["cara",434.36],["de",434.58],["alguien",434.76],["que",434.98],["se",435.24],["ha",435.38],["enterado",435.48],["de",435.92],["algo",436.12],["que",436.38],["no",436.66],["debia",436.92],["sara",437.9],["me",438.28],["ha",438.56],["dicho",438.62],["una",438.86],["cosa",439.04],["dices",439.88],["tu",440.2],["y",440.96],["marcos",441.08],["me",441.44],["ha",441.72],["dicho",441.78],["otra",442],["dice",442.84],["ella",443.1],["yo",444],["pensaba",444.14],["que",444.6],["se",444.76],["me",444.92],["notaba",445.04],["muchisimo",445.36],["dices",446.48],["tu",446.84],["yo",447.62],["tambien",447.78],["dice",448.66],["ella",448.96],["y",449.72],["no",449.86],["me",449.96],["habia",450.12],["dado",450.28],["cuenta",450.52],["de",450.84],["nada",451.04],["y",452.04],["esto",452.22],["tambien",452.52],["tiene",453.08],["nombre",453.36],["en",454.28],["1998",454.42],["el",456.26],["mismo",456.34],["gilovich",456.64],["hizo",457.16],["otro",457.52],["experimento",457.8],["pidio",458.94],["a",459.24],["unos",459.36],["estudiantes",459.54],["que",460.12],["mintieran",460.36],["delante",460.84],["de",461.32],["un",461.46],["grupo",461.58],["y",462.3],["luego",462.4],["les",462.62],["pregunto",462.82],["cuantos",463.78],["crees",464.14],["que",464.46],["te",464.56],["han",464.7],["pillado",464.8],["pensaban",465.62],["que",466.18],["muchisimos",466.36],["en",467.44],["realidad",467.62],["los",468.02],["habian",468.32],["pillado",468.64],["bastantes",469.06],["menos",469.72],["y",470.54],["lo",470.7],["mismo",470.8],["pasaba",471.02],["con",471.52],["los",471.72],["nervios",471.86],["creian",472.74],["que",473.1],["se",473.32],["les",473.46],["notaban",473.56],["un",474.02],["monton",474.16],["pero",474.86],["desde",475.08],["fuera",475.28],["apenas",475.62],["se",476.2],["veian",476.48],["lo",477.3],["llamaron",477.48],["la",477.86],["ilusion",478.06],["de",478.56],["transparencia",478.7],["creemos",480],["que",480.34],["los",480.56],["demas",480.7],["pueden",480.96],["ver",481.28],["lo",481.54],["que",481.68],["sentimos",481.8],["como",482.32],["si",482.74],["fueramos",482.9],["de",483.26],["cristal",483.46],["pero",484.22],["no",484.5],["los",485.08],["demas",485.28],["no",485.6],["nos",485.94],["leen",486.16],["la",486.42],["mente",486.54],["por",487.24],["eso",487.44],["a",488],["veces",488.12],["hay",488.86],["que",489],["decir",489.16],["las",489.44],["cosas",489.72],["os",490.76],["quedais",490.94],["callados",491.24],["ella",492.28],["coge",492.52],["el",492.9],["libro",493.06],["de",493.24],["la",493.4],["estanteria",493.52],["el",494.52],["mismo",494.66],["de",494.94],["ayer",495.1],["lo",495.94],["intentamos",496.08],["dice",497.04],["tu",498.06],["pones",498.2],["la",498.54],["mano",498.72],["encima",498.96],["de",499.34],["la",499.5],["suya",499.6],["chispa",500.5],["y",501.5],["abres",501.56],["los",501.86],["ojos",502.02],["y",502.94],["ves",503],["tus",503.12],["manos",503.34],["tus",504.2],["manos",504.36],["de",504.64],["siempre",504.86],["sin",505.68],["unas",505.92],["azules",506.2],["y",507.28],["delante",507.4],["de",507.78],["ti",507.92],["esta",508.14],["ella",508.68],["ella",509.48],["de",509.8],["verdad",509.96],["en",510.3],["su",510.96],["cuerpo",511.14],["se",512.06],["mira",512.32],["las",512.5],["manos",512.72],["se",513.64],["toca",513.66],["el",513.86],["pelo",514.06],["y",514.7],["suspira",514.86],["que",515.96],["alivio",516.08],["tu",517.1],["cuerpo",517.24],["tiene",517.5],["muchisima",517.78],["hambre",518.54],["todo",518.82],["el",519.08],["rato",519.32],["os",520.22],["reis",520.44],["y",521.32],["luego",521.42],["se",521.66],["hace",522.12],["un",522.32],["silencio",522.48],["pero",523.42],["esta",523.5],["vez",523.8],["no",524.06],["es",524.44],["incomodo",524.58],["oye",525.76],["dice",526.54],["ella",526.84],["ahora",527.74],["ya",527.98],["se",528.2],["lo",528.44],["que",528.56],["piensa",528.68],["marcos",529],["y",530],["yo",530.14],["se",530.28],["lo",530.48],["que",530.6],["piensa",530.7],["sara",531],["pues",531.82],["entonces",532.06],["dice",533.08],["ella",533.44],["ya",534.28],["no",534.44],["hace",534.56],["falta",534.72],["que",534.98],["nadie",535.18],["diga",535.4],["nada",535.68],["no",536.3],["y",537.04],["tu",537.2],["por",537.74],["primera",537.94],["vez",538.24],["no",538.62],["te",539.22],["escondes",539.38],["si",540.4],["que",540.72],["hace",540.86],["falta",541.02],["me",541.92],["gustas",542.1],["ella",543.16],["sonrie",543.44],["ya",544.56],["lo",544.74],["se",544.88],["he",545.56],["estado",545.72],["todo",545.92],["el",546.32],["dia",546.56],["dentro",546.78],["de",547.14],["tu",547.34],["cabeza",547.44],["y",548.34],["se",548.52],["va",548.68],["hacia",548.82],["la",549.08],["puerta",549.22],["y",550.04],["antes",550.18],["de",550.42],["salir",550.58],["se",551.34],["da",551.42],["la",551.56],["vuelta",551.66],["tu",552.62],["a",552.78],["mi",552.94],["tambien",553.08],["al",554.04],["dia",554.28],["siguiente",554.44],["en",555.32],["clase",555.4],["de",555.62],["biologia",555.82],["el",556.74],["profe",556.86],["dice",557.18],["que",557.32],["la",557.52],["presentacion",557.62],["de",558.26],["las",558.4],["ranas",558.56],["fue",558.92],["muy",559.2],["original",559.86],["sara",561],["te",561.36],["guina",561.62],["un",561.92],["ojo",562.06],["y",562.76],["marcos",562.9],["levanta",563.26],["los",563.86],["dos",564],["pulgares",564.18],["y",565.3],["tu",565.46],["si",565.64],["pudieras",566.24],["intercambiar",566.72],["el",567.36],["cuerpo",567.5],["con",567.78],["alguien",568.1],["durante",568.34],["un",568.64],["dia",569.04],["con",569.9],["quien",570.02],["seria",570.24],["te",571.26],["leo",571.4],["en",571.68],["los",571.78],["comentarios",571.9]],pf=(n,e=0)=>{for(let[t,i]of BE)if(i>=e&&t===n)return i;return e};var Wa=(n,e,t=200,i=200)=>{let s=new z(new be(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Ft=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return _e(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function mf(n="#E9B44C"){let e=new ce;e.add(w(2.4,2.4,9,R(n,{roughness:.5}),0,1.5,0));for(let i=0;i<6;i++)for(let s of[-1,1])e.add(w(.02,.8,1.1,R("#1A2233",{roughness:.1,metalness:.5}),s*1.21,2,-3.6+i*1.4));e.add(w(2.2,1,.02,R("#1A2233",{roughness:.1}),0,2,4.51));let t=w(.02,1.8,1,R("#2A2A34"),1.22,1.2,2.8);e.add(t);for(let i of[-3,3])for(let s of[-1,1]){let r=new z(new et(.45,.45,.3,20),R("#1A1A20"));r.rotation.z=Math.PI/2,r.position.set(s*1.1,.45,i),e.add(r)}return e}function NE(n,e=.5){let t=new ce,i=_e(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Ie(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new z(new be(400,100),new tt({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:bn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function OE(n,e=0,t=-1){for(let i=0;i<4;i++){let s=w(5,.22,.6,R("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new z(new dn(.16,.35,6),R(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function Nh(n,e=40,t=3,i=[-12,12,-40,4]){let s=Ie(t),r=_e(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Le(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function gf(n,e=200,t=5,i=10,s=30,r=2){let o=Ie(t),a=_e(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Le(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}ge.pasteleria=n=>{n.fog=new Re("#F3D2C0",.02),n.add(mi(16,14,"#F2E6DA","#E2CFC0",8)),n.add(w(16,5,.3,R("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(w(.12,5,.05,R("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(w(5.4,1,.9,R("#8A5A3C"),0,.5,-1.2)),n.add(w(5.5,.08,1,R("#F4EEE6"),0,1.04,-1.2)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.1,-3)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.9,-3));let e=Le(Ft(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new we("#FFF0F0","#A07060",1));let t=Qe("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new nt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};ge.espacio=n=>{n.background=new he("#05060E"),vn(n,2600,200,3),n.add(new we("#8FA8FF","#101020",.5));let e=new pi("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};ge.aula=n=>{n.fog=new Re("#E8DCC8",.02),n.add(mi(16,16,"#C9B89A","#BBA98A",10)),n.add(w(16,5,.3,R("#E8DCC0"),0,2.5,-3.6)),n.add(w(4.4,1.8,.06,R("#2F5A48"),0,2.3,-3.42)),n.add(w(4.6,.1,.2,R("#8E6242"),0,1.36,-3.35));let e=Le(_e(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new we("#FFFFFF","#9A8A70",1)),n.add(Qe("#FFE8C8",2.2,[-6,8,6],10,40))};ge.ruaV=(n,e)=>{ro(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(Nh(n,60,4),gf(n,260,6,9,40))};ge.apagon=(n,e)=>{n.fog=new Re("#0A0C18",.03),ct(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),vn(n,1800,200,4),Na(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(ns(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(ns(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new we("#5A64A8","#141420",.5)),n.add(Qe("#8A9AE0",.7,[-10,20,10],30,90))};ge.azotea=(n,e)=>{n.background=new he("#03040A"),n.fog=new Re("#060814",.008),vn(n,4200,200,9),NE(n,e.ang??.45),ii(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=w(16,.3,12,R("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(w(16,.5,.2,R("#4A4A54"),0,.25,-8)),n.add(w(1.4,1.2,1.4,R("#4A4A54"),4.5,.6,-5)),n.add(new we("#6A78C8","#141420",.55)),n.add(Qe("#9AAAF0",.6,[-6,10,6],12,40))};ge.panaderia=n=>{ge.pasteleria(n);let e=Le(Ft(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};ge.metro=n=>{n.background=new he("#0A0C10"),n.fog=new Re("#0C1014",.07);let e=R("#4A4E54",{roughness:.9,side:nn}),t=new z(new et(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new ce,s=new z(new et(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=w(6.4,.1,60,R("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(w(.08,.12,60,R("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(w(2.2,.08,.2,R("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new nt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=ke("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new we("#8A90A0","#202024",1.1))};ge.bosque=(n,e)=>{n.fog=new Re(e.nieve?"#E8EEF4":"#C8D0B8",.025),ct(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Wa(n,e.nieve?"#F2F4F8":"#6E8A48");let t=Ie(14);for(let i=0;i<26;i++)Wt(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=ns(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),Nh(n,0)}n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(Qe("#FFE8C0",2.4,[-10,14,8],18,60))};ge.rio=(n,e)=>{ge.parque(n,e);let t=new z(new be(60,3.4),new He({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};ge.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#F2A880":"#CFE8F0",.006),ct(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=ke(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=Wa(n,"#E8D4A0"),r=new z(new be(800,400),new He({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=w(800,.02,.6,R("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new z(new Hi(1.1,0),R("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new we(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(Qe(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};ge.svalbard=n=>{n.fog=new Re("#C8D8E8",.02),ct(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),Wa(n,"#F4F6FA");let e=Ie(19);for(let l=0;l<8;l++){let c=new z(new dn(10+e()*12,10+e()*10,7),R("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new z(new Tt(14,32,16,0,Math.PI*2,0,Math.PI/2),R("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=w(3,4.4,6,R("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=w(1.4,2.2,.1,R("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=It(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=ke("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=ke("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new we("#D8E8FF","#8A9AB0",1.1)),n.add(Qe("#F0F4FF",1.6,[-8,10,8],16,50))};ge.huerto=(n,e)=>{ge.parque(n,e),OE(n,0,-1.4)};ge.biblio=n=>{n.fog=new Re("#4A3A2A",.03),n.add(si(18,14,"#6D4A33")),n.add(w(18,6,.3,R("#5A3E2A"),0,3,-3.4));let e=Ie(8);for(let s=0;s<5;s++){n.add(w(14,.06,.4,R("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(w(o,a,.3,R(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new we("#FFE8C8","#3A2A1C",.7));let t=new nt("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=ke("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};ge.hotel=n=>{n.fog=new Re("#E8D8C0",.02),n.add(si(18,14,"#8A5A3A")),n.add(w(18,6,.3,R("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(w(2.4,2.6,.05,R("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Le(_e(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=w(3.2,.6,2.4,R("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(w(3.3,1.4,.2,R("#6A3A2A"),0,.7,-2.8)),Nh(n,0);let t=Le(_e(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new we("#FFF0E0","#8A6A4A",1)),n.add(Qe("#FFE0B0",2,[-4,8,6],10,30))};ge.selva=n=>{n.fog=new Re("#7AA870",.05),ct(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),Wa(n,"#3E5A2A");let e=Ie(23);for(let t=0;t<40;t++)Wt(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);gf(n,160,9,12,12,3),n.add(new we("#D8F0C8","#2A3A1A",.9)),n.add(Qe("#FFF0C0",2.2,[-6,14,4],14,50))};ge.desierto=n=>{ge.sabana(n,{})};var zh=(n,e,t=200,i=200)=>{let s=new z(new be(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var zE=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return _e(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function Ef(n,e=.9,t={}){let i=zE(n,t),s=new z(new be(e,e*(t.h||360)/(t.w||512)),new He({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function Xa(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new ce,[d,u,f,g]=s,E=()=>l?new He({map:za(i,3,3),roughness:.95}):R(i,{roughness:.9}),m=d-f/2+e/2,p=e/2-(d+f/2),_=u-g/2,v=t-(u+g/2);h.add(w(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(w(p,t,.3,E(),e/2-p/2,t/2,0)),h.add(w(f,_,.3,E(),d,_/2,0)),h.add(w(f,v,.3,E(),d,t-v/2,0));let y=R("#F4F0E4");for(let[N,O,W,ee]of[[d-f/2,u,.1,g+.1],[d+f/2,u,.1,g+.1],[d,u+g/2,f+.2,.1],[d,u,.05,g]])h.add(w(W,ee,.36,y,N,O,0));h.add(w(f+.4,.1,.5,y,d,u-g/2-.03,.12));let L=3.2,C=R(o,{roughness:.9});h.add(w(f+3,t,.2,C,d,t/2,-L)),h.add(w(.2,t,L,C,d-f/2-1.4,t/2,-L/2)),h.add(w(.2,t,L,C,d+f/2+1.4,t/2,-L/2)),h.add(w(f+3,.2,L,R("#8A6A4A"),d,_-c,-L/2)),h.add(w(f+3,.2,L,C,d,u+g/2+.5,-L/2));let b=new nt("#FFC880",a?9:2.5,7,1.4);b.position.set(d,u+.6,-1.2),h.add(b);let F=It(f+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-L+.12),h.add(F);let S=w(f-.04,g,.06,R("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let A=[];for(let N=0;N<10;N++){let O=w(f-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(O),A.push([O,N])}let P=N=>{let O=Math.max(.001,g*N);S.scale.y=O/g,S.position.y=u+g/2-O/2,S.visible=N>.01,A.forEach(([W,ee])=>{let Z=u+g/2-(ee+.5)*g/10;W.visible=N>.01&&Z>u+g/2-O,W.position.y=Z})};return P(0),h.userData={persiana:P,luz:N=>{b.intensity=N?9:2.5,F.material.emissiveIntensity=N?.35:.08},win:s,lamp:b},h.children.forEach(N=>{N.castShadow=N.castShadow??!0,N.receiveShadow=!0}),h}function oo(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new ce;l.add(w(i,s,r,R(e,{roughness:.9}),0,s/2,-r/2));let c=new z(new et(.01,i*.62,2.4,4,1),R(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(w(1.1,2.1,.1,R(o),0,1.05,.02)),l.add(w(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new He({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(w(1.3,1.2,.06,h(),d,u,.03)),l.add(w(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(w(2,.2,1.2,R("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function Oh(n=4){let e=new ce,t=Ie(n*7);for(let i=0;i<n*3;i++){let s=new z(new Tt(.42+t()*.12,12,10),R(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function yf(n=8,e="#E8E2D2"){let t=new ce;for(let i=0;i<=n*4;i++)t.add(w(.1,1.3,.05,R(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(w(n,.08,.06,R(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function qa(){let n=new ce,e=Ie(4);for(let t=0;t<7;t++){let i=new z(new Tt(.35,12,10),R("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new z(new Tt(.08,10,8),R(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function kE(){let n=new ce;n.add(w(2.2,2,1.8,R("#8A6A4A",{roughness:.9}),0,1,0));let e=w(2.6,.12,2.3,R("#5A3E2A"),0,2.12,0);return n.add(e),n.add(w(.8,1.5,.05,R("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function vf(n=.6){let e=w(n,n*.8,n,R("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(w(n*1.01,.06,.15,R("#E8D8A8"),0,n*.4,0)),e}function _f(){let n=new ce;n.add(w(.04,1.4,.04,R("#E8667F"),0,.7,0));let e=new z(new Tt(.28,16,12),new He({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new z(new gn(.18,.04,8,16,Math.PI*1.2),R("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=ke("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Af(n=.9,e=1.2){let t=_e(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new ce;i.add(w(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new z(new be(n,e),R("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Mf(n=.9,e=1.2){let t=_e(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new ce;i.add(w(n+.08,e+.08,.04,"#111",0,0,0));let s=new z(new be(n,e),R("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Ps(n="#3A4F7A",e="FILOSOF\xCDA"){let t=new ce;t.add(w(.5,.64,.06,R(n),0,0,0));let i=_e(256,128,r=>{r.fillStyle=n,r.fillRect(0,0,256,128),r.fillStyle="#F2C14E",r.font="900 40px Fraunces",r.textAlign="center",r.fillText(e,128,76)}),s=new z(new be(.46,.23),R("#fff"));return s.material.map=i,s.position.z=.032,t.add(s),t.userData.label=s,t}var GE=(n,e)=>{ge.quarto(n,e);let t=Af();t.position.set(-3,2.8,-2.8),n.add(t)};ge.cuartoYo=(n,e)=>{GE(n,e);let t=Xa({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=_f();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Mf(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&vn(n,600,120,2)};ge.cuartoElla=(n,e)=>{ge.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=_f();t.position.set(-3.2,0,-2.2),n.add(t);let i=Mf();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Xa({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Af(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&vn(n,600,120,2)};ge.entreCasas=(n,e)=>{let t=!!e.night;n.background=new he(t?"#0A0C1E":"#9FC8E8"),n.fog=new Re(t?"#0E1028":"#CFE0EE",.02),ct(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&vn(n,1600,120,5),zh(n,t?"#24301E":"#6E9A50");let i=Xa({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Xa({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=yf(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new we(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(Qe(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};ge.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Re(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),ct(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),zh(n,t?"#24301E":"#6E9A50");let s=w(200,.02,6,R(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=w(200,.1,2,R("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let f=oo({col:d,roof:u,night:t});f.position.set(h,0,-3),n.add(f)}let a=Oh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Oh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Oh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])Wt(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));ii(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new we(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(Qe(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};ge.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#E8A880":"#F2E2C8",.015),ct(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),zh(n,"#6E9A50");let i=yf(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=qa();s.position.set(1.6,0,-1.2),n.add(s);let r=qa();r.position.set(2.8,0,-2.6),n.add(r);let o=kE();o.position.set(-2.4,0,-3.2),n.add(o);let a=oo({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=oo({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])Wt(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new we("#E9EEFF","#6A5A4A",1.05)),n.add(Qe(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};ge.esquina=(n,e)=>{ge.barrio(n,e)};ge.concurso=n=>{n.background=new he("#140C24"),n.fog=new Re("#1A1030",.03);let e=w(20,.2,12,R("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=ke(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Le(Ft(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=w(1.2,1.1,.7,R("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(w(1.3,.1,.8,R("#F2C14E"),0,1.12,-.6)),n.add(new we("#B8A8FF","#2A1A3A",.9));let s=new xn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};ge.residencia=n=>{n.fog=new Re("#E8DCC8",.02),n.add(si(20,14,"#8A6A4A")),n.add(w(20,4,.3,R("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(w(1,2.2,.08,R("#6B4A33"),-7+e*2,1.1,-3.2));let t=Le(Ft([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new we("#FFFFFF","#9A8A70",1)),n.add(Qe("#FFE8C8",2,[-6,8,6],12,40))};var Za=(n,e,t=200,i=200)=>{let s=new z(new be(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Ya=["#2E4F2C","#3B6636","#55813F","#A9B65A"],Sf=["#0E1A16","#13221C","#1A2C22","#22382A"],$a=(n,e=-60,t="#7A8AA8",i="#F4F6FA",s=4,r=9)=>{let o=Ie(s);for(let a=0;a<r;a++){let l=14+o()*16,c=12+o()*10,h=new z(new dn(c,l,7),R(t,{roughness:1}));if(h.position.set(-70+a*17+o()*6,l/2-1,e-o()*25),n.add(h),i){let d=new z(new dn(c*.34,l*.34,7),R(i,{roughness:1}));d.position.set(h.position.x,l-l*.17-1,h.position.z),n.add(d)}}},kh=(n,e,t,i,s,r="#4A8AB0",o=!1)=>{let a=new z(new hn(1,48),new He({color:r,roughness:.08,metalness:.35,emissive:o?"#0A1A30":"#000",emissiveIntensity:o?.6:0}));return a.rotation.x=-Math.PI/2,a.scale.set(i,s,1),a.position.set(e,.02,t),a.receiveShadow=!0,n.add(a),a};ge.albergue=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#E8B090":"#D8E4E8",.012),ct(n,-200,700,260,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),$a(n,-70,t?"#6A5A88":"#7A8EAE"),Za(n,"#6E9A48");let i=oo({col:"#9A6A44",roof:"#5A3A2A",w:9,h:4.2,d:6,door:"#4A2E1E"});i.position.set(-3.5,0,-7),n.add(i);let s=Le(Ft(["ALBERGUE LOS PINOS"],{bg:"#4A2E1E",fg:"#F2C14E",size:70,w:900,h:150}),3.2,.54);s.position.set(-3.5,3.4,-6.9),n.add(s),kh(n,6,-9,6,3.2);let r=Ie(31);for(let o=0;o<22;o++){let a=(r()-.5)*40;Math.abs(a+3.5)<6&&o<14||Wt(n,a,-10-r()*16,1.3+r()*.7,Ya,o)}for(let[o,a]of[[-9,-3],[9,-4],[-11,-6]])Wt(n,o,a,1.4,Ya,o|0);n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Qe(t?"#FFB080":"#FFE2B0",t?2.2:2.8,[-10,16,10],16,70))};ge.gymkana=(n,e)=>{n.fog=new Re("#D8E4E8",.012),ct(n,-200,700,260,[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),$a(n,-70),Za(n,"#7AA850"),kh(n,0,-9,9,3.4);let t=Ie(7);for(let s=0;s<18;s++)Wt(n,(t()-.5)*44,-14-t()*14,1.3+t()*.6,Ya,s);let i=new z(new hn(1,32),R("#6A4A2E",{roughness:.4}));i.rotation.x=-Math.PI/2,i.scale.set(1.6,1,1),i.position.set(1.2,.015,-1.2),n.add(i);for(let s of[-3,3]){let r=new z(new dn(.18,.45,12),R("#F2A766"));r.position.set(s,.22,.8),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Qe("#FFE2B0",2.8,[-10,16,10],16,70))};ge.lagoNoche=(n,e)=>{n.background=new he("#05071A"),n.fog=new Re("#0A0E24",.02),vn(n,4200,200,11),ct(n,-150,600,220,[[0,"#03040E"],[.6,"#0E1434"],[1,"#22284A"]]),$a(n,-80,"#141A30","#3A4460",6),Za(n,"#1E2A20"),kh(n,0,-8,12,4,"#1A2A48",!0);let t=Ie(17);for(let r=0;r<24;r++){let o=(t()-.5)*40;Wt(n,o,-14-t()*14,1.3+t()*.6,Sf,r)}for(let[r,o]of[[-6,-2],[6.5,-3],[-8,-5]])Wt(n,r,o,1.3,Sf,r*3|0);let i=ke("#F4F0D8",5,.9);i.position.set(14,22,-90),i.material.fog=!1,n.add(i),n.add(new we("#6A78C8","#10141E",.55));let s=new pi("#9AA8E8",.6);s.position.set(8,12,-6),n.add(s)};ge.cima=(n,e)=>{n.fog=new Re("#E4EEF4",.006),ct(n,-200,900,300,[[0,"#2F6AB8"],[.55,"#8EC0E8"],[1,"#F4F8FA"]]);let t=new z(new be(800,800),R("#F6F8FA",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-14,n.add(t);let i=Ie(9);for(let l=0;l<40;l++){let c=ke("#FFFFFF",18+i()*14,.55);c.position.set((i()-.5)*300,-12+i()*3,-40-i()*200),n.add(c)}for(let l=0;l<6;l++){let c=10+i()*8,h=new z(new dn(8+i()*6,c,6),R("#8A8EA0"));h.position.set(-60+l*24,-14+c/2,-90-i()*40),n.add(h);let d=new z(new dn(3,c*.3,6),R("#F4F6FA"));d.position.set(h.position.x,-14+c*.85,h.position.z),n.add(d)}let s=new z(new et(4.5,9,14,9),R("#8A8070",{roughness:1}));s.position.set(0,-7,-1),n.add(s);let r=new z(new hn(4.6,9),R("#9A9070",{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.01,-1),n.add(r);for(let l=0;l<10;l++){let c=new z(new Hi(.3+i()*.4),R("#7A7262")),h=i()*6.28;c.position.set(Math.cos(h)*(3+i()),.1,-1+Math.sin(h)*(2.5+i())),!(c.position.z>1.2)&&n.add(c)}n.add(w(.5,1,.5,R("#C8C0A8"),-2.6,.5,-2.6));let o=w(.06,.9,.06,R("#3A3A40"),-2.6,1.45,-2.6);n.add(o),n.add(w(.5,.06,.06,R("#3A3A40"),-2.6,1.6,-2.6));let a=Le(Ft(["PICO \xB7 2.130 m"],{bg:"#FBF7EC",fg:"#2A2A34",size:70,w:600,h:150}),1,.25);a.position.set(-2.6,.75,-2.34),n.add(a),n.add(new we("#EEF4FF","#8A8070",1.05)),n.add(Qe("#FFF0D0",3,[-8,18,10],12,60))};ge.sendero=(n,e)=>{n.fog=new Re("#C8D8C8",.02),ct(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),$a(n,-60,"#7A8EAE"),Za(n,"#6E8A48");let t=new z(new be(2.2,60),R("#B49A72",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.set(0,.012,-20),n.add(t);let i=Ie(23);for(let s=0;s<30;s++){let r=i()<.5?-1:1;Wt(n,r*(2.6+i()*12),2-i()*30,1.2+i()*.7,Ya,s)}for(let s=0;s<8;s++){let r=new z(new Hi(.2+i()*.3),R("#8A8070"));r.position.set((i()<.5?-1:1)*(1.3+i()),.1,-i()*10),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Qe("#FFE2B0",2.6,[-10,16,10],16,70))};ge.comedor=(n,e)=>{n.background=new he("#0E0A1E"),n.fog=new Re("#140E2A",.03),n.add(si(20,14,"#6A4A30")),n.add(w(20,5,.3,R("#5A3A2A"),0,2.5,-4.2));for(let a of[-1,1])n.add(w(.3,5,14,R("#5A3A2A"),a*8,2.5,0));for(let a=0;a<9;a++)n.add(w(.12,5,.1,R("#3A2418"),-8+a*2,2.5,-4));let t=Le(Ft(["FIESTA FIN DE CURSO"],{bg:"#E8447A",fg:"#FFFFFF",size:80,w:1100,h:170}),4,.62);t.position.set(0,3.6,-4),n.add(t);for(let a of[-5.2,5.2]){n.add(w(1,.08,4,R("#8E6242"),a,.78,-1.2));for(let[l,c]of[[-1,-2.8],[1,-2.8],[-1,.4],[1,.4]])n.add(w(.06,.78,.06,R("#3A2418"),a+l*.4,.39,c))}let i=[];for(let a=0;a<26;a++){let l=-7+a*.56,c=ke(["#FF6A9A","#6AD8FF","#FFD84A","#9AFF8A"][a%4],.35,.9);c.position.set(l,3-Math.sin(a/25*Math.PI)*.5,-3.8),n.add(c),i.push(c)}let s=new z(new hn(2.8,48),new He({color:"#2A2240",roughness:.2,metalness:.4,emissive:"#4A2A7A",emissiveIntensity:.35}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-.8),n.add(s);let r=[];for(let[a,l]of[["#FF3A8A",-3],["#3AB8FF",0],["#FFD83A",3]]){let c=new nt(a,10,9,1.4);c.position.set(l,3.2,0),n.add(c),r.push(c)}n.add(new we("#8A7AC8","#20142A",.55));let o=new xn("#FFE8F0",30,14,.6,.6,1.2);o.position.set(0,6,3),o.target.position.set(0,0,-.8),o.castShadow=!0,n.add(o,o.target),n.userData.disco=a=>{r.forEach((l,c)=>{l.position.x=Math.sin(a*.9+c*2.1)*3.5,l.intensity=8+Math.sin(a*5+c)*3}),i.forEach((l,c)=>l.material.opacity=.55+.45*Math.sin(a*4+c))}};ge.salida=(n,e)=>{let t=!!e.dusk,i=!!e.manana;ge.barrio(n,{dusk:t});let s=mf("#F2C14E");s.rotation.y=Math.PI/2,s.position.set(1,0,-3.4),n.add(s);let r=Le(Ft(["VIAJE FIN DE CURSO"],{bg:"#2F5A9A",fg:"#FFFFFF",size:70,w:900,h:140}),2.6,.4);if(r.position.set(1,2.3,-2.18),n.add(r),i){let o=new pi("#FFD0A0",.8);o.position.set(10,3,6),n.add(o)}};var lo=(n,e,t=200,i=200,s={})=>{let r=new z(new be(t,i),R(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},ao=(n,e=1.6)=>new He({color:n,emissive:n,emissiveIntensity:e});function Gh(n=2.6){let e=new ce,t=_e(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Le(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function VE(n="#FFB25A"){let e=new ce,t=new z(new et(.16,.12,.34,12),ao(n,1.8));e.add(t);let i=ke(n,1,.55);return e.add(i),e}var WE=(n,e,t,i=3)=>{let s=Ie(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new z(new Tt(.07+s()*.06,10,8),ao(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=w(.02,.12,.02,R("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};ge.desvan=(n,e)=>{let t=!!e.night;n.background=new he("#1A120C"),n.fog=new Re("#2A1C12",.05),n.add(si(16,14,"#6A4630"));for(let h of[-1,1]){let d=w(16,.15,7.5,R("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(w(16,6,.2,R("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=w(.22,.22,9,R("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Ie(6);for(let h=0;h<9;h++){let d=vf(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=w(1.4,.8,.7,R("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(w(1.44,.1,.74,R("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=It(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=Fs(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new z(new Tt(.09,12,10),ao("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(w(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new nt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new we("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=ke("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};ge.pasillo=(n,e)=>{n.background=new he("#1A1036"),n.fog=new Re("#2A1850",.045),vn(n,1600,120,7),lo(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=Ie(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let f of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(f>0?1:0))%i.length],m=w(.12,2.6,1.3,R("#F4ECD6"),f*2.4,1.3,g);n.add(m);let p=w(.08,2.3,1.05,R(E,{roughness:.6}),f*2.35,1.15,g);n.add(p);let _=new z(new Tt(.05,8,6),ao("#F2C14E",.6));_.position.set(f*2.29,1.1,g+.35),n.add(_)}let s=new ce,r=new ce;r.position.set(0,0,.55),s.add(r);let o=w(.08,2.3,1.05,R("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new z(new Tt(.05,8,6),ao("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Le(Ft(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=It(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let f=ke(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);f.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(f)}n.add(new we("#D8C8FF","#4A3070",1));let h=new nt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new nt("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};ge.playaSueno=(n,e)=>{n.fog=new Re("#E8B8E0",.018),ct(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=ke("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new z(new hn(4,40),new tt({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=lo(n,"#F8EEF2",200,200),r=new z(new be(400,200),new He({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=w(400,.02,.3,R("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Ie(4);for(let l=0;l<70;l++){let c=ke("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new ce;c.add(w(.18,2.8,.18,R("#E8A0C0"),0,1.4,0));let h=ke(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new we("#FFE0F6","#B88AC8",1.15)),n.add(Qe("#FFD8E8",2,[8,14,-6],14,60))};ge.baile=(n,e)=>{n.background=new he("#0E0A28"),n.fog=new Re("#1A1240",.03),vn(n,2400,160,3),ct(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),lo(n,"#3A2A5A");let t=new z(new hn(3.2,48),new He({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),WE(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=qa();c.position.set(a,0,l),n.add(c)}let i=Ie(9),s=[];for(let a=0;a<22;a++){let l=VE(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new we("#B8A8FF","#2A1A3A",.7));let r=new xn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new nt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};ge.estadio=(n,e)=>{n.background=new he("#0A1020"),n.fog=new Re("#18203A",.02),vn(n,800,160,5);let t=_e(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new z(new be(40,40),new He({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new ce,r=R("#FFFFFF",{roughness:.4});s.add(w(.12,2.4,.12,r,-3.6,1.2,0),w(.12,2.4,.12,r,3.6,1.2,0),w(7.3,.12,.12,r,0,2.4,0));let o=new z(new be(7.2,2.4),new tt({color:"#FFFFFF",transparent:!0,opacity:.18,side:At}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(w(60,1,2,R(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Ie(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);Ih(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=ke("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new we("#D8E0FF","#2A3A2A",1));let c=Qe("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};ge.concierto=(n,e)=>{n.background=new he("#0C0820"),n.fog=new Re("#140C2C",.025);let t=w(14,.6,6,R("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),lo(n,"#140E26").position.y=-.01;let i=It(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Ie(4);for(let l=0;l<9;l++){let c=ke(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=Fs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new ce;r.add(w(.03,1.4,.03,R("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new z(new Tt(.06,12,10),R("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=ke(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new we("#B8A8FF","#2A1A3A",.8));let a=new xn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};ge.gris=(n,e)=>{n.background=new he("#1C1E24"),n.fog=new Re("#262830",.06),lo(n,"#4A4C54"),n.add(w(14,7,.2,R("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),4.2,3.5,0));let t=It(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(w(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(w(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new we("#A8B0C8","#2A2A30",.6));let i=new xn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new nt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};ge.labSueno=(n,e)=>{ge.lab(n,e),hf(n,-1.4,-1.6,"#4A86C7");let t=new ce;t.add(w(.12,1.4,.12,R("#3A3A44"),0,.7,0)),t.add(w(1,.7,.1,R("#20242E"),0,1.7,0));let i=It(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var Ja=(n,e,t=200,i=200,s={})=>{let r=new z(new be(t,i),R(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Tf=(n,e=1.6)=>new He({color:n,emissive:n,emissiveIntensity:e}),XE=(n="#8C8A84",e=3)=>{let t=_e(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Ie(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=cn,t},Is=(n,e,t,i,s,r,o,a=3)=>{let l=XE(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new z(new Rn(n,e,t),new He({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function qE(n="#B8B4A8"){let e=new ce,t=new z(new et(.09,.09,.22,18),R(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new z(new et(.092,.092,.12,18,1,!0),new He({map:_e(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function YE(){let n=new ce;n.add(w(1,.8,.6,R("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(w(.3,.3,.02,R("#222"),-.25,.5,.31));let e=new z(new Tt(.04,10,8),Tf("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(w(.02,.4,.02,R("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function ZE(){let n=new ce;n.add(w(.36,.5,.08,R("#3A3C3A",{metalness:.5}),0,0,0));let e=new ce;e.position.set(0,0,.06),n.add(e);let t=w(.05,.4,.05,R("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new z(new Tt(.07,14,10),R("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function $E(){let n=new ce;n.add(w(8,2.4,2.5,R("#F2B830",{roughness:.5}),0,1.6,0)),n.add(w(8.02,.25,2.52,R("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(w(.85,.7,.02,R("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new z(new et(.45,.45,.3,16),R("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=ke("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function bf(n,e,t={}){let i=Ft(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Le(i,e,e*(t.h||260)/(t.w||1100))}ge.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new he("#0E0F10"),n.fog=new Re(t?"#050608":"#2A2A28",t?.08:.045);let s=Is(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Is(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Is(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Is(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Is(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(w(.25,.3,10,R("#6A6862"),b,3.35,-.5));let r=new ce;r.add(w(2,.2,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new ce;o.position.set(-.85,0,-3.3),n.add(o);let a=R("#6E7670",{metalness:.7,roughness:.35}),l=w(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(w(1.6,.08,.04,R("#5A605C",{metalness:.7}),.85,b,.1));let c=new z(new gn(.26,.035,8,28),R("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let F=w(.5,.03,.03,R("#B8241A"),.85,1.25,.14);F.rotation.z=b*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=ZE();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Le(Ft(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=b=>{let F=new ce,S=R("#4A5450",{metalness:.6,roughness:.4});for(let A of[-.45,.45])for(let P of[-1,1])F.add(w(.06,2.3,.06,S,A,1.15,P));for(let A of[.45,1.6])F.add(w(.96,.06,2.1,S,0,A,0)),F.add(w(.86,.14,1.96,R("#7A8A6A",{roughness:1}),0,A+.1,0)),F.add(w(.5,.1,.3,R("#D8D2C0"),0,A+.21,-.8));return F.position.set(b,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let f=new ce;for(let b of[.9,1.5])f.add(w(1.4,.05,.35,R("#5A4A3A"),0,b,0));for(let b of[-.7,.7])f.add(w(.05,1.6,.35,R("#5A4A3A"),b,.8,0));f.position.set(-2,0,-3.2),n.add(f);let g=[];for(let b=0;b<6;b++){let F=qE();F.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),f.parent.add(F),g.push(F)}n.userData.cans=g;let E=YE();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new ce;m.add(w(.06,.7,.9,R("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(w(.08,.04,.8,R("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(w(1.4,.06,.8,R("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let F of[-.32,.32])n.add(w(.05,.75,.05,R("#3A2E22"),b,.375,.3+F))}if(e.museo){let b=bf(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let p=Le(_e(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);p.position.set(2.6,2.3,-3.38),n.add(p);let _=[];for(let b of[-1.6,1.6]){let F=new z(new Tt(.09,12,10),Tf("#FFD089",t?0:2.2));F.position.set(b,3.1,-.6),n.add(F),_.push(F),n.add(w(.22,.02,.22,R("#333"),b,3.2,-.6,!1))}let v=[];if(!t)for(let b of[-1.6,1.6]){let F=new nt("#FFC27A",11,10,1.4);F.position.set(b,2.9,-.4),F.castShadow=b<0,n.add(F),v.push(F)}let y=new we(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=v,n.userData.bulbs=_,n.userData.hemi=y,i){let b=It(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let F=Fs(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new xn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,F,S]}let L=Ie(5),C=[];for(let b=0;b<26;b++){let F=ke("#FFE8C0",.04,t?.2:.5);F.position.set((L()-.5)*6,.5+L()*2.6,-3+L()*4),n.add(F),C.push(F)}n.userData.dust=C};ge.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Re(t?"#1A1E28":"#C8D0B8",t?.045:.022),ct(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Ja(n,t?"#2A3A24":"#6E8A48");let i=Ie(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||Wt(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new z(new Tt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),R(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Is(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(w(1.5,2,.1,R("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=bf(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=$E();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new we("#6A7A9A","#1A1E1A",.75));let a=new we("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=Qe("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new tt({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new z(new Rn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[f,g,E,m]=u.userData.p;u.position.set(f+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(Qe("#FFD29A",2.6,[-12,16,10],16,70))};ge.puente=(n,e)=>{let t=!!e.normal;n.fog=new Re("#C8D8E0",t?.02:.012),ct(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Qe("#FFE2B0",2.6,[-10,18,12],16,80));let i=Ie(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){Ja(n,"#6E8A48");let l=new z(new be(3.4,60),R("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(w(1.4,.14,5,R("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(w(.08,.5,5,R("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(w(.1,.6,.1,R("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)Wt(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Is(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),Ja(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)Wt(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new z(new be(14,200),new He({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new z(new Hi(1.5+i()*2),R("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=R("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=w(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new I(u,o(u)+1,l*.55))}let h=new z(new Ss(new es(c),60,.025,6),R("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(w(.015,1,.015,R("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(w(.18,1.6,.18,R("#6A4630"),d,.8,l*.55))}n.userData.y=0};ge.marte=(n,e)=>{n.background=new he("#10141A"),n.fog=new Re("#1A2028",.05);let t=new z(new et(2.4,2.4,30,28,1,!0),new He({color:"#C8CCD0",side:nn,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(w(3.6,.1,30,R("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new z(new gn(2.38,.05,6,28),R("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=It(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(w(.6,.5,1.8,R("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(w(.05,.6,.5,R("#2A3A4A"),r*1.75,1.6,-o*3));let a=It(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Le(Ft(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new we("#E8F0FF","#4A505A",.9));let s=new nt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};ge.biosfera=(n,e)=>{n.fog=new Re("#F2D8B0",.012),ct(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),Ja(n,"#D8B07A");let t=Ie(31);for(let l=0;l<8;l++){let c=new z(new dn(8+t()*8,6+t()*6,6),R("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new ce;c.add(w(.3,1.6+t(),.3,R("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new He({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:At}),s=new tt({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new dn(l,l*1.1,4,4);for(let u of[i,s]){let f=new z(d,u);f.rotation.y=Math.PI/4,f.position.set(c,l*.55,h),n.add(f)}};r(5,-3,-12),r(3.4,5,-10);let o=new Tt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new z(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)Wt(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Le(Ft(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new we("#FFF0DC","#B08A6A",1.05)),n.add(Qe("#FFD29A",3,[-14,16,10],20,70))};ge.noria=(n,e)=>{ge.parque(n,{dusk:!0});let t=new ce,i=R("#E8E2D2",{metalness:.4,roughness:.4}),s=new z(new gn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=w(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new ce;c.add(w(.7,.6,.6,R(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=ke("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=w(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var co=(n,e=1.6)=>new He({color:n,emissive:n,emissiveIntensity:e}),Vn=(n="#A8ACB0")=>R(n,{metalness:.75,roughness:.32}),Qa=(n="#9EA2A6")=>{let e=_e(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=Ie(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new He({map:e,metalness:.7,roughness:.35})},wf=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Le(Ft([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function Rf(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new ei(e);i.colorSpace=Gt;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new z(new be(.5,.31),new tt({map:i,toneMapped:!1}));return r.userData.set=s,r}function JE(){let n=new ce;n.add(w(.36,.9,.03,Vn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new z(new et(.04,.04,.02,16),co("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Le(Ft([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new z(new et(.05,.05,.025,16),co("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Le(Ft(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new ce;for(let o=0;o<5;o++)r.add(w(.16,.012,.01,R("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}ge.ascensor=(n,e)=>{n.background=new he("#08090C"),n.fog=new Re("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=Qa("#A4A8AC"),o=w(2.6,.1,2.4,R("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new z(new be(2.4,2),new He({map:(()=>{let C=_e(256,256,b=>{b.fillStyle="#4A4440",b.fillRect(0,0,256,256),b.strokeStyle="#3A3430",b.lineWidth=3;for(let F=0;F<256;F+=32)b.beginPath(),b.moveTo(F,0),b.lineTo(F,256),b.stroke(),b.beginPath(),b.moveTo(0,F),b.lineTo(256,F),b.stroke()});return C.wrapS=C.wrapT=cn,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(w(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(w(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(w(2.6,.08,2.4,R("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(w(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(w(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(w(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=Vn("#B4B8BC"),c=w(.56,2.2,.04,l,-.28,1.1,i+.03),h=w(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(w(.01,2.2,.045,R("#555"),0,1.1,i+.04));let d=w(1.1,2.2,.02,R("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=Rf(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let f=JE();f.position.set(.85,1.25,i+.05),n.add(f),n.userData.botonera=f;for(let C of[-1,1])n.add(w(.04,.04,1.8,Vn("#C8CCD0"),C*(t-.06),.95,-.5));let g=new z(new be(1.5,1.5),new He({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(w(.02,1.56,1.56,R("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Le(Ft(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=It(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let p=new nt("#FFF4E4",10,7,1.4);p.position.set(0,s-.3,-.3),p.castShadow=!0,n.add(p);let _=new z(new Rn(.3,.06,.14),co("#FFB040",0));_.position.set(-.7,s-.05,-1.3),n.add(_);let v=new nt("#FFA840",0,6,1.4);v.position.set(-.6,s-.4,-1),n.add(v);let y=new we("#E8ECF0","#3A3634",.5);n.add(y);let L=new nt("#FFE8C8",0,8,1.6);L.position.set(0,1.8,2.4),n.add(L),n.userData.luz=(C,b=0)=>{let F=Math.max(0,Math.min(1,C))*(1-b);m.material.emissiveIntensity=1.6*F,p.intensity=10*F,_.material.emissiveIntensity=2.4*(1-F),v.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),L.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};ge.rellano=(n,e)=>{let t=!!e.night;n.background=new he("#14120F"),n.fog=new Re("#2A2620",.035),n.add(mi(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(w(6.38,3.4,.3,R(i),-3.81,1.7,-3.2)),n.add(w(6.38,3.4,.3,R(i),3.81,1.7,-3.2)),n.add(w(1.24,1.2,.3,R(i),0,2.8,-3.2)),n.add(w(.3,3.4,10,R(i),-5,1.7,0)),n.add(w(.3,3.4,10,R(i),5,1.7,0)),n.add(w(14,.2,10,R("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(w(6.3,.9,.02,R(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(w(1.5,.12,.1,Vn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(w(.12,2.3,.1,Vn("#9EA2A6"),E*.69,1.13,-3.02));let s=new ce;s.add(w(1.3,.05,1.6,R("#4A4440"),0,0,-.8)),s.add(w(1.3,2.2,.05,Qa(),0,1.1,-1.6));for(let E of[-1,1])s.add(w(.05,2.2,1.6,Qa(),E*.65,1.1,-.8));let r=It(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new nt("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=Vn("#B4B8BC"),l=w(.62,2.2,.05,a,-.31,1.1,-3),c=w(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=Rf(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=w(.1,.2,.03,Vn(),.95,1.2,-3.03);n.add(d);let u=new z(new Tt(.03,10,8),co("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let f=wf(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(f.position.set(1.5,2.2,-3.03),n.add(f),e.portal){let E=new ce;for(let p=0;p<12;p++)E.add(w(.36,.26,.04,R("#8E6242"),-.6+p%4*.4,-Math.floor(p/4)*.3,0)),E.add(w(.2,.02,.02,R("#2A2A2A"),-.6+p%4*.4,-Math.floor(p/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(w(.04,2.6,2,R("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Le(Ft(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(w(1,2.2,.06,R("#6B4A33"),E,1.1,-3.02));let p=Le(Ft([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);p.position.set(E,1.85,-2.98),n.add(p);let _=new z(new Tt(.04,10,8),Vn("#D8B860"));_.position.set(E+.38,1.05,-2.96),n.add(_)}let g=[];for(let E of[-2.5,2.5]){let m=new z(new Tt(.16,14,10),co("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let p=new nt("#FFE0B0",t?6:9,9,1.4);p.position.set(E,2.9,-.8),p.castShadow=E<0,n.add(p)}n.add(new we("#F4ECE0","#4A4034",t?.35:.6))};var ss=3;ge.hueco=(n,e)=>{n.background=new he("#05060C"),n.fog=new Re("#0A0C18",.02),ct(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),vn(n,1600,220,3),ii(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*ss,i=R("#3A3A42",{roughness:.95});n.add(w(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(w(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*ss;if(n.add(w(4.1,.14,.1,R("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(w(4.1,.25,3.2,R("#5A5A64"),0,-.12,-.8)),g<=12){let m=Le(Ft([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(w(.08,t,.08,Vn("#7A7E84"),g*1.75,t/2,-1.6));let s=new ce,r=Qa("#A4A8AC");s.add(w(2.6,.12,2.2,R("#3A3634"),0,0,0)),s.add(w(2.6,.1,2.2,R("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(w(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(w(2.6,2.8,.08,r,0,1.4,-1.1));let o=It(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new nt("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new nt("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(w(.4,.3,.4,R("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=w(.18,.3,.18,R("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new z(new et(.6,.6,.3,24),Vn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new z(new et(.018,.018,1,6),Vn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=w(.7,1.6,.3,R("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new z(new et(.03,.03,1,6),Vn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([v,y])=>{let L=Math.max(.01,(t-m)*(1-E));v.scale.y=L,v.position.set(y,t-L/2,-.6)});let p=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let _=t-d.position.y-.8;u.scale.y=Math.max(.01,_),u.position.set(1.25,t-_/2,-1.8)},n.userData.setCab(e.y??7.5*ss);for(let g=0;g<=12;g+=2){let E=new nt("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*ss+2.2,.4),n.add(E)}n.add(new we("#6A78A8","#101018",.5));let f=Ie(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let p=f()<.55,_=It(.8,1,p?"#FFD890":"#1A1C2A",p?1.2:.2);_.position.set(E*(3.2+m*1.6),g*ss+1.6,-.6),n.add(_),n.add(w(1.4,ss,.2,R("#2A2A34"),E*(3.2+m*1.6),g*ss+ss/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};ge.feria=(n,e)=>{n.background=new he("#2A2018"),n.fog=new Re("#6A5A44",.03),n.add(mi(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(w(.25,12,.25,R("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new z(new gn(2,.1,6,24,Math.PI),R("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=It(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(w(.6,.4,.02,R(t[l%3]),-8+l*2,9.5,-6));let i=R("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(w(.25,9,.25,i,l*1.4,4.5,-3));n.add(w(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=w(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new z(new et(.4,.4,.15,18),R("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new ce;r.add(w(2.4,.15,1.8,R("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(w(.08,1,.08,i,l*1.1,.5,.8));r.add(w(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=w(.16,.2,.16,R("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new z(new et(.03,.03,1,6),R("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Le(Ft(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new we("#FFE8C8","#5A4A38",.9)),n.add(Qe("#FFD8A0",2.2,[-6,14,8],14,50))};var QE=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));ge.escalera=(n,e)=>{n.background=new he("#1E1A16"),n.fog=new Re("#2A2620",.04),n.add(mi(14,10,"#C8B898","#B8A888",8)),n.add(w(16,7,.3,R("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=w(.34,.18*(15-o),1.6,R("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(w(.34,.03,1.62,R("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(w(2.6,2.6,1.6,R("#B8A890"),-4.3,1.3,-1.3));let i=new z(new et(.03,.03,5.7,8),R("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(w(.025,.9,.025,R("#2A2A2E"),-2.9+o*.32,QE(-2.9+o*.32)+.45,-.5));let s=wf(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=It(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new nt("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new we("#F4ECE0","#4A4034",.6))};var uo=[],KE=999,jE=n=>n+1<Va.length?Va[n+1]:KE,Vh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),ey=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[Vh(i,s,t),s,Vh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,Vh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},$=(n,e)=>{let t=Va[n],i=jE(n),s=Math.min(i,575)-t;uo.push([(r,o)=>cf(r,o,ey(e(s,t),s)),t,i])};var Yt=n=>({tipo:"humano",...n}),Mt=(n={})=>Yt({glow:.1,...n});var Be=(n={})=>Yt({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var X=(n,e,t=0)=>pf(e,n+t)-n,ho=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Le(Ft(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},ty=(n,e,t,i,s={})=>ho(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),ny=(n,e,t,i,s={})=>ho(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var Bn=(n,e,t,i=1e9,s)=>{let r=ze(t,t+.2,e)*(1-ze(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&yn(n,s)};var If=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),Lf=n=>n.pose({armL:[12,8],armR:[95,0]});var iy=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},sy=n=>{n.pose({armL:[8,6],armR:[8,6]}),iy(n)};var gi=n=>{let e=new I;return n.arms.R.hand.getWorldPosition(e),e};var fo=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=ke(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},ry=n=>{let e=[0,1,2].map(()=>{let t=Le(Hh("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),yn(o,s)})};var oy=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),df(t),e.p2&&e.p2(t,i)}});var Df=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Le(ff(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var Uf=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)};var xf=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],Sn=(n,e={})=>{let[t,i,s]=xf[n%xf.length];return Yt({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},Wn=(n=0,e={})=>Sn(n,{outfit:"jaleco",glasses:!0,...e}),ay={bg:"#C9361F",fg:"#fff"},ly={bg:"#2F5A9A",fg:"#fff"};var Hf={bloom:.38,bloomT:.9,vig:.6,exposure:1},se=(n,e,t,i,s=2.2)=>{let r={y:ho,w:ty,p:ny,r:(l,c,h,d)=>ho(l,c,h,d,ay),b:(l,c,h,d)=>ho(l,c,h,d,ly)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:X(e,l));return(l,c)=>o.forEach((h,d)=>Bn(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var cy=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(w(s,.08,r,R(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.07,i,.07,R("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))};var hy=(n,e=8)=>{let t=[],i=Ie(3);for(let s=0;s<e;s++){let r=ke("#FFFFFF",.7,0);n.add(r),t.push([r,i()*6-3,1+i()*2,-1-i()*2,i()*3])}return(s,r=1)=>t.forEach(([o,a,l,c,h])=>{o.position.set(a,l,c);let d=(s*1.3+h)%1;o.material.opacity=r*(d<.08?1:0)})};var dy=(n,e={})=>_e(540,1e3,t=>{t.fillStyle=e.bg||"#141830",t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:31",270,130),t.font="800 52px Inter",(n||[]).forEach((i,s)=>{t.fillStyle=s===0?"#FF7A6A":"#F4F0E4",t.fillText(i,270,480+s*70)})}),Rr=(n,e)=>{let t=new ce;t.add(w(.62,1.18,.06,R("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new z(new be(.56,1.04),new tt({map:dy(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t};var Wh=(n,e=.35,t="#E8667F")=>{let i=Le(Hh("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},uy=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)};var Cf=n=>_e(512,400,e=>{e.clearRect(0,0,512,400),e.fillStyle="#F2A6B4";for(let[t,i,s]of[[170,170,110],[300,150,120],[380,210,90],[230,250,100],[130,250,70]])e.beginPath(),e.arc(t,i,s,0,7),e.fill();e.fillStyle="#E08A9A",e.fillRect(250,300,50,80),e.strokeStyle="#D0788A",e.lineWidth=9;for(let t=0;t<9;t++)e.beginPath(),e.arc(150+t%3*100,130+Math.floor(t/3)*70,34,t,t+2.4),e.stroke();if(n){let t=e.createRadialGradient(270,230,5,270,230,120);t.addColorStop(0,"rgba(255,240,120,1)"),t.addColorStop(1,"rgba(255,200,60,0)"),e.fillStyle=t,e.beginPath(),e.arc(270,230,120,0,7),e.fill()}}),fy=(n,e,t=1.6)=>{let i=Le(Cf(!1),t,t*.78),s=Le(Cf(!0),t,t*.78);for(let r of[i,s])r.position.set(...e),r.renderOrder=4,n.add(r);return s.position.z+=.01,s.visible=!1,r=>{s.visible=r}},py=(n,e={})=>_e(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),Ka=(n,e,t,i,s)=>{let r=Le(py(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r};var Ds=n=>{let e=Ef(["INSTITUTO"],2.6,{bg:"#2F5A9A",fg:"#fff"});e.position.set(0,3.2,-4.2),n.add(e)},Ei=(n,e)=>{let t=Bh(n,e,4.2,1.6,{bg:"#2F5A48",fg:"#F4F0E4",size:64,font:"Caveat",w:1024,h:390});return t.position.set(0,2.3,-3.38),t},Ff=(n,e,t=-.1)=>{for(let i of e){n.add(w(1,.06,.6,R("#C8A27A"),i,.75,t));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.05,.75,.05,R("#6A6E78"),i+s*.44,.37,t+r*.25))}};var my=n=>Ei(n,["x\xB2 + 3x = 10","x = ?"]);var Bf=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||60,a=Math.round(Math.max(640,Math.max(...r.map(d=>d.length))*o*.6+220)),l=Math.round(o*1.2*r.length+230),c=uf(r,{w:a,h:l,size:o,bg:s.bg||"#EFE6FF",fg:s.fg||"#4A2A8A",tail:s.tail||"left"}),h=Le(c,t,t*l/a);return h.position.set(...i),h.renderOrder=6,n.add(h),h};var gy=()=>_e(256,256,n=>{n.clearRect(0,0,256,256),n.strokeStyle="#C8A8FF",n.lineWidth=12,n.beginPath(),n.arc(128,128,108,0,7),n.stroke()}),Xh=(n,e=3,t)=>{let i=[...Array(e)].map(()=>{let r=Le(gy(),.6,.6);return r.renderOrder=5,r.castShadow=!1,n.add(r),r}),s=new I;return(r,o,a,l=1)=>{o.head.getWorldPosition(s),i.forEach((c,h)=>{let d=(r*.6+h/e)%1;c.visible=l>.01,c.position.copy(s),c.scale.setScalar(.7+d*1.4),c.material.opacity=l*(1-d)*.85,yn(c,a)})}};var Nf=(n,e,t)=>{let i=new xn("#FFF2C0",40,9,.32,.45,1.2);i.position.set(e,5,t+1.2),i.target.position.set(e,0,t),n.add(i,i.target);let s=new z(new hn(.75,32),new tt({color:"#FFF2C0",transparent:!0,opacity:.35,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.set(e,.02,t),n.add(s),[i,s]};var tA=(()=>{let n=[];for(let e of[-1,1])for(let t of[0,1])for(let i=0;i<5;i++)n.push([e*(2.9+t*.75),-2+i*.8,e*-Math.PI/2]);return n})();var Ey=(n,e="#4A86C7")=>{let t=new ce;return t.add(w(.5,.6,.25,R(e),0,.3,0)),t.add(w(.42,.25,.06,R("#2A4A7A"),0,.2,.14)),t.add(w(.5,.05,.27,R("#2A4A7A"),0,.58,0)),t.children.forEach(i=>i.castShadow=!0),n.add(t),t};var yy=(n={})=>Sn(4,{glasses:!0,...n});var vy=(n={})=>Yt({outfit:"laranja",glow:0,...n});var el=(n,e=6,t="#8AC8F2")=>{let i=[];for(let s=0;s<e;s++){let r=ke(t,.12,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.9+l/e)%1;a.position.set(r[0]+Math.sin(l*2.3)*r[3],r[1]-c*.7,r[2]+.1),a.material.opacity=o*(1-c)})};var _y=()=>_e(256,256,n=>{n.clearRect(0,0,256,256),n.fillStyle="#F4F0E4",n.font="900 150px Inter",n.textAlign="center",n.fillText("23",128,180)}),Ay=n=>{if(n.dorsal)return;let e=Le(_y(),.26,.26);e.position.set(0,-.3,.012),e.castShadow=!1,n.torso.add(e),n.dorsal=e},Us=(n={})=>{let e=n.pose;return Yt({outfit:"laranja",glow:0,...n,pose:(t,i)=>{Ay(t),e?e(t,i):t.pose()}})},My=-.28;var yi=n=>{Ds(n);for(let e=-6;e<=6;e++)n.add(w(.06,1.2,.06,R("#6A6E78"),e*.9,.6,-3.6));n.add(w(11,.05,.05,R("#6A6E78"),0,1.15,-3.6))};var Sy=(n={})=>Yt({outfit:"azul",glasses:!0,hair:"old",hairc:"#6A5A4A",glow:0,...n});ge.tiendaIn=(n,e)=>{n.background=new he("#07060E");let t=e.col||"#C8602E",i=new z(new be(3.4,4.4),R("#3A3448",{roughness:1}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,n.add(i);let s=R(t,{roughness:.9,side:At,emissive:t,emissiveIntensity:e.glow??.12});s.depthWrite=!1;for(let l of[-1,1]){let c=w(.03,2.58,4.4,s,l*.82,1,0);c.rotation.z=l*.675,n.add(c)}let r=new Kr;r.moveTo(-1.65,0),r.lineTo(1.65,0),r.lineTo(0,2.05),r.lineTo(-1.65,0);let o=new z(new wa(r),s);o.position.z=-2.2,n.add(o);let a=w(.02,1.9,.01,R("#3A2A22"),0,.95,-2.18);n.add(a),n.add(new we("#FFC890","#2A2440",e.dim?.25:.55))};var mt=(n,e,t,i={})=>{let s=i.pose;return n({x:e,z:t,y:My,...i,pose:(r,o)=>{sy(r),s&&s(r,o)}})};var tl=(n,e,t=1)=>n.pose({armL:[14+Math.sin(e*40)*4*t,8],armR:[14+Math.cos(e*38)*4*t,8],legL:[Math.sin(e*45)*5*t,0],legR:[Math.cos(e*43)*5*t,0]});var ja=(n,e)=>n.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(e*12))*.04,head:Math.sin(e*12)*5}),po={exposure:1.05,bloom:.32},Ty={exposure:1,bloom:.4,vig:.55},Ls=(n,e,t)=>{let i=ke("#FF4A5A",.55,0);n.add(i);let s=new I;return r=>{e[t].head.getWorldPosition(s),i.position.set(s.x,s.y-.1,s.z+.12),i.material.opacity=r*.35}},bt=(n,e,t)=>{let i=t.map(([r,,o,a=1.6,,l=60])=>Df(n,r,a,o,l)),s=t.map(([,r])=>typeof r=="number"?r:X(e,r));return(r,o)=>i.forEach((a,l)=>Bn(a,r,s[l],t[l][4]??(l+1<s.length?s[l+1]-.1:1e9),o))},os=n=>{let e=new ce;e.add(w(.56,.22,.26,R("#22242C",{metalness:.3}),0,0,0,!1));let t=It(.44,.1,"#7FD0FF",.9);return t.position.z=.135,e.add(t),e.position.set(0,.05,.22),n.head.add(e),e},Hs=n=>{let e=new ce;e.add(w(.3,.2,.22,R("#2A2A34"),0,0,0,!1));let t=new z(new et(.07,.07,.1,16),R("#111"));t.rotation.x=Math.PI/2,t.position.z=.15,e.add(t);let i=ke("#FF4A5A",.12,.9);return i.position.set(.1,.07,.12),e.add(i),e.position.set(0,.42,0),n.head.add(e),e},by=(n,e,t,i=0,s="#F4F0E4")=>{let r=new ce;r.add(w(.12,.05,.34,R(s),0,.03,0));let o=w(.12,.05,.14,R(s),.05,.03,.2);return r.add(o),r.add(w(.13,.052,.06,R("#E8667F"),0,.03,-.15)),r.position.set(e,0,t),r.rotation.y=i,n.add(r),r},wy=(n,e=8)=>{let t=[];for(let i=0;i<e;i++){let s=ke("#9BD04A",.35,0);n.add(s),t.push(s)}return(i,s,r=1)=>t.forEach((o,a)=>{let l=s[a%s.length],c=(i*.5+a/e)%1;o.position.set(l[0]+Math.sin(i*2+a)*.12,.1+c*1.3,l[1]),o.material.opacity=r*.45*Math.sin(c*Math.PI)})},Of=[[-.9,.6,.3],[.8,.5,-1.2],[-.3,.9,1.9],[1.1,.9,.3],[-1.3,.3,-.9]],Ry=n=>(Of.forEach(([e,t,i],s)=>by(n,e,t,i,s%2?"#D8D2C4":"#F4F0E4")),wy(n,12)),nl=(n,e)=>n.pose({armL:[95+Math.sin(e*3)*6,25],armR:[95+Math.sin(e*3+1)*6,25]}),xy=(n,e)=>n.pose({armL:[165,20],armR:[165,20],head:Math.sin(e*5)*6}),Cy=n=>n.pose({armL:[12,8],armR:[80,-40]}),Fy=(n,e)=>n.pose({armL:[120+Math.sin(e*9)*40,60],armR:[120+Math.cos(e*9)*40,60],bob:Math.abs(Math.sin(e*9))*.03}),zf=(n,e)=>n.pose({armL:[12,8],armR:[120+Math.sin(e*10)*12,120],bob:Math.abs(Math.sin(e*10))*.015}),Py=n=>n.pose({armL:[150,30],armR:[150,30]}),Iy=(n,e)=>n.pose({armL:[70,40],armR:[70+Math.sin(e*14)*6,40]}),Ly=n=>n.pose({armL:[8,4],armR:[8,4],lean:0}),as=(n={})=>vy({hair:"long",hairc:"#2A1A12",lash:!0,...n}),qh=(n={})=>Sn(0,{...n}),Dy=(n={})=>Sn(2,{...n}),Yh=(n={})=>Yt({outfit:"azul",glow:0,s:.72,...n}),kf=(n={})=>Sy(n),Zh=(n={})=>yy(n),mo=(n={})=>Yt({outfit:"jaleco",glow:0,tint:"#D9DAE2",eyes:[[0,"flat"]],pose:e=>e.pose({armL:[10,4],armR:[10,4]}),...n}),ls=(n={})=>Yt({outfit:"verde",glow:0,...n}),Xn=(n={})=>({amb:"cuartoElla",fov:32,look:po,...n}),$h=(n={})=>({amb:"cuartoYo",fov:32,look:po,...n}),qn=n=>{n.add(w(3.6,.9,.7,R("#E8E2D4"),0,.45,-2.4)),n.add(w(3.6,.06,.74,R("#8E6242"),0,.92,-2.4));for(let t=0;t<3;t++)n.add(w(1.1,.7,.4,R("#C9925A"),-1.2+t*1.2,2.2,-2.55));let e=w(.4,.25,.22,R("#C9CDD2",{metalness:.6}),.9,1.07,-2.4);return n.add(e),cy(n,0,-.3,.75,2,.9,"#D8B48A"),e},Yn=(n={})=>({amb:"sala",ambo:{wall:"#C98A5A"},fov:32,look:po,...n}),xr=(n={})=>({amb:"esquina",fov:30,look:po,...n}),Ut=(n={})=>({amb:"aula",fov:32,...n}),vi=(n={})=>({amb:"parque",fov:30,...n}),Zt=(n={})=>({amb:"biblio",fov:32,...n}),ri=(n={})=>({amb:"lab",fov:32,look:{exposure:1.08},...n}),Uy=n=>_e(256,256,e=>{e.clearRect(0,0,256,256),e.fillStyle="#C98A3A",e.beginPath(),e.roundRect(28,40,200,180,40),e.fill(),e.fillStyle="#F2D08A",e.beginPath(),e.roundRect(44,58,168,146,30),e.fill(),n>0&&(e.fillStyle="#FFF1B0",e.beginPath(),e.roundRect(56,70,144,120,24),e.fill()),n>1&&(e.fillStyle="#B02A4A",e.beginPath(),e.ellipse(128,130,60,44,0,0,7),e.fill()),n>2&&(e.strokeStyle="#E2231A",e.lineWidth=16,e.lineCap="round",e.beginPath(),e.moveTo(70,100),e.bezierCurveTo(110,160,150,70,190,150),e.stroke())}),Jh=(n,e,t)=>[0,1,2,3].map(i=>{let s=Le(Uy(i),e,e);return s.position.set(...t),s.renderOrder=5+i*.01,s.position.z+=i*.002,n.add(s),s}),Hy=()=>{let n=new ce;return n.add(w(.12,.3,.12,R("#E2231A"),0,.15,0)),n.add(w(.06,.08,.06,R("#FBF7EC"),0,.34,0)),n},By=n=>_e(400,500,e=>{e.fillStyle="#FBF7EC",e.fillRect(0,0,400,500),e.save(),n&&(e.translate(400,0),e.scale(-1,1)),e.fillStyle="#9FC4E0",e.fillRect(20,20,360,400),e.fillStyle="#4A2A1A",e.beginPath(),e.ellipse(200,210,130,150,0,0,7),e.fill(),e.fillStyle="#111",e.beginPath(),e.arc(200,200,95,0,7),e.fill(),e.fillStyle="#4A2A1A",e.beginPath(),e.moveTo(110,150),e.quadraticCurveTo(170,60,290,120),e.quadraticCurveTo(220,110,110,150),e.fill(),e.fillStyle="#F4F0E4",e.beginPath(),e.ellipse(165,205,16,22,0,0,7),e.ellipse(235,205,16,22,0,0,7),e.fill(),e.strokeStyle="#F2C14E",e.lineWidth=7,e.beginPath(),e.arc(102,250,14,0,7),e.stroke(),e.fillStyle="#F2C14E",e.fillRect(120,300,160,120),e.restore()}),rs=(n,e,t,i)=>{let s=Le(By(i),e,e*1.25);return s.position.set(...t),s.renderOrder=5,n.add(s),s},Ny=(n=!0)=>_e(256,256,e=>{e.clearRect(0,0,256,256),e.fillStyle=n?"#3F8A52":"#C9361F",e.beginPath(),e.arc(128,128,110,0,7),e.fill(),e.strokeStyle="#fff",e.lineWidth=26,e.lineCap="round",e.beginPath(),n?(e.moveTo(70,132),e.lineTo(112,174),e.lineTo(188,90)):(e.moveTo(84,84),e.lineTo(172,172),e.moveTo(172,84),e.lineTo(84,172)),e.stroke()}),Gf=(n,e,t,i=!0)=>{let s=Le(Ny(i),e,e);return s.position.set(...t),s.renderOrder=7,n.add(s),s},Oy=()=>_e(512,360,n=>{n.clearRect(0,0,512,360),n.fillStyle="#5FB04A",n.beginPath(),n.ellipse(256,230,150,100,0,0,7),n.fill();for(let e of[-1,1])n.beginPath(),n.arc(256+e*70,120,48,0,7),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(256+e*70,115,30,0,7),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(256+e*70,118,15,0,7),n.fill(),n.fillStyle="#5FB04A";n.strokeStyle="#2A5A22",n.lineWidth=8,n.beginPath(),n.arc(256,240,60,.2,Math.PI-.2),n.stroke()}),Bs=(n,e,t)=>{let i=Le(Oy(),e,e*360/512);return i.position.set(...t),i.renderOrder=5,n.add(i),i},zy=()=>_e(256,256,n=>{n.clearRect(0,0,256,256),n.fillStyle="#FBF7EC",n.beginPath(),n.arc(128,128,100,0,7),n.fill(),n.fillStyle="#C98A3A",n.beginPath(),n.ellipse(128,70,90,45,0,0,7),n.fill(),n.fillStyle="#2A2A34",n.beginPath(),n.arc(128,135,62,0,7),n.fill(),n.fillStyle="#F4F0E4",n.beginPath(),n.arc(108,130,10,0,7),n.arc(148,130,10,0,7),n.fill(),n.fillStyle="#E8667F",n.font="900 46px Inter",n.textAlign="center",n.fillText("\u2665",128,230)}),go=n=>{let e=Le(zy(),.36,.36);return e.position.set(0,.98,.09),e.renderOrder=6,n.root.add(e),e},ky=()=>{let n=new ce;return n.add(w(.42,.08,.015,R("#D8DCE2",{metalness:.9,roughness:.2}),.21,0,0,!1)),n.add(w(.18,.07,.05,R("#3A2418"),-.09,0,0,!1)),n},Pf=n=>{let e=w(.7,.02,.02,R("#C9A070"),0,0,0,!1);return n.add(e),e},Vf=n=>{let e=ke("#FFF2C0",2.5,0);return n.add(e),e},Wf=n=>{let e=Wh(n,.28,"#E8447A");return(t,i,s=1)=>{e.position.set(i[0],i[1],i[2]);let r=uy(t,140);e.scale.setScalar(s>.01?r:.001),e.visible=s>.01}},Xf=(n,e)=>n.tint(e?"#A8A8B0":"#FFF0DC");var qf=[[-1.6,1.2],[0,1.2],[1.6,1.2],[-1.6,-.2],[1.6,-.2]],cs=(n,e)=>qf.map(([t,i],s)=>mt(r=>s%2?Sn(s+1,r):Yt({outfit:["laranja","azul","hero"][s%3],glow:0,...r}),t,i,{eyes:e?e(s):[[0,n||"look"]]})),Gy=[[.2,1.9,1.8],[1.6,.85,-1.4],[.5,1.75,1.3],[1.6,.85,-1.4]],Qh=(n={})=>oy(Be,{x:2.5,z:-1.2,y:.9,...n}),il=n=>{n.add(w(1.3,2.1,.08,R("#3A4A5E"),.55,1.05,-1.2));let e=new z(new be(1.12,1.92),new tt({color:"#BFD8EC",transparent:!0,opacity:.22,depthWrite:!1}));e.position.set(.55,1.05,-.14),e.renderOrder=4,n.add(e),[[.55,2.06,1.3,.1],[.55,.04,1.3,.1]].forEach(([t,i,s,r])=>n.add(w(s,r,.12,R("#8E6242"),t,i,-.14))),[-.06,1.16].forEach(t=>n.add(w(.1,2.1,.12,R("#8E6242"),t,1.05,-.14)))},Kh=(n={})=>Be({x:.55,z:-.6,s:.92,glow:0,tint:"#D8E6F4",...n}),jh=[[0,1.4,3.4],[0,1.1,-.3],[0,1.35,2.9],[0,1.15,-.3]];$(0,(n,e)=>({...Xn({look:{exposure:.85,bloom:.4}}),atores:[Qh()],extra:t=>{let i=ry(t),s=se(t,e,[[["MARTES"],.1,"y",[1,1.85,-1],1],[["07:10"],"siete","y",[1,1.85,-1],.8,1]]);return{update:(r,o,a)=>{i(r,[2.3,1.1,-1.4],a),s(r,a)}}},c:Gy,range:2.6}));$(1,(n,e)=>{let t=X(e,"no"),i=X(e,"pajaritos");return{...Xn(),atores:[Qh({eyes:[[0,"shut"],[i,"small"]]})],extra:(s,r,o)=>{s.add(w(.5,.55,.4,R("#8E6242"),.2,.28,-2.2));let a=Rr(["ALARMA","","\u266A 07:10"],{hora:"07:10"});a.scale.setScalar(.3),a.rotation.x=-.5,a.position.set(.2,.62,-2.15),s.add(a);let l=Xh(s,3),c=se(s,e,[[["NO ES TU ALARMA"],t,"w",[.4,1.5,-1.6],1.3],[["TU ALARMA: \xA1PIIIP!"],"pitido","r",[.4,1.5,-1.6],1.5],[["\u266A P\xCDO, P\xCDO \u266A"],i-.4,"p",[.4,1.5,-1.6],1.2,1]]),h=new zt;return h.head=new zt,h.head.position.set(.2,.75,-2.1),h.head.getWorldPosition=d=>d.set(.2,.75,-2.1),{update:(d,u,f)=>{l(d,h,f),c(d,f)}}},c:[[-.6,1.5,1.4],[.6,.75,-1.8],[-.4,1.45,1.1],[.6,.8,-1.8]],range:2}});$(2,(n,e)=>{let t=X(e,"techo"),i=X(e,"tu");return{...Xn({look:{exposure:.9,bloom:.5}}),atores:[Qh({eyes:[[0,"shut"],[.5,"small"],[t,"wide"]]})],extra:s=>{let r=[],o=Ie(5);for(let l=0;l<24;l++){let c=ke("#FFF2A0",.14,0);c.position.set(-1+o()*4.5,3.4,-3+o()*3),s.add(c),r.push(c)}let a=se(s,e,[[["ESTRELLITAS EN EL TECHO"],t,"y",[1.3,1.75,-.9],1.3],[["T\xDA NO TIENES ESTRELLITAS"],i-.1,"r",[1.3,1.75,-.9],1.4,1]]);return{update:(l,c,h)=>{r.forEach((d,u)=>{d.material.opacity=ze(t-.3,t+.4,l)*(.6+.3*Math.sin(l*3+u))}),a(l,h)}}},c:[[1.2,2.7,.9],[1.3,1,-1.2],[1.2,2.5,.5],[1.3,1.2,-1.3]],range:2.2}});$(3,(n,e)=>{let t=X(e,"pelo"),i=X(e,"cortisimo");return{...Xn(),atores:[Be({x:.5,z:.2,eyes:[[0,"small"],[t,"wide"]],pose:(s,r)=>r>t?xy(s,r):s.pose()})],extra:s=>{let r=se(s,e,[[["PELO"],t-.1,"y",[-.5,2,.2],.9],[["MUCH\xCDSIMO PELO"],t+1,"y",[-.5,2,.2],1.4],[["T\xDA: PELO CORT\xCDSIMO"],i-.6,"b",[-.5,2,.2],1.6,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,3.2],[.1,1.3,.2],[0,1.55,2.6],[.1,1.35,.2]],range:2.4}});$(4,(n,e)=>({...Xn(),atores:[Be({x:-.55,z:.2,eyes:[[0,"wide"]],move:t=>[gt(-2.2,-.55,ze(0,1.3,t)),0,.2],pose:(t,i)=>t.pose({armL:[40+Math.sin(i*14)*25,10],armR:[40-Math.sin(i*14)*25,10],bob:Math.abs(Math.sin(i*14))*.04})}),Kh({eyes:[[0,"wide"]],move:t=>[.55,0,gt(-1.6,-.6,ze(0,1.3,t))]})],extra:t=>(il(t),{}),c:jh,range:2.4}));$(5,(n,e)=>{let t=X(e,"crush");return{...Xn(),atores:[Be({x:-.55,z:.2,eyes:[[0,"look"]]}),Kh({eyes:[[0,"lookl"]]})],extra:i=>{il(i);let s=fo(i,6,"#FFFFFF"),r=se(i,e,[[["ELLA"],.3,"w",[.55,2.35,-.4],.8],[["TU CRUSH \u2665"],t-.1,"p",[.55,2.35,-.4],1.1,1]]);return{update:(o,a,l)=>{s(o,[.55,1.6,-.1,.4],.6),r(o,l)}}},c:[[.3,1.4,2.6],[.4,1.25,-.4],[.3,1.35,2.2],[.45,1.3,-.4]],range:2.2}});$(6,(n,e)=>{let t=X(e,"parpadea"),i=X(e,"levantas"),s=X(e,"levanta"),r=o=>[[0,"look"],[o,"shut"],[o+.25,"wide"]];return{...Xn(),atores:[Be({x:-.55,z:.2,eyes:r(.2),pose:(o,a)=>o.pose({armL:[12,8],armR:[a>i?150:12,a>i?20:8]})}),Kh({eyes:[[0,"lookl"],[t,"shut"],[t+.25,"wide"]],pose:(o,a)=>o.pose({armL:[a>s?150:12,a>s?20:8],armR:[12,8]})})],extra:o=>(il(o),{}),c:jh,range:2.4}});$(7,(n,e)=>{let t=X(e,"biblioteca"),i=X(e,"libro");return{...Zt({look:Hf}),atores:[Mt({x:-.6,z:-2.2,eyes:[[0,"look"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>i-.5?150:12,r>i-.5?-20:8]})}),Be({x:.6,z:-2.2,eyes:[[0,"lookl"]],pose:(s,r)=>s.pose({armL:[r>i-.5?150:12,r>i-.5?20:8],armR:[12,8]})})],extra:s=>{let r=Ps("#C9361F","MISTERIOS");r.scale.setScalar(.5),r.position.set(0,2.05,-2.85),s.add(r);let o=se(s,e,[[["AYER POR LA TARDE"],.1,"w",[0,2.75,-2.3],1.6],[["BIBLIOTECA DEL INSTITUTO"],t-.2,"y",[0,2.75,-2.3],2],[["EL MISMO LIBRO"],i-.3,"p",[0,2.75,-2.3],1.4,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.8,1.6],[0,1.6,-2.4],[0,1.75,1.1],[0,1.6,-2.4]],range:2.6}});$(8,(n,e)=>{let t=X(e,"chispa"),i=X(e,"reisteis");return{...Zt({look:Hf}),atores:[Mt({x:-.35,z:-2.2,eyes:[[0,"look"],[t,"wide"],[i,"happy"]],pose:(s,r)=>r>i?ja(s,r):s.pose({armL:[12,8],armR:[150,-20]})}),Be({x:.35,z:-2.2,eyes:[[0,"lookl"],[t,"wide"],[i,"happy"]],pose:(s,r)=>r>i?ja(s,r):s.pose({armL:[150,20],armR:[12,8]})})],extra:s=>{let r=Ps("#C9361F","MISTERIOS");r.scale.setScalar(.5),r.position.set(0,2.05,-2.85),s.add(r);let o=Vf(s),a=fo(s,12,"#FFF2C0"),l=se(s,e,[[["\xA1CHISPA!"],t,"y",[0,2.75,-2.2],1,1]]);return{update:(c,h,d)=>{let u=ze(t-.1,t,c)*(1-ze(t+.3,t+1.2,c));o.position.set(0,2.1,-2.3),o.material.opacity=u,a(c,[0,2.1,-2.2,.5],u),l(c,d)}}},c:[[0,1.9,.9],[0,1.9,-2.4],[0,1.8,.5],[0,1.8,-2.4]],range:2.2}});$(9,(n,e)=>({...Xn(),atores:[Be({x:.5,z:.2,eyes:[[0,"flat"]]})],extra:t=>{let i=se(t,e,[[["ESO PAREC\xCDA\u2026"],.3,"w",[.5,2.25,.2],1.3,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[.5,1.5,2.6],[.5,1.35,.2],[.5,1.45,2.1],[.5,1.35,.2]],range:2}));$(10,(n,e)=>{let t=X(e,"nombre"),i=X(e,"contestas");return{...Xn(),atores:[Be({x:.2,z:-.2,eyes:[[0,"wide"],[t,"small"]],pose:(s,r)=>r<i?s.pose({armL:[12,8],armR:[70,30]}):s.pose({armL:[12,8],armR:[150,70]})})],extra:(s,r,o)=>{let a=Rr(["LLAMADA","","T\xDA"],{hora:"07:12"});a.scale.setScalar(.3),s.add(a);let l=Xh(s,3),c=se(s,e,[[["EN LA PANTALLA: TU NOMBRE"],t-.2,"y",[.2,2.3,-.2],2,1]]);return{update:(h,d,u)=>{let f=gi(o[0]),g=ze(i,i+.4,h);a.position.set(f.x+gt(.05,0,g),f.y+gt(.15,.02,g),f.z+.12),a.rotation.z=h<i?Math.sin(h*40)*.12:0,yn(a,u),l(h,o[0],u,h<i?1:0),c(h,u)}}},c:[[.2,1.55,2.8],[.2,1.35,-.2],[.2,1.5,2.3],[.2,1.4,-.2]],range:2.2}});$(11,(n,e)=>{let t=X(e,"gritando");return{...$h(),atores:[Mt({x:0,z:-.3,eyes:[[0,"wide"],[t,"angry"]],pose:(i,s)=>i.pose({armL:[150,70],armR:[s>t?120:30,s>t?80:20]})})],extra:(i,s,r)=>{let o=Rr(["TU CRUSH"],{hora:"07:12"});o.scale.setScalar(.3),i.add(o);let a=Xh(i,4),l=se(i,e,[[["TU PROPIA VOZ"],.2,"w",[0,2.3,-.3],1.4],[["\xA1GRITANDO!"],t-.1,"r",[0,2.3,-.3],1.2,1]]);return{update:(c,h,d)=>{let u=new I;r[0].arms.L.hand.getWorldPosition(u),o.position.set(u.x,u.y,u.z+.1),yn(o,d),a(c,r[0],d,c>t?1:0),c>t&&Uf(d,.012,c),l(c,d)}}},c:[[0,1.55,3],[0,1.35,-.3],[0,1.5,2.5],[0,1.4,-.3]],range:2.2}});$(12,(n,e)=>{let t=X(e,"por"),i=X(e,"cuarto");return{...$h(),atores:[Mt({x:.1,z:-.3,eyes:[[0,"wide"],[i,"angry"]],pose:(s,r)=>s.pose({armL:[150,70],armR:[r>i?120:40,r>i?80:20],head:Math.sin(r*4)*4})})],extra:(s,r,o)=>{let a=Rr(["TU CRUSH"],{hora:"07:12"});a.scale.setScalar(.3),s.add(a);let l=Ry(s),c=bt(s,e,[[["\xBFQu\xE9 ha pasado?"],.05,[-.9,2.2,-.3],1.2],[["\xBFPor qu\xE9 estoy","en tu cuerpo?"],t,[-.9,2.2,-.3],1.3],[["\xBFY por qu\xE9 tu cuarto","huele a calcet\xEDn?"],i-.5,[-.9,2.2,-.3],1.5]]);return{update:(h,d,u)=>{let f=new I;o[0].arms.L.hand.getWorldPosition(f),a.position.set(f.x,f.y,f.z+.1),yn(a,u),l(h,Of,ze(i-.5,i,h)),c(h,u)}}},c:[[-.3,1.6,3.6],[-.3,1.2,-.3],[-.3,1.55,3.1],[-.3,1.25,-.3]],range:2.8}});$(13,(n,e)=>({amb:"gris",fov:30,atores:[Mt({x:-.7,z:0,eyes:[[0,"wide"]]}),Be({x:.7,z:0,eyes:[[0,"wide"]]})],extra:t=>{let i=ke("#7FD0FF",1.2,0),s=ke("#FF8AC8",1.2,0);t.add(i,s);let r=se(t,e,[[["ELLA (EN TU CUERPO)"],.2,"b",[-.7,2.25,0],1.5,1],[["T\xDA (EN SU CUERPO)"],.8,"p",[.7,2.25,0],1.5,1],[["\xA1CAMBIO DE CUERPO!"],1.6,"y",[0,.35,.3],1.8,1]]);return{update:(o,a,l)=>{let c=o*.9%1;i.position.set(gt(-.7,.7,c),1.3+Math.sin(c*Math.PI)*.5,.1),s.position.set(gt(.7,-.7,c),1.3-Math.sin(c*Math.PI)*.5,.1),i.material.opacity=s.material.opacity=.55,r(o,l)}}},c:[[0,1.4,3.6],[0,1.25,0],[0,1.4,3.1],[0,1.25,0]],range:3}));$(14,(n,e)=>{let t=X(e,"suscribete"),i=X(e,"campanita"),s=X(e,"vamos");return{amb:"gris",fov:30,atores:[Mt({x:-.7,z:0,eyes:[[0,"happy"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[o>t?150+Math.sin(o*8)*10:12,30]})}),Be({x:.7,z:0,eyes:[[0,"happy"]],pose:(r,o)=>r.pose({armL:[o>t?150+Math.sin(o*8)*10:12,30],armR:[12,8]})})],extra:r=>{let o=Gh(2.4);r.add(o),o.position.set(0,2.45,0);let a=se(r,e,[[['HISTORIAS DE "\xBFY SI\u2026?"'],.5,"p",[0,.4,.3],2],[["\xA1VAMOS ALL\xC1!"],s-.1,"y",[0,2.45,0],1.5,1]]);return{update:(l,c,h)=>{Bn(o,l,t-.2,s-.2,h),a(l,h)}}},c:[[0,1.5,3.8],[0,1.4,0],[0,1.5,3.3],[0,1.4,0]],range:3}});$(15,(n,e)=>{let t=X(e,"manos");return{...Xn(),atores:[Be({x:.3,z:.2,eyes:[[0,"small"],[t-.3,"down"]],pose:(i,s)=>s>t-.3?nl(i,s):i.pose()})],extra:i=>{let s=se(i,e,[[["ALGO MUY EXTRA\xD1O"],.3,"w",[.3,2.3,.2],1.5,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[.3,1.55,3],[.3,1.3,.2],[.3,1.5,2.4],[.3,1.35,.2]],range:2.2}});$(16,(n,e)=>{let t=X(e,"pequenas"),i=X(e,"unas");return{...Xn(),atores:[Be({x:0,z:0,eyes:[[0,"down"]],pose:nl})],extra:(s,r,o)=>{let a=[0,1].map(()=>{let c=ke("#4A86FF",.25,0);return s.add(c),c}),l=se(s,e,[[["SUS MANOS"],.1,"w",[0,2.15,0],1],[["M\xC1S PEQUE\xD1AS"],t-.1,"y",[0,2.15,0],1.2],[["U\xD1AS AZULES"],i-.1,"b",[0,2.15,0],1.2,1]]);return{update:(c,h,d)=>{let u=new I;o[0].arms.L.hand.getWorldPosition(u),a[0].position.set(u.x,u.y,u.z+.05),o[0].arms.R.hand.getWorldPosition(u),a[1].position.set(u.x,u.y,u.z+.05),a.forEach(f=>f.material.opacity=.6*ze(i-.2,i+.3,c)),l(c,d)}}},c:[[0,1.5,2.2],[0,1.25,0],[0,1.45,1.8],[0,1.25,0]],range:1.8}});$(17,(n,e)=>{let t=X(e,"tuyas");return{...Xn(),atores:[Be({x:0,z:0,eyes:[[0,"down"],[t,"happy"]],pose:(i,s)=>i.pose({armL:[95+Math.sin(s*6)*18,25],armR:[95+Math.cos(s*6)*18,25]})})],extra:(i,s,r)=>{let o=fo(i,8,"#FFE6A0"),a=se(i,e,[[["LAS MUEVES T\xDA"],.2,"y",[0,2.15,0],1.2],[["Y LAS SIENTES TUYAS"],t-.4,"p",[0,2.15,0],1.5,1]]);return{update:(l,c,h)=>{let d=gi(r[0]);o(l,[0,d.y,d.z+.1,1],.6*ze(t-.6,t,l)),a(l,h)}}},c:[[0,1.5,2.2],[0,1.25,0],[0,1.45,1.8],[0,1.25,0]],range:1.8}});$(18,(n,e)=>{let t=X(e,"ciencia"),i=X(e,"mas");return{...ri(),atores:[Wn(0,{x:-.5,z:-.4,eyes:[[0,"look"],[i,"flat"]],pose:(s,r)=>r>i?s.pose({armL:[12,8],armR:[60,40+Math.sin(r*10)*20]}):Lf(s)}),Wn(1,{x:.6,z:-.6,eyes:[[0,"happy"]]})],extra:s=>{let r=se(s,e,[[["\xBFIMPOSIBLE?"],.2,"w",[0,2.3,-.5],1.2],[["LA CIENCIA LO HA PROBADO"],t-.2,"y",[0,2.3,-.5],2],[["(M\xC1S O MENOS)"],i-.1,"b",[0,2.3,-.5],1.3,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,3.6],[0,1.4,-.5],[0,1.55,3.1],[0,1.4,-.5]],range:2.6}});$(19,(n,e)=>{let t=X(e,"gafas"),i=X(e,"suecia");return{...ri(),atores:[Wn(0,{x:-1.3,z:-.8,eyes:[[0,"look"]]}),Wn(2,{x:1.3,z:-.8,eyes:[[0,"look"]]}),ls({x:0,z:-.2,eyes:[[0,"look"],[t,"wide"]]})],extra:(s,r,o)=>{let a=os(o[2]),l=se(s,e,[[["PETKOVA Y EHRSSON"],1.4,"w",[0,2.55,-.6],1.6],[["SUECIA"],i-.1,"b",[0,2.55,-.6],.9],[["GAFAS DE REALIDAD VIRTUAL"],t-.2,"y",[0,2.55,-.6],2,1]]);return{update:(c,h,d)=>{let u=ze(t,t+.4,c);a.visible=u>.01,a.scale.setScalar(Math.max(.01,u)),l(c,d)}}},c:[[0,1.6,4.4],[0,1.4,-.4],[0,1.55,3.7],[0,1.4,-.4]],range:3}});$(20,(n,e)=>{let t=X(e,"camara"),i=X(e,"maniqui");return{...ri(),atores:[ls({x:-.7,z:-.2,eyes:[[0,"look"]]}),mo({x:.7,z:-.4})],extra:(s,r,o)=>{os(o[0]);let a=Hs(o[1]);a.rotation.x=.5;let l=new z(new Ss(new es([new I(-.7,1.75,-.1),new I(0,2.6,-.3),new I(.7,2.15,-.35)]),24,.015,6),R("#2A2A34"));s.add(l);let c=se(s,e,[[["C\xC1MARA"],t,"w",[.7,2.55,-.4],.9],[["MANIQU\xCD"],i,"y",[.7,.45,-.2],1],[["MIRANDO HACIA ABAJO"],"abajo","b",[.7,2.55,-.4],1.6,1]]);return{update:(h,d,u)=>{l.visible=h>t-.2,c(h,u)}}},c:[[0,1.6,3.8],[0,1.4,-.3],[0,1.55,3.2],[0,1.4,-.3]],range:2.6}});$(21,(n,e)=>{let t=X(e,"suyo");return{...ri(),atores:[ls({x:-.7,z:-.2,eyes:[[0,"look"],[t,"wide"]]}),mo({x:.7,z:-.4})],extra:(i,s,r)=>{os(r[0]),Hs(r[1]);let o=Bh(i,["LO QUE VE:","EL CUERPO","DEL MANIQU\xCD"],1.4,.9,{bg:"#0A1A22",fg:"#7FD0FF",size:70});o.position.set(-.7,2.55,-.6);let a=ke("#7FD0FF",1.4,0);return i.add(a),a.position.set(.7,1.1,-.4),{update:(l,c,h)=>{yn(o,h),a.material.opacity=.3*ze(t-.5,t,l)}}},c:[[0,1.7,3.8],[0,1.6,-.3],[0,1.65,3.2],[0,1.6,-.3]],range:2.6}});$(22,(n,e)=>{let t=X(e,"barriga"),i=X(e,"vez");return{...ri(),atores:[ls({x:-.8,z:-.2,eyes:[[0,"look"],[t,"happy"]]}),mo({x:.8,z:-.4}),Wn(0,{x:0,z:-1.1,eyes:[[0,"look"]],pose:(s,r)=>s.pose({armL:[80+Math.sin(r*6)*8,-30],armR:[80-Math.sin(r*6)*8,30]})})],extra:(s,r,o)=>{os(o[0]),Hs(o[1]);let a=Pf(s),l=Pf(s),c=se(s,e,[[["UN PALITO"],t-.4,"w",[0,2.5,-.8],1.1],[["A LOS DOS A LA VEZ"],i-.6,"y",[0,2.5,-.8],1.6,1]]);return{update:(h,d,u)=>{let f=Math.sin(h*6)*.05;a.position.set(-.45+f,1,-.4),a.rotation.y=-.5,l.position.set(.45-f,1,-.6),l.rotation.y=.5,c(h,u)}}},c:[[0,1.6,3.8],[0,1.3,-.4],[0,1.55,3.2],[0,1.3,-.4]],range:2.6}});$(23,(n,e)=>{let t=X(e,"sentian");return{...ri(),atores:[ls({x:-.8,z:-.2,eyes:[[0,"look"],[t,"wide"]]}),mo({x:.8,z:-.4})],extra:(i,s,r)=>{os(r[0]),Hs(r[1]);let o=ke("#7FD0FF",1.8,0);i.add(o),o.position.set(.8,1.2,-.4);let a=fo(i,10,"#BFE6FF"),l=se(i,e,[[["EN MUY POCO TIEMPO"],.2,"w",[0,2.5,-.4],1.6],[["SIENTEN QUE ES SU CUERPO"],t,"y",[0,2.5,-.4],2,1]]);return{update:(c,h,d)=>{let u=ze(t-.2,t+.6,c);o.material.opacity=.35*u,a(c,[.8,1.3,-.3,.5],u),l(c,d)}}},c:[[0,1.6,3.6],[0,1.3,-.3],[0,1.55,3.1],[0,1.3,-.3]],range:2.6}});$(24,(n,e)=>{let t=X(e,"cuchillo"),i=X(e,"piel");return{...ri(),atores:[ls({x:-.8,z:-.2,eyes:[[0,"look"],[t,"wide"]],pose:(s,r)=>r>t?tl(s,r,1.4):s.pose()}),mo({x:.8,z:-.4}),Wn(1,{x:1.6,z:-.9,eyes:[[0,"flat"]],pose:s=>s.pose({armL:[80,-60],armR:[12,8]})})],extra:(s,r,o)=>{os(o[0]),Hs(o[1]);let a=ky();s.add(a);let l=el(s,6),c=se(s,e,[[["UN CUCHILLO"],t-.2,"r",[.8,2.5,-.4],1.2],[["SU PIEL REACCIONA CON MIEDO"],i-.2,"y",[-.5,2.5,-.2],2,1]]);return{update:(h,d,u)=>{let f=ze(t-.4,t+.8,h);a.position.set(gt(1.6,1.05,f),1.05,-.35),a.rotation.y=Math.PI,l(h,[-.8,1.9,-.1],ze(i-.3,i,h)),c(h,u)}}},c:[[0,1.6,3.8],[0,1.3,-.3],[0,1.55,3.2],[0,1.3,-.3]],range:2.6}});$(25,(n,e)=>{let t=X(e,"ojos");return{...ri(),atores:[ls({x:-.6,z:-.2,eyes:[[0,"look"]]}),Wn(0,{x:.6,z:-.2,eyes:[[0,"lookl"]]})],extra:(i,s,r)=>{os(r[0]),Hs(r[1]);let o=se(i,e,[[["\xA1HAY M\xC1S!"],.1,"y",[0,2.3,-.2],1],[["VE A TRAV\xC9S DE LOS OJOS DE OTRA PERSONA"],t-1.2,"w",[0,2.3,-.2],2.4,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.6,3.4],[0,1.35,-.2],[0,1.55,2.9],[0,1.35,-.2]],range:2.4}});$(26,(n,e)=>{let t=X(e,"mano"),i=X(e,"misma");return{...ri(),atores:[ls({x:-.4,z:-.2,eyes:[[0,"look"],[i,"wide"]],pose:s=>s.pose({armL:[12,8],armR:[60,10]})}),Wn(0,{x:.4,z:-.2,eyes:[[0,"lookl"]],pose:s=>s.pose({armL:[60,10],armR:[12,8]})})],extra:(s,r,o)=>{os(o[0]),Hs(o[1]);let a=se(s,e,[[["SE DAN LA MANO"],t-.2,"w",[0,2.2,-.2],1.3],[["\u2026A S\xCD MISMOS"],i-.3,"p",[0,2.2,-.2],1.2,1]]);return{update:(l,c,h)=>{let d=Math.sin(l*7)*6;o[0].pose({armL:[12,8],armR:[60+d,10]}),o[1].pose({armL:[60+d,10],armR:[12,8]}),a(l,h)}}},c:[[0,1.5,3],[0,1.3,-.2],[0,1.45,2.5],[0,1.3,-.2]],range:2.2}});$(27,(n,e)=>{let t=X(e,"ve"),i=X(e,"siente"),s=X(e,"enganar");return{amb:"gris",fov:30,atores:[],extra:r=>{let o=fy(r,[0,1.4,0],1.6),a=se(r,e,[[["LO QUE VE"],t-.2,"b",[-1.3,1.9,0],1.2,1],[["LO QUE SIENTE"],i-.2,"p",[1.3,1.9,0],1.3,1],[["\xA1SE LE PUEDE ENGA\xD1AR!"],s-.5,"y",[0,.45,.2],1.9]]);return{update:(l,c,h)=>{o(l>s-.5&&Math.sin(l*12)>0),a(l,h)}}},c:[[0,1.4,3.6],[0,1.25,0],[0,1.4,3.1],[0,1.25,0]],range:3}});$(28,(n,e)=>{let t=X(e,"madre");return{...Yn(),atores:[qh({x:.8,z:-1.9,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[60,40],armR:[60+Math.sin(s*5)*6,40]})}),Be({x:-1.6,z:.5,eyes:[[0,"small"]],move:i=>[gt(-2.4,-1.4,ze(0,1.5,i)),0,.5]})],extra:i=>{qn(i);let s=se(i,e,[[["LA COCINA"],.1,"w",[-.6,2.4,-1],1.1],[["SU MADRE"],t,"p",[.8,2.6,-1.9],1,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-.3,1.7,4.2],[-.2,1.2,-.8],[-.3,1.65,3.6],[-.2,1.2,-.8]],range:3}});$(29,(n,e)=>({...Yn(),atores:[qh({x:.5,z:-1.6,eyes:[[0,"happy"]],talk:[[0,n]]}),Be({x:-.5,z:-.6,eyes:[[0,"small"]]})],extra:t=>{qn(t);let i=bt(t,e,[[["Buenos d\xEDas, cari\xF1o.","\xBFHas dormido bien?"],.05,[.5,2.45,-1.5],1.6]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.6,3.2],[0,1.35,-1],[0,1.55,2.7],[0,1.35,-1]],range:2.6}));$(30,(n,e)=>{let t=X(e,"mama");return{...Yn(),atores:[Be({x:-.3,z:-.6,eyes:[[0,"small"],[t,"flat"]],talk:[[0,n]]})],extra:i=>{qn(i);let s=el(i,4),r=bt(i,e,[[["Eh\u2026 s\xED.","Muy bien\u2026"],.05,[-.3,2.12,-.6],1.1],[["\u2026mam\xE1."],t-.1,[-.3,2.12,-.6],1]]);return{update:(o,a,l)=>{s(o,[-.05,1.85,-.5],ze(t,t+.3,o)),r(o,l)}}},c:[[-.3,1.55,2.4],[-.3,1.4,-.6],[-.3,1.5,2],[-.3,1.4,-.6]],range:2}});$(31,(n,e)=>({...Yn(),atores:[Be({x:-.3,z:-.6,eyes:[[0,"flat"]],pose:t=>t.pose({armL:[12,8],armR:[125,150]})})],extra:t=>{qn(t);let i=se(t,e,[[["RAR\xCDSIMO"],.1,"r",[-.3,2.15,-.6],1,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[-.3,1.45,1.9],[-.3,1.4,-.6],[-.3,1.45,1.6],[-.3,1.4,-.6]],range:1.8}));$(32,(n,e)=>{let t=X(e,"por"),i=X(e,"pareces");return{...Yn(),atores:[mt(Yh,.6,-.9,{eyes:[[0,"smug"]],talk:[[t,n]]}),mt(Be,-.6,-.9,{eyes:[[0,"look"],[i,"wide"]],pose:s=>s.pose({armL:[40,60],armR:[40,-60]})})],extra:s=>{qn(s);let r=se(s,e,[[["SU HERMANO PEQUE\xD1O"],.3,"b",[.6,1.95,-.9],1.5]]),o=bt(s,e,[[["\xBFPor qu\xE9 te sientas as\xED?"],t,[.6,1.95,-.9],1.5],[["Pareces un chico."],i,[.6,1.95,-.9],1.3]]);return{update:(a,l,c)=>{r(a,c),o(a,c)}}},c:[[0,1.5,2.9],[0,1.05,-.9],[0,1.45,2.5],[0,1.05,-.9]],range:2.4}});$(33,(n,e)=>{let t=X(e,"tostada");return{...Yn(),atores:[mt(Be,-.3,-.9,{eyes:[[0,"wide"],[.6,"flat"]],pose:(i,s)=>s>t?i.pose({armL:[12,8],armR:[70,40]}):Ly(i)})],extra:(i,s,r)=>{qn(i);let[o]=Jh(i,.3,[0,0,0]),a=se(i,e,[[["\xA1RECTA!"],.1,"y",[-.3,1.95,-.9],.9,1]]);return{update:(l,c,h)=>{let d=gi(r[0]);o.position.set(d.x,d.y,d.z+.1),o.visible=l>t,yn(o,h),a(l,h)}}},c:[[-.3,1.35,2.2],[-.3,1.05,-.9],[-.3,1.3,1.8],[-.3,1.05,-.9]],range:2}});$(34,(n,e)=>{let t=X(e,"mantequilla"),i=X(e,"mermelada"),s=X(e,"ketchup");return{...Yn(),atores:[],extra:r=>{qn(r);let o=new z(new et(.32,.3,.03,32),R("#FBF7EC"));o.position.set(0,.81,-.3),r.add(o);let a=Jh(r,.45,[0,.84,-.3]);a.forEach(h=>h.rotation.x=-Math.PI/2);let l=Hy();r.add(l);let c=se(r,e,[[["MANTEQUILLA"],t,"w",[-.42,.95,-.05],.55],[["MERMELADA"],i,"p",[-.42,.95,-.05],.55],[["\xBF\xA1K\xC9TCHUP!?"],s,"r",[-.42,.95,-.05],.55,1]]);return{update:(h,d,u)=>{let f=[0,t+.2,i+.2,s+.3];a.forEach((g,E)=>g.visible=h>=f[E]&&(E===3||h<(f[E+1]??1e9)+.05)),l.position.set(.35,gt(1.6,.82,ze(s-.6,s,h)),-.3),l.rotation.z=gt(0,2.4,ze(s,s+.3,h)),c(h,u)}}},c:[[0,1.6,.7],[0,.85,-.3],[0,1.5,.5],[0,.85,-.3]],range:1.2}});$(35,(n,e)=>{let t=X(e,"hermano");return{...Yn(),atores:[qh({x:-.9,z:-1.7,eyes:[[0,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[110,120]})}),mt(Yh,.7,-.9,{eyes:[[0,"smug"],[t,"wide"]]}),mt(Be,-.1,-.9,{eyes:[[0,"small"]],pose:zf})],extra:i=>{qn(i);let s=se(i,e,[[["SU MADRE: STOP"],.1,"w",[-.9,2.55,-1.7],1.3],[["SU HERMANO: STOP"],t-.2,"b",[.7,1.95,-.9],1.4,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.55,3.4],[0,1.2,-1],[0,1.5,2.9],[0,1.2,-1]],range:2.6}});$(36,(n,e)=>{let t=X(e,"sale");return{...Yn(),atores:[mt(Be,-.1,-.9,{eyes:[[0,"smug"]],talk:[[0,n]]})],extra:i=>{qn(i);let s=bt(i,e,[[["Es\u2026 una moda nueva."],.05,[-.1,1.95,-.9],1.4],[["Sale en internet."],t,[-.1,1.95,-.9],1.3]]);return{update:(r,o,a)=>s(r,a)}},c:[[-.1,1.35,2.2],[-.1,1.1,-.9],[-.1,1.3,1.8],[-.1,1.1,-.9]],range:2}});$(37,(n,e)=>{let t=X(e,"respirar");return{...Yn(),atores:[mt(Be,-.1,-.9,{eyes:[[0,"shut"],[t+.8,"happy"]],pose:zf}),mt(Yh,.9,-.9,{eyes:[[0,"wide"]]})],extra:(i,s,r)=>{qn(i);let o=Jh(i,.3,[0,0,0]),a=se(i,e,[[["ENTERA"],.3,"y",[-.1,1.95,-.9],.9],[["SIN RESPIRAR"],t-.3,"r",[-.1,1.95,-.9],1.2,1]]);return{update:(l,c,h)=>{let d=gi(r[0]);o.forEach((u,f)=>{u.visible=f===3,u.position.set(d.x,d.y,d.z+.1),u.scale.setScalar(Math.max(.01,1-ze(.3,t,l))),yn(u,h)}),a(l,h)}}},c:[[.2,1.4,2.6],[.2,1.05,-.9],[.2,1.35,2.2],[.2,1.05,-.9]],range:2.2}});$(38,(n,e)=>{let t=X(e,"cuerpo");return{...Yn(),atores:[mt(Be,-.1,-.9,{eyes:[[0,"wide"],[1.2,"down"]],pose:i=>i.pose({armL:[12,8],armR:[70,40]})})],extra:(i,s,r)=>{qn(i);let o=Rr(["MENSAJE DE:","TU CUERPO"],{hora:"07:31"});o.scale.setScalar(.3),i.add(o);let a=se(i,e,[[["\xA1BZZZ!"],.1,"w",[-.1,1.95,-.9],.8],[["UN MENSAJE DE ELLA"],1.4,"p",[-.1,1.95,-.9],1.5],[["(BUENO, DE TU CUERPO)"],t-.5,"b",[-.1,1.95,-.9],1.7,1]]);return{update:(l,c,h)=>{let d=gi(r[0]);o.position.set(d.x,d.y+.08,d.z+.12),o.rotation.z=l<1.2?Math.sin(l*50)*.1:0,yn(o,h),a(l,h)}}},c:[[-.1,1.35,2],[-.1,1.1,-.9],[-.1,1.3,1.7],[-.1,1.1,-.9]],range:1.8}});$(39,(n,e)=>{let t=X(e,"campeon"),i=X(e,"esto");return{amb:"sala",ambo:{wall:"#4A7A9A"},fov:32,look:po,atores:[Dy({x:.45,z:-.4,eyes:[[0,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[100,-50]})}),Mt({x:-.35,z:-.3,eyes:[[0,"wide"],[i,"flat"]]})],extra:s=>{let r=Wh(s,.25),o=bt(s,e,[[["Tu madre me ha dado","un beso en la frente\u2026"],.05,[-.35,2.35,-.3],1.6],[["\u2026y me ha llamado","campe\xF3n."],t-1,[-.35,2.35,-.3],1.5],[["\xBFEsto es normal?"],i-.1,[-.35,2.35,-.3],1.3]]),a=se(s,e,[[["MIENTRAS, EN TU CASA"],.1,"b",[.45,2.6,-.4],1.5]]);return{update:(l,c,h)=>{r.position.set(-.3,1.95+l*.05,-.1),Bn(r,l,.8,2.4,h),o(l,h),a(l,h)}}},c:[[0,1.6,3.6],[0,1.45,-.3],[0,1.55,3.1],[0,1.45,-.3]],range:2.4}});$(40,(n,e)=>{let t=X(e,"disimula");return{...Yn(),atores:[mt(Be,-.1,-.9,{eyes:[[0,"flat"]],pose:Iy})],extra:(i,s,r)=>{qn(i);let o=Rr(["T\xDA:","S\xED. Disimula."],{hora:"07:32"});o.scale.setScalar(.3),i.add(o);let a=se(i,e,[[["DISIMULA"],t-.1,"y",[-.1,1.95,-.9],1,1]]);return{update:(l,c,h)=>{let d=gi(r[0]);o.position.set(d.x-.1,d.y+.08,d.z+.12),yn(o,h),a(l,h)}}},c:[[-.1,1.35,2],[-.1,1.1,-.9],[-.1,1.3,1.7],[-.1,1.1,-.9]],range:1.8}});var Vy=[[0,1.6,3.8],[0,1.3,-.3],[0,1.55,3.2],[0,1.3,-.3]],sl=(n={},e={})=>[Mt({x:-.55,z:-.3,eyes:[[0,"look"]],...n}),Be({x:.55,z:-.3,eyes:[[0,"lookl"]],...e})],an=(n,e)=>{Ff(n,[-1.6,0,1.6],1.2),Ff(n,[-1.6,1.6],-.2),e&&my(n)};$(41,(n,e)=>{let t=X(e,"ves"),i=X(e,"fuera");return{...xr(),atores:[Mt({x:.6,z:-.4,eyes:[[0,"look"]],move:s=>[gt(2,.6,ze(.5,2.5,s)),0,-.4]}),Be({x:-.6,z:-.3,eyes:[[0,"lookl"],[t,"wide"]]})],extra:s=>{Ds(s);let r=se(s,e,[[["07:45 \xB7 LA ESQUINA"],.1,"w",[0,2.4,-.4],1.6],[["TE VES A TI MISMO"],t-.2,"y",[0,2.4,-.4],1.6],[["DESDE FUERA"],i-.2,"p",[.6,2.15,-.4],1.2,1]]);return{update:(o,a,l)=>r(o,l)}},c:Vy,range:2.8}});$(42,(n,e)=>{let t=X(e,"reves");return{...xr(),atores:[Mt({x:.45,z:-.3,eyes:[[0,"look"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:s>t?-12:0})}),Be({x:-.45,z:-.3,eyes:[[0,"small"],[t,"wide"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>1?95:12,10]})})],extra:i=>{Ds(i);let s=Df(i,["\xBF?"],.5,[.45,2.2,-.3],80),r=se(i,e,[[["RAR\xCDSIMO"],.2,"r",[-.45,2.3,-.3],1],[["TU CARA\u2026 \xBFAL REV\xC9S?"],t-.8,"y",[0,2.55,-.3],1.7,1]]);return{update:(o,a,l)=>{Bn(s,o,1.4,1e9,l),r(o,l)}}},c:[[0,1.55,3],[0,1.4,-.3],[0,1.5,2.5],[0,1.4,-.3]],range:2.2}});$(43,(n,e)=>{let t=X(e,"fotos");return{...ri({look:{exposure:1.1}}),atores:[Wn(0,{x:-.8,z:-.2,eyes:[[0,"look"]],pose:i=>i.pose({armL:[95,50],armR:[95,-50]})}),Sn(3,{x:.5,z:-.6,eyes:[[0,"happy"]]}),Sn(5,{x:1.3,z:-.9,eyes:[[0,"happy"]]})],extra:(i,s,r)=>{let o=w(.3,.22,.2,R("#2A2A34"),0,0,0,!1);i.add(o);let a=hy(i,6),l=se(i,e,[[["ESTADOS UNIDOS"],"psicologos","b",[0,2.4,-.5],1.4],[["FOTOS A UN GRUPO DE CHICAS"],t-.2,"w",[0,2.4,-.5],2,1]]);return{update:(c,h,d)=>{let u=gi(r[0]);o.position.set(u.x+.05,u.y+.05,u.z+.1),a(c,c>t?1:0),l(c,d)}}},c:[[0,1.6,4],[.2,1.3,-.5],[0,1.55,3.4],[.2,1.3,-.5]],range:2.8}});$(44,(n,e)=>{let t=X(e,"normal"),i=X(e,"espejo");return{amb:"gris",fov:30,atores:[],extra:s=>{let r=rs(s,1,[-.75,1.4,0],!1),o=rs(s,1,[.75,1.4,0],!0),a=se(s,e,[[["NORMAL"],t-.1,"w",[-.75,.55,.1],.9,1],[["ESPEJO"],i-.1,"p",[.75,.55,.1],.9,1]]);return{update:(l,c,h)=>{Bn(r,l,t-.3,1e9,h),Bn(o,l,i-.3,1e9,h),o.rotation.y=gt(Math.PI,0,ze(i-.3,i+.5,l)),a(l,h)}}},c:[[0,1.3,3.4],[0,1.2,0],[0,1.3,3],[0,1.2,0]],range:3}});$(45,(n,e)=>({amb:"gris",fov:30,atores:[Sn(3,{x:0,z:.6,eyes:[[0,"look"],[1,"lookl"]]})],extra:t=>{rs(t,.8,[-.9,1.5,-.3],!1),rs(t,.8,[.9,1.5,-.3],!0);let i=Bf(t,["\xBFCu\xE1l me gusta m\xE1s?"],1.3,[0,2.2,.6]);return{update:(s,r,o)=>Bn(i,s,.2,1e9,o)}},c:[[0,1.4,3.6],[0,1.4,0],[0,1.4,3.2],[0,1.4,0]],range:3}));$(46,(n,e)=>({amb:"gris",fov:30,atores:[Sn(3,{x:0,z:.6,eyes:[[0,"happy"]],pose:t=>t.pose({armL:[12,8],armR:[95,-10]})})],extra:t=>{rs(t,.8,[-.9,1.5,-.3],!1),rs(t,.8,[.9,1.5,-.3],!0);let i=Gf(t,.45,[.9,2.15,-.2]),s=se(t,e,[[["ELLAS: LA DEL ESPEJO"],.2,"p",[0,.62,.6],1.7,1]]);return{update:(r,o,a)=>{Bn(i,r,.3,1e9,a),s(r,a)}}},c:[[0,1.4,3.6],[0,1.4,0],[0,1.4,3.2],[0,1.4,0]],range:3}));$(47,(n,e)=>{let t=X(e,"normal");return{amb:"gris",fov:30,atores:[Sn(5,{x:-.4,z:.6,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[s>t-.5?95:12,10],armR:[12,8]})}),Yt({outfit:"laranja",glow:0,x:.4,z:.6,eyes:[[0,"happy"]]})],extra:i=>{rs(i,.8,[-.9,1.5,-.3],!1),rs(i,.8,[.9,1.5,-.3],!0);let s=Gf(i,.45,[-.9,2.15,-.2]),r=se(i,e,[[["SUS AMIGOS"],.3,"b",[0,2.3,.3],1.1],[["AMIGOS: LA NORMAL"],t-.2,"w",[0,.62,.6],1.6,1]]);return{update:(o,a,l)=>{Bn(s,o,t-.2,1e9,l),r(o,l)}}},c:[[0,1.4,3.6],[0,1.4,0],[0,1.4,3.2],[0,1.4,0]],range:3}});$(48,(n,e)=>{let t=X(e,"reves");return{...$h(),atores:[Mt({x:-.55,z:.2,eyes:[[0,"look"]],pose:i=>i.pose({armL:[12,8],armR:[140,150]})}),Mt({x:.55,z:-.6,s:.92,glow:0,tint:"#D8E6F4",eyes:[[0,"lookl"]],pose:i=>i.pose({armL:[140,150],armR:[12,8]})})],extra:i=>{il(i);let s=se(i,e,[[["\xBFPOR QU\xC9?"],.1,"w",[0,2.25,-.3],.9],[["CADA D\xCDA, AL REV\xC9S"],t-.9,"y",[0,2.25,-.3],1.5,1]]);return{update:(r,o,a)=>s(r,a)}},c:jh,range:2.4}});$(49,(n,e)=>{let t=X(e,"cada");return{...vi(),atores:[Mt({x:0,z:-.4,eyes:[[0,"happy"]]}),Us({x:-.9,z:.1,eyes:[[0,"look"]]}),as({x:.9,z:.1,eyes:[[0,"lookl"]]})],extra:i=>{yi(i);let s=se(i,e,[[["TAL Y COMO ERES"],.4,"w",[0,2.3,-.4],1.4],[["LA CARA A LA QUE ESTAMOS ACOSTUMBRADOS"],t-.1,"y",[0,2.3,-.4],2.6,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,4],[0,1.3,-.3],[0,1.55,3.4],[0,1.3,-.3]],range:2.8}});$(50,(n,e)=>{let t=X(e,"nunca");return{...xr(),atores:sl({eyes:[[0,"look"]]},{eyes:[[0,"wide"],[t,"small"]]}),extra:i=>{Ds(i);let s=se(i,e,[[["TU CARA DE VERDAD"],1,"y",[-.55,2.25,-.3],1.4],[["NUNCA LA HAB\xCDAS VISTO"],t-.7,"r",[.55,2.25,-.3],1.6,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.55,3.2],[0,1.35,-.3],[0,1.5,2.7],[0,1.35,-.3]],range:2.4}});$(51,(n,e)=>{let t=X(e,"plan"),i=X(e,"tu"),s=X(e,"nadie");return{...xr(),atores:sl({eyes:[[0,"flat"]],talk:[[t-.3,n]],pose:(r,o)=>o>t?If(r,o):r.pose()},{eyes:[[0,"look"]]}),extra:r=>{Ds(r);let o=se(r,e,[[["ELLA (EN TU CUERPO)"],.1,"b",[-.55,2.3,-.3],1.5]]),a=bt(r,e,[[["Vale. Plan."],t-.3,[-.6,2.3,-.3],1],[["T\xFA eres yo.","Y yo soy t\xFA."],i-.2,[-.6,2.3,-.3],1.2],[["Nadie puede","enterarse."],s-.1,[-.6,2.3,-.3],1.2]]);return{update:(l,c,h)=>{l<t-.4?o(l,h):o(-1,h),a(l,h)}}},c:[[0,1.55,3.2],[0,1.4,-.3],[0,1.5,2.7],[0,1.4,-.3]],range:2.4}});$(52,(n,e)=>({...xr(),atores:sl({},{eyes:[[0,"small"]],talk:[[0,n]]}),extra:t=>{Ds(t);let i=bt(t,e,[[["\xBFY c\xF3mo hago","para ser t\xFA?"],.05,[.6,2.3,-.3],1.2]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.55,3.2],[0,1.4,-.3],[0,1.5,2.7],[0,1.4,-.3]],range:2.4}));$(53,(n,e)=>{let t=X(e,"sonrie"),i=X(e,"videojuegos");return{...xr(),atores:sl({eyes:[[0,"smug"]],talk:[[0,n]],pose:(s,r)=>s.pose({armL:[12,8],armR:[150,r>t?40:10]})},{eyes:[[0,"look"],[t,"happy"],[i,"sad"]]}),extra:s=>{Ds(s);let r=se(s,e,[[["1. SALUDA"],.1,"w",[0,2.45,-.3],1,1],[["2. SONR\xCDE"],t-.1,"y",[0,2.15,-.3],1,1],[["3. NADA DE VIDEOJUEGOS"],i-.6,"r",[0,1.85+0,-.1],1.7,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.6,3.4],[0,1.4,-.3],[0,1.55,2.9],[0,1.4,-.3]],range:2.4}});$(54,(n,e)=>{let t=X(e,"mochila"),i=X(e,"aprietan");return{...Ut(),atores:[Be({x:-1,z:1.8,eyes:[[0,"small"],[i,"flat"]],move:s=>[gt(-2.6,-.6,ze(0,n,s)),Math.abs(Math.sin(s*6))*.03,1.8],pose:(s,r)=>s.pose({armL:[12,8],armR:[12,8],legL:[Math.sin(r*6)*12,0],legR:[-Math.sin(r*6)*12,0]})}),...cs("look")],extra:(s,r,o)=>{an(s);let a=Ey(s,"#E8667F"),l=se(s,e,[[["SU MOCHILA"],t-.1,"p",[0,2.6,1],1.1],[["\xA1SUS ZAPATILLAS APRIETAN!"],i-.7,"r",[0,2.6,1],1.9,1]]);return{update:(c,h,d)=>{let u=o[0].root.position;a.position.set(u.x+.28,.9,u.z-.15),l(c,d)}}},c:[[-1,1.8,5.6],[-.6,1.2,1.2],[.2,1.75,5.2],[0,1.2,1.2]],range:3}});$(55,(n,e)=>{let t=X(e,"raro"),i=X(e,"nota");return{...Ut(),atores:[Be({x:0,z:2.3,eyes:[[0,"wide"]],pose:(s,r)=>tl(s,r,.5)}),...cs(null,()=>[[0,"look"]])],extra:s=>{an(s),Nf(s,0,2.3);let r=se(s,e,[[["TODOS TE MIRAN"],.3,"w",[0,2.6,1.6],1.3],[["ALGO RARO PASA"],t-.4,"y",[0,2.6,1.6],1.4],[["SE TE NOTA EN LA CARA"],i-.5,"r",[0,2.6,1.6],1.7,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,2.4,6],[0,1.1,1],[0,2.3,5.4],[0,1.1,1]],range:3.5}});$(56,(n,e)=>({...Ut(),atores:[Be({x:0,z:2.3,eyes:[[0,"small"]]}),...cs(null,t=>[[0,["down","lookl","shut","look","down"][t]]])],extra:t=>{an(t);let i=se(t,e,[[["\xBFDE VERDAD?"],.2,"y",[0,2.6,1.6],1.2,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,2.4,6],[0,1.1,1],[0,2.3,5.6],[0,1.1,1]],range:3.5}));$(57,(n,e)=>{let t=X(e,"gilovich");return{...Ut({look:{exposure:1.06}}),atores:[Yt({outfit:"terno",glasses:!0,glow:0,x:-.4,z:-.4,eyes:[[0,"happy"]],talk:[[t,n]]}),Wn(1,{x:.5,z:-.6,eyes:[[0,"look"]]})],extra:i=>{Ei(i,["EXPERIMENTO","EFECTO FOCO"]);let s=se(i,e,[[["THOMAS GILOVICH"],t-.1,"w",[-.4,2,-.2],1.4,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.8],[0,1.5,-.8],[0,1.55,3.3],[0,1.5,-.8]],range:3}});$(58,(n,e)=>{let t=X(e,"camiseta"),i=X(e,"hortera");return{...Ut(),atores:[Yt({outfit:"rosa",glow:0,x:0,z:0,eyes:[[0,"look"],[t,"wide"],[i,"flat"]]})],extra:(s,r,o)=>{Ei(s,["EXPERIMENTO","EFECTO FOCO"]);let a=go(o[0]),l=se(s,e,[[["UNA CAMISETA VERGONZOSA"],t-.1,"r",[0,2.12,0],1.6],[["UN CANTANTE MUY HORTERA"],i-1,"y",[0,2.12,0],1.6,1]]);return{update:(c,h,d)=>{a.visible=c>t,l(c,d)}}},c:[[0,1.5,2.8],[0,1.3,0],[0,1.45,2.3],[0,1.3,0]],range:2.2}});$(59,(n,e)=>({...Ut(),atores:[Yt({outfit:"rosa",glow:0,x:-2.2,z:2.3,eyes:[[0,"flat"]],move:t=>[gt(-2.6,-.2,ze(0,2.2,t)),0,2.3]}),...cs(null,t=>[[0,["look","down","lookl","look","down"][t]]])],extra:(t,i,s)=>{an(t),go(s[0]);let r=se(t,e,[[["UNA SALA LLENA DE GENTE"],.3,"w",[0,2.6,1.4],1.8,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,2.2,6.2],[0,1.1,1],[0,2.1,5.6],[0,1.1,1]],range:3.5}));$(60,(n,e)=>({...ri(),atores:[Yt({outfit:"rosa",glow:0,x:.4,z:-.3,eyes:[[0,"look"]]}),Wn(1,{x:-.5,z:-.3,eyes:[[0,"look"]],talk:[[0,n]]})],extra:(t,i,s)=>{go(s[0]);let r=bt(t,e,[[["\xBFCu\xE1ntos crees que se","han fijado en tu camiseta?"],.1,[-.4,2.35,-.3],1.8]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.55,3.2],[0,1.4,-.3],[0,1.5,2.7],[0,1.4,-.3]],range:2.4}));$(61,(n,e)=>{let t=X(e,"mitad");return{amb:"gris",fov:30,atores:[],extra:i=>{let s=Ka(i,[["CRE\xCDAN",.5,"#E8667F"],["EN REALIDAD",.001,"#3F8A52"]],2.6,[0,1.4,-.2],{title:"\xBFCU\xC1NTOS SE FIJARON?"}),r=se(i,e,[[["LA MITAD"],t-.2,"p",[-.6,.35,.2],1,1]]);return{update:(o,a,l)=>{s.scale.y=ze(0,1,o)*.999+.001,r(o,l)}}},c:[[0,1.4,3.6],[0,1.3,0],[0,1.4,3.3],[0,1.3,0]],range:3}});$(62,(n,e)=>{let t=X(e,"cuatro");return{amb:"gris",fov:30,atores:[],extra:i=>{let s=Ka(i,[["CRE\xCDAN",.5,"#E8667F"],["EN REALIDAD",.25,"#3F8A52"]],2.6,[0,1.4,-.2],{title:"\xBFCU\xC1NTOS SE FIJARON?"}),r=se(i,e,[[["LA MITAD"],0,"p",[-.6,.35,.2],1,1],[["1 DE CADA 4"],t-.4,"y",[.6,.35,.2],1,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.4,3.3],[0,1.3,0],[0,1.4,3.1],[0,1.3,0]],range:3}});$(63,(n,e)=>{let t=X(e,"foco");return{...Ut({look:{exposure:.85,bloom:.5}}),atores:[Yt({outfit:"rosa",glow:0,x:0,z:1.2,eyes:[[0,"wide"]]})],extra:(i,s,r)=>{go(r[0]),Nf(i,0,1.2);let o=se(i,e,[[["EL EFECTO FOCO"],t-.2,"y",[0,2.25,1.2],1.4,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.8,4.6],[0,1.3,1.2],[0,1.7,4],[0,1.3,1.2]],range:3}});$(64,(n,e)=>({...Ut(),atores:[Yt({outfit:"rosa",glow:0,x:0,z:2.3,eyes:[[0,"look"]]}),...cs(null,t=>[[0,["down","shut","lookl","down","look"][t]]])],extra:(t,i,s)=>{an(t),go(s[0]);let r=["\xBFMi pelo?","\xBFHay examen?","Tengo hambre","\xBFY mi m\xF3vil?","Qu\xE9 sue\xF1o"],o=qf.map(([a,l],c)=>Bf(t,[r[c]],.9,[a,1.75,l]));return{update:(a,l,c)=>o.forEach((h,d)=>Bn(h,a,.2+d*.25,1e9,c))}},c:[[0,2.5,6],[0,1.2,1],[0,2.4,5.6],[0,1.2,1]],range:3.5}));$(65,(n,e)=>{let t=X(e,"casi");return{...Ut(),atores:[mt(Be,0,1.2,{eyes:[[0,"small"],[t,"wide"]]}),mt(as,1.6,1.2,{eyes:[[0,"look"],[t-.4,"smug"]]}),mt(i=>Sn(1,i),-1.6,1.2,{eyes:[[0,"down"]]})],extra:i=>{an(i);let s=se(i,e,[[["NADIE NOTA NADA"],.5,"w",[0,2.2,1.2],1.4],[["CASI NADIE"],t-.2,"r",[1.6,2,1.2],1.1,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,4.4],[.4,1,1.2],[.4,1.55,3.8],[.6,1,1.2]],range:3}});$(66,(n,e)=>{let t=X(e,"levanta");return{...Ut(),atores:[kf({x:-1.2,z:-2.4,eyes:[[0,"look"]],pose:(i,s)=>s<t?Lf(i):i.pose()}),mt(Mt,.6,-.2+0,{eyes:[[0,"look"],[t,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?170:12,10]})}),mt(Be,-.8,1.2,{eyes:[[0,"look"],[t+.3,"wide"]]})],extra:i=>{an(i,!0);let s=se(i,e,[[["CLASE DE MATES"],.1,"w",[0,2.45,-.6],1.4],[["ALGO DIFICIL\xCDSIMO"],"dificilisimo","r",[0,2.45,-.6],1.6],[["TU CUERPO"],t-.3,"b",[.6,2,-.2],1.2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,2.1,4.4],[0,1.6,-1.6],[0,2,3.9],[0,1.6,-1.6]],range:3.5}});$(67,(n,e)=>{let t=X(e,"perfecto");return{...Ut(),atores:[mt(Mt,.6,-.2,{eyes:[[0,"smug"]],talk:[[0,n]]}),kf({x:-1.2,z:-2.4,eyes:[[0,"look"],[t,"wide"]]})],extra:i=>{an(i);let s=Ei(i,["x\xB2 + 3x = 10","x = 2 \u2713"]),r=se(i,e,[[["\xA1PERFECTO!"],t-.1,"y",[.4,2.1,-.6],1.3,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[.6,1.7,3.2],[0,1.6,-1.6],[.6,1.65,2.8],[0,1.6,-1.6]],range:3}});$(68,(n,e)=>{let t=X(e,"marcos");return{...Ut(),atores:[mt(Mt,0,-.2,{eyes:[[0,"smug"]]}),mt(Us,-1.6,-.2,{eyes:[[0,"look"],[t,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[12,8]})}),mt(i=>Sn(1,i),1.6,-.2,{eyes:[[0,"lookl"]]}),mt(i=>Sn(6,i),-1.6,1.2,{eyes:[[0,"wide"]]}),mt(Be,1.6,1.2,{eyes:[[0,"lookl"]]})],extra:i=>{an(i);let s=se(i,e,[[["TODA LA CLASE SE GIRA"],.2,"w",[0,2.5,.5],1.7],[["MARCOS, TU MEJOR AMIGO"],t-.2,"b",[-1.6,1.95,-.2],1.7,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.9,4.6],[-.3,1,.3],[-.3,1.85,4],[-.6,1,.1]],range:3.2}});$(69,(n,e)=>({...Ut(),atores:[mt(Us,-.45,-.2,{eyes:[[0,"wide"]],talk:[[0,n]]}),mt(Mt,.55,-.2,{eyes:[[0,"smug"]]})],extra:t=>{an(t);let i=bt(t,e,[[["\xBFDesde cu\xE1ndo","sabes t\xFA mates?"],.05,[-.45,1.95,-.2],1.3]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.4,2.8],[0,1.15,-.2],[0,1.4,2.4],[0,1.15,-.2]],range:2.4}));$(70,(n,e)=>({...Ut(),atores:[mt(Be,0,1.2,{eyes:[[0,"shut"]],pose:t=>t.pose({armL:[150,150],armR:[150,150]})})],extra:t=>{an(t);let i=se(t,e,[[["T\xDA, EN SU SITIO"],.2,"p",[0,1.95,1.2],1.3,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.3,3.6],[0,1,1.2],[0,1.3,3.3],[0,1,1.2]],range:2}));$(71,(n,e)=>{let t=X(e,"biologia"),i=X(e,"ranas");return{...Ut(),atores:[Zh({x:-1.3,z:-2.2,eyes:[[0,"happy"]],talk:[[0,i]]}),mt(Be,0,1.2,{eyes:[[0,"look"],[i,"wide"]]})],extra:s=>{an(s);let r=Ei(s,["PRESENTACI\xD3N DE HOY:",""]),o=Bs(s,1,[.9,2.25,-3.3]),a=se(s,e,[[["TU TURNO"],.1,"y",[0,2.2,.6],1.2],[["BIOLOG\xCDA"],t-.1,"b",[0,2.2,.6],1.2],[["LAS RANAS"],i-.1,"r",[0,2.2,.6],1.2,1]]);return{update:(l,c,h)=>{o.visible=l>i-.2,a(l,h)}}},c:[[0,2,5],[0,1.6,-1.2],[0,1.95,4.4],[0,1.6,-1.2]],range:3.5}});$(72,(n,e)=>({...Ut(),atores:[mt(Be,0,1.2,{eyes:[[0,"wide"]],pose:(t,i)=>tl(t,i,.6)})],extra:t=>{an(t);let i=el(t,6),s=se(t,e,[[["NADA DE RANAS"],.2,"r",[0,1.95,1.2],1.2,1]]);return{update:(r,o,a)=>{i(r,[0,1.6,1.3]),s(r,a)}}},c:[[0,1.3,3.4],[0,1.1,1.2],[0,1.3,3.1],[0,1.1,1.2]],range:2}));$(73,(n,e)=>({...Ut(),atores:[Be({x:0,z:-1.6,eyes:[[0,"small"]],move:t=>[0,0,gt(-.6,-1.6,ze(0,1.4,t))]}),...cs(null,()=>[[0,"look"]])],extra:t=>(an(t),Bs(t,1,[.9,2.25,-3.3]),Ei(t,["LAS RANAS",""]),{}),c:[[0,1.6,4.4],[0,1.3,-1.6],[0,1.55,3.6],[0,1.3,-1.6]],range:3}));$(74,(n,e)=>{let t=X(e,"silencio");return{...Ut(),atores:[Be({x:0,z:-1.6,eyes:[[0,"small"],[t,"flat"]],talk:[[0,t]]})],extra:i=>{Bs(i,1,[.9,2.25,-3.3]),Ei(i,["LAS RANAS",""]);let s=bt(i,e,[[["Las ranas\u2026","saltan."],.05,[-.7,2.15,-1.6],1.1,t]]),r=se(i,e,[[["\u2026"],t,"w",[0,2.25,-1.6],.6,1]]);return{update:(o,a,l)=>{s(o,l),r(o,l)}}},c:[[0,1.5,1.6],[0,1.4,-1.6],[0,1.5,1.2],[0,1.4,-1.6]],range:2}});$(75,(n,e)=>{let t=X(e,"veces");return{...Ut(),atores:[Be({x:0,z:-1.6,eyes:[[0,"small"],[t,"flat"]],talk:[[0,n]],pose:i=>i.pose({armL:[12,8],armR:[100,-20]})})],extra:i=>{Bs(i,1,[.9,2.25,-3.3]),Ei(i,["LAS RANAS",""]);let s=bt(i,e,[[["Y\u2026 son verdes."],.05,[-.7,2.3,-1.6],1.1],[["A veces."],t-.2,[-.7,2.3,-1.6],.9]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.5,1.6],[0,1.4,-1.6],[0,1.5,1.2],[0,1.4,-1.6]],range:2}});$(76,(n,e)=>{let t=X(e,"cuerpo"),i=X(e,"senalando");return{...Ut(),atores:[Be({x:-.4,z:-1.6,eyes:[[0,"sad"],[t,"look"]]}),...cs(null,s=>[[0,s===1?"happy":"look"]]),Mt({x:2.7,z:3,eyes:[[0,"wide"]],pose:(s,r)=>r>t?Fy(s,r):s.pose()})],extra:s=>{an(s),Bs(s,1,[.9,2.25,-3.3]);let r=se(s,e,[[["JE, JE"],.1,"w",[0,1.9,1.2],.7],[["TU CUERPO, EN LA \xDALTIMA FILA"],t-.2,"b",[2.7,2.35,3],1.8],[["\xA1GESTOS!"],i-.3,"y",[2.7,2.35,3],1,1]]);return{update:(o,a,l)=>r(o,l)}},cam:[[0,[-.4,1.6,1],[-.4,1.4,-1.6]],[2,[-.4,1.6,1],[-.4,1.4,-1.6]],[3.2,[1.4,1.7,-.6],[2.7,1.5,3]],[99,[1.5,1.7,-.2],[2.7,1.5,3]]],f:[[0,2.6],[2,2.6],[3.2,3.85],[99,3.45]],range:2.6}});$(77,(n,e)=>{let t=X(e,"regular");return{...Ut(),atores:[Be({x:-.3,z:-1.6,eyes:[[0,"look"],[t,"happy"]],talk:[[0,t]],pose:(i,s)=>i.pose({armL:[12,8],armR:[100+Math.sin(s*3)*20,-40]})}),Zh({x:-1.6,z:-2,eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{Bs(i,1,[.9,2.25,-3.3]),Ei(i,["LAS RANAS","saltan \xB7 croan \xB7 comen bichos"]);let s=se(i,e,[[["VAS REPITIENDO"],1.2,"w",[-.3,2.3,-1.6],1.3],[["REGULAR. PERO SALE."],t-.2,"y",[-.3,2.3,-1.6],1.6,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.7,2.8],[-.3,1.6,-2.2],[0,1.65,2.3],[-.3,1.6,-2.2]],range:3}});var Eo=[[0,1.55,3.4],[0,1.35,-.2],[0,1.5,2.9],[0,1.35,-.2]],Qt={look:Ty},Nn=[[0,1.6,3.2],[0,1.4,-1.6],[0,1.55,2.7],[0,1.4,-1.6]],_n=(n={},e={})=>[Mt({x:-.5,z:-1.6,eyes:[[0,"look"]],...n}),Be({x:.5,z:-1.6,eyes:[[0,"lookl"]],...e})];$(78,(n,e)=>{let t=X(e,"sara"),i=X(e,"brazo");return{...vi(),atores:[Be({x:.45,z:0,eyes:[[0,"look"],[i,"wide"]],move:s=>[gt(.45,-.9,ze(i+.3,n,s)),0,gt(0,-1,ze(i+.3,n,s))],pose:(s,r)=>s.pose({armL:[12+ze(i,i+.3,r)*40,8],armR:[12,8]})}),as({x:-.4,z:.1,eyes:[[0,"smug"]],move:s=>[gt(-.4,-1.7,ze(i+.3,n,s)),0,gt(.1,-.9,ze(i+.3,n,s))],pose:(s,r)=>r>i?Cy(s):s.pose()})],extra:s=>{yi(s);let r=se(s,e,[[["EL RECREO"],.1,"w",[0,2.4,-.4],1],[["SARA, SU MEJOR AMIGA"],t-.1,"p",[-.4,2.3,.1],1.6],[["A UN RINC\xD3N"],i+.8,"y",[-1.2,2.3,-.6],1.1,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[-.3,1.6,4],[-.4,1.3,-.4],[-.8,1.55,3.4],[-1,1.3,-.6]],range:3}});$(79,(n,e)=>({...vi(),atores:[as({x:-.4,z:0,eyes:[[0,"smug"]],talk:[[0,n]]}),Be({x:.45,z:0,eyes:[[0,"wide"]]})],extra:t=>{yi(t);let i=bt(t,e,[[["Bueno, \xBFqu\xE9? \xBFHoy s\xED","se lo vas a decir?"],.05,[-.4,2.15,0],1.5]]);return{update:(s,r,o)=>i(s,o)}},c:Eo,range:2.4}));$(80,(n,e)=>({...vi(),atores:[as({x:-.4,z:0,eyes:[[0,"smug"]]}),Be({x:.45,z:0,eyes:[[0,"small"]],talk:[[0,n]]})],extra:t=>{yi(t);let i=bt(t,e,[[["\xBFDecirle\u2026 qu\xE9?","\xBFA qui\xE9n?"],.05,[.45,2.15,0],1.3]]);return{update:(s,r,o)=>i(s,o)}},c:Eo,range:2.4}));$(81,(n,e)=>{let t=X(e,"el"),i=X(e,"al"),s=X(e,"senala");return{...vi(),atores:[as({x:-.4,z:0,eyes:[[0,"flat"],[t,"smug"]],talk:[[t,s]],pose:(r,o)=>o>s?r.pose({armL:[12,8],armR:[95,-55]}):r.pose()}),Be({x:.45,z:0,eyes:[[0,"small"],[i,"wide"]]})],extra:r=>{yi(r);let o=se(r,e,[[["OJOS EN BLANCO"],.1,"w",[-.4,2.15,0],1.3]]),a=bt(r,e,[[["A \xE9l."],t-.1,[-.4,2.15,0],.8],[["Al que llevas mirando","desde septiembre."],i-.1,[-.4,2.15,0],1.5]]);return{update:(l,c,h)=>{l<t-.2?o(l,h):o(-1,h),a(l,h)}}},c:Eo,range:2.4}});$(82,(n,e)=>{let t=X(e,"cuerpo");return{...vi(),atores:[as({x:-1.4,z:1.6,eyes:[[0,"smug"]],pose:i=>i.pose({armL:[12,8],armR:[95,-55]})}),Mt({x:.9,z:-2.4,eyes:[[0,"look"]]}),Us({x:1.7,z:-2.6,eyes:[[0,"look"]]})],extra:i=>{yi(i);let s=se(i,e,[[["A TI"],.1,"y",[.9,2.05,-2.4],.9],[["(A TU CUERPO)"],t-.2,"b",[.9,2.05,-2.4],1.2,1]]);return{update:(r,o,a)=>s(r,a)}},cam:[[0,[-1.8,1.6,4.4],[-1.2,1.3,1.2]],[.8,[-.4,1.6,3.4],[.9,1.2,-2.4]],[99,[-.2,1.6,3],[.9,1.2,-2.4]]],f:[[0,3.3],[.8,6],[99,5.6]],range:3}});$(83,(n,e)=>({...vi(),atores:[Be({x:0,z:0,eyes:[[0,"wide"]]})],extra:(t,i,s)=>{yi(t);let r=se(t,e,[[["DE PIEDRA"],.2,"w",[0,2.2,0],1,1]]);return{update:(o,a,l)=>{Xf(s[0],o>.3),r(o,l)}}},c:[[0,1.5,2.4],[0,1.35,0],[0,1.45,2],[0,1.35,0]],range:2}));$(84,(n,e)=>{let t=X(e,"codazo");return{...vi(),atores:[Us({x:-.45,z:0,eyes:[[0,"smug"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?60+Math.sin(s*14)*15:12,-40]})}),Mt({x:.45,z:0,eyes:[[0,"look"],[t+.2,"wide"]],pose:(i,s)=>i.pose({lean:s>t?Math.sin(s*14)*4:0})})],extra:i=>{yi(i);let s=se(i,e,[[["MIENTRAS TANTO\u2026"],.1,"w",[0,2.2,0],1.3],[["MARCOS"],"marcos","b",[-.45,2.2,0],.9],[["\xA1CODAZO!"],t-.1,"y",[0,2.2,0],1,1]]);return{update:(r,o,a)=>s(r,a)}},c:Eo,range:2.4}});$(85,(n,e)=>{let t=X(e,"que",1.5);return{...vi(),atores:[Us({x:-.45,z:0,eyes:[[0,"smug"]],talk:[[0,n]]}),Mt({x:.45,z:0,eyes:[[0,"wide"]]})],extra:i=>{yi(i);let s=bt(i,e,[[["T\xEDo, \xBFhoy le vas a decir","algo a ella o qu\xE9?"],.05,[-.45,2.15,0],1.6],[["Que se te nota","much\xEDsimo."],t,[-.45,2.15,0],1.3]]);return{update:(r,o,a)=>s(r,a)}},c:Eo,range:2.4}});$(86,(n,e)=>{let t=X(e,"piedra");return{...vi(),atores:[Mt({x:0,z:0,eyes:[[0,"wide"]]})],extra:(i,s,r)=>{yi(i);let o=se(i,e,[[["ELLA (EN TU CUERPO)"],.1,"b",[0,2.2,0],1.5],[["TAMBI\xC9N DE PIEDRA"],t-.1,"w",[0,2.2,0],1.5,1]]);return{update:(a,l,c)=>{Xf(r[0],a>t),o(a,c)}}},c:[[0,1.5,2.4],[0,1.35,0],[0,1.45,2],[0,1.35,0]],range:2}});$(87,(n,e)=>{let t=X(e,"biblioteca"),i=X(e,"estanteria");return{...Zt(Qt),atores:_n({move:s=>[gt(-2.2,-.5,ze(0,2,s)),0,-1.6]},{move:s=>[gt(2.2,.5,ze(.3,2.3,s)),0,-1.6]}),extra:s=>{let r=Ps("#C9361F","MISTERIOS");r.scale.setScalar(.5),r.position.set(0,2.05,-2.85),s.add(r);let o=se(s,e,[[["ESA TARDE"],.1,"w",[0,2.65,-1.8],1],[["LA BIBLIOTECA"],t-.1,"y",[0,2.65,-1.8],1.3],[["LA MISMA ESTANTER\xCDA"],i-.5,"p",[0,2.65,-1.8],1.6,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.8,3.6],[0,1.5,-1.8],[0,1.75,3],[0,1.5,-1.8]],range:2.6}});$(88,(n,e)=>{let t=X(e,"enterado");return{...Zt(Qt),atores:_n({eyes:[[0,"small"],[t,"wide"]]},{eyes:[[0,"small"],[t,"wide"]]}),extra:(i,s,r)=>{let o=Ls(i,r,0),a=Ls(i,r,1),l=se(i,e,[[["LA MISMA CARA"],.4,"y",[0,2.4,-1.6],1.3,1]]);return{update:(c,h,d)=>{o(ze(t,t+.6,c)),a(ze(t,t+.6,c)),l(c,d)}}},c:Nn,range:2.4}});$(89,(n,e)=>({...Zt(Qt),atores:_n({},{eyes:[[0,"small"]],talk:[[0,n]]}),extra:t=>{let i=bt(t,e,[[["Sara me ha dicho","una cosa."],.05,[.5,2.35,-1.6],1.2]]);return{update:(s,r,o)=>i(s,o)}},c:Nn,range:2.4}));$(90,(n,e)=>({...Zt(Qt),atores:_n({eyes:[[0,"small"]],talk:[[0,n]]}),extra:t=>{let i=bt(t,e,[[["Y Marcos me ha","dicho otra."],.05,[-.5,2.35,-1.6],1.2]]);return{update:(s,r,o)=>i(s,o)}},c:Nn,range:2.4}));$(91,(n,e)=>({...Zt(Qt),atores:_n({},{eyes:[[0,"sad"]],talk:[[0,n]]}),extra:t=>{let i=bt(t,e,[[["Yo pensaba que se","me notaba much\xEDsimo."],.05,[.5,2.35,-1.6],1.4]]);return{update:(s,r,o)=>i(s,o)}},c:Nn,range:2.4}));$(92,(n,e)=>{let t=X(e,"no");return{...Zt(Qt),atores:_n({eyes:[[0,"look"],[t,"sad"]],talk:[[0,n]]}),extra:i=>{let s=bt(i,e,[[["Yo tambi\xE9n."],.05,[-.5,2.35,-1.6],1],[["Y no me hab\xEDa dado","cuenta de nada."],t-.1,[-.5,2.35,-1.6],1.3]]);return{update:(r,o,a)=>s(r,a)}},c:Nn,range:2.4}});$(93,(n,e)=>{let t=X(e,"gilovich");return{...Ut({look:{exposure:1.06}}),atores:[Yt({outfit:"terno",glasses:!0,glow:0,x:-.4,z:-.4,eyes:[[0,"happy"]],talk:[[t,n]]}),Wn(1,{x:.5,z:-.6,eyes:[[0,"look"]]})],extra:i=>{Ei(i,["EXPERIMENTO","MENTIRAS Y NERVIOS"]);let s=se(i,e,[[["TAMBI\xC9N TIENE NOMBRE"],.2,"y",[0,2.3,-.4],1.7],[["GILOVICH, OTRA VEZ"],t-.2,"w",[-.4,2,-.2],1.5,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,3.8],[0,1.5,-.8],[0,1.55,3.3],[0,1.5,-.8]],range:3}});$(94,(n,e)=>{let t=X(e,"mintieran");return{...Ut(),atores:[Yt({outfit:"laranja",glow:0,x:0,z:-1.6,eyes:[[0,"look"],[t,"smug"]],talk:[[t,n]]}),...cs(null,()=>[[0,"look"]])],extra:i=>{an(i);let s=se(i,e,[[["\xA1A MENTIR!"],t-.1,"r",[0,2.35,-1],1.2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.9,4.6],[0,1.3,-.6],[0,1.85,4],[0,1.3,-.6]],range:3.5}});$(95,(n,e)=>{let t=X(e,"pensaban"),i=X(e,"realidad");return{amb:"gris",fov:30,atores:[],extra:s=>{let r=Ka(s,[["CRE\xCDAN",.7,"#E8667F"],["EN REALIDAD",.001,"#3F8A52"]],2.6,[0,1.4,-.2],{title:"\xBFCU\xC1NTOS TE HAN PILLADO?"}),o=Ka(s,[["CRE\xCDAN",.7,"#E8667F"],["EN REALIDAD",.35,"#3F8A52"]],2.6,[0,1.4,-.19],{title:"\xBFCU\xC1NTOS TE HAN PILLADO?"}),a=se(s,e,[[["MUCH\xCDSIMOS"],t,"p",[-.6,.35,.2],1.1,1],[["BASTANTES MENOS"],i+.4,"y",[.6,.35,.2],1.3,1]]);return{update:(l,c,h)=>{r.visible=l<i,o.visible=l>=i,r.scale.y=ze(t-.5,t+.5,l)*.999+.001,a(l,h)}}},c:[[0,1.4,3.6],[0,1.3,0],[0,1.4,3.3],[0,1.3,0]],range:3}});$(96,(n,e)=>{let t=X(e,"fuera");return{...Ut(),atores:[Yt({outfit:"laranja",glow:0,x:-.5,z:-.4,eyes:[[0,"wide"]],pose:(i,s)=>tl(i,s,.5)}),Sn(3,{x:.7,z:-.2,eyes:[[0,"look"],[t,"flat"]]})],extra:(i,s,r)=>{let o=Wf(i),a=el(i,5),l=se(i,e,[[["POR DENTRO: \xA1NERVIOS!"],.3,"r",[-.5,2.3,-.4],1.6],[["DESDE FUERA: APENAS SE VE"],t-.3,"w",[.4,2.3,-.2],1.9,1]]);return{update:(c,h,d)=>{o(c,[-.5,1.05,-.25]),a(c,[-.5,1.8,-.3],ze(t,t+.4,c)>.5?0:1),l(c,d)}}},c:[[0,1.55,3.4],[0,1.35,-.3],[0,1.5,2.9],[0,1.35,-.3]],range:2.4}});$(97,(n,e)=>{let t=X(e,"cristal");return{amb:"gris",fov:30,atores:[Yt({outfit:"laranja",glow:.35,tint:"#CFE8FF",x:0,z:0,eyes:[[0,"wide"]]})],extra:i=>{let s=Wf(i),r=ke("#BFE6FF",2,0);i.add(r),r.position.set(0,1.2,-.1);let o=se(i,e,[[["LA ILUSI\xD3N DE TRANSPARENCIA"],.2,"y",[0,2.12,0],1.9],[["COMO SI FU\xC9RAMOS DE CRISTAL"],t-.9,"w",[0,2.12,0],1.9,1]]);return{update:(a,l,c)=>{s(a,[0,1.05,.1]),r.material.opacity=.3,o(a,c)}}},c:[[0,1.4,3.2],[0,1.3,0],[0,1.4,2.8],[0,1.3,0]],range:2.6}});$(98,(n,e)=>{let t=X(e,"mente"),i=X(e,"cosas");return{amb:"gris",fov:30,atores:[Yt({outfit:"laranja",glow:0,x:-.5,z:0,eyes:[[0,"look"],[i-.4,"happy"]],talk:[[i-1.2,n]]}),Sn(3,{x:.5,z:0,eyes:[[0,"lookl"]]})],extra:s=>{let r=se(s,e,[[["NO NOS LEEN LA MENTE"],t-.6,"r",[0,2.15,0],1.7],[["HAY QUE DECIR LAS COSAS"],i-1.4,"y",[0,2.15,0],1.8,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.5,3.4],[0,1.3,0],[0,1.45,2.9],[0,1.3,0]],range:2.6}});$(99,(n,e)=>{let t=X(e,"libro"),i=X(e,"ayer");return{...Zt(Qt),atores:_n({eyes:[[0,"look"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>t-.6&&r<t+.6?150:r>t?70:12,r>t?20:8]})},{eyes:[[0,"small"]]}),extra:(s,r,o)=>{let a=Ps("#C9361F","MISTERIOS");a.scale.setScalar(.5),s.add(a);let l=se(s,e,[[["SILENCIO"],.2,"w",[0,2.6,-1.6],1],[["EL MISMO LIBRO DE AYER"],i-.9,"p",[0,2.6,-1.6],1.8,1]]);return{update:(c,h,d)=>{if(c<t)a.position.set(0,2.05,-2.85);else{let u=gi(o[0]);a.position.set(u.x,u.y,u.z+.1)}yn(a,d),l(c,d)}}},c:[[0,1.75,3],[0,1.6,-1.8],[0,1.7,2.6],[0,1.6,-1.8]],range:2.4}});$(100,(n,e)=>({...Zt(Qt),atores:_n({eyes:[[0,"look"]],talk:[[0,n]],pose:t=>t.pose({armL:[12,8],armR:[70,20]})},{eyes:[[0,"small"]]}),extra:(t,i,s)=>{let r=Ps("#C9361F","MISTERIOS");r.scale.setScalar(.5),t.add(r);let o=bt(t,e,[[["\xBFLo intentamos?"],.05,[-.5,2.35,-1.6],1.1]]);return{update:(a,l,c)=>{let h=gi(s[0]);r.position.set(h.x,h.y,h.z+.1),yn(r,c),o(a,c)}}},c:Nn,range:2.4}));$(101,(n,e)=>({...Zt(Qt),atores:[Mt({x:-.35,z:-1.6,eyes:[[0,"down"]],pose:t=>t.pose({armL:[12,8],armR:[70,-10]})}),Be({x:.35,z:-1.6,eyes:[[0,"down"]],pose:(t,i)=>t.pose({armL:[gt(12,70,ze(.2,1.2,i)),10],armR:[12,8]})})],extra:(t,i,s)=>{let r=Ps("#C9361F","MISTERIOS");return r.scale.setScalar(.5),t.add(r),{update:(o,a,l)=>{let c=gi(s[0]);r.position.set(c.x+.1,c.y,c.z+.08),yn(r,l)}}},c:[[0,1.4,.6],[0,1.25,-1.6],[0,1.4,.3],[0,1.25,-1.6]],range:1.4}));$(102,(n,e)=>({...Zt(Qt),atores:[Mt({x:-.35,z:-1.6,eyes:[[0,"shut"]],pose:t=>t.pose({armL:[12,8],armR:[70,-10]})}),Be({x:.35,z:-1.6,eyes:[[0,"shut"]],pose:t=>t.pose({armL:[70,10],armR:[12,8]})})],extra:t=>{let i=Vf(t);i.scale.setScalar(2);let s=fo(t,16,"#FFF2C0"),r=se(t,e,[[["\xA1CHISPA!"],.05,"y",[0,2,-1.5],1,1]]);return{update:(o,a,l)=>{i.position.set(0,1.25,-1.4),i.material.opacity=1-ze(.2,n,o)*.6,s(o,[0,1.3,-1.4,.7],1),Uf(l,.01*(1-ze(0,n,o)),o),r(o,l)}}},c:[[0,1.4,1.2],[0,1.3,-1.6],[0,1.4,1],[0,1.3,-1.6]],range:1.8,look:{exposure:1.2,bloom:.6}}));$(103,(n,e)=>{let t=X(e,"manos"),i=X(e,"unas");return{...Zt(Qt),atores:[Mt({x:0,z:-1.6,eyes:[[0,"shut"],[.5,"wide"],[t,"down"],[i+.5,"happy"]],pose:(s,r)=>r>t-.2?nl(s,r):s.pose()})],extra:s=>{let r=se(s,e,[[["TUS MANOS DE SIEMPRE"],t+.6,"y",[0,2.15,-1.6],1.6],[["SIN U\xD1AS AZULES"],i-.1,"b",[0,2.15,-1.6],1.4,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.5,.8],[0,1.25,-1.6],[0,1.45,.4],[0,1.25,-1.6]],range:1.8}});$(104,(n,e)=>{let t=X(e,"verdad");return{...Zt(Qt),atores:_n({eyes:[[0,"wide"],[t,"happy"]]},{eyes:[[0,"shut"],[.6,"lookl"]]}),extra:i=>{let s=se(i,e,[[["ELLA. DE VERDAD."],t-.3,"p",[.5,2.25,-1.6],1.4],[["EN SU CUERPO"],"cuerpo","y",[.5,2.25,-1.6],1.2,1]]);return{update:(r,o,a)=>s(r,a)}},c:Nn,range:2.4}});$(105,(n,e)=>{let t=X(e,"pelo"),i=X(e,"que");return{...Zt(Qt),atores:_n({eyes:[[0,"look"],[i+1,"happy"]]},{eyes:[[0,"down"],[t,"happy"]],talk:[[i,n]],pose:(s,r)=>r<t?nl(s,r):r<i?s.pose({armL:[12,8],armR:[160,150]}):If(s,r)}),extra:s=>{let r=bt(s,e,[[["Qu\xE9 alivio."],i-.1,[.5,2.35,-1.6],.9],[["Tu cuerpo tiene much\xEDsima","hambre todo el rato."],i+1.2,[.5,2.35,-1.6],1.7]]);return{update:(o,a,l)=>r(o,l)}},c:Nn,range:2.4}});$(106,(n,e)=>{let t=X(e,"silencio");return{...Zt(Qt),atores:_n({eyes:[[0,"happy"]],pose:(i,s)=>s<t?ja(i,s):i.pose()},{eyes:[[0,"happy"]],pose:(i,s)=>s<t?ja(i,s):i.pose()}),extra:(i,s,r)=>{let o=Ls(i,r,0),a=Ls(i,r,1),l=se(i,e,[[["NO ES INC\xD3MODO"],t+1.2,"w",[0,2.4,-1.6],1.3,1]]);return{update:(c,h,d)=>{o(ze(t,t+1,c)),a(ze(t,t+1,c)),l(c,d)}}},c:Nn,range:2.4}});$(107,(n,e)=>{let t=X(e,"ahora");return{...Zt(Qt),atores:_n({},{eyes:[[0,"smug"]],talk:[[0,n]]}),extra:i=>{let s=bt(i,e,[[["Oye."],.05,[.5,2.35,-1.6],.7],[["Ahora ya s\xE9 lo","que piensa Marcos."],t-.1,[.5,2.35,-1.6],1.4]]);return{update:(r,o,a)=>s(r,a)}},c:Nn,range:2.4}});$(108,(n,e)=>({...Zt(Qt),atores:_n({eyes:[[0,"smug"]],talk:[[0,n]]}),extra:t=>{let i=bt(t,e,[[["Y yo s\xE9 lo que","piensa Sara."],.05,[-.5,2.35,-1.6],1.2]]);return{update:(s,r,o)=>i(s,o)}},c:Nn,range:2.4}));$(109,(n,e)=>{let t=X(e,"ya");return{...Zt(Qt),atores:_n({},{eyes:[[0,"look"],[t,"smug"]],talk:[[0,n]]}),extra:i=>{let s=bt(i,e,[[["Pues entonces\u2026"],.05,[.5,2.35,-1.6],1],[["\u2026ya no hace falta que","nadie diga nada, \xBFno?"],t-.1,[.5,2.35,-1.6],1.6]]);return{update:(r,o,a)=>s(r,a)}},c:Nn,range:2.4}});$(110,(n,e)=>{let t=X(e,"si"),i=X(e,"gustas");return{...Zt(Qt),atores:_n({eyes:[[0,"look"],[i,"happy"]],talk:[[t,n]]},{eyes:[[0,"lookl"],[i+.3,"wide"]]}),extra:(s,r,o)=>{let a=Ls(s,o,0),l=Ls(s,o,1),c=se(s,e,[[["NO TE ESCONDES"],.3,"y",[-.5,2.35,-1.6],1.3]]),h=bt(s,e,[[["S\xED que hace falta."],t-.1,[-.5,2.35,-1.6],1.2],[["Me gustas."],i-.3,[-.5,2.35,-1.6],1]]);return{update:(d,u,f)=>{d<t-.2?c(d,f):c(-1,f),h(d,f),a(ze(i,i+.5,d)),l(ze(i+.3,i+.8,d))}}},c:[[-.2,1.55,2.6],[-.1,1.4,-1.6],[-.2,1.5,2.2],[-.1,1.4,-1.6]],range:2.2}});$(111,(n,e)=>{let t=X(e,"va");return{...Zt(Qt),atores:_n({eyes:[[0,"wide"],[2,"happy"]]},{eyes:[[0,"happy"]],talk:[[.3,t]],move:i=>[gt(.5,2.4,ze(t,n,i)),0,gt(-1.6,-.8,ze(t,n,i))]}),extra:i=>{let s=bt(i,e,[[["Ya lo s\xE9."],.3,[.5,2.35,-1.6],.8],[["He estado todo el d\xEDa","dentro de tu cabeza."],"he",[.5,2.35,-1.6],1.6,t]]);return{update:(r,o,a)=>s(r,a)}},c:Nn,range:2.4}});$(112,(n,e)=>{let t=X(e,"tu");return{...Zt(Qt),atores:[Mt({x:-.8,z:-1.4,eyes:[[0,"look"],[t+1,"heart"]]}),Be({x:1.6,z:-.8,eyes:[[0,"happy"]],talk:[[t,n]]})],extra:(i,s,r)=>{let o=Ls(i,r,1),a=Wh(i,.35),l=bt(i,e,[[["T\xFA a m\xED tambi\xE9n."],t-.1,[1.6,2.3,-.8],1.2]]);return{update:(c,h,d)=>{o(ze(t,t+.6,c)),a.position.set(.4,2+Math.sin(c*4)*.05,-1.1),Bn(a,c,t+.8,1e9,d),l(c,d)}}},c:[[.4,1.6,3.6],[.4,1.35,-1.1],[.4,1.55,3],[.4,1.35,-1.1]],range:2.6}});$(113,(n,e)=>{let t=X(e,"original");return{...Ut(),atores:[Zh({x:-1.2,z:-2,eyes:[[0,"happy"]],talk:[[t-1,n]]}),mt(Be,.6,-.2,{eyes:[[0,"look"],[t,"happy"]]}),mt(Mt,-.8,1.2,{eyes:[[0,"happy"]]})],extra:i=>{an(i),Bs(i,1,[.9,2.25,-3.3]);let s=se(i,e,[[["AL D\xCDA SIGUIENTE"],.1,"w",[0,2.35,-.4],1.5]]),r=bt(i,e,[[["Muy original."],t-.6,[-1.2,2.3,-2],1.1]]);return{update:(o,a,l)=>{s(o,l),r(o,l)}}},c:[[0,1.9,3.8],[-.4,1.4,-1],[0,1.85,3.3],[-.4,1.4,-1]],range:3.5}});$(114,(n,e)=>{let t=X(e,"marcos");return{...Ut(),atores:[mt(as,-1.6,-.2,{eyes:[[0,"smug"]]}),mt(Mt,0,-.2,{eyes:[[0,"happy"]]}),mt(Us,1.6,-.2,{eyes:[[0,"happy"]],pose:(i,s)=>s>t?Py(i):i.pose()})],extra:i=>{an(i);let s=se(i,e,[[["GUI\xD1O"],.3,"p",[-1.6,1.95,-.2],.8,1],[["\xA1BIEN!"],t,"y",[1.6,1.95,-.2],.8,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.6,4.4],[0,1,-.2],[0,1.55,3.8],[0,1,-.2]],range:3}});$(115,(n,e)=>{let t=X(e,"quien"),i=X(e,"leo");return{amb:"gris",fov:30,atores:[Mt({x:-.6,z:0,eyes:[[0,"happy"]]}),Be({x:.6,z:0,eyes:[[0,"happy"]]})],extra:(s,r,o)=>{let a=ke("#7FD0FF",1,0),l=ke("#FF8AC8",1,0);s.add(a,l);let c=se(s,e,[[["\xBFCON QUI\xC9N INTERCAMBIAR\xCDAS","EL CUERPO UN D\xCDA?"],t-1.2,"y",[0,2.4,0],2.2],[["TE LEO EN LOS COMENTARIOS"],i-.2,"p",[0,2.4,0],2,1]]),h=Gh(1.8);return s.add(h),h.position.set(0,.45,.3),{update:(d,u,f)=>{let g=d*.5%1;a.position.set(gt(-.6,.6,g),1.3+Math.sin(g*Math.PI)*.45,.1),l.position.set(gt(.6,-.6,g),1.3-Math.sin(g*Math.PI)*.45,.1),a.material.opacity=l.material.opacity=.45,Bn(h,d,i+1.2,1e9,f),c(d,f)}}},c:[[0,1.45,3.8],[0,1.35,0],[0,1.45,3.4],[0,1.35,0]],range:3}});function Wy(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new Ha(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=uo.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=uo.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(Wy(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=uo[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
