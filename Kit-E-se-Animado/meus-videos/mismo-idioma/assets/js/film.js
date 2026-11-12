var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var qa="170";var xh=0,xl=1,Mh=2;var wc=1,Ya=2,Rn=3,jn=0,Oe=1,ie=2,_n=0,Kn=1,tn=2,Ml=3,Sl=4,Sh=5,pi=100,Eh=101,bh=102,Th=103,wh=104,Ah=200,Rh=201,Ch=202,Ph=203,Co=204,Po=205,Ih=206,Lh=207,Dh=208,Fh=209,Uh=210,Nh=211,Bh=212,Oh=213,zh=214,Io=0,Lo=1,Do=2,Ki=3,Fo=4,Uo=5,No=6,Bo=7,Ac=0,Hh=1,kh=2,vn=0,Vh=1,Gh=2,Wh=3,Xh=4,qh=5,Yh=6,Zh=7;var Rc=300,Qi=301,ji=302,Oo=303,zo=304,zr=306,ze=1e3,gi=1001,Ho=1002,Je=1003,$h=1004;var ks=1005;var mn=1006,$r=1007;var _i=1008;var Ln=1009,Cc=1010,Pc=1011,Ps=1012,Za=1013,Dn=1014,gn=1015,Ve=1016,$a=1017,Ja=1018,ts=1020,Ic=35902,Lc=1021,Dc=1022,ln=1023,Fc=1024,Uc=1025,Zi=1026,es=1027,Ka=1028,Qa=1029,Nc=1030,ja=1031;var tl=1033,fr=33776,pr=33777,mr=33778,gr=33779,ko=35840,Vo=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37808,$o=37809,Jo=37810,Ko=37811,Qo=37812,jo=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,oa=37820,aa=37821,_r=36492,la=36494,ca=36495,Bc=36283,ha=36284,ua=36285,da=36286;var vr=2300,fa=2301,Jr=2302,El=2400,bl=2401,Tl=2402;var Jh=3200,ls=3201;var Oc=0,Kh=1,$n="",ve="srgb",si="srgb-linear",Hr="linear",jt="srgb";var Ri=7680;var wl=519,Qh=512,jh=513,tu=514,zc=515,eu=516,nu=517,iu=518,su=519,pa=35044;var Al="300 es",Pn=2e3,yr=2001,ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kr=Math.PI/180,ma=180/Math.PI;function Qn(){let i=__sr()*4294967295|0,t=__sr()*4294967295|0,e=__sr()*4294967295|0,n=__sr()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function ru(i,t){return(i%t+t)%t}function Qr(i,t,e){return(1-e)*i+e*t}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(t,e,n,s,r,o,a,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],d=n[4],m=n[7],p=n[2],f=n[5],g=n[8],_=s[0],u=s[3],c=s[6],v=s[1],M=s[4],y=s[7],C=s[2],w=s[5],R=s[8];return r[0]=o*_+a*v+l*C,r[3]=o*u+a*M+l*w,r[6]=o*c+a*y+l*R,r[1]=h*_+d*v+m*C,r[4]=h*u+d*M+m*w,r[7]=h*c+d*y+m*R,r[2]=p*_+f*v+g*C,r[5]=p*u+f*M+g*w,r[8]=p*c+f*y+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-n*r*d+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],m=d*o-a*h,p=a*l-d*r,f=h*r-o*l,g=e*m+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=m*_,t[1]=(s*h-d*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(d*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jr=new Dt;function Hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){let i=xr("canvas");return i.style.display="block",i}var Rl={};function As(i){i in Rl||(Rl[i]=!0,console.warn(i))}function au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Xt={enabled:!0,workingColorSpace:si,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?Hr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cl=[.64,.33,.3,.6,.15,.06],Pl=[.2126,.7152,.0722],Il=[.3127,.329],Ll=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[si]:{primaries:Cl,whitePoint:Il,transfer:Hr,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:Pl,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:Cl,whitePoint:Il,transfer:jt,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:Pl,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}});var Ci,ga=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=xr("canvas")),Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,Mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uu=0,He=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gi,s=gi,r=mn,o=_i,a=ln,l=Ln,h=i.DEFAULT_ANISOTROPY,d=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Qn(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ze:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ze:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Rc;He.DEFAULT_ANISOTROPY=1;var ee=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],d=l[4],m=l[8],p=l[1],f=l[5],g=l[9],_=l[2],u=l[6],c=l[10];if(Math.abs(d-p)<.01&&Math.abs(m-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(m+_)<.1&&Math.abs(g+u)<.1&&Math.abs(h+f+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(h+1)/2,y=(f+1)/2,C=(c+1)/2,w=(d+p)/4,R=(m+_)/4,I=(g+u)/4;return M>y&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=R/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((u-g)*(u-g)+(m-_)*(m-_)+(p-d)*(p-d));return Math.abs(v)<.001&&(v=1),this.x=(u-g)/v,this.y=(m-_)/v,this.z=(p-d)/v,this.w=Math.acos((h+f+c-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Mr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Se=class extends _a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var va=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],d=n[s+2],m=n[s+3],p=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=d,t[e+3]=m;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(m!==_||l!==p||h!==f||d!==g){let u=1-a,c=l*p+h*f+d*g+m*_,v=c>=0?1:-1,M=1-c*c;if(M>Number.EPSILON){let C=Math.sqrt(M),w=Math.atan2(C,c*v);u=Math.sin(u*w)/C,a=Math.sin(a*w)/C}let y=a*v;if(l=l*u+p*y,h=h*u+f*y,d=d*u+g*y,m=m*u+_*y,u===1-a){let C=1/Math.sqrt(l*l+h*h+d*d+m*m);l*=C,h*=C,d*=C,m*=C}}t[e]=l,t[e+1]=h,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],d=n[s+3],m=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+d*m+l*f-h*p,t[e+1]=l*g+d*p+h*m-a*f,t[e+2]=h*g+d*f+a*p-l*m,t[e+3]=d*g-a*m-l*p-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),d=a(s/2),m=a(r/2),p=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*d*m+h*f*g,this._y=h*f*m-p*d*g,this._z=h*d*g+p*f*m,this._w=h*d*m-p*f*g;break;case"YXZ":this._x=p*d*m+h*f*g,this._y=h*f*m-p*d*g,this._z=h*d*g-p*f*m,this._w=h*d*m+p*f*g;break;case"ZXY":this._x=p*d*m-h*f*g,this._y=h*f*m+p*d*g,this._z=h*d*g+p*f*m,this._w=h*d*m-p*f*g;break;case"ZYX":this._x=p*d*m-h*f*g,this._y=h*f*m+p*d*g,this._z=h*d*g-p*f*m,this._w=h*d*m+p*f*g;break;case"YZX":this._x=p*d*m+h*f*g,this._y=h*f*m+p*d*g,this._z=h*d*g-p*f*m,this._w=h*d*m-p*f*g;break;case"XZY":this._x=p*d*m-h*f*g,this._y=h*f*m-p*d*g,this._z=h*d*g+p*f*m,this._w=h*d*m+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],d=e[6],m=e[10],p=n+a+m;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>m){let f=2*Math.sqrt(1+n-a-m);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>m){let f=2*Math.sqrt(1+a-n-m);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+m-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,d=e._w;return this._x=n*d+o*a+s*h-r*l,this._y=s*d+o*l+r*a-n*h,this._z=r*d+o*h+n*l-s*a,this._w=o*d-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),d=Math.atan2(h,a),m=Math.sin((1-e)*d)/h,p=Math.sin(e*d)/h;return this._w=o*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*__sr(),e=2*Math.PI*__sr(),n=__sr(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),d=2*(a*e-r*s),m=2*(r*n-o*e);return this.x=e+l*h+o*m-a*d,this.y=n+l*d+a*h-r*m,this.z=s+l*m+r*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let t=__sr()*Math.PI*2,e=__sr()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new F,Fl=new ei,Fn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Gs.subVectors(this.max,_s),Pi.subVectors(t.a,_s),Ii.subVectors(t.b,_s),Li.subVectors(t.c,_s),Gn.subVectors(Ii,Pi),Wn.subVectors(Li,Ii),ai.subVectors(Pi,Li);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ai.y,ai.x,0];return!no(e,Pi,Ii,Li,Gs)||(e=[1,0,0,0,1,0,0,0,1],!no(e,Pi,Ii,Li,Gs))?!1:(Ws.crossVectors(Gn,Wn),e=[Ws.x,Ws.y,Ws.z],no(e,Pi,Ii,Li,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},En=[new F,new F,new F,new F,new F,new F,new F,new F],rn=new F,Vs=new Fn,Pi=new F,Ii=new F,Li=new F,Gn=new F,Wn=new F,ai=new F,_s=new F,Gs=new F,Ws=new F,li=new F;function no(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){li.fromArray(i,r);let a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=t.dot(li),h=e.dot(li),d=n.dot(li);if(Math.max(-Math.max(l,h,d),Math.min(l,h,d))>a)return!1}return!0}var du=new Fn,vs=new F,io=new F,vi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):du.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(io)),this.expandByPoint(vs.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bn=new F,so=new F,Xs=new F,Xn=new F,ro=new F,qs=new F,oo=new F,ya=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){so.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(so);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xs),a=Xn.dot(this.direction),l=-Xn.dot(Xs),h=Xn.lengthSq(),d=Math.abs(1-o*o),m,p,f,g;if(d>0)if(m=o*l-a,p=o*a-l,g=r*d,m>=0)if(p>=-g)if(p<=g){let _=1/d;m*=_,p*=_,f=m*(m+o*p+2*a)+p*(o*m+p+2*l)+h}else p=r,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*l)+h;else p=-r,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*l)+h;else p<=-g?(m=Math.max(0,-(-o*r+a)),p=m>0?-r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+h):p<=g?(m=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+h):(m=Math.max(0,-(o*r+a)),p=m>0?r:Math.min(Math.max(-r,-l),r),f=-m*m+p*(p+2*l)+h);else p=o>0?-r:r,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(so).addScaledVector(Xs,p),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);let n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),d>=0?(r=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(t.min.z-p.z)*m,l=(t.max.z-p.z)*m):(a=(t.max.z-p.z)*m,l=(t.min.z-p.z)*m),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){ro.subVectors(e,t),qs.subVectors(n,t),oo.crossVectors(ro,qs);let o=this.direction.dot(oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);let l=a*this.direction.dot(qs.crossVectors(Xn,qs));if(l<0)return null;let h=a*this.direction.dot(ro.cross(Xn));if(h<0||l+h>o)return null;let d=-a*Xn.dot(oo);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,l,h,d,m,p,f,g,_,u){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,d,m,p,f,g,_,u)}set(t,e,n,s,r,o,a,l,h,d,m,p,f,g,_,u){let c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=s,c[1]=r,c[5]=o,c[9]=a,c[13]=l,c[2]=h,c[6]=d,c[10]=m,c[14]=p,c[3]=f,c[7]=g,c[11]=_,c[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let p=o*d,f=o*m,g=a*d,_=a*m;e[0]=l*d,e[4]=-l*m,e[8]=h,e[1]=f+g*h,e[5]=p-_*h,e[9]=-a*l,e[2]=_-p*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){let p=l*d,f=l*m,g=h*d,_=h*m;e[0]=p+_*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*m,e[5]=o*d,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*d,f=l*m,g=h*d,_=h*m;e[0]=p-_*a,e[4]=-o*m,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*d,e[9]=_-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*d,f=o*m,g=a*d,_=a*m;e[0]=l*d,e[4]=g*h-f,e[8]=p*h+_,e[1]=l*m,e[5]=_*h+p,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*d,e[4]=_-p*m,e[8]=g*m+f,e[1]=m,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=f*m+g,e[10]=p-_*m}else if(t.order==="XZY"){let p=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*d,e[4]=-m,e[8]=h*d,e[1]=p*m+_,e[5]=o*d,e[9]=f*m-g,e[2]=g*m-f,e[6]=a*d,e[10]=_*m+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fu,t,pu)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),qn.crossVectors(n,Ze),qn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),qn.crossVectors(n,Ze)),qn.normalize(),Ys.crossVectors(Ze,qn),s[0]=qn.x,s[4]=Ys.x,s[8]=Ze.x,s[1]=qn.y,s[5]=Ys.y,s[9]=Ze.y,s[2]=qn.z,s[6]=Ys.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],d=n[1],m=n[5],p=n[9],f=n[13],g=n[2],_=n[6],u=n[10],c=n[14],v=n[3],M=n[7],y=n[11],C=n[15],w=s[0],R=s[4],I=s[8],b=s[12],E=s[1],A=s[5],H=s[9],B=s[13],k=s[2],$=s[6],W=s[10],j=s[14],G=s[3],it=s[7],ct=s[11],Mt=s[15];return r[0]=o*w+a*E+l*k+h*G,r[4]=o*R+a*A+l*$+h*it,r[8]=o*I+a*H+l*W+h*ct,r[12]=o*b+a*B+l*j+h*Mt,r[1]=d*w+m*E+p*k+f*G,r[5]=d*R+m*A+p*$+f*it,r[9]=d*I+m*H+p*W+f*ct,r[13]=d*b+m*B+p*j+f*Mt,r[2]=g*w+_*E+u*k+c*G,r[6]=g*R+_*A+u*$+c*it,r[10]=g*I+_*H+u*W+c*ct,r[14]=g*b+_*B+u*j+c*Mt,r[3]=v*w+M*E+y*k+C*G,r[7]=v*R+M*A+y*$+C*it,r[11]=v*I+M*H+y*W+C*ct,r[15]=v*b+M*B+y*j+C*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],d=t[2],m=t[6],p=t[10],f=t[14],g=t[3],_=t[7],u=t[11],c=t[15];return g*(+r*l*m-s*h*m-r*a*p+n*h*p+s*a*f-n*l*f)+_*(+e*l*f-e*h*p+r*o*p-s*o*f+s*h*d-r*l*d)+u*(+e*h*m-e*a*f-r*o*m+n*o*f+r*a*d-n*h*d)+c*(-s*a*d-e*l*m+e*a*p+s*o*m-n*o*p+n*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],m=t[9],p=t[10],f=t[11],g=t[12],_=t[13],u=t[14],c=t[15],v=m*u*h-_*p*h+_*l*f-a*u*f-m*l*c+a*p*c,M=g*p*h-d*u*h-g*l*f+o*u*f+d*l*c-o*p*c,y=d*_*h-g*m*h+g*a*f-o*_*f-d*a*c+o*m*c,C=g*m*l-d*_*l-g*a*p+o*_*p+d*a*u-o*m*u,w=e*v+n*M+s*y+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=v*R,t[1]=(_*p*r-m*u*r-_*s*f+n*u*f+m*s*c-n*p*c)*R,t[2]=(a*u*r-_*l*r+_*s*h-n*u*h-a*s*c+n*l*c)*R,t[3]=(m*l*r-a*p*r-m*s*h+n*p*h+a*s*f-n*l*f)*R,t[4]=M*R,t[5]=(d*u*r-g*p*r+g*s*f-e*u*f-d*s*c+e*p*c)*R,t[6]=(g*l*r-o*u*r-g*s*h+e*u*h+o*s*c-e*l*c)*R,t[7]=(o*p*r-d*l*r+d*s*h-e*p*h-o*s*f+e*l*f)*R,t[8]=y*R,t[9]=(g*m*r-d*_*r-g*n*f+e*_*f+d*n*c-e*m*c)*R,t[10]=(o*_*r-g*a*r+g*n*h-e*_*h-o*n*c+e*a*c)*R,t[11]=(d*a*r-o*m*r-d*n*h+e*m*h+o*n*f-e*a*f)*R,t[12]=C*R,t[13]=(d*_*s-g*m*s+g*n*p-e*_*p-d*n*u+e*m*u)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*u-e*a*u)*R,t[15]=(o*m*s-d*a*s+d*n*l-e*m*l-o*n*p+e*a*p)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,d=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,d*a+n,d*l-s*o,0,h*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,d=o+o,m=a+a,p=r*h,f=r*d,g=r*m,_=o*d,u=o*m,c=a*m,v=l*h,M=l*d,y=l*m,C=n.x,w=n.y,R=n.z;return s[0]=(1-(_+c))*C,s[1]=(f+y)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(p+c))*w,s[6]=(u+v)*w,s[7]=0,s[8]=(g+M)*R,s[9]=(u-v)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Di.set(s[0],s[1],s[2]).length(),o=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let h=1/r,d=1/o,m=1/a;return on.elements[0]*=h,on.elements[1]*=h,on.elements[2]*=h,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=m,on.elements[9]*=m,on.elements[10]*=m,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),m=(e+t)/(e-t),p=(n+s)/(n-s),f,g;if(a===Pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn){let l=this.elements,h=1/(e-t),d=1/(n-s),m=1/(o-r),p=(e+t)*h,f=(n+s)*d,g,_;if(a===Pn)g=(o+r)*m,_=-2*m;else if(a===yr)g=r*m,_=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new F,on=new oe,fu=new F(0,0,0),pu=new F(1,1,1),qn=new F,Ys=new F,Ze=new F,Ul=new oe,Nl=new ei,yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],d=s[9],m=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mu=0,Bl=new F,Fi=new ei,Tn=new oe,Zs=new F,ys=new F,gu=new F,_u=new ei,Ol=new F(1,0,0),zl=new F(0,1,0),Hl=new F(0,0,1),kl={type:"added"},vu={type:"removed"},Ui={type:"childadded",child:null},ao={type:"childremoved",child:null},Ee=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new yn,n=new ei,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Dt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(ys,Zs,this.up):Tn.lookAt(Zs,ys,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vu),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,_u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,d=l.length;h<d;h++){let m=l[h];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),d=o(t.images),m=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let h in a){let d=a[h];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new F(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new F,wn=new F,lo=new F,An=new F,Ni=new F,Bi=new F,Vl=new F,co=new F,ho=new F,uo=new F,fo=new ee,po=new ee,mo=new ee,Jn=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),wn.subVectors(n,e),lo.subVectors(t,e);let o=an.dot(an),a=an.dot(wn),l=an.dot(lo),h=wn.dot(wn),d=wn.dot(lo),m=o*h-a*a;if(m===0)return r.set(0,0,0),null;let p=1/m,f=(h*l-a*d)*p,g=(o*d-a*l)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),mo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fo,r.x),o.addScaledVector(po,r.y),o.addScaledVector(mo,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ni.subVectors(s,n),Bi.subVectors(r,n),co.subVectors(t,n);let l=Ni.dot(co),h=Bi.dot(co);if(l<=0&&h<=0)return e.copy(n);ho.subVectors(t,s);let d=Ni.dot(ho),m=Bi.dot(ho);if(d>=0&&m<=d)return e.copy(s);let p=l*m-d*h;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Ni,o);uo.subVectors(t,r);let f=Ni.dot(uo),g=Bi.dot(uo);if(g>=0&&f<=g)return e.copy(r);let _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(Bi,a);let u=d*g-f*m;if(u<=0&&m-d>=0&&f-g>=0)return Vl.subVectors(r,s),a=(m-d)/(m-d+(f-g)),e.copy(s).addScaledVector(Vl,a);let c=1/(u+_+p);return o=_*c,a=p*c,e.copy(n).addScaledVector(Ni,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=ru(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=go(o,r,t+1/3),this.g=go(o,r,t),this.b=go(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Xt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Be(Pe.r*255,0,255))*65536+Math.round(Be(Pe.g*255,0,255))*256+Math.round(Be(Pe.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,d=(a+o)/2;if(a===o)l=0,h=0;else{let m=o-a;switch(h=d<=.5?m/(o+a):m/(2-o-a),o){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=h,t.l=d,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ve){Xt.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL($s);let n=Qr(Yn.h,$s.h,e),s=Qr(Yn.s,$s.s,e),r=Qr(Yn.l,$s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new Tt;Tt.NAMES=kc;var yu=0,ni=class extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Qn(),this.name="",this.blending=Kn,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},be=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new F,Js=new xt,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pa,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pa&&(t.usage=this.usage),t}};var br=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Tr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},xu=0,je=new oe,_o=new Ee,Oi=new F,$e=new Fn,xs=new Fn,Me=new F,De=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Tr:br)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors($e.min,xs.min),$e.expandByPoint(Me),Me.addVectors($e.max,xs.max),$e.expandByPoint(Me)):($e.expandByPoint(xs.min),$e.expandByPoint(xs.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)Me.fromBufferAttribute(a,h),l&&(Oi.fromBufferAttribute(t,h),Me.add(Oi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new F,l[I]=new F;let h=new F,d=new F,m=new F,p=new xt,f=new xt,g=new xt,_=new F,u=new F;function c(I,b,E){h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,b),m.fromBufferAttribute(n,E),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,E),d.sub(h),m.sub(h),f.sub(p),g.sub(p);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(m,-f.y).multiplyScalar(A),u.copy(m).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(A),a[I].add(_),a[b].add(_),a[E].add(_),l[I].add(u),l[b].add(u),l[E].add(u))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,b=v.length;I<b;++I){let E=v[I],A=E.start,H=E.count;for(let B=A,k=A+H;B<k;B+=3)c(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new F,y=new F,C=new F,w=new F;function R(I){C.fromBufferAttribute(s,I),w.copy(C);let b=a[I];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(w,b);let A=y.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,A)}for(let I=0,b=v.length;I<b;++I){let E=v[I],A=E.start,H=E.count;for(let B=A,k=A+H;B<k;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,h=new F,d=new F,m=new F;if(t)for(let p=0,f=t.count;p<f;p+=3){let g=t.getX(p+0),_=t.getX(p+1),u=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,u),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,u),a.add(d),l.add(d),h.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){let h=a.array,d=a.itemSize,m=a.normalized,p=new h.constructor(l.length*d),f=0,g=0;for(let _=0,u=l.length;_<u;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let c=0;c<d;c++)p[g++]=h[f++]}return new Le(p,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let d=0,m=h.length;d<m;d++){let p=h[d],f=t(p,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],d=[];for(let m=0,p=h.length;m<p;m++){let f=h[m];d.push(f.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],m=r[h];for(let p=0,f=m.length;p<f;p++)d.push(m[p].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,d=o.length;h<d;h++){let m=o[h];this.addGroup(m.start,m.count,m.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gl=new oe,ci=new ya,Ks=new vi,Wl=new F,Qs=new F,js=new F,tr=new F,vo=new F,er=new F,Xl=new F,nr=new F,gt=class extends Ee{constructor(t=new De,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let d=a[l],m=r[l];d!==0&&(vo.fromBufferAttribute(m,t),o?er.addScaledVector(vo,d):er.addScaledVector(vo.sub(e),d))}e.add(er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Ks.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ks,Wl)===null||ci.origin.distanceToSquared(Wl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let u=p[g],c=o[u.materialIndex],v=Math.max(u.start,f.start),M=Math.min(a.count,Math.min(u.start+u.count,f.start+f.count));for(let y=v,C=M;y<C;y+=3){let w=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);s=ir(this,c,t,n,h,d,m,w,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let u=g,c=_;u<c;u+=3){let v=a.getX(u),M=a.getX(u+1),y=a.getX(u+2);s=ir(this,o,t,n,h,d,m,v,M,y),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let u=p[g],c=o[u.materialIndex],v=Math.max(u.start,f.start),M=Math.min(l.count,Math.min(u.start+u.count,f.start+f.count));for(let y=v,C=M;y<C;y+=3){let w=y,R=y+1,I=y+2;s=ir(this,c,t,n,h,d,m,w,R,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let u=g,c=_;u<c;u+=3){let v=u,M=u+1,y=u+2;s=ir(this,o,t,n,h,d,m,v,M,y),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}};function Mu(i,t,e,n,s,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;nr.copy(a),nr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(nr);return h<e.near||h>e.far?null:{distance:h,point:nr.clone(),object:i}}function ir(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,Qs),i.getVertexPosition(l,js),i.getVertexPosition(h,tr);let d=Mu(i,t,e,n,Qs,js,tr,Xl);if(d){let m=new F;Jn.getBarycoord(Xl,Qs,js,tr,m),s&&(d.uv=Jn.getInterpolatedAttribute(s,a,l,h,m,new xt)),r&&(d.uv1=Jn.getInterpolatedAttribute(r,a,l,h,m,new xt)),o&&(d.normal=Jn.getInterpolatedAttribute(o,a,l,h,m,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a,b:l,c:h,normal:new F,materialIndex:0};Jn.getNormal(Qs,js,tr,p.normal),d.face=p,d.barycoord=m}return d}var cn=class i extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],d=[],m=[],p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(m,2));function g(_,u,c,v,M,y,C,w,R,I,b){let E=y/R,A=C/I,H=y/2,B=C/2,k=w/2,$=R+1,W=I+1,j=0,G=0,it=new F;for(let ct=0;ct<W;ct++){let Mt=ct*A-B;for(let Nt=0;Nt<$;Nt++){let ne=Nt*E-H;it[_]=ne*v,it[u]=Mt*M,it[c]=k,h.push(it.x,it.y,it.z),it[_]=0,it[u]=0,it[c]=w>0?1:-1,d.push(it.x,it.y,it.z),m.push(Nt/R),m.push(1-ct/I),j+=1}}for(let ct=0;ct<I;ct++)for(let Mt=0;Mt<R;Mt++){let Nt=p+Mt+$*ct,ne=p+Mt+$*(ct+1),q=p+(Mt+1)+$*(ct+1),tt=p+(Mt+1)+$*ct;l.push(Nt,ne,tt),l.push(ne,q,tt),G+=6}a.addGroup(f,G,b),f+=G,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Su(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var cs={clone:ns,merge:Ue},Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Su(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new F,ql=new xt,Yl=new xt,Ie=class extends wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Yl),e.subVectors(Yl,ql)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zi=-90,Hi=1,xa=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(zi,Hi,t,e);s.layers=this.layers,this.add(s);let r=new Ie(zi,Hi,t,e);r.layers=this.layers,this.add(r);let o=new Ie(zi,Hi,t,e);o.layers=this.layers,this.add(o);let a=new Ie(zi,Hi,t,e);a.layers=this.layers,this.add(a);let l=new Ie(zi,Hi,t,e);l.layers=this.layers,this.add(l);let h=new Ie(zi,Hi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,d]=this.children,m=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(m,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ar=class extends He{constructor(t,e,n,s,r,o,a,l,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,o,a,l,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ma=class extends Se{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ar(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:_n});r.uniforms.tEquirect.value=e;let o=new gt(s,r),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=mn),new xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},yo=new F,Tu=new F,wu=new Dt,Cn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yo.subVectors(n,e).cross(Tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wu.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new vi,sr=new F,Is=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],d=s[5],m=s[6],p=s[7],f=s[8],g=s[9],_=s[10],u=s[11],c=s[12],v=s[13],M=s[14],y=s[15];if(n[0].setComponents(l-r,p-h,u-f,y-c).normalize(),n[1].setComponents(l+r,p+h,u+f,y+c).normalize(),n[2].setComponents(l+o,p+d,u+g,y+v).normalize(),n[3].setComponents(l-o,p-d,u-g,y-v).normalize(),n[4].setComponents(l-a,p-m,u-_,y-M).normalize(),e===Pn)n[5].setComponents(l+a,p+m,u+_,y+M).normalize();else if(e===yr)n[5].setComponents(a,m,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.__noRaf(s)}return{start:function(){t!==!0&&e!==null&&(n=i.__noRaf(s),t=!0)},stop:function(){i.__noCaf(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Au(i){let t=new WeakMap;function e(a,l){let h=a.array,d=a.usage,m=h.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,h,d),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,h){let d=l.array,m=l.updateRanges;if(i.bindBuffer(h,a),m.length===0)i.bufferSubData(h,0,d);else{m.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<m.length;f++){let g=m[p],_=m[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,m[p]=_)}m.length=p+1;for(let f=0,g=m.length;f<g;f++){let _=m[f];i.bufferSubData(h,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Yt=class i extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,d=l+1,m=t/a,p=e/l,f=[],g=[],_=[],u=[];for(let c=0;c<d;c++){let v=c*p-o;for(let M=0;M<h;M++){let y=M*m-r;g.push(y,-v,0),_.push(0,0,1),u.push(M/a),u.push(1-c/l)}}for(let c=0;c<l;c++)for(let v=0;v<a;v++){let M=v+h*c,y=v+h*(c+1),C=v+1+h*(c+1),w=v+1+h*c;f.push(M,y,w),f.push(y,C,w)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fu=`#ifdef USE_AOMAP
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
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ku=`#define PI 3.141592653589793
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
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
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,wd=`struct PhysicalMaterial {
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
}`,Ad=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
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
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ff=`float getShadowMask() {
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
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`#include <common>
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
}`,Uf=`#if DEPTH_PACKING == 3200
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
}`,Nf=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
}`,Jf=`#define PHONG
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
}`,Kf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,jf=`#define STANDARD
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
}`,tp=`#define TOON
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
}`,ep=`#define TOON
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
}`,np=`uniform float size;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,op=`uniform float rotation;
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
}`,ap=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Iu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Fu,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Bu,begin_vertex:Ou,beginnormal_vertex:zu,bsdfs:Hu,iridescence_fragment:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:$u,color_vertex:Ju,common:Ku,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:ju,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:od,envmap_common_pars_fragment:ad,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:xd,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:vd,lights_pars_begin:yd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:Ed,lights_phong_pars_fragment:bd,lights_physical_fragment:Td,lights_physical_pars_fragment:wd,lights_fragment_begin:Ad,lights_fragment_maps:Rd,lights_fragment_end:Cd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Dd,map_fragment:Fd,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Bd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:zd,morphinstance_vertex:Hd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:qd,normal_pars_fragment:Yd,normal_pars_vertex:Zd,normal_vertex:$d,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:tf,opaque_fragment:ef,packing:nf,premultiplied_alpha_fragment:sf,project_vertex:rf,dithering_fragment:of,dithering_pars_fragment:af,roughnessmap_fragment:lf,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:uf,shadowmap_vertex:df,shadowmask_pars_fragment:ff,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:vf,specularmap_pars_fragment:yf,tonemapping_fragment:xf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:Ef,uv_pars_fragment:bf,uv_pars_vertex:Tf,uv_vertex:wf,worldpos_vertex:Af,background_vert:Rf,background_frag:Cf,backgroundCube_vert:Pf,backgroundCube_frag:If,cube_vert:Lf,cube_frag:Df,depth_vert:Ff,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Bf,equirect_vert:Of,equirect_frag:zf,linedashed_vert:Hf,linedashed_frag:kf,meshbasic_vert:Vf,meshbasic_frag:Gf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:qf,meshmatcap_frag:Yf,meshnormal_vert:Zf,meshnormal_frag:$f,meshphong_vert:Jf,meshphong_frag:Kf,meshphysical_vert:Qf,meshphysical_frag:jf,meshtoon_vert:tp,meshtoon_frag:ep,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:op,sprite_frag:ap},et={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},fn={basic:{uniforms:Ue([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ue([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ue([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ue([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ue([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ue([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ue([et.points,et.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ue([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ue([et.common,et.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ue([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ue([et.sprite,et.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ue([et.common,et.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ue([et.lights,et.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};fn.physical={uniforms:Ue([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var rr={r:0,b:0,g:0},ui=new yn,lp=new oe;function cp(i,t,e,n,s,r,o){let a=new Tt(0),l=r===!0?0:1,h,d,m=null,p=0,f=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1,y=g(v);y===null?c(a,l):y&&y.isColor&&(c(y,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(v,M){let y=g(M);y&&(y.isCubeTexture||y.mapping===zr)?(d===void 0&&(d=new gt(new cn(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:ns(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),ui.copy(M.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(ui)),d.material.toneMapped=Xt.getTransfer(y.colorSpace)!==jt,(m!==y||p!==y.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,m=y,p=y.version,f=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new gt(new Yt(2,2),new Te({name:"BackgroundMaterial",uniforms:ns(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Xt.getTransfer(y.colorSpace)!==jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(m!==y||p!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=y,p=y.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function c(v,M){v.getRGB(rr,Vc(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(a,l)},render:_,addToRenderList:u}}function hp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(E,A,H,B,k){let $=!1,W=m(B,H,A);r!==W&&(r=W,h(r.object)),$=f(E,B,H,k),$&&g(E,B,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(E,A,H,B),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function h(E){return i.bindVertexArray(E)}function d(E){return i.deleteVertexArray(E)}function m(E,A,H){let B=H.wireframe===!0,k=n[E.id];k===void 0&&(k={},n[E.id]=k);let $=k[A.id];$===void 0&&($={},k[A.id]=$);let W=$[B];return W===void 0&&(W=p(l()),$[B]=W),W}function p(E){let A=[],H=[],B=[];for(let k=0;k<e;k++)A[k]=0,H[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:H,attributeDivisors:B,object:E,attributes:{},index:null}}function f(E,A,H,B){let k=r.attributes,$=A.attributes,W=0,j=H.getAttributes();for(let G in j)if(j[G].location>=0){let ct=k[G],Mt=$[G];if(Mt===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(Mt=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(Mt=E.instanceColor)),ct===void 0||ct.attribute!==Mt||Mt&&ct.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(E,A,H,B){let k={},$=A.attributes,W=0,j=H.getAttributes();for(let G in j)if(j[G].location>=0){let ct=$[G];ct===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor));let Mt={};Mt.attribute=ct,ct&&ct.data&&(Mt.data=ct.data),k[G]=Mt,W++}r.attributes=k,r.attributesNum=W,r.index=B}function _(){let E=r.newAttributes;for(let A=0,H=E.length;A<H;A++)E[A]=0}function u(E){c(E,0)}function c(E,A){let H=r.newAttributes,B=r.enabledAttributes,k=r.attributeDivisors;H[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),k[E]!==A&&(i.vertexAttribDivisor(E,A),k[E]=A)}function v(){let E=r.newAttributes,A=r.enabledAttributes;for(let H=0,B=A.length;H<B;H++)A[H]!==E[H]&&(i.disableVertexAttribArray(H),A[H]=0)}function M(E,A,H,B,k,$,W){W===!0?i.vertexAttribIPointer(E,A,H,k,$):i.vertexAttribPointer(E,A,H,B,k,$)}function y(E,A,H,B){_();let k=B.attributes,$=H.getAttributes(),W=A.defaultAttributeValues;for(let j in $){let G=$[j];if(G.location>=0){let it=k[j];if(it===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(it=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(it=E.instanceColor)),it!==void 0){let ct=it.normalized,Mt=it.itemSize,Nt=t.get(it);if(Nt===void 0)continue;let ne=Nt.buffer,q=Nt.type,tt=Nt.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||it.gpuType===Za;if(it.isInterleavedBufferAttribute){let st=it.data,At=st.stride,Pt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)c(G.location+Bt,st.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)u(G.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Bt=0;Bt<G.locationSize;Bt++)M(G.location+Bt,Mt/G.locationSize,q,ct,At*tt,(Pt+Mt/G.locationSize*Bt)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)c(G.location+st,it.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<G.locationSize;st++)u(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let st=0;st<G.locationSize;st++)M(G.location+st,Mt/G.locationSize,q,ct,Mt*tt,Mt/G.locationSize*st*tt,_t)}}else if(W!==void 0){let ct=W[j];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}v()}function C(){I();for(let E in n){let A=n[E];for(let H in A){let B=A[H];for(let k in B)d(B[k].object),delete B[k];delete A[H]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let A=n[E.id];for(let H in A){let B=A[H];for(let k in B)d(B[k].object),delete B[k];delete A[H]}delete n[E.id]}function R(E){for(let A in n){let H=n[A];if(H[E.id]===void 0)continue;let B=H[E.id];for(let k in B)d(B[k].object),delete B[k];delete H[E.id]}}function I(){b(),o=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:u,disableUnusedAttributes:v}}function up(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function o(h,d,m){m!==0&&(i.drawArraysInstanced(n,h,d,m),e.update(d,n,m))}function a(h,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,m);let f=0;for(let g=0;g<m;g++)f+=d[g];e.update(f,n,1)}function l(h,d,m,p){if(m===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],d[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,d,0,p,0,m);let g=0;for(let _=0;_<m;_++)g+=d[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===Ve&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==gn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=l(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let m=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:u,maxAttributes:c,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function fp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Cn,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let f=m.length!==0||p||n!==0||s;return s=p,n=m.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){e=d(m,p,0)},this.setState=function(m,p,f){let g=m.clippingPlanes,_=m.clipIntersection,u=m.clipShadows,c=i.get(m);if(!s||g===null||g.length===0||r&&!u)r?d(null):h();else{let v=r?0:n,M=v*4,y=c.clippingState||null;l.value=y,y=d(g,p,M,f);for(let C=0;C!==M;++C)y[C]=e[C];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,p,f,g){let _=m!==null?m.length:0,u=null;if(_!==0){if(u=l.value,g!==!0||u===null){let c=f+_*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(u===null||u.length<c)&&(u=new Float32Array(c));for(let M=0,y=f;M!==_;++M,y+=4)o.copy(m[M]).applyMatrix4(v,a),o.normal.toArray(u,y),u[y+3]=o.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,u}}function pp(i){let t=new WeakMap;function e(o,a){return a===Oo?o.mapping=Qi:a===zo&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Oo||a===zo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Ma(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var is=class extends wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yi=4,Zl=[.125,.215,.35,.446,.526,.582],mi=20,xo=new is,$l=new Tt,Mo=null,So=0,Eo=0,bo=!1,fi=(1+Math.sqrt(5))/2,ki=1/fi,Jl=[new F(-fi,ki,0),new F(fi,ki,0),new F(-ki,0,fi),new F(ki,0,fi),new F(0,fi,-ki),new F(0,fi,ki),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,So,Eo),this._renderer.xr.enabled=bo,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ve,format:ln,colorSpace:si,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mp(r)),this._blurMaterial=gp(r,t,e)}return s}_compileMaterial(t){let e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,s){let a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,p=d.toneMapping;d.getClearColor($l),d.toneMapping=vn,d.autoClear=!1;let f=new be({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new gt(new cn,f),_=!1,u=t.background;u?u.isColor&&(f.color.copy(u),t.background=null,_=!0):(f.color.copy($l),_=!0);for(let c=0;c<6;c++){let v=c%3;v===0?(a.up.set(0,l[c],0),a.lookAt(h[c],0,0)):v===1?(a.up.set(0,0,l[c]),a.lookAt(0,h[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,h[c]));let M=this._cubeSize;or(s,v*M,c>2?M:0,M,M),d.setRenderTarget(s),_&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=m,t.background=u}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(s-r-1)%Jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,m=new gt(this._lodPlanes[s],h),p=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mi-1),_=r/g,u=isFinite(r)?1+Math.floor(d*_):mi;u>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${mi}`);let c=[],v=0;for(let R=0;R<mi;++R){let I=R/_,b=Math.exp(-I*I/2);c.push(b),R===0?v+=b:R<u&&(v+=2*b)}for(let R=0;R<c.length;R++)c[R]=c[R]/v;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=c,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;let y=this._sizeLods[s],C=3*y*(s>M-Yi?s-M+Yi:0),w=4*(this._cubeSize-y);or(e,C,w,3*y,2*y),l.setRenderTarget(e),l.render(m,xo)}};function mp(i){let t=[],e=[],n=[],s=i,r=i-Yi+1+Zl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Yi?l=Zl[o-i+Yi-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),d=-h,m=1+h,p=[d,d,m,d,m,m,d,d,m,m,d,m],f=6,g=6,_=3,u=2,c=1,v=new Float32Array(_*g*f),M=new Float32Array(u*g*f),y=new Float32Array(c*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,I=w>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(b,_*g*w),M.set(p,u*g*w);let E=[w,w,w,w,w,w];y.set(E,c*g*w)}let C=new De;C.setAttribute("position",new Le(v,_)),C.setAttribute("uv",new Le(M,u)),C.setAttribute("faceIndex",new Le(y,c)),t.push(C),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){let n=new Se(i,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gp(i,t,e){let n=new Float32Array(mi),s=new F(0,1,0);return new Te({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:el(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ql(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function jl(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function _p(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===Oo||l===zo,d=l===Qi||l===ji;if(h||d){let m=t.get(a),p=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Rr(i)),m=h?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{let f=a.image;return h&&f&&f.height>0||d&&f&&s(f)?(e===null&&(e=new Rr(i)),m=h?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",r),m.texture):null}}}return a}function s(a){let l=0,h=6;for(let d=0;d<h;d++)a[d]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yp(i,t,e,n){let s={},r=new WeakMap;function o(m){let p=m.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let _=p.morphAttributes[g];for(let u=0,c=_.length;u<c;u++)t.remove(_[u])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(m,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(m){let p=m.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let f=m.morphAttributes;for(let g in f){let _=f[g];for(let u=0,c=_.length;u<c;u++)t.update(_[u],i.ARRAY_BUFFER)}}function h(m){let p=[],f=m.index,g=m.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let M=0,y=v.length;M<y;M+=3){let C=v[M+0],w=v[M+1],R=v[M+2];p.push(C,w,w,R,R,C)}}else if(g!==void 0){let v=g.array;_=g.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let C=M+0,w=M+1,R=M+2;p.push(C,w,w,R,R,C)}}else return;let u=new(Hc(p)?Tr:br)(p,1);u.version=_;let c=r.get(m);c&&t.remove(c),r.set(m,u)}function d(m){let p=r.get(m);if(p){let f=m.index;f!==null&&p.version<f.version&&h(m)}else h(m);return r.get(m)}return{get:a,update:l,getWireframeAttribute:d}}function xp(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function h(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),e.update(f,n,g))}function d(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let u=0;for(let c=0;c<g;c++)u+=f[c];e.update(u,n,1)}function m(p,f,g,_){if(g===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let c=0;c<p.length;c++)h(p[c]/o,f[c],_[c]);else{u.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,_,0,g);let c=0;for(let v=0;v<g;v++)c+=f[v]*_[v];e.update(c,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Mp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sp(i,t,e){let n=new WeakMap,s=new ee;function r(o,a,l){let h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0,p=n.get(a);if(p===void 0||p.count!==m){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],c=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*C*4*m),R=new Sr(w,y,C,m);R.type=gn,R.needsUpdate=!0;let I=M*4;for(let E=0;E<m;E++){let A=u[E],H=c[E],B=v[E],k=y*C*4*E;for(let $=0;$<A.count;$++){let W=$*I;f===!0&&(s.fromBufferAttribute(A,$),w[k+W+0]=s.x,w[k+W+1]=s.y,w[k+W+2]=s.z,w[k+W+3]=0),g===!0&&(s.fromBufferAttribute(H,$),w[k+W+4]=s.x,w[k+W+5]=s.y,w[k+W+6]=s.z,w[k+W+7]=0),_===!0&&(s.fromBufferAttribute(B,$),w[k+W+8]=s.x,w[k+W+9]=s.y,w[k+W+10]=s.z,w[k+W+11]=B.itemSize===4?s.w:1)}}p={count:m,texture:R,size:new xt(y,C)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<h.length;_++)f+=h[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Ep(i,t,e,n){let s=new WeakMap;function r(l){let h=n.render.frame,d=l.geometry,m=t.get(l,d);if(s.get(m)!==h&&(t.update(m),s.set(m,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return m}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var ss=class extends He{constructor(t,e,n,s,r,o,a,l,h,d=Zi){if(d!==Zi&&d!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Zi&&(n=Dn),n===void 0&&d===es&&(n=ts),super(null,s,r,o,a,l,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=l!==void 0?l:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wc=new He,tc=new ss(1,1),Xc=new Sr,qc=new va,Yc=new Ar,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Rp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),xe(e,n)}}function Cp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),xe(e,n)}}function Pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),xe(e,n)}}function Ip(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Up(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=zc,r=tc):r=Wc,e.setTexture2D(t||r,s)}function Hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qc,s)}function kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yc,s)}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xc,s)}function Gp(i){switch(i){case 5126:return bp;case 35664:return Tp;case 35665:return wp;case 35666:return Ap;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Ip;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Fp;case 5125:return Up;case 36294:return Np;case 36295:return Bp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Wp(i,t){i.uniform1fv(this.addr,t)}function Xp(i,t){let e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function qp(i,t){let e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Yp(i,t){let e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Zp(i,t){let e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $p(i,t){let e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jp(i,t){let e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kp(i,t){i.uniform1iv(this.addr,t)}function Qp(i,t){i.uniform2iv(this.addr,t)}function jp(i,t){i.uniform3iv(this.addr,t)}function tm(i,t){i.uniform4iv(this.addr,t)}function em(i,t){i.uniform1uiv(this.addr,t)}function nm(i,t){i.uniform2uiv(this.addr,t)}function im(i,t){i.uniform3uiv(this.addr,t)}function sm(i,t){i.uniform4uiv(this.addr,t)}function rm(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wc,r[o])}function om(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qc,r[o])}function am(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yc,r[o])}function lm(i,t,e){let n=this.cache,s=t.length,r=kr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xc,r[o])}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return $p;case 35676:return Jp;case 5124:case 35670:return Kp;case 35667:case 35671:return Qp;case 35668:case 35672:return jp;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return lm}}var Sa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gp(e.type)}},Ea=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cm(e.type)}},ba=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},To=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function hm(i,t,e){let n=i.name,s=n.length;for(To.lastIndex=0;;){let r=To.exec(n),o=To.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){oc(e,h===void 0?new Sa(a,i,t):new Ea(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new ba(a),oc(e,m)),e=m}}}var Ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ac(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var um=37297,dm=0;function fm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var lc=new Dt;function pm(i){Xt._getMatrix(lc,Xt.workingColorSpace,i);let t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fm(i.getShaderSource(t),o)}else return s}function mm(i,t){let e=pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gm(i,t){let e;switch(t){case Vh:e="Linear";break;case Gh:e="Reinhard";break;case Wh:e="Cineon";break;case Xh:e="ACESFilmic";break;case Yh:e="AgX";break;case Zh:e="Neutral";break;case qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ar=new F;function _m(){Xt.getLuminanceCoefficients(ar);let i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function ym(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function hc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Mm,Em)}var Sm=new Map;function Em(i,t){let e=Ut[t];if(e===void 0){let n=Sm.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}var bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(bm,Tm)}function Tm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ya?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Am(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ji:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Cm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case Hh:t="ENVMAP_BLENDING_MIX";break;case kh:t="ENVMAP_BLENDING_ADD";break}return t}function Pm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Im(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=wm(e),h=Am(e),d=Rm(e),m=Cm(e),p=Pm(e),f=vm(e),g=ym(r),_=s.createProgram(),u,c,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),u.length>0&&(u+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),c.length>0&&(c+=`
`)):(u=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),c=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==vn?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,mm("linearToOutputTexel",e.outputColorSpace),_m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Ta(o),o=hc(o,e),o=uc(o,e),a=Ta(a),a=hc(a,e),a=uc(a,e),o=dc(o),a=dc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,c=["#define varying in",e.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);let M=v+u+o,y=v+c+a,C=ac(s,s.VERTEX_SHADER,M),w=ac(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(A){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(C).trim(),k=s.getShaderInfoLog(w).trim(),$=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,w);else{let j=cc(s,C,"vertex"),G=cc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+H+`
`+j+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||k==="")&&(W=!1);W&&(A.diagnostics={runnable:$,programLog:H,vertexShader:{log:B,prefix:u},fragmentShader:{log:k,prefix:c}})}s.deleteShader(C),s.deleteShader(w),I=new Ji(s,_),b=xm(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,um)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}var Lm=0,wa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Aa(t),e.set(t,n)),n}},Aa=class{constructor(t){this.id=Lm++,this.code=t,this.usedTimes=0}};function Dm(i,t,e,n,s,r,o){let a=new Er,l=new wa,h=new Set,d=[],m=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return h.add(b),b===0?"uv":`uv${b}`}function u(b,E,A,H,B){let k=H.fog,$=B.geometry,W=b.isMeshStandardMaterial?H.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),G=j&&j.mapping===zr?j.image.height:null,it=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mt=ct!==void 0?ct.length:0,Nt=0;$.morphAttributes.position!==void 0&&(Nt=1),$.morphAttributes.normal!==void 0&&(Nt=2),$.morphAttributes.color!==void 0&&(Nt=3);let ne,q,tt,_t;if(it){let Qt=fn[it];ne=Qt.vertexShader,q=Qt.fragmentShader}else ne=b.vertexShader,q=b.fragmentShader,l.update(b),tt=l.getVertexShaderID(b),_t=l.getFragmentShaderID(b);let st=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,fe=!!b.map,Gt=!!b.matcap,ge=!!j,U=!!b.aoMap,Ke=!!b.lightMap,zt=!!b.bumpMap,Ht=!!b.normalMap,bt=!!b.displacementMap,ae=!!b.emissiveMap,St=!!b.metalnessMap,T=!!b.roughnessMap,x=b.anisotropy>0,N=b.clearcoat>0,Y=b.dispersion>0,J=b.iridescence>0,X=b.sheen>0,vt=b.transmission>0,rt=x&&!!b.anisotropyMap,ht=N&&!!b.clearcoatMap,Wt=N&&!!b.clearcoatNormalMap,K=N&&!!b.clearcoatRoughnessMap,ut=J&&!!b.iridescenceMap,wt=J&&!!b.iridescenceThicknessMap,Rt=X&&!!b.sheenColorMap,dt=X&&!!b.sheenRoughnessMap,kt=!!b.specularMap,Ft=!!b.specularColorMap,se=!!b.specularIntensityMap,P=vt&&!!b.transmissionMap,nt=vt&&!!b.thicknessMap,V=!!b.gradientMap,Z=!!b.alphaMap,lt=b.alphaTest>0,ot=!!b.alphaHash,It=!!b.extensions,me=vn;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(me=i.toneMapping);let Re={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:q,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:si,alphaToCoverage:!!b.alphaToCoverage,map:fe,matcap:Gt,envMap:ge,envMapMode:ge&&j.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:Ke,bumpMap:zt,normalMap:Ht,displacementMap:p&&bt,emissiveMap:ae,normalMapObjectSpace:Ht&&b.normalMapType===Kh,normalMapTangentSpace:Ht&&b.normalMapType===Oc,metalnessMap:St,roughnessMap:T,anisotropy:x,anisotropyMap:rt,clearcoat:N,clearcoatMap:ht,clearcoatNormalMap:Wt,clearcoatRoughnessMap:K,dispersion:Y,iridescence:J,iridescenceMap:ut,iridescenceThicknessMap:wt,sheen:X,sheenColorMap:Rt,sheenRoughnessMap:dt,specularMap:kt,specularColorMap:Ft,specularIntensityMap:se,transmission:vt,transmissionMap:P,thicknessMap:nt,gradientMap:V,opaque:b.transparent===!1&&b.blending===Kn&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:ot,combine:b.combine,mapUv:fe&&_(b.map.channel),aoMapUv:U&&_(b.aoMap.channel),lightMapUv:Ke&&_(b.lightMap.channel),bumpMapUv:zt&&_(b.bumpMap.channel),normalMapUv:Ht&&_(b.normalMap.channel),displacementMapUv:bt&&_(b.displacementMap.channel),emissiveMapUv:ae&&_(b.emissiveMap.channel),metalnessMapUv:St&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:rt&&_(b.anisotropyMap.channel),clearcoatMapUv:ht&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(b.sheenRoughnessMap.channel),specularMapUv:kt&&_(b.specularMap.channel),specularColorMapUv:Ft&&_(b.specularColorMap.channel),specularIntensityMapUv:se&&_(b.specularIntensityMap.channel),transmissionMapUv:P&&_(b.transmissionMap.channel),thicknessMapUv:nt&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ht||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(fe||Z),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:At,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:fe&&b.map.isVideoTexture===!0&&Xt.getTransfer(b.map.colorSpace)===jt,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(b.emissiveMap.colorSpace)===jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ie,flipSided:b.side===Oe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function c(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)E.push(A),E.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(v(E,b),M(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function M(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let E=g[b.type],A;if(E){let H=fn[E];A=cs.clone(H.uniforms)}else A=b.uniforms;return A}function C(b,E){let A;for(let H=0,B=d.length;H<B;H++){let k=d[H];if(k.cacheKey===E){A=k,++A.usedTimes;break}}return A===void 0&&(A=new Im(i,E,b,r),d.push(A)),A}function w(b){if(--b.usedTimes===0){let E=d.indexOf(b);d[E]=d[d.length-1],d.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:u,getProgramCacheKey:c,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:I}}function Fm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(m,p,f,g,_,u){let c=i[t];return c===void 0?(c={id:m.id,object:m,geometry:p,material:f,groupOrder:g,renderOrder:m.renderOrder,z:_,group:u},i[t]=c):(c.id=m.id,c.object=m,c.geometry=p,c.material=f,c.groupOrder=g,c.renderOrder=m.renderOrder,c.z=_,c.group=u),t++,c}function a(m,p,f,g,_,u){let c=o(m,p,f,g,_,u);f.transmission>0?n.push(c):f.transparent===!0?s.push(c):e.push(c)}function l(m,p,f,g,_,u){let c=o(m,p,f,g,_,u);f.transmission>0?n.unshift(c):f.transparent===!0?s.unshift(c):e.unshift(c)}function h(m,p){e.length>1&&e.sort(m||Um),n.length>1&&n.sort(p||pc),s.length>1&&s.sort(p||pc)}function d(){for(let m=t,p=i.length;m<p;m++){let f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:h}}function Nm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mc,i.set(n,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Tt};break;case"SpotLight":e={position:new F,direction:new F,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Om(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var zm=0;function Hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function km(i){let t=new Bm,e=Om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);let s=new F,r=new oe,o=new oe;function a(h){let d=0,m=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,u=0,c=0,v=0,M=0,y=0,C=0,w=0,R=0;h.sort(Hm);for(let b=0,E=h.length;b<E;b++){let A=h[b],H=A.color,B=A.intensity,k=A.distance,$=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=H.r*B,m+=H.g*B,p+=H.b*B;else if(A.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(A.sh.coefficients[W],B);R++}else if(A.isDirectionalLight){let W=t.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let j=A.shadow,G=e.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=A.shadow.matrix,v++}n.directional[f]=W,f++}else if(A.isSpotLight){let W=t.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(H).multiplyScalar(B),W.distance=k,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,n.spot[_]=W;let j=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,j.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[_]=j.matrix,A.castShadow){let G=e.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,y++}_++}else if(A.isRectAreaLight){let W=t.get(A);W.color.copy(H).multiplyScalar(B),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),n.rectArea[u]=W,u++}else if(A.isPointLight){let W=t.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let j=A.shadow,G=e.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=W,g++}else if(A.isHemisphereLight){let W=t.get(A);W.skyColor.copy(A.color).multiplyScalar(B),W.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[c]=W,c++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==u||I.hemiLength!==c||I.numDirectionalShadows!==v||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==C||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=u,n.point.length=g,n.hemi.length=c,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=u,I.hemiLength=c,I.numDirectionalShadows=v,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=C,I.numLightProbes=R,n.version=zm++)}function l(h,d){let m=0,p=0,f=0,g=0,_=0,u=d.matrixWorldInverse;for(let c=0,v=h.length;c<v;c++){let M=h[c];if(M.isDirectionalLight){let y=n.directional[m];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),m++}else if(M.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),f++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(u),o.identity(),r.copy(M.matrixWorld),r.premultiply(u),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(u),_++}}}return{setup:a,setupView:l,state:n}}function gc(i){let t=new km(i),e=[],n=[];function s(d){h.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new gc(i),t.set(s,[a])):r>=o.length?(a=new gc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ii=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ra=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(i,t,e){let n=new Is,s=new xt,r=new xt,o=new ee,a=new ii({depthPacking:ls}),l=new Ra,h={},d=e.maxTextureSize,m={[jn]:Oe,[Oe]:jn,[ie]:ie},p=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Gm,fragmentShader:Wm}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new De;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let c=this.type;this.render=function(w,R,I){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),H=i.state;H.setBlending(_n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let B=c!==Rn&&this.type===Rn,k=c===Rn&&this.type!==Rn;for(let $=0,W=w.length;$<W;$++){let j=w[$],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||B===!0||k===!0){let Mt=this.type!==Rn?{minFilter:Je,magFilter:Je}:{};G.map!==null&&G.map.dispose(),G.map=new Se(s.x,s.y,Mt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ct=G.getViewportCount();for(let Mt=0;Mt<ct;Mt++){let Nt=G.getViewport(Mt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),H.viewport(o),G.updateMatrices(j,Mt),n=G.getFrustum(),y(R,I,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Rn&&v(G,I),G.needsUpdate=!1}c=this.type,u.needsUpdate=!1,i.setRenderTarget(b,E,A)};function v(w,R){let I=t.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Se(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,I,p,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function M(w,R,I,b){let E=null,A=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)E=A;else if(E=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=E.uuid,B=R.uuid,k=h[H];k===void 0&&(k={},h[H]=k);let $=k[B];$===void 0&&($=E.clone(),k[B]=$,R.addEventListener("dispose",C)),E=$}if(E.visible=R.visible,E.wireframe=R.wireframe,b===Rn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:m[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let H=i.properties.get(E);H.light=I}return E}function y(w,R,I,b,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let B=t.update(w),k=w.material;if(Array.isArray(k)){let $=B.groups;for(let W=0,j=$.length;W<j;W++){let G=$[W],it=k[G.materialIndex];if(it&&it.visible){let ct=M(w,it,b,E);w.onBeforeShadow(i,w,R,I,B,ct,G),i.renderBufferDirect(I,null,B,ct,w,G),w.onAfterShadow(i,w,R,I,B,ct,G)}}}else if(k.visible){let $=M(w,k,b,E);w.onBeforeShadow(i,w,R,I,B,$,null),i.renderBufferDirect(I,null,B,$,w,null),w.onAfterShadow(i,w,R,I,B,$,null)}}let H=w.children;for(let B=0,k=H.length;B<k;B++)y(H[B],R,I,b,E)}function C(w){w.target.removeEventListener("dispose",C);for(let I in h){let b=h[I],E=w.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var qm={[Io]:Lo,[Do]:No,[Fo]:Bo,[Ki]:Uo,[Lo]:Io,[No]:Do,[Bo]:Fo,[Uo]:Ki};function Ym(i,t){function e(){let P=!1,nt=new ee,V=null,Z=new ee(0,0,0,0);return{setMask:function(lt){V!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),V=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ot,It,me,Re){Re===!0&&(lt*=me,ot*=me,It*=me),nt.set(lt,ot,It,me),Z.equals(nt)===!1&&(i.clearColor(lt,ot,It,me),Z.copy(nt))},reset:function(){P=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let P=!1,nt=!1,V=null,Z=null,lt=null;return{setReversed:function(ot){if(nt!==ot){let It=t.get("EXT_clip_control");nt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);let me=lt;lt=null,this.setClear(me)}nt=ot},getReversed:function(){return nt},setTest:function(ot){ot?st(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!P&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(nt&&(ot=qm[ot]),Z!==ot){switch(ot){case Io:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Do:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Uo:i.depthFunc(i.GEQUAL);break;case No:i.depthFunc(i.GREATER);break;case Bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ot}},setLocked:function(ot){P=ot},setClear:function(ot){lt!==ot&&(nt&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){P=!1,V=null,Z=null,lt=null,nt=!1}}}function s(){let P=!1,nt=null,V=null,Z=null,lt=null,ot=null,It=null,me=null,Re=null;return{setTest:function(Qt){P||(Qt?st(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Qt){nt!==Qt&&!P&&(i.stencilMask(Qt),nt=Qt)},setFunc:function(Qt,nn,Mn){(V!==Qt||Z!==nn||lt!==Mn)&&(i.stencilFunc(Qt,nn,Mn),V=Qt,Z=nn,lt=Mn)},setOp:function(Qt,nn,Mn){(ot!==Qt||It!==nn||me!==Mn)&&(i.stencilOp(Qt,nn,Mn),ot=Qt,It=nn,me=Mn)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Re!==Qt&&(i.clearStencil(Qt),Re=Qt)},reset:function(){P=!1,nt=null,V=null,Z=null,lt=null,ot=null,It=null,me=null,Re=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap,d={},m={},p=new WeakMap,f=[],g=null,_=!1,u=null,c=null,v=null,M=null,y=null,C=null,w=null,R=new Tt(0,0,0),I=0,b=!1,E=null,A=null,H=null,B=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,j=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=j>=2);let it=null,ct={},Mt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),ne=new ee().fromArray(Mt),q=new ee().fromArray(Nt);function tt(P,nt,V,Z){let lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<V;It++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(nt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}let _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Ki),zt(!1),Ht(xl),st(i.CULL_FACE),U(_n);function st(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function At(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function Pt(P,nt){return m[P]!==nt?(i.bindFramebuffer(P,nt),m[P]=nt,P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=nt),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Bt(P,nt){let V=f,Z=!1;if(P){V=p.get(nt),V===void 0&&(V=[],p.set(nt,V));let lt=P.textures;if(V.length!==lt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,It=lt.length;ot<It;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=lt.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function fe(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let Gt={[pi]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};Gt[Th]=i.MIN,Gt[wh]=i.MAX;let ge={[Ah]:i.ZERO,[Rh]:i.ONE,[Ch]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[Uh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Lh]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(P,nt,V,Z,lt,ot,It,me,Re,Qt){if(P===_n){_===!0&&(At(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),P!==Sh){if(P!==u||Qt!==b){if((c!==pi||y!==pi)&&(i.blendEquation(i.FUNC_ADD),c=pi,y=pi),Qt)switch(P){case Kn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFunc(i.ONE,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,M=null,C=null,w=null,R.set(0,0,0),I=0,u=P,b=Qt}return}lt=lt||nt,ot=ot||V,It=It||Z,(nt!==c||lt!==y)&&(i.blendEquationSeparate(Gt[nt],Gt[lt]),c=nt,y=lt),(V!==v||Z!==M||ot!==C||It!==w)&&(i.blendFuncSeparate(ge[V],ge[Z],ge[ot],ge[It]),v=V,M=Z,C=ot,w=It),(me.equals(R)===!1||Re!==I)&&(i.blendColor(me.r,me.g,me.b,Re),R.copy(me),I=Re),u=P,b=!1}function Ke(P,nt){P.side===ie?At(i.CULL_FACE):st(i.CULL_FACE);let V=P.side===Oe;nt&&(V=!V),zt(V),P.blending===Kn&&P.transparent===!1?U(_n):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let Z=P.stencilWrite;a.setTest(Z),Z&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ae(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){E!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),E=P)}function Ht(P){P!==xh?(st(i.CULL_FACE),P!==A&&(P===xl?i.cullFace(i.BACK):P===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),A=P}function bt(P){P!==H&&(W&&i.lineWidth(P),H=P)}function ae(P,nt,V){P?(st(i.POLYGON_OFFSET_FILL),(B!==nt||k!==V)&&(i.polygonOffset(nt,V),B=nt,k=V)):At(i.POLYGON_OFFSET_FILL)}function St(P){P?st(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+$-1),it!==P&&(i.activeTexture(P),it=P)}function x(P,nt,V){V===void 0&&(it===null?V=i.TEXTURE0+$-1:V=it);let Z=ct[V];Z===void 0&&(Z={type:void 0,texture:void 0},ct[V]=Z),(Z.type!==P||Z.texture!==nt)&&(it!==V&&(i.activeTexture(V),it=V),i.bindTexture(P,nt||_t[P]),Z.type=P,Z.texture=nt)}function N(){let P=ct[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(P){ne.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function dt(P){q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function kt(P,nt){let V=h.get(nt);V===void 0&&(V=new WeakMap,h.set(nt,V));let Z=V.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(nt,P.name),V.set(P,Z))}function Ft(P,nt){let Z=h.get(nt).get(P);l.get(nt)!==Z&&(i.uniformBlockBinding(nt,Z,P.__bindingPointIndex),l.set(nt,Z))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,ct={},m={},p=new WeakMap,f=[],g=null,_=!1,u=null,c=null,v=null,M=null,y=null,C=null,w=null,R=new Tt(0,0,0),I=0,b=!1,E=null,A=null,H=null,B=null,k=null,ne.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:At,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:fe,setBlending:U,setMaterial:Ke,setFlipSided:zt,setCullFace:Ht,setLineWidth:bt,setPolygonOffset:ae,setScissorTest:St,activeTexture:T,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:ut,texImage3D:wt,updateUBOMapping:kt,uniformBlockBinding:Ft,texStorage2D:Wt,texStorage3D:K,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Rt,viewport:dt,reset:se}}function _c(i,t,e,n){let s=Zm(n);switch(e){case Lc:return i*t;case Fc:return i*t;case Uc:return i*t*2;case Ka:return i*t/s.components*s.byteLength;case Qa:return i*t/s.components*s.byteLength;case Nc:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case Dc:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case tl:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Wo:return Math.max(i,16)*Math.max(t,8)/4;case ko:case Go:return Math.max(i,8)*Math.max(t,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ua:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zm(i){switch(i){case Ln:case Cc:return{byteLength:1,components:1};case Ps:case Pc:case Ve:return{byteLength:2,components:1};case $a:case Ja:return{byteLength:2,components:4};case Dn:case Za:case gn:return{byteLength:4,components:1};case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function $m(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new xt,d=new WeakMap,m,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):xr("canvas")}function _(T,x,N){let Y=1,J=St(T);if((J.width>N||J.height>N)&&(Y=N/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let X=Math.floor(Y*J.width),vt=Math.floor(Y*J.height);m===void 0&&(m=g(X,vt));let rt=x?g(X,vt):m;return rt.width=X,rt.height=vt,rt.getContext("2d").drawImage(T,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+vt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function u(T){return T.generateMipmaps}function c(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,x,N,Y,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),x===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),x===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){let vt=J?Hr:Xt.getTransfer(Y);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=vt===jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function y(T,x){let N;return T?x===null||x===Dn||x===ts?N=i.DEPTH24_STENCIL8:x===gn?N=i.DEPTH32F_STENCIL8:x===Ps&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Dn||x===ts?N=i.DEPTH_COMPONENT24:x===gn?N=i.DEPTH_COMPONENT32F:x===Ps&&(N=i.DEPTH_COMPONENT16),N}function C(T,x){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){let x=T.target;x.removeEventListener("dispose",w),I(x),x.isVideoTexture&&d.delete(x)}function R(T){let x=T.target;x.removeEventListener("dispose",R),E(x)}function I(T){let x=n.get(T);if(x.__webglInit===void 0)return;let N=T.source,Y=p.get(N);if(Y){let J=Y[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(Y).length===0&&p.delete(N)}n.remove(T)}function b(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let N=T.source,Y=p.get(N);delete Y[x.__cacheKey],o.memory.textures--}function E(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let J=0;J<x.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=T.textures;for(let Y=0,J=N.length;Y<J;Y++){let X=n.get(N[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(T)}let A=0;function H(){A=0}function B(){let T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function k(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function $(T,x){let N=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,T,x);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function W(T,x){let N=n.get(T);if(T.version>0&&N.__version!==T.version){q(N,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function j(T,x){let N=n.get(T);if(T.version>0&&N.__version!==T.version){q(N,T,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function G(T,x){let N=n.get(T);if(T.version>0&&N.__version!==T.version){tt(N,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let it={[ze]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},ct={[Je]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},Mt={[Qh]:i.NEVER,[su]:i.ALWAYS,[jh]:i.LESS,[zc]:i.LEQUAL,[tu]:i.EQUAL,[iu]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function Nt(T,x){if(x.type===gn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===mn||x.magFilter===$r||x.magFilter===ks||x.magFilter===_i||x.minFilter===mn||x.minFilter===$r||x.minFilter===ks||x.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Je||x.minFilter!==ks&&x.minFilter!==_i||x.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(T,x){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));let Y=x.source,J=p.get(Y);J===void 0&&(J={},p.set(Y,J));let X=k(x);if(X!==T.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[X].usedTimes++;let vt=J[T.__cacheKey];vt!==void 0&&(J[T.__cacheKey].usedTimes--,vt.usedTimes===0&&b(x)),T.__cacheKey=X,T.__webglTexture=J[X].texture}return N}function q(T,x,N){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);let J=ne(T,x),X=x.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+N);let vt=n.get(X);if(X.version!==vt.__version||J===!0){e.activeTexture(i.TEXTURE0+N);let rt=Xt.getPrimaries(Xt.workingColorSpace),ht=x.colorSpace===$n?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===$n||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let K=_(x.image,!1,s.maxTextureSize);K=ae(x,K);let ut=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),Rt=M(x.internalFormat,ut,wt,x.colorSpace,x.isVideoTexture);Nt(Y,x);let dt,kt=x.mipmaps,Ft=x.isVideoTexture!==!0,se=vt.__version===void 0||J===!0,P=X.dataReady,nt=C(x,K);if(x.isDepthTexture)Rt=y(x.format===es,x.type),se&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Rt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Rt,K.width,K.height,0,ut,wt,null));else if(x.isDataTexture)if(kt.length>0){Ft&&se&&e.texStorage2D(i.TEXTURE_2D,nt,Rt,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)dt=kt[V],Ft?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,V,Rt,dt.width,dt.height,0,ut,wt,dt.data);x.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(i.TEXTURE_2D,nt,Rt,K.width,K.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,ut,wt,K.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,K.width,K.height,0,ut,wt,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Rt,kt[0].width,kt[0].height,K.depth);for(let V=0,Z=kt.length;V<Z;V++)if(dt=kt[V],x.format!==ln)if(ut!==null)if(Ft){if(P)if(x.layerUpdates.size>0){let lt=_c(dt.width,dt.height,x.format,x.type);for(let ot of x.layerUpdates){let It=dt.data.subarray(ot*lt/dt.data.BYTES_PER_ELEMENT,(ot+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,dt.width,dt.height,1,ut,It)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,K.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Rt,dt.width,dt.height,K.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,dt.width,dt.height,K.depth,ut,wt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Rt,dt.width,dt.height,K.depth,0,ut,wt,dt.data)}else{Ft&&se&&e.texStorage2D(i.TEXTURE_2D,nt,Rt,kt[0].width,kt[0].height);for(let V=0,Z=kt.length;V<Z;V++)dt=kt[V],x.format!==ln?ut!==null?Ft?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Rt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,dt.width,dt.height,ut,wt,dt.data):e.texImage2D(i.TEXTURE_2D,V,Rt,dt.width,dt.height,0,ut,wt,dt.data)}else if(x.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,Rt,K.width,K.height,K.depth),P)if(x.layerUpdates.size>0){let V=_c(K.width,K.height,x.format,x.type);for(let Z of x.layerUpdates){let lt=K.data.subarray(Z*V/K.data.BYTES_PER_ELEMENT,(Z+1)*V/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,K.width,K.height,1,ut,wt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,wt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,K.width,K.height,K.depth,0,ut,wt,K.data);else if(x.isData3DTexture)Ft?(se&&e.texStorage3D(i.TEXTURE_3D,nt,Rt,K.width,K.height,K.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,wt,K.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,K.width,K.height,K.depth,0,ut,wt,K.data);else if(x.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(i.TEXTURE_2D,nt,Rt,K.width,K.height);else{let V=K.width,Z=K.height;for(let lt=0;lt<nt;lt++)e.texImage2D(i.TEXTURE_2D,lt,Rt,V,Z,0,ut,wt,null),V>>=1,Z>>=1}}else if(kt.length>0){if(Ft&&se){let V=St(kt[0]);e.texStorage2D(i.TEXTURE_2D,nt,Rt,V.width,V.height)}for(let V=0,Z=kt.length;V<Z;V++)dt=kt[V],Ft?P&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ut,wt,dt):e.texImage2D(i.TEXTURE_2D,V,Rt,ut,wt,dt);x.generateMipmaps=!1}else if(Ft){if(se){let V=St(K);e.texStorage2D(i.TEXTURE_2D,nt,Rt,V.width,V.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,wt,K)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ut,wt,K);u(x)&&c(Y),vt.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function tt(T,x,N){if(x.image.length!==6)return;let Y=ne(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);let X=n.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);let vt=Xt.getPrimaries(Xt.workingColorSpace),rt=x.colorSpace===$n?null:Xt.getPrimaries(x.colorSpace),ht=x.colorSpace===$n||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,K=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!Wt&&!K?ut[Z]=_(x.image[Z],!0,s.maxCubemapSize):ut[Z]=K?x.image[Z].image:x.image[Z],ut[Z]=ae(x,ut[Z]);let wt=ut[0],Rt=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),kt=M(x.internalFormat,Rt,dt,x.colorSpace),Ft=x.isVideoTexture!==!0,se=X.__version===void 0||Y===!0,P=J.dataReady,nt=C(x,wt);Nt(i.TEXTURE_CUBE_MAP,x);let V;if(Wt){Ft&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,kt,wt.width,wt.height);for(let Z=0;Z<6;Z++){V=ut[Z].mipmaps;for(let lt=0;lt<V.length;lt++){let ot=V[lt];x.format!==ln?Rt!==null?Ft?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,Rt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ot.width,ot.height,Rt,dt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,kt,ot.width,ot.height,0,Rt,dt,ot.data)}}}else{if(V=x.mipmaps,Ft&&se){V.length>0&&nt++;let Z=St(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(K){Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,Rt,dt,ut[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,ut[Z].width,ut[Z].height,0,Rt,dt,ut[Z].data);for(let lt=0;lt<V.length;lt++){let It=V[lt].image[Z].image;Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,It.width,It.height,Rt,dt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,kt,It.width,It.height,0,Rt,dt,It.data)}}else{Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Rt,dt,ut[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,Rt,dt,ut[Z]);for(let lt=0;lt<V.length;lt++){let ot=V[lt];Ft?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Rt,dt,ot.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,kt,Rt,dt,ot.image[Z])}}}u(x)&&c(i.TEXTURE_CUBE_MAP),X.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,N,Y,J,X){let vt=r.convert(N.format,N.colorSpace),rt=r.convert(N.type),ht=M(N.internalFormat,vt,rt,N.colorSpace),Wt=n.get(x),K=n.get(N);if(K.__renderTarget=x,!Wt.__hasExternalTextures){let ut=Math.max(1,x.width>>X),wt=Math.max(1,x.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,X,ht,ut,wt,x.depth,0,vt,rt,null):e.texImage2D(J,X,ht,ut,wt,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ht(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,K.__webglTexture,0,zt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,K.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(T,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let Y=x.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=y(x.stencilBuffer,J),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=zt(x);Ht(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,T)}else{let Y=x.textures;for(let J=0;J<Y.length;J++){let X=Y[J],vt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ht=M(X.internalFormat,vt,rt,X.colorSpace),Wt=zt(x);N&&Ht(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ht,x.width,x.height):Ht(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);let J=Y.__webglTexture,X=zt(x);if(x.depthTexture.format===Zi)Ht(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===es)Ht(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(T){let x=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,T)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(x.__webglDepthbuffer[Y],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(T,x,N){let Y=n.get(T);x!==void 0&&_t(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(T)}function fe(T){let x=T.texture,N=n.get(T),Y=n.get(x);T.addEventListener("dispose",R);let J=T.textures,X=T.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else N.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)N.__webglFramebuffer[rt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,ht=J.length;rt<ht;rt++){let Wt=n.get(J[rt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ht(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){let ht=J[rt];N.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[rt]);let Wt=r.convert(ht.format,ht.colorSpace),K=r.convert(ht.type),ut=M(ht.internalFormat,Wt,K,ht.colorSpace,T.isXRRenderTarget===!0),wt=zt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ut,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,N.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),st(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)_t(N.__webglFramebuffer[rt][ht],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else _t(N.__webglFramebuffer[rt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);u(x)&&c(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ht=J.length;rt<ht;rt++){let Wt=J[rt],K=n.get(Wt);e.bindTexture(i.TEXTURE_2D,K.__webglTexture),Nt(i.TEXTURE_2D,Wt),_t(N.__webglFramebuffer,T,Wt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),u(Wt)&&c(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Nt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)_t(N.__webglFramebuffer[ht],T,x,i.COLOR_ATTACHMENT0,rt,ht);else _t(N.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,rt,0);u(x)&&c(rt),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Gt(T){let x=T.textures;for(let N=0,Y=x.length;N<Y;N++){let J=x[N];if(u(J)){let X=v(T),vt=n.get(J).__webglTexture;e.bindTexture(X,vt),c(X),e.unbindTexture()}}}let ge=[],U=[];function Ke(T){if(T.samples>0){if(Ht(T)===!1){let x=T.textures,N=T.width,Y=T.height,J=i.COLOR_BUFFER_BIT,X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(T),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let Wt=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,J,i.NEAREST),l===!0&&(ge.length=0,U.length=0,ge.push(i.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ge.push(X),U.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);let Wt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function zt(T){return Math.min(s.maxSamples,T.samples)}function Ht(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(T){let x=o.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function ae(T,x){let N=T.colorSpace,Y=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==si&&N!==$n&&(Xt.getTransfer(N)===jt?(Y!==ln||J!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ht}function Jm(i,t){function e(n,s=$n){let r,o=Xt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Ve)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Dc)return i.RGB;if(n===ln)return i.RGBA;if(n===Fc)return i.LUMINANCE;if(n===Uc)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Ka)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Nc)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Vo||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zo||n===$o||n===Jo||n===Ko||n===Qo||n===jo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===ha||n===ua||n===da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ca=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let _ of t.hand.values()){let u=e.getJointPose(_,n),c=this._getHandJoint(h,_);u!==null&&(c.matrix.fromArray(u.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=u.radius),c.visible=u!==null}let d=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],p=d.position.distanceTo(m.position),f=.02,g=.005;h.inputState.pinching&&p>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jm=`
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

}`,Pa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Te({vertexShader:Qm,fragmentShader:jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ia=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,d=null,m=null,p=null,f=null,g=null,_=new Pa,u=e.getContextAttributes(),c=null,v=null,M=[],y=[],C=new xt,w=null,R=new Ie;R.viewport=new ee;let I=new Ie;I.viewport=new ee;let b=[R,I],E=new Ca,A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=M[q];return tt===void 0&&(tt=new Cs,M[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=M[q];return tt===void 0&&(tt=new Cs,M[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=M[q];return tt===void 0&&(tt=new Cs,M[q]=tt),tt.getHandSpace()};function B(q){let tt=y.indexOf(q.inputSource);if(tt===-1)return;let _t=M[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,h||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",$);for(let q=0;q<M.length;q++){let tt=y[q];tt!==null&&(y[q]=null,M[q].disconnect(tt))}A=null,H=null,_.reset(),t.setRenderTarget(c),f=null,p=null,m=null,s=null,v=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(c=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",$),u.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let tt={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Se(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let tt=null,_t=null,st=null;u.depth&&(st=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=u.stencil?es:Zi,_t=u.stencil?ts:Dn);let At={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};m=new XRWebGLBinding(s,e),p=m.createProjectionLayer(At),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new Se(p.textureWidth,p.textureHeight,{format:ln,type:Ln,depthTexture:new ss(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let tt=0;tt<q.removed.length;tt++){let _t=q.removed[tt],st=y.indexOf(_t);st>=0&&(y[st]=null,M[st].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){let _t=q.added[tt],st=y.indexOf(_t);if(st===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=y.length){y.push(_t),st=Pt;break}else if(y[Pt]===null){y[Pt]=_t,st=Pt;break}if(st===-1)break}let At=M[st];At&&At.connect(_t)}}let W=new F,j=new F;function G(q,tt,_t){W.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let st=W.distanceTo(j),At=tt.projectionMatrix.elements,Pt=_t.projectionMatrix.elements,Bt=At[14]/(At[10]-1),fe=At[14]/(At[10]+1),Gt=(At[9]+1)/At[5],ge=(At[9]-1)/At[5],U=(At[8]-1)/At[0],Ke=(Pt[8]+1)/Pt[0],zt=Bt*U,Ht=Bt*Ke,bt=st/(-U+Ke),ae=bt*-U;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let St=Bt+bt,T=fe+bt,x=zt-ae,N=Ht+(st-ae),Y=Gt*fe/T*St,J=ge*fe/T*St;q.projectionMatrix.makePerspective(x,N,Y,J,St,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,_t=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),E.near=I.near=R.near=tt,E.far=I.far=R.far=_t,(A!==E.near||H!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,H=E.far),R.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,E.layers.mask=R.layers.mask|I.layers.mask;let st=q.parent,At=E.cameras;it(E,st);for(let Pt=0;Pt<At.length;Pt++)it(At[Pt],st);At.length===2?G(E,R,I):E.projectionMatrix.copy(R.projectionMatrix),ct(q,E,st)};function ct(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ma*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let Mt=null;function Nt(q,tt){if(d=tt.getViewerPose(h||o),g=tt,d!==null){let _t=d.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let st=!1;_t.length!==E.cameras.length&&(E.cameras.length=0,st=!0);for(let Pt=0;Pt<_t.length;Pt++){let Bt=_t[Pt],fe=null;if(f!==null)fe=f.getViewport(Bt);else{let ge=m.getViewSubImage(p,Bt);fe=ge.viewport,Pt===0&&(t.setRenderTargetTextures(v,ge.colorTexture,p.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(v))}let Gt=b[Pt];Gt===void 0&&(Gt=new Ie,Gt.layers.enable(Pt),Gt.viewport=new ee,b[Pt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(fe.x,fe.y,fe.width,fe.height),Pt===0&&(E.matrix.copy(Gt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),st===!0&&E.cameras.push(Gt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let Pt=m.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let _t=0;_t<M.length;_t++){let st=y[_t],At=M[_t];st!==null&&At!==void 0&&At.update(st,tt,h||o)}Mt&&Mt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ne=new Gc;ne.setAnimationLoop(Nt),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}},di=new yn,t0=new oe;function e0(i,t){function e(u,c){u.matrixAutoUpdate===!0&&u.updateMatrix(),c.value.copy(u.matrix)}function n(u,c){c.color.getRGB(u.fogColor.value,Vc(i)),c.isFog?(u.fogNear.value=c.near,u.fogFar.value=c.far):c.isFogExp2&&(u.fogDensity.value=c.density)}function s(u,c,v,M,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(u,c):c.isMeshToonMaterial?(r(u,c),m(u,c)):c.isMeshPhongMaterial?(r(u,c),d(u,c)):c.isMeshStandardMaterial?(r(u,c),p(u,c),c.isMeshPhysicalMaterial&&f(u,c,y)):c.isMeshMatcapMaterial?(r(u,c),g(u,c)):c.isMeshDepthMaterial?r(u,c):c.isMeshDistanceMaterial?(r(u,c),_(u,c)):c.isMeshNormalMaterial?r(u,c):c.isLineBasicMaterial?(o(u,c),c.isLineDashedMaterial&&a(u,c)):c.isPointsMaterial?l(u,c,v,M):c.isSpriteMaterial?h(u,c):c.isShadowMaterial?(u.color.value.copy(c.color),u.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(u,c){u.opacity.value=c.opacity,c.color&&u.diffuse.value.copy(c.color),c.emissive&&u.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(u.map.value=c.map,e(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,e(c.alphaMap,u.alphaMapTransform)),c.bumpMap&&(u.bumpMap.value=c.bumpMap,e(c.bumpMap,u.bumpMapTransform),u.bumpScale.value=c.bumpScale,c.side===Oe&&(u.bumpScale.value*=-1)),c.normalMap&&(u.normalMap.value=c.normalMap,e(c.normalMap,u.normalMapTransform),u.normalScale.value.copy(c.normalScale),c.side===Oe&&u.normalScale.value.negate()),c.displacementMap&&(u.displacementMap.value=c.displacementMap,e(c.displacementMap,u.displacementMapTransform),u.displacementScale.value=c.displacementScale,u.displacementBias.value=c.displacementBias),c.emissiveMap&&(u.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,u.emissiveMapTransform)),c.specularMap&&(u.specularMap.value=c.specularMap,e(c.specularMap,u.specularMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest);let v=t.get(c),M=v.envMap,y=v.envMapRotation;M&&(u.envMap.value=M,di.copy(y),di.x*=-1,di.y*=-1,di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(di)),u.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=c.reflectivity,u.ior.value=c.ior,u.refractionRatio.value=c.refractionRatio),c.lightMap&&(u.lightMap.value=c.lightMap,u.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,u.lightMapTransform)),c.aoMap&&(u.aoMap.value=c.aoMap,u.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,u.aoMapTransform))}function o(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,c.map&&(u.map.value=c.map,e(c.map,u.mapTransform))}function a(u,c){u.dashSize.value=c.dashSize,u.totalSize.value=c.dashSize+c.gapSize,u.scale.value=c.scale}function l(u,c,v,M){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.size.value=c.size*v,u.scale.value=M*.5,c.map&&(u.map.value=c.map,e(c.map,u.uvTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,e(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function h(u,c){u.diffuse.value.copy(c.color),u.opacity.value=c.opacity,u.rotation.value=c.rotation,c.map&&(u.map.value=c.map,e(c.map,u.mapTransform)),c.alphaMap&&(u.alphaMap.value=c.alphaMap,e(c.alphaMap,u.alphaMapTransform)),c.alphaTest>0&&(u.alphaTest.value=c.alphaTest)}function d(u,c){u.specular.value.copy(c.specular),u.shininess.value=Math.max(c.shininess,1e-4)}function m(u,c){c.gradientMap&&(u.gradientMap.value=c.gradientMap)}function p(u,c){u.metalness.value=c.metalness,c.metalnessMap&&(u.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,u.metalnessMapTransform)),u.roughness.value=c.roughness,c.roughnessMap&&(u.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,u.roughnessMapTransform)),c.envMap&&(u.envMapIntensity.value=c.envMapIntensity)}function f(u,c,v){u.ior.value=c.ior,c.sheen>0&&(u.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),u.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(u.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,u.sheenColorMapTransform)),c.sheenRoughnessMap&&(u.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,u.sheenRoughnessMapTransform))),c.clearcoat>0&&(u.clearcoat.value=c.clearcoat,u.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(u.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,u.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(u.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Oe&&u.clearcoatNormalScale.value.negate())),c.dispersion>0&&(u.dispersion.value=c.dispersion),c.iridescence>0&&(u.iridescence.value=c.iridescence,u.iridescenceIOR.value=c.iridescenceIOR,u.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(u.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,u.iridescenceMapTransform)),c.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),c.transmission>0&&(u.transmission.value=c.transmission,u.transmissionSamplerMap.value=v.texture,u.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(u.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,u.transmissionMapTransform)),u.thickness.value=c.thickness,c.thicknessMap&&(u.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=c.attenuationDistance,u.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(u.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(u.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=c.specularIntensity,u.specularColor.value.copy(c.specularColor),c.specularColorMap&&(u.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,u.specularColorMapTransform)),c.specularIntensityMap&&(u.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,c){c.matcap&&(u.matcap.value=c.matcap)}function _(u,c){let v=t.get(c).light;u.referencePosition.value.setFromMatrixPosition(v.matrixWorld),u.nearDistance.value=v.shadow.camera.near,u.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let y=M.program;n.uniformBlockBinding(v,y)}function h(v,M){let y=s[v.id];y===void 0&&(g(v),y=d(v),s[v.id]=y,v.addEventListener("dispose",u));let C=M.program;n.updateUBOMapping(v,C);let w=t.render.frame;r[v.id]!==w&&(p(v),r[v.id]=w)}function d(v){let M=m();v.__bindingPointIndex=M;let y=i.createBuffer(),C=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function m(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let M=s[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,R=y.length;w<R;w++){let I=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,E=I.length;b<E;b++){let A=I[b];if(f(A,w,b,C)===!0){let H=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],k=0;for(let $=0;$<B.length;$++){let W=B[$],j=_(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+k,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,y,C){let w=v.value,R=M+"_"+y;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{let I=C[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){let M=v.uniforms,y=0,C=16;for(let R=0,I=M.length;R<I;R++){let b=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,A=b.length;E<A;E++){let H=b[E],B=Array.isArray(H.value)?H.value:[H.value];for(let k=0,$=B.length;k<$;k++){let W=B[k],j=_(W),G=y%C,it=G%j.boundary,ct=G+it;y+=it,ct!==0&&C-ct<j.storage&&(y+=C-ct),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=j.storage}}}let w=y%C;return w>0&&(y+=C-w),v.__size=y,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function u(v){let M=v.target;M.removeEventListener("dispose",u);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function c(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:h,dispose:c}}var Cr=class{constructor(t={}){let{canvas:e=ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),u=null,c=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this.toneMapping=vn,this.toneMappingExposure=1;let y=this,C=!1,w=0,R=0,I=null,b=-1,E=null,A=new ee,H=new ee,B=null,k=new Tt(0),$=0,W=e.width,j=e.height,G=1,it=null,ct=null,Mt=new ee(0,0,W,j),Nt=new ee(0,0,W,j),ne=!1,q=new Is,tt=!1,_t=!1,st=new oe,At=new oe,Pt=new F,Bt=new ee,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function ge(){return I===null?G:1}let U=n;function Ke(S,L){return e.getContext(S,L)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){let L="webgl2";if(U=Ke(L,S),U===null)throw Ke(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let zt,Ht,bt,ae,St,T,x,N,Y,J,X,vt,rt,ht,Wt,K,ut,wt,Rt,dt,kt,Ft,se,P;function nt(){zt=new vp(U),zt.init(),Ft=new Jm(U,zt),Ht=new dp(U,zt,t,Ft),bt=new Ym(U,zt),Ht.reverseDepthBuffer&&p&&bt.buffers.depth.setReversed(!0),ae=new Mp(U),St=new Fm,T=new $m(U,zt,bt,St,Ht,Ft,ae),x=new pp(y),N=new _p(y),Y=new Au(U),se=new hp(U,Y),J=new yp(U,Y,ae,se),X=new Ep(U,J,Y,ae),Rt=new Sp(U,Ht,T),K=new fp(St),vt=new Dm(y,x,N,zt,Ht,se,K),rt=new e0(y,St),ht=new Nm,Wt=new Vm(zt),wt=new cp(y,x,N,bt,X,f,l),ut=new Xm(y,X,Ht),P=new n0(U,ae,Ht,bt),dt=new up(U,zt,ae),kt=new xp(U,zt,ae),ae.programs=vt.programs,y.capabilities=Ht,y.extensions=zt,y.properties=St,y.renderLists=ht,y.shadowMap=ut,y.state=bt,y.info=ae}nt();let V=new Ia(y,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(W,j,!1))},this.getSize=function(S){return S.set(W,j)},this.setSize=function(S,L,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,j=L,e.width=Math.floor(S*G),e.height=Math.floor(L*G),O===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(W*G,j*G).floor()},this.setDrawingBufferSize=function(S,L,O){W=S,j=L,G=O,e.width=Math.floor(S*O),e.height=Math.floor(L*O),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(Mt)},this.setViewport=function(S,L,O,z){S.isVector4?Mt.set(S.x,S.y,S.z,S.w):Mt.set(S,L,O,z),bt.viewport(A.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Nt)},this.setScissor=function(S,L,O,z){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,L,O,z),bt.scissor(H.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){bt.setScissorTest(ne=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(S=!0,L=!0,O=!0){let z=0;if(S){let D=!1;if(I!==null){let Q=I.texture.format;D=Q===tl||Q===ja||Q===Qa}if(D){let Q=I.texture.type,at=Q===Ln||Q===Dn||Q===Ps||Q===ts||Q===$a||Q===Ja,ft=wt.getClearColor(),pt=wt.getClearAlpha(),Ct=ft.r,Lt=ft.g,mt=ft.b;at?(g[0]=Ct,g[1]=Lt,g[2]=mt,g[3]=pt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ct,_[1]=Lt,_[2]=mt,_[3]=pt,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT),O&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),Wt.dispose(),St.dispose(),x.dispose(),N.dispose(),X.dispose(),se.dispose(),P.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",dl),V.removeEventListener("sessionend",fl),oi.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=ae.autoReset,L=ut.enabled,O=ut.autoUpdate,z=ut.needsUpdate,D=ut.type;nt(),ae.autoReset=S,ut.enabled=L,ut.autoUpdate=O,ut.needsUpdate=z,ut.type=D}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){let L=S.target;L.removeEventListener("dispose",It),me(L)}function me(S){Re(S),St.remove(S)}function Re(S){let L=St.get(S).programs;L!==void 0&&(L.forEach(function(O){vt.releaseProgram(O)}),S.isShaderMaterial&&vt.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,O,z,D,Q){L===null&&(L=fe);let at=D.isMesh&&D.matrixWorld.determinant()<0,ft=_h(S,L,O,z,D);bt.setMaterial(z,at);let pt=O.index,Ct=1;if(z.wireframe===!0){if(pt=J.getWireframeAttribute(O),pt===void 0)return;Ct=2}let Lt=O.drawRange,mt=O.attributes.position,qt=Lt.start*Ct,re=(Lt.start+Lt.count)*Ct;Q!==null&&(qt=Math.max(qt,Q.start*Ct),re=Math.min(re,(Q.start+Q.count)*Ct)),pt!==null?(qt=Math.max(qt,0),re=Math.min(re,pt.count)):mt!=null&&(qt=Math.max(qt,0),re=Math.min(re,mt.count));let le=re-qt;if(le<0||le===1/0)return;se.setup(D,z,ft,O,pt);let Ne,$t=dt;if(pt!==null&&(Ne=Y.get(pt),$t=kt,$t.setIndex(Ne)),D.isMesh)z.wireframe===!0?(bt.setLineWidth(z.wireframeLinewidth*ge()),$t.setMode(U.LINES)):$t.setMode(U.TRIANGLES);else if(D.isLine){let yt=z.linewidth;yt===void 0&&(yt=1),bt.setLineWidth(yt*ge()),D.isLineSegments?$t.setMode(U.LINES):D.isLineLoop?$t.setMode(U.LINE_LOOP):$t.setMode(U.LINE_STRIP)}else D.isPoints?$t.setMode(U.POINTS):D.isSprite&&$t.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$t.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))$t.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let yt=D._multiDrawStarts,Sn=D._multiDrawCounts,Jt=D._multiDrawCount,sn=pt?Y.get(pt).bytesPerElement:1,Ai=St.get(z).currentProgram.getUniforms();for(let Ye=0;Ye<Jt;Ye++)Ai.setValue(U,"_gl_DrawID",Ye),$t.render(yt[Ye]/sn,Sn[Ye])}else if(D.isInstancedMesh)$t.renderInstances(qt,le,D.count);else if(O.isInstancedBufferGeometry){let yt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Sn=Math.min(O.instanceCount,yt);$t.renderInstances(qt,le,Sn)}else $t.render(qt,le)};function Qt(S,L,O){S.transparent===!0&&S.side===ie&&S.forceSinglePass===!1?(S.side=Oe,S.needsUpdate=!0,Hs(S,L,O),S.side=jn,S.needsUpdate=!0,Hs(S,L,O),S.side=ie):Hs(S,L,O)}this.compile=function(S,L,O=null){O===null&&(O=S),c=Wt.get(O),c.init(L),M.push(c),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(c.pushLight(D),D.castShadow&&c.pushShadow(D))}),S!==O&&S.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(c.pushLight(D),D.castShadow&&c.pushShadow(D))}),c.setupLights();let z=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let Q=D.material;if(Q)if(Array.isArray(Q))for(let at=0;at<Q.length;at++){let ft=Q[at];Qt(ft,O,D),z.add(ft)}else Qt(Q,O,D),z.add(Q)}),M.pop(),c=null,z},this.compileAsync=function(S,L,O=null){let z=this.compile(S,L,O);return new Promise(D=>{function Q(){if(z.forEach(function(at){St.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){D(S);return}setTimeout(Q,10)}zt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let nn=null;function Mn(S){nn&&nn(S)}function dl(){oi.stop()}function fl(){oi.start()}let oi=new Gc;oi.setAnimationLoop(Mn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(S){nn=S,V.setAnimationLoop(S),S===null?oi.stop():oi.start()},V.addEventListener("sessionstart",dl),V.addEventListener("sessionend",fl),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(L),L=V.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,L,I),c=Wt.get(S,M.length),c.init(L),M.push(c),At.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(At),_t=this.localClippingEnabled,tt=K.init(this.clippingPlanes,_t),u=ht.get(S,v.length),u.init(),v.push(u),V.enabled===!0&&V.isPresenting===!0){let Q=y.xr.getDepthSensingMesh();Q!==null&&Zr(Q,L,-1/0,y.sortObjects)}Zr(S,L,0,y.sortObjects),u.finish(),y.sortObjects===!0&&u.sort(it,ct),Gt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Gt&&wt.addToRenderList(u,S),this.info.render.frame++,tt===!0&&K.beginShadows();let O=c.state.shadowsArray;ut.render(O,S,L),tt===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=u.opaque,D=u.transmissive;if(c.setupLights(),L.isArrayCamera){let Q=L.cameras;if(D.length>0)for(let at=0,ft=Q.length;at<ft;at++){let pt=Q[at];ml(z,D,S,pt)}Gt&&wt.render(S);for(let at=0,ft=Q.length;at<ft;at++){let pt=Q[at];pl(u,S,pt,pt.viewport)}}else D.length>0&&ml(z,D,S,L),Gt&&wt.render(S),pl(u,S,L);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(y,S,L),se.resetDefaultState(),b=-1,E=null,M.pop(),M.length>0?(c=M[M.length-1],tt===!0&&K.setGlobalState(y.clippingPlanes,c.state.camera)):c=null,v.pop(),v.length>0?u=v[v.length-1]:u=null};function Zr(S,L,O,z){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)c.pushLight(S),S.castShadow&&c.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){z&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);let at=X.update(S),ft=S.material;ft.visible&&u.push(S,at,ft,O,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let at=X.update(S),ft=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Bt.copy(at.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(ft)){let pt=at.groups;for(let Ct=0,Lt=pt.length;Ct<Lt;Ct++){let mt=pt[Ct],qt=ft[mt.materialIndex];qt&&qt.visible&&u.push(S,at,qt,O,Bt.z,mt)}}else ft.visible&&u.push(S,at,ft,O,Bt.z,null)}}let Q=S.children;for(let at=0,ft=Q.length;at<ft;at++)Zr(Q[at],L,O,z)}function pl(S,L,O,z){let D=S.opaque,Q=S.transmissive,at=S.transparent;c.setupLightsView(O),tt===!0&&K.setGlobalState(y.clippingPlanes,O),z&&bt.viewport(A.copy(z)),D.length>0&&zs(D,L,O),Q.length>0&&zs(Q,L,O),at.length>0&&zs(at,L,O),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ml(S,L,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[z.id]===void 0&&(c.state.transmissionRenderTarget[z.id]=new Se(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ve:Ln,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let Q=c.state.transmissionRenderTarget[z.id],at=z.viewport||A;Q.setSize(at.z,at.w);let ft=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(k),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Gt&&wt.render(O);let pt=y.toneMapping;y.toneMapping=vn;let Ct=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),c.setupLightsView(z),tt===!0&&K.setGlobalState(y.clippingPlanes,z),zs(S,O,z),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let mt=0,qt=L.length;mt<qt;mt++){let re=L[mt],le=re.object,Ne=re.geometry,$t=re.material,yt=re.group;if($t.side===ie&&le.layers.test(z.layers)){let Sn=$t.side;$t.side=Oe,$t.needsUpdate=!0,gl(le,O,z,Ne,$t,yt),$t.side=Sn,$t.needsUpdate=!0,Lt=!0}}Lt===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}y.setRenderTarget(ft),y.setClearColor(k,$),Ct!==void 0&&(z.viewport=Ct),y.toneMapping=pt}function zs(S,L,O){let z=L.isScene===!0?L.overrideMaterial:null;for(let D=0,Q=S.length;D<Q;D++){let at=S[D],ft=at.object,pt=at.geometry,Ct=z===null?at.material:z,Lt=at.group;ft.layers.test(O.layers)&&gl(ft,L,O,pt,Ct,Lt)}}function gl(S,L,O,z,D,Q){S.onBeforeRender(y,L,O,z,D,Q),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(y,L,O,z,S,Q),D.transparent===!0&&D.side===ie&&D.forceSinglePass===!1?(D.side=Oe,D.needsUpdate=!0,y.renderBufferDirect(O,L,z,D,S,Q),D.side=jn,D.needsUpdate=!0,y.renderBufferDirect(O,L,z,D,S,Q),D.side=ie):y.renderBufferDirect(O,L,z,D,S,Q),S.onAfterRender(y,L,O,z,D,Q)}function Hs(S,L,O){L.isScene!==!0&&(L=fe);let z=St.get(S),D=c.state.lights,Q=c.state.shadowsArray,at=D.state.version,ft=vt.getParameters(S,D.state,Q,L,O),pt=vt.getProgramCacheKey(ft),Ct=z.programs;z.environment=S.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",It),Ct=new Map,z.programs=Ct);let Lt=Ct.get(pt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===at)return vl(S,ft),Lt}else ft.uniforms=vt.getUniforms(S),S.onBeforeCompile(ft,y),Lt=vt.acquireProgram(ft,pt),Ct.set(pt,Lt),z.uniforms=ft.uniforms;let mt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(mt.clippingPlanes=K.uniform),vl(S,ft),z.needsLights=yh(S),z.lightsStateVersion=at,z.needsLights&&(mt.ambientLightColor.value=D.state.ambient,mt.lightProbe.value=D.state.probe,mt.directionalLights.value=D.state.directional,mt.directionalLightShadows.value=D.state.directionalShadow,mt.spotLights.value=D.state.spot,mt.spotLightShadows.value=D.state.spotShadow,mt.rectAreaLights.value=D.state.rectArea,mt.ltc_1.value=D.state.rectAreaLTC1,mt.ltc_2.value=D.state.rectAreaLTC2,mt.pointLights.value=D.state.point,mt.pointLightShadows.value=D.state.pointShadow,mt.hemisphereLights.value=D.state.hemi,mt.directionalShadowMap.value=D.state.directionalShadowMap,mt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,mt.spotShadowMap.value=D.state.spotShadowMap,mt.spotLightMatrix.value=D.state.spotLightMatrix,mt.spotLightMap.value=D.state.spotLightMap,mt.pointShadowMap.value=D.state.pointShadowMap,mt.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function _l(S){if(S.uniformsList===null){let L=S.currentProgram.getUniforms();S.uniformsList=Ji.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function vl(S,L){let O=St.get(S);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function _h(S,L,O,z,D){L.isScene!==!0&&(L=fe),T.resetTextureUnits();let Q=L.fog,at=z.isMeshStandardMaterial?L.environment:null,ft=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:si,pt=(z.isMeshStandardMaterial?N:x).get(z.envMap||at),Ct=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Lt=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),mt=!!O.morphAttributes.position,qt=!!O.morphAttributes.normal,re=!!O.morphAttributes.color,le=vn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(le=y.toneMapping);let Ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$t=Ne!==void 0?Ne.length:0,yt=St.get(z),Sn=c.state.lights;if(tt===!0&&(_t===!0||S!==E)){let Qe=S===E&&z.id===b;K.setState(z,S,Qe)}let Jt=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Sn.state.version||yt.outputColorSpace!==ft||D.isBatchedMesh&&yt.batching===!1||!D.isBatchedMesh&&yt.batching===!0||D.isBatchedMesh&&yt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&yt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&yt.instancing===!1||!D.isInstancedMesh&&yt.instancing===!0||D.isSkinnedMesh&&yt.skinning===!1||!D.isSkinnedMesh&&yt.skinning===!0||D.isInstancedMesh&&yt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&yt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&yt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&yt.instancingMorph===!1&&D.morphTexture!==null||yt.envMap!==pt||z.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==K.numPlanes||yt.numIntersection!==K.numIntersection)||yt.vertexAlphas!==Ct||yt.vertexTangents!==Lt||yt.morphTargets!==mt||yt.morphNormals!==qt||yt.morphColors!==re||yt.toneMapping!==le||yt.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,yt.__version=z.version);let sn=yt.currentProgram;Jt===!0&&(sn=Hs(z,L,D));let Ai=!1,Ye=!1,ms=!1,ce=sn.getUniforms(),dn=yt.uniforms;if(bt.useProgram(sn.program)&&(Ai=!0,Ye=!0,ms=!0),z.id!==b&&(b=z.id,Ye=!0),Ai||E!==S){bt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),lu(st),cu(st),ce.setValue(U,"projectionMatrix",st)):ce.setValue(U,"projectionMatrix",S.projectionMatrix),ce.setValue(U,"viewMatrix",S.matrixWorldInverse);let kn=ce.map.cameraPosition;kn!==void 0&&kn.setValue(U,Pt.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Ye=!0,ms=!0)}if(D.isSkinnedMesh){ce.setOptional(U,D,"bindMatrix"),ce.setOptional(U,D,"bindMatrixInverse");let Qe=D.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ce.setValue(U,"boneTexture",Qe.boneTexture,T))}D.isBatchedMesh&&(ce.setOptional(U,D,"batchingTexture"),ce.setValue(U,"batchingTexture",D._matricesTexture,T),ce.setOptional(U,D,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",D._indirectTexture,T),ce.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",D._colorsTexture,T));let gs=O.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&Rt.update(D,O,sn),(Ye||yt.receiveShadow!==D.receiveShadow)&&(yt.receiveShadow=D.receiveShadow,ce.setValue(U,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(dn.envMap.value=pt,dn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(dn.envMapIntensity.value=L.environmentIntensity),Ye&&(ce.setValue(U,"toneMappingExposure",y.toneMappingExposure),yt.needsLights&&vh(dn,ms),Q&&z.fog===!0&&rt.refreshFogUniforms(dn,Q),rt.refreshMaterialUniforms(dn,z,G,j,c.state.transmissionRenderTarget[S.id]),Ji.upload(U,_l(yt),dn,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ji.upload(U,_l(yt),dn,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(U,"center",D.center),ce.setValue(U,"modelViewMatrix",D.modelViewMatrix),ce.setValue(U,"normalMatrix",D.normalMatrix),ce.setValue(U,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Qe=z.uniformsGroups;for(let kn=0,Vn=Qe.length;kn<Vn;kn++){let yl=Qe[kn];P.update(yl,sn),P.bind(yl,sn)}}return sn}function vh(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function yh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,L,O){St.get(S.texture).__webglTexture=L,St.get(S.depthTexture).__webglTexture=O;let z=St.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){let O=St.get(S);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,O=0){I=S,w=L,R=O;let z=!0,D=null,Q=!1,at=!1;if(S){let pt=St.get(S);if(pt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(pt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(pt.__hasExternalTextures)T.rebindTextures(S,St.get(S.texture).__webglTexture,St.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let mt=S.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&St.has(mt)&&(S.width!==mt.image.width||S.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(at=!0);let Lt=St.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[L])?D=Lt[L][O]:D=Lt[L],Q=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?D=St.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?D=Lt[O]:D=Lt,A.copy(S.viewport),H.copy(S.scissor),B=S.scissorTest}else A.copy(Mt).multiplyScalar(G).floor(),H.copy(Nt).multiplyScalar(G).floor(),B=ne;if(bt.bindFramebuffer(U.FRAMEBUFFER,D)&&z&&bt.drawBuffers(S,D),bt.viewport(A),bt.scissor(H),bt.setScissorTest(B),Q){let pt=St.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,pt.__webglTexture,O)}else if(at){let pt=St.get(S.texture),Ct=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,pt.__webglTexture,O||0,Ct)}b=-1},this.readRenderTargetPixels=function(S,L,O,z,D,Q,at){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){bt.bindFramebuffer(U.FRAMEBUFFER,ft);try{let pt=S.texture,Ct=pt.format,Lt=pt.type;if(!Ht.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-z&&O>=0&&O<=S.height-D&&U.readPixels(L,O,z,D,Ft.convert(Ct),Ft.convert(Lt),Q)}finally{let pt=I!==null?St.get(I).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(S,L,O,z,D,Q,at){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=St.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){let pt=S.texture,Ct=pt.format,Lt=pt.type;if(!Ht.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-z&&O>=0&&O<=S.height-D){bt.bindFramebuffer(U.FRAMEBUFFER,ft);let mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(L,O,z,D,Ft.convert(Ct),Ft.convert(Lt),0);let qt=I!==null?St.get(I).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,qt);let re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await au(U,re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(mt),U.deleteSync(re),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,O=0){S.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);let z=Math.pow(2,-O),D=Math.floor(S.image.width*z),Q=Math.floor(S.image.height*z),at=L!==null?L.x:0,ft=L!==null?L.y:0;T.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,at,ft,D,Q),bt.unbindTexture()},this.copyTextureToTexture=function(S,L,O=null,z=null,D=0){S.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],L=arguments[2],D=arguments[3]||0,O=null);let Q,at,ft,pt,Ct,Lt,mt,qt,re,le=S.isCompressedTexture?S.mipmaps[D]:S.image;O!==null?(Q=O.max.x-O.min.x,at=O.max.y-O.min.y,ft=O.isBox3?O.max.z-O.min.z:1,pt=O.min.x,Ct=O.min.y,Lt=O.isBox3?O.min.z:0):(Q=le.width,at=le.height,ft=le.depth||1,pt=0,Ct=0,Lt=0),z!==null?(mt=z.x,qt=z.y,re=z.z):(mt=0,qt=0,re=0);let Ne=Ft.convert(L.format),$t=Ft.convert(L.type),yt;L.isData3DTexture?(T.setTexture3D(L,0),yt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),yt=U.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let Sn=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ai=U.getParameter(U.UNPACK_SKIP_ROWS),Ye=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ct),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lt);let ms=S.isDataArrayTexture||S.isData3DTexture,ce=L.isDataArrayTexture||L.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let dn=St.get(S),gs=St.get(L),Qe=St.get(dn.__renderTarget),kn=St.get(gs.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,Qe.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Vn=0;Vn<ft;Vn++)ms&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(S).__webglTexture,D,Lt+Vn),S.isDepthTexture?(ce&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.get(L).__webglTexture,D,re+Vn),U.blitFramebuffer(pt,Ct,Q,at,mt,qt,Q,at,U.DEPTH_BUFFER_BIT,U.NEAREST)):ce?U.copyTexSubImage3D(yt,D,mt,qt,re+Vn,pt,Ct,Q,at):U.copyTexSubImage2D(yt,D,mt,qt,re+Vn,pt,Ct,Q,at);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ce?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(yt,D,mt,qt,re,Q,at,ft,Ne,$t,le.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,D,mt,qt,re,Q,at,ft,Ne,le.data):U.texSubImage3D(yt,D,mt,qt,re,Q,at,ft,Ne,$t,le):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,mt,qt,Q,at,Ne,$t,le.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,mt,qt,le.width,le.height,Ne,le.data):U.texSubImage2D(U.TEXTURE_2D,D,mt,qt,Q,at,Ne,$t,le);U.pixelStorei(U.UNPACK_ROW_LENGTH,Sn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ai),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye),D===0&&L.generateMipmaps&&U.generateMipmap(yt),bt.unbindTexture()},this.copyTextureToTexture3D=function(S,L,O=null,z=null,D=0){return S.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,S=arguments[2],L=arguments[3],D=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,O,z,D)},this.initRenderTarget=function(S){St.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,bt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}},Un=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Pr=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},La=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pa,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fe=new F,Ir=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rs=class extends ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vi,Ms=new F,Gi=new F,Wi=new F,Xi=new xt,Ss=new xt,Zc=new oe,lr=new F,Es=new F,cr=new F,vc=new xt,wo=new xt,yc=new xt,Ls=class extends Ee{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new La(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Ir(n,3,0,!1)),Vi.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Zc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;hr(lr.set(-.5,-.5,0),Wi,o,Gi,s,r),hr(Es.set(.5,-.5,0),Wi,o,Gi,s,r),hr(cr.set(.5,.5,0),Wi,o,Gi,s,r),vc.set(0,0),wo.set(1,0),yc.set(1,1);let a=t.ray.intersectTriangle(lr,Es,cr,!1,Ms);if(a===null&&(hr(Es.set(-.5,.5,0),Wi,o,Gi,s,r),wo.set(0,1),a=t.ray.intersectTriangle(lr,cr,Es,!1,Ms),a===null))return;let l=t.ray.origin.distanceTo(Ms);l<t.near||l>t.far||e.push({distance:l,point:Ms.clone(),uv:Jn.getInterpolation(Ms,lr,Es,cr,vc,wo,yc,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function hr(i,t,e,n,s,r){Xi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ss.x=r*Xi.x-s*Xi.y,Ss.y=s*Xi.x+r*Xi.y):Ss.copy(Xi),i.copy(t),i.x+=Ss.x,i.y+=Ss.y,i.applyMatrix4(Zc)}var Da=class extends He{constructor(t=null,e=1,n=1,s,r,o,a,l,h=Je,d=Je,m,p){super(null,o,a,l,h,d,s,r,m,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lr=class extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qi=new oe,xc=new oe,ur=[],Mc=new Fn,i0=new oe,bs=new gt,Ts=new vi,Dr=class extends gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Mc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(Mc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Ts.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),t.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),xc.multiplyMatrices(n,qi),bs.matrixWorld=xc,bs.raycast(t,ur);for(let o=0,a=ur.length;o<a;o++){let l=ur[o];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Da(new Float32Array(s*this.count),s,this.count,Ka,gn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yi=class extends He{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ds=class i extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new F,d=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let m=0,p=3;m<=e;m++,p+=3){let f=n+m/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),d.x=(o[p]/t+1)/2,d.y=(o[p+1]/t+1)/2,l.push(d.x,d.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ke=class i extends De{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],m=[],p=[],f=[],g=0,_=[],u=n/2,c=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new de(m,3)),this.setAttribute("normal",new de(p,3)),this.setAttribute("uv",new de(f,2));function v(){let y=new F,C=new F,w=0,R=(e-t)/n;for(let I=0;I<=r;I++){let b=[],E=I/r,A=E*(e-t)+t;for(let H=0;H<=s;H++){let B=H/s,k=B*l+a,$=Math.sin(k),W=Math.cos(k);C.x=A*$,C.y=-E*n+u,C.z=A*W,m.push(C.x,C.y,C.z),y.set($,R,W).normalize(),p.push(y.x,y.y,y.z),f.push(B,1-E),b.push(g++)}_.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let E=_[b][I],A=_[b+1][I],H=_[b+1][I+1],B=_[b][I+1];(t>0||b!==0)&&(d.push(E,A,B),w+=3),(e>0||b!==r-1)&&(d.push(A,H,B),w+=3)}h.addGroup(c,w,0),c+=w}function M(y){let C=g,w=new xt,R=new F,I=0,b=y===!0?t:e,E=y===!0?1:-1;for(let H=1;H<=s;H++)m.push(0,u*E,0),p.push(0,E,0),f.push(.5,.5),g++;let A=g;for(let H=0;H<=s;H++){let k=H/s*l+a,$=Math.cos(k),W=Math.sin(k);R.x=b*W,R.y=u*E,R.z=b*$,m.push(R.x,R.y,R.z),p.push(0,E,0),w.x=$*.5+.5,w.y=W*.5*E+.5,f.push(w.x,w.y),g++}for(let H=0;H<s;H++){let B=C+H,k=A+H;y===!0?d.push(k,k+1,B):d.push(k+1,k,B),I+=3}h.addGroup(c,I,y===!0?1:2),c+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class i extends ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var os=class i extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,d=[],m=new F,p=new F,f=[],g=[],_=[],u=[];for(let c=0;c<=n;c++){let v=[],M=c/n,y=0;c===0&&o===0?y=.5/e:c===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){let w=C/e;m.x=-t*Math.cos(s+w*r)*Math.sin(o+M*a),m.y=t*Math.cos(o+M*a),m.z=t*Math.sin(s+w*r)*Math.sin(o+M*a),g.push(m.x,m.y,m.z),p.copy(m).normalize(),_.push(p.x,p.y,p.z),u.push(w+y,1-M),v.push(h++)}d.push(v)}for(let c=0;c<n;c++)for(let v=0;v<e;v++){let M=d[c][v+1],y=d[c][v],C=d[c+1][v],w=d[c+1][v+1];(c!==0||o>0)&&f.push(M,y,w),(c!==n-1||l<Math.PI)&&f.push(y,C,w)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fs=class i extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],h=[],d=new F,m=new F,p=new F;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,u=f/n*Math.PI*2;m.x=(t+e*Math.cos(u))*Math.cos(_),m.y=(t+e*Math.cos(u))*Math.sin(_),m.z=e*Math.sin(u),a.push(m.x,m.y,m.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),p.subVectors(m,d).normalize(),l.push(p.x,p.y,p.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,u=(s+1)*(f-1)+g-1,c=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(_,u,v),o.push(u,c,v)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Kt=class extends ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function s0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fa=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bl:r=t,a=2*e-n;break;case Tl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bl:o=t,l=2*n-e;break;case Tl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,d=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,u=_*g,c=-p*u+2*p*_-p*g,v=(1+p)*u+(-1.5-2*p)*_+(-.5+p)*g+1,M=(-1-f)*u+(1.5+f)*_+.5*g,y=f*u-f*_;for(let C=0;C!==a;++C)r[C]=c*o[d+C]+v*o[h+C]+M*o[l+C]+y*o[m+C];return r}},Ua=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,d=(n-e)/(s-e),m=1-d;for(let p=0;p!==a;++p)r[p]=o[h+p]*m+o[l+p]*d;return r}},Na=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case fa:e=this.InterpolantFactoryMethodLinear;break;case Jr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&s0(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],d=t[a+1];if(h!==d&&(a!==1||h!==t[0]))if(s)l=!0;else{let m=a*n,p=m-n,f=m+n;for(let g=0;g!==n;++g){let _=e[m+g];if(_!==e[p+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let m=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[m+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=fa;var xi=class extends hn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=vr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends hn{};Ba.prototype.ValueTypeName="color";var Oa=class extends hn{};Oa.prototype.ValueTypeName="number";var za=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let d=h+a;h!==d;h+=4)ei.slerpFlat(r,0,o,h-a,o,h,l);return r}},Ur=class extends hn{InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends hn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=vr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends hn{};Ha.prototype.ValueTypeName="vector";var ka=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,m){return h.push(d,m),this},this.removeHandler=function(d){let m=h.indexOf(d);return m!==-1&&h.splice(m,2),this},this.getHandler=function(d){for(let m=0,p=h.length;m<p;m+=2){let f=h[m],g=h[m+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}},r0=new ka,Va=class{constructor(t){this.manager=t!==void 0?t:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Nn=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ao=new oe,Sc=new F,Ec=new F,Nr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var bc=new oe,ws=new F,Ro=new F,Ga=class extends Nr{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(ws),Ro.copy(n.position),Ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ro),n.updateMatrixWorld(),s.makeTranslation(-ws.x,-ws.y,-ws.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}},Bn=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ga}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Wa=class extends Nr{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Wa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Or=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Tc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Tc(){return 0}var nl="\\[\\]\\.:\\/",o0=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",a0="[^"+nl.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",il),c0=/(WCOD+)?/.source.replace("WCOD",a0),h0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),u0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),d0=new RegExp("^"+l0+c0+h0+u0+"$"),f0=["material","materials","bones","map"],Xa=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(t){let e=d0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);f0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Xa;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);var Vr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},p0=new is(-1,1,1,-1,0,1),sl=class extends De{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}},m0=new sl,ds=class{constructor(t){this._mesh=new gt(m0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,p0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Si=class extends On{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cs.clone(t.uniforms),this.material=new Te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ds(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ns=class extends On{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Gr=class extends On{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Wr=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ve}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Si(Vr),this.copyPass.material.blending=_n,this.clock=new Or}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ns!==void 0&&(o instanceof Ns?n=!0:o instanceof Gr&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $c={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fs=class i extends On{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(r,o,{type:Ve}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){let p=new Se(r,o,{type:Ve});p.texture.name="UnrealBloomPass.h"+m,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new Se(r,o,{type:Ve});f.texture.name="UnrealBloomPass.v"+m,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=$c;this.highPassUniforms=cs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new xt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let d=Vr;this.copyUniforms=cs.clone(d.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new ds(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Te({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};fs.BlurDirectionX=new xt(1,0);fs.BlurDirectionY=new xt(0,1);var Ei=1080,bi=1920;function Ae(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Bs=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Et=(i,t,e)=>i+(t-i)*e,Ge=(i,t,e)=>{let n=Bs((e-i)/(t-i));return n*n*(3-2*n)};var g0={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new xt(Ei,bi)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},_0={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new Tt(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1080.,1920.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Xr=class{constructor(t){let e=this.r=new Cr({canvas:t,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(1),e.setSize(Ei,bi,!1),e.shadowMap.enabled=!0,e.shadowMap.type=Ya,e.toneMapping=vn,e.outputColorSpace=si;let n=new ss(Ei,bi);n.type=Dn,this.rt=new Se(Ei,bi,{type:Ve,samples:4,depthTexture:n}),this.composer=new Wr(e,new Se(Ei,bi,{type:Ve})),this.dof=new Si(g0,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=n,this.bloom=new fs(new xt(Ei/2,bi/2),.45,.75,.82),this.grade=new Si(_0),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(t){this.shots.push(t)}render(t){let e=this.shots.find(o=>t>=o.t0&&t<o.t1)||this.shots[this.shots.length-1];e.update(t,t-e.t0,this);let n=e.update(t,t-e.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=e.camera.near,s.far.value=e.camera.far,s.focus.value=n.focus??6,s.range.value=n.range??3,s.maxBlur.value=n.blur??20,this.bloom.strength=n.bloom??.45,this.bloom.threshold=n.bloomT??.82,this.bloom.radius=n.bloomR??.75,r.vig.value=n.vig??.42,r.exposure.value=n.exposure??1,r.sat.value=n.sat??1,r.flash.value=n.flash??0,r.frame.value=Math.floor(t*30)%97,r.tint.value.set(n.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(e.scene,e.camera),this.r.setRenderTarget(null),this.composer.render()}};function Ti(i,t,e,n=40){let s=new Pr;s.background=new Tt(e);let r=new Ie(n,Ei/bi,.08,400);return{t0:i,t1:t,scene:s,camera:r,update(){return{}}}}function ri(i,t,e,n=0){i.position.set(t[0],t[1],t[2]),i.up.set(Math.sin(n),Math.cos(n),0),i.lookAt(e[0],e[1],e[2])}var Xe=1/420,rl=new Map;function qe(i,t,e,n){if(rl.has(i))return rl.get(i);let s=document.createElement("canvas");s.width=t*2,s.height=e*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",n(r,t,e);let o=new yi(s);return o.colorSpace=ve,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,rl.set(i,o),o}var Zt=i=>new Path2D(i);function we(i,t,e){i.save(),i.fillStyle=e,i.fill(t),i.restore()}function un(i,t,e,n,s,...r){let o=i.createLinearGradient(t,e,n,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var v0={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function y0(i,t){return qe("torso_"+t,300,320,e=>{if(e.translate(150,20),i.kind==="hoodie"){let n=Zt("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");we(e,n,un(e,-100,0,100,260,i.a,i.b)),e.fillStyle=i.c,e.globalAlpha=.3,e.fill(Zt("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),e.globalAlpha=1,e.fillStyle=i.b,e.fill(Zt("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),e.fillStyle=i.c,e.fill(Zt("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),e.strokeStyle="#F4F4EE",e.lineWidth=5,e.beginPath(),e.moveTo(-18,66),e.lineTo(-20,126),e.moveTo(18,66),e.lineTo(20,126),e.stroke(),e.fillStyle="#F4F4EE",e.beginPath(),e.arc(-20,130,4.5,0,7),e.arc(20,130,4.5,0,7),e.fill(),e.fillStyle=i.b,e.strokeStyle=i.c,e.lineWidth=3.5;let s=Zt("M-62 164 L62 164 L78 240 L-78 240Z");e.fill(s),e.stroke(s),e.fillStyle=i.c,e.fillRect(-104,240,208,24),e.strokeStyle=i.b,e.lineWidth=2.5;for(let r=-100;r<104;r+=10)e.beginPath(),e.moveTo(r,242),e.lineTo(r,263),e.stroke()}else if(i.kind==="suit"){we(e,Zt("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),un(e,-100,0,100,280,i.a,i.b)),e.strokeStyle="#ffffff10",e.lineWidth=2;for(let n=-92;n<96;n+=13)e.beginPath(),e.moveTo(n,30),e.lineTo(n,280),e.stroke();e.fillStyle="#F4F2EA",e.fill(Zt("M-34 6 L34 6 L10 138 L-10 138Z")),e.fillStyle="#39AE9F",e.fill(Zt("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),e.strokeStyle="#8FDCCF",e.lineWidth=2;for(let n=0;n<4;n++)e.beginPath(),e.moveTo(-10,52+n*20),e.lineTo(10,44+n*20),e.stroke();e.fillStyle=i.c,e.fill(Zt("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),e.fill(Zt("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),e.fillStyle="#39AE9F",e.fill(Zt("M-70 86 L-34 86 L-46 70 L-58 70Z")),e.fillStyle="#0d0f14",e.beginPath(),e.arc(0,176,7,0,7),e.arc(0,216,7,0,7),e.fill()}else if(i.kind==="coat")we(e,Zt("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),un(e,-100,0,100,290,i.a,i.b)),e.fillStyle="#39AE9F",e.fill(Zt("M-30 6 L30 6 L12 118 L-12 118Z")),e.fillStyle="#20273a",e.fillRect(-13,16,26,100),e.fillStyle=i.c,e.fill(Zt("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),e.fill(Zt("M30 6 L54 24 L30 78 L6 128 L12 134Z")),e.strokeStyle=i.c,e.lineWidth=3,e.beginPath(),e.moveTo(0,130),e.lineTo(0,292),e.stroke(),e.strokeRect(-76,188,54,46),e.strokeRect(22,188,54,46),e.fillStyle="#3F6FB0",e.fillRect(44,182,5,26),e.fillStyle="#C9361F",e.fillRect(56,182,5,22);else if(i.kind==="dress"){we(e,Zt("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),un(e,-60,0,60,120,i.a,i.b)),we(e,Zt("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),un(e,-100,120,100,300,i.a,i.b)),e.fillStyle=i.belt,e.fillRect(-58,104,116,20);let n=7,s=()=>(n=n*16807%2147483647)/2147483647;e.fillStyle=i.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let h=0;h<5;h++)e.beginPath(),e.arc(l+Math.cos(h*1.256)*5,o+Math.sin(h*1.256)*5,3.2,0,7),e.fill()}}else we(e,Zt("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),un(e,-70,0,70,200,i.a,i.b)),e.fillStyle="#0a0a12",e.fill(Zt("M-22 26 L22 26 L0 64Z")),we(e,Zt("M-68 196 L68 196 L74 276 L-74 276Z"),i.pants||"#555",null),e.fillStyle=i.belt||i.c,e.fillRect(-70,192,140,12)})}function Jc(i,t,e){return qe("sl_"+t+e,90,170,n=>{if(n.translate(45,10),i.kind==="dress"||i.kind==="blouse"){e==="u"?(we(n,Zt("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),un(n,-26,0,26,50,i.a,i.b)),n.fillStyle="#17161e",n.fillRect(-7,48,14,100)):(we(n,Zt("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",i.kind?"#FFE9C8":null,3),n.fillStyle="#3a3a48",n.fillRect(-2,0,3,130));return}let s=134,r=e==="u"?27:23,o=e==="u"?23:18;we(n,Zt(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),un(n,-r,0,r,0,i.a,i.b)),n.fillStyle=i.s,n.globalAlpha=.5,n.fill(Zt(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),n.globalAlpha=1,e==="f"&&(n.fillStyle=i.cuff,n.fill(Zt(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function x0(){return qe("hand",90,100,i=>{i.translate(45,14);let t=Zt("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");we(i,t,un(i,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),i.strokeStyle="#4a4a58",i.lineWidth=2,i.beginPath(),i.moveTo(-12,18),i.quadraticCurveTo(0,8,12,16),i.stroke()})}function Kc(i){return qe("leg"+i,50,160,t=>{t.translate(25,6),t.fillStyle="#191922",t.beginPath(),t.roundRect(-9,-6,18,158,9),t.fill(),t.fillStyle="#46465a",t.fillRect(-2.5,2,3,140)})}function M0(){return qe("foot",80,40,i=>{i.translate(26,6),we(i,Zt("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),i.fillStyle="#E8E4DA",i.fillRect(-14,19,56,5)})}function S0(i="round"){return qe("head"+i,300,300,t=>{t.translate(150,150);let e=new Path2D;e.arc(0,0,118,0,7);let n=t.createRadialGradient(10,-46,2,0,0,122);n.addColorStop(0,"#2C2E44"),n.addColorStop(.42,"#14141F"),n.addColorStop(1,"#08080E"),t.fillStyle=n,t.fill(e),t.save(),t.clip(e),t.globalAlpha=.1,t.fillStyle="#9fa4d8",t.beginPath(),t.ellipse(-4,-98,70,16,0,0,7),t.fill(),t.restore()})}var th={open(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,0,18,27,t*.06,0,7),i.fill()},look(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(11,0,18,26,0,0,7),i.fill()},lookl(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(-11,0,18,26,0,0,7),i.fill()},down(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,16,18,22,0,0,7),i.fill()},wide(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,-2,23,33,0,0,7),i.fill()},small(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.ellipse(0,0,10,14,0,0,7),i.fill()},happy(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,8),i.quadraticCurveTo(0,-24,22,8),i.stroke()},shut(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,-6),i.quadraticCurveTo(0,18,22,-6),i.stroke()},flat(i,t){i.strokeStyle="#F6EFE6",i.lineWidth=8.5,i.beginPath(),i.moveTo(-22,2),i.lineTo(22,2),i.stroke()},smug(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-22,-6),i.lineTo(22,-6),i.quadraticCurveTo(20,24,0,24),i.quadraticCurveTo(-20,24,-22,-6),i.fill()},sad(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-19,t>0?-14:2),i.lineTo(19,t>0?2:-14),i.quadraticCurveTo(20,26,0,26),i.quadraticCurveTo(-20,26,-19,t>0?-14:2),i.fill()},angry(i,t){i.fillStyle="#F6EFE6",i.beginPath(),i.moveTo(-19,t>0?6:-14),i.lineTo(19,t>0?-14:6),i.quadraticCurveTo(20,26,0,26),i.quadraticCurveTo(-20,26,-19,t>0?6:-14),i.fill()},heart(i,t){i.fillStyle="#F0728C",i.beginPath(),i.moveTo(0,22),i.bezierCurveTo(-34,-2,-18,-30,0,-10),i.bezierCurveTo(18,-30,34,-2,0,22),i.fill()}};function E0(i,t){return qe("eye_"+i+(t?"L":""),300,300,e=>{e.translate(150,150),[-1,1].forEach(n=>{e.save(),e.translate(n*42,0),th[i](e,n),t&&(e.strokeStyle="#F6EFE6",e.lineWidth=3.5,[0,1,2].forEach(s=>{e.beginPath(),e.moveTo(n*(8+s*6),-22+s*3),e.quadraticCurveTo(n*(16+s*7),-34+s*2,n*(26+s*6),-36+s*5),e.stroke()})),e.restore()}),t&&(e.fillStyle="#E8667F55",[-1,1].forEach(n=>{e.beginPath(),e.ellipse(n*48,40,26,13,0,0,7),e.fill()}))})}function b0(i,t,e){return qe("hair_"+i+t,420,500,n=>{if(n.translate(210,170),i==="long"){let s=Zt("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");we(n,s,un(n,-120,-150,120,250,t,e||t)),n.strokeStyle="#ffffff30",n.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{n.beginPath(),n.moveTo(r,o),n.quadraticCurveTo(r*1.25,(o+l)/2,a,l),n.stroke()})}if(i==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),we(n,s,t);let r=Zt("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");we(n,r,t),n.strokeStyle="#ffffff33",n.lineWidth=6,n.beginPath(),n.moveTo(-60,-112),n.quadraticCurveTo(-10,-128,40,-112),n.stroke()}if(i==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),we(n,l,t)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),n.strokeStyle="#ffffff22",n.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{n.beginPath(),n.arc(r,o,26,3.6,5.4),n.stroke()})}if(i==="bob"){let s=Zt("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");we(n,s,un(n,0,-150,0,100,t,e||t)),n.strokeStyle="#ffffff30",n.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{n.beginPath(),n.moveTo(r,o),n.quadraticCurveTo(r*1.22,(o+l)/2,a,l),n.stroke()})}i==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),we(n,l,"#E9E9EF")})})})}var Qc=(i,t={})=>new be({map:i,alphaTest:.5,alphaToCoverage:!0,side:ie,...t}),jc=new Map,ol=new Map,T0=[];function w0(i){if(ol.has(i))return ol.get(i);let t=i.image,e=document.createElement("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;n.drawImage(t,Math.cos(a)*s,Math.sin(a)*s)}n.globalCompositeOperation="source-in",n.fillStyle="#FFFFFF",n.fillRect(0,0,e.width,e.height);let r=new yi(e);return r.colorSpace=ve,r.anisotropy=8,ol.set(i,r),r}function We(i,t,e,n,s,r=0,o,a=!1){let l=new Yt(t*Xe,e*Xe);l.translate((t/2-n)*Xe,(s-e/2)*Xe,0);let h=Qc(i);o.push(h);let d=new gt(l,h);if(d.position.z=r,d.castShadow=!0,!a){let p=Qc(w0(i),{color:"#FFE9C8"});T0.push(p);let f=new gt(l,p);f.position.z=-.045-r,d.add(f)}let m=jc.get(i);return m||(m=new ii({depthPacking:ls,map:i,alphaTest:.5,side:ie}),jc.set(i,m)),d.customDepthMaterial=m,d}function A0(){return qe("blob",128,128,i=>{let t=i.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"#000000AA"),t.addColorStop(.55,"#00000055"),t.addColorStop(1,"#00000000"),i.fillStyle=t,i.fillRect(0,0,128,128)})}function R0(){return qe("halo",256,512,i=>{let t=i.createRadialGradient(128,256,10,128,256,128);t.addColorStop(0,"#FFE6C0"),t.addColorStop(.62,"#FFE6C066"),t.addColorStop(1,"#FFE6C000"),i.save(),i.translate(0,0),i.scale(1,2),i.translate(0,-128),i.fillStyle=t,i.fillRect(0,0,256,512),i.restore()})}function en(i={}){let t=v0[i.outfit||"hero"],e=i.outfit||"hero",n=new ue,s=[],r=new ue;n.add(r);let o=316,a=o+262,l={},h={};for(let[u,c,v]of[["L",-1,-.012],["R",1,-.01]]){let M=new ue;M.position.set(c*34*Xe,o*Xe,v);let y=new ue;y.position.y=-142*Xe,M.add(We(Kc(1),50,160,25,6,0,s)),y.add(We(Kc(1),50,160,25,6,0,s));let C=We(M0(),80,40,26,6,.001,s);C.position.y=-142*Xe,c<0&&(C.scale.x=-1),y.add(C),M.add(y),r.add(M),l[u]={th:M,shin:y}}let d=We(y0(t,e),300,320,150,20,0,s);d.position.y=(a+4)*Xe,r.add(d);for(let[u,c,v]of[["L",-1,-.006],["R",1,.006]]){let M=new ue;M.position.set(c*(t.kind==="dress"?66:84)*Xe,(a-24)*Xe,v);let y=new ue;y.position.y=-124*Xe,M.add(We(Jc(t,e,"u"),90,170,45,10,0,s)),y.add(We(Jc(t,e,"f"),90,170,45,10,.001,s));let C=We(x0(),90,100,45,14,.002,s);C.position.y=-128*Xe,C.scale.set(c>0?-.8:.8,.8,1),y.add(C),M.add(y),r.add(M),h[u]={u:M,f:y,hand:C}}let m=new ue;if(m.position.set(0,(a+104)*Xe,.02),r.add(m),i.hair){let u=We(b0(i.hair,i.hairc||"#4a2c1a",i.hairhi),420,500,210,170,-.03,s);m.add(u)}if(m.add(We(S0(),300,300,150,150,0,s)),i.hair&&i.hair!=="old"&&i.hair!=="afro"){let u=We(qe("fringe_"+i.hair+(i.hairc||""),300,300,c=>{c.translate(150,150);let v=i.hairc||"#4a2c1a";c.fillStyle=v,c.fill(Zt(i.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),c.strokeStyle="#ffffff2c",c.lineWidth=5,c.beginPath(),c.moveTo(-70,-92),c.quadraticCurveTo(-10,-114,54,-96),c.stroke()}),300,300,150,150,.003,s,!0);m.add(u)}if(i.lash){let u=We(qe("earring",300,300,c=>{c.translate(150,150),[-1,1].forEach(v=>{c.strokeStyle="#F2C94C",c.lineWidth=6,c.beginPath(),c.arc(v*124,58,15,0,7),c.stroke()})}),300,300,150,150,.004,s,!0);u.castShadow=!1,m.add(u)}let p={};for(let u of Object.keys(th)){let c=We(E0(u,i.lash),300,300,150,150,.002,s,!0);c.castShadow=!1,c.visible=u==="open",m.add(c),p[u]=c}if(i.glasses){let u=We(qe("glasses",300,300,c=>{c.translate(150,150),c.strokeStyle="#E4E6EC",c.lineWidth=7,c.beginPath(),c.arc(-42,0,36,0,7),c.stroke(),c.beginPath(),c.arc(42,0,36,0,7),c.stroke(),c.beginPath(),c.moveTo(-6,0),c.lineTo(6,0),c.stroke()}),300,300,150,150,.004,s,!0);u.castShadow=!1,m.add(u)}if(i.hat){let u=We(i.hat(qe),300,300,150,150,.006,s);m.add(u)}let f=new gt(new Yt(1,.4),new be({map:A0(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.012,n.add(f);let g=null;i.glow&&(g=new gt(new Yt(2.1,3),new be({map:R0(),transparent:!0,depthWrite:!1,opacity:i.glow,blending:tn,side:ie})),g.position.set(0,.95,-.09),r.add(g));let _={root:n,body:r,head:m,arms:h,legs:l,eyes:p,mats:s,torso:d,tint(u){s.forEach(c=>c.color.set(u))},eye(u){for(let c in p)p[c].visible=c===u},cheer(u,c=0,v=1){let M=u*6+c,y=Math.sin(M);_.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(M*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(u){s.forEach(c=>{c.transparent=u<1,c.opacity=u,c.alphaTest=u<1?.02:.5,c.alphaToCoverage=u>=1,c.depthWrite=u>=1}),f.material.opacity=u,g&&(g.material.opacity=(i.glow||0)*u)},pose(u={}){let c=Math.PI/180,v=u.armL||[6,4],M=u.armR||[6,4],y=u.legL||[0,0],C=u.legR||[0,0];h.L.u.rotation.z=-v[0]*c,h.L.f.rotation.z=-v[1]*c,h.R.u.rotation.z=M[0]*c,h.R.f.rotation.z=M[1]*c,l.L.th.rotation.z=-y[0]*c,l.L.shin.rotation.z=-y[1]*c,l.R.th.rotation.z=C[0]*c,l.R.shin.rotation.z=C[1]*c,m.rotation.z=(u.head||0)*c,r.rotation.z=(u.lean||0)*c,r.position.y=u.bob||0;let w=u.squash||0;r.scale.set(1-w*.5,1+w,1)},walk(u,c=1,v=1){let M=u*6.4*c,y=Math.sin(M),C=Math.cos(M);_.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(C)*.03*v,head:y*2})},place(u,c,v=0,M=1){n.position.set(u,v,c),n.scale.setScalar(M)},face(u){let c=u.position;n.rotation.y=Math.atan2(c.x-n.position.x,c.z-n.position.z),f.rotation.z=-n.rotation.y}};return _.pose(),_}function Vt(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");e(s,i,t);let r=new yi(n);return r.colorSpace=ve,r.anisotropy=8,r}var wi=(i,t={})=>new Kt({color:i,roughness:.88,metalness:0,...t});function Ot(i,t,e,n,s=0,r=0,o=0,a=!0){let l=new gt(new cn(i,t,e),typeof n=="string"?wi(n):n);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function zn(i,t,e=1){let n=Vt(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Ls(new rs({map:n,color:i,transparent:!0,depthWrite:!1,opacity:e,blending:tn}));return s.scale.set(t,t,1),s}var eh=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function I0(i,t,e,n,s,r=.42){let o=Ae(i),a=256*t,l=300*e,h,d=Vt(a,l,p=>{p.fillStyle=n,p.fillRect(0,0,a,l);for(let f=0;f<l;f+=12)for(let g=f/12%2*-14;g<a;g+=30)p.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,p.fillRect(g,f,28,10);for(let f=0;f<e;f++)p.fillStyle="rgba(255,240,220,.14)",p.fillRect(0,f*300+292,a,8)}),m=Vt(a,l,p=>{p.fillStyle="#000",p.fillRect(0,0,a,l);let f=d.image.getContext("2d");for(let g=0;g<e;g++)for(let _=0;_<t;_++){let u=_*256+56,c=g*300+60,v=144,M=196,y=o()<r,C=o();if(f.fillStyle="#E8E0CE",f.fillRect(u-9,c-9,v+18,M+18),f.fillStyle="rgba(0,0,0,.35)",f.fillRect(u-18,c+M+9,v+36,12),f.fillStyle="rgba(245,235,215,.8)",f.fillRect(u-18,c+M+6,v+36,8),f.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",f.fillRect(u,c,v,M),y||!s){let w=y?C<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";f.fillStyle=w,f.fillRect(u,c,26,M),f.fillRect(u+v-26,c,26,M)}s||(f.fillStyle="#ffffff30",f.beginPath(),f.moveTo(u+20,c+M),f.lineTo(u+90,c),f.lineTo(u+124,c),f.lineTo(u+54,c+M),f.fill()),f.fillStyle="#E8E0CE",f.fillRect(u+v/2-3,c,6,M),f.fillRect(u,c+M*.45,v,6),y&&s&&(p.fillStyle=C<.5?"#FFC47A":"#FFD79C",p.fillRect(u,c,v,M),p.fillStyle="#000",p.fillRect(u+v/2-3,c,6,M),p.fillRect(u,c+M*.45,v,6))}d.needsUpdate=!0});return m.colorSpace=ve,{map:d,emissiveMap:m}}function Os(i,t){let{x:e,z:n,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:h,shop:d}=t,m=Ae(i),p=new ue,f=o*2.9+3.6,g=h||eh[Math.floor(m()*eh.length)],_=Math.max(2,Math.round(r/2.1)),u=I0(i,_,o,g,l,t.lit??.42),c=new Kt({map:u.map,emissiveMap:u.emissiveMap,emissive:new Tt(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=wi(g),M=[a>0?c:v,a>0?v:c,wi("#2c2730"),v,v,v],y=new gt(new cn(s,o*2.9,r),M);y.position.set(e,3.6+o*1.45,n),y.castShadow=y.receiveShadow=!0,p.add(y),p.add(Ot(s+.5,.5,r+.5,"#3d3540",e,f+.25,n)),p.add(Ot(s+.3,.35,r+.3,g,e,3.6,n));let C=e+a*(s/2+.01);if(d){let w=Vt(1024,180,A=>{A.fillStyle=d.bg,A.fillRect(0,0,1024,180),A.fillStyle="#ffffff22",A.fillRect(0,0,1024,8),A.font=`900 ${d.size||104}px ${d.font||"Fraunces"}`,A.textAlign="center",A.textBaseline="middle",A.fillStyle=d.fg||"#FFF4DC",A.shadowColor=d.fg||"#FFF4DC",A.shadowBlur=l?26:0,A.fillText(d.name,512,96)}),R=new gt(new cn(.18,1.05,r-.3),[new Kt({map:w,emissiveMap:w,emissive:new Tt(l?.85:0,l?.85:0,l?.85:0)}),new Kt({map:w,emissiveMap:w,emissive:new Tt(l?.85:0,l?.85:0,l?.85:0)}),wi("#222"),wi("#222"),wi("#222"),wi("#222")]);R.position.set(C+a*.1,3.25,n),a>0&&(R.scale.z=-1),R.castShadow=!0,p.add(R);let I=Vt(512,256,A=>{let H=A.createLinearGradient(0,0,0,256);H.addColorStop(0,d.win||"#F4C783"),H.addColorStop(1,"#D59A5C"),A.fillStyle=H,A.fillRect(0,0,512,256);let B=Ae(i+9);for(let k=0;k<26;k++)A.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(B()*6)],A.fillRect(B()*490,30+Math.floor(B()*3)*76,12+B()*26,52);for(let k of[84,160,236])A.fillStyle="#6b4530",A.fillRect(0,k,512,7)}),b=new Kt({map:I,emissiveMap:I,emissive:new Tt(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});p.add(Ot(.3,2.8,r-.1,"#3a2a24",C-a*.1,1.4,n));let E=new gt(new Yt(r-.9,2.1),b);E.rotation.y=a*Math.PI/2,E.position.set(C+a*.07,1.5,n),p.add(E);for(let A=-1;A<=1;A++)p.add(Ot(.08,2.3,.09,"#2a1d18",C+a*.1,1.5,n+A*(r-.9)/2));if(d.awning){let A=Vt(512,128,B=>{for(let k=0;k<12;k++)B.fillStyle=k%2?d.awning:"#F4EEDF",B.fillRect(k*512/12,0,42.666666666666664,128)}),H=new gt(new Yt(r-.3,1.3),new Kt({map:A,side:ie,roughness:.9}));H.rotation.y=a*Math.PI/2,H.rotation.order="YXZ",H.rotation.x=-1,H.position.set(C+a*.55,2.56,n),H.castShadow=!0,p.add(H)}if(l){let A=new Bn(d.light||"#FFC88A",3.2,7,1.8);A.position.set(C+a*1.7,2.1,n),p.add(A)}}return p}function nh(i,t,e){let n=new gt(new Yt(i,t),e);return n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n}function L0(i="#A99D90"){let t=Vt(512,512,e=>{e.fillStyle=i,e.fillRect(0,0,512,512);let n=Ae(4);for(let s=0;s<2400;s++)e.fillStyle=`rgba(${n()<.5?"255,255,255":"0,0,0"},.035)`,e.fillRect(n()*512,n()*512,2,2);e.strokeStyle="rgba(30,20,20,.42)",e.lineWidth=4,e.strokeRect(0,0,512,512)});return t.wrapS=t.wrapT=ze,t}function sh(i,t){let e=Vt(1024,1024,s=>{s.fillStyle=t?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Ae(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});e.wrapS=e.wrapT=ze,e.repeat.set(1,12);let n=nh(9,240,new Kt({map:e,roughness:.78,metalness:.05}));n.position.set(0,0,-100),i.add(n);for(let s of[-1,1]){let r=L0(t?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=nh(4.4,240,new Kt({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),i.add(o),i.add(Ot(.22,.16,240,t?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function rh(i,t,e,n,s=!0,r=5.5){let o=new ue;o.add(Ot(.09,3.7,.09,"#15151b",t,1.85,e)),o.add(Ot(.26,.3,.26,"#15151b",t,.15,e));let a=Ot(.26,.4,.26,new Kt({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),t,3.85,e,!1);if(o.add(a),o.add(Ot(.34,.06,.34,"#15151b",t,4.08,e,!1)),s){let l=zn("#FFB870",1.8,.4);l.position.set(t,3.85,e),o.add(l);let h=new Bn("#FFC688",r,11,1.6);h.position.set(t,3.5,e),o.add(h)}return i.add(o),o}var ih={};function oh(i,t,e,n=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new ue;o.add(Ot(.18*n,2.6*n,.18*n,"#2b1e18",t,1.3*n,e));let a=s.join()+r%3,l=ih[a]||(ih[a]=Vt(512,512,h=>{let d=Ae(r%3+3),m=(p,f,g,_)=>{h.fillStyle=_,h.beginPath();for(let u=0;u<=26;u++){let c=u/26*6.283,v=g*(.86+.14*Math.sin(c*5+p)+d()*.05);h.lineTo(p+Math.cos(c)*v,f+Math.sin(c)*v)}h.fill()};for(let[p,f,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])m(p,f,g,s[0]);for(let[p,f,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])m(p,f,g,s[1]);for(let[p,f,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])m(p,f,g,s[2]);h.fillStyle=s[3];for(let p=0;p<70;p++){let f=90+d()*330,g=70+d()*300;h.save(),h.translate(f,g),h.rotate(d()*3),h.beginPath(),h.ellipse(0,0,8,3.6,0,0,7),h.fill(),h.restore()}}));for(let h=0;h<3;h++){let d=new gt(new Yt(3.6*n,3.6*n),new Kt({map:l,alphaTest:.5,side:ie,roughness:1}));d.position.set(t,3.5*n,e),d.rotation.y=h*1.05+r,d.castShadow=!0,d.customDepthMaterial=new ii({depthPacking:ls,map:l,alphaTest:.5,side:ie}),o.add(d)}return i.add(o),o}function al(i,t,e,n,s,r,o=3,a=0){let l=Vt(1600,900,d=>{d.clearRect(0,0,1600,900);let m=Ae(o);for(let p=0;p<3;p++)for(let f=-40;f<1620;){let g=50+m()*110,_=180+m()*(p===0?660:400);if(d.fillStyle=s[p],d.fillRect(f,900-_,g,_),m()<.2&&d.fillRect(f+g/2-4,900-_-60,8,60),r)for(let u=900-_+12;u<890;u+=18)for(let c=f+8;c<f+g-8;c+=14)m()<.34&&(d.fillStyle=p===2?"#FFD999":p===1?"#E9C28C":"#A98BA0",d.fillRect(c,u,7,10));f+=g*.92}}),h=new gt(new Yt(e,n),new be({map:l,transparent:!0,fog:!1,depthWrite:!1}));return h.position.set(0,a+n/2,t),i.add(h),h}function qr(i,t,e,n,s){let r=Vt(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([h,d])=>l.addColorStop(h,d)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new gt(new Yt(e,n),new be({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,n*.32,t),i.add(o),o}var pe=(i,t={})=>new Kt({color:i,roughness:.85,...t});function xn(i,t,e,n={}){let s=new gt(new Yt(t,e),new be({map:i,alphaTest:n.blend?0:.5,transparent:!!n.blend,depthWrite:!n.blend,side:ie,color:n.color||"#fff",blending:n.add?tn:Kn,fog:n.fog??!0}));return n.shadow&&(s.castShadow=!0,s.customDepthMaterial=new ii({depthPacking:ls,map:i,alphaTest:.5,side:ie})),s}function Hn(i,t){i.rotation.y=Math.atan2(t.position.x-i.position.x,t.position.z-i.position.z)}var ll={value:0};function ah(i="#8E3D30",t=4,e=3){let n=Vt(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Ae(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let h=r();s.fillStyle=i,s.globalAlpha=.78+h*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+h*40},${180+h*30},${h*.1})`,s.fillRect(l+2,a+2,84,6),h>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return n.wrapS=n.wrapT=ze,n.repeat.set(t,e),n}function cl(i="#A59383",t=12,e=12){let n=Vt(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Ae(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=i,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return n.wrapS=n.wrapT=ze,n.repeat.set(t,e),n}var lh=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function D0(i,t){let[e,n,s,r]=lh[i];return Vt(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=e,o.lineWidth=22,o.beginPath(),t?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=e,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=n,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),t?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,h])=>{o.beginPath(),o.arc(l,h,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function ch(i,t,e={}){let{h:n=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=e,a=Ae(o),l={};for(let h of t){let d=Math.floor(a()*lh.length)+(a()<(e.raised??.5)?100:0);(l[d]=l[d]||[]).push(h)}for(let h in l){let d=h>=100,m=h%100,p=D0(m,d),f=new be({map:p,alphaTest:.5,side:ie,color:r});f.onBeforeCompile=u=>{u.uniforms.uT=ll,u.vertexShader=`uniform float uT;
`+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+m%3).toFixed(1)} + ph))*${s.toFixed(3)}/${n.toFixed(2)};`)};let g=new Dr(new Yt(n*.5,n),f,l[h].length),_=new Ee;l[h].forEach((u,c)=>{_.position.set(u[0],(u[2]||0)+n/2,u[1]),_.rotation.y=u[3]||0;let v=.92+a()*.16;_.scale.set(v,v,1),_.updateMatrix(),g.setMatrixAt(c,_.matrix)}),g.frustumCulled=!1,i.add(g)}}function Yr(i,t,e="#6D4A33"){let n=Vt(1024,1024,r=>{r.fillStyle=e,r.fillRect(0,0,1024,1024);let o=Ae(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let h=o()*300;for(;h<1024;)r.fillRect(l,h,94,3),h+=340+o()*300}});n.wrapS=n.wrapT=ze,n.repeat.set(i/5,t/5);let s=new gt(new Yt(i,t),new Kt({map:n,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function hl(i,t,e="#FFD9A0",n=.22){let s=Vt(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,e+"FF"),a.addColorStop(1,e+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new gt(new Yt(i,t),new be({map:s,transparent:!0,opacity:n,depthWrite:!1,blending:tn,side:ie,fog:!1}))}function hh(i,t,e,n=1,s="#C76B4A",r="#3E8A52"){let o=new ue,a=new gt(new ke(.3,.22,.5,20),pe(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Vt(256,256,d=>{d.clearRect(0,0,256,256);for(let m=0;m<9;m++)d.save(),d.translate(128,250),d.rotate((m-4)*.3),d.fillStyle=m%2?r:"#5BA868",d.beginPath(),d.ellipse(0,-110,20,110,0,0,7),d.fill(),d.restore()}),h=xn(l,1.5,1.5,{shadow:!0});return h.position.y=1.15,o.add(h),o.leaf=h,o.position.set(i,t,e),o.scale.setScalar(n),o}function ul(i,t,e,n="#2A1E18"){let s=new ue;s.add(Ot(i+.08,t+.08,.04,n,0,0,0));let r=Vt(Math.round(i*400),Math.round(t*400),e),o=new gt(new Yt(i,t),new Kt({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function uh(i,t,e,n=1.2){return new gt(new Yt(i,t),new Kt({color:"#000",emissive:e,emissiveIntensity:n}))}function ps(i,t,e,n=10,s=60){let r=new Br(i,t);return r.position.set(...e),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-n,right:n,top:n,bottom:-n,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}var F0=(i,t="#FBF7EC")=>Vt(512,300,e=>{e.clearRect(0,0,512,300),e.fillStyle=t,e.strokeStyle="#2A2A34",e.lineWidth=8,e.beginPath(),e.roundRect(10,10,492,210,60),e.fill(),e.stroke(),e.beginPath(),e.moveTo(110,214),e.lineTo(80,290),e.lineTo(170,214),e.fill(),e.stroke(),e.fillStyle="#C9361F",e.font="900 92px Fraunces",e.textAlign="center",e.textBaseline="middle",e.fillText(i,256,118)});function dh(i,t,e=!1){let n=Ti(i,t,"#1E1626",40),s=n.scene;s.fog=new Un("#2A1E2A",.03);let r=new gt(new Yt(16,7),new Kt({map:(()=>{let c=Vt(256,256,v=>{v.fillStyle="#7A3A44",v.fillRect(0,0,256,256),v.fillStyle="#86444E";for(let M=0;M<256;M+=32)v.fillRect(M,0,14,256)});return c.wrapS=c.wrapT=ze,c.repeat.set(6,3),c})(),roughness:.95}));r.position.set(0,3.5,-3),r.receiveShadow=!0,s.add(r),s.add(Yr(16,12,"#5F3F2C"));let o=uh(2.2,1.8,"#2A3A6A",.6);o.position.set(-3.2,2.6,-2.95),s.add(o);for(let c=0;c<24;c++){let v=zn("#FFCB86",.12,.9);v.position.set(-4.1+c%6*.36,1.9+Math.floor(c/6)*.4,-2.9),s.add(v)}s.add(Ot(2.4,.1,.1,"#EDE7DA",-3.2,3.55,-2.9)),s.add(Ot(2.4,.1,.1,"#EDE7DA",-3.2,1.65,-2.9)),s.add(Ot(.08,1.9,.1,"#EDE7DA",-3.2,2.6,-2.9));let a=ul(1,.8,c=>{c.fillStyle="#F2E6CC",c.fillRect(0,0,400,320),c.fillStyle="#36AEA2",c.beginPath(),c.arc(200,170,90,0,7),c.fill()});a.position.set(2.6,2.7,-2.95),s.add(a),s.add(Ot(3.6,.08,1.4,pe("#D8C8A8"),0,.95,-.6)),s.add(Ot(3.7,.5,1.5,pe("#E8667F",{roughness:.9}),0,.7,-.6));for(let[c,v]of[[-1.6,-1.2],[1.6,-1.2],[-1.6,0],[1.6,0]])s.add(Ot(.08,.9,.08,"#5C3C28",c,.45,v));for(let c of[-1.1,0,1.1]){let v=new gt(new ke(.22,.2,.03,24),pe("#FFFFFF"));v.position.set(c,1.01,-.35),s.add(v);let M=new gt(new os(.1,14,10),pe("#C98A3E"));M.scale.y=.5,M.position.set(c,1.05,-.35),s.add(M)}let l=new gt(new ke(.35,.3,.08,24),pe("#D9B48A"));l.position.set(0,1.03,-.9),s.add(l);for(let c of[-.6,.6]){s.add(Ot(.05,.28,.05,"#FBF3DF",c,1.13,-.85));let v=zn("#FFC67A",.45,.9);v.position.set(c,1.32,-.85),s.add(v);let M=new Bn("#FFB070",.8,3,1.6);M.position.set(c,1.4,-.6),s.add(M)}let h=new gt(new Fr(.45,.4,24,1,!0),new Kt({color:"#E9B44C",emissive:"#FFB866",emissiveIntensity:.8,side:ie}));h.position.set(0,3,-.7),s.add(h),s.add(Ot(.02,2,.02,"#222",0,4.2,-.7,!1));let d=new Bn("#FFC27A",7,8,1.6);d.position.set(0,2.6,-.5),d.castShadow=!0,s.add(d);let m=zn("#FFC27A",1.4,.5);m.position.set(0,2.85,-.7),s.add(m),s.add(hh(3.4,0,-2.4,1));let p=en({outfit:"hero",glow:.16});p.place(-1.1,-1.3),p.tint("#FFE6CC"),s.add(p.root);let f=en({outfit:"roxo",hair:"old",hairc:"#E8E8E8",lash:!0,glasses:!0,glow:.12});f.place(1.15,-1.3),f.tint("#FFE6CC"),s.add(f.root);let g=en({outfit:"azul",hair:"bob",hairc:"#3a2418",lash:!0,glow:.1});g.place(0,-1.45),g.tint("#FFE6CC"),s.add(g.root);let _=xn(F0(e?"psst...":"\xA1HOLA!"),1,.59);s.add(_);let u=zn("#FF7A9A",.6,.9);return s.add(u),s.add(new Nn("#8E86C8","#2a1a14",.6)),s.add(ps("#9FB0FF",.6,[3,6,6],7,26)),n.update=(c,v)=>{let M=n.camera;[p,f,g].forEach(R=>R.face(M));let y=p.root.position;if(!e){let R=v>.2&&v<2.8;p.eye(R?"happy":"look"),p.pose({armR:[R?60+Math.sin(v*8)*15:14,R?30:-60],armL:[14,-60],bob:R?Math.abs(Math.sin(v*8))*.02:0}),_.visible=v>.2&&v<3,_.position.set(y.x+.3,2.45,y.z+.2),Hn(_,M),f.eye(v<3.2?"flat":"heart"),f.pose({armL:[14,-60],armR:[v>3.2?40:14,v>3.2?100:-60],head:v>3.2?8:0}),u.visible=v>3.3,u.position.set(1.15,2.3+(v-3.3)*.2,-1.1),g.eye("look"),g.pose({armL:[14,-60],armR:[14,-60]});let I=Ge(0,3.4,v);return ri(M,[Et(-.8,.9,I),Et(1.7,1.75,I),Et(2,2.6,I)],[Et(-.9,1.1,I),Et(1.75,1.7,I),-1.3],-.01),{focus:Et(3.3,3.9,I),range:1.6,blur:14,bloom:.25,bloomT:1,vig:.5,exposure:.96}}p.root.position.x=-.55,p.eye(v<2?"smug":"wide"),p.pose({armR:[70,110],armL:[14,-60],lean:v<2?8:0}),_.visible=v>.2&&v<2.1,_.position.set(-.4,2.4,-1.1),Hn(_,M),u.visible=!1,g.root.position.x=.15,g.eye(v<2?"look":"wide"),g.pose({armL:[14,-60],armR:[14,-60]}),f.eye(v<2?"look":"angry"),f.pose({armL:[v>2?40:14,v>2?120:-60],armR:[v>2?40:14,v>2?120:-60],head:v>2?-8:0});let C=Ge(0,2,v),w=Ge(1.9,3,v);return ri(M,[Et(-.1,.9,w),Et(1.7,1.8,w),Et(2.6,1.9,w)],[Et(-.2,1.15,w),Et(1.7,1.75,w),-1.3],-.01),{focus:Et(3.9,3.3,w),range:1.2,blur:15,bloom:.25,bloomT:1,vig:.5+w*.1,exposure:.96,tint:w>.5?"#FFE8E0":"#ffffff"}},n}var fh=["HELLO","\u4F60\u597D","\u041F\u0420\u0418\u0412\u0415\u0422","\u0645\u0631\u062D\u0628\u0627","\u3053\u3093\u306B\u3061\u306F","OL\xC1","BONJOUR","\u0928\u092E\u0938\u094D\u0924\u0947","CIAO","\uC548\uB155","JAMBO","MERHABA","HALLO","SAWUBONA","\u0393\u0395\u0399\u0391","\u05E9\u05DC\u05D5\u05DD","XIN CH\xC0O","HEJ","SALUT","AHOJ"],ph=[["#F4EEDC","#C9361F"],["#2F6E9A","#FFFFFF"],["#E9B44C","#2A2A34"],["#36AEA2","#FFFFFF"],["#E8667F","#FFF4DC"],["#2A2A34","#F2C14E"]],mh=(i,t)=>Vt(300,400,e=>{let[n,s]=ph[t%ph.length];e.fillStyle=n,e.fillRect(0,0,300,400),e.strokeStyle=s,e.lineWidth=8,e.strokeRect(14,14,272,372),e.fillStyle=s,e.textAlign="center",e.textBaseline="middle";let r=i.length>6?46:70;e.font=`900 ${r}px Inter`,e.fillText(i,150,190),e.font="700 22px Inter",e.fillText("\u2605 \u2605 \u2605",150,320)});function U0(i,t){let e=Ti(i,t,"#F1C39A",42),n=e.scene;n.fog=new Un("#F7CFA4",.02),qr(n,-170,500,180,[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]);let s=new gt(new Yt(40,40),new Kt({map:cl("#B49F8C",16,16),roughness:.9}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);let r=new gt(new cn(30,8,.5),new Kt({map:ah("#8E3D30",8,3),roughness:.95}));r.position.set(0,4,-3),r.receiveShadow=!0,n.add(r);let o=Ae(6),a=[];for(let h=0;h<60;h++){let d=h%15,m=Math.floor(h/15),p=mh(fh[h%fh.length],h),f=mh("HOLA",h),g=new gt(new Yt(.9,1.2),new Kt({map:p,roughness:.8}));g.position.set(-7+d*1+(o()-.5)*.15,1.3+m*1.3+(o()-.5)*.12,-2.72),g.rotation.z=(o()-.5)*.12,n.add(g),a.push({m:g,a:p,b:f,d:Math.abs(d-7)*.05+m*.04+o()*.2})}let l=[["hero",null,null,0,.2,.16],["rosa","long","#6B3A22",-1.8,-.6,0],["terno2",null,null,1.9,-.2,0],["amarelo","afro","#2a1b18",3.4,-.8,0]].map(([h,d,m,p,f,g],_)=>{let u=en({outfit:h,hair:d,hairc:m,lash:!!d,glow:g});return u.place(p,f),u.tint("#FFF0DC"),u.ph=_,n.add(u.root),u});return n.add(new Nn("#E9EEFF","#B08A6A",1)),n.add(ps("#FFD29A",3,[-12,12,10],14,50)),e.update=(h,d)=>{let m=e.camera,p=2.55;a.forEach(g=>{let _=d>p+g.d;g.m.material.map=_?g.b:g.a;let u=Bs((d-p-g.d)/.12);g.m.scale.x=Math.abs(1-2*u)*.9+.1}),l.forEach((g,_)=>{g.face(m),g.eye(d<p?"look":_%2?"wide":"happy"),g.pose({armL:[12,8],armR:[d>p+.3&&_===0?150:12,8],head:d<p?Math.sin(d+_)*6:0})});let f=Ge(0,6,d);return ri(m,[Et(-3.5,.3,f),Et(2.6,1.9,f),Et(2.2,5.6,f)],[Et(-3.5,0,f),Et(2.8,2.6,f),-2.7],-.01),{focus:Et(4.9,6,f),range:3,blur:10,bloom:.2,bloomT:1,vig:.38,exposure:1.02}},e}function N0(i,t){let e=Ti(i,t,"#9CC8EE",42),n=e.scene;n.fog=new Un("#F2D8B8",.01),qr(n,-170,500,200,[[0,"#5E9AD8"],[.55,"#A9CBE8"],[.85,"#FBD9AE"],[1,"#FFE9C6"]]),al(n,-150,420,90,["#C9A6A6","#B898A0","#A88C98"],!1,12),sh(n,!1);let s=[{name:"TRATTORIA",bg:"#3E7A5C",fg:"#FFF4DC",awning:"#D94F58"},{name:"SOUVENIRS",bg:"#2F6E9A",fg:"#FFF4DC",awning:"#F4EEDC"},{name:"HOTEL",bg:"#7A3248",fg:"#F2C14E"},{name:"GELATO",bg:"#E8667F",fg:"#FFF4DC",awning:"#36AEA2"}],r=6,o=0;for(;r>-90;){let u=7+o*37%5;n.add(Os(500+o,{x:13,z:r-u/2,w:8,d:u,floors:4+o%3,side:-1,night:!1,lit:.2,shop:s[o%4]})),n.add(Os(600+o,{x:-13,z:r-u/2,w:8,d:u,floors:5+o%3,side:1,night:!1,lit:.2,shop:s[(o+2)%4]})),r-=u,o++}for(let u=0;u<6;u++)oh(n,5.2,-6-u*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],u);let a=en({outfit:"hero",glow:.16});a.place(5.9,-1.4,.14),a.tint("#FFF0DC"),n.add(a.root);let l=new gt(new ke(.42,.42,.03,24),pe("#E9D29A"));n.add(l);let h=new gt(new ke(.22,.24,.16,24),pe("#E9D29A"));n.add(h);let d=new gt(new ke(.245,.245,.05,24),pe("#C9361F"));n.add(d);let m=new ue;m.add(Ot(.5,.65,.25,pe("#C9361F"),0,.45,0)),m.add(Ot(.25,.05,.05,"#222",0,.82,0));for(let u of[-1,1])m.add(Ot(.03,.3,.03,"#888",u*.1,.97,0));m.position.set(6.45,.14,-1.3),n.add(m);let p=Vt(200,260,u=>{u.fillStyle="#2F5A8A",u.fillRect(0,0,200,260),u.fillStyle="#F2C14E",u.font="900 26px Fraunces",u.textAlign="center",u.fillText("DICCIONARIO",100,90),u.fillRect(30,120,140,6),u.font="700 22px Inter",u.fillText("ES \xB7 EN \xB7 FR",100,170)}),f=xn(p,.32,.42);n.add(f);let g=new gt(new ke(.3,.25,.8,20,1,!0),pe("#3E5F3A",{side:ie}));g.position.set(5,.54,-1.2),n.add(g);let _=[["rosa","long","#6B3A22",7.4,-5],["terno3",null,null,4.6,-7],["verde","bun","#22161a",7.2,-10]].map(([u,c,v,M,y],C)=>{let w=en({outfit:u,hair:c,hairc:v,lash:!!c,glow:.08});return w.place(M,y,M>5?.14:0),w.tint("#FFF0DC"),w.ph=C,n.add(w.root),w});return n.add(new Nn("#E9EEFF","#B08A6A",1.1)),n.add(ps("#FFD29A",3,[-20,16,10],30,90)),e.update=(u,c)=>{let v=e.camera;a.face(v);let M=a.root.position;l.position.set(M.x,1.98,M.z),h.position.set(M.x,2.07,M.z),d.position.set(M.x,2.02,M.z);let y=Ge(1.2,1.7,c);a.eye(c<1.1?"look":c<2.8?"happy":"smug"),a.pose({armR:[Et(60,30,y),Et(60,-10,y)],armL:[12,8]});let C=Bs((c-1.4)/.6);f.position.set(Et(M.x+.5,5,C),c<1.4?1.35:1.35+Math.sin(C*Math.PI)*.5-C*.6,Et(M.z+.3,-1.2,C)),f.visible=C<1,Hn(f,v),f.rotation.z=C*5,_.forEach(R=>{R.face(v),R.eye("happy"),R.pose({armR:[70,30],armL:[12,8]})});let w=Ge(0,4.4,c);return ri(v,[Et(5,4.4,w),Et(1.6,1.8,w),Et(2.8,3.6,w)],[Et(5.6,5.6,w),1.4,-1.6],-.01),{focus:Et(4.4,5.3,w),range:2.4,blur:12,bloom:.2,bloomT:1,vig:.36,exposure:1.04}},e}function B0(i,t){let e=Ti(i,t,"#2A3028",40),n=e.scene;n.fog=new Un("#3A4038",.03),n.add(Yr(16,14,"#7A5236"));let s=Ot(16,7,.3,pe("#D8D0B8"),0,3.5,-3.2);n.add(s),n.add(Ot(16,1.1,.32,pe("#5A7A6A"),0,.55,-3.18));let r=Vt(1200,560,_=>{_.fillStyle="#1F3A2C",_.fillRect(0,0,1200,560),_.strokeStyle="#C9A06A",_.lineWidth=22,_.strokeRect(0,0,1200,560),_.fillStyle="#F2F2EA",_.font="700 110px Caveat",_.textAlign="left",_.fillText("Hello = Hola",90,190),_.fillText("Thank you = Gracias",90,340),_.font="700 70px Caveat",_.fillText("Lesson 1",90,470),_.strokeStyle="#E2483A",_.lineWidth=12,_.beginPath(),_.moveTo(60,120),_.lineTo(1100,380),_.stroke()}),o=new gt(new Yt(4.6,2.15),new Kt({map:r,roughness:.9}));o.position.set(0,2.5,-3.03),n.add(o);let a=ul(1.4,.9,_=>{_.fillStyle="#9CC8EE",_.fillRect(0,0,560,360),_.fillStyle="#6E9A50",[[120,120,90,60],[300,160,70,90],[430,110,80,50],[260,80,50,30]].forEach(([u,c,v,M])=>{_.beginPath(),_.ellipse(u,c,v,M,.3,0,7),_.fill()})});a.position.set(3.6,2.6,-3.02),n.add(a);let l=new gt(new Ds(.3,30),pe("#FFFFFF"));l.position.set(-3.4,3.6,-3.02),n.add(l);for(let _=0;_<3;_++)for(let u=0;u<4;u++){let c=-2.7+u*1.8,v=.4+_*1.3;n.add(Ot(1,.05,.6,pe("#C9A06A"),c,.78,v)),n.add(Ot(.05,.76,.05,"#555",c-.45,.38,v-.25)),n.add(Ot(.05,.76,.05,"#555",c+.45,.38,v+.25)),n.add(Ot(.5,.05,.45,pe("#2F6E9A"),c,.45,v+.55)),n.add(Ot(.5,.5,.05,pe("#2F6E9A"),c,.7,v+.78))}let h=en({outfit:"terno3",hair:"bun",hairc:"#22161a",lash:!0,glasses:!0,glow:.14});h.place(-.9,-2.2),h.tint("#FFF0DC"),n.add(h.root);let d=en({outfit:"jaleco",glow:.1});d.place(1.4,-2),d.tint("#FFF0DC"),n.add(d.root);let m=new gt(new Fs(.24,.035,8,24,Math.PI),pe("#222"));n.add(m);let p=Vt(200,120,_=>{_.fillStyle="#C9A06A",_.fillRect(0,0,200,120),_.fillStyle="#5A3A1A",_.font="900 26px Inter",_.textAlign="center",_.fillText("MIS COSAS",100,70)}),f=xn(p,.55,.33);n.add(f),n.add(new Nn("#E9EEFF","#6A5A4A",.9)),n.add(ps("#FFE8C8",2,[6,7,5],9,30));let g=hl(2,7,"#FFE0B0",.14);return g.position.set(3.4,2.6,-1),g.rotation.set(-.5,-.5,.3),n.add(g),e.update=(_,u)=>{let c=e.camera;h.face(c),d.face(c);let v=h.root.position,M=d.root.position;h.eye(u<1.4?"look":"sad"),h.pose({armL:[20,-70],armR:[20,-70],head:u>1.4?-8:0}),f.position.set(v.x,1.1,v.z+.3),Hn(f,c),d.eye(u<1?"look":"sad"),d.pose({armL:[12,8],armR:[12,8],head:-6}),m.position.set(M.x,1.82,M.z),m.rotation.set(0,0,0);let y=Ge(0,7.4,u);return ri(c,[Et(-.5,.4,y),Et(1.4,1.9,y),Et(1.2,4.6,y)],[Et(-.6,.2,y),Et(1.5,2,y),-2.4],-.01),{focus:Et(3.4,6.8,y),range:2.5,blur:13,bloom:.22,bloomT:1,vig:.45,exposure:1.02}},e}var O0=["saudade","hygge","sobremesa","\u6728\u6F0F\u308C\u65E5","gezellig","ubuntu","wabi-sabi","cafun\xE9","friolero","fernweh"];function z0(i,t){let e=Ti(i,t,"#141228",42),n=e.scene;n.fog=new Un("#2A2240",.02),qr(n,-170,460,340,[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]),al(n,-150,400,170,["#2F2748","#3B2F54","#4A3A5E"],!0,6);let s=new gt(new Yt(60,60),new Kt({map:cl("#6A5A6A",24,24),roughness:.9}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);for(let f=0;f<4;f++)rh(n,-4+f*2.7,-4-f%2*2,1,!0);for(let f=0;f<16;f++){let g=zn(["#FFD27A","#FF9F7A","#9FE0FF"][f%3],.25,.9);g.position.set(-5+f*.66,4-Math.sin(f/15*Math.PI)*.6,-3),n.add(g)}let r=2,o=0;for(;r>-40;)n.add(Os(700+o,{x:10,z:r-8/2,w:8,d:8,floors:4,side:-1,night:!0,lit:.5})),n.add(Os(800+o,{x:-10,z:r-8/2,w:8,d:8,floors:4,side:1,night:!0,lit:.5})),r-=8,o++;let a=[["terno2",null,null,-1.2,-1.4,"guitar"],["amarelo","afro","#2a1b18",1.2,-1.6,"sing"],["laranja",null,null,0,-2.6,""]].map(([f,g,_,u,c,v],M)=>{let y=en({outfit:f,hair:g,hairc:_,lash:!!g,glow:.14});return y.place(u,c),y.tint("#E8D8F0"),y.ph=M,y.role=v,n.add(y.root),y}),l=xn(Vt(160,420,f=>{f.clearRect(0,0,160,420),f.fillStyle="#5A3420",f.fillRect(68,10,24,220),f.fillStyle="#D98A3E",f.beginPath(),f.ellipse(80,270,56,50,0,0,7),f.ellipse(80,350,72,66,0,0,7),f.fill(),f.fillStyle="#2A1810",f.beginPath(),f.arc(80,300,22,0,7),f.fill()}),.42,1.1);n.add(l);let h=[];for(let f=0;f<8;f++){let g=xn(Vt(96,128,_=>{_.clearRect(0,0,96,128),_.fillStyle="#F2C14E",_.beginPath(),_.ellipse(36,100,22,16,-.4,0,7),_.fill(),_.fillRect(52,14,8,88),_.fillRect(52,14,30,10)}),.2,.27);n.add(g),h.push(g)}let d=O0.map((f,g)=>{let _=Vt(600,160,c=>{c.clearRect(0,0,600,160),c.fillStyle="#FFF4DC",c.shadowColor="#FFD27A",c.shadowBlur=24,c.font=`700 ${f.length>6?84:100}px Caveat`,c.textAlign="center",c.textBaseline="middle",c.fillText(f,300,80)}),u=xn(_,2.2,.58,{blend:!0});return n.add(u),{m:u,n:g,x:(g%5-2)*1,z:-.4-Math.floor(g/5)*.8}}),m=Ae(5),p=[];for(let f=0;f<120;f++)p.push([(m()-.5)*12,-5-m()*12]);return ch(n,p,{raised:.4,jump:.06,tint:"#C8B8E0",seed:5}),n.add(new Nn("#8E86C8","#2a1f28",.8)),n.add(ps("#B9B0F0",.9,[-8,14,8],14,50)),e.update=(f,g)=>{ll.value=f;let _=e.camera;a.forEach(v=>{v.face(_),v.eye(g<2.2?"happy":"sad"),v.pose(v.role==="guitar"?{armL:[40,70],armR:[40+Math.sin(g*12)*8,60]}:v.role==="sing"?{armL:[60,20],armR:[60,20],head:6}:{armL:[12,8],armR:[12,8]})});let u=a[0].root.position;l.position.set(u.x+.05,1.05,u.z+.25),l.rotation.z=-1.1,Hn(l,_),l.rotation.z=-1.1,h.forEach((v,M)=>{let y=(g*.4+M/8)%1;v.position.set(Et(-1,1.4,M/8)+Math.sin(g*2+M)*.2,1.8+y*2.2,-1.6),v.visible=g<2.6,Hn(v,_)}),d.forEach(({m:v,n:M,x:y,z:C})=>{let w=.3+M*.25,R=Bs((g-w)/3.2);v.visible=g>w,v.position.set(y,2+R*2.6,C),v.material.opacity=Math.min(1,(g-w)*3)*(1-Ge(.55,1,R)),Hn(v,_)});let c=Ge(0,5.6,g);return ri(_,[Et(.2,-.2,c),Et(1.6,2.4,c),Et(4.4,6.2,c)],[0,Et(2.2,3,c),-1.6],-.01),{focus:Et(5.2,6.8,c),range:3.5,blur:10,bloom:.45,bloomT:.85,vig:.5,exposure:1.02}},e}function H0(i,t){let e=Ti(i,t,"#3A2A1E",40),n=e.scene;n.fog=new Un("#4A3A2A",.03),n.add(Yr(14,12,"#5F3F2C"));let s=new gt(new Yt(14,7),new Kt({map:(()=>{let u=Vt(256,256,c=>{c.fillStyle="#6A5A3A",c.fillRect(0,0,256,256),c.fillStyle="#7A6A44";for(let v=0;v<256;v+=40)for(let M=0;M<256;M+=40)c.beginPath(),c.arc(v+20,M+20,6,0,7),c.fill()});return u.wrapS=u.wrapT=ze,u.repeat.set(5,3),u})()}));s.position.set(0,3.5,-2.6),n.add(s);for(let u=0;u<4;u++){n.add(Ot(3,.06,.4,"#4A3020",3.2,.6+u*.7,-2.4));for(let c=0;c<12;c++)n.add(Ot(.18,.5+c%3*.06,.3,pe(["#7A2A22","#2F4A6A","#3E5A3A","#8A6A2A"][(c+u)%4]),1.9+c*.23,.88+u*.7,-2.35))}n.add(Ot(2.4,.08,1,pe("#6B4A33"),-.3,.95,-.8));for(let[u,c]of[[-1.4,-1.2],[.8,-1.2],[-1.4,-.4],[.8,-.4]])n.add(Ot(.08,.92,.08,"#4A3020",u,.46,c));let r=new gt(new os(.16,20,14),new Kt({color:"#FFE0A0",emissive:"#FFB860",emissiveIntensity:2.5}));r.position.set(-1.2,1.25,-.9),n.add(r);let o=new Bn("#FFB860",10,6,1.6);o.position.set(-1.1,1.5,-.6),o.castShadow=!0,n.add(o);let a=zn("#FFB860",1.2,.5);a.position.copy(r.position),n.add(a);let l=Vt(300,200,u=>{u.fillStyle="#2E8A3E",u.fillRect(0,0,300,200),u.fillStyle="#FFFFFF",u.fillRect(0,0,100,100),u.fillStyle="#2E8A3E",u.beginPath();for(let c=0;c<10;c++){let v=c%2?16:38,M=-Math.PI/2+c*Math.PI/5;u.lineTo(50+v*Math.cos(M),50+v*Math.sin(M))}u.fill()}),h=new gt(new Yt(1.2,.8),new Kt({map:l,side:ie}));h.position.set(-2.4,2.8,-2.5),n.add(h);let d=Vt(240,320,u=>{u.fillStyle="#2E8A3E",u.fillRect(0,0,240,320),u.fillStyle="#F2E6CC",u.font="900 34px Fraunces",u.textAlign="center",u.fillText("LINGVO",120,110),u.fillText("INTERNACIA",120,150),u.font="700 30px Fraunces",u.fillText("1887",120,250)}),m=xn(d,.36,.48);n.add(m);let p=zn("#9FE0A0",.9,0);n.add(p);for(let u=0;u<6;u++){let c=Ot(.3,.005,.4,"#F2E6CC",-.8+u*.22,1+u*.002,-.7+u%2*.1);c.rotation.y=u*.3,n.add(c)}let f=en({outfit:"terno",hair:"old",hairc:"#D8D0C0",glasses:!0,glow:.14});f.place(-.2,-1.6),f.tint("#FFE8C0"),n.add(f.root);let g=[["rosa","long","#6B3A22",1.4,-1.2],["azul","bob","#3a2418",2,-1.5]].map(([u,c,v,M,y])=>{let C=en({outfit:u,hair:c,hairc:v,lash:!0,glow:.1});return C.place(M,y,0,.85),C.tint("#FFE8C0"),n.add(C.root),C});n.add(new Nn("#FFE0C0","#2a1a10",.55));let _=hl(1.8,7,"#FFE0B0",.1);return _.position.set(2.2,2.6,-1),_.rotation.set(-.5,-.4,.3),n.add(_),e.update=(u,c)=>{let v=e.camera;f.face(v);let M=f.root.position,y=Ge(3.8,4.4,c);f.eye(c<3.8?"down":"happy"),f.pose(c<3.8?{armR:[30+Math.sin(c*10)*6,-50],armL:[14,-60],head:-8}:{armR:[Et(30,150,y),Et(-50,20,y)],armL:[14,-60]}),m.position.set(M.x+.4,Et(1.05,2.3,y),M.z+.55),Hn(m,v),p.position.copy(m.position),p.material.opacity=y*.6;let C=Ge(5,5.6,c);g.forEach((I,b)=>{I.face(v),I.root.visible=C>.05,I.eye("happy"),I.cheer(c,b,1)});let w=Ge(0,5,c),R=Ge(5,8.1,c);return ri(v,[Et(-1,.2,w)+R*.6,Et(1.6,1.8,w),Et(1.6,3,w)+R*.8],[Et(-.2,-.1,w)+R*.8,Et(1.3,1.9,w),-1.2],-.01),{focus:Et(2.6,4,w)+R*.6,range:1.6+R,blur:13,bloom:.35,bloomT:.9,vig:.55,exposure:1,sat:.55,tint:"#FFE2B0"}},e}var gh=[[dh,0,5.02],[U0,5.02,11.1],[N0,11.1,15.46],[B0,15.46,22.92],[z0,22.92,28.52],[H0,28.52,36.64],[(i,t)=>dh(i,t,!0),36.64,999]];window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(t=>document.fonts.load(t))).catch(()=>{});let i=new Xr(document.getElementById("film3d"));for(let[t,e,n]of gh)i.add(t(e,n));window.addEventListener("hf-seek",t=>i.render(t.detail.time)),i.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
