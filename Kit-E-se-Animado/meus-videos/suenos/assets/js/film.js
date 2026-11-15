var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var lc="170";var ad=0,$c=1,ld=2;var iu=1,cc=2,li=3,Bi=0,an=1,St=2,Zn=0,Ui=1,fn=2,Jc=3,Qc=4,cd=5,ts=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,gd=202,yd=203,Wa=204,Xa=205,vd=206,_d=207,Ed=208,Md=209,xd=210,Sd=211,Ad=212,bd=213,Td=214,qa=0,Ya=1,Za=2,zs=3,$a=4,Ja=5,Qa=6,Ka=7,su=0,wd=1,Rd=2,$n=0,Cd=1,Fd=2,Pd=3,Id=4,Dd=5,Ld=6,Ud=7;var ru=300,Hs=301,ks=302,ja=303,el=304,Xo=306,In=1e3,is=1001,tl=1002,An=1003,Nd=1004;var Wr=1005;var qn=1006,ua=1007;var ss=1008;var di=1009,ou=1010,au=1011,Ar=1012,hc=1013,fi=1014,Yn=1015,mn=1016,uc=1017,dc=1018,Gs=1020,lu=35902,cu=1021,hu=1022,Hn=1023,uu=1024,du=1025,Ns=1026,Vs=1027,fc=1028,pc=1029,fu=1030,mc=1031;var gc=1033,_o=33776,Eo=33777,Mo=33778,xo=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,yl=37816,vl=37817,_l=37818,El=37819,Ml=37820,xl=37821,So=36492,Sl=36494,Al=36495,pu=36283,bl=36284,Tl=36285,wl=36286;var Ao=2300,Rl=2301,da=2302,Kc=2400,jc=2401,eh=2402;var Bd=3200,Ks=3201;var mu=0,Od=1,Di="",Xt="srgb",Vi="srgb-linear",qo="linear",Et="srgb";var gs=7680;var th=519,zd=512,Hd=513,kd=514,gu=515,Gd=516,Vd=517,Wd=518,Xd=519,Cl=35044;var nh="300 es",hi=2e3,bo=2001,Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fa=Math.PI/180,To=180/Math.PI;function Ni(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function dn(n,e,t){return Math.max(e,Math.min(t,n))}function qd(n,e){return(n%e+e)%e}function pa(n,e,t){return(1-t)*n+t*e}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=s[0],m=s[3],f=s[6],M=s[1],S=s[4],v=s[7],C=s[2],T=s[5],R=s[8];return r[0]=o*y+a*M+l*C,r[3]=o*m+a*S+l*T,r[6]=o*f+a*v+l*R,r[1]=c*y+h*M+u*C,r[4]=c*m+h*S+u*T,r[7]=c*f+h*v+u*R,r[2]=d*y+p*M+g*C,r[5]=d*m+p*S+g*T,r[8]=d*f+p*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ma=new Xe;function yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yd(){let n=wo("canvas");return n.style.display="block",n}var ih={};function Mr(n){n in ih||(ih[n]=!0,console.warn(n))}function Zd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function $d(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jd(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ct={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Et&&(n.r=ui(n.r),n.g=ui(n.g),n.b=ui(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Et&&(n.r=Bs(n.r),n.g=Bs(n.g),n.b=Bs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Di?qo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sh=[.64,.33,.3,.6,.15,.06],rh=[.2126,.7152,.0722],oh=[.3127,.329],ah=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[Vi]:{primaries:sh,whitePoint:oh,transfer:qo,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:rh,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:sh,whitePoint:oh,transfer:Et,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:rh,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});var ys,Fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=wo("canvas")),ys.width=e.width,ys.height=e.height;let i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qd=0,Ro=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ga(s[o].image)):r.push(ga(s[o]))}else r=ga(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,pn=class n extends Oi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=is,s=is,r=qn,o=ss,a=Hn,l=di,c=n.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ni(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=ru;pn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(p+1)/2,C=(f+1)/2,T=(h+d)/4,R=(u+y)/4,F=(g+m)/4;return S>v&&S>C?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=R/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=F/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=F/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends Oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ro(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Pl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Co=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,M=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let C=Math.sqrt(S),T=Math.atan2(C,f*M);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let v=a*M;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya=new P,ch=new zi,pi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),qr.subVectors(this.max,ur),vs.subVectors(e.a,ur),_s.subVectors(e.b,ur),Es.subVectors(e.c,ur),wi.subVectors(_s,vs),Ri.subVectors(Es,_s),Zi.subVectors(vs,Es);let t=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-Zi.y,Zi.x,0];return!va(t,vs,_s,Es,qr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,vs,_s,Es,qr))?!1:(Yr.crossVectors(wi,Ri),t=[Yr.x,Yr.y,Yr.z],va(t,vs,_s,Es,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new P,new P,new P,new P,new P,new P,new P,new P],Bn=new P,Xr=new pi,vs=new P,_s=new P,Es=new P,wi=new P,Ri=new P,Zi=new P,ur=new P,qr=new P,Yr=new P,$i=new P;function va(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$i.fromArray(n,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jd=new pi,dr=new P,_a=new P,Hi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(_a)),this.expandByPoint(dr.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new P,Ea=new P,Zr=new P,Ci=new P,Ma=new P,$r=new P,xa=new P,Fo=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ea.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ea);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=Ci.dot(this.direction),l=-Ci.dot(Zr),c=Ci.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector(Zr,d),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);let i=si.dot(this.direction),s=si.dot(si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,s,r){Ma.subVectors(t,e),$r.subVectors(i,e),xa.crossVectors(Ma,$r);let o=this.direction.dot(xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let l=a*this.direction.dot($r.crossVectors(Ci,$r));if(l<0)return null;let c=a*this.direction.dot(Ma.cross(Ci));if(c<0||l+c>o)return null;let h=-a*Ci.dot(xa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,y,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ef,e,tf)}lookAt(e,t,i){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Fi.crossVectors(i,xn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Fi.crossVectors(i,xn)),Fi.normalize(),Jr.crossVectors(xn,Fi),s[0]=Fi.x,s[4]=Jr.x,s[8]=xn.x,s[1]=Fi.y,s[5]=Jr.y,s[9]=xn.y,s[2]=Fi.z,s[6]=Jr.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],M=i[3],S=i[7],v=i[11],C=i[15],T=s[0],R=s[4],F=s[8],A=s[12],E=s[1],w=s[5],O=s[9],z=s[13],V=s[2],j=s[6],q=s[10],re=s[14],X=s[3],ce=s[7],ve=s[11],Fe=s[15];return r[0]=o*T+a*E+l*V+c*X,r[4]=o*R+a*w+l*j+c*ce,r[8]=o*F+a*O+l*q+c*ve,r[12]=o*A+a*z+l*re+c*Fe,r[1]=h*T+u*E+d*V+p*X,r[5]=h*R+u*w+d*j+p*ce,r[9]=h*F+u*O+d*q+p*ve,r[13]=h*A+u*z+d*re+p*Fe,r[2]=g*T+y*E+m*V+f*X,r[6]=g*R+y*w+m*j+f*ce,r[10]=g*F+y*O+m*q+f*ve,r[14]=g*A+y*z+m*re+f*Fe,r[3]=M*T+S*E+v*V+C*X,r[7]=M*R+S*w+v*j+C*ce,r[11]=M*F+S*O+v*q+C*ve,r[15]=M*A+S*z+v*re+C*Fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+y*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],M=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,S=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,C=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,T=t*M+i*S+s*v+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=M*R,e[1]=(y*d*r-u*m*r-y*s*p+i*m*p+u*s*f-i*d*f)*R,e[2]=(a*m*r-y*l*r+y*s*c-i*m*c-a*s*f+i*l*f)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*R,e[4]=S*R,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*R,e[8]=v*R,e[9]=(g*u*r-h*y*r-g*i*p+t*y*p+h*i*f-t*u*f)*R,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*R,e[12]=C*R,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,M=l*c,S=l*h,v=l*u,C=i.x,T=i.y,R=i.z;return s[0]=(1-(y+f))*C,s[1]=(p+v)*C,s[2]=(g-S)*C,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+f))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+S)*R,s[9]=(m-M)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ms.set(s[0],s[1],s[2]).length(),o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);let c=1/r,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=hi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===hi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=hi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h,g,y;if(a===hi)g=(o+r)*u,y=-2*u;else if(a===bo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ms=new P,On=new bt,ef=new P(0,0,0),tf=new P(1,1,1),Fi=new P,Jr=new P,xn=new P,hh=new bt,uh=new zi,Jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uh.setFromEuler(this),this.setFromQuaternion(uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nf=0,dh=new P,xs=new zi,ri=new bt,Qr=new P,fr=new P,sf=new P,rf=new zi,fh=new P(1,0,0),ph=new P(0,1,0),mh=new P(0,0,1),gh={type:"added"},of={type:"removed"},Ss={type:"childadded",child:null},Sa={type:"childremoved",child:null},qt=class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Jn,i=new zi,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Xe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(fr,Qr,this.up):ri.lookAt(Qr,fr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ri),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(of),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};qt.DEFAULT_UP=new P(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new P,oi=new P,Aa=new P,ai=new P,As=new P,bs=new P,yh=new P,ba=new P,Ta=new P,wa=new P,Ra=new xt,Ca=new xt,Fa=new xt,Li=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),oi.subVectors(i,t),Aa.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(oi),l=zn.dot(Aa),c=oi.dot(oi),h=oi.dot(Aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ra.setScalar(0),Ca.setScalar(0),Fa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,i),Fa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Fa,r.z),o}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),oi.subVectors(e,t),zn.cross(oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),zn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,i),bs.subVectors(r,i),ba.subVectors(e,i);let l=As.dot(ba),c=bs.dot(ba);if(l<=0&&c<=0)return t.copy(i);Ta.subVectors(e,s);let h=As.dot(Ta),u=bs.dot(Ta);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(As,o);wa.subVectors(e,r);let p=As.dot(wa),g=bs.dot(wa);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bs,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return yh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(yh,a);let f=1/(m+y+d);return o=y*f,a=d*f,t.copy(i).addScaledVector(As,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=qd(e,1),t=dn(t,0,1),i=dn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Pa(o,r,e+1/3),this.g=Pa(o,r,e),this.b=Pa(o,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=vu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ct.fromWorkingColorSpace(on.copy(this),e),Math.round(dn(on.r*255,0,255))*65536+Math.round(dn(on.g*255,0,255))*256+Math.round(dn(on.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(on.copy(this),t);let i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Xt){ct.fromWorkingColorSpace(on.copy(this),e);let t=on.r,i=on.g,s=on.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Kr);let i=pa(Pi.h,Kr.h,t),s=pa(Pi.s,Kr.s,t),r=pa(Pi.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new ye;ye.NAMES=vu;var af=0,mi=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ni(),this.name="",this.blending=Ui,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ut=class extends mi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new P,jr=new Se,Kt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}};var Io=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Do=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Tt=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},lf=0,Pn=new bt,Ia=new qt,Ts=new P,Sn=new pi,pr=new pi,Qt=new P,Zt=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?Do:Io)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Sn.min,pr.min),Sn.expandByPoint(Qt),Qt.addVectors(Sn.max,pr.max),Sn.expandByPoint(Qt)):(Sn.expandByPoint(pr.min),Sn.expandByPoint(pr.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Qt.add(Ts)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new P,l[F]=new P;let c=new P,h=new P,u=new P,d=new Se,p=new Se,g=new Se,y=new P,m=new P;function f(F,A,E){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,E),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),a[F].add(y),a[A].add(y),a[E].add(y),l[F].add(m),l[A].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,A=M.length;F<A;++F){let E=M[F],w=E.start,O=E.count;for(let z=w,V=w+O;z<V;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new P,v=new P,C=new P,T=new P;function R(F){C.fromBufferAttribute(s,F),T.copy(C);let A=a[F];S.copy(A),S.sub(C.multiplyScalar(C.dot(A))).normalize(),v.crossVectors(T,A);let w=v.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,w)}for(let F=0,A=M.length;F<A;++F){let E=M[F],w=E.start,O=E.count;for(let z=w,V=w+O;z<V;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new bt,Ji=new Fo,eo=new Hi,_h=new P,to=new P,no=new P,io=new P,Da=new P,so=new P,Eh=new P,ro=new P,K=class extends qt{constructor(e=new Zt,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Da.fromBufferAttribute(u,e),o?so.addScaledVector(Da,h):so.addScaledVector(Da.sub(t),h))}t.add(so)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!(eo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(eo,_h)===null||Ji.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(vh.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(vh),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,C=S;v<C;v+=3){let T=a.getX(v),R=a.getX(v+1),F=a.getX(v+2);s=oo(this,f,e,i,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=oo(this,o,e,i,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,C=S;v<C;v+=3){let T=v,R=v+1,F=v+2;s=oo(this,f,e,i,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let M=m,S=m+1,v=m+2;s=oo(this,o,e,i,c,h,u,M,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function cf(n,e,t,i,s,r,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;ro.copy(a),ro.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:n}}function oo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,to),n.getVertexPosition(l,no),n.getVertexPosition(c,io);let h=cf(n,e,t,i,to,no,io,Eh);if(h){let u=new P;Li.getBarycoord(Eh,to,no,io,u),s&&(h.uv=Li.getInterpolatedAttribute(s,a,l,c,u,new Se)),r&&(h.uv1=Li.getInterpolatedAttribute(r,a,l,c,u,new Se)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Li.getNormal(to,no,io,d.normal),h.face=d,h.barycoord=u}return h}var gi=class n extends Zt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(y,m,f,M,S,v,C,T,R,F,A){let E=v/R,w=C/F,O=v/2,z=C/2,V=T/2,j=R+1,q=F+1,re=0,X=0,ce=new P;for(let ve=0;ve<q;ve++){let Fe=ve*w-z;for(let et=0;et<j;et++){let At=et*E-O;ce[y]=At*M,ce[m]=Fe*S,ce[f]=V,c.push(ce.x,ce.y,ce.z),ce[y]=0,ce[m]=0,ce[f]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(et/R),u.push(1-ve/F),re+=1}}for(let ve=0;ve<F;ve++)for(let Fe=0;Fe<R;Fe++){let et=d+Fe+j*ve,At=d+Fe+j*(ve+1),$=d+(Fe+1)+j*(ve+1),oe=d+(Fe+1)+j*ve;l.push(et,At,oe),l.push(At,$,oe),X+=6}a.addGroup(p,X,A),p+=X,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ws(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=Ws(n[t]);for(let s in i)e[s]=i[s]}return e}function hf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _u(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var js={clone:Ws,merge:hn},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends mi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Lo=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new P,Mh=new Se,xh=new Se,nn=class extends Lo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,xh),t.subVectors(xh,Mh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,Rs=1,Dl=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(ws,Rs,e,t);s.layers=this.layers,this.add(s);let r=new nn(ws,Rs,e,t);r.layers=this.layers,this.add(r);let o=new nn(ws,Rs,e,t);o.layers=this.layers,this.add(o);let a=new nn(ws,Rs,e,t);a.layers=this.layers,this.add(a);let l=new nn(ws,Rs,e,t);l.layers=this.layers,this.add(l);let c=new nn(ws,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Uo=class extends pn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ll=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Uo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Zn});r.uniforms.tEquirect.value=t;let o=new K(s,r),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=qn),new Dl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},La=new P,ff=new P,pf=new Xe,ci=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=La.subVectors(i,t).cross(ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(La),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||pf.getNormalMatrix(e),s=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new Hi,ao=new P,br=class{constructor(e=new ci,t=new ci,i=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],M=s[13],S=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-p,v-f).normalize(),i[1].setComponents(l+r,d+c,m+p,v+f).normalize(),i[2].setComponents(l+o,d+h,m+g,v+M).normalize(),i[3].setComponents(l-o,d-h,m-g,v-M).normalize(),i[4].setComponents(l-a,d-u,m-y,v-S).normalize(),t===hi)i[5].setComponents(l+a,d+u,m+y,v+S).normalize();else if(t===bo)i[5].setComponents(a,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function mf(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var De=class n extends Zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let S=0;S<c;S++){let v=S*u-r;g.push(v,-M,0),y.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let S=M+c*f,v=M+c*(f+1),C=M+1+c*(f+1),T=M+1+c*f;p.push(S,v,T),p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
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
}`,x0=`#if DEPTH_PACKING == 3200
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
}`,S0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,F0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,D0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,U0=`#define NORMAL
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
}`,N0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,O0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,k0=`#define TOON
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
}`,G0=`#define TOON
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
}`,V0=`uniform float size;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:gf,alphahash_pars_fragment:yf,alphamap_fragment:vf,alphamap_pars_fragment:_f,alphatest_fragment:Ef,alphatest_pars_fragment:Mf,aomap_fragment:xf,aomap_pars_fragment:Sf,batching_pars_vertex:Af,batching_vertex:bf,begin_vertex:Tf,beginnormal_vertex:wf,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Lf,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Bf,color_vertex:Of,common:zf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Vf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:lp,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:op,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:yp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:Mp,map_fragment:xp,map_pars_fragment:Sp,map_particle_fragment:Ap,map_particle_pars_fragment:bp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Fp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Ip,normal_fragment_begin:Dp,normal_fragment_maps:Lp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:Bp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Gp,opaque_fragment:Vp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Zp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:e0,skinbase_vertex:t0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:s0,specularmap_fragment:r0,specularmap_pars_fragment:o0,tonemapping_fragment:a0,tonemapping_pars_fragment:l0,transmission_fragment:c0,transmission_pars_fragment:h0,uv_pars_fragment:u0,uv_pars_vertex:d0,uv_vertex:f0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:y0,backgroundCube_frag:v0,cube_vert:_0,cube_frag:E0,depth_vert:M0,depth_frag:x0,distanceRGBA_vert:S0,distanceRGBA_frag:A0,equirect_vert:b0,equirect_frag:T0,linedashed_vert:w0,linedashed_frag:R0,meshbasic_vert:C0,meshbasic_frag:F0,meshlambert_vert:P0,meshlambert_frag:I0,meshmatcap_vert:D0,meshmatcap_frag:L0,meshnormal_vert:U0,meshnormal_frag:N0,meshphong_vert:B0,meshphong_frag:O0,meshphysical_vert:z0,meshphysical_frag:H0,meshtoon_vert:k0,meshtoon_frag:G0,points_vert:V0,points_frag:W0,shadow_vert:X0,shadow_frag:q0,sprite_vert:Y0,sprite_frag:Z0},ae={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Wn={basic:{uniforms:hn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:hn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:hn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:hn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:hn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:hn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:hn([ae.points,ae.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:hn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:hn([ae.common,ae.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:hn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:hn([ae.sprite,ae.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:hn([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:hn([ae.lights,ae.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Wn.physical={uniforms:hn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var lo={r:0,b:0,g:0},Ki=new Jn,$0=new bt;function J0(n,e,t,i,s,r,o){let a=new ye(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function y(M){let S=!1,v=g(M);v===null?f(a,l):v&&v.isColor&&(f(v,1),S=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,S){let v=g(S);v&&(v.isCubeTexture||v.mapping===Xo)?(h===void 0&&(h=new K(new gi(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ws(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ki.copy(S.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(Ki)),h.material.toneMapped=ct.getTransfer(v.colorSpace)!==Et,(u!==v||d!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new K(new De(2,2),new en({name:"BackgroundMaterial",uniforms:Ws(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==Et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,S){M.getRGB(lo,_u(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:y,addToRenderList:m}}function Q0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(E,w,O,z,V){let j=!1,q=u(z,O,w);r!==q&&(r=q,c(r.object)),j=p(E,z,O,V),j&&g(E,z,O,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(E,w,O,z),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function u(E,w,O){let z=O.wireframe===!0,V=i[E.id];V===void 0&&(V={},i[E.id]=V);let j=V[w.id];j===void 0&&(j={},V[w.id]=j);let q=j[z];return q===void 0&&(q=d(l()),j[z]=q),q}function d(E){let w=[],O=[],z=[];for(let V=0;V<t;V++)w[V]=0,O[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:z,object:E,attributes:{},index:null}}function p(E,w,O,z){let V=r.attributes,j=w.attributes,q=0,re=O.getAttributes();for(let X in re)if(re[X].location>=0){let ve=V[X],Fe=j[X];if(Fe===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(Fe=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(Fe=E.instanceColor)),ve===void 0||ve.attribute!==Fe||Fe&&ve.data!==Fe.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(E,w,O,z){let V={},j=w.attributes,q=0,re=O.getAttributes();for(let X in re)if(re[X].location>=0){let ve=j[X];ve===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));let Fe={};Fe.attribute=ve,ve&&ve.data&&(Fe.data=ve.data),V[X]=Fe,q++}r.attributes=V,r.attributesNum=q,r.index=z}function y(){let E=r.newAttributes;for(let w=0,O=E.length;w<O;w++)E[w]=0}function m(E){f(E,0)}function f(E,w){let O=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;O[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),V[E]!==w&&(n.vertexAttribDivisor(E,w),V[E]=w)}function M(){let E=r.newAttributes,w=r.enabledAttributes;for(let O=0,z=w.length;O<z;O++)w[O]!==E[O]&&(n.disableVertexAttribArray(O),w[O]=0)}function S(E,w,O,z,V,j,q){q===!0?n.vertexAttribIPointer(E,w,O,V,j):n.vertexAttribPointer(E,w,O,z,V,j)}function v(E,w,O,z){y();let V=z.attributes,j=O.getAttributes(),q=w.defaultAttributeValues;for(let re in j){let X=j[re];if(X.location>=0){let ce=V[re];if(ce===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){let ve=ce.normalized,Fe=ce.itemSize,et=e.get(ce);if(et===void 0)continue;let At=et.buffer,$=et.type,oe=et.bytesPerElement,we=$===n.INT||$===n.UNSIGNED_INT||ce.gpuType===hc;if(ce.isInterleavedBufferAttribute){let he=ce.data,Be=he.stride,Ge=ce.offset;if(he.isInstancedInterleavedBuffer){for(let tt=0;tt<X.locationSize;tt++)f(X.location+tt,he.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt);n.bindBuffer(n.ARRAY_BUFFER,At);for(let tt=0;tt<X.locationSize;tt++)S(X.location+tt,Fe/X.locationSize,$,ve,Be*oe,(Ge+Fe/X.locationSize*tt)*oe,we)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)f(X.location+he,ce.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<X.locationSize;he++)m(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,At);for(let he=0;he<X.locationSize;he++)S(X.location+he,Fe/X.locationSize,$,ve,Fe*oe,Fe/X.locationSize*he*oe,we)}}else if(q!==void 0){let ve=q[re];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(X.location,ve);break;case 3:n.vertexAttrib3fv(X.location,ve);break;case 4:n.vertexAttrib4fv(X.location,ve);break;default:n.vertexAttrib1fv(X.location,ve)}}}}M()}function C(){F();for(let E in i){let w=i[E];for(let O in w){let z=w[O];for(let V in z)h(z[V].object),delete z[V];delete w[O]}delete i[E]}}function T(E){if(i[E.id]===void 0)return;let w=i[E.id];for(let O in w){let z=w[O];for(let V in z)h(z[V].object),delete z[V];delete w[O]}delete i[E.id]}function R(E){for(let w in i){let O=i[w];if(O[E.id]===void 0)continue;let z=O[E.id];for(let V in z)h(z[V].object),delete z[V];delete O[E.id]}}function F(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function K0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Hn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let F=R===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==di&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yn&&!F)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:C,maxSamples:T}}function em(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ci,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,S=M*4,v=f.clippingState||null;l.value=v,v=h(g,d,S,p);for(let C=0;C!==S;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==y;++S,v+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function tm(n){let e=new WeakMap;function t(o,a){return a===ja?o.mapping=Hs:a===el&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ja||a===el)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ll(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Xs=class extends Lo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=4,Sh=[.125,.215,.35,.446,.526,.582],ns=20,Ua=new Xs,Ah=new ye,Na=null,Ba=0,Oa=0,za=!1,es=(1+Math.sqrt(5))/2,Cs=1/es,bh=[new P(-es,Cs,0),new P(es,Cs,0),new P(-Cs,0,es),new P(Cs,0,es),new P(0,es,-Cs),new P(0,es,Cs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],No=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Na=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Ba,Oa),this._renderer.xr.enabled=za,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:mn,format:Hn,colorSpace:Vi,depthBuffer:!1},s=Th(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(r)),this._blurMaterial=im(r,e,t)}return s}_compileMaterial(e){let t=new K(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,s){let a=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ah),h.toneMapping=$n,h.autoClear=!1;let p=new ut({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new K(new gi,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Ah),y=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let S=this._cubeSize;co(s,M*S,f>2?S:0,S,S),h.setRenderTarget(s),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Hs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new K(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ua)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new K(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let f=[],M=0;for(let R=0;R<ns;++R){let F=R/y,A=Math.exp(-F*F/2);f.push(A),R===0?M+=A:R<m&&(M+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;let v=this._sizeLods[s],C=3*v*(s>S-Us?s-S+Us:0),T=4*(this._cubeSize-v);co(t,C,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Ua)}};function nm(n){let e=[],t=[],i=[],s=n,r=n-Us+1+Sh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Us?l=Sh[o-n+Us-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,M=new Float32Array(y*g*p),S=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,F=T>2?0:-1,A=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];M.set(A,y*g*T),S.set(d,m*g*T);let E=[T,T,T,T,T,T];v.set(E,f*g*T)}let C=new Zt;C.setAttribute("position",new Kt(M,y)),C.setAttribute("uv",new Kt(S,m)),C.setAttribute("faceIndex",new Kt(v,f)),e.push(C),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Th(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function im(n,e,t){let i=new Float32Array(ns),s=new P(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function wh(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rh(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function sm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ja||l===el,h=l===Hs||l===ks;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new No(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new No(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function rm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Mr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function om(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let M=p.array;y=p.version;for(let S=0,v=M.length;S<v;S+=3){let C=M[S+0],T=M[S+1],R=M[S+2];d.push(C,T,T,R,R,C)}}else if(g!==void 0){let M=g.array;y=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){let C=S+0,T=S+1,R=S+2;d.push(C,T,T,R,R,C)}}else return;let m=new(yu(d)?Do:Io)(d,1);m.version=y;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function am(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,y,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*y[M];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cm(n,e,t){let i=new WeakMap,s=new xt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let A=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),y===!0&&(S=3);let v=a.attributes.position.count*S,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*C*4*u),R=new Co(T,v,C,u);R.type=Yn,R.needsUpdate=!0;let F=S*4;for(let E=0;E<u;E++){let w=m[E],O=f[E],z=M[E],V=v*C*4*E;for(let j=0;j<w.count;j++){let q=j*F;p===!0&&(s.fromBufferAttribute(w,j),T[V+q+0]=s.x,T[V+q+1]=s.y,T[V+q+2]=s.z,T[V+q+3]=0),g===!0&&(s.fromBufferAttribute(O,j),T[V+q+4]=s.x,T[V+q+5]=s.y,T[V+q+6]=s.z,T[V+q+7]=0),y===!0&&(s.fromBufferAttribute(z,j),T[V+q+8]=s.x,T[V+q+9]=s.y,T[V+q+10]=s.z,T[V+q+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Se(v,C)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function hm(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var qs=class extends pn{constructor(e,t,i,s,r,o,a,l,c,h=Ns){if(h!==Ns&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ns&&(i=fi),i===void 0&&h===Vs&&(i=Gs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mu=new pn,Ch=new qs(1,1),xu=new Co,Su=new Il,Au=new Uo,Fh=[],Ph=[],Ih=new Float32Array(16),Dh=new Float32Array(9),Lh=new Float32Array(4);function er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yo(n,e){let t=Ph[e];t===void 0&&(t=new Int32Array(e),Ph[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function um(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function fm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function pm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function mm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Jt(t,i)}}function gm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Dh.set(i),n.uniformMatrix3fv(this.addr,!1,Dh),Jt(t,i)}}function ym(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Ih.set(i),n.uniformMatrix4fv(this.addr,!1,Ih),Jt(t,i)}}function vm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Em(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Mm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function xm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Sm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Am(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function bm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Tm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ch.compareFunction=gu,r=Ch):r=Mu,t.setTexture2D(e||r,s)}function wm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Su,s)}function Rm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Au,s)}function Cm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xu,s)}function Fm(n){switch(n){case 5126:return um;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return ym;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return Em;case 35669:case 35673:return Mm;case 5125:return xm;case 36294:return Sm;case 36295:return Am;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Pm(n,e){n.uniform1fv(this.addr,e)}function Im(n,e){let t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function Dm(n,e){let t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Lm(n,e){let t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Um(n,e){let t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nm(n,e){let t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bm(n,e){let t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Om(n,e){n.uniform1iv(this.addr,e)}function zm(n,e){n.uniform2iv(this.addr,e)}function Hm(n,e){n.uniform3iv(this.addr,e)}function km(n,e){n.uniform4iv(this.addr,e)}function Gm(n,e){n.uniform1uiv(this.addr,e)}function Vm(n,e){n.uniform2uiv(this.addr,e)}function Wm(n,e){n.uniform3uiv(this.addr,e)}function Xm(n,e){n.uniform4uiv(this.addr,e)}function qm(n,e,t){let i=this.cache,s=e.length,r=Yo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mu,r[o])}function Ym(n,e,t){let i=this.cache,s=e.length,r=Yo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Su,r[o])}function Zm(n,e,t){let i=this.cache,s=e.length,r=Yo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Au,r[o])}function $m(n,e,t){let i=this.cache,s=e.length,r=Yo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xu,r[o])}function Jm(n){switch(n){case 5126:return Pm;case 35664:return Im;case 35665:return Dm;case 35666:return Lm;case 35674:return Um;case 35675:return Nm;case 35676:return Bm;case 5124:case 35670:return Om;case 35667:case 35671:return zm;case 35668:case 35672:return Hm;case 35669:case 35673:return km;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}var Ul=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fm(t.type)}},Nl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jm(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ha=/(\w+)(\])?(\[|\.)?/g;function Uh(n,e){n.seq.push(e),n.map[e.id]=e}function Qm(n,e,t){let i=n.name,s=i.length;for(Ha.lastIndex=0;;){let r=Ha.exec(i),o=Ha.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uh(t,c===void 0?new Ul(a,n,e):new Nl(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Bl(a),Uh(t,u)),t=u}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Qm(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Nh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Km=37297,jm=0;function e1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Bh=new Xe;function t1(n){ct._getMatrix(Bh,ct.workingColorSpace,n);let e=`mat3( ${Bh.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case qo:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+e1(n.getShaderSource(e),o)}else return s}function n1(n,e){let t=t1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function i1(n,e){let t;switch(e){case Cd:t="Linear";break;case Fd:t="Reinhard";break;case Pd:t="Cineon";break;case Id:t="ACESFilmic";break;case Ld:t="AgX";break;case Ud:t="Neutral";break;case Dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ho=new P;function s1(){ct.getLuminanceCoefficients(ho);let n=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function o1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xr(n){return n!==""}function zh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(n){return n.replace(l1,h1)}var c1=new Map;function h1(n,e){let t=Je[e];if(t===void 0){let i=c1.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}var u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(n){return n.replace(u1,d1)}function d1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function f1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function p1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hs:case ks:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function g1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Rd:e="ENVMAP_BLENDING_ADD";break}return e}function y1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function v1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=f1(t),c=p1(t),h=m1(t),u=g1(t),d=y1(t),p=r1(t),g=o1(r),y=s.createProgram(),m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),f=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Je.tonemapping_pars_fragment:"",t.toneMapping!==$n?i1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,n1("linearToOutputTexel",t.outputColorSpace),s1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=Ol(o),o=zh(o,t),o=Hh(o,t),a=Ol(a),a=zh(a,t),a=Hh(a,t),o=kh(o),a=kh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=M+m+o,v=M+f+a,C=Nh(s,s.VERTEX_SHADER,S),T=Nh(s,s.FRAGMENT_SHADER,v);s.attachShader(y,C),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(w){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(T).trim(),j=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,C,T);else{let re=Oh(s,C,"vertex"),X=Oh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+re+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||V==="")&&(q=!1);q&&(w.diagnostics={runnable:j,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(C),s.deleteShader(T),F=new Os(s,y),A=a1(s,y)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,Km)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jm++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var _1=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Hl(e),t.set(e,i)),i}},Hl=class{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}};function E1(n,e,t,i,s,r,o){let a=new Po,l=new zl,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,E,w,O,z){let V=O.fog,j=z.geometry,q=A.isMeshStandardMaterial?O.environment:null,re=(A.isMeshStandardMaterial?t:e).get(A.envMap||q),X=re&&re.mapping===Xo?re.image.height:null,ce=g[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));let ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Fe=ve!==void 0?ve.length:0,et=0;j.morphAttributes.position!==void 0&&(et=1),j.morphAttributes.normal!==void 0&&(et=2),j.morphAttributes.color!==void 0&&(et=3);let At,$,oe,we;if(ce){let yt=Wn[ce];At=yt.vertexShader,$=yt.fragmentShader}else At=A.vertexShader,$=A.fragmentShader,l.update(A),oe=l.getVertexShaderID(A),we=l.getFragmentShaderID(A);let he=n.getRenderTarget(),Be=n.state.buffers.depth.getReversed(),Ge=z.isInstancedMesh===!0,tt=z.isBatchedMesh===!0,Nt=!!A.map,at=!!A.matcap,Wt=!!re,U=!!A.aoMap,Cn=!!A.lightMap,st=!!A.bumpMap,rt=!!A.normalMap,Le=!!A.displacementMap,Pt=!!A.emissiveMap,Ie=!!A.metalnessMap,b=!!A.roughnessMap,_=A.anisotropy>0,H=A.clearcoat>0,J=A.dispersion>0,ee=A.iridescence>0,Z=A.sheen>0,Re=A.transmission>0,ue=_&&!!A.anisotropyMap,_e=H&&!!A.clearcoatMap,lt=H&&!!A.clearcoatNormalMap,ie=H&&!!A.clearcoatRoughnessMap,Ee=ee&&!!A.iridescenceMap,Ue=ee&&!!A.iridescenceThicknessMap,He=Z&&!!A.sheenColorMap,Me=Z&&!!A.sheenRoughnessMap,ot=!!A.specularMap,$e=!!A.specularColorMap,Rt=!!A.specularIntensityMap,I=Re&&!!A.transmissionMap,le=Re&&!!A.thicknessMap,W=!!A.gradientMap,Q=!!A.alphaMap,pe=A.alphaTest>0,de=!!A.alphaHash,Ve=!!A.extensions,zt=$n;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(zt=n.toneMapping);let sn={shaderID:ce,shaderType:A.type,shaderName:A.name,vertexShader:At,fragmentShader:$,defines:A.defines,customVertexShaderID:oe,customFragmentShaderID:we,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:tt,batchingColor:tt&&z._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&z.instanceColor!==null,instancingMorph:Ge&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Vi,alphaToCoverage:!!A.alphaToCoverage,map:Nt,matcap:at,envMap:Wt,envMapMode:Wt&&re.mapping,envMapCubeUVHeight:X,aoMap:U,lightMap:Cn,bumpMap:st,normalMap:rt,displacementMap:d&&Le,emissiveMap:Pt,normalMapObjectSpace:rt&&A.normalMapType===Od,normalMapTangentSpace:rt&&A.normalMapType===mu,metalnessMap:Ie,roughnessMap:b,anisotropy:_,anisotropyMap:ue,clearcoat:H,clearcoatMap:_e,clearcoatNormalMap:lt,clearcoatRoughnessMap:ie,dispersion:J,iridescence:ee,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:Z,sheenColorMap:He,sheenRoughnessMap:Me,specularMap:ot,specularColorMap:$e,specularIntensityMap:Rt,transmission:Re,transmissionMap:I,thicknessMap:le,gradientMap:W,opaque:A.transparent===!1&&A.blending===Ui&&A.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:de,combine:A.combine,mapUv:Nt&&y(A.map.channel),aoMapUv:U&&y(A.aoMap.channel),lightMapUv:Cn&&y(A.lightMap.channel),bumpMapUv:st&&y(A.bumpMap.channel),normalMapUv:rt&&y(A.normalMap.channel),displacementMapUv:Le&&y(A.displacementMap.channel),emissiveMapUv:Pt&&y(A.emissiveMap.channel),metalnessMapUv:Ie&&y(A.metalnessMap.channel),roughnessMapUv:b&&y(A.roughnessMap.channel),anisotropyMapUv:ue&&y(A.anisotropyMap.channel),clearcoatMapUv:_e&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:lt&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:He&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:Me&&y(A.sheenRoughnessMap.channel),specularMapUv:ot&&y(A.specularMap.channel),specularColorMapUv:$e&&y(A.specularColorMap.channel),specularIntensityMapUv:Rt&&y(A.specularIntensityMap.channel),transmissionMapUv:I&&y(A.transmissionMap.channel),thicknessMapUv:le&&y(A.thicknessMap.channel),alphaMapUv:Q&&y(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(rt||_),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Nt||Q),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Be,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:Nt&&A.map.isVideoTexture===!0&&ct.getTransfer(A.map.colorSpace)===Et,decodeVideoTextureEmissive:Pt&&A.emissiveMap.isVideoTexture===!0&&ct.getTransfer(A.emissiveMap.colorSpace)===Et,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===St,flipSided:A.side===an,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ve&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&A.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return sn.vertexUv1s=c.has(1),sn.vertexUv2s=c.has(2),sn.vertexUv3s=c.has(3),c.clear(),sn}function f(A){let E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(let w in A.defines)E.push(w),E.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(M(E,A),S(E,A),E.push(n.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function M(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function S(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function v(A){let E=g[A.type],w;if(E){let O=Wn[E];w=js.clone(O.uniforms)}else w=A.uniforms;return w}function C(A,E){let w;for(let O=0,z=h.length;O<z;O++){let V=h[O];if(V.cacheKey===E){w=V,++w.usedTimes;break}}return w===void 0&&(w=new v1(n,E,A,r),h.push(w)),w}function T(A){if(--A.usedTimes===0){let E=h.indexOf(A);h[E]=h[h.length-1],h.pop(),A.destroy()}}function R(A){l.remove(A)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:F}}function M1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function x1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,y,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||x1),i.length>1&&i.sort(d||Vh),s.length>1&&s.sort(d||Vh)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function S1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Wh,n.set(i,[o])):s>=r.length?(o=new Wh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function A1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ye};break;case"SpotLight":t={position:new P,direction:new P,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function b1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var T1=0;function w1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R1(n){let e=new A1,t=b1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new bt,o=new bt;function a(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,M=0,S=0,v=0,C=0,T=0,R=0;c.sort(w1);for(let A=0,E=c.length;A<E;A++){let w=c[A],O=w.color,z=w.intensity,V=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(w.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(w.sh.coefficients[q],z);R++}else if(w.isDirectionalLight){let q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let re=w.shadow,X=t.get(w);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=w.shadow.matrix,M++}i.directional[p]=q,p++}else if(w.isSpotLight){let q=e.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(O).multiplyScalar(z),q.distance=V,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,i.spot[y]=q;let re=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,re.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[y]=re.matrix,w.castShadow){let X=t.get(w);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=j,v++}y++}else if(w.isRectAreaLight){let q=e.get(w);q.color.copy(O).multiplyScalar(z),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=q,m++}else if(w.isPointLight){let q=e.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){let re=w.shadow,X=t.get(w);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=w.shadow.matrix,S++}i.point[g]=q,g++}else if(w.isHemisphereLight){let q=e.get(w);q.skyColor.copy(w.color).multiplyScalar(z),q.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[f]=q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==M||F.numPointShadows!==S||F.numSpotShadows!==v||F.numSpotMaps!==C||F.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,F.directionalLength=p,F.pointLength=g,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=M,F.numPointShadows=S,F.numSpotShadows=v,F.numSpotMaps=C,F.numLightProbes=R,i.version=T1++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let S=c[f];if(S.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Xh(n){let e=new R1(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function C1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Xh(n),e.set(s,[a])):r>=o.length?(a=new Xh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ki=class extends mi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends mi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P1=`uniform sampler2D shadow_pass;
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
}`;function I1(n,e,t){let i=new br,s=new Se,r=new Se,o=new xt,a=new ki({depthPacking:Ks}),l=new kl,c={},h=t.maxTextureSize,u={[Bi]:an,[an]:Bi,[St]:St},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:F1,fragmentShader:P1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new K(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let f=this.type;this.render=function(T,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let A=n.getRenderTarget(),E=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Zn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=f!==li&&this.type===li,V=f===li&&this.type!==li;for(let j=0,q=T.length;j<q;j++){let re=T[j],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ce=X.getFrameExtents();if(s.multiply(ce),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,X.mapSize.y=r.y)),X.map===null||z===!0||V===!0){let Fe=this.type!==li?{minFilter:An,magFilter:An}:{};X.map!==null&&X.map.dispose(),X.map=new jt(s.x,s.y,Fe),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();let ve=X.getViewportCount();for(let Fe=0;Fe<ve;Fe++){let et=X.getViewport(Fe);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),O.viewport(o),X.updateMatrices(re,Fe),i=X.getFrustum(),v(R,F,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===li&&M(X,F),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(A,E,w)};function M(T,R){let F=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jt(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,F,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,F,p,y,null)}function S(T,R,F,A){let E=null,w=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)E=w;else if(E=F.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=E.uuid,z=R.uuid,V=c[O];V===void 0&&(V={},c[O]=V);let j=V[z];j===void 0&&(j=E.clone(),V[z]=j,R.addEventListener("dispose",C)),E=j}if(E.visible=R.visible,E.wireframe=R.wireframe,A===li?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=n.properties.get(E);O.light=F}return E}function v(T,R,F,A,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===li)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let z=e.update(T),V=T.material;if(Array.isArray(V)){let j=z.groups;for(let q=0,re=j.length;q<re;q++){let X=j[q],ce=V[X.materialIndex];if(ce&&ce.visible){let ve=S(T,ce,A,E);T.onBeforeShadow(n,T,R,F,z,ve,X),n.renderBufferDirect(F,null,z,ve,T,X),T.onAfterShadow(n,T,R,F,z,ve,X)}}}else if(V.visible){let j=S(T,V,A,E);T.onBeforeShadow(n,T,R,F,z,j,null),n.renderBufferDirect(F,null,z,j,T,null),T.onAfterShadow(n,T,R,F,z,j,null)}}let O=T.children;for(let z=0,V=O.length;z<V;z++)v(O[z],R,F,A,E)}function C(T){T.target.removeEventListener("dispose",C);for(let F in c){let A=c[F],E=T.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}var D1={[qa]:Ya,[Za]:Qa,[$a]:Ka,[zs]:Ja,[Ya]:qa,[Qa]:Za,[Ka]:$a,[Ja]:zs};function L1(n,e){function t(){let I=!1,le=new xt,W=null,Q=new xt(0,0,0,0);return{setMask:function(pe){W!==pe&&!I&&(n.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){I=pe},setClear:function(pe,de,Ve,zt,sn){sn===!0&&(pe*=zt,de*=zt,Ve*=zt),le.set(pe,de,Ve,zt),Q.equals(le)===!1&&(n.clearColor(pe,de,Ve,zt),Q.copy(le))},reset:function(){I=!1,W=null,Q.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,W=null,Q=null,pe=null;return{setReversed:function(de){if(le!==de){let Ve=e.get("EXT_clip_control");le?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let zt=pe;pe=null,this.setClear(zt)}le=de},getReversed:function(){return le},setTest:function(de){de?he(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(de){W!==de&&!I&&(n.depthMask(de),W=de)},setFunc:function(de){if(le&&(de=D1[de]),Q!==de){switch(de){case qa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case Ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=de}},setLocked:function(de){I=de},setClear:function(de){pe!==de&&(le&&(de=1-de),n.clearDepth(de),pe=de)},reset:function(){I=!1,W=null,Q=null,pe=null,le=!1}}}function s(){let I=!1,le=null,W=null,Q=null,pe=null,de=null,Ve=null,zt=null,sn=null;return{setTest:function(yt){I||(yt?he(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(yt){le!==yt&&!I&&(n.stencilMask(yt),le=yt)},setFunc:function(yt,Un,ti){(W!==yt||Q!==Un||pe!==ti)&&(n.stencilFunc(yt,Un,ti),W=yt,Q=Un,pe=ti)},setOp:function(yt,Un,ti){(de!==yt||Ve!==Un||zt!==ti)&&(n.stencilOp(yt,Un,ti),de=yt,Ve=Un,zt=ti)},setLocked:function(yt){I=yt},setClear:function(yt){sn!==yt&&(n.clearStencil(yt),sn=yt)},reset:function(){I=!1,le=null,W=null,Q=null,pe=null,de=null,Ve=null,zt=null,sn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,M=null,S=null,v=null,C=null,T=null,R=new ye(0,0,0),F=0,A=!1,E=null,w=null,O=null,z=null,V=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,re=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=re>=2);let ce=null,ve={},Fe=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),At=new xt().fromArray(Fe),$=new xt().fromArray(et);function oe(I,le,W,Q){let pe=new Uint8Array(4),de=n.createTexture();n.bindTexture(I,de),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<W;Ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(le+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return de}let we={};we[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(zs),st(!1),rt($c),he(n.CULL_FACE),U(Zn);function he(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Be(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ge(I,le){return u[I]!==le?(n.bindFramebuffer(I,le),u[I]=le,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function tt(I,le){let W=p,Q=!1;if(I){W=d.get(le),W===void 0&&(W=[],d.set(le,W));let pe=I.textures;if(W.length!==pe.length||W[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ve=pe.length;de<Ve;de++)W[de]=n.COLOR_ATTACHMENT0+de;W.length=pe.length,Q=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Q=!0);Q&&n.drawBuffers(W)}function Nt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}let at={[ts]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[ud]:n.FUNC_REVERSE_SUBTRACT};at[dd]=n.MIN,at[fd]=n.MAX;let Wt={[pd]:n.ZERO,[md]:n.ONE,[gd]:n.SRC_COLOR,[Wa]:n.SRC_ALPHA,[xd]:n.SRC_ALPHA_SATURATE,[Ed]:n.DST_COLOR,[vd]:n.DST_ALPHA,[yd]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[Md]:n.ONE_MINUS_DST_COLOR,[_d]:n.ONE_MINUS_DST_ALPHA,[Sd]:n.CONSTANT_COLOR,[Ad]:n.ONE_MINUS_CONSTANT_COLOR,[bd]:n.CONSTANT_ALPHA,[Td]:n.ONE_MINUS_CONSTANT_ALPHA};function U(I,le,W,Q,pe,de,Ve,zt,sn,yt){if(I===Zn){y===!0&&(Be(n.BLEND),y=!1);return}if(y===!1&&(he(n.BLEND),y=!0),I!==cd){if(I!==m||yt!==A){if((f!==ts||v!==ts)&&(n.blendEquation(n.FUNC_ADD),f=ts,v=ts),yt)switch(I){case Ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fn:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,C=null,T=null,R.set(0,0,0),F=0,m=I,A=yt}return}pe=pe||le,de=de||W,Ve=Ve||Q,(le!==f||pe!==v)&&(n.blendEquationSeparate(at[le],at[pe]),f=le,v=pe),(W!==M||Q!==S||de!==C||Ve!==T)&&(n.blendFuncSeparate(Wt[W],Wt[Q],Wt[de],Wt[Ve]),M=W,S=Q,C=de,T=Ve),(zt.equals(R)===!1||sn!==F)&&(n.blendColor(zt.r,zt.g,zt.b,sn),R.copy(zt),F=sn),m=I,A=!1}function Cn(I,le){I.side===St?Be(n.CULL_FACE):he(n.CULL_FACE);let W=I.side===an;le&&(W=!W),st(W),I.blending===Ui&&I.transparent===!1?U(Zn):U(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function rt(I){I!==ad?(he(n.CULL_FACE),I!==w&&(I===$c?n.cullFace(n.BACK):I===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),w=I}function Le(I){I!==O&&(q&&n.lineWidth(I),O=I)}function Pt(I,le,W){I?(he(n.POLYGON_OFFSET_FILL),(z!==le||V!==W)&&(n.polygonOffset(le,W),z=le,V=W)):Be(n.POLYGON_OFFSET_FILL)}function Ie(I){I?he(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function b(I){I===void 0&&(I=n.TEXTURE0+j-1),ce!==I&&(n.activeTexture(I),ce=I)}function _(I,le,W){W===void 0&&(ce===null?W=n.TEXTURE0+j-1:W=ce);let Q=ve[W];Q===void 0&&(Q={type:void 0,texture:void 0},ve[W]=Q),(Q.type!==I||Q.texture!==le)&&(ce!==W&&(n.activeTexture(W),ce=W),n.bindTexture(I,le||we[I]),Q.type=I,Q.texture=le)}function H(){let I=ve[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(I){At.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),At.copy(I))}function Me(I){$.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function ot(I,le){let W=c.get(le);W===void 0&&(W=new WeakMap,c.set(le,W));let Q=W.get(I);Q===void 0&&(Q=n.getUniformBlockIndex(le,I.name),W.set(I,Q))}function $e(I,le){let Q=c.get(le).get(I);l.get(le)!==Q&&(n.uniformBlockBinding(le,Q,I.__bindingPointIndex),l.set(le,Q))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,ve={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,M=null,S=null,v=null,C=null,T=null,R=new ye(0,0,0),F=0,A=!1,E=null,w=null,O=null,z=null,V=null,At.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Be,bindFramebuffer:Ge,drawBuffers:tt,useProgram:Nt,setBlending:U,setMaterial:Cn,setFlipSided:st,setCullFace:rt,setLineWidth:Le,setPolygonOffset:Pt,setScissorTest:Ie,activeTexture:b,bindTexture:_,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:Ee,texImage3D:Ue,updateUBOMapping:ot,uniformBlockBinding:$e,texStorage2D:lt,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Re,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:He,viewport:Me,reset:Rt}}function qh(n,e,t,i){let s=U1(i);switch(t){case cu:return n*e;case uu:return n*e;case du:return n*e*2;case fc:return n*e/s.components*s.byteLength;case pc:return n*e/s.components*s.byteLength;case fu:return n*e*2/s.components*s.byteLength;case mc:return n*e*2/s.components*s.byteLength;case hu:return n*e*3/s.components*s.byteLength;case Hn:return n*e*4/s.components*s.byteLength;case gc:return n*e*4/s.components*s.byteLength;case _o:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mo:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(e,8)/2;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case So:case Sl:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pu:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tl:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U1(n){switch(n){case di:case ou:return{byteLength:1,components:1};case Ar:case au:case mn:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case fi:case hc:case Yn:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function N1(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):wo("canvas")}function y(b,_,H){let J=1,ee=Ie(b);if((ee.width>H||ee.height>H)&&(J=H/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let Z=Math.floor(J*ee.width),Re=Math.floor(J*ee.height);u===void 0&&(u=g(Z,Re));let ue=_?g(Z,Re):u;return ue.width=Z,ue.height=Re,ue.getContext("2d").drawImage(b,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Re+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function M(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,_,H,J,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=_;if(_===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),_===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),H===n.UNSIGNED_INT&&(Z=n.RGB32UI),H===n.BYTE&&(Z=n.RGB8I),H===n.SHORT&&(Z=n.RGB16I),H===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),H===n.UNSIGNED_INT&&(Z=n.RGBA32UI),H===n.BYTE&&(Z=n.RGBA8I),H===n.SHORT&&(Z=n.RGBA16I),H===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),_===n.RGBA){let Re=ee?qo:ct.getTransfer(J);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=Re===Et?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(b,_){let H;return b?_===null||_===fi||_===Gs?H=n.DEPTH24_STENCIL8:_===Yn?H=n.DEPTH32F_STENCIL8:_===Ar&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===Gs?H=n.DEPTH_COMPONENT24:_===Yn?H=n.DEPTH_COMPONENT32F:_===Ar&&(H=n.DEPTH_COMPONENT16),H}function C(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==An&&b.minFilter!==qn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){let _=b.target;_.removeEventListener("dispose",T),F(_),_.isVideoTexture&&h.delete(_)}function R(b){let _=b.target;_.removeEventListener("dispose",R),E(_)}function F(b){let _=i.get(b);if(_.__webglInit===void 0)return;let H=b.source,J=d.get(H);if(J){let ee=J[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(b),Object.keys(J).length===0&&d.delete(H)}i.remove(b)}function A(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let H=b.source,J=d.get(H);delete J[_.__cacheKey],o.memory.textures--}function E(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ee=0;ee<_.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(_.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)n.deleteFramebuffer(_.__webglFramebuffer[J]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=b.textures;for(let J=0,ee=H.length;J<ee;J++){let Z=i.get(H[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(H[J])}i.remove(b)}let w=0;function O(){w=0}function z(){let b=w;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),w+=1,b}function V(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function j(b,_){let H=i.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){let J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,b,_);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+_)}function q(b,_){let H=i.get(b);if(b.version>0&&H.__version!==b.version){$(H,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+_)}function re(b,_){let H=i.get(b);if(b.version>0&&H.__version!==b.version){$(H,b,_);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+_)}function X(b,_){let H=i.get(b);if(b.version>0&&H.__version!==b.version){oe(H,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+_)}let ce={[In]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},ve={[An]:n.NEAREST,[Nd]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},Fe={[zd]:n.NEVER,[Xd]:n.ALWAYS,[Hd]:n.LESS,[gu]:n.LEQUAL,[kd]:n.EQUAL,[Wd]:n.GEQUAL,[Gd]:n.GREATER,[Vd]:n.NOTEQUAL};function et(b,_){if(_.type===Yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===qn||_.magFilter===ua||_.magFilter===Wr||_.magFilter===ss||_.minFilter===qn||_.minFilter===ua||_.minFilter===Wr||_.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ce[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ce[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ce[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ve[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===An||_.minFilter!==Wr&&_.minFilter!==ss||_.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function At(b,_){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",T));let J=_.source,ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));let Z=V(_);if(Z!==b.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[Z].usedTimes++;let Re=ee[b.__cacheKey];Re!==void 0&&(ee[b.__cacheKey].usedTimes--,Re.usedTimes===0&&A(_)),b.__cacheKey=Z,b.__webglTexture=ee[Z].texture}return H}function $(b,_,H){let J=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=n.TEXTURE_3D);let ee=At(b,_),Z=_.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+H);let Re=i.get(Z);if(Z.version!==Re.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);let ue=ct.getPrimaries(ct.workingColorSpace),_e=_.colorSpace===Di?null:ct.getPrimaries(_.colorSpace),lt=_.colorSpace===Di||ue===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ie=y(_.image,!1,s.maxTextureSize);ie=Pt(_,ie);let Ee=r.convert(_.format,_.colorSpace),Ue=r.convert(_.type),He=S(_.internalFormat,Ee,Ue,_.colorSpace,_.isVideoTexture);et(J,_);let Me,ot=_.mipmaps,$e=_.isVideoTexture!==!0,Rt=Re.__version===void 0||ee===!0,I=Z.dataReady,le=C(_,ie);if(_.isDepthTexture)He=v(_.format===Vs,_.type),Rt&&($e?t.texStorage2D(n.TEXTURE_2D,1,He,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,He,ie.width,ie.height,0,Ee,Ue,null));else if(_.isDataTexture)if(ot.length>0){$e&&Rt&&t.texStorage2D(n.TEXTURE_2D,le,He,ot[0].width,ot[0].height);for(let W=0,Q=ot.length;W<Q;W++)Me=ot[W],$e?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,Ee,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,W,He,Me.width,Me.height,0,Ee,Ue,Me.data);_.generateMipmaps=!1}else $e?(Rt&&t.texStorage2D(n.TEXTURE_2D,le,He,ie.width,ie.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Ee,Ue,ie.data)):t.texImage2D(n.TEXTURE_2D,0,He,ie.width,ie.height,0,Ee,Ue,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,He,ot[0].width,ot[0].height,ie.depth);for(let W=0,Q=ot.length;W<Q;W++)if(Me=ot[W],_.format!==Hn)if(Ee!==null)if($e){if(I)if(_.layerUpdates.size>0){let pe=qh(Me.width,Me.height,_.format,_.type);for(let de of _.layerUpdates){let Ve=Me.data.subarray(de*pe/Me.data.BYTES_PER_ELEMENT,(de+1)*pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,de,Me.width,Me.height,1,Ee,Ve)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,ie.depth,Ee,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,He,Me.width,Me.height,ie.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,Me.width,Me.height,ie.depth,Ee,Ue,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,He,Me.width,Me.height,ie.depth,0,Ee,Ue,Me.data)}else{$e&&Rt&&t.texStorage2D(n.TEXTURE_2D,le,He,ot[0].width,ot[0].height);for(let W=0,Q=ot.length;W<Q;W++)Me=ot[W],_.format!==Hn?Ee!==null?$e?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,W,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Me.width,Me.height,Ee,Ue,Me.data):t.texImage2D(n.TEXTURE_2D,W,He,Me.width,Me.height,0,Ee,Ue,Me.data)}else if(_.isDataArrayTexture)if($e){if(Rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,He,ie.width,ie.height,ie.depth),I)if(_.layerUpdates.size>0){let W=qh(ie.width,ie.height,_.format,_.type);for(let Q of _.layerUpdates){let pe=ie.data.subarray(Q*W/ie.data.BYTES_PER_ELEMENT,(Q+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,Ee,Ue,pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ee,Ue,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,ie.width,ie.height,ie.depth,0,Ee,Ue,ie.data);else if(_.isData3DTexture)$e?(Rt&&t.texStorage3D(n.TEXTURE_3D,le,He,ie.width,ie.height,ie.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ee,Ue,ie.data)):t.texImage3D(n.TEXTURE_3D,0,He,ie.width,ie.height,ie.depth,0,Ee,Ue,ie.data);else if(_.isFramebufferTexture){if(Rt)if($e)t.texStorage2D(n.TEXTURE_2D,le,He,ie.width,ie.height);else{let W=ie.width,Q=ie.height;for(let pe=0;pe<le;pe++)t.texImage2D(n.TEXTURE_2D,pe,He,W,Q,0,Ee,Ue,null),W>>=1,Q>>=1}}else if(ot.length>0){if($e&&Rt){let W=Ie(ot[0]);t.texStorage2D(n.TEXTURE_2D,le,He,W.width,W.height)}for(let W=0,Q=ot.length;W<Q;W++)Me=ot[W],$e?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,Ee,Ue,Me):t.texImage2D(n.TEXTURE_2D,W,He,Ee,Ue,Me);_.generateMipmaps=!1}else if($e){if(Rt){let W=Ie(ie);t.texStorage2D(n.TEXTURE_2D,le,He,W.width,W.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ue,ie)}else t.texImage2D(n.TEXTURE_2D,0,He,Ee,Ue,ie);m(_)&&f(J),Re.__version=Z.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function oe(b,_,H){if(_.image.length!==6)return;let J=At(b,_),ee=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);let Z=i.get(ee);if(ee.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+H);let Re=ct.getPrimaries(ct.workingColorSpace),ue=_.colorSpace===Di?null:ct.getPrimaries(_.colorSpace),_e=_.colorSpace===Di||Re===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let lt=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let Q=0;Q<6;Q++)!lt&&!ie?Ee[Q]=y(_.image[Q],!0,s.maxCubemapSize):Ee[Q]=ie?_.image[Q].image:_.image[Q],Ee[Q]=Pt(_,Ee[Q]);let Ue=Ee[0],He=r.convert(_.format,_.colorSpace),Me=r.convert(_.type),ot=S(_.internalFormat,He,Me,_.colorSpace),$e=_.isVideoTexture!==!0,Rt=Z.__version===void 0||J===!0,I=ee.dataReady,le=C(_,Ue);et(n.TEXTURE_CUBE_MAP,_);let W;if(lt){$e&&Rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,ot,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){W=Ee[Q].mipmaps;for(let pe=0;pe<W.length;pe++){let de=W[pe];_.format!==Hn?He!==null?$e?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,He,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,ot,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,de.width,de.height,He,Me,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,ot,de.width,de.height,0,He,Me,de.data)}}}else{if(W=_.mipmaps,$e&&Rt){W.length>0&&le++;let Q=Ie(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,ot,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ee[Q].width,Ee[Q].height,He,Me,Ee[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ot,Ee[Q].width,Ee[Q].height,0,He,Me,Ee[Q].data);for(let pe=0;pe<W.length;pe++){let Ve=W[pe].image[Q].image;$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Ve.width,Ve.height,He,Me,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,ot,Ve.width,Ve.height,0,He,Me,Ve.data)}}else{$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,He,Me,Ee[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ot,He,Me,Ee[Q]);for(let pe=0;pe<W.length;pe++){let de=W[pe];$e?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,He,Me,de.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,ot,He,Me,de.image[Q])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function we(b,_,H,J,ee,Z){let Re=r.convert(H.format,H.colorSpace),ue=r.convert(H.type),_e=S(H.internalFormat,Re,ue,H.colorSpace),lt=i.get(_),ie=i.get(H);if(ie.__renderTarget=_,!lt.__hasExternalTextures){let Ee=Math.max(1,_.width>>Z),Ue=Math.max(1,_.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,_e,Ee,Ue,_.depth,0,Re,ue,null):t.texImage2D(ee,Z,_e,Ee,Ue,0,Re,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,ie.__webglTexture,0,st(_)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,ie.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(b,_,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let J=_.depthTexture,ee=J&&J.isDepthTexture?J.type:null,Z=v(_.stencilBuffer,ee),Re=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=st(_);rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Z,_.width,_.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,b)}else{let J=_.textures;for(let ee=0;ee<J.length;ee++){let Z=J[ee],Re=r.convert(Z.format,Z.colorSpace),ue=r.convert(Z.type),_e=S(Z.internalFormat,Re,ue,Z.colorSpace),lt=st(_);H&&rt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,_e,_.width,_.height):rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,_e,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,_e,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);let ee=J.__webglTexture,Z=st(_);if(_.depthTexture.format===Ns)rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(_.depthTexture.format===Vs)rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ge(b){let _=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let J=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=J}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Be(_.__webglFramebuffer,b)}else if(H){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=n.createRenderbuffer(),he(_.__webglDepthbuffer[J],b,!1);else{let ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),he(_.__webglDepthbuffer,b,!1);else{let J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(b,_,H){let J=i.get(b);_!==void 0&&we(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ge(b)}function Nt(b){let _=b.texture,H=i.get(b),J=i.get(_);b.addEventListener("dispose",R);let ee=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=_.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let _e=0;_e<_.mipmaps.length;_e++)H.__webglFramebuffer[ue][_e]=n.createFramebuffer()}else H.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)H.__webglFramebuffer[ue]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ue=0,_e=ee.length;ue<_e;ue++){let lt=i.get(ee[ue]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&rt(b)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){let _e=ee[ue];H.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);let lt=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),Ee=S(_e.internalFormat,lt,ie,_e.colorSpace,b.isXRRenderTarget===!0),Ue=st(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Ee,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),he(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),et(n.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)we(H.__webglFramebuffer[ue][_e],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else we(H.__webglFramebuffer[ue],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ue=0,_e=ee.length;ue<_e;ue++){let lt=ee[ue],ie=i.get(lt);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),et(n.TEXTURE_2D,lt),we(H.__webglFramebuffer,b,lt,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(lt)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),et(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)we(H.__webglFramebuffer[_e],b,_,n.COLOR_ATTACHMENT0,ue,_e);else we(H.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,ue,0);m(_)&&f(ue),t.unbindTexture()}b.depthBuffer&&Ge(b)}function at(b){let _=b.textures;for(let H=0,J=_.length;H<J;H++){let ee=_[H];if(m(ee)){let Z=M(b),Re=i.get(ee).__webglTexture;t.bindTexture(Z,Re),f(Z),t.unbindTexture()}}}let Wt=[],U=[];function Cn(b){if(b.samples>0){if(rt(b)===!1){let _=b.textures,H=b.width,J=b.height,ee=n.COLOR_BUFFER_BIT,Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(b),ue=_.length>1;if(ue)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);let lt=i.get(_[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,ee,n.NEAREST),l===!0&&(Wt.length=0,U.length=0,Wt.push(n.COLOR_ATTACHMENT0+_e),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Wt.push(Z),U.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);let lt=i.get(_[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function st(b){return Math.min(s.maxSamples,b.samples)}function rt(b){let _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Le(b){let _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Pt(b,_){let H=b.colorSpace,J=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==Vi&&H!==Di&&(ct.getTransfer(H)===Et?(J!==Hn||ee!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function Ie(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=tt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=we,this.useMultisampledRTT=rt}function B1(n,e){function t(i,s=Di){let r,o=ct.getTransfer(s);if(i===di)return n.UNSIGNED_BYTE;if(i===uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ou)return n.BYTE;if(i===au)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===hc)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===mn)return n.HALF_FLOAT;if(i===cu)return n.ALPHA;if(i===hu)return n.RGB;if(i===Hn)return n.RGBA;if(i===uu)return n.LUMINANCE;if(i===du)return n.LUMINANCE_ALPHA;if(i===Ns)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===fc)return n.RED;if(i===pc)return n.RED_INTEGER;if(i===fu)return n.RG;if(i===mc)return n.RG_INTEGER;if(i===gc)return n.RGBA_INTEGER;if(i===_o||i===Eo||i===Mo||i===xo)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ol||i===al||i===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ol||i===al)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ll)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===yl||i===vl||i===_l||i===El||i===Ml||i===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_l)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===So||i===Sl||i===Al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===So)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pu||i===bl||i===Tl||i===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===So)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Gl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xe=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},O1={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
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

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new pn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new en({vertexShader:z1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new De(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wl=class extends Oi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Vl,m=t.getContextAttributes(),f=null,M=null,S=[],v=[],C=new Se,T=null,R=new nn;R.viewport=new xt;let F=new nn;F.viewport=new xt;let A=[R,F],E=new Gl,w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=S[$];return oe===void 0&&(oe=new Sr,S[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=S[$];return oe===void 0&&(oe=new Sr,S[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=S[$];return oe===void 0&&(oe=new Sr,S[$]=oe),oe.getHandSpace()};function z($){let oe=v.indexOf($.inputSource);if(oe===-1)return;let we=S[oe];we!==void 0&&(we.update($.inputSource,$.frame,c||o),we.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let $=0;$<S.length;$++){let oe=v[$];oe!==null&&(v[$]=null,S[$].disconnect(oe))}w=null,O=null,y.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,M=null,At.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new jt(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,we=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Vs:Ns,we=m.stencil?Gs:fi);let Be={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new jt(d.textureWidth,d.textureHeight,{format:Hn,type:di,depthTexture:new qs(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j($){for(let oe=0;oe<$.removed.length;oe++){let we=$.removed[oe],he=v.indexOf(we);he>=0&&(v[he]=null,S[he].disconnect(we))}for(let oe=0;oe<$.added.length;oe++){let we=$.added[oe],he=v.indexOf(we);if(he===-1){for(let Ge=0;Ge<S.length;Ge++)if(Ge>=v.length){v.push(we),he=Ge;break}else if(v[Ge]===null){v[Ge]=we,he=Ge;break}if(he===-1)break}let Be=S[he];Be&&Be.connect(we)}}let q=new P,re=new P;function X($,oe,we){q.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(we.matrixWorld);let he=q.distanceTo(re),Be=oe.projectionMatrix.elements,Ge=we.projectionMatrix.elements,tt=Be[14]/(Be[10]-1),Nt=Be[14]/(Be[10]+1),at=(Be[9]+1)/Be[5],Wt=(Be[9]-1)/Be[5],U=(Be[8]-1)/Be[0],Cn=(Ge[8]+1)/Ge[0],st=tt*U,rt=tt*Cn,Le=he/(-U+Cn),Pt=Le*-U;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pt),$.translateZ(Le),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Be[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let Ie=tt+Le,b=Nt+Le,_=st-Pt,H=rt+(he-Pt),J=at*Nt/b*Ie,ee=Wt*Nt/b*Ie;$.projectionMatrix.makePerspective(_,H,J,ee,Ie,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let oe=$.near,we=$.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(we=y.depthFar)),E.near=F.near=R.near=oe,E.far=F.far=R.far=we,(w!==E.near||O!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,O=E.far),R.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,E.layers.mask=R.layers.mask|F.layers.mask;let he=$.parent,Be=E.cameras;ce(E,he);for(let Ge=0;Ge<Be.length;Ge++)ce(Be[Ge],he);Be.length===2?X(E,R,F):E.projectionMatrix.copy(R.projectionMatrix),ve($,E,he)};function ve($,oe,we){we===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(we.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=To*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let Fe=null;function et($,oe){if(h=oe.getViewerPose(c||o),g=oe,h!==null){let we=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let he=!1;we.length!==E.cameras.length&&(E.cameras.length=0,he=!0);for(let Ge=0;Ge<we.length;Ge++){let tt=we[Ge],Nt=null;if(p!==null)Nt=p.getViewport(tt);else{let Wt=u.getViewSubImage(d,tt);Nt=Wt.viewport,Ge===0&&(e.setRenderTargetTextures(M,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(M))}let at=A[Ge];at===void 0&&(at=new nn,at.layers.enable(Ge),at.viewport=new xt,A[Ge]=at),at.matrix.fromArray(tt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(tt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Ge===0&&(E.matrix.copy(at.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),he===!0&&E.cameras.push(at)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){let Ge=u.getDepthInformation(we[0]);Ge&&Ge.isValid&&Ge.texture&&y.init(e,Ge,s.renderState)}}for(let we=0;we<S.length;we++){let he=v[we],Be=S[we];he!==null&&Be!==void 0&&Be.update(he,oe,c||o)}Fe&&Fe($,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let At=new Eu;At.setAnimationLoop(et),this.setAnimationLoop=function($){Fe=$},this.dispose=function(){}}},ji=new Jn,k1=new bt;function G1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,_u(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,S,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,ji.copy(v),ji.x*=-1,ji.y*=-1,ji.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(ji)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function V1(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let v=S.program;i.uniformBlockBinding(M,v)}function c(M,S){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));let C=S.program;i.updateUBOMapping(M,C);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let S=u();M.__bindingPointIndex=S;let v=n.createBuffer(),C=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=s[M.id],v=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,R=v.length;T<R;T++){let F=Array.isArray(v[T])?v[T]:[v[T]];for(let A=0,E=F.length;A<E;A++){let w=F[A];if(p(w,T,A,C)===!0){let O=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],V=0;for(let j=0;j<z.length;j++){let q=z[j],re=y(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,O+V,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,V),V+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,S,v,C){let T=M.value,R=S+"_"+v;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let F=C[R];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return C[R]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(M){let S=M.uniforms,v=0,C=16;for(let R=0,F=S.length;R<F;R++){let A=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,w=A.length;E<w;E++){let O=A[E],z=Array.isArray(O.value)?O.value:[O.value];for(let V=0,j=z.length;V<j;V++){let q=z[V],re=y(q),X=v%C,ce=X%re.boundary,ve=X+ce;v+=ce,ve!==0&&C-ve<re.storage&&(v+=C-ve),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=re.storage}}}let T=v%C;return T>0&&(v+=C-T),M.__size=v,M.__cache={},this}function y(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Bo=class{constructor(e={}){let{canvas:t=Yd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=$n,this.toneMappingExposure=1;let v=this,C=!1,T=0,R=0,F=null,A=-1,E=null,w=new xt,O=new xt,z=null,V=new ye(0),j=0,q=t.width,re=t.height,X=1,ce=null,ve=null,Fe=new xt(0,0,q,re),et=new xt(0,0,q,re),At=!1,$=new br,oe=!1,we=!1,he=new bt,Be=new bt,Ge=new P,tt=new xt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function Wt(){return F===null?X:1}let U=i;function Cn(x,D){return t.getContext(x,D)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),U===null){let D="webgl2";if(U=Cn(D,x),U===null)throw Cn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let st,rt,Le,Pt,Ie,b,_,H,J,ee,Z,Re,ue,_e,lt,ie,Ee,Ue,He,Me,ot,$e,Rt,I;function le(){st=new rm(U),st.init(),$e=new B1(U,st),rt=new j0(U,st,e,$e),Le=new L1(U,st),rt.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),Pt=new lm(U),Ie=new M1,b=new N1(U,st,Le,Ie,rt,$e,Pt),_=new tm(v),H=new sm(v),J=new mf(U),Rt=new Q0(U,J),ee=new om(U,J,Pt,Rt),Z=new hm(U,ee,J,Pt),He=new cm(U,rt,b),ie=new em(Ie),Re=new E1(v,_,H,st,rt,Rt,ie),ue=new G1(v,Ie),_e=new S1,lt=new C1(st),Ue=new J0(v,_,H,Le,Z,p,l),Ee=new I1(v,Z,rt),I=new V1(U,Pt,rt,Le),Me=new K0(U,st,Pt),ot=new am(U,st,Pt),Pt.programs=Re.programs,v.capabilities=rt,v.extensions=st,v.properties=Ie,v.renderLists=_e,v.shadowMap=Ee,v.state=Le,v.info=Pt}le();let W=new Wl(v,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let x=st.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=st.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(q,re,!1))},this.getSize=function(x){return x.set(q,re)},this.setSize=function(x,D,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,re=D,t.width=Math.floor(x*X),t.height=Math.floor(D*X),k===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(q*X,re*X).floor()},this.setDrawingBufferSize=function(x,D,k){q=x,re=D,X=k,t.width=Math.floor(x*k),t.height=Math.floor(D*k),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(Fe)},this.setViewport=function(x,D,k,G){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,D,k,G),Le.viewport(w.copy(Fe).multiplyScalar(X).round())},this.getScissor=function(x){return x.copy(et)},this.setScissor=function(x,D,k,G){x.isVector4?et.set(x.x,x.y,x.z,x.w):et.set(x,D,k,G),Le.scissor(O.copy(et).multiplyScalar(X).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(x){Le.setScissorTest(At=x)},this.setOpaqueSort=function(x){ce=x},this.setTransparentSort=function(x){ve=x},this.getClearColor=function(x){return x.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(x=!0,D=!0,k=!0){let G=0;if(x){let L=!1;if(F!==null){let se=F.texture.format;L=se===gc||se===mc||se===pc}if(L){let se=F.texture.type,fe=se===di||se===fi||se===Ar||se===Gs||se===uc||se===dc,Ae=Ue.getClearColor(),be=Ue.getClearAlpha(),ke=Ae.r,We=Ae.g,Te=Ae.b;fe?(g[0]=ke,g[1]=We,g[2]=Te,g[3]=be,U.clearBufferuiv(U.COLOR,0,g)):(y[0]=ke,y[1]=We,y[2]=Te,y[3]=be,U.clearBufferiv(U.COLOR,0,y))}else G|=U.COLOR_BUFFER_BIT}D&&(G|=U.DEPTH_BUFFER_BIT),k&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),_e.dispose(),lt.dispose(),Ie.dispose(),_.dispose(),H.dispose(),Z.dispose(),Rt.dispose(),I.dispose(),Re.dispose(),W.dispose(),W.removeEventListener("sessionstart",kc),W.removeEventListener("sessionend",Gc),Yi.stop()};function Q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let x=Pt.autoReset,D=Ee.enabled,k=Ee.autoUpdate,G=Ee.needsUpdate,L=Ee.type;le(),Pt.autoReset=x,Ee.enabled=D,Ee.autoUpdate=k,Ee.needsUpdate=G,Ee.type=L}function de(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ve(x){let D=x.target;D.removeEventListener("dispose",Ve),zt(D)}function zt(x){sn(x),Ie.remove(x)}function sn(x){let D=Ie.get(x).programs;D!==void 0&&(D.forEach(function(k){Re.releaseProgram(k)}),x.isShaderMaterial&&Re.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,k,G,L,se){D===null&&(D=Nt);let fe=L.isMesh&&L.matrixWorld.determinant()<0,Ae=sd(x,D,k,G,L);Le.setMaterial(G,fe);let be=k.index,ke=1;if(G.wireframe===!0){if(be=ee.getWireframeAttribute(k),be===void 0)return;ke=2}let We=k.drawRange,Te=k.attributes.position,ht=We.start*ke,Ct=(We.start+We.count)*ke;se!==null&&(ht=Math.max(ht,se.start*ke),Ct=Math.min(Ct,(se.start+se.count)*ke)),be!==null?(ht=Math.max(ht,0),Ct=Math.min(Ct,be.count)):Te!=null&&(ht=Math.max(ht,0),Ct=Math.min(Ct,Te.count));let It=Ct-ht;if(It<0||It===1/0)return;Rt.setup(L,G,Ae,k,be);let un,mt=Me;if(be!==null&&(un=J.get(be),mt=ot,mt.setIndex(un)),L.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*Wt()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(L.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),Le.setLineWidth(Ce*Wt()),L.isLineSegments?mt.setMode(U.LINES):L.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else L.isPoints?mt.setMode(U.POINTS):L.isSprite&&mt.setMode(U.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)mt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))mt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ce=L._multiDrawStarts,ni=L._multiDrawCounts,gt=L._multiDrawCount,Nn=be?J.get(be).bytesPerElement:1,ms=Ie.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<gt;Mn++)ms.setValue(U,"_gl_DrawID",Mn),mt.render(Ce[Mn]/Nn,ni[Mn])}else if(L.isInstancedMesh)mt.renderInstances(ht,It,L.count);else if(k.isInstancedBufferGeometry){let Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ni=Math.min(k.instanceCount,Ce);mt.renderInstances(ht,It,ni)}else mt.render(ht,It)};function yt(x,D,k){x.transparent===!0&&x.side===St&&x.forceSinglePass===!1?(x.side=an,x.needsUpdate=!0,Vr(x,D,k),x.side=Bi,x.needsUpdate=!0,Vr(x,D,k),x.side=St):Vr(x,D,k)}this.compile=function(x,D,k=null){k===null&&(k=x),f=lt.get(k),f.init(D),S.push(f),k.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),x!==k&&x.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();let G=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let se=L.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){let Ae=se[fe];yt(Ae,k,L),G.add(Ae)}else yt(se,k,L),G.add(se)}),S.pop(),f=null,G},this.compileAsync=function(x,D,k=null){let G=this.compile(x,D,k);return new Promise(L=>{function se(){if(G.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){L(x);return}setTimeout(se,10)}st.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Un=null;function ti(x){Un&&Un(x)}function kc(){Yi.stop()}function Gc(){Yi.start()}let Yi=new Eu;Yi.setAnimationLoop(ti),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(x){Un=x,W.setAnimationLoop(x),x===null?Yi.stop():Yi.start()},W.addEventListener("sessionstart",kc),W.addEventListener("sessionend",Gc),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,D,F),f=lt.get(x,S.length),f.init(D),S.push(f),Be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(Be),we=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,we),m=_e.get(x,M.length),m.init(),M.push(m),W.enabled===!0&&W.isPresenting===!0){let se=v.xr.getDepthSensingMesh();se!==null&&ha(se,D,-1/0,v.sortObjects)}ha(x,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ce,ve),at=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,at&&Ue.addToRenderList(m,x),this.info.render.frame++,oe===!0&&ie.beginShadows();let k=f.state.shadowsArray;Ee.render(k,x,D),oe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,L=m.transmissive;if(f.setupLights(),D.isArrayCamera){let se=D.cameras;if(L.length>0)for(let fe=0,Ae=se.length;fe<Ae;fe++){let be=se[fe];Wc(G,L,x,be)}at&&Ue.render(x);for(let fe=0,Ae=se.length;fe<Ae;fe++){let be=se[fe];Vc(m,x,be,be.viewport)}}else L.length>0&&Wc(G,L,x,D),at&&Ue.render(x),Vc(m,x,D);F!==null&&(b.updateMultisampleRenderTarget(F),b.updateRenderTargetMipmap(F)),x.isScene===!0&&x.onAfterRender(v,x,D),Rt.resetDefaultState(),A=-1,E=null,S.pop(),S.length>0?(f=S[S.length-1],oe===!0&&ie.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ha(x,D,k,G){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){G&&tt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Be);let fe=Z.update(x),Ae=x.material;Ae.visible&&m.push(x,fe,Ae,k,tt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||$.intersectsObject(x))){let fe=Z.update(x),Ae=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),tt.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),tt.copy(fe.boundingSphere.center)),tt.applyMatrix4(x.matrixWorld).applyMatrix4(Be)),Array.isArray(Ae)){let be=fe.groups;for(let ke=0,We=be.length;ke<We;ke++){let Te=be[ke],ht=Ae[Te.materialIndex];ht&&ht.visible&&m.push(x,fe,ht,k,tt.z,Te)}}else Ae.visible&&m.push(x,fe,Ae,k,tt.z,null)}}let se=x.children;for(let fe=0,Ae=se.length;fe<Ae;fe++)ha(se[fe],D,k,G)}function Vc(x,D,k,G){let L=x.opaque,se=x.transmissive,fe=x.transparent;f.setupLightsView(k),oe===!0&&ie.setGlobalState(v.clippingPlanes,k),G&&Le.viewport(w.copy(G)),L.length>0&&Gr(L,D,k),se.length>0&&Gr(se,D,k),fe.length>0&&Gr(fe,D,k),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Wc(x,D,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new jt(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?mn:di,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let se=f.state.transmissionRenderTarget[G.id],fe=G.viewport||w;se.setSize(fe.z,fe.w);let Ae=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(V),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),at&&Ue.render(k);let be=v.toneMapping;v.toneMapping=$n;let ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),oe===!0&&ie.setGlobalState(v.clippingPlanes,G),Gr(x,k,G),b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se),st.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Te=0,ht=D.length;Te<ht;Te++){let Ct=D[Te],It=Ct.object,un=Ct.geometry,mt=Ct.material,Ce=Ct.group;if(mt.side===St&&It.layers.test(G.layers)){let ni=mt.side;mt.side=an,mt.needsUpdate=!0,Xc(It,k,G,un,mt,Ce),mt.side=ni,mt.needsUpdate=!0,We=!0}}We===!0&&(b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se))}v.setRenderTarget(Ae),v.setClearColor(V,j),ke!==void 0&&(G.viewport=ke),v.toneMapping=be}function Gr(x,D,k){let G=D.isScene===!0?D.overrideMaterial:null;for(let L=0,se=x.length;L<se;L++){let fe=x[L],Ae=fe.object,be=fe.geometry,ke=G===null?fe.material:G,We=fe.group;Ae.layers.test(k.layers)&&Xc(Ae,D,k,be,ke,We)}}function Xc(x,D,k,G,L,se){x.onBeforeRender(v,D,k,G,L,se),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(v,D,k,G,x,se),L.transparent===!0&&L.side===St&&L.forceSinglePass===!1?(L.side=an,L.needsUpdate=!0,v.renderBufferDirect(k,D,G,L,x,se),L.side=Bi,L.needsUpdate=!0,v.renderBufferDirect(k,D,G,L,x,se),L.side=St):v.renderBufferDirect(k,D,G,L,x,se),x.onAfterRender(v,D,k,G,L,se)}function Vr(x,D,k){D.isScene!==!0&&(D=Nt);let G=Ie.get(x),L=f.state.lights,se=f.state.shadowsArray,fe=L.state.version,Ae=Re.getParameters(x,L.state,se,D,k),be=Re.getProgramCacheKey(Ae),ke=G.programs;G.environment=x.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(x.isMeshStandardMaterial?H:_).get(x.envMap||G.environment),G.envMapRotation=G.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,ke===void 0&&(x.addEventListener("dispose",Ve),ke=new Map,G.programs=ke);let We=ke.get(be);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===fe)return Yc(x,Ae),We}else Ae.uniforms=Re.getUniforms(x),x.onBeforeCompile(Ae,v),We=Re.acquireProgram(Ae,be),ke.set(be,We),G.uniforms=Ae.uniforms;let Te=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=ie.uniform),Yc(x,Ae),G.needsLights=od(x),G.lightsStateVersion=fe,G.needsLights&&(Te.ambientLightColor.value=L.state.ambient,Te.lightProbe.value=L.state.probe,Te.directionalLights.value=L.state.directional,Te.directionalLightShadows.value=L.state.directionalShadow,Te.spotLights.value=L.state.spot,Te.spotLightShadows.value=L.state.spotShadow,Te.rectAreaLights.value=L.state.rectArea,Te.ltc_1.value=L.state.rectAreaLTC1,Te.ltc_2.value=L.state.rectAreaLTC2,Te.pointLights.value=L.state.point,Te.pointLightShadows.value=L.state.pointShadow,Te.hemisphereLights.value=L.state.hemi,Te.directionalShadowMap.value=L.state.directionalShadowMap,Te.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Te.spotShadowMap.value=L.state.spotShadowMap,Te.spotLightMatrix.value=L.state.spotLightMatrix,Te.spotLightMap.value=L.state.spotLightMap,Te.pointShadowMap.value=L.state.pointShadowMap,Te.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function qc(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=Os.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Yc(x,D){let k=Ie.get(x);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function sd(x,D,k,G,L){D.isScene!==!0&&(D=Nt),b.resetTextureUnits();let se=D.fog,fe=G.isMeshStandardMaterial?D.environment:null,Ae=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Vi,be=(G.isMeshStandardMaterial?H:_).get(G.envMap||fe),ke=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,We=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!k.morphAttributes.position,ht=!!k.morphAttributes.normal,Ct=!!k.morphAttributes.color,It=$n;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(It=v.toneMapping);let un=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,mt=un!==void 0?un.length:0,Ce=Ie.get(G),ni=f.state.lights;if(oe===!0&&(we===!0||x!==E)){let Fn=x===E&&G.id===A;ie.setState(G,x,Fn)}let gt=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ni.state.version||Ce.outputColorSpace!==Ae||L.isBatchedMesh&&Ce.batching===!1||!L.isBatchedMesh&&Ce.batching===!0||L.isBatchedMesh&&Ce.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ce.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ce.instancing===!1||!L.isInstancedMesh&&Ce.instancing===!0||L.isSkinnedMesh&&Ce.skinning===!1||!L.isSkinnedMesh&&Ce.skinning===!0||L.isInstancedMesh&&Ce.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ce.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ce.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ce.instancingMorph===!1&&L.morphTexture!==null||Ce.envMap!==be||G.fog===!0&&Ce.fog!==se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ie.numPlanes||Ce.numIntersection!==ie.numIntersection)||Ce.vertexAlphas!==ke||Ce.vertexTangents!==We||Ce.morphTargets!==Te||Ce.morphNormals!==ht||Ce.morphColors!==Ct||Ce.toneMapping!==It||Ce.morphTargetsCount!==mt)&&(gt=!0):(gt=!0,Ce.__version=G.version);let Nn=Ce.currentProgram;gt===!0&&(Nn=Vr(G,D,L));let ms=!1,Mn=!1,cr=!1,Dt=Nn.getUniforms(),Vn=Ce.uniforms;if(Le.useProgram(Nn.program)&&(ms=!0,Mn=!0,cr=!0),G.id!==A&&(A=G.id,Mn=!0),ms||E!==x){Le.buffers.depth.getReversed()?(he.copy(x.projectionMatrix),$d(he),Jd(he),Dt.setValue(U,"projectionMatrix",he)):Dt.setValue(U,"projectionMatrix",x.projectionMatrix),Dt.setValue(U,"viewMatrix",x.matrixWorldInverse);let bi=Dt.map.cameraPosition;bi!==void 0&&bi.setValue(U,Ge.setFromMatrixPosition(x.matrixWorld)),rt.logarithmicDepthBuffer&&Dt.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Dt.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,Mn=!0,cr=!0)}if(L.isSkinnedMesh){Dt.setOptional(U,L,"bindMatrix"),Dt.setOptional(U,L,"bindMatrixInverse");let Fn=L.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Dt.setValue(U,"boneTexture",Fn.boneTexture,b))}L.isBatchedMesh&&(Dt.setOptional(U,L,"batchingTexture"),Dt.setValue(U,"batchingTexture",L._matricesTexture,b),Dt.setOptional(U,L,"batchingIdTexture"),Dt.setValue(U,"batchingIdTexture",L._indirectTexture,b),Dt.setOptional(U,L,"batchingColorTexture"),L._colorsTexture!==null&&Dt.setValue(U,"batchingColorTexture",L._colorsTexture,b));let hr=k.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&He.update(L,k,Nn),(Mn||Ce.receiveShadow!==L.receiveShadow)&&(Ce.receiveShadow=L.receiveShadow,Dt.setValue(U,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vn.envMap.value=be,Vn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(Vn.envMapIntensity.value=D.environmentIntensity),Mn&&(Dt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&rd(Vn,cr),se&&G.fog===!0&&ue.refreshFogUniforms(Vn,se),ue.refreshMaterialUniforms(Vn,G,X,re,f.state.transmissionRenderTarget[x.id]),Os.upload(U,qc(Ce),Vn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Os.upload(U,qc(Ce),Vn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Dt.setValue(U,"center",L.center),Dt.setValue(U,"modelViewMatrix",L.modelViewMatrix),Dt.setValue(U,"normalMatrix",L.normalMatrix),Dt.setValue(U,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Fn=G.uniformsGroups;for(let bi=0,Ti=Fn.length;bi<Ti;bi++){let Zc=Fn[bi];I.update(Zc,Nn),I.bind(Zc,Nn)}}return Nn}function rd(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function od(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,D,k){Ie.get(x.texture).__webglTexture=D,Ie.get(x.depthTexture).__webglTexture=k;let G=Ie.get(x);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){let k=Ie.get(x);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,k=0){F=x,T=D,R=k;let G=!0,L=null,se=!1,fe=!1;if(x){let be=Ie.get(x);if(be.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(be.__hasExternalTextures)b.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Te=x.depthTexture;if(be.__boundDepthTexture!==Te){if(Te!==null&&Ie.has(Te)&&(x.width!==Te.image.width||x.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}let ke=x.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(fe=!0);let We=Ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(We[D])?L=We[D][k]:L=We[D],se=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?L=Ie.get(x).__webglMultisampledFramebuffer:Array.isArray(We)?L=We[k]:L=We,w.copy(x.viewport),O.copy(x.scissor),z=x.scissorTest}else w.copy(Fe).multiplyScalar(X).floor(),O.copy(et).multiplyScalar(X).floor(),z=At;if(Le.bindFramebuffer(U.FRAMEBUFFER,L)&&G&&Le.drawBuffers(x,L),Le.viewport(w),Le.scissor(O),Le.setScissorTest(z),se){let be=Ie.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,k)}else if(fe){let be=Ie.get(x.texture),ke=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,k||0,ke)}A=-1},this.readRenderTargetPixels=function(x,D,k,G,L,se,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Ae=Ae[fe]),Ae){Le.bindFramebuffer(U.FRAMEBUFFER,Ae);try{let be=x.texture,ke=be.format,We=be.type;if(!rt.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-G&&k>=0&&k<=x.height-L&&U.readPixels(D,k,G,L,$e.convert(ke),$e.convert(We),se)}finally{let be=F!==null?Ie.get(F).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,D,k,G,L,se,fe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(Ae=Ae[fe]),Ae){let be=x.texture,ke=be.format,We=be.type;if(!rt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-G&&k>=0&&k<=x.height-L){Le.bindFramebuffer(U.FRAMEBUFFER,Ae);let Te=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),U.readPixels(D,k,G,L,$e.convert(ke),$e.convert(We),0);let ht=F!==null?Ie.get(F).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,ht);let Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zd(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Te),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer(Te),U.deleteSync(Ct),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,k=0){x.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);let G=Math.pow(2,-k),L=Math.floor(x.image.width*G),se=Math.floor(x.image.height*G),fe=D!==null?D.x:0,Ae=D!==null?D.y:0;b.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,fe,Ae,L,se),Le.unbindTexture()},this.copyTextureToTexture=function(x,D,k=null,G=null,L=0){x.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,x=arguments[1],D=arguments[2],L=arguments[3]||0,k=null);let se,fe,Ae,be,ke,We,Te,ht,Ct,It=x.isCompressedTexture?x.mipmaps[L]:x.image;k!==null?(se=k.max.x-k.min.x,fe=k.max.y-k.min.y,Ae=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,ke=k.min.y,We=k.isBox3?k.min.z:0):(se=It.width,fe=It.height,Ae=It.depth||1,be=0,ke=0,We=0),G!==null?(Te=G.x,ht=G.y,Ct=G.z):(Te=0,ht=0,Ct=0);let un=$e.convert(D.format),mt=$e.convert(D.type),Ce;D.isData3DTexture?(b.setTexture3D(D,0),Ce=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),Ce=U.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),Ce=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let ni=U.getParameter(U.UNPACK_ROW_LENGTH),gt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Nn=U.getParameter(U.UNPACK_SKIP_PIXELS),ms=U.getParameter(U.UNPACK_SKIP_ROWS),Mn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,be),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We);let cr=x.isDataArrayTexture||x.isData3DTexture,Dt=D.isDataArrayTexture||D.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let Vn=Ie.get(x),hr=Ie.get(D),Fn=Ie.get(Vn.__renderTarget),bi=Ie.get(hr.__renderTarget);Le.bindFramebuffer(U.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Le.bindFramebuffer(U.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ti=0;Ti<Ae;Ti++)cr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(x).__webglTexture,L,We+Ti),x.isDepthTexture?(Dt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.get(D).__webglTexture,L,Ct+Ti),U.blitFramebuffer(be,ke,se,fe,Te,ht,se,fe,U.DEPTH_BUFFER_BIT,U.NEAREST)):Dt?U.copyTexSubImage3D(Ce,L,Te,ht,Ct+Ti,be,ke,se,fe):U.copyTexSubImage2D(Ce,L,Te,ht,Ct+Ti,be,ke,se,fe);Le.bindFramebuffer(U.READ_FRAMEBUFFER,null),Le.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Dt?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(Ce,L,Te,ht,Ct,se,fe,Ae,un,mt,It.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,L,Te,ht,Ct,se,fe,Ae,un,It.data):U.texSubImage3D(Ce,L,Te,ht,Ct,se,fe,Ae,un,mt,It):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,L,Te,ht,se,fe,un,mt,It.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,L,Te,ht,It.width,It.height,un,It.data):U.texSubImage2D(U.TEXTURE_2D,L,Te,ht,se,fe,un,mt,It);U.pixelStorei(U.UNPACK_ROW_LENGTH,ni),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ms),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mn),L===0&&D.generateMipmaps&&U.generateMipmap(Ce),Le.unbindTexture()},this.copyTextureToTexture3D=function(x,D,k=null,G=null,L=0){return x.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,x=arguments[2],D=arguments[3],L=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,k,G,L)},this.initRenderTarget=function(x){Ie.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),Le.unbindTexture()},this.resetState=function(){T=0,R=0,F=null,Le.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}},qe=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Oo=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new P,zo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ys=class extends mi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,mr=new P,Ps=new P,Is=new P,Ds=new Se,gr=new Se,bu=new bt,uo=new P,yr=new P,fo=new P,Yh=new Se,ka=new Se,Zh=new Se,Tr=class extends qt{constructor(e=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xl(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new zo(i,3,0,!1)),Fs.setAttribute("uv",new zo(i,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),bu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Is.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;po(uo.set(-.5,-.5,0),Is,o,Ps,s,r),po(yr.set(.5,-.5,0),Is,o,Ps,s,r),po(fo.set(.5,.5,0),Is,o,Ps,s,r),Yh.set(0,0),ka.set(1,0),Zh.set(1,1);let a=e.ray.intersectTriangle(uo,yr,fo,!1,mr);if(a===null&&(po(yr.set(-.5,.5,0),Is,o,Ps,s,r),ka.set(0,1),a=e.ray.intersectTriangle(uo,fo,yr,!1,mr),a===null))return;let l=e.ray.origin.distanceTo(mr);l<e.near||l>e.far||t.push({distance:l,point:mr.clone(),uv:Li.getInterpolation(mr,uo,yr,fo,Yh,ka,Zh,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function po(n,e,t,i,s,r){Ds.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(gr.x=r*Ds.x-s*Ds.y,gr.y=s*Ds.x+r*Ds.y):gr.copy(Ds),n.copy(e),n.x+=gr.x,n.y+=gr.y,n.applyMatrix4(bu)}var ql=class extends pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=An,h=An,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ho=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new bt,$h=new bt,mo=[],Jh=new pi,W1=new bt,vr=new K,_r=new Hi,ko=class extends K{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,W1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),Jh.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Jh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ls),_r.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(i),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),$h.multiplyMatrices(i,Ls),vr.matrixWorld=$h,vr.raycast(e,mo);for(let o=0,a=mo.length;o<a;o++){let l=mo[o];l.instanceId=r,l.object=this,t.push(l)}mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ql(new Float32Array(s*this.count),s,this.count,fc,Yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zs=class extends mi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qh=new bt,Yl=new Fo,go=new Hi,yo=new P,wr=class extends qt{constructor(e=new Zt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Qh.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(Qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){let m=c.getX(g);yo.fromBufferAttribute(u,m),Kh(yo,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++)yo.fromBufferAttribute(u,g),Kh(yo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kh(n,e,t,i,s,r,o){let a=Yl.distanceSqToPoint(n);if(a<t){let l=new P;Yl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yi=class extends pn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class n extends Zt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ft=class n extends Zt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=i/2,f=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function M(){let v=new P,C=new P,T=0,R=(t-e)/i;for(let F=0;F<=r;F++){let A=[],E=F/r,w=E*(t-e)+e;for(let O=0;O<=s;O++){let z=O/s,V=z*l+a,j=Math.sin(V),q=Math.cos(V);C.x=w*j,C.y=-E*i+m,C.z=w*q,u.push(C.x,C.y,C.z),v.set(j,R,q).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-E),A.push(g++)}y.push(A)}for(let F=0;F<s;F++)for(let A=0;A<r;A++){let E=y[A][F],w=y[A+1][F],O=y[A+1][F+1],z=y[A][F+1];(e>0||A!==0)&&(h.push(E,w,z),T+=3),(t>0||A!==r-1)&&(h.push(w,O,z),T+=3)}c.addGroup(f,T,0),f+=T}function S(v){let C=g,T=new Se,R=new P,F=0,A=v===!0?e:t,E=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;let w=g;for(let O=0;O<=s;O++){let V=O/s*l+a,j=Math.cos(V),q=Math.sin(V);R.x=A*q,R.y=m*E,R.z=A*j,u.push(R.x,R.y,R.z),d.push(0,E,0),T.x=j*.5+.5,T.y=q*.5*E+.5,p.push(T.x,T.y),g++}for(let O=0;O<s;O++){let z=C+O,V=w+O;v===!0?h.push(V,V+1,z):h.push(V+1,V,z),F+=3}c.addGroup(f,F,v===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_i=class n extends Ft{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zl=class n extends Zt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new P,v=new P,C=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],S),p(t[T+1],v),p(t[T+2],C),l(S,v,C,M)}function l(M,S,v,C){let T=C+1,R=[];for(let F=0;F<=T;F++){R[F]=[];let A=M.clone().lerp(v,F/T),E=S.clone().lerp(v,F/T),w=T-F;for(let O=0;O<=w;O++)O===0&&F===T?R[F][O]=A:R[F][O]=A.clone().lerp(E,O/w)}for(let F=0;F<T;F++)for(let A=0;A<2*(T-F)-1;A++){let E=Math.floor(A/2);A%2===0?(d(R[F][E+1]),d(R[F+1][E]),d(R[F][E])):(d(R[F][E+1]),d(R[F+1][E+1]),d(R[F+1][E]))}}function c(M){let S=new P;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){let M=new P;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let v=m(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;o.push(v,1-C)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],v=o[M+2],C=o[M+4],T=Math.max(S,v,C),R=Math.min(S,v,C);T>.9&&R<.1&&(S<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,S){let v=M*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){let M=new P,S=new P,v=new P,C=new P,T=new Se,R=new Se,F=new Se;for(let A=0,E=0;A<r.length;A+=9,E+=6){M.set(r[A+0],r[A+1],r[A+2]),S.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),T.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),F.set(o[E+4],o[E+5]),C.copy(M).add(S).add(v).divideScalar(3);let w=m(C);y(T,E+0,M,w),y(R,E+2,S,w),y(F,E+4,v,w)}}function y(M,S,v,C){C<0&&M.x===1&&(o[S]=M.x-1),v.x===0&&v.z===0&&(o[S]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Go=class n extends Zl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Lt=class n extends Zt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){let M=[],S=f/i,v=0;f===0&&o===0?v=.5/t:f===i&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+v,1-S),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let S=h[f][M+1],v=h[f][M],C=h[f+1][M],T=h[f+1][M+1];(f!==0||o>0)&&p.push(S,v,T),(f!==i-1||l<Math.PI)&&p.push(v,C,T)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qn=class n extends Zt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(y,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qe=class extends mi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function vo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function X1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var $s=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends $s{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:r=e,a=2*t-i;break;case eh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:o=e,l=2*i-t;break;case eh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+M*o[c+C]+S*o[l+C]+v*o[u+C];return r}},Jl=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ql=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case Rl:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Rl;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&X1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===da,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Rl;var rs=class extends kn{constructor(e,t,i){super(e,t,i)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ao;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends kn{};Kl.prototype.ValueTypeName="color";var jl=class extends kn{};jl.prototype.ValueTypeName="number";var ec=class extends $s{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)zi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vo=class extends kn{InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends kn{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ao;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends kn{};tc.prototype.ValueTypeName="vector";var nc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},q1=new nc,ic=class{constructor(e){this.manager=e!==void 0?e:q1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ke=class extends Js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ga=new bt,jh=new P,eu=new P,Rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(jh),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sc=class extends Rr{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=To*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Gi=class extends Js{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},tu=new bt,Er=new P,Va=new P,rc=class extends Rr{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Er.setFromMatrixPosition(e.matrixWorld),i.position.copy(Er),Va.copy(i.position),Va.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Va),i.updateMatrixWorld(),s.makeTranslation(-Er.x,-Er.y,-Er.z),tu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}},Ht=class extends Js{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},oc=class extends Rr{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new oc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function nu(){return 0}var vc="\\[\\]\\.:\\/",Y1=new RegExp("["+vc+"]","g"),_c="[^"+vc+"]",Z1="[^"+vc.replace("\\.","")+"]",$1=/((?:WC+[\/:])*)/.source.replace("WC",_c),J1=/(WCOD+)?/.source.replace("WCOD",Z1),Q1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),K1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),j1=new RegExp("^"+$1+J1+Q1+K1+"$"),eg=["material","materials","bones","map"],ac=class{constructor(e,t,i){let s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Y1,"")}static parseTrackName(e){let t=j1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);eg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=ac;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);var Zo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tg=new Xs(-1,1,1,-1,0,1),Ec=class extends Zt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},ng=new Ec,tr=class{constructor(e){this._mesh=new K(ng,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var as=class extends Ei{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cr=class extends Ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},$o=class extends Ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Jo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Se);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new as(Zo),this.copyPass.material.blending=Zn,this.clock=new Wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cr!==void 0&&(o instanceof Cr?i=!0:o instanceof $o&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var nr=class n extends Ei{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new jt(r,o,{type:mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new jt(r,o,{type:mn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Tu;this.highPassUniforms=js.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Zo;this.copyUniforms=js.clone(h.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new ut,this.fsQuad=new tr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new en({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};nr.BlurDirectionX=new Se(1,0);nr.BlurDirectionY=new Se(0,1);var ls=1280,cs=720;function je(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Mc=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),kt=(n,e,t)=>n+(e-n)*t,Ne=(n,e,t)=>{let i=Mc((t-n)/(e-n));return i*i*(3-2*i)};var ig=n=>(n=Mc(n),n*n*(3-2*n));function Ko(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=ig((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>kt(o,r[a],i)):kt(s,r,i)}return n[n.length-1][1]}var sg={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new Se(ls,cs)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},rg={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new ye(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Qo=class{constructor(e){let t=this.r=new Bo({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(ls,cs,!1),t.shadowMap.enabled=!0,t.shadowMap.type=cc,t.toneMapping=$n,t.outputColorSpace=Vi;let i=new qs(ls,cs);i.type=fi,this.rt=new jt(ls,cs,{type:mn,samples:2,depthTexture:i}),this.composer=new Jo(t,new jt(ls,cs,{type:mn})),this.dof=new as(sg,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new nr(new Se(ls/2,cs/2),.45,.75,.82),this.grade=new as(rg),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function wu(n,e,t,i=40){let s=new Oo;s.background=new ye(t);let r=new nn(i,ls/cs,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function Ru(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var yn=1/420,xc=new Map;function vn(n,e,t,i){if(xc.has(n))return xc.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new yi(s);return o.colorSpace=Xt,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,xc.set(n,o),o}var dt=n=>new Path2D(n);function tn(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function Gn(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var og={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function ag(n,e){return vn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=dt("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");tn(t,i,Gn(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(dt("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(dt("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(dt("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=dt("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){tn(t,dt("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),Gn(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(dt("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(dt("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(dt("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(dt("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(dt("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")tn(t,dt("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),Gn(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(dt("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(dt("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(dt("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){tn(t,dt("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),Gn(t,-60,0,60,120,n.a,n.b)),tn(t,dt("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),Gn(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else tn(t,dt("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),Gn(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(dt("M-22 26 L22 26 L0 64Z")),tn(t,dt("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function Cu(n,e,t){return vn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(tn(i,dt("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),Gn(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(tn(i,dt("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;tn(i,dt(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),Gn(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(dt(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(dt(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function lg(){return vn("hand",90,100,n=>{n.translate(45,14);let e=dt("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");tn(n,e,Gn(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function Fu(n){return vn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function cg(){return vn("foot",80,40,n=>{n.translate(26,6),tn(n,dt("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function hg(n="round"){return vn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var Du={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function ug(n,e){return vn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),Du[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function dg(n,e,t){return vn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=dt("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");tn(i,s,Gn(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),tn(i,s,e);let r=dt("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");tn(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),tn(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=dt("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");tn(i,s,Gn(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),tn(i,l,"#E9E9EF")})})})}var Pu=(n,e={})=>new ut({map:n,alphaTest:.5,alphaToCoverage:!0,side:St,...e}),Iu=new Map,Sc=new Map,fg=[];function pg(n){if(Sc.has(n))return Sc.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new yi(t);return r.colorSpace=Xt,r.anisotropy=8,Sc.set(n,r),r}function gn(n,e,t,i,s,r=0,o,a=!1){let l=new De(e*yn,t*yn);l.translate((e/2-i)*yn,(s-t/2)*yn,0);let c=Pu(n);o.push(c);let h=new K(l,c);if(h.position.z=r,h.castShadow=!0,!a){let d=Pu(pg(n),{color:"#FFE9C8"});fg.push(d);let p=new K(l,d);p.position.z=-.045-r,h.add(p)}let u=Iu.get(n);return u||(u=new ki({depthPacking:Ks,map:n,alphaTest:.5,side:St}),Iu.set(n,u)),h.customDepthMaterial=u,h}function mg(){return vn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function gg(){return vn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function Ac(n={}){let e=og[n.outfit||"hero"],t=n.outfit||"hero",i=new xe,s=[],r=new xe;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,M]of[["L",-1,-.012],["R",1,-.01]]){let S=new xe;S.position.set(f*34*yn,o*yn,M);let v=new xe;v.position.y=-142*yn,S.add(gn(Fu(1),50,160,25,6,0,s)),v.add(gn(Fu(1),50,160,25,6,0,s));let C=gn(cg(),80,40,26,6,.001,s);C.position.y=-142*yn,f<0&&(C.scale.x=-1),v.add(C),S.add(v),r.add(S),l[m]={th:S,shin:v}}let h=gn(ag(e,t),300,320,150,20,0,s);h.position.y=(a+4)*yn,r.add(h);for(let[m,f,M]of[["L",-1,-.006],["R",1,.006]]){let S=new xe;S.position.set(f*(e.kind==="dress"?66:84)*yn,(a-24)*yn,M);let v=new xe;v.position.y=-124*yn,S.add(gn(Cu(e,t,"u"),90,170,45,10,0,s)),v.add(gn(Cu(e,t,"f"),90,170,45,10,.001,s));let C=gn(lg(),90,100,45,14,.002,s);C.position.y=-128*yn,C.scale.set(f>0?-.8:.8,.8,1),v.add(C),S.add(v),r.add(S),c[m]={u:S,f:v,hand:C}}let u=new xe;if(u.position.set(0,(a+104)*yn,.02),r.add(u),n.hair){let m=gn(dg(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);u.add(m)}if(u.add(gn(hg(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=gn(vn("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let M=n.hairc||"#4a2c1a";f.fillStyle=M,f.fill(dt(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);u.add(m)}if(n.lash){let m=gn(vn("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(M=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(M*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}let d={};for(let m of Object.keys(Du)){let f=gn(ug(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",u.add(f),d[m]=f}if(n.glasses){let m=gn(vn("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,u.add(m)}if(n.hat){let m=gn(n.hat(vn),300,300,150,150,.006,s);u.add(m)}let p=new K(new De(1,.4),new ut({map:mg(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new K(new De(2.1,3),new ut({map:gg(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:fn,side:St})),g.position.set(0,.95,-.09),r.add(g));let y={root:i,body:r,head:u,arms:c,legs:l,eyes:d,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in d)d[f].visible=f===m},cheer(m,f=0,M=1){let S=m*6+f,v=Math.sin(S);y.pose({armL:[150+v*16*M,18+v*10],armR:[150-v*16*M,18-v*10],bob:Math.abs(Math.sin(S*.5))*.07*M,head:v*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,M=m.armL||[6,4],S=m.armR||[6,4],v=m.legL||[0,0],C=m.legR||[0,0];c.L.u.rotation.z=-M[0]*f,c.L.f.rotation.z=-M[1]*f,c.R.u.rotation.z=S[0]*f,c.R.f.rotation.z=S[1]*f,l.L.th.rotation.z=-v[0]*f,l.L.shin.rotation.z=-v[1]*f,l.R.th.rotation.z=C[0]*f,l.R.shin.rotation.z=C[1]*f,u.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let T=m.squash||0;r.scale.set(1-T*.5,1+T,1)},walk(m,f=1,M=1){let S=m*6.4*f,v=Math.sin(S),C=Math.cos(S);y.pose({legL:[v*15*M,Math.max(0,-v)*26*M],legR:[-v*15*M,Math.max(0,v)*26*M],armL:[8-v*12*M,6],armR:[8+v*12*M,6],bob:Math.abs(C)*.03*M,head:v*2})},place(m,f,M=0,S=1){i.position.set(m,M,f),i.scale.setScalar(S)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return y.pose(),y}function Pe(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new yi(i);return r.colorSpace=Xt,r.anisotropy=8,r}var hs=(n,e={})=>new Qe({color:n,roughness:.88,metalness:0,...e});function B(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new K(new gi(n,e,t),typeof i=="string"?hs(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function Ye(n,e,t=1){let i=Pe(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new Tr(new Ys({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:fn}));return s.scale.set(e,e,1),s}var Lu=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function yg(n,e,t,i,s,r=.42){let o=je(n),a=256*e,l=300*t,c,h=Pe(a,l,d=>{d.fillStyle=i,d.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)d.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,d.fillRect(g,p,28,10);for(let p=0;p<t;p++)d.fillStyle="rgba(255,240,220,.14)",d.fillRect(0,p*300+292,a,8)}),u=Pe(a,l,d=>{d.fillStyle="#000",d.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<t;g++)for(let y=0;y<e;y++){let m=y*256+56,f=g*300+60,M=144,S=196,v=o()<r,C=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,M+18,S+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+S+9,M+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+S+6,M+36,8),p.fillStyle=s?v?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,M,S),v||!s){let T=v?C<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=T,p.fillRect(m,f,26,S),p.fillRect(m+M-26,f,26,S)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+S),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+S),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+M/2-3,f,6,S),p.fillRect(m,f+S*.45,M,6),v&&s&&(d.fillStyle=C<.5?"#FFC47A":"#FFD79C",d.fillRect(m,f,M,S),d.fillStyle="#000",d.fillRect(m+M/2-3,f,6,S),d.fillRect(m,f+S*.45,M,6))}h.needsUpdate=!0});return u.colorSpace=Xt,{map:h,emissiveMap:u}}function Wi(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,u=je(n),d=new xe,p=o*2.9+3.6,g=c||Lu[Math.floor(u()*Lu.length)],y=Math.max(2,Math.round(r/2.1)),m=yg(n,y,o,g,l,e.lit??.42),f=new Qe({map:m.map,emissiveMap:m.emissiveMap,emissive:new ye(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),M=hs(g),S=[a>0?f:M,a>0?M:f,hs("#2c2730"),M,M,M],v=new K(new gi(s,o*2.9,r),S);v.position.set(t,3.6+o*1.45,i),v.castShadow=v.receiveShadow=!0,d.add(v),d.add(B(s+.5,.5,r+.5,"#3d3540",t,p+.25,i)),d.add(B(s+.3,.35,r+.3,g,t,3.6,i));let C=t+a*(s/2+.01);if(h){let T=Pe(1024,180,w=>{w.fillStyle=h.bg,w.fillRect(0,0,1024,180),w.fillStyle="#ffffff22",w.fillRect(0,0,1024,8),w.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,w.textAlign="center",w.textBaseline="middle",w.fillStyle=h.fg||"#FFF4DC",w.shadowColor=h.fg||"#FFF4DC",w.shadowBlur=l?26:0,w.fillText(h.name,512,96)}),R=new K(new gi(.18,1.05,r-.3),[new Qe({map:T,emissiveMap:T,emissive:new ye(l?.85:0,l?.85:0,l?.85:0)}),new Qe({map:T,emissiveMap:T,emissive:new ye(l?.85:0,l?.85:0,l?.85:0)}),hs("#222"),hs("#222"),hs("#222"),hs("#222")]);R.position.set(C+a*.1,3.25,i),a>0&&(R.scale.z=-1),R.castShadow=!0,d.add(R);let F=Pe(512,256,w=>{let O=w.createLinearGradient(0,0,0,256);O.addColorStop(0,h.win||"#F4C783"),O.addColorStop(1,"#D59A5C"),w.fillStyle=O,w.fillRect(0,0,512,256);let z=je(n+9);for(let V=0;V<26;V++)w.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(z()*6)],w.fillRect(z()*490,30+Math.floor(z()*3)*76,12+z()*26,52);for(let V of[84,160,236])w.fillStyle="#6b4530",w.fillRect(0,V,512,7)}),A=new Qe({map:F,emissiveMap:F,emissive:new ye(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});d.add(B(.3,2.8,r-.1,"#3a2a24",C-a*.1,1.4,i));let E=new K(new De(r-.9,2.1),A);E.rotation.y=a*Math.PI/2,E.position.set(C+a*.07,1.5,i),d.add(E);for(let w=-1;w<=1;w++)d.add(B(.08,2.3,.09,"#2a1d18",C+a*.1,1.5,i+w*(r-.9)/2));if(h.awning){let w=Pe(512,128,z=>{for(let V=0;V<12;V++)z.fillStyle=V%2?h.awning:"#F4EEDF",z.fillRect(V*512/12,0,42.666666666666664,128)}),O=new K(new De(r-.3,1.3),new Qe({map:w,side:St,roughness:.9}));O.rotation.y=a*Math.PI/2,O.rotation.order="YXZ",O.rotation.x=-1,O.position.set(C+a*.55,2.56,i),O.castShadow=!0,d.add(O)}if(l){let w=new Ht(h.light||"#FFC88A",3.2,7,1.8);w.position.set(C+a*1.7,2.1,i),d.add(w)}}return d}function Uu(n,e,t){let i=new K(new De(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function vg(n="#A99D90"){let e=Pe(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=je(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=In,e}function jo(n,e){let t=Pe(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=je(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=In,t.repeat.set(1,12);let i=Uu(9,240,new Qe({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=vg(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=Uu(4.4,240,new Qe({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(B(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function ea(n,e,t,i,s=!0,r=5.5){let o=new xe;o.add(B(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(B(.26,.3,.26,"#15151b",e,.15,t));let a=B(.26,.4,.26,new Qe({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(B(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=Ye("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new Ht("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var Nu={};function Tn(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new xe;o.add(B(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=Nu[a]||(Nu[a]=Pe(512,512,c=>{let h=je(r%3+3),u=(d,p,g,y)=>{c.fillStyle=y,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,M=g*(.86+.14*Math.sin(f*5+d)+h()*.05);c.lineTo(d+Math.cos(f)*M,p+Math.sin(f)*M)}c.fill()};for(let[d,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])u(d,p,g,s[0]);for(let[d,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])u(d,p,g,s[1]);for(let[d,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])u(d,p,g,s[2]);c.fillStyle=s[3];for(let d=0;d<70;d++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new K(new De(3.6*i,3.6*i),new Qe({map:l,alphaTest:.5,side:St,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new ki({depthPacking:Ks,map:l,alphaTest:.5,side:St}),o.add(h)}return n.add(o),o}function Mi(n,e,t,i,s,r,o=3,a=0){let l=Pe(1600,900,h=>{h.clearRect(0,0,1600,900);let u=je(o);for(let d=0;d<3;d++)for(let p=-40;p<1620;){let g=50+u()*110,y=180+u()*(d===0?660:400);if(h.fillStyle=s[d],h.fillRect(p,900-y,g,y),u()<.2&&h.fillRect(p+g/2-4,900-y-60,8,60),r)for(let m=900-y+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)u()<.34&&(h.fillStyle=d===2?"#FFD999":d===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new K(new De(t,i),new ut({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function Gt(n,e,t,i,s){let r=Pe(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new K(new De(t,i),new ut({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var N=(n,e={})=>new Qe({color:n,roughness:.85,...e});function ft(n,e,t,i={}){let s=new K(new De(e,t),new ut({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:St,color:i.color||"#fff",blending:i.add?fn:Ui,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new ki({depthPacking:Ks,map:n,alphaTest:.5,side:St})),s}function wn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var bc={value:0};function ta(n="#8E3D30",e=4,t=3){let i=Pe(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=je(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=In,i.repeat.set(e,t),i}function Bu(n="#A59383",e=12,t=12){let i=Pe(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=je(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=In,i.repeat.set(e,t),i}var Ou=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function _g(n,e){let[t,i,s,r]=Ou[n];return Pe(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function Tc(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=je(o),l={};for(let c of e){let h=Math.floor(a()*Ou.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,u=c%100,d=_g(u,h),p=new ut({map:d,alphaTest:.5,side:St,color:r});p.onBeforeCompile=m=>{m.uniforms.uT=bc,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+u%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new ko(new De(i*.5,i),p,l[c].length),y=new qt;l[c].forEach((m,f)=>{y.position.set(m[0],(m[2]||0)+i/2,m[1]),y.rotation.y=m[3]||0;let M=.92+a()*.16;y.scale.set(M,M,1),y.updateMatrix(),g.setMatrixAt(f,y.matrix)}),g.frustumCulled=!1,n.add(g)}}function Dn(n,e=2600,t=300,i=1){let s=je(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let u=0;u<e;u++){let d=s()*2-1,p=s()*6.283,g=Math.sqrt(1-d*d);r[u*3]=g*Math.cos(p)*t,r[u*3+1]=d*t,r[u*3+2]=g*Math.sin(p)*t;let y=.55+s()*.45,m=s();o[u*3]=y*(m>.8?1:.9),o[u*3+1]=y*.94,o[u*3+2]=y*(m<.2?.8:1)}let a=new Zt;a.setAttribute("position",new Kt(r,3)),a.setAttribute("color",new Kt(o,3));let l=Pe(32,32,u=>{let d=u.createRadialGradient(16,16,0,16,16,16);d.addColorStop(0,"#fff"),d.addColorStop(.35,"#ffffffaa"),d.addColorStop(1,"#ffffff00"),u.fillStyle=d,u.fillRect(0,0,32,32)}),c=new Zs({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new wr(a,c);return h.frustumCulled=!1,n.add(h),h}function xi(n,e,t="#6D4A33"){let i=Pe(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=je(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=In,i.repeat.set(n/5,e/5);let s=new K(new De(n,e),new Qe({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function ir(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Pe(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=In,r.repeat.set(n/s*4,e/s*4);let o=new K(new De(n,e),new Qe({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Fr(n,e,t="#FFD9A0",i=.22){let s=Pe(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new K(new De(n,e),new ut({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:fn,side:St,fog:!1}))}function wc(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new xe,a=new K(new Ft(.3,.22,.5,20),N(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Pe(256,256,h=>{h.clearRect(0,0,256,256);for(let u=0;u<9;u++)h.save(),h.translate(128,250),h.rotate((u-4)*.3),h.fillStyle=u%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=ft(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function Rc(n,e,t,i="#2A1E18"){let s=new xe;s.add(B(n+.08,e+.08,.04,i,0,0,0));let r=Pe(Math.round(n*400),Math.round(e*400),t),o=new K(new De(n,e),new Qe({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Bt(n,e,t,i=1.2){return new K(new De(n,e),new Qe({color:"#000",emissive:t,emissiveIntensity:i}))}function vt(n,e,t,i=10,s=60){let r=new Qs(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function Pr(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new qe(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(Gt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),Mi(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=ta(t,2,2),a=()=>new Qe({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,y,m])=>n.add(B(y,m,.3,a(),p,g,-3)));for(let[p,g,y,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(B(y,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(B(18,5.2,.3,a(),0,2.6,-3));n.add(xi(18,12,s));let l=Rc(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(wc(4.4,0,-2.4,1.1)),n.add(wc(-5,0,-2.4,.9,"#36AEA2")),n.add(new Ke(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=vt(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new Ht("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let u=new K(new Ft(.18,.3,.34,24),new Qe({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));u.position.set(3.6,1.9,-1.9),n.add(u),n.add(B(.04,1.7,.04,"#222",3.6,.85,-1.9));let d=Ye("#FFC07A",1.2,.35);d.position.copy(u.position),n.add(d)}var zu=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function Ir(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new qe(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),Gt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),Mi(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),jo(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(Wi(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:zu[(a+i)%5]})),n.add(Wi(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:zu[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)Tn(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),ea(n,-5,-3-l*12,1,t||r);n.add(new Ke(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(vt(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var te=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},it=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},pt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},sr={perro:[520,440,n=>{te(n,250,300,150,90,"#C98E5E"),te(n,250,330,100,50,"#E9C49A"),it(n,120,330,34,100,14,"#B5784A"),it(n,340,330,34,100,14,"#B5784A"),it(n,180,340,34,90,14,"#C98E5E"),it(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),te(n,180,170,110,100,"#C98E5E"),te(n,100,140,40,80,"#8A5A34",-.3),te(n,262,140,40,80,"#8A5A34",.3),te(n,180,220,54,40,"#E9C49A"),te(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{te(n,250,300,150,90,"#C9A07E"),te(n,250,330,100,50,"#EEDCC4"),it(n,120,330,34,100,14,"#B5906A"),it(n,340,330,34,100,14,"#B5906A"),it(n,180,340,34,90,14,"#C9A07E"),it(n,300,340,34,90,14,"#C9A07E"),te(n,180,170,110,100,"#C9A07E"),te(n,100,140,40,80,"#9A7A5A",-.3),te(n,262,140,40,80,"#9A7A5A",.3),te(n,180,220,60,46,"#F4F0E8"),te(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{te(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),te(n,180,170,100,92,"#E9853A"),pt(n,[[96,120],[110,30],[160,100]],"#E9853A"),pt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();te(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{te(n,150,260,80,130,"#3FA34D"),te(n,150,140,80,80,"#3FA34D"),pt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),te(n,150,300,56,70,"#F2C14E"),pt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),te(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{te(n,170,190,130,80,"#8D94A8"),te(n,90,110,56,52,"#7A8296"),te(n,120,150,40,26,"#5FA898",.3),pt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),te(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{te(n,150,130,70,22,"#3A3040"),te(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();te(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),te(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{te(n,150,260,90,120,"#C9A06A"),te(n,150,290,56,80,"#EBD3A8"),te(n,150,120,74,70,"#C9A06A"),te(n,100,70,18,14,"#A87A44"),te(n,200,70,18,14,"#A87A44"),te(n,150,156,14,10,"#1A1A24"),it(n,92,200,26,70,12,"#A87A44"),it(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{te(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);te(n,64,130,46,44,"#1A1A24"),te(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),te(n,200,64,54,30,"rgba(230,246,255,.8)",.3),pt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{te(n,300,160,250,80,"#6F9FC4"),te(n,300,200,200,40,"#D8E8F4"),pt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),pt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),pt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),pt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{te(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])it(n,e,360,70,160,20,"#8A8A98");te(n,170,200,120,110,"#9A9AA8"),te(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),pt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{it(n,20,60,560,220,110,"#4A5A6E"),te(n,600,180,220,90,"#4A5A6E"),pt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),it(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{te(n,170,230,120,100,"#FBF7EC"),te(n,120,120,66,64,"#FBF7EC"),pt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),pt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),te(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),te(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{te(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])te(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])it(n,e,300,50,150,16,"#EDE6D4");te(n,140,160,100,92,"#FBF7EC"),te(n,120,220,70,46,"#F2B4C0"),pt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),pt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{te(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])it(n,e,260,44,90,14,"#E890A4");te(n,120,170,34,24,"#E06A84"),pt(n,[[160,70],[150,30],[196,70]],"#E890A4"),pt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{te(n,230,320,170,170,"#2E2E38"),te(n,230,160,110,104,"#2E2E38"),te(n,230,190,70,56,"#5A5A68"),it(n,40,260,70,240,30,"#2E2E38"),it(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{it(n,160,120,70,560,30,"#F2C14E"),te(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])it(n,e,760,30,140,12,"#E2A83A");te(n,190,110,80,60,"#F2C14E"),it(n,160,20,12,50,6,"#8A5A2A"),it(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{te(n,300,260,190,100,"#8A8E9A"),te(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])it(n,e,320,36,100,14,"#7A7E8A");te(n,140,170,96,90,"#8A8E9A"),pt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),pt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),pt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{te(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])it(n,e,330,44,120,16,"#D29A30");te(n,170,200,150,150,"#A8642A"),te(n,170,210,96,92,"#E2A83A"),te(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{te(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{te(n,230,190,60,46,"#3A2A2A"),te(n,150,180,40,34,"#3A2A2A"),te(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{te(n,300,300,170,80,"#B5784A"),te(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])it(n,e,330,26,180,12,"#9A6238");it(n,120,120,60,200,26,"#B5784A"),te(n,130,110,70,56,"#B5784A"),te(n,80,130,30,22,"#3A2A22"),pt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),te(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{te(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])it(n,e,360,34,190,14,"#4A3222");it(n,110,150,90,200,36,"#5A3E2A"),te(n,110,160,80,66,"#5A3E2A"),te(n,60,200,54,46,"#6A4A34"),te(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{te(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)pt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])it(n,e,250,40,90,14,"#4A3A30");te(n,90,200,70,60,"#5E4A3E"),te(n,30,220,34,28,"#7A6050"),pt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),pt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{te(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])it(n,e,320,34,230,14,"#7A4A2E");it(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),it(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),pt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},na={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(na,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in na)sr[n][3]=na[n][0],sr[n][4]=na[n][1];sr.pato=[380,400,n=>{te(n,210,280,150,100,"#F6D44A"),te(n,290,250,70,50,"#E8BC30",-.4),te(n,130,140,86,82,"#F6D44A"),te(n,40,160,56,22,"#F2913A"),te(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),pt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];sr.dragon=[480,440,n=>{te(n,250,300,140,110,"#7BC86A"),te(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)pt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");te(n,380,210,80,50,"#9AD884",-.6),te(n,130,160,100,92,"#7BC86A"),te(n,70,190,46,34,"#9AD884"),pt(n,[[100,80],[90,30],[130,74]],"#F2913A"),pt(n,[[160,76],[170,26],[190,80]],"#F2913A"),it(n,160,380,40,56,18,"#6AB05A"),it(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];sr.caballoB=[620,560,n=>{te(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])it(n,e,320,34,230,14,"#E4DED2");it(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),it(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),pt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var ia={},Hu=n=>ia["e"+n]||(ia["e"+n]=Pe(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function ku(n,e={}){let[t,i,s,r,o,a]=sr[n],l=ia[n]||(ia[n]=Pe(t,i,s)),c=a*i/t,h=new xe,u=new xe;h.add(u);let d=ft(l,a,c,{shadow:!0});d.position.y=c/2,u.add(d);let p=new K(new De(o*a,o*a*.5),new ut({map:Hu("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),u.add(p);let g=new K(new vi(a*.45,24),new ut({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(u.scale.x=-1);let y={root:h,card:u,kind:n,h:c,w:a,eye(m){p.material.map=Hu(m)},face(m){let f=new P;h.getWorldPosition(f),u.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){d.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),u.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,M=0,S=1){return h.position.set(m,M,f),h.scale.setScalar(S),y}};return y}var Xi=(n,e,t=200,i=200,s)=>{let r=new K(new De(t,i),s?new Qe({map:s,roughness:.95}):N(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Cc=(n,e=1)=>{n.add(new Ke("#E9EEFF","#B08A6A",1.05*e)),n.add(vt("#FFD29A",3*e,[-14,16,10],20,70))},ze={sala:(n,e)=>Pr(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{Pr(n,{wall:"#9A4632",night:e.night}),n.add(B(2.4,.45,3.2,N("#6B4A33"),-1.7,.25,-1.4)),n.add(B(2.3,.3,3,N("#F3EEE4"),-1.7,.6,-1.4)),n.add(B(2.38,.22,2,N("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(B(.8,.22,.5,N("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>Ir(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new qe(e.dusk?"#E8A880":"#F2D8B8",.02),Gt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),Mi(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),Xi(n,"#7A9A50");for(let t=0;t<12;t++)Tn(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(B(2.4,.1,.5,N("#8E6242"),-3.4,.5,-2.2)),n.add(B(2.4,.5,.08,N("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)ea(n,-6+t*6,-4,1,!!e.dusk);n.add(new Ke("#E9EEFF","#B08A6A",1)),n.add(vt(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{Ir(n,{seed:e.seed||2}),Xi(n,"",60,60,Bu("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new qe("#F2D8B8",.012),Gt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Xi(n,"#8AAA58");let t=new xe;t.add(B(6,4,5,N("#B5402E"),0,2,0));let i=new K(new Ft(.01,4.4,2.2,4),N("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(B(2,2.6,.1,N("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(B(.1,1,.1,N("#C9A06A"),-10+s*1.3,.5,-4));n.add(B(20,.08,.06,N("#C9A06A"),0,.9,-4)),n.add(B(20,.08,.06,N("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)Tn(n,6+s*3,-16-s%2*3,1.6,void 0,s);Cc(n)},sabana:(n,e)=>{n.fog=new qe("#F2C890",.01),Gt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=Ye("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),Xi(n,"#C8A858");for(let i=0;i<6;i++){let s=new xe;s.add(B(.3,3,.3,N("#5A3A22"),0,1.5,0));let r=new K(new Ft(2.6,2.2,.6,12),N("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new Ke("#FFE8C8","#8A6A3A",1)),n.add(vt("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new qe("#F2E2C0",.012),Gt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),Xi(n,"#B8B070");for(let t=0;t<14;t++){let i=new K(new Lt(.55,16,10,0,Math.PI*2,0,Math.PI/2),N("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}Cc(n)},mar:(n,e)=>{Eg(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new qe(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=Xi(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=je(5);for(let r=0;r<30;r++){let o=new K(new _i(.2+s()*.3,.8+s()*1.4,7),N(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Fr(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=Ye("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new Ke("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(vt("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new qe("#162238",.04),n.add(ir(16,20,"#2A3348","#232B3E",6)),n.add(B(16,6,.3,N("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Bt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Bt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Pe(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new K(new De(2.5,1.3),new ut({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new Ke("#6E86C8","#101420",.8)),n.add(vt("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new qe("#1E2236",.02),Xi(n,"#2F4A7A"),n.add(B(30,10,.3,N("#E8E2D2"),0,5,-8));let t=Pe(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=ft(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new K(new Qn(4,.35,10,48),N("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new Ht("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new Ke("#E8E8FF","#3A3A50",.9)),n.add(vt("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new qe("#E6E2D6",.03),n.add(ir(9,40));for(let i of[-1,1]){n.add(B(.7,4.2,30,N("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(B(1.2,.05,30,N("#DDE0E4"),i*3,.5+s*.9,-10))}let t=je(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(B(.3,.3,.4,N(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Bt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new Ke("#FFFFFF","#B9B3A6",1)),n.add(vt("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{ze.parque(n,{});for(let t=0;t<12;t++)n.add(B(.08,1.4,.08,N("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(B(8,.08,.08,N("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{Pr(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new qe("#8A8070",.03),Gt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),Xi(n,"#8A8070");let t=je(8);for(let i=0;i<40;i++){let s=B(.4+t()*1.6,.3+t()*1,.4+t()*1.4,N(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}Cc(n,.8)}};function Eg(n,e){n.background=new ye(e)}function Mg(n,e={}){let t=Ac({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var xg=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function Fc(n,e,t){let i=wu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(ze[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?Mg(s,a):(()=>{let c=ku(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{bc.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,y)=>g.position.set(-4+y%12*.7,-2.5+(l*.5+y*.13)%7,-2-y%5*1.5));let u=Ko(t.cam.map(([g,y])=>[g,y]),l),d=Ko(t.cam.map(([g,,y])=>[g,y]),l);Ru(c,u,d,0);for(let{a:g,k:y}of r){if(g.move){let f=g.move(l);y.root.position.set(f[0],f[1],f[2])}y.face(c),y.eye(xg(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,M])=>l>=f&&l<M);g.tipo==="humano"?g.pose?g.pose(y,l):y.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(y.talk(l,m),g.pose&&g.pose(y,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Ko(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function Gu(n,e,t,i="#E8667F"){n.add(B(2.2,.45,3,N("#6B4A33"),e,.25,t)),n.add(B(2.1,.3,2.8,N("#F3EEE4"),e,.6,t)),n.add(B(2.18,.2,1.9,N(i,{roughness:.9}),e,.8,t+.5)),n.add(B(2.2,1.3,.16,N("#5A3C28"),e,.9,t-1.55)),n.add(B(.8,.2,.45,N("#FFFFFF"),e-.5,.82,t-1.1)),n.add(B(.8,.2,.45,N("#F6E6C8"),e+.5,.82,t-1.1))}function Vu(n,e=Math.PI/2){n.root.rotation.z=e}function Sg(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return Pe(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[d,p,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(d,p,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let u=Array.isArray(n)?n:[n];u.forEach((d,p)=>c.fillText(d,t/2,i*.42+(p-(u.length-1)/2)*o*1.15))})}function Kn(n,e,t=1.4,i={}){let s=Sg(e,i),r=ft(s,t,t*(i.h||400)/(i.w||640),{blend:!0});return r.renderOrder=5,n.add(r),r}function Dr(n,e="#F2C14E",t=140,i=256,s=200){return Pe(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function Ag(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,u)=>{n.save(),n.rotate(c),n.fillRect(-u/2,-h,u,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function Pc(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new yi(i);r.colorSpace=Xt;let o=new K(new De(n,n),new Qe({map:r,transparent:!0,alphaTest:.05,side:St,roughness:.7}));return o.set=(a,l={})=>{Ag(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}var us=[0,5.16,11.48,21,24.54,26.34,33.9,39.08,44.6,48.92,55.98,58.34,66.6,69.42,76.72,83.48,84.32,85.94,91.04,99.62,113.64,119.58,128.98,137.3,141.34,144.48,155.4,158.44,169.24,171.86,182.18,188.12,190.9,192.26,203.4,225.48,236.14,248.62,251.08,252.68,261.4,264,265.58,268.28,274.42,279.38,293.14,307.98,309.38,311.66,320.98,332.86,340.02,343.62,357.16,359.3,373.18,374.88,382.16,385.54,395.2,400.08,404.48,407.06,420.56,424.22,427.04,434.78,444.24,447.38,450.54,464.94,468.64,471.22,472.66,479.2,495.04,498.38,510.26,514.66,519.04,522.42],bg=[["esta",0],["noche",.3],["sara",1.1],["va",1.28],["a",1.56],["sonar",1.7],["contigo",2.06],["y",3.04],["lo",3.22],["vas",3.38],["a",3.58],["decidir",3.74],["tu",4.2],["hace",5.16],["una",5.38],["hora",5.62],["encontraste",5.9],["algo",6.62],["en",6.84],["el",7.02],["desvan",7.14],["de",7.54],["tu",7.66],["abuelo",7.78],["una",8.64],["caja",8.82],["de",9.1],["madera",9.24],["llena",9.96],["de",10.32],["polvo",10.48],["dentro",11.48],["hay",11.88],["un",12.08],["aparato",12.2],["con",12.6],["forma",12.84],["de",13.12],["antena",13.32],["un",14.12],["boton",14.28],["rojo",14.6],["y",15],["una",15.38],["etiqueta",15.54],["escrita",16.02],["a",16.54],["mano",16.7],["director",17.52],["de",17.98],["suenos",18.34],["usar",19.24],["con",19.64],["cuidado",19.88],["tu",21],["abuelo",21.12],["era",21.52],["inventor",21.68],["o",22.62],["eso",22.86],["decia",23.06],["la",23.48],["familia",23.62],["nadie",24.54],["le",24.92],["creyo",25.04],["nunca",25.4],["lees",26.34],["las",26.72],["instrucciones",26.88],["apuntas",28.18],["la",28.62],["antena",28.8],["a",29.2],["cualquier",29.32],["casa",29.72],["esperas",30.72],["a",31.18],["que",31.28],["su",31.36],["dueno",31.54],["se",31.82],["duerma",31.98],["pulsas",32.84],["el",33.24],["boton",33.44],["y",33.9],["entras",34.62],["en",35],["su",35.24],["sueno",35.38],["no",36.22],["como",36.52],["invitado",36.72],["como",37.68],["director",37.92],["tu",39.08],["eliges",39.22],["el",39.6],["escenario",39.82],["tu",40.86],["eliges",41.04],["lo",41.46],["que",41.72],["pasa",41.82],["tu",42.74],["eliges",42.9],["el",43.32],["guion",43.6],["miras",44.6],["por",44.98],["la",45.14],["ventana",45.28],["al",46.32],["final",46.42],["de",46.64],["la",46.82],["calle",46.92],["esta",47.22],["la",47.56],["casa",47.7],["de",47.94],["sara",48.14],["sara",48.92],["de",49.64],["tu",49.76],["clase",49.88],["sara",50.66],["a",51.3],["la",51.38],["que",51.44],["llevas",51.58],["dos",51.88],["anos",52.16],["intentando",52.5],["decirle",53.18],["algo",53.74],["mas",54],["largo",54.26],["que",54.58],["hola",54.84],["su",55.98],["luz",56.14],["se",56.42],["acaba",56.8],["de",57.1],["apagar",57.3],["antes",58.34],["de",58.6],["seguir",58.78],["si",59.6],["te",59.68],["gustan",59.78],["estas",60.1],["historias",60.32],["de",60.88],["y",61.14],["si",61.14],["suscribete",62.22],["al",62.8],["canal",62.94],["y",63.2],["activa",63.4],["la",63.76],["campanita",63.86],["asi",64.76],["no",64.98],["te",65.16],["pierdes",65.28],["la",65.58],["proxima",65.72],["y",66.6],["ahora",66.76],["si",67],["pulsa",67.68],["el",67.88],["boton",68.08],["lo",69.42],["primero",69.56],["que",69.84],["notas",70.04],["es",70.42],["el",70.6],["silencio",70.8],["luego",71.88],["el",72.24],["suelo",72.78],["es",73.72],["blando",73.88],["como",74.66],["un",74.86],["colchon",75.08],["gigante",75.58],["estas",76.72],["en",77.1],["un",77.22],["pasillo",77.34],["infinito",77.8],["lleno",78.8],["de",79],["puertas",79.18],["de",79.58],["colores",79.78],["y",80.68],["en",80.84],["una",80.94],["de",81.1],["ellas",81.26],["pone",81.5],["sara",81.88],["abres",83.48],["estas",84.32],["dentro",84.72],["antes",85.94],["de",86.18],["hacer",86.36],["nada",86.56],["tienes",87.24],["que",87.34],["saber",87.5],["una",87.78],["cosa",88],["esto",88.8],["no",89.08],["es",89.32],["tan",89.5],["raro",89.56],["como",89.9],["parece",90.12],["cada",91.04],["noche",91.24],["pasamos",91.54],["unas",92.1],["dos",92.38],["horas",92.64],["sonando",92.94],["repartidas",93.76],["en",94.26],["varios",94.52],["ratos",94.78],["y",95.62],["la",95.82],["ciencia",95.92],["lleva",96.34],["decadas",96.68],["intentando",97.2],["entrar",97.98],["ahi",98.42],["dentro",98.64],["en",99.62],["1981",99.86],["el",101.56],["investigador",101.7],["stephen",102.3],["laberge",102.68],["demostro",103.32],["que",103.86],["algunas",104],["personas",104.28],["pueden",104.86],["saber",105.24],["que",105.6],["estan",105.82],["sonando",106.14],["sin",106.74],["despertarse",107.1],["y",107.88],["avisar",108.4],["desde",108.82],["dentro",109],["del",109.42],["sueno",109.64],["moviendo",110.02],["los",110.5],["ojos",110.72],["de",111],["una",111.2],["forma",111.38],["pactada",111.68],["antes",112.24],["de",112.6],["dormir",112.82],["izquierda",113.64],["derecha",114.62],["izquierda",115.52],["derecha",116.34],["se",117.34],["llaman",117.56],["suenos",117.86],["lucidos",118.5],["y",119.58],["en",119.86],["2021",120],["cientificos",121.04],["de",121.7],["cuatro",121.82],["paises",122.12],["consiguieron",122.58],["algo",123.28],["mas",123.56],["loco",123.94],["todavia",124.32],["le",125.26],["hicieron",125.44],["preguntas",125.74],["a",126.04],["gente",126.46],["que",126.7],["estaba",126.9],["en",127.22],["pleno",127.42],["sueno",127.84],["lucido",128.22],["por",128.98],["ejemplo",129.2],["cuanto",130.1],["es",130.46],["8",130.7],["menos",131.08],["6",131.3],["y",132.12],["algunos",132.36],["contestaron",132.76],["desde",133.68],["el",133.94],["sueno",134.22],["moviendo",135.02],["los",135.42],["ojos",135.62],["dos",135.92],["veces",136.26],["o",137.3],["sea",137.4],["que",137.96],["hablar",138.04],["con",138.26],["alguien",138.5],["que",138.76],["esta",139],["sonando",139.24],["ya",139.78],["se",140.38],["ha",140.54],["hecho",140.66],["pero",141.34],["nadie",141.6],["habia",142.02],["tenido",142.34],["un",142.7],["boton",143],["rojo",143.4],["miras",144.48],["alrededor",144.9],["el",146.04],["sueno",146.16],["de",146.44],["sara",146.6],["es",146.84],["una",147.12],["playa",147.3],["el",148.2],["mar",148.38],["es",148.58],["de",148.78],["color",148.92],["lila",149.12],["la",150.06],["arena",150.2],["es",150.44],["de",150.72],["azucar",150.84],["y",151.72],["sara",151.88],["esta",152.12],["sentada",152.44],["en",152.94],["la",153.08],["orilla",153.22],["leyendo",153.54],["un",154.28],["libro",154.48],["sin",154.76],["letras",155.04],["muy",155.4],["bien",156.36],["hora",157.04],["de",157.32],["dirigir",157.48],["primer",158.44],["plan",158.72],["aparecer",159.46],["tu",160.04],["pero",160.82],["no",161.06],["el",161.42],["tu",161.62],["de",161.92],["verdad",162.08],["una",162.84],["version",163.04],["mejorada",163.46],["mas",164.54],["alto",164.78],["con",165.46],["el",165.58],["pelo",165.72],["perfecto",165.94],["montado",166.98],["en",167.52],["un",167.68],["caballo",167.82],["blanco",168.22],["te",169.24],["concentras",169.36],["pulsas",170.38],["el",170.82],["boton",171],["y",171.86],["apareces",172.02],["mas",173.14],["alto",173.46],["si",174.04],["con",174.62],["el",174.76],["pelo",174.88],["perfecto",175.06],["si",175.92],["pero",176.66],["el",176.84],["caballo",177],["es",177.38],["un",177.7],["pato",177.92],["un",178.68],["pato",178.94],["gigante",179.42],["que",180.38],["no",180.56],["para",180.72],["de",181],["decir",181.16],["cuac",181.6],["sara",182.18],["te",182.78],["mira",183.04],["mira",183.9],["al",184.2],["pato",184.42],["y",185.38],["se",185.46],["rie",185.6],["tanto",185.92],["que",186.28],["se",186.66],["cae",186.8],["de",187.08],["la",187.16],["arena",187.3],["no",188.12],["era",188.48],["el",188.66],["plan",188.78],["pero",189.52],["se",189.82],["rie",190],["lo",190.9],["apuntas",191.1],["segunda",192.26],["noche",192.74],["esta",193.68],["vez",193.92],["lo",194.14],["preparas",194.36],["mejor",194.82],["lees",195.72],["mas",195.98],["instrucciones",196.18],["de",196.8],["tu",197.02],["abuelo",197.12],["y",197.96],["en",198.02],["la",198.12],["pagina",198.22],["4",198.46],["pone",198.92],["algo",199.4],["raro",199.66],["el",200.64],["olfato",200.78],["manda",201.24],["mas",201.8],["que",202.08],["el",202.24],["boton",202.38],["eso",203.4],["tambien",203.66],["tiene",204.1],["explicacion",204.34],["en",205.48],["2009",205.64],["unos",206.18],["investigadores",206.72],["alemanes",207.46],["pusieron",208.06],["olores",208.5],["debajo",208.88],["de",209.28],["la",209.46],["nariz",209.58],["de",209.9],["gente",210.08],["dormida",210.36],["en",211.18],["plena",211.32],["fase",211.62],["de",211.9],["suenos",212.08],["cuando",213],["olia",213.28],["a",213.64],["rosas",213.84],["los",214.52],["suenos",214.62],["solian",214.98],["ser",215.38],["mas",215.66],["agradables",215.96],["cuando",217.04],["olia",217.3],["a",217.74],["huevos",217.92],["podridos",218.16],["mas",219.04],["desagradables",219.34],["los",220.7],["que",220.88],["dormian",221.02],["no",221.46],["se",221.78],["despertaban",221.92],["pero",222.96],["el",223.2],["olor",223.36],["se",223.66],["colaba",223.9],["en",224.28],["el",224.44],["sueno",224.56],["asi",225.48],["que",225.74],["esa",225.98],["noche",226.22],["antes",226.86],["de",227.16],["pulsar",227.34],["el",227.7],["boton",227.82],["dejas",228.56],["una",228.86],["flor",229.08],["en",229.36],["la",229.54],["ventana",229.62],["de",230.04],["sara",230.22],["una",231.14],["rosa",231.36],["robada",232.2],["del",232.68],["jardin",232.9],["de",233.2],["su",233.38],["madre",233.5],["pero",234.16],["eso",234.4],["es",234.82],["otro",235.02],["tema",235.22],["y",236.14],["funciona",236.26],["el",237.28],["sueno",237.44],["de",237.78],["sara",237.92],["se",238.16],["llena",238.42],["de",238.72],["flores",238.88],["hay",239.76],["un",239.92],["baile",240.08],["hay",240.82],["musica",240.98],["hay",241.92],["farolillos",242.08],["en",242.68],["el",242.92],["cielo",243.06],["y",243.84],["tu",243.94],["por",244.52],["fin",244.68],["consigues",245.44],["decirle",245.88],["algo",246.38],["mas",246.62],["largo",246.88],["que",247.2],["hola",247.48],["le",248.62],["dices",248.74],["hola",249.6],["que",250.26],["tal",250.36],["record",251.08],["superado",251.58],["por",252.68],["la",252.88],["manana",253],["en",253.68],["clase",253.76],["sara",254.54],["se",254.74],["sienta",254.98],["a",255.34],["tu",255.46],["lado",255.5],["y",256.18],["te",256.3],["dice",256.42],["que",257.32],["raro",257.48],["esta",258.32],["noche",258.58],["he",258.84],["sonado",259.04],["contigo",259.38],["y",260.22],["con",260.44],["un",260.62],["pato",260.78],["te",261.4],["pones",261.74],["rojo",262.04],["como",262.62],["un",262.9],["tomate",263.14],["ella",264],["tambien",264.36],["tercera",265.58],["noche",266.02],["te",266.86],["vienes",267.02],["arriba",267.38],["si",268.28],["un",268.4],["olor",268.56],["cambia",268.84],["un",269.24],["sueno",269.38],["que",270.14],["pasa",270.22],["si",270.5],["le",270.7],["dices",270.82],["algo",271.1],["al",271.48],["oido",271.66],["eso",272.56],["tambien",272.86],["lo",273.32],["han",273.46],["probado",273.56],["en",274.42],["el",274.56],["mit",274.68],["un",275.72],["grupo",275.82],["de",276.02],["investigadores",276.2],["creo",276.88],["un",277.32],["guante",277.5],["llamado",277.74],["dormio",278.26],["cuando",279.38],["la",279.54],["persona",279.74],["empieza",280.08],["a",280.42],["dormirse",280.64],["el",281.44],["guante",281.54],["lo",281.82],["nota",282.02],["y",282.26],["una",282.66],["voz",282.82],["le",283.04],["dice",283.24],["una",283.5],["palabra",283.74],["por",284.56],["ejemplo",284.72],["arbol",285.68],["y",286.54],["en",286.66],["muchos",286.78],["casos",286.98],["la",287.36],["persona",287.8],["acababa",288.24],["sonando",288.74],["con",289.32],["arboles",289.54],["lo",290.36],["llamaron",290.62],["incubacion",291.1],["de",291.96],["suenos",292.16],["asi",293.14],["que",293.42],["preparas",293.64],["tu",294.12],["guion",294.26],["un",295.12],["sueno",295.26],["perfecto",295.76],["tu",297.06],["salvando",297.18],["a",298],["sara",298.14],["de",298.36],["un",298.56],["dragon",298.76],["tu",299.56],["ganando",299.88],["la",300.54],["final",300.72],["del",300.94],["mundial",301.24],["de",301.62],["futbol",301.88],["tu",302.78],["cantando",302.98],["en",303.8],["un",303.94],["concierto",304.06],["con",304.64],["50",304.88],["000",304.88],["personas",305.74],["gritando",306.24],["tu",306.92],["nombre",307.1],["pulsas",307.98],["el",308.34],["boton",308.52],["y",309.38],["todo",309.56],["sale",309.96],["fatal",310.48],["el",311.66],["dragon",311.86],["es",312.24],["de",312.38],["peluche",312.5],["el",313.4],["mundial",313.62],["lo",313.92],["juegas",314.24],["en",314.52],["pijama",314.74],["y",315.5],["en",315.68],["el",315.78],["concierto",315.86],["cuando",316.4],["abres",316.68],["la",317.22],["boca",317.36],["solo",317.88],["sale",318.16],["un",318.48],["cuac",318.8],["como",319.46],["el",320.1],["pato",320.26],["porque",320.98],["hay",321.34],["algo",321.6],["que",321.84],["tu",322.02],["abuelo",322.16],["no",322.54],["explico",322.74],["en",323.28],["las",323.38],["instrucciones",323.48],["los",324.82],["suenos",324.96],["no",325.36],["se",325.76],["dejan",325.9],["dirigir",326.22],["del",326.68],["todo",326.84],["mezclan",327.76],["lo",328.16],["que",328.3],["vivimos",328.42],["lo",329.28],["que",329.36],["nos",329.46],["preocupa",329.6],["y",330.28],["lo",330.48],["que",330.58],["sentimos",330.68],["a",331.52],["su",331.82],["manera",331.96],["tu",332.86],["puedes",332.98],["poner",333.34],["el",333.62],["escenario",333.82],["pero",334.7],["los",334.98],["recuerdos",335.16],["los",336.24],["miedos",336.36],["y",336.9],["las",337.2],["ganas",337.38],["son",337.88],["de",338.62],["quien",338.8],["suena",338.94],["y",340.02],["entonces",340.24],["en",341.1],["mitad",341.28],["del",341.52],["concierto",341.76],["todo",342.7],["se",342.86],["oscurece",343.08],["el",343.62],["escenario",344.28],["desaparece",344.76],["la",346.06],["musica",346.16],["se",346.5],["para",346.5],["estas",347.68],["en",348.02],["una",348.18],["habitacion",348.36],["gris",348.9],["vacia",349.82],["y",350.98],["en",351.04],["una",351.14],["esquina",351.3],["esta",351.72],["sara",352.4],["pequena",353.2],["de",354.3],["unos",354.36],["siete",354.52],["anos",354.86],["llorando",355.94],["esto",357.16],["ya",357.48],["no",357.76],["lo",357.9],["has",358.02],["puesto",358.14],["tu",358.34],["te",359.3],["acercas",359.44],["la",360.52],["sara",360.68],["pequena",360.92],["te",361.28],["dice",361.6],["que",361.84],["se",362.02],["ha",362.18],["perdido",362.28],["que",363.24],["en",363.4],["su",363.56],["ciudad",363.68],["antigua",363.94],["tenia",364.5],["amigas",364.82],["que",365.72],["aqui",365.8],["no",366.04],["conoce",366.28],["a",366.74],["nadie",366.86],["que",367.6],["siempre",367.72],["se",368.02],["sienta",368.22],["junto",368.58],["a",368.76],["la",368.98],["ventana",369.06],["para",369.46],["mirar",369.68],["fuera",370],["porque",370.36],["en",370.9],["clase",371.1],["no",371.32],["tiene",371.64],["con",371.92],["quien",372.18],["hablar",372.3],["te",373.18],["quedas",373.42],["helado",373.86],["tu",374.88],["siempre",375.02],["pensaste",375.26],["que",375.78],["sara",375.98],["se",376.26],["sentaba",376.46],["junto",376.84],["a",377.06],["la",377.24],["ventana",377.32],["porque",377.72],["era",378.02],["misteriosa",378.24],["interesante",379.44],["inalcanzable",380.7],["no",382.16],["se",382.86],["sentaba",383],["ahi",383.44],["porque",383.7],["estaba",384.12],["sola",384.5],["te",385.54],["sientas",385.66],["a",386.04],["su",386.2],["lado",386.26],["sin",386.98],["boton",387.22],["sin",388.1],["pato",388.22],["sin",389.08],["guion",389.26],["y",390.06],["le",390.18],["dices",390.28],["lo",390.56],["unico",390.82],["que",391.16],["se",391.36],["te",391.48],["ocurre",391.58],["yo",392.48],["puedo",392.74],["ser",392.96],["tu",393.24],["amigo",393.38],["si",394.02],["quieres",394.28],["la",395.2],["habitacion",395.4],["gris",395.88],["se",396.22],["llena",396.4],["de",396.66],["luz",396.8],["despacio",397.5],["como",398.18],["un",398.78],["amanecer",399.06],["te",400.08],["despiertas",400.26],["con",400.84],["el",401.04],["aparato",401.16],["en",401.52],["las",401.66],["manos",401.8],["son",402.6],["las",402.8],["cuatro",403.02],["de",403.34],["la",403.56],["manana",403.66],["y",404.48],["por",404.62],["primera",404.78],["vez",405.12],["te",405.5],["sientes",405.94],["mal",406.28],["porque",407.06],["lo",407.3],["que",407.48],["has",407.6],["visto",407.74],["no",408.06],["era",408.42],["tuyo",408.6],["era",409.4],["de",409.64],["ella",409.84],["sus",410.56],["miedos",410.72],["sus",411.68],["secretos",411.8],["lo",412.8],["mas",412.9],["privado",413.1],["que",413.56],["tiene",413.72],["una",413.96],["persona",414.16],["y",415.04],["tu",415.2],["entraste",415.42],["sin",416.14],["llamar",416.42],["sin",417.18],["pedir",417.34],["permiso",417.68],["tres",418.66],["noches",418.9],["seguidas",419.44],["miras",420.56],["la",420.96],["etiqueta",421.1],["otra",421.52],["vez",421.7],["usar",422.52],["con",422.88],["cuidado",423.16],["ahora",424.22],["entiendes",424.48],["lo",425.1],["que",425.24],["queria",425.36],["decir",425.64],["tu",425.96],["abuelo",426.16],["esa",427.04],["manana",427.36],["vas",427.62],["a",428.12],["buscar",428.26],["a",428.5],["sara",428.68],["a",428.88],["su",429.04],["casa",429.18],["antes",429.8],["de",430.12],["clase",430.28],["te",431.04],["tiemblan",431.18],["las",431.54],["piernas",431.78],["llevas",432.64],["la",432.92],["caja",433.1],["de",433.34],["madera",433.48],["debajo",433.8],["del",434.2],["brazo",434.4],["y",434.78],["se",435.28],["lo",435.42],["cuentas",435.54],["todo",436.02],["el",436.9],["desvan",437.04],["el",437.96],["boton",438.02],["el",438.84],["pato",438.96],["la",439.76],["rosa",439.84],["de",440.1],["su",440.26],["madre",440.42],["el",441.12],["dragon",441.24],["de",441.56],["peluche",441.7],["y",442.08],["la",442.7],["habitacion",442.82],["gris",443.36],["sara",444.24],["no",444.58],["dice",444.82],["nada",445.04],["durante",445.32],["un",445.66],["rato",445.92],["muy",446.24],["largo",446.58],["luego",447.38],["te",447.7],["pregunta",447.9],["por",448.32],["que",449.2],["me",449.44],["lo",449.58],["cuentas",449.68],["y",450.54],["tu",450.72],["le",450.88],["dices",451.04],["la",451.3],["verdad",451.48],["que",451.84],["porque",452.34],["no",452.58],["esta",452.84],["bien",453.06],["entrar",453.28],["en",453.62],["la",453.78],["cabeza",453.9],["de",454.18],["alguien",454.38],["sin",454.66],["permiso",454.92],["que",455.84],["lo",455.94],["que",456.06],["viste",456.16],["esa",456.44],["noche",456.72],["no",456.98],["te",457.32],["tocaba",457.46],["verlo",457.82],["y",458.28],["que",458.7],["si",458.8],["un",458.96],["dia",459.12],["te",459.28],["cuenta",459.46],["sus",459.82],["cosas",459.98],["quieres",460.62],["que",460.88],["sea",461.08],["porque",461.34],["ella",461.66],["quiere",461.98],["no",462.7],["porque",462.9],["tu",463.18],["tengas",463.4],["un",463.82],["boton",463.96],["sara",464.94],["te",465.16],["mira",465.38],["coge",466.1],["el",466.36],["aparato",466.52],["lo",467.38],["mira",467.46],["por",467.66],["todos",467.92],["lados",468.24],["y",468.64],["lo",469.34],["tira",469.46],["al",469.68],["cubo",469.84],["de",470.16],["la",470.24],["basura",470.34],["luego",471.22],["sonrie",471.54],["la",472.66],["verdad",472.84],["es",473.08],["que",473.36],["me",473.44],["alegro",473.58],["de",473.9],["que",474.02],["fueras",474.12],["tu",474.46],["te",475.04],["dice",475.14],["el",475.4],["pato",476.08],["me",476.42],["hizo",476.56],["reir",476.76],["por",477.1],["primera",477.32],["vez",477.7],["en",477.96],["meses",478.14],["ese",479.2],["dia",479.44],["en",479.98],["clase",480.1],["sara",480.9],["no",481.02],["se",481.3],["sienta",481.46],["junto",481.8],["a",482],["la",482.18],["ventana",482.24],["se",482.96],["sienta",483.22],["a",483.62],["tu",483.76],["lado",483.82],["y",484.08],["a",484.66],["la",484.76],["hora",484.82],["del",485],["recreo",485.2],["te",485.7],["presenta",485.86],["a",486.36],["dos",486.48],["chicas",486.62],["nuevas",486.94],["que",487.22],["ha",487.52],["conocido",487.64],["y",488.14],["vosotros",488.64],["les",489.12],["presentais",489.34],["a",489.92],["vuestros",490.08],["amigos",490.34],["y",490.68],["por",491.32],["la",491.5],["tarde",491.64],["todos",492.22],["juntos",492.4],["os",492.86],["comeis",493.28],["un",493.62],["helado",493.84],["en",494.12],["el",494.26],["parque",494.38],["sin",495.04],["botones",495.36],["sin",496.24],["guion",496.54],["sin",497.28],["trucos",497.46],["porque",498.38],["eso",498.68],["es",499],["lo",499.22],["curioso",499.36],["pasaste",500.26],["tres",500.72],["noches",501.06],["intentando",501.52],["controlar",502.18],["lo",502.72],["que",502.96],["sara",503.08],["sonaba",503.32],["contigo",503.86],["y",504.4],["basto",504.84],["una",505.22],["manana",505.46],["diciendole",505.88],["la",506.5],["verdad",506.64],["para",506.96],["que",507.44],["quisiera",507.58],["pasar",507.96],["el",508.26],["dia",508.52],["contigo",508.7],["de",509.3],["verdad",509.46],["esa",510.26],["noche",510.64],["antes",511.22],["de",511.46],["dormir",511.62],["te",512.3],["llega",512.36],["un",512.58],["mensaje",512.76],["es",513.7],["de",513.84],["sara",513.98],["dice",514.66],["esta",515.54],["noche",515.8],["voy",516.1],["a",516.36],["sonar",516.5],["contigo",516.84],["pero",517.7],["lo",517.86],["voy",518.06],["a",518.24],["decidir",518.36],["yo",518.8],["y",519.04],["debajo",519.58],["un",519.96],["emoji",520.56],["de",520.56],["un",521.06],["pato",521.26],["si",522.42],["te",522.78],["ha",522.9],["gustado",522.98],["esta",523.24],["historia",523.58],["suscribete",524.36],["al",524.78],["canal",524.94],["para",525.22],["ver",525.44],["mas",525.66],["videos",525.92],["de",526.24],["y",526.58],["si",526.58],["y",527.12],["cuentame",527.86],["en",528.24],["los",528.4],["comentarios",528.54],["que",529.5],["harias",529.74],["tu",530.06],["con",530.28],["el",530.5],["boton",530.62],["rojo",530.96]],sa=(n,e=0)=>{for(let[t,i]of bg)if(i>=e&&t===n)return i;return e};var ra=(n,e,t=200,i=200)=>{let s=new K(new De(t,i),N(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},jn=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Pe(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})},Wu=(n,e=1.2,t)=>ft(Pe(512,280,i=>{i.clearRect(0,0,512,280),i.fillStyle="#FBF7EC",i.strokeStyle="#2A2A34",i.lineWidth=8,i.beginPath(),i.roundRect(10,10,492,200,60),i.fill(),i.stroke(),i.beginPath(),i.moveTo(110,205),i.lineTo(80,270),i.lineTo(170,205),i.fill(),i.stroke(),i.fillStyle="#2A2A34",i.font=`900 ${t||(n.length>14?40:n.length>10?54:80)}px Fraunces`,i.textAlign="center",i.textBaseline="middle",i.fillText(n,256,112)}),e,e*.55);function Tg(n,e=.5){let t=new xe,i=Pe(1024,256,r=>{r.clearRect(0,0,1024,256);let o=je(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,u=r.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),u.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=u,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new K(new De(400,100),new ut({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:fn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function wg(n,e=0,t=-1){for(let i=0;i<4;i++){let s=B(5,.22,.6,N("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new K(new _i(.16,.35,6),N(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function Xu(n,e,t,i=1){let s=new K(new Lt(.1*i,16,12),N("#D83A2A",{roughness:.35}));return s.position.set(n,e,t),s.castShadow=!0,s}function Ic(n,e=40,t=3,i=[-12,12,-40,4]){let s=je(t),r=Pe(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=ft(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function qu(n,e=200,t=5,i=10,s=30,r=2){let o=je(t),a=Pe(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=ft(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}ze.pasteleria=n=>{n.fog=new qe("#F3D2C0",.02),n.add(ir(16,14,"#F2E6DA","#E2CFC0",8)),n.add(B(16,5,.3,N("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(B(.12,5,.05,N("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(B(5.4,1,.9,N("#8A5A3C"),0,.5,-1.2)),n.add(B(5.5,.08,1,N("#F4EEE6"),0,1.04,-1.2)),n.add(B(3.6,.1,.5,N("#F4EEE6"),0,2.1,-3)),n.add(B(3.6,.1,.5,N("#F4EEE6"),0,2.9,-3));let e=ft(jn(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new Ke("#FFF0F0","#A07060",1));let t=vt("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new Ht("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};ze.espacio=n=>{n.background=new ye("#05060E"),Dn(n,2600,200,3),n.add(new Ke("#8FA8FF","#101020",.5));let e=new Qs("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};ze.aula=n=>{n.fog=new qe("#E8DCC8",.02),n.add(ir(16,16,"#C9B89A","#BBA98A",10)),n.add(B(16,5,.3,N("#E8DCC0"),0,2.5,-3.6)),n.add(B(4.4,1.8,.06,N("#2F5A48"),0,2.3,-3.42)),n.add(B(4.6,.1,.2,N("#8E6242"),0,1.36,-3.35));let e=ft(Pe(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new Ke("#FFFFFF","#9A8A70",1)),n.add(vt("#FFE8C8",2.2,[-6,8,6],10,40))};ze.ruaV=(n,e)=>{Ir(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(Ic(n,60,4),qu(n,260,6,9,40))};ze.apagon=(n,e)=>{n.fog=new qe("#0A0C18",.03),Gt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),Dn(n,1800,200,4),jo(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(Wi(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(Wi(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new Ke("#5A64A8","#141420",.5)),n.add(vt("#8A9AE0",.7,[-10,20,10],30,90))};ze.azotea=(n,e)=>{n.background=new ye("#03040A"),n.fog=new qe("#060814",.008),Dn(n,4200,200,9),Tg(n,e.ang??.45),Mi(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=B(16,.3,12,N("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(B(16,.5,.2,N("#4A4A54"),0,.25,-8)),n.add(B(1.4,1.2,1.4,N("#4A4A54"),4.5,.6,-5)),n.add(new Ke("#6A78C8","#141420",.55)),n.add(vt("#9AAAF0",.6,[-6,10,6],12,40))};ze.panaderia=n=>{ze.pasteleria(n);let e=ft(jn(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};ze.metro=n=>{n.background=new ye("#0A0C10"),n.fog=new qe("#0C1014",.07);let e=N("#4A4E54",{roughness:.9,side:an}),t=new K(new Ft(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new xe,s=new K(new Ft(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=B(6.4,.1,60,N("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(B(.08,.12,60,N("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(B(2.2,.08,.2,N("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new Ht("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=Ye("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new Ke("#8A90A0","#202024",1.1))};ze.bosque=(n,e)=>{n.fog=new qe(e.nieve?"#E8EEF4":"#C8D0B8",.025),Gt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),ra(n,e.nieve?"#F2F4F8":"#6E8A48");let t=je(14);for(let i=0;i<26;i++)Tn(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=Wi(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),Ic(n,0)}n.add(new Ke("#E9EEFF","#5A6A4A",.95)),n.add(vt("#FFE8C0",2.4,[-10,14,8],18,60))};ze.rio=(n,e)=>{ze.parque(n,e);let t=new K(new De(60,3.4),new Qe({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};ze.playa=(n,e)=>{let t=!!e.dusk;n.fog=new qe(t?"#F2A880":"#CFE8F0",.006),Gt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=Ye(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=ra(n,"#E8D4A0"),r=new K(new De(800,400),new Qe({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=B(800,.02,.6,N("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new K(new Go(1.1,0),N("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new Ke(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(vt(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};ze.svalbard=n=>{n.fog=new qe("#C8D8E8",.02),Gt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),ra(n,"#F4F6FA");let e=je(19);for(let l=0;l<8;l++){let c=new K(new _i(10+e()*12,10+e()*10,7),N("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new K(new Lt(14,32,16,0,Math.PI*2,0,Math.PI/2),N("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=B(3,4.4,6,N("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=B(1.4,2.2,.1,N("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Bt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=Ye("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=Ye("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new Ke("#D8E8FF","#8A9AB0",1.1)),n.add(vt("#F0F4FF",1.6,[-8,10,8],16,50))};ze.huerto=(n,e)=>{ze.parque(n,e),wg(n,0,-1.4)};ze.biblio=n=>{n.fog=new qe("#4A3A2A",.03),n.add(xi(18,14,"#6D4A33")),n.add(B(18,6,.3,N("#5A3E2A"),0,3,-3.4));let e=je(8);for(let s=0;s<5;s++){n.add(B(14,.06,.4,N("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(B(o,a,.3,N(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new Ke("#FFE8C8","#3A2A1C",.7));let t=new Ht("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=Ye("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};ze.hotel=n=>{n.fog=new qe("#E8D8C0",.02),n.add(xi(18,14,"#8A5A3A")),n.add(B(18,6,.3,N("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(B(2.4,2.6,.05,N("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=ft(Pe(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=B(3.2,.6,2.4,N("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(B(3.3,1.4,.2,N("#6A3A2A"),0,.7,-2.8)),Ic(n,0);let t=ft(Pe(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new Ke("#FFF0E0","#8A6A4A",1)),n.add(vt("#FFE0B0",2,[-4,8,6],10,30))};ze.selva=n=>{n.fog=new qe("#7AA870",.05),Gt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),ra(n,"#3E5A2A");let e=je(23);for(let t=0;t<40;t++)Tn(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);qu(n,160,9,12,12,3),n.add(new Ke("#D8F0C8","#2A3A1A",.9)),n.add(vt("#FFF0C0",2.2,[-6,14,4],14,50))};ze.desierto=n=>{ze.sabana(n,{})};var Uc=(n,e,t=200,i=200)=>{let s=new K(new De(t,i),N(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var Rg=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return Pe(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function Lr(n,e=.9,t={}){let i=Rg(n,t),s=new K(new De(e,e*(t.h||360)/(t.w||512)),new Qe({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function oa(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new xe,[u,d,p,g]=s,y=()=>l?new Qe({map:ta(i,3,3),roughness:.95}):N(i,{roughness:.9}),m=u-p/2+e/2,f=e/2-(u+p/2),M=d-g/2,S=t-(d+g/2);h.add(B(m,t,.3,y(),-e/2+m/2,t/2,0)),h.add(B(f,t,.3,y(),e/2-f/2,t/2,0)),h.add(B(p,M,.3,y(),u,M/2,0)),h.add(B(p,S,.3,y(),u,t-S/2,0));let v=N("#F4F0E4");for(let[O,z,V,j]of[[u-p/2,d,.1,g+.1],[u+p/2,d,.1,g+.1],[u,d+g/2,p+.2,.1],[u,d,.05,g]])h.add(B(V,j,.36,v,O,z,0));h.add(B(p+.4,.1,.5,v,u,d-g/2-.03,.12));let C=3.2,T=N(o,{roughness:.9});h.add(B(p+3,t,.2,T,u,t/2,-C)),h.add(B(.2,t,C,T,u-p/2-1.4,t/2,-C/2)),h.add(B(.2,t,C,T,u+p/2+1.4,t/2,-C/2)),h.add(B(p+3,.2,C,N("#8A6A4A"),u,M-c,-C/2)),h.add(B(p+3,.2,C,T,u,d+g/2+.5,-C/2));let R=new Ht("#FFC880",a?9:2.5,7,1.4);R.position.set(u,d+.6,-1.2),h.add(R);let F=Bt(p+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(u,d,-C+.12),h.add(F);let A=B(p-.04,g,.06,N("#E8E2D2",{roughness:.8}),u,d,.1);A.castShadow=!1,h.add(A);let E=[];for(let O=0;O<10;O++){let z=B(p-.04,.015,.07,"#B8B0A0",u,0,.11,!1);h.add(z),E.push([z,O])}let w=O=>{let z=Math.max(.001,g*O);A.scale.y=z/g,A.position.y=d+g/2-z/2,A.visible=O>.01,E.forEach(([V,j])=>{let q=d+g/2-(j+.5)*g/10;V.visible=O>.01&&q>d+g/2-z,V.position.y=q})};return w(0),h.userData={persiana:w,luz:O=>{R.intensity=O?9:2.5,F.material.emissiveIntensity=O?.35:.08},win:s,lamp:R},h.children.forEach(O=>{O.castShadow=O.castShadow??!0,O.receiveShadow=!0}),h}function Lc(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new xe;l.add(B(i,s,r,N(e,{roughness:.9}),0,s/2,-r/2));let c=new K(new Ft(.01,i*.62,2.4,4,1),N(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(B(1.1,2.1,.1,N(o),0,1.05,.02)),l.add(B(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new Qe({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[u,d]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(B(1.3,1.2,.06,h(),u,d,.03)),l.add(B(1.5,.1,.2,"#F4F0E4",u,d-.65,.08));return l.add(B(2,.2,1.2,N("#B8AC9D"),0,.1,.6)),l.children.forEach(u=>{u.castShadow=!0,u.receiveShadow=!0}),l}function Dc(n=4){let e=new xe,t=je(n*7);for(let i=0;i<n*3;i++){let s=new K(new Lt(.42+t()*.12,12,10),N(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function Yu(n=8,e="#E8E2D2"){let t=new xe;for(let i=0;i<=n*4;i++)t.add(B(.1,1.3,.05,N(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(B(n,.08,.06,N(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function rr(){let n=new xe,e=je(4);for(let t=0;t<7;t++){let i=new K(new Lt(.35,12,10),N("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new K(new Lt(.08,10,8),N(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function Cg(){let n=new xe;n.add(B(2.2,2,1.8,N("#8A6A4A",{roughness:.9}),0,1,0));let e=B(2.6,.12,2.3,N("#5A3E2A"),0,2.12,0);return n.add(e),n.add(B(.8,1.5,.05,N("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function Zu(n=.6){let e=B(n,n*.8,n,N("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(B(n*1.01,.06,.15,N("#E8D8A8"),0,n*.4,0)),e}function $u(){let n=new xe;n.add(B(.04,1.4,.04,N("#E8667F"),0,.7,0));let e=new K(new Lt(.28,16,12),new Qe({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new K(new Qn(.18,.04,8,16,Math.PI*1.2),N("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=Ye("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Ju(n=.9,e=1.2){let t=Pe(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new xe;i.add(B(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new K(new De(n,e),N("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Qu(n=.9,e=1.2){let t=Pe(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new xe;i.add(B(n+.08,e+.08,.04,"#111",0,0,0));let s=new K(new De(n,e),N("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function Ku(n="#3A4F7A",e="FILOSOF\xCDA"){let t=new xe;t.add(B(.5,.64,.06,N(n),0,0,0));let i=Pe(256,128,r=>{r.fillStyle=n,r.fillRect(0,0,256,128),r.fillStyle="#F2C14E",r.font="900 40px Fraunces",r.textAlign="center",r.fillText(e,128,76)}),s=new K(new De(.46,.23),N("#fff"));return s.material.map=i,s.position.z=.032,t.add(s),t.userData.label=s,t}var Fg=(n,e)=>{ze.quarto(n,e);let t=Ju();t.position.set(-3,2.8,-2.8),n.add(t)};ze.cuartoYo=(n,e)=>{Fg(n,e);let t=oa({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=$u();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=Qu(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&Dn(n,600,120,2)};ze.cuartoElla=(n,e)=>{ze.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(B(2.4,.45,3.2,N("#6B4A33"),1.7,.25,-1.4)),n.add(B(2.3,.3,3,N("#F3EEE4"),1.7,.6,-1.4)),n.add(B(2.38,.22,2,N("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=$u();t.position.set(-3.2,0,-2.2),n.add(t);let i=Qu();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=oa({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Ju(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&Dn(n,600,120,2)};ze.entreCasas=(n,e)=>{let t=!!e.night;n.background=new ye(t?"#0A0C1E":"#9FC8E8"),n.fog=new qe(t?"#0E1028":"#CFE0EE",.02),Gt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&Dn(n,1600,120,5),Uc(n,t?"#24301E":"#6E9A50");let i=oa({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=oa({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=Yu(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new Ke(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(vt(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};ze.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new qe(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),Gt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Uc(n,t?"#24301E":"#6E9A50");let s=B(200,.02,6,N(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=B(200,.1,2,N("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,u,d]of o){let p=Lc({col:u,roof:d,night:t});p.position.set(h,0,-3),n.add(p)}let a=Dc(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Dc(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Dc(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])Tn(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));Mi(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new Ke(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(vt(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};ze.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new qe(t?"#E8A880":"#F2E2C8",.015),Gt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Uc(n,"#6E9A50");let i=Yu(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=rr();s.position.set(1.6,0,-1.2),n.add(s);let r=rr();r.position.set(2.8,0,-2.6),n.add(r);let o=Cg();o.position.set(-2.4,0,-3.2),n.add(o);let a=Lc({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=Lc({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])Tn(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new Ke("#E9EEFF","#6A5A4A",1.05)),n.add(vt(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};ze.esquina=(n,e)=>{ze.barrio(n,e)};ze.concurso=n=>{n.background=new ye("#140C24"),n.fog=new qe("#1A1030",.03);let e=B(20,.2,12,N("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=Ye(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=ft(jn(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=B(1.2,1.1,.7,N("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(B(1.3,.1,.8,N("#F2C14E"),0,1.12,-.6)),n.add(new Ke("#B8A8FF","#2A1A3A",.9));let s=new Gi("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};ze.residencia=n=>{n.fog=new qe("#E8DCC8",.02),n.add(xi(20,14,"#8A6A4A")),n.add(B(20,4,.3,N("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(B(1,2.2,.08,N("#6B4A33"),-7+e*2,1.1,-3.2));let t=ft(jn([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new Ke("#FFFFFF","#9A8A70",1)),n.add(vt("#FFE8C8",2,[-6,8,6],12,40))};var Ur=(n,e,t=200,i=200,s={})=>{let r=new K(new De(t,i),N(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},ds=(n,e=1.6)=>new Qe({color:n,emissive:n,emissiveIntensity:e});function ln(n={}){let e=new xe;e.add(B(.62,.26,.42,N("#8E6242",{roughness:.7}),0,.13,0)),e.add(B(.66,.04,.46,N("#C9A06A"),0,.28,0));let t=new K(new Ft(.015,.02,.7,8),N("#B8BCC4",{metalness:.8,roughness:.3}));t.position.set(-.18,.65,0),t.rotation.z=.25,e.add(t);let i=new K(new Lt(.05,16,12),ds("#5AC8FF",1.2));i.position.set(-.27,.98,0),e.add(i);let s=Ye("#5AC8FF",.5,.7);s.position.copy(i.position),e.add(s);for(let a=0;a<3;a++){let l=new K(new Ft(.035,.035,.03,14),N(["#F2C14E","#E8E2D2","#36AEA2"][a],{metalness:.4}));l.position.set(-.18+a*.1,.31,.12),e.add(l)}let r=new K(new Ft(.09,.1,.08,24),ds("#E2322A",.6));r.position.set(.16,.33,0),e.add(r);let o=ft(jn(["DIRECTOR","DE SUE\xD1OS"],{bg:"#F4ECD6",fg:"#3A2A1A",size:54,w:420,h:150}),.4,.14);return o.position.set(-.06,.14,.215),e.add(o),e.userData={btn:r,tip:i,tg:s},e}var Si=(n,e)=>{let{btn:t,tip:i,tg:s}=n.userData;t.position.y=.33-.035*e,t.material.emissiveIntensity=.6+2.2*e,i.material.emissiveIntensity=1.2+3*e,s.material.opacity=.5+.5*e,s.scale.setScalar(.5+.9*e)};function aa(){let n=new xe,e=N("#7A5232",{roughness:.85});n.add(B(1,.08,.7,e,0,.04,0));for(let[i,s,r,o]of[[1,.06,0,.32],[1,.06,0,-.32],[.06,.7,.47,0],[.06,.7,-.47,0]])n.add(B(i,.42,s,e,r,.25,o));let t=B(1.02,.06,.72,N("#8E6242"),0,.5,-.6);return t.rotation.x=-1.1,n.add(t),n}function ju(){let n=new xe,e=new K(new Ft(.32,.26,.9,20,1,!0),N("#5A6A7A",{metalness:.5,roughness:.4,side:St}));e.position.y=.45,e.castShadow=!0,n.add(e);let t=new K(new Qn(.32,.03,8,24),N("#4A5A6A",{metalness:.6}));return t.rotation.x=Math.PI/2,t.position.y=.9,n.add(t),n}function Nc(n=2.6){let e=new xe,t=Pe(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=ft(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function Pg(n,e={}){return Pe(540,1e3,t=>{let i=t.createLinearGradient(0,0,0,1e3);if(i.addColorStop(0,"#2B2F5A"),i.addColorStop(1,"#141830"),t.fillStyle=i,t.fillRect(0,0,540,1e3),t.fillStyle="#fff",t.textAlign="center",t.font="700 70px Inter",t.fillText(e.hora||"23:47",270,120),t.fillStyle="#F4F0E4",t.beginPath(),t.roundRect(40,300,460,120+n.length*62,34),t.fill(),t.fillStyle="#E8667F",t.beginPath(),t.arc(100,350,34,0,7),t.fill(),t.fillStyle="#fff",t.font="800 40px Inter",t.fillText("S",100,364),t.textAlign="left",t.fillStyle="#2A2A34",t.font="800 36px Inter",t.fillText("Sara",150,362),t.font="600 38px Inter",n.forEach((s,r)=>t.fillText(s,70,440+r*56)),e.pato){let s=440+n.length*62+40;t.fillStyle="#F4F0E4",t.beginPath(),t.roundRect(300,s-60,170,150,30),t.fill(),t.fillStyle="#F6D44A",t.beginPath(),t.ellipse(395,s+40,50,32,0,0,7),t.fill(),t.beginPath(),t.arc(360,s,28,0,7),t.fill(),t.fillStyle="#F2913A",t.beginPath(),t.ellipse(330,s+6,18,8,0,0,7),t.fill(),t.fillStyle="#1A1A24",t.beginPath(),t.arc(362,s-6,5,0,7),t.fill()}})}function Nr(n,e={}){let t=new xe;t.add(B(.62,1.18,.06,N("#1A1A24",{metalness:.4}),0,0,0,!1));let i=new K(new De(.56,1.04),new ut({map:Pg(n,e),toneMapped:!1}));return i.position.z=.032,t.add(i),t}function Ig(n="#FFB25A"){let e=new xe,t=new K(new Ft(.16,.12,.34,12),ds(n,1.8));e.add(t);let i=Ye(n,1,.55);return e.add(i),e}var Dg=(n,e,t,i=3)=>{let s=je(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new K(new Lt(.07+s()*.06,10,8),ds(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=B(.02,.12,.02,N("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};ze.desvan=(n,e)=>{let t=!!e.night;n.background=new ye("#1A120C"),n.fog=new qe("#2A1C12",.05),n.add(xi(16,14,"#6A4630"));for(let h of[-1,1]){let u=B(16,.15,7.5,N("#5A3A26",{roughness:.9}),0,0,0);u.position.set(0,3.3,-1.2+h*2.3),u.rotation.x=h*-.62,u.position.y=3.2,u.position.z=h>0?2.4:-4.4,u.rotation.x=h>0?.62:-.62,h<0&&n.add(u)}n.add(B(16,6,.2,N("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let u=B(.22,.22,9,N("#3A2618"),-6+h*2.4,4.4,-1);n.add(u)}let i=je(6);for(let h=0;h<9;h++){let u=Zu(.5+i()*.5);u.position.set(-5+i()*10,0,-3.6+i()*1.2),u.rotation.y=i(),Math.abs(u.position.x)>1.4&&n.add(u)}let s=B(1.4,.8,.7,N("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(B(1.44,.1,.74,N("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Bt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=Fr(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new K(new Lt(.09,12,10),ds("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(B(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new Ht("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new Ke("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let u=Ye("#FFE8C0",.05,.6);u.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(u),c.push(u)}n.userData.dust=c};ze.pasillo=(n,e)=>{n.background=new ye("#1A1036"),n.fog=new qe("#2A1850",.045),Dn(n,1600,120,7),Ur(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=je(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let d=0;d<26;d++)for(let p of[-1,1]){let g=-2-d*2.2,y=i[(d*2+(p>0?1:0))%i.length],m=B(.12,2.6,1.3,N("#F4ECD6"),p*2.4,1.3,g);n.add(m);let f=B(.08,2.3,1.05,N(y,{roughness:.6}),p*2.35,1.15,g);n.add(f);let M=new K(new Lt(.05,8,6),ds("#F2C14E",.6));M.position.set(p*2.29,1.1,g+.35),n.add(M)}let s=new xe,r=new xe;r.position.set(0,0,.55),s.add(r);let o=B(.08,2.3,1.05,N("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new K(new Lt(.05,8,6),ds("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=ft(jn(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Bt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let d=0;d<14;d++){let p=Ye(["#FFB2E0","#B2D8FF","#FFF2B0"][d%3],.25+t()*.3,.7);p.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(p)}n.add(new Ke("#D8C8FF","#4A3070",1));let h=new Ht("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let u=new Ht("#B8C8FF",10,14,1.4);u.position.set(0,3,-12),n.add(u)};ze.playaSueno=(n,e)=>{n.fog=new qe("#E8B8E0",.018),Gt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=Ye("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new K(new vi(4,40),new ut({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=Ur(n,"#F8EEF2",200,200),r=new K(new De(400,200),new Qe({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=B(400,.02,.3,N("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=je(4);for(let l=0;l<70;l++){let c=Ye("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new xe;c.add(B(.18,2.8,.18,N("#E8A0C0"),0,1.4,0));let h=Ye(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new Ke("#FFE0F6","#B88AC8",1.15)),n.add(vt("#FFD8E8",2,[8,14,-6],14,60))};ze.baile=(n,e)=>{n.background=new ye("#0E0A28"),n.fog=new qe("#1A1240",.03),Dn(n,2400,160,3),Gt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),Ur(n,"#3A2A5A");let t=new K(new vi(3.2,48),new Qe({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),Dg(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=rr();c.position.set(a,0,l),n.add(c)}let i=je(9),s=[];for(let a=0;a<22;a++){let l=Ig(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new Ke("#B8A8FF","#2A1A3A",.7));let r=new Gi("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new Ht("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};ze.estadio=(n,e)=>{n.background=new ye("#0A1020"),n.fog=new qe("#18203A",.02),Dn(n,800,160,5);let t=Pe(512,512,h=>{for(let u=0;u<8;u++)h.fillStyle=u%2?"#3E8A3E":"#4A9A46",h.fillRect(0,u*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new K(new De(40,40),new Qe({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new xe,r=N("#FFFFFF",{roughness:.4});s.add(B(.12,2.4,.12,r,-3.6,1.2,0),B(.12,2.4,.12,r,3.6,1.2,0),B(7.3,.12,.12,r,0,2.4,0));let o=new K(new De(7.2,2.4),new ut({color:"#FFFFFF",transparent:!0,opacity:.18,side:St}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(B(60,1,2,N(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=je(2);for(let h=0;h<4;h++)for(let u=0;u<48;u++)a.push([-24+u+l()*.4,1+h*1.1,-14-h*2]);Tc(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let u=Ye("#FFFFFF",6,.9);u.position.set(h*16,14,-20),n.add(u)}n.add(new Ke("#D8E0FF","#2A3A2A",1));let c=vt("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};ze.concierto=(n,e)=>{n.background=new ye("#0C0820"),n.fog=new qe("#140C2C",.025);let t=B(14,.6,6,N("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),Ur(n,"#140E26").position.y=-.01;let i=Bt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=je(4);for(let l=0;l<9;l++){let c=Ye(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=Fr(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new xe;r.add(B(.03,1.4,.03,N("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new K(new Lt(.06,12,10),N("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=Ye(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new Ke("#B8A8FF","#2A1A3A",.8));let a=new Gi("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};ze.gris=(n,e)=>{n.background=new ye("#1C1E24"),n.fog=new qe("#262830",.06),Ur(n,"#4A4C54"),n.add(B(14,7,.2,N("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(B(.2,7,12,N("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(B(.2,7,12,N("#52545C",{roughness:1}),4.2,3.5,0));let t=Bt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(B(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(B(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new Ke("#A8B0C8","#2A2A30",.6));let i=new Gi("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new Ht("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};ze.labSueno=(n,e)=>{ze.lab(n,e),Gu(n,-1.4,-1.6,"#4A86C7");let t=new xe;t.add(B(.12,1.4,.12,N("#3A3A44"),0,.7,0)),t.add(B(1,.7,.1,N("#20242E"),0,1.7,0));let i=Bt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var lr=[],Lg=999,td=n=>n+1<us.length?us[n+1]:Lg,Bc=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),nd=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[Bc(i,s,t),s,Bc(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,Bc(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},ge=(n,e)=>{let t=us[n],i=td(n),s=Math.min(i,640)-t;lr.push([(r,o)=>Fc(r,o,nd(e(s,t),s)),t,i])},id=(n,e,t)=>{let i=Math.min(e,640)-n;lr.push([(s,r)=>Fc(s,r,nd(t(i,n),i)),n,e])},Rn=(n,e,t)=>{let i=us[n],s=td(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=sa(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>id(r[l],r[l+1],a))},wt=n=>({tipo:"humano",...n}),me=(n={})=>wt({glow:.1,...n}),Ug=()=>Pe(256,256,n=>{n.clearRect(0,0,256,256),n.fillStyle="#5FB04A",n.beginPath(),n.ellipse(120,150,70,45,0,0,7),n.fill(),n.beginPath(),n.ellipse(190,90,34,28,0,0,7),n.fill(),n.fillRect(160,95,30,60),n.fillRect(80,180,18,40),n.fillRect(140,180,18,40),n.beginPath(),n.moveTo(55,150),n.lineTo(5,175),n.lineTo(60,172),n.fill(),n.fillStyle="#F2C14E";for(let e=0;e<5;e++)n.beginPath(),n.moveTo(70+e*22,112-e%2*4),n.lineTo(81+e*22,88),n.lineTo(92+e*22,112),n.fill();n.fillStyle="#111",n.beginPath(),n.arc(198,84,5,0,7),n.fill()}),la=n=>{if(n.dino)return;let e=ft(Ug(),.3,.3);e.position.set(0,-.36,.012),e.castShadow=!1,n.torso.add(e),n.dino=e},Br=(n={})=>{let e=n.pose;return me({outfit:"avental",...n,pose:(t,i)=>{la(t),e?e(t,i):t.pose()}})},_t=(n={})=>wt({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n}),or=(n={})=>_t({s:.66,outfit:"rosa",...n}),Oc=(n={})=>wt({outfit:"jaleco",hair:"old",hairc:"#E8E2D8",glasses:!0,glow:0,...n}),qi=(n={})=>wt({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n}),Or=(n={})=>({tipo:"pato",s:1,...n}),ne=(n,e,t=0)=>sa(e,n+t)-n,Ze=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=ft(jn(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},Oe=(n,e,t,i,s={})=>Ze(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),Ln=(n,e,t,i,s={})=>Ze(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s}),Vt=(n,e,t,i,s)=>{let r=Wu(e,t,s||Math.min(80,Math.floor(470/(e.length*.62))));return r.position.set(...i),r.renderOrder=5,n.add(r),r},Y=(n,e,t,i=1e9,s)=>{let r=Ne(t,t+.2,e)*(1-Ne(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&wn(n,s)},ar=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]}),Ng=(n,e)=>{let t=Math.abs(Math.sin(e*10));n.pose({armL:[70+t*12,70+t*30],armR:[70+t*12,70+t*30]})},Bg=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),zc=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),zr=n=>n.pose({armL:[12,8],armR:[95,0]}),ei=n=>n.pose({armL:[60,70],armR:[60,70]}),fs=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},En=n=>{n.pose({armL:[8,6],armR:[8,6]}),fs(n)},ed=(n,e,t=1)=>{let i=Math.sin(e*7);n.pose({armL:[40+i*30*t,40],armR:[120,100],lean:i*8*t,bob:Math.abs(Math.cos(e*7))*.06*t,legL:[i*10,0],legR:[-i*10,0],head:i*6})},ps=n=>{let e=new P;return n.arms.R.hand.getWorldPosition(e),e},Hc=n=>{let e=[-1,1].map(t=>{let i=Ye("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},Og=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=ft(Dr(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),wn(a,r)})},Ai=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=Ye(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},Hr=n=>{let e=[0,1,2].map(()=>{let t=ft(Dr("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),wn(o,s)})},nt={exposure:.95,bloom:.45},Ot={bloom:.45,bloomT:.88,vig:.5},_n=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),Vu(t),e.p2&&e.p2(t,i)}}),zg=(n={})=>_n(_t,{x:2.75,z:-.6,y:.97,...n}),ca=(n,e)=>t=>{let i=Ne(n,e,t);return{exposure:1.02+i*3,bloom:.3+i*1.5}},kr=(n,e,t=-.1)=>{let i=ps(e);n.position.set(i.x-.1,i.y+t,i.z+.1)};Rn(0,["lo"],[n=>({amb:"cuartoElla",ambo:{night:!0},fov:32,atores:[zg()],extra:e=>{let t=Hr(e),i=Kn(e,[""],1.7,{w:640,h:400}),s=new xe;e.add(s);let r=ft(Dr("\u2665","#E8667F",170),.3,.24);r.renderOrder=6,e.add(r);let o=Ze(e,["T\xDA"],.5,[0,0,0],{size:110,w:300,h:150,bg:"#E8667F",fg:"#fff"});return{update:(a,l,c)=>{t(a,[1.4,1.2,-1],c);let h=Ne(.4,1.2,a);i.position.set(1.9,2.05,-.9),i.scale.setScalar(Math.max(.01,h)),wn(i,c),o.position.set(1.9,2.12,-.8),o.scale.setScalar(Math.max(.01,h)),wn(o,c),r.position.set(2.3,2.35,-.75),r.visible=h>.9,r.scale.setScalar(1+Math.abs(Math.sin(a*6))*.3),wn(r,c)}}},c:[[1.6,2,4.2],[1.7,1.4,-.8],[1.6,1.9,3.4],[1.7,1.5,-.8]],k:1,range:3,look:{...nt,bloom:.3}}),n=>({amb:"desvan",ambo:{night:!0},fov:30,atores:[me({x:-.5,z:-.4,eyes:[[0,"smug"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[70,40],lean:4})})],extra:e=>{let t=ln();t.position.set(.25,.9,-.2),t.scale.setScalar(1.3),e.add(t),e.add(B(.9,.9,.6,N("#6A4630"),.25,.45,-.2));let i=Ze(e,["\xBFY SI CONTROLARAS SUS SUE\xD1OS?"],2.6,[0,2.75,-.6],{size:66,w:1200,h:150});return{update:(s,r,o)=>{Si(t,.3+.3*Math.abs(Math.sin(s*5))),Y(i,s,.3,99,o)}}},c:[[.6,1.7,3],[0,1.4,-.3],[.3,1.6,2.1],[0,1.4,-.3]],range:1.6,look:nt})]);ge(1,(n,e)=>{let t=ne(e,"caja");return{amb:"desvan",fov:32,atores:[me({x:-.6,z:.2,eyes:[[0,"look"],[t,"wide"]],move:i=>[kt(-1.6,-.6,Ne(0,2,i)),0,.2],pose:(i,s)=>s<2?i.walk(s):i.pose({armL:[40,40],armR:[40,40]})})],extra:i=>{let s=aa();s.position.set(.6,0,-.3),i.add(s);let r=Oe(i,["HACE 1 HORA"],1.3,[-.6,2.6,.2]),o=Oe(i,["DESV\xC1N DEL ABUELO"],1.8,[-.6,2.6,.2]),a=Ai(i,12,"#FFE8C0");return{update:(l,c,h)=>{Y(r,l,.2,2.6,h),Y(o,l,2.8,t-.3,h),a(l,[.6,.7,-.2,.5],Ne(t-.2,t,l))}}},c:[[-1.8,1.9,3.4],[0,1,-.4],[-1,1.6,2.4],[.3,.8,-.4]],range:2}});ge(2,(n,e)=>{let t=ne(e,"boton"),i=ne(e,"etiqueta"),s=ne(e,"usar");return{amb:"desvan",fov:28,atores:[me({x:-.9,z:.3,eyes:[[0,"wide"],[s,"look"]],pose:ei})],extra:r=>{let o=aa();o.position.set(.4,0,-.3),r.add(o);let a=ln();a.position.set(.4,.5,-.3),r.add(a);let l=Ye("#FFE2A8",1.6,.4);l.position.set(.4,.9,-.2),r.add(l);let c=Oe(r,["ANTENA"],.9,[0,1.7,-.2]),h=Ze(r,["BOT\xD3N ROJO"],1.1,[.9,1.4,-.2],{fg:"#FF6A5A"}),u=Oe(r,["\xABDIRECTOR DE SUE\xD1OS\xBB"],1.9,[.2,1.85,-.2],{fg:"#6A3AB8"}),d=Ze(r,["USAR CON CUIDADO"],1.7,[.2,1.5,-.2]);return{update:(p,g,y)=>{a.position.y=.5+Ne(0,1.5,p)*.15,Si(a,p>t?.4+.3*Math.sin(p*6):0),Y(c,p,ne(e,"antena"),t-.2,y),Y(h,p,t,i-.2,y),Y(u,p,i+.6,99,y),Y(d,p,s,99,y)}}},c:[[.2,1.6,2.6],[.3,.9,-.3],[.3,1.4,1.7],[.35,.9,-.3]],range:1.2}});ge(3,(n,e)=>{let t=ne(e,"familia");return{amb:"desvan",fov:32,atores:[Oc({x:0,z:-.4,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[80+Math.sin(s*10)*25,60]})})],extra:i=>{i.add(B(1.6,.9,.7,N("#6A4630"),.9,.45,-.8));let s=ln();s.position.set(.9,.9,-.8),i.add(s);let r=Ai(i,12,"#5AC8FF"),o=Oe(i,["EL ABUELO, INVENTOR"],1.9,[0,2.6,-.4]),a=Ze(i,["...O ESO DEC\xCDAN"],1.5,[0,2.6,-.4]);return{update:(l,c,h)=>{r(l,[.9,1.3,-.7,.4]),Y(o,l,.2,t-.6,h),Y(a,l,t-.4,99,h)}}},c:[[-.6,1.7,3],[.3,1.2,-.5],[-.3,1.6,2.4],[.3,1.2,-.5]],range:2,look:{exposure:.95,vig:.6}}});ge(4,n=>({amb:"sala",fov:32,atores:[Oc({x:0,z:-.6,eyes:[[0,"sad"]]}),wt({outfit:"azul",glow:0,x:-1.3,z:.2,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[70,70],armR:[70,70],lean:Math.sin(t*12)*4})}),wt({outfit:"rosa",hair:"bun",hairc:"#5A3A2A",lash:!0,glow:0,x:1.3,z:.2,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[70,70],armR:[70,70],lean:-Math.sin(t*12)*4})})],extra:e=>{let t=Ze(e,["NADIE LE CREY\xD3"],1.6,[0,2.5,-.6]),i=Vt(e,"JAJAJA",.8,[-1.3,2.3,.2]);return{update:(s,r,o)=>{Y(t,s,.3,99,o),Y(i,s,.1,99,o)}}},c:[[0,1.7,3.6],[0,1.2,-.4],[0,1.6,3],[0,1.2,-.4]],range:2}));ge(5,(n,e)=>{let t=ne(e,"apuntas"),i=ne(e,"esperas"),s=ne(e,"pulsas"),r=ne(e,"entras");return{amb:"desvan",fov:30,atores:[me({x:-1.2,z:.2,eyes:[[0,"look"]],pose:ei})],extra:o=>{let a=Lr(["INSTRUCCIONES"],1.4,{size:70});a.position.set(.5,1.6,-.6),o.add(a);let l=[["1. APUNTA LA ANTENA",t],["2. ESPERA A QUE SE DUERMA",i],["3. PULSA EL BOT\xD3N",s]].map(([c,h],u)=>[Oe(o,[c],2.3,[.5,1.05-u*.36,-.55],{size:64,w:900,h:130}),h]);return{update:(c,h,u)=>{l.forEach(([d,p])=>Y(d,c,p,99))}}},c:[[-.2,1.6,4.4],[.3,1.3,-.5],[0,1.5,3.8],[.4,1.2,-.5]],k:1,range:3}});ge(6,(n,e)=>{let t=ne(e,"invitado"),i=ne(e,"director");return{amb:"pasillo",fov:32,atores:[me({x:0,z:0,eyes:[[0,"wide"],[i,"happy"]],pose:(s,r)=>r>i?s.pose({armL:[150,30],armR:[150,30]}):s.pose()})],extra:s=>{let r=Oe(s,["INVITADO"],1.1,[-.2,2.4,0]),o=Ze(s,["\u2717"],.4,[-.2,2.4,.05],{bg:"#00000000",fg:"#E2322A",size:130,w:200,h:150}),a=Ze(s,["DIRECTOR \u2605"],1.5,[0,2.4,0]),l=Ai(s,14,"#FFE6FF");return{update:(c,h,u)=>{Y(r,c,t,i-.1,u),Y(o,c,t+.4,i-.1,u),Y(a,c,i,99,u),l(c,[0,1.4,.2,.9],Ne(i,i+.3,c))}}},c:[[0,1.6,3.4],[0,1.4,-3],[0,1.6,2.6],[0,1.4,-3]],range:3,look:Ot}});ge(7,(n,e)=>{let i=ne(e,"pasa")-.3,s=ne(e,"guion")-.3;return{amb:"playaSueno",fov:34,atores:[me({x:0,z:0,eyes:[[0,"happy"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[100+Math.sin(o*3)*30,20]})})],extra:r=>{let o=[["EL ESCENARIO \u2713",0],["LO QUE PASA \u2713",i],["EL GUION \u2713",s]].map(([a,l],c)=>[Ln(r,[a],1.5,[-1.6+c*1.6,2.5-c*.05,-.4]),l]);return{update:(a,l,c)=>o.forEach(([h,u])=>Y(h,a,u+.1,99,c))}},c:[[0,1.8,4.4],[0,1.5,-1],[0,1.7,3.8],[0,1.6,-1]],range:3,look:Ot}});ge(8,(n,e)=>{let t=ne(e,"sara");return{amb:"barrio",ambo:{night:!0},fov:30,atores:[me({x:-4.2,z:1,eyes:[[0,"look"]]})],extra:i=>{let s=Bt(.9,.8,"#FFD27A",1.6);s.position.set(4.5,2.6,-2.88),i.add(s);let r=Ze(i,["CASA DE SARA"],1.6,[4.5,4.6,-2.5]),o=Ze(i,["\u25BC"],.4,[4.5,4,-2.5],{bg:"#00000000",size:120,w:200,h:150});return{update:(a,l,c)=>{Y(r,a,t-.3,99,c),Y(o,a,t-.1,99,c),o.position.y=4+Math.sin(a*6)*.08}}},c:[[-6,2.4,4.2],[0,1.8,-2],[-5,2.3,3.6],[2,2,-2]],range:6,look:nt}});ge(9,(n,e)=>{let t=ne(e,"clase"),i=ne(e,"dos");return{amb:"aula",fov:32,atores:[_t({x:-1.6,z:-1.4,y:-.4,eyes:[[0,"look"]],pose:En}),me({x:1.3,z:.4,y:-.4,eyes:[[0,"heart"],[i,"sad"]],pose:En}),wt({outfit:"azul",hair:"bob",hairc:"#D9B65A",lash:!0,x:.4,z:-1.4,y:-.4,eyes:[[0,"look"]],pose:En})],extra:s=>{let r=Bt(1.6,1.4,"#CFE8FF",1.2);r.position.set(-3,2.3,-3.4),s.add(r);for(let[l,c]of[[-1.6,-1.4],[.4,-1.4],[1.3,.4]])s.add(B(.9,.06,.55,N("#C9A06A"),l,.75,c-.45)),s.add(B(.5,.06,.5,N("#4A86C7"),l,.45,c));let o=Oe(s,["SARA"],.9,[-1.6,2.3,-1.4],{fg:"#C9361F"}),a=Ze(s,["2 A\xD1OS: \xABHOLA\xBB"],1.5,[1,2.3,.4]);return{update:(l,c,h)=>{Y(o,l,.2,i-.3,h),Y(a,l,i+.4,99,h)}}},c:[[-.2,1.9,3.6],[0,1,-.6],[0,1.7,3],[.1,1,-.6]],range:3}});ge(10,n=>({amb:"barrio",ambo:{night:!0},fov:26,atores:[],extra:e=>{let t=Bt(.9,.8,"#FFD27A",1.6);t.position.set(4.5,2.6,-2.88),e.add(t);let i=Ye("#FFD27A",2,.6);i.position.set(4.5,2.6,-2.7),e.add(i);let s=Hr(e);return{update:(r,o,a)=>{let l=1-Ne(.8,1,r);t.material.emissiveIntensity=1.6*l,i.material.opacity=.6*l,s(r,[4.8,3,-2.6],a,r>1.1)}}},c:[[2.4,2.4,3.6],[4.5,2.4,-2.8],[2.8,2.4,2.8],[4.5,2.5,-2.8]],range:4,look:nt}));ge(11,(n,e)=>{let t=ne(e,"suscribete"),i=ne(e,"campanita"),s=ne(e,"asi");return{amb:"playaSueno",fov:32,atores:[me({x:-1.7,z:.2,eyes:[[0,"happy"]],pose:(r,o)=>o<t?ar(r,o):zr(r)})],extra:r=>{let o=Nc(2.8);o.position.set(.8,2,-.2),r.add(o);let a=Ze(r,["\xA1NO TE PIERDAS LA PR\xD3XIMA!"],2.4,[.4,.9,.1]),l=Ai(r,14,"#FFE27A");return{update:(c,h,u)=>{let d=Ne(t-.3,t,c);o.scale.setScalar(Math.max(.01,d*(1+.06*Math.sin(c*8)*(c>t+1?1:0))));let p=c>i&&c<i+1.4?Math.sin(c*40)*.06:0;o.rotation.z=p,l(c,[.8,2,-.1,1.2],Ne(i,i+.2,c)),Y(a,c,s,99)}}},c:[[0,1.7,5],[0,1.6,-.2],[0,1.7,4.6],[0,1.6,-.2]],range:6,blur:4,look:Ot}});ge(12,n=>({amb:"desvan",ambo:{night:!0},fov:22,atores:[me({x:-.7,z:-.3,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[60+Ne(.6,1.2,t)*10,30]})})],extra:e=>{let t=ln();return t.position.set(.1,.9,-.2),t.scale.setScalar(1.4),e.add(t),e.add(B(.9,.9,.6,N("#6A4630"),.1,.45,-.2)),{update:i=>Si(t,Ne(1.2,1.5,i))}},c:[[.4,1.6,2.2],[.1,1.3,-.2],[.2,1.5,1.4],[.1,1.35,-.2]],range:1,lookFn:ca(n-.6,n),look:nt}));ge(13,(n,e)=>{let t=ne(e,"suelo"),i=ne(e,"blando");return{amb:"pasillo",fov:32,atores:[me({x:0,z:0,eyes:[[0,"shut"],[t,"wide"],[i+1,"happy"]],move:s=>{let r=Ne(0,t,s),o=s>t?Math.abs(Math.sin((s-t)*6))*.5*Math.exp(-(s-t)*1.2):0;return[0,kt(4,0,r)+o,0]},pose:(s,r)=>s.pose({armL:[150,40],armR:[150,40]})})],extra:s=>{let r=Oe(s,["SILENCIO..."],1.4,[0,2.6,0],{fg:"#6A3AB8"}),o=Ln(s,["\xA1BLANDO!"],1.2,[0,2.6,0]);return{update:(a,l,c)=>{Y(r,a,.3,t-.2,c),Y(o,a,i,99,c)}}},lookFn:s=>({exposure:1.02+3*(1-Ne(0,.8,s))}),c:[[0,1.4,4],[0,1.3,-2],[0,1.3,3.4],[0,1.2,-2]],range:3,look:Ot}});ge(14,(n,e)=>{let t=ne(e,"sara");return{amb:"pasillo",fov:36,atores:[me({x:.2,z:-1,eyes:[[0,"look"],[t,"heart"]],move:i=>[kt(.2,1.3,Ne(0,t,i)),0,kt(-1,-7.6,Ne(0,t,i))],pose:(i,s)=>s<t?i.walk(s):i.pose()})],extra:i=>{let s=Ze(i,["PUERTAS INFINITAS"],1.9,[0,3.1,-4]);return{update:(r,o,a)=>Y(s,r,.4,t-.5,a)}},cam:[[0,[0,1.8,3],[0,1.4,-10]],[n,[.4,1.7,-4.2],[2.2,1.4,-8.6]]],f:[[0,6],[n,4.5]],range:4,look:Ot}});id(us[15],us[17],n=>({amb:"pasillo",fov:32,atores:[me({x:1.6,z:-8.2,eyes:[[0,"wide"]],move:e=>[kt(1.6,2.2,Ne(.6,n,e)),0,-8.2],pose:e=>e.pose({armL:[12,8],armR:[90,10]})})],extra:e=>{let t=Ye("#FFF6E0",4,0);return t.position.set(2.6,1.3,-8.6),e.add(t),{update:i=>{e.userData.door.rotation.y=-1.6*Ne(0,.6,i),t.material.opacity=Ne(.3,n,i)}}},cam:[[0,[-.4,1.6,-5.2],[2.2,1.3,-8.6]],[n,[.8,1.5,-6.4],[2.4,1.3,-8.6]]],f:[[0,4]],range:3,lookFn:ca(n-.5,n),look:Ot}));ge(17,(n,e)=>{let t=ne(e,"raro");return{amb:"labSueno",fov:32,atores:[qi({x:.8,z:-.2,eyes:[[0,"look"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[150,10]})}),_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96})],extra:i=>{let s=Oe(i,["UN DATO"],1,[.8,2.4,-.2]),r=Ze(i,["NO ES TAN RARO"],1.6,[.8,2.4,-.2]);return{update:(o,a,l)=>{Y(s,o,.3,t-.4,l),Y(r,o,t-.2,99,l)}}},c:[[.2,1.8,3.6],[0,1.2,-1],[.4,1.7,3],[.2,1.2,-1]],range:3}});ge(18,(n,e)=>{let t=ne(e,"ciencia");return{amb:"labSueno",ambo:{night:!0},fov:32,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96}),qi({x:1.6,z:.2,eyes:[[0,"look"]],move:i=>[kt(3.4,1.4,Ne(t,t+1.5,i)),0,.2],pose:(i,s)=>s<t+1.5&&s>t?i.walk(s):ei(i)})],extra:i=>{let s=Hr(i),r=Pc(.6,3);r.position.set(-2.4,2.4,-3),i.add(r);let o=Kn(i,["SO\xD1ANDO..."],1.4);return{update:(a,l,c)=>{s(a,[-1,1.3,-1.2],c),o.position.set(-1.6,2.1,-1.2),Y(o,a,.5,t-.3,c)}}},c:[[0,1.9,3.6],[-.3,1.1,-1.2],[.3,1.8,3],[0,1.1,-1.2]],range:3,look:nt}});Rn(19,["avisar"],[n=>({amb:"labSueno",ambo:{night:!0},fov:32,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96}),qi({x:1.5,z:.1,eyes:[[0,"look"]],pose:ei})],extra:e=>{let t=Kn(e,["\xBFESTOY","SO\xD1ANDO?"],1.5);return{update:(i,s,r)=>{t.position.set(-1.4,2.2,-1.2),Y(t,i,1.2,99,r)}}},c:[[-.2,1.8,3.4],[-.6,1.2,-1.2],[0,1.7,2.8],[-.4,1.2,-1.2]],range:3,look:nt}),n=>({amb:"labSueno",ambo:{night:!0},fov:30,atores:[qi({x:.4,z:-.6,eyes:[[0,"wide"]],pose:zr})],extra:e=>{let t=Pe(512,300,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,512,300),r.strokeStyle="#7FD08A",r.lineWidth=6,r.beginPath();for(let o=0;o<512;o++){let a=Math.floor(o/64)%2?1:-1,l=150+(o>128&&o<384?a*80:Math.sin(o*.2)*6);o?r.lineTo(o,l):r.moveTo(o,l)}r.stroke(),r.fillStyle="#7FD08A",r.font="700 30px Inter",r.fillText("OJOS",16,36)}),i=new K(new De(1.8,1.05),new ut({map:t,toneMapped:!1}));i.position.set(1.4,1.9,-1.5),i.rotation.y=-.3,e.add(i);let s=Ze(e,["SE\xD1AL DESDE EL SUE\xD1O"],2,[1.4,2.55,-1.4]);return{update:(r,o,a)=>Y(s,r,.8,99)}},c:[[-.8,1.7,3],[.9,1.7,-1.4],[-.4,1.7,2.4],[1.1,1.8,-1.4]],range:3,look:nt})]);ge(20,(n,e)=>{let t=ne(e,"llaman"),i=[],s=e;for(let r=0;r<4;r++)s=sa(r%2?"derecha":"izquierda",s+.01),i.push(s-e);return{amb:"labSueno",ambo:{night:!0},fov:22,atores:[wt({outfit:"azul",glow:0,x:0,z:-.4,eyes:[[0,"shut"],[i[0],"lookl"],[i[1],"look"],[i[2],"lookl"],[i[3],"look"],[t,"shut"]]})],extra:r=>{let o=i.map((c,h)=>[Ze(r,[h%2?"\u2192":"\u2190"],.5,[h%2?.55:-.55,1.9,-.3],{size:120,w:200,h:150}),c]),a=Ln(r,["SUE\xD1OS L\xDACIDOS"],1.5,[0,2.2,-.3]),l=Hr(r);return{update:(c,h,u)=>{o.forEach(([d,p],g)=>Y(d,c,p,(i[g+1]??t)-.1,u)),Y(a,c,t,99,u),l(c,[.4,1.9,-.3],u,c>t)}}},c:[[0,1.65,2.2],[0,1.6,-.4],[0,1.65,1.8],[0,1.6,-.4]],range:1.2,look:nt}});ge(21,(n,e)=>{let t=ne(e,"preguntas");return{amb:"labSueno",fov:34,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96}),...[0,1,2,3].map(i=>qi({x:.6+i*.75,z:.2-i%2*.5,tint:["#E8E2D8","#C8A88A","#8A6A4A","#F4E0C8"][i],eyes:[[0,"look"]],pose:i===0?(s,r)=>r>t?zc(s,r):ei(s):ei}))],extra:i=>{let s=Ze(i,["4 PA\xCDSES"],1.1,[1.7,2.6,-.1]),r=Vt(i,"\xBFME OYES?",1,[-.2,2.3,-.8]);return{update:(o,a,l)=>{Y(s,o,.5,t-.3,l),Y(r,o,t,99,l)}}},c:[[.4,2,4.2],[.6,1.2,-.8],[.6,1.9,3.6],[.5,1.2,-.8]],range:3}});ge(22,(n,e)=>{let t=ne(e,"contestaron"),i=ne(e,"moviendo"),s=ne(e,"dos");return{amb:"labSueno",ambo:{night:!0},fov:22,atores:[wt({outfit:"azul",glow:0,x:0,z:-.4,eyes:[[0,"shut"],[i,"lookl"],[i+.35,"look"],[i+.7,"lookl"],[i+1.05,"look"],[i+1.4,"shut"]]})],extra:r=>{let o=Oe(r,["8 \u2212 6 = ?"],1.2,[0,2.15,-.3],{size:90}),a=Ze(r,["= 2 \u2713"],.8,[0,2.15,-.3],{size:90,w:400}),l=Ze(r,["1"],.3,[-.5,1.75,-.3],{size:110,w:200,h:150}),c=Ze(r,["2"],.3,[.5,1.75,-.3],{size:110,w:200,h:150});return{update:(h,u,d)=>{Y(o,h,.3,s-.1,d),Y(a,h,s,99,d),Y(l,h,i,i+1.6,d),Y(c,h,i+.7,i+1.6,d)}}},c:[[0,1.7,2.4],[0,1.65,-.4],[0,1.7,2],[0,1.65,-.4]],range:1.2,look:nt}});ge(23,(n,e)=>{let t=ne(e,"hecho")-.4;return{amb:"labSueno",fov:32,atores:[...[0,1,2].map(i=>qi({x:-1+i*1,z:0,tint:["#E8E2D8","#C8A88A","#8A6A4A"][i],eyes:[[0,"happy"]],pose:Ng}))],extra:i=>{let s=Ze(i,["\u2713 YA SE HA HECHO"],1.9,[0,2.6,0]);return{update:(r,o,a)=>Y(s,r,t,99,a)}},c:[[0,1.8,4],[0,1.3,-.4],[0,1.7,3.4],[0,1.3,-.4]],range:3}});ge(24,n=>({amb:"desvan",ambo:{night:!0},fov:22,atores:[],extra:e=>{let t=ln();t.position.set(0,.9,-.2),t.scale.setScalar(1.6),e.add(t),e.add(B(.9,.9,.6,N("#6A4630"),0,.45,-.2));let i=Ye("#E2322A",1.2,0);return i.position.set(.25,1.5,0),e.add(i),{update:s=>{Si(t,.5+.5*Math.sin(s*5)),i.material.opacity=.35+.25*Math.sin(s*5)}}},c:[[.9,1.8,1.8],[.1,1.35,-.2],[.5,1.6,1.3],[.15,1.35,-.2]],range:1,look:nt}));ge(25,(n,e)=>{let t=ne(e,"mar"),i=ne(e,"arena"),s=ne(e,"libro");return{amb:"playaSueno",fov:32,atores:[_t({x:.8,z:-2.6,y:-.45,eyes:[[0,"down"]],pose:r=>{r.pose({armL:[60,70],armR:[60,70]}),fs(r)}}),me({x:-1.6,z:-1.4,eyes:[[0,"wide"],[s,"heart"]]})],extra:(r,o,[a])=>{let l=Ku("#FBF7EC","");l.scale.setScalar(.6),r.add(l);let c=[Ln(r,["MAR LILA"],1.1,[-1,2.3,-3.6]),Oe(r,["ARENA DE AZ\xDACAR"],1.7,[-.4,.9,-1.2],{fg:"#B04A9A"}),Oe(r,["UN LIBRO SIN LETRAS"],1.9,[.8,2.2,-2.6])];return{update:(h,u,d)=>{let p=ps(a);l.position.set(p.x-.05,p.y+.05,p.z+.15),l.rotation.x=-.5,Y(c[0],h,t,i-.3,d),Y(c[1],h,i,s-.3,d),Y(c[2],h,s,99,d)}}},cam:[[0,[-2.6,2.2,3.6],[-.2,1.1,-2.4]],[n,[-1.2,1.8,2],[.5,1,-2.6]]],f:[[0,6],[n,4.6]],k:1,range:4,look:Ot}});ge(26,n=>({amb:"playaSueno",fov:30,atores:[me({x:0,z:0,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[120+Math.sin(t*4)*10,40]})})],extra:(e,t,[i])=>{let s=new xe;s.add(B(.5,.34,.04,N("#2A2A34"),0,0,0));let r=B(.5,.08,.045,N("#FBF7EC"),0,.22,0);s.add(r),e.add(s);let o=Ze(e,["\xA1ACCI\xD3N!"],1.1,[0,2.6,0]);return{update:(a,l,c)=>{let h=ps(i);s.position.set(h.x,h.y+.1,h.z+.1),wn(s,c),r.rotation.z=a>1.4?0:-.5,Y(o,a,1.4,99,c)}}},c:[[-.4,1.6,2.8],[0,1.5,-1],[-.2,1.6,2.2],[0,1.5,-1]],range:2,look:Ot}));ge(27,(n,e)=>{let t=ne(e,"version"),i=ne(e,"alto"),s=ne(e,"pelo"),r=ne(e,"caballo");return{amb:"desvan",ambo:{night:!0},fov:32,atores:[me({x:-1.6,z:.4,eyes:[[0,"look"],[t,"happy"]],pose:o=>o.pose({armL:[12,8],armR:[130,120]})}),me({x:.9,z:-1.2,s:1.18,eyes:[[0,"happy"]],move:o=>[.9,o>r?.95:0,-1.2],pose:o=>o.pose({armL:[150,30],armR:[12,8]})}),{tipo:"caballoB",x:.7,z:-1.3,s:1}],extra:(o,a,[l,c,h])=>{let u=Kn(o,[""],3.6,{w:640,h:400});u.position.set(.8,1.6,-1.9);let d=Ze(o,["PLAN 1"],.9,[-1.6,2.6,.4]),p=[[Oe(o,["M\xC1S ALTO"],1,[-.4,2.9,-1.2]),i],[Oe(o,["PELO PERFECTO"],1.5,[2,2.9,-1.2]),s],[Oe(o,["CABALLO BLANCO"],1.6,[.8,.5,-1]),r]],g=Ai(o,12,"#FFFFFF");return{update:(y,m,f)=>{let M=Ne(t-.3,t+.3,y);u.scale.setScalar(Math.max(.01,M)),wn(u,f),c.root.visible=y>t,h.root.visible=y>r,Y(d,y,.2,99,f),p.forEach(([S,v])=>Y(S,y,v,99,f)),g(y,[.9,2.6,-1,.5],y>s?1:0)}}},c:[[-.6,1.9,4.2],[.2,1.6,-1],[-.4,1.9,3.8],[.3,1.6,-1]],range:4,look:nt}});ge(28,n=>({amb:"desvan",ambo:{night:!0},fov:24,atores:[me({x:-.6,z:-.2,eyes:[[0,"shut"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[65,30],head:Math.sin(t*30)*2})})],extra:e=>{let t=ln();return t.position.set(.15,.9,-.2),t.scale.setScalar(1.3),e.add(t),e.add(B(.9,.9,.6,N("#6A4630"),.15,.45,-.2)),{update:i=>Si(t,Ne(n*.6,n*.7,i))}},c:[[.3,1.6,2.4],[0,1.4,-.2],[.2,1.5,1.8],[0,1.4,-.2]],range:1,lookFn:ca(n*.7,n),look:nt}));Rn(29,["pero"],[(n,e)=>{let t=ne(e,"pelo");return{amb:"playaSueno",fov:32,atores:[me({x:0,z:0,s:1.18,eyes:[[0,"happy"]],pose:i=>i.pose({armL:[150,30],armR:[12,8]})})],extra:i=>{let s=Ai(i,16,"#FFFFFF"),r=Oe(i,["M\xC1S ALTO \u2713"],1.3,[-1.2,2.4,0]),o=Oe(i,["PELO \u2713"],.9,[1.2,2.6,0]);return{update:(a,l,c)=>{s(a,[0,1.4,.2,.9],1-Ne(1,2,a)),Y(r,a,.6,99,c),Y(o,a,t+.3,99,c)}}},lookFn:i=>({exposure:1.02+3*(1-Ne(0,.6,i))}),c:[[0,1.7,4],[0,1.6,-1],[0,1.7,3.4],[0,1.6,-1]],range:3,look:Ot}},(n,e)=>{let t=ne(e,"gigante"),i=ne(e,"cuac");return{amb:"playaSueno",fov:34,atores:[Or({x:0,z:0,s:2.6}),me({x:.05,z:.05,s:1.18,y:.95,eyes:[[0,"happy"],[.6,"wide"]],pose:s=>{s.pose({armL:[60,70],armR:[60,70]}),fs(s)}})],extra:(s,r,[o])=>{let a=Ze(s,["UN PATO GIGANTE"],1.9,[-1.7,3.1,0]),l=Vt(s,"\xA1CUAC!",1.1,[1.7,2.9,0]);return{update:(c,h,u)=>{Y(a,c,t-.3,99,u),Y(l,c,i,99,u),o.talk(c,c>i)}}},c:[[-.6,2.4,6],[0,2,-1],[-.3,2.2,5.2],[0,2,-1]],range:4,look:Ot}}]);ge(30,(n,e)=>{let t=ne(e,"pato"),i=ne(e,"rie"),s=ne(e,"cae");return{amb:"playaSueno",fov:32,atores:[_t({x:-1.2,z:.2,eyes:[[0,"look"],[t,"wide"],[i,"happy"]],pose:(r,o)=>{r.pose({armL:[70,70],armR:[70,70],lean:o>i?Math.sin(o*14)*5:0}),r.root.rotation.z=o>s?-1.4*Ne(s,s+.5,o):0}}),Or({x:1.6,z:-1.4,s:2.6,flip:!0}),me({x:1.65,z:-1.35,s:1.18,y:.95,eyes:[[0,"flat"]],pose:r=>{r.pose(),fs(r)}})],extra:r=>{let o=Vt(r,"\xA1JAJAJA!",1,[-1.6,2.4,.2]);return{update:(a,l,c)=>Y(o,a,i,99,c)}},c:[[-.8,2.3,5.4],[0,2.1,-.6],[-.6,2.2,4.8],[0,2,-.6]],range:4,look:Ot}});ge(31,(n,e)=>{let t=ne(e,"pero");return{amb:"playaSueno",fov:26,atores:[Or({x:0,z:0,s:2.6}),me({x:.05,z:.05,s:1.18,y:.95,eyes:[[0,"flat"],[t,"happy"]],pose:i=>{i.pose(),fs(i)}})],extra:i=>{let s=Oe(i,["NO ERA EL PLAN"],1.5,[-1.3,3,0]),r=ft(Dr("\u2665","#E8667F",170),.4,.32);return r.renderOrder=6,i.add(r),{update:(o,a,l)=>{Y(s,o,.1,t,l),r.position.set(.6,3.2+Math.sin(o*4)*.05,.2),r.visible=o>t,wn(r,l)}}},c:[[0,2.5,4.2],[0,2.3,-1],[0,2.5,3.6],[0,2.3,-1]],range:3,look:Ot}});ge(32,n=>({amb:"desvan",ambo:{night:!0},fov:26,atores:[me({x:-.5,z:0,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[60,70],armR:[70+Math.sin(t*20)*6,60]})})],extra:e=>{let t=Lr(["\xB7 SE R\xCDE CON EL PATO \u2713"],.7,{size:46});return t.position.set(.35,1.05,.3),t.rotation.x=-.5,e.add(t),{}},c:[[0,1.8,2.2],[0,1.3,0],[0,1.7,1.8],[0,1.3,0]],range:1.4,look:nt}));ge(33,(n,e)=>{let t=ne(e,"pagina"),i=ne(e,"olfato");return{amb:"desvan",ambo:{night:!0},fov:30,atores:[me({x:-1,z:.2,eyes:[[0,"look"],[i,"wide"]],pose:ei})],extra:s=>{let r=Ze(s,["2\xAA NOCHE"],1.1,[-1,2.6,.2]),o=Lr(["P\xC1G. 4"],1.3,{size:80});o.position.set(.6,1.7,-.5),s.add(o);let a=Oe(s,["\xABEL OLFATO MANDA","M\xC1S QUE EL BOT\xD3N\xBB"],2,[.6,1,-.45],{size:62,w:900,h:220});return{update:(l,c,h)=>{Y(r,l,.2,t-.4,h),o.visible=l>t-.2,Y(a,l,i-.3,99)}}},c:[[-.3,1.6,3.2],[.2,1.3,-.5],[-.1,1.5,2.6],[.4,1.3,-.5]],range:2,look:nt}});Rn(34,["cuando",["cuando",1],"los"],[n=>({amb:"labSueno",ambo:{night:!0},fov:30,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96}),qi({x:-3,z:-.7,eyes:[[0,"look"]],pose:e=>e.pose({armL:[12,8],armR:[80,40]})})],extra:e=>{let t=new K(new Ft(.06,.08,.22,12),N("#A8D8F0",{transparent:!0,opacity:.8}));return e.add(t),{update:()=>{t.position.set(-2.45,1.25,-.8)}}},c:[[-.6,1.8,3],[-1,1.1,-1.2],[-.6,1.7,2.4],[-1,1.1,-1.2]],range:3,look:nt}),n=>({amb:"labSueno",ambo:{night:!0},fov:30,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96,eyes:[[0,"happy"]]})],extra:e=>{let t=rr();t.scale.setScalar(.35),t.position.set(-2.65,.95,-1),e.add(t);let i=Kn(e,["SUE\xD1O","AGRADABLE \u263A"],1.6),s=Oe(e,["ROSAS"],.8,[-2.2,1.9,-.8],{fg:"#E8667F"});return{update:(r,o,a)=>{i.position.set(-.6,2.3,-1.2),Y(i,r,.6,99,a),Y(s,r,.2,99,a)}}},c:[[-.6,1.8,3],[-1,1.4,-1.2],[-.6,1.7,2.6],[-1,1.4,-1.2]],range:3,look:nt}),n=>({amb:"labSueno",ambo:{night:!0},fov:30,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96,eyes:[[0,"sad"]]})],extra:e=>{let t=new K(new Lt(.12,14,10),N("#E8E2C8"));t.scale.y=1.3,t.position.set(-2.55,1.05,-.9),e.add(t);let i=Ye("#9AC84A",.9,.5);i.position.set(-2.55,1.3,-.9),e.add(i);let s=Kn(e,["SUE\xD1O","DESAGRADABLE \u2639"],1.6),r=Oe(e,["HUEVOS PODRIDOS"],1.5,[-2,1.9,-.8],{fg:"#5A8A2A"});return{update:(o,a,l)=>{s.position.set(-.6,2.3,-1.2),Y(s,o,.6,99,l),Y(r,o,.2,99,l),i.material.opacity=.4+.2*Math.sin(o*6)}}},c:[[-.6,1.8,3],[-1,1.4,-1.2],[-.6,1.7,2.6],[-1,1.4,-1.2]],range:3,look:nt}),(n,e)=>{let t=ne(e,"pero");return{amb:"labSueno",ambo:{night:!0},fov:30,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96})],extra:i=>{let s=Hr(i),r=Oe(i,["NO SE DESPERTABAN"],1.8,[-.8,2.4,-1]),o=Ln(i,["EL OLOR SE CUELA EN EL SUE\xD1O"],2.8,[-.6,2.4,-1]),a=Ai(i,12,"#C8A8FF");return{update:(l,c,h)=>{s(l,[-.9,1.3,-1.2],h),Y(r,l,.2,t-.2,h),Y(o,l,t,99,h),a(l,[-1.4,1.5,-1,.6],Ne(t,t+.3,l))}}},c:[[-.4,1.9,3.4],[-.8,1.4,-1.2],[-.4,1.8,2.8],[-.8,1.4,-1.2]],range:3,look:nt}}]);Rn(35,["robada"],[n=>({amb:"barrio",ambo:{night:!0},fov:30,atores:[me({x:3.4,z:-1.9,eyes:[[0,"look"]],move:e=>[kt(1.6,3.9,Ne(0,n*.6,e)),0,-2.3],pose:(e,t)=>t<n*.6?e.walk(t):e.pose({armL:[12,8],armR:[120,10]})})],extra:(e,t,[i])=>{let s=new xe;s.add(B(.02,.35,.02,N("#3E8A52"),0,-.15,0));let r=new K(new Lt(.07,12,10),N("#E2322A",{emissive:"#801010",emissiveIntensity:.4}));s.add(r),e.add(s);let o=Bt(.9,.8,"#3A3A6A",.3);o.position.set(4.5,2.6,-2.88),e.add(o);let a=Oe(e,["UNA ROSA"],1,[4.3,3.4,-2.5],{fg:"#E2322A"});return{update:(l,c,h)=>{let u=ps(i);s.position.set(u.x,u.y+.15,u.z+.05),Y(a,l,n*.5,99,h)}}},c:[[1.4,2.2,3.4],[3.8,1.8,-2.6],[2.4,2.1,2.4],[4,1.8,-2.6]],range:3,look:nt}),n=>({amb:"jardin",ambo:{dusk:!0},fov:30,atores:[me({x:1,z:-.6,eyes:[[0,"wide"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[60,40],lean:6})})],extra:e=>{let t=Ze(e,["ROBADA DEL JARD\xCDN DE SU MADRE"],2.8,[1,2.5,-.6]);return{update:(i,s,r)=>Y(t,i,.3,99,r)}},c:[[1.2,1.7,3],[1.4,1,-1],[1.2,1.6,2.4],[1.4,1,-1]],range:2})]);ge(36,(n,e)=>{let t=ne(e,"flores"),i=ne(e,"baile"),s=ne(e,"musica"),r=ne(e,"farolillos"),o=ne(e,"por");return{amb:"baile",fov:32,atores:[_t({x:-.5,z:-1,eyes:[[0,"happy"]],pose:(a,l)=>l>i?ed(a,l,.6):a.pose()}),me({x:.5,z:-1,eyes:[[0,"heart"]],pose:(a,l)=>l>i?ed(a,l+1,.6):a.pose()})],extra:(a,l,[c])=>{let h=Og(a),u=[[Oe(a,["FLORES"],.9,[-2.2,2.3,-1]),t,i],[Oe(a,["BAILE"],.8,[2,2.4,-1]),i,s],[Oe(a,["M\xDASICA"],.9,[-2,2.6,-1]),s,r],[Oe(a,["FAROLILLOS"],1.3,[1.8,2.8,-1]),r,o]];return{update:(d,p,g)=>{a.userData.farol.forEach(y=>{y.position.y=y.userData.y0+Math.sin(d*.6+y.userData.ph)*.3+d*.05}),h(d,c.root.position.clone().setY(1.8),g,d>s),u.forEach(([y,m,f])=>Y(y,d,m,f+.8,g))}}},cam:[[0,[0,3.2,6.4],[0,1.6,-1]],[n,[1,1.9,3.4],[0,1.4,-1]]],f:[[0,7.6],[n,4.6]],range:4,look:{...nt,...Ot}}});ge(37,n=>({amb:"baile",fov:30,atores:[_t({x:-.5,z:-1,eyes:[[0,"happy"]]}),me({x:.5,z:-1,eyes:[[0,"happy"]],talk:[[0,1.6]]})],extra:e=>{let t=Vt(e,"\xA1HOLA! \xBFQU\xC9 TAL?",1.4,[.9,2.4,-1]);return{update:(i,s,r)=>Y(t,i,.2,99,r)}},c:[[0,1.7,2.8],[0,1.6,-1],[0,1.7,2.4],[0,1.6,-1]],range:2,look:{...nt,...Ot}}));ge(38,n=>({amb:"baile",fov:30,atores:[me({x:0,z:-1,eyes:[[0,"happy"]],move:e=>[0,Math.abs(Math.sin(e*6))*.3,-1],pose:e=>e.pose({armL:[160,30],armR:[160,30]})})],extra:e=>{let t=Ze(e,["\xA1R\xC9CORD SUPERADO!"],2,[0,2.6,-1]),i=Ai(e,18,"#F2C14E");return{update:(s,r,o)=>{Y(t,s,.1,99,o),i(s,[0,1.8,-.8,1.2])}}},c:[[0,1.8,3.2],[0,1.6,-1],[0,1.8,2.8],[0,1.6,-1]],range:2,look:{...nt,...Ot}}));ge(39,(n,e)=>{let t=ne(e,"que"),i=ne(e,"pato");return{amb:"aula",fov:32,atores:[_t({x:-.45,z:.2,y:-.4,eyes:[[0,"look"]],talk:[[t,n]],pose:En}),me({x:.55,z:.2,y:-.4,eyes:[[0,"look"],[t+1.5,"wide"]],pose:En})],extra:s=>{for(let l of[-.45,.55])s.add(B(.9,.06,.55,N("#C9A06A"),l,.75,-.25));let r=Vt(s,"QU\xC9 RARO...",1,[-.9,2,.2]),o=Vt(s,"HE SO\xD1ADO CONTIGO",1.3,[-.9,2,.2]),a=Vt(s,"...Y CON UN PATO",1.3,[-.9,2,.2]);return{update:(l,c,h)=>{Y(r,l,t,t+1.2,h),Y(o,l,t+1.3,i-.9,h),Y(a,l,i-.8,99,h)}}},c:[[0,1.6,3],[0,1.1,0],[0,1.5,2.5],[0,1.1,0]],range:2}});ge(40,n=>({amb:"aula",fov:22,atores:[me({x:0,z:.2,y:-.4,eyes:[[0,"wide"]],pose:En})],extra:(e,t,[i])=>{let s=Hc(i),r=Xu(.6,1.6,.3,2.2);return e.add(r),{update:o=>{s(Ne(.2,1,o)),r.visible=o>1}}},c:[[0,1.3,2],[0,1.2,.2],[0,1.3,1.6],[0,1.2,.2]],k:1.8,range:1.5}));ge(41,n=>({amb:"aula",fov:22,atores:[_t({x:0,z:.2,y:-.4,eyes:[[0,"happy"]],pose:En})],extra:(e,t,[i])=>{let s=Hc(i);return{update:r=>s(Ne(.1,.8,r))}},c:[[0,1.3,2],[0,1.2,.2],[0,1.3,1.6],[0,1.2,.2]],k:1.8,range:1.5}));ge(42,n=>({amb:"desvan",ambo:{night:!0},fov:30,atores:[me({x:0,z:0,eyes:[[0,"happy"]],pose:(e,t)=>e.pose({armL:[150,120],armR:[150,120],bob:Math.abs(Math.sin(t*5))*.03})})],extra:e=>{let t=Ze(e,["3\xAA NOCHE"],1.1,[0,2.6,0]),i=Oe(e,["TE VIENES ARRIBA"],1.6,[0,.95,.4]);return{update:(s,r,o)=>{Y(t,s,.1,99,o),Y(i,s,1.2,99,o)}}},c:[[0,1.4,3],[0,1.4,0],[0,1.3,2.4],[0,1.4,0]],range:2,look:nt}));ge(43,(n,e)=>{let t=ne(e,"oido");return{amb:"desvan",ambo:{night:!0},fov:30,atores:[me({x:-.6,z:0,eyes:[[0,"look"]],pose:i=>i.pose({armL:[12,8],armR:[140,140]})})],extra:i=>{let s=Kn(i,["OLOR \u2192 SUE\xD1O"],1.5),r=Kn(i,["\xBFY AL O\xCDDO?"],1.5);return{update:(o,a,l)=>{s.position.set(.8,2,0),r.position.set(.8,2,0),Y(s,o,.3,t-.8,l),Y(r,o,t-.6,99,l)}}},c:[[0,1.7,3],[0,1.6,0],[0,1.7,2.6],[0,1.6,0]],range:2,look:nt}});ge(44,(n,e)=>{let t=ne(e,"guante"),i=ne(e,"dormio");return{amb:"labSueno",fov:30,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96}),qi({x:1.4,z:.2,eyes:[[0,"look"]],pose:zr})],extra:s=>{let r=new xe;r.add(B(.24,.1,.3,N("#4A86C7",{roughness:.6}),0,0,0));let o=Ye("#7FD08A",.25,.9);o.position.y=.08,r.add(o),r.position.set(-.9,1,-.6),s.add(r);let a=Oe(s,["UN GUANTE"],1,[-.9,1.8,-.4]),l=Ze(s,["\xABDORMIO\xBB"],1.1,[-.9,1.8,-.4]);return{update:(c,h,u)=>{o.material.opacity=.5+.5*Math.sin(c*6),Y(a,c,t,i-.1,u),Y(l,c,i,99,u)}}},c:[[-.2,2.3,3.4],[-1,1.5,-.8],[-.4,2.2,2.8],[-1,1.5,-.8]],range:3}});Rn(45,["por",["y",1]],[n=>({amb:"labSueno",ambo:{night:!0},fov:28,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96,eyes:[[0,"flat"],[n*.5,"shut"]]})],extra:e=>{let t=B(.24,.1,.3,N("#4A86C7"),-.9,1,-.6);e.add(t);let i=Ye("#7FD08A",.35,.9);i.position.set(-.9,1.1,-.6),e.add(i);let s=Vt(e,"\xAB...\xBB",.8,[-1.6,2,-1]);return{update:(r,o,a)=>{i.material.opacity=r>n*.5?.5+.5*Math.sin(r*12):.2,Y(s,r,n*.7,99,a)}}},c:[[-.4,1.7,2.8],[-.9,1.1,-1.2],[-.4,1.6,2.2],[-.9,1.1,-1.2]],range:2,look:nt}),n=>({amb:"labSueno",ambo:{night:!0},fov:28,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96})],extra:e=>{let t=Vt(e,"\xAB\xC1RBOL\xBB",1,[-1.6,2,-1]);return{update:(i,s,r)=>Y(t,i,.5,99,r)}},c:[[-.4,1.7,2.8],[-.9,1.1,-1.2],[-.4,1.6,2.2],[-.9,1.1,-1.2]],range:2,look:nt}),(n,e)=>{let t=ne(e,"incubacion");return{amb:"labSueno",ambo:{night:!0},fov:32,atores:[_n(wt,{outfit:"azul",glow:0,x:-.3,z:-1,y:.96,eyes:[[0,"happy"]]})],extra:i=>{let s=Kn(i,[""],2.6,{w:640,h:400}),r=new xe;i.add(r);for(let a=0;a<4;a++)Tn(r,-.6+a*.4,0,.28,void 0,a);r.position.set(-1,2,-1.4);let o=Ln(i,["INCUBACI\xD3N DE SUE\xD1OS"],2.2,[-.8,3.3,-1.2]);return{update:(a,l,c)=>{s.position.set(-1,2.3,-1.5);let h=Ne(.2,.9,a);s.scale.setScalar(Math.max(.01,h)),wn(s,c),r.scale.setScalar(Math.max(.01,h)),Y(o,a,t,99,c)}}},c:[[-.4,2,3.6],[-.9,1.8,-1.2],[-.4,2,3],[-.9,1.8,-1.2]],range:3,look:nt}}]);ge(46,(n,e)=>{let t=ne(e,"dragon"),i=ne(e,"mundial"),s=ne(e,"concierto");return{amb:"desvan",ambo:{night:!0},fov:30,atores:[me({x:-1.3,z:.2,eyes:[[0,"happy"]],pose:(r,o)=>r.pose({armL:[60,70],armR:[70+Math.sin(o*20)*6,60]})})],extra:r=>{let o=Lr(["GUION:","SUE\xD1O PERFECTO"],1.5,{size:70});o.position.set(.6,1.9,-.5),r.add(o);let a=[["1. SALVAR A SARA DE UN DRAG\xD3N",t],["2. GANAR EL MUNDIAL",i],["3. CONCIERTO: 50.000 PERSONAS",s]].map(([l,c],h)=>[Oe(r,[l],2.4,[.6,1.2-h*.34,-.45],{size:56,w:1e3,h:130}),c]);return{update:(l,c,h)=>a.forEach(([u,d])=>Y(u,l,d-.3,99))}},c:[[-.4,1.6,3.4],[.3,1.3,-.5],[-.2,1.5,2.8],[.4,1.2,-.5]],range:2,look:nt}});ge(47,n=>({amb:"desvan",ambo:{night:!0},fov:20,atores:[],extra:e=>{let t=ln();return t.position.set(0,.9,-.2),t.scale.setScalar(1.6),e.add(t),e.add(B(.9,.9,.6,N("#6A4630"),0,.45,-.2)),{update:i=>Si(t,Ne(.3,.6,i))}},c:[[.5,1.7,1.6],[.15,1.4,-.2],[.4,1.6,1.2],[.15,1.4,-.2]],range:1,lookFn:ca(.6,n),look:nt}));ge(48,n=>({amb:"gris",fov:30,atores:[me({x:0,z:0,eyes:[[0,"wide"]],pose:e=>e.pose({armL:[150,140],armR:[150,140]})})],extra:e=>{let t=Ze(e,["TODO SALE FATAL"],1.9,[0,2.3,0],{bg:"#C9361F",fg:"#fff"});return{update:(i,s,r)=>Y(t,i,.2,99,r)}},lookFn:e=>({exposure:1.02+3*(1-Ne(0,.5,e))}),c:[[0,1.6,3],[0,1.5,0],[0,1.6,2.6],[0,1.5,0]],range:2}));Rn(49,["el","y"],[(n,e)=>({amb:"playaSueno",fov:32,atores:[{tipo:"dragon",x:.9,z:-.6,s:1},me({x:-.9,z:0,eyes:[[0,"wide"],[1.2,"flat"]],pose:t=>t.pose({armL:[12,8],armR:[130,60]})})],extra:(t,i,[s,r])=>{let o=B(.05,.7,.03,N("#C8CCD4",{metalness:.8}),0,0,0);t.add(o);let a=Oe(t,["DE PELUCHE"],1.3,[.9,2,-.6],{fg:"#5FB04A"}),l=Vt(t,"squeak",.7,[1.6,1.6,-.6]);return{update:(c,h,u)=>{let d=ps(r);o.position.set(d.x,d.y+.35,d.z+.05),s.card.scale.y=1+Math.sin(c*8)*.04,Y(a,c,.6,99,u),Y(l,c,1.4,99,u)}}},c:[[0,1.6,3.6],[0,1,-.3],[0,1.6,3],[0,1,-.3]],range:2,look:Ot}),n=>({amb:"estadio",fov:32,atores:[Br({x:0,z:0,eyes:[[0,"wide"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[12,8],legR:[Math.sin(t*4)*20,0]})})],extra:e=>{let t=new K(new Lt(.13,16,12),N("#FBF7EC"));t.position.set(.4,.13,.3),e.add(t);let i=Ze(e,["LA FINAL... EN PIJAMA"],2.1,[0,2.3,0]);return{update:(s,r,o)=>Y(i,s,.3,99,o)}},c:[[0,1.6,3.4],[0,1.2,-1],[0,1.6,2.8],[0,1.2,-1]],range:3,look:Ot}),(n,e)=>{let t=ne(e,"cuac");return{amb:"concierto",fov:30,atores:[me({x:.3,z:-.6,y:.6,eyes:[[0,"happy"],[t,"wide"]],pose:i=>i.pose({armL:[12,8],armR:[80,70]})})],extra:i=>{let s=Vt(i,"\xA1CUAC!",1,[1.2,3,-.6]);return{update:(r,o,a)=>Y(s,r,t,99,a)}},c:[[0,2.2,5],[.3,1.9,-.6],[0,2.1,4.2],[.3,1.9,-.6]],range:3,look:{bloom:.6}}}]);ge(50,(n,e)=>{let t=ne(e,"suenos"),i=ne(e,"vivimos"),s=ne(e,"preocupa"),r=ne(e,"sentimos");return{amb:"pasillo",fov:32,atores:[me({x:0,z:0,eyes:[[0,"look"],[t,"sad"]],pose:ei})],extra:(o,a,[l])=>{let c=ln();o.add(c);let h=Ze(o,["ERROR"],.8,[0,0,0],{bg:"#C9361F",fg:"#fff"}),u=[["LO QUE VIVIMOS",i,-1.6,2.6],["LO QUE NOS PREOCUPA",s,1.6,2.4],["LO QUE SENTIMOS",r,0,3]].map(([d,p,g,y])=>[Ln(o,[d],1.7,[g,y,-.6]),p]);return{update:(d,p,g)=>{kr(c,l,-.2),c.rotation.z=Math.sin(d*30)*.05*(d>t?1:0),h.position.set(c.position.x,c.position.y+.6,c.position.z),Y(h,d,t,i-.3,g),u.forEach(([y,m])=>Y(y,d,m-.2,99,g))}}},c:[[0,1.8,4.6],[0,1.8,-.3],[0,1.8,4],[0,1.8,-.3]],range:4,look:Ot}});ge(51,(n,e)=>{let t=ne(e,"pero"),i=ne(e,"quien");return{amb:"playaSueno",fov:32,atores:[me({x:-1.2,z:0,eyes:[[0,"look"]],pose:zr}),_t({x:1.2,z:-.4,eyes:[[0,"look"],[i,"happy"]]})],extra:s=>{let r=Oe(s,["ESCENARIO: T\xDA"],1.5,[-1.2,2.5,0]),o=Ln(s,["RECUERDOS, MIEDOS, GANAS:"],2.4,[.5,2.55,-.4]),a=Ze(s,["SON DE ELLA"],1.3,[1,2.2,-.4]);return{update:(l,c,h)=>{Y(r,l,.3,99,h),Y(o,l,t+.3,99,h),Y(a,l,i,99,h)}}},c:[[0,1.8,4.4],[0,1.6,-.4],[0,1.7,3.8],[0,1.6,-.4]],range:3,look:Ot}});ge(52,n=>({amb:"concierto",fov:32,atores:[me({x:.3,z:-.6,y:.6,eyes:[[0,"wide"]],pose:e=>e.pose({armL:[12,8],armR:[80,70]})})],c:[[0,2.2,5],[.3,1.9,-.6],[0,2.1,4.4],[.3,1.9,-.6]],range:3,lookFn:e=>({exposure:1.02-.85*Ne(.6,n,e),vig:.45+.4*Ne(.6,n,e)})}));Rn(53,["estas",["y",1]],[n=>({amb:"concierto",fov:32,atores:[me({x:.3,z:-.6,y:.6,eyes:[[0,"wide"]],pose:e=>e.pose({armL:[40,40],armR:[40,40]})})],c:[[0,2.2,4.4],[.3,1.9,-.6],[0,2.1,4],[.3,1.9,-.6]],range:3,look:{exposure:.2,vig:.9}}),n=>({amb:"gris",fov:32,atores:[me({x:1.2,z:.6,eyes:[[0,"wide"]]})],extra:e=>{let t=Oe(e,["UNA HABITACI\xD3N GRIS"],1.9,[.4,2.35,.6],{bg:"#D8DCE4"});return{update:(i,s,r)=>Y(t,i,.4,99,r)}},c:[[1.6,1.8,4.4],[.8,1.4,.2],[1.4,1.7,3.8],[.8,1.4,.2]],range:4}),(n,e)=>{let t=ne(e,"llorando");return{amb:"gris",fov:30,atores:[or({x:-2.8,z:-2.9,eyes:[[0,"sad"]],pose:(i,s)=>i.pose({armL:[130,140],armR:[130,140],bob:Math.abs(Math.sin(s*9))*.01})}),me({x:1.4,z:.8,eyes:[[0,"wide"]]})],extra:i=>{let s=Oe(i,["SARA, CON 7 A\xD1OS"],2,[-2.3,1.95,-2.7],{bg:"#D8DCE4"}),r=[0,1].map(()=>{let o=Ye("#9FC8FF",.12,.9);return i.add(o),o});return{update:(o,a,l)=>{Y(s,o,.5,99,l),r.forEach((c,h)=>{let u=(o*.8+h*.5)%1;c.position.set(-2.8+(h?.12:-.12)*.66,1.05-u*.3,-2.75),c.material.opacity=o>t?.9*(1-u):0})}}},cam:[[0,[1,1.7,3.4],[-2.2,1,-2.8]],[n,[-.6,1.4,.6],[-2.6,.9,-2.8]]],f:[[0,6],[n,3.8]],range:2.4}}]);ge(54,n=>({amb:"gris",fov:28,atores:[me({x:0,z:0,eyes:[[0,"sad"]],pose:ei})],extra:(e,t,[i])=>{let s=ln();e.add(s);let r=Oe(e,["ESTO NO LO HAS PUESTO T\xDA"],2.3,[0,2.5,0],{bg:"#D8DCE4"});return{update:(o,a,l)=>{kr(s,i,-.2),Si(s,0),Y(r,o,.2,99,l)}}},c:[[0,1.6,2.8],[0,1.4,0],[0,1.6,2.4],[0,1.4,0]],range:2}));Rn(55,[["que",2],"que","que"],[n=>({amb:"gris",fov:30,atores:[or({x:-2.4,z:-2.6,eyes:[[0,"sad"]],talk:[[.3,n]]}),me({x:-1,z:-1.6,eyes:[[0,"look"]],move:e=>[kt(.6,-1,Ne(0,n,e)),0,kt(.2,-1.6,Ne(0,n,e))],pose:(e,t)=>t<n?e.walk(t):e.pose()})],extra:e=>{let t=Vt(e,"ME HE PERDIDO",1.1,[-2.4,1.5,-2.6]);return{update:(i,s,r)=>Y(t,i,.6,99,r)}},c:[[0,1.6,2.6],[-1.8,.9,-2.4],[-.6,1.5,1.6],[-2,.9,-2.4]],range:3}),n=>({amb:"gris",fov:28,atores:[or({x:-2.4,z:-2.6,eyes:[[0,"sad"]],talk:[[0,n]]})],extra:e=>{let t=Vt(e,"EN MI CIUDAD TEN\xCDA AMIGAS",1.5,[-2,1.45,-2.6]);return{update:(i,s,r)=>Y(t,i,.2,99,r)}},c:[[-1.2,1.3,.6],[-2.3,1.05,-2.6],[-1.4,1.25,.2],[-2.3,1.05,-2.6]],range:2}),n=>({amb:"gris",fov:28,atores:[or({x:-2.4,z:-2.6,eyes:[[0,"sad"]],talk:[[0,n]]})],extra:e=>{let t=Vt(e,"AQU\xCD NO CONOZCO A NADIE",1.5,[-2,1.45,-2.6]);return{update:(i,s,r)=>Y(t,i,.2,99,r)}},c:[[-1.2,1.3,.6],[-2.3,1.05,-2.6],[-1.4,1.25,.2],[-2.3,1.05,-2.6]],range:2}),(n,e)=>{let t=ne(e,"ventana"),i=ne(e,"hablar");return{amb:"aula",fov:30,atores:[_t({x:-2.2,z:-1.4,y:-.4,eyes:[[0,"lookl"],[i-.5,"sad"]],pose:En})],extra:s=>{let r=Bt(1.6,1.4,"#CFE8FF",1.2);r.position.set(-3,2.3,-3.4),s.add(r),s.add(B(.9,.06,.55,N("#C9A06A"),-2.2,.75,-1.85));let o=Vt(s,"NO TENGO CON QUI\xC9N HABLAR",1.6,[-1.4,2.3,-1.4]);return{update:(a,l,c)=>Y(o,a,i-.8,99,c)}},c:[[-.4,1.7,2.6],[-2.2,1.1,-1.6],[-.8,1.6,2],[-2.2,1.1,-1.6]],range:3,look:{exposure:.9,vig:.6}}}]);ge(56,n=>({amb:"gris",fov:22,atores:[me({x:0,z:0,eyes:[[0,"wide"]]})],extra:e=>{let t=Ye("#9FD8FF",2.6,0);return t.position.set(0,1.5,.3),e.add(t),{update:i=>t.material.opacity=.35*Ne(0,.8,i)}},c:[[0,1.6,2.2],[0,1.6,0],[0,1.6,1.8],[0,1.6,0]],range:1}));ge(57,(n,e)=>{let t=ne(e,"misteriosa"),i=ne(e,"interesante"),s=ne(e,"inalcanzable");return{amb:"aula",fov:30,atores:[_t({x:-2.2,z:-1.4,y:-.4,eyes:[[0,"lookl"]],pose:En})],extra:r=>{let o=Bt(1.6,1.4,"#CFE8FF",1.4);o.position.set(-3,2.3,-3.4),r.add(o),r.add(B(.9,.06,.55,N("#C9A06A"),-2.2,.75,-1.85));let a=Ai(r,14,"#FFE6FF"),l=[["MISTERIOSA",t,2.25],["INTERESANTE",i,1.9],["INALCANZABLE",s,1.55]].map(([c,h,u])=>[Ln(r,[c],1.3,[-.5,u,-1.2]),h]);return{update:(c,h,u)=>{a(c,[-2.2,1.6,-1.2,.7]),l.forEach(([d,p])=>Y(d,c,p,99,u))}}},c:[[-.2,1.7,2.6],[-1.6,1.4,-1.4],[-.6,1.6,2],[-1.8,1.4,-1.4]],range:3,look:Ot}});ge(58,(n,e)=>{let t=ne(e,"sola");return{amb:"aula",fov:28,atores:[_t({x:-2.2,z:-1.4,y:-.4,eyes:[[0,"sad"]],pose:En})],extra:i=>{let s=Bt(1.6,1.4,"#B8C8D8",.6);s.position.set(-3,2.3,-3.4),i.add(s),i.add(B(.9,.06,.55,N("#C9A06A"),-2.2,.75,-1.85));let r=Oe(i,["ESTABA SOLA"],1.3,[-1,2.3,-1.4],{bg:"#D8DCE4"});return{update:(o,a,l)=>Y(r,o,t-.3,99,l)}},c:[[-.8,1.6,2.2],[-2.2,1.1,-1.4],[-1.2,1.5,1.6],[-2.2,1.1,-1.4]],range:2,look:{exposure:.82,vig:.7}}});ge(59,(n,e)=>{let t=ne(e,"sin"),i=ne(e,"yo");return{amb:"gris",fov:30,atores:[or({x:-2.6,z:-2.7,eyes:[[0,"sad"],[i+1.5,"look"]]}),me({x:-1.9,z:-2.5,y:-.35,eyes:[[0,"look"]],talk:[[i,n]],pose:(s,r)=>r>i?zc(s,r):En(s)})],extra:s=>{let r=Oe(s,["SIN BOT\xD3N \xB7 SIN PATO \xB7 SIN GUION"],2.4,[-1.8,2,-2.4],{bg:"#D8DCE4",size:60,w:1e3}),o=Vt(s,"YO PUEDO SER TU AMIGO",1.6,[-1.5,1.8,-2.4]);return{update:(a,l,c)=>{Y(r,a,t,i-.2,c),Y(o,a,i,99,c)}}},c:[[-.6,1.4,1.4],[-2.2,1,-2.6],[-1,1.3,.8],[-2.2,1,-2.6]],range:2}});ge(60,n=>({amb:"gris",fov:32,atores:[or({x:-2.6,z:-2.7,eyes:[[0,"look"],[1.2,"happy"]]}),me({x:-1.9,z:-2.5,y:-.35,eyes:[[0,"happy"]],pose:En})],extra:e=>{let t=Ye("#FFD8A0",6,0);return t.position.set(-1.6,2.2,-2.4),e.add(t),{update:i=>{let s=Ne(0,n,i);e.userData.warm.intensity=18*s,t.material.opacity=.45*s}}},c:[[.6,1.8,2.4],[-2.2,1,-2.6],[.2,1.7,1.8],[-2.2,1,-2.6]],range:3,lookFn:e=>({exposure:1+.5*Ne(0,n,e),bloom:.3+.6*Ne(0,n,e)})}));ge(61,(n,e)=>{let t=ne(e,"cuatro");return{amb:"quarto",ambo:{night:!0},fov:30,atores:[Br({x:-1.7,z:-.2,y:.1,eyes:[[0,"shut"],[.4,"wide"]],pose:(i,s)=>{la(i),i.pose({armL:[60,70],armR:[60,70]}),fs(i)}})],extra:(i,s,[r])=>{let o=ln();i.add(o);let a=Pc(.7,4);a.position.set(.6,2.6,-2.9),i.add(a);let l=Ze(i,["4:00"],.8,[.6,3.3,-2.8]);return{update:(c,h,u)=>{kr(o,r,-.15),Y(l,c,t,99)}}},c:[[.4,1.6,2.6],[-1,1.2,-.6],[.2,1.5,2],[-1,1.2,-.6]],range:3,look:nt}});ge(62,n=>({amb:"quarto",ambo:{night:!0},fov:24,atores:[Br({x:-1.7,z:-.2,y:.1,eyes:[[0,"sad"]],pose:e=>{la(e),e.pose({armL:[10,6],armR:[10,6],head:-8}),fs(e)}})],c:[[-1,1.4,1.8],[-1.7,1.2,-.2],[-1.2,1.4,1.4],[-1.7,1.2,-.2]],range:1.4,look:{...nt,vig:.7}}));Rn(63,[["y",1]],[(n,e)=>{let t=ne(e,"miedos"),i=ne(e,"secretos"),s=ne(e,"privado");return{amb:"pasillo",fov:30,atores:[me({x:0,z:0,eyes:[[0,"sad"]]})],extra:r=>{let o=[["NO ERA TUYO",0,0,2.7],["SUS MIEDOS",t,-1.5,2.2],["SUS SECRETOS",i,1.5,2.2],["LO M\xC1S PRIVADO",s,0,3.2]].map(([a,l,c,h])=>[Ln(r,[a],1.5,[c,h,-.4]),l]);return{update:(a,l,c)=>o.forEach(([h,u])=>Y(h,a,u+.2,99,c))}},c:[[0,1.8,4.6],[0,1.9,-1],[0,1.8,4],[0,1.9,-1]],range:3,look:{...Ot,exposure:.85}}},(n,e)=>{let t=ne(e,"permiso"),i=ne(e,"tres");return{amb:"pasillo",fov:34,atores:[me({x:2,z:-7.6,eyes:[[0,"sad"]]})],extra:s=>{s.userData.door.rotation.y=-1.4;let r=[["SIN LLAMAR",.2,1],["SIN PERMISO",t,2],["3 NOCHES SEGUIDAS",i,3]].map(([o,a,l])=>[Ze(s,[o],1.5,[.2+l*.45,2.5-(l-1)*.32,-6.6]),a]);return{update:(o,a,l)=>r.forEach(([c,h])=>Y(c,o,h,99,l))}},cam:[[0,[-.4,1.8,-3.4],[1.6,1.6,-8]],[n,[0,1.7,-4.4],[1.8,1.6,-8]]],f:[[0,5]],range:3,look:{...Ot,exposure:.85}}}]);ge(64,(n,e)=>{let t=ne(e,"usar");return{amb:"quarto",ambo:{night:!0},fov:20,atores:[],extra:i=>{let s=ln();s.position.set(0,1,-.2),s.scale.setScalar(2),i.add(s),i.add(B(.9,1,.7,N("#8E6242"),0,.5,-.2));let r=Ze(i,["USAR CON CUIDADO"],1.3,[0,2,0]);return{update:(o,a,l)=>Y(r,o,t,99,l)}},c:[[0,1.5,1.8],[0,1.4,-.2],[0,1.4,1.3],[0,1.4,-.2]],k:2.1,range:1.5,look:nt}});ge(65,n=>({amb:"desvan",fov:30,atores:[Oc({x:.9,z:-.8,eyes:[[0,"happy"]],tint:"#F2E2C8"}),me({x:-.9,z:.2,eyes:[[0,"look"]],pose:Bg})],extra:(e,t,[i])=>{i.root.traverse(r=>{r.material&&(r.material.transparent=!0,r.material.opacity=.55)});let s=Ye("#FFE8C0",3,.35);return s.position.set(.9,1.4,-.8),e.add(s),{}},c:[[0,1.6,3.4],[0,1.4,-.4],[0,1.6,2.8],[0,1.4,-.4]],range:3,look:{bloom:.6,exposure:1.05}}));ge(66,(n,e)=>{let t=ne(e,"tiemblan");return{amb:"barrio",fov:32,atores:[me({x:2,z:-.4,eyes:[[0,"look"],[t,"wide"]],move:i=>[kt(-1.5,3.4,Ne(0,n*.8,i))+(i>t?Math.sin(i*40)*.02:0),0,-.4],pose:(i,s)=>{s<n*.8?i.walk(s):i.pose({legL:[Math.sin(s*40)*6,0],legR:[-Math.sin(s*40)*6,0],armL:[70,80]})}})],extra:(i,s,[r])=>{let o=aa();o.scale.setScalar(.45),i.add(o);let a=Oe(i,["TE TIEMBLAN LAS PIERNAS"],2.1,[3,2.6,-.4]);return{update:(l,c,h)=>{let u=r.root.position;o.position.set(u.x-.25,1,u.z+.2),Y(a,l,t,99,h)}}},cam:[[0,[-1,2,4.4],[1,1.2,-1]],[n,[2,1.8,3.4],[3.6,1.2,-1]]],f:[[0,5.4],[n,4.6]],range:4}});ge(67,(n,e)=>{let i=["desvan","boton","pato","rosa","dragon","gris"].map(s=>ne(e,s));return{amb:"barrio",fov:32,atores:[_t({x:4.3,z:-1.6,eyes:[[0,"look"]]}),me({x:3.2,z:-1,eyes:[[0,"look"]],talk:[[0,n]]})],extra:s=>{let r=["EL DESV\xC1N","EL BOT\xD3N","EL PATO","LA ROSA","EL DRAG\xD3N","LA HABITACI\xD3N GRIS"],o=[[2,2.6],[3,3],[4.2,3.2],[5.3,2.8],[2.3,2.1],[4.8,2.2]],a=r.map((l,c)=>[Oe(s,[l],l.length>10?1.9:1.2,[o[c][0],o[c][1]-.2,-1.2],{size:64}),i[c]]);return{update:(l,c,h)=>a.forEach(([u,d])=>Y(u,l,d,99,h))}},c:[[3.6,2,4.6],[3.7,1.9,-1.2],[3.6,1.9,4],[3.7,1.9,-1.2]],k:1,range:3}});ge(68,n=>({amb:"barrio",fov:24,atores:[_t({x:4.3,z:-1.6,eyes:[[0,"flat"]]})],extra:e=>{let t=Vt(e,"...",.6,[4.75,2.1,-1.6]);return{update:(i,s,r)=>Y(t,i,.6,99,r)}},c:[[3.8,1.7,1.2],[4.3,1.6,-1.6],[3.9,1.7,.8],[4.3,1.6,-1.6]],range:1.4}));ge(69,n=>({amb:"barrio",fov:28,atores:[_t({x:4.3,z:-1.6,eyes:[[0,"look"]],talk:[[.3,n]]}),me({x:3.2,z:-1,eyes:[[0,"look"]]})],extra:e=>{let t=Vt(e,"\xBFPOR QU\xC9 ME LO CUENTAS?",1.5,[4.6,2.4,-1.6]);return{update:(i,s,r)=>Y(t,i,.3,99,r)}},c:[[3.4,1.8,2.4],[3.9,1.6,-1.4],[3.5,1.7,2],[3.9,1.6,-1.4]],range:2}));Rn(70,[["que",2],["y",1]],[n=>({amb:"barrio",fov:28,atores:[me({x:3.2,z:-1,eyes:[[0,"sad"]],talk:[[0,n]]}),_t({x:4.3,z:-1.6,eyes:[[0,"look"]]})],extra:e=>{let t=Oe(e,["NO EST\xC1 BIEN ENTRAR","SIN PERMISO"],1.7,[2.7,2.35,-1],{h:230});return{update:(i,s,r)=>Y(t,i,.4,99,r)}},c:[[4.4,1.8,2.4],[3.2,1.6,-1],[4.2,1.7,2],[3.2,1.6,-1]],range:2}),n=>({amb:"barrio",fov:28,atores:[me({x:3.2,z:-1,eyes:[[0,"sad"]],talk:[[0,n]]}),_t({x:4.3,z:-1.6,eyes:[[0,"look"]]})],extra:e=>{let t=Oe(e,["NO ME TOCABA VERLO"],1.7,[2.7,2.4,-1]);return{update:(i,s,r)=>Y(t,i,.2,99,r)}},c:[[4.4,1.8,2.4],[3.2,1.6,-1],[4.2,1.7,2],[3.2,1.6,-1]],range:2}),n=>({amb:"barrio",fov:30,atores:[me({x:3.2,z:-1,eyes:[[0,"look"]],talk:[[0,n]]}),_t({x:4.3,z:-1.6,eyes:[[0,"look"],[n*.7,"happy"]]})],extra:e=>{let t=Ln(e,["QUE SEA PORQUE T\xDA QUIERES"],2,[3.7,2.45,-1.2]);return{update:(i,s,r)=>Y(t,i,.3,99,r)}},c:[[3,1.9,3],[3.8,1.6,-1.3],[3.2,1.8,2.4],[3.8,1.6,-1.3]],range:2})]);ge(71,n=>({amb:"barrio",fov:26,atores:[_t({x:4.3,z:-1.6,eyes:[[0,"look"],[1.2,"lookl"],[2.2,"look"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[90,40]})})],extra:(e,t,[i])=>{let s=ln();return e.add(s),{update:r=>{kr(s,i,-.1),s.rotation.y=r*1.2}}},c:[[3.6,1.8,1.8],[4.3,1.4,-1.6],[3.8,1.7,1.3],[4.3,1.4,-1.6]],range:1.6}));ge(72,n=>({amb:"barrio",fov:30,atores:[_t({x:4.3,z:-1.6,eyes:[[0,"flat"]],pose:(e,t)=>e.pose({armL:[12,8],armR:[kt(90,160,Ne(.2,.6,t)),40]})}),me({x:3,z:-1,eyes:[[0,"wide"]]})],extra:e=>{let t=ju();t.position.set(5.6,0,-1.4),e.add(t);let i=ln();i.scale.setScalar(.8),e.add(i);let s=Ze(e,["\xA1A LA BASURA!"],1.4,[5.4,2.4,-1.4]);return{update:(r,o,a)=>{let l=Ne(.5,1.5,r);i.position.set(kt(4.4,5.6,l),kt(1.4,.7,l)+Math.sin(l*Math.PI)*1,kt(-1.5,-1.4,l)),i.rotation.z=l*6,i.visible=l<.98,Y(s,r,1.5,99,a)}}},c:[[4.2,1.8,3.4],[4.6,1.2,-1.4],[4.3,1.8,2.8],[4.7,1.2,-1.4]],range:3}));ge(73,n=>({amb:"barrio",fov:22,atores:[_t({x:4.3,z:-1.6,eyes:[[0,"happy"]]})],c:[[4.1,1.7,.6],[4.3,1.6,-1.6],[4.15,1.7,.3],[4.3,1.6,-1.6]],range:1}));ge(74,(n,e)=>{let t=ne(e,"pato");return{amb:"barrio",fov:28,atores:[_t({x:4.3,z:-1.6,eyes:[[0,"happy"]],talk:[[0,n]]}),me({x:3.2,z:-1,eyes:[[0,"look"],[t+1,"happy"]]})],extra:i=>{let s=Vt(i,"ME ALEGRO DE QUE FUERAS T\xDA",1.6,[4.6,2.4,-1.6]),r=Vt(i,"EL PATO ME HIZO RE\xCDR",1.5,[4.6,2.4,-1.6]);return{update:(o,a,l)=>{Y(s,o,.2,t-.5,l),Y(r,o,t-.4,99,l)}}},c:[[3.4,1.8,2.4],[3.9,1.6,-1.4],[3.5,1.7,2],[3.9,1.6,-1.4]],range:2}});Rn(75,[["y",1],["y",2]],[n=>({amb:"aula",fov:30,atores:[_t({x:-.45,z:.2,y:-.4,eyes:[[0,"happy"]],pose:En}),me({x:.55,z:.2,y:-.4,eyes:[[0,"happy"]],pose:En})],extra:e=>{let t=Bt(1.6,1.4,"#CFE8FF",1.2);t.position.set(-3,2.3,-3.4),e.add(t);for(let s of[-.45,.55])e.add(B(.9,.06,.55,N("#C9A06A"),s,.75,-.25));let i=Oe(e,["YA NO JUNTO A LA VENTANA"],2.2,[0,2.1,0]);return{update:(s,r,o)=>Y(i,s,.5,99,o)}},c:[[0,1.6,3],[0,1.3,0],[0,1.5,2.5],[0,1.3,0]],k:1.7,range:2.5}),n=>({amb:"parque",fov:32,atores:[_t({x:-.4,z:0,eyes:[[0,"happy"]],pose:zc}),wt({outfit:"verde",hair:"bob",hairc:"#D9B65A",lash:!0,x:-1.5,z:-.4,eyes:[[0,"happy"]],pose:ar}),wt({outfit:"roxo",hair:"afro",hairc:"#2A1A12",lash:!0,x:-2.4,z:-.2,eyes:[[0,"happy"]]}),me({x:.6,z:0,eyes:[[0,"happy"]],pose:ar}),wt({outfit:"laranja",x:1.6,z:-.4,eyes:[[0,"happy"]]}),wt({outfit:"azul",x:2.5,z:-.2,eyes:[[0,"happy"]],pose:ar})],extra:e=>{let t=Oe(e,["NUEVOS AMIGOS"],1.5,[0,2.6,-.2]);return{update:(i,s,r)=>Y(t,i,.4,99,r)}},c:[[0,1.8,5.4],[0,1.2,-.3],[0,1.7,4.8],[0,1.2,-.3]],range:4}),n=>({amb:"parque",ambo:{dusk:!0},fov:32,atores:[_t({x:-.4,z:0,eyes:[[0,"happy"]],pose:e=>e.pose({armL:[12,8],armR:[100,80]})}),wt({outfit:"verde",hair:"bob",hairc:"#D9B65A",lash:!0,x:-1.5,z:-.4,eyes:[[0,"happy"]],pose:e=>e.pose({armL:[12,8],armR:[100,80]})}),me({x:.6,z:0,eyes:[[0,"happy"]],pose:e=>e.pose({armL:[12,8],armR:[100,80]})}),wt({outfit:"laranja",x:1.6,z:-.4,eyes:[[0,"happy"]],pose:e=>e.pose({armL:[12,8],armR:[100,80]})})],extra:(e,t,i)=>{let s=i.map(()=>{let o=new xe,a=new K(new _i(.06,.16,10),N("#D8A868"));a.rotation.x=Math.PI,o.add(a);let l=new K(new Lt(.07,12,10),N(["#F2A8C8","#FBF7EC","#7A4A2A","#9AD884"][Math.floor(__sr()*4)]));return l.position.y=.1,o.add(l),e.add(o),o}),r=Oe(e,["HELADO EN EL PARQUE"],1.9,[0,2.6,-.2]);return{update:(o,a,l)=>{i.forEach((c,h)=>{let u=ps(c);s[h].position.set(u.x,u.y+.1,u.z+.05)}),Y(r,o,.4,99,l)}}},c:[[0,1.8,4.8],[0,1.3,-.3],[0,1.7,4.2],[0,1.3,-.3]],range:4})]);ge(76,(n,e)=>{let t=[0,ne(e,"guion")-.1,ne(e,"trucos")-.1];return{amb:"parque",ambo:{dusk:!0},fov:30,atores:[_t({x:-.5,z:0,eyes:[[0,"happy"]]}),me({x:.5,z:0,eyes:[[0,"happy"]]})],extra:i=>{let s=["SIN BOTONES","SIN GUION","SIN TRUCOS"].map((r,o)=>[Oe(i,[r],1.3,[-1.5+o*1.5,2.5,-.3]),t[o]]);return{update:(r,o,a)=>s.forEach(([l,c])=>Y(l,r,c+.1,99,a))}},c:[[0,1.7,4],[0,1.5,-.3],[0,1.7,3.6],[0,1.5,-.3]],range:3}});Rn(77,["y"],[n=>({amb:"desvan",ambo:{night:!0},fov:30,atores:[me({x:0,z:0,eyes:[[0,"flat"]],pose:ei})],extra:(e,t,[i])=>{let s=ln();e.add(s);let r=Ze(e,["3 NOCHES CONTROLANDO"],2,[0,2.6,0]);return{update:(o,a,l)=>{kr(s,i,-.2),Y(r,o,.5,99,l)}}},c:[[0,1.7,3],[0,1.4,0],[0,1.6,2.6],[0,1.4,0]],range:2,look:nt}),n=>({amb:"barrio",ambo:{dusk:!0},fov:32,atores:[_t({x:-.4,z:0,eyes:[[0,"happy"]],move:e=>[kt(-3,1,e/n)-.4,0,0],pose:(e,t)=>e.walk(t)}),me({x:.4,z:0,eyes:[[0,"happy"]],move:e=>[kt(-3,1,e/n)+.4,0,0],pose:(e,t)=>e.walk(t)})],extra:e=>{let t=Ln(e,["1 MA\xD1ANA DE VERDAD"],2,[0,2.6,0]);return{update:(i,s,r)=>{let o=kt(-3,1,i/n);t.position.x=o,Y(t,i,.8,99,r)}}},cam:[[0,[-3,1.8,4.4],[-3,1.3,0]],[n,[1,1.8,4.4],[1,1.3,0]]],f:[[0,4.6]],range:3})]);ge(78,(n,e)=>{let t=ne(e,"mensaje");return{amb:"quarto",ambo:{night:!0},fov:30,atores:[_n(Br,{x:-.8,z:-.8,y:.78,eyes:[[0,"flat"],[t,"wide"]],p2:i=>la(i)})],extra:i=>{let s=Nr(["..."],{hora:"23:47"});s.scale.setScalar(.35),s.position.set(-.2,1.25,-.3),s.rotation.x=-.6,i.add(s);let r=Ye("#9FC8FF",.8,0);return r.position.set(-.2,1.35,-.2),i.add(r),{update:o=>{let a=o>t;r.material.opacity=a?.5+.3*Math.sin(o*14):0,s.position.x=-.2+(a&&o<t+1?Math.sin(o*60)*.01:0)}}},c:[[.6,1.9,2.2],[-1,1,-1],[.4,1.8,1.6],[-1,1,-1]],range:2,look:nt}});ge(79,(n,e)=>{let t=ne(e,"pero");return{amb:"quarto",ambo:{night:!0},fov:26,atores:[],extra:i=>{let s=Nr(["Esta noche voy a","so\xF1ar contigo."],{hora:"23:47"}),r=Nr(["Esta noche voy a","so\xF1ar contigo.","Pero lo voy a","decidir yo."],{hora:"23:47"});for(let o of[s,r])o.position.set(0,1.6,0),i.add(o);return{update:o=>{s.visible=o<t,r.visible=o>=t}}},c:[[0,1.6,2.2],[0,1.6,0],[0,1.6,1.8],[0,1.6,0]],range:1,look:nt}});ge(80,n=>({amb:"quarto",ambo:{night:!0},fov:30,atores:[Br({x:-1,z:.2,eyes:[[0,"wide"],[1.2,"heart"]],pose:e=>e.pose({armL:[12,8],armR:[80,50]})}),Or({x:.8,z:-.4,s:.6})],extra:(e,t,[i,s])=>{let r=Hc(i),o=Nr(["...pero lo voy a","decidir yo."],{hora:"23:48",pato:!0});o.scale.setScalar(.4),e.add(o);let a=Vt(e,"\xA1CUAC!",.7,[1.1,1.2,-.4]);return{update:(l,c,h)=>{let u=ps(i);o.position.set(u.x,u.y+.15,u.z+.08),wn(o,h),r(Ne(.8,1.6,l)),s.root.visible=l>.5,Y(a,l,.7,99,h),s.talk(l,l>.7&&l<1.5)}}},c:[[0,1.5,3],[0,1.2,-.2],[0,1.5,2.6],[0,1.2,-.2]],range:2,look:nt}));ge(81,(n,e)=>{let t=ne(e,"suscribete"),i=ne(e,"cuentame"),s=ne(e,"boton");return{amb:"playaSueno",fov:32,atores:[_t({x:-1.6,z:0,eyes:[[0,"happy"]],pose:ar}),me({x:-.7,z:0,eyes:[[0,"happy"]],pose:(r,o)=>o>t?zr(r):ar(r,o)}),Or({x:2.3,z:-.6,s:1.2})],extra:(r,o,a)=>{let l=Nc(2.4);l.position.set(1,2.6,-.2),r.add(l);let c=ln();c.position.set(.9,0,.6),c.scale.setScalar(1.6),r.add(c);let h=Ze(r,["\xBFQU\xC9 HAR\xCDAS T\xDA CON EL BOT\xD3N ROJO?"],3.2,[0,.8,1.2],{size:62,w:1300}),u=Oe(r,["CU\xC9NTAMELO EN LOS COMENTARIOS"],2.6,[0,3.3,-.2],{size:62,w:1200});return{update:(d,p,g)=>{let y=Ne(t-.3,t,d);l.scale.setScalar(Math.max(.01,y)),l.rotation.z=d>t+.6&&d<t+1.6?Math.sin(d*40)*.05:0,Y(u,d,i,99,g),Y(h,d,s-.6,99,g),Si(c,d>s?.5+.5*Math.sin(d*5):0),a[2].talk(d,d>s&&Math.sin(d*3)>.6)}}},c:[[0,1.9,5.6],[0,1.6,-.2],[0,1.8,5],[0,1.6,-.2]],k:1,range:7,blur:4,look:Ot}});function Hg(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new Qo(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=lr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=lr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(Hg(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=lr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
