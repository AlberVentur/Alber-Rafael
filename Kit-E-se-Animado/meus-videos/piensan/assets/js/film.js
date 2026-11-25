var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}
(()=>{var ah="170";var Qf=0,hd=1,Kf=2;var vu=1,lh=2,Mi=3,Yi=0,en=1,St=2,ai=0,Xi=1,Mn=2,dd=3,ud=4,jf=5,gs=100,e0=101,t0=102,n0=103,i0=104,s0=200,r0=201,o0=202,a0=203,Nl=204,Ol=205,l0=206,c0=207,h0=208,d0=209,u0=210,f0=211,p0=212,m0=213,g0=214,Bl=0,Hl=1,zl=2,rr=3,kl=4,Gl=5,Vl=6,Wl=7,Au=0,E0=1,y0=2,li=0,v0=1,A0=2,_0=3,M0=4,S0=5,T0=6,b0=7;var _u=300,or=301,ar=302,Xl=303,ql=304,Ta=306,$t=1e3,ys=1001,Yl=1002,Ln=1003,w0=1004;var Mo=1005;var ri=1006,el=1007;var vs=1008;var wi=1009,Mu=1010,Su=1011,Qr=1012,ch=1013,Ri=1014,oi=1015,wn=1016,hh=1017,dh=1018,lr=1020,Tu=35902,bu=1021,wu=1022,Yn=1023,Ru=1024,xu=1025,nr=1026,cr=1027,uh=1028,fh=1029,Cu=1030,ph=1031;var mh=1033,Qo=33776,Ko=33777,jo=33778,ea=33779,Zl=35840,Jl=35841,$l=35842,Ql=35843,Kl=36196,jl=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,dc=37818,uc=37819,fc=37820,pc=37821,ta=36492,mc=36494,gc=36495,Fu=36283,Ec=36284,yc=36285,vc=36286;var na=2300,Ac=2301,tl=2302,fd=2400,pd=2401,md=2402;var R0=3200,yr=3201;var Pu=0,x0=1,Vi="",Ht="srgb",Ki="srgb-linear",ba="linear",bt="srgb";var Ns=7680;var gd=519,C0=512,F0=513,P0=514,Iu=515,I0=516,D0=517,L0=518,U0=519,_c=35044;var Ed="300 es",Ti=2e3,ia=2001,Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,sa=180/Math.PI;function qi(){let n=__sr()*4294967295|0,e=__sr()*4294967295|0,t=__sr()*4294967295|0,i=__sr()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function N0(n,e){return(n%e+e)%e}function il(n,e,t){return(1-t)*n+t*e}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ce=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=__sr(),this.y=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],E=s[0],m=s[3],f=s[6],v=s[1],A=s[4],y=s[7],D=s[2],C=s[5],b=s[8];return r[0]=o*E+a*v+l*D,r[3]=o*m+a*A+l*C,r[6]=o*f+a*y+l*b,r[1]=c*E+h*v+d*D,r[4]=c*m+h*A+d*C,r[7]=c*f+h*y+d*b,r[2]=u*E+p*v+g*D,r[5]=u*m+p*A+g*C,r[8]=u*f+p*y+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return e[0]=d*E,e[1]=(s*c-h*i)*E,e[2]=(a*i-s*o)*E,e[3]=u*E,e[4]=(h*t-s*l)*E,e[5]=(s*r-a*t)*E,e[6]=p*E,e[7]=(i*l-c*t)*E,e[8]=(o*t-i*r)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new Qe;function Du(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O0(){let n=ra("canvas");return n.style.display="block",n}var yd={};function qr(n){n in yd||(yd[n]=!0,console.warn(n))}function B0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function H0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function z0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var pt={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(n.r=ir(n.r),n.g=ir(n.g),n.b=ir(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vi?ba:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var vd=[.64,.33,.3,.6,.15,.06],Ad=[.2126,.7152,.0722],_d=[.3127,.329],Md=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pt.define({[Ki]:{primaries:vd,whitePoint:_d,transfer:ba,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:Ad,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:vd,whitePoint:_d,transfer:bt,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:Ad,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}});var Os,Mc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=ra("canvas")),Os.width=e.width,Os.height=e.height;let i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ra("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},k0=0,oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G0=0,Sn=class n extends Zi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ys,s=ys,r=ri,o=vs,a=Yn,l=wi,c=n.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=qi(),this.name="",this.source=new oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=_u;Sn.DEFAULT_ANISOTROPY=1;var Rt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(p+1)/2,D=(f+1)/2,C=(h+u)/4,b=(d+E)/4,F=(g+m)/4;return A>y&&A>D?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=C/i,r=b/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=b/r,s=F/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this.w=__sr(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sc=class extends Zi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Sc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},aa=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends Sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],g=r[o+2],E=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=E;return}if(d!==E||l!==u||c!==p||h!==g){let m=1-a,f=l*u+c*p+h*g+d*E,v=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){let D=Math.sqrt(A),C=Math.atan2(D,f*v);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}let y=a*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+E*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-a*p,e[t+2]=c*g+h*p+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*__sr(),t=2*Math.PI*__sr(),i=__sr(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=__sr(),this.y=__sr(),this.z=__sr(),this}randomDirection(){let e=__sr()*Math.PI*2,t=__sr()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new P,Td=new Ji,xi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),To.subVectors(this.max,Nr),Bs.subVectors(e.a,Nr),Hs.subVectors(e.b,Nr),zs.subVectors(e.c,Nr),Oi.subVectors(Hs,Bs),Bi.subVectors(zs,Hs),cs.subVectors(Bs,zs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-cs.z,cs.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,cs.z,0,-cs.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-cs.y,cs.x,0];return!al(t,Bs,Hs,zs,To)||(t=[1,0,0,0,1,0,0,0,1],!al(t,Bs,Hs,zs,To))?!1:(bo.crossVectors(Oi,Bi),t=[bo.x,bo.y,bo.z],al(t,Bs,Hs,zs,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ei=[new P,new P,new P,new P,new P,new P,new P,new P],Wn=new P,So=new xi,Bs=new P,Hs=new P,zs=new P,Oi=new P,Bi=new P,cs=new P,Nr=new P,To=new P,bo=new P,hs=new P;function al(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var V0=new xi,Or=new P,ll=new P,$i=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):V0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(ll)),this.expandByPoint(Or.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new P,cl=new P,wo=new P,Hi=new P,hl=new P,Ro=new P,dl=new P,la=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){cl.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(cl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=Hi.dot(this.direction),l=-Hi.dot(wo),c=Hi.lengthSq(),h=Math.abs(1-o*o),d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let E=1/h;d*=E,u*=E,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cl).addScaledVector(wo,u),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){hl.subVectors(t,e),Ro.subVectors(i,e),dl.crossVectors(hl,Ro);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let l=a*this.direction.dot(Ro.crossVectors(Hi,Ro));if(l<0)return null;let c=a*this.direction.dot(hl.cross(Hi));if(c<0||l+c>o)return null;let h=-a*Hi.dot(dl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xt=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,p,g,E,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-E*c,t[9]=-a*l,t[2]=E-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u+E*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=E+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,E=c*d;t[0]=u-E*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=E-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*d,g=a*h,E=a*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+E,t[1]=l*d,t[5]=E*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=E-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-E*d}else if(e.order==="XZY"){let u=o*l,p=o*c,g=a*l,E=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+E,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=E*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,X0)}lookAt(e,t,i){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),zi.crossVectors(i,In),zi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),zi.crossVectors(i,In)),zi.normalize(),xo.crossVectors(In,zi),s[0]=zi.x,s[4]=xo.x,s[8]=In.x,s[1]=zi.y,s[5]=xo.y,s[9]=In.y,s[2]=zi.z,s[6]=xo.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],E=i[6],m=i[10],f=i[14],v=i[3],A=i[7],y=i[11],D=i[15],C=s[0],b=s[4],F=s[8],S=s[12],_=s[1],I=s[5],B=s[9],z=s[13],X=s[2],j=s[6],Z=s[10],re=s[14],Y=s[3],ue=s[7],Me=s[11],He=s[15];return r[0]=o*C+a*_+l*X+c*Y,r[4]=o*b+a*I+l*j+c*ue,r[8]=o*F+a*B+l*Z+c*Me,r[12]=o*S+a*z+l*re+c*He,r[1]=h*C+d*_+u*X+p*Y,r[5]=h*b+d*I+u*j+p*ue,r[9]=h*F+d*B+u*Z+p*Me,r[13]=h*S+d*z+u*re+p*He,r[2]=g*C+E*_+m*X+f*Y,r[6]=g*b+E*I+m*j+f*ue,r[10]=g*F+E*B+m*Z+f*Me,r[14]=g*S+E*z+m*re+f*He,r[3]=v*C+A*_+y*X+D*Y,r[7]=v*b+A*I+y*j+D*ue,r[11]=v*F+A*B+y*Z+D*Me,r[15]=v*S+A*z+y*re+D*He,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],E=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+E*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*d+t*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],E=e[13],m=e[14],f=e[15],v=d*m*c-E*u*c+E*l*p-a*m*p-d*l*f+a*u*f,A=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,y=h*E*c-g*d*c+g*a*p-o*E*p-h*a*f+o*d*f,D=g*d*l-h*E*l-g*a*u+o*E*u+h*a*m-o*d*m,C=t*v+i*A+s*y+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return e[0]=v*b,e[1]=(E*u*r-d*m*r-E*s*p+i*m*p+d*s*f-i*u*f)*b,e[2]=(a*m*r-E*l*r+E*s*c-i*m*c-a*s*f+i*l*f)*b,e[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*b,e[4]=A*b,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*b,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*b,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*b,e[8]=y*b,e[9]=(g*d*r-h*E*r-g*i*p+t*E*p+h*i*f-t*d*f)*b,e[10]=(o*E*r-g*a*r+g*i*c-t*E*c-o*i*f+t*a*f)*b,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*p-t*a*p)*b,e[12]=D*b,e[13]=(h*E*s-g*d*s+g*i*u-t*E*u-h*i*m+t*d*m)*b,e[14]=(g*a*s-o*E*s-g*i*l+t*E*l+o*i*m-t*a*m)*b,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*u+t*a*u)*b,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,E=o*h,m=o*d,f=a*d,v=l*c,A=l*h,y=l*d,D=i.x,C=i.y,b=i.z;return s[0]=(1-(E+f))*D,s[1]=(p+y)*D,s[2]=(g-A)*D,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(u+f))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(g+A)*b,s[9]=(m-v)*b,s[10]=(1-(u+E))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let c=1/r,h=1/o,d=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ti){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,g;if(a===Ti)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ia)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ti){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),u=(t+e)*c,p=(i+s)*h,g,E;if(a===Ti)g=(o+r)*d,E=-2*d;else if(a===ia)g=r*d,E=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ks=new P,Xn=new xt,W0=new P(0,0,0),X0=new P(1,1,1),zi=new P,xo=new P,In=new P,bd=new xt,wd=new Ji,ci=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},q0=0,Rd=new P,Gs=new Ji,vi=new xt,Co=new P,Br=new P,Y0=new P,Z0=new Ji,xd=new P(1,0,0),Cd=new P(0,1,0),Fd=new P(0,0,1),Pd={type:"added"},J0={type:"removed"},Vs={type:"childadded",child:null},ul={type:"childremoved",child:null},Wt=class n extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new ci,i=new Ji,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Qe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Co.copy(e):Co.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Br,Co,this.up):vi.lookAt(Co,Br,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(vi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new P(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new P,Ai=new P,fl=new P,_i=new P,Ws=new P,Xs=new P,Id=new P,pl=new P,ml=new P,gl=new P,El=new Rt,yl=new Rt,vl=new Rt,Wi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),Ai.subVectors(i,t),fl.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(Ai),l=qn.dot(fl),c=Ai.dot(Ai),h=Ai.dot(fl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return El.setScalar(0),yl.setScalar(0),vl.setScalar(0),El.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),vl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(El,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(vl,r.z),o}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),Ai.subVectors(e,t),qn.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,i),Xs.subVectors(r,i),pl.subVectors(e,i);let l=Ws.dot(pl),c=Xs.dot(pl);if(l<=0&&c<=0)return t.copy(i);ml.subVectors(e,s);let h=Ws.dot(ml),d=Xs.dot(ml);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ws,o);gl.subVectors(e,r);let p=Ws.dot(gl),g=Xs.dot(gl);if(g>=0&&p<=g)return t.copy(r);let E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Xs,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Id.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Id,a);let f=1/(m+E+u);return o=E*f,a=u*f,t.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=N0(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Al(o,r,e+1/3),this.g=Al(o,r,e),this.b=Al(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=Lu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return pt.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ht){pt.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Fo);let i=il(ki.h,Fo.h,t),s=il(ki.s,Fo.s,t),r=il(ki.l,Fo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new ae;ae.NAMES=Lu;var $0=0,Ci=class extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=qi(),this.name="",this.blending=Xi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qe=class extends Ci{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new P,Po=new ce,tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_c,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}};var ha=class extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var da=class extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var _t=class extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Q0=0,Hn=new xt,_l=new Wt,qs=new P,Dn=new xi,Hr=new xi,jt=new P,Xt=class n extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Du(e)?da:ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Dn.min,Hr.min),Dn.expandByPoint(jt),jt.addVectors(Dn.max,Hr.max),Dn.expandByPoint(jt)):(Dn.expandByPoint(Hr.min),Dn.expandByPoint(Hr.max))}Dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),jt.add(qs)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new P,l[F]=new P;let c=new P,h=new P,d=new P,u=new ce,p=new ce,g=new ce,E=new P,m=new P;function f(F,S,_){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),u.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[F].add(E),a[S].add(E),a[_].add(E),l[F].add(m),l[S].add(m),l[_].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let F=0,S=v.length;F<S;++F){let _=v[F],I=_.start,B=_.count;for(let z=I,X=I+B;z<X;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let A=new P,y=new P,D=new P,C=new P;function b(F){D.fromBufferAttribute(s,F),C.copy(D);let S=a[F];A.copy(S),A.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(C,S);let I=y.dot(l[F])<0?-1:1;o.setXYZW(F,A.x,A.y,A.z,I)}for(let F=0,S=v.length;F<S;++F){let _=v[F],I=_.start,B=_.count;for(let z=I,X=I+B;z<X;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let E=0,m=l.length;E<m;E++){a.isInterleavedBufferAttribute?p=l[E]*a.data.stride+a.offset:p=l[E]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dd=new xt,ds=new la,Io=new $i,Ld=new P,Do=new P,Lo=new P,Uo=new P,Ml=new P,No=new P,Ud=new P,Oo=new P,H=class extends Wt{constructor(e=new Xt,t=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Ml.fromBufferAttribute(d,e),o?No.addScaledVector(Ml,h):No.addScaledVector(Ml.sub(t),h))}t.add(No)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Io.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Io,Ld)===null||ds.origin.distanceToSquared(Ld)>(e.far-e.near)**2))&&(Dd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Dd),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,D=A;y<D;y+=3){let C=a.getX(y),b=a.getX(y+1),F=a.getX(y+2);s=Bo(this,f,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(a.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);s=Bo(this,o,e,i,c,h,d,v,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=u.length;g<E;g++){let m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,D=A;y<D;y+=3){let C=y,b=y+1,F=y+2;s=Bo(this,f,e,i,c,h,d,C,b,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){let v=m,A=m+1,y=m+2;s=Bo(this,o,e,i,c,h,d,v,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function K0(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Yi,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:n}}function Bo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Do),n.getVertexPosition(l,Lo),n.getVertexPosition(c,Uo);let h=K0(n,e,t,i,Do,Lo,Uo,Ud);if(h){let d=new P;Wi.getBarycoord(Ud,Do,Lo,Uo,d),s&&(h.uv=Wi.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Wi.getNormal(Do,Lo,Uo,u.normal),h.face=u,h.barycoord=d}return h}var Tn=class n extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function g(E,m,f,v,A,y,D,C,b,F,S){let _=y/b,I=D/F,B=y/2,z=D/2,X=C/2,j=b+1,Z=F+1,re=0,Y=0,ue=new P;for(let Me=0;Me<Z;Me++){let He=Me*I-z;for(let st=0;st<j;st++){let Ct=st*_-B;ue[E]=Ct*v,ue[m]=He*A,ue[f]=X,c.push(ue.x,ue.y,ue.z),ue[E]=0,ue[m]=0,ue[f]=C>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(st/b),d.push(1-Me/F),re+=1}}for(let Me=0;Me<F;Me++)for(let He=0;He<b;He++){let st=u+He+j*Me,Ct=u+He+j*(Me+1),$=u+(He+1)+j*(Me+1),oe=u+(He+1)+j*Me;l.push(st,Ct,oe),l.push(Ct,$,oe),Y+=6}a.addGroup(p,Y,S),p+=Y,u+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function vn(n){let e={};for(let t=0;t<n.length;t++){let i=hr(n[t]);for(let s in i)e[s]=i[s]}return e}function j0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var vr={clone:hr,merge:vn},ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Ci{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ep,this.fragmentShader=tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ua=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new P,Nd=new ce,Od=new ce,cn=class extends ua{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Od),t.subVectors(Od,Nd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,Zs=1,bc=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(Ys,Zs,e,t);s.layers=this.layers,this.add(s);let r=new cn(Ys,Zs,e,t);r.layers=this.layers,this.add(r);let o=new cn(Ys,Zs,e,t);o.layers=this.layers,this.add(o);let a=new cn(Ys,Zs,e,t);a.layers=this.layers,this.add(a);let l=new cn(Ys,Zs,e,t);l.layers=this.layers,this.add(l);let c=new cn(Ys,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fa=class extends Sn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wc=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:ai});r.uniforms.tEquirect.value=t;let o=new H(s,r),a=t.minFilter;return t.minFilter===vs&&(t.minFilter=ri),new bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Sl=new P,np=new P,ip=new Qe,Si=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sl.subVectors(i,t).cross(np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ip.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new $i,Ho=new P,Kr=class{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],E=s[10],m=s[11],f=s[12],v=s[13],A=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,m-p,y-f).normalize(),i[1].setComponents(l+r,u+c,m+p,y+f).normalize(),i[2].setComponents(l+o,u+h,m+g,y+v).normalize(),i[3].setComponents(l-o,u-h,m-g,y-v).normalize(),i[4].setComponents(l-a,u-d,m-E,y-A).normalize(),t===Ti)i[5].setComponents(l+a,u+d,m+E,y+A).normalize();else if(t===ia)i[5].setComponents(a,d,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ho.x=s.normal.x>0?e.max.x:e.min.x,Ho.y=s.normal.y>0?e.max.y:e.min.y,Ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.__noRaf(s)}return{start:function(){e!==!0&&t!==null&&(i=n.__noRaf(s),e=!0)},stop:function(){n.__noCaf(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sp(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],E=d[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let E=d[p];n.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _e=class n extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,p=[],g=[],E=[],m=[];for(let f=0;f<h;f++){let v=f*u-o;for(let A=0;A<c;A++){let y=A*d-r;g.push(y,-v,0),E.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let A=v+c*f,y=v+c*(f+1),D=v+1+c*(f+1),C=v+1+c*f;p.push(A,y,C),p.push(y,D,C)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(E,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
	
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
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
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
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
}`,d1=`#if DEPTH_PACKING == 3200
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
}`,u1=`#define DISTANCE
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
}`,f1=`#define DISTANCE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,v1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,S1=`#define MATCAP
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
}`,T1=`#define NORMAL
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
}`,b1=`#define NORMAL
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
}`,w1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,C1=`#define STANDARD
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
}`,F1=`#define TOON
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
}`,P1=`#define TOON
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
}`,I1=`uniform float size;
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
}`,D1=`uniform vec3 diffuse;
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
}`,U1=`uniform vec3 color;
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
}`,N1=`uniform float rotation;
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
}`,O1=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:dp,aomap_pars_fragment:up,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:Ep,iridescence_fragment:yp,bumpmap_pars_fragment:vp,clipping_planes_fragment:Ap,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:Tp,color_pars_fragment:bp,color_pars_vertex:wp,color_vertex:Rp,common:xp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Lp,colorspace_fragment:Up,colorspace_pars_fragment:Np,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:Hp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Qp,envmap_vertex:kp,fog_vertex:Gp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:$p,lights_toon_fragment:Kp,lights_toon_pars_fragment:jp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:dm,map_pars_fragment:um,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:Em,morphcolor_vertex:ym,morphnormal_vertex:vm,morphtarget_pars_vertex:Am,morphtarget_vertex:_m,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:Tm,normal_pars_vertex:bm,normal_vertex:wm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Pm,opaque_fragment:Im,packing:Dm,premultiplied_alpha_fragment:Lm,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:km,shadowmap_vertex:Gm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:$m,tonemapping_pars_fragment:Qm,transmission_fragment:Km,transmission_pars_fragment:jm,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:s1,background_frag:r1,backgroundCube_vert:o1,backgroundCube_frag:a1,cube_vert:l1,cube_frag:c1,depth_vert:h1,depth_frag:d1,distanceRGBA_vert:u1,distanceRGBA_frag:f1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:E1,meshbasic_vert:y1,meshbasic_frag:v1,meshlambert_vert:A1,meshlambert_frag:_1,meshmatcap_vert:M1,meshmatcap_frag:S1,meshnormal_vert:T1,meshnormal_frag:b1,meshphong_vert:w1,meshphong_frag:R1,meshphysical_vert:x1,meshphysical_frag:C1,meshtoon_vert:F1,meshtoon_frag:P1,points_vert:I1,points_frag:D1,shadow_vert:L1,shadow_frag:U1,sprite_vert:N1,sprite_frag:O1},he={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ii={basic:{uniforms:vn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:vn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ae(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:vn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:vn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:vn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ae(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:vn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:vn([he.points,he.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:vn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:vn([he.common,he.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:vn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:vn([he.sprite,he.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:vn([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:vn([he.lights,he.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ii.physical={uniforms:vn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var zo={r:0,b:0,g:0},fs=new ci,B1=new xt;function H1(n,e,t,i,s,r,o){let a=new ae(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(v){let A=v.isScene===!0?v.background:null;return A&&A.isTexture&&(A=(v.backgroundBlurriness>0?t:e).get(A)),A}function E(v){let A=!1,y=g(v);y===null?f(a,l):y&&y.isColor&&(f(y,1),A=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,A){let y=g(A);y&&(y.isCubeTexture||y.mapping===Ta)?(h===void 0&&(h=new H(new Tn(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:hr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fs.copy(A.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(fs)),h.material.toneMapped=pt.getTransfer(y.colorSpace)!==bt,(d!==y||u!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new H(new _e(2,2),new sn({name:"BackgroundMaterial",uniforms:hr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=pt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,A){v.getRGB(zo,Uu(n)),i.buffers.color.setClear(zo.r,zo.g,zo.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),l=A,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:E,addToRenderList:m}}function z1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(_,I,B,z,X){let j=!1,Z=d(z,B,I);r!==Z&&(r=Z,c(r.object)),j=p(_,z,B,X),j&&g(_,z,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(_,I,B,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function d(_,I,B){let z=B.wireframe===!0,X=i[_.id];X===void 0&&(X={},i[_.id]=X);let j=X[I.id];j===void 0&&(j={},X[I.id]=j);let Z=j[z];return Z===void 0&&(Z=u(l()),j[z]=Z),Z}function u(_){let I=[],B=[],z=[];for(let X=0;X<t;X++)I[X]=0,B[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:z,object:_,attributes:{},index:null}}function p(_,I,B,z){let X=r.attributes,j=I.attributes,Z=0,re=B.getAttributes();for(let Y in re)if(re[Y].location>=0){let Me=X[Y],He=j[Y];if(He===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(He=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(He=_.instanceColor)),Me===void 0||Me.attribute!==He||He&&Me.data!==He.data)return!0;Z++}return r.attributesNum!==Z||r.index!==z}function g(_,I,B,z){let X={},j=I.attributes,Z=0,re=B.getAttributes();for(let Y in re)if(re[Y].location>=0){let Me=j[Y];Me===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(Me=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(Me=_.instanceColor));let He={};He.attribute=Me,Me&&Me.data&&(He.data=Me.data),X[Y]=He,Z++}r.attributes=X,r.attributesNum=Z,r.index=z}function E(){let _=r.newAttributes;for(let I=0,B=_.length;I<B;I++)_[I]=0}function m(_){f(_,0)}function f(_,I){let B=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;B[_]=1,z[_]===0&&(n.enableVertexAttribArray(_),z[_]=1),X[_]!==I&&(n.vertexAttribDivisor(_,I),X[_]=I)}function v(){let _=r.newAttributes,I=r.enabledAttributes;for(let B=0,z=I.length;B<z;B++)I[B]!==_[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function A(_,I,B,z,X,j,Z){Z===!0?n.vertexAttribIPointer(_,I,B,X,j):n.vertexAttribPointer(_,I,B,z,X,j)}function y(_,I,B,z){E();let X=z.attributes,j=B.getAttributes(),Z=I.defaultAttributeValues;for(let re in j){let Y=j[re];if(Y.location>=0){let ue=X[re];if(ue===void 0&&(re==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),re==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),ue!==void 0){let Me=ue.normalized,He=ue.itemSize,st=e.get(ue);if(st===void 0)continue;let Ct=st.buffer,$=st.type,oe=st.bytesPerElement,De=$===n.INT||$===n.UNSIGNED_INT||ue.gpuType===ch;if(ue.isInterleavedBufferAttribute){let fe=ue.data,Ve=fe.stride,Ye=ue.offset;if(fe.isInstancedInterleavedBuffer){for(let rt=0;rt<Y.locationSize;rt++)f(Y.location+rt,fe.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let rt=0;rt<Y.locationSize;rt++)m(Y.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let rt=0;rt<Y.locationSize;rt++)A(Y.location+rt,He/Y.locationSize,$,Me,Ve*oe,(Ye+He/Y.locationSize*rt)*oe,De)}else{if(ue.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)f(Y.location+fe,ue.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let fe=0;fe<Y.locationSize;fe++)m(Y.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ct);for(let fe=0;fe<Y.locationSize;fe++)A(Y.location+fe,He/Y.locationSize,$,Me,He*oe,He/Y.locationSize*fe*oe,De)}}else if(Z!==void 0){let Me=Z[re];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(Y.location,Me);break;case 3:n.vertexAttrib3fv(Y.location,Me);break;case 4:n.vertexAttrib4fv(Y.location,Me);break;default:n.vertexAttrib1fv(Y.location,Me)}}}}v()}function D(){F();for(let _ in i){let I=i[_];for(let B in I){let z=I[B];for(let X in z)h(z[X].object),delete z[X];delete I[B]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let B in I){let z=I[B];for(let X in z)h(z[X].object),delete z[X];delete I[B]}delete i[_.id]}function b(_){for(let I in i){let B=i[I];if(B[_.id]===void 0)continue;let z=B[_.id];for(let X in z)h(z[X].object),delete z[X];delete B[_.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function k1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let E=0;E<d;E++)g+=h[E]*u[E];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Yn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let F=b===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==wi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==oi&&!F)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:D,maxSamples:C}}function V1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Si,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,A=v*4,y=f.clippingState||null;l.value=y,y=h(g,u,A,p);for(let D=0;D!==A;++D)y[D]=t[D];f.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){let E=d!==null?d.length:0,m=null;if(E!==0){if(m=l.value,g!==!0||m===null){let f=p+E*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,y=p;A!==E;++A,y+=4)o.copy(d[A]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function W1(n){let e=new WeakMap;function t(o,a){return a===Xl?o.mapping=or:a===ql&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xl||a===ql)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new wc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var dr=class extends ua{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tr=4,Bd=[.125,.215,.35,.446,.526,.582],Es=20,Tl=new dr,Hd=new ae,bl=null,wl=0,Rl=0,xl=!1,ms=(1+Math.sqrt(5))/2,Js=1/ms,zd=[new P(-ms,Js,0),new P(ms,Js,0),new P(-Js,0,ms),new P(Js,0,ms),new P(0,ms,-Js),new P(0,ms,Js),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],pa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,wl,Rl),this._renderer.xr.enabled=xl,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:wn,format:Yn,colorSpace:Ki,depthBuffer:!1},s=kd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X1(r)),this._blurMaterial=q1(r,e,t)}return s}_compileMaterial(e){let t=new H(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,i,s){let a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Hd),h.toneMapping=li,h.autoClear=!1;let p=new qe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new H(new Tn,p),E=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,E=!0):(p.color.copy(Hd),E=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let A=this._cubeSize;ko(s,v*A,f>2?A:0,A,A),h.setRenderTarget(s),E&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zd[(s-r-1)%zd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new H(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Es-1),E=r/g,m=isFinite(r)?1+Math.floor(h*E):Es;m>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);let f=[],v=0;for(let b=0;b<Es;++b){let F=b/E,S=Math.exp(-F*F/2);f.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-i;let y=this._sizeLods[s],D=3*y*(s>A-tr?s-A+tr:0),C=4*(this._cubeSize-y);ko(t,D,C,3*y,2*y),l.setRenderTarget(t),l.render(d,Tl)}};function X1(n){let e=[],t=[],i=[],s=n,r=n-tr+1+Bd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-tr?l=Bd[o-n+tr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,E=3,m=2,f=1,v=new Float32Array(E*g*p),A=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,F=C>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];v.set(S,E*g*C),A.set(u,m*g*C);let _=[C,C,C,C,C,C];y.set(_,f*g*C)}let D=new Xt;D.setAttribute("position",new tn(v,E)),D.setAttribute("uv",new tn(A,m)),D.setAttribute("faceIndex",new tn(y,f)),e.push(D),s>tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kd(n,e,t){let i=new nn(n,e,t);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function q1(n,e,t){let i=new Float32Array(Es),s=new P(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Gd(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Vd(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function Y1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xl||l===ql,h=l===or||l===ar;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new pa(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new pa(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Z1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function J1(n,e,t,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let E=u.morphAttributes[g];for(let m=0,f=E.length;m<f;m++)e.remove(E[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let E=p[g];for(let m=0,f=E.length;m<f;m++)e.update(E[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,g=d.attributes.position,E=0;if(p!==null){let v=p.array;E=p.version;for(let A=0,y=v.length;A<y;A+=3){let D=v[A+0],C=v[A+1],b=v[A+2];u.push(D,C,C,b,b,D)}}else if(g!==void 0){let v=g.array;E=g.version;for(let A=0,y=v.length/3-1;A<y;A+=3){let D=A+0,C=A+1,b=A+2;u.push(D,C,C,b,b,D)}}else return;let m=new(Du(u)?da:ha)(u,1);m.version=E;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function $1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,E){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],E[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,E,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*E[v];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Q1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function K1(n,e,t){let i=new WeakMap,s=new Rt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;p===!0&&(A=1),g===!0&&(A=2),E===!0&&(A=3);let y=a.attributes.position.count*A,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*D*4*d),b=new aa(C,y,D,d);b.type=oi,b.needsUpdate=!0;let F=A*4;for(let _=0;_<d;_++){let I=m[_],B=f[_],z=v[_],X=y*D*4*_;for(let j=0;j<I.count;j++){let Z=j*F;p===!0&&(s.fromBufferAttribute(I,j),C[X+Z+0]=s.x,C[X+Z+1]=s.y,C[X+Z+2]=s.z,C[X+Z+3]=0),g===!0&&(s.fromBufferAttribute(B,j),C[X+Z+4]=s.x,C[X+Z+5]=s.y,C[X+Z+6]=s.z,C[X+Z+7]=0),E===!0&&(s.fromBufferAttribute(z,j),C[X+Z+8]=s.x,C[X+Z+9]=s.y,C[X+Z+10]=s.z,C[X+Z+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:b,size:new ce(y,D)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function j1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ur=class extends Sn{constructor(e,t,i,s,r,o,a,l,c,h=nr){if(h!==nr&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===nr&&(i=Ri),i===void 0&&h===cr&&(i=lr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ou=new Sn,Wd=new ur(1,1),Bu=new aa,Hu=new Tc,zu=new fa,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function Ar(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wa(n,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function e2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function n2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function i2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function s2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Qt(t,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),Kt(t,i)}}function r2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Qt(t,i))return;Zd.set(i),n.uniformMatrix3fv(this.addr,!1,Zd),Kt(t,i)}}function o2(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Qt(t,i))return;Yd.set(i),n.uniformMatrix4fv(this.addr,!1,Yd),Kt(t,i)}}function a2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function c2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function h2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function d2(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function f2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function p2(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function m2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Wd.compareFunction=Iu,r=Wd):r=Ou,t.setTexture2D(e||r,s)}function g2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hu,s)}function E2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||zu,s)}function y2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Bu,s)}function v2(n){switch(n){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return s2;case 35675:return r2;case 35676:return o2;case 5124:case 35670:return a2;case 35667:case 35671:return l2;case 35668:case 35672:return c2;case 35669:case 35673:return h2;case 5125:return d2;case 36294:return u2;case 36295:return f2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return y2}}function A2(n,e){n.uniform1fv(this.addr,e)}function _2(n,e){let t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function M2(n,e){let t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function S2(n,e){let t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function T2(n,e){let t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function b2(n,e){let t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function w2(n,e){let t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function R2(n,e){n.uniform1iv(this.addr,e)}function x2(n,e){n.uniform2iv(this.addr,e)}function C2(n,e){n.uniform3iv(this.addr,e)}function F2(n,e){n.uniform4iv(this.addr,e)}function P2(n,e){n.uniform1uiv(this.addr,e)}function I2(n,e){n.uniform2uiv(this.addr,e)}function D2(n,e){n.uniform3uiv(this.addr,e)}function L2(n,e){n.uniform4uiv(this.addr,e)}function U2(n,e,t){let i=this.cache,s=e.length,r=wa(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ou,r[o])}function N2(n,e,t){let i=this.cache,s=e.length,r=wa(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hu,r[o])}function O2(n,e,t){let i=this.cache,s=e.length,r=wa(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zu,r[o])}function B2(n,e,t){let i=this.cache,s=e.length,r=wa(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bu,r[o])}function H2(n){switch(n){case 5126:return A2;case 35664:return _2;case 35665:return M2;case 35666:return S2;case 35674:return T2;case 35675:return b2;case 35676:return w2;case 5124:case 35670:return R2;case 35667:case 35671:return x2;case 35668:case 35672:return C2;case 35669:case 35673:return F2;case 5125:return P2;case 36294:return I2;case 36295:return D2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return N2;case 35680:case 36300:case 36308:case 36293:return O2;case 36289:case 36303:case 36311:case 36292:return B2}}var Rc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v2(t.type)}},xc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H2(t.type)}},Cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function $d(n,e){n.seq.push(e),n.map[e.id]=e}function z2(n,e,t){let i=n.name,s=i.length;for(Cl.lastIndex=0;;){let r=Cl.exec(i),o=Cl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$d(t,c===void 0?new Rc(a,n,e):new xc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Cc(a),$d(t,d)),t=d}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);z2(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Qd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var k2=37297,G2=0;function V2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Kd=new Qe;function W2(n){pt._getMatrix(Kd,pt.workingColorSpace,n);let e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+V2(n.getShaderSource(e),o)}else return s}function X2(n,e){let t=W2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q2(n,e){let t;switch(e){case v0:t="Linear";break;case A0:t="Reinhard";break;case _0:t="Cineon";break;case M0:t="ACESFilmic";break;case T0:t="AgX";break;case b0:t="Neutral";break;case S0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Go=new P;function Y2(){pt.getLuminanceCoefficients(Go);let n=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function J2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function eu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(Q2,j2)}var K2=new Map;function j2(n,e){let t=et[e];if(t===void 0){let i=K2.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fc(t)}var eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(n){return n.replace(eg,tg)}function tg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function ng(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function ig(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Au:e="ENVMAP_BLENDING_MULTIPLY";break;case E0:e="ENVMAP_BLENDING_MIX";break;case y0:e="ENVMAP_BLENDING_ADD";break}return e}function og(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ag(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ng(t),c=ig(t),h=sg(t),d=rg(t),u=og(t),p=Z2(t),g=J2(r),E=s.createProgram(),m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),f.length>0&&(f+=`
`)):(m=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),f=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?et.tonemapping_pars_fragment:"",t.toneMapping!==li?q2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,X2("linearToOutputTexel",t.outputColorSpace),Y2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Fc(o),o=eu(o,t),o=tu(o,t),a=Fc(a),a=eu(a,t),a=tu(a,t),o=nu(o),a=nu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=v+m+o,y=v+f+a,D=Qd(s,s.VERTEX_SHADER,A),C=Qd(s,s.FRAGMENT_SHADER,y);s.attachShader(E,D),s.attachShader(E,C),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function b(I){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(E).trim(),z=s.getShaderInfoLog(D).trim(),X=s.getShaderInfoLog(C).trim(),j=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,C);else{let re=jd(s,D,"vertex"),Y=jd(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+re+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||X==="")&&(Z=!1);Z&&(I.diagnostics={runnable:j,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(D),s.deleteShader(C),F=new sr(s,E),S=$2(s,E)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(E,k2)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=C,this}var lg=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ic(e),t.set(e,i)),i}},Ic=class{constructor(e){this.id=lg++,this.code=e,this.usedTimes=0}};function cg(n,e,t,i,s,r,o){let a=new ca,l=new Pc,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,_,I,B,z){let X=B.fog,j=z.geometry,Z=S.isMeshStandardMaterial?B.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),Y=re&&re.mapping===Ta?re.image.height:null,ue=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,He=Me!==void 0?Me.length:0,st=0;j.morphAttributes.position!==void 0&&(st=1),j.morphAttributes.normal!==void 0&&(st=2),j.morphAttributes.color!==void 0&&(st=3);let Ct,$,oe,De;if(ue){let Mt=ii[ue];Ct=Mt.vertexShader,$=Mt.fragmentShader}else Ct=S.vertexShader,$=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),De=l.getFragmentShaderID(S);let fe=n.getRenderTarget(),Ve=n.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,rt=z.isBatchedMesh===!0,zt=!!S.map,ut=!!S.matcap,Vt=!!re,O=!!S.aoMap,On=!!S.lightMap,lt=!!S.bumpMap,ct=!!S.normalMap,ke=!!S.displacementMap,Dt=!!S.emissiveMap,ze=!!S.metalnessMap,x=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,Q=S.dispersion>0,te=S.iridescence>0,J=S.sheen>0,Ue=S.transmission>0,pe=M&&!!S.anisotropyMap,Se=k&&!!S.clearcoatMap,ft=k&&!!S.clearcoatNormalMap,ie=k&&!!S.clearcoatRoughnessMap,Te=te&&!!S.iridescenceMap,Ge=te&&!!S.iridescenceThicknessMap,We=J&&!!S.sheenColorMap,be=J&&!!S.sheenRoughnessMap,ht=!!S.specularMap,je=!!S.specularColorMap,Pt=!!S.specularIntensityMap,L=Ue&&!!S.transmissionMap,de=Ue&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,ye=S.alphaTest>0,me=!!S.alphaHash,Je=!!S.extensions,Gt=li;S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let un={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Ct,fragmentShader:$,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:rt,batchingColor:rt&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:ut,envMap:Vt,envMapMode:Vt&&re.mapping,envMapCubeUVHeight:Y,aoMap:O,lightMap:On,bumpMap:lt,normalMap:ct,displacementMap:u&&ke,emissiveMap:Dt,normalMapObjectSpace:ct&&S.normalMapType===x0,normalMapTangentSpace:ct&&S.normalMapType===Pu,metalnessMap:ze,roughnessMap:x,anisotropy:M,anisotropyMap:pe,clearcoat:k,clearcoatMap:Se,clearcoatNormalMap:ft,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:te,iridescenceMap:Te,iridescenceThicknessMap:Ge,sheen:J,sheenColorMap:We,sheenRoughnessMap:be,specularMap:ht,specularColorMap:je,specularIntensityMap:Pt,transmission:Ue,transmissionMap:L,thicknessMap:de,gradientMap:q,opaque:S.transparent===!1&&S.blending===Xi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ye,alphaHash:me,combine:S.combine,mapUv:zt&&E(S.map.channel),aoMapUv:O&&E(S.aoMap.channel),lightMapUv:On&&E(S.lightMap.channel),bumpMapUv:lt&&E(S.bumpMap.channel),normalMapUv:ct&&E(S.normalMap.channel),displacementMapUv:ke&&E(S.displacementMap.channel),emissiveMapUv:Dt&&E(S.emissiveMap.channel),metalnessMapUv:ze&&E(S.metalnessMap.channel),roughnessMapUv:x&&E(S.roughnessMap.channel),anisotropyMapUv:pe&&E(S.anisotropyMap.channel),clearcoatMapUv:Se&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:ft&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&E(S.sheenRoughnessMap.channel),specularMapUv:ht&&E(S.specularMap.channel),specularColorMapUv:je&&E(S.specularColorMap.channel),specularIntensityMapUv:Pt&&E(S.specularIntensityMap.channel),transmissionMapUv:L&&E(S.transmissionMap.channel),thicknessMapUv:de&&E(S.thicknessMap.channel),alphaMapUv:K&&E(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ct||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(zt||K),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ve,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:st,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===St,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Je&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&S.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return un.vertexUv1s=c.has(1),un.vertexUv2s=c.has(2),un.vertexUv3s=c.has(3),c.clear(),un}function f(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)_.push(I),_.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(_,S),A(_,S),_.push(n.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function v(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function A(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let _=g[S.type],I;if(_){let B=ii[_];I=vr.clone(B.uniforms)}else I=S.uniforms;return I}function D(S,_){let I;for(let B=0,z=h.length;B<z;B++){let X=h[B];if(X.cacheKey===_){I=X,++I.usedTimes;break}}return I===void 0&&(I=new ag(n,_,S,r),h.push(I)),I}function C(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function b(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:D,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:F}}function hg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function su(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ru(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,p,g,E,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:E,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=E,f.group=m),e++,f}function a(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,g,E,m){let f=o(d,u,p,g,E,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||dg),i.length>1&&i.sort(u||su),s.length>1&&s.sort(u||su)}function h(){for(let d=e,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ug(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ru,n.set(i,[o])):s>=r.length?(o=new ru,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ae};break;case"SpotLight":t={position:new P,direction:new P,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function pg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var mg=0;function gg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Eg(n){let e=new fg,t=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new xt,o=new xt;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,v=0,A=0,y=0,D=0,C=0,b=0;c.sort(gg);for(let S=0,_=c.length;S<_;S++){let I=c[S],B=I.color,z=I.intensity,X=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*z,d+=B.g*z,u+=B.b*z;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],z);b++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,Y=t.get(I);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=Z,p++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(B).multiplyScalar(z),Z.distance=X,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[E]=Z;let re=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,re.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[E]=re.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=j,y++}E++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(B).multiplyScalar(z),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Z,m++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let re=I.shadow,Y=t.get(I);Y.shadowIntensity=re.intensity,Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,Y.shadowCameraNear=re.camera.near,Y.shadowCameraFar=re.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,A++}i.point[g]=Z,g++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(z),Z.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[f]=Z,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==E||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==v||F.numPointShadows!==A||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=p,F.pointLength=g,F.spotLength=E,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=v,F.numPointShadows=A,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=b,i.version=mg++)}function l(c,h){let d=0,u=0,p=0,g=0,E=0,m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let A=c[f];if(A.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(A.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){let y=i.hemi[E];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:a,setupView:l,state:i}}function ou(n){let e=new Eg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yg(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ou(n),e.set(s,[a])):r>=o.length?(a=new ou(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Qi=class extends Ci{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dc=class extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function _g(n,e,t){let i=new Kr,s=new ce,r=new ce,o=new Rt,a=new Qi({depthPacking:yr}),l=new Dc,c={},h=t.maxTextureSize,d={[Yi]:en,[en]:Yi,[St]:St},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:vg,fragmentShader:Ag}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new H(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let f=this.type;this.render=function(C,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),_=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ai),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=f!==Mi&&this.type===Mi,X=f===Mi&&this.type!==Mi;for(let j=0,Z=C.length;j<Z;j++){let re=C[j],Y=re.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ue=Y.getFrameExtents();if(s.multiply(ue),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||X===!0){let He=this.type!==Mi?{minFilter:Ln,magFilter:Ln}:{};Y.map!==null&&Y.map.dispose(),Y.map=new nn(s.x,s.y,He),Y.map.texture.name=re.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let Me=Y.getViewportCount();for(let He=0;He<Me;He++){let st=Y.getViewport(He);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),B.viewport(o),Y.updateMatrices(re,He),i=Y.getFrustum(),y(b,F,Y.camera,re,this.type)}Y.isPointLightShadow!==!0&&this.type===Mi&&v(Y,F),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,_,I)};function v(C,b){let F=e.update(E);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new nn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,F,u,E,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,F,p,E,null)}function A(C,b,F,S){let _=null,I=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)_=I;else if(_=F.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let B=_.uuid,z=b.uuid,X=c[B];X===void 0&&(X={},c[B]=X);let j=X[z];j===void 0&&(j=_.clone(),X[z]=j,b.addEventListener("dispose",D)),_=j}if(_.visible=b.visible,_.wireframe=b.wireframe,S===Mi?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:d[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=n.properties.get(_);B.light=F}return _}function y(C,b,F,S,_){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let z=e.update(C),X=C.material;if(Array.isArray(X)){let j=z.groups;for(let Z=0,re=j.length;Z<re;Z++){let Y=j[Z],ue=X[Y.materialIndex];if(ue&&ue.visible){let Me=A(C,ue,S,_);C.onBeforeShadow(n,C,b,F,z,Me,Y),n.renderBufferDirect(F,null,z,Me,C,Y),C.onAfterShadow(n,C,b,F,z,Me,Y)}}}else if(X.visible){let j=A(C,X,S,_);C.onBeforeShadow(n,C,b,F,z,j,null),n.renderBufferDirect(F,null,z,j,C,null),C.onAfterShadow(n,C,b,F,z,j,null)}}let B=C.children;for(let z=0,X=B.length;z<X;z++)y(B[z],b,F,S,_)}function D(C){C.target.removeEventListener("dispose",D);for(let F in c){let S=c[F],_=C.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var Mg={[Bl]:Hl,[zl]:Vl,[kl]:Wl,[rr]:Gl,[Hl]:Bl,[Vl]:zl,[Wl]:kl,[Gl]:rr};function Sg(n,e){function t(){let L=!1,de=new Rt,q=null,K=new Rt(0,0,0,0);return{setMask:function(ye){q!==ye&&!L&&(n.colorMask(ye,ye,ye,ye),q=ye)},setLocked:function(ye){L=ye},setClear:function(ye,me,Je,Gt,un){un===!0&&(ye*=Gt,me*=Gt,Je*=Gt),de.set(ye,me,Je,Gt),K.equals(de)===!1&&(n.clearColor(ye,me,Je,Gt),K.copy(de))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,q=null,K=null,ye=null;return{setReversed:function(me){if(de!==me){let Je=e.get("EXT_clip_control");de?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);let Gt=ye;ye=null,this.setClear(Gt)}de=me},getReversed:function(){return de},setTest:function(me){me?fe(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(me){q!==me&&!L&&(n.depthMask(me),q=me)},setFunc:function(me){if(de&&(me=Mg[me]),K!==me){switch(me){case Bl:n.depthFunc(n.NEVER);break;case Hl:n.depthFunc(n.ALWAYS);break;case zl:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case kl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Vl:n.depthFunc(n.GREATER);break;case Wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=me}},setLocked:function(me){L=me},setClear:function(me){ye!==me&&(de&&(me=1-me),n.clearDepth(me),ye=me)},reset:function(){L=!1,q=null,K=null,ye=null,de=!1}}}function s(){let L=!1,de=null,q=null,K=null,ye=null,me=null,Je=null,Gt=null,un=null;return{setTest:function(Mt){L||(Mt?fe(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(Mt){de!==Mt&&!L&&(n.stencilMask(Mt),de=Mt)},setFunc:function(Mt,Gn,mi){(q!==Mt||K!==Gn||ye!==mi)&&(n.stencilFunc(Mt,Gn,mi),q=Mt,K=Gn,ye=mi)},setOp:function(Mt,Gn,mi){(me!==Mt||Je!==Gn||Gt!==mi)&&(n.stencilOp(Mt,Gn,mi),me=Mt,Je=Gn,Gt=mi)},setLocked:function(Mt){L=Mt},setClear:function(Mt){un!==Mt&&(n.clearStencil(Mt),un=Mt)},reset:function(){L=!1,de=null,q=null,K=null,ye=null,me=null,Je=null,Gt=null,un=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,A=null,y=null,D=null,C=null,b=new ae(0,0,0),F=0,S=!1,_=null,I=null,B=null,z=null,X=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,re=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=re>=2);let ue=null,Me={},He=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),Ct=new Rt().fromArray(He),$=new Rt().fromArray(st);function oe(L,de,q,K){let ye=new Uint8Array(4),me=n.createTexture();n.bindTexture(L,me),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<q;Je++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(de+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return me}let De={};De[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(rr),lt(!1),ct(hd),fe(n.CULL_FACE),O(ai);function fe(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ve(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ye(L,de){return d[L]!==de?(n.bindFramebuffer(L,de),d[L]=de,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=de),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=de),!0):!1}function rt(L,de){let q=p,K=!1;if(L){q=u.get(de),q===void 0&&(q=[],u.set(de,q));let ye=L.textures;if(q.length!==ye.length||q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Je=ye.length;me<Je;me++)q[me]=n.COLOR_ATTACHMENT0+me;q.length=ye.length,K=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,K=!0);K&&n.drawBuffers(q)}function zt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let ut={[gs]:n.FUNC_ADD,[e0]:n.FUNC_SUBTRACT,[t0]:n.FUNC_REVERSE_SUBTRACT};ut[n0]=n.MIN,ut[i0]=n.MAX;let Vt={[s0]:n.ZERO,[r0]:n.ONE,[o0]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[u0]:n.SRC_ALPHA_SATURATE,[h0]:n.DST_COLOR,[l0]:n.DST_ALPHA,[a0]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[d0]:n.ONE_MINUS_DST_COLOR,[c0]:n.ONE_MINUS_DST_ALPHA,[f0]:n.CONSTANT_COLOR,[p0]:n.ONE_MINUS_CONSTANT_COLOR,[m0]:n.CONSTANT_ALPHA,[g0]:n.ONE_MINUS_CONSTANT_ALPHA};function O(L,de,q,K,ye,me,Je,Gt,un,Mt){if(L===ai){E===!0&&(Ve(n.BLEND),E=!1);return}if(E===!1&&(fe(n.BLEND),E=!0),L!==jf){if(L!==m||Mt!==S){if((f!==gs||y!==gs)&&(n.blendEquation(n.FUNC_ADD),f=gs,y=gs),Mt)switch(L){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mn:n.blendFunc(n.ONE,n.ONE);break;case dd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,A=null,D=null,C=null,b.set(0,0,0),F=0,m=L,S=Mt}return}ye=ye||de,me=me||q,Je=Je||K,(de!==f||ye!==y)&&(n.blendEquationSeparate(ut[de],ut[ye]),f=de,y=ye),(q!==v||K!==A||me!==D||Je!==C)&&(n.blendFuncSeparate(Vt[q],Vt[K],Vt[me],Vt[Je]),v=q,A=K,D=me,C=Je),(Gt.equals(b)===!1||un!==F)&&(n.blendColor(Gt.r,Gt.g,Gt.b,un),b.copy(Gt),F=un),m=L,S=!1}function On(L,de){L.side===St?Ve(n.CULL_FACE):fe(n.CULL_FACE);let q=L.side===en;de&&(q=!q),lt(q),L.blending===Xi&&L.transparent===!1?O(ai):O(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Dt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(L){_!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),_=L)}function ct(L){L!==Qf?(fe(n.CULL_FACE),L!==I&&(L===hd?n.cullFace(n.BACK):L===Kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),I=L}function ke(L){L!==B&&(Z&&n.lineWidth(L),B=L)}function Dt(L,de,q){L?(fe(n.POLYGON_OFFSET_FILL),(z!==de||X!==q)&&(n.polygonOffset(de,q),z=de,X=q)):Ve(n.POLYGON_OFFSET_FILL)}function ze(L){L?fe(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function x(L){L===void 0&&(L=n.TEXTURE0+j-1),ue!==L&&(n.activeTexture(L),ue=L)}function M(L,de,q){q===void 0&&(ue===null?q=n.TEXTURE0+j-1:q=ue);let K=Me[q];K===void 0&&(K={type:void 0,texture:void 0},Me[q]=K),(K.type!==L||K.texture!==de)&&(ue!==q&&(n.activeTexture(q),ue=q),n.bindTexture(L,de||De[L]),K.type=L,K.texture=de)}function k(){let L=Me[ue];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(L){Ct.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ct.copy(L))}function be(L){$.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function ht(L,de){let q=c.get(de);q===void 0&&(q=new WeakMap,c.set(de,q));let K=q.get(L);K===void 0&&(K=n.getUniformBlockIndex(de,L.name),q.set(L,K))}function je(L,de){let K=c.get(de).get(L);l.get(de)!==K&&(n.uniformBlockBinding(de,K,L.__bindingPointIndex),l.set(de,K))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,Me={},d={},u=new WeakMap,p=[],g=null,E=!1,m=null,f=null,v=null,A=null,y=null,D=null,C=null,b=new ae(0,0,0),F=0,S=!1,_=null,I=null,B=null,z=null,X=null,Ct.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Ve,bindFramebuffer:Ye,drawBuffers:rt,useProgram:zt,setBlending:O,setMaterial:On,setFlipSided:lt,setCullFace:ct,setLineWidth:ke,setPolygonOffset:Dt,setScissorTest:ze,activeTexture:x,bindTexture:M,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:Te,texImage3D:Ge,updateUBOMapping:ht,uniformBlockBinding:je,texStorage2D:ft,texStorage3D:ie,texSubImage2D:J,texSubImage3D:Ue,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:We,viewport:be,reset:Pt}}function au(n,e,t,i){let s=Tg(i);switch(t){case bu:return n*e;case Ru:return n*e;case xu:return n*e*2;case uh:return n*e/s.components*s.byteLength;case fh:return n*e/s.components*s.byteLength;case Cu:return n*e*2/s.components*s.byteLength;case ph:return n*e*2/s.components*s.byteLength;case wu:return n*e*3/s.components*s.byteLength;case Yn:return n*e*4/s.components*s.byteLength;case mh:return n*e*4/s.components*s.byteLength;case Qo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jo:case ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case Ql:return Math.max(n,16)*Math.max(e,8)/4;case Zl:case $l:return Math.max(n,8)*Math.max(e,8)/2;case Kl:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ta:case mc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fu:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yc:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tg(n){switch(n){case wi:case Mu:return{byteLength:1,components:1};case Qr:case Su:case wn:return{byteLength:2,components:1};case hh:case dh:return{byteLength:2,components:4};case Ri:case ch:case oi:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function bg(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return p?new OffscreenCanvas(x,M):ra("canvas")}function E(x,M,k){let Q=1,te=ze(x);if((te.width>k||te.height>k)&&(Q=k/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let J=Math.floor(Q*te.width),Ue=Math.floor(Q*te.height);d===void 0&&(d=g(J,Ue));let pe=M?g(J,Ue):d;return pe.width=J,pe.height=Ue,pe.getContext("2d").drawImage(x,0,0,J,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ue+")."),pe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function v(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,M,k,Q,te=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let J=M;if(M===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),M===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),M===n.RGBA){let Ue=te?ba:pt.getTransfer(Q);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=Ue===bt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(x,M){let k;return x?M===null||M===Ri||M===lr?k=n.DEPTH24_STENCIL8:M===oi?k=n.DEPTH32F_STENCIL8:M===Qr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===lr?k=n.DEPTH_COMPONENT24:M===oi?k=n.DEPTH_COMPONENT32F:M===Qr&&(k=n.DEPTH_COMPONENT16),k}function D(x,M){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ln&&x.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function C(x){let M=x.target;M.removeEventListener("dispose",C),F(M),M.isVideoTexture&&h.delete(M)}function b(x){let M=x.target;M.removeEventListener("dispose",b),_(M)}function F(x){let M=i.get(x);if(M.__webglInit===void 0)return;let k=x.source,Q=u.get(k);if(Q){let te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(x),Object.keys(Q).length===0&&u.delete(k)}i.remove(x)}function S(x){let M=i.get(x);n.deleteTexture(M.__webglTexture);let k=x.source,Q=u.get(k);delete Q[M.__cacheKey],o.memory.textures--}function _(x){let M=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=x.textures;for(let Q=0,te=k.length;Q<te;Q++){let J=i.get(k[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(x)}let I=0;function B(){I=0}function z(){let x=I;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),I+=1,x}function X(x){let M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function j(x,M){let k=i.get(x);if(x.isVideoTexture&&ke(x),x.isRenderTargetTexture===!1&&x.version>0&&k.__version!==x.version){let Q=x.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,x,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Z(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){$(k,x,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function re(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){$(k,x,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function Y(x,M){let k=i.get(x);if(x.version>0&&k.__version!==x.version){oe(k,x,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let ue={[$t]:n.REPEAT,[ys]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},Me={[Ln]:n.NEAREST,[w0]:n.NEAREST_MIPMAP_NEAREST,[Mo]:n.NEAREST_MIPMAP_LINEAR,[ri]:n.LINEAR,[el]:n.LINEAR_MIPMAP_NEAREST,[vs]:n.LINEAR_MIPMAP_LINEAR},He={[C0]:n.NEVER,[U0]:n.ALWAYS,[F0]:n.LESS,[Iu]:n.LEQUAL,[P0]:n.EQUAL,[L0]:n.GEQUAL,[I0]:n.GREATER,[D0]:n.NOTEQUAL};function st(x,M){if(M.type===oi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===el||M.magFilter===Mo||M.magFilter===vs||M.minFilter===ri||M.minFilter===el||M.minFilter===Mo||M.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ue[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ue[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ue[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Me[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,He[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==Mo&&M.minFilter!==vs||M.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ct(x,M){let k=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",C));let Q=M.source,te=u.get(Q);te===void 0&&(te={},u.set(Q,te));let J=X(M);if(J!==x.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[J].usedTimes++;let Ue=te[x.__cacheKey];Ue!==void 0&&(te[x.__cacheKey].usedTimes--,Ue.usedTimes===0&&S(M)),x.__cacheKey=J,x.__webglTexture=te[J].texture}return k}function $(x,M,k){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);let te=Ct(x,M),J=M.source;t.bindTexture(Q,x.__webglTexture,n.TEXTURE0+k);let Ue=i.get(J);if(J.version!==Ue.__version||te===!0){t.activeTexture(n.TEXTURE0+k);let pe=pt.getPrimaries(pt.workingColorSpace),Se=M.colorSpace===Vi?null:pt.getPrimaries(M.colorSpace),ft=M.colorSpace===Vi||pe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let ie=E(M.image,!1,s.maxTextureSize);ie=Dt(M,ie);let Te=r.convert(M.format,M.colorSpace),Ge=r.convert(M.type),We=A(M.internalFormat,Te,Ge,M.colorSpace,M.isVideoTexture);st(Q,M);let be,ht=M.mipmaps,je=M.isVideoTexture!==!0,Pt=Ue.__version===void 0||te===!0,L=J.dataReady,de=D(M,ie);if(M.isDepthTexture)We=y(M.format===cr,M.type),Pt&&(je?t.texStorage2D(n.TEXTURE_2D,1,We,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,We,ie.width,ie.height,0,Te,Ge,null));else if(M.isDataTexture)if(ht.length>0){je&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,We,ht[0].width,ht[0].height);for(let q=0,K=ht.length;q<K;q++)be=ht[q],je?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,Te,Ge,be.data):t.texImage2D(n.TEXTURE_2D,q,We,be.width,be.height,0,Te,Ge,be.data);M.generateMipmaps=!1}else je?(Pt&&t.texStorage2D(n.TEXTURE_2D,de,We,ie.width,ie.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Te,Ge,ie.data)):t.texImage2D(n.TEXTURE_2D,0,We,ie.width,ie.height,0,Te,Ge,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,We,ht[0].width,ht[0].height,ie.depth);for(let q=0,K=ht.length;q<K;q++)if(be=ht[q],M.format!==Yn)if(Te!==null)if(je){if(L)if(M.layerUpdates.size>0){let ye=au(be.width,be.height,M.format,M.type);for(let me of M.layerUpdates){let Je=be.data.subarray(me*ye/be.data.BYTES_PER_ELEMENT,(me+1)*ye/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,me,be.width,be.height,1,Te,Je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,ie.depth,Te,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,We,be.width,be.height,ie.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,be.width,be.height,ie.depth,Te,Ge,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,We,be.width,be.height,ie.depth,0,Te,Ge,be.data)}else{je&&Pt&&t.texStorage2D(n.TEXTURE_2D,de,We,ht[0].width,ht[0].height);for(let q=0,K=ht.length;q<K;q++)be=ht[q],M.format!==Yn?Te!==null?je?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(n.TEXTURE_2D,q,We,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,be.width,be.height,Te,Ge,be.data):t.texImage2D(n.TEXTURE_2D,q,We,be.width,be.height,0,Te,Ge,be.data)}else if(M.isDataArrayTexture)if(je){if(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,We,ie.width,ie.height,ie.depth),L)if(M.layerUpdates.size>0){let q=au(ie.width,ie.height,M.format,M.type);for(let K of M.layerUpdates){let ye=ie.data.subarray(K*q/ie.data.BYTES_PER_ELEMENT,(K+1)*q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,Te,Ge,ye)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Te,Ge,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,ie.width,ie.height,ie.depth,0,Te,Ge,ie.data);else if(M.isData3DTexture)je?(Pt&&t.texStorage3D(n.TEXTURE_3D,de,We,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Te,Ge,ie.data)):t.texImage3D(n.TEXTURE_3D,0,We,ie.width,ie.height,ie.depth,0,Te,Ge,ie.data);else if(M.isFramebufferTexture){if(Pt)if(je)t.texStorage2D(n.TEXTURE_2D,de,We,ie.width,ie.height);else{let q=ie.width,K=ie.height;for(let ye=0;ye<de;ye++)t.texImage2D(n.TEXTURE_2D,ye,We,q,K,0,Te,Ge,null),q>>=1,K>>=1}}else if(ht.length>0){if(je&&Pt){let q=ze(ht[0]);t.texStorage2D(n.TEXTURE_2D,de,We,q.width,q.height)}for(let q=0,K=ht.length;q<K;q++)be=ht[q],je?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te,Ge,be):t.texImage2D(n.TEXTURE_2D,q,We,Te,Ge,be);M.generateMipmaps=!1}else if(je){if(Pt){let q=ze(ie);t.texStorage2D(n.TEXTURE_2D,de,We,q.width,q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ge,ie)}else t.texImage2D(n.TEXTURE_2D,0,We,Te,Ge,ie);m(M)&&f(Q),Ue.__version=J.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function oe(x,M,k){if(M.image.length!==6)return;let Q=Ct(x,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+k);let J=i.get(te);if(te.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);let Ue=pt.getPrimaries(pt.workingColorSpace),pe=M.colorSpace===Vi?null:pt.getPrimaries(M.colorSpace),Se=M.colorSpace===Vi||Ue===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ft=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let K=0;K<6;K++)!ft&&!ie?Te[K]=E(M.image[K],!0,s.maxCubemapSize):Te[K]=ie?M.image[K].image:M.image[K],Te[K]=Dt(M,Te[K]);let Ge=Te[0],We=r.convert(M.format,M.colorSpace),be=r.convert(M.type),ht=A(M.internalFormat,We,be,M.colorSpace),je=M.isVideoTexture!==!0,Pt=J.__version===void 0||Q===!0,L=te.dataReady,de=D(M,Ge);st(n.TEXTURE_CUBE_MAP,M);let q;if(ft){je&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ht,Ge.width,Ge.height);for(let K=0;K<6;K++){q=Te[K].mipmaps;for(let ye=0;ye<q.length;ye++){let me=q[ye];M.format!==Yn?We!==null?je?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,me.width,me.height,We,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,ht,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,me.width,me.height,We,be,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,ht,me.width,me.height,0,We,be,me.data)}}}else{if(q=M.mipmaps,je&&Pt){q.length>0&&de++;let K=ze(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,ht,K.width,K.height)}for(let K=0;K<6;K++)if(ie){je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te[K].width,Te[K].height,We,be,Te[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ht,Te[K].width,Te[K].height,0,We,be,Te[K].data);for(let ye=0;ye<q.length;ye++){let Je=q[ye].image[K].image;je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Je.width,Je.height,We,be,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,ht,Je.width,Je.height,0,We,be,Je.data)}}else{je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,We,be,Te[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ht,We,be,Te[K]);for(let ye=0;ye<q.length;ye++){let me=q[ye];je?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,We,be,me.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,ht,We,be,me.image[K])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),J.__version=te.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function De(x,M,k,Q,te,J){let Ue=r.convert(k.format,k.colorSpace),pe=r.convert(k.type),Se=A(k.internalFormat,Ue,pe,k.colorSpace),ft=i.get(M),ie=i.get(k);if(ie.__renderTarget=M,!ft.__hasExternalTextures){let Te=Math.max(1,M.width>>J),Ge=Math.max(1,M.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Se,Te,Ge,M.depth,0,Ue,pe,null):t.texImage2D(te,J,Se,Te,Ge,0,Ue,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),ct(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,ie.__webglTexture,0,lt(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,ie.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(x,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer){let Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=y(M.stencilBuffer,te),Ue=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=lt(M);ct(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,J,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,J,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,J,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,x)}else{let Q=M.textures;for(let te=0;te<Q.length;te++){let J=Q[te],Ue=r.convert(J.format,J.colorSpace),pe=r.convert(J.type),Se=A(J.internalFormat,Ue,pe,J.colorSpace),ft=lt(M);k&&ct(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Se,M.width,M.height):ct(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,Se,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Se,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);let te=Q.__webglTexture,J=lt(M);if(M.depthTexture.format===nr)ct(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(M.depthTexture.format===cr)ct(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(x){let M=i.get(x),k=x.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==x.depthTexture){let Q=x.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,x)}else if(k){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),fe(M.__webglDepthbuffer[Q],x,!1);else{let te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),fe(M.__webglDepthbuffer,x,!1);else{let Q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(x,M,k){let Q=i.get(x);M!==void 0&&De(Q.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ye(x)}function zt(x){let M=x.texture,k=i.get(x),Q=i.get(M);x.addEventListener("dispose",b);let te=x.textures,J=x.isWebGLCubeRenderTarget===!0,Ue=te.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[pe]=[];for(let Se=0;Se<M.mipmaps.length;Se++)k.__webglFramebuffer[pe][Se]=n.createFramebuffer()}else k.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)k.__webglFramebuffer[pe]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let pe=0,Se=te.length;pe<Se;pe++){let ft=i.get(te[pe]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&ct(x)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){let Se=te[pe];k.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[pe]);let ft=r.convert(Se.format,Se.colorSpace),ie=r.convert(Se.type),Te=A(Se.internalFormat,ft,ie,Se.colorSpace,x.isXRRenderTarget===!0),Ge=lt(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Te,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,k.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(k.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),st(n.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)De(k.__webglFramebuffer[pe][Se],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else De(k.__webglFramebuffer[pe],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let pe=0,Se=te.length;pe<Se;pe++){let ft=te[pe],ie=i.get(ft);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),st(n.TEXTURE_2D,ft),De(k.__webglFramebuffer,x,ft,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(ft)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(pe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Q.__webglTexture),st(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)De(k.__webglFramebuffer[Se],x,M,n.COLOR_ATTACHMENT0,pe,Se);else De(k.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,pe,0);m(M)&&f(pe),t.unbindTexture()}x.depthBuffer&&Ye(x)}function ut(x){let M=x.textures;for(let k=0,Q=M.length;k<Q;k++){let te=M[k];if(m(te)){let J=v(x),Ue=i.get(te).__webglTexture;t.bindTexture(J,Ue),f(J),t.unbindTexture()}}}let Vt=[],O=[];function On(x){if(x.samples>0){if(ct(x)===!1){let M=x.textures,k=x.width,Q=x.height,te=n.COLOR_BUFFER_BIT,J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(x),pe=M.length>1;if(pe)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);let ft=i.get(M[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,te,n.NEAREST),l===!0&&(Vt.length=0,O.length=0,Vt.push(n.COLOR_ATTACHMENT0+Se),x.depthBuffer&&x.resolveDepthBuffer===!1&&(Vt.push(J),O.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);let ft=i.get(M[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ft,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let M=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function lt(x){return Math.min(s.maxSamples,x.samples)}function ct(x){let M=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(x){let M=o.render.frame;h.get(x)!==M&&(h.set(x,M),x.update())}function Dt(x,M){let k=x.colorSpace,Q=x.format,te=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||k!==Ki&&k!==Vi&&(pt.getTransfer(k)===bt?(Q!==Yn||te!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function ze(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=re,this.setTextureCube=Y,this.rebindTextures=rt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ct}function wg(n,e){function t(i,s=Vi){let r,o=pt.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===hh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mu)return n.BYTE;if(i===Su)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===ch)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===bu)return n.ALPHA;if(i===wu)return n.RGB;if(i===Yn)return n.RGBA;if(i===Ru)return n.LUMINANCE;if(i===xu)return n.LUMINANCE_ALPHA;if(i===nr)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===uh)return n.RED;if(i===fh)return n.RED_INTEGER;if(i===Cu)return n.RG;if(i===ph)return n.RG_INTEGER;if(i===mh)return n.RGBA_INTEGER;if(i===Qo||i===Ko||i===jo||i===ea)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===Jl||i===$l||i===Ql)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===jl||i===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===jl)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===hc||i===dc||i===uc||i===fc||i===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ta||i===mc||i===gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ta)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fu||i===Ec||i===yc||i===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Lc=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},le=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let E of e.hand.values()){let m=t.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:xg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new _e(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends Zi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,E=new Uc,m=t.getContextAttributes(),f=null,v=null,A=[],y=[],D=new ce,C=null,b=new cn;b.viewport=new Rt;let F=new cn;F.viewport=new Rt;let S=[b,F],_=new Lc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=A[$];return oe===void 0&&(oe=new Zr,A[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=A[$];return oe===void 0&&(oe=new Zr,A[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=A[$];return oe===void 0&&(oe=new Zr,A[$]=oe),oe.getHandSpace()};function z($){let oe=y.indexOf($.inputSource);if(oe===-1)return;let De=A[oe];De!==void 0&&(De.update($.inputSource,$.frame,c||o),De.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let $=0;$<A.length;$++){let oe=y[$];oe!==null&&(y[$]=null,A[$].disconnect(oe))}I=null,B=null,E.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,v=null,Ct.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new nn(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,De=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?cr:nr,De=m.stencil?lr:Ri);let Ve={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new nn(u.textureWidth,u.textureHeight,{format:Yn,type:wi,depthTexture:new ur(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function j($){for(let oe=0;oe<$.removed.length;oe++){let De=$.removed[oe],fe=y.indexOf(De);fe>=0&&(y[fe]=null,A[fe].disconnect(De))}for(let oe=0;oe<$.added.length;oe++){let De=$.added[oe],fe=y.indexOf(De);if(fe===-1){for(let Ye=0;Ye<A.length;Ye++)if(Ye>=y.length){y.push(De),fe=Ye;break}else if(y[Ye]===null){y[Ye]=De,fe=Ye;break}if(fe===-1)break}let Ve=A[fe];Ve&&Ve.connect(De)}}let Z=new P,re=new P;function Y($,oe,De){Z.setFromMatrixPosition(oe.matrixWorld),re.setFromMatrixPosition(De.matrixWorld);let fe=Z.distanceTo(re),Ve=oe.projectionMatrix.elements,Ye=De.projectionMatrix.elements,rt=Ve[14]/(Ve[10]-1),zt=Ve[14]/(Ve[10]+1),ut=(Ve[9]+1)/Ve[5],Vt=(Ve[9]-1)/Ve[5],O=(Ve[8]-1)/Ve[0],On=(Ye[8]+1)/Ye[0],lt=rt*O,ct=rt*On,ke=fe/(-O+On),Dt=ke*-O;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Dt),$.translateZ(ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ve[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let ze=rt+ke,x=zt+ke,M=lt-Dt,k=ct+(fe-Dt),Q=ut*zt/x*ze,te=Vt*zt/x*ze;$.projectionMatrix.makePerspective(M,k,Q,te,ze,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let oe=$.near,De=$.far;E.texture!==null&&(E.depthNear>0&&(oe=E.depthNear),E.depthFar>0&&(De=E.depthFar)),_.near=F.near=b.near=oe,_.far=F.far=b.far=De,(I!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,B=_.far),b.layers.mask=$.layers.mask|2,F.layers.mask=$.layers.mask|4,_.layers.mask=b.layers.mask|F.layers.mask;let fe=$.parent,Ve=_.cameras;ue(_,fe);for(let Ye=0;Ye<Ve.length;Ye++)ue(Ve[Ye],fe);Ve.length===2?Y(_,b,F):_.projectionMatrix.copy(b.projectionMatrix),Me($,_,fe)};function Me($,oe,De){De===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(De.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=sa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(_)};let He=null;function st($,oe){if(h=oe.getViewerPose(c||o),g=oe,h!==null){let De=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let fe=!1;De.length!==_.cameras.length&&(_.cameras.length=0,fe=!0);for(let Ye=0;Ye<De.length;Ye++){let rt=De[Ye],zt=null;if(p!==null)zt=p.getViewport(rt);else{let Vt=d.getViewSubImage(u,rt);zt=Vt.viewport,Ye===0&&(e.setRenderTargetTextures(v,Vt.colorTexture,u.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(v))}let ut=S[Ye];ut===void 0&&(ut=new cn,ut.layers.enable(Ye),ut.viewport=new Rt,S[Ye]=ut),ut.matrix.fromArray(rt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(rt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(zt.x,zt.y,zt.width,zt.height),Ye===0&&(_.matrix.copy(ut.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),fe===!0&&_.cameras.push(ut)}let Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){let Ye=d.getDepthInformation(De[0]);Ye&&Ye.isValid&&Ye.texture&&E.init(e,Ye,s.renderState)}}for(let De=0;De<A.length;De++){let fe=y[De],Ve=A[De];fe!==null&&Ve!==void 0&&Ve.update(fe,oe,c||o)}He&&He($,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ct=new Nu;Ct.setAnimationLoop(st),this.setAnimationLoop=function($){He=$},this.dispose=function(){}}},ps=new ci,Fg=new xt;function Pg(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Uu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,A,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=e.get(f),A=v.envMap,y=v.envMapRotation;A&&(m.envMap.value=A,ps.copy(y),ps.x*=-1,ps.y*=-1,ps.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(ps)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ig(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,A){let y=A.program;i.uniformBlockBinding(v,y)}function c(v,A){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let D=A.program;i.updateUBOMapping(v,D);let C=e.render.frame;r[v.id]!==C&&(u(v),r[v.id]=C)}function h(v){let A=d();v.__bindingPointIndex=A;let y=n.createBuffer(),D=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let A=s[v.id],y=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,b=y.length;C<b;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,_=F.length;S<_;S++){let I=F[S];if(p(I,C,S,D)===!0){let B=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],X=0;for(let j=0;j<z.length;j++){let Z=z[j],re=E(Z);typeof Z=="number"||typeof Z=="boolean"?(I.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,B+X,I.__data)):Z.isMatrix3?(I.__data[0]=Z.elements[0],I.__data[1]=Z.elements[1],I.__data[2]=Z.elements[2],I.__data[3]=0,I.__data[4]=Z.elements[3],I.__data[5]=Z.elements[4],I.__data[6]=Z.elements[5],I.__data[7]=0,I.__data[8]=Z.elements[6],I.__data[9]=Z.elements[7],I.__data[10]=Z.elements[8],I.__data[11]=0):(Z.toArray(I.__data,X),X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,A,y,D){let C=v.value,b=A+"_"+y;if(D[b]===void 0)return typeof C=="number"||typeof C=="boolean"?D[b]=C:D[b]=C.clone(),!0;{let F=D[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return D[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(v){let A=v.uniforms,y=0,D=16;for(let b=0,F=A.length;b<F;b++){let S=Array.isArray(A[b])?A[b]:[A[b]];for(let _=0,I=S.length;_<I;_++){let B=S[_],z=Array.isArray(B.value)?B.value:[B.value];for(let X=0,j=z.length;X<j;X++){let Z=z[X],re=E(Z),Y=y%D,ue=Y%re.boundary,Me=Y+ue;y+=ue,Me!==0&&D-Me<re.storage&&(y+=D-Me),B.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=re.storage}}}let C=y%D;return C>0&&(y+=D-C),v.__size=y,v.__cache={},this}function E(v){let A={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(A.boundary=4,A.storage=4):v.isVector2?(A.boundary=8,A.storage=8):v.isVector3||v.isColor?(A.boundary=16,A.storage=12):v.isVector4?(A.boundary=16,A.storage=16):v.isMatrix3?(A.boundary=48,A.storage=48):v.isMatrix4?(A.boundary=64,A.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),A}function m(v){let A=v.target;A.removeEventListener("dispose",m);let y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ma=class{constructor(e={}){let{canvas:t=O0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),E=new Int32Array(4),m=null,f=null,v=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=li,this.toneMappingExposure=1;let y=this,D=!1,C=0,b=0,F=null,S=-1,_=null,I=new Rt,B=new Rt,z=null,X=new ae(0),j=0,Z=t.width,re=t.height,Y=1,ue=null,Me=null,He=new Rt(0,0,Z,re),st=new Rt(0,0,Z,re),Ct=!1,$=new Kr,oe=!1,De=!1,fe=new xt,Ve=new xt,Ye=new P,rt=new Rt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function Vt(){return F===null?Y:1}let O=i;function On(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ah}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",me,!1),O===null){let U="webgl2";if(O=On(U,T),O===null)throw On(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let lt,ct,ke,Dt,ze,x,M,k,Q,te,J,Ue,pe,Se,ft,ie,Te,Ge,We,be,ht,je,Pt,L;function de(){lt=new Z1(O),lt.init(),je=new wg(O,lt),ct=new G1(O,lt,e,je),ke=new Sg(O,lt),ct.reverseDepthBuffer&&u&&ke.buffers.depth.setReversed(!0),Dt=new Q1(O),ze=new hg,x=new bg(O,lt,ke,ze,ct,je,Dt),M=new W1(y),k=new Y1(y),Q=new sp(O),Pt=new z1(O,Q),te=new J1(O,Q,Dt,Pt),J=new j1(O,te,Q,Dt),We=new K1(O,ct,x),ie=new V1(ze),Ue=new cg(y,M,k,lt,ct,Pt,ie),pe=new Pg(y,ze),Se=new ug,ft=new yg(lt),Ge=new H1(y,M,k,ke,J,p,l),Te=new _g(y,J,ct),L=new Ig(O,Dt,ct,ke),be=new k1(O,lt,Dt),ht=new $1(O,lt,Dt),Dt.programs=Ue.programs,y.capabilities=ct,y.extensions=lt,y.properties=ze,y.renderLists=Se,y.shadowMap=Te,y.state=ke,y.info=Dt}de();let q=new Nc(y,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(Z,re,!1))},this.getSize=function(T){return T.set(Z,re)},this.setSize=function(T,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,re=U,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),V===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*Y,re*Y).floor()},this.setDrawingBufferSize=function(T,U,V){Z=T,re=U,Y=V,t.width=Math.floor(T*V),t.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(He)},this.setViewport=function(T,U,V,W){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,U,V,W),ke.viewport(I.copy(He).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(st)},this.setScissor=function(T,U,V,W){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,U,V,W),ke.scissor(B.copy(st).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(T){ke.setScissorTest(Ct=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){Me=T},this.getClearColor=function(T){return T.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let N=!1;if(F!==null){let se=F.texture.format;N=se===mh||se===ph||se===fh}if(N){let se=F.texture.type,ge=se===wi||se===Ri||se===Qr||se===lr||se===hh||se===dh,Fe=Ge.getClearColor(),Pe=Ge.getClearAlpha(),Xe=Fe.r,$e=Fe.g,Ie=Fe.b;ge?(g[0]=Xe,g[1]=$e,g[2]=Ie,g[3]=Pe,O.clearBufferuiv(O.COLOR,0,g)):(E[0]=Xe,E[1]=$e,E[2]=Ie,E[3]=Pe,O.clearBufferiv(O.COLOR,0,E))}else W|=O.COLOR_BUFFER_BIT}U&&(W|=O.DEPTH_BUFFER_BIT),V&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Se.dispose(),ft.dispose(),ze.dispose(),M.dispose(),k.dispose(),J.dispose(),Pt.dispose(),L.dispose(),Ue.dispose(),q.dispose(),q.removeEventListener("sessionstart",nd),q.removeEventListener("sessionend",id),ls.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=Dt.autoReset,U=Te.enabled,V=Te.autoUpdate,W=Te.needsUpdate,N=Te.type;de(),Dt.autoReset=T,Te.enabled=U,Te.autoUpdate=V,Te.needsUpdate=W,Te.type=N}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Je(T){let U=T.target;U.removeEventListener("dispose",Je),Gt(U)}function Gt(T){un(T),ze.remove(T)}function un(T){let U=ze.get(T).programs;U!==void 0&&(U.forEach(function(V){Ue.releaseProgram(V)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,N,se){U===null&&(U=zt);let ge=N.isMesh&&N.matrixWorld.determinant()<0,Fe=Zf(T,U,V,W,N);ke.setMaterial(W,ge);let Pe=V.index,Xe=1;if(W.wireframe===!0){if(Pe=te.getWireframeAttribute(V),Pe===void 0)return;Xe=2}let $e=V.drawRange,Ie=V.attributes.position,mt=$e.start*Xe,It=($e.start+$e.count)*Xe;se!==null&&(mt=Math.max(mt,se.start*Xe),It=Math.min(It,(se.start+se.count)*Xe)),Pe!==null?(mt=Math.max(mt,0),It=Math.min(It,Pe.count)):Ie!=null&&(mt=Math.max(mt,0),It=Math.min(It,Ie.count));let Lt=It-mt;if(Lt<0||Lt===1/0)return;Pt.setup(N,W,Fe,V,Pe);let _n,vt=be;if(Pe!==null&&(_n=Q.get(Pe),vt=ht,vt.setIndex(_n)),N.isMesh)W.wireframe===!0?(ke.setLineWidth(W.wireframeLinewidth*Vt()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(N.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),ke.setLineWidth(Ne*Vt()),N.isLineSegments?vt.setMode(O.LINES):N.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else N.isPoints?vt.setMode(O.POINTS):N.isSprite&&vt.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)vt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))vt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ne=N._multiDrawStarts,gi=N._multiDrawCounts,At=N._multiDrawCount,Vn=Pe?Q.get(Pe).bytesPerElement:1,Us=ze.get(W).currentProgram.getUniforms();for(let Pn=0;Pn<At;Pn++)Us.setValue(O,"_gl_DrawID",Pn),vt.render(Ne[Pn]/Vn,gi[Pn])}else if(N.isInstancedMesh)vt.renderInstances(mt,Lt,N.count);else if(V.isInstancedBufferGeometry){let Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,gi=Math.min(V.instanceCount,Ne);vt.renderInstances(mt,Lt,gi)}else vt.render(mt,Lt)};function Mt(T,U,V){T.transparent===!0&&T.side===St&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,_o(T,U,V),T.side=Yi,T.needsUpdate=!0,_o(T,U,V),T.side=St):_o(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),f=ft.get(V),f.init(U),A.push(f),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),T!==V&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let W=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let se=N.material;if(se)if(Array.isArray(se))for(let ge=0;ge<se.length;ge++){let Fe=se[ge];Mt(Fe,V,N),W.add(Fe)}else Mt(se,V,N),W.add(se)}),A.pop(),f=null,W},this.compileAsync=function(T,U,V=null){let W=this.compile(T,U,V);return new Promise(N=>{function se(){if(W.forEach(function(ge){ze.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){N(T);return}setTimeout(se,10)}lt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Gn=null;function mi(T){Gn&&Gn(T)}function nd(){ls.stop()}function id(){ls.start()}let ls=new Nu;ls.setAnimationLoop(mi),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(T){Gn=T,q.setAnimationLoop(T),T===null?ls.stop():ls.start()},q.addEventListener("sessionstart",nd),q.addEventListener("sessionend",id),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,F),f=ft.get(T,A.length),f.init(U),A.push(f),Ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Ve),De=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,De),m=Se.get(T,v.length),m.init(),v.push(m),q.enabled===!0&&q.isPresenting===!0){let se=y.xr.getDepthSensingMesh();se!==null&&ja(se,U,-1/0,y.sortObjects)}ja(T,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ue,Me),ut=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ut&&Ge.addToRenderList(m,T),this.info.render.frame++,oe===!0&&ie.beginShadows();let V=f.state.shadowsArray;Te.render(V,T,U),oe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){let se=U.cameras;if(N.length>0)for(let ge=0,Fe=se.length;ge<Fe;ge++){let Pe=se[ge];rd(W,N,T,Pe)}ut&&Ge.render(T);for(let ge=0,Fe=se.length;ge<Fe;ge++){let Pe=se[ge];sd(m,T,Pe,Pe.viewport)}}else N.length>0&&rd(W,N,T,U),ut&&Ge.render(T),sd(m,T,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),T.isScene===!0&&T.onAfterRender(y,T,U),Pt.resetDefaultState(),S=-1,_=null,A.pop(),A.length>0?(f=A[A.length-1],oe===!0&&ie.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ja(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){W&&rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ve);let ge=J.update(T),Fe=T.material;Fe.visible&&m.push(T,ge,Fe,V,rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){let ge=J.update(T),Fe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),rt.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),rt.copy(ge.boundingSphere.center)),rt.applyMatrix4(T.matrixWorld).applyMatrix4(Ve)),Array.isArray(Fe)){let Pe=ge.groups;for(let Xe=0,$e=Pe.length;Xe<$e;Xe++){let Ie=Pe[Xe],mt=Fe[Ie.materialIndex];mt&&mt.visible&&m.push(T,ge,mt,V,rt.z,Ie)}}else Fe.visible&&m.push(T,ge,Fe,V,rt.z,null)}}let se=T.children;for(let ge=0,Fe=se.length;ge<Fe;ge++)ja(se[ge],U,V,W)}function sd(T,U,V,W){let N=T.opaque,se=T.transmissive,ge=T.transparent;f.setupLightsView(V),oe===!0&&ie.setGlobalState(y.clippingPlanes,V),W&&ke.viewport(I.copy(W)),N.length>0&&Ao(N,U,V),se.length>0&&Ao(se,U,V),ge.length>0&&Ao(ge,U,V),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function rd(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new nn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?wn:wi,minFilter:vs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let se=f.state.transmissionRenderTarget[W.id],ge=W.viewport||I;se.setSize(ge.z,ge.w);let Fe=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),ut&&Ge.render(V);let Pe=y.toneMapping;y.toneMapping=li;let Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),oe===!0&&ie.setGlobalState(y.clippingPlanes,W),Ao(T,V,W),x.updateMultisampleRenderTarget(se),x.updateRenderTargetMipmap(se),lt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ie=0,mt=U.length;Ie<mt;Ie++){let It=U[Ie],Lt=It.object,_n=It.geometry,vt=It.material,Ne=It.group;if(vt.side===St&&Lt.layers.test(W.layers)){let gi=vt.side;vt.side=en,vt.needsUpdate=!0,od(Lt,V,W,_n,vt,Ne),vt.side=gi,vt.needsUpdate=!0,$e=!0}}$e===!0&&(x.updateMultisampleRenderTarget(se),x.updateRenderTargetMipmap(se))}y.setRenderTarget(Fe),y.setClearColor(X,j),Xe!==void 0&&(W.viewport=Xe),y.toneMapping=Pe}function Ao(T,U,V){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,se=T.length;N<se;N++){let ge=T[N],Fe=ge.object,Pe=ge.geometry,Xe=W===null?ge.material:W,$e=ge.group;Fe.layers.test(V.layers)&&od(Fe,U,V,Pe,Xe,$e)}}function od(T,U,V,W,N,se){T.onBeforeRender(y,U,V,W,N,se),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(y,U,V,W,T,se),N.transparent===!0&&N.side===St&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,y.renderBufferDirect(V,U,W,N,T,se),N.side=Yi,N.needsUpdate=!0,y.renderBufferDirect(V,U,W,N,T,se),N.side=St):y.renderBufferDirect(V,U,W,N,T,se),T.onAfterRender(y,U,V,W,N,se)}function _o(T,U,V){U.isScene!==!0&&(U=zt);let W=ze.get(T),N=f.state.lights,se=f.state.shadowsArray,ge=N.state.version,Fe=Ue.getParameters(T,N.state,se,U,V),Pe=Ue.getProgramCacheKey(Fe),Xe=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Je),Xe=new Map,W.programs=Xe);let $e=Xe.get(Pe);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===ge)return ld(T,Fe),$e}else Fe.uniforms=Ue.getUniforms(T),T.onBeforeCompile(Fe,y),$e=Ue.acquireProgram(Fe,Pe),Xe.set(Pe,$e),W.uniforms=Fe.uniforms;let Ie=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ie.uniform),ld(T,Fe),W.needsLights=$f(T),W.lightsStateVersion=ge,W.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=$e,W.uniformsList=null,$e}function ad(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=sr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function ld(T,U){let V=ze.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Zf(T,U,V,W,N){U.isScene!==!0&&(U=zt),x.resetTextureUnits();let se=U.fog,ge=W.isMeshStandardMaterial?U.environment:null,Fe=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ki,Pe=(W.isMeshStandardMaterial?k:M).get(W.envMap||ge),Xe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$e=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,It=!!V.morphAttributes.color,Lt=li;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let _n=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=_n!==void 0?_n.length:0,Ne=ze.get(W),gi=f.state.lights;if(oe===!0&&(De===!0||T!==_)){let Bn=T===_&&W.id===S;ie.setState(W,T,Bn)}let At=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==gi.state.version||Ne.outputColorSpace!==Fe||N.isBatchedMesh&&Ne.batching===!1||!N.isBatchedMesh&&Ne.batching===!0||N.isBatchedMesh&&Ne.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ne.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ne.instancing===!1||!N.isInstancedMesh&&Ne.instancing===!0||N.isSkinnedMesh&&Ne.skinning===!1||!N.isSkinnedMesh&&Ne.skinning===!0||N.isInstancedMesh&&Ne.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ne.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ne.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ne.instancingMorph===!1&&N.morphTexture!==null||Ne.envMap!==Pe||W.fog===!0&&Ne.fog!==se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ie.numPlanes||Ne.numIntersection!==ie.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==$e||Ne.morphTargets!==Ie||Ne.morphNormals!==mt||Ne.morphColors!==It||Ne.toneMapping!==Lt||Ne.morphTargetsCount!==vt)&&(At=!0):(At=!0,Ne.__version=W.version);let Vn=Ne.currentProgram;At===!0&&(Vn=_o(W,U,N));let Us=!1,Pn=!1,Lr=!1,Ut=Vn.getUniforms(),ni=Ne.uniforms;if(ke.useProgram(Vn.program)&&(Us=!0,Pn=!0,Lr=!0),W.id!==S&&(S=W.id,Pn=!0),Us||_!==T){ke.buffers.depth.getReversed()?(fe.copy(T.projectionMatrix),H0(fe),z0(fe),Ut.setValue(O,"projectionMatrix",fe)):Ut.setValue(O,"projectionMatrix",T.projectionMatrix),Ut.setValue(O,"viewMatrix",T.matrixWorldInverse);let Ui=Ut.map.cameraPosition;Ui!==void 0&&Ui.setValue(O,Ye.setFromMatrixPosition(T.matrixWorld)),ct.logarithmicDepthBuffer&&Ut.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,Pn=!0,Lr=!0)}if(N.isSkinnedMesh){Ut.setOptional(O,N,"bindMatrix"),Ut.setOptional(O,N,"bindMatrixInverse");let Bn=N.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ut.setValue(O,"boneTexture",Bn.boneTexture,x))}N.isBatchedMesh&&(Ut.setOptional(O,N,"batchingTexture"),Ut.setValue(O,"batchingTexture",N._matricesTexture,x),Ut.setOptional(O,N,"batchingIdTexture"),Ut.setValue(O,"batchingIdTexture",N._indirectTexture,x),Ut.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&Ut.setValue(O,"batchingColorTexture",N._colorsTexture,x));let Ur=V.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&We.update(N,V,Vn),(Pn||Ne.receiveShadow!==N.receiveShadow)&&(Ne.receiveShadow=N.receiveShadow,Ut.setValue(O,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ni.envMap.value=Pe,ni.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(ni.envMapIntensity.value=U.environmentIntensity),Pn&&(Ut.setValue(O,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Jf(ni,Lr),se&&W.fog===!0&&pe.refreshFogUniforms(ni,se),pe.refreshMaterialUniforms(ni,W,Y,re,f.state.transmissionRenderTarget[T.id]),sr.upload(O,ad(Ne),ni,x)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sr.upload(O,ad(Ne),ni,x),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(O,"center",N.center),Ut.setValue(O,"modelViewMatrix",N.modelViewMatrix),Ut.setValue(O,"normalMatrix",N.normalMatrix),Ut.setValue(O,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Bn=W.uniformsGroups;for(let Ui=0,Ni=Bn.length;Ui<Ni;Ui++){let cd=Bn[Ui];L.update(cd,Vn),L.bind(cd,Vn)}}return Vn}function Jf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function $f(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,U,V){ze.get(T.texture).__webglTexture=U,ze.get(T.depthTexture).__webglTexture=V;let W=ze.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let V=ze.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){F=T,C=U,b=V;let W=!0,N=null,se=!1,ge=!1;if(T){let Pe=ze.get(T);if(Pe.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)x.setupRenderTarget(T);else if(Pe.__hasExternalTextures)x.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ie=T.depthTexture;if(Pe.__boundDepthTexture!==Ie){if(Ie!==null&&ze.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(T)}}let Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ge=!0);let $e=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[U])?N=$e[U][V]:N=$e[U],se=!0):T.samples>0&&x.useMultisampledRTT(T)===!1?N=ze.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?N=$e[V]:N=$e,I.copy(T.viewport),B.copy(T.scissor),z=T.scissorTest}else I.copy(He).multiplyScalar(Y).floor(),B.copy(st).multiplyScalar(Y).floor(),z=Ct;if(ke.bindFramebuffer(O.FRAMEBUFFER,N)&&W&&ke.drawBuffers(T,N),ke.viewport(I),ke.scissor(B),ke.setScissorTest(z),se){let Pe=ze.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,V)}else if(ge){let Pe=ze.get(T.texture),Xe=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,V||0,Xe)}S=-1},this.readRenderTargetPixels=function(T,U,V,W,N,se,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Fe=Fe[ge]),Fe){ke.bindFramebuffer(O.FRAMEBUFFER,Fe);try{let Pe=T.texture,Xe=Pe.format,$e=Pe.type;if(!ct.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-N&&O.readPixels(U,V,W,N,je.convert(Xe),je.convert($e),se)}finally{let Pe=F!==null?ze.get(F).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,U,V,W,N,se,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Fe=Fe[ge]),Fe){let Pe=T.texture,Xe=Pe.format,$e=Pe.type;if(!ct.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-W&&V>=0&&V<=T.height-N){ke.bindFramebuffer(O.FRAMEBUFFER,Fe);let Ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.bufferData(O.PIXEL_PACK_BUFFER,se.byteLength,O.STREAM_READ),O.readPixels(U,V,W,N,je.convert(Xe),je.convert($e),0);let mt=F!==null?ze.get(F).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,mt);let It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await B0(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,se),O.deleteBuffer(Ie),O.deleteSync(It),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,V=0){T.isTexture!==!0&&(qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(T.image.width*W),se=Math.floor(T.image.height*W),ge=U!==null?U.x:0,Fe=U!==null?U.y:0;x.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,V,0,0,ge,Fe,N,se),ke.unbindTexture()},this.copyTextureToTexture=function(T,U,V=null,W=null,N=0){T.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let se,ge,Fe,Pe,Xe,$e,Ie,mt,It,Lt=T.isCompressedTexture?T.mipmaps[N]:T.image;V!==null?(se=V.max.x-V.min.x,ge=V.max.y-V.min.y,Fe=V.isBox3?V.max.z-V.min.z:1,Pe=V.min.x,Xe=V.min.y,$e=V.isBox3?V.min.z:0):(se=Lt.width,ge=Lt.height,Fe=Lt.depth||1,Pe=0,Xe=0,$e=0),W!==null?(Ie=W.x,mt=W.y,It=W.z):(Ie=0,mt=0,It=0);let _n=je.convert(U.format),vt=je.convert(U.type),Ne;U.isData3DTexture?(x.setTexture3D(U,0),Ne=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),Ne=O.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),Ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let gi=O.getParameter(O.UNPACK_ROW_LENGTH),At=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Vn=O.getParameter(O.UNPACK_SKIP_PIXELS),Us=O.getParameter(O.UNPACK_SKIP_ROWS),Pn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);let Lr=T.isDataArrayTexture||T.isData3DTexture,Ut=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let ni=ze.get(T),Ur=ze.get(U),Bn=ze.get(ni.__renderTarget),Ui=ze.get(Ur.__renderTarget);ke.bindFramebuffer(O.READ_FRAMEBUFFER,Bn.__webglFramebuffer),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ni=0;Ni<Fe;Ni++)Lr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(T).__webglTexture,N,$e+Ni),T.isDepthTexture?(Ut&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(U).__webglTexture,N,It+Ni),O.blitFramebuffer(Pe,Xe,se,ge,Ie,mt,se,ge,O.DEPTH_BUFFER_BIT,O.NEAREST)):Ut?O.copyTexSubImage3D(Ne,N,Ie,mt,It+Ni,Pe,Xe,se,ge):O.copyTexSubImage2D(Ne,N,Ie,mt,It+Ni,Pe,Xe,se,ge);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ut?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ne,N,Ie,mt,It,se,ge,Fe,_n,vt,Lt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,N,Ie,mt,It,se,ge,Fe,_n,Lt.data):O.texSubImage3D(Ne,N,Ie,mt,It,se,ge,Fe,_n,vt,Lt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Ie,mt,se,ge,_n,vt,Lt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Ie,mt,Lt.width,Lt.height,_n,Lt.data):O.texSubImage2D(O.TEXTURE_2D,N,Ie,mt,se,ge,_n,vt,Lt);O.pixelStorei(O.UNPACK_ROW_LENGTH,gi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Vn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Us),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pn),N===0&&U.generateMipmaps&&O.generateMipmap(Ne),ke.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V=null,W=null,N=0){return T.isTexture!==!0&&(qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0),qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,V,W,N)},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&x.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?x.setTextureCube(T,0):T.isData3DTexture?x.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?x.setTexture2DArray(T,0):x.setTexture2D(T,0),ke.unbindTexture()},this.resetState=function(){C=0,b=0,F=null,ke.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},Re=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ga=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Oc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new P,Ea=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends Ci{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,zr=new P,Qs=new P,Ks=new P,js=new ce,kr=new ce,ku=new xt,Vo=new P,Gr=new P,Wo=new P,lu=new ce,Fl=new ce,cu=new ce,jr=class extends Wt{constructor(e=new fr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Oc(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new Ea(i,3,0,!1)),$s.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=$s,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),ku.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-Ks.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Xo(Vo.set(-.5,-.5,0),Ks,o,Qs,s,r),Xo(Gr.set(.5,-.5,0),Ks,o,Qs,s,r),Xo(Wo.set(.5,.5,0),Ks,o,Qs,s,r),lu.set(0,0),Fl.set(1,0),cu.set(1,1);let a=e.ray.intersectTriangle(Vo,Gr,Wo,!1,zr);if(a===null&&(Xo(Gr.set(-.5,.5,0),Ks,o,Qs,s,r),Fl.set(0,1),a=e.ray.intersectTriangle(Vo,Wo,Gr,!1,zr),a===null))return;let l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:Wi.getInterpolation(zr,Vo,Gr,Wo,lu,Fl,cu,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Xo(n,e,t,i,s,r){js.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(kr.x=r*js.x-s*js.y,kr.y=s*js.x+r*js.y):kr.copy(js),n.copy(e),n.x+=kr.x,n.y+=kr.y,n.applyMatrix4(ku)}var Bc=class extends Sn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ln,h=Ln,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ya=class extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new xt,hu=new xt,qo=[],du=new xi,Dg=new xt,Vr=new H,Wr=new $i,va=class extends H{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ya(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Dg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,er),du.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,er),Wr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),hu.multiplyMatrices(i,er),Vr.matrixWorld=hu,Vr.raycast(e,qo);for(let o=0,a=qo.length;o<a;o++){let l=qo[o];l.instanceId=r,l.object=this,t.push(l)}qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bc(new Float32Array(s*this.count),s,this.count,uh,oi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var pr=class extends Ci{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uu=new xt,Hc=new la,Yo=new $i,Zo=new P,eo=class extends Wt{constructor(e=new Xt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;uu.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,E=p;g<E;g++){let m=c.getX(g);Zo.fromBufferAttribute(d,m),fu(Zo,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,E=p;g<E;g++)Zo.fromBufferAttribute(d,g),fu(Zo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fu(n,e,t,i,s,r,o){let a=Hc.distanceSqToPoint(n);if(a<t){let l=new P;Hc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var zn=class extends Sn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new P,s=[],r=[],o=[],a=new P,l=new xt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(mn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(mn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Aa=class extends Zn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zc=class extends Aa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Jo=new P,Pl=new Eh,Il=new Eh,Dl=new Eh,As=class extends Zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jo.subVectors(s[0],s[1]).add(s[0]),c=Jo);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Jo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),Pl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,E,m),Il.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,E,m),Dl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,E,m)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Il.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Dl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Pl.calc(l),Il.calc(l),Dl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function pu(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Lg(n,e){let t=1-n;return t*t*e}function Ug(n,e){return 2*(1-n)*n*e}function Ng(n,e){return n*n*e}function Jr(n,e,t,i){return Lg(n,e)+Ug(n,t)+Ng(n,i)}function Og(n,e){let t=1-n;return t*t*t*e}function Bg(n,e){let t=1-n;return 3*t*t*n*e}function Hg(n,e){return 3*(1-n)*n*n*e}function zg(n,e){return n*n*n*e}function $r(n,e,t,i,s){return Og(n,e)+Bg(n,t)+Hg(n,i)+zg(n,s)}var kc=class extends Zn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(e,s.x,r.x,o.x,a.x),$r(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gc=class extends Zn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($r(e,s.x,r.x,o.x,a.x),$r(e,s.y,r.y,o.y,a.y),$r(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vc=class extends Zn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wc=class extends Zn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xc=class extends Zn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jr(e,s.x,r.x,o.x),Jr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Zn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Jr(e,s.x,r.x,o.x),Jr(e,s.y,r.y,o.y),Jr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qc=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(pu(a,l.x,c.x,h.x,d.x),pu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},kg=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:As,CubicBezierCurve:kc,CubicBezierCurve3:Gc,EllipseCurve:Aa,LineCurve:Vc,LineCurve3:Wc,QuadraticBezierCurve:Xc,QuadraticBezierCurve3:_a,SplineCurve:qc});var Zt=class n extends Xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},tt=class n extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,E=[],m=i/2,f=0;v(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(p,2));function v(){let y=new P,D=new P,C=0,b=(t-e)/i;for(let F=0;F<=r;F++){let S=[],_=F/r,I=_*(t-e)+e;for(let B=0;B<=s;B++){let z=B/s,X=z*l+a,j=Math.sin(X),Z=Math.cos(X);D.x=I*j,D.y=-_*i+m,D.z=I*Z,d.push(D.x,D.y,D.z),y.set(j,b,Z).normalize(),u.push(y.x,y.y,y.z),p.push(z,1-_),S.push(g++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let _=E[S][F],I=E[S+1][F],B=E[S+1][F+1],z=E[S][F+1];(e>0||S!==0)&&(h.push(_,I,z),C+=3),(t>0||S!==r-1)&&(h.push(I,B,z),C+=3)}c.addGroup(f,C,0),f+=C}function A(y){let D=g,C=new ce,b=new P,F=0,S=y===!0?e:t,_=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let X=B/s*l+a,j=Math.cos(X),Z=Math.sin(X);b.x=S*Z,b.y=m*_,b.z=S*j,d.push(b.x,b.y,b.z),u.push(0,_,0),C.x=j*.5+.5,C.y=Z*.5*_+.5,p.push(C.x,C.y),g++}for(let B=0;B<s;B++){let z=D+B,X=I+B;y===!0?h.push(X,X+1,z):h.push(X+1,X,z),F+=3}c.addGroup(f,F,y===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hn=class n extends tt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yc=class n extends Xt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let A=new P,y=new P,D=new P;for(let C=0;C<t.length;C+=3)p(t[C+0],A),p(t[C+1],y),p(t[C+2],D),l(A,y,D,v)}function l(v,A,y,D){let C=D+1,b=[];for(let F=0;F<=C;F++){b[F]=[];let S=v.clone().lerp(y,F/C),_=A.clone().lerp(y,F/C),I=C-F;for(let B=0;B<=I;B++)B===0&&F===C?b[F][B]=S:b[F][B]=S.clone().lerp(_,B/I)}for(let F=0;F<C;F++)for(let S=0;S<2*(C-F)-1;S++){let _=Math.floor(S/2);S%2===0?(u(b[F][_+1]),u(b[F+1][_]),u(b[F][_])):(u(b[F][_+1]),u(b[F+1][_+1]),u(b[F+1][_]))}}function c(v){let A=new P;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(v),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let v=new P;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let y=m(v)/2/Math.PI+.5,D=f(v)/Math.PI+.5;o.push(y,1-D)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let A=o[v+0],y=o[v+2],D=o[v+4],C=Math.max(A,y,D),b=Math.min(A,y,D);C>.9&&b<.1&&(A<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),D<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,A){let y=v*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function g(){let v=new P,A=new P,y=new P,D=new P,C=new ce,b=new ce,F=new ce;for(let S=0,_=0;S<r.length;S+=9,_+=6){v.set(r[S+0],r[S+1],r[S+2]),A.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),C.set(o[_+0],o[_+1]),b.set(o[_+2],o[_+3]),F.set(o[_+4],o[_+5]),D.copy(v).add(A).add(y).divideScalar(3);let I=m(D);E(C,_+0,v,I),E(b,_+2,A,I),E(F,_+4,y,I)}}function E(v,A,y,D){D<0&&v.x===1&&(o[A]=v.x-1),y.x===0&&y.z===0&&(o[A]=D/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Fi=class n extends Yc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var gt=class n extends Xt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,p=[],g=[],E=[],m=[];for(let f=0;f<=i;f++){let v=[],A=f/i,y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let C=D/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+A*a),d.y=e*Math.cos(o+A*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+A*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),m.push(C+y,1-A),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let A=h[f][v+1],y=h[f][v],D=h[f+1][v],C=h[f+1][v+1];(f!==0||o>0)&&p.push(A,y,C),(f!==i-1||l<Math.PI)&&p.push(y,D,C)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(E,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rn=class n extends Xt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new P,d=new P,u=new P;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let E=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(E),d.y=(e+t*Math.cos(m))*Math.sin(E),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let E=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(E,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var mr=class n extends Xt{constructor(e=new _a(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ce,h=new P,d=[],u=[],p=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(p,2));function E(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),v(),f()}function m(A){h=e.getPointAt(A/t,h);let y=o.normals[A],D=o.binormals[A];for(let C=0;C<=s;C++){let b=C/s*Math.PI*2,F=Math.sin(b),S=-Math.cos(b);l.x=S*y.x+F*D.x,l.y=S*y.y+F*D.y,l.z=S*y.z+F*D.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let A=1;A<=t;A++)for(let y=1;y<=s;y++){let D=(s+1)*(A-1)+(y-1),C=(s+1)*A+(y-1),b=(s+1)*A+y,F=(s+1)*(A-1)+y;g.push(D,C,F),g.push(C,b,F)}}function v(){for(let A=0;A<=t;A++)for(let y=0;y<=s;y++)c.x=A/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new kg[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var xe=class extends Ci{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $o(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Gg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var gr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zc=class extends gr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fd,endingEnd:fd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:r=e,a=2*t-i;break;case md:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:o=e,l=2*i-t;break;case md:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),E=g*g,m=E*g,f=-u*m+2*u*E-u*g,v=(1+u)*m+(-1.5-2*u)*E+(-.5+u)*g+1,A=(-1-p)*m+(1.5+p)*E+.5*g,y=p*m-p*E;for(let D=0;D!==a;++D)r[D]=f*o[h+D]+v*o[c+D]+A*o[l+D]+y*o[d+D];return r}},Jc=class extends gr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},$c=class extends gr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case Ac:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Gg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===tl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let E=t[d+g];if(E!==t[u+g]||E!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Ac;var _s=class extends Jn{constructor(e,t,i){super(e,t,i)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=na;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends Jn{};Qc.prototype.ValueTypeName="color";var Kc=class extends Jn{};Kc.prototype.ValueTypeName="number";var jc=class extends gr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ji.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ma=class extends Jn{InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Jn{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=na;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var eh=class extends Jn{};eh.prototype.ValueTypeName="vector";var th=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Vg=new th,nh=class{constructor(e){this.manager=e!==void 0?e:Vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};nh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},we=class extends Er{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ll=new xt,mu=new P,gu=new P,to=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ih=class extends to{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=sa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},bn=class extends Er{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ih}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Eu=new xt,Xr=new P,Ul=new P,sh=class extends to{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Xr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xr),Ul.copy(i.position),Ul.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ul),i.updateMatrixWorld(),s.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Eu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}},nt=class extends Er{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},rh=class extends to{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pi=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new rh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Sa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=yu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function yu(){return 0}var yh="\\[\\]\\.:\\/",Wg=new RegExp("["+yh+"]","g"),vh="[^"+yh+"]",Xg="[^"+yh.replace("\\.","")+"]",qg=/((?:WC+[\/:])*)/.source.replace("WC",vh),Yg=/(WCOD+)?/.source.replace("WCOD",Xg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),$g=new RegExp("^"+qg+Yg+Zg+Jg+"$"),Qg=["material","materials","bones","map"],oh=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(e){let t=$g.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=oh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);var Ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kg=new dr(-1,1,1,-1,0,1),Ah=class extends Xt{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}},jg=new Ah,_r=class{constructor(e){this._mesh=new H(jg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ss=class extends Ii{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vr.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _r(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var no=class extends Ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xa=class extends Ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ca=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ss(Ra),this.copyPass.material.blending=ai,this.clock=new Sa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}no!==void 0&&(o instanceof no?i=!0:o instanceof xa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Mr=class n extends Ii{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let u=new nn(r,o,{type:wn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let p=new nn(r,o,{type:wn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Gu;this.highPassUniforms=vr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Ra;this.copyUniforms=vr.clone(h.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Mn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ae,this.oldClearAlpha=1,this.basic=new qe,this.fsQuad=new _r(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};Mr.BlurDirectionX=new ce(1,0);Mr.BlurDirectionY=new ce(0,1);var Ts=1280,bs=720;function Oe(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var _h=(n,e=0,t=1)=>Math.min(t,Math.max(e,n)),Jt=(n,e,t)=>n+(e-n)*t,at=(n,e,t)=>{let i=_h((t-n)/(e-n));return i*i*(3-2*i)};var eE=n=>(n=_h(n),n*n*(3-2*n));function Pa(n,e){if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++)if(e<=n[t][0]){let i=eE((e-n[t-1][0])/(n[t][0]-n[t-1][0])),s=n[t-1][1],r=n[t][1];return Array.isArray(s)?s.map((o,a)=>Jt(o,r[a],i)):Jt(s,r,i)}return n[n.length-1][1]}var tE={uniforms:{tColor:{value:null},tDepth:{value:null},near:{value:.1},far:{value:400},focus:{value:6},range:{value:3},maxBlur:{value:22},res:{value:new ce(Ts,bs)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tColor,tDepth;uniform float near,far,focus,range,maxBlur;uniform vec2 res;
  float lin(float z){float n=z*2.-1.;return 2.*near*far/(far+near-n*(far-near));}
  float coc(vec2 uv){float d=lin(texture2D(tDepth,uv).r);return clamp((d-focus)/(d<focus?range*.6:range),-1.,1.);}
  float hash(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*43758.5453);}
  void main(){float c0=coc(vUv);float r0=abs(c0)*maxBlur;vec3 sum=texture2D(tColor,vUv).rgb;float w=1.;float rot=hash(vUv*res)*6.283;
    const float G=2.39996;for(int i=1;i<72;i++){float fi=float(i);float r=sqrt(fi/72.)*maxBlur;float an=fi*G+rot;vec2 uv=vUv+vec2(cos(an),sin(an))*r/res;float c=coc(uv);float rs=abs(c)*maxBlur;
      float k=c<c0?smoothstep(r-1.5,r+1.5,rs):smoothstep(r-1.5,r+1.5,r0);sum+=texture2D(tColor,uv).rgb*k;w+=k;}
    gl_FragColor=vec4(sum/w,1.);}`},nE={uniforms:{tDiffuse:{value:null},vig:{value:.42},exposure:{value:1},grain:{value:.016},frame:{value:0},tint:{value:new ae(1,1,1)},sat:{value:1},flash:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform float vig,exposure,grain,frame,sat,flash;uniform vec3 tint;
  vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
  float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+frame)*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*exposure*tint;c=aces(c*.88);
    float l=dot(c,vec3(.2126,.7152,.0722));c=mix(vec3(l),c,sat);
    vec2 q=(vUv-.5)*vec2(.86,1.);float v=smoothstep(.32,.86,length(q));c*=1.-vig*v;
    c=pow(c,vec3(1./2.2));c+=(rnd(vUv*vec2(1280.,720.))-.5)*grain;c=mix(c,vec3(1.),flash);gl_FragColor=vec4(c,1.);}`},Fa=class{constructor(e){let t=this.r=new ma({canvas:e,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(1),t.setSize(Ts,bs,!1),t.shadowMap.enabled=!0,t.shadowMap.type=lh,t.toneMapping=li,t.outputColorSpace=Ki;let i=new ur(Ts,bs);i.type=Ri,this.rt=new nn(Ts,bs,{type:wn,samples:2,depthTexture:i}),this.composer=new Ca(t,new nn(Ts,bs,{type:wn})),this.dof=new Ss(tE,"tDummy"),this.dof.uniforms.tColor.value=this.rt.texture,this.dof.uniforms.tDepth.value=i,this.bloom=new Mr(new ce(Ts/2,bs/2),.45,.75,.82),this.grade=new Ss(nE),this.composer.addPass(this.dof),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.shots=[]}add(e){this.shots.push(e)}render(e){let t=this.shots.find(o=>e>=o.t0&&e<o.t1)||this.shots[this.shots.length-1];t.update(e,e-t.t0,this);let i=t.update(e,e-t.t0,this)||{},s=this.dof.uniforms,r=this.grade.uniforms;s.near.value=t.camera.near,s.far.value=t.camera.far,s.focus.value=i.focus??6,s.range.value=i.range??3,s.maxBlur.value=i.blur??20,this.bloom.strength=i.bloom??.45,this.bloom.threshold=i.bloomT??.82,this.bloom.radius=i.bloomR??.75,r.vig.value=i.vig??.42,r.exposure.value=i.exposure??1,r.sat.value=i.sat??1,r.flash.value=i.flash??0,r.frame.value=Math.floor(e*30)%97,r.tint.value.set(i.tint??"#ffffff"),this.r.setRenderTarget(this.rt),this.r.clear(),this.r.render(t.scene,t.camera),this.r.setRenderTarget(null),this.composer.render()}};function Vu(n,e,t,i=40){let s=new ga;s.background=new ae(t);let r=new cn(i,Ts/bs,.08,400);return{t0:n,t1:e,scene:s,camera:r,update(){return{}}}}function Wu(n,e,t,i=0){n.position.set(e[0],e[1],e[2]),n.up.set(Math.sin(i),Math.cos(i),0),n.lookAt(t[0],t[1],t[2])}var xn=1/420,Mh=new Map;function Cn(n,e,t,i){if(Mh.has(n))return Mh.get(n);let s=document.createElement("canvas");s.width=e*2,s.height=t*2;let r=s.getContext("2d");r.scale(2,2),r.lineJoin="round",r.lineCap="round",i(r,e,t);let o=new zn(s);return o.colorSpace=Ht,o.anisotropy=8,o.generateMipmaps=!0,o.premultiplyAlpha=!1,Mh.set(n,o),o}var Et=n=>new Path2D(n);function on(n,e,t){n.save(),n.fillStyle=t,n.fill(e),n.restore()}function $n(n,e,t,i,s,...r){let o=n.createLinearGradient(e,t,i,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}var iE={hero:{a:"#43C4B4",b:"#27998C",c:"#1F7C72",s:"#6FDCCB",kind:"hoodie",cuff:"#2A9F93"},jaleco:{a:"#F6F4EE",b:"#D9D6CE",c:"#B9B6AE",s:"#FFFFFF",kind:"coat",cuff:"#E9E6DE",pants:"#2E3648"},terno2:{a:"#3C4C72",b:"#2A3756",c:"#1E2842",s:"#6D80A8",kind:"suit",cuff:"#F2EFE8"},terno3:{a:"#6A3A44",b:"#4C2830",c:"#381D23",s:"#8F5A66",kind:"suit",cuff:"#F2EFE8"},avental:{a:"#D2483A",b:"#AE3429",c:"#8A261D",s:"#EF7E70",kind:"hoodie",cuff:"#8A261D"},terno:{a:"#2E3442",b:"#1C2029",c:"#14171e",s:"#566072",kind:"suit",cuff:"#F2EFE8"},rosa:{a:"#F08AA0",b:"#D66A86",c:"#B44F6C",s:"#F9B6C4",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF3DA"},amarelo:{a:"#F7CC58",b:"#E3A92F",c:"#C78F22",s:"#FFE596",kind:"blouse",cuff:"#111",pants:"#59607a"},verde:{a:"#8EAE86",b:"#6F9068",c:"#58744f",s:"#B6CFAE",kind:"dress",cuff:"#111",belt:"#EFC04F",flora:"#FFF8E6"},azul:{a:"#6F97C4",b:"#4C729F",c:"#3A5A82",s:"#A3C2E0",kind:"blouse",cuff:"#111",pants:"#3a3f55"},laranja:{a:"#F2A766",b:"#DD8A45",c:"#BC6F2E",s:"#FBCB9B",kind:"hoodie",cuff:"#BC6F2E"},roxo:{a:"#A98AD0",b:"#8667B0",c:"#6D5093",s:"#CDB6E6",kind:"dress",cuff:"#111",belt:"#F2F0E6",flora:"#F6E4FF"}};function sE(n,e){return Cn("torso_"+e,300,320,t=>{if(t.translate(150,20),n.kind==="hoodie"){let i=Et("M-92 34 Q-60 2 0 -2 Q60 2 92 34 Q106 130 104 262 L-104 262 Q-106 130 -92 34Z");on(t,i,$n(t,-100,0,100,260,n.a,n.b)),t.fillStyle=n.c,t.globalAlpha=.3,t.fill(Et("M60 20 Q100 40 104 262 L52 262 Q70 150 60 20Z")),t.globalAlpha=1,t.fillStyle=n.b,t.fill(Et("M-70 26 Q0 92 70 26 Q84 44 72 70 Q0 118 -72 70 Q-84 44 -70 26Z")),t.fillStyle=n.c,t.fill(Et("M-44 22 Q0 -4 44 22 Q30 62 0 66 Q-30 62 -44 22Z")),t.strokeStyle="#F4F4EE",t.lineWidth=5,t.beginPath(),t.moveTo(-18,66),t.lineTo(-20,126),t.moveTo(18,66),t.lineTo(20,126),t.stroke(),t.fillStyle="#F4F4EE",t.beginPath(),t.arc(-20,130,4.5,0,7),t.arc(20,130,4.5,0,7),t.fill(),t.fillStyle=n.b,t.strokeStyle=n.c,t.lineWidth=3.5;let s=Et("M-62 164 L62 164 L78 240 L-78 240Z");t.fill(s),t.stroke(s),t.fillStyle=n.c,t.fillRect(-104,240,208,24),t.strokeStyle=n.b,t.lineWidth=2.5;for(let r=-100;r<104;r+=10)t.beginPath(),t.moveTo(r,242),t.lineTo(r,263),t.stroke()}else if(n.kind==="suit"){on(t,Et("M-92 26 Q-46 4 0 4 Q46 4 92 26 Q104 130 100 280 L-100 280 Q-104 130 -92 26Z"),$n(t,-100,0,100,280,n.a,n.b)),t.strokeStyle="#ffffff10",t.lineWidth=2;for(let i=-92;i<96;i+=13)t.beginPath(),t.moveTo(i,30),t.lineTo(i,280),t.stroke();t.fillStyle="#F4F2EA",t.fill(Et("M-34 6 L34 6 L10 138 L-10 138Z")),t.fillStyle="#39AE9F",t.fill(Et("M-13 16 L13 16 L8 30 L18 116 L0 138 L-18 116 L-8 30Z")),t.strokeStyle="#8FDCCF",t.lineWidth=2;for(let i=0;i<4;i++)t.beginPath(),t.moveTo(-10,52+i*20),t.lineTo(10,44+i*20),t.stroke();t.fillStyle=n.c,t.fill(Et("M-34 6 L-58 22 L-46 66 L-8 146 L-12 150 L-34 6Z")),t.fill(Et("M34 6 L58 22 L46 66 L8 146 L12 150 L34 6Z")),t.fillStyle="#39AE9F",t.fill(Et("M-70 86 L-34 86 L-46 70 L-58 70Z")),t.fillStyle="#0d0f14",t.beginPath(),t.arc(0,176,7,0,7),t.arc(0,216,7,0,7),t.fill()}else if(n.kind==="coat")on(t,Et("M-88 26 Q-44 4 0 4 Q44 4 88 26 Q100 150 104 292 L-104 292 Q-100 150 -88 26Z"),$n(t,-100,0,100,290,n.a,n.b)),t.fillStyle="#39AE9F",t.fill(Et("M-30 6 L30 6 L12 118 L-12 118Z")),t.fillStyle="#20273a",t.fillRect(-13,16,26,100),t.fillStyle=n.c,t.fill(Et("M-30 6 L-54 24 L-30 78 L-6 128 L-12 134Z")),t.fill(Et("M30 6 L54 24 L30 78 L6 128 L12 134Z")),t.strokeStyle=n.c,t.lineWidth=3,t.beginPath(),t.moveTo(0,130),t.lineTo(0,292),t.stroke(),t.strokeRect(-76,188,54,46),t.strokeRect(22,188,54,46),t.fillStyle="#3F6FB0",t.fillRect(44,182,5,26),t.fillStyle="#C9361F",t.fillRect(56,182,5,22);else if(n.kind==="dress"){on(t,Et("M-62 14 Q-30 26 0 26 Q30 26 62 14 Q78 40 58 96 L54 118 L-54 118 L-58 96 Q-78 40 -62 14Z"),$n(t,-60,0,60,120,n.a,n.b)),on(t,Et("M-52 118 L52 118 Q90 190 116 292 Q0 312 -116 292 Q-90 190 -52 118Z"),$n(t,-100,120,100,300,n.a,n.b)),t.fillStyle=n.belt,t.fillRect(-58,104,116,20);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle=n.flora;for(let r=0;r<34;r++){let o=34+s()*250,a=o<118?52:52+(o-118)*.36,l=(s()*2-1)*a;if(!(o>100&&o<128))for(let c=0;c<5;c++)t.beginPath(),t.arc(l+Math.cos(c*1.256)*5,o+Math.sin(c*1.256)*5,3.2,0,7),t.fill()}}else on(t,Et("M-74 18 Q-30 30 0 30 Q30 30 74 18 Q88 110 74 196 L-74 196 Q-88 110 -74 18Z"),$n(t,-70,0,70,200,n.a,n.b)),t.fillStyle="#0a0a12",t.fill(Et("M-22 26 L22 26 L0 64Z")),on(t,Et("M-68 196 L68 196 L74 276 L-74 276Z"),n.pants||"#555",null),t.fillStyle=n.belt||n.c,t.fillRect(-70,192,140,12)})}function Xu(n,e,t){return Cn("sl_"+e+t,90,170,i=>{if(i.translate(45,10),n.kind==="dress"||n.kind==="blouse"){t==="u"?(on(i,Et("M-26 -2 Q0 -16 26 -2 Q32 34 22 54 Q0 62 -22 54 Q-32 34 -26 -2Z"),$n(i,-26,0,26,50,n.a,n.b)),i.fillStyle="#17161e",i.fillRect(-7,48,14,100)):(on(i,Et("M-8 -4 L8 -4 L8 136 L-8 136Z"),"#17161e",n.kind?"#FFE9C8":null,3),i.fillStyle="#3a3a48",i.fillRect(-2,0,3,130));return}let s=134,r=t==="u"?27:23,o=t==="u"?23:18;on(i,Et(`M${-r} 4 Q0 -22 ${r} 4 L${o} ${s} Q0 ${s+16} ${-o} ${s}Z`),$n(i,-r,0,r,0,n.a,n.b)),i.fillStyle=n.s,i.globalAlpha=.5,i.fill(Et(`M${-r+8} 10 L${-r+16} 6 L${-o+13} ${s-6} L${-o+6} ${s-4}Z`)),i.globalAlpha=1,t==="f"&&(i.fillStyle=n.cuff,i.fill(Et(`M-20 ${s-14} Q0 ${s-4} 20 ${s-14} L19 ${s+6} Q0 ${s+16} -19 ${s+6}Z`)))})}function rE(){return Cn("hand",90,100,n=>{n.translate(45,14);let e=Et("M-20 0 Q-30 22 -26 44 L-22 72 Q-16 80 -11 70 L-10 50 L-6 78 Q0 86 5 76 L5 50 L12 72 Q18 78 22 68 L18 40 L32 44 Q40 38 32 28 L18 8 Q2 -6 -20 0Z");on(n,e,$n(n,-20,0,20,70,"#34343F","#1C1C25"),"#FFE9C8",4),n.strokeStyle="#4a4a58",n.lineWidth=2,n.beginPath(),n.moveTo(-12,18),n.quadraticCurveTo(0,8,12,16),n.stroke()})}function qu(n){return Cn("leg"+n,50,160,e=>{e.translate(25,6),e.fillStyle="#191922",e.beginPath(),e.roundRect(-9,-6,18,158,9),e.fill(),e.fillStyle="#46465a",e.fillRect(-2.5,2,3,140)})}function oE(){return Cn("foot",80,40,n=>{n.translate(26,6),on(n,Et("M-13 -2 L13 -2 Q40 6 42 22 L-14 22Z"),"#20202A","#FFE9C8",3),n.fillStyle="#E8E4DA",n.fillRect(-14,19,56,5)})}function aE(n="round"){return Cn("head"+n,300,300,e=>{e.translate(150,150);let t=new Path2D;t.arc(0,0,118,0,7);let i=e.createRadialGradient(10,-46,2,0,0,122);i.addColorStop(0,"#2C2E44"),i.addColorStop(.42,"#14141F"),i.addColorStop(1,"#08080E"),e.fillStyle=i,e.fill(t),e.save(),e.clip(t),e.globalAlpha=.1,e.fillStyle="#9fa4d8",e.beginPath(),e.ellipse(-4,-98,70,16,0,0,7),e.fill(),e.restore()})}var Ju={open(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,18,27,e*.06,0,7),n.fill()},look(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(11,0,18,26,0,0,7),n.fill()},lookl(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(-11,0,18,26,0,0,7),n.fill()},down(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,16,18,22,0,0,7),n.fill()},wide(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,-2,23,33,0,0,7),n.fill()},small(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.ellipse(0,0,10,14,0,0,7),n.fill()},happy(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,8),n.quadraticCurveTo(0,-24,22,8),n.stroke()},shut(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,-6),n.quadraticCurveTo(0,18,22,-6),n.stroke()},flat(n,e){n.strokeStyle="#F6EFE6",n.lineWidth=8.5,n.beginPath(),n.moveTo(-22,2),n.lineTo(22,2),n.stroke()},smug(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-22,-6),n.lineTo(22,-6),n.quadraticCurveTo(20,24,0,24),n.quadraticCurveTo(-20,24,-22,-6),n.fill()},sad(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?-14:2),n.lineTo(19,e>0?2:-14),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?-14:2),n.fill()},angry(n,e){n.fillStyle="#F6EFE6",n.beginPath(),n.moveTo(-19,e>0?6:-14),n.lineTo(19,e>0?-14:6),n.quadraticCurveTo(20,26,0,26),n.quadraticCurveTo(-20,26,-19,e>0?6:-14),n.fill()},heart(n,e){n.fillStyle="#F0728C",n.beginPath(),n.moveTo(0,22),n.bezierCurveTo(-34,-2,-18,-30,0,-10),n.bezierCurveTo(18,-30,34,-2,0,22),n.fill()}};function lE(n,e){return Cn("eye_"+n+(e?"L":""),300,300,t=>{t.translate(150,150),[-1,1].forEach(i=>{t.save(),t.translate(i*42,0),Ju[n](t,i),e&&(t.strokeStyle="#F6EFE6",t.lineWidth=3.5,[0,1,2].forEach(s=>{t.beginPath(),t.moveTo(i*(8+s*6),-22+s*3),t.quadraticCurveTo(i*(16+s*7),-34+s*2,i*(26+s*6),-36+s*5),t.stroke()})),t.restore()}),e&&(t.fillStyle="#E8667F55",[-1,1].forEach(i=>{t.beginPath(),t.ellipse(i*48,40,26,13,0,0,7),t.fill()}))})}function cE(n,e,t){return Cn("hair_"+n+e,420,500,i=>{if(i.translate(210,170),n==="long"){let s=Et("M-130 -24 Q-136 -146 0 -152 Q136 -146 130 -24 Q150 120 128 250 Q0 276 -128 250 Q-150 120 -130 -24Z");on(i,s,$n(i,-120,-150,120,250,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=7,[[-90,-100,-118,180],[-60,-128,-70,40],[86,-100,112,200],[54,-130,70,60],[10,-146,20,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.25,(o+l)/2,a,l),i.stroke()})}if(n==="bun"){let s=new Path2D;s.arc(0,-152,46,0,7),on(i,s,e);let r=Et("M-126 -24 Q-128 -128 0 -132 Q128 -128 126 -24 Q124 14 114 34 Q90 -40 0 -60 Q-90 -40 -114 34 Q-124 14 -126 -24Z");on(i,r,e),i.strokeStyle="#ffffff33",i.lineWidth=6,i.beginPath(),i.moveTo(-60,-112),i.quadraticCurveTo(-10,-128,40,-112),i.stroke()}if(n==="afro"){let s=(r,o,a)=>{let l=new Path2D;l.arc(r,o,a,0,7),on(i,l,e)};[[-118,-20,52],[-104,-82,56],[-58,-130,58],[0,-148,60],[58,-130,58],[104,-82,56],[118,-20,52],[-118,40,44],[118,40,44]].forEach(r=>s(...r)),i.strokeStyle="#ffffff22",i.lineWidth=4,[[-70,-120],[-10,-140],[60,-118],[100,-70],[-100,-66]].forEach(([r,o])=>{i.beginPath(),i.arc(r,o,26,3.6,5.4),i.stroke()})}if(n==="bob"){let s=Et("M-128 -20 Q-132 -146 0 -150 Q132 -146 128 -20 Q130 74 104 104 L-104 104 Q-130 74 -128 -20Z");on(i,s,$n(i,0,-150,0,100,e,t||e)),i.strokeStyle="#ffffff30",i.lineWidth=6,[[-80,-110,-112,70],[78,-112,110,70],[0,-142,4,-110]].forEach(([r,o,a,l])=>{i.beginPath(),i.moveTo(r,o),i.quadraticCurveTo(r*1.22,(o+l)/2,a,l),i.stroke()})}n==="old"&&[[-1],[1]].forEach(([s])=>{[[118,-30,40],[132,18,44],[112,62,34],[92,-66,30]].forEach(([r,o,a])=>{let l=new Path2D;l.arc(s*r,o,a,0,7),on(i,l,"#E9E9EF")})})})}var Yu=(n,e={})=>new qe({map:n,alphaTest:.5,alphaToCoverage:!0,side:St,...e}),Zu=new Map,Sh=new Map,hE=[];function dE(n){if(Sh.has(n))return Sh.get(n);let e=n.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d"),s=7;for(let o=0;o<16;o++){let a=o/16*6.283;i.drawImage(e,Math.cos(a)*s,Math.sin(a)*s)}i.globalCompositeOperation="source-in",i.fillStyle="#FFFFFF",i.fillRect(0,0,t.width,t.height);let r=new zn(t);return r.colorSpace=Ht,r.anisotropy=8,Sh.set(n,r),r}function Rn(n,e,t,i,s,r=0,o,a=!1){let l=new _e(e*xn,t*xn);l.translate((e/2-i)*xn,(s-t/2)*xn,0);let c=Yu(n);o.push(c);let h=new H(l,c);if(h.position.z=r,h.castShadow=!0,!a){let u=Yu(dE(n),{color:"#FFE9C8"});hE.push(u);let p=new H(l,u);p.position.z=-.045-r,h.add(p)}let d=Zu.get(n);return d||(d=new Qi({depthPacking:yr,map:n,alphaTest:.5,side:St}),Zu.set(n,d)),h.customDepthMaterial=d,h}function uE(){return Cn("blob",128,128,n=>{let e=n.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"#000000AA"),e.addColorStop(.55,"#00000055"),e.addColorStop(1,"#00000000"),n.fillStyle=e,n.fillRect(0,0,128,128)})}function fE(){return Cn("halo",256,512,n=>{let e=n.createRadialGradient(128,256,10,128,256,128);e.addColorStop(0,"#FFE6C0"),e.addColorStop(.62,"#FFE6C066"),e.addColorStop(1,"#FFE6C000"),n.save(),n.translate(0,0),n.scale(1,2),n.translate(0,-128),n.fillStyle=e,n.fillRect(0,0,256,512),n.restore()})}function Th(n={}){let e=iE[n.outfit||"hero"],t=n.outfit||"hero",i=new le,s=[],r=new le;i.add(r);let o=316,a=o+262,l={},c={};for(let[m,f,v]of[["L",-1,-.012],["R",1,-.01]]){let A=new le;A.position.set(f*34*xn,o*xn,v);let y=new le;y.position.y=-142*xn,A.add(Rn(qu(1),50,160,25,6,0,s)),y.add(Rn(qu(1),50,160,25,6,0,s));let D=Rn(oE(),80,40,26,6,.001,s);D.position.y=-142*xn,f<0&&(D.scale.x=-1),y.add(D),A.add(y),r.add(A),l[m]={th:A,shin:y}}let h=Rn(sE(e,t),300,320,150,20,0,s);h.position.y=(a+4)*xn,r.add(h);for(let[m,f,v]of[["L",-1,-.006],["R",1,.006]]){let A=new le;A.position.set(f*(e.kind==="dress"?66:84)*xn,(a-24)*xn,v);let y=new le;y.position.y=-124*xn,A.add(Rn(Xu(e,t,"u"),90,170,45,10,0,s)),y.add(Rn(Xu(e,t,"f"),90,170,45,10,.001,s));let D=Rn(rE(),90,100,45,14,.002,s);D.position.y=-128*xn,D.scale.set(f>0?-.8:.8,.8,1),y.add(D),A.add(y),r.add(A),c[m]={u:A,f:y,hand:D}}let d=new le;if(d.position.set(0,(a+104)*xn,.02),r.add(d),n.hair){let m=Rn(cE(n.hair,n.hairc||"#4a2c1a",n.hairhi),420,500,210,170,-.03,s);d.add(m)}if(d.add(Rn(aE(),300,300,150,150,0,s)),n.hair&&n.hair!=="old"&&n.hair!=="afro"){let m=Rn(Cn("fringe_"+n.hair+(n.hairc||""),300,300,f=>{f.translate(150,150);let v=n.hairc||"#4a2c1a";f.fillStyle=v,f.fill(Et(n.hair==="bun"?"M-122 -18 Q-120 -122 0 -124 Q120 -122 122 -18 Q70 -78 0 -84 Q-70 -78 -122 -18Z":"M-124 12 Q-126 -124 0 -126 Q126 -124 124 12 Q106 -44 44 -66 Q0 -76 -44 -66 Q-106 -44 -124 12Z")),f.strokeStyle="#ffffff2c",f.lineWidth=5,f.beginPath(),f.moveTo(-70,-92),f.quadraticCurveTo(-10,-114,54,-96),f.stroke()}),300,300,150,150,.003,s,!0);d.add(m)}if(n.lash){let m=Rn(Cn("earring",300,300,f=>{f.translate(150,150),[-1,1].forEach(v=>{f.strokeStyle="#F2C94C",f.lineWidth=6,f.beginPath(),f.arc(v*124,58,15,0,7),f.stroke()})}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}let u={};for(let m of Object.keys(Ju)){let f=Rn(lE(m,n.lash),300,300,150,150,.002,s,!0);f.castShadow=!1,f.visible=m==="open",d.add(f),u[m]=f}if(n.glasses){let m=Rn(Cn("glasses",300,300,f=>{f.translate(150,150),f.strokeStyle="#E4E6EC",f.lineWidth=7,f.beginPath(),f.arc(-42,0,36,0,7),f.stroke(),f.beginPath(),f.arc(42,0,36,0,7),f.stroke(),f.beginPath(),f.moveTo(-6,0),f.lineTo(6,0),f.stroke()}),300,300,150,150,.004,s,!0);m.castShadow=!1,d.add(m)}if(n.hat){let m=Rn(n.hat(Cn),300,300,150,150,.006,s);d.add(m)}let p=new H(new _e(1,.4),new qe({map:uE(),transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.012,i.add(p);let g=null;n.glow&&(g=new H(new _e(2.1,3),new qe({map:fE(),transparent:!0,depthWrite:!1,opacity:n.glow,blending:Mn,side:St})),g.position.set(0,.95,-.09),r.add(g));let E={root:i,body:r,head:d,arms:c,legs:l,eyes:u,mats:s,torso:h,tint(m){s.forEach(f=>f.color.set(m))},eye(m){for(let f in u)u[f].visible=f===m},cheer(m,f=0,v=1){let A=m*6+f,y=Math.sin(A);E.pose({armL:[150+y*16*v,18+y*10],armR:[150-y*16*v,18-y*10],bob:Math.abs(Math.sin(A*.5))*.07*v,head:y*3,legL:[2,0],legR:[2,0]})},opacity(m){s.forEach(f=>{f.transparent=m<1,f.opacity=m,f.alphaTest=m<1?.02:.5,f.alphaToCoverage=m>=1,f.depthWrite=m>=1}),p.material.opacity=m,g&&(g.material.opacity=(n.glow||0)*m)},pose(m={}){let f=Math.PI/180,v=m.armL||[6,4],A=m.armR||[6,4],y=m.legL||[0,0],D=m.legR||[0,0];c.L.u.rotation.z=-v[0]*f,c.L.f.rotation.z=-v[1]*f,c.R.u.rotation.z=A[0]*f,c.R.f.rotation.z=A[1]*f,l.L.th.rotation.z=-y[0]*f,l.L.shin.rotation.z=-y[1]*f,l.R.th.rotation.z=D[0]*f,l.R.shin.rotation.z=D[1]*f,d.rotation.z=(m.head||0)*f,r.rotation.z=(m.lean||0)*f,r.position.y=m.bob||0;let C=m.squash||0;r.scale.set(1-C*.5,1+C,1)},walk(m,f=1,v=1){let A=m*6.4*f,y=Math.sin(A),D=Math.cos(A);E.pose({legL:[y*15*v,Math.max(0,-y)*26*v],legR:[-y*15*v,Math.max(0,y)*26*v],armL:[8-y*12*v,6],armR:[8+y*12*v,6],bob:Math.abs(D)*.03*v,head:y*2})},place(m,f,v=0,A=1){i.position.set(m,v,f),i.scale.setScalar(A)},face(m){let f=m.position;i.rotation.y=Math.atan2(f.x-i.position.x,f.z-i.position.z),p.rotation.z=-i.rotation.y}};return E.pose(),E}function Ae(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e;let s=i.getContext("2d");t(s,n,e);let r=new zn(i);return r.colorSpace=Ht,r.anisotropy=8,r}var ws=(n,e={})=>new xe({color:n,roughness:.88,metalness:0,...e});function w(n,e,t,i,s=0,r=0,o=0,a=!0){let l=new H(new Tn(n,e,t),typeof i=="string"?ws(i):i);return l.position.set(s,r,o),l.castShadow=a,l.receiveShadow=!0,l}function it(n,e,t=1){let i=Ae(128,128,r=>{let o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"#fff"),o.addColorStop(.25,"#ffffff66"),o.addColorStop(1,"#ffffff00"),r.fillStyle=o,r.fillRect(0,0,128,128)}),s=new jr(new fr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:t,blending:Mn}));return s.scale.set(e,e,1),s}var $u=["#8C4A3C","#6E4152","#4F5A70","#9A6A48","#59685E","#7B3B3B"];function pE(n,e,t,i,s,r=.42){let o=Oe(n),a=256*e,l=300*t,c,h=Ae(a,l,u=>{u.fillStyle=i,u.fillRect(0,0,a,l);for(let p=0;p<l;p+=12)for(let g=p/12%2*-14;g<a;g+=30)u.fillStyle=`rgba(${o()<.5?"255,235,215":"20,8,8"},${.03+o()*.07})`,u.fillRect(g,p,28,10);for(let p=0;p<t;p++)u.fillStyle="rgba(255,240,220,.14)",u.fillRect(0,p*300+292,a,8)}),d=Ae(a,l,u=>{u.fillStyle="#000",u.fillRect(0,0,a,l);let p=h.image.getContext("2d");for(let g=0;g<t;g++)for(let E=0;E<e;E++){let m=E*256+56,f=g*300+60,v=144,A=196,y=o()<r,D=o();if(p.fillStyle="#E8E0CE",p.fillRect(m-9,f-9,v+18,A+18),p.fillStyle="rgba(0,0,0,.35)",p.fillRect(m-18,f+A+9,v+36,12),p.fillStyle="rgba(245,235,215,.8)",p.fillRect(m-18,f+A+6,v+36,8),p.fillStyle=s?y?"#F7C97F":"#1C2238":o()<.5?"#7E93A8":"#94A9B6",p.fillRect(m,f,v,A),y||!s){let C=y?D<.5?"#D69A6A":"#E7AC8C":"#D9D2BE";p.fillStyle=C,p.fillRect(m,f,26,A),p.fillRect(m+v-26,f,26,A)}s||(p.fillStyle="#ffffff30",p.beginPath(),p.moveTo(m+20,f+A),p.lineTo(m+90,f),p.lineTo(m+124,f),p.lineTo(m+54,f+A),p.fill()),p.fillStyle="#E8E0CE",p.fillRect(m+v/2-3,f,6,A),p.fillRect(m,f+A*.45,v,6),y&&s&&(u.fillStyle=D<.5?"#FFC47A":"#FFD79C",u.fillRect(m,f,v,A),u.fillStyle="#000",u.fillRect(m+v/2-3,f,6,A),u.fillRect(m,f+A*.45,v,6))}h.needsUpdate=!0});return d.colorSpace=Ht,{map:h,emissiveMap:d}}function ji(n,e){let{x:t,z:i,w:s,d:r,floors:o=5,side:a=1,night:l=!0,col:c,shop:h}=e,d=Oe(n),u=new le,p=o*2.9+3.6,g=c||$u[Math.floor(d()*$u.length)],E=Math.max(2,Math.round(r/2.1)),m=pE(n,E,o,g,l,e.lit??.42),f=new xe({map:m.map,emissiveMap:m.emissiveMap,emissive:new ae(l?.62:0,l?.56:0,l?.48:0),roughness:.95}),v=ws(g),A=[a>0?f:v,a>0?v:f,ws("#2c2730"),v,v,v],y=new H(new Tn(s,o*2.9,r),A);y.position.set(t,3.6+o*1.45,i),y.castShadow=y.receiveShadow=!0,u.add(y),u.add(w(s+.5,.5,r+.5,"#3d3540",t,p+.25,i)),u.add(w(s+.3,.35,r+.3,g,t,3.6,i));let D=t+a*(s/2+.01);if(h){let C=Ae(1024,180,I=>{I.fillStyle=h.bg,I.fillRect(0,0,1024,180),I.fillStyle="#ffffff22",I.fillRect(0,0,1024,8),I.font=`900 ${h.size||104}px ${h.font||"Fraunces"}`,I.textAlign="center",I.textBaseline="middle",I.fillStyle=h.fg||"#FFF4DC",I.shadowColor=h.fg||"#FFF4DC",I.shadowBlur=l?26:0,I.fillText(h.name,512,96)}),b=new H(new Tn(.18,1.05,r-.3),[new xe({map:C,emissiveMap:C,emissive:new ae(l?.85:0,l?.85:0,l?.85:0)}),new xe({map:C,emissiveMap:C,emissive:new ae(l?.85:0,l?.85:0,l?.85:0)}),ws("#222"),ws("#222"),ws("#222"),ws("#222")]);b.position.set(D+a*.1,3.25,i),a>0&&(b.scale.z=-1),b.castShadow=!0,u.add(b);let F=Ae(512,256,I=>{let B=I.createLinearGradient(0,0,0,256);B.addColorStop(0,h.win||"#F4C783"),B.addColorStop(1,"#D59A5C"),I.fillStyle=B,I.fillRect(0,0,512,256);let z=Oe(n+9);for(let X=0;X<26;X++)I.fillStyle=["#C64236","#36AEA2","#EABA42","#D2728A","#4A86C7","#F6EFE6"][Math.floor(z()*6)],I.fillRect(z()*490,30+Math.floor(z()*3)*76,12+z()*26,52);for(let X of[84,160,236])I.fillStyle="#6b4530",I.fillRect(0,X,512,7)}),S=new xe({map:F,emissiveMap:F,emissive:new ae(l?.62:.1,l?.62:.1,l?.62:.1),roughness:.25});u.add(w(.3,2.8,r-.1,"#3a2a24",D-a*.1,1.4,i));let _=new H(new _e(r-.9,2.1),S);_.rotation.y=a*Math.PI/2,_.position.set(D+a*.07,1.5,i),u.add(_);for(let I=-1;I<=1;I++)u.add(w(.08,2.3,.09,"#2a1d18",D+a*.1,1.5,i+I*(r-.9)/2));if(h.awning){let I=Ae(512,128,z=>{for(let X=0;X<12;X++)z.fillStyle=X%2?h.awning:"#F4EEDF",z.fillRect(X*512/12,0,42.666666666666664,128)}),B=new H(new _e(r-.3,1.3),new xe({map:I,side:St,roughness:.9}));B.rotation.y=a*Math.PI/2,B.rotation.order="YXZ",B.rotation.x=-1,B.position.set(D+a*.55,2.56,i),B.castShadow=!0,u.add(B)}if(l){let I=new nt(h.light||"#FFC88A",3.2,7,1.8);I.position.set(D+a*1.7,2.1,i),u.add(I)}}return u}function Qu(n,e,t){let i=new H(new _e(n,e),t);return i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i}function mE(n="#A99D90"){let e=Ae(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);let i=Oe(4);for(let s=0;s<2400;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},.035)`,t.fillRect(i()*512,i()*512,2,2);t.strokeStyle="rgba(30,20,20,.42)",t.lineWidth=4,t.strokeRect(0,0,512,512)});return e.wrapS=e.wrapT=$t,e}function Ia(n,e){let t=Ae(1024,1024,s=>{s.fillStyle=e?"#1E1E26":"#4b4a52",s.fillRect(0,0,1024,1024);let r=Oe(5);for(let o=0;o<7e3;o++)s.fillStyle=`rgba(255,255,255,${r()*.05})`,s.fillRect(r()*1024,r()*1024,2,2);s.fillStyle="#D9D2BD";for(let o=40;o<1024;o+=256)s.fillRect(504,o,14,130)});t.wrapS=t.wrapT=$t,t.repeat.set(1,12);let i=Qu(9,240,new xe({map:t,roughness:.78,metalness:.05}));i.position.set(0,0,-100),n.add(i);for(let s of[-1,1]){let r=mE(e?"#8E8378":"#B8AC9D");r.repeat.set(2,100);let o=Qu(4.4,240,new xe({map:r,roughness:.92}));o.position.set(s*6.7,.14,-100),n.add(o),n.add(w(.22,.16,240,e?"#B8AFA2":"#D0C6B6",s*4.55,.07,-100,!1))}}function Da(n,e,t,i,s=!0,r=5.5){let o=new le;o.add(w(.09,3.7,.09,"#15151b",e,1.85,t)),o.add(w(.26,.3,.26,"#15151b",e,.15,t));let a=w(.26,.4,.26,new xe({color:"#FFE2AC",emissive:"#FFD089",emissiveIntensity:s?2.2:0}),e,3.85,t,!1);if(o.add(a),o.add(w(.34,.06,.34,"#15151b",e,4.08,t,!1)),s){let l=it("#FFB870",1.8,.4);l.position.set(e,3.85,t),o.add(l);let c=new nt("#FFC688",r,11,1.6);c.position.set(e,3.5,t),o.add(c)}return n.add(o),o}var Ku={};function kt(n,e,t,i=1,s=["#2E4F2C","#3B6636","#55813F","#A9B65A"],r=1){let o=new le;o.add(w(.18*i,2.6*i,.18*i,"#2b1e18",e,1.3*i,t));let a=s.join()+r%3,l=Ku[a]||(Ku[a]=Ae(512,512,c=>{let h=Oe(r%3+3),d=(u,p,g,E)=>{c.fillStyle=E,c.beginPath();for(let m=0;m<=26;m++){let f=m/26*6.283,v=g*(.86+.14*Math.sin(f*5+u)+h()*.05);c.lineTo(u+Math.cos(f)*v,p+Math.sin(f)*v)}c.fill()};for(let[u,p,g]of[[256,170,130],[150,240,118],[362,240,118],[256,300,128],[188,150,92],[324,150,92]])d(u,p,g,s[0]);for(let[u,p,g]of[[256,150,92],[160,226,80],[350,226,80],[256,270,92]])d(u,p,g,s[1]);for(let[u,p,g]of[[226,122,52],[320,196,46],[160,200,40],[262,240,46]])d(u,p,g,s[2]);c.fillStyle=s[3];for(let u=0;u<70;u++){let p=90+h()*330,g=70+h()*300;c.save(),c.translate(p,g),c.rotate(h()*3),c.beginPath(),c.ellipse(0,0,8,3.6,0,0,7),c.fill(),c.restore()}}));for(let c=0;c<3;c++){let h=new H(new _e(3.6*i,3.6*i),new xe({map:l,alphaTest:.5,side:St,roughness:1}));h.position.set(e,3.5*i,t),h.rotation.y=c*1.05+r,h.castShadow=!0,h.customDepthMaterial=new Qi({depthPacking:yr,map:l,alphaTest:.5,side:St}),o.add(h)}return n.add(o),o}function Qn(n,e,t,i,s,r,o=3,a=0){let l=Ae(1600,900,h=>{h.clearRect(0,0,1600,900);let d=Oe(o);for(let u=0;u<3;u++)for(let p=-40;p<1620;){let g=50+d()*110,E=180+d()*(u===0?660:400);if(h.fillStyle=s[u],h.fillRect(p,900-E,g,E),d()<.2&&h.fillRect(p+g/2-4,900-E-60,8,60),r)for(let m=900-E+12;m<890;m+=18)for(let f=p+8;f<p+g-8;f+=14)d()<.34&&(h.fillStyle=u===2?"#FFD999":u===1?"#E9C28C":"#A98BA0",h.fillRect(f,m,7,10));p+=g*.92}}),c=new H(new _e(t,i),new qe({map:l,transparent:!0,fog:!1,depthWrite:!1}));return c.position.set(0,a+i/2,e),n.add(c),c}function dt(n,e,t,i,s){let r=Ae(8,512,a=>{let l=a.createLinearGradient(0,0,0,512);s.forEach(([c,h])=>l.addColorStop(c,h)),a.fillStyle=l,a.fillRect(0,0,8,512)}),o=new H(new _e(t,i),new qe({map:r,fog:!1,depthWrite:!1}));return o.position.set(0,i*.32,e),n.add(o),o}var R=(n,e={})=>new xe({color:n,roughness:.85,...e});function Le(n,e,t,i={}){let s=new H(new _e(e,t),new qe({map:n,alphaTest:i.blend?0:.5,transparent:!!i.blend,depthWrite:!i.blend,side:St,color:i.color||"#fff",blending:i.add?Mn:Xi,fog:i.fog??!0}));return i.shadow&&(s.castShadow=!0,s.customDepthMaterial=new Qi({depthPacking:yr,map:n,alphaTest:.5,side:St})),s}function Fn(n,e){n.rotation.y=Math.atan2(e.position.x-n.position.x,e.position.z-n.position.z)}var bh={value:0};function La(n="#8E3D30",e=4,t=3){let i=Ae(1024,1024,s=>{s.fillStyle="#4b2a24",s.fillRect(0,0,1024,1024);let r=Oe(7);for(let o=0,a=0;a<1024;a+=34,o++)for(let l=o%2*-44;l<1024;l+=88){let c=r();s.fillStyle=n,s.globalAlpha=.78+c*.22,s.fillRect(l+2,a+2,84,30),s.globalAlpha=1,s.fillStyle=`rgba(255,${200+c*40},${180+c*30},${c*.1})`,s.fillRect(l+2,a+2,84,6),c>.84&&(s.fillStyle="rgba(30,8,4,.2)",s.fillRect(l+2,a+2,84,30))}});return i.wrapS=i.wrapT=$t,i.repeat.set(e,t),i}function ju(n="#A59383",e=12,t=12){let i=Ae(1024,1024,s=>{s.fillStyle="#5e5248",s.fillRect(0,0,1024,1024);let r=Oe(3);for(let o=0;o<16;o++)for(let a=-1;a<17;a++){let l=r();s.fillStyle=n,s.globalAlpha=.7+l*.3,s.beginPath(),s.roundRect(a*64+o%2*32+3,o*64+3,58,58,12),s.fill(),s.globalAlpha=1}});return i.wrapS=i.wrapT=$t,i.repeat.set(e,t),i}var ef=[["#36AEA2","#1F7C72","#1A1A22",null],["#F08AA0","#C75C78","#3a2418","long"],["#F7CC58","#D39E2C","#2a1b18","afro"],["#6F97C4","#4C729F","#D9B65A","bob"],["#F2A766","#CC7E3C","#1d1412","bun"],["#A98AD0","#7E5FA8","#6b3d20","long"],["#8EAE86","#688A60","#111",null],["#E9E5DA","#C8C3B5","#8a4a26","bob"]];function gE(n,e){let[t,i,s,r]=ef[n];return Ae(192,384,o=>{o.translate(96,0),o.lineCap="round",o.strokeStyle="#17161e",o.lineWidth=11,o.beginPath(),o.moveTo(-20,270),o.lineTo(-22,378),o.moveTo(20,270),o.lineTo(22,378),o.stroke(),o.strokeStyle=t,o.lineWidth=22,o.beginPath(),e?(o.moveTo(-44,148),o.lineTo(-72,58),o.moveTo(44,148),o.lineTo(72,58)):(o.moveTo(-46,148),o.lineTo(-64,240),o.moveTo(46,148),o.lineTo(64,240)),o.stroke(),o.fillStyle=t,o.beginPath(),o.roundRect(-52,128,104,150,24),o.fill(),o.fillStyle=i,o.fillRect(-52,250,104,26),o.fillStyle="#1C1C25",o.beginPath(),e?(o.arc(-74,50,13,0,7),o.arc(74,50,13,0,7)):(o.arc(-66,246,12,0,7),o.arc(66,246,12,0,7)),o.fill(),(r==="long"||r==="bob")&&(o.fillStyle=s,o.beginPath(),o.roundRect(-64,22,128,r==="long"?160:110,54),o.fill()),r==="afro"&&(o.fillStyle=s,[[-52,58],[-36,28],[0,18],[36,28],[52,58]].forEach(([l,c])=>{o.beginPath(),o.arc(l,c,34,0,7),o.fill()})),r==="bun"&&(o.fillStyle=s,o.beginPath(),o.arc(0,14,22,0,7),o.fill());let a=o.createRadialGradient(4,56,2,0,76,58);a.addColorStop(0,"#2A2C40"),a.addColorStop(1,"#0A0A12"),o.fillStyle=a,o.beginPath(),o.arc(0,76,54,0,7),o.fill(),o.fillStyle="#F6EFE6",o.beginPath(),o.ellipse(-20,76,8,12,0,0,7),o.ellipse(20,76,8,12,0,0,7),o.fill(),r&&(o.fillStyle=s,o.beginPath(),o.moveTo(-54,70),o.quadraticCurveTo(-52,22,0,22),o.quadraticCurveTo(52,22,54,70),o.quadraticCurveTo(26,40,0,40),o.quadraticCurveTo(-26,40,-54,70),o.fill())})}function wh(n,e,t={}){let{h:i=1.75,jump:s=.1,tint:r="#ffffff",seed:o=2}=t,a=Oe(o),l={};for(let c of e){let h=Math.floor(a()*ef.length)+(a()<(t.raised??.5)?100:0);(l[h]=l[h]||[]).push(c)}for(let c in l){let h=c>=100,d=c%100,u=gE(d,h),p=new qe({map:u,alphaTest:.5,side:St,color:r});p.onBeforeCompile=m=>{m.uniforms.uT=bh,m.vertexShader=`uniform float uT;
`+m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float ph = ip.x*3.1 + ip.z*2.3; transformed.y += abs(sin(uT*${(5+d%3).toFixed(1)} + ph))*${s.toFixed(3)}/${i.toFixed(2)};`)};let g=new va(new _e(i*.5,i),p,l[c].length),E=new Wt;l[c].forEach((m,f)=>{E.position.set(m[0],(m[2]||0)+i/2,m[1]),E.rotation.y=m[3]||0;let v=.92+a()*.16;E.scale.set(v,v,1),E.updateMatrix(),g.setMatrixAt(f,E.matrix)}),g.frustumCulled=!1,n.add(g)}}function En(n,e=2600,t=300,i=1){let s=Oe(i),r=new Float32Array(e*3),o=new Float32Array(e*3);for(let d=0;d<e;d++){let u=s()*2-1,p=s()*6.283,g=Math.sqrt(1-u*u);r[d*3]=g*Math.cos(p)*t,r[d*3+1]=u*t,r[d*3+2]=g*Math.sin(p)*t;let E=.55+s()*.45,m=s();o[d*3]=E*(m>.8?1:.9),o[d*3+1]=E*.94,o[d*3+2]=E*(m<.2?.8:1)}let a=new Xt;a.setAttribute("position",new tn(r,3)),a.setAttribute("color",new tn(o,3));let l=Ae(32,32,d=>{let u=d.createRadialGradient(16,16,0,16,16,16);u.addColorStop(0,"#fff"),u.addColorStop(.35,"#ffffffaa"),u.addColorStop(1,"#ffffff00"),d.fillStyle=u,d.fillRect(0,0,32,32)}),c=new pr({map:l,size:3.2,vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!1,fog:!1}),h=new eo(a,c);return h.frustumCulled=!1,n.add(h),h}function Kn(n,e,t="#6D4A33"){let i=Ae(1024,1024,r=>{r.fillStyle=t,r.fillRect(0,0,1024,1024);let o=Oe(8);for(let a=0;a<11;a++){let l=a*94;r.fillStyle=`rgba(${o()<.5?"255,220,180":"20,10,5"},${o()*.13})`,r.fillRect(l,0,94,1024),r.fillStyle="#21140D",r.fillRect(l,0,4,1024);let c=o()*300;for(;c<1024;)r.fillRect(l,c,94,3),c+=340+o()*300}});i.wrapS=i.wrapT=$t,i.repeat.set(n/5,e/5);let s=new H(new _e(n,e),new xe({map:i,roughness:.55}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,s}function hi(n,e,t="#D6D3C9",i="#C8C5BA",s=8){let r=Ae(256,256,a=>{a.fillStyle=t,a.fillRect(0,0,256,256),a.fillStyle=i,a.fillRect(0,0,128,128),a.fillRect(128,128,128,128)});r.wrapS=r.wrapT=$t,r.repeat.set(n/s*4,e/s*4);let o=new H(new _e(n,e),new xe({map:r,roughness:.3,metalness:.05}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,o}function Rs(n,e,t="#FFD9A0",i=.22){let s=Ae(64,256,o=>{let a=o.createLinearGradient(0,0,0,256);a.addColorStop(0,t+"FF"),a.addColorStop(1,t+"00"),o.fillStyle=a,o.fillRect(0,0,64,256);let l=o.createLinearGradient(0,0,64,0);l.addColorStop(0,"#000000"),l.addColorStop(.25,"#00000000"),l.addColorStop(.75,"#00000000"),l.addColorStop(1,"#000000"),o.globalCompositeOperation="destination-out",o.fillStyle=l,o.fillRect(0,0,64,256)});return new H(new _e(n,e),new qe({map:s,transparent:!0,opacity:i,depthWrite:!1,blending:Mn,side:St,fog:!1}))}function Rh(n,e,t,i=1,s="#C76B4A",r="#3E8A52"){let o=new le,a=new H(new tt(.3,.22,.5,20),R(s));a.position.y=.25,a.castShadow=!0,o.add(a);let l=Ae(256,256,h=>{h.clearRect(0,0,256,256);for(let d=0;d<9;d++)h.save(),h.translate(128,250),h.rotate((d-4)*.3),h.fillStyle=d%2?r:"#5BA868",h.beginPath(),h.ellipse(0,-110,20,110,0,0,7),h.fill(),h.restore()}),c=Le(l,1.5,1.5,{shadow:!0});return c.position.y=1.15,o.add(c),o.leaf=c,o.position.set(n,e,t),o.scale.setScalar(i),o}function xh(n,e,t,i="#2A1E18"){let s=new le;s.add(w(n+.08,e+.08,.04,i,0,0,0));let r=Ae(Math.round(n*400),Math.round(e*400),t),o=new H(new _e(n,e),new xe({map:r,roughness:.8}));return o.position.z=.025,s.add(o),s}function Nt(n,e,t,i=1.2){return new H(new _e(n,e),new xe({color:"#000",emissive:t,emissiveIntensity:i}))}function Ke(n,e,t,i=10,s=60){let r=new Pi(n,e);return r.position.set(...t),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-i,right:i,top:i,bottom:-i,far:s}),r.shadow.bias=-6e-4,r.shadow.radius=4,r}function io(n,e={}){let{wall:t="#9A4632",night:i=!1,floor:s="#7A5236",win:r=!0}=e;n.fog=new Re(i?"#2A1E2E":"#E9B48C",i?.02:.008),r&&(dt(n,-60,220,120,i?[[0,"#0E1030"],[.6,"#2A2252"],[1,"#6B3A62"]]:[[0,"#7FA6D8"],[.55,"#F2C4A0"],[1,"#FFD9A8"]]),Qn(n,-50,220,30,i?["#2F2748","#3B2F54","#4A3A5E"]:["#C48A86","#B07A80","#9C6E7A"],i,4));let o=La(t,2,2),a=()=>new xe({map:o,roughness:.95});if(r){[[-5.4,2.6,7,5.2],[5.4,2.6,7,5.2],[0,.5,3.8,1],[0,4.7,3.8,.8]].forEach(([p,g,E,m])=>n.add(w(E,m,.3,a(),p,g,-3)));for(let[p,g,E,m]of[[-1.9,2.6,.12,3.4],[1.9,2.6,.12,3.4],[0,2.6,.07,3.3],[0,4.3,3.9,.12],[0,1.05,4,.16]])n.add(w(E,m,.2,"#EDE7DA",p,g,-2.95))}else n.add(w(18,5.2,.3,a(),0,2.6,-3));n.add(Kn(18,12,s));let l=xh(.9,1.2,p=>{p.fillStyle="#F2E6CC",p.fillRect(0,0,360,480),p.fillStyle="#E8667F",p.beginPath(),p.arc(180,200,110,0,7),p.fill(),p.fillStyle="#36AEA2",p.fillRect(0,330,360,150)});l.position.set(-3.6,2.8,-2.83),n.add(l),n.add(Rh(4.4,0,-2.4,1.1)),n.add(Rh(-5,0,-2.4,.9,"#36AEA2")),n.add(new we(i?"#6E74C0":"#B9C8F0","#6A4430",i?.7:.9));let c=Ke(i?"#9FB0FF":"#FFD6A0",i?.9:2.4,[3,7,-10],9,40);c.target.position.set(-1,0,0),n.add(c,c.target);let h=new nt("#FFB56E",i?10:4,8,1.6);h.position.set(3.4,2.2,-1.2),n.add(h);let d=new H(new tt(.18,.3,.34,24),new xe({color:"#F6DDA4",emissive:"#FFB866",emissiveIntensity:1.2}));d.position.set(3.6,1.9,-1.9),n.add(d),n.add(w(.04,1.7,.04,"#222",3.6,.85,-1.9));let u=it("#FFC07A",1.2,.35);u.position.copy(d.position),n.add(u)}var tf=[{name:"PANADER\xCDA",bg:"#6C4A2C",fg:"#FFE7B8",awning:"#3E7A5C"},{name:"FARMACIA",bg:"#2F6E5A",fg:"#F0FFF4"},{name:"LUNA CAF\xC9",bg:"#A85A36",fg:"#FFE3C8",awning:"#D94F58",font:"Caveat",size:120},{name:"LIBROS",bg:"#3A4F7A",fg:"#FFF0C8"},{name:"FLORES",bg:"#B04463",fg:"#FFF2E2",awning:"#EFEDE0"}];function so(n,e={}){let{night:t=!1,seed:i=0,lit:s=.25,dusk:r=!1}=e;n.fog=new Re(t?"#2A2240":r?"#C88A7A":"#F7CFA4",t?.012:.009),dt(n,-170,500,240,t?[[0,"#0E1030"],[.5,"#2A2252"],[.8,"#5B3460"],[1,"#8A4A6A"]]:r?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.5,"#CFD8DC"],[.8,"#FBD7A6"],[1,"#FFE7BE"]]),Qn(n,-150,420,90,t?["#2F2748","#3B2F54","#4A3A5E"]:["#B89AA0","#A98E9A","#9A8592"],t||r,21),Ia(n,t||r);let o=6,a=0;for(;o>-90;){let l=7+a*37%5;n.add(ji(100+a+i,{x:13,z:o-l/2,w:8,d:l,floors:4+a%3,side:-1,night:t||r,lit:s,shop:tf[(a+i)%5]})),n.add(ji(200+a+i,{x:-13,z:o-l/2,w:8,d:l,floors:5+a%3,side:1,night:t||r,lit:s,shop:tf[(a+2+i)%5]})),o-=l,a++}for(let l=0;l<6;l++)kt(n,5.2,-6-l*11,1.2,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],l),Da(n,-5,-3-l*12,1,t||r);n.add(new we(t?"#8E86C8":"#E9EEFF","#6A5A4A",t?.8:1.05)),n.add(Ke(t?"#B9B0F0":r?"#FFB080":"#FFD29A",t?1:2.8,[-20,16,10],30,90))}var ne=(n,e,t,i,s,r,o=0)=>{n.fillStyle=r,n.beginPath(),n.ellipse(e,t,i,s,o,0,7),n.fill()},ot=(n,e,t,i,s,r,o)=>{n.fillStyle=o,n.beginPath(),n.roundRect(e,t,i,s,r),n.fill()},yt=(n,e,t)=>{n.fillStyle=t,n.beginPath(),n.moveTo(...e[0]);for(let i of e.slice(1))n.lineTo(...i);n.closePath(),n.fill()},Sr={perro:[520,440,n=>{ne(n,250,300,150,90,"#C98E5E"),ne(n,250,330,100,50,"#E9C49A"),ot(n,120,330,34,100,14,"#B5784A"),ot(n,340,330,34,100,14,"#B5784A"),ot(n,180,340,34,90,14,"#C98E5E"),ot(n,300,340,34,90,14,"#C98E5E"),n.strokeStyle="#B5784A",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(390,260),n.quadraticCurveTo(470,200,450,150),n.stroke(),ne(n,180,170,110,100,"#C98E5E"),ne(n,100,140,40,80,"#8A5A34",-.3),ne(n,262,140,40,80,"#8A5A34",.3),ne(n,180,220,54,40,"#E9C49A"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],viejo:[520,440,n=>{ne(n,250,300,150,90,"#C9A07E"),ne(n,250,330,100,50,"#EEDCC4"),ot(n,120,330,34,100,14,"#B5906A"),ot(n,340,330,34,100,14,"#B5906A"),ot(n,180,340,34,90,14,"#C9A07E"),ot(n,300,340,34,90,14,"#C9A07E"),ne(n,180,170,110,100,"#C9A07E"),ne(n,100,140,40,80,"#9A7A5A",-.3),ne(n,262,140,40,80,"#9A7A5A",.3),ne(n,180,220,60,46,"#F4F0E8"),ne(n,180,200,22,16,"#1A1A24")},[.3,.34],22,1],gato:[420,440,n=>{ne(n,220,320,110,90,"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=24,n.lineCap="round",n.beginPath(),n.moveTo(320,340),n.quadraticCurveTo(400,280,370,180),n.stroke(),ne(n,180,170,100,92,"#E9853A"),yt(n,[[96,120],[110,30],[160,100]],"#E9853A"),yt(n,[[264,120],[250,30],[200,100]],"#E9853A"),n.strokeStyle="#C96A22",n.lineWidth=9;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(150+e*30,90),n.lineTo(160+e*30,120),n.stroke();ne(n,180,215,16,11,"#E8667F"),n.strokeStyle="#FFFFFF",n.lineWidth=4;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(180+e*30,220+t*8),n.lineTo(180+e*110,205+t*18),n.stroke()},[.43,.34],20,.8],loro:[300,440,n=>{ne(n,150,260,80,130,"#3FA34D"),ne(n,150,140,80,80,"#3FA34D"),yt(n,[[150,380],[110,440],[190,440]],"#2F6E9A"),ne(n,150,300,56,70,"#F2C14E"),yt(n,[[200,150],[250,180],[205,200]],"#2A2A34"),ne(n,120,90,26,18,"#C9361F")},[.48,.3],18,.5],paloma:[360,300,n=>{ne(n,170,190,130,80,"#8D94A8"),ne(n,90,110,56,52,"#7A8296"),ne(n,120,150,40,26,"#5FA898",.3),yt(n,[[40,110],[0,122],[40,128]],"#E9853A"),n.strokeStyle="#E9853A",n.lineWidth=8,n.beginPath(),n.moveTo(160,260),n.lineTo(150,296),n.moveTo(200,260),n.lineTo(210,296),n.stroke(),ne(n,280,170,70,30,"#6A7084",-.3)},[.25,.34],14,.5],mosquito:[300,240,n=>{ne(n,150,130,70,22,"#3A3040"),ne(n,90,120,34,30,"#3A3040"),n.strokeStyle="#3A3040",n.lineWidth=5,n.beginPath(),n.moveTo(60,120),n.lineTo(0,130),n.stroke();for(let e=0;e<3;e++)n.beginPath(),n.moveTo(130+e*30,145),n.lineTo(110+e*34,230),n.stroke();ne(n,150,70,60,26,"rgba(220,240,255,.8)",-.4),ne(n,190,76,50,22,"rgba(220,240,255,.7)",.3)},[.28,.48],12,.25],pradera:[300,380,n=>{ne(n,150,260,90,120,"#C9A06A"),ne(n,150,290,56,80,"#EBD3A8"),ne(n,150,120,74,70,"#C9A06A"),ne(n,100,70,18,14,"#A87A44"),ne(n,200,70,18,14,"#A87A44"),ne(n,150,156,14,10,"#1A1A24"),ot(n,92,200,26,70,12,"#A87A44"),ot(n,182,200,26,70,12,"#A87A44")},[.5,.28],14,.45],abeja:[300,240,n=>{ne(n,160,140,100,64,"#F2C14E"),n.fillStyle="#1A1A24";for(let e=0;e<3;e++)n.fillRect(120+e*40,80,20,120);ne(n,64,130,46,44,"#1A1A24"),ne(n,140,60,60,34,"rgba(230,246,255,.85)",-.4),ne(n,200,64,54,30,"rgba(230,246,255,.8)",.3),yt(n,[[258,140],[296,134],[258,150]],"#1A1A24")},[.2,.5],13,.35],delfin:[600,300,n=>{ne(n,300,160,250,80,"#6F9FC4"),ne(n,300,200,200,40,"#D8E8F4"),yt(n,[[60,150],[0,168],[62,178]],"#6F9FC4"),yt(n,[[300,90],[360,20],[370,100]],"#5A88AC"),yt(n,[[530,150],[600,90],[590,160],[600,230],[530,175]],"#5A88AC"),yt(n,[[260,220],[230,290],[300,230]],"#5A88AC")},[.2,.45],16,2],elefante:[600,520,n=>{ne(n,320,280,220,150,"#9A9AA8");for(let e of[170,240,390,460])ot(n,e,360,70,160,20,"#8A8A98");ne(n,170,200,120,110,"#9A9AA8"),ne(n,270,190,100,130,"#8A8A9A",.2),n.strokeStyle="#9A9AA8",n.lineWidth=46,n.lineCap="round",n.beginPath(),n.moveTo(110,260),n.quadraticCurveTo(60,380,110,460),n.stroke(),yt(n,[[130,280],[110,330],[150,300]],"#F4F0E4")},[.24,.34],20,3],cachalote:[900,320,n=>{ot(n,20,60,560,220,110,"#4A5A6E"),ne(n,600,180,220,90,"#4A5A6E"),yt(n,[[780,170],[900,90],[870,180],[900,270],[780,200]],"#3E4C60"),ot(n,80,250,380,20,10,"#6A7A8E")},[.12,.45],20,8],pollo:[320,360,n=>{ne(n,170,230,120,100,"#FBF7EC"),ne(n,120,120,66,64,"#FBF7EC"),yt(n,[[100,50],[120,20],[140,52],[160,24],[170,62]],"#E2483A"),yt(n,[[60,120],[20,132],[60,144]],"#F2C14E"),ne(n,74,160,12,20,"#E2483A"),n.strokeStyle="#F2C14E",n.lineWidth=9,n.beginPath(),n.moveTo(150,320),n.lineTo(140,360),n.moveTo(200,320),n.lineTo(210,360),n.stroke(),ne(n,270,200,40,70,"#EDE6D4",.4)},[.36,.32],14,.5],vaca:[620,460,n=>{ne(n,340,220,230,130,"#FBF7EC");for(let[e,t,i]of[[300,180,50],[420,250,40],[240,260,34]])ne(n,e,t,i,i*.8,"#2A2A34");for(let e of[190,260,410,480])ot(n,e,300,50,150,16,"#EDE6D4");ne(n,140,160,100,92,"#FBF7EC"),ne(n,120,220,70,46,"#F2B4C0"),yt(n,[[80,80],[60,40],[104,72]],"#C9A06A"),yt(n,[[200,80],[220,40],[176,72]],"#C9A06A")},[.2,.28],18,2.2],cerdo:[480,360,n=>{ne(n,250,200,200,120,"#F2A8B8");for(let e of[110,170,300,360])ot(n,e,260,44,90,14,"#E890A4");ne(n,120,170,34,24,"#E06A84"),yt(n,[[160,70],[150,30],[196,70]],"#E890A4"),yt(n,[[250,70],[270,30],[226,70]],"#E890A4"),n.fillStyle="#B04A64",n.beginPath(),n.arc(110,170,6,0,7),n.arc(130,170,6,0,7),n.fill()},[.3,.34],16,1.4],gorila:[460,520,n=>{ne(n,230,320,170,170,"#2E2E38"),ne(n,230,160,110,104,"#2E2E38"),ne(n,230,190,70,56,"#5A5A68"),ot(n,40,260,70,240,30,"#2E2E38"),ot(n,350,260,70,240,30,"#2E2E38")},[.5,.28],16,1.6],jirafa:[400,900,n=>{ot(n,160,120,70,560,30,"#F2C14E"),ne(n,230,700,150,110,"#F2C14E");for(let e of[120,180,290,340])ot(n,e,760,30,140,12,"#E2A83A");ne(n,190,110,80,60,"#F2C14E"),ot(n,160,20,12,50,6,"#8A5A2A"),ot(n,210,20,12,50,6,"#8A5A2A"),n.fillStyle="#B5784A";for(let e=0;e<18;e++)n.beginPath(),n.ellipse(170+e%3*25,200+e*30,12,16,0,0,7),n.fill()},[.47,.1],14,1.8],lobo:[560,420,n=>{ne(n,300,260,190,100,"#8A8E9A"),ne(n,300,300,120,50,"#C8CCD4");for(let e of[160,220,360,420])ot(n,e,320,36,100,14,"#7A7E8A");ne(n,140,170,96,90,"#8A8E9A"),yt(n,[[80,120],[90,40],[130,100]],"#7A7E8A"),yt(n,[[200,120],[190,40],[150,100]],"#7A7E8A"),yt(n,[[60,190],[10,210],[70,230]],"#8A8E9A"),n.strokeStyle="#8A8E9A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(480,250),n.quadraticCurveTo(540,300,530,370),n.stroke()},[.26,.38],18,1.4],leon:[600,460,n=>{ne(n,340,280,200,110,"#E2A83A");for(let e of[200,260,400,460])ot(n,e,330,44,120,16,"#D29A30");ne(n,170,200,150,150,"#A8642A"),ne(n,170,210,96,92,"#E2A83A"),ne(n,170,260,30,20,"#7A4A2A"),n.strokeStyle="#E2A83A",n.lineWidth=16,n.beginPath(),n.moveTo(530,250),n.quadraticCurveTo(600,300,580,380),n.stroke()},[.28,.4],18,2],pulpo:[420,420,n=>{ne(n,210,150,130,120,"#E8667F"),n.strokeStyle="#E8667F",n.lineWidth=26,n.lineCap="round";for(let e=0;e<8;e++)n.beginPath(),n.moveTo(110+e*28,240),n.quadraticCurveTo(80+e*36+Math.sin(e)*40,340,60+e*44,400),n.stroke()},[.5,.34],18,1],hormiga:[300,300,n=>{ne(n,230,190,60,46,"#3A2A2A"),ne(n,150,180,40,34,"#3A2A2A"),ne(n,80,150,50,46,"#3A2A2A"),n.strokeStyle="#3A2A2A",n.lineWidth=7;for(let e=0;e<3;e++)n.beginPath(),n.moveTo(140+e*20,200),n.lineTo(110+e*40,280),n.stroke();n.beginPath(),n.moveTo(70,110),n.lineTo(40,40),n.moveTo(90,108),n.lineTo(110,40),n.stroke()},[.27,.5],13,.35],ciervo:[520,520,n=>{ne(n,300,300,170,80,"#B5784A"),ne(n,300,330,110,40,"#E9C49A");for(let e of[170,220,360,410])ot(n,e,330,26,180,12,"#9A6238");ot(n,120,120,60,200,26,"#B5784A"),ne(n,130,110,70,56,"#B5784A"),ne(n,80,130,30,22,"#3A2A22"),yt(n,[[150,70],[200,30],[170,90]],"#9A6238"),n.strokeStyle="#7A5230",n.lineWidth=12,n.lineCap="round",n.beginPath(),n.moveTo(120,60),n.lineTo(90,10),n.moveTo(105,35),n.lineTo(60,25),n.moveTo(150,60),n.lineTo(180,8),n.moveTo(165,32),n.lineTo(210,22),n.stroke(),ne(n,470,270,26,20,"#F4F0E4")},[.25,.2],18,1.4],alce:[600,560,n=>{ne(n,340,300,200,110,"#5A3E2A");for(let e of[190,250,400,460])ot(n,e,360,34,190,14,"#4A3222");ot(n,110,150,90,200,36,"#5A3E2A"),ne(n,110,160,80,66,"#5A3E2A"),ne(n,60,200,54,46,"#6A4A34"),ne(n,40,200,12,10,"#2A1A12"),n.fillStyle="#C8AE84",n.beginPath(),n.ellipse(70,70,70,30,-.3,0,7),n.ellipse(170,70,70,30,.3,0,7),n.fill()},[.2,.28],16,2],jabali:[480,340,n=>{ne(n,250,190,190,110,"#5E4A3E"),n.fillStyle="#4A3A30";for(let e=0;e<9;e++)yt(n,[[150+e*22,90],[160+e*22,60],[172+e*22,92]],"#4A3A30");for(let e of[110,170,300,360])ot(n,e,250,40,90,14,"#4A3A30");ne(n,90,200,70,60,"#5E4A3E"),ne(n,30,220,34,28,"#7A6050"),yt(n,[[50,240],[30,200],[62,236]],"#F4F0E4"),yt(n,[[100,130],[90,100],[126,136]],"#4A3A30")},[.18,.5],14,1.2],caballo:[620,560,n=>{ne(n,330,280,200,100,"#8A5A3A");for(let e of[190,240,400,450])ot(n,e,320,34,230,14,"#7A4A2E");ot(n,120,100,80,220,36,"#8A5A3A"),n.save(),n.translate(110,110),n.rotate(-.5),ot(n,-50,-40,160,66,30,"#8A5A3A"),n.restore(),n.fillStyle="#2A1A12",n.fillRect(170,70,30,200),yt(n,[[110,60],[120,20],[140,64]],"#7A4A2E"),n.strokeStyle="#2A1A12",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],16,2.2]},Ua={perro:[[.35,.39],.3],viejo:[[.35,.39],.3],gato:[[.43,.39],.34],loro:[[.5,.32],.4],paloma:[[.25,.37],.24],mosquito:[[.3,.5],.2],pradera:[[.5,.3],.36],abeja:[[.21,.54],.24],delfin:[[.2,.5],.12],elefante:[[.28,.38],.2],cachalote:[[.12,.45],.06],pollo:[[.37,.33],.32],vaca:[[.22,.33],.2],cerdo:[[.3,.4],.18],gorila:[[.5,.29],.3],jirafa:[[.47,.12],.3],lobo:[[.25,.4],.22],leon:[[.28,.44],.22],pulpo:[[.5,.34],.4],hormiga:[[.27,.48],.26]};Object.assign(Ua,{ciervo:[[.24,.2],.14],alce:[[.18,.3],.12],jabali:[[.17,.55],.14],caballo:[[.22,.2],.1]});for(let n in Ua)Sr[n][3]=Ua[n][0],Sr[n][4]=Ua[n][1];Sr.pato=[380,400,n=>{ne(n,210,280,150,100,"#F6D44A"),ne(n,290,250,70,50,"#E8BC30",-.4),ne(n,130,140,86,82,"#F6D44A"),ne(n,40,160,56,22,"#F2913A"),ne(n,46,172,46,14,"#E07A2A"),n.strokeStyle="#F2913A",n.lineWidth=14,n.lineCap="round",n.beginPath(),n.moveTo(180,370),n.lineTo(170,398),n.moveTo(240,370),n.lineTo(250,398),n.stroke(),yt(n,[[340,250],[380,220],[360,280]],"#F6D44A")},[.36,.3],.3,1];Sr.dragon=[480,440,n=>{ne(n,250,300,140,110,"#7BC86A"),ne(n,250,330,90,70,"#D8F0B8");for(let e=0;e<4;e++)yt(n,[[170+e*50,200],[190+e*50,150],[210+e*50,200]],"#F2913A");ne(n,380,210,80,50,"#9AD884",-.6),ne(n,130,160,100,92,"#7BC86A"),ne(n,70,190,46,34,"#9AD884"),yt(n,[[100,80],[90,30],[130,74]],"#F2913A"),yt(n,[[160,76],[170,26],[190,80]],"#F2913A"),ot(n,160,380,40,56,18,"#6AB05A"),ot(n,290,380,40,56,18,"#6AB05A"),n.strokeStyle="#7BC86A",n.lineWidth=30,n.lineCap="round",n.beginPath(),n.moveTo(380,330),n.quadraticCurveTo(470,360,450,280),n.stroke(),n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=4,n.setLineDash([10,8]),n.beginPath(),n.moveTo(250,200),n.lineTo(250,400),n.stroke()},[.28,.34],.3,1.6];Sr.caballoB=[620,560,n=>{ne(n,330,280,200,100,"#F4F0E8");for(let e of[190,240,400,450])ot(n,e,320,34,230,14,"#E4DED2");ot(n,120,100,80,220,36,"#F4F0E8"),n.save(),n.translate(110,110),n.rotate(-.5),ot(n,-50,-40,160,66,30,"#F4F0E8"),n.restore(),n.fillStyle="#E8D8A8",n.fillRect(170,70,30,200),yt(n,[[110,60],[120,20],[140,64]],"#E4DED2"),n.strokeStyle="#E8D8A8",n.lineWidth=26,n.lineCap="round",n.beginPath(),n.moveTo(520,250),n.quadraticCurveTo(580,320,560,420),n.stroke()},[.2,.2],.1,2.2];var Na={},nf=n=>Na["e"+n]||(Na["e"+n]=Ae(128,64,e=>{e.clearRect(0,0,128,64),e.fillStyle="#FBF7EC",e.strokeStyle="#FBF7EC",e.lineWidth=9,e.lineCap="round";for(let t of[32,96])if(n==="happy")e.beginPath(),e.arc(t,40,16,Math.PI*1.1,Math.PI*1.9),e.stroke();else if(n==="flat"||n==="shut")e.beginPath(),e.moveTo(t-16,34),e.lineTo(t+16,34),e.stroke();else if(n==="sad")e.beginPath(),e.ellipse(t,36,13,16,0,0,7),e.fill(),e.fillStyle="#1A1A24",e.fillRect(t-16,18,32,10),e.fillStyle="#FBF7EC";else{let i=n==="wide"?17:13;e.beginPath(),e.ellipse(t,32,i,i*1.25,0,0,7),e.fill(),n==="look"&&(e.fillStyle="#1A1A24",e.beginPath(),e.arc(t+5,34,5,0,7),e.fill(),e.fillStyle="#FBF7EC")}}));function sf(n,e={}){let[t,i,s,r,o,a]=Sr[n],l=Na[n]||(Na[n]=Ae(t,i,s)),c=a*i/t,h=new le,d=new le;h.add(d);let u=Le(l,a,c,{shadow:!0});u.position.y=c/2,d.add(u);let p=new H(new _e(o*a,o*a*.5),new qe({map:nf("open"),transparent:!0,depthWrite:!1}));p.position.set(-a/2+r[0]*a,c-r[1]*c,.01),d.add(p);let g=new H(new Zt(a*.45,24),new qe({color:"#000",transparent:!0,opacity:.22,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.scale.y=.35,g.position.y=.01,h.add(g),e.flip&&(d.scale.x=-1);let E={root:h,card:d,kind:n,h:c,w:a,eye(m){p.material.map=nf(m)},face(m){let f=new P;h.getWorldPosition(f),d.rotation.y=Math.atan2(m.position.x-f.x,m.position.z-f.z)},talk(m,f=!0){u.position.y=c/2+(f?Math.abs(Math.sin(m*14))*c*.015:0),d.scale.y=f?1+Math.sin(m*14)*.012:1},place(m,f,v=0,A=1){return h.position.set(m,v,f),h.scale.setScalar(A),E}};return E}var es=(n,e,t=200,i=200,s)=>{let r=new H(new _e(t,i),s?new xe({map:s,roughness:.95}):R(e,{roughness:1}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},Ch=(n,e=1)=>{n.add(new we("#E9EEFF","#B08A6A",1.05*e)),n.add(Ke("#FFD29A",3*e,[-14,16,10],20,70))},Ee={sala:(n,e)=>io(n,{wall:e.wall||"#2F6E68",night:e.night,win:e.win??!0}),quarto:(n,e)=>{io(n,{wall:"#9A4632",night:e.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),-1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),-1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#4A86C7",{roughness:.9}),-1.7,.8,-.7)),n.add(w(.8,.22,.5,R("#FFFFFF"),-1.7,.82,-2.5))},rua:(n,e)=>so(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),parque:(n,e)=>{n.fog=new Re(e.dusk?"#E8A880":"#F2D8B8",.02),dt(n,-100,500,200,e.dusk?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFD8DC"],[1,"#FFE7BE"]]),Qn(n,-80,400,40,["#B89AA0","#A98E9A","#9A8592"],!!e.dusk,5),es(n,"#7A9A50");for(let t=0;t<12;t++)kt(n,-12+t*2.3,-7-t%3*2.5,1.4,["#3E5F3A","#4F7A44","#6E9A50","#D7D282"],t);n.add(w(2.4,.1,.5,R("#8E6242"),-3.4,.5,-2.2)),n.add(w(2.4,.5,.08,R("#8E6242"),-3.4,.8,-2.45));for(let t=0;t<3;t++)Da(n,-6+t*6,-4,1,!!e.dusk);n.add(new we("#E9EEFF","#B08A6A",1)),n.add(Ke(e.dusk?"#FFB080":"#FFD29A",e.dusk?2.2:3,[-10,12,8],14,50))},plaza:(n,e)=>{so(n,{seed:e.seed||2}),es(n,"",60,60,ju("#B49F8C",24,24)).position.set(0,.01,-10)},granja:(n,e)=>{n.fog=new Re("#F2D8B8",.012),dt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),es(n,"#8AAA58");let t=new le;t.add(w(6,4,5,R("#B5402E"),0,2,0));let i=new H(new tt(.01,4.4,2.2,4),R("#5A3A2A"));i.rotation.y=Math.PI/4,i.scale.z=.8,i.position.y=5.1,t.add(i),t.add(w(2,2.6,.1,R("#F4F0E4"),0,1.3,2.51)),t.position.set(-4,0,-12),n.add(t);for(let s=0;s<16;s++)n.add(w(.1,1,.1,R("#C9A06A"),-10+s*1.3,.5,-4));n.add(w(20,.08,.06,R("#C9A06A"),0,.9,-4)),n.add(w(20,.08,.06,R("#C9A06A"),0,.5,-4));for(let s=0;s<6;s++)kt(n,6+s*3,-16-s%2*3,1.6,void 0,s);Ch(n)},sabana:(n,e)=>{n.fog=new Re("#F2C890",.01),dt(n,-300,900,300,[[0,"#E89A5A"],[.6,"#F6C888"],[1,"#FFE8B8"]]);let t=it("#FFF0C0",40,.9);t.position.set(-30,20,-200),t.material.fog=!1,n.add(t),es(n,"#C8A858");for(let i=0;i<6;i++){let s=new le;s.add(w(.3,3,.3,R("#5A3A22"),0,1.5,0));let r=new H(new tt(2.6,2.2,.6,12),R("#6E8A40"));r.position.y=3.2,s.add(r),s.position.set(-20+i*9,0,-14-i%3*8),n.add(s)}n.add(new we("#FFE8C8","#8A6A3A",1)),n.add(Ke("#FFD8A0",3,[-20,14,-10],30,90))},pradera:(n,e)=>{n.fog=new Re("#F2E2C0",.012),dt(n,-200,700,260,[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#F6E8C8"]]),es(n,"#B8B070");for(let t=0;t<14;t++){let i=new H(new gt(.55,16,10,0,Math.PI*2,0,Math.PI/2),R("#A88A5A"));i.scale.y=.4,i.position.set(-8+t%7*2.6,0,-1-Math.floor(t/7)*4-t%3),n.add(i)}Ch(n)},mar:(n,e)=>{EE(n,e.deep?"#04182E":"#0A3A5A"),n.fog=new Re(e.deep?"#06223E":"#0E4A6A",e.deep?.04:.06);let t=es(n,"#C8B48A");if(t.position.y=-3,!e.deep){let s=Oe(5);for(let r=0;r<30;r++){let o=new H(new hn(.2+s()*.3,.8+s()*1.4,7),R(["#E8667F","#F2A766","#B47AFF","#36AEA2"][r%4]));o.position.set((s()-.5)*14,-2.6,-2-s()*12),n.add(o)}}for(let s=0;s<7;s++){let r=Rs(1.6,16,"#BFEFFF",e.deep?.05:.12);r.position.set(-6+s*2,5,-6),r.rotation.set(0,0,.25),n.add(r)}let i=[];for(let s=0;s<60;s++){let r=it("#DFF8FF",.08,.7);n.add(r),i.push(r)}n.userData.bub=i,n.add(new we("#9FE0FF","#2A4A5A",e.deep?.5:1)),n.add(Ke("#BFEFFF",e.deep?.6:1.4,[0,20,4],14,40))},lab:(n,e)=>{n.fog=new Re("#162238",.04),n.add(hi(16,20,"#2A3348","#232B3E",6)),n.add(w(16,6,.3,R("#2E3A52"),0,3,-3.2));for(let r=0;r<4;r++){let o=Nt(.6,3,"#9FC8FF",1.4);o.rotation.x=Math.PI/2,o.position.set(-3+r*2,4.2,-1),n.add(o)}let t=Nt(2.6,1.4,"#7FD08A",.5);t.position.set(0,2.8,-3.03),n.add(t);let i=Ae(520,280,r=>{r.fillStyle="#0A1A12",r.fillRect(0,0,520,280),r.strokeStyle="#7FD08A",r.lineWidth=4,r.beginPath();for(let o=0;o<520;o++)r.lineTo(o,140+Math.sin(o*.08)*40*Math.sin(o*.013));r.stroke()}),s=new H(new _e(2.5,1.3),new qe({map:i}));s.position.set(0,2.8,-3.02),n.add(s),n.add(new we("#6E86C8","#101420",.8)),n.add(Ke("#BFD4FF",1.4,[3,6,5],8,30))},hall:(n,e)=>{n.fog=new Re("#1E2236",.02),es(n,"#2F4A7A"),n.add(w(30,10,.3,R("#E8E2D2"),0,5,-8));let t=Ae(512,512,r=>{r.clearRect(0,0,512,512),r.strokeStyle="#4A86C7",r.lineWidth=16,r.beginPath(),r.arc(256,256,200,0,7),r.stroke();for(let o=1;o<4;o++)r.beginPath(),r.arc(256,256,o*55,0,7),r.stroke();r.beginPath(),r.moveTo(56,256),r.lineTo(456,256),r.moveTo(256,56),r.lineTo(256,456),r.stroke()}),i=Le(t,4,4);i.position.set(0,6,-7.8),n.add(i);let s=new H(new rn(4,.35,10,48),R("#8E6242"));s.rotation.x=Math.PI/2,s.position.set(0,.8,-1),n.add(s);for(let r=0;r<8;r++){let o=new nt("#FFE8C0",5,10,1.6);o.position.set(-6+r*1.8,6,0),n.add(o)}n.add(new we("#E8E8FF","#3A3A50",.9)),n.add(Ke("#FFF0D8",1.6,[4,10,8],12,40))},super:(n,e)=>{n.fog=new Re("#E6E2D6",.03),n.add(hi(9,40));for(let i of[-1,1]){n.add(w(.7,4.2,30,R("#8F96A3"),i*3.6,2.1,-10));for(let s=0;s<4;s++)n.add(w(1.2,.05,30,R("#DDE0E4"),i*3,.5+s*.9,-10))}let t=Oe(3);for(let i=0;i<160;i++){let s=i%2?1:-1;t()<.55||n.add(w(.3,.3,.4,R(["#3F8A52","#6E9A50","#E8843E","#C64236","#F2C14E"][i%5]),s*3,.7+Math.floor(t()*4)*.9,-i*.18))}for(let i=0;i<6;i++){let s=Nt(1,2.6,"#FFF6DE",1.6);s.rotation.x=Math.PI/2,s.position.set(0,4.6,2-i*5),n.add(s)}n.add(new we("#FFFFFF","#B9B3A6",1)),n.add(Ke("#FFF6E0",.8,[1,8,6],10,30))},zoo:(n,e)=>{Ee.parque(n,{});for(let t=0;t<12;t++)n.add(w(.08,1.4,.08,R("#3A3A40",{metalness:.5}),-4+t*.7,.7,1.2));n.add(w(8,.08,.08,R("#3A3A40"),0,1.35,1.2))},noite:(n,e)=>{io(n,{night:!0,wall:"#3A3050"})},ruina:(n,e)=>{n.fog=new Re("#8A8070",.03),dt(n,-100,400,160,[[0,"#7A8A9A"],[1,"#C8C0B0"]]),es(n,"#8A8070");let t=Oe(8);for(let i=0;i<40;i++){let s=w(.4+t()*1.6,.3+t()*1,.4+t()*1.4,R(["#9A9088","#8A8078","#B0A898"][i%3]),(t()-.5)*10,.3,-1-t()*8);s.rotation.set(t(),t()*3,t()*.4),n.add(s)}Ch(n,.8)}};function EE(n,e){n.background=new ae(e)}function yE(n,e={}){let t=Th({outfit:e.outfit||"hero",hair:e.hair,hairc:e.hairc,lash:!!e.lash,glasses:e.glasses,glow:e.glow??.14});return t.place(e.x||0,e.z||0,e.y||0,e.s||1),t.tint(e.tint||"#FFF0DC"),n.add(t.root),t}var vE=(n,e,t)=>{if(!n)return t;let i=t;for(let[s,r]of n)e>=s&&(i=r);return i};function Fh(n,e,t){let i=Vu(n,e,t.bg||"#F1C39A",t.fov||32),s=i.scene;(Ee[t.amb]||(()=>{}))(s,t.ambo||{});let r=(t.atores||[]).map(a=>{let l=a.tipo==="humano"?yE(s,a):(()=>{let c=sf(a.tipo,a);return c.place(a.x||0,a.z||0,a.y||0,a.s||1),s.add(c.root),c})();return{a,k:l}}),o=t.extra?t.extra(s,i,r.map(a=>a.k)):null;return i.update=(a,l)=>{bh.value=a;let c=i.camera,h=s.userData.bub;h&&h.forEach((g,E)=>g.position.set(-4+E%12*.7,-2.5+(l*.5+E*.13)%7,-2-E%5*1.5));let d=Pa(t.cam.map(([g,E])=>[g,E]),l),u=Pa(t.cam.map(([g,,E])=>[g,E]),l);Wu(c,d,u,0);for(let{a:g,k:E}of r){if(g.move){let f=g.move(l);E.root.position.set(f[0],f[1],f[2])}E.face(c),E.eye(vE(g.eyes,l,g.tipo==="humano"?"look":"open"));let m=(g.talk||[]).some(([f,v])=>l>=f&&l<v);g.tipo==="humano"?g.pose?g.pose(E,l):E.pose({armL:[12,8],armR:[m?50+Math.sin(l*8)*15:12,m?30:8],bob:m?Math.abs(Math.sin(l*8))*.015:0}):(E.talk(l,m),g.pose&&g.pose(E,l))}return o&&o.update&&o.update(l,a,c),{focus:t.f?Pa(t.f,l):5,range:t.range??2.4,blur:t.blur??12,bloom:.3,bloomT:.92,vig:.45,exposure:1.02,...t.look||{},...t.lookFn?t.lookFn(l):{}}},i}function rf(n,e,t,i="#E8667F"){n.add(w(2.2,.45,3,R("#6B4A33"),e,.25,t)),n.add(w(2.1,.3,2.8,R("#F3EEE4"),e,.6,t)),n.add(w(2.18,.2,1.9,R(i,{roughness:.9}),e,.8,t+.5)),n.add(w(2.2,1.3,.16,R("#5A3C28"),e,.9,t-1.55)),n.add(w(.8,.2,.45,R("#FFFFFF"),e-.5,.82,t-1.1)),n.add(w(.8,.2,.45,R("#F6E6C8"),e+.5,.82,t-1.1))}function of(n,e=Math.PI/2){n.root.rotation.z=e}function af(n,e={}){let{w:t=640,h:i=400,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64,font:a="800",tail:l="left"}=e;return Ae(t,i,c=>{c.clearRect(0,0,t,i),c.fillStyle=s,c.strokeStyle="#2A2A34",c.lineWidth=8,c.beginPath(),c.ellipse(t/2,i*.42,t*.46,i*.37,0,0,7),c.fill(),c.stroke();let h=l==="left"?t*.3:t*.7;for(let[u,p,g]of[[h,i*.86,20],[h+(l==="left"?-40:40),i*.96,11]])c.beginPath(),c.arc(u,p,g,0,7),c.fill(),c.stroke();c.fillStyle=r,c.textAlign="center",c.textBaseline="middle",c.font=`${a} ${o}px Inter`;let d=Array.isArray(n)?n:[n];d.forEach((u,p)=>c.fillText(u,t/2,i*.42+(p-(d.length-1)/2)*o*1.15))})}function lf(n,e={}){let{w:t=640,h:i=300,size:s=66}=e;return Ae(t,i,r=>{r.clearRect(0,0,t,i),r.fillStyle="#FFFFFF",r.strokeStyle="#2A2A34",r.lineWidth=8,r.beginPath(),r.roundRect(10,10,t-20,i*.72,40),r.fill(),r.stroke(),r.beginPath(),r.moveTo(t*.3,i*.72+6),r.lineTo(t*.26,i*.98),r.lineTo(t*.42,i*.72+6),r.fill(),r.stroke(),r.fillStyle="#2A2A34",r.font=`800 ${s}px Inter`,r.textAlign="center",r.textBaseline="middle";let o=Array.isArray(n)?n:[n];o.forEach((a,l)=>r.fillText(a,t/2,i*.38+(l-(o.length-1)/2)*s*1.15))})}function ro(n,e="#F2C14E",t=140,i=256,s=200){return Ae(i,s,r=>{r.clearRect(0,0,i,s),r.font=`900 ${t}px Fraunces`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=12,r.strokeStyle="#2A2A34",r.strokeText(n,i/2,s/2),r.fillStyle=e,r.fillText(n,i/2,s/2)})}function AE(n,e,t={}){let{S:i=256,vazio:s=!1,face:r="#FBF7EC",rim:o="#2A2A34"}=t;n.clearRect(0,0,i,i);let a=i*.46;if(n.save(),n.translate(i/2,i/2),s){n.fillStyle="rgba(255,232,205,.35)",n.beginPath(),n.arc(0,0,a*.95,0,7),n.fill(),n.setLineDash([14,12]),n.strokeStyle="#FFF0D8",n.lineWidth=9,n.beginPath(),n.arc(0,0,a*.95,0,7),n.stroke(),n.restore();return}n.fillStyle=o,n.beginPath(),n.arc(0,0,a,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(0,0,a*.86,0,7),n.fill(),n.fillStyle=o;for(let c=0;c<12;c++){let h=c/12*Math.PI*2;n.save(),n.rotate(h),n.fillRect(-4,-a*.8,8,c%3?a*.1:a*.18),n.restore()}let l=(c,h,d)=>{n.save(),n.rotate(c),n.fillRect(-d/2,-h,d,h+10),n.restore()};l(e%12/12*Math.PI*2,a*.5,12),l(e%1*Math.PI*2,a*.72,7),n.fillStyle="#C9361F",n.beginPath(),n.arc(0,0,10,0,7),n.fill(),n.restore()}function xs(n=.6,e=3,t={}){let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=new zn(i);r.colorSpace=Ht;let o=new H(new _e(n,n),new xe({map:r,transparent:!0,alphaTest:.05,side:St,roughness:.7}));return o.set=(a,l={})=>{AE(s,a,{...t,...l}),r.needsUpdate=!0},o.set(e),o}function _E(n,e={}){let{w:t=512,h:i=256,bg:s="#10141E",fg:r="#FFFFFF",size:o=80,font:a="Inter",weight:l=800}=e;return Ae(t,i,c=>{c.fillStyle=s,c.fillRect(0,0,t,i),c.fillStyle=r,c.font=`${l} ${o}px ${a}`,c.textAlign="center",c.textBaseline="middle";let h=Array.isArray(n)?n:[n];h.forEach((d,u)=>c.fillText(d,t/2,i/2+(u-(h.length-1)/2)*o*1.15))})}function cf(n,e,t,i,s={}){let r=_E(e,s),o=new H(new _e(t,i),new qe({map:r,toneMapped:!1}));return n.add(o),o}var oo=[0,2.92,7.68,10.72,13.98,17.3,22.82,27.36,30.12,34.24,36.92,40.72,43.44,53.62,57.26,62.8,68.84,74.22,76.16,82.48,86.5,93.9,95.92,103.54,110.12,112.7,117.04,120.4,125,127.38,132.38,136.56,138.1,143.8,148.6,156.12,158.92,162.58,165.76,169.86,172.74,181.48,186.68,190.04,195.56,198.7,202.82,205.68,212.9,217.04,221.42,228.08,232,235.4,238.16,239.76,242.92,247.36,251.82,259.32,263.54,272.96,282.32,289.5,296.78,303.34,310.28,316.12,323.3,326,331.14,337.06,341.52,345.5,354.98,360,363.4,371.18,376.34,380.88,386.82,395,403.88,406.82,414.22,419.74,428.4,433.88,437.56,440.8,445.5,451.42,453.74,458.24,462.12,468.04,471.16,478.2,481.88,490.44,495.94,499.28,505.34,510.18,515.24,521.7,524.62],ME=[["lunes",0],["siete",.9],["y",1.3],["media",1.52],["de",1.72],["la",1.9],["manana",2],["suena",2.92],["la",3.34],["alarma",3.5],["la",4.48],["apagas",4.62],["y",5.58],["entonces",5.74],["oyes",6.08],["una",6.56],["voz",6.78],["otra",7.68],["vez",7.96],["tarde",8.16],["siempre",9.1],["tarde",9.4],["es",10.72],["tu",11],["madre",11.12],["pero",11.96],["tu",12.12],["madre",12.32],["esta",12.52],["en",12.86],["la",12.98],["cocina",13.08],["con",13.98],["la",14.1],["boca",14.24],["cerrada",14.48],["untando",15.44],["una",15.86],["tostada",16.18],["te",17.3],["frotas",17.4],["los",17.78],["ojos",17.94],["bajas",18.82],["ella",19.88],["te",20.04],["sonrie",20.22],["buenos",21.3],["dias",21.54],["carino",21.92],["y",22.82],["a",22.92],["la",23.02],["vez",23.08],["sin",23.72],["mover",23.82],["los",24.1],["labios",24.34],["oyes",25.04],["que",25.86],["ojeras",26],["tiene",26.36],["seguro",27.36],["que",27.68],["se",27.92],["quedo",28.04],["con",28.28],["el",28.42],["movil",28.54],["hasta",28.86],["las",29.1],["dos",29.28],["te",30.12],["quedas",30.36],["quieto",30.64],["con",31.04],["la",31.18],["cuchara",31.32],["en",31.7],["el",31.86],["aire",32],["lo",32.68],["has",32.92],["entendido",33.12],["hoy",34.24],["puedes",34.42],["escuchar",34.78],["lo",35.38],["que",35.52],["la",35.62],["gente",35.76],["piensa",36],["y",36.92],["no",37.1],["lo",37.2],["que",37.3],["piensa",37.42],["de",37.78],["cualquier",37.9],["cosa",38.1],["lo",39.14],["que",39.26],["piensa",39.38],["de",39.84],["ti",40.04],["solo",40.72],["un",41.1],["dia",41.36],["hasta",42.04],["medianoche",42.34],["y",43.44],["antes",43.68],["de",43.9],["ver",44.06],["que",44.24],["descubres",44.42],["si",45.42],["te",45.52],["gustan",45.62],["estas",45.94],["historias",46.18],["de",46.74],["y",47],["si",47.28],["suscribete",48.16],["al",48.78],["canal",48.94],["y",49.2],["activa",49.48],["la",49.88],["campanita",49.98],["y",51.08],["ahora",51.22],["si",51.44],["vamos",52.18],["alla",52.42],["lo",53.62],["primero",53.84],["que",54.08],["haces",54.3],["es",54.6],["mirarte",54.8],["al",55.22],["espejo",55.36],["tienes",56.4],["un",56.74],["grano",56.9],["en",57.26],["la",57.8],["frente",57.94],["enorme",58.7],["rojo",59.72],["del",60.68],["tamano",60.92],["de",61.42],["un",61.6],["planeta",61.78],["te",62.8],["pones",63.02],["la",63.26],["capucha",63.46],["y",63.86],["sales",64.04],["de",64.26],["casa",64.46],["pensando",64.68],["hoy",65.88],["todo",66.04],["el",66.38],["mundo",66.6],["me",66.9],["va",67.14],["a",67.3],["mirar",67.38],["el",67.7],["grano",67.82],["subes",68.84],["al",69.14],["autobus",69.28],["y",69.74],["te",70.3],["preparas",70.4],["para",70.88],["lo",71.08],["peor",71.24],["para",71.92],["oir",72.22],["las",72.56],["risas",72.72],["por",73.1],["dentro",73.32],["pero",74.22],["no",74.62],["oyes",74.88],["nada",75.16],["bueno",76.16],["oyes",76.9],["cosas",77.12],["habre",78.14],["apagado",78.47],["la",78.8],["plancha",78.92],["tengo",79.8],["examen",80.04],["de",80.48],["mates",80.6],["y",80.86],["no",81.12],["he",81.26],["estudiado",81.38],["me",82.48],["duele",82.62],["el",82.88],["pie",83.06],["por",83.76],["que",84.02],["me",84.16],["ha",84.28],["contestado",84.34],["solo",84.88],["con",85.14],["un",85.38],["emoji",85.52],["ni",86.5],["una",86.82],["sola",87.12],["persona",87.42],["esta",88],["pensando",88.26],["en",88.8],["tu",89],["grano",89.14],["ni",89.8],["una",90.22],["todo",91],["el",91.2],["mundo",91.42],["esta",91.7],["pensando",92],["en",92.52],["si",92.76],["mismo",93],["y",93.9],["esto",94.06],["no",94.32],["te",94.56],["pasa",94.68],["solo",94.9],["a",95.22],["ti",95.38],["en",95.92],["el",96.1],["ano",96.2],["2000",96.36],["el",97.12],["psicologo",97.22],["thomas",97.66],["gilovich",98.04],["y",98.58],["su",98.86],["equipo",98.98],["en",99.52],["la",99.64],["universidad",99.72],["de",100.3],["cornell",100.46],["hicieron",101.1],["un",101.44],["experimento",101.6],["buenisimo",102.38],["le",103.54],["pedian",103.76],["a",104.1],["un",104.22],["estudiante",104.34],["que",104.9],["se",105.08],["pusiera",105.22],["una",105.58],["camiseta",105.8],["muy",106.34],["vergonzosa",106.72],["con",107.68],["la",107.84],["cara",107.98],["de",108.16],["un",108.32],["cantante",108.42],["pasado",108.9],["de",109.28],["moda",109.54],["y",110.12],["que",110.22],["entrara",110.3],["en",110.72],["una",110.88],["clase",111.02],["llena",111.36],["de",111.8],["gente",111.92],["luego",112.7],["le",113],["preguntaban",113.24],["cuantos",114.32],["crees",114.68],["que",115.02],["se",115.12],["han",115.28],["fijado",115.4],["en",115.78],["tu",115.9],["camiseta",115.98],["los",117.04],["estudiantes",117.24],["calculaban",117.76],["que",118.46],["mas",118.66],["o",118.92],["menos",119.08],["la",119.3],["mitad",119.6],["y",120.4],["en",120.64],["realidad",120.78],["se",121.16],["habia",121.84],["fijado",122.02],["alrededor",122.48],["de",122.74],["uno",123.28],["de",123.56],["cada",123.76],["cuatro",123.98],["lo",125],["llamaron",125.22],["el",125.7],["efecto",126.02],["foco",126.36],["nos",127.38],["creemos",127.58],["que",127.98],["vamos",128.22],["por",128.42],["la",128.68],["vida",128.8],["con",129.02],["un",129.28],["foco",129.42],["encima",129.74],["y",130.16],["que",130.54],["todo",130.66],["el",130.96],["mundo",131.18],["nos",131.4],["mira",131.68],["pero",132.38],["los",132.6],["demas",132.78],["estan",133.08],["demasiado",133.48],["ocupados",133.96],["con",134.7],["su",134.98],["propio",135.2],["foco",135.54],["te",136.56],["quitas",136.8],["la",137.12],["capucha",137.26],["primera",138.1],["hora",138.54],["lengua",139.3],["y",140.24],["te",140.38],["toca",140.5],["exponer",140.74],["delante",141.36],["de",142.18],["toda",142.4],["la",142.72],["clase",142.96],["te",143.8],["levantas",144.06],["te",145],["tiemblan",145.18],["las",145.56],["piernas",145.78],["notas",146.72],["la",147.06],["cara",147.24],["ardiendo",147.48],["estas",148.6],["seguro",148.92],["de",149.32],["que",149.52],["todo",149.62],["el",149.96],["mundo",150.16],["ve",150.38],["lo",150.72],["nervioso",150.82],["que",151.3],["estas",151.54],["de",152.34],["que",152.52],["se",152.62],["te",152.76],["nota",152.88],["en",153.08],["la",153.24],["voz",153.34],["en",153.96],["las",154.04],["manos",154.18],["en",154.92],["la",155.02],["frente",155.12],["empiezas",156.12],["a",156.68],["hablar",156.86],["y",157.06],["escuchas",157.78],["que",158.92],["bien",159.04],["lo",159.28],["explica",159.42],["ojala",160.44],["yo",160.8],["hablara",160.94],["asi",161.14],["de",161.5],["tranquilo",161.62],["esto",162.58],["entra",162.84],["en",163.14],["el",163.3],["examen",163.42],["tengo",164.28],["hambre",164.66],["tranquilo",165.76],["tu",166.88],["si",167.54],["tienes",167.74],["el",168.04],["corazon",168.22],["a",168.58],["doscientos",168.76],["y",169.86],["aqui",170.2],["viene",170.4],["otro",170.7],["experimento",170.92],["del",171.66],["mismo",171.8],["equipo",172.12],["en",172.74],["1998",172.9],["gilovich",174.68],["savitsky",175.54],["y",176.12],["medvec",176.4],["pidieron",176.9],["a",177.5],["voluntarios",177.62],["que",178.2],["dieran",178.42],["un",178.74],["discurso",178.88],["delante",179.4],["de",179.84],["otras",180],["personas",180.2],["despues",181.48],["les",181.9],["preguntaron",182.18],["cuanto",182.78],["creian",183.36],["que",183.74],["se",183.96],["les",184.1],["habia",184.2],["notado",184.52],["lo",184.92],["nerviosos",185.06],["que",185.62],["estaban",185.76],["y",186.68],["casi",186.88],["todos",187.1],["pensaban",187.5],["que",188.04],["se",188.24],["les",188.4],["notaba",188.48],["muchisimo",188.9],["pero",190.04],["el",190.32],["publico",190.46],["en",191.06],["realidad",191.22],["los",192.1],["veia",192.24],["bastante",192.56],["mas",193.02],["tranquilos",193.34],["de",193.86],["lo",194.04],["que",194.14],["ellos",194.28],["creian",194.54],["lo",195.56],["llamaron",195.78],["la",196.26],["ilusion",196.58],["de",197.14],["transparencia",197.3],["sientes",198.7],["que",199.04],["tus",199.3],["nervios",199.46],["son",199.86],["de",200.08],["cristal",200.24],["que",201.02],["todo",201.1],["el",201.46],["mundo",201.68],["los",201.88],["ve",202.16],["pero",202.82],["por",203.02],["fuera",203.22],["casi",203.88],["no",204.04],["se",204.36],["nota",204.52],["nada",204.72],["terminas",205.68],["la",206.14],["exposicion",206.32],["te",207.46],["sientas",207.62],["y",208.78],["por",208.8],["primera",209.02],["vez",209.42],["en",209.7],["toda",209.9],["la",210.18],["manana",210.38],["respiras",210.76],["recreo",212.9],["y",214.1],["aqui",214.16],["es",214.44],["donde",214.7],["la",214.9],["cosa",215.12],["se",215.38],["pone",215.64],["peligrosa",215.92],["porque",217.04],["en",217.38],["el",217.6],["banco",217.72],["del",218.02],["fondo",218.22],["esta",218.62],["ella",219.36],["tu",220.32],["crush",220.44],["lo",221.42],["sabes",221.62],["no",222.58],["deberias",222.76],["pero",223.88],["te",224.1],["acercas",224.42],["un",225.06],["poquito",225.54],["solo",226.36],["para",226.74],["escuchar",227],["pasas",228.08],["por",228.44],["delante",228.6],["ella",229.64],["te",229.88],["mira",230.08],["y",230.32],["oyes",231.06],["ay",232],["no",232.24],["viene",232.74],["hacia",233.04],["aqui",233.2],["tengo",233.94],["algo",234.16],["en",234.38],["los",234.46],["dientes",234.56],["que",235.4],["no",235.5],["me",235.62],["hable",235.76],["que",236.12],["no",236.16],["me",236.3],["hable",236.44],["que",236.86],["me",236.9],["pongo",237.06],["roja",237.26],["te",238.16],["paras",238.32],["en",238.58],["seco",238.82],["que",239.76],["se",239.86],["pone",240],["roja",240.22],["ella",241.14],["por",242],["ti",242.1],["te",242.92],["das",243.12],["la",243.28],["vuelta",243.44],["y",243.66],["te",243.86],["vas",243.98],["rapido",244.46],["antes",245.22],["de",245.5],["que",245.68],["se",245.76],["te",245.9],["note",246],["la",246.2],["sonrisa",246.38],["pero",247.36],["entonces",247.6],["te",248.02],["asalta",248.36],["una",248.72],["duda",248.98],["y",249.94],["si",250.06],["lo",250.18],["has",250.34],["entendido",250.46],["mal",250.94],["siempre",251.82],["que",252.2],["hablais",252.36],["tu",253.12],["sales",253.18],["pensando",253.38],["que",253.9],["lo",254.14],["has",254.28],["hecho",254.42],["fatal",254.6],["que",255.5],["has",255.6],["dicho",255.74],["alguna",255.96],["tonteria",256.3],["que",257.3],["seguro",257.4],["que",257.78],["le",257.98],["has",258.12],["caido",258.26],["mal",258.56],["pues",259.32],["resulta",259.56],["que",260.18],["esto",260.36],["tambien",260.68],["le",261.12],["pasa",261.32],["a",261.58],["casi",261.8],["todo",262.04],["el",262.38],["mundo",262.6],["en",263.54],["2018",263.72],["erica",265.08],["boothby",265.26],["y",265.76],["su",265.92],["equipo",266.02],["entre",266.62],["la",266.86],["universidad",267.02],["de",267.58],["yale",267.74],["y",268],["otras",268.3],["universidades",268.52],["juntaron",269.64],["a",270.14],["desconocidos",270.26],["para",270.88],["que",271.18],["charlaran",271.32],["un",271.88],["rato",272],["al",272.96],["terminar",273.12],["a",273.92],["cada",274],["uno",274.16],["le",274.44],["preguntaron",274.58],["dos",275.16],["cosas",275.46],["cuanto",276.52],["le",276.9],["habia",277.04],["gustado",277.24],["la",277.6],["otra",277.88],["persona",278.08],["y",279],["cuanto",279.12],["creia",279.6],["que",279.98],["le",280.14],["habia",280.28],["gustado",280.5],["el",280.9],["a",281.26],["la",281.48],["otra",281.58],["persona",281.82],["y",282.32],["una",283.1],["y",283.4],["otra",283.62],["vez",283.82],["pasaba",284.14],["lo",284.64],["mismo",284.78],["la",285.66],["gente",285.88],["gustaba",286.16],["mas",286.68],["de",287.04],["lo",287.2],["que",287.28],["creia",287.4],["mucho",288.16],["mas",288.6],["pasaba",289.5],["en",289.88],["conversaciones",290.02],["de",290.68],["cinco",290.92],["minutos",291.26],["y",291.98],["pasaba",292.28],["incluso",292.66],["entre",292.94],["companeros",293.28],["de",293.9],["residencia",294.04],["que",294.64],["convivian",294.82],["durante",295.38],["meses",295.62],["lo",296.78],["llamaron",296.98],["la",297.44],["brecha",297.82],["de",298.2],["agrado",298.38],["despues",299.34],["de",299.62],["hablar",299.84],["con",300.02],["alguien",300.26],["tu",300.9],["cabeza",300.96],["repasa",301.26],["todos",301.76],["tus",302.18],["fallos",302.46],["pero",303.34],["la",303.6],["otra",303.76],["persona",303.94],["no",304.46],["estaba",304.7],["pendiente",305.04],["de",305.58],["tus",305.76],["fallos",305.9],["estaba",306.7],["pendiente",307.14],["de",307.72],["lo",307.9],["bien",308.04],["que",308.3],["se",308.52],["lo",308.66],["estaba",308.76],["pasando",309.08],["tercera",310.28],["hora",310.92],["educacion",311.64],["fisica",312.02],["y",313.18],["aqui",313.44],["te",313.7],["llevas",313.9],["el",314.26],["primer",314.4],["golpe",314.74],["del",315.08],["dia",315.36],["estais",316.12],["eligiendo",316.5],["equipos",317.02],["y",317.94],["dani",318.04],["que",318.6],["es",318.7],["de",318.88],["tus",318.98],["mejores",319.1],["amigos",319.44],["te",320.24],["elige",320.36],["el",320.7],["ultimo",320.9],["y",321.78],["le",321.9],["oyes",322],["pensar",322.2],["uf",322.6],["es",323.3],["malisimo",323.72],["jugando",324.8],["te",326],["duele",326.14],["te",326.96],["duele",327.16],["de",327.5],["verdad",327.64],["durante",328.62],["un",329],["rato",329.14],["no",329.44],["quieres",329.64],["ni",329.94],["mirarle",330.18],["pero",331.14],["luego",331.34],["en",331.92],["el",332.04],["vestuario",332.16],["dani",333.16],["se",333.38],["sienta",333.6],["a",333.96],["tu",334.1],["lado",334.14],["y",334.74],["le",335.06],["oyes",335.16],["pensar",335.4],["otra",335.82],["cosa",336.1],["ojala",337.06],["supiera",337.48],["que",337.9],["es",338.08],["la",338.2],["unica",338.34],["persona",338.6],["con",339.04],["la",339.32],["que",339.42],["puedo",339.52],["hablar",339.74],["de",340.02],["lo",340.2],["de",340.3],["mis",340.42],["padres",340.56],["te",341.52],["quedas",341.74],["mirandole",342.02],["el",343.18],["se",343.36],["ata",343.58],["las",343.72],["zapatillas",343.92],["como",344.44],["si",344.76],["nada",344.98],["y",345.5],["tu",345.6],["entiendes",345.76],["algo",346.32],["que",347.18],["alguien",347.34],["puede",347.58],["pensar",347.9],["que",348.34],["juegas",348.54],["fatal",348.9],["al",349.36],["futbol",349.56],["y",350.08],["a",350.7],["la",350.78],["vez",350.84],["pensar",351.42],["que",351.76],["eres",351.98],["la",352.14],["persona",352.32],["mas",352.68],["importante",353.1],["de",353.78],["su",354.02],["vida",354.16],["las",354.98],["dos",355.22],["cosas",355.52],["a",355.92],["la",356.14],["vez",356.2],["la",356.98],["gente",357.16],["no",357.38],["piensa",357.62],["de",357.96],["ti",358.12],["una",358.28],["sola",358.52],["cosa",358.8],["salida",360],["del",360.52],["instituto",360.74],["vas",361.76],["andando",362.04],["a",362.46],["casa",362.58],["y",363.4],["empiezas",363.56],["a",364.04],["darte",364.2],["cuenta",364.42],["de",364.74],["algo",365],["raro",365.24],["desde",366.12],["que",366.4],["te",366.64],["has",366.78],["levantado",366.9],["has",367.9],["oido",367.92],["muchisimos",368.14],["pensamientos",368.92],["bonitos",369.6],["sobre",370.12],["ti",370.42],["que",371.18],["explicas",371.26],["bien",371.72],["que",372.46],["eres",372.58],["buen",372.76],["amigo",373.02],["que",373.78],["haces",373.86],["reir",374.12],["que",374.96],["tienes",374.98],["buena",375.24],["letra",375.52],["que",376.34],["hueles",376.42],["bien",376.64],["eso",377.32],["lo",377.5],["penso",377.66],["alguien",377.98],["en",378.24],["el",378.38],["pasillo",378.52],["y",378.94],["todavia",379.12],["no",379.52],["sabes",379.76],["quien",380.04],["pero",380.88],["nadie",381.1],["te",381.52],["lo",381.8],["ha",381.94],["dicho",382],["en",382.22],["voz",382.44],["alta",382.58],["ni",383.38],["una",383.7],["sola",383.98],["vez",384.3],["en",385.06],["toda",385.3],["tu",385.62],["vida",385.88],["por",386.82],["que",387],["en",388.08],["2021",388.38],["xuan",389.76],["zhao",390.02],["y",390.28],["nicholas",390.54],["epley",390.91],["en",391.28],["la",391.56],["universidad",391.66],["de",392.22],["chicago",392.34],["estudiaron",393.34],["justo",393.6],["eso",394.06],["pidieron",395],["a",395.38],["cientos",395.64],["de",395.88],["personas",396.12],["que",396.52],["escribieran",396.76],["un",397.28],["cumplido",397.46],["sincero",397.9],["a",398.48],["alguien",398.62],["que",398.82],["conocian",399],["y",399.54],["que",399.94],["adivinaran",400.06],["como",400.62],["se",400.92],["iba",401.16],["a",401.34],["sentir",401.46],["la",401.74],["otra",402.04],["persona",402.22],["al",402.72],["recibirlo",402.88],["y",403.88],["casi",404.08],["todos",404.32],["se",404.7],["equivocaban",405.06],["hacia",405.7],["abajo",405.94],["pensaban",406.82],["que",407.26],["el",407.46],["cumplido",407.58],["iba",408.02],["a",408.26],["dar",408.44],["un",408.52],["poco",408.68],["de",408.9],["verguenza",409.06],["que",409.88],["iba",410.06],["a",410.26],["sonar",410.4],["raro",410.66],["que",411.3],["la",411.46],["otra",411.58],["persona",411.74],["no",412.22],["le",412.48],["iba",412.64],["a",412.84],["dar",413],["importancia",413.08],["pero",414.22],["la",414.5],["otra",414.68],["persona",414.86],["en",415.56],["realidad",415.78],["se",416.18],["sentia",416.7],["mucho",417.14],["mejor",417.56],["de",417.98],["lo",418.14],["que",418.26],["habian",418.36],["calculado",418.66],["o",419.74],["sea",420.02],["que",420.74],["todos",420.8],["pensamos",421.12],["cosas",421.72],["bonitas",422.12],["de",422.6],["los",422.78],["demas",422.9],["y",423.2],["nos",423.92],["las",424.08],["callamos",424.28],["porque",425.16],["creemos",425.52],["que",425.98],["no",426.24],["van",426.5],["a",426.66],["servir",426.78],["de",427.04],["nada",427.28],["llegas",428.4],["a",428.94],["casa",429.06],["tu",429.8],["madre",429.94],["esta",430.16],["en",430.5],["la",430.64],["cocina",430.76],["otra",431.42],["vez",431.9],["y",432.7],["oyes",432.96],["hoy",433.88],["viene",434.04],["mas",434.3],["contento",434.48],["que",435.42],["ganas",435.52],["tengo",435.84],["de",436.12],["que",436.28],["me",436.38],["cuente",436.52],["algo",436.8],["pero",437.56],["no",437.78],["le",437.94],["pregunto",438.04],["que",438.54],["luego",438.82],["dice",439.04],["que",439.36],["soy",439.5],["pesada",439.68],["te",440.8],["sientas",440.96],["en",441.36],["la",441.52],["mesa",441.62],["y",441.88],["le",442.52],["cuentas",442.66],["lo",443.04],["de",443.18],["la",443.28],["exposicion",443.4],["y",444],["ella",444.68],["se",444.92],["rie",445.14],["y",445.5],["por",446.06],["dentro",446.24],["a",447.04],["la",447.06],["vez",447.16],["oyes",447.84],["ojala",448.88],["esto",449.32],["durara",449.62],["siempre",450.02],["las",451.42],["doce",451.74],["menos",452.04],["cinco",452.34],["de",452.64],["la",452.82],["noche",452.92],["estas",453.74],["en",454.02],["la",454.24],["cama",454.36],["mirando",454.98],["el",455.36],["techo",455.5],["te",456.32],["quedan",456.44],["cinco",456.74],["minutos",457.12],["de",457.58],["poder",457.84],["y",458.24],["te",458.78],["das",458.88],["cuenta",459.06],["de",459.34],["que",459.58],["tenias",459.66],["miedo",460.02],["de",460.48],["lo",460.66],["que",460.78],["ibas",460.9],["a",461.14],["oir",461.36],["pensabas",462.12],["que",462.6],["ibas",462.74],["a",462.96],["descubrir",463.1],["que",463.58],["la",463.76],["gente",463.88],["se",464.16],["rie",464.42],["de",464.76],["ti",464.88],["que",465.4],["te",465.64],["critica",465.78],["que",466.74],["nadie",466.84],["te",467.2],["soporta",467.42],["y",468.04],["no",468.78],["la",469.32],["mayoria",469.54],["ni",469.88],["pensaba",470.22],["en",470.8],["ti",471],["y",471.16],["los",471.72],["que",471.88],["si",472.06],["pensaban",472.28],["en",472.78],["ti",472.96],["pensaban",473.18],["cosas",474.1],["mucho",474.4],["mejores",474.96],["de",475.42],["las",475.64],["que",475.78],["tu",475.96],["te",476.2],["dices",476.38],["a",476.68],["ti",476.86],["mismo",476.92],["medianoche",478.2],["silencio",479.5],["se",480.66],["acabo",480.92],["martes",481.88],["recreo",482.9],["ya",483.8],["no",484.02],["puedes",484.18],["oir",484.56],["nada",484.92],["vuelves",485.78],["a",486.2],["estar",486.32],["como",486.6],["todo",486.86],["el",487.2],["mundo",487.42],["sin",487.72],["saber",488.4],["lo",488.72],["que",488.92],["piensan",489.02],["los",489.42],["demas",489.6],["pero",490.44],["ahora",490.76],["sabes",491.06],["una",491.46],["cosa",491.68],["que",492.52],["lo",492.66],["bonito",492.78],["que",493.1],["piensan",493.3],["de",493.74],["ti",493.88],["casi",494.1],["nunca",494.58],["te",495.02],["lo",495.28],["van",495.38],["a",495.54],["decir",495.66],["asi",495.94],["que",496.72],["decides",497.22],["empezar",497.62],["tu",498.26],["te",499.28],["acercas",499.52],["a",499.94],["dani",500.1],["oye",500.9],["que",501.62],["sepas",501.78],["que",502.06],["me",502.28],["puedes",502.42],["contar",502.66],["lo",502.98],["que",503.24],["sea",503.34],["siempre",504.04],["el",505.34],["te",505.52],["mira",505.74],["raro",505.92],["y",506.32],["luego",506.92],["sonrie",507.16],["no",508.3],["dice",508.42],["nada",508.6],["pero",509.3],["no",509.5],["hace",509.7],["falta",509.9],["y",510.18],["despues",510.86],["respiras",511.26],["hondo",511.91],["y",512.56],["vas",513.14],["hacia",513.32],["el",513.6],["banco",513.74],["del",514.02],["fondo",514.22],["ella",515.24],["te",515.48],["ve",515.72],["llegar",515.8],["se",516.72],["pone",516.86],["roja",517.08],["y",517.5],["esta",518.04],["vez",518.28],["no",518.52],["necesitas",518.98],["leerle",519.54],["la",520.02],["mente",520.18],["para",520.46],["saber",520.72],["por",521],["que",521.26],["hola",521.7],["dices",522.42],["me",523.4],["gusta",523.54],["como",523.76],["te",524.06],["ries",524.24],["y",524.62],["tu",525.34],["si",525.92],["pudieras",526.1],["escuchar",526.56],["lo",527.08],["que",527.18],["la",527.28],["gente",527.4],["piensa",527.64],["de",528.16],["ti",528.32],["durante",528.48],["un",528.74],["dia",529.12],["lo",530.04],["harias",530.26],["o",530.58],["preferirias",531.28],["no",532.02],["saberlo",532.24],["te",533.3],["leo",533.44],["en",533.68],["los",533.76],["comentarios",533.86]],Ph=(n,e=0)=>{for(let[t,i]of ME)if(i>=e&&t===n)return i;return e};var Oa=(n,e,t=200,i=200)=>{let s=new H(new _e(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},Tt=(n,e={})=>{let{w:t=512,h:i=200,bg:s="#FBF7EC",fg:r="#2A2A34",size:o=64}=e;return Ae(t,i,a=>{a.clearRect(0,0,t,i),a.fillStyle=s,a.beginPath(),a.roundRect(6,6,t-12,i-12,26),a.fill(),a.fillStyle=r,a.font=`900 ${o}px Fraunces`,a.textAlign="center",a.textBaseline="middle",n.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(n.length-1)/2)*o*1.1))})};function hf(n="#E9B44C"){let e=new le;e.add(w(2.4,2.4,9,R(n,{roughness:.5}),0,1.5,0));for(let i=0;i<6;i++)for(let s of[-1,1])e.add(w(.02,.8,1.1,R("#1A2233",{roughness:.1,metalness:.5}),s*1.21,2,-3.6+i*1.4));e.add(w(2.2,1,.02,R("#1A2233",{roughness:.1}),0,2,4.51));let t=w(.02,1.8,1,R("#2A2A34"),1.22,1.2,2.8);e.add(t);for(let i of[-3,3])for(let s of[-1,1]){let r=new H(new tt(.45,.45,.3,20),R("#1A1A20"));r.rotation.z=Math.PI/2,r.position.set(s*1.1,.45,i),e.add(r)}return e}function SE(n,e=.5){let t=new le,i=Ae(1024,256,r=>{r.clearRect(0,0,1024,256);let o=Oe(77);for(let a=0;a<70;a++){let l=r.createRadialGradient(o()*1024,128+(o()-.5)*90,0,0,0,0)}for(let a=0;a<40;a++){let l=o()*1024,c=128+(o()-.5)*70,h=40+o()*80,d=r.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,["rgba(200,180,255,.22)","rgba(255,220,200,.2)","rgba(170,200,255,.2)"][a%3]),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,1024,256)}r.fillStyle="rgba(20,10,30,.35)";for(let a=0;a<18;a++)r.beginPath(),r.ellipse(o()*1024,128+(o()-.5)*30,40+o()*60,6+o()*8,(o()-.5)*.3,0,7),r.fill();for(let a=0;a<2600;a++){let l=128+(o()+o()+o()-1.5)*70;r.fillStyle=`rgba(255,255,255,${.3+o()*.7})`;let c=o()<.03?2.4:1.2;r.fillRect(o()*1024,l,c,c)}}),s=new H(new _e(400,100),new qe({map:i,transparent:!0,depthWrite:!1,fog:!1,blending:Mn}));return s.position.set(0,60,-150),s.rotation.z=e,t.add(s),n.add(t),t}function TE(n,e=0,t=-1){for(let i=0;i<4;i++){let s=w(5,.22,.6,R("#5A3E2A",{roughness:1}),e,.1,t-i*1.1);s.receiveShadow=!0,n.add(s);for(let r=0;r<7;r++){let o=new H(new hn(.16,.35,6),R(["#4F7A44","#6E9A50"][r%2]));o.position.set(e-2.1+r*.7,.38,t-i*1.1),n.add(o)}}}function Ih(n,e=40,t=3,i=[-12,12,-40,4]){let s=Oe(t),r=Ae(256,512,o=>{o.clearRect(0,0,256,512),o.strokeStyle="#3E6A34",o.lineWidth=6,o.beginPath(),o.moveTo(128,512);for(let a=512;a>0;a-=20)o.lineTo(128+Math.sin(a*.05)*40,a);o.stroke();for(let a=0;a<60;a++){o.fillStyle=["#4F8A44","#6EA850","#3E6A34"][a%3],o.beginPath();let l=s()*512;o.ellipse(128+Math.sin(l*.05)*40+(s()-.5)*60,l,16,10,s()*3,0,7),o.fill()}});for(let o=0;o<e;o++){let a=1.5+s()*4,l=Le(r,a*.5,a),c=s()<.5?-1:1;l.position.set(c*(8.8+s()*.4),a/2,i[2]+s()*(i[3]-i[2])),l.rotation.y=c*-Math.PI/2,n.add(l)}}function df(n,e=200,t=5,i=10,s=30,r=2){let o=Oe(t),a=Ae(64,64,l=>{l.clearRect(0,0,64,64),l.fillStyle="#6E9A50";for(let c=0;c<7;c++)l.beginPath(),l.moveTo(10+c*7,64),l.lineTo(14+c*7+(c-3)*3,10+c%3*8),l.lineTo(18+c*7,64),l.fill()});for(let l=0;l<e;l++){let c=Le(a,.5,.5);c.position.set((o()-.5)*i,.25,r-o()*s),c.rotation.y=o()*3,n.add(c)}}Ee.pasteleria=n=>{n.fog=new Re("#F3D2C0",.02),n.add(hi(16,14,"#F2E6DA","#E2CFC0",8)),n.add(w(16,5,.3,R("#E89AA8"),0,2.5,-3.2));for(let i=0;i<6;i++)n.add(w(.12,5,.05,R("#F6C2CC"),-6+i*2.4,2.5,-3.02));n.add(w(5.4,1,.9,R("#8A5A3C"),0,.5,-1.2)),n.add(w(5.5,.08,1,R("#F4EEE6"),0,1.04,-1.2)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.1,-3)),n.add(w(3.6,.1,.5,R("#F4EEE6"),0,2.9,-3));let e=Le(Tt(["PASTELER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-3),n.add(e),n.add(new we("#FFF0F0","#A07060",1));let t=Ke("#FFE6C8",1.8,[3,8,6],8,30);n.add(t);for(let i=0;i<3;i++){let s=new nt("#FFD8A8",5,7,1.6);s.position.set(-2+i*2,3.4,-.5),n.add(s)}};Ee.espacio=n=>{n.background=new ae("#05060E"),En(n,2600,200,3),n.add(new we("#8FA8FF","#101020",.5));let e=new Pi("#FFF4E0",3.2);e.position.set(-10,6,8),n.add(e)};Ee.aula=n=>{n.fog=new Re("#E8DCC8",.02),n.add(hi(16,16,"#C9B89A","#BBA98A",10)),n.add(w(16,5,.3,R("#E8DCC0"),0,2.5,-3.6)),n.add(w(4.4,1.8,.06,R("#2F5A48"),0,2.3,-3.42)),n.add(w(4.6,.1,.2,R("#8E6242"),0,1.36,-3.35));let e=Le(Ae(512,200,t=>{t.clearRect(0,0,512,200),t.fillStyle="#F4F0E4",t.font="700 60px Caveat",t.fillText("EXAMEN  \u2014  2 + 2 = ?",30,90),t.fillText("x\xB2 \u2212 9 = 0",60,170)}),3.4,1.3);e.position.set(0,2.35,-3.38),n.add(e),n.add(new we("#FFFFFF","#9A8A70",1)),n.add(Ke("#FFE8C8",2.2,[-6,8,6],10,40))};Ee.ruaV=(n,e)=>{so(n,{seed:e.seed||0,night:e.night,dusk:e.dusk}),e.selva&&(Ih(n,60,4),df(n,260,6,9,40))};Ee.apagon=(n,e)=>{n.fog=new Re("#0A0C18",.03),dt(n,-170,500,240,[[0,"#04050C"],[.6,"#0C1028"],[1,"#1A1A34"]]),En(n,1800,200,4),Ia(n,!0);let t=6,i=0;for(;t>-60;){let s=7+i*37%5;n.add(ji(300+i,{x:13,z:t-s/2,w:8,d:s,floors:5,side:-1,night:!0,lit:0})),n.add(ji(400+i,{x:-13,z:t-s/2,w:8,d:s,floors:6,side:1,night:!0,lit:0})),t-=s,i++}n.add(new we("#5A64A8","#141420",.5)),n.add(Ke("#8A9AE0",.7,[-10,20,10],30,90))};Ee.azotea=(n,e)=>{n.background=new ae("#03040A"),n.fog=new Re("#060814",.008),En(n,4200,200,9),SE(n,e.ang??.45),Qn(n,-60,300,30,["#0E1020","#121428","#161830"],!1,7);let t=w(16,.3,12,R("#3A3A44",{roughness:1}),0,-.15,-2);t.receiveShadow=!0,n.add(t),n.add(w(16,.5,.2,R("#4A4A54"),0,.25,-8)),n.add(w(1.4,1.2,1.4,R("#4A4A54"),4.5,.6,-5)),n.add(new we("#6A78C8","#141420",.55)),n.add(Ke("#9AAAF0",.6,[-6,10,6],12,40))};Ee.panaderia=n=>{Ee.pasteleria(n);let e=Le(Tt(["PANADER\xCDA"],{bg:"#6C4A2C",fg:"#FFE7B8",size:80,w:768,h:160}),2.8,.58);e.position.set(0,3.9,-2.98),n.add(e)};Ee.metro=n=>{n.background=new ae("#0A0C10"),n.fog=new Re("#0C1014",.07);let e=R("#4A4E54",{roughness:.9,side:en}),t=new H(new tt(3.2,3.2,60,32,1,!0,0,Math.PI),e);t.rotation.set(Math.PI/2,0,Math.PI/2),t.rotation.order="YXZ";let i=new le,s=new H(new tt(3.2,3.2,60,32,1,!0),e);s.rotation.x=Math.PI/2,s.position.set(0,1.2,-20),i.add(s),n.add(i);let r=w(6.4,.1,60,R("#2A2C30"),0,-.05,-20);n.add(r);for(let o of[-.75,.75])n.add(w(.08,.12,60,R("#8A8E98",{metalness:.8,roughness:.3}),o,.1,-20));for(let o=0;o<40;o++)n.add(w(2.2,.08,.2,R("#3A2E26"),0,.03,5-o*1.5));for(let o=0;o<6;o++){let a=new nt("#FFE0A0",4,8,1.8);a.position.set(2.2,3,2-o*8),n.add(a);let l=it("#FFE0A0",.5,.9);l.position.copy(a.position),n.add(l)}n.add(new we("#8A90A0","#202024",1.1))};Ee.bosque=(n,e)=>{n.fog=new Re(e.nieve?"#E8EEF4":"#C8D0B8",.025),dt(n,-100,500,200,e.nieve?[[0,"#9AB0C8"],[1,"#EEF2F6"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Oa(n,e.nieve?"#F2F4F8":"#6E8A48");let t=Oe(14);for(let i=0;i<26;i++)kt(n,(t()-.5)*30,-4-t()*22,1.2+t()*.8,e.nieve?["#4A6A5A","#5A7A6A","#E8EEF4","#FFFFFF"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],i);if(e.ruina){let i=ji(55,{x:6,z:-14,w:10,d:8,floors:5,side:-1,night:!1,lit:0,col:"#A8A49A"});n.add(i),Ih(n,0)}n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(Ke("#FFE8C0",2.4,[-10,14,8],18,60))};Ee.rio=(n,e)=>{Ee.parque(n,e);let t=new H(new _e(60,3.4),new xe({color:"#4A8AB0",roughness:.08,metalness:.3}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-3.6),n.add(t)};Ee.playa=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#F2A880":"#CFE8F0",.006),dt(n,-200,900,300,t?[[0,"#3A3A78"],[.45,"#C86A88"],[.75,"#F6A060"],[1,"#FFD890"]]:[[0,"#4F9AD8"],[.6,"#9FD0E8"],[1,"#E8F4F0"]]);let i=it(t?"#FFC070":"#FFFFF0",t?30:16,.9);i.position.set(0,t?6:40,-220),i.material.fog=!1,n.add(i);let s=Oa(n,"#E8D4A0"),r=new H(new _e(800,400),new xe({color:t?"#5A6AA0":"#3A9AC0",roughness:.12,metalness:.4}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-206),n.add(r);let o=w(800,.02,.6,R("#F4F8FA"),0,.04,-6.2);if(n.add(o),n.userData.foam=o,e.roca){let a=new H(new Fi(1.1,0),R("#7A6A60"));a.scale.set(1.4,.55,1),a.position.set(0,.25,-1),a.castShadow=a.receiveShadow=!0,n.add(a)}n.add(new we(t?"#FFC8A8":"#E9F4FF","#C8A878",1)),n.add(Ke(t?"#FFB070":"#FFF0D0",t?2.2:3,[0,t?5:16,-14],16,60))};Ee.svalbard=n=>{n.fog=new Re("#C8D8E8",.02),dt(n,-200,700,260,[[0,"#4A5A8A"],[.6,"#A8B8D8"],[1,"#E8EEF8"]]),Oa(n,"#F4F6FA");let e=Oe(19);for(let l=0;l<8;l++){let c=new H(new hn(10+e()*12,10+e()*10,7),R("#E8EEF4",{roughness:1}));c.position.set(-40+l*12,4,-40-e()*30),n.add(c)}let t=new H(new gt(14,32,16,0,Math.PI*2,0,Math.PI/2),R("#EEF2F6",{roughness:1}));t.scale.y=.5,t.position.set(0,0,-20),n.add(t);let i=w(3,4.4,6,R("#9A9EA4",{roughness:.8}),0,1.6,-6.5);i.rotation.x=-.18,n.add(i);let s=w(1.4,2.2,.1,R("#4A4E56",{metalness:.5}),0,1.1,-3.45);n.add(s);let r=Nt(2.6,1,"#7FE8FF",1.3);r.position.set(0,3.1,-3.3),r.rotation.x=-.18,n.add(r);let o=it("#7FE8FF",4,.35);o.position.set(0,3.1,-3),n.add(o);let a=[];for(let l=0;l<300;l++){let c=it("#FFFFFF",.05,.9);n.add(c),a.push([c,e()*20-10,e()*8,e()*12-8,e()])}n.userData.snow=a,n.add(new we("#D8E8FF","#8A9AB0",1.1)),n.add(Ke("#F0F4FF",1.6,[-8,10,8],16,50))};Ee.huerto=(n,e)=>{Ee.parque(n,e),TE(n,0,-1.4)};Ee.biblio=n=>{n.fog=new Re("#4A3A2A",.03),n.add(Kn(18,14,"#6D4A33")),n.add(w(18,6,.3,R("#5A3E2A"),0,3,-3.4));let e=Oe(8);for(let s=0;s<5;s++){n.add(w(14,.06,.4,R("#3E2A1C"),0,.5+s*.9,-3.05));for(let r=0;r<60;r++){let o=.1+e()*.1,a=.5+e()*.3;n.add(w(o,a,.3,R(["#8A3A2A","#2F5A48","#3A4F7A","#C9A06A","#6A3A5A"][r%5]),-6.8+r*.23,.5+s*.9+a/2+.03,-3.05))}}n.add(new we("#FFE8C8","#3A2A1C",.7));let t=new nt("#FFC880",10,8,1.6);t.position.set(0,2.6,.5),n.add(t);let i=it("#FFC880",1,.4);i.position.copy(t.position),n.add(i)};Ee.hotel=n=>{n.fog=new Re("#E8D8C0",.02),n.add(Kn(18,14,"#8A5A3A")),n.add(w(18,6,.3,R("#C8B898"),0,3,-3.4));for(let i of[-3,3]){n.add(w(2.4,2.6,.05,R("#9FC8E8",{roughness:.05,metalness:.3,transparent:!0,opacity:.35}),i,2.4,-3.22));let s=Le(Ae(256,256,r=>{r.clearRect(0,0,256,256),r.strokeStyle="#FFFFFF",r.lineWidth=3;for(let o=0;o<9;o++)r.beginPath(),r.moveTo(128,128),r.lineTo(128+Math.cos(o*.7)*140,128+Math.sin(o*.7)*140),r.stroke()}),2.4,2.4);s.position.set(i,2.4,-3.18),n.add(s)}let e=w(3.2,.6,2.4,R("#F4F0E4"),0,.3,-1.6);n.add(e),n.add(w(3.3,1.4,.2,R("#6A3A2A"),0,.7,-2.8)),Ih(n,0);let t=Le(Ae(256,256,i=>{i.clearRect(0,0,256,256);for(let s=0;s<90;s++)i.fillStyle=["#4F8A44","#6EA850"][s%2],i.beginPath(),i.ellipse(__sr()*256,__sr()*120,12,8,1,0,7),i.fill()}),3,3);t.position.set(3,3.6,-3.15),n.add(t),n.add(new we("#FFF0E0","#8A6A4A",1)),n.add(Ke("#FFE0B0",2,[-4,8,6],10,30))};Ee.selva=n=>{n.fog=new Re("#7AA870",.05),dt(n,-100,400,200,[[0,"#4A7A5A"],[1,"#B8D8A0"]]),Oa(n,"#3E5A2A");let e=Oe(23);for(let t=0;t<40;t++)kt(n,(e()-.5)*26,-2-e()*18,1.6+e(),["#1E4A24","#2E6A34","#4A8A3E","#7AB048"],t);df(n,160,9,12,12,3),n.add(new we("#D8F0C8","#2A3A1A",.9)),n.add(Ke("#FFF0C0",2.2,[-6,14,4],14,50))};Ee.desierto=n=>{Ee.sabana(n,{})};var Lh=(n,e,t=200,i=200)=>{let s=new H(new _e(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s};var bE=(n,e={})=>{let{w:t=512,h:i=360,size:s=92,col:r="#1E2A55"}=e,o=Array.isArray(n)?n:[n];return Ae(t,i,a=>{a.fillStyle="#FBF8EE",a.fillRect(0,0,t,i),a.strokeStyle="#D8D0BC",a.lineWidth=4,a.strokeRect(6,6,t-12,i-12),a.fillStyle=r,a.font=`700 ${s}px Caveat`,a.textAlign="center",a.textBaseline="middle",o.forEach((l,c)=>a.fillText(l,t/2,i/2+(c-(o.length-1)/2)*s*1.05))})};function uf(n,e=.9,t={}){let i=bE(n,t),s=new H(new _e(e,e*(t.h||360)/(t.w||512)),new xe({map:i,roughness:.9,emissive:"#FFFFFF",emissiveMap:i,emissiveIntensity:t.glow??.25}));return s.renderOrder=3,s}function Ba(n={}){let{w:e=10,h:t=7,col:i="#E8C8A0",win:s=[0,2.6,2,1.8],night:r=!1,inner:o="#F2D49A",lit:a=r,brick:l=!1,sill:c=.9}=n,h=new le,[d,u,p,g]=s,E=()=>l?new xe({map:La(i,3,3),roughness:.95}):R(i,{roughness:.9}),m=d-p/2+e/2,f=e/2-(d+p/2),v=u-g/2,A=t-(u+g/2);h.add(w(m,t,.3,E(),-e/2+m/2,t/2,0)),h.add(w(f,t,.3,E(),e/2-f/2,t/2,0)),h.add(w(p,v,.3,E(),d,v/2,0)),h.add(w(p,A,.3,E(),d,t-A/2,0));let y=R("#F4F0E4");for(let[B,z,X,j]of[[d-p/2,u,.1,g+.1],[d+p/2,u,.1,g+.1],[d,u+g/2,p+.2,.1],[d,u,.05,g]])h.add(w(X,j,.36,y,B,z,0));h.add(w(p+.4,.1,.5,y,d,u-g/2-.03,.12));let D=3.2,C=R(o,{roughness:.9});h.add(w(p+3,t,.2,C,d,t/2,-D)),h.add(w(.2,t,D,C,d-p/2-1.4,t/2,-D/2)),h.add(w(.2,t,D,C,d+p/2+1.4,t/2,-D/2)),h.add(w(p+3,.2,D,R("#8A6A4A"),d,v-c,-D/2)),h.add(w(p+3,.2,D,C,d,u+g/2+.5,-D/2));let b=new nt("#FFC880",a?9:2.5,7,1.4);b.position.set(d,u+.6,-1.2),h.add(b);let F=Nt(p+2.6,t*.6,"#FFD9A0",a?.35:.08);F.position.set(d,u,-D+.12),h.add(F);let S=w(p-.04,g,.06,R("#E8E2D2",{roughness:.8}),d,u,.1);S.castShadow=!1,h.add(S);let _=[];for(let B=0;B<10;B++){let z=w(p-.04,.015,.07,"#B8B0A0",d,0,.11,!1);h.add(z),_.push([z,B])}let I=B=>{let z=Math.max(.001,g*B);S.scale.y=z/g,S.position.y=u+g/2-z/2,S.visible=B>.01,_.forEach(([X,j])=>{let Z=u+g/2-(j+.5)*g/10;X.visible=B>.01&&Z>u+g/2-z,X.position.y=Z})};return I(0),h.userData={persiana:I,luz:B=>{b.intensity=B?9:2.5,F.material.emissiveIntensity=B?.35:.08},win:s,lamp:b},h.children.forEach(B=>{B.castShadow=B.castShadow??!0,B.receiveShadow=!0}),h}function ao(n={}){let{col:e="#E8C8A0",roof:t="#A8442E",w:i=7,h:s=5.6,d:r=7,door:o="#3E6A5A",night:a=!1}=n,l=new le;l.add(w(i,s,r,R(e,{roughness:.9}),0,s/2,-r/2));let c=new H(new tt(.01,i*.62,2.4,4,1),R(t,{roughness:.8}));c.rotation.y=Math.PI/4,c.scale.set(1,1,r/i),c.position.set(0,s+1.2,-r/2),c.castShadow=!0,l.add(c),l.add(w(1.1,2.1,.1,R(o),0,1.05,.02)),l.add(w(.08,.08,.08,"#E9B44C",.38,1,.1));let h=()=>new xe({color:"#1A2233",emissive:a?"#FFC880":"#000",emissiveIntensity:a?.7:0,roughness:.1,metalness:.3});for(let[d,u]of[[-2.2,1.6],[2.2,1.6],[-2.2,4.1],[2.2,4.1]])l.add(w(1.3,1.2,.06,h(),d,u,.03)),l.add(w(1.5,.1,.2,"#F4F0E4",d,u-.65,.08));return l.add(w(2,.2,1.2,R("#B8AC9D"),0,.1,.6)),l.children.forEach(d=>{d.castShadow=!0,d.receiveShadow=!0}),l}function Dh(n=4){let e=new le,t=Oe(n*7);for(let i=0;i<n*3;i++){let s=new H(new gt(.42+t()*.12,12,10),R(["#3E6A34","#4F7A44","#5A8A48"][i%3],{roughness:1}));s.position.set(-n/2+i/3+.15,.5+t()*.25,(t()-.5)*.2),s.castShadow=!0,e.add(s)}return e}function ff(n=8,e="#E8E2D2"){let t=new le;for(let i=0;i<=n*4;i++)t.add(w(.1,1.3,.05,R(e),-n/2+i*.25,.65,0));for(let i of[.35,1.05])t.add(w(n,.08,.06,R(e),0,i,-.04));return t.children.forEach(i=>i.castShadow=!0),t}function Ha(){let n=new le,e=Oe(4);for(let t=0;t<7;t++){let i=new H(new gt(.35,12,10),R("#3E6A34",{roughness:1}));i.position.set((e()-.5)*1.4,.35+e()*.3,(e()-.5)*.5),n.add(i)}for(let t=0;t<16;t++){let i=new H(new gt(.08,10,8),R(["#D8344A","#E8667F"][t%2],{roughness:.5}));i.position.set((e()-.5)*1.5,.55+e()*.4,(e()-.5)*.6+.2),n.add(i)}return n.children.forEach(t=>t.castShadow=!0),n}function wE(){let n=new le;n.add(w(2.2,2,1.8,R("#8A6A4A",{roughness:.9}),0,1,0));let e=w(2.6,.12,2.3,R("#5A3E2A"),0,2.12,0);return n.add(e),n.add(w(.8,1.5,.05,R("#5A3E2A"),0,.75,.92)),n.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),n}function pf(){let n=Ae(256,128,t=>{t.fillStyle="#F4F0E4",t.fillRect(0,0,256,128),t.fillStyle="#2A2A34";for(let i=0;i<6;i++)t.beginPath(),t.arc(20+i*44,30+i%2*60,16,0,7),t.fill()}),e=new H(new gt(.16,20,14),new xe({map:n,roughness:.5}));return e.castShadow=!0,e}function mf(n=.6){let e=w(n,n*.8,n,R("#C9A06A",{roughness:.9}),0,n*.4,0);return e.add(w(n*1.01,.06,.15,R("#E8D8A8"),0,n*.4,0)),e}function gf(){let n=new le;n.add(w(.04,1.4,.04,R("#E8667F"),0,.7,0));let e=new H(new gt(.28,16,12),new xe({color:"#FF8AA8",emissive:"#FF6A90",emissiveIntensity:.5}));e.scale.set(1.3,.8,.8),e.position.y=1.5,n.add(e);let t=new H(new rn(.18,.04,8,16,Math.PI*1.2),R("#FF8AA8"));t.position.set(.25,1.75,0),n.add(t);let i=it("#FF9AB8",1.2,.4);return i.position.y=1.5,n.add(i),n}function Ef(n=.9,e=1.2){let t=Ae(360,480,r=>{r.fillStyle="#BFE0F2",r.fillRect(0,0,360,480),r.fillStyle="#FFFFFF",r.beginPath(),r.ellipse(180,270,95,55,0,0,7),r.fill(),r.beginPath(),r.ellipse(270,200,30,50,.5,0,7),r.fill();for(let o of[120,150,210,240])r.fillRect(o,300,16,100);r.fillStyle="#F2C1E0",r.beginPath(),r.moveTo(170,240),r.quadraticCurveTo(80,90,40,140),r.quadraticCurveTo(100,180,170,260),r.fill(),r.fillStyle="#E9B44C",r.beginPath(),r.moveTo(280,160),r.lineTo(300,100),r.lineTo(295,165),r.fill(),r.fillStyle="#7F6BC4",r.font="700 46px Caveat",r.textAlign="center",r.fillText("\xA1VUELA ALTO!",180,455)}),i=new le;i.add(w(n+.08,e+.08,.04,"#2A1E18",0,0,0));let s=new H(new _e(n,e),R("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}function yf(n=.9,e=1.2){let t=Ae(360,480,r=>{r.fillStyle="#1E1A30",r.fillRect(0,0,360,480),r.fillStyle="#E8667F",r.beginPath(),r.arc(180,210,120,0,7),r.fill(),r.fillStyle="#1E1A30",r.beginPath(),r.arc(180,210,40,0,7),r.fill(),r.fillStyle="#F2C14E",r.font="900 60px Fraunces",r.textAlign="center",r.fillText("LOS GRILLOS",180,420)}),i=new le;i.add(w(n+.08,e+.08,.04,"#111",0,0,0));let s=new H(new _e(n,e),R("#fff"));return s.material.map=t,s.position.z=.025,i.add(s),i}var RE=(n,e)=>{Ee.quarto(n,e);let t=Ef();t.position.set(-3,2.8,-2.8),n.add(t)};Ee.cuartoYo=(n,e)=>{RE(n,e);let t=Ba({w:18,h:9,col:e.night?"#7A6A88":"#E8C8A0",win:[1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#F2C8D0"});t.position.set(0,-.2,-6.2),n.add(t),n.userData.her=t;let i=gf();i.position.set(-.4,.4,-8.6),i.scale.setScalar(.9),n.add(i);let s=yf(.7,.9);s.position.set(1.9,2.6,-9.2),n.add(s),e.night&&En(n,600,120,2)};Ee.cuartoElla=(n,e)=>{Ee.sala(n,{wall:"#6E5A9A",night:e.night}),n.add(w(2.4,.45,3.2,R("#6B4A33"),1.7,.25,-1.4)),n.add(w(2.3,.3,3,R("#F3EEE4"),1.7,.6,-1.4)),n.add(w(2.38,.22,2,R("#E8667F",{roughness:.9}),1.7,.8,-.7));let t=gf();t.position.set(-3.2,0,-2.2),n.add(t);let i=yf();i.position.set(-3.6,2.8,-2.8),n.add(i);let s=Ba({w:18,h:9,col:e.night?"#6A5A50":"#D8B890",win:[-1,2.2,1.7,1.6],night:!!e.night,lit:e.lit??!!e.night,inner:"#C8D8E8"});s.position.set(0,-.2,-6.2),n.add(s),n.userData.me=s;let r=Ef(.6,.8);r.position.set(-2.2,2.6,-9.2),n.add(r),e.night&&En(n,600,120,2)};Ee.entreCasas=(n,e)=>{let t=!!e.night;n.background=new ae(t?"#0A0C1E":"#9FC8E8"),n.fog=new Re(t?"#0E1028":"#CFE0EE",.02),dt(n,-60,300,140,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),t&&En(n,1600,120,5),Lh(n,t?"#24301E":"#6E9A50");let i=Ba({w:9,h:8,col:t?"#6A5A50":"#D8B890",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#C8D8E8"});i.position.set(-2.3,0,-1),i.rotation.y=.62,n.add(i);let s=Ba({w:9,h:8,col:t?"#7A6A88":"#E8C8A0",win:[0,4.2,1.7,1.8],night:t,lit:t,inner:"#F2C8D0"});s.position.set(2.3,0,-1),s.rotation.y=-.62,n.add(s),n.userData.me=i,n.userData.her=s;let r=ff(10);r.rotation.y=Math.PI/2,r.position.set(0,0,2),n.add(r),n.add(new we(t?"#6E74C0":"#E9EEFF",t?"#1A1A24":"#6A5A4A",t?.55:1)),n.add(Ke(t?"#9FB0FF":"#FFD29A",t?.5:2.6,[6,14,10],14,40))};Ee.barrio=(n,e)=>{let t=!!e.night,i=!!e.dusk;n.fog=new Re(t?"#1A1A30":i?"#E8A880":"#F2E2C8",.012),dt(n,-120,500,200,t?[[0,"#05060E"],[.6,"#141838"],[1,"#2A2A50"]]:i?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Lh(n,t?"#24301E":"#6E9A50");let s=w(200,.02,6,R(t?"#2A2A30":"#55545C",{roughness:.9}),0,.01,4);s.receiveShadow=!0,n.add(s);let r=w(200,.1,2,R("#B8AC9D"),0,.05,.2);r.receiveShadow=!0,n.add(r);let o=[[-13.5,"#C8D8B0","#5A6E8A"],[-4.5,"#D8B890","#A8442E"],[4.5,"#E8C8A0","#7A4A8A"],[13.5,"#B8D0E0","#A8442E"],[22.5,"#E8D8A8","#5A6E8A"],[-22.5,"#E0B8B0","#3E6A5A"]];for(let[h,d,u]of o){let p=ao({col:d,roof:u,night:t});p.position.set(h,0,-3),n.add(p)}let a=Dh(3);a.position.set(-7.6,0,-1.4),n.add(a);let l=Dh(3);l.position.set(-1.4,0,-1.4),n.add(l);let c=Dh(3);c.position.set(7.6,0,-1.4),n.add(c);for(let h of[-9,0,9,18])kt(n,h,-11,1.4,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(h));Qn(n,-60,300,16,["#B8C8D8","#A8B8C8","#98A8B8"],t,9),n.add(new we(t?"#6E74C0":"#E9EEFF","#6A5A4A",t?.6:1.05)),n.add(Ke(t?"#9FB0FF":i?"#FFB080":"#FFD29A",t?.6:2.8,[-14,16,12],24,70))};Ee.jardin=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#E8A880":"#F2E2C8",.015),dt(n,-100,400,200,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#6FA7D8"],[.6,"#CFE0E8"],[1,"#FFE7BE"]]),Lh(n,"#6E9A50");let i=ff(16);i.rotation.y=Math.PI/2,i.position.set(0,0,-2),n.add(i);let s=Ha();s.position.set(1.6,0,-1.2),n.add(s);let r=Ha();r.position.set(2.8,0,-2.6),n.add(r);let o=wE();o.position.set(-2.4,0,-3.2),n.add(o);let a=ao({col:"#D8B890",roof:"#A8442E"});a.position.set(-5,0,-9),a.rotation.y=0,n.add(a);let l=ao({col:"#E8C8A0",roof:"#7A4A8A"});l.position.set(5,0,-9),n.add(l);for(let c of[-12,12])kt(n,c,-8,1.3,["#2E4F2C","#3B6636","#55813F","#A9B65A"],Math.abs(c));n.add(new we("#E9EEFF","#6A5A4A",1.05)),n.add(Ke(t?"#FFB080":"#FFD29A",2.8,[-10,14,10],14,50)),n.userData.caseta=o};Ee.esquina=(n,e)=>{Ee.barrio(n,e)};Ee.concurso=n=>{n.background=new ae("#140C24"),n.fog=new Re("#1A1030",.03);let e=w(20,.2,12,R("#2A1E48",{metalness:.3,roughness:.4}),0,-.1,-2);e.receiveShadow=!0,n.add(e);for(let r=0;r<9;r++){let o=it(["#FF5A9A","#5AC8FF","#F2C14E"][r%3],1,.9);o.position.set(-6+r*1.5,5,-6),n.add(o)}let t=Le(Tt(["\xBFQUI\xC9N SABE M\xC1S?"],{bg:"#3A1E6A",fg:"#F2C14E",size:90,w:1024,h:180}),6,1.05);t.position.set(0,4,-5.8),n.add(t);let i=w(1.2,1.1,.7,R("#C9361F",{metalness:.3}),0,.55,-.6);n.add(i),n.add(w(1.3,.1,.8,R("#F2C14E"),0,1.12,-.6)),n.add(new we("#B8A8FF","#2A1A3A",.9));let s=new bn("#FFF2D8",60,20,.5,.5,1.2);s.position.set(0,8,4),s.target.position.set(0,1,-.6),s.castShadow=!0,n.add(s,s.target)};Ee.residencia=n=>{n.fog=new Re("#E8DCC8",.02),n.add(Kn(20,14,"#8A6A4A")),n.add(w(20,4,.3,R("#E8DCC0"),0,2,-3.4));for(let e=0;e<8;e++){n.add(w(1,2.2,.08,R("#6B4A33"),-7+e*2,1.1,-3.2));let t=Le(Tt([String(e+1)],{bg:"#F2C14E",fg:"#2A2A34",size:90,w:160,h:140}),.4,.35);t.position.set(-7+e*2,2.5,-3.15),n.add(t)}n.add(new we("#FFFFFF","#9A8A70",1)),n.add(Ke("#FFE8C8",2,[-6,8,6],12,40))};var ka=(n,e,t=200,i=200)=>{let s=new H(new _e(t,i),R(e,{roughness:1}));return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s),s},za=["#2E4F2C","#3B6636","#55813F","#A9B65A"],vf=["#0E1A16","#13221C","#1A2C22","#22382A"],Ga=(n,e=-60,t="#7A8AA8",i="#F4F6FA",s=4,r=9)=>{let o=Oe(s);for(let a=0;a<r;a++){let l=14+o()*16,c=12+o()*10,h=new H(new hn(c,l,7),R(t,{roughness:1}));if(h.position.set(-70+a*17+o()*6,l/2-1,e-o()*25),n.add(h),i){let d=new H(new hn(c*.34,l*.34,7),R(i,{roughness:1}));d.position.set(h.position.x,l-l*.17-1,h.position.z),n.add(d)}}},Uh=(n,e,t,i,s,r="#4A8AB0",o=!1)=>{let a=new H(new Zt(1,48),new xe({color:r,roughness:.08,metalness:.35,emissive:o?"#0A1A30":"#000",emissiveIntensity:o?.6:0}));return a.rotation.x=-Math.PI/2,a.scale.set(i,s,1),a.position.set(e,.02,t),a.receiveShadow=!0,n.add(a),a};Ee.albergue=(n,e)=>{let t=!!e.dusk;n.fog=new Re(t?"#E8B090":"#D8E4E8",.012),dt(n,-200,700,260,t?[[0,"#3A3A78"],[.5,"#B86A88"],[.8,"#F29A6A"],[1,"#FFC88A"]]:[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),Ga(n,-70,t?"#6A5A88":"#7A8EAE"),ka(n,"#6E9A48");let i=ao({col:"#9A6A44",roof:"#5A3A2A",w:9,h:4.2,d:6,door:"#4A2E1E"});i.position.set(-3.5,0,-7),n.add(i);let s=Le(Tt(["ALBERGUE LOS PINOS"],{bg:"#4A2E1E",fg:"#F2C14E",size:70,w:900,h:150}),3.2,.54);s.position.set(-3.5,3.4,-6.9),n.add(s),Uh(n,6,-9,6,3.2);let r=Oe(31);for(let o=0;o<22;o++){let a=(r()-.5)*40;Math.abs(a+3.5)<6&&o<14||kt(n,a,-10-r()*16,1.3+r()*.7,za,o)}for(let[o,a]of[[-9,-3],[9,-4],[-11,-6]])kt(n,o,a,1.4,za,o|0);n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Ke(t?"#FFB080":"#FFE2B0",t?2.2:2.8,[-10,16,10],16,70))};Ee.gymkana=(n,e)=>{n.fog=new Re("#D8E4E8",.012),dt(n,-200,700,260,[[0,"#4F8AC8"],[.6,"#BFD8EC"],[1,"#EEF4F0"]]),Ga(n,-70),ka(n,"#7AA850"),Uh(n,0,-9,9,3.4);let t=Oe(7);for(let s=0;s<18;s++)kt(n,(t()-.5)*44,-14-t()*14,1.3+t()*.6,za,s);let i=new H(new Zt(1,32),R("#6A4A2E",{roughness:.4}));i.rotation.x=-Math.PI/2,i.scale.set(1.6,1,1),i.position.set(1.2,.015,-1.2),n.add(i);for(let s of[-3,3]){let r=new H(new hn(.18,.45,12),R("#F2A766"));r.position.set(s,.22,.8),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Ke("#FFE2B0",2.8,[-10,16,10],16,70))};Ee.lagoNoche=(n,e)=>{n.background=new ae("#05071A"),n.fog=new Re("#0A0E24",.02),En(n,4200,200,11),dt(n,-150,600,220,[[0,"#03040E"],[.6,"#0E1434"],[1,"#22284A"]]),Ga(n,-80,"#141A30","#3A4460",6),ka(n,"#1E2A20"),Uh(n,0,-8,12,4,"#1A2A48",!0);let t=Oe(17);for(let r=0;r<24;r++){let o=(t()-.5)*40;kt(n,o,-14-t()*14,1.3+t()*.6,vf,r)}for(let[r,o]of[[-6,-2],[6.5,-3],[-8,-5]])kt(n,r,o,1.3,vf,r*3|0);let i=it("#F4F0D8",5,.9);i.position.set(14,22,-90),i.material.fog=!1,n.add(i),n.add(new we("#6A78C8","#10141E",.55));let s=new Pi("#9AA8E8",.6);s.position.set(8,12,-6),n.add(s)};Ee.cima=(n,e)=>{n.fog=new Re("#E4EEF4",.006),dt(n,-200,900,300,[[0,"#2F6AB8"],[.55,"#8EC0E8"],[1,"#F4F8FA"]]);let t=new H(new _e(800,800),R("#F6F8FA",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-14,n.add(t);let i=Oe(9);for(let l=0;l<40;l++){let c=it("#FFFFFF",18+i()*14,.55);c.position.set((i()-.5)*300,-12+i()*3,-40-i()*200),n.add(c)}for(let l=0;l<6;l++){let c=10+i()*8,h=new H(new hn(8+i()*6,c,6),R("#8A8EA0"));h.position.set(-60+l*24,-14+c/2,-90-i()*40),n.add(h);let d=new H(new hn(3,c*.3,6),R("#F4F6FA"));d.position.set(h.position.x,-14+c*.85,h.position.z),n.add(d)}let s=new H(new tt(4.5,9,14,9),R("#8A8070",{roughness:1}));s.position.set(0,-7,-1),n.add(s);let r=new H(new Zt(4.6,9),R("#9A9070",{roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.01,-1),n.add(r);for(let l=0;l<10;l++){let c=new H(new Fi(.3+i()*.4),R("#7A7262")),h=i()*6.28;c.position.set(Math.cos(h)*(3+i()),.1,-1+Math.sin(h)*(2.5+i())),!(c.position.z>1.2)&&n.add(c)}n.add(w(.5,1,.5,R("#C8C0A8"),-2.6,.5,-2.6));let o=w(.06,.9,.06,R("#3A3A40"),-2.6,1.45,-2.6);n.add(o),n.add(w(.5,.06,.06,R("#3A3A40"),-2.6,1.6,-2.6));let a=Le(Tt(["PICO \xB7 2.130 m"],{bg:"#FBF7EC",fg:"#2A2A34",size:70,w:600,h:150}),1,.25);a.position.set(-2.6,.75,-2.34),n.add(a),n.add(new we("#EEF4FF","#8A8070",1.05)),n.add(Ke("#FFF0D0",3,[-8,18,10],12,60))};Ee.sendero=(n,e)=>{n.fog=new Re("#C8D8C8",.02),dt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),Ga(n,-60,"#7A8EAE"),ka(n,"#6E8A48");let t=new H(new _e(2.2,60),R("#B49A72",{roughness:1}));t.rotation.x=-Math.PI/2,t.position.set(0,.012,-20),n.add(t);let i=Oe(23);for(let s=0;s<30;s++){let r=i()<.5?-1:1;kt(n,r*(2.6+i()*12),2-i()*30,1.2+i()*.7,za,s)}for(let s=0;s<8;s++){let r=new H(new Fi(.2+i()*.3),R("#8A8070"));r.position.set((i()<.5?-1:1)*(1.3+i()),.1,-i()*10),n.add(r)}n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Ke("#FFE2B0",2.6,[-10,16,10],16,70))};Ee.comedor=(n,e)=>{n.background=new ae("#0E0A1E"),n.fog=new Re("#140E2A",.03),n.add(Kn(20,14,"#6A4A30")),n.add(w(20,5,.3,R("#5A3A2A"),0,2.5,-4.2));for(let a of[-1,1])n.add(w(.3,5,14,R("#5A3A2A"),a*8,2.5,0));for(let a=0;a<9;a++)n.add(w(.12,5,.1,R("#3A2418"),-8+a*2,2.5,-4));let t=Le(Tt(["FIESTA FIN DE CURSO"],{bg:"#E8447A",fg:"#FFFFFF",size:80,w:1100,h:170}),4,.62);t.position.set(0,3.6,-4),n.add(t);for(let a of[-5.2,5.2]){n.add(w(1,.08,4,R("#8E6242"),a,.78,-1.2));for(let[l,c]of[[-1,-2.8],[1,-2.8],[-1,.4],[1,.4]])n.add(w(.06,.78,.06,R("#3A2418"),a+l*.4,.39,c))}let i=[];for(let a=0;a<26;a++){let l=-7+a*.56,c=it(["#FF6A9A","#6AD8FF","#FFD84A","#9AFF8A"][a%4],.35,.9);c.position.set(l,3-Math.sin(a/25*Math.PI)*.5,-3.8),n.add(c),i.push(c)}let s=new H(new Zt(2.8,48),new xe({color:"#2A2240",roughness:.2,metalness:.4,emissive:"#4A2A7A",emissiveIntensity:.35}));s.rotation.x=-Math.PI/2,s.position.set(0,.015,-.8),n.add(s);let r=[];for(let[a,l]of[["#FF3A8A",-3],["#3AB8FF",0],["#FFD83A",3]]){let c=new nt(a,10,9,1.4);c.position.set(l,3.2,0),n.add(c),r.push(c)}n.add(new we("#8A7AC8","#20142A",.55));let o=new bn("#FFE8F0",30,14,.6,.6,1.2);o.position.set(0,6,3),o.target.position.set(0,0,-.8),o.castShadow=!0,n.add(o,o.target),n.userData.disco=a=>{r.forEach((l,c)=>{l.position.x=Math.sin(a*.9+c*2.1)*3.5,l.intensity=8+Math.sin(a*5+c)*3}),i.forEach((l,c)=>l.material.opacity=.55+.45*Math.sin(a*4+c))}};Ee.salida=(n,e)=>{let t=!!e.dusk,i=!!e.manana;Ee.barrio(n,{dusk:t});let s=hf("#F2C14E");s.rotation.y=Math.PI/2,s.position.set(1,0,-3.4),n.add(s);let r=Le(Tt(["VIAJE FIN DE CURSO"],{bg:"#2F5A9A",fg:"#FFFFFF",size:70,w:900,h:140}),2.6,.4);if(r.position.set(1,2.3,-2.18),n.add(r),i){let o=new Pi("#FFD0A0",.8);o.position.set(10,3,6),n.add(o)}};var co=(n,e,t=200,i=200,s={})=>{let r=new H(new _e(t,i),R(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},lo=(n,e=1.6)=>new xe({color:n,emissive:n,emissiveIntensity:e});function Af(n=2.6){let e=new le,t=Ae(1024,300,s=>{s.clearRect(0,0,1024,300),s.fillStyle="#E2231A",s.beginPath(),s.roundRect(10,30,780,240,60),s.fill(),s.fillStyle="#fff",s.font="900 112px Inter",s.textAlign="center",s.textBaseline="middle",s.fillText("SUSCR\xCDBETE",400,156),s.fillStyle="#F2C14E",s.beginPath(),s.arc(910,150,100,0,7),s.fill(),s.fillStyle="#2A2A34",s.beginPath(),s.moveTo(860,190),s.quadraticCurveTo(870,80,910,78),s.quadraticCurveTo(950,80,960,190),s.closePath(),s.fill(),s.fillRect(850,186,120,16),s.beginPath(),s.arc(910,214,14,0,7),s.fill(),s.beginPath(),s.arc(910,70,10,0,7),s.fill()}),i=Le(t,n,n*300/1024,{blend:!0});return i.renderOrder=6,e.add(i),e.userData.m=i,e}function xE(n="#FFB25A"){let e=new le,t=new H(new tt(.16,.12,.34,12),lo(n,1.8));e.add(t);let i=it(n,1,.55);return e.add(i),e}var CE=(n,e,t,i=3)=>{let s=Oe(i),r=["#F2A8C8","#FBF7EC","#F2C14E","#B48AE8","#E8667F"];for(let o=0;o<e;o++){let a=new H(new gt(.07+s()*.06,10,8),lo(r[o%5],.4));a.position.set((s()-.5)*t[0],.06,t[2]-s()*t[1]),n.add(a);let l=w(.02,.12,.02,R("#3E8A52"),a.position.x,.02,a.position.z,!1);n.add(l)}};Ee.desvan=(n,e)=>{let t=!!e.night;n.background=new ae("#1A120C"),n.fog=new Re("#2A1C12",.05),n.add(Kn(16,14,"#6A4630"));for(let h of[-1,1]){let d=w(16,.15,7.5,R("#5A3A26",{roughness:.9}),0,0,0);d.position.set(0,3.3,-1.2+h*2.3),d.rotation.x=h*-.62,d.position.y=3.2,d.position.z=h>0?2.4:-4.4,d.rotation.x=h>0?.62:-.62,h<0&&n.add(d)}n.add(w(16,6,.2,R("#4E3422",{roughness:1}),0,2.5,-4.6));for(let h=0;h<6;h++){let d=w(.22,.22,9,R("#3A2618"),-6+h*2.4,4.4,-1);n.add(d)}let i=Oe(6);for(let h=0;h<9;h++){let d=mf(.5+i()*.5);d.position.set(-5+i()*10,0,-3.6+i()*1.2),d.rotation.y=i(),Math.abs(d.position.x)>1.4&&n.add(d)}let s=w(1.4,.8,.7,R("#6A3A22",{roughness:.7}),-3.2,.4,-2.2);n.add(s),n.add(w(1.44,.1,.74,R("#C9A06A",{metalness:.4}),-3.2,.55,-2.2));let r=Nt(.9,.9,t?"#5A6AA8":"#FFE2A8",t?.6:1.6);r.position.set(2.6,2.9,-4.48),n.add(r);let o=Rs(1.4,7,t?"#9FB0FF":"#FFD9A0",t?.08:.2);o.position.set(1.6,1.7,-2.6),o.rotation.set(-.2,0,-.75),n.add(o);let a=new H(new gt(.09,12,10),lo("#FFD089",2));a.position.set(0,3.1,-1.2),n.add(a),n.add(w(.01,1.2,.01,"#111",0,3.75,-1.2,!1));let l=new nt("#FFB66E",9,9,1.4);l.position.set(0,3,-1),l.castShadow=!0,n.add(l),n.add(new we("#FFD8A8","#3A2418",.55));let c=[];for(let h=0;h<40;h++){let d=it("#FFE8C0",.05,.6);d.position.set(.5+i()*2.4,.6+i()*2.6,-3+i()*2.6),n.add(d),c.push(d)}n.userData.dust=c};Ee.pasillo=(n,e)=>{n.background=new ae("#1A1036"),n.fog=new Re("#2A1850",.045),En(n,1600,120,7),co(n,"#C8A8E8",8,120,{roughness:.9}).position.z=-40;let t=Oe(11),i=["#E8667F","#36AEA2","#F2C14E","#4A86C7","#7F6BC4","#F2913A","#5FB04A"];for(let u=0;u<26;u++)for(let p of[-1,1]){let g=-2-u*2.2,E=i[(u*2+(p>0?1:0))%i.length],m=w(.12,2.6,1.3,R("#F4ECD6"),p*2.4,1.3,g);n.add(m);let f=w(.08,2.3,1.05,R(E,{roughness:.6}),p*2.35,1.15,g);n.add(f);let v=new H(new gt(.05,8,6),lo("#F2C14E",.6));v.position.set(p*2.29,1.1,g+.35),n.add(v)}let s=new le,r=new le;r.position.set(0,0,.55),s.add(r);let o=w(.08,2.3,1.05,R("#F2A8C8",{roughness:.5}),0,1.15,-.525);r.add(o);let a=new H(new gt(.05,8,6),lo("#F2C14E",.8));a.position.set(-.06,1.1,-.9),r.add(a);let l=Le(Tt(["SARA"],{bg:"#FBF7EC",fg:"#C9361F",size:110,w:400,h:160}),.6,.24);l.position.set(-.06,1.85,-.525),l.rotation.y=-Math.PI/2,r.add(l);let c=Nt(.04,2.3,"#FFF0C8",2.2);c.rotation.y=-Math.PI/2,c.position.set(.05,1.15,-.525),s.add(c),s.position.set(2.35,0,-8.6),n.add(s),n.userData.door=r,n.userData.doorPos=[2.35,0,-8.6];for(let u=0;u<14;u++){let p=it(["#FFB2E0","#B2D8FF","#FFF2B0"][u%3],.25+t()*.3,.7);p.position.set((t()-.5)*4,.5+t()*3,-1-t()*30),n.add(p)}n.add(new we("#D8C8FF","#4A3070",1));let h=new nt("#FFE0F0",14,14,1.4);h.position.set(0,3,-4),n.add(h);let d=new nt("#B8C8FF",10,14,1.4);d.position.set(0,3,-12),n.add(d)};Ee.playaSueno=(n,e)=>{n.fog=new Re("#E8B8E0",.018),dt(n,-120,600,240,[[0,"#6A4AB8"],[.45,"#C88AD8"],[.75,"#F6B8C8"],[1,"#FFE2D0"]]);let t=it("#FFF6E0",16,.9);t.position.set(10,22,-110),t.material.fog=!1,n.add(t);let i=new H(new Zt(4,40),new qe({color:"#FFF6E8",fog:!1}));i.position.set(10,22,-112),n.add(i);let s=co(n,"#F8EEF2",200,200),r=new H(new _e(400,200),new xe({color:"#B48AE8",roughness:.12,metalness:.35,emissive:"#6A3AA8",emissiveIntensity:.25}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,-104),n.add(r),n.userData.sea=r;let o=w(400,.02,.3,R("#FFFFFF",{roughness:.5}),0,.04,-4.1,!1);n.add(o),n.userData.foam=o;let a=Oe(4);for(let l=0;l<70;l++){let c=it("#FFFFFF",.08+a()*.1,.8);c.position.set((a()-.5)*16,.05,2-a()*6),n.add(c)}for(let l=0;l<4;l++){let c=new le;c.add(w(.18,2.8,.18,R("#E8A0C0"),0,1.4,0));let h=it(["#7FD08A","#F2C14E","#5AC8FF","#FF8AC8"][l],1.6,.8);h.position.y=3,c.add(h),c.position.set([-6,-3.6,4.5,7][l],0,[-2.6,-3.4,-3,-2][l]),n.add(c)}n.add(new we("#FFE0F6","#B88AC8",1.15)),n.add(Ke("#FFD8E8",2,[8,14,-6],14,60))};Ee.baile=(n,e)=>{n.background=new ae("#0E0A28"),n.fog=new Re("#1A1240",.03),En(n,2400,160,3),dt(n,-100,500,200,[[0,"#0A0820"],[.6,"#2A1A58"],[1,"#6A3A78"]]),co(n,"#3A2A5A");let t=new H(new Zt(3.2,48),new xe({color:"#F4E8F8",roughness:.25,metalness:.2,emissive:"#8A6AB8",emissiveIntensity:.25}));t.rotation.x=-Math.PI/2,t.position.set(0,.02,-1),t.receiveShadow=!0,n.add(t),CE(n,260,[16,12,3]);for(let[a,l]of[[-4.2,-2.4],[4.2,-2.4],[-5.2,-5],[5.2,-5],[0,-6]]){let c=Ha();c.position.set(a,0,l),n.add(c)}let i=Oe(9),s=[];for(let a=0;a<22;a++){let l=xE(["#FFB25A","#FF8A6A","#FFD27A"][a%3]);l.position.set((i()-.5)*12,2.6+i()*4,-1-i()*9),l.userData.y0=l.position.y,l.userData.ph=i()*6,n.add(l),s.push(l)}n.userData.farol=s,n.add(new we("#B8A8FF","#2A1A3A",.7));let r=new bn("#FFE2C8",50,20,.6,.6,1.2);r.position.set(0,8,3),r.target.position.set(0,0,-1),r.castShadow=!0,n.add(r,r.target);let o=new nt("#FFB25A",8,12,1.5);o.position.set(0,3.5,-2),n.add(o)};Ee.estadio=(n,e)=>{n.background=new ae("#0A1020"),n.fog=new Re("#18203A",.02),En(n,800,160,5);let t=Ae(512,512,h=>{for(let d=0;d<8;d++)h.fillStyle=d%2?"#3E8A3E":"#4A9A46",h.fillRect(0,d*64,512,64);h.strokeStyle="#F4F4F4",h.lineWidth=6,h.strokeRect(20,20,472,472),h.beginPath(),h.moveTo(20,256),h.lineTo(492,256),h.stroke(),h.beginPath(),h.arc(256,256,60,0,7),h.stroke()}),i=new H(new _e(40,40),new xe({map:t,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.z=-14,i.receiveShadow=!0,n.add(i);let s=new le,r=R("#FFFFFF",{roughness:.4});s.add(w(.12,2.4,.12,r,-3.6,1.2,0),w(.12,2.4,.12,r,3.6,1.2,0),w(7.3,.12,.12,r,0,2.4,0));let o=new H(new _e(7.2,2.4),new qe({color:"#FFFFFF",transparent:!0,opacity:.18,side:St}));o.position.set(0,1.2,-1),s.add(o),s.position.set(0,0,-7),n.add(s);for(let h=0;h<4;h++)n.add(w(60,1,2,R(["#2A3A6A","#3A2A5A","#2A3A6A","#3A2A5A"][h]),0,.5+h*1.1,-14-h*2));let a=[],l=Oe(2);for(let h=0;h<4;h++)for(let d=0;d<48;d++)a.push([-24+d+l()*.4,1+h*1.1,-14-h*2]);wh(n,a,{h:1.3,tint:"#C8C8E8",raised:.7});for(let h of[-1,1]){let d=it("#FFFFFF",6,.9);d.position.set(h*16,14,-20),n.add(d)}n.add(new we("#D8E0FF","#2A3A2A",1));let c=Ke("#FFFFFF",2.6,[6,16,8],14,60);n.add(c)};Ee.concierto=(n,e)=>{n.background=new ae("#0C0820"),n.fog=new Re("#140C2C",.025);let t=w(14,.6,6,R("#2A1E48",{metalness:.3,roughness:.4}),0,.3,-2.5);t.receiveShadow=!0,n.add(t),co(n,"#140E26").position.y=-.01;let i=Nt(14,6,"#3A1E6A",.5);i.position.set(0,3.6,-5.5),n.add(i);let s=Oe(4);for(let l=0;l<9;l++){let c=it(["#FF5A9A","#5AC8FF","#F2C14E"][l%3],1.2,.9);c.position.set(-6+l*1.5,6,-5),n.add(c);let h=Rs(1.2,8,["#FF5A9A","#5AC8FF","#F2C14E"][l%3],.1);h.position.set(-6+l*1.5,3,-4.5),h.rotation.z=(l-4)*.08,n.add(h)}let r=new le;r.add(w(.03,1.4,.03,R("#2A2A30",{metalness:.6}),0,.7+.6,0));let o=new H(new gt(.06,12,10),R("#888",{metalness:.8}));o.position.y=2.05,r.add(o),r.position.set(.5,0,-.6),n.add(r);for(let l=0;l<40;l++){let c=it(["#FFF2C0","#B8E0FF","#FFB2E0"][l%3],.18,.8);c.position.set(-7+s()*14,1.2+s()*1.2,2.5+s()*3),n.add(c)}n.add(new we("#B8A8FF","#2A1A3A",.8));let a=new bn("#FFF2D8",70,22,.45,.5,1.2);a.position.set(0,9,4),a.target.position.set(0,.6,-.6),a.castShadow=!0,n.add(a,a.target)};Ee.gris=(n,e)=>{n.background=new ae("#1C1E24"),n.fog=new Re("#262830",.06),co(n,"#4A4C54"),n.add(w(14,7,.2,R("#5A5C64",{roughness:1}),0,3.5,-4)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),-4.2,3.5,0)),n.add(w(.2,7,12,R("#52545C",{roughness:1}),4.2,3.5,0));let t=Nt(1.2,1.4,"#8A94A8",.35);t.position.set(1.8,2.8,-3.88),n.add(t);for(let r of[1.8])n.add(w(.06,1.4,.05,"#3A3C44",r,2.8,-3.86)),n.add(w(1.2,.06,.05,"#3A3C44",r,2.8,-3.86));n.add(new we("#A8B0C8","#2A2A30",.6));let i=new bn("#C8D0E8",28,14,.5,.7,1.3);i.position.set(-1.4,6,1),i.target.position.set(-2.6,0,-2.8),i.castShadow=!0,n.add(i,i.target);let s=new nt("#FFD8A0",0,10,1.2);s.position.set(-2,2.4,-1.4),n.add(s),n.userData.warm=s};Ee.labSueno=(n,e)=>{Ee.lab(n,e),rf(n,-1.4,-1.6,"#4A86C7");let t=new le;t.add(w(.12,1.4,.12,R("#3A3A44"),0,.7,0)),t.add(w(1,.7,.1,R("#20242E"),0,1.7,0));let i=Nt(.9,.6,"#7FD08A",.6);i.position.set(0,1.7,.06),t.add(i),t.position.set(1,0,-2.4),t.rotation.y=-.4,n.add(t),n.userData.mon=i};var Va=(n,e,t=200,i=200,s={})=>{let r=new H(new _e(t,i),R(e,{roughness:1,...s}));return r.rotation.x=-Math.PI/2,r.receiveShadow=!0,n.add(r),r},_f=(n,e=1.6)=>new xe({color:n,emissive:n,emissiveIntensity:e}),FE=(n="#8C8A84",e=3)=>{let t=Ae(512,512,i=>{i.fillStyle=n,i.fillRect(0,0,512,512);let s=Oe(e);for(let r=0;r<900;r++)i.fillStyle=`rgba(${s()<.5?"255,255,255":"0,0,0"},${s()*.07})`,i.fillRect(s()*512,s()*512,2+s()*6,2+s()*6);i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=3;for(let r=128;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<5;r++){i.strokeStyle="rgba(40,30,20,.12)",i.lineWidth=8,i.beginPath();let o=s()*512;i.moveTo(o,0),i.lineTo(o+(s()-.5)*30,140+s()*300),i.stroke()}});return t.wrapS=t.wrapT=$t,t},Cs=(n,e,t,i,s,r,o,a=3)=>{let l=FE(o);l.repeat.set(Math.max(1,Math.max(n,t)/a),Math.max(1,e/a));let c=new H(new Tn(n,e,t),new xe({map:l,roughness:.95}));return c.position.set(i,s,r),c.receiveShadow=!0,c.castShadow=!0,c};function PE(n="#B8B4A8"){let e=new le,t=new H(new tt(.09,.09,.22,18),R(n,{metalness:.6,roughness:.35}));t.position.y=.11,t.castShadow=!0,e.add(t);let i=new H(new tt(.092,.092,.12,18,1,!0),new xe({map:Ae(256,64,s=>{s.fillStyle="#7A8A3A",s.fillRect(0,0,256,64),s.fillStyle="#F4E8C8",s.font="800 30px Inter",s.textAlign="center",s.fillText("JUD\xCDAS \xB7 1987",128,44)}),roughness:.7}));return i.position.y=.11,e.add(i),e}function IE(){let n=new le;n.add(w(1,.8,.6,R("#4A6A4A",{roughness:.6,metalness:.3}),0,.4,0)),n.add(w(.3,.3,.02,R("#222"),-.25,.5,.31));let e=new H(new gt(.04,10,8),_f("#5AE05A",2.5));e.position.set(.3,.62,.31),n.add(e);for(let t=0;t<5;t++)n.add(w(.02,.4,.02,R("#2A3A2A"),.05+t*.06,.4,.31));return n.userData.led=e,n}function DE(){let n=new le;n.add(w(.36,.5,.08,R("#3A3C3A",{metalness:.5}),0,0,0));let e=new le;e.position.set(0,0,.06),n.add(e);let t=w(.05,.4,.05,R("#9A9A9A",{metalness:.8,roughness:.3}),0,.2,0);e.add(t);let i=new H(new gt(.07,14,10),R("#D8251A",{roughness:.3}));return i.position.y=.42,e.add(i),e.rotation.x=-.5,n.userData.piv=e,n.userData.knob=i,n}function LE(){let n=new le;n.add(w(8,2.4,2.5,R("#F2B830",{roughness:.5}),0,1.6,0)),n.add(w(8.02,.25,2.52,R("#2A2A2A"),0,.9,0));for(let t=0;t<7;t++)for(let i of[-1,1])n.add(w(.85,.7,.02,R("#9AC8E8",{metalness:.4,roughness:.15}),-3.3+t*1.05,2.1,i*1.26));for(let t of[-2.6,2.6])for(let i of[-1,1]){let s=new H(new tt(.45,.45,.3,16),R("#1A1A1A"));s.rotation.x=Math.PI/2,s.position.set(t,.45,i*1.2),n.add(s)}let e=it("#FFF2C0",.5,.9);return e.position.set(4.02,1.1,.8),n.add(e),n}function Mf(n,e,t={}){let i=Tt(n,{bg:"#3A4A2A",fg:"#F4E8C8",size:90,w:1100,h:260,...t});return Le(i,e,e*(t.h||260)/(t.w||1100))}Ee.bunker=(n,e)=>{let t=!!e.dark,i=!!e.open;n.background=new ae("#0E0F10"),n.fog=new Re(t?"#050608":"#2A2A28",t?.08:.045);let s=Cs(12,.2,10,0,-.1,-.5,"#6E6C66",2.5);n.add(s),n.add(Cs(12,4,.3,0,2,-3.55,"#8C8A84")),n.add(Cs(.3,4,10,-4.2,2,-.5,"#84827C")),n.add(Cs(.3,4,10,4.2,2,-.5,"#84827C")),n.add(Cs(12,.3,10,0,3.6,-.5,"#7A7872"));for(let b of[-2.4,0,2.4])n.add(w(.25,.3,10,R("#6A6862"),b,3.35,-.5));let r=new le;r.add(w(2,.2,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),0,2.5,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),-.95,1.25,0),w(.2,2.6,.3,R("#5A5E5A",{metalness:.6,roughness:.4}),.95,1.25,0)),r.position.set(0,0,-3.36),n.add(r);let o=new le;o.position.set(-.85,0,-3.3),n.add(o);let a=R("#6E7670",{metalness:.7,roughness:.35}),l=w(1.7,2.4,.16,a,.85,1.2,0);o.add(l);for(let b of[.5,1.9])o.add(w(1.6,.08,.04,R("#5A605C",{metalness:.7}),.85,b,.1));let c=new H(new rn(.26,.035,8,28),R("#B8241A",{metalness:.4,roughness:.4}));c.position.set(.85,1.25,.14),o.add(c);for(let b=0;b<3;b++){let F=w(.5,.03,.03,R("#B8241A"),.85,1.25,.14);F.rotation.z=b*Math.PI/3,o.add(F)}o.rotation.y=i?-1.45:0,n.userData.door=o,n.userData.wheel=c;let h=DE();h.position.set(1.55,1.45,-3.36),n.add(h),n.userData.lever=h.userData.piv,n.userData.leverKnob=h.userData.knob;let d=Le(Tt(["\xA1NO TOCAR!"],{bg:"#F2C14E",fg:"#2A2A34",size:80,w:500,h:130}),.5,.13);d.position.set(1.55,1.82,-3.38),n.add(d);let u=b=>{let F=new le,S=R("#4A5450",{metalness:.6,roughness:.4});for(let _ of[-.45,.45])for(let I of[-1,1])F.add(w(.06,2.3,.06,S,_,1.15,I));for(let _ of[.45,1.6])F.add(w(.96,.06,2.1,S,0,_,0)),F.add(w(.86,.14,1.96,R("#7A8A6A",{roughness:1}),0,_+.1,0)),F.add(w(.5,.1,.3,R("#D8D2C0"),0,_+.21,-.8));return F.position.set(b,0,-1.1),F};n.add(u(-3.3)),n.add(u(3.3));let p=new le;for(let b of[.9,1.5])p.add(w(1.4,.05,.35,R("#5A4A3A"),0,b,0));for(let b of[-.7,.7])p.add(w(.05,1.6,.35,R("#5A4A3A"),b,.8,0));p.position.set(-2,0,-3.2),n.add(p);let g=[];for(let b=0;b<6;b++){let F=PE();F.position.set(-2.5+b%3*.26,b<3?.93:1.53,-3.2),p.parent.add(F),g.push(F)}n.userData.cans=g;let E=IE();E.position.set(2.6,0,-3),n.add(E),n.userData.gen=E.userData.led;let m=new le;m.add(w(.06,.7,.9,R("#3A3C3A",{metalness:.5}),0,0,0));for(let b=0;b<6;b++)m.add(w(.08,.04,.8,R("#5A5C5A",{metalness:.6}),.02,-.28+b*.11,0));if(m.position.set(-4.02,2.75,-1.1),n.add(m),e.mesa!==!1){n.add(w(1.4,.06,.8,R("#5A4632"),0,.75,.3));for(let b of[-.6,.6])for(let F of[-.32,.32])n.add(w(.05,.75,.05,R("#3A2E22"),b,.375,.3+F))}if(e.museo){let b=Mf(["MUSEO DE LA GUERRA FR\xCDA"],2.4,{size:80});b.position.set(-2,2.6,-3.38),n.add(b)}let f=Le(Ae(360,480,b=>{b.fillStyle="#E8D8A0",b.fillRect(0,0,360,480),b.fillStyle="#7A2A1A",b.font="900 46px Fraunces",b.textAlign="center",b.fillText("REFUGIO",180,70),b.fillStyle="#3A3A2A",b.fillRect(80,140,200,140),b.fillStyle="#E8D8A0",b.beginPath(),b.moveTo(60,150),b.lineTo(180,90),b.lineTo(300,150),b.fill(),b.fillStyle="#7A2A1A",b.font="700 30px Inter",b.fillText("1962",180,340)}),.5,.66);f.position.set(2.6,2.3,-3.38),n.add(f);let v=[];for(let b of[-1.6,1.6]){let F=new H(new gt(.09,12,10),_f("#FFD089",t?0:2.2));F.position.set(b,3.1,-.6),n.add(F),v.push(F),n.add(w(.22,.02,.22,R("#333"),b,3.2,-.6,!1))}let A=[];if(!t)for(let b of[-1.6,1.6]){let F=new nt("#FFC27A",11,10,1.4);F.position.set(b,2.9,-.4),F.castShadow=b<0,n.add(F),A.push(F)}let y=new we(t?"#3A4A6A":"#E8DCC8",t?"#0A0A0E":"#3A3430",t?.12:.55);if(n.add(y),n.userData.lights=A,n.userData.bulbs=v,n.userData.hemi=y,i){let b=Nt(1.7,2.4,"#FFF4D8",3.2);b.position.set(0,1.2,-3.5),n.add(b);let F=Rs(2.2,8,"#FFE8B8",.3);F.position.set(0,1.4,-.6),F.rotation.set(-1.25,0,0),n.add(F);let S=new bn("#FFF0D0",60,14,.6,.6,1.2);S.position.set(0,2.2,-3.6),S.target.position.set(0,0,1.5),S.castShadow=!0,n.add(S,S.target),n.userData.sunObjs=[b,F,S]}let D=Oe(5),C=[];for(let b=0;b<26;b++){let F=it("#FFE8C0",.04,t?.2:.5);F.position.set((D()-.5)*6,.5+D()*2.6,-3+D()*4),n.add(F),C.push(F)}n.userData.dust=C};Ee.bosqueBunker=(n,e)=>{let t=!!e.storm;n.fog=new Re(t?"#1A1E28":"#C8D0B8",t?.045:.022),dt(n,-100,500,200,t?[[0,"#05070C"],[.6,"#1A2030"],[1,"#2A3040"]]:[[0,"#8AA8C0"],[.7,"#C8D4C8"],[1,"#E8E4C8"]]),Va(n,t?"#2A3A24":"#6E8A48");let i=Oe(14);for(let a=0;a<30;a++){let l=(i()-.5)*34,c=-3-i()*24;Math.abs(l)<4&&c>-9||kt(n,l,c,1.2+i()*.8,t?["#1E2E1E","#24381F","#2E4628","#3A4A2A"]:["#3E5F3A","#4F7A44","#6E9A50","#A9B65A"],a)}let s=new H(new gt(3.2,24,12,0,Math.PI*2,0,Math.PI/2),R(t?"#3A4A30":"#6E8A50",{roughness:1}));s.scale.set(1.3,.7,1),s.position.set(0,0,-6.5),n.add(s),n.add(Cs(3.2,2.6,.8,0,1.3,-4,"#8C8A84")),n.add(w(1.5,2,.1,R("#5E6660",{metalness:.6,roughness:.4}),0,1,-3.56));let r=Mf(["MUSEO DE LA GUERRA FR\xCDA"],3,{size:84});r.position.set(0,2.95,-3.55),n.add(r);let o=LE();if(o.position.set(e.busX??6.5,0,-1.4),o.rotation.y=Math.PI,n.add(o),n.userData.bus=o,t){n.add(new we("#6A7A9A","#1A1E1A",.75));let a=new we("#DDE6FF","#5A6070",0);n.add(a),n.userData.flash=a;let l=Ke("#7A8AB8",.5,[-8,14,8],14,60);n.add(l);let c=[],h=new qe({color:"#AFC4E8",transparent:!0,opacity:.45});for(let d=0;d<260;d++){let u=new H(new Tn(.012,.45,.012),h);u.userData.p=[(i()-.5)*16,i()*8,4-i()*14,i()],n.add(u),c.push(u)}n.userData.rain=d=>c.forEach(u=>{let[p,g,E,m]=u.userData.p;u.position.set(p+(d*1.2+m)%1*-.3,7-(g+d*14)%8,E),u.rotation.z=.12})}else n.add(new we("#E9EEFF","#5A6A4A",.95)),n.add(Ke("#FFD29A",2.6,[-12,16,10],16,70))};Ee.puente=(n,e)=>{let t=!!e.normal;n.fog=new Re("#C8D8E0",t?.02:.012),dt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#BFD4E0"],[1,"#EEF0E4"]]),n.add(new we("#E9EEFF","#5A6A4A",1)),n.add(Ke("#FFE2B0",2.6,[-10,18,12],16,80));let i=Oe(21),s=["#2E4F2C","#3B6636","#55813F","#A9B65A"];if(t){Va(n,"#6E8A48");let l=new H(new _e(3.4,60),R("#5A8AB0",{roughness:.15,metalness:.3}));l.rotation.x=-Math.PI/2,l.position.set(0,.02,-10),n.add(l),n.add(w(1.4,.14,5,R("#8E6242"),0,.35,0));for(let c of[-1,1]){n.add(w(.08,.5,5,R("#6A4630"),c*.66,.65,0));for(let h=0;h<5;h++)n.add(w(.1,.6,.1,R("#6A4630"),c*.66,.3,-2+h))}for(let c=0;c<16;c++)kt(n,(i()<.5?-1:1)*(4+i()*10),-2-i()*20,1.2+i()*.6,s,c);n.userData.y=.42;return}for(let l of[-1,1]){let c=Cs(20,40,30,l*16,-20,-6,"#8A7A62",6);n.add(c),Va(n,"#6E8A48",20,30).position.set(l*16,.01,-6);for(let d=0;d<8;d++)kt(n,l*(8+i()*10),-4-i()*18,1.2+i()*.6,s,d+(l>0?9:0))}let r=new H(new _e(14,200),new xe({color:"#4A8AB0",roughness:.2,metalness:.3,emissive:"#1A3A50",emissiveIntensity:.3}));r.rotation.x=-Math.PI/2,r.position.set(0,-38,-40),n.add(r);for(let l=0;l<8;l++){let c=new H(new Fi(1.5+i()*2),R("#7A6A52"));c.position.set((i()-.5)*10,-38,-10-i()*60),n.add(c)}let o=l=>-.55*(1-(l/6)**2);n.userData.sag=o;let a=R("#9A7448",{roughness:.9});for(let l=0;l<=40;l++){let c=-6+l*.3,h=w(.22,.05,1.1,a,c,o(c),0);h.rotation.z=Math.atan(.55*2*c/36),n.add(h)}for(let l of[-1,1]){let c=[];for(let d=0;d<=24;d++){let u=-6+d*.5;c.push(new P(u,o(u)+1,l*.55))}let h=new H(new mr(new As(c),60,.025,6),R("#C8B088"));n.add(h);for(let d=0;d<=24;d+=2){let u=-6+d*.5;n.add(w(.015,1,.015,R("#C8B088"),u,o(u)+.5,l*.55))}for(let d of[-6.1,6.1])n.add(w(.18,1.6,.18,R("#6A4630"),d,.8,l*.55))}n.userData.y=0};Ee.marte=(n,e)=>{n.background=new ae("#10141A"),n.fog=new Re("#1A2028",.05);let t=new H(new tt(2.4,2.4,30,28,1,!0),new xe({color:"#C8CCD0",side:en,roughness:.6,metalness:.2}));t.rotation.x=Math.PI/2,t.position.set(0,1.9,-10),n.add(t),n.add(w(3.6,.1,30,R("#6A707A",{metalness:.4}),0,0,-10));for(let r=0;r<10;r++){let o=new H(new rn(2.38,.05,6,28),R("#8A9098",{metalness:.6}));o.position.set(0,1.9,2-r*3),n.add(o);let a=Nt(1,.2,"#DDEEFF",1.6);a.rotation.x=Math.PI/2,a.position.set(0,4.2,1-r*3),n.add(a)}for(let r of[-1,1])for(let o=0;o<4;o++){n.add(w(.6,.5,1.8,R("#7A8A9A"),r*1.5,.45,-1-o*3)),n.add(w(.05,.6,.5,R("#2A3A4A"),r*1.75,1.6,-o*3));let a=Nt(.5,.32,["#7FD08A","#5AC8FF"][o%2],.6);a.rotation.y=-r*Math.PI/2,a.position.set(r*1.72,1.6,-o*3),n.add(a)}let i=Le(Tt(["MARS-500 \xB7 MOSC\xDA"],{bg:"#2A3A6A",fg:"#FFFFFF",size:80,w:900,h:150}),2,.33);i.position.set(0,3,-6),n.add(i),n.add(new we("#E8F0FF","#4A505A",.9));let s=new nt("#E8F0FF",12,12,1.4);s.position.set(0,3,0),n.add(s)};Ee.biosfera=(n,e)=>{n.fog=new Re("#F2D8B0",.012),dt(n,-200,700,260,[[0,"#5F96C8"],[.6,"#F0C890"],[1,"#FFE2B8"]]),Va(n,"#D8B07A");let t=Oe(31);for(let l=0;l<8;l++){let c=new H(new hn(8+t()*8,6+t()*6,6),R("#C88A5A",{roughness:1}));c.position.set(-60+l*18,0,-70-t()*30),n.add(c)}for(let l=0;l<9;l++){let c=new le;c.add(w(.3,1.6+t(),.3,R("#4A8A4A"),0,.8,0)),c.position.set((t()-.5)*20,0,1-t()*6),Math.abs(c.position.x)>3&&n.add(c)}let i=new xe({color:"#CFE8F0",transparent:!0,opacity:.32,roughness:.05,metalness:.5,side:St}),s=new qe({color:"#F4F4F0",wireframe:!0}),r=(l,c,h)=>{let d=new hn(l,l*1.1,4,4);for(let u of[i,s]){let p=new H(d,u);p.rotation.y=Math.PI/4,p.position.set(c,l*.55,h),n.add(p)}};r(5,-3,-12),r(3.4,5,-10);let o=new gt(3.6,20,10,0,Math.PI*2,0,Math.PI/2);for(let l of[i,s]){let c=new H(o,l);c.position.set(11,0,-14),n.add(c)}for(let l=0;l<10;l++)kt(n,-6+t()*6,-10-t()*4,.7+t()*.5,["#2E5F2C","#3B7636","#55913F","#A9C65A"],50+l);let a=Le(Tt(["BIOSFERA 2 \xB7 ARIZONA"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:1e3,h:150}),2.4,.36);a.position.set(-1,4.6,-6),n.add(a),n.userData.tag=a,n.add(new we("#FFF0DC","#B08A6A",1.05)),n.add(Ke("#FFD29A",3,[-14,16,10],20,70))};Ee.noria=(n,e)=>{Ee.parque(n,{dusk:!0});let t=new le,i=R("#E8E2D2",{metalness:.4,roughness:.4}),s=new H(new rn(5,.08,8,60),i);t.add(s);let r=s.clone();r.scale.setScalar(.7),t.add(r);for(let a=0;a<12;a++){let l=w(10,.06,.06,i,0,0,0);l.rotation.z=a*Math.PI/12,t.add(l)}let o=[];for(let a=0;a<12;a++){let l=a*Math.PI/6,c=new le;c.add(w(.7,.6,.6,R(["#E8667F","#F2C14E","#4A86C7","#36AEA2"][a%4]),0,-.35,0)),c.position.set(Math.cos(l)*5,Math.sin(l)*5,0),t.add(c),o.push(c);let h=it("#FFE2A8",.6,.8);h.position.set(Math.cos(l)*5,Math.sin(l)*5,.1),t.add(h)}t.position.set(2.5,6.2,-9),n.add(t);for(let a of[-1,1]){let l=w(.2,7.5,.2,i,2.5+a*1.8,3.2,-9);l.rotation.z=a*.25,n.add(l)}n.userData.wheel=t,n.userData.cabs=o};var ho=(n,e=1.6)=>new xe({color:n,emissive:n,emissiveIntensity:e}),kn=(n="#A8ACB0")=>R(n,{metalness:.75,roughness:.32}),Wa=(n="#9EA2A6")=>{let e=Ae(256,256,t=>{t.fillStyle=n,t.fillRect(0,0,256,256);let i=Oe(7);for(let s=0;s<500;s++)t.fillStyle=`rgba(${i()<.5?"255,255,255":"0,0,0"},${i()*.06})`,t.fillRect(0,i()*256,256,1+i()*2)});return new xe({map:e,metalness:.7,roughness:.35})},Sf=(n,e,t,i="#1A1C20",s="#FF5A3A",r=150)=>Le(Tt([n],{bg:i,fg:s,size:r,w:300,h:200}),e,t);function Tf(n=7){let e=document.createElement("canvas");e.width=256,e.height=160;let t=e.getContext("2d"),i=new zn(e);i.colorSpace=Ht;let s=(o,a="")=>{t.fillStyle="#0C0D10",t.fillRect(0,0,256,160),t.fillStyle="#FF6A3A",t.font="700 110px 'IBM Plex Mono'",t.textAlign="center",t.fillText(String(o),150,122),a&&(t.font="700 70px Inter",t.fillText(a,50,110)),i.needsUpdate=!0};s(n);let r=new H(new _e(.5,.31),new qe({map:i,toneMapped:!1}));return r.userData.set=s,r}function UE(){let n=new le;n.add(w(.36,.9,.03,kn("#8E9296"),0,0,0));let e=[];["12","11","10","9","8","7","6","5","4","3","2","1","0","\u25C0\u25B6"].forEach((o,a)=>{let l=new H(new tt(.04,.04,.02,16),ho("#F4E8C8",.15));l.rotation.x=Math.PI/2;let c=a%2,h=Math.floor(a/2);l.position.set(-.07+c*.14,.3-h*.085,.025),n.add(l);let d=Le(Tt([o],{bg:"rgba(0,0,0,0)",fg:"#1A1A1A",size:120,w:200,h:160}),.055,.044);d.position.set(-.07+c*.14,.3-h*.085,.037),n.add(d),e.push(l)});let i=new H(new tt(.05,.05,.025,16),ho("#F2C14E",.3));i.rotation.x=Math.PI/2,i.position.set(0,-.33,.025),n.add(i);let s=Le(Tt(["\u{1F514}"],{bg:"rgba(0,0,0,0)",fg:"#2A2A34",size:120,w:200,h:160}),.06,.048);s.position.set(0,-.33,.04),n.add(s);let r=new le;for(let o=0;o<5;o++)r.add(w(.16,.012,.01,R("#2A2A2A"),0,-.03*o,.02));return r.position.set(0,-.18,0),n.add(r),n.userData.btns=e,n.userData.alarm=i,n}Ee.ascensor=(n,e)=>{n.background=new ae("#08090C"),n.fog=new Re("#08090C",.03);let t=1.2,i=-1.6,s=2.8,r=Wa("#A4A8AC"),o=w(2.6,.1,2.4,R("#3A3634",{roughness:.8}),0,-.05,-.4);o.receiveShadow=!0,n.add(o);let a=new H(new _e(2.4,2),new xe({map:(()=>{let C=Ae(256,256,b=>{b.fillStyle="#4A4440",b.fillRect(0,0,256,256),b.strokeStyle="#3A3430",b.lineWidth=3;for(let F=0;F<256;F+=32)b.beginPath(),b.moveTo(F,0),b.lineTo(F,256),b.stroke(),b.beginPath(),b.moveTo(0,F),b.lineTo(256,F),b.stroke()});return C.wrapS=C.wrapT=$t,C.repeat.set(3,3),C})(),roughness:.7}));a.rotation.x=-Math.PI/2,a.position.set(0,.005,-.6),a.receiveShadow=!0,n.add(a),n.add(w(.08,s,2.4,r,-t-.04,s/2,-.4)),n.add(w(.08,s,2.4,r,t+.04,s/2,-.4)),n.add(w(2.6,.08,2.4,R("#5A5E62",{metalness:.4,roughness:.5}),0,s+.04,-.4)),n.add(w(.65,s,.08,r,-t+.325-.02,s/2,i)),n.add(w(.65,s,.08,r,t-.325+.02,s/2,i)),n.add(w(1.2,s-2.2,.08,r,0,2.2+(s-2.2)/2,i));let l=kn("#B4B8BC"),c=w(.56,2.2,.04,l,-.28,1.1,i+.03),h=w(.56,2.2,.04,l,.28,1.1,i+.03);n.add(c,h),n.add(w(.01,2.2,.045,R("#555"),0,1.1,i+.04));let d=w(1.1,2.2,.02,R("#050505"),0,1.1,i-.02);n.add(d),n.userData.doors=C=>{c.position.x=-.28-.55*C,h.position.x=.28+.55*C};let u=Tf(e.piso??7);u.position.set(0,2.5,i+.05),n.add(u),n.userData.display=u;let p=UE();p.position.set(.85,1.25,i+.05),n.add(p),n.userData.botonera=p;for(let C of[-1,1])n.add(w(.04,.04,1.8,kn("#C8CCD0"),C*(t-.06),.95,-.5));let g=new H(new _e(1.5,1.5),new xe({color:"#C8D4DC",metalness:.9,roughness:.08,emissive:"#22303A",emissiveIntensity:.35}));g.rotation.y=Math.PI/2,g.position.set(-t+.005,1.55,-.6),n.add(g),n.userData.mirror=g,n.add(w(.02,1.56,1.56,R("#6A6E72",{metalness:.6}),-t+.001,1.55,-.6));let E=Le(Tt(["M\xC1X. 6 PERSONAS \xB7 450 KG"],{bg:"#2A2C30",fg:"#D8DCE0",size:44,w:600,h:90}),.5,.075);E.position.set(.85,1.82,i+.05),n.add(E);let m=Nt(1.6,.9,"#FFF6E8",1.6);m.rotation.x=Math.PI/2,m.position.set(0,s-.01,-.5),n.add(m);let f=new nt("#FFF4E4",10,7,1.4);f.position.set(0,s-.3,-.3),f.castShadow=!0,n.add(f);let v=new H(new Tn(.3,.06,.14),ho("#FFB040",0));v.position.set(-.7,s-.05,-1.3),n.add(v);let A=new nt("#FFA840",0,6,1.4);A.position.set(-.6,s-.4,-1),n.add(A);let y=new we("#E8ECF0","#3A3634",.5);n.add(y);let D=new nt("#FFE8C8",0,8,1.6);D.position.set(0,1.8,2.4),n.add(D),n.userData.luz=(C,b=0)=>{let F=Math.max(0,Math.min(1,C))*(1-b);m.material.emissiveIntensity=1.6*F,f.intensity=10*F,v.material.emissiveIntensity=2.4*(1-F),A.intensity=9*(1-F),y.intensity=.14+.36*F,y.color.set(F>.5?"#E8ECF0":"#FFC890"),D.intensity=3.2*(1-F)},n.userData.luz(e.luz??1)};Ee.rellano=(n,e)=>{let t=!!e.night;n.background=new ae("#14120F"),n.fog=new Re("#2A2620",.035),n.add(hi(14,10,e.portal?"#D8D0C0":"#B8A890",e.portal?"#C8C0B0":"#A89880",8));let i=e.portal?"#E8E0D0":"#D8C8A8";n.add(w(6.38,3.4,.3,R(i),-3.81,1.7,-3.2)),n.add(w(6.38,3.4,.3,R(i),3.81,1.7,-3.2)),n.add(w(1.24,1.2,.3,R(i),0,2.8,-3.2)),n.add(w(.3,3.4,10,R(i),-5,1.7,0)),n.add(w(.3,3.4,10,R(i),5,1.7,0)),n.add(w(14,.2,10,R("#F0EAE0"),0,3.4,0));for(let E of[-1,1])n.add(w(6.3,.9,.02,R(e.portal?"#8A6A4A":"#9A7A5A"),E*3.85,.45,-3.04));n.add(w(1.5,.12,.1,kn("#9EA2A6"),0,2.26,-3.02));for(let E of[-1,1])n.add(w(.12,2.3,.1,kn("#9EA2A6"),E*.69,1.13,-3.02));let s=new le;s.add(w(1.3,.05,1.6,R("#4A4440"),0,0,-.8)),s.add(w(1.3,2.2,.05,Wa(),0,1.1,-1.6));for(let E of[-1,1])s.add(w(.05,2.2,1.6,Wa(),E*.65,1.1,-.8));let r=Nt(1.1,1.2,"#FFF6E8",1.8);r.rotation.x=Math.PI/2,r.position.set(0,2.18,-.8),s.add(r),s.position.set(0,0,-3.05),n.add(s);let o=new nt("#FFF4E4",0,5,1.4);o.position.set(0,1.8,-3.6),n.add(o);let a=kn("#B4B8BC"),l=w(.62,2.2,.05,a,-.31,1.1,-3),c=w(.62,2.2,.05,a,.31,1.1,-3);n.add(l,c),n.userData.doors=E=>{l.position.x=-.31-.6*E,c.position.x=.31+.6*E,o.intensity=8*E},n.userData.doors(e.open||0);let h=Tf(e.piso??8);h.scale.setScalar(.8),h.position.set(0,2.55,-3.02),n.add(h),n.userData.display=h;let d=w(.1,.2,.03,kn(),.95,1.2,-3.03);n.add(d);let u=new H(new gt(.03,10,8),ho("#FFB040",1));u.position.set(.95,1.2,-3),n.add(u);let p=Sf(String(e.piso??8),.45,.3,"#2A2A34","#F2C14E");if(p.position.set(1.5,2.2,-3.03),n.add(p),e.portal){let E=new le;for(let f=0;f<12;f++)E.add(w(.36,.26,.04,R("#8E6242"),-.6+f%4*.4,-Math.floor(f/4)*.3,0)),E.add(w(.2,.02,.02,R("#2A2A2A"),-.6+f%4*.4,-Math.floor(f/4)*.3+.05,.03));E.position.set(-3,1.9,-3.03),n.add(E),n.add(w(.04,2.6,2,R("#9FC8E8",{transparent:!0,opacity:.35,metalness:.3,roughness:.1}),4.84,1.3,.5));let m=Le(Tt(["PORTAL"],{bg:"#2A2A34",fg:"#F2C14E",size:80,w:400,h:120}),.8,.24);m.position.set(-3,2.6,-3.03),n.add(m)}else for(let[E,m]of[[-3.2,"A"],[3.2,"B"]]){n.add(w(1,2.2,.06,R("#6B4A33"),E,1.1,-3.02));let f=Le(Tt([String(e.piso??8)+"\xBA"+m],{bg:"#C8A858",fg:"#2A2A34",size:70,w:240,h:110}),.3,.14);f.position.set(E,1.85,-2.98),n.add(f);let v=new H(new gt(.04,10,8),kn("#D8B860"));v.position.set(E+.38,1.05,-2.96),n.add(v)}let g=[];for(let E of[-2.5,2.5]){let m=new H(new gt(.16,14,10),ho("#FFE8C0",t?1.4:2));m.position.set(E,3.15,-1),n.add(m),g.push(m);let f=new nt("#FFE0B0",t?6:9,9,1.4);f.position.set(E,2.9,-.8),f.castShadow=E<0,n.add(f)}n.add(new we("#F4ECE0","#4A4034",t?.35:.6))};var ts=3;Ee.hueco=(n,e)=>{n.background=new ae("#05060C"),n.fog=new Re("#0A0C18",.02),dt(n,-120,500,260,[[0,"#04050C"],[.6,"#0E1230"],[1,"#2A2450"]]),En(n,1600,220,3),Qn(n,-60,300,50,["#0C0E1E","#12142A","#181A34"],!0,6);let t=13*ts,i=R("#3A3A42",{roughness:.95});n.add(w(4.4,t+2,.3,i,0,t/2,-2.2));for(let g of[-1,1])n.add(w(.3,t+2,3.2,i,g*2.2,t/2,-.8));for(let g=0;g<=13;g++){let E=g*ts;if(n.add(w(4.1,.14,.1,R("#6A6A74"),0,E-.07,-2.02)),g===0&&n.add(w(4.1,.25,3.2,R("#5A5A64"),0,-.12,-.8)),g<=12){let m=Le(Tt([g===0?"BAJO":"PISO "+g],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:420,h:110}),.9,.24);m.position.set(-1.55,E+2.5,-2.03),n.add(m)}}for(let g of[-1,1])n.add(w(.08,t,.08,kn("#7A7E84"),g*1.75,t/2,-1.6));let s=new le,r=Wa("#A4A8AC");s.add(w(2.6,.12,2.2,R("#3A3634"),0,0,0)),s.add(w(2.6,.1,2.2,R("#5A5E62",{metalness:.4}),0,2.85,0));for(let g of[-1,1])s.add(w(.08,2.8,2.2,r,g*1.3,1.4,0));s.add(w(2.6,2.8,.08,r,0,1.4,-1.1));let o=Nt(1.6,1,"#FFF6E8",1.6);o.rotation.x=Math.PI/2,o.position.set(0,2.79,0),s.add(o);let a=new nt("#FFF4E4",8,5,1.4);a.position.set(0,2.4,.3),s.add(a);let l=new nt("#FFA840",0,5,1.4);l.position.set(0,2.4,.3),s.add(l),s.add(w(.4,.3,.4,R("#2A2A2E",{metalness:.6}),0,3.05,0));for(let g of[-1,1]){let E=w(.18,.3,.18,R("#C9361F",{metalness:.4}),g*1.6,.25,-.5);s.add(E)}s.position.set(0,0,-.6),n.add(s),n.userData.cab=s,n.userData.cabLuz=g=>{o.material.emissiveIntensity=1.6*g,a.intensity=8*g,l.intensity=7*(1-g)};let c=new H(new tt(.6,.6,.3,24),kn("#6A6E74"));c.rotation.x=Math.PI/2,c.position.set(.6,t+.3,-1.4),n.add(c);let h=[];for(let g=0;g<4;g++){let E=new H(new tt(.018,.018,1,6),kn("#2A2C30"));n.add(E),h.push([E,-.09+g*.06])}let d=w(.7,1.6,.3,R("#4A4C52",{metalness:.5}),1.25,0,-1.8);n.add(d);let u=new H(new tt(.03,.03,1,6),kn("#2A2C30"));n.add(u),n.userData.setCab=(g,E=0)=>{s.position.y=g;let m=g+3.2;h.forEach(([A,y])=>{let D=Math.max(.01,(t-m)*(1-E));A.scale.y=D,A.position.set(y,t-D/2,-.6)});let f=t-4-g*.9%(t-6);d.position.y=Math.max(1,t-2-g);let v=t-d.position.y-.8;u.scale.y=Math.max(.01,v),u.position.set(1.25,t-v/2,-1.8)},n.userData.setCab(e.y??7.5*ts);for(let g=0;g<=12;g+=2){let E=new nt("#8A9ACA",2.2,8,1.6);E.position.set(-1.5,g*ts+2.2,.4),n.add(E)}n.add(new we("#6A78A8","#101018",.5));let p=Oe(12);for(let g=0;g<13;g++)for(let E of[-1,1])for(let m=0;m<2;m++){let f=p()<.55,v=Nt(.8,1,f?"#FFD890":"#1A1C2A",f?1.2:.2);v.position.set(E*(3.2+m*1.6),g*ts+1.6,-.6),n.add(v),n.add(w(1.4,ts,.2,R("#2A2A34"),E*(3.2+m*1.6),g*ts+ts/2,-.75))}e.fuegos&&(n.userData.fuegos=!0)};Ee.feria=(n,e)=>{n.background=new ae("#2A2018"),n.fog=new Re("#6A5A44",.03),n.add(hi(40,30,"#8A7258","#7E6850",14));for(let l=-3;l<=3;l++){n.add(w(.25,12,.25,R("#4A4A4E",{metalness:.5}),l*4,6,-9));let c=new H(new rn(2,.1,6,24,Math.PI),R("#4A4A4E",{metalness:.5}));c.position.set(l*4+2,12,-9),n.add(c)}for(let l=0;l<8;l++){let c=Nt(3.6,4,"#FFF0D0",.55);c.position.set(-14+l*4,7,-9.15),n.add(c)}let t=["#C9361F","#F4F0E4","#2A4A8A"];for(let l=0;l<9;l++)n.add(w(.6,.4,.02,R(t[l%3]),-8+l*2,9.5,-6));let i=R("#6A4A30",{roughness:.8});for(let l of[-1,1])n.add(w(.25,9,.25,i,l*1.4,4.5,-3));n.add(w(3.2,.3,.4,i,0,9,-3));for(let l=1;l<9;l+=1.5)for(let c of[-1,1]){let h=w(.08,2.1,.08,i,c*1.4,l,-3.2);h.rotation.z=c*.7,n.add(h)}let s=new H(new tt(.4,.4,.15,18),R("#3A3A3E",{metalness:.6}));s.rotation.x=Math.PI/2,s.position.set(0,9.3,-3),n.add(s);let r=new le;r.add(w(2.4,.15,1.8,R("#8A6A44"),0,0,0));for(let l of[-1,1])r.add(w(.08,1,.08,i,l*1.1,.5,.8));r.add(w(2.3,.06,.06,i,0,1,.8));for(let l of[-1,1]){let c=w(.16,.2,.16,R("#3A3A3E",{metalness:.6}),l*1.3,.05,0);r.add(c)}r.position.set(0,5,-3),n.add(r),n.userData.plat=r;let o=new H(new tt(.03,.03,1,6),R("#C8A870"));n.add(o),n.userData.rope=o,n.userData.setPlat=(l,c=0)=>{r.position.y=l;let h=(9.2-(l+.1))*(1-c);o.visible=h>.02,o.scale.y=Math.max(.01,h),o.position.set(0,9.2-h/2,-3)},n.userData.setPlat(e.y??5);let a=Le(Tt(["NUEVA YORK \xB7 1854"],{bg:"#3A2A1A",fg:"#F4E0B0",size:80,w:900,h:140}),4,.62);a.position.set(0,10.6,-8.8),n.add(a),n.add(new we("#FFE8C8","#5A4A38",.9)),n.add(Ke("#FFD8A0",2.2,[-6,14,8],14,50))};var NE=n=>Math.max(0,Math.min(2.6,2.6-(n+3)/.32*.18));Ee.escalera=(n,e)=>{n.background=new ae("#1E1A16"),n.fog=new Re("#2A2620",.04),n.add(hi(14,10,"#C8B898","#B8A888",8)),n.add(w(16,7,.3,R("#E0D4BC"),0,3.5,-2.4));for(let o=0;o<15;o++){let a=w(.34,.18*(15-o),1.6,R("#B8A890",{roughness:.8}),-3+o*.32+.16,.09*(15-o),-1.3);a.receiveShadow=!0,n.add(a),n.add(w(.34,.03,1.62,R("#8A7A60"),-3+o*.32+.16,.18*(15-o)+.01,-1.3))}n.add(w(2.6,2.6,1.6,R("#B8A890"),-4.3,1.3,-1.3));let i=new H(new tt(.03,.03,5.7,8),R("#5A3A22"));i.position.set(-.6,2.4,-.45),i.rotation.z=Math.atan2(2.7,4.8)+Math.PI/2,n.add(i);for(let o=0;o<14;o+=2)n.add(w(.025,.9,.025,R("#2A2A2E"),-2.9+o*.32,NE(-2.9+o*.32)+.45,-.5));let s=Sf(String(e.piso??9),.5,.34,"#2A2A34","#F2C14E");s.position.set(-4.2,3.6,-2.23),n.add(s);let r=Nt(1.1,1.4,e.night?"#2A3A6A":"#FFF4D8",e.night?.5:1.6);r.position.set(1.5,3.4,-2.23),n.add(r);for(let o of[-3.5,2]){let a=new nt("#FFE0B0",8,9,1.4);a.position.set(o,4.4,.5),a.castShadow=o<0,n.add(a)}n.add(new we("#F4ECE0","#4A4034",.6))};var Tr=[],OE=999,xf=n=>n+1<oo.length?oo[n+1]:OE,Nh=(n,e,t)=>n.map((i,s)=>e[s]+(i-e[s])*t),Cf=(n,e)=>{let t=n.k??1.35;if(n.c&&t!==1){let[i,s,r,o]=n.c;n.c=[Nh(i,s,t),s,Nh(r,o,t),o]}else n.cam&&t!==1&&(n.cam=n.cam.map(([i,s,r])=>[i,Nh(s,r,t),r]),n.f&&(n.f=n.f.map(([i,s])=>[i,s*t])));if(n.c){let[i,s,r,o]=n.c;n.cam=[[0,i,s],[e,r,o]];let a=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2]);n.f=[[0,a(i,s)],[e,a(r,o)]]}return n},ee=(n,e)=>{let t=oo[n],i=xf(n),s=Math.min(i,535.2)-t;Tr.push([(r,o)=>Fh(r,o,Cf(e(s,t),s)),t,i])},BE=(n,e,t)=>{let i=Math.min(e,535.2)-n;Tr.push([(s,r)=>Fh(s,r,Cf(t(i,n),i)),n,e])},qa=(n,e,t)=>{let i=oo[n],s=xf(n),r=[i],o=i;for(let a of e){let[l,c]=Array.isArray(a)?a:[a,1];for(let h=0;h<c;h++)o=Ph(l,o+.01);r.push(o)}r.push(s),t.forEach((a,l)=>BE(r[l],r[l+1],a))},Ps=n=>({tipo:"humano",...n}),Ce=(n={})=>Ps({glow:.1,...n});var HE=(n={})=>Ps({outfit:"amarelo",hair:"long",hairc:"#4A2A1A",lash:!0,...n});var uo=(n={})=>Ps({outfit:"jaleco",glasses:!0,glow:0,tint:"#E8E2D8",...n});var G=(n,e,t=0)=>Ph(e,n+t)-n,Ot=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||72,a={w:Math.max(720,Math.max(...r.map(c=>c.length))*o*.66+90),...s},l=Le(Tt(Array.isArray(e)?e:[e],{bg:"#2A2A34",fg:"#F2C14E",size:72,w:720,h:150,...a}),t,t*(a.h||150)/(a.w||720));return l.position.set(...i),l.renderOrder=4,n.add(l),l},an=(n,e,t,i,s={})=>Ot(n,e,t,i,{bg:"#FBF7EC",fg:"#2A2A34",...s}),di=(n,e,t,i,s={})=>Ot(n,e,t,i,{bg:"#6A3AB8",fg:"#FFFFFF",...s});var ve=(n,e,t,i=1e9,s)=>{let r=at(t,t+.2,e)*(1-at(i,i+.2,e));n.visible=r>.01,n.scale.setScalar(Math.max(.001,.5+.5*r)),s&&Fn(n,s)},zh=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*9)*18,20]});var zE=(n,e)=>n.pose({head:Math.sin(e*7)*6,bob:Math.abs(Math.sin(e*7))*.02}),kh=(n,e)=>n.pose({armL:[12,8],armR:[50+Math.sin(e*8)*15,30],bob:Math.abs(Math.sin(e*8))*.015}),fo=n=>n.pose({armL:[12,8],armR:[95,0]});var kE=n=>{for(let e of Object.values(n.legs))e.th.visible=!1,e.shin&&(e.shin.visible=!1)},Is=n=>{n.pose({armL:[8,6],armR:[8,6]}),kE(n)};var Ya=n=>{let e=new P;return n.arms.R.hand.getWorldPosition(e),e},br=n=>{let e=[-1,1].map(t=>{let i=it("#FF3A4A",.42,0);return i.position.set(t*.2,-.12,.08),n.head.add(i),i});return t=>e.forEach(i=>i.material.opacity=t*.85)},GE=(n,e=6)=>{let t=[];for(let i=0;i<e;i++){let s=Le(ro(i%2?"\u266A":"\u266B","#F2C14E",150),.35,.28);s.renderOrder=5,n.add(s),t.push(s)}return(i,s,r,o=!0)=>t.forEach((a,l)=>{let c=(i*.5+l/e)%1;a.visible=o,a.position.set(s.x+.4+Math.sin(l*2+i)*.3+c*.4,s.y+c*1.2,s.z),a.material.opacity=Math.sin(c*Math.PI),Fn(a,r)})},is=(n,e=10,t="#FFF2C0")=>{let i=[];for(let s=0;s<e;s++){let r=it(t,.3,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.8+l/e)%1;a.position.set(r[0]+Math.sin(l*2.4)*r[3],r[1]+Math.cos(l*1.7)*r[3]*.6,r[2]),a.material.opacity=o*Math.sin(c*Math.PI)*.9,a.scale.setScalar(.15+Math.sin(c*Math.PI)*.25)})},VE=n=>{let e=[0,1,2].map(()=>{let t=Le(ro("Z","#B8C8FF",150),.3,.24);return t.renderOrder=5,n.add(t),t});return(t,i,s,r=!0)=>e.forEach((o,a)=>{let l=(t*.35+a/3)%1;o.visible=r,o.position.set(i[0]+l*.6,i[1]+l*.9,i[2]),o.material.opacity=Math.sin(l*Math.PI),o.scale.setScalar(.6+l*.6),Fn(o,s)})};var po=(n,e={})=>n({eyes:[[0,"shut"]],...e,pose:(t,i)=>{t.pose({armL:[10,6],armR:[10,6]}),of(t),e.p2&&e.p2(t,i)}});var Ze=(n,e={})=>{let t=[["rosa","long","#6B3A22"],["azul",null,null],["amarelo","afro","#2a1b18"],["verde","bob","#D9B65A"],["laranja",null,null],["terno2",null,null],["rosa","bun","#3a2030"],["jaleco",null,null]][n%8];return Ps({outfit:t[0],hair:t[1],hairc:t[2],lash:!!t[1],glow:0,...e})},Fs=(n,e,t,i,s=60)=>{let r=Array.isArray(e)?e:[e],o=Math.max(640,Math.max(...r.map(c=>c.length))*s*.62+80),a=Math.round(s*1.25*r.length/.72+60),l=Le(lf(r,{w:o,h:a,size:s}),t,t*a/o);return l.position.set(...i),l.renderOrder=6,n.add(l),l};var Ff=(n,e,t)=>{e<=0||(n.position.x+=Math.sin(t*63)*e,n.position.y+=Math.cos(t*51)*e)},WE=(n,e,t=5,i=7)=>{let s=new nt("#FFD8A0",t,i,1.6);return s.position.set(...e),n.add(s),s};var bf=[["rosa","long","#6B3A22"],["amarelo","afro","#2a1b18"],["azul","bob","#D9B65A"],["verde","long","#3a2418"],["roxo","bun","#3a2030"],["rosa","bob","#22161a"],["amarelo","bun","#8a4a26"],["laranja","long","#1E120C"]],XE=(n,e={})=>{let[t,i,s]=bf[n%bf.length];return Ps({outfit:t,hair:i,hairc:s,lash:!0,glow:0,...e})},ns=(n=0,e={})=>XE(n,{outfit:"jaleco",glasses:!0,...e}),Gh={bg:"#C9361F",fg:"#fff"},Ds={bg:"#2F5A9A",fg:"#fff"};var Be=(n,e,t,i,s=2.2)=>{let r={y:Ot,w:an,p:di,r:(l,c,h,d)=>Ot(l,c,h,d,Gh),b:(l,c,h,d)=>Ot(l,c,h,d,Ds)},o=t.map(([l,,c="y",h=i,d=s])=>r[c](n,l,d,h)),a=t.map(([,l])=>typeof l=="number"?l:G(e,l));return(l,c)=>o.forEach((h,d)=>ve(h,l,a[d],t[d][5]||d+1>=a.length?99:a[d+1]-.15,c))};var qE=(n,e,t,i=.9,s=2,r=1,o="#C8A27A")=>{n.add(w(s,.08,r,R(o),e,i,t));for(let[a,l]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.07,i,.07,R("#5C3C28"),e+a*(s/2-.1),i/2,t+l*(r/2-.1)))};var YE=(n,e,t="")=>Ae(400,520,i=>{i.fillStyle=e,i.fillRect(0,0,400,520),i.fillStyle="#fff",i.font="900 54px Fraunces",i.textAlign="center",i.fillText(n,200,80),i.fillStyle="#43C4B4",i.beginPath(),i.roundRect(100,340,200,200,50),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(200,250,92,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(170,245,16,22,0,0,7),i.ellipse(230,245,16,22,0,0,7),i.fill(),t&&(i.fillStyle="#F2C14E",i.font="900 36px Inter",i.fillText(t,200,140))}),Vh=(n,e,t,i)=>{let s=new H(new _e(t,t*1.3),new xe({map:YE(n,e,i),roughness:.6}));return s.castShadow=!0,s},Za=(n={})=>HE({glow:0,...n});var wr={bg:"#D66A86",fg:"#fff"};var Rr=(n,e=.35,t="#E8667F")=>{let i=Le(ro("\u2665",t,170),e,e*.8);return i.renderOrder=6,n.add(i),i},xr=(n,e=120)=>{let t=n*e/60%1;return 1+.18*Math.exp(-t*9)+.1*Math.exp(-Math.max(0,t-.22)*12)*(t>.22?1:0)};var ZE=(n,e,t,i,s="#E8445A")=>{n.fillStyle=s,n.beginPath(),n.moveTo(e,t+i*.9),n.bezierCurveTo(e-i*1.6,t-i*.2,e-i*.6,t-i*1.3,e,t-i*.45),n.bezierCurveTo(e+i*.6,t-i*1.3,e+i*1.6,t-i*.2,e,t+i*.9),n.fill()};var JE=(n,e={})=>Ae(900,520,t=>{t.fillStyle=e.bg||"#FBF7EC",t.beginPath(),t.roundRect(0,0,900,520,30),t.fill(),t.fillStyle="#2A2A34",t.font="900 46px Inter",t.textAlign="center",t.fillText(e.title||"",450,64);let i=n.length,s=760/i;n.forEach(([r,o,a],l)=>{let c=70+s*l+s/2,h=o*300;t.fillStyle=a,t.beginPath(),t.roundRect(c-s*.3,420-h,s*.6,h,12),t.fill(),t.fillStyle="#2A2A34",t.font="800 30px Inter",r.split(`
`).forEach((d,u)=>t.fillText(d,c,462+u*34))})}),jn=(n,e,t,i,s)=>{let r=Le(JE(e,s),t,t*520/900);return r.position.set(...i),r.renderOrder=5,n.add(r),r},Pf=(n,e=64)=>Ae(700,520,t=>{t.fillStyle="#FFF6C8",t.fillRect(0,0,700,520),t.strokeStyle="#9EC0E8",t.lineWidth=3;for(let i=90;i<520;i+=70)t.beginPath(),t.moveTo(0,i),t.lineTo(700,i),t.stroke();t.fillStyle="#2A3A8A",t.font=`700 ${e}px Caveat`,t.textAlign="center",n.forEach((i,s)=>t.fillText(i,350,260-(n.length-1)*e*.55+s*e*1.1))});var $E=(n,e=-2.5,t="#BFD8DA")=>{let i=Ae(512,512,r=>{r.fillStyle=t,r.fillRect(0,0,512,512),r.strokeStyle="#E8F2F2",r.lineWidth=6;for(let o=0;o<=8;o++)r.beginPath(),r.moveTo(o*64,0),r.lineTo(o*64,512),r.stroke(),r.beginPath(),r.moveTo(0,o*64),r.lineTo(512,o*64),r.stroke()});i.wrapS=i.wrapT=$t,i.repeat.set(4,2);let s=new H(new _e(12,5),new xe({map:i,roughness:.3}));return s.position.set(0,2.5,e),n.add(s),s},QE=(n,e,t)=>{n.add(w(1.2,1.7,.06,R("#8E6242"),e,1.6,t));let i=new H(new _e(1.05,1.55),new qe({color:"#A8C4D8"}));i.position.set(e,1.6,t+.035),n.add(i)},KE=(n,e,t,i=1.3)=>Ot(n,[t],i,e,{bg:"#1E2230",fg:"#FF7A8A"}),If=n=>{let e=uf(["INSTITUTO"],2.6,{bg:"#2F5A9A",fg:"#fff"});e.position.set(0,3.2,-4.2),n.add(e)},Df=(n,e)=>{let t=cf(n,e,4.2,1.6,{bg:"#2F5A48",fg:"#F4F0E4",size:64,font:"Caveat",w:1024,h:390});return t.position.set(0,2.3,-3.38),t},mo=(n,e,t=-.1)=>{for(let i of e){n.add(w(1,.06,.6,R("#C8A27A"),i,.75,t));for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.add(w(.05,.75,.05,R("#6A6E78"),i+s*.44,.37,t+r*.25))}};var ui=(n={})=>({amb:"aula",fov:32,...n}),jE=n=>Df(n,["x\xB2 + 3x = 10","x = ?"]);var Cr={bloom:.45,bloomT:.85,vig:.55},Di=(n,e,t,i,s={})=>{let r=Array.isArray(e)?e:[e],o=s.size||60,a=Math.round(Math.max(640,Math.max(...r.map(d=>d.length))*o*.6+220)),l=Math.round(o*1.2*r.length+230),c=af(r,{w:a,h:l,size:o,bg:s.bg||"#EFE6FF",fg:s.fg||"#4A2A8A",tail:s.tail||"left"}),h=Le(c,t,t*l/a);return h.position.set(...i),h.renderOrder=6,n.add(h),h},Li=(n,e,t,i={})=>{let s=t.map(([o,,a,l=1.6,c={}])=>Di(n,o,l,a,{...i,...c})),r=t.map(([,o])=>typeof o=="number"?o:G(e,o));return(o,a)=>s.forEach((l,c)=>ve(l,o,r[c],i.keep?1e9:c+1<r.length?r[c+1]-.1:1e9,a))},ey=()=>Ae(256,256,n=>{n.clearRect(0,0,256,256),n.strokeStyle="#C8A8FF",n.lineWidth=12,n.beginPath(),n.arc(128,128,108,0,7),n.stroke()}),dn=(n,e=3,t)=>{let i=[...Array(e)].map(()=>{let r=Le(ey(),.6,.6);return r.renderOrder=5,r.castShadow=!1,n.add(r),r}),s=new P;return(r,o,a,l=1)=>{o.head.getWorldPosition(s),i.forEach((c,h)=>{let d=(r*.6+h/e)%1;c.visible=l>.01,c.position.copy(s),c.scale.setScalar(.7+d*1.4),c.material.opacity=l*(1-d)*.85,Fn(c,a)})}};var ty=()=>{let n=Ae(1024,256,e=>{e.fillStyle="#BFE0F2",e.fillRect(0,0,1024,256);let t=Oe(5);for(let i=0;i<24;i++){e.fillStyle=["#D88A6A","#E8C27A","#8AA8C8","#C8B8A0"][i%4];let s=40+t()*60,r=60+t()*150;e.fillRect(i*44,256-r,s,r)}e.fillStyle="#6EAA50";for(let i=0;i<12;i++)e.beginPath(),e.arc(i*90+30,236,32,0,7),e.fill()});return n.wrapS=$t,n},Fr=n=>{n.add(w(12,3.4,.1,R("#E8E2D2"),0,1.7,-1.8));let e=ty(),t=new H(new _e(9,1.1),new qe({map:e,toneMapped:!1}));t.position.set(0,1.9,-1.74),n.add(t);for(let s of[-4.5,-1.5,1.5,4.5])n.add(w(.12,1.2,.05,R("#C8C2B2"),s,1.9,-1.72));for(let s of[-3.2,-1.8,-.4,1,2.4,3.8])n.add(w(.9,.45,.55,R("#2F5A9A"),s,.45,-1.3)),n.add(w(.9,.75,.12,R("#2F5A9A"),s,.95,-1.55));for(let s of[-2.2,.4,3]){let r=new H(new tt(.03,.03,3.4,8),R("#F2C14E",{metalness:.5,roughness:.3}));r.position.set(s,1.7,-.4),n.add(r)}let i=Le(Tt(["AUTOB\xDAS 7 \xB7 INSTITUTO"],{bg:"#F2C14E",fg:"#2A2A34",size:70,w:900,h:140}),2.4,.37);return i.position.set(0,2.85,-1.7),n.add(i),s=>{e.offset.x=s*.09}};var Wh=(n,e,t)=>{let i=new bn("#FFF2C0",40,9,.32,.45,1.2);i.position.set(e,5,t+1.2),i.target.position.set(e,0,t),n.add(i,i.target);let s=new H(new Zt(.75,32),new qe({color:"#FFF2C0",transparent:!0,opacity:.35,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.set(e,.02,t),n.add(s),[i,s]},ny=n=>Ae(512,360,e=>{e.clearRect(0,0,512,360),e.fillStyle="#EFE6FF",e.strokeStyle="#2A2A34",e.lineWidth=8,e.beginPath(),e.ellipse(256,160,236,150,0,0,7),e.fill(),e.stroke();for(let[t,i,s]of[[150,320,18],[118,348,10]])e.beginPath(),e.arc(t,i,s,0,7),e.fill(),e.stroke();if(e.save(),e.beginPath(),e.ellipse(256,160,228,142,0,0,7),e.clip(),e.filter="blur(3px)",n==="playa"&&(e.fillStyle="#8AC8F2",e.fillRect(0,0,512,180),e.fillStyle="#2F7AB8",e.fillRect(0,180,512,60),e.fillStyle="#F2D79A",e.fillRect(0,240,512,120),e.fillStyle="#F2C14E",e.beginPath(),e.arc(380,90,44,0,7),e.fill()),n==="pan"){e.fillStyle="#F6E7C8",e.fillRect(0,0,512,360),e.fillStyle="#D8A050",e.beginPath(),e.ellipse(256,180,150,70,-.15,0,7),e.fill(),e.strokeStyle="#B87830",e.lineWidth=10;for(let t=-2;t<=2;t++)e.beginPath(),e.moveTo(256+t*50-20,150),e.lineTo(256+t*50+20,200),e.stroke();e.strokeStyle="#C8C0B0",e.lineWidth=6;for(let t=0;t<3;t++)e.beginPath(),e.moveTo(200+t*50,100),e.quadraticCurveTo(220+t*50,70,200+t*50,40),e.stroke()}if(n==="musica"&&(e.fillStyle="#2A2050",e.fillRect(0,0,512,360),e.fillStyle="#F2C14E",e.font="900 150px Inter",e.textAlign="center",e.fillText("\u266A \u266B \u266A",256,220)),n==="nada"&&(e.fillStyle="#D8D4E0",e.fillRect(0,0,512,360)),n==="pizza"){e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#E8A040",e.beginPath(),e.moveTo(256,300),e.lineTo(130,60),e.quadraticCurveTo(256,20,382,60),e.fill(),e.fillStyle="#C9361F";for(let[t,i]of[[230,110],[290,130],[256,190],[215,70],[310,75]])e.beginPath(),e.arc(t,i,18,0,7),e.fill()}if(n==="tele"&&(e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#2A2A34",e.beginPath(),e.roundRect(130,70,252,170,16),e.fill(),e.fillStyle="#8AC8F2",e.fillRect(146,86,220,138),e.fillStyle="#F2C14E",e.beginPath(),e.moveTo(230,120),e.lineTo(290,155),e.lineTo(230,190),e.fill(),e.fillStyle="#2A2A34",e.fillRect(240,240,32,30)),n==="gato"){e.fillStyle="#BFE0F2",e.fillRect(0,0,512,360),e.fillStyle="#2A2A34",e.beginPath(),e.arc(256,190,70,0,7),e.fill(),e.beginPath(),e.moveTo(200,150),e.lineTo(205,80),e.lineTo(245,125),e.fill(),e.beginPath(),e.moveTo(312,150),e.lineTo(307,80),e.lineTo(267,125),e.fill(),e.fillStyle="#F2C14E",e.beginPath(),e.arc(230,180,12,0,7),e.arc(282,180,12,0,7),e.fill(),e.fillStyle="#2F7AB8";for(let t=0;t<6;t++)e.beginPath(),e.arc(150+t*45,290,14,0,7),e.fill()}if(n==="calcetin"&&(e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#C9361F",e.beginPath(),e.roundRect(220,60,70,170,16),e.fill(),e.beginPath(),e.roundRect(220,180,150,70,30),e.fill(),e.fillStyle="#FBF7EC",e.fillRect(220,60,70,26)),n==="galleta"){e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#C88A4A",e.beginPath(),e.arc(256,180,100,0,7),e.fill(),e.fillStyle="#4A2A1A";for(let[t,i]of[[220,150],[290,160],[250,220],[300,220],[210,200]])e.beginPath(),e.arc(t,i,12,0,7),e.fill()}if(n==="libro"&&(e.fillStyle="#FFF0D8",e.fillRect(0,0,512,360),e.fillStyle="#2F5A9A",e.beginPath(),e.roundRect(180,70,150,200,10),e.fill(),e.fillStyle="#F2C14E",e.fillRect(205,110,100,18)),n==="casa"){e.fillStyle="#3A3E5C",e.fillRect(0,0,512,360),e.fillStyle="#C8B8A0",e.fillRect(176,150,160,130),e.fillStyle="#8A4A3A",e.beginPath(),e.moveTo(156,155),e.lineTo(256,70),e.lineTo(356,155),e.fill(),e.fillStyle="#5A6A8A";for(let t=0;t<14;t++)e.fillRect(40+t*32,20+t*53%120,4,30)}n==="yo"&&(e.fillStyle="#FFE8F0",e.fillRect(0,0,512,360),e.fillStyle="#111",e.beginPath(),e.arc(256,150,70,0,7),e.fill(),e.fillStyle="#43C4B4",e.beginPath(),e.roundRect(196,210,120,110,30),e.fill(),e.fillStyle="#fff",e.beginPath(),e.arc(232,140,10,0,7),e.arc(280,140,10,0,7),e.fill(),e.fillStyle="#E8445A",e.font="900 70px Inter",e.fillText("\u2665",340,110)),e.restore()}),iy=(n,e,t,i)=>{let s=Le(ny(e),t,t*360/512);return s.position.set(...i),s.renderOrder=6,n.add(s),s};var ss={exposure:1.02,bloom:.35};var Lf={bg:"#E8667F",fg:"#fff"};var FA=(()=>{let n=[];for(let e of[-1,1])for(let t of[0,1])for(let i=0;i<5;i++)n.push([e*(2.9+t*.75),-2+i*.8,e*-Math.PI/2]);return n})();var Uf=(n,e,t,i=2)=>{n.add(w(i,.08,.5,R("#A87A52"),e,.5,t)),n.add(w(i,.5,.08,R("#A87A52"),e,.8,t-.24));for(let s of[-1,1])n.add(w(.08,.5,.45,R("#3A3A44"),e+s*(i/2-.15),.25,t))};var Xh={amb:"cuartoYo",ambo:{night:!0}},Ja={exposure:.95,bloom:.45};var sy={bg:"#1E2230",fg:"#F2C14E"};var ry=(n,e=6,t="#8AC8F2")=>{let i=[];for(let s=0;s<e;s++){let r=it(t,.12,0);n.add(r),i.push(r)}return(s,r,o=1)=>i.forEach((a,l)=>{let c=(s*.9+l/e)%1;a.position.set(r[0]+Math.sin(l*2.3)*r[3],r[1]-c*.7,r[2]+.1),a.material.opacity=o*(1-c)})};var qh=(n,e,t,i,s="#F2C14E",r=150)=>{let o=Le(ro(e,s,r),t,t*.8);return o.position.set(...i),o.renderOrder=6,n.add(o),o};var Nf=-.28,Un=n=>Uf(n,0,-.5,2.2);var oy=(n,e=2.2,t=.12,i=.95)=>{let s=Math.abs(Math.sin(n*e*Math.PI));return t+(i-t)*s},wf=(n,e,t)=>{n.add(w(.12,3,.12,R("#4A4A54",{metalness:.5}),e,1.5,t)),n.add(w(1.3,.9,.06,R("#F4F0E4"),e,3.05,t+.1)),n.add(w(.5,.36,.07,R("#C9361F"),e,2.85,t+.11));let i=new H(new rn(.23,.02,8,24),R("#E0602A"));i.rotation.x=Math.PI/2,i.position.set(e,2.68,t+.38),n.add(i)},ln=n=>{If(n);for(let e=-6;e<=6;e++)n.add(w(.06,1.2,.06,R("#6A6E78"),e*.9,.6,-3.6));n.add(w(11,.05,.05,R("#6A6E78"),0,1.15,-3.6))};var Rf=n=>Ae(256,256,e=>{e.clearRect(0,0,256,256),e.save(),e.beginPath(),n<0?(e.moveTo(0,0),e.lineTo(128,0),e.lineTo(112,70),e.lineTo(140,120),e.lineTo(112,170),e.lineTo(128,256),e.lineTo(0,256)):(e.moveTo(256,0),e.lineTo(128,0),e.lineTo(112,70),e.lineTo(140,120),e.lineTo(112,170),e.lineTo(128,256),e.lineTo(256,256)),e.closePath(),e.clip(),ZE(e,128,140,80,"#E8445A"),e.restore()}),ay=(n,e=.6)=>{let t=new le,i=Le(Rf(-1),e,e),s=Le(Rf(1),e,e);return i.renderOrder=s.renderOrder=6,t.add(i,s),n.add(t),{g:t,set:r=>{i.position.set(-r*.12,-r*.05,0),s.position.set(r*.12,r*.05,0),i.rotation.z=r*.25,s.rotation.z=-r*.25}}};var Yh=(n={})=>Ps({outfit:"roxo",hair:"bun",hairc:"#3a2030",lash:!0,glow:0,...n}),fi=(n={})=>Ps({outfit:"azul",hair:"afro",hairc:"#2a1b18",glow:0,...n});var Nn={exposure:1.05,bloom:.3},ei={amb:"sala",fov:30,ambo:{wall:"#C98E5A"}},An={bg:"#FFE0E6",fg:"#A0203A"},ly={bg:"#2A2A34",fg:"#E8E2D2"},rs={bg:"#FFFFFF",fg:"#2A2A34"},Ls=n=>{let e=new le,t=new H(new Zt(.045,20),new qe({color:"#E8483A"})),i=new H(new Zt(.013,12),new qe({color:"#FFB0A0"}));return i.position.set(-.012,.014,.001),e.add(t,i),e.position.set(.1,.19,.02),n.head.add(e),e},Zh=n=>{let e=new H(new Zt(.4,32),R("#2E8C80"));return e.position.set(0,-.02,-.04),n.head.add(e),e},ti=(n,e=!0)=>{n.add(w(3,.9,.6,R("#F4F0E4"),-1.4,.45,-2)),n.add(w(3,.05,.64,R("#8E6242"),-1.4,.92,-2));for(let t=0;t<4;t++)n.add(w(.6,.7,.3,R("#E8DCC4"),-2.5+t*.72,2.1,-2.15));n.add(w(.9,2,.6,R("#DDE2E6",{metalness:.3,roughness:.4}),1.8,1,-2)),e&&qE(n,0,.35,.78,1.8,.7,"#C8A27A")},cy=()=>{let n=new le;return n.add(w(.2,.03,.2,R("#D8A050"),0,0,0,!1)),n.add(w(.16,.01,.16,R("#8A4A2A"),0,.02,0,!1)),n},hy=()=>{let n=new le;n.add(w(.025,.22,.02,R("#C8CED6",{metalness:.6,roughness:.3}),0,0,0,!1));let e=new H(new gt(.045,12,8),R("#C8CED6",{metalness:.6,roughness:.3}));return e.scale.set(1,1.3,.4),e.position.y=.13,n.add(e),n},dy=(n,e,t)=>{n.add(w(.7,1.1,.4,R("#6B4A33"),e,.55,t)),n.add(w(.8,.06,.5,R("#8E6242"),e,1.12,t))},uy=n=>{for(let e=-5;e<=5;e++)n.add(w(.62,2,.5,R(e%2?"#4A7AB8":"#3E6AA4"),e*.66,1,-2.2)),n.add(w(.06,.2,.02,R("#D8DCE2"),e*.66+.2,1.2,-1.94))},Jh={amb:"sala",fov:30,ambo:{wall:"#8AA0B8",win:!1}},Pr=(n,e,t,i={})=>{let s=i.pose;return n({x:e,z:t,y:Nf,...i,pose:(r,o)=>{Is(r),s&&s(r,o)}})},Ft=(n,e,t,i,s=1.5,r=.55,o=.78,a={})=>{let l=Di(n,i,s,[0,0,0],a),c=new P;return(h,d,u,p)=>{e[t].head.getWorldPosition(c),l.position.set(c.x+r,c.y+o,c.z+.05),ve(l,h,d,u,p)}},Ir=(n,e,t=1)=>n.pose({armL:[14+Math.sin(e*40)*4*t,8],armR:[14+Math.cos(e*38)*4*t,8],legL:[Math.sin(e*45)*5*t,0],legR:[Math.cos(e*43)*5*t,0]}),fy=(n,e)=>n.pose({armL:[12,8],armR:[150+Math.sin(e*12)*8,125]}),py=(n,e)=>n.pose({lean:-16,head:14,armL:[35+Math.sin(e*9)*8,40],armR:[35+Math.cos(e*9)*8,40]}),my=(n,e)=>n.pose({armL:[40,60],armR:[40,60],bob:Math.abs(Math.sin(e*12))*.04,head:Math.sin(e*12)*5}),Of=[[-1,1.8,2.8],[-1.1,1.1,-1],[-1,1.7,2.3],[-1.1,1.1,-1]],go=[[.6,1.55,2.3],[.6,1.45,-.6],[.6,1.55,1.9],[.6,1.5,-.6]],os=(n={})=>Yh({x:.6,z:-.6,...n}),Dr=(n,e)=>n.pose({armL:[50,70],armR:[55+Math.sin(e*8)*10,60+Math.sin(e*8)*15],head:-8}),Eo=(n,e,t)=>{let i=cy();return n.add(i),()=>{let s=Ya(e[t]);i.position.set(s.x-.12,s.y-.02,s.z+.1)}};ee(0,(n,e)=>({amb:"cuartoYo",fov:30,atores:[po(Ce,{x:-.7,z:-1,y:.97})],extra:t=>{let i=xs(.45,7);i.position.set(.3,1.3,-1.6),t.add(i);let s=Be(t,e,[[["LUNES"],.1,"y",[-.6,2,-.8],.9],[["7:30 DE LA MA\xD1ANA"],"siete","w",[-.6,2,-.8],1.6,1]]),r=VE(t);return{update:(o,a,l)=>{s(o,l),r(o,[-1.5,1.3,-1],l)}}},c:Of,range:2.5,look:Nn}));ee(1,(n,e)=>{let t=G(e,"suena"),i=G(e,"apagas"),s=G(e,"voz");return{amb:"cuartoYo",fov:30,atores:[po(Ce,{x:-.7,z:-1,y:.97,eyes:[[0,"shut"],[t+.3,"flat"],[s-.3,"wide"]]})],extra:(r,o,a)=>{let l=xs(.45,7);l.position.set(.3,1.3,-1.6),r.add(l);let c=Ot(r,["\xA1RIIIING!"],1.1,[.3,2,-1.2],Gh),h=di(r,["UNA VOZ"],1,[-.6,2,-.8]),d=dn(r);return{update:(u,p,g)=>{l.rotation.z=u<i?Math.sin(u*50)*.12:0,ve(c,u,t,i,g),ve(h,u,s,99,g),d(u,a[0],g,at(s-.2,s+.3,u))}}},c:Of,range:2.5,look:Nn}});ee(2,(n,e)=>({...ei,atores:[os({eyes:[[0,"flat"]],pose:Dr})],extra:(t,i,s)=>{ti(t,!1);let r=Eo(t,s,0),o=Li(t,e,[[["OTRA VEZ TARDE\u2026"],.05,[-.1,2.05,-.5],1.5],[["SIEMPRE TARDE."],"siempre",[-.1,2.05,-.5],1.4]],{tail:"right"});return{update:(a,l,c)=>{r(),o(a,c)}}},c:go,range:2.5,look:Nn}));ee(3,(n,e)=>{let t=G(e,"cocina");return{amb:"cuartoYo",fov:30,atores:[Ce({x:0,z:-.4,eyes:[[0,"wide"],[t,"lookl"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:s>t?12:0})})],extra:(i,s,r)=>{let o=dn(i),a=Be(i,e,[[["ES TU MADRE"],"madre","p",[-.95,2.1,-.4],1.5],[["\u2026QUE EST\xC1 EN LA COCINA"],"cocina","w",[-.9,2.1,-.4],1.9,1]]);return{update:(l,c,h)=>{o(l,r[0],h,.6),a(l,h)}}},c:[[0,1.65,3],[0,1.5,-.4],[0,1.65,2.6],[0,1.55,-.4]],range:2.5,look:Nn}});ee(4,(n,e)=>{let t=G(e,"untando");return{...ei,atores:[os({eyes:[[0,"flat"]],pose:Dr})],extra:(i,s,r)=>{ti(i,!1);let o=Eo(i,r,0),a=Be(i,e,[[["LA BOCA CERRADA"],"boca","w",[.6,1.05,-.2],1.3],[["UNTANDO UNA TOSTADA"],t,"y",[.6,1.05,-.2],1.5,1]]);return{update:(l,c,h)=>{o(),a(l,h)}}},c:[[.5,1.4,1.7],[.6,1.4,-.6],[.5,1.4,1.5],[.6,1.25,-.6]],range:2,look:Nn}});ee(5,(n,e)=>{let t=G(e,"bajas"),i=G(e,"sonrie"),s=G(e,"buenos");return{...ei,atores:[Ce({x:-.9,z:-.4,eyes:[[0,"shut"],[t+.6,"flat"]],move:r=>[Jt(-3.2,-.9,at(t-.2,t+1.4,r)),0,-.4],pose:(r,o)=>o<t-.2?fy(r,o):o<t+1.4?r.walk(o*2):r.pose()}),os({eyes:[[0,"flat"],[i,"happy"]],talk:[[s,n]],pose:(r,o)=>o<i?Dr(r,o):r.pose({armL:[12,8],armR:[50,30]})})],extra:(r,o,a)=>{ti(r,!1);let l=Fs(r,["\xA1BUENOS D\xCDAS, CARI\xD1O!"],1.4,[.9,2.15,-.5],56),c=an(r,["TE FROTAS LOS OJOS"],1.6,[-1,2.15,-.4]);return{update:(h,d,u)=>{ve(l,h,s,99,u),ve(c,h,.1,t,u)}}},c:[[0,1.65,3.6],[0,1.4,-.5],[0,1.65,3.2],[0,1.4,-.5]],range:3,look:Nn}});ee(6,(n,e)=>{let t=G(e,"labios"),i=G(e,"ojeras");return{...ei,atores:[os({eyes:[[0,"happy"],[i-.3,"look"]]})],extra:(s,r,o)=>{ti(s,!1);let a=an(s,["SIN MOVER LOS LABIOS"],1.6,[.6,.95,-.2]),l=Ft(s,o,0,["QU\xC9 OJERAS TIENE\u2026"],1.5,-.75,.45,{tail:"right"});return{update:(c,h,d)=>{ve(a,c,t-.3,99,d),l(c,i-.4,99,d)}}},c:go,range:2.5,look:Nn}});ee(7,(n,e)=>{let t=G(e,"movil");return{...ei,atores:[os({eyes:[[0,"look"],[t,"flat"]],pose:i=>i.pose({armL:[60,70],armR:[12,8]})})],extra:(i,s,r)=>{ti(i,!1);let o=Ft(i,r,0,["SEGURO QUE SE QUED\xD3","CON EL M\xD3VIL HASTA LAS DOS"],1.6,-.55,.45,{tail:"right"}),a=Ot(i,["02:00"],.5,[1.1,1.3,-.4],{bg:"#1E2230",fg:"#FF7A8A",size:90,w:360});return{update:(l,c,h)=>{o(l,0,99,h),ve(a,l,t,99,h)}}},c:go,range:2.5,look:Nn}});ee(8,(n,e)=>{let t=G(e,"entendido");return{...ei,atores:[Ce({x:-.5,z:-.3,eyes:[[0,"wide"],[t,"look"]],pose:i=>i.pose({armL:[12,8],armR:[95,60]})})],extra:(i,s,r)=>{ti(i);let o=hy();i.add(o);let a=dn(i),l=Be(i,e,[[["QUIETO"],"quieto","b",[-.5,2.1,-.3],.9],[["LA CUCHARA EN EL AIRE"],"cuchara","w",[-.5,2.1,-.3],1.8],[["LO HAS ENTENDIDO"],t,"p",[-.5,2.1,-.3],1.6,1]]);return{update:(c,h,d)=>{let u=Ya(r[0]);o.position.set(u.x,u.y+.08,u.z+.08),l(c,d),a(c,r[0],d,at(t,t+.3,c))}}},c:[[-.4,1.6,2.7],[-.5,1.45,-.3],[-.4,1.6,2.3],[-.5,1.5,-.3]],range:2.5,look:Nn}});ee(9,(n,e)=>{let t=G(e,"gente");return{amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"wide"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[150,120]})})],extra:(i,s,r)=>{let o=dn(i),a=Be(i,e,[[["HOY PUEDES ESCUCHAR"],.05,"p",[0,2.3,-.4],2,1],[["LO QUE LA GENTE PIENSA"],t-.1,"w",[0,.85,.1],2.1,1]]);return{update:(l,c,h)=>{o(l,r[0],h),a(l,h)}}},c:[[0,1.6,3.8],[0,1.55,-.5],[0,1.6,3.3],[0,1.55,-.5]],range:3,look:Cr}});ee(10,(n,e)=>{let t=G(e,"cualquier"),i=G(e,"ti"),s=["\xBFLLOVER\xC1?","PIZZA","\xBFY EL BUS?","SUE\xD1O"];return{amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"look"],[i,"wide"]],pose:(r,o)=>r.pose({armL:[12,8],armR:[o>i?90:12,o>i?120:8]})})],extra:(r,o,a)=>{let l=s.map((h,d)=>Di(r,[h],.8,[-1.5+d%2*3,d<2?2.2:1.4,-.6],{size:70,bg:"#E8E2D2",fg:"#6A6258"})),c=Be(r,e,[[["\u2717 DE CUALQUIER COSA"],t,"w",[0,.85,.1],1.8],[["LO QUE PIENSAN DE TI"],i-.3,"p",[0,.85,.1],2,1]]);return{update:(h,d,u)=>{l.forEach((p,g)=>ve(p,h,.1+g*.2,i-.3,u)),c(h,u)}}},c:[[0,1.6,4],[0,1.55,-.5],[0,1.6,3.5],[0,1.55,-.5]],range:3,look:Cr}});ee(11,(n,e)=>{let t=G(e,"medianoche");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=xs(.9,12);s.position.set(0,1.6,-.8),i.add(s);let r=Be(i,e,[[["SOLO UN D\xCDA"],.05,"y",[0,2.55,-.5],1.4],[["HASTA MEDIANOCHE"],t-.1,"p",[0,2.55,-.5],1.8,1]]),o=is(i,8,"#C8A8FF");return{update:(a,l,c)=>{r(a,c),o(a,[0,1.6,-.7,1])}}},c:[[0,1.85,3.4],[0,1.85,-.5],[0,1.85,3],[0,1.85,-.5]],range:3,look:Cr}});ee(12,(n,e)=>{let t=G(e,"suscribete"),i=G(e,"vamos");return{amb:"cuartoYo",fov:32,atores:[Ce({x:-1,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>r>t?zh(s,r):s.pose()})],extra:(s,r,o)=>{let a=Af(2.4);a.position.set(.7,1.8,-1),s.add(a);let l=is(s,14,"#FFE27A"),c=an(s,["\xBFY SI\u2026?"],1,[-1,2.35,-.3]),h=Ot(s,["\xA1VAMOS ALL\xC1!"],1.4,[-1,2.35,-.3],Lf),d=dn(s);return{update:(u,p,g)=>{d(u,o[0],g,.5),ve(c,u,.2,i-.2,g),ve(h,u,i-.2,99,g);let E=at(t-.3,t,u)*(1-at(i-.4,i,u));a.scale.setScalar(Math.max(.01,E)),l(u,[.7,1.8,-.9,1.1],E)}}},c:[[0,1.7,3.8],[0,1.5,-.6],[0,1.65,3.2],[0,1.5,-.6]],range:3,look:Nn}});var Bf=n=>{$E(n,-2),QE(n,0,-1.9)};ee(13,(n,e)=>{let t=G(e,"grano");return{amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"flat"],[t,"wide"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s>t?150:12,s>t?130:8]})})],extra:(i,s,r)=>{Bf(i);let o=Ls(r[0]),a=Be(i,e,[[["EL ESPEJO"],"espejo","w",[-.85,2.15,-.4],1],[["UN GRANO"],t,"r",[1,2.2,-.4],1.1,1]]);return{update:(l,c,h)=>{o.visible=l>t-.1,a(l,h)}}},c:[[0,1.65,3.2],[0,1.5,-.5],[0,1.65,2.7],[0,1.55,-.5]],range:2.5,look:Nn}});ee(14,(n,e)=>{let t=G(e,"enorme"),i=G(e,"planeta");return{amb:"gris",fov:28,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"wide"],[i,"sad"]]})],extra:(s,r,o)=>{Bf(s);let a=Ls(o[0]),l=new H(new rn(.09,.008,8,32),new qe({color:"#F2C14E"}));l.rotation.x=1.2,a.add(l);let c=Be(s,e,[[["EN LA FRENTE"],.05,"w",[0,1.28,-.2],.8],[["ENORME"],t,"r",[0,1.28,-.2],.6],[["ROJO"],"rojo","r",[0,1.28,-.2],.5],[["DEL TAMA\xD1O DE UN PLANETA"],i-.4,"y",[0,1.28,-.2],1.1,1]]);return{update:(h,d,u)=>{a.scale.setScalar(1+at(t,i,h)*1.2),l.visible=h>i-.2,l.rotation.z=h,c(h,u)}}},c:[[0,1.75,2],[0,1.65,-.5],[0,1.75,1.6],[0,1.7,-.5]],range:2,look:Nn}});ee(15,(n,e)=>{let t=G(e,"capucha"),i=G(e,"hoy");return{amb:"barrio",fov:30,atores:[Ce({x:0,z:-.3,eyes:[[0,"sad"]],move:s=>[Jt(-1.6,.6,at(t+.5,n,s)),0,-.3],pose:(s,r)=>r>t+.5?s.walk(r*2):s.pose({armL:[150,130],armR:[150,130]})})],extra:(s,r,o)=>{let a=Zh(o[0]),l=Ls(o[0]),c=an(s,["LA CAPUCHA"],1.1,[-1.2,2.25,-.3]),h=Ft(s,o,0,["HOY TODO EL MUNDO","ME VA A MIRAR EL GRANO"],1.9,.7,.55,rs);return{update:(d,u,p)=>{a.visible=d>t,ve(c,d,t,i-.2,p),h(d,i-.2,99,p)}}},c:[[-.3,1.7,3.6],[-.3,1.5,-.3],[.2,1.7,3.2],[.2,1.5,-.3]],range:3,look:Nn}});var Xa=(n,e,t={})=>Ze(n,{x:e,z:-.6,...t}),$a=(n=0)=>[Xa(1,-2.4+n,{eyes:[[0,"lookl"]]}),Xa(6,-1.2+n,{eyes:[[0,"flat"]]}),Xa(5,1.3+n,{eyes:[[0,"look"]],pose:e=>e.pose({armL:[150,20],armR:[12,8]})}),Xa(3,2.5+n,{eyes:[[0,"sad"]]})],yo=(n,e)=>{Zh(n[e]),Ls(n[e])};ee(16,(n,e)=>{let t=G(e,"peor");return{amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.3,eyes:[[0,"flat"],[t,"shut"]],pose:i=>i.pose({armL:[12,8],armR:[150,20]})}),...$a()],extra:(i,s,r)=>{let o=Fr(i);yo(r,0);let a=Be(i,e,[[["AL AUTOB\xDAS"],.1,"y",[0,2.3,-.3],1.2],[["PREP\xC1RATE PARA LO PEOR"],t-.2,"r",[0,2.3,-.3],2],[["LAS RISAS POR DENTRO"],"risas","w",[0,2.3,-.3],1.9,1]]);return{update:(l,c,h)=>{o(l),a(l,h),Ff(h,.004,l)}}},c:[[0,1.7,4.2],[0,1.45,-.4],[0,1.7,3.7],[0,1.45,-.4]],range:3}});ee(17,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"],[.6,"lookl"]],pose:t=>t.pose({armL:[12,8],armR:[150,20]})})],extra:(t,i,s)=>{let r=Fr(t);yo(s,0);let o=dn(t),a=an(t,["NADA"],.8,[-.9,2.1,-.3]);return{update:(l,c,h)=>{r(l),o(l,s[0],h,.6),ve(a,l,.3,99,h)}}},c:[[0,1.7,2.8],[0,1.6,-.3],[0,1.7,2.5],[0,1.6,-.3]],range:2.5}));ee(18,(n,e)=>({amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"]],pose:t=>t.pose({armL:[12,8],armR:[150,20]})}),...$a()],extra:(t,i,s)=>{let r=Fr(t);yo(s,0);let o=dn(t),a=an(t,["BUENO\u2026 OYES COSAS"],1.6,[0,2.35,-.3]),l=Ft(t,s,2,["\xBFHABR\xC9 APAGADO","LA PLANCHA?"],1.3,-.1,.62,{tail:"right"}),c=Ft(t,s,3,["TENGO EXAMEN DE MATES","Y NO HE ESTUDIADO"],1.6,.1,.62),h=G(e,"habre"),d=G(e,"tengo");return{update:(u,p,g)=>{r(u),o(u,s[0],g),ve(a,u,.05,h-.2,g),l(u,h-.1,99,g),c(u,d-.1,99,g)}}},c:[[0,1.75,4.4],[0,1.6,-.4],[0,1.75,3.9],[0,1.6,-.4]],range:3}));ee(19,(n,e)=>{let t=G(e,"por");return{amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"]],pose:i=>i.pose({armL:[12,8],armR:[150,20]})}),...$a()],extra:(i,s,r)=>{let o=Fr(i);yo(r,0);let a=dn(i),l=Ft(i,r,3,["ME DUELE EL PIE"],1.2,.2,.55),c=Ft(i,r,2,["\xBFPOR QU\xC9 ME HA CONTESTADO","SOLO CON UN EMOJI? \u{1F642}"],1.8,.3,.62);return{update:(h,d,u)=>{o(h),a(h,r[0],u),l(h,.05,99,u),c(h,t-.1,99,u)}}},c:[[0,1.75,4.4],[0,1.6,-.4],[0,1.75,3.9],[0,1.6,-.4]],range:3}});ee(20,(n,e)=>{let t=G(e,"todo"),i=["\xBFY MI PELO?","\xBFLLEGO TARDE?","\xBFY MI CARA?","\xBFHE DICHO ALGO MAL?"];return{amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"],[t,"happy"]],pose:s=>s.pose({armL:[12,8],armR:[150,20]})}),...$a()],extra:(s,r,o)=>{let a=Fr(s);yo(o,0);let l=i.map((h,d)=>Ft(s,o,d+1,[h],1,d===0?.55:d===3?-.55:0,.6,d<2?{}:{tail:"right"})),c=Be(s,e,[[["NADIE PIENSA EN TU GRANO"],.1,"w",[0,2.3,-.3],2],[["CADA UNO PIENSA EN S\xCD MISMO"],t-.1,"p",[0,.8,.3],2.3,1]]);return{update:(h,d,u)=>{a(h),l.forEach((p,g)=>p(h,t+g*.3,99,u)),c(h,u)}}},c:[[0,1.8,4.8],[0,1.6,-.4],[0,1.8,4.3],[0,1.6,-.4]],range:3}});ee(21,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"look"]]}),Ze(0,{x:-1.4,z:-.8,eyes:[[0,"look"]]}),Ze(2,{x:1.4,z:-.8,eyes:[[0,"look"]]})],extra:t=>{let i=an(t,["NO TE PASA SOLO A TI"],2,[0,2.35,-.5]);return{update:(s,r,o)=>ve(i,s,.1,99,o)}},c:[[0,1.6,4],[0,1.5,-.5],[0,1.6,3.6],[0,1.5,-.5]],range:3}));var vo=(n={})=>uo({x:-.6,z:-.4,...n});ee(22,(n,e)=>{let t=G(e,"gilovich"),i=G(e,"cornell"),s=G(e,"experimento");return{amb:"lab",fov:32,atores:[vo({eyes:[[0,"look"],[s,"happy"]],pose:(r,o)=>o>s?fo(r):r.pose()}),ns(1,{x:.8,z:-.5,eyes:[[0,"lookl"]]}),ns(3,{x:1.7,z:-.9,eyes:[[0,"lookl"]]})],extra:r=>{let o=Be(r,e,[[["THOMAS GILOVICH"],t-.3,"b",[-.6,2.25,-.3],1.6],[["UNIVERSIDAD DE CORNELL"],i-.4,"w",[0,2.35,-.3],2],[["UN EXPERIMENTO BUEN\xCDSIMO"],s-.1,"y",[0,2.35,-.3],2.2,1]]);return{update:(a,l,c)=>o(a,c)}},c:[[0,1.7,3.9],[.2,1.5,-.5],[0,1.7,3.4],[.2,1.5,-.5]],range:3}});ee(23,(n,e)=>{let t=G(e,"camiseta"),i=G(e,"cantante");return{amb:"lab",fov:32,atores:[Ze(5,{x:0,z:-.3,eyes:[[0,"look"],[t,"flat"],[i,"sad"]]}),vo({x:-1.4,eyes:[[0,"happy"]],pose:fo})],extra:(s,r,o)=>{let a=Vh("\u266A\u266A","#E8667F",.3);a.position.set(0,-.28,.17),o[0].torso.add(a);let l=Ot(s,["CAMISETA VERGONZOSA"],2,[.3,2.25,-.1],Gh),c=an(s,["CON UN CANTANTE PASADO DE MODA"],2.4,[0,.55,.4]),h=GE(s),d=new P;return{update:(u,p,g)=>{a.visible=u>t-.2,ve(l,u,t-.2,99,g),ve(c,u,i-.5,99,g),o[0].torso.getWorldPosition(d),h(u,d,g,u>i)}}},c:[[0,1.6,3.6],[-.2,1.35,-.4],[0,1.6,3.1],[-.1,1.35,-.4]],range:3}});ee(24,(n,e)=>({...ui(),atores:[Ze(5,{x:0,z:-.2,eyes:[[0,"sad"]],move:t=>[Jt(-2.8,-.4,at(0,n*.8,t)),0,-.2],pose:(t,i)=>i<n*.8?t.walk(i*2):t.pose()}),...[1,2.2,-2].map((t,i)=>Ze(i*2+1,{x:t,z:-1.6,eyes:[[0,"look"]]}))],extra:(t,i,s)=>{let r=Vh("\u266A\u266A","#E8667F",.3);r.position.set(0,-.28,.17),s[0].torso.add(r),mo(t,[-2,1,2.2],-1.2),jE(t);let o=an(t,["UNA CLASE LLENA DE GENTE"],2.2,[0,2.4,-.6]);return{update:(a,l,c)=>ve(o,a,.1,99,c)}},c:[[0,1.75,4.2],[0,1.4,-.8],[0,1.75,3.7],[0,1.4,-.8]],range:3}));ee(25,(n,e)=>{let t=G(e,"cuantos");return{amb:"lab",fov:32,atores:[Ze(5,{x:.6,z:-.4,eyes:[[0,"lookl"],[t+1,"sad"]]}),vo({eyes:[[0,"look"]],talk:[[t-.2,n]]})],extra:(i,s,r)=>{let o=Vh("\u266A\u266A","#E8667F",.3);o.position.set(0,-.28,.17),r[0].torso.add(o);let a=Fs(i,["\xBFCU\xC1NTOS CREES","QUE SE HAN FIJADO?"],1.5,[-.6,2.25,-.3],56);return{update:(l,c,h)=>ve(a,l,t-.2,99,h)}},c:[[0,1.65,3.4],[0,1.45,-.4],[0,1.65,3],[0,1.45,-.4]],range:3}});ee(26,(n,e)=>{let t=G(e,"mitad");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=jn(i,[[`LO QUE
CRE\xCDAN`,.8,"#E8667F"],["",0,"#5FA0D8"]],2.6,[0,1.5,-.4],{title:"\xBFCU\xC1NTOS SE FIJAN?"}),r=Ot(i,["LA MITAD"],1,[-.65,2.35,-.2],wr);return{update:(o,a,l)=>ve(r,o,t-.3,99,l)}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});ee(27,(n,e)=>{let t=G(e,"uno");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=jn(i,[[`LO QUE
CRE\xCDAN`,.8,"#E8667F"],["",0,"#5FA0D8"]],2.6,[0,1.5,-.4],{title:"\xBFCU\xC1NTOS SE FIJAN?"}),r=jn(i,[[`LO QUE
CRE\xCDAN`,.5*1.6,"#E8667F"],[`EN
REALIDAD`,.25*1.6,"#5FA0D8"]],2.6,[0,1.5,-.39],{title:"\xBFCU\xC1NTOS SE FIJAN?"}),o=Ot(i,["LA MITAD"],1,[-.65,2.35,-.2],wr),a=Ot(i,["1 DE CADA 4"],1.1,[.65,2.35,-.2],Ds);return{update:(l,c,h)=>{r.visible=l>t-.5,s.visible=!r.visible,ve(o,l,0,99,h),ve(a,l,t,99,h)}}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});ee(28,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"wide"]]})],extra:(t,i,s)=>{Wh(t,0,-.5),Ls(s[0]);let r=di(t,["EFECTO FOCO"],1.5,[0,2.3,-.4]);return{update:(o,a,l)=>ve(r,o,.2,99,l)}},c:[[0,1.7,3.8],[0,1.5,-.5],[0,1.7,3.4],[0,1.5,-.5]],range:3,look:{exposure:.8,vig:.7}}));ee(29,(n,e)=>{let t=G(e,"mira");return{amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.4,eyes:[[0,"sad"]],move:i=>[Jt(-.8,.3,i/n),0,-.4],pose:(i,s)=>i.walk(s*1.6)}),Ze(0,{x:-2,z:-1.2,eyes:[[0,"look"],[t,"look"]]}),Ze(4,{x:2,z:-1.2,eyes:[[0,"lookl"]]}),Ze(6,{x:-1,z:-1.8,eyes:[[0,"look"]]}),Ze(2,{x:1.1,z:-1.8,eyes:[[0,"lookl"]]})],extra:(i,s,r)=>{let[o,a]=Wh(i,0,-.4);Ls(r[0]);let l=new P,c=Be(i,e,[[["UN FOCO ENCIMA"],"foco","y",[0,2.4,-.4],1.5],[["TODOS TE MIRAN\u2026 \xBFNO?"],t-.4,"r",[0,2.4,-.4],1.9,1]]);return{update:(h,d,u)=>{r[0].root.getWorldPosition(l),o.position.x=l.x,o.target.position.x=l.x,a.position.x=l.x,c(h,u)}}},c:[[0,1.7,4.4],[0,1.4,-.6],[0,1.7,3.9],[0,1.4,-.6]],range:3,look:{exposure:.85,vig:.65}}});ee(30,(n,e)=>{let t=["\xBFY MI PELO?","\xBFME VEO RARO?","\xBFY MI CARA?","\xBFHE DICHO ALGO MAL?"],i=[-1.9,-.65,.65,1.9];return{amb:"gris",fov:32,k:1,atores:i.map((s,r)=>Ze(r+1,{x:s,z:-.6,eyes:[[0,r%2?"lookl":"flat"]]})),extra:(s,r,o)=>{i.forEach(c=>Wh(s,c,-.6));let a=t.map((c,h)=>Ft(s,o,h,[c],1,0,.62,{size:56})),l=di(s,["CADA UNO CON SU PROPIO FOCO"],2.4,[0,.8,.4]);return{update:(c,h,d)=>{a.forEach((u,p)=>u(c,.1+p*.25,99,d)),ve(l,c,G(e,"propio")-.3,99,d)}}},c:[[0,1.8,4.8],[0,1.6,-.6],[0,1.8,4.4],[0,1.6,-.6]],range:3,look:{exposure:.85,vig:.6}}});ee(31,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"],[.7,"happy"]],pose:(t,i)=>t.pose({armL:[i<.7?150:12,130],armR:[(i<.7,150),i<.7?130:20]})})],extra:(t,i,s)=>{let r=Fr(t),o=Zh(s[0]);return Ls(s[0]),{update:(a,l,c)=>{r(a),o.visible=a<.6}}},c:[[0,1.7,2.8],[0,1.6,-.3],[0,1.7,2.5],[0,1.6,-.3]],range:2.5}));var as=(n,e)=>{let t=Df(n,e);return t.position.z+=.04,t},gy=n=>{mo(n,[-2.2,-1,1,2.2],.6),as(n,["LENGUA","Exposici\xF3n oral"])},Ey=(n=()=>[[0,"look"]])=>[-2.2,-1,1,2.2].map((e,t)=>Ze([0,2,4,6][t],{x:e,z:.9,y:-.25,eyes:n(t),pose:i=>Is(i)}));ee(32,(n,e)=>{let t=G(e,"exponer"),i=G(e,"delante");return{...ui(),atores:[Ce({x:0,z:-1.6,eyes:[[0,"look"],[t,"wide"]],pose:(s,r)=>Is(s)}),...Ey(s=>[[0,s%2?"lookl":"look"],[i,"look"]])],extra:s=>{mo(s,[0],-1.3),gy(s);let r=Be(s,e,[[["PRIMERA HORA \xB7 LENGUA"],.05,"w",[0,2.6,-1.4],2],[["TE TOCA EXPONER"],t-.2,"r",[0,2.6,-1.4],1.7],[["DELANTE DE TODA LA CLASE"],i,"y",[0,2.6,-1.4],2.2,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.9,4.4],[0,1.4,-1.2],[0,1.9,3.9],[0,1.4,-1.2]],range:3}});var Qa=(n={})=>Ce({x:0,z:-1.9,...n}),$h=[[0,1.6,1.4],[0,1.45,-1.9],[0,1.6,1],[0,1.5,-1.9]];ee(33,(n,e)=>{let t=G(e,"tiemblan"),i=G(e,"cara");return{...ui(),atores:[Qa({eyes:[[0,"wide"],[i,"sad"]],pose:(s,r)=>Ir(s,r,r>t?1:.2)})],extra:(s,r,o)=>{as(s,["LENGUA","Exposici\xF3n oral"]);let a=br(o[0]),l=Be(s,e,[[["TE TIEMBLAN LAS PIERNAS"],t-.1,"w",[0,.85,-1.4],2],[["LA CARA ARDIENDO"],i-.1,"r",[0,2.4,-1.8],1.6,1]]);return{update:(c,h,d)=>{a(at(i-.2,i+.6,c)*.7),l(c,d)}}},c:$h,range:2.5}});ee(34,(n,e)=>{let t=G(e,"nervioso");return{...ui(),atores:[Qa({eyes:[[0,"sad"]],pose:(i,s)=>Ir(i,s,.6)})],extra:(i,s,r)=>{as(i,["LENGUA","Exposici\xF3n oral"]);let o=br(r[0]),a=ry(i,6),l=new P,c=Be(i,e,[[["TODO EL MUNDO LO VE"],t-.5,"r",[0,2.4,-1.8],1.8],[["EN LA VOZ"],"voz","w",[-.85,2,-1.8],1,1],[["EN LAS MANOS"],"manos","w",[.9,1.5,-1.8],1.2,1],[["EN LA FRENTE"],"frente","w",[.9,2,-1.8],1.2,1]]);return{update:(h,d,u)=>{o(.25),r[0].head.getWorldPosition(l),a(h,[l.x,l.y+.1,l.z,.25]),c(h,u)}}},c:[[0,1.65,1.9],[0,1.55,-1.9],[0,1.65,1.5],[0,1.55,-1.9]],range:2.5}});ee(35,(n,e)=>{let t=G(e,"escuchas");return{...ui(),atores:[Qa({eyes:[[0,"look"],[t,"wide"]],talk:[[0,t]],pose:kh})],extra:(i,s,r)=>{as(i,["LENGUA","Exposici\xF3n oral"]);let o=br(r[0]),a=dn(i),l=di(i,["Y ESCUCHAS\u2026"],1.2,[0,2.4,-1.8]);return{update:(c,h,d)=>{o(.2),a(c,r[0],d,at(t-.2,t+.3,c)),ve(l,c,t,99,d)}}},c:$h,range:2.5}});var Hf=[-1.8,-.6,.6,1.8],zf=(n=()=>[[0,"look"]])=>Hf.map((e,t)=>Ze([0,2,4,6][t],{x:e,z:-.9,y:-.25,eyes:n(t),pose:i=>Is(i)})),kf=[[0,1.75,4],[0,1.35,-.9],[0,1.75,3.6],[0,1.35,-.9]],Gf=n=>{mo(n,Hf,-.45),as(n,["LENGUA","Exposici\xF3n oral"])};ee(36,(n,e)=>{let t=G(e,"ojala");return{...ui(),atores:zf(i=>[[0,i===1||i===2?"happy":"look"]]),extra:(i,s,r)=>{Gf(i);let o=Ft(i,r,1,["QU\xC9 BIEN LO EXPLICA"],1.4,-.2,.62,{tail:"right"}),a=Ft(i,r,2,["OJAL\xC1 YO HABLARA","AS\xCD DE TRANQUILO"],1.5,.25,.66);return{update:(l,c,h)=>{o(l,.05,99,h),a(l,t-.1,99,h)}}},c:kf,range:3}});ee(37,(n,e)=>{let t=G(e,"tengo");return{...ui(),atores:zf(i=>[[0,i===0?"flat":i===3?"sad":"look"]]),extra:(i,s,r)=>{Gf(i);let o=Ft(i,r,0,["\xBFESTO ENTRA","EN EL EXAMEN?"],1.3,.35,.66),a=Ft(i,r,3,["TENGO HAMBRE"],1.2,-.3,.62,{tail:"right"});return{update:(l,c,h)=>{o(l,.05,99,h),a(l,t-.1,99,h)}}},c:kf,range:3}});ee(38,(n,e)=>{let t=G(e,"tu"),i=G(e,"corazon");return{...ui(),atores:[Qa({eyes:[[0,"wide"],[i,"sad"]],pose:(s,r)=>Ir(s,r,.3)})],extra:(s,r,o)=>{as(s,["LENGUA","Exposici\xF3n oral"]);let a=Rr(s,.3),l=new P,c=Be(s,e,[[["\xBFTRANQUILO?"],.05,"b",[-.75,2,-1.8],1,1],[["\xBFT\xDA?"],t,"b",[.75,2,-1.8],.75,1],[["EL CORAZ\xD3N A 200"],i,"r",[0,1.05,-1.6],1.4,1]]);return{update:(h,d,u)=>{o[0].torso.getWorldPosition(l),a.position.set(l.x+.08,l.y+.05,l.z+.2),a.visible=h>i-.2,a.scale.setScalar(xr(h,200)*1.2),Fn(a,u),c(h,u)}}},c:$h,range:2.5}});ee(39,(n,e)=>{let t=G(e,"equipo");return{amb:"lab",fov:32,atores:[vo({x:-.9,eyes:[[0,"happy"]],pose:zh}),ns(1,{x:.3,z:-.5,eyes:[[0,"happy"]]}),uo({x:1.3,z:-.6,eyes:[[0,"look"]]})],extra:i=>{let s=Be(i,e,[[["OTRO EXPERIMENTO"],.05,"y",[0,2.35,-.4],1.7,1],[["DEL MISMO EQUIPO"],t-.2,"w",[0,.8,.2],1.6,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.7,3.9],[0,1.5,-.5],[0,1.7,3.4],[0,1.5,-.5]],range:3}});var yy=(n=()=>[[0,"look"]])=>[-1.8,-.6,.6,1.8].map((e,t)=>Ze([1,3,5,7][t],{x:e,z:.4,y:-.25,eyes:n(t),pose:i=>Is(i)})),vy=(n={})=>Ze(4,{x:0,z:-1.6,...n});qa(40,["pidieron"],[(n,e)=>({amb:"lab",fov:32,atores:[vo({x:-1.1,eyes:[[0,"look"]]}),uo({x:0,z:-.5,eyes:[[0,"happy"]]}),ns(4,{x:1.1,z:-.5,eyes:[[0,"look"]]})],extra:t=>{let i=Ot(t,["GILOVICH \xB7 SAVITSKY \xB7 MEDVEC"],2.6,[0,.75,.2],Ds);return{update:(s,r,o)=>ve(i,s,G(e,"gilovich")-.2,99,o)}},c:[[0,1.7,3.9],[0,1.45,-.5],[0,1.7,3.5],[0,1.45,-.5]],range:3}),(n,e)=>({...ui(),atores:[vy({eyes:[[0,"wide"]],talk:[[G(e,"discurso"),n]],pose:(t,i)=>Ir(t,i,.5)}),...yy()],extra:t=>{dy(t,0,-1.25),as(t,["EXPERIMENTO","Hablar en p\xFAblico"]);let i=Be(t,e,[[["VOLUNTARIOS"],"voluntarios","w",[0,2.5,-1.4],1.4],[["UN DISCURSO"],"discurso","y",[0,2.5,-1.4],1.4],[["DELANTE DE OTRAS PERSONAS"],"delante","w",[0,2.5,-1.4],2.2,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,2.1,4.6],[0,1.35,-1.4],[0,2.05,4.2],[0,1.35,-1.4]],range:3})]);ee(41,(n,e)=>{let t=G(e,"cuanto");return{amb:"lab",fov:32,atores:[Ze(4,{x:.6,z:-.4,eyes:[[0,"lookl"],[t+1.2,"sad"]]}),ns(1,{x:-.6,z:-.4,eyes:[[0,"look"]],talk:[[t-.2,n]]})],extra:i=>{let s=Fs(i,["\xBFSE TE NOTABAN","LOS NERVIOS?"],1.4,[-.7,2.25,-.3],56);return{update:(r,o,a)=>ve(s,r,t-.3,99,a)}},c:[[0,1.65,3.4],[0,1.45,-.4],[0,1.65,3],[0,1.45,-.4]],range:3}});var Oh=n=>[[`LO QUE
CRE\xCDAN`,.9,"#E8667F"],[`LO QUE VIO
EL P\xDABLICO`,n?.42:0,"#5FA0D8"]];ee(42,(n,e)=>{let t=G(e,"muchisimo");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=jn(i,Oh(!1),2.6,[0,1.5,-.4],{title:"\xBFCU\xC1NTO SE NOTABAN LOS NERVIOS?"}),r=Ot(i,["\xA1MUCH\xCDSIMO!"],1.1,[-.65,2.38,-.2],wr);return{update:(o,a,l)=>ve(r,o,t-.2,99,l)}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});ee(43,(n,e)=>{let t=G(e,"tranquilos");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=jn(i,Oh(!1),2.6,[0,1.5,-.4],{title:"\xBFCU\xC1NTO SE NOTABAN LOS NERVIOS?"}),r=jn(i,Oh(!0),2.6,[0,1.5,-.39],{title:"\xBFCU\xC1NTO SE NOTABAN LOS NERVIOS?"}),o=Ot(i,["\xA1MUCH\xCDSIMO!"],1.1,[-.65,2.38,-.2],wr),a=Ot(i,["M\xC1S TRANQUILOS"],1.3,[.65,2.38,-.2],Ds);return{update:(l,c,h)=>{r.visible=l>G(e,"publico")+.3,s.visible=!r.visible,ve(o,l,0,99,h),ve(a,l,t-.2,99,h)}}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});var Qh=(n,e,t)=>{let i=it("#FF4A6A",.9,0);n.add(i);let s=Rr(n,.26),r=new P;return(o,a,l)=>{e[t].torso.getWorldPosition(r),i.position.set(r.x,r.y,r.z+.2),i.material.opacity=a*(.55+.25*Math.sin(o*9)),s.position.set(r.x,r.y+.02,r.z+.25),s.visible=a>.05,s.scale.setScalar(xr(o,170)*(.5+.5*a)),Fn(s,l)}};ee(44,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"wide"]],pose:(t,i)=>Ir(t,i,.3)})],extra:(t,i,s)=>{let r=Qh(t,s,0),o=di(t,["ILUSI\xD3N DE TRANSPARENCIA"],2.3,[0,2.35,-.4]);return{update:(a,l,c)=>{r(a,1,c),ve(o,a,G(e,"ilusion")-.2,99,c)}}},c:[[0,1.6,3.8],[0,1.55,-.5],[0,1.6,3.3],[0,1.55,-.5]],range:3,look:{exposure:.85,vig:.65}}));ee(45,(n,e)=>{let t=G(e,"cristal"),i=G(e,"ve");return{amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"sad"]],pose:(s,r)=>Ir(s,r,.5)}),Ze(1,{x:-1.6,z:-1,eyes:[[0,"look"]]}),Ze(4,{x:1.6,z:-1,eyes:[[0,"lookl"]]})],extra:(s,r,o)=>{let a=Qh(s,o,0),l=Be(s,e,[[["NERVIOS DE CRISTAL"],t-.4,"p",[0,2.35,-.4],1.8],[["\xBFTODO EL MUNDO LOS VE?"],i-.6,"r",[0,2.35,-.4],2,1]]);return{update:(c,h,d)=>{a(c,1,d),l(c,d)}}},c:[[0,1.65,4.2],[0,1.5,-.6],[0,1.65,3.8],[0,1.5,-.6]],range:3,look:{exposure:.85,vig:.65}}});ee(46,(n,e)=>({amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"look"],[1.2,"happy"]]}),Ze(1,{x:-1.6,z:-1,eyes:[[0,"flat"]]}),Ze(4,{x:1.6,z:-1,eyes:[[0,"happy"]]})],extra:(t,i,s)=>{let r=Qh(t,s,0),o=an(t,["POR FUERA: CASI NADA"],1.9,[0,2.35,-.4]);return{update:(a,l,c)=>{r(a,1-at(.2,1,a),c),ve(o,a,.3,99,c)}}},c:[[0,1.65,4.2],[0,1.5,-.6],[0,1.65,3.8],[0,1.5,-.6]],range:3}));ee(47,(n,e)=>{let t=G(e,"sientas"),i=G(e,"respiras");return{...ui(),atores:[Ce({x:0,z:-1.6,eyes:[[0,"look"],[t+.5,"flat"],[i,"shut"]],move:s=>s<t+.5?[Jt(-1.4,0,at(0,t+.5,s)),0,-1.6]:[0,-.25,-1.6],pose:(s,r)=>r<t+.5?s.walk(r*2):(Is(s),s.pose({armL:[8,6],armR:[8,6],bob:r>i?Math.sin((r-i)*2)*.02:0}))})],extra:(s,r,o)=>{mo(s,[0],-1.3),as(s,["LENGUA","Exposici\xF3n oral"]);let a=Be(s,e,[[["FIN DE LA EXPOSICI\xD3N"],.05,"y",[0,2.3,-1.4],1.8],[["RESPIRAS"],i-.1,"b",[0,2.3,-1.4],1.1,1]]),l=is(s,8,"#BFE0FF");return{update:(c,h,d)=>{a(c,d),l(c,[0,1.65,-1.3,.5],c>i?1:0)}}},c:[[0,1.7,2.4],[0,1.25,-1.5],[0,1.65,2],[0,1.3,-1.5]],range:2.5}});var qt={amb:"parque",fov:30},pi=(n={})=>Pr(Za,.45,-.5,n);ee(48,(n,e)=>{let t=G(e,"peligrosa");return{...qt,atores:[Ce({x:-1.4,z:.2,eyes:[[0,"look"],[t,"wide"]]}),pi({eyes:[[0,"happy"]]}),Ze(2,{x:2.6,z:-2,eyes:[[0,"happy"]]}),Ze(5,{x:-3.2,z:-2.4,eyes:[[0,"look"]]})],extra:i=>{ln(i),Un(i);let s=Be(i,e,[[["RECREO"],.05,"y",[-1.4,2.25,.2],1],[["\xA1PELIGRO!"],t-.3,"r",[-1.4,2.25,.2],1,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-.5,1.8,4.6],[-.4,1.2,-.4],[-.5,1.75,4.1],[-.4,1.2,-.4]],range:4}});ee(49,(n,e)=>{let t=G(e,"crush");return{...qt,atores:[pi({eyes:[[0,"happy"]],pose:(i,s)=>i.pose({head:Math.sin(s*2)*4})})],extra:i=>{ln(i),Un(i);let s=Rr(i,.25);s.position.set(1.05,1.5,-.4);let r=Be(i,e,[[["EL BANCO DEL FONDO"],"banco","w",[.45,1.95,-.4],1.4],[["TU CRUSH"],t-.1,"p",[.45,1.95,-.4],.9,1]]);return{update:(o,a,l)=>{s.visible=o>t,s.scale.setScalar(xr(o,140)),Fn(s,l),r(o,l)}}},c:[[.45,1.5,2.4],[.45,1.3,-.5],[.45,1.48,2],[.45,1.3,-.5]],range:2.5}});ee(50,(n,e)=>{let t=G(e,"acercas"),i=G(e,"escuchar");return{...qt,atores:[Ce({x:-2,z:.1,eyes:[[0,"flat"],[t,"smug"]],move:s=>[Jt(-2.6,-1.3,at(t,i,s)),0,.1],pose:(s,r)=>r>t&&r<i?s.walk(r*1.2):s.pose({lean:8})}),pi({eyes:[[0,"happy"]]})],extra:(s,r,o)=>{ln(s),Un(s);let a=Be(s,e,[[["NO DEBER\xCDAS"],"deberias","r",[-1.6,2.2,.1],1.2],[["UN POQUITO"],"poquito","w",[-1.6,2.2,.1],1.1],[["SOLO PARA ESCUCHAR"],i-.2,"p",[-1.4,2.2,.1],1.7,1]]),l=dn(s);return{update:(c,h,d)=>{a(c,d),l(c,o[0],d,at(i-.2,i+.3,c)*.7)}}},c:[[-.8,1.7,4.2],[-.7,1.25,-.3],[-.8,1.65,3.7],[-.7,1.25,-.3]],range:3.5}});ee(51,(n,e)=>{let t=G(e,"mira"),i=G(e,"oyes");return{...qt,atores:[Ce({x:-.5,z:.3,eyes:[[0,"flat"],[t+.2,"wide"]],move:s=>[Jt(-1.6,.6,at(0,n,s)),0,.3],pose:(s,r)=>s.walk(r*1.4)}),pi({eyes:[[0,"down"],[t,"lookl"]]})],extra:(s,r,o)=>{ln(s),Un(s);let a=dn(s),l=di(s,["Y OYES\u2026"],1,[.45,2,-.4]);return{update:(c,h,d)=>{a(c,o[0],d,at(i-.2,i+.2,c)),ve(l,c,i,99,d)}}},c:[[0,1.6,3.6],[0,1.25,-.3],[0,1.6,3.2],[0,1.25,-.3]],range:3}});var Kh=[[.45,1.4,1.9],[.45,1.3,-.5],[.45,1.38,1.6],[.45,1.3,-.5]];ee(52,(n,e)=>({...qt,atores:[pi({eyes:[[0,"wide"],[G(e,"tengo"),"down"]],pose:(t,i)=>t.pose({armL:[60,70],armR:[60,70],head:-4})})],extra:t=>{ln(t),Un(t);let i=Li(t,e,[[["AY, NO\u2026"],.05,[-.2,1.72,-.4],.9],[["VIENE HACIA AQU\xCD"],"viene",[-.2,1.72,-.4],1.1],[["\xBFTENGO ALGO","EN LOS DIENTES?"],"tengo",[-.2,1.72,-.4],1.1]],An);return{update:(s,r,o)=>i(s,o)}},c:Kh,range:2.5,look:Cr}));ee(53,(n,e)=>{let t=G(e,"pongo");return{...qt,atores:[pi({eyes:[[0,"shut"],[t,"wide"]],pose:(i,s)=>i.pose({armL:[150,140],armR:[150,140],head:Math.sin(s*10)*4})})],extra:(i,s,r)=>{ln(i),Un(i);let o=br(r[0]),a=Li(i,e,[[["QUE NO ME HABLE,","QUE NO ME HABLE\u2026"],.05,[-.2,1.72,-.4],1.1],[["\xA1QUE ME PONGO ROJA!"],t-.3,[-.2,1.72,-.4],1.1]],An);return{update:(l,c,h)=>{a(l,h),o(at(t-.3,t+.4,l)*.25)}}},c:Kh,range:2.5,look:Cr}});ee(54,(n,e)=>({...qt,atores:[Ce({x:.4,z:.3,eyes:[[0,"wide"]],pose:t=>t.pose({armL:[30,8],armR:[30,8],lean:-6})})],extra:(t,i,s)=>{ln(t),Un(t);let r=Ot(t,["\xA1EN SECO!"],1,[.4,2.1,.3],Ds);return{update:(o,a,l)=>{ve(r,o,.05,99,l),Ff(l,o<.4?.03:0,o)}}},c:[[.4,1.6,2.9],[.4,1.5,.3],[.4,1.6,2.6],[.4,1.55,.3]],range:2.5}));ee(55,(n,e)=>{let t=G(e,"ella"),i=G(e,"ti");return{...qt,atores:[Ce({x:.4,z:.3,eyes:[[0,"wide"],[i,"heart"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[r>i?90:12,r>i?140:8]})})],extra:(s,r,o)=>{ln(s),Un(s);let a=Be(s,e,[[["\xBFSE PONE ROJA?"],.05,"r",[.4,2.15,.3],1.3,1],[["\xBFELLA?"],t,"w",[-.3,1.6,.4],.85,1],[["\xBFPOR TI?"],i-.1,"p",[1.1,1.6,.4],.95,1]]);return{update:(l,c,h)=>a(l,h)}},c:[[.4,1.6,3],[.4,1.55,.3],[.4,1.6,2.6],[.4,1.6,.3]],range:2.5}});ee(56,(n,e)=>{let t=G(e,"rapido"),i=G(e,"sonrisa");return{...qt,atores:[Ce({x:.4,z:.3,eyes:[[0,"happy"]],move:s=>[Jt(.4,3.4,at(t-.3,n,s)),0,.3],pose:(s,r)=>r>t-.3?s.walk(r*2.6):s.pose()}),pi({eyes:[[0,"lookl"]]})],extra:(s,r,o)=>{ln(s),Un(s);let a=Be(s,e,[[["\xA1R\xC1PIDO!"],t-.2,"y",[1.2,2.2,.2],.9],[["QUE NO SE TE NOTE LA SONRISA"],i-.9,"w",[.9,2.2,.2],2.3,1]]);return{update:(l,c,h)=>a(l,h)}},c:[[.8,1.7,4.2],[.9,1.25,-.2],[1,1.65,3.8],[1.2,1.25,-.2]],range:3.5}});ee(57,(n,e)=>{let t=G(e,"mal");return{amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"look"],[G(e,"duda"),"sad"]],pose:i=>i.pose({armL:[12,8],armR:[120,140],head:8})})],extra:i=>{let s=qh(i,"?",.6,[.75,2.1,-.5]),r=Be(i,e,[[["UNA DUDA"],"duda","w",[-.8,2.2,-.4],1],[["\xBFY SI LO HAS ENTENDIDO MAL?"],t-.9,"p",[0,.85,.1],2.3,1]]);return{update:(o,a,l)=>{ve(s,o,G(e,"duda"),99,l),r(o,l)}}},c:[[0,1.6,3.6],[0,1.55,-.5],[0,1.6,3.2],[0,1.55,-.5]],range:3}});ee(58,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"sad"]],pose:t=>t.pose({armL:[12,8],armR:[12,8],head:-8})})],extra:t=>{let i=Li(t,e,[[["LO HE HECHO FATAL"],"fatal",[-1.1,2.3,-.5],1.4],[["HE DICHO UNA TONTER\xCDA"],"tonteria",[1.1,2,-.5],1.6,{tail:"right"}],[["SEGURO QUE","LE HE CA\xCDDO MAL"],"caido",[-1,1.45,-.5],1.4]],{...rs,keep:!0});return{update:(s,r,o)=>i(s,o)}},c:[[0,1.65,4],[0,1.6,-.5],[0,1.65,3.6],[0,1.6,-.5]],range:3}));ee(59,(n,e)=>{let t=[-2,-.7,.7,2];return{amb:"plaza",fov:32,atores:t.map((i,s)=>Ze([0,1,6,4][s],{x:i,z:-.6-s%2*.3,eyes:[[0,"sad"]]})),extra:(i,s,r)=>{let o=t.map((l,c)=>Ft(i,r,c,["\xBFLE HE CA\xCDDO MAL?"],1.3,0,.62,{...rs})),a=an(i,["A CASI TODO EL MUNDO"],2,[0,.8,.4]);return{update:(l,c,h)=>{o.forEach((d,u)=>d(l,.1+u*.3,99,h)),ve(a,l,G(e,"todo")-.3,99,h)}}},c:[[0,1.8,4.8],[0,1.6,-.6],[0,1.8,4.4],[0,1.6,-.6]],range:3}});var Bh=(n={},e={})=>[Ze(2,{x:-.7,z:-.4,eyes:[[0,"look"]],pose:kh,...n}),Ze(5,{x:.7,z:-.4,eyes:[[0,"lookl"]],pose:zE,...e})];qa(60,["juntaron"],[(n,e)=>({amb:"lab",fov:32,atores:[ns(0,{x:-.6,z:-.4,eyes:[[0,"happy"]],pose:fo}),ns(2,{x:.8,z:-.6,eyes:[[0,"lookl"]]}),uo({x:1.7,z:-.9,eyes:[[0,"lookl"]]})],extra:t=>{let i=Be(t,e,[[["ERICA BOOTHBY"],G(e,"erica")-.2,"b",[-.6,2.25,-.3],1.4],[["YALE Y OTRAS UNIVERSIDADES"],G(e,"yale")-.4,"w",[0,2.35,-.3],2.2,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.7,3.9],[.2,1.5,-.5],[0,1.7,3.4],[.2,1.5,-.5]],range:3}),(n,e)=>({amb:"lab",fov:32,atores:Bh(),extra:t=>{let i=xs(.35,3);i.position.set(0,2.5,-1.3),t.add(i);let s=Be(t,e,[[["DESCONOCIDOS"],.05,"w",[0,2.1,-.3],1.4],[["CHARLAN UN RATO"],"charlaran","b",[0,2.1,-.3],1.5,1]]);return{update:(r,o,a)=>{i.rotation.z=-r*.6,s(r,a)}}},c:[[0,1.65,3.6],[0,1.5,-.4],[0,1.65,3.1],[0,1.5,-.4]],range:3})]);ee(61,(n,e)=>{let t=G(e,"cuanto"),i=G(e,"cuanto",t+.3);return{amb:"lab",fov:30,atores:[Ze(2,{x:-.9,z:-.4,eyes:[[0,"look"],[i,"sad"]]}),Ze(5,{x:.9,z:-.4,eyes:[[0,"lookl"],[i,"sad"]]})],extra:(s,r,o)=>{let a=Be(s,e,[[["DOS PREGUNTAS"],.1,"y",[0,2.35,-.4],1.5],[["1. \xBFCU\xC1NTO TE HA GUSTADO?"],t-.2,"w",[0,2.35,-.4],2.3],[["2. \xBFCU\xC1NTO LE HAS GUSTADO T\xDA?"],i-.2,"p",[0,2.35,-.4],2.5,1]]),l=Ft(s,o,0,["\xBF?"],.6,.35,.5,{size:90}),c=Ft(s,o,1,["\xBF?"],.6,-.35,.5,{size:90,tail:"right"});return{update:(h,d,u)=>{a(h,u),l(h,i+.6,99,u),c(h,i+.8,99,u)}}},c:[[0,1.7,3.8],[0,1.6,-.4],[0,1.7,3.3],[0,1.6,-.4]],range:3}});ee(62,(n,e)=>{let t=G(e,"gustaba"),i=G(e,"mucho");return{amb:"gris",fov:30,k:1,atores:[],extra:s=>{let r=jn(s,[[`LO QUE
CRE\xCDAN`,.45,"#5FA0D8"],["",0,"#E8667F"]],2.6,[0,1.5,-.4],{title:"\xBFCU\xC1NTO LE GUSTABAS?"}),o=jn(s,[[`LO QUE
CRE\xCDAN`,.45,"#5FA0D8"],[`LA
VERDAD`,.85,"#E8667F"]],2.6,[0,1.5,-.39],{title:"\xBFCU\xC1NTO LE GUSTABAS?"}),a=an(s,["UNA Y OTRA VEZ"],1.5,[0,2.45,-.2]),l=Ot(s,["\xA1MUCHO M\xC1S!"],1,[.65,2.38,-.2],wr);return{update:(c,h,d)=>{o.visible=c>t-.2,r.visible=!o.visible,ve(a,c,.1,t-.3,d),ve(l,c,i-.2,99,d)}}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});qa(63,["incluso"],[(n,e)=>({amb:"lab",fov:32,atores:Bh({eyes:[[0,"happy"]]},{eyes:[[0,"happy"]]}),extra:t=>{let i=xs(.35,5);i.position.set(0,2.5,-1.3),t.add(i);let s=Ot(t,["5 MINUTOS"],1.1,[0,2.05,-.3],Ds);return{update:(r,o,a)=>{i.rotation.z=-r*.8,ve(s,r,G(e,"cinco")-.2,99,a)}}},c:[[0,1.65,3.6],[0,1.5,-.4],[0,1.65,3.1],[0,1.5,-.4]],range:3}),(n,e)=>({amb:"residencia",fov:32,atores:Bh({eyes:[[0,"happy"]]},{eyes:[[0,"look"]]}),extra:t=>{let i=Be(t,e,[[["COMPA\xD1EROS DE RESIDENCIA"],.05,"w",[0,2.3,-.3],2.2],[["DURANTE MESES"],"meses","y",[0,2.3,-.3],1.5,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[0,1.65,3.8],[0,1.45,-.4],[0,1.65,3.3],[0,1.45,-.4]],range:3})]);qa(64,["despues"],[(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:-1.4,z:-.5,eyes:[[0,"sad"]]}),Za({x:1.4,z:-.5,eyes:[[0,"sad"]]})],extra:t=>{let i=new H(new _e(.6,3),new qe({color:"#1E2230"}));i.rotation.x=-Math.PI/2,i.position.set(0,.01,-.5),t.add(i);let s=di(t,["LA BRECHA DE AGRADO"],2.1,[0,2.35,-.4]);return{update:(r,o,a)=>ve(s,r,G(e,"brecha")-.2,99,a)}},c:[[0,1.6,4.4],[0,1.5,-.5],[0,1.6,3.9],[0,1.5,-.5]],range:3.5}),(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"sad"]],pose:t=>t.pose({armL:[12,8],armR:[140,130],head:-6})})],extra:t=>{let i=Li(t,e,[[["\xBFPOR QU\xC9 DIJE ESO?"],.1,[-1.1,2.3,-.5],1.4],[["ME RE\xCD RAR\xCDSIMO"],.9,[1.1,2,-.5],1.4,{tail:"right"}],[["HABL\xC9 DEMASIADO"],1.7,[-1,1.5,-.5],1.4]],{...rs,keep:!0}),s=an(t,["REPASAS TODOS TUS FALLOS"],2.1,[0,.8,.1]);return{update:(r,o,a)=>{i(r,a),ve(s,r,G(e,"fallos")-.4,99,a)}}},c:[[0,1.65,4],[0,1.6,-.5],[0,1.65,3.6],[0,1.6,-.5]],range:3})]);ee(65,(n,e)=>{let t=G(e,"bien");return{amb:"gris",fov:30,k:1,atores:[Za({x:.3,z:-.5,eyes:[[0,"look"],[t-.6,"happy"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[12,8],head:Math.sin(s*3)*5})})],extra:(i,s,r)=>{let o=an(i,["\u2717 TUS FALLOS"],1.2,[-.9,2.15,-.4]),a=Ft(i,r,0,["\xA1QU\xC9 BIEN ME LO","ESTOY PASANDO!"],1.5,-.7,.55,{...An,tail:"right"}),l=is(i,5,"#FFD8E0");return{update:(c,h,d)=>{ve(o,c,.2,t-.8,d),a(c,t-.6,99,d),l(c,[.3,1.5,-.4,.7],c>t-.6?1:0)}}},c:[[0,1.6,3.4],[0,1.55,-.5],[0,1.6,3],[0,1.55,-.5]],range:3}});var Ka=n=>{ln(n),wf(n,-2.6,-2.6),wf(n,2.6,-2.6)},Ay=(n={})=>[Ze(1,{x:-.6,z:-.8,eyes:[[0,"look"]]}),Ze(5,{x:.4,z:-.8,eyes:[[0,"look"]]}),Ce({x:1.4,z:-.8,eyes:[[0,"look"]],...n})];ee(66,(n,e)=>{let t=G(e,"golpe");return{...qt,atores:[...Ay({eyes:[[0,"look"],[t,"sad"]]}),fi({x:-1.6,z:.2,eyes:[[0,"smug"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[40+Math.sin(s*2.2*Math.PI)*15,20]})})],extra:(i,s,r)=>{Ka(i);let o=pf();i.add(o);let a=Be(i,e,[[["TERCERA HORA"],.05,"w",[0,2.4,-.6],1.4],[["EDUCACI\xD3N F\xCDSICA"],"educacion","y",[0,2.4,-.6],1.7],[["EL PRIMER GOLPE DEL D\xCDA"],t-.5,"r",[0,2.4,-.6],2.1,1]]);return{update:(l,c,h)=>{let d=Ya(r[3]);o.position.set(d.x,oy(l),d.z+.15),a(l,h)}}},c:[[0,1.7,4.4],[0,1.35,-.5],[0,1.7,3.9],[0,1.35,-.5]],range:3.5}});ee(67,(n,e)=>{let t=G(e,"dani"),i=G(e,"ultimo"),s=G(e,"pensar");return{...qt,atores:[Ze(1,{x:-.6,z:-.8,eyes:[[0,"look"]],move:r=>[r<t?-.6:Jt(-.6,-2.4,at(t,t+1.2,r)),0,-.8],pose:(r,o)=>o>t&&o<t+1.2?r.walk(o*2):r.pose()}),Ze(5,{x:.4,z:-.8,eyes:[[0,"look"]],move:r=>[r<t+1.5?.4:Jt(.4,3.4,at(t+1.5,t+2.7,r)),0,-.8],pose:(r,o)=>o>t+1.5&&o<t+2.7?r.walk(o*2):r.pose()}),Ce({x:1.4,z:-.8,eyes:[[0,"look"],[i,"sad"]]}),fi({x:-1.6,z:.2,eyes:[[0,"look"],[i,"flat"]],pose:(r,o)=>o>i-.3?fo(r):r.pose()})],extra:(r,o,a)=>{Ka(r);let l=dn(r),c=Be(r,e,[[["ELEGIR EQUIPOS"],.05,"w",[0,2.4,-.6],1.5],[["DANI \xB7 TU MEJOR AMIGO"],t-.1,"b",[-1.6,2.2,.2],1.8],[["EL \xDALTIMO"],i-.2,"r",[1.4,2.2,-.8],1,1]]);return{update:(h,d,u)=>{c(h,u),l(h,a[2],u,at(s-.2,s+.3,h))}}},c:[[0,1.7,4.4],[0,1.35,-.5],[0,1.7,3.9],[0,1.35,-.5]],range:3.5}});ee(68,(n,e)=>({...qt,atores:[fi({x:0,z:-.4,eyes:[[0,"flat"]],pose:t=>t.pose({armL:[12,8],armR:[12,8],head:-6})})],extra:(t,i,s)=>{Ka(t);let r=Ft(t,s,0,["UF. ES MAL\xCDSIMO JUGANDO."],1.7,.55,.55);return{update:(o,a,l)=>r(o,0,99,l)}},c:[[0,1.65,3],[.3,1.6,-.4],[0,1.65,2.6],[.3,1.6,-.4]],range:2.5}));ee(69,(n,e)=>{let t=G(e,"verdad"),i=G(e,"mirarle");return{...qt,atores:[Ce({x:0,z:-.4,eyes:[[0,"sad"],[i-.6,"lookl"]],pose:(s,r)=>s.pose({armL:[12,8],armR:[12,8],head:r>i-.6?14:-6})})],extra:s=>{Ka(s);let r=ay(s,.55);r.g.position.set(.9,2,-.4);let o=Be(s,e,[[["TE DUELE"],.05,"r",[-.85,2.1,-.4],.9],[["DE VERDAD"],t-.1,"r",[-.85,2.1,-.4],1],[["NO QUIERES NI MIRARLE"],i-.9,"w",[0,.85,.1],2,1]]);return{update:(a,l,c)=>{r.set(.3+at(t-.2,t+.5,a)*.5),o(a,c)}}},c:[[0,1.65,3.2],[0,1.5,-.4],[0,1.65,2.8],[0,1.5,-.4]],range:2.5}});var jh=n=>{uy(n),Uf(n,0,-.5,2.2)},Vf=(n={})=>Pr(Ce,-.45,-.5,n),Wf=(n={})=>Pr(fi,.45,-.5,n),Xf=[[0,1.6,3],[0,1.25,-.5],[0,1.55,2.5],[0,1.25,-.5]];ee(70,(n,e)=>{let t=G(e,"sienta"),i=G(e,"pensar");return{...Jh,atores:[Vf({eyes:[[0,"sad"],[i,"wide"]]}),fi({x:.45,z:-.5,eyes:[[0,"look"]],move:s=>s<t+.3?[Jt(2.8,.45,at(0,t+.3,s)),0,-.3]:[.45,Nf,-.5],pose:(s,r)=>r<t+.3?s.walk(r*2):Is(s)})],extra:(s,r,o)=>{jh(s);let a=dn(s),l=Be(s,e,[[["EL VESTUARIO"],"vestuario","w",[0,2.15,-.4],1.3],[["OTRA COSA\u2026"],i+.2,"p",[0,2.15,-.4],1.2,1]]);return{update:(c,h,d)=>{l(c,d),a(c,o[0],d,at(i-.2,i+.3,c))}}},c:Xf,range:3}});ee(71,(n,e)=>{let t=G(e,"padres");return{...Jh,atores:[Wf({eyes:[[0,"down"],[t,"sad"]],pose:i=>i.pose({head:-8})})],extra:(i,s,r)=>{jh(i);let o=Ft(i,r,0,["OJAL\xC1 SUPIERA QUE ES LA \xDANICA","PERSONA CON LA QUE PUEDO","HABLAR DE LO DE MIS PADRES"],1.6,-.55,.5,{tail:"right"}),a=iy(i,"casa",.55,[1.05,1.55,-.4]);return{update:(l,c,h)=>{o(l,0,99,h),ve(a,l,t-.2,99,h)}}},c:[[.45,1.45,2.2],[.45,1.3,-.5],[.45,1.45,1.9],[.45,1.3,-.5]],range:2.5}});ee(72,(n,e)=>{let t=G(e,"ata");return{...Jh,atores:[Vf({eyes:[[0,"look"]],pose:i=>i.pose({head:-10})}),Wf({eyes:[[0,"down"]],pose:(i,s)=>s>t-.3?py(i,s):i.pose()})],extra:i=>{jh(i);let s=Be(i,e,[[["TE QUEDAS MIR\xC1NDOLE"],.05,"w",[-.45,1.95,-.4],1.6],[["COMO SI NADA"],G(e,"nada")-.4,"y",[.45,1.95,-.4],1.2,1]]);return{update:(r,o,a)=>s(r,a)}},c:Xf,range:3}});ee(73,(n,e)=>{let t=G(e,"juegas"),i=G(e,"importante");return{amb:"gris",fov:30,k:1,atores:[fi({x:0,z:-.5,eyes:[[0,"look"],[t,"flat"],[i-.5,"happy"]]})],extra:s=>{let r=Di(s,["JUEGA FATAL","AL F\xDATBOL"],1.3,[-1.1,2.15,-.5],{...rs}),o=Di(s,["LA PERSONA M\xC1S","IMPORTANTE DE MI VIDA"],1.5,[1.15,2.15,-.5],{...An,tail:"right"}),a=an(s,["ENTIENDES ALGO"],1.4,[0,.85,.1]),l=Rr(s,.22);return l.position.set(1.15,1.6,-.4),{update:(c,h,d)=>{ve(a,c,.1,t-.3,d),ve(r,c,t-.2,99,d),ve(o,c,i-.6,99,d),l.visible=c>i,l.scale.setScalar(xr(c,110)),Fn(l,d)}}},c:[[0,1.65,4],[0,1.6,-.5],[0,1.65,3.6],[0,1.6,-.5]],range:3}});ee(74,(n,e)=>{let t=G(e,"gente");return{amb:"gris",fov:30,k:1,atores:[fi({x:0,z:-.5,eyes:[[0,"happy"]]})],extra:i=>{let s=Di(i,["JUEGA FATAL","AL F\xDATBOL"],1.3,[-1.1,2.15,-.5],{...rs}),r=Di(i,["LA PERSONA M\xC1S","IMPORTANTE DE MI VIDA"],1.5,[1.15,2.15,-.5],{...An,tail:"right"}),o=Be(i,e,[[["LAS DOS COSAS A LA VEZ"],.05,"y",[0,.85,.1],2],[["NADIE PIENSA DE TI UNA SOLA COSA"],t-.2,"p",[0,.85,.1],2.6,1]]);return{update:(a,l,c)=>{ve(s,a,0,99,c),ve(r,a,0,99,c),o(a,c)}}},c:[[0,1.65,3.8],[0,1.6,-.5],[0,1.65,4.2],[0,1.6,-.5]],range:3}});var ed={amb:"barrio",fov:30},qf=(n,e,t,i)=>s=>[Jt(n,e,at(t,i,s)),0,-.3],_y=["EXPLICA MUY BIEN","ES BUEN AMIGO","ME HACE RE\xCDR","QU\xC9 BUENA LETRA","HUELE BIEN","ES MAJO"];ee(75,(n,e)=>({...ed,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"]],move:qf(-1.4,.8,0,n),pose:(t,i)=>t.walk(i*1.6)})],extra:t=>{If(t);let i=Be(t,e,[[["SALIDA DEL INSTITUTO"],.05,"y",[0,2.3,-.4],1.9],[["VAS ANDANDO A CASA"],"andando","w",[0,2.3,-.4],1.8,1]]);return{update:(s,r,o)=>i(s,o)}},c:[[-.6,1.7,3.8],[-.5,1.4,-.3],[.4,1.7,3.4],[.4,1.4,-.3]],range:3,look:ss}));ee(76,(n,e)=>{let t=G(e,"bonitos"),i=[[-1.4,2.3],[1.4,2.25],[-1.6,1.6],[1.6,1.55],[-.9,2.75],[.9,2.7]];return{...ed,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"],[G(e,"raro"),"flat"],[t,"happy"]],move:qf(-.5,.5,0,n),pose:(s,r)=>s.walk(r*1.4)})],extra:s=>{let r=_y.map((c,h)=>Di(s,[c],1.3,[i[h][0],i[h][1],-.5],{...An,size:56,tail:i[h][0]>0?"right":"left"})),o=an(s,["ALGO RARO"],1,[0,2.3,-.4]),a=di(s,["PENSAMIENTOS BONITOS SOBRE TI"],2.5,[0,.8,.2]),l=is(s,10,"#FFC8D8");return{update:(c,h,d)=>{ve(o,c,G(e,"raro")-.3,t-1.5,d),r.forEach((u,p)=>ve(u,c,t-1.2+p*.25,99,d)),ve(a,c,t-.3,99,d),l(c,[0,1.8,-.4,1.4],c>t?1:0)}}},c:[[0,1.75,4.6],[0,1.6,-.4],[0,1.75,4.2],[0,1.6,-.4]],range:3,look:ss}});ee(77,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"happy"]]})],extra:t=>{let i=Li(t,e,[[["EXPLICA MUY BIEN"],"explicas",[-1.2,2.3,-.5],1.4],[["ES BUEN AMIGO"],"amigo",[1.2,2.3,-.5],1.3,{tail:"right"}],[["ME HACE RE\xCDR"],"reir",[-1.25,1.55,-.5],1.3],[["QU\xC9 BUENA LETRA"],"letra",[1.25,1.55,-.5],1.4,{tail:"right"}]],{...An,keep:!0});return{update:(s,r,o)=>i(s,o)}},c:[[0,1.65,4.2],[0,1.6,-.5],[0,1.65,3.8],[0,1.6,-.5]],range:3}));ee(78,(n,e)=>{let t=G(e,"quien");return{amb:"pasillo",fov:30,atores:[Ce({x:-.5,z:-.3,eyes:[[0,"happy"],[t-.5,"lookl"]],pose:(i,s)=>i.pose({armL:[12,8],armR:[s<t-.5?100:12,s<t-.5?140:8],head:s>t-.5?12:0})}),Ze(3,{x:1.4,z:-1.6,eyes:[[0,"happy"]]}),Ze(7,{x:2.2,z:-1.9,eyes:[[0,"look"]]})],extra:i=>{let s=Di(i,["HUELE BIEN\u2026"],1.2,[1.6,2.4,-1.4],{...An,tail:"right"}),r=qh(i,"?",.45,[1.8,1.8,-1.2]),o=Be(i,e,[[["EN EL PASILLO"],"pasillo","w",[-.5,2.2,-.3],1.3],[["\xBFQUI\xC9N?"],t-.2,"p",[-.5,2.2,-.3],.8,1]]);return{update:(a,l,c)=>{ve(s,a,.05,99,c),ve(r,a,t-.2,99,c),o(a,c)}}},c:[[.2,1.75,4],[.2,1.45,-.8],[.2,1.75,3.6],[.2,1.45,-.8]],range:3}});ee(79,(n,e)=>{let t=G(e,"vez"),i=G(e,"vida");return{...ed,atores:[Ce({x:0,z:-.3,eyes:[[0,"look"],[t,"sad"]],pose:s=>s.pose({armL:[12,8],armR:[12,8],head:-6})})],extra:s=>{let r=Be(s,e,[[["NADIE TE LO HA DICHO"],.05,"w",[0,2.3,-.4],1.9],[["NI UNA SOLA VEZ"],t-.5,"r",[0,2.3,-.4],1.5],[["EN TODA TU VIDA"],i-.4,"r",[0,2.3,-.4],1.5,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.65,3.4],[0,1.5,-.3],[0,1.65,3],[0,1.5,-.3]],range:3,look:ss}});ee(80,(n,e)=>{let t=G(e,"xuan"),i=G(e,"chicago");return{amb:"lab",fov:32,atores:[ns(2,{x:-.7,z:-.4,eyes:[[0,"look"],[t,"happy"]]}),uo({x:.7,z:-.4,eyes:[[0,"look"],[t+1,"happy"]],pose:(s,r)=>r>i?fo(s):s.pose()})],extra:s=>{let r=Be(s,e,[[["\xBFPOR QU\xC9?"],.05,"p",[0,2.35,-.3],1],[["XUAN ZHAO \xB7 NICHOLAS EPLEY"],t-.2,"b",[0,2.35,-.3],2.4],[["UNIVERSIDAD DE CHICAGO"],i-.5,"w",[0,2.35,-.3],2.1,1]]);return{update:(o,a,l)=>r(o,l)}},c:[[0,1.7,3.9],[0,1.5,-.4],[0,1.7,3.4],[0,1.5,-.4]],range:3}});ee(81,(n,e)=>{let t=G(e,"cumplido"),i=G(e,"adivinaran");return{amb:"gris",fov:30,k:1,atores:[Ze(4,{x:-.7,z:-.4,eyes:[[0,"down"],[i,"look"]],pose:(s,r)=>s.pose({armL:[60,70],armR:[60+Math.sin(r*14)*4,70]})}),Ze(6,{x:1.3,z:-.8,eyes:[[0,"look"]]})],extra:(s,r,o)=>{let a=Le(Pf(["ERES MUY","BUENA PERSONA"],64),.75,.56);a.renderOrder=5,s.add(a);let l=Ft(s,o,0,["\xBFC\xD3MO SE VA A SENTIR?"],1.5,.3,.6,rs),c=Be(s,e,[[["CIENTOS DE PERSONAS"],.05,"w",[0,.8,.3],1.8],[["UN CUMPLIDO SINCERO"],t-.2,"y",[0,.8,.3],1.8,1]]);return{update:(h,d,u)=>{let p=Ya(o[0]);a.position.set(p.x-.12,p.y+.1,p.z+.12),Fn(a,u),l(h,i,99,u),c(h,u)}}},c:[[0,1.65,3.8],[.2,1.5,-.5],[0,1.65,3.4],[.2,1.5,-.5]],range:3}});var Hh=n=>[[`LO QUE
CRE\xCDAN`,.4,"#5FA0D8"],[`LO QUE
SINTI\xD3`,n?.88:0,"#E8667F"]];ee(82,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{jn(t,Hh(!1),2.6,[0,1.5,-.4],{title:"\xBFC\xD3MO SE SENTIR\xCDA?"});let i=Ot(t,["SE EQUIVOCABAN HACIA ABAJO"],2.3,[0,2.42,-.2],Ds);return{update:(s,r,o)=>ve(i,s,.3,99,o)}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}));ee(83,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ze(4,{x:0,z:-.5,eyes:[[0,"sad"]],pose:t=>t.pose({armL:[12,8],armR:[60,70],head:-6})})],extra:(t,i,s)=>{let r=Le(Pf(["ERES MUY","BUENA PERSONA"],64),.6,.45);r.renderOrder=5,t.add(r),r.position.set(.45,1.05,-.2);let o=Li(t,e,[[["DAR\xC1 VERG\xDCENZA"],"verguenza",[-1.15,2.25,-.5],1.3],[["SONAR\xC1 RARO"],"raro",[1.15,2.2,-.5],1.2,{tail:"right"}],[["NO LE DAR\xC1","IMPORTANCIA"],"importancia",[-1.1,1.5,-.5],1.3]],{...rs,keep:!0});return{update:(a,l,c)=>{Fn(r,c),o(a,c)}}},c:[[0,1.65,4],[0,1.6,-.5],[0,1.65,3.6],[0,1.6,-.5]],range:3}));ee(84,(n,e)=>{let t=G(e,"mejor");return{amb:"gris",fov:30,k:1,atores:[],extra:i=>{let s=jn(i,Hh(!1),2.6,[0,1.5,-.4],{title:"\xBFC\xD3MO SE SENTIR\xCDA?"}),r=jn(i,Hh(!0),2.6,[0,1.5,-.39],{title:"\xBFC\xD3MO SE SENTIR\xCDA?"}),o=Ot(i,["\xA1MUCHO MEJOR!"],1.2,[.65,2.42,-.2],wr);return{update:(a,l,c)=>{r.visible=a>t-.6,s.visible=!r.visible,ve(o,a,t-.2,99,c)}}},c:[[0,1.6,3.6],[0,1.6,-.4],[0,1.6,3.2],[0,1.6,-.4]],range:3,blur:4}});ee(85,(n,e)=>{let t=G(e,"bonitas"),i=G(e,"callamos"),s=G(e,"nada"),r=[-2,-.7,.7,2],o=["\xA1QU\xC9 GRACIOSO ES!","ME ENCANTA SU RISA","QU\xC9 BIEN DIBUJA","ES MUY VALIENTE"];return{amb:"plaza",fov:32,atores:r.map((a,l)=>Ze([0,1,6,5][l],{x:a,z:-.6-l%2*.3,eyes:[[0,"happy"],[i,"flat"]]})),extra:(a,l,c)=>{let h=o.map((u,p)=>Ft(a,c,p,[u],1.25,p===0?.3:p===3?-.3:0,.62,An)),d=Be(a,e,[[["TODOS PENSAMOS COSAS BONITAS"],t-.6,"p",[0,.8,.4],2.6],[["Y NOS LAS CALLAMOS"],i-.3,"r",[0,.8,.4],2.3],[['"NO VA A SERVIR DE NADA"'],s-1.2,"w",[0,.8,.4],2.2,1]]);return{update:(u,p,g)=>{h.forEach((E,m)=>E(u,t-.6+m*.2,i,g)),d(u,g)}}},c:[[0,1.8,4.8],[0,1.6,-.6],[0,1.8,4.4],[0,1.6,-.6]],range:3}});ee(86,(n,e)=>{let t=G(e,"oyes");return{...ei,atores:[Ce({x:-.9,z:-.4,eyes:[[0,"look"]],move:i=>[Jt(-3,-.9,at(0,1.8,i)),0,-.4],pose:(i,s)=>s<1.8?i.walk(s*2):i.pose()}),os({eyes:[[0,"look"]],pose:Dr})],extra:(i,s,r)=>{ti(i,!1);let o=Eo(i,r,1),a=dn(i),l=Be(i,e,[[["LLEGAS A CASA"],.05,"w",[-.9,2.15,-.4],1.3],[["OTRA VEZ EN LA COCINA"],"otra","y",[.6,2.15,-.6],1.8,1]]);return{update:(c,h,d)=>{o(),l(c,d),a(c,r[0],d,at(t-.2,t+.3,c))}}},c:[[0,1.65,3.6],[0,1.4,-.5],[0,1.65,3.2],[0,1.4,-.5]],range:3,look:ss}});ee(87,(n,e)=>{let t=G(e,"ganas");return{...ei,atores:[os({eyes:[[0,"happy"]],pose:Dr})],extra:(i,s,r)=>{ti(i,!1);let o=Eo(i,r,0),a=Li(i,e,[[["HOY VIENE M\xC1S CONTENTO"],.05,[-.25,2,-.5],1.6],[["QU\xC9 GANAS TENGO DE","QUE ME CUENTE ALGO"],t-.4,[-.25,2,-.5],1.6]],{...An,tail:"right"});return{update:(l,c,h)=>{o(),a(l,h)}}},c:go,range:2.5,look:ss}});ee(88,(n,e)=>({...ei,atores:[os({eyes:[[0,"look"],[G(e,"pesada")-.3,"sad"]],pose:Dr})],extra:(t,i,s)=>{ti(t,!1);let r=Eo(t,s,0),o=Ft(t,s,0,["PERO NO LE PREGUNTO,","QUE LUEGO DICE","QUE SOY PESADA"],1.5,-.6,.45,{...An,tail:"right"});return{update:(a,l,c)=>{r(),o(a,0,99,c)}}},c:go,range:2.5,look:ss}));var My=(n={})=>Pr(Ce,-.5,-.2,n),Yf=(n={})=>Pr(Yh,.5,-.2,n),Sy=[[0,1.6,3],[0,1.2,-.2],[0,1.55,2.6],[0,1.2,-.2]];ee(89,(n,e)=>{let t=G(e,"cuentas"),i=G(e,"rie");return{...ei,atores:[My({eyes:[[0,"happy"]],talk:[[t,i]],pose:(s,r)=>r>t&&r<i?kh(s,r):s.pose()}),Yf({eyes:[[0,"look"],[i,"happy"]],pose:(s,r)=>r>i?my(s,r):s.pose()})],extra:s=>{ti(s);let r=Be(s,e,[[["LO DE LA EXPOSICI\xD3N"],t+.3,"w",[-.5,1.85,-.2],1.5],[["SE R\xCDE"],i-.1,"y",[.5,1.85,-.2],.8,1]]);return{update:(o,a,l)=>r(o,l)}},c:Sy,range:3,look:ss}});ee(90,(n,e)=>{let t=G(e,"ojala");return{...ei,atores:[Yf({x:.5,eyes:[[0,"happy"]],pose:(i,s)=>i.pose({head:Math.sin(s*2)*4})})],extra:(i,s,r)=>{ti(i),WE(i,[.5,2.2,.6],3,5);let o=Ft(i,r,0,["OJAL\xC1 ESTO","DURARA SIEMPRE"],1.2,-.5,.45,{...An,tail:"right"}),a=di(i,["POR DENTRO"],1,[.5,1.05,.5]),l=is(i,6,"#FFE0B0");return{update:(c,h,d)=>{ve(a,c,.1,t-.2,d),o(c,t-.2,99,d),l(c,[.5,1.6,-.2,.6],c>t?1:0)}}},c:[[.5,1.45,2.1],[.5,1.3,-.2],[.5,1.45,1.8],[.5,1.3,-.2]],range:2.5,look:ss}});ee(91,(n,e)=>({amb:"gris",fov:30,k:1,atores:[],extra:t=>{let i=xs(.85,12);i.position.set(0,1.6,-.8),t.add(i);let s=Ot(t,["23:55"],1.2,[0,2.6,-.5],{bg:"#1E2230",fg:"#F2C14E",size:96,w:420}),r=KE(t,[0,.75,-.3],"QUEDAN 5 MINUTOS",1.6);return{update:(o,a,l)=>{i.rotation.z=-.05,ve(s,o,.05,99,l),ve(r,o,.6,99,l)}}},c:[[0,1.7,4.4],[0,1.65,-.5],[0,1.7,4],[0,1.65,-.5]],range:3,look:Ja}));var td=[[-1,1.9,2.8],[-1.1,1.1,-1],[-1,1.8,2.3],[-1.1,1.1,-1]];ee(92,(n,e)=>{let t=G(e,"quedan");return{...Xh,fov:30,atores:[po(Ce,{x:-.7,z:-1,y:.97,eyes:[[0,"look"]]})],extra:(i,s,r)=>{let o=dn(i),a=Be(i,e,[[["MIRANDO EL TECHO"],.05,"w",[-.6,2,-.8],1.5],[["5 MINUTOS DE PODER"],t-.2,"p",[-.6,2,-.8],1.7,1]]);return{update:(l,c,h)=>{o(l,r[0],h,.4),a(l,h)}}},c:td,range:2.5,look:Ja}});ee(93,(n,e)=>({...Xh,fov:30,atores:[po(Ce,{x:-.7,z:-1,y:.97,eyes:[[0,"look"],[G(e,"miedo"),"sad"]]})],extra:t=>{let i=Ot(t,["TEN\xCDAS MIEDO DE LO QUE IBAS A O\xCDR"],2.2,[-.6,2,-.8],sy);return{update:(s,r,o)=>ve(i,s,G(e,"miedo")-.4,99,o)}},c:td,range:2.5,look:Ja}));ee(94,(n,e)=>({amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"sad"]],pose:t=>t.pose({armL:[60,70],armR:[60,70],head:-8})})],extra:t=>{let i=Li(t,e,[[["SE R\xCDEN DE TI"],"rie",[-1.15,2.25,-.5],1.2],[["TE CRITICAN"],"critica",[1.15,2.15,-.5],1.1,{tail:"right"}],[["NADIE TE SOPORTA"],"soporta",[-1.1,1.5,-.5],1.3]],{...ly,keep:!0});return{update:(s,r,o)=>i(s,o)}},c:[[0,1.65,4],[0,1.6,-.5],[0,1.65,3.6],[0,1.6,-.5]],range:3,look:{exposure:.8,vig:.7}}));ee(95,(n,e)=>{let t=[-2,-.7,.7,2],i=["\xBFY MI PIE?","TENGO SUE\xD1O","\xBFQU\xC9 CENO?","\xBFY EL EXAMEN?"];return{amb:"gris",fov:32,k:1,atores:t.map((s,r)=>Ze([1,3,5,7][r],{x:s,z:-.6,eyes:[[0,r%2?"flat":"look"]]})),extra:(s,r,o)=>{let a=i.map((c,h)=>Ft(s,o,h,[c],1.05,h===0?.3:h===3?-.3:0,.62,{size:56})),l=an(s,["LA MAYOR\xCDA NI PENSABA EN TI"],2.4,[0,.8,.4]);return{update:(c,h,d)=>{a.forEach((u,p)=>u(c,.2+p*.2,99,d)),ve(l,c,G(e,"mayoria")-.3,99,d)}}},c:[[0,1.8,4.8],[0,1.6,-.6],[0,1.8,4.4],[0,1.6,-.6]],range:3}});ee(96,(n,e)=>{let t=G(e,"mejores"),i=G(e,"dices");return{amb:"gris",fov:32,k:1,atores:[Ce({x:0,z:-.4,eyes:[[0,"look"],[t,"happy"]]}),Yh({x:-1.7,z:-.9,eyes:[[0,"happy"]]}),fi({x:1.7,z:-.9,eyes:[[0,"happy"]]}),Za({x:-.9,z:-1.5,eyes:[[0,"happy"]]})],extra:(s,r,o)=>{let a=Ft(s,o,1,["\xA1QU\xC9 BIEN LO HACE!"],1.2,.2,.6,An),l=Ft(s,o,2,["MI MEJOR AMIGO"],1.2,-.2,.6,{...An,tail:"right"}),c=Ft(s,o,3,["\u2665"],.7,.25,.55,{...An,size:90}),h=Be(s,e,[[["MUCHO MEJORES"],t-.3,"p",[0,.8,.4],1.6],[["DE LO QUE T\xDA TE DICES"],i-.6,"w",[0,.8,.4],2,1]]);return{update:(d,u,p)=>{a(d,.1,99,p),l(d,.4,99,p),c(d,.7,99,p),h(d,p)}}},c:[[0,1.75,4.6],[0,1.55,-.7],[0,1.75,4.1],[0,1.55,-.7]],range:3}});ee(97,(n,e)=>{let t=G(e,"silencio"),i=G(e,"acabo");return{...Xh,fov:30,atores:[po(Ce,{x:-.7,z:-1,y:.97,eyes:[[0,"look"],[i,"shut"]]})],extra:(s,r,o)=>{let a=dn(s),l=Be(s,e,[[["00:00"],.05,"y",[-.6,2,-.8],.9],[["SILENCIO"],t-.1,"w",[-.6,2,-.8],1],[["SE ACAB\xD3"],i-.2,"p",[-.6,2,-.8],1,1]]);return{update:(c,h,d)=>{a(c,o[0],d,.5*(1-at(t-.3,t+.4,c))),l(c,d)}}},c:td,range:2.5,look:Ja}});ee(98,(n,e)=>{let t=G(e,"nada"),i=G(e,"mundo"),s=G(e,"sin");return{...qt,atores:[Ce({x:-.8,z:.2,eyes:[[0,"look"],[t,"flat"],[s,"happy"]]}),Ze(2,{x:1.2,z:-1.2,eyes:[[0,"happy"]]}),Ze(5,{x:2.2,z:-1.6,eyes:[[0,"look"]]}),Ze(0,{x:-2.6,z:-1.8,eyes:[[0,"happy"]]})],extra:(r,o,a)=>{ln(r),Un(r);let l=[1,2,3].map(d=>qh(r,"?",.35,[0,0,0],"#C8CED6")),c=new P,h=Be(r,e,[[["MARTES \xB7 RECREO"],.05,"y",[-.8,2.2,.2],1.4],[["YA NO OYES NADA"],t-.3,"w",[-.8,2.2,.2],1.5],[["COMO TODO EL MUNDO"],i-.5,"w",[-.8,2.2,.2],1.7,1]]);return{update:(d,u,p)=>{l.forEach((g,E)=>{a[E+1].head.getWorldPosition(c),g.position.set(c.x,c.y+.45,c.z),ve(g,d,s+E*.2,99,p)}),h(d,p)}}},c:[[-.3,1.75,4.4],[-.2,1.25,-.5],[-.3,1.7,3.9],[-.2,1.25,-.5]],range:3.5}});ee(99,(n,e)=>{let t=G(e,"bonito");return{...qt,atores:[Ce({x:0,z:.2,eyes:[[0,"look"],[t,"happy"]]})],extra:i=>{ln(i);let s=Be(i,e,[[["AHORA SABES UNA COSA"],.05,"w",[0,2.2,.2],1.8],[["LO BONITO CASI NUNCA SE DICE"],t-.3,"p",[0,2.2,.2],2.3,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[0,1.65,3.4],[0,1.5,.2],[0,1.65,3],[0,1.5,.2]],range:3}});ee(100,(n,e)=>({...qt,atores:[Ce({x:0,z:.2,eyes:[[0,"smug"]],pose:t=>t.pose({armL:[12,8],armR:[60,110]})})],extra:t=>{ln(t);let i=Ot(t,["DECIDES EMPEZAR T\xDA"],1.8,[0,2.15,.2],Lf),s=is(t,10,"#FFE27A");return{update:(r,o,a)=>{ve(i,r,G(e,"empezar")-.3,99,a),s(r,[0,1.5,.2,.7])}}},c:[[0,1.6,2.8],[0,1.5,.2],[0,1.6,2.4],[0,1.55,.2]],range:2.5}));ee(101,(n,e)=>{let t=G(e,"oye"),i=G(e,"siempre");return{...qt,atores:[Ce({x:-.6,z:-.3,eyes:[[0,"look"]],talk:[[t,n]],move:s=>[Jt(-2.4,-.6,at(0,t-.2,s)),0,-.3],pose:(s,r)=>r<t-.2?s.walk(r*2):s.pose({armL:[12,8],armR:[100,40]})}),fi({x:.6,z:-.3,eyes:[[0,"down"],[t,"look"]]})],extra:s=>{ln(s);let r=Fs(s,["OYE. QUE SEPAS QUE","ME PUEDES CONTAR LO QUE SEA"],1.8,[-.5,2.3,-.2],52),o=Fs(s,["SIEMPRE."],.9,[-.5,2.25,-.2],72);return{update:(a,l,c)=>{ve(r,a,t,i-.1,c),ve(o,a,i-.1,99,c)}}},c:[[0,1.7,3.6],[0,1.5,-.3],[0,1.7,3.2],[0,1.5,-.3]],range:3}});ee(102,(n,e)=>{let t=G(e,"sonrie"),i=G(e,"falta");return{...qt,atores:[fi({x:.3,z:-.3,eyes:[[0,"flat"],[t,"happy"]]})],extra:(s,r,o)=>{ln(s);let a=Be(s,e,[[["TE MIRA RARO"],.05,"w",[-.6,2.1,-.3],1.2],[["SONR\xCDE"],t-.1,"y",[-.6,2.1,-.3],.8],[["NO HACE FALTA"],i-.5,"p",[-.6,2.1,-.3],1.3,1]]),l=Rr(s,.2),c=new P;return{update:(h,d,u)=>{a(h,u),o[0].head.getWorldPosition(c),l.position.set(c.x+.5,c.y+.2,c.z),l.visible=h>i-.3,l.scale.setScalar(xr(h,90)),Fn(l,u)}}},c:[[0,1.65,3],[0,1.55,-.3],[0,1.65,2.6],[0,1.55,-.3]],range:2.5}});ee(103,(n,e)=>{let t=G(e,"vas");return{...qt,atores:[Ce({x:-1.6,z:.2,eyes:[[0,"shut"],[t-.3,"look"]],move:i=>[Jt(-2.2,-.9,at(t,n,i)),0,.2],pose:(i,s)=>s>t?i.walk(s*1.4):i.pose({bob:Math.sin(s*2.4)*.02})}),pi({eyes:[[0,"happy"]]})],extra:i=>{ln(i),Un(i);let s=Be(i,e,[[["RESPIRAS HONDO"],.05,"b",[-1.6,2.2,.2],1.4],[["HACIA EL BANCO DEL FONDO"],t-.2,"w",[-1,2.2,.2],2,1]]);return{update:(r,o,a)=>s(r,a)}},c:[[-.8,1.7,4.2],[-.6,1.25,-.3],[-.6,1.65,3.7],[-.5,1.25,-.3]],range:3.5}});ee(104,(n,e)=>{let t=G(e,"roja"),i=G(e,"necesitas");return{...qt,atores:[pi({eyes:[[0,"look"],[t,"happy"]],pose:(s,r)=>s.pose({head:r>t?-6:0})})],extra:(s,r,o)=>{ln(s),Un(s);let a=br(o[0]),l=Be(s,e,[[["TE VE LLEGAR"],.05,"w",[.45,1.95,-.4],1.2],[["SE PONE ROJA"],t-.1,"r",[.45,1.95,-.4],1.2],[["NO NECESITAS LEERLE LA MENTE"],i-.3,"p",[.45,1.95,-.4],2,1]]);return{update:(c,h,d)=>{a(at(t-.2,t+.6,c)*.15),l(c,d)}}},c:Kh,range:2.5}});var Ty=(n={})=>Pr(Ce,-.45,-.5,n);ee(105,(n,e)=>{let t=G(e,"me");return{...qt,atores:[Ty({eyes:[[0,"look"],[t,"happy"]],talk:[[0,n]]}),pi({eyes:[[0,"happy"],[t+.6,"heart"]],pose:(i,s)=>i.pose({armL:[s>t+.6?150:8,s>t+.6?140:6],armR:[s>t+.6?150:8,s>t+.6?140:6]})})],extra:(i,s,r)=>{ln(i),Un(i);let o=br(r[1]),a=Fs(i,["HOLA."],.7,[-.55,1.9,-.3],72),l=Fs(i,["ME GUSTA C\xD3MO TE R\xCDES."],1.4,[-.4,1.95,-.3],56),c=Rr(i,.25);return c.position.set(0,1.95,-.4),{update:(h,d,u)=>{ve(a,h,0,t-.1,u),ve(l,h,t-.1,99,u),o(.15),c.visible=h>t+.8,c.scale.setScalar(xr(h,120)),Fn(c,u)}}},c:[[0,1.6,3],[0,1.25,-.5],[0,1.55,2.5],[0,1.25,-.5]],range:3}});ee(106,(n,e)=>{let t=G(e,"harias"),i=G(e,"preferirias"),s=G(e,"leo");return{amb:"gris",fov:30,k:1,atores:[Ce({x:0,z:-.5,eyes:[[0,"look"],[t,"happy"],[i,"smug"],[s,"happy"]],pose:(r,o)=>o>s?zh(r,o):r.pose({armL:[12,8],armR:[o>t?90:12,o>t?120:8]})})],extra:(r,o,a)=>{let l=dn(r),c=Be(r,e,[[["\xBFY SI PUDIERAS ESCUCHAR","LO QUE PIENSAN DE TI?"].slice(0,1),.1,"w",[0,2.35,-.4],2.2],[["\xBFLO HAR\xCDAS?"],t-.2,"p",[0,2.35,-.4],1.3],[["\xBFO PREFERIR\xCDAS NO SABERLO?"],i-.2,"r",[0,2.35,-.4],2.3],[["TE LEO EN LOS COMENTARIOS"],s-.2,"y",[0,2.35,-.4],2.3,1]]),h=is(r,12,"#C8A8FF");return{update:(d,u,p)=>{l(d,a[0],p,d<s?.5:0),c(d,p),h(d,[0,1.6,-.4,1.2],d>s?1:0)}}},c:[[0,1.6,3.8],[0,1.55,-.5],[0,1.6,3.4],[0,1.55,-.5]],range:3,look:Cr}});function by(n){n.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(i=>{for(let s in i){let r=i[s];r&&r.isTexture&&r.dispose()}i.dispose()}),e.shadow&&e.shadow.map&&e.shadow.map.dispose()})}window.__hf=window.__hf||{};window.__hf.buildReady=window.__hf.buildReady||{};window.__hf.buildReady.film=(async()=>{await Promise.all(["900 40px Fraunces","700 40px Caveat","700 40px Inter","800 40px Inter","600 40px Inter","700 40px 'IBM Plex Mono'","600 40px 'IBM Plex Mono'"].map(r=>document.fonts.load(r))).catch(()=>{});let n=new Fa(document.getElementById("film3d")),e=-1,t=null,i=r=>{let o=Tr.findIndex(([,a,l])=>r>=a&&r<l);return o<0&&(o=Tr.length-1),o},s=n.render.bind(n);n.render=r=>{let o=i(r);if(o!==e){t&&(by(t.scene),n.r.renderLists.dispose()),window.__srv=1+o*7919;let[a,l,c]=Tr[o];t=a(l,c),n.shots=[t],e=o}s(r)},window.addEventListener("hf-seek",r=>n.render(r.detail.time)),n.render(0)})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
